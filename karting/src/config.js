// Пилоты, темы окружения, сложность соперников, предметы фан-трасс.

export const DRIVERS = [
  { id: 'vikhr', name: 'Вихрь', num: 7, color: '#e0322b', accent: '#ffffff', suit: '#1b1d22', bio: 'Ровный темп, редко ошибается на торможении.' },
  { id: 'kometa', name: 'Комета', num: 21, color: '#1f6fe0', accent: '#ffd23f', suit: '#0f2447', bio: 'Поздно тормозит и много выигрывает на прямых.' },
  { id: 'iskra', name: 'Искра', num: 3, color: '#f5c518', accent: '#16181d', suit: '#2a2a2a', bio: 'Агрессивный старт, любит атаковать в первом повороте.' },
  { id: 'grom', name: 'Гром', num: 44, color: '#2e9e4b', accent: '#e8f5e9', suit: '#12321c', bio: 'Широкая траектория, держит внутреннюю при атаке.' },
  { id: 'lisa', name: 'Лиса', num: 11, color: '#f07818', accent: '#ffffff', suit: '#3a1c06', bio: 'Самый аккуратный в медленных связках.' },
  { id: 'molniya', name: 'Молния', num: 9, color: '#8b3fd9', accent: '#f0e6ff', suit: '#231036', bio: 'Быстр на квалификационном круге.' },
  { id: 'briz', name: 'Бриз', num: 16, color: '#11a9c4', accent: '#ffffff', suit: '#0b2e36', bio: 'Бережёт шины, силён в конце гонки.' },
  { id: 'titan', name: 'Титан', num: 99, color: '#d8dde3', accent: '#e0322b', suit: '#30353c', bio: 'Опытный гонщик, почти не выезжает на поребрики.' },
];

export const DIFFICULTY = {
  easy: { name: 'Лёгкий', speed: 0.93, corner: 0.86, items: 0.35, rubber: 0.05 },
  normal: { name: 'Средний', speed: 0.98, corner: 0.95, items: 0.7, rubber: 0.03 },
  hard: { name: 'Сложный', speed: 1.0, corner: 1.02, items: 1.0, rubber: 0.02 },
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
  italy: {
    skyTop: '#3d86d8', skyHorizon: '#cfe4ef', skyBottom: '#e9f1f3', sunGlow: '#fff4d6',
    fog: '#d6e4ea', fogNear: 220, fogFar: 950,
    sunColor: '#fff0d8', sunIntensity: 2.8, sunDir: [0.5, 0.78, 0.25],
    hemiSky: '#d4e8ff', hemiGround: '#6f7a45', hemiIntensity: 1.15,
    ground: 'grass', grassTint: 0xd9e6a8, trees: 'cypress', treeCount: 260, mountains: '#8aa4b8', mountains2: '#b3c6d2',
    exposure: 1.02, water: false, night: false, clouds: 8, cloudColor: '#ffffff', asphaltTone: 64, real: true,
  },
  belgium: {
    skyTop: '#6c8bb0', skyHorizon: '#c9d3dc', skyBottom: '#dde3e8', sunGlow: '#f3efe4',
    fog: '#c8d0d6', fogNear: 180, fogFar: 800,
    sunColor: '#f4efe6', sunIntensity: 2.0, sunDir: [-0.4, 0.7, 0.45],
    hemiSky: '#d0dae6', hemiGround: '#566b3a', hemiIntensity: 1.35,
    ground: 'grass', grassTint: 0xbfd99a, trees: 'mixed', treeCount: 420, mountains: null,
    exposure: 1.05, water: false, night: false, clouds: 20, cloudColor: '#eef1f4', asphaltTone: 58, real: true,
  },
  england: {
    skyTop: '#7a95b3', skyHorizon: '#d2dade', skyBottom: '#e1e6e8', sunGlow: '#f6f1e2',
    fog: '#ccd5d8', fogNear: 170, fogFar: 760,
    sunColor: '#f7f1e3', sunIntensity: 2.1, sunDir: [0.3, 0.62, -0.5],
    hemiSky: '#d7e1ea', hemiGround: '#4e6a34', hemiIntensity: 1.35,
    ground: 'grass', grassTint: 0xb5d78e, trees: 'broadleaf', treeCount: 380, mountains: '#8fa39a', mountains2: '#adbcb5',
    exposure: 1.05, water: false, night: false, clouds: 24, cloudColor: '#f2f4f5', asphaltTone: 56, real: true,
  },
  sweden: {
    skyTop: '#2f78c8', skyHorizon: '#c4dff0', skyBottom: '#e3eff5', sunGlow: '#fff7e8',
    fog: '#d0e2ec', fogNear: 220, fogFar: 950,
    sunColor: '#fff6ea', sunIntensity: 2.5, sunDir: [-0.55, 0.55, -0.3],
    hemiSky: '#d4e6ff', hemiGround: '#4f6a3c', hemiIntensity: 1.2,
    ground: 'grass', grassTint: 0xc3dca2, trees: 'pine', treeCount: 520, mountains: null,
    exposure: 1.0, water: false, night: false, clouds: 12, cloudColor: '#ffffff', asphaltTone: 60, real: true,
  },
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
