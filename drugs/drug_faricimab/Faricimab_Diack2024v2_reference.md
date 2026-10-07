<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;faricimab&quot;,&quot;href&quot;:&quot;drugs/drug_faricimab/&quot;},{&quot;label&quot;:&quot;Diack_2024_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# faricimab — `Faricimab_Diack2024v2_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Diack C et al., Ocular Pharmacokinetics of Faricimab Fo…, Translational vision scienc… (2024)
  ·  DOI: [10.1167/tvst.13.11.14](https://doi.org/10.1167/tvst.13.11.14)

## Model component
<dbs-pgx drug="faricimab" model-id="Faricimab_Diack2024v2_reference" status="rejected" stale="false" population="adults with nAMD or DME" measured-compound="faricimab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| VA (mL) | `Q61` · V | 0.253 | mL | 2.53e-07 | [ml] | not captured | llm (0.6) | tbl3:row1:col2 | — | not captured |
| kAH (L/day) | `Q3` · CLint | 15.6 | L/day | not captured | [l] / [d] | not captured | llm (0.6) | tbl3:row4:col2 | — | not captured |
| CL (L/day) | `Q22` · CL | 2.33 | L/day | 2.6967592592592594e-08 | [l] / [d] | not captured | exact (1.0) | tbl3:row5:col2 | — | not captured |
| RωkVHωkAH | `Q368` · VH | 0.0251 | not captured | not captured | not captured | not captured | llm (0.6) | tbl3:row17:col2 | — | not captured |
| RωkAHωCL | `Q354` · CLnorm | 0.0311 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | tbl3:row19:col2 | — | not captured |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 1.00 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl3:row9:col2 | — | not captured |
| theta_q369_ada_kvh_l_day | `Q900` · theta_q369_ada_kvh_l_day | 1.30 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl3:row14:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q63 ('VC (L)', value '1.48') — already have one for this compound
- dropped unlinked row (NIL): 'kVH (L/day)' — extend the ontology if this is a real PK parameter (source ['tbl3:row3:col2'])
- unit_dimension_mismatch: 'kAH (L/day)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- routed 'SDprop' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'SDPhaseI' — extend the ontology if this is a real PK parameter (source ['tbl3:row7:col2'])
- dropped unlinked row (NIL): 'SDPhaseII' — extend the ontology if this is a real PK parameter (source ['tbl3:row8:col2'])
- dropped duplicate Q22 ('CLWT (L/day)', value '0.773') — already have one for this compound
- dropped duplicate Q22 ('CLfemale (L/day)', value '0.863') — already have one for this compound
- dropped duplicate Q22 ('CLformulation1 (L/day)', value '0.816') — already have one for this compound
- dropped unlinked row (NIL): 'kVH,age (L/day)' — extend the ontology if this is a real PK parameter (source ['tbl3:row13:col2'])
- covariate effect for Q369 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=faricimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'VA (mL)' is the general volume)
- status held at route_to_review — not promoted
- molar mass: none found for 'faricimab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tbl3:row1:col1 = 'θ1'
- unparsed cell tbl3:row2:col1 = 'θ2'
- unparsed cell tbl3:row3:col1 = 'θ3'
- unparsed cell tbl3:row4:col1 = 'θ4'
- unparsed cell tbl3:row5:col1 = 'θ5'
- unparsed cell tbl3:row6:col1 = 'θ6'
- unparsed cell tbl3:row7:col1 = 'θ7'
- unparsed cell tbl3:row8:col1 = 'θ8'
- unparsed cell tbl3:row9:col1 = 'θ9'
- unparsed cell tbl3:row10:col1 = 'θ10'
- unparsed cell tbl3:row11:col1 = 'θ11'
- unparsed cell tbl3:row12:col1 = 'θ12'
- unparsed cell tbl3:row13:col1 = 'θ13'
- unparsed cell tbl3:row13:col4 = '−0.6 to −0.465'
- unparsed cell tbl3:row14:col1 = 'θ14'
- unparsed cell tbl3:row15:col1 = 'Ω(1,1)'
- unparsed cell tbl3:row15:col6 = '60.5%'
- unparsed cell tbl3:row16:col1 = 'Ω(2,2)'
- unparsed cell tbl3:row16:col6 = '5.0%'
- unparsed cell tbl3:row17:col1 = 'Ω(2,3)'
- unparsed cell tbl3:row18:col1 = 'Ω(3,3)'
- unparsed cell tbl3:row18:col6 = '60.0%'
- unparsed cell tbl3:row19:col1 = 'Ω(3,4)'
- unparsed cell tbl3:row20:col1 = 'Ω(4,4)'
- unparsed cell tbl3:row20:col6 = '52.9%'
- unparsed cell tbl3:row21:col1 = 'Ω(5,5)'
- unparsed cell tbl3:row21:col6 = '42.3%'
- unparsed cell tbl3:row22:col1 = 'Σ(1,1)'
- unparsed cell tbl3:row22:col6 = '10.6%'
- unparsed cell tbl3:row23:col1 = 'Σ(2,2)'
- unparsed cell tbl3:row23:col6 = '17.5%'
- transposed table Diack_2024_2_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Diack_2024_2_table_4:row5:col2 = '0.333 (0.248–0.475)'
- unparsed cell Diack_2024_2_table_4:row5:col3 = '2.2 (1.44–6.8)'
- unparsed cell Diack_2024_2_table_4:row5:col5 = '0.327 (0.236–0.454)'
- unparsed cell Diack_2024_2_table_4:row5:col6 = '2.01 (1.4–4.81)'
- companion parameter table 4 transcribed (4 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl3:row5:col2'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | L/day | not captured | not captured | ['tbl3:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl3:row1:col2'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl3:row19:col2'] |
| C5_unit_missing_Q368 | fail | [length] ** 3 | not captured | not captured | not captured | ['tbl3:row17:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.33 | not captured | not captured | ['tbl3:row5:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0971 L/h | not captured | not captured | ['tbl3:row5:col2'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.000253 L | not captured | not captured | ['tbl3:row1:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_faricimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Diack_2024_2` / `Diack_2024_2::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:17 UTC</sub>
