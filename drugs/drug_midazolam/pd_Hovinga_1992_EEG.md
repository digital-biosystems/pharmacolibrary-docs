# EEG total amplitude in 11.5-30 Hz — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Hovinga_1992`
- **model family:** `sigmoid_emax`
- **driver:** `cited_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Hovinga S; Stijnen AM; Langemeijer MW; Mandema JW; van Bezooijen CF; Danhof M et al. (1992). British journal of pharmacology 107
  ·  DOI: [10.1111/j.1476-5381.1992.tb14482.x](https://doi.org/10.1111/j.1476-5381.1992.tb14482.x)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Total body clearance (ml minm ' kg-') — 4 | `Q22` · not captured | 104 | ml minm ' kg-' | not captured | llm_confirmed (not captured) | tab_1:row2:col1 |
| Total body clearance (ml minm ' kg-') — 13 | `Q22` · not captured | 96 | ml minm ' kg-' | not captured | llm_confirmed (not captured) | tab_1:row2:col2 |
| Total body clearance (ml minm ' kg-') — 24 | `Q22` · not captured | 75 | ml minm ' kg-' | not captured | llm_confirmed (not captured) | tab_1:row2:col3 |
| Total body clearance (ml minm ' kg-') — 29 | `Q22` · not captured | 66 | ml minm ' kg-' | not captured | llm_confirmed (not captured) | tab_1:row2:col4 |
| Steady state volume of — 4 | `Q65` · not captured | 3.4 | not captured | not captured | llm_confirmed (not captured) | tab_1:row3:col1 |
| Steady state volume of — 13 | `Q65` · not captured | 2.9 | not captured | not captured | llm_confirmed (not captured) | tab_1:row3:col2 |
| Steady state volume of — 24 | `Q65` · not captured | 3.6 | not captured | not captured | llm_confirmed (not captured) | tab_1:row3:col3 |
| Steady state volume of — 29 | `Q65` · not captured | 3.3 | not captured | not captured | llm_confirmed (not captured) | tab_1:row3:col4 |
| distribution (I kg-') Volume of the central — 4 | `Q61` · not captured | 1.2 | not captured | not captured | llm_confirmed (not captured) | tab_1:row4:col1 |
| distribution (I kg-') Volume of the central — 13 | `Q61` · not captured | 0.9 | not captured | not captured | llm_confirmed (not captured) | tab_1:row4:col2 |
| distribution (I kg-') Volume of the central — 24 | `Q61` · not captured | 0.9 | not captured | not captured | llm_confirmed (not captured) | tab_1:row4:col3 |
| distribution (I kg-') Volume of the central — 29 | `Q61` · not captured | 1.1 | not captured | not captured | llm_confirmed (not captured) | tab_1:row4:col4 |
| compartment (I kg-') Elimination half-life (min) — 4 | `Q57` · not captured | 30 | min | not captured | llm (not captured) | tab_1:row5:col1 |
| compartment (I kg-') Elimination half-life (min) — 13 | `Q57` · not captured | 32 | min | not captured | llm (not captured) | tab_1:row5:col2 |
| compartment (I kg-') Elimination half-life (min) — 24 | `Q57` · not captured | 49 | min | not captured | llm (not captured) | tab_1:row5:col3 |
| compartment (I kg-') Elimination half-life (min) — 29 | `Q57` · not captured | 50 | min | not captured | llm (not captured) | tab_1:row5:col4 |

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
<sub>← back to [midazolam](drugs/drug_midazolam/)</sub>
