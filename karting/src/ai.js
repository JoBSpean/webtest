// Соперники в гонке: едут по гоночной траектории, скорость — по профилю из
// реального сцепления (v = √(μ·g·R)) и тормозной способности класса.
// Используют ту же физику и ту же помощь руля, что и игрок.
import { clamp, wrapAngle, rng } from './util.js';
import { G, GEO, steerLimit } from './physics.js';

export function speedProfile(geom, cls, skill = 1) {
  const N = geom.N;
  const v = new Float32Array(N);
  const vmax = cls.vmaxKmh / 3.6;
  const mu = cls.mu * (cls.gears ? 0.72 : 0.75) * skill;
  for (let i = 0; i < N; i++) {
    let k = 0;
    for (let j = -5; j <= 6; j++) k = Math.max(k, Math.abs(geom.lineCurv[(i + j + N) % N]));
    v[i] = Math.min(vmax * 1.02, Math.sqrt((mu * G) / Math.max(k, 1e-4)));
  }
  // торможение: доступное замедление уменьшается, пока шины заняты поворотом
  const decel = (cls.frontBrakes ? 10 : 5.4) * (0.85 + 0.15 * skill);
  const latMax = mu * G;
  for (let rep = 0; rep < 2; rep++) {
    for (let i = N - 1; i >= 0; i--) {
      const j = (i + 1) % N;
      const nx = v[j];
      const kk = Math.abs(geom.lineCurv[i]);
      const use = Math.min(0.95, (nx * nx * kk) / latMax);
      const a = decel * Math.sqrt(1 - use * use);
      v[i] = Math.min(v[i], Math.sqrt(nx * nx + 2 * a * geom.ds));
    }
  }
  return v;
}

// руль по «чистому преследованию» с обратной связью по рысканию
export function pursuitSteer(k, tx, tz, assist = 1) {
  const u = Math.max(3, k.u);
  const course = Math.atan2(k.vx || Math.sin(k.h), k.vz || Math.cos(k.h));
  const dx = tx - k.x, dz = tz - k.z;
  const Ld = Math.hypot(dx, dz) || 1;
  const alpha = wrapAngle(Math.atan2(dx, dz) - (k.u > 3 ? course : k.h));
  const kappa = (2 * Math.sin(alpha)) / Ld;
  const deltaDes = Math.atan(kappa * GEO.L) * 1.1 + 0.05 * (kappa * u - k.w);
  const lim = steerLimit(k.u, assist);
  return clamp(-deltaDes / lim, -1, 1);
}

export class RaceAI {
  constructor(race, kart, diff, seed) {
    this.race = race;
    this.kart = kart;
    this.geom = race.geom;
    this.diff = diff;
    this.r = rng(seed);
    this.skill = diff.corner * (0.97 + this.r() * 0.05);
    this.profile = speedProfile(this.geom, kart.cls, this.skill);
    this.lane = 0; this.laneTarget = 0; this.laneT = 0;
    this.avoid = 0;
    this.stuckT = 0;
    this.itemDelay = 0; this.itemHeld = 0;
    this.inp = { steer: 0, throttle: 0, brake: 0, item: false };
  }

  update(dt) {
    const k = this.kart, g = this.geom, inp = this.inp, race = this.race;
    inp.item = false;
    if (!race.canDrive) { inp.throttle = 0; inp.brake = 0; inp.steer = 0; return inp; }
    const u = Math.max(0, k.u);
    this.laneT -= dt;
    if (this.laneT <= 0) { this.laneT = 3 + this.r() * 4; this.laneTarget = (this.r() - 0.5) * 0.7; }
    this.lane += clamp(this.laneTarget - this.lane, -dt * 0.5, dt * 0.5);

    const look = clamp(3.5 + u * 0.28, 4.5, 11);
    const sT = k.s + look;
    let off = g.lineOffsetAt(g.wrapS(sT)) + this.lane;
    // объезд соперников и масла
    let push = 0;
    for (const o of race.karts) {
      if (o === k) continue;
      const ds = g.deltaS(o.s, k.s);
      if (ds > -1 && ds < 11) {
        const dd = o.d - (k.d + (off - k.d) * 0.5);
        if (Math.abs(dd) < 1.9) {
          const side = o.d > k.d ? -1 : 1;
          const room = side > 0 ? g.half - 1 - o.d : o.d + g.half - 1;
          const dir = room > 1.6 ? side : -side;
          push += dir * (1.9 - Math.abs(dd)) * (1 - ds / 14) * 1.2;
        }
      }
    }
    if (race.items) for (const h of race.items.hazards) {
      const ds = g.deltaS(h.s, k.s);
      if (ds > 0 && ds < 22) { const dd = h.d - off; if (Math.abs(dd) < 2) push += (dd > 0 ? -1 : 1) * (2 - Math.abs(dd)); }
    }
    this.avoid += (push - this.avoid) * Math.min(1, dt * 5);
    off = clamp(off + this.avoid, -g.half + 1.0, g.half - 1.0);
    const tp = g.pointAt(g.wrapS(sT), off);
    const steer = pursuitSteer(k, tp.x, tp.z, race.assist);

    const i = g.idx(k.trackIdx + Math.round(2 + u * 0.1));
    const vT = this.profile[i] * k.speedScale;
    let throttle = 1, brake = 0;
    const e = vT - u;
    if (e > -0.4) throttle = clamp(0.35 + e * 0.5, 0, 1);
    else { throttle = 0; brake = clamp((-e - 0.4) * 0.35, 0, 0.85); }
    // тормозим в основном по прямой: в дуге задняя ось с тормозом срывается
    const kHere = Math.abs(g.lineCurv[k.trackIdx]);
    if (kHere > 1 / 70) brake = Math.min(brake, 0.35);
    if (k.sliding > 0.35 || k.slipR > 1.05) { throttle *= 0.4; brake = Math.min(brake, 0.2); }
    // «контроль тяги» пилота: при пробуксовке приоткрываем газ плавнее
    this.tc = this.tc === undefined ? 1 : this.tc;
    if (k.spin || k.slipR > 1) this.tc = Math.max(0.3, this.tc - dt * 5); else this.tc = Math.min(1, this.tc + dt * 1.5);
    throttle *= this.tc;

    // застряли на траве/в барьере — маршалы ставят на трассу
    if (race.time > 3 && u < 1.5) this.stuckT += dt; else this.stuckT = Math.max(0, this.stuckT - dt);
    if (this.stuckT > 3) { k.respawn(); this.stuckT = 0; }
    if (Math.cos(k.h - (k.trackHead ?? k.h)) < -0.3 && u > 1) { this.wrongT = (this.wrongT || 0) + dt; if (this.wrongT > 2) { k.respawn(); this.wrongT = 0; } } else this.wrongT = 0;

    inp.steer = steer; inp.throttle = throttle; inp.brake = brake;
    this.items(dt);
    return inp;
  }

  items(dt) {
    const k = this.kart, race = this.race;
    if (!race.items || !race.items.enabled || !k.item || k.rouletteT > 0) { this.itemHeld = 0; return; }
    this.itemHeld += dt;
    if (this.itemDelay > 0) { this.itemDelay -= dt; return; }
    if (this.r() > this.diff.items * dt * 3) return;
    let use = false;
    const g = this.geom;
    switch (k.item) {
      case 'nitro': case 'nitro3': {
        let kmax = 0;
        for (let d = 5; d < 60; d += 5) kmax = Math.max(kmax, Math.abs(g.lineCurv[g.idx(k.trackIdx + Math.round(d / g.ds))]));
        use = kmax < 1 / 70 && k.surface === 0;
        break;
      }
      case 'rocket': { const t = race.items.findTarget(k); use = (t && g.deltaS(t.s, k.s) < 70) || this.itemHeld > 10; break; }
      case 'oil': use = race.karts.some((o) => o !== k && g.deltaS(k.s, o.s) > 3 && g.deltaS(k.s, o.s) < 20) || this.itemHeld > 9; break;
      case 'shield': use = race.items.rockets.some((r) => r.target === k) || this.itemHeld > 4; break;
    }
    if (use) { this.inp.item = true; this.itemDelay = 0.6 + this.r(); }
  }
}
