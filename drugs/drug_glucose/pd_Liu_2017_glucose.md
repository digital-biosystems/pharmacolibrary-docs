# plasma glucose — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Liu_2017`
- **model family:** `effect_compartment`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Liu S; Chen P; Zhao Y; Dai G; Sun B; Wang Y; et al. et al. (2017). BMC pharmacology & toxicology 18
  ·  DOI: [10.1186/s40360-017-0161-6](https://doi.org/10.1186/s40360-017-0161-6)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Ka (/h) — Mean ± SD | `Q49` · not captured | 9.57 | /h | not captured | exact (not captured) | Tab2:row1:col1 |
| Ka (/h) — Inter-individual variability (CV %) | `Q49` · not captured | 91.95 | /h | not captured | exact (not captured) | Tab2:row1:col2 |
| Tlag (h) — Mean ± SD | `Q83` · not captured | 0.09 | h | not captured | exact (not captured) | Tab2:row2:col1 |
| Tlag (h) — Inter-individual variability (CV %) | `Q83` · not captured | 70.71 | h | not captured | exact (not captured) | Tab2:row2:col2 |
| V (L) — Mean ± SD | `Q61` · not captured | 6.15 | L | not captured | exact (not captured) | Tab2:row3:col1 |
| V (L) — Inter-individual variability (CV %) | `Q61` · not captured | 17.61 | L | not captured | exact (not captured) | Tab2:row3:col2 |
| CL (L/h) — Mean ± SD | `Q22` · not captured | 0.03 | L/h | not captured | exact (not captured) | Tab2:row4:col1 |
| V2 (L) — Mean ± SD | `Q64` · not captured | 104.69 | L | not captured | exact (not captured) | Tab2:row5:col1 |
| Cl2 (L/h) — Mean ± SD | `Q30` · not captured | 9.85 | L/h | not captured | special_case (not captured) | Tab2:row6:col1 |
| Cl2 (L/h) — Inter-individual variability (CV %) | `Q30` · not captured | 22.18 | L/h | not captured | special_case (not captured) | Tab2:row6:col2 |
| IC50 (μg/mL) — Mean ± SD | `Q322` · not captured | 1.13 | μg/mL | not captured | exact (not captured) | Tab2:row7:col1 |
| E0 (mmol/L) — Mean ± SD | `Q324` · not captured | 4.65 | mmol/L | not captured | exact (not captured) | Tab2:row8:col1 |
| E0 (mmol/L) — Inter-individual variability (CV %) | `Q324` · not captured | 4.35 | mmol/L | not captured | exact (not captured) | Tab2:row8:col2 |
| Ke0 (/h) — Mean ± SD | `Q326` · not captured | 7.47 | /h | not captured | exact (not captured) | Tab2:row9:col1 |
| Ke0 (/h) — Inter-individual variability (CV %) | `Q326` · not captured | 90.61 | /h | not captured | exact (not captured) | Tab2:row9:col2 |
| Gamma — Mean ± SD | `Q325` · not captured | 1.66 | not captured | not captured | exact (not captured) | Tab2:row10:col1 |
| Gamma — Inter-individual variability (CV %) | `Q325` · not captured | 18.67 | not captured | not captured | exact (not captured) | Tab2:row10:col2 |

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
<sub>← back to [glucose](drugs/drug_glucose/)</sub>
