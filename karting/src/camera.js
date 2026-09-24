// Камеры: погоня за картом, облёт перед стартом, облёт на финише, «телетрансляция» в меню.
import * as THREE from 'three';
import { clamp, damp, dampAngle, wrapAngle } from './util.js';

const V = new THREE.Vector3();

export class CameraRig {
  constructor(camera) {
    this.cam = camera;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.yaw = 0;
    this.shakeAmt = 0;
    this.fov = 70;
    this.mode = 0; // 0 — близко, 1 — далеко
    this.tv = { t: 0, kind: 0, anchor: new THREE.Vector3(), target: null, switchT: 0 };
    this.orbitA = 0;
  }

  shake(a) { this.shakeAmt = Math.max(this.shakeAmt, a); }

  snapChase(k) {
    this.yaw = k.h;
    const [dist, hgt] = this.mode ? [7.4, 3.1] : [5.4, 2.25];
    this.pos.set(k.x - Math.sin(k.h) * dist, k.y + hgt, k.z - Math.cos(k.h) * dist);
    this.look.set(k.x + Math.sin(k.h) * 3, k.y + 1, k.z + Math.cos(k.h) * 3);
  }

  chase(dt, k, lookBack = false) {
    const moving = k.speed > 3 && k.vf > 0;
    const velYaw = moving ? Math.atan2(k.vx, k.vz) : k.h;
    const target = k.h + wrapAngle(velYaw - k.h) * 0.6 + (k.spinT > 0 ? 0 : 0);
    this.yaw = dampAngle(this.yaw, k.spinT > 0 ? this.yaw : target, 4.5, dt);
    const yaw = lookBack ? this.yaw + Math.PI : this.yaw;
    const [dist, hgt] = this.mode ? [7.4, 3.1] : [5.4, 2.25];
    const boostPull = k.boostT > 0 ? 0.35 : 0;
    const d = dist + boostPull + clamp(k.speed / 30, 0, 1.3) * 0.4;
    V.set(k.x - Math.sin(yaw) * d, k.y + hgt + k.airY * 0.5, k.z - Math.cos(yaw) * d);
    const kk = 1 - Math.exp(-dt * 22);
    this.pos.lerp(V, kk);
    this.pos.y = Math.max(this.pos.y, k.y + 1.2);
    V.set(k.x + Math.sin(yaw) * 3.2, k.y + 1.0 + k.airY * 0.6, k.z + Math.cos(yaw) * 3.2);
    this.look.lerp(V, 1 - Math.exp(-dt * 20));
    const fovT = 67 + clamp(k.speed / k.p.maxSpeed, 0, 1.25) * 7 + (k.boostT > 0 ? 5 : 0);
    this.fov = damp(this.fov, fovT, 4, dt);
    this.apply(dt);
  }

  // облёт стартовой решётки: t 0..1
  intro(t, k, center) {
    const e = t * t * (3 - 2 * t);
    const a0 = k.h + 2.4, a1 = k.h + Math.PI;
    const a = a0 + (a1 - a0) * e;
    const r = 34 - 28.6 * e;
    const h = 14 - 11.75 * e;
    this.pos.set(k.x - Math.sin(a) * -r, k.y + h, k.z - Math.cos(a) * -r);
    const lx = k.x + Math.sin(k.h) * 3 * e, lz = k.z + Math.cos(k.h) * 3 * e;
    this.look.set(lx, k.y + 1 * e, lz);
    this.yaw = k.h;
    this.fov = 60 + 8 * e;
    this.apply(0);
  }

  orbit(dt, k) {
    this.orbitA += dt * 0.35;
    const a = k.h + Math.PI * 0.75 + this.orbitA;
    V.set(k.x + Math.sin(a) * 7, k.y + 2.4, k.z + Math.cos(a) * 7);
    this.pos.lerp(V, 1 - Math.exp(-dt * 3));
    V.set(k.x, k.y + 0.8, k.z);
    this.look.lerp(V, 1 - Math.exp(-dt * 6));
    this.fov = damp(this.fov, 55, 2, dt);
    this.apply(dt);
  }

  // трансляция: придорожные камеры, вертолёт, камера на борту соседа
  broadcast(dt, karts, geom) {
    const tv = this.tv;
    tv.switchT -= dt;
    if (!tv.target || tv.switchT <= 0) {
      tv.kind = (tv.kind + 1) % 3;
      tv.switchT = 6 + Math.random() * 3;
      const lead = karts.slice().sort((a, b) => b.progress - a.progress);
      tv.target = lead[Math.floor(Math.random() * Math.min(4, lead.length))];
      if (tv.kind === 0) this.placeTrackside(tv.target, geom);
      this.orbitA = Math.random() * 6;
    }
    const k = tv.target;
    if (tv.kind === 0) {
      if (geom.deltaS(k.s, tv.anchorS) > 18) this.placeTrackside(k, geom);
      this.pos.copy(tv.anchor);
      V.set(k.x, k.y + 0.8, k.z);
      this.look.lerp(V, 1 - Math.exp(-dt * 8));
      const dist = this.pos.distanceTo(V);
      this.fov = damp(this.fov, clamp(900 / Math.max(dist, 8), 14, 55), 3, dt);
    } else if (tv.kind === 1) {
      const a = k.h + Math.PI + Math.sin(this.orbitA + performance.now() * 0.0002) * 0.6;
      V.set(k.x + Math.sin(a) * 16, k.y + 11, k.z + Math.cos(a) * 16);
      this.pos.lerp(V, 1 - Math.exp(-dt * 2));
      V.set(k.x + Math.sin(k.h) * 6, k.y, k.z + Math.cos(k.h) * 6);
      this.look.lerp(V, 1 - Math.exp(-dt * 4));
      this.fov = damp(this.fov, 50, 2, dt);
    } else {
      const a = k.h + 2.6;
      V.set(k.x + Math.sin(a) * 4.5, k.y + 1.3, k.z + Math.cos(a) * 4.5);
      this.pos.lerp(V, 1 - Math.exp(-dt * 6));
      V.set(k.x - Math.sin(k.h) * 1.5, k.y + 0.7, k.z - Math.cos(k.h) * 1.5);
      this.look.lerp(V, 1 - Math.exp(-dt * 10));
      this.fov = damp(this.fov, 62, 3, dt);
    }
    this.apply(dt);
  }

  placeTrackside(k, geom) {
    const s = geom.wrapS(k.s + 32 + Math.random() * 12);
    const side = Math.random() < 0.5 ? -1 : 1;
    const p = geom.pointAt(s, side * (geom.barrier + 4));
    this.tv.anchor.set(p.x, p.y + 2.5 + Math.random() * 3, p.z);
    this.tv.anchorS = s;
  }

  apply(dt) {
    const c = this.cam;
    c.position.copy(this.pos);
    if (this.shakeAmt > 0.001) {
      const s = this.shakeAmt;
      c.position.x += (Math.random() - 0.5) * s;
      c.position.y += (Math.random() - 0.5) * s;
      c.position.z += (Math.random() - 0.5) * s;
      this.shakeAmt *= Math.exp(-dt * 7);
    }
    c.lookAt(this.look);
    if (Math.abs(c.fov - this.fov) > 0.01) { c.fov = this.fov; c.updateProjectionMatrix(); }
  }
}
