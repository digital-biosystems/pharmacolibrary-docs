# tumor volume — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Hoeben_2026`
- **model family:** `linear`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Hoeben E; Madelain V; Acharya C; Barbier Saint Hilaire P; Tyagi E; Okour M; Fouliard S et al. (2026). European journal of drug metabolism and pharmacokinetics 51
  ·  DOI: [10.1007/s13318-026-01010-4](https://doi.org/10.1007/s13318-026-01010-4)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Mice PK — IIV (SD) | `Q312` · not captured | 0.0765 | not captured | not captured | llm (not captured) | Tab1:row1:col5 |
| Model — IIV (SD) | `Q312` · not captured | 0.164 | not captured | not captured | llm (not captured) | Tab1:row2:col5 |
| Human PK — IIV (SD) | `Q312` · not captured | 0.150 | not captured | not captured | llm (not captured) | Tab1:row6:col5 |
| Model — IIV (SD) | `Q312` · not captured | 0.441 | not captured | not captured | llm (not captured) | Tab1:row7:col5 |
| Mice PKPD — IIV (SD) | `Q312` · not captured | 0.224 | not captured | not captured | llm (not captured) | Tab1:row20:col5 |
| Mice PKPD — Shrinkage (%) | `Q318` · not captured | 37.4 | not captured | not captured | llm (not captured) | Tab1:row20:col7 |
| EC50 | `Q321` · not captured | 107 | IU/L | not captured | review_gapfill (not captured) | Hoeben_2026:review |
| slp | `Q335` · not captured | 3.22 | L/IU/h × 10−5 | not captured | review_gapfill (not captured) | Hoeben_2026:review |

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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [colecalciferol](drugs/drug_colecalciferol/)</sub>
