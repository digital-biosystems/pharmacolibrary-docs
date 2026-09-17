<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;paromomycin&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/&quot;},{&quot;label&quot;:&quot;Verrest_2023 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paromomycin_Verrest2023_estimate&quot;,&quot;label&quot;:&quot;Verrest_2023_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Verrest2023_estimate.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Paromomycin_Verrest2023_estimate&quot;,&quot;label&quot;:&quot;Verrest_2023_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Verrest2023_estimate.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Paromomycin_Verrest2021v2_reference&quot;,&quot;label&quot;:&quot;Verrest_2021_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Verrest2021v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paromomycin_Verrest2023_shrinkage&quot;,&quot;label&quot;:&quot;Verrest_2023_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Verrest2023_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paromomycin_Verrest2023_shrinkage&quot;,&quot;label&quot;:&quot;Verrest_2023_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Verrest2023_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# paromomycin — `Paromomycin_Verrest2023_estimate`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Advisory only — the base model still replicates.
4. Check the record's covariate_definitions in _interpretv2.yaml.
5. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Verrest L; Roseboom IC; Wasunna M; Mbui J; Njenga S; Musa AM; et al. et al. (2023). The Journal of antimicrobial chemotherapy 78
  ·  DOI: [10.1093/jac/dkad286](https://doi.org/10.1093/jac/dkad286)

## Model component
<dbs-pgx drug="paromomycin" model-id="Paromomycin_Verrest2023_estimate" status="model_quarantined" stale="false" population="Eastern African children and adults with visceral leishmaniasis" measured-compound="paromomycin and miltefosine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | dkad286-T3:row2:col1 | — | not captured |
| V c (L) | `Q63` · V1 | —(suppressed) | L | — | [l] | not captured | space_fold (0.95) | dkad286-T3:row3:col1, Verrest_2023_table_4:row2:col1 | — | not captured |
| Q | `Q30` · Q | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | dkad286-T3:row4:col1 | — | not captured |
| V p (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | not captured | space_fold (0.95) | dkad286-T3:row5:col1, Verrest_2023_table_4:row4:col1 | — | not captured |
| ka (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | [1] / [h] | not captured | exact (1.0) | dkad286-T3:row6:col1 | — | not captured |
| F1 | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | dkad286-T3:row7:col1, Verrest_2023_table_4:row6:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Verrest_2023_table_4:row8:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'COVCL,neutrc (fractional change/103 cells/µL)' — extend the ontology if this is a real PK parameter (source ['dkad286-T3:row8:col1'])
- dropped unlinked row (NIL): 'CL (CV%)' — extend the ontology if this is a real PK parameter (source ['dkad286-T3:row10:col1', 'Verrest_2023_table_4:row10:col1'])
- dropped duplicate Q22 ('CL (L/day)', value '1.85') — already have one for this compound
- dropped duplicate Q30 ('Q (L/day)', value '0.17') — already have one for this compound
- dropped duplicate Q49 ('ka (day−1)', value '0.037') — already have one for this compound
- dropped unlinked row (NIL): 'COVF,W1b (fractional change)' — extend the ontology if this is a real PK parameter (source ['Verrest_2023_table_4:row7:col1'])
- dropped unlinked row (NIL): 'COVF,W1 (CV%)' — extend the ontology if this is a real PK parameter (source ['Verrest_2023_table_4:row11:col1'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paromomycin and miltefosine
- population split: 'estimate' subgroup of Verrest_2023 (paper reports 2 populations: estimate, shrinkage (%))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell dkad286-T3:row8:col2 = '−0.16 to −0.10'
- unparsed cell Verrest_2023_table_4:row7:col2 = '−0.57 to −0.73'
- unparsed cell Verrest_2023_table_4:row8:col2 = '−3.79 to −1.21'
- companion parameter table 4 transcribed (22 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['dkad286-T3:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['dkad286-T3:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkad286-T3:row3:col1', 'Verrest_2023_table_4:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkad286-T3:row5:col1', 'Verrest_2023_table_4:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.62 | not captured | not captured | ['dkad286-T3:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.62 L/h | not captured | not captured | ['dkad286-T3:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 13.6 L | not captured | not captured | ['dkad286-T3:row3:col1', 'Verrest_2023_table_4:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.22 L | not captured | not captured | ['dkad286-T3:row5:col1', 'Verrest_2023_table_4:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_paromomycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Verrest_2023` / `Verrest_2023::estimate`)
- model: `../../../knowledgebase/drugs/drug_paromomycin/models/modelica/_needs_review/Paromomycin_Verrest2023_estimate.mo`
- deviation: `../../../knowledgebase/drugs/drug_paromomycin/models/modelica/_needs_review/Paromomycin_Verrest2023_estimate.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_paromomycin/Paromomycin_Verrest2023_estimate/Paromomycin_Verrest2023_estimate_matlab.zip" download>Paromomycin_Verrest2023_estimate_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_paromomycin/Paromomycin_Verrest2023_estimate/Paromomycin_Verrest2023_estimate_matlab_simbio.zip" download>Paromomycin_Verrest2023_estimate_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_paromomycin/Paromomycin_Verrest2023_estimate/Paromomycin_Verrest2023_estimate_sbml.zip" download>Paromomycin_Verrest2023_estimate_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_paromomycin/Paromomycin_Verrest2023_estimate/Paromomycin_Verrest2023_estimate_cellml.zip" download>Paromomycin_Verrest2023_estimate_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
