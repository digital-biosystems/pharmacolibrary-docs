<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;axitinib&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/&quot;},{&quot;label&quot;:&quot;Garrett_2014 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Axitinib_Garrett2014_base&quot;,&quot;label&quot;:&quot;Garrett_2014_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Garrett2014_base.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Axitinib_Garrett2014_final&quot;,&quot;label&quot;:&quot;Garrett_2014_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Garrett2014_final.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Tortorici2014_reference&quot;,&quot;label&quot;:&quot;Tortorici_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Tortorici2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Rini2013_reference&quot;,&quot;label&quot;:&quot;Rini_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Rini2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# axitinib — `Axitinib_Garrett2014_base`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="axitinib" model-id="Axitinib_Garrett2014_base" status="accepted_with_caveats" stale="false" population="healthy volunteers" measured-compound="axitinib" parameterization="mechanistic" topology="2C"></div>

## Citation
Garrett M, Poland B, Brennan M, Hee B, Pithavala YK, Amantea MA. Population pharmacokinetic analysis of axitinib in healthy volunteers. British journal of clinical pharmacology 77(3):480–492 (2014).
  ·  DOI: [10.1111/bcp.12206](https://doi.org/10.1111/bcp.12206)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 337.

**Dosing:** 1, 5 mg, oral and iv, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base.svg" alt="Axitinib_Garrett2014_base diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (l h -1 ) | CL | 17.1 | l h -1 | 0.270 (None% RSE) |
| Vc (l) | V1 | 46.6 | l | 0.140 (None% RSE) |
| Q (l h -1 ) | Q | 1.73 | l h -1 |  |
| Vp (l) | V2 | 44.7 | l | 1.06 (None% RSE) |
| Fasting | Frel | 2.10 |  |  |
| tlag (h) ‡ | tlag | 0.457 | h |  |
| theta_q319_weight | theta_q319_weight | 14 |  |  |
| theta_q49_fed_ka_h_1_form_iv | theta_q49_fed_ka_h_1_form_iv | 0.530 |  |  |
| k a | kabs | 78.7 | per day |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.688). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of f, form iv, fed: this record has none, the second reading 0.469; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q22` · CL | 17.1 | l h -1 | 4.75e-06 | m3/s | l/h | exact (1) | tab_0:row3:col1, tab_0:row3:col2, tab_0:row3:col5 | 0.270 (None% RSE) |
| Vc (l) | `Q63` · V1 | 46.6 | l | 0.0466 | m3 | l | exact (1) | tab_0:row4:col1, tab_0:row4:col2, tab_0:row4:col5 | 0.140 (None% RSE) |
| Q (l h -1 ) | `Q30` · Q | 1.73 | l h -1 | 4.806e-07 | m3/s | l/h | exact (1) | tab_0:row6:col1, tab_0:row6:col2, tab_0:row6:col5 |  |
| Vp (l) | `Q64` · V2 | 44.7 | l | 0.0447 | m3 | l | exact (1) | tab_0:row7:col1, tab_0:row7:col2, tab_0:row7:col5 | 1.06 (None% RSE) |
| Fasting | `Q87` · Frel | 2.10 |  |  |  |  | llm (0.6) | tab_0:row9:col1, tab_0:row9:col2, tab_0:row9:col5, tab_0:row11:col1, tab_0:row11:col2, tab_0:row11:col5 |  |
| tlag (h) ‡ | `Q83` · tlag | 0.457 | h | 1645 | s | h | space_fold (0.95) | tab_0:row13:col1, tab_0:row13:col2 |  |
| theta_q319_weight | `Q900` · theta_q319_weight | 14 |  |  |  |  |  | tab_0:row5:col5 |  |
| theta_q49_fed_ka_h_1_form_iv | `Q900` · theta_q49_fed_ka_h_1_form_iv | 0.530 |  |  |  |  |  | tab_0:row8:col1, tab_0:row8:col2, tab_0:row8:col5 |  |
| k a | `Q49` · kabs | 78.7 | per day | 0.0009109 | 1/s | 1/h | review_gapfill (0.7) | Ma_2019:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.688 (11/16 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[f, form iv, fed]` |  | 0.469 | only_one_extracted |
| `qwen3.8-27b` | `parameters[fasting]` | 2.10 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[k a]` | 78.7 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q1_weight]` |  | 14 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` | 14 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_0:row6:col1', 'tab_0:row6:col2', 'tab_0:row6:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ma_2019:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_0:row7:col1', 'tab_0:row7:col2', 'tab_0:row7:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_0:row13:col1', 'tab_0:row13:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 17.1 | ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.1 L/h | ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 46.6 L | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 44.7 L | ['tab_0:row7:col1', 'tab_0:row7:col2', 'tab_0:row7:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=axitinib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 19.3 | 5.838e-06 | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 20.6 | 5.838e-06 | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8 | 5.838e-06 | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 19.3 | 5.838e-06 | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 17.9 | 5.838e-06 | unresolved concentration unit (exp 'ng ml -1', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_modelica.zip" download>Axitinib_Garrett2014_base_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_fmi.zip" download>Axitinib_Garrett2014_base_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_matlab.zip" download>Axitinib_Garrett2014_base_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_matlab_simbio.zip" download>Axitinib_Garrett2014_base_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_sbml.zip" download>Axitinib_Garrett2014_base_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_cellml.zip" download>Axitinib_Garrett2014_base_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3865 | kg/mol |
| input | dosing | `F` | 0.469 | 1 |
| input | dosing | `Tlag` | 1645 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-06 | kg |
| input | model | `Cl` | 4.75e-06 | m3/s |
| input | model | `VdPerKg` | 0.0006657 | m3/kg |
| input | model | `k12` | 1.031e-05 | 1/s |
| input | model | `k21` | 1.075e-05 | 1/s |
| input | model | `ka` | 0.0009109 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Garrett M, Poland B, Brennan M, Hee B, Pithavala YK, Amantea MA. Population pharmacokinetic analysis of axitinib in healthy volunteers. British journal of clinical pharmacology 77(3):480–492 (2014). [doi:10.1111/bcp.12206](https://doi.org/10.1111/bcp.12206)

**This record:** Pharmacolibrary v26.09, model `Axitinib_Garrett2014_base`. <https://pharmacolibrary.github.io/#/drugs/drug_axitinib/Axitinib_Garrett2014_base>

```bibtex
@misc{pharmacolibrary_AxitinibGarrett2014base,
  title  = {{Pharmacolibrary model Axitinib_Garrett2014_base}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_axitinib/Axitinib_Garrett2014_base},
  note   = {Parameters from doi:10.1111/bcp.12206},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1 mg, single dose, first-order absorption (ka 3.28 /h, lag 27.4 min, F 0.469). Doses in the paper: 1, 5 mg.

<dbs-fmusim paramsurl="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_axitinib/Axitinib_Garrett2014_base/Axitinib_Garrett2014_base_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Axitinib_Garrett2014_base_params.json` · controls `Axitinib_Garrett2014_base_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baxitinib%5D%20Axitinib_Garrett2014_base&body=Drug%3A%20axitinib%0ARecord%3A%20Axitinib_Garrett2014_base%0APaper%3A%20Garrett_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_axitinib/Axitinib_Garrett2014_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 21:35 UTC</sub>
