<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lanadelumab_Wang2020_base&quot;,&quot;label&quot;:&quot;Wang_2020_base&quot;,&quot;href&quot;:&quot;drugs/drug_lanadelumab/Lanadelumab_Wang2020_base.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lanadelumab_Wang2020_final&quot;,&quot;label&quot;:&quot;Wang_2020_final&quot;,&quot;href&quot;:&quot;drugs/drug_lanadelumab/Lanadelumab_Wang2020_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Time to first attack — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Wang_2020`
- **model family:** `indirect_response_i`
- **driver:** `cited_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Wang Y; Marier JF; Kassir N; Chang C; Martin P et al. (2020). Clinical and translational science 13
  ·  DOI: [10.1111/cts.12806](https://doi.org/10.1111/cts.12806)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| CL/F (L/hour) — n | `Q27` · not captured | 28 | L/hour | not captured | exact (not captured) | cts12806-tbl-0001:row0:col3 |
| CL/F (L/hour) — Mean (%CV) | `Q27` · not captured | 0.0278 | L/hour | not captured | exact (not captured) | cts12806-tbl-0001:row0:col4 |
| CL/F (L/hour) — n | `Q27` · not captured | 29 | L/hour | not captured | exact (not captured) | cts12806-tbl-0001:row0:col7 |
| CL/F (L/hour) — Mean (%CV) | `Q27` · not captured | 0.0309 | L/hour | not captured | exact (not captured) | cts12806-tbl-0001:row0:col8 |
| CL/F (L/hour) — n | `Q27` · not captured | 27 | L/hour | not captured | exact (not captured) | cts12806-tbl-0001:row0:col11 |
| CL/F (L/hour) — Mean (%CV) | `Q27` · not captured | 0.0337 | L/hour | not captured | exact (not captured) | cts12806-tbl-0001:row0:col12 |
| V/F (L) — n | `Q76` · not captured | 28 | L | not captured | exact (not captured) | cts12806-tbl-0001:row1:col3 |
| V/F (L) — Mean (%CV) | `Q76` · not captured | 14.1 | L | not captured | exact (not captured) | cts12806-tbl-0001:row1:col4 |
| V/F (L) — n | `Q76` · not captured | 29 | L | not captured | exact (not captured) | cts12806-tbl-0001:row1:col7 |
| V/F (L) — Mean (%CV) | `Q76` · not captured | 14.9 | L | not captured | exact (not captured) | cts12806-tbl-0001:row1:col8 |
| V/F (L) — n | `Q76` · not captured | 27 | L | not captured | exact (not captured) | cts12806-tbl-0001:row1:col11 |
| V/F (L) — Mean (%CV) | `Q76` · not captured | 16.6 | L | not captured | exact (not captured) | cts12806-tbl-0001:row1:col12 |
| AUCtau,ss (µg × day/mL) — n | `Q18` · not captured | 28 | µg × day/mL | not captured | llm (not captured) | cts12806-tbl-0001:row2:col3 |
| AUCtau,ss (µg × day/mL) — Mean (%CV) | `Q18` · not captured | 233 | µg × day/mL | not captured | llm (not captured) | cts12806-tbl-0001:row2:col4 |
| AUCtau,ss (µg × day/mL) — n | `Q18` · not captured | 29 | µg × day/mL | not captured | llm (not captured) | cts12806-tbl-0001:row2:col7 |
| AUCtau,ss (µg × day/mL) — Mean (%CV) | `Q18` · not captured | 441 | µg × day/mL | not captured | llm (not captured) | cts12806-tbl-0001:row2:col8 |
| AUCtau,ss (µg × day/mL) — n | `Q18` · not captured | 27 | µg × day/mL | not captured | llm (not captured) | cts12806-tbl-0001:row2:col11 |
| AUCtau,ss (µg × day/mL) — Mean (%CV) | `Q18` · not captured | 408 | µg × day/mL | not captured | llm (not captured) | cts12806-tbl-0001:row2:col12 |
| Cave,ss (µg/mL) — n | `Q34` · not captured | 28 | µg/mL | not captured | llm_corrected (not captured) | cts12806-tbl-0001:row3:col3 |
| Cave,ss (µg/mL) — Mean (%CV) | `Q34` · not captured | 8.31 | µg/mL | not captured | llm_corrected (not captured) | cts12806-tbl-0001:row3:col4 |
| Cave,ss (µg/mL) — n | `Q34` · not captured | 29 | µg/mL | not captured | llm_corrected (not captured) | cts12806-tbl-0001:row3:col7 |
| Cave,ss (µg/mL) — Mean (%CV) | `Q34` · not captured | 15.8 | µg/mL | not captured | llm_corrected (not captured) | cts12806-tbl-0001:row3:col8 |
| Cave,ss (µg/mL) — n | `Q34` · not captured | 27 | µg/mL | not captured | llm_corrected (not captured) | cts12806-tbl-0001:row3:col11 |
| Cave,ss (µg/mL) — Mean (%CV) | `Q34` · not captured | 29.2 | µg/mL | not captured | llm_corrected (not captured) | cts12806-tbl-0001:row3:col12 |
| Cmax,ss (µg/mL) — n | `Q32` · not captured | 28 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row4:col3 |
| Cmax,ss (µg/mL) — Mean (%CV) | `Q32` · not captured | 12.0 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row4:col4 |
| Cmax,ss (µg/mL) — n | `Q32` · not captured | 29 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row4:col7 |
| Cmax,ss (µg/mL) — Mean (%CV) | `Q32` · not captured | 23.3 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row4:col8 |
| Cmax,ss (µg/mL) — n | `Q32` · not captured | 27 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row4:col11 |
| Cmax,ss (µg/mL) — Mean (%CV) | `Q32` · not captured | 34.4 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row4:col12 |
| Cmin,ss (µg/mL) — n | `Q36` · not captured | 28 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row5:col3 |
| Cmin,ss (µg/mL) — Mean (%CV) | `Q36` · not captured | 4.81 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row5:col4 |
| Cmin,ss (µg/mL) — n | `Q36` · not captured | 29 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row5:col7 |
| Cmin,ss (µg/mL) — Mean (%CV) | `Q36` · not captured | 8.77 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row5:col8 |
| Cmin,ss (µg/mL) — n | `Q36` · not captured | 27 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row5:col11 |
| Cmin,ss (µg/mL) — Mean (%CV) | `Q36` · not captured | 25.4 | µg/mL | not captured | llm_confirmed (not captured) | cts12806-tbl-0001:row5:col12 |
| Tmax (hour) — n | `Q56` · not captured | 28 | hour | not captured | exact (not captured) | cts12806-tbl-0001:row6:col3 |
| Tmax (hour) — Mean (%CV) | `Q56` · not captured | 124 | hour | not captured | exact (not captured) | cts12806-tbl-0001:row6:col4 |
| Tmax (hour) — n | `Q56` · not captured | 29 | hour | not captured | exact (not captured) | cts12806-tbl-0001:row6:col7 |
| Tmax (hour) — Mean (%CV) | `Q56` · not captured | 124 | hour | not captured | exact (not captured) | cts12806-tbl-0001:row6:col8 |
| Tmax (hour) — n | `Q56` · not captured | 27 | hour | not captured | exact (not captured) | cts12806-tbl-0001:row6:col11 |
| Tmax (hour) — Mean (%CV) | `Q56` · not captured | 98.6 | hour | not captured | exact (not captured) | cts12806-tbl-0001:row6:col12 |
| t 1/2 (hour) — n | `Q57` · not captured | 28 | hour | not captured | space_fold (not captured) | cts12806-tbl-0001:row7:col3 |
| t 1/2 (hour) — Mean (%CV) | `Q57` · not captured | 357 | hour | not captured | space_fold (not captured) | cts12806-tbl-0001:row7:col4 |
| t 1/2 (hour) — n | `Q57` · not captured | 29 | hour | not captured | space_fold (not captured) | cts12806-tbl-0001:row7:col7 |
| t 1/2 (hour) — Mean (%CV) | `Q57` · not captured | 340 | hour | not captured | space_fold (not captured) | cts12806-tbl-0001:row7:col8 |
| t 1/2 (hour) — n | `Q57` · not captured | 27 | hour | not captured | space_fold (not captured) | cts12806-tbl-0001:row7:col11 |
| t 1/2 (hour) — Mean (%CV) | `Q57` · not captured | 361 | hour | not captured | space_fold (not captured) | cts12806-tbl-0001:row7:col12 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/53 fields) | 53 |

<details><summary>53 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | lanadelumab | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_i | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q18]` | 27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q18]` | 408 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q18]` | 28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q18]` | 233 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q18]` | 29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q18]` | 441 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 0.0337 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 0.0278 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 0.0309 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 34.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 12.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 23.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q34]` | 27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q34]` | 29.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q34]` | 28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q34]` | 8.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q34]` | 29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q34]` | 15.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q36]` | 27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q36]` | 25.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q36]` | 28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q36]` | 4.81 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q36]` | 29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q36]` | 8.77 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | 27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | 98.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | 28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | 124 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | 29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | 124 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 361 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 357 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 340 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 16.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 14.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q76]` | 14.9 | not captured | only_one_extracted |

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
<sub>← back to [lanadelumab](drugs/drug_lanadelumab/)</sub>
