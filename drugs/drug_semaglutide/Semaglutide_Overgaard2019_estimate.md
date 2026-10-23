<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;semaglutide&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/&quot;},{&quot;label&quot;:&quot;Overgaard_2019 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Semaglutide_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Yu2024_reference&quot;,&quot;label&quot;:&quot;Yu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Yu2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Carlsson2018_base&quot;,&quot;label&quot;:&quot;Carlsson_2018_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Carlsson2018_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Carlsson2018_full&quot;,&quot;label&quot;:&quot;Carlsson_2018_full&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Carlsson2018_full.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Min2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# semaglutide — `Semaglutide_Overgaard2019_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The absorption rate constant parameter uses the unit 'ka', which is not a valid physical unit and cannot be converted to SI, causing a dimension mismatch.

<div class="pk-model-meta" hidden drug="semaglutide" model-id="Semaglutide_Overgaard2019_estimate" status="rejected" stale="false" population="healthy adults and adults with type 2 diabetes" measured-compound="semaglutide" parameterization="mechanistic" topology="2C"></div>

## Citation
Overgaard RV, Delff PH, Petri KCC, Anderson TW, Flint A, Ingwersen SH. Population Pharmacokinetics of Semaglutide for Type 2 Diabetes. Diabetes therapy : research, treatment and education of diabetes and related disorders 10(2):649–662 (2019).
  ·  DOI: [10.1007/s13300-019-0581-y](https://doi.org/10.1007/s13300-019-0581-y)

## Population and dosing

**Population:** healthy adults and adults with type 2 diabetes · condition healthy | type 2 diabetes · age group adult · n = 353.

**Dosing:** 0.25, 0.5, 1 mg, sc, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Absorption rate constant (ka), h−1 | kabs | 0.0253 | ka | 3.42 |
| Clearance (CL), L/h | CL | 0.0348 | L/h | 3.06 |
| Central volume (Vc), L | V1 | 3.59 | L | 4.44 |
| Intercompartmental clearance (Q), L/h | Q | 0.304 | L/h | 9.19 |
| Peripheral volume (Vp), L | V2 | 4.10 | L | 3.97 |
| Absolute bioavailability (F) | Fab | 0.847 | F | 2.96 |
| body_weight_effect_on_cl_and_q | body_weight_effect_on_cl_and_q | 1.01 |  | 4.71 |
| Drug product strength effects on ka, 1 mg | t1/2ka | 0.0346 | 1 mg | 6.53 |
| theta_q319_body_weight | theta_q319_body_weight | 0.923 |  | 4.96 |
| theta_q44_injection_site | theta_q44_injection_site | 0.883 |  | 2.24 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.611), gpt-5.6-luna (not confirmed, agreement 0.647). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The absorption rate constant parameter uses the unit 'ka', which is not a valid physical unit and cannot be converted to SI, causing a dimension mismatch.**

The record lists the absorption rate constant (kabs) with a value of 0.0253 and a reported unit of 'ka', which is invalid. This missing valid unit prevented the parameter from being converted to standard SI units, triggering a dimension mismatch check on a structural parameter. Although a second reader disagreed on the extraction of several values, the unit issue on kabs remains the primary technical reason for rejection. Extracted — semaglutide: kabs 0.0253 ka, CL 0.0348 L/h, V1 3.59 L, Q 0.304 L/h, V2 4.1 L, Fab 0.847 F, t1/2ka 0.0346 1 mg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of body_weight_effect_on_cl_and_q: this record has 1.01, the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant (ka), h−1 | `Q49` · kabs | 0.0253 | ka |  |  | ka | 3.42 | llm_confirmed (0.6) | Tab4:row1:col1 |
| Clearance (CL), L/h | `Q22` · CL | 0.0348 | L/h | 9.667e-09 | m3/s | l/h | 3.06 | space_fold (0.95) | Tab4:row2:col1 |
| Central volume (Vc), L | `Q63` · V1 | 3.59 | L | 0.00359 | m3 | l | 4.44 | llm_confirmed (0.6) | Tab4:row3:col1 |
| Intercompartmental clearance (Q), L/h | `Q30` · Q | 0.304 | L/h | 8.444e-08 | m3/s | l/h | 9.19 | llm_confirmed (0.6) | Tab4:row4:col1 |
| Peripheral volume (Vp), L | `Q64` · V2 | 4.10 | L | 0.0041 | m3 | l | 3.97 | llm_confirmed (0.6) | Tab4:row5:col1 |
| Absolute bioavailability (F) | `Q40` · Fab | 0.847 | F |  |  |  | 2.96 | exact (1) | Tab4:row6:col1 |
| body_weight_effect_on_cl_and_q | `Q900` · body_weight_effect_on_cl_and_q | 1.01 |  |  |  |  | 4.71 |  | Tab4:row7:col1 |
| Drug product strength effects on ka, 1 mg | `Q95` · t1/2ka | 0.0346 | 1 mg |  |  | 1mg | 6.53 | llm_corrected (0.6) | Tab4:row11:col1 |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.923 |  |  |  |  | 4.96 |  | Tab4:row8:col1 |
| theta_q44_injection_site | `Q900` · theta_q44_injection_site | 0.883 |  |  |  |  | 2.24 |  | Tab4:row10:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Absorption rate constant (ka), h−1' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- covariate level 'Body weight effect on CL and Q' → Q900:body_weight_effect_on_cl_and_q = 1.01 (linear_fractional on Q22)
- dropped duplicate Q22 ('T2D effect on CL', value '1.12') — already have one for this compound
- unit_dimension_mismatch: 'Drug product strength effects on ka, 1 mg' → Q95 (unit '[mass]' vs ontology '[time]') — route to review
- unit_dimension_unknown: '3 mg' (kabs)
- dropped duplicate Q49 ('Drug product strength effects on ka, 3 mg', value '0.0526') — already have one for this compound
- unit_dimension_unknown: '10 mg' (kabs)
- dropped duplicate Q49 ('Drug product strength effects on ka, 10 mg', value '0.139') — already have one for this compound
- dropped duplicate Q49 ('T2D effect on ka', value '0.544') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q44 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=semaglutide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'estimate' subgroup of Overgaard_2019 (paper reports 3 populations: estimate, one-compartment model from phase 3a trialsa, two-compartment final model)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Overgaard_2019_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (10 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.611 (11/18 fields) | 7 |
| `gpt-5.6-luna` | not confirmed | 0.647 (11/17 fields) | 6 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-5.6-luna` | `parameters[body_weight_effect_on_cl_and_q]` | 1.01 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[body_weight_effect_on_vc_and_vp]` | 0.923 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[clearance (cl)].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | [] | mismatch |
| `gpt-5.6-luna` | `parameters[injection_site_effect_on_f]` | 0.883 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[theta_q319_body_weight]` |  | 1.01 | only_one_extracted |
| `gpt-5.6-luna` | `parameters[theta_q87_injection_site]` |  | 0.883 | only_one_extracted |
| `gpt-oss-120b` | `parameters[body_weight_effect_on_cl_and_q]` | 1.01 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[body_weight_effect_on_vc_and_vp]` | 0.923 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance (cl)].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[injection_site_effect_on_f]` | 0.883 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight]` |  | 1.01 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_body_weight]` |  | 0.923 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q87_injection_site]` |  | 0.883 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab4:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab4:row4:col1'] |
| C5_dimension_Q49 | fail | [time] | ka | ['Tab4:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab4:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab4:row5:col1'] |
| C5_dimension_Q95 | fail | [mass] | 1 mg | ['Tab4:row11:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0348 | ['Tab4:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0348 L/h | ['Tab4:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.59 L | ['Tab4:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.1 L | ['Tab4:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsemaglutide%5D%20Semaglutide_Overgaard2019_estimate&body=Drug%3A%20semaglutide%0ARecord%3A%20Semaglutide_Overgaard2019_estimate%0APaper%3A%20Overgaard_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_semaglutide/Semaglutide_Overgaard2019_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-20 18:34 UTC</sub>
