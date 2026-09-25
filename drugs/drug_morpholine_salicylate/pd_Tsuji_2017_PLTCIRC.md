<div class="pk-tab-mark" data-tab="Information"></div>

# platelet count — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Tsuji_2017`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Tsuji Y; Holford NHG; Kasai H; Ogami C; Heo YA; Higashi Y; Mizoguchi A; To H; Yamamoto Y et al. (2017). British journal of clinical pharmacology 83
  ·  DOI: [10.1111/bcp.13262](https://doi.org/10.1111/bcp.13262)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| CL nonrenal | `Q79` · not captured | -1 | not captured | not captured | llm_corrected (not captured) | tab_0:row5:col3 |
| CL nonrenal | `Q79` · not captured | 1.86 | not captured | not captured | llm_corrected (not captured) | tab_0:row5:col6 |
| CL nonrenal | `Q79` · not captured | 1.76 | not captured | not captured | llm_corrected (not captured) | tab_0:row5:col7 |
| CL nonrenal | `Q79` · not captured | 1.29 | not captured | not captured | llm_corrected (not captured) | tab_0:row5:col8 |
| CL nonrenal — Bootstrap sample estimates | `Q79` · not captured | 2.17 | not captured | not captured | llm_corrected (not captured) | tab_0:row5:col9 |
| CL renal | `Q26` · not captured | -1 | not captured | not captured | llm_corrected (not captured) | tab_0:row6:col4 |
| CL renal | `Q26` · not captured | 1.44 | not captured | not captured | llm_corrected (not captured) | tab_0:row6:col7 |
| CL renal | `Q26` · not captured | 1.42 | not captured | not captured | llm_corrected (not captured) | tab_0:row6:col8 |
| CL renal — Bootstrap sample estimates | `Q26` · not captured | 0.83 | not captured | not captured | llm_corrected (not captured) | tab_0:row6:col9 |
| CL renal | `Q26` · not captured | 2.20 | not captured | not captured | llm_corrected (not captured) | tab_0:row6:col10 |
| VC | `Q63` · not captured | 22.9 | not captured | not captured | exact (not captured) | tab_0:row7:col7 |
| VC | `Q63` · not captured | 19.3 | not captured | not captured | exact (not captured) | tab_0:row7:col8 |
| VC — Bootstrap sample estimates | `Q63` · not captured | 8.1 | not captured | not captured | exact (not captured) | tab_0:row7:col9 |
| VC | `Q63` · not captured | 29.4 | not captured | not captured | exact (not captured) | tab_0:row7:col10 |
| VP | `Q64` · not captured | 24.7 | not captured | not captured | exact (not captured) | tab_0:row8:col7 |
| VP | `Q64` · not captured | 24.4 | not captured | not captured | exact (not captured) | tab_0:row8:col8 |
| VP — Bootstrap sample estimates | `Q64` · not captured | 16.7 | not captured | not captured | exact (not captured) | tab_0:row8:col9 |
| VP | `Q64` · not captured | 34.2 | not captured | not captured | exact (not captured) | tab_0:row8:col10 |
| Q | `Q30` · not captured | -1 | not captured | not captured | exact (not captured) | tab_0:row9:col3 |
| Q | `Q30` · not captured | 10.9 | not captured | not captured | exact (not captured) | tab_0:row9:col6 |
| Q | `Q30` · not captured | 10.5 | not captured | not captured | exact (not captured) | tab_0:row9:col7 |
| Q | `Q30` · not captured | 2.3 | not captured | not captured | exact (not captured) | tab_0:row9:col8 |
| Q — Bootstrap sample estimates | `Q30` · not captured | 23.5 | not captured | not captured | exact (not captured) | tab_0:row9:col9 |
| F | `Q40` · not captured | 0.922 | not captured | not captured | exact (not captured) | tab_0:row11:col7 |
| F | `Q40` · not captured | 0.895 | not captured | not captured | exact (not captured) | tab_0:row11:col8 |
| F — Bootstrap sample estimates | `Q40` · not captured | 0.747 | not captured | not captured | exact (not captured) | tab_0:row11:col9 |
| F | `Q40` · not captured | 0.999 | not captured | not captured | exact (not captured) | tab_0:row11:col10 |
| FU | `Q46` · not captured | 0.823 | not captured | not captured | exact (not captured) | tab_0:row13:col7 |
| FU | `Q46` · not captured | 0.823 | not captured | not captured | exact (not captured) | tab_0:row13:col8 |
| FU — Bootstrap sample estimates | `Q46` · not captured | 0.809 | not captured | not captured | exact (not captured) | tab_0:row13:col9 |
| FU | `Q46` · not captured | 0.836 | not captured | not captured | exact (not captured) | tab_0:row13:col10 |
| MTT | `Q81` · not captured | 113.0 | not captured | not captured | exact (not captured) | tab_0:row17:col7 |
| MTT | `Q81` · not captured | 103.5 | not captured | not captured | exact (not captured) | tab_0:row17:col8 |
| MTT — Bootstrap sample estimates | `Q81` · not captured | 65.4 | not captured | not captured | exact (not captured) | tab_0:row17:col9 |
| MTT | `Q81` · not captured | 130.0 | not captured | not captured | exact (not captured) | tab_0:row17:col10 |
| SC50 | `Q322` · not captured | -1 | unknown | not captured | llm (not captured) | tab_0:row23:col3 |
| SC50 | `Q322` · not captured | 0.00364 | unknown | not captured | llm (not captured) | tab_0:row23:col5 |
| SC50 | `Q322` · not captured | 0.324 | unknown | not captured | llm (not captured) | tab_0:row23:col6 |
| SC50 | `Q322` · not captured | 0.00004 | unknown | not captured | llm (not captured) | tab_0:row23:col7 |
| SC50 | `Q322` · not captured | 1.405 | unknown | not captured | llm (not captured) | tab_0:row23:col8 |
| CL — Bootstrap sample estimates | `Q22` · not captured | 0.369 | not captured | not captured | exact (not captured) | tab_0:row27:col9 |
| CL | `Q22` · not captured | 0.366 | not captured | not captured | exact (not captured) | tab_0:row27:col10 |
| CL | `Q22` · not captured | 0.267 | not captured | not captured | exact (not captured) | tab_0:row27:col11 |
| CL | `Q22` · not captured | 0.464 | not captured | not captured | exact (not captured) | tab_0:row27:col12 |
| VC — Bootstrap sample estimates | `Q63` · not captured | 1.421 | not captured | not captured | exact (not captured) | tab_0:row28:col9 |
| VC | `Q63` · not captured | 1.518 | not captured | not captured | exact (not captured) | tab_0:row28:col10 |
| VC | `Q63` · not captured | 1.065 | not captured | not captured | exact (not captured) | tab_0:row28:col11 |
| VC | `Q63` · not captured | 2.348 | not captured | not captured | exact (not captured) | tab_0:row28:col12 |
| VP — Bootstrap sample estimates | `Q64` · not captured | 0.050 | not captured | not captured | exact (not captured) | tab_0:row29:col9 |
| VP | `Q64` · not captured | 0.206 | not captured | not captured | exact (not captured) | tab_0:row29:col10 |
| VP | `Q64` · not captured | 0.024 | not captured | not captured | exact (not captured) | tab_0:row29:col11 |
| VP | `Q64` · not captured | 0.629 | not captured | not captured | exact (not captured) | tab_0:row29:col12 |
| Q — Bootstrap sample estimates | `Q30` · not captured | 1.822 | not captured | not captured | exact (not captured) | tab_0:row30:col9 |
| Q | `Q30` · not captured | 1.624 | not captured | not captured | exact (not captured) | tab_0:row30:col10 |
| Q | `Q30` · not captured | 0.585 | not captured | not captured | exact (not captured) | tab_0:row30:col11 |
| Q | `Q30` · not captured | 2.447 | not captured | not captured | exact (not captured) | tab_0:row30:col12 |
| F — Bootstrap sample estimates | `Q40` · not captured | 0 | not captured | not captured | exact (not captured) | tab_0:row32:col9 |
| MTT — Bootstrap sample estimates | `Q81` · not captured | 0.239 | not captured | not captured | exact (not captured) | tab_0:row33:col9 |
| MTT | `Q81` · not captured | 0.205 | not captured | not captured | exact (not captured) | tab_0:row33:col10 |
| MTT | `Q81` · not captured | 0.002 | not captured | not captured | exact (not captured) | tab_0:row33:col11 |
| MTT | `Q81` · not captured | 0.444 | not captured | not captured | exact (not captured) | tab_0:row33:col12 |
| RUV PROP_TOTAL | `Q316` · not captured | 0.318 | not captured | not captured | llm_corrected (not captured) | tab_0:row40:col7 |
| RUV PROP_TOTAL | `Q316` · not captured | 0.311 | not captured | not captured | llm_corrected (not captured) | tab_0:row40:col8 |
| RUV PROP_TOTAL — Bootstrap sample estimates | `Q315` · not captured | 0.258 | not captured | not captured | llm_confirmed (not captured) | tab_0:row40:col9 |
| RUV PROP_TOTAL | `Q316` · not captured | 0.356 | not captured | not captured | llm_corrected (not captured) | tab_0:row40:col10 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/69 fields) | 69 |

<details><summary>69 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | linezolid | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | proportional | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_i | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q22]` | 0.366 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.267 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.464 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.369 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q26]` | 2.20 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q26]` | -1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q26]` | 1.44 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q26]` | 1.42 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q26]` | 0.83 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 1.624 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 0.585 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 2.447 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 1.822 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | -1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 10.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 10.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 2.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 23.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.258 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 0.356 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 0.318 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 0.311 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | -1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.00364 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.324 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.00004 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 1.405 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 0.999 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 0.922 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 0.895 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 0.747 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q46]` | 0.836 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q46]` | 0.823 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q46]` | 0.823 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q46]` | 0.809 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 1.518 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 1.065 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 2.348 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 1.421 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 29.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 22.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 19.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 8.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 0.206 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 0.024 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 0.629 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 0.050 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 34.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 24.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 24.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 16.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q79]` | -1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q79]` | 1.86 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q79]` | 1.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q79]` | 1.29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q79]` | 2.17 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 130.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 113.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 103.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 65.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 0.205 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 0.002 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 0.444 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 0.239 | not captured | only_one_extracted |

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
<sub>← back to [morpholine salicylate](drugs/drug_morpholine_salicylate/)</sub>
