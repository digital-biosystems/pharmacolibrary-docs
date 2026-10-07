<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;regorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_regorafenib/&quot;},{&quot;label&quot;:&quot;Keunecke_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# regorafenib — `Regorafenib_Keunecke2020_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Keunecke A et al., Population pharmacokinetics of regorafe…, British journal of clinical… (2020)
  ·  DOI: [10.1111/bcp.14334](https://doi.org/10.1111/bcp.14334)

## Model component
<dbs-pgx drug="regorafenib" model-id="Regorafenib_Keunecke2020_reference" status="extracted" stale="false" population="patients with advanced solid tumours" measured-compound="regorafenib" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** 3-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 13 extracted, plus 4 covariate effects.

**Parameterization:** V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k a, h−1 | `Q49` · kabs | 0.482 | h−1 | 0.00013388888888888888 | [1] / [h] | not captured | exact (1.0) | bcp14334-tbl-0003:row2:col1, Keunecke_2020_table_1:row1:col1, Keunecke_2020_table_2:row1:col1 | — | not captured |
| FRM2 | `Q45` · fm | -0.355 | not captured | not captured | not captured | 26.7 | exact (1.0) | bcp14334-tbl-0003:row3:col1, Keunecke_2020_table_2:row2:col1, Keunecke_2020_table_2:row2:col2, Keunecke_2020_table_2:row2:col3, Keunecke_2020_table_2:row2:col4, Keunecke_2020_table_2:row2:col5 | — | not captured |
| CLP/(1‐FRM2), L h−1 | `Q22` · CL | 4.02 | L h−1 | 1.1166666666666664e-06 | [l] / [h] | not captured | exact (1.0) | bcp14334-tbl-0003:row4:col1, Keunecke_2020_table_2:row3:col1 | — | 0.206 (8.16% RSE) |
| bmi_on_regorafenib_clearance | `Q900` · bmi_on_regorafenib_clearance | -0.363 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp14334-tbl-0003:row6:col1 | — | not captured |
| VCP/(1‐FRM2), L | `Q63` · V1 | 10.7 | L | 0.0107 | [l] | not captured | exact (1.0) | bcp14334-tbl-0003:row7:col1, Keunecke_2020_table_2:row4:col1 | — | not captured |
| k GE, h−1 | `Q48` · kcomp | 100 | h−1 | 0.027777777777777776 | [1] / [h] | not captured | llm (0.6) | bcp14334-tbl-0003:row8:col1, Keunecke_2020_table_1:row4:col1, Keunecke_2020_table_2:row5:col1 | — | not captured |
| QP/(1‐FRM2), L/h−1 | `Q30` · Q | 11.0 | L/h | 3.055555555555555e-06 | L/h | not captured | exact (1.0) | bcp14334-tbl-0003:row12:col1 | — | not captured |
| VPP/(1‐FRM2), L | `Q64` · V2 | 162 | L | 0.162 | [l] | not captured | exact (1.0) | bcp14334-tbl-0003:row13:col1, Keunecke_2020_table_2:row10:col1 | — | not captured |
| k CG, h−1 | `Q347` · k14 | 0.141 | h−1 | 3.9166666666666665e-05 | [1] / [h] | 13.5 | llm (0.6) | bcp14334-tbl-0003:row14:col1, Keunecke_2020_table_1:row10:col1, Keunecke_2020_table_1:row10:col2, Keunecke_2020_table_1:row10:col3, Keunecke_2020_table_1:row10:col4, Keunecke_2020_table_1:row10:col5, Keunecke_2020_table_2:row11:col1 | — | not captured |
| CLM‐2, L h−1 | `Q22` · CL | 2.45 | L h−1 | 6.805555555555557e-07 | [l] / [h] | 4.98 | exact (1.0) | bcp14334-tbl-0003:row16:col1, bcp14334-tbl-0003:row16:col2, bcp14334-tbl-0003:row16:col3, bcp14334-tbl-0003:row16:col4, bcp14334-tbl-0003:row16:col5, Keunecke_2020_table_2:row13:col1, Keunecke_2020_table_2:row13:col2, Keunecke_2020_table_2:row13:col3, Keunecke_2020_table_2:row13:col4, Keunecke_2020_table_2:row13:col5 | — | not captured |
| CLM‐5, L h−1 | `Q22` · CL | 0.746 | L h−1 | 2.0722222222222223e-07 | [l] / [h] | 28.8 | exact (1.0) | bcp14334-tbl-0003:row18:col1, bcp14334-tbl-0003:row18:col2, bcp14334-tbl-0003:row18:col3, bcp14334-tbl-0003:row18:col4, bcp14334-tbl-0003:row18:col5, Keunecke_2020_table_2:row14:col1, Keunecke_2020_table_2:row14:col2, Keunecke_2020_table_2:row14:col3, Keunecke_2020_table_2:row14:col4, Keunecke_2020_table_2:row14:col5 | — | not captured |
| FRM5 | `Q45` · fm | -1.09 | not captured | not captured | not captured | 19.4 | exact (1.0) | bcp14334-tbl-0003:row20:col1, Keunecke_2020_table_2:row15:col1, Keunecke_2020_table_2:row15:col2, Keunecke_2020_table_2:row15:col3, Keunecke_2020_table_2:row15:col4, Keunecke_2020_table_2:row15:col5 | — | not captured |
| VC/Foral, L | `Q290` · V1/F | 10.7 | L | 0.0107 | [l] | 18.1 | llm (0.6) | Keunecke_2020_table_1:row3:col1, Keunecke_2020_table_1:row3:col2, Keunecke_2020_table_1:row3:col3, Keunecke_2020_table_1:row3:col4, Keunecke_2020_table_1:row3:col5 | — | not captured |
| VP/Foral, L | `Q82` · V2/F | 162 | L | 0.162 | [l] | 16.1 | llm (0.6) | Keunecke_2020_table_1:row9:col1, Keunecke_2020_table_1:row9:col2, Keunecke_2020_table_1:row9:col3, Keunecke_2020_table_1:row9:col4, Keunecke_2020_table_1:row9:col5 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | 0.169 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp14334-tbl-0003:row5:col1 | — | not captured |
| theta_q351_sex | `Q900` · theta_q351_sex | 0.380 | not captured | not captured | not captured | 5.06 | not captured (not captured) | bcp14334-tbl-0003:row17:col1, bcp14334-tbl-0003:row17:col2, bcp14334-tbl-0003:row17:col3, bcp14334-tbl-0003:row17:col4, bcp14334-tbl-0003:row17:col5 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | 0.761 | not captured | not captured | not captured | 5.08 | not captured (not captured) | bcp14334-tbl-0003:row19:col1, bcp14334-tbl-0003:row19:col2, bcp14334-tbl-0003:row19:col3, bcp14334-tbl-0003:row19:col4, bcp14334-tbl-0003:row19:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Q2']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Parent Prop. error, SD' routed out of structural estimates ('Residual error')
- table section residual_error: 'M‐2 Add. error, SD' routed out of structural estimates ('Residual error')
- table section residual_error: 'M‐2 Prop. error, SD' routed out of structural estimates ('Residual error')
- table section residual_error: 'M‐5 Add. error, SD' routed out of structural estimates ('Residual error')
- table section residual_error: 'M‐5 Prop. error, SD' routed out of structural estimates ('Residual error')
- table section residual_error: 'SD of proportional error' routed out of structural estimates ('Residual error')
- covariate level 'BMI on regorafenib clearance' → Q900:bmi_on_regorafenib_clearance = -0.363 (linear_fractional on Q22)
- unit_dimension_unknown: 'L/h−1' (Q)
- dropped unlinked row (NIL): 'DGE, h' — extend the ontology if this is a real PK parameter (source ['bcp14334-tbl-0003:row15:col1', 'Keunecke_2020_table_1:row11:col1', 'Keunecke_2020_table_2:row12:col1'])
- dropped duplicate Q22 ('CL/Foral, L h−1', value '4.02') — already have one for this compound
- dropped duplicate Q30 ('Q/Foral, L h−1', value '11.0') — already have one for this compound
- dropped duplicate Q30 ('QP/(1‐FRM2), L h−1', value '11.0') — already have one for this compound
- covariate effect for Q351 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'QP/(1‐FRM2), L/h−1' → L/h (from the paper text: 'The parameter listing gives “L/h−1 = 11.0,” and the table caption defines Q as “intercompartmental clearance.” Interpret')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=regorafenib
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0, 0]
- row roles (LLM): model_class=compartmental; 39/39 row label(s) assigned, 63 linked by role; re-tagged parent→M-2 ×49, parent→M-5 ×49
- molar mass: no plausible PubChem entry for 'M-5' ('no full name in the paper') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'M-2' (LLM) — left in mass units
- molar mass: none found for 'M-2' — its concentrations stay mass-only
- molar mass: none found for 'M-5' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 1 transcribed (39 record(s))
- companion parameter table 2 transcribed (86 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row4:col1', 'Keunecke_2020_table_2:row3:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row16:col1', 'bcp14334-tbl-0003:row16:col2', 'bcp14334-tbl-0003:row16:col3', 'bcp14334-tbl-0003:row16:col4', 'bcp14334-tbl-0003:row16:col5', 'Keunecke_2020_table_2:row13:col1', 'Keunecke_2020_table_2:row13:col2', 'Keunecke_2020_table_2:row13:col3', 'Keunecke_2020_table_2:row13:col4', 'Keunecke_2020_table_2:row13:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row18:col1', 'bcp14334-tbl-0003:row18:col2', 'bcp14334-tbl-0003:row18:col3', 'bcp14334-tbl-0003:row18:col4', 'bcp14334-tbl-0003:row18:col5', 'Keunecke_2020_table_2:row14:col1', 'Keunecke_2020_table_2:row14:col2', 'Keunecke_2020_table_2:row14:col3', 'Keunecke_2020_table_2:row14:col4', 'Keunecke_2020_table_2:row14:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Keunecke_2020_table_1:row3:col1', 'Keunecke_2020_table_1:row3:col2', 'Keunecke_2020_table_1:row3:col3', 'Keunecke_2020_table_1:row3:col4', 'Keunecke_2020_table_1:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row12:col1'] |
| C5_dimension_Q347 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row14:col1', 'Keunecke_2020_table_1:row10:col1', 'Keunecke_2020_table_1:row10:col2', 'Keunecke_2020_table_1:row10:col3', 'Keunecke_2020_table_1:row10:col4', 'Keunecke_2020_table_1:row10:col5', 'Keunecke_2020_table_2:row11:col1'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row8:col1', 'Keunecke_2020_table_1:row4:col1', 'Keunecke_2020_table_2:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row2:col1', 'Keunecke_2020_table_1:row1:col1', 'Keunecke_2020_table_2:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp14334-tbl-0003:row7:col1', 'Keunecke_2020_table_2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp14334-tbl-0003:row13:col1', 'Keunecke_2020_table_2:row10:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Keunecke_2020_table_1:row9:col1', 'Keunecke_2020_table_1:row9:col2', 'Keunecke_2020_table_1:row9:col3', 'Keunecke_2020_table_1:row9:col4', 'Keunecke_2020_table_1:row9:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.02 L/h | not captured | not captured | ['bcp14334-tbl-0003:row4:col1', 'Keunecke_2020_table_2:row3:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.45 L/h | not captured | not captured | ['bcp14334-tbl-0003:row16:col1', 'bcp14334-tbl-0003:row16:col2', 'bcp14334-tbl-0003:row16:col3', 'bcp14334-tbl-0003:row16:col4', 'bcp14334-tbl-0003:row16:col5', 'Keunecke_2020_table_2:row13:col1', 'Keunecke_2020_table_2:row13:col2', 'Keunecke_2020_table_2:row13:col3', 'Keunecke_2020_table_2:row13:col4', 'Keunecke_2020_table_2:row13:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.746 L/h | not captured | not captured | ['bcp14334-tbl-0003:row18:col1', 'bcp14334-tbl-0003:row18:col2', 'bcp14334-tbl-0003:row18:col3', 'bcp14334-tbl-0003:row18:col4', 'bcp14334-tbl-0003:row18:col5', 'Keunecke_2020_table_2:row14:col1', 'Keunecke_2020_table_2:row14:col2', 'Keunecke_2020_table_2:row14:col3', 'Keunecke_2020_table_2:row14:col4', 'Keunecke_2020_table_2:row14:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 10.7 L | not captured | not captured | ['Keunecke_2020_table_1:row3:col1', 'Keunecke_2020_table_1:row3:col2', 'Keunecke_2020_table_1:row3:col3', 'Keunecke_2020_table_1:row3:col4', 'Keunecke_2020_table_1:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 10.7 L | not captured | not captured | ['bcp14334-tbl-0003:row7:col1', 'Keunecke_2020_table_2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 162 L | not captured | not captured | ['bcp14334-tbl-0003:row13:col1', 'Keunecke_2020_table_2:row10:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 162 L | not captured | not captured | ['Keunecke_2020_table_1:row9:col1', 'Keunecke_2020_table_1:row9:col2', 'Keunecke_2020_table_1:row9:col3', 'Keunecke_2020_table_1:row9:col4', 'Keunecke_2020_table_1:row9:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_regorafenib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Keunecke_2020` / `Keunecke_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_modelica.zip" download>Regorafenib_Keunecke2020_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_matlab.zip" download>Regorafenib_Keunecke2020_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_matlab_simbio.zip" download>Regorafenib_Keunecke2020_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_sbml.zip" download>Regorafenib_Keunecke2020_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_cellml.zip" download>Regorafenib_Keunecke2020_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:40 UTC</sub>
