<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;desoxyribonuclease&quot;,&quot;href&quot;:&quot;drugs/drug_desoxyribonuclease/&quot;},{&quot;label&quot;:&quot;Diamond_2026 \u00b7 PD cell viability&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# cell viability — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** IDB-001 (measured concentrations) drives cell viability (in unknown): direct Emax (saturable) effect.

**Model:** No model was generated from this record.

> Concentrations of the translation-inhibitor interdictors (IDB-001, IDB-002, IDB-003, ANS, HHT) were fitted with an inhibitory Emax (dose-response) model against 72-h cell viability (CellTiter-Fluor, % of DMSO control) in several cell lines; the mechanism is direct inhibition of translation elongation via PTC-nascent chain stalling (context-dependent ribosome stalling, e.g. MYC/CCND1/CDK4 depletion), not a kinetic production/elimination model. Potency (EC50, µM): IDB-003 0.053 (22Rv1), 0.152 (HCC-1143), 0.024 (LS411N), 0.130 (MCF7), 0.496 (MRC-5); IDB-002 0.103 (22Rv1), 0.210 (HCC-1143), 0.236 (LS411N), 0.341 (MCF7), 0.618 (MRC-5); ANS 0.045 (22Rv1), 0.195 (HCC-1143), 0.084 (LS411N), 0.206 (M
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Diamond_2026`
- **model family:** `emax`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Diamond PD et al., Context-dependent translation inhibitio…, Nature communications (2026)
  ·  DOI: [10.1038/s41467-026-69891-2](https://doi.org/10.1038/s41467-026-69891-2)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | EC50 (µM) — 22Rv1 | `Q321` · not captured | 4.983 | µM | not captured | exact (not captured) | Tab2:row1:col2 |
| PD (effect) | EC50 (µM) — IDB-002 | `Q321` · not captured | 0.103 | µM | not captured | exact (not captured) | Tab2:row1:col3 |
| PD (effect) | EC50 (µM) — IDB-003 | `Q321` · not captured | 0.053 | µM | not captured | exact (not captured) | Tab2:row1:col4 |
| PD (effect) | EC50 (µM) — ANS | `Q321` · not captured | 0.045 | µM | not captured | exact (not captured) | Tab2:row1:col5 |
| PD (effect) | EC50 (µM) — HHT | `Q321` · not captured | 0.010 | µM | not captured | exact (not captured) | Tab2:row1:col6 |
| PD (effect) | EC50 (µM) — HCC-1143 | `Q321` · not captured | 0.663 | µM | not captured | exact (not captured) | Tab2:row1:col7 |
| PD (effect) | EC50 (µM) — IDB-002 | `Q321` · not captured | 0.210 | µM | not captured | exact (not captured) | Tab2:row1:col8 |
| PD (effect) | EC50 (µM) — IDB-003 | `Q321` · not captured | 0.152 | µM | not captured | exact (not captured) | Tab2:row1:col9 |
| PD (effect) | EC50 (µM) — ANS | `Q321` · not captured | 0.195 | µM | not captured | exact (not captured) | Tab2:row1:col10 |
| PD (effect) | EC50 (µM) — HHT | `Q321` · not captured | 0.117 | µM | not captured | exact (not captured) | Tab2:row1:col11 |
| PD (effect) | EC50 (µM) — LS411N | `Q321` · not captured | 4.233 | µM | not captured | exact (not captured) | Tab2:row1:col12 |
| PD (effect) | EC50 (µM) — IDB-002 | `Q321` · not captured | 0.236 | µM | not captured | exact (not captured) | Tab2:row1:col13 |
| PD (effect) | EC50 (µM) — IDB-003 | `Q321` · not captured | 0.024 | µM | not captured | exact (not captured) | Tab2:row1:col14 |
| PD (effect) | EC50 (µM) — ANS | `Q321` · not captured | 0.084 | µM | not captured | exact (not captured) | Tab2:row1:col15 |
| PD (effect) | EC50 (µM) — HHT | `Q321` · not captured | 0.042 | µM | not captured | exact (not captured) | Tab2:row1:col16 |
| PD (effect) | EC50 (µM) — MCF7 | `Q321` · not captured | 1.364 | µM | not captured | exact (not captured) | Tab2:row1:col17 |
| PD (effect) | EC50 (µM) — IDB-002 | `Q321` · not captured | 0.341 | µM | not captured | exact (not captured) | Tab2:row1:col18 |
| PD (effect) | EC50 (µM) — IDB-003 | `Q321` · not captured | 0.130 | µM | not captured | exact (not captured) | Tab2:row1:col19 |
| PD (effect) | EC50 (µM) — ANS | `Q321` · not captured | 0.206 | µM | not captured | exact (not captured) | Tab2:row1:col20 |
| PD (effect) | EC50 (µM) — HHT | `Q321` · not captured | 0.026 | µM | not captured | exact (not captured) | Tab2:row1:col21 |
| PD (effect) | EC50 (µM) — MRC-5 | `Q321` · not captured | 5.440 | µM | not captured | exact (not captured) | Tab2:row1:col22 |
| PD (effect) | EC50 (µM) — IDB-002 | `Q321` · not captured | 0.618 | µM | not captured | exact (not captured) | Tab2:row1:col23 |
| PD (effect) | EC50 (µM) — IDB-003 | `Q321` · not captured | 0.496 | µM | not captured | exact (not captured) | Tab2:row1:col24 |
| PD (effect) | EC50 (µM) — ANS | `Q321` · not captured | 0.211 | µM | not captured | exact (not captured) | Tab2:row1:col25 |
| PD (effect) | EC50 (µM) — HHT | `Q321` · not captured | 0.098 | µM | not captured | exact (not captured) | Tab2:row1:col26 |
| PD (effect) | EC50 Upper CI (µM) — 22Rv1 | `Q321` · not captured | 6.649 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col2 |
| PD (effect) | EC50 Upper CI (µM) — IDB-002 | `Q321` · not captured | 0.058 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col3 |
| PD (effect) | EC50 Upper CI (µM) — IDB-003 | `Q321` · not captured | 0.033 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col4 |
| PD (effect) | EC50 Upper CI (µM) — ANS | `Q321` · not captured | 0.026 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col5 |
| PD (effect) | EC50 Upper CI (µM) — HHT | `Q321` · not captured | 0.006 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col6 |
| PD (effect) | EC50 Upper CI (µM) — HCC-1143 | `Q321` · not captured | 0.916 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col7 |
| PD (effect) | EC50 Upper CI (µM) — IDB-002 | `Q321` · not captured | 0.093 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col8 |
| PD (effect) | EC50 Upper CI (µM) — IDB-003 | `Q321` · not captured | 0.115 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col9 |
| PD (effect) | EC50 Upper CI (µM) — ANS | `Q321` · not captured | 0.086 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col10 |
| PD (effect) | EC50 Upper CI (µM) — HHT | `Q321` · not captured | 0.055 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col11 |
| PD (effect) | EC50 Upper CI (µM) — LS411N | `Q321` · not captured | 5.098 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col12 |
| PD (effect) | EC50 Upper CI (µM) — IDB-002 | `Q321` · not captured | 0.154 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col13 |
| PD (effect) | EC50 Upper CI (µM) — IDB-003 | `Q321` · not captured | 0.019 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col14 |
| PD (effect) | EC50 Upper CI (µM) — ANS | `Q321` · not captured | 0.051 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col15 |
| PD (effect) | EC50 Upper CI (µM) — HHT | `Q321` · not captured | 0.028 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col16 |
| PD (effect) | EC50 Upper CI (µM) — MCF7 | `Q321` · not captured | 1.648 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col17 |
| PD (effect) | EC50 Upper CI (µM) — IDB-002 | `Q321` · not captured | 0.255 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col18 |
| PD (effect) | EC50 Upper CI (µM) — IDB-003 | `Q321` · not captured | 0.072 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col19 |
| PD (effect) | EC50 Upper CI (µM) — ANS | `Q321` · not captured | 0.108 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col20 |
| PD (effect) | EC50 Upper CI (µM) — HHT | `Q321` · not captured | 0.016 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col21 |
| PD (effect) | EC50 Upper CI (µM) — MRC-5 | `Q321` · not captured | 7.840 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col22 |
| PD (effect) | EC50 Upper CI (µM) — IDB-002 | `Q321` · not captured | 0.336 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col23 |
| PD (effect) | EC50 Upper CI (µM) — IDB-003 | `Q321` · not captured | 0.222 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col24 |
| PD (effect) | EC50 Upper CI (µM) — ANS | `Q321` · not captured | 0.121 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col25 |
| PD (effect) | EC50 Upper CI (µM) — HHT | `Q321` · not captured | 0.061 | µM | not captured | llm_confirmed (not captured) | Tab2:row2:col26 |
| PD (effect) | EC50 Lower CI (µM) — 22Rv1 | `Q321` · not captured | 3.735 | µM | not captured | llm_confirmed (not captured) | Tab2:row3:col2 |
| PD (effect) | EC50 Lower CI (µM) — HCC-1143 | `Q321` · not captured | 0.479 | µM | not captured | llm_confirmed (not captured) | Tab2:row3:col7 |
| PD (effect) | EC50 Lower CI (µM) — LS411N | `Q321` · not captured | 3.514 | µM | not captured | llm_confirmed (not captured) | Tab2:row3:col12 |
| PD (effect) | EC50 Lower CI (µM) — MCF7 | `Q321` · not captured | 1.129 | µM | not captured | llm_confirmed (not captured) | Tab2:row3:col17 |
| PD (effect) | EC50 Lower CI (µM) — MRC-5 | `Q321` · not captured | 3.780 | µM | not captured | llm_confirmed (not captured) | Tab2:row3:col22 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/59 fields) | 59 |

<details><summary>59 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | IDB-001 | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | emax | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q321]` | 0.195 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.117 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 4.233 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.236 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.024 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.084 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.042 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.364 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.341 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.130 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 4.983 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.206 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.026 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 5.440 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.618 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.496 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.211 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.098 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.103 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.053 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.045 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.010 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.663 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.210 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.152 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.086 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.055 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 5.098 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.154 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.019 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.051 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.028 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.648 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.255 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.072 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 6.649 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.108 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.016 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 7.840 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.336 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.222 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.121 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.061 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.058 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.033 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.026 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.006 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.916 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.093 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.115 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 3.514 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.129 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 3.735 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 3.780 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.479 | not captured | only_one_extracted |

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
<sub>← back to [desoxyribonuclease](drugs/drug_desoxyribonuclease/)</sub>
