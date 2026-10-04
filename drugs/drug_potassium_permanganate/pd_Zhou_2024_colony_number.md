<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;potassium permanganate&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_permanganate/&quot;},{&quot;label&quot;:&quot;Zhou_2024 \u00b7 PD colony number&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# colony number — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from keyword rules on the title and abstract — no LLM answer yet).

## What this record describes

**As extracted:** CDDO-Me (measured concentrations) drives colony number (in count): direct Emax (saturable) effect.

**Model:** No model was generated from this record.

- **paper:** `Zhou_2024`
- **model family:** `emax`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Zhou R et al., Machine learning-aided discovery of T79…, Cell communication and sign… (2024)
  ·  DOI: [10.1186/s12964-024-01954-7](https://doi.org/10.1186/s12964-024-01954-7)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | CSN15660 — LogHERG | `Q322` · not captured | -0.06 | µM | not captured | llm (not captured) | Tab2:row1:col8 |
| — | CSN15660 — Docking score | `Q100` · not captured | -8.9 | not captured | not captured | llm (not captured) | Tab2:row1:col12 |
| PD (effect) | CSN12828 — LogHERG | `Q322` · not captured | -0.91 | µM | not captured | llm (not captured) | Tab2:row2:col8 |
| — | CSN12828 — Docking score | `Q100` · not captured | -8.7 | not captured | not captured | llm (not captured) | Tab2:row2:col12 |
| PD (effect) | CSN21003 — LogHERG | `Q322` · not captured | -2.25 | µM | not captured | llm (not captured) | Tab2:row3:col8 |
| — | CSN21003 — Docking score | `Q100` · not captured | -8.5 | not captured | not captured | llm (not captured) | Tab2:row3:col12 |
| PD (effect) | FDB001822 — LogHERG | `Q322` · not captured | -0.29 | µM | not captured | llm (not captured) | Tab2:row4:col8 |
| — | FDB001822 — Docking score | `Q100` · not captured | -8.4 | not captured | not captured | llm (not captured) | Tab2:row4:col12 |
| PD (effect) | FDB004435 — LogHERG | `Q322` · not captured | -0.91 | µM | not captured | llm (not captured) | Tab2:row5:col8 |
| — | FDB004435 — Docking score | `Q100` · not captured | -8.2 | not captured | not captured | llm (not captured) | Tab2:row5:col12 |
| PD (effect) | FDB000488 — LogHERG | `Q322` · not captured | -1.66 | µM | not captured | llm (not captured) | Tab2:row6:col8 |
| — | FDB000488 — Docking score | `Q100` · not captured | -8.2 | not captured | not captured | llm (not captured) | Tab2:row6:col12 |
| PD (effect) | FDB022684 — LogHERG | `Q322` · not captured | -1.10 | µM | not captured | llm (not captured) | Tab2:row7:col8 |
| — | FDB022684 — Docking score | `Q100` · not captured | -7.7 | not captured | not captured | llm (not captured) | Tab2:row7:col12 |
| PD (effect) | FDB007234 — LogHERG | `Q322` · not captured | -1.01 | µM | not captured | llm (not captured) | Tab2:row8:col8 |
| — | FDB007234 — Docking score | `Q100` · not captured | -7.4 | not captured | not captured | llm (not captured) | Tab2:row8:col12 |
| PD (effect) | FDB007717 — LogHERG | `Q322` · not captured | -1.01 | µM | not captured | llm (not captured) | Tab2:row9:col8 |
| — | FDB007717 — Docking score | `Q100` · not captured | -7.4 | not captured | not captured | llm (not captured) | Tab2:row9:col12 |
| PD (effect) | FDB007794 — LogHERG | `Q322` · not captured | -0.90 | µM | not captured | llm (not captured) | Tab2:row10:col8 |
| — | FDB007794 — Docking score | `Q100` · not captured | -7.3 | not captured | not captured | llm (not captured) | Tab2:row10:col12 |
| PD (effect) | FDB013845 — LogHERG | `Q322` · not captured | -0.90 | µM | not captured | llm (not captured) | Tab2:row11:col8 |
| — | FDB013845 — Docking score | `Q100` · not captured | -7.3 | not captured | not captured | llm (not captured) | Tab2:row11:col12 |
| PD (effect) | FDB019265 — LogHERG | `Q322` · not captured | -1.44 | µM | not captured | llm (not captured) | Tab2:row12:col8 |
| — | FDB019265 — Docking score | `Q100` · not captured | -7.3 | not captured | not captured | llm (not captured) | Tab2:row12:col12 |
| PD (effect) | FDB097411 — LogHERG | `Q322` · not captured | -0.78 | µM | not captured | llm (not captured) | Tab2:row13:col8 |
| — | FDB097411 — Docking score | `Q100` · not captured | -7.3 | not captured | not captured | llm (not captured) | Tab2:row13:col12 |
| PD (effect) | FDB001956 — LogHERG | `Q322` · not captured | -1.39 | µM | not captured | llm (not captured) | Tab2:row14:col8 |
| — | FDB001956 — Docking score | `Q100` · not captured | -7.3 | not captured | not captured | llm (not captured) | Tab2:row14:col12 |
| PD (effect) | FDB022983 — LogHERG | `Q322` · not captured | -1.36 | µM | not captured | llm (not captured) | Tab2:row15:col8 |
| — | FDB022983 — Docking score | `Q100` · not captured | -7.3 | not captured | not captured | llm (not captured) | Tab2:row15:col12 |
| PD (effect) | FDB014737 — LogHERG | `Q322` · not captured | -1.41 | µM | not captured | llm (not captured) | Tab2:row16:col8 |
| — | FDB014737 — Docking score | `Q100` · not captured | -7.2 | not captured | not captured | llm (not captured) | Tab2:row16:col12 |
| PD (effect) | FDB009193 — LogHERG | `Q322` · not captured | -0.88 | µM | not captured | llm (not captured) | Tab2:row17:col8 |
| — | FDB009193 — Docking score | `Q100` · not captured | -7.2 | not captured | not captured | llm (not captured) | Tab2:row17:col12 |
| PD (effect) | FDB005326 — LogHERG | `Q322` · not captured | -0.52 | µM | not captured | llm (not captured) | Tab2:row18:col8 |
| — | FDB005326 — Docking score | `Q100` · not captured | -7.1 | not captured | not captured | llm (not captured) | Tab2:row18:col12 |
| PD (effect) | FDB021371 — LogHERG | `Q322` · not captured | -2.10 | µM | not captured | llm (not captured) | Tab2:row19:col8 |
| — | FDB021371 — Docking score | `Q100` · not captured | -7.1 | not captured | not captured | llm (not captured) | Tab2:row19:col12 |
| PD (effect) | FDB014954 — LogHERG | `Q322` · not captured | -0.66 | µM | not captured | llm (not captured) | Tab2:row20:col8 |
| — | FDB014954 — Docking score | `Q100` · not captured | -7.1 | not captured | not captured | llm (not captured) | Tab2:row20:col12 |
| PD (effect) | FDB016956 — LogHERG | `Q322` · not captured | -1.10 | µM | not captured | llm (not captured) | Tab2:row21:col8 |
| — | FDB016956 — Docking score | `Q100` · not captured | -7.1 | not captured | not captured | llm (not captured) | Tab2:row21:col12 |
| PD (effect) | FDB029178 — LogHERG | `Q322` · not captured | -1.17 | µM | not captured | llm (not captured) | Tab2:row22:col8 |
| — | FDB029178 — Docking score | `Q100` · not captured | -7.1 | not captured | not captured | llm (not captured) | Tab2:row22:col12 |
| PD (effect) | FDB013625 — LogHERG | `Q322` · not captured | -1.25 | µM | not captured | llm (not captured) | Tab2:row23:col8 |
| — | FDB013625 — Docking score | `Q100` · not captured | -7 | not captured | not captured | llm (not captured) | Tab2:row23:col12 |
| PD (effect) | FDB021227 — LogHERG | `Q322` · not captured | -1.53 | µM | not captured | llm (not captured) | Tab2:row24:col8 |
| — | FDB021227 — Docking score | `Q100` · not captured | -7 | not captured | not captured | llm (not captured) | Tab2:row24:col12 |
| PD (effect) | FDB014444 — LogHERG | `Q322` · not captured | -1.56 | µM | not captured | llm (not captured) | Tab2:row25:col8 |
| — | FDB014444 — Docking score | `Q100` · not captured | -7 | not captured | not captured | llm (not captured) | Tab2:row25:col12 |
| PD (effect) | FDB016223 — LogHERG | `Q322` · not captured | -0.96 | µM | not captured | llm (not captured) | Tab2:row26:col8 |
| — | FDB016223 — Docking score | `Q100` · not captured | -7 | not captured | not captured | llm (not captured) | Tab2:row26:col12 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
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
<sub>← back to [potassium permanganate](drugs/drug_potassium_permanganate/)</sub>
