# paracetamol — `Paracetamol_Langeskov2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Langeskov EK; Kristensen K et al. (2022). Pharmacology research & perspectives 10
  ·  DOI: [10.1002/prp2.962](https://doi.org/10.1002/prp2.962)

## Model component
<dbs-pgx drug="paracetamol" model-id="Paracetamol_Langeskov2022_reference" status="extracted" stale="false" population="healthy adults" measured-compound="paracetamol" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h−1) (Placebo) | `Q49` · kabs | 5.72 | Placebo | not captured | [placebo] | not captured | llm_confirmed (0.6) | prp2962-tbl-0002:row1:col1, Langeskov_2022_table_3:row0:col1 | — | 2.03 (None% RSE) |
| V1/F (L) | `Q290` · V1/F | 48.5 | L | 0.0485 | [l] | not captured | exact (1.0) | prp2962-tbl-0002:row3:col1 | — | 0.625 (None% RSE) |
| Cl/F (L/h) | `Q27` · CL/F | 25.9 | L/h | 7.194444444444444e-06 | [l] / [h] | not captured | exact (1.0) | prp2962-tbl-0002:row5:col1 | — | 0.151 (None% RSE) |
| V2/F (L) | `Q82` · V2/F | 55.4 | L | 0.0554 | [l] | not captured | exact (1.0) | prp2962-tbl-0002:row6:col1 | — | 0.111 (None% RSE) |
| Cl2/F (L/h) | `Q69` · Q/F | 199 | L/h | 5.5277777777777783e-05 | [l] / [h] | not captured | special_case (0.95) | prp2962-tbl-0002:row7:col1 | — | not captured |
| Tlag (h) | `Q83` · tlag | 0.16 | h | 576.0 | [h] | not captured | exact (1.0) | prp2962-tbl-0002:row8:col1 | — | 0.0586 (None% RSE) |
| ktr (h−1) (Placebo) | `Q306` · ktr | 7.28 | Placebo | not captured | [placebo] | not captured | llm_confirmed (0.6) | Langeskov_2022_table_3:row2:col1 | — | 1.82 (None% RSE) |
| Cl2/F (L/h) a | `Q80` · Q2/F | 873 | not captured | not captured | not captured | not captured | llm (0.6) | Langeskov_2022_table_3:row7:col1 | — | not captured |
| Θktrcovariate | `Q900` · Θktrcovariate | 0.791 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source

**Interpretation flags:**
- unit_dimension_unknown: 'Placebo' (kabs)
- routed 'Θkacovariate' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_mismatch: 'ΘV1/Fcovariate' → Q290 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q290 ('ΘV1/Fcovariate', value '0.0312') — already have one for this compound
- unit_dimension_unknown: 'Placebo' (ktr)
- kept covariate coefficient Θktrcovariate=0.791 (covariate ktrcovariate) — not an ontology parameter
- dropped duplicate Q290 ('V1/F (L) a', value '1843') — already have one for this compound
- dropped duplicate Q27 ('Cl/F (L/h) a', value '620') — already have one for this compound
- dropped duplicate Q82 ('V2/F(L) a', value '4184') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=paracetamol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell prp2962-tbl-0002:row1:col3 = '11.8 [6.2–27.8]'
- unparsed cell prp2962-tbl-0002:row2:col3 = '0.534 [0.298–0.745]'
- unparsed cell prp2962-tbl-0002:row3:col3 = '50.8 [28.6–83.3]'
- unparsed cell prp2962-tbl-0002:row4:col3 = '0.0312 [0.0178–0.0456]'
- unparsed cell prp2962-tbl-0002:row5:col3 = '25.9 [24.1–27.7]'
- unparsed cell prp2962-tbl-0002:row6:col3 = '53.6 [24.4–70.5]'
- unparsed cell prp2962-tbl-0002:row7:col3 = '196 [83.2–271]'
- unparsed cell prp2962-tbl-0002:row8:col3 = '0.17 [0.11–0.20]'
- unparsed cell prp2962-tbl-0002:row10:col2 = '35.3 [15]'
- unparsed cell prp2962-tbl-0002:row10:col3 = '0.586 [0.212–1.31]'
- unparsed cell prp2962-tbl-0002:row11:col2 = '33.2 [16]'
- unparsed cell prp2962-tbl-0002:row11:col3 = '0.280 [0.0672–0.713]'
- unparsed cell prp2962-tbl-0002:row12:col2 = '27.4 [5.7]'
- unparsed cell prp2962-tbl-0002:row12:col3 = '0.0626 [0.033–0.111]'
- unparsed cell prp2962-tbl-0002:row13:col2 = '26.8 [28]'
- unparsed cell prp2962-tbl-0002:row13:col3 = '0.0936 [0.0187–0.32]'
- unparsed cell prp2962-tbl-0002:row14:col2 = '34.7 [34]'
- unparsed cell prp2962-tbl-0002:row14:col3 = '0.0467 [0.00783–0.187]'
- unparsed cell prp2962-tbl-0002:row15:col2 = '10.5[20]'
- unparsed cell prp2962-tbl-0002:row15:col3 = '0.0934 [0.0731–0.114]'
- unparsed cell Langeskov_2022_table_3:row0:col3 = '6.56 [3.29–12.1]'
- unparsed cell Langeskov_2022_table_3:row1:col3 = '0.821 [0.649–0.925]'
- unparsed cell Langeskov_2022_table_3:row2:col3 = '10.4 [4.48–44.0]'
- unparsed cell Langeskov_2022_table_3:row3:col3 = '0.820 [0.629–0.972]'
- unparsed cell Langeskov_2022_table_3:row4:col3 = '1709 [1253–2224]'
- unparsed cell Langeskov_2022_table_3:row5:col3 = '617 [551–691]'
- unparsed cell Langeskov_2022_table_3:row6:col3 = '4229 [3573–4918]'
- unparsed cell Langeskov_2022_table_3:row7:col3 = '890 [668–1122]'
- unparsed cell Langeskov_2022_table_3:row9:col2 = '17.6 [31]'
- unparsed cell Langeskov_2022_table_3:row9:col3 = '2.21 [1.41–3.32]'
- unparsed cell Langeskov_2022_table_3:row10:col2 = '35.8 [46]'
- unparsed cell Langeskov_2022_table_3:row10:col3 = '1.82 [0.390–3.17]'
- unparsed cell Langeskov_2022_table_3:row11:col2 = '23.3 [21]'
- unparsed cell Langeskov_2022_table_3:row11:col3 = '0.517 [0.218–0.822]'
- unparsed cell Langeskov_2022_table_3:row12:col2 = '22.4 [2.7]'
- unparsed cell Langeskov_2022_table_3:row12:col3 = '0.140 [0.079–0.211]'
- unparsed cell Langeskov_2022_table_3:row13:col2 = '22.1 [19]'
- unparsed cell Langeskov_2022_table_3:row13:col3 = '0.110 [0.0655–0.172]'
- unparsed cell Langeskov_2022_table_3:row14:col2 = '4.67 [13]'
- unparsed cell Langeskov_2022_table_3:row14:col3 = '0.322 [0.292–0.353]'
- companion parameter table 3 transcribed (22 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp2962-tbl-0002:row5:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2962-tbl-0002:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp2962-tbl-0002:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2962-tbl-0002:row6:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['prp2962-tbl-0002:row8:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 25.9 L/h | not captured | not captured | ['prp2962-tbl-0002:row5:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 48.5 L | not captured | not captured | ['prp2962-tbl-0002:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 55.4 L | not captured | not captured | ['prp2962-tbl-0002:row6:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_paracetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Langeskov_2022` / `Langeskov_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_modelica.zip" download>Paracetamol_Langeskov2022_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_fmi.zip" download>Paracetamol_Langeskov2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_matlab.zip" download>Paracetamol_Langeskov2022_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_matlab_simbio.zip" download>Paracetamol_Langeskov2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_sbml.zip" download>Paracetamol_Langeskov2022_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_cellml.zip" download>Paracetamol_Langeskov2022_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
