<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;trypsin&quot;,&quot;href&quot;:&quot;drugs/drug_trypsin/&quot;},{&quot;label&quot;:&quot;Yadav_2022 \u00b7 PD name&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Ternary complex (Complex3) (measured concentrations) drives name (in cells/µL): indirect response — drug inhibits the loss of name.

**Model:** No model was generated from this record.

> Ternary complex (Complex3) concentration (nM) from anti-cyCD79b/CD3 TDB drives depletion of peripheral CD20+ B lymphocyte counts (cells/µL) via an indirect response model in which the complex stimulates the loss/elimination rate of B cells, with Emax 221 (% maximum increase in elimination rate) and EC50 1.20 nM; B cell turnover was fixed at kout = 0.0126 1/day (half-life 55 days), with baseline given by kin/kout.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Yadav_2022`
- **model family:** `indirect_response_ii`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** stimulation/unknown

## Citation
Yadav R et al., Nonclinical Pharmacokinetics and Pharma…, Pharmaceutics (2022)
  ·  DOI: [10.3390/pharmaceutics14050970](https://doi.org/10.3390/pharmaceutics14050970)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | CL — Estimate (%RSE) | `Q22` · not captured | 20.0 | not captured | not captured | exact (not captured) | pharmaceutics-14-00970-t006:row1:col3 |
| PK (driver) | CLd — Estimate (%RSE) | `Q30` · not captured | 22.0 | not captured | not captured | exact (not captured) | pharmaceutics-14-00970-t006:row2:col3 |
| PK (driver) | V1 — Estimate (%RSE) | `Q63` · not captured | 51.0 | not captured | not captured | exact (not captured) | pharmaceutics-14-00970-t006:row3:col3 |
| PD (effect) | kon_CD3 — Estimate (%RSE) | `Q329` · not captured | 4.45 | not captured | not captured | llm (not captured) | pharmaceutics-14-00970-t006:row5:col3 |
| PD (effect) | Kd_CD3 — Estimate (%RSE) | `Q331` · not captured | 12.8 | nM | not captured | llm (not captured) | pharmaceutics-14-00970-t006:row6:col3 |
| PD (effect) | kon_CD79b — Estimate (%RSE) | `Q329` · not captured | 2.96 | not captured | not captured | llm (not captured) | pharmaceutics-14-00970-t006:row7:col3 |
| PD (effect) | Kd_CD79b — Estimate (%RSE) | `Q331` · not captured | 1.0 | nM | not captured | llm (not captured) | pharmaceutics-14-00970-t006:row8:col3 |
| PD (effect) | ln(2)/kint_complex1 — Estimate (%RSE) | `Q334` · not captured | 346.5 | not captured | not captured | llm (not captured) | pharmaceutics-14-00970-t006:row11:col3 |
| PD (effect) | ln(2)/kint_complex2 — Estimate (%RSE) | `Q334` · not captured | 7.79 | not captured | not captured | llm (not captured) | pharmaceutics-14-00970-t006:row12:col3 |
| PD (effect) | ln(2)/kint_complex3 — Estimate (%RSE) | `Q334` · not captured | 5.77 | not captured | not captured | llm (not captured) | pharmaceutics-14-00970-t006:row13:col3 |
| PK (driver) | ka — Estimate (%RSE) | `Q49` · not captured | 0.31 | not captured | not captured | exact (not captured) | pharmaceutics-14-00970-t006:row14:col3 |
| PK (driver) | F — Estimate (%RSE) | `Q40` · not captured | 0.84 | not captured | not captured | exact (not captured) | pharmaceutics-14-00970-t006:row15:col3 |
| PD (effect) | Emax — Estimate (%RSE) | `Q320` · not captured | 221 | not captured | not captured | exact (not captured) | pharmaceutics-14-00970-t006:row16:col3 |
| PD (effect) | EC50 — Estimate (%RSE) | `Q321` · not captured | 1.20 | nM | not captured | exact (not captured) | pharmaceutics-14-00970-t006:row17:col3 |
| PD (effect) | ln(2)/kout_B-lymphocyte — Estimate (%RSE) | `Q328` · not captured | 55 | not captured | not captured | llm (not captured) | pharmaceutics-14-00970-t006:row19:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/24 fields) | 24 |

<details><summary>24 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | ternary complex (Complex3) | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | stimulation | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_ii | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q22]` | 20.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 22.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 221 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.20 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 55 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | 4.45 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | 2.96 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | 12.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | 1.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q334]` | 346.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q334]` | 7.79 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q334]` | 5.77 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 0.84 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 0.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 51.0 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
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
<sub>← back to [trypsin](drugs/drug_trypsin/)</sub>
