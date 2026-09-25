<div class="pk-tab-mark" data-tab="Information"></div>

# sperm count — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.573). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Bi_2018`
- **model family:** `indirect_response_ii`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Bi Y; Perry PJ; Ellerby M; Murry DJ et al. (2018). CPT: pharmacometrics & systems pharmacology 7
  ·  DOI: [10.1002/psp4.12287](https://doi.org/10.1002/psp4.12287)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Kin, IU/day — Final model | `Q327` · not captured | 1.7 | IU/day | not captured | exact (not captured) | psp412287-tbl-0003:row3:col1 |
| Kin, IU/day — Bootstrapa | `Q327` · not captured | 1.7 | IU/day | not captured | exact (not captured) | psp412287-tbl-0003:row3:col2 |
| Kin, IU/day — Bootstrapa | `Q327` · not captured | 14.4 | IU/day | not captured | exact (not captured) | psp412287-tbl-0003:row3:col3 |
| Kin, IU/day — Bootstrapa | `Q327` · not captured | 1.36 | IU/day | not captured | exact (not captured) | psp412287-tbl-0003:row3:col4 |
| Kout, L/day — Final model | `Q328` · not captured | 0.11 | L/day | not captured | exact (not captured) | psp412287-tbl-0003:row4:col1 |
| Kout, L/day — Bootstrapa | `Q328` · not captured | 0.11 | L/day | not captured | exact (not captured) | psp412287-tbl-0003:row4:col2 |
| Kout, L/day — Bootstrapa | `Q328` · not captured | 10.8 | L/day | not captured | exact (not captured) | psp412287-tbl-0003:row4:col3 |
| Kout, L/day — Bootstrapa | `Q328` · not captured | 0.093 | L/day | not captured | exact (not captured) | psp412287-tbl-0003:row4:col4 |
| Test50, ng/mL — Final model | `Q321` · not captured | 9.33 | ng/mL | not captured | llm (not captured) | psp412287-tbl-0003:row5:col1 |
| Test50, ng/mL — Bootstrapa | `Q321` · not captured | 9.35 | ng/mL | not captured | llm (not captured) | psp412287-tbl-0003:row5:col2 |
| Test50, ng/mL — Bootstrapa | `Q321` · not captured | 5.62 | ng/mL | not captured | llm (not captured) | psp412287-tbl-0003:row5:col3 |
| Test50, ng/mL — Bootstrapa | `Q321` · not captured | 8.55 | ng/mL | not captured | llm (not captured) | psp412287-tbl-0003:row5:col4 |
| Lambda, λ — Final model | `Q342` · not captured | 18.3 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row6:col1 |
| Lambda, λ — Bootstrapa | `Q342` · not captured | 18.7 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row6:col2 |
| Lambda, λ — Bootstrapa | `Q342` · not captured | 21.6 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row6:col3 |
| Lambda, λ — Bootstrapa | `Q342` · not captured | 13.6 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row6:col4 |
| ke0, mL/day — Final model | `Q326` · not captured | 0.0321 | mL/day | not captured | exact (not captured) | psp412287-tbl-0003:row7:col1 |
| ke0, mL/day — Bootstrapa | `Q326` · not captured | 0.0318 | mL/day | not captured | exact (not captured) | psp412287-tbl-0003:row7:col2 |
| ke0, mL/day — Bootstrapa | `Q326` · not captured | 11.2 | mL/day | not captured | exact (not captured) | psp412287-tbl-0003:row7:col3 |
| ke0, mL/day — Bootstrapa | `Q326` · not captured | 0.0261 | mL/day | not captured | exact (not captured) | psp412287-tbl-0003:row7:col4 |
| σ2 additive — Final model | `Q315` · not captured | 0.397 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row8:col1 |
| σ2 additive — Bootstrapa | `Q317` · not captured | 0.395 | not captured | not captured | llm_corrected (not captured) | psp412287-tbl-0003:row8:col2 |
| σ2 additive — Bootstrapa | `Q317` · not captured | 10.8 | not captured | not captured | llm_corrected (not captured) | psp412287-tbl-0003:row8:col3 |
| σ2 additive — Bootstrapa | `Q317` · not captured | 0.331 | not captured | not captured | llm_corrected (not captured) | psp412287-tbl-0003:row8:col4 |
| θBwt−IC50 — Final model | `Q322` · not captured | -1.14 | ng/mL | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row9:col1 |
| θBwt−IC50 — Bootstrapa | `Q322` · not captured | -1.13 | ng/mL | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row9:col2 |
| θBwt−IC50 — Bootstrapa | `Q322` · not captured | 38.9 | ng/mL | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row9:col3 |
| θBthyroxin−Kin — Final model | `Q327` · not captured | 1.19 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row10:col1 |
| θBthyroxin−Kin — Bootstrapa | `Q327` · not captured | 1.22 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row10:col2 |
| θBthyroxin−Kin — Bootstrapa | `Q327` · not captured | 27.1 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row10:col3 |
| θBthyroxin−Kin — Bootstrapa | `Q327` · not captured | 0.916 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row10:col4 |
| IIV_Kinb — Bootstrapa | `Q312` · not captured | 51.4 | not captured | not captured | llm (not captured) | psp412287-tbl-0003:row11:col3 |
| IIV_ IC50 — Bootstrapa | `Q322` · not captured | 32.2 | ng/mL | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row12:col3 |
| IIV_ λ — Bootstrapa | `Q312` · not captured | 103 | not captured | not captured | llm (not captured) | psp412287-tbl-0003:row13:col3 |
| IIV_ ke0 — Bootstrapa | `Q326` · not captured | 43.7 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row14:col3 |
| Kin,/day — Final model | `Q327` · not captured | 6.17 | /day | not captured | exact (not captured) | psp412287-tbl-0003:row16:col1 |
| Kin,/day — Bootstrapa | `Q327` · not captured | 6.40 | /day | not captured | exact (not captured) | psp412287-tbl-0003:row16:col2 |
| Kin,/day — Bootstrapa | `Q327` · not captured | 58.5 | /day | not captured | exact (not captured) | psp412287-tbl-0003:row16:col3 |
| Kin,/day — Bootstrapa | `Q327` · not captured | 4.92 | /day | not captured | exact (not captured) | psp412287-tbl-0003:row16:col4 |
| Kout,/day — Final model | `Q328` · not captured | 0.0696 | /day | not captured | exact (not captured) | psp412287-tbl-0003:row17:col1 |
| Kout,/day — Bootstrapa | `Q328` · not captured | 0.0714 | /day | not captured | exact (not captured) | psp412287-tbl-0003:row17:col2 |
| Kout,/day — Bootstrapa | `Q328` · not captured | 59.3 | /day | not captured | exact (not captured) | psp412287-tbl-0003:row17:col3 |
| Kout,/day — Bootstrapa | `Q328` · not captured | 0.0616 | /day | not captured | exact (not captured) | psp412287-tbl-0003:row17:col4 |
| Cavg50, ng/mL — Final model | `Q71` · not captured | 8.68 | ng/mL | not captured | llm (not captured) | psp412287-tbl-0003:row18:col1 |
| Cavg50, ng/mL — Bootstrapa | `Q71` · not captured | 8.74 | ng/mL | not captured | llm (not captured) | psp412287-tbl-0003:row18:col2 |
| Cavg50, ng/mL — Bootstrapa | `Q71` · not captured | 10.5 | ng/mL | not captured | llm (not captured) | psp412287-tbl-0003:row18:col3 |
| Cavg50, ng/mL — Bootstrapa | `Q71` · not captured | 7.3 | ng/mL | not captured | llm (not captured) | psp412287-tbl-0003:row18:col4 |
| Lambda, λ — Final model | `Q342` · not captured | 11.3 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row19:col1 |
| Lambda, λ — Bootstrapa | `Q342` · not captured | 11.7 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row19:col2 |
| Lambda, λ — Bootstrapa | `Q342` · not captured | 31.5 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row19:col3 |
| Lambda, λ — Bootstrapa | `Q342` · not captured | 6.89 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row19:col4 |
| σ2 additive — Final model | `Q315` · not captured | 0.429 | not captured | not captured | llm_confirmed (not captured) | psp412287-tbl-0003:row22:col1 |
| σ2 additive — Bootstrapa | `Q317` · not captured | 0.421 | not captured | not captured | llm_corrected (not captured) | psp412287-tbl-0003:row22:col2 |
| σ2 additive — Bootstrapa | `Q317` · not captured | 19 | not captured | not captured | llm_corrected (not captured) | psp412287-tbl-0003:row22:col3 |
| σ2 additive — Bootstrapa | `Q317` · not captured | 0.311 | not captured | not captured | llm_corrected (not captured) | psp412287-tbl-0003:row22:col4 |
| IIV_Kin b — Bootstrapa | `Q312` · not captured | 35.2 | not captured | not captured | llm (not captured) | psp412287-tbl-0003:row23:col3 |
| IIV_ Phi(ϕ) — Bootstrapa | `Q312` · not captured | 73.6 | not captured | not captured | llm (not captured) | psp412287-tbl-0003:row24:col3 |
| IIV_ Cavg50 — Bootstrapa | `Q312` · not captured | 57.4 | not captured | not captured | llm (not captured) | psp412287-tbl-0003:row25:col3 |
| IIV_ λ — Bootstrapa | `Q312` · not captured | 60.6 | not captured | not captured | llm (not captured) | psp412287-tbl-0003:row26:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.573 (47/82 fields) | 35 |

<details><summary>35 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model_family` | indirect_response_ii | indirect_response_i | mismatch |
| `gpt-oss:120b` | `parameters[Q312]` | 103 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 35.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 73.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 57.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 60.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 0.421 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 19 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 0.311 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 0.395 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 10.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 0.331 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.421 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 19 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.311 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.395 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 10.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.331 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | -1.27 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | -1.25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 37.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 9.33 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 9.35 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 5.62 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 8.55 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | not captured | 35.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 103 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q342]` | not captured | 60.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 4.65 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 73.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q71]` | not captured | 57.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 9.33 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 9.35 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 5.62 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q75]` | not captured | 8.55 | only_one_extracted |

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
