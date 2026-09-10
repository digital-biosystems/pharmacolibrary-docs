# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Mikaelian_2013`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Mikaelian I; Dunn ME; Mould DR; Hirkaler G; Geng W; Coluccio D; Nicklaus R; Singer T; Reddy M et al. (2013). Pharmacology research & perspectives 1
  ·  DOI: [10.1002/prp2.11](https://doi.org/10.1002/prp2.11)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Baseline (pg/mL) — Typical value | `Q324` · not captured | 2.51 | pg/mL | not captured | exact (not captured) | tbl3:row1:col1 |
| Baseline (pg/mL) — SD (%) | `Q324` · not captured | 3.6 | pg/mL | not captured | exact (not captured) | tbl3:row1:col2 |
| Baseline (pg/mL) — Between animal variability | `Q324` · not captured | 34.35 | pg/mL | not captured | exact (not captured) | tbl3:row1:col4 |
| Baseline (pg/mL) — SD (%) | `Q324` · not captured | 25.8 | pg/mL | not captured | exact (not captured) | tbl3:row1:col5 |
| Kdeg (h−1) — Typical value | `Q328` · not captured | 0.616 | h−1 | not captured | exact (not captured) | tbl3:row2:col1 |
| Kdeg (h−1) — SD (%) | `Q328` · not captured | 7.7 | h−1 | not captured | exact (not captured) | tbl3:row2:col2 |
| Kdeg (h−1) — Between animal variability | `Q328` · not captured | 7.5 | h−1 | not captured | exact (not captured) | tbl3:row2:col4 |
| Kdeg (h−1) — SD (%) | `Q328` · not captured | 750 | h−1 | not captured | exact (not captured) | tbl3:row2:col5 |
| Emax for NH group — Typical value | `Q320` · not captured | 0.511 | units | not captured | llm_confirmed (not captured) | tbl3:row3:col1 |
| Emax for NH group — SD (%) | `Q320` · not captured | 26.8 | units | not captured | llm_confirmed (not captured) | tbl3:row3:col2 |
| Emax for NH group — Between animal variability | `Q320` · not captured | 193 | units | not captured | llm_confirmed (not captured) | tbl3:row3:col4 |
| Emax for NH group — SD (%) | `Q320` · not captured | 18 | units | not captured | llm_confirmed (not captured) | tbl3:row3:col5 |
| Emax for A group — Typical value | `Q320` · not captured | 0.0927 | units | not captured | llm_confirmed (not captured) | tbl3:row4:col1 |
| Emax for A group — SD (%) | `Q320` · not captured | 21.8 | units | not captured | llm_confirmed (not captured) | tbl3:row4:col2 |
| Emax for RR group — Typical value | `Q320` · not captured | 7.77 | units | not captured | llm_confirmed (not captured) | tbl3:row5:col1 |
| Emax for RR group — SD (%) | `Q320` · not captured | 32.3 | units | not captured | llm_confirmed (not captured) | tbl3:row5:col2 |
| EC50, pg/mL — Typical value | `Q321` · not captured | 0.089 | units | not captured | llm_confirmed (not captured) | tbl3:row6:col1 |
| EC50, pg/mL — SD (%) | `Q321` · not captured | 36.6 | units | not captured | llm_confirmed (not captured) | tbl3:row6:col2 |
| Study 1 Additive error (pg/mL) — Typical value | `Q317` · not captured | 0.617 | pg/mL | not captured | llm_confirmed (not captured) | tbl3:row7:col1 |
| Study 1 Additive error (pg/mL) — SD (%) | `Q317` · not captured | 8.7 | pg/mL | not captured | llm_confirmed (not captured) | tbl3:row7:col2 |
| Study 2 Additive error (pg/mL) — Typical value | `Q317` · not captured | 0.452 | pg/mL | not captured | llm_confirmed (not captured) | tbl3:row8:col1 |
| Study 2 Additive error (pg/mL) — SD (%) | `Q317` · not captured | 6.9 | pg/mL | not captured | llm_confirmed (not captured) | tbl3:row8:col2 |

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
<sub>← back to [isoprenaline](drugs/drug_isoprenaline/)</sub>
