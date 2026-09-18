<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;clarithromycin&quot;,&quot;href&quot;:&quot;drugs/drug_clarithromycin/&quot;},{&quot;label&quot;:&quot;Shah_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clarithromycin_Shah2025_reference&quot;,&quot;label&quot;:&quot;Shah_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clarithromycin — `Clarithromycin_Shah2025_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
Shah RV; Kipper K; Baker EH; Barker CIS; Oldfield I; Davidson HC; et al. et al. (2025). Antibiotics (Basel, Switzerland) 14
  ·  DOI: [10.3390/antibiotics14060559](https://doi.org/10.3390/antibiotics14060559)

## Model component
<dbs-pgx drug="clarithromycin" model-id="Clarithromycin_Shah2025_reference" status="curated_candidate" stale="false" population="critically ill adults" measured-compound="clarithromycin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θCL (L/h/70 kg) | `Q22` · CL | 8.17 | L/h/70 kg | 2.2694444444444446e-06 | [l] / [[h] · [70kg]] | 17 | llm_confirmed (0.6) | antibiotics-14-00559-t002:row2:col1, antibiotics-14-00559-t002:row2:col2, antibiotics-14-00559-t002:row2:col3 | — | not captured |
| θV1 (L/70 kg) | `Q61` · V | 25.7 | L/70 kg | 0.0257 | [l] / [70kg] | 29 | llm_confirmed (0.6) | antibiotics-14-00559-t002:row3:col1, antibiotics-14-00559-t002:row3:col2, antibiotics-14-00559-t002:row3:col3 | — | not captured |
| θQ (L/h/70 kg) | `Q30` · Q | 62.0 | L/h/70 kg | 1.7222222222222224e-05 | [l] / [[h] · [70kg]] | 18 | llm (0.6) | antibiotics-14-00559-t002:row4:col1, antibiotics-14-00559-t002:row4:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'θV2 (L/h/70 kg)' — extend the ontology if this is a real PK parameter (source ['antibiotics-14-00559-t002:row5:col1', 'antibiotics-14-00559-t002:row5:col2', 'antibiotics-14-00559-t002:row5:col3'])
- dropped duplicate Q22 ('η2 CL', value '0.53') — already have one for this compound
- dropped duplicate Q63 ('η2 V1', value '1.55') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clarithromycin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'θV1 (L/70 kg)' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell antibiotics-14-00559-t002:row2:col4 = '7.8 (5.6–10.7)'
- unparsed cell antibiotics-14-00559-t002:row3:col4 = '25.3 (5.4–45.0)'
- unparsed cell antibiotics-14-00559-t002:row4:col4 = '62.4 (43.4–112.5)'
- unparsed cell antibiotics-14-00559-t002:row5:col4 = '62.0 (44.7–108.0)'
- unparsed cell antibiotics-14-00559-t002:row7:col4 = '0.51 (0.21–0.87)'
- unparsed cell antibiotics-14-00559-t002:row8:col4 = '1.58 (0.15–7.95)'
- unparsed cell antibiotics-14-00559-t002:row10:col4 = '0.0317 (0.0161–0.0553)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['antibiotics-14-00559-t002:row2:col1', 'antibiotics-14-00559-t002:row2:col2', 'antibiotics-14-00559-t002:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['antibiotics-14-00559-t002:row4:col1', 'antibiotics-14-00559-t002:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['antibiotics-14-00559-t002:row3:col1', 'antibiotics-14-00559-t002:row3:col2', 'antibiotics-14-00559-t002:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.17 | not captured | not captured | ['antibiotics-14-00559-t002:row2:col1', 'antibiotics-14-00559-t002:row2:col2', 'antibiotics-14-00559-t002:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.17 L/h | not captured | not captured | ['antibiotics-14-00559-t002:row2:col1', 'antibiotics-14-00559-t002:row2:col2', 'antibiotics-14-00559-t002:row2:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 25.7 L | not captured | not captured | ['antibiotics-14-00559-t002:row3:col1', 'antibiotics-14-00559-t002:row3:col2', 'antibiotics-14-00559-t002:row3:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=clarithromycin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clarithromycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Shah_2025` / `Shah_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_clarithromycin/models/modelica/Clarithromycin_Shah2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_clarithromycin/models/modelica/Clarithromycin_Shah2025_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_clarithromycin/models/modelica/Clarithromycin_Shah2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference/Clarithromycin_Shah2025_reference_modelica.zip" download>Clarithromycin_Shah2025_reference_modelica.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference/Clarithromycin_Shah2025_reference_matlab.zip" download>Clarithromycin_Shah2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference/Clarithromycin_Shah2025_reference_matlab_simbio.zip" download>Clarithromycin_Shah2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference/Clarithromycin_Shah2025_reference_sbml.zip" download>Clarithromycin_Shah2025_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference/Clarithromycin_Shah2025_reference_cellml.zip" download>Clarithromycin_Shah2025_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference/Clarithromycin_Shah2025_reference.svg" alt="Clarithromycin_Shah2025_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference/Clarithromycin_Shah2025_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference/Clarithromycin_Shah2025_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C` · parameters `Clarithromycin_Shah2025_reference_params.json` · controls `Clarithromycin_Shah2025_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
