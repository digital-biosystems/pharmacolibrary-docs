<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canagliflozin_Yao2023_estimates&quot;,&quot;label&quot;:&quot;Yao_2023_estimates&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/Canagliflozin_Yao2023_estimates.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canagliflozin_Yao2023_iiv&quot;,&quot;label&quot;:&quot;Yao_2023_iiv&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/Canagliflozin_Yao2023_iiv.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canagliflozin_Yao2023_reference&quot;,&quot;label&quot;:&quot;Yao_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Yao_2023`
- **model family:** `emax`
- **driver:** `cited_pk`
- **tier:** population
- **effect:** stimulation/unknown

## Citation
Yao X; Zhou J; Song L; Ren Y; Hu P; Liu D et al. (2023). CPT: pharmacometrics & systems pharmacology 12
  ·  DOI: [10.1002/psp4.12934](https://doi.org/10.1002/psp4.12934)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Emax (g/(mg/dL)) — Estimates | `Q320` · not captured | 0.606 | unit | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row2:col2 |
| Emax (g/(mg/dL)) — RSE (%) | `Q320` · not captured | 4.40 | unit | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row2:col3 |
| Dapa‐EC50 (ng/mL·h) — Estimates | `Q321` · not captured | 56.6 | ng/mL·h | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row3:col2 |
| Dapa‐EC50 (ng/mL·h) — RSE (%) | `Q321` · not captured | 27.1 | ng/mL·h | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row3:col3 |
| Cana‐EC50 (ng/mL·h) — Estimates | `Q321` · not captured | 2310 | ng/mL·h | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row4:col2 |
| Cana‐EC50 (ng/mL·h) — RSE (%) | `Q321` · not captured | 23.3 | ng/mL·h | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row4:col3 |
| Empa‐EC50 (ng/mL·h) — Estimates | `Q321` · not captured | 841 | ng/mL·h | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row5:col2 |
| Empa‐EC50 (ng/mL·h) — RSE (%) | `Q321` · not captured | 30.4 | ng/mL·h | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row5:col3 |
| σ2 pro — Estimates | `Q315` · not captured | 0.222 | unit | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row6:col2 |
| σ2 add — Estimates | `Q315` · not captured | 0.0646 | unit | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row7:col2 |
| FPGbaseline (mg/dL) — Estimates | `Q100` · not captured | 160 | mg/dL | not captured | llm (not captured) | psp412934-tbl-0002:row9:col2 |
| FPGbaseline (mg/dL) — RSE (%) | `Q100` · not captured | 1.00 | mg/dL | not captured | llm (not captured) | psp412934-tbl-0002:row9:col3 |
| FPGbaseline (mg/dL) — IIV (%) | `Q312` · not captured | 5.40 | mg/dL | not captured | llm (not captured) | psp412934-tbl-0002:row9:col4 |
| Pfmax1 (mg/dL) — Estimates | `Q32` · not captured | 1.45 | mg/dL | not captured | llm (not captured) | psp412934-tbl-0002:row10:col2 |
| Pfmax1 (mg/dL) — RSE (%) | `Q32` · not captured | 26.0 | mg/dL | not captured | llm (not captured) | psp412934-tbl-0002:row10:col3 |
| Pfmax1 (mg/dL) — IIV (%) | `Q32` · not captured | 5.74 | mg/dL | not captured | llm (not captured) | psp412934-tbl-0002:row10:col4 |
| Pfmax3 (mg/dL) — IIV (%) | `Q32` · not captured | 6.83 | mg/dL | not captured | llm (not captured) | psp412934-tbl-0002:row12:col4 |
| Pfmax4 (mg/dL) — Estimates | `Q32` · not captured | 4.30 | mg/dL | not captured | llm (not captured) | psp412934-tbl-0002:row13:col2 |
| Pfmax4 (mg/dL) — IIV (%) | `Q32` · not captured | 0.87 | mg/dL | not captured | llm (not captured) | psp412934-tbl-0002:row13:col4 |
| K fp (week−1) — Estimates | `Q358` · not captured | 0.340 | week−1 | not captured | llm (not captured) | psp412934-tbl-0002:row14:col2 |
| K fp (week−1) — RSE (%) | `Q358` · not captured | 55.0 | week−1 | not captured | llm (not captured) | psp412934-tbl-0002:row14:col3 |
| K fp (week−1) — IIV (%) | `Q328` · not captured | 42.7 | week−1 | not captured | llm (not captured) | psp412934-tbl-0002:row14:col4 |
| σ2 add, FPG — Estimates | `Q315` · not captured | 0.0330 | unit | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row17:col2 |
| HbA1cbaseline (%) — Estimates | `Q100` · not captured | 7.92 | unit | not captured | llm (not captured) | psp412934-tbl-0002:row18:col2 |
| HbA1cbaseline (%) — RSE (%) | `Q100` · not captured | 1.00 | unit | not captured | llm (not captured) | psp412934-tbl-0002:row18:col3 |
| HbA1cbaseline (%) — IIV (%) | `Q312` · not captured | 3.90 | unit | not captured | llm (not captured) | psp412934-tbl-0002:row18:col4 |
| Phmax1 (%) — IIV (%) | `Q312` · not captured | 0.08 | unit | not captured | llm (not captured) | psp412934-tbl-0002:row19:col4 |
| Phmax3 (%) — IIV (%) | `Q312` · not captured | 0.13 | unit | not captured | llm (not captured) | psp412934-tbl-0002:row21:col4 |
| Phmax4 (%) — IIV (%) | `Q312` · not captured | 0.20 | unit | not captured | llm (not captured) | psp412934-tbl-0002:row22:col4 |
| K hp (week−1) — Estimates | `Q358` · not captured | 0.240 | week−1 | not captured | llm (not captured) | psp412934-tbl-0002:row23:col2 |
| K hp (week−1) — RSE (%) | `Q358` · not captured | 21.0 | week−1 | not captured | llm (not captured) | psp412934-tbl-0002:row23:col3 |
| K hp (week−1) — IIV (%) | `Q358` · not captured | 29.4 | week−1 | not captured | llm (not captured) | psp412934-tbl-0002:row23:col4 |
| DIShp (%/100 weeks) — IIV (%) | `Q312` · not captured | 136.7 | unit | not captured | llm (not captured) | psp412934-tbl-0002:row24:col4 |
| K out (week−1) — Estimates | `Q328` · not captured | 0.200 | week−1 | not captured | space_fold (not captured) | psp412934-tbl-0002:row25:col2 |
| K out (week−1) — RSE (%) | `Q328` · not captured | 3.00 | week−1 | not captured | space_fold (not captured) | psp412934-tbl-0002:row25:col3 |
| K out (week−1) — IIV (%) | `Q328` · not captured | 16.4 | week−1 | not captured | space_fold (not captured) | psp412934-tbl-0002:row25:col4 |
| K in2 (%/week) — Estimates | `Q328` · not captured | 0.500 | %/week | not captured | llm (not captured) | psp412934-tbl-0002:row26:col2 |
| K in2 (%/week) — RSE (%) | `Q328` · not captured | 5.00 | %/week | not captured | llm (not captured) | psp412934-tbl-0002:row26:col3 |
| σ2 add, HbA1c — Estimates | `Q315` · not captured | 0.006 | unit | not captured | llm_confirmed (not captured) | psp412934-tbl-0002:row27:col2 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.0 (0/44 fields) | 44 |

<details><summary>44 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | dapagliflozin, canagliflozin, empagliflozin | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | stimulation | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | emax | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q100]` | 7.92 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q100]` | 1.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q100]` | 160 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q100]` | 1.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 3.90 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 0.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 0.13 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 0.20 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 136.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 5.40 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.0330 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.006 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.222 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.0646 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 0.606 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 4.40 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 56.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 27.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 2310 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 23.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 841 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 30.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 42.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.200 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 3.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 16.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.500 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 5.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 1.45 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 26.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 5.74 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 6.83 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 4.30 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 0.87 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.340 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 55.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.240 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 21.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 29.4 | not captured | only_one_extracted |

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
<sub>← back to [canagliflozin](drugs/drug_canagliflozin/)</sub>
