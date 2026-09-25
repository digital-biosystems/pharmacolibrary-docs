<div class="pk-tab-mark" data-tab="Information"></div>

# free VEGF-A — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.628). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Diack_2024`
- **model family:** `indirect_response_i`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Diack C; Avery RL; Cheung CMG; Csaky KG; Gibiansky L; Jaminion F; Gibiansky E; Sickert D; Stoilov I; Cosson V; Bogman K et al. (2024). Translational vision science & technology 13
  ·  DOI: [10.1167/tvst.13.11.13](https://doi.org/10.1167/tvst.13.11.13)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| kout (1/day) — Estimate | `Q328` · not captured | 4.15 | not captured | not captured | exact (not captured) | tbl1:row1:col2 |
| kout (1/day) — % RSE | `Q328` · not captured | 8.42 | not captured | not captured | exact (not captured) | tbl1:row1:col3 |
| kout (1/day) — 95% CI | `Q328` · not captured | 3.46 | not captured | not captured | exact (not captured) | tbl1:row1:col4 |
| EC50 (µg/mL) — Estimate | `Q321` · not captured | 2.59 | µg/mL | not captured | exact (not captured) | tbl1:row4:col2 |
| EC50 (µg/mL) — % RSE | `Q321` · not captured | 3.36 | µg/mL | not captured | exact (not captured) | tbl1:row4:col3 |
| EC50 (µg/mL) — 95% CI | `Q321` · not captured | 2.42 | µg/mL | not captured | exact (not captured) | tbl1:row4:col4 |
| HillPhase 2 — Estimate | `Q325` · not captured | 1.11 | not captured | not captured | llm (not captured) | tbl1:row5:col2 |
| HillPhase 2 — % RSE | `Q100` · not captured | 1.33 | not captured | not captured | llm (not captured) | tbl1:row5:col3 |
| HillPhase 2 — 95% CI | `Q325` · not captured | 1.08 | not captured | not captured | llm (not captured) | tbl1:row5:col4 |
| HillPhase 3 — Estimate | `Q325` · not captured | 0.655 | not captured | not captured | llm (not captured) | tbl1:row6:col2 |
| HillPhase 3 — % RSE | `Q100` · not captured | 1.07 | not captured | not captured | llm (not captured) | tbl1:row6:col3 |
| HillPhase 3 — 95% CI | `Q325` · not captured | 0.641 | not captured | not captured | llm (not captured) | tbl1:row6:col4 |
| EMAX — Estimate | `Q320` · not captured | 0.987 | not captured | not captured | exact (not captured) | tbl1:row7:col2 |
| EMAX — % RSE | `Q320` · not captured | 0.0117 | not captured | not captured | exact (not captured) | tbl1:row7:col3 |
| EMAX — 95% CI | `Q320` · not captured | 0.987 | not captured | not captured | exact (not captured) | tbl1:row7:col4 |
| σVEGF-A = ωBASE,observed — Estimate | `Q315` · not captured | 0.401 | not captured | not captured | llm (not captured) | tbl1:row8:col2 |
| σVEGF-A = ωBASE,observed — % RSE | `Q315` · not captured | 1.19 | not captured | not captured | llm (not captured) | tbl1:row8:col3 |
| σVEGF-A = ωBASE,observed — 95% CI | `Q315` · not captured | 0.391 | not captured | not captured | llm (not captured) | tbl1:row8:col4 |
| HillBASE — Estimate | `Q100` · not captured | 0.235 | not captured | not captured | llm (not captured) | tbl1:row9:col2 |
| HillBASE — % RSE | `Q100` · not captured | 2.08 | not captured | not captured | llm (not captured) | tbl1:row9:col3 |
| HillBASE — 95% CI | `Q325` · not captured | 0.225 | not captured | not captured | llm (not captured) | tbl1:row9:col4 |
| ω2BASE,missing — Estimate | `Q312` · not captured | 0.411 | not captured | not captured | llm (not captured) | tbl1:row10:col2 |
| ω2BASE,missing — % RSE | `Q312` · not captured | 19 | not captured | not captured | llm (not captured) | tbl1:row10:col3 |
| ω2BASE,missing — 95% CI | `Q312` · not captured | 0.258 | not captured | not captured | llm (not captured) | tbl1:row10:col4 |
| ω2EC50 — Estimate | `Q321` · not captured | 1.1 | µg/mL | not captured | llm (not captured) | tbl1:row12:col2 |
| ω2EC50 — % RSE | `Q321` · not captured | 4.15 | µg/mL | not captured | llm (not captured) | tbl1:row12:col3 |
| ω2EC50 — 95% CI | `Q321` · not captured | 1.01 | µg/mL | not captured | llm (not captured) | tbl1:row12:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.628 (27/43 fields) | 16 |

<details><summary>16 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[Q100]` | 1.33 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q100]` | 1.07 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q100]` | 0.235 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q100]` | 2.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 0.235 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 2.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 0.225 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.33 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.07 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | 0.225 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 114 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 12.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 7.47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q86]` | not captured | 45.1 | only_one_extracted |

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
<sub>← back to [trometamol](drugs/drug_trometamol/)</sub>
