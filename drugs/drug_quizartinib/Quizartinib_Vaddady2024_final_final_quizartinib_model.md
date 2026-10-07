<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/&quot;},{&quot;label&quot;:&quot;Vaddady_2024 \u00b7 final_final_quizartinib_model&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quizartinib — `Quizartinib_Vaddady2024_final_final_quizartinib_model`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Vaddady P et al., Population pharmacokinetic analysis of…, Clinical and translational… (2024)
  ·  DOI: [10.1111/cts.70074](https://doi.org/10.1111/cts.70074)

## Model component
<dbs-pgx drug="quizartinib" model-id="Quizartinib_Vaddady2024_final_final_quizartinib_model" status="rejected" stale="false" population="newly diagnosed and relapsed/refractory FLT3-ITD-positive AML patients and non-AML subjects" measured-compound="quizartinib" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 11 extracted, plus 5 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLquiz | `Q22` · CL | 6.65 | L/h | 1.8472222222222223e-06 | L/h | not captured | llm (0.6) | cts70074-tbl-0003:row2:col2, cts70074-tbl-0003:row2:col3 | — | not captured |
| V c,quiz | `Q63` · V1 | 371 | L | 0.371 | L | not captured | llm (0.6) | cts70074-tbl-0003:row3:col2, cts70074-tbl-0003:row3:col3 | — | not captured |
| Q 1,quiz | `Q30` · Q | 40.7 | L/h | 1.1305555555555557e-05 | L/h | not captured | exact (1.0) | cts70074-tbl-0003:row4:col2, cts70074-tbl-0003:row4:col3 | — | not captured |
| V p1,quiz | `Q64` · V2 | 312 | L | 0.312 | L | not captured | exact (1.0) | cts70074-tbl-0003:row5:col2, cts70074-tbl-0003:row5:col3 | — | not captured |
| Q 2,quiz | `Q99` · Q2 | 0.757 | L/h | 2.1027777777777777e-07 | L/h | not captured | exact (1.0) | cts70074-tbl-0003:row6:col2, cts70074-tbl-0003:row6:col3 | — | not captured |
| V p2,quiz | `Q77` · V3 | 91.9 | L | 0.09190000000000001 | L | not captured | exact (1.0) | cts70074-tbl-0003:row7:col2, cts70074-tbl-0003:row7:col3 | — | not captured |
| T lag | `Q83` · tlag | 0.196 | h | 705.6 | h | not captured | space_fold (0.95) | cts70074-tbl-0003:row8:col2, cts70074-tbl-0003:row8:col3 | — | 0.647 (None% RSE) |
| k a | `Q49` · kabs | 1.10 | 1/h | 0.0003055555555555556 | 1/h | not captured | space_fold (0.95) | cts70074-tbl-0003:row9:col1, cts70074-tbl-0003:row9:col2, cts70074-tbl-0003:row9:col3 | — | 0.423 (None% RSE) |
| D1 | `Q310` · D1 | 0.710 | h | 2556.0 | h | not captured | exact (1.0) | cts70074-tbl-0003:row10:col2, cts70074-tbl-0003:row10:col3 | — | 0.821 (None% RSE) |
| Fractional change in CLquiz with strong CYP3A inhibitors | `Q31` · CL_ratio | -0.301 | not captured | not captured | not captured | not captured | llm (0.6) | cts70074-tbl-0003:row11:col2, cts70074-tbl-0003:row11:col3 | — | not captured |
| Fractional change in F rel with strong CYP3A inhibitors | `Q87` · Frel | 0.273 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | cts70074-tbl-0003:row12:col2, cts70074-tbl-0003:row12:col3 | — | -1.28 (None% RSE) |
| fractional_change_in_k_a_for_non_aml_subjects | `Q900` · fractional_change_in_k_a_for_non_aml_subjects | -0.188 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70074-tbl-0003:row15:col2, cts70074-tbl-0003:row15:col3 | — | not captured |
| theta_frel_category | `Q900` · theta_frel_category | 1.73 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70074-tbl-0003:row13:col2, cts70074-tbl-0003:row13:col3 | — | not captured |
| theta_v2_age | `Q900` · theta_v2_age | 0.0152 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70074-tbl-0003:row16:col1, cts70074-tbl-0003:row16:col2, cts70074-tbl-0003:row16:col3 | — | not captured |
| theta_q900_race | `Q900` · theta_q900_race | -0.261 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70074-tbl-0003:row17:col2, cts70074-tbl-0003:row17:col3 | — | not captured |
| theta_v1_category | `Q900` · theta_v1_category | -0.169 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70074-tbl-0003:row18:col2, cts70074-tbl-0003:row18:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q87 ('Fractional change in F rel with moderate CYP3A inhibitors', value '0.116') — already have one for this compound
- covariate level 'Fractional change in k a for non‐AML subjects' → Q900:fractional_change_in_k_a_for_non_aml_subjects = -0.188 (additive_shift on Q22)
- dropped duplicate Q87 ('Fractional change in F rel during Induction', value '-0.419') — already have one for this compound
- dropped duplicate Q87 ('Fractional change in F rel during Consolidation', value '-0.192') — already have one for this compound
- dropped duplicate Q87 ('Fractional change in F rel during Continuation', value '0.418') — already have one for this compound
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['cts70074-tbl-0003:row33:col2'])
- dropped unlinked row (NIL): 'Condition number' — extend the ontology if this is a real PK parameter (source ['cts70074-tbl-0003:row34:col2'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CLquiz' → L/h (from the popPK convention: 'Clearance is conventionally expressed in L/h; 6.65 is consistent with an apparent clearance in this unit.')
- implicit units: 'V c,quiz' → L (from the popPK convention: 'Central compartment volume is conventionally expressed in L; 371 is consistent with a volume in this unit.')
- implicit units: 'Q 1,quiz' → L/h (from the popPK convention: 'Intercompartmental clearance is conventionally expressed in L/h; 40.7 is consistent with a clearance in this unit.')
- implicit units: 'V p1,quiz' → L (from the popPK convention: 'Peripheral compartment volume is conventionally expressed in L; 312 is consistent with a volume in this unit.')
- implicit units: 'Q 2,quiz' → L/h (from the popPK convention: 'Intercompartmental clearance is conventionally expressed in L/h; 0.757 is consistent with a clearance in this unit.')
- implicit units: 'V p2,quiz' → L (from the popPK convention: 'Peripheral compartment volume is conventionally expressed in L; 91.9 is consistent with a volume in this unit.')
- implicit units: 'T lag' → h (from the popPK convention: 'Absorption lag time is conventionally expressed in hours; 0.196 is consistent with a time in this unit.')
- implicit units: 'k a' → 1/h (from the popPK convention: 'A first-order absorption rate constant is conventionally expressed in 1/h; 1.10 is consistent with a rate constant in th')
- implicit units: 'D1' → h (from the popPK convention: 'Duration of zero-order input is conventionally expressed in hours; 0.710 is consistent with a duration in this unit.')
- implicit units: 'Fractional change in CLquiz with strong CYP3A inhibitors' — the LLM proposed 'dimensionless', whose dimension does not fit Q31; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CLquiz); Q63 (V c,quiz); Q30 (Q 1,quiz); Q64 (V p1,quiz); Q99 (Q 2,quiz)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quizartinib
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [0]
- model equation 'COVEffWT = (WT/75)^θ' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- model-stage split: 'final quizartinib model' is the final model of Vaddady_2024 (paper reports 2 stages: final ac886 model, final quizartinib model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 33/33 row label(s) assigned, 25 linked by role; re-tagged quizartinib→parent ×74, AC886→parent ×37

**Extraction notes:**
- unparsed cell cts70074-tbl-0003:row2:col5 = 'CLAC886'
- unparsed cell cts70074-tbl-0003:row3:col5 = 'V c,AC886'
- unparsed cell cts70074-tbl-0003:row4:col5 = 'V p,AC886'
- unparsed cell cts70074-tbl-0003:row5:col5 = 'Q AC886'
- unparsed cell cts70074-tbl-0003:row11:col5 = 'Fractional change in CLAC886 for non‐AML subjects'
- unparsed cell cts70074-tbl-0003:row12:col5 = 'Fractional change in CLAC886 for Black race'
- unparsed cell cts70074-tbl-0003:row13:col5 = 'Fractional change in CLAC886 with strong CYP3A inhibitors'
- unparsed cell cts70074-tbl-0003:row14:col5 = 'Fractional change in V c,AC886 with strong CYP3A inhibitors'
- unparsed cell cts70074-tbl-0003:row23:col5 = 'IIV CLAC886 AML patients'
- unparsed cell cts70074-tbl-0003:row24:col5 = 'IIV CLAC886 non‐AML subjects'
- unparsed cell cts70074-tbl-0003:row25:col5 = 'IIV V c,AC886'
- LLM selected parameter table(s) 3
- captured model equation COVEffWT = (WT/75)^θ

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q31 | fail | not captured | -0.301 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70074-tbl-0003:row2:col2', 'cts70074-tbl-0003:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70074-tbl-0003:row4:col2', 'cts70074-tbl-0003:row4:col3'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['cts70074-tbl-0003:row10:col2', 'cts70074-tbl-0003:row10:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cts70074-tbl-0003:row9:col1', 'cts70074-tbl-0003:row9:col2', 'cts70074-tbl-0003:row9:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70074-tbl-0003:row3:col2', 'cts70074-tbl-0003:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70074-tbl-0003:row5:col2', 'cts70074-tbl-0003:row5:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70074-tbl-0003:row7:col2', 'cts70074-tbl-0003:row7:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['cts70074-tbl-0003:row8:col2', 'cts70074-tbl-0003:row8:col3'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70074-tbl-0003:row6:col2', 'cts70074-tbl-0003:row6:col3'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70074-tbl-0003:row11:col2', 'cts70074-tbl-0003:row11:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.65 | not captured | not captured | ['cts70074-tbl-0003:row2:col2', 'cts70074-tbl-0003:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.65 L/h | not captured | not captured | ['cts70074-tbl-0003:row2:col2', 'cts70074-tbl-0003:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 371 L | not captured | not captured | ['cts70074-tbl-0003:row3:col2', 'cts70074-tbl-0003:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 312 L | not captured | not captured | ['cts70074-tbl-0003:row5:col2', 'cts70074-tbl-0003:row5:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_quizartinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vaddady_2024` / `Vaddady_2024::final_final_quizartinib_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:30 UTC</sub>
