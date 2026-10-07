<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;somatrogon&quot;,&quot;href&quot;:&quot;drugs/drug_somatrogon/&quot;},{&quot;label&quot;:&quot;Wang_2025 \u00b7 previous_nonmem_model_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Somatrogon_Wang2025_previous_nonmem_model_estimates&quot;,&quot;label&quot;:&quot;Wang_2025_previous_nonmem_model_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# somatrogon — `Somatrogon_Wang2025_previous_nonmem_model_estimates`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Wang Y et al., Implementing a Bayesian approach using…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.13279](https://doi.org/10.1002/psp4.13279)

## Model component
<dbs-pgx drug="somatrogon" model-id="Somatrogon_Wang2025_previous_nonmem_model_estimates" status="extracted" stale="false" population="pediatric participants" measured-compound="somatrogon" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 0.472 | L/h | 1.311111111111111e-07 | [l] / [h] | not captured | exact (1.0) | Wang_2025_table_4:row0:col1 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 0.014 | L/h | 3.8888888888888884e-09 | [l] / [h] | not captured | exact (1.0) | Wang_2025_table_4:row1:col1 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 10.9 | L | 0.0109 | [l] | not captured | exact (1.0) | Wang_2025_table_4:row2:col1 | — | not captured |
| Vp/R (L) | `Q76` · V/F | 2.37 | L | 0.00237 | [l] | not captured | llm (0.6) | Wang_2025_table_4:row3:col1 | — | not captured |
| Ka (1/h) | `Q49` · kabs | 0.313 | 1/h | 8.694444444444445e-05 | 1/h | not captured | exact (1.0) | Wang_2025_table_4:row4:col1 | — | not captured |
| Lag time (h) | `Q83` · tlag | 0.353 | h | 1270.8 | [h] | not captured | exact (1.0) | Wang_2025_table_4:row6:col1 | — | not captured |
| weight_effect_on_cl_f_and_q_f | `Q900` · weight_effect_on_cl_f_and_q_f | 1.26 | not captured | not captured | not captured | not captured | not captured (not captured) | Wang_2025_table_4:row7:col1 | — | not captured |
| weight_effect_on_vc_f_and_vp_f | `Q900` · weight_effect_on_vc_f_and_vp_f | 1.74 | not captured | not captured | not captured | not captured | not captured (not captured) | Wang_2025_table_4:row8:col1 | — | not captured |
| theta_cl_f_ada | `Q900` · theta_cl_f_ada | -0.258 | L/h | not captured | not captured | not captured | not captured (not captured) | Wang_2025_table_4:row9:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- covariate level 'Weight effect on CL/F and Q/F' → Q900:weight_effect_on_cl_f_and_q_f = 1.26 (linear_fractional on Q27)
- covariate level 'Weight effect on Vc/F and Vp/F' → Q900:weight_effect_on_vc_f_and_vp_f = 1.74 (linear_fractional on Q27)
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: "The text refers to 'first-order absorption rate constant Ka', for which the conventional unit is 1/h, consistent with th")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=somatrogon
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'previous nonmem model estimates' subgroup of Wang_2025 (paper reports 2 populations: nonmem focei estimates (previous analysis), previous nonmem model estimates)
- molar mass: none found for 'somatrogon' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp413279-tbl-0005:row2:col1 = '0.472 (0.406, 0.538) a'
- unparsed cell psp413279-tbl-0005:row2:col2 = '0.478 (0.416, 0.545)'
- unparsed cell psp413279-tbl-0005:row2:col6 = '0.489 (0.429, 0.557)'
- unparsed cell psp413279-tbl-0005:row2:col10 = '0.524 (0.473, 0.578)'
- unparsed cell psp413279-tbl-0005:row3:col1 = '0.014 (0.009, 0.018) a'
- unparsed cell psp413279-tbl-0005:row3:col2 = '0.065 (0.039, 0.098)'
- unparsed cell psp413279-tbl-0005:row3:col6 = '0.063 (0.038, 0.093)'
- unparsed cell psp413279-tbl-0005:row3:col10 = '0.052 (0.031, 0.079)'
- unparsed cell psp413279-tbl-0005:row4:col1 = '10.9 (8.696, 13.104) a'
- unparsed cell psp413279-tbl-0005:row4:col2 = '6.805 (4.775, 9.503)'
- unparsed cell psp413279-tbl-0005:row4:col6 = '7.563 (5.397, 10.066)'
- unparsed cell psp413279-tbl-0005:row4:col10 = '9.952 (8.454, 11.431)'
- unparsed cell psp413279-tbl-0005:row5:col1 = '2.37 (0.314, 4.426) a'
- unparsed cell psp413279-tbl-0005:row5:col2 = '2.303 (1.568, 3.125)'
- unparsed cell psp413279-tbl-0005:row5:col6 = '2.252 (1.582, 3.077)'
- unparsed cell psp413279-tbl-0005:row5:col10 = '2.042 (1.456, 2.713)'
- unparsed cell psp413279-tbl-0005:row6:col1 = '0.313 (0.227, 0.399) a'
- unparsed cell psp413279-tbl-0005:row6:col2 = '0.178 (0.11, 0.309)'
- unparsed cell psp413279-tbl-0005:row6:col6 = '0.194 (0.111, 0.343)'
- unparsed cell psp413279-tbl-0005:row6:col10 = '0.256 (0.139, 0.477)'
- unparsed cell psp413279-tbl-0005:row7:col1 = '0.55 (0.475, 0.625) a'
- unparsed cell psp413279-tbl-0005:row7:col2 = '0.691 (0.655, 0.728)'
- unparsed cell psp413279-tbl-0005:row7:col6 = '0.692 (0.657, 0.728)'
- unparsed cell psp413279-tbl-0005:row7:col10 = '0.694 (0.656, 0.733)'
- unparsed cell psp413279-tbl-0005:row8:col1 = '0.353 (0.184, 0.522) a'
- unparsed cell psp413279-tbl-0005:row8:col2 = '1.116 (0.282, 1.625)'
- unparsed cell psp413279-tbl-0005:row8:col6 = '1.002 (0.225, 1.589)'
- unparsed cell psp413279-tbl-0005:row8:col10 = '0.784 (0.143, 1.436)'
- unparsed cell psp413279-tbl-0005:row9:col1 = '1.26 (0.994, 1.526) a'
- unparsed cell psp413279-tbl-0005:row9:col2 = '1.258 (0.83, 1.715)'
- unparsed cell psp413279-tbl-0005:row9:col6 = '1.265 (0.819, 1.703)'
- unparsed cell psp413279-tbl-0005:row9:col10 = '1.324 (0.892, 1.742)'
- unparsed cell psp413279-tbl-0005:row10:col1 = '1.74 (1.462, 2.018) a'
- unparsed cell psp413279-tbl-0005:row10:col2 = '1.341 (0.722, 2.004)'
- unparsed cell psp413279-tbl-0005:row10:col6 = '1.354 (0.692, 2.019)'
- unparsed cell psp413279-tbl-0005:row10:col10 = '1.448 (0.846, 2.067)'
- unparsed cell psp413279-tbl-0005:row11:col1 = '−0.258 (−0.274, −0.242) b'
- unparsed cell psp413279-tbl-0005:row11:col2 = '−0.111 (−0.267, 0.063)'
- unparsed cell psp413279-tbl-0005:row11:col6 = '−0.115 (−0.268, 0.062)'
- unparsed cell psp413279-tbl-0005:row11:col10 = '−0.117 (−0.287, 0.054)'
- unparsed cell psp413279-tbl-0005:row12:col2 = '0.058 (0.021, 0.113)'
- unparsed cell psp413279-tbl-0005:row12:col6 = '0.060 (0.022, 0.12)'
- unparsed cell psp413279-tbl-0005:row12:col10 = '0.076 (0.026, 0.151)'
- unparsed cell psp413279-tbl-0005:row13:col2 = '0.106 (0.02, 0.224)'
- unparsed cell psp413279-tbl-0005:row13:col6 = '0.104 (0.024, 0.223)'
- unparsed cell psp413279-tbl-0005:row13:col10 = '0.131 (0.036, 0.264)'
- unparsed cell psp413279-tbl-0005:row14:col2 = '0.352 (0.113, 0.685)'
- unparsed cell psp413279-tbl-0005:row14:col6 = '0.320 (0.113, 0.623)'
- unparsed cell psp413279-tbl-0005:row14:col10 = '0.325 (0.108, 0.626)'
- unparsed cell psp413279-tbl-0005:row15:col2 = '−0.024 (−0.115, 0.06)'
- unparsed cell psp413279-tbl-0005:row15:col6 = '−0.026 (−0.117, 0.059)'
- unparsed cell psp413279-tbl-0005:row15:col10 = '−0.017 (−0.133, 0.094)'
- unparsed cell psp413279-tbl-0005:row16:col2 = '0.006 (−0.191, 0.235)'
- unparsed cell psp413279-tbl-0005:row16:col6 = '0.002 (−0.192, 0.213)'
- unparsed cell psp413279-tbl-0005:row16:col10 = '−0.007 (−0.224, 0.245)'
- unparsed cell psp413279-tbl-0005:row17:col2 = '0.307 (0.069, 0.711)'
- unparsed cell psp413279-tbl-0005:row17:col6 = '0.338 (0.07, 0.776)'
- unparsed cell psp413279-tbl-0005:row17:col10 = '0.372 (0.077, 0.859)'
- unparsed cell psp413279-tbl-0005:row18:col2 = '0.005 (−0.04, 0.049)'
- unparsed cell psp413279-tbl-0005:row18:col6 = '0.003 (−0.045, 0.048)'
- unparsed cell psp413279-tbl-0005:row18:col10 = '0.002 (−0.06, 0.058)'
- unparsed cell psp413279-tbl-0005:row19:col2 = '−0.007 (−0.136, 0.108)'
- unparsed cell psp413279-tbl-0005:row19:col6 = '−0.011 (−0.131, 0.11)'
- unparsed cell psp413279-tbl-0005:row19:col10 = '−0.013 (−0.145, 0.112)'
- unparsed cell psp413279-tbl-0005:row20:col2 = '0.000 (−0.121, 0.122)'
- unparsed cell psp413279-tbl-0005:row20:col6 = '0.003 (−0.134, 0.134)'
- unparsed cell psp413279-tbl-0005:row20:col10 = '0.000 (−0.145, 0.145)'
- unparsed cell psp413279-tbl-0005:row21:col2 = '0.096 (0.017, 0.266)'
- unparsed cell psp413279-tbl-0005:row21:col6 = '0.095 (0.017, 0.25)'
- unparsed cell psp413279-tbl-0005:row21:col10 = '0.098 (0.018, 0.26)'
- unparsed cell Wang_2025_table_4:row0:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row0:col3 = 'N (0.472, 2)'
- unparsed cell Wang_2025_table_4:row0:col4 = 'N (0.472, 0.5)'
- unparsed cell Wang_2025_table_4:row1:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row1:col3 = 'N (0.0135, 0.1)'
- unparsed cell Wang_2025_table_4:row1:col4 = 'N (0.0135, 0.05)'
- unparsed cell Wang_2025_table_4:row2:col2 = 'U (0, 20)'
- unparsed cell Wang_2025_table_4:row2:col3 = 'N (10.9, 3)'
- unparsed cell Wang_2025_table_4:row2:col4 = 'N (10.9, 1)'
- unparsed cell Wang_2025_table_4:row3:col2 = 'U (0, 20)'
- unparsed cell Wang_2025_table_4:row3:col3 = 'N (2.37, 3)'
- unparsed cell Wang_2025_table_4:row3:col4 = 'N (2.37, 1)'
- unparsed cell Wang_2025_table_4:row4:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row4:col3 = 'N (0.313, 1)'
- unparsed cell Wang_2025_table_4:row4:col4 = 'N (0.313, 0.5)'
- unparsed cell Wang_2025_table_4:row5:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row5:col3 = 'N (0.55, 1)'
- unparsed cell Wang_2025_table_4:row5:col4 = 'N (0.55, 0.5)'
- unparsed cell Wang_2025_table_4:row6:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row6:col3 = 'N (0.353, 1)'
- unparsed cell Wang_2025_table_4:row6:col4 = 'N (0.353, 0.5)'
- unparsed cell Wang_2025_table_4:row7:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row7:col3 = 'N (1.26, 3)'
- unparsed cell Wang_2025_table_4:row7:col4 = 'N (1.26, 1)'
- unparsed cell Wang_2025_table_4:row8:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row8:col3 = 'N (1.74, 3)'
- unparsed cell Wang_2025_table_4:row8:col4 = 'N (1.74, 1)'
- unparsed cell Wang_2025_table_4:row9:col2 = 'U (−1, 5)'
- unparsed cell Wang_2025_table_4:row9:col3 = 'N (−0.258, 3)'
- unparsed cell Wang_2025_table_4:row9:col4 = 'N (−0.258, 1)'
- companion parameter table 4 transcribed (10 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2025_table_4:row0:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2025_table_4:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Wang_2025_table_4:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2025_table_4:row1:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2025_table_4:row3:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Wang_2025_table_4:row6:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.472 L/h | not captured | not captured | ['Wang_2025_table_4:row0:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 10.9 L | not captured | not captured | ['Wang_2025_table_4:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.37 L | not captured | not captured | ['Wang_2025_table_4:row3:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_somatrogon/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2025` / `Wang_2025::previous_nonmem_model_estimates`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_modelica.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_fmi.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_matlab.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_matlab_simbio.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_sbml.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_cellml.zip" download>Somatrogon_Wang2025_previous_nonmem_model_estimates_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates.svg" alt="Somatrogon_Wang2025_previous_nonmem_model_estimates diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 17.5 mg, single dose, first-order absorption (ka 0.313 /h, lag 21.2 min, F 1). Doses in the paper: 17.5–46.2 mg.

<dbs-fmusim paramsurl="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates/Somatrogon_Wang2025_previous_nonmem_model_estimates_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Somatrogon_Wang2025_previous_nonmem_model_estimates_params.json` · controls `Somatrogon_Wang2025_previous_nonmem_model_estimates_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:21 UTC</sub>
