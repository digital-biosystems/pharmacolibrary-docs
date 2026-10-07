<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;selexipag&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/&quot;},{&quot;label&quot;:&quot;Krause_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selexipag_Ruehs2021_reference&quot;,&quot;label&quot;:&quot;Ruehs_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# selexipag — `Selexipag_Krause2017_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Krause A et al., Population Modeling of Selexipag Pharma…, CPT: pharmacometrics & syst… (2017)
  ·  DOI: [10.1002/psp4.12202](https://doi.org/10.1002/psp4.12202)

## Model component
<dbs-pgx drug="selexipag" model-id="Selexipag_Krause2017_reference" status="needs_review" stale="false" population="patients with pulmonary arterial hypertension" measured-compound="selexipag" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 12 extracted, plus 5 covariate effects.

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tlag (h) | `Q83` · tlag | 0.67 | h | 2412.0 | [h] | not captured | exact (1.0) | psp412202-tbl-0001:row2:col2 | — | 1.92 (None% RSE) |
| ka (1/h) | `Q49` · kabs | 0.71 | 1/h | 0.00019722222222222222 | 1/h | not captured | exact (1.0) | psp412202-tbl-0001:row3:col2, psp412202-tbl-0001:row3:col3, psp412202-tbl-0001:row3:col4 | — | 0.39 (None% RSE) |
| Vp/F (L) | `Q82` · V2/F | 12.90 | L | 0.0129 | [l] | not captured | exact (1.0) | psp412202-tbl-0001:row4:col2, psp412202-tbl-0001:row4:col3, psp412202-tbl-0001:row4:col4 | — | 0.31 (None% RSE) |
| CL/F (L/h) | `Q27` · CL/F | 19.10 | L/h | 5.3055555555555565e-06 | [l] / [h] | not captured | exact (1.0) | psp412202-tbl-0001:row6:col2, psp412202-tbl-0001:row6:col3, psp412202-tbl-0001:row6:col4 | — | 0.73 (None% RSE) |
| total_bilirubin_on_cl_f | `Q900` · total_bilirubin_on_cl_f | -0.40 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row8:col2, psp412202-tbl-0001:row8:col3, psp412202-tbl-0001:row8:col4 | — | not captured |
| k12 (1/h) | `Q30` · Q | 0.09 | not captured | not captured | not captured | not captured | exact (1.0) | psp412202-tbl-0001:row9:col2, psp412202-tbl-0001:row9:col3, psp412202-tbl-0001:row9:col4 | — | not captured |
| k21 (1/h) | `Q99` · Q2 | 0.06 | not captured | not captured | not captured | not captured | exact (1.0) | psp412202-tbl-0001:row10:col2, psp412202-tbl-0001:row10:col3, psp412202-tbl-0001:row10:col4 | — | not captured |
| Vm/F (L) | `Q290` · V1/F | 4.65 | L | 0.0046500000000000005 | [l] | not captured | exact (1.0) | psp412202-tbl-0001:row11:col2, psp412202-tbl-0001:row11:col3, psp412202-tbl-0001:row11:col4 | — | not captured |
| body_weight_on_vm_f | `Q900` · body_weight_on_vm_f | 0.88 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row12:col2, psp412202-tbl-0001:row12:col3, psp412202-tbl-0001:row12:col4 | — | not captured |
| kmet (1/h) | `Q305` · kfm | 0.67 | 1/h | 0.00018611111111111112 | 1/h | not captured | exact (1.0) | psp412202-tbl-0001:row13:col2, psp412202-tbl-0001:row13:col3, psp412202-tbl-0001:row13:col4 | — | not captured |
| k34 (1/h) | `Q30` · Q | 1.04 | not captured | not captured | not captured | not captured | exact (1.0) | psp412202-tbl-0001:row14:col2, psp412202-tbl-0001:row14:col3, psp412202-tbl-0001:row14:col4 | — | not captured |
| k43 (1/h) | `Q99` · Q2 | 0.18 | not captured | not captured | not captured | not captured | exact (1.0) | psp412202-tbl-0001:row15:col2, psp412202-tbl-0001:row15:col3, psp412202-tbl-0001:row15:col4 | — | not captured |
| km (1/h) | `Q47` · kel | 0.49 | 1/h | 0.0001361111111111111 | 1/h | not captured | exact (1.0) | psp412202-tbl-0001:row16:col2, psp412202-tbl-0001:row16:col3, psp412202-tbl-0001:row16:col4 | — | not captured |
| PAH comedication on km (ERA) | `Q1` · Km | 0.15 | ERA | not captured | [era] | not captured | llm_confirmed (0.6) | psp412202-tbl-0001:row18:col2, psp412202-tbl-0001:row18:col3, psp412202-tbl-0001:row18:col4, psp412202-tbl-0001:row18:col5 | — | 0.27 (None% RSE) |
| theta_q352_body_weight | `Q900` · theta_q352_body_weight | 1.20 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row5:col2, psp412202-tbl-0001:row5:col3, psp412202-tbl-0001:row5:col4 | — | not captured |
| theta_cl_f_body_weight | `Q900` · theta_cl_f_body_weight | 0.61 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row7:col2, psp412202-tbl-0001:row7:col3, psp412202-tbl-0001:row7:col4 | — | not captured |
| theta_km_sex | `Q900` · theta_km_sex | 0.15 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412202-tbl-0001:row17:col2, psp412202-tbl-0001:row17:col3, psp412202-tbl-0001:row17:col4, psp412202-tbl-0001:row17:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Vm | Q66 | not captured | special_case |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'tlag (h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'ka (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'Vp/F (L)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'k12 (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'k21 (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'Vm/F (L)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'kmet (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'k34 (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'k43 (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section iiv: 'km (1/h)' routed out of structural estimates ('Interindividual variation (std. dev.)')
- table section residual_error: 'b_1' routed out of structural estimates ('Residual error terms')
- table section residual_error: 'b_2' routed out of structural estimates ('Residual error terms')
- covariate level 'Total bilirubin on CL/F' → Q900:total_bilirubin_on_cl_f = -0.40 (linear_fractional on Q27)
- covariate level 'Body weight on Vm/F' → Q900:body_weight_on_vm_f = 0.88 (linear_fractional on Q27)
- unit_dimension_unknown: 'ERA' (Km)
- unit_dimension_unknown: 'PDE5 inh.' (Km)
- dropped duplicate Q1 ('PAH comedication on km (PDE5 inh.)', value '0.07') — already have one for this compound
- unit_dimension_unknown: 'ERA and PDE5 inh.' (Km)
- dropped duplicate Q1 ('PAH comedication on km (ERA and PDE5 inh.)', value '0.37') — already have one for this compound
- covariate effect for Q352 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka (1/h)' → 1/h (from the paper text: "Text description: 'ka (1/h) = 0.71'")
- implicit units: 'k12 (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q30; left unset
- implicit units: 'k21 (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q99; left unset
- implicit units: 'kmet (1/h)' → 1/h (from the paper text: "Text description: 'kmet (1/h) = 0.67'")
- implicit units: 'k34 (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q30; left unset
- implicit units: 'k43 (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q99; left unset
- implicit units: 'km (1/h)' → 1/h (from the paper text: "Text description: 'km (1/h) = 0.49'")
- implicit units: 'PAH comedication on km (ERA)' — the LLM proposed '1/h', whose dimension does not fit Q1; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=selexipag
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- bound model equation to Q66 (Vmax): Vm = Vm, pop (bw/70)^0.88
- Q66 (Vmax) is equation-defined: value moved to equation-variable 'Vm'; equation kept verbatim
- status held at route_to_review — not promoted
- row roles: 3 per-group rows of ACT-333679 covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 64 linked by role; re-tagged parent→ACT-333679 ×48

**Extraction notes:**
- unparsed cell psp412202-tbl-0001:row5:col5 = '&lt;0.001'
- unparsed cell psp412202-tbl-0001:row7:col5 = '&lt;0.001'
- unparsed cell psp412202-tbl-0001:row8:col5 = '&lt;0.001'
- unparsed cell psp412202-tbl-0001:row11:col1 = 'Apparent volume of distribution, central compartment ACT‐333679'
- unparsed cell psp412202-tbl-0001:row12:col5 = '&lt;0.001'
- unparsed cell psp412202-tbl-0001:row13:col1 = 'Metabolism rate constant selexipag to ACT‐333679'
- unparsed cell psp412202-tbl-0001:row14:col1 = 'Transfer rate constant central to peripheral compartment ACT‐333679'
- unparsed cell psp412202-tbl-0001:row15:col1 = 'Transfer rate constant peripheral to central compartment ACT‐333679'
- unparsed cell psp412202-tbl-0001:row16:col1 = 'Elimination rate constant ACT‐333679'
- unparsed cell psp412202-tbl-0001:row20:col5 = '&lt;0.001'
- unparsed cell psp412202-tbl-0001:row23:col1 = 'Proportional error ACT‐333679'
- LLM selected parameter table(s) 1
- captured model equation Vm = Vm, pop (bw/70)^0.88

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row6:col2', 'psp412202-tbl-0001:row6:col3', 'psp412202-tbl-0001:row6:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412202-tbl-0001:row11:col2', 'psp412202-tbl-0001:row11:col3', 'psp412202-tbl-0001:row11:col4'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row13:col2', 'psp412202-tbl-0001:row13:col3', 'psp412202-tbl-0001:row13:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row16:col2', 'psp412202-tbl-0001:row16:col3', 'psp412202-tbl-0001:row16:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row3:col2', 'psp412202-tbl-0001:row3:col3', 'psp412202-tbl-0001:row3:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412202-tbl-0001:row4:col2', 'psp412202-tbl-0001:row4:col3', 'psp412202-tbl-0001:row4:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row2:col2'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | ERA | not captured | not captured | ['psp412202-tbl-0001:row18:col2', 'psp412202-tbl-0001:row18:col3', 'psp412202-tbl-0001:row18:col4', 'psp412202-tbl-0001:row18:col5'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row9:col2', 'psp412202-tbl-0001:row9:col3', 'psp412202-tbl-0001:row9:col4'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row14:col2', 'psp412202-tbl-0001:row14:col3', 'psp412202-tbl-0001:row14:col4'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row10:col2', 'psp412202-tbl-0001:row10:col3', 'psp412202-tbl-0001:row10:col4'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412202-tbl-0001:row15:col2', 'psp412202-tbl-0001:row15:col3', 'psp412202-tbl-0001:row15:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19.1 L/h | not captured | not captured | ['psp412202-tbl-0001:row6:col2', 'psp412202-tbl-0001:row6:col3', 'psp412202-tbl-0001:row6:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 4.65 L | not captured | not captured | ['psp412202-tbl-0001:row11:col2', 'psp412202-tbl-0001:row11:col3', 'psp412202-tbl-0001:row11:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 12.9 L | not captured | not captured | ['psp412202-tbl-0001:row4:col2', 'psp412202-tbl-0001:row4:col3', 'psp412202-tbl-0001:row4:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_selexipag/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Krause_2017` / `Krause_2017::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:20 UTC</sub>
