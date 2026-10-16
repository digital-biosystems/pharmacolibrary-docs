<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glymidine&quot;}]"></div>

# glymidine

- **generic name:** glymidine
- **ATC codes:** `A10BC01`
- **DrugBank:** [DB01382](https://go.drugbank.com/drugs/DB01382) · **PubChem:** [CID 9565](https://pubchem.ncbi.nlm.nih.gov/compound/9565)
- **molar mass:** 309.341 g/mol (C13H15N3O4S) — DrugBank
- **groups:** approved

## About

Glymidine is a blood glucose lowering drug of the sulfonamide class used in the treatment of diabetes. It is an approved drug, but appears to be little used today and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5572813](https://www.wikidata.org/wiki/Q5572813) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:33 | 0:04 | 0/0/0 | 0/0/0 | 0/0/0 | 4,407/240 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=glymidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCC8 (inducer), KCNJ1 (other/unknown), KCNJ10 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Held_1980.pdf` | Held H, Correlation between the activity of hep…, Hepato-gastroenterology (1980) | popPK | 8 | not captured | [6451570](https://pubmed.ncbi.nlm.nih.gov/6451570) | The study reports on the correlation between enzyme activity and glymidine plasma clearance, which is a quantitative PK parameter, but no specific numeric values for clearance or other PK parameters are provided in the extracted evidence. |

<sub>queue written 2026-10-14T23:33:17.692114+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Held_1973 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Held_1973_2 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| popPK | Held_1976 | irrelevant | 2 | 1 | The study focuses on phenylbutazone pharmacokinetics, mentioning glymidine only regarding protein binding changes without providing any quantitative disposition parameters (CL, V, t1/2) for glymidine. |
| popPK | Held_1980 | relevant | 8 | 0 | The study reports on the correlation between enzyme activity and glymidine plasma clearance, which is a quantitative PK parameter, but no specific numeric values for clearance or other PK parameters are provided in the extracted evidence. |
| popPK | Held_1981 | irrelevant | 2 | 0 | The study focuses on drug-drug interactions and protein binding without reporting quantitative PK parameters like clearance or volume for glymidine. |
| PD | Held_1981 | not_relevant | 1 | 0 | The paper reports PK interactions (plasma concentration changes) and qualitative statements about potential increased pharmacodynamic effects, but provides no numeric PD parameters, dose-response curves, or concentration-effect data. |
| popPK | Platzer_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glycodiazine (a model compound) rather than glymidine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
