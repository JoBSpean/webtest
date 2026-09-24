// Клавиатура, геймпад и сенсорные кнопки сводятся к одному состоянию.
import { clamp } from './util.js';

const KEYS = {
  left: ['ArrowLeft', 'KeyA'],
  right: ['ArrowRight', 'KeyD'],
  gas: ['ArrowUp', 'KeyW'],
  brake: ['ArrowDown', 'KeyS'],
  drift: ['Space', 'ShiftLeft', 'ShiftRight'],
  item: ['KeyE', 'KeyX', 'ControlLeft', 'ControlRight', 'Enter'],
  look: ['KeyC'],
  camera: ['KeyV'],
  reset: ['KeyR'],
  pause: ['Escape', 'KeyP'],
  mute: ['KeyM'],
};

export class Input {
  constructor() {
    this.down = new Set();
    this.pressed = new Set();
    this.touch = { left: false, right: false, brake: false, drift: false, item: false, gas: false };
    this.touchPressed = new Set();
    this.touchActive = false;
    this.padPrev = [];
    this.gamepadActive = false;
    this.state = { steer: 0, throttle: 0, brake: 0, drift: false, driftPressed: false, item: false, look: false, camera: false, reset: false, pause: false, mute: false };
    addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
      if (!e.repeat) this.pressed.add(e.code);
      this.down.add(e.code);
      if (this.captureKeys && ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
      this.gamepadActive = false;
    });
    addEventListener('keyup', (e) => this.down.delete(e.code));
    addEventListener('blur', () => { this.down.clear(); });
    this.captureKeys = false;
  }

  is(action) { return KEYS[action].some((k) => this.down.has(k)); }
  was(action) { return KEYS[action].some((k) => this.pressed.has(k)); }

  bindTouch(root) {
    const set = (k, v) => {
      if (v && !this.touch[k]) this.touchPressed.add(k);
      this.touch[k] = v;
    };
    root.querySelectorAll('[data-touch]').forEach((el) => {
      const k = el.dataset.touch;
      const on = (e) => { e.preventDefault(); set(k, true); el.classList.add('on'); this.touchActive = true; };
      const off = (e) => { e.preventDefault(); set(k, false); el.classList.remove('on'); };
      el.addEventListener('pointerdown', on);
      el.addEventListener('pointerup', off);
      el.addEventListener('pointercancel', off);
      el.addEventListener('pointerleave', off);
    });
  }

  // читаем все источники; вызывать раз в кадр
  poll(autoGas = false) {
    const st = this.state;
    let steer = 0, gas = 0, brake = 0, drift = false, driftP = false, item = false, look = false;
    if (this.is('left')) steer -= 1;
    if (this.is('right')) steer += 1;
    if (this.is('gas')) gas = 1;
    if (this.is('brake')) brake = 1;
    if (this.is('drift')) drift = true;
    if (this.was('drift')) driftP = true;
    if (this.was('item')) item = true;
    if (this.is('look')) look = true;
    let camera = this.was('camera'), reset = this.was('reset'), pause = this.was('pause'), mute = this.was('mute');

    // геймпад (стандартная раскладка)
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) {
      if (!p || p.mapping !== 'standard') continue;
      const b = (i) => p.buttons[i] && p.buttons[i].pressed;
      const bv = (i) => (p.buttons[i] ? p.buttons[i].value : 0);
      const prev = this.padPrev[p.index] || [];
      const edge = (i) => b(i) && !prev[i];
      const ax = p.axes[0] || 0;
      const any = Math.abs(ax) > 0.15 || p.buttons.some((x) => x.pressed);
      if (any) this.gamepadActive = true;
      if (Math.abs(ax) > 0.12) steer += Math.sign(ax) * ((Math.abs(ax) - 0.12) / 0.88);
      if (b(14)) steer -= 1;
      if (b(15)) steer += 1;
      gas = Math.max(gas, bv(7), b(0) ? 1 : 0);
      brake = Math.max(brake, bv(6), b(2) ? 1 : 0);
      if (b(5) || b(4) || b(1)) drift = true;
      if (edge(5) || edge(4) || edge(1)) driftP = true;
      if (edge(3)) item = true;
      if (b(10) || b(11)) look = true;
      if (edge(8)) camera = true;
      if (edge(9)) pause = true;
      this.padPrev[p.index] = p.buttons.map((x) => x.pressed);
    }

    // сенсорные кнопки
    const t = this.touch;
    if (t.left) steer -= 1;
    if (t.right) steer += 1;
    if (t.brake) brake = 1;
    if (t.drift) drift = true;
    if (this.touchPressed.has('drift')) driftP = true;
    if (this.touchPressed.has('item')) item = true;
    if (this.touchPressed.has('pause')) pause = true;
    if (autoGas && !t.brake) gas = 1;
    if (t.gas) gas = 1;

    st.steer = clamp(steer, -1, 1);
    st.throttle = gas;
    st.brake = brake;
    st.drift = drift;
    st.driftPressed = driftP;
    st.item = item;
    st.look = look;
    st.camera = camera; st.reset = reset; st.pause = pause; st.mute = mute;
    this.pressed.clear();
    this.touchPressed.clear();
    return st;
  }

  // для меню: навигация геймпадом
  pollMenu() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const out = { up: false, down: false, left: false, right: false, ok: false, back: false };
    for (const p of pads) {
      if (!p || p.mapping !== 'standard') continue;
      const prev = this.menuPrev || {};
      const cur = {
        up: p.buttons[12]?.pressed || p.axes[1] < -0.6,
        down: p.buttons[13]?.pressed || p.axes[1] > 0.6,
        left: p.buttons[14]?.pressed || p.axes[0] < -0.6,
        right: p.buttons[15]?.pressed || p.axes[0] > 0.6,
        ok: p.buttons[0]?.pressed,
        back: p.buttons[1]?.pressed || p.buttons[9]?.pressed,
      };
      for (const k in cur) if (cur[k] && !prev[k]) out[k] = true;
      this.menuPrev = cur;
    }
    return out;
  }
}
