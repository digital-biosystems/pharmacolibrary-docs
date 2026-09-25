<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Arginine_Aurlie2023_reference&quot;,&quot;label&quot;:&quot;Aur\u00e9lie_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_arginine/Arginine_Aurlie2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Arginine_Camargo2025_reference&quot;,&quot;label&quot;:&quot;Camargo_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_arginine/Arginine_Camargo2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Arginine_Guo2023_reference&quot;,&quot;label&quot;:&quot;Guo_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_arginine/Arginine_Guo2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Arginine_Henninger2026_reference&quot;,&quot;label&quot;:&quot;Henninger_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_arginine/Arginine_Henninger2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Arginine_Schaedeli2024_reference&quot;,&quot;label&quot;:&quot;Schaedeli_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_arginine/Arginine_Schaedeli2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Arginine_Wang2018_reference&quot;,&quot;label&quot;:&quot;Wang_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_arginine/Arginine_Wang2018_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Arginine_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_arginine/Arginine_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Guo_2023`
- **model family:** `indirect_response_i`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Guo C; Liao KH; Li M; Wang IM; Shaik N; Yin D et al. (2023). CPT: pharmacometrics & systems pharmacology 12
  ·  DOI: [10.1002/psp4.12882](https://doi.org/10.1002/psp4.12882)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| CL/F (L/h) — Estimate | `Q27` · not captured | 9.53 | L/h | not captured | exact (not captured) | psp412882-tbl-0001:row2:col1 |
| CL/F (L/h) — RSE (%) | `Q27` · not captured | 8.94 | L/h | not captured | exact (not captured) | psp412882-tbl-0001:row2:col2 |
| CL/F (L/h) — IIV (%) | `Q27` · not captured | 38.9 | L/h | not captured | exact (not captured) | psp412882-tbl-0001:row2:col3 |
| CL/F (L/h) — RSE (%) of ω2 | `Q27` · not captured | 41 | L/h | not captured | exact (not captured) | psp412882-tbl-0001:row2:col4 |
| CL/F (L/h) — IIV Shrinkage (%) | `Q27` · not captured | 2.52 | L/h | not captured | exact (not captured) | psp412882-tbl-0001:row2:col5 |
| V1/F (L) — Estimate | `Q290` · not captured | 160 | L | not captured | exact (not captured) | psp412882-tbl-0001:row3:col1 |
| V1/F (L) — RSE (%) | `Q290` · not captured | 16.5 | L | not captured | exact (not captured) | psp412882-tbl-0001:row3:col2 |
| V1/F (L) — IIV (%) | `Q290` · not captured | 61.1 | L | not captured | exact (not captured) | psp412882-tbl-0001:row3:col3 |
| V1/F (L) — RSE (%) of ω2 | `Q290` · not captured | 25 | L | not captured | exact (not captured) | psp412882-tbl-0001:row3:col4 |
| V1/F (L) — IIV Shrinkage (%) | `Q290` · not captured | 5.74 | L | not captured | exact (not captured) | psp412882-tbl-0001:row3:col5 |
| Q/F (L/h) — Estimate | `Q69` · not captured | 26.2 | L/h | not captured | exact (not captured) | psp412882-tbl-0001:row4:col1 |
| Q/F (L/h) — RSE (%) | `Q69` · not captured | 15.3 | L/h | not captured | exact (not captured) | psp412882-tbl-0001:row4:col2 |
| V2/F (L) — Estimate | `Q82` · not captured | 285 | L | not captured | exact (not captured) | psp412882-tbl-0001:row5:col1 |
| V2/F (L) — RSE (%) | `Q82` · not captured | 8.25 | L | not captured | exact (not captured) | psp412882-tbl-0001:row5:col2 |
| Ka (h−1) — Estimate | `Q49` · not captured | 2.31 | h−1 | not captured | exact (not captured) | psp412882-tbl-0001:row6:col1 |
| Ka (h−1) — RSE (%) | `Q49` · not captured | 27 | h−1 | not captured | exact (not captured) | psp412882-tbl-0001:row6:col2 |
| Scaling factor for F — IIV (%) | `Q312` · not captured | 53.6 | unit | not captured | llm (not captured) | psp412882-tbl-0001:row7:col3 |
| Scaling factor for F — IIV Shrinkage (%) | `Q318` · not captured | 23.2 | unit | not captured | llm (not captured) | psp412882-tbl-0001:row7:col5 |
| PK residual error — Estimate | `Q315` · not captured | 0.112 | unit | not captured | llm (not captured) | psp412882-tbl-0001:row8:col1 |
| PK residual error — RSE (%) | `Q315` · not captured | 12.2 | unit | not captured | llm (not captured) | psp412882-tbl-0001:row8:col2 |
| Imax — Estimate | `Q323` · not captured | 0.823 | unit | not captured | exact (not captured) | psp412882-tbl-0001:row10:col1 |
| Imax — RSE (%) | `Q323` · not captured | 1.27 | unit | not captured | exact (not captured) | psp412882-tbl-0001:row10:col2 |
| IC50 (ng/ml) — Estimate | `Q322` · not captured | 0.425 | ng/ml | not captured | exact (not captured) | psp412882-tbl-0001:row11:col1 |
| IC50 (ng/ml) — RSE (%) | `Q322` · not captured | 18.1 | ng/ml | not captured | exact (not captured) | psp412882-tbl-0001:row11:col2 |
| Kout (h−1) — Estimate | `Q328` · not captured | 0.00708 | h−1 | not captured | exact (not captured) | psp412882-tbl-0001:row12:col1 |
| Kout (h−1) — RSE (%) | `Q328` · not captured | 5.15 | h−1 | not captured | exact (not captured) | psp412882-tbl-0001:row12:col2 |
| Baseline SDMA (ng/ml) — Estimate | `Q324` · not captured | 113 | ng/ml | not captured | llm_confirmed (not captured) | psp412882-tbl-0001:row13:col1 |
| Baseline SDMA (ng/ml) — RSE (%) | `Q100` · not captured | 5.59 | ng/ml | not captured | llm_corrected (not captured) | psp412882-tbl-0001:row13:col2 |
| Baseline SDMA (ng/ml) — IIV (%) | `Q312` · not captured | 29.1 | ng/ml | not captured | llm_corrected (not captured) | psp412882-tbl-0001:row13:col3 |
| Baseline SDMA (ng/ml) — RSE (%) of ω2 | `Q324` · not captured | 28.3 | ng/ml | not captured | llm_confirmed (not captured) | psp412882-tbl-0001:row13:col4 |
| Baseline SDMA (ng/ml) — IIV Shrinkage (%) | `Q324` · not captured | -0.862 | ng/ml | not captured | boundary_llm_dim_refused (not captured) | psp412882-tbl-0001:row13:col5 |
| SDMA residual error — Estimate | `Q315` · not captured | 0.0146 | unit | not captured | llm (not captured) | psp412882-tbl-0001:row14:col1 |
| SDMA residual error — RSE (%) | `Q315` · not captured | 19.2 | unit | not captured | llm (not captured) | psp412882-tbl-0001:row14:col2 |
| MTT (h) — Estimate | `Q81` · not captured | 134 | h | not captured | exact (not captured) | psp412882-tbl-0001:row16:col1 |
| MTT (h) — RSE (%) | `Q81` · not captured | 7.66 | h | not captured | exact (not captured) | psp412882-tbl-0001:row16:col2 |
| Feedback, γ — IIV (%) | `Q312` · not captured | 46.9 | unit | not captured | llm (not captured) | psp412882-tbl-0001:row18:col3 |
| Feedback, γ — IIV Shrinkage (%) | `Q318` · not captured | 20.4 | unit | not captured | llm (not captured) | psp412882-tbl-0001:row18:col5 |
| Baseline PLT (109/L) — Estimate | `Q324` · not captured | 232 | unit | not captured | llm_confirmed (not captured) | psp412882-tbl-0001:row19:col1 |
| Baseline PLT (109/L) — RSE (%) | `Q324` · not captured | 5.76 | unit | not captured | llm_confirmed (not captured) | psp412882-tbl-0001:row19:col2 |
| Baseline PLT (109/L) — IIV (%) | `Q312` · not captured | 28.3 | unit | not captured | llm_corrected (not captured) | psp412882-tbl-0001:row19:col3 |
| Baseline PLT (109/L) — RSE (%) of ω2 | `Q324` · not captured | 34 | unit | not captured | llm_confirmed (not captured) | psp412882-tbl-0001:row19:col4 |
| Baseline PLT (109/L) — IIV Shrinkage (%) | `Q318` · not captured | 2.85 | unit | not captured | llm_corrected (not captured) | psp412882-tbl-0001:row19:col5 |
| PLT residual error — RSE (%) | `Q315` · not captured | 19.3 | unit | not captured | llm (not captured) | psp412882-tbl-0001:row20:col2 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/47 fields) | 47 |

<details><summary>47 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | PF-06939999 | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_i | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q100]` | 5.59 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 9.53 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 8.94 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 38.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 41 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 2.52 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q290]` | 160 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q290]` | 16.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q290]` | 61.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q290]` | 25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q290]` | 5.74 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 29.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 46.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 28.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 53.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.0146 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 19.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 19.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.112 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 12.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 20.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 2.85 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 23.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.425 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 18.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 0.823 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 1.27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 113 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 28.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | -0.862 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 232 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 5.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 34 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.00708 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 5.15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 2.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q69]` | 26.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q69]` | 15.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 134 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q81]` | 7.66 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q82]` | 285 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q82]` | 8.25 | not captured | only_one_extracted |

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
<sub>← back to [Arginine](drugs/drug_arginine/)</sub>
