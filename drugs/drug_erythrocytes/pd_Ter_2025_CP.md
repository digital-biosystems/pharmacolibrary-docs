# classical pathway activity — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Ter_2025`
- **model family:** `emax`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Ter Avest M; Langemeijer SMC; van den Heuvel LPWJ; Baas LM; van de Kar NCAJ; Ter Heine R et al. (2025). Clinical pharmacokinetics 64
  ·  DOI: [10.1007/s40262-025-01536-x](https://doi.org/10.1007/s40262-025-01536-x)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Clearance (L/day) — Population estimate (RSE%) | `Q22` · not captured | 0.163 | L/day | not captured | exact (not captured) | Tab2:row1:col1 |
| IIVCL (ω2) — Population estimate (RSE%) | `Q312` · not captured | 0.155 | RSE% | not captured | llm (not captured) | Tab2:row2:col1 |
| IOVCL in case of aHUS (ω2) — Population estimate (RSE%) | `Q313` · not captured | 0.112 | RSE% | not captured | llm (not captured) | Tab2:row3:col1 |
| Volume of distribution 1 (L) — Population estimate (RSE%) | `Q63` · not captured | 4.3 | L | not captured | llm_corrected (not captured) | Tab2:row4:col1 |
| IIVV1 (ω2) — Population estimate (RSE%) | `Q312` · not captured | 0.0812 | RSE% | not captured | llm (not captured) | Tab2:row5:col1 |
| Volume of distribution 2 (L) — Population estimate (RSE%) | `Q64` · not captured | 2.6 | L | not captured | llm_corrected (not captured) | Tab2:row6:col1 |
| Q (L/day) — Population estimate (RSE%) | `Q30` · not captured | 0.62 | L/day | not captured | exact (not captured) | Tab2:row7:col1 |
| Maximum rate (Vmax) [mg/day] — Population estimate (RSE%) | `Q66` · not captured | 25.6 | RSE% | not captured | llm_confirmed (not captured) | Tab2:row8:col1 |
| Concentration for 50% of the maximum rate (Km) [mg/L] — Population estimate (RSE%) | `Q1` · not captured | 13.5 | RSE% | not captured | llm_confirmed (not captured) | Tab2:row9:col1 |
| Additional error — Population estimate (RSE%) | `Q317` · not captured | 19.3 | RSE% | not captured | llm (not captured) | Tab2:row11:col1 |
| Proportional error assay 1 (Radboudumc) — Population estimate (RSE%) | `Q316` · not captured | 0.0186 | Radboudumc | not captured | llm_confirmed (not captured) | Tab2:row12:col1 |
| Proportional error assay 2 (Sanquin) — Population estimate (RSE%) | `Q316` · not captured | 0.187 | Sanquin | not captured | llm_confirmed (not captured) | Tab2:row13:col1 |

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
<sub>← back to [erythrocytes](drugs/drug_erythrocytes/)</sub>
