# University of Michigan Sedation Scale — PD  <span class="pk-badge pk-badge--orange">needs review</span>

- **paper:** `Colin_2025`
- **model family:** `categorical`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Colin PJ; Bichajian LH; Curt VR; Koomen JV; Stöhr T; Struys MMRF; Mason KP et al. (2025). Anesthesiology 143
  ·  DOI: [10.1097/aln.0000000000005560](https://doi.org/10.1097/aln.0000000000005560)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| EC50 -remimazolam -uMss 1, ng/ml | `Q321` · not captured | 206 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row4:col2 |
| EC50 -remimazolam -uMss 1, ng/ml — LcB | `Q321` · not captured | 151 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row4:col3 |
| EC50 -remimazolam -uMss 1, ng/ml — UcB | `Q321` · not captured | 281 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row4:col4 |
| EC50 -remimazolam -uMss 1, ng/ml | `Q321` · not captured | 68.2 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row4:col5 |
| EC50 -remimazolam -uMss 1, ng/ml — LcB | `Q321` · not captured | 55.9 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row4:col6 |
| EC50 -remimazolam -uMss 1, ng/ml — UcB | `Q321` · not captured | 120.1 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row4:col7 |
| EC50 -remimazolam -uMss 1, ng/ml — Shrinkage | `Q318` · not captured | 32 | not captured | not captured | llm_corrected (not captured) | tab_4:row4:col8 |
| ΔEC50 -remimazolam -uMss 2 vs. 1, ng/ml | `Q321` · not captured | 224 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row5:col2 |
| ΔEC50 -remimazolam -uMss 2 vs. 1, ng/ml — LcB | `Q321` · not captured | 162 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row5:col3 |
| ΔEC50 -remimazolam -uMss 2 vs. 1, ng/ml — UcB | `Q321` · not captured | 309 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row5:col4 |
| ΔEC50 -remimazolam -uMss 3 vs. 2, ng/ml | `Q321` · not captured | 347 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row6:col2 |
| ΔEC50 -remimazolam -uMss 3 vs. 2, ng/ml — LcB | `Q321` · not captured | 249 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row6:col3 |
| ΔEC50 -remimazolam -uMss 3 vs. 2, ng/ml — UcB | `Q321` · not captured | 488 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row6:col4 |
| EC50 -fentanyl -uMss 1, ng/ml | `Q321` · not captured | 0.560 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row8:col2 |
| EC50 -fentanyl -uMss 1, ng/ml — LcB | `Q321` · not captured | 0.49 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row8:col3 |
| EC50 -fentanyl -uMss 1, ng/ml — UcB | `Q321` · not captured | 0.73 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row8:col4 |
| ΔEC50 -fentanyl -uMss 2 vs. 1, ng/ml | `Q321` · not captured | 1.60 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row9:col2 |
| ΔEC50 -fentanyl -uMss 2 vs. 1, ng/ml — LcB | `Q321` · not captured | 1.09 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row9:col3 |
| ΔEC50 -fentanyl -uMss 2 vs. 1, ng/ml — UcB | `Q321` · not captured | 2.60 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row9:col4 |
| ΔEC50 -fentanyl -uMss 3 vs. 2, ng/ml | `Q321` · not captured | 4.14 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row10:col2 |
| ΔEC50 -fentanyl -uMss 3 vs. 2, ng/ml — LcB | `Q321` · not captured | 2.59 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row10:col3 |
| ΔEC50 -fentanyl -uMss 3 vs. 2, ng/ml — UcB | `Q321` · not captured | 41.7 | ng/ml | not captured | llm_confirmed (not captured) | tab_4:row10:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

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
<sub>← back to [fentanyl](drugs/drug_fentanyl/)</sub>
