// Геометрия трассы: сплайн Catmull-Rom в метрах, локальные базисы, кривизна,
// гоночная траектория, секторы, пит-лейн, сетка покрытия для лучей ИИ
// и быстрая проекция точки на трассу.
import * as THREE from 'three';

export const SPACING = 1; // шаг сэмплов вдоль осевой, м

const wrapAngle = (a) => {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
};

function sampleCurve(points, closed, targetLen) {
  let pts = points.map((p) => new THREE.Vector3(p[0], p[2] || 0, p[1]));
  let curve = new THREE.CatmullRomCurve3(pts, closed, 'centripetal');
  curve.arcLengthDivisions = 8000;
  if (targetLen) {
    // равномерно масштабируем план трассы (без высот) до заданной длины
    for (let it = 0; it < 3; it++) {
      const k = targetLen / curve.getLength();
      pts = pts.map((p) => new THREE.Vector3(p.x * k, p.y, p.z * k));
      curve = new THREE.CatmullRomCurve3(pts, closed, 'centripetal');
      curve.arcLengthDivisions = 8000;
    }
  }
  return curve;
}

export class TrackGeom {
  constructor(def) {
    this.def = def;
    this.roadWidth = def.width || 9;
    this.half = this.roadWidth / 2;
    this.runoff = def.runoff || 5;
    this.barrier = this.half + this.runoff;
    this.kerbW = def.kerbW || 1.0;

    const curve = sampleCurve(def.points, true, def.length);
    this.curve = curve;
    const length = curve.getLength();
    const N = Math.max(200, Math.round(length / SPACING));
    const spaced = curve.getSpacedPoints(N);
    spaced.pop();
    this.N = N;
    this.length = length;
    this.ds = length / N;

    const px = new Float32Array(N), py = new Float32Array(N), pz = new Float32Array(N);
    for (let i = 0; i < N; i++) { px[i] = spaced[i].x; py[i] = spaced[i].y + 0.06; pz[i] = spaced[i].z; }
    for (let k = 0; k < 4; k++) {
      const c = py.slice();
      for (let i = 0; i < N; i++) py[i] = (c[(i - 2 + N) % N] + c[(i - 1 + N) % N] + c[i] + c[(i + 1) % N] + c[(i + 2) % N]) / 5;
    }
    this.px = px; this.py = py; this.pz = pz;

    const tx = new Float32Array(N), tz = new Float32Array(N), nx = new Float32Array(N), nz = new Float32Array(N);
    const head = new Float32Array(N), slope = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = (i - 1 + N) % N, b = (i + 1) % N;
      let dx = px[b] - px[a], dz = pz[b] - pz[a];
      const l = Math.hypot(dx, dz) || 1;
      dx /= l; dz /= l;
      tx[i] = dx; tz[i] = dz; nx[i] = -dz; nz[i] = dx;
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

    // поребрики: в поворотах с радиусом меньше ~45 м, с запасом по краям
    this.kerb = new Uint8Array(N);
    for (let i = 0; i < N; i++) {
      if (Math.abs(curv[i]) > 1 / 45) for (let j = -9; j <= 9; j++) this.kerb[(i + j + N) % N] = 1;
    }

    // секторы: границы в долях круга
    const sf = def.sectors || [1 / 3, 2 / 3];
    this.sectorS = [0, sf[0] * length, sf[1] * length];

    this.findCrossings();
    this.computeRacingLine();
    this.buildBarriers();
    this.buildPit();
    this.buildGrid();
  }

  idx(i) { return ((i % this.N) + this.N) % this.N; }
  wrapS(s) { const L = this.length; return ((s % L) + L) % L; }
  deltaS(a, b) { const L = this.length; let d = (a - b) % L; if (d > L / 2) d -= L; if (d < -L / 2) d += L; return d; }
  sIdx(s) { return this.idx(Math.round(this.wrapS(s) / this.ds)); }
  sectorOf(s) { s = this.wrapS(s); return s < this.sectorS[1] ? 0 : s < this.sectorS[2] ? 1 : 2; }

  // мост/тоннель: участки, проходящие друг над другом
  findCrossings() {
    const N = this.N;
    this.bridge = new Uint8Array(N); // 1 — верхний ярус над другим участком, 2 — нижний (под мостом)
    this.hasBridge = false;
    for (let i = 0; i < N; i += 2) {
      for (let j = 0; j < N; j += 2) {
        let di = Math.abs(i - j); di = Math.min(di, N - di);
        if (di * this.ds < 60) continue;
        const d = Math.hypot(this.px[i] - this.px[j], this.pz[i] - this.pz[j]);
        if (d < this.barrier * 2 + 4 && Math.abs(this.py[i] - this.py[j]) > 2.5) {
          const hi = this.py[i] > this.py[j];
          for (let k = -2; k <= 2; k++) this.bridge[this.idx(i + k)] = hi ? 1 : 2;
          this.hasBridge = true;
        }
      }
    }
  }

  // Гоночная траектория: итеративное сглаживание с ограничением ширины
  computeRacingLine() {
    const N = this.N;
    const lim = this.half - 1.3;
    let o = new Float32Array(N);
    const qx = new Float32Array(N), qz = new Float32Array(N);
    const passes = [[12, 240], [6, 240], [3, 200], [2, 120]];
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
    for (let s = 0; s < 4; s++) {
      const c = o.slice();
      for (let i = 0; i < N; i++) o[i] = (c[(i - 1 + N) % N] + 2 * c[i] + c[(i + 1) % N]) / 4;
    }
    this.lineOff = o;
    const lx = new Float32Array(N), lz = new Float32Array(N);
    for (let i = 0; i < N; i++) { lx[i] = this.px[i] + this.nx[i] * o[i]; lz[i] = this.pz[i] + this.nz[i] * o[i]; }
    this.lx = lx; this.lz = lz;
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

  // отбойники: расстояние от оси слева (<0) и справа (>0)
  buildBarriers() {
    const N = this.N;
    this.barL = new Float32Array(N).fill(this.barrier);
    this.barR = new Float32Array(N).fill(this.barrier);
    // на мосту вместо травы и покрышек — бетонные парапеты у самого полотна
    if (this.hasBridge) {
      for (let i = 0; i < N; i++) {
        if (this.py[i] <= 2.5) continue;
        let best = Infinity;
        for (let j = 0; j < N; j += 2) {
          let di = Math.abs(j - i); di = Math.min(di, N - di);
          if (di < 60) continue;
          best = Math.min(best, (this.px[i] - this.px[j]) ** 2 + (this.pz[i] - this.pz[j]) ** 2);
        }
        if (Math.sqrt(best) < this.barrier * 2 + 6) { this.barL[i] = this.half + 1.5; this.barR[i] = this.half + 1.5; }
      }
    }
  }

  // Пит-лейн: полоса вдоль стартовой прямой за пит-стеной, с въездом и выездом.
  buildPit() {
    const p = this.def.pit;
    this.pit = null;
    if (!p) return;
    const L = this.length;
    const side = p.side;
    const sEntry = this.wrapS(-p.before), sExit = this.wrapS(p.after);
    const off = this.half + 3.2 + 2.9; // осевая пит-лейна от оси трассы
    const pts = [];
    const span = p.before + p.after;
    const merge = 34;
    for (let t = 0; t <= span; t += 4) {
      const s = this.wrapS(-p.before + t);
      let k = 1;
      if (t < merge) k = t / merge;
      else if (t > span - merge) k = (span - t) / merge;
      k = k * k * (3 - 2 * k);
      const d = side * (this.half - 0.6 + (off - this.half + 0.6) * k);
      const q = this.pointAt(s, d);
      pts.push([q.x, q.z, q.y - 0.06]);
    }
    const curve = sampleCurve(pts, false, 0);
    const len = curve.getLength();
    const M = Math.round(len);
    const sp = curve.getSpacedPoints(M);
    const x = new Float32Array(M + 1), y = new Float32Array(M + 1), z = new Float32Array(M + 1), nnx = new Float32Array(M + 1), nnz = new Float32Array(M + 1);
    for (let i = 0; i <= M; i++) { x[i] = sp[i].x; y[i] = sp[i].y + 0.07; z[i] = sp[i].z; }
    for (let i = 0; i <= M; i++) {
      const a = Math.max(0, i - 1), b = Math.min(M, i + 1);
      let dx = x[b] - x[a], dz = z[b] - z[a];
      const l = Math.hypot(dx, dz) || 1;
      nnx[i] = -dz / l; nnz[i] = dx / l;
    }
    this.pit = { side, sEntry, sExit, off, half: 2.9, M, x, y, z, nx: nnx, nz: nnz, len, merge, span, before: p.before, after: p.after };
    // вдоль пит-лейна (кроме зон въезда/выезда) отбойник со стороны боксов — пит-стена
    for (let t = merge + 6; t <= span - merge - 6; t += this.ds) {
      const i = this.sIdx(-p.before + t);
      if (side < 0) this.barL[i] = this.half + 3.2; else this.barR[i] = this.half + 3.2;
    }
    // зоны въезда/выезда: там можно пересечь линию отбойника, если попал в пит-лейн
    this.pitOpen = new Uint8Array(this.N);
    for (let t = 0; t < merge + 8; t += this.ds) { this.pitOpen[this.sIdx(-p.before + t)] = 1; this.pitOpen[this.sIdx(p.after - t)] = 1; }
  }

  // проекция на осевую пит-лейна; null, если далеко
  projectPit(x, z, hint = -1, out = {}) {
    const P = this.pit;
    if (!P) return null;
    let best = -1, bd = Infinity;
    const lo = hint >= 0 ? Math.max(0, hint - 10) : 0, hi = hint >= 0 ? Math.min(P.M, hint + 10) : P.M;
    for (let i = lo; i <= hi; i++) {
      const dx = x - P.x[i], dz = z - P.z[i], d = dx * dx + dz * dz;
      if (d < bd) { bd = d; best = i; }
    }
    if (hint >= 0 && (best === lo || best === hi) && bd > 9) return this.projectPit(x, z, -1, out);
    const i = best;
    out.i = i;
    out.d = (x - P.x[i]) * P.nx[i] + (z - P.z[i]) * P.nz[i];
    out.y = P.y[i];
    out.t = i / P.M;
    out.dist = Math.sqrt(bd);
    return out;
  }

  // Сетка покрытия 0,5 м: 1 — асфальт/поребрик, 0 — трава и дальше.
  buildGrid() {
    const b = this.bounds(30);
    const cell = 0.5;
    const W = Math.ceil((b.maxX - b.minX) / cell), H = Math.ceil((b.maxZ - b.minZ) / cell);
    const g = new Uint8Array(W * H);
    const mark = (x, z) => {
      const cx = Math.floor((x - b.minX) / cell), cz = Math.floor((z - b.minZ) / cell);
      if (cx >= 0 && cz >= 0 && cx < W && cz < H) g[cz * W + cx] = 1;
    };
    const N = this.N;
    for (let i = 0; i < N; i++) {
      const j = (i + 1) % N;
      const edge = this.half + (this.kerb[i] ? this.kerbW * 0.8 : 0.2);
      for (let t = 0; t < 1; t += 0.3) {
        const cx = this.px[i] + (this.px[j] - this.px[i]) * t, cz = this.pz[i] + (this.pz[j] - this.pz[i]) * t;
        const nX = this.nx[i], nZ = this.nz[i];
        for (let d = -edge; d <= edge; d += 0.25) mark(cx + nX * d, cz + nZ * d);
      }
    }
    this.grid = { g, W, H, cell, minX: b.minX, minZ: b.minZ };
  }

  onGrid(x, z) {
    const G = this.grid;
    const cx = Math.floor((x - G.minX) / G.cell), cz = Math.floor((z - G.minZ) / G.cell);
    if (cx < 0 || cz < 0 || cx >= G.W || cz >= G.H) return 0;
    return G.g[cz * G.W + cx];
  }

  // луч из (x,z) в направлении курса h (sin, cos): расстояние до края полотна
  ray(x, z, h, max = 30, step = 0.75) {
    const G = this.grid, sx = Math.sin(h), sz = Math.cos(h);
    const inv = 1 / G.cell, W = G.W, H = G.H, g = G.g;
    for (let d = step; d <= max; d += step) {
      const cx = Math.floor((x + sx * d - G.minX) * inv), cz = Math.floor((z + sz * d - G.minZ) * inv);
      if (cx < 0 || cz < 0 || cx >= W || cz >= H || g[cz * W + cx] === 0) return d - step * 0.5;
    }
    return max;
  }

  // Проекция точки (x, z) на осевую. hint — индекс-подсказка для локального поиска.
  project(x, z, hint = -1, y = null, out = {}) {
    const N = this.N;
    let best = -1, bestD = Infinity, bestJ = 0;
    const scan = (from, r) => {
      best = -1; bestD = Infinity;
      for (let j = -r; j <= r; j++) {
        const i = from + j < 0 ? from + j + N : from + j >= N ? from + j - N : from + j;
        const dx = x - this.px[i], dz = z - this.pz[i];
        let d = dx * dx + dz * dz;
        if (y !== null) { const dy = y - this.py[i]; d += dy * dy * 4; }
        if (d < bestD) { bestD = d; best = i; bestJ = j; }
      }
    };
    if (hint >= 0) {
      scan(hint, 8);
      if (bestJ <= -8 || bestJ >= 8) scan(best, 40);
    }
    if (best < 0 || bestD > 40 * 40) {
      best = -1; bestD = Infinity;
      for (let i = 0; i < N; i++) {
        const dx = x - this.px[i], dz = z - this.pz[i];
        let d = dx * dx + dz * dz;
        if (y !== null) { const dy = y - this.py[i]; d += dy * dy * 4; }
        if (d < bestD) { bestD = d; best = i; }
      }
    }
    let i0 = best, t = 0;
    const nxt = best + 1 === N ? 0 : best + 1, prv = best === 0 ? N - 1 : best - 1;
    const segT = (a, b) => {
      const sx = this.px[b] - this.px[a], sz = this.pz[b] - this.pz[a];
      const l2 = sx * sx + sz * sz || 1;
      return ((x - this.px[a]) * sx + (z - this.pz[a]) * sz) / l2;
    };
    const tf = segT(best, nxt);
    if (tf >= 0) { i0 = best; t = Math.min(1, tf); } else { i0 = prv; t = Math.max(0, Math.min(1, segT(prv, best))); }
    const i1 = i0 + 1 === N ? 0 : i0 + 1;
    const cx = this.px[i0] + (this.px[i1] - this.px[i0]) * t;
    const cz = this.pz[i0] + (this.pz[i1] - this.pz[i0]) * t;
    const nX = this.nx[i0] + (this.nx[i1] - this.nx[i0]) * t;
    const nZ = this.nz[i0] + (this.nz[i1] - this.nz[i0]) * t;
    const nl = Math.hypot(nX, nZ) || 1;
    out.idx = best; out.i0 = i0; out.t = t;
    out.s = (i0 + t) * this.ds;
    out.d = ((x - cx) * nX + (z - cz) * nZ) / nl;
    out.nx = nX / nl; out.nz = nZ / nl;
    out.y = this.py[i0] + (this.py[i1] - this.py[i0]) * t;
    out.head = this.head[i0];
    out.slope = this.slope[i0];
    return out;
  }

  pointAt(s, d = 0, out = new THREE.Vector3()) {
    const f = this.wrapS(s) / this.ds;
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
    const f = this.wrapS(s) / this.ds;
    const i0 = this.idx(Math.floor(f)), i1 = (i0 + 1) % this.N, t = f - Math.floor(f);
    return this.head[i0] + wrapAngle(this.head[i1] - this.head[i0]) * t;
  }

  lineOffsetAt(s) {
    const f = this.wrapS(s) / this.ds;
    const i0 = this.idx(Math.floor(f)), i1 = (i0 + 1) % this.N, t = f - Math.floor(f);
    return this.lineOff[i0] + (this.lineOff[i1] - this.lineOff[i0]) * t;
  }

  bounds(pad = 0) {
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (let i = 0; i < this.N; i++) {
      minX = Math.min(minX, this.px[i]); maxX = Math.max(maxX, this.px[i]);
      minZ = Math.min(minZ, this.pz[i]); maxZ = Math.max(maxZ, this.pz[i]);
    }
    return { minX: minX - pad, maxX: maxX + pad, minZ: minZ - pad, maxZ: maxZ + pad };
  }

  distToCenter(x, z, step = 3) {
    let best = Infinity;
    for (let i = 0; i < this.N; i += step) {
      const dx = x - this.px[i], dz = z - this.pz[i];
      const d = dx * dx + dz * dz;
      if (d < best) best = d;
    }
    let pd = Infinity;
    if (this.pit) for (let i = 0; i <= this.pit.M; i += step) {
      const dx = x - this.pit.x[i], dz = z - this.pit.z[i];
      pd = Math.min(pd, dx * dx + dz * dz);
    }
    return Math.min(Math.sqrt(best), Math.sqrt(pd) + this.barrier - this.pit?.half - 1 || Infinity);
  }
}

export { wrapAngle };
