<div class="pk-tab-mark" data-tab="Information"></div>

# free Ang-2 — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Diack_2024`
- **model family:** `indirect_response_i`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Diack C; Avery RL; Cheung CMG; Csaky KG; Gibiansky L; Jaminion F; Gibiansky E; Sickert D; Stoilov I; Cosson V; Bogman K et al. (2024). Translational vision science & technology 13
  ·  DOI: [10.1167/tvst.13.11.13](https://doi.org/10.1167/tvst.13.11.13)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| kout (1/day) — Estimate | `Q328` · not captured | 4.15 | not captured | not captured | exact (not captured) | tbl1:row1:col2 |
| kout (1/day) — % RSE | `Q328` · not captured | 8.42 | not captured | not captured | exact (not captured) | tbl1:row1:col3 |
| kout (1/day) — 95% CI | `Q328` · not captured | 3.46 | not captured | not captured | exact (not captured) | tbl1:row1:col4 |
| EC50 (µg/mL) — Estimate | `Q321` · not captured | 2.59 | µg/mL | not captured | exact (not captured) | tbl1:row4:col2 |
| EC50 (µg/mL) — % RSE | `Q321` · not captured | 3.36 | µg/mL | not captured | exact (not captured) | tbl1:row4:col3 |
| EC50 (µg/mL) — 95% CI | `Q321` · not captured | 2.42 | µg/mL | not captured | exact (not captured) | tbl1:row4:col4 |
| HillPhase 2 — Estimate | `Q325` · not captured | 1.11 | not captured | not captured | llm (not captured) | tbl1:row5:col2 |
| HillPhase 2 — % RSE | `Q100` · not captured | 1.33 | not captured | not captured | llm (not captured) | tbl1:row5:col3 |
| HillPhase 2 — 95% CI | `Q325` · not captured | 1.08 | not captured | not captured | llm (not captured) | tbl1:row5:col4 |
| HillPhase 3 — Estimate | `Q325` · not captured | 0.655 | not captured | not captured | llm (not captured) | tbl1:row6:col2 |
| HillPhase 3 — % RSE | `Q100` · not captured | 1.07 | not captured | not captured | llm (not captured) | tbl1:row6:col3 |
| HillPhase 3 — 95% CI | `Q325` · not captured | 0.641 | not captured | not captured | llm (not captured) | tbl1:row6:col4 |
| EMAX — Estimate | `Q320` · not captured | 0.987 | not captured | not captured | exact (not captured) | tbl1:row7:col2 |
| EMAX — % RSE | `Q320` · not captured | 0.0117 | not captured | not captured | exact (not captured) | tbl1:row7:col3 |
| EMAX — 95% CI | `Q320` · not captured | 0.987 | not captured | not captured | exact (not captured) | tbl1:row7:col4 |
| σVEGF-A = ωBASE,observed — Estimate | `Q315` · not captured | 0.401 | not captured | not captured | llm (not captured) | tbl1:row8:col2 |
| σVEGF-A = ωBASE,observed — % RSE | `Q315` · not captured | 1.19 | not captured | not captured | llm (not captured) | tbl1:row8:col3 |
| σVEGF-A = ωBASE,observed — 95% CI | `Q315` · not captured | 0.391 | not captured | not captured | llm (not captured) | tbl1:row8:col4 |
| HillBASE — Estimate | `Q100` · not captured | 0.235 | not captured | not captured | llm (not captured) | tbl1:row9:col2 |
| HillBASE — % RSE | `Q100` · not captured | 2.08 | not captured | not captured | llm (not captured) | tbl1:row9:col3 |
| HillBASE — 95% CI | `Q325` · not captured | 0.225 | not captured | not captured | llm (not captured) | tbl1:row9:col4 |
| ω2BASE,missing — Estimate | `Q312` · not captured | 0.411 | not captured | not captured | llm (not captured) | tbl1:row10:col2 |
| ω2BASE,missing — % RSE | `Q312` · not captured | 19 | not captured | not captured | llm (not captured) | tbl1:row10:col3 |
| ω2BASE,missing — 95% CI | `Q312` · not captured | 0.258 | not captured | not captured | llm (not captured) | tbl1:row10:col4 |
| ω2EC50 — Estimate | `Q321` · not captured | 1.1 | µg/mL | not captured | llm (not captured) | tbl1:row12:col2 |
| ω2EC50 — % RSE | `Q321` · not captured | 4.15 | µg/mL | not captured | llm (not captured) | tbl1:row12:col3 |
| ω2EC50 — 95% CI | `Q321` · not captured | 1.01 | µg/mL | not captured | llm (not captured) | tbl1:row12:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [trometamol](drugs/drug_trometamol/)</sub>
