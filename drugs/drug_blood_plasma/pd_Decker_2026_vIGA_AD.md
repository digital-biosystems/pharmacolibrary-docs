# vIGA-AD 0 or 1 at Week 16 — PD  <span class="pk-badge pk-badge--orange">needs review</span>

- **paper:** `Decker_2026`
- **model family:** `categorical`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Decker RL; Ernest CS; Radtke DB; Prakash A; Zhang X et al. (2026). Clinical pharmacokinetics 65
  ·  DOI: [10.1007/s40262-025-01563-8](https://doi.org/10.1007/s40262-025-01563-8)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| D1 (h) — Population mean(%SEE) | `Q310` · not captured | 0.263 | h | not captured | exact (not captured) | Tab1:row1:col1 |
| D1 (h) — Shrinkage(SD) | `Q310` · not captured | 27.2 | h | not captured | exact (not captured) | Tab1:row1:col2 |
| D1 (h) — BSVa (%SEE) | `Q310` · not captured | 164 | h | not captured | exact (not captured) | Tab1:row1:col3 |
| CLnr/F(L/h)b — Population mean(%SEE) | `Q79` · not captured | 2.76 | %SEE | not captured | llm (not captured) | Tab1:row3:col1 |
| CLnr/F(L/h)b — Shrinkage(SD) | `Q318` · not captured | 5.84 | unit | not captured | llm (not captured) | Tab1:row3:col2 |
| CLnr/F(L/h)b — BSVa (%SEE) | `Q318` · not captured | 58.4 | %SEE | not captured | llm (not captured) | Tab1:row3:col3 |
| CLr/F (L/h)b — Population mean(%SEE) | `Q27` · not captured | 7.9 | %SEE | not captured | llm (not captured) | Tab1:row4:col1 |
| CLr/F (L/h)b — BSVa (%SEE) | `Q358` · not captured | 62.3 | %SEE | not captured | llm (not captured) | Tab1:row4:col3 |
| V1/F (L)c — Population mean(%SEE) | `Q290` · not captured | 119 | %SEE | not captured | llm_confirmed (not captured) | Tab1:row5:col1 |
| V1/F (L)c — Shrinkage(SD) | `Q318` · not captured | 57.3 | unit | not captured | llm_corrected (not captured) | Tab1:row5:col2 |
| V1/F (L)c — BSVa (%SEE) | `Q290` · not captured | 12.7 | %SEE | not captured | llm_confirmed (not captured) | Tab1:row5:col3 |
| Q (L/h)d — Population mean(%SEE) | `Q364` · not captured | 2.4 | %SEE | not captured | space_fold (not captured) | Tab1:row6:col1 |
| Q (L/h)d — Shrinkage(SD) | `Q364` · not captured | 88.5 | unit | not captured | space_fold (not captured) | Tab1:row6:col2 |
| Q (L/h)d — BSVa (%SEE) | `Q364` · not captured | 15.1 | %SEE | not captured | space_fold (not captured) | Tab1:row6:col3 |
| V2/F (L)e — Population mean(%SEE) | `Q82` · not captured | 46.8 | %SEE | not captured | llm_confirmed (not captured) | Tab1:row7:col1 |
| V2/F (L)e — Shrinkage(SD) | `Q318` · not captured | 79.5 | unit | not captured | llm_corrected (not captured) | Tab1:row7:col2 |
| V2/F (L)e — BSVa (%SEE) | `Q82` · not captured | 117 | %SEE | not captured | llm_confirmed (not captured) | Tab1:row7:col3 |
| LAG (h) — Population mean(%SEE) | `Q83` · not captured | 0.144 | h | not captured | llm (not captured) | Tab1:row8:col1 |
| Allometric scaling CLb — Population mean(%SEE) | `Q23` · not captured | 0.75 | %SEE | not captured | llm_confirmed (not captured) | Tab1:row9:col1 |
| Allometric scaling Vc,e — Population mean(%SEE) | `Q63` · not captured | 1 | %SEE | not captured | llm_confirmed (not captured) | Tab1:row10:col1 |
| Covariance for CLnr/F and CLr/Fg — Population mean(%SEE) | `Q314` · not captured | 0.303 | %SEE | not captured | llm (not captured) | Tab1:row12:col1 |
| Covariance for CLr/F and V1/Fg — Population mean(%SEE) | `Q314` · not captured | -0.0265 | %SEE | not captured | llm (not captured) | Tab1:row13:col1 |
| Proportional errorh — Population mean(%SEE) | `Q316` · not captured | 0.427 | %SEE | not captured | llm_confirmed (not captured) | Tab1:row14:col1 |

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
<sub>← back to [blood plasma](drugs/drug_blood_plasma/)</sub>
