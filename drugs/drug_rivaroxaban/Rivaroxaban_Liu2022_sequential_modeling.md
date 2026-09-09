# rivaroxaban — `Rivaroxaban_Liu2022_sequential_modeling`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Liu XQ; Zhang YF; Ding HY; Yan MM; Jiao Z; Zhong MK; et al. et al. (2022). Acta pharmacologica Sinica 43
  ·  DOI: [10.1038/s41401-022-00892-9](https://doi.org/10.1038/s41401-022-00892-9)

## Model component
<dbs-pgx drug="rivaroxaban" model-id="Rivaroxaban_Liu2022_sequential_modeling" status="extracted" stale="false" population="Chinese patients with non-valvular atrial fibrillation" measured-compound="rivaroxaban" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k a (h -1 ) | `Q49` · kabs | 0.617 | h -1 | 0.0001713888888888889 | [1] / [h] | not captured | space_fold (0.95) | tab_2:row3:col1 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 5.04 | L/h | 1.4000000000000001e-06 | [l] / [h] | not captured | exact (1.0) | tab_2:row4:col1, tab_2:row4:col5, tab_2:row4:col6 | — | not captured |
| egfr_on_cl_f | `Q900` · egfr_on_cl_f | 0.54 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_2:row5:col1, tab_2:row5:col5, tab_2:row5:col6 | — | not captured |
| V/F (L) | `Q76` · V/F | 40.4 | L | 0.0404 | [l] | not captured | exact (1.0) | tab_2:row6:col1, tab_2:row6:col5, tab_2:row6:col6 | — | not captured |
| ω CL | `Q22` · CL | 35.4 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | tab_2:row8:col1, tab_2:row8:col2, tab_2:row8:col5, tab_2:row8:col6 | — | not captured |
| egfr_on_pt_base | `Q900` · egfr_on_pt_base | -0.0868 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_2:row14:col1, tab_2:row14:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- covariate level 'eGFR on CL/F' → Q900:egfr_on_cl_f = 0.54 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'PT base (s)' — extend the ontology if this is a real PK parameter (source ['tab_2:row12:col1', 'tab_2:row12:col5', 'tab_2:row12:col6'])
- dropped unlinked row (NIL): 'TBIL on PT base' — extend the ontology if this is a real PK parameter (source ['tab_2:row13:col1', 'tab_2:row13:col5', 'tab_2:row13:col6'])
- covariate level 'eGFR on PT base' → Q900:egfr_on_pt_base = -0.0868 (linear_fractional on Q27)
- dropped PD-category row 'slope (s•L•μg -1 )' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row15:col1', 'tab_2:row15:col5', 'tab_2:row15:col6'])
- routed 'ω PTbase' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω slope' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['tab_2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['tab_2:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rivaroxaban
- population split: 'sequential modeling' subgroup of Liu_2022 (paper reports 2 populations: sequential modeling, simultaneous modeling)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_2:row14:col6 = '(-0.1532)-(-0.0132)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col5', 'tab_2:row4:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_2:row3:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row6:col1', 'tab_2:row6:col5', 'tab_2:row6:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.04 L/h | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col5', 'tab_2:row4:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 40.4 L | not captured | not captured | ['tab_2:row6:col1', 'tab_2:row6:col5', 'tab_2:row6:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rivaroxaban/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Liu_2022` / `Liu_2022::sequential_modeling`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Liu2022_sequential_modeling/Rivaroxaban_Liu2022_sequential_modeling_modelica.zip" download>Rivaroxaban_Liu2022_sequential_modeling_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Liu2022_sequential_modeling/Rivaroxaban_Liu2022_sequential_modeling_fmi.zip" download>Rivaroxaban_Liu2022_sequential_modeling_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Liu2022_sequential_modeling/Rivaroxaban_Liu2022_sequential_modeling_matlab.zip" download>Rivaroxaban_Liu2022_sequential_modeling_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Liu2022_sequential_modeling/Rivaroxaban_Liu2022_sequential_modeling_matlab_simbio.zip" download>Rivaroxaban_Liu2022_sequential_modeling_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Liu2022_sequential_modeling/Rivaroxaban_Liu2022_sequential_modeling_sbml.zip" download>Rivaroxaban_Liu2022_sequential_modeling_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_rivaroxaban/Rivaroxaban_Liu2022_sequential_modeling/Rivaroxaban_Liu2022_sequential_modeling_cellml.zip" download>Rivaroxaban_Liu2022_sequential_modeling_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
