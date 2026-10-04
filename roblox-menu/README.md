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
3. Перетащите её в `ReplicatedStorage > MenuAssets`. Имя машины может быть любым (Fennec, Dominus...). Мяч должен называться `Ball...`, арена — `Arena...`.
4. Повторите для `Ball.glb` и `Arena.glb`.
5. Нажмите **Play**.

Скрипт сам подгоняет размер, ставит модели на место и делает стекло арены прозрачным.
Машин можно положить несколько: кнопка **GARAGE** в меню листает их (первой показывается та, чьё имя начинается с `Car`).
Если машинка стоит задом или боком — добавьте ей атрибут `Yaw` (число: 180 или 90).
Скрипты внутри моделей удаляются автоматически.

## Что есть
- Фон: ночной стадион (трава Terrain, разметка, бусты, ворота, стеклянные стены, трибуны, табло, прожекторы), размыт как в игре.
- Главное меню слева: PLAY, GARAGE (листает машины), ITEM SHOP, ROCKET PASS, CAREER, EXTRAS, SETTINGS.
- PLAY: карточки CASUAL, COMPETITIVE, ARCADE, TOURNAMENTS, PRIVATE MATCH, PLAY OFFLINE.
- CASUAL / COMPETITIVE / ARCADE открывают экран плейлистов с вкладками (Q / E): у COMPETITIVE значки рангов,
  MULTIPLE SELECTION (до 6 плейлистов), FIND MATCH с плашкой поиска. Hoops в рейтинге нет.
- Управление: мышь, стрелки/WASD, Enter, Backspace (назад), Q/E (вкладки), F (поиск), M (несколько плейлистов), геймпад.

## Что где менять
Всё, что обычно хочется поменять, собрано в начале `MainMenu.client.lua` (там же шпаргалка). Ищите Ctrl+F:

| Что | Где |
|---|---|
| пункты главного меню | `MENU` |
| карточки экрана PLAY (название, подпись, цвет, какую вкладку открывают) | `MODES` |
| вкладки и подпись под ними | `TAB_ORDER`, `TAB_INFO` |
| плейлисты и ранги (`rank`, `tier`, `division`) | `PLAYLISTS` |
| цвета значков рангов | `RANKS` |
| цвета меню | `local C =` |
| где стоит и куда смотрит машина | `CAR_X`, `CAR_Z`, `CAR_YAW` |
| камера | `CAM_POS`, `CAM_LOOK` |

## Как обновлять, не перекидывая модели
Модели импортируются **один раз** и остаются в вашем месте (`ReplicatedStorage > MenuAssets`).
При обновлении меню меняется только скрипт: откройте `StarterPlayer > StarterPlayerScripts > MainMenu`,
Ctrl+A, вставьте новый код. Модели трогать не нужно.

Чтобы получать полностью готовый файл: сохраните своё место как `.rbxlx`
(File → Save to File As → тип файла `.rbxlx`) и пришлите его — новые версии будут приходить уже в вашем файле, с моделями.

## Предпросмотр без Roblox
`tools/preview/run.sh MainMenu.client.lua <папка>` запускает настоящий скрипт с имитацией Roblox и сохраняет картинки
экранов (подробности в `tools/preview/README.md`).
