# simvastatin — `Simvastatin_Kim2021_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge; the simulated model does not reproduce a value the paper reports. Evidence: T1_cmax — expected 2.8769999999999997e-05 — got 0.0007000326755810216 — ratio 24.332; T1_cmax — expected 0.00011395999999999999 — got 0.0007000326755810216 — ratio 6.1428; T1_t_half_terminal — expected 6.77 — got 3.5883313004651174 — ratio 0.53; T1_t_half_terminal — expected 2.62 — got 3.5883313004651174 — ratio 1.3696

**Steps:**
1. No curator action. Run the engineer for this drug.
2. Open the paper's reported table and confirm the target value and its units.
3. Compare with the transcribed value in _transcribev2.yaml for this stem.
4. If the transcription is right, the extracted parameters are suspect — check CL and volume in _interpretv2.yaml against the paper.
5. If the transcription is wrong, fix the extraction; the model rebuild follows.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Kim MS; Baek IH et al. (2021). Journal of veterinary pharmacology and therapeutics 44
  ·  DOI: [10.1111/jvp.12944](https://doi.org/10.1111/jvp.12944)

## Model component
<dbs-pgx drug="simvastatin" model-id="Simvastatin_Kim2021_reference" status="not_modelled" stale="false" population="beagle dogs" measured-compound="simvastatin" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h-1) | `Q49` · kabs | —(suppressed) | h-1 | — | [1] / [h] | not captured | exact (1.0) | Kim_2021_table_p4_2:row2:col1, Kim_2021_table_p4_2:row2:col2, Kim_2021_table_p4_2:row2:col4, Kim_2021_table_p4_2:row2:col5 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | Kim_2021_table_p4_2:row3:col1, Kim_2021_table_p4_2:row3:col2, Kim_2021_table_p4_2:row3:col4, Kim_2021_table_p4_2:row3:col5 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | —(suppressed) | L | — | [l] | not captured | exact (1.0) | Kim_2021_table_p4_2:row4:col1, Kim_2021_table_p4_2:row4:col2, Kim_2021_table_p4_2:row4:col4, Kim_2021_table_p4_2:row4:col5 | — | not captured |
| Q/F ( L/h) | `Q69` · Q/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | Kim_2021_table_p4_2:row5:col1, Kim_2021_table_p4_2:row5:col2, Kim_2021_table_p4_2:row5:col4, Kim_2021_table_p4_2:row5:col5 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | —(suppressed) | L | — | [l] | not captured | exact (1.0) | Kim_2021_table_p4_2:row6:col1, Kim_2021_table_p4_2:row6:col2, Kim_2021_table_p4_2:row6:col4, Kim_2021_table_p4_2:row6:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'CovCL/F-Vc/F (CV%)' — extend the ontology if this is a real PK parameter (source ['Kim_2021_table_p4_2:row11:col1', 'Kim_2021_table_p4_2:row11:col2', 'Kim_2021_table_p4_2:row11:col4', 'Kim_2021_table_p4_2:row11:col5'])
- dropped unlinked row (NIL): 'Proportional (%)' — extend the ontology if this is a real PK parameter (source ['Kim_2021_table_p4_2:row13:col1', 'Kim_2021_table_p4_2:row13:col2', 'Kim_2021_table_p4_2:row13:col3', 'Kim_2021_table_p4_2:row13:col4', 'Kim_2021_table_p4_2:row13:col5'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=simvastatin
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kim_2021_table_p4_2:row3:col1', 'Kim_2021_table_p4_2:row3:col2', 'Kim_2021_table_p4_2:row3:col4', 'Kim_2021_table_p4_2:row3:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kim_2021_table_p4_2:row4:col1', 'Kim_2021_table_p4_2:row4:col2', 'Kim_2021_table_p4_2:row4:col4', 'Kim_2021_table_p4_2:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Kim_2021_table_p4_2:row2:col1', 'Kim_2021_table_p4_2:row2:col2', 'Kim_2021_table_p4_2:row2:col4', 'Kim_2021_table_p4_2:row2:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kim_2021_table_p4_2:row5:col1', 'Kim_2021_table_p4_2:row5:col2', 'Kim_2021_table_p4_2:row5:col4', 'Kim_2021_table_p4_2:row5:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kim_2021_table_p4_2:row6:col1', 'Kim_2021_table_p4_2:row6:col2', 'Kim_2021_table_p4_2:row6:col4', 'Kim_2021_table_p4_2:row6:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 292 L/h | not captured | not captured | ['Kim_2021_table_p4_2:row3:col1', 'Kim_2021_table_p4_2:row3:col2', 'Kim_2021_table_p4_2:row3:col4', 'Kim_2021_table_p4_2:row3:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.06e+03 L | not captured | not captured | ['Kim_2021_table_p4_2:row4:col1', 'Kim_2021_table_p4_2:row4:col2', 'Kim_2021_table_p4_2:row4:col4', 'Kim_2021_table_p4_2:row4:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.06e+03 L | not captured | not captured | ['Kim_2021_table_p4_2:row6:col1', 'Kim_2021_table_p4_2:row6:col2', 'Kim_2021_table_p4_2:row6:col4', 'Kim_2021_table_p4_2:row6:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=simvastatin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | fail | 2.8769999999999997e-05 | 0.0007000326755810216 | 24.332 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00011395999999999999 | 0.0007000326755810216 | 6.1428 | ng/ ml→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 1.44 | 0.0007000326755810216 | not captured | unresolved concentration unit (exp 'ng ml -1 mg -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.42 | 0.0007000326755810216 | not captured | unresolved concentration unit (exp 'ng ml -1 mg -1', sim 'kg/m3') |
| T1_cmax | reference | fail | 2.8769999999999997e-05 | 0.0007000326755810216 | 24.332 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00011395999999999999 | 0.0007000326755810216 | 6.1428 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.4299999999999999e-06 | 0.0007000326755810216 | 489.5333 | ng/ml→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | fail | 6.77 | 3.5883313004651174 | 0.53 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.62 | 3.5883313004651174 | 1.3696 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.62 | 3.5883313004651174 | 1.3696 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 6.77 | 3.5883313004651174 | 0.53 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 4.7 | 3.5883313004651174 | 0.7635 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.58 | 17.083327468800476 | 10.8122 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.25 | 17.083327468800476 | 13.6667 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.41 | 17.083327468800476 | 12.1158 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_simvastatin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2021` / `Kim_2021::beagle dogs`)
- sim: `../../../knowledgebase/drugs/drug_simvastatin/models/modelica/Simvastatin_Kim2021_beagle_dogs.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_simvastatin/Simvastatin_Kim2021_reference/Simvastatin_Kim2021_reference_modelica.zip" download>Simvastatin_Kim2021_reference_modelica.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_simvastatin/Simvastatin_Kim2021_reference/Simvastatin_Kim2021_reference_fmi.zip" download>Simvastatin_Kim2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_simvastatin/Simvastatin_Kim2021_reference/Simvastatin_Kim2021_reference_matlab.zip" download>Simvastatin_Kim2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_simvastatin/Simvastatin_Kim2021_reference/Simvastatin_Kim2021_reference_matlab_simbio.zip" download>Simvastatin_Kim2021_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_simvastatin/Simvastatin_Kim2021_reference/Simvastatin_Kim2021_reference_sbml.zip" download>Simvastatin_Kim2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_simvastatin/Simvastatin_Kim2021_reference/Simvastatin_Kim2021_reference_cellml.zip" download>Simvastatin_Kim2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
