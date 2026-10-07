<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfamethoxypyridazine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxypyridazine/&quot;},{&quot;label&quot;:&quot;Abdennebi_1994 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfamethoxypyridazine — `Sulfamethoxypyridazine_Abdennebi1994_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: camelid.** This record comes from an animal study (camelid), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Abdennebi EH et al., [Pharmacokinetics and plasma protein bi…, Revue d'elevage et de medec… (1994)

## Model component
<dbs-pgx drug="sulfamethoxypyridazine" model-id="Sulfamethoxypyridazine_Abdennebi1994_reference" status="rejected" stale="false" population="dromedary camels" measured-compound="sulfamethoxypyridazine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 13 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A (µg/ml) | `Q900` · equation variable | 216.59 | µg/ml | not captured | [µg] / [ml] | not captured | llm (0.6) | Abdennebi_1994_table_2:row0:col1, Abdennebi_1994_table_2:row0:col2, Abdennebi_1994_table_2:row0:col3, Abdennebi_1994_table_2:row0:col4, Abdennebi_1994_table_2:row0:col5 | — | not captured |
| α (h⁻¹) | `Q67` · λ1 | 5.09 | h⁻¹ | not captured | [1] / [h] | not captured | exact (1.0) | Abdennebi_1994_table_2:row1:col1, Abdennebi_1994_table_2:row1:col2, Abdennebi_1994_table_2:row1:col3, Abdennebi_1994_table_2:row1:col4, Abdennebi_1994_table_2:row1:col5 | — | not captured |
| t1/2(α) (h) | `Q57` · t1/2z | 0136 | h | 489600.0 | [h] | not captured | space_fold (0.95) | Abdennebi_1994_table_2:row2:col1, Abdennebi_1994_table_2:row2:col2, Abdennebi_1994_table_2:row2:col3, Abdennebi_1994_table_2:row2:col4, Abdennebi_1994_table_2:row2:col5 | — | not captured |
| β (h⁻¹) | `Q47` · kel | 0061 | h⁻¹ | 0.016944444444444446 | [1] / [h] | not captured | exact (1.0) | Abdennebi_1994_table_2:row4:col1, Abdennebi_1994_table_2:row4:col2, Abdennebi_1994_table_2:row4:col3, Abdennebi_1994_table_2:row4:col4, Abdennebi_1994_table_2:row4:col5 | — | not captured |
| K12 (h⁻¹) | `Q301` · k12 | 3445 | h⁻¹ | 0.9569444444444445 | [1] / [h] | not captured | exact (1.0) | Abdennebi_1994_table_2:row7:col1, Abdennebi_1994_table_2:row7:col2, Abdennebi_1994_table_2:row7:col3, Abdennebi_1994_table_2:row7:col4, Abdennebi_1994_table_2:row7:col5 | — | not captured |
| K21 (h⁻¹) | `Q302` · k21 | 1498 | h⁻¹ | 0.4161111111111111 | [1] / [h] | not captured | exact (1.0) | Abdennebi_1994_table_2:row8:col1, Abdennebi_1994_table_2:row8:col2, Abdennebi_1994_table_2:row8:col3, Abdennebi_1994_table_2:row8:col4, Abdennebi_1994_table_2:row8:col5 | — | not captured |
| Vd(c) (l/kg) | `Q61` · V | 0165 | l/kg | 11.55 | [l] / [kg] | not captured | space_fold (0.95) | Abdennebi_1994_table_2:row10:col1, Abdennebi_1994_table_2:row10:col2, Abdennebi_1994_table_2:row10:col3, Abdennebi_1994_table_2:row10:col4, Abdennebi_1994_table_2:row10:col5 | — | not captured |
| Vss (l/kg) | `Q65` · Vss | 0544 | l/kg | 38.080000000000005 | [l] / [kg] | not captured | exact (1.0) | Abdennebi_1994_table_2:row12:col1, Abdennebi_1994_table_2:row12:col2, Abdennebi_1994_table_2:row12:col3, Abdennebi_1994_table_2:row12:col4, Abdennebi_1994_table_2:row12:col5 | — | not captured |
| CT (l/kg.h) | `Q75` · Ct | 0035 | l/kg.h | not captured | [l] / [[h] · [kg]] | not captured | exact (1.0) | Abdennebi_1994_table_2:row13:col1, Abdennebi_1994_table_2:row13:col2, Abdennebi_1994_table_2:row13:col3, Abdennebi_1994_table_2:row13:col4, Abdennebi_1994_table_2:row13:col5 | — | not captured |
| Ka (h⁻¹) | `Q49` · kabs | 0098 | h⁻¹ | 0.02722222222222222 | [1] / [h] | not captured | exact (1.0) | Abdennebi_1994_table_3:row0:col1, Abdennebi_1994_table_3:row0:col2, Abdennebi_1994_table_3:row0:col3, Abdennebi_1994_table_3:row0:col4, Abdennebi_1994_table_3:row0:col5 | — | not captured |
| Cmax (µg/ml) | `Q32` · Cmax | 50.92 | µg/ml | not captured | [µg] / [ml] | not captured | exact (1.0) | Abdennebi_1994_table_3:row4:col1, Abdennebi_1994_table_3:row4:col2, Abdennebi_1994_table_3:row4:col3, Abdennebi_1994_table_3:row4:col4, Abdennebi_1994_table_3:row4:col5 | — | not captured |
| Tmax (h) | `Q56` · tmax | 20.75 | h | 74700.0 | [h] | not captured | exact (1.0) | Abdennebi_1994_table_3:row5:col1, Abdennebi_1994_table_3:row5:col2, Abdennebi_1994_table_3:row5:col3, Abdennebi_1994_table_3:row5:col4, Abdennebi_1994_table_3:row5:col5 | — | not captured |
| F (p.100) | `Q40` · Fab | 53.9 | p.100 | not captured | not captured | not captured | exact (1.0) | Abdennebi_1994_table_3:row7:col1, Abdennebi_1994_table_3:row7:col2, Abdennebi_1994_table_3:row7:col3, Abdennebi_1994_table_3:row7:col4, Abdennebi_1994_table_3:row7:col5 | — | not captured |
| TMA (h) | `Q59` · t1/2α | 8.9 | h | 32040.0 | [h] | not captured | llm (0.6) | Abdennebi_1994_table_3:row8:col1, Abdennebi_1994_table_3:row8:col2, Abdennebi_1994_table_3:row8:col3, Abdennebi_1994_table_3:row8:col4, Abdennebi_1994_table_3:row8:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'a' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'b' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'd' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'α (h⁻¹)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q900 ('B(µg/ml)', value '86.65') — already have one for this compound
- dropped duplicate Q57 ('t1/2(β) (h)', value '11.34') — already have one for this compound
- dropped duplicate Q57 ('TMR (h)', value '9.69') — already have one for this compound
- dropped duplicate Q47 ('K10 (h⁻¹)', value '0207') — already have one for this compound
- dropped duplicate Q61 ('Vd(β) (l/kg)', value '0560') — already have one for this compound
- unit_dimension_mismatch: 'CT (l/kg.h)' → Q75 (unit '[length] ** 3 * [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q57 ('t1/2(Ka) (h)', value '7.02') — already have one for this compound
- dropped duplicate Q57 ('t1/2(K10) (h)', value '36.83') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfamethoxypyridazine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- LLM region Abdennebi_1994:other_prose: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 11:41:39 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row7:col1', 'Abdennebi_1994_table_2:row7:col2', 'Abdennebi_1994_table_2:row7:col3', 'Abdennebi_1994_table_2:row7:col4', 'Abdennebi_1994_table_2:row7:col5'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row8:col1', 'Abdennebi_1994_table_2:row8:col2', 'Abdennebi_1994_table_2:row8:col3', 'Abdennebi_1994_table_2:row8:col4', 'Abdennebi_1994_table_2:row8:col5'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Abdennebi_1994_table_3:row4:col1', 'Abdennebi_1994_table_3:row4:col2', 'Abdennebi_1994_table_3:row4:col3', 'Abdennebi_1994_table_3:row4:col4', 'Abdennebi_1994_table_3:row4:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row4:col1', 'Abdennebi_1994_table_2:row4:col2', 'Abdennebi_1994_table_2:row4:col3', 'Abdennebi_1994_table_2:row4:col4', 'Abdennebi_1994_table_2:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_3:row0:col1', 'Abdennebi_1994_table_3:row0:col2', 'Abdennebi_1994_table_3:row0:col3', 'Abdennebi_1994_table_3:row0:col4', 'Abdennebi_1994_table_3:row0:col5'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_3:row5:col1', 'Abdennebi_1994_table_3:row5:col2', 'Abdennebi_1994_table_3:row5:col3', 'Abdennebi_1994_table_3:row5:col4', 'Abdennebi_1994_table_3:row5:col5'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row2:col1', 'Abdennebi_1994_table_2:row2:col2', 'Abdennebi_1994_table_2:row2:col3', 'Abdennebi_1994_table_2:row2:col4', 'Abdennebi_1994_table_2:row2:col5'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Abdennebi_1994_table_3:row8:col1', 'Abdennebi_1994_table_3:row8:col2', 'Abdennebi_1994_table_3:row8:col3', 'Abdennebi_1994_table_3:row8:col4', 'Abdennebi_1994_table_3:row8:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row10:col1', 'Abdennebi_1994_table_2:row10:col2', 'Abdennebi_1994_table_2:row10:col3', 'Abdennebi_1994_table_2:row10:col4', 'Abdennebi_1994_table_2:row10:col5'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Abdennebi_1994_table_2:row12:col1', 'Abdennebi_1994_table_2:row12:col2', 'Abdennebi_1994_table_2:row12:col3', 'Abdennebi_1994_table_2:row12:col4', 'Abdennebi_1994_table_2:row12:col5'] |
| C5_dimension_Q67 | fail | 1 / [time] | h⁻¹ | not captured | not captured | ['Abdennebi_1994_table_2:row1:col1', 'Abdennebi_1994_table_2:row1:col2', 'Abdennebi_1994_table_2:row1:col3', 'Abdennebi_1994_table_2:row1:col4', 'Abdennebi_1994_table_2:row1:col5'] |
| C5_dimension_Q75 | fail | [length] ** 3 * [time] | l/kg.h | not captured | not captured | ['Abdennebi_1994_table_2:row13:col1', 'Abdennebi_1994_table_2:row13:col2', 'Abdennebi_1994_table_2:row13:col3', 'Abdennebi_1994_table_2:row13:col4', 'Abdennebi_1994_table_2:row13:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.16e+04 L | not captured | not captured | ['Abdennebi_1994_table_2:row10:col1', 'Abdennebi_1994_table_2:row10:col2', 'Abdennebi_1994_table_2:row10:col3', 'Abdennebi_1994_table_2:row10:col4', 'Abdennebi_1994_table_2:row10:col5'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 3.81e+04 L | not captured | not captured | ['Abdennebi_1994_table_2:row12:col1', 'Abdennebi_1994_table_2:row12:col2', 'Abdennebi_1994_table_2:row12:col3', 'Abdennebi_1994_table_2:row12:col4', 'Abdennebi_1994_table_2:row12:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sulfamethoxypyridazine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Abdennebi_1994` / `Abdennebi_1994::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:11 UTC</sub>
