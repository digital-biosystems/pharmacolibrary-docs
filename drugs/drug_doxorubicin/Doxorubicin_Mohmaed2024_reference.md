# doxorubicin — `Doxorubicin_Mohmaed2024_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Mohmaed Ali MI; Nijstad AL; Boosman RJ; Crombag MBS; Barnett S; Veal GJ; et al. et al. (2024). Clinical pharmacokinetics 63
  ·  DOI: [10.1007/s40262-024-01445-5](https://doi.org/10.1007/s40262-024-01445-5)

## Model component
<dbs-pgx drug="doxorubicin" model-id="Doxorubicin_Mohmaed2024_reference" status="extracted" stale="false" population="patients across all age groups" measured-compound="doxorubicin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 44.2 | L/h | 1.2277777777777778e-05 | [l] / [h] | not captured | exact (1.0) | tab_1:row1:col1, tab_1:row1:col2, tab_1:row1:col3 | — | None (None% RSE) |
| V1 (L) | `Q63` · V1 | 11.6 | L | 0.0116 | [l] | not captured | exact (1.0) | tab_1:row2:col1, tab_1:row2:col2, tab_1:row2:col3 | — | None (None% RSE) |
| Q2 (L/h) | `Q30` · Q | 8.9 | L/h | 2.4722222222222222e-06 | [l] / [h] | not captured | special_case (0.95) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3 | — | not captured |
| Q3 (L/h) | `Q308` · Q3 | 43.9 | L/h | 1.2194444444444445e-05 | [l] / [h] | not captured | exact (1.0) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col3 | — | None (None% RSE) |
| V3 (L) | `Q77` · V3 | 898 | L | 0.898 | [l] | not captured | exact (1.0) | tab_1:row6:col1, tab_1:row6:col2, tab_1:row6:col3 | — | not captured |
| tlI2, min | `Q83` · tlag | 2.3 | min | 138.0 | h | not captured | review_gapfill (0.7) | Bérczi_1993:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'V2 (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'HILL'
- dropped value-less row: 'TM 50(elderly) on V3 (years)' (captured trailing unit 'years' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=doxorubicin
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Bérczi_1993's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row4:col2 = '16.3-33.5 18.2'
- unparsed cell tab_1:row9:col2 = '40.4-82.9 19.0'
- unparsed cell tab_1:row10:col2 = '49.4-62.1 11.9'
- unparsed cell tab_1:row11:col2 = '19.6-41.4 37.1'
- unparsed cell tab_1:row12:col2 = '2.9-46.3 125.2'
- unparsed cell tab_1:row13:col2 = '66.4-86.2 13.6'
- unparsed cell tab_1:row14:col2 = '22.2-27.6 11.3'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q22 | fail | 44.2 | 9.0 | 0.2036 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row1:col1', 'tab_1:row1:col2', 'tab_1:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Bérczi_1993:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 44.2 | not captured | not captured | ['tab_1:row1:col1', 'tab_1:row1:col2', 'tab_1:row1:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 44.2 L/h | not captured | not captured | ['tab_1:row1:col1', 'tab_1:row1:col2', 'tab_1:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.6 L | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_doxorubicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mohmaed_2024` / `Mohmaed_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_doxorubicin/Doxorubicin_Mohmaed2024_reference/Doxorubicin_Mohmaed2024_reference_modelica.zip" download>Doxorubicin_Mohmaed2024_reference_modelica.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_doxorubicin/Doxorubicin_Mohmaed2024_reference/Doxorubicin_Mohmaed2024_reference_fmi.zip" download>Doxorubicin_Mohmaed2024_reference_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_doxorubicin/Doxorubicin_Mohmaed2024_reference/Doxorubicin_Mohmaed2024_reference_matlab.zip" download>Doxorubicin_Mohmaed2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_doxorubicin/Doxorubicin_Mohmaed2024_reference/Doxorubicin_Mohmaed2024_reference_matlab_simbio.zip" download>Doxorubicin_Mohmaed2024_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_doxorubicin/Doxorubicin_Mohmaed2024_reference/Doxorubicin_Mohmaed2024_reference_sbml.zip" download>Doxorubicin_Mohmaed2024_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_doxorubicin/Doxorubicin_Mohmaed2024_reference/Doxorubicin_Mohmaed2024_reference_cellml.zip" download>Doxorubicin_Mohmaed2024_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
