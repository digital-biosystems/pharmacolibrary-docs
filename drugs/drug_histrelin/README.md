<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02A&quot;,&quot;href&quot;:&quot;atc/L02A.md&quot;},{&quot;label&quot;:&quot;histrelin&quot;}]"></div>

# histrelin

- **generic name:** histrelin
- **ATC codes:** `L02AE05`
- **DrugBank:** [DB06788](https://go.drugbank.com/drugs/DB06788) · **PubChem:** [CID 56927879](https://pubchem.ncbi.nlm.nih.gov/compound/56927879)
- **molar mass:** 1443.632 g/mol (C70H94N18O16) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Histrelin is a gonadotropin-releasing hormone analogue used in endocrine therapy, notably for prostate cancer and for central precocious puberty. It remains an approved drug, though it has been withdrawn in some markets and is also investigational for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5871149](https://www.wikidata.org/wiki/Q5871149) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=histrelin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GNRHR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:07 | 2:17 | 0/0/0 | 0/0/0 | 0/0/0 | 51,478/2,328 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Campen_1995.pdf` | Campen CA et al., Potent pituitary-gonadal axis suppressi…, Biochemical pharmacology (1995) | pd | 4 | [10.1016/0006-2952(95)00027-w](https://doi.org/10.1016/0006-2952(95)00027-w) | [7763313](https://www.ncbi.nlm.nih.gov/pubmed/7763313) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06 22:06 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Kofahi_2021 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of cortisol/hydrocortisone, not histrelin. |
| popPK | Campen_1995 | irrelevant | 0 | 0 | The paper focuses on the biological activity of a GnRH antagonist (azaline B) and uses histrelin only as a tool compound in in-vitro and in-vivo receptor assays, not as the subject of a pharmacokinetic study. |
| popPK | Dineen_2005 | irrelevant | 4 | 1 | While the study reports mean serum concentrations (steady-state exposure) for histrelin, it does not explicitly report derived quantitative disposition parameters (CL, V, ka) or a population PK model parameterization in the provided text. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | The paper describes a nanofluidic drug delivery device and uses generic compounds for release testing; it does not report pharmacokinetic parameters for histrelin. |
| popPK | Ruplin_2024 | irrelevant | 0 | 0 | This is a review of drug-drug interactions that explicitly states no PK DDIs are expected for histrelin and does not provide any quantitative PK parameter values (CL, V, etc.) for the drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhistrelin%5D&body=Drug%3A%20histrelin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_histrelin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
