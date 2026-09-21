<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;tanezumab&quot;,&quot;href&quot;:&quot;drugs/drug_tanezumab/&quot;},{&quot;label&quot;:&quot;Jonsson_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tanezumab_Jonsson2016_reference&quot;,&quot;label&quot;:&quot;Jonsson_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tanezumab/Tanezumab_Jonsson2016_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tanezumab_Shoji2022_reference&quot;,&quot;label&quot;:&quot;Shoji_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tanezumab/Tanezumab_Shoji2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tanezumab — `Tanezumab_Jonsson2016_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `Km`, `Vmax`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Jonsson EN; Xie R; Marshall SF; Arends RH et al. (2016). British journal of clinical pharmacology 81
  ·  DOI: [10.1111/bcp.12850](https://doi.org/10.1111/bcp.12850)

## Model component
<dbs-pgx drug="tanezumab" model-id="Tanezumab_Jonsson2016_reference" status="rejected" stale="false" population="adults with osteoarthritis" measured-compound="tanezumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL † (l day –1) | `Q22` · CL | 0.135 | l day –1 | 1.5625e-09 | [l] / [d] | not captured | exact (1.0) | bcp12850-tbl-0002:row1:col1 | — | not captured |
| V 1 † (l) | `Q63` · V1 | 2.71 | l | 0.00271 | [l] | not captured | space_fold (0.95) | bcp12850-tbl-0002:row2:col1 | — | not captured |
| Q † (l day –1) | `Q30` · Q | 0.371 | l day –1 | 4.293981481481482e-09 | [l] / [d] | not captured | exact (1.0) | bcp12850-tbl-0002:row3:col1 | — | not captured |
| V 2 † (l) | `Q64` · V2 | 1.98 | l | 0.00198 | [l] | not captured | space_fold (0.95) | bcp12850-tbl-0002:row4:col1 | — | not captured |
| KM (ng ml –1) | `Q1` · Km | 27.7 | ng ml –1 | not captured | [ng] / [ml] | not captured | exact (1.0) | bcp12850-tbl-0002:row6:col1 | — | not captured |
| VM (μg day –1) | `Q66` · Vmax | 8.03 | μg day –1 | not captured | [µg] / [d] | not captured | special_case (0.95) | bcp12850-tbl-0002:row7:col1 | — | not captured |
| theta_cl_wt | `Q900` · theta_cl_wt | 0.77 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp12850-tbl-0002:row8:col1 | — | not captured |
| theta_v1_wt | `Q900` · theta_v1_wt | 0.554 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp12850-tbl-0002:row9:col1 | — | not captured |
| theta_v2_wt | `Q900` · theta_v2_wt | 0.302 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp12850-tbl-0002:row10:col1 | — | not captured |
| theta_v1_gender | `Q900` · theta_v1_gender | 0.175 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp12850-tbl-0002:row13:col1 | — | not captured |
| theta_cl_gender | `Q900` · theta_cl_gender | 0.143 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp12850-tbl-0002:row14:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Parameter'
- dropped unlinked row (NIL): 'Mixture probability with low RSV' — extend the ontology if this is a real PK parameter (source ['bcp12850-tbl-0002:row5:col1'])
- unit_dimension_mismatch: 'VM (μg day –1)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q22 ('CL cr on CL', value '0.108') — already have one for this compound
- dropped unlinked row (NIL): 'Dose on CL' — extend the ontology if this is a real PK parameter (source ['bcp12850-tbl-0002:row12:col1'])
- routed 'Cov CL‐V 1 ‡' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Low RSV, %CV' — extend the ontology if this is a real PK parameter (source ['bcp12850-tbl-0002:row20:col1'])
- dropped unlinked row (NIL): 'High RSV, %CV' — extend the ontology if this is a real PK parameter (source ['bcp12850-tbl-0002:row21:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tanezumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell bcp12850-tbl-0002:row1:col2 = '0.129, 0.14'
- unparsed cell bcp12850-tbl-0002:row2:col2 = '2.66, 2.76'
- unparsed cell bcp12850-tbl-0002:row3:col2 = '0.198, 0.545'
- unparsed cell bcp12850-tbl-0002:row4:col2 = '1.72, 2.24'
- unparsed cell bcp12850-tbl-0002:row5:col2 = '0.738, 0.789'
- unparsed cell bcp12850-tbl-0002:row6:col2 = '7.8, 47.7'
- unparsed cell bcp12850-tbl-0002:row7:col2 = '5.72, 10.3'
- unparsed cell bcp12850-tbl-0002:row8:col2 = '0.682, 0.858'
- unparsed cell bcp12850-tbl-0002:row9:col2 = '0.489, 0.62'
- unparsed cell bcp12850-tbl-0002:row10:col2 = '0.15, 0.454'
- unparsed cell bcp12850-tbl-0002:row11:col2 = '0.0738, 0.141'
- unparsed cell bcp12850-tbl-0002:row12:col2 = '0.0346, 0.0992'
- unparsed cell bcp12850-tbl-0002:row13:col2 = '0.143, 0.208'
- unparsed cell bcp12850-tbl-0002:row14:col2 = '0.106, 0.181'
- unparsed cell bcp12850-tbl-0002:row15:col2 = '25, 27'
- unparsed cell bcp12850-tbl-0002:row16:col2 = '19, 21'
- unparsed cell bcp12850-tbl-0002:row17:col2 = '0.03, 0.038'
- unparsed cell bcp12850-tbl-0002:row18:col2 = '26, 52'
- unparsed cell bcp12850-tbl-0002:row19:col2 = '15, 24'
- unparsed cell bcp12850-tbl-0002:row20:col2 = '13, 13'
- unparsed cell bcp12850-tbl-0002:row21:col2 = '52, 55'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['bcp12850-tbl-0002:row6:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp12850-tbl-0002:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp12850-tbl-0002:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp12850-tbl-0002:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp12850-tbl-0002:row4:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | μg day –1 | not captured | not captured | ['bcp12850-tbl-0002:row7:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.135 | not captured | not captured | ['bcp12850-tbl-0002:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00562 L/h | not captured | not captured | ['bcp12850-tbl-0002:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.71 L | not captured | not captured | ['bcp12850-tbl-0002:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.98 L | not captured | not captured | ['bcp12850-tbl-0002:row4:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tanezumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jonsson_2016` / `Jonsson_2016::reference`)


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
