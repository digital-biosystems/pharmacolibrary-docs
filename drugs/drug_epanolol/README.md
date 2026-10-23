<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;epanolol&quot;}]"></div>

# epanolol

- **generic name:** epanolol
- **ATC codes:** `C07AB10`
- **DrugBank:** [DB13757](https://go.drugbank.com/drugs/DB13757) · **PubChem:** none
- **molar mass:** 369.421 g/mol (C20H23N3O4) — DrugBank
- **groups:** experimental

## About

Epanolol is a selective beta blocker that was developed as an antihypertensive drug. It is considered experimental and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4859855](https://www.wikidata.org/wiki/Q4859855) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=epanolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB3 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:54 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 9,289/310 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cockshott_1989.pdf` | Cockshott ID, Pharmacokinetics of epanolol (ICI 141,2…, Drugs 38 Suppl (1989) | popPK | 10 | [10.2165/00003495-198900382-00005](https://doi.org/10.2165/00003495-198900382-00005) | [2575975](https://pubmed.ncbi.nlm.nih.gov/2575975) | The abstract provides specific quantitative PK parameters including half-lives (7 min, 3 h, 20 h), clearance (2.1 L/min), and bioavailability (7-8%). |
| `Laher_1990.pdf` | Laher MS et al., ICI 141,292 (epanolol)--pharmacokinetic…, European journal of clinica… (1990) | popPK | 9 | [10.1007/BF02657061](https://doi.org/10.1007/BF02657061) | [1980462](https://pubmed.ncbi.nlm.nih.gov/1980462) | The study reports quantitative PK parameters (Cmax, tmax, t1/2, AUC) for epanolol in humans, though specific clearance and volume values are not explicitly listed in the text. |
| `Marlier_1990.pdf` | Marlier R et al., Pharmacokinetics of epanolol in elderly…, Arzneimittel-Forschung (1990) | popPK | 8 |  | [1970734](https://pubmed.ncbi.nlm.nih.gov/1970734) | The study reports quantitative PK parameters (Cmax, Tmax, t1/2) for epanolol in humans, but lacks explicit values for clearance (CL) or volume of distribution (V). |
| `Vigholt-Sørensen_1991.pdf` | Vigholt-Sørensen E et al., Comparative effects of beta-adrenocepto…, Pharmacology & toxicology (1991) | pd | 4 | [10.1111/j.1600-0773.1991.tb01309.x](https://doi.org/10.1111/j.1600-0773.1991.tb01309.x) | [1687080](https://www.ncbi.nlm.nih.gov/pubmed/1687080) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07 01:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fitzgerald_1993 | irrelevant | 0 | 0 | The paper is a commentary/review discussing clinical utility and pharmacodynamics, not a pharmacokinetic study reporting quantitative disposition parameters for epanolol. |
| PD | Fitzgerald_1993 | not_relevant | 1 | 0 | The text is a qualitative review/commentary summarizing the clinical utility of partial agonists and does not report specific numeric PD parameters or concentration-effect data for epanolol. |
| popPK | Harry_1989 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic aspects (agonist activity, hemodynamic effects) and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Harry_1989 | not_relevant | 2 | 1 | The text is a qualitative review summarizing pharmacological properties and clinical effects without providing specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Hosie_1990 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| popPK | Lefebvre_1990 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of digoxin (the subject drug) to assess interaction with epanolol, and no quantitative PK parameters for epanolol are reported. |
| PD | Lefebvre_1990 | not_relevant | 2 | 1 | The paper reports qualitative changes in hemodynamic indices (QS2I, PEPI) when epanolol is added to digoxin, but it does not provide a concentration-effect or dose-response analysis for epanolol, nor does it report numeric PD parameters (Emax, EC50, etc.) for epanolol. |
| popPK | Marlier_1990 | relevant | 8 | 4 | The study reports quantitative PK parameters (Cmax, Tmax, t1/2) for epanolol in humans, but lacks explicit values for clearance (CL) or volume of distribution (V). |
| popPK | Vigholt-Sørensen_1991 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Vigholt-Sørensen_1991 | not_relevant | 0 | 0 | The paper studies beta-adrenoceptor partial agonists on isolated rat atrium and does not mention epanolol or report any exposure-response or dose-response data for it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepanolol%5D&body=Drug%3A%20epanolol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_epanolol/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
