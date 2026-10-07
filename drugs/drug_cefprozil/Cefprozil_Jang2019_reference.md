<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefprozil&quot;,&quot;href&quot;:&quot;drugs/drug_cefprozil/&quot;},{&quot;label&quot;:&quot;Jang_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefprozil — `Cefprozil_Jang2019_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Jang JH et al., Population Pharmacokinetics of, Pharmaceutics (2019)
  ·  DOI: [10.3390/pharmaceutics11100531](https://doi.org/10.3390/pharmaceutics11100531)

## Model component
<dbs-pgx drug="cefprozil" model-id="Cefprozil_Jang2019_reference" status="needs_review" stale="false" population="healthy male Koreans" measured-compound="cefprozil" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvV (mL) | `Q61` · V | 34617.50 | mL | 0.034617499999999995 | [ml] | 5.77 | tv_prefix (0.95) | pharmaceutics-11-00531-t004:row3:col1, pharmaceutics-11-00531-t004:row3:col2, pharmaceutics-11-00531-t004:row3:col3, pharmaceutics-11-00531-t004:row12:col1, pharmaceutics-11-00531-t004:row12:col2, pharmaceutics-11-00531-t004:row12:col3, pharmaceutics-11-00531-t004:row23:col1, pharmaceutics-11-00531-t004:row23:col2, pharmaceutics-11-00531-t004:row23:col3, pharmaceutics-11-00531-t004:row32:col1, pharmaceutics-11-00531-t004:row32:col2, pharmaceutics-11-00531-t004:row32:col3, pharmaceutics-11-00531-t004:row43:col1, pharmaceutics-11-00531-t004:row43:col2, pharmaceutics-11-00531-t004:row43:col3 | — | not captured |
| tvCl (mL/h) | `Q22` · CL | 17701.80 | mL/h | 4.917166666666667e-06 | [ml] / [h] | 3.38 | tv_prefix (0.95) | pharmaceutics-11-00531-t004:row4:col1, pharmaceutics-11-00531-t004:row4:col2, pharmaceutics-11-00531-t004:row4:col3, pharmaceutics-11-00531-t004:row13:col1, pharmaceutics-11-00531-t004:row13:col2, pharmaceutics-11-00531-t004:row13:col3, pharmaceutics-11-00531-t004:row24:col1, pharmaceutics-11-00531-t004:row24:col2, pharmaceutics-11-00531-t004:row24:col3, pharmaceutics-11-00531-t004:row33:col1, pharmaceutics-11-00531-t004:row33:col2, pharmaceutics-11-00531-t004:row33:col3, pharmaceutics-11-00531-t004:row44:col1, pharmaceutics-11-00531-t004:row44:col2, pharmaceutics-11-00531-t004:row44:col3 | — | not captured |
| tvTlag (h) | `Q83` · tlag | 0.352 | h | 1267.1999999999998 | [h] | 5.09 | tv_prefix (0.95) | pharmaceutics-11-00531-t004:row5:col1, pharmaceutics-11-00531-t004:row5:col2, pharmaceutics-11-00531-t004:row5:col3, pharmaceutics-11-00531-t004:row14:col1, pharmaceutics-11-00531-t004:row14:col2, pharmaceutics-11-00531-t004:row14:col3, pharmaceutics-11-00531-t004:row25:col1, pharmaceutics-11-00531-t004:row25:col2, pharmaceutics-11-00531-t004:row25:col3, pharmaceutics-11-00531-t004:row34:col1, pharmaceutics-11-00531-t004:row34:col2, pharmaceutics-11-00531-t004:row34:col3, pharmaceutics-11-00531-t004:row45:col1, pharmaceutics-11-00531-t004:row45:col2, pharmaceutics-11-00531-t004:row45:col3 | — | not captured |
| tvKa (1/h) | `Q49` · kabs | 0.829 | not captured | not captured | not captured | 10.98 | tv_prefix (0.95) | pharmaceutics-11-00531-t004:row6:col1, pharmaceutics-11-00531-t004:row6:col2, pharmaceutics-11-00531-t004:row6:col3, pharmaceutics-11-00531-t004:row15:col1, pharmaceutics-11-00531-t004:row15:col2, pharmaceutics-11-00531-t004:row15:col3, pharmaceutics-11-00531-t004:row26:col1, pharmaceutics-11-00531-t004:row26:col2, pharmaceutics-11-00531-t004:row26:col3, pharmaceutics-11-00531-t004:row35:col1, pharmaceutics-11-00531-t004:row35:col2, pharmaceutics-11-00531-t004:row35:col3, pharmaceutics-11-00531-t004:row46:col1, pharmaceutics-11-00531-t004:row46:col2, pharmaceutics-11-00531-t004:row46:col3 | — | not captured |
| 01 | `Q900` · equation variable | 7 | not captured | not captured | not captured | not captured | llm (0.6) | Jang_2019_table_2:row2:col2, Jang_2019_table_2:row2:col3, Jang_2019_table_2:row2:col4, Jang_2019_table_2:row16:col2, Jang_2019_table_2:row16:col3, Jang_2019_table_2:row16:col4, Jang_2019_table_2:row30:col2, Jang_2019_table_2:row30:col3, Jang_2019_table_2:row30:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: '02-01' routed out of structural estimates ('Residual error model')
- table section residual_error: '02-02' routed out of structural estimates ('Residual error model')
- table section residual_error: '02-03 *' routed out of structural estimates ('Residual error model')
- table section iiv: '02-03-01' routed out of structural estimates ('IIV model')
- table section iiv: '02-03-02' routed out of structural estimates ('IIV model')
- table section iiv: '02-03-03 *' routed out of structural estimates ('IIV model')
- table section iiv: '02-03-04' routed out of structural estimates ('IIV model')
- table section iiv: '02-03-05' routed out of structural estimates ('IIV model')
- table section residual_error: '02-01 *' routed out of structural estimates ('Residual error model')
- table section residual_error: '02-03' routed out of structural estimates ('Residual error model')
- table section iiv: '02-03-01 *' routed out of structural estimates ('IIV model')
- table section iiv: '02-03-03' routed out of structural estimates ('IIV model')
- column 'nparameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '-2ll' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'aic' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '△-2ll' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '△aic' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q22 ('dCldCrCl', value '0.003') — already have one for this compound
- dropped unlinked row (NIL): '02 *' — extend the ontology if this is a real PK parameter (source ['Jang_2019_table_2:row3:col2', 'Jang_2019_table_2:row3:col3', 'Jang_2019_table_2:row3:col4', 'Jang_2019_table_2:row3:col5', 'Jang_2019_table_2:row3:col6', 'Jang_2019_table_2:row17:col2', 'Jang_2019_table_2:row17:col3', 'Jang_2019_table_2:row17:col4', 'Jang_2019_table_2:row17:col5', 'Jang_2019_table_2:row17:col6', 'Jang_2019_table_2:row31:col2', 'Jang_2019_table_2:row31:col3', 'Jang_2019_table_2:row31:col4', 'Jang_2019_table_2:row31:col5', 'Jang_2019_table_2:row31:col6'])
- dropped value-less row: 'Base model'
- dropped value-less row: 'Total protein on clearance'
- dropped value-less row: 'Albumin on clearance'
- dropped value-less row: 'CrCl on clearance *'
- dropped value-less row: 'Weight on volume'
- dropped value-less row: 'BSA on clearance'
- dropped value-less row: 'Base model *'
- dropped value-less row: 'CrCl on clearance'
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (tvV (mL)); Q22 (tvCl (mL/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefprozil
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 2 transcribed (133 record(s), model stage 'base')
- companion parameter table 3 transcribed (31 record(s))
- no LLM table selection; kept 3 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 1.67 | 1.356 | 0.812 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-11-00531-t004:row4:col1', 'pharmaceutics-11-00531-t004:row4:col2', 'pharmaceutics-11-00531-t004:row4:col3', 'pharmaceutics-11-00531-t004:row13:col1', 'pharmaceutics-11-00531-t004:row13:col2', 'pharmaceutics-11-00531-t004:row13:col3', 'pharmaceutics-11-00531-t004:row24:col1', 'pharmaceutics-11-00531-t004:row24:col2', 'pharmaceutics-11-00531-t004:row24:col3', 'pharmaceutics-11-00531-t004:row33:col1', 'pharmaceutics-11-00531-t004:row33:col2', 'pharmaceutics-11-00531-t004:row33:col3', 'pharmaceutics-11-00531-t004:row44:col1', 'pharmaceutics-11-00531-t004:row44:col2', 'pharmaceutics-11-00531-t004:row44:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-11-00531-t004:row3:col1', 'pharmaceutics-11-00531-t004:row3:col2', 'pharmaceutics-11-00531-t004:row3:col3', 'pharmaceutics-11-00531-t004:row12:col1', 'pharmaceutics-11-00531-t004:row12:col2', 'pharmaceutics-11-00531-t004:row12:col3', 'pharmaceutics-11-00531-t004:row23:col1', 'pharmaceutics-11-00531-t004:row23:col2', 'pharmaceutics-11-00531-t004:row23:col3', 'pharmaceutics-11-00531-t004:row32:col1', 'pharmaceutics-11-00531-t004:row32:col2', 'pharmaceutics-11-00531-t004:row32:col3', 'pharmaceutics-11-00531-t004:row43:col1', 'pharmaceutics-11-00531-t004:row43:col2', 'pharmaceutics-11-00531-t004:row43:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-11-00531-t004:row5:col1', 'pharmaceutics-11-00531-t004:row5:col2', 'pharmaceutics-11-00531-t004:row5:col3', 'pharmaceutics-11-00531-t004:row14:col1', 'pharmaceutics-11-00531-t004:row14:col2', 'pharmaceutics-11-00531-t004:row14:col3', 'pharmaceutics-11-00531-t004:row25:col1', 'pharmaceutics-11-00531-t004:row25:col2', 'pharmaceutics-11-00531-t004:row25:col3', 'pharmaceutics-11-00531-t004:row34:col1', 'pharmaceutics-11-00531-t004:row34:col2', 'pharmaceutics-11-00531-t004:row34:col3', 'pharmaceutics-11-00531-t004:row45:col1', 'pharmaceutics-11-00531-t004:row45:col2', 'pharmaceutics-11-00531-t004:row45:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-11-00531-t004:row6:col1', 'pharmaceutics-11-00531-t004:row6:col2', 'pharmaceutics-11-00531-t004:row6:col3', 'pharmaceutics-11-00531-t004:row15:col1', 'pharmaceutics-11-00531-t004:row15:col2', 'pharmaceutics-11-00531-t004:row15:col3', 'pharmaceutics-11-00531-t004:row26:col1', 'pharmaceutics-11-00531-t004:row26:col2', 'pharmaceutics-11-00531-t004:row26:col3', 'pharmaceutics-11-00531-t004:row35:col1', 'pharmaceutics-11-00531-t004:row35:col2', 'pharmaceutics-11-00531-t004:row35:col3', 'pharmaceutics-11-00531-t004:row46:col1', 'pharmaceutics-11-00531-t004:row46:col2', 'pharmaceutics-11-00531-t004:row46:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 17701.8 | not captured | not captured | ['pharmaceutics-11-00531-t004:row4:col1', 'pharmaceutics-11-00531-t004:row4:col2', 'pharmaceutics-11-00531-t004:row4:col3', 'pharmaceutics-11-00531-t004:row13:col1', 'pharmaceutics-11-00531-t004:row13:col2', 'pharmaceutics-11-00531-t004:row13:col3', 'pharmaceutics-11-00531-t004:row24:col1', 'pharmaceutics-11-00531-t004:row24:col2', 'pharmaceutics-11-00531-t004:row24:col3', 'pharmaceutics-11-00531-t004:row33:col1', 'pharmaceutics-11-00531-t004:row33:col2', 'pharmaceutics-11-00531-t004:row33:col3', 'pharmaceutics-11-00531-t004:row44:col1', 'pharmaceutics-11-00531-t004:row44:col2', 'pharmaceutics-11-00531-t004:row44:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.7 L/h | not captured | not captured | ['pharmaceutics-11-00531-t004:row4:col1', 'pharmaceutics-11-00531-t004:row4:col2', 'pharmaceutics-11-00531-t004:row4:col3', 'pharmaceutics-11-00531-t004:row13:col1', 'pharmaceutics-11-00531-t004:row13:col2', 'pharmaceutics-11-00531-t004:row13:col3', 'pharmaceutics-11-00531-t004:row24:col1', 'pharmaceutics-11-00531-t004:row24:col2', 'pharmaceutics-11-00531-t004:row24:col3', 'pharmaceutics-11-00531-t004:row33:col1', 'pharmaceutics-11-00531-t004:row33:col2', 'pharmaceutics-11-00531-t004:row33:col3', 'pharmaceutics-11-00531-t004:row44:col1', 'pharmaceutics-11-00531-t004:row44:col2', 'pharmaceutics-11-00531-t004:row44:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 34.6 L | not captured | not captured | ['pharmaceutics-11-00531-t004:row3:col1', 'pharmaceutics-11-00531-t004:row3:col2', 'pharmaceutics-11-00531-t004:row3:col3', 'pharmaceutics-11-00531-t004:row12:col1', 'pharmaceutics-11-00531-t004:row12:col2', 'pharmaceutics-11-00531-t004:row12:col3', 'pharmaceutics-11-00531-t004:row23:col1', 'pharmaceutics-11-00531-t004:row23:col2', 'pharmaceutics-11-00531-t004:row23:col3', 'pharmaceutics-11-00531-t004:row32:col1', 'pharmaceutics-11-00531-t004:row32:col2', 'pharmaceutics-11-00531-t004:row32:col3', 'pharmaceutics-11-00531-t004:row43:col1', 'pharmaceutics-11-00531-t004:row43:col2', 'pharmaceutics-11-00531-t004:row43:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cefprozil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jang_2019` / `Jang_2019::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:16 UTC</sub>
