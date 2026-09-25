<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifaximin_Francis2019_reference&quot;,&quot;label&quot;:&quot;Francis_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/Rifaximin_Francis2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifaximin_Wang2021_reference&quot;,&quot;label&quot;:&quot;Wang_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/Rifaximin_Wang2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Wang_2023`
- **model family:** `sigmoid_emax`
- **driver:** `cited_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Wang H; Chen C; Liu C; Chen X; Zhang J; Wang Y; et al. et al. (2023). BMC veterinary research 19
  ·  DOI: [10.1186/s12917-022-03564-2](https://doi.org/10.1186/s12917-022-03564-2)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| T1/2 — Administered Dose (µg/gland) (n = 6) | `Q57` · not captured | 6.18 | n = 6 | not captured | exact (not captured) | Tab3:row3:col1 |
| T1/2 — Administered Dose (µg/gland) (n = 6) | `Q57` · not captured | 7.45 | n = 6 | not captured | exact (not captured) | Tab3:row3:col2 |
| T1/2 — Administered Dose (µg/gland) (n = 6) | `Q57` · not captured | 6.84 | n = 6 | not captured | exact (not captured) | Tab3:row3:col3 |
| T1/2 — Administered Dose (µg/gland) (n = 6) | `Q57` · not captured | 7.19 | n = 6 | not captured | exact (not captured) | Tab3:row3:col4 |
| T1/2 — Administered Dose (µg/gland) (n = 6) | `Q57` · not captured | 6.92 | n = 6 | not captured | exact (not captured) | Tab3:row3:col5 |
| MRT — Administered Dose (µg/gland) (n = 6) | `Q53` · not captured | 6.76 | n = 6 | not captured | exact (not captured) | Tab3:row4:col1 |
| MRT — Administered Dose (µg/gland) (n = 6) | `Q53` · not captured | 7.42 | n = 6 | not captured | exact (not captured) | Tab3:row4:col2 |
| MRT — Administered Dose (µg/gland) (n = 6) | `Q53` · not captured | 6.80 | n = 6 | not captured | exact (not captured) | Tab3:row4:col3 |
| MRT — Administered Dose (µg/gland) (n = 6) | `Q53` · not captured | 7.11 | n = 6 | not captured | exact (not captured) | Tab3:row4:col4 |
| MRT — Administered Dose (µg/gland) (n = 6) | `Q53` · not captured | 7.02 | n = 6 | not captured | exact (not captured) | Tab3:row4:col5 |
| AUC24 — Administered Dose (µg/gland) (n = 6) | `Q19` · not captured | 170.23 | n = 6 | not captured | llm (not captured) | Tab3:row5:col1 |
| AUC24 — Administered Dose (µg/gland) (n = 6) | `Q19` · not captured | 414.31 | n = 6 | not captured | llm (not captured) | Tab3:row5:col2 |
| AUC24 — Administered Dose (µg/gland) (n = 6) | `Q19` · not captured | 653.22 | n = 6 | not captured | llm (not captured) | Tab3:row5:col3 |
| AUC24 — Administered Dose (µg/gland) (n = 6) | `Q19` · not captured | 1287.03 | n = 6 | not captured | llm (not captured) | Tab3:row5:col4 |
| Cmax — Administered Dose (µg/gland) (n = 6) | `Q32` · not captured | 25.01 | n = 6 | not captured | exact (not captured) | Tab3:row6:col1 |
| Cmax — Administered Dose (µg/gland) (n = 6) | `Q32` · not captured | 49.73 | n = 6 | not captured | exact (not captured) | Tab3:row6:col2 |
| Cmax — Administered Dose (µg/gland) (n = 6) | `Q32` · not captured | 83.17 | n = 6 | not captured | exact (not captured) | Tab3:row6:col3 |
| Cmax — Administered Dose (µg/gland) (n = 6) | `Q32` · not captured | 162.17 | n = 6 | not captured | exact (not captured) | Tab3:row6:col4 |
| MRT — Administered Dose (µg/gland) (n = 6) | `Q53` · not captured | 9.10 | n = 6 | not captured | exact (not captured) | Tab3:row8:col1 |
| MRT — Administered Dose (µg/gland) (n = 6) | `Q53` · not captured | 11.34 | n = 6 | not captured | exact (not captured) | Tab3:row8:col2 |
| MRT — Administered Dose (µg/gland) (n = 6) | `Q53` · not captured | 9.08 | n = 6 | not captured | exact (not captured) | Tab3:row8:col3 |
| MRT — Administered Dose (µg/gland) (n = 6) | `Q53` · not captured | 10.46 | n = 6 | not captured | exact (not captured) | Tab3:row8:col4 |
| MRT — Administered Dose (µg/gland) (n = 6) | `Q53` · not captured | 10.00 | n = 6 | not captured | exact (not captured) | Tab3:row8:col5 |
| AUC24 — Administered Dose (µg/gland) (n = 6) | `Q19` · not captured | 175.41 | n = 6 | not captured | llm (not captured) | Tab3:row9:col1 |
| AUC24 — Administered Dose (µg/gland) (n = 6) | `Q19` · not captured | 469.08 | n = 6 | not captured | llm (not captured) | Tab3:row9:col2 |
| AUC24 — Administered Dose (µg/gland) (n = 6) | `Q19` · not captured | 677.08 | n = 6 | not captured | llm (not captured) | Tab3:row9:col3 |
| AUC24 — Administered Dose (µg/gland) (n = 6) | `Q19` · not captured | 1400.29 | n = 6 | not captured | llm (not captured) | Tab3:row9:col4 |
| Cmax — Administered Dose (µg/gland) (n = 6) | `Q32` · not captured | 27.08 | n = 6 | not captured | exact (not captured) | Tab3:row10:col1 |
| Cmax — Administered Dose (µg/gland) (n = 6) | `Q32` · not captured | 53.07 | n = 6 | not captured | exact (not captured) | Tab3:row10:col2 |
| Cmax — Administered Dose (µg/gland) (n = 6) | `Q32` · not captured | 87.31 | n = 6 | not captured | exact (not captured) | Tab3:row10:col3 |
| Cmax — Administered Dose (µg/gland) (n = 6) | `Q32` · not captured | 165.99 | n = 6 | not captured | exact (not captured) | Tab3:row10:col4 |
| V1 — Administered Dose (µg/gland) (n = 6) | `Q63` · not captured | 1.85 | n = 6 | not captured | exact (not captured) | Tab3:row11:col1 |
| V1 — Administered Dose (µg/gland) (n = 6) | `Q63` · not captured | 1.88 | n = 6 | not captured | exact (not captured) | Tab3:row11:col2 |
| V1 — Administered Dose (µg/gland) (n = 6) | `Q63` · not captured | 2.29 | n = 6 | not captured | exact (not captured) | Tab3:row11:col3 |
| V1 — Administered Dose (µg/gland) (n = 6) | `Q63` · not captured | 2.41 | n = 6 | not captured | exact (not captured) | Tab3:row11:col4 |
| V1 — Administered Dose (µg/gland) (n = 6) | `Q63` · not captured | 2.11 | n = 6 | not captured | exact (not captured) | Tab3:row11:col5 |
| V2 — Administered Dose (µg/gland) (n = 6) | `Q64` · not captured | 0.75 | n = 6 | not captured | exact (not captured) | Tab3:row13:col1 |
| V2 — Administered Dose (µg/gland) (n = 6) | `Q64` · not captured | 0.53 | n = 6 | not captured | exact (not captured) | Tab3:row13:col2 |
| V2 — Administered Dose (µg/gland) (n = 6) | `Q64` · not captured | 0.39 | n = 6 | not captured | exact (not captured) | Tab3:row13:col3 |
| V2 — Administered Dose (µg/gland) (n = 6) | `Q64` · not captured | 0.58 | n = 6 | not captured | exact (not captured) | Tab3:row13:col4 |
| V2 — Administered Dose (µg/gland) (n = 6) | `Q64` · not captured | 0.56 | n = 6 | not captured | exact (not captured) | Tab3:row13:col5 |
| CL2 — Administered Dose (µg/gland) (n = 6) | `Q30` · not captured | 1.13 | n = 6 | not captured | special_case (not captured) | Tab3:row14:col1 |
| CL2 — Administered Dose (µg/gland) (n = 6) | `Q30` · not captured | 1.21 | n = 6 | not captured | special_case (not captured) | Tab3:row14:col2 |
| CL2 — Administered Dose (µg/gland) (n = 6) | `Q30` · not captured | 1.14 | n = 6 | not captured | special_case (not captured) | Tab3:row14:col3 |
| CL2 — Administered Dose (µg/gland) (n = 6) | `Q30` · not captured | 0.40 | n = 6 | not captured | special_case (not captured) | Tab3:row14:col4 |
| CL2 — Administered Dose (µg/gland) (n = 6) | `Q30` · not captured | 0.97 | n = 6 | not captured | special_case (not captured) | Tab3:row14:col5 |
| Emax | `Q320` · not captured | 2.36 | log10 CFU/gland | not captured | review_gapfill (not captured) | Wang_2023:review |
| EC50 | `Q321` · not captured | 2.36 | log10 CFU/gland | not captured | review_gapfill (not captured) | Wang_2023:review |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Rifaximin_Wang2023_PD_bacterial_colony_count_reduction` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | -2.36 log10 CFU/gland | — |
| EC50 | 2.36 log10 CFU/gland | — |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = -1.18, `at_inf` = -2.36

Deviations:

- `defaulted_parameters` — E0, gamma
- `pd_binding_inhibition_sign` — effect_direction=inhibition with a positive Emax (Q320) — sign flipped
- `pd_binding_exposure_unit_unresolved` — 'log10 CFU/gland' — the x axis is in the paper's unit, not SI

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | curve direction matches effect_direction |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Advisory:

- defaulted: E0 — a row the paper has and the record lacks
- exposure unit not resolved to SI — the x axis is in the paper's unit


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/52 fields) | 52 |

<details><summary>52 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | rifaximin | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | sigmoid_emax | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q19]` | 170.23 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 414.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 653.22 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 1287.03 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 175.41 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 469.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 677.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 1400.29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 1.13 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 1.21 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 1.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 0.40 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 0.97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 2.36 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 2.36 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 27.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 53.07 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 87.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 165.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 25.01 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 49.73 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 83.17 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 162.17 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 6.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 7.42 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 6.80 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 7.11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 7.02 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 9.10 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 11.34 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 9.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 10.46 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 10.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 6.18 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 7.45 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 6.84 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 7.19 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 6.92 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 1.85 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 1.88 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 2.29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 2.41 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 2.11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 0.75 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 0.53 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 0.39 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 0.58 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 0.56 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_rifaximin/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_modelica.zip" download>Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_modelica.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_rifaximin/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_matlab.zip" download>Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_rifaximin/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_sbml.zip" download>Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_rifaximin/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_cellml.zip" download>Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_cellml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PD_SigmoidEmaxSweep.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_rifaximin/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_rifaximin/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction/Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_params.json` · controls `Rifaximin_Wang2023_PD_bacterial_colony_count_reduction_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [rifaximin](drugs/drug_rifaximin/)</sub>
