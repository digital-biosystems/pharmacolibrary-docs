<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;donidalorsen&quot;,&quot;href&quot;:&quot;drugs/drug_donidalorsen/&quot;},{&quot;label&quot;:&quot;Diep_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donidalorsen_Diep2026_reference&quot;,&quot;label&quot;:&quot;Diep_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_donidalorsen/Donidalorsen_Diep2026_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donidalorsen — `Donidalorsen_Diep2026_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines; the engineer's deviations are not documented and quantified. Evidence: T2_covariates_not_exercised; T6_deviations — got invented_absorption: not acceptable
**How to address:** Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
<sub>owner: **scholar**</sub>

## Citation
Diep JK; Liu M; Singh P; Dorow S; Cohn DM; Bordone L; et al. et al. (2026). CPT: pharmacometrics & systems pharmacology 15
  ·  DOI: [10.1002/psp4.70206](https://doi.org/10.1002/psp4.70206)

## Model component
<dbs-pgx drug="donidalorsen" model-id="Donidalorsen_Diep2026_reference" status="model_quarantined" stale="false" population="healthy volunteers and patients with hereditary angioedema" measured-compound="donidalorsen" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) a | `Q27` · CL/F | 12.8 | not captured | not captured | not captured | 2.83 | llm_confirmed (0.6) | psp470206-tbl-0001:row1:col1, psp470206-tbl-0001:row1:col2 | — | 19.6 (13.9% RSE) |
| covariate_of_weight_on_cl_f | `Q900` · covariate_of_weight_on_cl_f | 1.52 | not captured | not captured | not captured | 8.37 | not captured (not captured) | psp470206-tbl-0001:row2:col1, psp470206-tbl-0001:row2:col2 | — | not captured |
| V c/F (L) b | `Q290` · V1/F | 69.8 | not captured | not captured | not captured | 6.28 | llm (0.6) | psp470206-tbl-0001:row3:col1, psp470206-tbl-0001:row3:col2 | — | not captured |
| Q/F (L/h) c | `Q69` · Q/F | 2.58 | not captured | not captured | not captured | 5.25 | llm_confirmed (0.6) | psp470206-tbl-0001:row6:col1, psp470206-tbl-0001:row6:col2 | — | 10.2 (15.7% RSE) |
| covariate_of_weight_on_q_f | `Q900` · covariate_of_weight_on_q_f | 1.79 | not captured | not captured | not captured | 12.7 | not captured (not captured) | psp470206-tbl-0001:row7:col1, psp470206-tbl-0001:row7:col2 | — | not captured |
| V p /F (L) d | `Q76` · V/F | 1840 | not captured | not captured | not captured | 6.29 | llm (0.6) | psp470206-tbl-0001:row9:col1, psp470206-tbl-0001:row9:col2 | — | not captured |
| k a (1/h) e | `Q49` · kabs | 0.952 | not captured | not captured | not captured | 8.26 | llm (0.6) | psp470206-tbl-0001:row11:col1, psp470206-tbl-0001:row11:col2 | — | not captured |
| theta_q314_weight | `Q900` · theta_q314_weight | 2.34 | not captured | not captured | not captured | 7.86 | not captured (not captured) | psp470206-tbl-0001:row4:col1, psp470206-tbl-0001:row4:col2 | — | not captured |
| theta_q319_weight | `Q900` · theta_q319_weight | 1.60 | not captured | not captured | not captured | 17.6 | not captured (not captured) | psp470206-tbl-0001:row10:col1, psp470206-tbl-0001:row10:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Covariate of weight on CL/F' → Q900:covariate_of_weight_on_cl_f = 1.52 (linear_fractional on Q27)
- routed 'Covariate of disease status (patient with HAE) on V c/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- covariate level 'Covariate of weight on Q/F' → Q900:covariate_of_weight_on_q_f = 1.79 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Covariate of disease status (patient with HAE) on Q/F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row8:col1', 'psp470206-tbl-0001:row8:col2'])
- routed 'Covariate of site of administration of k a' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Covariate of drug presentation of k a' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Correlation between CL/F and V c/F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row15:col1', 'psp470206-tbl-0001:row15:col2'])
- dropped unlinked row (NIL): 'Correlation between CL/F and Q/F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row16:col1', 'psp470206-tbl-0001:row16:col2'])
- dropped unlinked row (NIL): 'Correlation between CL/F and V p /F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row17:col1', 'psp470206-tbl-0001:row17:col2'])
- dropped unlinked row (NIL): 'Correlation between CL/F and k a' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row18:col1', 'psp470206-tbl-0001:row18:col2'])
- dropped unlinked row (NIL): 'Correlation between V c/F and Q/F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row20:col1', 'psp470206-tbl-0001:row20:col2'])
- dropped unlinked row (NIL): 'Correlation between V c/F and V p /F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row21:col1', 'psp470206-tbl-0001:row21:col2'])
- routed 'Correlation between V c/F and k a' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Correlation between Q/F and V p /F' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row24:col1', 'psp470206-tbl-0001:row24:col2'])
- dropped unlinked row (NIL): 'Correlation between Q/F and k a' — extend the ontology if this is a real PK parameter (source ['psp470206-tbl-0001:row25:col1', 'psp470206-tbl-0001:row25:col2'])
- routed 'Correlation between V p /F and k a' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=donidalorsen
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 277 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 868 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.573 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 1.18 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_donidalorsen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Diep_2026` / `Diep_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_donidalorsen/models/modelica/_needs_review/Donidalorsen_Diep2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_donidalorsen/models/modelica/_needs_review/Donidalorsen_Diep2026_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-19 11:35 UTC</sub>
