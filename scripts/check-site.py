#!/usr/bin/env python3
"""Check the static shell and the integrity of its pinned component release."""
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]


# The one script that must run before the page paints: it puts the stored light/dark theme
# on <html> (assets/css/theme.css); deferred, a dark page would flash light first.
BLOCKING_SCRIPTS = ('assets/js/pk-theme.js',)


class Shell(HTMLParser):
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'style':
            raise ValueError('Inline stylesheet in index.html')
        if tag == 'script':
            if attrs.get('src') in BLOCKING_SCRIPTS:
                assert (ROOT / attrs['src']).is_file(), attrs['src']
                return
            if not attrs.get('src') or 'defer' not in attrs:
                raise ValueError('Shell scripts must be external and deferred')
            assert (ROOT / attrs['src']).is_file(), attrs['src']
        if tag == 'link' and attrs.get('rel') == 'stylesheet':
            assert (ROOT / attrs['href']).is_file(), attrs['href']


GENERATED_DIRS = ('ledger', 'review')
GENERATED_BUDGET_BYTES = 2_500_000   # no generated route should ship a freeze-cmp page

# The shell's ONLY behavior, in load order. Deferred scripts execute in document order and
# docsify runs the registered hooks at its init, so this sequence IS behavior: config
# first, the legacy-routes redirect early (it must fire before docsify fetches anything),
# sidebar-collapse before pk-sidebar-state (the collapse plugin prepends its hook, before
# sidebar restoration), pk-components-loader last (it reads the final rendered page).
MODULE_ORDER = (
    'assets/js/docsify-config.js',
    'assets/js/pk-legacy-routes.js',
    'assets/js/pk-disclaimer.js',
    'assets/js/pk-page-title.js',
    'assets/js/pk-cover.js',
    'assets/js/pk-tablist.js',
    'assets/js/pk-record-tabs.js',
    'assets/js/pk-sidebar-search.js',
    'assets/js/pk-query-page.js',
    'assets/js/pk-sites-page.js',
    'assets/js/pk-graph-page.js',
    'assets/js/pk-breadcrumbs.js',
    'assets/js/pk-record-panel.js',
    'assets/js/pk-db.js',
    'assets/docsify.js',
    'assets/docsify-sidebar-collapse.min.js',
    'assets/js/pk-sidebar-state.js',
    'assets/js/pk-demo.js',
    'assets/js/pk-components-loader.js',
)


def route_to_file(route: str):
    """Map a docsify hash route ('ledger/p-dds', 'drugs/drug_x/', 'review') to its file.
    A TRAILING slash means a directory route (its README.md) — kept through the mapping."""
    route = (route or '').lstrip('/')
    if route.endswith('/'):
        route += 'README'
    route = (route or 'README').strip('/')
    if not route.endswith('.md'):
        route += '.md'
    return ROOT / route


def check_generated():
    """Size budget and link integrity for the generated ledger/ and review/ trees and their
    legacy stubs. The shard split exists because ledger.md reached 14 MB and crashed tabs;
    this keeps any future unit from regrowing past the budget, and keeps every '#/…' route
    the generated pages emit resolvable to a real file (the shards are cross-linked: the
    overview indexes every shard, and the stubs must not dangle either)."""
    pages = []
    for d in GENERATED_DIRS:
        p = ROOT / d
        if p.is_dir():
            pages += sorted(p.glob('*.md'))
    for stub in (d + '.md' for d in GENERATED_DIRS):
        if (ROOT / stub).is_file():
            pages.append(ROOT / stub)
    if not pages:
        print('Generated ledger/review shards: not present, nothing to check')
        return
    over = [p for p in pages if p.stat().st_size > GENERATED_BUDGET_BYTES]
    assert not over, 'generated pages over the %d B budget: %s' % (
        GENERATED_BUDGET_BYTES, ', '.join(p.name for p in over))
    broken = []
    stale_drugs = []
    # two link forms in generated pages: raw-HTML anchors ('href="#/route"', which bypass
    # the markdown renderer) and markdown root-absolute links '](/route)' (docsify turns
    # '#…' markdown links into same-page ?id= anchors, so generated markdown uses '/…')
    href = re.compile(r'''href="#/([^"?#]*)|\]\(/([^)"\s]*)''')
    for page in pages:
        text = page.read_text(encoding='utf-8')
        for m in href.finditer(text):
            route = m.group(1) if m.group(1) is not None else m.group(2)
            if not route_to_file(route).is_file():
                # drug-record targets churn while a panel run is live (the index store keeps
                # records a fresher render has dropped); they self-heal at the next drug
                # render, so they warn — the site's own links must not dangle, so they fail
                (stale_drugs if route.startswith('drugs/') else broken).append(
                    f'{page.name}: #/{route}')
    assert not broken, ('%d broken links in generated pages (first 10): %s'
                        % (len(broken), '; '.join(broken[:10])))
    note = ('; %d stale drug-record link(s) — live-run churn, they clear at the next drug '
            'render' % len(stale_drugs)) if stale_drugs else ''
    print(f'Generated ledger/review shards: {len(pages)} pages, all ≤ '
          f'{GENERATED_BUDGET_BYTES // 1_000_000} MB, all #/ links resolve{note}')


def check_shell():
    """The shell is only markup: every behavior is an external, deferred module in the
    pinned order, every module in assets/js is either loaded by index.html or referenced
    by another module (the lazy engines), and no plugin logic is inlined again."""
    src = (ROOT / 'index.html').read_text()
    Shell().feed(src)                                   # no inline <script>/<style>, files exist
    srcs = re.findall(r'<script src="([^"]+)" defer></script>', src)
    assert srcs == list(MODULE_ORDER), (
        'shell module order drift: %s' % ' vs '.join(
            '%s should be %s' % pair for pair in zip(srcs, MODULE_ORDER)))
    # every assets/js module is referenced by index.html, or fetched by another module
    # (pk-ask.js etc. are the query/sim engines, loaded on first use)
    on_disk = {f'assets/js/{p.name}' for p in (ROOT / 'assets/js').glob('*.js')}
    loaded = set(srcs) | {s for s in BLOCKING_SCRIPTS if f'<script src="{s}"></script>' in src}
    lazy = set()
    for p in (ROOT / 'assets/js').glob('*.js'):
        lazy |= set(re.findall(r"assets/js/([\w.-]+\.js)", p.read_text(encoding='utf8')))
    unreferenced = on_disk - loaded - {f'assets/js/{n}' for n in lazy}
    assert not unreferenced, (
        'modules nothing loads (delete them or reference them from index.html): %s'
        % ', '.join(sorted(unreferenced)))
    # logic may not sneak back inline: the shell's only script tag content is comments
    inlined = re.findall(r'<script>(.*?)</script>', src, re.S)
    assert not inlined, 'inline script block reappeared in index.html: %r' % inlined[0][:80]


def check():
    check_shell()
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
    check_generated()


if __name__ == '__main__':
    if '--generated' in sys.argv:
        check_generated()
    else:
        check()
