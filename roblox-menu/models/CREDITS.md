# Авторы моделей

Модели взяты из открытых репозиториев на GitHub и подготовлены для импорта в Roblox:
трансформации и скелет «запечены» в геометрию, машины повёрнуты передом к +Z (стандарт glTF; импорт Roblox разворачивает их передом к −Z), масштабированы,
тяжёлые меши упрощены до ≤ 18 000 треугольников, текстуры уменьшены до 1024 px.
Для Roblox (он рисует только лицевую сторону и берёт цвет только из текстур) дополнительно:
каждый треугольник развёрнут по своим нормалям, мяч «вывернут» обратно, детали Dominus сделаны двусторонними,
цвета материалов (и цвет свечения) запечены в текстуры без альфа-канала, светящиеся детали названы `Glow_RRGGBB`
(скрипт `tools/prepare-models-for-roblox.mjs`).

| Файл | Оригинал | Автор | Лицензия |
|---|---|---|---|
| `Car.glb` | [Fennec - Rocket League (Titanium White)](https://sketchfab.com/3d-models/fennec-rocket-league-titanium-white-4e7e334dec7c4c81843def71aee66bf8) | [Artik](https://sketchfab.com/artikdev) | [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) |
| `Car_Dominus.glb` | [Rocket League - Dominus Car](https://sketchfab.com/3d-models/rocket-league-dominus-car-bc5832ed1fd047879d3a7b34dccadc3d) | [ROCKET LABS](https://sketchfab.com/vrajesh.gopigari) | [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) |
| `Ball.glb` | [Ball - Rocket League](https://sketchfab.com/3d-models/ball-rocket-league-2c8911aa1dcd4c53bad842f2d354dfe2) | [Jako](https://sketchfab.com/fairlight51) | [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) |
| `Arena.glb` | `RLMap.glb` из [Wocket-Weague](https://github.com/Aebel-Shajan/Wocket-Weague) (убраны пол и разметка, стекло сделано прозрачным) | Aebel Shajan | MIT, см. `LICENSE-Wocket-Weague.txt`; текстуры MetalPlates005/006 — ambientCG, CC0 |

Модели машин и мяча найдены в репозитории [TDSSEC/RL-Air-Guidance](https://github.com/TDSSEC/RL-Air-Guidance)
и [Aebel-Shajan/Wocket-Weague](https://github.com/Aebel-Shajan/Wocket-Weague); лицензия и автор записаны в метаданных самих файлов.

Лицензия CC BY 4.0 требует указать авторов: добавьте строку с авторами в описание игры, например
«Модели: Fennec — Artik, Dominus — ROCKET LABS, мяч — Jako (CC BY 4.0, Sketchfab)».

Rocket League, Fennec, Dominus — торговые марки Psyonix / Epic Games. Это фанатские модели,
не связанные с Psyonix/Epic.
