<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;apomorphine&quot;,&quot;href&quot;:&quot;drugs/drug_apomorphine/&quot;},{&quot;label&quot;:&quot;Agbo_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# apomorphine — `Apomorphine_Agbo2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Agbo F et al., Population pharmacokinetic analysis of…, Clinical and translational… (2021)
  ·  DOI: [10.1111/cts.13008](https://doi.org/10.1111/cts.13008)

## Model component
<dbs-pgx drug="apomorphine" model-id="Apomorphine_Agbo2021_reference" status="rejected" stale="false" population="healthy subjects and patients with Parkinson&#39;s disease" measured-compound="apomorphine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 8 extracted, plus 7 covariate effects.

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 80.7 | L/h | 2.241666666666667e-05 | L/h | 25.0 | exact (1.0) | cts13008-tbl-0003:row1:col1, cts13008-tbl-0003:row1:col2, cts13008-tbl-0003:row1:col3, cts13008-tbl-0003:row1:col4 | — | not captured |
| V 2/F | `Q290` · V1/F | 438 | L | 0.438 | L | 8.39 | exact (1.0) | cts13008-tbl-0003:row2:col1, cts13008-tbl-0003:row2:col2, cts13008-tbl-0003:row2:col3, cts13008-tbl-0003:row2:col4 | — | not captured |
| V 3/F | `Q82` · V2/F | 1.42 | L | 0.00142 | L | 34.2 | exact (1.0) | cts13008-tbl-0003:row3:col1, cts13008-tbl-0003:row3:col2, cts13008-tbl-0003:row3:col3, cts13008-tbl-0003:row3:col4 | — | 41.7 (None% RSE) |
| k30 | `Q47` · kel | 1.28 | 1/h | 0.00035555555555555557 | 1/h | 38.5 | exact (1.0) | cts13008-tbl-0003:row6:col1, cts13008-tbl-0003:row6:col2, cts13008-tbl-0003:row6:col3, cts13008-tbl-0003:row6:col4 | — | not captured |
| fraction_not_swallowed_and_available_for_sublingual_absorption | `Q900` · fraction_not_swallowed_and_available_for_sublingual_absorption | 0.910 | not captured | not captured | not captured | 5.86 | not captured (not captured) | cts13008-tbl-0003:row8:col1, cts13008-tbl-0003:row8:col2, cts13008-tbl-0003:row8:col3, cts13008-tbl-0003:row8:col4 | — | not captured |
| Fraction absorbed relative to subcutaneous administration | `Q87` · Frel | 0.202 | not captured | not captured | not captured | 12.8 | llm_corrected (0.6) | cts13008-tbl-0003:row9:col1, cts13008-tbl-0003:row9:col2, cts13008-tbl-0003:row9:col3, cts13008-tbl-0003:row9:col4 | — | not captured |
| k26 | `Q47` · kel | 0.613 | 1/h | 0.00017027777777777777 | 1/h | 14.0 | exact (1.0) | cts13008-tbl-0003:row10:col1, cts13008-tbl-0003:row10:col2, cts13008-tbl-0003:row10:col3, cts13008-tbl-0003:row10:col4 | — | not captured |
| k62 | `Q305` · kfm | 0.00480 | 1/h | 1.3333333333333332e-06 | 1/h | 15.9 | exact (1.0) | cts13008-tbl-0003:row11:col1, cts13008-tbl-0003:row11:col2, cts13008-tbl-0003:row11:col3, cts13008-tbl-0003:row11:col4 | — | not captured |
| contact_time_under_the_tongue_for_sublingual_film_on_k_a_for_sublingual_administration | `Q900` · contact_time_under_the_tongue_for_sublingual_film_on_k_a_for_sublingual_administration | -0.194 | not captured | not captured | not captured | 61.5 | not captured (not captured) | cts13008-tbl-0003:row13:col1, cts13008-tbl-0003:row13:col2, cts13008-tbl-0003:row13:col3 | — | not captured |
| body_weight_on_v_2_f | `Q900` · body_weight_on_v_2_f | 1.53 | not captured | not captured | not captured | 24.8 | not captured (not captured) | cts13008-tbl-0003:row14:col1, cts13008-tbl-0003:row14:col2, cts13008-tbl-0003:row14:col3, cts13008-tbl-0003:row14:col4 | — | not captured |
| theta_q49_category | `Q900` · theta_q49_category | 6.58 | not captured | not captured | not captured | 16.2 | not captured (not captured) | cts13008-tbl-0003:row4:col1, cts13008-tbl-0003:row4:col2, cts13008-tbl-0003:row4:col3, cts13008-tbl-0003:row4:col4 | — | not captured |
| theta_q95_category | `Q900` · theta_q95_category | 17.6 | not captured | not captured | not captured | 8.40 | not captured (not captured) | cts13008-tbl-0003:row5:col1, cts13008-tbl-0003:row5:col2, cts13008-tbl-0003:row5:col3, cts13008-tbl-0003:row5:col4 | — | not captured |
| theta_q49_category | `Q900` · theta_q49_category | 0.205 | not captured | not captured | not captured | 87.9 | not captured (not captured) | cts13008-tbl-0003:row7:col1, cts13008-tbl-0003:row7:col2, cts13008-tbl-0003:row7:col3 | — | not captured |
| theta_q78_sex | `Q900` · theta_q78_sex | -0.310 | not captured | not captured | not captured | 21.4 | not captured (not captured) | cts13008-tbl-0003:row16:col1, cts13008-tbl-0003:row16:col2, cts13008-tbl-0003:row16:col3 | — | not captured |
| Ka | `Q49` · kabs | 14.9 | h−1 | 0.004138888888888889 | 1/h | not captured | review_gapfill (0.7) | Nasser_2024:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Apomorphine' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Apomorphine sulfate' routed out of structural estimates ('Residual variability')
- table section iiv: 'k23' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V 2/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V 3/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'k a for sublingual administration' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'F 1' routed out of structural estimates ('Interindividual variability')
- column 'ase' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Fraction not swallowed and available for sublingual absorption' → Q900:fraction_not_swallowed_and_available_for_sublingual_absorption = 0.910 (additive_shift on Q27)
- dropped unlinked row (NIL): 'Dose of sublingual apomorphine on F 1' — extend the ontology if this is a real PK parameter (source ['cts13008-tbl-0003:row12:col1', 'cts13008-tbl-0003:row12:col2', 'cts13008-tbl-0003:row12:col3'])
- covariate level 'Contact time under the tongue for sublingual film on k a for sublingual administration' → Q900:contact_time_under_the_tongue_for_sublingual_film_on_k_a_for_sublingual_administration = -0.194 (additive_shift on Q27)
- covariate level 'Body weight on V 2/F' → Q900:body_weight_on_v_2_f = 1.53 (linear_fractional on Q27)
- dropped duplicate Q82 ('Study CTH−103 on V 2/F', value '-0.555') — already have one for this compound
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q95 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q78 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL/F' → L/h (from the paper text: "The text states: 'Mean (95% CI) typical apomorphine apparent systemic clearance and apparent central volume of distribut")
- implicit units: 'V 2/F' → L (from the paper text: "The text states: 'Mean (95% CI) typical apomorphine apparent systemic clearance and apparent central volume of distribut")
- implicit units: 'V 3/F' → L (from the popPK convention: 'V3/F represents the apparent volume of distribution of the peripheral compartment. In population PK, volumes of distribu')
- implicit units: 'k30' → 1/h (from the popPK convention: 'k30 is an elimination rate constant (kel). First-order rate constants are conventionally expressed in reciprocal time (1')
- implicit units: 'k26' → 1/h (from the popPK convention: 'k26 is an elimination rate constant (kel) for the metabolite or second compartment. First-order rate constants are conve')
- implicit units: 'k62' → 1/h (from the popPK convention: 'k62 is a first-order rate constant governing the formation of a metabolite (kfm). First-order rate constants are convent')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=apomorphine
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 43 linked by role; re-tagged parent→apomorphine-sulfate ×15
- molar mass: no plausible PubChem entry for 'apomorphine-sulfate' ('apomorphine-sulfate') — left in mass units
- molar mass: none found for 'apomorphine-sulfate' — its concentrations stay mass-only
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Nasser_2024's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts13008-tbl-0003:row4:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row5:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row6:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row7:col4 = '(−0.15 to 0.55)'
- unparsed cell cts13008-tbl-0003:row7:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row10:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row11:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row12:col4 = '(−0.870 to 0.459)'
- unparsed cell cts13008-tbl-0003:row13:col4 = '(–0.428 to –0.0400)'
- unparsed cell cts13008-tbl-0003:row15:col4 = '(–0.648 to −0.462)'
- unparsed cell cts13008-tbl-0003:row16:col4 = '(–0.440 to –0.180)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts13008-tbl-0003:row1:col1', 'cts13008-tbl-0003:row1:col2', 'cts13008-tbl-0003:row1:col3', 'cts13008-tbl-0003:row1:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13008-tbl-0003:row2:col1', 'cts13008-tbl-0003:row2:col2', 'cts13008-tbl-0003:row2:col3', 'cts13008-tbl-0003:row2:col4'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['cts13008-tbl-0003:row11:col1', 'cts13008-tbl-0003:row11:col2', 'cts13008-tbl-0003:row11:col3', 'cts13008-tbl-0003:row11:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['cts13008-tbl-0003:row6:col1', 'cts13008-tbl-0003:row6:col2', 'cts13008-tbl-0003:row6:col3', 'cts13008-tbl-0003:row6:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['cts13008-tbl-0003:row10:col1', 'cts13008-tbl-0003:row10:col2', 'cts13008-tbl-0003:row10:col3', 'cts13008-tbl-0003:row10:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Nasser_2024:review'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13008-tbl-0003:row3:col1', 'cts13008-tbl-0003:row3:col2', 'cts13008-tbl-0003:row3:col3', 'cts13008-tbl-0003:row3:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 80.7 L/h | not captured | not captured | ['cts13008-tbl-0003:row1:col1', 'cts13008-tbl-0003:row1:col2', 'cts13008-tbl-0003:row1:col3', 'cts13008-tbl-0003:row1:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 438 L | not captured | not captured | ['cts13008-tbl-0003:row2:col1', 'cts13008-tbl-0003:row2:col2', 'cts13008-tbl-0003:row2:col3', 'cts13008-tbl-0003:row2:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.42 L | not captured | not captured | ['cts13008-tbl-0003:row3:col1', 'cts13008-tbl-0003:row3:col2', 'cts13008-tbl-0003:row3:col3', 'cts13008-tbl-0003:row3:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_apomorphine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Agbo_2021` / `Agbo_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:09 UTC</sub>
