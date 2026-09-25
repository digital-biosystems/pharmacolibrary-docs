<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

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


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [salsalate](drugs/drug_salsalate/)</sub>
