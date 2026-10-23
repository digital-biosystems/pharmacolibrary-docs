<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;risankizumab&quot;,&quot;href&quot;:&quot;drugs/drug_risankizumab/&quot;},{&quot;label&quot;:&quot;Suleiman_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risankizumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risankizumab/Risankizumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risankizumab_Khatri2019_chinese&quot;,&quot;label&quot;:&quot;Khatri_2019_chinese&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risankizumab/Risankizumab_Khatri2019_chinese.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risankizumab_Khatri2019_japanese&quot;,&quot;label&quot;:&quot;Khatri_2019_japanese&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risankizumab/Risankizumab_Khatri2019_japanese.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risankizumab_Khatri2019_risankizumab_1200_mg_iv&quot;,&quot;label&quot;:&quot;Khatri_2019_risankizumab_1200_mg_iv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risankizumab/Risankizumab_Khatri2019_risankizumab_1200_mg_iv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risankizumab_Khatri2019_white&quot;,&quot;label&quot;:&quot;Khatri_2019_white&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risankizumab/Risankizumab_Khatri2019_white.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risankizumab_Suleiman2019_reference&quot;,&quot;label&quot;:&quot;Suleiman_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Risankizumab_Thomas2026_reference&quot;,&quot;label&quot;:&quot;Thomas_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risankizumab/Risankizumab_Thomas2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# risankizumab — `Risankizumab_Suleiman2019_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 672, model 4.11e+03); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="risankizumab" model-id="Risankizumab_Suleiman2019_reference" status="needs_review" stale="false" population="healthy volunteers and subjects with moderate to severe plaque psoriasis" measured-compound="risankizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Suleiman AA, Minocha M, Khatri A, Pang Y, Othman AA. Population Pharmacokinetics of Risankizumab in Healthy Volunteers and Subjects with Moderate to Severe Plaque Psoriasis: Integrated Analyses of Phase I-III Clinical Trials. Clinical pharmacokinetics 58(10):1309–1321 (2019).
  ·  DOI: [10.1007/s40262-019-00759-z](https://doi.org/10.1007/s40262-019-00759-z)

## Population and dosing

**Population:** healthy volunteers and subjects with moderate to severe plaque psoriasis · condition moderate to severe plaque psoriasis, healthy volunteers · age group adult.

**Dosing:** 0.01, 0.25, 1, 5, 18, 150, 200, 300, 1200 mg, iv, multiple.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 5 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference/Risankizumab_Suleiman2019_reference.svg" alt="Risankizumab_Suleiman2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL (L/day) | CL | 0.243 | L/day | 1.8 |
| Vc (L) | V1 | 4.86 | L | 3.8 |
| ka (day−1) | kabs | 0.229 | day−1 | 4.8 |
| Q (L/day) | Q | 0.656 | L/day | 3.7 |
| Vp (L) | V2 | 4.25 | L | 2.0 |
| Absolute SC bioavailability of formulation used in phase III studiesd | FG | 0.890 |  | 7.2 |
| exponent_for_the_effect_of_c_reactive_protein_on_risankizumab_cl | exponent_for_the_effect_of_c_reactive_protein_on_risankizumab_cl | 0.044 |  | 10.5 |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.933 |  | 3.3 |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 1.17 |  | 7.2 |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.377 |  | 12.0 |
| theta_cl_ada | theta_cl_ada | 0.428 | L/day | 5.1 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 672, model 4.11e+03); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (theta_cl_ada), so that value has no SI equivalent. Extracted — risankizumab: CL 0.243 L/day, V1 4.86 L, kabs 0.229 day−1, Q 0.656 L/day, V2 4.25 L, FG 0.89.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of absolute sc bioavailability of formulation used in phase i and ii studiesc: this record has none, the second reading 0.710; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/day) | `Q22` · CL | 0.243 | L/day | 2.812e-09 | m3/s | l/d | 1.8 | exact (1) | Tab3:row2:col1, Tab3:row2:col2 |
| Vc (L) | `Q63` · V1 | 4.86 | L | 0.00486 | m3 | l | 3.8 | exact (1) | Tab3:row3:col1, Tab3:row3:col2 |
| ka (day−1) | `Q49` · kabs | 0.229 | day−1 | 2.65e-06 | 1/s | 1/d | 4.8 | exact (1) | Tab3:row4:col1, Tab3:row4:col2 |
| Q (L/day) | `Q30` · Q | 0.656 | L/day | 7.593e-09 | m3/s | l/d | 3.7 | exact (1) | Tab3:row5:col1, Tab3:row5:col2 |
| Vp (L) | `Q64` · V2 | 4.25 | L | 0.00425 | m3 | l | 2.0 | exact (1) | Tab3:row6:col1, Tab3:row6:col2 |
| Absolute SC bioavailability of formulation used in phase III studiesd | `Q41` · FG | 0.890 |  |  |  |  | 7.2 | llm_corrected (0.6) | Tab3:row8:col1, Tab3:row8:col2 |
| exponent_for_the_effect_of_c_reactive_protein_on_risankizumab_cl | `Q900` · exponent_for_the_effect_of_c_reactive_protein_on_risankizumab_cl | 0.044 |  |  |  |  | 10.5 |  | Tab3:row13:col1, Tab3:row13:col2 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.933 |  |  |  |  | 3.3 |  | Tab3:row9:col1, Tab3:row9:col2 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 1.17 |  |  |  |  | 7.2 |  | Tab3:row10:col1, Tab3:row10:col2 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.377 |  |  |  |  | 12.0 |  | Tab3:row14:col1, Tab3:row14:col2 |
| theta_cl_ada | `Q900` · theta_cl_ada | 0.428 | L/day |  |  |  | 5.1 |  | Tab3:row15:col1, Tab3:row15:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- table section iiv: 'IIV for CL (%CV)e' routed out of structural estimates ('Inter-individual correlation and residual variability')
- table section iiv: 'IIV for Vc (%CV)e' routed out of structural estimates ('Inter-individual correlation and residual variability')
- table section iiv: 'IIV for ka (%CV)e' routed out of structural estimates ('Inter-individual correlation and residual variability')
- table section iiv: 'Variance of IIV for Ff; (additive error model in logit domain)' routed out of structural estimates ('Inter-individual correlation and residual variability')
- table section iiv: 'Covariance between IIV CL and IIV Vc (% correlation)' routed out of structural estimates ('Inter-individual correlation and residual variability')
- table section iiv: 'Proportional residual error (%CV)' routed out of structural estimates ('Inter-individual correlation and residual variability')
- dropped value-less row: 'Exponent for the effect of serum albumin on risankizumab CL'
- dropped value-less row: 'Exponent for the effect of serum creatinine on risankizumab CL'
- covariate level 'Exponent for the effect of C-reactive protein on risankizumab CL' → Q900:exponent_for_the_effect_of_c_reactive_protein_on_risankizumab_cl = 0.044 (power on Q22)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=risankizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none found for 'risankizumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row2:col3 = '0.239 (0.217–0.263)'
- unparsed cell Tab3:row3:col3 = '4.70 (3.95–5.53)'
- unparsed cell Tab3:row4:col3 = '0.223 (0.179–0.296)'
- unparsed cell Tab3:row5:col3 = '0.656 (0.540–0.783)'
- unparsed cell Tab3:row6:col3 = '4.24 (3.85–4.65)'
- unparsed cell Tab3:row7:col3 = '0.698 (0.624–0.781)'
- unparsed cell Tab3:row8:col3 = '0.877 (0.791–0.960)'
- unparsed cell Tab3:row9:col3 = '0.931 (0.862–0.995)'
- unparsed cell Tab3:row10:col3 = '1.17 (0.979–1.35)'
- unparsed cell Tab3:row11:col1 = '− 0.715'
- unparsed cell Tab3:row11:col3 = '− 0.713 (− 0.886 to –0.516)'
- unparsed cell Tab3:row12:col1 = '− 0.253'
- unparsed cell Tab3:row12:col3 = '− 0.255 (− 0.308 to –0.203)'
- unparsed cell Tab3:row13:col3 = '0.043 (0.034–0.054)'
- unparsed cell Tab3:row14:col3 = '0.382 (0.245–0.520)'
- unparsed cell Tab3:row15:col3 = '0.432 (0.287–0.766)'
- unparsed cell Tab3:row17:col3 = '0.053 (0.038–0.067)'
- unparsed cell Tab3:row18:col3 = '0.109 (0.052–0.158)'
- unparsed cell Tab3:row19:col3 = '0.315 (0.129–0.578)'
- unparsed cell Tab3:row20:col3 = '0.454 (0.269–0.795)'
- unparsed cell Tab3:row21:col3 = '0.028 (− 0.003 to 0.051)'
- unparsed cell Tab3:row22:col3 = '0.036 (0.033–0.039)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.846 (22/26 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absolute sc bioavailability of formulation used in phase i and ii studiesc]` |  | 0.710 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absolute sc bioavailability of formulation used in phase iii studiesd].parameter_id` | Q41 | Q87 | mismatch |
| `gpt-oss-120b` | `parameters[exponent_for_the_effect_of_c_reactive_protein_on_risankizumab_cl]` | 0.044 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_weight_power]` |  | 0.044 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 28 | 28.27 | 1.01 | 0.25 | reported t½β |
| C2_reference | pass |  |  |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['Tab3:row6:col1', 'Tab3:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.243 |  |  | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0101 L/h |  |  | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.86 L |  |  | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.25 L |  |  | ['Tab3:row6:col1', 'Tab3:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=risankizumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 672 | 4111 | 6.117 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference/Risankizumab_Suleiman2019_reference_modelica.zip" download>Risankizumab_Suleiman2019_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference/Risankizumab_Suleiman2019_reference_fmi.zip" download>Risankizumab_Suleiman2019_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference/Risankizumab_Suleiman2019_reference_matlab.zip" download>Risankizumab_Suleiman2019_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference/Risankizumab_Suleiman2019_reference_matlab_simbio.zip" download>Risankizumab_Suleiman2019_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference/Risankizumab_Suleiman2019_reference_sbml.zip" download>Risankizumab_Suleiman2019_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference/Risankizumab_Suleiman2019_reference_cellml.zip" download>Risankizumab_Suleiman2019_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.71 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-08 | kg |
| input | model | `Cl` | 2.812e-09 | m3/s |
| input | model | `VdPerKg` | 6.943e-05 | m3/kg |
| input | model | `k12` | 1.562e-06 | 1/s |
| input | model | `k21` | 1.786e-06 | 1/s |
| input | model | `ka` | 2.65e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Suleiman AA, Minocha M, Khatri A, Pang Y, Othman AA. Population Pharmacokinetics of Risankizumab in Healthy Volunteers and Subjects with Moderate to Severe Plaque Psoriasis: Integrated Analyses of Phase I-III Clinical Trials. Clinical pharmacokinetics 58(10):1309–1321 (2019). [doi:10.1007/s40262-019-00759-z](https://doi.org/10.1007/s40262-019-00759-z)

**This record:** Pharmacolibrary v26.09, model `Risankizumab_Suleiman2019_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference>

```bibtex
@misc{pharmacolibrary_RisankizumabSuleiman2019reference,
  title  = {{Pharmacolibrary model Risankizumab_Suleiman2019_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference},
  note   = {Parameters from doi:10.1007/s40262-019-00759-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.01 mg, single dose, first-order absorption (ka 0.00954 /h, F 0.71). Doses in the paper: 0.01, 0.25, 1, 5, 18, 150, 200, 300, 1200 mg.

<dbs-fmusim paramsurl="drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference/Risankizumab_Suleiman2019_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference/Risankizumab_Suleiman2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Risankizumab_Suleiman2019_reference_params.json` · controls `Risankizumab_Suleiman2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisankizumab%5D%20Risankizumab_Suleiman2019_reference&body=Drug%3A%20risankizumab%0ARecord%3A%20Risankizumab_Suleiman2019_reference%0APaper%3A%20Suleiman_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_risankizumab/Risankizumab_Suleiman2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 00:20 UTC</sub>
