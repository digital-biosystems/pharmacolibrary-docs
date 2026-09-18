<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salbutamol&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/&quot;},{&quot;label&quot;:&quot;Courlet_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salbutamol_Marques2024v2_reference&quot;,&quot;label&quot;:&quot;Marques_2024_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Walsh2023_reference&quot;,&quot;label&quot;:&quot;Walsh_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Walsh2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Courlet2022_reference&quot;,&quot;label&quot;:&quot;Courlet_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Courlet2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Salbutamol_Marques2024_estimate&quot;,&quot;label&quot;:&quot;Marques_2024_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024_estimate&quot;,&quot;label&quot;:&quot;Marques_2024_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024_geometric_mean&quot;,&quot;label&quot;:&quot;Marques_2024_geometric_mean&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024_geometric_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024_geometric_mean&quot;,&quot;label&quot;:&quot;Marques_2024_geometric_mean&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024_geometric_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024_value&quot;,&quot;label&quot;:&quot;Marques_2024_value&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024_value.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024_value&quot;,&quot;label&quot;:&quot;Marques_2024_value&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024_value.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Valenzuela2006_reference&quot;,&quot;label&quot;:&quot;Valenzuela_2006_reference&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Valenzuela2006_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Vet2020_reference&quot;,&quot;label&quot;:&quot;Vet_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Vet2020_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salbutamol — `Salbutamol_Courlet2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

**What is wrong:** the simulated model does not reproduce a value the paper reports; the model was built differently from what the record describes. Evidence: T1_tmax — expected 0.17 — got 0.29727858857199785 — ratio 1.7487; T1_tmax — expected 1.8 — got 0.29727858857199785 — ratio 0.1652; T1_tmax — expected 1.45 — got 0.29727858857199785 — ratio 0.205; T3_param_coverage — expected 4 scholar param(s) emitted or defaulted — got 3 covered

**Steps:**
1. Open the paper's reported table and confirm the target value and its units.
2. Compare with the transcribed value in _transcribev2.yaml for this stem.
3. If the transcription is right, the extracted parameters are suspect — check CL and volume in _interpretv2.yaml against the paper.
4. If the transcription is wrong, fix the extraction; the model rebuild follows.
5. Open the emitted .mo and compare its base class and parameters with the record.
6. Check the .deviation.json beside it for what the engineer defaulted or assumed.

<sub>owner: **engineer** · guidance written by playbook</sub>

## Citation
Courlet P; Buclin T; Biollaz J; Mazzoni I; Rabin O; Guidi M et al. (2022). CPT: pharmacometrics & systems pharmacology 11
  ·  DOI: [10.1002/psp4.12773](https://doi.org/10.1002/psp4.12773)

## Model component
<dbs-pgx drug="salbutamol" model-id="Salbutamol_Courlet2022_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="salbutamol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F 1 | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | space_fold (0.95) | psp412773-tbl-0001:row2:col1, psp412773-fig-0001:caption | — | not captured |
| k a1 (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | [1] / [h] | not captured | llm (0.6) | psp412773-tbl-0001:row4:col1 | — | not captured |
| V 3 (L) | `Q77` · V3 | —(suppressed) | L | — | [l] | not captured | space_fold (0.95) | psp412773-tbl-0001:row6:col1, psp412773-tbl-0001:row6:col2, psp412773-tbl-0001:row6:col3, psp412773-tbl-0001:row6:col4 | — | not captured |
| k 34 (h−1) | `Q48` · kcomp | —(suppressed) | h−1 | — | [1] / [h] | not captured | space_fold (0.95) | psp412773-tbl-0001:row7:col1, psp412773-tbl-0001:row7:col2, psp412773-tbl-0001:row7:col3, psp412773-tbl-0001:row7:col4 | — | not captured |
| CL (L h−1) | `Q22` · CL | —(suppressed) | L h−1 | — | [l] / [h] | not captured | exact (1.0) | psp412773-tbl-0001:row8:col1, psp412773-tbl-0001:row8:col2, psp412773-tbl-0001:row8:col3, psp412773-tbl-0001:row8:col4 | — | not captured |
| Vd (L) | `Q61` · V | —(suppressed) | L | — | L | not captured | review_gapfill (0.7) | Marques_2024:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'logitF 2' — extend the ontology if this is a real PK parameter (source ['psp412773-tbl-0001:row3:col1'])
- dropped duplicate Q49 ('k a2 (h−1)', value '1.47') — already have one for this compound
- dropped unlinked row (NIL): 'UR_PROD (L h−1)' — extend the ontology if this is a real PK parameter (source ['psp412773-tbl-0001:row10:col1', 'psp412773-tbl-0001:row10:col3', 'psp412773-tbl-0001:row10:col4'])
- dropped unlinked row (NIL): 'θ physical,UR_PROD' — extend the ontology if this is a real PK parameter (source ['psp412773-tbl-0001:row11:col1', 'psp412773-tbl-0001:row11:col2', 'psp412773-tbl-0001:row11:col3'])
- dropped value-less row: 'F 2'
- dropped value-less row: 'k a1'
- dropped value-less row: 'k a2'
- dropped value-less row: 'k 34'
- dropped value-less row: 'k 30'
- dropped value-less row: 'V 3'
- dropped value-less row: 'V u'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salbutamol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q61 (V) from Marques_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412773-tbl-0001:row10:col2 = '4.8 × 10−6'
- unparsed cell psp412773-tbl-0001:row11:col4 = '−0.254 to −0.020'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412773-tbl-0001:row8:col1', 'psp412773-tbl-0001:row8:col2', 'psp412773-tbl-0001:row8:col3', 'psp412773-tbl-0001:row8:col4'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412773-tbl-0001:row7:col1', 'psp412773-tbl-0001:row7:col2', 'psp412773-tbl-0001:row7:col3', 'psp412773-tbl-0001:row7:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412773-tbl-0001:row4:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Marques_2024:review'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412773-tbl-0001:row6:col1', 'psp412773-tbl-0001:row6:col2', 'psp412773-tbl-0001:row6:col3', 'psp412773-tbl-0001:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28.0 | not captured | not captured | ['psp412773-tbl-0001:row8:col1', 'psp412773-tbl-0001:row8:col2', 'psp412773-tbl-0001:row8:col3', 'psp412773-tbl-0001:row8:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28 L/h | not captured | not captured | ['psp412773-tbl-0001:row8:col1', 'psp412773-tbl-0001:row8:col2', 'psp412773-tbl-0001:row8:col3', 'psp412773-tbl-0001:row8:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 167 L | not captured | not captured | ['Marques_2024:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=salbutamol) | C_central | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['kcomp'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_tmax | reference | fail | 0.17 | 0.29727858857199785 | 1.7487 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.8 | 0.29727858857199785 | 0.1652 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.45 | 0.29727858857199785 | 0.205 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_salbutamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Courlet_2022` / `Courlet_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_salbutamol/models/modelica/Salbutamol_Courlet2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_salbutamol/models/modelica/Salbutamol_Courlet2022_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_salbutamol/models/modelica/Salbutamol_Courlet2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_modelica.zip" download>Salbutamol_Courlet2022_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_fmi.zip" download>Salbutamol_Courlet2022_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_matlab.zip" download>Salbutamol_Courlet2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_matlab_simbio.zip" download>Salbutamol_Courlet2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_sbml.zip" download>Salbutamol_Courlet2022_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_cellml.zip" download>Salbutamol_Courlet2022_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference.svg" alt="Salbutamol_Courlet2022_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Salbutamol_Courlet2022_reference_params.json` · controls `Salbutamol_Courlet2022_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
