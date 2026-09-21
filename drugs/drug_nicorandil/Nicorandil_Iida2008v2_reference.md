<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;nicorandil&quot;,&quot;href&quot;:&quot;drugs/drug_nicorandil/&quot;},{&quot;label&quot;:&quot;Iida_2008_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nicorandil_Iida2008_obj&quot;,&quot;label&quot;:&quot;Iida_2008_obj&quot;,&quot;href&quot;:&quot;drugs/drug_nicorandil/Nicorandil_Iida2008_obj.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nicorandil_Iida2008_obj&quot;,&quot;label&quot;:&quot;Iida_2008_obj&quot;,&quot;href&quot;:&quot;drugs/drug_nicorandil/Nicorandil_Iida2008_obj.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nicorandil_Iida2008_sig&quot;,&quot;label&quot;:&quot;Iida_2008_sig&quot;,&quot;href&quot;:&quot;drugs/drug_nicorandil/Nicorandil_Iida2008_sig.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nicorandil_Iida2008_sig&quot;,&quot;label&quot;:&quot;Iida_2008_sig&quot;,&quot;href&quot;:&quot;drugs/drug_nicorandil/Nicorandil_Iida2008_sig.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nicorandil_Iida2008v2_reference&quot;,&quot;label&quot;:&quot;Iida_2008_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nicorandil/Nicorandil_Iida2008v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nicorandil — `Nicorandil_Iida2008v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
Iida S; Kinoshita H; Holford NH et al. (2008). British journal of clinical pharmacology 66
  ·  DOI: [10.1111/j.1365-2125.2008.03257.x](https://doi.org/10.1111/j.1365-2125.2008.03257.x)

## Model component
<dbs-pgx drug="nicorandil" model-id="Nicorandil_Iida2008v2_reference" status="needs_review" stale="false" population="healthy subjects and acute heart failure patients" measured-compound="nicorandil" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| R78 | `Q78` · V3/F | 0.257 | not captured | not captured | not captured | not captured | llm (0.6) | tab_2:row11:col7, tab_2:row11:col8, tab_2:row11:col10, tab_2:row11:col11 | — | not captured |
| R89 | `Q89` · t1/2γ | 0.957 | not captured | not captured | not captured | not captured | llm (0.6) | tab_2:row12:col7, tab_2:row12:col8, tab_2:row12:col10, tab_2:row12:col11 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'obj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'sig' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'PPV_S0' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col5', 'tab_2:row2:col6', 'tab_2:row2:col8', 'tab_2:row2:col9'])
- dropped unlinked row (NIL): 'PPV_Sss' — extend the ontology if this is a real PK parameter (source ['tab_2:row3:col5', 'tab_2:row3:col6', 'tab_2:row3:col8', 'tab_2:row3:col9'])
- dropped PD-category row 'PPV_EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row4:col5', 'tab_2:row4:col6', 'tab_2:row4:col8', 'tab_2:row4:col9'])
- dropped unlinked row (NIL): 'R12' — extend the ontology if this is a real PK parameter (source ['tab_2:row9:col7', 'tab_2:row9:col8', 'tab_2:row9:col10', 'tab_2:row9:col11'])
- dropped unlinked row (NIL): 'R23' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col7', 'tab_2:row10:col8', 'tab_2:row10:col10', 'tab_2:row10:col11'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row0:col5', 'Iida_2008_2_table_2:row0:col6'])
- dropped unlinked row (NIL): '11' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row1:col5', 'Iida_2008_2_table_2:row1:col6'])
- dropped unlinked row (NIL): '12' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row2:col5', 'Iida_2008_2_table_2:row2:col6'])
- dropped unlinked row (NIL): '13' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row3:col5', 'Iida_2008_2_table_2:row3:col6'])
- dropped unlinked row (NIL): '14' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row4:col5', 'Iida_2008_2_table_2:row4:col6'])
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row5:col5', 'Iida_2008_2_table_2:row5:col6'])
- dropped unlinked row (NIL): '16' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row6:col5', 'Iida_2008_2_table_2:row6:col6'])
- dropped unlinked row (NIL): '17' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row7:col5'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nicorandil
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_2:row2:col1 = 'Population parameter variability in S0'
- unparsed cell tab_2:row4:col1 = 'Population parameter variability in EC50'
- unparsed cell tab_2:row6:col1 = 'Between subject variability in V1'
- unparsed cell tab_2:row9:col2 = 'Correlation of S0 and Sss'
- unparsed cell tab_2:row10:col2 = 'Correlation of Sss and EC50'
- unparsed cell tab_2:row11:col2 = 'Correlation of CL and V1'
- unparsed cell tab_2:row12:col2 = 'Correlation of V1 and Q'
- unparsed cell Iida_2008_2_table_2:row0:col3 = 'Covariance of S0, SS, EC50'
- unparsed cell Iida_2008_2_table_2:row1:col3 = 'Covariance of S0, SS, EC50'
- unparsed cell Iida_2008_2_table_2:row2:col3 = 'Covariance of S0, SS, EC50'
- unparsed cell Iida_2008_2_table_2:row4:col3 = 'Covariance of S0, alpha, Emax, EC50'
- unparsed cell Iida_2008_2_table_2:row5:col3 = 'Covariance of S0, alpha, Emax, EC50'
- unparsed cell Iida_2008_2_table_2:row7:col3 = 'Covariance of S0, Emax, EC50'
- companion parameter table 2 transcribed (15 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nicorandil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Iida_2008_2` / `Iida_2008_2::reference`)


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
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
