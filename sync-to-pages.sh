#!/usr/bin/env bash
# One-way sync: pharmacolibrary-docs -> pharmacolibrary.github.io
# Copies all files from this repository to ~/Projects/pharmacolibrary.github.io
# and deletes files in the destination that no longer exist here.
# Uses rsync with --delete. Destination .git/ is preserved.
set -euo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DST="${1:-$HOME/Projects/pharmacolibrary.github.io}"
SCRIPT_NAME="$(basename "${BASH_SOURCE[0]}")"

if ! command -v rsync >/dev/null 2>&1; then
  echo "Error: rsync is not installed." >&2
  exit 1
fi

if [ ! -d "$SRC" ]; then
  echo "Error: source directory not found: $SRC" >&2
  exit 1
fi

if [ ! -d "$DST" ]; then
  echo "Error: destination directory not found: $DST" >&2
  echo "Expected clone at ~/Projects/pharmacolibrary.github.io" >&2
  echo "Usage: $0 [destination-dir]" >&2
  exit 1
fi

echo "Syncing (one-way):"
echo "  from: $SRC/"
echo "  to:   $DST/"
echo ""

rsync -a --delete \
  --exclude='.git/' \
  --exclude="$SCRIPT_NAME" \
  "$SRC/" "$DST/"

echo ""
echo "Done."
