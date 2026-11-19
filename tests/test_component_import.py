import hashlib
import importlib.util
import json
from pathlib import Path
import subprocess
import tempfile
import unittest

SPEC = importlib.util.spec_from_file_location('importer', Path(__file__).resolve().parents[1] / 'scripts/update-components.py')
IMPORTER = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(IMPORTER)


class ComponentImportTest(unittest.TestCase):
    def test_corrupt_release_does_not_replace_existing_lock_or_install_partial_assets(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            site, source = root / 'site', root / 'release'
            site.mkdir()
            (source / 'dist').mkdir(parents=True)
            def git(*args):
                subprocess.run(['git', *args], cwd=source, check=True, capture_output=True)
            git('init')
            git('config', 'user.email', 'test@example.invalid')
            git('config', 'user.name', 'Test')
            (source / 'dist/sim.js').write_text('working release')
            data = (source / 'dist/sim.js').read_bytes()
            manifest = {'schema':1, 'release':'0123456789abcdef', 'source_commit':'source',
                        'source_tree_sha256':'tree', 'entrypoints':{'dbs-fmusim':['sim.js']},
                        'files':{'sim.js':{'sha256':hashlib.sha256(data).hexdigest(), 'bytes':len(data)}}}
            (source / 'dist/release.json').write_text(json.dumps(manifest))
            git('add', '.')
            git('commit', '-m', 'release')
            original = IMPORTER.ROOT
            try:
                IMPORTER.ROOT = site
                IMPORTER.update(source, ['dbs-fmusim'])
                lock = (site / 'components.lock.json').read_bytes()
                (source / 'dist/sim.js').write_text('corrupt')
                manifest['release'] = 'fedcba9876543210'
                (source / 'dist/release.json').write_text(json.dumps(manifest))
                with self.assertRaisesRegex(ValueError, 'checksum mismatch'):
                    IMPORTER.update(source, ['dbs-fmusim'])
                self.assertEqual((site / 'components.lock.json').read_bytes(), lock)
                self.assertFalse((site / 'assets/vendor/dbs-components/fedcba9876543210').exists())
            finally:
                IMPORTER.ROOT = original


if __name__ == '__main__':
    unittest.main()
