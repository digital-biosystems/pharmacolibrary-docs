# telmisartan — `Telmisartan_Tatami2003_final`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Tatami S; Sarashina A; Yamamura N; Igarashi T; Tanigawara Y et al. (2003). Drug metabolism and pharmacokinetics 18
  ·  DOI: [10.2133/dmpk.18.203](https://doi.org/10.2133/dmpk.18.203)

## Model component
<dbs-pgx drug="telmisartan" model-id="Telmisartan_Tatami2003_final" status="extracted" stale="false" population="healthy volunteers and hypertensive patients" measured-compound="telmisartan" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V 1 W F | `Q290` · V1/F | 192.0 | not captured | not captured | not captured | not captured | llm (0.6) | Tatami_2003_table_4:row1:col1, Tatami_2003_table_4:row1:col2, Tatami_2003_table_4:row1:col4 | — | not captured |
| Q W F | `Q30` · Q | 79.7 | not captured | not captured | not captured | not captured | llm (0.6) | Tatami_2003_table_4:row2:col1, Tatami_2003_table_4:row2:col2, Tatami_2003_table_4:row2:col4 | — | not captured |
| V 2 W F | `Q82` · V2/F | 996 | not captured | not captured | not captured | not captured | llm (0.6) | Tatami_2003_table_4:row3:col1, Tatami_2003_table_4:row3:col2, Tatami_2003_table_4:row3:col4 | — | not captured |
| Ka | `Q49` · kabs | 0.330 | not captured | not captured | not captured | not captured | exact (1.0) | Tatami_2003_table_4:row4:col1, Tatami_2003_table_4:row4:col2, Tatami_2003_table_4:row4:col4 | — | not captured |
| Absorption lag time | `Q83` · tlag | 0.404 | not captured | not captured | not captured | not captured | exact (1.0) | Tatami_2003_table_4:row5:col1, Tatami_2003_table_4:row5:col2, Tatami_2003_table_4:row5:col4 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 18.3 | L/h | 5.0833333333333335e-06 | L/h | not captured | review_gapfill (0.7) | Jeong_2025:review | — | not captured |
| ABCC2 | `Q900` · ABCC2 | {'C/C': 0.0, 'C/T': -0.0269, 'T/T': -0.0853} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row1:col2', 'Tatami_2003_table_3:row1:col3', 'Tatami_2003_table_3:row1:col6', 'Tatami_2003_table_3:row1:col7', 'Tatami_2003_table_3:row1:col8', 'Tatami_2003_table_3:row1:col10', 'Tatami_2003_table_3:row1:col11', 'Tatami_2003_table_3:row1:col12', 'Tatami_2003_table_3:row1:col13', 'Tatami_2003_table_3:row1:col14'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row2:col2', 'Tatami_2003_table_3:row2:col3', 'Tatami_2003_table_3:row2:col6', 'Tatami_2003_table_3:row2:col7', 'Tatami_2003_table_3:row2:col8', 'Tatami_2003_table_3:row2:col10', 'Tatami_2003_table_3:row2:col11', 'Tatami_2003_table_3:row2:col12', 'Tatami_2003_table_3:row2:col13', 'Tatami_2003_table_3:row2:col14'])
- dropped unlinked row (NIL): '3M a l e80' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row3:col3', 'Tatami_2003_table_3:row3:col4', 'Tatami_2003_table_3:row3:col6', 'Tatami_2003_table_3:row3:col7', 'Tatami_2003_table_3:row3:col8', 'Tatami_2003_table_3:row3:col10', 'Tatami_2003_table_3:row3:col11', 'Tatami_2003_table_3:row3:col12'])
- dropped unlinked row (NIL): '4M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row4:col3', 'Tatami_2003_table_3:row4:col4', 'Tatami_2003_table_3:row4:col6', 'Tatami_2003_table_3:row4:col7', 'Tatami_2003_table_3:row4:col8', 'Tatami_2003_table_3:row4:col10', 'Tatami_2003_table_3:row4:col11', 'Tatami_2003_table_3:row4:col12'])
- dropped unlinked row (NIL): '5M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row5:col3', 'Tatami_2003_table_3:row5:col4', 'Tatami_2003_table_3:row5:col6', 'Tatami_2003_table_3:row5:col7', 'Tatami_2003_table_3:row5:col8', 'Tatami_2003_table_3:row5:col10', 'Tatami_2003_table_3:row5:col11', 'Tatami_2003_table_3:row5:col12'])
- dropped unlinked row (NIL): '6M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row6:col2', 'Tatami_2003_table_3:row6:col3', 'Tatami_2003_table_3:row6:col4', 'Tatami_2003_table_3:row6:col6', 'Tatami_2003_table_3:row6:col7', 'Tatami_2003_table_3:row6:col8', 'Tatami_2003_table_3:row6:col10', 'Tatami_2003_table_3:row6:col11'])
- dropped unlinked row (NIL): '7M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row7:col2', 'Tatami_2003_table_3:row7:col3', 'Tatami_2003_table_3:row7:col4', 'Tatami_2003_table_3:row7:col6', 'Tatami_2003_table_3:row7:col7', 'Tatami_2003_table_3:row7:col8', 'Tatami_2003_table_3:row7:col10', 'Tatami_2003_table_3:row7:col11'])
- dropped unlinked row (NIL): '8M a l e6 0' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_3:row8:col2', 'Tatami_2003_table_3:row8:col3', 'Tatami_2003_table_3:row8:col4', 'Tatami_2003_table_3:row8:col6', 'Tatami_2003_table_3:row8:col7', 'Tatami_2003_table_3:row8:col8', 'Tatami_2003_table_3:row8:col10', 'Tatami_2003_table_3:row8:col11'])
- dropped unlinked row (NIL): 'CLW F' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_4:row0:col1', 'Tatami_2003_table_4:row0:col2', 'Tatami_2003_table_4:row0:col4'])
- dropped unlinked row (NIL): 's 2' — extend the ontology if this is a real PK parameter (source ['Tatami_2003_table_4:row7:col1', 'Tatami_2003_table_4:row7:col2', 'Tatami_2003_table_4:row7:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=telmisartan
- model-stage split: 'final estimates of the model parameters' is the final model of Tatami_2003 (paper reports 5 stages: calculated exposures, covariates, estimated parameters, final estimates of the model parameters, value); same population, different model-building step
- gap-filled Q27 (CL/F) from Jeong_2025's review values (primary lacked it)

**Extraction notes:**
- final table tab_3: grid unusable → re-running vision table extraction for Tatami_2003
- unparsed cell Tatami_2003_table_3:row6:col1 = '5 0No'
- unparsed cell Tatami_2003_table_3:row7:col1 = '5 0Y e s'
- unparsed cell Tatami_2003_table_3:row8:col1 = '5 0Y e s'
- companion parameter table 3 transcribed (87 record(s))
- unparsed cell Tatami_2003_table_4:row0:col3 = '(36.3, 96.9)'
- unparsed cell Tatami_2003_table_4:row1:col3 = '(129.0, 318.8)'
- unparsed cell Tatami_2003_table_4:row2:col3 = '(60.1, 114.2)'
- unparsed cell Tatami_2003_table_4:row3:col3 = '(703, 1597)'
- unparsed cell Tatami_2003_table_4:row4:col3 = '(0.256, 0.444)'
- unparsed cell Tatami_2003_table_4:row5:col3 = '(0.345, 0.484)'
- unparsed cell Tatami_2003_table_4:row7:col3 = '(0.140, 0.742)'
- companion parameter table 4 transcribed (21 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jeong_2025:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 18.3 L/h | not captured | not captured | ['Jeong_2025:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_telmisartan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tatami_2003` / `Tatami_2003::final`)


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
