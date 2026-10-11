// ── breadcrumbs ────────────────────────────────────────────────────────────
// Renders the trail the BUILDER stamped into .pk-crumbs. Nothing here derives a label
// from the route: the builder knows the drug's generic name and its ATC class, a URL
// only knows drug_abacavir.
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  hook.doneEach(function () {
    var section = document.querySelector('.markdown-section');
    if (!section) return;
    var old = section.querySelector('nav.pk-crumbtrail');
    if (old) old.remove();                       // re-render on every route change
    var mark = section.querySelector('.pk-crumbs');
    if (!mark) return;
    var items;
    try { items = JSON.parse(mark.dataset.crumbs || '[]'); } catch (e) { return; }
    if (!items.length) return;

    var nav = document.createElement('nav');
    nav.className = 'pk-crumbtrail';
    nav.setAttribute('aria-label', 'breadcrumb');
    items.forEach(function (item, i) {
      if (i) {
        var sep = document.createElement('span');
        sep.className = 'sep';
        sep.textContent = '\u203A';
        nav.appendChild(sep);
      }
      var node;
      if (item.href && i < items.length - 1) {
        node = document.createElement('a');
        // Docsify routes are hash paths and the stamped href is site-relative.
        node.href = '#/' + String(item.href).replace(/^\/+/, '').replace(/README\.md$/, '');
      } else {
        node = document.createElement('span');
        node.className = 'here';               // last crumb is the page itself
      }
      node.textContent = item.label;
      nav.appendChild(node);
    });
    section.insertBefore(nav, section.firstChild);   // above the <h1>
  });
});
