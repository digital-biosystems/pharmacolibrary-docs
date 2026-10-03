<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;indobufen&quot;,&quot;href&quot;:&quot;drugs/drug_indobufen/&quot;},{&quot;label&quot;:&quot;Noh_2018 \u00b7 PD platelet aggregation inhibition&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Noh_2018_MPA&quot;,&quot;label&quot;:&quot;Noh_2018 \u00b7 MPA&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_indobufen/pd_Noh_2018_MPA.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# platelet aggregation inhibition — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.781). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** S-indobufen and R-indobufen (measured concentrations) drive platelet aggregation inhibition (in %): direct sigmoid Emax (Hill) effect.

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> In vitro, S- and R-indobufen concentrations (0–128 mg/L) inhibit collagen-induced platelet aggregation (MPA, %) in platelet-rich plasma from 24 healthy subjects, described by an inhibitory sigmoid Imax response-surface model with no enantiomer interaction (ISR fixed at 0). S-indobufen was more potent (C50 6.75 mg/L, RSE 26.8%) than R-indobufen (C50 48.7 mg/L, RSE 3.6%), with Imax 6.38 (RSE 28.8%); the paper does not state gamma, kin/kout, or ke0 values.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Noh_2018`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Noh YH et al., Prediction of the human, Translational and clinical… (2018)
  ·  DOI: [10.12793/tcp.2018.26.4.160](https://doi.org/10.12793/tcp.2018.26.4.160)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | C50, S — Estimate | `Q321` · not captured | 6.75 | mg/L | not captured | llm_confirmed (not captured) | T1:row1:col1 |
| PD (effect) | C50, S — RSE (%) | `Q321` · not captured | 26.8 | mg/L | not captured | llm_confirmed (not captured) | T1:row1:col2 |
| PD (effect) | C50, S — Median | `Q321` · not captured | 5.66 | mg/L | not captured | llm_confirmed (not captured) | T1:row1:col3 |
| PD (effect) | C50, R — Estimate | `Q321` · not captured | 48.7 | mg/L | not captured | llm_confirmed (not captured) | T1:row2:col1 |
| PD (effect) | C50, R — RSE (%) | `Q321` · not captured | 3.6 | mg/L | not captured | llm_confirmed (not captured) | T1:row2:col2 |
| PD (effect) | C50, R — Median | `Q321` · not captured | 48.33 | mg/L | not captured | llm_confirmed (not captured) | T1:row2:col3 |
| PD (effect) | Imax — Estimate | `Q323` · not captured | 6.38 | not captured | not captured | exact (not captured) | T1:row4:col1 |
| PD (effect) | Imax — RSE (%) | `Q323` · not captured | 28.8 | not captured | not captured | exact (not captured) | T1:row4:col2 |
| PD (effect) | Imax — Median | `Q323` · not captured | 8.52 | not captured | not captured | exact (not captured) | T1:row4:col3 |
| variability | IIV of C50, S — Estimate | `Q312` · not captured | 200.1 | CV, % | not captured | llm_confirmed (not captured) | T1:row6:col1 |
| variability | IIV of C50, S — RSE (%) | `Q312` · not captured | 13.4 | CV, % | not captured | llm_confirmed (not captured) | T1:row6:col2 |
| variability | IIV of C50, S — Median | `Q312` · not captured | 195.2 | CV, % | not captured | llm_confirmed (not captured) | T1:row6:col3 |
| variability | IIV of C50,R — Estimate | `Q312` · not captured | 8.4 | CV, % | not captured | llm_confirmed (not captured) | T1:row7:col1 |
| variability | IIV of C50,R — RSE (%) | `Q312` · not captured | 85.8 | CV, % | not captured | llm_confirmed (not captured) | T1:row7:col2 |
| variability | IIV of C50,R — Median | `Q312` · not captured | 7.2 | CV, % | not captured | llm_confirmed (not captured) | T1:row7:col3 |
| variability | IIV of γ — Estimate | `Q312` · not captured | 45.5 | CV, % | not captured | llm_confirmed (not captured) | T1:row8:col1 |
| variability | IIV of γ — RSE (%) | `Q312` · not captured | 26.0 | CV, % | not captured | llm_confirmed (not captured) | T1:row8:col2 |
| variability | IIV of γ — Median | `Q312` · not captured | 44.2 | CV, % | not captured | llm_confirmed (not captured) | T1:row8:col3 |
| variability | IIV of Imax — Estimate | `Q312` · not captured | 98.4 | CV, % | not captured | llm_corrected (not captured) | T1:row9:col1 |
| variability | IIV of Imax — RSE (%) | `Q312` · not captured | 43.1 | CV, % | not captured | llm_corrected (not captured) | T1:row9:col2 |
| PD (effect) | IIV of Imax — Median | `Q323` · not captured | 86.9 | CV, % | not captured | llm_confirmed (not captured) | T1:row9:col3 |
| variability | ε (additive) — Estimate | `Q317` · not captured | 12.10 | additive | not captured | llm (not captured) | T1:row11:col1 |
| variability | ε (additive) — RSE (%) | `Q317` · not captured | 7.2 | additive | not captured | llm (not captured) | T1:row11:col2 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Indobufen_Noh2018_PD_mpa` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | -6.38 % | -0.0638 1 |
| EC50 | 6.75 mg/L | 0.00675 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = -0.0319, `at_inf` = -0.0638

Deviations:

- `defaulted_parameters` — E0, gamma
- `pd_binding_imax_as_negative_emax` — Imax (Q323) enters SigmoidEmaxSweep as −Emax

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | pass | shared PD_SigmoidEmaxSweep FMU reproduces the reference points (worst 0.00%) |
| `T2_direction` | pass | curve direction matches effect_direction |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Advisory:

- defaulted: E0 — a row the paper has and the record lacks


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.781 (25/32 fields) | 7 |

<details><summary>7 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | S-indobufen and R-indobufen | indobufen (S- and R- enantiomers) | mismatch |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 86.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 12.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q323]` | 86.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 2.54 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 11.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 2.55 | only_one_extracted |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_indobufen/Indobufen_Noh2018_PD_mpa/Indobufen_Noh2018_PD_mpa_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_indobufen/Indobufen_Noh2018_PD_mpa/Indobufen_Noh2018_PD_mpa_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `Indobufen_Noh2018_PD_mpa_params.json` · controls `Indobufen_Noh2018_PD_mpa_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [indobufen](drugs/drug_indobufen/)</sub>
