# tumor volume — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Ma_2019`
- **model family:** `indirect_response_ii`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Ma YH; Wang SY; Ren YP; Li J; Guo TJ; Lu W; et al. et al. (2019). Acta pharmacologica Sinica 40
  ·  DOI: [10.1038/s41401-018-0006-x](https://doi.org/10.1038/s41401-018-0006-x)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| k a (per day) — TV | `Q49` · not captured | 78.7 | per day | not captured | space_fold (not captured) | tab_0:row2:col1 |
| k a (per day) — IIV | `Q49` · not captured | 0 | per day | not captured | space_fold (not captured) | tab_0:row2:col3 |
| V/F (L/kg) — TV | `Q76` · not captured | 16.5 | L/kg | not captured | exact (not captured) | tab_0:row3:col1 |
| V/F (L/kg) — IIV | `Q76` · not captured | 0 | L/kg | not captured | exact (not captured) | tab_0:row3:col3 |
| CL/F (L/kg/day) — TV | `Q27` · not captured | 319 | L/kg/day | not captured | exact (not captured) | tab_0:row4:col1 |
| CL/F (L/kg/day) — IIV | `Q27` · not captured | 0 | L/kg/day | not captured | exact (not captured) | tab_0:row4:col3 |
| N 0 (mm 3 ) — IIV | `Q312` · not captured | 29.3 | mm 3 | not captured | llm (not captured) | tab_0:row5:col3 |
| λ 0 (per day) — TV | `Q67` · not captured | 0.229 | per day | not captured | llm (not captured) | tab_0:row6:col1 |
| λ 0 (per day) | `Q67` · not captured | 5.7 | per day | not captured | llm (not captured) | tab_0:row6:col2 |
| λ 0 (per day) — IIV | `Q67` · not captured | 9.2 | per day | not captured | llm (not captured) | tab_0:row6:col3 |
| λ 0 (per day) | `Q67` · not captured | 31.2 | per day | not captured | llm (not captured) | tab_0:row6:col4 |
| λ 1 (mm 3 /day) — TV | `Q67` · not captured | 273 | mm 3 /day | not captured | space_fold (not captured) | tab_0:row7:col1 |
| λ 1 (mm 3 /day) | `Q67` · not captured | 7.9 | mm 3 /day | not captured | space_fold (not captured) | tab_0:row7:col2 |
| λ 1 (mm 3 /day) — IIV | `Q67` · not captured | 17.9 | mm 3 /day | not captured | space_fold (not captured) | tab_0:row7:col3 |
| λ 1 (mm 3 /day) | `Q67` · not captured | 19.6 | mm 3 /day | not captured | space_fold (not captured) | tab_0:row7:col4 |
| k max (per day) — TV | `Q66` · not captured | 1.60 | per day | not captured | llm (not captured) | tab_0:row8:col1 |
| k max (per day) — IIV | `Q312` · not captured | 0 | per day | not captured | llm (not captured) | tab_0:row8:col3 |
| kC 50 (mg/L) — TV | `Q321` · not captured | 2.10 | mg/L | not captured | llm (not captured) | tab_0:row9:col1 |
| kC 50 (mg/L) | `Q321` · not captured | 12.1 | mg/L | not captured | llm (not captured) | tab_0:row9:col2 |
| kC 50 (mg/L) — IIV | `Q321` · not captured | 0 | mg/L | not captured | llm (not captured) | tab_0:row9:col3 |
| ψ — IIV | `Q312` · not captured | 0 | unit | not captured | llm (not captured) | tab_0:row10:col3 |
| σ ADD (mm 3 ) — TV | `Q315` · not captured | 31.5 | mm 3 | not captured | llm (not captured) | tab_0:row12:col1 |
| σ ADD (mm 3 ) | `Q317` · not captured | 10.1 | mm 3 | not captured | llm (not captured) | tab_0:row12:col2 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

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
<sub>← back to [dopamine](drugs/drug_dopamine/)</sub>
