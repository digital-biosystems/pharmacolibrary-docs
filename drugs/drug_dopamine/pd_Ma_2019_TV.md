<div class="pk-tab-mark" data-tab="Information"></div>

# tumor volume — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.061). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Ma_2019`
- **model family:** `indirect_response_ii`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Ma YH; Wang SY; Ren YP; Li J; Guo TJ; Lu W; et al. et al. (2019). Acta pharmacologica Sinica 40
  ·  DOI: [10.1038/s41401-018-0006-x](https://doi.org/10.1038/s41401-018-0006-x)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| k a (per day) — TV | `Q49` · not captured | 78.7 | per day | not captured | space_fold (not captured) | tab_0:row2:col1 |
| k a (per day) — IIV | `Q49` · not captured | 0 | per day | not captured | space_fold (not captured) | tab_0:row2:col3 |
| V/F (L/kg) — TV | `Q76` · not captured | 16.5 | L/kg | not captured | exact (not captured) | tab_0:row3:col1 |
| V/F (L/kg) — IIV | `Q76` · not captured | 0 | L/kg | not captured | exact (not captured) | tab_0:row3:col3 |
| CL/F (L/kg/day) — TV | `Q27` · not captured | 319 | L/kg/day | not captured | exact (not captured) | tab_0:row4:col1 |
| CL/F (L/kg/day) — IIV | `Q27` · not captured | 0 | L/kg/day | not captured | exact (not captured) | tab_0:row4:col3 |
| N 0 (mm 3 ) — IIV | `Q312` · not captured | 29.3 | mm 3 | not captured | llm (not captured) | tab_0:row5:col3 |
| λ 0 (per day) — TV | `Q67` · not captured | 0.229 | per day | not captured | llm (not captured) | tab_0:row6:col1 |
| λ 0 (per day) | `Q67` · not captured | 5.7 | per day | not captured | llm (not captured) | tab_0:row6:col2 |
| λ 0 (per day) — IIV | `Q312` · not captured | 9.2 | per day | not captured | llm (not captured) | tab_0:row6:col3 |
| λ 0 (per day) | `Q67` · not captured | 31.2 | per day | not captured | llm (not captured) | tab_0:row6:col4 |
| λ 1 (mm 3 /day) — TV | `Q67` · not captured | 273 | mm 3 /day | not captured | space_fold (not captured) | tab_0:row7:col1 |
| λ 1 (mm 3 /day) | `Q67` · not captured | 7.9 | mm 3 /day | not captured | space_fold (not captured) | tab_0:row7:col2 |
| λ 1 (mm 3 /day) — IIV | `Q67` · not captured | 17.9 | mm 3 /day | not captured | space_fold (not captured) | tab_0:row7:col3 |
| λ 1 (mm 3 /day) | `Q67` · not captured | 19.6 | mm 3 /day | not captured | space_fold (not captured) | tab_0:row7:col4 |
| k max (per day) — TV | `Q66` · not captured | 1.60 | per day | not captured | llm (not captured) | tab_0:row8:col1 |
| k max (per day) — IIV | `Q320` · not captured | 0 | per day | not captured | llm (not captured) | tab_0:row8:col3 |
| kC 50 (mg/L) — TV | `Q321` · not captured | 2.10 | mg/L | not captured | llm (not captured) | tab_0:row9:col1 |
| kC 50 (mg/L) | `Q321` · not captured | 12.1 | mg/L | not captured | llm (not captured) | tab_0:row9:col2 |
| kC 50 (mg/L) — IIV | `Q321` · not captured | 0 | mg/L | not captured | llm (not captured) | tab_0:row9:col3 |
| ψ — IIV | `Q312` · not captured | 0 | unit | not captured | llm (not captured) | tab_0:row10:col3 |
| σ ADD (mm 3 ) — TV | `Q315` · not captured | 31.5 | mm 3 | not captured | llm (not captured) | tab_0:row12:col1 |
| σ ADD (mm 3 ) | `Q317` · not captured | 10.1 | mm 3 | not captured | llm (not captured) | tab_0:row12:col2 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.061 (3/49 fields) | 46 |

<details><summary>46 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model_family` | indirect_response_ii | disease_progression | mismatch |
| `gpt-oss:120b` | `parameters[Q27]` | 319 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | not captured | 319 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 29.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 9.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 31.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 10.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 10.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 31.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 2.10 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 12.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 2.10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 12.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 2.43 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 0.229 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 5.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 9.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 31.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 8.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 78.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 78.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q66]` | 1.60 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | 0.229 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | 5.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | 31.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | 273 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | 7.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | 17.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | 19.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | not captured | 273 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | not captured | 7.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | not captured | 17.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | not captured | 19.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 16.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | not captured | 16.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | not captured | 0 | only_one_extracted |

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
<sub>← back to [dopamine](drugs/drug_dopamine/)</sub>
