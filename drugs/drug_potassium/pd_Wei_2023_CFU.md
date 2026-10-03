<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;Potassium&quot;,&quot;href&quot;:&quot;drugs/drug_potassium/&quot;},{&quot;label&quot;:&quot;Wei_2023 \u00b7 PD bacterial count&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# bacterial count — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Enrofloxacin and cefquinome (PK/PD indices AUC24h/MIC, Cmax/MIC, %T&gt;MIC) (measured concentrations) drive bacterial count (in log10 CFU/mL): direct sigmoid Emax (Hill) effect.

**Model:** No model was generated from this record.

- **paper:** `Wei_2023`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Wei Y et al., PK-PD integration of enrofloxacin and c…, Frontiers in pharmacology (2023)
  ·  DOI: [10.3389/fphar.2023.1226936](https://doi.org/10.3389/fphar.2023.1226936)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | E0 (log10 CFU/mL) — AUC24h/MIC (h) | `Q324` · not captured | -3.64 | log10 CFU/mL | not captured | exact (not captured) | T4:row0:col3 |
| PD (effect) | E0 (log10 CFU/mL) — Cmax/MIC | `Q324` · not captured | -4.60 | log10 CFU/mL | not captured | exact (not captured) | T4:row0:col4 |
| PD (effect) | E0 (log10 CFU/mL) — %T &gt; MIC | `Q324` · not captured | -5.90 | log10 CFU/mL | not captured | exact (not captured) | T4:row0:col5 |
| PD (effect) | E0 (log10 CFU/mL) — AUC24h/MIC (h) | `Q324` · not captured | -1.81 | log10 CFU/mL | not captured | exact (not captured) | T4:row0:col7 |
| PD (effect) | E0 (log10 CFU/mL) — Cmax/MIC | `Q324` · not captured | -1.81 | log10 CFU/mL | not captured | exact (not captured) | T4:row0:col8 |
| PD (effect) | E0 (log10 CFU/mL) — %T &gt; MIC | `Q324` · not captured | -2.32 | log10 CFU/mL | not captured | exact (not captured) | T4:row0:col9 |
| PD (effect) | E0 (log10 CFU/mL) — AUC24h/MIC (h) | `Q324` · not captured | -2.98 | log10 CFU/mL | not captured | exact (not captured) | T4:row0:col11 |
| PD (effect) | E0 (log10 CFU/mL) — Cmax/MIC | `Q324` · not captured | -2.84 | log10 CFU/mL | not captured | exact (not captured) | T4:row0:col12 |
| PD (effect) | E0 (log10 CFU/mL) — %T &gt; MIC | `Q324` · not captured | -3.35 | log10 CFU/mL | not captured | exact (not captured) | T4:row0:col13 |
| PD (effect) | EC50 — AUC24h/MIC (h) | `Q321` · not captured | 24.00 | h | not captured | exact (not captured) | T4:row1:col3 |
| PD (effect) | EC50 — Cmax/MIC | `Q321` · not captured | 3.92 | mg/L | not captured | exact (not captured) | T4:row1:col4 |
| PD (effect) | EC50 — %T &gt; MIC | `Q321` · not captured | 72.47 | mg/L | not captured | exact (not captured) | T4:row1:col5 |
| PD (effect) | EC50 — AUC24h/MIC (h) | `Q321` · not captured | 6.06 | h | not captured | exact (not captured) | T4:row1:col7 |
| PD (effect) | EC50 — Cmax/MIC | `Q321` · not captured | 4.01 | mg/L | not captured | exact (not captured) | T4:row1:col8 |
| PD (effect) | EC50 — %T &gt; MIC | `Q321` · not captured | 46.50 | mg/L | not captured | exact (not captured) | T4:row1:col9 |
| PD (effect) | EC50 — AUC24h/MIC (h) | `Q321` · not captured | 5.06 | h | not captured | exact (not captured) | T4:row1:col11 |
| PD (effect) | EC50 — Cmax/MIC | `Q321` · not captured | 2.42 | mg/L | not captured | exact (not captured) | T4:row1:col12 |
| PD (effect) | EC50 — %T &gt; MIC | `Q321` · not captured | 17.43 | mg/L | not captured | exact (not captured) | T4:row1:col13 |
| PD (effect) | Emax (log10 CFU/mL) — AUC24h/MIC (h) | `Q320` · not captured | 2.90 | log10 CFU/mL | not captured | exact (not captured) | T4:row2:col3 |
| PD (effect) | Emax (log10 CFU/mL) — Cmax/MIC | `Q320` · not captured | 3.06 | log10 CFU/mL | not captured | exact (not captured) | T4:row2:col4 |
| PD (effect) | Emax (log10 CFU/mL) — %T &gt; MIC | `Q320` · not captured | 2.67 | log10 CFU/mL | not captured | exact (not captured) | T4:row2:col5 |
| PD (effect) | Emax (log10 CFU/mL) — AUC24h/MIC (h) | `Q320` · not captured | 2.25 | log10 CFU/mL | not captured | exact (not captured) | T4:row2:col7 |
| PD (effect) | Emax (log10 CFU/mL) — Cmax/MIC | `Q320` · not captured | 2.25 | log10 CFU/mL | not captured | exact (not captured) | T4:row2:col8 |
| PD (effect) | Emax (log10 CFU/mL) — %T &gt; MIC | `Q320` · not captured | 2.32 | log10 CFU/mL | not captured | exact (not captured) | T4:row2:col9 |
| PD (effect) | Emax (log10 CFU/mL) — AUC24h/MIC (h) | `Q320` · not captured | 2.29 | log10 CFU/mL | not captured | exact (not captured) | T4:row2:col11 |
| PD (effect) | Emax (log10 CFU/mL) — Cmax/MIC | `Q320` · not captured | 2.25 | log10 CFU/mL | not captured | exact (not captured) | T4:row2:col12 |
| PD (effect) | Emax (log10 CFU/mL) — %T &gt; MIC | `Q320` · not captured | 2.32 | log10 CFU/mL | not captured | exact (not captured) | T4:row2:col13 |

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
<sub>← back to [Potassium](drugs/drug_potassium/)</sub>
