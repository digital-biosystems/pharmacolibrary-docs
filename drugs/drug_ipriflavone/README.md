<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;ipriflavone&quot;}]"></div>

# ipriflavone

- **generic name:** ipriflavone
- **ATC codes:** `M05BX01`
- **DrugBank:** [DB13618](https://go.drugbank.com/drugs/DB13618) · **PubChem:** not captured
- **molar mass:** 280.3178 g/mol (C18H16O3) — DrugBank
- **groups:** investigational

## About

Ipriflavone, an isoflavone derivative, has been studied for the treatment of bone diseases such as osteoporosis. It remains an investigational drug and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1097778](https://www.wikidata.org/wiki/Q1097778) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ipriflavone | parent | 280.318 | C18H16O3 | DrugBank | — | Ma_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:42 | 1:21 | 0/1/0 | 0/0/0 | 0/0/0 | 18,519/1,833 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ma_1997_reference](drugs/drug_ipriflavone/Ipriflavone_Ma1997_reference.md) | — | 1-compartment (no model) | 3 | Ma XH et al., [High performance liquid chromatographi…, Yao xue xue bao = Acta phar… (1997) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 22 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_1999.pdf` | Li YP et al., Pharmacokinetics of intragastric iprifl…, Zhongguo yao li xue bao = A… (1999) | popPK | 10 | not captured | [11270971](https://pubmed.ncbi.nlm.nih.gov/11270971) | The paper reports quantitative pharmacokinetic parameters (Ka, Ke, Tmax, Cmax, AUC) for ipriflavone in rats, with all values explicitly listed in the evidence. |
| `Ma_1997.pdf` | Ma XH et al., [High performance liquid chromatographi…, Yao xue xue bao = Acta phar… (1997) | popPK | 10 | not captured | [11596332](https://pubmed.ncbi.nlm.nih.gov/11596332) | The abstract reports quantitative pharmacokinetic parameters (half-life, AUC, compartment model) for ipriflavone in humans, but lacks explicit values for clearance (CL) or volume (V). |
| `Rohatagi_1997.pdf` | Rohatagi S et al., Integrated pharmacokinetic and metaboli…, American journal of therape… (1997) | popPK | 8 | [10.1097/00045391-199705000-00005](https://doi.org/10.1097/00045391-199705000-00005) | [10423610](https://pubmed.ncbi.nlm.nih.gov/10423610) | The study reports a PK model for ipriflavone in humans, but specific numeric parameter values (CL, V, ka) are not listed in the provided text, only fit statistics. |
| `Mohos_2018.pdf` | Mohos V et al., Interactions of casticin, ipriflavone,…, Biomedicine & pharmacothera… (2018) | pgx | 8 | [10.1016/j.biopha.2018.08.068](https://doi.org/10.1016/j.biopha.2018.08.068) | [30142539](https://www.ncbi.nlm.nih.gov/pubmed/30142539) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Chung_2006.pdf` | Chung HJ et al., Pharmacokinetic changes of ipriflavone…, Biopharmaceutics & drug dis… (2006) | pgx | 7 | [10.1002/bdd.515](https://doi.org/10.1002/bdd.515) | [16902944](https://www.ncbi.nlm.nih.gov/pubmed/16902944) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Chung_2008.pdf` | Chung HJ et al., Effects of water deprivation for 72 h o…, Research in veterinary scie… (2008) | pgx | 7 | [10.1016/j.rvsc.2007.08.010](https://doi.org/10.1016/j.rvsc.2007.08.010) | [17919668](https://www.ncbi.nlm.nih.gov/pubmed/17919668) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T03:42:12.872002+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chung_2006 | not_relevant | 0 | 0 | The paper investigates the effect of acute renal failure (a physiological condition) on pharmacokinetics, not the effect of a genetic variant or genotype (pharmacogenomics). |
| PGx | Chung_2006_2 | not_relevant | 0 | 0 | The study investigates the effects of enzyme inducers/inhibitors on pharmacokinetics, not the influence of genetic variants (pharmacogenomics) on PK/PD parameters. |
| PGx | Chung_2008 | not_relevant | 0 | 0 | The study investigates the effects of water deprivation (dehydration) on ipriflavone pharmacokinetics, not the effects of a genetic variant or genotype. |
| PGx | Chung_2008_2 | not_relevant | 0 | 0 | The study examines the effects of an environmental factor (LPS-induced inflammation) on pharmacokinetics, not a genetic variant or genotype. |
| PGx | Chung_2009 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in a specific animal disease model (Nagase analbuminemic rats) due to hypoalbuminemia, not a human pharmacogenomic genetic variant affecting drug response. |
| popPK | Miyauchi_1996 | irrelevant | 0 | 0 | The paper is a mechanistic study on ipriflavone receptors and calcium signaling in osteoclasts, reporting no pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Mohos_2018 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (polyphenols vs. CYP enzymes/albumin) and does not report any pharmacogenomic effects (gene variants) on the PK/PD of ipriflavone. |
| PGx | Monostory_1998 | not_relevant | 0 | 0 | The paper describes drug-drug interactions and in vitro inhibition but does not report any effect of genetic variants or genotypes on the pharmacokinetics or pharmacodynamics of ipriflavone. |
| PGx | Moon_2007 | not_relevant | 0 | 0 | The paper characterizes the enzymes responsible for ipriflavone metabolism but does not report genotype-specific changes in pharmacokinetic or pharmacodynamic parameters. |
| popPK | Rohatagi_1997 | relevant | 8 | 2 | The study reports a PK model for ipriflavone in humans, but specific numeric parameter values (CL, V, ka) are not listed in the provided text, only fit statistics. |
| PGx | Rohatagi_1997_2 | not_relevant | 0 | 0 | The study compares pharmacokinetics of different formulations (tablet vs. suspension) but does not report any gene variant or genotype effects on ipriflavone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:42 UTC</sub>
