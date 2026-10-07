<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;enzalutamide&quot;,&quot;href&quot;:&quot;drugs/drug_enzalutamide/&quot;},{&quot;label&quot;:&quot;Hadigol_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enzalutamide_Hadigol2026_reference&quot;,&quot;label&quot;:&quot;Hadigol_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enzalutamide — `Enzalutamide_Hadigol2026_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Hadigol M et al., Population Pharmacokinetics Analysis of…, Journal of clinical pharmac… (2026)
  ·  DOI: [10.1002/jcph.70125](https://doi.org/10.1002/jcph.70125)

## Model component
<dbs-pgx drug="enzalutamide" model-id="Enzalutamide_Hadigol2026_reference" status="extracted" stale="false" population="patients with metastatic castration-resistant prostate cancer" measured-compound="enzalutamide" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent–metabolite model: parent with 1 compartment(s); metabolite N-desmethyl enzalutamide: 2 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameters:** 14 extracted, plus 6 covariate effects.

**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ CLe/Fe (L/h) | `Q27` · CL/F | 0.425 | L/h | 1.1805555555555555e-07 | [l] / [h] | 0.74 | llm (0.6) | jcph70125-tbl-0001:row1:col1, jcph70125-tbl-0001:row1:col2, jcph70125-tbl-0001:row1:col3 | — | not captured |
| θ Vce/Fe (L) | `Q76` · V/F | 25.293 | L | 0.025293 | [l] | 11.31 | llm (0.6) | jcph70125-tbl-0001:row2:col1, jcph70125-tbl-0001:row2:col2, jcph70125-tbl-0001:row2:col3 | — | not captured |
| θ Qe/Fe (L/h) | `Q69` · Q/F | 20.644 | L/h | 5.7344444444444445e-06 | [l] / [h] | 7.29 | llm (0.6) | jcph70125-tbl-0001:row3:col1, jcph70125-tbl-0001:row3:col2, jcph70125-tbl-0001:row3:col3 | — | not captured |
| θ kae (1/h) | `Q49` · kabs | 3.431 | 1/h | 0.0009530555555555556 | 1/h | 13.85 | exact (1.0) | jcph70125-tbl-0001:row5:col1, jcph70125-tbl-0001:row5:col2, jcph70125-tbl-0001:row5:col3 | — | not captured |
| θ Fe (Fixed) | `Q44` · fe | 1.000 | Fixed | not captured | [fixed] | not captured | llm_confirmed (0.6) | jcph70125-tbl-0001:row6:col1 | — | not captured |
| body_weight_effect_on_cle_fe | `Q900` · body_weight_effect_on_cle_fe | 0.549 | Fixed | not captured | [fixed] | 6.42 | not captured (not captured) | jcph70125-tbl-0001:row9:col1, jcph70125-tbl-0001:row9:col2, jcph70125-tbl-0001:row9:col3 | — | not captured |
| body_weight_effect_on_vce_fe | `Q900` · body_weight_effect_on_vce_fe | 3.495 | Fixed | not captured | [fixed] | 7.99 | not captured (not captured) | jcph70125-tbl-0001:row11:col1, jcph70125-tbl-0001:row11:col2, jcph70125-tbl-0001:row11:col3 | — | not captured |
| θ CLn (L/h) | `Q22` · CL | 0.286 | L/h | 7.944444444444444e-08 | [l] / [h] | 0.89 | exact (1.0) | Hadigol_2026_table_2:row0:col1, Hadigol_2026_table_2:row0:col2, Hadigol_2026_table_2:row0:col3 | — | not captured |
| θ Vcn (L) | `Q63` · V1 | 44.944 | L | 0.044944000000000005 | [l] | 9.32 | exact (1.0) | Hadigol_2026_table_2:row1:col1, Hadigol_2026_table_2:row1:col2, Hadigol_2026_table_2:row1:col3 | — | not captured |
| θ Qn (L/h) | `Q30` · Q | 9.443 | L/h | 2.6230555555555555e-06 | [l] / [h] | 14.28 | exact (1.0) | Hadigol_2026_table_2:row2:col1, Hadigol_2026_table_2:row2:col2, Hadigol_2026_table_2:row2:col3 | — | not captured |
| θ Vpn (L) | `Q64` · V2 | 52.373 | L | 0.052372999999999996 | [l] | 7.23 | exact (1.0) | Hadigol_2026_table_2:row3:col1, Hadigol_2026_table_2:row3:col2, Hadigol_2026_table_2:row3:col3 | — | not captured |
| θ Fmet (Fixed) | `Q45` · fm | 0.634 | Fixed | not captured | [fixed] | not captured | exact (1.0) | Hadigol_2026_table_2:row4:col1 | — | not captured |
| effect_of_body_weight_on_vcn | `Q900` · effect_of_body_weight_on_vcn | 0.027 | Fixed | not captured | [fixed] | 2.52 | not captured (not captured) | Hadigol_2026_table_2:row6:col1, Hadigol_2026_table_2:row6:col2, Hadigol_2026_table_2:row6:col3 | — | not captured |
| (L/h) | `Q22` · CL | 5.078 | L/h | 1.4105555555555555e-06 | [l] / [h] | 3.887 | exact (1.0) | Hadigol_2026_table_3:row0:col1, Hadigol_2026_table_3:row0:col2, Hadigol_2026_table_3:row0:col3 | — | not captured |
| θ Vct/Ft (L) | `Q290` · V1/F | 14.389 | L | 0.014388999999999999 | [l] | 0.462 | llm (0.6) | Hadigol_2026_table_3:row1:col1, Hadigol_2026_table_3:row1:col2, Hadigol_2026_table_3:row1:col3 | — | not captured |
| θ Qt/Ft (L/h) | `Q30` · Q | 15.568 | L/h | 4.3244444444444445e-06 | [l] / [h] | 0.053 | llm (0.6) | Hadigol_2026_table_3:row3:col1, Hadigol_2026_table_3:row3:col2, Hadigol_2026_table_3:row3:col3 | — | not captured |
| θ Ft (Fixed) | `Q900` · equation variable | 1.000 | Fixed | not captured | [fixed] | not captured | llm (0.6) | Hadigol_2026_table_3:row4:col1 | — | not captured |
| θ kat (1/h) | `Q49` · kabs | 0.157 | 1/h | 4.361111111111111e-05 | 1/h | 0.071 | exact (1.0) | Hadigol_2026_table_3:row5:col1, Hadigol_2026_table_3:row5:col3 | — | not captured |
| theta_cl_f_age | `Q900` · theta_cl_f_age | -0.003 | not captured | not captured | not captured | 27.53 | not captured (not captured) | jcph70125-tbl-0001:row8:col1, jcph70125-tbl-0001:row8:col2, jcph70125-tbl-0001:row8:col3 | — | not captured |
| theta_v_f_age | `Q900` · theta_v_f_age | 1.223 | not captured | not captured | not captured | 22.17 | not captured (not captured) | jcph70125-tbl-0001:row10:col1, jcph70125-tbl-0001:row10:col2, jcph70125-tbl-0001:row10:col3 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.006 | not captured | not captured | not captured | 9.42 | not captured (not captured) | Hadigol_2026_table_2:row5:col1, Hadigol_2026_table_2:row5:col2, Hadigol_2026_table_2:row5:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q76 ('θ Vpe/Fe (L)', value '45.928') — already have one for this compound
- unit_dimension_unknown: 'Fixed' (fe)
- routed 'Thetarized sigma' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- covariate level 'Body weight effect on θ CLe/Fe' → Q900:body_weight_effect_on_cle_fe = 0.549 (linear_fractional on Q27)
- covariate level 'Body weight effect on θ Vce/Fe' → Q900:body_weight_effect_on_vce_fe = 3.495 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['jcph70125-tbl-0001:row15:col1', 'Hadigol_2026_table_2:row11:col1', 'Hadigol_2026_table_3:row11:col1'])
- unit_dimension_unknown: 'Fixed' (fm)
- covariate level 'Effect of body weight on θ Vcn' → Q900:effect_of_body_weight_on_vcn = 0.027 (linear_fractional on Q27)
- routed 'Thetarized σ' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- linked '(L/h)' as 'CL' → Q22 (CL) for talazoparib — compound marker removed
- dropped duplicate Q290 ('θ Vpt/Ft (L)', value '382.135') — already have one for this compound
- unit_dimension_unknown: 'Fixed' (equation variable)
- dropped value-less row: 'θ slope (mL/ng)' (captured trailing unit 'mL/ng' for child rows)
- dropped unlinked row (NIL): 'BCCL effect on' — extend the ontology if this is a real PK parameter (source ['Hadigol_2026_table_3:row8:col1', 'Hadigol_2026_table_3:row8:col2', 'Hadigol_2026_table_3:row8:col3'])
- unit inherited for body_weight_effect_on_cle_fe (Q900): 'Fixed' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for body_weight_effect_on_vce_fe (Q900): 'Fixed' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for effect_of_body_weight_on_vcn (Q900): 'Fixed' from a same-Q-code sibling (this row's label had no unit)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'θ kae (1/h)' → 1/h (from the paper text: "The paper text states for enzalutamide: 'The first‐order absorption rate constant ... were estimated to be 0.872 1/h'.")
- implicit units: 'θ kat (1/h)' → 1/h (from the paper text: "The paper text states for talazoparib: 'The first‐order absorption rate constant ... were estimated to be 1.22 1/h'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=enzalutamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 36/36 row label(s) assigned, 42 linked by role; re-tagged parent→N-desmethyl enzalutamide ×29, parent→talazoparib ×24
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph70125-tbl-0001:row1:col6 = '0.425 [0.419, 0.431]'
- unparsed cell jcph70125-tbl-0001:row2:col6 = '25.155 [21.773, 28.655]'
- unparsed cell jcph70125-tbl-0001:row3:col6 = '20.655 [18.274, 23.322]'
- unparsed cell jcph70125-tbl-0001:row4:col6 = '46.001 [43.1, 48.806]'
- unparsed cell jcph70125-tbl-0001:row5:col6 = '3.423 [2.79, 4.552]'
- unparsed cell jcph70125-tbl-0001:row7:col6 = '0.146 [0.143, 0.149]'
- unparsed cell jcph70125-tbl-0001:row8:col6 = '−0.003 [−0.005, −0.002]'
- unparsed cell jcph70125-tbl-0001:row9:col6 = '0.55 [0.485, 0.619]'
- unparsed cell jcph70125-tbl-0001:row10:col6 = '1.238 [0.647, 1.842]'
- unparsed cell jcph70125-tbl-0001:row11:col6 = '3.505 [3.105, 3.904]'
- unparsed cell jcph70125-tbl-0001:row12:col6 = '0.037 [0.034, 0.041]'
- unparsed cell jcph70125-tbl-0001:row13:col6 = '−0.015 [−0.029, −0.002]'
- unparsed cell jcph70125-tbl-0001:row14:col6 = '0.354 [0.283, 0.453]'
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
- unparsed cell Hadigol_2026_table_3:row0:col6 = '5.072 [4.821, 5.344]'
- unparsed cell Hadigol_2026_table_3:row1:col6 = '14.382 [14.067, 14.735]'
- unparsed cell Hadigol_2026_table_3:row2:col6 = '382.208 [364.472, 399.944]'
- unparsed cell Hadigol_2026_table_3:row3:col6 = '15.568 [15.536, 15.598]'
- unparsed cell Hadigol_2026_table_3:row5:col2 = '1.11 × 10−4'
- unparsed cell Hadigol_2026_table_3:row5:col6 = '0.157 [0.156, 0.157]'
- unparsed cell Hadigol_2026_table_3:row6:col1 = '6.58 × 10−6'
- unparsed cell Hadigol_2026_table_3:row6:col2 = '1.22 × 10−6'
- unparsed cell Hadigol_2026_table_3:row6:col6 = '6.56 × 10−6 [4.98 × 10−6, 8.21 × 10−6]'
- unparsed cell Hadigol_2026_table_3:row7:col6 = '0.354 [0.344, 0.365]'
- unparsed cell Hadigol_2026_table_3:row8:col6 = '0.452 [0.38, 0.523]'
- unparsed cell Hadigol_2026_table_3:row9:col6 = '0.074 [0.062, 0.087]'
- unparsed cell Hadigol_2026_table_3:row10:col6 = '2.55 [2.023, 3.325]'
- companion parameter table 3 transcribed (34 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 14 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_2:row0:col1', 'Hadigol_2026_table_2:row0:col2', 'Hadigol_2026_table_2:row0:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_3:row0:col1', 'Hadigol_2026_table_3:row0:col2', 'Hadigol_2026_table_3:row0:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70125-tbl-0001:row1:col1', 'jcph70125-tbl-0001:row1:col2', 'jcph70125-tbl-0001:row1:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_3:row1:col1', 'Hadigol_2026_table_3:row1:col2', 'Hadigol_2026_table_3:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_2:row2:col1', 'Hadigol_2026_table_2:row2:col2', 'Hadigol_2026_table_2:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_3:row3:col1', 'Hadigol_2026_table_3:row3:col2', 'Hadigol_2026_table_3:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph70125-tbl-0001:row5:col1', 'jcph70125-tbl-0001:row5:col2', 'jcph70125-tbl-0001:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_3:row5:col1', 'Hadigol_2026_table_3:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_2:row1:col1', 'Hadigol_2026_table_2:row1:col2', 'Hadigol_2026_table_2:row1:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_2:row3:col1', 'Hadigol_2026_table_2:row3:col2', 'Hadigol_2026_table_2:row3:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70125-tbl-0001:row3:col1', 'jcph70125-tbl-0001:row3:col2', 'jcph70125-tbl-0001:row3:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70125-tbl-0001:row2:col1', 'jcph70125-tbl-0001:row2:col2', 'jcph70125-tbl-0001:row2:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.286 L/h | not captured | not captured | ['Hadigol_2026_table_2:row0:col1', 'Hadigol_2026_table_2:row0:col2', 'Hadigol_2026_table_2:row0:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.08 L/h | not captured | not captured | ['Hadigol_2026_table_3:row0:col1', 'Hadigol_2026_table_3:row0:col2', 'Hadigol_2026_table_3:row0:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.425 L/h | not captured | not captured | ['jcph70125-tbl-0001:row1:col1', 'jcph70125-tbl-0001:row1:col2', 'jcph70125-tbl-0001:row1:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 14.4 L | not captured | not captured | ['Hadigol_2026_table_3:row1:col1', 'Hadigol_2026_table_3:row1:col2', 'Hadigol_2026_table_3:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 44.9 L | not captured | not captured | ['Hadigol_2026_table_2:row1:col1', 'Hadigol_2026_table_2:row1:col2', 'Hadigol_2026_table_2:row1:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 52.4 L | not captured | not captured | ['Hadigol_2026_table_2:row3:col1', 'Hadigol_2026_table_2:row3:col2', 'Hadigol_2026_table_2:row3:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 25.3 L | not captured | not captured | ['jcph70125-tbl-0001:row2:col1', 'jcph70125-tbl-0001:row2:col2', 'jcph70125-tbl-0001:row2:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_enzalutamide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hadigol_2026` / `Hadigol_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_modelica.zip" download>Enzalutamide_Hadigol2026_reference_modelica.zip</a> <span class="pk-size">(5.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_fmi.zip" download>Enzalutamide_Hadigol2026_reference_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_matlab.zip" download>Enzalutamide_Hadigol2026_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_sbml.zip" download>Enzalutamide_Hadigol2026_reference_sbml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_cellml.zip" download>Enzalutamide_Hadigol2026_reference_cellml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_3M_9C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference.svg" alt="Enzalutamide_Hadigol2026_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.5 mg, single dose, first-order absorption (ka 3.43 /h, F 1). Dose in the paper: 0.5 mg.

<dbs-fmusim paramsurl="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_3M_9C` · parameters `Enzalutamide_Hadigol2026_reference_params.json` · controls `Enzalutamide_Hadigol2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:20 UTC</sub>
