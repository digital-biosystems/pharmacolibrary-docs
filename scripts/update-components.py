#!/usr/bin/env python3
"""Import a matched dbs-components release (no build or network required)."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import shutil
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]


def update(source, tags):
    source = source.resolve()
    manifest = json.loads((source / "dist/release.json").read_text())
    release = manifest["release"]
    if manifest.get("schema") != 1 or not re.fullmatch(r"[a-f0-9]{16}", release):
        raise ValueError("Unsupported release manifest")
    entrypoints = {tag: manifest["entrypoints"][tag] for tag in tags}
    names = set(name for files in entrypoints.values() for name in files)
    for name in list(names):
        if name + ".LICENSE.txt" in manifest["files"]:
            names.add(name + ".LICENSE.txt")
    for name in names:
        if Path(name).name != name:
            raise ValueError(f"Invalid artifact name: {name}")
        data = (source / "dist" / name).read_bytes()
        if hashlib.sha256(data).hexdigest() != manifest["files"][name]["sha256"]:
            raise ValueError(f"Release checksum mismatch: {name}")
    vendor = ROOT / "assets/vendor/dbs-components"
    vendor.mkdir(parents=True, exist_ok=True)
    dest = vendor / release
    with tempfile.TemporaryDirectory(dir=vendor) as temporary:
        staging = Path(temporary)
        for name in names:
            shutil.copy2(source / "dist" / name, staging / name)
        shutil.copy2(source / "dist/release.json", staging / "release.json")
        if dest.exists():
            for p in staging.iterdir():
                if not (dest / p.name).exists() or p.read_bytes() != (dest / p.name).read_bytes():
                    raise ValueError(f"Release directory already exists with different contents: {dest}")
        else:
            staging.rename(dest)
    lock = {
        "schema": 1, "release": release,
        "release_repository": "https://github.com/digital-biosystems/dbs-components",
        "release_checkout_commit": subprocess.check_output(
            ["git", "rev-parse", "HEAD"], cwd=source, text=True).strip(),
        "release_manifest_sha256": hashlib.sha256((source / "dist/release.json").read_bytes()).hexdigest(),
        "source_commit": manifest["source_commit"],
        "source_tree_sha256": manifest["source_tree_sha256"],
        "base": str(dest.relative_to(ROOT)) + "/",
        "entrypoints": entrypoints,
        "files": {name: manifest["files"][name] for name in sorted(names)},
    }
    # The content-addressed manifest is authoritative even for an uncommitted local release.
    lock["release_checkout_dirty"] = bool(subprocess.check_output(
        ["git", "status", "--porcelain", "--", "dist"], cwd=source, text=True).strip())
    target = ROOT / "components.lock.json"
    temporary = target.with_suffix(".tmp")
    temporary.write_text(json.dumps(lock, indent=2) + "\n")
    temporary.replace(target)
    print(f"Pinned {', '.join(tags)} to {release}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("release_checkout", type=Path)
    parser.add_argument("--components", nargs="+", default=["dbs-fmusim"])
    args = parser.parse_args()
    update(args.release_checkout, args.components)
