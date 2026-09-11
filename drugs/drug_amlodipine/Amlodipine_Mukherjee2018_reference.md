# amlodipine — `Amlodipine_Mukherjee2018_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Mukherjee D; Zha J; Menon RM; Shebley M et al. (2018). Journal of pharmacokinetics and pharmacodynamics 45
  ·  DOI: [10.1007/s10928-018-9574-0](https://doi.org/10.1007/s10928-018-9574-0)

## Model component
<dbs-pgx drug="amlodipine" model-id="Amlodipine_Mukherjee2018_reference" status="extracted" stale="false" population="healthy adults" measured-compound="amlodipine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t1/2 (h) | `Q57` · t1/2z | 1.12 | h | 4032.0000000000005 | [h] | not captured | exact (1.0) | Tab4:row2:col1, Tab4:row2:col2, Tab4:row2:col3, Tab4:row6:col1, Tab4:row6:col2, Tab4:row6:col3 | — | not captured |
| Cmax (ng/mL) | `Q32` · Cmax | 0.92 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Tab4:row4:col1, Tab4:row4:col2, Tab4:row4:col3 | — | not captured |
| Tmax (hr.) | `Q56` · tmax | 0.8 | hr. | not captured | [h] | not captured | exact (1.0) | Tab4:row5:col1, Tab4:row5:col2, Tab4:row5:col3 | — | not captured |
| F (%) | `Q40` · Fab | 1.04 | not captured | not captured | not captured | not captured | exact (1.0) | Tab4:row7:col1, Tab4:row7:col2, Tab4:row7:col3 | — | not captured |
| AUC24 ratio | `Q21` · AUC ratio | 1.0 | not captured | not captured | not captured | not captured | fuzzy (0.9) | Tab4:row9:col1, Tab4:row9:col2, Tab4:row9:col3 | — | not captured |
| AUC∞ ratio | `Q17` · AUC∞ | 0.89 | not captured | not captured | not captured | not captured | boundary (0.8) | Tab4:row11:col3 | — | not captured |
| clearance | `Q22` · CL | 2.3 | mL/min | 3.8333333333333326e-08 | L/h | not captured | review_gapfill (0.7) | Angeloni_2016:review | — | not captured |
| volume of distribution | `Q61` · V | 980.0 | L | 0.98 | L | not captured | review_gapfill (0.7) | Courlet_2021:review | — | not captured |
| Ka (h-1) | `Q49` · kabs | 1.46 | h-1 | 0.00040555555555555554 | 1/h | not captured | review_gapfill (0.7) | Chen_2024:review | — | not captured |
| ALAG | `Q83` · tlag | 0.86 | h | 3096.0 | h | not captured | review_gapfill (0.7) | Courlet_2021:review | — | not captured |
| CYP2D6 | `Q900` · CYP2D6 | {'G/A': -0.2, 'G/G': 0.0, 'IM': -0.0542, 'NM': -0.0082, 'PM': -0.0853, 'UM': 0.0709} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A1 | `Q900` · SLC22A1 | {'G/A': -0.2, 'G/G': 0.0, 'IM': -0.0542, 'NM': -0.0082, 'PM': -0.0853, 'UM': 0.0709} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Faulkner et al. (IV) [32]' — extend the ontology if this is a real PK parameter (source ['Tab4:row1:col2', 'Tab4:row1:col3', 'Tab4:row1:col4'])
- dropped unlinked row (NIL): 'Faulkner et al. (oral) [32]' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col2', 'Tab4:row3:col3', 'Tab4:row3:col4'])
- dropped unlinked row (NIL): 'Glesby et al.a (DDI) [11]' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col2', 'Tab4:row8:col3', 'Tab4:row8:col4'])
- dropped unlinked row (NIL): 'Menon et al.b (DDI) [12]' — extend the ontology if this is a real PK parameter (source ['Tab4:row10:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amlodipine
- gap-filled Q22 (CL) from Angeloni_2016's review values (primary lacked it)
- gap-filled Q61 (V) from Courlet_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Chen_2024's review values (primary lacked it)
- gap-filled Q83 (tlag) from Courlet_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab4:row10:col2 = '1.42 (1.39-1.45)'
- unparsed cell Tab4:row10:col3 = '1.26 (1.11-1.44)'
- unparsed cell Tab4:row11:col1 = '2.28 (2.19-2.38)'
- unparsed cell Tab4:row11:col2 = '2.57 (2.31-2.86)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Angeloni_2016:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab4:row4:col1', 'Tab4:row4:col2', 'Tab4:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Chen_2024:review'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Tab4:row5:col1', 'Tab4:row5:col2', 'Tab4:row5:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab4:row2:col1', 'Tab4:row2:col2', 'Tab4:row2:col3', 'Tab4:row6:col1', 'Tab4:row6:col2', 'Tab4:row6:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Courlet_2021:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Courlet_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.3 | not captured | not captured | ['Angeloni_2016:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.138 L/h | not captured | not captured | ['Angeloni_2016:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 980 L | not captured | not captured | ['Courlet_2021:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amlodipine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mukherjee_2018` / `Mukherjee_2018::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amlodipine/Amlodipine_Mukherjee2018_reference/Amlodipine_Mukherjee2018_reference_modelica.zip" download>Amlodipine_Mukherjee2018_reference_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amlodipine/Amlodipine_Mukherjee2018_reference/Amlodipine_Mukherjee2018_reference_fmi.zip" download>Amlodipine_Mukherjee2018_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Mukherjee2018_reference/Amlodipine_Mukherjee2018_reference_matlab.zip" download>Amlodipine_Mukherjee2018_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Mukherjee2018_reference/Amlodipine_Mukherjee2018_reference_matlab_simbio.zip" download>Amlodipine_Mukherjee2018_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Mukherjee2018_reference/Amlodipine_Mukherjee2018_reference_sbml.zip" download>Amlodipine_Mukherjee2018_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amlodipine/Amlodipine_Mukherjee2018_reference/Amlodipine_Mukherjee2018_reference_cellml.zip" download>Amlodipine_Mukherjee2018_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
