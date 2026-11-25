<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;daridorexant&quot;,&quot;href&quot;:&quot;drugs/drug_daridorexant/&quot;},{&quot;label&quot;:&quot;Krause_2023 \u00b7 all_phase_i_data_estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daridorexant — `Daridorexant_Krause2023_all_phase_i_data_estimate`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Vss and t1/2ka  have no unit.

<div class="pk-model-meta" hidden drug="daridorexant" model-id="Daridorexant_Krause2023_all_phase_i_data_estimate" status="needs_review" stale="false" population="healthy adults and patients with insomnia" measured-compound="daridorexant" parameterization="mechanistic" topology="2C"></div>

## Citation
Krause A, Lott D, Brussee JM, Muehlan C, Dingemanse J. Population pharmacokinetic modeling of daridorexant, a novel dual orexin receptor antagonist. CPT: pharmacometrics & systems pharmacology 12(1):74–86 (2023).
  ·  DOI: [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877)

## Population and dosing

**Population:** healthy adults and patients with insomnia · condition insomnia · age group adult.

**Dosing:** 5, 200 mg, oral, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| F | Fab | 0.41 |  | 1.53 |
| t_lag (h) | tlag | 0.41 | h | 7.94 |
| k_a (1/h) | kabs | 1.05 | 1/h | 18.70 |
| food_fasted_on_k_a | food_fasted_on_k_a | 0.09 |  | 172.00 |
| V_c (L) | V1 | 14.60 | L | 1.42 |
| lean_body_weight_on_v_c | lean_body_weight_on_v_c | 0.37 |  | 18.20 |
| V_p (L) | V2 | 13.70 | L | 1.91 |
| Fat mass on V_p | Vss | 0.72 |  | 8.70 |
| Q (L/h) | Q | 3.58 | L/h | 3.24 |
| Fat mass on Q | fm | 1.21 |  | 8.57 |
| V_m (mg/h) | Vmax | 6.94 | mg/h | 1.13 |
| K_m (μg/ml) | Km | 2.36 | μg/ml | 2.20 |
| SD(k_a) | t1/2ka | 0.59 | k_a | 9.12 |
| theta_tlag_food | theta_tlag_food | -0.51 |  | 16.50 |
| theta_tlag_food | theta_tlag_food | 0.62 |  | 17.80 |
| theta_kabs_food | theta_kabs_food | -1.19 |  | 16.90 |
| theta_km_body_weight | theta_km_body_weight | -0.12 |  | 79.30 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.692). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Vss and t1/2ka  have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (t1/2ka ), so that value has no SI equivalent. Extracted — daridorexant: Fab 0.41, tlag 0.41 h, kabs 1.05 1/h, V1 14.6 L, V2 13.7 L, Vss 0.72, Q 3.58 L/h, fm 1.21, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of fat mass on q: this record has 1.21, the second reading none; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 0.41 |  |  |  |  | 1.53 | exact (1) | Krause_2023_table_2:row0:col3 |
| t_lag (h) | `Q83` · tlag | 0.41 | h | 1476 | s | h | 7.94 | exact (1) | Krause_2023_table_2:row2:col3 |
| k_a (1/h) | `Q49` · kabs | 1.05 | 1/h | 0.0002917 | 1/s | 1/h | 18.70 | exact (1) | Krause_2023_table_2:row5:col3 |
| food_fasted_on_k_a | `Q900` · food_fasted_on_k_a | 0.09 |  |  |  |  | 172.00 |  | Krause_2023_table_2:row6:col3 |
| V_c (L) | `Q63` · V1 | 14.60 | L | 0.0146 | m3 | l | 1.42 | exact (1) | Krause_2023_table_2:row9:col3 |
| lean_body_weight_on_v_c | `Q900` · lean_body_weight_on_v_c | 0.37 |  |  |  |  | 18.20 |  | Krause_2023_table_2:row10:col3 |
| V_p (L) | `Q64` · V2 | 13.70 | L | 0.0137 | m3 | l | 1.91 | exact (1) | Krause_2023_table_2:row11:col3 |
| Fat mass on V_p | `Q65` · Vss | 0.72 |  |  |  |  | 8.70 | llm_corrected (0.6) | Krause_2023_table_2:row12:col3 |
| Q (L/h) | `Q30` · Q | 3.58 | L/h | 9.944e-07 | m3/s | l/h | 3.24 | exact (1) | Krause_2023_table_2:row13:col3 |
| Fat mass on Q | `Q45` · fm | 1.21 |  | 0.0121 |  |  | 8.57 | llm (0.6) | Krause_2023_table_2:row14:col3 |
| V_m (mg/h) | `Q66` · Vmax | 6.94 | mg/h | 1.928e-09 | kg/s | mg/h | 1.13 | llm (0.6) | Krause_2023_table_2:row15:col3 |
| K_m (μg/ml) | `Q1` · Km | 2.36 | μg/ml | 0.00236 | kg/m3 | µg/ml | 2.20 | exact (1) | Krause_2023_table_2:row16:col3 |
| SD(k_a) | `Q95` · t1/2ka | 0.59 | k_a |  |  | a·k_ | 9.12 | llm (0.6) | Krause_2023_table_2:row24:col3 |
| theta_tlag_food | `Q900` · theta_tlag_food | -0.51 |  |  |  |  | 16.50 |  | Krause_2023_table_2:row3:col3 |
| theta_tlag_food | `Q900` · theta_tlag_food | 0.62 |  |  |  |  | 17.80 |  | Krause_2023_table_2:row4:col3 |
| theta_kabs_food | `Q900` · theta_kabs_food | -1.19 |  |  |  |  | 16.90 |  | Krause_2023_table_2:row7:col3 |
| theta_km_body_weight | `Q900` · theta_km_body_weight | -0.12 |  |  |  |  | 79.30 |  | Krause_2023_table_2:row19:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['Krause_2023_table_2:row1:col3'])
- covariate level 'Food: fasted on k_a' → Q900:food_fasted_on_k_a = 0.09 (linear_fractional on the model)
- dropped duplicate Q49 ('Morning administration on k_a', value '1.05') — already have one for this compound
- covariate level 'Lean body weight on V_c' → Q900:lean_body_weight_on_v_c = 0.37 (linear_fractional on the model)
- 'Fat mass on Q' → Q45: printed without a unit and above 1 — read as a percentage
- 'SD(F)': unit 'F' is a parameter symbol — dropped
- dropped unlinked row (NIL): 'SD(F)' — extend the ontology if this is a real PK parameter (source ['Krause_2023_table_2:row22:col3'])
- dropped duplicate Q83 ('SD(t_lag)', value '0.26') — already have one for this compound
- unit_dimension_unknown: 'k_a' (t1/2ka )
- unit_dimension_unknown: 'V_c' (Vss)
- dropped duplicate Q65 ('SD(V_c)', value '0.17') — already have one for this compound
- dropped unlinked row (NIL): 'SD(V_p)' — extend the ontology if this is a real PK parameter (source ['Krause_2023_table_2:row26:col3'])
- dropped duplicate Q30 ('SD(Q)', value '0.50') — already have one for this compound
- unit_dimension_unknown: 'V_m' (Vmax)
- dropped duplicate Q66 ('SD(V_m)', value '0.09') — already have one for this compound
- unit_dimension_unknown: 'K_m' (Km)
- dropped duplicate Q1 ('SD(K_m)', value '0.36') — already have one for this compound
- dropped unlinked row (NIL): 'Multiplicative error' — extend the ontology if this is a real PK parameter (source ['Krause_2023_table_2:row35:col3'])
- implicit units: 'SD(k_a)' — the LLM proposed '1/h', whose dimension does not fit Q95; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=daridorexant
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'all phase i data estimate' subgroup of Krause_2023 (paper reports 4 populations: all data, final model estimate, all phase i data estimate, food, phase i data (intense pk) estimate)

**Extraction notes:**
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.692 (27/39 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[fat mass on q]` | 1.21 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fat mass on v_p]` | 0.72 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[food_fasted_on_k_a]` | 0.09 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_a].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[lean_body_weight_on_v_c]` | 0.37 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[sd].parameter_id` | Q95 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[sd].rse_percent` | 9.12 | 11.90 | mismatch |
| `gpt-oss-120b` | `parameters[sd].value` | 0.59 | 0.09 | mismatch |
| `gpt-oss-120b` | `parameters[theta_kabs_food].rse_percent` | 16.90 | 172.00 | mismatch |
| `gpt-oss-120b` | `parameters[theta_kabs_food].value` | -1.19 | 0.09 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v1_body_weight]` |  | 0.37 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_c].covariate_forms` | [] | ['linear_fractional'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Krause_2023_table_2:row16:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Krause_2023_table_2:row13:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Krause_2023_table_2:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Krause_2023_table_2:row9:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Krause_2023_table_2:row11:col3'] |
| C5_dimension_Q66 | pass | [mass] / [time] |  | ['Krause_2023_table_2:row15:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Krause_2023_table_2:row2:col3'] |
| C5_unit_missing_Q65 | fail | [length] ** 3 |  | ['Krause_2023_table_2:row12:col3'] |
| C5_unit_missing_Q95 | fail | [time] | k_a | ['Krause_2023_table_2:row24:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 14.6 L | ['Krause_2023_table_2:row9:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 13.7 L | ['Krause_2023_table_2:row11:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaridorexant%5D%20Daridorexant_Krause2023_all_phase_i_data_estimate&body=Drug%3A%20daridorexant%0ARecord%3A%20Daridorexant_Krause2023_all_phase_i_data_estimate%0APaper%3A%20Krause_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daridorexant/Daridorexant_Krause2023_all_phase_i_data_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 12:26 UTC</sub>
