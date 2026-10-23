<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;pantoprazole&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/&quot;},{&quot;label&quot;:&quot;Pettersen_2009 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pantoprazole_Olivarez2020_reference&quot;,&quot;label&quot;:&quot;Olivarez_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_Olivarez2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pantoprazole_Smith2021v2_reference&quot;,&quot;label&quot;:&quot;Smith_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_Smith2021v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pantoprazole_McCann2023_reference&quot;,&quot;label&quot;:&quot;McCann_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_McCann2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pantoprazole_Pettersen2009_reference&quot;,&quot;label&quot;:&quot;Pettersen_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pantoprazole — `Pantoprazole_Pettersen2009_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The pantoprazole paediatric model's simulated terminal half-life is 11.467454592412242 h versus the paper's 2.0 h (ratio 5.7337), and bioavailability (F) was left at library defaults instead of a paper estimate, so the record was held back.

<div class="pk-model-meta" hidden drug="pantoprazole" model-id="Pantoprazole_Pettersen2009_reference" status="needs_review" stale="false" population="paediatric intensive care patients" measured-compound="pantoprazole" parameterization="mechanistic" topology="2C"></div>

## Citation
Pettersen G, Mouksassi MS, Théorêt Y, Labbé L, Faure C, Nguyen B et al. Population pharmacokinetics of intravenous pantoprazole in paediatric intensive care patients. British journal of clinical pharmacology 67(2):216–227 (2009).
  ·  DOI: [10.1111/j.1365-2125.2008.03328.x](https://doi.org/10.1111/j.1365-2125.2008.03328.x)

## Population and dosing

**Population:** paediatric intensive care patients · condition upper gastrointestinal bleeding risk · age group mixed · n = &gt;=20.

**Dosing:** 19.9, 140.6 mg/1.73 m2/day, iv, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference.svg" alt="Pantoprazole_Pettersen2009_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (l h -1 ) | CL | 5.08 | l h -1 |
| Vc (l) | V1 | 2.20 | l |
| Q (l h -1 ) | Q | 1.1 | l h -1 |
| V2 (l) | V2 | 2.69 | l |
| age_covariate_effect | age_covariate_effect | 0.320 |  |
| cyp2c19_inhibitor_covariate_effect | cyp2c19_inhibitor_covariate_effect | 0.342 |  |
| hepatic_dysfunction_covariate_effect | hepatic_dysfunction_covariate_effect | 0.501 |  |
| first-order absorption rate constants (K a ) ... for OS | kabs | 0.325 | h -1 |
| lag time ... for the DRT formulation | tlag | 2.5 | h |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The pantoprazole paediatric model's simulated terminal half-life is 11.467454592412242 h versus the paper's 2.0 h (ratio 5.7337), and bioavailability (F) was left at library defaults instead of a paper estimate, so the record was held back.**

Simulated as the paper dosed it, the two-compartment pantoprazole model gives a terminal half-life of 11.467454592412242 h against the paper's 2.0 h, a 5.7337-fold discrepancy beyond tolerance. The record also uses a default placeholder for F (bioavailability) rather than a value estimated in Pettersen_2009, which affects the simulated profile without support from the paper. In addition, the covariate effects defined in the record (age 0.320, CYP2C19 inhibitor 0.342, hepatic dysfunction 0.501) were not exercised in simulation — only the reference individual was simulated. A second reader also disputed several extracted values, reading CL as 5.28 (vs 5.08), V2 as 2.73 (vs 2.69), age effect as 0.316 (vs 0.320), and reporting a SIRS covariate effect of 0.377 absent from this record. Extracted — pantoprazole: CL 5.08 l h -1, V1 2.2 l, Q 1.1 l h -1, V2 2.69 l, kabs 0.325 h -1, tlag 2.5 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has pantoprazole, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q22` · CL | 5.08 | l h -1 | 1.411e-06 | m3/s | l/h | exact (1) | tab_1:row3:col1, tab_1:row3:col2 |
| Vc (l) | `Q63` · V1 | 2.20 | l | 0.0022 | m3 | l | exact (1) | tab_1:row4:col1, tab_1:row4:col2 |
| Q (l h -1 ) | `Q30` · Q | 1.1 | l h -1 | 3.056e-07 | m3/s | l/h | exact (1) | tab_1:row5:col1, tab_1:row5:col2 |
| V2 (l) | `Q64` · V2 | 2.69 | l | 0.00269 | m3 | l | exact (1) | tab_1:row6:col1, tab_1:row6:col2 |
| age_covariate_effect | `Q900` · age_covariate_effect | 0.320 |  |  |  |  |  | tab_1:row17:col1, tab_1:row17:col2 |
| cyp2c19_inhibitor_covariate_effect | `Q900` · cyp2c19_inhibitor_covariate_effect | 0.342 |  |  |  |  |  | tab_1:row18:col1, tab_1:row18:col2 |
| hepatic_dysfunction_covariate_effect | `Q900` · hepatic_dysfunction_covariate_effect | 0.501 |  |  |  |  |  | tab_1:row19:col1, tab_1:row19:col2 |
| first-order absorption rate constants (K a ) ... for OS | `Q49` · kabs | 0.325 | h -1 | 9.028e-05 | 1/s | 1/h | review_gapfill (0.7) | McCann_2023:review |
| lag time ... for the DRT formulation | `Q83` · tlag | 2.5 | h | 9000 | s | h | review_gapfill (0.7) | McCann_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- table section iiv: 'IIV CL (%)' routed out of structural estimates ('Interindividual variability (IIV) §')
- table section iiv: 'IIV Vc (%)' routed out of structural estimates ('Interindividual variability (IIV) §')
- table section iiv: 'IIV Q (%)' routed out of structural estimates ('Interindividual variability (IIV) §')
- table section iiv: 'IIV V2 (%)' routed out of structural estimates ('Interindividual variability (IIV) §')
- table section residual_error: 'Residual additive error (SD in mg l -1 ) ¶' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Residual proportional error (%) §' routed out of structural estimates ('Residual variability')
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'SIRS covariate effect' — extend the ontology if this is a real PK parameter (source ['tab_1:row16:col1', 'tab_1:row16:col2'])
- covariate level 'Age covariate effect' → Q900:age_covariate_effect = 0.320 (linear_fractional on Q22)
- covariate level 'CYP2C19 inhibitor covariate effect' → Q900:cyp2c19_inhibitor_covariate_effect = 0.342 (linear_fractional on Q22)
- covariate level 'Hepatic dysfunction covariate effect' → Q900:hepatic_dysfunction_covariate_effect = 0.501 (linear_fractional on Q22)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pantoprazole
- gap-filled Q49 (kabs) from McCann_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from McCann_2023's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row3:col3 = '3.88, 6.90'
- unparsed cell tab_1:row4:col3 = '1.54, 2.83'
- unparsed cell tab_1:row5:col3 = '0.7, 1.6'
- unparsed cell tab_1:row6:col3 = '1.76, 6.04'
- unparsed cell tab_1:row8:col3 = '10.5, 37.8'
- unparsed cell tab_1:row9:col3 = '21.3, 68.6'
- unparsed cell tab_1:row10:col3 = '7.7, 62.1'
- unparsed cell tab_1:row11:col3 = '52.6, 169.9'
- unparsed cell tab_1:row14:col3 = '13.1, 23.6'
- unparsed cell tab_1:row16:col3 = '0.160, 0.784'
- unparsed cell tab_1:row17:col3 = '0.206, 0.407'
- unparsed cell tab_1:row18:col3 = '0.125, 0.800'
- unparsed cell tab_1:row19:col3 = '0.291, 0.904'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.429 (6/14 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[age_covariate_effect].value` | 0.320 | 0.316 | mismatch |
| `gpt-oss:120b` | `parameters[cl].value` | 5.08 | 5.28 | mismatch |
| `gpt-oss:120b` | `parameters[hepatic_dysfunction_covariate_effect]` | 0.501 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[sirs covariate effect]` |  | 0.377 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_hepatic]` |  | 0.495 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2].value` | 2.69 | 2.73 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | pantoprazole | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | pantoprazole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 2 | 2.123 | 1.062 | 0.25 | reported t½β |
| C2_reference | pass |  |  |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['tab_1:row3:col1', 'tab_1:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['tab_1:row5:col1', 'tab_1:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['McCann_2023:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['tab_1:row6:col1', 'tab_1:row6:col2'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['McCann_2023:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.08 |  |  | ['tab_1:row3:col1', 'tab_1:row3:col2'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.08 L/h |  |  | ['tab_1:row3:col1', 'tab_1:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.2 L |  |  | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.69 L |  |  | ['tab_1:row6:col1', 'tab_1:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=pantoprazole) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 2 | 11.47 | 5.734 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_modelica.zip" download>Pantoprazole_Pettersen2009_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_fmi.zip" download>Pantoprazole_Pettersen2009_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_matlab.zip" download>Pantoprazole_Pettersen2009_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_matlab_simbio.zip" download>Pantoprazole_Pettersen2009_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_sbml.zip" download>Pantoprazole_Pettersen2009_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_cellml.zip" download>Pantoprazole_Pettersen2009_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3834 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 9000 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 4e-05 | kg |
| input | model | `Cl` | 1.411e-06 | m3/s |
| input | model | `VdPerKg` | 3.143e-05 | m3/kg |
| input | model | `k12` | 0.0001389 | 1/s |
| input | model | `k21` | 0.0001136 | 1/s |
| input | model | `ka` | 9.028e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Pettersen G, Mouksassi MS, Théorêt Y, Labbé L, Faure C, Nguyen B et al. Population pharmacokinetics of intravenous pantoprazole in paediatric intensive care patients. British journal of clinical pharmacology 67(2):216–227 (2009). [doi:10.1111/j.1365-2125.2008.03328.x](https://doi.org/10.1111/j.1365-2125.2008.03328.x)

**This record:** Pharmacolibrary v26.09, model `Pantoprazole_Pettersen2009_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference>

```bibtex
@misc{pharmacolibrary_PantoprazolePettersen2009reference,
  title  = {{Pharmacolibrary model Pantoprazole_Pettersen2009_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference},
  note   = {Parameters from doi:10.1111/j.1365-2125.2008.03328.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 40 mg, single dose, first-order absorption (ka 0.325 /h, lag 150 min, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 40 mg oral (A02BC02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference/Pantoprazole_Pettersen2009_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Pantoprazole_Pettersen2009_reference_params.json` · controls `Pantoprazole_Pettersen2009_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpantoprazole%5D%20Pantoprazole_Pettersen2009_reference&body=Drug%3A%20pantoprazole%0ARecord%3A%20Pantoprazole_Pettersen2009_reference%0APaper%3A%20Pettersen_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 11:01 UTC</sub>
