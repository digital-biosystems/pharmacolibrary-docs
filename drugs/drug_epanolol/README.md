<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;epanolol&quot;}]"></div>

# epanolol

- **generic name:** epanolol
- **ATC codes:** `C07AB10`
- **DrugBank:** [DB13757](https://go.drugbank.com/drugs/DB13757) · **PubChem:** not captured
- **molar mass:** 369.421 g/mol (C20H23N3O4) — DrugBank
- **groups:** experimental

## About

Epanolol is a selective beta blocker that was developed as an antihypertensive drug. It is considered experimental and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4859855](https://www.wikidata.org/wiki/Q4859855) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:40 | 0:23 | 0/0/0 | 0/0/0 | 0/0/0 | 9,289/307 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cockshott_1989.pdf` | Cockshott ID, Pharmacokinetics of epanolol (ICI 141,2…, Drugs 38 Suppl (1989) | popPK | 10 | [10.2165/00003495-198900382-00005](https://doi.org/10.2165/00003495-198900382-00005) | [2575975](https://pubmed.ncbi.nlm.nih.gov/2575975) | Study reports quantitative PK parameters for epanolol including clearance, half-life, and bioavailability in the abstract, though volume of distribution is not explicitly stated in the text. |
| `Marlier_1990.pdf` | Marlier R et al., Pharmacokinetics of epanolol in elderly…, Arzneimittel-Forschung (1990) | popPK | 8 | not captured | [1970734](https://pubmed.ncbi.nlm.nih.gov/1970734) | The study reports specific PK parameters for epanolol (Cmax, Tmax, t1/2) in humans, but lacks complete compartmental parameters like clearance (CL) or volume of distribution (V) in the provided text. |
| `Laher_1990.pdf` | Laher MS et al., ICI 141,292 (epanolol)--pharmacokinetic…, European journal of clinica… (1990) | popPK | 6 | [10.1007/BF02657061](https://doi.org/10.1007/BF02657061) | [1980462](https://pubmed.ncbi.nlm.nih.gov/1980462) | The paper reports oral pharmacokinetic parameters (Cmax, tmax, t1/2, AUC) for epanolol in humans, but does not explicitly provide clearance (CL) or volume of distribution (V) values which are required for compartmental/population PK modeling. |
| `Vigholt-Sørensen_1991.pdf` | Vigholt-Sørensen E et al., Comparative effects of beta-adrenocepto…, Pharmacology & toxicology (1991) | pd | 4 | [10.1111/j.1600-0773.1991.tb01309.x](https://doi.org/10.1111/j.1600-0773.1991.tb01309.x) | [1687080](https://www.ncbi.nlm.nih.gov/pubmed/1687080) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-14T20:40:48.634854+00:00</sub>

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
| popPK | Marlier_1990 | relevant | 8 | 4 | The study reports specific PK parameters for epanolol (Cmax, Tmax, t1/2) in humans, but lacks complete compartmental parameters like clearance (CL) or volume of distribution (V) in the provided text. |
| popPK | Vigholt-Sørensen_1991 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Vigholt-Sørensen_1991 | not_relevant | 0 | 0 | The paper studies beta-adrenoceptor partial agonists on isolated rat atrium and does not mention epanolol or report any exposure-response or dose-response data for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
