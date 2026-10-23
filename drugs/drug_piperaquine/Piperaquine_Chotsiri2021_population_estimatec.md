<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Piperaquine&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/&quot;},{&quot;label&quot;:&quot;Chotsiri_2021 \u00b7 population_estimatec&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piperaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_population_estimatec&quot;,&quot;label&quot;:&quot;Chotsiri_2021_population_estimatec&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_prior_estimateb&quot;,&quot;label&quot;:&quot;Chotsiri_2021_prior_estimateb&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Zaloumis2012_reference&quot;,&quot;label&quot;:&quot;Zaloumis_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Zaloumis2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Ding2024_nonmem_population_estimates_rse_a&quot;,&quot;label&quot;:&quot;Ding_2024_nonmem_population_estimates_rse_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_population_estimates_rse_a.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Piperaquine — `Piperaquine_Chotsiri2021_population_estimatec`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The piperaquine model was held back because the absorption rate constant ka (and Tlag) were not reported in Chotsiri_2021 and library defaults were used, and the simulated peak concentration (0.000122) misses the paper's reported Cmax (0.000212, ratio 0.5737).

<div class="pk-model-meta" hidden drug="Piperaquine" model-id="Piperaquine_Chotsiri2021_population_estimatec" status="needs_review" stale="false" population="pregnant women receiving IPTp with dihydroartemisinin-piperaquine" measured-compound="piperaquine" parameterization="apparent" topology="2C"></div>

## Citation
Chotsiri P, Gutman JR, Ahmed R, Poespoprodjo JR, Syafruddin D, Khairallah C et al. Piperaquine Pharmacokinetics during Intermittent Preventive Treatment for Malaria in Pregnancy. Antimicrobial agents and chemotherapy 65(3) (2021).
  ·  DOI: [10.1128/AAC.01150-20](https://doi.org/10.1128/AAC.01150-20)

## Population and dosing

**Population:** pregnant women receiving IPTp with dihydroartemisinin-piperaquine · condition malaria prophylaxis in pregnancy · age group adult.

**Dosing:** 320 mg, oral, multiple.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec/Piperaquine_Chotsiri2021_population_estimatec.svg" alt="Piperaquine_Chotsiri2021_population_estimatec diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| MTT (h) | MTT | 2.10 | h |  |
| CL/F (liters/h) | CL/F | 49.0 | liters/h | 21.0 (None% RSE) |
| VC/F (liters) | V1/F | 2190 | liters | 38.9 (None% RSE) |
| Q1/F (liters/h) | Q/F | 244 | liters/h | 36.0 (None% RSE) |
| VP1/F (liters) | V2/F | 3270 | liters |  |
| VP2/F (liters) | V3/F | 18800 | liters |  |
| CFCAP-VEN | Frel | 2.62 |  |  |
| F | Fab | 1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.846). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The piperaquine model was held back because the absorption rate constant ka (and Tlag) were not reported in Chotsiri_2021 and library defaults were used, and the simulated peak concentration (0.000122) misses the paper's reported Cmax (0.000212, ratio 0.5737).**

Simulated as the paper dosed it, the model's Cmax of 0.000122 differs from the reported 0.000212 (and 0.000232) by more than the tolerance, with ratios 0.5737 and 0.5243. The absorption parameters ka and Tlag were left at library defaults rather than estimated from this paper, which the adjudication judged not acceptable, and the invented absorption was also rejected. The model uses an apparent parameterization (F=1, Fm=1, no molar correction) with first-order depot input, and one reported unit could not be converted to SI, so that parameter entered the model without an SI value. Extracted — piperaquine: MTT 2.1 h, CL/F 49 liters/h, V1/F 2.19e+03 liters, Q/F 244 liters/h, V2/F 3.27e+03 liters, V3/F 1.88e+04 liters, Frel 2.62, Fab 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cfcap-ven: this record has 2.62, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| MTT (h) | `Q81` · MTT | 2.10 | h |  |  | h | exact (1) | T2:row2:col2 |  |
| CL/F (liters/h) | `Q27` · CL/F | 49.0 | liters/h | 1.361e-05 | m3/s | l/h | exact (1) | T2:row3:col2 | 21.0 (None% RSE) |
| VC/F (liters) | `Q290` · V1/F | 2190 | liters | 2.19 | m3 | l | exact (1) | T2:row4:col2 | 38.9 (None% RSE) |
| Q1/F (liters/h) | `Q69` · Q/F | 244 | liters/h | 6.778e-05 | m3/s | l/h | exact (1) | T2:row5:col2 | 36.0 (None% RSE) |
| VP1/F (liters) | `Q82` · V2/F | 3270 | liters | 3.27 | m3 | l | llm (0.6) | T2:row6:col2 |  |
| VP2/F (liters) | `Q78` · V3/F | 18800 | liters | 18.8 | m3 | l | exact (1) | T2:row8:col2 |  |
| CFCAP-VEN | `Q87` · Frel | 2.62 |  |  |  |  | llm (0.6) | T2:row9:col2 |  |
| F | `Q40` · Fab | 1 |  |  |  |  | exact (1) | T2:row10:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'CL/F (liters/h)' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'VC/F (liters)' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Q2/F (liters/h)' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iov: 'MTT (h)' routed out of structural estimates ('Interoccasion variability (%CV)')
- table section iov: 'F' routed out of structural estimates ('Interoccasion variability (%CV)')
- dropped duplicate Q69 ('Q2/F (liters/h)', value '98.2') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=piperaquine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'population estimatec' subgroup of Chotsiri_2021 (paper reports 2 populations: population estimatec, prior estimateb)

**Extraction notes:**
- companion parameter table 3 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cfcap-ven]` | 2.62 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp1/f]` | 3270 |  | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T2:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['T2:row5:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['T2:row8:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T2:row6:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 49 L/h | ['T2:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.19e+03 L | ['T2:row4:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 3.27e+03 L | ['T2:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=piperaquine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.000212 | 0.0001216 | 0.5737 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000232 | 0.0001216 | 0.5243 | ng/ml→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | skipped |  | 32.33 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec/Piperaquine_Chotsiri2021_population_estimatec_modelica.zip" download>Piperaquine_Chotsiri2021_population_estimatec_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec/Piperaquine_Chotsiri2021_population_estimatec_fmi.zip" download>Piperaquine_Chotsiri2021_population_estimatec_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec/Piperaquine_Chotsiri2021_population_estimatec_matlab.zip" download>Piperaquine_Chotsiri2021_population_estimatec_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec/Piperaquine_Chotsiri2021_population_estimatec_matlab_simbio.zip" download>Piperaquine_Chotsiri2021_population_estimatec_matlab_simbio.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec/Piperaquine_Chotsiri2021_population_estimatec_sbml.zip" download>Piperaquine_Chotsiri2021_population_estimatec_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec/Piperaquine_Chotsiri2021_population_estimatec_cellml.zip" download>Piperaquine_Chotsiri2021_population_estimatec_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5355 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00032 | kg |
| input | model | `Cl` | 1.361e-05 | m3/s |
| input | model | `VdPerKg` | 0.03129 | m3/kg |
| input | model | `k12` | 3.095e-05 | 1/s |
| input | model | `k21` | 2.073e-05 | 1/s |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Chotsiri P, Gutman JR, Ahmed R, Poespoprodjo JR, Syafruddin D, Khairallah C et al. Piperaquine Pharmacokinetics during Intermittent Preventive Treatment for Malaria in Pregnancy. Antimicrobial agents and chemotherapy 65(3) (2021). [doi:10.1128/AAC.01150-20](https://doi.org/10.1128/AAC.01150-20)

**This record:** Pharmacolibrary v26.09, model `Piperaquine_Chotsiri2021_population_estimatec`. <https://pharmacolibrary.github.io/#/drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec>

```bibtex
@misc{pharmacolibrary_PiperaquineChotsiri2021populationestimatec,
  title  = {{Pharmacolibrary model Piperaquine_Chotsiri2021_population_estimatec}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec},
  note   = {Parameters from doi:10.1128/AAC.01150-20},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 320 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 320 mg.

<dbs-fmusim paramsurl="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec/Piperaquine_Chotsiri2021_population_estimatec_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec/Piperaquine_Chotsiri2021_population_estimatec_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Piperaquine_Chotsiri2021_population_estimatec_params.json` · controls `Piperaquine_Chotsiri2021_population_estimatec_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpiperaquine%5D%20Piperaquine_Chotsiri2021_population_estimatec&body=Drug%3A%20piperaquine%0ARecord%3A%20Piperaquine_Chotsiri2021_population_estimatec%0APaper%3A%20Chotsiri_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:37 UTC</sub>
