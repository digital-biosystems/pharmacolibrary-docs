<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;esomeprazole&quot;,&quot;href&quot;:&quot;drugs/drug_esomeprazole/&quot;},{&quot;label&quot;:&quot;Chung_2022 \u00b7 PD intragastric pH&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Esomeprazole_Chung2022_reference&quot;,&quot;label&quot;:&quot;Chung_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# intragastric pH — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** YH4808 drives intragastric pH (in pH units): direct sigmoid Emax (Hill) effect.

**Model:** No model was generated from this record.

> YH4808 plasma concentrations stimulate intragastric pH via a sigmoid Emax (effect-compartment) model with Emax 4.38 pH units, EC50 53 ng/mL, and ke0 (KEO) 47 1/h; the paper does not state a gamma (Hill) value. The increased pH in turn inhibits YH4808 exposure with EPmax 58% and EP50 59 pH units.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Chung_2022`
- **model family:** `sigmoid_emax`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** stimulation/additive

## Citation
Chung TK et al., A population PK-PD model of YH4808, a n…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12839](https://doi.org/10.1002/psp4.12839)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | CL/F, L/h — Shrinkage for IIV | `Q27` · not captured | 33.0 | L/h | not captured | exact (not captured) | psp412839-tbl-0002:row1:col4 |
| PK (driver) | V C /F, L — Shrinkage for IIV | `Q290` · not captured | 25.0 | L | not captured | space_fold (not captured) | psp412839-tbl-0002:row2:col4 |
| PK (driver) | V P /F, L — Shrinkage for IIV | `Q82` · not captured | 54.0 | L | not captured | space_fold (not captured) | psp412839-tbl-0002:row3:col4 |
| PK (driver) | Q/F, L/h — Shrinkage for IIV | `Q69` · not captured | 34.0 | L/h | not captured | exact (not captured) | psp412839-tbl-0002:row4:col4 |
| PK (driver) | K A, 1/h — Shrinkage for IIV | `Q49` · not captured | 48.0 | 1/h | not captured | space_fold (not captured) | psp412839-tbl-0002:row5:col4 |
| variability | ALAG1, h — Shrinkage for IIV | `Q318` · not captured | 68.0 | h | not captured | llm (not captured) | psp412839-tbl-0002:row6:col4 |
| variability | A 0 — Shrinkage for IIV | `Q318` · not captured | 54.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row7:col4 |
| variability | A 1 — Shrinkage for IIV | `Q318` · not captured | 46.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row8:col4 |
| variability | A 2 — Shrinkage for IIV | `Q318` · not captured | 59.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row9:col4 |
| variability | A 3 — Shrinkage for IIV | `Q318` · not captured | 61.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row10:col4 |
| variability | A 4 — Shrinkage for IIV | `Q318` · not captured | 87.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row11:col4 |
| variability | C 1 , h — Shrinkage for IIV | `Q318` · not captured | 64.0 | h | not captured | llm (not captured) | psp412839-tbl-0002:row12:col4 |
| variability | C 2 , h — Shrinkage for IIV | `Q318` · not captured | 72.0 | h | not captured | llm (not captured) | psp412839-tbl-0002:row13:col4 |
| variability | C 3 , h — Shrinkage for IIV | `Q318` · not captured | 51.0 | h | not captured | llm (not captured) | psp412839-tbl-0002:row14:col4 |
| variability | C 4 , h — Shrinkage for IIV | `Q318` · not captured | 77.0 | h | not captured | llm (not captured) | psp412839-tbl-0002:row15:col4 |
| variability | Emax, pH unit — Shrinkage for IIV | `Q318` · not captured | 58.0 | not captured | not captured | llm_corrected (not captured) | psp412839-tbl-0002:row16:col4 |
| PD (effect) | EC50, ng/mL — Shrinkage for IIV | `Q321` · not captured | 53.0 | ng/mL | not captured | exact (not captured) | psp412839-tbl-0002:row17:col4 |
| PD (effect) | KEO, 1/h — Shrinkage for IIV | `Q326` · not captured | 47.0 | 1/h | not captured | exact (not captured) | psp412839-tbl-0002:row18:col4 |
| variability | EPmax — Shrinkage for IIV | `Q318` · not captured | 56.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row19:col4 |
| PD (effect) | EP50, pH unit — Shrinkage for IIV | `Q321` · not captured | 59.0 | unknown | not captured | llm (not captured) | psp412839-tbl-0002:row20:col4 |
| PD (effect) | Emax | `Q320` · not captured | 4.38 | pH | not captured | review_gapfill (not captured) | Chung_2022:review |

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
<sub>← back to [esomeprazole](drugs/drug_esomeprazole/)</sub>
