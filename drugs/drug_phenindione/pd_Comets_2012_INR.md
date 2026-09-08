# INR — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Comets_2012`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Comets E; Diquet B; Legrain S; Huisse MG; Godon A; Bruhat C; Chauveheid MP; Delpierre S; Duval X; Berrut G; Verstuyft C; Aumont MC; Mentré F et al. (2012). Clinical pharmacology and therapeutics 91
  ·  DOI: [10.1038/clpt.2011.309](https://doi.org/10.1038/clpt.2011.309)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| V (L) — Base model | `Q61` · not captured | 9.06 | L | not captured | exact (not captured) | tab_1:row3:col1 |
| V (L) — Final model | `Q61` · not captured | 41 | L | not captured | exact (not captured) | tab_1:row3:col2 |
| V (L) | `Q61` · not captured | 8.24 | L | not captured | exact (not captured) | tab_1:row3:col3 |
| V (L) | `Q61` · not captured | 36 | L | not captured | exact (not captured) | tab_1:row3:col4 |
| β V,men | `Q60` · not captured | 0.24 | hr -1 | not captured | llm (not captured) | tab_1:row4:col3 |
| CL (L.hr -1 ) — Base model | `Q22` · not captured | 0.12 | L.hr -1 | not captured | exact (not captured) | tab_1:row6:col1 |
| CL (L.hr -1 ) — Final model | `Q22` · not captured | 47 | L.hr -1 | not captured | exact (not captured) | tab_1:row6:col2 |
| CL (L.hr -1 ) | `Q22` · not captured | 0.10 | L.hr -1 | not captured | exact (not captured) | tab_1:row6:col3 |
| CL (L.hr -1 ) | `Q22` · not captured | 42 | L.hr -1 | not captured | exact (not captured) | tab_1:row6:col4 |
| β CL,cordarone | `Q358` · not captured | -0.18 | hr -1 | not captured | llm_corrected (not captured) | tab_1:row8:col3 |
| I 0 (-) — Base model | `Q324` · not captured | 1.11 | hr -1 | not captured | llm (not captured) | tab_1:row9:col1 |
| I 0 (-) | `Q358` · not captured | 1.10 | hr -1 | not captured | llm (not captured) | tab_1:row9:col3 |
| I 0 (-) | `Q358` · not captured | 7 | hr -1 | not captured | llm (not captured) | tab_1:row9:col4 |
| k out (hr -1 ) — Base model | `Q328` · not captured | 0.03 | hr -1 | not captured | space_fold (not captured) | tab_1:row10:col1 |
| k out (hr -1 ) — Final model | `Q328` · not captured | 80 | hr -1 | not captured | space_fold (not captured) | tab_1:row10:col2 |
| k out (hr -1 ) | `Q328` · not captured | 0.03 | hr -1 | not captured | space_fold (not captured) | tab_1:row10:col3 |
| k out (hr -1 ) | `Q328` · not captured | 85 | hr -1 | not captured | space_fold (not captured) | tab_1:row10:col4 |
| IC 50 (mg.L -1 ) — Base model | `Q322` · not captured | 1.71 | mg.L -1 | not captured | space_fold (not captured) | tab_1:row11:col1 |
| IC 50 (mg.L -1 ) — Final model | `Q322` · not captured | 56 | mg.L -1 | not captured | space_fold (not captured) | tab_1:row11:col2 |
| IC 50 (mg.L -1 ) | `Q322` · not captured | 2.18 | mg.L -1 | not captured | space_fold (not captured) | tab_1:row11:col3 |
| IC 50 (mg.L -1 ) | `Q322` · not captured | 53 | mg.L -1 | not captured | space_fold (not captured) | tab_1:row11:col4 |
| β IC 50 ,surgery | `Q322` · not captured | -0.54 | hr -1 | not captured | llm (not captured) | tab_1:row12:col3 |
| I max (-) — Base model | `Q323` · not captured | 0.89 | hr -1 | not captured | space_fold (not captured) | tab_1:row13:col1 |
| I max (-) | `Q323` · not captured | 0.94 | hr -1 | not captured | space_fold (not captured) | tab_1:row13:col3 |
| γ (-) | `Q89` · not captured | 1.71 | hr -1 | not captured | llm (not captured) | tab_1:row14:col3 |
| γ (-) | `Q89` · not captured | 40 | hr -1 | not captured | llm (not captured) | tab_1:row14:col4 |
| β γ,surgery | `Q47` · not captured | -0.46 | hr -1 | not captured | llm (not captured) | tab_1:row15:col3 |
| a PK (mg.L -1 ) — Base model | `Q900` · not captured | 0.19 | mg.L -1 | not captured | llm (not captured) | tab_1:row17:col1 |
| a PK (mg.L -1 ) | `Q900` · not captured | 0.20 | mg.L -1 | not captured | llm (not captured) | tab_1:row17:col3 |
| b PK (-) — Base model | `Q358` · not captured | 0.09 | hr -1 | not captured | llm (not captured) | tab_1:row18:col1 |
| b PK (-) | `Q358` · not captured | 0.08 | hr -1 | not captured | llm (not captured) | tab_1:row18:col3 |
| b PD (-) — Base model | `Q358` · not captured | 0.14 | hr -1 | not captured | llm (not captured) | tab_1:row19:col1 |
| b PD (-) | `Q358` · not captured | 0.13 | hr -1 | not captured | llm (not captured) | tab_1:row19:col3 |

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
<sub>← back to [phenindione](drugs/drug_phenindione/)</sub>
