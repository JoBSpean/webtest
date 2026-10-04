# Главное меню в стиле нового Rocket League для Roblox

**Быстрый запуск:** скачайте `RocketMenu.rbxlx`, откройте двойным кликом (запустится Roblox Studio) и нажмите **Play**.

Чтобы добавить меню в свою игру, вставьте `MainMenu.client.lua` как LocalScript в `StarterPlayer > StarterPlayerScripts`.
Для лучшей картинки: `Lighting > Technology = Future`, `Workspace > Terrain > Decoration = true` и `GrassLength = 0.1` (короткая объёмная трава).

## Модели в стиле Rocket League (папка `models/`)
- `Car.glb` — Fennec, `Car_Dominus.glb` — Dominus, `Ball.glb` — мяч, `Arena.glb` — купол арены (стены, пандусы, ворота).
- Авторы и лицензии: `models/CREDITS.md` (CC BY 4.0 требует указать авторов в описании игры).

Как вставить (один раз, около 2 минут):
1. Откройте `RocketMenu.rbxlx` в Roblox Studio.
2. Вкладка **Home** (или **Model**) → **Import 3D** → выберите `Car.glb` → **Import**. Модель появится в Workspace.
3. Перетащите её в `ReplicatedStorage > MenuAssets`. Имя должно начинаться с `Car` (так и будет после импорта).
4. Повторите для `Ball.glb` и `Arena.glb`.
5. Нажмите **Play**.

Скрипт сам подгоняет размер, ставит модели на место и делает стекло арены прозрачным.
Если машинка стоит задом или боком — добавьте ей атрибут `Yaw` (число: 180 или 90).
Скрипты внутри моделей удаляются автоматически.

## Что есть
- Фон: ночной стадион (трава Terrain, разметка, бусты, ворота, стеклянные стены, трибуны, табло, прожекторы), размыт как в игре.
- Мяч с панелями (пятиугольники и шестиугольники), тестовая машинка.
- Меню слева: PLAY, GARAGE, ITEM SHOP, ROCKET PASS, CAREER, EXTRAS, SETTINGS.
- PLAY открывает экран режимов: CASUAL, COMPETITIVE, TOURNAMENTS, PRIVATE MATCH, OFFLINE.
- Управление: мышь, стрелки/WASD, Enter, Backspace (назад), геймпад.
