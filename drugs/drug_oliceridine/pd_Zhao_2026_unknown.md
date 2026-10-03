<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oliceridine&quot;,&quot;href&quot;:&quot;drugs/drug_oliceridine/&quot;},{&quot;label&quot;:&quot;Zhao_2026 \u00b7 PD cardiovascular response to tracheal intubation&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# cardiovascular response to tracheal intubation — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Remifentanil (measured concentrations) drives cardiovascular response to tracheal intubation (in unknown): direct Emax (saturable) effect.

**Model:** No model was generated from this record.

> Remifentanil effect-site/infusion concentrations (ng/mL) were titrated (Dixon up-and-down, probit regression) against the binary cardiovascular response to tracheal intubation (≥15% change in HR or MAP), with IV bolus oliceridine 0.015 or 0.03 mg/kg given before induction; the paper does not state a mechanistic PD model (no Emax/IC50/kin/kout/ke0), only that oliceridine reduced the EC50 of remifentanil for inhibiting the intubation response from 3.728 ng/mL (95% CI 3.536–3.943) in controls to 3.045 ng/mL (95% CI 2.852–3.239) with 0.015 mg/kg oliceridine (high-dose EC50 not reported in the excerpts), versus 2.824 ng/mL (95% CI 2.620–3.015) with sufentanil 0.15 μg/kg.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Zhao_2026`
- **model family:** `emax`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Zhao Z et al., EC, Drug design, development an… (2026)
  ·  DOI: [10.2147/DDDT.S571007](https://doi.org/10.2147/DDDT.S571007)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| — | PACU — Oliceridine0.015 mg/kg Group | `Q100` · not captured | 1 | not captured | not captured | llm (not captured) | t0002:row1:col4 |
| — | PACU — Oliceridine0.03 mg/kg Group | `Q100` · not captured | 1 | not captured | not captured | llm (not captured) | t0002:row1:col5 |
| — | Hoarseness n (%) — Oliceridine0.015 mg/kg Group | `Q100` · not captured | 1 | not captured | not captured | llm (not captured) | t0002:row2:col4 |
| — | Hoarseness n (%) — Oliceridine0.03 mg/kg Group | `Q100` · not captured | 0.251 | not captured | not captured | llm (not captured) | t0002:row2:col5 |
| — | Sore throat n (%) — Oliceridine0.015 mg/kg Group | `Q100` · not captured | 12 | not captured | not captured | llm (not captured) | t0002:row3:col4 |
| — | Sore throat n (%) — Oliceridine0.03 mg/kg Group | `Q100` · not captured | 0.194 | not captured | not captured | llm (not captured) | t0002:row3:col5 |
| — | Difficulty pronouncing n (%) — Oliceridine0.015 mg/kg Group | `Q100` · not captured | 0 | not captured | not captured | llm (not captured) | t0002:row4:col4 |
| — | Postoperative 24 h — Oliceridine0.015 mg/kg Group | `Q100` · not captured | 1 | not captured | not captured | llm (not captured) | t0002:row5:col4 |
| — | Postoperative 24 h — Oliceridine0.03 mg/kg Group | `Q100` · not captured | 3 | not captured | not captured | llm (not captured) | t0002:row5:col5 |
| — | Hoarseness n (%) — Oliceridine0.015 mg/kg Group | `Q100` · not captured | 1 | not captured | not captured | llm (not captured) | t0002:row6:col4 |
| — | Hoarseness n (%) — Oliceridine0.03 mg/kg Group | `Q100` · not captured | 0.101 | not captured | not captured | llm (not captured) | t0002:row6:col5 |
| — | Sore throat n (%) — Oliceridine0.015 mg/kg Group | `Q100` · not captured | 13 | not captured | not captured | llm (not captured) | t0002:row7:col4 |
| — | Sore throat n (%) — Oliceridine0.03 mg/kg Group | `Q100` · not captured | 0.636 | not captured | not captured | llm (not captured) | t0002:row7:col5 |
| — | Difficulty pronouncing n (%) — Oliceridine0.015 mg/kg Group | `Q100` · not captured | 0 | not captured | not captured | llm (not captured) | t0002:row8:col4 |
| — | Difficulty pronouncing n (%) — Oliceridine0.03 mg/kg Group | `Q100` · not captured | 0.102 | not captured | not captured | llm (not captured) | t0002:row8:col5 |

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
<sub>← back to [oliceridine](drugs/drug_oliceridine/)</sub>
