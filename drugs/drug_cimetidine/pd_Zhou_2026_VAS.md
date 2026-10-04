<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;cimetidine&quot;,&quot;href&quot;:&quot;drugs/drug_cimetidine/&quot;},{&quot;label&quot;:&quot;Zhou_2026 \u00b7 PD pain score&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# pain score — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Gabapentin drives pain score (in 0-10): delayed effect through an effect compartment.

**Model:** No model was generated from this record.

> Gabapentin plasma concentrations inhibit pain intensity (VAS 0–10) via a full-inhibition Imax model with an effect compartment (ke1 = 0.53 h⁻¹ into, ke2 = 1 h⁻¹ out of the effect compartment), with baseline pain E0 = 7.31 and IC50 = 263.11 ng/mL (IC50 was fixed to improve identifiability).
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Zhou_2026`
- **model family:** `effect_compartment`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Zhou L et al., Gabapentin CNS exposure and analgesic r…, Frontiers in pharmacology (2026)
  ·  DOI: [10.3389/fphar.2026.1760901](https://doi.org/10.3389/fphar.2026.1760901)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | tlag (h) — Final estimate (%RSE) | `Q83` · not captured | 0.34 | h | not captured | exact (not captured) | T1:row2:col1 |
| PK (driver) | ka (h-1) — Final estimate (%RSE) | `Q49` · not captured | 0.14 | h-1 | not captured | exact (not captured) | T1:row3:col1 |
| PK (driver) | CL/F (L/h) — Final estimate (%RSE) | `Q27` · not captured | 10.16 | L/h | not captured | exact (not captured) | T1:row4:col1 |
| PK (driver) | V1/F (L) — Final estimate (%RSE) | `Q290` · not captured | 18.16 | L | not captured | exact (not captured) | T1:row6:col1 |
| PK (driver) | Q (L/h) — Final estimate (%RSE) | `Q30` · not captured | 6.58 | L/h | not captured | exact (not captured) | T1:row7:col1 |
| PK (driver) | V2/F (L) — Final estimate (%RSE) | `Q82` · not captured | 357.67 | L | not captured | exact (not captured) | T1:row8:col1 |
| PK (driver) | ke1 (h-1) — Final estimate (%RSE) | `Q47` · not captured | 0.53 | h-1 | not captured | llm (not captured) | T1:row9:col1 |
| PD (effect) | E0 — Final estimate (%RSE) | `Q324` · not captured | 7.31 | not captured | not captured | exact (not captured) | T1:row11:col1 |
| PD (effect) | IC50 (ng/mL) — Final estimate (%RSE) | `Q322` · not captured | 263.11 | ng/mL | not captured | exact (not captured) | T1:row12:col1 |
| PK (driver) | ke2 (h-1) — Final estimate (%RSE) | `Q68` · not captured | 1 | h-1 | not captured | llm (not captured) | T1:row13:col1 |
| PD (effect) | Imax — Final estimate (%RSE) | `Q323` · not captured | 1 | not captured | not captured | exact (not captured) | T1:row14:col1 |
| PK (driver) | ωTlag — Final estimate (%RSE) | `Q83` · not captured | 0.52 | not captured | not captured | llm_confirmed (not captured) | T1:row16:col1 |
| PK (driver) | ωka — Final estimate (%RSE) | `Q49` · not captured | 0.15 | not captured | not captured | llm_confirmed (not captured) | T1:row17:col1 |
| PK (driver) | ωCL — Final estimate (%RSE) | `Q22` · not captured | 0.46 | not captured | not captured | llm_confirmed (not captured) | T1:row18:col1 |
| PK (driver) | ωV1 — Final estimate (%RSE) | `Q63` · not captured | 0.54 | not captured | not captured | llm_confirmed (not captured) | T1:row19:col1 |
| PD (effect) | ωE0 — Final estimate (%RSE) | `Q324` · not captured | 0.98 | not captured | not captured | llm_confirmed (not captured) | T1:row22:col1 |
| model term | Proportional (b) — Final estimate (%RSE) | `Q900` · not captured | 0.30 | b | not captured | llm (not captured) | T1:row27:col1 |

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
<sub>← back to [cimetidine](drugs/drug_cimetidine/)</sub>
