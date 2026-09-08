# levomethadone — `Levomethadone_Sandbaumhter20212_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `racemic methadone`, measured `methadone enantiomers`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Sandbaumhüter FA; Gittel C; Larenza-Menzies MP; Theurillat R; Thormann W; Braun C et al. (2021). Electrophoresis 42
  ·  DOI: [10.1002/elps.202100115](https://doi.org/10.1002/elps.202100115)

## Model component
<dbs-pgx drug="levomethadone" model-id="Levomethadone_Sandbaumhter20212_reference" status="rejected" stale="false" population="anesthetized Shetland ponies" measured-compound="methadone enantiomers" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A (ng/mL) | `Q75` · Ct | —(suppressed) | ng/mL | — | [ng] / [ml] | not captured | llm (0.5) | tab_0:row2:col1, tab_0:row2:col3 | — | not captured |
| α (L/min) | `Q67` · λ1 | —(suppressed) | L/min | — | [l] / [min] | not captured | exact (1.0) | tab_0:row4:col1, tab_0:row4:col3 | — | not captured |
| β (L/min) | `Q68` · λ2 | —(suppressed) | L/min | — | [l] / [min] | not captured | exact (1.0) | tab_0:row5:col1, tab_0:row5:col3 | — | not captured |
| t 1/2 α (min) | `Q59` · t1/2α | —(suppressed) | min | — | [min] | not captured | llm (0.5) | tab_0:row6:col1, tab_0:row6:col3 | — | not captured |
| t 1/2 β (min) | `Q60` · t1/2β | —(suppressed) | min | — | [min] | not captured | llm (0.5) | tab_0:row7:col1, tab_0:row7:col3 | — | not captured |
| k10 (L/min) | `Q47` · kel | —(suppressed) | L/min | — | [l] / [min] | not captured | exact (1.0) | tab_0:row8:col1, tab_0:row8:col3 | — | not captured |
| k12 (L/min) | `Q301` · k12 | —(suppressed) | L/min | — | [l] / [min] | not captured | exact (1.0) | tab_0:row9:col1, tab_0:row9:col3 | — | not captured |
| k21 (L/min) * | `Q302` · k21 | —(suppressed) | not captured | — | not captured | not captured | boundary (0.8) | tab_0:row10:col1, tab_0:row10:col3 | — | not captured |
| V2 (L/kg) * | `Q64` · V2 | —(suppressed) | not captured | — | not captured | not captured | boundary (0.8) | tab_0:row11:col1, tab_0:row11:col3 | — | not captured |
| V1 (L/kg) | `Q63` · V1 | —(suppressed) | L/kg | — | [l] / [kg] | not captured | exact (1.0) | tab_0:row12:col1, tab_0:row12:col3 | — | not captured |
| V ss (L/kg) * | `Q65` · Vss | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_0:row13:col1, tab_0:row13:col3 | — | not captured |
| AUC (0→∞) (min ng/L) * | `Q88` · AUC | —(suppressed) | not captured | — | not captured | not captured | boundary (0.8) | tab_0:row14:col1, tab_0:row14:col3 | — | not captured |
| MRT (min) | `Q53` · MRT | —(suppressed) | min | — | [min] | not captured | exact (1.0) | tab_0:row15:col1, tab_0:row15:col3 | — | not captured |
| Cl B (mL/min/kg) * | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | boundary (0.8) | tab_0:row16:col1, tab_0:row16:col3 | — | not captured |
| C 0 (ng/mL) | `Q86` · C0 | —(suppressed) | ng/mL | — | [ng] / [ml] | not captured | llm (0.5) | tab_0:row17:col1, tab_0:row17:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'B (ng/mL) *' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col1', 'tab_0:row3:col3'])
- unit_dimension_mismatch: 'α (L/min)' → Q67 (unit '[length] ** 3 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'β (L/min)' → Q68 (unit '[length] ** 3 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'k10 (L/min)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k12 (L/min)' → Q301 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'C 0 (ng/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methadone enantiomers
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_0:row2:col2 = '2455.5 (1450.5-5263.8)'
- unparsed cell tab_0:row2:col4 = '2403.5 (1275.5-4683.2)'
- unparsed cell tab_0:row3:col2 = '379.7 (265.8-490.9)'
- unparsed cell tab_0:row3:col4 = '162.9 (70.74-204.1)'
- unparsed cell tab_0:row4:col2 = '0.873 (0.365-1.516)'
- unparsed cell tab_0:row4:col4 = '0.921 (0.368-1.475)'
- unparsed cell tab_0:row5:col2 = '0.014 (0.008-0.021)'
- unparsed cell tab_0:row5:col4 = '0.016 (0.007-0.033)'
- unparsed cell tab_0:row6:col2 = '0.794 (0.457-1.901)'
- unparsed cell tab_0:row6:col4 = '0.753 (0.470-1.885)'
- unparsed cell tab_0:row7:col2 = '51.41 (33.71-85.27)'
- unparsed cell tab_0:row7:col4 = '43.53 (20.72-104.12)'
- unparsed cell tab_0:row8:col2 = '0.080 (0.048-0.306)'
- unparsed cell tab_0:row8:col4 = '0.186 (0.096-0.587)'
- unparsed cell tab_0:row9:col2 = '0.660 (0.241-1.128)'
- unparsed cell tab_0:row9:col4 = '0.627 (0.253-0.837)'
- unparsed cell tab_0:row10:col2 = '0.102 (0.067-0.162)'
- unparsed cell tab_0:row10:col4 = '0.071 (0.026-0.094)'
- unparsed cell tab_0:row11:col2 = '0.407 (0.317-0.467)'
- unparsed cell tab_0:row11:col4 = '0.676 (0.460-1.644)'
- unparsed cell tab_0:row12:col2 = '0.076 (0.040-0.131)'
- unparsed cell tab_0:row12:col4 = '0.086 (0.046-0.166)'
- unparsed cell tab_0:row13:col2 = '0.467 (0.390-0.598)'
- unparsed cell tab_0:row13:col4 = '0.751 (0.506-1.180)'
- unparsed cell tab_0:row14:col2 = '34.94 (18.21-50.48)'
- unparsed cell tab_0:row14:col4 = '13.87 (8.27-15.80)'
- unparsed cell tab_0:row15:col2 = '65.96 (39.49-114.88)'
- unparsed cell tab_0:row15:col4 = '48.35 (18.68-113.92)'
- unparsed cell tab_0:row16:col2 = '6.42 (4.44-12.30)'
- unparsed cell tab_0:row16:col4 = '16.15 (14.18-27.08)'
- unparsed cell tab_0:row17:col2 = '2944.1 (1716.2-5566.8)'
- unparsed cell tab_0:row17:col4 = '2605.8 (1346.2-4853.7)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C5_dimension_Q301 | fail | [length] ** 3 / [time] | L/min | not captured | not captured | ['tab_0:row9:col1', 'tab_0:row9:col3'] |
| C5_dimension_Q47 | fail | [length] ** 3 / [time] | L/min | not captured | not captured | ['tab_0:row8:col1', 'tab_0:row8:col3'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['tab_0:row15:col1', 'tab_0:row15:col3'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row6:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['tab_0:row7:col1', 'tab_0:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row12:col1', 'tab_0:row12:col3'] |
| C5_dimension_Q67 | fail | [length] ** 3 / [time] | L/min | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col3'] |
| C5_dimension_Q68 | fail | [length] ** 3 / [time] | L/min | not captured | not captured | ['tab_0:row5:col1', 'tab_0:row5:col3'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_0:row2:col1', 'tab_0:row2:col3'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | ng/mL | not captured | not captured | ['tab_0:row17:col1', 'tab_0:row17:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 17.63 | not captured | not captured | ['tab_0:row16:col1', 'tab_0:row16:col3'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_levomethadone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sandbaumhüter_2021_2` / `Sandbaumhüter_2021_2::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
