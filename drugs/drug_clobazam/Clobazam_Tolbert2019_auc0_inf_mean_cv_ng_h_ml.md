<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;clobazam&quot;,&quot;href&quot;:&quot;drugs/drug_clobazam/&quot;},{&quot;label&quot;:&quot;Tolbert_2019 \u00b7 auc0_inf_mean_cv_ng_h_ml&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clobazam — `Clobazam_Tolbert2019_auc0_inf_mean_cv_ng_h_ml`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Tolbert D et al., A Comprehensive Overview of the Clinica…, Journal of clinical pharmac… (2019)
  ·  DOI: [10.1002/jcph.1313](https://doi.org/10.1002/jcph.1313)

## Model component
<dbs-pgx drug="clobazam" model-id="Clobazam_Tolbert2019_auc0_inf_mean_cv_ng_h_ml" status="rejected" stale="false" population="healthy subjects and patients with Lennox-Gastaut syndrome" measured-compound="clobazam" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 5 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax, Mean (% CV), ng/mL | `Q32` · Cmax | 87.2 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Tolbert_2019_table_1:row2:col2, Tolbert_2019_table_1:row2:col3, Tolbert_2019_table_1:row2:col4, Tolbert_2019_table_1:row2:col6, Tolbert_2019_table_1:row2:col7, Tolbert_2019_table_1:row2:col8, Tolbert_2019_table_1:row2:col10, Tolbert_2019_table_1:row2:col11, Tolbert_2019_table_1:row2:col12, Tolbert_2019_table_1:row2:col13, Tolbert_2019_table_1:row2:col14, Tolbert_2019_table_1:row2:col15, Tolbert_2019_table_1:row2:col16, Tolbert_2019_table_1:row2:col22, Tolbert_2019_table_1:row2:col23, Tolbert_2019_table_1:row2:col26, Tolbert_2019_table_1:row2:col27, Tolbert_2019_table_1:row2:col28 | — | not captured |
| AUC0‐t, Mean (% CV), ng•h/mL | `Q19` · AUCt | 8871 | h | not captured | [h] | not captured | llm (0.6) | Tolbert_2019_table_1:row4:col7, Tolbert_2019_table_1:row4:col11, Tolbert_2019_table_1:row4:col13, Tolbert_2019_table_1:row4:col15 | — | not captured |
| t½, Mean (% CV), h | `Q57` · t1/2z | 58.6 | h | 210960.0 | [h] | not captured | llm (0.6) | Tolbert_2019_table_1:row5:col2, Tolbert_2019_table_1:row5:col3, Tolbert_2019_table_1:row5:col4, Tolbert_2019_table_1:row5:col7, Tolbert_2019_table_1:row5:col10, Tolbert_2019_table_1:row5:col11, Tolbert_2019_table_1:row5:col12, Tolbert_2019_table_1:row5:col13, Tolbert_2019_table_1:row5:col14, Tolbert_2019_table_1:row5:col15, Tolbert_2019_table_1:row5:col16, Tolbert_2019_table_1:row5:col26, Tolbert_2019_table_1:row5:col27, Tolbert_2019_table_1:row5:col28 | — | not captured |
| Vd/F, Mean (% CV), L | `Q76` · V/F | 100 | L | 0.1 | [l] | not captured | llm_confirmed (0.6) | Tolbert_2019_table_1:row6:col3, Tolbert_2019_table_1:row6:col7, Tolbert_2019_table_1:row6:col11, Tolbert_2019_table_1:row6:col13, Tolbert_2019_table_1:row6:col15, Tolbert_2019_table_1:row6:col27 | — | not captured |
| CL/F, Mean (% CV), L/h | `Q27` · CL/F | 1.9 | L/h | 5.277777777777777e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | Tolbert_2019_table_1:row7:col3, Tolbert_2019_table_1:row7:col7, Tolbert_2019_table_1:row7:col11, Tolbert_2019_table_1:row7:col13, Tolbert_2019_table_1:row7:col15, Tolbert_2019_table_1:row7:col23, Tolbert_2019_table_1:row7:col27 | — | not captured |
| theta_q31_cyp2c19 | `Q900` · theta_q31_cyp2c19 | 6432 | not captured | not captured | not captured | 19 | not captured (not captured) | Tolbert_2019_table_2:row0:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Treatment' — extend the ontology if this is a real PK parameter (source ['Tolbert_2019_table_1:row0:col3', 'Tolbert_2019_table_1:row0:col7', 'Tolbert_2019_table_1:row0:col11', 'Tolbert_2019_table_1:row0:col13', 'Tolbert_2019_table_1:row0:col15', 'Tolbert_2019_table_1:row0:col23', 'Tolbert_2019_table_1:row0:col27'])
- unit_dimension_mismatch: 'AUC0‐t, Mean (% CV), ng•h/mL' → Q19 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): '10 mg CLB' — extend the ontology if this is a real PK parameter (source ['Tolbert_2019_table_2:row2:col5'])
- dropped unlinked row (NIL): '10 mg CLB + 40 mg OPZ' — extend the ontology if this is a real PK parameter (source ['Tolbert_2019_table_2:row4:col5'])
- dropped unlinked row (NIL): 'Drug Cocktail + CLB' — extend the ontology if this is a real PK parameter (source ['Tolbert_2019_table_2:row9:col5', 'Tolbert_2019_table_2:row11:col5', 'Tolbert_2019_table_2:row13:col5'])
- dropped unlinked row (NIL): 'Drug Cocktail' — extend the ontology if this is a real PK parameter (source ['Tolbert_2019_table_2:row10:col5', 'Tolbert_2019_table_2:row12:col5'])
- covariate effect for Q31 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clobazam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'auc0‐inf, mean (% cv), ng•h/ml' subgroup of Tolbert_2019 (paper reports 10 populations: auc0‐inf, mean (% cv), ng•h/ml, cl/f, mean (% cv), l/hr, cmax, mean (% cv), ng/ml, ov‐101611 (bioequivalence), ov‐101732 (relative ba), ov‐101839, 41 (food effect), ov‐102234 (multiple dose‐1), ov‐1038c (multiple dose‐2), t½, mean (% cv), h, vd/f, mean (% cv), l)
- row roles (LLM): model_class=noncompartmental; 13/13 row label(s) assigned, 0 linked by role
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table jcph1313-tbl-0003: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell jcph1313-tbl-0003:row7:col2 = 'Ka (RSE, %), hr−1'
- unparsed cell jcph1313-tbl-0003:row7:col5 = '15.0(‐)'
- transposed table Tolbert_2019_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tolbert_2019_table_1:row0:col18 = 'CLB 10 mg'
- unparsed cell Tolbert_2019_table_1:row0:col19 = 'CLB 20 mg'
- unparsed cell Tolbert_2019_table_1:row0:col20 = 'CLB 40 mg'
- unparsed cell Tolbert_2019_table_1:row2:col18 = '107 (32)d'
- unparsed cell Tolbert_2019_table_1:row2:col19 = '375 (51)d'
- unparsed cell Tolbert_2019_table_1:row2:col20 = '683 (117)d'
- unparsed cell Tolbert_2019_table_1:row2:col24 = '11 020 (60)'
- unparsed cell Tolbert_2019_table_1:row4:col1 = '10 693 (32)'
- unparsed cell Tolbert_2019_table_1:row4:col2 = '12 731 (46)'
- unparsed cell Tolbert_2019_table_1:row4:col3 = '10 897 (31)'
- unparsed cell Tolbert_2019_table_1:row4:col4 = '13 638 (73)'
- unparsed cell Tolbert_2019_table_1:row4:col6 = '11 451 (48)'
- unparsed cell Tolbert_2019_table_1:row4:col8 = '10 366 (34)'
- unparsed cell Tolbert_2019_table_1:row4:col10 = '12 399 (49)'
- unparsed cell Tolbert_2019_table_1:row4:col12 = '11 451 (31)'
- unparsed cell Tolbert_2019_table_1:row4:col14 = '11 378 (27)'
- unparsed cell Tolbert_2019_table_1:row4:col16 = '11 453 (24)'
- unparsed cell Tolbert_2019_table_1:row4:col18 = '3518 (923)d,e'
- unparsed cell Tolbert_2019_table_1:row4:col19 = '7190 (2091)d,e'
- unparsed cell Tolbert_2019_table_1:row4:col20 = '13 980 (3608)d,e'
- unparsed cell Tolbert_2019_table_1:row4:col21 = '17 649 (28)f'
- unparsed cell Tolbert_2019_table_1:row4:col22 = '57 693 (65)f'
- unparsed cell Tolbert_2019_table_1:row4:col23 = '41 389 (20)f'
- unparsed cell Tolbert_2019_table_1:row4:col24 = '223 023 (55)f'
- unparsed cell Tolbert_2019_table_1:row4:col25 = '26 092 (13)'
- unparsed cell Tolbert_2019_table_1:row4:col26 = '84 401 (29)'
- unparsed cell Tolbert_2019_table_1:row4:col27 = '19 867 (19)'
- unparsed cell Tolbert_2019_table_1:row4:col28 = '89 539 (39)'
- unparsed cell Tolbert_2019_table_1:row5:col6 = '66.2 (34)a'
- unparsed cell Tolbert_2019_table_1:row5:col8 = '62.8 (22)b'
- unparsed cell Tolbert_2019_table_1:row5:col18 = '25.5 (18)d'
- unparsed cell Tolbert_2019_table_1:row5:col19 = '17.4 (5)d'
- unparsed cell Tolbert_2019_table_1:row5:col20 = '17.8 (5)d'
- unparsed cell Tolbert_2019_table_1:row6:col21 = '113 (27)g'
- unparsed cell Tolbert_2019_table_1:row6:col23 = '128 (26)g'
- companion parameter table 1 transcribed (82 record(s))
- unparsed cell Tolbert_2019_table_2:row0:col1 = '10 mg CLB + 400 mg KTZ'
- unparsed cell Tolbert_2019_table_2:row0:col4 = '2.0 (0.5‐2.5)'
- unparsed cell Tolbert_2019_table_2:row2:col3 = '1.0 (0.5‐2.6)'
- unparsed cell Tolbert_2019_table_2:row4:col3 = '1.3 (0.5‐4.0)'
- unparsed cell Tolbert_2019_table_2:row8:col4 = '0.5 (0.3‐1.5)'
- unparsed cell Tolbert_2019_table_2:row8:col5 = '38 528 (33)'
- unparsed cell Tolbert_2019_table_2:row9:col3 = '0.8 (0.3‐2.0)'
- unparsed cell Tolbert_2019_table_2:row9:col4 = '40 622 (29)'
- unparsed cell Tolbert_2019_table_2:row10:col2 = '50 806 (12)'
- unparsed cell Tolbert_2019_table_2:row10:col3 = '3.5 (1.5‐6.0)'
- unparsed cell Tolbert_2019_table_2:row10:col4 = '841 599 (35)'
- unparsed cell Tolbert_2019_table_2:row11:col2 = '47 511 (13)'
- unparsed cell Tolbert_2019_table_2:row11:col3 = '3.5 (2.0‐6.0)'
- unparsed cell Tolbert_2019_table_2:row11:col4 = '746 043 (35)'
- unparsed cell Tolbert_2019_table_2:row12:col3 = '2.0 (1.0‐6.0)'
- unparsed cell Tolbert_2019_table_2:row12:col6 = '19 707 (76)'
- unparsed cell Tolbert_2019_table_2:row13:col3 = '3.0 (2.0‐8.0)'
- unparsed cell Tolbert_2019_table_2:row13:col6 = '10 374 (75)'
- companion parameter table 2 transcribed (37 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 36.0 | 36.481 | 1.0134 | 0.25 | reported t½β |
| C5_dimension_Q19 | fail | [time] | h | not captured | not captured | ['Tolbert_2019_table_1:row4:col7', 'Tolbert_2019_table_1:row4:col11', 'Tolbert_2019_table_1:row4:col13', 'Tolbert_2019_table_1:row4:col15'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tolbert_2019_table_1:row7:col3', 'Tolbert_2019_table_1:row7:col7', 'Tolbert_2019_table_1:row7:col11', 'Tolbert_2019_table_1:row7:col13', 'Tolbert_2019_table_1:row7:col15', 'Tolbert_2019_table_1:row7:col23', 'Tolbert_2019_table_1:row7:col27'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tolbert_2019_table_1:row2:col2', 'Tolbert_2019_table_1:row2:col3', 'Tolbert_2019_table_1:row2:col4', 'Tolbert_2019_table_1:row2:col6', 'Tolbert_2019_table_1:row2:col7', 'Tolbert_2019_table_1:row2:col8', 'Tolbert_2019_table_1:row2:col10', 'Tolbert_2019_table_1:row2:col11', 'Tolbert_2019_table_1:row2:col12', 'Tolbert_2019_table_1:row2:col13', 'Tolbert_2019_table_1:row2:col14', 'Tolbert_2019_table_1:row2:col15', 'Tolbert_2019_table_1:row2:col16', 'Tolbert_2019_table_1:row2:col22', 'Tolbert_2019_table_1:row2:col23', 'Tolbert_2019_table_1:row2:col26', 'Tolbert_2019_table_1:row2:col27', 'Tolbert_2019_table_1:row2:col28'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tolbert_2019_table_1:row5:col2', 'Tolbert_2019_table_1:row5:col3', 'Tolbert_2019_table_1:row5:col4', 'Tolbert_2019_table_1:row5:col7', 'Tolbert_2019_table_1:row5:col10', 'Tolbert_2019_table_1:row5:col11', 'Tolbert_2019_table_1:row5:col12', 'Tolbert_2019_table_1:row5:col13', 'Tolbert_2019_table_1:row5:col14', 'Tolbert_2019_table_1:row5:col15', 'Tolbert_2019_table_1:row5:col16', 'Tolbert_2019_table_1:row5:col26', 'Tolbert_2019_table_1:row5:col27', 'Tolbert_2019_table_1:row5:col28'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tolbert_2019_table_1:row6:col3', 'Tolbert_2019_table_1:row6:col7', 'Tolbert_2019_table_1:row6:col11', 'Tolbert_2019_table_1:row6:col13', 'Tolbert_2019_table_1:row6:col15', 'Tolbert_2019_table_1:row6:col27'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.9 L/h | not captured | not captured | ['Tolbert_2019_table_1:row7:col3', 'Tolbert_2019_table_1:row7:col7', 'Tolbert_2019_table_1:row7:col11', 'Tolbert_2019_table_1:row7:col13', 'Tolbert_2019_table_1:row7:col15', 'Tolbert_2019_table_1:row7:col23', 'Tolbert_2019_table_1:row7:col27'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 100 L | not captured | not captured | ['Tolbert_2019_table_1:row6:col3', 'Tolbert_2019_table_1:row6:col7', 'Tolbert_2019_table_1:row6:col11', 'Tolbert_2019_table_1:row6:col13', 'Tolbert_2019_table_1:row6:col15', 'Tolbert_2019_table_1:row6:col27'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clobazam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tolbert_2019` / `Tolbert_2019::auc0_inf_mean_cv_ng_h_ml`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 18:56 UTC</sub>
