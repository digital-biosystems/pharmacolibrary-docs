<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;rifaximin&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifaximin_Francis2019_reference&quot;,&quot;label&quot;:&quot;Francis_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/Rifaximin_Francis2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifaximin_Wang2021_reference&quot;,&quot;label&quot;:&quot;Wang_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/Rifaximin_Wang2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rifaximin — `Rifaximin_Wang2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C5 dimension mismatch on a structural parameter.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Wang H; Chen C; Chen X; Zhang J; Liu Y; Li X et al. (2021). Frontiers in veterinary science 8
  ·  DOI: [10.3389/fvets.2021.651369](https://doi.org/10.3389/fvets.2021.651369)

## Model component
<dbs-pgx drug="rifaximin" model-id="Rifaximin_Wang2021_reference" status="rejected" stale="false" population="mice with S. aureus-induced mastitis" measured-compound="rifaximin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | `Q63` · V1 | 2.15 | not captured | not captured | not captured | 3.22 | exact (1.0) | T4:row1:col1, T4:row1:col3, T4:row1:col4 | — | not captured |
| V2 | `Q64` · V2 | 0.46 | not captured | not captured | not captured | 18.84 | exact (1.0) | T4:row2:col1, T4:row2:col3, T4:row2:col4 | — | not captured |
| Cl1 | `Q22` · CL | 0.29 | not captured | not captured | not captured | 1.57 | llm (0.6) | T4:row3:col1, T4:row3:col3, T4:row3:col4 | — | not captured |
| Cl2 | `Q30` · Q | 0.89 | not captured | not captured | not captured | 37.77 | special_case (0.95) | T4:row4:col1, T4:row4:col3, T4:row4:col4 | — | not captured |
| α | `Q67` · λ1 | 2.38 | not captured | not captured | not captured | 35.39 | exact (1.0) | T4:row5:col1, T4:row5:col2, T4:row5:col3, T4:row5:col4 | — | not captured |
| ß | `Q60` · t1/2β | 0.11 | not captured | not captured | not captured | 2.77 | llm (0.6) | T4:row6:col1, T4:row6:col2, T4:row6:col3, T4:row6:col4 | — | not captured |
| T1/2 (h) | `Q57` · t1/2z | 5.98 | h | 21528.0 | [h] | not captured | exact (1.0) | Wang_2021_table_3:row2:col1, Wang_2021_table_3:row2:col2, Wang_2021_table_3:row2:col3, Wang_2021_table_3:row2:col4, Wang_2021_table_3:row2:col5 | — | not captured |
| MRT (h) | `Q53` · MRT | 6.66 | h | 23976.0 | [h] | not captured | exact (1.0) | Wang_2021_table_3:row3:col1, Wang_2021_table_3:row3:col2, Wang_2021_table_3:row3:col3, Wang_2021_table_3:row3:col4, Wang_2021_table_3:row3:col5 | — | not captured |
| AUC24 (h·μg/g) | `Q19` · AUCt | 176.83 | h·μg/g | not captured | [[h] · [µg]] / [g] | not captured | llm (0.6) | Wang_2021_table_3:row4:col1, Wang_2021_table_3:row4:col2, Wang_2021_table_3:row4:col3, Wang_2021_table_3:row4:col4 | — | not captured |
| Cmax (μg/g) | `Q32` · Cmax | 25.82 | μg/g | not captured | [µg] / [g] | not captured | exact (1.0) | Wang_2021_table_3:row5:col1, Wang_2021_table_3:row5:col2, Wang_2021_table_3:row5:col3, Wang_2021_table_3:row5:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'AUC24 (h·μg/g)' → Q19 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Cmax (μg/g)' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rifaximin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- companion parameter table 3 transcribed (18 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 6.38 | 6.305 | 0.9882 | 0.25 | reported t½β |
| C5_dimension_Q19 | fail | [time] | h·μg/g | not captured | not captured | ['Wang_2021_table_3:row4:col1', 'Wang_2021_table_3:row4:col2', 'Wang_2021_table_3:row4:col3', 'Wang_2021_table_3:row4:col4'] |
| C5_dimension_Q32 | fail | dimensionless | μg/g | not captured | not captured | ['Wang_2021_table_3:row5:col1', 'Wang_2021_table_3:row5:col2', 'Wang_2021_table_3:row5:col3', 'Wang_2021_table_3:row5:col4'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Wang_2021_table_3:row3:col1', 'Wang_2021_table_3:row3:col2', 'Wang_2021_table_3:row3:col3', 'Wang_2021_table_3:row3:col4', 'Wang_2021_table_3:row3:col5'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Wang_2021_table_3:row2:col1', 'Wang_2021_table_3:row2:col2', 'Wang_2021_table_3:row2:col3', 'Wang_2021_table_3:row2:col4', 'Wang_2021_table_3:row2:col5'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['T4:row3:col1', 'T4:row3:col3', 'T4:row3:col4'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['T4:row4:col1', 'T4:row4:col3', 'T4:row4:col4'] |
| C5_unit_missing_Q60 | fail | [time] | not captured | not captured | not captured | ['T4:row6:col1', 'T4:row6:col2', 'T4:row6:col3', 'T4:row6:col4'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | not captured | not captured | not captured | ['T4:row1:col1', 'T4:row1:col3', 'T4:row1:col4'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['T4:row2:col1', 'T4:row2:col3', 'T4:row2:col4'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | not captured | not captured | not captured | ['T4:row5:col1', 'T4:row5:col2', 'T4:row5:col3', 'T4:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.29 | not captured | not captured | ['T4:row3:col1', 'T4:row3:col3', 'T4:row3:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rifaximin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2021` / `Wang_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-22 03:01 UTC</sub>
