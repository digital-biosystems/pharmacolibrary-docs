<div class="pk-tab-mark" data-tab="Information"></div>

# colony-forming units — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Ngara_2025`
- **model family:** `emax`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Ngara B; Flori L; van Wijk RC; Ernest JP; Tyagi S; Soni H; Hölscher C; Walter K; Dreisbach J; Hoelscher M; Nuermberger EL; Savic RM et al. (2025). The Journal of infectious diseases 231
  ·  DOI: [10.1093/infdis/jiaf088](https://doi.org/10.1093/infdis/jiaf088)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| CL/F, Lh−1 — Estimates (RSE %) | `Q27` · not captured | 0.119 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row2:col1 |
| Km, mgL−1 — Estimates (RSE %) | `Q1` · not captured | 0.948 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row3:col1 |
| Vc/F, L — Estimates (RSE %) | `Q290` · not captured | 0.041 | L | not captured | exact (not captured) | jiaf088-T1:row4:col1 |
| Vmax, mgL−1h−1 — Estimates (RSE %) | `Q66` · not captured | 1.9 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row5:col1 |
| Vp/F, L — Estimates (RSE %) | `Q82` · not captured | 0.203 | L | not captured | exact (not captured) | jiaf088-T1:row6:col1 |
| Q/F, Lh−1 — Estimates (RSE %) | `Q69` · not captured | 0.042 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row7:col1 |
| Additive error, mgL−1 — Estimates (RSE %) | `Q317` · not captured | 0.105 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row9:col1 |
| Emax, d−1 — Estimates (RSE %) | `Q320` · not captured | 0.181 | d−1 | not captured | exact (not captured) | jiaf088-T1:row12:col1 |
| EC50, mgL−1 — Estimates (RSE %) | `Q321` · not captured | 0.005135 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row13:col1 |
| Additive error, log CFU lung−1 — Estimates (RSE %) | `Q317` · not captured | 1.416 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row14:col1 |
| Kd, d−1 — Estimates (RSE %) | `Q331` · not captured | 0.41 | d−1 | not captured | exact (not captured) | jiaf088-T1:row18:col1 |
| CL/F, Lh−1 — Estimates (RSE %) | `Q27` · not captured | 404 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row26:col1 |
| Ka, h−1 — Estimates (RSE %) | `Q49` · not captured | 1.69 | h−1 | not captured | exact (not captured) | jiaf088-T1:row27:col1 |
| Vc/F, L — Estimates (RSE %) | `Q290` · not captured | 764 | L | not captured | exact (not captured) | jiaf088-T1:row28:col1 |
| MTT — Estimates (RSE %) | `Q81` · not captured | 0.34 | RSE % | not captured | exact (not captured) | jiaf088-T1:row30:col1 |
| Q/F — Estimates (RSE %) | `Q69` · not captured | 68 | RSE % | not captured | exact (not captured) | jiaf088-T1:row32:col1 |
| Vp/F — Estimates (RSE %) | `Q82` · not captured | 382 | RSE % | not captured | exact (not captured) | jiaf088-T1:row33:col1 |

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
