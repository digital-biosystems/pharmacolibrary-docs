<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;captopril&quot;,&quot;href&quot;:&quot;drugs/drug_captopril/&quot;},{&quot;label&quot;:&quot;Kiriyama_2024 \u00b7 PD QT interval&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Captopril_Hu2025_reference&quot;,&quot;label&quot;:&quot;Hu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_captopril/Captopril_Hu2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# QT interval — PD  <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.541). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## What this record describes

**As extracted:** Nifedipine and captopril (parent plasma concentrations; no metabolite driver) (measured concentrations) drive QT interval (in ms): indirect response — drug inhibits the production of QT interval.

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> Captopril plasma concentration (ng/mL) acts on the QT interval (ms) in spontaneously hypertensive rats via a sigmoid Emax model with an effect compartment (C3, dC3/dt = ke0×C1 − ke0×C3), described in the paper as E = E0 + Emax·C3^γ/(EC50^γ + C3^γ) rather than the indirect-response form in the record. Key parameters for QT were E0 = 81.2 ms, Emax = 41.9, EC50,2 = 0.857 ng/mL (EC50,1 = 76.3 ng/mL), γ = 0.1347, and kEHS,out = 75.8, with sensitivity analysis showing low sensitivity of both ke0 and EC50 for the captopril QT profile.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Kiriyama_2024`
- **model family:** `indirect_response_i`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024)
  ·  DOI: [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | Nifedipine — BP | `Q38` · not captured | 0.135 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row2:col3 |
| PD (effect) | Nifedipine — QT | `Q320` · not captured | 0.0117 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row2:col9 |
| PD (effect) | kEHS,out — BP | `Q328` · not captured | 0.0119 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row4:col2 |
| PD (effect) | kEHS,out — HR | `Q328` · not captured | 306 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row4:col5 |
| PD (effect) | kEHS,out — QT | `Q328` · not captured | 75.8 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row4:col8 |
| PD (effect) | EC50,1 — BP | `Q321` · not captured | 86.3 | ng/mL | not captured | llm_confirmed (not captured) | prp21249-tbl-0003:row5:col2 |
| PD (effect) | EC50,1 — HR | `Q321` · not captured | 63.3 | ng/mL | not captured | llm_confirmed (not captured) | prp21249-tbl-0003:row5:col5 |
| PD (effect) | EC50,1 — QT | `Q321` · not captured | 76.3 | ng/mL | not captured | llm_confirmed (not captured) | prp21249-tbl-0003:row5:col8 |
| PD (effect) | EC50,2 — BP | `Q321` · not captured | 1450 | ng/mL | not captured | llm_confirmed (not captured) | prp21249-tbl-0003:row6:col2 |
| PD (effect) | EC50,2 — HR | `Q321` · not captured | 0.931 | ng/mL | not captured | llm_confirmed (not captured) | prp21249-tbl-0003:row6:col5 |
| PD (effect) | EC50,2 — QT | `Q321` · not captured | 0.857 | ng/mL | not captured | llm_confirmed (not captured) | prp21249-tbl-0003:row6:col8 |
| PK (driver) | α — BP | `Q67` · not captured | 1.17 | not captured | not captured | exact (not captured) | prp21249-tbl-0003:row7:col2 |
| PK (driver) | α — HR | `Q67` · not captured | 268.9 | not captured | not captured | exact (not captured) | prp21249-tbl-0003:row7:col5 |
| PK (driver) | α — QT | `Q67` · not captured | 191.1 | not captured | not captured | exact (not captured) | prp21249-tbl-0003:row7:col8 |
| PD (effect) | E0 — BP | `Q324` · not captured | 96.8 | not captured | not captured | exact (not captured) | prp21249-tbl-0003:row8:col2 |
| PD (effect) | Emax,1 — BP | `Q320` · not captured | 67.1 | not captured | not captured | llm_confirmed (not captured) | prp21249-tbl-0003:row9:col2 |
| PK (driver) | AIC — BP | `Q88` · not captured | 151.4 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row11:col2 |
| PD (effect) | Captopril — BP | `Q320` · not captured | 0.0400 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row12:col3 |
| PD (effect) | E0 — BP | `Q324` · not captured | 105 | not captured | not captured | exact (not captured) | prp21249-tbl-0003:row14:col2 |
| PD (effect) | E0 — HR | `Q324` · not captured | 312.8 | not captured | not captured | exact (not captured) | prp21249-tbl-0003:row14:col5 |
| PD (effect) | E0 — QT | `Q324` · not captured | 81.2 | not captured | not captured | exact (not captured) | prp21249-tbl-0003:row14:col8 |
| PD (effect) | Emax — BP | `Q320` · not captured | 41.8 | not captured | not captured | exact (not captured) | prp21249-tbl-0003:row15:col2 |
| PD (effect) | Emax — HR | `Q320` · not captured | 80.4 | not captured | not captured | exact (not captured) | prp21249-tbl-0003:row15:col5 |
| PD (effect) | Emax — QT | `Q320` · not captured | 41.9 | not captured | not captured | exact (not captured) | prp21249-tbl-0003:row15:col8 |
| PD (effect) | γ — BP | `Q325` · not captured | 0.662 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row16:col2 |
| PK (driver) | γ — HR | `Q89` · not captured | 1.4 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row16:col5 |
| PD (effect) | γ — QT | `Q335` · not captured | 0.1347 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row16:col8 |
| PK (driver) | AIC — BP | `Q88` · not captured | 213.2 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row17:col2 |
| model term | AIC — QT | `Q900` · not captured | 220.0 | not captured | not captured | llm (not captured) | prp21249-tbl-0003:row17:col8 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Captopril_Kiriyama2024_PD_qt` — turnover (indirect response type I), `response = E0*(1 - Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 96.8 ms | 0.0968 s |
| Emax | 0.0117 | — |
| EC50 | 86.3 ng/mL | 8.63e-05 kg/m3 |
| gamma | 0.662 | — |

Closed-form check points (response, SI): `at_0` = 0.0968, `at_EC50` = 0.09623, `at_inf` = 0.09567

## Review

Verdict <span class="pk-badge pk-badge--green">reviewed — candidate</span>

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | curve direction matches effect_direction |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.541 (20/37 fields) | 17 |

<details><summary>17 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | nifedipine and captopril (parent plasma concentrations; no metabolite driver) | nifedipine and captopril | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | unknown | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | additive | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_i | sigmoid_emax | mismatch |
| `gpt-oss:120b` | `parameters[Q320]` | 0.0400 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 0.0117 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.1347 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 0.0119 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.0119 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | 0.1347 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q343]` | not captured | 1.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 0.0400 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | 0.135 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 151.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 213.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 1.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q900]` | 220.0 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_captopril/Captopril_Kiriyama2024_PD_qt/Captopril_Kiriyama2024_PD_qt_modelica.zip" download>Captopril_Kiriyama2024_PD_qt_modelica.zip</a> <span class="pk-size">(2.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_captopril/Captopril_Kiriyama2024_PD_qt/Captopril_Kiriyama2024_PD_qt_matlab.zip" download>Captopril_Kiriyama2024_PD_qt_matlab.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_captopril/Captopril_Kiriyama2024_PD_qt/Captopril_Kiriyama2024_PD_qt_sbml.zip" download>Captopril_Kiriyama2024_PD_qt_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_captopril/Captopril_Kiriyama2024_PD_qt/Captopril_Kiriyama2024_PD_qt_cellml.zip" download>Captopril_Kiriyama2024_PD_qt_cellml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [captopril](drugs/drug_captopril/)</sub>
