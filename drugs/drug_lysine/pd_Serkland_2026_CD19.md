# CD19+ lymphocyte count — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Serkland_2026`
- **model family:** `tmdd`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Serkland TT; Oma AF; Hallin EI; Øverås MH; Nygaard GO; Myhr KM; Torkildsen Ø; Röblitz S; Skrede S et al. (2026). Clinical pharmacokinetics
  ·  DOI: [10.1007/s40262-026-01692-8](https://doi.org/10.1007/s40262-026-01692-8)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| V 1 (L) — Estimate (RSE%) | `Q63` · not captured | 2.58 | L | not captured | space_fold (not captured) | tab_1:row2:col1 |
| V 1 (L) — 95% CI | `Q63` · not captured | 2.37 | L | not captured | space_fold (not captured) | tab_1:row2:col2 |
| V 2 (L) — Estimate (RSE%) | `Q64` · not captured | 1.95 | L | not captured | space_fold (not captured) | tab_1:row3:col1 |
| V 2 (L) — 95% CI | `Q64` · not captured | 1.75 | L | not captured | space_fold (not captured) | tab_1:row3:col2 |
| CL (L/day) — Estimate (RSE%) | `Q22` · not captured | 0.153 | L/day | not captured | exact (not captured) | tab_1:row4:col1 |
| CL (L/day) — 95% CI | `Q22` · not captured | 0.133 | L/day | not captured | exact (not captured) | tab_1:row4:col2 |
| Q (L/day) — Estimate (RSE%) | `Q30` · not captured | 0.220 | L/day | not captured | exact (not captured) | tab_1:row5:col1 |
| Q (L/day) — 95% CI | `Q30` · not captured | 0.163 | L/day | not captured | exact (not captured) | tab_1:row5:col2 |
| k out (1/day) — Estimate (RSE%) | `Q328` · not captured | 0.02 | RSE% | not captured | space_fold (not captured) | tab_1:row6:col1 |
| k deg (L/(day⋅mg)) — Estimate (RSE%) | `Q328` · not captured | 1.70 | RSE% | not captured | llm (not captured) | tab_1:row7:col1 |
| ω V1 — Estimate (RSE%) | `Q63` · not captured | 0.138 | RSE% | not captured | llm_confirmed (not captured) | tab_1:row9:col1 |
| ω V1 — 95% CI | `Q63` · not captured | 0.0882 | unit | not captured | llm_confirmed (not captured) | tab_1:row9:col2 |
| ω V2 — Estimate (RSE%) | `Q64` · not captured | 0.109 | RSE% | not captured | llm_confirmed (not captured) | tab_1:row10:col1 |
| ω V2 — 95% CI | `Q64` · not captured | 0.0534 | unit | not captured | llm_confirmed (not captured) | tab_1:row10:col2 |
| ω CL — Estimate (RSE%) | `Q358` · not captured | 0.234 | RSE% | not captured | llm_corrected (not captured) | tab_1:row11:col1 |
| ω CL — 95% CI | `Q358` · not captured | 0.154 | unit | not captured | llm_corrected (not captured) | tab_1:row11:col2 |
| σ add,OCR — Estimate (RSE%) | `Q317` · not captured | 0.545 | RSE% | not captured | llm (not captured) | tab_1:row13:col1 |
| σ add,OCR — 95% CI | `Q317` · not captured | 0.390 | unit | not captured | llm (not captured) | tab_1:row13:col2 |
| σ prop,OCR — Estimate (RSE%) | `Q316` · not captured | 0.0662 | RSE% | not captured | llm (not captured) | tab_1:row14:col1 |
| σ prop,OCR — 95% CI | `Q316` · not captured | 0.0510 | unit | not captured | llm (not captured) | tab_1:row14:col2 |
| σ add,CD19+ — Estimate (RSE%) | `Q315` · not captured | 2.28 | RSE% | not captured | llm (not captured) | tab_1:row15:col1 |
| σ add,CD19+ — 95% CI | `Q315` · not captured | 1.72 | unit | not captured | llm (not captured) | tab_1:row15:col2 |

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
<sub>← back to [lysine](drugs/drug_lysine/)</sub>
