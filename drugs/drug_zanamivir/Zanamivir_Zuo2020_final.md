<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zanamivir&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/&quot;},{&quot;label&quot;:&quot;Zuo_2020 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zanamivir_Wollacott2016_reference&quot;,&quot;label&quot;:&quot;Wollacott_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Wollacott2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zanamivir_Zuo2020_base&quot;,&quot;label&quot;:&quot;Zuo_2020_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Zuo2020_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zanamivir_Zuo2020_final&quot;,&quot;label&quot;:&quot;Zuo_2020_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Zuo2020_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Zanamivir_Zuo2020_full&quot;,&quot;label&quot;:&quot;Zuo_2020_full&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Zuo2020_full.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# zanamivir — `Zanamivir_Zuo2020_final`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 3.2, model 4.69); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="zanamivir" model-id="Zanamivir_Zuo2020_final" status="needs_review" stale="false" population="healthy adults and hospitalized adult and pediatric subjects with influenza" measured-compound="zanamivir" parameterization="mechanistic" topology="2C"></div>

## Citation
Zuo P, Collins J, Okour M, Barth A, Shortino D, Yates P et al. Population Pharmacokinetic/Pharmacodynamic Analysis of Intravenous Zanamivir in Healthy Adults and Hospitalized Adult and Pediatric Subjects With Influenza. Clinical and translational science 13(1):157–168 (2020).
  ·  DOI: [10.1111/cts.12697](https://doi.org/10.1111/cts.12697)

## Population and dosing

**Population:** healthy adults and hospitalized adult and pediatric subjects with influenza · condition healthy or suspected/confirmed influenza; includes renal impairment · age group mixed · n = 658.

**Dosing:** 100, 300, 600, 1200 mg, iv.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 4 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_zanamivir/Zanamivir_Zuo2020_final/Zanamivir_Zuo2020_final.svg" alt="Zanamivir_Zuo2020_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL, L/hour | CL | 6.82 | L/hour | 3.10 (None% RSE) |
| V1, L | V1 | 12.3 | L |  |
| Q, L/hour | Q | 4.82 | L/hour |  |
| V2, L | V2 | 6.52 | L |  |
| theta_q900_crcl_power | theta_q900_crcl_power | 97.0 |  |  |
| theta_q335_crcl_power | theta_q335_crcl_power | 0.00929 |  |  |
| theta_q319_wt_power | theta_q319_wt_power | 0.711 |  |  |
| theta_q_wt_power | theta_q_wt_power | 0.658 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.471). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 3.2, model 4.69); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — zanamivir: CL 6.82 L/hour, V1 12.3 L, Q 4.82 L/hour, V2 6.52 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[cl].covariate_forms`: this record has none, the second reading ['power', 'power', 'power']; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL, L/hour | `Q22` · CL | 6.82 | L/hour | 1.894e-06 | m3/s | l/h | exact (1) | cts12697-tbl-0002:row2:col4 | 3.10 (None% RSE) |
| V1, L | `Q63` · V1 | 12.3 | L | 0.0123 | m3 | l | exact (1) | cts12697-tbl-0002:row3:col4 |  |
| Q, L/hour | `Q30` · Q | 4.82 | L/hour | 1.339e-06 | m3/s | l/h | exact (1) | cts12697-tbl-0002:row4:col4 |  |
| V2, L | `Q64` · V2 | 6.52 | L | 0.00652 | m3 | l | exact (1) | cts12697-tbl-0002:row5:col4 |  |
| theta_q900_crcl_power | `Q900` · theta_q900_crcl_power | 97.0 |  |  |  |  |  | cts12697-tbl-0002:row7:col4 |  |
| theta_q335_crcl_power | `Q900` · theta_q335_crcl_power | 0.00929 |  |  |  |  |  | cts12697-tbl-0002:row8:col4 |  |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.711 |  |  |  |  |  | cts12697-tbl-0002:row12:col4 |  |
| theta_q_wt_power | `Q900` · theta_q_wt_power | 0.658 |  |  |  |  |  | cts12697-tbl-0002:row14:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIVCL, CV% (% η‐shrinkage)' routed out of structural estimates ('IIV')
- table section iiv: 'IIVV1, CV% (% η‐shrinkage)' routed out of structural estimates ('IIV')
- table section residual_error: 'Proportional error, CV% (% RSE)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (μg/mL), SD (% RSE)' routed out of structural estimates ('Residual variability')
- dropped duplicate Q22 ('CL ~ FLU', value '0.756') — already have one for this compound
- dropped unlinked row (NIL): 'V1/V2 ~ Study (NAI114346)' — extend the ontology if this is a real PK parameter (source ['cts12697-tbl-0002:row13:col4'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=zanamivir
- model-stage split: 'final model' is the final model of Zuo_2020 (paper reports 3 stages: base model, final model, full model); same population, different model-building step

**Extraction notes:**
- unparsed cell cts12697-tbl-0002:row2:col3 = '6.56, 7.05'
- unparsed cell cts12697-tbl-0002:row2:col5 = '6.83 (6.60, 7.0909)'
- unparsed cell cts12697-tbl-0002:row3:col3 = '11.8, 12.8'
- unparsed cell cts12697-tbl-0002:row3:col5 = '12.3 (11.88, 12.8)'
- unparsed cell cts12697-tbl-0002:row4:col3 = '4.06, 5.58'
- unparsed cell cts12697-tbl-0002:row4:col5 = '4.83 (4.20, 5.5858)'
- unparsed cell cts12697-tbl-0002:row5:col3 = '5.99, 7.05'
- unparsed cell cts12697-tbl-0002:row5:col5 = '6.54 (6.0606, 7.0404)'
- unparsed cell cts12697-tbl-0002:row7:col3 = '93.1, 101'
- unparsed cell cts12697-tbl-0002:row7:col5 = '97.1 (87.55, 111)'
- unparsed cell cts12697-tbl-0002:row8:col3 = '0.00786, 0.0106'
- unparsed cell cts12697-tbl-0002:row8:col5 = '0.00923 (0.00754, 0.0110)'
- unparsed cell cts12697-tbl-0002:row9:col3 = '0.701, 0.825'
- unparsed cell cts12697-tbl-0002:row9:col5 = '0.760 (0.707, 0.814)'
- unparsed cell cts12697-tbl-0002:row10:col3 = '0.645, 1.155'
- unparsed cell cts12697-tbl-0002:row11:col3 = '0.416, 0.992'
- unparsed cell cts12697-tbl-0002:row12:col3 = '0.652, 0.770'
- unparsed cell cts12697-tbl-0002:row12:col5 = '0.712 (0.649, 0.769)'
- unparsed cell cts12697-tbl-0002:row13:col3 = '0.699, 0.759'
- unparsed cell cts12697-tbl-0002:row13:col5 = '0.728 (0.700, 0.760)'
- unparsed cell cts12697-tbl-0002:row14:col3 = '0.538, 0.778'
- unparsed cell cts12697-tbl-0002:row14:col5 = '0.659 (0.514, 0.768)'
- unparsed cell cts12697-tbl-0002:row15:col3 = '2.41, 3.73'
- unparsed cell cts12697-tbl-0002:row15:col5 = '3.12 (2.5454, 3.8181)'
- unparsed cell cts12697-tbl-0002:row17:col5 = '18.5 (15.4, 22.7)'
- unparsed cell cts12697-tbl-0002:row18:col5 = '34.8 (30.5, 40.7)'
- unparsed cell cts12697-tbl-0002:row20:col5 = '26.2 (24.9, 27.5)'
- unparsed cell cts12697-tbl-0002:row21:col5 = '0.0269 (0.0243, 0.0294)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.471 (8/17 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | [] | ['power', 'power', 'power'] | mismatch |
| `qwen3.8-27b` | `parameters[q].covariate_forms` | ['power'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[q_wt]` |  | 0.658 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_crcl_power]` |  | 97.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q21_wt_power]` |  | 0.711 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_wt_power]` | 0.711 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q335_crcl_power]` | 0.00929 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_crcl_power]` | 97.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q_wt_power]` | 0.658 |  | only_one_extracted |

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
| C2_base_Q22 | pass | 6.82 | 6.82 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['cts12697-tbl-0002:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['cts12697-tbl-0002:row4:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['cts12697-tbl-0002:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['cts12697-tbl-0002:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.82 |  |  | ['cts12697-tbl-0002:row2:col4'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.82 L/h |  |  | ['cts12697-tbl-0002:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 12.3 L |  |  | ['cts12697-tbl-0002:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.52 L |  |  | ['cts12697-tbl-0002:row5:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=zanamivir) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | fail | 3.2 | 4.687 | 1.465 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_final/Zanamivir_Zuo2020_final_modelica.zip" download>Zanamivir_Zuo2020_final_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_final/Zanamivir_Zuo2020_final_fmi.zip" download>Zanamivir_Zuo2020_final_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_final/Zanamivir_Zuo2020_final_matlab.zip" download>Zanamivir_Zuo2020_final_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_final/Zanamivir_Zuo2020_final_matlab_simbio.zip" download>Zanamivir_Zuo2020_final_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_final/Zanamivir_Zuo2020_final_sbml.zip" download>Zanamivir_Zuo2020_final_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_final/Zanamivir_Zuo2020_final_cellml.zip" download>Zanamivir_Zuo2020_final_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3323 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.894e-06 | m3/s |
| input | model | `VdPerKg` | 0.0001757 | m3/kg |
| input | model | `k12` | 0.0001089 | 1/s |
| input | model | `k21` | 0.0002054 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zuo P, Collins J, Okour M, Barth A, Shortino D, Yates P et al. Population Pharmacokinetic/Pharmacodynamic Analysis of Intravenous Zanamivir in Healthy Adults and Hospitalized Adult and Pediatric Subjects With Influenza. Clinical and translational science 13(1):157–168 (2020). [doi:10.1111/cts.12697](https://doi.org/10.1111/cts.12697)

**This record:** Pharmacolibrary v26.09, model `Zanamivir_Zuo2020_final`. <https://pharmacolibrary.github.io/#/drugs/drug_zanamivir/Zanamivir_Zuo2020_final>

```bibtex
@misc{pharmacolibrary_ZanamivirZuo2020final,
  title  = {{Pharmacolibrary model Zanamivir_Zuo2020_final}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_zanamivir/Zanamivir_Zuo2020_final},
  note   = {Parameters from doi:10.1111/cts.12697},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 100 mg infusion over 10 min, single dose. Doses in the paper: 100, 300, 600, 1200 mg.

<dbs-fmusim paramsurl="drugs/drug_zanamivir/Zanamivir_Zuo2020_final/Zanamivir_Zuo2020_final_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_zanamivir/Zanamivir_Zuo2020_final/Zanamivir_Zuo2020_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Zanamivir_Zuo2020_final_params.json` · controls `Zanamivir_Zuo2020_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzanamivir%5D%20Zanamivir_Zuo2020_final&body=Drug%3A%20zanamivir%0ARecord%3A%20Zanamivir_Zuo2020_final%0APaper%3A%20Zuo_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zanamivir/Zanamivir_Zuo2020_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:12 UTC</sub>
