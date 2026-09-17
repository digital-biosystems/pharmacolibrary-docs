<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;vancomycin&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/&quot;},{&quot;label&quot;:&quot;Yoon_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vancomycin_Goyal2022_final_pk_model&quot;,&quot;label&quot;:&quot;Goyal_2022_final_pk_model&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Goyal2022_final_pk_model.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vancomycin_Goyal2022_final_pk_model&quot;,&quot;label&quot;:&quot;Goyal_2022_final_pk_model&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Goyal2022_final_pk_model.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vancomycin_Goyal2022_population_typical_value&quot;,&quot;label&quot;:&quot;Goyal_2022_population_typical_value&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Goyal2022_population_typical_value.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vancomycin_Goyal2022_population_typical_value&quot;,&quot;label&quot;:&quot;Goyal_2022_population_typical_value&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Goyal2022_population_typical_value.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vancomycin_Yoon2023_reference&quot;,&quot;label&quot;:&quot;Yoon_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Yoon2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Vancomycin_Goyal2022_formula&quot;,&quot;label&quot;:&quot;Goyal_2022_formula&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Goyal2022_formula.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vancomycin_Goyal2022_formula&quot;,&quot;label&quot;:&quot;Goyal_2022_formula&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Goyal2022_formula.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vancomycin — `Vancomycin_Yoon2023_reference`

> ## <span class="pk-badge pk-badge--green">accepted (caveats)</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `kel`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Advisory only — the base model still replicates.
3. Check the record's covariate_definitions in _interpretv2.yaml.
4. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Yoon S; Guk J; Lee SG; Chae D; Kim JH; Park K et al. (2023). Frontiers in pharmacology 14
  ·  DOI: [10.3389/fphar.2023.1252757](https://doi.org/10.3389/fphar.2023.1252757)

## Model component
<dbs-pgx drug="vancomycin" model-id="Vancomycin_Yoon2023_reference" status="accepted_with_caveats" stale="false" population="patients with infections" measured-compound="vancomycin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ CL (L/h) | `Q22` · CL | 4.32 | L/h | 1.2e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | T3:row2:col1 | — | 29.1 (None% RSE) |
| θ V (L) | `Q61` · V | 38.6 | L | 0.0386 | [l] | not captured | llm (0.6) | T3:row3:col1 | — | not captured |
| θ Q (L/h) | `Q30` · Q | 3.93 | L/h | 1.0916666666666667e-06 | [l] / [h] | not captured | llm (0.6) | T3:row4:col1 | — | not captured |
| θ V2 (L) | `Q64` · V2 | 66.8 | L | 0.0668 | [l] | not captured | llm_confirmed (0.6) | T3:row5:col1 | — | 101 (None% RSE) |
| λ | `Q47` · kel | 0.655 | Creatinine clearance related parameter | not captured | [creatinineclearancerelatedparameter] | not captured | exact (1.0) | T3:row9:col1 | — | not captured |
| θREN | `Q900` · θREN | -0.237 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θFEM | `Q900` · θFEM | -0.199 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θDM | `Q900` · θDM | -0.151 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12']

**Interpretation flags:**
- dropped unlinked row (NIL): 'kCr (if age ≥30) (yr-1)' — extend the ontology if this is a real PK parameter (source ['T3:row7:col1'])
- dropped unlinked row (NIL): 'kCr (if age &lt;30) (yr-1)' — extend the ontology if this is a real PK parameter (source ['T3:row8:col1'])
- unit_dimension_unknown: 'Creatinine clearance related parameter' (kel)
- dropped unlinked row (NIL): 'PMA50' — extend the ontology if this is a real PK parameter (source ['T3:row11:col1'])
- dropped unlinked row (NIL): 'γ' — extend the ontology if this is a real PK parameter (source ['T3:row12:col1'])
- dropped unlinked row (NIL): 'ktox (day-1)' — extend the ontology if this is a real PK parameter (source ['T3:row14:col1'])
- dropped unlinked row (NIL): 'kV' — extend the ontology if this is a real PK parameter (source ['T3:row16:col1'])
- dropped unlinked row (NIL): 'kBUN' — extend the ontology if this is a real PK parameter (source ['T3:row17:col1'])
- kept covariate coefficient θREN=-0.237 (covariate REN) — not an ontology parameter
- kept covariate coefficient θFEM=-0.199 (covariate FEM) — not an ontology parameter
- kept covariate coefficient θDM=-0.151 (covariate DM) — not an ontology parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vancomycin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row4:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.32 | not captured | not captured | ['T3:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.32 L/h | not captured | not captured | ['T3:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 38.6 L | not captured | not captured | ['T3:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 66.8 L | not captured | not captured | ['T3:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_output_variable | not captured | pass | C_central (measured=vancomycin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vancomycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yoon_2023` / `Yoon_2023::reference`)
- model: `../../../knowledgebase/drugs/drug_vancomycin/models/modelica/Vancomycin_Yoon2023_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_vancomycin/models/modelica/Vancomycin_Yoon2023_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_vancomycin/models/modelica/Vancomycin_Yoon2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_modelica.zip" download>Vancomycin_Yoon2023_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_matlab.zip" download>Vancomycin_Yoon2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_matlab_simbio.zip" download>Vancomycin_Yoon2023_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_sbml.zip" download>Vancomycin_Yoon2023_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_cellml.zip" download>Vancomycin_Yoon2023_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference.svg" alt="Vancomycin_Yoon2023_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Vancomycin_Yoon2023_reference_params.json` · controls `Vancomycin_Yoon2023_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
