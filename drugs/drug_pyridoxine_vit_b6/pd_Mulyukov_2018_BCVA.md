<div class="pk-tab-mark" data-tab="Information"></div>

# best corrected visual acuity — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Mulyukov_2018`
- **model family:** `indirect_response_i`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** stimulation/unknown

## Citation
Mulyukov Z; Weber S; Pigeolet E; Clemens A; Lehr T; Racine A et al. (2018). CPT: pharmacometrics & systems pharmacology 7
  ·  DOI: [10.1002/psp4.12322](https://doi.org/10.1002/psp4.12322)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Baseline BCVA (SD), letters — ANCHOR | `Q324` · not captured | 47.1 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col1 |
| Baseline BCVA (SD), letters — ANCHOR | `Q324` · not captured | 47.1 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col2 |
| Baseline BCVA (SD), letters — EXCITE | `Q324` · not captured | 55.8 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col3 |
| Baseline BCVA (SD), letters — EXCITE | `Q324` · not captured | 57.7 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col4 |
| Baseline BCVA (SD), letters — EXCITE | `Q324` · not captured | 56.5 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col5 |
| Baseline BCVA (SD), letters — MARINA | `Q324` · not captured | 53.1 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col6 |
| Baseline BCVA (SD), letters — MARINA | `Q324` · not captured | 53.7 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col7 |
| Baseline BCVA (SD), letters — MARINA | `Q324` · not captured | 53.9 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col8 |
| Baseline BCVA (SD), letters — PIER | `Q324` · not captured | 55.8 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col9 |
| Baseline BCVA (SD), letters — PIER | `Q324` · not captured | 53.7 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col10 |
| Baseline BCVA (SD), letters — PIER | `Q324` · not captured | 55.1 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col11 |
| Baseline BCVA (SD), letters — HARBOR | `Q324` · not captured | 54.2 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col12 |
| Baseline BCVA (SD), letters — HARBOR | `Q324` · not captured | 53.5 | not captured | not captured | llm_confirmed (not captured) | psp412322-tbl-0001:row11:col13 |

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
<sub>← back to [pyridoxine (vit B6)](drugs/drug_pyridoxine_vit_b6/)</sub>
