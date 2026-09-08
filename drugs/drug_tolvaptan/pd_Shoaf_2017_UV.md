# urine volume — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Shoaf_2017`
- **model family:** `linear`
- **driver:** `pk_record`
- **tier:** descriptive
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Shoaf SE; Bricmont P; Dandurand A et al. (2017). European journal of clinical pharmacology 73
  ·  DOI: [10.1007/s00228-017-2302-7](https://doi.org/10.1007/s00228-017-2302-7)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| C max (ng/mL) — Healthy adults | `Q32` · not captured | 35.6 | ng/mL | not captured | llm (not captured) | Tab2:row2:col1 |
| C max (ng/mL) — Healthy adults | `Q32` · not captured | 57.8 | ng/mL | not captured | llm (not captured) | Tab2:row2:col2 |
| C max (ng/mL) — Healthy adults | `Q32` · not captured | 119 | ng/mL | not captured | llm (not captured) | Tab2:row2:col3 |
| C max (ng/mL) — SIADH patients | `Q32` · not captured | 37.7 | ng/mL | not captured | llm (not captured) | Tab2:row2:col4 |
| C max (ng/mL) — SIADH patients | `Q32` · not captured | 107 | ng/mL | not captured | llm (not captured) | Tab2:row2:col5 |
| C max (ng/mL) — SIADH patients | `Q32` · not captured | 157 | ng/mL | not captured | llm (not captured) | Tab2:row2:col6 |
| AUC∞ (ng · h/mL) — Healthy adults | `Q17` · not captured | 222 | ng · h/mL | not captured | exact (not captured) | Tab2:row4:col1 |
| AUC∞ (ng · h/mL) — Healthy adults | `Q17` · not captured | 398 | ng · h/mL | not captured | exact (not captured) | Tab2:row4:col2 |
| AUC∞ (ng · h/mL) — Healthy adults | `Q17` · not captured | 728 | ng · h/mL | not captured | exact (not captured) | Tab2:row4:col3 |
| AUC∞ (ng · h/mL) — SIADH patients | `Q17` · not captured | 244 | ng · h/mL | not captured | exact (not captured) | Tab2:row4:col4 |
| AUC∞ (ng · h/mL) — SIADH patients | `Q17` · not captured | 655 | ng · h/mL | not captured | exact (not captured) | Tab2:row4:col5 |
| AUC∞ (ng · h/mL) — SIADH patients | `Q17` · not captured | 1000 | ng · h/mL | not captured | exact (not captured) | Tab2:row4:col6 |
| t 1/2,z (h) — Healthy adults | `Q57` · not captured | 4.3 | h | not captured | llm (not captured) | Tab2:row5:col1 |
| t 1/2,z (h) — Healthy adults | `Q57` · not captured | 5.2 | h | not captured | llm (not captured) | Tab2:row5:col2 |
| t 1/2,z (h) — Healthy adults | `Q57` · not captured | 5.8 | h | not captured | llm (not captured) | Tab2:row5:col3 |
| t 1/2,z (h) — SIADH patients | `Q57` · not captured | 4.6 | h | not captured | llm (not captured) | Tab2:row5:col4 |
| t 1/2,z (h) — SIADH patients | `Q57` · not captured | 6.0 | h | not captured | llm (not captured) | Tab2:row5:col5 |
| t 1/2,z (h) — SIADH patients | `Q57` · not captured | 5.9 | h | not captured | llm (not captured) | Tab2:row5:col6 |
| CL/F (mL/min/kg) — Healthy adults | `Q27` · not captured | 4.81 | mL/min/kg | not captured | exact (not captured) | Tab2:row6:col1 |
| CL/F (mL/min/kg) — Healthy adults | `Q27` · not captured | 5.46 | mL/min/kg | not captured | exact (not captured) | Tab2:row6:col2 |
| CL/F (mL/min/kg) — Healthy adults | `Q27` · not captured | 5.90 | mL/min/kg | not captured | exact (not captured) | Tab2:row6:col3 |
| CL/F (mL/min/kg) — SIADH patients | `Q27` · not captured | 5.00 | mL/min/kg | not captured | exact (not captured) | Tab2:row6:col4 |
| CL/F (mL/min/kg) — SIADH patients | `Q27` · not captured | 5.74 | mL/min/kg | not captured | exact (not captured) | Tab2:row6:col5 |
| CL/F (mL/min/kg) — SIADH patients | `Q27` · not captured | 4.91 | mL/min/kg | not captured | exact (not captured) | Tab2:row6:col6 |

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
<sub>← back to [tolvaptan](drugs/drug_tolvaptan/)</sub>
