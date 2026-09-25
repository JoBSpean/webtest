// Физика спортивного карта: двухосная модель шин, жёсткий задний мост без
// дифференциала, «подскок» внутреннего заднего колеса, тормоз только на заднюю
// ось (у KZ2 — и на переднюю), двухтактный мотор с центробежным сцеплением,
// у KZ2 — шестиступенчатая коробка. Одна и та же функция считает игрока,
// соперников и всю популяцию нейросетей.

export const G = 9.81;
export const GEO = { L: 1.05, a: 0.60, b: 0.45, h: 0.22, T: 1.40, dmax: 0.40 };
const PEAK_F = 0.13, PEAK_R = 0.09; // угол увода с максимальным сцеплением: узкие передние, широкие задние слики

export const CLASSES = {
  junior: {
    id: 'junior', name: 'Rotax Junior', short: 'Junior', vmaxKmh: 95, mass: 145, pmax: 12000, flaunch: 700,
    rpmMax: 14000, rpmClutch: 4200, rpmIdle: 2400, gears: null, frontBrakes: false, brakeR: 0.75, brakeF: 0, mu: 1.62, cda: 0.50, iz: 36,
    note: 'Прямой привод, мягкий мотор. Скорость ~95 км/ч, тормоз только сзади.',
  },
  ok: {
    id: 'ok', name: 'OK Senior', short: 'OK', vmaxKmh: 115, mass: 150, pmax: 15500, flaunch: 900,
    rpmMax: 16000, rpmClutch: 5000, rpmIdle: 2600, gears: null, frontBrakes: false, brakeR: 0.75, brakeF: 0, mu: 1.72, cda: 0.55, iz: 38,
    note: 'Прямой привод, 16 000 об/мин. Скорость ~115 км/ч, тормоз только сзади.',
  },
  kz2: {
    id: 'kz2', name: 'KZ2 · коробка', short: 'KZ2', vmaxKmh: 130, mass: 175, pmax: 27000, flaunch: 1300,
    rpmMax: 14000, rpmClutch: 4500, rpmIdle: 2600, gears: [58, 77, 93, 107, 119, 130], frontBrakes: true, brakeR: 0.38, brakeF: 1.0, mu: 1.78, cda: 0.56, iz: 44,
    note: 'Шесть передач, тормоза на обе оси. Скорость ~130 км/ч.',
  },
};

// покрытие: коэффициент сцепления и сопротивление качению
export const SURF = {
  ASPHALT: 0, KERB: 1, GRASS: 2, PIT: 3,
  mu: [1, 0.88, 0.55, 1],
  roll: [0.016, 0.035, 0.2, 0.016],
  name: ['асфальт', 'поребрик', 'трава', 'пит-лейн'],
};

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const smooth = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };

function tire(alpha, fmax, peak) {
  const x = Math.abs(alpha) / peak;
  const f = x < 1 ? Math.sin(x * 1.5707963) : 1 - 0.22 * (1 - Math.exp(-(x - 1) * 2.2));
  return (alpha > 0 ? -f : f) * fmax;
}

// кривая мощности двухтактника: слабый низ, пик у отсечки
function powerCurve(x) {
  if (x > 1.015) return 0;
  return clamp(0.45 + 1.0 * (x - 0.35), 0.45, 1);
}

export function newKartState(cls) {
  return {
    cls, x: 0, y: 0, z: 0, h: 0, u: 0, v: 0, w: 0, delta: 0,
    rpm: cls.rpmIdle, gear: 1, shiftT: 0, ax: 0,
    throttle: 0, brake: 0, steer: 0,
    surface: 0, lift: 0, scrub: 0, slipF: 0, slipR: 0, lock: false, spin: false, sliding: 0,
    trackIdx: -1, s: 0, d: 0, lastS: 0, progress: 0, onKerb: 0, inPit: false, pitIdx: -1,
    wallHit: 0, offT: 0, boostT: 0, boostPow: 0, spinT: 0,
    proj: {}, pproj: {},
  };
}

export function speedKmh(k) { return Math.abs(k.u) * 3.6; }

// Максимальный угол колёс с учётом помощи руля (одинаково для игрока и ИИ).
export function steerLimit(u, assist = 1) {
  const f = clamp(Math.abs(u) / 28, 0, 1.2);
  return GEO.dmax * (1 - 0.72 * assist * f);
}

// Сила на колёсах от мотора (Н) и обороты.
function engine(k, C, throttle, dt, manual) {
  const u = Math.max(0, k.u);
  if (!C.gears) {
    const vmax = C.vmaxKmh / 3.6;
    const x = u / vmax;
    const xc = C.rpmClutch / C.rpmMax;
    const target = throttle > 0.05 ? Math.max(x, xc * (1 + 0.25 * throttle)) : Math.max(x, C.rpmIdle / C.rpmMax);
    k.rpm += (target * C.rpmMax - k.rpm) * Math.min(1, dt * (x > xc ? 30 : 8));
    if (x >= 1.0) return 0;
    const pc = powerCurve(Math.max(x, xc));
    const boost = k.boostT > 0 ? 1 + 0.6 * k.boostPow : 1;
    return throttle * Math.min(C.flaunch * boost, (C.pmax * pc * boost) / Math.max(u, 2));
  }
  // KZ2: коробка
  const gs = C.gears;
  const vg = (i) => gs[i - 1] / 3.6;
  if (k.shiftT > 0) k.shiftT -= dt;
  if (!manual && k.shiftT <= 0) {
    const x = u / vg(k.gear);
    if (x > 0.975 && k.gear < gs.length && throttle > 0.2) { k.gear++; k.shiftT = 0.07; }
    else if (k.gear > 1 && x < 0.58 && u / vg(k.gear - 1) < 0.93) { k.gear--; k.shiftT = 0.05; }
  }
  const x = u / vg(k.gear);
  const xc = C.rpmClutch / C.rpmMax;
  const target = k.gear === 1 && throttle > 0.05 ? Math.max(x, xc * (1 + 0.3 * throttle)) : Math.max(x, C.rpmIdle / C.rpmMax);
  k.rpm += (target * C.rpmMax - k.rpm) * Math.min(1, dt * 30);
  if (k.shiftT > 0 || x >= 1.0) return 0;
  if (k.gear > 1 && x < xc * 0.8) return throttle * C.pmax * 0.12 / Math.max(u, 2); // слишком высокая передача
  const pc = powerCurve(Math.max(x, xc));
  const boost = k.boostT > 0 ? 1 + 0.5 * k.boostPow : 1;
  const flim = C.flaunch * (1.25 - k.gear * 0.12);
  return throttle * Math.min(flim * boost, (C.pmax * pc * boost) / Math.max(u, 2));
}

export function shift(k, dir) {
  const C = k.cls;
  if (!C.gears || k.shiftT > 0) return;
  const ng = k.gear + dir;
  if (ng < 1 || ng > C.gears.length) return;
  if (dir < 0 && Math.max(0, k.u) / (C.gears[ng - 1] / 3.6) > 1.04) return; // защита от перекрута
  k.gear = ng; k.shiftT = 0.07;
}

/**
 * Один шаг динамики. inp: {steer (−1..1, + вправо), throttle 0..1, brake 0..1}.
 * opts: {assist, manual}. Контакт с трассой считает collide() отдельно.
 */
export function stepDynamics(k, inp, dt, opts) {
  const C = k.cls, m = C.mass, { L, a, b, h: hcg, T } = GEO;
  const assist = opts ? opts.assist : 1;
  const stab = !!(opts && opts.stab);
  // клавиатура даёт 0 или 1: руль набирается плавно, как у настоящего пилота, и быстрее возвращается
  let steerIn = clamp(inp.steer, -1, 1);
  if (stab) {
    const cur = k.steerIn || 0;
    const up = Math.abs(steerIn) > Math.abs(cur) && Math.sign(steerIn) === Math.sign(cur || steerIn);
    // на малой скорости руль набирается медленнее: карт не «клюёт» внутрь поворота
    const upRate = 2.2 + 2.4 * clamp(Math.abs(k.u) / 16, 0, 1);
    k.steerIn = cur + clamp(steerIn - cur, -dt * (up ? upRate : 8), dt * (up ? upRate : 8));
    steerIn = k.steerIn;
  }

  // руль: привод с ограниченной скоростью поворота колёс
  let lim = steerLimit(k.u, assist);
  if (stab) lim *= 0.55 + 0.45 * smooth(2, 12, Math.abs(k.u)); // меньше угол колёс на малой скорости
  // контрруль при заносе разрешаем почти на полный угол
  if (k.slipR > 0.9 && inp.steer * k.w > 0) lim = Math.max(lim, 0.28);
  const target = -steerIn * lim;
  const rate = 3.4;
  k.delta += clamp(target - k.delta, -rate * dt, rate * dt);
  k.steer = steerIn;
  // педали: короткая инерция привода газа и тормоза
  k.throttle += clamp(inp.throttle - k.throttle, -dt * 12, dt * 10);
  k.brake += clamp(inp.brake - k.brake, -dt * 14, dt * (stab ? 2.4 : 9));

  const spinning = k.spinT > 0;
  const muS = C.mu * SURF.mu[k.surface] * (spinning ? 0.35 : 1);
  const Fzf0 = (m * G * b) / L, Fzr0 = (m * G * a) / L;
  const dF = (m * k.ax * hcg) / L;
  const Fzf = Math.max(0.15 * m * G, Fzf0 - dF), Fzr = Math.max(0.15 * m * G, Fzr0 + dF);

  const u = k.u, v = k.v, w = k.w;
  const ue = Math.max(Math.abs(u), 3);
  const af = Math.atan2(v + a * w, ue) - k.delta;
  const ar = Math.atan2(v - b * w, ue);

  // подскок внутреннего заднего колеса: геометрия кастора при большом угле руля
  const lift = smooth(0.07, 0.2, Math.abs(k.delta)) * Math.min(1, ue / 5);
  k.lift = lift;
  // чувствительность шин к нагрузке: догруженная ось цепляется хуже на килограмм
  const lsF = 1 - 0.15 * (Fzf - Fzf0) / Fzf0, lsR = 1 - 0.15 * (Fzr - Fzr0) / Fzr0;
  const muR = muS * (1 - 0.12 * lift) * lsR, muF = muS * 0.84 * lsF;
  const capR = muR * Fzr, capF = muF * Fzf;

  // продольные силы: мотор и тормоза
  if (k.stallT > 0) k.stallT -= dt;
  const throttle = spinning || k.stallT > 0 ? 0 : clamp(k.throttle, 0, 1);
  const brake = clamp(k.brake, 0, 1);
  let drive = engine(k, C, throttle, dt, opts && opts.manual);
  // сброс газа: двухтактник на сцеплении подтормаживает, вес уходит на передок — карт охотнее поворачивает
  if (throttle < 0.05 && u > 3) {
    const vr = C.gears ? u / (C.gears[k.gear - 1] / 3.6) : u / (C.vmaxKmh / 3.6);
    if (vr > C.rpmClutch / C.rpmMax) drive -= m * G * (C.gears ? 0.075 : 0.05) * Math.min(1, vr);
  }
  const dirU = u > 0.05 ? 1 : 0;
  let Fxr = drive - brake * C.brakeR * C.mu * Fzr0 * dirU;
  let Fxf = -brake * C.brakeF * C.mu * Fzf0 * dirU;
  if (stab) {
    // ABS и контроль тяги: задняя ось не блокируется и не буксует, запас на поворот остаётся
    const turnUse = Math.min(0.8, Math.abs(Math.atan2(v - b * w, ue)) / PEAK_R);
    const room = capR * Math.sqrt(1 - turnUse * turnUse) * 0.95;
    if (Fxr < -room) Fxr = -room;
    if (Fxr > room) Fxr = room;
    if (Fxf < -capF * 0.95) Fxf = -capF * 0.95;
  }
  k.lock = false; k.spin = false;
  let latR = 1, latF = 1;
  if (Math.abs(Fxr) > capR) {
    if (Fxr < 0) { k.lock = true; Fxr = -0.78 * capR; latR = 0.35; }
    else { k.spin = true; Fxr = 0.85 * capR; latR = 0.5; }
  } else latR = Math.sqrt(Math.max(0.02, 1 - (Fxr / capR) ** 2));
  if (Math.abs(Fxf) > capF) { Fxf = -0.8 * capF; latF = 0.35; } else if (Fxf) latF = Math.sqrt(Math.max(0.02, 1 - (Fxf / capF) ** 2));
  if (u < 0.3 && brake > 0) { Fxr = 0; Fxf = 0; } // заднего хода у карта нет

  const Fyf = tire(af, capF, PEAK_F) * latF;
  const Fyr = tire(ar, capR, PEAK_R) * latR;

  // жёсткий мост: колёса одной оси крутятся одинаково — в повороте карт «подтормаживает»
  const scrubSlip = (Math.abs(w) * T * 0.5) / ue;
  const scrubK = (1 - lift) * Math.min(1, scrubSlip / 0.12);
  k.scrub = scrubK;
  const Fscrub = 0.14 * capR * scrubK;
  const Mscrub = -Math.sign(w) * 0.2 * capR * T * 0.5 * scrubK;

  const Fdrag = 0.5 * 1.2 * C.cda * u * Math.abs(u);
  const Froll = Math.abs(u) > 0.05 ? SURF.roll[k.surface] * m * G * Math.sign(u) : 0;
  const cd = Math.cos(k.delta), sd = Math.sin(k.delta);
  const Fx = Fxr + Fxf * cd - Fyf * sd - Fdrag - Froll - Fscrub * (u > 0 ? 1 : 0);
  const Fy = Fyr + Fyf * cd + Fxf * sd;
  const Mz = a * (Fyf * cd + Fxf * sd) - b * Fyr + Mscrub;

  let nu = u + (Fx / m + v * w) * dt;
  let nv = v + (Fy / m - u * w) * dt;
  let nw = w + (Mz / C.iz) * dt;
  // малые скорости: кинематика вместо шин, чтобы карт спокойно стоял и трогался
  if (Math.abs(nu) < 2.5) {
    const kk = 1 - Math.abs(nu) / 2.5;
    nv *= Math.exp(-dt * 10 * kk);
    nw += ((nu * Math.tan(k.delta)) / L - nw) * Math.min(1, dt * 12 * kk);
  }
  if (nu < 0) { nu = Math.max(nu, -1.5); if (throttle <= 0) nu *= Math.exp(-dt * 6); }
  if (stab && nu > 3 && !spinning) {
    // стабилизация: угол заноса и рыскание не выходят за предел, карт не разворачивает
    const betaMax = 0.13 + 0.12 * (1 - assist);
    const vLim = Math.tan(betaMax) * nu;
    if (Math.abs(nv) > vLim) nv += (Math.sign(nv) * vLim - nv) * Math.min(1, dt * 10);
    // рыскание тянется к устойчивому повороту для текущего угла руля: без раскачки на скорости
    const wss = (nu * Math.tan(k.delta)) / (L * (1 + (nu / 24) ** 2));
    nw += (wss - nw) * Math.min(1, dt * 2.2 * (0.6 + 0.4 * assist));
    const wMax = (muS * G * 1.15) / nu + 0.15;
    if (Math.abs(nw) > wMax) nw += (Math.sign(nw) * wMax - nw) * Math.min(1, dt * 12);
  }
  if (spinning) { k.spinT -= dt; nw += (k.spinDir || 1) * 9 * dt * (k.spinT > 0.4 ? 1 : 0); }
  k.ax += (Fx / m - k.ax) * Math.min(1, dt * 12);
  k.u = nu; k.v = nv; k.w = nw;
  k.h += nw * dt;
  const sh = Math.sin(k.h), ch = Math.cos(k.h);
  k.vx = nu * sh + nv * ch;
  k.vz = nu * ch - nv * sh;
  k.x += k.vx * dt; k.z += k.vz * dt;
  if (k.boostT > 0) { k.boostT -= dt; if (k.boostT <= 0) k.boostPow = 0; }

  // признаки срыва — для дыма, следов и визга
  k.slipF = Math.abs(af) / PEAK_F; k.slipR = Math.abs(ar) / PEAK_R;
  const over = Math.max(k.slipR - 1.1, k.slipF - 1.4, k.lock ? 1 : 0, k.spin ? 0.8 : 0, 0);
  k.sliding = Math.min(1, over) * Math.min(1, ue / 8);
}

/**
 * Контакт с трассой: покрытие, отбойники из покрышек, пит-лейн, прогресс.
 * Возвращает силу удара о барьер (м/с по нормали) или 0.
 */
export function collide(k, geom, dt) {
  let hit = 0;
  const pr = geom.project(k.x, k.z, k.trackIdx, k.y, k.proj);
  k.trackIdx = pr.idx;
  const ad = Math.abs(pr.d);
  const side = pr.d < 0 ? -1 : 1;
  const i = pr.i0;
  const barrier = side < 0 ? geom.barL[i] : geom.barR[i];

  // пит-лейн
  const P = geom.pit;
  if (P && (k.inPit || (geom.pitOpen[i] && side === P.side && ad > geom.half + 1.2))) {
    const pp = geom.projectPit(k.x, k.z, k.pitIdx, k.pproj);
    if (pp && Math.abs(pp.d) < P.half + 1.2 && pp.dist < 12) {
      k.inPit = true; k.pitIdx = pp.i;
      // выехали обратно на полотно трассы
      if (ad < geom.half + 0.6 && (pp.i < P.merge || pp.i > P.M - P.merge)) { k.inPit = false; }
      else {
        // стенки пит-лейна (со стороны трассы стенки нет только в зонах слияния)
        const lim = P.half - 0.7;
        const outer = pp.d * P.side > 0; // нормаль пит-лейна совпадает по знаку с нормалью трассы
        const openInner = pp.i < P.merge || pp.i > P.M - P.merge;
        if (Math.abs(pp.d) > lim && (outer || !openInner)) {
          const nX = P.nx[pp.i], nZ = P.nz[pp.i], sg = Math.sign(pp.d);
          const pen = Math.abs(pp.d) - lim;
          k.x -= nX * sg * pen; k.z -= nZ * sg * pen;
          hit = bounce(k, nX * sg, nZ * sg, 0.25);
        }
        k.surface = SURF.PIT; k.y = pp.y;
        k.s = pr.s; k.d = pr.d;
        progress(k, geom, pr.s);
        k.onKerb = 0;
        return hit;
      }
    } else k.inPit = false;
  }

  const lim = barrier - 0.8;
  if (ad > lim) {
    const sg = side, pen = ad - lim;
    k.x -= pr.nx * sg * pen; k.z -= pr.nz * sg * pen;
    hit = bounce(k, pr.nx * sg, pr.nz * sg, 0.3);
  }
  k.s = pr.s; k.d = pr.d; k.y = pr.y;
  k.trackHead = pr.head; k.slope = pr.slope;
  if (ad <= geom.half) { k.surface = SURF.ASPHALT; k.onKerb = 0; }
  else if (ad <= geom.half + geom.kerbW && geom.kerb[i]) { k.surface = SURF.KERB; k.onKerb = 1; }
  else { k.surface = SURF.GRASS; k.onKerb = 0; }
  if (k.surface === SURF.GRASS) k.offT += dt; else k.offT = 0;
  progress(k, geom, pr.s);
  return hit;
}

function progress(k, geom, s) {
  const ds = geom.deltaS(s, k.lastS);
  k.lastS = s;
  k.progress += ds;
}

// Удар о барьер: гасим нормальную составляющую скорости, трение вдоль
function bounce(k, nX, nZ, rest) {
  const vn = k.vx * nX + k.vz * nZ;
  if (vn <= 0) return 0;
  let vx = k.vx - nX * vn * (1 + rest), vz = k.vz - nZ * vn * (1 + rest);
  const fr = clamp(1 - vn * 0.05, 0.45, 0.97);
  vx *= fr; vz *= fr;
  const sh = Math.sin(k.h), ch = Math.cos(k.h);
  k.u = vx * sh + vz * ch;
  k.v = vx * ch - vz * sh;
  k.w *= 0.5;
  k.vx = vx; k.vz = vz;
  return vn;
}

export function placeKart(k, geom, s, d, heading = null) {
  const p = geom.pointAt(s, d);
  k.x = p.x; k.z = p.z; k.y = p.y;
  k.h = heading === null ? geom.headingAt(s) : heading;
  k.u = k.v = k.w = 0; k.vx = k.vz = 0; k.delta = 0; k.ax = 0;
  k.rpm = k.cls.rpmIdle; k.gear = 1; k.shiftT = 0;
  k.inPit = false; k.pitIdx = -1;
  const pr = geom.project(k.x, k.z, -1, k.y, k.proj);
  k.trackIdx = pr.idx; k.s = pr.s; k.d = pr.d; k.lastS = pr.s;
  k.progress = geom.deltaS(pr.s, 0);
  k.surface = 0; k.offT = 0;
}

// Старт из пит-лейна (выезд на круг)
export function placeInPit(k, geom, frac = 0.62) {
  const P = geom.pit;
  if (!P) return placeKart(k, geom, geom.wrapS(-12), 0);
  const i = Math.round(P.M * frac);
  k.x = P.x[i]; k.z = P.z[i]; k.y = P.y[i];
  const j = Math.min(P.M, i + 2);
  k.h = Math.atan2(P.x[j] - P.x[i], P.z[j] - P.z[i]);
  k.u = k.v = k.w = 0; k.vx = k.vz = 0; k.delta = 0; k.ax = 0;
  k.rpm = k.cls.rpmIdle; k.gear = 1; k.shiftT = 0;
  const pr = geom.project(k.x, k.z, -1, k.y, k.proj);
  k.trackIdx = pr.idx; k.s = pr.s; k.d = pr.d; k.lastS = pr.s;
  k.progress = geom.deltaS(pr.s, 0);
  k.inPit = true; k.pitIdx = i; k.surface = SURF.PIT;
}
