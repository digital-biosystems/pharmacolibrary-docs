// ── keep the sidebar as the reader left it ─────────────────────────────────
// A drug sits in the ATC tree once per ATC code (azithromycin under J01F AND S01A) and
// again in the panels. docsify re-renders the sidebar on every route and marks the FIRST
// link to the page active; sidebar-collapse then opens that branch. So a reader who
// opened S → S01 → S01A and clicked azithromycin was thrown to J → J01 → J01F, and the
// folders they had opened were gone. This runs after both (sidebar-collapse prepends its
// plugin, this one is pushed): it restores the folders that were open before the route
// change and makes the link the reader clicked — or, when the page was reached another
// way, a link that was already visible — the active one. Only when no matching link was
// visible does docsify's first match stand. State lives in this page only.
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  var open = null, clicked = null;
  function root() { return document.querySelector('.sidebar-nav > ul'); }
  function path(li, top) {                       // "2.0.5": li indexes from the root list
    var p = [];
    for (var n = li; n && n !== top; n = n.parentNode) {
      if (n.tagName === 'LI') p.unshift(Array.prototype.indexOf.call(n.parentNode.children, n));
    }
    return p.join('.');
  }
  function snapshot() {
    var top = root(); if (!top) return;
    open = {};
    top.querySelectorAll('li.open').forEach(function (li) { open[path(li, top)] = 1; });
  }
  function ancestors(li, top) {                  // the folder <li>s that contain li
    var out = [];
    for (var n = li.parentNode; n && n !== top; n = n.parentNode) if (n.tagName === 'LI') out.push(n);
    return out;
  }
  function here() { return decodeURI((location.hash || '#/').split('?')[0]).replace(/\/$/, ''); }
  function href(a) { return decodeURI((a.getAttribute('href') || '').split('?')[0]).replace(/\/$/, ''); }

  document.addEventListener('click', function (ev) {
    var nav = ev.target.closest && ev.target.closest('.sidebar-nav');
    if (!nav) return;
    var a = ev.target.closest('a');
    if (a && /^#\//.test(a.getAttribute('href') || '')) {
      // a link: remember it and the folders open NOW, before sidebar-collapse closes the
      // branch of the page being left
      snapshot();
      var li = a.closest('li'); clicked = li ? path(li, root()) : null;
    } else {
      setTimeout(snapshot, 0);                   // a folder toggled: record the result
    }
  }, true);

  hook.doneEach(function () {
    var top = root(); if (!top) return;
    var cur = here();
    var cands = Array.prototype.filter.call(top.querySelectorAll('a'), function (a) {
      return href(a) === cur;
    }).map(function (a) { return a.closest('li'); }).filter(Boolean);
    if (open && cands.length) {
      var target = null;
      cands.forEach(function (li) { if (!target && clicked !== null && path(li, top) === clicked) target = li; });
      if (!target) {                              // reached another way: one already visible
        cands.forEach(function (li) {
          if (!target && ancestors(li, top).every(function (f) { return open[path(f, top)]; })) target = li;
        });
      }
      if (target) {
        var keep = {};
        ancestors(target, top).forEach(function (f) { keep[path(f, top)] = 1; });
        top.querySelectorAll('li').forEach(function (li) {
          var p = path(li, top);
          li.classList.remove('active');
          if (li.classList.contains('folder') || li.querySelector('ul')) {
            li.classList.toggle('open', !!(open[p] || keep[p]));
            li.classList.remove('collapse');
          }
        });
        target.classList.add('active');
        var r = target.getBoundingClientRect(), sb = document.querySelector('.sidebar');
        if (sb) {
          var b = sb.getBoundingClientRect();
          if (r.top < b.top || r.bottom > b.bottom) target.scrollIntoView({ block: 'center' });
        }
      }
    }
    clicked = null;
    snapshot();
  });
});

// ── "only drugs with records" ───────────────────────────────────────────────
// The ATC tree lists every drug of a class, most with (0/0/0). The checkbox on the legend
// line hides those (on by default); a drug with a page but no counted record stays. The
// choice is a per-viewer convenience in localStorage; without storage it is simply on.
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  var KEY = 'pk-sidebar-has-records';
  function wanted() {
    try { return localStorage.getItem(KEY) !== '0'; } catch (e) { return true; }
  }
  function apply(on) {
    document.body.classList.toggle('pk-hide-norec', on);
  }
  hook.doneEach(function () {
    var nav = document.querySelector('.sidebar-nav'); if (!nav) return;
    nav.querySelectorAll('li').forEach(function (li) {
      if (li.querySelector('ul')) return;                     // a folder, not a drug
      var t = li.textContent || '';
      li.classList.toggle('pk-sb-norec', /\(0\/0\/0\)\s*$/.test(t));
    });
    var legend = nav.querySelector('.pk-sb-legend');
    if (legend && !legend.querySelector('input')) {
      var lab = document.createElement('label');
      lab.className = 'pk-sb-toggle';
      lab.innerHTML = '<input type="checkbox"> only drugs with records';
      var box = lab.querySelector('input');
      box.checked = wanted();
      box.addEventListener('change', function () {
        try { localStorage.setItem(KEY, box.checked ? '1' : '0'); } catch (e) { /* no storage */ }
        apply(box.checked);
      });
      legend.appendChild(document.createElement('br'));
      legend.appendChild(lab);
    }
    apply(wanted());
  });
});
