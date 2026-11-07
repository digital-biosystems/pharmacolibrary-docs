// ── graph explorer ──────────────────────────────────────────────────────────
// The /graph page's engine, loaded by pk-graph-page.js only on that route. It asks the
// evidence graph (Neo4j) the named, read-only queries of assets/graph/catalogue.mjs, over
// Neo4j's HTTP Query API:
//   local  a Neo4j on this computer (the demo package on :7477, the open package on :7478,
//          the pipeline's own graph on :7475, Neo4j's default :7474). Looked for at once when
//          the page itself is served from localhost, or when the reader asked for it before;
//          the password stays in this tab (sessionStorage) and goes only to localhost.
//   proxy  the public graph, through the read-only proxy named in assets/graph/config.json
//          (tools/graph-proxy): it holds the database login and runs catalogue queries only.
// Nothing is sent anywhere else. Views: drug knowledge card + record network, a record's
// evidence trail, the citation network of a drug's papers, drugs related to a condition,
// and the shortest evidence path between two drugs.
(function () {
  'use strict';
  var CAT = null, CFG = null, CONN = null, CY = null, cyP = null;
  var CYTO = 'assets/vendor/cytoscape/3.34.4/cytoscape.min.js';
  var DEFAULT_PORTS = [7477, 7478, 7475, 7474];
  var STATE = { view: 'drug', drug: null, record: null, q: '', b: null };
  var KIND_COLOR = { Drug: '#1e293b', Paper: '#559de0', Record: '#9878d9', Gene: '#2f9e44', AtcCode: '#b4530f',
                     Compound: '#55bec4', Guideline: '#d94a4a', ClinicalAnnotation: '#f08c00', QCode: '#868e96' };
  var DOMAIN_COLOR = { pk: '#9878d9', pd: '#d6336c', pgx: '#2f9e44' };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function el(id) {
    var live = document.querySelectorAll('.markdown-section [id="' + id + '"]');
    return live.length ? live[live.length - 1] : document.getElementById(id);
  }
  function status(msg, isErr) {
    var s = el('pkg-status'); if (!s) return;
    s.textContent = msg || ''; s.className = 'pkq-status' + (isErr ? ' err' : ''); s.hidden = !msg;
  }
  function abs(path) { return new URL(path, document.baseURI).href; }
  function timeout(ms) {
    if (window.AbortSignal && AbortSignal.timeout) return AbortSignal.timeout(ms);
    var c = new AbortController(); setTimeout(function () { c.abort(); }, ms); return c.signal;
  }

  // ── transport ──────────────────────────────────────────────────────────────
  function rowsOf(data) {
    if (!data || !data.fields) return [];
    return data.values.map(function (v) {
      var o = {}; data.fields.forEach(function (f, i) { o[f] = v[i]; }); return o;
    });
  }
  function AuthNeeded() { this.message = 'login needed'; }
  async function localQuery(conn, name, params) {
    var p = CAT.prepare(name, params);
    var h = { 'Content-Type': 'application/json', Accept: 'application/json' };
    if (conn.auth) h.Authorization = 'Basic ' + conn.auth;
    var res = await fetch(conn.url, { method: 'POST', headers: h, signal: timeout(60000),
      body: JSON.stringify({ statement: p.statement, parameters: p.parameters, accessMode: 'Read' }) });
    if (res.status === 401 || res.status === 403) throw new AuthNeeded();
    var j = await res.json();
    if (j.errors && j.errors.length) throw new Error(j.errors[0].message || j.errors[0].code);
    return rowsOf(j.data);
  }
  async function proxyQuery(name, params) {
    CAT.prepare(name, params);                       // same check the proxy makes, before sending
    var res = await fetch(CFG.proxy.replace(/\/$/, '') + '/query', { method: 'POST', signal: timeout(60000),
      headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name, params: params || {} }) });
    var j = await res.json().catch(function () { return {}; });
    if (!res.ok) throw new Error(j.error || ('proxy answered ' + res.status));
    return rowsOf(j.data);
  }
  function run(name, params) {
    if (!CONN) return Promise.reject(new Error('not connected'));
    return CONN.mode === 'local' ? localQuery(CONN, name, params) : proxyQuery(name, params);
  }

  // ── finding a graph ────────────────────────────────────────────────────────
  function pageIsLocal() {
    return location.protocol === 'file:' || /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  }
  function wantLocal() {
    try { return pageIsLocal() || localStorage.getItem('pkg-local') === '1'; } catch (e) { return pageIsLocal(); }
  }
  async function discover() {
    var ports = (CFG.local_ports && CFG.local_ports.length) ? CFG.local_ports : DEFAULT_PORTS;
    var found = await Promise.all(ports.map(async function (port) {
      try {
        var r = await fetch('http://localhost:' + port + '/', { headers: { Accept: 'application/json' }, signal: timeout(1500) });
        var j = await r.json();
        if (!j || !j.query) return null;
        return { port: port, version: j.neo4j_version, edition: j.neo4j_edition,
                 url: 'http://localhost:' + port + '/db/neo4j/query/v2' };
      } catch (e) { return null; }
    }));
    return found.filter(Boolean);
  }
  function savedAuth(port) { try { return sessionStorage.getItem('pkg-auth:' + port); } catch (e) { return null; } }
  // null: not a Pharmacolibrary graph; 'auth': needs a login; else the probe row
  async function identify(cand) {
    try {
      var r = (await localQuery(cand, 'probe', {}))[0];
      var need = ['Drug', 'Paper', 'Record', 'QCode'];
      return r && need.every(function (l) { return r.labels.indexOf(l) >= 0; }) ? r : null;
    } catch (e) { return e instanceof AuthNeeded ? 'auth' : null; }
  }
  async function findLocal() {
    var cands = await discover(), out = [];
    for (var i = 0; i < cands.length; i++) {
      var c = cands[i]; c.auth = savedAuth(c.port);
      var who = await identify(c);
      if (who === 'auth') { c.needsLogin = true; out.push(c); }
      else if (who) { c.probe = who; out.push(c); }
      // any other Neo4j on these ports is left alone
    }
    return out;
  }
  function connLabel(c) {
    if (c.mode === 'proxy') return 'public graph (read-only proxy)';
    return 'local graph on :' + c.port + (c.version ? ' (Neo4j ' + c.version + ')' : '');
  }
  function renderConn(cands) {
    var box = el('pkg-conn'); if (!box) return;
    var opts = cands.map(function (c, i) {
      return '<option value="l' + i + '"' + (CONN && CONN.mode === 'local' && CONN.port === c.port ? ' selected' : '') + '>' +
        esc(connLabel({ mode: 'local', port: c.port, version: c.version })) + (c.needsLogin && !c.auth ? ' — login needed' : '') + '</option>';
    });
    if (CFG.proxy) opts.push('<option value="p"' + (CONN && CONN.mode === 'proxy' ? ' selected' : '') + '>public graph (read-only proxy)</option>');
    var login = cands.filter(function (c) { return c.needsLogin && !c.auth; });
    box.innerHTML =
      '<label for="pkg-source">Graph</label> ' +
      (opts.length ? '<select id="pkg-source">' + opts.join('') + '</select>' : '<span class="pkq-meta">none found</span>') +
      (pageIsLocal() ? '' : ' <button type="button" class="pkq-btn" id="pkg-look">' +
        (wantLocal() ? 'Look again on this computer' : 'Look for a graph on this computer') + '</button>') +
      (CONN && CONN.probe ? ' <span class="pkq-meta">' + CONN.probe.drugs.toLocaleString() + ' drugs, ' +
        CONN.probe.papers.toLocaleString() + ' papers, ' + CONN.probe.records.toLocaleString() + ' records</span>' : '') +
      (login.length ? '<form id="pkg-login" class="pkg-login" data-port="' + login[0].port + '">' +
        'Neo4j on :' + login[0].port + ' asks for a login. <input id="pkg-user" value="neo4j" aria-label="user" size="8"> ' +
        '<input id="pkg-pass" type="password" placeholder="password" aria-label="password" size="14"> ' +
        '<button class="pkq-btn" type="submit">Connect</button> <span class="pkq-meta">kept in this tab only, sent only to localhost</span></form>' : '');
    box._cands = cands;
  }
  async function connect(force) {
    status('Looking for the graph…');
    var cands = (force || wantLocal()) ? await findLocal() : [];
    var ready = cands.filter(function (c) { return c.probe; });
    if (ready.length) { CONN = Object.assign({ mode: 'local' }, ready[0]); }
    else if (CFG.proxy) {
      CONN = { mode: 'proxy' };
      try { CONN.probe = (await run('probe', {}))[0]; } catch (e) { CONN = null; status('The public graph does not answer: ' + e.message, true); }
    } else CONN = null;
    renderConn(cands);
    if (!CONN) {
      if (!cands.length) status(CFG.proxy ? 'No graph answered.' : 'No graph found on this computer, and no public graph is configured yet. ' +
        'Start the demo package (./run.sh, port 7477) and look again.', !CFG.proxy);
      else status('Log in to the graph on this computer to continue.');
      return false;
    }
    status('');
    return true;
  }

  // ── small renderers ────────────────────────────────────────────────────────
  function cypher(name) {
    var q = CAT.QUERIES[name];
    return '<details class="pkg-cypher"><summary>Cypher: ' + esc(q.title) + '</summary><pre>' + esc(q.cypher) + '</pre></details>';
  }
  function doi(d) { return d ? '<a href="https://doi.org/' + esc(d) + '" target="_blank" rel="noopener">doi:' + esc(d) + '</a>' : ''; }
  function licence(l, oa) {
    var open = /^(cc|pd|public)/i.test(l || '');
    return '<span class="pkg-lic' + (open ? ' open' : '') + '" title="licence of the paper\'s text">' + esc(l || 'unknown') +
      (oa ? ' · ' + esc(oa) : '') + '</span>';
  }
  function drugLink(slug, name) { return '<a href="#/graph?view=drug&drug=' + encodeURIComponent(slug) + '" data-drug="' + esc(slug) + '">' + esc(name || slug) + '</a>'; }
  function out(html) { var o = el('pkg-out'); if (o) o.innerHTML = html; }
  function busy(what) { out('<p class="pkq-meta">' + esc(what) + '…</p>'); }
  function fail(e) { out('<p class="pkq-status err">' + esc(e && e.message || e) + '</p>'); }

  function loadCyto() {
    if (cyP) return cyP;
    cyP = new Promise(function (resolve, reject) {
      if (window.cytoscape) return resolve();
      var t = document.createElement('script'); t.src = CYTO;
      t.onload = resolve; t.onerror = function () { cyP = null; reject(new Error('could not load the graph drawing library')); };
      document.body.appendChild(t);
    });
    return cyP;
  }
  async function draw(id, elements, layout, onTap) {
    await loadCyto();
    var box = el(id); if (!box) return;
    if (CY) { CY.destroy(); CY = null; }
    CY = window.cytoscape({
      container: box, elements: elements, wheelSensitivity: 0.2, minZoom: 0.2, maxZoom: 3,
      layout: layout || { name: 'cose', animate: false, nodeRepulsion: 9000, idealEdgeLength: 70 },
      style: [
        { selector: 'node', style: { 'background-color': 'data(color)', label: 'data(label)', 'font-size': 9, color: '#334155',
          'text-valign': 'bottom', 'text-margin-y': 3, width: 'data(size)', height: 'data(size)', 'text-wrap': 'ellipsis', 'text-max-width': 110 } },
        { selector: 'node[?muted]', style: { opacity: 0.45 } },
        { selector: 'node[?ring]', style: { 'border-width': 3, 'border-color': '#f59f00' } },
        { selector: 'edge', style: { width: 1, 'line-color': '#cbd5e1', 'curve-style': 'bezier', 'target-arrow-shape': 'data(arrow)',
          'target-arrow-color': '#cbd5e1', 'arrow-scale': 0.7, label: 'data(label)', 'font-size': 7, color: '#94a3b8' } },
        { selector: ':selected', style: { 'border-width': 3, 'border-color': '#0074d9' } },
      ],
    });
    if (onTap) CY.on('tap', 'node', function (ev) { onTap(ev.target.data()); });
  }
  function legend(kinds) {
    return '<p class="pkg-legend">' + kinds.map(function (k) {
      return '<span><i style="background:' + (KIND_COLOR[k[0]] || DOMAIN_COLOR[k[0]] || k[2]) + '"></i>' + esc(k[1]) + '</span>';
    }).join('') + '</p>';
  }

  // ── views ──────────────────────────────────────────────────────────────────
  async function viewDrug() {
    if (!STATE.drug) return out('<p class="pkq-meta">Pick a drug above.</p>');
    busy('Reading ' + STATE.drug);
    try {
      var card = (await run('drug_card', { slug: STATE.drug }))[0];
      if (!card) return out('<p class="pkq-status err">' + esc(STATE.drug) + ' is not in this graph.</p>');
      var recs = (await run('drug_records', { slug: STATE.drug }))[0] || { records: [] };
      out(cardHtml(card) + '<h3>Records, papers and genes</h3>' +
        legend([['Drug', 'drug'], ['pk', 'popPK record'], ['pd', 'PD record'], ['pgx', 'PGx record'], ['Paper', 'paper'], ['Gene', 'gene'], ['AtcCode', 'ATC code']]) +
        '<div id="pkg-cy" class="pkg-cy"></div><p class="pkq-meta">A record opens its evidence trail; a paper its DOI. Faded records are not extracted (rejected or sent to review).</p>' +
        '<div id="pkg-pick"></div>' + cypher('drug_card') + cypher('drug_records'));
      var els = [{ data: { id: 'd', label: card.name, color: KIND_COLOR.Drug, size: 30 } }], seen = {};
      function node(id, label, color, size, extra) {
        if (seen[id]) return; seen[id] = 1;
        els.push({ data: Object.assign({ id: id, label: label, color: color, size: size }, extra || {}) });
      }
      function edge(a, b, label) { els.push({ data: { id: a + '>' + b, source: a, target: b, label: label || '', arrow: 'none' } }); }
      (recs.atc || []).forEach(function (a) { node('atc:' + a.code, a.code, KIND_COLOR.AtcCode, 14, { title: a.name }); edge('d', 'atc:' + a.code); });
      (recs.records || []).forEach(function (r) {
        var rid = 'r:' + r.key;
        node(rid, r.domain + ' ' + (r.cite || ''), DOMAIN_COLOR[r.domain] || KIND_COLOR.Record, 12 + Math.min(10, r.n_params || 0),
          { record: r.key, muted: r.status !== 'extracted', title: r.population });
        edge('d', rid);
        if (r.paper) { node('p:' + r.paper, r.cite + (r.year ? '' : ''), KIND_COLOR.Paper, 14, { doi: r.doi, title: r.title }); edge(rid, 'p:' + r.paper); }
        (r.genes || []).forEach(function (g) { node('g:' + g, g, KIND_COLOR.Gene, 16); edge(rid, 'g:' + g); });
      });
      await draw('pkg-cy', els, null, function (d) {
        var pick = el('pkg-pick'); if (!pick) return;
        if (d.record) { STATE.record = d.record; go('evidence'); }
        else if (d.doi) pick.innerHTML = '<p><b>' + esc(d.label) + '</b> ' + esc(d.title || '') + ' ' + doi(d.doi) + '</p>';
        else if (d.title) pick.innerHTML = '<p><b>' + esc(d.label) + '</b> ' + esc(d.title) + '</p>';
      });
    } catch (e) { fail(e); }
  }
  function cardHtml(c) {
    var dom = {}; (c.record_domains || []).forEach(function (d) { dom[d] = (dom[d] || 0) + 1; });
    var path = (c.atc_path || []).slice().sort(function (a, b) { return a.level - b.level; });
    var db = c.drugbank ? '<a href="https://go.drugbank.com/drugs/' + esc(c.drugbank) + '" target="_blank" rel="noopener">' + esc(c.drugbank) + '</a>' : '';
    var h = '<div class="pkg-card"><h3>' + esc(c.name) + ' <small>' + esc((c.groups || []).join(', ')) +
      (c.molecule_type ? ' · ' + esc(c.molecule_type) : '') + (c.formula ? ' · ' + esc(c.formula) : '') + '</small></h3>';
    if (c.about && c.about.length) h += '<p>' + c.about.map(function (a) { return esc(a.text); }).join(' ') +
      ' <span class="pkq-meta">(summary from ' + esc(Array.from(new Set([].concat.apply([], c.about.map(function (a) { return a.basis || []; })))).join(', ')) + ')</span></p>';
    h += '<dl class="pkg-facts">';
    if (path.length || (c.atc || []).length) h += '<dt>ATC</dt><dd>' + path.map(function (p) { return esc(p.code + ' ' + p.name); }).join(' › ') +
      ((c.atc || []).length ? ' › <b>' + c.atc.map(function (a) { return esc(a.code); }).join(', ') + '</b>' : '') + '</dd>';
    h += '<dt>In this graph</dt><dd>' + Object.keys(dom).sort().map(function (k) { return dom[k] + ' ' + esc(k) + ' record' + (dom[k] > 1 ? 's' : ''); }).join(', ') +
      (Object.keys(dom).length ? '; ' : '') + (c.papers || 0) + ' papers' + ((c.compounds || []).length ? '; ' + c.compounds.length + ' compounds' : '') + '</dd>';
    if ((c.brands || []).length) h += '<dt>Brands</dt><dd>' + esc(c.brands.join(', ')) + '</dd>';
    if ((c.guidelines || []).length) h += '<dt>Guidelines</dt><dd>' + c.guidelines.map(function (g) {
      return (g.url ? '<a href="' + esc(g.url) + '" target="_blank" rel="noopener">' + esc(g.name) + '</a>' : esc(g.name)) + (g.genes && g.genes.length ? ' (' + esc(g.genes.join(', ')) + ')' : '');
    }).join('; ') + '</dd>';
    if ((c.annotations || []).length) h += '<dt>ClinPGx 1A–2A</dt><dd>' + c.annotations.map(function (a) {
      return '<span title="' + esc(a.phenotypes) + '">' + esc(a.level + ' ' + [].concat(a.genes || []).join('/') + ' ' + (a.category || '')) + '</span>';
    }).join('; ') + '</dd>';
    // compounds come from all of the drug's papers: its metabolites, but also what was given with it
    [['Metabolites', ['metabolite', 'prodrug', 'intermediate']], ['Given with it', ['co-administered']],
     ['Biomarkers measured', ['endogenous_biomarker']]].forEach(function (g) {
      var xs = (c.compounds || []).filter(function (x) { return g[1].indexOf(x.role) >= 0; });
      if (xs.length) h += '<dt>' + g[0] + '</dt><dd>' + xs.map(function (x) {
        return esc(x.name) + (x.formed_from ? ' <small>(from ' + esc(x.formed_from) + ')</small>' : '');
      }).join(', ') + '</dd>';
    });
    if ((c.categories || []).length) h += '<dt>Categories</dt><dd class="pkg-cats">' + esc(c.categories.slice(0, 20).join(' · ')) + '</dd>';
    h += '</dl>';
    if ((c.drugbank_text || []).length) h += '<details><summary>DrugBank text (' + c.drugbank_text.length + ' sections)</summary>' +
      c.drugbank_text.map(function (t) { return '<p><b>' + esc(t.section.replace(/_/g, ' ')) + '.</b> ' + esc(t.text) + '</p>'; }).join('') +
      '<p class="pkq-meta">From DrugBank ' + db + ', CC BY-NC 4.0.</p></details>';
    return h + '</div>';
  }

  async function viewEvidence() {
    if (!STATE.record) return out('<p class="pkq-meta">Open a record from the Drug view.</p>');
    busy('Following the evidence');
    try {
      var r = (await run('record_evidence', { record: STATE.record }))[0];
      if (!r) return out('<p class="pkq-status err">This record is not in the graph.</p>');
      var rows = r.params.map(function (p) {
        var src;
        if (p.via === 'Table') src = 'table ' + esc(p.table || '') + (p.row != null ? ', row ' + p.row : '') + (p.col != null ? ', col ' + p.col : '') +
          (p.header ? ' “' + esc(p.header) + '”' : '') + (p.cell != null ? ': <code>' + esc(p.cell) + '</code>' : '') + (p.caption ? '<br><small>' + esc(p.caption) + '</small>' : '');
        else if (p.via === 'Chunk') src = (p.section ? esc(p.section) + ': ' : 'passage: ') + (p.excerpt ? '<small>' + esc(p.excerpt) + '</small>' :
          '<span class="pkq-meta">text not shown: the paper\'s licence does not allow it</span>');
        else if (p.via === 'Paper') src = '<span class="pkq-meta">' + (p.method === 'value_not_found' ? 'paper only, value not found in its text' : 'paper') + '</span>';
        else src = '<span class="pkq-meta">no source link</span>';
        return '<tr><td><b>' + esc(p.name) + '</b>' + (p.label && p.label !== p.name ? '<br><small>' + esc(p.label) + '</small>' : '') + '</td>' +
          '<td>' + esc(p.value) + ' ' + esc(p.unit || '') + (p.rse != null ? ' <small>(RSE ' + esc(p.rse) + ' %)</small>' : '') + '</td>' +
          '<td>' + esc(p.qcode || '') + (p.qname ? ' <small>' + esc(p.qname) + '</small>' : '') + '</td>' +
          '<td>' + (p.verified ? '<span title="value found where cited">✓</span> ' : p.verified === false ? '<span title="not confirmed in the source">?</span> ' : '') + src + '</td></tr>';
      }).join('');
      out('<div class="pkg-card"><h3>' + esc(r.domain || '') + ' record · ' + esc(r.cite || '') + ' <small>' + esc(r.status || '') + '</small></h3>' +
        '<p>' + esc(r.title || '') + ' (' + esc(r.year || '') + ') ' + doi(r.doi) + ' ' + licence(r.license, r.oa) + '</p>' +
        (r.population ? '<p class="pkq-meta">Population: ' + esc(r.population) + (r.n_subjects ? ', n = ' + esc(r.n_subjects) : '') + '</p>' : '') + '</div>' +
        (r.params.length ? '<table class="pkg-table"><thead><tr><th>Parameter</th><th>Value</th><th>Q-code</th><th>Where it came from</th></tr></thead><tbody>' + rows + '</tbody></table>'
          : '<p class="pkq-meta">This record carries no parameter values (a PGx or PD finding without numbers, or a record not extracted).</p>') +
        cypher('record_evidence'));
    } catch (e) { fail(e); }
  }

  async function viewCitations() {
    if (!STATE.drug) return out('<p class="pkq-meta">Pick a drug above.</p>');
    busy('Reading the citations');
    try {
      var rows = await run('citations', { slug: STATE.drug });
      if (!rows.length) return out('<p class="pkq-meta">No citation links between this drug\'s papers and other papers in the graph.</p>' + cypher('citations'));
      var nodes = {}, indeg = {}, els = [];
      rows.forEach(function (r) {
        nodes[r.src] = nodes[r.src] || { cite: r.src_cite, year: r.src_year, title: r.src_title, rec: r.src_records, inside: true };
        nodes[r.dst] = nodes[r.dst] || { cite: r.dst_cite, year: r.dst_year, title: r.dst_title, rec: r.dst_records, inside: r.inside, others: r.other_drugs };
        indeg[r.dst] = (indeg[r.dst] || 0) + 1;
      });
      Object.keys(nodes).forEach(function (k) {
        var n = nodes[k];
        els.push({ data: { id: k, label: n.cite, title: n.title, doi: /^10\./.test(k) ? k : null, color: n.inside ? KIND_COLOR.Paper : '#adb5bd',
          size: 10 + 4 * Math.min(8, indeg[k] || 0), ring: n.rec } });
      });
      rows.forEach(function (r, i) { els.push({ data: { id: 'e' + i, source: r.src, target: r.dst, arrow: 'triangle', label: '' } }); });
      var top = Object.keys(indeg).sort(function (a, b) { return indeg[b] - indeg[a]; }).slice(0, 12);
      out(legend([['Paper', 'paper studied for this drug'], ['x', 'cited paper studied only for other drugs', '#adb5bd']]) +
        '<div id="pkg-cy" class="pkg-cy"></div><p class="pkq-meta">' + rows.length + ' citation links. Size: times cited here; orange ring: a paper with extracted records.</p>' +
        '<div id="pkg-pick"></div><h3>Most cited</h3><ol>' + top.map(function (k) {
          var n = nodes[k];
          return '<li><b>' + esc(n.cite) + '</b> (' + indeg[k] + '×) ' + esc(n.title || '') + (n.others && n.others.length ? ' <small>also studied for: ' + esc(n.others.join(', ')) + '</small>' : '') + '</li>';
        }).join('') + '</ol>' + cypher('citations'));
      await draw('pkg-cy', els, null, function (d) {
        var pick = el('pkg-pick'); if (pick) pick.innerHTML = '<p><b>' + esc(d.label) + '</b> ' + esc(d.title || '') + ' ' + doi(d.doi) + '</p>';
      });
    } catch (e) { fail(e); }
  }

  var ROLE_ORDER = ['therapeutic', 'diagnostic', 'screening test', 'preventive', 'investigational', 'toxin', 'unclassified'];
  async function viewCondition() {
    var q = (STATE.q || '').trim();
    if (q.length < 3) return out('<p class="pkq-meta">Type a condition or diagnosis (at least 3 letters), e.g. gout, tuberculosis, angiography, Stevens-Johnson.</p>');
    busy('Looking for drugs related to ' + q);
    try {
      var rows = await run('condition_drugs', { q: q });
      if (!rows.length) return out('<p class="pkq-meta">No drug in this graph names “' + esc(q) + '”.</p>' + cypher('condition_drugs'));
      var byRole = {};
      rows.forEach(function (r) { (r.roles.length ? r.roles : ['unclassified']).forEach(function (x) { (byRole[x] = byRole[x] || []).push(r); }); });
      var roles = ROLE_ORDER.filter(function (x) { return byRole[x]; });
      out('<p>' + rows.length + ' drug' + (rows.length > 1 ? 's' : '') + ' relate to “' + esc(q) + '”: ' + roles.map(function (x) { return byRole[x].length + ' ' + esc(x); }).join(', ') + '.</p>' +
        '<p class="pkq-meta">Role comes from the ATC code (V04C screening tests; V04, V08, V09 diagnostics; J07 vaccines) and DrugBank\'s diagnostic and contrast categories. ' +
        'Relation: <b>indication</b> DrugBank says it treats or diagnoses it; <b>summary</b> the drug summary names it; <b>studied in</b> a record\'s population has it; ' +
        '<b>response</b> / <b>toxicity</b> a ClinPGx annotation links a gene to it.</p>' +
        roles.map(function (role) {
          return '<h3>' + esc(role) + ' <small>(' + byRole[role].length + ')</small></h3><table class="pkg-table"><tbody>' + byRole[role].map(function (r) {
            return '<tr><td>' + drugLink(r.slug, r.name) + '<br><small>' + esc((r.atc || []).join(', ')) + (r.records ? ' · ' + r.records + ' records' : '') + '</small></td><td>' +
              r.relations.map(function (x) { return '<span class="pkg-chip rel-' + esc(x.replace(/\s+/g, '-')) + '">' + esc(x) + '</span>'; }).join(' ') + '<ul>' +
              r.evidence.slice(0, 3).map(function (e) {
                return '<li><small><b>' + esc(e.source) + (e.genes && e.genes.length ? ' ' + esc(e.genes.join('/')) : '') + ':</b> ' + esc(e.text) + '</small></li>';
              }).join('') + '</ul></td></tr>';
          }).join('') + '</tbody></table>';
        }).join('') + cypher('condition_drugs'));
    } catch (e) { fail(e); }
  }

  async function viewConnect() {
    if (!STATE.drug || !STATE.b) return out('<p class="pkq-meta">Pick the first drug above and the second one here.</p>');
    busy('Looking for the shortest path');
    try {
      var r = (await run('connect', { a: STATE.drug, b: STATE.b }))[0];
      if (!r) return out('<p class="pkq-meta">No path of up to 8 steps through papers, citations, records, genes, guidelines or ATC classes.</p>' + cypher('connect'));
      var els = r.nodes.map(function (n) { return { data: { id: n.id, label: n.label, title: n.title, color: KIND_COLOR[n.kind] || '#868e96', size: n.kind === 'Drug' ? 26 : 16 } }; })
        .concat(r.rels.map(function (x, i) { return { data: { id: 'e' + i, source: x.from, target: x.to, label: x.type, arrow: 'triangle' } }; }));
      out('<p>' + r.rels.length + ' step' + (r.rels.length > 1 ? 's' : '') + ': ' + r.nodes.map(function (n) {
        return '<b>' + esc(n.label) + '</b> <small>' + esc(n.kind) + '</small>';
      }).join(' — ') + '</p><div id="pkg-cy" class="pkg-cy pkg-cy-small"></div>' +
        r.nodes.filter(function (n) { return n.title; }).map(function (n) { return '<p class="pkq-meta">' + esc(n.label) + ': ' + esc(n.title) + '</p>'; }).join('') + cypher('connect'));
      await draw('pkg-cy', els, { name: 'breadthfirst', directed: false, spacingFactor: 1.2 });
    } catch (e) { fail(e); }
  }

  var VIEWS = { drug: viewDrug, evidence: viewEvidence, citations: viewCitations, condition: viewCondition, connect: viewConnect };

  // ── page state, inputs ─────────────────────────────────────────────────────
  function fromHash() {
    var q = (location.hash.split('?')[1] || '');
    var p = new URLSearchParams(q);
    STATE.view = VIEWS[p.get('view')] ? p.get('view') : STATE.view;
    STATE.drug = p.get('drug') || STATE.drug;
    STATE.record = p.get('record') || STATE.record;
    STATE.q = p.get('q') || STATE.q;
    STATE.b = p.get('b') || STATE.b;
  }
  function writeHash() {
    var p = new URLSearchParams();
    p.set('view', STATE.view);
    if (STATE.drug) p.set('drug', STATE.drug);
    if (STATE.view === 'evidence' && STATE.record) p.set('record', STATE.record);
    if (STATE.view === 'condition' && STATE.q) p.set('q', STATE.q);
    if (STATE.view === 'connect' && STATE.b) p.set('b', STATE.b);
    history.replaceState(null, '', '#/graph?' + p.toString());
  }
  function controls() {
    document.querySelectorAll('.pkg-views button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.view === STATE.view)); });
    var show = { drug: ['drug'], evidence: [], citations: ['drug'], condition: ['cond'], connect: ['drug', 'b'] }[STATE.view];
    [['drug', 'pkg-drugrow'], ['cond', 'pkg-condrow'], ['b', 'pkg-brow']].forEach(function (x) { var r = el(x[1]); if (r) r.hidden = show.indexOf(x[0]) < 0; });
    var d = el('pkg-drug'); if (d && STATE.drug && !d.value) d.value = STATE.drug.replace(/^(drug|toxin)_/, '').replace(/_/g, ' ');
    var b = el('pkg-b'); if (b && STATE.b && !b.value) b.value = STATE.b.replace(/^(drug|toxin)_/, '').replace(/_/g, ' ');
    var c = el('pkg-cond'); if (c && STATE.q && !c.value) c.value = STATE.q;
  }
  function go(view) {
    if (view) STATE.view = view;
    writeHash(); controls();
    if (CY) { CY.destroy(); CY = null; }
    VIEWS[STATE.view]();
  }
  var searchTimer = null;
  function suggest(input, box, pickFn) {
    clearTimeout(searchTimer);
    var q = input.value.trim();
    if (q.length < 2) { box.innerHTML = ''; return; }
    searchTimer = setTimeout(async function () {
      try {
        var hits = await run('drug_search', { q: q });
        box.innerHTML = hits.map(function (h) {
          return '<button type="button" data-slug="' + esc(h.slug) + '">' + esc(h.name) + (h.via ? ' <small>(' + esc(h.via) + ')</small>' : '') +
            (h.records ? ' <small>' + h.records + ' records</small>' : '') + (/^toxin_/.test(h.slug) ? ' <small>toxin store</small>' : '') + '</button>';
        }).join('') || '<span class="pkq-meta">no match</span>';
        box._pick = pickFn;
      } catch (e) { box.innerHTML = '<span class="pkq-status err">' + esc(e.message) + '</span>'; }
    }, 250);
  }
  function wire() {
    // docsify does not re-render when only the query of #/graph?… changes (a link, Back)
    window.addEventListener('hashchange', function () {
      if (!/^#\/graph(\?|$)/.test(location.hash) || !el('pk-graph') || !CONN) return;
      fromHash(); go();
    });
    document.addEventListener('click', function (ev) {
      var t = ev.target; if (!t || !t.closest || !t.closest('#pk-graph')) return;
      var v = t.closest('.pkg-views button'); if (v) { go(v.dataset.view); return; }
      var hit = t.closest('[data-slug]');
      if (hit) { var box = hit.parentNode; if (box._pick) box._pick(hit.dataset.slug, hit.textContent); box.innerHTML = ''; return; }
      var dl = t.closest('a[data-drug]'); if (dl) { ev.preventDefault(); STATE.drug = dl.dataset.drug; var i = el('pkg-drug'); if (i) i.value = ''; go('drug'); return; }
      if (t.id === 'pkg-look') {
        try { localStorage.setItem('pkg-local', '1'); } catch (e) {}
        connect(true).then(function (ok) { if (ok) go(); });
      }
    });
    document.addEventListener('change', function (ev) {
      var t = ev.target; if (!t || t.id !== 'pkg-source') return;
      var cands = (el('pkg-conn') || {})._cands || [];
      if (t.value === 'p') CONN = { mode: 'proxy' };
      else { var c = cands[+t.value.slice(1)]; if (c) CONN = Object.assign({ mode: 'local' }, c); }
      run('probe', {}).then(function (r) { CONN.probe = r[0]; renderConn(cands); go(); }).catch(function (e) { status(e.message, true); });
    });
    document.addEventListener('submit', async function (ev) {
      var f = ev.target; if (!f || f.id !== 'pkg-login') return;
      ev.preventDefault();
      var port = +f.dataset.port, user = el('pkg-user').value, pass = el('pkg-pass').value;
      var auth = btoa(unescape(encodeURIComponent(user + ':' + pass)));
      var cands = (el('pkg-conn') || {})._cands || [];
      var c = cands.filter(function (x) { return x.port === port; })[0]; if (!c) return;
      c.auth = auth;
      var who = await identify(c);
      if (who === 'auth') { status('Wrong user or password for :' + port + '.', true); c.auth = null; return; }
      if (!who) { status('The Neo4j on :' + port + ' is not a Pharmacolibrary graph.', true); c.auth = null; return; }
      try { sessionStorage.setItem('pkg-auth:' + port, auth); } catch (e) {}
      c.needsLogin = false; c.probe = who; CONN = Object.assign({ mode: 'local' }, c);
      renderConn(cands); el('pkg-ui').hidden = false; status(''); go();
    });
    document.addEventListener('input', function (ev) {
      var t = ev.target; if (!t || !t.id) return;
      if (t.id === 'pkg-drug') suggest(t, el('pkg-drughits'), function (slug) { STATE.drug = slug; t.value = ''; go(STATE.view === 'evidence' ? 'drug' : null); });
      if (t.id === 'pkg-b') suggest(t, el('pkg-bhits'), function (slug) { STATE.b = slug; t.value = ''; go('connect'); });
    });
    document.addEventListener('keydown', function (ev) {
      var t = ev.target; if (!t || ev.key !== 'Enter') return;
      if (t.id === 'pkg-cond') { STATE.q = t.value; go('condition'); }
      if (t.id === 'pkg-drug' || t.id === 'pkg-b') {
        var box = el(t.id === 'pkg-drug' ? 'pkg-drughits' : 'pkg-bhits'), first = box && box.querySelector('[data-slug]');
        if (first) first.click();
      }
    });
  }

  var wired = false;
  async function boot() {
    try {
      if (!CAT) CAT = await import(abs('assets/graph/catalogue.mjs'));
      if (!CFG) CFG = await fetch(abs('assets/graph/config.json')).then(function (r) { return r.json(); }).catch(function () { return {}; });
    } catch (e) { status('Could not load the explorer: ' + e.message, true); return; }
    if (!wired) { wire(); wired = true; }
    fromHash();
    var ok = CONN ? true : await connect(false);
    if (CONN) renderConn((el('pkg-conn') || {})._cands || []);
    var ui = el('pkg-ui'); if (ui) ui.hidden = !ok;
    if (ok) go();
  }
  window.pkGraph = { boot: boot };
})();
