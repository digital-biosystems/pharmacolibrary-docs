<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dulaglutide_Admiraal2023_reference&quot;,&quot;label&quot;:&quot;Admiraal_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dulaglutide/Dulaglutide_Admiraal2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dulaglutide_Ng2018_reference&quot;,&quot;label&quot;:&quot;Ng_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dulaglutide/Dulaglutide_Ng2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dulaglutide_Yu2024_reference&quot;,&quot;label&quot;:&quot;Yu_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dulaglutide/Dulaglutide_Yu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dulaglutide_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dulaglutide/Dulaglutide_Min2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dulaglutide_Zheng2023_reference&quot;,&quot;label&quot;:&quot;Zheng_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dulaglutide/Dulaglutide_Zheng2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dulaglutide_Choi2025_reference&quot;,&quot;label&quot;:&quot;Choi_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dulaglutide/Dulaglutide_Choi2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# glucose — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Bosch_2022`
- **model family:** `unknown`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** stimulation/unknown

## Citation
Bosch R; Petrone M; Arends R; Vicini P; Sijbrands EJG; Hoefman S; Snelder N et al. (2022). CPT: pharmacometrics & systems pharmacology 11
  ·  DOI: [10.1002/psp4.12752](https://doi.org/10.1002/psp4.12752)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| GLP−1 receptor EC50 (pM) — GLP−1(7–36)NH1 | `Q321` · not captured | 1.92 | pM | not captured | llm_confirmed (not captured) | psp412752-tbl-0002:row0:col2 |
| GLP−1 receptor EC50 (pM) — Liraglutide | `Q321` · not captured | 6 | pM | not captured | llm_confirmed (not captured) | psp412752-tbl-0002:row0:col4 |
| GLP−1 receptor EC50 (pM) — Dulaglutide | `Q321` · not captured | 80 | pM | not captured | llm_confirmed (not captured) | psp412752-tbl-0002:row0:col5 |
| Glucagon receptor EC50 (pM) — Glucagon | `Q321` · not captured | 1.54 | pM | not captured | llm_confirmed (not captured) | psp412752-tbl-0002:row1:col3 |

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
<sub>← back to [dulaglutide](drugs/drug_dulaglutide/)</sub>
