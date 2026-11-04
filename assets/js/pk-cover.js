// ── the home route's cover presentation ────────────────────────────────────
// '/' shows README.md — the whole front page — but WITHOUT the sidebar, and instead with
// the flying section line (Drugs · Ask · Simulate · Downloads · About) fixed at the top,
// above the content. Any other route removes the line and brings the sidebar back: that
// is the navigation on subpages. The body class is what the CSS keys on.
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
    if (onHome) {
      var nav = document.createElement('nav');
      nav.className = 'pk-covernav';
      nav.setAttribute('aria-label', 'site sections');
      nav.innerHTML = LINKS.map(function (l) {
        return '<a href="#/' + l[1] + '">' + l[0] + '</a>';
      }).join('');
      nav.addEventListener('click', function (ev) {
        var a = ev.target.closest && ev.target.closest('a');
        if (a) ev.stopPropagation();     // the flying line must not fight the page's own
      });                                // click handlers under it
      document.body.appendChild(nav);
    }
  });
});