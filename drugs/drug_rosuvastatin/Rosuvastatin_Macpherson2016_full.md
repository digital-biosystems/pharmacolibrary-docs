<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;rosuvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_rosuvastatin/&quot;},{&quot;label&quot;:&quot;Macpherson_2016 \u00b7 full&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rosuvastatin_Friedrich2014_reference&quot;,&quot;label&quot;:&quot;Friedrich_2014_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rosuvastatin/Rosuvastatin_Friedrich2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Macpherson2016_final&quot;,&quot;label&quot;:&quot;Macpherson_2016_final&quot;,&quot;href&quot;:&quot;drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_final.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Macpherson2016_final&quot;,&quot;label&quot;:&quot;Macpherson_2016_final&quot;,&quot;href&quot;:&quot;drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_final.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Macpherson2016_full&quot;,&quot;label&quot;:&quot;Macpherson_2016_full&quot;,&quot;href&quot;:&quot;drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_full.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Rosuvastatin_Macpherson2016_full&quot;,&quot;label&quot;:&quot;Macpherson_2016_full&quot;,&quot;href&quot;:&quot;drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_full.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Rosuvastatin_Sun2022_reference&quot;,&quot;label&quot;:&quot;Sun_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rosuvastatin/Rosuvastatin_Sun2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Aoyama2010_reference&quot;,&quot;label&quot;:&quot;Aoyama_2010_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rosuvastatin/Rosuvastatin_Aoyama2010_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Courlet2021_reference&quot;,&quot;label&quot;:&quot;Courlet_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rosuvastatin/Rosuvastatin_Courlet2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Liao2022v2_reference&quot;,&quot;label&quot;:&quot;Liao_2022_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rosuvastatin/Rosuvastatin_Liao2022v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# rosuvastatin — `Rosuvastatin_Macpherson2016_full`

> ## <span class="pk-badge pk-badge--green">accepted (caveats)</span>

### Reviewer guidance

**What is wrong:** the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised

**Steps:**
1. Advisory only — the base model still replicates.
2. Check the record's covariate_definitions in _interpretv2.yaml.
3. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Macpherson M; Hamrén B; Braamskamp MJ; Kastelein JJ; Lundström T; Martin PD et al. (2016). European journal of clinical pharmacology 72
  ·  DOI: [10.1007/s00228-015-1946-4](https://doi.org/10.1007/s00228-015-1946-4)

## Model component
<dbs-pgx drug="rosuvastatin" model-id="Rosuvastatin_Macpherson2016_full" status="accepted_with_caveats" stale="false" population="pediatric patients with heterozygous familial hypercholesterolemia" measured-compound="rosuvastatin" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h-1) | `Q49` · kabs | 0.183 | h-1 | 5.0833333333333333e-05 | [1] / [h] | not captured | exact (1.0) | Macpherson_2016_table_p6_1:row0:col2 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 150 | L/h | 4.1666666666666665e-05 | [l] / [h] | not captured | exact (1.0) | Macpherson_2016_table_p6_1:row1:col2 | — | 43.7 (None% RSE) |
| Vc/F (L) | `Q290` · V1/F | 308 | L | 0.308 | [l] | not captured | exact (1.0) | Macpherson_2016_table_p6_1:row2:col2 | — | 106 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 91.3 | L/h | 2.536111111111111e-05 | [l] / [h] | not captured | exact (1.0) | Macpherson_2016_table_p6_1:row3:col2 | — | 65.1 (None% RSE) |
| Vp/F (L) | `Q82` · V2/F | 5361 | L | 5.361 | [l] | not captured | exact (1.0) | Macpherson_2016_table_p6_1:row4:col2 | — | not captured |
| theta_cl_f_weight_power | `Q900` · theta_cl_f_weight_power | 0.398 | not captured | not captured | not captured | not captured | not captured (not captured) | Macpherson_2016_table_p6_1:row5:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['Macpherson_2016_table_p6_1:row12:col2'])
- dropped unlinked row (NIL): 'Δ OFV' — extend the ontology if this is a real PK parameter (source ['Macpherson_2016_table_p6_1:row13:col2'])
- dropped unlinked row (NIL): 'Condition no.' — extend the ontology if this is a real PK parameter (source ['Macpherson_2016_table_p6_1:row14:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rosuvastatin
- model-stage split: 'covariate model 1' is the full model of Macpherson_2016 (paper reports 3 stages: covariate model 1, final base model, final model); same population, different model-building step
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Macpherson_2016_table_p6_1:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Macpherson_2016_table_p6_1:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Macpherson_2016_table_p6_1:row0:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Macpherson_2016_table_p6_1:row3:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Macpherson_2016_table_p6_1:row4:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 150 L/h | not captured | not captured | ['Macpherson_2016_table_p6_1:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 308 L | not captured | not captured | ['Macpherson_2016_table_p6_1:row2:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 5.36e+03 L | not captured | not captured | ['Macpherson_2016_table_p6_1:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=rosuvastatin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rosuvastatin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Macpherson_2016` / `Macpherson_2016::full`)
- model: `../../../knowledgebase/drugs/drug_rosuvastatin/models/modelica/Rosuvastatin_Macpherson2016_full.mo`
- deviation: `../../../knowledgebase/drugs/drug_rosuvastatin/models/modelica/Rosuvastatin_Macpherson2016_full.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_rosuvastatin/models/modelica/Rosuvastatin_Macpherson2016_full.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_full/Rosuvastatin_Macpherson2016_full.svg" alt="Rosuvastatin_Macpherson2016_full diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_full/Rosuvastatin_Macpherson2016_full_modelica.zip" download>Rosuvastatin_Macpherson2016_full_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_full/Rosuvastatin_Macpherson2016_full_matlab.zip" download>Rosuvastatin_Macpherson2016_full_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_full/Rosuvastatin_Macpherson2016_full_matlab_simbio.zip" download>Rosuvastatin_Macpherson2016_full_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_full/Rosuvastatin_Macpherson2016_full_sbml.zip" download>Rosuvastatin_Macpherson2016_full_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_full/Rosuvastatin_Macpherson2016_full_cellml.zip" download>Rosuvastatin_Macpherson2016_full_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

Runs **this record's model** in your browser as WebAssembly — nothing to install. The sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited.

<dbs-fmusim paramsurl="drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_full/Rosuvastatin_Macpherson2016_full_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_rosuvastatin/Rosuvastatin_Macpherson2016_full/Rosuvastatin_Macpherson2016_full_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_2C_enteral` · parameters `Rosuvastatin_Macpherson2016_full_params.json` · controls `Rosuvastatin_Macpherson2016_full_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
