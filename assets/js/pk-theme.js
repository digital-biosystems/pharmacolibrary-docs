// ── light / dark theme ─────────────────────────────────────────────────────
// Loaded first in <head>, without defer, so the stored theme is on <html> before anything
// paints (no light flash on a dark page). The colours live in assets/css/theme.css; this file
// only sets <html data-theme="dark"> or removes it. Light is the default.
//
//   pkTheme.get()          → 'light' | 'dark'
//   pkTheme.set('dark')    → applies and remembers it
//   pkTheme.toggle()       → the other one; returns it
//
// A 'pk-theme' event on window tells widgets that draw their own colours.
(function () {
  var KEY = 'pk-theme';
  var root = document.documentElement;
  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }   // private mode
  }
  function apply(t) {
    if (t === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
  }
  apply(stored());
  window.pkTheme = {
    get: function () { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; },
    set: function (t) {
      t = t === 'dark' ? 'dark' : 'light';
      apply(t);
      try { localStorage.setItem(KEY, t); } catch (e) { /* not kept, still applied */ }
      window.dispatchEvent(new CustomEvent('pk-theme', { detail: t }));
      return t;
    },
    toggle: function () { return this.set(this.get() === 'dark' ? 'light' : 'dark'); }
  };
})();
