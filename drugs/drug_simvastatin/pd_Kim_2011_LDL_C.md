# Low-density lipoprotein-cholesterol — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Kim_2011`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Kim J; Ahn BJ; Chae HS; Han S; Doh K; Choi J; et al. et al. (2011). Basic & clinical pharmacology & toxicology 109
  ·  DOI: [10.1111/j.1742-7843.2011.00700.x](https://doi.org/10.1111/j.1742-7843.2011.00700.x)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| CL2 (SV, L ⁄ hr) — Estimate | `Q30` · not captured | 1740 | SV, L ⁄ hr | not captured | special_case (not captured) | tab_1:row2:col1 |
| V2 (SV, L) — Estimate | `Q64` · not captured | 8980 | SV, L | not captured | exact (not captured) | tab_1:row3:col1 |
| CL3 (SVA, L ⁄ hr) — Estimate | `Q358` · not captured | 383 | SVA, L ⁄ hr | not captured | llm (not captured) | tab_1:row4:col1 |
| V3 (SVA, L) — Estimate | `Q77` · not captured | 1190 | SVA, L | not captured | exact (not captured) | tab_1:row5:col1 |
| KA (per hour) — Estimate | `Q49` · not captured | 2.76 | per hour | not captured | exact (not captured) | tab_1:row6:col1 |
| LAG (hr) — Estimate | `Q83` · not captured | 0.212 | hr | not captured | llm (not captured) | tab_1:row7:col1 |
| K in (mg ⁄ dL • hr) — Estimate | `Q358` · not captured | 1.14 | mg ⁄ dL • hr | not captured | llm (not captured) | tab_1:row8:col1 |
| E max — Estimate | `Q320` · not captured | 0.489 | not captured | not captured | llm (not captured) | tab_1:row9:col1 |
| EC 50 (ng ⁄ mL) — Estimate | `Q321` · not captured | 0.0868 | ng ⁄ mL | not captured | llm (not captured) | tab_1:row10:col1 |
| Baseline (LDL, mg ⁄ dL) — Estimate | `Q324` · not captured | 92 | LDL, mg ⁄ dL | not captured | exact (not captured) | tab_1:row11:col1 |
| x CL2 — Estimate | `Q358` · not captured | 43.1 | IIV | not captured | llm (not captured) | tab_1:row14:col1 |
| x V2 — Estimate | `Q64` · not captured | 46.5 | IIV | not captured | llm_confirmed (not captured) | tab_1:row15:col1 |
| x CL3 — Estimate | `Q358` · not captured | 48.6 | IIV | not captured | llm (not captured) | tab_1:row16:col1 |
| x V3 — Estimate | `Q77` · not captured | 66.2 | IIV | not captured | llm_confirmed (not captured) | tab_1:row17:col1 |
| x KA — Estimate | `Q312` · not captured | 75.7 | IIV | not captured | llm_corrected (not captured) | tab_1:row18:col1 |
| x LAG — Estimate | `Q83` · not captured | 32.7 | IIV | not captured | llm (not captured) | tab_1:row19:col1 |
| x Kin — Estimate | `Q327` · not captured | 50.2 | IIV | not captured | llm_confirmed (not captured) | tab_1:row20:col1 |
| x Emax — Estimate | `Q320` · not captured | 15.7 | IIV | not captured | llm_confirmed (not captured) | tab_1:row21:col1 |
| x EC50 — Estimate | `Q321` · not captured | 93.2 | IIV | not captured | llm_confirmed (not captured) | tab_1:row22:col1 |
| x Baseline LDL — Estimate | `Q324` · not captured | 20.5 | IIV | not captured | llm_confirmed (not captured) | tab_1:row23:col1 |

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
<sub>← back to [simvastatin](drugs/drug_simvastatin/)</sub>
