<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Icatibant_Wang2021_typical_value&quot;,&quot;label&quot;:&quot;Wang_2021_typical_value&quot;,&quot;href&quot;:&quot;drugs/drug_icatibant/Icatibant_Wang2021_typical_value.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Icatibant_Wang2021_typical_value_rse&quot;,&quot;label&quot;:&quot;Wang_2021_typical_value_rse&quot;,&quot;href&quot;:&quot;drugs/drug_icatibant/Icatibant_Wang2021_typical_value_rse.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Wang_2021`
- **model family:** `categorical`
- **driver:** `cited_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

## Citation
Wang Y; Jomphe C; Marier JF; Martin P et al. (2021). Journal of clinical pharmacology 61
  ·  DOI: [10.1002/jcph.1768](https://doi.org/10.1002/jcph.1768)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| ka, h–1 — Typical Value | `Q49` · not captured | 3.27 | h–1 | not captured | exact (not captured) | jcph1768-tbl-0002:row1:col1 |
| ka, h–1 — % RSE | `Q49` · not captured | 3.50 | h–1 | not captured | exact (not captured) | jcph1768-tbl-0002:row1:col2 |
| ka, h–1 — Between‐Subject Variability, % (%RSE) | `Q49` · not captured | 35.3 | h–1 | not captured | exact (not captured) | jcph1768-tbl-0002:row1:col3 |
| ka, h–1 — Shrinkage (%) | `Q49` · not captured | 19.1 | h–1 | not captured | exact (not captured) | jcph1768-tbl-0002:row1:col4 |
| tlag, h — Typical Value | `Q83` · not captured | 0.0426 | h | not captured | exact (not captured) | jcph1768-tbl-0002:row2:col1 |
| tlag, h — % RSE | `Q83` · not captured | 10.6 | h | not captured | exact (not captured) | jcph1768-tbl-0002:row2:col2 |
| tlag, h — Between‐Subject Variability, % (%RSE) | `Q83` · not captured | 55.6 | h | not captured | exact (not captured) | jcph1768-tbl-0002:row2:col3 |
| tlag, h — Shrinkage (%) | `Q83` · not captured | 34.2 | h | not captured | exact (not captured) | jcph1768-tbl-0002:row2:col4 |
| Cl/F, L/h — Between‐Subject Variability, % (%RSE) | `Q27` · not captured | 22.7 | L/h | not captured | exact (not captured) | jcph1768-tbl-0002:row3:col3 |
| Cl/F, L/h — Shrinkage (%) | `Q27` · not captured | 2.0 | L/h | not captured | exact (not captured) | jcph1768-tbl-0002:row3:col4 |
| Vc/F, L — Between‐Subject Variability, % (%RSE) | `Q290` · not captured | 26.9 | L | not captured | exact (not captured) | jcph1768-tbl-0002:row7:col3 |
| Vc/F, L — Shrinkage (%) | `Q290` · not captured | 5.8 | L | not captured | exact (not captured) | jcph1768-tbl-0002:row7:col4 |
| Clp/F, L/h — Typical Value | `Q27` · not captured | 0.398 | L/h | not captured | special_case (not captured) | jcph1768-tbl-0002:row10:col1 |
| Clp/F, L/h — % RSE | `Q27` · not captured | 9.40 | L/h | not captured | special_case (not captured) | jcph1768-tbl-0002:row10:col2 |
| Clp/F, L/h — Between‐Subject Variability, % (%RSE) | `Q27` · not captured | 107.8 | L/h | not captured | special_case (not captured) | jcph1768-tbl-0002:row10:col3 |
| Clp/F, L/h — Shrinkage (%) | `Q27` · not captured | 19.2 | L/h | not captured | special_case (not captured) | jcph1768-tbl-0002:row10:col4 |
| Vp/F, L — Typical Value | `Q82` · not captured | 1.75 | L | not captured | exact (not captured) | jcph1768-tbl-0002:row12:col1 |
| Vp/F, L — % RSE | `Q82` · not captured | 5.50 | L | not captured | exact (not captured) | jcph1768-tbl-0002:row12:col2 |
| Vp/F, L — Between‐Subject Variability, % (%RSE) | `Q82` · not captured | 53.9 | L | not captured | exact (not captured) | jcph1768-tbl-0002:row12:col3 |
| Vp/F, L — Shrinkage (%) | `Q82` · not captured | 23.5 | L | not captured | exact (not captured) | jcph1768-tbl-0002:row12:col4 |
| Proportional error, % — Typical Value | `Q316` · not captured | 13.0 | not captured | not captured | llm_confirmed (not captured) | jcph1768-tbl-0002:row14:col1 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/27 fields) | 27 |

<details><summary>27 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | icatibant | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | stimulation | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | categorical | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q27]` | 0.398 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 9.40 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 107.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 19.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 22.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q27]` | 2.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q290]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q290]` | 26.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q290]` | 5.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | 13.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 3.27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 3.50 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 35.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 19.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q82]` | 1.75 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q82]` | 5.50 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q82]` | 53.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q82]` | 23.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q83]` | 0.0426 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q83]` | 10.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q83]` | 55.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q83]` | 34.2 | not captured | only_one_extracted |

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
<sub>← back to [icatibant](drugs/drug_icatibant/)</sub>
