<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;buprenorphine&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/&quot;},{&quot;label&quot;:&quot;Ng_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Nelson2024_reference&quot;,&quot;label&quot;:&quot;Nelson_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Nelson2024_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Ng2015_reference&quot;,&quot;label&quot;:&quot;Ng_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Ng2015_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Buprenorphine_Priestley2018_reference&quot;,&quot;label&quot;:&quot;Priestley_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Priestley2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# buprenorphine — `Buprenorphine_Ng2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C5 dimension mismatch on a structural parameter.
**Second reading:** `gpt-oss:120b` read this paper differently on `parameters[base]` (not captured vs 0.00377) and 1 more field(s) — not a structural parameter.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Ng CM; Dombrowsky E; Lin H; Erlich ME; Moody DE; Barrett JS; et al. et al. (2015). Pharmacotherapy 35
  ·  DOI: [10.1002/phar.1610](https://doi.org/10.1002/phar.1610)

## Model component
<dbs-pgx drug="buprenorphine" model-id="Buprenorphine_Ng2015_reference" status="rejected" stale="false" population="neonates with neonatal abstinence syndrome and healthy adults" measured-compound="buprenorphine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (hr À1 ) | `Q49` · kabs | 0.429 | hr À1 | 0.00011916666666666666 | [1] / [h] | not captured | exact (1.0) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col4 | — | not captured |
| Ka_ NAS (hr À1 ) | `Q95` · t1/2ka | 0.182 | hr À1 | not captured | [1] / [h] | not captured | llm (0.5) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col3, tab_1:row4:col4 | — | not captured |
| h CL (L/hr) | `Q22` · CL | 112 | L/hr | 3.111111111111111e-05 | [l] / [h] | not captured | boundary (0.8) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col3, tab_1:row5:col4 | — | not captured |
| h V2 (L) | `Q64` · V2 | 113 | L | 0.113 | [l] | not captured | boundary (0.8) | tab_1:row6:col1, tab_1:row6:col2, tab_1:row6:col3, tab_1:row6:col4 | — | not captured |
| h Q (L/hr) | `Q30` · Q | 283 | L/hr | 7.861111111111111e-05 | [l] / [h] | not captured | llm (0.5) | tab_1:row7:col1, tab_1:row7:col2, tab_1:row7:col3, tab_1:row7:col4 | — | not captured |
| h V3 (L) | `Q77` · V3 | 1488 | L | 1.488 | [l] | not captured | boundary (0.8) | tab_1:row8:col1, tab_1:row8:col2, tab_1:row8:col3, tab_1:row8:col4 | — | not captured |
| KM (days) | `Q1` · Km | 0.00398 | days | not captured | [d] | not captured | exact (1.0) | tab_1:row14:col1, tab_1:row14:col2, tab_1:row14:col3, tab_1:row14:col4 | — | not captured |
| Emax | `Q320` · Emax | 0.135 | not captured | not captured | not captured | not captured | exact (1.0) | tab_1:row15:col1, tab_1:row15:col2, tab_1:row15:col3, tab_1:row15:col4 | — | not captured |
| SLP TF (day -1 ) | `Q47` · kel | -0.0203 | day -1 | -2.3495370370370368e-07 | [1] / [d] | not captured | llm (0.5) | tab_1:row16:col2, tab_1:row16:col3, tab_1:row16:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Ka_ NAS (hr À1 )' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'KM (days)' → Q1 (unit '[time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'BASE' — extend the ontology if this is a real PK parameter (source ['tab_1:row18:col1', 'tab_1:row18:col2', 'tab_1:row18:col3', 'tab_1:row18:col4'])
- unit_dimension_mismatch: 'KM V3 (days)' → Q77 (unit '[time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q77 ('KM V3 (days)', value '0.519') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=buprenorphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_1:row9:col1 = '0.177 0.523 2.32'
- unparsed cell tab_1:row9:col2 = '0.0630 0.212 1.01'
- unparsed cell tab_1:row9:col3 = '0.131 0.446 2.10'
- unparsed cell tab_1:row9:col4 = '0.00979-0.246 0.127-0.864 0.537-4.31'
- unparsed cell tab_1:row11:col1 = '0.750 (Fixed)'
- unparsed cell tab_1:row12:col1 = '1.00 (Fixed)'
- unparsed cell tab_1:row16:col1 = '5.00 (Fixed) 0.177'
- unparsed cell tab_1:row20:col1 = '5.00 (Fixed)'
- LLM region tab_1:footnote: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.857 (12/14 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[base]` | not captured | 0.00377 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka_ nas]` | 0.182 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | [time] | days | not captured | not captured | ['tab_1:row14:col1', 'tab_1:row14:col2', 'tab_1:row14:col3', 'tab_1:row14:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3', 'tab_1:row5:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row16:col2', 'tab_1:row16:col3', 'tab_1:row16:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row8:col1', 'tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col4'] |
| C5_dimension_Q95 | fail | 1 / [time] | hr À1 | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3', 'tab_1:row4:col4'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 112.0 | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3', 'tab_1:row5:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_buprenorphine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ng_2015` / `Ng_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-22 17:10 UTC</sub>
