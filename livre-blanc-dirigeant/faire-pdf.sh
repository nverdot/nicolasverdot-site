#!/bin/bash
# Fabrique livre-blanc-dirigeant.pdf à partir de livre-blanc.html avec Google Chrome.
# Usage : ./faire-pdf.sh [dossier de sortie]
set -e
cd "$(dirname "$0")"
OUT="${1:-$PWD}"
TMP="$(mktemp -d)"
{ printf '<!doctype html><html lang="fr" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}img{max-width:100%%}</style></head><body>'
  cat livre-blanc.html
  printf '</body></html>'; } > "$TMP/index.html"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=8000 --print-to-pdf="$OUT/livre-blanc-dirigeant.pdf" "file://$TMP/index.html" 2>/dev/null
rm -rf "$TMP"
echo "PDF prêt : $OUT/livre-blanc-dirigeant.pdf"
