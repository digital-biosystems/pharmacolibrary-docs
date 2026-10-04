<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;zuranolone&quot;,&quot;href&quot;:&quot;drugs/drug_zuranolone/&quot;},{&quot;label&quot;:&quot;Yang_2025 \u00b7 PD GABAA receptor modulation (EC50/Emax)&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# GABAA receptor modulation (EC50/Emax) — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from keyword rules on the title and abstract — no LLM answer yet).

## What this record describes

**As extracted:** S9 drives GABAA receptor modulation (EC50/Emax) (in unknown): direct Emax (saturable) effect.

**Model:** No model was generated from this record.

- **paper:** `Yang_2025`
- **model family:** `emax`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** stimulation/unknown

## Citation
Yang Y et al., Synthesis and Evaluation of a Novel Zur…, Molecules (Basel, Switzerla… (2025)
  ·  DOI: [10.3390/molecules30091918](https://doi.org/10.3390/molecules30091918)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| model term | S1 | `Q900` · not captured | 227 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row4:col2 |
| model term | S1 | `Q900` · not captured | 735 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row4:col3 |
| model term | S1 | `Q900` · not captured | 86 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row4:col4 |
| model term | S1 | `Q900` · not captured | 609 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row4:col5 |
| PD (effect) | S2 | `Q335` · not captured | 58 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row5:col2 |
| PD (effect) | S2 | `Q335` · not captured | 320 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row5:col3 |
| PD (effect) | S2 | `Q335` · not captured | 140 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row5:col4 |
| PD (effect) | S2 | `Q335` · not captured | 450 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row5:col5 |
| PD (effect) | S3 | `Q335` · not captured | 167 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row6:col2 |
| PD (effect) | S3 | `Q335` · not captured | 389 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row6:col3 |
| PD (effect) | S3 | `Q335` · not captured | 134 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row6:col4 |
| PD (effect) | S3 | `Q335` · not captured | 474 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row6:col5 |
| model term | S4 | `Q900` · not captured | 171 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row7:col2 |
| model term | S4 | `Q900` · not captured | 691 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row7:col3 |
| model term | S4 | `Q900` · not captured | 41 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row7:col4 |
| model term | S4 | `Q900` · not captured | 563 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row7:col5 |
| PD (effect) | S5 | `Q335` · not captured | 373 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row8:col2 |
| PD (effect) | S5 | `Q335` · not captured | 773 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row8:col3 |
| PD (effect) | S5 | `Q335` · not captured | 61 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row8:col4 |
| PD (effect) | S5 | `Q335` · not captured | 391 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row8:col5 |
| PD (effect) | S6 | `Q335` · not captured | 280 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row9:col2 |
| PD (effect) | S6 | `Q335` · not captured | 736 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row9:col3 |
| PD (effect) | S6 | `Q335` · not captured | 143 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row9:col4 |
| PD (effect) | S6 | `Q335` · not captured | 507 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row9:col5 |
| model term | S7 | `Q900` · not captured | 109 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row10:col2 |
| model term | S7 | `Q900` · not captured | 624 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row10:col3 |
| model term | S7 | `Q900` · not captured | 72 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row10:col4 |
| model term | S7 | `Q900` · not captured | 589 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row10:col5 |
| PD (effect) | S8 | `Q335` · not captured | 83 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row11:col2 |
| PD (effect) | S8 | `Q335` · not captured | 600 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row11:col3 |
| PD (effect) | S8 | `Q335` · not captured | 49 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row11:col4 |
| PD (effect) | S8 | `Q335` · not captured | 432 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row11:col5 |
| PD (effect) | S9 | `Q335` · not captured | 50 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row12:col2 |
| PD (effect) | S9 | `Q335` · not captured | 675 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row12:col3 |
| PD (effect) | S9 | `Q335` · not captured | 34 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row12:col4 |
| PD (effect) | S9 | `Q335` · not captured | 967 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row12:col5 |
| model term | S10 | `Q900` · not captured | 12.4 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row13:col2 |
| model term | S10 | `Q900` · not captured | 294 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row13:col3 |
| model term | S10 | `Q900` · not captured | 148 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row13:col4 |
| model term | S10 | `Q900` · not captured | 428 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row13:col5 |
| PD (effect) | S11 | `Q320` · not captured | 594 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row14:col2 |
| PD (effect) | S11 | `Q320` · not captured | 495 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row14:col3 |
| PD (effect) | S11 | `Q320` · not captured | 96 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row14:col4 |
| PD (effect) | S11 | `Q320` · not captured | 936 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row14:col5 |
| model term | S12 | `Q900` · not captured | 153 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row15:col2 |
| model term | S12 | `Q900` · not captured | 764 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row15:col3 |
| model term | S12 | `Q900` · not captured | 159 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row15:col4 |
| model term | S12 | `Q900` · not captured | 386 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row15:col5 |
| PD (effect) | S15 | `Q335` · not captured | 31 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row18:col2 |
| PD (effect) | S15 | `Q335` · not captured | 305 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row18:col3 |
| PD (effect) | S15 | `Q335` · not captured | 55 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row18:col4 |
| PD (effect) | S15 | `Q335` · not captured | 470 | not captured | not captured | llm (not captured) | molecules-30-01918-t002:row18:col5 |

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
<sub>← back to [zuranolone](drugs/drug_zuranolone/)</sub>
