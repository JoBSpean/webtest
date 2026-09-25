// Карт: модель, связка с физикой, визуальные эффекты.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { clamp, damp, wrapAngle } from './util.js';
import { numberTexture } from './textures.js';
import { newKartState, stepDynamics, collide, placeKart, placeInPit, SURF } from './physics.js';

// ---------- общие геометрии ----------
let G = null;
function geoms() {
  if (G) return G;
  G = {
    frame: new THREE.BoxGeometry(1.05, 0.05, 1.7),
    pod: new RoundedBoxGeometry(0.26, 0.2, 0.95, 3, 0.07),
    nose: new RoundedBoxGeometry(1.08, 0.2, 0.5, 3, 0.08),
    bumper: new RoundedBoxGeometry(1.3, 0.13, 0.16, 2, 0.05),
    seat: new RoundedBoxGeometry(0.44, 0.46, 0.42, 3, 0.1),
    engine: new RoundedBoxGeometry(0.3, 0.3, 0.36, 2, 0.05),
    pipe: new THREE.CylinderGeometry(0.05, 0.06, 0.55, 10),
    column: new THREE.CylinderGeometry(0.022, 0.022, 0.42, 6),
    wheelRing: new THREE.TorusGeometry(0.16, 0.022, 6, 18),
    torso: new THREE.CapsuleGeometry(0.19, 0.3, 4, 10),
    arm: new THREE.CapsuleGeometry(0.06, 0.34, 3, 6),
    leg: new THREE.CapsuleGeometry(0.075, 0.5, 3, 6),
    helmet: new THREE.SphereGeometry(0.2, 18, 14),
    visor: new THREE.SphereGeometry(0.203, 18, 10, -1.1, 2.2, 1.05, 0.75),
    stripe: new THREE.TorusGeometry(0.2, 0.025, 6, 20, Math.PI),
    tireF: new THREE.CylinderGeometry(0.25, 0.25, 0.2, 20).rotateZ(Math.PI / 2),
    tireR: new THREE.CylinderGeometry(0.28, 0.28, 0.3, 20).rotateZ(Math.PI / 2),
    rimF: new THREE.CylinderGeometry(0.15, 0.15, 0.21, 12).rotateZ(Math.PI / 2),
    rimR: new THREE.CylinderGeometry(0.17, 0.17, 0.31, 12).rotateZ(Math.PI / 2),
    plate: new THREE.PlaneGeometry(0.34, 0.25),
    flame: new THREE.ConeGeometry(0.09, 0.7, 10, 1, true).rotateX(-Math.PI / 2).translate(0, 0, -0.35),
    shield: new THREE.SphereGeometry(1.35, 24, 16),
    lamp: new THREE.SphereGeometry(0.06, 8, 6),
    blob: new THREE.PlaneGeometry(2.2, 2.8).rotateX(-Math.PI / 2),
  };
  return G;
}

const SHIELD_VERT = `
varying vec3 vN; varying vec3 vV;
void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix*viewMatrix*wp; }`;
const SHIELD_FRAG = `
uniform float time; uniform vec3 color; uniform float alpha;
varying vec3 vN; varying vec3 vV;
void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 2.2); float band = 0.5 + 0.5*sin(vN.y*18.0 - time*6.0);
 gl_FragColor = vec4(color*(0.6+f*1.8), (f*0.9 + band*0.08)*alpha); }`;

export function buildKartMesh(driver, { ghost = false, night = false, shadows = true } = {}) {
  const g = geoms();
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const std = (color, rough = 0.5, metal = 0.1) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal });
    if (ghost) { m.transparent = true; m.opacity = 0.35; m.depthWrite = false; }
    return m;
  };
  const M = {
    paint: std(driver.color, 0.32, 0.25),
    accent: std(driver.accent, 0.4, 0.1),
    dark: std('#1b1d21', 0.7, 0.2),
    metal: std('#9aa2ad', 0.35, 0.85),
    tire: std('#161616', 0.92, 0),
    rim: std('#c9ced6', 0.3, 0.9),
    suit: std(driver.suit, 0.75, 0),
    visor: std('#0d1520', 0.08, 0.6),
    pipe: std('#6f6258', 0.4, 0.8),
  };
  const add = (geo, mat, x, y, z, parent = body) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = shadows && !ghost;
    parent.add(m);
    return m;
  };

  add(g.frame, M.metal, 0, 0.17, 0);
  add(g.pod, M.paint, 0.62, 0.26, -0.05);
  add(g.pod, M.paint, -0.62, 0.26, -0.05);
  const nose = add(g.nose, M.paint, 0, 0.3, 0.86);
  nose.rotation.x = 0.18;
  // номер на передней панели
  const plateMat = new THREE.MeshStandardMaterial({ map: numberTexture(driver.num, driver.accent, driver.color), roughness: 0.5 });
  if (ghost) { plateMat.transparent = true; plateMat.opacity = 0.35; }
  const plate = add(g.plate, plateMat, 0, 0.47, 0.64);
  plate.rotation.x = -0.95;
  plate.castShadow = false;
  add(g.bumper, M.dark, 0, 0.27, -0.98);
  const seat = add(g.seat, M.dark, 0, 0.42, -0.28);
  seat.rotation.x = -0.28;
  add(g.engine, M.metal, -0.47, 0.42, -0.5);
  const pipe = add(g.pipe, M.pipe, -0.47, 0.5, -0.84);
  pipe.rotation.x = Math.PI / 2 - 0.25;
  const col = add(g.column, M.dark, 0, 0.44, 0.44);
  col.rotation.x = -0.9;
  const wheel = add(g.wheelRing, M.dark, 0, 0.6, 0.28);
  wheel.rotation.x = -0.55;

  // пилот
  const torso = add(g.torso, M.suit, 0, 0.74, -0.2);
  torso.rotation.x = -0.35;
  const head = new THREE.Group();
  head.position.set(0, 1.1, -0.1);
  body.add(head);
  const helmet = add(g.helmet, M.paint, 0, 0, 0, head);
  helmet.scale.set(1, 1.02, 1.08);
  const visor = add(g.visor, M.visor, 0, 0.0, 0.0, head);
  visor.rotation.y = 0;
  const stripe = add(g.stripe, M.accent, 0, 0, 0, head);
  stripe.rotation.y = Math.PI / 2;
  const armL = add(g.arm, M.suit, 0.2, 0.8, 0.02);
  armL.rotation.set(1.05, 0, -0.35);
  const armR = add(g.arm, M.suit, -0.2, 0.8, 0.02);
  armR.rotation.set(1.05, 0, 0.35);
  const legL = add(g.leg, M.suit, 0.13, 0.4, 0.26);
  legL.rotation.x = 1.35;
  const legR = add(g.leg, M.suit, -0.13, 0.4, 0.26);
  legR.rotation.x = 1.35;

  // колёса
  const wheels = [];
  const mkWheel = (x, z, front) => {
    const pivot = new THREE.Group();
    pivot.position.set(x, front ? 0.25 : 0.28, z);
    body.add(pivot);
    const spin = new THREE.Group();
    pivot.add(spin);
    const t = new THREE.Mesh(front ? g.tireF : g.tireR, M.tire);
    t.castShadow = shadows && !ghost;
    spin.add(t);
    const r = new THREE.Mesh(front ? g.rimF : g.rimR, M.rim);
    spin.add(r);
    // спицы-метки, чтобы было видно вращение
    const mark = new THREE.Mesh(new THREE.BoxGeometry(front ? 0.212 : 0.312, 0.05, 0.26), M.dark);
    spin.add(mark);
    wheels.push({ pivot, spin, front, r: front ? 0.25 : 0.28 });
  };
  mkWheel(0.6, 0.6, true); mkWheel(-0.6, 0.6, true);
  mkWheel(0.64, -0.6, false); mkWheel(-0.64, -0.6, false);

  // пламя турбо
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xffa040, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
  const flame = new THREE.Mesh(g.flame, flameMat);
  flame.position.set(-0.47, 0.44, -1.1);
  flame.rotation.x = 0.25;
  flame.visible = false;
  body.add(flame);
  const flame2 = new THREE.Mesh(g.flame, flameMat);
  flame2.scale.set(1.8, 1.8, 0.6);
  flame.add(flame2);

  // щит
  const shieldMat = new THREE.ShaderMaterial({
    vertexShader: SHIELD_VERT, fragmentShader: SHIELD_FRAG,
    uniforms: { time: { value: 0 }, color: { value: new THREE.Color('#5fd4ff') }, alpha: { value: 1 } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const shield = new THREE.Mesh(g.shield, shieldMat);
  shield.position.y = 0.6;
  shield.scale.set(1, 0.8, 1.15);
  shield.visible = false;
  root.add(shield);

  // фары ночью
  let lamps = null;
  if (night && !ghost) {
    const lm = new THREE.MeshBasicMaterial({ color: 0xfff4d0 });
    lamps = [add(g.lamp, lm, 0.35, 0.33, 1.1), add(g.lamp, lm, -0.35, 0.33, 1.1)];
    const tm = new THREE.MeshBasicMaterial({ color: 0xff2020 });
    add(g.lamp, tm, 0.5, 0.3, -1.05); add(g.lamp, tm, -0.5, 0.3, -1.05);
  }

  root.userData = { body, wheels, head, wheel, flame, flameMat, shield, shieldMat, M, pilot: [torso, head, armL, armR] };
  return root;
}



export class Kart {
  constructor(race, driver, { isPlayer = false, index = 0, cls }) {
    Object.assign(this, newKartState(cls));
    this.race = race;
    this.geom = race.geom;
    this.driver = driver;
    this.name = driver.name;
    this.isPlayer = isPlayer;
    this.index = index;
    this.mesh = buildKartMesh(driver, { night: race.theme.night, shadows: race.quality !== 'low' });
    this.ud = this.mesh.userData;
    if (race.quality === 'low') {
      const blob = new THREE.Mesh(geoms().blob, race.blobMat);
      blob.position.y = 0.04;
      blob.renderOrder = 1;
      this.mesh.add(blob);
    }
    this.item = null; this.itemCount = 0; this.rouletteT = 0; this.rouletteItem = null;
    this.shieldT = 0; this.padCooldown = 0;
    this.speedScale = 1;
    this.lapsDone = 0; this.lapStart = 0; this.lapTimes = []; this.bestLap = Infinity;
    this.finished = false; this.finishTime = 0; this.rank = 0;
    this.sector = 0; this.secStart = 0; this.curSectors = [null, null, null];
    this.wrongT = 0;
    this.pitch = 0; this.roll = 0; this.wheelRot = 0; this.visLift = 0;
    this.skidPrev = [null, null];
    this.lastWallHit = -1;
    this.airY = 0;
  }

  get speed() { return Math.abs(this.u); }

  place(s, d) { placeKart(this, this.geom, s, d); this.skidPrev = [null, null]; this.syncMesh(0); }
  placePit(frac) { placeInPit(this, this.geom, frac); this.skidPrev = [null, null]; this.syncMesh(0); }

  // маршалы ставят карт на трассу
  respawn() {
    const s = this.geom.wrapS(this.s);
    const d = clamp(this.d, -this.geom.half + 1.5, this.geom.half - 1.5) * 0.3;
    const prog = this.progress;
    placeKart(this, this.geom, s, d);
    this.progress = prog;
    this.spinT = 0; this.boostT = 0;
    this.skidPrev = [null, null];
    this.race.fx.burst(this.x, this.y + 0.8, this.z, 0.9, 0.9, 0.9, 16, 3, 0.3);
  }

  boost(dur, pow) {
    if (this.boostT <= 0) this.boostPow = pow; else this.boostPow = Math.max(this.boostPow, pow);
    this.boostT = Math.max(this.boostT, dur);
    if (this.isPlayer) this.race.onPlayerBoost(pow);
  }

  hit(kind, by = null) {
    if (this.spinT > 0) return false;
    if (this.shieldT > 0) {
      this.shieldT = 0;
      this.race.fx.burst(this.x, this.y + 0.8, this.z, 0.4, 0.85, 1, 30, 7, 0.35);
      this.race.sound('shieldBreak', this);
      return false;
    }
    this.boostT = 0;
    const heavy = kind === 'rocket';
    this.spinT = heavy ? 1.4 : 1.0;
    this.spinDir = Math.random() < 0.5 ? -1 : 1;
    this.u *= heavy ? 0.35 : 0.6;
    this.race.onKartHit(this, kind, by);
    return true;
  }

  step(dt, inp) {
    stepDynamics(this, inp, dt, this.race.physOpts(this));
    const hit = collide(this, this.geom, dt);
    if (hit > 1.5 && this.race.time - this.lastWallHit > 0.3) {
      this.lastWallHit = this.race.time;
      this.race.onWallHit(this, hit, this.x, this.z);
    }
    const cosDir = Math.cos(this.h - (this.trackHead ?? this.h));
    if (cosDir < -0.3 && this.u > 2) this.wrongT += dt; else this.wrongT = Math.max(0, this.wrongT - dt * 2);
    if (this.shieldT > 0) this.shieldT -= dt;
  }

  syncMesh(dt, time = 0) {
    const ud = this.ud, m = this.mesh;
    const vib = this.onKerb && this.u > 5 ? (Math.random() - 0.5) * 0.025 : 0;
    m.position.set(this.x, this.y + vib, this.z);
    const spinVis = this.spinT > 0 ? 0 : 0;
    m.rotation.set(0, this.h + spinVis, 0);
    // крен от бокового ускорения, клевок при торможении, подскок внутреннего колеса
    const ay = this.u * this.w;
    const slopeAlong = (this.slope || 0) * Math.cos(this.h - (this.trackHead ?? this.h));
    const pitchT = -Math.atan(slopeAlong) + clamp(-this.ax * 0.004, -0.035, 0.035);
    const rollT = clamp(ay * 0.0045, -0.07, 0.07) + Math.sign(this.w) * this.lift * 0.03;
    this.pitch = dt ? damp(this.pitch, pitchT, 10, dt) : pitchT;
    this.roll = dt ? damp(this.roll, rollT, 9, dt) : rollT;
    ud.body.rotation.set(this.pitch, 0, this.roll, 'YXZ');
    ud.body.position.y = this.lift * 0.025;
    this.wheelRot += (this.u * (dt || 0)) / 0.27;
    for (const w of ud.wheels) {
      w.spin.rotation.x = this.wheelRot * (w.front ? 1.1 : 1);
      if (w.front) w.pivot.rotation.y = this.delta;
    }
    // внутреннее заднее колесо отрывается от асфальта
    const liftSide = this.w > 0 ? 1 : -1; // левый поворот — внутреннее слева (+x)
    for (const w of ud.wheels) {
      if (w.front) continue;
      const inner = Math.sign(w.pivot.position.x) === liftSide;
      w.pivot.position.y = 0.28 + (inner ? this.lift * 0.05 : 0);
    }
    ud.wheel.rotation.z = -this.delta * 2.4;
    ud.head.rotation.y = this.delta * 0.6;
    ud.head.rotation.z = -this.roll * 2.2;
    const boosting = this.boostT > 0;
    ud.flame.visible = boosting;
    if (boosting) {
      ud.flame.scale.set(1, 1, 0.8 + Math.random() * 0.5 + this.boostPow * 0.4);
      ud.flameMat.color.setHSL(0.07 + Math.random() * 0.04, 1, 0.55);
    }
    ud.shield.visible = this.shieldT > 0;
    if (this.shieldT > 0) {
      ud.shieldMat.uniforms.time.value = time;
      ud.shieldMat.uniforms.alpha.value = this.shieldT < 1.2 ? (Math.sin(time * 30) > 0 ? 1 : 0.3) : 1;
    }
    if (!dt) return;
    this.emitFx(dt);
  }

  emitFx(dt) {
    const fx = this.race.fx;
    if (!this.race.nearCamera(this)) { this.skidPrev = [null, null]; return; }
    const sh = Math.sin(this.h), ch = Math.cos(this.h);
    const rx = -ch, rz = sh;
    const sp = Math.abs(this.u);
    const rear = [];
    for (const side of [-1, 1]) rear.push([this.x - sh * 0.62 + rx * side * 0.64, this.y + 0.05, this.z - ch * 0.62 + rz * side * 0.64]);
    const sl = this.sliding;
    // дымок при срыве
    if (sl > 0.2) {
      for (const w of rear) if (fx.chance(sl * 0.7)) fx.smoke(w[0], w[1] + 0.15, w[2], -sh * 1.5 + (Math.random() - 0.5), 0.5, -ch * 1.5 + (Math.random() - 0.5), 0.86, 0.7 + sl * 0.6, 0.9, 0.18 + sl * 0.2);
    }
    // трава и пыль
    if (this.surface === SURF.GRASS && sp > 3) {
      const col = this.race.dustColor;
      for (const w of rear) if (fx.chance(0.45)) fx.dust(w[0], w[1] + 0.2, w[2], -sh * 2 + (Math.random() - 0.5) * 2, 0.8 + Math.random(), -ch * 2 + (Math.random() - 0.5) * 2, col[0], col[1], col[2], 0.9);
    }
    if (this.spinT > 0 && fx.chance(0.6)) fx.smoke(this.x, this.y + 0.3, this.z, (Math.random() - 0.5) * 3, 1, (Math.random() - 0.5) * 3, 0.8, 1.1, 0.9, 0.35);
    const ex = this.x - sh * 1.15 + rx * 0.47, ez = this.z - ch * 1.15 + rz * 0.47;
    if (this.boostT > 0) for (let i = 0; i < 2; i++) fx.flame(ex, this.y + 0.5, ez, -sh * 4 + (Math.random() - 0.5), 0.5 + Math.random(), -ch * 4 + (Math.random() - 0.5), 1 + this.boostPow * 0.5);
    // следы шин
    const skid = (sl > 0.25 || this.lock || this.spin || this.spinT > 0) && this.surface !== SURF.GRASS && sp > 2;
    for (let k = 0; k < 2; k++) {
      const w = rear[k];
      if (!skid) { this.skidPrev[k] = null; continue; }
      const hw = 0.14;
      const l = [w[0] - rx * hw, w[1] - 0.02, w[2] - rz * hw];
      const r = [w[0] + rx * hw, w[1] - 0.02, w[2] + rz * hw];
      const p = this.skidPrev[k];
      if (p) {
        const dd = (p[0][0] - l[0]) ** 2 + (p[0][2] - l[2]) ** 2;
        if (dd > 0.2 && dd < 16) { fx.skids.add(p[0][0], p[0][1], p[0][2], p[1][0], p[1][1], p[1][2], l[0], l[1], l[2], r[0], r[1], r[2]); this.skidPrev[k] = [l, r]; }
        else if (dd >= 16) this.skidPrev[k] = [l, r];
      } else this.skidPrev[k] = [l, r];
    }
  }
}

export { wrapAngle, geoms };
