<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;reserpine&quot;,&quot;href&quot;:&quot;drugs/drug_reserpine/&quot;},{&quot;label&quot;:&quot;Alfosea-Cuadrado_2024 \u00b7 PD monoamines (MAs)&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# monoamines (MAs) — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.011). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Reserpine drives monoamines (MAs): indirect response — drug stimulates the loss of monoamines (MAs).

**Model:** No model was generated from this record.

> Reserpine concentrations inhibit the production of monoamines (MA) in the prefrontal cortex, spinal cord, and amygdala via a precursor-pool indirect response model with a parallel transit chain. The paper reports a production rate (kin) of 6.1 × 10−3 mg/h, a precursor pool turnover rate (kp) of 8.6 × 10−4 h−1, a degradation rate (kout) of 2.7 × 10−2 h−1, and a transit rate (k0) of 1.9 × 10−1 h−1.
>
> <sub>in the paper's terms — summarised by qwen3.8:27b-mtp-q8_0 from the paper's text; not checked by a person</sub>

- **paper:** `Alfosea-Cuadrado_2024`
- **model family:** `indirect_response_iv`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** stimulation/proportional

## Citation
Alfosea-Cuadrado GM et al., Population Pharmacokinetic-Pharmacodyna…, Pharmaceutics (2024)
  ·  DOI: [10.3390/pharmaceutics16081101](https://doi.org/10.3390/pharmaceutics16081101)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | kin (mg/h) AMY | `Q327` · not captured | 6.97 | mg/h | not captured | llm (not captured) | Alfosea-Cuadrado_2024:pdv3 |
| PD (effect) | kin (mg/h) PFC | `Q327` · not captured | 2.10 | mg/h | not captured | llm (not captured) | Alfosea-Cuadrado_2024:pdv3 |
| PD (effect) | kin (mg/h) SC | `Q327` · not captured | 1.78 | mg/h | not captured | llm (not captured) | Alfosea-Cuadrado_2024:pdv3 |
| PD (effect) | kp (h−1) | `Q327` · not captured | 8.6 × 10−4 | h−1 | not captured | llm (not captured) | Alfosea-Cuadrado_2024:pdv3 |
| PD (effect) | kout (h−1) | `Q328` · not captured | 2.7 × 10−2 | h−1 | not captured | llm (not captured) | Alfosea-Cuadrado_2024:pdv3 |
| PD (effect) | SLP1 (h) | `Q335` · not captured | 1.1 × 10−1 | h | not captured | llm (not captured) | Alfosea-Cuadrado_2024:pdv3 |
| PD (effect) | k0 (h−1) | `Q338` · not captured | 1.9 × 10−1 | h−1 | not captured | llm (not captured) | Alfosea-Cuadrado_2024:pdv3 |
| PD (effect) | SLP2 (h) | `Q335` · not captured | 1.25 | h | not captured | llm (not captured) | Alfosea-Cuadrado_2024:pdv3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.011 (1/94 fields) | 93 |

<details><summary>93 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | reserpine | unknown | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | unknown | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_ii | unknown | mismatch |
| `gpt-oss:120b` | `parameters[Q22]` | 11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 37 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 11 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 37 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q307]` | 6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q307]` | 9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q307]` | 67 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q307]` | not captured | 6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q307]` | not captured | 9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q307]` | not captured | 67 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 358 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 1.25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 20 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 74 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 18 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 1.78 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 19 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 1.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 6.97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 18 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 7.04 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 2.10 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 18 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 2.16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 1.78 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 19 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 1.76 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 6.97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 18 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 7.04 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 2.10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 18 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 2.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 22 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 24 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 11 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 22 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 24 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 71 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 0.95 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 179 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 22 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | not captured | 0.95 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | not captured | 3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | not captured | 179 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | not captured | 22 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | 14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | 29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | 37 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 29 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 37 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 19.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 45.43 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 12 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 32 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 19.14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 226 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 28 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 19.14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 45.43 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 12 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 32 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 1.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 21 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 59 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 30 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | not captured | 1.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | not captured | 21 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | not captured | 59 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | not captured | 30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q72]` | not captured | 1.25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q72]` | not captured | 20 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q72]` | not captured | 74 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q72]` | not captured | 18 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q95]` | 19.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q95]` | 226 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q95]` | 28 | not captured | only_one_extracted |

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
<sub>← back to [reserpine](drugs/drug_reserpine/)</sub>
