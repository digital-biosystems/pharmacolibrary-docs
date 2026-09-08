# oxycodone — `Oxycodone_Saari2012_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Saari TI; Ihmsen H; Neuvonen PJ; Olkkola KT; Schwilden H et al. (2012). British journal of anaesthesia 108
  ·  DOI: [10.1093/bja/aer395](https://doi.org/10.1093/bja/aer395)

## Model component
<dbs-pgx drug="oxycodone" model-id="Oxycodone_Saari2012_reference" status="rejected" stale="false" population="adults and elderly patients" measured-compound="oxycodone" parameterization="mechanistic" topology="3C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| u 1 (litre h 21 ) | `Q24` · CLu | —(suppressed) | litre h 21 | — | [l] · [h21] | not captured | llm (0.5) | tab_1:row2:col1, tab_1:row2:col2, tab_1:row2:col3, tab_1:row2:col4 | — | not captured |
| u 2 (litre) | `Q61` · V | —(suppressed) | litre | — | [l] | not captured | llm (0.5) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col4 | — | not captured |
| t1 2 a (min) | `Q57` · t1/2z | —(suppressed) | min | — | [min] | not captured | llm (0.5) | tab_1:row9:col2, tab_1:row9:col4 | — | not captured |
| t1 2 b (h) | `Q60` · t1/2β | —(suppressed) | h | — | [h] | not captured | llm (0.5) | tab_1:row10:col2, tab_1:row10:col4 | — | not captured |
| V ss (litre) | `Q65` · Vss | —(suppressed) | litre | — | [l] | not captured | llm (0.5) | tab_1:row11:col2, tab_1:row11:col4 | — | not captured |
| v 2 1 | `Q63` · V1 | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_1:row13:col2, tab_1:row13:col3, tab_1:row13:col4 | — | not captured |
| v 2 2 | `Q64` · V2 | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_1:row14:col2, tab_1:row14:col3, tab_1:row14:col4 | — | not captured |
| v 2 3 | `Q77` · V3 | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_1:row15:col2, tab_1:row15:col3, tab_1:row15:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'litre h 21' (CLu)
- unit_dimension_unknown: 'litre h 21' (CLu)
- dropped duplicate Q24 ('u 3 (litre h 21 )', value '1153') — already have one for this compound
- dropped duplicate Q61 ('u 4 (litre)', value '133') — already have one for this compound
- dropped unlinked row (NIL): 'u 5 *' — extend the ontology if this is a real PK parameter (source ['tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col4'])
- dropped unlinked row (NIL): 'u 6' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4'])
- dropped unlinked row (NIL): 'u 7' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col4'])
- dropped duplicate Q64 ('v 2 4', value '0.063') — already have one for this compound
- dropped unlinked row (NIL): 's 1' — extend the ontology if this is a real PK parameter (source ['tab_1:row18:col2', 'tab_1:row18:col3', 'tab_1:row18:col4'])
- dropped unlinked row (NIL): 's 2 (ng ml 21 )' — extend the ontology if this is a real PK parameter (source ['tab_1:row19:col2', 'tab_1:row19:col3', 'tab_1:row19:col4'])
- dropped unlinked row (NIL): 'DV vs PRED (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row21:col1', 'tab_1:row24:col1'])
- dropped unlinked row (NIL): 'DV vs IPRED (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row22:col1', 'tab_1:row25:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxycodone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_1:row2:col5 = '45.6, 50.8'
- unparsed cell tab_1:row3:col5 = '121, 199'
- unparsed cell tab_1:row4:col1 = 'C L 2 ¼u 3'
- unparsed cell tab_1:row4:col5 = '420, 1989'
- unparsed cell tab_1:row5:col1 = 'V 2 ¼u 4'
- unparsed cell tab_1:row5:col5 = '85.0, 165'
- unparsed cell tab_1:row6:col5 = '0.33, 0.77'
- unparsed cell tab_1:row7:col5 = '20.28, 0.074'
- unparsed cell tab_1:row8:col5 = '2.91, 6.41'
- unparsed cell tab_1:row9:col5 = '1.5, 6.1'
- unparsed cell tab_1:row10:col5 = '3.9, 4.4'
- unparsed cell tab_1:row11:col5 = '268, 299'
- unparsed cell tab_1:row13:col5 = '0.036, 0.067'
- unparsed cell tab_1:row14:col5 = '0.094, 0.21'
- unparsed cell tab_1:row15:col5 = '0.25, 4.6'
- unparsed cell tab_1:row16:col5 = '0.023, 0.28'
- unparsed cell tab_1:row18:col5 = '0.096, 0.126'
- unparsed cell tab_1:row19:col5 = '0.077, 0.165'
- LLM region Saari_2012:discussion_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_1:row9:col2', 'tab_1:row9:col4'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['tab_1:row10:col2', 'tab_1:row10:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row11:col2', 'tab_1:row11:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 48.1 | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3', 'tab_1:row2:col4'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_oxycodone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Saari_2012` / `Saari_2012::reference`)


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
