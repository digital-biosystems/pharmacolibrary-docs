# exenatide — `Exenatide_Cirincione2017_combined_single_and_multiple_dose_m`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Cirincione_2017)

## Model component
<dbs-pgx drug="exenatide" model-id="Exenatide_Cirincione2017_combined_single_and_multiple_dose_m" status="rejected" stale="false" population="patients with type 2 diabetes mellitus" measured-compound="exenatide" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (1/day) | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Cirincione_2017_table_p6_1:row0:col5 | — | not captured |
| CLint (L/day) | `Q3` · CLint | —(suppressed) | L/day | — | [l] / [d] | not captured | exact (1.0) | Cirincione_2017_table_p6_1:row1:col5 | — | not captured |
| Vcint (L) | `Q61` · V | —(suppressed) | L | — | [l] | not captured | llm (0.6) | Cirincione_2017_table_p6_1:row2:col5 | — | not captured |
| f1 (%) | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Cirincione_2017_table_p6_1:row3:col5 | — | not captured |
| ktr1 (1/day) | `Q306` · ktr | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Cirincione_2017_table_p6_1:row8:col5 | — | not captured |
| cl_egfr | `Q900` · cl_egfr | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Cirincione_2017_table_p6_1:row13:col5 | — | not captured |
| Km (pg/mL) | `Q1` · Km | —(suppressed) | pg/mL | — | [pg] / [ml] | not captured | exact (1.0) | Cirincione_2017_table_p6_1:row14:col5 | — | not captured |
| Vmax (mg/day) | `Q66` · Vmax | —(suppressed) | mg/day | — | [mg] / [d] | not captured | exact (1.0) | Cirincione_2017_table_p6_1:row15:col5 | — | not captured |
| CLd (L/day) | `Q30` · Q | —(suppressed) | L/day | — | [l] / [d] | not captured | exact (1.0) | Cirincione_2017_table_p6_1:row16:col5 | — | not captured |
| VP (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | not captured | exact (1.0) | Cirincione_2017_table_p6_1:row17:col5 | — | not captured |
| clearance | `Q22` · CL | —(suppressed) | L/h | — | L/h | not captured | review_gapfill (0.7) | Admiraal_2023:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'ka', 'Tlag']
- `invented_absorption`: ka defaulted — not reported in source

**Interpretation flags:**
- unit_dimension_mismatch: 'CLint (L/day)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped unlinked row (NIL): 'f2 (%)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row4:col5'])
- dropped unlinked row (NIL): 'f3 (%)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row5:col5'])
- dropped unlinked row (NIL): 'fret(single-dose study) (%)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row6:col5'])
- dropped unlinked row (NIL): 'fret(Mdstudy) (%)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row7:col5'])
- dropped duplicate Q306 ('ktr2 (1/day)', value '0.570') — already have one for this compound
- dropped unlinked row (NIL): 'N1' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row10:col5'])
- dropped unlinked row (NIL): 'N2' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row11:col5'])
- dropped unlinked row (NIL): 'Vctwkg' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row12:col5'])
- covariate level 'CL eGFR' → Q900:cl_egfr = 0.838 (power on Q3)
- unit_dimension_mismatch: 'Vmax (mg/day)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'RVS D study (Log SD)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row18:col5'])
- dropped unlinked row (NIL): 'RVM D study (Log SD)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row19:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=exenatide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'combined single- and multiple-dose models parameter estimate' subgroup of Cirincione_2017 (paper reports 4 populations: combined single- and multiple-dose models iv (%), combined single- and multiple-dose models parameter estimate, single-dose model iv (%), single-dose model parameter estimate)
- gap-filled Q22 (CL) from Admiraal_2023's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Cirincione_2017_table_p6_1:row14:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Admiraal_2023:review'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | L/day | not captured | not captured | ['Cirincione_2017_table_p6_1:row1:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Cirincione_2017_table_p6_1:row16:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Cirincione_2017_table_p6_1:row2:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Cirincione_2017_table_p6_1:row17:col5'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/day | not captured | not captured | ['Cirincione_2017_table_p6_1:row15:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12.3 | not captured | not captured | ['Admiraal_2023:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.3 L/h | not captured | not captured | ['Admiraal_2023:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 7.03 L | not captured | not captured | ['Cirincione_2017_table_p6_1:row2:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.04 L | not captured | not captured | ['Cirincione_2017_table_p6_1:row17:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_exenatide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cirincione_2017` / `Cirincione_2017::combined_single_and_multiple_dose_models_parameter_estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_exenatide/Exenatide_Cirincione2017_combined_single_and_multiple_dose_m/Exenatide_Cirincione2017_combined_single_and_multiple_dose_m_modelica.zip" download>Exenatide_Cirincione2017_combined_single_and_multiple_dose_m_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_exenatide/Exenatide_Cirincione2017_combined_single_and_multiple_dose_m/Exenatide_Cirincione2017_combined_single_and_multiple_dose_m_matlab.zip" download>Exenatide_Cirincione2017_combined_single_and_multiple_dose_m_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_exenatide/Exenatide_Cirincione2017_combined_single_and_multiple_dose_m/Exenatide_Cirincione2017_combined_single_and_multiple_dose_m_matlab_simbio.zip" download>Exenatide_Cirincione2017_combined_single_and_multiple_dose_m_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_exenatide/Exenatide_Cirincione2017_combined_single_and_multiple_dose_m/Exenatide_Cirincione2017_combined_single_and_multiple_dose_m_sbml.zip" download>Exenatide_Cirincione2017_combined_single_and_multiple_dose_m_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_exenatide/Exenatide_Cirincione2017_combined_single_and_multiple_dose_m/Exenatide_Cirincione2017_combined_single_and_multiple_dose_m_cellml.zip" download>Exenatide_Cirincione2017_combined_single_and_multiple_dose_m_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
