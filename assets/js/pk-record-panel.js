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
