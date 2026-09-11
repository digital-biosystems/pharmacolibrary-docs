# tramadol — `Tramadol_SoriaChacartegui2026_estimate`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Soria-Chacartegui P; Würthwein G; Zubiaur P; Almenara S; Ochoa D; Abad-Santos F; et al. et al. (2026). European journal of drug metabolism and pharmacokinetics 51
  ·  DOI: [10.1007/s13318-026-00986-3](https://doi.org/10.1007/s13318-026-00986-3)

## Model component
<dbs-pgx drug="tramadol" model-id="Tramadol_SoriaChacartegui2026_estimate" status="extracted" stale="false" population="healthy volunteers" measured-compound="tramadol" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 51.1 | L/h | 1.4194444444444445e-05 | [l] / [h] | not captured | exact (1.0) | Tab2:row2:col1 | — | 30.5 (None% RSE) |
| Vc (L) | `Q63` · V1 | 126 | L | 0.126 | [l] | not captured | exact (1.0) | Tab2:row3:col1 | — | 68.4 (None% RSE) |
| Ka (h−1) | `Q49` · kabs | 3.09 | h−1 | 0.0008583333333333333 | [1] / [h] | not captured | exact (1.0) | Tab2:row4:col1 | — | 108 (None% RSE) |
| MTT (h) | `Q81` · MTT | 0.24 | h | not captured | [h] | not captured | exact (1.0) | Tab2:row5:col1 | — | 20.7 (None% RSE) |
| Q (L/h) | `Q30` · Q | 175 | L/h | 4.8611111111111115e-05 | [l] / [h] | not captured | exact (1.0) | Tab2:row7:col1 | — | not captured |
| Vp (L) | `Q64` · V2 | 171 | L | 0.171 | [l] | not captured | exact (1.0) | Tab2:row8:col1 | — | not captured |
| theta_cl_cyp2d6 | `Q900` · theta_cl_cyp2d6 | -0.198 | L/h | not captured | not captured | not captured | not captured (not captured) | Tab2:row10:col1 | — | not captured |
| theta_v1_weight | `Q900` · theta_v1_weight | 0.0311 | L | not captured | not captured | not captured | not captured (not captured) | Tab2:row11:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'NCMT' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tramadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Soria-Chacartegui_2026 (paper reports 3 populations: estimate, relative pe (%), shrinkage (%))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row10:col5 = '−0.329 to −0.044'
- unparsed cell Soria-Chacartegui_2026_table_3:row0:col1 = '763 (35.4%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row0:col2 = '780 (35.9%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row0:col3 = '0.98 (0.97, 0.98)'
- unparsed cell Soria-Chacartegui_2026_table_3:row1:col1 = '793 (37.3%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row1:col2 = '810 (37.4%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row1:col3 = '0.98 (0.97, 0.98)'
- unparsed cell Soria-Chacartegui_2026_table_3:row2:col1 = '136 (33.7%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row2:col2 = '139 (37%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row2:col3 = '0.98 (0.95, 1.01)'
- unparsed cell Soria-Chacartegui_2026_table_3:row3:col1 = '0.81 (0.57–1.00)'
- unparsed cell Soria-Chacartegui_2026_table_3:row3:col2 = '0.75 (0.50–1.00)'
- unparsed cell Soria-Chacartegui_2026_table_3:row3:col3 = '1.04 (0.98, 1.17)'
- unparsed cell Soria-Chacartegui_2026_table_3:row4:col1 = '4.5 (18.6%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row4:col2 = '4.9 (17.1%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row4:col3 = '0.92 (0.89, 0.96)'
- unparsed cell Soria-Chacartegui_2026_table_3:row5:col1 = '47.5 (37.3%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row5:col2 = '46.3 (37.4%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row5:col3 = '1.03 (1.02, 1.03)'
- unparsed cell Soria-Chacartegui_2026_table_3:row6:col1 = '309 (25.6%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row6:col2 = '327 (29.7%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row6:col3 = '0.94 (0.91, 0.99)'
- companion parameter table 3 transcribed (7 record(s))
- LLM selected parameter table(s) 3
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 4.5 | 4.446 | 0.988 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 51.1 | not captured | not captured | ['Tab2:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 51.1 L/h | not captured | not captured | ['Tab2:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 126 L | not captured | not captured | ['Tab2:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 171 L | not captured | not captured | ['Tab2:row8:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tramadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Soria-Chacartegui_2026` / `Soria-Chacartegui_2026::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_estimate/Tramadol_SoriaChacartegui2026_estimate_modelica.zip" download>Tramadol_SoriaChacartegui2026_estimate_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_estimate/Tramadol_SoriaChacartegui2026_estimate_fmi.zip" download>Tramadol_SoriaChacartegui2026_estimate_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_estimate/Tramadol_SoriaChacartegui2026_estimate_matlab.zip" download>Tramadol_SoriaChacartegui2026_estimate_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_estimate/Tramadol_SoriaChacartegui2026_estimate_matlab_simbio.zip" download>Tramadol_SoriaChacartegui2026_estimate_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_estimate/Tramadol_SoriaChacartegui2026_estimate_sbml.zip" download>Tramadol_SoriaChacartegui2026_estimate_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_estimate/Tramadol_SoriaChacartegui2026_estimate_cellml.zip" download>Tramadol_SoriaChacartegui2026_estimate_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
