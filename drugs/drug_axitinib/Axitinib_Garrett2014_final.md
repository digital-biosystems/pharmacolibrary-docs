<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;axitinib&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/&quot;},{&quot;label&quot;:&quot;Garrett_2014 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Axitinib_Garrett2014_base&quot;,&quot;label&quot;:&quot;Garrett_2014_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Garrett2014_base.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Garrett2014_final&quot;,&quot;label&quot;:&quot;Garrett_2014_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Garrett2014_final.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Axitinib_Tortorici2014_reference&quot;,&quot;label&quot;:&quot;Tortorici_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Tortorici2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Rini2013_reference&quot;,&quot;label&quot;:&quot;Rini_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Rini2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# axitinib — `Axitinib_Garrett2014_final`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on bioavailability: this record has 7.8, the second reading 0.465; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Garrett M et al., Population pharmacokinetic analysis of…, British journal of clinical… (2014)
  ·  DOI: [10.1111/bcp.12206](https://doi.org/10.1111/bcp.12206)

<div class="pk-model-meta" hidden drug="axitinib" model-id="Axitinib_Garrett2014_final" status="accepted_with_caveats" stale="false" population="healthy volunteers" measured-compound="axitinib" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q22` · CL | 8.2 | l h -1 | 2.2777777777777776e-06 | [l] / [h] | not captured | exact (1.0) | tab_0:row3:col2, tab_0:row3:col4, tab_0:row3:col5 | — | 11 (None% RSE) |
| Vc (l) | `Q63` · V1 | 7.6 | l | 0.0076 | [l] | not captured | exact (1.0) | tab_0:row4:col2, tab_0:row4:col4, tab_0:row4:col5 | — | 15 (None% RSE) |
| Q (l h -1 ) | `Q30` · Q | 8.2 | l h -1 | 2.2777777777777776e-06 | [l] / [h] | not captured | exact (1.0) | tab_0:row6:col2, tab_0:row6:col4, tab_0:row6:col5 | — | not captured |
| Vp (l) | `Q64` · V2 | 20 | l | 0.02 | [l] | not captured | exact (1.0) | tab_0:row7:col2, tab_0:row7:col4, tab_0:row7:col5 | — | 34 (None% RSE) |
| F, Form IV, Fed | `Q87` · Frel | 7.8 | not captured | not captured | not captured | not captured | llm (0.6) | tab_0:row10:col2, tab_0:row10:col4, tab_0:row10:col5 | — | not captured |
| tlag (h) ‡ | `Q83` · tlag | 0.32 | h | 1152.0 | [h] | not captured | space_fold (0.95) | tab_0:row13:col2, tab_0:row13:col4 | — | not captured |
| theta_q319_weight | `Q900` · theta_q319_weight | 0.758 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_0:row5:col4, tab_0:row5:col5 | — | not captured |
| theta_q49_fed_ka_h_1_form_iv | `Q900` · theta_q49_fed_ka_h_1_form_iv | 6.8 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_0:row8:col2, tab_0:row8:col4, tab_0:row8:col5 | — | not captured |
| k a | `Q49` · kabs | 78.7 | per day | 0.0009108796296296296 | 1/h | not captured | review_gapfill (0.7) | Ma_2019:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- dropped unlinked row (NIL): 'Fasting' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col2', 'tab_0:row9:col4', 'tab_0:row9:col5', 'tab_0:row11:col2', 'tab_0:row11:col4', 'tab_0:row11:col5'])
- dropped unlinked row (NIL): 'Form XLI' — extend the ontology if this is a real PK parameter (source ['tab_0:row12:col2', 'tab_0:row12:col4', 'tab_0:row12:col5'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=axitinib
- model-stage split: 'final' is the final model of Garrett_2014 (paper reports 2 stages: base, final); same population, different model-building step
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.bioavailability.theta` | 7.8 | 0.465 | mismatch |
| `qwen3.8-27b` | `parameters[cl].value` | 8.2 | 17.0 | mismatch |
| `qwen3.8-27b` | `parameters[f, form iv, fed].parameter_id` | Q87 | Q40 | mismatch |
| `qwen3.8-27b` | `parameters[f, form iv, fed].value` | 7.8 | 0.465 | mismatch |
| `qwen3.8-27b` | `parameters[k a]` | 78.7 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[q].value` | 8.2 | 1.74 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q1_weight]` | not captured | 0.758 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` | 0.758 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q49_fed_ka_h_1_form_iv].value` | 6.8 | 0.523 | mismatch |
| `qwen3.8-27b` | `parameters[tlag (h)].value` | 0.32 | 0.457 | mismatch |
| `qwen3.8-27b` | `parameters[vc].value` | 7.6 | 45.3 | mismatch |
| `qwen3.8-27b` | `parameters[vp].value` | 20 | 45.9 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row3:col2', 'tab_0:row3:col4', 'tab_0:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row6:col2', 'tab_0:row6:col4', 'tab_0:row6:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ma_2019:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row4:col2', 'tab_0:row4:col4', 'tab_0:row4:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row7:col2', 'tab_0:row7:col4', 'tab_0:row7:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_0:row13:col2', 'tab_0:row13:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.2 | not captured | not captured | ['tab_0:row3:col2', 'tab_0:row3:col4', 'tab_0:row3:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.2 L/h | not captured | not captured | ['tab_0:row3:col2', 'tab_0:row3:col4', 'tab_0:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.6 L | not captured | not captured | ['tab_0:row4:col2', 'tab_0:row4:col4', 'tab_0:row4:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 20 L | not captured | not captured | ['tab_0:row7:col2', 'tab_0:row7:col4', 'tab_0:row7:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=axitinib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 19.3 | 4.2113198891981655e-05 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 20.6 | 4.2113198891981655e-05 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8 | 4.2113198891981655e-05 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 19.3 | 4.2113198891981655e-05 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 17.9 | 4.2113198891981655e-05 | not captured | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_axitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Garrett_2014` / `Garrett_2014::final`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_axitinib/models/modelica/Axitinib_Garrett2014_final.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_axitinib/models/modelica/Axitinib_Garrett2014_final.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_axitinib/models/modelica/Axitinib_Garrett2014_final.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_modelica.zip" download>Axitinib_Garrett2014_final_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_fmi.zip" download>Axitinib_Garrett2014_final_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_matlab.zip" download>Axitinib_Garrett2014_final_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_matlab_simbio.zip" download>Axitinib_Garrett2014_final_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_sbml.zip" download>Axitinib_Garrett2014_final_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_cellml.zip" download>Axitinib_Garrett2014_final_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final.svg" alt="Axitinib_Garrett2014_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1 mg, single dose, first-order absorption (ka 3.28 /h, lag 19.2 min, F 7.8). Doses in the paper: 1, 5 mg.

<dbs-fmusim paramsurl="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Axitinib_Garrett2014_final_params.json` · controls `Axitinib_Garrett2014_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:35 UTC</sub>
