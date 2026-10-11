#!/usr/bin/env python3
"""Check the static shell and the integrity of its pinned component release."""
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]


class Shell(HTMLParser):
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'style':
            raise ValueError('Inline stylesheet in index.html')
        if tag == 'script':
            if not attrs.get('src') or 'defer' not in attrs:
                raise ValueError('Shell scripts must be external and deferred')
            assert (ROOT / attrs['src']).is_file(), attrs['src']
        if tag == 'link' and attrs.get('rel') == 'stylesheet':
            assert (ROOT / attrs['href']).is_file(), attrs['href']


def check():
    Shell().feed((ROOT / 'index.html').read_text())
    lock = json.loads((ROOT / 'components.lock.json').read_text())
    directory = ROOT / lock['base']
    manifest_path = directory / 'release.json'
    assert hashlib.sha256(manifest_path.read_bytes()).hexdigest() == lock['release_manifest_sha256']
    manifest = json.loads(manifest_path.read_text())
    assert manifest['release'] == lock['release']
    for name, meta in lock['files'].items():
        data = (directory / name).read_bytes()
        assert hashlib.sha256(data).hexdigest() == meta['sha256'], name
        assert len(data) == meta['bytes'], name
        assert manifest['files'][name] == meta, name
    for name, files in lock['entrypoints'].items():
        assert files == manifest['entrypoints'][name]
        assert all(f in lock['files'] for f in files)
    for p in (ROOT / 'assets/js').glob('*.js'):
        subprocess.run(['node', '--check', str(p)], check=True, capture_output=True)
    print(f"Static shell, JavaScript and component release {lock['release']} verified")


if __name__ == '__main__':
    check()
