# erythrocyte count — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Rognås_2025`
- **model family:** `indirect_response_ii`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/proportional

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Rognås SV; Schaedeli Stark F; Marchesi M; Silber Baumann HE; Abrantes JA et al. (2025). Journal of pharmacokinetics and pharmacodynamics 52
  ·  DOI: [10.1007/s10928-025-09990-7](https://doi.org/10.1007/s10928-025-09990-7)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| LSRBC — IIV (%CV) | `Q312` · not captured | 28.02 | not captured | not captured | llm (not captured) | Tab2:row2:col5 |
| LSRBC — Shrinkagea (%) | `Q318` · not captured | 16.92 | not captured | not captured | llm (not captured) | Tab2:row2:col6 |
| RET0 — IIV (%CV) | `Q312` · not captured | 26.02 | not captured | not captured | llm (not captured) | Tab2:row3:col5 |
| RET0 — Shrinkagea (%) | `Q318` · not captured | 1.88 | not captured | not captured | llm (not captured) | Tab2:row3:col6 |
| RBC0, male — IIV (%CV) | `Q312` · not captured | 5.34 | not captured | not captured | llm (not captured) | Tab2:row4:col5 |
| RBC0, male — Shrinkagea (%) | `Q318` · not captured | 1.63 | not captured | not captured | llm (not captured) | Tab2:row4:col6 |
| MCH0 — IIV (%CV) | `Q312` · not captured | 4.82 | not captured | not captured | llm (not captured) | Tab2:row6:col5 |
| MCH0 — Shrinkagea (%) | `Q318` · not captured | 0.47 | not captured | not captured | llm (not captured) | Tab2:row6:col6 |
| IRF0 — IIV (%CV) | `Q312` · not captured | 32.09 | not captured | not captured | llm (not captured) | Tab2:row7:col5 |
| IRF0 — Shrinkagea (%) | `Q318` · not captured | 3.88 | not captured | not captured | llm (not captured) | Tab2:row7:col6 |
| kTOL — Estimate | `Q337` · not captured | 0.022 | not captured | not captured | exact (not captured) | Tab2:row9:col2 |
| kTOL — %RSE | `Q337` · not captured | 12.86 | not captured | not captured | exact (not captured) | Tab2:row9:col4 |
| Imax,bitopertin — Estimate | `Q323` · not captured | 0.6 | not captured | not captured | llm_confirmed (not captured) | Tab2:row10:col2 |
| AUC50, bitopertin — Estimate | `Q19` · not captured | 16.50 | not captured | not captured | llm (not captured) | Tab2:row11:col2 |
| AUC50, bitopertin — %RSE | `Q19` · not captured | 8.91 | not captured | not captured | llm (not captured) | Tab2:row11:col4 |
| AUC50, bitopertin — IIV (%CV) | `Q312` · not captured | 49.50 | not captured | not captured | llm (not captured) | Tab2:row11:col5 |
| AUC50, bitopertin — Shrinkagea (%) | `Q318` · not captured | 24.97 | not captured | not captured | llm (not captured) | Tab2:row11:col6 |

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
<sub>← back to [glycine](drugs/drug_glycine/)</sub>
