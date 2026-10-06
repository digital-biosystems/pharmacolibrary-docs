<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;talazoparib&quot;,&quot;href&quot;:&quot;drugs/drug_talazoparib/&quot;},{&quot;label&quot;:&quot;Hadigol_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# talazoparib — `Talazoparib_Hadigol2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Hadigol M et al., Population Pharmacokinetics Analysis of…, Journal of clinical pharmac… (2026)
  ·  DOI: [10.1002/jcph.70125](https://doi.org/10.1002/jcph.70125)

## Model component
<dbs-pgx drug="talazoparib" model-id="Talazoparib_Hadigol2026_reference" status="rejected" stale="false" population="patients with metastatic castration-resistant prostate cancer" measured-compound="talazoparib" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 15 extracted, plus 5 covariate effects.

**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| (L/h) | `Q22` · CL | 5.078 | L/h | 1.4105555555555555e-06 | [l] / [h] | 3.887 | exact (1.0) | jcph70125-tbl-0003:row1:col1, jcph70125-tbl-0003:row1:col2, jcph70125-tbl-0003:row1:col3 | — | not captured |
| θ Vct/Ft (L) | `Q290` · V1/F | 14.389 | L | 0.014388999999999999 | [l] | 0.462 | llm (0.6) | jcph70125-tbl-0003:row2:col1, jcph70125-tbl-0003:row2:col2, jcph70125-tbl-0003:row2:col3 | — | not captured |
| θ Vpt/Ft (L) | `Q61` · V | 382.135 | L | 0.382135 | [l] | 4.735 | llm (0.6) | jcph70125-tbl-0003:row3:col1, jcph70125-tbl-0003:row3:col2, jcph70125-tbl-0003:row3:col3 | — | not captured |
| θ Qt/Ft (L/h) | `Q30` · Q | 15.568 | L/h | 4.3244444444444445e-06 | [l] / [h] | 0.053 | exact (1.0) | jcph70125-tbl-0003:row4:col1, jcph70125-tbl-0003:row4:col2, jcph70125-tbl-0003:row4:col3 | — | not captured |
| θ kat (1/h) | `Q49` · kabs | 0.157 | mL/ng | not captured | [ml] / [ng] | 0.071 | exact (1.0) | jcph70125-tbl-0003:row6:col1, jcph70125-tbl-0003:row6:col3 | — | not captured |
| θ CLe/Fe (L/h) | `Q27` · CL/F | 0.425 | L/h | 1.1805555555555555e-07 | [l] / [h] | 0.74 | llm (0.6) | Hadigol_2026_table_1:row0:col1, Hadigol_2026_table_1:row0:col2, Hadigol_2026_table_1:row0:col3 | — | not captured |
| θ Vce/Fe (L) | `Q76` · V/F | 25.293 | L | 0.025293 | [l] | 11.31 | llm (0.6) | Hadigol_2026_table_1:row1:col1, Hadigol_2026_table_1:row1:col2, Hadigol_2026_table_1:row1:col3 | — | not captured |
| θ Qe/Fe (L/h) | `Q69` · Q/F | 20.644 | L/h | 5.7344444444444445e-06 | [l] / [h] | 7.29 | llm (0.6) | Hadigol_2026_table_1:row2:col1, Hadigol_2026_table_1:row2:col2, Hadigol_2026_table_1:row2:col3 | — | not captured |
| θ kae (1/h) | `Q49` · kabs | 3.431 | mL/ng | not captured | [ml] / [ng] | 13.85 | exact (1.0) | Hadigol_2026_table_1:row4:col1, Hadigol_2026_table_1:row4:col2, Hadigol_2026_table_1:row4:col3 | — | not captured |
| θ Fe (Fixed) | `Q44` · fe | 1.000 | Fixed | not captured | [fixed] | not captured | llm_confirmed (0.6) | Hadigol_2026_table_1:row5:col1 | — | not captured |
| θ CLn (L/h) | `Q22` · CL | 0.286 | L/h | 7.944444444444444e-08 | [l] / [h] | 0.89 | exact (1.0) | Hadigol_2026_table_2:row0:col1, Hadigol_2026_table_2:row0:col2, Hadigol_2026_table_2:row0:col3 | — | not captured |
| θ Vcn (L) | `Q63` · V1 | 44.944 | L | 0.044944000000000005 | [l] | 9.32 | exact (1.0) | Hadigol_2026_table_2:row1:col1, Hadigol_2026_table_2:row1:col2, Hadigol_2026_table_2:row1:col3 | — | not captured |
| θ Qn (L/h) | `Q30` · Q | 9.443 | L/h | 2.6230555555555555e-06 | [l] / [h] | 14.28 | exact (1.0) | Hadigol_2026_table_2:row2:col1, Hadigol_2026_table_2:row2:col2, Hadigol_2026_table_2:row2:col3 | — | not captured |
| θ Vpn (L) | `Q64` · V2 | 52.373 | L | 0.052372999999999996 | [l] | 7.23 | exact (1.0) | Hadigol_2026_table_2:row3:col1, Hadigol_2026_table_2:row3:col2, Hadigol_2026_table_2:row3:col3 | — | not captured |
| θ Fmet (Fixed) | `Q45` · fm | 0.634 | Fixed | not captured | [fixed] | not captured | exact (1.0) | Hadigol_2026_table_2:row4:col1 | — | not captured |
| theta_cl_f_age | `Q900` · theta_cl_f_age | -0.003 | not captured | not captured | not captured | 27.53 | not captured (not captured) | Hadigol_2026_table_1:row7:col1, Hadigol_2026_table_1:row7:col2, Hadigol_2026_table_1:row7:col3 | — | not captured |
| theta_cl_f_body_weight | `Q900` · theta_cl_f_body_weight | 0.549 | not captured | not captured | not captured | 6.42 | not captured (not captured) | Hadigol_2026_table_1:row8:col1, Hadigol_2026_table_1:row8:col2, Hadigol_2026_table_1:row8:col3 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 3.495 | not captured | not captured | not captured | 7.99 | not captured (not captured) | Hadigol_2026_table_1:row10:col1, Hadigol_2026_table_1:row10:col2, Hadigol_2026_table_1:row10:col3 | — | not captured |
| theta_q354_body_weight | `Q900` · theta_q354_body_weight | 0.006 | not captured | not captured | not captured | 9.42 | not captured (not captured) | Hadigol_2026_table_2:row5:col1, Hadigol_2026_table_2:row5:col2, Hadigol_2026_table_2:row5:col3 | — | not captured |
| theta_q1_body_weight | `Q900` · theta_q1_body_weight | 0.027 | not captured | not captured | not captured | 2.52 | not captured (not captured) | Hadigol_2026_table_2:row6:col1, Hadigol_2026_table_2:row6:col2, Hadigol_2026_table_2:row6:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- linked '(L/h)' as 'CL' → Q22 (CL) for  — compound marker removed
- linked 'θ Qt/Ft (L/h)' as 'Q' → Q30 (Q) for  — compound marker removed
- dropped unlinked row (NIL): 'θ Ft (Fixed)' — extend the ontology if this is a real PK parameter (source ['jcph70125-tbl-0003:row5:col1'])
- dropped value-less row: 'θ slope (mL/ng)' (captured trailing unit 'mL/ng' for child rows)
- routed 'Thetarized σ' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'BCCL effect on' — extend the ontology if this is a real PK parameter (source ['jcph70125-tbl-0003:row9:col1', 'jcph70125-tbl-0003:row9:col2', 'jcph70125-tbl-0003:row9:col3'])
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['jcph70125-tbl-0003:row12:col1', 'Hadigol_2026_table_1:row14:col1', 'Hadigol_2026_table_2:row11:col1'])
- dropped duplicate Q76 ('θ Vpe/Fe (L)', value '45.928') — already have one for this compound
- unit 'mL/ng' inherited from a section-header row for kabs (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_mismatch: 'θ kae (1/h)' → Q49 (unit '[length] ** 3 / [mass]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'Fixed' (fe)
- routed 'Thetarized sigma' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Age effect on θ Vce/Fe' — extend the ontology if this is a real PK parameter (source ['Hadigol_2026_table_1:row9:col1', 'Hadigol_2026_table_1:row9:col2', 'Hadigol_2026_table_1:row9:col3'])
- unit_dimension_unknown: 'Fixed' (fm)
- dropped value-less row: 'CLe/Fe'
- dropped value-less row: 'CLn'
- dropped value-less row: 'Fe'
- dropped value-less row: 'Fmet'
- dropped value-less row: 'kae'
- dropped value-less row: 'Qe/Fe'
- dropped value-less row: 'Qn'
- dropped value-less row: 'Vce/Fe'
- dropped value-less row: 'Vcn'
- dropped value-less row: 'Vpe/Fe'
- dropped value-less row: 'Vpn'
- unit inherited for kabs (Q49): 'mL/ng' from a same-Q-code sibling (this row's label had no unit)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q354 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=talazoparib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 47/47 row label(s) assigned, 52 linked by role; re-tagged parent→enzalutamide ×46, parent→N-desmethyl enzalutamide ×33, talazoparib→enzalutamide ×6, talazoparib→N-desmethyl enzalutamide ×5
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph70125-tbl-0003:row1:col6 = '5.072 [4.821, 5.344]'
- unparsed cell jcph70125-tbl-0003:row2:col6 = '14.382 [14.067, 14.735]'
- unparsed cell jcph70125-tbl-0003:row3:col6 = '382.208 [364.472, 399.944]'
- unparsed cell jcph70125-tbl-0003:row4:col6 = '15.568 [15.536, 15.598]'
- unparsed cell jcph70125-tbl-0003:row6:col2 = '1.11 × 10−4'
- unparsed cell jcph70125-tbl-0003:row6:col6 = '0.157 [0.156, 0.157]'
- unparsed cell jcph70125-tbl-0003:row7:col1 = '6.58 × 10−6'
- unparsed cell jcph70125-tbl-0003:row7:col2 = '1.22 × 10−6'
- unparsed cell jcph70125-tbl-0003:row7:col6 = '6.56 × 10−6 [4.98 × 10−6, 8.21 × 10−6]'
- unparsed cell jcph70125-tbl-0003:row8:col6 = '0.354 [0.344, 0.365]'
- unparsed cell jcph70125-tbl-0003:row9:col6 = '0.452 [0.38, 0.523]'
- unparsed cell jcph70125-tbl-0003:row10:col6 = '0.074 [0.062, 0.087]'
- unparsed cell jcph70125-tbl-0003:row11:col6 = '2.55 [2.023, 3.325]'
- unparsed cell Hadigol_2026_table_1:row0:col6 = '0.425 [0.419, 0.431]'
- unparsed cell Hadigol_2026_table_1:row1:col6 = '25.155 [21.773, 28.655]'
- unparsed cell Hadigol_2026_table_1:row2:col6 = '20.655 [18.274, 23.322]'
- unparsed cell Hadigol_2026_table_1:row3:col6 = '46.001 [43.1, 48.806]'
- unparsed cell Hadigol_2026_table_1:row4:col6 = '3.423 [2.79, 4.552]'
- unparsed cell Hadigol_2026_table_1:row6:col6 = '0.146 [0.143, 0.149]'
- unparsed cell Hadigol_2026_table_1:row7:col6 = '−0.003 [−0.005, −0.002]'
- unparsed cell Hadigol_2026_table_1:row8:col6 = '0.55 [0.485, 0.619]'
- unparsed cell Hadigol_2026_table_1:row9:col6 = '1.238 [0.647, 1.842]'
- unparsed cell Hadigol_2026_table_1:row10:col6 = '3.505 [3.105, 3.904]'
- unparsed cell Hadigol_2026_table_1:row11:col6 = '0.037 [0.034, 0.041]'
- unparsed cell Hadigol_2026_table_1:row12:col6 = '−0.015 [−0.029, −0.002]'
- unparsed cell Hadigol_2026_table_1:row13:col6 = '0.354 [0.283, 0.453]'
- companion parameter table 1 transcribed (47 record(s), model stage 'final')
- unparsed cell Hadigol_2026_table_2:row0:col6 = '0.286 [0.281, 0.291]'
- unparsed cell Hadigol_2026_table_2:row1:col6 = '45.032 [41.657, 48.433]'
- unparsed cell Hadigol_2026_table_2:row2:col6 = '9.433 [8.157, 10.909'
- unparsed cell Hadigol_2026_table_2:row3:col6 = '52.341 [49.486, 54.751]'
- unparsed cell Hadigol_2026_table_2:row5:col6 = '0.006 [0.005, 0.007]'
- unparsed cell Hadigol_2026_table_2:row6:col6 = '0.027 [0.026, 0.028]'
- unparsed cell Hadigol_2026_table_2:row7:col6 = '0.126 [0.123, 0.128]'
- unparsed cell Hadigol_2026_table_2:row8:col6 = '0.057 [0.051, 0.063]'
- unparsed cell Hadigol_2026_table_2:row9:col6 = '0.006 [−0.005, 0.017]'
- unparsed cell Hadigol_2026_table_2:row10:col6 = '0.341 [0.292, 0.395]'
- companion parameter table 2 transcribed (38 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70125-tbl-0003:row1:col1', 'jcph70125-tbl-0003:row1:col2', 'jcph70125-tbl-0003:row1:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_2:row0:col1', 'Hadigol_2026_table_2:row0:col2', 'Hadigol_2026_table_2:row0:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_1:row0:col1', 'Hadigol_2026_table_1:row0:col2', 'Hadigol_2026_table_1:row0:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70125-tbl-0003:row2:col1', 'jcph70125-tbl-0003:row2:col2', 'jcph70125-tbl-0003:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70125-tbl-0003:row4:col1', 'jcph70125-tbl-0003:row4:col2', 'jcph70125-tbl-0003:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_2:row2:col1', 'Hadigol_2026_table_2:row2:col2', 'Hadigol_2026_table_2:row2:col3'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [mass] | mL/ng | not captured | not captured | ['Hadigol_2026_table_1:row4:col1', 'Hadigol_2026_table_1:row4:col2', 'Hadigol_2026_table_1:row4:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70125-tbl-0003:row3:col1', 'jcph70125-tbl-0003:row3:col2', 'jcph70125-tbl-0003:row3:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_2:row1:col1', 'Hadigol_2026_table_2:row1:col2', 'Hadigol_2026_table_2:row1:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_2:row3:col1', 'Hadigol_2026_table_2:row3:col2', 'Hadigol_2026_table_2:row3:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_1:row2:col1', 'Hadigol_2026_table_1:row2:col2', 'Hadigol_2026_table_1:row2:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_1:row1:col1', 'Hadigol_2026_table_1:row1:col2', 'Hadigol_2026_table_1:row1:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | mL/ng | not captured | not captured | ['jcph70125-tbl-0003:row6:col1', 'jcph70125-tbl-0003:row6:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.08 L/h | not captured | not captured | ['jcph70125-tbl-0003:row1:col1', 'jcph70125-tbl-0003:row1:col2', 'jcph70125-tbl-0003:row1:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.286 L/h | not captured | not captured | ['Hadigol_2026_table_2:row0:col1', 'Hadigol_2026_table_2:row0:col2', 'Hadigol_2026_table_2:row0:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.425 L/h | not captured | not captured | ['Hadigol_2026_table_1:row0:col1', 'Hadigol_2026_table_1:row0:col2', 'Hadigol_2026_table_1:row0:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 14.4 L | not captured | not captured | ['jcph70125-tbl-0003:row2:col1', 'jcph70125-tbl-0003:row2:col2', 'jcph70125-tbl-0003:row2:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 382 L | not captured | not captured | ['jcph70125-tbl-0003:row3:col1', 'jcph70125-tbl-0003:row3:col2', 'jcph70125-tbl-0003:row3:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 44.9 L | not captured | not captured | ['Hadigol_2026_table_2:row1:col1', 'Hadigol_2026_table_2:row1:col2', 'Hadigol_2026_table_2:row1:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 52.4 L | not captured | not captured | ['Hadigol_2026_table_2:row3:col1', 'Hadigol_2026_table_2:row3:col2', 'Hadigol_2026_table_2:row3:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 25.3 L | not captured | not captured | ['Hadigol_2026_table_1:row1:col1', 'Hadigol_2026_table_1:row1:col2', 'Hadigol_2026_table_1:row1:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_talazoparib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hadigol_2026` / `Hadigol_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:44 UTC</sub>
