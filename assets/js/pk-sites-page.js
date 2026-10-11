// ── sites page ──────────────────────────────────────────────────────────────
// /sites builds an ADME site heat-map + anatomogram for any set of drugs, on demand,
// from the second database. The rendering code (assets/js/pk-sites.js) and the
// database are fetched the first time the page is opened and never elsewhere. The
// selected set lives in the hash (#/sites?drugs=a,b,c) so a comparison is a link.
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  var DB = null, MODEL = null, SEL = [], focus = null, scriptP = null, wired = false;
  // the anatomogram's body: #/sites?…&sex=male in a shared link, else this viewer's last
  // choice (localStorage, a per-viewer convenience), else female
  var SEX = 'female';
  // the patient's pharmacogene phenotypes: [{gene, code}] — in the share link only
  // (#/sites?…&pgx=CYP2C19:PM), never stored in the browser or sent anywhere
  var PGX = [], PGXGENES = [];
  function pgxFromHash() {
    var m = /[?&]pgx=([^&]+)/.exec(location.hash || '');
    if (!m) return [];
    return m[1].split(',').map(function (x) {
      var t = decodeURIComponent(x), i = t.indexOf(':');
      return i > 0 ? { gene: t.slice(0, i), code: t.slice(i + 1) } : null;
    }).filter(Boolean);
  }
  function pgxPanel() {
    var gs = el('pks-pgx-gene'), ps = el('pks-pgx-pheno'), ch = el('pks-pgx-chips');
    if (!gs || !ps || !window.pkSites) return;
    PGXGENES = pkSites.pgxGenes(DB, SEL);
    var cur = gs.value;
    // all pharmacogenes, alphabetical; the ones that matter for this set say why
    var why = { 0: ' — guideline for this set', 1: ' — in this set (papers)', 2: ' — in this set' };
    // ● marks a gene relevant to the drugs chosen, with the reason after the name
    gs.innerHTML = PGXGENES.map(function (g) { return '<option value="' + pkSites.esc(g.gene) + '">' + (why[g.rank] ? '\u25CF ' : '\u00A0\u00A0\u00A0') + pkSites.esc(g.gene) + (why[g.rank] || '') + '</option>'; }).join('') ||
                   '<option value="">no pharmacogene for this set</option>';
    if (cur && PGXGENES.some(function (g) { return g.gene === cur; })) gs.value = cur;
    pgxPhenos();
    if (ch) ch.innerHTML = PGX.map(function (p) {
      var g = PGXGENES.filter(function (z) { return z.gene === p.gene; })[0];
      var lab = g ? (g.phenos.filter(function (z) { return z.code === p.code; })[0] || {}).label : null;
      // a gene no drug of this set relates to keeps its chip (it applies once one is added)
      lab = lab || { UM: 'ultrarapid', RM: 'rapid', IM: 'intermediate', PM: 'poor' }[p.code] || p.code;
      return '<span class="pks-chip pks-pgxchip"><b>' + pkSites.esc(p.gene) + '</b> ' + pkSites.esc(lab || p.code) +
             '<span class="x" title="remove" data-pgxrm="' + pkSites.esc(p.gene) + '">×</span></span>';
    }).join('');
  }
  function pgxPhenos() {
    var gs = el('pks-pgx-gene'), ps = el('pks-pgx-pheno'); if (!gs || !ps) return;
    var g = PGXGENES.filter(function (z) { return z.gene === gs.value; })[0];
    ps.innerHTML = g ? g.phenos.map(function (p) { return '<option value="' + pkSites.esc(p.code) + '">' + pkSites.esc(p.label.length > 70 ? p.label.slice(0, 70) + '…' : p.label) + '</option>'; }).join('') : '';
  }
  function sexFromHash() { var m = /[?&]sex=(male|female)\b/.exec(location.hash || ''); return m ? m[1] : null; }
  function savedSex() { try { return localStorage.getItem('pks-sex'); } catch (e) { return null; } }
  function sexButtons() {
    document.querySelectorAll('.pks-sexbtn').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.sex === SEX)); });
  }
  function el(id) {
    var live = document.querySelectorAll('.markdown-section [id="' + id + '"]');
    return live.length ? live[live.length - 1] : document.getElementById(id);
  }
  function status(msg, isErr) {
    var s = el('pks-status'); if (!s) return;
    s.textContent = msg; s.className = 'pkq-status' + (isErr ? ' err' : ''); s.hidden = !msg;
  }
  function script() {
    if (scriptP) return scriptP;
    scriptP = new Promise(function (resolve, reject) {
      if (window.pkSites) return resolve();
      var t = document.createElement('script'); t.src = 'assets/js/pk-sites.js';
      t.onload = resolve; t.onerror = function () { scriptP = null; reject(new Error('could not load pk-sites.js')); };
      document.body.appendChild(t);
    });
    return scriptP;
  }
  function slugsFromHash() {
    var m = /[?&]drugs=([^&]+)/.exec(location.hash || '');
    return m ? decodeURIComponent(m[1]).split(',').map(function (x) { return x.trim(); }).filter(Boolean) : [];
  }
  function writeHash() {
    var base = location.hash.split('?')[0] || '#/sites';
    var q = [];
    if (SEL.length) q.push('drugs=' + SEL.map(function (d) { return encodeURIComponent(d.slug); }).join(','));
    if (SEX === 'male') q.push('sex=male');
    if (PGX.length) q.push('pgx=' + PGX.map(function (p) { return encodeURIComponent(p.gene + ':' + p.code); }).join(','));
    var h = q.length ? base + '?' + q.join('&') : base;
    if (location.hash !== h) history.replaceState(null, '', h);
  }
  function chips() {
    var box = el('pks-chips'); if (!box) return;
    box.innerHTML = SEL.map(function (d, i) {
      return '<button type="button" class="pks-chip" data-slug="' + pkSites.esc(d.slug) + '" aria-pressed="' + (focus === d.slug) + '">' +
        '<span class="sw" style="background:' + pkSites.COLORS[i] + '">' + pkSites.esc(pkSites.code(d.name)) + '</span>' + pkSites.esc(d.name) +
        (d.has_records ? '' : ' <small class="pkq-meta">(no records)</small>') + '<span class="x" title="remove" data-rm="' + pkSites.esc(d.slug) + '">×</span></button>';
    }).join('') + (SEL.length ? '<span class="pkq-meta">' + (focus ? 'isolating ' + pkSites.esc(focus) + ' — click again to clear' : 'click a drug to isolate it; × removes it') + '</span>' : '<span class="pkq-meta">pick two or more drugs to compare</span>');
  }
  function draw() {
    if (!DB || !window.pkSites) return;
    chips(); writeHash();
    var root = el('pk-sites'); if (!root) return;
    MODEL = pkSites.compute(DB, SEL, { text: (el('pks-text') || {}).checked !== false, pgx: PGX });
    pgxPanel();
    var det = root.querySelector('.pks-detailbox'); if (det) delete det.dataset.pin;
    sexButtons();
    pkSites.render(root, MODEL, { focus: focus, ddi: (el('pks-ddi') || {}).checked !== false, sex: SEX, pgx: PGX });
    var m = el('pks-meta'); if (m) m.textContent = MODEL.rows.length + ' site row(s), ' + MODEL.affected.length + ' affected-site row(s)';
  }
  function add(slug) {
    if (SEL.length >= pkSites.MAX || SEL.some(function (d) { return d.slug === slug; })) return;
    var r = pkSites.resolve(DB, [slug]); if (!r.length) return;
    SEL.push(r[0]); draw();
  }
  function boot() {
    status('Loading the site database…');
    Promise.all([window.pkdb.loadAdme(status), script()]).then(function (res) {
      DB = res[0];
      status('');
      el('pks-ui').hidden = false;
      SEX = sexFromHash() || (savedSex() === 'male' ? 'male' : 'female');
      PGX = pgxFromHash();
      var want = slugsFromHash();
      if (want.length) { SEL = pkSites.resolve(DB, want); }
      else if (!SEL.length) { SEL = pkSites.resolve(DB, ['tolvaptan', 'telmisartan', 'hydrochlorothiazide', 'cilazapril', 'allopurinol']); }
      draw();
    }).catch(function (e) { status(String(e.message || e), true); });
  }
  hook.doneEach(function () {
    if (!document.getElementById('pk-sites')) return;      // every other page stops here
    boot();
    if (wired) return;
    wired = true;
    document.addEventListener('input', function (ev) {
      var t = ev.target; if (!t || t.id !== 'pks-pick' || !DB || !window.pkSites) return;
      var box = el('pks-results'); if (!box) return;
      var hits = pkSites.search(DB, t.value);
      box.innerHTML = hits.map(function (h) {
        return '<button type="button" data-add="' + pkSites.esc(h.slug) + '">' + pkSites.esc(h.name) + (h.via ? ' <small>(' + pkSites.esc(h.via) + ')</small>' : '') + (h.has_records ? '' : ' <small>no records</small>') + '</button>';
      }).join('');
    });
    document.addEventListener('keydown', function (ev) {
      var t = ev.target; if (!t || t.id !== 'pks-pick' || ev.key !== 'Enter') return;
      var first = el('pks-results') && el('pks-results').querySelector('button[data-add]');
      if (first) { add(first.dataset.add); t.value = ''; el('pks-results').innerHTML = ''; }
    });
    document.addEventListener('click', function (ev) {
      var t = ev.target; if (!t || !DB) return;
      var b = t.closest && t.closest('button[data-add]');
      if (b) { add(b.dataset.add); var p = el('pks-pick'); if (p) p.value = ''; el('pks-results').innerHTML = ''; return; }
      if (t.dataset && t.dataset.rm) { SEL = SEL.filter(function (d) { return d.slug !== t.dataset.rm; }); if (focus === t.dataset.rm) focus = null; draw(); ev.stopPropagation(); return; }
      if (t.id === 'pks-pgx-add') {
        var g = (el('pks-pgx-gene') || {}).value, c = (el('pks-pgx-pheno') || {}).value;
        // a gene already chosen keeps its place, with the new phenotype; a new gene is appended
        if (g && c) {
          var at = PGX.map(function (p) { return p.gene; }).indexOf(g);
          if (at >= 0) PGX[at] = { gene: g, code: c }; else PGX.push({ gene: g, code: c });
          draw();
        }
        return;
      }
      if (t.dataset && t.dataset.pgxrm) { PGX = PGX.filter(function (p) { return p.gene !== t.dataset.pgxrm; }); draw(); return; }
      var sb = t.closest && t.closest('.pks-sexbtn');
      if (sb) { SEX = sb.dataset.sex === 'male' ? 'male' : 'female'; try { localStorage.setItem('pks-sex', SEX); } catch (e) {} draw(); return; }
      var c = t.closest && t.closest('.pks-chip');
      if (c) { focus = focus === c.dataset.slug ? null : c.dataset.slug; draw(); return; }
      if (t.id === 'pks-share') {
        writeHash();
        var url = location.href;
        (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(function () { el('pks-hint').textContent = 'link copied'; }, function () { el('pks-hint').textContent = url; });
      }
    });
    document.addEventListener('change', function (ev) {
      var t = ev.target; if (t && (t.id === 'pks-ddi' || t.id === 'pks-text')) draw();
      if (t && t.id === 'pks-pgx-gene') pgxPhenos();
      // a PharmCAT report, read here with FileReader — the file never leaves the browser;
      // its non-normal phenotypes replace the same genes' chips (and go into the link)
      if (t && t.id === 'pks-pharmcat' && t.files && t.files[0] && DB && window.pkSites) {
        var f = t.files[0], rd = new FileReader(), note = el('pks-pgx-note');
        rd.onload = function () {
          var msg;
          try {
            var r = pkSites.pharmcatImport(DB, String(rd.result || ''));
            r.picked.forEach(function (p) {
              var at = PGX.map(function (x) { return x.gene; }).indexOf(p.gene);
              if (at >= 0) PGX[at] = { gene: p.gene, code: p.code }; else PGX.push({ gene: p.gene, code: p.code });
            });
            msg = 'PharmCAT ' + (r.meta.format || 'report') + (r.meta.version ? ' ' + r.meta.version : '') + ': ' +
                  (r.picked.length ? r.picked.length + ' non-normal phenotype(s) added \u2014 ' + r.picked.map(function (p) { return p.gene + ' ' + p.phenotype + (p.diplotype ? ' (' + p.diplotype + ')' : ''); }).join(', ') : 'no non-normal phenotype') +
                  '; ' + r.skipped.length + ' gene(s) normal / indeterminate / not called' +
                  (r.ambiguous.length ? '; not added, diplotypes disagree: ' + r.ambiguous.map(function (a) { return a.gene + ' (' + a.phenotypes.join(' or ') + ')'; }).join(', ') : '') +
                  '. Read in this browser only; nothing was uploaded.';
            draw();
          } catch (e) { msg = 'Could not read ' + f.name + ': ' + (e.message || e); }
          if (note) { note.textContent = msg; note.hidden = false; }
          t.value = '';
        };
        rd.readAsText(f);
      }
    });
    document.addEventListener('dblclick', function (ev) {
      var d = ev.target.closest && ev.target.closest('.pks-detailbox');
      if (d) { delete d.dataset.pin; draw(); }
    });
  });
});
