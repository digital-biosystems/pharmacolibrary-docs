<div class="pk-tab-mark" data-tab="Information"></div>

# inhibition rate — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Zhu_2018`
- **model family:** `unknown`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Zhu X; Yu L; Zhang M; Xu Z; Yao Z; Wu Q; et al. et al. (2018). Chemistry Central journal 12
  ·  DOI: [10.1186/s13065-018-0478-2](https://doi.org/10.1186/s13065-018-0478-2)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| 5a — EC50 (μg/mL) | `Q321` · not captured | 48.3 | μg/mL | not captured | llm (not captured) | Tab2:row1:col1 |
| 5b — EC50 (μg/mL) | `Q321` · not captured | 14.1 | μg/mL | not captured | llm (not captured) | Tab2:row2:col1 |
| 5c — EC50 (μg/mL) | `Q321` · not captured | 3.2 | μg/mL | not captured | llm (not captured) | Tab2:row3:col1 |
| 5d — EC50 (μg/mL) | `Q321` · not captured | 9.5 | μg/mL | not captured | llm (not captured) | Tab2:row4:col1 |
| 5e — EC50 (μg/mL) | `Q321` · not captured | 12.8 | μg/mL | not captured | llm (not captured) | Tab2:row5:col1 |
| 5f — EC50 (μg/mL) | `Q321` · not captured | 96.3 | μg/mL | not captured | llm (not captured) | Tab2:row6:col1 |
| 5g — EC50 (μg/mL) | `Q321` · not captured | 68.6 | μg/mL | not captured | llm (not captured) | Tab2:row7:col1 |
| 5h — EC50 (μg/mL) | `Q321` · not captured | 9.5 | μg/mL | not captured | llm (not captured) | Tab2:row8:col1 |
| 5i — EC50 (μg/mL) | `Q321` · not captured | 4.9 | μg/mL | not captured | llm (not captured) | Tab2:row9:col1 |
| 5j — EC50 (μg/mL) | `Q321` · not captured | 56.9 | μg/mL | not captured | llm (not captured) | Tab2:row10:col1 |
| 5k — EC50 (μg/mL) | `Q321` · not captured | 138.4 | μg/mL | not captured | llm (not captured) | Tab2:row11:col1 |
| 5l — EC50 (μg/mL) | `Q321` · not captured | 70.5 | μg/mL | not captured | llm (not captured) | Tab2:row12:col1 |
| 5 m — EC50 (μg/mL) | `Q321` · not captured | 4.5 | μg/mL | not captured | llm (not captured) | Tab2:row13:col1 |
| 5n — EC50 (μg/mL) | `Q321` · not captured | 5.6 | μg/mL | not captured | llm (not captured) | Tab2:row14:col1 |
| 5o — EC50 (μg/mL) | `Q321` · not captured | 11.8 | μg/mL | not captured | llm (not captured) | Tab2:row15:col1 |
| 5p — EC50 (μg/mL) | `Q321` · not captured | 70 | μg/mL | not captured | llm (not captured) | Tab2:row16:col1 |
| PCA — EC50 (μg/mL) | `Q321` · not captured | 18.6 | μg/mL | not captured | llm (not captured) | Tab2:row17:col1 |

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
<sub>← back to [choline salicylate](drugs/drug_choline_salicylate/)</sub>
