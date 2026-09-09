# change from baseline in body weight percentage — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Carlsson_2021`
- **model family:** `unknown`
- **driver:** `cited_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Carlsson Petri KC; Hale PM; Hesse D; Rathor N; Mastrandrea LD et al. (2021). Pediatric obesity 16
  ·  DOI: [10.1111/ijpo.12799](https://doi.org/10.1111/ijpo.12799)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Absorption rate constant — Estimate | `Q49` · not captured | 0.0813 | not captured | not captured | exact (not captured) | ijpo12799-tbl-0003:row1:col2 |
| Apparent clearance — Estimate | `Q27` · not captured | 1.01 | not captured | not captured | exact (not captured) | ijpo12799-tbl-0003:row2:col2 |
| Apparent clearance — 95% CI lower bound | `Q27` · not captured | 0.922 | not captured | not captured | exact (not captured) | ijpo12799-tbl-0003:row2:col3 |
| Apparent clearance — 95% CI upper bound | `Q27` · not captured | 1.09 | not captured | not captured | exact (not captured) | ijpo12799-tbl-0003:row2:col4 |
| Apparent clearance — RSE (%) | `Q27` · not captured | 4.25 | not captured | not captured | exact (not captured) | ijpo12799-tbl-0003:row2:col5 |
| Apparent clearance — IIV (%CV) | `Q27` · not captured | 31.2 | not captured | not captured | exact (not captured) | ijpo12799-tbl-0003:row2:col6 |
| Apparent clearance — Shrinkage (%) | `Q27` · not captured | 10.2 | not captured | not captured | exact (not captured) | ijpo12799-tbl-0003:row2:col7 |
| Apparent volume of distribution — Estimate | `Q76` · not captured | 13.8 | not captured | not captured | exact (not captured) | ijpo12799-tbl-0003:row3:col2 |
| Apparent volume of distribution — IIV (%CV) | `Q76` · not captured | 31.7 | not captured | not captured | exact (not captured) | ijpo12799-tbl-0003:row3:col6 |
| Apparent volume of distribution — Shrinkage (%) | `Q76` · not captured | 19.2 | not captured | not captured | exact (not captured) | ijpo12799-tbl-0003:row3:col7 |
| NA — Shrinkage (%) | `Q318` · not captured | 6.4 | not captured | not captured | llm (not captured) | ijpo12799-tbl-0003:row9:col7 |

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
<sub>← back to [liraglutide](drugs/drug_liraglutide/)</sub>
