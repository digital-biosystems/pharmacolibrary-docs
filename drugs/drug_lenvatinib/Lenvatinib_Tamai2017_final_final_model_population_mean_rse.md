<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lenvatinib&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/&quot;},{&quot;label&quot;:&quot;Tamai_2017 \u00b7 final_final_model_population_mean_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lenvatinib_Tamai2017_base_base_model_population_mean_rse&quot;,&quot;label&quot;:&quot;Tamai_2017_base_base_model_population_mean_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/Lenvatinib_Tamai2017_base_base_model_population_mean_rse.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lenvatinib_Tamai2017_final_final_model_population_mean_rse&quot;,&quot;label&quot;:&quot;Tamai_2017_final_final_model_population_mean_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lenvatinib — `Lenvatinib_Tamai2017_final_final_model_population_mean_rse`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The covariate scenarios were not simulated; cross_check_disputed (+1 more).

<div class="pk-model-meta" hidden drug="lenvatinib" model-id="Lenvatinib_Tamai2017_final_final_model_population_mean_rse" status="needs_review" stale="false" population="pooled population of healthy adults, patients with mixed tumor types, and patients with hepatocellular carcinoma" measured-compound="lenvatinib" parameterization="apparent" topology="2C"></div>

## Citation
Tamai T, Hayato S, Hojo S, Suzuki T, Okusaka T, Ikeda K et al. Dose Finding of Lenvatinib in Subjects With Advanced Hepatocellular Carcinoma Based on Population Pharmacokinetic and Exposure-Response Analyses. Journal of clinical pharmacology 57(9):1138–1147 (2017).
  ·  DOI: [10.1002/jcph.917](https://doi.org/10.1002/jcph.917)

## Population and dosing

**Population:** pooled population of healthy adults, patients with mixed tumor types, and patients with hepatocellular carcinoma · condition mixed (healthy, various cancers, hepatocellular carcinoma) · age group adult · n = 452.

**Dosing:** 8, 12, 16 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse/Lenvatinib_Tamai2017_final_final_model_population_mean_rse.svg" alt="Lenvatinib_Tamai2017_final_final_model_population_mean_rse diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Basal CL/F in L/h [ΘCL] | CL/F | 6.43 | L/h | 2.19 |
| Basal Q1/F in L/h [ΘQ1] | Q/F | 3.96 | L/h | 3.03 |
| Basal Q2/F in L/h [ΘQ2] | Q2/F | 0.726 | L/h | 2.91 |
| Basal V1/F in L [ΘV1] | V1/F | 47.0 | L | 4.40 |
| Basal V2/F in L [ΘV2] | V2/F | 31.2 | L | 6.76 |
| Basal V3/F in L [ΘV3] | V3/F | 34.5 | L | 4.14 |
| Ka (1/h) | kabs | 1.04 | 1/h | 6.80 |
| D1 (hours) | D1 | 1.06 | hours | 5.77 |
| theta_q319_body_weight | theta_q319_body_weight | 0.708 |  | 6.58 |
| theta_q40_formulation_f1_capsule_vs_tablet | theta_q40_formulation_f1_capsule_vs_tablet | 0.867 |  | 1.00 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.786). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The covariate scenarios were not simulated; cross_check_disputed (+1 more).**

The base model was simulated, not the covariate effects the record defines. Extracted — lenvatinib: CL/F 6.43 L/h, Q/F 3.96 L/h, Q2/F 0.726 L/h, V1/F 47 L, V2/F 31.2 L, V3/F 34.5 L, kabs 1.04 1/h, D1 1.06 hours.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[basal cl/f in l/h [θcl]].covariate_forms`: this record has none, the second reading ['linear_fractional']; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Basal CL/F in L/h [ΘCL] | `Q27` · CL/F | 6.43 | L/h | 1.786e-06 | m3/s | l/h | 2.19 | llm_confirmed (0.6) | Tamai_2017_table_p5_1:row1:col3 |
| Basal Q1/F in L/h [ΘQ1] | `Q69` · Q/F | 3.96 | L/h | 1.1e-06 | m3/s | l/h | 3.03 | llm_confirmed (0.6) | Tamai_2017_table_p5_1:row8:col3 |
| Basal Q2/F in L/h [ΘQ2] | `Q80` · Q2/F | 0.726 | L/h | 2.017e-07 | m3/s | l/h | 2.91 | llm_confirmed (0.6) | Tamai_2017_table_p5_1:row10:col3 |
| Basal V1/F in L [ΘV1] | `Q290` · V1/F | 47.0 | L | 0.047 | m3 | l | 4.40 | llm_confirmed (0.6) | Tamai_2017_table_p5_1:row12:col3 |
| Basal V2/F in L [ΘV2] | `Q82` · V2/F | 31.2 | L | 0.0312 | m3 | l | 6.76 | llm_confirmed (0.6) | Tamai_2017_table_p5_1:row15:col3 |
| Basal V3/F in L [ΘV3] | `Q78` · V3/F | 34.5 | L | 0.0345 | m3 | l | 4.14 | llm_confirmed (0.6) | Tamai_2017_table_p5_1:row17:col3 |
| Ka (1/h) | `Q49` · kabs | 1.04 | 1/h | 0.0002889 | 1/s | 1/h | 6.80 | exact (1) | Tamai_2017_table_p5_1:row18:col3 |
| D1 (hours) | `Q310` · D1 | 1.06 | hours | 3816 | s | h | 5.77 | exact (1) | Tamai_2017_table_p5_1:row19:col3 |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.708 |  |  |  |  | 6.58 |  | Tamai_2017_table_p5_1:row2:col3 |
| theta_q40_formulation_f1_capsule_vs_tablet | `Q900` · theta_q40_formulation_f1_capsule_vs_tablet | 0.867 |  |  |  |  | 1.00 |  | Tamai_2017_table_p5_1:row20:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q27 ('Inducer on CL/F [ΘINDU]', value '1.30') — already have one for this compound
- dropped duplicate Q27 ('Inhibitor on CL/F [ΘINHIB]', value '0.922') — already have one for this compound
- dropped unlinked row (NIL): 'Population (healthy vs subjects) on CL/F [ΘTM]' — extend the ontology if this is a real PK parameter (source ['Tamai_2017_table_p5_1:row5:col3'])
- dropped duplicate Q27 ('ALP (&gt; ULN vs ≤ ULN) on CL/F [ΘALP]', value '0.852') — already have one for this compound
- dropped unlinked row (NIL): 'Body weight on V1/F, V2/F, and V3/F [ΘWGT2]' — extend the ontology if this is a real PK parameter (source ['Tamai_2017_table_p5_1:row13:col3'])
- dropped unlinked row (NIL): 'Proportional (%CV) (Clinical pharmacology studies)' — extend the ontology if this is a real PK parameter (source ['Tamai_2017_table_p5_1:row21:col3'])
- dropped diagnostic row 'Proportional (%CV) (Patient studies)' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped unlinked row (NIL): 'Proportional (%CV) (TAD ≤ 2 hours)' — extend the ontology if this is a real PK parameter (source ['Tamai_2017_table_p5_1:row23:col3'])
- routed 'Additional (ng/mL) (TAD ≤ 2 hours)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q40 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lenvatinib
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- model-stage split: 'final model population mean (%rse)' is the final model of Tamai_2017 (paper reports 4 stages: base model interindividual variability (%cv), base model population mean (%rse), final model interindividual variability (%cv), final model population mean (%rse)); same population, different model-building step

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.786 (22/28 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[basal cl/f in l/h [θcl]].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[basal v1/f in l [θv1]].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[proportional (%cv)]` |  | 44.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_body_weight]` |  | 0.708 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight]` | 0.708 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_body_weight]` |  | 1.08 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tamai_2017_table_p5_1:row1:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tamai_2017_table_p5_1:row12:col3'] |
| C5_dimension_Q310 | pass | [time] |  | ['Tamai_2017_table_p5_1:row19:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tamai_2017_table_p5_1:row18:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tamai_2017_table_p5_1:row8:col3'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tamai_2017_table_p5_1:row17:col3'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['Tamai_2017_table_p5_1:row10:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tamai_2017_table_p5_1:row15:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.43 L/h | ['Tamai_2017_table_p5_1:row1:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 47 L | ['Tamai_2017_table_p5_1:row12:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 31.2 L | ['Tamai_2017_table_p5_1:row15:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=lenvatinib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.786 (22 of 28 compared fields agree, 4 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.786 | cross-check contradicted by a second reader: verdict disputed; agreement 0.786 (22 of 28 compared fields agree, 4 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse/Lenvatinib_Tamai2017_final_final_model_population_mean_rse_modelica.zip" download>Lenvatinib_Tamai2017_final_final_model_population_mean_rse_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse/Lenvatinib_Tamai2017_final_final_model_population_mean_rse_fmi.zip" download>Lenvatinib_Tamai2017_final_final_model_population_mean_rse_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse/Lenvatinib_Tamai2017_final_final_model_population_mean_rse_matlab.zip" download>Lenvatinib_Tamai2017_final_final_model_population_mean_rse_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse/Lenvatinib_Tamai2017_final_final_model_population_mean_rse_matlab_simbio.zip" download>Lenvatinib_Tamai2017_final_final_model_population_mean_rse_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse/Lenvatinib_Tamai2017_final_final_model_population_mean_rse_sbml.zip" download>Lenvatinib_Tamai2017_final_final_model_population_mean_rse_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse/Lenvatinib_Tamai2017_final_final_model_population_mean_rse_cellml.zip" download>Lenvatinib_Tamai2017_final_final_model_population_mean_rse_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4269 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 8e-06 | kg |
| input | model | `Cl` | 1.786e-06 | m3/s |
| input | model | `VdPerKg` | 0.0006714 | m3/kg |
| input | model | `k12` | 2.34e-05 | 1/s |
| input | model | `k21` | 3.526e-05 | 1/s |
| input | model | `ka` | 0.0002889 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Tamai T, Hayato S, Hojo S, Suzuki T, Okusaka T, Ikeda K et al. Dose Finding of Lenvatinib in Subjects With Advanced Hepatocellular Carcinoma Based on Population Pharmacokinetic and Exposure-Response Analyses. Journal of clinical pharmacology 57(9):1138–1147 (2017). [doi:10.1002/jcph.917](https://doi.org/10.1002/jcph.917)

**This record:** Pharmacolibrary, model `Lenvatinib_Tamai2017_final_final_model_population_mean_rse`. <https://pharmacolibrary.github.io/#/drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse>

```bibtex
@misc{pharmacolibrary_LenvatinibTamai2017finalfinalmodelpopulationmeanrse,
  title  = {{Pharmacolibrary model Lenvatinib_Tamai2017_final_final_model_population_mean_rse}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse},
  note   = {Parameters from doi:10.1002/jcph.917},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 8 mg, single dose, first-order absorption (ka 1.04 /h, F 1). Doses in the paper: 8, 12, 16 mg.

<dbs-fmusim paramsurl="drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse/Lenvatinib_Tamai2017_final_final_model_population_mean_rse_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse/Lenvatinib_Tamai2017_final_final_model_population_mean_rse_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Lenvatinib_Tamai2017_final_final_model_population_mean_rse_params.json` · controls `Lenvatinib_Tamai2017_final_final_model_population_mean_rse_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blenvatinib%5D%20Lenvatinib_Tamai2017_final_final_model_population_mean_rse&body=Drug%3A%20lenvatinib%0ARecord%3A%20Lenvatinib_Tamai2017_final_final_model_population_mean_rse%0APaper%3A%20Tamai_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 13:06 UTC</sub>
