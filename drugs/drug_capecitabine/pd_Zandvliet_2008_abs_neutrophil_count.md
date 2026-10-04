<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;Zandvliet_2008 \u00b7 PD absolute neutrophil count&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Wen2021_reference&quot;,&quot;label&quot;:&quot;Wen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Wen2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# absolute neutrophil count — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Indisulam drives absolute neutrophil count (in ×10^9/l): indirect response — drug inhibits the loss of absolute neutrophil count.

**Model:** No model was generated from this record.

> Indisulam exposure (with 5'-DFUR, a capecitabine metabolite, inhibiting the enzyme input rate via an Emax function, C50 = 0.0167 nM for 50% reduction of kin,enzyme) drives inhibition of neutrophil production in a semiphysiological myelosuppression model of absolute neutrophil count (×10^9/l), with transit compartments giving MTT of 138 h (enzyme MTT 230 h) in one fit and MTT 93.7 h (enzyme MTT 93.7 h reported as 230 h enzyme) in another; the paper does not state Imax/IC50/EC50/ke0/gamma values for the ANC effect itself.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Zandvliet_2008`
- **model family:** `indirect_response_ii`
- **driver:** `not_resolved`
- **effect:** inhibition/unknown

## Citation
Zandvliet AS et al., PK/PD model of indisulam and capecitabi…, Clinical pharmacology and t… (2008)
  ·  DOI: [10.1038/sj.clpt.6100344](https://doi.org/10.1038/sj.clpt.6100344)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | MTT enzyme (h) — Estimate | `Q81` · not captured | 230 | h | not captured | boundary (not captured) | tab_2:row2:col2 |
| PK (driver) | MTT enzyme (h) — RSE | `Q81` · not captured | 0.12 | h | not captured | boundary (not captured) | tab_2:row2:col3 |
| PK (driver) | MTT enzyme (h) — IIV (%) | `Q81` · not captured | 78 | h | not captured | boundary (not captured) | tab_2:row2:col5 |
| PK (driver) | MTT enzyme (h) — RSE | `Q81` · not captured | 0.68 | h | not captured | boundary (not captured) | tab_2:row2:col6 |
| PK (driver) | MTT (h) — Estimate | `Q81` · not captured | 138 | h | not captured | exact (not captured) | tab_2:row4:col2 |
| PK (driver) | MTT (h) — RSE | `Q81` · not captured | 0.07 | h | not captured | exact (not captured) | tab_2:row4:col3 |
| PK (driver) | MTT (h) — Range a | `Q81` · not captured | 134 | h | not captured | exact (not captured) | tab_2:row4:col4 |
| PK (driver) | MTT (h) — IIV (%) | `Q81` · not captured | 25 | h | not captured | exact (not captured) | tab_2:row4:col5 |
| PK (driver) | MTT (h) — RSE | `Q81` · not captured | 0.38 | h | not captured | exact (not captured) | tab_2:row4:col6 |
| PK (driver) | MTT (h) — Range a (%) | `Q81` · not captured | 10 | h | not captured | exact (not captured) | tab_2:row4:col7 |
| variability | g — IIV (%) | `Q312` · not captured | 69 | not captured | not captured | llm (not captured) | tab_2:row5:col5 |
| variability | Proportional residual error (%) | `Q316` · not captured | 32.5 | not captured | not captured | exact (not captured) | tab_2:row8:col1 |
| variability | Proportional residual error (%) — Estimate | `Q316` · not captured | 0.09 | not captured | not captured | exact (not captured) | tab_2:row8:col2 |
| variability | Proportional residual error (%) — RSE | `Q316` · not captured | 31.5 | not captured | not captured | exact (not captured) | tab_2:row8:col3 |
| PK (driver) | MTT (h) — Estimate | `Q81` · not captured | 93.7 | h | not captured | exact (not captured) | tab_2:row10:col2 |
| PK (driver) | MTT (h) — RSE | `Q81` · not captured | 0.13 | h | not captured | exact (not captured) | tab_2:row10:col3 |
| PK (driver) | MTT (h) — Range a | `Q81` · not captured | 80.2 | h | not captured | exact (not captured) | tab_2:row10:col4 |
| PK (driver) | MTT (h) — IIV (%) | `Q81` · not captured | 19 | h | not captured | exact (not captured) | tab_2:row10:col5 |
| PK (driver) | MTT (h) — RSE | `Q81` · not captured | 0.71 | h | not captured | exact (not captured) | tab_2:row10:col6 |
| PK (driver) | MTT (h) — Range a (%) | `Q81` · not captured | 13 | h | not captured | exact (not captured) | tab_2:row10:col7 |
| variability | g — IIV (%) | `Q312` · not captured | 56 | not captured | not captured | llm (not captured) | tab_2:row11:col5 |
| variability | Proportional residual error (%) | `Q316` · not captured | 30.8 | not captured | not captured | exact (not captured) | tab_2:row14:col1 |
| variability | Proportional residual error (%) — Estimate | `Q316` · not captured | 0.14 | not captured | not captured | exact (not captured) | tab_2:row14:col2 |
| variability | Proportional residual error (%) — RSE | `Q316` · not captured | 26.5 | not captured | not captured | exact (not captured) | tab_2:row14:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.0 (0/28 fields) | 28 |

<details><summary>28 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | indisulam | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_ii | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q312]` | 56 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 69 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 30.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 0.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 26.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 32.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 0.09 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 31.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 93.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 0.13 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 80.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 19 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 0.71 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 13 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 230 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 0.12 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 78 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 0.68 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 138 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 0.07 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 134 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 0.38 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 10 | not captured | only_one_extracted |

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
<sub>← back to [capecitabine](drugs/drug_capecitabine/)</sub>
