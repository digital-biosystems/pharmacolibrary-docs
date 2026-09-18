<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nadroparin_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/Nadroparin_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nadroparin_Jaspers2022_reference&quot;,&quot;label&quot;:&quot;Jaspers_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/Nadroparin_Jaspers2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nadroparin_Piwowarczyk2023_shrinkage&quot;,&quot;label&quot;:&quot;Piwowarczyk_2023_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_shrinkage.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nadroparin_Piwowarczyk2023_shrinkage&quot;,&quot;label&quot;:&quot;Piwowarczyk_2023_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_shrinkage.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nadroparin_Piwowarczyk2023_estimate_unit&quot;,&quot;label&quot;:&quot;Piwowarczyk_2023_estimate_unit&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_estimate_unit.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nadroparin_Piwowarczyk2023_estimate_unit&quot;,&quot;label&quot;:&quot;Piwowarczyk_2023_estimate_unit&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_estimate_unit.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# anti-Xa level — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Jaspers_2022`
- **model family:** `unknown`
- **driver:** `cited_pk`
- **tier:** population
- **effect:** stimulation/unknown

## Citation
Jaspers TCC; Meijer CE; Vleming LJ; Franssen CFM; Diepstraten J; Lukens MV; et al. et al. (2022). Clinical pharmacokinetics 61
  ·  DOI: [10.1007/s40262-022-01162-x](https://doi.org/10.1007/s40262-022-01162-x)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Apparent clearance from central compartment (mL/min) — Parameter estimate | `Q27` · not captured | 7.4 | mL/min | not captured | llm_confirmed (not captured) | Tab2:row1:col2 |
| Apparent clearance from central compartment (mL/min) — RSE (%) | `Q27` · not captured | 15.9 | mL/min | not captured | llm_confirmed (not captured) | Tab2:row1:col3 |
| Apparent volume of distribution for central compartment (mL) — Parameter estimate | `Q290` · not captured | 3864.2 | mL | not captured | llm_corrected (not captured) | Tab2:row2:col2 |
| Apparent volume of distribution for central compartment (mL) — RSE (%) | `Q290` · not captured | 0.3 | mL | not captured | llm_corrected (not captured) | Tab2:row2:col3 |
| Apparent intercompartmental clearance (mL/min) — Parameter estimate | `Q30` · not captured | 7.1 | mL/min | not captured | llm_confirmed (not captured) | Tab2:row3:col2 |
| Apparent intercompartmental clearance (mL/min) — RSE (%) | `Q30` · not captured | 16.4 | mL/min | not captured | llm_confirmed (not captured) | Tab2:row3:col3 |
| Apparent volume of distribution for peripheral compartment (mL) — Parameter estimate | `Q82` · not captured | 34554.7 | mL | not captured | llm_corrected (not captured) | Tab2:row4:col2 |
| Apparent volume of distribution for peripheral compartment (mL) — RSE (%) | `Q82` · not captured | 18.1 | mL | not captured | llm_corrected (not captured) | Tab2:row4:col3 |

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
<sub>← back to [nadroparin](drugs/drug_nadroparin/)</sub>
