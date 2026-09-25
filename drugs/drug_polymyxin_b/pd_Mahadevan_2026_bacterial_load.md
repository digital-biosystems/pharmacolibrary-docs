<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PolymyxinB_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Li2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Manchandani2018_reference&quot;,&quot;label&quot;:&quot;Manchandani_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Manchandani2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Chauzy2022_reference&quot;,&quot;label&quot;:&quot;Chauzy_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Chauzy2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Chen2022_reference&quot;,&quot;label&quot;:&quot;Chen_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Chen2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Lakota2018_reference&quot;,&quot;label&quot;:&quot;Lakota_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Lakota2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Mahadevan_2026`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Mahadevan R; Garcia E; Sharma R; Qiu H; Elsheikh A; Parambi R; et al. et al. (2026). Antimicrobial agents and chemotherapy 70
  ·  DOI: [10.1128/aac.00782-25](https://doi.org/10.1128/aac.00782-25)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Replication rate constant (k21) [h−1] — BRKP61 | `Q302` · not captured | 50 | not captured | not captured | llm_confirmed (not captured) | T2:row4:col1 |
| Replication rate constant (k21) [h−1] — BRKP76 | `Q302` · not captured | 50 | not captured | not captured | llm_confirmed (not captured) | T2:row4:col2 |
| Replication rate constant (k21) [h−1] — KP0016-1 | `Q302` · not captured | 50 | not captured | not captured | llm_confirmed (not captured) | T2:row4:col3 |
| Replication rate constant (k21) [h−1] — KP0052-1 | `Q302` · not captured | 50 | not captured | not captured | llm_confirmed (not captured) | T2:row4:col4 |
| Replication rate constant (k21) [h−1] — BRKP67 | `Q302` · not captured | 50 | not captured | not captured | llm_confirmed (not captured) | T2:row4:col5 |
| Replication rate constant (k21) [h−1] — BRKP28 | `Q302` · not captured | 50 | not captured | not captured | llm_confirmed (not captured) | T2:row4:col6 |
| Polymyxin B concentration causing 50% of KmaxPMB in I (KC50,PMB,I) [mg/L] — BRKP61 | `Q322` · not captured | 0.82 | mg/L | not captured | llm (not captured) | T2:row16:col1 |
| Polymyxin B concentration causing 50% of KmaxPMB in I (KC50,PMB,I) [mg/L] — BRKP76 | `Q322` · not captured | 2.20 | mg/L | not captured | llm (not captured) | T2:row16:col2 |
| Polymyxin B concentration causing 50% of KmaxPMB in I (KC50,PMB,I) [mg/L] — KP0016-1 | `Q322` · not captured | 6.56 | mg/L | not captured | llm (not captured) | T2:row16:col3 |
| Polymyxin B concentration causing 50% of KmaxPMB in I (KC50,PMB,I) [mg/L] — KP0052-1 | `Q322` · not captured | 2.68 | mg/L | not captured | llm (not captured) | T2:row16:col4 |
| Polymyxin B concentration causing 50% of KmaxPMB in I (KC50,PMB,I) [mg/L] — BRKP67 | `Q322` · not captured | 2.77 | mg/L | not captured | llm (not captured) | T2:row16:col5 |
| Polymyxin B concentration causing 50% of KmaxPMB in R (KC50,PMB,R) [mg/L] — BRKP61 | `Q322` · not captured | 41.03 | mg/L | not captured | llm (not captured) | T2:row17:col1 |
| Polymyxin B concentration causing 50% of KmaxPMB in R (KC50,PMB,R) [mg/L] — BRKP76 | `Q322` · not captured | 79.2 | mg/L | not captured | llm (not captured) | T2:row17:col2 |
| Polymyxin B concentration causing 50% of KmaxPMB in R (KC50,PMB,R) [mg/L] — KP0016-1 | `Q322` · not captured | 61.16 | mg/L | not captured | llm (not captured) | T2:row17:col3 |
| Polymyxin B concentration causing 50% of KmaxPMB in R (KC50,PMB,R) [mg/L] — KP0052-1 | `Q322` · not captured | 38.34 | mg/L | not captured | llm (not captured) | T2:row17:col4 |
| Polymyxin B concentration causing 50% of KmaxPMB in R (KC50,PMB,R) [mg/L] — BRKP67 | `Q322` · not captured | 96.78 | mg/L | not captured | llm (not captured) | T2:row17:col5 |
| Polymyxin B concentration causing 50% of KmaxPMB in R (KC50,PMB,R) [mg/L] — BRKP28 | `Q322` · not captured | 38.82 | mg/L | not captured | llm (not captured) | T2:row17:col6 |
| Meropenem concentration causing 50% of KmaxMEM in I (KC50,MEM,I) [mg/L] — BRKP61 | `Q321` · not captured | 24.7 | mg/L | not captured | llm (not captured) | T2:row21:col1 |
| Meropenem concentration causing 50% of KmaxMEM in I (KC50,MEM,I) [mg/L] — BRKP76 | `Q321` · not captured | 18.9 | mg/L | not captured | llm (not captured) | T2:row21:col2 |
| Meropenem concentration causing 50% of KmaxMEM in I (KC50,MEM,I) [mg/L] — KP0016-1 | `Q322` · not captured | 112 | mg/L | not captured | llm (not captured) | T2:row21:col3 |
| Meropenem concentration causing 50% of KmaxMEM in I (KC50,MEM,I) [mg/L] — KP0052-1 | `Q322` · not captured | 44.2 | mg/L | not captured | llm (not captured) | T2:row21:col4 |
| Meropenem concentration causing 50% of KmaxMEM in I (KC50,MEM,I) [mg/L] — BRKP67 | `Q321` · not captured | 8.91 | mg/L | not captured | llm (not captured) | T2:row21:col5 |
| Meropenem concentration causing 50% of KmaxMEM in R (KC50,MEM,R) [mg/L] — BRKP61 | `Q321` · not captured | 61.4 | mg/L | not captured | llm (not captured) | T2:row22:col1 |
| Meropenem concentration causing 50% of KmaxMEM in R (KC50,MEM,R) [mg/L] — BRKP76 | `Q321` · not captured | 328 | mg/L | not captured | llm (not captured) | T2:row22:col2 |
| Meropenem concentration causing 50% of KmaxMEM in R (KC50,MEM,R) [mg/L] — KP0016-1 | `Q321` · not captured | 424 | mg/L | not captured | llm (not captured) | T2:row22:col3 |
| Meropenem concentration causing 50% of KmaxMEM in R (KC50,MEM,R) [mg/L] — KP0052-1 | `Q321` · not captured | 284 | mg/L | not captured | llm (not captured) | T2:row22:col4 |
| Meropenem concentration causing 50% of KmaxMEM in R (KC50,MEM,R) [mg/L] — BRKP67 | `Q321` · not captured | 227 | mg/L | not captured | llm (not captured) | T2:row22:col5 |
| Meropenem concentration causing 50% of KmaxMEM in R (KC50,MEM,R) [mg/L] — BRKP28 | `Q321` · not captured | 228 | mg/L | not captured | llm (not captured) | T2:row22:col6 |
| Fosfomycin concentration causing 50% of KmaxFOF in I (KC50,FOF,I) [mg/L] — BRKP61 | `Q322` · not captured | 42.5 | mg/L | not captured | llm (not captured) | T2:row26:col1 |
| Fosfomycin concentration causing 50% of KmaxFOF in I (KC50,FOF,I) [mg/L] — BRKP76 | `Q322` · not captured | 21.1 | mg/L | not captured | llm (not captured) | T2:row26:col2 |
| Fosfomycin concentration causing 50% of KmaxFOF in I (KC50,FOF,I) [mg/L] — KP0016-1 | `Q321` · not captured | 20.2 | mg/L | not captured | llm (not captured) | T2:row26:col3 |
| Fosfomycin concentration causing 50% of KmaxFOF in I (KC50,FOF,I) [mg/L] — KP0052-1 | `Q321` · not captured | 26.1 | mg/L | not captured | llm (not captured) | T2:row26:col4 |
| Fosfomycin concentration causing 50% of KmaxFOF in I (KC50,FOF,I) [mg/L] — BRKP67 | `Q322` · not captured | 20.4 | mg/L | not captured | llm (not captured) | T2:row26:col5 |
| Fosfomycin concentration causing 50% of KmaxFOF in I (KC50,FOF,I) [mg/L] — BRKP28 | `Q322` · not captured | 22.0 | mg/L | not captured | llm (not captured) | T2:row26:col6 |
| Fosfomycin concentration causing 50% of KmaxFOF in R (KC50,FOF,R) [mg/L] — BRKP61 | `Q321` · not captured | 44.71 | mg/L | not captured | llm (not captured) | T2:row27:col1 |
| Fosfomycin concentration causing 50% of KmaxFOF in R (KC50,FOF,R) [mg/L] — BRKP76 | `Q321` · not captured | 647.5 | mg/L | not captured | llm (not captured) | T2:row27:col2 |
| Fosfomycin concentration causing 50% of KmaxFOF in R (KC50,FOF,R) [mg/L] — KP0016-1 | `Q321` · not captured | 448 | mg/L | not captured | llm (not captured) | T2:row27:col3 |
| Fosfomycin concentration causing 50% of KmaxFOF in R (KC50,FOF,R) [mg/L] — KP0052-1 | `Q321` · not captured | 761.7 | mg/L | not captured | llm (not captured) | T2:row27:col4 |
| Fosfomycin concentration causing 50% of KmaxFOF in R (KC50,FOF,R) [mg/L] — BRKP67 | `Q321` · not captured | 1000 | mg/L | not captured | llm (not captured) | T2:row27:col5 |
| Fosfomycin concentration causing 50% of KmaxFOF in R (KC50,FOF,R) [mg/L] — BRKP28 | `Q321` · not captured | 1342 | mg/L | not captured | llm (not captured) | T2:row27:col6 |
| Maximum fractional decrease of KC50,MEM,I and/or KC50,MEM,R by polymyxin B via outer membrane disruption (ImaxM,PMB) — BRKP61 | `Q323` · not captured | 0.84 | ImaxM,PMB | not captured | llm (not captured) | T2:row30:col1 |
| Maximum fractional decrease of KC50,MEM,I and/or KC50,MEM,R by polymyxin B via outer membrane disruption (ImaxM,PMB) — BRKP76 | `Q323` · not captured | 0.83 | ImaxM,PMB | not captured | llm (not captured) | T2:row30:col2 |
| Maximum fractional decrease of KC50,MEM,I and/or KC50,MEM,R by polymyxin B via outer membrane disruption (ImaxM,PMB) — KP0016-1 | `Q323` · not captured | 0.88 | ImaxM,PMB | not captured | llm (not captured) | T2:row30:col3 |
| Polymyxin B concentration causing 50% of ImaxM,PMB (IC50M,PMB) [mg/L] — BRKP61 | `Q322` · not captured | 0.51 | mg/L | not captured | llm (not captured) | T2:row31:col1 |
| Polymyxin B concentration causing 50% of ImaxM,PMB (IC50M,PMB) [mg/L] — BRKP76 | `Q322` · not captured | 0.49 | mg/L | not captured | llm (not captured) | T2:row31:col2 |
| Polymyxin B concentration causing 50% of ImaxM,PMB (IC50M,PMB) [mg/L] — KP0016-1 | `Q322` · not captured | 0.50 | mg/L | not captured | llm (not captured) | T2:row31:col3 |
| Maximum fractional decrease of KC50,FOF,I and/or KC50,FOF,R by polymyxin B via outer membrane disruption (ImaxF,PMB) — BRKP61 | `Q323` · not captured | 0.99 | ImaxF,PMB | not captured | llm (not captured) | T2:row34:col1 |
| Maximum fractional decrease of KC50,FOF,I and/or KC50,FOF,R by polymyxin B via outer membrane disruption (ImaxF,PMB) — BRKP76 | `Q323` · not captured | 0.81 | ImaxF,PMB | not captured | llm (not captured) | T2:row34:col2 |
| Maximum fractional decrease of KC50,FOF,I and/or KC50,FOF,R by polymyxin B via outer membrane disruption (ImaxF,PMB) — KP0016-1 | `Q323` · not captured | 0.89 | ImaxF,PMB | not captured | llm (not captured) | T2:row34:col3 |
| Polymyxin B concentration causing 50% of ImaxF,PMB (IC50F,PMB) [mg/L] — BRKP61 | `Q322` · not captured | 0.64 | mg/L | not captured | llm (not captured) | T2:row35:col1 |
| Polymyxin B concentration causing 50% of ImaxF,PMB (IC50F,PMB) [mg/L] — BRKP76 | `Q322` · not captured | 0.58 | mg/L | not captured | llm (not captured) | T2:row35:col2 |
| Polymyxin B concentration causing 50% of ImaxF,PMB (IC50F,PMB) [mg/L] — KP0016-1 | `Q322` · not captured | 0.59 | mg/L | not captured | llm (not captured) | T2:row35:col3 |
| Additive residual variability [log10 CFU/mL] — BRKP61 | `Q317` · not captured | 0.39 | log10 MF | not captured | llm_corrected (not captured) | T2:row38:col1 |
| Additive residual variability [log10 CFU/mL] — BRKP76 | `Q317` · not captured | 0.54 | log10 MF | not captured | llm_corrected (not captured) | T2:row38:col2 |
| Additive residual variability [log10 CFU/mL] — KP0016-1 | `Q317` · not captured | 0.45 | log10 MF | not captured | llm_corrected (not captured) | T2:row38:col3 |
| Additive residual variability [log10 CFU/mL] — KP0052-1 | `Q317` · not captured | 0.77 | log10 MF | not captured | llm_corrected (not captured) | T2:row38:col4 |
| Additive residual variability [log10 CFU/mL] — BRKP67 | `Q317` · not captured | 0.52 | log10 MF | not captured | llm_corrected (not captured) | T2:row38:col5 |
| Additive residual variability [log10 CFU/mL] — BRKP28 | `Q317` · not captured | 0.25 | log10 MF | not captured | llm_corrected (not captured) | T2:row38:col6 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`PolymyxinB_Mahadevan2026_PD_bacterial_load` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | -0.84 ImaxM,PMB | — |
| EC50 | 24.7 mg/L | 0.0247 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = -0.42, `at_inf` = -0.84

Deviations:

- `defaulted_parameters` — E0, gamma
- `pd_binding_imax_as_negative_emax` — Imax (Q323) enters SigmoidEmaxSweep as −Emax

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


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.333 (40/120 fields) | 80 |

<details><summary>80 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `effect_form` | unknown | additive | mismatch |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | -5.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 8.43 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 0.39 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 0.54 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 0.45 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 0.25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.39 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.54 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.45 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 0.25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 10.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 9.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 3.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 2.13 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 5.41 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 1.56 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 4.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 3.70 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 3.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 0.64 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 3.45 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 9.33 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 9.05 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 9.10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.82 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 2.20 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 6.56 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 2.68 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 2.77 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 41.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 79.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 61.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 38.34 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 96.78 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 38.82 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 112 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 44.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 42.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 21.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 20.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 22.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.82 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.20 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 6.56 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.68 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.77 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 41.03 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 79.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 61.16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 38.34 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 96.78 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 38.82 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 112 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 44.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 42.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 21.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 20.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 22.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | not captured | 3.74 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q334]` | not captured | 3.05 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | -5.10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | -4.29 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | -4.80 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | -6.55 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | 13.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | 11.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | 6.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | 3.42 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 30.92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 69.26 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 32.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 31.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 19.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 83.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 72.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 98.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 32.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` | not captured | 44.25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q83]` | not captured | 13.5 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_polymyxin_b/PolymyxinB_Mahadevan2026_PD_bacterial_load/PolymyxinB_Mahadevan2026_PD_bacterial_load_modelica.zip" download>PolymyxinB_Mahadevan2026_PD_bacterial_load_modelica.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_polymyxin_b/PolymyxinB_Mahadevan2026_PD_bacterial_load/PolymyxinB_Mahadevan2026_PD_bacterial_load_matlab.zip" download>PolymyxinB_Mahadevan2026_PD_bacterial_load_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_polymyxin_b/PolymyxinB_Mahadevan2026_PD_bacterial_load/PolymyxinB_Mahadevan2026_PD_bacterial_load_sbml.zip" download>PolymyxinB_Mahadevan2026_PD_bacterial_load_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_polymyxin_b/PolymyxinB_Mahadevan2026_PD_bacterial_load/PolymyxinB_Mahadevan2026_PD_bacterial_load_cellml.zip" download>PolymyxinB_Mahadevan2026_PD_bacterial_load_cellml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PD_SigmoidEmaxSweep.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_polymyxin_b/PolymyxinB_Mahadevan2026_PD_bacterial_load/PolymyxinB_Mahadevan2026_PD_bacterial_load_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_polymyxin_b/PolymyxinB_Mahadevan2026_PD_bacterial_load/PolymyxinB_Mahadevan2026_PD_bacterial_load_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `PolymyxinB_Mahadevan2026_PD_bacterial_load_params.json` · controls `PolymyxinB_Mahadevan2026_PD_bacterial_load_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [polymyxin B](drugs/drug_polymyxin_b/)</sub>
