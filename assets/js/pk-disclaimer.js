// ── research-use banner ────────────────────────────────────────────────────
// Keyed on the route: drug cards, record pages (whose Simulation tab runs a model) and
// the Sites page. The generated pages also carry the sentence in their footer, so it
// survives a copy of the markdown without this script.
window.$docsify = window.$docsify || {};
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook, vm) {
  var TEXT = 'Research data extracted by software from published papers. Not clinically validated; not for dosing decisions.';
  hook.doneEach(function () {
    var path = (vm && vm.route && vm.route.path) || '';
    if (!/^\/(drugs\/(drug|toxin)_|sites)/.test(path)) return;
    var sec = document.querySelector('.markdown-section');
    if (!sec || sec.querySelector('.pk-disclaimer')) return;
    var d = document.createElement('div');
    d.className = 'pk-disclaimer';
    d.setAttribute('role', 'note');
    d.textContent = TEXT;
    sec.insertBefore(d, sec.firstChild);
  });
});