# methadone — `Methadone_Foster2004_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Foster DJ; Somogyi AA; White JM; Bochner F et al. (2004). British journal of clinical pharmacology 57
  ·  DOI: [10.1111/j.1365-2125.2004.02079.x](https://doi.org/10.1111/j.1365-2125.2004.02079.x)

## Model component
<dbs-pgx drug="methadone" model-id="Methadone_Foster2004_reference" status="extracted" stale="false" population="methadone maintenance patients" measured-compound="methadone" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (l h -1 ) | `Q27` · CL/F | 0.19 | l h -1 | 5.277777777777778e-08 | [l] / [h] | not captured | exact (1.0) | tab_1:row1:col4 | — | not captured |
| k 12 (h -1 ) | `Q301` · k12 | 0.16 | h -1 | 4.4444444444444447e-05 | [1] / [h] | not captured | llm (0.5) | tab_1:row3:col4 | — | not captured |
| AUC t (mg.hr. ml -1 ) † | `Q88` · AUC | 0.026 | not captured | not captured | not captured | not captured | boundary (0.8) | tab_1:row12:col4 | — | not captured |
| C last (ng.ml -1 ) † | `Q75` · Ct | 0.24 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row15:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V/F' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- covariate category for ktr from footnote/prose kept as documentation only (['tab_1:footnote'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'tlag' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 't1/2z' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V/F' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V/F' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V/F' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'AUCSS' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'MRT' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'tmax' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Cmax' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Ctrough' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=methadone

**Extraction notes:**
- unparsed cell tab_1:row1:col1 = '8.5 (7.6, 9.5)'
- unparsed cell tab_1:row1:col2 = '8.7 (7.9, 9.6)'
- unparsed cell tab_1:row1:col3 = '8.3 (7.3, 9.5)'
- unparsed cell tab_1:row2:col1 = '112 (107, 118)'
- unparsed cell tab_1:row2:col2 = '145 (138, 152)'
- unparsed cell tab_1:row2:col3 = '94 (89, 99)'
- unparsed cell tab_1:row2:col4 = '&lt;0.0001'
- unparsed cell tab_1:row3:col1 = '0.57 (0.52, 0.61)'
- unparsed cell tab_1:row3:col2 = '0.54 (0.50, 0.58)'
- unparsed cell tab_1:row3:col3 = '0.55 (0.51, 0.59)'
- unparsed cell tab_1:row4:col1 = '0.20 (0.19, 0.21)'
- unparsed cell tab_1:row4:col2 = '0.18 (0.16, 0.19)'
- unparsed cell tab_1:row4:col3 = '0.21 (0.20, 0.23)'
- unparsed cell tab_1:row4:col4 = '&lt;0.0001'
- unparsed cell tab_1:row5:col1 = '0.59 (0.54, 0.63)'
- unparsed cell tab_1:row5:col2 = '0.55 (0.51, 0.60)'
- unparsed cell tab_1:row5:col3 = '0.62 (0.57, 0.67)'
- unparsed cell tab_1:row5:col4 = '&lt;0.0001'
- unparsed cell tab_1:row6:col1 = '0.45 (0.40, 0.49)'
- unparsed cell tab_1:row6:col2 = '0.53 (0.49, 0.58)'
- unparsed cell tab_1:row6:col3 = '0.39 (0.35, 0.43)'
- unparsed cell tab_1:row6:col4 = '&lt;0.0001'
- unparsed cell tab_1:row7:col1 = '0.83 (0.78, 0.88)'
- unparsed cell tab_1:row7:col2 = '0.90 (0.85, 0.95)'
- unparsed cell tab_1:row7:col3 = '0.82 (0.78, 0.87)'
- unparsed cell tab_1:row7:col4 = '&lt;0.0001'
- unparsed cell tab_1:row8:col1 = '39 (35, 43)'
- unparsed cell tab_1:row8:col2 = '51 (45, 57)'
- unparsed cell tab_1:row8:col3 = '31 (28, 35)'
- unparsed cell tab_1:row8:col4 = '&lt;0.0001'
- unparsed cell tab_1:row9:col1 = '440 (398, 487)'
- unparsed cell tab_1:row9:col2 = '597 (538, 663)'
- unparsed cell tab_1:row9:col3 = '345 (312, 382)'
- unparsed cell tab_1:row9:col4 = '&lt;0.0001'
- unparsed cell tab_1:row10:col1 = '321 (283, 364)'
- unparsed cell tab_1:row10:col2 = '444 (390, 504)'
- unparsed cell tab_1:row10:col3 = '246 (217, 279)'
- unparsed cell tab_1:row10:col4 = '&lt;0.0001'
- unparsed cell tab_1:row11:col1 = '474 (428, 525)'
- unparsed cell tab_1:row11:col2 = '637 (573, 707)'
- unparsed cell tab_1:row11:col3 = '376 (339, 417)'
- unparsed cell tab_1:row11:col4 = '&lt;0.0001'
- unparsed cell tab_1:row12:col1 = '8.27 (7.39, 9.26)'
- unparsed cell tab_1:row12:col2 = '4.02 (3.64, 4.44)'
- unparsed cell tab_1:row12:col3 = '4.20 (3.69, 4.79)'
- unparsed cell tab_1:row13:col1 = '52 (46, 58)'
- unparsed cell tab_1:row13:col2 = '69 (61, 77)'
- unparsed cell tab_1:row13:col3 = '41 (37, 47)'
- unparsed cell tab_1:row13:col4 = '&lt;0.0001'
- unparsed cell tab_1:row14:col1 = '494 (448, 544)'
- unparsed cell tab_1:row14:col2 = '225 (206, 246)'
- unparsed cell tab_1:row14:col3 = '268 (241, 298)'
- unparsed cell tab_1:row14:col4 = '&lt;0.0001'
- unparsed cell tab_1:row15:col1 = '269 (236, 308)'
- unparsed cell tab_1:row15:col2 = '139 (124, 156)'
- unparsed cell tab_1:row15:col3 = '128 (109, 150)'
- unparsed cell tab_1:row16:col1 = '2.3 (2.2, 2.5)'
- unparsed cell tab_1:row16:col2 = '2.5 (2.3, 2.7)'
- unparsed cell tab_1:row16:col3 = '2.2 (2.1, 2.4)'
- unparsed cell tab_1:row16:col4 = '&lt;0.0001'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row1:col4'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row3:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_methadone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Foster_2004` / `Foster_2004::reference`)


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
