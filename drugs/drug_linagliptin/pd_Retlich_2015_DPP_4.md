<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Linagliptin_Retlich2015_description&quot;,&quot;label&quot;:&quot;Retlich_2015_description&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_Retlich2015_description.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Linagliptin_Retlich2015_description&quot;,&quot;label&quot;:&quot;Retlich_2015_description&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_Retlich2015_description.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Linagliptin_Retlich2015_value&quot;,&quot;label&quot;:&quot;Retlich_2015_value&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_Retlich2015_value.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Linagliptin_Retlich2015_value&quot;,&quot;label&quot;:&quot;Retlich_2015_value&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_Retlich2015_value.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Linagliptin_Tadayasu2013_reference&quot;,&quot;label&quot;:&quot;Tadayasu_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_Tadayasu2013_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# DPP-4 activity — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Retlich_2015`
- **model family:** `sigmoid_emax`
- **driver:** `cited_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Retlich S; Duval V; Graefe-Mody U; Friedrich C; Patel S; Jaehde U; et al. et al. (2015). Clinical pharmacokinetics 54
  ·  DOI: [10.1007/s40262-014-0232-4](https://doi.org/10.1007/s40262-014-0232-4)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| E max (%) — Value | `Q320` · not captured | 92.4 | not captured | not captured | space_fold (not captured) | Tab5:row4:col1 |
| E max (%) — RSE (%) | `Q320` · not captured | 0.12 | not captured | not captured | space_fold (not captured) | Tab5:row4:col2 |
| EC50 (nmol/L) — Value | `Q321` · not captured | 3.06 | nmol/L | not captured | exact (not captured) | Tab5:row5:col1 |
| EC50 (nmol/L) — RSE (%) | `Q321` · not captured | 1.56 | nmol/L | not captured | exact (not captured) | Tab5:row5:col2 |
| HILL — Value | `Q325` · not captured | 3.22 | not captured | not captured | exact (not captured) | Tab5:row6:col1 |
| HILL — RSE (%) | `Q325` · not captured | 1.82 | not captured | not captured | exact (not captured) | Tab5:row6:col2 |
| BSL_EC50 c — Value | `Q321` · not captured | 0.00792 | unknown | not captured | llm (not captured) | Tab5:row7:col1 |
| BSL_EC50 c — RSE (%) | `Q321` · not captured | 7.98 | unknown | not captured | llm (not captured) | Tab5:row7:col2 |
| TRIG_EC50c — Value | `Q321` · not captured | -0.0153 | unknown | not captured | llm (not captured) | Tab5:row14:col1 |
| TRIG_EC50c — RSE (%) | `Q321` · not captured | 13.1 | unknown | not captured | llm (not captured) | Tab5:row14:col2 |
| ωEC50 (CV %) — Value | `Q100` · not captured | 15.4 | not captured | not captured | nil (not captured) | Tab5:row17:col1 |
| ωEC50 (CV %) — RSE (%) | `Q100` · not captured | 15.8 | not captured | not captured | nil (not captured) | Tab5:row17:col2 |
| σ prop (%) — Value | `Q316` · not captured | 14.8 | not captured | not captured | llm (not captured) | Tab5:row19:col1 |
| σ prop (%) — RSE (%) | `Q316` · not captured | 6.64 | not captured | not captured | llm (not captured) | Tab5:row19:col2 |

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
<sub>← back to [linagliptin](drugs/drug_linagliptin/)</sub>
