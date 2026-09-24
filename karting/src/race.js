// Заезд: сцена, участники, старт по огням или из боксов, тайминг кругов и
// секторов, позиции, столкновения, призрак, результаты; режимы «лаборатория»
// (популяция нейросетей) и «просмотр» (заезд обученного пилота).
import * as THREE from 'three';
import { TRACKS } from './trackdata.js';
import { TrackGeom } from './trackgeom.js';
import { DRIVERS, DIFFICULTY, THEMES } from './config.js';
import { CLASSES } from './physics.js';
import { buildTrackMeshes, gridSlot } from './trackmesh.js';
import { buildEnvironment } from './scenery.js';
import { Kart, buildKartMesh } from './kart.js';
import { RaceAI } from './ai.js';
import { ItemSystem } from './items.js';
import { Effects } from './effects.js';
import { blobShadowTexture } from './textures.js';
import { clamp, disposeObject, rng, lerp } from './util.js';
import * as NN from './neuro.js';

const geomCache = {};
export function getGeom(id) {
  if (!geomCache[id]) geomCache[id] = new TrackGeom(TRACKS.find((t) => t.id === id));
  return geomCache[id];
}
export const recordKey = (trackId, cls) => trackId + ':' + cls;

const LIGHT_STEP = 0.8;
const GHOST_HZ = 20;
const AI_PILOT = { id: 'ai', name: 'Нейропилот', num: 0, color: '#3ddc84', accent: '#0f1115', suit: '#123824' };

export class Race {
  constructor(app, cfg) {
    this.app = app;
    this.cfg = cfg;
    this.mode = cfg.mode; // tt | race | cup | attract | lab | watch
    this.def = TRACKS.find((t) => t.id === cfg.trackId);
    this.geom = getGeom(cfg.trackId);
    this.theme = THEMES[this.def.theme];
    this.quality = app.settings.quality;
    this.cls = CLASSES[cfg.cls || 'ok'];
    this.laps = this.mode === 'attract' ? 999 : cfg.laps || 3;
    this.diff = DIFFICULTY[cfg.difficulty || 'normal'];
    this.playerOpts = { assist: app.settings.assist ?? 1, manual: app.settings.gearbox === 'manual' && !!this.cls.gears, stab: true };
    this.aiOpts = { assist: 1, manual: false };

    this.scene = new THREE.Scene();
    this.env = buildEnvironment(this.scene, this.geom, this.theme, this.quality);
    this.track = buildTrackMeshes(this.geom, this.theme, this.quality);
    this.scene.add(this.track.group);
    this.fx = new Effects(this.scene, this.quality);
    this.blobMat = new THREE.MeshBasicMaterial({ map: blobShadowTexture(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
    this.dustColor = this.theme.ground === 'sand' ? [0.86, 0.74, 0.55] : this.theme.ground === 'city' ? [0.5, 0.5, 0.56] : [0.42, 0.5, 0.26];

    this.time = 0; this.clock = 0; this.canDrive = false;
    this.state = 'intro'; this.stateT = 0;
    this.finishCount = 0; this.fastestLap = Infinity;
    this.sessionBestSec = [Infinity, Infinity, Infinity];
    this.itemsOn = !!this.def.fun && ['race', 'cup', 'attract'].includes(this.mode);
    this.items = new ItemSystem(this, this.itemsOn);
    this.karts = []; this.ais = []; this.player = null;
    this.hud = app.hud;
    this.camRig = app.camRig;
    this.camRig.tv.target = null;
    this.rec = app.store.record(recordKey(this.def.id, this.cls.id));
    this.ghostFrames = []; this.trace = []; this.ghostMesh = null;
    this.lightsOn = 0; this.holdT = 1.0 + Math.random() * 0.9; this.startPressT = null;
    this.results = null;
    this.sid = Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);

    if (this.mode === 'lab') this.setupLab();
    else if (this.mode === 'watch') this.setupWatch(cfg);
    else this.buildField();
    this.order = this.karts.slice();
    this.focus = this.player || this.watchKart || this.karts[0] || null;
    if (this.focus) this.camRig.snapChase(this.focus);

    if (this.player && this.rec.ghost && (this.mode === 'tt')) {
      this.ghostMesh = buildKartMesh(this.player.driver, { ghost: true });
      this.ghostMesh.visible = false;
      this.scene.add(this.ghostMesh);
    }
    if (this.mode === 'attract' || this.mode === 'watch') { this.state = 'racing'; this.canDrive = true; }
    if (this.mode === 'tt') { this.state = 'racing'; this.canDrive = true; this.hud && this.hud.startLights(-1); }
    if (this.mode === 'lab') { this.state = 'lab'; this.canDrive = true; }
    if (this.mode === 'tt' && this.itemsOn) this.items.give(this.player, 'nitro3');
  }

  physOpts(k) { return k.isPlayer ? this.playerOpts : this.aiOpts; }

  buildField() {
    const R = rng((Date.now() & 0xffff) + 17);
    const cfg = this.cfg;
    let field = [];
    if (this.mode === 'attract') field = DRIVERS.slice().sort(() => R() - 0.5).map((d) => ({ d, ai: true }));
    else if (this.mode === 'tt') field = [{ d: DRIVERS.find((x) => x.id === cfg.driverId) || DRIVERS[0], ai: false }];
    else {
      const me = DRIVERS.find((x) => x.id === cfg.driverId) || DRIVERS[0];
      if (cfg.grid) field = cfg.grid.map((id) => ({ d: DRIVERS.find((x) => x.id === id), ai: id !== me.id }));
      else {
        field = DRIVERS.filter((x) => x.id !== me.id).sort(() => R() - 0.5).slice(0, cfg.opponents).map((d) => ({ d, ai: true }));
        field.splice(Math.min(5, field.length), 0, { d: me, ai: false });
      }
    }
    field.forEach((f, i) => {
      const k = new Kart(this, f.d, { isPlayer: !f.ai, index: i, cls: this.cls });
      if (this.mode === 'tt') { k.placePit(Math.min(0.9, (this.geom.pit ? (this.geom.pit.before + 14) / this.geom.pit.span : 0.5))); k.outLap = true; }
      else { const slot = gridSlot(this.geom, i); k.place(slot.s, slot.d); }
      this.scene.add(k.mesh);
      this.karts.push(k);
      const diff = this.mode === 'attract' ? DIFFICULTY.normal : this.diff;
      const ai = new RaceAI(this, k, diff, 1000 + i * 77 + Math.floor(R() * 1000));
      k.ai = ai;
      if (f.ai) this.ais.push(ai); else this.player = k;
    });
    if (this.mode === 'attract') {
      this.karts.forEach((k, i) => {
        const s = this.geom.wrapS(i * 19 + 30);
        k.place(s, 0);
        k.progress = s;
        k.u = 18;
      });
    }
  }

  // ---------- лаборатория: популяция нейросетей ----------
  setupLab() {
    const base = new THREE.BoxGeometry(1.2, 0.35, 1.8).translate(0, 0.3, 0);
    const head = new THREE.SphereGeometry(0.28, 8, 6).translate(0, 0.85, -0.15);
    const g = mergeSimple([base, head]);
    this.labMesh = new THREE.InstancedMesh(g, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 }), 160);
    this.labMesh.frustumCulled = false;
    this.labMesh.count = 0;
    this.scene.add(this.labMesh);
    this.leaderMesh = buildKartMesh(AI_PILOT, { shadows: this.quality !== 'low' });
    this.labScale = 2.4;
    this.scene.add(this.leaderMesh);
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(1600 * 3), 3));
    lg.setDrawRange(0, 0);
    this.champLine = new THREE.Line(lg, new THREE.LineBasicMaterial({ color: 0xffc83d, transparent: true, opacity: 0.9, depthTest: false }));
    this.champLine.frustumCulled = false; this.champLine.renderOrder = 5;
    this.scene.add(this.champLine);
    this.champKey = '';
    this.dummy = new THREE.Object3D();
    this.colAlive = new THREE.Color('#b9a7ff'); this.colDead = new THREE.Color('#59616e');
    this.labRef = null;
  }

  syncLab(lab, cfg) {
    this.labRef = lab;
    const d = this.dummy;
    let n = 0;
    let lead = null;
    const sc = cfg.follow ? 1 : this.labScale;
    for (const c of lab.pop) { if (!lead || c.max > lead.max) lead = c; }
    for (const c of lab.pop) {
      if (c === lead) continue;
      if (!c.alive && !cfg.dead) continue;
      d.position.set(c.x, c.y, c.z); d.rotation.set(0, c.h, 0); d.scale.setScalar(sc); d.updateMatrix();
      this.labMesh.setMatrixAt(n, d.matrix);
      this.labMesh.setColorAt(n, c.alive ? this.colAlive : this.colDead);
      n++;
      if (n >= 160) break;
    }
    this.labMesh.count = n;
    this.labMesh.instanceMatrix.needsUpdate = true;
    if (this.labMesh.instanceColor) this.labMesh.instanceColor.needsUpdate = true;
    if (lead) {
      this.leaderMesh.visible = true;
      this.leaderMesh.position.set(lead.x, lead.y, lead.z);
      this.leaderMesh.rotation.set(0, lead.h, 0);
      this.leaderMesh.scale.setScalar(this.app.labCfg && this.app.labCfg.follow ? 1 : this.labScale * 1.15);
      for (const w of this.leaderMesh.userData.wheels) if (w.front) w.pivot.rotation.y = lead.delta;
      this.labLeader = lead;
    }
    const ch = lab.champion;
    const key = ch && cfg.ghost ? ch.id + ':' + ch.score : '';
    if (key !== this.champKey) {
      this.champKey = key;
      const arr = this.champLine.geometry.attributes.position.array;
      const tr = ch && cfg.ghost ? ch.trail || [] : [];
      const m = Math.min(1600, tr.length);
      for (let i = 0; i < m; i++) { arr[i * 3] = tr[i][0]; arr[i * 3 + 1] = (tr[i][2] ?? 0) + 0.35; arr[i * 3 + 2] = tr[i][1]; }
      this.champLine.geometry.setDrawRange(0, m);
      this.champLine.geometry.attributes.position.needsUpdate = true;
    }
  }

  // ---------- просмотр заезда нейропилота ----------
  setupWatch(cfg) {
    this.watchCar = cfg.car;
    this.watchCfg = cfg.labCfg;
    this.watchKart = new Kart(this, { ...AI_PILOT, name: cfg.pilotName || 'Нейропилот' }, { isPlayer: false, cls: this.cls });
    this.watchKart.isWatch = true;
    this.watchBest = cfg.bestTime ?? null;
    this.scene.add(this.watchKart.mesh);
    this.karts.push(this.watchKart);
    this.watchAcc = 0;
    this.copyWatch();
  }

  copyWatch() {
    const c = this.watchCar, k = this.watchKart;
    for (const f of ['x', 'y', 'z', 'h', 'u', 'v', 'w', 'delta', 'lift', 'sliding', 'surface', 'onKerb', 'lock', 'spin', 'ax', 'slope', 'trackHead', 'rpm', 'gear', 's', 'd', 'progress', 'throttle', 'brake', 'slipR', 'slipF']) k[f] = c[f];
  }

  // ---------- события ----------
  sound(name, kart, level = 0, pos = null) {
    if (this.mode === 'attract' || this.mode === 'lab' || !this.app.audio.ctx) return;
    let vol = 1;
    if (kart && kart !== this.player) {
      const x = pos ? pos.x : kart.x, z = pos ? pos.z : kart.z;
      const c = this.app.camera.position;
      vol = clamp(1 - Math.hypot(x - c.x, z - c.z) / 70, 0, 1) * 0.8;
      if (name === 'pickup' || name === 'itemReady') vol *= 0.3;
    }
    this.app.audio.play(name, level, vol);
  }
  onPlayerBoost(pow) { this.camRig.shake(0.08 * pow); this.hud.boostFlash(); }
  onKartHit(k, kind, by) {
    if (k === this.player) { this.camRig.shake(kind === 'rocket' ? 0.6 : 0.25); this.sound('hit', k); this.hud.message(kind === 'rocket' ? 'Прямое попадание' : 'Занесло на масле', 'bad', 1.4); }
    else if (by && by === this.player) this.hud.message('Попадание: ' + k.name, 'good', 1.4);
  }
  onWallHit(k, strength, x, z) {
    const n = Math.min(18, strength * 2);
    for (let i = 0; i < n; i++) this.fx.dust(x, k.y + 0.4, z, (Math.random() - 0.5) * 5, 1 + Math.random() * 2, (Math.random() - 0.5) * 5, 0.12, 0.12, 0.12, 0.5);
    this.sound('wall', k, strength);
    if (k === this.focus) this.camRig.shake(Math.min(0.5, strength * 0.04));
  }
  nearCamera(k) {
    const c = this.app.camera.position;
    return (k.x - c.x) ** 2 + (k.z - c.z) ** 2 < 90 * 90;
  }

  // ---------- главный цикл ----------
  update(dt, inp) {
    this.clock += dt;
    this.stateT += dt;
    if (this.mode === 'lab') { this.commonVisuals(dt); return; }
    if (this.mode === 'watch') { this.updateWatch(dt); return; }
    const P = this.player;

    if (this.state === 'intro') {
      const dur = 3.2;
      this.camRig.intro(Math.min(1, this.stateT / dur), this.focus);
      if (this.stateT >= dur || inp.item || inp.skip) { this.setState('countdown'); this.camRig.snapChase(this.focus); this.hud.startLights(0); }
    } else if (this.state === 'countdown') {
      const n = Math.min(5, Math.floor(this.stateT / LIGHT_STEP) + 1);
      if (n !== this.lightsOn && this.stateT < LIGHT_STEP * 5) { this.lightsOn = n; this.track.setLights(n); this.hud.startLights(n); this.app.audio.play('light'); }
      if (P && !this.app.hud.touchEnabled) {
        if (inp.throttle > 0.5) { if (this.startPressT === null) this.startPressT = this.stateT; } else this.startPressT = null;
      }
      if (this.stateT >= LIGHT_STEP * 5 + this.holdT) this.go();
    } else if (this.state === 'finished') {
      if (this.stateT > 3 && !this.results) { this.results = this.buildResults(); this.app.onRaceFinished(this.results, this); }
    }

    const n = Math.max(1, Math.ceil(dt / (1 / 120)));
    const h = dt / n;
    for (const ai of this.ais) ai.update(dt);
    const pInp = P && !P.finished ? inp : P ? P.ai.update(dt) : null;
    // до старта карт стоит (у картов нет стояночного тормоза — держим на месте)
    for (let s = 0; s < n; s++) {
      for (const k of this.karts) {
        const ki = k === P ? pInp : k.ai.inp;
        if (!this.canDrive) { k.rpm += ((ki && ki.throttle > 0.3 ? 0.55 : 0.18) * k.cls.rpmMax - k.rpm) * 0.05; continue; }
        k.step(h, ki);
      }
      this.collide();
      if (this.canDrive) this.time += h;
      for (const k of this.karts) this.timing(k);
    }
    if (this.canDrive) {
      for (const k of this.karts) {
        const ki = k === P ? pInp : k.ai.inp;
        if (this.itemsOn && ki && ki.item) this.items.use(k);
        this.items.checkPads(k, this.track.pads, dt);
      }
      this.items.update(dt, this.clock);
    }
    if (P && inp.reset && this.canDrive && !P.finished) {
      P.respawn();
      if (!P.outLap) { P.lapInvalid = true; this.hud.message('Круг не засчитан', 'bad', 1.5); }
    }
    if (P && inp.shiftUp) this.app.shift(P, 1);
    if (P && inp.shiftDown) this.app.shift(P, -1);

    this.commonVisuals(dt, inp);
    this.updateAudio(dt, pInp);
    if (this.mode !== 'attract') this.hud.update(this, dt);
  }

  commonVisuals(dt, inp = {}) {
    for (const k of this.karts) k.syncMesh(dt, this.clock);
    this.fx.update(dt);
    this.track.update(dt);
    for (const u of this.env.updaters) u(dt, this.clock);
    if (this.mode !== 'lab') this.rank();
    this.updateGhost(dt);
    // камера
    if (this.mode === 'lab') {
      if (this.labRef && this.app.labCfg && this.app.labCfg.follow && this.labLeader) this.camRig.top(dt, this.labLeader, 1.4);
      else this.camRig.overview(dt, this.geom.bounds(8));
    } else if (this.mode === 'attract') this.camRig.broadcast(dt, this.karts, this.geom);
    else if (this.state === 'finished') this.camRig.orbit(dt, this.focus);
    else if (this.state !== 'intro' && this.focus) {
      if (inp.camera) this.camRig.mode = (this.camRig.mode + 1) % 3;
      if (this.focus.onKerb && this.focus.u > 8) this.camRig.shake(this.camRig.mode === 0 ? 0.04 + this.focus.u * 0.002 : 0.012 + this.focus.u * 0.0007);
      this.camRig.follow(dt, this.focus, inp.look);
    }
    // соперник между камерой и игроком не должен закрывать обзор
    const cp = this.app.camera.position;
    const camK = this.mode === 'attract' ? this.camRig.tv.target || this.focus : this.focus;
    for (const k of this.karts) {
      if (k === camK) { k.mesh.visible = true; continue; }
      k.mesh.visible = (k.x - cp.x) ** 2 + (k.z - cp.z) ** 2 + (k.y + 0.6 - cp.y) ** 2 > 2.6 * 2.6;
    }
    const followK = this.mode === 'lab' ? this.labLeader || { mesh: { position: new THREE.Vector3(this.env.center.x, 0, this.env.center.z) } } : this.mode === 'attract' ? this.camRig.tv.target || this.focus : this.focus;
    if (followK && followK.mesh) this.env.follow(followK.mesh.position);
    this.fx.setScale(this.app.renderer.domElement.height / (2 * Math.tan((this.app.camera.fov * Math.PI) / 360)));
  }

  updateWatch(dt) {
    const c = this.watchCar;
    if (c.alive) {
      this.watchAcc = Math.min(this.watchAcc + dt, 0.25);
      while (this.watchAcc >= NN.DT && c.alive) {
        NN.tickCar(c, this.geom, this.watchCfg, false, this.watchCfg.memory);
        if (c.t >= this.watchCfg.timeout || c.stale > 8) c.alive = false;
        this.watchAcc -= NN.DT;
      }
      this.time = c.t;
      this.copyWatch();
      if (!c.alive && !this.watchDone) { this.watchDone = true; this.app.onWatchFinished(c, this); }
    }
    this.commonVisuals(dt, this.app.lastInput || {});
    this.updateAudio(dt, { throttle: c.throttle });
    this.hud.update(this, dt);
  }

  setState(s) { this.state = s; this.stateT = 0; }

  go() {
    this.setState('racing');
    this.canDrive = true;
    this.lightsOn = 0;
    this.track.setLights(0);
    this.hud.startLights(-1);
    this.app.audio.play('go');
    this.hud.message('Старт!', 'go', 1.0);
    for (const k of this.karts) { k.lapStart = 0; k.secStart = 0; }
    const P = this.player;
    if (P) {
      const t = this.startPressT;
      if (t !== null && t >= LIGHT_STEP * 4) { P.u = 2.5; this.hud.message('Отличная реакция', 'good', 1.4); }
      else if (t !== null && t < LIGHT_STEP * 2) { P.stallT = 0.8; this.hud.message('Фальстарт: заглох', 'bad', 1.2); }
    }
  }

  collide() {
    const K = this.karts, R2 = 1.75;
    for (let i = 0; i < K.length; i++) {
      const a = K[i];
      for (let j = i + 1; j < K.length; j++) {
        const b = K[j];
        const dx = b.x - a.x, dz = b.z - a.z, d2 = dx * dx + dz * dz;
        if (d2 >= R2 * R2 || Math.abs(a.y - b.y) > 1.5) continue;
        const d = Math.sqrt(d2) || 0.001, nx = dx / d, nz = dz / d, ov = R2 - d;
        const ma = a.cls.mass * (a.shieldT > 0 ? 3 : 1), mb = b.cls.mass * (b.shieldT > 0 ? 3 : 1), tot = ma + mb;
        a.x -= nx * ov * (mb / tot); a.z -= nz * ov * (mb / tot);
        b.x += nx * ov * (ma / tot); b.z += nz * ov * (ma / tot);
        const rel = (b.vx - a.vx) * nx + (b.vz - a.vz) * nz;
        if (rel < 0) {
          const jimp = (-(1 + 0.35) * rel) / (1 / ma + 1 / mb);
          for (const [k, sg, m] of [[a, -1, ma], [b, 1, mb]]) {
            const vx = k.vx + (sg * jimp * nx) / m, vz = k.vz + (sg * jimp * nz) / m;
            const sh = Math.sin(k.h), ch = Math.cos(k.h);
            k.u = vx * sh + vz * ch; k.v = vx * ch - vz * sh; k.vx = vx; k.vz = vz;
          }
          if (-rel > 2) {
            const cx = (a.x + b.x) / 2, cz = (a.z + b.z) / 2;
            this.sound('bump', a === this.player || b === this.player ? this.player : a, 0, { x: cx, z: cz });
            if (a === this.player || b === this.player) this.camRig.shake(Math.min(0.35, -rel * 0.03));
          }
        }
      }
    }
  }

  // тайминг: секторы, круги, финиш
  timing(k) {
    if (k.finished || !this.canDrive) return;
    const g = this.geom, L = g.length;
    const lapDist = k.progress - k.lapsDone * L;
    if (!k.outLap) {
      const sec = lapDist >= g.sectorS[2] ? 2 : lapDist >= g.sectorS[1] ? 1 : 0;
      if (sec > k.sector) {
        const t = this.time - k.secStart;
        k.curSectors[k.sector] = t;
        this.onSector(k, k.sector, t);
        k.sector = sec; k.secStart = this.time;
      }
      if (k === this.player) {
        const bin = Math.floor(lapDist / 10);
        if (bin >= 0 && this.trace[bin] === undefined) this.trace[bin] = this.time - k.lapStart;
      }
    }
    const laps = Math.floor(k.progress / L);
    if (laps <= k.lapsDone) return;
    k.lapsDone = laps;
    if (k.outLap) {
      k.outLap = false; k.lapStart = this.time; k.secStart = this.time; k.sector = 0; k.curSectors = [null, null, null]; k.lapInvalid = false;
      if (k === this.player) { this.ghostFrames = []; this.trace = []; this.ghostT = 0; this.hud.message('Круг 1 · время пошло', 'info', 1.4); }
      return;
    }
    const lapTime = this.time - k.lapStart;
    const s3 = this.time - k.secStart;
    k.curSectors[2] = s3;
    this.onSector(k, 2, s3);
    k.lastSectors = k.curSectors.slice();
    (k.secHist || (k.secHist = [])).push(k.lastSectors);
    k.lapStart = this.time; k.secStart = this.time; k.sector = 0; k.curSectors = [null, null, null];
    const valid = !k.lapInvalid;
    k.lapInvalid = false;
    k.lapTimes.push(valid ? lapTime : null);
    const pb = valid && lapTime < k.bestLap;
    if (pb) k.bestLap = lapTime;
    const overall = valid && lapTime < this.fastestLap;
    if (overall) this.fastestLap = lapTime;
    if (k === this.player) this.onPlayerLap(lapTime, pb, overall, valid);
    if (k.lapTimes.length >= this.laps && this.mode !== 'attract') this.finish(k);
  }

  onSector(k, i, t) {
    const best = this.sessionBestSec[i];
    if (t < best) this.sessionBestSec[i] = t;
    if (k !== this.player || k.lapInvalid) return;
    const rec = this.rec.bestSectors ? this.rec.bestSectors[i] : null;
    k.pbSec = k.pbSec || [Infinity, Infinity, Infinity];
    let color = 'yellow';
    const allTime = Math.min(rec ?? Infinity, best);
    if (t <= allTime) color = 'purple';
    else if (t <= k.pbSec[i]) color = 'green';
    if (t < k.pbSec[i]) k.pbSec[i] = t;
    if (rec == null || t < rec) this.app.store.saveSector(recordKey(this.def.id, this.cls.id), i, t);
    this.hud.sectorDone(i, t, color);
  }

  onPlayerLap(lapTime, pb, overall, valid) {
    const P = this.player;
    const record = valid && (this.rec.bestLap == null || lapTime < this.rec.bestLap);
    const kind = !valid ? 'invalid' : record ? 'record' : overall ? 'fastest' : pb ? 'pb' : 'normal';
    this.hud.lapFlash(lapTime, kind, this.rec.bestLap);
    if (record) {
      this.app.store.saveLap(recordKey(this.def.id, this.cls.id), lapTime, this.ghostFrames, this.trace, P.driver.id);
      this.rec = this.app.store.record(recordKey(this.def.id, this.cls.id));
      this.sound('best', P);
    } else this.sound('lap', P);
    if (valid && pb) this.app.onPlayerBestLap(lapTime, this);
    this.ghostFrames = []; this.trace = []; this.ghostT = 0;
    const done = P.lapTimes.length;
    if (done === this.laps - 1 && this.laps > 1) { this.hud.message('Последний круг', 'final', 2); this.sound('finalLap', P); }
    else if (done < this.laps) this.hud.message('Круг ' + (done + 1), 'info', 1.2);
  }

  finish(k) {
    k.finished = true;
    k.finishTime = this.time;
    k.finishPos = this.finishCount++;
    if (k === this.player) {
      this.setState('finished');
      const pos = k.finishPos + 1;
      this.hud.message(this.mode === 'tt' ? 'Сессия завершена' : `Финиш: ${pos}-е место`, pos === 1 ? 'final' : 'info', 3);
      this.sound('finish', k);
      this.hud.showTouch(false);
    }
  }

  rank() {
    const s = this.karts.slice().sort((a, b) => {
      if (a.finished && b.finished) return a.finishTime - b.finishTime;
      if (a.finished) return -1;
      if (b.finished) return 1;
      return b.progress - a.progress;
    });
    s.forEach((k, i) => (k.rank = i));
    this.order = s;
    const P = this.player;
    for (const ai of this.ais) {
      let scale = ai.diff.speed;
      if (P && !P.finished && this.mode !== 'attract') scale *= 1 + clamp(-(ai.kart.progress - P.progress) / 250, -1, 1) * ai.diff.rubber;
      ai.kart.speedScale = scale;
    }
  }

  updateGhost(dt) {
    const P = this.player;
    if (!P || this.state !== 'racing' || !this.canDrive || P.outLap) { if (this.ghostMesh) this.ghostMesh.visible = false; return; }
    this.recAcc = (this.recAcc || 0) + dt;
    while (this.recAcc >= 1 / GHOST_HZ) {
      this.recAcc -= 1 / GHOST_HZ;
      this.ghostFrames.push(Math.round(P.x * 100) / 100, Math.round(P.y * 100) / 100, Math.round(P.z * 100) / 100, Math.round(P.h * 1000) / 1000);
    }
    const gm = this.ghostMesh, g = this.rec.ghost;
    if (!gm || !g) return;
    this.ghostT = (this.ghostT || 0) + dt;
    const f = this.ghostT * GHOST_HZ, i = Math.floor(f), cnt = g.length / 4;
    if (i >= cnt - 1) { gm.visible = false; return; }
    const t = f - i, a = i * 4, b = a + 4;
    gm.visible = true;
    gm.position.set(lerp(g[a], g[b], t), lerp(g[a + 1], g[b + 1], t), lerp(g[a + 2], g[b + 2], t));
    let dh = g[b + 3] - g[a + 3];
    if (dh > Math.PI) dh -= Math.PI * 2; if (dh < -Math.PI) dh += Math.PI * 2;
    gm.rotation.y = g[a + 3] + dh * t;
  }

  // дельта к рекордному кругу, с
  delta() {
    const P = this.player;
    const tr = this.rec.trace;
    if (!P || !tr || !this.canDrive || P.finished || P.outLap) return null;
    const lapDist = P.progress - P.lapsDone * this.geom.length;
    if (lapDist < 20) return null;
    const f = lapDist / 10, i = Math.floor(f);
    if (i + 1 >= tr.length || tr[i] == null || tr[i + 1] == null) return null;
    return this.time - P.lapStart - (tr[i] + (tr[i + 1] - tr[i]) * (f - i));
  }

  updateAudio(dt, pInp) {
    const au = this.app.audio;
    if (!au.ctx) return;
    if (this.mode === 'attract' || this.mode === 'lab' || this.app.paused) { au.silenceEngines(); return; }
    const P = this.focus;
    if (!P) return;
    au.setEngine(0, P.rpm, P.cls.rpmMax, P.throttle || 0, 1);
    const c = this.app.camera.position;
    const others = this.karts.filter((k) => k !== P).map((k) => ({ k, d: Math.hypot(k.x - c.x, k.z - c.z) })).sort((a, b) => a.d - b.d);
    for (let i = 0; i < 2; i++) {
      const o = others[i];
      if (!o) { au.setEngine(i + 1, 0, 1, 0, 0); continue; }
      au.setEngine(i + 1, o.k.rpm, o.k.cls.rpmMax, o.k.throttle || 0.8, clamp(1 - o.d / 50, 0, 1) * 0.8);
    }
    au.setSkid(P.surface === 2 ? 0 : clamp(P.sliding * 1.2 + (P.lock ? 0.5 : 0), 0, 1), P.sliding);
    au.setWind(clamp((Math.abs(P.u) / 36) ** 2, 0, 1));
    au.setRumble(P.onKerb && Math.abs(P.u) > 4 ? 0.6 : P.surface === 2 && Math.abs(P.u) > 3 ? 0.35 : 0);
  }

  buildResults() {
    const L = this.geom.length;
    const rows = this.order.map((k) => {
      let time = k.finished ? k.finishTime : null;
      if (!k.finished) {
        const remaining = this.laps * L - k.progress;
        time = this.time + remaining / Math.max(12, k.progress / Math.max(1, this.time));
      }
      return { driver: k.driver, name: k.name, isPlayer: k.isPlayer, time, est: !k.finished, bestLap: k.bestLap, laps: k.lapTimes.slice(), sectors: k.lastSectors || null, secHist: (k.secHist || []).slice(), pbSec: k.pbSec || null, lapsDone: k.lapTimes.length };
    });
    rows.sort((a, b) => a.time - b.time);
    rows.forEach((r, i) => (r.pos = i + 1));
    return { mode: this.mode, trackId: this.def.id, trackName: this.def.name, cls: this.cls.id, laps: this.laps, rows, fastestLap: this.fastestLap, sessionBestSec: this.sessionBestSec.slice() };
  }

  dispose() {
    disposeObject(this.scene);
    this.scene.clear();
  }
}

// объединение геометрий без индексов/с индексами для простых мешей
function mergeSimple(geos) {
  const pos = [], nor = [], idx = [];
  let off = 0;
  for (const g of geos) {
    const p = g.attributes.position, n = g.attributes.normal;
    for (let i = 0; i < p.count; i++) { pos.push(p.getX(i), p.getY(i), p.getZ(i)); nor.push(n.getX(i), n.getY(i), n.getZ(i)); }
    if (g.index) for (let i = 0; i < g.index.count; i++) idx.push(g.index.getX(i) + off);
    else for (let i = 0; i < p.count; i++) idx.push(i + off);
    off += p.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  out.setIndex(idx);
  return out;
}
