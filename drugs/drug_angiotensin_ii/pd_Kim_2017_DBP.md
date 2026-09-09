# diastolic blood pressure — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Kim_2017`
- **model family:** `sigmoid_emax`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Kim CO; Jeon S; Han S; Hong T; Park MS; Yoon YR; et al. et al. (2017). Translational and clinical pharmacology 25
  ·  DOI: [10.12793/tcp.2017.25.1.43](https://doi.org/10.12793/tcp.2017.25.1.43)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Kin — Estimate | `Q327` · not captured | 90.3 | not captured | not captured | exact (not captured) | T4:row3:col2 |
| Kin — RSE | `Q327` · not captured | 17.7 | not captured | not captured | exact (not captured) | T4:row3:col3 |
| Emax — Estimate | `Q320` · not captured | 21.3 | not captured | not captured | exact (not captured) | T4:row4:col2 |
| Emax — RSE | `Q320` · not captured | 5.8 | not captured | not captured | exact (not captured) | T4:row4:col3 |
| EC50,H — Estimate | `Q321` · not captured | 2.28 | unknown | not captured | llm_confirmed (not captured) | T4:row7:col2 |
| EC50,H — RSE | `Q321` · not captured | 20.7 | unknown | not captured | llm_confirmed (not captured) | T4:row7:col3 |
| EC50, A+B — Estimate | `Q321` · not captured | 9.19 | unknown | not captured | llm_confirmed (not captured) | T4:row8:col2 |
| EC50, A+B — RSE | `Q321` · not captured | 53.8 | unknown | not captured | llm_confirmed (not captured) | T4:row8:col3 |
| Koutb — Estimate | `Q328` · not captured | 0.69 | not captured | not captured | llm (not captured) | T4:row9:col2 |
| σprop — Estimate | `Q316` · not captured | 0.063 | not captured | not captured | llm (not captured) | T4:row13:col2 |
| σprop — RSE | `Q316` · not captured | 6.2 | not captured | not captured | llm (not captured) | T4:row13:col3 |
| Kin — Estimate | `Q327` · not captured | 33.1 | not captured | not captured | exact (not captured) | T4:row16:col2 |
| Kin — RSE | `Q327` · not captured | 19.7 | not captured | not captured | exact (not captured) | T4:row16:col3 |
| Emax — Estimate | `Q320` · not captured | 33.8 | not captured | not captured | exact (not captured) | T4:row17:col2 |
| Emax — RSE | `Q320` · not captured | 8.7 | not captured | not captured | exact (not captured) | T4:row17:col3 |
| EC50,H+A — Estimate | `Q321` · not captured | 4.82 | unknown | not captured | llm_confirmed (not captured) | T4:row20:col2 |
| EC50,H+A — RSE | `Q321` · not captured | 40.5 | unknown | not captured | llm_confirmed (not captured) | T4:row20:col3 |
| EC50, B — Estimate | `Q321` · not captured | 47.3 | unknown | not captured | llm_confirmed (not captured) | T4:row21:col2 |
| EC50, B — RSE | `Q321` · not captured | 51.8 | unknown | not captured | llm_confirmed (not captured) | T4:row21:col3 |
| Koutb — Estimate | `Q328` · not captured | 0.40 | not captured | not captured | llm (not captured) | T4:row22:col2 |
| ωEC50 — Estimate | `Q321` · not captured | 56.8 | unknown | not captured | llm_confirmed (not captured) | T4:row25:col2 |
| ωEC50 — RSE | `Q321` · not captured | 55.3 | unknown | not captured | llm_confirmed (not captured) | T4:row25:col3 |
| σadd — Estimate | `Q317` · not captured | 6.27 | not captured | not captured | llm (not captured) | T4:row27:col2 |
| σadd — RSE | `Q317` · not captured | 6.8 | not captured | not captured | llm (not captured) | T4:row27:col3 |
| σprop — Estimate | `Q316` · not captured | 0.0001 | not captured | not captured | llm (not captured) | T4:row28:col2 |

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
<sub>← back to [angiotensin II](drugs/drug_angiotensin_ii/)</sub>
