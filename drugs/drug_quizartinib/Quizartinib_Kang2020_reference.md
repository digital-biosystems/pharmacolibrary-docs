<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/&quot;},{&quot;label&quot;:&quot;Kang_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quizartinib — `Quizartinib_Kang2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Kang D et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2020)
  ·  DOI: [10.1002/jcph.1680](https://doi.org/10.1002/jcph.1680)

## Model component
<dbs-pgx drug="quizartinib" model-id="Quizartinib_Kang2020_reference" status="rejected" stale="false" population="healthy volunteers and patients with AML" measured-compound="quizartinib" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 5 extracted, plus 22 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Q1 (intercompartmental clearance 1), L/h | `Q30` · Q | 3.14 | L/h | 8.722222222222222e-07 | [l] / [h] | not captured | exact (1.0) | jcph1680-tbl-0003:row8:col1, jcph1680-tbl-0003:row8:col2 | — | 23.3 (None% RSE) |
| Q2 (intercompartmental clearance 2), L/h | `Q99` · Q2 | 4.87 | L/h | 1.3527777777777778e-06 | [l] / [h] | not captured | exact (1.0) | jcph1680-tbl-0003:row13:col1, jcph1680-tbl-0003:row13:col2 | — | not captured |
| D1 (duration of zero‐order input to depot compartment), h | `Q310` · D1 | 3.86 | h | 13896.0 | [h] | not captured | space_fold (0.95) | jcph1680-tbl-0003:row18:col1, jcph1680-tbl-0003:row18:col2 | — | 8.69 (None% RSE) |
| ALAG1 (absorption lag time), h | `Q83` · tlag | 4.09 | h | 14724.0 | [h] | not captured | exact (1.0) | jcph1680-tbl-0003:row23:col1, jcph1680-tbl-0003:row23:col2 | — | 7.36 (None% RSE) |
| FMET (fraction of quizartinib converted to AC886) | `Q45` · fm | 0.500 | fraction of quizartinib converted to AC886 | not captured | [fractionofquizartinibconvertedtoac886] | not captured | exact (1.0) | Kang_2020_table_4:row5:col1 | — | not captured |
| theta_q22_category | `Q900` · theta_q22_category | 2.04 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row2:col1, jcph1680-tbl-0003:row2:col2 | — | not captured |
| theta_q63_category | `Q900` · theta_q63_category | 1.89 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row5:col1, jcph1680-tbl-0003:row5:col2 | — | not captured |
| theta_q63_weight_power | `Q900` · theta_q63_weight_power | 12.6 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row6:col1, jcph1680-tbl-0003:row6:col2 | — | not captured |
| theta_q63_weight_power | `Q900` · theta_q63_weight_power | 7.16 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row7:col1, jcph1680-tbl-0003:row7:col2 | — | not captured |
| theta_q_weight_power | `Q900` · theta_q_weight_power | 23.3 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row9:col1, jcph1680-tbl-0003:row9:col2 | — | not captured |
| theta_q82_category | `Q900` · theta_q82_category | 2.53 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row10:col1, jcph1680-tbl-0003:row10:col2 | — | not captured |
| theta_q64_weight_power | `Q900` · theta_q64_weight_power | 10.9 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row11:col1, jcph1680-tbl-0003:row11:col2 | — | not captured |
| theta_q64_age_power | `Q900` · theta_q64_age_power | 10.7 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row12:col1, jcph1680-tbl-0003:row12:col2 | — | not captured |
| theta_q78_category | `Q900` · theta_q78_category | 1.86 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row14:col1, jcph1680-tbl-0003:row14:col2 | — | not captured |
| theta_q49_category | `Q900` · theta_q49_category | 3.00 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row15:col1, jcph1680-tbl-0003:row15:col2 | — | not captured |
| theta_q49_fed | `Q900` · theta_q49_fed | 8.75 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row17:col1, jcph1680-tbl-0003:row17:col2 | — | not captured |
| theta_q40_category | `Q900` · theta_q40_category | 3.26 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row19:col1, jcph1680-tbl-0003:row19:col2 | — | not captured |
| theta_q40_fasted | `Q900` · theta_q40_fasted | 1.86 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row21:col1, jcph1680-tbl-0003:row21:col2 | — | not captured |
| theta_q40_fed | `Q900` · theta_q40_fed | 52.0 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row22:col1, jcph1680-tbl-0003:row22:col2 | — | not captured |
| theta_q27_category | `Q900` · theta_q27_category | 3.07 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row1:col1, Kang_2020_table_4:row1:col2 | — | not captured |
| theta_q351_weight_power | `Q900` · theta_q351_weight_power | 12.5 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row2:col1, Kang_2020_table_4:row2:col2 | — | not captured |
| theta_q351_race | `Q900` · theta_q351_race | 14.1 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row3:col1, Kang_2020_table_4:row3:col2 | — | not captured |
| theta_q351_category | `Q900` · theta_q351_category | 27.7 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row4:col1, Kang_2020_table_4:row4:col2 | — | not captured |
| theta_q290_category | `Q900` · theta_q290_category | 8.27 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row6:col1, Kang_2020_table_4:row6:col2 | — | not captured |
| theta_q63_category | `Q900` · theta_q63_category | 19.3 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row7:col1, Kang_2020_table_4:row7:col2 | — | not captured |
| theta_q82_category | `Q900` · theta_q82_category | 1.06 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row8:col1, Kang_2020_table_4:row8:col2 | — | not captured |
| theta_q30_category | `Q900` · theta_q30_category | 1.28 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row9:col1, Kang_2020_table_4:row9:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (apparent clearance for parent), L/h' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'Vc (apparent volume of distribution for central compartment), L' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'Q1 (intercompartmental clearance 1), L/h' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'Vp1 (apparent volume of distribution for peripheral compartment 1), L' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'Ka (first‐order absorption constant for healthy participants), 1/h' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'D1 (duration of zero‐order input to depot compartment), h' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'F1 (relative F1 for patients)' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'ALAG1 (absorption lag time), h' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iov: 'IOV in CL on occasion 1' routed out of structural estimates ('IOV in F1 on occasion 3')
- table section iov: 'IOV in Vc on occasion 1' routed out of structural estimates ('IOV in CL on occasion 4')
- table section iov: 'RV (healthy volunteer CCV component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'RV (patient CCV component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'RV (healthy volunteer additive component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'RV (patient additive component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'Minimum value of the objective function = 72 031.19' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iiv: 'Vcm (apparent central volume of distribution for metabolite), L' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'IIV in CLm in healthy volunteers' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'IIV in CLm in patients' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'Minimum value of the objective function = −10 302.217' routed out of structural estimates ('Magnitude of Interindividual Variability')
- unit_dimension_unknown: 'fraction of quizartinib converted to AC886' (fm)
- dropped unlinked row (NIL): 'Minimum value of the objective function = −10 302.217' — extend the ontology if this is a real PK parameter (source ['Kang_2020_table_4:row14:col1', 'Kang_2020_table_4:row14:col2'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.082 (source ['jcph1680-tbl-0003:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'F1'
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q22 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q63 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q82 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q64 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q78 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q40 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q40 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q351 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q290 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q30 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (Q1 (intercompartmental clearance 1), L/h); Q99 (Q2 (intercompartmental clearance 2), L/h)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quizartinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles: 6 per-group rows of quizartinib residual_error but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of AC886 variability but 0 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: Ka (first‐order absorption constant for healthy participants), 1/h
- row roles (LLM): model_class=compartmental; 46/46 row label(s) assigned, 32 linked by role; re-tagged quizartinib→parent ×66, quizartinib→AC886 ×20
- molar mass: none of 1 PubChem candidate(s) is 'AC886' (LLM) — left in mass units
- molar mass: none found for 'AC886' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell jcph1680-tbl-0003:row2:col3 = '55.1% CV'
- unparsed cell jcph1680-tbl-0003:row5:col3 = '27.6% CV'
- unparsed cell jcph1680-tbl-0003:row8:col3 = '24.8% CV'
- unparsed cell jcph1680-tbl-0003:row10:col3 = '39.7% CV'
- unparsed cell jcph1680-tbl-0003:row15:col3 = '38.5% CV'
- unparsed cell jcph1680-tbl-0003:row18:col3 = '69.3% CV'
- unparsed cell jcph1680-tbl-0003:row19:col3 = '34.8% CV'
- unparsed cell jcph1680-tbl-0003:row23:col3 = '62.0% CV'
- unparsed cell jcph1680-tbl-0003:row24:col1 = '22.6% CV'
- unparsed cell jcph1680-tbl-0003:row26:col1 = '40.9% CV'
- unparsed cell jcph1680-tbl-0003:row30:col1 = '20.3% CV'
- unparsed cell jcph1680-tbl-0003:row34:col3 = '49.4‐7.50% CVb'
- unparsed cell jcph1680-tbl-0003:row36:col3 = '52.6‐19.4% CVc'
- unparsed cell Kang_2020_table_4:row6:col3 = '117% CV'
- unparsed cell Kang_2020_table_4:row10:col3 = '45.9% CV'
- unparsed cell Kang_2020_table_4:row11:col3 = '64.1% CV'
- unparsed cell Kang_2020_table_4:row12:col3 = '0.263 SD'
- unparsed cell Kang_2020_table_4:row13:col3 = '0.412 SD'
- companion parameter table 4 transcribed (28 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1680-tbl-0003:row8:col1', 'jcph1680-tbl-0003:row8:col2'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['jcph1680-tbl-0003:row18:col1', 'jcph1680-tbl-0003:row18:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['jcph1680-tbl-0003:row23:col1', 'jcph1680-tbl-0003:row23:col2'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1680-tbl-0003:row13:col1', 'jcph1680-tbl-0003:row13:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_quizartinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kang_2020` / `Kang_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:29 UTC</sub>
