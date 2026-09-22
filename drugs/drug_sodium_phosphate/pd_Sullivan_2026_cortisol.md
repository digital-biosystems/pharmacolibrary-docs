<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Sullivan_2026`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Sullivan J; Blea J; McKemie DS; Kass PH; Knych HK et al. (2026). Journal of veterinary pharmacology and therapeutics 49
  ·  DOI: [10.1111/jvp.70052](https://doi.org/10.1111/jvp.70052)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| K in (ng/(mL × h)) — Estimate (mean ± SE) | `Q358` · not captured | 16.0 | not captured | not captured | llm (not captured) | jvp70052-tbl-0006:row1:col1 |
| K out (1/h) — Estimate (mean ± SE) | `Q328` · not captured | 0.325 | not captured | not captured | space_fold (not captured) | jvp70052-tbl-0006:row2:col1 |
| K out (1/h) — CV (%) | `Q328` · not captured | 4.85 | not captured | not captured | space_fold (not captured) | jvp70052-tbl-0006:row2:col2 |
| K out (1/h) — ω2 | `Q328` · not captured | 0.380 | not captured | not captured | space_fold (not captured) | jvp70052-tbl-0006:row2:col3 |
| K out (1/h) — BSV% | `Q328` · not captured | 7.76 | not captured | not captured | space_fold (not captured) | jvp70052-tbl-0006:row2:col4 |
| I max (ng/mL) — Estimate (mean ± SE) | `Q323` · not captured | 1.0 | ng/mL | not captured | space_fold (not captured) | jvp70052-tbl-0006:row3:col1 |
| I max (ng/mL) — CV (%) | `Q323` · not captured | 0.0 | ng/mL | not captured | space_fold (not captured) | jvp70052-tbl-0006:row3:col2 |
| IC50 (ng/mL) — Estimate (mean ± SE) | `Q322` · not captured | 0.04 | ng/mL | not captured | exact (not captured) | jvp70052-tbl-0006:row4:col1 |
| IC50 (ng/mL) — CV (%) | `Q322` · not captured | 27.0 | ng/mL | not captured | exact (not captured) | jvp70052-tbl-0006:row4:col2 |
| IC50 (ng/mL) — ω2 | `Q322` · not captured | 0.932 | ng/mL | not captured | exact (not captured) | jvp70052-tbl-0006:row4:col3 |
| IC50 (ng/mL) — BSV% | `Q322` · not captured | 93.1 | ng/mL | not captured | exact (not captured) | jvp70052-tbl-0006:row4:col4 |
| Gamma — Estimate (mean ± SE) | `Q325` · not captured | 1.0 | not captured | not captured | exact (not captured) | jvp70052-tbl-0006:row5:col1 |
| Gamma — CV (%) | `Q325` · not captured | 0.0 | not captured | not captured | exact (not captured) | jvp70052-tbl-0006:row5:col2 |

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
<sub>← back to [sodium phosphate](drugs/drug_sodium_phosphate/)</sub>
