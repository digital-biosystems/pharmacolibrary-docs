# hemoglobin — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Naik_2013`
- **model family:** `indirect_response_ii`
- **driver:** `pk_record`
- **tier:** population
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Naik H; Tsai MC; Fiedler-Kelly J; Qiu P; Vakilynejad M et al. (2013). PloS one 8
  ·  DOI: [10.1371/journal.pone.0066422](https://doi.org/10.1371/journal.pone.0066422)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Drug concentration required for 50% of maximumresponse (EC50), in ng/mL — Final Estimate (% SEM) | `Q321` · not captured | 401 | ng/mL | not captured | llm_confirmed (not captured) | pone-0066422-t007:row1:col1 |
| Drug concentration required for 50% of maximumresponse (EC50), in ng/mL — Median Bootstrap Estimate | `Q321` · not captured | 417 | ng/mL | not captured | llm_confirmed (not captured) | pone-0066422-t007:row1:col2 |
| Drug concentration required for 50% of maximumresponse (EC50), in ng/mL — Bootstrap 95% CI1 | `Q321` · not captured | 128 | ng/mL | not captured | llm_confirmed (not captured) | pone-0066422-t007:row1:col3 |
| Hemoglobin at baseline, in g/dL — Final Estimate (% SEM) | `Q324` · not captured | 11.5 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row3:col1 |
| Hemoglobin at baseline, in g/dL — Median Bootstrap Estimate | `Q100` · not captured | 11.5 | not captured | not captured | llm_corrected (not captured) | pone-0066422-t007:row3:col2 |
| Hemoglobin at baseline, in g/dL — Bootstrap 95% CI1 | `Q100` · not captured | 11.4 | not captured | not captured | llm_corrected (not captured) | pone-0066422-t007:row3:col3 |
| Mean transit time for red blood cells (MTT),in hours — Final Estimate (% SEM) | `Q81` · not captured | 1640 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row4:col1 |
| Mean transit time for red blood cells (MTT),in hours — Median Bootstrap Estimate | `Q81` · not captured | 1610 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row4:col2 |
| Mean transit time for red blood cells (MTT),in hours — Bootstrap 95% CI1 | `Q81` · not captured | 1330 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row4:col3 |
| Mean transit time for progenitor cells (MTP),in hours — Final Estimate (% SEM) | `Q81` · not captured | 462 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row5:col1 |
| Mean transit time for progenitor cells (MTP),in hours — Median Bootstrap Estimate | `Q81` · not captured | 447 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row5:col2 |
| Mean transit time for progenitor cells (MTP),in hours — Bootstrap 95% CI1 | `Q81` · not captured | 348.4 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row5:col3 |
| ω2 on EC50 — Final Estimate (% SEM) | `Q321` · not captured | 8.92 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row11:col1 |
| ω2 on EC50 — Median Bootstrap Estimate | `Q321` · not captured | 9.47 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row11:col2 |
| ω2 on EC50 — Bootstrap 95% CI1 | `Q321` · not captured | 3.61 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row11:col3 |
| ω2 on BL Hgb — Final Estimate (% SEM) | `Q312` · not captured | 0.00485 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row12:col1 |
| ω2 on BL Hgb — Median Bootstrap Estimate | `Q312` · not captured | 0.00476 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row12:col2 |
| ω2 on BL Hgb — Bootstrap 95% CI1 | `Q312` · not captured | 0.00393 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row12:col3 |
| ω2 on CF — Final Estimate (% SEM) | `Q312` · not captured | 10.6 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row13:col1 |
| ω2 on CF — Median Bootstrap Estimate | `Q312` · not captured | 11.6 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row13:col2 |
| ω2 on CF — Bootstrap 95% CI1 | `Q312` · not captured | 7.244 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row13:col3 |
| σ2 (additive component) — Final Estimate (% SEM) | `Q315` · not captured | 0.00478 | additive component | not captured | exact (not captured) | pone-0066422-t007:row14:col1 |
| σ2 (additive component) — Median Bootstrap Estimate | `Q315` · not captured | 0.00475 | additive component | not captured | exact (not captured) | pone-0066422-t007:row14:col2 |
| σ2 (additive component) — Bootstrap 95% CI1 | `Q315` · not captured | 0.0044 | additive component | not captured | exact (not captured) | pone-0066422-t007:row14:col3 |

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
<sub>← back to [peginesatide](drugs/drug_peginesatide/)</sub>
