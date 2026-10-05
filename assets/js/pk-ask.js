/* pk-ask.js — "Ask in words" for the Query page, phase 1 of IMPROVEMENTS_CHAT.md.
 *
 * Deterministic, no language model: a question is matched against a lexicon built from the
 * query database (drug names and aliases, parameter names and synonyms, genes), sorted into
 * one intent of a small catalogue, and compiled into SQL from vetted templates. The answer is
 * the rows the database returns; the one-line summary is computed from those rows.
 *
 *   var lex  = pkAsk.lexiconFromDB(db);           // once, after the database loads
 *   var plan = pkAsk.parse("clearance of metformin", lex);
 *   var q    = pkAsk.toSQL(plan);                  // {sql, title}
 *   var text = pkAsk.summarize(plan, db.exec(q.sql));
 *
 * Plain functions over plain data, so Node can run them (test/test_query_ask.py).
 */
(function (root) {
  'use strict';

  // ── parameter families: the words a reader uses, mapped to Q-codes ────────────────────────
  // Checked before the ontology's own names, so "clearance" means CL and CL/F together rather
  // than whichever synonym happens to match first.
  var FAMILIES = [
    { words: ['cl/f', 'apparent clearance', 'oral clearance', 'apparent oral clearance'],
      codes: ['Q27'], label: 'apparent clearance (CL/F)' },
    { words: ['clearance', 'cl', 'total clearance'], codes: ['Q22', 'Q27'],
      label: 'clearance (CL, CL/F)' },
    { words: ['volume', 'volume of distribution', 'vd', 'v/f', 'central volume'],
      codes: ['Q61', 'Q63', 'Q76', 'Q290'], label: 'volume of distribution (V, V1, V/F, V1/F)' },
    { words: ['peripheral volume'], codes: ['Q64', 'Q82'], label: 'peripheral volume (V2, V2/F)' },
    { words: ['half-life', 'half life', 'halflife', 't1/2', 'elimination half-life'],
      codes: ['Q57', 'Q60', 'Q89'], label: 'half-life' },
    { words: ['absorption rate', 'absorption rate constant', 'ka', 'absorption'],
      codes: ['Q49'], label: 'absorption rate constant (ka)' },
    { words: ['bioavailability'], codes: ['Q40', 'Q87'], label: 'bioavailability' },
    { words: ['renal clearance', 'clr'], codes: ['Q26'], label: 'renal clearance (CLR)' },
    { words: ['fraction unbound', 'unbound fraction', 'protein binding', 'fu'], codes: ['Q46'], label: 'fraction unbound (fu)' },
    { words: ['steady state volume', 'vss'], codes: ['Q65'], label: 'Vss' },
    { words: ['trough', 'trough concentration', 'ctrough'], codes: ['Q37'], label: 'Ctrough' },
    { words: ['michaelis-menten', 'michaelis menten', 'km', 'vmax'], codes: ['Q1', 'Q66'], label: 'Michaelis–Menten (Km, Vmax)' },
    { words: ['lag time', 'lag', 'tlag', 'absorption lag'], codes: ['Q83'], label: 'lag time' },
    { words: ['intercompartmental clearance'], codes: ['Q30', 'Q69'], label: 'intercompartmental clearance (Q)' },
    { words: ['elimination rate', 'elimination rate constant', 'kel'], codes: ['Q47'], label: 'elimination rate constant' },
    { words: ['cmax', 'peak concentration', 'maximum concentration'], codes: ['Q32'], label: 'Cmax' },
    { words: ['tmax', 'time to peak'], codes: ['Q56'], label: 'tmax' },
    { words: ['auc', 'area under the curve', 'exposure'], codes: ['Q17', 'Q18', 'Q19', 'Q74', 'Q88'], label: 'AUC' },
    { words: ['ec50', 'potency'], codes: ['Q321'], label: 'EC50' },
    { words: ['ic50'], codes: ['Q322'], label: 'IC50' },
    { words: ['emax', 'imax', 'maximal effect', 'maximum effect'], codes: ['Q320', 'Q323'], label: 'Emax / Imax' },
    { words: ['baseline', 'e0'], codes: ['Q324'], label: 'baseline (E0)' },
    { words: ['hill', 'hill coefficient', 'gamma'], codes: ['Q325'], label: 'Hill coefficient' },
    { words: ['ke0', 'effect compartment rate'], codes: ['Q326'], label: 'ke0' },
    { words: ['kin', 'kout', 'turnover'], codes: ['Q327', 'Q328'], label: 'turnover (kin, kout)' },
    { words: ['fraction metabolised', 'fraction metabolized', 'fm'], codes: ['Q45'], label: 'fraction metabolised (fm)' },
    { words: ['iiv', 'between-subject variability', 'inter-individual variability', 'variability'],
      codes: ['Q312'], label: 'inter-individual variability' }
  ];

  // ── intents: what the question asks for ───────────────────────────────────────────────────
  var CUES = {
    gapfill: /\b(gap.?fill\w*|borrowed|from (a|the) review|review values?)\b/,
    disagree: /\b(disagree\w*|differ\w*|discrepan\w*|spread|vary|varies|inconsisten\w*|conflict\w*)\b/,
    pgx: /\b(pharmacogen\w*|genotype\w*|phenotype\w*|metaboli[sz]ers?|pgx|polymorphism\w*|allele\w*|gene|genes|genetic\w*)\b/,
    dose: /\bdose[- ]?response\b/,
    pkdriven: /\b((driven by|linked to|coupled (to|with)) (a |an |the )?(pk|pharmacokinetic)( model)?|pk[- ](driven|linked)|pk[- ]?pd)\b/,
    pd: /\b(pd|pharmacodynamic\w*|effects?|responses?|biomarkers?|exposure[- ]response|concentration[- ]effect)\b/,
    papers: /\b(papers?|stud(y|ies)|publications?|literature|references?|articles?)\b/,
    models: /\b(models?|records?|simulat\w*)\b/
  };
  var STOP = ('a an the of for in on and or with to is are was were what which who how many much ' +
              'does do did show me list give find all any by from at as its it that this these those ' +
              'about between vs versus compare compared there their have has value values reported ' +
              'drug drugs per than more less').split(' ');

  var INTENT_TEXT = {
    param_values: 'parameter values reported in papers',
    disagree: 'drugs whose papers disagree by more than 2×',
    pgx: 'pharmacogenomic records',
    dose_response: 'dose–response PD models',
    pd_models: 'PD models',
    papers: 'papers',
    records: 'models and records',
    gapfill: 'values a review supplied (not the paper)',
    search: 'search of names',
    missing: 'a drug with nothing extracted yet',
    choose: 'which drug?'
  };

  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/[–—]/g, '-').replace(/[^a-z0-9/.\- ]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function sq(v) { return String(v).replace(/'/g, "''"); }
  function inList(xs) { return xs.map(function (x) { return "'" + sq(x) + "'"; }).join(', '); }

  // ── lexicon ──────────────────────────────────────────────────────────────────────────────
  function lexiconFromRows(rows) {
    var lex = { drug: {}, drugName: {}, ambiguous: {}, known: {}, param: {}, gene: {}, words: [] };
    (rows.drugs || []).forEach(function (r) {
      var n = norm(r[1]);
      lex.drugName[r[0]] = r[1];
      if (n) lex.drug[n] = r[0];
    });
    // an alias (a brand, a salt's synonym) naming several drugs is offered as a choice
    var alias = {};
    (rows.aliases || []).forEach(function (r) {
      var n = norm(r[0]);
      if (n && !(n in lex.drug)) (alias[n] = alias[n] || []).push(r[1]);
    });
    Object.keys(alias).forEach(function (n) {
      if (alias[n].length === 1) lex.drug[n] = alias[n][0];
      else lex.ambiguous[n] = alias[n];
    });
    FAMILIES.forEach(function (f) {
      f.words.forEach(function (w) { lex.param[norm(w)] = { codes: f.codes, label: f.label }; });
    });
    (rows.qcodes || []).forEach(function (r) {
      var names = [r[1]];
      try { names = names.concat(JSON.parse(r[2] || '[]')); } catch (e) { /* no synonyms */ }
      names.forEach(function (nm) {
        var n = norm(nm);
        if (n && n.length > 1 && !(n in lex.param)) lex.param[n] = { codes: [r[0]], label: r[1] + ' (' + r[0] + ')' };
      });
    });
    // a name the ATC catalogue knows but nothing was extracted for: said so, not dropped
    (rows.known || []).forEach(function (r) {
      var n = norm(r[0]);
      if (!n || n in lex.drug || n in lex.ambiguous) return;
      // 'metformin and sitagliptin' (a combination product) must not swallow two drugs that have data
      if (n.split(' ').some(function (w) { return w in lex.drug; })) return;
      lex.known[n] = { name: r[0], detail: r[1], href: r[2] };
    });
    (rows.genes || []).forEach(function (g) {
      var sym = String(g).split(' (')[0], n = norm(sym);   // 'SLCO1B1 (OATP1B1)' → SLCO1B1
      if (n.length >= 3 && /[a-z]/.test(n) && n !== 'unknown') lex.gene[n] = sym;
    });
    lex.words = Object.keys(lex.drug).concat(Object.keys(lex.known))
      .filter(function (k) { return k.indexOf(' ') < 0 && k.length >= 4; });
    return lex;
  }

  function lexiconFromDB(db) {
    function col(sql) {
      try { var r = db.exec(sql); return r[0] ? r[0].values : []; } catch (e) { return []; }
    }
    return lexiconFromRows({
      drugs: col("SELECT slug, generic_name FROM drug"),
      known: col("SELECT label, detail, href FROM search_doc WHERE kind = 'drug' AND href LIKE 'atc/%'"),
      aliases: col("SELECT alias, slug FROM drug_alias"),
      qcodes: col("SELECT parameter_id, name, synonyms FROM qcode"),
      genes: col("SELECT DISTINCT gene FROM pgx_record WHERE gene IS NOT NULL").map(function (r) { return r[0]; })
    });
  }

  // ── parsing ──────────────────────────────────────────────────────────────────────────────
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 9;
    var d = [], i, j;
    for (i = 0; i <= a.length; i++) d[i] = [i];
    for (j = 0; j <= b.length; j++) d[0][j] = j;
    for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++) {
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1,
                         d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      // a swapped pair is one slip ('metfromin'), not two
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
    return d[a.length][b.length];
  }

  function parse(question, lex) {
    var text = norm(question);
    var toks = text ? text.split(' ') : [];
    var used = toks.map(function () { return false; });
    var plan = { question: question, text: text, drugs: [], params: null, genes: [],
                 missing: [], corrected: [], suggestions: [], rest: [] };
    var seenDrug = {};
    // longest phrase first: 'peripheral volume' before 'volume', 'acetylsalicylic acid' whole
    for (var n = Math.min(6, toks.length); n >= 1; n--) {
      for (var i = 0; i + n <= toks.length; i++) {
        var span = used.slice(i, i + n);
        if (span.indexOf(true) >= 0) continue;
        var ph = toks.slice(i, i + n).join(' ');
        var hit = false;
        if (ph in lex.drug) {
          var slug = lex.drug[ph];
          if (!seenDrug[slug]) { plan.drugs.push({ slug: slug, name: lex.drugName[slug] || ph, matched: ph }); seenDrug[slug] = 1; }
          hit = true;
        } else if (ph in lex.known) {
          if (!plan.missing.some(function (m) { return m.name === lex.known[ph].name; })) plan.missing.push(lex.known[ph]);
          hit = true;
        } else if (ph in lex.ambiguous) {
          plan.suggestions.push({ word: ph,
                                  options: lex.ambiguous[ph].map(function (s) { return lex.drugName[s] || s; }) });
          hit = true;
        } else if (ph in lex.gene && (n > 1 || /\d/.test(ph) || ph.length >= 4)) {
          if (plan.genes.indexOf(lex.gene[ph]) < 0) plan.genes.push(lex.gene[ph]);
          hit = true;
        } else if (ph in lex.param && !plan.params && (n > 1 || ph.length > 1)) {
          // a lone one-letter word ('f', 'v') is a parameter only when nothing else is asked
          if (ph.length > 1 || toks.length <= 3) { plan.params = { codes: lex.param[ph].codes, label: lex.param[ph].label, matched: ph }; hit = true; }
        }
        if (hit) for (var k = i; k < i + n; k++) used[k] = true;
      }
    }
    toks.forEach(function (t, i) {
      if (!used[i] && STOP.indexOf(t) < 0 && t.length > 1) plan.rest.push(t);
    });
    // a misspelt drug: one close name is taken (and said so); several are offered
    plan.rest.slice().forEach(function (t) {
      if (t.length < 5 || CUES.papers.test(t) || CUES.models.test(t) || CUES.pd.test(t) || CUES.pgx.test(t)) return;
      var seen = {}, best = 9, near = lex.words.map(function (w) { return [w, lev(t, w)]; })
        .filter(function (x) { return x[1] <= (t.length >= 8 ? 2 : 1); });
      near.forEach(function (x) { best = Math.min(best, x[1]); });
      // the closest names only: 'metfromin' is one slip from metformin, two from merbromin
      var c = near.filter(function (x) { return x[1] === best; }).map(function (x) { return x[0]; })
        .filter(function (w) {
          var id = lex.drug[w] || 'known:' + lex.known[w].name;   // several spellings, one drug
          if (seen[id]) return false;
          seen[id] = 1;
          return true;
        });
      if (c.length === 1 && lex.known[c[0]]) {
        plan.missing.push(lex.known[c[0]]);
        plan.corrected.push({ from: t, to: lex.known[c[0]].name });
        plan.rest.splice(plan.rest.indexOf(t), 1);
      } else if (c.length === 1 && !seenDrug[lex.drug[c[0]]]) {
        var s = lex.drug[c[0]];
        plan.drugs.push({ slug: s, name: lex.drugName[s] || c[0], matched: t });
        plan.corrected.push({ from: t, to: lex.drugName[s] || c[0] });
        seenDrug[s] = 1;
        plan.rest.splice(plan.rest.indexOf(t), 1);
      } else if (c.length > 1) {
        plan.suggestions.push({ word: t, options: c.slice(0, 4).map(function (w) {
          return lex.drug[w] ? lex.drugName[lex.drug[w]] || w : lex.known[w].name; }) });
      }
    });
    plan.intent = intentOf(plan);
    return plan;
  }

  function intentOf(p) {
    var t = p.text;
    // every drug named is one the KB has nothing extracted for: say that, do not widen to all drugs
    if (p.missing.length && !p.drugs.length) return 'missing';
    // a name that could be several drugs: ask, rather than answer for all drugs
    if (p.suggestions.length && !p.drugs.length) return 'choose';
    if (CUES.gapfill.test(t)) return 'gapfill';
    if (CUES.disagree.test(t)) return 'disagree';
    if (p.genes.length || CUES.pgx.test(t)) return 'pgx';
    if (CUES.dose.test(t)) return 'dose_response';
    if (p.params) return 'param_values';
    if (CUES.pd.test(t) || CUES.pkdriven.test(t)) return 'pd_models';
    if (CUES.papers.test(t)) return 'papers';
    if (p.drugs.length || CUES.models.test(t)) return 'records';
    return 'search';
  }

  // ── SQL templates ────────────────────────────────────────────────────────────────────────
  var FROM = "\nFROM record r JOIN drug d ON d.slug = r.drug_slug";

  function toSQL(p) {
    var drugF = p.drugs.length ? " AND r.drug_slug IN (" + inList(p.drugs.map(function (d) { return d.slug; })) + ")" : '';
    var who = p.drugs.length ? p.drugs.map(function (d) { return d.name; }).join(', ') : 'all drugs';
    var codes = p.params ? p.params.codes : null;
    var sql, title;
    switch (p.intent) {
      case 'param_values':
        sql = "SELECT d.generic_name AS drug, q.name AS parameter, p.value, p.unit_verbatim AS unit,\n" +
              "       p.compound, r.population, r.stem AS paper, r.status, p.link_method, r.model_id,\n" +
              "       p.value_si, p.unit_si\n" +
              "FROM parameter p JOIN record r ON r.id = p.record_id\n" +
              "JOIN drug d ON d.slug = r.drug_slug\n" +
              "JOIN qcode q ON q.parameter_id = p.parameter_id\n" +
              "WHERE p.parameter_id IN (" + inList(codes) + ")" + drugF + "\n" +
              "ORDER BY d.generic_name, q.name, r.stem LIMIT 300;";
        title = p.params.label + ' — ' + who;
        break;
      case 'disagree':
        var dc = codes || ['Q27'];
        sql = "SELECT d.generic_name AS drug, q.name AS parameter, count(*) AS n,\n" +
              "       round(min(p.value_si), 10) AS lo, round(max(p.value_si), 10) AS hi, p.unit_si,\n" +
              "       round(max(p.value_si) / min(p.value_si), 1) AS spread\n" +
              "FROM parameter p JOIN record r ON r.id = p.record_id\n" +
              "JOIN drug d ON d.slug = r.drug_slug\n" +
              "JOIN qcode q ON q.parameter_id = p.parameter_id\n" +
              "WHERE p.parameter_id IN (" + inList(dc) + ") AND p.value_si > 0" + drugF + "\n" +
              "GROUP BY d.generic_name, p.parameter_id HAVING n > 2 AND spread > 2\n" +
              "ORDER BY spread DESC LIMIT 100;";
        title = 'papers disagreeing >2× on ' + (p.params ? p.params.label : 'CL/F') + ' — ' + who;
        break;
      case 'pgx':
        // 'SLCO1B1' also finds 'SLCO1B1 (OATP1B1)'
        var gf = p.genes.length ? " AND (" + p.genes.map(function (g) {
          return "x.gene = '" + sq(g) + "' OR x.gene LIKE '" + sq(g) + " (%'"; }).join(' OR ') + ")" : '';
        sql = "SELECT d.generic_name AS drug, x.gene, x.mechanism, x.applies_to,\n" +
              "       q.name AS parameter, r.stem AS paper, r.status, r.model_id\n" +
              "FROM pgx_record x JOIN record r ON r.id = x.record_id\n" +
              "JOIN drug d ON d.slug = r.drug_slug\n" +
              "LEFT JOIN qcode q ON q.parameter_id = x.target_parameter_id\n" +
              "WHERE 1 = 1" + drugF + gf + "\n" +
              "ORDER BY d.generic_name, x.gene, r.stem LIMIT 300;";
        title = 'PGx records — ' + who + (p.genes.length ? ' · ' + p.genes.join(', ') : '');
        break;
      case 'dose_response':
      case 'pd_models':
        sql = "SELECT d.generic_name AS drug, pd.biomarker AS response, pd.model_family,\n" +
              "       pd.effect_form, pd.driver_kind, r.stem AS paper, r.status, r.model_id\n" +
              "FROM pd_record pd JOIN record r ON r.id = pd.record_id\n" +
              "JOIN drug d ON d.slug = r.drug_slug\n" +
              "WHERE 1 = 1" + (p.intent === 'dose_response' ? " AND pd.driver_kind = 'dose_only'" : '') +
              (p.intent === 'pd_models' && CUES.pkdriven.test(p.text) ? " AND pd.driver_kind IN ('pk_record', 'cited_pk')" : '') +
              drugF + "\n" +
              "ORDER BY d.generic_name, r.stem LIMIT 300;";
        title = (p.intent === 'dose_response' ? 'dose–response PD models — '
                 : CUES.pkdriven.test(p.text) ? 'PD models driven by a PK model — ' : 'PD models — ') + who;
        break;
      case 'papers':
        sql = "SELECT d.generic_name AS drug, pa.year, pa.stem AS paper, pa.title, pa.journal, pa.doi\n" +
              "FROM paper pa JOIN drug d ON d.slug = pa.drug_slug\n" +
              "WHERE 1 = 1" + drugF.replace('r.drug_slug', 'pa.drug_slug') + "\n" +
              "ORDER BY d.generic_name, pa.year DESC LIMIT 300;";
        title = 'papers — ' + who;
        break;
      case 'gapfill':
        sql = "SELECT d.generic_name AS drug, r.stem AS paper, p.name, p.value,\n" +
              "       p.unit_verbatim AS unit, p.origin_stem AS borrowed_from, r.model_id\n" +
              "FROM parameter p JOIN record r ON r.id = p.record_id\n" +
              "JOIN drug d ON d.slug = r.drug_slug\n" +
              "WHERE p.link_method = 'review_gapfill'" + drugF + "\n" +
              "ORDER BY d.generic_name LIMIT 300;";
        title = 'values borrowed from a review — ' + who;
        break;
      case 'records':
        sql = "SELECT d.generic_name AS drug, r.domain, r.stem AS paper, r.scenario, r.population,\n" +
              "       r.status, r.model_id" + FROM + "\n" +
              "WHERE 1 = 1" + drugF + "\n" +
              "ORDER BY d.generic_name, r.domain, r.stem LIMIT 300;";
        title = 'models and records — ' + who;
        break;
      case 'choose':
        var opts = [];
        p.suggestions.forEach(function (s) { opts = opts.concat(s.options); });
        sql = "SELECT label AS drug, detail, href FROM search_doc\n" +
              "WHERE kind = 'drug' AND label IN (" + inList(opts) + ")\n" +
              "LIMIT 50;";
        title = 'which drug? ' + opts.join(' / ');
        break;
      case 'missing':
        sql = "SELECT label AS drug, detail, href FROM search_doc\n" +
              "WHERE kind = 'drug' AND label IN (" + inList(p.missing.map(function (m) { return m.name; })) + ")\n" +
              "LIMIT 50;";
        title = 'not extracted yet — ' + p.missing.map(function (m) { return m.name; }).join(', ');
        break;
      default:
        var words = (p.rest.length ? p.rest : [p.text]).filter(Boolean).slice(0, 4);
        sql = "SELECT kind, label, detail, href FROM search_doc\n" +
              "WHERE " + (words.length ? words.map(function (w) { return "lower(label) LIKE '%" + sq(w) + "%'"; }).join(' AND ') : '0') + "\n" +
              "ORDER BY length(label) LIMIT 50;";
        title = 'search: ' + words.join(' ');
    }
    return { sql: sql, title: title };
  }

  var LIMIT = { disagree: 100, search: 50, missing: 50, choose: 50, other: 300 };

  // ── a one-line answer, computed from the rows ────────────────────────────────────────────
  var DISPLAY = {
    'm3/s': [3.6e6, 'L/h'], 'm3': [1000, 'L'], '1/s': [3600, '1/h'], 's': [1 / 3600, 'h'],
    'kg/m3': [1000, 'mg/L'], 'kg': [1e6, 'mg']
  };
  function fmt(x) {
    if (x === 0) return '0';
    var a = Math.abs(x);
    return (a >= 1e4 || a < 1e-3) ? x.toExponential(2) : String(+x.toPrecision(3));
  }

  function summarize(p, res) {
    if (p.intent === 'choose')
      return 'More than one drug matches “' + p.suggestions.map(function (s) { return s.word; }).join('”, “') +
             '” — pick one above.';
    if (p.intent === 'missing')
      return p.missing.map(function (m) { return m.name; }).join(', ') +
             ': known to the ATC catalogue, but nothing has been extracted for ' +
             (p.missing.length > 1 ? 'them' : 'it') + ' yet.';
    var r = res && res[0];
    if (!r || !r.values.length) return 'No rows: the knowledge base has nothing extracted for this.';
    var n = r.values.length, cols = r.columns;
    var idx = function (c) { return cols.indexOf(c); };
    var count = function (c) {
      var i = idx(c), s = {};
      if (i < 0) return 0;
      r.values.forEach(function (v) { if (v[i] !== null) s[v[i]] = 1; });
      return Object.keys(s).length;
    };
    var more = n >= (LIMIT[p.intent] || LIMIT.other) ? ' Showing the first ' + n + ' rows; raise the LIMIT in the editor to see all.' : '';
    if (p.intent === 'param_values') {
      // per drug when several are compared; values without an SI conversion are counted, not ranged
      var perDrug = count('drug') > 1 && p.drugs.length > 1, groups = {}, order = [];
      r.values.forEach(function (v) {
        var key = (perDrug ? v[idx('drug')] + ' ' : '') + v[idx('parameter')];
        if (!groups[key]) { groups[key] = { xs: {}, other: 0 }; order.push(key); }
        var x = v[idx('value_si')], u = v[idx('unit_si')];
        if (typeof x === 'number' && u) (groups[key].xs[u] = groups[key].xs[u] || []).push(x);
        else groups[key].other++;
      });
      var parts = order.map(function (k) {
        var g = groups[k], bits = Object.keys(g.xs).map(function (u) {
          var xs = g.xs[u], conv = DISPLAY[u] || [1, u];
          var lo = Math.min.apply(null, xs) * conv[0], hi = Math.max.apply(null, xs) * conv[0];
          return xs.length + ' value(s), ' + (lo === hi ? fmt(lo) : fmt(lo) + '–' + fmt(hi)) + ' ' + conv[1];
        });
        if (g.other) bits.push(g.other + ' without a convertible unit');
        return k + ': ' + bits.join(', ');
      });
      var absent = p.drugs.filter(function (d) {
        return !r.values.some(function (v) { return v[idx('drug')] === d.name; }); });
      return parts.join(' · ') + ' — from ' + count('paper') + ' paper(s)' +
             (count('drug') > 1 ? ' across ' + count('drug') + ' drug(s)' : '') + '.' +
             (absent.length ? ' Nothing for ' + absent.map(function (d) { return d.name; }).join(', ') + '.' : '') + more;
    }
    if (p.intent === 'papers') return n + ' paper(s)' + (count('drug') > 1 ? ' across ' + count('drug') + ' drugs' : '') + '.' + more;
    if (p.intent === 'pgx') return n + ' PGx record(s): ' + count('gene') + ' gene(s), ' + count('paper') + ' paper(s)' +
                                    (count('drug') > 1 ? ', ' + count('drug') + ' drugs' : '') + '.' + more;
    if (p.intent === 'pd_models' || p.intent === 'dose_response')
      return n + ' PD record(s): ' + count('response') + ' response(s) from ' + count('paper') + ' paper(s)' +
             (count('drug') > 1 ? ', ' + count('drug') + ' drugs' : '') + '.' + more;
    if (p.intent === 'records') {
      var dom = {};
      r.values.forEach(function (v) { var k = v[idx('domain')]; dom[k] = (dom[k] || 0) + 1; });
      return n + ' record(s) — ' + Object.keys(dom).map(function (k) { return dom[k] + ' ' + k; }).join(', ') +
             '; ' + r.values.filter(function (v) { return v[idx('model_id')]; }).length + ' with a model.' + more;
    }
    if (p.intent === 'gapfill') return n + ' value(s) a review supplied, in ' + count('paper') + ' paper(s), ' +
                                        count('drug') + ' drug(s).' + more;
    if (p.intent === 'disagree') return n + ' drug/parameter pair(s) where papers differ by more than 2×.' + more;
    return n + ' row(s).' + more;
  }

  function understood(p) {
    var bits = [INTENT_TEXT[p.intent] || p.intent];
    if (p.drugs.length) bits.push('drug: ' + p.drugs.map(function (d) { return d.name; }).join(', '));
    if (p.params) bits.push('parameter: ' + p.params.label);
    if (p.genes.length) bits.push('gene: ' + p.genes.join(', '));
    if (p.missing.length && p.drugs.length)
      bits.push('not extracted: ' + p.missing.map(function (m) { return m.name; }).join(', '));
    return bits;
  }

  var api = { FAMILIES: FAMILIES, INTENT_TEXT: INTENT_TEXT, lexiconFromRows: lexiconFromRows,
              lexiconFromDB: lexiconFromDB, parse: parse, toSQL: toSQL, summarize: summarize,
              understood: understood, norm: norm };
  root.pkAsk = api;
  if (typeof module === 'object' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
