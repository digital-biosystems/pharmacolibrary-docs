# Clinical Opiate Withdrawal Scale — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Walsh_2024`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Walsh SL; Comer SD; Zdovc JA; Sarr C; Björnsson M; Strandgården K; et al. et al. (2024). Neuropsychopharmacology : official publication of the American College of Neuropsychopharmacology 49
  ·  DOI: [10.1038/s41386-023-01793-z](https://doi.org/10.1038/s41386-023-01793-z)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Baseline — Value | `Q324` · not captured | 45.3 | not captured | not captured | exact (not captured) | tab_0:row2:col2 |
| Baseline — RSE (%) | `Q324` · not captured | 2.40 | not captured | not captured | exact (not captured) | tab_0:row2:col3 |
| IC 50 — Value | `Q322` · not captured | 0.075 | ng/mL | not captured | llm (not captured) | tab_0:row3:col2 |
| IC 50 — RSE (%) | `Q322` · not captured | 30.4 | ng/mL | not captured | llm (not captured) | tab_0:row3:col3 |
| I max — Value | `Q323` · not captured | 1.00 | not captured | not captured | llm (not captured) | tab_0:row4:col2 |
| IIV Baseline — Value | `Q324` · not captured | 0.106 | not captured | not captured | llm_confirmed (not captured) | tab_0:row5:col2 |
| IIV Baseline — RSE (%) | `Q324` · not captured | 19.8 | not captured | not captured | llm_confirmed (not captured) | tab_0:row5:col3 |
| IIV Baseline — Shrinkage (%) | `Q318` · not captured | 11.6 | not captured | not captured | llm_corrected (not captured) | tab_0:row5:col4 |
| IIV IC 50 — Value | `Q322` · not captured | 1.90 | ng/mL | not captured | llm_corrected (not captured) | tab_0:row6:col2 |
| IIV IC 50 — RSE (%) | `Q312` · not captured | 10.3 | not captured | not captured | llm_confirmed (not captured) | tab_0:row6:col3 |
| IIV IC 50 — Shrinkage (%) | `Q318` · not captured | 13.3 | not captured | not captured | llm_corrected (not captured) | tab_0:row6:col4 |
| IIV I max — Value | `Q323` · not captured | 0 | not captured | not captured | llm_corrected (not captured) | tab_0:row7:col2 |
| Additive — RSE (%) | `Q317` · not captured | 8.62 | not captured | not captured | llm (not captured) | tab_0:row8:col3 |
| Additive — Shrinkage (%) | `Q318` · not captured | 9.39 | not captured | not captured | llm (not captured) | tab_0:row8:col4 |
| IC 90 — Unit | `Q321` · not captured | 0.675 | ng/mL | not captured | llm (not captured) | tab_0:row14:col1 |
| IC 90 — Value | `Q321` · not captured | 0.116 | ng/mL | not captured | llm (not captured) | tab_0:row14:col2 |
| IC 90 — Shrinkage (%) | `Q318` · not captured | 0.109 | not captured | not captured | llm (not captured) | tab_0:row14:col4 |

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
<sub>← back to [hydromorphone](drugs/drug_hydromorphone/)</sub>
