<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;Potassium&quot;,&quot;href&quot;:&quot;drugs/drug_potassium/&quot;},{&quot;label&quot;:&quot;Li_2022_2 \u00b7 PD Psoriasis Area and Severity Index score&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Psoriasis Area and Severity Index score — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.684). The first reading is what the record holds.">cross-check: disputed</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** AK111 drives Psoriasis Area and Severity Index score (in score): indirect response — drug inhibits the production of Psoriasis Area and Severity Index score.

**Model:** No model was generated from this record.

> The paper describes an indirect response model where AK111 concentrations inhibit the production of the Psoriasis Area and Severity Index (PASI) score to account for the observed lag between peak concentration and maximal effect. The provided excerpts do not state specific potency or rate parameter values (such as IC50, Imax, kin, or kout) for the pharmacodynamic component.
>
> <sub>in the paper's terms — summarised by qwen3.8:27b-mtp-q8_0 from the paper's text; not checked by a person</sub>

- **paper:** `Li_2022_2`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Li Q et al., Population pharmacokinetic/pharmacodyna…, Frontiers in pharmacology (2022)
  ·  DOI: [10.3389/fphar.2022.966176](https://doi.org/10.3389/fphar.2022.966176)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Kin (PASI/day) — Point estimate | `Q327` · not captured | 0.474 | PASI/day | not captured | exact (not captured) | T2:row11:col2 |
| PD (effect) | Kin (PASI/day) — RSE% | `Q327` · not captured | 21.3 | PASI/day | not captured | exact (not captured) | T2:row11:col3 |
| PD (effect) | Kin (PASI/day) — Bootstrap of estimates median | `Q327` · not captured | 0.481 | PASI/day | not captured | exact (not captured) | T2:row11:col4 |
| PD (effect) | Kin (PASI/day) — Bootstrap of estimates 90%CI | `Q327` · not captured | 0.305 | PASI/day | not captured | exact (not captured) | T2:row11:col5 |
| PD (effect) | Kout (1/day) — Point estimate | `Q328` · not captured | 0.024 | not captured | not captured | exact (not captured) | T2:row12:col2 |
| PD (effect) | Kout (1/day) — RSE% | `Q328` · not captured | 21.5 | not captured | not captured | exact (not captured) | T2:row12:col3 |
| PD (effect) | Kout (1/day) — Bootstrap of estimates median | `Q328` · not captured | 0.025 | not captured | not captured | exact (not captured) | T2:row12:col4 |
| PD (effect) | Kout (1/day) — Bootstrap of estimates 90%CI | `Q328` · not captured | 0.015 | not captured | not captured | exact (not captured) | T2:row12:col5 |
| PD (effect) | Imax — Point estimate | `Q323` · not captured | 1 | not captured | not captured | exact (not captured) | T2:row13:col2 |
| PD (effect) | Imax — Bootstrap of estimates median | `Q323` · not captured | 1 | not captured | not captured | exact (not captured) | T2:row13:col4 |
| PD (effect) | IC50 (ug/mL) — Point estimate | `Q322` · not captured | 0.52 | ug/mL | not captured | exact (not captured) | T2:row14:col2 |
| PD (effect) | IC50 (ug/mL) — RSE% | `Q322` · not captured | 66.4 | ug/mL | not captured | exact (not captured) | T2:row14:col3 |
| PD (effect) | IC50 (ug/mL) — Bootstrap of estimates median | `Q322` · not captured | 0.566 | ug/mL | not captured | exact (not captured) | T2:row14:col4 |
| PD (effect) | IC50 (ug/mL) — Bootstrap of estimates 90%CI | `Q322` · not captured | 0 | ug/mL | not captured | exact (not captured) | T2:row14:col5 |
| PD (effect) | PLBmax — Point estimate | `Q341` · not captured | 0.429 | not captured | not captured | llm (not captured) | T2:row15:col2 |
| PD (effect) | PLBmax — RSE% | `Q341` · not captured | 78.2 | not captured | not captured | llm (not captured) | T2:row15:col3 |
| PD (effect) | PLBmax — Bootstrap of estimates median | `Q341` · not captured | 0.394 | not captured | not captured | llm (not captured) | T2:row15:col4 |
| PD (effect) | PLBmax — Bootstrap of estimates 90%CI | `Q341` · not captured | 0 | not captured | not captured | llm (not captured) | T2:row15:col5 |
| PD (effect) | Kplb — Bootstrap of estimates median | `Q328` · not captured | 0 | not captured | not captured | llm (not captured) | T2:row16:col4 |
| variability | IIV Kin (%) — Point estimate | `Q312` · not captured | 16.0 | not captured | not captured | llm_confirmed (not captured) | T2:row18:col2 |
| PD (effect) | IIV Kin (%) — RSE% | `Q327` · not captured | 38.7 | not captured | not captured | llm_corrected (not captured) | T2:row18:col3 |
| PD (effect) | IIV Kin (%) — Bootstrap of estimates median | `Q327` · not captured | 16.8 | not captured | not captured | llm_corrected (not captured) | T2:row18:col4 |
| PD (effect) | IIV Kin (%) — Bootstrap of estimates 90%CI | `Q327` · not captured | 5.90 | not captured | not captured | llm_corrected (not captured) | T2:row18:col5 |
| variability | IIV Kin (%) — Shrinkage% | `Q318` · not captured | 98.8 | not captured | not captured | llm_corrected (not captured) | T2:row18:col6 |
| variability | IIV Kout (%) — Point estimate | `Q312` · not captured | 23.3 | not captured | not captured | llm_corrected (not captured) | T2:row19:col2 |
| PD (effect) | IIV Kout (%) — RSE% | `Q328` · not captured | 13.8 | not captured | not captured | llm_confirmed (not captured) | T2:row19:col3 |
| PD (effect) | IIV Kout (%) — Bootstrap of estimates median | `Q328` · not captured | 22.2 | not captured | not captured | llm_confirmed (not captured) | T2:row19:col4 |
| PD (effect) | IIV Kout (%) — Bootstrap of estimates 90%CI | `Q328` · not captured | 15.5 | not captured | not captured | llm_confirmed (not captured) | T2:row19:col5 |
| variability | IIV Kout (%) — Shrinkage% | `Q318` · not captured | 18.3 | not captured | not captured | llm_corrected (not captured) | T2:row19:col6 |
| PD (effect) | IIV IC50 (%) — Point estimate | `Q322` · not captured | 161.2 | unknown | not captured | llm_confirmed (not captured) | T2:row20:col2 |
| PD (effect) | IIV IC50 (%) — RSE% | `Q322` · not captured | 33.5 | unknown | not captured | llm_confirmed (not captured) | T2:row20:col3 |
| PD (effect) | IIV IC50 (%) — Bootstrap of estimates median | `Q322` · not captured | 161.2 | unknown | not captured | llm_confirmed (not captured) | T2:row20:col4 |
| PD (effect) | IIV IC50 (%) — Bootstrap of estimates 90%CI | `Q322` · not captured | 67.6 | unknown | not captured | llm_confirmed (not captured) | T2:row20:col5 |
| variability | IIV IC50 (%) — Shrinkage% | `Q318` · not captured | 47.8 | not captured | not captured | llm_corrected (not captured) | T2:row20:col6 |
| PD (effect) | IIV PLBmax (%) — Bootstrap of estimates median | `Q341` · not captured | 96.4 | not captured | not captured | llm_corrected (not captured) | T2:row21:col4 |
| PD (effect) | IIV PLBmax (%) — Bootstrap of estimates 90%CI | `Q341` · not captured | 64.7 | not captured | not captured | llm_corrected (not captured) | T2:row21:col5 |
| variability | σPASI — Point estimate | `Q315` · not captured | 4.53 | not captured | not captured | llm (not captured) | T2:row22:col2 |
| variability | σPASI — RSE% | `Q315` · not captured | 21.6 | not captured | not captured | llm (not captured) | T2:row22:col3 |
| variability | σPASI — Shrinkage% | `Q318` · not captured | 11.5 | not captured | not captured | llm (not captured) | T2:row22:col6 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.684 (65/95 fields) | 30 |

<details><summary>30 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | AK111 | unknown | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | unknown | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_i | unknown | mismatch |
| `gpt-oss:120b` | `parameters[Q312]` | 5.90 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 5.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 13.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 0.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 4.53 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 21.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 4.49 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 2.92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 0.012 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 42.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 0.012 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 1.48 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 42.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 98.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 18.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 5.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 0.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 5.90 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 98.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 18.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q332]` | not captured | 0.429 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q332]` | not captured | 78.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q332]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q341]` | not captured | 0.394 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | -7.68 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | not captured | 13.4 | only_one_extracted |

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
<sub>← back to [Potassium](drugs/drug_potassium/)</sub>
