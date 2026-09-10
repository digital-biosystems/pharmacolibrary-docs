# LDL-C — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Jadhav_2022`
- **model family:** `sigmoid_emax`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Jadhav SB; Crass RL; Chapel S; Kerschnitzki M; Sasiela WJ; Emery MG; et al. et al. (2022). European heart journal. Cardiovascular pharmacotherapy 8
  ·  DOI: [10.1093/ehjcvp/pvab064](https://doi.org/10.1093/ehjcvp/pvab064)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Baseline LDL-C, mg/dL — Estimate | `Q324` · not captured | 147.1 | not captured | not captured | llm_confirmed (not captured) | tbl1:row1:col1 |
| Baseline LDL-C, mg/dL — SE | `Q100` · not captured | 1.1 | not captured | not captured | llm_corrected (not captured) | tbl1:row1:col2 |
| k out, h–1 — Estimate | `Q328` · not captured | 0.01 | not captured | not captured | llm (not captured) | tbl1:row2:col1 |
| E max-BA — Estimate | `Q320` · not captured | -0.34 | not captured | not captured | llm (not captured) | tbl1:row3:col1 |
| E max-BA — SE | `Q320` · not captured | 0.01 | not captured | not captured | llm (not captured) | tbl1:row3:col2 |
| ED50-BA, mg — Estimate | `Q321` · not captured | 44.0 | unknown | not captured | llm (not captured) | tbl1:row4:col1 |
| ED50-BA, mg — SE | `Q321` · not captured | 3.8 | unknown | not captured | llm (not captured) | tbl1:row4:col2 |
| HillBA — Estimate | `Q325` · not captured | 1 | not captured | not captured | llm (not captured) | tbl1:row5:col1 |
| Proportional, % — Estimate | `Q316` · not captured | 8.4 | not captured | not captured | llm (not captured) | tbl1:row7:col1 |
| Baseline LDL-C — Estimate | `Q324` · not captured | 23.0 | not captured | not captured | llm_confirmed (not captured) | tbl1:row10:col1 |
| Emax-BA — Estimate | `Q320` · not captured | 36.2 | not captured | not captured | llm_confirmed (not captured) | tbl1:row11:col1 |

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
<sub>← back to [combinations](drugs/drug_combinations/)</sub>
