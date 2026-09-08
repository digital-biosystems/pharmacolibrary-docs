# reticulocyte count — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Jeon_2021`
- **model family:** `unknown`
- **driver:** `cited_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Jeon I; Oh J; Kwon YK; Yoon SH; Cho JY; Jang IJ; et al. et al. (2021). Drug design, development and therapy 15
  ·  DOI: [10.2147/DDDT.S303772](https://doi.org/10.2147/DDDT.S303772)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Cmax (μg/L) — PK Parameters | `Q32` · not captured | 18.10 | μg/L | not captured | exact (not captured) | t0002:row2:col1 |
| Cmax (μg/L) — CKD-11101 60 μg(Test Drug) | `Q32` · not captured | 17.27 | μg/L | not captured | exact (not captured) | t0002:row2:col2 |
| AUC0-last (hr•μg/L) — PK Parameters | `Q74` · not captured | 402.18 | hr•μg/L | not captured | exact (not captured) | t0002:row3:col1 |
| AUC0-last (hr•μg/L) — CKD-11101 60 μg(Test Drug) | `Q74` · not captured | 376.31 | hr•μg/L | not captured | exact (not captured) | t0002:row3:col2 |
| AUC0-∞ (hr•μg/L) — PK Parameters | `Q17` · not captured | 440.46 | hr•μg/L | not captured | exact (not captured) | t0002:row4:col1 |
| AUC0-∞ (hr•μg/L) — CKD-11101 60 μg(Test Drug) | `Q17` · not captured | 437.68 | hr•μg/L | not captured | exact (not captured) | t0002:row4:col2 |
| t1/2 (h) — PK Parameters | `Q57` · not captured | 90.21 | h | not captured | exact (not captured) | t0002:row5:col1 |
| t1/2 (h) — CKD-11101 60 μg(Test Drug) | `Q57` · not captured | 159.03 | h | not captured | exact (not captured) | t0002:row5:col2 |
| CL (L/h) — PK Parameters | `Q22` · not captured | 0.15 | L/h | not captured | exact (not captured) | t0002:row6:col1 |
| CL (L/h) — CKD-11101 60 μg(Test Drug) | `Q22` · not captured | 0.15 | L/h | not captured | exact (not captured) | t0002:row6:col2 |
| Cmax (μg/L) — PK Parameters | `Q32` · not captured | 2.36 | μg/L | not captured | exact (not captured) | t0002:row9:col1 |
| Cmax (μg/L) — CKD-11101 60 μg(Test Drug) | `Q32` · not captured | 2.08 | μg/L | not captured | exact (not captured) | t0002:row9:col2 |
| AUC0-last (hr•μg/L) — PK Parameters | `Q74` · not captured | 217.07 | hr•μg/L | not captured | exact (not captured) | t0002:row10:col1 |
| AUC0-last (hr•μg/L) — CKD-11101 60 μg(Test Drug) | `Q74` · not captured | 196.82 | hr•μg/L | not captured | exact (not captured) | t0002:row10:col2 |
| AUC0-∞ (hr•μg/L) — PK Parameters | `Q17` · not captured | 307.08 | hr•μg/L | not captured | exact (not captured) | t0002:row11:col1 |
| AUC0-∞ (hr•μg/L) — CKD-11101 60 μg(Test Drug) | `Q17` · not captured | 301.18 | hr•μg/L | not captured | exact (not captured) | t0002:row11:col2 |
| t1/2 (h) — PK Parameters | `Q57` · not captured | 214.69 | h | not captured | exact (not captured) | t0002:row12:col1 |
| t1/2 (h) — CKD-11101 60 μg(Test Drug) | `Q57` · not captured | 259.21 | h | not captured | exact (not captured) | t0002:row12:col2 |
| CL/F (L/h) — PK Parameters | `Q27` · not captured | 0.24 | L/h | not captured | exact (not captured) | t0002:row13:col1 |
| CL/F (L/h) — CKD-11101 60 μg(Test Drug) | `Q27` · not captured | 0.25 | L/h | not captured | exact (not captured) | t0002:row13:col2 |
| Vz/F (L) — PK Parameters | `Q76` · not captured | 58.15 | L | not captured | exact (not captured) | t0002:row14:col1 |
| Vz/F (L) — CKD-11101 60 μg(Test Drug) | `Q76` · not captured | 71 | L | not captured | exact (not captured) | t0002:row14:col2 |

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
<sub>← back to [darbepoetin alfa](drugs/drug_darbepoetin_alfa/)</sub>
