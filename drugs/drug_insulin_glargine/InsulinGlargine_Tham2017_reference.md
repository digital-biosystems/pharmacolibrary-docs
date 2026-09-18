<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin glargine&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_glargine/&quot;},{&quot;label&quot;:&quot;Tham_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;InsulinGlargine_Tham2017_reference&quot;,&quot;label&quot;:&quot;Tham_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_glargine/InsulinGlargine_Tham2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# insulin glargine — `InsulinGlargine_Tham2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `Fab`, `kabs`, `CL`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension; the reference covariate scenario does not reconstruct.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.
4. Check covariate_definitions and the reference category in _interpretv2.yaml.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Tham LS; Schneck K; Ertekin A; Reviriego J et al. (2017). Journal of clinical pharmacology 57
  ·  DOI: [10.1002/jcph.899](https://doi.org/10.1002/jcph.899)

## Model component
<dbs-pgx drug="insulin glargine" model-id="InsulinGlargine_Tham2017_reference" status="rejected" stale="false" population="healthy adults" measured-compound="insulin" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Bioavailability, FGlar | `Q40` · Fab | 1 | Unit | not captured | not captured | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row3:col1 | — | not captured |
| Absorption rate constant, Ka (1/h) | `Q49` · kabs | 0.0365 | Unit | not captured | [unit] | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row6:col1, jcph899-tbl-0002:row6:col2, jcph899-tbl-0002:row6:col3, jcph899-tbl-0002:row6:col4, jcph899-tbl-0002:row6:col5, jcph899-tbl-0002:row6:col6 | — | not captured |
| Absorption lag, ALag (h) | `Q83` · tlag | 0.265 | h | 954.0 | [h] | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row7:col4, jcph899-tbl-0002:row7:col5 | — | not captured |
| Apparent volume of distribution (L) | `Q76` · V/F | 43.0 | L | 0.043000000000000003 | [l] | not captured | exact (1.0) | jcph899-tbl-0002:row12:col1, jcph899-tbl-0002:row12:col2, jcph899-tbl-0002:row12:col3, jcph899-tbl-0002:row12:col4, jcph899-tbl-0002:row12:col5, jcph899-tbl-0002:row12:col6 | — | not captured |
| Apparent clearance (L/h) | `Q27` · CL/F | 30.5 | L/h | 8.472222222222223e-06 | [l] / [h] | not captured | exact (1.0) | jcph899-tbl-0002:row15:col1, jcph899-tbl-0002:row15:col2, jcph899-tbl-0002:row15:col3, jcph899-tbl-0002:row15:col4, jcph899-tbl-0002:row15:col5, jcph899-tbl-0002:row15:col6 | — | not captured |
| Covariate effect of dose on clearance | `Q22` · CL | -0.282 | Unit | not captured | [unit] | not captured | llm_confirmed (0.6) | jcph899-tbl-0002:row16:col2, jcph899-tbl-0002:row16:col3, jcph899-tbl-0002:row16:col4 | — | not captured |
| theta_q61_body_weight | `Q900` · theta_q61_body_weight | 2.48 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph899-tbl-0002:row13:col1, jcph899-tbl-0002:row13:col2, jcph899-tbl-0002:row13:col5, jcph899-tbl-0002:row13:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Absorption rate constant, Ka (1/h)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped duplicate Q40 ('Fraction of dose undergoing first‐order absorption', value '0.729') — already have one for this compound
- dropped unlinked row (NIL): 'Duration of 0‐order absorption (h)' — extend the ontology if this is a real PK parameter (source ['jcph899-tbl-0002:row9:col1', 'jcph899-tbl-0002:row9:col5'])
- unit_dimension_mismatch: 'Covariate effect of dose on absorption rate constant' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('Covariate effect of dose on absorption rate constant', value '-0.275') — already have one for this compound
- unit_dimension_mismatch: 'Covariate effect of dose on clearance' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Clearance and volume of distribution' — extend the ontology if this is a real PK parameter (source ['jcph899-tbl-0002:row18:col1'])
- unit_dimension_mismatch: 'Clearance and absorption rate constant' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('Clearance and absorption rate constant', value '-0.0232') — already have one for this compound
- dropped PD-category row 'Baseline endogenous insulin concentration (pmol/L)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph899-tbl-0002:row21:col1'])
- dropped unlinked row (NIL): 'Covariate of body weight on baseline endogenous insulin' — extend the ontology if this is a real PK parameter (source ['jcph899-tbl-0002:row22:col1', 'jcph899-tbl-0002:row22:col2', 'jcph899-tbl-0002:row22:col3', 'jcph899-tbl-0002:row22:col4', 'jcph899-tbl-0002:row22:col5', 'jcph899-tbl-0002:row22:col6'])
- dropped unlinked row (NIL): 'Proportional (%)' — extend the ontology if this is a real PK parameter (source ['jcph899-tbl-0002:row24:col1', 'jcph899-tbl-0002:row24:col2', 'jcph899-tbl-0002:row24:col3', 'jcph899-tbl-0002:row24:col4', 'jcph899-tbl-0002:row24:col5', 'jcph899-tbl-0002:row24:col6'])
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=insulin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q22 | fail | not captured | -0.282 | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | [luminosity] / [length] ** 2 | Unit | not captured | not captured | ['jcph899-tbl-0002:row16:col2', 'jcph899-tbl-0002:row16:col3', 'jcph899-tbl-0002:row16:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph899-tbl-0002:row15:col1', 'jcph899-tbl-0002:row15:col2', 'jcph899-tbl-0002:row15:col3', 'jcph899-tbl-0002:row15:col4', 'jcph899-tbl-0002:row15:col5', 'jcph899-tbl-0002:row15:col6'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | Unit | not captured | not captured | ['jcph899-tbl-0002:row6:col1', 'jcph899-tbl-0002:row6:col2', 'jcph899-tbl-0002:row6:col3', 'jcph899-tbl-0002:row6:col4', 'jcph899-tbl-0002:row6:col5', 'jcph899-tbl-0002:row6:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph899-tbl-0002:row12:col1', 'jcph899-tbl-0002:row12:col2', 'jcph899-tbl-0002:row12:col3', 'jcph899-tbl-0002:row12:col4', 'jcph899-tbl-0002:row12:col5', 'jcph899-tbl-0002:row12:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['jcph899-tbl-0002:row7:col4', 'jcph899-tbl-0002:row7:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 30.5 L/h | not captured | not captured | ['jcph899-tbl-0002:row15:col1', 'jcph899-tbl-0002:row15:col2', 'jcph899-tbl-0002:row15:col3', 'jcph899-tbl-0002:row15:col4', 'jcph899-tbl-0002:row15:col5', 'jcph899-tbl-0002:row15:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 43 L | not captured | not captured | ['jcph899-tbl-0002:row12:col1', 'jcph899-tbl-0002:row12:col2', 'jcph899-tbl-0002:row12:col3', 'jcph899-tbl-0002:row12:col4', 'jcph899-tbl-0002:row12:col5', 'jcph899-tbl-0002:row12:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_insulin_glargine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tham_2017` / `Tham_2017::reference`)


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
