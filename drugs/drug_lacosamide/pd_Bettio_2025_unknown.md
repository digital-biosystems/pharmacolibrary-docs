<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;lacosamide&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/&quot;},{&quot;label&quot;:&quot;Bettio_2025 \u00b7 PD seizure protection&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lacosamide_Yu2026_reference&quot;,&quot;label&quot;:&quot;Yu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Yu2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Li2025_boostrap&quot;,&quot;label&quot;:&quot;Li_2025_boostrap&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Li2025_boostrap.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Li2025_final_models&quot;,&quot;label&quot;:&quot;Li_2025_final_models&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Li2025_final_models.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# seizure protection — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Carbamazepine, phenytoin, valproic acid, lacosamide, cenobamate, retigabine drive seizure protection (in unknown): direct Emax (saturable) effect.

**Model:** No model was generated from this record.

> In the MES seizure-protection model, lacosamide (LSM) dose/concentration (plasma and brain) drives seizure protection fitted with a Hill–Langmuir (Emax-type) dose–response; the paper does not state a mechanistic PD model (no kin/kout, ke0, Imax, or gamma values). LSM had ED50 of 15.2 mg/kg in mice and 9.80 mg/kg in rats, with plasma EC50 of 19.3 µM (mice) vs 24.9 µM (rats) and brain EC50 of 14.8 µM (mice) vs 12.2 µM (rats), showing no meaningful interspecies potency difference.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Bettio_2025`
- **model family:** `emax`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Bettio L et al., The Pharmacokinetic and Pharmacodynamic…, International journal of mo… (2025)
  ·  DOI: [10.3390/ijms26157029](https://doi.org/10.3390/ijms26157029)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | ED50(mg/kg) — CBZ | `Q321` · not captured | 9.67 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col2 |
| PD (effect) | ED50(mg/kg) — Rat | `Q321` · not captured | 4.70 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col3 |
| PD (effect) | ED50(mg/kg) — Mouse/rat fold | `Q321` · not captured | 6.91 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col4 |
| PD (effect) | ED50(mg/kg) — PHT | `Q321` · not captured | 9.81 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col5 |
| PD (effect) | ED50(mg/kg) — Rat | `Q321` · not captured | 2.66 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col6 |
| PD (effect) | ED50(mg/kg) — Mouse/rat fold | `Q321` · not captured | 11.5 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col7 |
| PD (effect) | ED50(mg/kg) — VPA | `Q321` · not captured | 196 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col8 |
| PD (effect) | ED50(mg/kg) — Rat | `Q321` · not captured | 307 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col9 |
| PD (effect) | ED50(mg/kg) — Mouse/rat fold | `Q321` · not captured | 2.05 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col10 |
| PD (effect) | ED50(mg/kg) — LSM | `Q321` · not captured | 15.2 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col11 |
| PD (effect) | ED50(mg/kg) — Rat | `Q321` · not captured | 12.2 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col12 |
| PD (effect) | ED50(mg/kg) — Mouse/rat fold | `Q321` · not captured | 1.21 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col13 |
| PD (effect) | ED50(mg/kg) — CNB | `Q321` · not captured | 7.05 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col14 |
| PD (effect) | ED50(mg/kg) — Rat | `Q321` · not captured | 10.7 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col15 |
| PD (effect) | ED50(mg/kg) — Mouse/rat fold | `Q321` · not captured | 2.33 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col16 |
| PD (effect) | ED50(mg/kg) — RTG | `Q321` · not captured | 42.9 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col17 |
| PD (effect) | ED50(mg/kg) — Rat | `Q321` · not captured | 3.01 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col18 |
| PD (effect) | ED50(mg/kg) — Mouse/rat fold | `Q321` · not captured | 1.19 | mg/kg | not captured | llm (not captured) | ijms-26-07029-t001:row2:col19 |
| PD (effect) | EC50 (µM)Plasma — CBZ | `Q321` · not captured | 13.8 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col2 |
| PD (effect) | EC50 (µM)Plasma — Rat | `Q321` · not captured | 1.03 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col3 |
| PD (effect) | EC50 (µM)Plasma — Mouse/rat fold | `Q321` · not captured | 2.28 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col4 |
| PD (effect) | EC50 (µM)Plasma — PHT | `Q321` · not captured | 27.6 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col5 |
| PD (effect) | EC50 (µM)Plasma — Rat | `Q321` · not captured | 0.83 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col6 |
| PD (effect) | EC50 (µM)Plasma — Mouse/rat fold | `Q321` · not captured | 1.33 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col7 |
| PD (effect) | EC50 (µM)Plasma — VPA | `Q321` · not captured | 1668 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col8 |
| PD (effect) | EC50 (µM)Plasma — Rat | `Q321` · not captured | 0.24 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col9 |
| PD (effect) | EC50 (µM)Plasma — Mouse/rat fold | `Q321` · not captured | 1.61 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col10 |
| PD (effect) | EC50 (µM)Plasma — LSM | `Q321` · not captured | 19.3 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col11 |
| PD (effect) | EC50 (µM)Plasma — Rat | `Q321` · not captured | 0.49 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col12 |
| PD (effect) | EC50 (µM)Plasma — Mouse/rat fold | `Q321` · not captured | 1.57 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col13 |
| PD (effect) | EC50 (µM)Plasma — CNB | `Q321` · not captured | 66.0 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col14 |
| PD (effect) | EC50 (µM)Plasma — Rat | `Q321` · not captured | 0.67 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col15 |
| PD (effect) | EC50 (µM)Plasma — Mouse/rat fold | `Q321` · not captured | 0.56 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col16 |
| PD (effect) | EC50 (µM)Plasma — RTG | `Q321` · not captured | 2.26 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col17 |
| PD (effect) | EC50 (µM)Plasma — Rat | `Q321` · not captured | 2.06 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col18 |
| PD (effect) | EC50 (µM)Plasma — Mouse/rat fold | `Q321` · not captured | 0.77 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row3:col19 |
| PD (effect) | EC50 (µM)Brain — CBZ | `Q321` · not captured | 32.5 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row4:col2 |
| PD (effect) | EC50 (µM)Brain — PHT | `Q321` · not captured | 30.6 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row4:col5 |
| PD (effect) | EC50 (µM)Brain — VPA | `Q321` · not captured | 630 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row4:col8 |
| PD (effect) | EC50 (µM)Brain — LSM | `Q321` · not captured | 14.8 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row4:col11 |
| PD (effect) | EC50 (µM)Brain — CNB | `Q321` · not captured | 24.9 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row4:col14 |
| PD (effect) | EC50 (µM)Brain — RTG | `Q321` · not captured | 3.58 | unknown | not captured | llm_confirmed (not captured) | ijms-26-07029-t001:row4:col17 |

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
<sub>← back to [lacosamide](drugs/drug_lacosamide/)</sub>
