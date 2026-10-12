# pain score — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Zhou_2026`
- **model family:** `effect_compartment`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Zhou L; Yamamoto PA; Walker M; Conchon Costa AC; Lauretti GR; Dach F; Schmidt S; de Moraes NV et al. (2026). Frontiers in pharmacology 17
  ·  DOI: [10.3389/fphar.2026.1760901](https://doi.org/10.3389/fphar.2026.1760901)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| tlag (h) — Final estimate (%RSE) | `Q83` · not captured | 0.34 | h | not captured | exact (not captured) | T1:row2:col1 |
| ka (h-1) — Final estimate (%RSE) | `Q49` · not captured | 0.14 | h-1 | not captured | exact (not captured) | T1:row3:col1 |
| CL/F (L/h) — Final estimate (%RSE) | `Q27` · not captured | 10.16 | L/h | not captured | exact (not captured) | T1:row4:col1 |
| V1/F (L) — Final estimate (%RSE) | `Q290` · not captured | 18.16 | L | not captured | exact (not captured) | T1:row6:col1 |
| Q (L/h) — Final estimate (%RSE) | `Q30` · not captured | 6.58 | L/h | not captured | exact (not captured) | T1:row7:col1 |
| V2/F (L) — Final estimate (%RSE) | `Q82` · not captured | 357.67 | L | not captured | exact (not captured) | T1:row8:col1 |
| ke1 (h-1) — Final estimate (%RSE) | `Q47` · not captured | 0.53 | h-1 | not captured | llm (not captured) | T1:row9:col1 |
| E0 — Final estimate (%RSE) | `Q324` · not captured | 7.31 | not captured | not captured | exact (not captured) | T1:row11:col1 |
| IC50 (ng/mL) — Final estimate (%RSE) | `Q322` · not captured | 263.11 | ng/mL | not captured | exact (not captured) | T1:row12:col1 |
| ke2 (h-1) — Final estimate (%RSE) | `Q68` · not captured | 1 | h-1 | not captured | llm (not captured) | T1:row13:col1 |
| Imax — Final estimate (%RSE) | `Q323` · not captured | 1 | not captured | not captured | exact (not captured) | T1:row14:col1 |
| ωTlag — Final estimate (%RSE) | `Q83` · not captured | 0.52 | not captured | not captured | llm_confirmed (not captured) | T1:row16:col1 |
| ωka — Final estimate (%RSE) | `Q49` · not captured | 0.15 | not captured | not captured | llm_confirmed (not captured) | T1:row17:col1 |
| ωCL — Final estimate (%RSE) | `Q22` · not captured | 0.46 | not captured | not captured | llm_confirmed (not captured) | T1:row18:col1 |
| ωV1 — Final estimate (%RSE) | `Q63` · not captured | 0.54 | not captured | not captured | llm_confirmed (not captured) | T1:row19:col1 |
| ωE0 — Final estimate (%RSE) | `Q324` · not captured | 0.98 | not captured | not captured | llm_confirmed (not captured) | T1:row22:col1 |
| Proportional (b) — Final estimate (%RSE) | `Q900` · not captured | 0.30 | b | not captured | llm (not captured) | T1:row27:col1 |

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
