# Главное меню в стиле нового Rocket League для Roblox

**Быстрый запуск:** скачайте `RocketMenu.rbxlx`, откройте двойным кликом (запустится Roblox Studio) и нажмите **Play**.

Чтобы добавить меню в свою игру, вставьте `MainMenu.client.lua` как LocalScript в `StarterPlayer > StarterPlayerScripts`.
Для лучшей картинки: `Lighting > Technology = Future`, `Workspace > Terrain > Decoration = true` и `GrassLength = 0.1` (короткая объёмная трава).

## Свои модели (машинка, мяч, стадион)
1. В Roblox Studio откройте **Toolbox** (Вид → Toolbox) или импортируйте свою модель через **File → Import 3D**.
2. Перетащите модель в `ReplicatedStorage > MenuAssets` и переименуйте:
   - `Car` — машинка (сама подгоняется по размеру и ставится на поле);
   - `Ball` — мяч;
   - `Arena` — стадион (заменяет встроенный; атрибут `Length` задаёт его длину, по умолчанию 200).
3. Если модель стоит боком — добавьте ей атрибут `Yaw` (число, на сколько градусов повернуть).

Скрипты внутри моделей удаляются автоматически (в бесплатных моделях бывают вредные скрипты).

Из другого скрипта: `_G.SetMenuCar(model)` — поставить машину игрока, `_G.CloseMainMenu()` — закрыть меню.

## Что есть
- Фон: ночной стадион (трава Terrain, разметка, бусты, ворота, стеклянные стены, трибуны, табло, прожекторы), размыт как в игре.
- Мяч с панелями (пятиугольники и шестиугольники), тестовая машинка.
- Меню слева: PLAY, GARAGE, ITEM SHOP, ROCKET PASS, CAREER, EXTRAS, SETTINGS.
- PLAY открывает экран режимов: CASUAL, COMPETITIVE, TOURNAMENTS, PRIVATE MATCH, OFFLINE.
- Управление: мышь, стрелки/WASD, Enter, Backspace (назад), геймпад.
