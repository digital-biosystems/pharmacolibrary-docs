<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dapagliflozin_Kobuchi2025_reference&quot;,&quot;label&quot;:&quot;Kobuchi_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dapagliflozin/Dapagliflozin_Kobuchi2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# HbA1c — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Kobuchi_2025`
- **model family:** `indirect_response_i`
- **driver:** `pk_record`
- **tier:** population
- **effect:** inhibition/additive

## Citation
Kobuchi S; Sakai S; Terada R; Kato KI; Hayakawa T; Sakaeda T et al. (2025). International journal of medical sciences 22
  ·  DOI: [10.7150/ijms.111519](https://doi.org/10.7150/ijms.111519)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| t1/2HbA1c (day) — Final model | `Q57` · not captured | 16.1 | day | not captured | llm (not captured) | T3:row3:col1 |
| t1/2HbA1c (day) — Final model | `Q57` · not captured | 4.1 | day | not captured | llm (not captured) | T3:row3:col2 |
| t1/2HbA1c (day) — Bootstrap (n = 1000) | `Q57` · not captured | 16.0 | day | not captured | llm (not captured) | T3:row3:col4 |
| t1/2HbA1c (day) — Bootstrap (n = 1000) | `Q57` · not captured | 15.3 | day | not captured | llm (not captured) | T3:row3:col5 |
| Emax (HbA1c %/day) — Final model | `Q320` · not captured | 0.034 | HbA1c %/day | not captured | exact (not captured) | T3:row4:col1 |
| Emax (HbA1c %/day) — Final model | `Q320` · not captured | 3.1 | HbA1c %/day | not captured | exact (not captured) | T3:row4:col2 |
| Emax (HbA1c %/day) — Bootstrap (n = 1000) | `Q320` · not captured | 0.034 | HbA1c %/day | not captured | exact (not captured) | T3:row4:col4 |
| Emax (HbA1c %/day) — Bootstrap (n = 1000) | `Q320` · not captured | 0.031 | HbA1c %/day | not captured | exact (not captured) | T3:row4:col5 |
| EC50 (ng/mL) — Final model | `Q321` · not captured | 23.7 | ng/mL | not captured | exact (not captured) | T3:row5:col1 |
| EC50 (ng/mL) — Final model | `Q321` · not captured | 5.8 | ng/mL | not captured | exact (not captured) | T3:row5:col2 |
| EC50 (ng/mL) — Bootstrap (n = 1000) | `Q321` · not captured | 21.9 | ng/mL | not captured | exact (not captured) | T3:row5:col4 |
| EC50 (ng/mL) — Bootstrap (n = 1000) | `Q321` · not captured | 13.5 | ng/mL | not captured | exact (not captured) | T3:row5:col5 |
| ωt1/2 HbA1c (%) — Final model | `Q57` · not captured | 103.9 | not captured | not captured | llm_confirmed (not captured) | T3:row7:col1 |
| ωt1/2 HbA1c (%) — Final model | `Q57` · not captured | 11.2 | not captured | not captured | llm_confirmed (not captured) | T3:row7:col2 |
| ωt1/2 HbA1c (%) — Bootstrap (n = 1000) | `Q57` · not captured | 104.1 | n = 1000 | not captured | llm_confirmed (not captured) | T3:row7:col4 |
| ωt1/2 HbA1c (%) — Bootstrap (n = 1000) | `Q57` · not captured | 101.7 | n = 1000 | not captured | llm_confirmed (not captured) | T3:row7:col5 |
| σ (HbA1c %) — Final model | `Q315` · not captured | 0.24 | HbA1c % | not captured | llm (not captured) | T3:row9:col1 |
| σ (HbA1c %) — Final model | `Q315` · not captured | 5.2 | HbA1c % | not captured | llm (not captured) | T3:row9:col2 |
| σ (HbA1c %) — Bootstrap (n = 1000) | `Q315` · not captured | 0.24 | HbA1c % | not captured | llm (not captured) | T3:row9:col4 |
| σ (HbA1c %) — Bootstrap (n = 1000) | `Q315` · not captured | 0.21 | HbA1c % | not captured | llm (not captured) | T3:row9:col5 |

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
<sub>← back to [dapagliflozin](drugs/drug_dapagliflozin/)</sub>
