# Bispectral Index — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Flores-Pérez_2023`
- **model family:** `sigmoid_emax`
- **driver:** `pk_record`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Flores-Pérez C; Moreno-Rocha LA; Chávez-Pacheco JL; Noguez-Méndez NA; Flores-Pérez J; Ortiz-Marmolejo D; et al. et al. (2023). Pharmaceutics 15
  ·  DOI: [10.3390/pharmaceutics15112565](https://doi.org/10.3390/pharmaceutics15112565)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| E0 — Value | `Q324` · not captured | 57.63 | not captured | not captured | exact (not captured) | pharmaceutics-15-02565-t003:row1:col1 |
| E0 — RSE (%) | `Q324` · not captured | 2.17 | not captured | not captured | exact (not captured) | pharmaceutics-15-02565-t003:row1:col2 |
| E0 — RSE (%) | `Q324` · not captured | 2.17 | not captured | not captured | exact (not captured) | pharmaceutics-15-02565-t003:row1:col3 |
| Imax — Value | `Q323` · not captured | 0.088 | not captured | not captured | exact (not captured) | pharmaceutics-15-02565-t003:row2:col1 |
| Imax — RSE (%) | `Q323` · not captured | 0.036 | not captured | not captured | exact (not captured) | pharmaceutics-15-02565-t003:row2:col2 |
| Imax — RSE (%) | `Q323` · not captured | 0.036 | not captured | not captured | exact (not captured) | pharmaceutics-15-02565-t003:row2:col3 |
| IC50 — Value | `Q322` · not captured | 13.57 | ng/mL | not captured | exact (not captured) | pharmaceutics-15-02565-t003:row3:col1 |
| IC50 — RSE (%) | `Q322` · not captured | 30.01 | ng/mL | not captured | exact (not captured) | pharmaceutics-15-02565-t003:row3:col2 |
| IC50 — RSE (%) | `Q322` · not captured | 30.01 | ng/mL | not captured | exact (not captured) | pharmaceutics-15-02565-t003:row3:col3 |
| ω2E0 (CV%) — Value | `Q100` · not captured | 0.19 | not captured | not captured | nil (not captured) | pharmaceutics-15-02565-t003:row6:col1 |
| ω2E0 (CV%) — RSE (%) | `Q100` · not captured | 19.58 | not captured | not captured | nil (not captured) | pharmaceutics-15-02565-t003:row6:col2 |
| ω2E0 (CV%) — RSE (%) | `Q100` · not captured | 12.4 | not captured | not captured | nil (not captured) | pharmaceutics-15-02565-t003:row6:col3 |
| ω2IC50 (CV%) — Value | `Q100` · not captured | 2.99 | not captured | not captured | nil (not captured) | pharmaceutics-15-02565-t003:row8:col1 |
| ω2IC50 (CV%) — RSE (%) | `Q100` · not captured | 8796.01 | not captured | not captured | nil (not captured) | pharmaceutics-15-02565-t003:row8:col2 |
| ω2IC50 (CV%) — RSE (%) | `Q100` · not captured | 32.7 | not captured | not captured | nil (not captured) | pharmaceutics-15-02565-t003:row8:col3 |

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
