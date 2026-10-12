<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;nemolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_nemolizumab/&quot;},{&quot;label&quot;:&quot;Fauchet_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nemolizumab_Fauchet2026_reference&quot;,&quot;label&quot;:&quot;Fauchet_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nemolizumab — `Nemolizumab_Fauchet2026_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.806). The first reading is what the record holds.">cross-check: disputed</span>

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

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nemolizumab, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Fauchet F et al., Model-informed drug development to supp…, British journal of clinical… (2026)
  ·  DOI: [10.1002/bcp.70435](https://doi.org/10.1002/bcp.70435)

<div class="pk-model-meta" hidden drug="nemolizumab" model-id="Nemolizumab_Fauchet2026_reference" status="accepted_with_caveats" stale="false" population="adults and adolescents with moderate to severe atopic dermatitis" measured-compound="nemolizumab" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted, plus 8 covariate effects.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/day) | `Q27` · CL/F | 0.263 | L/day | 3.0439814814814813e-09 | [l] / [d] | 1.3 | exact (1.0) | Fauchet_2026_table_p7_1:row0:col1, Fauchet_2026_table_p7_1:row0:col3 | — | 0.109 (2.2% RSE) |
| V/F (L) | `Q76` · V/F | 7.670 | L | 0.00767 | [l] | 1.3 | exact (1.0) | Fauchet_2026_table_p7_1:row1:col1, Fauchet_2026_table_p7_1:row1:col3 | — | 0.110 (6.2% RSE) |
| K_a (1/day) | `Q49` · kabs | 0.476 | 1/day | 5.509259259259259e-06 | 1/h | 7.7 | exact (1.0) | Fauchet_2026_table_p7_1:row2:col1, Fauchet_2026_table_p7_1:row2:col3 | — | not captured |
| ALAG (day) | `Q83` · tlag | 0.043 | day | 3715.2 | [d] | 23.0 | exact (1.0) | Fauchet_2026_table_p7_1:row3:col1, Fauchet_2026_table_p7_1:row3:col3 | — | not captured |
| theta_cl_f_albumin | `Q900` · theta_cl_f_albumin | -1.350 | not captured | not captured | not captured | 9.2 | not captured (not captured) | Fauchet_2026_table_p7_1:row6:col1, Fauchet_2026_table_p7_1:row6:col3 | — | not captured |
| theta_cl_f_crcl | `Q900` · theta_cl_f_crcl | 0.168 | not captured | not captured | not captured | 15.0 | not captured (not captured) | Fauchet_2026_table_p7_1:row7:col1, Fauchet_2026_table_p7_1:row7:col3 | — | not captured |
| theta_cl_f_ethnicity | `Q900` · theta_cl_f_ethnicity | 0.226 | not captured | not captured | not captured | 20.0 | not captured (not captured) | Fauchet_2026_table_p7_1:row8:col1, Fauchet_2026_table_p7_1:row8:col3 | — | not captured |
| theta_cl_f_race | `Q900` · theta_cl_f_race | 0.186 | not captured | not captured | not captured | 9.5 | not captured (not captured) | Fauchet_2026_table_p7_1:row9:col1, Fauchet_2026_table_p7_1:row9:col3 | — | not captured |
| theta_cl_f_sex | `Q900` · theta_cl_f_sex | 0.100 | not captured | not captured | not captured | 16.0 | not captured (not captured) | Fauchet_2026_table_p7_1:row10:col1, Fauchet_2026_table_p7_1:row10:col3 | — | not captured |
| theta_q319_bodyweight | `Q900` · theta_q319_bodyweight | 0.662 | not captured | not captured | not captured | 6.0 | not captured (not captured) | Fauchet_2026_table_p7_1:row11:col1, Fauchet_2026_table_p7_1:row11:col3 | — | not captured |
| theta_v_f_albumin | `Q900` · theta_v_f_albumin | -0.535 | not captured | not captured | not captured | 29.0 | not captured (not captured) | Fauchet_2026_table_p7_1:row12:col1, Fauchet_2026_table_p7_1:row12:col3 | — | not captured |
| theta_v_f_bodyweight | `Q900` · theta_v_f_bodyweight | 0.802 | not captured | not captured | not captured | 5.3 | not captured (not captured) | Fauchet_2026_table_p7_1:row13:col1, Fauchet_2026_table_p7_1:row13:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose effect on F^b' — extend the ontology if this is a real PK parameter (source ['Fauchet_2026_table_p7_1:row5:col1', 'Fauchet_2026_table_p7_1:row5:col3'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'K_a (1/day)' → 1/day (from the paper text: "The provided paper text explicitly lists the parameter as 'K A (1/day) 0.476' in the table content section.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nemolizumab
- molar mass: none found for 'nemolizumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Fauchet_2026_table_p7_1:row0:col4 = '0.257; 0.269'
- unparsed cell Fauchet_2026_table_p7_1:row1:col4 = '7.47; 7.86'
- unparsed cell Fauchet_2026_table_p7_1:row2:col4 = '0.419; 0.591'
- unparsed cell Fauchet_2026_table_p7_1:row3:col4 = '0.0158; 0.0657'
- unparsed cell Fauchet_2026_table_p7_1:row4:col4 = '0.194; 0.207'
- unparsed cell Fauchet_2026_table_p7_1:row5:col4 = '−0.172; −0.114'
- unparsed cell Fauchet_2026_table_p7_1:row6:col4 = '−1.6; −1.11'
- unparsed cell Fauchet_2026_table_p7_1:row7:col4 = '0.12; 0.216'
- unparsed cell Fauchet_2026_table_p7_1:row8:col4 = '0.143; 0.314'
- unparsed cell Fauchet_2026_table_p7_1:row9:col4 = '0.152; 0.221'
- unparsed cell Fauchet_2026_table_p7_1:row10:col4 = '0.0695; 0.13'
- unparsed cell Fauchet_2026_table_p7_1:row11:col4 = '0.583; 0.739'
- unparsed cell Fauchet_2026_table_p7_1:row12:col4 = '−0.832; −0.241'
- unparsed cell Fauchet_2026_table_p7_1:row13:col4 = '0.717; 0.888'
- unparsed cell Fauchet_2026_table_p7_1:row14:col4 = '0.0989; 0.117'
- unparsed cell Fauchet_2026_table_p7_1:row15:col4 = '0.0832; 0.137'
- unparsed cell Fauchet_2026_table_p7_1:row16:col4 = '0.054; 0.082'
- unparsed cell Fauchet_2026_table_p7_1:row17:col4 = '0.228; 0.483'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.806 (25/31 fields) | 6 |

<details><summary>6 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[dose effect on f^b]` | not captured | -0.144 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_bodyweight]` | not captured | 0.662 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_bodyweight]` | 0.662 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | nemolizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | nemolizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Fauchet_2026_table_p7_1:row0:col1', 'Fauchet_2026_table_p7_1:row0:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Fauchet_2026_table_p7_1:row2:col1', 'Fauchet_2026_table_p7_1:row2:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Fauchet_2026_table_p7_1:row1:col1', 'Fauchet_2026_table_p7_1:row1:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Fauchet_2026_table_p7_1:row3:col1', 'Fauchet_2026_table_p7_1:row3:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.011 L/h | not captured | not captured | ['Fauchet_2026_table_p7_1:row0:col1', 'Fauchet_2026_table_p7_1:row0:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 7.67 L | not captured | not captured | ['Fauchet_2026_table_p7_1:row1:col1', 'Fauchet_2026_table_p7_1:row1:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=nemolizumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nemolizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fauchet_2026` / `Fauchet_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_nemolizumab/models/modelica/Nemolizumab_Fauchet2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_nemolizumab/models/modelica/Nemolizumab_Fauchet2026_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_nemolizumab/models/modelica/Nemolizumab_Fauchet2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference/Nemolizumab_Fauchet2026_reference_modelica.zip" download>Nemolizumab_Fauchet2026_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference/Nemolizumab_Fauchet2026_reference_fmi.zip" download>Nemolizumab_Fauchet2026_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference/Nemolizumab_Fauchet2026_reference_matlab.zip" download>Nemolizumab_Fauchet2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference/Nemolizumab_Fauchet2026_reference_matlab_simbio.zip" download>Nemolizumab_Fauchet2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference/Nemolizumab_Fauchet2026_reference_sbml.zip" download>Nemolizumab_Fauchet2026_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference/Nemolizumab_Fauchet2026_reference_cellml.zip" download>Nemolizumab_Fauchet2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference/Nemolizumab_Fauchet2026_reference.svg" alt="Nemolizumab_Fauchet2026_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 30 mg, single dose, first-order absorption (ka 0.0198 /h, lag 61.9 min, F 1). Doses in the paper: 30, 60 mg.

<dbs-fmusim paramsurl="drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference/Nemolizumab_Fauchet2026_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference/Nemolizumab_Fauchet2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Nemolizumab_Fauchet2026_reference_params.json` · controls `Nemolizumab_Fauchet2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:36 UTC</sub>
