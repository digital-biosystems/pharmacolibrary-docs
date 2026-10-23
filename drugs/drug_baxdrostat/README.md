<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;baxdrostat&quot;}]"></div>

# baxdrostat

- **generic name:** baxdrostat
- **ATC codes:** `C02KN02`
- **DrugBank:** [DB19090](https://go.drugbank.com/drugs/DB19090) · **PubChem:** none
- **molar mass:** 363.461 g/mol (C22H25N3O2) — DrugBank
- **groups:** investigational

## About

Baxdrostat is an investigational antihypertensive drug candidate, classified among other antihypertensives for the cardiovascular system. It is still under investigation and is not yet an approved medicine; no marketing authorisation is recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q123485866](https://www.wikidata.org/wiki/Q123485866) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Zhang_2025_11_hydroxylase_inhibition](drugs/drug_baxdrostat/pd_Zhang_2025_11_hydroxylase_inhibition.md) | inhibition of 11β-hydroxylase ← baxdrostat · direct Emax (saturable) effect | — | Zhang M et al., Prediction of pharmacokinetic/pharmacod…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1578117](https://doi.org/10.3389/fphar.2025.1578117) |
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Zhang_2025_AS_inhibition](drugs/drug_baxdrostat/pd_Zhang_2025_AS_inhibition.md) | inhibition of aldosterone synthase ← baxdrostat · direct Emax (saturable) effect | — | Zhang M et al., Prediction of pharmacokinetic/pharmacod…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1578117](https://doi.org/10.3389/fphar.2025.1578117) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Sunnåker_2025_QTcF](drugs/drug_baxdrostat/pd_Sunn_ker_2025_QTcF.md) | QTcF ← baxdrostat · direct linear effect | — | Sunnåker M et al., No Evidence of QTc Interval Prolongatio…, Pharmacology research & per… (2025) | [10.1002/prp2.70181](https://doi.org/10.1002/prp2.70181) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=baxdrostat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CYP11B2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:06 | 2:03 | 0/0/0 | 1/1/0 | 0/0/0 | 73,399/2,381 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Freeman_2024.pdf` | Freeman MW et al., Results from a Phase 1 Study Assessing…, Clinical pharmacology in dr… (2024) | popPK | 8 | [10.1002/cpdd.1371](https://doi.org/10.1002/cpdd.1371) | [38311833](https://pubmed.ncbi.nlm.nih.gov/38311833) | The study reports baxdrostat PK in humans, but specific numeric values for clearance or volume are not provided in the text, only qualitative statements and a urine excretion percentage. |
| `Taki_2026.pdf` | Taki Y et al., Baxdrostat versus osilodrostat: steroid…, Endocrine connections (2026) | pd | 4 | [10.1530/EC-25-0807](https://doi.org/10.1530/EC-25-0807) | [42307048](https://www.ncbi.nlm.nih.gov/pubmed/42307048) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06 15:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Amjad_2026 | not_relevant | 0 | 0 | The text is a perspective letter proposing future research directions and does not report any observed pharmacogenomic effects on baxdrostat PK or PD parameters. |
| popPK | Falodia_2026 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (blood pressure) and safety, containing no pharmacokinetic parameters (CL, V, ka, etc.) for baxdrostat. |
| popPK | Freeman_2023_2 | relevant | 4 | 6 | The study is a DDI trial where baxdrostat is a co-administered agent, but it reports non-compartmental PK parameters (Cmax, AUC, t1/2) for baxdrostat and its metabolite in the text and tables. |
| popPK | Freeman_2024 | relevant | 8 | 2 | The study reports baxdrostat PK in humans, but specific numeric values for clearance or volume are not provided in the text, only qualitative statements and a urine excretion percentage. |
| popPK | Huston_2025 | irrelevant | 2 | 0 | The paper is a review article discussing baxdrostat, and the provided evidence contains no original quantitative pharmacokinetic parameter values. |
| PD | Huston_2025 | not_relevant | 2 | 1 | The text is an abstract for a review article that discusses baxdrostat's PK/PD but does not present specific numeric PD parameters or extractable concentration-effect curves in the provided snippet. |
| popPK | Mohamed_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy (blood pressure) and does not report pharmacokinetic parameters. |
| popPK | Mousavi_2026 | irrelevant | 2 | 0 | This is a narrative review of pharmacokinetics in diabetic nephropathy that discusses baxdrostat qualitatively but does not provide original quantitative PK parameter values (CL, V, etc.) in the text. |
| PD | Mousavi_2026 | not_relevant | 1 | 0 | The text is a review summary focusing on pharmacokinetics and qualitative effects in renal impairment, without reporting specific numeric PD parameters or concentration-effect curves for baxdrostat. |
| popPK | Shahzaib_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy and safety outcomes (blood pressure, aldosterone levels) and does not report any pharmacokinetic parameters for baxdrostat. |
| PD | Shahzaib_2026 | not_relevant | 2 | 1 | The paper is a network meta-analysis of clinical trial outcomes (blood pressure, aldosterone) and does not report pharmacokinetic data, concentration-effect curves, or formal pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Sunnåker_2025 | irrelevant | 2 | 0 | The study focuses on concentration-QTc modeling for safety assessment and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for baxdrostat. |
| popPK | Taki_2026 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | Taki_2026 | not_relevant | 0 | 0 | The paper describes an in vitro study in human adrenocortical cells, not a clinical pharmacodynamic or exposure-response analysis in humans. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of efficacy and safety (blood pressure and aldosterone levels) that does not report any pharmacokinetic parameters for baxdrostat. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbaxdrostat%5D&body=Drug%3A%20baxdrostat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_baxdrostat/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
