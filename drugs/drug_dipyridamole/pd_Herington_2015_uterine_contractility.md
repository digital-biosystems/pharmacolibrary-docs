<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;dipyridamole&quot;,&quot;href&quot;:&quot;drugs/drug_dipyridamole/&quot;},{&quot;label&quot;:&quot;Herington_2015 \u00b7 PD name&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Benzbromarone, dipyridamole, fenoterol hydrobromide, nisoldipine drive name (in frequency): direct sigmoid Emax (Hill) effect.

**Model:** No model was generated from this record.

> Dipyridamole, a phosphodiesterase inhibitor, was tested as a hit-antagonist that inhibits oxytocin-induced Ca2+-mobilization in murine uterine myometrial cells and, in ex vivo uterine myometrial contractility assays, inhibited uterine contractions (frequency) with a sigmoid Emax inhibitory concentration-response model. The excerpts do not report dipyridamole-specific EC50, Emax, or rate parameters, and the record's parameter list cannot be unambiguously assigned to dipyridamole.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Herington_2015`
- **model family:** `sigmoid_emax`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Herington JL et al., High-Throughput Screening of Myometrial…, PloS one (2015)
  ·  DOI: [10.1371/journal.pone.0143243](https://doi.org/10.1371/journal.pone.0143243)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | 1388 — EC50 | `Q321` · not captured | 7.43e-07 | unknown | not captured | llm (not captured) | pone.0143243.t002:row2:col2 |
| PD (effect) | 1388 — Emax ± SEM | `Q320` · not captured | 90.92 | not captured | not captured | llm (not captured) | pone.0143243.t002:row2:col3 |
| PD (effect) | 3005837 — EC50 | `Q321` · not captured | 1.65e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row3:col2 |
| PD (effect) | 3005837 — Emax ± SEM | `Q320` · not captured | 17.43 | not captured | not captured | llm (not captured) | pone.0143243.t002:row3:col3 |
| PD (effect) | 1150 — EC50 | `Q321` · not captured | 3.08e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row4:col2 |
| PD (effect) | 1150 — Emax ± SEM | `Q320` · not captured | 10.29 | not captured | not captured | llm (not captured) | pone.0143243.t002:row4:col3 |
| PD (effect) | 41684 — EC50 | `Q321` · not captured | 4.20e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row5:col2 |
| PD (effect) | 41684 — Emax ± SEM | `Q320` · not captured | 26.9 | not captured | not captured | llm (not captured) | pone.0143243.t002:row5:col3 |
| PD (effect) | 54680693 — EC50 | `Q321` · not captured | 5.68e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row6:col2 |
| PD (effect) | 54680693 — Emax ± SEM | `Q320` · not captured | 22.58 | not captured | not captured | llm (not captured) | pone.0143243.t002:row6:col3 |
| PD (effect) | 5649 — EC50 | `Q321` · not captured | 6.49e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row7:col2 |
| PD (effect) | 5649 — Emax ± SEM | `Q320` · not captured | 8.72 | not captured | not captured | llm (not captured) | pone.0143243.t002:row7:col3 |
| PD (effect) | 5265 — EC50 | `Q321` · not captured | 1.02e-05 | unknown | not captured | llm (not captured) | pone.0143243.t002:row8:col2 |
| PD (effect) | 5265 — Emax ± SEM | `Q320` · not captured | 81.89 | not captured | not captured | llm (not captured) | pone.0143243.t002:row8:col3 |
| PD (effect) | 34312 — EC50 | `Q321` · not captured | 1.10e-05 | unknown | not captured | llm (not captured) | pone.0143243.t002:row9:col2 |
| PD (effect) | 34312 — Emax ± SEM | `Q320` · not captured | 7.44 | not captured | not captured | llm (not captured) | pone.0143243.t002:row9:col3 |
| PD (effect) | 8397 — EC50 | `Q321` · not captured | 1.13e-05 | unknown | not captured | llm (not captured) | pone.0143243.t002:row10:col2 |
| PD (effect) | 8397 — Emax ± SEM | `Q320` · not captured | 24.78 | not captured | not captured | llm (not captured) | pone.0143243.t002:row10:col3 |
| PD (effect) | 3598 — EC50 | `Q321` · not captured | 1.39e-05 | unknown | not captured | llm (not captured) | pone.0143243.t002:row11:col2 |
| PD (effect) | 3598 — Emax ± SEM | `Q320` · not captured | 17.79 | not captured | not captured | llm (not captured) | pone.0143243.t002:row11:col3 |
| PD (effect) | 3397 — EC50 | `Q321` · not captured | 2.19e-05 | unknown | not captured | llm (not captured) | pone.0143243.t002:row12:col2 |
| PD (effect) | 3397 — Emax ± SEM | `Q320` · not captured | 15.23 | not captured | not captured | llm (not captured) | pone.0143243.t002:row12:col3 |
| PD (effect) | 5701996 — EC50 | `Q321` · not captured | 3.03e-05 | unknown | not captured | llm (not captured) | pone.0143243.t002:row13:col2 |
| PD (effect) | 5701996 — Emax ± SEM | `Q320` · not captured | 11.53 | not captured | not captured | llm (not captured) | pone.0143243.t002:row13:col3 |
| PD (effect) | 3386 — EC50 | `Q321` · not captured | 4.45e-05 | unknown | not captured | llm (not captured) | pone.0143243.t002:row14:col2 |
| PD (effect) | 3386 — Emax ± SEM | `Q320` · not captured | 21.65 | not captured | not captured | llm (not captured) | pone.0143243.t002:row14:col3 |
| PD (effect) | 4993 — EC50 | `Q321` · not captured | 5.56e-05 | unknown | not captured | llm (not captured) | pone.0143243.t002:row15:col2 |
| PD (effect) | 4993 — Emax ± SEM | `Q320` · not captured | 85.64 | not captured | not captured | llm (not captured) | pone.0143243.t002:row15:col3 |
| PD (effect) | 3037 — EC50 | `Q321` · not captured | 9.44e-07 | unknown | not captured | llm (not captured) | pone.0143243.t002:row17:col2 |
| PD (effect) | 3037 — Emax ± SEM | `Q320` · not captured | 115.28 | not captured | not captured | llm (not captured) | pone.0143243.t002:row17:col3 |
| PD (effect) | 37123 — EC50 | `Q321` · not captured | 9.93e-07 | unknown | not captured | llm (not captured) | pone.0143243.t002:row18:col2 |
| PD (effect) | 37123 — Emax ± SEM | `Q320` · not captured | 35.15 | not captured | not captured | llm (not captured) | pone.0143243.t002:row18:col3 |
| PD (effect) | 52897276 — EC50 | `Q321` · not captured | 1.07e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row19:col2 |
| PD (effect) | 52897276 — Emax ± SEM | `Q320` · not captured | 33.83 | not captured | not captured | llm (not captured) | pone.0143243.t002:row19:col3 |
| PD (effect) | 16682730 — EC50 | `Q321` · not captured | 1.13e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row20:col2 |
| PD (effect) | 16682730 — Emax ± SEM | `Q320` · not captured | 112.88 | not captured | not captured | llm (not captured) | pone.0143243.t002:row20:col3 |
| PD (effect) | 6083 — EC50 | `Q321` · not captured | 1.16e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row21:col2 |
| PD (effect) | 6083 — Emax ± SEM | `Q320` · not captured | 49.74 | not captured | not captured | llm (not captured) | pone.0143243.t002:row21:col3 |
| PD (effect) | 27924 — EC50 | `Q321` · not captured | 1.27e-07 | unknown | not captured | llm (not captured) | pone.0143243.t002:row22:col2 |
| PD (effect) | 27924 — Emax ± SEM | `Q320` · not captured | 103.43 | not captured | not captured | llm (not captured) | pone.0143243.t002:row22:col3 |
| PD (effect) | 10205 — EC50 | `Q321` · not captured | 1.50e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row23:col2 |
| PD (effect) | 10205 — Emax ± SEM | `Q320` · not captured | 114.4 | not captured | not captured | llm (not captured) | pone.0143243.t002:row23:col3 |
| PD (effect) | 3352 — EC50 | `Q321` · not captured | 1.70e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row24:col2 |
| PD (effect) | 3352 — Emax ± SEM | `Q320` · not captured | 80.65 | not captured | not captured | llm (not captured) | pone.0143243.t002:row24:col3 |
| PD (effect) | 3606 — EC50 | `Q321` · not captured | 3.36e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row25:col2 |
| PD (effect) | 3606 — Emax ± SEM | `Q320` · not captured | 108.18 | not captured | not captured | llm (not captured) | pone.0143243.t002:row25:col3 |
| PD (effect) | 2333 — EC50 | `Q321` · not captured | 1.91e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row26:col2 |
| PD (effect) | 2333 — Emax ± SEM | `Q320` · not captured | 130.03 | not captured | not captured | llm (not captured) | pone.0143243.t002:row26:col3 |
| PD (effect) | 6377243 — EC50 | `Q321` · not captured | 2.83e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row27:col2 |
| PD (effect) | 6377243 — Emax ± SEM | `Q320` · not captured | 114.15 | not captured | not captured | llm (not captured) | pone.0143243.t002:row27:col3 |
| PD (effect) | 72385 — EC50 | `Q321` · not captured | 4.48e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row28:col2 |
| PD (effect) | 72385 — Emax ± SEM | `Q320` · not captured | 123.35 | not captured | not captured | llm (not captured) | pone.0143243.t002:row28:col3 |
| PD (effect) | 3492326 — EC50 | `Q321` · not captured | 5.03e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row29:col2 |
| PD (effect) | 3492326 — Emax ± SEM | `Q320` · not captured | 122.17 | not captured | not captured | llm (not captured) | pone.0143243.t002:row29:col3 |
| PD (effect) | 452550 — EC50 | `Q321` · not captured | 7.19e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row30:col2 |
| PD (effect) | 452550 — Emax ± SEM | `Q320` · not captured | 139.95 | not captured | not captured | llm (not captured) | pone.0143243.t002:row30:col3 |
| PD (effect) | 9556529 — EC50 | `Q321` · not captured | 7.44e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row31:col2 |
| PD (effect) | 9556529 — Emax ± SEM | `Q320` · not captured | 80.33 | not captured | not captured | llm (not captured) | pone.0143243.t002:row31:col3 |
| PD (effect) | 3651377 — EC50 | `Q321` · not captured | 7.92e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row32:col2 |
| PD (effect) | 3651377 — Emax ± SEM | `Q320` · not captured | 152.43 | not captured | not captured | llm (not captured) | pone.0143243.t002:row32:col3 |
| PD (effect) | 2378 — EC50 | `Q321` · not captured | 8.66e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row33:col2 |
| PD (effect) | 2378 — Emax ± SEM | `Q320` · not captured | 61.95 | not captured | not captured | llm (not captured) | pone.0143243.t002:row33:col3 |
| PD (effect) | 4499 — EC50 | `Q321` · not captured | 9.43e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row34:col2 |
| PD (effect) | 4499 — Emax ± SEM | `Q320` · not captured | 144.42 | not captured | not captured | llm (not captured) | pone.0143243.t002:row34:col3 |
| PD (effect) | 2330 — EC50 | `Q321` · not captured | 9.82e-06 | unknown | not captured | llm (not captured) | pone.0143243.t002:row35:col2 |
| PD (effect) | 2330 — Emax ± SEM | `Q320` · not captured | 115.68 | not captured | not captured | llm (not captured) | pone.0143243.t002:row35:col3 |
| PD (effect) | 3503 — EC50 | `Q321` · not captured | 1.00e-05 | unknown | not captured | llm (not captured) | pone.0143243.t002:row36:col2 |
| PD (effect) | 3503 — Emax ± SEM | `Q320` · not captured | 119.51 | not captured | not captured | llm (not captured) | pone.0143243.t002:row36:col3 |
| PD (effect) | 73357 — EC50 | `Q321` · not captured | 1.08e-05 | unknown | not captured | llm (not captured) | pone.0143243.t002:row37:col2 |
| PD (effect) | 73357 — Emax ± SEM | `Q320` · not captured | 63.77 | not captured | not captured | llm (not captured) | pone.0143243.t002:row37:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/74 fields) | 74 |

<details><summary>74 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | benzbromarone, dipyridamole, fenoterol hydrobromide, nisoldipine | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | sigmoid_emax | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q320]` | 24.78 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 17.79 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 15.23 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 11.53 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 21.65 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 85.64 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 115.28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 35.15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 33.83 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 112.88 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 49.74 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 103.43 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 114.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 80.65 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 108.18 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 130.03 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 114.15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 123.35 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 122.17 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 90.92 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 139.95 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 80.33 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 152.43 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 61.95 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 144.42 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 115.68 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 119.51 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 63.77 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 17.43 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 10.29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 26.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 22.58 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 8.72 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 81.89 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 7.44 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.13e-05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.39e-05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 2.19e-05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 3.03e-05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 4.45e-05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 5.56e-05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 9.44e-07 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 9.93e-07 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.07e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.13e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.16e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.27e-07 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.50e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.70e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 3.36e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.91e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 2.83e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 4.48e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 5.03e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 7.43e-07 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 7.19e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 7.44e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 7.92e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 8.66e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 9.43e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 9.82e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.00e-05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.08e-05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.65e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 3.08e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 4.20e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 5.68e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 6.49e-06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.02e-05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.10e-05 | not captured | only_one_extracted |

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
<sub>← back to [dipyridamole](drugs/drug_dipyridamole/)</sub>
