#!/usr/bin/env bash
# Refresh this repo from the built site and push (GitHub Pages serves main /).
#   python ../kid-games-site/build-site.py && bash publish.sh "message"
set -e; R="$(cd "$(dirname "$0")" && pwd)"; S="$R/../kid-games-site/site"
find "$R" -mindepth 1 -maxdepth 1 ! -name .git ! -name README.md ! -name publish.sh -exec rm -rf {} +
cp -r "$S/." "$R/"
cd "$R"; git add -A; git commit -m "${1:-Update games}

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>" || echo "nothing to commit"; git push
