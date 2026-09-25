<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Omori_2022`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Omori T; Aoyama T; Miyamoto A; Matsumoto Y et al. (2022). Biological & pharmaceutical bulletin 45
  ·  DOI: [10.1248/bpb.b22-00398](https://doi.org/10.1248/bpb.b22-00398)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| PT 50 (h) — Bootstrap result (n = 500) | `Q57` · not captured | 17.9 | h | not captured | llm (not captured) | tab_2:row4:col7 |
| PT max | `Q56` · not captured | 0.567 | not captured | not captured | llm (not captured) | tab_2:row5:col1 |
| PT max | `Q56` · not captured | 0.00266 | not captured | not captured | llm (not captured) | tab_2:row5:col2 |
| PT max | `Q56` · not captured | 0.56 | not captured | not captured | llm (not captured) | tab_2:row5:col3 |
| PT max — Original dataset | `Q56` · not captured | 0.57 | not captured | not captured | llm (not captured) | tab_2:row5:col4 |
| PT max | `Q56` · not captured | 0.55 | not captured | not captured | llm (not captured) | tab_2:row5:col5 |
| PT max | `Q56` · not captured | 0.396 | not captured | not captured | llm (not captured) | tab_2:row5:col6 |
| PT max — Bootstrap result (n = 500) | `Q56` · not captured | 0.70 | n = 500 | not captured | llm (not captured) | tab_2:row5:col7 |
| γ time | `Q89` · not captured | 0.373 | not captured | not captured | llm (not captured) | tab_2:row6:col1 |
| γ time | `Q89` · not captured | 0.129 | not captured | not captured | llm (not captured) | tab_2:row6:col2 |
| γ time | `Q89` · not captured | 0.12 | not captured | not captured | llm (not captured) | tab_2:row6:col3 |
| γ time — Original dataset | `Q89` · not captured | 0.63 | not captured | not captured | llm (not captured) | tab_2:row6:col4 |
| γ time | `Q89` · not captured | 0.38 | not captured | not captured | llm (not captured) | tab_2:row6:col5 |
| γ time | `Q89` · not captured | 0.0044 | not captured | not captured | llm (not captured) | tab_2:row6:col6 |
| EC 50 (ng/mL) | `Q321` · not captured | 144 | ng/mL | not captured | llm (not captured) | tab_2:row7:col1 |
| EC 50 (ng/mL) | `Q321` · not captured | 16.5 | ng/mL | not captured | llm (not captured) | tab_2:row7:col2 |
| EC 50 (ng/mL) | `Q321` · not captured | 111.7 | ng/mL | not captured | llm (not captured) | tab_2:row7:col3 |
| EC 50 (ng/mL) — Original dataset | `Q321` · not captured | 176.3 | ng/mL | not captured | llm (not captured) | tab_2:row7:col4 |
| EC 50 (ng/mL) | `Q321` · not captured | 143 | ng/mL | not captured | llm (not captured) | tab_2:row7:col5 |
| EC 50 (ng/mL) | `Q321` · not captured | 48.4 | ng/mL | not captured | llm (not captured) | tab_2:row7:col6 |
| EC 50 (ng/mL) — Bootstrap result (n = 500) | `Q321` · not captured | 1747 | ng/mL | not captured | llm (not captured) | tab_2:row7:col7 |
| E max | `Q320` · not captured | 1 | not captured | not captured | llm (not captured) | tab_2:row8:col1 |
| k out (/h) | `Q328` · not captured | 2.82 | /h | not captured | llm (not captured) | tab_2:row9:col1 |
| k out (/h) | `Q328` · not captured | 0.268 | /h | not captured | llm (not captured) | tab_2:row9:col2 |
| k out (/h) | `Q328` · not captured | 2.29 | /h | not captured | llm (not captured) | tab_2:row9:col3 |
| k out (/h) — Original dataset | `Q328` · not captured | 3.35 | /h | not captured | llm (not captured) | tab_2:row9:col4 |
| k out (/h) | `Q328` · not captured | 2.75 | /h | not captured | llm (not captured) | tab_2:row9:col5 |
| k out (/h) | `Q328` · not captured | 0.961 | /h | not captured | llm (not captured) | tab_2:row9:col6 |
| k out (/h) — Bootstrap result (n = 500) | `Q328` · not captured | 10.70 | /h | not captured | llm (not captured) | tab_2:row9:col7 |
| ω 2 | `Q315` · not captured | 1.32 | not captured | not captured | llm (not captured) | tab_2:row10:col2 |
| ω 2 | `Q315` · not captured | 0.0089 | not captured | not captured | llm (not captured) | tab_2:row10:col3 |
| ω 2 — Original dataset | `Q312` · not captured | 1.30 | not captured | not captured | llm (not captured) | tab_2:row10:col4 |
| ω 2 | `Q315` · not captured | 1.34 | not captured | not captured | llm (not captured) | tab_2:row10:col5 |
| ω 2 | `Q315` · not captured | 1.3 | not captured | not captured | llm (not captured) | tab_2:row10:col6 |
| ω 2 | `Q315` · not captured | 1.69 | not captured | not captured | llm (not captured) | tab_2:row10:col8 |
| ω 2 EC50 | `Q321` · not captured | 4.03 | unknown | not captured | llm_confirmed (not captured) | tab_2:row11:col1 |
| ω 2 EC50 | `Q321` · not captured | 0.0816 | unknown | not captured | llm_confirmed (not captured) | tab_2:row11:col2 |
| ω 2 EC50 | `Q321` · not captured | 3.87 | unknown | not captured | llm_confirmed (not captured) | tab_2:row11:col3 |
| ω 2 EC50 — Original dataset | `Q321` · not captured | 4.19 | unknown | not captured | llm_confirmed (not captured) | tab_2:row11:col4 |
| ω 2 EC50 | `Q321` · not captured | 4.23 | unknown | not captured | llm_confirmed (not captured) | tab_2:row11:col5 |
| ω 2 EC50 | `Q321` · not captured | 2.12 | unknown | not captured | llm_confirmed (not captured) | tab_2:row11:col6 |
| ω 2 EC50 — Bootstrap result (n = 500) | `Q321` · not captured | 10.5 | n = 500 | not captured | llm_confirmed (not captured) | tab_2:row11:col7 |
| σ | `Q315` · not captured | 1.78 | not captured | not captured | llm (not captured) | tab_2:row12:col2 |
| σ | `Q315` · not captured | 0.0404 | not captured | not captured | llm (not captured) | tab_2:row12:col3 |
| σ — Original dataset | `Q315` · not captured | 1.70 | not captured | not captured | llm (not captured) | tab_2:row12:col4 |
| σ | `Q315` · not captured | 1.86 | not captured | not captured | llm (not captured) | tab_2:row12:col5 |
| σ | `Q315` · not captured | 1.78 | not captured | not captured | llm (not captured) | tab_2:row12:col6 |
| σ — Bootstrap result (n = 500) | `Q315` · not captured | 1.67 | n = 500 | not captured | llm (not captured) | tab_2:row12:col7 |
| σ | `Q315` · not captured | 1.89 | not captured | not captured | llm (not captured) | tab_2:row12:col8 |

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
<sub>← back to [pentazocine](drugs/drug_pentazocine/)</sub>
