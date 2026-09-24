// Геометрия трассы: сэмплинг сплайна, локальные базисы, кривизна,
// гоночная траектория и проекция точки на трассу.
import * as THREE from 'three';

export const SPACING = 1; // шаг сэмплов вдоль осевой, м

const wrapAngle = (a) => {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
};

export class TrackGeom {
  constructor(def) {
    this.def = def;
    this.roadWidth = def.width || 13;
    this.half = this.roadWidth / 2;
    this.runoff = def.runoff || 5;
    this.barrier = this.half + this.runoff; // расстояние от оси до отбойника

    const pts = def.points.map((p) => new THREE.Vector3(p[0], p[2] || 0, p[1]));
    const curve = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
    curve.arcLengthDivisions = 8000;
    this.curve = curve;
    const length = curve.getLength();
    const N = Math.max(200, Math.round(length / SPACING));
    const spaced = curve.getSpacedPoints(N);
    spaced.pop();
    this.N = N;
    this.length = length;
    this.ds = length / N;

    const px = new Float32Array(N), py = new Float32Array(N), pz = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      px[i] = spaced[i].x; py[i] = spaced[i].y + 0.06; pz[i] = spaced[i].z;
    }
    // сглаживаем высоту, чтобы не было ступенек
    for (let k = 0; k < 3; k++) {
      const c = py.slice();
      for (let i = 0; i < N; i++) py[i] = (c[(i - 2 + N) % N] + c[(i - 1 + N) % N] + c[i] + c[(i + 1) % N] + c[(i + 2) % N]) / 5;
    }
    this.px = px; this.py = py; this.pz = pz;

    // касательные, нормали (вправо по ходу), курс, кривизна, уклон
    const tx = new Float32Array(N), tz = new Float32Array(N);
    const nx = new Float32Array(N), nz = new Float32Array(N);
    const head = new Float32Array(N), slope = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = (i - 1 + N) % N, b = (i + 1) % N;
      let dx = px[b] - px[a], dz = pz[b] - pz[a];
      const l = Math.hypot(dx, dz) || 1;
      dx /= l; dz /= l;
      tx[i] = dx; tz[i] = dz;
      nx[i] = -dz; nz[i] = dx;
      head[i] = Math.atan2(dx, dz);
      slope[i] = (py[b] - py[a]) / (2 * this.ds);
    }
    this.tx = tx; this.tz = tz; this.nx = nx; this.nz = nz; this.head = head; this.slope = slope;

    const curv = new Float32Array(N);
    const K = 4;
    for (let i = 0; i < N; i++) {
      const a = (i - K + N) % N, b = (i + K) % N;
      curv[i] = wrapAngle(head[b] - head[a]) / (2 * K * this.ds);
    }
    this.curv = curv; // >0 — левый поворот

    this.computeRacingLine();
  }

  idx(i) { return ((i % this.N) + this.N) % this.N; }

  // Гоночная траектория: итеративное сглаживание с ограничением ширины
  computeRacingLine() {
    const N = this.N;
    const lim = this.half - 1.7;
    let o = new Float32Array(N);
    const qx = new Float32Array(N), qz = new Float32Array(N);
    const passes = [[10, 220], [5, 220], [2, 160]];
    for (const [k, iters] of passes) {
      for (let it = 0; it < iters; it++) {
        for (let i = 0; i < N; i++) { qx[i] = this.px[i] + this.nx[i] * o[i]; qz[i] = this.pz[i] + this.nz[i] * o[i]; }
        const no = new Float32Array(N);
        for (let i = 0; i < N; i++) {
          const a = (i - k + N) % N, b = (i + k) % N;
          const mx = (qx[a] + qx[b]) * 0.5 - this.px[i], mz = (qz[a] + qz[b]) * 0.5 - this.pz[i];
          let v = mx * this.nx[i] + mz * this.nz[i];
          v = o[i] + (v - o[i]) * 0.6;
          no[i] = Math.max(-lim, Math.min(lim, v));
        }
        o = no;
      }
    }
    // лёгкое финальное сглаживание смещений
    for (let s = 0; s < 4; s++) {
      const c = o.slice();
      for (let i = 0; i < N; i++) o[i] = (c[(i - 1 + N) % N] + 2 * c[i] + c[(i + 1) % N]) / 4;
    }
    this.lineOff = o;
    const lx = new Float32Array(N), lz = new Float32Array(N);
    for (let i = 0; i < N; i++) { lx[i] = this.px[i] + this.nx[i] * o[i]; lz[i] = this.pz[i] + this.nz[i] * o[i]; }
    // кривизна траектории
    const lk = new Float32Array(N);
    const K = 5;
    for (let i = 0; i < N; i++) {
      const a = (i - K + N) % N, b = (i + K) % N, c = i;
      const h1 = Math.atan2(lx[c] - lx[a], lz[c] - lz[a]);
      const h2 = Math.atan2(lx[b] - lx[c], lz[b] - lz[c]);
      const d = Math.hypot(lx[b] - lx[a], lz[b] - lz[a]) || 1;
      lk[i] = wrapAngle(h2 - h1) / (d * 0.5);
    }
    const sm = lk.slice();
    for (let i = 0; i < N; i++) {
      let acc = 0;
      for (let j = -3; j <= 3; j++) acc += sm[(i + j + N) % N];
      lk[i] = acc / 7;
    }
    this.lineCurv = lk;
  }

  // Проекция точки (x, z) на осевую. hint — индекс-подсказка для локального поиска.
  project(x, z, hint = -1, y = null, out = {}) {
    const N = this.N;
    let best = -1, bestD = Infinity;
    if (hint >= 0) {
      for (let j = -40; j <= 40; j++) {
        const i = (hint + j + N) % N;
        const dx = x - this.px[i], dz = z - this.pz[i];
        let d = dx * dx + dz * dz;
        if (y !== null) { const dy = y - this.py[i]; d += dy * dy * 4; }
        if (d < bestD) { bestD = d; best = i; }
      }
    }
    if (best < 0 || bestD > 30 * 30) {
      for (let i = 0; i < N; i++) {
        const dx = x - this.px[i], dz = z - this.pz[i];
        let d = dx * dx + dz * dz;
        if (y !== null) { const dy = y - this.py[i]; d += dy * dy * 4; }
        if (d < bestD) { bestD = d; best = i; }
      }
    }
    // уточняем по соседним сегментам
    let i0 = best, t = 0;
    const nxt = (best + 1) % N, prv = (best - 1 + N) % N;
    const segT = (a, b) => {
      const sx = this.px[b] - this.px[a], sz = this.pz[b] - this.pz[a];
      const l2 = sx * sx + sz * sz || 1;
      return ((x - this.px[a]) * sx + (z - this.pz[a]) * sz) / l2;
    };
    const tf = segT(best, nxt);
    if (tf >= 0) { i0 = best; t = Math.min(1, tf); }
    else { i0 = prv; t = Math.max(0, Math.min(1, segT(prv, best))); }
    const i1 = (i0 + 1) % N;
    const cx = this.px[i0] + (this.px[i1] - this.px[i0]) * t;
    const cz = this.pz[i0] + (this.pz[i1] - this.pz[i0]) * t;
    const nX = this.nx[i0] + (this.nx[i1] - this.nx[i0]) * t;
    const nZ = this.nz[i0] + (this.nz[i1] - this.nz[i0]) * t;
    const nl = Math.hypot(nX, nZ) || 1;
    out.idx = best;
    out.i0 = i0;
    out.t = t;
    out.s = (i0 + t) * this.ds;
    out.d = ((x - cx) * nX + (z - cz) * nZ) / nl;
    out.nx = nX / nl; out.nz = nZ / nl;
    out.y = this.py[i0] + (this.py[i1] - this.py[i0]) * t;
    out.head = this.head[i0];
    out.slope = this.slope[i0];
    return out;
  }

  // точка на трассе по дистанции s и боковому смещению d
  pointAt(s, d = 0, out = new THREE.Vector3()) {
    const f = s / this.ds;
    const i0 = this.idx(Math.floor(f)), i1 = (i0 + 1) % this.N, t = f - Math.floor(f);
    const cx = this.px[i0] + (this.px[i1] - this.px[i0]) * t;
    const cz = this.pz[i0] + (this.pz[i1] - this.pz[i0]) * t;
    const cy = this.py[i0] + (this.py[i1] - this.py[i0]) * t;
    const nX = this.nx[i0] + (this.nx[i1] - this.nx[i0]) * t;
    const nZ = this.nz[i0] + (this.nz[i1] - this.nz[i0]) * t;
    const nl = Math.hypot(nX, nZ) || 1;
    return out.set(cx + (nX / nl) * d, cy, cz + (nZ / nl) * d);
  }

  headingAt(s) {
    const f = s / this.ds;
    const i0 = this.idx(Math.floor(f)), i1 = (i0 + 1) % this.N, t = f - Math.floor(f);
    return this.head[i0] + wrapAngle(this.head[i1] - this.head[i0]) * t;
  }

  lineOffsetAt(s) {
    const f = s / this.ds;
    const i0 = this.idx(Math.floor(f)), i1 = (i0 + 1) % this.N, t = f - Math.floor(f);
    return this.lineOff[i0] + (this.lineOff[i1] - this.lineOff[i0]) * t;
  }

  wrapS(s) { const L = this.length; return ((s % L) + L) % L; }
  // знаковая разница дистанций (-L/2..L/2)
  deltaS(a, b) { const L = this.length; let d = (a - b) % L; if (d > L / 2) d -= L; if (d < -L / 2) d += L; return d; }

  bounds(pad = 0) {
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (let i = 0; i < this.N; i++) {
      minX = Math.min(minX, this.px[i]); maxX = Math.max(maxX, this.px[i]);
      minZ = Math.min(minZ, this.pz[i]); maxZ = Math.max(maxZ, this.pz[i]);
    }
    return { minX: minX - pad, maxX: maxX + pad, minZ: minZ - pad, maxZ: maxZ + pad };
  }

  // расстояние от точки до осевой (грубая оценка по сэмплам) — для расстановки декораций
  distToCenter(x, z, step = 3) {
    let best = Infinity;
    for (let i = 0; i < this.N; i += step) {
      const dx = x - this.px[i], dz = z - this.pz[i];
      const d = dx * dx + dz * dz;
      if (d < best) best = d;
    }
    return Math.sqrt(best);
  }
}

export { wrapAngle };
