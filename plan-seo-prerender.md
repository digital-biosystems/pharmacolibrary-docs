# Plan — serving the docsify site to search engines (SEO / pre-render)

## Why this is needed (what crawlers see today)

docsify is one HTML shell at one URL: every route is a `#/…` fragment, which search
engines do not send to the server, do not index as separate pages, and which carry the
same `<title>`/"Pharmacolibrary" and the same shell for the whole site. The per-route
markdown (2,758 drug pages, ~17.4 k record pages, 163 ATC pages) never exists at any
crawlable URL. Net: only the landing page can rank; every drug/record is invisible.

## The constraint set (measured)

- Static hosting: GitHub Pages — no server-side rendering, no rewrites (a 404-fallback
  shell would return HTTP 404, which is not indexable). Real files at real URLs are the
  only way.
- Working tree of the published mirror ≈ 644 MB; the Pages site cap is 1 GB.
  - Drug-page markdown total **53 MB** (avg 19 KB), ATC 9.5 MB, records ≈ **226 MB**
    (17,374 files, avg 13 KB), assets 21 MB, data 83 MB.
- The mirror's `.git` is 372 MB of full-rebuild history — pointless for a deploy mirror
  and growing every rebuild.

## Approach — static pre-render beside docsify

Humans keep the docsify SPA untouched (same hash routes, same UX). Search engines get
one real 200-OK HTML file per route with the FULL rendered content.

**V0 — metadata only (no new files):**
1. `pk-seo.js` (extend `pk-page-title.js`): after every render, set
   `<link rel=canonical>` to the route's clean file URL, and a per-route
   `<meta name=description>` (the SPA's rendered copy then agrees with the file pages).
2. `robots.txt`: allow all; disallow `/review*` (the curator queue is not public
   content) and the build caches (`/.ledger.json`, `/.index.json`, `/.atc_rows.json`).
3. `sitemap.xml`: generated at docs build — home, 2,758 drug cards, 163 ATC pages,
   data/about/query (+ later the record pages); lastmod from the content-hashed
   generation.

**V1 — the pre-renderer (drug cards + ATC + data/about/query/home):**
New generator step `docs/prerender.py` (`python -m pk_knowledge_scripts.docs.prerender`,
run after the content build / inside the aggregate phase). For each route it writes
`<route>/index.html`:
- `<head>`: the five theme CSS `<link>`s (no inline styles — check-site's rule), per-page
  `<title>` ("Clopidogrel – PK/PD/PGx models | Pharmacolibrary" — the same wording
  `pk-page-title` uses, so file and SPA never disagree), meta description (from the
  card's intro line + counts), canonical, OpenGraph, and **JSON-LD**: a
  `schema.org/Drug` on drug cards (name, `atcCode`, `alternateName` = brands from
  `drug_alias` — the same table the search uses) and a `BreadcrumbList` where the
  builder already stamps `.pk-crumbtrail` data.
- `<body>`: `<div id="app">` plus a **pre-filled `.markdown-section`** — the markdown
  rendered statically. Sentinels (`.pk-tab-mark`) become plain sections (all content
  visible to the crawler); docsify rebuilds the tab UI on boot and its fetch replaces
  the static markup for readers — the human UX is unchanged.
- A tiny `pk-route-in.js` before docsify: if `location.pathname !== '/'`,
  `location.replace('/#' + pathname)` — a file-URL landing becomes the hash route
  docsify already knows, after the crawler has the static content.
- The module/defer list is the shell's existing `MODULE_ORDER` (single source: emit it
  from one place, else the static pages drift from the SPA shell).
- Renderer: `markdown-it-py`; the generated pages are ~95% raw HTML passing through,
  so first run a **fidelity script** diffing markdown-it vs docsify's marked output over
  every generated page and report mismatches before trusting it.

**V2 — record pages:** `<stem>/index.html` per record (the record directories already
exist for many records; the clean URL `drugs/drug_x/<stem>/` coexists with the docsify
fetch of `drugs/drug_x/<stem>.md` — no layout change). ≈ 230 MB.

## Budget (tree of the published site)

644 MB now → V1 ≈ +65 MB (drug cards 53 + ATC 9.5 + shells ~9) → ≈ 710 MB.
V2 ≈ +230 MB → ≈ 940 MB — under the 1 GB cap, with the mirror hygiene below.

**Mirror hygiene (required by these numbers):** `sync-to-pages.sh` should publish the
mirror as a single-commit snapshot (orphan branch, force-replaced, then `git gc`): the
deploy history is never read back and would eat the 1 GB cap as the zips churn per
rebuild (~80 MB of zip churn per full rebuild today). This also fixes the .io repo's
existing 372 MB of pack.

## Deliberately not chosen

- `_escaped_fragment_` / dynamic rendering / prerender-as-a-service: Google retired
  these schemes (2019–2022) and they all require a server we don't have.
- docsify `routerMode: 'history'`: real per-file 200 pages + canonical links deliver the
  indexing without rewriting every `#/…` anchor the generators, modules, redirect and
  `?id=` deep-links rely on. If clean browser URLs ever matter beyond indexing, that
  migration is its own plan.
- Dropping docsify for a static site generator: the SPA behaviours (on-demand sqlite,
  in-browser sims, demo tiles) are the product; pre-render + docsify keeps both.

## Verification

- The pre-renderer emits only content-hashed-skip unchanged files; `check-site.py`
  grows a `--prerender` step: every `<route>/index.html` exists for exactly the sitemap's
  URLs, no page over the shard budget, canonical/title present, JSON-LD parses.
- Smoke (both ports): a file-URL landing shows the static content, then boots into the
  hash route; meta/canonical present before and after docsify render.
- Search-console style check: `curl` each of a sample (10) of URLs → 200 + the drug's
  name in the HTML body + one `<title>` each.
