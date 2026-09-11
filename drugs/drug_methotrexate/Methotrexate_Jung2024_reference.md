# methotrexate — `Methotrexate_Jung2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** a compartment is unreachable, or a metabolite is unlinked

**Steps:**
1. Check the record's links in _interpretv2.yaml — every compartment needs a path to the dosed one.
2. Parent/metabolite records commonly miss the formation link.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Jung YS; Son M; Lee SG; Chong JW; Kim SJ; Jang JE; et al. et al. (2024). British journal of clinical pharmacology 90
  ·  DOI: [10.1111/bcp.15969](https://doi.org/10.1111/bcp.15969)

## Model component
<dbs-pgx drug="methotrexate" model-id="Methotrexate_Jung2024_reference" status="rejected" stale="false" population="Korean patients with haematologic malignancy" measured-compound="methotrexate" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θV1 (L) | `Q63` · V1 | —(suppressed) | L | — | [l] | 24.67 | llm_confirmed (0.6) | Jung_2024_table_p6_1:row0:col1, Jung_2024_table_p6_1:row0:col2 | — | not captured |
| θV2 (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | 17.93 | llm_confirmed (0.6) | Jung_2024_table_p6_1:row1:col1, Jung_2024_table_p6_1:row1:col2 | — | not captured |
| θCL | `Q900` · θCL | —(suppressed) | L/h | — | not captured | 12.93 | not captured (not captured) | Jung_2024_table_p6_1:row2:col1, Jung_2024_table_p6_1:row2:col2 | — | not captured |
| θQ | `Q900` · θQ | —(suppressed) | L/h | — | not captured | 0.657 | not captured (not captured) | Jung_2024_table_p6_1:row3:col1, Jung_2024_table_p6_1:row3:col2 | — | not captured |
| absorption rate constant | `Q49` · kabs | —(suppressed) | day−1 | — | 1/h | not captured | review_gapfill (0.7) | Pan_2026:review | — | not captured |
| t lag,oral | `Q83` · tlag | —(suppressed) | hour | — | h | not captured | review_gapfill (0.7) | Tan_2024:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| θCL (L/h) | Q22 | not captured | llm_confirmed |
| θQ (L/h) | Q30 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q64 ('θAge−V2', value '-0.2464') — already have one for this compound
- unit_dimension_mismatch: 'θAge−CL (year−1)' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('θAge−CL (year−1)', value '-0.0086') — already have one for this compound
- dropped duplicate Q22 ('θCr−CL', value '-0.3176') — already have one for this compound
- dropped unlinked row (NIL): 'Factor' — extend the ontology if this is a real PK parameter (source ['Jung_2024_table_p6_1:row7:col1', 'Jung_2024_table_p6_1:row7:col2'])
- dropped unlinked row (NIL): 'π2V1 (CV%)' — extend the ontology if this is a real PK parameter (source ['Jung_2024_table_p6_1:row12:col1', 'Jung_2024_table_p6_1:row12:col2'])
- dropped unlinked row (NIL): 'π2CL (CV%)' — extend the ontology if this is a real PK parameter (source ['Jung_2024_table_p6_1:row13:col1', 'Jung_2024_table_p6_1:row13:col2'])
- dropped unlinked row (NIL): 'π2Q (CV%)' — extend the ontology if this is a real PK parameter (source ['Jung_2024_table_p6_1:row14:col1', 'Jung_2024_table_p6_1:row14:col2'])
- dropped unlinked row (NIL): 'ρπV1−πCL' — extend the ontology if this is a real PK parameter (source ['Jung_2024_table_p6_1:row15:col1', 'Jung_2024_table_p6_1:row15:col2'])
- routed 'ρπV1−πQ' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'ρπCL−πQ' — extend the ontology if this is a real PK parameter (source ['Jung_2024_table_p6_1:row17:col1', 'Jung_2024_table_p6_1:row17:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methotrexate
- bound model equation to Q22 (CL): TVCL = 12.89 ∗ (WT/50)^0.75 ∗ [1 - 0.0086 ∗ (Age - 14)] ∗ (Cr/0.55) -0.3176
- bound model equation to Q30 (Q): TVQ = 0.655∗(WT/50)^0.75
- Q22 (CL) is equation-defined: value moved to equation-variable 'θCL (L/h)'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'θQ (L/h)'; equation kept verbatim
- gap-filled Q49 (kabs) from Pan_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Tan_2024's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Jung_2024_table_p6_1:row0:col3 = '24.64 (20.88, 28.75)'
- unparsed cell Jung_2024_table_p6_1:row1:col3 = '17.69 (13.79, 23.00)'
- unparsed cell Jung_2024_table_p6_1:row2:col3 = '12.90 (11.60, 14.30)'
- unparsed cell Jung_2024_table_p6_1:row3:col3 = '0.655 (0.519, 0.825)'
- unparsed cell Jung_2024_table_p6_1:row4:col3 = '−0.2434 (−0.3458, −0.1341)'
- unparsed cell Jung_2024_table_p6_1:row5:col3 = '−0.0086 (−0.0117, −0.0056)'
- unparsed cell Jung_2024_table_p6_1:row6:col3 = '−0.3208 (−0.4675, −0.1590)'
- unparsed cell Jung_2024_table_p6_1:row7:col3 = '1.080 (0.999, 1.183)'
- unparsed cell Jung_2024_table_p6_1:row9:col3 = '26.35 (12.50, 38.34)'
- unparsed cell Jung_2024_table_p6_1:row10:col3 = '30.08 (20.91, 37.77)'
- unparsed cell Jung_2024_table_p6_1:row12:col3 = '92.79 (66.24, 108.8)'
- unparsed cell Jung_2024_table_p6_1:row13:col3 = '82.92 (70.69, 92.95)'
- unparsed cell Jung_2024_table_p6_1:row14:col3 = '180.5 (154.7, 203.6)'
- unparsed cell Jung_2024_table_p6_1:row15:col3 = '0.456 (0.188, 0.617)'
- unparsed cell Jung_2024_table_p6_1:row16:col3 = '0.500 (0.311, 0.642)'
- unparsed cell Jung_2024_table_p6_1:row17:col3 = '0.841 (0.762, 0.890)'
- unparsed cell Jung_2024_table_p6_1:row19:col3 = '41.97 (38.93, 44.81)'
- captured model equation TVCL = 12.89 ∗ (WT/50)^0.75 ∗ [1 - 0.0086 ∗ (Age - 14)] ∗ (Cr/0.55) -0.3176
- captured model equation TVQ = 0.655∗(WT/50)^0.75

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jung_2024_table_p6_1:row2:col1', 'Jung_2024_table_p6_1:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jung_2024_table_p6_1:row3:col1', 'Jung_2024_table_p6_1:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Pan_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jung_2024_table_p6_1:row0:col1', 'Jung_2024_table_p6_1:row0:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jung_2024_table_p6_1:row1:col1', 'Jung_2024_table_p6_1:row1:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tan_2024:review'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 25.1 L | not captured | not captured | ['Jung_2024_table_p6_1:row0:col1', 'Jung_2024_table_p6_1:row0:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 17.6 L | not captured | not captured | ['Jung_2024_table_p6_1:row1:col1', 'Jung_2024_table_p6_1:row1:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_methotrexate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jung_2024` / `Jung_2024::Korean patients with haematologic malignancy`)


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
