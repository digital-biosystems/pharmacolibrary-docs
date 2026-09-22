<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03X&quot;,&quot;href&quot;:&quot;atc/C03X.md&quot;},{&quot;label&quot;:&quot;tolvaptan&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/&quot;},{&quot;label&quot;:&quot;Van_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolvaptan_Lanke2019_reference&quot;,&quot;label&quot;:&quot;Lanke_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Lanke2019_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Plosker2010_reference&quot;,&quot;label&quot;:&quot;Plosker_2010_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Plosker2010_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Bhatt2014_reference&quot;,&quot;label&quot;:&quot;Bhatt_2014_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Bhatt2014_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Shoaf2012v3_reference&quot;,&quot;label&quot;:&quot;Shoaf_2012_3_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Shoaf2012v3_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Shoaf2017_reference&quot;,&quot;label&quot;:&quot;Shoaf_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Shoaf2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Van2013_reference&quot;,&quot;label&quot;:&quot;Van_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Van2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tolvaptan — `Tolvaptan_Van2013_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="gpt-oss:120b re-read this paper; the two readings agree on 0.818 of the compared fields. The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>accepted, but a check is unmet or a value is borderline; the record page says which.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>a model of the other family re-read the paper and agreed on every compared field.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>the second reading differs on a non-structural field (a population label, a flag).</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>the second reading differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `theta_cl_f_chf_nyha_class_1_or_2`, `theta_cl_f_chf_nyha_class_3_or_4`, `theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h`, `theta_cl_f_hyponatremia_moderate_hyponatremia`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the simulated model does not reproduce a value the paper reports; the engineer did not exercise the covariate scenarios this record defines. Evidence: T1_t_half_beta — expected 10.0 — got 5.723318744624852 — ratio 0.5723; T1_t_half_beta — expected 11.5 — got 5.723318744624852 — ratio 0.4977; T1_t_half_beta — expected 12.6 — got 5.723318744624852 — ratio 0.4542; T1_t_half_beta — expected 13.5 — got 5.723318744624852 — ratio 0.4239.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Open the paper's reported table and confirm the target value and its units.
3. Compare with the transcribed value in _transcribev2.yaml for this stem.
4. If the transcription is right, the extracted parameters are suspect — check CL and volume in _interpretv2.yaml against the paper.
5. If the transcription is wrong, fix the extraction; the model rebuild follows.
6. Advisory only — the base model still replicates.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
not matched (stem Van_2013)

## Model component
<dbs-pgx drug="tolvaptan" model-id="Tolvaptan_Van2013_reference" status="needs_review" stale="false" population="healthy subjects and patients with hyponatremia secondary to congestive heart failure or hepatic cirrhosis" measured-compound="tolvaptan" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t_lag (h) | `Q83` · tlag | 0.154 | h | 554.4 | [h] | 2.28 | exact (1.0) | Van_2013_table_p8_1:row0:col1, Van_2013_table_p8_1:row0:col2 | — | not captured |
| k_a (h^-1) | `Q49` · kabs | 0.832 | h^-1 | 0.0002311111111111111 | [1] / [h] | 5.76 | exact (1.0) | Van_2013_table_p8_1:row1:col1, Van_2013_table_p8_1:row1:col2 | — | not captured |
| CL/F (l/h) | `Q27` · CL/F | 16.0 | l/h | 4.444444444444444e-06 | [l] / [h] | 7.56 | exact (1.0) | Van_2013_table_p8_1:row3:col1, Van_2013_table_p8_1:row3:col2 | — | not captured |
| V_c/F (l) | `Q290` · V1/F | 111 | l | 0.111 | [l] | 6.80 | exact (1.0) | Van_2013_table_p8_1:row9:col1, Van_2013_table_p8_1:row9:col2 | — | not captured |
| CL_d/F (l/h) | `Q69` · Q/F | 2.93 | l/h | 8.13888888888889e-07 | [l] / [h] | 8.94 | exact (1.0) | Van_2013_table_p8_1:row14:col1, Van_2013_table_p8_1:row14:col2 | — | not captured |
| V_p/F (l) | `Q82` · V2/F | 31.2 | l | 0.0312 | [l] | 9.74 | exact (1.0) | Van_2013_table_p8_1:row15:col1, Van_2013_table_p8_1:row15:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.372 | not captured | not captured | not captured | 22.3 | not captured (not captured) | Van_2013_table_p8_1:row4:col1, Van_2013_table_p8_1:row4:col2 | — | not captured |
| theta_cl_f_chf_nyha_class_1_or_2 | `Q900` · theta_cl_f_chf_nyha_class_1_or_2 | -6.69 | l/h | not captured | not captured | 19.6 | not captured (not captured) | Van_2013_table_p8_1:row5:col1, Van_2013_table_p8_1:row5:col2 | — | not captured |
| theta_cl_f_chf_nyha_class_3_or_4 | `Q900` · theta_cl_f_chf_nyha_class_3_or_4 | -8.72 | l/h | not captured | not captured | 13.8 | not captured (not captured) | Van_2013_table_p8_1:row6:col1, Van_2013_table_p8_1:row6:col2 | — | not captured |
| theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h | `Q900` · theta_cl_f_cirrhosis_child_pugh_score_ge_6_l_h | -6.72 | l/h | not captured | not captured | 17.1 | not captured (not captured) | Van_2013_table_p8_1:row7:col1, Van_2013_table_p8_1:row7:col2 | — | not captured |
| theta_cl_f_hyponatremia_moderate_hyponatremia | `Q900` · theta_cl_f_hyponatremia_moderate_hyponatremia | -2.92 | l/h | not captured | not captured | 21.2 | not captured (not captured) | Van_2013_table_p8_1:row8:col1, Van_2013_table_p8_1:row8:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.678 | not captured | not captured | not captured | 17.3 | not captured (not captured) | Van_2013_table_p8_1:row10:col1, Van_2013_table_p8_1:row10:col2 | — | not captured |
| theta_v1_f_chf_nyha_class_1_or_2 | `Q900` · theta_v1_f_chf_nyha_class_1_or_2 | -44.5 | l | not captured | not captured | 18.2 | not captured (not captured) | Van_2013_table_p8_1:row11:col1, Van_2013_table_p8_1:row11:col2 | — | not captured |
| theta_v1_f_chf_nyha_class_3_or_4 | `Q900` · theta_v1_f_chf_nyha_class_3_or_4 | -54.1 | l | not captured | not captured | 13.9 | not captured (not captured) | Van_2013_table_p8_1:row12:col1, Van_2013_table_p8_1:row12:col2 | — | not captured |
| theta_v1_f_cirrhosis_child_pugh_score_ge_10_l | `Q900` · theta_v1_f_cirrhosis_child_pugh_score_ge_10_l | 71.9 | l | not captured | not captured | 27.0 | not captured (not captured) | Van_2013_table_p8_1:row13:col1, Van_2013_table_p8_1:row13:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Relative oral bioavailability (F) | Q87 | not captured | exact |

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped value-less row: 'ω^2 for k_3'
- dropped value-less row: 'ω^2 for CL/F'
- dropped value-less row: 'ω^2 for V_c/F'
- dropped value-less row: 'ω^2 for CL_d/F'
- dropped value-less row: 'ω^2 for V_p/F'
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- theta_v1_f_cirrhosis_child_pugh_score_ge_10_l: label says 'decrease' but the reported value is 71.9 (positive) — curated as an INCREASE, per the printed number
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tolvaptan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Van_2013_table_p8_1:row16:col1 = '0.244 (49.4% CV)'
- unparsed cell Van_2013_table_p8_1:row17:col1 = '0.298 (54.6% CV)'
- unparsed cell Van_2013_table_p8_1:row18:col1 = '0.271 (52.1% CV)'
- unparsed cell Van_2013_table_p8_1:row20:col1 = '0.230 (48.0% CV)'
- unparsed cell Van_2013_table_p8_1:row21:col1 = '0.381 (61.7% CV)'
- unparsed cell Van_2013_table_p8_1:row23:col1 = '1.95 (140% CV)'
- unparsed cell Van_2013_table_p8_1:row24:col1 = '0.0910 (30.2% CV)'
- skipped illustrative/example figure caption(s) fig_1 — per-individual fit, not model parameters

## Validation

**Cross-check (two models):** <span class="pk-badge pk-badge--red">not confirmed</span>  
second reader `gpt-oss:120b` · first reading `qwen3.6:27b-q8_0` · agreement 0.818 (18/22 fields) · the first reading is what this page shows

<details><summary>4 field(s) the two readings disagree on</summary>

| field | first reading | second reading | agreement |
|---|---|---|---|
| `parameters[population mean v c]` | not captured | not captured | only_one_extracted |
| `parameters[population mean vc]` | not captured | not captured | only_one_extracted |
| `parameters[v_c/f].covariate_forms` | ['additive_shift', 'additive_shift', 'additive_shift'] | ['additive_shift', 'additive_shift', 'additive_shift', 'power'] | mismatch |
| `parameters[x]` | not captured | 183 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>the model that re-read the paper. It is chosen from the OTHER family (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them means little.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields the two readings agree on.</td></tr><tr><td><code>verdict</code></td><td>`elevate` both readings agree · `flag` a non-structural field differs · `block` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the primary extracted nothing and was given one hinted retry.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the primary — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_alpha | pass | 3.6 | 3.554 | 0.9872 | 0.25 | reported t½α |
| C1_half_life_beta | pass | 10.0 | 9.988 | 0.9988 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Van_2013_table_p8_1:row3:col1', 'Van_2013_table_p8_1:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Van_2013_table_p8_1:row9:col1', 'Van_2013_table_p8_1:row9:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Van_2013_table_p8_1:row1:col1', 'Van_2013_table_p8_1:row1:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Van_2013_table_p8_1:row14:col1', 'Van_2013_table_p8_1:row14:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Van_2013_table_p8_1:row15:col1', 'Van_2013_table_p8_1:row15:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Van_2013_table_p8_1:row0:col1', 'Van_2013_table_p8_1:row0:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16 L/h | not captured | not captured | ['Van_2013_table_p8_1:row3:col1', 'Van_2013_table_p8_1:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 111 L | not captured | not captured | ['Van_2013_table_p8_1:row9:col1', 'Van_2013_table_p8_1:row9:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 31.2 L | not captured | not captured | ['Van_2013_table_p8_1:row15:col1', 'Van_2013_table_p8_1:row15:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=tolvaptan) | C_central | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_alpha | reference | skipped | 3.6 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 3.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 4.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 5.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | fail | 10.0 | 5.723318744624852 | 0.5723 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 11.5 | 5.723318744624852 | 0.4977 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 12.6 | 5.723318744624852 | 0.4542 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 13.5 | 5.723318744624852 | 0.4239 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 17.7 | 5.723318744624852 | 0.3234 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 10.0 | 5.723318744624852 | 0.5723 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 11.5 | 5.723318744624852 | 0.4977 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 12.6 | 5.723318744624852 | 0.4542 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 10.0 | 5.723318744624852 | 0.5723 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 17.7 | 5.723318744624852 | 0.3234 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tolvaptan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Van_2013` / `Van_2013::reference`)
- model: `../../../knowledgebase/drugs/drug_tolvaptan/models/modelica/Tolvaptan_Van2013_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_tolvaptan/models/modelica/Tolvaptan_Van2013_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_tolvaptan/models/modelica/Tolvaptan_Van2013_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_modelica.zip" download>Tolvaptan_Van2013_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_fmi.zip" download>Tolvaptan_Van2013_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_matlab.zip" download>Tolvaptan_Van2013_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_matlab_simbio.zip" download>Tolvaptan_Van2013_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_sbml.zip" download>Tolvaptan_Van2013_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_cellml.zip" download>Tolvaptan_Van2013_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference.svg" alt="Tolvaptan_Van2013_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_tolvaptan/Tolvaptan_Van2013_reference/Tolvaptan_Van2013_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Tolvaptan_Van2013_reference_params.json` · controls `Tolvaptan_Van2013_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
