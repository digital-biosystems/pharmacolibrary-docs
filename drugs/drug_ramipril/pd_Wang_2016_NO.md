<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;ramipril&quot;,&quot;href&quot;:&quot;drugs/drug_ramipril/&quot;},{&quot;label&quot;:&quot;Wang_2016 \u00b7 PD nitric oxide&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# nitric oxide — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## What this record describes

**As extracted:** Angiotensin II drives nitric oxide (in unknown): disease-progression model.

**Model:** No model was generated from this record.

- **paper:** `Wang_2016`
- **model family:** `disease_progression`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Wang H et al., Modeling Disease Progression: Angiotens…, Frontiers in physiology (2016)
  ·  DOI: [10.3389/fphys.2016.00555](https://doi.org/10.3389/fphys.2016.00555)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Kin_ANG (pg/mL/week) — Original dataset | `Q327` · not captured | 122.0 | pg/mL/week | not captured | llm (not captured) | T1:row2:col2 |
| PD (effect) | Kin_ANG (pg/mL/week) — Bootstrap dataset | `Q327` · not captured | 115.4 | pg/mL/week | not captured | llm (not captured) | T1:row2:col3 |
| PD (effect) | Kin_ANG (pg/mL/week) — Bootstrap dataset | `Q327` · not captured | 8.09 | pg/mL/week | not captured | llm (not captured) | T1:row2:col4 |
| PD (effect) | Kout_ANG (1/week) — Original dataset | `Q328` · not captured | 2.111 | Unit | not captured | llm (not captured) | T1:row3:col2 |
| PD (effect) | Kout_ANG (1/week) — Bootstrap dataset | `Q328` · not captured | 1.98 | Unit | not captured | llm (not captured) | T1:row3:col3 |
| PD (effect) | Kout_ANG (1/week) — Bootstrap dataset | `Q328` · not captured | 8.369 | Unit | not captured | llm (not captured) | T1:row3:col4 |
| PD (effect) | Kin_ADMA (umol/L/week) — Original dataset | `Q327` · not captured | 0.1841 | umol/L/week | not captured | llm (not captured) | T1:row4:col2 |
| PD (effect) | Kin_ADMA (umol/L/week) — Bootstrap dataset | `Q327` · not captured | 0.1855 | umol/L/week | not captured | llm (not captured) | T1:row4:col3 |
| PD (effect) | Kin_ADMA (umol/L/week) — Bootstrap dataset | `Q327` · not captured | 6.26 | umol/L/week | not captured | llm (not captured) | T1:row4:col4 |
| PD (effect) | Kout_ADMA (1/week) — Original dataset | `Q328` · not captured | 0.5854 | Unit | not captured | llm (not captured) | T1:row5:col2 |
| PD (effect) | Kout_ADMA (1/week) — Bootstrap dataset | `Q328` · not captured | 0.5881 | Unit | not captured | llm (not captured) | T1:row5:col3 |
| PD (effect) | Kout_ADMA (1/week) — Bootstrap dataset | `Q328` · not captured | 7.34 | Unit | not captured | llm (not captured) | T1:row5:col4 |
| PD (effect) | Kin_NO (umol/L/week) — Original dataset | `Q327` · not captured | 24.02 | umol/L/week | not captured | llm (not captured) | T1:row6:col2 |
| PD (effect) | Kin_NO (umol/L/week) — Bootstrap dataset | `Q327` · not captured | 25.71 | umol/L/week | not captured | llm (not captured) | T1:row6:col3 |
| PD (effect) | Kin_NO (umol/L/week) — Bootstrap dataset | `Q327` · not captured | 8.22 | umol/L/week | not captured | llm (not captured) | T1:row6:col4 |
| PD (effect) | Kout_NO (1/week) — Original dataset | `Q328` · not captured | 0.5721 | Unit | not captured | llm (not captured) | T1:row7:col2 |
| PD (effect) | Kout_NO (1/week) — Bootstrap dataset | `Q328` · not captured | 0.6033 | Unit | not captured | llm (not captured) | T1:row7:col3 |
| PD (effect) | Kout_NO (1/week) — Bootstrap dataset | `Q328` · not captured | 7.64 | Unit | not captured | llm (not captured) | T1:row7:col4 |
| PD (effect) | Kin_SBP (1/week) — Original dataset | `Q327` · not captured | 0.5075 | Unit | not captured | llm (not captured) | T1:row8:col2 |
| PD (effect) | Kin_SBP (1/week) — Bootstrap dataset | `Q327` · not captured | 0.5237 | Unit | not captured | llm (not captured) | T1:row8:col3 |
| PD (effect) | Kin_SBP (1/week) — Bootstrap dataset | `Q327` · not captured | 8.64 | Unit | not captured | llm (not captured) | T1:row8:col4 |
| PD (effect) | Kout_SBP (1/week) — Original dataset | `Q328` · not captured | 0.003520 | Unit | not captured | llm (not captured) | T1:row9:col2 |
| PD (effect) | Kout_SBP (1/week) — Bootstrap dataset | `Q328` · not captured | 0.003638 | Unit | not captured | llm (not captured) | T1:row9:col3 |
| PD (effect) | Kout_SBP (1/week) — Bootstrap dataset | `Q328` · not captured | 8.80 | Unit | not captured | llm (not captured) | T1:row9:col4 |
| PD (effect) | OX_DDAH (mL/week/pg) — Bootstrap dataset | `Q328` · not captured | 0.01671 | mL/week/pg | not captured | llm (not captured) | T1:row10:col3 |
| PD (effect) | OX_DDAH (mL/week/pg) — Bootstrap dataset | `Q328` · not captured | 8.58 | mL/week/pg | not captured | llm (not captured) | T1:row10:col4 |
| PD (effect) | IN_NOS (L/week/umolmol) — Original dataset | `Q328` · not captured | 0.7085 | L/week/umolmol | not captured | llm (not captured) | T1:row11:col2 |
| PD (effect) | IN_NOS (L/week/umolmol) — Bootstrap dataset | `Q327` · not captured | 0.7331 | L/week/umolmol | not captured | llm (not captured) | T1:row11:col3 |
| PD (effect) | IN_NOS (L/week/umolmol) — Bootstrap dataset | `Q327` · not captured | 7.30 | L/week/umolmol | not captured | llm (not captured) | T1:row11:col4 |
| PK (driver) | OX_NOS (mL/week/pg) — Bootstrap dataset | `Q22` · not captured | 1.08 | mL/week/pg | not captured | llm (not captured) | T1:row12:col4 |
| PD (effect) | ESSBP (1/mmHg) — Original dataset | `Q335` · not captured | 0.005028 | Unit | not captured | llm (not captured) | T1:row13:col2 |
| PD (effect) | ESSBP (1/mmHg) — Bootstrap dataset | `Q335` · not captured | 7.63 | Unit | not captured | llm (not captured) | T1:row13:col4 |
| PK (driver) | VCON (mL/week/pg) — Original dataset | `Q22` · not captured | 0.8718 | mL/week/pg | not captured | llm (not captured) | T1:row15:col2 |
| PK (driver) | VCON (mL/week/pg) — Bootstrap dataset | `Q61` · not captured | 0.8975 | mL/week/pg | not captured | llm (not captured) | T1:row15:col3 |
| PK (driver) | VCON (mL/week/pg) — Bootstrap dataset | `Q61` · not captured | 5.30 | mL/week/pg | not captured | llm (not captured) | T1:row15:col4 |
| PK (driver) | VDIL (L/week/umolmol) — Original dataset | `Q356` · not captured | 0.8802 | L/week/umolmol | not captured | llm (not captured) | T1:row16:col2 |
| PK (driver) | kt1(1/week) — Original dataset | `Q306` · not captured | 5.348 | Unit | not captured | llm (not captured) | T1:row18:col2 |
| PK (driver) | kt1(1/week) — Bootstrap dataset | `Q306` · not captured | 5.386 | Unit | not captured | llm (not captured) | T1:row18:col3 |
| PK (driver) | kt1(1/week) — Bootstrap dataset | `Q306` · not captured | 8.49 | Unit | not captured | llm (not captured) | T1:row18:col4 |
| PK (driver) | kt2(1/week) — Original dataset | `Q306` · not captured | 0.3388 | Unit | not captured | llm (not captured) | T1:row19:col2 |
| PK (driver) | kt2(1/week) — Bootstrap dataset | `Q306` · not captured | 0.3493 | Unit | not captured | llm (not captured) | T1:row19:col3 |
| PK (driver) | kt2(1/week) — Bootstrap dataset | `Q306` · not captured | 5.27 | Unit | not captured | llm (not captured) | T1:row19:col4 |
| PK (driver) | kt3(1/week) — Original dataset | `Q306` · not captured | 0.4441 | Unit | not captured | llm (not captured) | T1:row20:col2 |
| PK (driver) | kt3(1/week) — Bootstrap dataset | `Q306` · not captured | 0.471 | Unit | not captured | llm (not captured) | T1:row20:col3 |
| PK (driver) | kt3(1/week) — Bootstrap dataset | `Q306` · not captured | 9.94 | Unit | not captured | llm (not captured) | T1:row20:col4 |
| PK (driver) | kt4(1/week) — Original dataset | `Q306` · not captured | 0.03067 | Unit | not captured | llm (not captured) | T1:row21:col2 |
| PK (driver) | kt4(1/week) — Bootstrap dataset | `Q306` · not captured | 0.02937 | Unit | not captured | llm (not captured) | T1:row21:col3 |
| PK (driver) | kt4(1/week) — Bootstrap dataset | `Q306` · not captured | 23.5 | Unit | not captured | llm (not captured) | T1:row21:col4 |
| PK (driver) | kt5(1/week) — Original dataset | `Q306` · not captured | 3.825 | Unit | not captured | llm (not captured) | T1:row22:col2 |
| PK (driver) | kt5(1/week) — Bootstrap dataset | `Q306` · not captured | 3.7957 | Unit | not captured | llm (not captured) | T1:row22:col3 |
| PK (driver) | kt5(1/week) — Bootstrap dataset | `Q306` · not captured | 2.14 | Unit | not captured | llm (not captured) | T1:row22:col4 |
| model term | m — Bootstrap dataset | `Q900` · not captured | 1 | not captured | not captured | llm (not captured) | T1:row23:col3 |
| variability | o — Bootstrap dataset | `Q313` · not captured | 2 | not captured | not captured | llm (not captured) | T1:row25:col3 |
| PK (driver) | q — Bootstrap dataset | `Q30` · not captured | 1 | not captured | not captured | exact (not captured) | T1:row27:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Biomarker turnover model

This page models **nitric oxide** as an endogenous turnover response, separately from the drug's pharmacokinetics.

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
<sub>← back to [ramipril](drugs/drug_ramipril/)</sub>
