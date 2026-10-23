<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Nirmatrelvir&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/&quot;},{&quot;label&quot;:&quot;Chan_2023 \u00b7 sir_a_run_statistics&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nirmatrelvir_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Yang2024_reference&quot;,&quot;label&quot;:&quot;Yang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Yang2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zaryab2026_reference&quot;,&quot;label&quot;:&quot;Zaryab_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zaryab2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zhu2023_reference&quot;,&quot;label&quot;:&quot;Zhu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zhu2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Li2026_reference&quot;,&quot;label&quot;:&quot;Li_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nirmatrelvir — `Nirmatrelvir_Chan2023_sir_a_run_statistics`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The nirmatrelvir clearance covariate effect for itraconazole (-0.303) makes clearance negative in that scenario, so the record was rejected.

<div class="pk-model-meta" hidden drug="Nirmatrelvir" model-id="Nirmatrelvir_Chan2023_sir_a_run_statistics" status="rejected" stale="false" population="adults and adolescents with/without COVID-19" measured-compound="nirmatrelvir" parameterization="mechanistic" topology="1C"></div>

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
| CL, L/h | CL | 8.98 | L/h |
| V2, L | V2 | 57.5 | L |
| Q, L/h | Q | 1.02 | L/h |
| V3, L | V3 | 10.2 | L |
| ka, 1/h | kabs | 0.906 | 1/h |
| nCLCRbreakpoint, ml/min/1.73 m2 | CLnorm | 70.1 |  |
| nclcrpower_lt_nclcrbreakpoint | nclcrpower_lt_nclcrbreakpoint | 0.908 |  |
| f1power | f1power | -0.401 |  |
| Effect of itraconazole on CL | CL_ratio | -0.303 |  |
| Effect of 150‐mg tablet on F1 | Fab | -0.391 |  |
| theta_q314_age_power | theta_q314_age_power | -0.419 |  |
| Vd | V | 97.1 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.077). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The nirmatrelvir clearance covariate effect for itraconazole (-0.303) makes clearance negative in that scenario, so the record was rejected.**

The model for nirmatrelvir (Chan_2023) has a base total clearance of 8.98 L/h, but the reported drug-interaction parameter for the effect of itraconazole on clearance is -0.303. Applying this shift in the itraconazole covariate scenario drives clearance below zero, which is physiologically implausible and is the stated cause of rejection. The other parameters (V2 57.5 L, Q 1.02 L/h, V3 10.2 L, ka 0.906 1/h) show no such problem in the record. Extracted — nirmatrelvir: CL 8.98 L/h, V2 57.5 L, Q 1.02 L/h, V3 10.2 L, kabs 0.906 1/h, CLnorm 70.1, CL_ratio -0.303, Fab -0.391, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nirmatrelvir/ritonavir, the second reading unknown; it also differs on 23 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL, L/h | `Q22` · CL | 8.98 | L/h | 2.494e-06 | m3/s | l/h | exact (1) | psp413039-tbl-0003:row2:col4, psp413039-tbl-0003:row2:col5, psp413039-tbl-0003:row2:col6, psp413039-tbl-0003:row2:col7, psp413039-tbl-0003:row2:col8 |
| V2, L | `Q64` · V2 | 57.5 | L | 0.0575 | m3 | l | exact (1) | psp413039-tbl-0003:row3:col4, psp413039-tbl-0003:row3:col5, psp413039-tbl-0003:row3:col6, psp413039-tbl-0003:row3:col7, psp413039-tbl-0003:row3:col8 |
| Q, L/h | `Q30` · Q | 1.02 | L/h | 2.833e-07 | m3/s | l/h | exact (1) | psp413039-tbl-0003:row4:col4, psp413039-tbl-0003:row4:col5, psp413039-tbl-0003:row4:col6, psp413039-tbl-0003:row4:col7, psp413039-tbl-0003:row4:col8 |
| V3, L | `Q77` · V3 | 10.2 | L | 0.0102 | m3 | l | exact (1) | psp413039-tbl-0003:row5:col4, psp413039-tbl-0003:row5:col5, psp413039-tbl-0003:row5:col6, psp413039-tbl-0003:row5:col7, psp413039-tbl-0003:row5:col8 |
| ka, 1/h | `Q49` · kabs | 0.906 | 1/h | 0.0002517 | 1/s | 1/h | exact (1) | psp413039-tbl-0003:row6:col4, psp413039-tbl-0003:row6:col5, psp413039-tbl-0003:row6:col6, psp413039-tbl-0003:row6:col7, psp413039-tbl-0003:row6:col8 |
| nCLCRbreakpoint, ml/min/1.73 m2 | `Q354` · CLnorm | 70.1 |  |  |  |  | llm (0.6) | psp413039-tbl-0003:row7:col4, psp413039-tbl-0003:row7:col5, psp413039-tbl-0003:row7:col6, psp413039-tbl-0003:row7:col7, psp413039-tbl-0003:row7:col8 |
| nclcrpower_lt_nclcrbreakpoint | `Q900` · nclcrpower_lt_nclcrbreakpoint | 0.908 |  |  |  |  |  | psp413039-tbl-0003:row8:col4, psp413039-tbl-0003:row8:col5, psp413039-tbl-0003:row8:col6, psp413039-tbl-0003:row8:col7, psp413039-tbl-0003:row8:col8 |
| f1power | `Q900` · f1power | -0.401 |  |  |  |  |  | psp413039-tbl-0003:row9:col4, psp413039-tbl-0003:row9:col5, psp413039-tbl-0003:row9:col6, psp413039-tbl-0003:row9:col7, psp413039-tbl-0003:row9:col8 |
| Effect of itraconazole on CL | `Q31` · CL_ratio | -0.303 |  |  |  |  | llm_corrected (0.6) | psp413039-tbl-0003:row11:col4, psp413039-tbl-0003:row11:col5, psp413039-tbl-0003:row11:col6, psp413039-tbl-0003:row11:col7, psp413039-tbl-0003:row11:col8 |
| Effect of 150‐mg tablet on F1 | `Q40` · Fab | -0.391 |  |  |  |  | llm_confirmed (0.6) | psp413039-tbl-0003:row12:col4, psp413039-tbl-0003:row12:col5, psp413039-tbl-0003:row12:col6, psp413039-tbl-0003:row12:col7, psp413039-tbl-0003:row12:col8 |
| theta_q314_age_power | `Q900` · theta_q314_age_power | -0.419 |  |  |  |  |  | psp413039-tbl-0003:row13:col4, psp413039-tbl-0003:row13:col5, psp413039-tbl-0003:row13:col6, psp413039-tbl-0003:row13:col7, psp413039-tbl-0003:row13:col8 |
| Vd | `Q61` · V | 97.1 | L | 0.0971 | m3 | L | review_gapfill (0.7) | Zaryab_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'sir a run statistics' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'nCLCRpower &lt; nCLCRbreakpoint' → Q900:nclcrpower_lt_nclcrbreakpoint = 0.908 (power on Q22)
- covariate level 'F1power' → Q900:f1power = -0.401 (power on Q22)
- dropped duplicate Q22 ('Effect of carbamazepine on CL', value '0.748') — already have one for this compound
- routed 'Effect of COVID‐19 on CL' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped value-less row: 'Note: Fixed parameters: F1 = 1, normalized to 300 mg; additive error = 10 ng/ml.'
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'nCLCRbreakpoint, ml/min/1.73 m2' — the LLM proposed 'ml/min/1.73 m2', whose dimension does not fit Q354; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nirmatrelvir
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'sir a run statistics' subgroup of Chan_2023 (paper reports 2 populations: final model, sir a run statistics)
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
| `gpt-oss-120b` | `parameters[cl]` | 8.98 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 8.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of 150‐mg tablet on f1]` | -0.391 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of 150‐mg tablet on f1]` |  | -0.391 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of covid‐19 on cl]` |  | -0.349 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of itraconazole on cl]` | -0.303 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1power]` | -0.401 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1power]` |  | -0.401 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.906 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.906 | only_one_extracted |
| `gpt-oss-120b` | `parameters[nclcrbreakpoint, ml/min/1.73 m2]` | 70.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[nclcrpower_lt_nclcrbreakpoint]` | 0.908 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 1.02 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 1.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_weight_power]` |  | 0.908 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_age_power]` | -0.419 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_age_power]` |  | -0.419 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 57.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 57.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 10.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` |  | 10.2 | only_one_extracted |
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
| C2_base_sign_Q31 | fail |  | -0.303 |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413039-tbl-0003:row2:col4', 'psp413039-tbl-0003:row2:col5', 'psp413039-tbl-0003:row2:col6', 'psp413039-tbl-0003:row2:col7', 'psp413039-tbl-0003:row2:col8'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413039-tbl-0003:row4:col4', 'psp413039-tbl-0003:row4:col5', 'psp413039-tbl-0003:row4:col6', 'psp413039-tbl-0003:row4:col7', 'psp413039-tbl-0003:row4:col8'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413039-tbl-0003:row6:col4', 'psp413039-tbl-0003:row6:col5', 'psp413039-tbl-0003:row6:col6', 'psp413039-tbl-0003:row6:col7', 'psp413039-tbl-0003:row6:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Zaryab_2026:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp413039-tbl-0003:row3:col4', 'psp413039-tbl-0003:row3:col5', 'psp413039-tbl-0003:row3:col6', 'psp413039-tbl-0003:row3:col7', 'psp413039-tbl-0003:row3:col8'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['psp413039-tbl-0003:row5:col4', 'psp413039-tbl-0003:row5:col5', 'psp413039-tbl-0003:row5:col6', 'psp413039-tbl-0003:row5:col7', 'psp413039-tbl-0003:row5:col8'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] |  | ['psp413039-tbl-0003:row11:col4', 'psp413039-tbl-0003:row11:col5', 'psp413039-tbl-0003:row11:col6', 'psp413039-tbl-0003:row11:col7', 'psp413039-tbl-0003:row11:col8'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] |  | ['psp413039-tbl-0003:row7:col4', 'psp413039-tbl-0003:row7:col5', 'psp413039-tbl-0003:row7:col6', 'psp413039-tbl-0003:row7:col7', 'psp413039-tbl-0003:row7:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.98 | ['psp413039-tbl-0003:row2:col4', 'psp413039-tbl-0003:row2:col5', 'psp413039-tbl-0003:row2:col6', 'psp413039-tbl-0003:row2:col7', 'psp413039-tbl-0003:row2:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.98 L/h | ['psp413039-tbl-0003:row2:col4', 'psp413039-tbl-0003:row2:col5', 'psp413039-tbl-0003:row2:col6', 'psp413039-tbl-0003:row2:col7', 'psp413039-tbl-0003:row2:col8'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 97.1 L | ['Zaryab_2026:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 57.5 L | ['psp413039-tbl-0003:row3:col4', 'psp413039-tbl-0003:row3:col5', 'psp413039-tbl-0003:row3:col6', 'psp413039-tbl-0003:row3:col7', 'psp413039-tbl-0003:row3:col8'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnirmatrelvir%5D%20Nirmatrelvir_Chan2023_sir_a_run_statistics&body=Drug%3A%20nirmatrelvir%0ARecord%3A%20Nirmatrelvir_Chan2023_sir_a_run_statistics%0APaper%3A%20Chan_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nirmatrelvir/Nirmatrelvir_Chan2023_sir_a_run_statistics%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:40 UTC</sub>
