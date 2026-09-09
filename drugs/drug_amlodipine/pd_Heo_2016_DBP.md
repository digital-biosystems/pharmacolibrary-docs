# Diastolic blood pressure — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Heo_2016`
- **model family:** `emax`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/proportional

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Heo YA; Holford N; Kim Y; Son M; Park K et al. (2016). British journal of clinical pharmacology 82
  ·  DOI: [10.1111/bcp.13082](https://doi.org/10.1111/bcp.13082)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| I max — Amlodipine | `Q323` · not captured | 0.164 | not captured | not captured | llm (not captured) | tab_0:row6:col3 |
| I max | `Q323` · not captured | 0.164 | not captured | not captured | llm (not captured) | tab_0:row6:col4 |
| SBP IC 50 (ng ml | `Q322` · not captured | 8.27 | ng ml | not captured | llm (not captured) | tab_0:row7:col2 |
| SBP IC 50 (ng ml — Amlodipine | `Q322` · not captured | 10.80 | ng ml | not captured | llm (not captured) | tab_0:row7:col3 |
| SBP IC 50 (ng ml | `Q322` · not captured | 0 | ng ml | not captured | llm (not captured) | tab_0:row7:col4 |
| DBP IC 50 (ng ml | `Q322` · not captured | 2.97 | ng ml | not captured | llm (not captured) | tab_0:row8:col2 |
| DBP IC 50 (ng ml — Amlodipine | `Q322` · not captured | 4.79 | ng ml | not captured | llm (not captured) | tab_0:row8:col3 |
| DBP IC 50 (ng ml | `Q322` · not captured | 0 | ng ml | not captured | llm (not captured) | tab_0:row8:col4 |
| SBP Keq (/h) | `Q47` · not captured | 0.133 | /h | not captured | llm (not captured) | tab_0:row9:col4 |
| SBP Keq (/h) | `Q47` · not captured | 0.1 | /h | not captured | llm (not captured) | tab_0:row9:col5 |
| DBP Keq (/h) | `Q358` · not captured | 0.316 | /h | not captured | llm (not captured) | tab_0:row10:col4 |
| DBP Keq (/h) | `Q358` · not captured | 0.1 | /h | not captured | llm (not captured) | tab_0:row10:col5 |
| σ SBP additive (mmHg) | `Q315` · not captured | 2.01 | mmHg | not captured | llm (not captured) | tab_0:row12:col1 |
| σ SBP additive (mmHg) | `Q315` · not captured | 2.92 | mmHg | not captured | llm (not captured) | tab_0:row12:col2 |
| σ SBP additive (mmHg) — Amlodipine | `Q315` · not captured | 0.91 | mmHg | not captured | llm (not captured) | tab_0:row12:col3 |
| σ DBP additive (mmHg) | `Q315` · not captured | 1.36 | mmHg | not captured | llm (not captured) | tab_0:row13:col1 |
| σ DBP additive (mmHg) | `Q315` · not captured | 2.74 | mmHg | not captured | llm (not captured) | tab_0:row13:col2 |
| σ DBP additive (mmHg) — Amlodipine | `Q315` · not captured | 0.96 | mmHg | not captured | llm (not captured) | tab_0:row13:col3 |

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
<sub>← back to [amlodipine](drugs/drug_amlodipine/)</sub>
