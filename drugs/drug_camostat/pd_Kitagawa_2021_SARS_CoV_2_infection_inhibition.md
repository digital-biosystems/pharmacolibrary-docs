<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Camostat_Kosinsky2022_r_s_e&quot;,&quot;label&quot;:&quot;Kosinsky_2022_r_s_e&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/Camostat_Kosinsky2022_r_s_e.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Camostat_Kosinsky2022_value&quot;,&quot;label&quot;:&quot;Kosinsky_2022_value&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/Camostat_Kosinsky2022_value.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Camostat_Kim2023_gba&quot;,&quot;label&quot;:&quot;Kim_2023_gba&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/Camostat_Kim2023_gba.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Camostat_Kim2023_gbpa&quot;,&quot;label&quot;:&quot;Kim_2023_gbpa&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/Camostat_Kim2023_gbpa.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Camostat_Kitagawa2021_reference&quot;,&quot;label&quot;:&quot;Kitagawa_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/Camostat_Kitagawa2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Kitagawa_2021`
- **model family:** `unknown`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Kitagawa J; Arai H; Iida H; Mukai J; Furukawa K; Ohtsu S; et al. et al. (2021). Clinical and translational science 14
  ·  DOI: [10.1111/cts.13052](https://doi.org/10.1111/cts.13052)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Absorption rate constant (KA) [/h] — Estimate | `Q49` · not captured | 5.91 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row2:col1 |
| Absorption rate constant (KA) [/h] — RSE (%) | `Q49` · not captured | 49.2 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row2:col2 |
| Clearance (CL) [L/h] — Estimate | `Q22` · not captured | 680 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row3:col1 |
| Clearance (CL) [L/h] — RSE (%) | `Q358` · not captured | 9.78 | not captured | not captured | llm_corrected (not captured) | cts13052-tbl-0002:row3:col2 |
| Volume of distribution of the central (V2/F) [L] — Estimate | `Q82` · not captured | 904 | not captured | not captured | llm_corrected (not captured) | cts13052-tbl-0002:row4:col1 |
| Volume of distribution of the central (V2/F) [L] — RSE (%) | `Q82` · not captured | 8.83 | not captured | not captured | llm_corrected (not captured) | cts13052-tbl-0002:row4:col2 |
| Intercompartmental clearance (Q) [L/h] — Estimate | `Q30` · not captured | 25.6 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row5:col1 |
| Intercompartmental clearance (Q) [L/h] — RSE (%) | `Q30` · not captured | 15 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row5:col2 |
| Volume of distribution of the peripheral (V3/F) [L] — Estimate | `Q78` · not captured | 151 | not captured | not captured | llm_corrected (not captured) | cts13052-tbl-0002:row6:col1 |
| Volume of distribution of the peripheral (V3/F) [L] — RSE (%) | `Q78` · not captured | 19.9 | not captured | not captured | llm_corrected (not captured) | cts13052-tbl-0002:row6:col2 |
| Lag time [h] — Estimate | `Q83` · not captured | 0.319 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row7:col1 |
| Lag time [h] — RSE (%) | `Q83` · not captured | 2.39 | not captured | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row7:col2 |
| IOV on KA [% CV] — Estimate | `Q313` · not captured | 105 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row19:col1 |
| IOV on KA [% CV] — RSE (%) | `Q313` · not captured | 22.7 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row19:col2 |
| IOV on FA [% CV] — Estimate | `Q313` · not captured | 35.8 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row20:col1 |
| IOV on FA [% CV] — RSE (%) | `Q313` · not captured | 10.7 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row20:col2 |
| Proportional residual error [% CV] — Estimate | `Q316` · not captured | 0.39 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row22:col1 |
| Proportional residual error [% CV] — RSE (%) | `Q316` · not captured | 4.46 | IOV | not captured | llm_confirmed (not captured) | cts13052-tbl-0002:row22:col2 |
| EC50 value of GBPA that inhibited SARS‐Cov‐2 infection | `Q321` · not captured | 178 | nM | not captured | review_gapfill (not captured) | Kitagawa_2021:review |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.0 (0/23 fields) | 23 |

<details><summary>23 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | 4-(4-guanidinobenzoyloxy)phenylacetic acid (GBPA) | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q22]` | 680 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 25.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q313]` | 105 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q313]` | 22.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q313]` | 35.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q313]` | 10.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 0.39 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 4.46 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 178 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 9.78 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 5.91 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 49.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q78]` | 151 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q78]` | 19.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q82]` | 904 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q82]` | 8.83 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q83]` | 0.319 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q83]` | 2.39 | not captured | only_one_extracted |

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
<sub>← back to [camostat](drugs/drug_camostat/)</sub>
