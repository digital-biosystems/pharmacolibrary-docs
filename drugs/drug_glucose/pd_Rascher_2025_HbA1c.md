<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05C&quot;,&quot;href&quot;:&quot;atc/B05C.md&quot;},{&quot;label&quot;:&quot;glucose&quot;,&quot;href&quot;:&quot;drugs/drug_glucose/&quot;},{&quot;label&quot;:&quot;Rascher_2025 \u00b7 PD HbA1c&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# HbA1c — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Empagliflozin drives HbA1c (in %): indirect response — drug inhibits the production of HbA1c.

**Model:** No model was generated from this record.

> Empagliflozin exposure (AUC) inhibits the HbA1c synthesis rate constant (kin) in an indirect response (turnover) model of HbA1c (%), with disease progression modelled as a time-dependent increase in kin (notably with background insulin). Key values: IMAX 10.1%, AUC50 fixed at 703 nmol·h/L, kout 0.0489 1/day; the paper does not report an explicit gamma.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Rascher_2025`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Rascher J et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (2025)
  ·  DOI: [10.1002/bcp.70096](https://doi.org/10.1002/bcp.70096)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Kout (1/day) — Median | `Q328` · not captured | 0.0489 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row2:col3 |
| PD (effect) | Kout (1/day) — Bulk ESS | `Q328` · not captured | 5125 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row2:col5 |
| PD (effect) | Kout (1/day) — Tail ESS | `Q328` · not captured | 3498 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row2:col6 |
| PD (effect) | Kout (1/day) — Ȓ | `Q328` · not captured | 1.00 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row2:col7 |
| PD (effect) | PROG (%/h/h) — Ȓ | `Q340` · not captured | 1.00 | %/h/h | not captured | llm (not captured) | bcp70096-tbl-0004:row4:col7 |
| PD (effect) | IMAX (%) — Median | `Q323` · not captured | 10.1 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row5:col3 |
| PD (effect) | IMAX (%) — Bulk ESS | `Q323` · not captured | 6062 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row5:col5 |
| PD (effect) | IMAX (%) — Tail ESS | `Q323` · not captured | 4750 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row5:col6 |
| PD (effect) | IMAX (%) — Ȓ | `Q323` · not captured | 1.00 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row5:col7 |
| PK (driver) | AUC50 (nmol*hr/L) — Median | `Q19` · not captured | 703 | nmol*hr/L | not captured | llm (not captured) | bcp70096-tbl-0004:row6:col3 |
| variability | ΩBASE (CV(%)) — Median | `Q312` · not captured | 16.1 | not captured | not captured | llm (not captured) | bcp70096-tbl-0004:row12:col3 |
| variability | ΩBASE (CV(%)) — Bulk ESS | `Q312` · not captured | 2373 | not captured | not captured | llm (not captured) | bcp70096-tbl-0004:row12:col5 |
| variability | ΩBASE (CV(%)) — Ȓ | `Q312` · not captured | 1.00 | not captured | not captured | llm (not captured) | bcp70096-tbl-0004:row12:col7 |
| variability | ΩBASE (CV(%)) — Shrinkage (%) | `Q318` · not captured | 14.9 | not captured | not captured | llm (not captured) | bcp70096-tbl-0004:row12:col8 |
| variability | ΩPROG (CV(%)) — Shrinkage (%) | `Q318` · not captured | 19.0 | not captured | not captured | llm (not captured) | bcp70096-tbl-0004:row13:col8 |

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
<sub>← back to [glucose](drugs/drug_glucose/)</sub>
