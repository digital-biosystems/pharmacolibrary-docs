// ── page title ─────────────────────────────────────────────────────────────
// Page title from the page, not from the sidebar. docsify titles a page with the text of
// its active sidebar link, which for a drug is "metformin (18/3/6)" — the counts make a
// useless browser tab and search-result title. A drug card (#/drugs/drug_x/) reads
// "Metformin – PK/PD/PGx models | Pharmacolibrary"; any other page "<its h1> | Pharmacolibrary".
window.$docsify = window.$docsify || {};
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook, vm) {
  function setTitle() {
    var h1 = document.querySelector('.markdown-section h1');
    var text = h1 ? h1.textContent.replace(/\s+/g, ' ').trim() : '';
    if (!text) { document.title = 'Pharmacolibrary'; return; }
    var path = (vm && vm.route && vm.route.path) || '';
    var card = /^\/drugs\/(drug|toxin)_[^/]+\/?$/.test(path) || /\/(drug|toxin)_[^/]+\/(README)?$/.test(path);
    if (card) text = text.charAt(0).toUpperCase() + text.slice(1) + ' – PK/PD/PGx models';
    document.title = text + ' | Pharmacolibrary';
  }
  // after docsify's own title update, which also runs once the page is rendered
  hook.doneEach(function () { setTitle(); setTimeout(setTitle, 0); });
});