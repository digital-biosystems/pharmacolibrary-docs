<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;finerenone&quot;,&quot;href&quot;:&quot;drugs/drug_finerenone/&quot;},{&quot;label&quot;:&quot;Heinig_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Finerenone_Heinig2023_reference&quot;,&quot;label&quot;:&quot;Heinig_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_finerenone/Finerenone_Heinig2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# finerenone — `Finerenone_Heinig2023_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.656). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The finerenone model fails to reproduce the paper's peak concentration, time of peak, and terminal half-life, and the intercompartmental clearance parameter was missing.**

The simulated peak concentration was 1.04e-05 kg/m3, far below the paper's reported 9.62e-05 kg/m3, and the time of peak was 0.543 h versus the paper's 0.75 h. The terminal half-life was simulated as 2.63 h, differing from the paper's 2.25 h. The intercompartmental clearance parameter was not emitted or defaulted, leaving the model structure incomplete. Additionally, the covariate effects on clearance and volume were not exercised in the simulation. Extracted — finerenone: kabs 22.5 1/h, CL/F 29.9 L/h, V/F 113 L, Q/F 0.335 L/h, tlag 0.215 h, Frel 1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of effect_of_body_height_on_cl_f_and_f: this record has 0.720, the second reading none; it also differs on 10 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Heinig R et al., The Pharmacokinetics of the Nonsteroida…, Clinical pharmacokinetics (2023)
  ·  DOI: [10.1007/s40262-023-01312-9](https://doi.org/10.1007/s40262-023-01312-9)

## Model component
<dbs-pgx drug="finerenone" model-id="Finerenone_Heinig2023_reference" status="needs_review" stale="false" population="adults with CKD and T2D" measured-compound="finerenone" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted, plus 8 covariate effects.

**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 22.5 | 1/h | 0.00625 | 1/h | 16.2 | exact (1.0) | Tab3:row1:col1, Tab3:row1:col2 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 29.9 | L/h | 8.305555555555555e-06 | [l] / [h] | 3.62 | exact (1.0) | Tab3:row2:col1, Tab3:row2:col2 | — | 0.0442 (None% RSE) |
| Vc/F (L) | `Q76` · V/F | 113 | L | 0.113 | [l] | 2.79 | exact (1.0) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 0.335 | L/h | 9.305555555555555e-08 | [l] / [h] | 9.28 | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2 | — | not captured |
| Absorption lag time (h) | `Q83` · tlag | 0.215 | h | 774.0 | [h] | not captured | exact (1.0) | Tab3:row6:col1 | — | not captured |
| Relative bioavailability | `Q87` · Frel | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Tab3:row7:col1 | — | not captured |
| effect_of_egfr_epi_time_varying_on_cl_f_and_f | `Q900` · effect_of_egfr_epi_time_varying_on_cl_f_and_f | 0.155 | not captured | not captured | not captured | 20.1 | not captured (not captured) | Tab3:row9:col1, Tab3:row9:col2 | — | not captured |
| effect_of_body_height_on_cl_f_and_f | `Q900` · effect_of_body_height_on_cl_f_and_f | 0.720 | not captured | not captured | not captured | 16.1 | not captured (not captured) | Tab3:row10:col1, Tab3:row10:col2 | — | not captured |
| effect_of_creatinine_on_cl_f_and_f | `Q900` · effect_of_creatinine_on_cl_f_and_f | 0.118 | not captured | not captured | not captured | 38.4 | not captured (not captured) | Tab3:row11:col1, Tab3:row11:col2 | — | not captured |
| effect_of_smoking_current_or_former_smokers_on_cl_f_and_f | `Q900` · effect_of_smoking_current_or_former_smokers_on_cl_f_and_f | 1.04 | not captured | not captured | not captured | 1.11 | not captured (not captured) | Tab3:row14:col1, Tab3:row14:col2 | — | not captured |
| effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f | `Q900` · effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f | 0.951 | not captured | not captured | not captured | 1.66 | not captured (not captured) | Tab3:row16:col1, Tab3:row16:col2 | — | not captured |
| effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f | `Q900` · effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f | 0.996 | not captured | not captured | not captured | 2.17 | not captured (not captured) | Tab3:row17:col1, Tab3:row17:col2 | — | not captured |
| theta_v1_f_body_weight | `Q900` · theta_v1_f_body_weight | 0.501 | not captured | not captured | not captured | 9.87 | not captured (not captured) | Tab3:row8:col1, Tab3:row8:col2 | — | not captured |
| theta_v1_f_category | `Q900` · theta_v1_f_category | 1.29 | L | not captured | not captured | 6.79 | not captured (not captured) | Tab3:row12:col1, Tab3:row12:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ω2 CL/Fa' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2 Vc/Fb' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Covariance CL/F × Vc/F' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ2' routed out of structural estimates ('Residual error')
- covariate level 'Effect of eGFR-EPI (time-varying) on CL/F and F' → Q900:effect_of_egfr_epi_time_varying_on_cl_f_and_f = 0.155 (linear_fractional on Q27)
- covariate level 'Effect of body height on CL/F and F' → Q900:effect_of_body_height_on_cl_f_and_f = 0.720 (linear_fractional on Q27)
- covariate level 'Effect of creatinine on CL/F and F' → Q900:effect_of_creatinine_on_cl_f_and_f = 0.118 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Effect of SGLT-2 inhibitor use (≥50% of treatment period) on CL/F and F' — extend the ontology if this is a real PK parameter (source ['Tab3:row13:col1', 'Tab3:row13:col2'])
- covariate level 'Effect of smoking (current or former smokers) on CL/F and F' → Q900:effect_of_smoking_current_or_former_smokers_on_cl_f_and_f = 1.04 (linear_fractional on Q27)
- dropped duplicate Q27 ('Effect of GGT on CL/F', value '-0.0694') — already have one for this compound
- covariate level 'Effect of CYP3A4 inhibitor use (weak, moderate or strong ≥50% of on treatment period) on CL/F and F' → Q900:effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f = 0.951 (linear_fractional on Q27)
- covariate level 'Effect of CYP3A4 inhibitor use (other categories) on CL/F and F' → Q900:effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f = 0.996 (linear_fractional on Q27)
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'The parameter is the absorption rate constant (Ka). In population pharmacokinetics, first-order rate constants are conve')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=finerenone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L)' is the general volume)
- status held at route_to_review — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 3
- LLM region Heinig_2023:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.656 (21/32 fields) | 11 |

<details><summary>11 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[effect_of_body_height_on_cl_f_and_f]` | 0.720 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_creatinine_on_cl_f_and_f]` | 0.118 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f]` | 0.996 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f]` | 0.951 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_egfr_epi_time_varying_on_cl_f_and_f]` | 0.155 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_smoking_current_or_former_smokers_on_cl_f_and_f]` | 1.04 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_creatinine]` | not captured | 0.118 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_cyp3a4]` | not captured | 0.951 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_egfr]` | not captured | 0.155 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_height]` | not captured | 0.720 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_smoking]` | not captured | 1.04 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 2.25 | 2.62 | 1.1644 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row1:col1', 'Tab3:row1:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row6:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 29.9 L/h | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 113 L | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=finerenone) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['Q/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 9.62e-05 | 1.0430601210893446e-05 | 0.1084 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000118 | 1.0430601210893446e-05 | 0.0884 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 9.99e-05 | 1.0430601210893446e-05 | 0.1044 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 8.840000000000001e-05 | 1.0430601210893446e-05 | 0.118 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000163 | 1.0430601210893446e-05 | 0.064 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00015999999999999999 | 1.0430601210893446e-05 | 0.0652 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000149 | 1.0430601210893446e-05 | 0.07 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | not captured | 1.0430601210893446e-05 | not captured | non-numeric value |
| T1_cmax | reference | skipped | 88.2 | 1.0430601210893446e-05 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 122 | 1.0430601210893446e-05 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 15.7 | 1.0430601210893446e-05 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_t_half_beta | reference | skipped | not captured | 2.629193576653854 | not captured | non-numeric value |
| T1_t_half_terminal | reference | pass | 2.25 | 2.629193576653854 | 1.1685 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.23 | 2.629193576653854 | 1.179 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.6 | 2.629193576653854 | 1.0112 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.78 | 2.629193576653854 | 0.9458 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.59 | 2.629193576653854 | 1.0151 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3.18 | 2.629193576653854 | 0.8268 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.6 | 2.629193576653854 | 1.0112 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.3 | 2.629193576653854 | 1.1431 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.6 | 2.629193576653854 | 1.6432 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.5 | 2.629193576653854 | 1.0517 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.9 | 2.629193576653854 | 1.3838 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3.2 | 2.629193576653854 | 0.8216 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | not captured | 2.629193576653854 | not captured | non-numeric value |
| T1_t_half_terminal | reference | skipped | not captured | 2.629193576653854 | not captured | non-numeric value |
| T1_tmax | reference | fail | 0.75 | 0.5432058909086878 | 0.7243 | h→SI vs simulated h |
| T1_tmax | reference | pass | 0.5 | 0.5432058909086878 | 1.0864 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 0.5432058909086878 | 0.7243 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 0.5432058909086878 | 0.7243 | h→SI vs simulated h |
| T1_tmax | reference | pass | 0.65 | 0.5432058909086878 | 0.8357 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_finerenone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Heinig_2023` / `Heinig_2023::reference`)
- model: `../../../knowledgebase/drugs/drug_finerenone/models/modelica/Finerenone_Heinig2023_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_finerenone/models/modelica/Finerenone_Heinig2023_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_finerenone/models/modelica/Finerenone_Heinig2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_modelica.zip" download>Finerenone_Heinig2023_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_matlab.zip" download>Finerenone_Heinig2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_matlab_simbio.zip" download>Finerenone_Heinig2023_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_sbml.zip" download>Finerenone_Heinig2023_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_cellml.zip" download>Finerenone_Heinig2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference.svg" alt="Finerenone_Heinig2023_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1.25 mg, single dose, first-order absorption (ka 22.5 /h, lag 12.9 min, F 1). Doses in the paper: 1.25, 2.5, 5, 7.5, 10, 20 mg.

<dbs-fmusim paramsurl="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Finerenone_Heinig2023_reference_params.json` · controls `Finerenone_Heinig2023_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 08:21 UTC</sub>
