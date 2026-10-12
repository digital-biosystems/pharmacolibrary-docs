<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salmeterol&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/&quot;},{&quot;label&quot;:&quot;Thoueille_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salmeterol_Berkhout2025_reference&quot;,&quot;label&quot;:&quot;Berkhout_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Berkhout2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salmeterol_Himstedt2020_salmeterol&quot;,&quot;label&quot;:&quot;Himstedt_2020_salmeterol&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salmeterol_Thoueille2026_reference&quot;,&quot;label&quot;:&quot;Thoueille_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Thoueille2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salmeterol — `Salmeterol_Thoueille2026_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The salmeterol parent–metabolite model was rejected because the simulated structure was a one-compartment enteral model instead of the three-compartment parent–metabolite topology, the output was the parent central compartment rather than the metabolite, and the peripheral volume V2/F (871 L) was neither emitted nor defaulted.**

The record describes a parent–metabolite structure for salmeterol forming α-hydroxysalmeterol (k13 = 0.30 h⁻¹) with three compartments (V1/F 446 L, V2/F 871 L, Q/F 1490 L/h, CL/F 193 L/h), but the simulated model was a one-compartment enteral model, so the structure did not match. The simulated output was the parent's central compartment instead of the measured metabolite compartment. Of 8 expected parameters, only 7 were covered: V2/F was missing. In addition, the athlete covariate effect (θAthletes = 2.91) was defined but only the reference individual was simulated, so covariate scenarios were not exercised; the builder also left the lag time at a default and assumed F = 1, Fm = 1 with no molar correction. Extracted — salmeterol: V1/F 446 L, Q/F 1.49e+03 L/h, V2/F 871 L, CL/F 193 L/h, kel 0.00094 h −1, kabs -0.89 h−1; α-hydroxysalmeterol: kfm 0.3 h −1, CL/F 233 L/h, kel 0.015 h −1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has salmeterol → α-hydroxysalmeterol (metabolism), the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Thoueille P et al., Pharmacometric-Based Evaluation of Salm…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70187](https://doi.org/10.1002/psp4.70187)

<div class="pk-model-meta" hidden drug="salmeterol" model-id="Salmeterol_Thoueille2026_reference" status="rejected" stale="false" population="healthy participants, chronic asthmatics, and athletes" measured-compound="salmeterol" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 9 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1/F (L) | `Q290` · V1/F | 446 | L | 0.446 | [l] | not captured | exact (1.0) | psp470187-tbl-0002:row2:col1 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 1490 | L/h | 0.0004138888888888889 | [l] / [h] | not captured | exact (1.0) | psp470187-tbl-0002:row4:col1 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 871 | L | 0.871 | [l] | not captured | exact (1.0) | psp470187-tbl-0002:row6:col1 | — | not captured |
| CLS/F (L/h) | `Q27` · CL/F | 193 | L/h | 5.3611111111111115e-05 | [l] / [h] | not captured | llm (0.6) | psp470187-tbl-0002:row8:col1 | — | not captured |
| k13 (h −1 ) | `Q305` · kfm | 0.30 | h −1 | 8.333333333333333e-05 | [1] / [h] | not captured | exact (1.0) | psp470187-tbl-0002:row11:col1 | — | not captured |
| CLα/F (L/h) | `Q27` · CL/F | 233 | L/h | 6.472222222222223e-05 | [l] / [h] | not captured | exact (1.0) | psp470187-tbl-0002:row13:col1 | — | not captured |
| k14 (h −1 ) | `Q47` · kel | 0.00094 | h −1 | 2.6111111111111113e-07 | [1] / [h] | not captured | exact (1.0) | psp470187-tbl-0002:row14:col1 | — | not captured |
| k35 (h −1 ) | `Q47` · kel | 0.015 | h −1 | 4.166666666666667e-06 | [1] / [h] | not captured | exact (1.0) | psp470187-tbl-0002:row17:col1 | — | not captured |
| θAthletes | `Q900` · θAthletes | 2.91 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| KA | `Q49` · kabs | -0.89 | h−1 | -0.00024722222222222224 | 1/h | not captured | review_gapfill (0.7) | Ambery_2015:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped value-less row: 'Parameters'
- kept covariate coefficient θAthletes=2.91 (covariate Athletes) — not an ontology parameter
- dropped unlinked row (NIL): 'UR_PROD (L/h)' — extend the ontology if this is a real PK parameter (source ['psp470187-tbl-0002:row18:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=salmeterol
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles: 3 per-group rows of salmeterol residual_error but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of α-hydroxysalmeterol residual_error but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 27/27 row label(s) assigned, 8 linked by role; re-tagged parent→α-hydroxysalmeterol ×7
- gap-filled Q49 (kabs) from Ambery_2015's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell psp470187-tbl-0002:row2:col2 = '446 [356–524]'
- unparsed cell psp470187-tbl-0002:row3:col2 = '16 [5–22]'
- unparsed cell psp470187-tbl-0002:row4:col2 = '1443 [1121–2144]'
- unparsed cell psp470187-tbl-0002:row5:col2 = '81 [33–174]'
- unparsed cell psp470187-tbl-0002:row6:col2 = '873 [766–985]'
- unparsed cell psp470187-tbl-0002:row7:col2 = '43 [28–62]'
- unparsed cell psp470187-tbl-0002:row8:col2 = '192 [154–231]'
- unparsed cell psp470187-tbl-0002:row9:col2 = '31 [16–44]'
- unparsed cell psp470187-tbl-0002:row10:col2 = '1.64 [1.23–2.16]'
- unparsed cell psp470187-tbl-0002:row11:col2 = '0.30 [0.23–0.39]'
- unparsed cell psp470187-tbl-0002:row12:col2 = '41 [25–54]'
- unparsed cell psp470187-tbl-0002:row13:col2 = '232 [177–293]'
- unparsed cell psp470187-tbl-0002:row14:col2 = '0.00095 [0.00075–0.0012]'
- unparsed cell psp470187-tbl-0002:row15:col2 = '27 [19–37]'
- unparsed cell psp470187-tbl-0002:row16:col2 = '2.91 [2.28–3.70]'
- unparsed cell psp470187-tbl-0002:row17:col2 = '0.015 [0.012–0.017]'
- unparsed cell psp470187-tbl-0002:row18:col2 = '0.080 [0.062–0.100]'
- unparsed cell psp470187-tbl-0002:row19:col2 = '72 [40–109]'
- unparsed cell psp470187-tbl-0002:row20:col2 = '22 [19–24]'
- unparsed cell psp470187-tbl-0002:row21:col2 = '38 [31–45]'
- unparsed cell psp470187-tbl-0002:row22:col2 = '52 [33–65]'
- unparsed cell psp470187-tbl-0002:row23:col2 = '29 [22–35]'
- unparsed cell psp470187-tbl-0002:row24:col2 = '40 [36–46]'
- unparsed cell psp470187-tbl-0002:row25:col2 = '38 [31–45]'
- unparsed cell psp470187-tbl-0002:row26:col2 = '57 [41–75]'
- unparsed cell psp470187-tbl-0002:row27:col2 = '51 [41–61]'
- unparsed cell psp470187-tbl-0002:row28:col2 = '60 [44–73]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `glm-5.3-flash` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (9/18 fields) | 9 |

<details><summary>9 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['salmeterol', 'α-hydroxysalmeterol', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[clα/f]` | 233 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` | not captured | 0.30 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` | 0.30 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k14].parameter_id` | Q47 | Q347 | mismatch |
| `gpt-oss-120b` | `parameters[k35]` | not captured | 0.015 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k35]` | 0.015 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | -0.89 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ur_prod]` | not captured | 0.079 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row8:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row13:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470187-tbl-0002:row2:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row11:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row14:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row17:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ambery_2015:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470187-tbl-0002:row6:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 193 L/h | not captured | not captured | ['psp470187-tbl-0002:row8:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 233 L/h | not captured | not captured | ['psp470187-tbl-0002:row13:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 446 L | not captured | not captured | ['psp470187-tbl-0002:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 871 L | not captured | not captured | ['psp470187-tbl-0002:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=salmeterol) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 8 scholar param(s) emitted or defaulted | 7 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_rate_constant_conversion | not captured | pass | k13 (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_shared_parameters | not captured | pass | 3 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 0.13 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | not captured | 0.0 | not captured | non-numeric value |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_salmeterol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Thoueille_2026` / `Thoueille_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_salmeterol/models/modelica/Salmeterol_Thoueille2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_salmeterol/models/modelica/Salmeterol_Thoueille2026_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_salmeterol/models/modelica/Salmeterol_Thoueille2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.1 mg, single dose, first-order absorption (ka -0.89 /h, F 1). Doses in the paper: 0.1, 0.2 mg.

<dbs-fmusim paramsurl="drugs/drug_salmeterol/Salmeterol_Thoueille2026_reference/Salmeterol_Thoueille2026_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_salmeterol/Salmeterol_Thoueille2026_reference/Salmeterol_Thoueille2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Salmeterol_Thoueille2026_reference_params.json` · controls `Salmeterol_Thoueille2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:51 UTC</sub>
