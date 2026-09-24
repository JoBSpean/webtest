// Пилоты, темы окружения, сложность, предметы.

// stats: скорость, разгон, управляемость, вес — по шкале 1..5
export const DRIVERS = [
  { id: 'vikhr', name: 'Вихрь', num: 7, color: '#e0322b', accent: '#ffffff', suit: '#1b1d22', stats: { speed: 3, accel: 3, handling: 3, weight: 3 }, bio: 'Универсал. Ровный на любой трассе.' },
  { id: 'kometa', name: 'Комета', num: 21, color: '#1f6fe0', accent: '#ffd23f', suit: '#0f2447', stats: { speed: 5, accel: 2, handling: 2, weight: 3 }, bio: 'Самая высокая скорость, но долго разгоняется.' },
  { id: 'iskra', name: 'Искра', num: 3, color: '#f5c518', accent: '#16181d', suit: '#2a2a2a', stats: { speed: 2, accel: 5, handling: 3, weight: 2 }, bio: 'Взрывной разгон, быстро восстанавливается после ошибок.' },
  { id: 'grom', name: 'Гром', num: 44, color: '#2e9e4b', accent: '#e8f5e9', suit: '#12321c', stats: { speed: 4, accel: 2, handling: 2, weight: 5 }, bio: 'Тяжёлый. Выигрывает любую толкотню в повороте.' },
  { id: 'lisa', name: 'Лиса', num: 11, color: '#f07818', accent: '#ffffff', suit: '#3a1c06', stats: { speed: 3, accel: 3, handling: 5, weight: 1 }, bio: 'Лучший заносный карт: быстро копит турбо.' },
  { id: 'molniya', name: 'Молния', num: 9, color: '#8b3fd9', accent: '#f0e6ff', suit: '#231036', stats: { speed: 4, accel: 3, handling: 3, weight: 2 }, bio: 'Быстрый и лёгкий, любит длинные прямые.' },
  { id: 'briz', name: 'Бриз', num: 16, color: '#11a9c4', accent: '#ffffff', suit: '#0b2e36', stats: { speed: 2, accel: 4, handling: 4, weight: 2 }, bio: 'Цепкий в поворотах, прощает ошибки.' },
  { id: 'titan', name: 'Титан', num: 99, color: '#d8dde3', accent: '#e0322b', suit: '#30353c', stats: { speed: 4, accel: 3, handling: 2, weight: 4 }, bio: 'Надёжный и тяжёлый. Сложно сбить с траектории.' },
];

export function kartParams(stats) {
  return {
    maxSpeed: 25.5 + stats.speed * 0.9,       // м/с
    accel: 9 + stats.accel * 2.2,             // м/с²
    turnRate: 1.95 + stats.handling * 0.13,   // рад/с
    driftCharge: 0.85 + stats.handling * 0.08,
    mass: 0.8 + stats.weight * 0.14,
    grassPenalty: 0.5 + stats.weight * 0.02,
  };
}

export const DIFFICULTY = {
  easy: { name: 'Лёгкий', speed: 0.86, corner: 0.84, drift: 0.15, items: 0.35, mistakes: 0.5, rubber: 0.08 },
  normal: { name: 'Средний', speed: 0.95, corner: 0.93, drift: 0.55, items: 0.7, mistakes: 0.2, rubber: 0.05 },
  hard: { name: 'Сложный', speed: 1.0, corner: 1.0, drift: 0.9, items: 1.0, mistakes: 0.05, rubber: 0.03 },
};

export const CUP_POINTS = [10, 8, 6, 5, 4, 3, 2, 1];

export const ITEMS = {
  nitro: { name: 'Нитро', icon: 'nitro' },
  nitro3: { name: 'Нитро ×3', icon: 'nitro3' },
  rocket: { name: 'Ракета', icon: 'rocket' },
  oil: { name: 'Масло', icon: 'oil' },
  shield: { name: 'Щит', icon: 'shield' },
};

export const THEMES = {
  day: {
    skyTop: '#2f7fd6', skyHorizon: '#b9def2', skyBottom: '#dff0f7', sunGlow: '#fff6d8',
    fog: '#c8e3f1', fogNear: 180, fogFar: 820,
    sunColor: '#fff1d6', sunIntensity: 2.7, sunDir: [0.45, 0.75, 0.35],
    hemiSky: '#cfe6ff', hemiGround: '#5b7a36', hemiIntensity: 1.15,
    ground: 'grass', trees: 'broadleaf', treeCount: 520, mountains: '#86a6bd', mountains2: '#a9c2d2',
    exposure: 1.0, water: false, night: false, clouds: 14, cloudColor: '#ffffff',
    asphalt: [58, 60, 64], barrierStyle: 'boards',
  },
  sunset: {
    skyTop: '#3b3a7a', skyHorizon: '#ff9a5c', skyBottom: '#ffc58a', sunGlow: '#ffd08a',
    fog: '#e9a27a', fogNear: 170, fogFar: 760,
    sunColor: '#ffb070', sunIntensity: 2.4, sunDir: [-0.7, 0.28, -0.35],
    hemiSky: '#ffc49a', hemiGround: '#8a6a4a', hemiIntensity: 1.0,
    ground: 'sand', trees: 'palm', treeCount: 170, mountains: '#6b4f6e', mountains2: '#9a6a78',
    exposure: 1.05, water: true, night: false, clouds: 10, cloudColor: '#ffd6c0',
    asphalt: [62, 58, 58], barrierStyle: 'boards',
  },
  night: {
    skyTop: '#05060f', skyHorizon: '#1b1840', skyBottom: '#2a1f4a', sunGlow: '#6b5cff',
    fog: '#120f2a', fogNear: 120, fogFar: 600,
    sunColor: '#8fa2ff', sunIntensity: 0.9, sunDir: [0.3, 0.8, -0.4],
    hemiSky: '#5d6bb8', hemiGround: '#1a1426', hemiIntensity: 0.75,
    ground: 'city', trees: 'none', treeCount: 0, mountains: null,
    exposure: 1.1, water: false, night: true, clouds: 0, cloudColor: '#ffffff',
    asphalt: [44, 46, 54], barrierStyle: 'neon',
  },
};

export const GRID_GAP = 7;       // шаг рядов стартовой решётки, м
export const PHYS_HZ = 120;
