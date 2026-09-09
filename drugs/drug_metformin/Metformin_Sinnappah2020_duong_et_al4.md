# metformin — `Metformin_Sinnappah2020_duong_et_al4`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Sinnappah KA; Kuan IHS; Thynne TRJ; Doogue MP; Wright DFB et al. (2020). British journal of clinical pharmacology 86
  ·  DOI: [10.1111/bcp.14244](https://doi.org/10.1111/bcp.14244)

## Model component
<dbs-pgx drug="metformin" model-id="Metformin_Sinnappah2020_duong_et_al4" status="extracted" stale="false" population="patients with Type 2 diabetes receiving intermittent haemodialysis" measured-compound="metformin" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θCLNR/F (L h-1) | `Q79` · CLNR | 1.6 | L h-1 | 4.444444444444445e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | Sinnappah_2020_table_p4_1:row0:col1 | — | not captured |
| θCLR/F (L h-1) | `Q26` · CLR | 17 | L h-1 | 4.722222222222222e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | Sinnappah_2020_table_p4_1:row1:col1 | — | not captured |
| θQ/F (L h-1) | `Q69` · Q/F | 13 | L h-1 | 3.6111111111111115e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | Sinnappah_2020_table_p4_1:row3:col1 | — | not captured |
| θV2/F (L) | `Q290` · V1/F | 123 | L | 0.123 | [l] | not captured | caption_compartment (0.9) | Sinnappah_2020_table_p4_1:row4:col1 | — | not captured |
| θV3/F (L) | `Q82` · V2/F | 335 | L | 0.335 | [l] | not captured | caption_compartment (0.9) | Sinnappah_2020_table_p4_1:row5:col1 | — | not captured |
| θka (h-1) | `Q49` · kabs | 0.51 | h-1 | 0.00014166666666666668 | [1] / [h] | not captured | llm_confirmed (0.6) | Sinnappah_2020_table_p4_1:row6:col1 | — | not captured |
| θF1 | `Q40` · Fab | 0.55 | not captured | not captured | not captured | not captured | exact (1.0) | Sinnappah_2020_table_p4_1:row8:col1 | — | not captured |
| CL (l h -1 ) Apparent clearance | `Q27` · CL/F | 52.6 | l h -1 | 1.4611111111111112e-05 | L/h | not captured | review_gapfill (0.7) | Chae_2012:review | — | not captured |
| ABCG2 | `Q900` · ABCG2 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| ABCG2 | `Q900` · ABCG2 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| ABCG2 | `Q900` · ABCG2 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A1 | `Q900` · SLC22A1 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A1 | `Q900` · SLC22A1 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A1 | `Q900` · SLC22A1 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A3 | `Q900` · SLC22A3 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A3 | `Q900` · SLC22A3 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A3 | `Q900` · SLC22A3 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A4 | `Q900` · SLC22A4 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A4 | `Q900` · SLC22A4 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A4 | `Q900` · SLC22A4 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC47A2 | `Q900` · SLC47A2 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC47A2 | `Q900` · SLC47A2 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC47A2 | `Q900` · SLC47A2 | {'A/A': 0.0, 'C/A': 0.076, 'C/C': 0.1286, 'C/T': 0.0239, 'G/A': 0.0936, 'G/G': 0.031, 'G/T': 0.0703, 'GAT/GAT': 0.0419, 'T/C': 0.068, 'T/T': -0.0486} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'ωCL (CV %)' — extend the ontology if this is a real PK parameter (source ['Sinnappah_2020_table_p4_1:row10:col1'])
- dropped unlinked row (NIL): 'ωV2 (CV %)' — extend the ontology if this is a real PK parameter (source ['Sinnappah_2020_table_p4_1:row11:col1'])
- dropped unlinked row (NIL): 'ωF1 (CV %)' — extend the ontology if this is a real PK parameter (source ['Sinnappah_2020_table_p4_1:row12:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=metformin
- population split: 'duong et al4' subgroup of Sinnappah_2020 (paper reports 2 populations: duong et al4, parameter estimates (rse %))
- gap-filled Q27 (CL/F) from Chae_2012's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sinnappah_2020_table_p4_1:row1:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chae_2012:review'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sinnappah_2020_table_p4_1:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Sinnappah_2020_table_p4_1:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sinnappah_2020_table_p4_1:row3:col1'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sinnappah_2020_table_p4_1:row0:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sinnappah_2020_table_p4_1:row5:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 52.6 L/h | not captured | not captured | ['Chae_2012:review'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 123 L | not captured | not captured | ['Sinnappah_2020_table_p4_1:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 335 L | not captured | not captured | ['Sinnappah_2020_table_p4_1:row5:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metformin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sinnappah_2020` / `Sinnappah_2020::duong_et_al4`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_metformin/Metformin_Sinnappah2020_duong_et_al4/Metformin_Sinnappah2020_duong_et_al4_modelica.zip" download>Metformin_Sinnappah2020_duong_et_al4_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_metformin/Metformin_Sinnappah2020_duong_et_al4/Metformin_Sinnappah2020_duong_et_al4_fmi.zip" download>Metformin_Sinnappah2020_duong_et_al4_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_metformin/Metformin_Sinnappah2020_duong_et_al4/Metformin_Sinnappah2020_duong_et_al4_matlab.zip" download>Metformin_Sinnappah2020_duong_et_al4_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_metformin/Metformin_Sinnappah2020_duong_et_al4/Metformin_Sinnappah2020_duong_et_al4_matlab_simbio.zip" download>Metformin_Sinnappah2020_duong_et_al4_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_metformin/Metformin_Sinnappah2020_duong_et_al4/Metformin_Sinnappah2020_duong_et_al4_sbml.zip" download>Metformin_Sinnappah2020_duong_et_al4_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_metformin/Metformin_Sinnappah2020_duong_et_al4/Metformin_Sinnappah2020_duong_et_al4_cellml.zip" download>Metformin_Sinnappah2020_duong_et_al4_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
