<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;liraglutide&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/&quot;},{&quot;label&quot;:&quot;Inoue_2019 \u00b7 PD haemoglobin A1c&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# haemoglobin A1c — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.357). The first reading is what the record holds.">cross-check: disputed</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Liraglutide (the dose) drives haemoglobin A1c (in %): indirect response — drug inhibits the production of haemoglobin A1c.

**Model:** No model was generated from this record.

> In this physiological indirect response model, liraglutide (a GLP-1 receptor agonist) acts on FPG, which in turn drives HbA1c: the drug proportionally inhibits FPG production (dFPG/dt = Kin,FPG × (1 − Eplacebo) × (1 − Edrug) − Kout,FPG × FPG), with an Emax,GLP-1r of 0.266 (no EC50/ED50 for liraglutide is given in the excerpts), while HbA1c is modelled as a secondary response whose production depends on FPG/Baseline FPG and which declines with an elimination rate constant Kout,HbA1c of 0.0393 /day from a baseline HbA1c of 7.96%.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Inoue_2019`
- **model family:** `indirect_response_i`
- **driver:** `dose_only`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Inoue H et al., Efficacy of DPP-4 inhibitors, GLP-1 ana…, British journal of clinical… (2019)
  ·  DOI: [10.1111/bcp.13807](https://doi.org/10.1111/bcp.13807)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Baseline HbA1c | `Q324` · not captured | 7.96 | % | not captured | llm (not captured) | Inoue_2019:pdv3 |
| PD (effect) | K out, HbA1c | `Q328` · not captured | 0.0393 | /day | not captured | llm (not captured) | Inoue_2019:pdv3 |
| — | λ GLP-1r | `Q100` · not captured | 0.777 | not captured | not captured | nil (not captured) | Inoue_2019:pdv3 |
| variability | Additive error HbA1c | `Q315` · not captured | 0.0721 | % | not captured | llm (not captured) | Inoue_2019:pdv3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.357 (35/98 fields) | 63 |

<details><summary>63 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `effect_direction` | inhibition | unknown | mismatch |
| `gpt-oss:120b` | `effect_form` | proportional | unknown | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_i | unknown | mismatch |
| `gpt-oss:120b` | `parameters[Q100]` | 8.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q100]` | 13.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 14.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 52.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 11.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 41.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 9.51 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 55.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 2.36 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 52.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 1.80 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 26.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 31.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 33.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 1.47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 48.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 3.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 66.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.377 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 34.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.0392 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 21.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 14.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 52.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 11.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 41.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 9.51 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 55.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.36 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 52.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 1.80 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 26.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 31.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 33.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 1.47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 48.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 3.15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 66.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.377 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 34.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.0392 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 21.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 8.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 13.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 0.777 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 8.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 0.654 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 5.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 0.893 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 15.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.0204 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 17.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 113.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 16.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 92.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 22.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | not captured | 0.831 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q67]` | not captured | 3.7 | only_one_extracted |

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
<sub>← back to [liraglutide](drugs/drug_liraglutide/)</sub>
