# seizure stage &gt;1 — PD  <span class="pk-badge pk-badge--orange">needs review</span>

- **paper:** `Pais_2026`
- **model family:** `categorical`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Pais GM; Lesnicki E; Marianski S; Valdez K; Gibson Z; Christopher J; Lepard K; Gilchrist A; Mizuno T; Scheetz MH et al. (2026). Antimicrobial agents and chemotherapy 70
  ·  DOI: [10.1128/aac.01005-25](https://doi.org/10.1128/aac.01005-25)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| k el (h -1 ) — Median | `Q47` · not captured | 0.14 | h -1 | not captured | space_fold (not captured) | tab_1:row1:col1 |
| k el (h -1 ) — RSE% | `Q47` · not captured | 38.7 | h -1 | not captured | space_fold (not captured) | tab_1:row1:col2 |
| beta_kel_logtWT — Median | `Q47` · not captured | 0.75 | not captured | not captured | llm (not captured) | tab_1:row2:col1 |
| V central (L) — Median | `Q63` · not captured | 0.12 | L | not captured | llm (not captured) | tab_1:row3:col1 |
| V central (L) — RSE% | `Q63` · not captured | 6.85 | L | not captured | llm (not captured) | tab_1:row3:col2 |
| V cortex (L) — Median | `Q61` · not captured | 0.0039 | L | not captured | llm (not captured) | tab_1:row5:col1 |
| V cortex (L) — RSE% | `Q61` · not captured | 18.6 | L | not captured | llm (not captured) | tab_1:row5:col2 |
| V hippocampus (L) — Median | `Q61` · not captured | 0.00039 | L | not captured | llm (not captured) | tab_1:row6:col1 |
| V hippocampus (L) — RSE% | `Q61` · not captured | 14.8 | L | not captured | llm (not captured) | tab_1:row6:col2 |
| k 12 (h -1 ) — Median | `Q301` · not captured | 0.00013 | h -1 | not captured | space_fold (not captured) | tab_1:row7:col1 |
| k 21 (h -1 ) — Median | `Q302` · not captured | 0.17 | h -1 | not captured | space_fold (not captured) | tab_1:row8:col1 |
| k 21 (h -1 ) — RSE% | `Q302` · not captured | 18.5 | h -1 | not captured | space_fold (not captured) | tab_1:row8:col2 |
| k 13 (h -1 ) — Median | `Q303` · not captured | 0.000015 | h -1 | not captured | space_fold (not captured) | tab_1:row9:col1 |
| k 13 (h -1 ) — RSE% | `Q303` · not captured | 24.9 | h -1 | not captured | space_fold (not captured) | tab_1:row9:col2 |
| k 31 (h -1 ) — Median | `Q304` · not captured | 0.15 | h -1 | not captured | space_fold (not captured) | tab_1:row10:col1 |
| k 31 (h -1 ) — RSE% | `Q304` · not captured | 31.2 | h -1 | not captured | space_fold (not captured) | tab_1:row10:col2 |
| corr_k el _V hippocampus — Median | `Q47` · not captured | 0.92 | not captured | not captured | llm (not captured) | tab_1:row12:col1 |
| corr_k el _V hippocampus — RSE% | `Q47` · not captured | 20.8 | not captured | not captured | llm (not captured) | tab_1:row12:col2 |

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
<sub>← back to [dermatan sulfate](drugs/drug_dermatan_sulfate/)</sub>
