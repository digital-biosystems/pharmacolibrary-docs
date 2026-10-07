<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;baloxavir marboxil&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/&quot;},{&quot;label&quot;:&quot;Kim_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BaloxavirMarboxil_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;BaloxavirMarboxil_Retout2026_reference&quot;,&quot;label&quot;:&quot;Retout_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baloxavir marboxil — `BaloxavirMarboxil_Kim2022_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The baloxavir acid model fails the Cmax check and is missing the V2/F parameter.**

The simulated peak concentration is 7.10419045677101e-05, while the expected value is 2.7799999999999998e-05. The record shows that V2/F was neither emitted nor included in the defaults. Covariate scenarios involving body weight were also not exercised during simulation. Extracted — baloxavir acid: CLm/F 7.43 L/h, Q/F 51 L/h, Q2/F 2.69 L/h, V1/F 251 L, V2/F 309 L, V3/F 224 L, Fab 0.625, kabs 0.917 1/h, … (+1).

<sub>reviewed by qwen3.8-27b</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-07 14:33:02.525556+00:00) predates the upstream re-run (2026-10-07 15:33:03.660603+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `baloxavir marboxil`, measured `baloxavir acid`.

## Citation
Kim Y et al., Pharmacokinetics and safety of a novel…, Clinical and translational… (2022)
  ·  DOI: [10.1111/cts.13160](https://doi.org/10.1111/cts.13160)

## Model component
<dbs-pgx drug="baloxavir marboxil" model-id="BaloxavirMarboxil_Kim2022_reference" status="extracted" stale="true" population="healthy Korean and Japanese adults" measured-compound="baloxavir acid" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 10 extracted, plus 2 covariate effects.

**Parameterization:** CLm/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q351` · CLm/F | 4.5 | L/h | 1.25e-06 | [l] / [h] | not captured | exact (1.0) | cts13160-tbl-0002:row3:col2, cts13160-tbl-0002:row3:col3, cts13160-tbl-0002:row3:col4, cts13160-tbl-0002:row3:col5 | — | not captured |
| Q 1/F (L/h) | `Q69` · Q/F | 9.8 | L/h | 2.722222222222223e-06 | [l] / [h] | not captured | exact (1.0) | cts13160-tbl-0002:row4:col2, cts13160-tbl-0002:row4:col3, cts13160-tbl-0002:row4:col4, cts13160-tbl-0002:row4:col5 | — | not captured |
| Q 2/F (L/h) | `Q80` · Q2/F | 2.86 | L/h | 7.944444444444445e-07 | [l] / [h] | not captured | special_case (0.95) | cts13160-tbl-0002:row5:col1, cts13160-tbl-0002:row5:col2, cts13160-tbl-0002:row5:col3, cts13160-tbl-0002:row5:col4 | — | not captured |
| V c/F (L) | `Q290` · V1/F | 9.0 | L | 0.009000000000000001 | [l] | not captured | exact (1.0) | cts13160-tbl-0002:row7:col2, cts13160-tbl-0002:row7:col3, cts13160-tbl-0002:row7:col4, cts13160-tbl-0002:row7:col5 | — | not captured |
| V p1/F (L) | `Q82` · V2/F | 4.7 | L | 0.0047 | [l] | not captured | exact (1.0) | cts13160-tbl-0002:row8:col2, cts13160-tbl-0002:row8:col3, cts13160-tbl-0002:row8:col4, cts13160-tbl-0002:row8:col5 | — | not captured |
| V p2/F (L) | `Q78` · V3/F | 228 | L | 0.228 | [l] | not captured | exact (1.0) | cts13160-tbl-0002:row9:col1, cts13160-tbl-0002:row9:col2, cts13160-tbl-0002:row9:col3, cts13160-tbl-0002:row9:col4 | — | not captured |
| F 1 | `Q40` · Fab | 9.6 | not captured | not captured | not captured | not captured | space_fold (0.95) | cts13160-tbl-0002:row11:col2, cts13160-tbl-0002:row11:col3, cts13160-tbl-0002:row11:col4, cts13160-tbl-0002:row11:col5, cts13160-fig-0002:caption | — | not captured |
| K a (1/h) | `Q49` · kabs | 11.3 | 1/h | 0.003138888888888889 | 1/h | not captured | exact (1.0) | cts13160-tbl-0002:row12:col2, cts13160-tbl-0002:row12:col3, cts13160-tbl-0002:row12:col4, cts13160-tbl-0002:row12:col5 | — | not captured |
| ALAG1 (h) | `Q83` · tlag | 12.7 | h | 45720.0 | [h] | not captured | exact (1.0) | cts13160-tbl-0002:row13:col2, cts13160-tbl-0002:row13:col3, cts13160-tbl-0002:row13:col4, cts13160-tbl-0002:row13:col5 | — | not captured |
| D 2 (h) | `Q60` · t1/2β | 8.3 | h | 29880.000000000004 | [h] | not captured | llm (0.6) | cts13160-tbl-0002:row14:col2, cts13160-tbl-0002:row14:col3, cts13160-tbl-0002:row14:col4, cts13160-tbl-0002:row14:col5 | — | not captured |
| theta_cl_f_body_weight | `Q900` · theta_cl_f_body_weight | 74 | not captured | not captured | not captured | not captured | not captured (not captured) | cts13160-tbl-0002:row6:col1, cts13160-tbl-0002:row6:col2, cts13160-tbl-0002:row6:col3, cts13160-tbl-0002:row6:col4 | — | not captured |
| theta_q76_body_weight | `Q900` · theta_q76_body_weight | 29.3 | not captured | not captured | not captured | not captured | not captured (not captured) | cts13160-tbl-0002:row10:col1, cts13160-tbl-0002:row10:col2, cts13160-tbl-0002:row10:col3, cts13160-tbl-0002:row10:col4, cts13160-tbl-0002:row10:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'σ prop (%)' routed out of structural estimates ('Residual error')
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q83 ('ALAG2 (h)', value '8.7') — already have one for this compound
- dropped value-less row: 'F 2'
- dropped value-less row: 'D 2'
- dropped value-less row: 'K a'
- dropped value-less row: 'V c/F'
- dropped value-less row: 'V p1/F'
- dropped value-less row: 'V p2/F'
- dropped value-less row: 'Q 1/F'
- dropped value-less row: 'Q 2/F'
- dropped value-less row: 'CL/F'
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'K a (1/h)' → 1/h (from the paper text: "Text states 'first‐order absorption rate constant (k a, 0.917/h)', indicating rate constants are in 1/h.")
- metabolite baloxavir acid: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baloxavir acid
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- row roles (LLM): model_class=compartmental; 31/31 row label(s) assigned, 43 linked by role
- review gap-fill skipped: this record measures 'baloxavir acid', not baloxavir_marboxil — the review values are the parent's

**Extraction notes:**
- unparsed cell cts13160-tbl-0002:row6:col5 = '−0.325 to 1.718'
- unparsed cell cts13160-tbl-0002:row21:col1 = 'Interindividual variability of ALAG1'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13160-tbl-0002:row7:col2', 'cts13160-tbl-0002:row7:col3', 'cts13160-tbl-0002:row7:col4', 'cts13160-tbl-0002:row7:col5'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts13160-tbl-0002:row3:col2', 'cts13160-tbl-0002:row3:col3', 'cts13160-tbl-0002:row3:col4', 'cts13160-tbl-0002:row3:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cts13160-tbl-0002:row12:col2', 'cts13160-tbl-0002:row12:col3', 'cts13160-tbl-0002:row12:col4', 'cts13160-tbl-0002:row12:col5'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['cts13160-tbl-0002:row14:col2', 'cts13160-tbl-0002:row14:col3', 'cts13160-tbl-0002:row14:col4', 'cts13160-tbl-0002:row14:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts13160-tbl-0002:row4:col2', 'cts13160-tbl-0002:row4:col3', 'cts13160-tbl-0002:row4:col4', 'cts13160-tbl-0002:row4:col5'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13160-tbl-0002:row9:col1', 'cts13160-tbl-0002:row9:col2', 'cts13160-tbl-0002:row9:col3', 'cts13160-tbl-0002:row9:col4'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts13160-tbl-0002:row5:col1', 'cts13160-tbl-0002:row5:col2', 'cts13160-tbl-0002:row5:col3', 'cts13160-tbl-0002:row5:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13160-tbl-0002:row8:col2', 'cts13160-tbl-0002:row8:col3', 'cts13160-tbl-0002:row8:col4', 'cts13160-tbl-0002:row8:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['cts13160-tbl-0002:row13:col2', 'cts13160-tbl-0002:row13:col3', 'cts13160-tbl-0002:row13:col4', 'cts13160-tbl-0002:row13:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 9 L | not captured | not captured | ['cts13160-tbl-0002:row7:col2', 'cts13160-tbl-0002:row7:col3', 'cts13160-tbl-0002:row7:col4', 'cts13160-tbl-0002:row7:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.7 L | not captured | not captured | ['cts13160-tbl-0002:row8:col2', 'cts13160-tbl-0002:row8:col3', 'cts13160-tbl-0002:row8:col4', 'cts13160-tbl-0002:row8:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=baloxavir acid) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 5 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 2.7799999999999998e-05 | 7.10419045677101e-05 | 2.5555 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | pass | 5.72e-05 | 7.10419045677101e-05 | 1.242 | ng/ml→SI vs simulated kg/m3 |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_baloxavir_marboxil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2022` / `Kim_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_baloxavir_marboxil/models/modelica/BaloxavirMarboxil_Kim2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_baloxavir_marboxil/models/modelica/BaloxavirMarboxil_Kim2022_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_baloxavir_marboxil/models/modelica/BaloxavirMarboxil_Kim2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference/BaloxavirMarboxil_Kim2022_reference_modelica.zip" download>BaloxavirMarboxil_Kim2022_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference/BaloxavirMarboxil_Kim2022_reference_fmi.zip" download>BaloxavirMarboxil_Kim2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference/BaloxavirMarboxil_Kim2022_reference.svg" alt="BaloxavirMarboxil_Kim2022_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 11.3 /h, lag 762 min, F 1). Doses in the paper: 20, 40, 80 mg.

<dbs-fmusim paramsurl="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference/BaloxavirMarboxil_Kim2022_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference/BaloxavirMarboxil_Kim2022_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `BaloxavirMarboxil_Kim2022_reference_params.json` · controls `BaloxavirMarboxil_Kim2022_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:33 UTC</sub>
