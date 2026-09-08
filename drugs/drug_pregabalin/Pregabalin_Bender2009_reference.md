# pregabalin — `Pregabalin_Bender2009_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Bender G; Gosset J; Florian J; Tan K; Field M; Marshall S; et al. et al. (2009). Pharmaceutical research 26
  ·  DOI: [10.1007/s11095-009-9942-y](https://doi.org/10.1007/s11095-009-9942-y)

## Model component
<dbs-pgx drug="pregabalin" model-id="Pregabalin_Bender2009_reference" status="rejected" stale="false" population="rats" measured-compound="pregabalin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/hr) | `Q22` · CL | —(suppressed) | L/hr | — | [l] / [h] | not captured | exact (1.0) | Tab4:row3:col1, Tab4:row3:col3, Tab4:row3:col4, Tab4:row3:col5, Tab4:row3:col7, Tab4:row3:col8, Tab4:row3:col9, Tab4:row3:col11, Tab4:row3:col12 | — | not captured |
| V1 (L) | `Q63` · V1 | —(suppressed) | L | — | [l] | not captured | exact (1.0) | Tab4:row4:col1, Tab4:row4:col3, Tab4:row4:col4, Tab4:row4:col5, Tab4:row4:col7, Tab4:row4:col8, Tab4:row4:col9, Tab4:row4:col11, Tab4:row4:col12 | — | not captured |
| Q (L/hr) | `Q30` · Q | —(suppressed) | L/hr | — | [l] / [h] | not captured | exact (1.0) | Tab4:row5:col1, Tab4:row5:col3, Tab4:row5:col4, Tab4:row5:col5, Tab4:row5:col7, Tab4:row5:col8, Tab4:row5:col9, Tab4:row5:col11, Tab4:row5:col12 | — | not captured |
| V2 (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | not captured | exact (1.0) | Tab4:row6:col1, Tab4:row6:col3, Tab4:row6:col4, Tab4:row6:col5, Tab4:row6:col7, Tab4:row6:col8, Tab4:row6:col9, Tab4:row6:col11, Tab4:row6:col12 | — | not captured |
| θSLD | `Q900` · θSLD | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| Absorption rate constant (k a ) | `Q49` · kabs | —(suppressed) | h À1 | — | 1/h | not captured | review_gapfill (0.7) | Bae_2016:review | — | not captured |
| Lag time (hour) | `Q83` · tlag | —(suppressed) | hour | — | h | not captured | review_gapfill (0.7) | van_2018:review | — | not captured |
| NAT2 | `Q900` · NAT2 | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['Tab4:row1:col1', 'Tab4:row1:col2', 'Tab4:row1:col3', 'Tab4:row1:col4', 'Tab4:row1:col5', 'Tab4:row1:col6', 'Tab4:row1:col7', 'Tab4:row1:col8', 'Tab4:row1:col9', 'Tab4:row1:col10', 'Tab4:row1:col11', 'Tab4:row1:col12'])
- routed 'ω1CL' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'ω1V1' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col1', 'Tab4:row8:col3', 'Tab4:row8:col4', 'Tab4:row8:col5', 'Tab4:row8:col7', 'Tab4:row8:col8', 'Tab4:row8:col9', 'Tab4:row8:col11', 'Tab4:row8:col12'])
- dropped unlinked row (NIL): 'ω1Q' — extend the ontology if this is a real PK parameter (source ['Tab4:row9:col1', 'Tab4:row9:col3', 'Tab4:row9:col4', 'Tab4:row9:col5', 'Tab4:row9:col7', 'Tab4:row9:col8', 'Tab4:row9:col9', 'Tab4:row9:col11', 'Tab4:row9:col12'])
- kept covariate coefficient θSLD=0.302 (covariate SLD) — not an ontology parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pregabalin
- gap-filled Q49 (kabs) from Bae_2016's review values (primary lacked it)
- gap-filled Q83 (tlag) from van_2018's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab4:row3:col2 = '19.08%'
- unparsed cell Tab4:row3:col6 = '14.59%'
- unparsed cell Tab4:row3:col10 = '8.83%'
- unparsed cell Tab4:row4:col2 = '3.38%'
- unparsed cell Tab4:row4:col6 = '3.38%'
- unparsed cell Tab4:row4:col10 = '3.27%'
- unparsed cell Tab4:row5:col2 = '32.00%'
- unparsed cell Tab4:row5:col6 = '35.76%'
- unparsed cell Tab4:row5:col10 = '18.08%'
- unparsed cell Tab4:row6:col2 = '41.48%'
- unparsed cell Tab4:row6:col6 = '51.99%'
- unparsed cell Tab4:row6:col10 = '38.82%'
- unparsed cell Tab4:row7:col2 = '24.74%'
- unparsed cell Tab4:row7:col6 = '15.91%'
- unparsed cell Tab4:row7:col10 = '14.63%'
- unparsed cell Tab4:row8:col2 = '9.38%'
- unparsed cell Tab4:row8:col6 = '9.26%'
- unparsed cell Tab4:row8:col10 = '8.72%'
- unparsed cell Tab4:row9:col2 = '40.00%'
- unparsed cell Tab4:row9:col6 = '40.87%'
- unparsed cell Tab4:row9:col10 = '15.94%'
- unparsed cell Tab4:row10:col2 = '27.07%'
- unparsed cell Tab4:row10:col6 = '19.52%'
- unparsed cell Tab4:row10:col10 = '18.52%'
- unparsed cell Tab4:row11:col2 = '8.96%'
- unparsed cell Tab4:row11:col6 = '8.75%'
- unparsed cell Tab4:row11:col10 = '8.33%'
- unparsed cell Tab4:row12:col6 = '23.05%'
- unparsed cell Tab4:row12:col10 = '28.37%'
- unparsed cell Tab4:row13:col2 = '18.32%'
- unparsed cell Tab4:row13:col6 = '18.53%'
- unparsed cell Tab4:row13:col10 = '18.85%'
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col3', 'Tab4:row3:col4', 'Tab4:row3:col5', 'Tab4:row3:col7', 'Tab4:row3:col8', 'Tab4:row3:col9', 'Tab4:row3:col11', 'Tab4:row3:col12'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row5:col1', 'Tab4:row5:col3', 'Tab4:row5:col4', 'Tab4:row5:col5', 'Tab4:row5:col7', 'Tab4:row5:col8', 'Tab4:row5:col9', 'Tab4:row5:col11', 'Tab4:row5:col12'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Bae_2016:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row4:col1', 'Tab4:row4:col3', 'Tab4:row4:col4', 'Tab4:row4:col5', 'Tab4:row4:col7', 'Tab4:row4:col8', 'Tab4:row4:col9', 'Tab4:row4:col11', 'Tab4:row4:col12'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row6:col1', 'Tab4:row6:col3', 'Tab4:row6:col4', 'Tab4:row6:col5', 'Tab4:row6:col7', 'Tab4:row6:col8', 'Tab4:row6:col9', 'Tab4:row6:col11', 'Tab4:row6:col12'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['van_2018:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.034 | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col3', 'Tab4:row3:col4', 'Tab4:row3:col5', 'Tab4:row3:col7', 'Tab4:row3:col8', 'Tab4:row3:col9', 'Tab4:row3:col11', 'Tab4:row3:col12'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.034 L/h | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col3', 'Tab4:row3:col4', 'Tab4:row3:col5', 'Tab4:row3:col7', 'Tab4:row3:col8', 'Tab4:row3:col9', 'Tab4:row3:col11', 'Tab4:row3:col12'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.27 L | not captured | not captured | ['Tab4:row4:col1', 'Tab4:row4:col3', 'Tab4:row4:col4', 'Tab4:row4:col5', 'Tab4:row4:col7', 'Tab4:row4:col8', 'Tab4:row4:col9', 'Tab4:row4:col11', 'Tab4:row4:col12'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.75 L | not captured | not captured | ['Tab4:row6:col1', 'Tab4:row6:col3', 'Tab4:row6:col4', 'Tab4:row6:col5', 'Tab4:row6:col7', 'Tab4:row6:col8', 'Tab4:row6:col9', 'Tab4:row6:col11', 'Tab4:row6:col12'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pregabalin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bender_2009` / `Bender_2009::reference`)


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
