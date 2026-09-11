# flucloxacillin — `Flucloxacillin_Drennan2021v2_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge

**Steps:**
1. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `flucloxacillin`, measured `free flucloxacillin`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Drennan PG; Green JK; Gardiner SJ; Metcalf SCL; Kirkpatrick CMJ; Everts RJ; et al. et al. (2021). British journal of clinical pharmacology 87
  ·  DOI: [10.1111/bcp.14887](https://doi.org/10.1111/bcp.14887)

## Model component
<dbs-pgx drug="flucloxacillin" model-id="Flucloxacillin_Drennan2021v2_reference" status="not_modelled" stale="false" population="adults treated with oral flucloxacillin plus probenecid" measured-compound="free flucloxacillin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag,abs (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | 54.8 | boundary (0.8) | Drennan_2021_2_table_p5_1:row1:col1, Drennan_2021_2_table_p5_1:row1:col2, Drennan_2021_2_table_p5_1:row1:col3, Drennan_2021_2_table_p5_1:row1:col4, Drennan_2021_2_table_p5_1:row1:col5, Drennan_2021_2_table_p5_1:row1:col6 | — | not captured |
| kabs (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | [1] / [h] | 18.0 | exact (1.0) | Drennan_2021_2_table_p5_1:row3:col1, Drennan_2021_2_table_p5_1:row3:col2, Drennan_2021_2_table_p5_1:row3:col3, Drennan_2021_2_table_p5_1:row3:col4, Drennan_2021_2_table_p5_1:row3:col5, Drennan_2021_2_table_p5_1:row3:col6 | — | not captured |
| Vpop (L) | `Q61` · V | —(suppressed) | L | — | [l] | 17.2 | llm (0.5) | Drennan_2021_2_table_p5_1:row5:col1, Drennan_2021_2_table_p5_1:row5:col2, Drennan_2021_2_table_p5_1:row5:col3, Drennan_2021_2_table_p5_1:row5:col4, Drennan_2021_2_table_p5_1:row5:col5, Drennan_2021_2_table_p5_1:row5:col6 | — | not captured |
| CLpop (L h−1) | `Q22` · CL | —(suppressed) | L h−1 | — | [l] / [h] | 20.9 | llm (0.5) | Drennan_2021_2_table_p5_1:row7:col1, Drennan_2021_2_table_p5_1:row7:col2, Drennan_2021_2_table_p5_1:row7:col3, Drennan_2021_2_table_p5_1:row7:col4, Drennan_2021_2_table_p5_1:row7:col5, Drennan_2021_2_table_p5_1:row7:col6 | — | not captured |
| βCLprobenecid | `Q23` · CLb | —(suppressed) | not captured | — | not captured | 22.3 | llm (0.5) | Drennan_2021_2_table_p5_1:row8:col4, Drennan_2021_2_table_p5_1:row8:col5, Drennan_2021_2_table_p5_1:row8:col6 | — | not captured |
| ωabs | `Q312` · IIV | —(suppressed) | not captured | — | not captured | 61.7 | llm (0.5) | Drennan_2021_2_table_p5_1:row14:col1, Drennan_2021_2_table_p5_1:row14:col2, Drennan_2021_2_table_p5_1:row14:col3, Drennan_2021_2_table_p5_1:row14:col4, Drennan_2021_2_table_p5_1:row14:col5, Drennan_2021_2_table_p5_1:row14:col6 | — | not captured |
| ωV | `Q65` · Vss | —(suppressed) | not captured | — | not captured | 97.5 | llm (0.5) | Drennan_2021_2_table_p5_1:row16:col1, Drennan_2021_2_table_p5_1:row16:col2, Drennan_2021_2_table_p5_1:row16:col3, Drennan_2021_2_table_p5_1:row16:col4, Drennan_2021_2_table_p5_1:row16:col5, Drennan_2021_2_table_p5_1:row16:col6 | — | not captured |
| γabs | `Q89` · t1/2γ | —(suppressed) | not captured | — | not captured | 31.2 | llm (0.5) | Drennan_2021_2_table_p5_1:row19:col1, Drennan_2021_2_table_p5_1:row19:col2, Drennan_2021_2_table_p5_1:row19:col3, Drennan_2021_2_table_p5_1:row19:col4, Drennan_2021_2_table_p5_1:row19:col5, Drennan_2021_2_table_p5_1:row19:col6 | — | not captured |
| γV | `Q77` · V3 | —(suppressed) | not captured | — | not captured | 20.8 | llm (0.5) | Drennan_2021_2_table_p5_1:row21:col1, Drennan_2021_2_table_p5_1:row21:col2, Drennan_2021_2_table_p5_1:row21:col3, Drennan_2021_2_table_p5_1:row21:col4, Drennan_2021_2_table_p5_1:row21:col5, Drennan_2021_2_table_p5_1:row21:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q83 ('βTlag,abs', value '0.448') — already have one for this compound
- dropped duplicate Q49 ('βkabs', value '0.308') — already have one for this compound
- dropped duplicate Q22 ('βCL fasting', value '0.18') — already have one for this compound
- dropped unlinked row (NIL): 'βFferrite' — extend the ontology if this is a real PK parameter (source ['Drennan_2021_2_table_p5_1:row11:col1', 'Drennan_2021_2_table_p5_1:row11:col2', 'Drennan_2021_2_table_p5_1:row11:col3', 'Drennan_2021_2_table_p5_1:row11:col4', 'Drennan_2021_2_table_p5_1:row11:col5', 'Drennan_2021_2_table_p5_1:row11:col6'])
- dropped duplicate Q49 ('ωkabs', value '0.203') — already have one for this compound
- dropped duplicate Q22 ('ωCL', value '0.073') — already have one for this compound
- dropped duplicate Q89 ('γk', value '0.273') — already have one for this compound
- dropped duplicate Q22 ('γCL', value '0.058') — already have one for this compound
- dropped unlinked row (NIL): 'a (mg/L)' — extend the ontology if this is a real PK parameter (source ['Drennan_2021_2_table_p5_1:row25:col1', 'Drennan_2021_2_table_p5_1:row25:col2', 'Drennan_2021_2_table_p5_1:row25:col3', 'Drennan_2021_2_table_p5_1:row25:col4', 'Drennan_2021_2_table_p5_1:row25:col5', 'Drennan_2021_2_table_p5_1:row25:col6'])
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['Drennan_2021_2_table_p5_1:row26:col1', 'Drennan_2021_2_table_p5_1:row26:col2', 'Drennan_2021_2_table_p5_1:row26:col3', 'Drennan_2021_2_table_p5_1:row26:col4', 'Drennan_2021_2_table_p5_1:row26:col5', 'Drennan_2021_2_table_p5_1:row26:col6'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=free flucloxacillin

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Drennan_2021_2_table_p5_1:row0:col7 = '[median (90% CI)]'
- unparsed cell Drennan_2021_2_table_p5_1:row1:col7 = '0.321 (0.057–0.552)'
- unparsed cell Drennan_2021_2_table_p5_1:row2:col7 = '-0.78 (-3.72 to -0.287)'
- unparsed cell Drennan_2021_2_table_p5_1:row3:col7 = '0.625 (0.448–0.788)'
- unparsed cell Drennan_2021_2_table_p5_1:row4:col7 = '1.18 (0.138–1.62)'
- unparsed cell Drennan_2021_2_table_p5_1:row5:col7 = '535 (291–641)'
- unparsed cell Drennan_2021_2_table_p5_1:row6:col4 = '1*'
- unparsed cell Drennan_2021_2_table_p5_1:row7:col7 = '413 (305–581)'
- unparsed cell Drennan_2021_2_table_p5_1:row8:col7 = '0.013 (0.006–0.019)'
- unparsed cell Drennan_2021_2_table_p5_1:row9:col4 = '0.75*'
- unparsed cell Drennan_2021_2_table_p5_1:row10:col7 = '-0.668 (-0.987 to -0.396)'
- unparsed cell Drennan_2021_2_table_p5_1:row11:col7 = '1.01 (0.806–1.36)'
- unparsed cell Drennan_2021_2_table_p5_1:row14:col7 = '0.198 (0.073–0.442)'
- unparsed cell Drennan_2021_2_table_p5_1:row15:col7 = '0.163 (0.069–0.304)'
- unparsed cell Drennan_2021_2_table_p5_1:row16:col7 = '0.142 (0.04–0.297)'
- unparsed cell Drennan_2021_2_table_p5_1:row17:col7 = '0.251 (0.1–0.34)'
- unparsed cell Drennan_2021_2_table_p5_1:row19:col7 = '0.489 (0.055–0.686)'
- unparsed cell Drennan_2021_2_table_p5_1:row20:col7 = '0.185 (0.069–0.601)'
- unparsed cell Drennan_2021_2_table_p5_1:row21:col7 = '0.306 (0.19–0.508)'
- unparsed cell Drennan_2021_2_table_p5_1:row22:col7 = '0.27 (0.188–0.324)'
- unparsed cell Drennan_2021_2_table_p5_1:row25:col7 = '0.059 (0.003–0.093)'
- unparsed cell Drennan_2021_2_table_p5_1:row26:col7 = '0.206 (0.17–0.284)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row7:col1', 'Drennan_2021_2_table_p5_1:row7:col2', 'Drennan_2021_2_table_p5_1:row7:col3', 'Drennan_2021_2_table_p5_1:row7:col4', 'Drennan_2021_2_table_p5_1:row7:col5', 'Drennan_2021_2_table_p5_1:row7:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row3:col1', 'Drennan_2021_2_table_p5_1:row3:col2', 'Drennan_2021_2_table_p5_1:row3:col3', 'Drennan_2021_2_table_p5_1:row3:col4', 'Drennan_2021_2_table_p5_1:row3:col5', 'Drennan_2021_2_table_p5_1:row3:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row5:col1', 'Drennan_2021_2_table_p5_1:row5:col2', 'Drennan_2021_2_table_p5_1:row5:col3', 'Drennan_2021_2_table_p5_1:row5:col4', 'Drennan_2021_2_table_p5_1:row5:col5', 'Drennan_2021_2_table_p5_1:row5:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row1:col1', 'Drennan_2021_2_table_p5_1:row1:col2', 'Drennan_2021_2_table_p5_1:row1:col3', 'Drennan_2021_2_table_p5_1:row1:col4', 'Drennan_2021_2_table_p5_1:row1:col5', 'Drennan_2021_2_table_p5_1:row1:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 85.4 | not captured | not captured | ['Drennan_2021_2_table_p5_1:row7:col1', 'Drennan_2021_2_table_p5_1:row7:col2', 'Drennan_2021_2_table_p5_1:row7:col3', 'Drennan_2021_2_table_p5_1:row7:col4', 'Drennan_2021_2_table_p5_1:row7:col5', 'Drennan_2021_2_table_p5_1:row7:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_flucloxacillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Drennan_2021_2` / `Drennan_2021_2::adults treated with oral flucloxacillin plus probenecid`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference/Flucloxacillin_Drennan2021v2_reference_matlab.zip" download>Flucloxacillin_Drennan2021v2_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference/Flucloxacillin_Drennan2021v2_reference_matlab_simbio.zip" download>Flucloxacillin_Drennan2021v2_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference/Flucloxacillin_Drennan2021v2_reference_sbml.zip" download>Flucloxacillin_Drennan2021v2_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference/Flucloxacillin_Drennan2021v2_reference_cellml.zip" download>Flucloxacillin_Drennan2021v2_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
