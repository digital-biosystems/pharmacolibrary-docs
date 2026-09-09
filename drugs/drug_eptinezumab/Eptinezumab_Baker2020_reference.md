# eptinezumab — `Eptinezumab_Baker2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Baker B; Schaeffler B; Beliveau M; Rubets I; Pederson S; Trinh M; et al. et al. (2020). Pharmacology research & perspectives 8
  ·  DOI: [10.1002/prp2.567](https://doi.org/10.1002/prp2.567)

## Model component
<dbs-pgx drug="eptinezumab" model-id="Eptinezumab_Baker2020_reference" status="rejected" stale="false" population="patients with episodic and chronic migraine and healthy volunteers" measured-compound="eptinezumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC0‐12wk, mean (CV%), h·μg mL−1 | `Q19` · AUCt | —(suppressed) | mg | — | [mg] | not captured | llm (0.6) | prp2567-tbl-0002:row2:col1, prp2567-tbl-0002:row2:col2, prp2567-tbl-0002:row2:col3, prp2567-tbl-0002:row2:col4 | — | not captured |
| C max, mean (CV%), μg mL−1 | `Q32` · Cmax | —(suppressed) | mg | — | [mg] | not captured | llm (0.6) | prp2567-tbl-0002:row3:col1, prp2567-tbl-0002:row3:col2, prp2567-tbl-0002:row3:col3, prp2567-tbl-0002:row3:col4, prp2567-tbl-0002:row3:col5, prp2567-tbl-0002:row3:col6, prp2567-tbl-0002:row3:col7 | — | not captured |
| C avg, mean (CV%), μg mL−1 | `Q71` · Cavg | —(suppressed) | mg | — | [mg] | not captured | llm (0.6) | prp2567-tbl-0002:row4:col1, prp2567-tbl-0002:row4:col2, prp2567-tbl-0002:row4:col3, prp2567-tbl-0002:row4:col4, prp2567-tbl-0002:row4:col5, prp2567-tbl-0002:row4:col6, prp2567-tbl-0002:row4:col7 | — | not captured |
| C trough, mean (CV%), μg mL−1 | `Q37` · Ctrough | —(suppressed) | mg | — | [mg] | not captured | llm_confirmed (0.6) | prp2567-tbl-0002:row5:col1, prp2567-tbl-0002:row5:col2, prp2567-tbl-0002:row5:col3, prp2567-tbl-0002:row5:col4, prp2567-tbl-0002:row5:col5, prp2567-tbl-0002:row5:col6, prp2567-tbl-0002:row5:col7 | — | not captured |
| Css,avg, mean (CV%), μg mL−1 | `Q34` · Css | —(suppressed) | mg | — | [mg] | not captured | llm_confirmed (0.6) | Baker_2020_table_3:row2:col1, Baker_2020_table_3:row2:col2, Baker_2020_table_3:row2:col3, Baker_2020_table_3:row2:col4, Baker_2020_table_3:row2:col5, Baker_2020_table_3:row2:col6, Baker_2020_table_3:row2:col7 | — | not captured |
| CL | `Q22` · CL | —(suppressed) | L h−1 | — | L/h | not captured | exact (1.0) | Baker_2020:results_prose | — | not captured |
| central volume of distribution (Vc) | `Q61` · V | —(suppressed) | L | — | L | not captured | boundary (0.8) | Baker_2020:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1 (n = 4)' — extend the ontology if this is a real PK parameter (source ['prp2567-tbl-0002:row1:col1', 'prp2567-tbl-0002:row1:col2', 'prp2567-tbl-0002:row1:col3', 'prp2567-tbl-0002:row1:col4', 'prp2567-tbl-0002:row1:col5', 'prp2567-tbl-0002:row1:col6', 'Baker_2020_table_3:row0:col1', 'Baker_2020_table_3:row0:col2', 'Baker_2020_table_3:row0:col3', 'Baker_2020_table_3:row0:col4', 'Baker_2020_table_3:row0:col5', 'Baker_2020_table_3:row0:col6'])
- unit_dimension_mismatch: 'AUC0‐12wk, mean (CV%), h·μg mL−1' → Q19 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'C max, mean (CV%), μg mL−1' → Q32 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'C avg, mean (CV%), μg mL−1' → Q71 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'C trough, mean (CV%), μg mL−1' → Q37 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC0‐τ, mean (CV%), h·μg mL−1' → Q19 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('AUC0‐τ, mean (CV%), h·μg mL−1', value '183') — already have one for this compound
- unit_dimension_mismatch: 'Css,avg, mean (CV%), μg mL−1' → Q34 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Rac(AUCτ), mean (CV%)' — extend the ontology if this is a real PK parameter (source ['Baker_2020_table_3:row3:col1', 'Baker_2020_table_3:row3:col2', 'Baker_2020_table_3:row3:col3', 'Baker_2020_table_3:row3:col4', 'Baker_2020_table_3:row3:col5', 'Baker_2020_table_3:row3:col6', 'Baker_2020_table_3:row3:col7'])
- dropped unlinked row (NIL): 'Rac(C max), mean (CV%)' — extend the ontology if this is a real PK parameter (source ['Baker_2020_table_3:row4:col1', 'Baker_2020_table_3:row4:col2', 'Baker_2020_table_3:row4:col3', 'Baker_2020_table_3:row4:col4', 'Baker_2020_table_3:row4:col5', 'Baker_2020_table_3:row4:col6', 'Baker_2020_table_3:row4:col7'])
- salvaged Q22 ('CL'=0.0062) from results prose — parameter table was unreadable
- salvaged Q61 ('central volume of distribution (Vc)'=3.64) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=eptinezumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell prp2567-tbl-0002:row2:col5 = '17 900 (29.0)'
- unparsed cell prp2567-tbl-0002:row2:col6 = '54 500 (27.7)'
- unparsed cell prp2567-tbl-0002:row2:col7 = '164 000 (24.0)'
- unparsed cell Baker_2020_table_3:row1:col5 = '20 800 (32.1)'
- unparsed cell Baker_2020_table_3:row1:col6 = '63 100 (30.1)'
- unparsed cell Baker_2020_table_3:row1:col7 = '187 000 (25.4)'
- companion parameter table 3 transcribed (31 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | fail | [mass] | mg | not captured | not captured | ['prp2567-tbl-0002:row2:col1', 'prp2567-tbl-0002:row2:col2', 'prp2567-tbl-0002:row2:col3', 'prp2567-tbl-0002:row2:col4'] |
| C5_dimension_Q32 | fail | [mass] | mg | not captured | not captured | ['prp2567-tbl-0002:row3:col1', 'prp2567-tbl-0002:row3:col2', 'prp2567-tbl-0002:row3:col3', 'prp2567-tbl-0002:row3:col4', 'prp2567-tbl-0002:row3:col5', 'prp2567-tbl-0002:row3:col6', 'prp2567-tbl-0002:row3:col7'] |
| C5_dimension_Q34 | fail | [mass] | mg | not captured | not captured | ['Baker_2020_table_3:row2:col1', 'Baker_2020_table_3:row2:col2', 'Baker_2020_table_3:row2:col3', 'Baker_2020_table_3:row2:col4', 'Baker_2020_table_3:row2:col5', 'Baker_2020_table_3:row2:col6', 'Baker_2020_table_3:row2:col7'] |
| C5_dimension_Q37 | fail | [mass] | mg | not captured | not captured | ['prp2567-tbl-0002:row5:col1', 'prp2567-tbl-0002:row5:col2', 'prp2567-tbl-0002:row5:col3', 'prp2567-tbl-0002:row5:col4', 'prp2567-tbl-0002:row5:col5', 'prp2567-tbl-0002:row5:col6', 'prp2567-tbl-0002:row5:col7'] |
| C5_dimension_Q71 | fail | [mass] | mg | not captured | not captured | ['prp2567-tbl-0002:row4:col1', 'prp2567-tbl-0002:row4:col2', 'prp2567-tbl-0002:row4:col3', 'prp2567-tbl-0002:row4:col4', 'prp2567-tbl-0002:row4:col5', 'prp2567-tbl-0002:row4:col6', 'prp2567-tbl-0002:row4:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0062 | not captured | not captured | ['Baker_2020:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0062 L/h | not captured | not captured | ['Baker_2020:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.64 L | not captured | not captured | ['Baker_2020:results_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_eptinezumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Baker_2020` / `Baker_2020::reference`)


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
