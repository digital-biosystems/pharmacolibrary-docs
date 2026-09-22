<div class="pk-tab-mark" data-tab="Information"></div>

# grade 3 or higher adverse events — PD  <span class="pk-badge pk-badge--orange">needs review</span>

- **paper:** `Chang_2024`
- **model family:** `tte`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Chang VK; Imperial MZ; Phillips PPJ; Velásquez GE; Nahid P; Vernon A; Kurbatova EV; Swindells S; Chaisson RE; Dorman SE; Johnson JL; Weiner M; Jindani A; Harrison T; Sizemore EE; Whitworth W; Carr W; Bryant KE; Burton D; Dooley KE; Engle M; Nsubuga P; Diacon AH; Nhung NV; Dawson R; Savic RM; AIDS Clinical Trial Group; Tuberculosis Trials Consortium et al. (2024). Nature communications 15
  ·  DOI: [10.1038/s41467-024-53273-7](https://doi.org/10.1038/s41467-024-53273-7)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Smoking History — Missing | `Q100` · not captured | 0 | not captured | not captured | llm (not captured) | Tab1:row36:col4 |
| Rifapentine AUC0–24h [µg∙h/mL] — Missing | `Q19` · not captured | 67 | not captured | not captured | llm (not captured) | Tab1:row44:col4 |
| Moxifloxacin AUC0–24h [µg∙h/mL] — Missing | `Q19` · not captured | 49 | not captured | not captured | llm (not captured) | Tab1:row45:col4 |
| Isoniazid AUC0–24h [µg∙h/mL] — Missing | `Q19` · not captured | 153 | not captured | not captured | llm (not captured) | Tab1:row46:col4 |
| Pyrazinamide AUC0–24h [µg∙h/mL] — Missing | `Q19` · not captured | 125 | not captured | not captured | llm (not captured) | Tab1:row47:col4 |
| Ethambutol AUC0–24h [µg∙h/mL] — Missing | `Q19` · not captured | 138 | not captured | not captured | llm (not captured) | Tab1:row48:col4 |
| Rifampin AUC0–24h [µg∙h/mL] — Missing | `Q19` · not captured | 57 | not captured | not captured | llm (not captured) | Tab1:row49:col4 |
| Rifapentine Cmax [µg /mL] — Missing | `Q32` · not captured | 67 | µg /mL | not captured | llm_confirmed (not captured) | Tab1:row50:col4 |
| Moxifloxacin Cmax [µg /mL] — Missing | `Q32` · not captured | 49 | µg /mL | not captured | llm_confirmed (not captured) | Tab1:row51:col4 |
| Isoniazid Cmax [µg /mL] — Missing | `Q32` · not captured | 153 | µg /mL | not captured | llm_confirmed (not captured) | Tab1:row52:col4 |
| Pyrazinamide Cmax [µg /mL] — Missing | `Q32` · not captured | 125 | µg /mL | not captured | llm_confirmed (not captured) | Tab1:row53:col4 |
| Ethambutol Cmax [µg /mL] — Missing | `Q32` · not captured | 138 | µg /mL | not captured | llm_confirmed (not captured) | Tab1:row54:col4 |
| Rifampin Cmax [µg /mL] — Missing | `Q32` · not captured | 57 | µg /mL | not captured | llm_confirmed (not captured) | Tab1:row55:col4 |

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
<sub>← back to [rifamycin](drugs/drug_rifamycin/)</sub>
