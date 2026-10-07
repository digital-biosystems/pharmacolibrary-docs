<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;aztreonam&quot;,&quot;href&quot;:&quot;drugs/drug_aztreonam/&quot;},{&quot;label&quot;:&quot;Das_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aztreonam — `Aztreonam_Das2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Das S et al., Dose selection for aztreonam-avibactam,…, European journal of clinica… (2024)
  ·  DOI: [10.1007/s00228-023-03609-x](https://doi.org/10.1007/s00228-023-03609-x)

## Model component
<dbs-pgx drug="aztreonam" model-id="Aztreonam_Das2024_reference" status="rejected" stale="false" population="patients with complicated infections (healthy subjects and patients with cIAI/cUTI)" measured-compound="aztreonam" parameterization="mechanistic" topology="3C"></dbs-pgx>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 11 extracted, plus 10 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1: CL*WT/70** 0.75 (L/h) | `Q354` · CLnorm | 5.21 | L/h | 1.4472222222222223e-06 | [l] / [h] | 3.73 | llm_corrected (0.6) | Das_2024_table_S3:row0:col1 | — | not captured |
| θ2: Vc*WT/70 (L) | `Q63` · V1 | 6.83 | L | 0.00683 | [l] | 4.43 | llm_confirmed (0.6) | Das_2024_table_S3:row1:col1 | — | 30.0 (25.4% RSE) |
| θ3: Q*WT/70** 0.75 (L/h) | `Q88` · AUC | 10.7 | L/h | not captured | [l] / [h] | 12.2 | llm (0.6) | Das_2024_table_S3:row2:col1 | — | not captured |
| θ4: Vp*WT/70 (L) | `Q64` · V2 | 5.76 | L | 0.0057599999999999995 | [l] | 5.27 | llm_confirmed (0.6) | Das_2024_table_S3:row3:col1 | — | 21.9 (20.5% RSE) |
| θ5: (CL + θ5*(CrCL–80)) | `Q900` · equation variable | 0.0158 | not captured | not captured | not captured | 21.3 | llm_corrected (0.6) | Das_2024_table_S3:row5:col1 | — | not captured |
| θ6: (Bmax) a | `Q332` · Bmax | 3.24 | not captured | not captured | not captured | 19.7 | llm_confirmed (0.6) | Das_2024_table_S3:row6:col1 | — | not captured |
| θ1: CL (L/h) | `Q22` · CL | 10.4 | L/h | 2.8888888888888894e-06 | [l] / [h] | 3.3 | llm_confirmed (0.6) | Das_2024_table_S4:row0:col1, Das_2024_table_S5:row0:col1 | — | 14.1 (12.5% RSE) |
| θ4: Q (L/h) | `Q30` · Q | 4.96 | L/h | 1.3777777777777778e-06 | [l] / [h] | 5.8 | llm (0.6) | Das_2024_table_S4:row3:col1 | — | not captured |
| θ6: Ka | `Q49` · kabs | 0.459 | 1/h | 0.0001275 | 1/h | 12.2 | llm_confirmed (0.6) | Das_2024_table_S4:row5:col1 | — | not captured |
| θ18: θ18** phase II cIAI patient effect on Vc | `Q61` · V | 2.66 | not captured | not captured | not captured | 11.2 | llm_corrected (0.6) | Das_2024_table_S4:row17:col1 | — | not captured |
| ηCL2 | `Q99` · Q2 | 0.313 | not captured | not captured | not captured | 2.3 | llm (0.6) | Das_2024_table_S5:row15:col1 | — | not captured |
| ηVp2 | `Q77` · V3 | 1.683 | not captured | not captured | not captured | 6.9 | llm_confirmed (0.6) | Das_2024_table_S5:row18:col1 | — | 12.72 (None% RSE) |
| theta_q356_category | `Q900` · theta_q356_category | 17.1 | not captured | not captured | not captured | 9.8 | not captured (not captured) | Das_2024_table_S4:row1:col1 | — | not captured |
| theta_clnorm_wt_power | `Q900` · theta_clnorm_wt_power | 0.206 | not captured | not captured | not captured | 57.3 | not captured (not captured) | Das_2024_table_S4:row9:col1 | — | not captured |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 0.516 | not captured | not captured | not captured | 35.3 | not captured (not captured) | Das_2024_table_S4:row10:col1 | — | not captured |
| theta_q_wt_power | `Q900` · theta_q_wt_power | 1.33 | not captured | not captured | not captured | 31.7 | not captured (not captured) | Das_2024_table_S4:row11:col1 | — | not captured |
| theta_equation_variable_wt_power | `Q900` · theta_equation_variable_wt_power | 1.23 | not captured | not captured | not captured | 15.3 | not captured (not captured) | Das_2024_table_S4:row12:col1 | — | not captured |
| theta_q1_age | `Q900` · theta_q1_age | -1.13 | not captured | not captured | not captured | 47.3 | not captured (not captured) | Das_2024_table_S4:row13:col1 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | 0.957 | not captured | not captured | not captured | 3.6 | not captured (not captured) | Das_2024_table_S4:row14:col1 | — | not captured |
| theta_cl_category | `Q900` · theta_cl_category | 20.5 | L/h | not captured | not captured | 7.9 | not captured (not captured) | Das_2024_table_S5:row5:col1 | — | not captured |
| theta_cl_crcl_power | `Q900` · theta_cl_crcl_power | 1.1 | not captured | not captured | not captured | 2.1 | not captured (not captured) | Das_2024_table_S5:row6:col1 | — | not captured |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 0.998 | not captured | not captured | not captured | 8.2 | not captured (not captured) | Das_2024_table_S5:row12:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'θ1: CL*WT/70** 0.75 (L/h)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ2: Vc*WT/70 (L)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ4: Vp*WT/70 (L)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ1: CL (L/h)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ3: Vc (L)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ4: Q (L/h)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ5: Vp (L)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ1: CL (L/h)' routed out of structural estimates ('IIV, %')
- table section iiv: 'θ2: Vc (L)' routed out of structural estimates ('IIV, %')
- table section iiv: 'θ3: Q (L/h)' routed out of structural estimates ('IIV, %')
- table section iiv: 'θ4: Vp (L)' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηCL2' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηVc2' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηCL–Vc covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηVp2' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηVp–ηCL covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηVp–ηVc covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηQ 2' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηQ–ηCL covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηQ–ηVc covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηQ–ηVp covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'Proportional error, phase Ib' routed out of structural estimates ('IIV, %')
- table section iiv: 'Additive error, phase Ib' routed out of structural estimates ('IIV, %')
- table section iiv: 'Proportional error, phase IIb' routed out of structural estimates ('IIV, %')
- table section iiv: 'Proportional error, phase IIIb' routed out of structural estimates ('IIV, %')
- column 'numbers of subjects (number of samples)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'modeling objectives and simulations' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Aztreonam Iteration 1aAztreonam-avibactam Phase I dose-finding trial (interim data) [18]' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col1', 'Tab2:row1:col2'])
- dropped unlinked row (NIL): 'Aztreonam Iteration 1bAztreonam-avibactam Phase I dose-finding trial (interim data) [18]Published aztreonam renal impairment studies [32, 33]' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1'])
- dropped unlinked row (NIL): 'Avibactam Iteration 1Ceftazidime-avibactam program: 5 Phase I trials, 1 Phase II trial in cIAIAztreonam-avibactam Phase I dose-finding trial (interim data) [18]' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col1'])
- dropped unlinked row (NIL): 'Aztreonam Iteration 2Aztreonam-avibactam Phase I dose-finding trial (final data) [18]Published aztreonam renal impairment studies [32, 33]' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col1', 'Tab2:row4:col2'])
- dropped unlinked row (NIL): 'Avibactam Iteration 2Ceftazidime-avibactam program: 11 Phase I trials, 2 Phase II trials, 4 Phase III trials [21, 22]' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col1'])
- unit_dimension_mismatch: 'θ3: Q*WT/70** 0.75 (L/h)' → Q88 (unit '[length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'θ7: (B50) a' — extend the ontology if this is a real PK parameter (source ['Das_2024_table_S3:row7:col1'])
- dropped duplicate Q900 ('θ8: (IF (AGE&gt;65) Vc&Vp*θ8AGE)', value '0.779') — already have one for this compound
- unit_dimension_unknown: 'CrCL–80' (equation variable)
- dropped duplicate Q900 ('θ9: (IF CrCL&lt;80) CrCL= θ5* θ9*(CrCL–80)', value '2.86') — already have one for this compound
- dropped duplicate Q63 ('θ3: Vc (L)', value '12.8') — already have one for this compound
- dropped duplicate Q63 ('θ5: Vp (L)', value '6.99') — already have one for this compound
- dropped unlinked row (NIL): 'θ7: F1' — extend the ontology if this is a real PK parameter (source ['Das_2024_table_S4:row6:col1'])
- dropped duplicate Q22 ('8: CL, (nCrCL/80)**8, nCrCL &lt;80 mL/min and not ESRD', value '1.23') — already have one for this compound
- dropped duplicate Q22 ('θ9: CL, Change in CL due to ESRD', value '0.0447') — already have one for this compound
- dropped duplicate Q22 ('θ16: Concomitant ceftazidime-avibactam on CL', value '0.963') — already have one for this compound
- dropped duplicate Q22 ('θ17: θ17** phase II cIAI patient effect on CL', value '1.45') — already have one for this compound
- dropped duplicate Q63 ('θ2: Vc (L)', value '12.0') — already have one for this compound
- dropped duplicate Q30 ('θ3: Q (L/h)', value '4.99') — already have one for this compound
- dropped unlinked row (NIL): 'θ4: Vp (L)' — extend the ontology if this is a real PK parameter (source ['Das_2024_table_S5:row3:col1'])
- unit_dimension_unknown: 'CL*θ5' (equation variable)
- dropped duplicate Q900 ('θ5: ESRD effect on CL (CL*θ5)', value '0.0671') — already have one for this compound
- dropped unlinked row (NIL): '8: CL, (1+8*(CrCL–80)), CrCL ≥80 mL/min' — extend the ontology if this is a real PK parameter (source ['Das_2024_table_S5:row7:col1'])
- dropped duplicate Q63 ('θ9: Population effect on Vc (cIAI, phase II), Vc*(1+9)', value '1.34') — already have one for this compound
- dropped duplicate Q22 ('θ10: Population effect on CL (cIAI, phase II), CL*(1+10)', value '0.305') — already have one for this compound
- dropped duplicate Q63 ('θ11: Population effect on Vc (cUTI), Vc*(1+11)', value '0.394') — already have one for this compound
- dropped duplicate Q63 ('θ12: Population effect on Vc (cIAI, phase III), Vc*(1+12)', value '0.275') — already have one for this compound
- dropped duplicate Q900 ('θ16: APACHE effect on CL, CL*(1+16)', value '-0.2') — already have one for this compound
- dropped duplicate Q64 ('ηVc2', value '1.009') — already have one for this compound
- dropped duplicate Q99 ('ηQ 2', value '5.302') — already have one for this compound
- covariate effect for Q356 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'θ6: Ka' → 1/h (from the popPK convention: 'Ka (absorption rate constant) is a first-order rate constant; the value 0.459 is consistent with a typical absorption ra')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (θ2: Vc*WT/70 (L)); Q64 (θ4: Vp*WT/70 (L)); Q22 (θ1: CL (L/h)); Q30 (θ4: Q (L/h)); Q61 (θ18: θ18** phase II cIAI patient effect on Vc); Q99 (ηCL2)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=aztreonam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col3 = 'Various aztreonam PK scenarios evaluated in Iteration 1a simulations, including patient factors for patients with CF and cIAI (see Supplementary Table 1)Patient factors for Phase II patients with cIAI and variability from avibactam models in the ceftazidime-avibactam program (Case 4) used for Iteration 1b simulations'
- unparsed cell Tab2:row4:col3 = 'Scaling of aztreonam Vc larger in patients than healthy volunteers i.e., + 27.5% as per avibactamPatient factors and variability from avibactam models in ceftazidime-avibactam program (Phase I, Phase II cIAI, Phase III cIAI and cUTI)Simulations used ceftazidime-avibactam Phase III age, weight, and CrCL covariate distributionsNonlinear plasma protein binding for aztreonam'
- companion parameter table S3 transcribed (15 record(s))
- companion parameter table S4 transcribed (22 record(s))
- companion parameter table S5 transcribed (46 record(s))
- LLM selected parameter table(s) S2, S3, S4, S5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_center_consistency_wt | fail | not captured | [70.0, 71.2] | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Das_2024_table_S4:row0:col1', 'Das_2024_table_S5:row0:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Das_2024_table_S4:row3:col1'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Das_2024_table_S3:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Das_2024_table_S4:row5:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Das_2024_table_S3:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Das_2024_table_S3:row3:col1'] |
| C5_dimension_Q88 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['Das_2024_table_S3:row2:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['Das_2024_table_S4:row17:col1'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 | not captured | not captured | not captured | ['Das_2024_table_S5:row18:col1'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Das_2024_table_S5:row15:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.4 | not captured | not captured | ['Das_2024_table_S4:row0:col1', 'Das_2024_table_S5:row0:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.4 L/h | not captured | not captured | ['Das_2024_table_S4:row0:col1', 'Das_2024_table_S5:row0:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.83 L | not captured | not captured | ['Das_2024_table_S3:row1:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.76 L | not captured | not captured | ['Das_2024_table_S3:row3:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_aztreonam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Das_2024` / `Das_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:12 UTC</sub>
