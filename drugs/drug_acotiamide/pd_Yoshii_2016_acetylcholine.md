<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;acotiamide&quot;,&quot;href&quot;:&quot;drugs/drug_acotiamide/&quot;},{&quot;label&quot;:&quot;Yoshii_2016 \u00b7 PD name&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Acotiamide (measured concentrations) drives name (in unknown): indirect response — drug inhibits the loss of name.

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> Acotiamide concentration in the stomach precursor pool inhibits the elimination (AChE-mediated hydrolysis) of acetylcholine in rat stomach, an indirect response Model II (kin 0.00314 nmol/g tissue/min, kout 0.00415 min−1) with IC50 1.79 μM; ACh rose to 131% of baseline at 2 h.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Yoshii_2016`
- **model family:** `indirect_response_ii`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Yoshii K et al., Physiologically-Based Pharmacokinetic a…, Pharmaceutical research (2016)
  ·  DOI: [10.1007/s11095-015-1787-y](https://doi.org/10.1007/s11095-015-1787-y)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | V1 (ml/kg) — Value | `Q63` · not captured | 302 | ml/kg | not captured | exact (not captured) | Tab1:row1:col1 |
| model term | k1 (min−1) — Value | `Q900` · not captured | 0.126 | min−1 | not captured | llm (not captured) | Tab1:row2:col1 |
| PK (driver) | k2 (min−1) — Value | `Q346` · not captured | 0.0313 | min−1 | not captured | llm (not captured) | Tab1:row3:col1 |
| PK (driver) | CLtot (ml/min/kg) — Value | `Q22` · not captured | 56.9 | ml/min/kg | not captured | exact (not captured) | Tab1:row4:col1 |
| PK (driver) | Ve (ml) — Value | `Q61` · not captured | 0.441 | ml | not captured | llm (not captured) | Tab1:row5:col1 |
| PK (driver) | fb · PSinf (ml/min) — Value | `Q358` · not captured | 0.174 | ml/min | not captured | llm (not captured) | Tab1:row7:col1 |
| PK (driver) | Qt (ml/min) — Value | `Q30` · not captured | 1.1 | ml/min | not captured | llm (not captured) | Tab1:row8:col1 |
| PK (driver) | VT (ml) — Value | `Q61` · not captured | 0.133 | ml | not captured | llm (not captured) | Tab1:row9:col1 |
| PK (driver) | kass (min−1) — Value | `Q49` · not captured | 0.0000320 | min−1 | not captured | llm (not captured) | Tab1:row11:col1 |
| PD (effect) | kdis (min−1) — Value | `Q326` · not captured | 0.00000485 | min−1 | not captured | llm (not captured) | Tab1:row12:col1 |
| PD (effect) | IC50 (μM) — Value | `Q322` · not captured | 1.79 | μM | not captured | exact (not captured) | Tab1:row13:col1 |
| PD (effect) | kin (nmol/g of tissue/min) — Value | `Q327` · not captured | 0.00314 | nmol/g of tissue/min | not captured | exact (not captured) | Tab1:row14:col1 |
| PD (effect) | kout (min−1) — Value | `Q328` · not captured | 0.00415 | min−1 | not captured | exact (not captured) | Tab1:row15:col1 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Acotiamide_Yoshii2016_PD_acetylcholine` — turnover (indirect response type II), `response = E0/(1 - Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0.7566 | — |
| Emax | 1 | — |
| EC50 | 1.79 μM | — |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0.7566, `at_EC50` = 1.513, `at_inf` = inf

Deviations:

- `defaulted_parameters` — Emax, gamma
- `pd_binding_e0_from_kin_kout` — no baseline row; E0 = kin/kout (0.00314/0.00415 = 0.7566) — the paper's stated baseline may differ
- `pd_binding_exposure_unit_unresolved` — 'μM' — the x axis is in the paper's unit, not SI

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | skipped | effect_direction 'inhibition' |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: Emax |

Advisory:

- defaulted: Emax — a row the paper has and the record lacks
- exposure unit not resolved to SI — the x axis is in the paper's unit


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/17 fields) | 17 |

<details><summary>17 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | acotiamide | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_ii | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q22]` | 56.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 1.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 1.79 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 0.00000485 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 0.00314 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.00415 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q346]` | 0.0313 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.174 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 0.0000320 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 0.441 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 0.133 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 302 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q900]` | 0.126 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_acotiamide/Acotiamide_Yoshii2016_PD_acetylcholine/Acotiamide_Yoshii2016_PD_acetylcholine_modelica.zip" download>Acotiamide_Yoshii2016_PD_acetylcholine_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_acotiamide/Acotiamide_Yoshii2016_PD_acetylcholine/Acotiamide_Yoshii2016_PD_acetylcholine_matlab.zip" download>Acotiamide_Yoshii2016_PD_acetylcholine_matlab.zip</a> <span class="pk-size">(2.0 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_acotiamide/Acotiamide_Yoshii2016_PD_acetylcholine/Acotiamide_Yoshii2016_PD_acetylcholine_sbml.zip" download>Acotiamide_Yoshii2016_PD_acetylcholine_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_acotiamide/Acotiamide_Yoshii2016_PD_acetylcholine/Acotiamide_Yoshii2016_PD_acetylcholine_cellml.zip" download>Acotiamide_Yoshii2016_PD_acetylcholine_cellml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [acotiamide](drugs/drug_acotiamide/)</sub>
