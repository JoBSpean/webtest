// Предметы: коробки-сюрпризы, нитро, самонаводящиеся ракеты, масляные пятна, щит.
import * as THREE from 'three';
import { itemBoxTexture } from './textures.js';
import { placeOnTrack } from './trackmesh.js';

const LANES = [-4.5, -1.5, 1.5, 4.5];

export class ItemSystem {
  constructor(race, enabled = true) {
    this.race = race;
    this.geom = race.geom;
    this.enabled = enabled;
    this.boxes = [];
    this.rockets = [];
    this.hazards = [];
    this.group = new THREE.Group();
    race.scene.add(this.group);
    if (enabled) this.buildBoxes();
    this.rocketGeo = null;
  }

  buildBoxes() {
    const tex = itemBoxTexture();
    const mat = new THREE.MeshStandardMaterial({ map: tex, transparent: true, opacity: 0.92, roughness: 0.2, metalness: 0.1, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.35 });
    const geo = new THREE.BoxGeometry(1.1, 1.1, 1.1);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
    const coreGeo = new THREE.OctahedronGeometry(0.28);
    for (const f of this.geom.def.itemRows || []) {
      const s = f * this.geom.length;
      for (const d of LANES) {
        const holder = new THREE.Group();
        placeOnTrack(holder, this.geom, s, d, 1.0);
        holder.rotation.x = 0;
        const m = new THREE.Mesh(geo, mat);
        m.castShadow = this.race.quality === 'high';
        holder.add(m);
        const core = new THREE.Mesh(coreGeo, coreMat);
        holder.add(core);
        this.group.add(holder);
        this.boxes.push({ s, d, mesh: holder, box: m, core, respawn: 0, phase: Math.random() * 6 });
      }
    }
  }

  // случайный предмет с учётом позиции: лидерам — защита, отстающим — ускорение и ракеты
  roll(kart) {
    const n = this.race.karts.length;
    const r = n > 1 ? kart.rank / (n - 1) : 0.5;
    const w = {
      oil: 0.35 * (1 - r) + 0.08,
      shield: 0.22 * (1 - r) + 0.05,
      rocket: 0.12 + 0.28 * r,
      nitro: 0.22 + 0.1 * r,
      nitro3: 0.02 + 0.3 * r * r,
    };
    if (kart.rank === 0) w.rocket *= 0.4;
    let sum = 0;
    for (const k in w) sum += w[k];
    let x = Math.random() * sum;
    for (const k in w) { x -= w[k]; if (x <= 0) return k; }
    return 'nitro';
  }

  give(kart, item) {
    kart.item = item;
    kart.itemCount = item === 'nitro3' ? 3 : 1;
  }

  update(dt, time) {
    const race = this.race, g = this.geom;
    // коробки
    for (const b of this.boxes) {
      if (b.respawn > 0) {
        b.respawn -= dt;
        if (b.respawn <= 0) { b.mesh.visible = true; b.mesh.scale.setScalar(0.01); }
        continue;
      }
      const sc = b.mesh.scale.x;
      if (sc < 1) b.mesh.scale.setScalar(Math.min(1, sc + dt * 3));
      b.box.rotation.set(time * 0.9 + b.phase, time * 1.3 + b.phase, 0);
      b.core.rotation.y = -time * 2;
      b.mesh.position.y = g.pointAt(b.s, b.d).y + 1.0 + Math.sin(time * 2 + b.phase) * 0.12;
      for (const k of race.karts) {
        const dx = k.x - b.mesh.position.x, dz = k.z - b.mesh.position.z;
        if (dx * dx + dz * dz < 2.3 * 2.3 && Math.abs(k.y - g.pointAt(b.s, b.d).y) < 2) {
          b.respawn = 2.2;
          b.mesh.visible = false;
          race.fx.burst(b.mesh.position.x, b.mesh.position.y, b.mesh.position.z, 0.9, 0.7, 1, 18, 5, 0.3);
          if (!k.item && k.rouletteT <= 0) {
            k.rouletteT = k.isPlayer ? 1.1 : 0.5;
            k.rouletteItem = this.roll(k);
            race.sound('pickup', k);
          }
          break;
        }
      }
    }
    // рулетка
    for (const k of race.karts) {
      if (k.rouletteT > 0) {
        k.rouletteT -= dt;
        if (k.rouletteT <= 0) { this.give(k, k.rouletteItem); if (k.isPlayer) race.sound('itemReady', k); }
      }
    }
    this.updateRockets(dt, time);
    this.updateHazards(dt, time);
  }

  use(kart) {
    if (!kart.item || kart.rouletteT > 0) return;
    const race = this.race;
    const it = kart.item;
    switch (it) {
      case 'nitro': case 'nitro3':
        kart.boost(1.35, 1.2);
        race.sound('nitro', kart);
        break;
      case 'rocket':
        this.fireRocket(kart);
        race.sound('rocket', kart);
        break;
      case 'oil':
        this.dropOil(kart);
        race.sound('drop', kart);
        break;
      case 'shield':
        kart.shieldT = 7;
        race.sound('shield', kart);
        break;
    }
    kart.itemCount--;
    if (kart.itemCount <= 0) kart.item = null;
  }

  findTarget(kart) {
    let best = null, bestD = Infinity;
    for (const o of this.race.karts) {
      if (o === kart || o.finished) continue;
      const d = o.progress - kart.progress;
      if (d > 0 && d < 160 && d < bestD) { bestD = d; best = o; }
    }
    return best;
  }

  makeRocketMesh() {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 1.0, 10).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xe8e8ea, metalness: 0.5, roughness: 0.3 }));
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.4, 10).rotateX(Math.PI / 2).translate(0, 0, 0.7), new THREE.MeshStandardMaterial({ color: 0xe0322b, roughness: 0.4 }));
    const finMat = new THREE.MeshStandardMaterial({ color: 0xe0322b, roughness: 0.5 });
    g.add(body, nose);
    for (let i = 0; i < 4; i++) {
      const f = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.3, 0.3), finMat);
      f.position.set(0, 0, -0.4);
      f.rotation.z = (i * Math.PI) / 2;
      f.translateY(0.2);
      g.add(f);
    }
    const glow = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffb040, toneMapped: false }));
    glow.position.z = -0.55;
    g.add(glow);
    return g;
  }

  fireRocket(kart) {
    const target = this.findTarget(kart);
    const mesh = this.makeRocketMesh();
    this.group.add(mesh);
    this.rockets.push({
      owner: kart, target, s: kart.s + 1.8, d: kart.d, y: 0.7, life: 6, age: 0,
      speed: Math.max(kart.speed + 18, 50), mesh,
      x: kart.x, z: kart.z, h: kart.h, progress: kart.progress + 1.8,
    });
  }

  updateRockets(dt) {
    const g = this.geom, race = this.race;
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i];
      r.age += dt; r.life -= dt;
      const step = r.speed * dt;
      r.s = g.wrapS(r.s + step);
      r.progress += step;
      // наведение: по трассе, затем по боковому смещению к цели
      if (r.target && !r.target.finished) {
        const gap = r.target.progress - r.progress;
        if (gap < 35) r.d += (r.target.d - r.d) * Math.min(1, dt * (gap < 12 ? 10 : 3));
      } else {
        r.d *= Math.exp(-dt * 0.5);
      }
      r.d = Math.max(-g.half + 0.5, Math.min(g.half - 0.5, r.d));
      const p = g.pointAt(r.s, r.d);
      const nx = p.x, nz = p.z;
      const h = Math.atan2(nx - r.x, nz - r.z);
      r.x = nx; r.z = nz; r.h = h;
      r.mesh.position.set(nx, p.y + r.y, nz);
      r.mesh.rotation.set(0, h, 0);
      race.fx.flame(nx - Math.sin(h) * 0.6, p.y + r.y, nz - Math.cos(h) * 0.6, -Math.sin(h) * 3, 0.3, -Math.cos(h) * 3, 0.9);
      if (Math.random() < 0.5) race.fx.smoke(nx - Math.sin(h) * 0.8, p.y + r.y, nz - Math.cos(h) * 0.8, 0, 0.5, 0, 0.8, 0.7, 0.8, 0.28);
      // попадание
      let hitK = null;
      for (const k of race.karts) {
        if (k === r.owner && r.age < 0.6) continue;
        const dx = k.x - nx, dz = k.z - nz;
        if (dx * dx + dz * dz < 1.7 * 1.7 && Math.abs(k.y - p.y) < 2) { hitK = k; break; }
      }
      // сбивает масло на пути
      for (let j = this.hazards.length - 1; j >= 0; j--) {
        const hz = this.hazards[j];
        if ((hz.x - nx) ** 2 + (hz.z - nz) ** 2 < 2.2) { this.removeHazard(j); r.life = 0; }
      }
      if (hitK || r.life <= 0) {
        race.fx.explosion(nx, p.y, nz);
        race.sound('explosion', r.owner, 0, { x: nx, z: nz });
        if (hitK) hitK.hit('rocket', r.owner);
        this.group.remove(r.mesh);
        r.mesh.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
        this.rockets.splice(i, 1);
      }
    }
  }

  dropOil(kart) {
    const g = this.geom;
    const s = g.wrapS(kart.s - 2.6);
    const p = g.pointAt(s, kart.d);
    if (!this.oilGeo) {
      this.oilGeo = new THREE.CircleGeometry(1.25, 20).rotateX(-Math.PI / 2);
      const pos = this.oilGeo.attributes.position;
      for (let i = 1; i < pos.count; i++) {
        const k = 0.75 + Math.random() * 0.4;
        pos.setX(i, pos.getX(i) * k); pos.setZ(i, pos.getZ(i) * k);
      }
      this.oilMat = new THREE.MeshStandardMaterial({ color: 0x07070a, roughness: 0.05, metalness: 0.9, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -3 });
      this.oilSheen = new THREE.MeshBasicMaterial({ color: 0x6040ff, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -4 });
    }
    const m = new THREE.Mesh(this.oilGeo, this.oilMat);
    m.position.set(p.x, p.y + 0.02, p.z);
    m.rotation.y = Math.random() * 6;
    m.renderOrder = 1;
    const sheen = new THREE.Mesh(this.oilGeo, this.oilSheen);
    sheen.scale.setScalar(0.6);
    sheen.position.y = 0.005;
    m.add(sheen);
    this.group.add(m);
    this.hazards.push({ s, d: kart.d, x: p.x, z: p.z, y: p.y, mesh: m, owner: kart, t: 0, sheen });
    if (this.hazards.length > 12) this.removeHazard(0);
  }

  removeHazard(j) {
    const h = this.hazards[j];
    this.group.remove(h.mesh);
    this.hazards.splice(j, 1);
  }

  updateHazards(dt, time) {
    const race = this.race;
    for (let j = this.hazards.length - 1; j >= 0; j--) {
      const h = this.hazards[j];
      h.t += dt;
      h.sheen.material.color.setHSL((time * 0.2 + j * 0.1) % 1, 0.8, 0.5);
      for (const k of race.karts) {
        if (k === h.owner && h.t < 1) continue;
        const dx = k.x - h.x, dz = k.z - h.z;
        if (dx * dx + dz * dz < 1.6 * 1.6 && Math.abs(k.y - h.y) < 1.5) {
          k.hit('oil', h.owner);
          this.removeHazard(j);
          race.sound('slip', k);
          break;
        }
      }
    }
  }

  // ускорители на асфальте
  checkPads(kart, pads, dt) {
    for (const p of pads) {
      const ds = this.geom.deltaS(kart.s, p.s);
      if (Math.abs(ds) < p.len / 2 && Math.abs(kart.d - p.d) < p.w / 2 + 0.3) {
        if (!kart.padCooldown || kart.padCooldown <= 0) {
          kart.boost(1.0, 1.0);
          kart.padCooldown = 0.6;
          this.race.sound('pad', kart);
        }
      }
    }
    if (kart.padCooldown > 0) kart.padCooldown -= dt;
  }
}
