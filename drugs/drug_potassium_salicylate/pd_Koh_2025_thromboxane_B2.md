<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Koh_2025`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Koh J; Khwarg J; Yu KS; Lee S; Jang IJ; Lee S et al. (2025). Drug design, development and therapy 19
  ·  DOI: [10.2147/dddt.s533428](https://doi.org/10.2147/dddt.s533428)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| fr — Estimate | `Q43` · not captured | 0.69 | not captured | not captured | exact (not captured) | t0001:row2:col1 |
| fr — RSE (%) | `Q43` · not captured | 4.99 | not captured | not captured | exact (not captured) | t0001:row2:col2 |
| ka capsule (h−1) — Estimate | `Q49` · not captured | 0.22 | h−1 | not captured | boundary_llm_dim_refused (not captured) | t0001:row3:col1 |
| ka capsule (h−1) — RSE (%) | `Q49` · not captured | 21.8 | h−1 | not captured | llm_confirmed (not captured) | t0001:row3:col2 |
| ka tablet (h−1) — Estimate | `Q49` · not captured | 0.053 | h−1 | not captured | llm_confirmed (not captured) | t0001:row4:col1 |
| Tk0 (h) — Estimate | `Q56` · not captured | 1.58 | h | not captured | llm (not captured) | t0001:row5:col1 |
| Lag0 (h) — Estimate | `Q83` · not captured | 2.81 | h | not captured | llm (not captured) | t0001:row6:col1 |
| Lag0 (h) — RSE (%) | `Q83` · not captured | 8.26 | h | not captured | llm (not captured) | t0001:row6:col2 |
| k23 (h−1) — Estimate | `Q48` · not captured | 2.32 | h−1 | not captured | exact (not captured) | t0001:row7:col1 |
| k23 (h−1) — RSE (%) | `Q48` · not captured | 4.11 | h−1 | not captured | exact (not captured) | t0001:row7:col2 |
| k24 (h−1) — Estimate | `Q48` · not captured | 0.57 | h−1 | not captured | exact (not captured) | t0001:row8:col1 |
| k34 (h−1) — Estimate | `Q48` · not captured | 2.97 | h−1 | not captured | exact (not captured) | t0001:row9:col1 |
| k34 (h−1) — RSE (%) | `Q48` · not captured | 11.7 | h−1 | not captured | exact (not captured) | t0001:row9:col2 |
| CLm/F (L/h) — Estimate | `Q351` · not captured | 2.76 | L/h | not captured | exact (not captured) | t0001:row11:col1 |
| CLm/F (L/h) — RSE (%) | `Q351` · not captured | 3.86 | L/h | not captured | exact (not captured) | t0001:row11:col2 |
| Q/F (L/h) — Estimate | `Q69` · not captured | 0.08 | L/h | not captured | exact (not captured) | t0001:row13:col1 |
| V3/F (L) — Estimate | `Q78` · not captured | 23.51 | L | not captured | exact (not captured) | t0001:row14:col1 |
| V3/F (L) — RSE (%) | `Q78` · not captured | 12.3 | L | not captured | exact (not captured) | t0001:row14:col2 |
| V4/F (L) — Estimate | `Q78` · not captured | 7.5 | L | not captured | llm (not captured) | t0001:row15:col1 |
| V4/F (L) — RSE (%) | `Q78` · not captured | 2.6 | L | not captured | llm (not captured) | t0001:row15:col2 |
| V5/F (L) — Estimate | `Q78` · not captured | 1.98 | L | not captured | llm (not captured) | t0001:row16:col1 |
| R0 (μg/L) — Estimate | `Q336` · not captured | 26.4 | μg/L | not captured | exact (not captured) | t0001:row17:col1 |
| R0 (μg/L) — RSE (%) | `Q336` · not captured | 7.67 | μg/L | not captured | exact (not captured) | t0001:row17:col2 |
| kout (h−1) — Estimate | `Q328` · not captured | 0.023 | h−1 | not captured | exact (not captured) | t0001:row18:col1 |
| kout (h−1) — RSE (%) | `Q328` · not captured | 5.51 | h−1 | not captured | exact (not captured) | t0001:row18:col2 |
| Imax — Estimate | `Q323` · not captured | 1 | not captured | not captured | exact (not captured) | t0001:row19:col1 |
| IC50 (mol/L) — Estimate | `Q322` · not captured | 0.0036 | mol/L | not captured | exact (not captured) | t0001:row20:col1 |
| Gamma — Estimate | `Q325` · not captured | 1 | not captured | not captured | exact (not captured) | t0001:row21:col1 |
| Ωka — Estimate | `Q49` · not captured | 1.09 | not captured | not captured | llm_confirmed (not captured) | t0001:row24:col1 |
| Ωka — RSE (%) | `Q49` · not captured | 14.7 | not captured | not captured | llm_confirmed (not captured) | t0001:row24:col2 |
| ΩCLm/F — Estimate | `Q351` · not captured | 0.24 | not captured | not captured | llm_confirmed (not captured) | t0001:row28:col1 |
| ΩCLm/F — RSE (%) | `Q351` · not captured | 11.9 | not captured | not captured | llm_confirmed (not captured) | t0001:row28:col2 |
| ΩR0 — Estimate | `Q336` · not captured | 0.49 | not captured | not captured | llm_confirmed (not captured) | t0001:row29:col1 |
| ΩR0 — RSE (%) | `Q336` · not captured | 12.1 | not captured | not captured | llm_confirmed (not captured) | t0001:row29:col2 |
| Proportional error (ASA) — Estimate | `Q316` · not captured | 0.41 | ASA | not captured | exact (not captured) | t0001:row31:col1 |
| Proportional error (ASA) — RSE (%) | `Q316` · not captured | 5.52 | ASA | not captured | exact (not captured) | t0001:row31:col2 |
| Proportional error (SA) — Estimate | `Q316` · not captured | 0.17 | SA | not captured | exact (not captured) | t0001:row32:col1 |
| Proportional error (SA) — RSE (%) | `Q316` · not captured | 5.2 | SA | not captured | exact (not captured) | t0001:row32:col2 |
| Additive error (TXB2) — Estimate | `Q317` · not captured | 2.58 | TXB2 | not captured | exact (not captured) | t0001:row33:col1 |
| Additive error (TXB2) — RSE (%) | `Q317` · not captured | 12.1 | TXB2 | not captured | exact (not captured) | t0001:row33:col2 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/44 fields) | 44 |

<details><summary>44 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | acetylsalicylic acid | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | sigmoid_emax | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q316]` | 0.41 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 5.52 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 0.17 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 5.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 2.58 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 12.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.0036 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | 1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.023 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 5.51 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | 26.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | 7.67 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | 0.49 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | 12.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q351]` | 2.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q351]` | 3.86 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q351]` | 0.24 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q351]` | 11.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q43]` | 0.69 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q43]` | 4.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q48]` | 2.32 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q48]` | 4.11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q48]` | 0.57 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q48]` | 2.97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q48]` | 11.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 1.09 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 14.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 0.22 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 21.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 0.053 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | 1.58 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q69]` | 0.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q78]` | 23.51 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q78]` | 12.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q78]` | 7.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q78]` | 2.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q78]` | 1.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q83]` | 2.81 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q83]` | 8.26 | not captured | only_one_extracted |

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
<sub>← back to [potassium salicylate](drugs/drug_potassium_salicylate/)</sub>
