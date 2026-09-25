<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticagrelor&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/&quot;},{&quot;label&quot;:&quot;Kathman_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ticagrelor_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_Kathman2022_reference&quot;,&quot;label&quot;:&quot;Kathman_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Kathman2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ticagrelor_strand2019_reference&quot;,&quot;label&quot;:&quot;\u00c5strand_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ticagrelor — `Ticagrelor_Kathman2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** no distribution volume and no clearance/elimination — not a compartmental popPK model (exposure/outcome paper); C5 dimension mismatch on a structural parameter
**How to address:** read the paper and record the missing values by hand, or leave the record rejected — there is nothing here to build.
<sub>owner: **curator**</sub>

> **Dose compound ≠ measured compound:** dosed `ticagrelor, PB2452`, measured `PB2452`.

## Citation
Kathman SJ; Wheeler JJ; Bhatt DL; Arnold SE; Lee JS et al. (2022). CPT: pharmacometrics & systems pharmacology 11
  ·  DOI: [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734)

## Model component
<dbs-pgx drug="ticagrelor" model-id="Ticagrelor_Kathman2022_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="PB2452" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CL/F, Q3/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| THETA2 | `Q99` · Q2 | 1.05 | not captured | not captured | not captured | not captured | llm (0.6) | psp412734-tbl-0003:row7:col1, psp412734-tbl-0003:row7:col2, psp412734-tbl-0003:row7:col3, Kathman_2022_table_2:row4:col1, Kathman_2022_table_2:row4:col2, Kathman_2022_table_2:row4:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Kon (nmol−1 × h−1) = EXP(THETA2) | Q329 | not captured | llm_confirmed |
| Kd (nmol) = EXP(−4) | Q331 | not captured | llm_confirmed |
| Ktr (h−1) = EXP(THETA4 + THETA13*(LOG(WT)−4.35)) | Q306 | not captured | llm_confirmed |
| CL/F (L/h) = EXP(2.81) clearance of TICA | Q27 | not captured | llm_corrected |
| V1/F (L) = EXP(5.04) central volume of TICA | Q290 | not captured | llm_corrected |
| V2/F (L) = EXP(4.02) peripheral volume of TICA | Q82 | not captured | llm_corrected |
| Q1/F L (h) = EXP(2.34) intercompartmental clearance of TICA | Q309 | not captured | llm_corrected |
| CLM (L/h) = EXP(THETA11 + THETA10*(LOG(WT)−4.35)) clearance of TAM | Q22 | not captured | llm_confirmed |
| VM1 (L) = EXP(1.95) central volume of TAM | Q63 | not captured | llm_confirmed |
| VM2 (L) = EXP(3.74) peripheral volume of TAM | Q64 | not captured | llm_confirmed |
| Q_ant (L/h) = EXP(−0.765) intercompartmental clearance of PB2452 | Q30 | not captured | llm_confirmed |
| Koff2 = Kon*Kd2 | Q900 | not captured | llm_corrected |
| theta_q321_category | Q900 | not captured | not captured |
| theta_q320_category | Q900 | not captured | not captured |
| theta_q321_wt | Q900 | not captured | not captured |
| theta_q49_category | Q900 | not captured | not captured |
| theta_q45_category | Q900 | not captured | not captured |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'THETA1' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row3:col1', 'psp412734-tbl-0003:row3:col2', 'psp412734-tbl-0003:row3:col3', 'Kathman_2022_table_2:row2:col1', 'Kathman_2022_table_2:row2:col2', 'Kathman_2022_table_2:row2:col3'])
- unit_dimension_unknown: 'THETA2' (kon)
- unit_dimension_mismatch: 'Kd (nmol) = EXP(−4)' → Q331 (unit '[luminosity] / [length] ** 2' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_unknown: 'THETA3' (KD)
- dropped duplicate Q331 ('Kd2 (nmol) = EXP(THETA3)', value None) — already have one for this compound
- dropped unlinked row (NIL): 'THETA3' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row11:col1', 'psp412734-tbl-0003:row11:col2', 'psp412734-tbl-0003:row11:col3', 'Kathman_2022_table_2:row6:col1', 'Kathman_2022_table_2:row6:col2', 'Kathman_2022_table_2:row6:col3'])
- unit_dimension_mismatch: 'Ktr (h−1) = EXP(THETA4 + THETA13*(LOG(WT)−4.35))' → Q306 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'THETA4' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row13:col1', 'psp412734-tbl-0003:row13:col2', 'psp412734-tbl-0003:row13:col3', 'Kathman_2022_table_2:row8:col1', 'Kathman_2022_table_2:row8:col2', 'Kathman_2022_table_2:row8:col3'])
- dropped unlinked row (NIL): 'THETA13' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row14:col1', 'psp412734-tbl-0003:row14:col2', 'psp412734-tbl-0003:row14:col3'])
- unit_dimension_unknown: 'THETA5' (kon)
- dropped duplicate Q329 ('Kon2 (nmol−1 × h−1) = EXP(THETA5)', value None) — already have one for this compound
- dropped unlinked row (NIL): 'THETA5' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row16:col1', 'psp412734-tbl-0003:row16:col2', 'psp412734-tbl-0003:row16:col3'])
- dropped unlinked row (NIL): 'THETA6' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row18:col1', 'psp412734-tbl-0003:row18:col2', 'psp412734-tbl-0003:row18:col3'])
- dropped unlinked row (NIL): 'THETA7' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row20:col1', 'psp412734-tbl-0003:row20:col2', 'psp412734-tbl-0003:row20:col3'])
- dropped unlinked row (NIL): 'THETA8' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row22:col1', 'psp412734-tbl-0003:row22:col2', 'psp412734-tbl-0003:row22:col3'])
- dropped unlinked row (NIL): 'THETA12' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row23:col1', 'psp412734-tbl-0003:row23:col2', 'psp412734-tbl-0003:row23:col3'])
- dropped unlinked row (NIL): 'THETA9' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row25:col1', 'psp412734-tbl-0003:row25:col2', 'psp412734-tbl-0003:row25:col3'])
- unit_dimension_mismatch: 'CL/F (L/h) = EXP(2.81) clearance of TICA' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V1/F (L) = EXP(5.04) central volume of TICA' → Q290 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'V2/F (L) = EXP(4.02) peripheral volume of TICA' → Q82 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Q1/F L (h) = EXP(2.34) intercompartmental clearance of TICA' → Q309 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'CLM (L/h) = EXP(THETA11 + THETA10*(LOG(WT)−4.35)) clearance of TAM' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'THETA10' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row37:col1', 'psp412734-tbl-0003:row37:col2', 'psp412734-tbl-0003:row37:col3'])
- dropped unlinked row (NIL): 'THETA11' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row38:col1', 'psp412734-tbl-0003:row38:col2', 'psp412734-tbl-0003:row38:col3'])
- unit_dimension_mismatch: 'VM1 (L) = EXP(1.95) central volume of TAM' → Q63 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'VM2 (L) = EXP(3.74) peripheral volume of TAM' → Q64 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Q2M (L/h) = EXP(1.48) intercompartment clearance of TAM' → Q99 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q99 ('Q2M (L/h) = EXP(1.48) intercompartment clearance of TAM', value None) — already have one for this compound
- unit_dimension_mismatch: 'CL_ant (L/h) = EXP(0.631) clearance of PB2452' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CL_ant (L/h) = EXP(0.631) clearance of PB2452', value None) — already have one for this compound
- unit_dimension_mismatch: 'Q_ant (L/h) = EXP(−0.765) intercompartmental clearance of PB2452' → Q30 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V_ant (L) = EXP(1.05) central volume of PB2452' → Q63 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q63 ('V_ant (L) = EXP(1.05) central volume of PB2452', value None) — already have one for this compound
- unit_dimension_mismatch: 'V_ant_perp (L) = EXP(1.28) peripheral volume of PB2452' → Q64 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q64 ('V_ant_perp (L) = EXP(1.28) peripheral volume of PB2452', value None) — already have one for this compound
- unit_dimension_unknown: 'THETA1' (CL)
- dropped duplicate Q22 ('CL (L/h) = EXP(THETA1)', value None) — already have one for this compound
- unit_dimension_unknown: 'THETA2' (V1)
- dropped duplicate Q63 ('V1 (L) = EXP(THETA2)', value None) — already have one for this compound
- unit_dimension_unknown: 'THETA3' (Q)
- dropped duplicate Q30 ('Q (L/h) = EXP(THETA3)', value None) — already have one for this compound
- unit_dimension_unknown: 'THETA4' (V2)
- dropped duplicate Q64 ('V2 (L) = EXP(THETA4)', value None) — already have one for this compound
- covariate effect for Q321 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q320 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q320 — ambiguous identity (two shifts cannot share one category)
- dropped duplicate covariate effect 'category'/'' on Q321 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q45 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=PB2452
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q49 (kabs) from Henrich_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Åstrand_2019's review values (primary lacked it)
- removed gap-filled parent disposition (Q49, Q83): this record measures 'PB2452', not ticagrelor, and reports no metabolite CL/V — the imported values describe a compartment this record did not measure

**Extraction notes:**
- unparsed cell psp412734-tbl-0003:row3:col4 = '23.3%'
- unparsed cell psp412734-tbl-0003:row7:col4 = '43.6%'
- unparsed cell psp412734-tbl-0003:row11:col4 = '25.9%'
- unparsed cell psp412734-tbl-0003:row13:col4 = '25.0%'
- unparsed cell psp412734-tbl-0003:row16:col4 = '30.4%'
- unparsed cell psp412734-tbl-0003:row18:col4 = '23.6%'
- unparsed cell psp412734-tbl-0003:row20:col4 = '59.8%'
- unparsed cell psp412734-tbl-0003:row22:col4 = '25.3%'
- unparsed cell psp412734-tbl-0003:row25:col4 = '20.7%'
- unparsed cell psp412734-tbl-0003:row37:col4 = '23.9%'
- unparsed cell psp412734-tbl-0003:row41:col4 = '10% Fixed'
- unparsed cell psp412734-tbl-0003:row45:col4 = '5% Fixed'
- unparsed cell Kathman_2022_table_2:row2:col4 = '37.8%'
- unparsed cell Kathman_2022_table_2:row4:col4 = '40.4%'
- unparsed cell Kathman_2022_table_2:row6:col4 = '42.8%'
- unparsed cell Kathman_2022_table_2:row8:col4 = '62.9%'
- companion parameter table 2 transcribed (28 record(s), model stage 'final')
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row36:col1', 'psp412734-tbl-0003:row36:col2', 'psp412734-tbl-0003:row36:col3'] |
| C5_dimension_Q27 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row28:col1', 'psp412734-tbl-0003:row28:col2', 'psp412734-tbl-0003:row28:col3'] |
| C5_dimension_Q290 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row30:col1', 'psp412734-tbl-0003:row30:col2', 'psp412734-tbl-0003:row30:col3'] |
| C5_dimension_Q30 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row47:col1', 'psp412734-tbl-0003:row47:col2', 'psp412734-tbl-0003:row47:col3'] |
| C5_dimension_Q306 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row12:col1', 'psp412734-tbl-0003:row12:col2', 'psp412734-tbl-0003:row12:col3'] |
| C5_dimension_Q309 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row34:col1', 'psp412734-tbl-0003:row34:col2', 'psp412734-tbl-0003:row34:col3'] |
| C5_dimension_Q331 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row8:col1', 'psp412734-tbl-0003:row8:col2', 'psp412734-tbl-0003:row8:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Henrich_2021:review'] |
| C5_dimension_Q63 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row39:col1', 'psp412734-tbl-0003:row39:col2', 'psp412734-tbl-0003:row39:col3'] |
| C5_dimension_Q64 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row41:col1', 'psp412734-tbl-0003:row41:col2', 'psp412734-tbl-0003:row41:col3'] |
| C5_dimension_Q82 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row32:col1', 'psp412734-tbl-0003:row32:col2', 'psp412734-tbl-0003:row32:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Åstrand_2019:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ticagrelor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kathman_2022` / `Kathman_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-05 23:44 UTC</sub>
