<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;axitinib&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/&quot;},{&quot;label&quot;:&quot;Garrett_2014 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Axitinib_Garrett2014_base&quot;,&quot;label&quot;:&quot;Garrett_2014_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Garrett2014_base.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Axitinib_Garrett2014_final&quot;,&quot;label&quot;:&quot;Garrett_2014_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Garrett2014_final.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Tortorici2014_reference&quot;,&quot;label&quot;:&quot;Tortorici_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Tortorici2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Rini2013_reference&quot;,&quot;label&quot;:&quot;Rini_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Rini2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# axitinib — `Axitinib_Garrett2014_base`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.688). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of f, form iv, fed: this record has none, the second reading 0.469; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Garrett M et al., Population pharmacokinetic analysis of…, British journal of clinical… (2014)
  ·  DOI: [10.1111/bcp.12206](https://doi.org/10.1111/bcp.12206)

<div class="pk-model-meta" hidden drug="axitinib" model-id="Axitinib_Garrett2014_base" status="accepted_with_caveats" stale="false" population="healthy volunteers" measured-compound="axitinib" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q22` · CL | 17.1 | l h -1 | 4.75e-06 | [l] / [h] | not captured | exact (1.0) | tab_0:row3:col1, tab_0:row3:col2, tab_0:row3:col5 | — | 0.270 (None% RSE) |
| Vc (l) | `Q63` · V1 | 46.6 | l | 0.0466 | [l] | not captured | exact (1.0) | tab_0:row4:col1, tab_0:row4:col2, tab_0:row4:col5 | — | 0.140 (None% RSE) |
| Q (l h -1 ) | `Q30` · Q | 1.73 | l h -1 | 4.805555555555556e-07 | [l] / [h] | not captured | exact (1.0) | tab_0:row6:col1, tab_0:row6:col2, tab_0:row6:col5 | — | not captured |
| Vp (l) | `Q64` · V2 | 44.7 | l | 0.044700000000000004 | [l] | not captured | exact (1.0) | tab_0:row7:col1, tab_0:row7:col2, tab_0:row7:col5 | — | 1.06 (None% RSE) |
| Fasting | `Q87` · Frel | 2.10 | not captured | not captured | not captured | not captured | llm (0.6) | tab_0:row9:col1, tab_0:row9:col2, tab_0:row9:col5, tab_0:row11:col1, tab_0:row11:col2, tab_0:row11:col5 | — | not captured |
| tlag (h) ‡ | `Q83` · tlag | 0.457 | h | 1645.2 | [h] | not captured | space_fold (0.95) | tab_0:row13:col1, tab_0:row13:col2 | — | not captured |
| theta_q319_weight | `Q900` · theta_q319_weight | 14 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_0:row5:col5 | — | not captured |
| theta_q49_fed_ka_h_1_form_iv | `Q900` · theta_q49_fed_ka_h_1_form_iv | 0.530 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_0:row8:col1, tab_0:row8:col2, tab_0:row8:col5 | — | not captured |
| k a | `Q49` · kabs | 78.7 | per day | 0.0009108796296296296 | 1/h | not captured | review_gapfill (0.7) | Ma_2019:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω 2 CL' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω 2 Vc' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω 2 Q' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω 2 Vp' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω 2 ka' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω CL ω Vc' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω Q ω Vp' routed out of structural estimates ('Interindividual variability model parameters §')
- table section residual_error: 'Oral, %' routed out of structural estimates ('Residual error model parameters')
- table section residual_error: 'Intravenous, %' routed out of structural estimates ('Residual error model parameters')
- dropped unlinked row (NIL): 'Form XLI' — extend the ontology if this is a real PK parameter (source ['tab_0:row12:col1', 'tab_0:row12:col2', 'tab_0:row12:col5'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=axitinib
- model-stage split: 'base' is the base model of Garrett_2014 (paper reports 2 stages: base, final); same population, different model-building step
- gap-filled Q49 (kabs) from Ma_2019's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_0:row3:col3 = '14.6, 20.1'
- unparsed cell tab_0:row3:col6 = '14.9, 19.4'
- unparsed cell tab_0:row4:col3 = '40.2, 54.0'
- unparsed cell tab_0:row4:col6 = '40.0, 51.3'
- unparsed cell tab_0:row5:col6 = '0.556, 0.960'
- unparsed cell tab_0:row6:col3 = '1.47, 2.03'
- unparsed cell tab_0:row6:col6 = '1.45, 2.08'
- unparsed cell tab_0:row7:col3 = '30.5, 65.6'
- unparsed cell tab_0:row7:col6 = '28.0, 75.3'
- unparsed cell tab_0:row8:col3 = '0.464, 0.605'
- unparsed cell tab_0:row8:col6 = '0.450, 0.607'
- unparsed cell tab_0:row9:col3 = '1.55, 2.65'
- unparsed cell tab_0:row9:col6 = '1.49, 2.65'
- unparsed cell tab_0:row10:col3 = '0.403, 0.546'
- unparsed cell tab_0:row10:col6 = '0.403, 0.536'
- unparsed cell tab_0:row11:col3 = '0.228, 0.418'
- unparsed cell tab_0:row11:col6 = '0.240, 0.436'
- unparsed cell tab_0:row12:col3 = '-0.216, -0.0780'
- unparsed cell tab_0:row12:col6 = '-0.219, -0.0814'
- unparsed cell tab_0:row13:col3 = '0.454, 0.460'
- unparsed cell tab_0:row15:col3 = '0.216, 0.337'
- unparsed cell tab_0:row15:col6 = '0.208, 0.355'
- unparsed cell tab_0:row16:col3 = '0.104, 0.188'
- unparsed cell tab_0:row16:col6 = '0.0579, 0.155'
- unparsed cell tab_0:row17:col3 = '0.244, 0.591'
- unparsed cell tab_0:row17:col6 = '0.266, 0.619'
- unparsed cell tab_0:row18:col3 = '0.549, 2.05'
- unparsed cell tab_0:row18:col6 = '0.566, 2.02'
- unparsed cell tab_0:row19:col3 = '0.360, 0.629'
- unparsed cell tab_0:row19:col6 = '0.392, 0.654'
- unparsed cell tab_0:row20:col3 = '0.114, 0.202'
- unparsed cell tab_0:row20:col6 = '0.0812, 0.201'
- unparsed cell tab_0:row21:col3 = '0.272, 0.914'
- unparsed cell tab_0:row21:col6 = '0.300, 0.938'
- unparsed cell tab_0:row23:col3 = '48.3, 53.7'
- unparsed cell tab_0:row23:col6 = '48.3, 53.7'
- unparsed cell tab_0:row24:col3 = '25.5, 45.9'
- unparsed cell tab_0:row24:col6 = '25.4, 47.7'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.688 (11/16 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[f, form iv, fed]` | not captured | 0.469 | only_one_extracted |
| `qwen3.8-27b` | `parameters[fasting]` | 2.10 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[k a]` | 78.7 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q1_weight]` | not captured | 14 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` | 14 | not captured | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row6:col2', 'tab_0:row6:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ma_2019:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row7:col1', 'tab_0:row7:col2', 'tab_0:row7:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_0:row13:col1', 'tab_0:row13:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 17.1 | not captured | not captured | ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.1 L/h | not captured | not captured | ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 46.6 L | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 44.7 L | not captured | not captured | ['tab_0:row7:col1', 'tab_0:row7:col2', 'tab_0:row7:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=axitinib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 19.3 | 5.837753945134076e-06 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 20.6 | 5.837753945134076e-06 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8 | 5.837753945134076e-06 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 19.3 | 5.837753945134076e-06 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 17.9 | 5.837753945134076e-06 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_axitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Garrett_2014` / `Garrett_2014::base`)
- model: `../../../knowledgebase/drugs/drug_axitinib/models/modelica/Axitinib_Garrett2014_base.mo`
- deviation: `../../../knowledgebase/drugs/drug_axitinib/models/modelica/Axitinib_Garrett2014_base.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_axitinib/models/modelica/Axitinib_Garrett2014_base.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_modelica.zip" download>Axitinib_Garrett2014_base_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_fmi.zip" download>Axitinib_Garrett2014_base_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_matlab.zip" download>Axitinib_Garrett2014_base_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_matlab_simbio.zip" download>Axitinib_Garrett2014_base_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_sbml.zip" download>Axitinib_Garrett2014_base_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_cellml.zip" download>Axitinib_Garrett2014_base_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base.svg" alt="Axitinib_Garrett2014_base diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1 mg, single dose, first-order absorption (ka 3.28 /h, lag 27.4 min, F 0.469). Doses in the paper: 1, 5 mg.

<dbs-fmusim paramsurl="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Axitinib_Garrett2014_base_params.json` · controls `Axitinib_Garrett2014_base_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:35 UTC</sub>
