// The graph explorer's queries: the only Cypher the /graph page runs and the only Cypher the
// public proxy (tools/graph-proxy) will forward. A local graph gets the same statements, so
// what a reader sees locally is what the public page can show. Every statement is read-only
// and runs in a READ transaction; parameters are checked against their declared type before
// anything is sent, and every result is bounded by a LIMIT the caller cannot raise past `max`.
//
// Shared by the browser (dynamic import from assets/js/pk-graph.js) and the Cloudflare Worker
// (bundled by wrangler), so it must stay a dependency-free ES module.

const SLUG = /^(drug|toxin)_[\p{L}\p{N}_]{1,120}$/u;
const PRINTABLE = /^[^\u0000-\u001f\u007f]*$/u;

export const PARAM_TYPES = {
  slug: (v) => typeof v === 'string' && SLUG.test(v),
  key: (v) => typeof v === 'string' && v.length >= 3 && v.length <= 200 && PRINTABLE.test(v),
  text: (v) => typeof v === 'string' && v.trim().length >= 2 && v.length <= 80 && PRINTABLE.test(v),
  int: (v) => Number.isInteger(v),
};

const LIMIT = (dflt, max) => ({ type: 'int', min: 1, max, default: dflt });

export const QUERIES = {
  probe: {
    title: 'Is this a Pharmacolibrary graph?',
    params: {},
    cypher: `CALL db.labels() YIELD label
WITH collect(label) AS labels
RETURN labels, COUNT { (:Drug) } AS drugs, COUNT { (:Paper) } AS papers,
       COUNT { (:Record) } AS records, COUNT { (:Chunk) } AS chunks`,
  },

  drug_search: {
    title: 'Drugs by name or synonym',
    params: { q: { type: 'text' }, limit: LIMIT(12, 30) },
    cypher: `WITH toLower(trim($q)) AS q
MATCH (d:Drug)
WITH d, q, CASE WHEN toLower(d.generic_name) STARTS WITH q THEN null
     ELSE head([s IN coalesce(d.synonyms, []) + coalesce(d.brands, []) WHERE toLower(s) STARTS WITH q]) END AS via
WHERE toLower(d.generic_name) STARTS WITH q OR via IS NOT NULL
RETURN d.slug AS slug, d.generic_name AS name, via,
       COUNT { (d)<-[:OF_DRUG]-(:Record) } AS records
ORDER BY records DESC, size(d.generic_name)
LIMIT $limit`,
  },

  drug_card: {
    title: 'What the knowledge base holds about a drug',
    params: { slug: { type: 'slug' } },
    cypher: `MATCH (d:Drug {slug: $slug})
RETURN d.slug AS slug, d.generic_name AS name, d.drugbank_id AS drugbank, d.groups AS groups,
       d.molecule_type AS molecule_type, d.formula AS formula, d.molecular_weight AS mw,
       coalesce(d.synonyms, [])[..12] AS synonyms, coalesce(d.brands, [])[..12] AS brands,
       coalesce(d.is_toxin, false) AS is_toxin, coalesce(d.atc_codes, []) AS atc_codes,
       [(d)-[:DESCRIBED_BY]->(c:Claim) | {q: c.question, text: c.text, basis: c.basis}] AS about,
       [(d)-[:CLASSIFIED_AS]->(a:AtcCode) | {code: a.code, name: a.name}] AS atc,
       [(d)-[:CLASSIFIED_AS]->(:AtcCode)-[:PART_OF*1..4]->(p:AtcCode) | {code: p.code, name: p.name, level: p.level}] AS atc_path,
       [(c:Chunk {kind: 'drugbank'})-[:ABOUT]->(d) | {section: c.section, text: left(c.text, 900)}] AS drugbank_text,
       [(d)-[:IN_CATEGORY]->(c:Category) | c.name][..40] AS categories,
       [(g:Guideline)-[:FOR_DRUG]->(d) | {name: g.name, source: g.source, url: g.url,
          genes: [(g)-[:FOR_GENE]->(x:Gene) | x.symbol]}] AS guidelines,
       [(a:ClinicalAnnotation)-[:FOR_DRUG]->(d) WHERE a.level IN ['1A', '1B', '2A'] |
          {level: a.level, genes: a.genes, category: a.phenotype_category, phenotypes: a.phenotypes, url: a.url}][..30] AS annotations,
       [(d)-[:HAS_COMPOUND]->(c:Compound) | {name: c.name, role: c.role, formed_from: c.formed_from}][..30] AS compounds,
       [(d)<-[:OF_DRUG]-(r:Record) | r.domain] AS record_domains,
       COUNT { (d)-[:STUDIED_IN]->(:Paper) } AS papers`,
  },

  drug_records: {
    title: 'A drug, its records, their papers and genes',
    params: { slug: { type: 'slug' }, limit: LIMIT(80, 200) },
    cypher: `MATCH (d:Drug {slug: $slug})
CALL (d) {
  MATCH (d)<-[:OF_DRUG]-(r:Record)
  WITH r ORDER BY r.domain, r.status, r.key LIMIT $limit
  OPTIONAL MATCH (r)-[:FROM_PAPER]->(p:Paper)
  RETURN collect({key: r.key, domain: r.domain, status: r.status, population: r.population_label,
                  n_params: COUNT { (r)-[:HAS_PARAMETER]->() }, paper: p.key, cite: coalesce(p.cite, p.stem),
                  title: p.title, year: p.year, license: p.license, oa: p.oa_status, doi: p.doi,
                  genes: [(r)-[:FOR_GENE]->(g:Gene) | g.symbol]}) AS records
}
RETURN d.slug AS slug, d.generic_name AS name,
       [(d)-[:CLASSIFIED_AS]->(a:AtcCode) | {code: a.code, name: a.name}] AS atc, records`,
  },

  record_evidence: {
    title: 'Where each value of a record came from',
    params: { record: { type: 'key' }, limit: LIMIT(120, 300) },
    cypher: `MATCH (r:Record {key: $record})
OPTIONAL MATCH (r)-[:FROM_PAPER]->(pp:Paper)
CALL (r) {
  MATCH (r)-[:HAS_PARAMETER]->(p:Parameter)
  OPTIONAL MATCH (p)-[:IS_A]->(q:QCode)
  OPTIONAL MATCH (p)-[s:SUPPORTED_BY]->(x)
  WITH p, q, s, x, x IS NOT NULL AND (coalesce(x.open_text, false) OR x.kind IN ['snapshot', 'chart']) AS shown
  ORDER BY p.name LIMIT $limit
  RETURN collect({name: p.name, value: p.value, unit: coalesce(p.unit_canonical, p.unit_verbatim),
                  rse: p.rse_percent, label: p.label_verbatim, qcode: q.parameter_id, qname: q.name,
                  via: CASE WHEN x IS NULL THEN null ELSE labels(x)[0] END, kind: s.kind, method: s.method,
                  verified: s.verified, cell: s.cell_text, header: s.column_header, table: s.table_id,
                  row: s.row, col: s.col, section: coalesce(s.section, x.section),
                  caption: CASE WHEN x:Table AND shown THEN x.caption END,
                  excerpt: CASE WHEN x:Chunk AND shown THEN left(x.text, 700) END,
                  text_withheld: x:Chunk AND NOT shown}) AS params
}
RETURN r.key AS key, r.domain AS domain, r.status AS status, r.population_label AS population,
       r.n_subjects AS n_subjects, r.species AS species, r.review_status AS review,
       pp.key AS paper, coalesce(pp.cite, pp.stem) AS cite, pp.title AS title, pp.year AS year,
       pp.doi AS doi, pp.pmid AS pmid, pp.license AS license, pp.oa_status AS oa, params`,
  },

  citations: {
    title: "Citation network of a drug's papers",
    params: { slug: { type: 'slug' }, limit: LIMIT(400, 1000) },
    cypher: `MATCH (d:Drug {slug: $slug})-[:STUDIED_IN]->(a:Paper)
WITH collect(a) AS mine
UNWIND mine AS a
MATCH (a)-[:CITES]->(b:Paper)
WITH mine, a, b LIMIT $limit
RETURN a.key AS src, coalesce(a.cite, a.stem) AS src_cite, a.year AS src_year, a.title AS src_title,
       EXISTS { (a)<-[:FROM_PAPER]-(:Record) } AS src_records,
       b.key AS dst, coalesce(b.cite, b.stem) AS dst_cite, b.year AS dst_year, b.title AS dst_title,
       EXISTS { (b)<-[:FROM_PAPER]-(:Record) } AS dst_records, b IN mine AS inside,
       [(b)<-[:STUDIED_IN]-(o:Drug) WHERE o.slug <> $slug | o.generic_name][..6] AS other_drugs`,
  },

  condition_drugs: {
    title: 'Drugs related to a condition, and how',
    params: { q: { type: 'text' }, limit: LIMIT(60, 150) },
    cypher: `WITH toLower(trim($q)) AS q
CALL (q) {
  MATCH (c:Chunk {kind: 'drugbank'})-[:ABOUT]->(d:Drug)
  WHERE c.section = 'indication' AND toLower(c.text) CONTAINS q
  RETURN d, 'indication' AS relation, 'DrugBank indication' AS source, left(c.text, 260) AS text, [] AS genes
  UNION
  MATCH (d:Drug)-[:DESCRIBED_BY]->(cl:Claim)
  WHERE toLower(cl.text) CONTAINS q
  RETURN d, 'summary' AS relation, 'drug summary (Wikidata, ATC)' AS source, cl.text AS text, [] AS genes
  UNION
  MATCH (d:Drug)<-[:OF_DRUG]-(r:Record)
  WHERE toLower(coalesce(r.condition, '')) CONTAINS q OR toLower(coalesce(r.population_label, '')) CONTAINS q
  RETURN d, 'studied in' AS relation, r.domain + ' record' AS source, coalesce(r.population_label, r.condition) AS text,
         [] AS genes
  UNION
  MATCH (a:ClinicalAnnotation)-[:FOR_DRUG]->(d:Drug)
  WHERE toLower(coalesce(a.phenotypes, '')) CONTAINS q
  RETURN d, CASE WHEN a.phenotype_category CONTAINS 'Toxicity' THEN 'toxicity'
                 WHEN a.phenotype_category CONTAINS 'Efficacy' THEN 'response' ELSE 'pharmacogenomic' END AS relation,
         'ClinPGx ' + a.level AS source, a.phenotypes AS text,
         CASE WHEN a.genes IS :: LIST<ANY> THEN a.genes ELSE [a.genes] END AS genes
}
// a toxin-store copy of a drug the drug store holds is the same substance: keep the drug
WITH d, relation, source, text, genes
WHERE d.slug STARTS WITH 'drug_' OR NOT EXISTS { MATCH (o:Drug {slug: 'drug_' + substring(d.slug, 6)}) }
WITH d, collect({relation: relation, source: source, text: text, genes: genes})[..8] AS evidence,
     collect(DISTINCT relation) AS relations, coalesce(d.atc_codes, []) AS atcs
WITH d, evidence, relations, atcs,
     [(d)-[:IN_CATEGORY]->(c:Category) WHERE toLower(c.name) CONTAINS 'diagnos' OR toLower(c.name) CONTAINS 'contrast'
        OR toLower(c.name) CONTAINS 'radiopharm' | c.name] AS diagnostic_categories
WITH d, evidence, relations, atcs, diagnostic_categories,
     [x IN [
        CASE WHEN any(c IN atcs WHERE c STARTS WITH 'V04C') THEN 'screening test' END,
        CASE WHEN any(c IN atcs WHERE (c STARTS WITH 'V04' AND NOT c STARTS WITH 'V04C') OR c STARTS WITH 'V08' OR c STARTS WITH 'V09')
             OR size(diagnostic_categories) > 0 THEN 'diagnostic' END,
        CASE WHEN any(c IN atcs WHERE c STARTS WITH 'J07') THEN 'preventive' END,
        CASE WHEN d.is_toxin THEN 'toxin' END,
        CASE WHEN any(c IN atcs WHERE NOT (c STARTS WITH 'V04' OR c STARTS WITH 'V08' OR c STARTS WITH 'V09' OR c STARTS WITH 'J07'))
             THEN 'therapeutic' END,
        CASE WHEN size(atcs) = 0 AND NOT coalesce(d.is_toxin, false) AND size(diagnostic_categories) = 0
             THEN CASE WHEN 'investigational' IN coalesce(d.groups, []) THEN 'investigational' ELSE 'unclassified' END END
     ] WHERE x IS NOT NULL] AS roles
RETURN d.slug AS slug, d.generic_name AS name, roles, relations, atcs[..4] AS atc, evidence,
       COUNT { (d)<-[:OF_DRUG]-(:Record) } AS records
ORDER BY size(relations) DESC, records DESC, name
LIMIT $limit`,
  },

  connect: {
    title: 'Shortest evidence path between two drugs',
    params: { a: { type: 'slug' }, b: { type: 'slug' } },
    cypher: `MATCH (a:Drug {slug: $a}), (b:Drug {slug: $b})
MATCH p = shortestPath((a)-[:STUDIED_IN|CITES|FOR_GENE|OF_DRUG|FROM_PAPER|CLASSIFIED_AS|PART_OF|FOR_DRUG*..8]-(b))
RETURN [n IN nodes(p) | {id: elementId(n), kind: labels(n)[0],
          label: coalesce(n.generic_name, n.cite, n.stem, n.symbol, n.code, n.name, n.key), title: n.title}] AS nodes,
       [r IN relationships(p) | {type: type(r), from: elementId(startNode(r)), to: elementId(endNode(r))}] AS rels`,
  },
};

// name + reader-supplied params -> {statement, parameters}; throws on anything not declared.
export function prepare(name, params) {
  if (typeof name !== 'string' || !Object.prototype.hasOwnProperty.call(QUERIES, name)) {
    throw new Error('unknown query');
  }
  const q = QUERIES[name];
  const given = params && typeof params === 'object' && !Array.isArray(params) ? params : {};
  for (const k of Object.keys(given)) {
    if (!Object.prototype.hasOwnProperty.call(q.params, k)) throw new Error(`unexpected parameter: ${k}`);
  }
  const parameters = {};
  for (const [k, spec] of Object.entries(q.params)) {
    let v = given[k];
    if (v === undefined || v === null || v === '') {
      if (spec.default === undefined) throw new Error(`missing parameter: ${k}`);
      v = spec.default;
    }
    if (spec.type === 'int' && typeof v === 'string' && /^\d+$/.test(v)) v = Number(v);
    if (!PARAM_TYPES[spec.type](v)) throw new Error(`bad parameter: ${k}`);
    if (spec.type === 'int') v = Math.min(spec.max, Math.max(spec.min, v));
    parameters[k] = v;
  }
  return { statement: q.cypher, parameters };
}
