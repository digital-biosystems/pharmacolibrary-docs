// ── sidebar search, over the database ──────────────────────────────────────
// docsify's plugin indexed rendered pages into localStorage and blew its quota. This
// searches 11k ENTITIES — every ATC drug the KB knows (not only the extracted ones), the
// ATC classes by code and by name, paper titles, genes, parameter names and the ontology's
// synonyms — from the same file the query page uses. The database loads on the first
// keystroke, never on page load, so no page pays for a search nobody performed.
// A drug with no page of its own resolves to its ATC level-3 class page, which lists it
// with its (zero) counts: not a dead end, a worklist.
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  var box, res, hint, timer;

  function go(term) {
    term = (term || '').trim();
    if (!res) return;
    if (term.length < 2) { res.innerHTML = ''; return; }
    var db = window.pkdb.get();
    if (!db) {
      hint.textContent = 'loading the index…';
      window.pkdb.load(function (m) { hint.textContent = m; })
        .then(function () { hint.textContent = ''; go(box.value); })
        .catch(function (e) { hint.textContent = String(e.message || e); });
      return;
    }
    var like = '%' + term.replace(/'/g, "''") + '%';
    var rows;
    try {
      // Exact prefix first, then contains — so typing "clop" puts the drug above the
      // thirty papers whose titles mention it.
      rows = db.exec(
        "SELECT kind, label, detail, href FROM search_doc WHERE label LIKE '" + like + "' " +
        "ORDER BY (CASE WHEN lower(label) = lower('" + term.replace(/'/g, "''") + "') THEN 0 " +
        "          WHEN lower(label) LIKE lower('" + term.replace(/'/g, "''") + "%') THEN 1 " +
        "          ELSE 2 END), kind, length(label) LIMIT 40");
    } catch (e) { hint.textContent = String(e.message || e); return; }

    res.innerHTML = '';
    if (!rows[0]) { hint.textContent = 'no match'; return; }
    hint.textContent = rows[0].values.length + ' match(es)';
    var seen = {};
    rows[0].values.forEach(function (r) {
      var key = r[0] + '|' + r[1] + '|' + r[3];
      if (seen[key]) return;                 // a gene appears once per drug; show each once
      seen[key] = 1;
      var li = document.createElement('li'), a = document.createElement('a');
      a.href = '#/' + r[3];
      a.innerHTML = '<span class="k">' + r[0] + '</span>' +
                    String(r[1]).replace(/[<>&]/g, '') +
                    (r[2] ? ' <span class="d">' + String(r[2]).replace(/[<>&]/g, '') + '</span>' : '');
      a.addEventListener('click', function () { res.innerHTML = ''; box.value = ''; });
      li.appendChild(a); res.appendChild(li);
    });
  }

  hook.doneEach(function () {
    var nav = document.querySelector('.sidebar');
    if (!nav || nav.querySelector('.pks')) return;   // built once, survives navigation
    var wrap = document.createElement('div');
    wrap.className = 'pks';
    wrap.innerHTML = '<input type="search" placeholder="Search drugs, ATC classes, papers, genes…" ' +
                     'aria-label="Search the knowledge base" autocomplete="off">' +
                     '<div class="pks-hint"></div><ul class="pks-res"></ul>';
    nav.insertBefore(wrap, nav.firstChild);
    box = wrap.querySelector('input');
    hint = wrap.querySelector('.pks-hint');
    res = wrap.querySelector('.pks-res');
    box.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { go(box.value); }, 160);
    });
  });
});
