<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;vernakalant&quot;,&quot;href&quot;:&quot;drugs/drug_vernakalant/&quot;},{&quot;label&quot;:&quot;Mao_2012 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vernakalant_Mao2012_estimate&quot;,&quot;label&quot;:&quot;Mao_2012_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vernakalant — `Vernakalant_Mao2012_estimate`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 3.45, model 8.14); the model does not reproduce the paper's peak concentration (Cmax) (paper 3.37e+03, model 0.000944).

<div class="pk-model-meta" hidden drug="vernakalant" model-id="Vernakalant_Mao2012_estimate" status="needs_review" stale="false" population="patients with atrial fibrillation or atrial flutter and healthy volunteers" measured-compound="vernakalant" parameterization="mechanistic" topology="2C"></div>

## Citation
Mao ZL, Townsend RW, Gao Y, Wheeler JJ, Kastrissios H, Keirns J. Population pharmacokinetics of vernakalant hydrochloride injection (RSD1235) in patients with atrial fibrillation or atrial flutter. Journal of clinical pharmacology 52(7):1042–1053 (2012).
  ·  DOI: [10.1177/0091270011408425](https://doi.org/10.1177/0091270011408425)

## Population and dosing

**Population:** patients with atrial fibrillation or atrial flutter and healthy volunteers · condition atrial fibrillation or atrial flutter · age group adult · n = 605.

**Dosing:** 140, 210 mg, iv, multiple.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate.svg" alt="Vernakalant_Mao2012_estimate diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL, L/h/kg | CL | 0.20 | L/h/kg |
| Q, L/h/kg | Q | 2.63 | L/h/kg |
| Vc, L/kg | V1 | 0.51 | L/kg |
| Vp, L/kg | V2 | 1.04 | L/kg |
| Distribution half-life, h | t1/2α | 0.16 | h |
| Terminal half-life, h | t1/2z | 3.45 | h |
| Cmax, ng/mL | Cmax | 4303 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.308). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 3.45, model 8.14); the model does not reproduce the paper's peak concentration (Cmax) (paper 3.37e+03, model 0.000944).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax), so that value has no SI equivalent. Extracted — vernakalant: CL 0.2 L/h/kg, Q 2.63 L/h/kg, V1 0.51 L/kg, V2 1.04 L/kg, t1/2α 0.16 h, t1/2z 3.45 h, Cmax 4.3e+03 ng/mL.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of cl: this record has 0.20, the second reading none; it also differs on 8 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL, L/h/kg | `Q22` · CL | 0.20 | L/h/kg | 3.889e-06 | m3/s | l/(h·kg) | exact (1) | Mao_2012_table_3:row1:col3, Mao_2012_table_3:row2:col3, Mao_2012_table_3:row3:col3, Mao_2012_table_3:row4:col3 |
| Q, L/h/kg | `Q30` · Q | 2.63 | L/h/kg | 5.114e-05 | m3/s | l/(h·kg) | exact (1) | Mao_2012_table_3:row5:col3, Mao_2012_table_3:row6:col3 |
| Vc, L/kg | `Q63` · V1 | 0.51 | L/kg | 0.0357 | m3 | l/kg | exact (1) | Mao_2012_table_3:row7:col3 |
| Vp, L/kg | `Q64` · V2 | 1.04 | L/kg | 0.0728 | m3 | l/kg | exact (1) | Mao_2012_table_3:row8:col3 |
| Distribution half-life, h | `Q59` · t1/2α | 0.16 | h | 576 | s | h | llm (0.6) | Mao_2012_table_4:row0:col3 |
| Terminal half-life, h | `Q57` · t1/2z | 3.45 | h | 1.242e+04 | s | h | llm (0.6) | Mao_2012_table_4:row4:col3 |
| Cmax, ng/mL | `Q32` · Cmax | 4303 | ng/mL |  |  | ng/ml | exact (1) | Mao_2012_table_4:row8:col3, Mao_2012_table_4:row12:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('CL, L/h', value '16.40') — already have one for this compound
- dropped duplicate Q30 ('Q, L/h', value '210.4') — already have one for this compound
- dropped duplicate Q63 ('Vc, L', value '40.94') — already have one for this compound
- dropped duplicate Q64 ('Vp, L', value '83.11') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vernakalant
- population split: 'estimate' subgroup of Mao_2012 (paper reports 2 populations: estimate, parameter estimate ± se)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3, 4
- unparsed cell Mao_2012_table_2:row0:col2 = '−1.120 to −0.980'
- unparsed cell Mao_2012_table_2:row1:col2 = '−0.757 to −0.583'
- unparsed cell Mao_2012_table_2:row2:col2 = '−0.015 to 0.091'
- unparsed cell Mao_2012_table_2:row3:col2 = '0.099 to 0.483'
- unparsed cell Mao_2012_table_2:row4:col2 = '0.270 to 0.674'
- unparsed cell Mao_2012_table_2:row5:col2 = '0.082 to 0.230'
- unparsed cell Mao_2012_table_2:row6:col2 = '−0.654 to −0.416'
- unparsed cell Mao_2012_table_2:row7:col2 = '−0.440 to −0.128'
- unparsed cell Mao_2012_table_2:row8:col2 = '−0.508 to −0.182'
- unparsed cell Mao_2012_table_2:row9:col2 = '0.313 to 1.039'
- unparsed cell Mao_2012_table_2:row10:col2 = '0.120 to 0.198'
- unparsed cell Mao_2012_table_2:row11:col2 = '0.101 to 0.267'
- unparsed cell Mao_2012_table_2:row12:col2 = '0.000 to 0.085'
- unparsed cell Mao_2012_table_2:row13:col2 = '−0.069 to 0.165'
- unparsed cell Mao_2012_table_2:row14:col2 = '0.310 to 0.582'
- unparsed cell Mao_2012_table_2:row15:col2 = '−0.052 to 0.084'
- unparsed cell Mao_2012_table_2:row16:col2 = '−0.103 to 0.339'
- unparsed cell Mao_2012_table_2:row17:col2 = '0.077 to 0.165'
- unparsed cell Mao_2012_table_2:row18:col2 = '0.129 to 0.277'
- unparsed cell Mao_2012_table_2:row19:col2 = '0.286 to 0.674'
- unparsed cell Mao_2012_table_2:row20:col2 = '0.037 to 0.074'
- unparsed cell Mao_2012_table_2:row21:col2 = '0.061 to 0.097'
- unparsed cell Mao_2012_table_4:row8:col4 = '1290-11 529'
- unparsed cell Mao_2012_table_4:row12:col4 = '1649-11 546'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl]` | 0.20 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 4303 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[distribution half-life]` | 0.16 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | 2.63 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[steady‐state volume of distribution]` |  | 1.55 | only_one_extracted |
| `gpt-oss:120b` | `parameters[systemic clearance]` |  | 0.35 | only_one_extracted |
| `gpt-oss:120b` | `parameters[terminal half-life]` | 3.45 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | 0.51 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp]` | 1.04 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q22 | fail | 0.2 | 0.41 | 2.05 | 0.05 | footnote reference category |
| C2_base_Q30 | fail | 2.63 | 1.34 | 0.5095 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Mao_2012_table_3:row1:col3', 'Mao_2012_table_3:row2:col3', 'Mao_2012_table_3:row3:col3', 'Mao_2012_table_3:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['Mao_2012_table_3:row5:col3', 'Mao_2012_table_3:row6:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Mao_2012_table_4:row8:col3', 'Mao_2012_table_4:row12:col3'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Mao_2012_table_4:row4:col3'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['Mao_2012_table_4:row0:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['Mao_2012_table_3:row7:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['Mao_2012_table_3:row8:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2 |  |  | ['Mao_2012_table_3:row1:col3', 'Mao_2012_table_3:row2:col3', 'Mao_2012_table_3:row3:col3', 'Mao_2012_table_3:row4:col3'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14 L/h |  |  | ['Mao_2012_table_3:row1:col3', 'Mao_2012_table_3:row2:col3', 'Mao_2012_table_3:row3:col3', 'Mao_2012_table_3:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 35.7 L |  |  | ['Mao_2012_table_3:row7:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 72.8 L |  |  | ['Mao_2012_table_3:row8:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=vernakalant) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 3371 | 0.0009436 |  | unresolved concentration unit (exp 'ng/kg', sim 'kg/m3') |
| T1_cmax | reference | skipped | 4012 | 0.0009436 |  | unresolved concentration unit (exp 'ng/kg', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.003904 | 0.0009436 | 0.2417 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.003371 | 0.0009436 | 0.2799 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.003859 | 0.0009436 | 0.2445 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.004012 | 0.0009436 | 0.2352 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.004303 | 0.0009436 | 0.2193 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.003697 | 0.0009436 | 0.2552 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.004206 | 0.0009436 | 0.2243 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.004558 | 0.0009436 | 0.207 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_alpha | reference | skipped | 0.16 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.08 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.16 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.17 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | fail | 3.45 | 8.142 | 2.36 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 2.11 | 8.142 | 3.859 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 3.01 | 8.142 | 2.705 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 5.62 | 8.142 | 1.449 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 3 | 8.142 | 2.714 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_modelica.zip" download>Vernakalant_Mao2012_estimate_modelica.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_fmi.zip" download>Vernakalant_Mao2012_estimate_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_matlab.zip" download>Vernakalant_Mao2012_estimate_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_matlab_simbio.zip" download>Vernakalant_Mao2012_estimate_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_sbml.zip" download>Vernakalant_Mao2012_estimate_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_cellml.zip" download>Vernakalant_Mao2012_estimate_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3495 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00014 | kg |
| input | model | `Cl` | 3.889e-06 | m3/s |
| input | model | `VdPerKg` | 0.00051 | m3/kg |
| input | model | `k12` | 0.001432 | 1/s |
| input | model | `k21` | 0.0007025 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Mao ZL, Townsend RW, Gao Y, Wheeler JJ, Kastrissios H, Keirns J. Population pharmacokinetics of vernakalant hydrochloride injection (RSD1235) in patients with atrial fibrillation or atrial flutter. Journal of clinical pharmacology 52(7):1042–1053 (2012). [doi:10.1177/0091270011408425](https://doi.org/10.1177/0091270011408425)

**This record:** Pharmacolibrary v26.09, model `Vernakalant_Mao2012_estimate`. <https://pharmacolibrary.github.io/#/drugs/drug_vernakalant/Vernakalant_Mao2012_estimate>

```bibtex
@misc{pharmacolibrary_VernakalantMao2012estimate,
  title  = {{Pharmacolibrary model Vernakalant_Mao2012_estimate}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_vernakalant/Vernakalant_Mao2012_estimate},
  note   = {Parameters from doi:10.1177/0091270011408425},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 140 mg infusion over 10 min, single dose. Doses in the paper: 140, 210 mg.

<dbs-fmusim paramsurl="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Vernakalant_Mao2012_estimate_params.json` · controls `Vernakalant_Mao2012_estimate_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvernakalant%5D%20Vernakalant_Mao2012_estimate&body=Drug%3A%20vernakalant%0ARecord%3A%20Vernakalant_Mao2012_estimate%0APaper%3A%20Mao_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vernakalant/Vernakalant_Mao2012_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-09 00:20 UTC</sub>
