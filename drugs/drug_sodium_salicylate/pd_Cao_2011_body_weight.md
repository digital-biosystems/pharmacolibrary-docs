<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumSalicylate_Mathurkar2018_reference&quot;,&quot;label&quot;:&quot;Mathurkar_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/SodiumSalicylate_Mathurkar2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSalicylate_Lowenthal1974_four_normal_subjects&quot;,&quot;label&quot;:&quot;Lowenthal_1974_four_normal_subjects&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSalicylate_Lowenthal1974_six_anephric_patients&quot;,&quot;label&quot;:&quot;Lowenthal_1974_six_anephric_patients&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.056). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Cao_2011`
- **model family:** `disease_progression`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Cao Y; Dubois DC; Sun H; Almon RR; Jusko WJ et al. (2011). The Journal of pharmacology and experimental therapeutics 339
  ·  DOI: [10.1124/jpet.111.185686](https://doi.org/10.1124/jpet.111.185686)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| k in_glu , mg/dl/week — Estimate | `Q327` · not captured | 223 | mg/dl/week | not captured | llm (not captured) | tab_1:row1:col2 |
| k in_glu , mg/dl/week — SE% | `Q327` · not captured | 0.527 | mg/dl/week | not captured | llm (not captured) | tab_1:row1:col3 |
| k in_glu , mg/dl/week — IIV% | `Q327` · not captured | 55.7 | mg/dl/week | not captured | llm (not captured) | tab_1:row1:col4 |
| k in_glu , mg/dl/week — SE% | `Q327` · not captured | 332 | mg/dl/week | not captured | llm (not captured) | tab_1:row1:col5 |
| k out_glu , 1/week — Estimate | `Q328` · not captured | 1.34 | 1/week | not captured | llm (not captured) | tab_1:row2:col2 |
| k out_glu , 1/week — SE% | `Q328` · not captured | 0.87 | 1/week | not captured | llm (not captured) | tab_1:row2:col3 |
| k out_glu , 1/week — IIV% | `Q328` · not captured | 0.451 | 1/week | not captured | llm (not captured) | tab_1:row2:col4 |
| k out_glu , 1/week — SE% | `Q328` · not captured | 70.4 | 1/week | not captured | llm (not captured) | tab_1:row2:col5 |
| k r , 1/week — Estimate | `Q358` · not captured | 4.73 | 1/week | not captured | llm (not captured) | tab_1:row3:col2 |
| k r , 1/week — SE% | `Q358` · not captured | 17.8 | 1/week | not captured | llm (not captured) | tab_1:row3:col3 |
| k r , 1/week — IIV% | `Q312` · not captured | 37.7 | 1/week | not captured | llm (not captured) | tab_1:row3:col4 |
| k r , 1/week — SE% | `Q358` · not captured | 793 | 1/week | not captured | llm (not captured) | tab_1:row3:col5 |
| k d , 1/week — Estimate | `Q331` · not captured | 8.56 | 1/week | not captured | space_fold (not captured) | tab_1:row4:col2 |
| k d , 1/week — SE% | `Q331` · not captured | 4.76 | 1/week | not captured | space_fold (not captured) | tab_1:row4:col3 |
| k d , 1/week — IIV% | `Q331` · not captured | 12.3 | 1/week | not captured | space_fold (not captured) | tab_1:row4:col4 |
| k d , 1/week — SE% | `Q331` · not captured | 398 | 1/week | not captured | space_fold (not captured) | tab_1:row4:col5 |
| k dis1 , 1/week — Estimate | `Q358` · not captured | 0.429 | 1/week | not captured | llm (not captured) | tab_1:row5:col2 |
| k dis1 , 1/week — SE% | `Q358` · not captured | 11.9 | 1/week | not captured | llm (not captured) | tab_1:row5:col3 |
| k dis1 , 1/week — IIV% | `Q312` · not captured | 5.68 | 1/week | not captured | llm (not captured) | tab_1:row5:col4 |
| k dis1 , 1/week — SE% | `Q358` · not captured | 71.5 | 1/week | not captured | llm (not captured) | tab_1:row5:col5 |
| k dis2 , 1/week — Estimate | `Q358` · not captured | 32.2 | 1/week | not captured | llm (not captured) | tab_1:row6:col2 |
| k dis2 , 1/week — SE% | `Q358` · not captured | 19.2 | 1/week | not captured | llm (not captured) | tab_1:row6:col3 |
| k dis2 , 1/week — IIV% | `Q312` · not captured | 49.7 | 1/week | not captured | llm (not captured) | tab_1:row6:col4 |
| k dis2 , 1/week — SE% | `Q358` · not captured | 253 | 1/week | not captured | llm (not captured) | tab_1:row6:col5 |
| k t , 1/week — Estimate | `Q358` · not captured | 1.49 | 1/week | not captured | llm (not captured) | tab_1:row7:col2 |
| k t , 1/week — SE% | `Q358` · not captured | 12.4 | 1/week | not captured | llm (not captured) | tab_1:row7:col3 |
| k t , 1/week — IIV% | `Q312` · not captured | 7.97 | 1/week | not captured | llm (not captured) | tab_1:row7:col4 |
| k t , 1/week — SE% | `Q358` · not captured | 390 | 1/week | not captured | llm (not captured) | tab_1:row7:col5 |
| E 1 , ml/g/week — Estimate | `Q359` · not captured | 0.0116 | ml/g/week | not captured | llm (not captured) | tab_1:row8:col2 |
| E 1 , ml/g/week — SE% | `Q358` · not captured | 34.9 | ml/g/week | not captured | llm (not captured) | tab_1:row8:col3 |
| E 1 , ml/g/week — IIV% | `Q358` · not captured | 4.62 | ml/g/week | not captured | llm (not captured) | tab_1:row8:col4 |
| E 1 , ml/g/week — SE% | `Q358` · not captured | 793 | ml/g/week | not captured | llm (not captured) | tab_1:row8:col5 |
| E 2 — Estimate | `Q38` · not captured | 0.136 | not captured | not captured | llm (not captured) | tab_1:row9:col2 |
| E 2 — IIV% | `Q312` · not captured | 25.6 | not captured | not captured | llm (not captured) | tab_1:row9:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.056 (4/72 fields) | 68 |

<details><summary>68 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[Q301]` | not captured | 11.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q301]` | not captured | 5.68 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q301]` | not captured | 71.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q301]` | not captured | 19.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q301]` | not captured | 49.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q301]` | not captured | 253 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q306]` | not captured | 1.49 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q306]` | not captured | 12.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q306]` | not captured | 7.97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q306]` | not captured | 390 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 25.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 37.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 5.68 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 49.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 7.97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 25.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 0.527 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 332 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 223 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 0.527 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 55.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 332 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 1.34 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 0.87 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 0.451 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 70.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 4.73 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 17.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 37.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 793 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 0.429 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 32.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 1.34 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.87 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.451 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 70.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | not captured | 8.56 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | not captured | 4.76 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | not captured | 12.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | not captured | 398 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | 8.56 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | 4.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | 12.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | 398 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 4.73 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 17.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 793 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.429 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 11.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 71.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 32.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 19.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 253 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 1.49 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 12.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 390 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 34.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 4.62 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 793 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q359]` | 0.0116 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 0.0116 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 34.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 4.62 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 793 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 0.136 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 70 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 71.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | 0.136 | not captured | only_one_extracted |

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
<sub>← back to [sodium salicylate](drugs/drug_sodium_salicylate/)</sub>
