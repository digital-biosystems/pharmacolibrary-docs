<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;toripalimab&quot;}]"></div>

# toripalimab

- **generic name:** toripalimab
- **ATC codes:** `L01FF13`
- **DrugBank:** [DB15043](https://go.drugbank.com/drugs/DB15043) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Toripalimab is a PD-1 inhibitor monoclonal antibody used to treat cancers, including nasopharyngeal carcinoma and esophageal squamous cell carcinoma. It is approved and authorised in the European Union, with further uses still under investigation.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Li_2022_reference](drugs/drug_toripalimab/Toripalimab_Li2022_reference.md) | — | 2-compartment (no model) | 4 | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2022_AEs_leading_to_study_drug_discontinuation](drugs/drug_toripalimab/pd_Li_2022_AEs_leading_to_study_drug_discontinuation.md) | AEs leading to study drug discontinuation ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2022_ORR](drugs/drug_toripalimab/pd_Li_2022_ORR.md) | objective response rate ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2022_PFS](drugs/drug_toripalimab/pd_Li_2022_PFS.md) | progression-free survival ← toripalimab · time-to-event model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2022_grade_3_AEs](drugs/drug_toripalimab/pd_Li_2022_grade_3_AEs.md) | grade ≥ 3 adverse events (AEs) ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2022_treatment_related_grade_3_AEs](drugs/drug_toripalimab/pd_Li_2022_treatment_related_grade_3_AEs.md) | treatment-related grade ≥ 3 AEs ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=toripalimab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PDCD1 (antibody), PDCD1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:21 | 2:42 | 0/1/0 | 1/0/0 | 0/0/0 | 82,844/3,378 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huang_2020 | irrelevant | 0 | 0 | The study is an immuno-PET imaging evaluation of a radiolabeled toripalimab probe in mice, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for the drug itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 21:18 UTC</sub>
