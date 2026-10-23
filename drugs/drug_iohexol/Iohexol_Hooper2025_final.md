<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iohexol&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/&quot;},{&quot;label&quot;:&quot;Hooper_2025 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iohexol_Hooper2025_final&quot;,&quot;label&quot;:&quot;Hooper_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/Iohexol_Hooper2025_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Iohexol_Hooper2025_stoch_approx&quot;,&quot;label&quot;:&quot;Hooper_2025_stoch_approx&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/Iohexol_Hooper2025_stoch_approx.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iohexol_Taubert2018_reference&quot;,&quot;label&quot;:&quot;Taubert_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/Iohexol_Taubert2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iohexol_sberg2020_mean&quot;,&quot;label&quot;:&quot;\u00c5sberg_2020_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/Iohexol_sberg2020_mean.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iohexol_sberg2020_median&quot;,&quot;label&quot;:&quot;\u00c5sberg_2020_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/Iohexol_sberg2020_median.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iohexol — `Iohexol_Hooper2025_final`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="iohexol" model-id="Iohexol_Hooper2025_final" status="curated_candidate" stale="false" population="healthy adults with varying kidney function" measured-compound="iohexol" parameterization="mechanistic" topology="2C"></div>

## Citation
Hooper L, Heung M, Wang L, Matvekas A, Alikhani R, Kenes MT et al. Pharmacokinetic Characterization of Iopamidol and Iohexol for Optimizing Measured Glomerular Filtration Rate Assessment in Clinical Practice and Drug Development. Journal of clinical pharmacology 65(11):1350–1361 (2025).
  ·  DOI: [10.1002/jcph.70046](https://doi.org/10.1002/jcph.70046)

## Population and dosing

**Population:** healthy adults with varying kidney function · condition varying kidney function (eGFR 30-120 mL/min) · age group adult · n = 24.

**Dosing:** 1618 mg, iv, single.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_iohexol/Iohexol_Hooper2025_final/Iohexol_Hooper2025_final.svg" alt="Iohexol_Hooper2025_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL_pop (mL/min) | CL | 69.69 | mL/min | 14.58 (15.5% RSE) |
| V1_pop (mL) | V1 | 5920.61 | mL | 24.86 (16.8% RSE) |
| Q_pop (mL/min) | Q | 167.91 | mL/min | 56.35 (21.1% RSE) |
| V2_pop (mL) | V2 | 6021.42 | mL | 21.45 (20.5% RSE) |
| CL_ β_BSA | CLnorm | 0.59 | mL/min/kg |  |
| beta_Cl_logtEGFR_comb | equation variable | 0.535 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has iohexol, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL_pop (mL/min) | `Q22` · CL | 69.69 | mL/min | 1.161e-06 | m3/s | ml/min | llm (0.6) | jcph70046-tbl-0002:row1:col3, Hooper_2025_table_3:row0:col3 | 14.58 (15.5% RSE) |
| V1_pop (mL) | `Q63` · V1 | 5920.61 | mL | 0.005921 | m3 | ml | llm (0.6) | jcph70046-tbl-0002:row5:col3, Hooper_2025_table_3:row4:col3 | 24.86 (16.8% RSE) |
| Q_pop (mL/min) | `Q30` · Q | 167.91 | mL/min | 2.798e-06 | m3/s | ml/min | llm (0.6) | jcph70046-tbl-0002:row7:col3, Hooper_2025_table_3:row6:col3 | 56.35 (21.1% RSE) |
| V2_pop (mL) | `Q64` · V2 | 6021.42 | mL | 0.006021 | m3 | ml | llm (0.6) | jcph70046-tbl-0002:row8:col3, Hooper_2025_table_3:row7:col3 | 21.45 (20.5% RSE) |
| CL_ β_BSA | `Q354` · CLnorm | 0.59 | mL/min/kg | 6.883e-07 | m3/s | L/h | llm (0.6) | Hooper_2025_table_3:row3:col3, Hooper_2025_table_3:row5:col3 |  |
| beta_Cl_logtEGFR_comb | `Q900` · equation variable | 0.535 |  |  |  |  | llm (0.6) | Hooper_2025_table_S25:row4:col4, Hooper_2025_table_S25:row4:col5, Hooper_2025_table_S27:row4:col4, Hooper_2025_table_S27:row4:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Parameter Interindividual Variability (C.V. %)')
- table section iiv: 'V1' routed out of structural estimates ('Parameter Interindividual Variability (C.V. %)')
- table section iiv: 'Q' routed out of structural estimates ('Parameter Interindividual Variability (C.V. %)')
- table section iiv: 'V2' routed out of structural estimates ('Parameter Interindividual Variability (C.V. %)')
- dropped duplicate Q22 ('CL_β_eGFRcr‐cys', value '0.69') — already have one for this compound
- dropped duplicate Q22 ('CL_ β_Sex', value '0.15') — already have one for this compound
- dropped unlinked row (NIL): 'V1_ β_Sex' — extend the ontology if this is a real PK parameter (source ['jcph70046-tbl-0002:row6:col3'])
- dropped duplicate Q64 ('V2_β_weight', value '0.88') — already have one for this compound
- dropped unlinked row (NIL): 'V2_ β_Sex' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_3:row8:col3'])
- dropped duplicate Q22 ('Cl_pop', value '65.158') — already have one for this compound
- routed 'beta_Cl_Sex_1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q63 ('V1_pop', value '5091.933') — already have one for this compound
- routed 'beta_V1_Sex_1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q30 ('Q_pop', value '121.357') — already have one for this compound
- dropped duplicate Q64 ('V2_pop', value '5374.271') — already have one for this compound
- dropped unlinked row (NIL): 'beta_V2_logtWeight' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row9:col4', 'Hooper_2025_table_S25:row9:col5'])
- dropped unlinked row (NIL): 'Cl_Sex_0' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row11:col4', 'Hooper_2025_table_S25:row11:col5'])
- dropped unlinked row (NIL): 'Cl_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row12:col4', 'Hooper_2025_table_S25:row12:col5'])
- dropped unlinked row (NIL): 'V1_Sex_0' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row13:col4', 'Hooper_2025_table_S25:row13:col5'])
- dropped unlinked row (NIL): 'V1_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row14:col4', 'Hooper_2025_table_S25:row14:col5'])
- dropped unlinked row (NIL): 'corr_V2_Cl' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row22:col4', 'Hooper_2025_table_S25:row22:col5'])
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row24:col4', 'Hooper_2025_table_S25:row24:col5'])
- dropped duplicate Q900 ('b', value '0.0398') — already have one for this compound
- dropped duplicate Q354 ('beta_Cl_logtBSA_mosteller', value '0.179') — already have one for this compound
- dropped duplicate Q63 ('beta_V1_logtBSA_mosteller', value '0.908') — already have one for this compound
- dropped duplicate Q64 ('beta_V2_Sex_1', value '0.0866') — already have one for this compound
- routed 'V2_Sex_0' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'V2_Sex_1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'CL_ β_BSA' → mL/min/kg (from the popPK convention: "The paper reports clearance values in mL/min (e.g., 'CL_pop for iohexol ... 69.69 mL/min') but gives no unit for the BSA")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=iohexol
- model-stage split: 'final model' is the final model of Hooper_2025 (paper reports 5 stages: base model, final model, pragmatic model, stoch. approx., value); same population, different model-building step

**Extraction notes:**
- companion parameter table 3 transcribed (31 record(s), model stage 'final')
- companion parameter table S25 transcribed (103 record(s), model stage 'final')
- companion parameter table S27 transcribed (83 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, S25, S27

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[beta_cl_logtegfr_comb]` | 0.535 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_ β_bsa]` | 0.59 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_pop]` | 69.69 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_pop]` |  | 69.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_pop]` | 167.91 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_pop]` |  | 167.91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1_pop]` | 5920.61 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1_pop]` |  | 5920.61 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2_pop]` | 6021.42 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2_pop]` |  | 6021.42 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | iohexol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | iohexol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jcph70046-tbl-0002:row1:col3', 'Hooper_2025_table_3:row0:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph70046-tbl-0002:row7:col3', 'Hooper_2025_table_3:row6:col3'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Hooper_2025_table_3:row3:col3', 'Hooper_2025_table_3:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['jcph70046-tbl-0002:row5:col3', 'Hooper_2025_table_3:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jcph70046-tbl-0002:row8:col3', 'Hooper_2025_table_3:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 69.69 | ['jcph70046-tbl-0002:row1:col3', 'Hooper_2025_table_3:row0:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.18 L/h | ['jcph70046-tbl-0002:row1:col3', 'Hooper_2025_table_3:row0:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.92 L | ['jcph70046-tbl-0002:row5:col3', 'Hooper_2025_table_3:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.02 L | ['jcph70046-tbl-0002:row8:col3', 'Hooper_2025_table_3:row7:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=iohexol) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_iohexol/Iohexol_Hooper2025_final/Iohexol_Hooper2025_final_modelica.zip" download>Iohexol_Hooper2025_final_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_iohexol/Iohexol_Hooper2025_final/Iohexol_Hooper2025_final_fmi.zip" download>Iohexol_Hooper2025_final_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_iohexol/Iohexol_Hooper2025_final/Iohexol_Hooper2025_final_matlab.zip" download>Iohexol_Hooper2025_final_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_iohexol/Iohexol_Hooper2025_final/Iohexol_Hooper2025_final_matlab_simbio.zip" download>Iohexol_Hooper2025_final_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_iohexol/Iohexol_Hooper2025_final/Iohexol_Hooper2025_final_sbml.zip" download>Iohexol_Hooper2025_final_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_iohexol/Iohexol_Hooper2025_final/Iohexol_Hooper2025_final_cellml.zip" download>Iohexol_Hooper2025_final_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.8211 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.001618 | kg |
| input | model | `Cl` | 1.161e-06 | m3/s |
| input | model | `VdPerKg` | 8.458e-05 | m3/kg |
| input | model | `k12` | 0.0004727 | 1/s |
| input | model | `k21` | 0.0004648 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Hooper L, Heung M, Wang L, Matvekas A, Alikhani R, Kenes MT et al. Pharmacokinetic Characterization of Iopamidol and Iohexol for Optimizing Measured Glomerular Filtration Rate Assessment in Clinical Practice and Drug Development. Journal of clinical pharmacology 65(11):1350–1361 (2025). [doi:10.1002/jcph.70046](https://doi.org/10.1002/jcph.70046)

**This record:** Pharmacolibrary v26.09, model `Iohexol_Hooper2025_final`. <https://pharmacolibrary.github.io/#/drugs/drug_iohexol/Iohexol_Hooper2025_final>

```bibtex
@misc{pharmacolibrary_IohexolHooper2025final,
  title  = {{Pharmacolibrary model Iohexol_Hooper2025_final}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_iohexol/Iohexol_Hooper2025_final},
  note   = {Parameters from doi:10.1002/jcph.70046},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 1618 mg infusion over 10 min, single dose. Dose in the paper: 1618 mg.

<dbs-fmusim paramsurl="drugs/drug_iohexol/Iohexol_Hooper2025_final/Iohexol_Hooper2025_final_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_iohexol/Iohexol_Hooper2025_final/Iohexol_Hooper2025_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Iohexol_Hooper2025_final_params.json` · controls `Iohexol_Hooper2025_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biohexol%5D%20Iohexol_Hooper2025_final&body=Drug%3A%20iohexol%0ARecord%3A%20Iohexol_Hooper2025_final%0APaper%3A%20Hooper_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iohexol/Iohexol_Hooper2025_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 22:23 UTC</sub>
