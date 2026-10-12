<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;sotrovimab&quot;,&quot;href&quot;:&quot;drugs/drug_sotrovimab/&quot;},{&quot;label&quot;:&quot;Sager_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotrovimab_Sager2023_reference&quot;,&quot;label&quot;:&quot;Sager_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Sotrovimab_SnchezPearson2025_reference&quot;,&quot;label&quot;:&quot;S\u00e1nchez-Pearson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotrovimab/Sotrovimab_SnchezPearson2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sotrovimab — `Sotrovimab_Sager2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.722). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[elimination clearance in participants of 83.6 kg].covariate_forms`: this record has ['additive_shift', 'power'], the second reading ['additive_shift']; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Sager JE et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.12958](https://doi.org/10.1002/psp4.12958)

<div class="pk-model-meta" hidden drug="sotrovimab" model-id="Sotrovimab_Sager2023_reference" status="accepted_with_caveats" stale="false" population="patients with mild to moderate COVID-19" measured-compound="sotrovimab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 5 extracted, plus 5 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Elimination clearance in participants of 83.6 kg (L/day) | `Q22` · CL | 1.33 | L/day | 1.5393518518518518e-08 | [l] / [d] | not captured | llm_confirmed (0.6) | psp412958-tbl-0001:row3:col1, psp412958-tbl-0001:row3:col2, psp412958-tbl-0001:row3:col4 | — | not captured |
| Central volume of distribution (L) | `Q63` · V1 | 2.20 | L | 0.0022 | [l] | not captured | boundary_compartment (0.9) | psp412958-tbl-0001:row6:col1, psp412958-tbl-0001:row6:col2, psp412958-tbl-0001:row6:col4 | — | not captured |
| Distribution clearance (L/day) | `Q30` · Q | 1.49 | L/day | 1.724537037037037e-08 | [l] / [d] | not captured | exact (1.0) | psp412958-tbl-0001:row8:col1, psp412958-tbl-0001:row8:col2 | — | not captured |
| Peripheral volume of distribution in participants of 83.6 kg (L) | `Q64` · V2 | 1.32 | L | 0.00132 | [l] | not captured | boundary_compartment (0.9) | psp412958-tbl-0001:row10:col1, psp412958-tbl-0001:row10:col2, psp412958-tbl-0001:row10:col4 | — | not captured |
| power_of_bmi_effect | `Q900` · power_of_bmi_effect | 20.0 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412958-tbl-0001:row14:col1, psp412958-tbl-0001:row14:col2 | — | not captured |
| proportional_shift_in_female_participants | `Q900` · proportional_shift_in_female_participants | 11.9 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412958-tbl-0001:row15:col1, psp412958-tbl-0001:row15:col2 | — | not captured |
| i.m. bioavailability in male participants | `Q40` · Fab | 2.64 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | psp412958-tbl-0001:row17:col1, psp412958-tbl-0001:row17:col2, psp412958-tbl-0001:row17:col4 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 6.08 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412958-tbl-0001:row4:col1, psp412958-tbl-0001:row4:col2, psp412958-tbl-0001:row11:col1, psp412958-tbl-0001:row11:col2 | — | not captured |
| theta_q49_bmi_absorption_rate_in_male_participants_with_of_30.41_kg_m2_l_h | `Q900` · theta_q49_bmi_absorption_rate_in_male_participants_with_of_30.41_kg_m2_l_h | 4.67 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412958-tbl-0001:row13:col1, psp412958-tbl-0001:row13:col2, psp412958-tbl-0001:row13:col4 | — | not captured |
| theta_q900_category | `Q900` · theta_q900_category | 16.4 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412958-tbl-0001:row18:col1, psp412958-tbl-0001:row18:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[power_of_bmi_effect]` | 20.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_bmi_power]` | not captured | 20.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q344_category]` | not captured | 16.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_category]` | 16.4 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412958-tbl-0001:row3:col1', 'psp412958-tbl-0001:row3:col2', 'psp412958-tbl-0001:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412958-tbl-0001:row8:col1', 'psp412958-tbl-0001:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412958-tbl-0001:row6:col1', 'psp412958-tbl-0001:row6:col2', 'psp412958-tbl-0001:row6:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412958-tbl-0001:row10:col1', 'psp412958-tbl-0001:row10:col2', 'psp412958-tbl-0001:row10:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.33 | not captured | not captured | ['psp412958-tbl-0001:row3:col1', 'psp412958-tbl-0001:row3:col2', 'psp412958-tbl-0001:row3:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0554 L/h | not captured | not captured | ['psp412958-tbl-0001:row3:col1', 'psp412958-tbl-0001:row3:col2', 'psp412958-tbl-0001:row3:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.2 L | not captured | not captured | ['psp412958-tbl-0001:row6:col1', 'psp412958-tbl-0001:row6:col2', 'psp412958-tbl-0001:row6:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.32 L | not captured | not captured | ['psp412958-tbl-0001:row10:col1', 'psp412958-tbl-0001:row10:col2', 'psp412958-tbl-0001:row10:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=sotrovimab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sotrovimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sager_2023` / `Sager_2023::reference`)
- model: `../../../knowledgebase/drugs/drug_sotrovimab/models/modelica/Sotrovimab_Sager2023_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_sotrovimab/models/modelica/Sotrovimab_Sager2023_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_sotrovimab/models/modelica/Sotrovimab_Sager2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_modelica.zip" download>Sotrovimab_Sager2023_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_fmi.zip" download>Sotrovimab_Sager2023_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_matlab.zip" download>Sotrovimab_Sager2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_matlab_simbio.zip" download>Sotrovimab_Sager2023_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_sbml.zip" download>Sotrovimab_Sager2023_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_cellml.zip" download>Sotrovimab_Sager2023_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference.svg" alt="Sotrovimab_Sager2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 250 mg infusion over 10 min, single dose. Doses in the paper: 250, 500 mg.

<dbs-fmusim paramsurl="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference/Sotrovimab_Sager2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Sotrovimab_Sager2023_reference_params.json` · controls `Sotrovimab_Sager2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:54 UTC</sub>
