<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;codeine&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/&quot;},{&quot;label&quot;:&quot;Ashraf_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Codeine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Shah1990_reference&quot;,&quot;label&quot;:&quot;Shah_1990_reference&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Shah1990_reference.md&quot;,&quot;status&quot;:&quot;needs review \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Anderson2026_reference&quot;,&quot;label&quot;:&quot;Anderson_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Anderson2026_reference.md&quot;,&quot;status&quot;:&quot;rejected \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Ashraf2024_reference&quot;,&quot;label&quot;:&quot;Ashraf_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Ashraf2024_reference.md&quot;,&quot;status&quot;:&quot;rejected \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Codeine_Capparelli2005_reference&quot;,&quot;label&quot;:&quot;Capparelli_2005_reference&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Capparelli2005_reference.md&quot;,&quot;status&quot;:&quot;rejected \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Gretler2020_reference&quot;,&quot;label&quot;:&quot;Gretler_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Gretler2020_reference.md&quot;,&quot;status&quot;:&quot;rejected \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# codeine — `Codeine_Ashraf2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.545). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C8 unreachable/orphan compartment or unlinked metabolite
**Second reading:** `gpt-oss:120b` read this paper differently on `model.parameterization` (mechanistic vs apparent) and 4 more field(s) — a structural parameter, so the record is disputed.
**How to address:** read the paper and record the missing values by hand, or leave the record rejected — there is nothing here to build.
<sub>owner: **curator**</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-17 23:06:14.211406+00:00) predates the upstream re-run (2026-09-23 14:29:36.558268+00:00). Current validate status: `rejected`.

## Citation
Ashraf MW; Poikola S; Neuvonen M; Kiiski JI; Kontinen VK; Olkkola KT; et al. et al. (2024). Clinical pharmacokinetics 63
  ·  DOI: [10.1007/s40262-024-01433-9](https://doi.org/10.1007/s40262-024-01433-9)

## Model component
<dbs-pgx drug="codeine" model-id="Codeine_Ashraf2024_reference" status="rejected" stale="true" population="ambulatory surgical patients" measured-compound="codeine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka,cod | `Q49` · kabs | 6.49 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4, Tab2:row2:col5 | — | not captured |
| Vc,cod | `Q63` · V1 | 231.2 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4, Tab2:row4:col5 | — | not captured |
| fmor | `Q45` · fm | 0.108 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col4, Tab2:row8:col5 | — | not captured |
| CL | `Q22` · CL | 0.18 | ml/h | 5e-11 | L/h | not captured | review_gapfill (0.7) | Capparelli_2005:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'sir results' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'descriptiona' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'CLcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'])
- dropped unlinked row (NIL): 'Fcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col5'])
- dropped unlinked row (NIL): 'CLmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5'])
- dropped duplicate Q63 ('Vc,mor', value '9.447') — already have one for this compound
- dropped unlinked row (NIL): 'GENeff' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4', 'Tab2:row9:col5'])
- dropped unlinked row (NIL): 'CLC6G' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4', 'Tab2:row10:col5'])
- dropped duplicate Q63 ('Vc,C6G', value '5.36') — already have one for this compound
- dropped unlinked row (NIL): 'CLM3G' — extend the ontology if this is a real PK parameter (source ['Tab2:row12:col1', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col4', 'Tab2:row12:col5'])
- dropped duplicate Q63 ('Vc,M3G', value '4.17') — already have one for this compound
- dropped duplicate Q49 ('ηka,cod', value '2.96') — already have one for this compound
- dropped duplicate Q63 ('ηVc,cod', value '0.158') — already have one for this compound
- dropped unlinked row (NIL): 'ηFcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col2', 'Tab2:row16:col3', 'Tab2:row16:col4', 'Tab2:row16:col5'])
- dropped unlinked row (NIL): 'ηCLmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col2', 'Tab2:row17:col3', 'Tab2:row17:col4', 'Tab2:row17:col5'])
- dropped unlinked row (NIL): 'ηRmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col2', 'Tab2:row18:col3', 'Tab2:row18:col4', 'Tab2:row18:col5'])
- dropped unlinked row (NIL): 'εcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col4', 'Tab2:row19:col5'])
- dropped unlinked row (NIL): 'εmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col2', 'Tab2:row20:col3', 'Tab2:row20:col4', 'Tab2:row20:col5'])
- dropped unlinked row (NIL): 'εC6G' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col2', 'Tab2:row21:col3', 'Tab2:row21:col4', 'Tab2:row21:col5'])
- dropped unlinked row (NIL): 'εM3G' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2', 'Tab2:row22:col3', 'Tab2:row22:col4', 'Tab2:row22:col5'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Vc,cod)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=codeine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- gap-filled Q22 (CL) from Capparelli_2005's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col1 = 'Codeine absorption rate constant (h-1)'
- unparsed cell Tab2:row11:col1 = 'C6G central volume (L)'
- unparsed cell Tab2:row11:col3 = '(2.88–7 .86)'
- unparsed cell Tab2:row13:col1 = 'M3G central volume (L)'
- unparsed cell Tab2:row21:col1 = 'RV for C6G observations'
- unparsed cell Tab2:row22:col1 = 'RV for M3G observations'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.545 (6/11 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[*1xn/*35xn, *1xn/*2xn]` | not captured | 832 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clcod]` | not captured | 59.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm3g]` | not captured | 4.67 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ηfcod]` | not captured | 0.019 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Capparelli_2005:review'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:row2:col5'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.18 | not captured | not captured | ['Capparelli_2005:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['fmor', '1 - fmor', 'fM3G'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | fail | clearance within physiological range | 0.00018 L/h | not captured | not captured | ['Capparelli_2005:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_codeine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ashraf_2024` / `Ashraf_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-23 14:29 UTC</sub>
