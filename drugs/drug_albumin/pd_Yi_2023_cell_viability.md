# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Yi_2023`
- **model family:** `unknown`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Yi C; Xie F; Xu X; Xiao D; Zhou X; Cheng M et al. (2023). Drug delivery 30
  ·  DOI: [10.1080/10717544.2023.2219433](https://doi.org/10.1080/10717544.2023.2219433)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| EC50 (nM) — AVM | `Q321` · not captured | 77.61 | nM | not captured | exact (not captured) | t0002:row0:col3 |
| EC50 (nM) — A1 | `Q321` · not captured | 72.25 | nM | not captured | exact (not captured) | t0002:row0:col4 |
| EC50 (nM) — A2 | `Q321` · not captured | 43.55 | nM | not captured | exact (not captured) | t0002:row0:col5 |
| EC50 (nM) — A3 | `Q321` · not captured | 40.38 | nM | not captured | exact (not captured) | t0002:row0:col6 |
| EC50 (nM) — A4 | `Q321` · not captured | 23.39 | nM | not captured | exact (not captured) | t0002:row0:col7 |
| EC50 (nM) — A5 | `Q321` · not captured | 107.20 | nM | not captured | exact (not captured) | t0002:row0:col8 |
| EC50 (nM) — A6 | `Q321` · not captured | 114.50 | nM | not captured | exact (not captured) | t0002:row0:col9 |
| EC50 (nM) — AVM | `Q321` · not captured | 1.0 | nM | not captured | exact (not captured) | t0002:row1:col3 |
| EC50 (nM) — AVM | `Q321` · not captured | 286.00 | nM | not captured | exact (not captured) | t0002:row2:col3 |
| EC50 (nM) — A1 | `Q321` · not captured | 242.00 | nM | not captured | exact (not captured) | t0002:row2:col4 |
| EC50 (nM) — A2 | `Q321` · not captured | 130.90 | nM | not captured | exact (not captured) | t0002:row2:col5 |
| EC50 (nM) — A3 | `Q321` · not captured | 115.60 | nM | not captured | exact (not captured) | t0002:row2:col6 |
| EC50 (nM) — A4 | `Q321` · not captured | 71.78 | nM | not captured | exact (not captured) | t0002:row2:col7 |
| EC50 (nM) — A5 | `Q321` · not captured | 357.10 | nM | not captured | exact (not captured) | t0002:row2:col8 |
| EC50 (nM) — A6 | `Q321` · not captured | 456.60 | nM | not captured | exact (not captured) | t0002:row2:col9 |
| EC50 (nM) — AVM | `Q321` · not captured | 1.0 | nM | not captured | exact (not captured) | t0002:row3:col3 |
| EC50 (nM) — AVM | `Q321` · not captured | 376.10 | nM | not captured | exact (not captured) | t0002:row4:col3 |
| EC50 (nM) — A1 | `Q321` · not captured | 322.60 | nM | not captured | exact (not captured) | t0002:row4:col4 |
| EC50 (nM) — A2 | `Q321` · not captured | 233.50 | nM | not captured | exact (not captured) | t0002:row4:col5 |
| EC50 (nM) — A3 | `Q321` · not captured | 163.90 | nM | not captured | exact (not captured) | t0002:row4:col6 |
| EC50 (nM) — A4 | `Q321` · not captured | 98.09 | nM | not captured | exact (not captured) | t0002:row4:col7 |
| EC50 (nM) — A5 | `Q321` · not captured | 524.80 | nM | not captured | exact (not captured) | t0002:row4:col8 |
| EC50 (nM) — A6 | `Q321` · not captured | 541.20 | nM | not captured | exact (not captured) | t0002:row4:col9 |
| EC50 (nM) — AVM | `Q321` · not captured | 1.0 | nM | not captured | exact (not captured) | t0002:row5:col3 |

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
<sub>← back to [albumin](drugs/drug_albumin/)</sub>
