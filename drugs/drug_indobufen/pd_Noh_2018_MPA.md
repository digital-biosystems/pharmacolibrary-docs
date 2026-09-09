# platelet aggregation inhibition — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Noh_2018`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Noh YH; Han S; Choe S; Jung JA; Jung JA; Hwang AK; Lim HS et al. (2018). Translational and clinical pharmacology 26
  ·  DOI: [10.12793/tcp.2018.26.4.160](https://doi.org/10.12793/tcp.2018.26.4.160)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| C50, S — Estimate | `Q321` · not captured | 6.75 | mg/L | not captured | llm_confirmed (not captured) | T1:row1:col1 |
| C50, S — RSE (%) | `Q321` · not captured | 26.8 | mg/L | not captured | llm_confirmed (not captured) | T1:row1:col2 |
| C50, S — Median | `Q321` · not captured | 5.66 | mg/L | not captured | llm_confirmed (not captured) | T1:row1:col3 |
| C50, R — Estimate | `Q321` · not captured | 48.7 | mg/L | not captured | llm_confirmed (not captured) | T1:row2:col1 |
| C50, R — RSE (%) | `Q321` · not captured | 3.6 | mg/L | not captured | llm_confirmed (not captured) | T1:row2:col2 |
| C50, R — Median | `Q321` · not captured | 48.33 | mg/L | not captured | llm_confirmed (not captured) | T1:row2:col3 |
| Imax — Estimate | `Q323` · not captured | 6.38 | not captured | not captured | exact (not captured) | T1:row4:col1 |
| Imax — RSE (%) | `Q323` · not captured | 28.8 | not captured | not captured | exact (not captured) | T1:row4:col2 |
| Imax — Median | `Q323` · not captured | 8.52 | not captured | not captured | exact (not captured) | T1:row4:col3 |
| IIV of C50, S — Estimate | `Q312` · not captured | 200.1 | CV, % | not captured | llm_confirmed (not captured) | T1:row6:col1 |
| IIV of C50, S — RSE (%) | `Q312` · not captured | 13.4 | CV, % | not captured | llm_confirmed (not captured) | T1:row6:col2 |
| IIV of C50, S — Median | `Q312` · not captured | 195.2 | CV, % | not captured | llm_confirmed (not captured) | T1:row6:col3 |
| IIV of C50,R — Estimate | `Q312` · not captured | 8.4 | CV, % | not captured | llm_confirmed (not captured) | T1:row7:col1 |
| IIV of C50,R — RSE (%) | `Q312` · not captured | 85.8 | CV, % | not captured | llm_confirmed (not captured) | T1:row7:col2 |
| IIV of C50,R — Median | `Q312` · not captured | 7.2 | CV, % | not captured | llm_confirmed (not captured) | T1:row7:col3 |
| IIV of γ — Estimate | `Q312` · not captured | 45.5 | CV, % | not captured | llm_confirmed (not captured) | T1:row8:col1 |
| IIV of γ — RSE (%) | `Q312` · not captured | 26.0 | CV, % | not captured | llm_confirmed (not captured) | T1:row8:col2 |
| IIV of γ — Median | `Q312` · not captured | 44.2 | CV, % | not captured | llm_confirmed (not captured) | T1:row8:col3 |
| IIV of Imax — Estimate | `Q312` · not captured | 98.4 | CV, % | not captured | llm_corrected (not captured) | T1:row9:col1 |
| IIV of Imax — RSE (%) | `Q312` · not captured | 43.1 | CV, % | not captured | llm_corrected (not captured) | T1:row9:col2 |
| IIV of Imax — Median | `Q323` · not captured | 86.9 | CV, % | not captured | llm_confirmed (not captured) | T1:row9:col3 |
| ε (additive) — Estimate | `Q317` · not captured | 12.10 | additive | not captured | llm (not captured) | T1:row11:col1 |
| ε (additive) — RSE (%) | `Q317` · not captured | 7.2 | additive | not captured | llm (not captured) | T1:row11:col2 |

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
<sub>← back to [indobufen](drugs/drug_indobufen/)</sub>
