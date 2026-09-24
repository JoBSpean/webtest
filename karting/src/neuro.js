// Нейроэволюция пилотов. Входы сети — лучи до края полотна, скорость,
// угол к касательной сплайна, смещение от оси, рыскание и снос; выходы — руль
// и педаль (газ/тормоз). Плюс «память поворотов»: поправки руля и педали для
// 24 участков, отдельные для каждой трассы. Отбор, мутации, MMR и формат
// сохранения перенесены из Velocity Grid и адаптированы под физику карта.
import { newKartState, stepDynamics, collide, placeKart, CLASSES } from './physics.js';
import { clamp, wrapAngle } from './util.js';

export const RAYS = [-80, -45, -20, 0, 20, 45, 80].map((d) => (d * Math.PI) / 180);
export const N_IN = RAYS.length + 6; // + скорость, угол, смещение, рыскание, снос, bias
export const N_HID = 8;
export const GEN = N_IN * N_HID + (N_HID + 1) * 2; // 122 общих веса
export const SECTORS = 24;
export const MEM = SECTORS * 2; // 48 поправок участков
export const GENOME = GEN + MEM;
export const DT = 1 / 60;
const RAY_MAX = 30;
const STAB = { assist: 1, stab: true }; // та же стабилизация, что у игрока

export const DEFAULTS = {
  population: 48, elite: 10, parents: 25, tournament: 4, selection: 'tournament', crossover: 0.35, blend: false,
  mutation: 0.12, strength: 0.3, immigrants: 0.06, fine: 0.35, fineStrength: 0.03, adaptive: true, patience: 15,
  expansion: 3, sectorMutation: 0.12, memory: true, zeroReset: 0.005,
  teacher: true, timeout: 100, idle: 3, paceCut: true, paceMargin: 6, offroadGrace: 0.6, wallKill: true, reverse: 25, goal: 50, autoStop: false,
  simBudget: 80, trainFps: 20, autoSave: 10, cloudSave: 45, history: 600, chartWindow: 120, telemetryWindow: 30,
  uiHz: 5, trail: true, ghost: true, labels: false, dead: false, follow: false,
};

// Настройки: {g группа, k ключ, n название, t тип, min/max/s, key важная, h подсказка}
export const SETTINGS = [
  { g: 'Основное', k: 'teacher', n: 'Старт с учителя', t: 'bool', key: 1, h: 'Новая популяция сначала учится повторять классического ИИ-соперника (обучение с учителем, 1–3 с), затем эволюция доводит её. Круг проходится уже в первых поколениях.' },
  { g: 'Основное', k: 'population', n: 'Картов в поколении', t: 'num', min: 16, max: 160, s: 1, key: 1, h: 'Больше картов — надёжнее отбор, но каждый шаг считается дольше.' },
  { g: 'Основное', k: 'mutation', n: 'Базовая мутация', t: 'num', min: 0, max: 1, s: 0.001, key: 1, h: 'Вероятность изменить один вес потомка.' },
  { g: 'Основное', k: 'strength', n: 'Сила мутации', t: 'num', min: 0.001, max: 3, s: 0.001, key: 1, h: 'На сколько сдвигается вес при мутации.' },
  { g: 'Основное', k: 'elite', n: 'Элита, %', t: 'num', min: 2, max: 30, s: 1, key: 1, h: 'Доля лучших, которые переходят в следующее поколение без изменений.' },
  { g: 'Основное', k: 'timeout', n: 'Лимит попытки, с', t: 'num', min: 30, max: 180, s: 1, key: 1, h: 'Сколько секунд даётся карту на круг.' },
  { g: 'Основное', k: 'goal', n: 'Ориентир времени, с', t: 'num', min: 30, max: 120, s: 0.01, key: 1, h: 'Цель по кругу для графика и «разницы с целью».' },
  { g: 'Отбор', k: 'parents', n: 'Пул родителей, %', t: 'num', min: 10, max: 100, s: 1, h: 'Из какой доли лучших выбираются родители.' },
  { g: 'Отбор', k: 'tournament', n: 'Размер турнира', t: 'num', min: 2, max: 12, s: 1, h: 'Сколько кандидатов сравнивается при выборе родителя.' },
  { g: 'Отбор', k: 'selection', n: 'Выбор родителей', t: 'sel', opts: ['tournament', 'uniform'], optLabels: ['Турнир', 'Случайно из лучших'], h: 'Турнир даёт давление на качество, случайный выбор — разнообразие.' },
  { g: 'Отбор', k: 'crossover', n: 'Вероятность скрещивания', t: 'num', min: 0, max: 1, s: 0.01, h: 'Как часто вес берётся у второго родителя.' },
  { g: 'Отбор', k: 'blend', n: 'Усреднять при скрещивании', t: 'bool', h: 'Брать среднее двух родителей вместо копирования.' },
  { g: 'Отбор', k: 'immigrants', n: 'Доля новых случайных', t: 'num', min: 0, max: 0.5, s: 0.01, h: 'Свежая кровь каждое поколение.' },
  { g: 'Мутации', k: 'fine', n: 'Доля тонкой доводки', t: 'num', min: 0, max: 0.8, s: 0.01, h: 'Часть потомков — копии чемпиона с крошечными правками.' },
  { g: 'Мутации', k: 'fineStrength', n: 'Шаг тонкой доводки', t: 'num', min: 0.001, max: 0.3, s: 0.001, h: 'Насколько мелкие эти правки.' },
  { g: 'Мутации', k: 'zeroReset', n: 'Случайная замена веса', t: 'num', min: 0, max: 0.1, s: 0.001, h: 'Изредка полностью заменять вес случайным.' },
  { g: 'Мутации', k: 'memory', n: 'Обучать поправки 24 участков', t: 'bool', h: 'Отдельная память для каждого поворота трассы.' },
  { g: 'Мутации', k: 'sectorMutation', n: 'Шанс мутации участка', t: 'num', min: 0, max: 1, s: 0.001, h: 'Как часто меняются поправки конкретных поворотов.' },
  { g: 'Мутации', k: 'adaptive', n: 'Автоусиление при застое', t: 'bool', key: 1, h: 'Если результат не растёт, мутации усиливаются сами.' },
  { g: 'Мутации', k: 'patience', n: 'Окно застоя, поколений', t: 'num', min: 2, max: 100, s: 1, h: 'Сколько поколений без улучшения считать застоем.' },
  { g: 'Мутации', k: 'expansion', n: 'Максимум автоусиления', t: 'num', min: 1, max: 8, s: 0.1, h: 'Во сколько раз максимум могут вырасти мутации.' },
  { g: 'Заезд', k: 'idle', n: 'Ожидание прогресса, с', t: 'num', min: 1, max: 15, s: 0.1, h: 'Сколько терпеть карт, который не продвигается вперёд.' },
  { g: 'Заезд', k: 'offroadGrace', n: 'Допуск травы, с', t: 'num', min: 0, max: 5, s: 0.01, h: 'Сколько можно ехать по траве до вылета из отбора.' },
  { g: 'Заезд', k: 'wallKill', n: 'Удар о покрышки — выбывание', t: 'bool', key: 1, h: 'Любое касание барьера завершает попытку.' },
  { g: 'Заезд', k: 'reverse', n: 'Допуск движения назад, м', t: 'num', min: 5, max: 100, s: 1, h: 'Насколько можно откатиться назад.' },
  { g: 'Заезд', k: 'paceCut', n: 'Отсечка по темпу чемпиона', t: 'bool', key: 1, h: 'Карт снимается, если на той же дистанции отстаёт от лучшего круга. Главное ускорение обучения: время не тратится на медленных.' },
  { g: 'Заезд', k: 'paceMargin', n: 'Допуск отсечки, %', t: 'num', min: 1, max: 40, s: 1, h: 'На сколько процентов можно отставать от темпа чемпиона (плюс 1.5 с).' },
  { g: 'Заезд', k: 'autoStop', n: 'Пауза при достижении цели', t: 'bool', h: 'Остановить обучение, когда круг быстрее ориентира.' },
  { g: 'Скорость', k: 'simBudget', n: 'Доля кадра на симуляцию, %', t: 'num', min: 20, max: 95, s: 1, key: 1, h: 'Главный рычаг ускорения обучения.' },
  { g: 'Скорость', k: 'trainFps', n: 'Кадров/с при обучении', t: 'num', min: 5, max: 60, s: 1, key: 1, h: 'Реже картинка — больше поколений в секунду.' },
  { g: 'Скорость', k: 'uiHz', n: 'Обновлений индикаторов/с', t: 'num', min: 1, max: 15, s: 1, h: 'Как часто пересчитываются цифры и графики.' },
  { g: 'Скорость', k: 'chartWindow', n: 'Поколений на графике', t: 'num', min: 20, max: 1000, s: 10, h: 'Длина окна на всех графиках.' },
  { g: 'Скорость', k: 'telemetryWindow', n: 'Окно телеметрии, с', t: 'num', min: 10, max: 120, s: 1, h: 'Сколько секунд держать в телеметрии лидера.' },
  { g: 'Скорость', k: 'ghost', n: 'Траектория чемпиона', t: 'bool', h: 'Жёлтая линия прошлого лучшего круга.' },
  { g: 'Скорость', k: 'trail', n: 'Записывать траектории', t: 'bool', h: 'Нужна для линии чемпиона.' },
  { g: 'Скорость', k: 'dead', n: 'Показывать выбывшие карты', t: 'bool', h: 'Видно, где именно теряются пилоты.' },
  { g: 'Скорость', k: 'follow', n: 'Камера за лидером', t: 'bool', h: 'Вместо обзора всей трассы.' },
  { g: 'Хранение', k: 'autoSave', n: 'Автосохранение, с', t: 'num', min: 5, max: 120, s: 1, h: 'Как часто обучение пишется в браузер.' },
  { g: 'Хранение', k: 'cloudSave', n: 'Выгрузка в облако, с', t: 'num', min: 15, max: 600, s: 5, h: 'Как часто копия уходит на сервер.' },
  { g: 'Хранение', k: 'history', n: 'Хранить поколений', t: 'num', min: 100, max: 3000, s: 100, h: 'Глубина истории для графиков и сохранения.' },
];

// ориентиры по трассам (для OK Senior), остальные классы — через множитель
const GOAL_BASE = { lonato: 47, genk: 55, pfi: 56, kristianstad: 50, valley: 55, harbor: 60, neon: 55 };
export function defaultGoal(trackId, clsId) {
  const f = clsId === 'junior' ? 1.09 : clsId === 'kz2' ? 0.91 : 1;
  return Math.round((GOAL_BASE[trackId] || 55) * f * 100) / 100;
}

let seed = (Date.now() >>> 0) || 12345;
export function rnd() { seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5; seed >>>= 0; return seed / 4294967296; }
export function setSeed(s) { seed = s >>> 0 || 12345; }
export function getSeed() { return seed; }
export function genome(w) { const out = new Array(GENOME).fill(0); (w || []).forEach((v, i) => { if (i < GENOME) out[i] = v; }); return out; }
export function randomWeights() {
  const w = genome([]);
  const sc = 1 / Math.sqrt(N_IN);
  for (let i = 0; i < GEN; i++) w[i] = (rnd() * 2 - 1) * (i < N_IN * N_HID ? 1.6 * sc * 2 : 1.2);
  return w;
}

const hid = new Float32Array(N_HID);
const inp = new Float32Array(N_IN);

// входы сети
export function netInputs(c, geom) {
  for (let r = 0; r < RAYS.length; r++) inp[r] = geom.ray(c.x, c.z, c.h - RAYS[r], RAY_MAX) / RAY_MAX;
  const vmax = c.cls.vmaxKmh / 3.6;
  inp[RAYS.length] = c.u / vmax;
  inp[RAYS.length + 1] = clamp(wrapAngle(c.h - (c.trackHead ?? c.h)) / 1.2, -2, 2);
  inp[RAYS.length + 2] = clamp(c.d / geom.half, -2, 2);
  inp[RAYS.length + 3] = clamp(c.w / 2, -2, 2);
  inp[RAYS.length + 4] = clamp(c.v / 4, -2, 2);
  inp[RAYS.length + 5] = 1;
  return inp;
}

export function netForward(w, x, s, total, memory = true) {
  for (let h = 0; h < N_HID; h++) {
    let a = 0;
    const o = h * N_IN;
    for (let j = 0; j < N_IN; j++) a += x[j] * w[o + j];
    hid[h] = Math.tanh(a);
  }
  const o2 = N_IN * N_HID;
  let st = w[o2 + N_HID], pd = w[o2 + N_HID + 1 + N_HID];
  for (let h = 0; h < N_HID; h++) { st += hid[h] * w[o2 + h]; pd += hid[h] * w[o2 + N_HID + 1 + h]; }
  if (memory) {
    const q = ((((s / total) % 1) + 1) % 1) * SECTORS, sec = Math.floor(q) % SECTORS, t = q - Math.floor(q), j = (sec + 1) % SECTORS;
    st += (w[GEN + sec] || 0) * (1 - t) + (w[GEN + j] || 0) * t;
    pd += (w[GEN + SECTORS + sec] || 0) * (1 - t) + (w[GEN + SECTORS + j] || 0) * t;
  }
  return { steer: Math.tanh(st), pedal: Math.tanh(pd) };
}

export function controls(c, geom, memory = true) {
  const o = netForward(c.wts, netInputs(c, geom), c.s, geom.length, memory);
  c.ctl = o;
  return { steer: o.steer, throttle: Math.max(0, o.pedal), brake: Math.max(0, -o.pedal) };
}

let nextID = 1;
export function setNextID(n) { nextID = Math.max(nextID, n); }
export function getNextID() { return nextID; }

export function newCar(geom, cls, w, parent = null, elite = false, rules = null) {
  const c = newKartState(cls);
  placeKart(c, geom, 0, 0);
  c.progress = 0;
  Object.assign(c, {
    wts: genome(w), alive: true, done: false, max: 0, stale: 0, t: 0, cp: 0, score: 0, trail: [], offroad: 0,
    id: elite && parent ? parent.id : nextID++,
    parent: elite && parent ? parent.parent : parent ? parent.id : 0,
    mmr: parent ? Math.round(parent.mmr) : 1000,
    trials: elite && parent ? parent.trials : 0, wins: elite && parent ? parent.wins : 0,
    age: elite && parent ? parent.age + 1 : 0,
    rules: rules || null, ctl: { steer: 0, pedal: 0 }, hit: 0,
  });
  return c;
}

// Один тик 1/60 с (два подшага физики по 1/120) — одинаково для обучения и просмотра.
export function tickCar(c, geom, cfg, evolution, memory = true, pace = null) {
  if (!c.alive) return;
  const u = controls(c, geom, memory);
  c.t += DT;
  let hit = 0;
  for (let i = 0; i < 2; i++) {
    stepDynamics(c, u, DT / 2, STAB);
    hit = Math.max(hit, collide(c, geom, DT / 2));
  }
  c.hit = hit;
  c.stale += DT;
  if (c.progress > c.max + 2) { c.max = c.progress; c.stale = 0; }
  const L = geom.length;
  // отсечки времени по 1% круга — для отсечки по темпу
  const pct = Math.floor((c.max / L) * 100);
  if (pct > 0 && pct <= 100) { const sp = c.sp || (c.sp = []); while (sp.length < pct) sp.push(Math.round(c.t * 100) / 100); }
  c.cp = (c.max >= geom.sectorS[1] ? 1 : 0) + (c.max >= geom.sectorS[2] ? 1 : 0);
  if (cfg.trail && Math.floor(c.t * 10) > Math.floor((c.t - DT) * 10)) { c.trail.push([Math.round(c.x * 10) / 10, Math.round(c.z * 10) / 10, Math.round(c.y * 10) / 10]); if (c.trail.length > 1500) c.trail.shift(); }
  c.score = Math.max(0, c.max);
  const R = c.rules || cfg;
  if (c.progress >= L && c.cp === 2) {
    c.done = true; c.alive = false; c.max = L; c.score = L + 10000 + (R.timeout - c.t) * 100;
    return;
  }
  c.offroad = c.surface === 2 ? c.offroad + DT : 0;
  if (evolution && pace && R.paceCut !== false && pct >= 4 && pct < pace.length && c.t > pace[pct] * (1 + (R.paceMargin ?? 6) / 100) + 1.5) c.alive = false;
  if (evolution && ((R.wallKill && hit > 0.5) || c.offroad > R.offroadGrace || c.stale > R.idle || c.progress < -R.reverse || c.t >= R.timeout)) c.alive = false;
  if (!Number.isFinite(c.x) || !Number.isFinite(c.z)) c.alive = false;
}

export function rules(cfg) { return { timeout: cfg.timeout, idle: cfg.idle, offroadGrace: cfg.offroadGrace, wallKill: cfg.wallKill, reverse: cfg.reverse, paceCut: cfg.paceCut, paceMargin: cfg.paceMargin }; }

export function diversity(pop) {
  let sum = 0;
  for (let i = 0; i < GENOME; i += 3) {
    let mean = 0; for (const c of pop) mean += c.wts[i]; mean /= pop.length;
    let v = 0; for (const c of pop) v += (c.wts[i] - mean) ** 2;
    sum += Math.sqrt(v / pop.length);
  }
  return sum / Math.ceil(GENOME / 3);
}

export function rankMMR(ranked, L, goal) {
  const old = ranked.map((c) => c.mmr), pw = old.map((m) => 10 ** (m / 400));
  ranked.forEach((c, i) => {
    let delta = 0;
    ranked.forEach((d, j) => { if (i === j) return; const actual = c.score === d.score ? 0.5 : c.score > d.score ? 1 : 0; delta += actual - pw[i] / (pw[i] + pw[j]); });
    const perf = 600 + 900 * clamp(c.max / L, 0, 1) + (c.done ? 500 + 1400 * clamp(goal / c.t, 0, 1.4) : 0);
    c.mmr = Math.round(clamp(0.8 * old[i] + 0.2 * perf + (12 * delta) / Math.max(1, ranked.length - 1), 100, 4000));
    c.trials++; if (c.done) c.wins++;
  });
}

function selectParent(pool, cfg) {
  if (cfg.selection === 'uniform') return pool[Math.floor(rnd() * pool.length)];
  let best = pool[Math.floor(rnd() * pool.length)];
  for (let i = 1; i < cfg.tournament; i++) { const p = pool[Math.floor(rnd() * pool.length)]; if (p.score > best.score) best = p; }
  return best;
}

export function cloneCar(c) {
  return { id: c.id, parent: c.parent, mmr: c.mmr, trials: c.trials, wins: c.wins, age: c.age, wts: c.wts.slice(), t: c.t, max: c.max, done: c.done, score: c.score, trail: c.trail.map((p) => [p[0], p[1]]), rules: c.rules ? { ...c.rules } : null };
}

export function freshLab(geom, cls, cfg, track, brainID, name) {
  const lab = {
    generation: 1, cls: cls.id, pop: [], history: [], champion: null, bestScore: 0, bestProgress: 0, bestTime: null,
    clock: 0, simTime: 0, stagnation: 0, effectiveMutation: cfg.mutation, effectiveStrength: cfg.strength, leaderboard: [],
    brainID, brainName: name, knowledge: {}, originBrain: null, track,
  };
  lab.pop = Array.from({ length: cfg.population }, () => newCar(geom, cls, randomWeights(), null, false, rules(cfg)));
  return lab;
}

export function leader(lab) { return lab.pop.reduce((a, b) => (b.max > a.max ? b : a)); }

// Шаг обучения: все живые карты на 1/60 с
export function labStep(lab, geom, cfg) {
  lab.clock += DT; lab.simTime += DT;
  for (const c of lab.pop) if (c.alive) tickCar(c, geom, cfg, true, cfg.memory, lab.pace);
  return lab.pop.every((c) => !c.alive);
}

/** Смена поколения. Возвращает {improved, top, lap}. */
export function evolve(lab, geom, cfg) {
  const L = geom.length;
  const cls = CLASSES[lab.cls];
  const ranked = lab.pop.slice().sort((a, b) => b.score - a.score), top = ranked[0], count = ranked.length;
  const mean = ranked.reduce((s, c) => s + clamp(c.max / L, 0, 1) * 100, 0) / count;
  rankMMR(ranked, L, cfg.goal);
  const improved = !lab.champion || top.score > lab.bestScore + 0.0001;
  lab.stagnation = improved ? 0 : (lab.stagnation || 0) + 1;
  if (improved) { lab.champion = cloneCar(top); lab.bestScore = top.score; }
  if (top.done && top.sp && (!lab.paceT || top.t < lab.paceT)) { lab.pace = top.sp.slice(); lab.paceT = top.t; }
  lab.bestProgress = Math.max(lab.bestProgress, Math.min(100, (top.max / L) * 100));
  const finishes = ranked.filter((c) => c.done), lap = finishes.length ? Math.min(...finishes.map((c) => c.t)) : null;
  if (lap !== null) lab.bestTime = lab.bestTime === null ? lap : Math.min(lap, lab.bestTime);
  const factor = cfg.adaptive ? Math.min(cfg.expansion, 1 + lab.stagnation / cfg.patience) : 1;
  lab.effectiveMutation = Math.min(1, cfg.mutation * factor); lab.effectiveStrength = cfg.strength * factor;
  lab.history.push({
    g: lab.generation, best: Math.min(100, (top.max / L) * 100), mean, record: lab.bestProgress, finishes: finishes.length, count, lap,
    recordTime: lab.bestTime, mmr: Math.max(...ranked.map((c) => c.mmr)), meanMMR: ranked.reduce((s, c) => s + c.mmr, 0) / count,
    diversity: diversity(ranked), mutation: lab.effectiveMutation, success: (finishes.length / count) * 100,
  });
  if (lab.history.length > cfg.history) lab.history.splice(0, lab.history.length - cfg.history);
  lab.leaderboard = ranked.map((c) => ({ id: c.id, parent: c.parent, mmr: c.mmr, trials: c.trials, wins: c.wins, t: c.done ? c.t : null, progress: (c.max / L) * 100, age: c.age }));

  const N = cfg.population;
  const eliteCount = clamp(Math.round((N * cfg.elite) / 100), 1, Math.min(ranked.length, N - 1));
  const pool = ranked.slice(0, Math.max(2, Math.ceil((ranked.length * cfg.parents) / 100)));
  const R = rules(cfg);
  const next = ranked.slice(0, eliteCount).map((c) => newCar(geom, cls, c.wts, c, true, R));
  if (lab.champion && !next.some((c) => c.id === lab.champion.id) && next.length < N) next.push(newCar(geom, cls, lab.champion.wts, lab.champion, true, R));
  const randomCount = Math.floor(N * cfg.immigrants), fineCount = Math.floor((N - eliteCount - randomCount) * cfg.fine);
  let fineMade = 0;
  while (next.length < N) {
    if (next.length >= N - randomCount) { next.push(newCar(geom, cls, randomWeights(), null, false, R)); continue; }
    const fine = fineMade < fineCount && lab.champion; fineMade++;
    const a = fine ? lab.champion : selectParent(pool, cfg), b = selectParent(pool, cfg), w = a.wts.slice();
    if (fine) {
      const sectorOnly = cfg.memory && rnd() < 0.7;
      const start = sectorOnly ? GEN : 0, end = sectorOnly ? GENOME : GEN;
      const mutations = 1 + Math.floor(rnd() * 3);
      for (let m = 0; m < mutations; m++) { const i = start + Math.floor(rnd() * (end - start)); w[i] = clamp(w[i] + (rnd() + rnd() - 1) * cfg.fineStrength, -8, 8); }
    } else {
      for (let i = 0; i < w.length; i++) {
        if (i >= GEN && !cfg.memory) continue;
        if (rnd() < cfg.crossover) w[i] = cfg.blend ? (w[i] + b.wts[i]) / 2 : b.wts[i];
        const chance = i >= GEN ? Math.min(1, cfg.sectorMutation * factor) : lab.effectiveMutation;
        if (rnd() < chance) w[i] = clamp(w[i] + (rnd() + rnd() + rnd() - 1.5) * lab.effectiveStrength, -8, 8);
        if (rnd() < cfg.zeroReset) w[i] = rnd() * 2 - 1;
      }
    }
    next.push(newCar(geom, cls, w, a, false, R));
  }
  lab.pop = next; lab.generation++; lab.clock = 0;
  return { improved, top, lap };
}

// ---------- сохранение ----------
const finite = (v, a, b) => typeof v === 'number' && Number.isFinite(v) && v >= a && v <= b;

export function labPayload(lab, cfg, extra = {}) {
  const r4 = (v) => Math.round(v * 1e4) / 1e4;
  const strip = (c) => ({ id: c.id, parent: c.parent, mmr: c.mmr, trials: c.trials, wins: c.wins, age: c.age, wts: c.wts.map(r4), rules: c.rules || null });
  return {
    version: 4, kind: 'apex-lab', savedAt: Date.now(), cfg, track: lab.track, cls: lab.cls, seed: getSeed(), nextID: getNextID(),
    lab: {
      generation: lab.generation, history: lab.history, bestScore: lab.bestScore, bestProgress: lab.bestProgress, bestTime: lab.bestTime,
      simTime: lab.simTime, stagnation: lab.stagnation, effectiveMutation: lab.effectiveMutation, effectiveStrength: lab.effectiveStrength,
      leaderboard: lab.leaderboard, brainID: lab.brainID, brainName: lab.brainName, knowledge: lab.knowledge, originBrain: lab.originBrain,
      pop: lab.pop.map(strip), champion: lab.champion ? { ...strip(lab.champion), t: lab.champion.t, max: lab.champion.max, done: lab.champion.done, score: lab.champion.score, trail: lab.champion.trail || [] } : null,
    },
    ...extra,
  };
}

export function validatePayload(p, trackIds) {
  if (!p || p.version !== 4 || p.kind !== 'apex-lab' || !trackIds.includes(p.track) || !CLASSES[p.cls]) throw Error('Несовместимый формат сохранения');
  const l = p.lab;
  if (!l || !Number.isInteger(l.generation) || l.generation < 1 || !Array.isArray(l.pop) || !finite(l.pop.length, 16, 256) || !Array.isArray(l.history) || l.history.length > 3000) throw Error('Повреждённые данные обучения');
  const checkCar = (c) => { if (!c || !Array.isArray(c.wts) || c.wts.length !== GENOME || !c.wts.every((v) => finite(v, -8, 8))) throw Error('Неверные веса сети'); if (!Number.isSafeInteger(c.id) || !finite(c.mmr, 100, 4000)) throw Error('Повреждён рейтинг пилота'); };
  l.pop.forEach(checkCar); if (l.champion) checkCar(l.champion);
  for (const h of l.history) if (!h || !Number.isInteger(h.g) || !finite(h.best, 0, 100) || !finite(h.mean, 0, 100)) throw Error('Повреждён график');
  if (l.bestTime !== null && !finite(l.bestTime, 0, 1000)) throw Error('Повреждён рекорд');
  return p;
}

export function restoreLab(p, geom, cfg) {
  const cls = CLASSES[p.cls];
  setSeed(p.seed || Date.now());
  setNextID(p.nextID || 1);
  const l = p.lab;
  const lab = {
    generation: l.generation, cls: p.cls, track: p.track, history: l.history, champion: null, bestScore: l.bestScore || 0, bestProgress: l.bestProgress || 0,
    bestTime: l.bestTime ?? null, clock: 0, simTime: l.simTime || 0, stagnation: l.stagnation || 0,
    effectiveMutation: l.effectiveMutation ?? cfg.mutation, effectiveStrength: l.effectiveStrength ?? cfg.strength,
    leaderboard: l.leaderboard || [], brainID: l.brainID, brainName: l.brainName, knowledge: l.knowledge || {}, originBrain: l.originBrain || null,
  };
  const R = rules(cfg);
  lab.pop = l.pop.map((c) => { const car = newCar(geom, cls, c.wts, null, false, c.rules || R); Object.assign(car, { id: c.id, parent: c.parent, mmr: c.mmr, trials: c.trials, wins: c.wins, age: c.age }); return car; });
  if (l.champion) lab.champion = { ...l.champion, wts: l.champion.wts.slice(), trail: Array.isArray(l.champion.trail) ? l.champion.trail : [] };
  setNextID(Math.max(...lab.pop.map((c) => c.id + 1), lab.champion ? lab.champion.id + 1 : 1));
  return lab;
}

export function validBrain(b, trackIds) {
  if (!b || typeof b.id !== 'string' || b.id.length > 100 || typeof b.name !== 'string' || b.name.length > 80) return false;
  if (!trackIds.includes(b.sourceMap) || !CLASSES[b.cls] || !Array.isArray(b.general) || b.general.length !== GEN || !b.general.every((w) => finite(w, -8, 8))) return false;
  if (!finite(b.mmr, 100, 4000) || !b.knowledge || typeof b.knowledge !== 'object') return false;
  return Object.keys(b.knowledge).every((id) => {
    const k = b.knowledge[id];
    return trackIds.includes(id) && k && Array.isArray(k.memory) && k.memory.length === MEM && k.memory.every((w) => finite(w, -8, 8)) && Number.isInteger(k.generation) && (k.bestTime === null || finite(k.bestTime, 0, 1000));
  });
}

export function carFromBrain(b, geom, trackId, cfg) {
  const k = b.knowledge[trackId];
  const w = b.general.concat(k ? k.memory : new Array(MEM).fill(0));
  const c = newCar(geom, CLASSES[b.cls] || CLASSES.ok, w, null, false, k && k.rules ? { ...k.rules } : rules(cfg));
  c.mmr = b.mmr;
  return c;
}

// ---------- старт с учителя ----------
// Классический ИИ (RaceAI) проезжает несколько кругов с помехами на руле, мы записываем
// входы сети и его команды и обучаем общие 122 веса повторять их (Adam, MSE).
// Эволюция потом стартует с пилота, который уже умеет проходить круг.
function teacherFit(geom, cls, RaceAI, opts = {}) {
  const samples = [];
  const laps = opts.laps || 3;
  for (let run = 0; run < 2; run++) {
    const k = newKartState(cls);
    placeKart(k, geom, 0, 0);
    k.progress = 0; k.speedScale = 1;
    k.respawn = () => placeKart(k, geom, k.s, 0);
    const race = { geom, karts: [k], canDrive: true, time: 0, items: null };
    const ai = new RaceAI(race, k, { corner: 0.97 + run * 0.03, items: 0, speed: 1, rubber: 0 }, 11 + run);
    let noise = 0, nT = 0;
    for (let step = 0; step < 60 * 75 * laps && k.progress < geom.length * laps; step++) {
      const cmd = ai.update(DT);
      const x = netInputs(k, geom);
      const qq = ((((k.s / geom.length) % 1) + 1) % 1) * SECTORS;
      samples.push({ q: qq, x: Array.from(x), st: clamp(cmd.steer, -0.95, 0.95), pd: clamp(cmd.throttle - cmd.brake, -0.95, 0.95) });
      nT -= DT;
      if (nT <= 0) { nT = 0.3 + rnd() * 0.8; noise = run ? (rnd() - 0.5) * 0.5 : 0; }
      const u = { steer: clamp(cmd.steer + noise, -1, 1), throttle: cmd.throttle, brake: cmd.brake };
      for (let i = 0; i < 2; i++) { stepDynamics(k, u, DT / 2, STAB); collide(k, geom, DT / 2); }
      race.time += DT;
    }
  }
  // Adam по мини-пакетам
  const W = GENOME;
  const w = randomWeights().map((v, i) => (i < GEN ? v * 0.5 : 0));
  const m = new Float64Array(W), v = new Float64Array(W), gr = new Float64Array(W);
  const b1 = 0.9, b2 = 0.999, lr = opts.lr || 0.01, o2 = N_IN * N_HID;
  const h = new Float64Array(N_HID);
  let t = 0;
  const epochs = opts.epochs || 60, B = 64;
  for (let ep = 0; ep < epochs; ep++) {
    for (let i = samples.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); const tmp = samples[i]; samples[i] = samples[j]; samples[j] = tmp; }
    for (let s0 = 0; s0 < samples.length; s0 += B) {
      gr.fill(0);
      const end = Math.min(samples.length, s0 + B);
      for (let n = s0; n < end; n++) {
        const { x, st, pd, q } = samples[n];
        const sec = Math.floor(q) % SECTORS, fr = q - Math.floor(q), sj = (sec + 1) % SECTORS;
        for (let j = 0; j < N_HID; j++) { let a = 0; for (let q = 0; q < N_IN; q++) a += x[q] * w[j * N_IN + q]; h[j] = Math.tanh(a); }
        let zs = w[o2 + N_HID], zp = w[o2 + N_HID + 1 + N_HID];
        for (let j = 0; j < N_HID; j++) { zs += h[j] * w[o2 + j]; zp += h[j] * w[o2 + N_HID + 1 + j]; }
        zs += w[GEN + sec] * (1 - fr) + w[GEN + sj] * fr; zp += w[GEN + SECTORS + sec] * (1 - fr) + w[GEN + SECTORS + sj] * fr;
        const ys = Math.tanh(zs), yp = Math.tanh(zp);
        const ds = (ys - st) * (1 - ys * ys) * 2, dp = (yp - pd) * (1 - yp * yp);
        gr[o2 + N_HID] += ds; gr[o2 + N_HID + 1 + N_HID] += dp;
        gr[GEN + sec] += ds * (1 - fr); gr[GEN + sj] += ds * fr; gr[GEN + SECTORS + sec] += dp * (1 - fr); gr[GEN + SECTORS + sj] += dp * fr;
        for (let j = 0; j < N_HID; j++) {
          gr[o2 + j] += ds * h[j]; gr[o2 + N_HID + 1 + j] += dp * h[j];
          const dh = (ds * w[o2 + j] + dp * w[o2 + N_HID + 1 + j]) * (1 - h[j] * h[j]);
          for (let q = 0; q < N_IN; q++) gr[j * N_IN + q] += dh * x[q];
        }
      }
      t++;
      const nb = end - s0;
      const lrT = lr * (1 - 0.8 * ep / epochs);
      for (let i = 0; i < W; i++) {
        const g = gr[i] / nb;
        m[i] = b1 * m[i] + (1 - b1) * g; v[i] = b2 * v[i] + (1 - b2) * g * g;
        w[i] = clamp(w[i] - (lrT * (m[i] / (1 - b1 ** t))) / (Math.sqrt(v[i] / (1 - b2 ** t)) + 1e-8), -8, 8);
      }
    }
  }
  return genome(w);
}

// популяция вокруг учителя: несколько точных копий, остальные с мутациями
export function seedFromTeacher(lab, geom, cls, cfg, base) {
  const R = rules(cfg);
  lab.pop = lab.pop.map((c, i) => {
    const w = base.slice();
    if (i >= 2) for (let j = 0; j < GENOME; j++) if (rnd() < (j < GEN ? 0.2 : 0.3)) w[j] = clamp(w[j] + (rnd() + rnd() - 1) * (j < GEN ? 0.15 : 0.3), -8, 8);
    return newCar(geom, cls, w, null, false, R);
  });
  lab.teacher = true;
}

// несколько попыток учителя: каждую проверяем одним кругом и берём лучшую
export function teacherWeights(geom, cls, RaceAI, opts = {}) {
  let best = null, bestScore = -Infinity;
  const cfg = { ...DEFAULTS, trail: false };
  for (let tr = 0; tr < (opts.tries || 3); tr++) {
    const w = teacherFit(geom, cls, RaceAI, { ...opts, lr: 0.01 * (1 + tr * 0.4) });
    const c = newCar(geom, cls, w, null, false, rules(cfg));
    while (c.alive) tickCar(c, geom, cfg, true, true);
    const sc = c.score;
    if (sc > bestScore) { bestScore = sc; best = w; }
    if (c.done) break;
  }
  return best;
}
