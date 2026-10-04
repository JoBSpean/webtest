# Главное меню в стиле нового Rocket League для Roblox

**Быстрый запуск:** скачайте `RocketMenu.rbxlx`, откройте двойным кликом (запустится Roblox Studio) и нажмите **Play**.

Чтобы добавить меню в свою игру, вставьте `MainMenu.client.lua` как LocalScript в `StarterPlayer > StarterPlayerScripts`.
Для самого красивого света поставьте `Lighting > Technology = Future`.

- Фон: ночной стадион (поле, разметка, бусты, ворота, стеклянные стены, трибуны, табло, прожекторы), размыт как в игре.
- Тестовая машинка по центру: позже заменяется на машину игрока.
- Меню слева: PLAY, GARAGE, ITEM SHOP, ROCKET PASS, CAREER, EXTRAS, SETTINGS.
- PLAY открывает экран режимов: CASUAL, COMPETITIVE, TOURNAMENTS, PRIVATE MATCH, OFFLINE.
- Управление: мышь, стрелки/WASD, Enter, Backspace (назад), геймпад.
- Закрыть меню: `_G.CloseMainMenu()`.
