<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;sodium salicylate&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/&quot;},{&quot;label&quot;:&quot;Lowenthal_1974 \u00b7 four_normal_subjects&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumSalicylate_Mathurkar2018_reference&quot;,&quot;label&quot;:&quot;Mathurkar_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/SodiumSalicylate_Mathurkar2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSalicylate_Lowenthal1974_four_normal_subjects&quot;,&quot;label&quot;:&quot;Lowenthal_1974_four_normal_subjects&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;SodiumSalicylate_Lowenthal1974_four_normal_subjects&quot;,&quot;label&quot;:&quot;Lowenthal_1974_four_normal_subjects&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;SodiumSalicylate_Lowenthal1974_six_anephric_patients&quot;,&quot;label&quot;:&quot;Lowenthal_1974_six_anephric_patients&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSalicylate_Lowenthal1974_six_anephric_patients&quot;,&quot;label&quot;:&quot;Lowenthal_1974_six_anephric_patients&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium salicylate — `SodiumSalicylate_Lowenthal1974_four_normal_subjects`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

**What is wrong:** the simulated model does not reproduce a value the paper reports. Evidence: T1_t_half_terminal — expected 5.0 — got 1.377159936902736 — ratio 0.2754; T1_t_half_terminal — expected 5.266666666666667 — got 1.377159936902736 — ratio 0.2615

**Steps:**
1. Open the paper's reported table and confirm the target value and its units.
2. Compare with the transcribed value in _transcribev2.yaml for this stem.
3. If the transcription is right, the extracted parameters are suspect — check CL and volume in _interpretv2.yaml against the paper.
4. If the transcription is wrong, fix the extraction; the model rebuild follows.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `sodium salicylate`, measured `salicylic acid`.

## Citation
Lowenthal DT; Briggs WA; Levy G et al. (1974). The Journal of clinical investigation 54
  ·  DOI: [10.1172/JCI107865](https://doi.org/10.1172/JCI107865)

## Model component
<dbs-pgx drug="sodium salicylate" model-id="SodiumSalicylate_Lowenthal1974_four_normal_subjects" status="needs_review" stale="false" population="anephric patients" measured-compound="salicylic acid" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vo, liter | `Q61` · V | 5.43 | liter | 0.00543 | [l] | not captured | llm (0.6) | Lowenthal_1974_table_3:row5:col2 | — | not captured |
| t½ (β), min | `Q60` · t1/2β | 247 | min | 14820.0 | [min] | not captured | llm (0.6) | Lowenthal_1974_table_3:row7:col2 | — | not captured |
| clearance | `Q22` · CL | 0.04 | L/h/kg | 7.777777777777778e-07 | L/h | not captured | review_gapfill (0.7) | Mathurkar_2018:review | — | not captured |
| Ka | `Q49` · kabs | 0.64 | 1/h | 0.00017777777777777779 | 1/h | not captured | review_gapfill (0.7) | Mathurkar_2018:review | — | not captured |
| lag time | `Q83` · tlag | 0.42 | h | 1512.0 | h | not captured | review_gapfill (0.7) | Somani_2016:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped duplicate Q61 ('Vd (area), liter', value '9.18') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salicylic acid
- population split: 'four normal subjects*' subgroup of Lowenthal_1974 (paper reports 2 populations: four normal subjects*, six anephric patients)
- gap-filled Q22 (CL) from Mathurkar_2018's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Mathurkar_2018's review values (primary lacked it)
- gap-filled Q83 (tlag) from Somani_2016's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- unparsed cell Lowenthal_1974_table_3:row5:col3 = '&gt;0.7'
- unparsed cell Lowenthal_1974_table_3:row6:col3 = '&gt;0.8'
- unparsed cell Lowenthal_1974_table_3:row7:col3 = '&gt;0.1'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Mathurkar_2018:review'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Mathurkar_2018:review'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Lowenthal_1974_table_3:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lowenthal_1974_table_3:row5:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Somani_2016:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.04 | not captured | not captured | ['Mathurkar_2018:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.8 L/h | not captured | not captured | ['Mathurkar_2018:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.43 L | not captured | not captured | ['Lowenthal_1974_table_3:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=salicylic acid) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 5.0 | 1.377159936902736 | 0.2754 | min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.266666666666667 | 1.377159936902736 | 0.2615 | min→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sodium_salicylate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lowenthal_1974` / `Lowenthal_1974::four_normal_subjects`)
- model: `../../../knowledgebase/drugs/drug_sodium_salicylate/models/modelica/SodiumSalicylate_Lowenthal1974_four_normal_subjects.mo`
- deviation: `../../../knowledgebase/drugs/drug_sodium_salicylate/models/modelica/SodiumSalicylate_Lowenthal1974_four_normal_subjects.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_sodium_salicylate/models/modelica/SodiumSalicylate_Lowenthal1974_four_normal_subjects.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_modelica.zip" download>SodiumSalicylate_Lowenthal1974_four_normal_subjects_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_matlab.zip" download>SodiumSalicylate_Lowenthal1974_four_normal_subjects_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_matlab_simbio.zip" download>SodiumSalicylate_Lowenthal1974_four_normal_subjects_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_sbml.zip" download>SodiumSalicylate_Lowenthal1974_four_normal_subjects_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_cellml.zip" download>SodiumSalicylate_Lowenthal1974_four_normal_subjects_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects.svg" alt="SodiumSalicylate_Lowenthal1974_four_normal_subjects diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `SodiumSalicylate_Lowenthal1974_four_normal_subjects_params.json` · controls `SodiumSalicylate_Lowenthal1974_four_normal_subjects_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
