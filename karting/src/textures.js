// Процедурные текстуры на canvas — никаких внешних файлов.
import * as THREE from 'three';
import { rng } from './util.js';

let maxAniso = 4;
export function setMaxAnisotropy(a) { maxAniso = a; }

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}
function toTex(c, { repeat = true, srgb = true, aniso = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (aniso) t.anisotropy = maxAniso;
  t.needsUpdate = true;
  return t;
}
function noise(ctx, w, h, amount, seed = 1, alpha = 1) {
  const img = ctx.getImageData(0, 0, w, h);
  const r = rng(seed);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (r() - 0.5) * amount;
    d[i] += n; d[i + 1] += n; d[i + 2] += n; d[i + 3] = d[i + 3] * alpha;
  }
  ctx.putImageData(img, 0, 0);
}

// Асфальт: u поперёк дороги (0..1), v вдоль (повтор). Белые краевые линии.
export function asphaltTexture(rgb, night = false) {
  const W = 512, H = 512;
  const [c, ctx] = canvas(W, H);
  ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  ctx.fillRect(0, 0, W, H);
  const r = rng(7);
  // пятна и заплатки
  for (let i = 0; i < 90; i++) {
    const x = r() * W, y = r() * H, rad = 10 + r() * 60;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
    const k = r() < 0.5 ? 0 : 255;
    g.addColorStop(0, `rgba(${k},${k},${k},${0.03 + r() * 0.04})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
  // накатанная траектория — чуть темнее в центре
  const lg = ctx.createLinearGradient(0, 0, W, 0);
  lg.addColorStop(0, 'rgba(0,0,0,0)');
  lg.addColorStop(0.35, 'rgba(0,0,0,0.10)');
  lg.addColorStop(0.5, 'rgba(0,0,0,0.04)');
  lg.addColorStop(0.65, 'rgba(0,0,0,0.10)');
  lg.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = lg; ctx.fillRect(0, 0, W, H);
  noise(ctx, W, H, 34, 3);
  // трещинки
  ctx.strokeStyle = 'rgba(20,20,20,0.35)'; ctx.lineWidth = 1;
  for (let i = 0; i < 14; i++) {
    let x = r() * W, y = r() * H;
    ctx.beginPath(); ctx.moveTo(x, y);
    for (let k = 0; k < 6; k++) { x += (r() - 0.5) * 30; y += r() * 22; ctx.lineTo(x, y); }
    ctx.stroke();
  }
  // краевые линии
  const lineCol = night ? 'rgba(235,235,255,0.92)' : 'rgba(242,242,236,0.95)';
  ctx.fillStyle = lineCol;
  ctx.fillRect(W * 0.018, 0, W * 0.02, H);
  ctx.fillRect(W * (1 - 0.038), 0, W * 0.02, H);
  noise(ctx, W, H, 10, 5);
  return toTex(c);
}

export function groundTexture(kind) {
  const W = 512, H = 512;
  const [c, ctx] = canvas(W, H);
  const r = rng(kind.length * 31);
  if (kind === 'grass') {
    ctx.fillStyle = '#5a9a36'; ctx.fillRect(0, 0, W, H);
    // полосы стрижки
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = i % 2 ? 'rgba(255,255,220,0.07)' : 'rgba(0,40,0,0.06)';
      ctx.fillRect(0, (i * H) / 4, W, H / 4);
    }
    for (let i = 0; i < 3500; i++) {
      const x = r() * W, y = r() * H;
      const g = 110 + r() * 80;
      ctx.fillStyle = `rgba(${40 + r() * 50},${g},${20 + r() * 30},${0.25 + r() * 0.35})`;
      ctx.fillRect(x, y, 1 + r() * 2, 2 + r() * 4);
    }
    for (let i = 0; i < 40; i++) {
      const x = r() * W, y = r() * H, rad = 20 + r() * 50;
      const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, `rgba(${r() < 0.5 ? '120,110,40' : '20,70,20'},0.12)`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2);
    }
    noise(ctx, W, H, 18, 11);
  } else if (kind === 'sand') {
    ctx.fillStyle = '#d8b98a'; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 60; i++) {
      const x = r() * W, y = r() * H, rad = 20 + r() * 70;
      const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, `rgba(${r() < 0.5 ? '255,235,200' : '150,110,70'},0.15)`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2);
    }
    // рябь от ветра
    ctx.strokeStyle = 'rgba(120,90,50,0.10)';
    for (let y = 0; y < H; y += 9) {
      ctx.beginPath();
      for (let x = 0; x <= W; x += 16) ctx.lineTo(x, y + Math.sin(x * 0.05 + y) * 3);
      ctx.stroke();
    }
    noise(ctx, W, H, 26, 13);
  } else if (kind === 'city') {
    // плитка площади
    ctx.fillStyle = '#23222c'; ctx.fillRect(0, 0, W, H);
    const s = 64;
    for (let y = 0; y < H; y += s) for (let x = 0; x < W; x += s) {
      const k = 30 + r() * 12;
      ctx.fillStyle = `rgb(${k},${k},${k + 8})`;
      ctx.fillRect(x + 2, y + 2, s - 4, s - 4);
    }
    noise(ctx, W, H, 20, 17);
  } else if (kind === 'runoff-grass') {
    ctx.fillStyle = '#4f8f30'; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 3000; i++) {
      ctx.fillStyle = `rgba(${40 + r() * 40},${100 + r() * 80},${20 + r() * 30},0.4)`;
      ctx.fillRect(r() * W, r() * H, 1 + r() * 2, 2 + r() * 4);
    }
    noise(ctx, W, H, 18, 19);
  }
  return toTex(c);
}

// Поребрик: красно-белые полосы вдоль v
export function curbTexture(night = false) {
  const [c, ctx] = canvas(64, 256);
  ctx.fillStyle = night ? '#ff2d6f' : '#d42a22'; ctx.fillRect(0, 0, 64, 128);
  ctx.fillStyle = night ? '#e8ecff' : '#f2f2f2'; ctx.fillRect(0, 128, 64, 128);
  const g = ctx.createLinearGradient(0, 0, 64, 0);
  g.addColorStop(0, 'rgba(0,0,0,0.25)'); g.addColorStop(0.3, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,0.1)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 256);
  noise(ctx, 64, 256, 16, 23);
  return toTex(c);
}

// Рекламные щиты на отбойниках: вымышленные бренды
const BRANDS = [
  ['АПЕКС', '#ffd000', '#15171c'], ['ТУРБО•МАСЛО', '#e0322b', '#ffffff'], ['ШИНЫ ГРИП', '#15171c', '#ffd000'],
  ['КАРТ-КЛУБ 7', '#1f6fe0', '#ffffff'], ['РЕЗИНА', '#ffffff', '#15171c'], ['НИТРО', '#2e9e4b', '#ffffff'],
  ['ПИТ-СТОП', '#f07818', '#15171c'], ['ЛИНИЯ АПЕКСА', '#8b3fd9', '#ffffff'],
];
export function barrierTexture(style) {
  const W = 2048, H = 128;
  const [c, ctx] = canvas(W, H);
  const n = BRANDS.length;
  const pw = W / n;
  for (let i = 0; i < n; i++) {
    const [txt, bg, fg] = BRANDS[i];
    if (style === 'neon') {
      ctx.fillStyle = '#0c0b16'; ctx.fillRect(i * pw, 0, pw, H);
      ctx.fillStyle = i % 2 ? '#ff2d9a' : '#23e1ff';
      ctx.fillRect(i * pw, 6, pw, 5); ctx.fillRect(i * pw, H - 11, pw, 5);
      ctx.font = '800 54px "Unbounded", "Arial Black", sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.shadowColor = i % 2 ? '#ff2d9a' : '#23e1ff'; ctx.shadowBlur = 16;
      ctx.fillStyle = '#ffffff';
      ctx.fillText(txt, i * pw + pw / 2, H / 2 + 3, pw - 30);
      ctx.shadowBlur = 0;
    } else {
      ctx.fillStyle = bg; ctx.fillRect(i * pw, 0, pw, H);
      ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(i * pw + pw - 3, 0, 3, H);
      ctx.font = '800 56px "Unbounded", "Arial Black", sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = fg;
      ctx.fillText(txt, i * pw + pw / 2, H / 2 + 3, pw - 36);
    }
  }
  return toTex(c);
}

export function checkerTexture() {
  const [c, ctx] = canvas(256, 64);
  const s = 32;
  for (let y = 0; y < 2; y++) for (let x = 0; x < 8; x++) {
    ctx.fillStyle = (x + y) % 2 ? '#111' : '#f4f4f4';
    ctx.fillRect(x * s, y * s, s, s);
  }
  noise(ctx, 256, 64, 18, 29);
  return toTex(c);
}

export function chevronTexture() {
  const [c, ctx] = canvas(128, 256);
  ctx.clearRect(0, 0, 128, 256);
  ctx.fillStyle = 'rgba(20,10,0,0.55)'; ctx.fillRect(0, 0, 128, 256);
  for (let i = 0; i < 2; i++) {
    const y = 40 + i * 128;
    ctx.beginPath();
    ctx.moveTo(14, y + 60); ctx.lineTo(64, y); ctx.lineTo(114, y + 60);
    ctx.lineTo(114, y + 92); ctx.lineTo(64, y + 32); ctx.lineTo(14, y + 92);
    ctx.closePath();
    const g = ctx.createLinearGradient(0, y, 0, y + 92);
    g.addColorStop(0, '#fff6b0'); g.addColorStop(1, '#ff8a00');
    ctx.fillStyle = g; ctx.fill();
  }
  return toTex(c);
}

export function itemBoxTexture() {
  const [c, ctx] = canvas(128, 128);
  const g = ctx.createLinearGradient(0, 0, 128, 128);
  g.addColorStop(0, 'rgba(255,90,200,0.9)');
  g.addColorStop(0.5, 'rgba(90,200,255,0.9)');
  g.addColorStop(1, 'rgba(255,230,90,0.9)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  ctx.fillStyle = 'rgba(255,255,255,0.18)'; ctx.fillRect(8, 8, 112, 112);
  ctx.strokeStyle = 'rgba(255,255,255,0.95)'; ctx.lineWidth = 8; ctx.strokeRect(6, 6, 116, 116);
  ctx.font = '900 84px "Unbounded", "Arial Black", sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = '#fff';
  ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 8;
  ctx.fillText('?', 64, 70);
  return toTex(c, { repeat: false });
}

export function numberTexture(num, bg, fg) {
  const [c, ctx] = canvas(128, 96);
  ctx.fillStyle = bg; ctx.fillRect(0, 0, 128, 96);
  ctx.fillStyle = fg;
  ctx.font = '900 70px "Unbounded", "Arial Black", sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(String(num), 64, 52, 116);
  return toTex(c, { repeat: false });
}

export function windowsTexture(seed) {
  const [c, ctx] = canvas(128, 256);
  ctx.fillStyle = '#0c0d18'; ctx.fillRect(0, 0, 128, 256);
  const r = rng(seed);
  const cols = ['#ffd98a', '#9fd8ff', '#ffb3e6', '#fff3c4'];
  for (let y = 6; y < 256; y += 14) for (let x = 6; x < 128; x += 14) {
    if (r() < 0.3) {
      ctx.fillStyle = cols[Math.floor(r() * cols.length)];
      ctx.globalAlpha = 0.35 + r() * 0.45;
      ctx.fillRect(x, y, 8, 9);
    }
  }
  ctx.globalAlpha = 1;
  return toTex(c);
}

export function cloudTexture() {
  const [c, ctx] = canvas(256, 128);
  const r = rng(41);
  for (let i = 0; i < 18; i++) {
    const x = 40 + r() * 176, y = 50 + r() * 40, rad = 22 + r() * 34;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
    g.addColorStop(0, 'rgba(255,255,255,0.55)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
  return toTex(c, { repeat: false });
}

export function blobShadowTexture() {
  const [c, ctx] = canvas(64, 64);
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(0,0,0,0.55)'); g.addColorStop(0.6, 'rgba(0,0,0,0.3)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  return toTex(c, { repeat: false, srgb: false });
}

export function glowTexture() {
  const [c, ctx] = canvas(64, 64);
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,0.6)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  return toTex(c, { repeat: false });
}

export function crowdTexture() {
  const W = 512, H = 128;
  const [c, ctx] = canvas(W, H);
  ctx.fillStyle = '#2b2f38'; ctx.fillRect(0, 0, W, H);
  const r = rng(77);
  const cols = ['#e0322b', '#ffd000', '#1f6fe0', '#ffffff', '#2e9e4b', '#f07818', '#8b3fd9', '#11a9c4', '#222'];
  for (let row = 0; row < 4; row++) {
    for (let x = 4; x < W; x += 10 + r() * 4) {
      const y = 12 + row * 30 + r() * 4;
      ctx.fillStyle = cols[Math.floor(r() * cols.length)];
      ctx.fillRect(x, y + 8, 8, 14);
      ctx.fillStyle = ['#f1c9a5', '#c68e5d', '#8a5a3b', '#f5d7bd'][Math.floor(r() * 4)];
      ctx.beginPath(); ctx.arc(x + 4, y + 5, 4, 0, Math.PI * 2); ctx.fill();
    }
  }
  return toTex(c);
}

// ---------- реалистичные текстуры спортивных трасс ----------

// Асфальт картодрома: мелкий шум, светлые пятна износа, без центральной полосы
export function kartAsphaltTexture(tone = 60) {
  const W = 512, H = 512;
  const [c, ctx] = canvas(W, H);
  ctx.fillStyle = `rgb(${tone},${tone + 1},${tone + 3})`;
  ctx.fillRect(0, 0, W, H);
  const r = rng(91);
  for (let i = 0; i < 16000; i++) {
    const k = r() < 0.5 ? 20 + r() * 30 : 120 + r() * 60;
    ctx.fillStyle = `rgba(${k},${k},${k},${0.08 + r() * 0.12})`;
    ctx.fillRect(r() * W, r() * H, 1 + r() * 1.5, 1 + r() * 1.5);
  }
  for (let i = 0; i < 50; i++) {
    const x = r() * W, y = r() * H, rad = 20 + r() * 70;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
    const k = r() < 0.6 ? 255 : 0;
    g.addColorStop(0, `rgba(${k},${k},${k},${0.025 + r() * 0.03})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
  // стыки укладки
  ctx.strokeStyle = 'rgba(25,25,28,0.35)'; ctx.lineWidth = 1.2;
  for (let i = 0; i < 6; i++) { ctx.beginPath(); let x = r() * W, y = r() * H; ctx.moveTo(x, y); for (let k = 0; k < 8; k++) { x += (r() - 0.5) * 24; y += r() * 30; ctx.lineTo(x, y); } ctx.stroke(); }
  // тонкие белые линии края полотна
  ctx.fillStyle = 'rgba(236,236,230,0.9)';
  ctx.fillRect(W * 0.006, 0, W * 0.012, H);
  ctx.fillRect(W * (1 - 0.018), 0, W * 0.012, H);
  noise(ctx, W, H, 12, 93);
  return toTex(c);
}

// накатанная резина: мягкая тёмная полоса с прозрачными краями
export function rubberTexture() {
  const W = 64, H = 256;
  const [c, ctx] = canvas(W, H);
  ctx.clearRect(0, 0, W, H);
  const r = rng(97);
  for (let x = 0; x < W; x++) {
    const t = x / (W - 1);
    const a = Math.pow(Math.sin(t * Math.PI), 1.6) * 0.5;
    for (let y = 0; y < H; y += 2) {
      const k = a * (0.7 + r() * 0.5);
      ctx.fillStyle = `rgba(8,8,10,${k.toFixed(3)})`;
      ctx.fillRect(x, y, 1, 2);
    }
  }
  const t = toTex(c);
  return t;
}

// покрышки барьера: полосы трёх шин в стопке
export function tireStackTexture() {
  const [c, ctx] = canvas(64, 128);
  ctx.fillStyle = '#7a7a7a'; ctx.fillRect(0, 0, 64, 128);
  for (let i = 0; i < 3; i++) {
    const y = i * 42.6;
    const g = ctx.createLinearGradient(0, y, 0, y + 42);
    g.addColorStop(0, '#303030'); g.addColorStop(0.2, '#b0b0b0'); g.addColorStop(0.5, '#8c8c8c'); g.addColorStop(0.8, '#b0b0b0'); g.addColorStop(1, '#2a2a2a');
    ctx.fillStyle = g; ctx.fillRect(0, y + 1, 64, 40);
    ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(0, y, 64, 2);
  }
  noise(ctx, 64, 128, 14, 99);
  return toTex(c, { repeat: false });
}

export function concreteTexture() {
  const [c, ctx] = canvas(256, 64);
  ctx.fillStyle = '#b9b7b0'; ctx.fillRect(0, 0, 256, 64);
  const r = rng(101);
  for (let i = 0; i < 1400; i++) { const k = 150 + r() * 70; ctx.fillStyle = `rgba(${k},${k},${k - 6},0.4)`; ctx.fillRect(r() * 256, r() * 64, 2, 2); }
  ctx.fillStyle = 'rgba(0,0,0,0.25)'; for (let x = 0; x < 256; x += 64) ctx.fillRect(x, 0, 2, 64);
  // красно-белая окантовка сверху
  for (let x = 0; x < 256; x += 32) { ctx.fillStyle = (x / 32) % 2 ? '#d0302a' : '#f0f0f0'; ctx.fillRect(x, 0, 32, 8); }
  noise(ctx, 256, 64, 10, 103);
  return toTex(c);
}

export function gravelTexture() {
  const [c, ctx] = canvas(256, 256);
  ctx.fillStyle = '#b09878'; ctx.fillRect(0, 0, 256, 256);
  const r = rng(107);
  for (let i = 0; i < 9000; i++) { const k = r(); ctx.fillStyle = k < 0.5 ? 'rgba(90,75,60,0.5)' : 'rgba(220,205,180,0.5)'; ctx.fillRect(r() * 256, r() * 256, 1.5, 1.5); }
  return toTex(c);
}

export function canopyTexture(color) {
  const [c, ctx] = canvas(128, 128);
  ctx.fillStyle = color; ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 8; i++) { ctx.fillStyle = i % 2 ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'; ctx.fillRect(i * 16, 0, 16, 128); }
  return toTex(c, { repeat: false });
}

export function sectorBoardTexture(label, color) {
  const [c, ctx] = canvas(128, 64);
  ctx.fillStyle = '#16181d'; ctx.fillRect(0, 0, 128, 64);
  ctx.fillStyle = color; ctx.fillRect(0, 0, 128, 10);
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 34px "Unbounded", "Arial Black", sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(label, 64, 38);
  return toTex(c, { repeat: false });
}
