<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;palivizumab&quot;,&quot;href&quot;:&quot;drugs/drug_palivizumab/&quot;},{&quot;label&quot;:&quot;Robbie_2012 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# palivizumab — `Palivizumab_Robbie2012_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-22 14:29 UTC (Rejected), but the paper was screened again on 2026-11-04 06:20 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Palivizumab clearance was rejected because its unit could not be converted to standard units, preventing a plausibility check on its magnitude.

<div class="pk-model-meta" hidden drug="palivizumab" model-id="Palivizumab_Robbie2012_reference" status="rejected" stale="true" population="adults and children" measured-compound="palivizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Robbie GJ, Zhao L, Mondick J, Losonsky G, Roskos LK. Population pharmacokinetics of palivizumab, a humanized anti-respiratory syncytial virus monoclonal antibody, in adults and children. Antimicrobial agents and chemotherapy 56(9):4927–4936 (2012).
  ·  DOI: [10.1128/AAC.06446-11](https://doi.org/10.1128/AAC.06446-11)

## Population and dosing

**Population:** adults and children · condition RSV prophylaxis · age group mixed.

**Dosing:** 1050 mg, im, multiple, every 720 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLD | Q | 1.20 | mL/day |
| k a , day Ϫ1 | kabs | 1.01 | day Ϫ1 |
| F1 | Fab | 0.694 |  |
| T CL , mo | CL | 62.3 | mL/day |
| Vc, ml | V1 | 263 | ml |
| Vp, ml | V2 | 143 | ml |
| theta_q354_wt_power | theta_q354_wt_power | 198 |  |
| theta_q352_wt_power | theta_q352_wt_power | 3.20 |  |
| theta_q352_wt_power | theta_q352_wt_power | 3.83 |  |
| theta_q319_wt_power | theta_q319_wt_power | 879 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.476). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Palivizumab clearance was rejected because its unit could not be converted to standard units, preventing a plausibility check on its magnitude.**

The record lists a total clearance of 62.3 mo for palivizumab. Because this specific unit could not be translated into standard metric units, the parameter value remained in its original, non-standard form. This prevented the model from confirming whether the clearance fell within the expected physiological range, leading to the record being held back. Extracted — palivizumab: Q 1.2 mL/day, kabs 1.01 day Ϫ1, Fab 0.694, t1/2β 0.411 day, CL 62.3 mo, V1 263 ml, V2 143 ml.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cld].covariate_forms`: this record has none, the second reading ['power']; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLD | `Q30` · Q | 1.20 | mL/day | 1.389e-11 | m3/s | L/h | exact (1) | tab_2:row7:col1, tab_2:row7:col2 |
| k a , day Ϫ1 | `Q49` · kabs | 1.01 | day Ϫ1 | 1.169e-05 | 1/s | 1/d | space_fold (0.95) | tab_2:row17:col1 |
| F1 | `Q40` · Fab | 0.694 |  |  |  |  | exact (1) | tab_2:row18:col1, tab_2:row18:col2, Robbie_2012_table_3:row5:col1 |
| T CL , mo | `Q22` · CL | 62.3 | mL/day | 7.211e-10 | m3/s | L/h | llm_confirmed (0.6) | tab_2:row20:col1, tab_2:row20:col2 |
| Vc, ml | `Q63` · V1 | 263 | ml | 0.000263 | m3 | ml | exact (1) | Robbie_2012_table_3:row1:col1 |
| Vp, ml | `Q64` · V2 | 143 | ml | 0.000143 | m3 | ml | exact (1) | Robbie_2012_table_3:row2:col1 |
| theta_q354_wt_power | `Q900` · theta_q354_wt_power | 198 |  |  |  |  |  | tab_2:row1:col1, tab_2:row1:col2 |
| theta_q352_wt_power | `Q900` · theta_q352_wt_power | 3.20 |  |  |  |  |  | tab_2:row12:col0, tab_2:row12:col2 |
| theta_q352_wt_power | `Q900` · theta_q352_wt_power | 3.83 |  |  |  |  |  | tab_2:row14:col0, tab_2:row14:col2 |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 879 |  |  |  |  |  | tab_2:row15:col1, tab_2:row15:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'RACE ϭ black' — extend the ontology if this is a real PK parameter (source ['tab_2:row3:col1', 'tab_2:row3:col2'])
- dropped unlinked row (NIL): 'RACE ϭ Hispanic 1.05' — extend the ontology if this is a real PK parameter (source ['tab_2:row4:col2'])
- dropped unlinked row (NIL): 'RACE ϭ Asian' — extend the ontology if this is a real PK parameter (source ['tab_2:row5:col1', 'tab_2:row5:col2'])
- dropped unlinked row (NIL): 'RACE ϭ other' — extend the ontology if this is a real PK parameter (source ['tab_2:row6:col1', 'tab_2:row6:col2'])
- dropped unlinked row (NIL): 'titer ϭ 10' — extend the ontology if this is a real PK parameter (source ['tab_2:row8:col1'])
- dropped unlinked row (NIL): 'titer ϭ 20' — extend the ontology if this is a real PK parameter (source ['tab_2:row9:col1', 'tab_2:row9:col2'])
- dropped unlinked row (NIL): 'titer ϭ 40' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col1'])
- dropped unlinked row (NIL): 'titer Ն 80' — extend the ontology if this is a real PK parameter (source ['tab_2:row11:col1', 'tab_2:row11:col2'])
- dropped unlinked row (NIL): 'RACE ϭ Hispanic 1.06' — extend the ontology if this is a real PK parameter (source ['tab_2:row13:col2'])
- dropped unlinked row (NIL): '␤' — extend the ontology if this is a real PK parameter (source ['tab_2:row19:col1', 'tab_2:row19:col2'])
- unit_dimension_unknown: 'mo' (CL)
- routed '2 prop' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped duplicate Q22 ('CL, ml/day', value '11.0') — already have one for this compound
- dropped duplicate Q30 ('Q, ml/day', value '112') — already have one for this compound
- dropped duplicate Q49 ('ka, day−1', value '1.01') — already have one for this compound
- covariate effect for Q354 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q352 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CLD' → mL/day (from the paper text: "The paper states in the 'Adult population pharmacokinetic modeling results' section: 'Q = 826 [10.1%] ml/day'. Since Q i")
- implicit units: 'T CL , mo' → mL/day (from the paper text: "The paper states in the 'Adult population pharmacokinetic modeling results' section: 'CL = 198 [4.85%] ml/day' and in th")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=palivizumab
- molar mass: none found for 'palivizumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tab_2: ragged_grid
- table tab_2: unparsed_numeric_cell
- companion parameter table 3 transcribed (6 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.476 (10/21 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cld].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[t cl].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_wt_power]` |  | 198 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_wt_power]` | 879 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q352_wt_power]` | 3.20 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q354_wt_power]` | 198 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q_wt_power]` |  | 879 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_wt_power]` |  | 3.20 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_wt_power]` |  | 3.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[vp].covariate_forms` | [] | ['power'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row20:col1', 'tab_2:row20:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_2:row7:col1', 'tab_2:row7:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_2:row17:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Robbie_2012_table_3:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Robbie_2012_table_3:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 62.3 | ['tab_2:row20:col1', 'tab_2:row20:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0026 L/h | ['tab_2:row20:col1', 'tab_2:row20:col2'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.263 L | ['Robbie_2012_table_3:row1:col1'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.143 L | ['Robbie_2012_table_3:row2:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpalivizumab%5D%20Palivizumab_Robbie2012_reference&body=Drug%3A%20palivizumab%0ARecord%3A%20Palivizumab_Robbie2012_reference%0APaper%3A%20Robbie_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_palivizumab/Palivizumab_Robbie2012_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 06:20 UTC</sub>
