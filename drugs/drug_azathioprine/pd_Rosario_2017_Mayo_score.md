<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azathioprine_Ding1979_reference&quot;,&quot;label&quot;:&quot;Ding_1979_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Ding1979_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azathioprine_elYazigi1993_reference&quot;,&quot;label&quot;:&quot;el-Yazigi_1993_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azathioprine_Yang2015_reference&quot;,&quot;label&quot;:&quot;Yang_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Yang2015_reference.md&quot;,&quot;status&quot;:&quot;needs review \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azathioprine_Lin2021_reference&quot;,&quot;label&quot;:&quot;Lin_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Lin2021_reference.md&quot;,&quot;status&quot;:&quot;rejected \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azathioprine_Rosario2017_reference&quot;,&quot;label&quot;:&quot;Rosario_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Rosario2017_reference.md&quot;,&quot;status&quot;:&quot;rejected \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# clinical response — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Rosario_2017`
- **model family:** `sigmoid_emax`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Rosario M; Dirks NL; Milch C; Parikh A; Bargfrede M; Wyant T; et al. et al. (2017). Clinical pharmacokinetics 56
  ·  DOI: [10.1007/s40262-017-0546-0](https://doi.org/10.1007/s40262-017-0546-0)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| C max (lg/mL) — Vedolizumab dose a | `Q32` · not captured | 5.62 | lg/mL | not captured | llm (not captured) | tab_0:row2:col1 |
| C max (lg/mL) | `Q32` · not captured | 10.4 | lg/mL | not captured | llm (not captured) | tab_0:row2:col2 |
| C max (lg/mL) | `Q32` · not captured | 58.4 | lg/mL | not captured | llm (not captured) | tab_0:row2:col3 |
| C max (lg/mL) | `Q32` · not captured | 150 | lg/mL | not captured | llm (not captured) | tab_0:row2:col4 |
| C max (lg/mL) | `Q32` · not captured | 243 | lg/mL | not captured | llm (not captured) | tab_0:row2:col5 |
| AUC 0-tlast (lgÁday/mL) — Vedolizumab dose a | `Q88` · not captured | 31.3 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row3:col1 |
| AUC 0-tlast (lgÁday/mL) | `Q88` · not captured | 119 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row3:col2 |
| AUC 0-tlast (lgÁday/mL) | `Q88` · not captured | 955 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row3:col3 |
| AUC 0-tlast (lgÁday/mL) | `Q88` · not captured | 3020 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row3:col4 |
| AUC 0-tlast (lgÁday/mL) | `Q88` · not captured | 4840 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row3:col5 |
| AUC 0-? (lgÁday/mL) — Vedolizumab dose a | `Q88` · not captured | 39.1 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row4:col1 |
| AUC 0-? (lgÁday/mL) | `Q88` · not captured | 127 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row4:col2 |
| AUC 0-? (lgÁday/mL) | `Q88` · not captured | 969 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row4:col3 |
| AUC 0-? (lgÁday/mL) | `Q88` · not captured | 3030 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row4:col4 |
| AUC 0-? (lgÁday/mL) | `Q88` · not captured | 4850 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row4:col5 |
| V z (L) — Vedolizumab dose a | `Q61` · not captured | 4.02 | L | not captured | llm (not captured) | tab_0:row5:col1 |
| V z (L) | `Q61` · not captured | 4.89 | L | not captured | llm (not captured) | tab_0:row5:col2 |
| V z (L) | `Q61` · not captured | 3.28 | L | not captured | llm (not captured) | tab_0:row5:col3 |
| V z (L) | `Q61` · not captured | 2.92 | L | not captured | llm (not captured) | tab_0:row5:col4 |
| V z (L) | `Q61` · not captured | 2.73 | L | not captured | llm (not captured) | tab_0:row5:col5 |
| CL (L/day) — Vedolizumab dose a | `Q22` · not captured | 0.412 | L/day | not captured | exact (not captured) | tab_0:row6:col1 |
| CL (L/day) | `Q22` · not captured | 0.297 | L/day | not captured | exact (not captured) | tab_0:row6:col2 |
| CL (L/day) | `Q22` · not captured | 0.164 | L/day | not captured | exact (not captured) | tab_0:row6:col3 |
| CL (L/day) | `Q22` · not captured | 0.136 | L/day | not captured | exact (not captured) | tab_0:row6:col4 |
| CL (L/day) | `Q22` · not captured | 0.139 | L/day | not captured | exact (not captured) | tab_0:row6:col5 |
| t (day) | `Q75` · not captured | 11.7 | day | not captured | llm (not captured) | tab_0:row7:col2 |
| t (day) | `Q75` · not captured | 14.1 | day | not captured | llm (not captured) | tab_0:row7:col3 |
| t (day) | `Q75` · not captured | 15.1 | day | not captured | llm (not captured) | tab_0:row7:col4 |
| t (day) | `Q75` · not captured | 14.8 | day | not captured | llm (not captured) | tab_0:row7:col5 |
| C max (lg/mL) — Vedolizumab dose a | `Q32` · not captured | 48.2 | lg/mL | not captured | llm (not captured) | tab_0:row14:col1 |
| C max (lg/mL) | `Q32` · not captured | 115 | lg/mL | not captured | llm (not captured) | tab_0:row14:col2 |
| C max (lg/mL) | `Q32` · not captured | 188 | lg/mL | not captured | llm (not captured) | tab_0:row14:col3 |
| C max (lg/mL) | `Q32` · not captured | 206 | lg/mL | not captured | llm (not captured) | tab_0:row14:col4 |
| C max (lg/mL) | `Q32` · not captured | 239 | lg/mL | not captured | llm (not captured) | tab_0:row14:col5 |
| AUC 0-tlast (lgÁday/mL) — Vedolizumab dose a | `Q88` · not captured | 884 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row15:col1 |
| AUC 0-tlast (lgÁday/mL) | `Q88` · not captured | 1990 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row15:col2 |
| AUC 0-tlast (lgÁday/mL) | `Q88` · not captured | 3750 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row15:col4 |
| AUC 0-tlast (lgÁday/mL) | `Q88` · not captured | 5488 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row15:col5 |
| AUC 0-? (lgÁday/mL) — Vedolizumab dose a | `Q88` · not captured | 899 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row16:col1 |
| AUC 0-? (lgÁday/mL) | `Q88` · not captured | 2000 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row16:col2 |
| AUC 0-? (lgÁday/mL) | `Q88` · not captured | 3890 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row16:col4 |
| AUC 0-? (lgÁday/mL) | `Q88` · not captured | 5813 | lgÁday/mL | not captured | boundary (not captured) | tab_0:row16:col5 |
| t (day) | `Q75` · not captured | 18.3 | day | not captured | llm (not captured) | tab_0:row17:col2 |
| t (day) | `Q75` · not captured | 21.0 | day | not captured | llm (not captured) | tab_0:row17:col4 |
| t (day) | `Q75` · not captured | 26.2 | day | not captured | llm (not captured) | tab_0:row17:col5 |
| CL (L/day) — Vedolizumab dose a | `Q22` · not captured | 0.200 | L/day | not captured | exact (not captured) | tab_0:row18:col1 |
| CL (L/day) | `Q22` · not captured | 0.150 | L/day | not captured | exact (not captured) | tab_0:row18:col2 |
| CL (L/day) | `Q22` · not captured | 0.154 | L/day | not captured | exact (not captured) | tab_0:row18:col4 |
| V z (L) — Vedolizumab dose a | `Q61` · not captured | 4.05 | L | not captured | llm (not captured) | tab_0:row19:col1 |
| V z (L) | `Q61` · not captured | 3.87 | L | not captured | llm (not captured) | tab_0:row19:col2 |
| V z (L) | `Q61` · not captured | 4.57 | L | not captured | llm (not captured) | tab_0:row19:col4 |
| V ss (L) — Vedolizumab dose a | `Q65` · not captured | 5.72 | L | not captured | llm (not captured) | tab_0:row20:col1 |
| V ss (L) | `Q65` · not captured | 4.49 | L | not captured | llm (not captured) | tab_0:row20:col2 |
| V ss (L) | `Q65` · not captured | 4.95 | L | not captured | llm (not captured) | tab_0:row20:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.0 (0/58 fields) | 58 |

<details><summary>58 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | vedolizumab | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | sigmoid_emax | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q22]` | 0.200 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.150 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.154 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.412 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.297 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.164 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.136 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.139 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 48.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 115 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 188 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 206 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 239 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 5.62 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 10.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 58.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 150 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 243 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 4.05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 3.87 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 4.57 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 4.02 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 4.89 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 3.28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 2.92 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 2.73 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q65]` | 5.72 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q65]` | 4.49 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q65]` | 4.95 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | 18.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | 21.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | 26.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | 11.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | 14.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | 15.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | 14.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 884 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 1990 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 3750 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 5488 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 899 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 2000 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 3890 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 5813 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 31.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 119 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 955 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 3020 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 4840 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 39.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 127 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 969 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 3030 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 4850 | not captured | only_one_extracted |

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
<sub>← back to [azathioprine](drugs/drug_azathioprine/)</sub>
