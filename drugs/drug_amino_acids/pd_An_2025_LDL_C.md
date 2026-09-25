<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AminoAcids_Krieger2025_reference&quot;,&quot;label&quot;:&quot;Krieger_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Krieger2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Kleist2022_reference&quot;,&quot;label&quot;:&quot;Kleist_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Kleist2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Min2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Thorsted2026_reference&quot;,&quot;label&quot;:&quot;Thorsted_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Thorsted2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Sudarsono2026_reference&quot;,&quot;label&quot;:&quot;Sudarsono_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Sudarsono2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Sudarsono2026v2_reference&quot;,&quot;label&quot;:&quot;Sudarsono_2026_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Sudarsono2026v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# LDL-C — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.437). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `An_2025`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
An H; Shin D et al. (2025). Drug design, development and therapy 19
  ·  DOI: [10.2147/dddt.s522863](https://doi.org/10.2147/dddt.s522863)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| ka,R (h−1) — PK Model for Rosuvastatin | `Q49` · not captured | 0.21 | h−1 | not captured | boundary_llm_dim_refused (not captured) | t0002:row2:col1 |
| ka,R (h−1) — PK Model for Rosuvastatin | `Q49` · not captured | 9.3 | h−1 | not captured | boundary_llm_dim_refused (not captured) | t0002:row2:col2 |
| ka,R (h−1) — PK Model for Ezetimibe | `Q49` · not captured | 0.64 | h−1 | not captured | boundary_llm_dim_refused (not captured) | t0002:row2:col4 |
| ka,R (h−1) — PK Model for Ezetimibe | `Q49` · not captured | 6.5 | h−1 | not captured | boundary_llm_dim_refused (not captured) | t0002:row2:col5 |
| ka,R (h−1) — PD Model for LDL | `Q49` · not captured | 92.2 | h−1 | not captured | boundary_llm_dim_refused (not captured) | t0002:row2:col7 |
| ka,R (h−1) — PD Model for LDL | `Q49` · not captured | 3.9 | h−1 | not captured | boundary_llm_dim_refused (not captured) | t0002:row2:col8 |
| ClR (L/h) — PK Model for Rosuvastatin | `Q26` · not captured | 92.27 | L/h | not captured | exact (not captured) | t0002:row3:col1 |
| ClR (L/h) — PK Model for Rosuvastatin | `Q26` · not captured | 8.5 | L/h | not captured | exact (not captured) | t0002:row3:col2 |
| ClR (L/h) — PK Model for Ezetimibe | `Q26` · not captured | 20.04 | L/h | not captured | exact (not captured) | t0002:row3:col4 |
| ClR (L/h) — PK Model for Ezetimibe | `Q26` · not captured | 6.7 | L/h | not captured | exact (not captured) | t0002:row3:col5 |
| ClR (L/h) — PD Model for LDL | `Q26` · not captured | 1.9 | L/h | not captured | exact (not captured) | t0002:row3:col7 |
| ClR (L/h) — PD Model for LDL | `Q26` · not captured | 22.2 | L/h | not captured | exact (not captured) | t0002:row3:col8 |
| Vc,R (L) — PK Model for Rosuvastatin | `Q63` · not captured | 222.23 | L | not captured | llm_confirmed (not captured) | t0002:row4:col1 |
| Vc,R (L) — PK Model for Rosuvastatin | `Q63` · not captured | 13.0 | L | not captured | llm_confirmed (not captured) | t0002:row4:col2 |
| Vc,R (L) — PK Model for Ezetimibe | `Q63` · not captured | 31.98 | L | not captured | llm_confirmed (not captured) | t0002:row4:col4 |
| Vc,R (L) — PK Model for Ezetimibe | `Q63` · not captured | 9.8 | L | not captured | llm_confirmed (not captured) | t0002:row4:col5 |
| Vc,R (L) — PD Model for LDL | `Q63` · not captured | 4.6 | L | not captured | llm_confirmed (not captured) | t0002:row4:col7 |
| Vc,R (L) — PD Model for LDL | `Q63` · not captured | 7.8 | L | not captured | llm_confirmed (not captured) | t0002:row4:col8 |
| QR (L/h) — PK Model for Rosuvastatin | `Q30` · not captured | 24.16 | L/h | not captured | llm (not captured) | t0002:row5:col1 |
| QR (L/h) — PK Model for Rosuvastatin | `Q30` · not captured | 12.9 | L/h | not captured | llm (not captured) | t0002:row5:col2 |
| QR (L/h) — PK Model for Ezetimibe | `Q30` · not captured | 44.53 | L/h | not captured | llm (not captured) | t0002:row5:col4 |
| QR (L/h) — PK Model for Ezetimibe | `Q30` · not captured | 8.9 | L/h | not captured | llm (not captured) | t0002:row5:col5 |
| QR (L/h) — PD Model for LDL | `Q30` · not captured | 36.9 | L/h | not captured | llm (not captured) | t0002:row5:col7 |
| QR (L/h) — PD Model for LDL | `Q30` · not captured | 11.8 | L/h | not captured | llm (not captured) | t0002:row5:col8 |
| Vp,R (L) — PK Model for Rosuvastatin | `Q64` · not captured | 650.71 | L | not captured | llm_confirmed (not captured) | t0002:row6:col1 |
| Vp,R (L) — PK Model for Rosuvastatin | `Q64` · not captured | 24.1 | L | not captured | llm_confirmed (not captured) | t0002:row6:col2 |
| Vp,R (L) — PK Model for Ezetimibe | `Q64` · not captured | 363.06 | L | not captured | llm_confirmed (not captured) | t0002:row6:col4 |
| Vp,R (L) — PK Model for Ezetimibe | `Q64` · not captured | 9.5 | L | not captured | llm_confirmed (not captured) | t0002:row6:col5 |
| ωka,R — PK Model for Rosuvastatin | `Q49` · not captured | 29.21 | not captured | not captured | llm_confirmed (not captured) | t0002:row10:col1 |
| ωka,R — PK Model for Rosuvastatin | `Q49` · not captured | 22.3 | not captured | not captured | llm_confirmed (not captured) | t0002:row10:col2 |
| ωCLR — PK Model for Rosuvastatin | `Q26` · not captured | 43.52 | not captured | not captured | llm_confirmed (not captured) | t0002:row11:col1 |
| ωCLR — PK Model for Rosuvastatin | `Q26` · not captured | 14.4 | not captured | not captured | llm_confirmed (not captured) | t0002:row11:col2 |
| ωCLR — PK Model for Ezetimibe | `Q26` · not captured | 33.87 | not captured | not captured | llm_confirmed (not captured) | t0002:row11:col4 |
| ωCLR — PK Model for Ezetimibe | `Q26` · not captured | 14.6 | not captured | not captured | llm_confirmed (not captured) | t0002:row11:col5 |
| ωCLR — PD Model for LDL | `Q26` · not captured | 45.2 | not captured | not captured | llm_confirmed (not captured) | t0002:row11:col7 |
| ωCLR — PD Model for LDL | `Q26` · not captured | 48.8 | not captured | not captured | llm_confirmed (not captured) | t0002:row11:col8 |
| ωVc,R — PK Model for Ezetimibe | `Q63` · not captured | 43.62 | not captured | not captured | llm_confirmed (not captured) | t0002:row12:col4 |
| ωVc,R — PK Model for Ezetimibe | `Q63` · not captured | 18.4 | not captured | not captured | llm_confirmed (not captured) | t0002:row12:col5 |
| ωVc,R — PD Model for LDL | `Q63` · not captured | 38.4 | not captured | not captured | llm_confirmed (not captured) | t0002:row12:col7 |
| ωVc,R — PD Model for LDL | `Q63` · not captured | 22.6 | not captured | not captured | llm_confirmed (not captured) | t0002:row12:col8 |
| ωVc,R — PK Model for Ezetimibe | `Q63` · not captured | 46.13 | not captured | not captured | llm_confirmed (not captured) | t0002:row14:col4 |
| ωVc,R — PK Model for Ezetimibe | `Q63` · not captured | 16.1 | not captured | not captured | llm_confirmed (not captured) | t0002:row14:col5 |
| ka,R – ClR — PK Model for Rosuvastatin | `Q26` · not captured | -0.87 | not captured | not captured | llm_confirmed (not captured) | t0002:row17:col1 |
| ka,R – ClR — PK Model for Rosuvastatin | `Q26` · not captured | 13.9 | not captured | not captured | llm_confirmed (not captured) | t0002:row17:col2 |
| ka,R – ClR — PK Model for Ezetimibe | `Q26` · not captured | 0.74 | not captured | not captured | llm_confirmed (not captured) | t0002:row17:col4 |
| ka,R – ClR — PK Model for Ezetimibe | `Q26` · not captured | 15.7 | not captured | not captured | llm_confirmed (not captured) | t0002:row17:col5 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.437 (38/87 fields) | 49 |

<details><summary>49 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | rosuvastatin, ezetimibe | rosuvastatin and ezetimibe | mismatch |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 44.53 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 8.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 36.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 11.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q26]` | 45.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q26]` | 48.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q26]` | not captured | 24.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q26]` | not captured | 12.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 31.95 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 34.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 24.16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 12.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 44.53 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 8.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 36.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 11.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 29.21 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 22.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 45.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 48.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 41.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 17.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q314]` | not captured | 29.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q314]` | not captured | 59.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 0.73 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 0.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 0.20 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 3.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 0.12 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 0.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q334]` | not captured | 92.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q334]` | not captured | 3.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 29.21 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 22.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 29.27 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 17.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 26.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 10.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 0.33 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 2.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 92.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 3.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 49.39 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 17.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 108.25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 21.2 | only_one_extracted |

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
<sub>← back to [amino acids](drugs/drug_amino_acids/)</sub>
