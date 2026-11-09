// ── the home route's cover presentation ────────────────────────────────────
// '/' shows README.md — the whole front page — but WITHOUT the sidebar, and instead with
// the section line (Drugs · Toxins · Ask · Simulate · Downloads · About) on the title's row, at its
// right end: the page's first heading and the line share one flex row (.pk-cover-head), which wraps
// the line under the title on a phone. It scrolls with the page, not fixed over it. Any
// other route brings the sidebar back: that is the navigation on subpages. The body class
// is what the CSS keys on.
window.$docsify = window.$docsify || {};
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook, vm) {
  var LINKS = [
    ['Drugs', 'atc/README'],
    ['Toxins', 'toxins/README'],
    ['Ask', 'query'],
    ['Simulate', 'drugs/drug_clopidogrel/Clopidogrel_Jung2024?tab=Models'],
    ['Downloads', 'data'],
    ['About', 'pipeline']
  ];
  // the light/dark switch at the end of the section line (pk-theme.js keeps the choice; the
  // other pages follow it). Icons: Tabler moon and sun, MIT.
  var MOON = '<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>';
  var SUN = '<path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1' +
            'm-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>';
  function themeToggle() {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'pk-theme-toggle';
    function show() {
      var dark = window.pkTheme && pkTheme.get() === 'dark';
      // the button names what it switches TO
      b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
        (dark ? SUN : MOON) + '</svg>' + (dark ? 'Light' : 'Dark');
      b.setAttribute('aria-label', dark ? 'Switch to the light theme' : 'Switch to the dark theme');
    }
    b.addEventListener('click', function (ev) {
      ev.stopPropagation();
      if (window.pkTheme) pkTheme.toggle();
      show();
    });
    show();
    return b;
  }
  var wasHome = false;
  hook.doneEach(function () {
    var path = (vm && vm.route && vm.route.path) || '';
    var onHome = path === '/';
    // leaving the cover from low on the page (the body is the scroller here): the next page
    // would open as far down as the cover was, past its title and citation
    if (wasHome && !onHome && !/[?&]id=/.test(location.hash)) document.body.scrollTop = 0;
    wasHome = onHome;
    document.body.classList.toggle('pk-cover-route', onHome);
    var old = document.querySelector('.pk-covernav');
    if (old) old.remove();
    // the site name is the page's FIRST heading, whatever its level (the template makes it
    // an h3 above the h1 lead line); querySelector returns the first in document order
    var h1 = onHome && document.querySelector('.markdown-section h1, .markdown-section h2, ' +
                                              '.markdown-section h3');
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
      head.appendChild(themeToggle());
    }
  });
});