<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;etoperidone&quot;}]"></div>

# etoperidone

- **generic name:** etoperidone
- **ATC codes:** `N06AB09`
- **DrugBank:** [DB09194](https://go.drugbank.com/drugs/DB09194) · **PubChem:** [CID 40589](https://pubchem.ncbi.nlm.nih.gov/compound/40589)
- **molar mass:** 377.92 g/mol (C19H28ClN5O) — DrugBank
- **groups:** approved, withdrawn

## About

Etoperidone is an antidepressant of the selective serotonin reuptake inhibitor type. It was approved but has been withdrawn and is no longer used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5404839](https://www.wikidata.org/wiki/Q5404839) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:00 | 0:08 | 0/0/0 | 1/0/0 | 0/0/0 | 16,982/559 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Girgin_2023_IC50](drugs/drug_etoperidone/pd_Girgin_2023_IC50.md) | cell viability (SH-SY5Y, MTT/RTCA) ← etoperidone · inhibition effect | — | Girgin M et al., Proposing novel natural compounds again…, PloS one (2023) | [10.1371/journal.pone.0284994](https://doi.org/10.1371/journal.pone.0284994) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=etoperidone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), CHRM1 (target), DRD2 (target), HTR2A (target), HTR2C (target), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Caldwell_2001.pdf` | Caldwell GW et al., Evaluation of the absorption, excretion…, Xenobiotica; the fate of fo… (2001) | popPK | 8 | [10.1080/00498250110091758](https://doi.org/10.1080/00498250110091758) | [11765144](https://pubmed.ncbi.nlm.nih.gov/11765144) | Human mass-balance study of [14C]etoperidone reporting terminal half-life (21.7 h) and apparent clearance (1.01 ml/min) directly in the abstract. |
| `Malomvölgyi_1991.pdf` | Malomvölgyi B et al., Comparison of serotonin agonistic and a…, Acta physiologica Hungarica (1991) | pd | 4 | not captured | [1814162](https://www.ncbi.nlm.nih.gov/pubmed/1814162) | metadata signals extractable PD data (EC50) |
| `Costa_2025.pdf` | Costa Alegre MD et al., Metabolism of m-CPP, trazodone, nefazod…, Drug metabolism reviews (2025) | pgx | 7 | [10.1080/03602532.2025.2465482](https://doi.org/10.1080/03602532.2025.2465482) | [39945551](https://www.ncbi.nlm.nih.gov/pubmed/39945551) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T23:00:46.450883+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Costa_2025 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Costa_2025 | not_relevant | 0 | 0 | The paper focuses on the metabolism and forensic aspects of etoperidone, not on pharmacodynamic or exposure-response relationships. |
| PGx | Costa_2025 | not_relevant | 3 | 3 | Review of metabolism of m-CPP, trazodone, nefazodone, and etoperidone; no pharmacogenomic effect on PK/PD parameters reported. |
| popPK | Girgin_2023 | irrelevant | 0 | 0 | The paper is an in silico and in vitro study on acetylcholinesterase inhibition and does not report any pharmacokinetic parameters for etoperidone. |
| popPK | Malomvölgyi_1991 | irrelevant | 0 | 0 | no_text gate: only 163 chars of text extracted (&lt; 400) |
| PD | Malomvölgyi_1991 | not_relevant | 0 | 0 | The paper studies Trelibet (EGYT-475) and its metabolite, not etoperidone. |
| PGx | Wen_2008 | not_relevant | 2 | 3 | In vitro CYP2D6-mediated bioactivation of m-CPP metabolites; no genotype/phenotype effect on PK/PD parameters of etoperidone reported. |
| PGx | Yan_2002 | not_relevant | 3 | 5 | In vitro CYP phenotyping identifies CYP3A4 as main etoperidone metabolizing enzyme; no gene variant/genotype effect on in vivo PK/PD parameters is reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
