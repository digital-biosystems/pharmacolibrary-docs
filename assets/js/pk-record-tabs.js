// Record tabs. Slices .markdown-section at the sentinels build.py emits: content before
// the first mark is the page header and is left alone, each mark opens a panel, and
// .pk-tab-end returns the remainder (the footer) to the page. Runs on doneEach, after
// docsify has rendered the markdown, so panel content is real markdown output.
window.$docsify = window.$docsify || {};
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  hook.doneEach(function () {
    var section = document.querySelector('.markdown-section');
    if (!section || !section.querySelector('.pk-tab-mark')) return;

    var nodes = Array.prototype.slice.call(section.childNodes);
    var panels = [], current = null, anchor = null, done = false;

    nodes.forEach(function (node) {
      if (done) return;
      var el = node.nodeType === 1 ? node : null;
      if (el && el.classList.contains('pk-tab-mark')) {
        current = {title: el.dataset.tab || 'Tab', nodes: []};
        panels.push(current);
        if (!anchor) anchor = el;          // where the tab bar goes
        return;
      }
      if (el && el.classList.contains('pk-tab-end')) { done = true; return; }
      if (current) current.nodes.push(node);
    });
    if (!panels.length) return;

    // One container at the position of the first mark, holding the bar and every panel.
    // Anything after .pk-tab-end (the footer) stays a sibling of the container, so it keeps
    // its place on the page instead of being dragged into the last tab.
    var wrap = document.createElement('div');
    wrap.className = 'pk-tabs';
    anchor.parentNode.insertBefore(wrap, anchor);

    var bar = document.createElement('div');
    bar.className = 'pk-tabbar';
    bar.setAttribute('role', 'tablist');
    wrap.appendChild(bar);

    var built = panels.map(function (p, i) {
      var panel = document.createElement('div');
      panel.className = 'pk-tabpanel';
      panel.setAttribute('role', 'tabpanel');
      p.nodes.forEach(function (n) { panel.appendChild(n); });   // moves, not clones
      wrap.appendChild(panel);

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = p.title;
      btn.setAttribute('role', 'tab');
      bar.appendChild(btn);
      return {btn: btn, panel: panel, i: i};
    });

    // the sentinels have served their purpose and are not content
    Array.prototype.slice.call(section.querySelectorAll('.pk-tab-mark, .pk-tab-end'))
      .forEach(function (el) { el.parentNode.removeChild(el); });

    function select(i) {
      built.forEach(function (b) {
        b.btn.setAttribute('aria-selected', b.i === i ? 'true' : 'false');
        b.panel.hidden = b.i !== i;
      });
      try { sessionStorage.setItem('pk-tab', built[i].btn.textContent); } catch (e) {}
    }
    built.forEach(function (b) { b.btn.addEventListener('click', function () { select(b.i); }); });

    // Reopen the tab the reader was last on, so paging through records does not send
    // them back to Information every time. Falls back to the first tab.
    var want = 0;
    try {
      var saved = sessionStorage.getItem('pk-tab');
      built.forEach(function (b) { if (b.btn.textContent === saved) want = b.i; });
    } catch (e) {}
    select(want);
  });
});
