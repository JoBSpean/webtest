// Точка входа: рендер, экраны меню, режимы (заезд на время, гонка, чемпионат,
// просмотр нейропилота, лаборатория ИИ), результаты и игровой цикл.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Race, getGeom, recordKey } from './race.js';
import { HUD } from './hud.js';
import { AudioEngine } from './audio.js';
import { Input } from './input.js';
import { CameraRig } from './camera.js';
import { Store } from './storage.js';
import { Account } from './account.js';
import { TRACKS, REAL_TRACKS } from './trackdata.js';
import { DRIVERS, CUP_POINTS } from './config.js';
import { CLASSES, shift as shiftGear } from './physics.js';
import { Lab } from './lab.js';
import { setMaxAnisotropy } from './textures.js';
import { fmtTime, isTouchDevice } from './util.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const MODE_TITLES = { race: 'Гонка', cup: 'Чемпионат', tt: 'Заезд на время', watch: 'Нейропилот' };
const CUP_TRACKS = REAL_TRACKS.map((t) => t.id);
const IDLE = { steer: 0, throttle: 0, brake: 0, item: false, look: false, camera: false, reset: false, pause: false, shiftUp: false, shiftDown: false, skip: false };
const PREVIEW_BG = {
  italy: ['#26361c', '#32471f'], belgium: ['#1c3120', '#254227'], england: ['#1b3620', '#23472a'], sweden: ['#1a3324', '#21402d'],
  day: ['#1d3a22', '#26492b'], sunset: ['#3a2430', '#5a3440'], night: ['#11122a', '#1b1c3a'],
};
const lapsWord = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'круг' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'круга' : 'кругов');

class App {
  constructor() {
    this.store = new Store();
    this.settings = this.store.settings;
    if (!this.settings.quality) this.store.setSettings({ quality: isTouchDevice() ? 'medium' : 'high' });
    if (!TRACKS.some((t) => t.id === this.settings.trackId)) this.store.setSettings({ trackId: 'lonato' });
    if (!CLASSES[this.settings.cls]) this.store.setSettings({ cls: 'ok' });
    this.canvas = $('game');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    setMaxAnisotropy(Math.min(8, this.renderer.capabilities.getMaxAnisotropy()));
    this.camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.25, 2000);
    this.camRig = new CameraRig(this.camera);
    this.camRig.mode = this.settings.camera;
    this.applyCamCfg();
    this.hud = new HUD();
    this.audio = new AudioEngine();
    this.audio.setVolumes({ master: this.settings.master, music: this.settings.music, sfx: this.settings.sfx });
    this.input = new Input();
    this.input.bindTouch($('touch'));
    this.state = 'menu';
    this.paused = false;
    this.race = null;
    this.cup = null;
    this.lastInput = IDLE;
    this.labCfg = null;
    const def = TRACKS.find((t) => t.id === this.settings.trackId);
    this.menu = { mode: 'tt', trackId: def.id, driverId: this.settings.driverId, cls: this.settings.cls, category: def.category };
    try { const n = localStorage.getItem('apex.name'); if (n) $('playerName').value = n; } catch (e) { /* без имени */ }
    this.lab = new Lab(this);
    this.applyQuality();
    addEventListener('resize', () => this.resize());
    this.bindUI();
    this.lab.boot();
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state === 'race') this.pause(); });
    // звук можно запустить только после действия пользователя
    const unlock = () => { this.audio.init(); this.audio.setMusic(this.state === 'race' ? 'race' : 'menu'); };
    addEventListener('pointerdown', unlock);
    addEventListener('keydown', unlock);

    this.startAttract(this.menu.trackId);
    $('loading').hidden = true;
    $('topbar').hidden = false;
    this.showScreen('title');
    this.last = performance.now();
    requestAnimationFrame((t) => this.loop(t));
    this.account = new Account(this);
  }

  applyCamCfg() {
    const s = this.settings;
    Object.assign(this.camRig.cfg, { dist: s.camDist ?? 1, height: s.camHeight ?? 1, fov: s.camFov ?? 66, vib: s.camVib ?? 1 });
  }

  playerName() { return (($('playerName').value || '').trim().slice(0, 30)) || 'Игрок'; }

  updateWelcome() {
    if (!this.lab) return;
    const t = TRACKS.find((x) => x.id === this.menu.trackId), c = CLASSES[this.menu.cls];
    const rec = this.store.record(recordKey(t.id, c.id));
    const recTxt = rec.bestLap ? `Ваш рекорд ${t.short} · ${c.short}: ${fmtTime(rec.bestLap)}` : `Рекорда на ${t.short} в классе ${c.short} пока нет`;
    const labTxt = this.lab.admin ? `Лаборатория открыта · пилотов в гараже: ${this.lab.world.library.length}` : 'Лаборатория ИИ закрыта · вход по паролю';
    $('welcomeData').textContent = recTxt + ' · ' + labTxt;
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
    const w = Math.max(64, this.canvas.clientWidth || innerWidth), h = Math.max(64, this.canvas.clientHeight || innerHeight);
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
      this.bloom.strength = t.night ? 0.7 : 0.22;
      this.bloom.threshold = t.night ? 0.62 : 0.9;
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

  // ---------- заезды ----------
  setRace(race) {
    if (this.race) this.race.dispose();
    this.race = race;
    this.applyTheme(race);
    this.renderer.compile(race.scene, this.camera);
  }

  startAttract(trackId) {
    this.setRace(new Race(this, { mode: 'attract', trackId, cls: this.menu.cls, laps: 999, difficulty: 'hard' }));
    const def = TRACKS.find((t) => t.id === trackId);
    $('onair-what').textContent = def.name + ' · ' + CLASSES[this.menu.cls].name;
  }

  startRace(cfg) {
    if (cfg.mode !== 'watch') this.lastCfg = cfg;
    $('loading').hidden = false;
    $('loading-text').textContent = cfg.mode === 'watch' ? 'Нейропилот выезжает' : 'Прогреваем шины';
    this.hideScreens();
    $('onair').hidden = true;
    $('topbar').hidden = true;
    setTimeout(() => {
      this.setRace(new Race(this, cfg));
      this.hud.setupRace(this.race);
      this.hud.show(true);
      const r = this.race;
      this.hud.message(r.def.name, 'info', 2.4);
      if (cfg.mode === 'tt') this.hud.message(`${r.cls.name} · выезд из боксов`, 'small', 2.4);
      else if (cfg.mode === 'watch') this.hud.message(`${r.cls.name} · ${cfg.pilotName}`, 'small', 2.4);
      else this.hud.message((cfg.mode === 'cup' ? `Этап ${this.cup.stage + 1} из ${CUP_TRACKS.length} · ` : '') + `${r.cls.short} · ${cfg.laps} ${lapsWord(cfg.laps)}`, 'small', 2.4);
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

  startWatch(spec) {
    this.watchSpec = spec;
    this.cup = null;
    this.startRace({ mode: 'watch', trackId: spec.trackId, cls: spec.cls, car: spec.makeCar(), labCfg: spec.labCfg, pilotName: spec.pilotName, bestTime: spec.bestTime, laps: 1 });
  }

  restart() {
    this.hideScreens();
    if (this.race && this.race.mode === 'watch' && this.watchSpec) this.startWatch(this.watchSpec);
    else if (this.lastCfg && this.lastCfg.mode === 'cup' && this.cup) this.startCupStage();
    else if (this.lastCfg) this.startRace(this.lastCfg);
  }

  pause() {
    if (this.state !== 'race') return;
    this.state = 'paused';
    this.paused = true;
    this.audio.silenceEngines();
    this.hud.showTouch(false);
    $('pause-title').textContent = this.race.def.name;
    const endLbl = this.race.mode === 'tt' ? ['Завершить сессию', 'итоги кругов'] : this.race.mode === 'watch' ? ['Остановить просмотр', 'итог попытки'] : ['Сойти с дистанции', 'расчётные итоги'];
    $('pauseEnd').innerHTML = `<span class="t">${endLbl[0]}</span><span class="h">${endLbl[1]}</span>`;
    $('topbar').hidden = false;
    this.showScreen('pause');
  }
  resume() {
    this.hideScreens();
    this.state = 'race';
    this.paused = false;
    $('topbar').hidden = true;
    this.input.poll();
    this.hud.showTouch(true);
    this.canvas.focus();
  }
  endSession() {
    const race = this.race;
    if (!race || race.mode === 'attract') return;
    this.hideScreens();
    this.state = 'race';
    this.paused = false;
    if (race.mode === 'watch') { this.showWatchResults(race.watchCar, race); return; }
    const res = race.buildResults();
    res.ended = true;
    this.onRaceFinished(res, race);
  }
  quitToMenu() {
    this.cup = null;
    this.state = 'menu';
    this.paused = false;
    document.body.classList.remove('lab-mode');
    this.hud.show(false);
    this.input.captureKeys = false;
    this.audio.silenceEngines();
    this.audio.setMusic('menu');
    $('topbar').hidden = false;
    this.resize();
    this.startAttract(this.menu.trackId);
    this.showScreen('title');
  }

  // лаборатория занимает левую часть экрана под сцену и правую под панель
  enterLabView() {
    this.state = 'lab';
    this.paused = false;
    this.cup = null;
    this.hideScreens();
    $('onair').hidden = true;
    $('topbar').hidden = false;
    this.hud.show(false);
    this.input.captureKeys = false;
    this.audio.silenceEngines();
    document.body.classList.add('lab-mode');
    this.resize();
  }
  leaveLabView(toMenu = true) {
    document.body.classList.remove('lab-mode');
    this.resize();
    if (toMenu) this.quitToMenu();
  }

  shift(k, dir) {
    if (!this.race || !k.cls.gears || !this.race.playerOpts.manual) return;
    shiftGear(k, dir);
  }

  onPlayerBestLap(lapTime, race) {
    this.lab.onPlayerLap(recordKey(race.def.id, race.cls.id), lapTime, race.player.driver.name, race.cls.short, race.sid);
  }

  onWatchFinished(c, race) {
    if (race !== this.race) return;
    this.lab.onWatchDone(this.watchSpec, c);
    this.hud.message(c.done ? 'Финиш: ' + fmtTime(c.t) : 'Попытка прервана', c.done ? 'final' : 'bad', 2.4);
    setTimeout(() => { if (this.race === race && this.state === 'race') this.showWatchResults(c, race); }, 2600);
  }

  showWatchResults(c, race) {
    this.state = 'results';
    this.hud.show(false);
    this.audio.silenceEngines();
    this.input.captureKeys = false;
    $('topbar').hidden = false;
    const spec = this.watchSpec, L = race.geom.length;
    const rec = this.store.record(recordKey(race.def.id, race.cls.id));
    $('res-eyebrow').textContent = 'Нейропилот · ' + race.cls.name;
    $('res-title').textContent = spec.pilotName;
    $('res-podium').innerHTML = '';
    const prog = Math.min(100, (Math.max(c.max, 0) / L) * 100);
    const rows = [
      ['Результат', c.done ? fmtTime(c.t) : `не доехал: ${prog.toFixed(1)}% круга`],
      ['Трасса', `${race.def.name} · ${Math.round(L)} м`],
      ['Лучший круг ИИ в обучении', spec.bestTime != null ? fmtTime(spec.bestTime) : '—'],
      ['Рекорд игрока в этом классе', rec.bestLap ? fmtTime(rec.bestLap) : '—'],
      ['MMR пилота', String(c.mmr ?? '—')],
    ];
    if (c.done && rec.bestLap) rows.splice(1, 0, ['Разница с игроком', (c.t - rec.bestLap >= 0 ? '+' : '−') + Math.abs(c.t - rec.bestLap).toFixed(3) + ' с']);
    $('res-table').innerHTML = '<tbody>' + rows.map(([a, b]) => `<tr><td>${esc(a)}</td><td class="mono">${esc(b)}</td></tr>`).join('') + '</tbody>';
    $('res-note').textContent = c.done ? 'Заезд записан в таблицу ИИ этой трассы и класса.' : 'Касание покрышек или застой завершают попытку. Попробуйте дообучить пилота на этой трассе.';
    this.resultActions([
      ['Меню', false, () => this.quitToMenu()],
      [spec.back === 'garage' ? 'В гараж' : 'В лабораторию', false, () => { if (spec.back === 'garage') { this.quitToMenu(); this.lab.openGarage(spec.trackId, spec.cls); } else { if (this.lab.track !== spec.trackId || this.lab.cls !== spec.cls || !this.lab.lab) this.lab.load(spec.trackId, spec.cls); this.hideScreens(); this.lab.open(); } }],
      ['Смотреть ещё раз', true, () => this.startWatch(spec)],
    ]);
    this.showScreen('results');
  }

  onRaceFinished(res, race) {
    if (race !== this.race || this.state !== 'race') return;
    this.state = 'results';
    this.hud.show(false);
    this.audio.silenceEngines();
    this.input.captureKeys = false;
    $('topbar').hidden = false;
    const me = res.rows.find((r) => r.isPlayer);
    let note = '';
    if (res.mode === 'race' && me && !me.est) {
      if (this.store.saveRace(recordKey(res.trackId, res.cls), res.laps, me.time)) note = `Лучшая гонка на ${res.laps} ${lapsWord(res.laps)}: ${fmtTime(me.time)}.`;
    }
    if (res.mode === 'cup') {
      res.rows.forEach((r, i) => { const p = r.est && res.ended && r.isPlayer ? 0 : CUP_POINTS[i] || 0; this.cup.points[r.driver.id] = (this.cup.points[r.driver.id] || 0) + p; r.pts = p; });
      this.cup.lastResults = res;
    }
    this.renderResults(res, note);
    this.showScreen('results');
    this.updateWelcome();
  }

  // ---------- чемпионат: 4 реальных картодрома ----------
  startCup() {
    const field = DRIVERS.map((d) => d.id);
    this.cup = { stage: 0, points: {}, driverId: this.menu.driverId, cls: this.menu.cls, difficulty: this.settings.difficulty, field };
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
    } else grid = c.field.slice().sort((a, b) => c.points[a] - c.points[b]); // лидер стартует последним
    this.startRace({ mode: 'cup', trackId: CUP_TRACKS[c.stage], cls: c.cls, driverId: c.driverId, difficulty: c.difficulty, laps: 3, grid });
  }

  // ---------- экраны ----------
  showScreen(name) {
    this.hideScreens();
    const el = $('scr-' + name);
    el.hidden = false;
    this.curScreen = name;
    $('onair').hidden = !(this.state === 'menu' && name === 'title');
    if (name === 'setup') this.renderSetup();
    if (name === 'settings') this.renderSettings();
    if (name === 'title') this.updateWelcome();
    const first = el.querySelector('.menu-btn, .btn.primary, button');
    if (first && !isTouchDevice()) first.focus({ preventScroll: true });
  }
  hideScreens() { document.querySelectorAll('.screen').forEach((s) => (s.hidden = true)); this.curScreen = null; }

  bindUI() {
    document.body.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (b && this.audio.ctx) this.audio.play('ui');
      const go = e.target.closest('[data-go]');
      if (go) {
        const g = go.dataset.go;
        if (g === 'race' || g === 'cup' || g === 'tt') { this.menu.mode = g; this.showScreen('setup'); }
        else if (g === 'settings') { this.settingsBack = 'title'; this.showScreen('settings'); }
        else if (g === 'lab') this.lab.open();
        else if (g === 'garage') this.lab.openGarage(this.menu.trackId, this.menu.cls);
        else this.showScreen(g);
      }
      const act = e.target.closest('[data-act]');
      if (act) {
        const a = act.dataset.act;
        if (a === 'resume') this.resume();
        if (a === 'restart') this.restart();
        if (a === 'end') this.endSession();
        if (a === 'settings') { this.settingsBack = 'pause'; this.showScreen('settings'); }
        if (a === 'quit') this.quitToMenu();
      }
    });
    $('garageBtn').addEventListener('click', () => {
      const r = this.race;
      if (r && r.mode !== 'attract' && r.mode !== 'lab') this.lab.openGarage(r.def.id, r.cls.id);
      else if (r && r.mode === 'lab') this.lab.openGarage(this.lab.track, this.lab.cls);
      else this.lab.openGarage(this.menu.trackId, this.menu.cls);
    });
    $('soundBtn').addEventListener('click', () => {
      this.audio.init();
      const m = this.audio.toggleMute();
      $('soundBtn').textContent = m ? '♪ Без звука' : '♪ Звук';
    });
    $('playerName').addEventListener('change', () => { try { localStorage.setItem('apex.name', this.playerName()); } catch (e) { /* без сохранения */ } });
    $('btn-start').addEventListener('click', () => {
      const s = this.settings, m = this.menu;
      this.store.setSettings({ driverId: m.driverId, trackId: m.trackId, cls: m.cls, category: m.category });
      if (m.mode === 'cup') this.startCup();
      else this.startRace({ mode: m.mode, trackId: m.trackId, cls: m.cls, driverId: m.driverId, difficulty: s.difficulty, laps: s.laps, opponents: m.mode === 'tt' ? 0 : s.opponents });
    });
    $('btn-settings-back').addEventListener('click', () => {
      if (this.settingsBack === 'pause') this.showScreen('pause');
      else this.showScreen('title');
    });
    document.querySelectorAll('#scr-setup [data-cat]').forEach((b) => b.addEventListener('click', () => {
      this.menu.category = b.dataset.cat;
      const list = TRACKS.filter((t) => t.category === this.menu.category);
      if (!list.some((t) => t.id === this.menu.trackId)) { this.menu.trackId = list[0].id; if (this.state === 'menu') this.startAttract(this.menu.trackId); }
      this.renderSetup();
    }));
    document.querySelectorAll('#scr-setup .seg').forEach((seg) => {
      seg.addEventListener('click', (e) => {
        const b = e.target.closest('button'); if (!b) return;
        const key = seg.dataset.opt;
        const v = key === 'difficulty' ? b.dataset.v : Number(b.dataset.v);
        this.store.setSettings({ [key]: v });
        this.syncSeg(seg, String(v));
      });
    });
    document.querySelectorAll('#scr-settings .seg').forEach((seg) => {
      seg.addEventListener('click', (e) => {
        const b = e.target.closest('button'); if (!b) return;
        const key = seg.dataset.set;
        let v = b.dataset.v;
        if (key === 'camera' || key === 'assist') v = Number(v);
        if (key === 'fps') v = v === 'true';
        const qualityChanged = key === 'quality' && v !== this.settings.quality;
        this.store.setSettings({ [key]: v });
        if (key === 'quality') this.store.setSettings({ qualityAuto: false });
        this.syncSeg(seg, String(v));
        if (key === 'camera') this.camRig.mode = v;
        if (this.race && (key === 'assist' || key === 'gearbox')) {
          this.race.playerOpts.assist = this.settings.assist;
          this.race.playerOpts.manual = this.settings.gearbox === 'manual' && !!this.race.cls.gears;
        }
        this.applyQuality();
        if (qualityChanged && this.state === 'menu') this.startAttract(this.menu.trackId);
      });
    });
    document.querySelectorAll('#scr-settings input[data-cam]').forEach((r) => {
      r.addEventListener('input', () => { this.store.setSettings({ [r.dataset.cam]: Number(r.value) }); this.applyCamCfg(); });
    });
    document.querySelectorAll('#scr-settings input[data-vol]').forEach((r) => {
      r.addEventListener('input', () => {
        const key = r.dataset.vol;
        this.store.setSettings({ [key]: Number(r.value) });
        this.audio.setVolumes({ [key]: Number(r.value) });
      });
    });
    addEventListener('keydown', (e) => {
      if ($('accountDialog')?.open) return;
      if (e.code === 'Escape' && this.lab.handleEscape()) { e.preventDefault(); return; }
      if (this.lab.modalOpen()) return;
      const typing = e.target && ['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName);
      if (e.code === 'Escape' || (e.code === 'KeyP' && !typing)) {
        if (this.state === 'paused' && this.curScreen === 'pause') { e.preventDefault(); this.resume(); }
        else if (this.curScreen === 'settings' && e.code === 'Escape') $('btn-settings-back').click();
        else if (this.state === 'menu' && this.curScreen && this.curScreen !== 'title' && e.code === 'Escape') this.showScreen('title');
      }
      if (e.code === 'KeyM' && this.state !== 'race' && !typing) {
        const m = this.audio.toggleMute();
        $('soundBtn').textContent = m ? '♪ Без звука' : '♪ Звук';
      }
    });
  }

  syncSeg(seg, v) {
    seg.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === v)));
  }

  renderSetup() {
    const m = this.menu, s = this.settings;
    const cup = m.mode === 'cup';
    if (cup) m.category = 'real';
    $('setup-eyebrow').textContent = MODE_TITLES[m.mode];
    $('setup-title').textContent = cup ? `${CUP_TRACKS.length} этапа, одна таблица` : m.mode === 'tt' ? 'Выезд из боксов, круги по секторам' : 'Трасса, класс и пилот';
    document.querySelectorAll('#scr-setup [data-cat]').forEach((b) => { b.setAttribute('aria-pressed', String(b.dataset.cat === m.category)); b.disabled = cup && b.dataset.cat !== 'real'; });
    // трассы
    const list = $('track-list');
    list.innerHTML = '';
    for (const t of TRACKS.filter((x) => x.category === m.category)) {
      const rec = this.store.record(recordKey(t.id, m.cls));
      const g = getGeom(t.id);
      const b = document.createElement('button');
      b.className = 'track-card';
      b.setAttribute('aria-pressed', String(!cup && t.id === m.trackId));
      if (cup) b.disabled = true;
      b.innerHTML = `<canvas width="220" height="164" aria-hidden="true"></canvas><span><span class="nm">${esc(t.name)}</span><span class="pl">${esc(t.place)}</span>` +
        `<span class="meta"><span>${Math.round(g.length)} м</span><span>${t.width || Math.round(g.roadWidth)} м</span><span>${rec.bestLap ? fmtTime(rec.bestLap) : 'нет рекорда'}</span></span></span>`;
      drawTrackPreview(b.querySelector('canvas'), g, t.theme);
      b.addEventListener('click', () => {
        if (cup) return;
        m.trackId = t.id;
        list.querySelectorAll('.track-card').forEach((c) => c.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true');
        this.renderTrackDesc();
        if (this.state === 'menu' && this.race && this.race.def.id !== t.id) this.startAttract(t.id);
      });
      list.appendChild(b);
    }
    this.renderTrackDesc();
    const st = $('cup-stages');
    st.hidden = !cup;
    st.innerHTML = cup ? CUP_TRACKS.map((id, i) => `<span>Этап ${i + 1}: <b>${esc(TRACKS.find((t) => t.id === id).short)}</b></span>`).join('<span aria-hidden="true">→</span>') : '';
    // классы
    const cl = $('class-list');
    cl.innerHTML = '';
    for (const id of Object.keys(CLASSES)) {
      const c = CLASSES[id];
      const b = document.createElement('button');
      b.className = 'cls';
      b.setAttribute('aria-pressed', String(id === m.cls));
      b.title = c.note;
      b.innerHTML = `<b>${esc(c.name)}</b><span>~${c.vmaxKmh} км/ч · ${c.gears ? c.gears.length + ' передач' : 'прямой привод'}</span><small>${c.mass} кг с пилотом · до ${c.rpmMax.toLocaleString('ru-RU')} об/мин · тормоза ${c.frontBrakes ? 'на обе оси' : 'только сзади'}</small>`;
      b.addEventListener('click', () => {
        m.cls = id;
        cl.querySelectorAll('.cls').forEach((x) => x.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true');
        this.store.setSettings({ cls: id });
        this.renderSetup();
        if (this.state === 'menu') this.startAttract(m.trackId);
      });
      cl.appendChild(b);
    }
    // пилоты
    const dl = $('driver-list');
    dl.innerHTML = '';
    for (const d of DRIVERS) {
      const b = document.createElement('button');
      b.className = 'drv';
      b.setAttribute('aria-pressed', String(d.id === m.driverId));
      b.title = d.bio;
      b.innerHTML = `<span class="num" style="background:${d.color};color:${d.accent}">${d.num}</span><span class="nm">${esc(d.name)}</span>`;
      b.addEventListener('click', () => {
        m.driverId = d.id;
        dl.querySelectorAll('.drv').forEach((c) => c.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true');
      });
      dl.appendChild(b);
    }
    $('opt-diff').hidden = m.mode === 'tt';
    $('opt-laps').hidden = m.mode === 'cup';
    $('opt-opp').hidden = m.mode !== 'race';
    this.syncSeg(document.querySelector('[data-opt=difficulty]'), s.difficulty);
    this.syncSeg(document.querySelector('[data-opt=laps]'), String(s.laps));
    this.syncSeg(document.querySelector('[data-opt=opponents]'), String(s.opponents));
    $('btn-start').textContent = cup ? 'Начать чемпионат' : m.mode === 'tt' ? 'Выехать из боксов' : 'На старт';
  }

  renderTrackDesc() {
    const m = this.menu;
    if (m.mode === 'cup') { $('track-desc').textContent = 'Очки за места: 10, 8, 6, 5, 4, 3, 2, 1. Со второго этапа лидер чемпионата стартует последним. Класс выбирается один на весь чемпионат.'; return; }
    const t = TRACKS.find((x) => x.id === m.trackId);
    const rec = this.store.record(recordKey(t.id, m.cls));
    const secs = rec.bestSectors && rec.bestSectors.every((v) => v != null) ? ` Лучшие секторы: ${rec.bestSectors.map((v) => v.toFixed(3)).join(' · ')}.` : '';
    $('track-desc').textContent = `${t.place}. ${t.desc}${t.corners ? ' Поворотов: ' + t.corners + '.' : ''}${secs}`;
  }

  renderSettings() {
    const s = this.settings;
    document.querySelectorAll('#scr-settings .seg').forEach((seg) => this.syncSeg(seg, String(s[seg.dataset.set])));
    document.querySelectorAll('#scr-settings input[data-vol]').forEach((r) => (r.value = s[r.dataset.vol]));
    document.querySelectorAll('#scr-settings input[data-cam]').forEach((r) => (r.value = s[r.dataset.cam] ?? 1));
  }

  resultActions(list) {
    const acts = $('res-actions');
    acts.innerHTML = '';
    for (const [label, primary, fn] of list) {
      const b = document.createElement('button');
      b.className = 'btn' + (primary ? ' primary' : '');
      b.textContent = label;
      b.addEventListener('click', fn);
      acts.appendChild(b);
    }
    const pb = acts.querySelector('.btn.primary');
    if (pb && !isTouchDevice()) setTimeout(() => pb.focus({ preventScroll: true }), 50);
  }

  renderResults(res, note) {
    const cup = res.mode === 'cup', tt = res.mode === 'tt';
    const me = res.rows.find((r) => r.isPlayer);
    const cls = CLASSES[res.cls];
    $('res-eyebrow').textContent = (cup ? `Чемпионат · этап ${this.cup.stage + 1} из ${CUP_TRACKS.length}` : MODE_TITLES[res.mode]) + ' · ' + cls.name;
    $('res-podium').innerHTML = '';
    const rec = this.store.record(recordKey(res.trackId, res.cls));
    let html;
    if (tt) {
      $('res-title').textContent = res.trackName;
      const valid = me.laps.filter((t) => t != null);
      const best = valid.length ? Math.min(...valid) : null;
      const bestSec = [0, 1, 2].map((i) => Math.min(...me.secHist.map((s, j) => (me.laps[j] != null && s && s[i] != null ? s[i] : Infinity))));
      html = `<thead><tr><th>Круг</th><th class="mono">S1</th><th class="mono">S2</th><th class="mono">S3</th><th class="mono">Время</th><th class="mono">К лучшему</th></tr></thead><tbody>` +
        (me.laps.length ? me.laps.map((t, i) => {
          const sec = me.secHist[i] || [];
          const cells = [0, 1, 2].map((k) => `<td class="mono ${t != null && sec[k] === bestSec[k] ? 'purple' : ''}">${sec[k] != null ? sec[k].toFixed(3) : '—'}</td>`).join('');
          if (t == null) return `<tr><td class="p">${i + 1}</td>${cells}<td class="mono est">не засчитан</td><td class="mono">—</td></tr>`;
          return `<tr class="${t === best ? 'me' : ''}"><td class="p">${i + 1}</td>${cells}<td class="mono ${t === best ? 'purple' : ''}">${fmtTime(t)}</td><td class="mono">${t === best ? '—' : '+' + (t - best).toFixed(3)}</td></tr>`;
        }).join('') : '<tr><td colspan="6">Нет завершённых кругов: время идёт после первого пересечения линии старта.</td></tr>') +
        (best != null && bestSec.every(Number.isFinite) ? `<tr><td class="p">Σ</td><td class="mono" colspan="3">идеальный круг: ${fmtTime(bestSec[0] + bestSec[1] + bestSec[2])}</td><td class="mono">${fmtTime(best)}</td><td></td></tr>` : '') + '</tbody>';
      note = (note ? note + ' ' : '') + `Рекорд трассы в классе ${cls.short}: ${fmtTime(rec.bestLap)}. Рекордный круг сохраняется как призрак для следующего выезда.`;
    } else {
      $('res-title').textContent = me ? `${me.pos}-е место · ${res.trackName}` : res.trackName;
      const lead = res.rows[0];
      html = `<thead><tr><th>Поз</th><th>Пилот</th><th class="mono">Время</th><th class="mono">Отставание</th><th class="mono">Лучший круг</th>${cup ? '<th class="mono">Очки</th>' : ''}</tr></thead><tbody>` +
        res.rows.map((r) => {
          const gap = r === lead ? '—' : '+' + (r.time - lead.time).toFixed(3);
          const fl = isFinite(r.bestLap) && r.bestLap === res.fastestLap;
          return `<tr class="${r.isPlayer ? 'me' : ''}"><td class="p">${r.pos}</td><td><span class="pilot"><i style="background:${r.driver.color}"></i>№${r.driver.num} ${esc(r.name)}</span></td>` +
            `<td class="mono ${r.est ? 'est' : ''}">${fmtTime(r.time)}</td><td class="mono ${r.est ? 'est' : ''}">${gap}</td>` +
            `<td class="mono ${fl ? 'purple' : ''}">${isFinite(r.bestLap) ? fmtTime(r.bestLap) : '—'}</td>${cup ? `<td class="mono pts">+${r.pts}</td>` : ''}</tr>`;
        }).join('') + '</tbody>';
      if (res.rows.some((r) => r.est)) note = (note ? note + ' ' : '') + 'Курсивом — расчётное время пилотов, которые не доехали до финиша.';
      if (res.ended && cup) note += ' Сход с дистанции: очки за этап не начислены.';
    }
    $('res-table').innerHTML = html;
    $('res-note').textContent = note;
    if (cup) this.resultActions([['Выйти в меню', false, () => this.quitToMenu()], ['Таблица чемпионата', true, () => this.renderCupTable()]]);
    else {
      const acts = [['Меню', false, () => this.quitToMenu()], ['Рекорды', false, () => this.lab.openGarage(res.trackId, res.cls)]];
      if (!tt) {
        const pool = TRACKS.filter((t) => t.category === TRACKS.find((x) => x.id === res.trackId).category);
        const next = pool[(pool.findIndex((t) => t.id === res.trackId) + 1) % pool.length];
        acts.push(['Трасса: ' + next.short, false, () => { this.menu.trackId = next.id; this.startRace({ ...this.lastCfg, trackId: next.id }); }]);
      }
      acts.push([tt ? 'Новый выезд' : 'Ещё раз', true, () => this.startRace(this.lastCfg)]);
      this.resultActions(acts);
    }
  }

  renderCupTable() {
    const c = this.cup;
    const final = c.stage >= CUP_TRACKS.length - 1;
    const rows = c.field.map((id) => ({ d: DRIVERS.find((x) => x.id === id), pts: c.points[id] })).sort((a, b) => b.pts - a.pts);
    $('res-eyebrow').textContent = (final ? 'Чемпионат · итог' : `Чемпионат · после этапа ${c.stage + 1}`) + ' · ' + CLASSES[c.cls].name;
    const myPos = rows.findIndex((r) => r.d.id === c.driverId) + 1;
    $('res-title').textContent = final ? (myPos === 1 ? 'Чемпион!' : `Итог: ${myPos}-е место`) : 'Таблица чемпионата';
    if (final) {
      const p = rows.slice(0, 3);
      $('res-podium').innerHTML = `<div class="podium"><div class="p2"><div class="place">2</div><div class="who">${esc(p[1].d.name)}</div><div class="pts">${p[1].pts}</div></div><div class="p1"><div class="place">1</div><div class="who">${esc(p[0].d.name)}</div><div class="pts">${p[0].pts}</div></div><div class="p3"><div class="place">3</div><div class="who">${esc(p[2].d.name)}</div><div class="pts">${p[2].pts}</div></div></div>`;
      if (myPos === 1) { this.store.data.cupWins++; this.store.save(); }
    } else $('res-podium').innerHTML = '';
    $('res-table').innerHTML = `<thead><tr><th>Поз</th><th>Пилот</th><th class="mono">Очки</th><th class="mono">Отрыв</th></tr></thead><tbody>` +
      rows.map((r, i) => `<tr class="${r.d.id === c.driverId ? 'me' : ''}"><td class="p">${i + 1}</td><td><span class="pilot"><i style="background:${r.d.color}"></i>№${r.d.num} ${esc(r.d.name)}</span></td><td class="mono pts">${r.pts}</td><td class="mono">${i === 0 ? '—' : '−' + (rows[0].pts - r.pts)}</td></tr>`).join('') + '</tbody>';
    $('res-note').textContent = final ? `Побед в чемпионатах: ${this.store.data.cupWins}.` : `Следующий этап: ${TRACKS.find((t) => t.id === CUP_TRACKS[c.stage + 1]).name}. Лидер стартует последним.`;
    const acts = [['Выйти в меню', false, () => this.quitToMenu()]];
    if (final) acts.push(['Новый чемпионат', true, () => this.startCup()]);
    else acts.push(['Следующий этап', true, () => { c.stage++; this.startCupStage(); }]);
    this.resultActions(acts);
  }

  // навигация по меню с геймпада
  menuNav() {
    if ($('accountDialog')?.open) return;
    if (!this.curScreen) return;
    const nav = this.input.pollMenu();
    if (!(nav.up || nav.down || nav.left || nav.right || nav.ok || nav.back)) return;
    const scr = $('scr-' + this.curScreen);
    const items = Array.from(scr.querySelectorAll('button:not([disabled]), input')).filter((e) => e.offsetParent !== null);
    if (!items.length) return;
    let i = items.indexOf(document.activeElement);
    if (nav.down || nav.right) i = (i + 1) % items.length;
    if (nav.up || nav.left) i = (i - 1 + items.length) % items.length;
    if (nav.up || nav.down || nav.left || nav.right) { items[Math.max(0, i)].focus(); if (this.audio.ctx) this.audio.play('uiMove'); }
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
    if (this.state === 'lab') {
      this.labVis = (this.labVis || 0) + raw;
      if (this.lab.frame(dt, Math.min(raw, 0.5))) {
        this.race.update(Math.min(0.1, this.labVis), IDLE);
        this.labVis = 0;
        this.render();
      }
      return;
    }
    this.autoQuality(Math.min(raw, 0.5));
    if (this.state === 'race') {
      const inp = this.input.poll(this.hud.touchEnabled && !!this.race.player);
      this.lastInput = inp;
      if (inp.mute) { const m = this.audio.toggleMute(); $('soundBtn').textContent = m ? '♪ Без звука' : '♪ Звук'; }
      if (inp.pause) { this.pause(); this.render(); return; }
      this.race.update(dt, inp);
    } else if (this.state !== 'paused') {
      this.lastInput = IDLE;
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
  const bg = PREVIEW_BG[theme] || PREVIEW_BG.day;
  const grd = ctx.createLinearGradient(0, 0, 0, H);
  grd.addColorStop(0, bg[0]); grd.addColorStop(1, bg[1]);
  ctx.fillStyle = grd; ctx.fillRect(0, 0, W, H);
  const b = g.bounds(10);
  const sc = Math.min((W - 20) / (b.maxX - b.minX), (H - 20) / (b.maxZ - b.minZ));
  const ox = (W - (b.maxX - b.minX) * sc) / 2, oz = (H - (b.maxZ - b.minZ) * sc) / 2;
  const tx = (x) => ox + (x - b.minX) * sc, tz = (z) => oz + (z - b.minZ) * sc;
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  if (g.pit) {
    ctx.beginPath();
    for (let i = 0; i <= g.pit.M; i += 3) ctx.lineTo(tx(g.pit.x[i]), tz(g.pit.z[i]));
    ctx.strokeStyle = 'rgba(200,205,215,0.55)'; ctx.lineWidth = 2; ctx.stroke();
  }
  ctx.beginPath();
  for (let i = 0; i <= g.N; i += 3) { const k = i % g.N; ctx.lineTo(tx(g.px[k]), tz(g.pz[k])); }
  ctx.closePath();
  ctx.strokeStyle = 'rgba(0,0,0,0.4)'; ctx.lineWidth = 9; ctx.stroke();
  ctx.strokeStyle = '#f2f3f5'; ctx.lineWidth = 4.5; ctx.stroke();
  const p = g.pointAt(0, 0);
  ctx.fillStyle = '#ffd000';
  ctx.beginPath(); ctx.arc(tx(p.x), tz(p.z), 4.5, 0, 7); ctx.fill();
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
