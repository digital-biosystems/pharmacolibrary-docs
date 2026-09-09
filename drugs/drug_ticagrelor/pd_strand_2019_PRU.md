# P2Y12 reaction units — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Åstrand_2019`
- **model family:** `sigmoid_emax`
- **driver:** `pk_record`
- **tier:** population
- **effect:** inhibition/proportional

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Åstrand M; Amilon C; Röshammar D; Himmelmann A; Angiolillo DJ; Storey RF; et al. et al. (2019). British journal of clinical pharmacology 85
  ·  DOI: [10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| CL/F (l h –1 ) — Estimate | `Q27` · not captured | 16.6 | l h –1 | not captured | exact (not captured) | bcp13812-tbl-0002:row1:col1 |
| CL/F (l h –1 ) — BSV (%) | `Q27` · not captured | 24 | l h –1 | not captured | exact (not captured) | bcp13812-tbl-0002:row1:col3 |
| Q/F (l h –1 ) — Estimate | `Q69` · not captured | 10.4 | l h –1 | not captured | exact (not captured) | bcp13812-tbl-0002:row2:col1 |
| Q/F (l h –1 ) — BSV (%) | `Q69` · not captured | 95 | l h –1 | not captured | exact (not captured) | bcp13812-tbl-0002:row2:col3 |
| Vc/F (l) — Estimate | `Q290` · not captured | 156 | l | not captured | exact (not captured) | bcp13812-tbl-0002:row3:col1 |
| Vp/F (l) — Estimate | `Q82` · not captured | 55.8 | l | not captured | exact (not captured) | bcp13812-tbl-0002:row4:col1 |
| KTR (h −1 ) — Estimate | `Q306` · not captured | 10.1 | h −1 | not captured | exact (not captured) | bcp13812-tbl-0002:row5:col1 |
| KTR (h −1 ) — BSV (%) | `Q306` · not captured | 54 | h −1 | not captured | exact (not captured) | bcp13812-tbl-0002:row5:col3 |
| Absorption lag time prior MI (h) — Estimate | `Q83` · not captured | 0.48 | h | not captured | llm_confirmed (not captured) | bcp13812-tbl-0002:row6:col1 |
| F rel — Estimate | `Q87` · not captured | 1 | not captured | not captured | exact (not captured) | bcp13812-tbl-0002:row7:col1 |
| F rel — BSV (%) | `Q87` · not captured | 32 | not captured | not captured | exact (not captured) | bcp13812-tbl-0002:row7:col3 |
| Proportional residual error ticagrelor (%) — Estimate | `Q316` · not captured | 32 | not captured | not captured | llm_confirmed (not captured) | bcp13812-tbl-0002:row8:col1 |
| CL m /F (l h –1 ) — Estimate | `Q351` · not captured | 10.2 | l h –1 | not captured | space_fold (not captured) | bcp13812-tbl-0002:row9:col1 |
| CL m /F (l h –1 ) — BSV (%) | `Q351` · not captured | 28 | l h –1 | not captured | space_fold (not captured) | bcp13812-tbl-0002:row9:col3 |
| F m — Estimate | `Q45` · not captured | 0.22 | not captured | not captured | space_fold (not captured) | bcp13812-tbl-0002:row10:col1 |
| Q m /F (l h –1 ) — Estimate | `Q69` · not captured | 4.41 | l h –1 | not captured | llm (not captured) | bcp13812-tbl-0002:row11:col1 |
| Vc m /F (l) — Estimate | `Q290` · not captured | 7.04 | l | not captured | llm_corrected (not captured) | bcp13812-tbl-0002:row12:col1 |
| Vp m /F (l) — Estimate | `Q82` · not captured | 42.3 | l | not captured | llm_corrected (not captured) | bcp13812-tbl-0002:row13:col1 |
| Vp m /F (l) — BSV (%) | `Q82` · not captured | 37 | l | not captured | llm_corrected (not captured) | bcp13812-tbl-0002:row13:col3 |
| Proportional residual error metabolite (%) — Estimate | `Q316` · not captured | 26 | not captured | not captured | llm_confirmed (not captured) | bcp13812-tbl-0002:row14:col1 |
| EC 50 (nmol l –1 ) — Estimate | `Q321` · not captured | 116 | nmol l –1 | not captured | space_fold (not captured) | bcp13812-tbl-0002:row17:col1 |
| EC 50 (nmol l –1 ) — BSV (%) | `Q321` · not captured | 66 | nmol l –1 | not captured | space_fold (not captured) | bcp13812-tbl-0002:row17:col3 |
| PRU baseline ‐EC 50 correlation — BSV (%) | `Q321` · not captured | 0.33 | nmol l–1 | not captured | llm_corrected (not captured) | bcp13812-tbl-0002:row18:col3 |
| E max (%) — Estimate | `Q320` · not captured | 98.5 | not captured | not captured | space_fold (not captured) | bcp13812-tbl-0002:row19:col1 |
| Steepness of exposure‐response (γ) — Estimate | `Q325` · not captured | 1.59 | not captured | not captured | llm_corrected (not captured) | bcp13812-tbl-0002:row20:col1 |
| Additive residual error PRU (at PRU = 300) — Estimate | `Q317` · not captured | 47.6 | at PRU = 300 | not captured | llm_confirmed (not captured) | bcp13812-tbl-0002:row21:col1 |

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
<sub>← back to [ticagrelor](drugs/drug_ticagrelor/)</sub>
