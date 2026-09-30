<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;rifaximin&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 PD name&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifaximin_Francis2019_reference&quot;,&quot;label&quot;:&quot;Francis_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/Rifaximin_Francis2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifaximin_Wang2021_reference&quot;,&quot;label&quot;:&quot;Wang_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/Rifaximin_Wang2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.63). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Rifaximin (concentrations from this paper's PK model) drives name (in log10CFU/gland): direct sigmoid Emax (Hill) effect.

**Model:** No model was generated from this record.

> In the mouse mastitis model, rifaximin (intramammary doses 25–800 μg/gland) inhibits S. aureus growth in mammary glands, with effect measured as Δlog10CFU/gland; the paper does not state a mechanistic kin/kout or effect-compartment model, but links PK to PD via a sigmoid inhibitory Emax model driven by AUC24/MIC90 (R2 = 0.97; %T&gt;MIC was poor, R2 = 0.57). Key values: a 2 log10CFU/gland reduction (Emax plateau) corresponded to AUC24/MIC of 14,281.63 h, and a 1.5 log10CFU/gland effect corresponded to AUC24/MIC of 8,173.48 h; PK parameters included V1 = 2.15, V2 = 0.46, Cl1 = 0.29, Cl2 = 0.89, and α = 2.38 (units not stated).
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Wang_2021`
- **model family:** `sigmoid_emax`
- **driver:** `pk_record`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Wang H; Chen C; Chen X; Zhang J; Liu Y; Li X et al. (2021). Frontiers in veterinary science 8
  ·  DOI: [10.3389/fvets.2021.651369](https://doi.org/10.3389/fvets.2021.651369)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | V1 — Estimate | `Q63` · not captured | 2.15 | not captured | not captured | exact (not captured) | T4:row1:col1 |
| PK (driver) | V1 — SD | `Q63` · not captured | 0.07 | not captured | not captured | exact (not captured) | T4:row1:col3 |
| PK (driver) | V1 — CV% | `Q63` · not captured | 3.22 | not captured | not captured | exact (not captured) | T4:row1:col4 |
| PK (driver) | V2 — Estimate | `Q64` · not captured | 0.46 | not captured | not captured | exact (not captured) | T4:row2:col1 |
| PK (driver) | V2 — SD | `Q64` · not captured | 0.09 | not captured | not captured | exact (not captured) | T4:row2:col3 |
| PK (driver) | V2 — CV% | `Q64` · not captured | 18.84 | not captured | not captured | exact (not captured) | T4:row2:col4 |
| PK (driver) | Cl1 — Estimate | `Q358` · not captured | 0.29 | not captured | not captured | llm (not captured) | T4:row3:col1 |
| PK (driver) | Cl1 — SD | `Q358` · not captured | 0.00 | not captured | not captured | llm (not captured) | T4:row3:col3 |
| PK (driver) | Cl1 — CV% | `Q358` · not captured | 1.57 | not captured | not captured | llm (not captured) | T4:row3:col4 |
| PK (driver) | Cl2 — Estimate | `Q30` · not captured | 0.89 | not captured | not captured | special_case (not captured) | T4:row4:col1 |
| PK (driver) | Cl2 — SD | `Q30` · not captured | 0.34 | not captured | not captured | special_case (not captured) | T4:row4:col3 |
| PK (driver) | Cl2 — CV% | `Q30` · not captured | 37.77 | not captured | not captured | special_case (not captured) | T4:row4:col4 |
| PK (driver) | α — Estimate | `Q67` · not captured | 2.38 | not captured | not captured | exact (not captured) | T4:row5:col1 |
| PK (driver) | α — SD | `Q67` · not captured | 0.84 | not captured | not captured | exact (not captured) | T4:row5:col3 |
| PK (driver) | α — CV% | `Q67` · not captured | 35.39 | not captured | not captured | exact (not captured) | T4:row5:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.63 (17/27 fields) | 10 |

<details><summary>10 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 0.29 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 0.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | 1.57 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.11 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | not captured | 0.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | not captured | 2.77 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 1.57 | not captured | only_one_extracted |

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
<sub>← back to [rifaximin](drugs/drug_rifaximin/)</sub>
