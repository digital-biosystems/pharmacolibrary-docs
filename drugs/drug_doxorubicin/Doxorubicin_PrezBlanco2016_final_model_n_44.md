# doxorubicin — `Doxorubicin_PrezBlanco2016_final_model_n_44`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Pérez-Blanco JS; Santos-Buelga D; Fernández de Gatta MD; Hernández-Rivas JM; Martín A; García MJ et al. (2016). British journal of clinical pharmacology 82
  ·  DOI: [10.1111/bcp.13070](https://doi.org/10.1111/bcp.13070)

## Model component
<dbs-pgx drug="doxorubicin" model-id="Doxorubicin_PrezBlanco2016_final_model_n_44" status="extracted" stale="false" population="adults with non-Hodgkin&#39;s lymphoma" measured-compound="doxorubicin" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (l h | `Q22` · CL | 1.7 | l h | not captured | [h] · [l] | not captured | llm_confirmed (0.6) | tab_2:row2:col6, tab_2:row2:col7 | — | 22.9 (None% RSE) |
| V 1 (l) | `Q63` · V1 | 17.7 | l | 0.0177 | [l] | not captured | llm (0.6) | tab_2:row3:col3, tab_2:row3:col6, tab_2:row3:col8 | — | not captured |
| Q 2 (l h | `Q99` · Q2 | 3.4 | l h | not captured | [h] · [l] | not captured | llm (0.6) | tab_2:row4:col6, tab_2:row4:col7 | — | not captured |
| V 2 (l) | `Q64` · V2 | 1830 | l | 1.83 | [l] | not captured | llm (0.6) | tab_2:row5:col3, tab_2:row5:col6, tab_2:row5:col8 | — | not captured |
| Q 3 (l h | `Q308` · Q3 | 5.4 | l h | not captured | [h] · [l] | not captured | llm (0.6) | tab_2:row6:col6, tab_2:row6:col7 | — | 28.2 (None% RSE) |
| V 3 (l) | `Q77` · V3 | 71 | l | 0.07100000000000001 | [l] | not captured | llm (0.6) | tab_2:row7:col3, tab_2:row7:col6, tab_2:row7:col8 | — | not captured |
| F m | `Q45` · fm | 0.22 | n = 44 | not captured | [n=44] | not captured | llm (0.6) | tab_2:row10:col3, tab_2:row10:col4, tab_2:row10:col6, tab_2:row10:col7, tab_2:row10:col8 | — | not captured |
| V 5 (l) | `Q61` · V | 653 | l | 0.653 | [l] | not captured | llm (0.6) | tab_2:row11:col3, tab_2:row11:col6, tab_2:row11:col8 | — | not captured |
| Q 5 (l h | `Q30` · Q | 424 | l h | not captured | [h] · [l] | not captured | llm (0.6) | tab_2:row12:col2, tab_2:row12:col3, tab_2:row12:col6, tab_2:row12:col7 | — | 64.1 (None% RSE) |
| tlI2, min | `Q83` · tlag | 2.3 | min | 138.0 | h | not captured | review_gapfill (0.7) | Bérczi_1993:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'l h' (CL)
- unit_dimension_unknown: 'l h' (Q2)
- unit_dimension_unknown: 'l h' (Q3)
- dropped duplicate Q63 ('V 4 (l)', value '79.8') — already have one for this compound
- unit_dimension_unknown: 'l h' (CL)
- dropped duplicate Q22 ('CL m (l h', value '38.1') — already have one for this compound
- unit_dimension_unknown: 'n = 44' (fm)
- unit_dimension_unknown: 'l h' (Q)
- dropped unlinked row (NIL): 'Leukopenia' — extend the ontology if this is a real PK parameter (source ['Pérez-Blanco_2016_table_2:row1:col8', 'Pérez-Blanco_2016_table_2:row1:col13', 'Pérez-Blanco_2016_table_2:row1:col14'])
- dropped unlinked row (NIL): 'Neutropenia' — extend the ontology if this is a real PK parameter (source ['Pérez-Blanco_2016_table_2:row2:col8', 'Pérez-Blanco_2016_table_2:row2:col13', 'Pérez-Blanco_2016_table_2:row2:col14'])
- dropped unlinked row (NIL): 'Leucocyte count (10' — extend the ontology if this is a real PK parameter (source ['Pérez-Blanco_2016_table_2:row6:col1', 'Pérez-Blanco_2016_table_2:row6:col4', 'Pérez-Blanco_2016_table_2:row6:col8', 'Pérez-Blanco_2016_table_2:row8:col1', 'Pérez-Blanco_2016_table_2:row8:col4', 'Pérez-Blanco_2016_table_2:row8:col8'])
- dropped unlinked row (NIL): 'Neutrophil count (10' — extend the ontology if this is a real PK parameter (source ['Pérez-Blanco_2016_table_2:row7:col1', 'Pérez-Blanco_2016_table_2:row7:col4', 'Pérez-Blanco_2016_table_2:row7:col8', 'Pérez-Blanco_2016_table_2:row9:col1', 'Pérez-Blanco_2016_table_2:row9:col4', 'Pérez-Blanco_2016_table_2:row9:col8'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=doxorubicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'final model (n = 44)' subgroup of Pérez-Blanco_2016 (paper reports 5 populations: a u c m (mg h l, a u c total (ng ml, auc (mg h l, final model (n = 44), à1 ))
- gap-filled Q83 (tlag) from Bérczi_1993's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_2:row2:col1 = 'À1 )'
- unparsed cell tab_2:row2:col2 = '6 2 . 4'
- unparsed cell tab_2:row2:col3 = '1 1 . 5'
- unparsed cell tab_2:row4:col1 = 'À1 )'
- unparsed cell tab_2:row4:col2 = '5 0 . 7'
- unparsed cell tab_2:row4:col3 = '1 8 . 4'
- unparsed cell tab_2:row6:col1 = 'À1 )'
- unparsed cell tab_2:row6:col2 = '2 8 . 4'
- unparsed cell tab_2:row6:col3 = '1 3 . 5'
- unparsed cell tab_2:row9:col1 = 'À1 )'
- unparsed cell tab_2:row9:col2 = '2 6 . 8'
- unparsed cell tab_2:row9:col3 = '4 2 . 9'
- unparsed cell tab_2:row12:col1 = 'À1 )'
- unparsed cell Pérez-Blanco_2016_table_2:row6:col2 = 'À1 )'
- unparsed cell Pérez-Blanco_2016_table_2:row7:col2 = 'À1 )'
- unparsed cell Pérez-Blanco_2016_table_2:row8:col2 = 'À1 )'
- unparsed cell Pérez-Blanco_2016_table_2:row9:col2 = 'À1 )'
- companion parameter table 2 transcribed (46 record(s))
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row11:col3', 'tab_2:row11:col6', 'tab_2:row11:col8'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row3:col3', 'tab_2:row3:col6', 'tab_2:row3:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row5:col3', 'tab_2:row5:col6', 'tab_2:row5:col8'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row7:col3', 'tab_2:row7:col6', 'tab_2:row7:col8'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Bérczi_1993:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.7 | not captured | not captured | ['tab_2:row2:col6', 'tab_2:row2:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 653 L | not captured | not captured | ['tab_2:row11:col3', 'tab_2:row11:col6', 'tab_2:row11:col8'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 17.7 L | not captured | not captured | ['tab_2:row3:col3', 'tab_2:row3:col6', 'tab_2:row3:col8'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.83e+03 L | not captured | not captured | ['tab_2:row5:col3', 'tab_2:row5:col6', 'tab_2:row5:col8'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_doxorubicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Pérez-Blanco_2016` / `Pérez-Blanco_2016::final_model_n_44`)


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
