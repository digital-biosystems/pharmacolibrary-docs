# acute kidney injury — PD  <span class="pk-badge pk-badge--orange">needs review</span>

- **paper:** `Taylor_2026`
- **model family:** `categorical`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Taylor ZL; Barreto EF; Cole KC; Rule AD; Kashani KB; Leung N; Thompson CA; Witzig TE; Ramsey LB; Barreto JN et al. (2026). Clinical pharmacokinetics 65
  ·  DOI: [10.1007/s40262-026-01618-4](https://doi.org/10.1007/s40262-026-01618-4)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| CL (L/h) — Final model | `Q22` · not captured | 11.8 | L/h | not captured | exact (not captured) | Tab2:row2:col1 |
| CL (L/h) — Final model | `Q22` · not captured | 5.1 | L/h | not captured | exact (not captured) | Tab2:row2:col2 |
| CL (L/h) — Bootstrap | `Q22` · not captured | 11.8 | L/h | not captured | exact (not captured) | Tab2:row2:col4 |
| CL (L/h) — Bootstrap | `Q22` · not captured | 10.8 | L/h | not captured | exact (not captured) | Tab2:row2:col5 |
| V1 (L) — Final model | `Q63` · not captured | 42.2 | L | not captured | exact (not captured) | Tab2:row5:col1 |
| V1 (L) — Final model | `Q63` · not captured | 6.4 | L | not captured | exact (not captured) | Tab2:row5:col2 |
| V1 (L) — Bootstrap | `Q63` · not captured | 41.9 | L | not captured | exact (not captured) | Tab2:row5:col4 |
| V1 (L) — Bootstrap | `Q63` · not captured | 37.8 | L | not captured | exact (not captured) | Tab2:row5:col5 |
| Q (L/h) — Final model | `Q30` · not captured | 0.35 | L/h | not captured | exact (not captured) | Tab2:row6:col1 |
| Q (L/h) — Final model | `Q30` · not captured | 11.6 | L/h | not captured | exact (not captured) | Tab2:row6:col2 |
| Q (L/h) — Bootstrap | `Q30` · not captured | 0.35 | L/h | not captured | exact (not captured) | Tab2:row6:col4 |
| Q (L/h) — Bootstrap | `Q30` · not captured | 0.29 | L/h | not captured | exact (not captured) | Tab2:row6:col5 |
| V2 (L) — Final model | `Q64` · not captured | 6.67 | L | not captured | exact (not captured) | Tab2:row7:col1 |
| V2 (L) — Final model | `Q64` · not captured | 10.4 | L | not captured | exact (not captured) | Tab2:row7:col2 |
| V2 (L) — Bootstrap | `Q64` · not captured | 6.63 | L | not captured | exact (not captured) | Tab2:row7:col4 |
| V2 (L) — Bootstrap | `Q64` · not captured | 5.56 | L | not captured | exact (not captured) | Tab2:row7:col5 |
| IIV CL — Final model | `Q312` · not captured | 0.02 | not captured | not captured | llm_confirmed (not captured) | Tab2:row8:col1 |
| IIV CL — Final model | `Q312` · not captured | 24.3 | not captured | not captured | llm_confirmed (not captured) | Tab2:row8:col2 |
| IIV CL — Final model | `Q312` · not captured | 13.3 | not captured | not captured | llm_confirmed (not captured) | Tab2:row8:col3 |
| IIV CL — Bootstrap | `Q312` · not captured | 0.02 | not captured | not captured | llm_confirmed (not captured) | Tab2:row8:col4 |
| IIV CL — Bootstrap | `Q312` · not captured | 0.01 | not captured | not captured | llm_confirmed (not captured) | Tab2:row8:col5 |
| IIV V2 — Final model | `Q312` · not captured | 0.03 | not captured | not captured | llm_confirmed (not captured) | Tab2:row9:col1 |
| IIV V2 — Final model | `Q312` · not captured | 23.9 | not captured | not captured | llm_confirmed (not captured) | Tab2:row9:col2 |
| IIV V2 — Final model | `Q312` · not captured | 31 | not captured | not captured | llm_confirmed (not captured) | Tab2:row9:col3 |
| IIV V2 — Bootstrap | `Q312` · not captured | 0.03 | not captured | not captured | llm_confirmed (not captured) | Tab2:row9:col4 |
| IIV V2 — Bootstrap | `Q312` · not captured | 0.02 | not captured | not captured | llm_confirmed (not captured) | Tab2:row9:col5 |
| Residual error — Final model | `Q315` · not captured | 0.20 | not captured | not captured | llm (not captured) | Tab2:row10:col1 |
| Residual error — Final model | `Q315` · not captured | 11.6 | not captured | not captured | llm (not captured) | Tab2:row10:col2 |
| Residual error — Final model | `Q315` · not captured | 12.2 | not captured | not captured | llm (not captured) | Tab2:row10:col3 |

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
<sub>← back to [sodium bicarbonate](drugs/drug_sodium_bicarbonate/)</sub>
