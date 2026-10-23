// Floating record panel: renders the list the BUILDER stamped into .pk-recnav (same
// reasoning as the crumbs — the builder knows every record's page and status, the
// route knows only this one). Collapsed state is remembered per browser.
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  var KEY = 'pk-recpanel-closed';
  function closed() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  hook.doneEach(function () {
    var old = document.querySelector('aside.pk-recpanel');
    if (old) old.remove();
    // the room the content leaves for the panel (CSS above) follows its state
    function room() {
      var b = document.querySelector('aside.pk-recpanel');
      document.body.classList.toggle('pk-recpanel-open', !!b && !b.classList.contains('closed'));
      document.body.classList.toggle('pk-recpanel-closed', !!b && b.classList.contains('closed'));
      window.dispatchEvent(new Event('resize'));   // canvases re-measure their width
    }
    room();
    var section = document.querySelector('.markdown-section');
    var mark = section && section.querySelector('.pk-recnav');
    if (!mark) return;
    var items;
    try { items = JSON.parse(mark.dataset.items || '[]'); } catch (e) { return; }
    if (!items.length) return;

    var box = document.createElement('aside');
    box.className = 'pk-recpanel' + (closed() ? ' closed' : '');
    box.setAttribute('aria-label', 'simulatable records of this drug');
    var hd = document.createElement('button');
    hd.className = 'hd';
    hd.type = 'button';
    hd.innerHTML = 'Simulatable models <span class="n">(' + items.length + ')</span><span class="tg"></span>';
    function paint() { hd.querySelector('.tg').textContent = box.classList.contains('closed') ? '\u25BE' : '\u25B4'; }
    hd.addEventListener('click', function () {
      box.classList.toggle('closed');
      try { localStorage.setItem(KEY, box.classList.contains('closed') ? '1' : '0'); } catch (e) {}
      paint();
      room();
    });
    paint();
    box.appendChild(hd);

    var ul = document.createElement('ul');
    var grp = null;
    var groups = {};
    items.forEach(function (it) { groups[it.group || 'popPK'] = 1; });
    var many = Object.keys(groups).length > 1;
    items.forEach(function (it) {
      var g = it.group || 'popPK';
      if (many && g !== grp) {               // a heading per group, only when there are several
        grp = g;
        var h = document.createElement('li');
        h.className = 'grp';
        h.textContent = g;
        ul.appendChild(h);
      }
      var li = document.createElement('li');
      if (it.here) li.className = 'here';
      var a = document.createElement('a');
      a.href = '#/' + String(it.href || '').replace(/^\/+/, '').replace(/\.md$/, '');
      a.textContent = it.label;
      a.title = it.label + ' \u2014 ' + it.status;
      var b = document.createElement('span');
      b.className = 'pk-badge ' + (it.css || 'pk-badge--neutral');
      b.textContent = it.status;
      li.appendChild(a);
      li.appendChild(b);
      ul.appendChild(li);
    });
    box.appendChild(ul);
    document.body.appendChild(box);
    room();
  });
});

// ── filters on a drug page's popPK record table ────────────────────────────
// build.py puts a hidden <span class="pk-rf" data-species data-age data-status data-sim>
// in each row's first cell. Four selects above the table hide the rows that do not match;
// a nested ↳ row is filtered on its own attributes. Nothing is stored.
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  var FIELDS = [['species', 'species'], ['age', 'age group'], ['status', 'status'], ['sim', 'simulatable']];
  hook.doneEach(function () {
    var section = document.querySelector('.markdown-section');
    if (!section) return;
    var marks = section.querySelectorAll('span.pk-rf');
    if (marks.length < 4) return;                       // a short table needs no filter
    var table = marks[0].closest('table');
    if (!table || table.previousElementSibling && table.previousElementSibling.classList.contains('pk-rf-bar')) return;
    var rows = Array.prototype.map.call(marks, function (m) { return { tr: m.closest('tr'), d: m.dataset }; });
    var bar = document.createElement('div');
    bar.className = 'pk-rf-bar';
    var sel = {};
    FIELDS.forEach(function (f) {
      var vals = {};
      rows.forEach(function (r) { vals[r.d[f[0]]] = 1; });
      var keys = Object.keys(vals).sort();
      if (keys.length < 2) return;
      var s = document.createElement('select');
      s.setAttribute('aria-label', 'filter by ' + f[1]);
      s.innerHTML = '<option value="">' + f[1] + ': all</option>' + keys.map(function (k) {
        return '<option value="' + k.replace(/"/g, '&quot;') + '">' + (f[0] === 'sim' ? (k === 'yes' ? 'runs in browser' : 'no simulator') : k) + '</option>';
      }).join('');
      s.addEventListener('change', apply);
      sel[f[0]] = s;
      bar.appendChild(s);
    });
    if (!bar.children.length) return;
    var count = document.createElement('span');
    count.className = 'pk-rf-count';
    bar.appendChild(count);
    function apply() {
      var shown = 0;
      rows.forEach(function (r) {
        var ok = Object.keys(sel).every(function (k) { return !sel[k].value || r.d[k] === sel[k].value; });
        r.tr.hidden = !ok;
        if (ok) shown++;
      });
      count.textContent = shown + ' of ' + rows.length + ' records';
    }
    table.parentNode.insertBefore(bar, table);
    apply();
  });
});
