# quinidine — `Quinidine_Fattinger1991v2_population_mean_estimate`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Fattinger K; Vozeh S; Ha HR; Borner M; Follath F et al. (1991). British journal of clinical pharmacology 31
  ·  DOI: [10.1111/j.1365-2125.1991.tb05531.x](https://doi.org/10.1111/j.1365-2125.1991.tb05531.x)

## Model component
<dbs-pgx drug="quinidine" model-id="Quinidine_Fattinger1991v2_population_mean_estimate" status="extracted" stale="false" population="patients with arrhythmias" measured-compound="quinidine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLrenalc | `Q26` · CLR | 0.0566 | not captured | not captured | not captured | not captured | llm (0.6) | Fattinger_1991_2_table_p4_1:row0:col1 | — | not captured |
| V1 (l) | `Q63` · V1 | 161 | l | 0.161 | [l] | not captured | exact (1.0) | Fattinger_1991_2_table_p4_1:row3:col1 | — | not captured |
| Q (1 h-1)e | `Q30` · Q | 12.6 | not captured | not captured | not captured | not captured | llm (0.6) | Fattinger_1991_2_table_p4_1:row4:col1 | — | not captured |
| V2 (l) | `Q64` · V2 | 66.7 | l | 0.06670000000000001 | [l] | not captured | exact (1.0) | Fattinger_1991_2_table_p4_1:row5:col1 | — | not captured |
| tmax, QSf (h) | `Q56` · tmax | 1.37 | h | 4932.0 | [h] | not captured | llm_confirmed (0.6) | Fattinger_1991_2_table_p4_1:row6:col1 | — | not captured |
| F | `Q40` · Fab | 1.36 | not captured | not captured | not captured | not captured | exact (1.0) | Fattinger_1991_2_table_p4_1:row8:col1 | — | not captured |
| theta_q79_category | `Q900` · theta_q79_category | 12.6 | not captured | not captured | not captured | not captured | not captured (not captured) | Fattinger_1991_2_table_p4_1:row1:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q56 ('tmax, OBSf (h)', value '6.00') — already have one for this compound
- covariate effect for Q79 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q79 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quinidine
- population split: 'population mean estimate' subgroup of Fattinger_1991_2 (paper reports 2 populations: population mean estimate, s.e.)

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for Fattinger_1991_2
- unparsed cell Fattinger_1991_2_table_p4_1:row1:col3 = '40.2%'
- unparsed cell Fattinger_1991_2_table_p4_1:row1:col4 = '55%'
- unparsed cell Fattinger_1991_2_table_p4_1:row2:col3 = '40.2%'
- unparsed cell Fattinger_1991_2_table_p4_1:row2:col4 = '55%'
- unparsed cell Fattinger_1991_2_table_p4_1:row3:col3 = '75.6%'
- unparsed cell Fattinger_1991_2_table_p4_1:row3:col4 = '53%'
- unparsed cell Fattinger_1991_2_table_p4_1:row6:col3 = '49.4%'
- unparsed cell Fattinger_1991_2_table_p4_1:row6:col4 = '65%'
- unparsed cell Fattinger_1991_2_table_p4_1:row7:col3 = '49.4%'
- unparsed cell Fattinger_1991_2_table_p4_1:row7:col4 = '65%'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Fattinger_1991_2_table_p4_1:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Fattinger_1991_2_table_p4_1:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Fattinger_1991_2_table_p4_1:row5:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 161 L | not captured | not captured | ['Fattinger_1991_2_table_p4_1:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 66.7 L | not captured | not captured | ['Fattinger_1991_2_table_p4_1:row5:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_quinidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fattinger_1991_2` / `Fattinger_1991_2::population_mean_estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
