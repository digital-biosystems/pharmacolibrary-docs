<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;letermovir&quot;,&quot;href&quot;:&quot;drugs/drug_letermovir/&quot;},{&quot;label&quot;:&quot;Prohn_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# letermovir — `Letermovir_Prohn2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Prohn M et al., Population pharmacokinetics of letermov…, CPT: pharmacometrics & syst… (2021)
  ·  DOI: [10.1002/psp4.12593](https://doi.org/10.1002/psp4.12593)

## Model component
<dbs-pgx drug="letermovir" model-id="Letermovir_Prohn2021_reference" status="rejected" stale="false" population="healthy participants and allogeneic hematopoietic cell transplantation recipients" measured-compound="letermovir" parameterization="mechanistic" topology="3C"></dbs-pgx>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 11 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance Vmax, L/h | `Q22` · CL | 12.2 | L/h | 3.3888888888888884e-06 | [l] / [h] | 2.60 | boundary_llm_dim_refused (0.8) | psp412593-tbl-0002:row1:col2, psp412593-tbl-0002:row1:col3, psp412593-tbl-0002:row1:col4, psp412593-tbl-0002:row1:col5 | — | 0.0641 (9.90% RSE) |
| Central volume of distribution, L | `Q63` · V1 | 7.45 | L | 0.00745 | [l] | 6.30 | boundary_compartment (0.9) | psp412593-tbl-0002:row3:col2, psp412593-tbl-0002:row3:col3, psp412593-tbl-0002:row3:col4, psp412593-tbl-0002:row3:col5 | — | 0.0613 (30.7% RSE) |
| Asian effect on Vd | `Q61` · V | -0.280 | not captured | not captured | not captured | 8.80 | llm_confirmed (0.6) | psp412593-tbl-0002:row5:col2, psp412593-tbl-0002:row5:col3, psp412593-tbl-0002:row5:col4 | — | not captured |
| Number of transit compartments | `Q311` · n_transit | 3.60 | not captured | not captured | not captured | 1.70 | exact (1.0) | psp412593-tbl-0002:row6:col2, psp412593-tbl-0002:row6:col3, psp412593-tbl-0002:row6:col4, psp412593-tbl-0002:row6:col5 | — | not captured |
| Mean transit time, h | `Q81` · MTT | 1.04 | h | not captured | [h] | 4.20 | exact (1.0) | psp412593-tbl-0002:row7:col2, psp412593-tbl-0002:row7:col3, psp412593-tbl-0002:row7:col4, psp412593-tbl-0002:row7:col5 | — | 0.0836 (14.2% RSE) |
| Peripheral volume, L | `Q64` · V2 | 25.8 | L | 0.0258 | [l] | 4.00 | exact (1.0) | psp412593-tbl-0002:row10:col2, psp412593-tbl-0002:row10:col3, psp412593-tbl-0002:row10:col4, psp412593-tbl-0002:row10:col5, psp412593-tbl-0002:row12:col2, psp412593-tbl-0002:row12:col3, psp412593-tbl-0002:row12:col4, psp412593-tbl-0002:row12:col5, psp412593-tbl-0002:row19:col2, psp412593-tbl-0002:row19:col3, psp412593-tbl-0002:row19:col4, psp412593-tbl-0002:row19:col5, Prohn_2021_table_3:row3:col1, Prohn_2021_table_3:row3:col3, Prohn_2021_table_3:row3:col4 | — | 0.229 (36.7% RSE) |
| Bioavailability | `Q40` · Fab | 0.938 | not captured | not captured | not captured | 2.10 | exact (1.0) | psp412593-tbl-0002:row17:col2, psp412593-tbl-0002:row17:col3, psp412593-tbl-0002:row17:col4, psp412593-tbl-0002:row17:col5 | — | 0.137 (24.5% RSE) |
| Bioavailability without CSA | `Q41` · FG | 0.346 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Prohn_2021_table_3:row5:col1, Prohn_2021_table_3:row5:col3, Prohn_2021_table_3:row5:col4 | — | not captured |
| Absorption rate, 1/h | `Q49` · kabs | 0.150 | 1/h | 4.1666666666666665e-05 | [1] / [h] | not captured | exact (1.0) | Prohn_2021_table_3:row8:col1, Prohn_2021_table_3:row8:col3, Prohn_2021_table_3:row8:col4 | — | 0.719 (41.4% RSE) |
| Absorption lag, h | `Q83` · tlag | 0.674 | h | 2426.4 | [h] | not captured | exact (1.0) | Prohn_2021_table_3:row10:col1, Prohn_2021_table_3:row10:col3, Prohn_2021_table_3:row10:col4 | — | not captured |
| theta_q367_weight | `Q900` · theta_q367_weight | 0.560 | not captured | not captured | not captured | 26.4 | not captured (not captured) | psp412593-tbl-0002:row2:col2, psp412593-tbl-0002:row2:col3, psp412593-tbl-0002:row2:col4, psp412593-tbl-0002:row2:col5 | — | not captured |
| theta_v_weight | `Q900` · theta_v_weight | 0.656 | not captured | not captured | not captured | 10.9 | not captured (not captured) | psp412593-tbl-0002:row4:col2, psp412593-tbl-0002:row4:col3, psp412593-tbl-0002:row4:col4, psp412593-tbl-0002:row4:col5 | — | not captured |
| Q | `Q30` · Q | 1.54 | L/h | 4.277777777777778e-07 | L/h | not captured | review_gapfill (0.7) | Fromage_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose effect on MTT' — extend the ontology if this is a real PK parameter (source ['psp412593-tbl-0002:row8:col2', 'psp412593-tbl-0002:row8:col3', 'psp412593-tbl-0002:row8:col4', 'psp412593-tbl-0002:row8:col5'])
- dropped duplicate Q22 ('Intercompartment clearance Vmax, L/h', value '4.41') — already have one for this compound
- dropped unlinked row (NIL): 'Intercompartment clearance, L/h' — extend the ontology if this is a real PK parameter (source ['psp412593-tbl-0002:row11:col2', 'psp412593-tbl-0002:row11:col3', 'psp412593-tbl-0002:row11:col4', 'psp412593-tbl-0002:row11:col5', 'psp412593-tbl-0002:row18:col2', 'psp412593-tbl-0002:row18:col3', 'psp412593-tbl-0002:row18:col4', 'psp412593-tbl-0002:row18:col5'])
- dropped value-less row: 'Michaelis‐Menten constant, ng/ml'
- dropped PD-category row 'Turnover rate induction,/h' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412593-tbl-0002:row15:col2', 'psp412593-tbl-0002:row15:col4', 'psp412593-tbl-0002:row15:col5'])
- dropped PD-category row 'Slope of induction effect' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412593-tbl-0002:row16:col2', 'psp412593-tbl-0002:row16:col4', 'psp412593-tbl-0002:row16:col5'])
- dropped duplicate Q22 ('CL non‐CSA treatment, L/h', value '4.84') — already have one for this compound
- dropped duplicate Q22 ('CL CSA treatment, L/h', value '3.38') — already have one for this compound
- dropped duplicate Q63 ('Central volume, L', value '19.7') — already have one for this compound
- dropped duplicate Q22 ('Intercompartment CL, L/h', value '1.54') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate HP, 1/h', value '1.26') — already have one for this compound
- dropped duplicate Q64 ('Asian effect peripheral volume', value '0.609') — already have one for this compound
- covariate effect for Q367 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=letermovir
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- gap-filled Q30 (Q) from Fromage_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell psp412593-tbl-0002:row3:col1 = 'V1'
- unparsed cell psp412593-tbl-0002:row5:col5 = '−0.334 to −0.227'
- unparsed cell psp412593-tbl-0002:row9:col1 = 'Q1 max'
- unparsed cell psp412593-tbl-0002:row10:col1 = 'V2'
- unparsed cell psp412593-tbl-0002:row11:col1 = 'Q2'
- unparsed cell psp412593-tbl-0002:row12:col1 = 'V3'
- unparsed cell psp412593-tbl-0002:row13:col2 = '2.68 × 103'
- unparsed cell psp412593-tbl-0002:row13:col4 = '2.72 × 103'
- unparsed cell psp412593-tbl-0002:row13:col5 = '2.20 × 103–3.41 × 103'
- unparsed cell psp412593-tbl-0002:row14:col1 = 'KMQ1'
- unparsed cell psp412593-tbl-0002:row14:col2 = '5.63 × 103'
- unparsed cell psp412593-tbl-0002:row14:col4 = '5.35 × 103'
- unparsed cell psp412593-tbl-0002:row14:col5 = '3.81 × 103–7.32 × 103'
- unparsed cell psp412593-tbl-0002:row17:col1 = 'F1'
- unparsed cell psp412593-tbl-0002:row18:col1 = 'Q3'
- unparsed cell psp412593-tbl-0002:row19:col1 = 'V4'
- unparsed cell psp412593-tbl-0002:row21:col1 = 'IIV–V1'
- unparsed cell psp412593-tbl-0002:row23:col1 = 'IIV–Q1 max'
- unparsed cell psp412593-tbl-0002:row24:col1 = 'IIV–V2'
- unparsed cell psp412593-tbl-0002:row25:col1 = 'IIV–F1'
- companion parameter table 3 transcribed (75 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q61 | fail | not captured | -0.28 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412593-tbl-0002:row1:col2', 'psp412593-tbl-0002:row1:col3', 'psp412593-tbl-0002:row1:col4', 'psp412593-tbl-0002:row1:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Fromage_2025:review'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Prohn_2021_table_3:row8:col1', 'Prohn_2021_table_3:row8:col3', 'Prohn_2021_table_3:row8:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412593-tbl-0002:row3:col2', 'psp412593-tbl-0002:row3:col3', 'psp412593-tbl-0002:row3:col4', 'psp412593-tbl-0002:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412593-tbl-0002:row10:col2', 'psp412593-tbl-0002:row10:col3', 'psp412593-tbl-0002:row10:col4', 'psp412593-tbl-0002:row10:col5', 'psp412593-tbl-0002:row12:col2', 'psp412593-tbl-0002:row12:col3', 'psp412593-tbl-0002:row12:col4', 'psp412593-tbl-0002:row12:col5', 'psp412593-tbl-0002:row19:col2', 'psp412593-tbl-0002:row19:col3', 'psp412593-tbl-0002:row19:col4', 'psp412593-tbl-0002:row19:col5', 'Prohn_2021_table_3:row3:col1', 'Prohn_2021_table_3:row3:col3', 'Prohn_2021_table_3:row3:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Prohn_2021_table_3:row10:col1', 'Prohn_2021_table_3:row10:col3', 'Prohn_2021_table_3:row10:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp412593-tbl-0002:row5:col2', 'psp412593-tbl-0002:row5:col3', 'psp412593-tbl-0002:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12.2 | not captured | not captured | ['psp412593-tbl-0002:row1:col2', 'psp412593-tbl-0002:row1:col3', 'psp412593-tbl-0002:row1:col4', 'psp412593-tbl-0002:row1:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.2 L/h | not captured | not captured | ['psp412593-tbl-0002:row1:col2', 'psp412593-tbl-0002:row1:col3', 'psp412593-tbl-0002:row1:col4', 'psp412593-tbl-0002:row1:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.45 L | not captured | not captured | ['psp412593-tbl-0002:row3:col2', 'psp412593-tbl-0002:row3:col3', 'psp412593-tbl-0002:row3:col4', 'psp412593-tbl-0002:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 25.8 L | not captured | not captured | ['psp412593-tbl-0002:row10:col2', 'psp412593-tbl-0002:row10:col3', 'psp412593-tbl-0002:row10:col4', 'psp412593-tbl-0002:row10:col5', 'psp412593-tbl-0002:row12:col2', 'psp412593-tbl-0002:row12:col3', 'psp412593-tbl-0002:row12:col4', 'psp412593-tbl-0002:row12:col5', 'psp412593-tbl-0002:row19:col2', 'psp412593-tbl-0002:row19:col3', 'psp412593-tbl-0002:row19:col4', 'psp412593-tbl-0002:row19:col5', 'Prohn_2021_table_3:row3:col1', 'Prohn_2021_table_3:row3:col3', 'Prohn_2021_table_3:row3:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_letermovir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Prohn_2021` / `Prohn_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 13:49 UTC</sub>
