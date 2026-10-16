<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferric maltol&quot;}]"></div>

# ferric maltol

- **generic name:** ferric maltol
- **ATC codes:** `B03AB10`
- **DrugBank:** [DB15598](https://go.drugbank.com/drugs/DB15598) · **PubChem:** not captured
- **molar mass:** 431.154 g/mol (C18H15FeO9) — DrugBank
- **groups:** approved, investigational

## About

Ferric maltol is an oral trivalent iron preparation used to treat iron-deficiency anemia. It is an approved medicine, authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27283748](https://www.wikidata.org/wiki/Q27283748) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 19:59 | 0:42 | 0/0/0 | 0/0/0 | 0/0/0 | 25,710/866 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 2/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ferric_maltol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `UGT1A6` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A6` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ITGB3 (substrate), SLC11A2 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cai_2023.pdf` | Cai Z et al., Simultaneous determination of maltol an…, Journal of chromatography.… (2023) | popPK | 8 | [10.1016/j.jchromb.2023.123760](https://doi.org/10.1016/j.jchromb.2023.123760) | [37270862](https://pubmed.ncbi.nlm.nih.gov/37270862) | The study reports half-lives and urinary excretion percentages for maltol (the ligand of ferric maltol) in humans, but lacks full compartmental parameters like CL and V. |

<sub>queue written 2026-10-05T19:59:18.242388+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2021 | relevant | 8 | 2 | The study reports population pharmacokinetic modeling of maltol glucuronide (the metabolite of ferric maltol) in children, but specific numeric parameter values (CL, V, etc.) are not present in the provided text or supplementary tables, only qualitative descriptions and references to figures. |
| popPK | Barrand_1991 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-lives of ~70 min for iron and ~12 min for maltol) for ferric maltol in rats, but lacks a full compartmental model or clearance/volume values. |
| popPK | Gass_2026 | irrelevant | 2 | 0 | The study mentions PK assessment but the provided evidence contains no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for ferric maltol. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The paper describes a computational model for predicting drug-food interactions and does not report pharmacokinetic parameters for ferric_maltol. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting drug-food interactions and does not report any pharmacodynamic or exposure-response data for ferric maltol. |
| popPK | Khoury_2021 | irrelevant | 2 | 0 | This is a narrative review of ferric maltol that discusses pharmacology and efficacy but does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) in the provided text. |
| popPK | Singh_2022 | irrelevant | 0 | 0 | The paper is a review/overview of nano-formulations for iron deficiency anaemia and does not report original quantitative pharmacokinetic parameters for ferric maltol. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a title/header for conference oral presentations and contains no data, analysis, or parameters regarding ferric maltol or any pharmacodynamic relationship. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
