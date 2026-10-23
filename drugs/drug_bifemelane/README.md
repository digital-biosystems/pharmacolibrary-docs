<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;bifemelane&quot;}]"></div>

# bifemelane

- **generic name:** bifemelane
- **ATC codes:** `N06AX08`
- **DrugBank:** [DB13550](https://go.drugbank.com/drugs/DB13550) · **PubChem:** none
- **molar mass:** 269.388 g/mol (C18H23NO) — DrugBank
- **groups:** experimental

## About

Bifemelane is an antidepressant that has also been described as a nootropic. It is not authorised in the European Union and is currently regarded as an experimental drug, so its present clinical use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4904728](https://www.wikidata.org/wiki/Q4904728) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bifemelane).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOA` modulator | DrugBank actor |
| metabolism | liver | `MAOA` modulator | DrugBank actor |
| metabolism | small intestine | `MAOA` modulator | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:46 | 0:32 | 0/0/0 | 0/0/0 | 0/0/0 | 12,745/157 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kaneko_1991.pdf` | Kaneko S et al., Effects of several cerebroprotective dr…, European journal of pharmac… (1991) | pd | 4 | [10.1016/0922-4106(91)90086-w](https://doi.org/10.1016/0922-4106(91)90086-w) | [1652446](https://www.ncbi.nlm.nih.gov/pubmed/1652446) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06 21:46 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bao_1986 | irrelevant | 1 | 0 | This is a pharmacodynamic efficacy study of bifemelane in gerbils with no PK disposition parameters (CL, V, t½, or PK model) reported. |
| popPK | Gillis_1994 | irrelevant | 0 | 0 | The paper is a review of idebenone, and bifemelane is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Gillis_1994 | not_relevant | 0 | 0 | The text is a review of idebenone and only mentions bifemelane as a comparator in clinical trials without providing any pharmacodynamic or exposure-response data for bifemelane. |
| popPK | Kaneko_1991 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Kaneko_1991 | not_relevant | 0 | 0 | The paper does not mention bifemelane or report any pharmacodynamic or exposure-response data for it. |
| popPK | Suno_1988 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on lipid peroxidation inhibition, not a pharmacokinetic study, and bifemelane is only a comparator drug. |
| PD | Suno_1988 | not_relevant | 4 | 3 | The paper reports a concentration-effect relationship (IC50) for idebenone, but for bifemelane it only provides a single-point comparison at 100 μM and 1 μM without a dose-response curve or specific PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbifemelane%5D&body=Drug%3A%20bifemelane%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bifemelane/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
