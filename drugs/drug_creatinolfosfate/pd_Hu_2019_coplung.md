<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;creatinolfosfate&quot;,&quot;href&quot;:&quot;drugs/drug_creatinolfosfate/&quot;},{&quot;label&quot;:&quot;Hu_2019 \u00b7 PD lung coptisine&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# lung coptisine — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Coptisine drives lung coptisine (in unknown): indirect response — drug inhibits the production of lung coptisine.

**Model:** No model was generated from this record.

- **paper:** `Hu_2019`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Hu Y et al., Pharmacokinetic-Pharmacodynamic Modelin…, Scientific reports (2019)
  ·  DOI: [10.1038/s41598-018-38164-4](https://doi.org/10.1038/s41598-018-38164-4)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | V 1 (L/kg) — CV% | `Q63` · not captured | 10.29 | L/kg | not captured | space_fold (not captured) | Tab1:row1:col3 |
| PK (driver) | k10(h−1) — CV% | `Q47` · not captured | 9.99 | h−1 | not captured | exact (not captured) | Tab1:row2:col3 |
| PK (driver) | k12(h−1) — Estimate | `Q301` · not captured | 2.05 | h−1 | not captured | exact (not captured) | Tab1:row3:col2 |
| PK (driver) | k12(h−1) — CV% | `Q301` · not captured | 13.39 | h−1 | not captured | exact (not captured) | Tab1:row3:col3 |
| PK (driver) | K21(h−1) — CV% | `Q302` · not captured | 9.51 | h−1 | not captured | exact (not captured) | Tab1:row4:col3 |
| PK (driver) | k13(h−1) — CV% | `Q303` · not captured | 16.92 | h−1 | not captured | exact (not captured) | Tab1:row5:col3 |
| PK (driver) | k31(h−1) — Estimate | `Q304` · not captured | 3.77 | h−1 | not captured | exact (not captured) | Tab1:row6:col2 |
| PK (driver) | k31(h−1) — CV% | `Q304` · not captured | 17.16 | h−1 | not captured | exact (not captured) | Tab1:row6:col3 |
| PK (driver) | k0,0-0.33h(pg/(mL·h)) — Estimate | `Q307` · not captured | 645.73 | not captured | not captured | llm_confirmed (not captured) | Tab1:row7:col2 |
| PD (effect) | k0,0-0.33h(pg/(mL·h)) — CV% | `Q327` · not captured | 29.18 | not captured | not captured | llm_corrected (not captured) | Tab1:row7:col3 |
| PK (driver) | k0,0.33–1h(pg/(mL·h)) — Estimate | `Q307` · not captured | 5881.32 | not captured | not captured | llm_confirmed (not captured) | Tab1:row8:col2 |
| PD (effect) | k0,0.33–1h(pg/(mL·h)) — CV% | `Q327` · not captured | 31.11 | not captured | not captured | llm_corrected (not captured) | Tab1:row8:col3 |
| PD (effect) | InhibitCon(mL/ng) — CV% | `Q322` · not captured | 47.33 | mL/ng | not captured | llm (not captured) | Tab1:row9:col3 |
| PK (driver) | Vm(h−1) — CV% | `Q66` · not captured | 55.85 | h−1 | not captured | special_case (not captured) | Tab1:row10:col3 |
| PK (driver) | km(pg/mL) — CV% | `Q1` · not captured | 61.92 | pg/mL | not captured | exact (not captured) | Tab1:row11:col3 |
| PD (effect) | kTNFαpl(h−1) — CV% | `Q328` · not captured | 177.12 | h−1 | not captured | llm (not captured) | Tab1:row12:col3 |
| PD (effect) | koutTNFα(h−1) — CV% | `Q328` · not captured | 7.09 | h−1 | not captured | llm (not captured) | Tab1:row13:col3 |
| PD (effect) | kiNOSmRNA(h−1) — CV% | `Q328` · not captured | 10.85 | h−1 | not captured | llm (not captured) | Tab1:row14:col3 |
| PD (effect) | koutiNOSmRNA(h−1) — Estimate | `Q328` · not captured | 2.36 | h−1 | not captured | llm (not captured) | Tab1:row15:col2 |
| PD (effect) | koutiNOSmRNA(h−1) — CV% | `Q328` · not captured | 7.75 | h−1 | not captured | llm (not captured) | Tab1:row15:col3 |
| PD (effect) | kiNOS(h−1) — CV% | `Q328` · not captured | 10.33 | h−1 | not captured | llm (not captured) | Tab1:row16:col3 |
| PD (effect) | k outiNOS (h −1 ) — Estimate | `Q328` · not captured | 3.72 | h −1 | not captured | llm (not captured) | Tab1:row17:col2 |
| PD (effect) | k outiNOS (h −1 ) — CV% | `Q328` · not captured | 10.06 | h −1 | not captured | llm (not captured) | Tab1:row17:col3 |
| PD (effect) | k iNOSlp (h −1 ) — Estimate | `Q327` · not captured | 23.41 | h −1 | not captured | llm (not captured) | Tab1:row18:col2 |
| PD (effect) | k iNOSlp (h −1 ) — CV% | `Q327` · not captured | 19.96 | h −1 | not captured | llm (not captured) | Tab1:row18:col3 |
| PD (effect) | k outiNOSp (h −1 ) — Estimate | `Q328` · not captured | 1.92 | h −1 | not captured | llm (not captured) | Tab1:row19:col2 |
| PD (effect) | k outiNOSp (h −1 ) — CV% | `Q328` · not captured | 6.25 | h −1 | not captured | llm (not captured) | Tab1:row19:col3 |
| PD (effect) | k iNOSNO (h −1 ) — Estimate | `Q327` · not captured | 772.17 | h −1 | not captured | llm (not captured) | Tab1:row20:col2 |
| PD (effect) | k iNOSNO (h −1 ) — CV% | `Q327` · not captured | 21.58 | h −1 | not captured | llm (not captured) | Tab1:row20:col3 |
| model term | Δ — Estimate | `Q900` · not captured | 1.23 | not captured | not captured | llm (not captured) | Tab1:row21:col2 |
| variability | Δ — CV% | `Q316` · not captured | 29.71 | not captured | not captured | llm (not captured) | Tab1:row21:col3 |
| PD (effect) | k inNO (h −1 ) — Estimate | `Q328` · not captured | 354.68 | h −1 | not captured | llm (not captured) | Tab1:row22:col2 |
| PD (effect) | k inNO (h −1 ) — CV% | `Q327` · not captured | 63.97 | h −1 | not captured | llm (not captured) | Tab1:row22:col3 |
| PD (effect) | k outNO (h −1 ) — Estimate | `Q328` · not captured | 3.46 | h −1 | not captured | llm (not captured) | Tab1:row23:col2 |
| PD (effect) | k outNO (h −1 ) — CV% | `Q328` · not captured | 11.13 | h −1 | not captured | llm (not captured) | Tab1:row23:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Biomarker turnover model

This page models **lung coptisine** as an endogenous turnover response, separately from the drug's pharmacokinetics.

- **driver tier:** `none`
- **turnover quantities linked:** none
- **effect blocks:** 0
- **turnover review:** <span class="pk-badge pk-badge--orange">needs review</span>
  - `B4_steady_state` — skipped: production and loss/clearance parameters are incomplete
  - `B4_effect_link` — skipped: no per-perturbing-drug effect block is linked
  - `B4_driver_link` — skipped: no driver PK source is available


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
<sub>← back to [creatinolfosfate](drugs/drug_creatinolfosfate/)</sub>
