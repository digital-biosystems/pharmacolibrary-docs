<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Nelson2024_reference&quot;,&quot;label&quot;:&quot;Nelson_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Nelson2024_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Ng2015_reference&quot;,&quot;label&quot;:&quot;Ng_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Ng2015_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Priestley2018_reference&quot;,&quot;label&quot;:&quot;Priestley_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Priestley2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# desire to use VAS — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Walsh_2024`
- **model family:** `sigmoid_emax`
- **driver:** `cited_pk`
- **effect:** inhibition/unknown

## Citation
Walsh SL; Comer SD; Zdovc JA; Sarr C; Björnsson M; Strandgården K; et al. et al. (2024). Neuropsychopharmacology : official publication of the American College of Neuropsychopharmacology 49
  ·  DOI: [10.1038/s41386-023-01793-z](https://doi.org/10.1038/s41386-023-01793-z)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Baseline — Value | `Q324` · not captured | 45.3 | not captured | not captured | exact (not captured) | tab_0:row2:col2 |
| Baseline — RSE (%) | `Q324` · not captured | 2.40 | not captured | not captured | exact (not captured) | tab_0:row2:col3 |
| IC 50 — Value | `Q322` · not captured | 0.075 | ng/mL | not captured | llm (not captured) | tab_0:row3:col2 |
| IC 50 — RSE (%) | `Q322` · not captured | 30.4 | ng/mL | not captured | llm (not captured) | tab_0:row3:col3 |
| I max — Value | `Q323` · not captured | 1.00 | not captured | not captured | llm (not captured) | tab_0:row4:col2 |
| IIV Baseline — Value | `Q324` · not captured | 0.106 | not captured | not captured | boundary (not captured) | tab_0:row5:col2 |
| IIV Baseline — RSE (%) | `Q324` · not captured | 19.8 | not captured | not captured | boundary (not captured) | tab_0:row5:col3 |
| IIV Baseline — Shrinkage (%) | `Q324` · not captured | 11.6 | not captured | not captured | boundary (not captured) | tab_0:row5:col4 |
| IIV IC 50 — Value | `Q312` · not captured | 1.90 | not captured | not captured | boundary (not captured) | tab_0:row6:col2 |
| IIV IC 50 — RSE (%) | `Q312` · not captured | 10.3 | not captured | not captured | boundary (not captured) | tab_0:row6:col3 |
| IIV IC 50 — Shrinkage (%) | `Q312` · not captured | 13.3 | not captured | not captured | boundary (not captured) | tab_0:row6:col4 |
| IIV I max — Value | `Q312` · not captured | 0 | not captured | not captured | boundary (not captured) | tab_0:row7:col2 |
| Additive — Value | `Q317` · not captured | 0.744 | not captured | not captured | llm (not captured) | tab_0:row8:col2 |
| Additive — Shrinkage (%) | `Q318` · not captured | 9.39 | not captured | not captured | llm (not captured) | tab_0:row8:col4 |
| IC 90 — Shrinkage (%) | `Q318` · not captured | 0.109 | not captured | not captured | llm (not captured) | tab_0:row14:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.0 (0/19 fields) | 19 |

<details><summary>19 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | buprenorphine | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | sigmoid_emax | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q312]` | 1.90 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 10.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 13.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.744 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 0.109 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 9.39 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.075 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 30.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 1.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 45.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 2.40 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 0.106 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 19.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 11.6 | not captured | only_one_extracted |

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
<sub>← back to [buprenorphine](drugs/drug_buprenorphine/)</sub>
