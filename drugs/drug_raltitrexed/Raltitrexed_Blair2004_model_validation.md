<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;raltitrexed&quot;,&quot;href&quot;:&quot;drugs/drug_raltitrexed/&quot;},{&quot;label&quot;:&quot;Blair_2004 \u00b7 model_validation&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Raltitrexed_Blair2004_model_development&quot;,&quot;label&quot;:&quot;Blair_2004_model_development&quot;,&quot;href&quot;:&quot;drugs/drug_raltitrexed/Raltitrexed_Blair2004_model_development.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Raltitrexed_Blair2004_model_development&quot;,&quot;label&quot;:&quot;Blair_2004_model_development&quot;,&quot;href&quot;:&quot;drugs/drug_raltitrexed/Raltitrexed_Blair2004_model_development.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Raltitrexed_Blair2004_model_validation&quot;,&quot;label&quot;:&quot;Blair_2004_model_validation&quot;,&quot;href&quot;:&quot;drugs/drug_raltitrexed/Raltitrexed_Blair2004_model_validation.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Raltitrexed_Blair2004_model_validation&quot;,&quot;label&quot;:&quot;Blair_2004_model_validation&quot;,&quot;href&quot;:&quot;drugs/drug_raltitrexed/Raltitrexed_Blair2004_model_validation.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Raltitrexed_Blair2004_total_cohort&quot;,&quot;label&quot;:&quot;Blair_2004_total_cohort&quot;,&quot;href&quot;:&quot;drugs/drug_raltitrexed/Raltitrexed_Blair2004_total_cohort.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Raltitrexed_Blair2004_total_cohort&quot;,&quot;label&quot;:&quot;Blair_2004_total_cohort&quot;,&quot;href&quot;:&quot;drugs/drug_raltitrexed/Raltitrexed_Blair2004_total_cohort.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# raltitrexed — `Raltitrexed_Blair2004_model_validation`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `CL`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
3. If the paper never reports it, the record cannot become a model.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Blair EY; Rivory LP; Clarke SJ; McLachlan AJ et al. (2004). British journal of clinical pharmacology 57
  ·  DOI: [10.1111/j.1365-2125.2003.02050.x](https://doi.org/10.1111/j.1365-2125.2003.02050.x)

## Model component
<dbs-pgx drug="raltitrexed" model-id="Raltitrexed_Blair2004_model_validation" status="model_quarantined" stale="false" population="patients with advanced solid tumours" measured-compound="raltitrexed" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| interpatient variability in raltitrexed clearance | `Q22` · CL | —(suppressed) | % | — | % | not captured | boundary (0.8) | Blair_2004:other_prose | — | not captured |
| V (l) | `Q61` · V | —(suppressed) | l | — | L | not captured | exact (1.0) | Blair_2004:other_prose | — | not captured |
| q 1 | `Q30` · Q | —(suppressed) | l h -1 | — | L/h | not captured | space_fold (0.95) | Blair_2004:discussion_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Number of patients' — extend the ontology if this is a real PK parameter (source ['tab_0:row1:col2'])
- dropped unlinked row (NIL): 'Number of courses' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col2'])
- dropped unlinked row (NIL): 'Number of observations' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col2'])
- salvaged Q22 ('interpatient variability in raltitrexed clearance'=33) from results prose — parameter table was unreadable
- salvaged Q61 ('V (l)'=6.65) from results prose — parameter table was unreadable
- salvaged Q30 ('q 1'=0.54) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=raltitrexed
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'model validation' subgroup of Blair_2004 (paper reports 3 populations: model development, model validation, total cohort)

**Extraction notes:**
- unparsed cell tab_0:row4:col1 = '16 ± 3 (7-23)'
- unparsed cell tab_0:row4:col2 = '16 ± 3 (3-23)'
- unparsed cell tab_0:row5:col1 = '3.9 ± 2.3 (0.2-8.6)'
- unparsed cell tab_0:row5:col2 = '4.9 ± 1.9 (0.2-9.2)'
- unparsed cell tab_0:row5:col3 = '4.3 ± 2.2 (0.2-9.2)'
- unparsed cell tab_0:row7:col1 = '56.1 ± 11.0 (21-73)'
- unparsed cell tab_0:row7:col2 = '54.1 ± 11.9 (24-74)'
- unparsed cell tab_0:row7:col3 = '55.5 ± 11.3 (21-74)'
- unparsed cell tab_0:row9:col1 = '1.8 ± 0.2 (1.3-2.4)'
- unparsed cell tab_0:row9:col2 = '1.8 ± 0.2 (1.3-2.3)'
- unparsed cell tab_0:row9:col3 = '1.8 ± 0.2 (1.3-2.4)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 33.0 | not captured | not captured | ['Blair_2004:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.65 L | not captured | not captured | ['Blair_2004:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_raltitrexed/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Blair_2004` / `Blair_2004::model_validation`)
- model: `../../../knowledgebase/drugs/drug_raltitrexed/models/modelica/_needs_review/Raltitrexed_Blair2004_model_validation.mo`
- deviation: `../../../knowledgebase/drugs/drug_raltitrexed/models/modelica/_needs_review/Raltitrexed_Blair2004_model_validation.deviation.json`


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
