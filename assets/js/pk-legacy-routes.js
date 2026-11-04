// ── legacy route redirects ─────────────────────────────────────────────────
// The ledger and the curator queue used to be one 14 MB and one 766 KB page; they now
// live sharded under ledger/ and review/ (overview + one page per panel, run group or
// reason). Redirect BEFORE docsify renders, or it fetches and parses the old megabyte
// files whole — the freeze the shard split exists to remove. Runs both at module
// execution (a direct #/ledger hit, before docsify's deferred init) and after every
// render (a late hashchange). When the last old links have aged out of bookmarks and
// search indexes, this module can be deleted.
(function go() {
  var m = /^#\/(ledger|review)(\/|$)/.exec(location.hash);
  if (m && m[2] !== '/') location.replace('#/' + m[1] + '/');
})();
window.$docsify = window.$docsify || {};
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  hook.doneEach(function () {
    var m = /^#\/(ledger|review)(\/|$)/.exec(location.hash);
    if (m && m[2] !== '/') location.replace('#/' + m[1] + '/');
  });
});