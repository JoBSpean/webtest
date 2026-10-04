// Готовит .glb к Import 3D в Roblox:
//  - rotate180: перед машины смотрит в +Z (импорт Roblox разворачивает модель на 180°)
//  - invertNormals: мяч «вывернут наизнанку» — разворачиваем нормали наружу
//  - каждый треугольник поворачивается лицом туда же, куда его нормали (Roblox рисует одну сторону)
//  - цвет материала запекается в текстуру (импорт Roblox берёт только текстуры)
//  - светящиеся материалы получают имя Glow_RRGGBB (скрипт меню делает их неоновыми)
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, simplifyPrimitive } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
await MeshoptSimplifier.ready;
import sharp from 'sharp';

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const toSrgb = c => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);
const clamp01 = v => Math.max(0, Math.min(1, v));
const hex = rgb => rgb.map(v => Math.round(clamp01(v) * 255).toString(16).padStart(2, '0')).join('');
const isWhite = f => f[0] > 0.999 && f[1] > 0.999 && f[2] > 0.999;

async function processFile(job) {
  const doc = await io.read(job.in);
  const root = doc.getRoot();
  const report = { flippedTris: 0, totalTris: 0, baked: [], glow: [] };

  // 1-3. геометрия (общие между деталями массивы данных меняем ровно один раз)
  const done = new Set();
  const once = (acc, fn) => { if (acc && !done.has(acc)) { done.add(acc); fn(acc); } };
  for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) {
    const P = p.getAttribute('POSITION'), N = p.getAttribute('NORMAL'), T = p.getAttribute('TANGENT');
    const v = [];
    if (job.rotate180) for (const acc of [P, N, T]) once(acc, a => {
      for (let i = 0; i < a.getCount(); i++) { a.getElement(i, v); v[0] = -v[0]; v[2] = -v[2]; a.setElement(i, v); }
    });
  }
  if (job.invertNormals) for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) {
    const v = [];
    once(p.getAttribute('NORMAL'), N => { for (let i = 0; i < N.getCount(); i++) { N.getElement(i, v); acc3neg(v); N.setElement(i, v); } });
  }
  for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) {
    const P = p.getAttribute('POSITION'), N = p.getAttribute('NORMAL');
    let I = p.getIndices();
    if (!I) continue;
    // общий список индексов у нескольких деталей (например, левое и правое колесо) — делаем копию,
    // иначе разворот треугольников одной детали испортит другую
    if (I.listParents().filter(x => x !== root).length > 1) { I = I.clone(); p.setIndices(I); }
    const A = [], B = [], C = [], n0 = [], n1 = [], n2 = [];
    for (let t = 0; t < I.getCount(); t += 3) {
      const i0 = I.getScalar(t), i1 = I.getScalar(t + 1), i2 = I.getScalar(t + 2);
      P.getElement(i0, A); P.getElement(i1, B); P.getElement(i2, C);
      const u = [B[0] - A[0], B[1] - A[1], B[2] - A[2]], w = [C[0] - A[0], C[1] - A[1], C[2] - A[2]];
      const g = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]];
      report.totalTris++;
      if (!N) continue;
      N.getElement(i0, n0); N.getElement(i1, n1); N.getElement(i2, n2);
      const nn = [n0[0] + n1[0] + n2[0], n0[1] + n1[1] + n2[1], n0[2] + n1[2] + n2[2]];
      if (g[0] * nn[0] + g[1] * nn[1] + g[2] * nn[2] < 0) {
        I.setScalar(t + 1, i2); I.setScalar(t + 2, i1); report.flippedTris++;
      }
    }
  }

  // UV: без них Roblox не может наложить текстуру с цветом
  for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) {
    if (p.getAttribute('TEXCOORD_0')) continue;
    const n = p.getAttribute('POSITION').getCount();
    p.setAttribute('TEXCOORD_0', doc.createAccessor().setType('VEC2').setArray(new Float32Array(n * 2)).setBuffer(p.getAttribute('POSITION').getBuffer()));
    report.uv = (report.uv || 0) + 1;
  }
  // двусторонние детали: копия каждого треугольника, развёрнутая в другую сторону
  if (job.doubleSided) for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) {
    const tris = p.getIndices().getCount() / 3;
    if (tris > job.doubleSided) {
      simplifyPrimitive(p, { simplifier: MeshoptSimplifier, ratio: job.doubleSided / tris, error: 0.02, lockBorder: false });
      report.simplified = (report.simplified || []).concat(`${mesh.getName()} ${tris}->${p.getIndices().getCount() / 3}`);
    }
    const n = p.getAttribute('POSITION').getCount();
    for (const sem of p.listSemantics()) {
      const a = p.getAttribute(sem), src = a.getArray();
      const out = new src.constructor(src.length * 2); out.set(src); out.set(src, src.length);
      if (sem === 'NORMAL') for (let i = src.length; i < out.length; i++) out[i] = -out[i];
      if (sem === 'TANGENT') for (let i = src.length + 3; i < out.length; i += 4) out[i] = -out[i];
      p.setAttribute(sem, doc.createAccessor().setType(a.getType()).setArray(out).setNormalized(a.getNormalized()).setBuffer(a.getBuffer()));
    }
    const I = p.getIndices(), src = I.getArray(), cnt = src.length;
    const out = new (2 * n > 65535 ? Uint32Array : src.constructor)(cnt * 2); out.set(src);
    for (let t = 0; t < cnt; t += 3) { out[cnt + t] = src[t] + n; out[cnt + t + 1] = src[t + 2] + n; out[cnt + t + 2] = src[t + 1] + n; }
    p.setIndices(doc.createAccessor().setType('SCALAR').setArray(out).setBuffer(I.getBuffer()));
  }

  // 4-5. материалы
  const glowName = new Map();
  for (const m of root.listMaterials()) {
    let f = m.getBaseColorFactor();
    if (/glass|window/i.test(m.getName())) f = [0.012, 0.016, 0.026, 1]; // стёкла тёмные, как в игре
    const srgb = [toSrgb(f[0]), toSrgb(f[1]), toSrgb(f[2])];
    const tex = m.getBaseColorTexture();
    if (!tex) {
      const png = await sharp({ create: { width: 8, height: 8, channels: 3,
        background: { r: Math.round(clamp01(srgb[0]) * 255), g: Math.round(clamp01(srgb[1]) * 255), b: Math.round(clamp01(srgb[2]) * 255) } } }).png().toBuffer();
      const t = doc.createTexture(m.getName() + '_color').setImage(png).setMimeType('image/png');
      m.setBaseColorTexture(t);
      report.baked.push(`${m.getName()} -> solid #${hex(srgb)}`);
    } else if (!isWhite(f)) {
      const img = await sharp(Buffer.from(tex.getImage())).removeAlpha().linear(srgb, [0, 0, 0]).png().toBuffer();
      const t = doc.createTexture(m.getName() + '_color').setImage(img).setMimeType('image/png');
      m.setBaseColorTexture(t);
      report.baked.push(`${m.getName()} -> texture x #${hex(srgb)}`);
    }
    m.setBaseColorFactor([1, 1, 1, 1]);
    const e = m.getEmissiveFactor();
    const strength = Math.max(...e);
    const isRear = /rear/i.test(m.getName()), isGas = /gas|rocket/i.test(m.getName());
    if (strength >= 0.5 || (isRear && strength > 0.1)) {
      let color = e.map(x => x / strength);
      if (isGas) color = [1, 0.55, 0.1];            // выхлоп буста — оранжевый
      else if (isRear) color = [1, 0.12, 0.12];     // задние фонари — красные
      glowName.set(m, 'Glow_' + hex(color));
      report.glow.push(`${m.getName()} -> Glow_${hex(color)}`);
    }
  }

  // имена деталей: по материалу (импорт Roblox называет MeshPart'ы по узлам)
  for (const node of root.listNodes()) {
    const mesh = node.getMesh(); if (!mesh) continue;
    const mat = mesh.listPrimitives()[0]?.getMaterial();
    const name = (mat && glowName.get(mat)) || (mat ? mat.getName() : node.getName()).replace(/[^A-Za-z0-9_]+/g, '_');
    node.setName(name); mesh.setName(name);
  }
  await doc.transform(prune({ keepSolidTextures: true })); // иначе одноцветные текстуры снова станут цветом материала
  await io.write(job.out, doc);
  let maxTris = 0;
  for (const mesh of root.listMeshes()) maxTris = Math.max(maxTris, mesh.listPrimitives().reduce((a, p) => a + p.getIndices().getCount() / 3, 0));
  console.log(job.out, `flipped ${report.flippedTris}/${report.totalTris} triangles, uv added to ${report.uv || 0} parts, max tris per part ${maxTris}`);
  (report.simplified || []).forEach(x => console.log('   simplified', x));
  report.baked.forEach(b => console.log('   bake', b)); report.glow.forEach(g => console.log('   glow', g));
}
function acc3neg(v) { v[0] = -v[0]; v[1] = -v[1]; v[2] = -v[2]; }

// пути: out/*.glb — модели после первого шага (запекание трансформаций в three.js, см. CREDITS.md)
const jobs = [
  { in: 'out/RL_Fennec.glb',  out: 'fixed/Car.glb',         rotate180: true },
  { in: 'out/RL_Dominus.glb', out: 'fixed/Car_Dominus.glb', rotate180: true, doubleSided: 9000 },
  { in: 'out/RL_Ball.glb',    out: 'fixed/Ball.glb',        invertNormals: true },
];
import fs from 'fs';
fs.mkdirSync('fixed', { recursive: true });
for (const j of jobs) await processFile(j);
