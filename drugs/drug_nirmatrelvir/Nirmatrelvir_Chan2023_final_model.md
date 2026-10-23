<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Nirmatrelvir&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/&quot;},{&quot;label&quot;:&quot;Chan_2023 \u00b7 final_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nirmatrelvir_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Yang2024_reference&quot;,&quot;label&quot;:&quot;Yang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Yang2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zaryab2026_reference&quot;,&quot;label&quot;:&quot;Zaryab_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zaryab2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zhu2023_reference&quot;,&quot;label&quot;:&quot;Zhu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zhu2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Li2026_reference&quot;,&quot;label&quot;:&quot;Li_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nirmatrelvir — `Nirmatrelvir_Chan2023_final_model`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The nirmatrelvir record was rejected because a covariate scenario yields a negative clearance or volume: the itraconazole effect on clearance (-0.308) and the bioavailability effect of the 150-mg tablet (-0.379) are negative shifts that can drive the base clearance of 9.09 L/h or bioavailability below zero.

<div class="pk-model-meta" hidden drug="Nirmatrelvir" model-id="Nirmatrelvir_Chan2023_final_model" status="rejected" stale="false" population="adults and adolescents with/without COVID-19" measured-compound="nirmatrelvir" parameterization="mechanistic" topology="1C"></div>

## Citation
Chan PLS, Singh RSP, Cox DS, Shi H, Damle B, Nicholas T. Dosing recommendation of nirmatrelvir/ritonavir using an integrated population pharmacokinetic analysis. CPT: pharmacometrics & systems pharmacology 12(12):1897–1910 (2023).
  ·  DOI: [10.1002/psp4.13039](https://doi.org/10.1002/psp4.13039)

## Population and dosing

**Population:** adults and adolescents with/without COVID-19 · condition COVID-19; healthy; renal or hepatic impairment · age group mixed.

**Dosing:** 150, 300 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed nirmatrelvir/ritonavir, measured nirmatrelvir.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL, L/h | CL | 9.09 | L/h |
| V2, L | V2 | 56.9 | L |
| Q, L/h | Q | 1.28 | L/h |
| V3, L | V3 | 12.8 | L |
| ka, 1/h | kabs | 0.873 | 1/h |
| nCLCRbreakpoint, ml/min/1.73 m2 | CLnorm | 70.1 |  |
| nclcrpower_lt_nclcrbreakpoint | nclcrpower_lt_nclcrbreakpoint | 1.05 |  |
| f1power | f1power | -0.409 |  |
| Effect of itraconazole on CL | CL_ratio | -0.308 |  |
| Effect of 150‐mg tablet on F1 | Fab | -0.379 |  |
| theta_q314_age_power | theta_q314_age_power | -0.425 |  |
| Vd | V | 97.1 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.077). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The nirmatrelvir record was rejected because a covariate scenario yields a negative clearance or volume: the itraconazole effect on clearance (-0.308) and the bioavailability effect of the 150-mg tablet (-0.379) are negative shifts that can drive the base clearance of 9.09 L/h or bioavailability below zero.**

The model for nirmatrelvir (Chan_2023) is a three-compartment structure with clearance 9.09 L/h, peripheral volumes 56.9 L and 12.8 L, intercompartmental clearance 1.28 L/h, and absorption rate constant 0.873 1/h. The covariate effects include a -0.308 ratio for the effect of itraconazole on clearance and a -0.379 effect of the 150-mg tablet on bioavailability, alongside a renal-function power of 1.05 below the 70.1 ml/min/1.73 m2 breakpoint and an age power of -0.425. The rejection cause is a negative clearance or volume arising in a covariate scenario or the base, meaning the base value or one of these shifts is implausible. Extracted — nirmatrelvir: CL 9.09 L/h, V2 56.9 L, Q 1.28 L/h, V3 12.8 L, kabs 0.873 1/h, CLnorm 70.1, CL_ratio -0.308, Fab -0.379, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nirmatrelvir/ritonavir, the second reading unknown; it also differs on 23 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL, L/h | `Q22` · CL | 9.09 | L/h | 2.525e-06 | m3/s | l/h | exact (1) | psp413039-tbl-0003:row2:col1, psp413039-tbl-0003:row2:col2 |
| V2, L | `Q64` · V2 | 56.9 | L | 0.0569 | m3 | l | exact (1) | psp413039-tbl-0003:row3:col1, psp413039-tbl-0003:row3:col2 |
| Q, L/h | `Q30` · Q | 1.28 | L/h | 3.556e-07 | m3/s | l/h | exact (1) | psp413039-tbl-0003:row4:col1, psp413039-tbl-0003:row4:col2 |
| V3, L | `Q77` · V3 | 12.8 | L | 0.0128 | m3 | l | exact (1) | psp413039-tbl-0003:row5:col1, psp413039-tbl-0003:row5:col2 |
| ka, 1/h | `Q49` · kabs | 0.873 | 1/h | 0.0002425 | 1/s | 1/h | exact (1) | psp413039-tbl-0003:row6:col1, psp413039-tbl-0003:row6:col2 |
| nCLCRbreakpoint, ml/min/1.73 m2 | `Q354` · CLnorm | 70.1 |  |  |  |  | llm (0.6) | psp413039-tbl-0003:row7:col1, psp413039-tbl-0003:row7:col2 |
| nclcrpower_lt_nclcrbreakpoint | `Q900` · nclcrpower_lt_nclcrbreakpoint | 1.05 |  |  |  |  |  | psp413039-tbl-0003:row8:col1, psp413039-tbl-0003:row8:col2 |
| f1power | `Q900` · f1power | -0.409 |  |  |  |  |  | psp413039-tbl-0003:row9:col1, psp413039-tbl-0003:row9:col2 |
| Effect of itraconazole on CL | `Q31` · CL_ratio | -0.308 |  |  |  |  | llm_corrected (0.6) | psp413039-tbl-0003:row11:col1, psp413039-tbl-0003:row11:col2 |
| Effect of 150‐mg tablet on F1 | `Q40` · Fab | -0.379 |  |  |  |  | llm_confirmed (0.6) | psp413039-tbl-0003:row12:col1, psp413039-tbl-0003:row12:col2 |
| theta_q314_age_power | `Q900` · theta_q314_age_power | -0.425 |  |  |  |  |  | psp413039-tbl-0003:row13:col1, psp413039-tbl-0003:row13:col2 |
| Vd | `Q61` · V | 97.1 | L | 0.0971 | m3 | L | review_gapfill (0.7) | Zaryab_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'nCLCRpower &lt; nCLCRbreakpoint' → Q900:nclcrpower_lt_nclcrbreakpoint = 1.05 (power on Q22)
- covariate level 'F1power' → Q900:f1power = -0.409 (power on Q22)
- routed 'Effect of carbamazepine on CL' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Effect of COVID‐19 on CL' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped value-less row: 'Note: Fixed parameters: F1 = 1, normalized to 300 mg; additive error = 10 ng/ml.'
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'nCLCRbreakpoint, ml/min/1.73 m2' — the LLM proposed 'ml/min/1.73 m2', whose dimension does not fit Q354; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nirmatrelvir
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'final model' subgroup of Chan_2023 (paper reports 2 populations: final model, sir a run statistics)
- gap-filled Q61 (V) from Zaryab_2026's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.077 (2/26 fields) | 24 |

<details><summary>24 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | 9.09 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 9.09 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of 150‐mg tablet on f1]` | -0.379 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of 150‐mg tablet on f1]` |  | -0.379 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of covid‐19 on cl]` |  | -0.341 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of itraconazole on cl]` | -0.308 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1power]` | -0.409 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1power]` |  | -0.409 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.873 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.873 | only_one_extracted |
| `gpt-oss-120b` | `parameters[nclcrbreakpoint, ml/min/1.73 m2]` | 70.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[nclcrpower_lt_nclcrbreakpoint]` | 1.05 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 1.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 1.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_weight_power]` |  | 1.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_age_power]` | -0.425 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_age_power]` |  | -0.425 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 56.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 56.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 12.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` |  | 12.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 97.1 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | nirmatrelvir/ritonavir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | nirmatrelvir | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q31 | fail |  | -0.308 |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413039-tbl-0003:row2:col1', 'psp413039-tbl-0003:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413039-tbl-0003:row4:col1', 'psp413039-tbl-0003:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413039-tbl-0003:row6:col1', 'psp413039-tbl-0003:row6:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Zaryab_2026:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp413039-tbl-0003:row3:col1', 'psp413039-tbl-0003:row3:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['psp413039-tbl-0003:row5:col1', 'psp413039-tbl-0003:row5:col2'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] |  | ['psp413039-tbl-0003:row11:col1', 'psp413039-tbl-0003:row11:col2'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] |  | ['psp413039-tbl-0003:row7:col1', 'psp413039-tbl-0003:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.09 | ['psp413039-tbl-0003:row2:col1', 'psp413039-tbl-0003:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.09 L/h | ['psp413039-tbl-0003:row2:col1', 'psp413039-tbl-0003:row2:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 97.1 L | ['Zaryab_2026:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 56.9 L | ['psp413039-tbl-0003:row3:col1', 'psp413039-tbl-0003:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnirmatrelvir%5D%20Nirmatrelvir_Chan2023_final_model&body=Drug%3A%20nirmatrelvir%0ARecord%3A%20Nirmatrelvir_Chan2023_final_model%0APaper%3A%20Chan_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nirmatrelvir/Nirmatrelvir_Chan2023_final_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:40 UTC</sub>
