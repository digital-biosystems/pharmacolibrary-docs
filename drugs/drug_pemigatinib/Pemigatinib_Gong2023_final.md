<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pemigatinib&quot;,&quot;href&quot;:&quot;drugs/drug_pemigatinib/&quot;},{&quot;label&quot;:&quot;Gong_2023 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pemigatinib_Ji2022_final&quot;,&quot;label&quot;:&quot;Ji_2022_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pemigatinib/Pemigatinib_Ji2022_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pemigatinib_Ji2022_final_magnitude_of_interindividual_variab&quot;,&quot;label&quot;:&quot;Ji_2022_final_magnitude_of_interindividual_variability_cv_final_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pemigatinib/Pemigatinib_Ji2022_final_magnitude_of_interindividual_variab.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pemigatinib — `Pemigatinib_Gong2023_final`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> T1/2ka  has no unit.

<div class="pk-model-meta" hidden drug="pemigatinib" model-id="Pemigatinib_Gong2023_final" status="needs_review" stale="false" population="adults with advanced solid tumors including cholangiocarcinoma" measured-compound="pemigatinib" parameterization="apparent" topology="2C"></div>

## Citation
Gong X, Akil A, Ndi A, Ji T, Liu X, Lovern M et al. Population pharmacokinetic and exposure-response analyses of pemigatinib in patients with advanced solid tumors including cholangiocarcinoma. CPT: pharmacometrics & systems pharmacology 12(11):1784–1794 (2023).
  ·  DOI: [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064)

## Population and dosing

**Population:** adults with advanced solid tumors including cholangiocarcinoma · condition advanced solid tumors including cholangiocarcinoma · age group adult.

**Dosing:** 6, 8, 9, 13.5, 20 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F, L/h | CL/F | 10.7 | L/h | 2.7 |
| V c/F, L | V1/F | 118 | L | 3.4 |
| V p/F, L | V2/F | 95.0 | L | 3.0 |
| Q/F, L/h | Q/F | 25.2 | L/h | 7.7 |
| K a, 1/h | kabs | 3.67 | 1/h | 12.2 |
| D1, h | D1 | 0.810 | h | 3.0 |
| PPI on K a, % | t1/2ka | -62.0 |  | 12.2 |
| male_sex_on_k_a | male_sex_on_k_a | -58.3 |  | 11.1 |
| body_weight_to_v_p_f | body_weight_to_v_p_f | 1.13 |  | 13.0 |
| theta_cl_f_sex | theta_cl_f_sex | 26.2 |  | 18.5 |
| theta_q1_body_weight | theta_q1_body_weight | 0.842 |  | 14.3 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.621). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**T1/2ka  has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — pemigatinib: CL/F 10.7 L/h, V1/F 118 L, V2/F 95 L, Q/F 25.2 L/h, kabs 3.67 1/h, D1 0.81 h, t1/2ka -62.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of body_weight_to_v_p_f: this record has 1.13, the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 10.7 | L/h | 2.972e-06 | m3/s | l/h | 2.7 | exact (1) | psp413064-tbl-0002:row2:col1 |
| V c/F, L | `Q290` · V1/F | 118 | L | 0.118 | m3 | l | 3.4 | space_fold (0.95) | psp413064-tbl-0002:row3:col1 |
| V p/F, L | `Q82` · V2/F | 95.0 | L | 0.095 | m3 | l | 3.0 | space_fold (0.95) | psp413064-tbl-0002:row5:col1 |
| Q/F, L/h | `Q69` · Q/F | 25.2 | L/h | 7e-06 | m3/s | l/h | 7.7 | exact (1) | psp413064-tbl-0002:row6:col1 |
| K a, 1/h | `Q49` · kabs | 3.67 | 1/h | 0.001019 | 1/s | 1/h | 12.2 | space_fold (0.95) | psp413064-tbl-0002:row7:col1 |
| D1, h | `Q310` · D1 | 0.810 | h | 2916 | s | h | 3.0 | exact (1) | psp413064-tbl-0002:row8:col1 |
| PPI on K a, % | `Q95` · t1/2ka | -62.0 |  |  |  |  | 12.2 | llm (0.6) | psp413064-tbl-0002:row11:col1 |
| male_sex_on_k_a | `Q900` · male_sex_on_k_a | -58.3 |  |  |  |  | 11.1 |  | psp413064-tbl-0002:row13:col1 |
| body_weight_to_v_p_f | `Q900` · body_weight_to_v_p_f | 1.13 |  |  |  |  | 13.0 |  | psp413064-tbl-0002:row16:col1 |
| theta_cl_f_sex | `Q900` · theta_cl_f_sex | 26.2 |  |  |  |  | 18.5 |  | psp413064-tbl-0002:row12:col1 |
| theta_q1_body_weight | `Q900` · theta_q1_body_weight | 0.842 |  |  |  |  | 14.3 |  | psp413064-tbl-0002:row15:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Phosphate binder on CL/F, %' — extend the ontology if this is a real PK parameter (source ['psp413064-tbl-0002:row10:col1'])
- covariate level 'Male sex on K a, %' → Q900:male_sex_on_k_a = -58.3 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'H2B antagonist on D1, %' — extend the ontology if this is a real PK parameter (source ['psp413064-tbl-0002:row14:col1'])
- covariate level 'Body weight to V p/F, %' → Q900:body_weight_to_v_p_f = 1.13 (power on Q27)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pemigatinib
- model-stage split: 'final parameter estimate / population mean' is the final model of Gong_2023 (paper reports 2 stages: final parameter estimate / population mean, magnitude of interindividual variability (%cv) / final estimate); same population, different model-building step

**Extraction notes:**
- table psp413064-tbl-0002: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.621 (18/29 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[body_weight_to_v_p_f]` | 1.13 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional', 'linear_fractional', 'power'] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[k a].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[male_sex_on_k_a]` | -58.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ppi on k a, %]` | -62.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_sex]` |  | -58.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q1_body_weight]` | 0.842 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_body_weight]` |  | 0.842 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_f_body_weight_power]` |  | 1.13 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[v p/f].covariate_forms` | [] | ['power'] | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp413064-tbl-0002:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp413064-tbl-0002:row3:col1'] |
| C5_dimension_Q310 | pass | [time] |  | ['psp413064-tbl-0002:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413064-tbl-0002:row7:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp413064-tbl-0002:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp413064-tbl-0002:row5:col1'] |
| C5_unit_missing_Q95 | fail | [time] |  | ['psp413064-tbl-0002:row11:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.7 L/h | ['psp413064-tbl-0002:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 118 L | ['psp413064-tbl-0002:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 95 L | ['psp413064-tbl-0002:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpemigatinib%5D%20Pemigatinib_Gong2023_final&body=Drug%3A%20pemigatinib%0ARecord%3A%20Pemigatinib_Gong2023_final%0APaper%3A%20Gong_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pemigatinib/Pemigatinib_Gong2023_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:35 UTC</sub>
