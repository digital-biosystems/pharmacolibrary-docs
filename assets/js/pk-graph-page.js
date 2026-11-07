// ── graph explorer page ────────────────────────────────────────────────────
// /graph asks the evidence graph (Neo4j) directly: a graph on this computer, found on the
// default ports, or the public graph through its read-only proxy. The engine
// (assets/js/pk-graph.js), its query catalogue and the drawing library are fetched the
// first time the page is opened and never on any other page.
(window.$docsify.plugins = window.$docsify.plugins || []).push(function (hook) {
  var scriptP = null;
  function script() {
    if (scriptP) return scriptP;
    scriptP = new Promise(function (resolve, reject) {
      if (window.pkGraph) return resolve();
      var t = document.createElement('script'); t.src = 'assets/js/pk-graph.js';
      t.onload = resolve; t.onerror = function () { scriptP = null; reject(new Error('could not load pk-graph.js')); };
      document.body.appendChild(t);
    });
    return scriptP;
  }
  // the explorer is offered only on a local copy of the site; elsewhere the page keeps its
  // heading and says so, and the engine is never fetched
  var LOCAL = /^(localhost|127\.0\.0\.1|::1|\[::1\])$|\.localhost$/.test(location.hostname);
  hook.doneEach(function () {
    var root = document.getElementById('pk-graph');
    if (!root) return;                                      // every other page stops here
    if (!LOCAL) {
      var h1 = root.parentNode.querySelector('h1');
      while (h1 && h1.nextSibling) h1.parentNode.removeChild(h1.nextSibling);
      var p = document.createElement('p');
      p.className = 'pkq-status';
      p.textContent = 'The graph explorer is not available on this site. It runs only on a local copy (localhost).';
      (h1 ? h1.parentNode : root.parentNode).appendChild(p);
      if (!h1) root.remove();
      return;
    }
    script().then(function () { window.pkGraph.boot(); }).catch(function (e) {
      var s = document.getElementById('pkg-status'); if (s) { s.textContent = e.message; s.className = 'pkq-status err'; }
    });
  });
});
