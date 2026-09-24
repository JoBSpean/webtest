// Точка входа: рендер, экраны меню, режимы игры, игровой цикл.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Race, getGeom } from './race.js';
import { HUD } from './hud.js';
import { AudioEngine } from './audio.js';
import { Input } from './input.js';
import { CameraRig } from './camera.js';
import { Store } from './storage.js';
import { TRACKS } from './trackdata.js';
import { DRIVERS, DIFFICULTY, CUP_POINTS } from './config.js';
import { setMaxAnisotropy } from './textures.js';
import { fmtTime, isTouchDevice } from './util.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const MODE_TITLES = { race: 'Быстрая гонка', cup: 'Кубок Апекса', tt: 'Заезд на время' };
const CUP_TRACKS = ['valley', 'harbor', 'neon'];
const IDLE = { steer: 0, throttle: 0, brake: 0, drift: false, driftPressed: false, item: false, look: false, camera: false, reset: false, pause: false };

class App {
  constructor() {
    this.store = new Store();
    this.settings = this.store.settings;
    if (!this.settings.quality) this.store.setSettings({ quality: isTouchDevice() ? 'medium' : 'high' });
    this.canvas = $('game');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    setMaxAnisotropy(Math.min(8, this.renderer.capabilities.getMaxAnisotropy()));
    this.camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 3000);
    this.camRig = new CameraRig(this.camera);
    this.camRig.mode = this.settings.camera;
    this.hud = new HUD();
    this.audio = new AudioEngine();
    this.audio.setVolumes({ master: this.settings.master, music: this.settings.music, sfx: this.settings.sfx });
    this.input = new Input();
    this.input.bindTouch($('touch'));
    this.state = 'menu';
    this.paused = false;
    this.race = null;
    this.cup = null;
    this.menu = { mode: 'race', trackId: this.settings.trackId, driverId: this.settings.driverId };
    this.screenStack = [];
    this.applyQuality();
    addEventListener('resize', () => this.resize());
    this.resize();
    this.bindUI();
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state === 'race') this.pause(); });
    // звук можно запустить только после действия пользователя
    const unlock = () => { this.audio.init(); this.audio.setMusic(this.state === 'race' ? 'race' : 'menu'); };
    addEventListener('pointerdown', unlock);
    addEventListener('keydown', unlock);

    this.startAttract(this.menu.trackId);
    $('loading').hidden = true;
    this.showScreen('title');
    this.last = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }

  // ---------- графика ----------
  applyQuality() {
    const q = this.settings.quality;
    const r = this.renderer;
    const dpr = window.devicePixelRatio || 1;
    r.setPixelRatio(q === 'high' ? Math.min(dpr, 2) : q === 'medium' ? Math.min(dpr, 1.5) : Math.min(dpr, 1));
    r.shadowMap.enabled = q !== 'low';
    r.shadowMap.type = q === 'high' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
    if (q === 'high') {
      if (!this.composer) {
        const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
        this.composer = new EffectComposer(r, rt);
        this.renderPass = new RenderPass(new THREE.Scene(), this.camera);
        this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.4, 0.5, 0.85);
        this.composer.addPass(this.renderPass);
        this.composer.addPass(this.bloom);
        this.composer.addPass(new OutputPass());
      }
    } else if (this.composer) {
      this.composer.dispose();
      this.composer = null;
    }
    this.resize();
    this.hud.showFps(this.settings.fps);
    this.hud.touchEnabled = this.settings.touch === 'on' || (this.settings.touch === 'auto' && isTouchDevice());
  }

  resize() {
    const w = innerWidth, h = innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (this.composer) {
      this.composer.setPixelRatio(this.renderer.getPixelRatio());
      this.composer.setSize(w, h);
    }
  }

  applyTheme(race) {
    const t = race.theme;
    this.renderer.toneMappingExposure = t.exposure;
    if (this.bloom) {
      this.bloom.strength = t.night ? 0.7 : 0.32;
      this.bloom.threshold = t.night ? 0.62 : 0.88;
      this.bloom.radius = t.night ? 0.55 : 0.4;
    }
  }

  render() {
    if (!this.race) return;
    if (this.composer) {
      this.renderPass.scene = this.race.scene;
      this.composer.render();
    } else this.renderer.render(this.race.scene, this.camera);
  }

  // ---------- гонки ----------
  setRace(race) {
    if (this.race) this.race.dispose();
    this.race = race;
    this.applyTheme(race);
    this.renderer.compile(race.scene, this.camera);
  }

  startAttract(trackId) {
    this.setRace(new Race(this, { mode: 'attract', trackId, laps: 999, difficulty: 'hard' }));
    const def = TRACKS.find((t) => t.id === trackId);
    $('onair-what').textContent = def.name;
  }

  startRace(cfg) {
    this.lastCfg = cfg;
    $('loading').hidden = false;
    $('loading-text').textContent = 'Готовим трассу';
    this.hideScreens();
    $('onair').hidden = true;
    setTimeout(() => {
      this.setRace(new Race(this, cfg));
      this.hud.setupRace(this.race);
      this.hud.show(true);
      const lapsTxt = cfg.laps === 1 ? '1 круг' : cfg.laps < 5 ? cfg.laps + ' круга' : cfg.laps + ' кругов';
      this.hud.message(this.race.def.name, 'info', 2.4);
      this.hud.message((cfg.mode === 'cup' ? `Этап ${this.cup.stage + 1} из 3 · ` : '') + lapsTxt, 'small', 2.4);
      this.hud.showTouch(true);
      this.state = 'race';
      this.paused = false;
      this.input.poll();
      this.input.captureKeys = true;
      this.audio.setMusic('race');
      $('loading').hidden = true;
      this.canvas.focus();
    }, 30);
  }

  pause() {
    if (this.state !== 'race') return;
    this.state = 'paused';
    this.paused = true;
    this.audio.silenceEngines();
    this.hud.showTouch(false);
    $('pause-title').textContent = this.race.def.name;
    this.showScreen('pause');
  }
  resume() {
    this.hideScreens();
    this.state = 'race';
    this.paused = false;
    this.input.poll();
    this.hud.showTouch(true);
    this.canvas.focus();
  }
  quitToMenu() {
    this.cup = null;
    this.state = 'menu';
    this.paused = false;
    this.hud.show(false);
    this.input.captureKeys = false;
    this.audio.silenceEngines();
    this.audio.setMusic('menu');
    this.startAttract(this.menu.trackId);
    this.screenStack = [];
    this.showScreen('title');
  }

  onRaceFinished(res, race) {
    if (race !== this.race || this.state !== 'race') return;
    this.state = 'results';
    this.hud.show(false);
    this.audio.silenceEngines();
    this.input.captureKeys = false;
    const me = res.rows.find((r) => r.isPlayer);
    let note = '';
    if (res.mode !== 'cup' && me && !me.est && res.mode !== 'attract') {
      const rec = this.store.saveRace(res.trackId, res.laps, me.time);
      if (rec) note = 'Новый рекорд заезда на ' + res.laps + ' кр.: ' + fmtTime(me.time) + '.';
    }
    if (res.mode === 'cup') {
      res.rows.forEach((r, i) => { this.cup.points[r.driver.id] = (this.cup.points[r.driver.id] || 0) + CUP_POINTS[i]; r.pts = CUP_POINTS[i]; });
      this.cup.lastResults = res;
    }
    this.renderResults(res, note);
    this.showScreen('results');
  }

  // ---------- кубок ----------
  startCup() {
    const field = DRIVERS.map((d) => d.id);
    this.cup = {
      stage: 0, points: {}, driverId: this.menu.driverId,
      difficulty: this.settings.difficulty, field,
    };
    field.forEach((id) => (this.cup.points[id] = 0));
    this.startCupStage();
  }
  startCupStage() {
    const c = this.cup;
    let grid;
    if (c.stage === 0) {
      const others = c.field.filter((id) => id !== c.driverId).sort(() => Math.random() - 0.5);
      others.splice(5, 0, c.driverId);
      grid = others;
    } else {
      // обратная решётка: лидер кубка стартует последним
      grid = c.field.slice().sort((a, b) => c.points[a] - c.points[b]);
    }
    this.startRace({ mode: 'cup', trackId: CUP_TRACKS[c.stage], driverId: c.driverId, difficulty: c.difficulty, laps: 3, grid });
  }

  // ---------- экраны ----------
  showScreen(name) {
    this.hideScreens();
    const el = $('scr-' + name);
    el.hidden = false;
    this.curScreen = name;
    $('onair').hidden = !(this.state === 'menu' && (name === 'title'));
    if (name === 'setup') this.renderSetup();
    if (name === 'settings') this.renderSettings();
    const first = el.querySelector('.menu-btn, .btn.primary, button');
    if (first && !isTouchDevice()) first.focus({ preventScroll: true });
  }
  hideScreens() { document.querySelectorAll('.screen').forEach((s) => (s.hidden = true)); this.curScreen = null; }

  bindUI() {
    document.body.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (b) this.audio.ctx && this.audio.play('ui');
      const go = e.target.closest('[data-go]');
      if (go) {
        const g = go.dataset.go;
        if (g === 'race' || g === 'cup' || g === 'tt') { this.menu.mode = g; this.showScreen('setup'); }
        else if (g === 'settings') { this.settingsBack = 'title'; this.showScreen('settings'); }
        else this.showScreen(g);
      }
      const act = e.target.closest('[data-act]');
      if (act) {
        const a = act.dataset.act;
        if (a === 'resume') this.resume();
        if (a === 'restart') { this.hideScreens(); this.startRace(this.lastCfg); }
        if (a === 'settings') { this.settingsBack = 'pause'; this.showScreen('settings'); }
        if (a === 'quit') this.quitToMenu();
      }
    });
    $('btn-start').addEventListener('click', () => {
      const s = this.settings;
      this.store.setSettings({ driverId: this.menu.driverId, trackId: this.menu.trackId });
      if (this.menu.mode === 'cup') this.startCup();
      else this.startRace({
        mode: this.menu.mode, trackId: this.menu.trackId, driverId: this.menu.driverId,
        difficulty: s.difficulty, laps: s.laps, opponents: this.menu.mode === 'tt' ? 0 : s.opponents,
      });
    });
    $('btn-settings-back').addEventListener('click', () => {
      if (this.settingsBack === 'pause') this.showScreen('pause');
      else this.showScreen('title');
    });
    // сегментные переключатели в подготовке к заезду
    document.querySelectorAll('#scr-setup .seg').forEach((seg) => {
      seg.addEventListener('click', (e) => {
        const b = e.target.closest('button'); if (!b) return;
        const key = seg.dataset.opt;
        const v = key === 'difficulty' ? b.dataset.v : Number(b.dataset.v);
        this.store.setSettings({ [key]: v });
        this.syncSeg(seg, String(v));
      });
    });
    // настройки
    document.querySelectorAll('#scr-settings .seg').forEach((seg) => {
      seg.addEventListener('click', (e) => {
        const b = e.target.closest('button'); if (!b) return;
        const key = seg.dataset.set;
        let v = b.dataset.v;
        if (key === 'camera') v = Number(v);
        if (key === 'fps') v = v === 'true';
        const qualityChanged = key === 'quality' && v !== this.settings.quality;
        this.store.setSettings({ [key]: v });
        if (key === 'quality') this.store.setSettings({ qualityAuto: false });
        this.syncSeg(seg, String(v));
        if (key === 'camera') this.camRig.mode = v;
        this.applyQuality();
        if (qualityChanged && this.state === 'menu') this.startAttract(this.menu.trackId);
      });
    });
    document.querySelectorAll('#scr-settings input[type=range]').forEach((r) => {
      r.addEventListener('input', () => {
        const key = r.dataset.vol;
        this.store.setSettings({ [key]: Number(r.value) });
        this.audio.setVolumes({ [key]: Number(r.value) });
      });
    });
    addEventListener('keydown', (e) => {
      if (e.code === 'Escape' || e.code === 'KeyP') {
        if (this.state === 'paused' && this.curScreen === 'pause') { e.preventDefault(); this.resume(); }
        else if (this.state === 'menu' && this.curScreen && this.curScreen !== 'title' && e.code === 'Escape') this.showScreen('title');
        else if (this.curScreen === 'settings' && e.code === 'Escape') $('btn-settings-back').click();
      }
      if (e.code === 'KeyM' && this.state !== 'race') {
        this.audio.toggleMute();
      }
    });
  }

  syncSeg(seg, v) {
    seg.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === v)));
  }

  renderSetup() {
    const m = this.menu, s = this.settings;
    $('setup-eyebrow').textContent = MODE_TITLES[m.mode];
    $('setup-title').textContent = m.mode === 'cup' ? 'Три этапа, одна таблица' : m.mode === 'tt' ? 'Один на трассе против часов' : 'Выберите трассу и пилота';
    const cup = m.mode === 'cup';
    // трассы
    const list = $('track-list');
    list.innerHTML = '';
    for (const t of TRACKS) {
      const rec = this.store.record(t.id);
      const g = getGeom(t.id);
      const b = document.createElement('button');
      b.className = 'track-card';
      b.setAttribute('aria-pressed', String(!cup && t.id === m.trackId));
      if (cup) b.disabled = true;
      b.innerHTML = `<canvas width="240" height="180" aria-hidden="true"></canvas><span class="nm">${esc(t.name)}</span><span class="meta"><span>${Math.round(g.length)} м</span><span>${rec.bestLap ? fmtTime(rec.bestLap) : 'нет рекорда'}</span></span>`;
      drawTrackPreview(b.querySelector('canvas'), g, t.theme);
      b.addEventListener('click', () => {
        if (cup) return;
        m.trackId = t.id;
        list.querySelectorAll('.track-card').forEach((c) => c.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true');
        $('track-desc').textContent = t.desc;
        if (this.race && this.race.def.id !== t.id) this.startAttract(t.id);
      });
      list.appendChild(b);
    }
    const cur = TRACKS.find((t) => t.id === m.trackId);
    $('track-desc').textContent = cup ? 'Очки за места: 10, 8, 6, 5, 4, 3, 2, 1. На втором и третьем этапах лидер кубка стартует последним.' : cur.desc;
    const st = $('cup-stages');
    st.hidden = !cup;
    st.innerHTML = cup ? CUP_TRACKS.map((id, i) => `<span>Этап ${i + 1}: <b>${esc(TRACKS.find((t) => t.id === id).short)}</b></span>`).join('<span aria-hidden="true">→</span>') : '';
    // пилоты
    const dl = $('driver-list');
    dl.innerHTML = '';
    for (const d of DRIVERS) {
      const b = document.createElement('button');
      b.className = 'drv';
      b.setAttribute('aria-pressed', String(d.id === m.driverId));
      b.innerHTML = `<span class="num" style="background:${d.color};color:${d.accent}">${d.num}</span><span class="nm">${esc(d.name)}</span>`;
      b.addEventListener('click', () => {
        m.driverId = d.id;
        dl.querySelectorAll('.drv').forEach((c) => c.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true');
        this.renderDriver();
      });
      dl.appendChild(b);
    }
    this.renderDriver();
    $('opt-diff').hidden = m.mode === 'tt';
    $('opt-laps').hidden = m.mode === 'cup';
    $('opt-opp').hidden = m.mode !== 'race';
    this.syncSeg(document.querySelector('[data-opt=difficulty]'), s.difficulty);
    this.syncSeg(document.querySelector('[data-opt=laps]'), String(s.laps));
    this.syncSeg(document.querySelector('[data-opt=opponents]'), String(s.opponents));
    $('btn-start').textContent = cup ? 'Начать кубок' : 'На старт';
  }

  renderDriver() {
    const d = DRIVERS.find((x) => x.id === this.menu.driverId);
    const rows = [['Скорость', d.stats.speed], ['Разгон', d.stats.accel], ['Управление', d.stats.handling], ['Вес', d.stats.weight]];
    $('driver-stats').innerHTML = rows.map(([n, v]) => `<div class="stat"><span>${n}</span><span class="pips" aria-label="${v} из 5">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= v ? 'on' : ''}"></i>`).join('')}</span></div>`).join('');
    $('driver-bio').textContent = `№${d.num} ${d.name}. ${d.bio}`;
  }

  renderSettings() {
    const s = this.settings;
    document.querySelectorAll('#scr-settings .seg').forEach((seg) => this.syncSeg(seg, String(s[seg.dataset.set])));
    document.querySelectorAll('#scr-settings input[type=range]').forEach((r) => (r.value = s[r.dataset.vol]));
  }

  renderResults(res, note) {
    const cup = res.mode === 'cup';
    const tt = res.mode === 'tt';
    const me = res.rows.find((r) => r.isPlayer);
    $('res-eyebrow').textContent = cup ? `Кубок Апекса · этап ${this.cup.stage + 1} из 3` : MODE_TITLES[res.mode];
    $('res-title').textContent = tt ? res.trackName : me ? `${me.pos}-е место · ${res.trackName}` : res.trackName;
    const lead = res.rows[0];
    let html;
    if (tt) {
      const best = Math.min(...me.laps);
      html = `<thead><tr><th>Круг</th><th class="mono">Время</th><th class="mono">К лучшему</th></tr></thead><tbody>` +
        me.laps.map((t, i) => `<tr class="${t === best ? 'me' : ''}"><td class="p">${i + 1}</td><td class="mono ${t === best ? 'purple' : ''}">${fmtTime(t)}</td><td class="mono">${t === best ? '—' : '+' + (t - best).toFixed(3)}</td></tr>`).join('') +
        `<tr><td class="p">Σ</td><td class="mono">${fmtTime(me.time)}</td><td class="mono"></td></tr></tbody>`;
      const rec = this.store.record(res.trackId);
      note = (note ? note + ' ' : '') + `Рекорд трассы: ${fmtTime(rec.bestLap)}. Лучший круг сохраняется как призрак для следующего заезда.`;
    } else {
      html = `<thead><tr><th>Поз</th><th>Пилот</th><th class="mono">Время</th><th class="mono">Отставание</th><th class="mono">Лучший круг</th>${cup ? '<th class="mono">Очки</th>' : ''}</tr></thead><tbody>` +
        res.rows.map((r) => {
          const gap = r === lead ? '—' : '+' + (r.time - lead.time).toFixed(3);
          const fl = r.bestLap === res.fastestLap;
          return `<tr class="${r.isPlayer ? 'me' : ''}"><td class="p">${r.pos}</td><td><span class="chip"><i style="background:${r.driver.color}"></i>${esc(r.name)}</span></td>` +
            `<td class="mono ${r.est ? 'est' : ''}">${fmtTime(r.time)}</td><td class="mono ${r.est ? 'est' : ''}">${gap}</td>` +
            `<td class="mono ${fl ? 'purple' : ''}">${isFinite(r.bestLap) ? fmtTime(r.bestLap) : '—'}</td>${cup ? `<td class="mono pts">+${r.pts}</td>` : ''}</tr>`;
        }).join('') + '</tbody>';
      if (res.rows.some((r) => r.est)) note = (note ? note + ' ' : '') + 'Курсивом — расчётное время пилотов, которые ещё на трассе.';
    }
    $('res-table').innerHTML = html;
    $('res-podium').innerHTML = '';
    $('res-note').textContent = note;
    const acts = $('res-actions');
    acts.innerHTML = '';
    const btn = (label, primary, fn) => {
      const b = document.createElement('button');
      b.className = 'btn' + (primary ? ' primary' : '');
      b.textContent = label;
      b.addEventListener('click', fn);
      acts.appendChild(b);
      return b;
    };
    if (cup) {
      btn('Выйти в меню', false, () => this.quitToMenu());
      btn('Таблица кубка', true, () => this.renderCupTable());
    } else {
      btn('Меню', false, () => this.quitToMenu());
      if (!tt) {
        const idx = TRACKS.findIndex((t) => t.id === res.trackId);
        const next = TRACKS[(idx + 1) % TRACKS.length];
        btn('Трасса: ' + next.short, false, () => { this.menu.trackId = next.id; this.startRace({ ...this.lastCfg, trackId: next.id }); });
      }
      btn('Ещё раз', true, () => this.startRace(this.lastCfg));
    }
    const pb = acts.querySelector('.btn.primary');
    if (pb && !isTouchDevice()) setTimeout(() => pb.focus({ preventScroll: true }), 50);
  }

  renderCupTable() {
    const c = this.cup;
    const final = c.stage >= CUP_TRACKS.length - 1;
    const rows = c.field.map((id) => ({ d: DRIVERS.find((x) => x.id === id), pts: c.points[id] })).sort((a, b) => b.pts - a.pts);
    $('res-eyebrow').textContent = final ? 'Кубок Апекса · итог' : `Кубок Апекса · после этапа ${c.stage + 1}`;
    const myPos = rows.findIndex((r) => r.d.id === c.driverId) + 1;
    $('res-title').textContent = final ? (myPos === 1 ? 'Кубок ваш' : `Итог: ${myPos}-е место`) : 'Таблица кубка';
    if (final) {
      const p = rows.slice(0, 3);
      $('res-podium').innerHTML = `<div class="podium"><div class="p2"><div class="place">2</div><div class="who">${esc(p[1].d.name)}</div><div class="pts">${p[1].pts}</div></div><div class="p1"><div class="place">1</div><div class="who">${esc(p[0].d.name)}</div><div class="pts">${p[0].pts}</div></div><div class="p3"><div class="place">3</div><div class="who">${esc(p[2].d.name)}</div><div class="pts">${p[2].pts}</div></div></div>`;
      if (myPos === 1) { this.store.data.cupWins++; this.store.save(); }
    } else $('res-podium').innerHTML = '';
    $('res-table').innerHTML = `<thead><tr><th>Поз</th><th>Пилот</th><th class="mono">Очки</th><th class="mono">Отрыв</th></tr></thead><tbody>` +
      rows.map((r, i) => `<tr class="${r.d.id === c.driverId ? 'me' : ''}"><td class="p">${i + 1}</td><td><span class="chip"><i style="background:${r.d.color}"></i>№${r.d.num} ${esc(r.d.name)}</span></td><td class="mono pts">${r.pts}</td><td class="mono">${i === 0 ? '—' : '−' + (rows[0].pts - r.pts)}</td></tr>`).join('') + '</tbody>';
    $('res-note').textContent = final ? `Побед в кубке: ${this.store.data.cupWins}.` : `Следующий этап: ${TRACKS.find((t) => t.id === CUP_TRACKS[c.stage + 1]).name}. Лидер стартует последним.`;
    const acts = $('res-actions');
    acts.innerHTML = '';
    const mk = (label, primary, fn) => { const b = document.createElement('button'); b.className = 'btn' + (primary ? ' primary' : ''); b.textContent = label; b.addEventListener('click', fn); acts.appendChild(b); return b; };
    mk('Выйти в меню', false, () => this.quitToMenu());
    if (final) mk('Новый кубок', true, () => this.startCup());
    else mk('Следующий этап', true, () => { c.stage++; this.startCupStage(); });
    const pb = acts.querySelector('.btn.primary');
    if (pb && !isTouchDevice()) pb.focus({ preventScroll: true });
  }

  // навигация по меню с геймпада
  menuNav() {
    if (!this.curScreen) return;
    const nav = this.input.pollMenu();
    if (!(nav.up || nav.down || nav.left || nav.right || nav.ok || nav.back)) return;
    const scr = $('scr-' + this.curScreen);
    const items = Array.from(scr.querySelectorAll('button:not([disabled]), input')).filter((e) => e.offsetParent !== null);
    let i = items.indexOf(document.activeElement);
    if (nav.down || nav.right) i = (i + 1) % items.length;
    if (nav.up || nav.left) i = (i - 1 + items.length) % items.length;
    if (nav.up || nav.down || nav.left || nav.right) { items[Math.max(0, i)].focus(); this.audio.ctx && this.audio.play('uiMove'); }
    if (nav.ok && document.activeElement && document.activeElement.tagName === 'BUTTON') document.activeElement.click();
    if (nav.back) {
      if (this.curScreen === 'pause') this.resume();
      else if (this.curScreen !== 'title' && this.curScreen !== 'results') this.showScreen(this.state === 'paused' ? 'pause' : 'title');
    }
  }

  // если меню-сцена идёт медленнее 40 FPS, снижаем качество (пока игрок не выбрал его сам)
  autoQuality(raw) {
    if (this.settings.qualityAuto === false || this.state !== 'menu' || this.settings.quality === 'low') return;
    const pf = this.perf || (this.perf = { t: 0, n: 0, skip: 1.5, checks: 0 });
    if (pf.skip > 0) { pf.skip -= raw; return; }
    pf.t += raw; pf.n++;
    if (pf.t < 3) return;
    const fps = pf.n / pf.t;
    this.perf = { t: 0, n: 0, skip: 1.5, checks: pf.checks + 1 };
    if (fps < 40) {
      this.store.setSettings({ quality: this.settings.quality === 'high' ? 'medium' : 'low' });
      this.applyQuality();
      this.startAttract(this.menu.trackId);
    } else if (this.perf.checks >= 2) this.store.setSettings({ qualityAuto: false });
  }

  loop(t) {
    requestAnimationFrame((tt) => this.loop(tt));
    const raw = Math.max(0.0001, (t - this.last) / 1000);
    const dt = Math.min(0.05, raw);
    this.last = t;
    if (!this.race) return;
    this.autoQuality(Math.min(raw, 0.5));
    if (this.state === 'race') {
      const inp = this.input.poll(this.hud.touchEnabled);
      if (inp.mute) this.audio.toggleMute();
      if (inp.pause) { this.pause(); this.render(); return; }
      this.race.update(dt, inp);
    } else if (this.state !== 'paused') {
      this.race.update(dt, IDLE);
      this.menuNav();
    } else this.menuNav();
    this.render();
  }
}

// превью трассы для карточки
function drawTrackPreview(canvas, g, theme) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const bg = { day: ['#1d3a22', '#26492b'], sunset: ['#3a2430', '#5a3440'], night: ['#11122a', '#1b1c3a'] }[theme];
  const grd = ctx.createLinearGradient(0, 0, 0, H);
  grd.addColorStop(0, bg[0]); grd.addColorStop(1, bg[1]);
  ctx.fillStyle = grd; ctx.fillRect(0, 0, W, H);
  const b = g.bounds(20);
  const sc = Math.min((W - 24) / (b.maxX - b.minX), (H - 24) / (b.maxZ - b.minZ));
  const ox = (W - (b.maxX - b.minX) * sc) / 2, oz = (H - (b.maxZ - b.minZ) * sc) / 2;
  ctx.beginPath();
  for (let i = 0; i <= g.N; i += 3) { const k = i % g.N; ctx.lineTo(ox + (g.px[k] - b.minX) * sc, oz + (g.pz[k] - b.minZ) * sc); }
  ctx.closePath();
  ctx.lineJoin = 'round';
  ctx.strokeStyle = 'rgba(0,0,0,0.4)'; ctx.lineWidth = 10; ctx.stroke();
  ctx.strokeStyle = '#f2f3f5'; ctx.lineWidth = 5; ctx.stroke();
  const p = g.pointAt(0, 0);
  ctx.fillStyle = '#ffd000';
  ctx.beginPath(); ctx.arc(ox + (p.x - b.minX) * sc, oz + (p.z - b.minZ) * sc, 5, 0, 7); ctx.fill();
}

function boot() {
  try {
    const test = document.createElement('canvas');
    if (!(test.getContext('webgl2') || test.getContext('webgl'))) throw new Error('webgl');
    window.__apex = new App();
  } catch (e) {
    console.error(e);
    $('loading-text').textContent = 'Не удалось запустить WebGL. Обновите браузер или включите аппаратное ускорение.';
    const bar = document.querySelector('#loading .bar');
    if (bar) bar.hidden = true;
  }
}

const hot = typeof window !== 'undefined' && window.claude && window.claude.hot;
if (hot && hot.ready) hot.ready(boot); else boot();
