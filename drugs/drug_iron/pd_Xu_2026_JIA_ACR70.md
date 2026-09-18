<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iron_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_iron/Iron_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iron_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_iron/Iron_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iron_Xu2026_reference&quot;,&quot;label&quot;:&quot;Xu_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_iron/Iron_Xu2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iron_Fan2025_reference&quot;,&quot;label&quot;:&quot;Fan_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_iron/Iron_Fan2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iron_Phatruengdet2022_reference&quot;,&quot;label&quot;:&quot;Phatruengdet_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_iron/Iron_Phatruengdet2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# JIA-ACR70 response — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Xu_2026`
- **model family:** `log_linear`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** stimulation/unknown

## Citation
Xu C; Zhang M; Liu Y; Baret-Cormel L; De Benedetti F; Abdallah H; Kanamaluru V; Meng Z et al. (2026). Journal of pharmacokinetics and pharmacodynamics 53
  ·  DOI: [10.1007/s10928-026-10024-z](https://doi.org/10.1007/s10928-026-10024-z)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Vmd — Shrinkage (%) | `Q318` · not captured | 20.7 | not captured | not captured | llm (not captured) | Tab1:row13:col4 |
| CL0/Fd — Estimate | `Q27` · not captured | 73.2 | not captured | not captured | llm (not captured) | Tab1:row14:col1 |
| CL0/Fd — RSE (%) | `Q27` · not captured | 14 | not captured | not captured | llm (not captured) | Tab1:row14:col2 |
| CL0/Fd — Shrinkage (%) | `Q318` · not captured | 25.3 | not captured | not captured | llm (not captured) | Tab1:row14:col4 |
| Vc/Fd — Estimate | `Q76` · not captured | 29.9 | not captured | not captured | llm (not captured) | Tab1:row15:col1 |
| Vc/Fd — Shrinkage (%) | `Q318` · not captured | 49.4 | not captured | not captured | llm (not captured) | Tab1:row15:col4 |
| Kad — Shrinkage (%) | `Q318` · not captured | 16.7 | not captured | not captured | llm (not captured) | Tab1:row16:col4 |
| σ2 — Estimate | `Q315` · not captured | 0.460 | not captured | not captured | exact (not captured) | Tab1:row19:col1 |
| σ2 — RSE (%) | `Q315` · not captured | 0.92 | not captured | not captured | exact (not captured) | Tab1:row19:col2 |

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
<sub>← back to [Iron](drugs/drug_iron/)</sub>
