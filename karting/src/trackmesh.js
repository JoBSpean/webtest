// Визуальная часть трассы: асфальт, обочины, поребрики, отбойники, насыпи,
// старт/финиш с арочными огнями, стартовая решётка, ускорители.
import * as THREE from 'three';
import { asphaltTexture, groundTexture, curbTexture, barrierTexture, checkerTexture, chevronTexture } from './textures.js';
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

export function buildTrackMeshes(geom, theme, quality) {
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
