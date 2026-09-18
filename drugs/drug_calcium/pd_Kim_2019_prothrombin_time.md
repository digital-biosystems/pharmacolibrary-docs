<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Calcium_Abrams1994_reference&quot;,&quot;label&quot;:&quot;Abrams_1994_reference&quot;,&quot;href&quot;:&quot;drugs/drug_calcium/Calcium_Abrams1994_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Calcium_Bertin2026_reference&quot;,&quot;label&quot;:&quot;Bertin_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_calcium/Calcium_Bertin2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Calcium_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_calcium/Calcium_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Calcium_Piwowarczyk2023_reference&quot;,&quot;label&quot;:&quot;Piwowarczyk_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_calcium/Calcium_Piwowarczyk2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Calcium_Shi2026_reference&quot;,&quot;label&quot;:&quot;Shi_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_calcium/Calcium_Shi2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Calcium_SchappacherTilp2019_reference&quot;,&quot;label&quot;:&quot;Schappacher-Tilp_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_calcium/Calcium_SchappacherTilp2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Kim_2019`
- **model family:** `linear`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** stimulation/proportional

## Citation
Kim M; Son H; Noh K; Kim E; Shin BS; Kang W et al. (2019). Pharmaceutics 11
  ·  DOI: [10.3390/pharmaceutics11030133](https://doi.org/10.3390/pharmaceutics11030133)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| ka (h−1) — Rivaroxaban | `Q49` · not captured | 0.63 | h−1 | not captured | exact (not captured) | pharmaceutics-11-00133-t003:row1:col1 |
| V/F (mL/kg) — Rivaroxaban | `Q76` · not captured | 960 | mL/kg | not captured | exact (not captured) | pharmaceutics-11-00133-t003:row2:col1 |
| ke (h−1) — Rivaroxaban | `Q47` · not captured | 0.85 | h−1 | not captured | exact (not captured) | pharmaceutics-11-00133-t003:row3:col1 |
| ke (h−1) — Rivaroxaban + Verapamil | `Q47` · not captured | 0.80 | h−1 | not captured | exact (not captured) | pharmaceutics-11-00133-t003:row3:col2 |
| f (fraction) — Rivaroxaban | `Q40` · not captured | 0.61 | fraction | not captured | exact (not captured) | pharmaceutics-11-00133-t003:row4:col1 |
| f (fraction) — Rivaroxaban + Verapamil | `Q40` · not captured | 0.61 | fraction | not captured | exact (not captured) | pharmaceutics-11-00133-t003:row4:col2 |

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
<sub>← back to [Calcium](drugs/drug_calcium/)</sub>
