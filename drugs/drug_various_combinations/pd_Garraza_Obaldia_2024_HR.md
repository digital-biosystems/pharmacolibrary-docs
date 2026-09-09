# heart rate — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Garraza-Obaldia_2024`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Garraza-Obaldia M; Jaramillo S; Parra-Guillen ZP; Valencia JF; Gambús PL; Trocóniz IF et al. (2024). Pharmaceutics 16
  ·  DOI: [10.3390/pharmaceutics16121615](https://doi.org/10.3390/pharmaceutics16121615)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| C50Propo (µg∙mL−1) — Estimate (RSE %) | `Q321` · not captured | 8.79 | µg∙mL−1 | not captured | llm (not captured) | pharmaceutics-16-01615-t002:row2:col1 |
| IIV C50Propo (%) — Estimate (RSE %) | `Q312` · not captured | 104.0 | RSE % | not captured | llm_confirmed (not captured) | pharmaceutics-16-01615-t002:row3:col1 |
| IIV C50Propo (%) — Shrinkage (%) | `Q318` · not captured | 7.5 | not captured | not captured | llm_corrected (not captured) | pharmaceutics-16-01615-t002:row3:col3 |
| EmaxPropo — Estimate (RSE %) | `Q320` · not captured | 0.88 | RSE % | not captured | llm (not captured) | pharmaceutics-16-01615-t002:row4:col1 |
| C50Remi (ng∙mL−1) — Estimate (RSE %) | `Q75` · not captured | 4.57 | ng∙mL−1 | not captured | llm (not captured) | pharmaceutics-16-01615-t002:row5:col1 |
| IIV C50Remi (%) — Estimate (RSE %) | `Q312` · not captured | 103.7 | RSE % | not captured | llm_confirmed (not captured) | pharmaceutics-16-01615-t002:row6:col1 |
| IIV C50Remi (%) — Shrinkage (%) | `Q318` · not captured | 7.2 | not captured | not captured | llm_corrected (not captured) | pharmaceutics-16-01615-t002:row6:col3 |
| EmaxRemi ,HR — Estimate (RSE %) | `Q320` · not captured | 0.69 | RSE % | not captured | llm (not captured) | pharmaceutics-16-01615-t002:row7:col1 |
| IIV MAP0 (%) — Estimate (RSE %) | `Q312` · not captured | 8.63 | RSE % | not captured | llm_confirmed (not captured) | pharmaceutics-16-01615-t002:row11:col1 |
| IIV MAP0 (%) — Shrinkage (%) | `Q318` · not captured | 6.5 | not captured | not captured | llm_corrected (not captured) | pharmaceutics-16-01615-t002:row11:col3 |
| HR0 (bpm) — Estimate (RSE %) | `Q324` · not captured | 70.8 | bpm | not captured | llm (not captured) | pharmaceutics-16-01615-t002:row12:col1 |
| IIV HR0 (%) — Estimate (RSE %) | `Q312` · not captured | 14.4 | RSE % | not captured | llm_confirmed (not captured) | pharmaceutics-16-01615-t002:row13:col1 |
| IIV HR0 (%) — Shrinkage (%) | `Q318` · not captured | 1.0 | not captured | not captured | llm_corrected (not captured) | pharmaceutics-16-01615-t002:row13:col3 |
| kout (min−1) — Estimate (RSE %) | `Q328` · not captured | 0.123 | min−1 | not captured | exact (not captured) | pharmaceutics-16-01615-t002:row14:col1 |
| IIV kout,MAP (%) — Estimate (RSE %) | `Q328` · not captured | 142.6 | RSE % | not captured | llm_confirmed (not captured) | pharmaceutics-16-01615-t002:row15:col1 |
| IIV kout,MAP (%) — Shrinkage (%) | `Q318` · not captured | 6.7 | not captured | not captured | llm_corrected (not captured) | pharmaceutics-16-01615-t002:row15:col3 |
| IIV kout,HR (%) — Estimate (RSE %) | `Q328` · not captured | 130.2 | RSE % | not captured | llm_confirmed (not captured) | pharmaceutics-16-01615-t002:row16:col1 |
| IIV kout,HR (%) — Shrinkage (%) | `Q318` · not captured | 13.2 | not captured | not captured | llm_corrected (not captured) | pharmaceutics-16-01615-t002:row16:col3 |
| C50Propo, kout,MAP (unitless) — Estimate (RSE %) | `Q328` · not captured | 0.76 | unitless | not captured | llm_confirmed (not captured) | pharmaceutics-16-01615-t002:row22:col1 |
| Residual error in MAP (mmHg) — Shrinkage (%) | `Q318` · not captured | 3.3 | mmHg | not captured | llm (not captured) | pharmaceutics-16-01615-t002:row24:col3 |
| Residual error in HR (bpm) — Estimate (RSE %) | `Q315` · not captured | 4.30 | bpm | not captured | llm (not captured) | pharmaceutics-16-01615-t002:row25:col1 |
| Residual error in HR (bpm) — Shrinkage (%) | `Q318` · not captured | 2.5 | bpm | not captured | llm (not captured) | pharmaceutics-16-01615-t002:row25:col3 |

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
<sub>← back to [various combinations](drugs/drug_various_combinations/)</sub>
