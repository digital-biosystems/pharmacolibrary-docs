<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;Potassium&quot;,&quot;href&quot;:&quot;drugs/drug_potassium/&quot;},{&quot;label&quot;:&quot;Yu_2026 \u00b7 PD plasma cortisol&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# plasma cortisol — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.321). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Dexamethasone (measured concentrations) drives plasma cortisol (in unknown): indirect response — drug inhibits the production of plasma cortisol.

**Model:** No model was generated from this record.

> Dexamethasone plasma concentrations inhibit the production of plasma cortisol via an indirect response model (IDR I) with a circadian baseline, characterized by an IC50 of 0.041 ng/mL (FOCEI-Priors) or 0.038 ng/mL (Published), Imax of 1, a Hill coefficient (γ) of 1.19, and a cortisol elimination rate constant (kout) of 0.246 h⁻¹ (FOCEI-Priors) or 0.405 h⁻¹ (Published).
>
> <sub>in the paper's terms — summarised by qwen3.8:27b-mtp-q8_0 from the paper's text; not checked by a person</sub>

- **paper:** `Yu_2026`
- **model family:** `indirect_response_i`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Yu R et al., Prior-informed population pharmacokinet…, Journal of pharmacokinetics… (2026)
  ·  DOI: [10.1007/s10928-026-10062-7](https://doi.org/10.1007/s10928-026-10062-7)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | IC 50 — Published | `Q322` · not captured | 0.0383 | ng/mL | not captured | space_fold (not captured) | Tab3:row3:col4 |
| PD (effect) | IC 50 — FOCEI-Priors | `Q322` · not captured | 0.0412 | ng/mL | not captured | space_fold (not captured) | Tab3:row3:col5 |
| PD (effect) | I max — Published | `Q323` · not captured | 1 | not captured | not captured | space_fold (not captured) | Tab3:row4:col4 |
| PD (effect) | I max — FOCEI-Priors | `Q323` · not captured | 1 | not captured | not captured | space_fold (not captured) | Tab3:row4:col5 |
| PK (driver) | γ — Published | `Q89` · not captured | 1 | not captured | not captured | llm (not captured) | Tab3:row5:col4 |
| PK (driver) | γ — FOCEI-Priors | `Q89` · not captured | 1.19 | not captured | not captured | llm (not captured) | Tab3:row5:col5 |
| PK (driver) | R a — Published | `Q49` · not captured | 18.6 | not captured | not captured | llm (not captured) | Tab3:row6:col4 |
| PK (driver) | R a — FOCEI-Priors | `Q49` · not captured | 17.6 | not captured | not captured | llm (not captured) | Tab3:row6:col5 |
| PK (driver) | R m1 — Published | `Q307` · not captured | 93.4 | not captured | not captured | llm (not captured) | Tab3:row7:col4 |
| PK (driver) | R m1 — FOCEI-Priors | `Q307` · not captured | 93 | not captured | not captured | llm (not captured) | Tab3:row7:col5 |
| PK (driver) | R m2 — Published | `Q307` · not captured | 47.9 | not captured | not captured | llm (not captured) | Tab3:row8:col4 |
| PK (driver) | T p — FOCEI-Priors | `Q81` · not captured | 0.992 | not captured | not captured | llm (not captured) | Tab3:row9:col5 |
| PD (effect) | k out — Published | `Q328` · not captured | 0.405 | not captured | not captured | space_fold (not captured) | Tab3:row10:col4 |
| PD (effect) | k out — FOCEI-Priors | `Q328` · not captured | 0.246 | not captured | not captured | space_fold (not captured) | Tab3:row10:col5 |
| PD (effect) | R max_stress — Published | `Q320` · not captured | 44.8 | not captured | not captured | llm (not captured) | Tab3:row11:col4 |
| PD (effect) | R max_stress — FOCEI-Priors | `Q333` · not captured | 24.7 | not captured | not captured | llm (not captured) | Tab3:row11:col5 |
| model term | τ — Published | `Q362` · not captured | 0.34 | not captured | not captured | llm (not captured) | Tab3:row12:col4 |
| model term | τ — FOCEI-Priors | `Q362` · not captured | 0.34 | not captured | not captured | llm (not captured) | Tab3:row12:col5 |
| variability | ω 2 Rm — FOCEI-Priors | `Q312` · not captured | 0.12 | BSV | not captured | llm (not captured) | Tab3:row14:col5 |
| variability | Additive error — FOCEI-Priors | `Q317` · not captured | 20 | not captured | not captured | exact (not captured) | Tab3:row16:col5 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Biomarker turnover model

This page models **plasma cortisol** as an endogenous turnover response, separately from the drug's pharmacokinetics.

- **driver tier:** `none`
- **turnover quantities linked:** loss_rate
- **effect blocks:** 1
  - dexamethasone: indirect_response_i on production; linked values: concentration_50, gamma
- **turnover review:** <span class="pk-badge pk-badge--orange">needs review</span>
  - `B4_steady_state` — skipped: production and loss/clearance parameters are incomplete
  - `B4_effect_1` — skipped: the perturbing compound has no resolved concentration source
  - `B4_driver_link` — skipped: no driver PK source is available


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.321 (9/28 fields) | 19 |

<details><summary>19 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | Dexamethasone | unknown | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | unknown | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_i | unknown | mismatch |
| `gpt-oss:120b` | `parameters[Q307]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q307]` | not captured | 93.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 44.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 24.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.19 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | not captured | 17.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | not captured | 93 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | not captured | 47.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | not captured | 47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q362]` | 0.34 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q362]` | 0.34 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | 18.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 0.933 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 0.992 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 1.19 | not captured | only_one_extracted |

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
<sub>← back to [Potassium](drugs/drug_potassium/)</sub>
