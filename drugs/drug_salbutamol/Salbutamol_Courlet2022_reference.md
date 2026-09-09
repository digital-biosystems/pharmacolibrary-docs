# salbutamol — `Salbutamol_Courlet2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Courlet P; Buclin T; Biollaz J; Mazzoni I; Rabin O; Guidi M et al. (2022). CPT: pharmacometrics & systems pharmacology 11
  ·  DOI: [10.1002/psp4.12773](https://doi.org/10.1002/psp4.12773)

## Model component
<dbs-pgx drug="salbutamol" model-id="Salbutamol_Courlet2022_reference" status="extracted" stale="false" population="healthy adults" measured-compound="salbutamol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F 1 | `Q40` · Fab | 0.2 | not captured | not captured | not captured | not captured | llm (0.6) | psp412773-tbl-0001:row2:col1, psp412773-fig-0001:caption | — | not captured |
| k a1 (h−1) | `Q49` · kabs | 31.6 | h−1 | 0.008777777777777778 | [1] / [h] | not captured | llm (0.6) | psp412773-tbl-0001:row4:col1 | — | not captured |
| V 3 (L) | `Q77` · V3 | 203 | L | 0.203 | [l] | not captured | llm (0.6) | psp412773-tbl-0001:row6:col1, psp412773-tbl-0001:row6:col2, psp412773-tbl-0001:row6:col3, psp412773-tbl-0001:row6:col4 | — | not captured |
| k 34 (h−1) | `Q304` · k31 | 0.0432 | h−1 | 1.2e-05 | [1] / [h] | not captured | llm (0.6) | psp412773-tbl-0001:row7:col1, psp412773-tbl-0001:row7:col2, psp412773-tbl-0001:row7:col3, psp412773-tbl-0001:row7:col4 | — | not captured |
| CL (L h−1) | `Q22` · CL | 28 | L h−1 | 7.777777777777777e-06 | [l] / [h] | not captured | exact (1.0) | psp412773-tbl-0001:row8:col1, psp412773-tbl-0001:row8:col2, psp412773-tbl-0001:row8:col3, psp412773-tbl-0001:row8:col4 | — | not captured |
| UR_PROD (L h−1) | `Q24` · CLu | 0.0426 | L h−1 | 1.1833333333333333e-08 | [l] / [h] | not captured | llm (0.6) | psp412773-tbl-0001:row10:col1, psp412773-tbl-0001:row10:col3, psp412773-tbl-0001:row10:col4 | — | not captured |
| Vd (L) | `Q61` · V | 167.02 | L | 0.16702 | L | not captured | review_gapfill (0.7) | Marques_2024:review | — | not captured |

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
- dropped duplicate Q22 ('ω CL (CV%) b', value '37') — already have one for this compound
- dropped unlinked row (NIL): 'θ physical,UR_PROD' — extend the ontology if this is a real PK parameter (source ['psp412773-tbl-0001:row11:col1', 'psp412773-tbl-0001:row11:col2', 'psp412773-tbl-0001:row11:col3'])
- routed 'ω UR_PRODuncorrected (CV%) b' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω UR_PRODcorrected (CV%) b' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
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
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412773-tbl-0001:row10:col2 = '4.8 × 10−6'
- unparsed cell psp412773-tbl-0001:row11:col4 = '−0.254 to −0.020'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412773-tbl-0001:row8:col1', 'psp412773-tbl-0001:row8:col2', 'psp412773-tbl-0001:row8:col3', 'psp412773-tbl-0001:row8:col4'] |
| C5_dimension_Q24 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412773-tbl-0001:row10:col1', 'psp412773-tbl-0001:row10:col3', 'psp412773-tbl-0001:row10:col4'] |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412773-tbl-0001:row7:col1', 'psp412773-tbl-0001:row7:col2', 'psp412773-tbl-0001:row7:col3', 'psp412773-tbl-0001:row7:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412773-tbl-0001:row4:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Marques_2024:review'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412773-tbl-0001:row6:col1', 'psp412773-tbl-0001:row6:col2', 'psp412773-tbl-0001:row6:col3', 'psp412773-tbl-0001:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28.0 | not captured | not captured | ['psp412773-tbl-0001:row8:col1', 'psp412773-tbl-0001:row8:col2', 'psp412773-tbl-0001:row8:col3', 'psp412773-tbl-0001:row8:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28 L/h | not captured | not captured | ['psp412773-tbl-0001:row8:col1', 'psp412773-tbl-0001:row8:col2', 'psp412773-tbl-0001:row8:col3', 'psp412773-tbl-0001:row8:col4'] |
| C9_phys_window_Q24 | pass | clearance within physiological range | 0.0426 L/h | not captured | not captured | ['psp412773-tbl-0001:row10:col1', 'psp412773-tbl-0001:row10:col3', 'psp412773-tbl-0001:row10:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 167 L | not captured | not captured | ['Marques_2024:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_salbutamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Courlet_2022` / `Courlet_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_modelica.zip" download>Salbutamol_Courlet2022_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_fmi.zip" download>Salbutamol_Courlet2022_reference_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_matlab.zip" download>Salbutamol_Courlet2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_matlab_simbio.zip" download>Salbutamol_Courlet2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_sbml.zip" download>Salbutamol_Courlet2022_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Courlet2022_reference/Salbutamol_Courlet2022_reference_cellml.zip" download>Salbutamol_Courlet2022_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
