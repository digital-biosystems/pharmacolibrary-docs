<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;camostat&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/&quot;},{&quot;label&quot;:&quot;Raghavan_2022 \u00b7 PD ACE inhibition&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# ACE inhibition — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.156). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: in vitro.** This record comes from an in-vitro study (cells, tissue or microsomes), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Metadichol (measured concentrations) drives ACE inhibition (in ng/mL) (inhibition; the model form was not identified).

**Model:** No model was generated from this record.

> Metadichol (and camostat mesylate as comparator) directly inhibit ACE enzymatic activity in vitro, measured as inhibition of substrate cleavage (fluorescence), with IC50 values reported in ng/mL for Metadichol and μg/mL for camostat mesylate; the paper does not state the numeric IC50 values, an Imax/Emax, or any kinetic mechanism beyond direct enzyme inhibition.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Raghavan_2022`
- **model family:** `unknown`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Raghavan PR, Metadichol®: A Novel Nanolipid Formulat…, BioMed research internation… (2022)
  ·  DOI: [10.1155/2022/1558860](https://doi.org/10.1155/2022/1558860)

## Parameters
_No resolved parameters._


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.156 (5/32 fields) | 27 |

<details><summary>27 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model_family` | unknown | emax | mismatch |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 79.65 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 39.66 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | 12.14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | 4.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 18.50 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 26.71 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 32.38 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 46.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 43233358 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 0.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 15.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 21.87 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 0.78 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 35235186 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 31685728 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 29234396 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 23276839 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 8797988 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 1.56 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 41305150 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 39329385 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 36713767 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 33778222 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 26087008 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 16009312 | only_one_extracted |

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
<sub>← back to [camostat](drugs/drug_camostat/)</sub>
