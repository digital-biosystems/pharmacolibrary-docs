<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;idecabtagene vicleucel&quot;}]"></div>

# idecabtagene vicleucel

- **generic name:** idecabtagene vicleucel
- **ATC codes:** `L01XL07`
- **DrugBank:** [DB16665](https://go.drugbank.com/drugs/DB16665) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Idecabtagene vicleucel is a cell and gene therapy anticancer medicine used to treat multiple myeloma. It is authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q66, Q372 — no SI value to build fr…</sub> | [Wu_2025_stochastic_approximation](drugs/drug_idecabtagene_vicleucel/IdecabtageneVicleucel_Wu2025_stochastic_approximation.md) | — | 1-compartment (no model) | 6 | Wu F et al., Population Cellular Kinetics of Idecabt…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01531-2](https://doi.org/10.1007/s40262-025-01531-2) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ value](drugs/drug_idecabtagene_vicleucel/IdecabtageneVicleucel_Wu2025_value.md) | — | 1-compartment (no model) | 4 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Connarn_2023_CRR](drugs/drug_idecabtagene_vicleucel/pd_Connarn_2023_CRR.md) | Complete Response Rate ← idecabtagene_vicleucel · direct linear effect | — | Connarn JN et al., Characterizing the exposure-response re…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12922](https://doi.org/10.1002/psp4.12922) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Connarn_2023_CRS_requiring_steroids](drugs/drug_idecabtagene_vicleucel/pd_Connarn_2023_CRS_requiring_steroids.md) | Cytokine release syndrome requiring steroids ← idecabtagene_vicleucel · direct linear effect | — | Connarn JN et al., Characterizing the exposure-response re…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12922](https://doi.org/10.1002/psp4.12922) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Connarn_2023_CRS_requiring_tocilizumab](drugs/drug_idecabtagene_vicleucel/pd_Connarn_2023_CRS_requiring_tocilizumab.md) | Cytokine release syndrome requiring tocilizumab ← idecabtagene_vicleucel · direct sigmoid Emax (Hill) effect | — | Connarn JN et al., Characterizing the exposure-response re…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12922](https://doi.org/10.1002/psp4.12922) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Connarn_2023_ORR](drugs/drug_idecabtagene_vicleucel/pd_Connarn_2023_ORR.md) | Overall Response Rate ← idecabtagene_vicleucel · direct sigmoid Emax (Hill) effect | — | Connarn JN et al., Characterizing the exposure-response re…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12922](https://doi.org/10.1002/psp4.12922) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=idecabtagene_vicleucel).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TNFRSF17 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:46 | 1:34 | 1/1/0 | 1/0/0 | 0/0/0 | 133,261/8,122 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cheng_2025.pdf` | Cheng Y et al., Integrative population pharmacokinetic…, Journal of pharmaceutical s… (2025) | popPK | 10 | [10.1016/j.xphs.2025.103925](https://doi.org/10.1016/j.xphs.2025.103925) | [40714188](https://pubmed.ncbi.nlm.nih.gov/40714188) | The paper describes a population PK modeling study for idecabtagene_vicleucel (ide-cel) but does not provide the specific numeric parameter values in the evidence text, which likely reside in the full body or supplementary material not included here. |

<sub>queue written 2026-10-06T20:44:59.106646+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2025 | relevant | 10 | 0 | The paper describes a population PK modeling study for idecabtagene_vicleucel (ide-cel) but does not provide the specific numeric parameter values in the evidence text, which likely reside in the full body or supplementary material not included here. |
| popPK | Cheng_2026 | irrelevant | 2 | 0 | The paper focuses on cellular kinetic (CAR-T expansion) modeling rather than standard disposition parameters (CL/V) for the drug, and no specific numeric values are present in the provided text. |
| popPK | Connarn_2023 | relevant | 5 | 2 | The paper reports non-compartmental exposure metrics (AUC, Cmax) for idecabtagene vicleucel, but does not provide quantitative compartmental PK parameters (CL, V, Q, half-life) in the provided text. |
| popPK | Mu_2022 | irrelevant | 1 | 1 | The study reports population pharmacokinetics for CT103A, which is a different BCMA-targeting CAR-T cell therapy, not idecabtagene_vicleucel. |
| popPK | Oswald_2023 | irrelevant | 0 | 0 | The study focuses exclusively on patient-reported outcomes (quality of life and symptoms) and contains no pharmacokinetic data or disposition parameters. |
| popPK | Sweiss_2025 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of fludarabine (a lymphodepleting agent) as a predictor of toxicity, rather than reporting the disposition parameters (CL, V, etc.) of idecabtagene vicleucel itself. |
| popPK | Wu_2025_2 | irrelevant | 3 | 0 | The study reports non-compartmental cellular kinetics (AUC, Cmax) rather than compartmental PK parameters (CL, V, Q) or population-PK model parameters for the drug itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 20:45 UTC</sub>
