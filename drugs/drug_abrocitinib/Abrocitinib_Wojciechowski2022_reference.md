<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;abrocitinib&quot;,&quot;href&quot;:&quot;drugs/drug_abrocitinib/&quot;},{&quot;label&quot;:&quot;Wojciechowski_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abrocitinib_Wojciechowski2022_reference&quot;,&quot;label&quot;:&quot;Wojciechowski_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abrocitinib — `Abrocitinib_Wojciechowski2022_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.393). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Abrocitinib model was held back because absolute bioavailability and lag time were missing and replaced by defaults, causing peak concentration to exceed the paper's value.**

The record lacks extracted estimates for absolute bioavailability and lag time, so library defaults were used instead of paper-specific values. This deviation, combined with an unconvertible unit for the zero-order input rate, compromised the simulation. Consequently, the model's simulated peak concentration of 0.00166 exceeded the paper's reported value of 0.00112 by a ratio of 1.4763. Additionally, covariate effects such as hepatic impairment and sex were defined in the record but were not exercised in the simulation. Extracted — abrocitinib: CL 21.7 L/h, V1 86.3 L, Q 1.13 L/h, V2 8.11 L, R1 73.1 mg/h, kabs 3.99 h−1, Fab 1.3.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].covariate_forms`: this record has ['linear_fractional', 'linear_fractional'], the second reading ['linear_fractional']; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Wojciechowski J et al., Population Pharmacokinetics of Abrociti…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-021-01104-z](https://doi.org/10.1007/s40262-021-01104-z)

<div class="pk-model-meta" hidden drug="abrocitinib" model-id="Abrocitinib_Wojciechowski2022_reference" status="needs_review" stale="false" population="healthy individuals and patients with psoriasis or atopic dermatitis" measured-compound="abrocitinib" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted, plus 5 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/h | `Q22` · CL | 21.7 | L/h | 6.027777777777778e-06 | [l] / [h] | not captured | exact (1.0) | Tab2:row4:col1, Tab2:row4:col3 | — | not captured |
| Vc, L | `Q63` · V1 | 86.3 | L | 0.0863 | [l] | not captured | exact (1.0) | Tab2:row5:col1, Tab2:row5:col3 | — | not captured |
| Q, L/h | `Q30` · Q | 1.13 | L/h | 3.1388888888888887e-07 | [l] / [h] | not captured | exact (1.0) | Tab2:row6:col1, Tab2:row6:col3 | — | not captured |
| Vp, L | `Q64` · V2 | 8.11 | L | 0.00811 | [l] | not captured | exact (1.0) | Tab2:row7:col1, Tab2:row7:col3 | — | not captured |
| k0, mg/h | `Q307` · R1 | 73.1 | mg/h | not captured | [mg] / [h] | not captured | exact (1.0) | Tab2:row8:col1, Tab2:row8:col3 | — | not captured |
| ka, h−1 | `Q49` · kabs | 3.99 | h−1 | 0.0011083333333333333 | [1] / [h] | not captured | exact (1.0) | Tab2:row10:col1, Tab2:row10:col3 | — | not captured |
| Effect of fluconazole or fluvoxamine on F | `Q40` · Fab | 1.3 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row20:col1, Tab2:row20:col3 | — | not captured |
| combined_effect_of_mild_and_moderate_hepatic_impairment_on_f | `Q900` · combined_effect_of_mild_and_moderate_hepatic_impairment_on_f | 1.36 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row32:col1, Tab2:row32:col3 | — | not captured |
| effect_of_female_sex_on_f | `Q900` · effect_of_female_sex_on_f | 0.348 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row37:col1, Tab2:row37:col3 | — | not captured |
| theta_q43_race | `Q900` · theta_q43_race | 0.737 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row30:col1, Tab2:row30:col3 | — | not captured |
| theta_q1_weight | `Q900` · theta_q1_weight | 0.472 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row33:col1, Tab2:row33:col3 | — | not captured |
| theta_q61_weight | `Q900` · theta_q61_weight | 0.524 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row34:col1, Tab2:row34:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'ωCL, % CV' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωVc, % CV' routed out of structural estimates ('Interindividual variability')
- table section covariance: 'ρCL-Vc' routed out of structural estimates ('Correlation')
- dropped unlinked row (NIL): 'Objective function value' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col1'])
- dropped unlinked row (NIL): 'Condition numbera' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1'])
- dropped unlinked row (NIL): 'AK1, mg' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col1', 'Tab2:row9:col3'])
- dropped unlinked row (NIL): 'Effect of tablet formulations on ALAG1' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col1', 'Tab2:row15:col3'])
- dropped duplicate Q22 ('Effect of rifampin on CL', value '0.24') — already have one for this compound
- dropped unlinked row (NIL): 'Effect of suspension on Ak1' — extend the ontology if this is a real PK parameter (source ['Tab2:row24:col1', 'Tab2:row24:col3'])
- dropped unlinked row (NIL): 'Effect of multiple dosing on F' — extend the ontology if this is a real PK parameter (source ['Tab2:row26:col1', 'Tab2:row26:col3'])
- dropped unlinked row (NIL): 'Rate of change in CL with respect to time (half-life), h' — extend the ontology if this is a real PK parameter (source ['Tab2:row28:col1', 'Tab2:row28:col3'])
- dropped duplicate Q40 ('Combined effect of psoriasis and AD on F', value '0.512') — already have one for this compound
- covariate level 'Combined effect of mild and moderate hepatic impairment on F' → Q900:combined_effect_of_mild_and_moderate_hepatic_impairment_on_f = 1.36 (linear_fractional on Q22)
- covariate level 'Effect of female sex on F' → Q900:effect_of_female_sex_on_f = 0.348 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'εres' — extend the ontology if this is a real PK parameter (source ['Tab2:row44:col1', 'Tab2:row44:col3'])
- covariate effect for Q43 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abrocitinib
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row4:col2 = '20.2, 23.8'
- unparsed cell Tab2:row4:col4 = '17.9, 27.1'
- unparsed cell Tab2:row5:col2 = '81.1, 94.5'
- unparsed cell Tab2:row5:col4 = '73.7, 102'
- unparsed cell Tab2:row6:col2 = '0.994, 1.33'
- unparsed cell Tab2:row6:col4 = '0.718, 1.67'
- unparsed cell Tab2:row7:col2 = '7.6, 8.9'
- unparsed cell Tab2:row7:col4 = '5.41, 11.5'
- unparsed cell Tab2:row8:col2 = '71.2, 79.4'
- unparsed cell Tab2:row8:col4 = '55.1, 93.9'
- unparsed cell Tab2:row9:col2 = '109, 133'
- unparsed cell Tab2:row9:col4 = '102, 146'
- unparsed cell Tab2:row10:col2 = '3.48, 4.54'
- unparsed cell Tab2:row10:col4 = '3.02, 5.41'
- unparsed cell Tab2:row11:col2 = '0.429, 0.445'
- unparsed cell Tab2:row11:col4 = '0.406, 0.46'
- unparsed cell Tab2:row12:col2 = '0.48, 0.538'
- unparsed cell Tab2:row12:col4 = '0.416, 0.599'
- unparsed cell Tab2:row13:col2 = '0.434, 0.556'
- unparsed cell Tab2:row13:col4 = '0.382, 0.636'
- unparsed cell Tab2:row14:col2 = '1.05, 1.27'
- unparsed cell Tab2:row14:col4 = '0.921, 1.54'
- unparsed cell Tab2:row15:col2 = '0.167, 0.199'
- unparsed cell Tab2:row15:col4 = '0.141, 0.212'
- unparsed cell Tab2:row16:col2 = '0.169, 0.359'
- unparsed cell Tab2:row16:col4 = '− 0.0167, 1.19'
- unparsed cell Tab2:row20:col2 = '1.01, 1.61'
- unparsed cell Tab2:row20:col4 = '0.795, 2.13'
- unparsed cell Tab2:row24:col2 = '0.858, 1.48'
- unparsed cell Tab2:row24:col4 = '0.773, 2.34'
- unparsed cell Tab2:row26:col2 = '0.131, 0.351'
- unparsed cell Tab2:row26:col4 = '− 0.0216, 0.698'
- unparsed cell Tab2:row28:col2 = '14.5, 28.7'
- unparsed cell Tab2:row28:col4 = '8.31, 1189'
- unparsed cell Tab2:row30:col2 = '0.692, 0.938'
- unparsed cell Tab2:row30:col4 = '0.337, 1.92'
- unparsed cell Tab2:row31:col2 = '0.256, 0.722'
- unparsed cell Tab2:row31:col4 = '0.0678, 0.852'
- unparsed cell Tab2:row32:col2 = '0.783, 1.82'
- unparsed cell Tab2:row32:col4 = '0.489, 2.3'
- unparsed cell Tab2:row33:col2 = '0.278, 0.628'
- unparsed cell Tab2:row33:col4 = '0.238, 0.702'
- unparsed cell Tab2:row34:col2 = '0.379, 0.661'
- unparsed cell Tab2:row34:col4 = '0.341, 0.705'
- unparsed cell Tab2:row37:col2 = '0.24, 0.466'
- unparsed cell Tab2:row37:col4 = '0.103, 0.666'
- unparsed cell Tab2:row39:col2 = '51.8, 63.6'
- unparsed cell Tab2:row39:col4 = '54, 63.2'
- unparsed cell Tab2:row40:col2 = '34.8, 48'
- unparsed cell Tab2:row40:col4 = '37.4, 46.3'
- unparsed cell Tab2:row42:col2 = '0.22, 0.432'
- unparsed cell Tab2:row42:col4 = '0.211, 0.454'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.393 (11/28 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[combined_effect_of_mild_and_moderate_hepatic_impairment_on_f]` | 1.36 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of fluconazole or fluvoxamine on f].covariate_forms` | [] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[effect of fluconazole or fluvoxamine on f].parameter_id` | Q40 | Q87 | mismatch |
| `gpt-oss-120b` | `parameters[effect of tablet formulations on alag1]` | not captured | 0.184 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_female_sex_on_f]` | 0.348 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate of change in cl with respect to time (half-life)]` | not captured | 23.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_weight]` | not captured | 0.472 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_frel_hepatic]` | not captured | 1.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_frel_race]` | not captured | 0.737 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_frel_sex]` | not captured | 0.348 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q1_weight]` | 0.472 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q43_race]` | 0.737 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_weight]` | 0.524 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_weight]` | not captured | 0.524 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].covariate_forms` | [] | ['linear_fractional'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q22 | fail | 21.7 | 0.453 | 0.0209 | 0.05 | footnote reference category |
| C2_base_Q30 | fail | 1.13 | 0.453 | 0.4009 | 0.05 | footnote reference category |
| C2_base_Q63 | fail | 86.3 | 0.52 | 0.006 | 0.05 | footnote reference category |
| C2_base_Q64 | fail | 8.11 | 0.52 | 0.0641 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col3'] |
| C5_dimension_Q307 | pass | [mass] / [time] | not captured | not captured | not captured | ['Tab2:row8:col1', 'Tab2:row8:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row10:col1', 'Tab2:row10:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 21.7 | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21.7 L/h | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 86.3 L | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 8.11 L | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=abrocitinib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.0011229999999999999 | 0.0016578469880379368 | 1.4763 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | skipped | 21.6 | 2.9673454993610617 | not captured | unresolved time unit '14.5, 28.7' |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_abrocitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wojciechowski_2022` / `Wojciechowski_2022::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_abrocitinib/models/modelica/Abrocitinib_Wojciechowski2022_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_abrocitinib/models/modelica/Abrocitinib_Wojciechowski2022_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_abrocitinib/models/modelica/Abrocitinib_Wojciechowski2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_modelica.zip" download>Abrocitinib_Wojciechowski2022_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_fmi.zip" download>Abrocitinib_Wojciechowski2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_matlab.zip" download>Abrocitinib_Wojciechowski2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_matlab_simbio.zip" download>Abrocitinib_Wojciechowski2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_sbml.zip" download>Abrocitinib_Wojciechowski2022_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_cellml.zip" download>Abrocitinib_Wojciechowski2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference.svg" alt="Abrocitinib_Wojciechowski2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 3.99 /h, F 0.9). Dose in the paper: 200 mg.

<dbs-fmusim paramsurl="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Abrocitinib_Wojciechowski2022_reference_params.json` · controls `Abrocitinib_Wojciechowski2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:43 UTC</sub>
