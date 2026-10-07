<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;Vilanterol&quot;,&quot;href&quot;:&quot;drugs/drug_vilanterol/&quot;},{&quot;label&quot;:&quot;Siederer_2016 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Vilanterol — `Vilanterol_Siederer2016_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Siederer S et al., Population Pharmacokinetics of Inhaled…, European journal of drug me… (2016)
  ·  DOI: [10.1007/s13318-015-0303-4](https://doi.org/10.1007/s13318-015-0303-4)

## Model component
<dbs-pgx drug="Vilanterol" model-id="Vilanterol_Siederer2016_reference" status="rejected" stale="false" population="COPD patients and healthy subjects" measured-compound="vilanterol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 50 | `Q49` · kabs | 1 | h−1 | 0.0002777777777777778 | [1] / [h] | not captured | llm (0.6) | Siederer_2016_table_3:row9:col1 | — | not captured |
| 100 | `Q47` · kel | 1 | h−1 | 0.0002777777777777778 | [1] / [h] | not captured | llm (0.6) | Siederer_2016_table_3:row13:col1 | — | not captured |
| 200 | `Q302` · k21 | 1 | h−1 | 0.0002777777777777778 | [1] / [h] | not captured | llm (0.6) | Siederer_2016_table_3:row17:col1 | — | not captured |
| mean differences | `Q61` · V | 144.0 | mL | 0.000144 | L | not captured | review_gapfill (0.7) | Jiang_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| FF dosea/RACE1b | Q189 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- column 'c max (pg/ml)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'auc0–24 (pg·h/ml)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped value-less row: 'CL/F, HVT (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'CL/F, COPD (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'Study 4 on CL/F, COPD'
- dropped value-less row: 'Age on CL/F, COPD'
- dropped value-less row: 'Wt on CL/F, COPD'
- dropped value-less row: 'V 1/F, HVT (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'V 1/F, COPD (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'Study 4 on V 1/F, COPD'
- dropped value-less row: 'Age on V 1/F, COPD'
- dropped value-less row: 'Smoking on V 1/F, COPD'
- dropped value-less row: 'Sex on V 1/F, COPD'
- dropped value-less row: 'Study 3 on V 1/F, COPD'
- dropped value-less row: 'Q 2/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'V 2/F, HVT (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'V 2/F, COPD (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'Q 3/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'V 3/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'D 1 (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 'CL/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'V 2/F (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'Q/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'V 3/F (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'ka (h−1)' (captured trailing unit 'h−1' for child rows)
- dropped value-less row: 'RACE1 = 2 on CL/F'
- dropped value-less row: 'RACE1 = 3 on CL/F'
- dropped value-less row: 'RACE1 = 4 on CL/F'
- dropped value-less row: '100/25'
- dropped value-less row: '100 FF'
- dropped value-less row: '200/25'
- dropped value-less row: '200 FF'
- unit 'h−1' inherited from a section-header row for kabs (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit 'h−1' inherited from a section-header row for kel (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit 'h−1' inherited from a section-header row for k21 (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- dropped value-less row: 'All studiesa'
- dropped value-less row: 'HZC112206 (Study 1)' (captured trailing unit 'Study 1' for child rows)
- dropped value-less row: 'HZC112207 (Study 2)' (captured trailing unit 'Study 2' for child rows)
- dropped value-less row: 'HZC110946 (Study 3)' (captured trailing unit 'Study 3' for child rows)
- dropped value-less row: 'HZC111348 (Study 4)' (captured trailing unit 'Study 4' for child rows)
- dropped value-less row: 'Vilanterolb'
- dropped value-less row: 'Fluticasone furoate/vilanterolc'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vilanterol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Jiang_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col1 = '4.91 (4.81, 5.01)'
- unparsed cell Tab2:row1:col2 = '135.6 (122.7, 149.9)'
- unparsed cell Tab2:row2:col1 = '4.55 (4.51, 4.59)'
- unparsed cell Tab2:row2:col2 = '94.6 (90.9, 98.5)'
- unparsed cell Tab2:row3:col1 = '−0.465 (−0.633, −0.297)'
- unparsed cell Tab2:row3:col2 = '0.628 (0.531, 0.743)'
- unparsed cell Tab2:row4:col1 = '−0.433 (−0.660, −0.206)'
- unparsed cell Tab2:row4:col2 = '0.649 (0.517, 0.814)'
- unparsed cell Tab2:row5:col1 = '0.421 (0.286, 0.556)'
- unparsed cell Tab2:row5:col2 = '1.52 (1.33, 1.74)'
- unparsed cell Tab2:row6:col1 = '5.07 (4.97, 5.17)'
- unparsed cell Tab2:row6:col2 = '159.2 (144.0, 175.9)'
- unparsed cell Tab2:row7:col1 = '6.46 (6.37, 6.55)'
- unparsed cell Tab2:row7:col2 = '639.0 (584.1, 699.2)'
- unparsed cell Tab2:row8:col1 = '−1.24 (−1.51, −0.968)'
- unparsed cell Tab2:row9:col1 = '−0.499 (−0.911, −0.087)'
- unparsed cell Tab2:row9:col2 = '0.607 (0.402, 0.917)'
- unparsed cell Tab2:row10:col1 = '0.295 (0.179, 0.411)'
- unparsed cell Tab2:row10:col2 = '1.34 (1.20, 1.51)'
- unparsed cell Tab2:row11:col1 = '−0.128 (−0.25, −0.006)'
- unparsed cell Tab2:row11:col2 = '0.880 (0.779, 0.994)'
- unparsed cell Tab2:row12:col1 = '−0.358 (−0.601, −0.115)'
- unparsed cell Tab2:row12:col2 = '0.699 (0.548, 0.891)'
- unparsed cell Tab2:row13:col1 = '5.49 (5.39, 5.59)'
- unparsed cell Tab2:row13:col2 = '242.3 (219.2, 267.7)'
- unparsed cell Tab2:row14:col1 = '6.23 (6.03, 6.43)'
- unparsed cell Tab2:row14:col2 = '507.8 (415.7, 620.2)'
- unparsed cell Tab2:row15:col1 = '5.18 (5.03, 5.33)'
- unparsed cell Tab2:row15:col2 = '177.7 (152.9, 206.4)'
- unparsed cell Tab2:row16:col1 = '4.95 (4.83, 5.07)'
- unparsed cell Tab2:row16:col2 = '141.2 (125.2, 159.2)'
- unparsed cell Tab2:row17:col1 = '7.65 (7.58, 7.72)'
- unparsed cell Tab2:row17:col2 = '2100.6 (1958.6, 2253.0)'
- unparsed cell Tab2:row18:col1 = '−2.32 (−2.39, −2.25)'
- unparsed cell Tab2:row18:col2 = '0.098 (0.092, 0.105)'
- unparsed cell Siederer_2016_table_1:row0:col1 = '5.44 (5.39, 5.49)'
- unparsed cell Siederer_2016_table_1:row0:col2 = '230 (219, 242)'
- unparsed cell Siederer_2016_table_1:row2:col1 = '5.59 (5.40, 5.78)'
- unparsed cell Siederer_2016_table_1:row2:col2 = '268 (221, 324)'
- unparsed cell Siederer_2016_table_1:row3:col1 = '4.71 (4.51, 4.91)'
- unparsed cell Siederer_2016_table_1:row3:col2 = '111 (90.9, 136)'
- unparsed cell Siederer_2016_table_1:row4:col1 = '−2.95 (−3.01, −2.89)'
- unparsed cell Siederer_2016_table_1:row4:col2 = '0.0523 (0.0493, 0.0556)'
- unparsed cell Siederer_2016_table_1:row5:col1 = '−0.211 (−0.329, −0.0930)'
- unparsed cell Siederer_2016_table_1:row5:col2 = '0.810 (0.720, 0.911)'
- unparsed cell Siederer_2016_table_1:row6:col1 = '0.0602 (−0.175, 0.295)'
- unparsed cell Siederer_2016_table_1:row6:col2 = '1.062 (0.839, 1.343)'
- unparsed cell Siederer_2016_table_1:row7:col1 = '−0.265 (−0.528, −0.002)'
- unparsed cell Siederer_2016_table_1:row7:col2 = '0.767 (0.590, 0.998)'
- companion parameter table 1 transcribed (9 record(s), model stage 'final')
- unparsed cell Siederer_2016_table_3:row0:col3 = '11.96 (10.94, 12.99)'
- unparsed cell Siederer_2016_table_3:row0:col4 = '182.15 (169.61, 194.69)'
- unparsed cell Siederer_2016_table_3:row1:col3 = '11.46 (10.54, 12.38)'
- unparsed cell Siederer_2016_table_3:row1:col4 = '181.44 (167.01, 195.87)'
- unparsed cell Siederer_2016_table_3:row2:col3 = '20.30 (18.41, 22.18)'
- unparsed cell Siederer_2016_table_3:row2:col4 = '288.02 (260.78, 315.27)'
- unparsed cell Siederer_2016_table_3:row3:col3 = '23.60 (20.83, 26.37)'
- unparsed cell Siederer_2016_table_3:row3:col4 = '309.58 (284.51, 334.65)'
- unparsed cell Siederer_2016_table_3:row5:col3 = '7.52 (6.52, 8.52)'
- unparsed cell Siederer_2016_table_3:row5:col4 = '82.92 (75.57, 90.28)'
- unparsed cell Siederer_2016_table_3:row6:col3 = '11.73 (11.03, 12.43)'
- unparsed cell Siederer_2016_table_3:row6:col4 = '181.82 (172.61, 191.04)'
- unparsed cell Siederer_2016_table_3:row7:col3 = '21.62 (20.02, 23.22)'
- unparsed cell Siederer_2016_table_3:row7:col4 = '319.69 (301.42, 337.96)'
- unparsed cell Siederer_2016_table_3:row9:col4 = '79.05 (71.61, 86.49)'
- unparsed cell Siederer_2016_table_3:row13:col4 = '176.04 (165.98, 186.10)'
- unparsed cell Siederer_2016_table_3:row17:col4 = '319.68 (299.78, 339.58)'
- companion parameter table 3 transcribed (17 record(s))
- unparsed cell Siederer_2016_table_4:row0:col2 = '43.2 (41.8, 44.6)'
- unparsed cell Siederer_2016_table_4:row0:col3 = '265.7 (259.5, 271.9)'
- unparsed cell Siederer_2016_table_4:row1:col2 = '43.2 (41.4, 45.1)'
- unparsed cell Siederer_2016_table_4:row1:col3 = '273.7 (264.5, 283.3)'
- unparsed cell Siederer_2016_table_4:row2:col2 = '39.3 (37.5, 41.3)'
- unparsed cell Siederer_2016_table_4:row2:col3 = '251.1 (243.2, 259.4)'
- unparsed cell Siederer_2016_table_4:row3:col2 = '49.7 (43.4, 57.1)'
- unparsed cell Siederer_2016_table_4:row3:col3 = '249.2 (219.6, 282.8)'
- unparsed cell Siederer_2016_table_4:row4:col2 = '120.5 (103.8, 139.8)'
- unparsed cell Siederer_2016_table_4:row4:col3 = '408.2 (365.3, 456.1)'
- unparsed cell Siederer_2016_table_4:row12:col2 = '42.3 (40.7, 44.0)'
- unparsed cell Siederer_2016_table_4:row12:col3 = '261.6 (254.1, 269.0)'
- unparsed cell Siederer_2016_table_4:row13:col2 = '40.1 (37.9, 42.4)'
- unparsed cell Siederer_2016_table_4:row13:col3 = '261.2 (250.6, 272.3)'
- companion parameter table 4 transcribed (7 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q189 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Siederer_2016_table_3:row8:col1', 'Siederer_2016_table_3:row8:col3', 'Siederer_2016_table_3:row8:col4'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Siederer_2016_table_3:row17:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Siederer_2016_table_3:row13:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Siederer_2016_table_3:row9:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jiang_2025:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.144 L | not captured | not captured | ['Jiang_2025:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vilanterol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Siederer_2016` / `Siederer_2016::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:32 UTC</sub>
