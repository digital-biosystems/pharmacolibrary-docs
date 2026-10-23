<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;sotrovimab&quot;,&quot;href&quot;:&quot;drugs/drug_sotrovimab/&quot;},{&quot;label&quot;:&quot;Sager_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotrovimab_Sager2023_reference&quot;,&quot;label&quot;:&quot;Sager_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Sotrovimab_SnchezPearson2025_reference&quot;,&quot;label&quot;:&quot;S\u00e1nchez-Pearson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotrovimab/Sotrovimab_SnchezPearson2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sotrovimab — `Sotrovimab_Sager2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="sotrovimab" model-id="Sotrovimab_Sager2023_reference" status="accepted_with_caveats" stale="false" population="patients with mild to moderate COVID-19" measured-compound="sotrovimab" parameterization="mechanistic" topology="2C"></div>

## Citation
Sager JE, El-Zailik A, Passarell J, Roepcke S, Li X, Aldinger M et al. Population pharmacokinetics and exposure-response analysis of a single dose of sotrovimab in the early treatment of patients with mild to moderate COVID-19. CPT: pharmacometrics & systems pharmacology 12(6):853–864 (2023).
  ·  DOI: [10.1002/psp4.12958](https://doi.org/10.1002/psp4.12958)

## Population and dosing

**Population:** patients with mild to moderate COVID-19 · condition COVID-19 · age group adult.

**Dosing:** 250, 500 mg, iv, im, single.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 5 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference.svg" alt="Sotrovimab_Sager2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Elimination clearance in participants of 83.6 kg (L/day) | CL | 1.33 | L/day |
| Central volume of distribution (L) | V1 | 2.20 | L |
| Distribution clearance (L/day) | Q | 1.49 | L/day |
| Peripheral volume of distribution in participants of 83.6 kg (L) | V2 | 1.32 | L |
| power_of_bmi_effect | power_of_bmi_effect | 20.0 |  |
| proportional_shift_in_female_participants | proportional_shift_in_female_participants | 11.9 |  |
| i.m. bioavailability in male participants | Fab | 2.64 |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 6.08 |  |
| theta_q49_bmi_absorption_rate_in_male_participants_with_of_30.41_kg_m2_l_h | theta_q49_bmi_absorption_rate_in_male_participants_with_of_30.41_kg_m2_l_h | 4.67 |  |
| theta_q900_category | theta_q900_category | 16.4 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.722). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[elimination clearance in participants of 83.6 kg].covariate_forms`: this record has ['additive_shift', 'power'], the second reading ['additive_shift']; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Elimination clearance in participants of 83.6 kg (L/day) | `Q22` · CL | 1.33 | L/day | 1.539e-08 | m3/s | l/d | llm_confirmed (0.6) | psp412958-tbl-0001:row3:col1, psp412958-tbl-0001:row3:col2, psp412958-tbl-0001:row3:col4 |
| Central volume of distribution (L) | `Q63` · V1 | 2.20 | L | 0.0022 | m3 | l | boundary_compartment (0.9) | psp412958-tbl-0001:row6:col1, psp412958-tbl-0001:row6:col2, psp412958-tbl-0001:row6:col4 |
| Distribution clearance (L/day) | `Q30` · Q | 1.49 | L/day | 1.725e-08 | m3/s | l/d | exact (1) | psp412958-tbl-0001:row8:col1, psp412958-tbl-0001:row8:col2 |
| Peripheral volume of distribution in participants of 83.6 kg (L) | `Q64` · V2 | 1.32 | L | 0.00132 | m3 | l | boundary_compartment (0.9) | psp412958-tbl-0001:row10:col1, psp412958-tbl-0001:row10:col2, psp412958-tbl-0001:row10:col4 |
| power_of_bmi_effect | `Q900` · power_of_bmi_effect | 20.0 |  |  |  |  |  | psp412958-tbl-0001:row14:col1, psp412958-tbl-0001:row14:col2 |
| proportional_shift_in_female_participants | `Q900` · proportional_shift_in_female_participants | 11.9 |  |  |  |  |  | psp412958-tbl-0001:row15:col1, psp412958-tbl-0001:row15:col2 |
| i.m. bioavailability in male participants | `Q40` · Fab | 2.64 |  |  |  |  | llm_confirmed (0.6) | psp412958-tbl-0001:row17:col1, psp412958-tbl-0001:row17:col2, psp412958-tbl-0001:row17:col4 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 6.08 |  |  |  |  |  | psp412958-tbl-0001:row4:col1, psp412958-tbl-0001:row4:col2, psp412958-tbl-0001:row11:col1, psp412958-tbl-0001:row11:col2 |
| theta_q49_bmi_absorption_rate_in_male_participants_with_of_30.41_kg_m2_l_h | `Q900` · theta_q49_bmi_absorption_rate_in_male_participants_with_of_30.41_kg_m2_l_h | 4.67 |  |  |  |  |  | psp412958-tbl-0001:row13:col1, psp412958-tbl-0001:row13:col2, psp412958-tbl-0001:row13:col4 |
| theta_q900_category | `Q900` · theta_q900_category | 16.4 |  |  |  |  |  | psp412958-tbl-0001:row18:col1, psp412958-tbl-0001:row18:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Power of BMI effect' → Q900:power_of_bmi_effect = 20.0 (power on Q22)
- covariate level 'Proportional shift in female participants' → Q900:proportional_shift_in_female_participants = 11.9 (additive_shift on Q22)
- dropped unlinked row (NIL): 'Rate of input (mg/h)' — extend the ontology if this is a real PK parameter (source ['psp412958-tbl-0001:row20:col1', 'psp412958-tbl-0001:row20:col2'])
- dropped unlinked row (NIL): 'Minimum value of the objective function = 48,830.476' — extend the ontology if this is a real PK parameter (source ['psp412958-tbl-0001:row33:col1', 'psp412958-tbl-0001:row33:col2', 'psp412958-tbl-0001:row33:col3', 'psp412958-tbl-0001:row33:col4'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sotrovimab
- molar mass: none found for 'sotrovimab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412958-tbl-0001:row3:col3 = '38.2 %CV'
- unparsed cell psp412958-tbl-0001:row6:col3 = '57.2 %CV'
- unparsed cell psp412958-tbl-0001:row10:col3 = '29.4 %CV'
- unparsed cell psp412958-tbl-0001:row13:col3 = '55.4 %CV'
- unparsed cell psp412958-tbl-0001:row17:col3 = '42.9 %CV a'
- unparsed cell psp412958-tbl-0001:row18:col3 = '42.9 %CV c'
- unparsed cell psp412958-tbl-0001:row31:col3 = '177–13.2 %CV F [0.1‐4000] n'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.722 (13/18 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[elimination clearance in participants of 83.6 kg].covariate_forms` | ['additive_shift', 'power'] | ['additive_shift'] | mismatch |
| `gpt-oss-120b` | `parameters[power_of_bmi_effect]` | 20.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_bmi_power]` |  | 20.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q344_category]` |  | 16.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_category]` | 16.4 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412958-tbl-0001:row3:col1', 'psp412958-tbl-0001:row3:col2', 'psp412958-tbl-0001:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412958-tbl-0001:row8:col1', 'psp412958-tbl-0001:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412958-tbl-0001:row6:col1', 'psp412958-tbl-0001:row6:col2', 'psp412958-tbl-0001:row6:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412958-tbl-0001:row10:col1', 'psp412958-tbl-0001:row10:col2', 'psp412958-tbl-0001:row10:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.33 | ['psp412958-tbl-0001:row3:col1', 'psp412958-tbl-0001:row3:col2', 'psp412958-tbl-0001:row3:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0554 L/h | ['psp412958-tbl-0001:row3:col1', 'psp412958-tbl-0001:row3:col2', 'psp412958-tbl-0001:row3:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.2 L | ['psp412958-tbl-0001:row6:col1', 'psp412958-tbl-0001:row6:col2', 'psp412958-tbl-0001:row6:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.32 L | ['psp412958-tbl-0001:row10:col1', 'psp412958-tbl-0001:row10:col2', 'psp412958-tbl-0001:row10:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=sotrovimab) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_modelica.zip" download>Sotrovimab_Sager2023_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_fmi.zip" download>Sotrovimab_Sager2023_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_matlab.zip" download>Sotrovimab_Sager2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_matlab_simbio.zip" download>Sotrovimab_Sager2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_sbml.zip" download>Sotrovimab_Sager2023_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_cellml.zip" download>Sotrovimab_Sager2023_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00025 | kg |
| input | model | `Cl` | 1.539e-08 | m3/s |
| input | model | `VdPerKg` | 3.143e-05 | m3/kg |
| input | model | `k12` | 7.839e-06 | 1/s |
| input | model | `k21` | 1.306e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sager JE, El-Zailik A, Passarell J, Roepcke S, Li X, Aldinger M et al. Population pharmacokinetics and exposure-response analysis of a single dose of sotrovimab in the early treatment of patients with mild to moderate COVID-19. CPT: pharmacometrics & systems pharmacology 12(6):853–864 (2023). [doi:10.1002/psp4.12958](https://doi.org/10.1002/psp4.12958)

**This record:** Pharmacolibrary v26.09, model `Sotrovimab_Sager2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference>

```bibtex
@misc{pharmacolibrary_SotrovimabSager2023reference,
  title  = {{Pharmacolibrary model Sotrovimab_Sager2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference},
  note   = {Parameters from doi:10.1002/psp4.12958},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 250 mg infusion over 10 min, single dose. Doses in the paper: 250, 500 mg.

<dbs-fmusim paramsurl="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Sotrovimab_Sager2023_reference_params.json` · controls `Sotrovimab_Sager2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsotrovimab%5D%20Sotrovimab_Sager2023_reference&body=Drug%3A%20sotrovimab%0ARecord%3A%20Sotrovimab_Sager2023_reference%0APaper%3A%20Sager_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 14:54 UTC</sub>
