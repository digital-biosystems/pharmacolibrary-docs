<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Metamizole_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Metamizole_Morath2025_reference&quot;,&quot;label&quot;:&quot;Morath_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Morath2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Metamizole_Stoschus2025_reference&quot;,&quot;label&quot;:&quot;Stoschus_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Stoschus2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Metamizole_Blaser2021_metamizole_n_8&quot;,&quot;label&quot;:&quot;Blaser_2021_metamizole_n_8&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Blaser2021_metamizole_n_8.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Metamizole_Blaser2021_naproxen_n_7&quot;,&quot;label&quot;:&quot;Blaser_2021_naproxen_n_7&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Blaser2021_naproxen_n_7.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Metamizole_Ziesenitz2019_reference&quot;,&quot;label&quot;:&quot;Ziesenitz_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/Metamizole_Ziesenitz2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Blaser_2021`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Blaser LS; Duthaler U; Bouitbir J; Leuppi-Taegtmeyer AB; Liakoni E; Dolf R; et al. et al. (2021). Frontiers in pharmacology 12
  ·  DOI: [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Ka (1/h) — Metamizole (n = 8) | `Q49` · not captured | 2.528 | n = 8 | not captured | exact (not captured) | T3:row1:col1 |
| Ka (1/h) — Naproxen (n = 7) | `Q49` · not captured | 0.538 | n = 7 | not captured | exact (not captured) | T3:row1:col3 |
| V1/F (L) — Metamizole (n = 8) | `Q290` · not captured | 71.2 | L | not captured | exact (not captured) | T3:row2:col1 |
| V1/F (L) — Naproxen (n = 7) | `Q290` · not captured | 3.27 | L | not captured | exact (not captured) | T3:row2:col3 |
| k12 (1/h) — Metamizole (n = 8) | `Q301` · not captured | 0.030 | n = 8 | not captured | exact (not captured) | T3:row3:col1 |
| k12 (1/h) — Naproxen (n = 7) | `Q301` · not captured | 0.185 | n = 7 | not captured | exact (not captured) | T3:row3:col3 |
| k14 (1/h) — Metamizole (n = 8) | `Q347` · not captured | 0.006 | n = 8 | not captured | exact (not captured) | T3:row4:col1 |
| k14 (1/h) — Naproxen (n = 7) | `Q347` · not captured | 1.334 | n = 7 | not captured | exact (not captured) | T3:row4:col3 |
| k10 (1/h) — Metamizole (n = 8) | `Q47` · not captured | 0.178 | n = 8 | not captured | exact (not captured) | T3:row5:col1 |
| k10 (1/h) — Naproxen (n = 7) | `Q47` · not captured | 0.213 | n = 7 | not captured | exact (not captured) | T3:row5:col3 |
| V2/F (L) — Metamizole (n = 8) | `Q82` · not captured | 35.6 | L | not captured | exact (not captured) | T3:row6:col1 |
| k23 (1/h) — Metamizole (n = 8) | `Q48` · not captured | 0.552 | n = 8 | not captured | exact (not captured) | T3:row7:col1 |
| k23 (1/h) — Naproxen (n = 7) | `Q48` · not captured | 0.009 | n = 7 | not captured | exact (not captured) | T3:row7:col3 |
| k24 (1/h) — Metamizole (n = 8) | `Q48` · not captured | 0.033 | n = 8 | not captured | exact (not captured) | T3:row8:col1 |
| k24 (1/h) — Naproxen (n = 7) | `Q48` · not captured | 2.275 | n = 7 | not captured | exact (not captured) | T3:row8:col3 |
| k20 (1/h) — Metamizole (n = 8) | `Q358` · not captured | 0.008 | n = 8 | not captured | llm (not captured) | T3:row9:col1 |
| V3/F (L) — Metamizole (n = 8) | `Q78` · not captured | 55.1 | L | not captured | exact (not captured) | T3:row10:col1 |
| V4/F (L) — Metamizole (n = 8) | `Q78` · not captured | 11.5 | L | not captured | llm (not captured) | T3:row12:col1 |
| ke0 (1/h) — Metamizole (n = 8) | `Q326` · not captured | 0.012 | n = 8 | not captured | exact (not captured) | T3:row14:col1 |
| T1/2 K01 (h) — Metamizole (n = 8) | `Q57` · not captured | 0.36 | h | not captured | llm_confirmed (not captured) | T3:row15:col1 |
| T1/2 K01 (h) — Naproxen (n = 7) | `Q57` · not captured | 1.708 | h | not captured | llm_confirmed (not captured) | T3:row15:col3 |
| T1/2 4-MAA (h) — Metamizole (n = 8) | `Q57` · not captured | 3.43 | h | not captured | llm_confirmed (not captured) | T3:row16:col1 |
| T1/2 4-AA (h) — Metamizole (n = 8) | `Q57` · not captured | 2.39 | h | not captured | llm_confirmed (not captured) | T3:row17:col1 |
| T1/2 4-AA (h) — Naproxen (n = 7) | `Q57` · not captured | 2.14 | h | not captured | llm_confirmed (not captured) | T3:row17:col3 |
| T1/2 4-AAA (h) — Metamizole (n = 8) | `Q57` · not captured | 10.33 | h | not captured | llm_confirmed (not captured) | T3:row18:col1 |
| T1/2 4-AAA (h) — Naproxen (n = 7) | `Q57` · not captured | 1.00 | h | not captured | llm_confirmed (not captured) | T3:row18:col3 |
| T1/2 4-FAA (h) — Metamizole (n = 8) | `Q57` · not captured | 6.95 | h | not captured | llm_confirmed (not captured) | T3:row19:col1 |
| EC50 (µM) — Metamizole (n = 8) | `Q321` · not captured | 0.69 | µM | not captured | exact (not captured) | T3:row20:col1 |
| EC50 (µM) — Naproxen (n = 7) | `Q321` · not captured | 0.034 | µM | not captured | exact (not captured) | T3:row20:col3 |
| E0 b — Metamizole (n = 8) | `Q324` · not captured | 101.6 | n = 8 | not captured | llm_confirmed (not captured) | T3:row22:col1 |
| E0 b — Naproxen (n = 7) | `Q324` · not captured | 167.16 | n = 7 | not captured | llm_confirmed (not captured) | T3:row22:col3 |
| Emax b — Metamizole (n = 8) | `Q320` · not captured | 61.3 | n = 8 | not captured | llm_confirmed (not captured) | T3:row23:col1 |
| Emax b — Naproxen (n = 7) | `Q320` · not captured | 133.56 | n = 7 | not captured | llm_confirmed (not captured) | T3:row23:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.0 (0/49 fields) | 49 |

<details><summary>49 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | 4-methylaminoantipyrine (4-MAA) | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | sigmoid_emax | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q290]` | 71.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q290]` | 3.27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q301]` | 0.030 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q301]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q301]` | 0.185 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 61.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 133.56 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.69 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.034 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 101.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 167.16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 0.012 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q347]` | 0.006 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q347]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q347]` | 1.334 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.008 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 0.178 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 0.213 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q48]` | 0.552 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q48]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q48]` | 0.009 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q48]` | 0.033 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q48]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q48]` | 2.275 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 2.528 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 0.538 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 0.36 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 1.708 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 3.43 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 2.39 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 2.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 10.33 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 1.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 6.95 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q78]` | 55.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q78]` | 11.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q82]` | 35.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q82]` | not captured | not captured | only_one_extracted |

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
<sub>← back to [Metamizole](drugs/drug_metamizole/)</sub>
