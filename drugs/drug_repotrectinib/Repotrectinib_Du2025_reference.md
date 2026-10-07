<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;repotrectinib&quot;,&quot;href&quot;:&quot;drugs/drug_repotrectinib/&quot;},{&quot;label&quot;:&quot;Du_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Repotrectinib_Du2025_reference&quot;,&quot;label&quot;:&quot;Du_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_repotrectinib/Repotrectinib_Du2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# repotrectinib — `Repotrectinib_Du2025_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Du S et al., A Novel Empirical Autoinduction Model t…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.70036](https://doi.org/10.1002/psp4.70036)

## Model component
<dbs-pgx drug="repotrectinib" model-id="Repotrectinib_Du2025_reference" status="extracted" stale="false" population="healthy volunteers and patients with advanced solid tumors harboring ALK, ROS1, or NTRK1-3 rearrangements" measured-compound="repotrectinib" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 7 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h); systemic clearance | `Q22` · CL | 7.1 | L/h | 1.972222222222222e-06 | L/h | 4.5 | llm_confirmed (0.6) | psp470036-tbl-0002:row2:col1, psp470036-tbl-0002:row2:col2, psp470036-tbl-0002:row2:col3 | — | not captured |
| VC(L); central volume | `Q63` · V1 | 19.8 | L | 0.0198 | L | 9.5 | llm_confirmed (0.6) | psp470036-tbl-0002:row3:col1, psp470036-tbl-0002:row3:col2, psp470036-tbl-0002:row3:col3 | — | not captured |
| VP(L); peripheral volume | `Q64` · V2 | 221 | L | 0.221 | L | 4 | llm_confirmed (0.6) | psp470036-tbl-0002:row4:col1, psp470036-tbl-0002:row4:col2, psp470036-tbl-0002:row4:col3 | — | not captured |
| Q(L); intercompartmental clearance | `Q30` · Q | 4.98 | L/h | 1.3833333333333336e-06 | L/h | 6.5 | llm_confirmed (0.6) | psp470036-tbl-0002:row5:col1, psp470036-tbl-0002:row5:col2, psp470036-tbl-0002:row5:col3 | — | not captured |
| F1FASTED; bioavailability at fasted | `Q40` · Fab | 0.52 | not captured | not captured | not captured | 5.3 | llm_confirmed (0.6) | psp470036-tbl-0002:row10:col1, psp470036-tbl-0002:row10:col2, psp470036-tbl-0002:row10:col3 | — | not captured |
| F1Unknown; bioavailability at unknown food status | `Q87` · Frel | 0.533 | not captured | not captured | not captured | 5.6 | llm_corrected (0.6) | psp470036-tbl-0002:row13:col1, psp470036-tbl-0002:row13:col2, psp470036-tbl-0002:row13:col3 | — | not captured |
| ALAG1 (h); Lag time | `Q83` · tlag | 0.421 | h | 1515.6 | h | 1.7 | llm_confirmed (0.6) | psp470036-tbl-0002:row14:col1, psp470036-tbl-0002:row14:col2, psp470036-tbl-0002:row14:col3 | — | not captured |
| clqwt_body_weight_on_cl_and_q | `Q900` · clqwt_body_weight_on_cl_and_q | 0.477 | not captured | not captured | not captured | 14.3 | not captured (not captured) | psp470036-tbl-0002:row15:col1, psp470036-tbl-0002:row15:col2, psp470036-tbl-0002:row15:col3 | — | not captured |
| TC50 (h); time to achieve half of CLMAX | `Q900` · equation variable | 47.2 | not captured | not captured | not captured | 22.6 | llm (0.6) | psp470036-tbl-0002:row21:col1, psp470036-tbl-0002:row21:col2, psp470036-tbl-0002:row21:col3 | — | not captured |
| theta_q49_fasted_ka_h_absorption_rate_constant_at_fasted | `Q900` · theta_q49_fasted_ka_h_absorption_rate_constant_at_fasted | 0.0541 | not captured | not captured | not captured | 3.8 | not captured (not captured) | psp470036-tbl-0002:row6:col1, psp470036-tbl-0002:row6:col2, psp470036-tbl-0002:row6:col3 | — | not captured |
| theta_q49_fed_ka_h_absorption_rate_constant_at_fed | `Q900` · theta_q49_fed_ka_h_absorption_rate_constant_at_fed | 0.124 | not captured | not captured | not captured | 3.8 | not captured (not captured) | psp470036-tbl-0002:row7:col1, psp470036-tbl-0002:row7:col2, psp470036-tbl-0002:row7:col3 | — | not captured |
| theta_q49_fasted_kamodified_hour_absorption_rate_constant_at_modified | `Q900` · theta_q49_fasted_kamodified_hour_absorption_rate_constant_at_modified | 0.141 | not captured | not captured | not captured | 5.8 | not captured (not captured) | psp470036-tbl-0002:row8:col1, psp470036-tbl-0002:row8:col2, psp470036-tbl-0002:row8:col3 | — | not captured |
| theta_q49_food_kaunknown_h_absorption_rate_constant_at_unknown_status | `Q900` · theta_q49_food_kaunknown_h_absorption_rate_constant_at_unknown_status | 0.193 | not captured | not captured | not captured | 3.6 | not captured (not captured) | psp470036-tbl-0002:row9:col1, psp470036-tbl-0002:row9:col2, psp470036-tbl-0002:row9:col3 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.962 | not captured | not captured | not captured | 5.4 | not captured (not captured) | psp470036-tbl-0002:row16:col1, psp470036-tbl-0002:row16:col2, psp470036-tbl-0002:row16:col3 | — | not captured |
| theta_cl_age | `Q900` · theta_cl_age | -0.292 | not captured | not captured | not captured | 9.2 | not captured (not captured) | psp470036-tbl-0002:row22:col1, psp470036-tbl-0002:row22:col2, psp470036-tbl-0002:row22:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω 2 CLH; IIV on CL for healthy volunteers' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'ω 2 VC; IIV on VC' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'ω 2 Q; IIV on Q' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'ω 2 KA; IIV on KA' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'ω 2 F1; IIV on F1' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'ω 2 CLP; IIV on CL for Patients' routed out of structural estimates ('Interindividual variability (IIV)')
- table section residual_error: 'Proportional error in healthy volunteers' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive error in healthy volunteers' routed out of structural estimates ('Residual error')
- table section residual_error: 'Proportional error in patients' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive error in patients' routed out of structural estimates ('Residual error')
- covariate level 'CLQWT; Body weight on CL and Q' → Q900:clqwt_body_weight_on_cl_and_q = 0.477 (linear_fractional on Q22)
- routed 'VCPOP; population effct on V2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q22 ('CLMAX; maximum induced clearance', value '1.59') — already have one for this compound
- dropped PD-category row 'EC50 (ng/mL); concentration to achieve half of CLMAX' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470036-tbl-0002:row19:col1', 'psp470036-tbl-0002:row19:col2', 'psp470036-tbl-0002:row19:col3'])
- dropped PD-category row 'GAMMA; Hill coefficient' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470036-tbl-0002:row20:col1'])
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL (L/h); systemic clearance' → L/h (from the popPK convention: 'CL is systemic clearance; clearance is conventionally reported in L/h, consistent with the estimate of 7.1.')
- implicit units: 'VC(L); central volume' → L (from the popPK convention: 'VC is the central volume of distribution; volumes are conventionally reported in L, consistent with the estimate of 19.8')
- implicit units: 'VP(L); peripheral volume' → L (from the popPK convention: 'VP is the peripheral volume of distribution; volumes are conventionally reported in L, consistent with the estimate of 2')
- implicit units: 'Q(L); intercompartmental clearance' → L/h (from the popPK convention: 'Q is intercompartmental clearance; clearances are conventionally reported in L/h, consistent with the estimate of 4.98.')
- implicit units: 'ALAG1 (h); Lag time' → h (from the popPK convention: 'ALAG1 is an absorption lag time; lag times are conventionally reported in hours, consistent with the estimate of 0.421.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=repotrectinib

**Extraction notes:**
- unparsed cell psp470036-tbl-0002:row2:col5 = '[6.471, 7.729]'
- unparsed cell psp470036-tbl-0002:row3:col5 = '[16.12, 23.48]'
- unparsed cell psp470036-tbl-0002:row4:col5 = '[203.7, 238.3]'
- unparsed cell psp470036-tbl-0002:row5:col5 = '[4.347, 5.613]'
- unparsed cell psp470036-tbl-0002:row6:col5 = '[0.0501, 0.0581]'
- unparsed cell psp470036-tbl-0002:row7:col5 = '[0.1148, 0.1332]'
- unparsed cell psp470036-tbl-0002:row8:col5 = '[0.125, 0.157]'
- unparsed cell psp470036-tbl-0002:row9:col5 = '[0.1794, 0.2066]'
- unparsed cell psp470036-tbl-0002:row10:col5 = '[0.4665, 0.5735]'
- unparsed cell psp470036-tbl-0002:row11:col5 = '[0.6877, 0.8323]'
- unparsed cell psp470036-tbl-0002:row12:col5 = '[0.5628, 0.7152]'
- unparsed cell psp470036-tbl-0002:row13:col5 = '[0.4742, 0.5918]'
- unparsed cell psp470036-tbl-0002:row14:col5 = '[0.4073, 0.4347]'
- unparsed cell psp470036-tbl-0002:row15:col5 = '[0.3437, 0.6123]'
- unparsed cell psp470036-tbl-0002:row16:col5 = '[0.8601, 1.062]'
- unparsed cell psp470036-tbl-0002:row17:col5 = '[−0.8969, −0.8111]'
- unparsed cell psp470036-tbl-0002:row18:col5 = '[1.464, 1.716]'
- unparsed cell psp470036-tbl-0002:row19:col5 = '[62.93, 91.07]'
- unparsed cell psp470036-tbl-0002:row21:col5 = '[26.23, 68.17]'
- unparsed cell psp470036-tbl-0002:row22:col5 = '[−0.3445, −0.2395]'
- unparsed cell psp470036-tbl-0002:row24:col5 = '[0.0233, 0.0549]'
- unparsed cell psp470036-tbl-0002:row25:col5 = '[0.6161, 0.9199]'
- unparsed cell psp470036-tbl-0002:row26:col5 = '[0.3416, 0.5744]'
- unparsed cell psp470036-tbl-0002:row27:col5 = '[0.07121, 0.121]'
- unparsed cell psp470036-tbl-0002:row28:col5 = '[0.2413, 0.4687]'
- unparsed cell psp470036-tbl-0002:row29:col5 = '[0.2394, 0.3386]'
- unparsed cell psp470036-tbl-0002:row31:col5 = '[0.3261, 0.3439]'
- unparsed cell psp470036-tbl-0002:row33:col5 = '[0.4131, 0.4349]'
- unparsed cell psp470036-tbl-0002:row34:col5 = '[9.497, 11.7]'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470036-tbl-0002:row2:col1', 'psp470036-tbl-0002:row2:col2', 'psp470036-tbl-0002:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470036-tbl-0002:row5:col1', 'psp470036-tbl-0002:row5:col2', 'psp470036-tbl-0002:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470036-tbl-0002:row3:col1', 'psp470036-tbl-0002:row3:col2', 'psp470036-tbl-0002:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470036-tbl-0002:row4:col1', 'psp470036-tbl-0002:row4:col2', 'psp470036-tbl-0002:row4:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp470036-tbl-0002:row14:col1', 'psp470036-tbl-0002:row14:col2', 'psp470036-tbl-0002:row14:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.1 | not captured | not captured | ['psp470036-tbl-0002:row2:col1', 'psp470036-tbl-0002:row2:col2', 'psp470036-tbl-0002:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.1 L/h | not captured | not captured | ['psp470036-tbl-0002:row2:col1', 'psp470036-tbl-0002:row2:col2', 'psp470036-tbl-0002:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 19.8 L | not captured | not captured | ['psp470036-tbl-0002:row3:col1', 'psp470036-tbl-0002:row3:col2', 'psp470036-tbl-0002:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 221 L | not captured | not captured | ['psp470036-tbl-0002:row4:col1', 'psp470036-tbl-0002:row4:col2', 'psp470036-tbl-0002:row4:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_repotrectinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Du_2025` / `Du_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_modelica.zip" download>Repotrectinib_Du2025_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_fmi.zip" download>Repotrectinib_Du2025_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_matlab.zip" download>Repotrectinib_Du2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_matlab_simbio.zip" download>Repotrectinib_Du2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_sbml.zip" download>Repotrectinib_Du2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_cellml.zip" download>Repotrectinib_Du2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference.svg" alt="Repotrectinib_Du2025_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_repotrectinib/Repotrectinib_Du2025_reference/Repotrectinib_Du2025_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Repotrectinib_Du2025_reference_params.json` · controls `Repotrectinib_Du2025_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:57 UTC</sub>
