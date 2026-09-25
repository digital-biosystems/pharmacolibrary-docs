<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.044). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Gaurav_2026`
- **model family:** `unknown`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** stimulation/unknown

## Citation
Gaurav M; Barcomb H; Maxwell KF; Kandala B; Chatterjee MS et al. (2026). Clinical and translational science 19
  ·  DOI: [10.1111/cts.70658](https://doi.org/10.1111/cts.70658)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Vc (L) — Population parameter estimate | `Q63` · not captured | 3.08 | L | not captured | exact (not captured) | cts70658-tbl-0001:row3:col1 |
| Vc (L) — Stochastic approximation | `Q63` · not captured | 0.0665 | L | not captured | exact (not captured) | cts70658-tbl-0001:row3:col2 |
| Vc (L) — Stochastic approximation | `Q63` · not captured | 2.16 | L | not captured | exact (not captured) | cts70658-tbl-0001:row3:col3 |
| Vc (L) — Stochastic approximation | `Q63` · not captured | 2.95 | L | not captured | exact (not captured) | cts70658-tbl-0001:row3:col4 |
| Vc (L) — Stochastic approximation | `Q63` · not captured | 3.21 | L | not captured | exact (not captured) | cts70658-tbl-0001:row3:col5 |
| Vc (L) — Conditional mode | `Q63` · not captured | 24.4 | L | not captured | exact (not captured) | cts70658-tbl-0001:row3:col6 |
| Vmax (μg/h) — Population parameter estimate | `Q66` · not captured | 13.6 | μg/h | not captured | special_case (not captured) | cts70658-tbl-0001:row11:col1 |
| Vmax (μg/h) — Stochastic approximation | `Q66` · not captured | 1.64 | μg/h | not captured | special_case (not captured) | cts70658-tbl-0001:row11:col2 |
| Vmax (μg/h) — Stochastic approximation | `Q66` · not captured | 12.1 | μg/h | not captured | special_case (not captured) | cts70658-tbl-0001:row11:col3 |
| Vmax (μg/h) — Stochastic approximation | `Q66` · not captured | 10.7 | μg/h | not captured | special_case (not captured) | cts70658-tbl-0001:row11:col4 |
| Vmax (μg/h) — Stochastic approximation | `Q66` · not captured | 17.1 | μg/h | not captured | special_case (not captured) | cts70658-tbl-0001:row11:col5 |
| Km (μg/L) — Population parameter estimate | `Q1` · not captured | 49.5 | μg/L | not captured | exact (not captured) | cts70658-tbl-0001:row12:col1 |
| Km (μg/L) — Stochastic approximation | `Q1` · not captured | 32.4 | μg/L | not captured | exact (not captured) | cts70658-tbl-0001:row12:col2 |
| Km (μg/L) — Stochastic approximation | `Q1` · not captured | 65.4 | μg/L | not captured | exact (not captured) | cts70658-tbl-0001:row12:col3 |
| Km (μg/L) — Stochastic approximation | `Q1` · not captured | 17.5 | μg/L | not captured | exact (not captured) | cts70658-tbl-0001:row12:col4 |
| Km (μg/L) — Stochastic approximation | `Q1` · not captured | 140 | μg/L | not captured | exact (not captured) | cts70658-tbl-0001:row12:col5 |
| CL (L/h) — Population parameter estimate | `Q22` · not captured | 0.0195 | L/h | not captured | exact (not captured) | cts70658-tbl-0001:row13:col1 |
| CL (L/h) — Stochastic approximation | `Q22` · not captured | 0.000764 | L/h | not captured | exact (not captured) | cts70658-tbl-0001:row13:col2 |
| CL (L/h) — Stochastic approximation | `Q22` · not captured | 3.93 | L/h | not captured | exact (not captured) | cts70658-tbl-0001:row13:col3 |
| CL (L/h) — Stochastic approximation | `Q22` · not captured | 0.0180 | L/h | not captured | exact (not captured) | cts70658-tbl-0001:row13:col4 |
| CL (L/h) — Stochastic approximation | `Q22` · not captured | 0.0210 | L/h | not captured | exact (not captured) | cts70658-tbl-0001:row13:col5 |
| CL (L/h) — Conditional mode | `Q22` · not captured | 2.90 | L/h | not captured | exact (not captured) | cts70658-tbl-0001:row13:col6 |
| Q (L/h) — Population parameter estimate | `Q30` · not captured | 0.0322 | L/h | not captured | exact (not captured) | cts70658-tbl-0001:row22:col1 |
| Q (L/h) — Stochastic approximation | `Q30` · not captured | 0.00233 | L/h | not captured | exact (not captured) | cts70658-tbl-0001:row22:col2 |
| Q (L/h) — Stochastic approximation | `Q30` · not captured | 7.23 | L/h | not captured | exact (not captured) | cts70658-tbl-0001:row22:col3 |
| Q (L/h) — Stochastic approximation | `Q30` · not captured | 0.0280 | L/h | not captured | exact (not captured) | cts70658-tbl-0001:row22:col4 |
| Q (L/h) — Stochastic approximation | `Q30` · not captured | 0.0371 | L/h | not captured | exact (not captured) | cts70658-tbl-0001:row22:col5 |
| Vp (L) — Population parameter estimate | `Q64` · not captured | 1.22 | L | not captured | exact (not captured) | cts70658-tbl-0001:row23:col1 |
| Vp (L) — Stochastic approximation | `Q64` · not captured | 0.0384 | L | not captured | exact (not captured) | cts70658-tbl-0001:row23:col2 |
| Vp (L) — Stochastic approximation | `Q64` · not captured | 3.15 | L | not captured | exact (not captured) | cts70658-tbl-0001:row23:col3 |
| Vp (L) — Stochastic approximation | `Q64` · not captured | 1.15 | L | not captured | exact (not captured) | cts70658-tbl-0001:row23:col4 |
| Vp (L) — Stochastic approximation | `Q64` · not captured | 1.30 | L | not captured | exact (not captured) | cts70658-tbl-0001:row23:col5 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.044 (3/68 fields) | 65 |

<details><summary>65 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model_family` | unknown | categorical | mismatch |
| `gpt-oss:120b` | `parameters[Q1]` | not captured | 49.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q1]` | not captured | 32.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q1]` | not captured | 65.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q1]` | not captured | 17.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q1]` | not captured | 140 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q1]` | 49.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q1]` | 32.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q1]` | 65.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q1]` | 17.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q1]` | 140 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 0.0195 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 0.000764 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 3.93 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 0.0180 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 0.0210 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 2.90 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.0195 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.000764 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 3.93 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.0180 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.0210 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 2.90 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 0.0322 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 0.00233 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 7.23 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 0.0280 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 0.0371 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 0.0322 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 0.00233 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 7.23 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 0.0280 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 0.0371 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 3.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 0.0665 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 2.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 2.95 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 3.21 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | not captured | 24.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 3.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 0.0665 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 2.16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 2.95 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 3.21 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 24.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | not captured | 1.22 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | not captured | 0.0384 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | not captured | 3.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | not captured | 1.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | not captured | 1.30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 1.22 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 0.0384 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 3.15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 1.15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 1.30 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q66]` | not captured | 13.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q66]` | not captured | 1.64 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q66]` | not captured | 12.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q66]` | not captured | 10.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q66]` | not captured | 17.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q66]` | 13.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q66]` | 1.64 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q66]` | 12.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q66]` | 10.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q66]` | 17.1 | not captured | only_one_extracted |

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
<sub>← back to [albumin](drugs/drug_albumin/)</sub>
