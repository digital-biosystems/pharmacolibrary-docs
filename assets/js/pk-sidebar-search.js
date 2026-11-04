// ── sidebar search, over the database ──────────────────────────────────────
// docsify's plugin indexed rendered pages into localStorage and blew its quota. This
// searches 11k ENTITIES — every ATC drug the KB knows (not only the extracted ones), the
// ATC classes by code and by name, paper titles, genes, parameter names, and the brands
// and salts the manifests list (plavix → clopidogrel's page) — from the same file the
// query page uses. The database loads on the first keystroke, never on page load, so no
// page pays for a search nobody performed. A drug with no page of its own resolves to its
// ATC level-3 class page, which lists it with its (zero) counts: not a dead end, a
// worklist.
//
// The box is a WAI-ARIA combobox: the results are a listbox of options moved with
// ↓/↑/Home/End, Enter opens, Escape clears; aria-activedescendant tracks the option and
// the hint is a live status. Typing a drug's own name, salt or brand verbatim puts a
// header card for the drug's PAGE first — name, ATC, which alias matched — above the
// papers that mention it. The card is one more option, so the keyboard reaches it the
// same way.
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  var box, res, hint, timer;
  var active = -1;                       // the option the arrow keys point at

  function collapse() {
    active = -1;
    res.innerHTML = '';
    box.setAttribute('aria-expanded', 'false');
    box.removeAttribute('aria-activedescendant');
  }

  function open(item) {                  // open one option (header cards included)
    var link = item && item.querySelector('a');
    if (!link || !link.getAttribute('href')) return;
    location.hash = link.getAttribute('href');
    collapse();
    box.value = '';
    box.blur();                          // the page navigated; the reader moves on
  }

  function point(li) {                   // highlight + announce one option
    Array.prototype.forEach.call(res.children, function (o) {
      var on = o === li;
      o.setAttribute('aria-selected', String(on));
    });
    if (!li) { box.removeAttribute('aria-activedescendant'); return; }
    box.setAttribute('aria-activedescendant', li.id);
    li.scrollIntoView({ block: 'nearest' });
  }

  function go(term) {
    term = (term || '').trim();
    if (!res) return;
    if (term.length < 2) { collapse(); hint.textContent = ''; return; }
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
    active = -1;
    if (!rows[0]) { hint.textContent = 'no match'; collapse(); return; }
    var hits = [];
    var seen = {};
    rows[0].values.forEach(function (r) {
      var key = r[0] + '|' + r[1] + '|' + r[3];
      if (seen[key]) return;                 // a gene appears once per drug; show each once
      seen[key] = 1;
      hits.push(r);
    });

    // Exact drug name, salt or brand → the drug page's header, above everything else.
    // Several drugs sharing one alias (a multivitamin brand) stay a plain list: no card
    // can claim a reader's intent. Rows the KB knows but has not extracted point to the
    // ATC worklist, not a page — they never get a card.
    var exact = hits.filter(function (r) {
      return r[1].toLowerCase() === term.toLowerCase() &&
             /^drugs\//.test(r[3]) && !/not extracted/.test(String(r[2] || ''));
    });
    var one = {};
    exact.forEach(function (r) { one[r[3]] = (one[r[3]] || 0) + 1; });
    var keys = Object.keys(one);
    var head = null;
    if (exact.length === 1) {
      head = exact[0];
    } else if (keys.length === 1 && one[keys[0]] === exact.length) {
      head = exact[0];                       // one drug, named many ways (name + salt)
    }

    var i = 0;
    function option(html, href, cls) {
      var li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
      li.id = 'pks-opt-' + (i++);
      if (cls) li.className = cls;
      var a = document.createElement('a');
      a.href = '#/' + href;
      a.innerHTML = html;
      li.appendChild(a);
      res.appendChild(li);
      return li;
    }
    var esc = function (s) { return String(s == null ? '' : s).replace(/[<>&]/g, ''); };

    if (head) {
      // an alias hit carries its drug's generic name in the detail ('brand name ·
      // clopidogrel'); the card reads like the drug page's own header
      var generic = head[0] === 'drug' ? head[1]
        : String(head[2] || '').replace(/^(?:brand|synonym) name · /, '');
      var name = esc(generic);
      name = name.charAt(0).toUpperCase() + name.slice(1);
      var meta = head[0] === 'drug' ? 'ATC ' + esc(head[2])
        : '— you typed the ' + head[0] + ' ' + esc(head[1]);
      option('<span class="name">' + name + '</span>' +
             '<span class="d">' + meta + '</span>' +
             '<span class="pks-go">open the drug page</span>',
             head[3], 'pks-drughead');
      hint.textContent = 'the drug page is the first result' +
        (hits.length > 1 ? ' · ' + (hits.length - 1) + ' other match(es)' : '');
    } else {
      hint.textContent = hits.length + ' match(es)';
    }
    hits.forEach(function (r) {
      if (head && r === head) return;        // the card carries it
      option('<span class="k">' + esc(r[0]) + '</span>' + esc(r[1]) +
             (r[2] ? ' <span class="d">' + esc(r[2]) + '</span>' : ''), r[3]);
    });
    box.setAttribute('aria-expanded', 'true');
  }

  hook.doneEach(function () {
    var nav = document.querySelector('.sidebar');
    if (!nav || nav.querySelector('.pks')) return;   // built once, survives navigation
    var wrap = document.createElement('div');
    wrap.className = 'pks';
    wrap.innerHTML = '<input type="search" placeholder="Search drugs, ATC classes, papers, genes…" ' +
                     'aria-label="Search the knowledge base" autocomplete="off" role="combobox" ' +
                     'aria-expanded="false" aria-controls="pks-res" aria-autocomplete="list">' +
                     '<div class="pks-hint" role="status"></div><ul class="pks-res" role="listbox" id="pks-res"></ul>';
    nav.insertBefore(wrap, nav.firstChild);
    box = wrap.querySelector('input');
    hint = wrap.querySelector('.pks-hint');
    res = wrap.querySelector('.pks-res');

    var LISTKEYS = { ArrowDown: 1, ArrowUp: 1, Home: 1, End: 1 };
    box.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { go(box.value); }, 160);
    });
    box.addEventListener('keydown', function (ev) {
      var opts = Array.prototype.slice.call(res.querySelectorAll('[role="option"]'));
      if (ev.key === 'Escape') {
        ev.preventDefault();
        box.value = '';
        collapse();
        return;
      }
      if (!opts.length) return;
      if (ev.key === 'Enter') {
        ev.preventDefault();
        open(opts[Math.max(active, 0)]);
        return;
      }
      if (!LISTKEYS[ev.key]) return;
      ev.preventDefault();
      if (ev.key === 'Home') active = 0;
      else if (ev.key === 'End') active = opts.length - 1;
      else active = active < 0 ? (ev.key === 'ArrowDown' ? 0 : opts.length - 1)
                               : (active + (ev.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length;
      var li = opts[active];
      point(li);
      if (li.classList.contains('pks-drughead')) {   // header already shown as first option
        hint.textContent = 'Enter opens this drug page';
      }
    });
    // leaving the box (Tab, a click elsewhere) folds the popup like any combobox
    box.addEventListener('blur', function () { setTimeout(function () {
      if (!wrap.contains(document.activeElement)) {
        res.querySelectorAll('[role="option"]').forEach(function (o) { o.setAttribute('aria-selected', 'false'); });
        active = -1;
      }
    }, 0); });
    document.addEventListener('click', function (ev) {
      if (!wrap.contains(ev.target)) collapse();
    });
  });
});