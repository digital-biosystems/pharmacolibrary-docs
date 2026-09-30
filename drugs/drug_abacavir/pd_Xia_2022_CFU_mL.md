<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;abacavir&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/&quot;},{&quot;label&quot;:&quot;Xia_2022 \u00b7 PD bacterial numbers&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abacavir_Chupradit2024_reference&quot;,&quot;label&quot;:&quot;Chupradit_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chupradit2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Chandasana2024v2_reference&quot;,&quot;label&quot;:&quot;Chandasana_2024_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chandasana2024v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Fauchet2014_reference&quot;,&quot;label&quot;:&quot;Fauchet_2014_reference&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Fauchet2014_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Hurwitz2008_reference&quot;,&quot;label&quot;:&quot;Hurwitz_2008_reference&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Hurwitz2008_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Zhao2013_reference&quot;,&quot;label&quot;:&quot;Zhao_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Zhao2013_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# bacterial numbers — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Tulathromycin (measured concentrations) drives bacterial numbers (in continuous): direct Emax (saturable) effect.

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> In vitro time-kill data for tulathromycin against M. hyopneumoniae were fitted with a sigmoid inhibitory Emax model relating bacterial numbers (Log10 CFU/mL) to exposure indices (AUC0-72h/MIC, Cmax/MIC, %T&gt;MIC); the effect is a direct concentration-dependent inhibition of bacterial numbers (no kin/kout or effect-compartment mechanism given). For AUC0-72h/MIC, Emax = -0.47 Log10 CFU/mL, E0 = -6.05 Log10 CFU/mL, EC50 = 1303.91 h, slope N = 0.38 (R2 = 0.9929); for Cmax/MIC, Emax = -0.47, E0 = -6.32, EC50 = 8.21, N = 0.41; for %T&gt;MIC, Emax = -0.46 Log10 CFU/mL, E0 = -4.12 Log10 CFU/mL, EC50 = 17.45, N = 0.80.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Xia_2022`
- **model family:** `emax`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

## Citation
Xia X; Yang L; Ling Y; Yu J; Ding H et al. (2022). Frontiers in veterinary science 9
  ·  DOI: [10.3389/fvets.2022.801800](https://doi.org/10.3389/fvets.2022.801800)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | AUC 0-72 /MIC (h) — E max (Log 10 CFU/mL) | `Q88` · not captured | -0.47 | h | not captured | boundary (not captured) | tab_1:row1:col1 |
| PK (driver) | AUC 0-72 /MIC (h) — EC 50 | `Q88` · not captured | 1303.91 | h | not captured | boundary (not captured) | tab_1:row1:col2 |
| PK (driver) | AUC 0-72 /MIC (h) — E 0 (Log 10 CFU/mL) | `Q88` · not captured | -6.05 | h | not captured | boundary (not captured) | tab_1:row1:col3 |
| PK (driver) | AUC 0-72 /MIC (h) — Slope (N) | `Q88` · not captured | 0.38 | h | not captured | boundary (not captured) | tab_1:row1:col4 |
| PK (driver) | AUC 0-72 /MIC (h) — R 2 | `Q88` · not captured | 0.9929 | h | not captured | boundary (not captured) | tab_1:row1:col5 |
| — | C max /MIC — E max (Log 10 CFU/mL) | `Q100` · not captured | -0.47 | Log 10 CFU/mL | not captured | llm (not captured) | tab_1:row2:col1 |
| — | C max /MIC — EC 50 | `Q100` · not captured | 8.21 | not captured | not captured | llm (not captured) | tab_1:row2:col2 |
| PD (effect) | C max /MIC — E 0 (Log 10 CFU/mL) | `Q324` · not captured | -6.32 | Log 10 CFU/mL | not captured | llm (not captured) | tab_1:row2:col3 |
| PD (effect) | C max /MIC — Slope (N) | `Q335` · not captured | 0.41 | N | not captured | llm (not captured) | tab_1:row2:col4 |
| PD (effect) | %T&gt;MIC — E max (Log 10 CFU/mL) | `Q320` · not captured | -0.46 | Log 10 CFU/mL | not captured | llm (not captured) | tab_1:row3:col1 |
| PD (effect) | %T&gt;MIC — EC 50 | `Q321` · not captured | 17.45 | µg/mL | not captured | llm (not captured) | tab_1:row3:col2 |
| PD (effect) | %T&gt;MIC — E 0 (Log 10 CFU/mL) | `Q324` · not captured | -4.12 | Log 10 CFU/mL | not captured | llm (not captured) | tab_1:row3:col3 |
| PD (effect) | %T&gt;MIC — Slope (N) | `Q335` · not captured | 0.80 | N | not captured | llm (not captured) | tab_1:row3:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Abacavir_Xia2022_PD_cfu_ml` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | -6.32 Log 10 CFU/mL | — |
| Emax | -0.46 Log 10 CFU/mL | — |
| EC50 | 17.45 µg/mL | 0.01745 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = -6.32, `at_EC50` = -6.55, `at_inf` = -6.78

Deviations:

- `defaulted_parameters` — gamma
- `pd_binding_off_target_driver` — driver compound 'tulathromycin' is not 'abacavir' nor one of its metabolites — the curve belongs to that compound's exposure (S12)

## Review

Verdict <span class="pk-badge pk-badge--red">rejected</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | fail | off-target driver — the curve belongs to that compound |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | fail | shared PD_SigmoidEmaxSweep FMU reproduces the reference points (worst 3.77%) |
| `T2_direction` | fail | curve direction contradicts effect_direction — sign error |
| `T3_plausibility` | fail | negative baseline -6.32 for a response in continuous |
| `T4_defaults` | advisory | only convention defaults (gamma = 1) |

Blocking:

- off_target_driver: 'tulathromycin' is not 'abacavir' (S12)
- T1b the template FMU departs from the closed form by 3.8%
- T2 curve falls but the record says stimulation
- T3 negative baseline -6.32 for a response in continuous

Advisory:

- defaulted: gamma (convention)


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.0 (0/19 fields) | 19 |

<details><summary>19 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | tulathromycin | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | stimulation | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | emax | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q100]` | -0.47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q100]` | 8.21 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | -0.46 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 17.45 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | -6.32 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | -4.12 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | 0.41 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | 0.80 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | -0.47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 1303.91 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | -6.05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 0.38 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q88]` | 0.9929 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_abacavir/Abacavir_Xia2022_PD_cfu_ml/Abacavir_Xia2022_PD_cfu_ml_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_abacavir/Abacavir_Xia2022_PD_cfu_ml/Abacavir_Xia2022_PD_cfu_ml_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `Abacavir_Xia2022_PD_cfu_ml_params.json` · controls `Abacavir_Xia2022_PD_cfu_ml_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [abacavir](drugs/drug_abacavir/)</sub>
