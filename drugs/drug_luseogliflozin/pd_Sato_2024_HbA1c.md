<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;luseogliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_luseogliflozin/&quot;},{&quot;label&quot;:&quot;Sato_2024 \u00b7 PD HbA1c&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Luseogliflozin_Samukawa2017_reference&quot;,&quot;label&quot;:&quot;Samukawa_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_luseogliflozin/Luseogliflozin_Samukawa2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# HbA1c — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Unknown drives HbA1c (in %): direct Emax (saturable) effect.

**Model:** No model was generated from this record.

> The paper describes a sigmoid Emax model where the UGE-normalized dose of luseogliflozin (and other SGLT2is) directly inhibits HbA1c, with an estimated maximum reduction (Emax) of 0.796%. The record lists an IC50 of 2.26 (units unknown) for luseogliflozin, but the paper does not specify the mechanism of action beyond SGLT2 inhibition or provide explicit IC50 values for the HbA1c response in the provided excerpts.
>
> <sub>in the paper's terms — summarised by qwen3.8:27b-mtp-q8_0 from the paper's text; not checked by a person</sub>

- **paper:** `Sato_2024`
- **model family:** `emax`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Sato H et al., Model-based meta-analysis of HbA1c redu…, Scientific reports (2024)
  ·  DOI: [10.1038/s41598-024-76256-6](https://doi.org/10.1038/s41598-024-76256-6)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | t1/2(h) — Canagliflozin | `Q57` · not captured | 10.2 | h | not captured | exact (not captured) | Tab1:row2:col3 |
| PK (driver) | t1/2(h) — Dapagliflozin | `Q57` · not captured | 12.1 | h | not captured | exact (not captured) | Tab1:row2:col4 |
| PK (driver) | t1/2(h) — Empagliflozin | `Q57` · not captured | 9.88 | h | not captured | exact (not captured) | Tab1:row2:col5 |
| PK (driver) | t1/2(h) — Ipragliflozin | `Q57` · not captured | 11.7 | h | not captured | exact (not captured) | Tab1:row2:col6 |
| PK (driver) | t1/2(h) — Luseogliflozin | `Q57` · not captured | 11.2 | h | not captured | exact (not captured) | Tab1:row2:col7 |
| PK (driver) | t1/2(h) — Tofogliflozin | `Q57` · not captured | 5.29 | h | not captured | exact (not captured) | Tab1:row2:col8 |
| PD (effect) | IC50 — Canagliflozin | `Q322` · not captured | 4.2 | unknown | not captured | exact (not captured) | Tab1:row3:col3 |
| PD (effect) | IC50 — Dapagliflozin | `Q322` · not captured | 1.12 | unknown | not captured | exact (not captured) | Tab1:row3:col4 |
| PD (effect) | IC50 — Empagliflozin | `Q322` · not captured | 1.3 | unknown | not captured | exact (not captured) | Tab1:row3:col5 |
| PD (effect) | IC50 — Ipragliflozin | `Q322` · not captured | 7.38 | unknown | not captured | exact (not captured) | Tab1:row3:col6 |
| PD (effect) | IC50 — Luseogliflozin | `Q322` · not captured | 2.26 | unknown | not captured | exact (not captured) | Tab1:row3:col7 |
| PD (effect) | IC50 — Tofogliflozin | `Q322` · not captured | 14.5 | unknown | not captured | exact (not captured) | Tab1:row3:col8 |
| PD (effect) | IC50 — Canagliflozin | `Q322` · not captured | 663 | unknown | not captured | exact (not captured) | Tab1:row4:col3 |
| PD (effect) | IC50 — Dapagliflozin | `Q322` · not captured | 1391 | unknown | not captured | exact (not captured) | Tab1:row4:col4 |
| PD (effect) | IC50 — Empagliflozin | `Q322` · not captured | 6278 | unknown | not captured | exact (not captured) | Tab1:row4:col5 |
| PD (effect) | IC50 — Ipragliflozin | `Q322` · not captured | 1880 | unknown | not captured | exact (not captured) | Tab1:row4:col6 |
| PD (effect) | IC50 — Luseogliflozin | `Q322` · not captured | 2900 | unknown | not captured | exact (not captured) | Tab1:row4:col7 |
| PD (effect) | IC50 — Tofogliflozin | `Q322` · not captured | 8200 | unknown | not captured | exact (not captured) | Tab1:row4:col8 |
| PD (effect) | Emax [%] | `Q320` · not captured | -0.796 | % | not captured | review_gapfill (not captured) | Sato_2024:review |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [luseogliflozin](drugs/drug_luseogliflozin/)</sub>
