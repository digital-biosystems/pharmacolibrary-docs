# name — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Singh_2023`
- **model family:** `unknown`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Singh A; Banerjee T; Shukla SK; Upadhyay S; Verma A et al. (2023). Scientific reports 13
  ·  DOI: [10.1038/s41598-023-39382-1](https://doi.org/10.1038/s41598-023-39382-1)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| E. h — Reference | `Q324` · not captured | 60 | not captured | not captured | llm (not captured) | Tab1:row2:col8 |
| E. h — Reference | `Q324` · not captured | 36 | not captured | not captured | llm (not captured) | Tab1:row3:col8 |
| E. h(HM1:IMSS) — No | `Q359` · not captured | 1 | HM1:IMSS | not captured | llm (not captured) | Tab1:row4:col2 |
| E. h(HM1:IMSS) — Reference | `Q359` · not captured | 61 | HM1:IMSS | not captured | llm (not captured) | Tab1:row4:col8 |
| E. h — Reference | `Q324` · not captured | 62 | not captured | not captured | llm (not captured) | Tab1:row5:col8 |
| E. h — Reference | `Q324` · not captured | 31 | not captured | not captured | llm (not captured) | Tab1:row6:col8 |
| E. h — Reference | `Q324` · not captured | 32 | not captured | not captured | llm (not captured) | Tab1:row7:col8 |
| E. h — Reference | `Q324` · not captured | 63 | not captured | not captured | llm (not captured) | Tab1:row9:col8 |
| E. h(HM1:IMSS) — No | `Q359` · not captured | 1 | HM1:IMSS | not captured | llm (not captured) | Tab1:row10:col2 |
| E. h(HM1:IMSS) — Reference | `Q359` · not captured | 64 | HM1:IMSS | not captured | llm (not captured) | Tab1:row10:col8 |
| E. h(HM1:IMSS) — No | `Q359` · not captured | 1 | HM1:IMSS | not captured | llm (not captured) | Tab1:row12:col2 |
| E. h(HM1:IMSS) — Reference | `Q359` · not captured | 65 | HM1:IMSS | not captured | llm (not captured) | Tab1:row12:col8 |
| E. h — Reference | `Q324` · not captured | 34 | not captured | not captured | llm (not captured) | Tab1:row13:col8 |

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
<sub>← back to [tinidazole](drugs/drug_tinidazole/)</sub>
