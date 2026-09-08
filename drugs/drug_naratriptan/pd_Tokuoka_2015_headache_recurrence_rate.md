# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Tokuoka_2015`
- **model family:** `unknown`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Tokuoka K; Takayanagi R; Toyabe M; Watanabe M; Kitagawa Y; Yamada Y et al. (2015). The journal of headache and pain 16
  ·  DOI: [10.1186/s10194-015-0558-9](https://doi.org/10.1186/s10194-015-0558-9)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| t1/2 (hr) — Sumatriptan (subcutaneous injection) [19] | `Q57` · not captured | 1.46 | hr | not captured | exact (not captured) | Tab1:row1:col3 |
| t1/2 (hr) — Zolmitriptan (oral tablet) | `Q57` · not captured | 2.40 | hr | not captured | exact (not captured) | Tab1:row1:col4 |
| t1/2 (hr) — Active metabolite [12, 20, 21] | `Q57` · not captured | 273.36 | hr | not captured | exact (not captured) | Tab1:row1:col5 |
| t1/2 (hr) — Eletriptan (oral tablet) [22] | `Q57` · not captured | 3.20 | hr | not captured | exact (not captured) | Tab1:row1:col6 |
| t1/2 (hr) — Rizatriptan (oral tablet) [23, 24] | `Q57` · not captured | 1.60 | hr | not captured | exact (not captured) | Tab1:row1:col7 |
| t1/2 (hr) — Naratriptan (oral tablet) [15] | `Q57` · not captured | 5.05 | hr | not captured | exact (not captured) | Tab1:row1:col8 |
| fu — Sumatriptan (subcutaneous injection) [19] | `Q46` · not captured | 0.66 | not captured | not captured | exact (not captured) | Tab1:row3:col3 |
| fu — Zolmitriptan (oral tablet) | `Q46` · not captured | 0.75 | oral tablet | not captured | exact (not captured) | Tab1:row3:col4 |
| fu — Eletriptan (oral tablet) [22] | `Q46` · not captured | 0.13 | not captured | not captured | exact (not captured) | Tab1:row3:col6 |
| fu — Rizatriptan (oral tablet) [23, 24] | `Q46` · not captured | 0.86 | not captured | not captured | exact (not captured) | Tab1:row3:col7 |
| fu — Naratriptan (oral tablet) [15] | `Q46` · not captured | 0.71 | not captured | not captured | exact (not captured) | Tab1:row3:col8 |

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
<sub>← back to [naratriptan](drugs/drug_naratriptan/)</sub>
