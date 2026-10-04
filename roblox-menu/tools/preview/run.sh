#!/usr/bin/env bash
# Offline preview of the Roblox menu LocalScript: runs it against a mocked Roblox API
# and renders one 1920x1080 PNG per scenario (scenarios are listed in driver.luau).
#
#   tools/preview/run.sh <path/to/MainMenu.client.lua> <outdir> [scenario ...]
#
# Needs (see README.md):  LUAU                  native luau CLI
#                         PREVIEW_NODE_MODULES  node_modules with playwright-core, three, @fontsource/montserrat
#                         CHROMIUM              chromium binary (default /opt/pw-browsers/chromium)
#                         PREVIEW_MODELS        folder with the .glb models (default: <script dir>/models)
# They can also be put into tools/preview/.env (git-ignored).
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
[ -f "$HERE/.env" ] && . "$HERE/.env"

if [ $# -lt 2 ]; then
  echo "usage: $0 <MainMenu.client.lua> <outdir> [scenario ...]" >&2
  exit 2
fi
SCRIPT="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
OUT="$2"; shift 2
mkdir -p "$OUT"
OUT="$(cd "$OUT" && pwd)"
WORK="$OUT/.work"
mkdir -p "$WORK"

LUAU="${LUAU:-$(command -v luau || true)}"
[ -x "$LUAU" ] || { echo "luau CLI not found: set LUAU=/path/to/luau (https://github.com/luau-lang/luau/releases)" >&2; exit 1; }
MODELS="${PREVIEW_MODELS:-$(dirname "$SCRIPT")/models}"
[ -d "$MODELS" ] || MODELS="$(cd "$HERE/../.." && pwd)/models"   # the repo's roblox-menu/models
export PREVIEW_NODE_MODULES="${PREVIEW_NODE_MODULES:-}"
export CHROMIUM="${CHROMIUM:-/opt/pw-browsers/chromium}"
VIEW_W="${PREVIEW_WIDTH:-1920}"; VIEW_H="${PREVIEW_HEIGHT:-1080}"

# 1. sizes/names of the meshes inside every .glb (stand-ins for ReplicatedStorage.MenuAssets)
node "$HERE/render.mjs" manifest "$MODELS" > "$WORK/assets.luau"

# 2. one luau program per scenario: header + script source + mock + driver
level=""
while grep -qF "]${level}]" "$SCRIPT"; do level="${level}="; done
build() { # $1 mode, $2 scenario, $3 file
  {
    printf 'local __PREVIEW = { mode = "%s", scenario = "%s", scriptName = "%s", viewport = { %s, %s } }\n' \
      "$1" "$2" "$(basename "$SCRIPT")" "$VIEW_W" "$VIEW_H"
    printf '__PREVIEW.source = [%s[\n' "$level"; cat "$SCRIPT"; printf '\n]%s]\n' "$level"
    printf '__PREVIEW.assets = '; cat "$WORK/assets.luau"
    printf 'do\n'; cat "$HERE/mock.luau"; printf '\nend\n'
    cat "$HERE/driver.luau"
  } > "$3"
}

if [ $# -gt 0 ]; then
  SCENARIOS=("$@")
else
  build list "" "$WORK/list.luau"
  mapfile -t SCENARIOS < <("$LUAU" "$WORK/list.luau" | sed -n 's/^@@SCENARIO \([^\t]*\).*/\1/p')
fi

JSONS=()
status=0
for sc in "${SCENARIOS[@]}"; do
  prog="$WORK/run-$sc.luau"
  build run "$sc" "$prog"
  raw="$WORK/$sc.stdout"
  if ! "$LUAU" "$prog" > "$raw" 2>&1; then
    echo "== $sc: luau failed" >&2; cat "$raw" >&2; status=1; continue
  fi
  sed -n '/^@@PREVIEW_JSON_BEGIN@@$/,/^@@PREVIEW_JSON_END@@$/p' "$raw" | sed '1d;$d' > "$WORK/$sc.json"
  echo "== $sc"
  sed '/^@@PREVIEW_JSON_BEGIN@@$/,$d' "$raw" | sed 's/^/   /'
  if [ ! -s "$WORK/$sc.json" ]; then echo "   (no scene dump produced)" >&2; status=1; continue; fi
  node -e '
    const d = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"));
    for (const e of d.errors) console.log("   SCRIPT ERROR: " + e.message + "\n" + e.traceback.split("\n").map(l => "      " + l).join("\n"));
    for (const w of d.warnings) console.log("   mock: " + w);
    for (const u of d.unsupported) console.log("   not drawn: " + u);
    if (d.mainThread === "suspended") console.log("   note: the main script thread is still waiting (yielded) at the end");
    console.log(`   ${d.parts.length} parts, ${d.lights.length} lights, ${d.gui.length} ScreenGui(s), t=${d.time.toFixed(2)}s`);
  ' "$WORK/$sc.json"
  JSONS+=("$WORK/$sc.json")
done

# 3. draw
if [ ${#JSONS[@]} -gt 0 ]; then
  node "$HERE/render.mjs" render "$WORK" "$MODELS" "$OUT" "${JSONS[@]}" || status=1
fi
echo "== done: $(ls "$OUT"/*.png 2>/dev/null | wc -l) PNG(s) in $OUT  (scene dumps and logs: $WORK)"
exit $status
