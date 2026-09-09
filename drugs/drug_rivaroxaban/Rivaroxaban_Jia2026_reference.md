# rivaroxaban — `Rivaroxaban_Jia2026_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Jia M; Chai Y; Gao Y; Jing C; Zhu K; Zhu T; et al. et al. (2026). European journal of clinical pharmacology 82
  ·  DOI: [10.1007/s00228-026-04034-6](https://doi.org/10.1007/s00228-026-04034-6)

## Model component
<dbs-pgx drug="rivaroxaban" model-id="Rivaroxaban_Jia2026_reference" status="extracted" stale="false" population="adults with TIPS" measured-compound="rivaroxaban" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 0.143 | not captured | not captured | not captured | 5.97 | exact (1.0) | tab_0:row2:col1, tab_0:row2:col2, tab_0:row2:col3, tab_0:row2:col4, tab_0:row2:col5 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 7.22 | L/h | 2.0055555555555555e-06 | [l] / [h] | 9.52 | exact (1.0) | tab_0:row3:col1, tab_0:row3:col2, tab_0:row3:col3, tab_0:row3:col4, tab_0:row3:col5 | — | 39.0 (24.6% RSE) |
| V d /F (L) | `Q76` · V/F | 4.93 | L | 0.0049299999999999995 | [l] | 37.4 | space_fold (0.95) | tab_0:row4:col1, tab_0:row4:col2, tab_0:row4:col3, tab_0:row4:col4, tab_0:row4:col5 | — | 61.5 (51.4% RSE) |
| D1 (h) | `Q310` · D1 | 0.820 | h | 2952.0 | [h] | 29.3 | exact (1.0) | tab_0:row5:col1, tab_0:row5:col2, tab_0:row5:col3, tab_0:row5:col4, tab_0:row5:col5 | — | 47.6 (69.4% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source

**Interpretation flags:**
- dropped unlinked row (NIL): 'ALAG1 (h)' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col1', 'tab_0:row6:col2', 'tab_0:row6:col3', 'tab_0:row6:col4', 'tab_0:row6:col5'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rivaroxaban
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col3', 'tab_0:row3:col4', 'tab_0:row3:col5'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col3', 'tab_0:row5:col4', 'tab_0:row5:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col4', 'tab_0:row4:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.22 L/h | not captured | not captured | ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col3', 'tab_0:row3:col4', 'tab_0:row3:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 4.93 L | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col4', 'tab_0:row4:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rivaroxaban/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jia_2026` / `Jia_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Jia2026_reference/Rivaroxaban_Jia2026_reference_modelica.zip" download>Rivaroxaban_Jia2026_reference_modelica.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Jia2026_reference/Rivaroxaban_Jia2026_reference_fmi.zip" download>Rivaroxaban_Jia2026_reference_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Jia2026_reference/Rivaroxaban_Jia2026_reference_matlab.zip" download>Rivaroxaban_Jia2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Jia2026_reference/Rivaroxaban_Jia2026_reference_matlab_simbio.zip" download>Rivaroxaban_Jia2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Jia2026_reference/Rivaroxaban_Jia2026_reference_sbml.zip" download>Rivaroxaban_Jia2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Jia2026_reference/Rivaroxaban_Jia2026_reference_cellml.zip" download>Rivaroxaban_Jia2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
