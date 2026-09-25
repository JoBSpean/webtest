export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));

export function wrapAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}
export const dampAngle = (a, b, lambda, dt) => a + wrapAngle(b - a) * (1 - Math.exp(-lambda * dt));

export function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 1:23.456
export function fmtTime(t) {
  if (t == null || !isFinite(t)) return '–:––.–––';
  const neg = t < 0; t = Math.abs(t);
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  const str = m + ':' + (s < 10 ? '0' : '') + s.toFixed(3);
  return neg ? '-' + str : str;
}
export function fmtDelta(d) {
  if (d == null || !isFinite(d)) return '';
  return (d >= 0 ? '+' : '−') + Math.abs(d).toFixed(2);
}

export function disposeObject(root) {
  root.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) {
        for (const k in m) {
          const v = m[k];
          if (v && v.isTexture && !v.userData.shared) v.dispose();
        }
        m.dispose();
      }
    }
  });
}

export const isTouchDevice = () =>
  (typeof window !== 'undefined') && (('ontouchstart' in window) || navigator.maxTouchPoints > 0) && matchMedia('(pointer: coarse)').matches;

export const ordinalRu = (n) => n + '-е';
