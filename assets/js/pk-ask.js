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
    { words: ['clearance', 'cl', 'total clearance', 'cleared', 'clear', 'eliminated', 'elimination'], codes: ['Q22', 'Q27'],
      label: 'clearance (CL, CL/F)' },
    { words: ['volume', 'volume of distribution', 'vd', 'v/f', 'central volume'],
      codes: ['Q61', 'Q63', 'Q76', 'Q290'], label: 'volume of distribution (V, V1, V/F, V1/F)' },
    { words: ['peripheral volume'], codes: ['Q64', 'Q82'], label: 'peripheral volume (V2, V2/F)' },
    { words: ['half-life', 'half life', 'halflife', 't1/2', 'elimination half-life'],
      codes: ['Q57', 'Q60', 'Q89'], label: 'half-life' },
    { words: ['absorption rate', 'absorption rate constant', 'ka', 'absorption', 'absorbed'],
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
    { words: ['ec50', 'potency', 'potent'], codes: ['Q321'], label: 'EC50' },
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
    // 'differ'/'vary' alone is not disagreement ('handle warfarin differently', 'how widely
    // does it spread'): only with the papers or values that would differ
    disagree: /\b(disagree\w*|discrepan\w*|inconsisten\w*|conflict\w*)\b|\b(differ\w*|vary|varies|spread)\b.*\b(papers?|stud(y|ies)|values?|reports?|estimates?)\b|\b(papers?|stud(y|ies)|values?|reports?|estimates?)\b.*\b(differ\w*|vary|varies|spread)\b/,
    pgx: /\b(pharmacogen\w*|genotype\w*|phenotype\w*|metaboli[sz]ers?|pgx|polymorphism\w*|allele\w*|gene|genes|genetic\w*|dna)\b/,
    dose: /\bdose[- ]?response\b/,
    pkdriven: /\b((driven by|linked to|coupled (to|with)) (a |an |the )?(pk|pharmacokinetic)( model)?|pk[- ](driven|linked)|pk[- ]?pd)\b/,
    pd: /\b(pd|pharmacodynamic\w*|effects?|responses?|biomarkers?|exposure[- ]response|concentration[- ]effect)\b/,
    papers: /\b(papers?|stud(y|ies)|publications?|literature|references?|articles?)\b/,
    // a question about what something means, not about the data
    explain: /\b(difference between|differences between|differ(s|ence)? from|distinguish|stands? for|what does .+ mean|meaning of|definition of|define|explain|describe what|what is meant|why (is|are|do|does|would|should)|how (does|do|is|are) .+ (work|relate|differ|calculated|derived|estimated)|when (is|are|do|does|should) .+ (used|reported)|is .+ the same as)\b/,
    whatis: /^(what|whats|what s|who) (is|are|s) (an? |the )?/,
    models: /\b(models?|records?|simulat\w*)\b/
  };
  // who was studied: a reader's word → LIKE patterns over record.population (PK records carry it)
  var POPULATIONS = [
    { words: ['children', 'child', 'paediatric', 'pediatric', 'paediatrics', 'pediatrics', 'kids', 'adolescents'],
      like: ['%child%', '%pediatric%', '%paediatric%', '%adolescent%', '%infant%'], label: 'children' },
    { words: ['infants', 'infant', 'neonates', 'neonate', 'newborns', 'newborn', 'preterm'],
      like: ['%infant%', '%neonat%', '%newborn%', '%preterm%'], label: 'infants and neonates' },
    { words: ['elderly', 'older adults', 'older patients', 'aged'], like: ['%elderly%', '%older%', '%geriatric%'], label: 'elderly' },
    { words: ['pregnant', 'pregnancy', 'pregnant women'], like: ['%pregnan%', '%parturient%'], label: 'pregnancy' },
    { words: ['healthy', 'healthy volunteers', 'volunteers', 'healthy subjects'], like: ['%healthy%', '%volunteer%'], label: 'healthy volunteers' },
    { words: ['renal impairment', 'kidney disease', 'ckd', 'renal failure', 'dialysis'],
      like: ['%renal%', '%kidney%', '%ckd%', '%dialysis%'], label: 'renal impairment' },
    { words: ['hepatic impairment', 'liver disease', 'cirrhosis'], like: ['%hepatic%', '%liver%', '%cirrho%'], label: 'hepatic impairment' },
    { words: ['obese', 'obesity'], like: ['%obes%'], label: 'obesity' },
    { words: ['cancer', 'oncology', 'tumour', 'tumor'], like: ['%cancer%', '%tumo%', '%oncolog%', '%lymphoma%', '%leuk%'], label: 'cancer patients' },
    { words: ['critically ill', 'icu', 'intensive care'], like: ['%critical%', '%icu%', '%intensive%'], label: 'critically ill' },
    { words: ['animals', 'animal', 'rats', 'rat', 'mice', 'mouse', 'dogs', 'dog', 'preclinical'],
      like: ['%rat%', '%mice%', '%mouse%', '%dog%', '%animal%', '%monkey%', '%pig%'], label: 'animals' }
  ];
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
    explain: 'a question about meaning, not about the data',
    missing: 'a drug with nothing extracted yet',
    choose: 'which drug?',
    out_of_scope: 'not a question about the data',
    other: 'a custom query'
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

  function popOf(ph) {
    for (var i = 0; i < POPULATIONS.length; i++) if (POPULATIONS[i].words.indexOf(ph) >= 0) return POPULATIONS[i];
    return null;
  }

  function parse(question, lex) {
    var text = norm(question);
    var toks = text ? text.split(' ') : [];
    var used = toks.map(function () { return false; });
    var plan = { question: question, text: text, drugs: [], params: null, genes: [],
                 missing: [], corrected: [], suggestions: [], rest: [], population: null, year: null, terms: [] };
    // 'after 2020', 'since 2015', 'before 2000', 'in 2024' — a paper's year
    var ym = /\b(after|since|from|before|until|in) ((?:19|20)\d\d)\b/.exec(text);
    if (ym) plan.year = { op: { after: '>', since: '>=', from: '>=', before: '<', until: '<=', 'in': '=' }[ym[1]], y: +ym[2] };
    var seenDrug = {};
    // longest phrase first: 'peripheral volume' before 'volume', 'acetylsalicylic acid' whole
    for (var n = Math.min(6, toks.length); n >= 1; n--) {
      for (var i = 0; i + n <= toks.length; i++) {
        var span = used.slice(i, i + n);
        if (span.indexOf(true) >= 0) continue;
        var ph = toks.slice(i, i + n).join(' ');
        var hit = false;
        var pop = popOf(ph);
        if (pop && !plan.population) {
          plan.population = pop;
          hit = true;
        } else if (ph in lex.drug) {
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
        } else if (ph in lex.param && (n > 1 || ph.length > 1)) {
          // the first parameter is the one asked for; every one is a term ('CL and CL/F')
          var pe = { codes: lex.param[ph].codes, label: lex.param[ph].label, matched: ph };
          if (!plan.params) plan.params = pe;
          if (!plan.terms.some(function (x) { return x.label === pe.label; })) plan.terms.push(pe);
          hit = true;
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

  // "what is the difference between CL and CL/F", "what does EC50 mean", "what is a poor
  // metaboliser": no drug named and a question about meaning. A drug makes it a data question
  // (possibly with a 'why' the prose may reason about); so does a population or a year.
  function isExplain(p) {
    if (p.drugs.length || p.missing.length || p.population || p.year) return false;
    if (CUES.explain.test(p.text)) return true;
    if (!CUES.whatis.test(p.text)) return false;
    // 'what is EC50' / 'what is a poor metaboliser': nothing left beyond the term itself
    var left = p.rest.filter(function (w) {
      return ['metaboliser', 'metabolizer', 'metabolisers', 'metabolizers', 'model', 'models'].indexOf(w) < 0 &&
             !Object.keys(CUES).some(function (k) { return k !== 'whatis' && k !== 'explain' && CUES[k].test(w); });
    });
    return left.length <= 2;
  }

  function intentOf(p) {
    var t = p.text;
    if (isExplain(p)) return 'explain';
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
    // who was studied (PK records carry it; PD and PGx records do not, so it is not applied there)
    if (p.year && p.intent !== 'papers')
      drugF += " AND r.stem IN (SELECT stem FROM paper WHERE drug_slug = r.drug_slug AND year " + p.year.op + ' ' + (+p.year.y) + ")";
    if (p.population && (p.intent === 'param_values' || p.intent === 'records' || p.intent === 'disagree' || p.intent === 'gapfill'))
      drugF += " AND (" + p.population.like.map(function (l) { return "lower(r.population) LIKE '" + sq(l) + "'"; }).join(' OR ') + ")";
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
        title = p.params.label + ' — ' + who + (p.population ? ' · ' + p.population.label : '');
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
              "WHERE 1 = 1" + (p.drugs.length ? " AND pa.drug_slug IN (" + inList(p.drugs.map(function (d) { return d.slug; })) + ")" : '') +
              (p.year ? " AND pa.year " + p.year.op + ' ' + (+p.year.y) : '') + "\n" +
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
      case 'explain':
        if (!p.terms.length) return { sql: null, title: 'explanation' };
        var tc = [];
        p.terms.forEach(function (x) { tc = tc.concat(x.codes); });
        sql = "SELECT parameter_id AS code, name, category, units, synonyms FROM qcode\n" +
              "WHERE parameter_id IN (" + inList(tc) + ")\nORDER BY parameter_id LIMIT 50;";
        title = 'ontology entries — ' + p.terms.map(function (x) { return x.label; }).join(', ');
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
    if (p.intent === 'explain')
      return 'This asks what something means rather than for data. Choose a language model in the list below ' +
             'for an answer in words' + (p.terms.length ? '; the ontology’s entries for ' +
             p.terms.map(function (x) { return x.label; }).join(' and ') + ' are below.' : '.');
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


  // ══ phase 2: a language model reads the question; code still writes the query ═════════════
  // The model is optional and never supplies a number. It fills a small plan (intent, names,
  // population) under a JSON schema; code resolves every name through the lexicon and compiles
  // the plan with the templates above. Only a question no template fits ('other') gets SQL
  // written by the model, and that SQL passes guardSQL first. The explanation it may add is
  // checked: a sentence with a number the rows do not contain is dropped.
  //
  // An engine is { name, json(messages, schema) → Promise<object>,
  // text(messages, maxTokens, onUpdate?, onThinking?) → Promise<string> } — WebLLM on the page
  // (pk-ask-llm.js), Ollama in test/query_eval.js.

  var MODEL_INTENTS = ['param_values', 'disagree', 'pgx', 'dose_response', 'pd_models', 'papers',
                       'records', 'gapfill', 'search', 'explain', 'out_of_scope', 'other'];
  var INTENT_HELP = {
    param_values: 'values of a PK or PD parameter (clearance, volume, half-life, absorption rate, bioavailability, EC50, Emax…)',
    disagree: 'drugs whose papers report very different values of one parameter',
    pgx: 'pharmacogenomics: genes, genotypes, metaboliser phenotypes acting on a drug',
    dose_response: 'PD models driven by the dose alone (dose–response)',
    pd_models: 'pharmacodynamic models: effects, responses, biomarkers, exposure–response',
    papers: 'which papers or studies the database holds',
    records: 'what models or records the database holds for a drug',
    gapfill: 'values a review supplied because the paper lacked them',
    search: 'look up a name',
    explain: 'what a term, parameter, model or method means, or how two differ — answered in words, no data',
    out_of_scope: 'personal medical or dosing advice, or not about this database',
    other: 'about the data, but none of the above (counts, rankings, comparisons across tables)'
  };
  var PLAN_SCHEMA = {
    type: 'object',
    properties: {
      intent: { type: 'string', enum: MODEL_INTENTS },
      drugs: { type: 'array', items: { type: 'string' } },
      parameter: { type: 'string' },
      gene: { type: 'string' },
      population: { type: 'string' }
    },
    required: ['intent', 'drugs', 'parameter', 'gene', 'population']
  };
  var SHOTS = [
    ['How fast is metformin cleared?', { intent: 'param_values', drugs: ['metformin'], parameter: 'clearance', gene: '', population: '' }],
    ['Which genes change how codeine works?', { intent: 'pgx', drugs: ['codeine'], parameter: '', gene: '', population: '' }],
    ['Does the INR model of warfarin depend on the concentration?', { intent: 'pd_models', drugs: ['warfarin'], parameter: '', gene: '', population: '' }],
    ['How much ibuprofen should I give my 4-year-old?', { intent: 'out_of_scope', drugs: ['ibuprofen'], parameter: '', gene: '', population: '' }],
    ['Which drug has the most papers?', { intent: 'other', drugs: [], parameter: '', gene: '', population: '' }],
    ['Why do some papers report V/F instead of V?', { intent: 'explain', drugs: [], parameter: 'V/F', gene: '', population: '' }],
    ['volume of distribution of vancomycin in newborns', { intent: 'param_values', drugs: ['vancomycin'], parameter: 'volume of distribution', gene: '', population: 'newborns' }]
  ];

  // phrasing that asks for personal medical advice — answered without any model
  var OUT_OF_SCOPE = /\b(should i|can i (take|give|use)|how much (should|can|do|to) (i|we|you) (take|give)|my (dose|dosage|child|son|daughter|baby|doctor|wife|husband|mother|father)|dose for (me|my)|safe for me|i am taking|i'm taking|im taking)\b/;
  // what a keyword reading cannot do: counts, rankings, aggregates
  var AGGREGATE = /\b(most|least|highest|lowest|largest|smallest|how many|number of|count|average|mean|median|top \d+|rank\w*|per (drug|gene|paper)|each drug|(more|fewer|less) than \d+|at least \d+)\b|\bboth\b.+\band\b/;
  var FOLLOW_UP = /^(and|also|so|then|what about|how about|and what about|and how about|same for|what of)\b/;
  var FILLER = ('model models record records paper papers study studies data database known ' +
                'available report reports there kb library pk pd pgx parameter parameters ' +
                'value values extracted').split(' ');

  // Does the keyword reading leave something unread that a model could read?
  function needsModel(p) {
    if (p.intent === 'explain') return false;      // answered in words already; nothing to look up
    if (p.corrected.length) return true;          // 'weather' read as feather: let the model weigh in
    if (p.intent === 'missing' || p.intent === 'choose') return false;
    if (p.intent === 'search') return true;
    if (AGGREGATE.test(p.text)) return true;
    var cue = function (t) {
      return Object.keys(CUES).some(function (k) { return CUES[k].test(t); });
    };
    return p.rest.some(function (t) { return FILLER.indexOf(t) < 0 && !cue(t) && !/^\d/.test(t); });
  }

  function planMessages(question, p) {
    var cat = MODEL_INTENTS.map(function (k) { return '- ' + k + ': ' + INTENT_HELP[k]; }).join('\n');
    var shots = SHOTS.map(function (x) { return 'Q: ' + x[0] + '\nA: ' + JSON.stringify(x[1]); }).join('\n');
    var found = [];
    if (p.drugs.length) found.push('drugs: ' + p.drugs.map(function (d) { return d.name; }).join(', '));
    if (p.params) found.push('parameter: ' + p.params.label);
    if (p.genes.length) found.push('genes: ' + p.genes.join(', '));
    if (p.population) found.push('population: ' + p.population.label);
    return [
      { role: 'system', content:
        'You read questions about a pharmacokinetics database and fill a JSON plan. ' +
        'Never answer the question and never write numbers. Choose one intent:\n' + cat + '\n' +
        'drugs: the drug names the question mentions, as written. parameter, gene, population: ' +
        'as written in the question, or "" when not mentioned.\n' + shots },
      { role: 'user', content: 'Q: ' + question +
        (found.length ? '\n(names the database recognised: ' + found.join('; ') + ')' : '') + '\nA:' }
    ];
  }

  // a name the model wrote → the lexicon's entry, or nothing (code decides what a name means)
  function resolveDrug(name, lex) {
    var n = norm(name);
    if (!n) return null;
    if (n in lex.drug) return { slug: lex.drug[n] };
    if (n in lex.known) return { known: lex.known[n] };
    var c = lex.words.filter(function (w) { return lev(n, w) <= (n.length >= 8 ? 2 : 1); });
    if (c.length === 1) return lex.drug[c[0]] ? { slug: lex.drug[c[0]] } : { known: lex.known[c[0]] };
    return null;
  }
  function resolveParam(name, lex) {
    var n = norm(name);
    if (!n) return null;
    if (n in lex.param) return lex.param[n];
    var words = n.split(' ');                          // 'the elimination half-life' → 'half-life'
    for (var k = words.length; k >= 1; k--) for (var i = 0; i + k <= words.length; i++) {
      var ph = words.slice(i, i + k).join(' ');
      if (ph in lex.param && ph.length > 1) return lex.param[ph];
    }
    return null;
  }

  // Did the question say it? A small model copies names from its examples ('newborns',
  // 'metformin') into plans for questions that never mentioned them.
  function inQuestion(name, p) {
    var toks = p.text.split(' ');
    var ws = norm(name).split(' ').filter(function (w) { return w.length > 2 && STOP.indexOf(w) < 0; });
    return ws.length > 0 && ws.every(function (w) {
      return toks.some(function (t) { return t === w || (w.length >= 5 && lev(t, w) <= (w.length >= 8 ? 2 : 1)); });
    });
  }
  // Intents the keywords read from an explicit cue; the model does not overrule them.
  var LOCKED = ['gapfill', 'disagree', 'pgx', 'dose_response', 'param_values', 'missing', 'choose'];

  function mergePlan(p, m, lex, by) {
    var q = JSON.parse(JSON.stringify(p));               // the keyword plan is kept as it was
    q.population = p.population; q.params = p.params;    // (objects with functions survive a copy as data)
    q.by = by || 'model';
    q.unresolved = [];
    if (!m || typeof m !== 'object') return p;
    var seen = {};
    q.drugs.forEach(function (d) { seen[d.slug] = 1; });
    (Array.isArray(m.drugs) ? m.drugs : []).slice(0, 4).forEach(function (nm) {
      if (!inQuestion(nm, p)) return;
      var r = resolveDrug(nm, lex);
      if (r && r.slug && !seen[r.slug]) { q.drugs.push({ slug: r.slug, name: lex.drugName[r.slug] || nm, matched: nm }); seen[r.slug] = 1; }
      else if (r && r.known && !q.missing.some(function (x) { return x.name === r.known.name; })) q.missing.push(r.known);
      else if (!r && String(nm).trim()) q.unresolved.push(String(nm).trim());
    });
    if (!q.params && m.parameter) q.params = resolveParam(m.parameter, lex);
    if (m.gene && inQuestion(m.gene, p)) {
      var g = lex.gene[norm(m.gene)];
      if (g && q.genes.indexOf(g) < 0) q.genes.push(g);
    }
    if (!q.population && m.population && inQuestion(m.population, p)) {
      var pn = norm(m.population);
      q.population = popOf(pn) || POPULATIONS.filter(function (x) {
        return x.words.some(function (w) { return pn.indexOf(w) >= 0; }); })[0] || null;
    }
    var it = MODEL_INTENTS.indexOf(m.intent) >= 0 ? m.intent : p.intent;
    // the keywords found data in the question (not by a guessed spelling): it is not off topic
    var named = p.drugs.some(function (d) { return !p.corrected.some(function (c) { return c.from === d.matched; }); }) ||
                !!p.params || p.genes.length > 0;
    if (it === 'out_of_scope' && named) it = p.intent;
    // 'explain' only where the keywords found no data cue, or the wording asks for a meaning:
    // "PD models driven by a PK model" is a list of records, not a definition
    if (it === 'explain' && !(['search', 'records'].indexOf(p.intent) >= 0 || CUES.explain.test(p.text) ||
                              CUES.whatis.test(p.text))) it = p.intent;
    // 'explain' only where the keywords found no data cue, or the wording asks for a meaning:
    // "PD models driven by a PK model" is a list of records, not a definition
    if (it === 'explain' && !(['search', 'records'].indexOf(p.intent) >= 0 || CUES.explain.test(p.text) ||
                              CUES.whatis.test(p.text))) it = p.intent;
    if (LOCKED.indexOf(p.intent) >= 0 && it !== 'out_of_scope' && it !== 'other' &&
        !(it === 'explain' && !q.drugs.length)) it = p.intent;
    if (it === 'explain' && q.drugs.length) it = p.intent === 'explain' ? 'records' : p.intent;
    // a count or a ranking has no template: a small model often reaches for the nearest one
    // ('records' for "how many drugs have…"), which answers a different question
    if (AGGREGATE.test(p.text) && it !== 'out_of_scope') it = 'other';
    if (it === 'param_values' && !q.params) it = q.drugs.length ? 'records' : 'search';
    if (it === 'search' && p.intent !== 'search') it = p.intent;
    // names the database has nothing extracted for decide the answer, as in the keyword path
    if (q.missing.length && !q.drugs.length && it !== 'out_of_scope' && it !== 'other') it = 'missing';
    q.intent = it;
    return q;
  }

  // ── SQL the model writes: one read-only statement, a LIMIT, nothing else ─────────────────
  var FORBIDDEN = /\b(attach|detach|pragma|insert|update|delete|drop|create|alter|replace|vacuum|reindex|analyze)\b/i;
  function guardSQL(text) {
    var q = String(text || '').replace(/```(sql)?/gi, '').trim().replace(/;\s*$/, '').trim();
    if (!q) throw new Error('empty query');
    if (q.indexOf(';') >= 0) throw new Error('one statement only');
    if (!/^\s*(select|with)\b/i.test(q)) throw new Error('only SELECT (or WITH … SELECT) is allowed');
    if (FORBIDDEN.test(q)) throw new Error('read-only: no schema or data modification');
    if (!/\blimit\s+\d+\s*$/i.test(q)) q += '\nLIMIT 300';
    return q + ';';
  }
  // the schema as the database states it, comments included — one source, never out of date
  function schemaCard(db) {
    var r = db.exec("SELECT sql FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' ORDER BY name");
    var tables = r[0] ? r[0].values.map(function (v) { return String(v[0]).replace(/[ \t]+/g, ' '); }).join('\n') : '';
    return tables + '\n-- Q-codes: CL Q22, CL/F Q27, V Q61, V1 Q63, V/F Q76, V2 Q64, Q Q30, ka Q49, t1/2 Q57, F Q40, ' +
           'tlag Q83, Cmax Q32, AUC Q88, EC50 Q321, IC50 Q322, Emax Q320, E0 Q324, Hill Q325, kout Q328.\n' +
           '-- value_si is SI: clearance m3/s (× 3.6e6 → L/h), volume m3 (× 1000 → L), rate 1/s (× 3600 → 1/h), time s (/ 3600 → h).';
  }
  function sqlMessages(question, card, failed) {
    var m = [
      { role: 'system', content: 'Write ONE SQLite SELECT for the question over this schema. Answer with the SQL only, no ' +
        'explanation. Join drug for names (d.generic_name AS drug). Include r.model_id when rows are records.\n' + card },
      { role: 'user', content: question }
    ];
    if (failed) m.push({ role: 'assistant', content: failed.sql },
                       { role: 'user', content: 'That failed: ' + failed.error + '. Write the corrected SQL only.' });
    return m;
  }

  // ── the explanation: the model's words, the rows' numbers ───────────────────────────────
  var EXPLAIN_COLS = ['drug', 'parameter', 'value', 'unit', 'compound', 'population', 'paper', 'gene', 'mechanism',
                      'response', 'model_family', 'driver_kind', 'year', 'title', 'n', 'spread', 'domain', 'status'];
  function explainMessages(question, plan, res, summary, general, entries, passages) {
    var ref = (entries || []).map(function (e) { return '[' + e.title + '] ' + e.text; }).join('\n');
    var r = res && res[0];
    var cols = r ? r.columns.filter(function (c) { return EXPLAIN_COLS.indexOf(c) >= 0; }) : [];
    if (r && !cols.length) cols = r.columns.slice(0, 6);
    var rows = r ? r.values.slice(0, 12).map(function (v) {
      return cols.map(function (c) { var x = v[r.columns.indexOf(c)]; return x === null ? '' : String(x).slice(0, 40); }).join(' | ');
    }) : [];
    return [
      { role: 'system', content: 'Answer the question for a pharmacologist, as fully as the question needs, from the ' +
        'database result' + (passages && passages.length ? ' and the passages' : '') + ' below' +
        (general ? ', adding general pharmacology where the question asks why or how' : ' only') +
        '. Use only numbers that appear in the summary or the rows; do not compute averages. ' +
        (general ? 'Say which part comes from general knowledge rather than the data. ' : '') +
        (passages && passages.length
          ? 'Answer mainly from the passages; cite a passage as [1] after a claim taken from it. Only if neither the ' +
            'passages nor the rows say anything about the question, reply "I have no knowledge about it". '
          : 'If the result does not answer the question, say "I have no knowledge about it" rather than guessing. ') +
        'No personal dosing advice; do not add a disclaimer, the page shows one.' +
        (ref ? '\nFor the why or how, the site glossary says (use it, do not contradict it; if it does not ' +
               'explain the case, say what the data show and that the reason is not in the data):\n' + ref : '') },
      // the question last: a small model answers what it read most recently
      { role: 'user', content: (passages && passages.length ? passageBlock(passages) + '\n\n' : '') +
        'Database summary: ' + summary + '\nRows (' + (r ? r.values.length : 0) +
        ' in all):\n' + cols.join(' | ') + '\n' + rows.join('\n') + '\n\nQuestion: ' + question }
    ];
  }
  // ── the glossary (docs/assets/chat/glossary.json): what explanations are made of ─────────
  function withGlossary(lex, data) {
    lex.glossary = (data && data.entries) || [];
    lex.glossaryStatus = (data && data.status) || null;
    lex.glossary.forEach(function (e) { e._terms = (e.terms || []).map(norm).filter(Boolean); });
    return lex;
  }
  // entries the question names — by a term in its words, or by a parameter it resolved —
  // in the order the question names them, at most three
  function glossaryFor(p, lex) {
    var text = ' ' + p.text.replace(/[?!.,]/g, ' ').replace(/\s+/g, ' ') + ' ';
    var codes = {};
    p.terms.forEach(function (x, i) { x.codes.forEach(function (c) { if (!(c in codes)) codes[c] = text.indexOf(' ' + x.matched + ' '); }); });
    var hits = [];
    (lex.glossary || []).forEach(function (e) {
      var at = -1;
      e._terms.forEach(function (t) {
        var i = text.indexOf(' ' + t + ' ');
        if (i >= 0 && (at < 0 || i < at)) at = i;
      });
      (e.qcodes || []).forEach(function (c) { if (c in codes && (at < 0 || codes[c] < at)) at = Math.max(0, codes[c]); });
      if (at >= 0) hits.push([at, e]);
    });
    hits.sort(function (a, b) { return a[0] - b[0]; });
    var seen = {};
    return hits.map(function (h) { return h[1]; }).filter(function (e) { return !seen[e.id] && (seen[e.id] = 1); }).slice(0, 3);
  }

  // an answer in words, from general knowledge — the conversation so far for follow-ups, the
  // ontology's names for the terms, and no data
  function generalMessages(question, p, history, entries, passages) {
    var terms = p.terms.map(function (x) { return x.label; }).join('; ');
    var ref = (entries || []).map(function (e) { return '[' + e.title + '] ' + e.text; }).join('\n');
    var m = [{ role: 'system', content:
      'You are a pharmacometrics tutor on a website about a pharmacokinetics, pharmacodynamics and ' +
      'pharmacogenomics knowledge base. Answer in plain language, as fully as the question needs. Explain ' +
      'concepts; do not give values for specific drugs. If you do not know, or are unsure, say "I have no ' +
      'knowledge about it" rather than guessing. No personal dosing advice; do not add a disclaimer, the page shows one.' +
      (terms ? ' The question names these parameters: ' + terms + '.' : '') +
      (ref ? '\nThe site glossary says (answer from it, in your own words, and do not contradict it):\n' + ref : '') +
      (passages && passages.length ? '\nAnswer from the passages given with the question, not from memory; cite a ' +
        'passage as [1] after a claim taken from it. A value for a drug may be given only as a passage states it.' : '') }];
    (history || []).slice(-3).forEach(function (h) {
      m.push({ role: 'user', content: h.q }, { role: 'assistant', content: String(h.a || '').slice(0, 1200) });
    });
    m.push({ role: 'user', content: passages && passages.length
      ? passageBlock(passages) + '\n\nQuestion: ' + question : question });
    return m;
  }
  // a general answer may explain; a value for a named drug must come from the data, so a
  // sentence naming a drug with a number goes
  // The checks judge sentences, but the answer is Markdown. Lines, list markers, headings and
  // table rules stay as the model wrote them and only a failing sentence is cut out of its
  // line, so the final render keeps the formatting the stream showed. A heading without a
  // number makes no claim and is kept; one left with nothing under it is harmless.
  var MD_PREFIX = /^(\s*(?:#{1,6}\s+|>\s*)?(?:(?:\d+[.)]|[-*•+])\s+)?)/;
  var MD_RULE = /^\s*(?:\|?\s*:?-{3,}:?\s*)+\|?\s*$|^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/;
  function filterSentences(text, keep) {
    var dropped = [], lines = [];
    String(text || '').replace(/<think>[\s\S]*?<\/think>/g, '').split('\n').forEach(function (line) {
      if (!line.trim() || MD_RULE.test(line)) { lines.push(line.trim() ? line : ''); return; }
      var pre = MD_PREFIX.exec(line)[1], body = line.slice(pre.length);
      if (/^\s*#/.test(pre) && !/\d/.test(body)) { lines.push(line); return; }
      var out = [];
      body.split(/(?<=[.!?])\s+/).forEach(function (sent) {
        var t = sent.trim();
        if (!t) return;
        if (keep(t.replace(/\*\*|__|`/g, ''))) out.push(t); else dropped.push(t);
      });
      if (out.length) lines.push(pre + out.join(' '));
    });
    var md = lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
    // headings alone, every sentence under them dropped, say nothing
    var claims = md.split('\n').filter(function (l) { return l.trim() && !/^\s*#/.test(l) && !MD_RULE.test(l); });
    return { text: claims.length ? md : '', dropped: dropped };
  }

  function checkGeneral(text, lex, passages) {
    var shown = numbersIn(passageText(passages));
    var inPassages = function (x) { return shown.some(function (a) { return a === x || (a !== 0 && Math.abs(a - x) / Math.abs(a) < 0.005); }); };
    return filterSentences(text, function (sent) {
      var toks = norm(sent).split(' '), drug = false;
      for (var i = 0; i < toks.length && !drug; i++)
        drug = (toks[i] in lex.drug && toks[i].length > 3) || (i + 1 < toks.length && (toks[i] + ' ' + toks[i + 1]) in lex.drug);
      var nums = generalNumbersIn(uncite(sent));
      return !(drug && nums.length && !nums.every(inPassages));
    });
  }

  function numbersIn(s) {
    return (String(s).replace(/(\d),(\d{3})\b/g, '$1$2').match(/-?\d+(\.\d+)?(e-?\d+)?/gi) || []).map(Number);
  }
  // A number embedded in a clinical label is not a drug-specific measurement: Type 2 diabetes,
  // V2 receptors, CYP2D6 and COVID-19 are names/classifications. Keep standalone quantities
  // (e.g. 45 mg or 20%) guarded while not discarding a whole sentence just because of a label.
  function generalNumbersIn(s) {
    s = String(s || '').replace(/\btype\s+\d+\b/gi, ' ')
      .replace(/\b\d+(?:st|nd|rd|th)\b/gi, ' ')
      .replace(/\b\d+-HT\d+[A-Za-z]?\b/gi, ' ')
      .replace(/\b[A-Za-z][A-Za-z0-9]*(?:-[A-Za-z0-9]+)*-\d+[A-Za-z0-9]*\b/g, ' ')
      .replace(/\b[A-Za-z]+[A-Za-z0-9]*(?:-[A-Za-z0-9]+)*\d[A-Za-z0-9]*(?:-[A-Za-z0-9]+)*\b/g, ' ')
      .replace(/[αβγδ]\s*-?\s*\d+/gi, ' ');
    return numbersIn(s);
  }
  // A kept sentence (1) uses only numbers the model was shown — the summary, the rows it saw,
  // the question; (2) computes nothing: an average or a 'most common value' over rows it saw a
  // part of is invented however plausible; (3) shares a word with the rows or the summary that
  // the question did not already contain — a sentence that does not is outside knowledge
  // ('metformin is eliminated by glomerular filtration'), true or not.
  // saying so is always allowed: 'I have no knowledge about it' is grounded by being honest
  var NO_KNOWLEDGE = /\b(no knowledge|do(es)? not know|don't know|not in (the|my|this) data)\b/i;
  var STATS = /\b(average|mean|median|approximately|roughly|around|most (common|commonly|frequent|frequently)|typical(ly)?|on average|in total|overall)\b/i;
  function words(s) {
    return (norm(s).match(/[a-z][a-z0-9-]{3,}/g) || []).filter(function (w) { return STOP.indexOf(w) < 0; })
      .map(function (w) { return w.replace(/(es|s)$/, ''); });         // 'records' and 'record(s)' alike
  }
  // passages: what retrieval showed the model. A number quoted from one may carry the passage's
  // own 'approximately', and with passages a sentence that names what the question or the
  // material names is an answer, not outside knowledge — its numbers are still checked.
  function checkExplanation(text, res, extra, question, shown, general, passages) {
    var quoted = numbersIn(passageText(passages));
    var r = res && res[0];
    var cells = [String(extra || '')];
    if (r) r.values.slice(0, shown || 12).forEach(function (v) { v.forEach(function (x) { if (x !== null) cells.push(String(x)); }); });
    var allowed = numbersIn(cells.join(' ') + ' ' + (question || ''));
    if (r) allowed.push(r.values.length);
    var vocab = {};
    words(cells.join(' ') + ' ' + (r ? r.columns.join(' ') : '')).forEach(function (w) { vocab[w] = 1; });
    var asked = {};
    words(question || '').forEach(function (w) { asked[w] = 1; });
    var ok = function (x) {
      return allowed.some(function (a) { return a === x || (a !== 0 && Math.abs(a - x) / Math.abs(a) < 0.005); });
    };
    return filterSentences(text, function (sent) {
        var nums = numbersIn(uncite(sent));
        // a checked number ties a sentence to the rows; without one it needs a word from them
        var grounded = general || nums.length > 0 || NO_KNOWLEDGE.test(sent) ||
                       words(sent).some(function (w) { return vocab[w] && (!asked[w] || !!(passages && passages.length)); });
        var fromPassage = nums.length && nums.every(function (x) {
          return quoted.some(function (a) { return a === x || (a !== 0 && Math.abs(a - x) / Math.abs(a) < 0.005); });
        });
        return nums.every(ok) && !(nums.length && STATS.test(sent) && !fromPassage) && grounded;
      });
  }

  // Stream every partial update to the live UI. The displayed draft is provisional; once the
  // model finishes, checkGeneral/checkExplanation still decide which sentences are kept.
  function textWithProgress(eng, messages, maxTokens, onText, onThinking) {
    if (typeof onText !== 'function' && typeof onThinking !== 'function') return eng.text(messages, maxTokens);
    return eng.text(messages, maxTokens, typeof onText === 'function' ? function (partial) {
      if (partial) onText(partial);
    } : undefined, onThinking);
  }

  // ── retrieval: passages the model reads (export/knowledge_sqlite.py) ─────────────────────
  // A small model answers 'how is metformin eliminated' from memory, and memory is where its
  // invented numbers come from. The knowledge database holds DrugBank prose, ClinPGx guideline
  // and clinical-annotation text and the abstracts behind the records; the question's words
  // become an FTS4 query over the drugs it names, ranked by BM25 (computed here from
  // matchinfo: the site's sql.js has FTS4, not FTS5), and the best few passages that fit a
  // character budget go into the prompt, numbered, so the answer can cite them.
  var RAG_STOP = STOP.concat(('tell explain why how does do work works please know mean means meaning ' +
                              'can could would should will use used using into than then also').split(' '));
  var RAG_BUDGET = 3200;             // characters: ~800 tokens of a 4k context
  // a reader's word → the words the sources use for it (DrugBank says 'excreted', not 'eliminated')
  var RAG_SYNONYMS = [
    [/^(eliminat|excret|clear(ed|s)?$|renal)/, ['elimination', 'excreted', 'clearance']],
    [/^(metaboli[sz]|biotransform|cyp)/, ['metabolism', 'metabolized']],
    [/^(absor|bioavailab|oral)/, ['absorption', 'bioavailability']],
    [/^(work|act|mechanism|target)/, ['mechanism', 'action']],
    [/^(half|halflife)/, ['half', 'life']],
    [/^(distribut|volume|tissue)/, ['distribution', 'volume']],
    [/^(bound|binding|protein)/, ['protein', 'binding']],
    [/^(guideline|recommend|cpic|dpwg)/, ['guideline', 'recommendation', 'recommends']],
    [/^(side|adverse|toxic)/, ['adverse', 'toxicity']],
    [/^(indicat|treat|used)/, ['indicated', 'treatment']]
  ];
  function ragTerms(p) {
    var named = {};
    p.drugs.forEach(function (d) { norm(d.matched + ' ' + d.name).split(' ').forEach(function (w) { named[w] = 1; }); });
    var seen = {}, out = [];
    p.text.split(' ').concat(p.genes.map(function (g) { return g.toLowerCase(); })).forEach(function (w) {
      w = w.replace(/[^a-z0-9]/g, '');
      if (w.length < 3 || RAG_STOP.indexOf(w) >= 0 || named[w] || seen[w] || /^\d+$/.test(w)) return;
      seen[w] = 1; out.push(w);
      RAG_SYNONYMS.forEach(function (x) {
        if (x[0].test(w)) x[1].forEach(function (y) { if (!seen[y]) { seen[y] = 1; out.push(y); } });
      });
    });
    return out.slice(0, 16);
  }
  function u32(blob) {
    var b = blob instanceof Uint8Array ? blob : new Uint8Array(blob);
    return new Uint32Array(b.slice().buffer);       // a copy: the blob need not be 4-byte aligned
  }
  // BM25 (k1 1.2, b 0.75) over title (weight 2) and text from matchinfo('pcnalx')
  function bm25(blob) {
    var m = u32(blob), P = m[0], C = m[1], N = m[2], W = [2, 1], score = 0;
    for (var i = 0; i < P; i++) for (var j = 0; j < C; j++) {
      var x = 3 + 2 * C + 3 * (i * C + j), tf = m[x], df = m[x + 2];
      if (!tf) continue;
      var avg = m[3 + j] || 1, len = m[3 + C + j];
      var idf = Math.log((N - df + 0.5) / (df + 0.5) + 1);
      score += (W[j] || 1) * idf * tf * 2.2 / (tf + 1.2 * (0.25 + 0.75 * len / avg));
    }
    return score;
  }
  var PASSAGE_COLS = 'p.id, p.drug_slug, p.kind, p.field, p.gene, p.title, p.text, p.source, p.url, p.license';
  function passageRows(r) {
    return r && r[0] ? r[0].values.map(function (v) {
      return { id: v[0], drug: v[1], kind: v[2], field: v[3], gene: v[4], title: v[5], text: v[6],
               source: v[7], url: v[8], license: v[9], score: v[10] === undefined ? 0 : v[10] };
    }) : [];
  }
  // what a drug's passages say first when the question's words match none of them
  var DRUGBANK_ORDER = ['description', 'mechanism_of_action', 'metabolism', 'half_life', 'clearance',
                        'absorption', 'volume_of_distribution', 'protein_binding', 'indication', 'pharmacodynamics'];
  function retrieve(kdb, p, opts) {
    if (!kdb) return [];
    opts = opts || {};
    var budget = opts.budget || RAG_BUDGET, terms = ragTerms(p);
    var slugs = p.drugs.map(function (d) { return d.slug; });
    var where = slugs.length ? ' AND p.drug_slug IN (' + inList(slugs) + ')' : '';
    var hits = [];
    if (terms.length) {
      var rows = kdb.exec('SELECT ' + PASSAGE_COLS + ", matchinfo(passage_fts, 'pcnalx') FROM passage_fts " +
                          'JOIN passage p ON p.id = passage_fts.docid WHERE passage_fts MATCH ' +
                          "'" + sq(terms.join(' OR ')) + "'" + where);
      hits = passageRows(rows).map(function (h) { h.score = bm25(h.score); return h; });
    }
    var pgx = p.intent === 'pgx' || p.genes.length > 0, lit = /papers|records|param_values|disagree/.test(p.intent);
    hits.forEach(function (h) {
      if (pgx && (h.kind === 'guideline' || h.kind === 'clinical')) h.score *= 1.5;
      if (p.genes.some(function (g) { return String(h.gene || '').split(',').indexOf(g) >= 0; })) h.score *= 1.5;
      if (lit && h.kind === 'abstract') h.score *= 1.2;
    });
    // no drug named: a whole-corpus search; an abstract about one drug is a weak answer to a
    // general question, the drug-level texts less so
    if (!slugs.length) hits = hits.filter(function (h) { return h.score > 0; })
      .map(function (h) { if (h.kind === 'abstract' && !lit) h.score *= 0.6; return h; });
    // a named drug whose passages the words missed ('tell me about metformin'): its DrugBank summary
    slugs.forEach(function (s) {
      if (hits.some(function (h) { return h.drug === s; })) return;
      passageRows(kdb.exec('SELECT ' + PASSAGE_COLS + " FROM passage p WHERE p.drug_slug = '" + sq(s) + "'" +
                           (pgx ? " AND p.kind IN ('guideline', 'clinical', 'drugbank')" : " AND p.kind = 'drugbank'")))
        .forEach(function (h) {
          var k = DRUGBANK_ORDER.indexOf(h.field);
          h.score = h.kind === 'drugbank' ? 0.1 - 0.001 * (k < 0 ? 99 : k) : 0.2;
          hits.push(h);
        });
    });
    hits.sort(function (a, b) { return b.score - a.score || a.id - b.id; });
    // several drugs: take their best passages in turn, so one drug's abstracts do not crowd out the other
    if (slugs.length > 1) {
      var by = {}, order = [];
      hits.forEach(function (h) { (by[h.drug] = by[h.drug] || []).push(h); });
      for (var round = 0; order.length < hits.length; round++)
        slugs.forEach(function (s) { if (by[s] && by[s][round]) order.push(by[s][round]); });
      hits = order;
    }
    var out = [], used = 0, perSource = {};
    var max = opts.max || (slugs.length ? 6 : 3);
    for (var i = 0; i < hits.length && out.length < max; i++) {
      var h = hits[i], n = h.text.length + h.title.length + 30;
      if ((perSource[h.source] || 0) >= 2 || used + n > budget) continue;
      perSource[h.source] = (perSource[h.source] || 0) + 1;
      used += n; out.push(h);
    }
    return out;
  }
  function passageBlock(passages) {
    if (!passages || !passages.length) return '';
    return 'Passages:\n' +
      passages.map(function (h, i) { return '[' + (i + 1) + '] ' + h.title + ' (' + h.source + '): ' + h.text; }).join('\n');
  }
  function passageText(passages) {
    return (passages || []).map(function (h) { return h.title + ' ' + h.text; }).join(' ');
  }
  // '[1]' and '[2, 3]' are citations, not numbers to check
  function uncite(s) { return String(s || '').replace(/\[\d+(?:\s*[,–-]\s*\d+)*\]/g, ''); }

  function stripLimit(sql) { return String(sql).replace(/\s+LIMIT\s+\d+\s*;?\s*$/i, ';'); }

  // ── one question, start to finish: what the page and the evaluation both run ──────────────
  // opts: { engine, explain: bool, always: bool (ask the model even when keywords suffice) }
  function answer(question, db, lex, opts) {
    opts = opts || {};
    var eng = opts.engine || null;
    var out = { question: question, by: 'keywords', explanation: null, dropped: [], modelError: null };
    var p = parse(question, lex);
    if (OUT_OF_SCOPE.test(p.text)) p.intent = 'out_of_scope';
    // "and what about V/F?" after an explanation is the same kind of question, not a data query
    var prev = (opts.history || []).slice(-1)[0];
    if (prev && prev.intent === 'explain' && FOLLOW_UP.test(p.text) && !p.drugs.length && !p.missing.length &&
        p.intent !== 'out_of_scope') p.intent = 'explain';
    var step = Promise.resolve(p);
    if (eng && p.intent !== 'out_of_scope' && (opts.always || needsModel(p))) {
      step = eng.json(planMessages(question, p), PLAN_SCHEMA).then(function (m) {
        out.modelPlan = m;
        return mergePlan(p, m, lex, eng.name);
      }, function (e) { out.modelError = String(e && e.message || e); return p; });
    }
    return step.then(function (plan) {
      out.plan = plan;
      out.by = plan.by || 'keywords';
      if (plan.intent === 'out_of_scope') {
        out.sql = null; out.title = 'not a question for this page'; out.res = [];
        out.summary = 'This page cannot give dosing or medical advice — ask a doctor or pharmacist.';
        return out;
      }
      if (plan.intent === 'explain') {
        // words, not data: no query and no table. The glossary answers on its own; a model
        // answers from it (or, where it has no entry, from general knowledge — said so)
        out.glossary = glossaryFor(plan, lex);
        out.general = true;
        if (!eng && out.glossary.length) {
          out.sql = null; out.title = 'glossary'; out.res = [];
          out.summary = out.glossary.map(function (e) { return e.title + ': ' + e.text; }).join('\n\n');
          return out;
        }
        if (eng) {
          out.sql = null; out.title = 'explanation'; out.res = [];
          // the reviewed glossary answers a question about meaning better than search hits do
          out.passages = out.glossary.length ? [] :
            retrieve(opts.knowledge, plan, { budget: (opts.history || []).length ? 2400 : RAG_BUDGET });
          return textWithProgress(eng, generalMessages(question, plan, opts.history, out.glossary, out.passages), 900,
            opts.onText, opts.onThinking).then(function (t) {
            var c = checkGeneral(t, lex, out.passages);
            out.explanation = c.text || null; out.dropped = c.dropped;
            out.summary = c.text ? '' : out.glossary.map(function (e) { return e.title + ': ' + e.text; }).join('\n\n') ||
                                        'The model gave no usable explanation.';
            return out;
          });
        }
        out.general = false;            // keywords, no entry: the ontology rows below, if any
      }
      if (plan.intent === 'other' && !eng) plan.intent = 'search';
      if (plan.intent === 'other') return modelSQL(question, db, eng, out, lex, opts);
      var q = toSQL(plan);
      out.sql = q.sql; out.title = q.title;
      out.res = q.sql ? db.exec(q.sql) : [];
      return out;
    }).then(function (o) {
      if (o.general) return o;
      if (o.plan.intent === 'explain') { o.summary = summarize(o.plan, o.res); return o; }
      o.summary = o.summary || summarize(o.plan, o.res);
      // a personal dosing question stays declined: no passages, no prose
      if (!eng || !opts.explain || ['missing', 'choose', 'out_of_scope'].indexOf(o.plan.intent) >= 0) return o;
      // the passages that bear on the question: with them the prose may answer even where the
      // rows are empty or only a name search ('how is metformin eliminated')
      var passages = retrieve(opts.knowledge, o.plan);
      var rows = o.res && o.res[0] && o.res[0].values.length;
      if (!passages.length && (!rows || o.plan.intent === 'search')) return o;   // nothing to say in prose
      o.passages = passages;
      // a data question that also asks why ('why is CL/F of metformin reported, not CL'): the
      // prose may reason generally; its numbers still have to be the rows'
      var why = CUES.explain.test(o.plan.text);
      var entries = why ? glossaryFor(o.plan, lex) : [];
      o.glossary = entries;
      return textWithProgress(eng, explainMessages(question, o.plan, o.res, o.summary, why, entries, passages),
        why ? 700 : 500,
        opts.onText, opts.onThinking).then(function (t) {
        var c = checkExplanation(t, o.res, o.summary + ' ' + passageText(passages), question, 12, why, passages);
        o.explanation = c.text || null; o.dropped = c.dropped;
        return o;
      }, function (e) { o.modelError = String(e && e.message || e); return o; });
    });
  }

  // 'other': the model writes the SQL; one repair with the error; if both fail, answer in words
  // from general knowledge rather than pretending the failed query was a successful search.
  function modelSQL(question, db, eng, out, lex, opts) {
    var card = schemaCard(db);
    var tryRun = function (text) {
      var sql = guardSQL(text);
      return { sql: sql, res: db.exec(sql) };
    };
    return eng.text(sqlMessages(question, card), 300).then(function (t1) {
      try { return tryRun(t1); } catch (e1) {
        return eng.text(sqlMessages(question, card, { sql: t1, error: String(e1.message || e1) }), 300)
          .then(function (t2) { return tryRun(t2); });
      }
    }).then(function (r) {
      out.sql = '-- written by ' + eng.name + ', checked read-only\n' + r.sql;
      out.title = 'custom query'; out.res = r.res;
      return out;
    }, function (e) {
      out.sqlError = String(e && e.message || e);
      out.sql = null; out.title = 'general answer'; out.res = [];
      out.general = true;
      out.glossary = glossaryFor(out.plan, lex);
      out.passages = retrieve(opts.knowledge, out.plan);
      var messages = generalMessages(question, out.plan, opts.history, out.glossary, out.passages);
      messages[0].content += '\nThe database could not build a query for this question. Answer from general ' +
        'background only; do not claim that the database contains supporting results or invent numbers.';
      return textWithProgress(eng, messages, 900, opts.onText, opts.onThinking).then(function (text) {
        var checked = checkGeneral(text, lex, out.passages);
        out.explanation = checked.text || null;
        out.dropped = checked.dropped;
        out.summary = checked.text ? '' : out.glossary.map(function (entry) {
          return entry.title + ': ' + entry.text;
        }).join('\n\n') || 'The database query could not be built and the model gave no usable explanation.';
        return out;
      }, function (answerError) {
        out.modelError = 'direct answer: ' + String(answerError && answerError.message || answerError);
        out.summary = 'The database query could not be built, and the model could not produce a usable answer.';
        return out;
      });
    });
  }

  function understood(p) {
    var bits = [INTENT_TEXT[p.intent] || p.intent];
    if (p.drugs.length) bits.push('drug: ' + p.drugs.map(function (d) { return d.name; }).join(', '));
    if (p.params) bits.push('parameter: ' + p.params.label);
    if (p.genes.length) bits.push('gene: ' + p.genes.join(', '));
    if (p.population) bits.push('population: ' + p.population.label);
    if (p.year) bits.push('year ' + p.year.op + ' ' + p.year.y);
    if (p.unresolved && p.unresolved.length) bits.push('not a name in the database: ' + p.unresolved.join(', '));
    if (p.by) bits.push('read by ' + p.by);
    if (p.missing.length && p.drugs.length)
      bits.push('not extracted: ' + p.missing.map(function (m) { return m.name; }).join(', '));
    return bits;
  }

  var api = { FAMILIES: FAMILIES, INTENT_TEXT: INTENT_TEXT, lexiconFromRows: lexiconFromRows,
              lexiconFromDB: lexiconFromDB, parse: parse, toSQL: toSQL, summarize: summarize,
              understood: understood, norm: norm,
              // phase 2
              PLAN_SCHEMA: PLAN_SCHEMA, MODEL_INTENTS: MODEL_INTENTS, needsModel: needsModel,
              planMessages: planMessages, mergePlan: mergePlan, guardSQL: guardSQL, schemaCard: schemaCard,
              sqlMessages: sqlMessages, explainMessages: explainMessages, checkExplanation: checkExplanation,
              stripLimit: stripLimit, answer: answer, generalMessages: generalMessages, checkGeneral: checkGeneral,
              withGlossary: withGlossary, glossaryFor: glossaryFor,
              // retrieval
              retrieve: retrieve, ragTerms: ragTerms, passageBlock: passageBlock };
  root.pkAsk = api;
  if (typeof module === 'object' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
