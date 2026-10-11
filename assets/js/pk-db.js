// ── shared database ────────────────────────────────────────────────────────
// One 5 MB SQLite file serves both the query page and the sidebar search. It is fetched
// once per session and kept in the CACHE API between sessions: localStorage caps at about
// 5 MB (which is what broke docsify's own search index), while the Cache API holds a blob
// this size without complaint. The filename carries a content hash, so a new release is a
// new URL and the old entry is simply dropped.
window.pkdb = (function () {
  var promise = null, DB = null;
  var CACHE = 'pharmacolibrary-db-v1';

  // The cache is a speed-up only. caches.open/match can themselves fail — "Failed to
  // execute 'open' on 'CacheStorage': Unexpected internal error" with a corrupted or
  // over-quota cache, cleared site data, some private modes — and that rejection used to
  // reach the page, so /sites and /query showed the error instead of loading. Any cache
  // failure now falls back to a plain download.
  function plain(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('database not found: ' + url);
      return r.arrayBuffer();
    });
  }
  function bytes(url) {
    if (!window.caches) return plain(url);
    var store = null;
    return Promise.resolve()
      .then(function () { return caches.open(CACHE); })
      .then(function (c) { store = c; return c.match(url); })
      .catch(function () { store = null; return null; })   // cache unusable: download
      .then(function (hit) {
        if (hit) return hit.arrayBuffer();
        return fetch(url).then(function (r) {
          if (!r.ok) throw new Error('database not found: ' + url);
          if (store) {
            try { store.put(url, r.clone()).catch(function () {}); } catch (e) { /* best-effort */ }
          }
          return r.arrayBuffer();
        });
      });
  }

  function load(onStatus) {
    if (promise) return promise;
    onStatus = onStatus || function () {};
    promise = new Promise(function (resolve, reject) {
      onStatus('Loading the query engine…');
      var tag = document.createElement('script');
      tag.src = 'assets/sqljs/sql-wasm.js';
      tag.onerror = function () { promise = null; reject(new Error('could not load sql.js')); };
      tag.onload = function () {
        initSqlJs({ locateFile: function (f) { return 'assets/sqljs/' + f; } })
          .then(function (SQL) {
            onStatus('Fetching the database…');
            return fetch('data/latest.json').then(function (r) { return r.json(); })
              .then(function (meta) { return bytes('data/' + meta.file); })
              .then(function (buf) {
                DB = new SQL.Database(new Uint8Array(buf));
                resolve(DB);
              });
          })
          .catch(function (e) { promise = null; reject(e); });
      };
      document.body.appendChild(tag);
    });
    return promise;
  }
  // The ADME-sites database (export.adme_sqlite): same engine, its own file and pointer,
  // loaded only by the /sites page. sql.js is initialised once for both.
  var admePromise = null, ADME = null;
  function engine(onStatus) {
    return new Promise(function (resolve, reject) {
      if (window.initSqlJs) return resolve(window.initSqlJs({ locateFile: function (f) { return 'assets/sqljs/' + f; } }));
      onStatus('Loading the query engine…');
      var tag = document.createElement('script');
      tag.src = 'assets/sqljs/sql-wasm.js';
      tag.onerror = function () { reject(new Error('could not load sql.js')); };
      tag.onload = function () { resolve(window.initSqlJs({ locateFile: function (f) { return 'assets/sqljs/' + f; } })); };
      document.body.appendChild(tag);
    });
  }
  function loadAdme(onStatus) {
    if (admePromise) return admePromise;
    onStatus = onStatus || function () {};
    admePromise = engine(onStatus).then(function (SQL) {
      onStatus('Fetching the site database…');
      return fetch('data/adme-latest.json').then(function (r) { if (!r.ok) throw new Error('adme-latest.json missing — run the docs set build'); return r.json(); })
        .then(function (meta) { return bytes('data/' + meta.file); })
        .then(function (buf) { ADME = new SQL.Database(new Uint8Array(buf)); return ADME; });
    }).catch(function (e) { admePromise = null; throw e; });
    return admePromise;
  }
  // The passages the Query chat's model reads (export.knowledge_sqlite): fetched only when a
  // reader turns a model on. A missing pointer is not an error — the chat answers from the
  // rows alone — so this resolves to null instead of rejecting.
  var knowPromise = null;
  function loadKnowledge(onStatus) {
    if (knowPromise) return knowPromise;
    onStatus = onStatus || function () {};
    knowPromise = engine(onStatus).then(function (SQL) {
      return fetch('data/knowledge-latest.json').then(function (r) { return r.ok ? r.json() : null; })
        .then(function (meta) {
          if (!meta) return null;
          onStatus('Fetching the background texts (' + Math.round(meta.bytes / 1e6) + ' MB, once)…');
          return bytes('data/' + meta.file).then(function (buf) { return new SQL.Database(new Uint8Array(buf)); });
        });
    }).catch(function () { knowPromise = null; return null; });
    return knowPromise;
  }
  return { load: load, get: function () { return DB; }, loadAdme: loadAdme, getAdme: function () { return ADME; },
           loadKnowledge: loadKnowledge };
})();
