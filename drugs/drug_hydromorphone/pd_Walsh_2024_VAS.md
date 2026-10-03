<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;hydromorphone&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/&quot;},{&quot;label&quot;:&quot;Walsh_2024 \u00b7 PD desire to use VAS&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydromorphone_Wimbish2024_reference&quot;,&quot;label&quot;:&quot;Wimbish_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Wimbish2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Walsh_2024_COWS&quot;,&quot;label&quot;:&quot;Walsh_2024 \u00b7 COWS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/pd_Walsh_2024_COWS.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Walsh_2024_VAS&quot;,&quot;label&quot;:&quot;Walsh_2024 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/pd_Walsh_2024_VAS.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# desire to use VAS — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Buprenorphine (measured concentrations) drives desire to use VAS (in score): direct sigmoid Emax (Hill) effect.

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> Buprenorphine plasma concentration (ng/mL) inhibits the hydromorphone-induced desire to use VAS score via an Imax (sigmoid inhibitory Emax) model, with baseline 45.3, Imax fixed to 1.00, IC50 0.075 ng/mL, and IC90 0.116 ng/mL; the paper does not state a Hill coefficient or describe kin/kout or an effect compartment for this endpoint.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Walsh_2024`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Walsh SL et al., Pharmacokinetic-pharmacodynamic analysi…, Neuropsychopharmacology : o… (2024)
  ·  DOI: [10.1038/s41386-023-01793-z](https://doi.org/10.1038/s41386-023-01793-z)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Baseline — Value | `Q324` · not captured | 45.3 | not captured | not captured | exact (not captured) | tab_0:row2:col2 |
| PD (effect) | Baseline — RSE (%) | `Q324` · not captured | 2.40 | not captured | not captured | exact (not captured) | tab_0:row2:col3 |
| PD (effect) | IC 50 — Value | `Q322` · not captured | 0.075 | ng/mL | not captured | llm (not captured) | tab_0:row3:col2 |
| PD (effect) | IC 50 — RSE (%) | `Q322` · not captured | 30.4 | ng/mL | not captured | llm (not captured) | tab_0:row3:col3 |
| PD (effect) | I max — Value | `Q323` · not captured | 1.00 | not captured | not captured | llm (not captured) | tab_0:row4:col2 |
| PD (effect) | IIV Baseline — Value | `Q324` · not captured | 0.106 | not captured | not captured | llm_confirmed (not captured) | tab_0:row5:col2 |
| PD (effect) | IIV Baseline — RSE (%) | `Q324` · not captured | 19.8 | not captured | not captured | llm_confirmed (not captured) | tab_0:row5:col3 |
| variability | IIV Baseline — Shrinkage (%) | `Q318` · not captured | 11.6 | not captured | not captured | llm_corrected (not captured) | tab_0:row5:col4 |
| PD (effect) | IIV IC 50 — Value | `Q322` · not captured | 1.90 | ng/mL | not captured | llm_corrected (not captured) | tab_0:row6:col2 |
| variability | IIV IC 50 — RSE (%) | `Q312` · not captured | 10.3 | not captured | not captured | llm_confirmed (not captured) | tab_0:row6:col3 |
| variability | IIV IC 50 — Shrinkage (%) | `Q318` · not captured | 13.3 | not captured | not captured | llm_corrected (not captured) | tab_0:row6:col4 |
| PD (effect) | IIV I max — Value | `Q323` · not captured | 0 | not captured | not captured | llm_corrected (not captured) | tab_0:row7:col2 |
| variability | Additive — RSE (%) | `Q317` · not captured | 8.62 | not captured | not captured | llm (not captured) | tab_0:row8:col3 |
| variability | Additive — Shrinkage (%) | `Q318` · not captured | 9.39 | not captured | not captured | llm (not captured) | tab_0:row8:col4 |
| PD (effect) | IC 90 — Unit | `Q321` · not captured | 0.675 | ng/mL | not captured | llm (not captured) | tab_0:row14:col1 |
| PD (effect) | IC 90 — Value | `Q321` · not captured | 0.116 | ng/mL | not captured | llm (not captured) | tab_0:row14:col2 |
| variability | IC 90 — Shrinkage (%) | `Q318` · not captured | 0.109 | not captured | not captured | llm (not captured) | tab_0:row14:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Hydromorphone_Walsh2024_PD_vas` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 45.3 score | — |
| Emax | -1 score | — |
| EC50 | 0.116 ng/mL | 1.16e-07 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 45.3, `at_EC50` = 44.8, `at_inf` = 44.3

Deviations:

- `defaulted_parameters` — gamma
- `pd_binding_off_target_driver` — driver compound 'buprenorphine' is not 'hydromorphone' nor one of its metabolites — the curve belongs to that compound's exposure (S12)
- `pd_binding_imax_as_negative_emax` — Imax (Q323) enters SigmoidEmaxSweep as −Emax

## Review

Verdict <span class="pk-badge pk-badge--red">rejected</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | fail | off-target driver — the curve belongs to that compound |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | pass | shared PD_SigmoidEmaxSweep FMU reproduces the reference points (worst 0.00%) |
| `T2_direction` | pass | the response falls, as direct effect predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | advisory | only convention defaults (gamma = 1) |

Blocking:

- off_target_driver: 'buprenorphine' is not 'hydromorphone' (S12)

Advisory:

- defaulted: gamma (convention)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_hydromorphone/Hydromorphone_Walsh2024_PD_vas/Hydromorphone_Walsh2024_PD_vas_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_hydromorphone/Hydromorphone_Walsh2024_PD_vas/Hydromorphone_Walsh2024_PD_vas_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `Hydromorphone_Walsh2024_PD_vas_params.json` · controls `Hydromorphone_Walsh2024_PD_vas_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [hydromorphone](drugs/drug_hydromorphone/)</sub>
