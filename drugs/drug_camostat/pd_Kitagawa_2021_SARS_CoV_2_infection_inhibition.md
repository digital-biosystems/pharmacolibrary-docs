# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Kitagawa_2021`
- **model family:** `unknown`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Kitagawa J; Arai H; Iida H; Mukai J; Furukawa K; Ohtsu S; et al. et al. (2021). Clinical and translational science 14
  ·  DOI: [10.1111/cts.13052](https://doi.org/10.1111/cts.13052)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Absorption rate constant (KA) [/h] — Estimate | `Q49` · not captured | 5.91 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row2:col1 |
| Absorption rate constant (KA) [/h] — RSE (%) | `Q49` · not captured | 49.2 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row2:col2 |
| Clearance (CL) [L/h] — Estimate | `Q22` · not captured | 680 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row3:col1 |
| Clearance (CL) [L/h] — RSE (%) | `Q358` · not captured | 9.78 | not captured | not captured | llm_corrected (not captured) | cts13052-tbl-0002:row3:col2 |
| Volume of distribution of the central (V2/F) [L] — Estimate | `Q82` · not captured | 904 | not captured | not captured | llm_corrected (not captured) | cts13052-tbl-0002:row4:col1 |
| Volume of distribution of the central (V2/F) [L] — RSE (%) | `Q82` · not captured | 8.83 | not captured | not captured | llm_corrected (not captured) | cts13052-tbl-0002:row4:col2 |
| Intercompartmental clearance (Q) [L/h] — Estimate | `Q30` · not captured | 25.6 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row5:col1 |
| Intercompartmental clearance (Q) [L/h] — RSE (%) | `Q30` · not captured | 15 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row5:col2 |
| Volume of distribution of the peripheral (V3/F) [L] — Estimate | `Q78` · not captured | 151 | not captured | not captured | llm_corrected (not captured) | cts13052-tbl-0002:row6:col1 |
| Volume of distribution of the peripheral (V3/F) [L] — RSE (%) | `Q78` · not captured | 19.9 | not captured | not captured | llm_corrected (not captured) | cts13052-tbl-0002:row6:col2 |
| Lag time [h] — Estimate | `Q83` · not captured | 0.319 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row7:col1 |
| Lag time [h] — RSE (%) | `Q83` · not captured | 2.39 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row7:col2 |
| IOV on KA [% CV] — Estimate | `Q313` · not captured | 105 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row19:col1 |
| IOV on KA [% CV] — RSE (%) | `Q313` · not captured | 22.7 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row19:col2 |
| IOV on FA [% CV] — Estimate | `Q313` · not captured | 35.8 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row20:col1 |
| IOV on FA [% CV] — RSE (%) | `Q313` · not captured | 10.7 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row20:col2 |
| Proportional residual error [% CV] — Estimate | `Q316` · not captured | 0.39 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row22:col1 |
| Proportional residual error [% CV] — RSE (%) | `Q316` · not captured | 4.46 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row22:col2 |
| EC50 value of GBPA that inhibited SARS‐Cov‐2 infection | `Q321` · not captured | 178 | nM | not captured | review_gapfill (not captured) | Kitagawa_2021:review |

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
<sub>← back to [camostat](drugs/drug_camostat/)</sub>
