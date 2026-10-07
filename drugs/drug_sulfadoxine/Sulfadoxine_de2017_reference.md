<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Sulfadoxine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/&quot;},{&quot;label&quot;:&quot;de_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfadoxine_Corvaisier2004_reference&quot;,&quot;label&quot;:&quot;Corvaisier_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/Sulfadoxine_Corvaisier2004_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadoxine_Trenque2004_reference&quot;,&quot;label&quot;:&quot;Trenque_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/Sulfadoxine_Trenque2004_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadoxine_de2018_reference&quot;,&quot;label&quot;:&quot;de_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/Sulfadoxine_de2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sulfadoxine — `Sulfadoxine_de2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `sulfadoxine/pyrimethamine`, measured `sulfadoxine`.

## Citation
de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017)
  ·  DOI: [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181)

## Model component
<dbs-pgx drug="Sulfadoxine" model-id="Sulfadoxine_de2017_reference" status="rejected" stale="false" population="pregnant and postpartum women" measured-compound="sulfadoxine" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | psp412181-tbl-0002:row2:col1 | — | not captured |
| CL/F during pregnancy [L/h]b | `Q27` · CL/F | 0.0303 | L/h | 8.416666666666668e-09 | [l] / [h] | not captured | llm_confirmed (0.6) | psp412181-tbl-0002:row3:col1 | — | not captured |
| Vc/F [L]b | `Q290` · V1/F | 14.1 | L | 0.0141 | [l] | not captured | llm_confirmed (0.6) | psp412181-tbl-0002:row4:col1 | — | not captured |
| ka [/h] | `Q49` · kabs | 0.531 | /h | 0.0001475 | [1] / [h] | not captured | llm_confirmed (0.6) | psp412181-tbl-0002:row5:col1 | — | not captured |
| Qp1/F [L/h]b | `Q69` · Q/F | 0.0252 | L/h | 7e-09 | [l] / [h] | not captured | llm_confirmed (0.6) | psp412181-tbl-0002:row6:col1 | — | not captured |
| Vp1/F [L]b | `Q82` · V2/F | 179 | L | 0.179 | [l] | not captured | llm (0.6) | psp412181-tbl-0002:row7:col1 | — | not captured |
| θRBC/PL [fraction of one] | `Q410` · Kp | 0.155 | not captured | not captured | not captured | not captured | llm (0.6) | psp412181-tbl-0002:row10:col1 | — | not captured |
| Change in CL when non‐pregnant [%] | `Q31` · CL_ratio | -75.7 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | psp412181-tbl-0002:row11:col1 | — | not captured |
| T50 [weeks] | `Q57` · t1/2z | 6.35 | weeks | not captured | weeks | not captured | llm (0.6) | psp412181-tbl-0002:row12:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'γ – shape factor' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412181-tbl-0002:row13:col1'])
- routed 'Site effect (scaling on observations) in Mozambique [%]' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Site effect (scaling on observations) in Sudan [%]' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Site effect (scaling on observations) in Zambia [%]' — extend the ontology if this is a real PK parameter (source ['psp412181-tbl-0002:row17:col1'])
- dropped unlinked row (NIL): 'Mali' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row1:col4', 'de_2017_table_3:row1:col5'])
- dropped unlinked row (NIL): 'Mozambique' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row6:col4', 'de_2017_table_3:row6:col5'])
- dropped unlinked row (NIL): 'Sudan' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row11:col4', 'de_2017_table_3:row11:col5'])
- dropped unlinked row (NIL): 'Zambia' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row16:col4', 'de_2017_table_3:row16:col5'])
- dropped unlinked row (NIL): 'Total' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row21:col4', 'de_2017_table_3:row21:col5'])
- implicit units: 'Change in CL when non‐pregnant [%]' — the LLM proposed '%', whose dimension does not fit Q31; left unset
- implicit units: 'T50 [weeks]' → weeks (from the paper text: "Parameter listed as 'T50 [weeks] = 6.35'; text states the postpartum clearance decline occurs over '13 weeks'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sulfadoxine
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412181-tbl-0002:row3:col2 = '0.0185, 0.0349'
- unparsed cell psp412181-tbl-0002:row4:col2 = '13.2, 14.4'
- unparsed cell psp412181-tbl-0002:row4:col4 = '151, 166'
- unparsed cell psp412181-tbl-0002:row5:col2 = '0.464, 0.565'
- unparsed cell psp412181-tbl-0002:row5:col4 = '1.11, 2.70'
- unparsed cell psp412181-tbl-0002:row6:col2 = '0.0136, 0.0269'
- unparsed cell psp412181-tbl-0002:row6:col4 = '0.72, 1.61'
- unparsed cell psp412181-tbl-0002:row7:col2 = '82, 212'
- unparsed cell psp412181-tbl-0002:row7:col4 = '23.9, 32.1'
- unparsed cell psp412181-tbl-0002:row8:col4 = '0.064, 0.166'
- unparsed cell psp412181-tbl-0002:row9:col4 = '142, 317'
- unparsed cell psp412181-tbl-0002:row10:col2 = '0.023, 0.189'
- unparsed cell psp412181-tbl-0002:row10:col4 = '0.106, 0.525'
- unparsed cell psp412181-tbl-0002:row11:col2 = '−88.7, −66.6'
- unparsed cell psp412181-tbl-0002:row11:col4 = '12.3, 24.9'
- unparsed cell psp412181-tbl-0002:row12:col2 = '5.47, 6.75'
- unparsed cell psp412181-tbl-0002:row13:col2 = '2.90, 7.41'
- unparsed cell psp412181-tbl-0002:row14:col4 = '−28.4, −17.4'
- unparsed cell psp412181-tbl-0002:row15:col2 = '8.2, 24.6'
- unparsed cell psp412181-tbl-0002:row15:col4 = '41.5, 60.6'
- unparsed cell psp412181-tbl-0002:row16:col2 = '4.8, 20.0'
- unparsed cell psp412181-tbl-0002:row16:col4 = '19.6, 35.6'
- unparsed cell psp412181-tbl-0002:row17:col2 = '−30.7, −22.2'
- unparsed cell psp412181-tbl-0002:row17:col4 = '−12.1, −3.9'
- unparsed cell psp412181-tbl-0002:row18:col2 = '21.8, 51.2'
- unparsed cell psp412181-tbl-0002:row18:col4 = '7.1, 16.9'
- unparsed cell psp412181-tbl-0002:row19:col2 = '16.7, 22.9'
- unparsed cell psp412181-tbl-0002:row19:col4 = '12.9, 21.5'
- unparsed cell psp412181-tbl-0002:row20:col4 = '11.8, 22.3'
- unparsed cell psp412181-tbl-0002:row21:col2 = '42.4, 70.1'
- unparsed cell psp412181-tbl-0002:row22:col2 = '55.9, 71.9'
- unparsed cell psp412181-tbl-0002:row23:col2 = '2.00, 2.21'
- unparsed cell psp412181-tbl-0002:row23:col4 = '2.01, 2.68'
- unparsed cell psp412181-tbl-0002:row24:col2 = '14.8, 17.5'
- unparsed cell psp412181-tbl-0002:row24:col4 = '15.1, 18.7'
- unparsed cell psp412181-tbl-0002:row25:col2 = '54.2, 63.9'
- unparsed cell de_2017_table_3:row18:col1 = '3.26 (3.25, 3.35)'
- unparsed cell de_2017_table_3:row18:col3 = '8.88 (7.37, 10.4)'
- unparsed cell de_2017_table_3:row18:col4 = '9.86 (8.50, 17.5)'
- companion parameter table 3 transcribed (21 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q31 | fail | not captured | -75.7 | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412181-tbl-0002:row3:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412181-tbl-0002:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412181-tbl-0002:row5:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['psp412181-tbl-0002:row12:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412181-tbl-0002:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412181-tbl-0002:row7:col1'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412181-tbl-0002:row11:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0303 L/h | not captured | not captured | ['psp412181-tbl-0002:row3:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 14.1 L | not captured | not captured | ['psp412181-tbl-0002:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 179 L | not captured | not captured | ['psp412181-tbl-0002:row7:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sulfadoxine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `de_2017` / `de_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:47 UTC</sub>
