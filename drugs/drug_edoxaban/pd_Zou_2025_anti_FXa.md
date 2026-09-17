<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Edoxaban_Ueshima2025_reference&quot;,&quot;label&quot;:&quot;Ueshima_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/Edoxaban_Ueshima2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Edoxaban_Zou2025_reference&quot;,&quot;label&quot;:&quot;Zou_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/Edoxaban_Zou2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Edoxaban_Terrier2022_reference&quot;,&quot;label&quot;:&quot;Terrier_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/Edoxaban_Terrier2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# anti-factor Xa — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Zou_2025`
- **model family:** `emax`
- **driver:** `pk_record`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Zou P; Atluri A; Chang P; Goedecke M; Leil TA et al. (2025). CPT: pharmacometrics & systems pharmacology 14
  ·  DOI: [10.1002/psp4.13248](https://doi.org/10.1002/psp4.13248)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Apparent clearance, CL/F (L/h) a — Estimate | `Q27` · not captured | 42.87 | not captured | not captured | llm_confirmed (not captured) | psp413248-tbl-0001:row1:col1 |
| Absorption rate constant, Ka (1/h) — Estimate | `Q49` · not captured | 3.71 | not captured | not captured | llm_confirmed (not captured) | psp413248-tbl-0001:row2:col1 |
| Apparent central compartment volume, Vc/F (L) — Estimate | `Q290` · not captured | 261 | L | not captured | llm_corrected (not captured) | psp413248-tbl-0001:row3:col1 |
| Apparent inter‐compartmental clearance, Q/F (L/h) — Estimate | `Q69` · not captured | 8.59 | L/h | not captured | llm_corrected (not captured) | psp413248-tbl-0001:row4:col1 |
| Apparent peripheral compartment volume, Vp/F (L) — Estimate | `Q82` · not captured | 343.5 | L | not captured | llm_corrected (not captured) | psp413248-tbl-0001:row5:col1 |
| Transit rate constant, Ktr (1/h) — Estimate | `Q306` · not captured | 47.5 | not captured | not captured | llm_confirmed (not captured) | psp413248-tbl-0001:row6:col1 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
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
<sub>← back to [edoxaban](drugs/drug_edoxaban/)</sub>
