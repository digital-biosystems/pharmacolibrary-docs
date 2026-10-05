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
                 'stomach', 'ileum', 'heart', 'adrenal gland', 'platelet', 'ovary', 'testis', 'prostate gland',
                 'neuromuscular junction'];
  // evidence weight on the heat map: curated actor 3; a paper or a ClinPGx clinical annotation
  // or label 2; a ClinPGx relationship or DrugBank's prose 1
  var W = { drugbank_actor: 3, paper_pgx: 2, clinpgx_annotation: 2, clinpgx_label: 2, clinpgx_relation: 1, drugbank_text: 1 };
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
      // url (ClinPGx links) is newer than some published databases: fall back without it
      var acts;
      try { acts = q(db, 'SELECT gene, kind, role, evidence, source, page, doi, url FROM adme_actor WHERE drug_slug = ?', [d.slug]); }
      catch (e) { acts = q(db, 'SELECT gene, kind, role, evidence, source, page, doi FROM adme_actor WHERE drug_slug = ?', [d.slug]); }
      acts.forEach(function (a) {
        var site = sites[a.gene];
        var proc = processOf(site, a.kind, a.role);
        var tissues = site ? site.tissues : [[null, null]];
        tissues.forEach(function (t) {
          rows.push({ drug: d.slug, process: proc, tissue: t[0], actor: a.gene, role: a.role, evidence: a.evidence, cell: site ? site.cell : null, source: a.source, page: a.page, doi: a.doi, url: a.url });
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
    return { drugs: drugs, rows: rows, shared: shared, affected: affected, sites: sites,
             pgx: (opts.pgx && opts.pgx.length) ? pgxEffects(db, drugs, opts.pgx) : [] };
  }

  // ── patient pharmacogenes ───────────────────────────────────────────────────────────────
  // A phenotype belongs to the patient, so it applies to every drug of the set. Mirrors
  // pk_knowledge_scripts.pgx_phenotypes: one activity axis (UM +2 … PM −2); the drug's
  // relation to the gene decides the direction — the gene FORMS its active metabolite (a
  // prodrug; from the KB's PGx records) or CLEARS it (a paper's metabolism/transport record,
  // else a DrugBank 'substrate' of a metabolizer/transporter gene). A target or safety gene
  // has no direction: its guideline row is the answer. Nothing here leaves the browser.
  var ACT = { UM: 2, RM: 1, NM: 0, IM: -1, PM: -2 };
  function pgxDirection(code, relation) {
    var a = ACT[code];
    if (a === undefined || (relation !== 'formation' && relation !== 'clearance')) return null;
    if (a === 0) return { sign: 0, words: 'reference activity' };
    // a formation gene: the parent moves one way, the active metabolite the other
    if (relation === 'formation') return { sign: a > 0 ? -1 : 1, both: true, words: a > 0 ? 'exposure \u2193 \u00b7 active metabolite \u2191' : 'exposure \u2191 \u00b7 active metabolite \u2193' };
    return { sign: a > 0 ? -1 : 1, words: a > 0 ? 'exposure \u2193' : 'exposure \u2191' };
  }
  function inList(n) { return '(' + new Array(n + 1).join('?,').slice(0, -1) + ')'; }
  function safeQ(db, sql, params) { try { return q(db, sql, params); } catch (e) { return []; } }
  // every gene a phenotype can be chosen for (all pharmacogenes the guidelines name), in
  // alphabetical order; rank marks its relevance to THIS set: 0 a guideline for one of its
  // drugs, 1 a paper relation, 2 one of them is its substrate, 3 none
  function pgxGenes(db, drugs) {
    var slugs = drugs.map(function (d) { return d.slug; });
    var rank = {};
    safeQ(db, 'SELECT DISTINCT gene FROM adme_phenotype').forEach(function (r) { rank[r.gene] = 3; });
    if (!slugs.length) slugs = ['\u0000'];
    safeQ(db, 'SELECT DISTINCT gene FROM adme_pgx_guideline WHERE drug_slug IN ' + inList(slugs.length), slugs).forEach(function (r) { rank[r.gene] = 0; });
    safeQ(db, 'SELECT DISTINCT gene FROM adme_pgx_relation WHERE drug_slug IN ' + inList(slugs.length), slugs).forEach(function (r) { if (!(rank[r.gene] < 1)) rank[r.gene] = 1; });
    safeQ(db, "SELECT DISTINCT gene FROM adme_actor WHERE role = 'substrate' AND drug_slug IN " + inList(slugs.length), slugs).forEach(function (r) { if (!(rank[r.gene] < 2)) rank[r.gene] = 2; });
    var out = [];
    Object.keys(rank).forEach(function (g) {
      var ph = safeQ(db, 'SELECT code, label, activity, kind FROM adme_phenotype WHERE gene = ? ORDER BY activity DESC, label', [g]);
      if (ph.length) out.push({ gene: g, rank: rank[g], kind: ph[0].kind, phenos: ph });
    });
    return out.sort(function (a, b) { return a.gene.localeCompare(b.gene); });
  }
  function pgxEffects(db, drugs, sel) {
    var out = [];
    drugs.forEach(function (d) {
      sel.forEach(function (s) {
        var ph = safeQ(db, 'SELECT label, activity, kind FROM adme_phenotype WHERE gene = ? AND code = ?', [s.gene, s.code])[0] || {};
        var rel = (safeQ(db, 'SELECT relation FROM adme_pgx_relation WHERE drug_slug = ? AND gene = ?', [d.slug, s.gene])[0] || {}).relation || null;
        var sub = (ph.kind === 'metabolizer' || ph.kind === 'transporter') &&
            safeQ(db, "SELECT 1 FROM adme_actor WHERE drug_slug = ? AND gene = ? AND role = 'substrate' LIMIT 1", [d.slug, s.gene]).length > 0;
        // the guideline's row for this phenotype; a guideline without a phenotype table ('*')
        // applies to any non-normal phenotype of the gene
        var gl = safeQ(db, "SELECT label, source, guideline_id, recommendation, avoid FROM adme_pgx_guideline WHERE drug_slug = ? AND gene = ? AND (code = ? OR (code = '*' AND ? <> 'NM'))", [d.slug, s.gene, s.code, s.code]);
        var ef = safeQ(db, 'SELECT parameter, form, theta, stem, page, doi FROM adme_pgx_effect WHERE drug_slug = ? AND gene = ? AND code = ?', [d.slug, s.gene, s.code]);
        // a paper's 'clears' call alone is an evidence_only LLM reading (simvastatin–CYP2D6):
        // it counts when DrugBank, a guideline or a paper effect size supports the pair
        if (rel === 'clearance' && !sub && !gl.length && !ef.length) rel = null;
        var how = rel === 'formation' ? 'guideline' : rel ? (sub ? 'drugbank' : 'paper') : null;
        if (!rel && sub) { rel = 'clearance'; how = 'drugbank'; }
        if (!rel && !gl.length && !ef.length) return;
        out.push({ drug: d.slug, gene: s.gene, code: s.code, label: ph.label || s.code, relation: rel, relationFrom: how,
                   dir: pgxDirection(s.code, rel), guidelines: gl, effects: ef });
      });
    });
    return out;
  }
  // ── PharmCAT import ─────────────────────────────────────────────────────────────────────
  // A PharmCAT result read IN THE BROWSER (FileReader — nothing is uploaded): report.json
  // (v3: genes.GENE.recommendationDiplotypes[].phenotypes; v2: genes.CPIC|DPWG.GENE…),
  // the Phenotyper's phenotype.json (geneReports.CPIC|DPWG.GENE…), the calls-only report.tsv
  // (Gene … Phenotype columns), or a reduced {genes: {GENE: {phenotype}}}. Only the
  // NON-normal phenotypes are kept: normal, indeterminate, no result, uncertain and n/a are
  // skipped, and a gene whose diplotypes disagree is reported, not guessed.
  var PHENO_RE = [
    [/ultra[- ]?rapid/i, 'UM'], [/\brapid metaboli/i, 'RM'], [/\b(?:normal|extensive) metaboli/i, 'NM'],
    [/\bintermediate metaboli/i, 'IM'], [/\bpoor metaboli/i, 'PM'], [/\bincreased function/i, 'UM'],
    [/\bnormal function/i, 'NM'], [/\bdecreased function/i, 'IM'], [/\b(?:poor|no) function/i, 'PM']];
  // normal / uninformative calls, including the gene-specific normals: VKORC1 -1639 GG (normal
  // sensitivity), CFTR 'ivacaftor non-responsive' (no ivacaftor-responsive variant)
  var SKIP_RE = /^(?:normal|normal function|normal metaboli[sz]er|indeterminate|no result|n\/a|na|uncertain susceptibility|unknown|not called|negative|.*\bnegative|-1639 GG|.*non-responsive.*)$/i;
  function phenoCode(text) {
    for (var i = 0; i < PHENO_RE.length; i++) if (PHENO_RE[i][0].test(text)) return PHENO_RE[i][1];
    return null;
  }
  function pharmcatCalls(text) {
    var calls = {};               // gene -> {phenos: Set, diplotypes: Set}
    function add(gene, phenos, dip) {
      if (!gene) return;
      var c = calls[gene] = calls[gene] || { phenos: {}, dips: {} };
      (phenos || []).forEach(function (p) { if (p != null && String(p).trim()) c.phenos[String(p).trim()] = 1; });
      if (dip) c.dips[dip] = 1;
    }
    function fromGeneObj(gene, g) {
      var ds = (g && (g.recommendationDiplotypes || g.sourceDiplotypes)) || [];
      if (ds.length) ds.forEach(function (d) { add(gene, d.phenotypes || [], d.label || ''); });
      else if (g && (g.phenotype || g.phenotypes)) add(gene, [].concat(g.phenotype || g.phenotypes), g.label || '');
    }
    var meta = { format: '', version: '' }, j = null;
    try { j = JSON.parse(text); } catch (e) { j = null; }
    if (j && typeof j === 'object') {
      meta.version = j.pharmcatVersion || '';
      var genes = j.genes || (j.geneReports) || {};
      var bySource = ['CPIC', 'DPWG', 'FDA'].some(function (k) { return genes[k] && typeof genes[k] === 'object'; });
      meta.format = j.geneReports ? 'phenotype.json' : bySource ? 'report.json (v2)' : 'report.json';
      if (bySource) Object.keys(genes).forEach(function (src) { Object.keys(genes[src] || {}).forEach(function (g) { fromGeneObj(g, genes[src][g]); }); });
      else Object.keys(genes).forEach(function (g) { fromGeneObj(g, genes[g]); });
    } else {
      var lines = String(text).split(/\r?\n/).filter(function (l) { return l.trim() && l.charAt(0) !== '#'; });
      var hi = -1, head = [];
      for (var i = 0; i < Math.min(lines.length, 5); i++) {
        var cols = lines[i].split('\t').map(function (c) { return c.trim().toLowerCase(); });
        if (cols.indexOf('gene') >= 0 && cols.some(function (c) { return c.indexOf('phenotype') >= 0; })) { hi = i; head = cols; break; }
      }
      if (hi < 0) throw new Error('not a PharmCAT report: expected report.json, phenotype.json or the calls-only report.tsv');
      meta.format = 'report.tsv';
      var gi = head.indexOf('gene'), pi = head.findIndex(function (c) { return c.indexOf('phenotype') >= 0; }),
          di = head.findIndex(function (c) { return c.indexOf('diplotype') >= 0; });
      lines.slice(hi + 1).forEach(function (l) {
        var c = l.split('\t');
        add((c[gi] || '').trim(), (c[pi] || '').split(/;|\//).map(function (x) { return x.trim(); }), di >= 0 ? (c[di] || '').trim() : '');
      });
    }
    return { meta: meta, calls: calls };
  }
  // -> {meta, picked: [{gene, code, phenotype, diplotype}], skipped: [gene], ambiguous: [{gene, phenotypes}]}
  function pharmcatImport(db, text) {
    var r = pharmcatCalls(text), picked = [], skipped = [], ambiguous = [];
    Object.keys(r.calls).sort().forEach(function (gene) {
      var ph = Object.keys(r.calls[gene].phenos).filter(function (p) { return !SKIP_RE.test(p); });
      if (!ph.length) { skipped.push(gene); return; }
      var codes = {}; ph.forEach(function (p) {
        var c = phenoCode(p);
        if (!c && db) {                      // off the activity axis: the guideline's own label
          var hit = safeQ(db, 'SELECT code FROM adme_phenotype WHERE gene = ? AND (lower(label) LIKE ? OR lower(code) LIKE ?) LIMIT 1',
                          [gene, '%' + p.toLowerCase() + '%', '%' + p.toLowerCase() + '%'])[0];
          c = hit ? hit.code : p;
        }
        if (c && c !== 'NM') codes[c] = p;
      });
      var cs = Object.keys(codes);
      if (!cs.length) { skipped.push(gene); return; }
      if (cs.length > 1) { ambiguous.push({ gene: gene, phenotypes: cs.map(function (c) { return codes[c]; }) }); return; }
      picked.push({ gene: gene, code: cs[0], phenotype: codes[cs[0]], diplotype: Object.keys(r.calls[gene].dips).join(' / ') });
    });
    return { meta: r.meta, picked: picked, skipped: skipped, ambiguous: ambiguous };
  }

  // ▲/▼ where a chosen phenotype acts on this drug at this site (the gene is one of the
  // site's actors for the drug)
  function pgxAt(M, slug, tissue, proc) {
    return (M.pgx || []).filter(function (e) {
      return e.drug === slug && e.dir && e.dir.sign && M.rows.some(function (r) {
        return r.drug === slug && r.actor === e.gene && r.tissue === tissue && (!proc || r.process === proc); });
    });
  }
  function pgxGlyph(hits) {
    if (!hits.length) return '';
    var up = hits.some(function (e) { return e.dir.sign > 0 || e.dir.both; }), down = hits.some(function (e) { return e.dir.sign < 0 || e.dir.both; });
    return (up ? '\u25B2' : '') + (down ? '\u25BC' : '');
  }
  function pgxTitle(M, hits) {
    return hits.map(function (e) { return nameOf(M, e.drug) + ': ' + e.gene + ' ' + e.label + ' \u2192 ' + e.dir.words; }).join('; ');
  }
  // The ADME process of an actor row — adme_sites.actor_process, the same rule: the hand
  // table's ADME process wins; else the kind or the role (enzyme / PGx metabolism or
  // formation → metabolism, transporter / carrier / PGx transport → distribution). A drug
  // target, a safety allele or an unknown role has none (null, shown '—'), never a guess.
  var KIND_PROCESS = { enzyme: 'metabolism', transporter: 'distribution', carrier: 'distribution' };
  var ROLE_PROCESS = { metabolism: 'metabolism', formation: 'metabolism', transport: 'distribution' };
  function processOf(site, kind, role) {
    if (site && site.process !== 'target') return site.process;
    if (kind === 'target' || site) return null;
    return KIND_PROCESS[kind] || ROLE_PROCESS[role] || null;
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
    // a site DrugBank's ADME text states: named as such — its wording is not republished
    var quote = rs.some(function (r) { return !r.actor && r.evidence === 'drugbank_text'; });
    var s = '<b>' + esc(name) + ' · ' + esc(proc) + ' · ' + esc(tissue) + '</b>';
    s += acts.length ? acts.map(esc).join('<br>') : '';
    if (quote) s += (acts.length ? '<br>' : '') + '<small>named in DrugBank\u2019s ADME text</small>';
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
        h += '<td class="e' + cl.w + (aff.length ? ' aff' : '') + '" tabindex="0" data-d="' + esc(d.slug) + '" data-p="' + esc(c[0]) + '" data-t="' + esc(c[1]) + '" aria-label="' + esc(d.name + ' ' + c[0] + ' ' + c[1] + ' tier ' + cl.w) + '">' + perpDots(M, aff) +
          (function (hits) { return hits.length ? '<span class="pks-pgxm" title="' + esc(pgxTitle(M, hits)) + '">' + pgxGlyph(hits) + '</span>' : ''; })(pgxAt(M, d.slug, c[1], c[0])) + '</td>';
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

  // ── anatomogram ─────────────────────────────────────────────────────────────────────────
  // The body is the EMBL-EBI Expression Atlas homo_sapiens.female or .male drawing (CC BY 4.0), pruned
  // to these organs by scripts/docs/prune-anatomogram.py and fetched once on this page; each
  // organ is a <g>/<path> whose id is its UBERON id, so the drawing is driven by id. A KB
  // tissue with no organ of its own rides on a neighbour (blood-brain barrier on the brain,
  // bile duct on the gall bladder). Anchors are the organ's centre in the drawing's own
  // 105 × 195 viewBox units (measured once), nudged to the side the label column sits on;
  // whole-body shapes (skin, vessels, fat, muscle) anchor at a point where they read well.
  // The male drawing (the page's ♂ button) has its own anchors, `m` — each female anchor's
  // relative position inside its organ's box carried over to the male box — and its own
  // organs: an organ with `sex` is drawn only on that body (placenta, mammary gland, ovary on
  // the female; prostate and testis on the male), so evidence at a sex-specific tissue shows
  // only where that tissue exists. Whole-body shapes keep one anchor (the drawings differ <1 %).
  var BODIES = {
    female: { url: 'assets/img/anatomogram-hs-female.svg', label: 'female' },
    male: { url: 'assets/img/anatomogram-hs-male.svg', label: 'male' }
  };
  var BODY_SCALE = 3.1, BODY_X = 160, BODY_Y = 8;
  var ORGANS = [
    { t: 'brain', id: 'UBERON_0000955', label: 'brain', side: 'R', ax: 57, ay: 5, m: [58, 6] },
    { t: 'blood-brain barrier', id: 'UBERON_0000955', label: 'blood–brain barrier', side: 'L', ax: 45, ay: 7, proxy: true, m: [46, 8] },
    { t: 'lung', id: 'UBERON_0002048', label: 'lung', side: 'R', ax: 61, ay: 42, m: [63, 41] },
    { t: 'mammary gland', id: 'UBERON_0000310', label: 'mammary gland', side: 'L', ax: 39, ay: 47, sex: 'female' },
    { t: 'heart', id: 'UBERON_0000948', label: 'heart', side: 'R', ax: 54, ay: 47, m: [54, 47] },
    { t: 'blood', id: 'UBERON_0001981', label: 'blood', side: 'L', ax: 28, ay: 62, whole: true },
    { t: 'adrenal gland', id: 'UBERON_0002369', label: 'adrenal gland', side: 'R', ax: 58, ay: 59, m: [60, 54] },
    { t: 'stomach', id: 'UBERON_0000945', label: 'stomach', side: 'R', ax: 62, ay: 61, m: [61, 64] },
    { t: 'liver', id: 'UBERON_0002107', label: 'liver', side: 'L', ax: 41, ay: 65, m: [43, 61] },
    { t: 'kidney', id: 'UBERON_0002113', label: 'kidney', side: 'R', ax: 59, ay: 68, m: [61, 63] },
    { t: 'bile duct', id: 'UBERON_0002110', label: 'bile duct', side: 'L', ax: 45, ay: 69, m: [48, 68] },
    { t: 'small intestine', id: 'UBERON_0002108', label: 'small intestine', side: 'R', ax: 60, ay: 80, m: [62, 79] },
    { t: 'adipose tissue', id: 'UBERON_0001013', label: 'adipose tissue', side: 'L', ax: 34, ay: 82, whole: true },
    { t: 'ileum', id: 'UBERON_0002116', label: 'ileum', side: 'R', ax: 57, ay: 87, m: [57, 84] },
    { t: 'placenta', id: 'UBERON_0001987', label: 'placenta', side: 'L', ax: 51, ay: 88, sex: 'female' },
    { t: 'ovary', id: 'UBERON_0000992', label: 'ovary', side: 'R', ax: 57, ay: 90, sex: 'female' },
    { t: 'prostate gland', id: 'UBERON_0002367', label: 'prostate', side: 'R', ax: 55, ay: 93, sex: 'male' },
    { t: 'testis', id: 'UBERON_0000473', label: 'testis', side: 'L', ax: 50, ay: 103, sex: 'male' },
    { t: 'skeletal muscle', id: 'UBERON_0001134', label: 'skeletal muscle', side: 'L', ax: 40, ay: 112, whole: true },
    { t: 'skin', id: 'UBERON_0000014', label: 'skin', side: 'R', ax: 90, ay: 118, whole: true },
  ];
  // the organs of one body, with that body's anchors
  function organsFor(sex) {
    return ORGANS.filter(function (o) { return !o.sex || o.sex === sex; }).map(function (o) {
      return sex === 'male' && o.m ? Object.assign({}, o, { ax: o.m[0], ay: o.m[1] }) : o;
    });
  }
  var bodyText = {}, bodyWaiters = {};
  function loadBody(url, cb) {
    if (bodyText[url]) { cb(bodyText[url]); return; }
    var w = bodyWaiters[url] = bodyWaiters[url] || [];
    w.push(cb);
    if (w.length > 1) return;
    fetch(url).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
      .then(function (t) { bodyText[url] = t; w.splice(0).forEach(function (f) { f(t); }); })
      .catch(function (e) { w.splice(0).forEach(function (f) { f(null, e); }); });
  }
  function organTier(M, slug, tissue) { var w = 0; PROC.forEach(function (p) { w = Math.max(w, cellOf(M, slug, p, tissue).w); }); return w; }
  // the drawing's two layers without its <svg> wrapper: a nested <svg> would size itself to
  // the whole viewport and then be scaled again by the group's transform
  function bodyInner(text) {
    var m = /<svg\b[^>]*>([\s\S]*)<\/svg>/i.exec(text);
    return m ? m[1] : text;
  }
  function bx(x) { return BODY_X + x * BODY_SCALE; }
  function by(y) { return BODY_Y + y * BODY_SCALE; }

  function renderBody(root, M, opts) {
    var body = BODIES[opts.sex] || BODIES.female;
    loadBody(body.url, function (text, err) {
      if (!text) { root.innerHTML = '<p class="pks-empty">The body drawing could not be loaded' + (err ? ' (' + esc(err.message || err) + ')' : '') + '.</p>'; return; }
      drawBody(root, M, opts, text);
    });
  }

  function drawBody(root, M, opts, bodySvg) {
    var focus = opts.focus, showDDI = opts.ddi !== false, n = M.drugs.length;
    var sex = BODIES[opts.sex] ? opts.sex : 'female', organs = organsFor(sex);
    var step = n > 5 ? 15 : 19, wid = n > 5 ? 13 : 17, ROW = 36;
    var W = 640, H = 620, LEFT_EDGE = 150, RIGHT_EDGE = 494;
    // rows: one per organ with any evidence, laid out per side by anchor y, pushed apart
    var rows = [];
    organs.forEach(function (o) {
      if (!M.drugs.some(function (d) { return organTier(M, d.slug, o.t); })) return;
      rows.push({ o: o, ay: by(o.ay), y: by(o.ay) });
    });
    ['L', 'R'].forEach(function (side) {
      var rs = rows.filter(function (r) { return r.o.side === side; }).sort(function (a, b) { return a.ay - b.ay; });
      var yMin = 26;
      rs.forEach(function (r) { r.y = Math.max(r.ay, yMin); yMin = r.y + ROW; });
      var over = rs.length ? rs[rs.length - 1].y + 16 - H : 0;
      if (over > 0) rs.forEach(function (r) { r.y -= over; });
    });
    var organState = {};       // id → {w, aff: [perpetrator slugs]}
    var slots = [], labels = [], leaders = [], arrows = [];
    rows.forEach(function (r) {
      var o = r.o, left = o.side === 'L';
      var x0 = left ? LEFT_EDGE - n * step : RIGHT_EDGE, y = r.y;
      var st = organState[o.id] = organState[o.id] || { w: 0, aff: [] };
      labels.push('<text class="lbl" x="' + (left ? LEFT_EDGE - 2 : RIGHT_EDGE) + '" y="' + (y - 4) + '"' + (left ? ' text-anchor="end"' : '') + '>' + esc(o.label) + '</text>');
      leaders.push('<path class="lead" d="M' + (left ? LEFT_EDGE + 2 : RIGHT_EDGE - 2) + ',' + (y + 7) + ' L' + bx(o.ax) + ',' + by(o.ay) + '"/>');
      M.drugs.forEach(function (d, i) {
        var w = organTier(M, d.slug, o.t), aff = showDDI ? affectedAt(M, d.slug, null, o.t) : [];
        if (!o.proxy) { st.w = Math.max(st.w, w); aff.forEach(function (a) { if (st.aff.indexOf(a.perpetrator) < 0) st.aff.push(a.perpetrator); }); }
        var x = x0 + i * step, dim = focus && focus !== d.slug ? ' dim' : '';
        slots.push('<g class="slotg" data-d="' + esc(d.slug) + '" data-t="' + esc(o.t) + '"><rect class="slot e' + w + dim + '" x="' + x + '" y="' + y + '" width="' + wid + '" height="14" rx="3"/>' +
          (aff.length ? '<rect class="aff" x="' + (x - 2) + '" y="' + (y - 2) + '" width="' + (wid + 4) + '" height="18" rx="4"/>' : '') +
          '<text x="' + (x + wid / 2) + '" y="' + (y + 10.5) + '" text-anchor="middle" class="cd' + (w >= 2 ? ' on' : '') + '">' + esc(n > 5 ? code(d.name)[0] : code(d.name)) + '</text>' +
          (function (hits) { return hits.length ? '<text class="pgxm" x="' + (x + wid / 2) + '" y="' + (y + 23) + '" text-anchor="middle"><title>' + esc(pgxTitle(M, hits)) + '</title>' + pgxGlyph(hits) + '</text>' : ''; })(pgxAt(M, d.slug, o.t, null)) + '</g>');
        // focus: perpetrator → victim arrows between the two drugs' slots of the same organ row
        if (showDDI && focus && aff.length && (focus === d.slug || aff.some(function (a) { return a.perpetrator === focus; }))) {
          aff.forEach(function (a) { if (focus !== d.slug && focus !== a.perpetrator) return;
            var pi = M.drugs.map(function (z) { return z.slug; }).indexOf(a.perpetrator);
            if (pi < 0 || pi === i) return;
            var px = x0 + pi * step + wid / 2, vx = x + wid / 2, top = y - 14;
            arrows.push('<path class="arrow" style="stroke:' + COLORS[pi] + '" d="M' + px + ',' + (y - 3) + ' C' + px + ',' + top + ' ' + vx + ',' + top + ' ' + vx + ',' + (y - 3) + '"/>'); });
        }
      });
    });
    var slugs = M.drugs.map(function (z) { return z.slug; });
    root.innerHTML = '<svg class="pks-body" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + BODIES[sex].label + ' body with the ADME organs of this drug set">' +
      '<defs><marker id="pks-ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="context-stroke"/></marker></defs>' +
      '<g class="anat" transform="translate(' + BODY_X + ',' + BODY_Y + ') scale(' + BODY_SCALE + ')">' + bodyInner(bodySvg) + '</g>' +
      leaders.join('') + labels.join('') + slots.join('') + arrows.join('') +
      '<a href="https://github.com/ebi-gene-expression-group/anatomogram" target="_blank" rel="noopener"><text class="credit" x="' + (W - 4) + '" y="' + (H - 6) + '" text-anchor="end">body: EMBL-EBI Expression Atlas anatomogram, CC BY 4.0</text></a>' +
      '</svg>';
    var svg = root.querySelector('svg.pks-body');
    // colour the drawing: fill by the set's strongest evidence at the organ, dashed stroke in
    // the perpetrator's colour where another drug of the set can act on it; organs the set
    // has no evidence for stay faint; whole-body shapes stay invisible unless evidenced
    organs.forEach(function (o) {
      if (o.proxy) return;
      var el = svg.querySelector('#' + o.id); if (!el) return;
      var st = organState[o.id] || { w: 0, aff: [] };
      el.classList.add('organ', 'e' + st.w);
      if (o.whole && !st.w) el.classList.add('hidden');
      // The kidney and the blood have their own (red) ramp: the kidney lies on the liver
      // and the intestine in the front view, and three tier-3 organs in one blue read as one
      // blob; the vessel tree runs through every organ and is blood. Organs are drawn
      // translucent, as in the Atlas, so overlaps stay legible.
      var ramp = (o.t === 'kidney' || o.t === 'blood') ? '--pks-kid' : '--pks-ev';
      el.style.fill = st.w ? 'var(' + ramp + st.w + ')' : (o.whole ? 'none' : 'var(--pks-organ)');
      el.style.fillOpacity = st.w ? '.55' : '.4';
      if (st.aff.length) {
        var col = st.aff.length === 1 ? COLORS[slugs.indexOf(st.aff[0])] : 'var(--pks-warn)';
        el.style.stroke = col; el.style.strokeWidth = '0.7'; el.style.strokeDasharray = '1.4 0.9'; el.style.strokeLinejoin = 'round';
        el.style.fillOpacity = '.65';
      } else if (st.w) {   // a hairline of surface between tinted neighbours (kidney sits on the intestine)
        el.style.stroke = '#fff'; el.style.strokeWidth = '0.35'; el.style.strokeDasharray = 'none';
      } else { el.style.stroke = 'none'; }
      if (focus && st.w) el.style.opacity = M.drugs.some(function (d) { return d.slug === focus && organTier(M, focus, o.t); }) ? '1' : '.45';
      var tissues = organs.filter(function (z) { return z.id === o.id; }).map(function (z) { return z.t; });
      el.addEventListener('mouseenter', function (e) { organTip(M, tissues, e, showDDI); if (opts.onOrgan) { var d = firstDrugAt(M, tissues, focus); if (d) opts.onOrgan(d, o.t, false); } });
      el.addEventListener('mousemove', function (e) { organTip(M, tissues, e, showDDI); });
      el.addEventListener('mouseleave', function () { tip(null); });
      el.addEventListener('click', function () { if (opts.onOrgan) { var d = firstDrugAt(M, tissues, focus); if (d) opts.onOrgan(d, o.t, true); } });
    });
    root.querySelectorAll('.slotg').forEach(function (g) {
      var d = g.dataset.d, t = g.dataset.t;
      var rs = M.rows.filter(function (r) { return r.drug === d && r.tissue === t; });
      var procs = []; rs.forEach(function (r) { if (r.process && procs.indexOf(r.process) < 0) procs.push(r.process); });
      var html = tipText(nameOf(M, d), procs.join('/') || '—', t, rs, showDDI ? affectedAt(M, d, null, t) : []);
      g.onmouseenter = function (e) { tip(html, e); if (opts.onOrgan) opts.onOrgan(d, t, false); };
      g.onmousemove = function (e) { tip(html, e); }; g.onmouseleave = function () { tip(null); };
      g.onclick = function () { if (opts.onOrgan) opts.onOrgan(d, t, true); };
    });
  }
  function firstDrugAt(M, tissues, focus) {
    if (focus && tissues.some(function (t) { return organTier(M, focus, t); })) return focus;
    var d = M.drugs.filter(function (z) { return tissues.some(function (t) { return organTier(M, z.slug, t); }); })[0];
    return d ? d.slug : null;
  }
  // the organ's own tooltip: every drug of the set with evidence there, its tier and actors
  function organTip(M, tissues, ev, showDDI) {
    var lines = [];
    tissues.forEach(function (t) {
      M.drugs.forEach(function (d) {
        var rs = M.rows.filter(function (r) { return r.drug === d.slug && r.tissue === t; });
        if (!rs.length) return;
        var acts = [], seen = {};
        rs.forEach(function (r) { if (r.actor) { var k = r.actor + ' (' + r.role + ')'; if (!seen[k]) { seen[k] = 1; acts.push(k); } } });
        var aff = showDDI ? affectedAt(M, d.slug, null, t) : [];
        lines.push('<b>' + esc(d.name) + '</b> · ' + esc(t) + ': ' + (acts.length ? esc(acts.join(', ')) : '<i>prose only</i>') +
          (aff.length ? ' <span class="warn">⇠ ' + esc(aff.map(function (a) { return nameOf(M, a.perpetrator); }).filter(function (v, i, arr) { return arr.indexOf(v) === i; }).join(', ')) + '</span>' : ''));
      });
    });
    tip(lines.join('<br>') || '<i>no evidence here</i>', ev);
  }

  function renderDetail(root, M, slug, tissue, pinned) {
    var rs = M.rows.filter(function (r) { return r.drug === slug && (!tissue || r.tissue === tissue); });
    var acts = {};
    rs.forEach(function (r) { if (!r.actor) return; var v = acts[r.actor] = acts[r.actor] || { roles: {}, tissues: {}, process: r.process }; v.roles[r.role] = 1; if (r.tissue) v.tissues[r.tissue] = 1; });
    var aff = M.affected.filter(function (a) { return a.victim === slug && (!tissue || a.tissue === tissue); });
    var h = '<h4>' + esc(nameOf(M, slug)) + (tissue ? ' · ' + esc(tissue) : '') + (pinned ? ' <span class="pks-meta">pinned — click another organ to change, double-click to release</span>' : '') + '</h4>';
    var keys = Object.keys(acts).sort();
    h += keys.length ? '<table class="pks-detail"><tr><th>actor</th><th>role</th><th>process</th><th>tissues</th></tr>' + keys.map(function (a) { var v = acts[a]; return '<tr><td class="mono">' + esc(a) + '</td><td>' + Object.keys(v.roles).map(function (r) { return '<span class="pks-role ' + esc(r) + '">' + esc(r) + '</span>'; }).join('') + '</td><td>' + esc(v.process || '—') + '</td><td>' + esc(Object.keys(v.tissues).join(', ') || 'not in the tissue table') + '</td></tr>'; }).join('') + '</table>' : '<p class="pks-meta">no curated actor here</p>';
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
    var pgxRows = pgxPerpetrators(M, opts);
    if (!M.affected.length && !pgxRows.length) { root.innerHTML = '<p class="pks-empty">No perpetrator \u2192 victim pair in this set: no drug here inhibits or induces an actor another one is a substrate of, and no patient phenotype acts on one.</p>'; return; }
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
    // the patient's phenotypes as perpetrators: a reduced-function phenotype acts on a victim
    // drug the way an inhibitor of that gene would (\u22A3), an increased-function one the way an
    // inducer would (\u2191); \u2691 marks a guideline recommendation without a PK direction
    pgxRows.forEach(function (p) {
      var none = !Object.keys(p.byDrug).length;
      h += '<tr class="pks-pgxrow' + (focus ? ' dim' : '') + '"><th class="perp"><i class="pgx"></i>' + esc(p.gene) + ' <span class="pks-meta">' + esc(p.label) + '</span>' +
           (none ? '<br><span class="pks-meta">no drug of this set affected</span>' : '') + '</th>';
      M.drugs.forEach(function (v) {
        var e = p.byDrug[v.slug];
        if (!e) { h += '<td class="none' + (focus && focus !== v.slug ? ' dim' : '') + '"></td>'; return; }
        var glyph = e.glyph, tip = p.gene + ' ' + p.label + ' \u2192 ' + v.name + ': ' + e.words +
            (e.guidelines ? ' \u00b7 guideline: ' + e.guidelines : '');
        h += '<td class="hit' + (focus && focus !== v.slug ? ' dim' : '') + '"><span class="pks-act" title="' + esc(tip) + '"><span class="mono">' + esc(p.gene) + '</span> ' + glyph + '</span></td>';
      });
      h += '</tr>';
    });
    root.innerHTML = '<div class="pks-scroll">' + h + '</table></div><p class="pks-meta">\u22A3 inhibits the actor \u00b7 \u2191 induces it; the column drug is that actor\u2019s substrate. Hover a cell for the tissue.' +
      (pgxRows.length ? ' Shaded rows are the patient\u2019s phenotypes: a reduced-function phenotype acts like an inhibitor of the gene (\u22A3), an increased-function one like an inducer (\u2191); \u2691 is a guideline recommendation without a PK direction. Hover for the effect.' : '') + '</p>';
  }

  // "Pharmacogenomics for this patient": per drug and chosen phenotype — the direction, a
  // paper's effect size for that phenotype, and the guideline's own row for it.
  function renderPgx(root, M, opts) {
    var sel = opts.pgx || [];
    if (!sel.length) { root.innerHTML = '<p class="pks-empty">Add the patient\u2019s pharmacogene phenotypes above (e.g. CYP2C19 poor metabolizer) to see what they change for each drug of the set.</p>'; return; }
    if (!M.pgx.length) { root.innerHTML = '<p class="pks-empty">No drug of this set has a known relation, guideline or paper effect for the chosen phenotype(s).</p>'; return; }
    var slugs = M.drugs.map(function (d) { return d.slug; });
    var h = '<table class="pks-pgx"><tr><th>drug</th><th>gene \u00b7 phenotype</th><th>effect</th><th>from papers</th><th>guideline</th></tr>';
    M.pgx.forEach(function (e) {
      var i = slugs.indexOf(e.drug);
      var eff = e.dir ? (e.dir.sign ? '<b>' + (e.dir.both ? '\u25B2\u25BC ' : e.dir.sign > 0 ? '\u25B2 ' : '\u25BC ') + esc(e.dir.words) + '</b>' : esc(e.dir.words)) :
                (ACT[e.code] === undefined ? '<span class="pkq-meta">no PK axis \u2014 see the guideline</span>' : '<span class="pkq-meta">no known PK role of ' + esc(e.gene) + ' for this drug</span>');
      if (e.relation) eff += '<br><span class="pkq-meta">' + esc(e.gene) + (e.relation === 'formation' ? ' forms an active metabolite (guideline)' : ' clears / transports the drug (' + (e.relationFrom === 'paper' ? 'PGx papers' : 'DrugBank substrate') + ')') + '</span>';
      var pap = e.effects.map(function (x) {
        var v = x.form === 'categorical_fractional' ? esc(x.parameter || 'parameter') + ' \u00d7' + (1 + x.theta).toFixed(2) : esc(x.parameter || 'parameter') + ' \u03b8 ' + x.theta;
        return v + ' <span class="pkq-meta">' + (x.page ? '<a href="#/' + esc(x.page.replace(/\.md$/, '')) + '">' + esc(x.stem) + '</a>' : esc(x.stem)) +
               (x.doi ? ' <a href="https://doi.org/' + esc(x.doi) + '" target="_blank" rel="noopener">doi</a>' : '') + '</span>';
      }).join('<br>') || '<span class="pkq-meta">\u2014</span>';
      var gl = e.guidelines.map(function (g) {
        var t = g.recommendation || '';
        return '<div class="pks-gl"><span class="pks-glsrc">' + esc(g.source || '') + '</span>' + (g.label ? '' : ' <span class="pkq-meta">(general, no phenotype table)</span>') + (g.avoid ? ' <b class="warn">alternative / avoid</b>' : '') +
               ' <span title="' + esc(t) + '">' + esc(t.length > 260 ? t.slice(0, 260) + '\u2026' : t) + '</span>' +
               (g.guideline_id ? ' <a href="https://www.clinpgx.org/guidelineAnnotation/' + esc(g.guideline_id) + '" target="_blank" rel="noopener">' + esc(g.guideline_id) + '</a>' : '') + '</div>';
      }).join('') || '<span class="pkq-meta">\u2014</span>';
      h += '<tr><td><i style="background:' + COLORS[i] + '"></i>' + esc(nameOf(M, e.drug)) + '</td><td class="mono">' + esc(e.gene) + '<br><span class="pkq-meta">' + esc(e.label) + '</span></td><td>' + eff + '</td><td>' + pap + '</td><td>' + gl + '</td></tr>';
    });
    root.innerHTML = '<div class="pks-scroll">' + h + '</table></div><p class="pkq-meta">\u25B2/\u25BC mark the same direction on the heat-map cells and anatomogram slots where the gene acts. Guideline text is quoted from CPIC/DPWG via ClinPGx \u2014 read the guideline before a clinical decision. The phenotypes stay in this page\u2019s link; nothing is stored or sent.</p>';
  }

  // one row per chosen patient phenotype, in the order chosen — also when it changes nothing
  // for this set (a normal phenotype, or a gene none of these drugs depends on), so every
  // chip has its row and the reader sees that it was considered
  function pgxLabel(M, sel) {
    var w = { UM: 'ultrarapid', RM: 'rapid', NM: 'normal', IM: 'intermediate', PM: 'poor' }[sel.code];
    return w || sel.code;
  }
  function pgxPerpetrators(M, opts) {
    var rows = [];
    (opts.pgx || []).forEach(function (sel) {
      var hits = (M.pgx || []).filter(function (e) { return e.gene === sel.gene && e.code === sel.code; });
      var byDrug = {};
      hits.forEach(function (e) {
        var a = ACT[e.code], gl = (e.guidelines || []).length;
        var glyph = null, words = '';
        if (e.dir && e.dir.sign) {
          glyph = a < 0 ? '\u22A3' : '\u2191';
          words = e.dir.words;
        } else if (e.dir) {
          glyph = '=';
          words = 'normal activity \u2014 no change';
        } else if (gl) {
          glyph = '\u2691';
          words = 'guideline recommendation (no PK direction)';
        }
        if (!glyph) return;
        byDrug[e.drug] = { glyph: glyph, words: words,
                           guidelines: (e.guidelines || []).map(function (g) { return (g.source || '') + (g.avoid ? ' alternative/avoid' : ''); })
                                     .filter(function (x, i, arr) { return x && arr.indexOf(x) === i; }).join(', ') };
      });
      rows.push({ gene: sel.gene, label: (hits[0] && hits[0].label) || pgxLabel(M, sel), byDrug: byDrug });
    });
    return rows;
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
    if (r.evidence === 'clinpgx_annotation' || r.evidence === 'clinpgx_label' || r.evidence === 'clinpgx_relation') {
      var what = { clinpgx_annotation: 'ClinPGx clinical annotation', clinpgx_label: 'ClinPGx drug label', clinpgx_relation: 'ClinPGx relationship' }[r.evidence];
      var txt = what + (r.source ? ' \u00b7 ' + esc(r.source) : '');
      return r.url ? '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + txt + '</a>' : txt;
    }
    if (r.evidence === 'drugbank_actor') return 'DrugBank actor';
    if (r.evidence === 'drugbank_text') return 'DrugBank ADME prose';
    return esc(r.evidence);
  }
  // Per drug, the paper evidence leads: paper PGx, then ClinPGx (clinical annotation, label,
  // relationship), any other source, DrugBank's actors, DrugBank's ADME prose. Drugs keep their order, rows their order within a rank.
  var EVIDENCE_RANK = { paper_pgx: 0, clinpgx_annotation: 1, clinpgx_label: 2, clinpgx_relation: 3, drugbank_actor: 5, drugbank_text: 6 };
  function tableRows(rows) {
    var drugAt = {};
    rows.forEach(function (r, i) { if (!(r.drug in drugAt)) drugAt[r.drug] = i; });
    return rows.map(function (r, i) { return { r: r, i: i }; }).sort(function (a, b) {
      var ra = EVIDENCE_RANK[a.r.evidence], rb = EVIDENCE_RANK[b.r.evidence];
      return (drugAt[a.r.drug] - drugAt[b.r.drug])
          || ((ra === undefined ? 4 : ra) - (rb === undefined ? 4 : rb))
          || (a.i - b.i);
    }).map(function (x) { return x.r; });
  }
  function renderTable(root, M) {
    root.innerHTML = '<table class="pks-tbl"><tr><th>drug</th><th>process</th><th>tissue</th><th>actor</th><th>role</th><th>evidence</th></tr>' +
      tableRows(M.rows).map(function (r) {
        // a prose row names its source, not DrugBank's wording (which is not republished)
        var actor = r.actor ? '<span class="mono">' + esc(r.actor) + '</span>'
                  : (r.evidence === 'drugbank_text' ? '<small>named in DrugBank\u2019s ADME text</small>' : '');
        return '<tr><td>' + esc(nameOf(M, r.drug)) + '</td><td>' + esc(r.process || '—') + '</td><td>' + esc(r.tissue || '—') + '</td><td>' + actor + '</td><td>' + esc(r.role || '') + '</td><td>' + evidenceCell(r) + '</td></tr>';
      }).join('') + '</table>';
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
    var pg = root.querySelector('.pks-pgx-box');
    if (pg) renderPgx(pg, M, opts);
    if (sh) renderShared(sh, M);
    if (tb) renderTable(tb, M);
  }

  window.pkSites = { search: search, resolve: resolve, compute: compute, render: render, pgxGenes: pgxGenes, pharmcatImport: pharmcatImport, COLORS: COLORS, MAX: MAX, code: code, esc: esc };
})();
