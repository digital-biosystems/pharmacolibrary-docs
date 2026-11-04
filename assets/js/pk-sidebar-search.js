// ── drug search, over the database: the sidebar box and the cover's search ────
// docsify's plugin indexed rendered pages into localStorage and blew its quota. This
// searches the DRUGS in the same file the query page uses: every ATC drug the KB knows
// (not only the extracted ones), found by its name, a salt or synonym, or a brand
// (plavix → clopidogrel). Only drugs are listed — a brand or synonym hit shows as its drug,
// with the name that matched beside it; papers, genes, parameters and ATC classes stay out
// of the list (the cover's free text goes to the query page for those). The database loads
// on the first keystroke, never on page load, so no page pays for a search nobody
// performed. A drug with no page of its own resolves to its ATC level-3 class page, which
// lists it with its (zero) counts: not a dead end, a worklist.
//
// Each box is a WAI-ARIA combobox: the results are a listbox of options moved with
// ↓/↑/Home/End, Escape clears; aria-activedescendant tracks the option and the hint is a
// live status. Choosing a drug (click, or Enter on a highlighted option) opens its page.
// Enter with nothing highlighted: the sidebar opens the first drug; the cover submits its
// form, i.e. asks the query page.
window.pkSearch = (function () {
  var esc = function (s) { return String(s == null ? '' : s).replace(/[<>&"]/g, ''); };
  var sq = function (s) { return String(s).replace(/'/g, "''"); };

  // The drugs matching `term`, best first: exact name/alias, then prefix, then contains;
  // each drug once, carrying the alias that found it (if the name itself did not).
  function drugs(db, term, max) {
    var t = sq(term);
    var rows = db.exec(
      "SELECT kind, label, detail, href FROM search_doc " +
      "WHERE kind IN ('drug', 'brand', 'synonym') AND label LIKE '%" + t + "%' " +
      "ORDER BY (CASE WHEN lower(label) = lower('" + t + "') THEN 0 " +
      "          WHEN lower(label) LIKE lower('" + t + "%') THEN 1 ELSE 2 END), " +
      "         (kind = 'drug') DESC, length(label) LIMIT 400");
    var out = [], byName = {};
    ((rows[0] || {}).values || []).forEach(function (r) {
      // an alias's detail names its drug: 'brand name · clopidogrel'
      var name = r[0] === 'drug' ? r[1]
        : String(r[2] || '').replace(/^(?:brand|synonym) name · /, '');
      if (!name) return;
      var key = name.toLowerCase();
      var hit = byName[key];
      if (!hit) {
        if (out.length >= max) return;
        hit = byName[key] = { name: name, href: r[3], detail: '', via: null };
        out.push(hit);
      }
      if (r[0] === 'drug') { hit.detail = r[2] || ''; hit.href = r[3]; hit.via = null; hit.own = true; }
      else if (!hit.own && !hit.via) hit.via = (r[0] === 'brand' ? 'brand ' : 'synonym ') + r[1];
    });
    // an alias found the drug, not its row: fetch the ATC / "not extracted" detail
    var need = out.filter(function (h) { return !h.own; });
    if (need.length) {
      var q = db.exec("SELECT label, detail, href FROM search_doc WHERE kind = 'drug' AND " +
        "lower(label) IN (" + need.map(function (h) { return "lower('" + sq(h.name) + "')"; }).join(',') + ")");
      var det = {};
      ((q[0] || {}).values || []).forEach(function (r) { det[r[0].toLowerCase()] = r; });
      need.forEach(function (h) {
        var d = det[h.name.toLowerCase()];
        if (d) { h.detail = d[1] || ''; h.href = d[2] || h.href; }
      });
    }
    return out;
  }

  // Turn `box` (an <input>) into the combobox. opts: id (unique prefix), owner (the element
  // a click outside of folds the list), list (the <ul>), hint (the status element), onFree
  // — set: Enter with no option highlighted leaves the form to submit; absent: Enter opens
  // the first drug.
  function attach(box, opts) {
    var res = opts.list, hint = opts.hint, timer, active = -1, seq = 0;
    var owner = opts.owner || box.parentNode;
    box.setAttribute('role', 'combobox');
    box.setAttribute('aria-expanded', 'false');
    box.setAttribute('aria-controls', res.id);
    box.setAttribute('aria-autocomplete', 'list');
    box.setAttribute('autocomplete', 'off');
    res.setAttribute('role', 'listbox');

    function collapse() {
      active = -1;
      res.innerHTML = '';
      res.hidden = true;
      box.setAttribute('aria-expanded', 'false');
      box.removeAttribute('aria-activedescendant');
    }
    function open(li) {
      var link = li && li.querySelector('a');
      if (!link || !link.getAttribute('href')) return;
      location.hash = link.getAttribute('href');
      collapse();
      hint.textContent = '';
      box.value = '';
      box.blur();                          // the page navigated; the reader moves on
    }
    function point(li) {
      Array.prototype.forEach.call(res.children, function (o) {
        o.setAttribute('aria-selected', String(o === li));
      });
      if (!li) { box.removeAttribute('aria-activedescendant'); return; }
      box.setAttribute('aria-activedescendant', li.id);
      li.scrollIntoView({ block: 'nearest' });
    }

    function go(term) {
      term = (term || '').trim();
      if (term.length < 2) { collapse(); hint.textContent = ''; return; }
      var db = window.pkdb.get();
      if (!db) {
        hint.textContent = 'loading the index…';
        window.pkdb.load(function (m) { hint.textContent = m; })
          .then(function () { hint.textContent = ''; go(box.value); })
          .catch(function (e) { hint.textContent = String(e.message || e); });
        return;
      }
      var hits;
      try { hits = drugs(db, term, 25); } catch (e) { hint.textContent = String(e.message || e); return; }
      res.innerHTML = '';
      active = -1;
      box.removeAttribute('aria-activedescendant');
      if (!hits.length) {
        collapse();
        hint.textContent = opts.onFree ? 'no drug of that name — Enter asks the query page'
                                       : 'no drug of that name';
        return;
      }
      hits.forEach(function (h) {
        var li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', 'false');
        li.id = opts.id + '-opt-' + (seq++);
        var a = document.createElement('a');
        a.href = '#/' + h.href;
        a.tabIndex = -1;
        var d = [h.detail, h.via].filter(Boolean).join(' · ');
        a.innerHTML = '<span class="name">' + esc(h.name) + '</span>' +
                      (d ? ' <span class="d">' + esc(d) + '</span>' : '');
        li.appendChild(a);
        res.appendChild(li);
      });
      res.hidden = false;
      box.setAttribute('aria-expanded', 'true');
      hint.textContent = hits.length + (hits.length === 1 ? ' drug' : ' drugs') +
        (opts.onFree ? ' · ↓ to choose one, Enter alone asks the query page' : '');
    }

    var LISTKEYS = { ArrowDown: 1, ArrowUp: 1, Home: 1, End: 1 };
    box.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { go(box.value); }, 160);
    });
    box.addEventListener('keydown', function (ev) {
      var all = Array.prototype.slice.call(res.querySelectorAll('[role="option"]'));
      if (ev.key === 'Escape') {
        ev.preventDefault();
        box.value = '';
        hint.textContent = '';
        collapse();
        return;
      }
      if (ev.key === 'Enter') {
        if (active >= 0 && all[active]) { ev.preventDefault(); open(all[active]); return; }
        if (opts.onFree) { clearTimeout(timer); collapse(); return; }   // the form submits
        ev.preventDefault();
        if (all.length) open(all[0]);
        return;
      }
      if (!all.length || !LISTKEYS[ev.key]) return;
      ev.preventDefault();
      if (ev.key === 'Home') active = 0;
      else if (ev.key === 'End') active = all.length - 1;
      else active = active < 0 ? (ev.key === 'ArrowDown' ? 0 : all.length - 1)
                               : (active + (ev.key === 'ArrowDown' ? 1 : -1) + all.length) % all.length;
      point(all[active]);
    });
    // mousedown, not click: it lands before the box's blur folds the list
    res.addEventListener('mousedown', function (ev) {
      var li = ev.target.closest && ev.target.closest('[role="option"]');
      if (!li) return;
      ev.preventDefault();
      open(li);
    });
    document.addEventListener('click', function (ev) {
      if (!owner.contains(ev.target)) collapse();
    });
    box.addEventListener('blur', function () { setTimeout(function () {
      if (!owner.contains(document.activeElement)) collapse();
    }, 0); });
    collapse();
  }

  return { attach: attach, drugs: drugs };
})();

(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook, vm) {
  hook.doneEach(function () {
    // the sidebar box: built once, survives navigation
    var nav = document.querySelector('.sidebar');
    if (nav && !nav.querySelector('.pks')) {
      var wrap = document.createElement('div');
      wrap.className = 'pks';
      wrap.innerHTML = '<input type="search" placeholder="Search drugs and brands…" ' +
                       'aria-label="Search drugs by name or brand">' +
                       '<div class="pks-hint" role="status"></div><ul class="pks-res" id="pks-res"></ul>';
      nav.insertBefore(wrap, nav.firstChild);
      window.pkSearch.attach(wrap.querySelector('input'), {
        id: 'pks', owner: wrap, list: wrap.querySelector('.pks-res'),
        hint: wrap.querySelector('.pks-hint')
      });
    }

    // the cover's search: the same drug list, dropped under the box; free text still goes
    // to the query page through the form's own submit
    var path = (vm && vm.route && vm.route.path) || '';
    var form = path === '/' && document.querySelector('.pk-home-search');
    if (!form || form.dataset.pks) return;
    var box = form.querySelector('input[name="q"]');
    if (!box) return;
    form.dataset.pks = '1';
    var field = document.createElement('div');
    field.className = 'pkh-field';
    box.parentNode.insertBefore(field, box);
    field.appendChild(box);
    var list = document.createElement('ul');
    list.className = 'pks-res pkh-res';
    list.id = 'pkh-res';
    field.appendChild(list);
    var hint = document.createElement('div');
    hint.className = 'pks-hint pkh-hint';
    hint.setAttribute('role', 'status');
    field.appendChild(hint);
    window.pkSearch.attach(box, { id: 'pkh', owner: form, list: list, hint: hint, onFree: true });
  });
});
