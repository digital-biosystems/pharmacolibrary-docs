<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pregabalin_Bae2016_reference&quot;,&quot;label&quot;:&quot;Bae_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Bae2016_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Chan2021_reference&quot;,&quot;label&quot;:&quot;Chan_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Chan2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Hong2016_reference&quot;,&quot;label&quot;:&quot;Hong_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Hong2016_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Bender2009_reference&quot;,&quot;label&quot;:&quot;Bender_2009_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Bender2009_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Feng2001_reference&quot;,&quot;label&quot;:&quot;Feng_2001_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Feng2001_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Park2023_reference&quot;,&quot;label&quot;:&quot;Park_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Park2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_van2018_reference&quot;,&quot;label&quot;:&quot;van_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_van2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Chan_2021`
- **model family:** `emax`
- **driver:** `pk_record`
- **tier:** population
- **effect:** inhibition/additive

## Citation
Chan PLS; Marshall SF; McFadyen L; Liu J et al. (2021). Clinical pharmacology and therapeutics 110
  ·  DOI: [10.1002/cpt.2132](https://doi.org/10.1002/cpt.2132)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| V/F — Estimate [RSE] | `Q76` · not captured | 38.6 | not captured | not captured | exact (not captured) | cpt2132-tbl-0002:row6:col2 |
| ka fastedf — Estimate [RSE] | `Q49` · not captured | 7.44 | not captured | not captured | llm_confirmed (not captured) | cpt2132-tbl-0002:row9:col2 |
| T lag — Estimate [RSE] | `Q83` · not captured | 0.31 | not captured | not captured | space_fold (not captured) | cpt2132-tbl-0002:row12:col2 |
| Interindividual variability — 95% confidence intervala | `Q312` · not captured | 16.3 | not captured | not captured | exact (not captured) | cpt2132-tbl-0002:row14:col3 |
| V/F — Estimate [RSE] | `Q76` · not captured | 10.3 | not captured | not captured | exact (not captured) | cpt2132-tbl-0002:row15:col2 |
| k a — Estimate [RSE] | `Q49` · not captured | 103 | not captured | not captured | space_fold (not captured) | cpt2132-tbl-0002:row16:col2 |
| ka: fed — Estimate [RSE] | `Q49` · not captured | 25.5 | not captured | not captured | llm_confirmed (not captured) | cpt2132-tbl-0002:row17:col2 |
| Proportional error — 95% confidence intervala | `Q316` · not captured | 15.2 | not captured | not captured | exact (not captured) | cpt2132-tbl-0002:row18:col3 |
| Additive error — 95% confidence intervala | `Q317` · not captured | 0.0074 | not captured | not captured | exact (not captured) | cpt2132-tbl-0002:row22:col3 |

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
<sub>← back to [pregabalin](drugs/drug_pregabalin/)</sub>
