<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Epoprostenol_Keizer2010_reference&quot;,&quot;label&quot;:&quot;Keizer_2010_reference&quot;,&quot;href&quot;:&quot;drugs/drug_epoprostenol/Epoprostenol_Keizer2010_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epoprostenol_Vizza2017_reference&quot;,&quot;label&quot;:&quot;Vizza_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_epoprostenol/Epoprostenol_Vizza2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epoprostenol_Vucicevic2025_reference&quot;,&quot;label&quot;:&quot;Vucicevic_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_epoprostenol/Epoprostenol_Vucicevic2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epoprostenol_Nicolas2012_reference&quot;,&quot;label&quot;:&quot;Nicolas_2012_reference&quot;,&quot;href&quot;:&quot;drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Keizer_2010`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** stimulation/unknown

## Citation
Keizer RJ; Gupta A; Mac Gillavry MR; Jansen M; Wanders J; Beijnen JH; Schellens JH; Karlsson MO; Huitema AD et al. (2010). Journal of pharmacokinetics and pharmacodynamics 37
  ·  DOI: [10.1007/s10928-010-9164-2](https://doi.org/10.1007/s10928-010-9164-2)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| BSV: BPS — Shrinkage (%) | `Q318` · not captured | 4.9 | not captured | not captured | llm_corrected (not captured) | Tab2:row19:col4 |
| BSV: BPD — Shrinkage (%) | `Q318` · not captured | 6.2 | not captured | not captured | llm_corrected (not captured) | Tab2:row20:col4 |
| BSV: E E7080,S — Shrinkage (%) | `Q318` · not captured | 45 | not captured | not captured | llm_corrected (not captured) | Tab2:row22:col4 |
| BSV: E E7080,D — Shrinkage (%) | `Q318` · not captured | 51 | not captured | not captured | llm_corrected (not captured) | Tab2:row23:col4 |
| BSVRE — Shrinkage (%) | `Q318` · not captured | 32 | not captured | not captured | llm (not captured) | Tab2:row25:col4 |
| RE — Shrinkage (%) | `Q318` · not captured | 28 | not captured | not captured | llm (not captured) | Tab2:row27:col4 |

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
<sub>← back to [epoprostenol](drugs/drug_epoprostenol/)</sub>
