<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;tocopherol (vit E)&quot;,&quot;href&quot;:&quot;drugs/drug_tocopherol_vit_e/&quot;},{&quot;label&quot;:&quot;Violet_2020 \u00b7 po_d3_tocopherol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TocopherolVitE_Violet2020_iv_d6_tocopherol&quot;,&quot;label&quot;:&quot;Violet_2020_iv_d6_tocopherol&quot;,&quot;href&quot;:&quot;drugs/drug_tocopherol_vit_e/TocopherolVitE_Violet2020_iv_d6_tocopherol.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TocopherolVitE_Violet2020_iv_d6_tocopherol&quot;,&quot;label&quot;:&quot;Violet_2020_iv_d6_tocopherol&quot;,&quot;href&quot;:&quot;drugs/drug_tocopherol_vit_e/TocopherolVitE_Violet2020_iv_d6_tocopherol.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TocopherolVitE_Violet2020_po_d3_tocopherol&quot;,&quot;label&quot;:&quot;Violet_2020_po_d3_tocopherol&quot;,&quot;href&quot;:&quot;drugs/drug_tocopherol_vit_e/TocopherolVitE_Violet2020_po_d3_tocopherol.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;TocopherolVitE_Violet2020_po_d3_tocopherol&quot;,&quot;label&quot;:&quot;Violet_2020_po_d3_tocopherol&quot;,&quot;href&quot;:&quot;drugs/drug_tocopherol_vit_e/TocopherolVitE_Violet2020_po_d3_tocopherol.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tocopherol (vit E) — `TocopherolVitE_Violet2020_po_d3_tocopherol`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `kel`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Violet PC; Ebenuwa IC; Wang Y; Niyyati M; Padayatty SJ; Head B; et al. et al. (2020). JCI insight 5
  ·  DOI: [10.1172/jci.insight.133309](https://doi.org/10.1172/jci.insight.133309)

## Model component
<dbs-pgx drug="tocopherol (vit E)" model-id="TocopherolVitE_Violet2020_po_d3_tocopherol" status="rejected" stale="false" population="women with obesity-associated hepatosteatosis and healthy controls" measured-compound="alpha-tocopherol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Elimination rate (Ke) | `Q47` · kel | 0.019 | Ke | not captured | [ke] | not captured | exact (1.0) | Violet_2020_table_2:row0:col4, Violet_2020_table_2:row1:col4 | — | not captured |
| Half-life (h) | `Q57` · t1/2z | 39.0 | h | 140400.0 | [h] | not captured | llm (0.6) | Violet_2020_table_2:row2:col4, Violet_2020_table_2:row3:col4 | — | not captured |
| Cmax (µM)a | `Q32` · Cmax | 0.20 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Violet_2020_table_2:row4:col4, Violet_2020_table_2:row5:col4 | — | not captured |
| Tmax (h)b | `Q56` · tmax | 8.5 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Violet_2020_table_2:row6:col4, Violet_2020_table_2:row7:col4 | — | not captured |
| AUC0–72h (µM × h)d | `Q19` · AUCt | 8.6 | not captured | not captured | not captured | not captured | llm (0.6) | Violet_2020_table_2:row10:col4, Violet_2020_table_2:row11:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Elimination rate (Ke)' → Q47 (unit '[current] * [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q19 ('AUC0–8h (µM × h)e', value '0.80') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alpha-tocopherol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'po d3-α-tocopherol' subgroup of Violet_2020 (paper reports 2 populations: iv d6-α-tocopherol, po d3-α-tocopherol)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- unparsed cell Violet_2020_table_2:row9:col4 = '67.5% ± 8.3%'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q47 | fail | 0.019 | 0.024 | 1.2632 | 0.05 | footnote reference category |
| C2_base_Q56 | fail | 8.5 | 7.7 | 0.9059 | 0.05 | footnote reference category |
| C2_base_Q57 | fail | 39.0 | 30.0 | 0.7692 | 0.05 | footnote reference category |
| C5_dimension_Q47 | fail | [current] * [time] | Ke | not captured | not captured | ['Violet_2020_table_2:row0:col4', 'Violet_2020_table_2:row1:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Violet_2020_table_2:row2:col4', 'Violet_2020_table_2:row3:col4'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Violet_2020_table_2:row10:col4', 'Violet_2020_table_2:row11:col4'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Violet_2020_table_2:row4:col4', 'Violet_2020_table_2:row5:col4'] |
| C5_unit_missing_Q56 | fail | [time] | not captured | not captured | not captured | ['Violet_2020_table_2:row6:col4', 'Violet_2020_table_2:row7:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tocopherol_vit_e/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Violet_2020` / `Violet_2020::po_d3_tocopherol`)


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
