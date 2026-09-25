<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;lanadelumab&quot;,&quot;href&quot;:&quot;drugs/drug_lanadelumab/&quot;},{&quot;label&quot;:&quot;Wang_2020 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lanadelumab_Wang2020_base&quot;,&quot;label&quot;:&quot;Wang_2020_base&quot;,&quot;href&quot;:&quot;drugs/drug_lanadelumab/Lanadelumab_Wang2020_base.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Lanadelumab_Wang2020_final&quot;,&quot;label&quot;:&quot;Wang_2020_final&quot;,&quot;href&quot;:&quot;drugs/drug_lanadelumab/Lanadelumab_Wang2020_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lanadelumab — `Lanadelumab_Wang2020_base`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** disposition incomplete — only clearance/elimination extracted — the engineer needs both; the missing half would be silently filled from the library default.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Wang Y; Marier JF; Kassir N; Chang C; Martin P et al. (2020). Clinical and translational science 13
  ·  DOI: [10.1111/cts.12806](https://doi.org/10.1111/cts.12806)

## Model component
<dbs-pgx drug="lanadelumab" model-id="Lanadelumab_Wang2020_base" status="needs_review" stale="false" population="patients with hereditary angioedema and healthy subjects" measured-compound="lanadelumab" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F, Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/hour) | `Q27` · CL/F | 0.0337 | L/hour | 9.361111111111111e-09 | [l] / [h] | 24.3 | exact (1.0) | cts12806-tbl-0001:row0:col4, cts12806-tbl-0001:row0:col8, cts12806-tbl-0001:row0:col12 | — | not captured |
| AUCtau,ss (µg × day/mL) | `Q18` · AUCSS | 408 | µg × day/mL | not captured | [[d] · [µg]] / [ml] | 24.3 | llm (0.6) | cts12806-tbl-0001:row2:col4, cts12806-tbl-0001:row2:col8, cts12806-tbl-0001:row2:col12 | — | not captured |
| Cave,ss (µg/mL) | `Q71` · Cavg | 29.2 | µg/mL | not captured | [µg] / [ml] | 24.3 | llm_confirmed (0.6) | cts12806-tbl-0001:row3:col4, cts12806-tbl-0001:row3:col8, cts12806-tbl-0001:row3:col12 | — | not captured |
| Cmax,ss (µg/mL) | `Q32` · Cmax | 35.5 | µg/mL | not captured | [µg] / [ml] | 33.2 | llm_confirmed (0.6) | cts12806-tbl-0001:row4:col4, cts12806-tbl-0001:row4:col8, cts12806-tbl-0001:row4:col12, Wang_2020_table_S14:row8:col2, Wang_2020_table_S14:row8:col3, Wang_2020_table_S14:row8:col4, Wang_2020_table_S14:row8:col5, Wang_2020_table_S14:row8:col6, Wang_2020_table_S14:row8:col7, Wang_2020_table_S14:row8:col8, Wang_2020_table_S14:row8:col9, Wang_2020_table_S14:row8:col10, Wang_2020_table_S14:row8:col11 | — | not captured |
| Cmin,ss (µg/mL) | `Q36` · Cmin | 24.6 | µg/mL | not captured | [µg] / [ml] | 33.3 | llm_confirmed (0.6) | cts12806-tbl-0001:row5:col4, cts12806-tbl-0001:row5:col8, cts12806-tbl-0001:row5:col12, Wang_2020_table_S14:row9:col2, Wang_2020_table_S14:row9:col3, Wang_2020_table_S14:row9:col4, Wang_2020_table_S14:row9:col5, Wang_2020_table_S14:row9:col6, Wang_2020_table_S14:row9:col7, Wang_2020_table_S14:row9:col8, Wang_2020_table_S14:row9:col9, Wang_2020_table_S14:row9:col10, Wang_2020_table_S14:row9:col11 | — | not captured |
| Tmax (hour) | `Q56` · tmax | 98.6 | hour | 354960.0 | [h] | 21.1 | exact (1.0) | cts12806-tbl-0001:row6:col4, cts12806-tbl-0001:row6:col8, cts12806-tbl-0001:row6:col12 | — | not captured |
| t 1/2 (hour) | `Q57` · t1/2z | 361 | hour | 1299600.0 | [h] | 13.5 | space_fold (0.95) | cts12806-tbl-0001:row7:col1, cts12806-tbl-0001:row7:col4, cts12806-tbl-0001:row7:col8, cts12806-tbl-0001:row7:col12 | — | not captured |
| Ka (1/h) | `Q49` · kabs | 0.0179 | not captured | not captured | not captured | not captured | exact (1.0) | Wang_2020_table_S7:row0:col1 | — | not captured |
| V/F/BW(L) | `Q353` · Vnorm/F | 0.182 | L | 0.000182 | [l] | 20.2 | llm (0.6) | Wang_2020_table_S14:row3:col2, Wang_2020_table_S14:row3:col3, Wang_2020_table_S14:row3:col4, Wang_2020_table_S14:row3:col5, Wang_2020_table_S14:row3:col6, Wang_2020_table_S14:row3:col7, Wang_2020_table_S14:row3:col8, Wang_2020_table_S14:row3:col9, Wang_2020_table_S14:row3:col10, Wang_2020_table_S14:row3:col11 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V/F (L) | Q76 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'µg × day/mL' (AUCSS)
- dropped duplicate Q27 ('CL/F (L/h)', value None) — already have one for this compound
- dropped duplicate Q27 ('CL/F(L/h)', value '0.0278') — already have one for this compound
- dropped duplicate Q76 ('V/F(L)', value '14.4') — already have one for this compound
- dropped duplicate Q27 ('CL/F/BW(L/h/kg)', value '0.000353') — already have one for this compound
- dropped duplicate Q49 ('Ka(h-1)', value '0.0178') — already have one for this compound
- dropped duplicate Q18 ('AUCtau,ss (µg·h/mL)', value '10800') — already have one for this compound
- dropped duplicate Q18 ('AUCtau,ss (µg·day/mL)', value '452') — already have one for this compound
- dropped duplicate Q71 ('Cav,ss(µg/mL)', value '32.2') — already have one for this compound
- dropped duplicate Q57 ('t1/2(h)', value '345') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lanadelumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'base' is the base model of Wang_2020 (paper reports 2 stages: base, final); same population, different model-building step

**Extraction notes:**
- transposed table cts12806-tbl-0001: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell cts12806-tbl-0001:row0:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row0:col5 = '0.0278 (0.0173–0.0458)'
- unparsed cell cts12806-tbl-0001:row0:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row0:col9 = '0.0292 (0.0168–0.0583)'
- unparsed cell cts12806-tbl-0001:row0:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row0:col13 = '0.0295 (0.0188–0.0822)'
- unparsed cell cts12806-tbl-0001:row1:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row1:col5 = '14.8 (9.03–19.3)'
- unparsed cell cts12806-tbl-0001:row1:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row1:col9 = '14.9 (8.39–27.7)'
- unparsed cell cts12806-tbl-0001:row1:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row1:col13 = '15.2 (10.2–31.3)'
- unparsed cell cts12806-tbl-0001:row2:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row2:col5 = '218 (132–346)'
- unparsed cell cts12806-tbl-0001:row2:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row2:col9 = '425 (217–740)'
- unparsed cell cts12806-tbl-0001:row2:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row2:col13 = '422 (140–625)'
- unparsed cell cts12806-tbl-0001:row3:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row3:col5 = '7.77 (4.73–12.3)'
- unparsed cell cts12806-tbl-0001:row3:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row3:col9 = '15.2 (7.74–26.4)'
- unparsed cell cts12806-tbl-0001:row3:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row3:col13 = '30.1 (10.0–44.6)'
- unparsed cell cts12806-tbl-0001:row4:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row4:col5 = '11.4 (7.22–17.6)'
- unparsed cell cts12806-tbl-0001:row4:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row4:col9 = '22.3 (11.1–40.4)'
- unparsed cell cts12806-tbl-0001:row4:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row4:col13 = '35.5 (12.1–53.7)'
- unparsed cell cts12806-tbl-0001:row5:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row5:col5 = '4.47 (2.42–7.75)'
- unparsed cell cts12806-tbl-0001:row5:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row5:col9 = '8.66 (2.97–14.7)'
- unparsed cell cts12806-tbl-0001:row5:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row5:col13 = '24.0 (8.56–42.4)'
- unparsed cell cts12806-tbl-0001:row6:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row6:col5 = '120 (96.0–217)'
- unparsed cell cts12806-tbl-0001:row6:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row6:col9 = '121 (73.0–191)'
- unparsed cell cts12806-tbl-0001:row6:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row6:col13 = '97.4 (74.3–121)'
- unparsed cell cts12806-tbl-0001:row7:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row7:col5 = '351 (291–443)'
- unparsed cell cts12806-tbl-0001:row7:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row7:col9 = '340 (234–416)'
- unparsed cell cts12806-tbl-0001:row7:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row7:col13 = '352 (258–507)'
- companion parameter table S7 transcribed (5 record(s), model stage 'base')
- unparsed cell Wang_2020_table_S13:row1:col3 = '45.1%'
- unparsed cell Wang_2020_table_S13:row2:col3 = '9.5%'
- unparsed cell Wang_2020_table_S13:row5:col3 = '23.6%'
- companion parameter table S13 transcribed (35 record(s), model stage 'final')
- transposed table Wang_2020_table_S14: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table S14 transcribed (121 record(s))
- LLM selected parameter table(s) 1, S7, S13, S14

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts12806-tbl-0001:row0:col4', 'cts12806-tbl-0001:row0:col8', 'cts12806-tbl-0001:row0:col12'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['cts12806-tbl-0001:row4:col4', 'cts12806-tbl-0001:row4:col8', 'cts12806-tbl-0001:row4:col12', 'Wang_2020_table_S14:row8:col2', 'Wang_2020_table_S14:row8:col3', 'Wang_2020_table_S14:row8:col4', 'Wang_2020_table_S14:row8:col5', 'Wang_2020_table_S14:row8:col6', 'Wang_2020_table_S14:row8:col7', 'Wang_2020_table_S14:row8:col8', 'Wang_2020_table_S14:row8:col9', 'Wang_2020_table_S14:row8:col10', 'Wang_2020_table_S14:row8:col11'] |
| C5_dimension_Q353 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2020_table_S14:row3:col2', 'Wang_2020_table_S14:row3:col3', 'Wang_2020_table_S14:row3:col4', 'Wang_2020_table_S14:row3:col5', 'Wang_2020_table_S14:row3:col6', 'Wang_2020_table_S14:row3:col7', 'Wang_2020_table_S14:row3:col8', 'Wang_2020_table_S14:row3:col9', 'Wang_2020_table_S14:row3:col10', 'Wang_2020_table_S14:row3:col11'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['cts12806-tbl-0001:row5:col4', 'cts12806-tbl-0001:row5:col8', 'cts12806-tbl-0001:row5:col12', 'Wang_2020_table_S14:row9:col2', 'Wang_2020_table_S14:row9:col3', 'Wang_2020_table_S14:row9:col4', 'Wang_2020_table_S14:row9:col5', 'Wang_2020_table_S14:row9:col6', 'Wang_2020_table_S14:row9:col7', 'Wang_2020_table_S14:row9:col8', 'Wang_2020_table_S14:row9:col9', 'Wang_2020_table_S14:row9:col10', 'Wang_2020_table_S14:row9:col11'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['cts12806-tbl-0001:row6:col4', 'cts12806-tbl-0001:row6:col8', 'cts12806-tbl-0001:row6:col12'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['cts12806-tbl-0001:row7:col1', 'cts12806-tbl-0001:row7:col4', 'cts12806-tbl-0001:row7:col8', 'cts12806-tbl-0001:row7:col12'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['cts12806-tbl-0001:row3:col4', 'cts12806-tbl-0001:row3:col8', 'cts12806-tbl-0001:row3:col12'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts12806-tbl-0001:row1:col4', 'cts12806-tbl-0001:row1:col8', 'cts12806-tbl-0001:row1:col12', 'Wang_2020_table_S7:row2:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0337 L/h | not captured | not captured | ['cts12806-tbl-0001:row0:col4', 'cts12806-tbl-0001:row0:col8', 'cts12806-tbl-0001:row0:col12'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lanadelumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2020` / `Wang_2020::base`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-19 12:38 UTC</sub>
