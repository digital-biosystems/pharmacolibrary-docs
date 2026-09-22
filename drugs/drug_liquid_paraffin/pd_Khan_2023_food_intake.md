<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Khan_2023`
- **model family:** `unknown`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

## Citation
Khan AS; Hichami A; Murtaza B; Louillat-Habermeyer ML; Ramseyer C; Azadi M; Yesylevskyy S; Mangin F; Lirussi F; Leemput J; Merlin JF; Schmitt A; Suliman M; Bayardon J; Semnanian S; Jugé S; Khan NA et al. (2023). Cellular and molecular gastroenterology and hepatology 15
  ·  DOI: [10.1016/j.jcmgh.2022.11.003](https://doi.org/10.1016/j.jcmgh.2022.11.003)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Clearance (L/h) — Estimation mean | `Q22` · not captured | 0.202 | L/h | not captured | exact (not captured) | tbl17:row1:col1 |
| Clearance (L/h) — Interindividual variability (coefficient of variation, %) | `Q22` · not captured | 44.1 | L/h | not captured | exact (not captured) | tbl17:row1:col2 |
| Volume of central compartment (L) — Estimation mean | `Q63` · not captured | 0.0634 | L | not captured | llm_corrected (not captured) | tbl17:row2:col1 |
| Intercompartmental clearance (L/h) — Estimation mean | `Q30` · not captured | 0.739 | L/h | not captured | exact (not captured) | tbl17:row3:col1 |
| Intercompartmental clearance (L/h) — Interindividual variability (coefficient of variation, %) | `Q30` · not captured | 66.7 | L/h | not captured | exact (not captured) | tbl17:row3:col2 |
| Volume of peripheral compartment (L) — Estimation mean | `Q64` · not captured | 2.24 | L | not captured | llm_corrected (not captured) | tbl17:row4:col1 |
| Volume of peripheral compartment (L) — Interindividual variability (coefficient of variation, %) | `Q64` · not captured | 24.8 | L | not captured | llm_corrected (not captured) | tbl17:row4:col2 |
| Proportional residual error (%) — Estimation mean | `Q316` · not captured | 1.89 | not captured | not captured | exact (not captured) | tbl17:row5:col1 |

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
<sub>← back to [liquid paraffin](drugs/drug_liquid_paraffin/)</sub>
