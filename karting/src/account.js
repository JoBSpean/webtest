import * as Online from './online.js';
const $ = (id) => document.getElementById(id);

export class Account {
  constructor(app) {
    this.app = app;
    this.mode = 'login';
    this.owner = null;
    const button = document.createElement('button');
    button.id = 'accountBtn'; button.className = 'tb-btn accent'; button.textContent = 'Войти / регистрация';
    $('topbar').prepend(button);
    const dialog = document.createElement('dialog');
    dialog.id = 'accountDialog';
    dialog.setAttribute('aria-labelledby', 'accountTitle');
    dialog.innerHTML = `<form id="accountForm">
      <div class="account-heading"><h2 id="accountTitle">Вход пилота</h2><button type="button" id="accountClose" class="tb-btn" aria-label="Закрыть">✕</button></div>
      <p id="accountHint">Гость играет локально. Войдите, чтобы сохранять рекорды в аккаунте и общей таблице.</p>
      <label class="field" id="accountNameField" hidden>Имя в рейтинге<input id="accountName" maxlength="30" autocomplete="nickname"></label>
      <label class="field" id="accountEmailField">Почта<input id="accountEmail" type="email" autocomplete="email" required></label>
      <label class="field" id="accountPasswordField">Пароль<input id="accountPassword" type="password" minlength="8" autocomplete="current-password" required></label>
      <p id="accountMessage" role="status" aria-live="polite"></p>
      <div class="account-actions"><button id="accountSubmit" class="tb-btn accent" type="submit">Войти</button><button id="accountSwitch" class="tb-btn" type="button">Создать аккаунт</button><button id="accountReset" class="tb-btn" type="button">Забыли пароль?</button></div>
      <button id="accountLogout" class="tb-btn" type="button" hidden>Выйти в гостевой режим</button>
    </form>`;
    document.body.append(dialog);
    button.onclick = () => { if (app.state === 'race') app.pause(); app.input.down.clear(); app.input.pressed.clear(); this.render(); dialog.showModal(); };
    $('accountClose').onclick = () => dialog.close();
    dialog.addEventListener('close', () => { $('accountPassword').value = ''; });
    $('accountSwitch').onclick = () => { this.mode = this.mode === 'login' ? 'signup' : 'login'; this.render(); };
    $('accountReset').onclick = () => {
      if (window.APEX_ONLINE?.emailRecoveryEnabled === false) {
        this.message('Восстановление пароля по почте пока недоступно. Сохраните пароль в надёжном месте.');
        return;
      }
      this.mode = 'reset'; this.render();
    };
    $('accountForm').onsubmit = (event) => { event.preventDefault(); this.submit(); };
    $('accountLogout').onclick = async () => {
      const { error } = await Online.getClient().auth.signOut({ scope: 'local' });
      if (error) this.message('Не удалось выйти. Попробуйте ещё раз.');
      else { this.mode = 'login'; this.render(); }
    };
    Online.watchAuth((user, event) => this.changed(user, event));
    addEventListener('online', () => this.sync());
    setInterval(() => { if (this.owner) this.sync(); }, 60000);
  }
  message(text) { $('accountMessage').textContent = text; }
  setBusy(busy) {
    this.busy = busy;
    for (const id of ['accountSubmit', 'accountSwitch', 'accountReset', 'accountLogout']) $(id).disabled = busy || !Online.onlineEnabled();
  }
  render() {
    const signed = !!Online.currentUser();
    const recovery = this.mode === 'recovery';
    const profile = signed && !recovery;
    const ready = Online.onlineEnabled();
    $('accountTitle').textContent = profile ? 'Аккаунт пилота' : { login: 'Вход пилота', signup: 'Регистрация', reset: 'Сброс пароля', recovery: 'Новый пароль' }[this.mode];
    $('accountNameField').hidden = profile || this.mode !== 'signup';
    $('accountName').required = !profile && this.mode === 'signup';
    $('accountEmailField').hidden = profile || recovery;
    $('accountEmail').required = !profile && !recovery;
    $('accountPasswordField').hidden = profile || this.mode === 'reset';
    $('accountPassword').required = !profile && this.mode !== 'reset';
    $('accountPassword').autocomplete = this.mode === 'login' ? 'current-password' : 'new-password';
    $('accountSubmit').hidden = profile;
    this.setBusy(!!this.busy);
    $('accountSubmit').textContent = { login: 'Войти', signup: 'Зарегистрироваться', reset: 'Отправить письмо', recovery: 'Сохранить пароль' }[this.mode];
    $('accountSwitch').hidden = profile || recovery;
    $('accountSwitch').textContent = this.mode === 'login' ? 'Создать аккаунт' : 'Вернуться ко входу';
    $('accountReset').hidden = profile || this.mode !== 'login';
    $('accountLogout').hidden = !profile;
    $('accountHint').textContent = profile ? 'Ваши новые лучшие круги сохраняются в аккаунте и видны всем. Гостевые результаты остаются отдельно.' : 'Гость играет локально. После входа новые рекорды попадут в общую таблицу.';
    this.message(ready ? '' : 'Онлайн-вход пока не подключён. Гостевой режим доступен.');
  }
  async submit() {
    const db = Online.getClient(); if (!db || this.busy) return;
    this.setBusy(true);
    const mode = this.mode;
    const email = $('accountEmail').value.trim(), password = $('accountPassword').value;
    const redirectTo = location.origin + location.pathname;
    try {
      let result;
      if (mode === 'signup') result = await db.auth.signUp({ email, password, options: { data: { display_name: $('accountName').value.trim() }, emailRedirectTo: redirectTo } });
      else if (mode === 'reset') result = await db.auth.resetPasswordForEmail(email, { redirectTo });
      else if (mode === 'recovery') result = await db.auth.updateUser({ password });
      else result = await db.auth.signInWithPassword({ email, password });
      if (result.error) throw result.error;
      $('accountPassword').value = '';
      if (mode === 'signup' && !result.data.session) this.message('Проверьте почту: перейдите по ссылке подтверждения, затем войдите.');
      else if (mode === 'reset') this.message('Если аккаунт существует, на почту придёт ссылка для смены пароля.');
      else { this.mode = 'login'; $('accountDialog').close(); }
    } catch (error) {
      const messages = { invalid_credentials: 'Неверная почта или пароль.', email_not_confirmed: 'Сначала подтвердите почту по ссылке из письма.', user_already_exists: 'Аккаунт уже существует. Попробуйте войти.', over_email_send_rate_limit: 'Слишком много писем. Попробуйте позже.', weak_password: 'Выберите более надёжный пароль.' };
      this.message(messages[error.code] || 'Не удалось выполнить запрос. Проверьте подключение и попробуйте ещё раз.');
    } finally { this.setBusy(false); }
  }
  async changed(user, event) {
    const id = user?.id || null;
    if (id !== this.owner) {
      if (this.app.race && this.app.race.mode !== 'attract') this.app.quitToMenu();
      this.owner = id;
      this.app.store.setAccount(id);
      if (id) {
        if (!this.guestName) this.guestName = $('playerName').value;
        $('playerName').value = user.user_metadata?.display_name || 'Игрок';
      } else if (this.guestName) $('playerName').value = this.guestName;
      this.app.updateWelcome();
      this.app.lab.refreshBoards();
    }
    $('accountBtn').textContent = id ? 'Мой аккаунт' : 'Войти / регистрация';
    this.app.lab.applyAdminUI();
    if (event === 'PASSWORD_RECOVERY') { this.mode = 'recovery'; this.render(); if (!$('accountDialog').open) $('accountDialog').showModal(); }
    else if ($('accountDialog').open) this.render();
    if (id) await this.sync();
  }
  async sync() {
    const owner = this.owner;
    if (!owner || this.syncing) return;
    this.syncing = true;
    try {
      for (const [key, record] of Object.entries(this.app.store.records)) {
        if (this.owner !== owner) return;
        if (!record.pendingTime) continue;
        const pending = record.pendingTime;
        const [track, cls] = key.split(':');
        const sent = await Online.pushScore(owner, track, cls, record.pendingName, pending);
        if (this.owner !== owner) return;
        if (sent && record.pendingTime === pending) delete record.pendingTime;
        this.app.store.save();
      }
      const rows = await Online.pullPersonal(owner);
      if (this.owner !== owner) return;
      for (const row of rows) {
        const rec = this.app.store.record(row.track + ':' + row.cls);
        if (rec.bestLap == null || row.time < rec.bestLap) Object.assign(rec, { bestLap: row.time, ghost: null, trace: null });
        rec.cloudName = row.name; rec.cloudDate = row.date;
      }
      this.app.store.save(); this.app.updateWelcome(); this.app.lab.refreshBoards();
      this.app.lab.setCloud('online');
      if (!$('garage').hidden) this.app.lab.cloudPullBoards();
    } catch { if (this.owner === owner) this.app.lab.setCloud('error', 'рекорд сохранён локально; повторим отправку'); }
    finally { this.syncing = false; }
  }
  lap(key, time) {
    if (!this.owner || this.owner !== Online.currentUser()?.id) return;
    const record = this.app.store.record(key);
    record.pendingTime = Math.min(record.pendingTime ?? Infinity, time);
    record.pendingName = this.app.playerName();
    this.app.store.save();
    this.sync();
  }
}
