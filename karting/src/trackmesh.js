// Визуальная часть трассы. Реальные картодромы: асфальт с шумом, накатанная
// резина на траектории, красно-белые поребрики в поворотах, трава, стенки из
// покрышек, пит-лейн с пит-стеной и шатрами команд, таблички секторов, мост PFI.
// Фан-трассы: прежний аркадный стиль (рекламные щиты, неон, ускорители).
import * as THREE from 'three';
import { asphaltTexture, groundTexture, curbTexture, barrierTexture, checkerTexture, chevronTexture,
  kartAsphaltTexture, rubberTexture, tireStackTexture, concreteTexture, canopyTexture, sectorBoardTexture } from './textures.js';
import { GRID_GAP } from './config.js';

// Лента вдоль трассы. edge(i) → [dA, yA, dB, yB] (A — левее B).
function ribbon(geom, edge, { vRepeat = 10, uA = 0, uB = 1, from = 0, to = null, wall = false, flipU = false } = {}) {
  const N = geom.N;
  const pos = [], uv = [], idx = [];
  const last = to === null ? N : to - from;
  for (let k = 0; k <= last; k++) {
    const i = (from + k) % N;
    const [dA, yA, dB, yB] = edge(i);
    const px = geom.px[i], pz = geom.pz[i], nx = geom.nx[i], nz = geom.nz[i];
    pos.push(px + nx * dA, yA, pz + nz * dA, px + nx * dB, yB, pz + nz * dB);
    const s = (from + k) * geom.ds;
    if (wall) { const u = (flipU ? -s : s) / vRepeat; uv.push(u, 0, u, 1); }
    else uv.push(uA, s / vRepeat, uB, s / vRepeat);
  }
  for (let k = 0; k < last; k++) {
    const a = k * 2, b = a + 1, c = a + 2, d = a + 3;
    idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

export function placeOnTrack(obj, geom, s, d, yOff = 0) {
  const p = geom.pointAt(geom.wrapS(s), d);
  obj.position.set(p.x, p.y + yOff, p.z);
  const i = geom.idx(Math.round(s / geom.ds));
  obj.rotation.set(-Math.atan(geom.slope[i]), geom.headingAt(geom.wrapS(s)), 0, 'YXZ');
  return obj;
}

function buildFunTrack(geom, theme, quality) {
  const group = new THREE.Group();
  const N = geom.N, H = geom.half, B = geom.barrier;
  const shadows = quality !== 'low';

  // асфальт
  const aTex = asphaltTexture(theme.asphalt, theme.night);
  const road = new THREE.Mesh(
    ribbon(geom, (i) => [-H, geom.py[i], H, geom.py[i]], { vRepeat: 14 }),
    new THREE.MeshStandardMaterial({ map: aTex, roughness: theme.night ? 0.6 : 0.88, metalness: 0.0 })
  );
  road.receiveShadow = shadows;
  group.add(road);

  // обочины (зона безопасности)
  const runKind = theme.ground === 'grass' ? 'runoff-grass' : theme.ground;
  const rTex = groundTexture(runKind);
  const runMat = new THREE.MeshStandardMaterial({ map: rTex, roughness: 1, color: theme.ground === 'city' ? 0x9a9aa8 : 0xffffff });
  for (const side of [-1, 1]) {
    const g = ribbon(geom, (i) => side < 0 ? [-B - 0.3, geom.py[i] - 0.01, -H, geom.py[i] - 0.01] : [H, geom.py[i] - 0.01, B + 0.3, geom.py[i] - 0.01], { vRepeat: 10, uA: 0, uB: (B - H) / 10 });
    const m = new THREE.Mesh(g, runMat);
    m.receiveShadow = shadows;
    group.add(m);
  }

  // насыпи: от отбойника вниз до земли
  const skirtMat = new THREE.MeshStandardMaterial({ map: rTex, roughness: 1, color: theme.ground === 'city' ? 0x77778a : 0xdddddd });
  let maxY = 0;
  for (let i = 0; i < N; i++) maxY = Math.max(maxY, geom.py[i]);
  if (maxY > 0.3) {
    for (const side of [-1, 1]) {
      const g = ribbon(geom, (i) => {
        const y = geom.py[i];
        const w = 1.5 + y * 1.8;
        return side < 0 ? [-B - 0.3 - w, -0.25, -B - 0.3, y - 0.01] : [B + 0.3, y - 0.01, B + 0.3 + w, -0.25];
      }, { vRepeat: 10 });
      const m = new THREE.Mesh(g, skirtMat);
      m.receiveShadow = shadows;
      group.add(m);
    }
  }

  // поребрики в поворотах (с внутренней и внешней стороны)
  const cTex = curbTexture(theme.night);
  const curbMat = new THREE.MeshStandardMaterial({ map: cTex, roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  const need = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    if (Math.abs(geom.curv[i]) > 1 / 55) {
      for (let j = -10; j <= 10; j++) need[(i + j + N) % N] = 1;
    }
  }
  const runs = [];
  const i0 = need.indexOf(0);
  if (i0 < 0) runs.push([0, N]);
  else {
    let k = 0;
    while (k < N) {
      const i = (i0 + k) % N;
      if (need[i]) {
        let len = 0;
        while (k + len < N && need[(i0 + k + len) % N]) len++;
        runs.push([i, len]);
        k += len;
      } else k++;
    }
  }
  for (const [a, len] of runs) {
    if (len < 4) continue;
    for (const side of [-1, 1]) {
      const g = ribbon(geom, (i) => {
        const y = geom.py[i];
        return side < 0 ? [-H - 1.1, y + 0.025, -H + 0.35, y + 0.045] : [H - 0.35, y + 0.045, H + 1.1, y + 0.025];
      }, { from: a, to: a + len, vRepeat: 3 });
      const m = new THREE.Mesh(g, curbMat);
      m.receiveShadow = shadows;
      group.add(m);
    }
  }

  // отбойники с рекламными щитами
  const bTex = barrierTexture(theme.barrierStyle);
  const wallMat = new THREE.MeshStandardMaterial({
    map: bTex, roughness: 0.6, side: THREE.DoubleSide,
    emissive: theme.night ? 0xffffff : 0x000000, emissiveMap: theme.night ? bTex : null, emissiveIntensity: theme.night ? 0.9 : 0,
  });
  const capMat = new THREE.MeshStandardMaterial({ color: theme.night ? 0x1a1a26 : 0xe8e8e8, roughness: 0.5 });
  const postMat = new THREE.MeshStandardMaterial({ color: 0x2a2d33, roughness: 0.6 });
  const WALL_H = 1.0;
  for (const side of [-1, 1]) {
    const d = side * (B + 0.15);
    const wg = ribbon(geom, (i) => [d, geom.py[i] - 0.3, d, geom.py[i] + WALL_H], { vRepeat: 32, wall: true, flipU: side > 0 });
    const w = new THREE.Mesh(wg, wallMat);
    w.castShadow = shadows; w.receiveShadow = shadows;
    group.add(w);
    const cg = ribbon(geom, (i) => side < 0 ? [d - 0.35, geom.py[i] + WALL_H, d + 0.05, geom.py[i] + WALL_H] : [d - 0.05, geom.py[i] + WALL_H, d + 0.35, geom.py[i] + WALL_H], { vRepeat: 10 });
    group.add(new THREE.Mesh(cg, capMat));
    // задняя стенка щита
    const bg = ribbon(geom, (i) => [d + side * 0.3, geom.py[i] - 0.3, d + side * 0.3, geom.py[i] + WALL_H], { vRepeat: 10, wall: true });
    group.add(new THREE.Mesh(bg, postMat));
  }

  // неоновая подсветка по верху отбойников ночью
  if (theme.night) {
    for (const side of [-1, 1]) {
      const d = side * (B + 0.15);
      const ng = ribbon(geom, (i) => side < 0 ? [d - 0.06, geom.py[i] + WALL_H + 0.02, d + 0.06, geom.py[i] + WALL_H + 0.02] : [d - 0.06, geom.py[i] + WALL_H + 0.02, d + 0.06, geom.py[i] + WALL_H + 0.02], { vRepeat: 10 });
      group.add(new THREE.Mesh(ng, new THREE.MeshBasicMaterial({ color: side < 0 ? 0xff2d9a : 0x23e1ff })));
    }
  }

  const lightMats = addStartArea(group, geom, theme, shadows, B);

  // ускорители
  const pads = [];
  const chev = chevronTexture();
  const padMat = new THREE.MeshBasicMaterial({ map: chev, transparent: true, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -3 });
  chev.repeat.set(1, 2);
  for (const [f, d] of geom.def.boostPads || []) {
    const s = f * geom.length;
    const pad = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 6).rotateX(-Math.PI / 2).rotateY(Math.PI), padMat);
    placeOnTrack(pad, geom, s, d, 0.02);
    pad.renderOrder = 1;
    group.add(pad);
    pads.push({ s, d, len: 6, w: 3.4 });
  }

  return {
    group, pads,
    setLights(n, green = false) {
      lightMats.forEach((m, i) => {
        if (green) m.color.set(0x19ff5a);
        else m.color.set(i < n ? 0xff1a12 : 0x220404);
      });
    },
    update(dt) { chev.offset.y -= dt * 1.6; },
  };
}

function addStartArea(group, geom, theme, shadows, B) {
  // старт/финиш: шахматная полоса
  const chk = new THREE.Mesh(new THREE.PlaneGeometry(geom.roadWidth, 2.2).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ map: checkerTexture(), roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }));
  chk.material.map.repeat.set(geom.roadWidth / 8, 1);
  placeOnTrack(chk, geom, 0, 0, 0.012);
  chk.receiveShadow = shadows;
  group.add(chk);

  // разметка стартовой решётки
  const gridMat = new THREE.MeshBasicMaterial({ color: 0xf0f0f0, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  for (let k = 0; k < 8; k++) {
    const { s, d } = gridSlot(geom, k);
    const bar = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 0.18).rotateX(-Math.PI / 2), gridMat);
    placeOnTrack(bar, geom, s + 1.6, d, 0.012);
    group.add(bar);
    for (const sx of [-1, 1]) {
      const tick = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.9).rotateX(-Math.PI / 2), gridMat);
      placeOnTrack(tick, geom, s + 1.2, d + sx * 0.92, 0.012);
      group.add(tick);
    }
  }

  // арка старта с огнями
  const gantry = new THREE.Group();
  const pillarMat = new THREE.MeshStandardMaterial({ color: theme.night ? 0x22222e : 0x30343c, roughness: 0.5, metalness: 0.4 });
  const span = B + 1.2;
  for (const sx of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(0.6, 7, 0.6), pillarMat);
    p.position.set(sx * span, 3.5, 0);
    p.castShadow = shadows;
    gantry.add(p);
  }
  const beam = new THREE.Mesh(new THREE.BoxGeometry(span * 2 + 0.6, 1.4, 0.7), pillarMat);
  beam.position.set(0, 6.6, 0);
  beam.castShadow = shadows;
  gantry.add(beam);
  const banner = new THREE.Mesh(new THREE.PlaneGeometry(span * 1.2, 1.1), new THREE.MeshBasicMaterial({ map: gantryTexture(), toneMapped: false }));
  banner.position.set(0, 6.6, -0.36);
  banner.rotation.y = Math.PI;
  const banner2 = banner.clone();
  banner2.position.z = 0.36;
  banner2.rotation.y = 0;
  gantry.add(banner, banner2);
  // панель огней: 5 колонок по 2 лампы
  const panel = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.1, 0.4), new THREE.MeshStandardMaterial({ color: 0x0b0b0d, roughness: 0.4 }));
  panel.position.set(0, 5.35, -0.1);
  gantry.add(panel);
  const lightMats = [];
  const lampGeo = new THREE.CircleGeometry(0.22, 16);
  for (let c = 0; c < 5; c++) {
    const mat = new THREE.MeshBasicMaterial({ color: 0x220404, toneMapped: false });
    lightMats.push(mat);
    for (let r = 0; r < 2; r++) {
      const l = new THREE.Mesh(lampGeo, mat);
      l.position.set(-1.6 + c * 0.8, 5.6 - r * 0.5, -0.31);
      l.rotation.y = Math.PI;
      gantry.add(l);
    }
  }
  placeOnTrack(gantry, geom, 0, 0, 0);
  gantry.rotation.x = 0;
  group.add(gantry);

  return lightMats;
}

export function gridSlot(geom, k) {
  const row = Math.floor(k / 2);
  const side = k % 2 === 0 ? -1 : 1;
  const s = geom.wrapS(-6 - row * GRID_GAP - (k % 2) * 3.5);
  return { s, d: side * 2.6 };
}

function gantryTexture() {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 96;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#15171c'; ctx.fillRect(0, 0, 1024, 96);
  const sq = 24;
  for (let y = 0; y < 4; y++) for (let x = 0; x < 6; x++) {
    ctx.fillStyle = (x + y) % 2 ? '#f4f4f4' : '#15171c';
    ctx.fillRect(x * sq, y * sq, sq, sq);
    ctx.fillRect(1024 - (x + 1) * sq, y * sq, sq, sq);
  }
  ctx.fillStyle = '#ffd000';
  ctx.font = '900 58px "Unbounded", "Arial Black", sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('СТАРТ • ФИНИШ', 512, 52, 760);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function buildTrackMeshes(geom, theme, quality) {
  return geom.def.fun ? buildFunTrack(geom, theme, quality) : buildRealTrack(geom, theme, quality);
}

// расстояние от точки до участков трассы, далёких по ходу от индекса i
function distOther(geom, x, z, i, win = 60) {
  const N = geom.N;
  let best = Infinity;
  for (let j = 0; j < N; j += 2) {
    let di = Math.abs(j - i); di = Math.min(di, N - di);
    if (di < win) continue;
    const dx = x - geom.px[j], dz = z - geom.pz[j];
    const d = dx * dx + dz * dz;
    if (d < best) best = d;
  }
  return Math.sqrt(best);
}

// лента вдоль пит-лейна
function pitRibbon(P, dA, dB, yA, yB, vRepeat, wall = false) {
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= P.M; i++) {
    pos.push(P.x[i] + P.nx[i] * dA, P.y[i] + yA, P.z[i] + P.nz[i] * dA, P.x[i] + P.nx[i] * dB, P.y[i] + yB, P.z[i] + P.nz[i] * dB);
    if (wall) uv.push(i / vRepeat, 0, i / vRepeat, 1); else uv.push(0, i / vRepeat, 1, i / vRepeat);
  }
  for (let k = 0; k < P.M; k++) { const a = k * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function buildRealTrack(geom, theme, quality) {
  const group = new THREE.Group();
  const N = geom.N, H = geom.half;
  const shadows = quality !== 'low';
  const P = geom.pit;

  // признаки моста: верхний ярус над другой частью трассы
  const upper = new Uint8Array(N), near = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    near[i] = geom.hasBridge ? distOther(geom, geom.px[i], geom.pz[i], i) : 999;
    if (geom.hasBridge && geom.py[i] > 2.5 && near[i] < geom.barrier * 2 + 6) upper[i] = 1;
  }

  // асфальт
  const road = new THREE.Mesh(
    ribbon(geom, (i) => [-H, geom.py[i], H, geom.py[i]], { vRepeat: 11 }),
    new THREE.MeshStandardMaterial({ map: kartAsphaltTexture(theme.asphaltTone || 62), roughness: 0.9, metalness: 0 })
  );
  road.receiveShadow = shadows;
  group.add(road);

  // накатанная резина по гоночной траектории
  {
    const pos = [], uv = [], idx = [], hw = 1.15;
    for (let k = 0; k <= N; k++) {
      const i = k % N;
      const x = geom.lx[i], z = geom.lz[i], y = geom.py[i] + 0.012;
      pos.push(x - geom.nx[i] * hw, y, z - geom.nz[i] * hw, x + geom.nx[i] * hw, y, z + geom.nz[i] * hw);
      uv.push(0, (k * geom.ds) / 9, 1, (k * geom.ds) / 9);
    }
    for (let k = 0; k < N; k++) { const a = k * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    const rub = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: rubberTexture(), transparent: true, opacity: 0.75, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }));
    rub.renderOrder = 1;
    group.add(rub);
  }

  // трава в зоне безопасности
  const rTex = groundTexture('runoff-grass');
  const runMat = new THREE.MeshStandardMaterial({ map: rTex, roughness: 1, color: theme.grassTint || 0xffffff });
  for (const side of [-1, 1]) {
    const g = ribbon(geom, (i) => {
      if (upper[i]) return side < 0 ? [-H, geom.py[i] - 0.02, -H, geom.py[i] - 0.02] : [H, geom.py[i] - 0.02, H, geom.py[i] - 0.02];
      const bar = side < 0 ? geom.barL[i] : geom.barR[i];
      return side < 0 ? [-bar - 0.9, geom.py[i] - 0.012, -H, geom.py[i] - 0.012] : [H, geom.py[i] - 0.012, bar + 0.9, geom.py[i] - 0.012];
    }, { vRepeat: 8, uA: 0, uB: 0.8 });
    const m = new THREE.Mesh(g, runMat);
    m.receiveShadow = shadows;
    group.add(m);
  }

  // насыпи подъёмов (не под мостом и не поверх соседнего участка)
  let maxY = 0;
  for (let i = 0; i < N; i++) maxY = Math.max(maxY, geom.py[i]);
  if (maxY > 0.3) {
    const skirtMat = new THREE.MeshStandardMaterial({ map: rTex, roughness: 1, color: 0xcfd6c0 });
    for (const side of [-1, 1]) {
      const g = ribbon(geom, (i) => {
        const y = geom.py[i];
        const w = 1.5 + y * 1.8;
        const bar = (side < 0 ? geom.barL[i] : geom.barR[i]) + 0.9;
        if (upper[i] || near[i] < geom.barrier * 2 + w + 1) return side < 0 ? [-bar, y - 0.02, -bar, y - 0.02] : [bar, y - 0.02, bar, y - 0.02];
        return side < 0 ? [-bar - w, -0.2, -bar, y - 0.013] : [bar, y - 0.013, bar + w, -0.2];
      }, { vRepeat: 10 });
      const m = new THREE.Mesh(g, skirtMat);
      m.receiveShadow = shadows;
      group.add(m);
    }
  }

  // поребрики в поворотах
  const curbMat = new THREE.MeshStandardMaterial({ map: curbTexture(false), roughness: 0.65, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  const runs = [];
  const i0 = geom.kerb.indexOf(0);
  if (i0 < 0) runs.push([0, N]);
  else {
    let k = 0;
    while (k < N) {
      const i = (i0 + k) % N;
      if (geom.kerb[i]) { let len = 0; while (k + len < N && geom.kerb[(i0 + k + len) % N]) len++; runs.push([i, len]); k += len; } else k++;
    }
  }
  for (const [a, len] of runs) {
    if (len < 4) continue;
    for (const side of [-1, 1]) {
      const g = ribbon(geom, (i) => {
        const y = geom.py[i];
        return side < 0 ? [-H - geom.kerbW, y + 0.02, -H + 0.25, y + 0.04] : [H - 0.25, y + 0.04, H + geom.kerbW, y + 0.02];
      }, { from: a, to: a + len, vRepeat: 2.4 });
      const m = new THREE.Mesh(g, curbMat);
      m.receiveShadow = shadows;
      group.add(m);
    }
  }

  // стенки из покрышек
  const tirePts = [];
  const inPitSpan = (s) => {
    if (!P) return false;
    const t = geom.deltaS(s, geom.wrapS(-P.before));
    const tt = t < 0 ? t + geom.length : t;
    return tt <= P.span + 6;
  };
  for (let s = 0; s < geom.length; s += 0.64) {
    const i = geom.sIdx(s);
    if (upper[i]) continue;
    for (const side of [-1, 1]) {
      if (P && side === P.side && inPitSpan(s)) continue;
      const bar = side < 0 ? geom.barL[i] : geom.barR[i];
      const p = geom.pointAt(s, side * (bar + 0.35));
      tirePts.push([p.x, p.y, p.z, s]);
    }
  }
  const tireGeo = new THREE.CylinderGeometry(0.31, 0.31, 0.72, 12, 1).translate(0, 0.36, 0);
  const tireMat = new THREE.MeshStandardMaterial({ map: tireStackTexture(), roughness: 0.95, color: 0xffffff });
  const tires = new THREE.InstancedMesh(tireGeo, tireMat, tirePts.length);
  const dummy = new THREE.Object3D();
  const cBlack = new THREE.Color(0x2c2c2c), cWhite = new THREE.Color(0xf2f2f2), cRed = new THREE.Color(0xd02a24), cBlue = new THREE.Color(0x2a5bd0);
  tirePts.forEach(([x, y, z, s], k) => {
    dummy.position.set(x, y - 0.05, z); dummy.rotation.set(0, (k * 1.7) % 6.28, 0); dummy.updateMatrix();
    tires.setMatrixAt(k, dummy.matrix);
    const blk = Math.floor(s / 6) % 7;
    tires.setColorAt(k, blk === 0 ? cWhite : blk === 3 ? cRed : blk === 5 ? cBlue : cBlack);
  });
  tires.castShadow = quality === 'high';
  tires.receiveShadow = shadows;
  group.add(tires);

  // пит-лейн: полотно, пит-стена, шатры команд
  if (P) {
    const pitRoad = new THREE.Mesh(pitRibbon(P, -P.half, P.half, -0.006, -0.006, 11), new THREE.MeshStandardMaterial({ map: kartAsphaltTexture((theme.asphaltTone || 62) + 6), roughness: 0.9, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }));
    pitRoad.receiveShadow = shadows;
    group.add(pitRoad);
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xf2f2f2, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
    const outerLine = new THREE.Mesh(pitRibbon(P, P.side * (P.half - 0.25), P.side * (P.half - 0.1), 0.004, 0.004, 5), lineMat);
    group.add(outerLine);
    // пит-стена между трассой и пит-лейном
    const wallMat = new THREE.MeshStandardMaterial({ map: concreteTexture(), roughness: 0.8, side: THREE.DoubleSide });
    const from = geom.sIdx(-P.before + P.merge + 6), len = Math.round((P.span - 2 * P.merge - 12) / geom.ds);
    const d = P.side * (H + 3.2 + 0.15);
    const wg = ribbon(geom, (i) => [d, geom.py[i] - 0.05, d, geom.py[i] + 0.95], { from, to: from + len, vRepeat: 8, wall: true });
    const wall = new THREE.Mesh(wg, wallMat);
    wall.castShadow = shadows; wall.receiveShadow = shadows;
    group.add(wall);
    const cap = ribbon(geom, (i) => [d - 0.2, geom.py[i] + 0.95, d + 0.2, geom.py[i] + 0.95], { from, to: from + len, vRepeat: 8 });
    group.add(new THREE.Mesh(cap, new THREE.MeshStandardMaterial({ color: 0xd8d6cf, roughness: 0.8 })));
    // шатры команд вдоль пит-лейна
    const tentCols = ['#d0302a', '#1f6fe0', '#f5c518', '#2e9e4b', '#f2f2f2', '#8b3fd9', '#f07818', '#11a9c4'];
    const roofGeo = new THREE.ConeGeometry(2.6, 1.1, 4, 1).rotateY(Math.PI / 4);
    const poleGeo = new THREE.CylinderGeometry(0.05, 0.05, 2.4, 5);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.6, roughness: 0.4 });
    const trolleyMat = new THREE.MeshStandardMaterial({ color: 0x3a3f47, roughness: 0.6 });
    let n = 0;
    for (let i = P.merge + 4; i < P.M - P.merge - 4; i += 8) {
      const nx = P.nx[i], nz = P.nz[i];
      const cx = P.x[i] + nx * P.side * (P.half + 3.2), cz = P.z[i] + nz * P.side * (P.half + 3.2), cy = P.y[i];
      const hd = Math.atan2(P.x[Math.min(P.M, i + 1)] - P.x[i], P.z[Math.min(P.M, i + 1)] - P.z[i]);
      const tent = new THREE.Group();
      const roof = new THREE.Mesh(roofGeo, new THREE.MeshStandardMaterial({ map: canopyTexture(tentCols[n % tentCols.length]), roughness: 0.8 }));
      roof.position.y = 2.9; roof.castShadow = shadows;
      tent.add(roof);
      for (const [px, pz] of [[-1.75, -1.75], [1.75, -1.75], [-1.75, 1.75], [1.75, 1.75]]) {
        const pole = new THREE.Mesh(poleGeo, poleMat); pole.position.set(px, 1.2, pz); tent.add(pole);
      }
      const trolley = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 0.9), trolleyMat);
      trolley.position.set(0.4, 0.25, 0.6); trolley.castShadow = shadows; tent.add(trolley);
      tent.position.set(cx, cy, cz); tent.rotation.y = hd;
      group.add(tent);
      n++;
    }
  }

  // мост PFI: парапеты, плита, опоры
  if (geom.hasBridge) {
    const concrete = new THREE.MeshStandardMaterial({ map: concreteTexture(), roughness: 0.85, side: THREE.DoubleSide });
    const deckMat = new THREE.MeshStandardMaterial({ color: 0x9a988f, roughness: 0.9, side: THREE.DoubleSide });
    const spans = [];
    let st = -1;
    for (let k = 0; k <= N; k++) { const on = k < N && upper[k]; if (on && st < 0) st = k; if (!on && st >= 0) { spans.push([st, k - st]); st = -1; } }
    for (const [a, len] of spans) {
      for (const side of [-1, 1]) {
        const d = side * (H + 0.7);
        group.add(new THREE.Mesh(ribbon(geom, (i) => [d, geom.py[i] - 0.1, d, geom.py[i] + 1.0], { from: a, to: a + len, vRepeat: 8, wall: true }), concrete));
        const e = side * (H + 0.95);
        group.add(new THREE.Mesh(ribbon(geom, (i) => [e, geom.py[i] - 0.8, e, geom.py[i] + 1.0], { from: a, to: a + len, vRepeat: 8, wall: true }), concrete));
      }
      group.add(new THREE.Mesh(ribbon(geom, (i) => [-H - 0.95, geom.py[i] - 0.8, H + 0.95, geom.py[i] - 0.8], { from: a, to: a + len, vRepeat: 8 }), deckMat));
      // опоры по краям нижней трассы
      const pillarGeo = new THREE.BoxGeometry(0.8, 1, 0.8);
      for (let k = 0; k < len; k += 3) {
        const i = (a + k) % N;
        const clear = near[i] > geom.barrier + 1.2 && near[i] < geom.barrier + 4;
        if (!clear) continue;
        for (const side of [-1, 1]) {
          const p = geom.pointAt(i * geom.ds, side * (H - 0.2));
          const h = Math.max(0.5, p.y - 0.8);
          const pl = new THREE.Mesh(pillarGeo, concrete);
          pl.scale.y = h; pl.position.set(p.x, h / 2, p.z);
          pl.castShadow = shadows;
          group.add(pl);
        }
      }
    }
  }

  // старт/финиш, решётка, огни
  const lightMats = addStartArea(group, geom, theme, shadows, geom.barrier);

  // линии и таблички секторов
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xf4f4f4, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  const boardSide = P ? -P.side : 1;
  [['S2', '#3ddc84'], ['S3', '#b36bff']].forEach(([label, col], k) => {
    const s = geom.sectorS[k + 1];
    const line = new THREE.Mesh(new THREE.PlaneGeometry(geom.roadWidth, 0.3).rotateX(-Math.PI / 2), lineMat);
    placeOnTrack(line, geom, s, 0, 0.014);
    group.add(line);
    const i = geom.sIdx(s);
    const bar = boardSide < 0 ? geom.barL[i] : geom.barR[i];
    const board = new THREE.Group();
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.9), new THREE.MeshBasicMaterial({ map: sectorBoardTexture(label, col), side: THREE.DoubleSide }));
    panel.position.y = 2.4;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.4, 6), new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 0.5 }));
    pole.position.y = 1.2;
    board.add(panel, pole);
    placeOnTrack(board, geom, s, boardSide * (bar + 1.4), 0);
    board.rotation.x = 0;
    board.rotation.y += Math.PI / 2 * boardSide;
    group.add(board);
  });

  return {
    group, pads: [],
    setLights(n, green = false) {
      lightMats.forEach((m, i) => {
        if (green) m.color.set(0x19ff5a);
        else m.color.set(i < n ? 0xff1a12 : 0x220404);
      });
    },
    update() {},
  };
}
