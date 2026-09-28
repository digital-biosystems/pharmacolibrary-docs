<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;Potassium&quot;,&quot;href&quot;:&quot;drugs/drug_potassium/&quot;},{&quot;label&quot;:&quot;Wu_2023 \u00b7 PD Hepatic HSD-1 activity&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Hepatic HSD-1 activity — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Wu_2023`
- **model family:** `tmdd`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Wu N; Katz DA; An G et al. (2023). Clinical pharmacokinetics 62
  ·  DOI: [10.1007/s40262-023-01278-8](https://doi.org/10.1007/s40262-023-01278-8)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| CLa — Estimates | `Q358` · not captured | 10.1 | not captured | not captured | llm (not captured) | Tab2:row2:col3 |
| Ktr — Estimates | `Q306` · not captured | 8.82 | not captured | not captured | exact (not captured) | Tab2:row5:col3 |
| Ktr — RSE (%) | `Q306` · not captured | 11 | not captured | not captured | exact (not captured) | Tab2:row5:col4 |
| Kon — Estimates | `Q329` · not captured | 8.43 | not captured | not captured | exact (not captured) | Tab2:row6:col3 |
| Kon — RSE (%) | `Q329` · not captured | 6 | not captured | not captured | exact (not captured) | Tab2:row6:col4 |
| Koff — Estimates | `Q330` · not captured | 0.229 | not captured | not captured | exact (not captured) | Tab2:row7:col3 |
| Koff — RSE (%) | `Q330` · not captured | 31 | not captured | not captured | exact (not captured) | Tab2:row7:col4 |
| Rtotal — Estimates | `Q333` · not captured | 5460 | not captured | not captured | llm (not captured) | Tab2:row8:col3 |
| Rtotal — RSE (%) | `Q333` · not captured | 7 | not captured | not captured | llm (not captured) | Tab2:row8:col4 |
| γ — RSE (%) | `Q89` · not captured | 7 | not captured | not captured | llm (not captured) | Tab2:row9:col4 |
| Imax — Estimates | `Q323` · not captured | 99.9 | not captured | not captured | exact (not captured) | Tab2:row10:col3 |
| Imax — RSE (%) | `Q323` · not captured | 2 | not captured | not captured | exact (not captured) | Tab2:row10:col4 |
| IC50 — Estimates | `Q322` · not captured | 0.0787 | nM | not captured | exact (not captured) | Tab2:row11:col3 |
| IC50 — RSE (%) | `Q322` · not captured | 16 | nM | not captured | exact (not captured) | Tab2:row11:col4 |
| IIVVcentral — RSE (%) | `Q312` · not captured | 33 | not captured | not captured | llm (not captured) | Tab2:row12:col4 |
| IIVVcentral — Shrinkage (%) | `Q318` · not captured | 14 | not captured | not captured | llm (not captured) | Tab2:row12:col5 |
| IIVCL — RSE (%) | `Q312` · not captured | 84 | not captured | not captured | llm (not captured) | Tab2:row13:col4 |
| IIVCL — Shrinkage (%) | `Q318` · not captured | 21 | not captured | not captured | llm (not captured) | Tab2:row13:col5 |
| IIVKtr — RSE (%) | `Q338` · not captured | 38 | not captured | not captured | llm (not captured) | Tab2:row14:col4 |
| IIVKtr — Shrinkage (%) | `Q318` · not captured | 7 | not captured | not captured | llm (not captured) | Tab2:row14:col5 |
| IIVKoff — RSE (%) | `Q312` · not captured | 55 | not captured | not captured | llm (not captured) | Tab2:row15:col4 |
| IIVKoff — Shrinkage (%) | `Q318` · not captured | 15 | not captured | not captured | llm (not captured) | Tab2:row15:col5 |
| IIVRtotal — RSE (%) | `Q312` · not captured | 31 | not captured | not captured | llm (not captured) | Tab2:row16:col4 |
| IIVRtotal — Shrinkage (%) | `Q318` · not captured | 9 | not captured | not captured | llm (not captured) | Tab2:row16:col5 |
| IIVIC50 — RSE (%) | `Q322` · not captured | 63 | nM | not captured | llm (not captured) | Tab2:row17:col4 |
| IIVIC50 — Shrinkage (%) | `Q318` · not captured | 37 | not captured | not captured | llm (not captured) | Tab2:row17:col5 |
| σPK — RSE (%) | `Q315` · not captured | 3 | not captured | not captured | llm (not captured) | Tab2:row18:col4 |
| σPK — Shrinkage (%) | `Q318` · not captured | 7 | not captured | not captured | llm (not captured) | Tab2:row18:col5 |
| σPD — RSE (%) | `Q315` · not captured | 12 | not captured | not captured | llm (not captured) | Tab2:row19:col4 |
| σPD — Shrinkage (%) | `Q318` · not captured | 5 | not captured | not captured | llm (not captured) | Tab2:row19:col5 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/34 fields) | 34 |

<details><summary>34 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | SPI-62 | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | proportional | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | tmdd | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q306]` | 8.82 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q306]` | 11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 33 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 84 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 55 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 12 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 21 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 37 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q318]` | 5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.0787 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 63 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 99.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | 8.43 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | 6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q330]` | 0.229 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q330]` | 31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q333]` | 5460 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q333]` | 7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q338]` | 38 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 10.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 7 | not captured | only_one_extracted |

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
<sub>← back to [Potassium](drugs/drug_potassium/)</sub>
