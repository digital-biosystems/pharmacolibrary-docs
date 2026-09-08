# CD19+ B lymphocytes — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Riva_2023`
- **model family:** `indirect_response_ii`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/proportional

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Riva N; Brstilo L; Sancho-Araiz A; Molina M; Savransky A; Roffé G; Sanz M; Tenembaum S; Katsicas MM; Trocóniz IF; Schaiquevich P et al. (2023). Pharmaceutics 15
  ·  DOI: [10.3390/pharmaceutics15112534](https://doi.org/10.3390/pharmaceutics15112534)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| KE (days−1) — Estimate | `Q47` · not captured | 0.06 | days−1 | not captured | exact (not captured) | pharmaceutics-15-02534-t002:row1:col1 |
| KE (days−1) — RSE (%) | `Q47` · not captured | 17 | days−1 | not captured | exact (not captured) | pharmaceutics-15-02534-t002:row1:col2 |
| Kdeg (days−1) — Estimate | `Q328` · not captured | 0.004 | days−1 | not captured | exact (not captured) | pharmaceutics-15-02534-t002:row3:col1 |
| Kdeg (days−1) — RSE (%) | `Q328` · not captured | 22 | days−1 | not captured | exact (not captured) | pharmaceutics-15-02534-t002:row3:col2 |
| EMAX — Estimate | `Q320` · not captured | 155 | not captured | not captured | exact (not captured) | pharmaceutics-15-02534-t002:row4:col1 |
| EMAX — RSE (%) | `Q320` · not captured | 23 | not captured | not captured | exact (not captured) | pharmaceutics-15-02534-t002:row4:col2 |
| ED50 (mg) — Estimate | `Q321` · not captured | 0.692 | mg | not captured | llm (not captured) | pharmaceutics-15-02534-t002:row5:col1 |
| ED50 (mg) — RSE (%) | `Q321` · not captured | 61 | mg | not captured | llm (not captured) | pharmaceutics-15-02534-t002:row5:col2 |
| IIV KE (%) b — Estimate | `Q312` · not captured | 55.4 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-15-02534-t002:row6:col1 |
| IIV KE (%) b — RSE (%) | `Q312` · not captured | 27 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-15-02534-t002:row6:col2 |
| IIV KE (%) b — Shrinkage (%) | `Q318` · not captured | 47 | not captured | not captured | llm_corrected (not captured) | pharmaceutics-15-02534-t002:row6:col3 |
| IIV CD19+0 (%) b — Estimate | `Q312` · not captured | 70.1 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-15-02534-t002:row7:col1 |
| IIV CD19+0 (%) b — RSE (%) | `Q312` · not captured | 32 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-15-02534-t002:row7:col2 |
| IIV CD19+0 (%) b — Shrinkage (%) | `Q318` · not captured | 35 | not captured | not captured | llm_corrected (not captured) | pharmaceutics-15-02534-t002:row7:col3 |
| IIV Kdeg (%) b — Estimate | `Q312` · not captured | 80.7 | not captured | not captured | llm_corrected (not captured) | pharmaceutics-15-02534-t002:row8:col1 |
| IIV Kdeg (%) b — RSE (%) | `Q312` · not captured | 43 | not captured | not captured | llm_corrected (not captured) | pharmaceutics-15-02534-t002:row8:col2 |
| IIV Kdeg (%) b — Shrinkage (%) | `Q318` · not captured | 57 | not captured | not captured | llm_corrected (not captured) | pharmaceutics-15-02534-t002:row8:col3 |
| Residual error (Ln(106 cells/L)) — Estimate | `Q315` · not captured | 0.94 | not captured | not captured | llm (not captured) | pharmaceutics-15-02534-t002:row9:col1 |
| Residual error (Ln(106 cells/L)) — RSE (%) | `Q315` · not captured | 9.5 | not captured | not captured | llm (not captured) | pharmaceutics-15-02534-t002:row9:col2 |
| Residual error (Ln(106 cells/L)) — Shrinkage (%) | `Q318` · not captured | 24 | not captured | not captured | llm (not captured) | pharmaceutics-15-02534-t002:row9:col3 |

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
<sub>← back to [collagen](drugs/drug_collagen/)</sub>
