# methotrexate — `Methotrexate_Wei2025_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Wei S; Zhang S; Wang D; Zhang D; Lu Q; Mo J; et al. et al. (2025). Frontiers in pharmacology 16
  ·  DOI: [10.3389/fphar.2025.1578033](https://doi.org/10.3389/fphar.2025.1578033)

## Model component
<dbs-pgx drug="methotrexate" model-id="Methotrexate_Wei2025_reference" status="extracted" stale="false" population="adult patients with primary central nervous system lymphoma" measured-compound="methotrexate" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 8.50 | L/h | 2.361111111111111e-06 | [l] / [h] | not captured | exact (1.0) | tab_3:row2:col1, tab_3:row2:col3, tab_3:row2:col5, tab_3:row2:col7 | — | 26.81 (None% RSE) |
| Q 1 (L/h) | `Q30` · Q | 0.04 | L/h | 1.1111111111111112e-08 | [l] / [h] | not captured | llm (0.5) | tab_3:row3:col1, tab_3:row3:col3, tab_3:row3:col5, tab_3:row3:col7 | — | 99.92 (None% RSE) |
| Vc (L) | `Q63` · V1 | 33.52 | L | 0.03352 | [l] | not captured | exact (1.0) | tab_3:row5:col1, tab_3:row5:col3, tab_3:row5:col5, tab_3:row5:col7 | — | 21.26 (None% RSE) |
| V P2 (L) | `Q61` · V | 1.15 | L | 0.00115 | [l] | not captured | llm (0.5) | tab_3:row7:col1, tab_3:row7:col3, tab_3:row7:col5, tab_3:row7:col7 | — | not captured |
| σ (proportional) | `Q316` · prop_error | 73.75 | proportional | not captured | [proportional] | not captured | llm (0.5) | tab_3:row18:col1, tab_3:row18:col3, tab_3:row18:col5, tab_3:row18:col7 | — | not captured |
| V2 | `Q64` · V2 | 5.32 | L | 0.00532 | L | not captured | review_gapfill (0.7) | Blackman_2026:review | — | not captured |
| absorption rate constant | `Q49` · kabs | 0.268 | day−1 | 3.101851851851852e-06 | 1/h | not captured | review_gapfill (0.7) | Pan_2026:review | — | not captured |
| t lag,oral | `Q83` · tlag | 0.36 | hour | 1296.0 | h | not captured | review_gapfill (0.7) | Tan_2024:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped duplicate Q30 ('Q 2 (L/h)', value '0.09') — already have one for this compound
- dropped duplicate Q63 ('V P1 (L)', value '18.32') — already have one for this compound
- dropped unlinked row (NIL): 'θ eGFR' — extend the ontology if this is a real PK parameter (source ['tab_3:row8:col1', 'tab_3:row8:col3', 'tab_3:row8:col5', 'tab_3:row8:col7'])
- dropped unlinked row (NIL): 'Θ BUN' — extend the ontology if this is a real PK parameter (source ['tab_3:row9:col1', 'tab_3:row9:col3', 'tab_3:row9:col5', 'tab_3:row9:col7'])
- dropped unlinked row (NIL): 'θ ALT' — extend the ontology if this is a real PK parameter (source ['tab_3:row10:col1', 'tab_3:row10:col3', 'tab_3:row10:col5', 'tab_3:row10:col7'])
- dropped unlinked row (NIL): 'θ TP' — extend the ontology if this is a real PK parameter (source ['tab_3:row11:col1', 'tab_3:row11:col5', 'tab_3:row11:col7'])
- dropped unlinked row (NIL): 'θ ABCC4-ABCG2-ADORA2A' — extend the ontology if this is a real PK parameter (source ['tab_3:row12:col7'])
- unit_dimension_unknown: 'proportional' (prop_error)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methotrexate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q64 (V2) from Blackman_2026's review values (primary lacked it)
- gap-filled Q49 (kabs) from Pan_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Tan_2024's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_3:row2:col2 = '(7.75, 8.66)'
- unparsed cell tab_3:row2:col4 = '(7.15, 9.39)'
- unparsed cell tab_3:row2:col6 = '(7.95, 8.94)'
- unparsed cell tab_3:row2:col8 = '(7.38, 9.71)'
- unparsed cell tab_3:row3:col2 = '(0.03, 0.05)'
- unparsed cell tab_3:row3:col4 = '(0.03, 0.05)'
- unparsed cell tab_3:row3:col6 = '(0.03, 0.05)'
- unparsed cell tab_3:row3:col8 = '(0.03, 0.05)'
- unparsed cell tab_3:row4:col2 = '(0.08, 0.10)'
- unparsed cell tab_3:row4:col4 = '(0.07, 0.11)'
- unparsed cell tab_3:row4:col6 = '(0.08, 0.10)'
- unparsed cell tab_3:row4:col8 = '(0.07, 0.11)'
- unparsed cell tab_3:row5:col2 = '(31.09, 35.69)'
- unparsed cell tab_3:row5:col4 = '(27.53, 39.82)'
- unparsed cell tab_3:row5:col6 = '(31.00, 35.57)'
- unparsed cell tab_3:row5:col8 = '(27.7, 40.44)'
- unparsed cell tab_3:row6:col2 = '(13.86, 21.94)'
- unparsed cell tab_3:row6:col4 = '(12.58, 28.03)'
- unparsed cell tab_3:row6:col6 = '(13.84, 21.87)'
- unparsed cell tab_3:row6:col8 = '(11.77, 30.67)'
- unparsed cell tab_3:row7:col2 = '(1.04, 1.23)'
- unparsed cell tab_3:row7:col4 = '(0.93, 1.36)'
- unparsed cell tab_3:row7:col6 = '(1.04, 1.24)'
- unparsed cell tab_3:row7:col8 = '(0.96, 1.37)'
- unparsed cell tab_3:row8:col2 = '(0.65, 0.70)'
- unparsed cell tab_3:row8:col4 = '(0.54, 0.84)'
- unparsed cell tab_3:row8:col6 = '(0.64, 0.70)'
- unparsed cell tab_3:row8:col8 = '(0.56, 0.85)'
- unparsed cell tab_3:row9:col2 = '(-0.09, -0.06)'
- unparsed cell tab_3:row9:col4 = '(-0.14, -0.03)'
- unparsed cell tab_3:row9:col6 = '(-0.09, -0.06)'
- unparsed cell tab_3:row9:col8 = '(-0.13, -0.02)'
- unparsed cell tab_3:row10:col2 = '(0.02, 0.03)'
- unparsed cell tab_3:row10:col4 = '(0, 0.05)'
- unparsed cell tab_3:row10:col6 = '(0.02, 0.03)'
- unparsed cell tab_3:row10:col8 = '(0.00, 0.05)'
- unparsed cell tab_3:row11:col2 = '(-1.96, -1.41)'
- unparsed cell tab_3:row11:col3 = '-1.64 (-37.89)'
- unparsed cell tab_3:row11:col4 = '(-2.97, -0.5)'
- unparsed cell tab_3:row11:col6 = '(-1.99, -1.44)'
- unparsed cell tab_3:row11:col8 = '(-3.30, -0.31)'
- unparsed cell tab_3:row12:col5 = '-0.09 (-30.63)'
- unparsed cell tab_3:row12:col6 = '(-0.14, -0.03)'
- unparsed cell tab_3:row12:col8 = '(-0.13, -0.04)'
- unparsed cell tab_3:row18:col2 = '(72.24, 75.35)'
- unparsed cell tab_3:row18:col4 = '(69.49, 77.89)'
- unparsed cell tab_3:row18:col6 = '(72.24, 75.34)'
- unparsed cell tab_3:row18:col8 = '(69.66, 78.42)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col3', 'tab_3:row2:col5', 'tab_3:row2:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row3:col1', 'tab_3:row3:col3', 'tab_3:row3:col5', 'tab_3:row3:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Pan_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row7:col1', 'tab_3:row7:col3', 'tab_3:row7:col5', 'tab_3:row7:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row5:col1', 'tab_3:row5:col3', 'tab_3:row5:col5', 'tab_3:row5:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Blackman_2026:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tan_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.5 | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col3', 'tab_3:row2:col5', 'tab_3:row2:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.5 L/h | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col3', 'tab_3:row2:col5', 'tab_3:row2:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.15 L | not captured | not captured | ['tab_3:row7:col1', 'tab_3:row7:col3', 'tab_3:row7:col5', 'tab_3:row7:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 33.5 L | not captured | not captured | ['tab_3:row5:col1', 'tab_3:row5:col3', 'tab_3:row5:col5', 'tab_3:row5:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.32 L | not captured | not captured | ['Blackman_2026:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_methotrexate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wei_2025` / `Wei_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_modelica.zip" download>Methotrexate_Wei2025_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_fmi.zip" download>Methotrexate_Wei2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_matlab.zip" download>Methotrexate_Wei2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_matlab_simbio.zip" download>Methotrexate_Wei2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_sbml.zip" download>Methotrexate_Wei2025_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_cellml.zip" download>Methotrexate_Wei2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
