<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;flucloxacillin&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/&quot;},{&quot;label&quot;:&quot;Drennan_2021_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flucloxacillin_Drennan2021v2_reference&quot;,&quot;label&quot;:&quot;Drennan_2021_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Flucloxacillin_Jager2020_reference&quot;,&quot;label&quot;:&quot;Jager_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/Flucloxacillin_Jager2020_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flucloxacillin_Wallenburg2021_reference&quot;,&quot;label&quot;:&quot;Wallenburg_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/Flucloxacillin_Wallenburg2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flucloxacillin — `Flucloxacillin_Drennan2021v2_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped
**Second reading:** `gpt-oss:120b` read this paper differently on `parameters[a]` (not captured vs 0.004) and 5 more field(s) — a structural parameter, so the record is disputed.
**How to address:** Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
<sub>owner: **scholar**</sub>

> **Dose compound ≠ measured compound:** dosed `flucloxacillin`, measured `free flucloxacillin`.

## Citation
Drennan PG; Green JK; Gardiner SJ; Metcalf SCL; Kirkpatrick CMJ; Everts RJ; et al. et al. (2021). British journal of clinical pharmacology 87
  ·  DOI: [10.1111/bcp.14887](https://doi.org/10.1111/bcp.14887)

## Model component
<dbs-pgx drug="flucloxacillin" model-id="Flucloxacillin_Drennan2021v2_reference" status="model_quarantined" stale="false" population="adults treated with oral flucloxacillin plus probenecid" measured-compound="free flucloxacillin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag,abs (h) | `Q83` · tlag | 0.101 | h | 363.6 | [h] | 54.8 | boundary (0.8) | Drennan_2021_2_table_p5_1:row1:col1, Drennan_2021_2_table_p5_1:row1:col2, Drennan_2021_2_table_p5_1:row1:col3, Drennan_2021_2_table_p5_1:row1:col4, Drennan_2021_2_table_p5_1:row1:col5, Drennan_2021_2_table_p5_1:row1:col6 | — | not captured |
| kabs (h−1) | `Q49` · kabs | 0.111 | h−1 | 3.0833333333333335e-05 | [1] / [h] | 18.0 | exact (1.0) | Drennan_2021_2_table_p5_1:row3:col1, Drennan_2021_2_table_p5_1:row3:col2, Drennan_2021_2_table_p5_1:row3:col3, Drennan_2021_2_table_p5_1:row3:col4, Drennan_2021_2_table_p5_1:row3:col5, Drennan_2021_2_table_p5_1:row3:col6 | — | not captured |
| Vpop (L) | `Q61` · V | 90.4 | L | 0.09040000000000001 | [l] | 17.2 | llm (0.5) | Drennan_2021_2_table_p5_1:row5:col1, Drennan_2021_2_table_p5_1:row5:col2, Drennan_2021_2_table_p5_1:row5:col3, Drennan_2021_2_table_p5_1:row5:col4, Drennan_2021_2_table_p5_1:row5:col5, Drennan_2021_2_table_p5_1:row5:col6 | — | not captured |
| CLpop (L h−1) | `Q22` · CL | 85.4 | L h−1 | 2.3722222222222222e-05 | [l] / [h] | 20.9 | llm (0.5) | Drennan_2021_2_table_p5_1:row7:col1, Drennan_2021_2_table_p5_1:row7:col2, Drennan_2021_2_table_p5_1:row7:col3, Drennan_2021_2_table_p5_1:row7:col4, Drennan_2021_2_table_p5_1:row7:col5, Drennan_2021_2_table_p5_1:row7:col6 | — | not captured |
| βCLprobenecid | `Q23` · CLb | 0.003 | not captured | not captured | not captured | 22.3 | llm (0.5) | Drennan_2021_2_table_p5_1:row8:col4, Drennan_2021_2_table_p5_1:row8:col5, Drennan_2021_2_table_p5_1:row8:col6 | — | not captured |
| ωabs | `Q312` · IIV | 0.217 | not captured | not captured | not captured | 61.7 | llm (0.5) | Drennan_2021_2_table_p5_1:row14:col1, Drennan_2021_2_table_p5_1:row14:col2, Drennan_2021_2_table_p5_1:row14:col3, Drennan_2021_2_table_p5_1:row14:col4, Drennan_2021_2_table_p5_1:row14:col5, Drennan_2021_2_table_p5_1:row14:col6 | — | not captured |
| ωV | `Q65` · Vss | 0.163 | not captured | not captured | not captured | 97.5 | llm (0.5) | Drennan_2021_2_table_p5_1:row16:col1, Drennan_2021_2_table_p5_1:row16:col2, Drennan_2021_2_table_p5_1:row16:col3, Drennan_2021_2_table_p5_1:row16:col4, Drennan_2021_2_table_p5_1:row16:col5, Drennan_2021_2_table_p5_1:row16:col6 | — | not captured |
| γabs | `Q89` · t1/2γ | 0.184 | not captured | not captured | not captured | 31.2 | llm (0.5) | Drennan_2021_2_table_p5_1:row19:col1, Drennan_2021_2_table_p5_1:row19:col2, Drennan_2021_2_table_p5_1:row19:col3, Drennan_2021_2_table_p5_1:row19:col4, Drennan_2021_2_table_p5_1:row19:col5, Drennan_2021_2_table_p5_1:row19:col6 | — | not captured |
| γV | `Q77` · V3 | 0.082 | not captured | not captured | not captured | 20.8 | llm (0.5) | Drennan_2021_2_table_p5_1:row21:col1, Drennan_2021_2_table_p5_1:row21:col2, Drennan_2021_2_table_p5_1:row21:col3, Drennan_2021_2_table_p5_1:row21:col4, Drennan_2021_2_table_p5_1:row21:col5, Drennan_2021_2_table_p5_1:row21:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q83 ('βTlag,abs', value '0.448') — already have one for this compound
- dropped duplicate Q49 ('βkabs', value '0.308') — already have one for this compound
- dropped duplicate Q22 ('βCL fasting', value '0.18') — already have one for this compound
- dropped unlinked row (NIL): 'βFferrite' — extend the ontology if this is a real PK parameter (source ['Drennan_2021_2_table_p5_1:row11:col1', 'Drennan_2021_2_table_p5_1:row11:col2', 'Drennan_2021_2_table_p5_1:row11:col3', 'Drennan_2021_2_table_p5_1:row11:col4', 'Drennan_2021_2_table_p5_1:row11:col5', 'Drennan_2021_2_table_p5_1:row11:col6'])
- dropped duplicate Q49 ('ωkabs', value '0.203') — already have one for this compound
- dropped duplicate Q22 ('ωCL', value '0.073') — already have one for this compound
- dropped duplicate Q89 ('γk', value '0.273') — already have one for this compound
- dropped duplicate Q22 ('γCL', value '0.058') — already have one for this compound
- dropped unlinked row (NIL): 'a (mg/L)' — extend the ontology if this is a real PK parameter (source ['Drennan_2021_2_table_p5_1:row25:col1', 'Drennan_2021_2_table_p5_1:row25:col2', 'Drennan_2021_2_table_p5_1:row25:col3', 'Drennan_2021_2_table_p5_1:row25:col4', 'Drennan_2021_2_table_p5_1:row25:col5', 'Drennan_2021_2_table_p5_1:row25:col6'])
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['Drennan_2021_2_table_p5_1:row26:col1', 'Drennan_2021_2_table_p5_1:row26:col2', 'Drennan_2021_2_table_p5_1:row26:col3', 'Drennan_2021_2_table_p5_1:row26:col4', 'Drennan_2021_2_table_p5_1:row26:col5', 'Drennan_2021_2_table_p5_1:row26:col6'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=free flucloxacillin

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Drennan_2021_2_table_p5_1:row0:col7 = '[median (90% CI)]'
- unparsed cell Drennan_2021_2_table_p5_1:row1:col7 = '0.321 (0.057–0.552)'
- unparsed cell Drennan_2021_2_table_p5_1:row2:col7 = '-0.78 (-3.72 to -0.287)'
- unparsed cell Drennan_2021_2_table_p5_1:row3:col7 = '0.625 (0.448–0.788)'
- unparsed cell Drennan_2021_2_table_p5_1:row4:col7 = '1.18 (0.138–1.62)'
- unparsed cell Drennan_2021_2_table_p5_1:row5:col7 = '535 (291–641)'
- unparsed cell Drennan_2021_2_table_p5_1:row6:col4 = '1*'
- unparsed cell Drennan_2021_2_table_p5_1:row7:col7 = '413 (305–581)'
- unparsed cell Drennan_2021_2_table_p5_1:row8:col7 = '0.013 (0.006–0.019)'
- unparsed cell Drennan_2021_2_table_p5_1:row9:col4 = '0.75*'
- unparsed cell Drennan_2021_2_table_p5_1:row10:col7 = '-0.668 (-0.987 to -0.396)'
- unparsed cell Drennan_2021_2_table_p5_1:row11:col7 = '1.01 (0.806–1.36)'
- unparsed cell Drennan_2021_2_table_p5_1:row14:col7 = '0.198 (0.073–0.442)'
- unparsed cell Drennan_2021_2_table_p5_1:row15:col7 = '0.163 (0.069–0.304)'
- unparsed cell Drennan_2021_2_table_p5_1:row16:col7 = '0.142 (0.04–0.297)'
- unparsed cell Drennan_2021_2_table_p5_1:row17:col7 = '0.251 (0.1–0.34)'
- unparsed cell Drennan_2021_2_table_p5_1:row19:col7 = '0.489 (0.055–0.686)'
- unparsed cell Drennan_2021_2_table_p5_1:row20:col7 = '0.185 (0.069–0.601)'
- unparsed cell Drennan_2021_2_table_p5_1:row21:col7 = '0.306 (0.19–0.508)'
- unparsed cell Drennan_2021_2_table_p5_1:row22:col7 = '0.27 (0.188–0.324)'
- unparsed cell Drennan_2021_2_table_p5_1:row25:col7 = '0.059 (0.003–0.093)'
- unparsed cell Drennan_2021_2_table_p5_1:row26:col7 = '0.206 (0.17–0.284)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.7 (14/20 fields) | 6 |

<details><summary>6 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[a]` | not captured | 0.004 | only_one_extracted |
| `gpt-oss:120b` | `parameters[βclprobenecid]` | 0.003 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[γabs]` | 0.184 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[γv]` | 0.082 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ωabs]` | 0.217 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ωv].parameter_id` | Q65 | Q312 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row7:col1', 'Drennan_2021_2_table_p5_1:row7:col2', 'Drennan_2021_2_table_p5_1:row7:col3', 'Drennan_2021_2_table_p5_1:row7:col4', 'Drennan_2021_2_table_p5_1:row7:col5', 'Drennan_2021_2_table_p5_1:row7:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row3:col1', 'Drennan_2021_2_table_p5_1:row3:col2', 'Drennan_2021_2_table_p5_1:row3:col3', 'Drennan_2021_2_table_p5_1:row3:col4', 'Drennan_2021_2_table_p5_1:row3:col5', 'Drennan_2021_2_table_p5_1:row3:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row5:col1', 'Drennan_2021_2_table_p5_1:row5:col2', 'Drennan_2021_2_table_p5_1:row5:col3', 'Drennan_2021_2_table_p5_1:row5:col4', 'Drennan_2021_2_table_p5_1:row5:col5', 'Drennan_2021_2_table_p5_1:row5:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Drennan_2021_2_table_p5_1:row1:col1', 'Drennan_2021_2_table_p5_1:row1:col2', 'Drennan_2021_2_table_p5_1:row1:col3', 'Drennan_2021_2_table_p5_1:row1:col4', 'Drennan_2021_2_table_p5_1:row1:col5', 'Drennan_2021_2_table_p5_1:row1:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 85.4 | not captured | not captured | ['Drennan_2021_2_table_p5_1:row7:col1', 'Drennan_2021_2_table_p5_1:row7:col2', 'Drennan_2021_2_table_p5_1:row7:col3', 'Drennan_2021_2_table_p5_1:row7:col4', 'Drennan_2021_2_table_p5_1:row7:col5', 'Drennan_2021_2_table_p5_1:row7:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_flucloxacillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Drennan_2021_2` / `Drennan_2021_2::reference`)
- model: `../../../knowledgebase/drugs/drug_flucloxacillin/models/modelica/_needs_review/Flucloxacillin_Drennan2021v2_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_flucloxacillin/models/modelica/_needs_review/Flucloxacillin_Drennan2021v2_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference/Flucloxacillin_Drennan2021v2_reference_matlab.zip" download>Flucloxacillin_Drennan2021v2_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference/Flucloxacillin_Drennan2021v2_reference_matlab_simbio.zip" download>Flucloxacillin_Drennan2021v2_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference/Flucloxacillin_Drennan2021v2_reference_sbml.zip" download>Flucloxacillin_Drennan2021v2_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference/Flucloxacillin_Drennan2021v2_reference_cellml.zip" download>Flucloxacillin_Drennan2021v2_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-15 12:00 UTC</sub>
