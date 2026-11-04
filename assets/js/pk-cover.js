// ── the home route's cover presentation ────────────────────────────────────
// '/' shows README.md — the whole front page — but WITHOUT the sidebar, and instead with
// the section line (Drugs · Ask · Simulate · Downloads · About) on the title's row, at its
// right end: the page's h1 and the line share one flex row (.pk-cover-head), which wraps
// the line under the title on a phone. It scrolls with the page, not fixed over it. Any
// other route brings the sidebar back: that is the navigation on subpages. The body class
// is what the CSS keys on.
window.$docsify = window.$docsify || {};
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook, vm) {
  var LINKS = [
    ['Drugs', 'atc/README'],
    ['Ask', 'query'],
    ['Simulate', 'drugs/drug_clopidogrel/Clopidogrel_Jung2024?tab=Models'],
    ['Downloads', 'data'],
    ['About', 'pipeline']
  ];
  hook.doneEach(function () {
    var path = (vm && vm.route && vm.route.path) || '';
    var onHome = path === '/';
    document.body.classList.toggle('pk-cover-route', onHome);
    var old = document.querySelector('.pk-covernav');
    if (old) old.remove();
    var h1 = onHome && document.querySelector('.markdown-section h1');
    if (h1) {
      var nav = document.createElement('nav');
      nav.className = 'pk-covernav';
      nav.setAttribute('aria-label', 'site sections');
      // a middle dot between the names, as its own span: inside the links it would be
      // underlined on hover and be part of the click target
      nav.innerHTML = LINKS.map(function (l) {
        return '<a href="#/' + l[1] + '">' + l[0] + '</a>';
      }).join('<span class="pk-covernav-sep" aria-hidden="true">·</span>');
      nav.addEventListener('click', function (ev) {
        var a = ev.target.closest && ev.target.closest('a');
        if (a) ev.stopPropagation();     // the flying line must not fight the page's own
      });                                // click handlers under it
      var head = h1.parentNode.classList.contains('pk-cover-head') ? h1.parentNode : null;
      if (!head) {
        head = document.createElement('div');
        head.className = 'pk-cover-head';
        h1.parentNode.insertBefore(head, h1);
        head.appendChild(h1);
      }
      head.appendChild(nav);
    }
  });
});