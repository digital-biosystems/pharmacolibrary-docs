<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;polatuzumab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_polatuzumab_vedotin/&quot;},{&quot;label&quot;:&quot;Lu_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# polatuzumab vedotin — `PolatuzumabVedotin_Lu2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `polatuzumab_vedotin`, measured `acMMAE`.

## Citation
Lu D et al., Integrated Two-Analyte Population Pharm…, CPT: pharmacometrics & syst… (2020)
  ·  DOI: [10.1002/psp4.12482](https://doi.org/10.1002/psp4.12482)

## Model component
<dbs-pgx drug="polatuzumab vedotin" model-id="PolatuzumabVedotin_Lu2020_reference" status="rejected" stale="false" population="patients with non-Hodgkin lymphoma" measured-compound="acMMAE" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 14 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k des (1/hour) | `Q47` · kel | 0.0046 | 1/h | 1.2777777777777777e-06 | 1/h | 7.95 | llm (0.6) | psp412482-tbl-0001:row2:col3, psp412482-tbl-0001:row2:col4, psp412482-tbl-0001:row2:col5 | — | not captured |
| CLT (L/hour) | `Q22` · CL | 0.00623 | L/hour | 1.7305555555555556e-09 | [l] / [h] | 19.6 | exact (1.0) | psp412482-tbl-0001:row3:col3, psp412482-tbl-0001:row3:col4, psp412482-tbl-0001:row3:col5 | — | not captured |
| V 1 (L) | `Q63` · V1 | 3.15 | L | 0.00315 | [l] | 1.58 | exact (1.0) | psp412482-tbl-0001:row5:col3, psp412482-tbl-0001:row5:col4, psp412482-tbl-0001:row5:col5 | — | not captured |
| V 2 (L) | `Q64` · V2 | 3.98 | L | 0.00398 | [l] | 2.92 | exact (1.0) | psp412482-tbl-0001:row6:col3, psp412482-tbl-0001:row6:col4, psp412482-tbl-0001:row6:col5 | — | not captured |
| Q (L/hour) | `Q30` · Q | 0.0145 | L/hour | 4.027777777777778e-09 | [l] / [h] | 2.53 | exact (1.0) | psp412482-tbl-0001:row7:col3, psp412482-tbl-0001:row7:col4, psp412482-tbl-0001:row7:col5 | — | not captured |
| V max (ng/mL/hour) | `Q66` · Vmax | 0.0203 | ng/mL/hour | not captured | [ng] / [[h] · [ml]] | 14.3 | special_case (0.95) | psp412482-tbl-0001:row8:col3, psp412482-tbl-0001:row8:col4, psp412482-tbl-0001:row8:col5 | — | not captured |
| K M (ng/mL) | `Q1` · Km | 0.604 | ng/mL | not captured | [ng] / [ml] | 36.2 | space_fold (0.95) | psp412482-tbl-0001:row9:col3, psp412482-tbl-0001:row9:col4, psp412482-tbl-0001:row9:col5 | — | not captured |
| V MMAE (L) | `Q63` · V1 | 82.2 | L | 0.08220000000000001 | [l] | 8.15 | exact (1.0) | psp412482-tbl-0001:row14:col3, psp412482-tbl-0001:row14:col4, psp412482-tbl-0001:row14:col5 | — | not captured |
| CLMMAE (L/hour) | `Q22` · CL | 1.89 | L/hour | 5.25e-07 | [l] / [h] | 8.14 | exact (1.0) | psp412482-tbl-0001:row15:col3, psp412482-tbl-0001:row15:col4, psp412482-tbl-0001:row15:col5 | — | not captured |
| Q MMAE (L/hour) | `Q30` · Q | 36.3 | L/hour | 1.0083333333333332e-05 | [l] / [h] | 12.3 | exact (1.0) | psp412482-tbl-0001:row16:col3, psp412482-tbl-0001:row16:col4, psp412482-tbl-0001:row16:col5 | — | not captured |
| V 2,MMAE (L) | `Q64` · V2 | 200 | L | 0.2 | [l] | 6.13 | exact (1.0) | psp412482-tbl-0001:row17:col3, psp412482-tbl-0001:row17:col4, psp412482-tbl-0001:row17:col5 | — | not captured |
| V MAX,MMAE (ng/mL/hour) | `Q66` · Vmax | 0.0307 | ng/mL/hour | not captured | [ng] / [[h] · [ml]] | 9.17 | llm (0.6) | psp412482-tbl-0001:row18:col3, psp412482-tbl-0001:row18:col4, psp412482-tbl-0001:row18:col5 | — | not captured |
| K SS (ng/mL) | `Q34` · Css | 0.581 | ng/mL | not captured | [ng] / [ml] | 10.5 | llm (0.6) | psp412482-tbl-0001:row19:col3, psp412482-tbl-0001:row19:col4, psp412482-tbl-0001:row19:col5 | — | not captured |
| FRACCLT | `Q370` · CLfm | 3.70 | not captured | not captured | not captured | 3.11 | exact (1.0) | psp412482-tbl-0001:row20:col3, psp412482-tbl-0001:row20:col4, psp412482-tbl-0001:row20:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('CLINF (L/hour)', value '0.0344') — already have one for this compound
- unit_dimension_mismatch: 'V max (ng/mL/hour)' → Q66 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q22 ('CLINF,MAX', value '0.223') — already have one for this compound
- dropped unlinked row (NIL): 'T 50 (month)' — extend the ontology if this is a real PK parameter (source ['psp412482-tbl-0001:row11:col3', 'psp412482-tbl-0001:row11:col4', 'psp412482-tbl-0001:row11:col5'])
- dropped unlinked row (NIL): 'γ' — extend the ontology if this is a real PK parameter (source ['psp412482-tbl-0001:row12:col3', 'psp412482-tbl-0001:row12:col4', 'psp412482-tbl-0001:row12:col5'])
- unit_dimension_mismatch: 'V MAX,MMAE (ng/mL/hour)' → Q66 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q370 ('FRACMM', value '2.72') — already have one for this compound
- dropped unlinked row (NIL): 'ALPH (1/month)' — extend the ontology if this is a real PK parameter (source ['psp412482-tbl-0001:row22:col3', 'psp412482-tbl-0001:row22:col4', 'psp412482-tbl-0001:row22:col5'])
- dropped duplicate Q370 ('FRACT', value '0.139') — already have one for this compound
- implicit units: 'k des (1/hour)' → 1/h (from the paper text: 'The text states: "...k des is the rate constant of exponential decline, with an estimated half‐life of 6.28 days based o')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acMMAE
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 36 linked by role; re-tagged acMMAE→unconjugated MMAE ×30
- review gap-fill skipped: this record measures 'acMMAE', not polatuzumab_vedotin — the review values are the parent's

**Extraction notes:**
- unparsed cell psp412482-tbl-0001:row2:col1 = 'θ1'
- unparsed cell psp412482-tbl-0001:row3:col1 = 'θ2'
- unparsed cell psp412482-tbl-0001:row4:col1 = 'θ3'
- unparsed cell psp412482-tbl-0001:row5:col1 = 'θ4'
- unparsed cell psp412482-tbl-0001:row6:col1 = 'θ5'
- unparsed cell psp412482-tbl-0001:row7:col1 = 'θ6'
- unparsed cell psp412482-tbl-0001:row8:col1 = 'θ7'
- unparsed cell psp412482-tbl-0001:row9:col1 = 'θ8'
- unparsed cell psp412482-tbl-0001:row10:col1 = 'θ9'
- unparsed cell psp412482-tbl-0001:row11:col1 = 'θ10'
- unparsed cell psp412482-tbl-0001:row12:col1 = 'θ11'
- unparsed cell psp412482-tbl-0001:row14:col1 = 'θ12'
- unparsed cell psp412482-tbl-0001:row15:col1 = 'θ13'
- unparsed cell psp412482-tbl-0001:row16:col1 = 'θ14'
- unparsed cell psp412482-tbl-0001:row17:col1 = 'θ15'
- unparsed cell psp412482-tbl-0001:row18:col1 = 'θ16'
- unparsed cell psp412482-tbl-0001:row19:col1 = 'θ17'
- unparsed cell psp412482-tbl-0001:row20:col1 = 'θ18'
- unparsed cell psp412482-tbl-0001:row21:col1 = 'θ19'
- unparsed cell psp412482-tbl-0001:row22:col1 = 'θ20'
- unparsed cell psp412482-tbl-0001:row23:col1 = 'θ21'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 14 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row9:col3', 'psp412482-tbl-0001:row9:col4', 'psp412482-tbl-0001:row9:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row3:col3', 'psp412482-tbl-0001:row3:col4', 'psp412482-tbl-0001:row3:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row15:col3', 'psp412482-tbl-0001:row15:col4', 'psp412482-tbl-0001:row15:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row7:col3', 'psp412482-tbl-0001:row7:col4', 'psp412482-tbl-0001:row7:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row16:col3', 'psp412482-tbl-0001:row16:col4', 'psp412482-tbl-0001:row16:col5'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row19:col3', 'psp412482-tbl-0001:row19:col4', 'psp412482-tbl-0001:row19:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row2:col3', 'psp412482-tbl-0001:row2:col4', 'psp412482-tbl-0001:row2:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row5:col3', 'psp412482-tbl-0001:row5:col4', 'psp412482-tbl-0001:row5:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row14:col3', 'psp412482-tbl-0001:row14:col4', 'psp412482-tbl-0001:row14:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row6:col3', 'psp412482-tbl-0001:row6:col4', 'psp412482-tbl-0001:row6:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row17:col3', 'psp412482-tbl-0001:row17:col4', 'psp412482-tbl-0001:row17:col5'] |
| C5_dimension_Q66 | fail | [mass] / [length] ** 3 / [time] | ng/mL/hour | not captured | not captured | ['psp412482-tbl-0001:row8:col3', 'psp412482-tbl-0001:row8:col4', 'psp412482-tbl-0001:row8:col5'] |
| C5_dimension_Q66 | fail | [mass] / [length] ** 3 / [time] | ng/mL/hour | not captured | not captured | ['psp412482-tbl-0001:row18:col3', 'psp412482-tbl-0001:row18:col4', 'psp412482-tbl-0001:row18:col5'] |
| C5_unit_missing_Q370 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row20:col3', 'psp412482-tbl-0001:row20:col4', 'psp412482-tbl-0001:row20:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.00623 | not captured | not captured | ['psp412482-tbl-0001:row3:col3', 'psp412482-tbl-0001:row3:col4', 'psp412482-tbl-0001:row3:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00623 L/h | not captured | not captured | ['psp412482-tbl-0001:row3:col3', 'psp412482-tbl-0001:row3:col4', 'psp412482-tbl-0001:row3:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.89 L/h | not captured | not captured | ['psp412482-tbl-0001:row15:col3', 'psp412482-tbl-0001:row15:col4', 'psp412482-tbl-0001:row15:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.15 L | not captured | not captured | ['psp412482-tbl-0001:row5:col3', 'psp412482-tbl-0001:row5:col4', 'psp412482-tbl-0001:row5:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 82.2 L | not captured | not captured | ['psp412482-tbl-0001:row14:col3', 'psp412482-tbl-0001:row14:col4', 'psp412482-tbl-0001:row14:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.98 L | not captured | not captured | ['psp412482-tbl-0001:row6:col3', 'psp412482-tbl-0001:row6:col4', 'psp412482-tbl-0001:row6:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 200 L | not captured | not captured | ['psp412482-tbl-0001:row17:col3', 'psp412482-tbl-0001:row17:col4', 'psp412482-tbl-0001:row17:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_polatuzumab_vedotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lu_2020` / `Lu_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:11 UTC</sub>
