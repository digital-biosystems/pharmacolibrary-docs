<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;isopropanol&quot;,&quot;href&quot;:&quot;drugs/drug_isopropanol/&quot;},{&quot;label&quot;:&quot;Arshad_2020 \u00b7 PD total WBC count&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# total WBC count — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.664). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** 5-fluorouracil (measured concentrations) drives total WBC count (in 10^9/L): indirect response — drug stimulates the production of total WBC count.

**Model:** No model was generated from this record.

> 5-fluorouracil concentrations (mg/L) act on total WBC count (10^9/L) in a semi-mechanistic Friberg myelosuppression model in which 5FU inhibits proliferation/production of circulating cells, with the delay described by three transit compartments; a linear drug effect was preferred over an Emax model, so no IC50/Emax is given. Key values stated are the feedback exponent γ fixed to 0.17 and baseline WBC count (Circ0) of 6.86 × 10^9/L; no kprol, MTT or slope values appear in the excerpts.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Arshad_2020`
- **model family:** `indirect_response_iii`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Arshad U; Ploylearmsaeng SA; Karlsson MO; Doroshyenko O; Langer D; Schömig E; Kunze S; Güner SA; Skripnichenko R; Ullah S; Jaehde U; Fuhr U; Jetter A; Taubert M et al. (2020). Cancer chemotherapy and pharmacology 85
  ·  DOI: [10.1007/s00280-019-04028-5](https://doi.org/10.1007/s00280-019-04028-5)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | CL5FU (L/h) — NONMEM estimates | `Q358` · not captured | 256 | L/h | not captured | llm (not captured) | Tab3:row2:col1 |
| PK (driver) | CL5FU (L/h) — NONMEM estimates | `Q358` · not captured | 5.47 | L/h | not captured | llm (not captured) | Tab3:row2:col2 |
| PK (driver) | CL5FU (L/h) — NONMEM RSE (%) | `Q22` · not captured | 5.47 | L/h | not captured | llm (not captured) | Tab3:row2:col3 |
| PK (driver) | CL5FU (L/h) — Bootstrap estimates | `Q22` · not captured | 249 | L/h | not captured | llm (not captured) | Tab3:row2:col4 |
| PK (driver) | CL5FU (L/h) — Bootstrap estimates | `Q22` · not captured | 6.36 | L/h | not captured | llm (not captured) | Tab3:row2:col5 |
| PK (driver) | CL5FU (L/h) — Bootstrap RSE (%) | `Q22` · not captured | 6.36 | L/h | not captured | llm (not captured) | Tab3:row2:col6 |
| PK (driver) | CL5FU (L/h) — 95% CI | `Q22` · not captured | 224 | L/h | not captured | llm (not captured) | Tab3:row2:col7 |
| PK (driver) | VC,5FU (L) — NONMEM estimates | `Q63` · not captured | 5.85 | L | not captured | llm_confirmed (not captured) | Tab3:row3:col1 |
| PK (driver) | VC,5FU (L) — NONMEM estimates | `Q63` · not captured | 39.3 | L | not captured | llm_confirmed (not captured) | Tab3:row3:col2 |
| PK (driver) | VC,5FU (L) — NONMEM RSE (%) | `Q63` · not captured | 39.3 | L | not captured | llm_confirmed (not captured) | Tab3:row3:col3 |
| PK (driver) | VC,5FU (L) — Bootstrap estimates | `Q63` · not captured | 5.56 | L | not captured | llm_confirmed (not captured) | Tab3:row3:col4 |
| PK (driver) | VC,5FU (L) — Bootstrap estimates | `Q63` · not captured | 42.0 | L | not captured | llm_confirmed (not captured) | Tab3:row3:col5 |
| PK (driver) | VC,5FU (L) — Bootstrap RSE (%) | `Q63` · not captured | 42.0 | L | not captured | llm_confirmed (not captured) | Tab3:row3:col6 |
| PK (driver) | VC,5FU (L) — 95% CI | `Q63` · not captured | 2.41 | L | not captured | llm_confirmed (not captured) | Tab3:row3:col7 |
| PK (driver) | VP,5FU (L) — NONMEM estimates | `Q64` · not captured | 24.0 | L | not captured | llm_confirmed (not captured) | Tab3:row4:col1 |
| PK (driver) | VP,5FU (L) — NONMEM estimates | `Q64` · not captured | 22.9 | L | not captured | llm_confirmed (not captured) | Tab3:row4:col2 |
| PK (driver) | VP,5FU (L) — NONMEM RSE (%) | `Q64` · not captured | 22.9 | L | not captured | llm_confirmed (not captured) | Tab3:row4:col3 |
| PK (driver) | VP,5FU (L) — Bootstrap estimates | `Q64` · not captured | 28.5 | L | not captured | llm_confirmed (not captured) | Tab3:row4:col4 |
| PK (driver) | VP,5FU (L) — Bootstrap estimates | `Q64` · not captured | 81.5 | L | not captured | llm_confirmed (not captured) | Tab3:row4:col5 |
| PK (driver) | VP,5FU (L) — Bootstrap RSE (%) | `Q64` · not captured | 81.5 | L | not captured | llm_confirmed (not captured) | Tab3:row4:col6 |
| PK (driver) | VP,5FU (L) — 95% CI | `Q64` · not captured | 13.3 | L | not captured | llm_confirmed (not captured) | Tab3:row4:col7 |
| PK (driver) | Q (L/h) — NONMEM estimates | `Q30` · not captured | 17.3 | L/h | not captured | exact (not captured) | Tab3:row5:col1 |
| PK (driver) | Q (L/h) — NONMEM estimates | `Q30` · not captured | 30.7 | L/h | not captured | exact (not captured) | Tab3:row5:col2 |
| PK (driver) | Q (L/h) — NONMEM RSE (%) | `Q30` · not captured | 30.7 | L/h | not captured | exact (not captured) | Tab3:row5:col3 |
| PK (driver) | Q (L/h) — Bootstrap estimates | `Q30` · not captured | 14.8 | L/h | not captured | exact (not captured) | Tab3:row5:col4 |
| PK (driver) | Q (L/h) — Bootstrap estimates | `Q30` · not captured | 29.8 | L/h | not captured | exact (not captured) | Tab3:row5:col5 |
| PK (driver) | Q (L/h) — Bootstrap RSE (%) | `Q30` · not captured | 29.8 | L/h | not captured | exact (not captured) | Tab3:row5:col6 |
| PK (driver) | Q (L/h) — 95% CI | `Q30` · not captured | 9.66 | L/h | not captured | exact (not captured) | Tab3:row5:col7 |
| PK (driver) | AUC24,5FU (mg h/L)b — NONMEM estimates | `Q19` · not captured | 6.72 | not captured | not captured | llm (not captured) | Tab3:row7:col1 |
| PK (driver) | AUC24,5FU (mg h/L)b — Bootstrap estimates | `Q19` · not captured | 6.72 | not captured | not captured | llm (not captured) | Tab3:row7:col4 |
| PK (driver) | AUC24,5FU (mg h/L)b — 95% CI | `Q19` · not captured | 4.76 | not captured | not captured | llm (not captured) | Tab3:row7:col7 |
| PK (driver) | Fm (%) — NONMEM estimates | `Q45` · not captured | 85 | not captured | not captured | exact (not captured) | Tab3:row9:col1 |
| PK (driver) | Fm (%) — Bootstrap estimates | `Q45` · not captured | 85 | not captured | not captured | exact (not captured) | Tab3:row9:col4 |
| PK (driver) | CL5FUH2 (L/h) — NONMEM estimates | `Q358` · not captured | 124 | L/h | not captured | llm (not captured) | Tab3:row10:col1 |
| PK (driver) | CL5FUH2 (L/h) — NONMEM estimates | `Q358` · not captured | 6.61 | L/h | not captured | llm (not captured) | Tab3:row10:col2 |
| PK (driver) | CL5FUH2 (L/h) — NONMEM RSE (%) | `Q22` · not captured | 6.61 | L/h | not captured | llm (not captured) | Tab3:row10:col3 |
| PK (driver) | CL5FUH2 (L/h) — Bootstrap estimates | `Q22` · not captured | 121 | L/h | not captured | llm (not captured) | Tab3:row10:col4 |
| PK (driver) | CL5FUH2 (L/h) — Bootstrap estimates | `Q22` · not captured | 7.11 | L/h | not captured | llm (not captured) | Tab3:row10:col5 |
| PK (driver) | CL5FUH2 (L/h) — Bootstrap RSE (%) | `Q22` · not captured | 7.11 | L/h | not captured | llm (not captured) | Tab3:row10:col6 |
| PK (driver) | CL5FUH2 (L/h) — 95% CI | `Q22` · not captured | 108 | L/h | not captured | llm (not captured) | Tab3:row10:col7 |
| PK (driver) | VC,5FUH2 (L) — NONMEM estimates | `Q63` · not captured | 100 | L | not captured | llm_confirmed (not captured) | Tab3:row11:col1 |
| PK (driver) | VC,5FUH2 (L) — NONMEM estimates | `Q63` · not captured | 13.0 | L | not captured | llm_confirmed (not captured) | Tab3:row11:col2 |
| PK (driver) | VC,5FUH2 (L) — NONMEM RSE (%) | `Q63` · not captured | 13.0 | L | not captured | llm_confirmed (not captured) | Tab3:row11:col3 |
| PK (driver) | VC,5FUH2 (L) — Bootstrap estimates | `Q63` · not captured | 96.7 | L | not captured | llm_confirmed (not captured) | Tab3:row11:col4 |
| PK (driver) | VC,5FUH2 (L) — Bootstrap estimates | `Q63` · not captured | 14.37 | L | not captured | llm_confirmed (not captured) | Tab3:row11:col5 |
| PK (driver) | VC,5FUH2 (L) — Bootstrap RSE (%) | `Q63` · not captured | 14.37 | L | not captured | llm_confirmed (not captured) | Tab3:row11:col6 |
| PK (driver) | VC,5FUH2 (L) — 95% CI | `Q63` · not captured | 74.8 | L | not captured | llm_confirmed (not captured) | Tab3:row11:col7 |
| PK (driver) | AUC24,5FUH2 (mg h/L)b — NONMEM estimates | `Q19` · not captured | 12.2 | not captured | not captured | llm (not captured) | Tab3:row12:col1 |
| PK (driver) | AUC24,5FUH2 (mg h/L)b — Bootstrap estimates | `Q19` · not captured | 12.2 | not captured | not captured | llm (not captured) | Tab3:row12:col4 |
| PK (driver) | MTT (h) — NONMEM estimates | `Q81` · not captured | 261 | h | not captured | exact (not captured) | Tab3:row15:col1 |
| PK (driver) | MTT (h) — NONMEM estimates | `Q81` · not captured | 6.70 | h | not captured | exact (not captured) | Tab3:row15:col2 |
| PK (driver) | MTT (h) — NONMEM RSE (%) | `Q81` · not captured | 6.70 | h | not captured | exact (not captured) | Tab3:row15:col3 |
| PK (driver) | MTT (h) — Bootstrap estimates | `Q81` · not captured | 281 | h | not captured | exact (not captured) | Tab3:row15:col4 |
| PK (driver) | MTT (h) — Bootstrap estimates | `Q81` · not captured | 13.1 | h | not captured | exact (not captured) | Tab3:row15:col5 |
| PK (driver) | MTT (h) — Bootstrap RSE (%) | `Q81` · not captured | 13.1 | h | not captured | exact (not captured) | Tab3:row15:col6 |
| PK (driver) | MTT (h) — 95% CI | `Q81` · not captured | 224 | h | not captured | exact (not captured) | Tab3:row15:col7 |
| PK (driver) | γ — NONMEM estimates | `Q89` · not captured | 0.17 | not captured | not captured | llm (not captured) | Tab3:row18:col1 |
| PK (driver) | CL5FU — NONMEM estimates | `Q22` · not captured | 24.9 | not captured | not captured | llm (not captured) | Tab3:row20:col1 |
| PK (driver) | CL5FU — NONMEM estimates | `Q22` · not captured | 17.2 | not captured | not captured | llm (not captured) | Tab3:row20:col2 |
| PK (driver) | CL5FU — NONMEM RSE (%) | `Q22` · not captured | 17.2 | not captured | not captured | llm (not captured) | Tab3:row20:col3 |
| PK (driver) | CL5FU — Bootstrap estimates | `Q22` · not captured | 23.0 | not captured | not captured | llm (not captured) | Tab3:row20:col4 |
| PK (driver) | CL5FU — Bootstrap estimates | `Q22` · not captured | 43.1 | not captured | not captured | llm (not captured) | Tab3:row20:col5 |
| PK (driver) | CL5FU — 95% CI | `Q22` · not captured | 12.3 | not captured | not captured | llm (not captured) | Tab3:row20:col7 |
| PK (driver) | VC,5FU — NONMEM estimates | `Q63` · not captured | 130 | not captured | not captured | llm_confirmed (not captured) | Tab3:row21:col1 |
| PK (driver) | VC,5FU — NONMEM estimates | `Q63` · not captured | 45.4 | not captured | not captured | llm_confirmed (not captured) | Tab3:row21:col2 |
| PK (driver) | VC,5FU — 95% CI | `Q63` · not captured | 75.3 | not captured | not captured | llm_confirmed (not captured) | Tab3:row21:col7 |
| PK (driver) | CL5FUH2 — NONMEM estimates | `Q22` · not captured | 30.5 | not captured | not captured | llm (not captured) | Tab3:row22:col1 |
| PK (driver) | CL5FUH2 — NONMEM estimates | `Q22` · not captured | 27.1 | not captured | not captured | llm (not captured) | Tab3:row22:col2 |
| PK (driver) | CL5FUH2 — NONMEM RSE (%) | `Q22` · not captured | 27.1 | not captured | not captured | llm (not captured) | Tab3:row22:col3 |
| PK (driver) | CL5FUH2 — Bootstrap estimates | `Q22` · not captured | 28.9 | not captured | not captured | llm (not captured) | Tab3:row22:col4 |
| PK (driver) | CL5FUH2 — Bootstrap estimates | `Q22` · not captured | 28.0 | not captured | not captured | llm (not captured) | Tab3:row22:col5 |
| PK (driver) | CL5FUH2 — 95% CI | `Q22` · not captured | 21.8 | not captured | not captured | llm (not captured) | Tab3:row22:col7 |
| PK (driver) | VC,5FUH2 — NONMEM estimates | `Q63` · not captured | 58.9 | not captured | not captured | llm_confirmed (not captured) | Tab3:row23:col1 |
| PK (driver) | VC,5FUH2 — NONMEM estimates | `Q63` · not captured | 62.7 | not captured | not captured | llm_confirmed (not captured) | Tab3:row23:col2 |
| PK (driver) | VC,5FUH2 — NONMEM RSE (%) | `Q63` · not captured | 62.7 | not captured | not captured | llm_confirmed (not captured) | Tab3:row23:col3 |
| variability | Proportional error 5FU — NONMEM estimates | `Q316` · not captured | 0.36 | not captured | not captured | llm_confirmed (not captured) | Tab3:row26:col1 |
| variability | Proportional error 5FU — NONMEM estimates | `Q316` · not captured | 10.2 | not captured | not captured | llm_confirmed (not captured) | Tab3:row26:col2 |
| variability | Proportional error 5FU — NONMEM RSE (%) | `Q316` · not captured | 10.2 | not captured | not captured | llm_confirmed (not captured) | Tab3:row26:col3 |
| variability | Proportional error 5FU — Bootstrap estimates | `Q316` · not captured | 0.32 | not captured | not captured | llm_confirmed (not captured) | Tab3:row26:col4 |
| variability | Proportional error 5FU — Bootstrap estimates | `Q316` · not captured | 9.37 | not captured | not captured | llm_confirmed (not captured) | Tab3:row26:col5 |
| variability | Proportional error 5FU — Bootstrap RSE (%) | `Q316` · not captured | 9.37 | not captured | not captured | llm_confirmed (not captured) | Tab3:row26:col6 |
| variability | Proportional error 5FU — 95% CI | `Q316` · not captured | 0.23 | not captured | not captured | llm_confirmed (not captured) | Tab3:row26:col7 |
| variability | Proportional error 5FUH2 — NONMEM estimates | `Q316` · not captured | 0.14 | not captured | not captured | llm_confirmed (not captured) | Tab3:row27:col1 |
| variability | Proportional error 5FUH2 — NONMEM estimates | `Q316` · not captured | 8.06 | not captured | not captured | llm_confirmed (not captured) | Tab3:row27:col2 |
| variability | Proportional error 5FUH2 — NONMEM RSE (%) | `Q316` · not captured | 8.06 | not captured | not captured | llm_confirmed (not captured) | Tab3:row27:col3 |
| variability | Proportional error 5FUH2 — Bootstrap estimates | `Q316` · not captured | 0.14 | not captured | not captured | llm_confirmed (not captured) | Tab3:row27:col4 |
| variability | Proportional error 5FUH2 — Bootstrap estimates | `Q316` · not captured | 9.61 | not captured | not captured | llm_confirmed (not captured) | Tab3:row27:col5 |
| variability | Proportional error 5FUH2 — Bootstrap RSE (%) | `Q316` · not captured | 9.61 | not captured | not captured | llm_confirmed (not captured) | Tab3:row27:col6 |
| variability | Proportional error 5FUH2 — 95% CI | `Q316` · not captured | 0.10 | not captured | not captured | llm_confirmed (not captured) | Tab3:row27:col7 |
| variability | Proportional error total WBC count — NONMEM estimates | `Q316` · not captured | 0.08 | not captured | not captured | llm_confirmed (not captured) | Tab3:row28:col1 |
| variability | Proportional error total WBC count — NONMEM estimates | `Q316` · not captured | 8.70 | not captured | not captured | llm_confirmed (not captured) | Tab3:row28:col2 |
| variability | Proportional error total WBC count — NONMEM RSE (%) | `Q316` · not captured | 8.70 | not captured | not captured | llm_confirmed (not captured) | Tab3:row28:col3 |
| variability | Proportional error total WBC count — Bootstrap estimates | `Q316` · not captured | 0.08 | not captured | not captured | llm_confirmed (not captured) | Tab3:row28:col4 |
| variability | Proportional error total WBC count — Bootstrap estimates | `Q316` · not captured | 8.97 | not captured | not captured | llm_confirmed (not captured) | Tab3:row28:col5 |
| variability | Proportional error total WBC count — Bootstrap RSE (%) | `Q316` · not captured | 8.97 | not captured | not captured | llm_confirmed (not captured) | Tab3:row28:col6 |
| variability | Proportional error total WBC count — 95% CI | `Q316` · not captured | 0.06 | not captured | not captured | llm_confirmed (not captured) | Tab3:row28:col7 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.664 (87/131 fields) | 44 |

<details><summary>44 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `effect_form` | unknown | additive | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_iii | linear | mismatch |
| `gpt-oss:120b` | `parameters[Q22]` | 121 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 7.11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 108 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 43.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 30.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 27.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 28.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 256 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 5.47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q25]` | not captured | 124 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q25]` | not captured | 6.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q25]` | not captured | 121 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q25]` | not captured | 7.11 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q25]` | not captured | 108 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q25]` | not captured | 30.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q25]` | not captured | 27.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.17 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.17 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 124 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 6.61 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 256 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 5.47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 45.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 145 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 57.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 57.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 59.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 76.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 76.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 30.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 13.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 13.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 7.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 5.23 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 4.50 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 16.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 69.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 69.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 16.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 52.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 8.29 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 0.17 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [isopropanol](drugs/drug_isopropanol/)</sub>
