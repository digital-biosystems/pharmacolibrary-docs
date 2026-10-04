<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;Potassium&quot;,&quot;href&quot;:&quot;drugs/drug_potassium/&quot;},{&quot;label&quot;:&quot;Lee_2024 \u00b7 PD Korean-Vineland Adaptive Behavior Scale-II Adaptive Behavior Composite score&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Korean-Vineland Adaptive Behavior Scale-II Adaptive Behavior Composite score — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.652). The first reading is what the record holds.">cross-check: disputed</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** L-serine (AST-001) (measured concentrations) drives Korean-Vineland Adaptive Behavior Scale-II Adaptive Behavior Composite score (in score): delayed effect through an effect compartment.

**Model:** No model was generated from this record.

> The paper describes an effect compartment model where the concentration of AST-001 (L-serine) at the effect site stimulates the K-VABS-II-ABC score via a linear relationship, with a baseline score (E0) of 48.51 and a linear progression rate (Kprog) of 0.015 day⁻¹. The equilibration rate constant (Ke0) was estimated at 0.0065 day⁻¹ (corresponding to an equilibration half-life of approximately 15 weeks), and the linear drug effect coefficient (Deff) was 0.0022 L/μg.
>
> <sub>in the paper's terms — summarised by qwen3.8:27b-mtp-q8_0 from the paper's text; not checked by a person</sub>

- **paper:** `Lee_2024`
- **model family:** `effect_compartment`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** stimulation/proportional

## Citation
Lee S et al., Population pharmacokinetic and pharmaco…, Frontiers in pharmacology (2024)
  ·  DOI: [10.3389/fphar.2024.1452526](https://doi.org/10.3389/fphar.2024.1452526)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Ke0 (1/day) — Estimates | `Q326` · not captured | 0.0065 | not captured | not captured | exact (not captured) | T1:row3:col1 |
| PD (effect) | Ke0 (1/day) — RSE (%) | `Q326` · not captured | 7.92 | not captured | not captured | exact (not captured) | T1:row3:col2 |
| PD (effect) | Ke0 (1/day) — Bootstrap (n = 200) a | `Q326` · not captured | 0.0070 | not captured | not captured | exact (not captured) | T1:row3:col3 |
| PD (effect) | Ke0 (1/day) — Bootstrap (n = 200) a | `Q326` · not captured | 0.0043 | not captured | not captured | exact (not captured) | T1:row3:col4 |
| PD (effect) | E0 — Estimates | `Q324` · not captured | 48.51 | not captured | not captured | exact (not captured) | T1:row4:col1 |
| PD (effect) | E0 — RSE (%) | `Q324` · not captured | 1.66 | not captured | not captured | exact (not captured) | T1:row4:col2 |
| PD (effect) | E0 — Bootstrap (n = 200) a | `Q324` · not captured | 48.48 | not captured | not captured | exact (not captured) | T1:row4:col3 |
| PD (effect) | E0 — Bootstrap (n = 200) a | `Q324` · not captured | 46.8 | not captured | not captured | exact (not captured) | T1:row4:col4 |
| PD (effect) | Kprog (1/day) — Estimates | `Q340` · not captured | 0.015 | not captured | not captured | exact (not captured) | T1:row7:col1 |
| PD (effect) | Kprog (1/day) — RSE (%) | `Q340` · not captured | 12.0 | not captured | not captured | exact (not captured) | T1:row7:col2 |
| PD (effect) | Kprog (1/day) — Bootstrap (n = 200) a | `Q340` · not captured | 0.015 | not captured | not captured | exact (not captured) | T1:row7:col3 |
| PD (effect) | Kprog (1/day) — Bootstrap (n = 200) a | `Q340` · not captured | 0.012 | not captured | not captured | exact (not captured) | T1:row7:col4 |
| PD (effect) | ΩKe0 — Estimates | `Q326` · not captured | 0.21 | not captured | not captured | llm_confirmed (not captured) | T1:row9:col1 |
| PD (effect) | ΩKe0 — RSE (%) | `Q326` · not captured | 22.3 | not captured | not captured | llm_confirmed (not captured) | T1:row9:col2 |
| PD (effect) | ΩKe0 — Bootstrap (n = 200) a | `Q326` · not captured | 0.25 | not captured | not captured | llm_confirmed (not captured) | T1:row9:col3 |
| PD (effect) | ΩKe0 — Bootstrap (n = 200) a | `Q326` · not captured | 0.14 | not captured | not captured | llm_confirmed (not captured) | T1:row9:col4 |
| PD (effect) | ΩE0 — Bootstrap (n = 200) a | `Q324` · not captured | 0.2 | not captured | not captured | llm_confirmed (not captured) | T1:row10:col3 |
| PD (effect) | ΩE0 — Bootstrap (n = 200) a | `Q324` · not captured | 0.17 | not captured | not captured | llm_confirmed (not captured) | T1:row10:col4 |
| PD (effect) | ΩKprog — Bootstrap (n = 200) a | `Q340` · not captured | 0.018 | not captured | not captured | llm_confirmed (not captured) | T1:row12:col3 |
| PD (effect) | ΩKprog — Bootstrap (n = 200) a | `Q340` · not captured | 0.014 | not captured | not captured | llm_confirmed (not captured) | T1:row12:col4 |
| — | Correlation E0-Kprog — Estimates | `Q100` · not captured | 0.48 | not captured | not captured | llm_corrected (not captured) | T1:row14:col1 |
| model term | Correlation E0-Kprog — RSE (%) | `Q900` · not captured | 16.9 | not captured | not captured | llm_corrected (not captured) | T1:row14:col2 |
| PD (effect) | Correlation E0-Kprog — Bootstrap (n = 200) a | `Q340` · not captured | 0.49 | not captured | not captured | llm_confirmed (not captured) | T1:row14:col3 |
| PD (effect) | Correlation E0-Kprog — Bootstrap (n = 200) a | `Q340` · not captured | 0.34 | not captured | not captured | llm_confirmed (not captured) | T1:row14:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.652 (30/46 fields) | 16 |

<details><summary>16 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | AST-001 | unknown | mismatch |
| `gpt-oss:120b` | `effect_direction` | stimulation | unknown | mismatch |
| `gpt-oss:120b` | `model_family` | effect_compartment | unknown | mismatch |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 37.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 6.01 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q314]` | not captured | 0.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q314]` | not captured | 0.17 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q314]` | not captured | 1.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 1.31 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.89 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.0022 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 6.01 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 0.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 0.17 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.0022 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 37.5 | not captured | only_one_extracted |

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
