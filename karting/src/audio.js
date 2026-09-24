// Звук целиком синтезируется Web Audio: двухтактный мотор, шины, эффекты, музыка.

const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.vol = { master: 0.8, music: 0.45, sfx: 0.9 };
    this.muted = false;
    this.musicMode = null;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4; comp.attack.value = 0.005; comp.release.value = 0.2;
    this.master.connect(comp).connect(ctx.destination);
    this.music = ctx.createGain(); this.music.connect(this.master);
    this.sfx = ctx.createGain(); this.sfx.connect(this.master);
    this.applyVolumes();

    const len = ctx.sampleRate * 2;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    this.engines = [this.makeEngine(1), this.makeEngine(0.55), this.makeEngine(0.55)];
    // шины
    this.skid = this.loopNoise('bandpass', 1900, 3);
    this.wind = this.loopNoise('lowpass', 420, 0.7);
    this.rumble = this.loopNoise('lowpass', 140, 2);
    this.startSequencer();
  }

  applyVolumes() {
    if (!this.ctx) return;
    const m = this.muted ? 0 : this.vol.master;
    this.master.gain.setTargetAtTime(m, this.ctx.currentTime, 0.05);
    this.music.gain.setTargetAtTime(this.vol.music * 0.55, this.ctx.currentTime, 0.05);
    this.sfx.gain.setTargetAtTime(this.vol.sfx, this.ctx.currentTime, 0.05);
  }
  setVolumes(v) { Object.assign(this.vol, v); this.applyVolumes(); }
  toggleMute() { this.muted = !this.muted; this.applyVolumes(); return this.muted; }

  loopNoise(type, freq, q) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf; src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.value = 0;
    src.connect(f).connect(g).connect(this.sfx);
    src.start();
    return { f, g };
  }

  // Двухтактный мотор: вспышка каждый оборот, частота = об/мин ÷ 60.
  // Пила + меандр октавой ниже через резонансный фильтр, плюс «звон» выхлопа.
  makeEngine(level) {
    const ctx = this.ctx;
    const o1 = ctx.createOscillator(); o1.type = 'sawtooth';
    const o2 = ctx.createOscillator(); o2.type = 'square';
    const o3 = ctx.createOscillator(); o3.type = 'sawtooth';
    const lfo = ctx.createOscillator(); lfo.frequency.value = 23;
    const lfoG = ctx.createGain(); lfoG.gain.value = 2.2;
    lfo.connect(lfoG); lfoG.connect(o1.frequency); lfoG.connect(o2.frequency);
    const g1 = ctx.createGain(); g1.gain.value = 0.5;
    const g2 = ctx.createGain(); g2.gain.value = 0.28;
    const g3 = ctx.createGain(); g3.gain.value = 0.12;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.Q.value = 5; f.frequency.value = 900;
    const ring = ctx.createBiquadFilter(); ring.type = 'bandpass'; ring.Q.value = 8; ring.frequency.value = 2200;
    const out = ctx.createGain(); out.gain.value = 0;
    o1.connect(g1).connect(f); o2.connect(g2).connect(f); o3.connect(g3).connect(ring).connect(out);
    f.connect(out).connect(this.sfx);
    o1.start(); o2.start(); o3.start(); lfo.start();
    return { o1, o2, o3, f, ring, out, level };
  }

  setEngine(i, rpm, rpmMax, throttle, vol) {
    if (!this.ctx) return;
    const e = this.engines[i];
    const t = this.ctx.currentTime;
    const x = rpmMax ? Math.min(1.05, rpm / rpmMax) : 0;
    const fq = Math.max(30, rpm / 60);
    e.o1.frequency.setTargetAtTime(fq, t, 0.02);
    e.o2.frequency.setTargetAtTime(fq * 0.5, t, 0.02);
    e.o3.frequency.setTargetAtTime(fq * 3, t, 0.02);
    e.f.frequency.setTargetAtTime(420 + x * 2600 + throttle * 900, t, 0.03);
    e.ring.frequency.setTargetAtTime(1500 + x * 2600, t, 0.05);
    e.out.gain.setTargetAtTime(vol * e.level * (0.07 + throttle * 0.08 + x * 0.05), t, 0.04);
  }
  // визг шин: чем сильнее срыв, тем выше и громче
  setSkid(a, slide = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.skid.g.gain.setTargetAtTime(a * 0.24, t, 0.04);
    this.skid.f.frequency.setTargetAtTime(1300 + slide * 1500, t, 0.05);
  }
  setWind(a) { if (this.ctx) this.wind.g.gain.setTargetAtTime(a * 0.18, this.ctx.currentTime, 0.1); }
  setRumble(a) { if (this.ctx) this.rumble.g.gain.setTargetAtTime(a * 0.35, this.ctx.currentTime, 0.03); }
  silenceEngines() {
    if (!this.ctx) return;
    for (let i = 0; i < this.engines.length; i++) this.engines[i].out.gain.setTargetAtTime(0, this.ctx.currentTime, 0.08);
    this.setSkid(0); this.setWind(0); this.setRumble(0);
  }

  // ---------- одноразовые звуки ----------
  tone(type, f0, f1, dur, vol, when = 0, dest = null) {
    const ctx = this.ctx; const t = ctx.currentTime + when;
    const o = ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(dest || this.sfx);
    o.start(t); o.stop(t + dur + 0.05);
  }
  noise(type, f0, f1, dur, vol, q = 1, when = 0, dest = null) {
    const ctx = this.ctx; const t = ctx.currentTime + when;
    const s = ctx.createBufferSource(); s.buffer = this.noiseBuf;
    s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t);
    f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(dest || this.sfx);
    s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }

  play(name, level = 0, vol = 1) {
    if (!this.ctx || vol <= 0.01) return;
    const v = vol;
    switch (name) {
      case 'light': this.tone('square', 520, 520, 0.22, 0.12 * v); break;
      case 'go': this.tone('square', 1040, 1040, 0.55, 0.14 * v); this.tone('sine', 520, 520, 0.55, 0.12 * v); break;
      case 'hop': this.noise('lowpass', 900, 200, 0.12, 0.25 * v, 1); break;
      case 'driftLevel': this.tone('triangle', 500 + level * 260, 900 + level * 300, 0.12, 0.16 * v); break;
      case 'miniturbo':
        this.noise('bandpass', 400, 3200, 0.45 + level * 0.12, 0.35 * v, 2);
        this.tone('sawtooth', 180, 420, 0.35, 0.06 * v); break;
      case 'nitro':
        this.noise('bandpass', 300, 2600, 0.9, 0.45 * v, 1.5);
        this.tone('sawtooth', 90, 260, 0.8, 0.09 * v); break;
      case 'pad': this.noise('bandpass', 600, 3500, 0.5, 0.3 * v, 2); this.tone('triangle', 600, 1200, 0.25, 0.08 * v); break;
      case 'pickup': [0, 0.06, 0.12].forEach((w, i) => this.tone('square', 660 * Math.pow(1.26, i), 660 * Math.pow(1.26, i), 0.08, 0.08 * v, w)); break;
      case 'tick': this.tone('square', 1500 + Math.random() * 400, 1500, 0.03, 0.04 * v); break;
      case 'itemReady': this.tone('triangle', 1318, 1318, 0.2, 0.14 * v); this.tone('triangle', 1760, 1760, 0.25, 0.1 * v, 0.07); break;
      case 'rocket': this.noise('bandpass', 2400, 500, 0.7, 0.4 * v, 1.2); this.tone('sawtooth', 700, 180, 0.5, 0.07 * v); break;
      case 'explosion':
        this.noise('lowpass', 2200, 90, 1.1, 0.7 * v, 0.7);
        this.tone('sine', 110, 35, 0.6, 0.5 * v); break;
      case 'drop': this.noise('lowpass', 500, 120, 0.3, 0.3 * v); this.tone('sine', 300, 120, 0.2, 0.15 * v); break;
      case 'slip': this.tone('triangle', 900, 200, 0.6, 0.14 * v); this.noise('bandpass', 2000, 800, 0.5, 0.2 * v, 2); break;
      case 'shield': this.tone('sine', 400, 1600, 0.5, 0.12 * v); this.tone('triangle', 800, 2400, 0.5, 0.06 * v, 0.05); break;
      case 'shieldBreak': this.noise('highpass', 3000, 6000, 0.35, 0.3 * v); this.tone('triangle', 1800, 400, 0.3, 0.1 * v); break;
      case 'hit': this.tone('sawtooth', 600, 90, 0.8, 0.12 * v); break;
      case 'wall':
        this.noise('lowpass', 1400, 150, 0.25, Math.min(0.6, 0.12 + level * 0.04) * v, 0.8);
        this.tone('sine', 120, 50, 0.2, Math.min(0.5, 0.1 + level * 0.03) * v); break;
      case 'bump': this.noise('lowpass', 900, 120, 0.18, 0.3 * v); this.tone('sine', 160, 60, 0.15, 0.25 * v); break;
      case 'lap': this.tone('triangle', 988, 988, 0.15, 0.14 * v); this.tone('triangle', 1318, 1318, 0.3, 0.14 * v, 0.12); break;
      case 'finalLap': [0, 0.12, 0.24, 0.36].forEach((w, i) => this.tone('square', mtof(76 + [0, 4, 7, 12][i]), mtof(76 + [0, 4, 7, 12][i]), 0.18, 0.08 * v, w)); break;
      case 'best': [0, 0.07, 0.14].forEach((w, i) => this.tone('triangle', mtof(84 + i * 3), mtof(84 + i * 3), 0.2, 0.1 * v, w)); break;
      case 'finish':
        [[72, 0], [76, 0.14], [79, 0.28], [84, 0.42], [79, 0.62], [84, 0.76]].forEach(([m, w]) => {
          this.tone('square', mtof(m), mtof(m), 0.22, 0.09 * v, w);
          this.tone('triangle', mtof(m - 12), mtof(m - 12), 0.22, 0.1 * v, w);
        }); break;
      case 'ui': this.tone('triangle', 880, 1320, 0.07, 0.08 * v); break;
      case 'uiMove': this.tone('triangle', 660, 660, 0.04, 0.05 * v); break;
      case 'wrong': this.tone('square', 220, 220, 0.2, 0.08 * v); break;
    }
  }

  // ---------- музыка: синтвейв-петля ----------
  startSequencer() {
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.1;
    this.bpm = 124;
    const chords = [[45, 'm'], [41, 'M'], [48, 'M'], [43, 'M']];
    this.chords = chords.map(([r, q]) => ({ root: r, tones: q === 'm' ? [0, 3, 7] : [0, 4, 7] }));
    this.timer = setInterval(() => this.schedule(), 25);
  }
  setMusic(mode) { this.musicMode = mode; }
  schedule() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const spb = 60 / this.bpm / 4;
    while (this.nextTime < this.ctx.currentTime + 0.12) {
      if (this.musicMode) this.playStep(this.step, this.nextTime);
      this.nextTime += spb;
      this.step = (this.step + 1) % 64;
    }
  }
  playStep(step, t) {
    const ctx = this.ctx, dest = this.music;
    const bar = Math.floor(step / 16), s = step % 16;
    const ch = this.chords[bar];
    const race = this.musicMode === 'race';
    const when = t - ctx.currentTime;
    // бас восьмыми
    if (s % 2 === 0) {
      const m = ch.root + (s % 8 === 6 ? 12 : 0);
      this.synth('sawtooth', mtof(m), 0.2, race ? 0.16 : 0.1, when, 520, dest);
    }
    // арпеджио
    if (race || s % 2 === 0) {
      const pat = [0, 1, 2, 1, 0, 2, 1, 2];
      const tone = ch.tones[pat[s % 8]] + ch.root + 24 + (s >= 8 ? 12 : 0);
      this.synth('square', mtof(tone), 0.1, race ? 0.035 : 0.03, when, 2400, dest);
    }
    // пэд на первую долю такта
    if (s === 0) for (const tn of ch.tones) this.synth('triangle', mtof(ch.root + 12 + tn), 1.9, 0.035, when, 1200, dest);
    if (!race) return;
    if (s % 4 === 0) { // бочка
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.15);
      g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
      o.connect(g).connect(dest); o.start(t); o.stop(t + 0.25);
    }
    if (s === 4 || s === 12) this.noise('bandpass', 1800, 900, 0.16, 0.22, 0.8, when, dest);
    if (s % 2 === 1) this.noise('highpass', 8000, 9000, 0.05, 0.06, 0.5, when, dest);
  }
  synth(type, f, dur, vol, when, cutoff, dest) {
    const ctx = this.ctx; const t = ctx.currentTime + when;
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = f;
    const fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = cutoff; fl.Q.value = 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(fl).connect(g).connect(dest);
    o.start(t); o.stop(t + dur + 0.05);
  }
}
