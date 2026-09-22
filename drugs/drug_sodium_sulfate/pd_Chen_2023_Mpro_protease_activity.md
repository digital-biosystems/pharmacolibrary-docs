<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Chen_2023`
- **model family:** `unknown`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Chen J; Zhou X; Fu L; Xu H et al. (2023). Pharmaceuticals (Basel, Switzerland) 16
  ·  DOI: [10.3390/ph16050767](https://doi.org/10.3390/ph16050767)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Intestinal absorption (human) (% Absorbed) — Hematoxylin | `Q41` · not captured | 84.974 | % Absorbed | not captured | llm_corrected (not captured) | pharmaceuticals-16-00767-t001:row8:col1 |
| Intestinal absorption (human) (% Absorbed) — Melanin | `Q40` · not captured | 99.755 | % Absorbed | not captured | llm_confirmed (not captured) | pharmaceuticals-16-00767-t001:row8:col2 |
| Intestinal absorption (human) (% Absorbed) — Wedelolactone | `Q40` · not captured | 95.067 | % Absorbed | not captured | llm_confirmed (not captured) | pharmaceuticals-16-00767-t001:row8:col3 |
| Intestinal absorption (human) (% Absorbed) — Ginkgolic Acid C15:1 | `Q40` · not captured | 88.537 | % Absorbed | not captured | llm_confirmed (not captured) | pharmaceuticals-16-00767-t001:row8:col4 |
| Intestinal absorption (human) (% Absorbed) — β,β–Dimethylacrylalkannin | `Q40` · not captured | 63.844 | % Absorbed | not captured | llm_confirmed (not captured) | pharmaceuticals-16-00767-t001:row8:col5 |
| Intestinal absorption (human) (% Absorbed) — Cholesteryl Sodium Sulfate | `Q40` · not captured | 100 | % Absorbed | not captured | llm_confirmed (not captured) | pharmaceuticals-16-00767-t001:row8:col6 |
| Intestinal absorption (human) (% Absorbed) — (−)–Gallocatechin Gallate | `Q40` · not captured | 46.991 | % Absorbed | not captured | llm_confirmed (not captured) | pharmaceuticals-16-00767-t001:row8:col7 |
| Fraction bound (%) (human) — Wedelolactone | `Q46` · not captured | 97.5 | human | not captured | llm (not captured) | pharmaceuticals-16-00767-t001:row9:col3 |
| Fraction bound (%) (human) — Ginkgolic Acid C15:1 | `Q46` · not captured | 92.5 | human | not captured | llm (not captured) | pharmaceuticals-16-00767-t001:row9:col4 |
| Fraction bound (%) (human) — β,β–Dimethylacrylalkannin | `Q46` · not captured | 79.6 | human | not captured | llm (not captured) | pharmaceuticals-16-00767-t001:row9:col5 |
| Fraction bound (%) (human) — Cholesteryl Sodium Sulfate | `Q46` · not captured | 93.8 | human | not captured | llm (not captured) | pharmaceuticals-16-00767-t001:row9:col6 |
| Fraction bound (%) (human) — (−)–Gallocatechin Gallate | `Q42` · not captured | 76.1 | human | not captured | llm (not captured) | pharmaceuticals-16-00767-t001:row9:col7 |
| Total clearance (log mL/min/kg) — Hematoxylin | `Q22` · not captured | 0.046 | log mL/min/kg | not captured | exact (not captured) | pharmaceuticals-16-00767-t001:row18:col1 |
| Total clearance (log mL/min/kg) — Melanin | `Q22` · not captured | 0.521 | log mL/min/kg | not captured | exact (not captured) | pharmaceuticals-16-00767-t001:row18:col2 |
| Total clearance (log mL/min/kg) — Wedelolactone | `Q22` · not captured | 0.677 | log mL/min/kg | not captured | exact (not captured) | pharmaceuticals-16-00767-t001:row18:col3 |
| Total clearance (log mL/min/kg) — Ginkgolic Acid C15:1 | `Q22` · not captured | 1.59 | log mL/min/kg | not captured | exact (not captured) | pharmaceuticals-16-00767-t001:row18:col4 |
| Total clearance (log mL/min/kg) — β,β–Dimethylacrylalkannin | `Q22` · not captured | 0.402 | log mL/min/kg | not captured | exact (not captured) | pharmaceuticals-16-00767-t001:row18:col5 |
| Total clearance (log mL/min/kg) — Cholesteryl Sodium Sulfate | `Q22` · not captured | 0.685 | log mL/min/kg | not captured | exact (not captured) | pharmaceuticals-16-00767-t001:row18:col6 |
| Total clearance (log mL/min/kg) — (−)–Gallocatechin Gallate | `Q22` · not captured | 0.431 | log mL/min/kg | not captured | exact (not captured) | pharmaceuticals-16-00767-t001:row18:col7 |

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
<sub>← back to [sodium sulfate](drugs/drug_sodium_sulfate/)</sub>
