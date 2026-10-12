# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `de_2017`
- **model family:** `indirect_response_iii`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/additive

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
de Winter W; Dunne A; de Trixhe XW; Devineni D; Hsu CH; Pinheiro J; et al. et al. (2017). British journal of clinical pharmacology 83
  ·  DOI: [10.1111/bcp.13180](https://doi.org/10.1111/bcp.13180)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| t ½ HbA1c (day) — Estimate Std. Error | `Q57` · not captured | 28.2 | day | not captured | llm (not captured) | tab_1:row1:col2 |
| t ½ HbA1c (day) | `Q57` · not captured | 2.24 | day | not captured | llm (not captured) | tab_1:row1:col3 |
| Baseline HbA1c (%) — Estimate Std. Error | `Q324` · not captured | 7.72 | not captured | not captured | llm_confirmed (not captured) | tab_1:row2:col2 |
| Baseline HbA1c (%) | `Q324` · not captured | 0.024 | not captured | not captured | llm_confirmed (not captured) | tab_1:row2:col3 |
| E max (%HbA1c @ steady-state) | `Q320` · not captured | -0.738 | %HbA1c @ steady-state | not captured | space_fold (not captured) | tab_1:row9:col1 |
| E max (%HbA1c @ steady-state) — Estimate Std. Error | `Q320` · not captured | 0.070 | %HbA1c @ steady-state | not captured | space_fold (not captured) | tab_1:row9:col2 |
| Log(EC 50 ) (Log(ng ml — Estimate Std. Error | `Q321` · not captured | 4.12 | unknown | not captured | llm (not captured) | tab_1:row10:col2 |
| Log(EC 50 ) (Log(ng ml | `Q321` · not captured | 0.54 | unknown | not captured | llm (not captured) | tab_1:row10:col3 |
| Residual error variance | `Q315` · not captured | 0.00182 | not captured | not captured | exact (not captured) | tab_1:row11:col1 |
| Residual error variance — Estimate Std. Error | `Q315` · not captured | 0.00014 | not captured | not captured | exact (not captured) | tab_1:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [metformin](drugs/toxin_metformin/)</sub>
