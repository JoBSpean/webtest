// Соперники: следуют гоночной траектории, тормозят по профилю скорости,
// обгоняют, объезжают масло, делают заносы ради турбо и используют предметы.
import { clamp, wrapAngle, rng } from './util.js';

// Максимальная скорость в каждой точке трассы с учётом способности карта поворачивать.
export function speedProfile(geom, P, cornerK) {
  const N = geom.N;
  const v = new Float32Array(N);
  const vmax = P.maxSpeed;
  for (let i = 0; i < N; i++) {
    let k = 0;
    for (let j = -4; j <= 4; j++) k = Math.max(k, Math.abs(geom.lineCurv[(i + j + N) % N]));
    let lo = 4, hi = vmax * 1.05;
    for (let it = 0; it < 18; it++) {
      const m = (lo + hi) / 2;
      const r = m / vmax;
      const kmax = (P.turnRate * (1 - 0.42 * r * r)) / m * 0.86 * cornerK;
      if (kmax >= k) lo = m; else hi = m;
    }
    v[i] = lo;
  }
  const aBrake = 17;
  for (let rep = 0; rep < 2; rep++) {
    for (let i = N - 1; i >= 0; i--) {
      const nx = v[(i + 1) % N];
      v[i] = Math.min(v[i], Math.sqrt(nx * nx + 2 * aBrake * geom.ds));
    }
  }
  return v;
}

export class AIDriver {
  constructor(race, kart, diff, seed) {
    this.race = race;
    this.kart = kart;
    this.geom = race.geom;
    this.diff = diff;
    this.r = rng(seed);
    this.skill = 0.965 + this.r() * 0.05;
    this.profile = speedProfile(this.geom, kart.p, diff.corner * (0.97 + this.r() * 0.04));
    this.lane = (this.r() - 0.5) * 2;
    this.laneTarget = this.lane;
    this.laneT = 0;
    this.stuckT = 0; this.reverseT = 0; this.wrongT = 0;
    this.itemDelay = 0;
    this.itemHeld = 0;
    this.wobbleT = 0; this.wobble = 0;
    this.driftCorner = -1;
    this.driftT = 0;
    this.inp = { steer: 0, throttle: 0, brake: 0, drift: false, driftPressed: false, item: false };
    this.avoid = 0;
  }

  update(dt) {
    const k = this.kart, g = this.geom, inp = this.inp, race = this.race;
    inp.driftPressed = false; inp.item = false;
    if (!race.canDrive) { inp.throttle = 0; inp.brake = 0; inp.steer = 0; return inp; }

    const sp = k.speed;
    // случайная смена полосы — чтобы соперники не ехали «паровозиком»
    this.laneT -= dt;
    if (this.laneT <= 0) { this.laneT = 2 + this.r() * 4; this.laneTarget = (this.r() - 0.5) * 3; }
    this.lane += clamp(this.laneTarget - this.lane, -dt * 0.8, dt * 0.8);

    const look = clamp(5 + sp * 0.4, 6, 17);
    const sT = k.s + look;
    let off = g.lineOffsetAt(g.wrapS(sT)) * 0.9 + this.lane;

    // объезд соперников и масла
    let push = 0;
    for (const o of race.karts) {
      if (o === k) continue;
      const ds = g.deltaS(o.s, k.s);
      if (ds > -1 && ds < 13) {
        const dd = o.d - (k.d + (off - k.d) * 0.5);
        if (Math.abs(dd) < 2.6) {
          const side = o.d > k.d ? -1 : 1;
          const room = side > 0 ? g.half - 1.5 - o.d : o.d + g.half - 1.5;
          const dir = room > 2.2 ? side : -side;
          push += dir * (2.6 - Math.abs(dd)) * (1 - ds / 16) * 1.3;
        }
      }
    }
    for (const h of race.items.hazards) {
      const ds = g.deltaS(h.s, k.s);
      if (ds > 0 && ds < 24) {
        const dd = h.d - off;
        if (Math.abs(dd) < 2.2) push += (dd > 0 ? -1 : 1) * (2.2 - Math.abs(dd)) * 1.2;
      }
    }
    this.avoid += (push - this.avoid) * Math.min(1, dt * 6);
    off = clamp(off + this.avoid, -g.half + 1.3, g.half - 1.3);

    // ошибки на лёгком уровне
    this.wobbleT -= dt;
    if (this.wobbleT <= 0) {
      this.wobbleT = 1 + this.r() * 3;
      this.wobble = this.r() < this.diff.mistakes ? (this.r() - 0.5) * 1.2 : 0;
    }

    const tp = g.pointAt(g.wrapS(sT), off);
    const desired = Math.atan2(tp.x - k.x, tp.z - k.z);
    // рулим по фактическому курсу (вектору скорости), а не по носу карта
    const course = sp > 2 && k.vf > 0 ? Math.atan2(k.vx, k.vz) : k.h;
    const diffA = wrapAngle(desired - course);
    let steer = clamp(-diffA * 2.7 + this.wobble * 0.3, -1, 1);

    // скорость
    const i = g.idx(k.trackIdx + Math.round(3 + sp * 0.12));
    let vT = this.profile[i];
    let throttle = 1, brake = 0;
    const vCur = sp;
    const scaledT = vT * this.skill;
    if (vCur > scaledT + 1.6) { throttle = 0; brake = clamp((vCur - scaledT) / 5, 0.25, 1); }
    else if (vCur > scaledT) { throttle = 0.35; }
    if (this.wobble && Math.abs(this.wobble) > 0.45) throttle *= 0.7;

    // занос для мини-турбо: только на входе в тугой и длинный поворот
    const kEntry = this.curvAhead(0, 9);
    const kLong = this.curvAhead(14, 32);
    const tightLong = Math.abs(kEntry.k) > 1 / 30 && Math.abs(kLong.k) > 1 / 45 && Math.sign(kEntry.k) === Math.sign(kLong.k);
    if (!k.drifting && !this.wantDrift && sp > 14 && tightLong && this.driftCorner !== kEntry.idx) {
      this.driftCorner = kEntry.idx;
      if (this.r() < this.diff.drift) {
        inp.driftPressed = true;
        this.wantDrift = true;
        this.driftDir = kEntry.k > 0 ? -1 : 1;
        this.driftT = 0;
      }
    }
    if (this.wantDrift) {
      this.driftT += dt;
      if (!k.drifting && k.hopT > 0) steer = this.driftDir * Math.max(0.4, steer * this.driftDir);
      const kNear = this.curvAhead(0, 10);
      const opposite = Math.sign(kNear.k) === this.driftDir && Math.abs(kNear.k) > 1 / 90;
      const ending = Math.abs(kNear.k) < 1 / 45 || opposite;
      const edge = Math.abs(k.d) > g.half - 0.8;
      // дотягиваем занос на выходе из поворота, чтобы успеть зарядить мини-турбо
      const charging = k.driftLevel < 1 && k.driftCharge > 0.3 && this.driftT < 2.2 && !opposite;
      if ((k.drifting && (edge || (ending && !charging)) && this.driftT > 0.45) || this.driftT > 4 || (!k.drifting && k.hopT <= 0 && this.driftT > 0.5)) {
        this.wantDrift = false;
      }
    }
    inp.drift = !!this.wantDrift;
    if (k.drifting) {
      brake = Math.min(brake, 0.4);
      // в заносе руль задаёт «плотность» дуги: пересчитываем желаемое рыскание в эту шкалу
      const vr = Math.min(1.4, sp / k.p.maxSpeed);
      const want = steer * (1 - 0.42 * vr * vr) / (1 - 0.16 * vr * vr);
      steer = clamp(((want * k.driftDir) - 0.55) / 0.45 * k.driftDir, -1, 1);
    }

    // застрял — сдаём назад
    if (race.time > 3 && sp < 1.2 && this.reverseT <= 0) this.stuckT += dt; else this.stuckT = Math.max(0, this.stuckT - dt);
    if (this.stuckT > 1.2) { this.reverseT = 1.1; this.stuckT = 0; this.stuckCount = (this.stuckCount || 0) + 1; }
    if (this.reverseT > 0) {
      this.reverseT -= dt;
      throttle = 0; brake = 1; steer = -steer;
      if (this.stuckCount > 2) { k.respawn(); this.stuckCount = 0; this.reverseT = 0; }
    } else if (sp > 6) this.stuckCount = 0;
    // едем не туда
    if (Math.cos(k.h - (k.trackHead ?? k.h)) < -0.2 && sp > 1) this.wrongT += dt; else this.wrongT = 0;
    if (this.wrongT > 2.5) { k.respawn(); this.wrongT = 0; }

    inp.steer = steer; inp.throttle = throttle; inp.brake = brake;
    this.items(dt);
    return inp;
  }

  curvAhead(a, b) {
    const g = this.geom, k = this.kart;
    let best = 0, bi = -1;
    for (let d = a; d <= b; d += 2) {
      const i = g.idx(k.trackIdx + Math.round(d / g.ds));
      const c = g.lineCurv[i];
      if (Math.abs(c) > Math.abs(best)) { best = c; bi = i; }
    }
    // идентификатор поворота — индекс, округлённый до 40 м
    return { k: best, idx: bi < 0 ? -1 : Math.floor(bi / (40 / g.ds)) };
  }

  items(dt) {
    const k = this.kart, race = this.race;
    if (!k.item || k.rouletteT > 0) { this.itemHeld = 0; return; }
    this.itemHeld += dt;
    if (this.itemDelay > 0) { this.itemDelay -= dt; return; }
    if (this.r() > this.diff.items * dt * 4) return;
    let use = false;
    switch (k.item) {
      case 'nitro': case 'nitro3': {
        const c = this.curvAhead(5, 60);
        use = Math.abs(c.k) < 1 / 70 && !k.onGrass;
        break;
      }
      case 'rocket': {
        const t = race.items.findTarget(k);
        use = t && race.geom.deltaS(t.s, k.s) < 70;
        if (this.itemHeld > 10) use = true;
        break;
      }
      case 'oil': {
        use = race.karts.some((o) => o !== k && race.geom.deltaS(k.s, o.s) > 3 && race.geom.deltaS(k.s, o.s) < 20) || this.itemHeld > 9;
        break;
      }
      case 'shield':
        use = race.items.rockets.some((r) => r.target === k) || this.itemHeld > 4;
        break;
    }
    if (use) { this.inp.item = true; this.itemDelay = 0.6 + this.r(); }
  }
}
