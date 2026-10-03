<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;reserpine&quot;,&quot;href&quot;:&quot;drugs/drug_reserpine/&quot;},{&quot;label&quot;:&quot;Alfosea-Cuadrado_2024 \u00b7 PD monoamine in prefrontal cortex&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# monoamine in prefrontal cortex — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Reserpine drives monoamine in prefrontal cortex: indirect response — drug inhibits the loss of monoamine in prefrontal cortex.

**Model:** No model was generated from this record.

- **paper:** `Alfosea-Cuadrado_2024`
- **model family:** `indirect_response_ii`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** stimulation/proportional

## Citation
Alfosea-Cuadrado GM et al., Population Pharmacokinetic-Pharmacodyna…, Pharmaceutics (2024)
  ·  DOI: [10.3390/pharmaceutics16081101](https://doi.org/10.3390/pharmaceutics16081101)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | ka1 (h−1/kg) — Population PKPD Model Estimates | `Q49` · not captured | 19.14 | h−1/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row3:col1 |
| PK (driver) | ka1 (h−1/kg) — Population PKPD Model Estimates | `Q49` · not captured | 226 | h−1/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row3:col3 |
| PK (driver) | ka1 (h−1/kg) — Population PKPD Model Estimates | `Q49` · not captured | 28 | h−1/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row3:col4 |
| PK (driver) | ka1 (h−1/kg) — Bootstrap Results | `Q49` · not captured | 19.14 | h−1/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row3:col5 |
| PK (driver) | ka2 (mg/h/kg) — Population PKPD Model Estimates | `Q49` · not captured | 45.43 | mg/h/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row4:col1 |
| PK (driver) | ka2 (mg/h/kg) — Population PKPD Model Estimates | `Q49` · not captured | 12 | mg/h/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row4:col2 |
| PK (driver) | ka2 (mg/h/kg) — Population PKPD Model Estimates | `Q49` · not captured | 32 | mg/h/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row4:col3 |
| PK (driver) | ka2 (mg/h/kg) — Bootstrap Results | `Q49` · not captured | 30 | mg/h/kg | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row4:col6 |
| PK (driver) | F1 — Population PKPD Model Estimates | `Q40` · not captured | 0.95 | not captured | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row5:col1 |
| PK (driver) | F1 — Population PKPD Model Estimates | `Q40` · not captured | 3 | not captured | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row5:col2 |
| PK (driver) | F1 — Population PKPD Model Estimates | `Q40` · not captured | 179 | not captured | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row5:col3 |
| PK (driver) | F1 — Population PKPD Model Estimates | `Q40` · not captured | 22 | not captured | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row5:col4 |
| PK (driver) | V (mL/kg) — Population PKPD Model Estimates | `Q61` · not captured | 1.3 | mL/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row6:col1 |
| PK (driver) | V (mL/kg) — Population PKPD Model Estimates | `Q61` · not captured | 21 | mL/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row6:col2 |
| PK (driver) | V (mL/kg) — Population PKPD Model Estimates | `Q61` · not captured | 59 | mL/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row6:col3 |
| PK (driver) | V (mL/kg) — Population PKPD Model Estimates | `Q61` · not captured | 30 | mL/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row6:col4 |
| PK (driver) | CL (mL/h/kg) — Population PKPD Model Estimates | `Q22` · not captured | 11 | mL/h/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row7:col2 |
| PK (driver) | CL (mL/h/kg) — Population PKPD Model Estimates | `Q22` · not captured | 37 | mL/h/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row7:col3 |
| PK (driver) | CL (mL/h/kg) — Population PKPD Model Estimates | `Q22` · not captured | 25 | mL/h/kg | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row7:col4 |
| PD (effect) | kin (mg/h) AMY — Population PKPD Model Estimates | `Q327` · not captured | 6.97 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row8:col1 |
| PD (effect) | kin (mg/h) AMY — Population PKPD Model Estimates | `Q327` · not captured | 18 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row8:col2 |
| PD (effect) | kin (mg/h) AMY — Population PKPD Model Estimates | `Q327` · not captured | 97 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row8:col3 |
| PD (effect) | kin (mg/h) AMY — Population PKPD Model Estimates | `Q327` · not captured | 9 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row8:col4 |
| PD (effect) | kin (mg/h) AMY — Bootstrap Results | `Q327` · not captured | 7.04 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row8:col5 |
| PD (effect) | kin (mg/h) PFC — Population PKPD Model Estimates | `Q327` · not captured | 2.10 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row9:col1 |
| PD (effect) | kin (mg/h) PFC — Population PKPD Model Estimates | `Q327` · not captured | 18 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row9:col2 |
| PD (effect) | kin (mg/h) PFC — Bootstrap Results | `Q327` · not captured | 2.16 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row9:col5 |
| PD (effect) | kin (mg/h) SC — Population PKPD Model Estimates | `Q327` · not captured | 1.78 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row10:col1 |
| PD (effect) | kin (mg/h) SC — Population PKPD Model Estimates | `Q327` · not captured | 19 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row10:col2 |
| PD (effect) | kin (mg/h) SC — Bootstrap Results | `Q327` · not captured | 1.76 | not captured | not captured | llm_confirmed (not captured) | pharmaceutics-16-01101-t002:row10:col5 |
| model term | kp (h−1) — Population PKPD Model Estimates | `Q410` · not captured | 14 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row11:col2 |
| model term | kp (h−1) — Population PKPD Model Estimates | `Q410` · not captured | 29 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row11:col3 |
| model term | kp (h−1) — Population PKPD Model Estimates | `Q410` · not captured | 37 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row11:col4 |
| PD (effect) | kout (h−1) — Population PKPD Model Estimates | `Q328` · not captured | 11 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row12:col2 |
| PD (effect) | kout (h−1) — Population PKPD Model Estimates | `Q328` · not captured | 22 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row12:col3 |
| PD (effect) | kout (h−1) — Population PKPD Model Estimates | `Q328` · not captured | 24 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row12:col4 |
| PD (effect) | SLP1 (h) — Population PKPD Model Estimates | `Q335` · not captured | 47 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row13:col2 |
| PD (effect) | SLP1 (h) — Population PKPD Model Estimates | `Q335` · not captured | 358 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row13:col3 |
| PD (effect) | SLP1 (h) — Population PKPD Model Estimates | `Q335` · not captured | 11 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row13:col4 |
| PK (driver) | k0 (h−1) — Population PKPD Model Estimates | `Q307` · not captured | 6 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row14:col2 |
| PK (driver) | k0 (h−1) — Population PKPD Model Estimates | `Q307` · not captured | 9 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row14:col3 |
| PK (driver) | k0 (h−1) — Population PKPD Model Estimates | `Q307` · not captured | 67 | h−1 | not captured | exact (not captured) | pharmaceutics-16-01101-t002:row14:col4 |
| PD (effect) | SLP2 (h) — Population PKPD Model Estimates | `Q335` · not captured | 1.25 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row15:col1 |
| PD (effect) | SLP2 (h) — Population PKPD Model Estimates | `Q335` · not captured | 20 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row15:col2 |
| PD (effect) | SLP2 (h) — Population PKPD Model Estimates | `Q335` · not captured | 74 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row15:col3 |
| PD (effect) | SLP2 (h) — Population PKPD Model Estimates | `Q335` · not captured | 18 | h | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row15:col4 |
| PK (driver) | PK (%) — Population PKPD Model Estimates | `Q44` · not captured | 54 | not captured | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row17:col1 |
| PK (driver) | PK (%) — Population PKPD Model Estimates | `Q44` · not captured | 9 | not captured | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row17:col2 |
| PK (driver) | PD (%) — Population PKPD Model Estimates | `Q38` · not captured | 71 | not captured | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row18:col1 |
| PK (driver) | PD (%) — Population PKPD Model Estimates | `Q38` · not captured | 9 | not captured | not captured | llm (not captured) | pharmaceutics-16-01101-t002:row18:col2 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Biomarker turnover model

This page models **monoamine in prefrontal cortex** as an endogenous turnover response, separately from the drug's pharmacokinetics.

- **driver tier:** `none`
- **turnover quantities linked:** loss_rate, production_rate
- **effect blocks:** 0
- **turnover review:** <span class="pk-badge pk-badge--orange">needs review</span>
  - `B4_steady_state` — skipped: paper does not report an independent baseline
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
<sub>← back to [reserpine](drugs/drug_reserpine/)</sub>
