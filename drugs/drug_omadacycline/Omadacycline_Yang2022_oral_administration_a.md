<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01A&quot;,&quot;href&quot;:&quot;atc/J01A.md&quot;},{&quot;label&quot;:&quot;omadacycline&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/&quot;},{&quot;label&quot;:&quot;Yang_2022 \u00b7 oral_administration_a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Omadacycline_Chapagain2022_reference&quot;,&quot;label&quot;:&quot;Chapagain_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Chapagain2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Omadacycline_Lakota2020_reference&quot;,&quot;label&quot;:&quot;Lakota_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Lakota2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Omadacycline_Singh2026_reference&quot;,&quot;label&quot;:&quot;Singh_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Singh2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# omadacycline — `Omadacycline_Yang2022_oral_administration_a`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Yang H et al., Pharmacokinetics, Safety and Pharmacoki…, Frontiers in pharmacology (2022)
  ·  DOI: [10.3389/fphar.2022.869237](https://doi.org/10.3389/fphar.2022.869237)

## Model component
<dbs-pgx drug="omadacycline" model-id="Omadacycline_Yang2022_oral_administration_a" status="rejected" stale="false" population="healthy adults" measured-compound="omadacycline" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V 1 (L) | `Q63` · V1 | 110 | L | 0.11 | [l] | not captured | space_fold (0.95) | T2:row3:col4, T2:row3:col5, T2:row3:col6 | — | not captured |
| V 2 (L) | `Q64` · V2 | 215 | L | 0.215 | [l] | not captured | space_fold (0.95) | T2:row4:col4, T2:row4:col5, T2:row4:col6 | — | not captured |
| CL (L/h) | `Q22` · CL | 14.5 | L/h | 4.027777777777778e-06 | [l] / [h] | not captured | exact (1.0) | T2:row6:col4, T2:row6:col5, T2:row6:col6 | — | not captured |
| CL 2 (L/h) | `Q30` · Q | 38.8 | L/h | 1.0777777777777778e-05 | [l] / [h] | not captured | special_case (0.95) | T2:row7:col4, T2:row7:col5, T2:row7:col6 | — | not captured |
| k a1 (h −1 ) | `Q95` · t1/2ka | 0.967 | h −1 | not captured | [1] / [h] | not captured | llm (0.6) | T2:row9:col4, T2:row9:col5, T2:row9:col6 | — | not captured |
| T lag (h) | `Q83` · tlag | 0.678 | h | 2440.8 | [h] | not captured | space_fold (0.95) | T2:row12:col4, T2:row12:col5, T2:row12:col6 | — | not captured |
| AUC0-inf | `Q17` · AUC∞ | 5.70 | not captured | not captured | not captured | not captured | exact (1.0) | Yang_2022_table_1:row6:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| t1/2 (h) | Q57 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'n' — extend the ontology if this is a real PK parameter (source ['T2:row2:col4', 'T2:row2:col5', 'T2:row2:col6'])
- unit_dimension_mismatch: 'k a1 (h −1 )' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'k a2 (h −1 )' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped duplicate Q95 ('k a2 (h −1 )', value '1.95') — already have one for this compound
- dropped unlinked row (NIL): 'P 1' — extend the ontology if this is a real PK parameter (source ['T2:row11:col4', 'T2:row11:col5', 'T2:row11:col6'])
- implicit units: 'AUC0-inf' — the LLM proposed 'mg h/L', whose dimension does not fit Q17; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V 1 (L)); Q64 (V 2 (L)); Q22 (CL (L/h)); Q30 (CL 2 (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=omadacycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'oral administration a' subgroup of Yang_2022 (paper reports 2 populations: intravenous administration, oral administration a)

**Extraction notes:**
- unparsed cell Yang_2022_table_1:row4:col2 = '0.55 (0.25, 0.57'
- unparsed cell Yang_2022_table_1:row4:col3 = '0.61 (0.57, 0.65)'
- unparsed cell Yang_2022_table_1:row4:col5 = '0.55 (0.25, 0.57)'
- unparsed cell Yang_2022_table_1:row4:col6 = '1.75 (1.00, 3.00)'
- unparsed cell Yang_2022_table_1:row4:col7 = '3.00 (3.00, 3.00'
- unparsed cell Yang_2022_table_1:row4:col9 = '3.98 (2.98, 3.98)'
- unparsed cell Yang_2022_table_1:row5:col1 = 'AUC0-24'
- companion parameter table 1 transcribed (67 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_alpha | fail | 0.1 | 1.105 | 11.05 | 0.25 | reported t½α |
| C1_half_life_beta | fail | 1.9 | 18.272 | 9.6168 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row6:col4', 'T2:row6:col5', 'T2:row6:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row7:col4', 'T2:row7:col5', 'T2:row7:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Yang_2022_table_1:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row3:col4', 'T2:row3:col5', 'T2:row3:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col4', 'T2:row4:col5', 'T2:row4:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T2:row12:col4', 'T2:row12:col5', 'T2:row12:col6'] |
| C5_dimension_Q95 | fail | 1 / [time] | h −1 | not captured | not captured | ['T2:row9:col4', 'T2:row9:col5', 'T2:row9:col6'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Yang_2022_table_1:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.5 | not captured | not captured | ['T2:row6:col4', 'T2:row6:col5', 'T2:row6:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.5 L/h | not captured | not captured | ['T2:row6:col4', 'T2:row6:col5', 'T2:row6:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 110 L | not captured | not captured | ['T2:row3:col4', 'T2:row3:col5', 'T2:row3:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 215 L | not captured | not captured | ['T2:row4:col4', 'T2:row4:col5', 'T2:row4:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_omadacycline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yang_2022` / `Yang_2022::oral_administration_a`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:01 UTC</sub>
