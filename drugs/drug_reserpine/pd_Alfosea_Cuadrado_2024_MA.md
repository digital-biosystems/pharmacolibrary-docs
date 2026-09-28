<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;reserpine&quot;,&quot;href&quot;:&quot;drugs/drug_reserpine/&quot;},{&quot;label&quot;:&quot;Alfosea-Cuadrado_2024 \u00b7 PD monoamines&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# monoamines — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.644). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Alfosea-Cuadrado_2024`
- **model family:** `indirect_response_ii`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Alfosea-Cuadrado GM; Zarzoso-Foj J; Adell A; Valverde-Navarro AA; González-Soler EM; Mangas-Sanjuán V; et al. et al. (2024). Pharmaceutics 16
  ·  DOI: [10.3390/pharmaceutics16081101](https://doi.org/10.3390/pharmaceutics16081101)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| ka1 (h−1/kg) — Population PKPD Model Estimates | `Q95` · not captured | 19.14 | h−1/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row3:col1 |
| ka1 (h−1/kg) — Population PKPD Model Estimates | `Q95` · not captured | 226 | h−1/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row3:col3 |
| ka1 (h−1/kg) — Population PKPD Model Estimates | `Q95` · not captured | 28 | h−1/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row3:col4 |
| ka1 (h−1/kg) — Bootstrap Results | `Q49` · not captured | 19.14 | h−1/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row3:col5 |
| ka2 (mg/h/kg) — Population PKPD Model Estimates | `Q49` · not captured | 45.43 | mg/h/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row4:col1 |
| ka2 (mg/h/kg) — Population PKPD Model Estimates | `Q49` · not captured | 12 | mg/h/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row4:col2 |
| ka2 (mg/h/kg) — Population PKPD Model Estimates | `Q49` · not captured | 32 | mg/h/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row4:col3 |
| F1 — Population PKPD Model Estimates | `Q40` · not captured | 0.95 | not captured | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row5:col1 |
| F1 — Population PKPD Model Estimates | `Q40` · not captured | 3 | not captured | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row5:col2 |
| F1 — Population PKPD Model Estimates | `Q40` · not captured | 179 | not captured | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row5:col3 |
| F1 — Population PKPD Model Estimates | `Q40` · not captured | 22 | not captured | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row5:col4 |
| V (mL/kg) — Population PKPD Model Estimates | `Q61` · not captured | 1.3 | mL/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row6:col1 |
| V (mL/kg) — Population PKPD Model Estimates | `Q61` · not captured | 21 | mL/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row6:col2 |
| V (mL/kg) — Population PKPD Model Estimates | `Q61` · not captured | 59 | mL/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row6:col3 |
| V (mL/kg) — Population PKPD Model Estimates | `Q61` · not captured | 30 | mL/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row6:col4 |
| CL (mL/h/kg) — Population PKPD Model Estimates | `Q22` · not captured | 11 | mL/h/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row7:col2 |
| CL (mL/h/kg) — Population PKPD Model Estimates | `Q22` · not captured | 37 | mL/h/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row7:col3 |
| CL (mL/h/kg) — Population PKPD Model Estimates | `Q22` · not captured | 25 | mL/h/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row7:col4 |
| kin (mg/h) AMY — Population PKPD Model Estimates | `Q327` · not captured | 6.97 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row8:col1 |
| kin (mg/h) AMY — Population PKPD Model Estimates | `Q327` · not captured | 18 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row8:col2 |
| kin (mg/h) AMY — Population PKPD Model Estimates | `Q327` · not captured | 97 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row8:col3 |
| kin (mg/h) AMY — Population PKPD Model Estimates | `Q327` · not captured | 9 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row8:col4 |
| kin (mg/h) AMY — Bootstrap Results | `Q327` · not captured | 7.04 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row8:col5 |
| kin (mg/h) PFC — Population PKPD Model Estimates | `Q327` · not captured | 2.10 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row9:col1 |
| kin (mg/h) PFC — Population PKPD Model Estimates | `Q327` · not captured | 18 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row9:col2 |
| kin (mg/h) PFC — Bootstrap Results | `Q327` · not captured | 2.16 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row9:col5 |
| kin (mg/h) SC — Population PKPD Model Estimates | `Q327` · not captured | 1.78 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row10:col1 |
| kin (mg/h) SC — Population PKPD Model Estimates | `Q327` · not captured | 19 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row10:col2 |
| kin (mg/h) SC — Bootstrap Results | `Q327` · not captured | 1.76 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row10:col5 |
| kp (h−1) — Population PKPD Model Estimates | `Q410` · not captured | 14 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row11:col2 |
| kp (h−1) — Population PKPD Model Estimates | `Q410` · not captured | 29 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row11:col3 |
| kp (h−1) — Population PKPD Model Estimates | `Q410` · not captured | 37 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row11:col4 |
| kout (h−1) — Population PKPD Model Estimates | `Q328` · not captured | 11 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row12:col2 |
| kout (h−1) — Population PKPD Model Estimates | `Q328` · not captured | 22 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row12:col3 |
| kout (h−1) — Population PKPD Model Estimates | `Q328` · not captured | 24 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row12:col4 |
| SLP1 (h) — Population PKPD Model Estimates | `Q326` · not captured | 47 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row13:col2 |
| SLP1 (h) — Population PKPD Model Estimates | `Q326` · not captured | 358 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row13:col3 |
| SLP1 (h) — Population PKPD Model Estimates | `Q326` · not captured | 11 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row13:col4 |
| k0 (h−1) — Population PKPD Model Estimates | `Q307` · not captured | 6 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row14:col2 |
| k0 (h−1) — Population PKPD Model Estimates | `Q307` · not captured | 9 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row14:col3 |
| k0 (h−1) — Population PKPD Model Estimates | `Q307` · not captured | 67 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row14:col4 |
| SLP2 (h) — Population PKPD Model Estimates | `Q326` · not captured | 1.25 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row15:col1 |
| SLP2 (h) — Population PKPD Model Estimates | `Q326` · not captured | 20 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row15:col2 |
| SLP2 (h) — Population PKPD Model Estimates | `Q326` · not captured | 74 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row15:col3 |
| SLP2 (h) — Population PKPD Model Estimates | `Q326` · not captured | 18 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row15:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.644 (38/59 fields) | 21 |

<details><summary>21 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model_family` | indirect_response_ii | indirect_response_iii | mismatch |
| `gpt-oss:120b` | `parameters[Q326]` | 47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 358 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 1.25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 20 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 74 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 18 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 71 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 19.14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 226 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 28 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | not captured | 1.25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | not captured | 20 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | not captured | 74 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | not captured | 18 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q95]` | 19.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q95]` | 226 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q95]` | 28 | not captured | only_one_extracted |

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
<sub>← back to [reserpine](drugs/drug_reserpine/)</sub>
