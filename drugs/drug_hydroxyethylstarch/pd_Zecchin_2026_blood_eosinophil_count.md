<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroxyethylstarch_Asskali1999_reference&quot;,&quot;label&quot;:&quot;Asskali_1999_reference&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxyethylstarch/Hydroxyethylstarch_Asskali1999_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxyethylstarch_Haefliger2025_reference&quot;,&quot;label&quot;:&quot;Haefliger_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxyethylstarch/Hydroxyethylstarch_Haefliger2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxyethylstarch_Yamakage2012_reference&quot;,&quot;label&quot;:&quot;Yamakage_2012_reference&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxyethylstarch/Hydroxyethylstarch_Yamakage2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxyethylstarch_Singh2022_reference&quot;,&quot;label&quot;:&quot;Singh_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxyethylstarch/Hydroxyethylstarch_Singh2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.059). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Zecchin_2026`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Zecchin C; Schalkwijk S; Pouliquen IJ; Berges A; Bird N; Follows R; et al. et al. (2026). Clinical pharmacology and therapeutics 119
  ·  DOI: [10.1002/cpt.70183](https://doi.org/10.1002/cpt.70183)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| KRO (GI/L) — Theta | `Q358` · not captured | -1.73 | GI/L | not captured | llm (not captured) | cpt70183-tbl-0002:row1:col1 |
| KRO (GI/L) — SE | `Q358` · not captured | 0.0529 | GI/L | not captured | llm (not captured) | cpt70183-tbl-0002:row1:col2 |
| KOUT (1/h) — Theta | `Q328` · not captured | -4.35 | not captured | not captured | exact (not captured) | cpt70183-tbl-0002:row2:col1 |
| KOUT (1/h) — SE | `Q328` · not captured | 0.0921 | not captured | not captured | exact (not captured) | cpt70183-tbl-0002:row2:col2 |
| KOUT (1/h) — %RSEa | `Q328` · not captured | 2.12 | not captured | not captured | exact (not captured) | cpt70183-tbl-0002:row2:col3 |
| IC50 (μg/mL) — Theta | `Q322` · not captured | -2.34 | μg/mL | not captured | exact (not captured) | cpt70183-tbl-0002:row3:col1 |
| IC50 (μg/mL) — SE | `Q322` · not captured | 0.0789 | μg/mL | not captured | exact (not captured) | cpt70183-tbl-0002:row3:col2 |
| IC50 (μg/mL) — %RSEa | `Q322` · not captured | 3.37 | μg/mL | not captured | exact (not captured) | cpt70183-tbl-0002:row3:col3 |
| I max — Theta | `Q323` · not captured | -1.77 | not captured | not captured | space_fold (not captured) | cpt70183-tbl-0002:row4:col1 |
| I max — SE | `Q323` · not captured | 0.0265 | not captured | not captured | space_fold (not captured) | cpt70183-tbl-0002:row4:col2 |
| I max — %RSEa | `Q323` · not captured | 1.50 | not captured | not captured | space_fold (not captured) | cpt70183-tbl-0002:row4:col3 |
| BEOS2 on I max — Theta | `Q323` · not captured | -0.380 | not captured | not captured | llm (not captured) | cpt70183-tbl-0002:row6:col1 |
| BEOS2 on I max — SE | `Q323` · not captured | 0.0339 | not captured | not captured | llm (not captured) | cpt70183-tbl-0002:row6:col2 |
| BEOS2 on I max — %RSEa | `Q323` · not captured | 8.92 | not captured | not captured | llm (not captured) | cpt70183-tbl-0002:row6:col3 |
| BPV I max — Theta | `Q323` · not captured | 0.294 | not captured | not captured | llm (not captured) | cpt70183-tbl-0002:row15:col1 |
| BPV I max — Parameter estimate (95% CI)b | `Q323` · not captured | 58.5 | not captured | not captured | llm (not captured) | cpt70183-tbl-0002:row15:col4 |
| Residual error — Theta | `Q315` · not captured | 0.350 | not captured | not captured | llm (not captured) | cpt70183-tbl-0002:row17:col1 |
| Residual error — SE | `Q315` · not captured | 0.0203 | not captured | not captured | llm (not captured) | cpt70183-tbl-0002:row17:col2 |
| Residual error — %RSEa | `Q315` · not captured | 5.81 | not captured | not captured | llm (not captured) | cpt70183-tbl-0002:row17:col3 |
| E0 | `Q324` · not captured | -0.2601 | SD 0.3054 | not captured | review_gapfill (not captured) | Zecchin_2026:review |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.059 (3/51 fields) | 48 |

<details><summary>48 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model_family` | indirect_response_i | emax | mismatch |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 0.350 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 0.0203 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.350 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.0203 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 5.81 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 5.81 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 0.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 0.294 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 58.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | -1.73 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | -2.34 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | 0.0789 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | 3.37 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | -2.34 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.0789 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 3.37 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | not captured | -1.77 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | not captured | 0.0265 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | not captured | 1.50 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | not captured | -0.380 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | not captured | 0.0339 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | not captured | 8.92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.294 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 58.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | -1.77 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.0265 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 1.50 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | -0.380 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.0339 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 8.92 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | -0.2601 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.0559 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 3.47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 0.0853 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 29.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | -4.35 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 0.0921 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 2.12 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | -4.35 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.0921 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 2.12 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | -1.73 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.0529 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 0.438 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 0 | only_one_extracted |

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
<sub>← back to [hydroxyethylstarch](drugs/drug_hydroxyethylstarch/)</sub>
