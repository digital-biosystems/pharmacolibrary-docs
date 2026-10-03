<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;lixisenatide&quot;,&quot;href&quot;:&quot;drugs/drug_lixisenatide/&quot;},{&quot;label&quot;:&quot;Takayanagi_2018 \u00b7 PD HbA1c reduction&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Franken_2026_MAP&quot;,&quot;label&quot;:&quot;Franken_2026 \u00b7 MAP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_lixisenatide/pd_Franken_2026_MAP.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Goeyvaerts_2026_DENV_3_RNA&quot;,&quot;label&quot;:&quot;Goeyvaerts_2026 \u00b7 DENV-3 RNA&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_lixisenatide/pd_Goeyvaerts_2026_DENV_3_RNA.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Takayanagi_2018_HbA1c&quot;,&quot;label&quot;:&quot;Takayanagi_2018 \u00b7 HbA1c&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_lixisenatide/pd_Takayanagi_2018_HbA1c.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# HbA1c reduction — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.12). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** GLP-1 receptor occupancy (Φ) drives HbA1c reduction (in %): direct Emax (saturable) effect.

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> Lixisenatide (GLP-1 receptor agonist) reduces HbA1c via GLP-1 receptor binding; efficacy was analyzed by receptor occupancy (Φ), with agonists acting at low occupancy (1.1–10.7% at usual dose; lixisenatide 20 µg Cmax 1.1 pM, fu 0.73). The Emax for HbA1c reduction of GLP-1 receptor agonists was 2.01%, and the paper does not state a specific Emax/IC50/kin/kout/ke0 model for lixisenatide itself.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Takayanagi_2018`
- **model family:** `emax`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** stimulation/additive

## Citation
Takayanagi R et al., Evaluation of Drug Efficacy of GLP-1 Re…, Biological & pharmaceutical… (2018)
  ·  DOI: [10.1248/bpb.b17-00237](https://doi.org/10.1248/bpb.b17-00237)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Emax | `Q320` · not captured | 2.01 | % | not captured | llm (not captured) | Takayanagi_2018:pdv3 |
| PD (effect) | ΦE50 | `Q321` · not captured | 1.62 | % | not captured | llm (not captured) | Takayanagi_2018:pdv3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Lixisenatide_Takayanagi2018_PD_hba1c` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | 2.01 % | 0.0201 1 |
| EC50 | 1.62 % | 0.0162 1 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = 0.01005, `at_inf` = 0.0201

Deviations:

- `defaulted_parameters` — E0, gamma
- `pd_binding_off_target_driver` — driver compound 'GLP-1 receptor occupancy (Φ)' is not 'lixisenatide' nor one of its metabolites — the curve belongs to that compound's exposure (S12)


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.12 (3/25 fields) | 22 |

<details><summary>22 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | GLP-1 | unknown | mismatch |
| `gpt-oss:120b` | `effect_direction` | stimulation | unknown | mismatch |
| `gpt-oss:120b` | `parameters[Q32]` | not captured | 12.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | not captured | 28.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | not captured | 68.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | not captured | 1.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 12.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 1.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | not captured | 10.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | not captured | 900 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 0.81 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 0.95 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1.34 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1.52 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q46]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q46]` | not captured | 0.73 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q46]` | 0.73 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q87]` | not captured | 1.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q87]` | not captured | 1.76 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q87]` | not captured | 3.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q87]` | not captured | 7.1 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_lixisenatide/Lixisenatide_Takayanagi2018_PD_hba1c/Lixisenatide_Takayanagi2018_PD_hba1c_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_lixisenatide/Lixisenatide_Takayanagi2018_PD_hba1c/Lixisenatide_Takayanagi2018_PD_hba1c_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `Lixisenatide_Takayanagi2018_PD_hba1c_params.json` · controls `Lixisenatide_Takayanagi2018_PD_hba1c_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [lixisenatide](drugs/drug_lixisenatide/)</sub>
