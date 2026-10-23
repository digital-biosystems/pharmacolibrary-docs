<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;camrelizumab&quot;,&quot;href&quot;:&quot;drugs/drug_camrelizumab/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 final&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# camrelizumab — `Camrelizumab_Wang2021_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Camrelizumab was refused for a structural-parameter dimension mismatch, but the record does not identify which parameter; Vmax is reported as 2.94 mg/day.

<div class="pk-model-meta" hidden drug="camrelizumab" model-id="Camrelizumab_Wang2021_final" status="rejected" stale="false" population="patients with melanoma, advanced solid tumors, or relapsed/refractory classical Hodgkin lymphoma" measured-compound="camrelizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Wang CY, Sheng CC, Ma GL, Xu D, Liu XQ, Wang YY et al. Population pharmacokinetics of the anti-PD-1 antibody camrelizumab in patients with multiple tumor types and model-informed dosing strategy. Acta pharmacologica Sinica 42(8):1368–1375 (2021).
  ·  DOI: [10.1038/s41401-020-00550-y](https://doi.org/10.1038/s41401-020-00550-y)

## Population and dosing

**Population:** patients with melanoma, advanced solid tumors, or relapsed/refractory classical Hodgkin lymphoma · condition melanoma, advanced solid tumors, or relapsed/refractory classical Hodgkin lymphoma · age group adult · n = 133.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL linear (L/day) | CL | 0.231 | L/day | 11.6 (None% RSE) |
| V m (mg/day) | Vmax | 2.94 | mg/day | 17.5 (None% RSE) |
| K m (mg/L) | Km | 1.38 | mg/L |  |
| V 1 (L) | V1 | 3.07 | L | 3 (None% RSE) |
| Q (L/day) | Q | 0.414 | L/day |  |
| V 2 (L) | V2 | 2.9 | L |  |
| C max,ss (mg/L) | Cmax | 47.26 | mg/L |  |
| C min,ss (mg/L) | Cmin | 26.13 | mg/L |  |
| theta_q335_albumin | theta_q335_albumin | -1.98 |  |  |
| theta_q_weight | theta_q_weight | 1.22 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Camrelizumab was refused for a structural-parameter dimension mismatch, but the record does not identify which parameter; Vmax is reported as 2.94 mg/day.**

The findings report a dimension mismatch on a structural parameter, while the record lists Vmax as a maximum enzymatic metabolism rate of 2.94 mg/day. A reported unit could not be converted to SI, but the findings do not specify the unit or parameter, so the mismatch cannot be attributed to Vmax from this record. Extracted — camrelizumab: CL 0.231 L/day, Vmax 2.94 mg/day, Km 1.38 mg/L, V1 3.07 L, Q 0.414 L/day, V2 2.9 L, Cmax 47.3 mg/L, Cmin 26.1 mg/L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of albumin_on_cl_linear: this record has none, the second reading -1.98; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL linear (L/day) | `Q22` · CL | 0.231 | L/day | 2.674e-09 | m3/s | l/d | llm_confirmed (0.6) | tab_2:row3:col3 | 11.6 (None% RSE) |
| V m (mg/day) | `Q66` · Vmax | 2.94 | mg/day |  |  | mg/d | special_case (0.95) | tab_2:row5:col3 | 17.5 (None% RSE) |
| K m (mg/L) | `Q1` · Km | 1.38 | mg/L |  |  | mg/l | space_fold (0.95) | tab_2:row6:col3 |  |
| V 1 (L) | `Q63` · V1 | 3.07 | L | 0.00307 | m3 | l | space_fold (0.95) | tab_2:row7:col3 | 3 (None% RSE) |
| Q (L/day) | `Q30` · Q | 0.414 | L/day | 4.792e-09 | m3/s | l/d | exact (1) | tab_2:row8:col3 |  |
| V 2 (L) | `Q64` · V2 | 2.9 | L | 0.0029 | m3 | l | space_fold (0.95) | tab_2:row10:col3 |  |
| C max,ss (mg/L) | `Q32` · Cmax | 47.26 | mg/L |  |  | mg/l | llm (0.6) | Wang_2021_table_4:row0:col3 |  |
| C min,ss (mg/L) | `Q36` · Cmin | 26.13 | mg/L |  |  | mg/l | llm (0.6) | Wang_2021_table_4:row1:col3, Wang_2021_table_4:row1:col4 |  |
| theta_q335_albumin | `Q900` · theta_q335_albumin | -1.98 |  |  |  |  |  | tab_2:row4:col3 |  |
| theta_q_weight | `Q900` · theta_q_weight | 1.22 |  |  |  |  |  | tab_2:row9:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL linear (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'V m (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'V 1 (%)' routed out of structural estimates ('Between-subject variability')
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (mg/L)' routed out of structural estimates ('Residual variability')
- unit_dimension_mismatch: 'V m (mg/day)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=camrelizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'final model' is the final model of Wang_2021 (paper reports 3 stages: base model, final model, median 2.5%-97.5%); same population, different model-building step
- molar mass: none found for 'camrelizumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell tab_2:row3:col5 = '0.23 (0.20-0.26)'
- unparsed cell tab_2:row4:col5 = '-1.93 (-2.94 to -0.89)'
- unparsed cell tab_2:row5:col5 = '3.00 (2.26-3.71)'
- unparsed cell tab_2:row6:col5 = '1.40 (0.91-2.76)'
- unparsed cell tab_2:row7:col5 = '3.08 (2.77-3.33)'
- unparsed cell tab_2:row8:col5 = '0.41 (0.34-0.51)'
- unparsed cell tab_2:row9:col5 = '1.18 (0.31-2.28)'
- unparsed cell tab_2:row10:col5 = '2.91 (2.35-3.35)'
- unparsed cell tab_2:row12:col5 = '50.2 (32.7-68.9)'
- unparsed cell tab_2:row13:col5 = '47.8 (29.4-70.9)'
- unparsed cell tab_2:row14:col5 = '39.0 (17.0-70.68)'
- unparsed cell tab_2:row16:col5 = '28.9 (23.8-33.9)'
- unparsed cell tab_2:row17:col5 = '0.0823 (0.0293-0.112)'
- unparsed cell Wang_2021_table_4:row0:col2 = '39.27-195.41 96.40'
- unparsed cell Wang_2021_table_4:row2:col1 = '12.81-113.87 45.48'
- companion parameter table 4 transcribed (7 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.556 (10/18 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[albumin_on_cl_linear]` |  | -1.98 | only_one_extracted |
| `qwen3.8-27b` | `parameters[c max,ss]` | 47.26 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[c min,ss]` | 26.13 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl linear].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[q].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_q335_albumin]` | -1.98 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q_weight]` | 1.22 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[weight_on_q]` |  | 1.22 | only_one_extracted |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['tab_2:row6:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row3:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_2:row8:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Wang_2021_table_4:row0:col3'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['Wang_2021_table_4:row1:col3', 'Wang_2021_table_4:row1:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_2:row7:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_2:row10:col3'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/day | ['tab_2:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.231 | ['tab_2:row3:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00962 L/h | ['tab_2:row3:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.07 L | ['tab_2:row7:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.9 L | ['tab_2:row10:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcamrelizumab%5D%20Camrelizumab_Wang2021_final&body=Drug%3A%20camrelizumab%0ARecord%3A%20Camrelizumab_Wang2021_final%0APaper%3A%20Wang_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_camrelizumab/Camrelizumab_Wang2021_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:48 UTC</sub>
