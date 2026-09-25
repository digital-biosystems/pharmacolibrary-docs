<div class="pk-tab-mark" data-tab="Information"></div>

# INR — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.407). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Comets_2012`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Comets E; Diquet B; Legrain S; Huisse MG; Godon A; Bruhat C; Chauveheid MP; Delpierre S; Duval X; Berrut G; Verstuyft C; Aumont MC; Mentré F et al. (2012). Clinical pharmacology and therapeutics 91
  ·  DOI: [10.1038/clpt.2011.309](https://doi.org/10.1038/clpt.2011.309)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| V (L) — Base model | `Q61` · not captured | 9.06 | L | not captured | exact (not captured) | tab_1:row3:col1 |
| V (L) — Final model | `Q61` · not captured | 41 | L | not captured | exact (not captured) | tab_1:row3:col2 |
| V (L) | `Q61` · not captured | 8.24 | L | not captured | exact (not captured) | tab_1:row3:col3 |
| V (L) | `Q61` · not captured | 36 | L | not captured | exact (not captured) | tab_1:row3:col4 |
| β V,men | `Q60` · not captured | 0.24 | hr -1 | not captured | llm (not captured) | tab_1:row4:col3 |
| CL (L.hr -1 ) — Base model | `Q22` · not captured | 0.12 | L.hr -1 | not captured | exact (not captured) | tab_1:row6:col1 |
| CL (L.hr -1 ) — Final model | `Q22` · not captured | 47 | L.hr -1 | not captured | exact (not captured) | tab_1:row6:col2 |
| CL (L.hr -1 ) | `Q22` · not captured | 0.10 | L.hr -1 | not captured | exact (not captured) | tab_1:row6:col3 |
| CL (L.hr -1 ) | `Q22` · not captured | 42 | L.hr -1 | not captured | exact (not captured) | tab_1:row6:col4 |
| β CL,cordarone | `Q358` · not captured | -0.18 | hr -1 | not captured | llm_corrected (not captured) | tab_1:row8:col3 |
| I 0 (-) — Base model | `Q324` · not captured | 1.11 | hr -1 | not captured | llm (not captured) | tab_1:row9:col1 |
| I 0 (-) | `Q358` · not captured | 1.10 | hr -1 | not captured | llm (not captured) | tab_1:row9:col3 |
| I 0 (-) | `Q358` · not captured | 7 | hr -1 | not captured | llm (not captured) | tab_1:row9:col4 |
| k out (hr -1 ) — Base model | `Q328` · not captured | 0.03 | hr -1 | not captured | space_fold (not captured) | tab_1:row10:col1 |
| k out (hr -1 ) — Final model | `Q328` · not captured | 80 | hr -1 | not captured | space_fold (not captured) | tab_1:row10:col2 |
| k out (hr -1 ) | `Q328` · not captured | 0.03 | hr -1 | not captured | space_fold (not captured) | tab_1:row10:col3 |
| k out (hr -1 ) | `Q328` · not captured | 85 | hr -1 | not captured | space_fold (not captured) | tab_1:row10:col4 |
| IC 50 (mg.L -1 ) — Base model | `Q322` · not captured | 1.71 | mg.L -1 | not captured | space_fold (not captured) | tab_1:row11:col1 |
| IC 50 (mg.L -1 ) — Final model | `Q322` · not captured | 56 | mg.L -1 | not captured | space_fold (not captured) | tab_1:row11:col2 |
| IC 50 (mg.L -1 ) | `Q322` · not captured | 2.18 | mg.L -1 | not captured | space_fold (not captured) | tab_1:row11:col3 |
| IC 50 (mg.L -1 ) | `Q322` · not captured | 53 | mg.L -1 | not captured | space_fold (not captured) | tab_1:row11:col4 |
| β IC 50 ,surgery | `Q322` · not captured | -0.54 | hr -1 | not captured | llm (not captured) | tab_1:row12:col3 |
| I max (-) — Base model | `Q323` · not captured | 0.89 | hr -1 | not captured | space_fold (not captured) | tab_1:row13:col1 |
| I max (-) | `Q323` · not captured | 0.94 | hr -1 | not captured | space_fold (not captured) | tab_1:row13:col3 |
| γ (-) | `Q89` · not captured | 1.71 | hr -1 | not captured | llm (not captured) | tab_1:row14:col3 |
| γ (-) | `Q89` · not captured | 40 | hr -1 | not captured | llm (not captured) | tab_1:row14:col4 |
| β γ,surgery | `Q47` · not captured | -0.46 | hr -1 | not captured | llm (not captured) | tab_1:row15:col3 |
| a PK (mg.L -1 ) — Base model | `Q900` · not captured | 0.19 | mg.L -1 | not captured | llm (not captured) | tab_1:row17:col1 |
| a PK (mg.L -1 ) | `Q900` · not captured | 0.20 | mg.L -1 | not captured | llm (not captured) | tab_1:row17:col3 |
| b PK (-) — Base model | `Q358` · not captured | 0.09 | hr -1 | not captured | llm (not captured) | tab_1:row18:col1 |
| b PK (-) | `Q358` · not captured | 0.08 | hr -1 | not captured | llm (not captured) | tab_1:row18:col3 |
| b PD (-) — Base model | `Q358` · not captured | 0.14 | hr -1 | not captured | llm (not captured) | tab_1:row19:col1 |
| b PD (-) | `Q358` · not captured | 0.13 | hr -1 | not captured | llm (not captured) | tab_1:row19:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.407 (22/54 fields) | 32 |

<details><summary>32 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model_family` | indirect_response_i | indirect_response_ii | mismatch |
| `gpt-oss:120b` | `parameters[Q324]` | 1.11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 1.70 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 53 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 1.71 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 40 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | -0.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 0.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 0.14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 0.13 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 1.11 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 1.10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.09 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.13 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | -0.18 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 1.10 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | -0.46 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | 0.88 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | 0.09 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | 10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q60]` | 0.24 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q68]` | not captured | 0.24 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q68]` | not captured | -0.18 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q71]` | not captured | 0.20 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 1.71 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 40 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q900]` | 0.19 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q900]` | 0.20 | not captured | only_one_extracted |

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
<sub>← back to [phenindione](drugs/drug_phenindione/)</sub>
