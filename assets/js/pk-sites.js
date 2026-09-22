/* pk-sites.js — the /sites page: an on-demand ADME site heat-map, anatomogram and
 * shared-actor table for any set of drugs, computed in the browser from the ADME database
 * (export.adme_sqlite, loaded by index.html's pkdb.loadAdme()). Plain JS, no framework;
 * fetched by the docsify plugin only when a page carries #pk-sites.
 *
 * Exposes window.pkSites = { search(db, term), resolve(db, slugs), compute(db, slugs, opts),
 * render(root, model, opts) }. compute() is a port of pk_knowledge_scripts.adme_sites
 * (tissue_matrix / shared_actors / affected_tissues); render() draws the three views. */
(function () {
  'use strict';
  var PROC = ['absorption', 'distribution', 'metabolism', 'excretion'];
  var TISSUES = ['small intestine', 'liver', 'bile duct', 'kidney', 'blood', 'blood-brain barrier',
                 'brain', 'placenta', 'mammary gland', 'lung', 'skin', 'skeletal muscle', 'adipose tissue',
                 'stomach', 'ileum', 'heart', 'adrenal gland', 'platelet', 'ovary', 'neuromuscular junction'];
  var W = { drugbank_actor: 3, paper_pgx: 2, drugbank_text: 1 };
  var COLORS = ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300', '#4a3aa7', '#e34948'];
  var MAX = 8;

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function q(db, sql, params) {
    var st = db.prepare(sql); st.bind(params || []);
    var out = [];
    while (st.step()) out.push(st.getAsObject());
    st.free(); return out;
  }
  function code(name) {                     // two-letter slot code: 'To', 'Te', 'Hc'
    var w = name.replace(/[^a-z]/gi, ' ').trim().split(/\s+/);
    var s = w.length > 1 ? w[0][0] + w[1][0] : name.slice(0, 2);
    return s[0].toUpperCase() + (s[1] || '').toLowerCase();
  }

  // ── data ────────────────────────────────────────────────────────────────────────────────
  function search(db, term) {
    term = (term || '').trim();
    if (term.length < 2) return [];
    var like = term.replace(/[%_]/g, '') + '%';
    return q(db,
      "SELECT slug, generic_name AS name, has_records, '' AS via FROM adme_drug WHERE generic_name LIKE ? " +
      "UNION SELECT d.slug, d.generic_name, d.has_records, s.name FROM adme_synonym s JOIN adme_drug d ON d.slug = s.drug_slug WHERE s.name LIKE ? " +
      "ORDER BY 2 LIMIT 12", [like, like]);
  }
  function resolve(db, slugs) {
    var out = [];
    slugs.forEach(function (s) {
      var r = q(db, 'SELECT slug, generic_name AS name, drugbank_id, has_records FROM adme_drug WHERE slug = ? OR generic_name = ? LIMIT 1', [s, s]);
      if (r.length) out.push(r[0]);
    });
    return out;
  }
  function compute(db, drugs, opts) {
    opts = opts || {};
    var sites = {};
    q(db, 'SELECT gene, process, tissue, uberon, cell FROM adme_site').forEach(function (r) {
      (sites[r.gene] = sites[r.gene] || { process: r.process, tissues: [], cell: r.cell }).tissues.push([r.tissue, r.uberon]);
    });
    var rows = [];                            // {drug, process, tissue, actor, role, evidence, quote}
    var byActor = {};                         // gene -> {slug -> Set(role)}   (drugbank actors only)
    drugs.forEach(function (d) {
      q(db, 'SELECT gene, kind, role, evidence, source, page, doi FROM adme_actor WHERE drug_slug = ?', [d.slug]).forEach(function (a) {
        var site = sites[a.gene];
        var proc = site ? site.process : (a.kind === 'target' ? 'target' : a.kind === 'enzyme' ? 'metabolism' : 'distribution');
        var tissues = site ? site.tissues : [[null, null]];
        tissues.forEach(function (t) {
          rows.push({ drug: d.slug, process: proc, tissue: t[0], actor: a.gene, role: a.role, evidence: a.evidence, cell: site ? site.cell : null, source: a.source, page: a.page, doi: a.doi });
        });
        if (a.evidence === 'drugbank_actor') {
          var m = byActor[a.gene] = byActor[a.gene] || {};
          (m[d.slug] = m[d.slug] || {})[a.role] = 1;
        }
      });
      if (opts.text !== false) {
        q(db, 'SELECT process, tissue, quote FROM adme_text WHERE drug_slug = ?', [d.slug]).forEach(function (t) {
          rows.push({ drug: d.slug, process: t.process, tissue: t.tissue, actor: null, role: null, evidence: 'drugbank_text', quote: t.quote });
        });
      }
    });
    // shared actors and DDI candidates
    var shared = [], affected = [];
    Object.keys(byActor).forEach(function (gene) {
      var per = byActor[gene], ds = Object.keys(per).sort();
      for (var i = 0; i < ds.length; i++) for (var j = i + 1; j < ds.length; j++) {
        var a = ds[i], b = ds[j], ra = Object.keys(per[a]), rb = Object.keys(per[b]);
        var pert = function (r) { return r.indexOf('inhibitor') >= 0 || r.indexOf('inducer') >= 0; };
        var kind = 'shared';
        if ((ra.indexOf('substrate') >= 0 && pert(rb)) || (rb.indexOf('substrate') >= 0 && pert(ra))) kind = 'ddi_candidate';
        else if (ra.indexOf('substrate') >= 0 && rb.indexOf('substrate') >= 0) kind = 'shared_substrate';
        var site = sites[gene] || {};
        shared.push({ actor: gene, a: a, roles_a: ra, b: b, roles_b: rb, kind: kind, process: site.process || null, tissues: (site.tissues || []).map(function (t) { return t[0]; }) });
        if (kind === 'ddi_candidate') {
          [[a, b, ra, rb], [b, a, rb, ra]].forEach(function (p) {
            var perp = p[0], vict = p[1], rp = p[2], rv = p[3];
            if (rv.indexOf('substrate') >= 0 && pert(rp)) {
              var eff = rp.filter(function (r) { return r === 'inhibitor' || r === 'inducer'; }).join('/');
              (site.tissues || [[null]]).forEach(function (t) {
                affected.push({ perpetrator: perp, victim: vict, actor: gene, effect: eff, process: site.process || null, tissue: t[0] });
              });
            }
          });
        }
      }
    });
    return { drugs: drugs, rows: rows, shared: shared, affected: affected, sites: sites };
  }
  function cellOf(M, slug, proc, tissue) {
    var rs = M.rows.filter(function (r) { return r.drug === slug && r.process === proc && r.tissue === tissue; });
    var w = 0; rs.forEach(function (r) { w = Math.max(w, W[r.evidence] || 1); });
    return { w: w, rows: rs };
  }
  function affectedAt(M, slug, proc, tissue) {
    return M.affected.filter(function (a) { return a.victim === slug && a.tissue === tissue && (!proc || a.process === proc); });
  }

  // ── rendering ───────────────────────────────────────────────────────────────────────────
  var tipEl = null;
  function tip(html, ev) {
    if (!tipEl) { tipEl = document.createElement('div'); tipEl.className = 'pks-tip'; document.body.appendChild(tipEl); }
    if (!html) { tipEl.style.opacity = 0; return; }
    tipEl.innerHTML = html; tipEl.style.opacity = 1;
    var x = Math.min(ev.clientX + 14, window.innerWidth - 330), y = ev.clientY + 14;
    tipEl.style.left = x + 'px'; tipEl.style.top = y + 'px';
  }
  function tipText(name, proc, tissue, rs, aff) {
    var acts = []; var seen = {};
    rs.forEach(function (r) { if (r.actor) { var k = r.actor + ' (' + r.role + ')'; if (!seen[k]) { seen[k] = 1; acts.push(k); } } });
    acts.sort();
    var quote = rs.filter(function (r) { return !r.actor && r.quote; }).map(function (r) { return r.quote; })[0];
    var s = '<b>' + esc(name) + ' · ' + esc(proc) + ' · ' + esc(tissue) + '</b>';
    s += acts.length ? acts.map(esc).join('<br>') : '';
    if (quote) s += (acts.length ? '<br>' : '') + '<small>“…' + esc(quote.slice(0, 100)) + '…”</small>';
    if (!acts.length && !quote) s += '<small>no site evidence</small>';
    if (aff.length) s += '<br><small>affected: ' + aff.map(function (a) { return esc(a.perpetrator + ' ' + a.effect + ' ' + a.actor); }).join('; ') + '</small>';
    return s;
  }
  function nameOf(M, slug) { var d = M.drugs.filter(function (x) { return x.slug === slug; })[0]; return d ? d.name : slug; }
  function codePill(M, slug) {
    var i = M.drugs.map(function (z) { return z.slug; }).indexOf(slug);
    return '<span class="pks-code" title="' + esc(nameOf(M, slug)) + '"><i style="background:' + COLORS[i] + '"></i>' + esc(code(nameOf(M, slug))) + '</span>';
  }
  // The row label's answer to "who": ⇠ the drugs that inhibit/induce an actor this drug is a
  // substrate of (perpetrators), ⇢ the drugs this one affects (victims). Each code wears the
  // drug's own colour — the same swatch that names it in the row header, the chips and the
  // organ slots — so the reader never has to hover to learn which drug the ring points at.
  // Inside an affected cell: one dot per perpetrator at THIS site, in the perpetrator's
  // colour — filled when it inhibits the actor, hollow when it induces it — so the ring says
  // "affected" and the dots say by whom, at the tissue where it happens (tolvaptan's
  // intestinal cell shows Te + Ci, allopurinol's only Te).
  function perpDots(M, aff) {
    if (!aff.length) return '';
    var slugs = M.drugs.map(function (z) { return z.slug; }), seen = {}, dots = [];
    aff.forEach(function (a) {
      var k = a.perpetrator + (a.effect.indexOf('inducer') >= 0 ? '|ind' : '|inh');
      if (seen[k]) return; seen[k] = 1;
      var col = COLORS[slugs.indexOf(a.perpetrator)];
      dots.push('<i class="' + (a.effect.indexOf('inducer') >= 0 ? 'ind' : 'inh') + '" style="' + (a.effect.indexOf('inducer') >= 0 ? 'border-color:' : 'background:') + col + '" title="' + esc(nameOf(M, a.perpetrator) + ' ' + a.effect + ' ' + a.actor) + '"></i>');
    });
    return '<span class="pks-dots">' + dots.join('') + '</span>';
  }
  function partnerCodes(M, slug) {
    var perps = [], victs = [];
    M.affected.forEach(function (a) {
      if (a.victim === slug && perps.indexOf(a.perpetrator) < 0) perps.push(a.perpetrator);
      if (a.perpetrator === slug && victs.indexOf(a.victim) < 0) victs.push(a.victim);
    });
    var h = '';
    if (perps.length) h += ' <span class="pks-partners" title="affected by">\u21E0 ' + perps.map(function (p) { return codePill(M, p); }).join('') + '</span>';
    if (victs.length) h += ' <span class="pks-partners" title="affects">\u21E2 ' + victs.map(function (v) { return codePill(M, v); }).join('') + '</span>';
    return h;
  }

  function renderHeatmap(root, M, opts) {
    var focus = opts.focus, showDDI = opts.ddi !== false;
    var cols = [];
    PROC.forEach(function (p) { TISSUES.forEach(function (t) {
      if (M.drugs.some(function (d) { return cellOf(M, d.slug, p, t).w; })) cols.push([p, t]);
    }); });
    if (!cols.length) { root.innerHTML = '<p class="pks-empty">No site evidence for this set — pick drugs with a DrugBank id.</p>'; return; }
    var h = '<table class="pks-hm"><tr><th></th>';
    var i = 0;
    while (i < cols.length) { var j = i; while (j < cols.length && cols[j][0] === cols[i][0]) j++;
      h += '<th class="proc" colspan="' + (j - i) + '">' + esc(cols[i][0]) + '</th>' + (j < cols.length ? '<th class="gap"></th>' : ''); i = j; }
    h += '</tr><tr><th></th>';
    cols.forEach(function (c, k) { h += '<th class="tissue"><span>' + esc(c[1]) + '</span></th>' + (k + 1 < cols.length && cols[k + 1][0] !== c[0] ? '<th class="gap"></th>' : ''); });
    h += '</tr>';
    M.drugs.forEach(function (d, di) {
      h += '<tr' + (focus && focus !== d.slug ? ' class="dim"' : '') + '><th class="drug"><i style="background:' + COLORS[di] + '"></i>' + esc(d.name) + (showDDI ? partnerCodes(M, d.slug) : '') + '</th>';
      cols.forEach(function (c, k) {
        var cl = cellOf(M, d.slug, c[0], c[1]); var aff = showDDI ? affectedAt(M, d.slug, c[0], c[1]) : [];
        h += '<td class="e' + cl.w + (aff.length ? ' aff' : '') + '" tabindex="0" data-d="' + esc(d.slug) + '" data-p="' + esc(c[0]) + '" data-t="' + esc(c[1]) + '" aria-label="' + esc(d.name + ' ' + c[0] + ' ' + c[1] + ' tier ' + cl.w) + '">' + perpDots(M, aff) + '</td>';
        if (k + 1 < cols.length && cols[k + 1][0] !== c[0]) h += '<td class="gap"></td>';
      });
      h += '</tr>';
    });
    root.innerHTML = '<div class="pks-scroll">' + h + '</table></div>';
    root.querySelectorAll('td[data-d]').forEach(function (td) {
      var html = tipText(nameOf(M, td.dataset.d), td.dataset.p, td.dataset.t, cellOf(M, td.dataset.d, td.dataset.p, td.dataset.t).rows, showDDI ? affectedAt(M, td.dataset.d, td.dataset.p, td.dataset.t) : []);
      td.onmouseenter = function (e) { tip(html, e); }; td.onmousemove = function (e) { tip(html, e); }; td.onmouseleave = function () { tip(null); };
      td.onfocus = function () { var r = td.getBoundingClientRect(); tip(html, { clientX: r.left, clientY: r.bottom }); }; td.onblur = function () { tip(null); };
    });
  }

  var ORGANS = [
    { t: 'brain', label: 'brain', lx: 262, ly: 48, sx: 262, sy: 56 },
    { t: 'blood-brain barrier', label: 'blood–brain barrier', lx: 262, ly: 84, sx: 262, sy: 92 },
    { t: 'lung', label: 'lung', lx: 262, ly: 150, sx: 262, sy: 158 },
    { t: 'blood', label: 'blood', lx: 262, ly: 230, sx: 262, sy: 238 },
    { t: 'liver', label: 'liver', lx: 40, ly: 282, sx: 40, sy: 290 },
    { t: 'bile duct', label: 'bile duct', lx: 40, ly: 322, sx: 40, sy: 330 },
    { t: 'kidney', label: 'kidney', lx: 262, ly: 326, sx: 262, sy: 334 },
    { t: 'small intestine', label: 'small intestine', lx: 262, ly: 380, sx: 262, sy: 388 },
    { t: 'placenta', label: 'placenta', lx: 40, ly: 430, sx: 40, sy: 438 },
    { t: 'mammary gland', label: 'mammary gland', lx: 40, ly: 200, sx: 40, sy: 208 },
    { t: 'skin', label: 'skin', lx: 40, ly: 500, sx: 40, sy: 508 },
  ];
  function organTier(M, slug, tissue) { var w = 0; PROC.forEach(function (p) { w = Math.max(w, cellOf(M, slug, p, tissue).w); }); return w; }

  function renderBody(root, M, opts) {
    var focus = opts.focus, showDDI = opts.ddi !== false, n = M.drugs.length;
    var step = n > 5 ? 15 : 19, wid = n > 5 ? 13 : 17;
    var slots = [], labels = [], arrows = [];
    ORGANS.forEach(function (o) {
      var any = M.drugs.some(function (d) { return organTier(M, d.slug, o.t); });
      if (!any) return;
      labels.push('<text class="lbl" x="' + o.lx + '" y="' + o.ly + '">' + esc(o.label) + '</text>');
      M.drugs.forEach(function (d, i) {
        var w = organTier(M, d.slug, o.t), aff = showDDI ? affectedAt(M, d.slug, null, o.t) : [];
        var x = o.sx + i * step, y = o.sy, dim = focus && focus !== d.slug ? ' dim' : '';
        slots.push('<g class="slotg" data-d="' + esc(d.slug) + '" data-t="' + esc(o.t) + '"><rect class="slot e' + w + dim + '" x="' + x + '" y="' + y + '" width="' + wid + '" height="14" rx="3"/>' +
          (aff.length ? '<rect class="aff" x="' + (x - 2) + '" y="' + (y - 2) + '" width="' + (wid + 4) + '" height="18" rx="4"/>' : '') +
          '<text x="' + (x + wid / 2) + '" y="' + (y + 10.5) + '" text-anchor="middle" class="cd' + (w >= 2 ? ' on' : '') + '">' + esc(n > 5 ? code(d.name)[0] : code(d.name)) + '</text></g>');
        if (showDDI && focus && aff.length && (focus === d.slug || aff.some(function (a) { return a.perpetrator === focus; }))) {
          aff.forEach(function (a) { if (focus !== d.slug && focus !== a.perpetrator) return;
            var pi = M.drugs.map(function (z) { return z.slug; }).indexOf(a.perpetrator);
            var px = 210 + (pi - (n - 1) / 2) * 18, py = 560;
            arrows.push('<path class="arrow" style="stroke:' + COLORS[pi] + '" d="M' + px + ',' + (py - 8) + ' C' + px + ',' + ((py + y) / 2) + ' ' + (x + wid / 2) + ',' + ((py + y) / 2) + ' ' + (x + wid / 2) + ',' + (y + 18) + '"/>'); });
        }
      });
    });
    var perps = {}; M.affected.forEach(function (a) { perps[a.perpetrator] = 1; });
    var perpRow = showDDI && Object.keys(perps).length ? M.drugs.map(function (d, i) { return perps[d.slug] ? '<g><circle cx="' + (210 + (i - (n - 1) / 2) * 18) + '" cy="560" r="7" fill="' + COLORS[i] + '"/><text x="' + (210 + (i - (n - 1) / 2) * 18) + '" y="563.5" text-anchor="middle" class="cd on">' + esc(code(d.name)[0]) + '</text></g>' : ''; }).join('') + '<text class="lbl" x="210" y="585" text-anchor="middle">perpetrators (inhibit / induce)</text>' : '';
    root.innerHTML = '<svg class="pks-body" viewBox="0 0 420 600" role="img" aria-label="schematic body with ADME organs">' +
      '<defs><marker id="pks-ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="context-stroke"/></marker></defs>' +
      '<circle class="sil" cx="210" cy="60" r="38"/><path class="sil" d="M150,120 h120 a34,34 0 0 1 34,34 v300 a34,34 0 0 1 -34,34 h-120 a34,34 0 0 1 -34,-34 v-300 a34,34 0 0 1 34,-34 z"/>' +
      '<ellipse class="organ" cx="210" cy="58" rx="24" ry="19"/>' +
      '<path class="organ" d="M186,232 c-6,18 6,38 24,42 18,4 30,-8 36,-24 6,-16 -8,-30 -30,-28 -12,1 -26,2 -30,10 z"/>' +
      '<path class="organ" d="M150,285 c-8,18 6,40 40,46 26,4 44,-6 46,-20 2,-14 -14,-26 -40,-30 -22,-3 -40,-6 -46,4 z"/>' +
      '<ellipse class="organ" cx="176" cy="342" rx="9" ry="16"/><ellipse class="organ" cx="244" cy="342" rx="9" ry="16"/>' +
      '<path class="organ" d="M172,372 c0,24 14,40 38,40 24,0 38,-16 38,-40 0,-18 -12,-26 -20,-14 -6,10 -8,22 -18,22 -10,0 -12,-12 -18,-22 -8,-12 -20,-4 -20,14 z"/>' +
      '<path class="organ" d="M180,150 c-14,0 -22,14 -22,34 0,16 8,26 22,26 z M240,150 c14,0 22,14 22,34 0,16 -8,26 -22,26 z" opacity=".6"/>' +
      '<line x1="210" y1="100" x2="210" y2="232" stroke="var(--pks-organ-line)" stroke-width="3" stroke-linecap="round" opacity=".55"/>' +
      labels.join('') + slots.join('') + arrows.join('') + perpRow + '</svg>';
    root.querySelectorAll('.slotg').forEach(function (g) {
      var d = g.dataset.d, t = g.dataset.t;
      var rs = M.rows.filter(function (r) { return r.drug === d && r.tissue === t; });
      var procs = []; rs.forEach(function (r) { if (procs.indexOf(r.process) < 0) procs.push(r.process); });
      var html = tipText(nameOf(M, d), procs.join('/') || '—', t, rs, showDDI ? affectedAt(M, d, null, t) : []);
      g.onmouseenter = function (e) { tip(html, e); if (opts.onOrgan) opts.onOrgan(d, t, false); };
      g.onmousemove = function (e) { tip(html, e); }; g.onmouseleave = function () { tip(null); };
      g.onclick = function () { if (opts.onOrgan) opts.onOrgan(d, t, true); };
    });
  }

  function renderDetail(root, M, slug, tissue, pinned) {
    var rs = M.rows.filter(function (r) { return r.drug === slug && (!tissue || r.tissue === tissue); });
    var acts = {};
    rs.forEach(function (r) { if (!r.actor) return; var v = acts[r.actor] = acts[r.actor] || { roles: {}, tissues: {}, process: r.process }; v.roles[r.role] = 1; if (r.tissue) v.tissues[r.tissue] = 1; });
    var aff = M.affected.filter(function (a) { return a.victim === slug && (!tissue || a.tissue === tissue); });
    var h = '<h4>' + esc(nameOf(M, slug)) + (tissue ? ' · ' + esc(tissue) : '') + (pinned ? ' <span class="pks-meta">pinned — click another organ to change, double-click to release</span>' : '') + '</h4>';
    var keys = Object.keys(acts).sort();
    h += keys.length ? '<table class="pks-detail"><tr><th>actor</th><th>role</th><th>process</th><th>tissues</th></tr>' + keys.map(function (a) { var v = acts[a]; return '<tr><td class="mono">' + esc(a) + '</td><td>' + Object.keys(v.roles).map(function (r) { return '<span class="pks-role ' + esc(r) + '">' + esc(r) + '</span>'; }).join('') + '</td><td>' + esc(v.process) + '</td><td>' + esc(Object.keys(v.tissues).join(', ') || 'not in the tissue table') + '</td></tr>'; }).join('') + '</table>' : '<p class="pks-meta">no curated actor here</p>';
    if (aff.length) h += '<h4 class="warn">can be affected</h4><table class="pks-detail">' + aff.map(function (a) { return '<tr><td><b>' + esc(nameOf(M, a.perpetrator)) + '</b> ' + esc(a.effect) + 's <span class="mono">' + esc(a.actor) + '</span></td><td>' + esc(a.process || '') + ' · ' + esc(a.tissue || 'site unmapped') + '</td></tr>'; }).join('') + '</table>';
    root.innerHTML = h;
  }

  // "Who affects whom": rows are perpetrators, columns victims, a cell the actor(s) through
  // which the row drug changes the column drug's fate — ⊣ inhibits, ↑ induces — with the
  // tissue in the tooltip. Every drug of the set sits on both axes so an EMPTY row or column
  // is itself readable (this drug affects nothing / is affected by nothing here). The
  // shared-actors list below carries the same facts undirected; this is the directed view.
  function renderDdi(root, M, opts) {
    var focus = opts.focus, showDDI = opts.ddi !== false;
    if (!showDDI) { root.innerHTML = '<p class="pks-empty">co-administration layer is off.</p>'; return; }
    if (!M.affected.length) { root.innerHTML = '<p class="pks-empty">No perpetrator \u2192 victim pair in this set: no drug here inhibits or induces an actor another one is a substrate of.</p>'; return; }
    var cell = {};
    M.affected.forEach(function (a) {
      var k = a.perpetrator + '|' + a.victim, c = cell[k] = cell[k] || {};
      var v = c[a.actor] = c[a.actor] || { effect: a.effect, tissues: [], process: a.process };
      if (a.tissue && v.tissues.indexOf(a.tissue) < 0) v.tissues.push(a.tissue);
    });
    var h = '<table class="pks-ddi"><tr><th class="corner"><span>perpetrator \u2193 \u00b7 victim \u2192</span></th>';
    M.drugs.forEach(function (d, i) { h += '<th class="victim' + (focus && focus !== d.slug ? ' dim' : '') + '"><i style="background:' + COLORS[i] + '"></i>' + esc(d.name) + '</th>'; });
    h += '</tr>';
    M.drugs.forEach(function (p, i) {
      h += '<tr' + (focus && focus !== p.slug ? ' class="dim"' : '') + '><th class="perp"><i style="background:' + COLORS[i] + '"></i>' + esc(p.name) + '</th>';
      M.drugs.forEach(function (v) {
        if (v.slug === p.slug) { h += '<td class="self"></td>'; return; }
        var c = cell[p.slug + '|' + v.slug];
        if (!c) { h += '<td class="none' + (focus && focus !== v.slug && focus !== p.slug ? ' dim' : '') + '"></td>'; return; }
        var acts = Object.keys(c).sort().map(function (g) {
          var x = c[g], glyph = x.effect.indexOf('inducer') >= 0 ? (x.effect.indexOf('inhibitor') >= 0 ? '\u22A3\u2191' : '\u2191') : '\u22A3';
          return '<span class="pks-act" title="' + esc(p.name + ' ' + x.effect + ' ' + g + ' \u2192 ' + v.name + ' (substrate)' + (x.process ? ' \u00b7 ' + x.process : '') + ' \u00b7 ' + (x.tissues.length ? x.tissues.join(', ') : 'site unmapped')) + '"><span class="mono">' + esc(g) + '</span> ' + glyph + '</span>';
        });
        h += '<td class="hit' + (focus && focus !== v.slug && focus !== p.slug ? ' dim' : '') + '">' + acts.join('<br>') + '</td>';
      });
      h += '</tr>';
    });
    root.innerHTML = '<div class="pks-scroll">' + h + '</table></div><p class="pks-meta">\u22A3 inhibits the actor \u00b7 \u2191 induces it; the column drug is that actor\u2019s substrate. Hover a cell for the tissue.</p>';
  }

  function renderShared(root, M) {
    var order = { ddi_candidate: 0, shared_substrate: 1, shared: 2 };
    var list = M.shared.slice().sort(function (a, b) { return (order[a.kind] - order[b.kind]) || a.actor.localeCompare(b.actor); });
    if (!list.length) { root.innerHTML = '<p class="pks-empty">These drugs share no curated actor.</p>'; return; }
    var slugs = M.drugs.map(function (d) { return d.slug; });
    root.innerHTML = list.map(function (s) {
      var ia = slugs.indexOf(s.a), ib = slugs.indexOf(s.b);
      var kind = { ddi_candidate: '<b class="warn">DDI candidate</b>', shared_substrate: 'shared substrate (competition)', shared: 'shared target / binding' }[s.kind];
      return '<div class="pks-row"><div class="who"><i style="background:' + COLORS[ia] + '"></i>' + esc(nameOf(M, s.a)) + ' <span class="pks-meta">' + esc(s.roles_a.join('/')) + '</span><br><i style="background:' + COLORS[ib] + '"></i>' + esc(nameOf(M, s.b)) + ' <span class="pks-meta">' + esc(s.roles_b.join('/')) + '</span></div><div><span class="mono">' + esc(s.actor) + '</span> — ' + kind + '<br><span class="pks-meta">' + esc(s.process || 'role unmapped') + ' · ' + esc(s.tissues.length ? s.tissues.join(', ') : 'tissue not in the hand table') + '</span></div></div>';
    }).join('');
  }

  // The evidence cell names its source: a paper_pgx gene links to the record's own page on
  // this site (which carries the citation and the DOI) and, when the paper has one, straight
  // to the DOI; a DrugBank actor names DrugBank; prose quotes DrugBank's ADME text.
  function evidenceCell(r) {
    if (r.evidence === 'paper_pgx') {
      var h = 'paper PGx';
      if (r.source) h += ' · ' + (r.page ? '<a href="#/' + esc(r.page.replace(/\.md$/, '')) + '" title="the record on this site">' + esc(r.source) + '</a>' : esc(r.source));
      if (r.doi) h += ' <a class="pks-doi" href="https://doi.org/' + esc(r.doi) + '" target="_blank" rel="noopener" title="' + esc(r.doi) + '">doi</a>';
      return h;
    }
    if (r.evidence === 'drugbank_actor') return 'DrugBank actor';
    if (r.evidence === 'drugbank_text') return 'DrugBank ADME prose';
    return esc(r.evidence);
  }
  function renderTable(root, M) {
    root.innerHTML = '<table class="pks-tbl"><tr><th>drug</th><th>process</th><th>tissue</th><th>actor</th><th>role</th><th>evidence</th></tr>' +
      M.rows.map(function (r) { return '<tr><td>' + esc(nameOf(M, r.drug)) + '</td><td>' + esc(r.process) + '</td><td>' + esc(r.tissue || '—') + '</td><td class="mono">' + esc(r.actor || (r.quote ? '“' + r.quote.slice(0, 70) + '…”' : '')) + '</td><td>' + esc(r.role || '') + '</td><td>' + evidenceCell(r) + '</td></tr>'; }).join('') + '</table>';
  }

  function render(root, M, opts) {
    opts = opts || {};
    var hm = root.querySelector('.pks-heatmap'), body = root.querySelector('.pks-anatomogram'),
        det = root.querySelector('.pks-detailbox'), sh = root.querySelector('.pks-shared'), tb = root.querySelector('.pks-table');
    if (hm) renderHeatmap(hm, M, opts);
    if (body) renderBody(body, M, Object.assign({}, opts, { onOrgan: function (d, t, pin) {
      if (!det) return;
      if (pin) det.dataset.pin = '1'; else if (det.dataset.pin) return;
      renderDetail(det, M, d, t, !!pin);
    } }));
    if (det && !det.dataset.pin && M.drugs.length) renderDetail(det, M, opts.focus || M.drugs[0].slug, null, false);
    var ddi = root.querySelector('.pks-ddi-box');
    if (ddi) renderDdi(ddi, M, opts);
    if (sh) renderShared(sh, M);
    if (tb) renderTable(tb, M);
  }

  window.pkSites = { search: search, resolve: resolve, compute: compute, render: render, COLORS: COLORS, MAX: MAX, code: code, esc: esc };
})();
