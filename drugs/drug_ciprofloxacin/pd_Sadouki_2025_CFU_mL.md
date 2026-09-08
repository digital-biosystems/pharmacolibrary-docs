# bacterial load — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Sadouki_2025`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Sadouki Z; Wey EQ; Read L; Bayliss M; Noel A; Balakrishnan I; McHugh TD; Kloprogge F et al. (2025). Scientific reports 15
  ·  DOI: [10.1038/s41598-025-29354-y](https://doi.org/10.1038/s41598-025-29354-y)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| BMAX (CFU/mL) — Parameter | `Q332` · not captured | 10 | CFU/mL | not captured | exact (not captured) | Tab1:row4:col1 |
| EMAX — Parameter | `Q320` · not captured | 4.18 | not captured | not captured | exact (not captured) | Tab1:row9:col1 |
| EMAX — Model estimate (%RSE) | `Q320` · not captured | 5.43 | %RSE | not captured | exact (not captured) | Tab1:row9:col2 |
| IC50 (mg/L) — Parameter | `Q322` · not captured | 0.0781 | mg/L | not captured | exact (not captured) | Tab1:row10:col1 |
| IC50 (mg/L) — Model estimate (%RSE) | `Q322` · not captured | 72.3 | mg/L | not captured | exact (not captured) | Tab1:row10:col2 |
| hill — Parameter | `Q325` · not captured | 2.76 | not captured | not captured | exact (not captured) | Tab1:row11:col1 |
| hill — Model estimate (%RSE) | `Q325` · not captured | 26.4 | %RSE | not captured | exact (not captured) | Tab1:row11:col2 |
| BETA — Parameter | `Q68` · not captured | 0.922 | not captured | not captured | exact (not captured) | Tab1:row13:col1 |
| BETA — Model estimate (%RSE) | `Q68` · not captured | 1.58 | %RSE | not captured | exact (not captured) | Tab1:row13:col2 |
| EMAX — Parameter | `Q320` · not captured | 5.47 | not captured | not captured | exact (not captured) | Tab1:row18:col1 |
| IC50 (mg/L) — Parameter | `Q322` · not captured | 1.12 | mg/L | not captured | exact (not captured) | Tab1:row19:col1 |
| IC50 (mg/L) — Model estimate (%RSE) | `Q322` · not captured | 25.5 | mg/L | not captured | exact (not captured) | Tab1:row19:col2 |
| hill — Parameter | `Q325` · not captured | 3.63 | not captured | not captured | exact (not captured) | Tab1:row20:col1 |
| hill — Model estimate (%RSE) | `Q325` · not captured | 12.8 | %RSE | not captured | exact (not captured) | Tab1:row20:col2 |
| BETA — Model estimate (%RSE) | `Q68` · not captured | 0.475 | %RSE | not captured | exact (not captured) | Tab1:row22:col2 |
| EMAX — Parameter | `Q320` · not captured | 4.55 | mg/L | not captured | exact (not captured) | Tab1:row29:col1 |
| EMAX — Model estimate (%RSE) | `Q320` · not captured | 37.6 | %RSE | not captured | exact (not captured) | Tab1:row29:col2 |
| IC50 (mg/L) — Parameter | `Q322` · not captured | 0.0106 | mg/L | not captured | exact (not captured) | Tab1:row30:col1 |
| IC50 (mg/L) — Model estimate (%RSE) | `Q322` · not captured | 8.58 | mg/L | not captured | exact (not captured) | Tab1:row30:col2 |
| hill — Parameter | `Q325` · not captured | 3.58 | mg/L | not captured | exact (not captured) | Tab1:row31:col1 |
| hill — Model estimate (%RSE) | `Q325` · not captured | 12.1 | %RSE | not captured | exact (not captured) | Tab1:row31:col2 |
| BETA — Model estimate (%RSE) | `Q68` · not captured | 1.67 | %RSE | not captured | exact (not captured) | Tab1:row33:col2 |
| Residual variability — Model estimate (%RSE) | `Q315` · not captured | 0.864 | %RSE | not captured | exact (not captured) | Tab1:row44:col2 |

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
<sub>← back to [ciprofloxacin](drugs/drug_ciprofloxacin/)</sub>
