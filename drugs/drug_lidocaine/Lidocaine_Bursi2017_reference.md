<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lidocaine&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/&quot;},{&quot;label&quot;:&quot;Bursi_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lidocaine_Bursi2017_reference&quot;,&quot;label&quot;:&quot;Bursi_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/Lidocaine_Bursi2017_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Lidocaine_Reichel1998_reference&quot;,&quot;label&quot;:&quot;Reichel_1998_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/Lidocaine_Reichel1998_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_He2025_reference&quot;,&quot;label&quot;:&quot;He_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/Lidocaine_He2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Kim2021_reference&quot;,&quot;label&quot;:&quot;Kim_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/Lidocaine_Kim2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lidocaine — `Lidocaine_Bursi2017_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `V1`, `theta_k31_category`, `theta_v1_category`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines; the model was built differently from what the record describes. Evidence: T2_covariates_not_exercised; T3_param_coverage — expected 2 scholar param(s) emitted or defaulted — got 1 covered.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
3. If the paper never reports it, the record cannot become a model.
4. Advisory only — the base model still replicates.
5. Check the record's covariate_definitions in _interpretv2.yaml.
6. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Bursi R; Piana C; Grevel J; Huntjens D; Boesl I et al. (2017). European journal of drug metabolism and pharmacokinetics 42
  ·  DOI: [10.1007/s13318-017-0400-7](https://doi.org/10.1007/s13318-017-0400-7)

## Model component
<dbs-pgx drug="lidocaine" model-id="Lidocaine_Bursi2017_reference" status="model_quarantined" stale="false" population="post-herpetic neuralgia patients" measured-compound="lidocaine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k 23 (h−1) | `Q48` · kcomp | —(suppressed) | h−1 | — | [1] / [h] | 0.175 | space_fold (0.95) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| Effect of BIL &gt;0.53 on k 30 (h−1) | `Q304` · k31 | —(suppressed) | h−1 | — | [1] / [h] | 0.148 | llm (0.6) | Tab3:row7:col1, Tab3:row7:col2 | — | not captured |
| V 1 | `Q63` · V1 | —(suppressed) | IIV | — | [iiv] | 0.0757 | space_fold (0.95) | Tab3:row22:col1, Tab3:row22:col2, Tab3:row22:col4 | — | not captured |
| theta_k31_category | `Q900` · theta_k31_category | —(suppressed) | h−1 | — | not captured | 0.169 | not captured (not captured) | Tab3:row5:col1, Tab3:row5:col2 | — | not captured |
| theta_k31_cyp1a2 | `Q900` · theta_k31_cyp1a2 | —(suppressed) | not captured | — | not captured | 0.27 | not captured (not captured) | Tab3:row9:col1, Tab3:row9:col2 | — | not captured |
| theta_k31_bmi | `Q900` · theta_k31_bmi | —(suppressed) | not captured | — | not captured | 0.309 | not captured (not captured) | Tab3:row10:col1, Tab3:row10:col2 | — | not captured |
| theta_q348_category | `Q900` · theta_q348_category | —(suppressed) | not captured | — | not captured | 0.0383 | not captured (not captured) | Tab3:row12:col1, Tab3:row12:col2 | — | not captured |
| theta_v1_category | `Q900` · theta_v1_category | —(suppressed) | IIV | — | not captured | 99.5 | not captured (not captured) | Tab3:row15:col1, Tab3:row15:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q304 ('Effect of CLCR ≤52.7 on k 30 (h−1)', value '-0.32') — already have one for this compound
- dropped unlinked row (NIL): 'Effect of ALT &gt;11 on k 30 (h−1)' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1', 'Tab3:row11:col2'])
- dropped unlinked row (NIL): 'Effect of ALT &gt;11 on k 40 (h−1)' — extend the ontology if this is a real PK parameter (source ['Tab3:row14:col1', 'Tab3:row14:col2'])
- routed 'k 30' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'k 40' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_unknown: 'IIV' (V1)
- dropped unlinked row (NIL): 'Lidocaine' — extend the ontology if this is a real PK parameter (source ['Tab3:row25:col1', 'Tab3:row25:col2', 'Tab3:row25:col4'])
- dropped unlinked row (NIL): 'MEGX' — extend the ontology if this is a real PK parameter (source ['Tab3:row26:col1', 'Tab3:row26:col2', 'Tab3:row26:col4'])
- dropped unlinked row (NIL): 'GX' — extend the ontology if this is a real PK parameter (source ['Tab3:row27:col1', 'Tab3:row27:col2', 'Tab3:row27:col4'])
- dropped unlinked row (NIL): '2,6-xylidine' — extend the ontology if this is a real PK parameter (source ['Tab3:row28:col1', 'Tab3:row28:col2', 'Tab3:row28:col4'])
- dropped duplicate covariate effect 'category'/'' on Q304 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q348 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q348 — ambiguous identity (two shifts cannot share one category)
- dropped duplicate covariate effect 'category'/'' on Q63 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lidocaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- status held at route_to_review — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row3:col3 = '(1.59; 2.27)'
- unparsed cell Tab3:row5:col3 = '(1.11; 1.77)'
- unparsed cell Tab3:row6:col3 = '(1.53; 2.61)'
- unparsed cell Tab3:row7:col3 = '(−0.816; −0.236)'
- unparsed cell Tab3:row8:col3 = '(−0.645; 0.005)'
- unparsed cell Tab3:row9:col3 = '(0.323; 1.381)'
- unparsed cell Tab3:row10:col3 = '(0.332; 1.544)'
- unparsed cell Tab3:row11:col3 = '(−0.87; −0.114)'
- unparsed cell Tab3:row12:col3 = '(0.592; 0.742)'
- unparsed cell Tab3:row13:col3 = '(0.29; 0.53)'
- unparsed cell Tab3:row14:col3 = '(0.038; 0.420)'
- unparsed cell Tab3:row15:col3 = '(1124; 1515)'
- unparsed cell Tab3:row16:col3 = '(1449; 2170)'
- unparsed cell Tab3:row20:col3 = '(0.141; 0.639)'
- unparsed cell Tab3:row21:col3 = '(0.117; 0.283)'
- unparsed cell Tab3:row22:col3 = '(0.164; 0.46)'
- unparsed cell Tab3:row25:col3 = '(204; 523)'
- unparsed cell Tab3:row26:col3 = '(28.8; 77.8)'
- unparsed cell Tab3:row27:col3 = '(1.2; 94.5)'
- unparsed cell Tab3:row28:col3 = '(3.63; 9.15)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row7:col1', 'Tab3:row7:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_param_coverage | not captured | fail | 2 scholar param(s) emitted or defaulted | 1 covered | not captured | neither emitted nor in defaulted[]: ['kcomp'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lidocaine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bursi_2017` / `Bursi_2017::reference`)
- model: `../../../knowledgebase/drugs/drug_lidocaine/models/modelica/_needs_review/Lidocaine_Bursi2017_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_lidocaine/models/modelica/_needs_review/Lidocaine_Bursi2017_reference.deviation.json`


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
