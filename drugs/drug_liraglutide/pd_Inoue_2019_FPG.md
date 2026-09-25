<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Liraglutide_Carlsson2021_estimate&quot;,&quot;label&quot;:&quot;Carlsson_2021_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Carlsson2021_estimate.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Liraglutide_Carlsson2021_shrinkage&quot;,&quot;label&quot;:&quot;Carlsson_2021_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Carlsson2021_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Liraglutide_Jacobsen2016_reference&quot;,&quot;label&quot;:&quot;Jacobsen_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Jacobsen2016_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Liraglutide_Overgaard2016_total&quot;,&quot;label&quot;:&quot;Overgaard_2016_total&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Overgaard2016_total.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Liraglutide_Overgaard2016_trial_1&quot;,&quot;label&quot;:&quot;Overgaard_2016_trial_1&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Overgaard2016_trial_1.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Liraglutide_Overgaard2016_trial_2&quot;,&quot;label&quot;:&quot;Overgaard_2016_trial_2&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Overgaard2016_trial_2.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# FPG — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.398). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Inoue_2019`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Inoue H; Tamaki Y; Kashihara Y; Muraki S; Kakara M; Hirota T; et al. et al. (2019). British journal of clinical pharmacology 85
  ·  DOI: [10.1111/bcp.13807](https://doi.org/10.1111/bcp.13807)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Baseline FPG (mg dl | `Q324` · not captured | 165 | mg dl | not captured | llm_confirmed (not captured) | tab_0:row2:col4 |
| Baseline FPG (mg dl | `Q324` · not captured | 1.0 | mg dl | not captured | llm_confirmed (not captured) | tab_0:row2:col5 |
| K out, FPG (/day) | `Q328` · not captured | 0.0936 | /day | not captured | llm (not captured) | tab_0:row3:col4 |
| K out, FPG (/day) | `Q328` · not captured | 33.9 | /day | not captured | llm (not captured) | tab_0:row3:col5 |
| Baseline HbA1c (%) | `Q324` · not captured | 7.96 | not captured | not captured | llm_confirmed (not captured) | tab_0:row4:col4 |
| Baseline HbA1c (%) | `Q324` · not captured | 0.6 | not captured | not captured | llm_confirmed (not captured) | tab_0:row4:col5 |
| K out, HbA1c (/day) | `Q328` · not captured | 0.0393 | /day | not captured | llm (not captured) | tab_0:row5:col4 |
| K out, HbA1c (/day) | `Q328` · not captured | 14.3 | /day | not captured | llm (not captured) | tab_0:row5:col5 |
| E placebo | `Q341` · not captured | 0.0168 | not captured | not captured | llm_confirmed (not captured) | tab_0:row6:col4 |
| E placebo | `Q341` · not captured | 23.2 | not captured | not captured | llm_confirmed (not captured) | tab_0:row6:col5 |
| DP FPG (/year) | `Q358` · not captured | 0.0204 | /year | not captured | llm (not captured) | tab_0:row8:col4 |
| DP FPG (/year) | `Q358` · not captured | 17.9 | /year | not captured | llm (not captured) | tab_0:row8:col5 |
| E max, DPP-4i | `Q320` · not captured | 0.116 | not captured | not captured | llm (not captured) | tab_0:row10:col4 |
| E max, DPP-4i | `Q320` · not captured | 5.2 | not captured | not captured | llm (not captured) | tab_0:row10:col5 |
| ED 50, sitagliptin (mg day | `Q322` · not captured | 11.0 | mg day | not captured | llm (not captured) | tab_0:row11:col2 |
| ED 50, sitagliptin (mg day | `Q322` · not captured | 41.9 | mg day | not captured | llm (not captured) | tab_0:row11:col3 |
| ED 50, vildagliptin (mg day | `Q322` · not captured | 9.51 | mg day | not captured | llm (not captured) | tab_0:row12:col2 |
| ED 50, vildagliptin (mg day | `Q322` · not captured | 55.6 | mg day | not captured | llm (not captured) | tab_0:row12:col3 |
| ED 50, alogliptin (mg day | `Q322` · not captured | 2.36 | mg day | not captured | llm (not captured) | tab_0:row13:col2 |
| ED 50, alogliptin (mg day | `Q322` · not captured | 52.1 | mg day | not captured | llm (not captured) | tab_0:row13:col3 |
| ED 50, linagliptin (mg day | `Q322` · not captured | 1.80 | mg day | not captured | llm (not captured) | tab_0:row14:col2 |
| ED 50, linagliptin (mg day | `Q322` · not captured | 26.7 | mg day | not captured | llm (not captured) | tab_0:row14:col3 |
| ED 50, teneligliptin (mg day | `Q322` · not captured | 0 | mg day | not captured | llm (not captured) | tab_0:row15:col2 |
| ED 50, anagliptin (mg day | `Q322` · not captured | 31.4 | mg day | not captured | llm (not captured) | tab_0:row16:col2 |
| ED 50, anagliptin (mg day | `Q322` · not captured | 33.8 | mg day | not captured | llm (not captured) | tab_0:row16:col3 |
| ED 50, saxagliptin (mg day | `Q322` · not captured | 1.47 | mg day | not captured | llm (not captured) | tab_0:row17:col2 |
| ED 50, saxagliptin (mg day | `Q322` · not captured | 48.2 | mg day | not captured | llm (not captured) | tab_0:row17:col3 |
| ED 50, omarigliptin (mg day | `Q322` · not captured | 3.15 | mg day | not captured | llm (not captured) | tab_0:row18:col2 |
| ED 50, omarigliptin (mg day | `Q322` · not captured | 66.7 | mg day | not captured | llm (not captured) | tab_0:row18:col3 |
| E max, GLP-1r | `Q320` · not captured | 0.266 | not captured | not captured | llm (not captured) | tab_0:row21:col4 |
| E max, GLP-1r | `Q320` · not captured | 6.4 | not captured | not captured | llm (not captured) | tab_0:row21:col5 |
| ED 50, liraglutide (mg day | `Q322` · not captured | 0.377 | mg day | not captured | llm (not captured) | tab_0:row22:col2 |
| ED 50, liraglutide (mg day | `Q322` · not captured | 34.7 | mg day | not captured | llm (not captured) | tab_0:row22:col3 |
| ED 50, exenatide BID (mg day | `Q321` · not captured | 0.0120 | mg day | not captured | llm (not captured) | tab_0:row23:col2 |
| ED 50, exenatide BID (mg day | `Q321` · not captured | 12.7 | mg day | not captured | llm (not captured) | tab_0:row23:col3 |
| ED 50 , exenatide QW (mg week | `Q321` · not captured | 0.498 | mg week | not captured | llm (not captured) | tab_0:row24:col2 |
| ED 50 , exenatide QW (mg week | `Q321` · not captured | 9.2 | mg week | not captured | llm (not captured) | tab_0:row24:col3 |
| ED 50, lixisenatide (mg day | `Q322` · not captured | 0.0392 | mg day | not captured | llm (not captured) | tab_0:row25:col2 |
| ED 50, lixisenatide (mg day | `Q322` · not captured | 21.8 | mg day | not captured | llm (not captured) | tab_0:row25:col3 |
| ED 50, dulaglutide (mg week | `Q321` · not captured | 0.328 | mg week | not captured | llm (not captured) | tab_0:row26:col2 |
| ED 50, dulaglutide (mg week | `Q321` · not captured | 5.4 | mg week | not captured | llm (not captured) | tab_0:row26:col3 |
| E max, SGLT2i | `Q320` · not captured | 0.199 | not captured | not captured | llm (not captured) | tab_0:row29:col4 |
| E max, SGLT2i | `Q320` · not captured | 13.6 | not captured | not captured | llm (not captured) | tab_0:row29:col5 |
| ED 50, ipragliflozin (mg day | `Q321` · not captured | 14.3 | mg day | not captured | llm (not captured) | tab_0:row30:col2 |
| ED 50, ipragliflozin (mg day | `Q321` · not captured | 52.5 | mg day | not captured | llm (not captured) | tab_0:row30:col3 |
| ED 50, dapagliflozin (mg day | `Q321` · not captured | 4.06 | mg day | not captured | llm (not captured) | tab_0:row31:col2 |
| ED 50, dapagliflozin (mg day | `Q321` · not captured | 35.5 | mg day | not captured | llm (not captured) | tab_0:row31:col3 |
| ED 50, canagliflozin (mg day | `Q321` · not captured | 30.0 | mg day | not captured | llm (not captured) | tab_0:row32:col2 |
| ED 50, canagliflozin (mg day | `Q321` · not captured | 28.1 | mg day | not captured | llm (not captured) | tab_0:row32:col3 |
| ED 50, empagliflozin (mg day | `Q321` · not captured | 4.54 | mg day | not captured | llm (not captured) | tab_0:row33:col2 |
| ED 50, empagliflozin (mg day | `Q321` · not captured | 62.3 | mg day | not captured | llm (not captured) | tab_0:row33:col3 |
| ISV on Baseline FPG (%) | `Q100` · not captured | 8.4 | not captured | not captured | llm_corrected (not captured) | tab_0:row36:col1 |
| ISV on Baseline FPG (%) | `Q100` · not captured | 13.2 | not captured | not captured | llm_corrected (not captured) | tab_0:row36:col2 |
| ISV on K out, FPG (%) | `Q328` · not captured | 105.4 | not captured | not captured | llm (not captured) | tab_0:row37:col3 |
| ISV on K out, FPG (%) | `Q328` · not captured | 19.0 | not captured | not captured | llm (not captured) | tab_0:row37:col4 |
| ISV on Baseline HbA1c (%) | `Q324` · not captured | 4.4 | not captured | not captured | llm_confirmed (not captured) | tab_0:row38:col1 |
| ISV on Baseline HbA1c (%) | `Q324` · not captured | 10.1 | not captured | not captured | llm_confirmed (not captured) | tab_0:row38:col2 |
| ISV on K out, HbA1c (%) | `Q328` · not captured | 48.3 | not captured | not captured | llm (not captured) | tab_0:row39:col3 |
| ISV on K out, HbA1c (%) | `Q328` · not captured | 67.6 | not captured | not captured | llm (not captured) | tab_0:row39:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.398 (37/93 fields) | 56 |

<details><summary>56 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `effect_form` | proportional | unknown | mismatch |
| `gpt-oss:120b` | `parameters[Q100]` | 8.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q100]` | 13.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 11.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 41.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 9.51 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 55.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 2.36 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 52.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 1.80 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 26.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.377 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 34.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.0392 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 21.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 11.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 41.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 9.51 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 55.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.36 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 52.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 1.80 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 26.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 31.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 33.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 1.47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 48.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 3.15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 66.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.377 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 34.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.0392 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 21.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 165 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 1.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 8.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 13.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 0.777 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 8.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q341]` | not captured | 113.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q341]` | not captured | 16.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 0.893 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 15.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.0204 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 17.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 92.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 22.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q41]` | not captured | 165 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q41]` | not captured | 1.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | not captured | 0.831 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | not captured | 3.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | not captured | 0.654 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | not captured | 5.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 3.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 66.7 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [liraglutide](drugs/drug_liraglutide/)</sub>
