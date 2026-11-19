#!/usr/bin/env python3
"""Remove legacy embedded presentation from existing generated pages, idempotently.

Run after assets/css/ledger.css and the updated generator are installed.
Only the known ledger stylesheet and unwired dbs-pgx metadata placeholder are migrated.
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def migrate():
    stylesheet = (ROOT / "assets/css/ledger.css").read_text().strip()
    paths = [ROOT / "README.md", ROOT / "ledger.md"]
    for directory in ["atc", "drugs", "toxins"]:
        paths.extend((ROOT / directory).rglob("*.md"))
    changed = 0
    for path in paths:
        text = path.read_text()
        def remove_style(match):
            # Unknown styles may be authored or from another generator version.
            return '' if match[1].strip() == stylesheet else match[0]
        updated = re.sub(r'<style>(.*?)</style>\n?', remove_style, text, flags=re.S)
        updated = re.sub(r'## Model component\n(<dbs-pgx\s[^>]*></dbs-pgx>)', r'\1', updated)
        updated = re.sub(r'<dbs-pgx(\s[^>]*)></dbs-pgx>',
                         r'<div class="pk-model-meta" hidden\1></div>', updated)
        if updated != text:
            path.write_text(updated)
            changed += 1
    print(f"Migrated {changed} generated pages")


if __name__ == "__main__":
    migrate()
