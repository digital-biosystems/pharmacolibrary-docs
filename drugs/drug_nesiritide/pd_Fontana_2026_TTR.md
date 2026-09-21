<div class="pk-tab-mark" data-tab="Information"></div>

# serum transthyretin — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Fontana_2026`
- **model family:** `effect_compartment`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Fontana M; Algalarrondo V; Garcia-Pavia P; Maurer MS; Gillmore JD; Cappelli F; Kolachana K; Gao X; Jadhav S; Mehrotra N; Robbie G; Badri P et al. (2026). Clinical pharmacokinetics 65
  ·  DOI: [10.1007/s40262-026-01651-3](https://doi.org/10.1007/s40262-026-01651-3)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Overall population Week 3 — TTR percent reduction from baseline | `Q100` · not captured | 114 | not captured | not captured | llm (not captured) | tab_0:row3:col2 |
| Peak ss a — TTR percent reduction from baseline | `Q100` · not captured | 15 | not captured | not captured | llm_corrected (not captured) | tab_0:row4:col2 |
| Peak ss a | `Q32` · not captured | 87.6 | not captured | not captured | llm_confirmed (not captured) | tab_0:row4:col3 |
| Peak ss a | `Q32` · not captured | 91.6 | not captured | not captured | llm_confirmed (not captured) | tab_0:row4:col4 |
| Peak ss a | `Q32` · not captured | 87.1 | not captured | not captured | llm_confirmed (not captured) | tab_0:row4:col5 |
| Peak ss a | `Q32` · not captured | 86.4 | not captured | not captured | llm_confirmed (not captured) | tab_0:row4:col6 |
| Trough ss — TTR percent reduction from baseline | `Q37` · not captured | 118 | not captured | not captured | llm_confirmed (not captured) | tab_0:row5:col2 |
| Trough ss | `Q37` · not captured | 81.0 | not captured | not captured | llm_confirmed (not captured) | tab_0:row5:col3 |
| Trough ss | `Q37` · not captured | 86.2 | not captured | not captured | llm_confirmed (not captured) | tab_0:row5:col4 |
| Trough ss | `Q37` · not captured | 75.7 | not captured | not captured | llm_confirmed (not captured) | tab_0:row5:col5 |
| Trough ss | `Q37` · not captured | 84.1 | not captured | not captured | llm_confirmed (not captured) | tab_0:row5:col6 |
| Month 18 — TTR percent reduction from baseline | `Q100` · not captured | 85.4 | not captured | not captured | llm (not captured) | tab_0:row7:col2 |
| Overall population Week 6 — TTR percent reduction from baseline | `Q100` · not captured | 294 | not captured | not captured | llm (not captured) | tab_0:row9:col2 |
| Trough ss — TTR percent reduction from baseline | `Q37` · not captured | 307 | not captured | not captured | llm_confirmed (not captured) | tab_0:row10:col2 |
| Trough ss | `Q37` · not captured | 78.8 | not captured | not captured | llm_confirmed (not captured) | tab_0:row10:col3 |
| Trough ss | `Q37` · not captured | 82.5 | not captured | not captured | llm_confirmed (not captured) | tab_0:row10:col4 |
| Trough ss | `Q37` · not captured | 70.0 | not captured | not captured | llm_confirmed (not captured) | tab_0:row10:col5 |
| Trough ss | `Q37` · not captured | 80.5 | not captured | not captured | llm_confirmed (not captured) | tab_0:row10:col6 |
| Month 30 — TTR percent reduction from baseline | `Q100` · not captured | 81.0 | not captured | not captured | llm (not captured) | tab_0:row11:col2 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [nesiritide](drugs/drug_nesiritide/)</sub>
