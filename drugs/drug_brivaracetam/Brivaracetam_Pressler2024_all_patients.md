<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;brivaracetam&quot;,&quot;href&quot;:&quot;drugs/drug_brivaracetam/&quot;},{&quot;label&quot;:&quot;Pressler_2024 \u00b7 all_patients&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brivaracetam_Schoemaker2018_reference&quot;,&quot;label&quot;:&quot;Schoemaker_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brivaracetam/Brivaracetam_Schoemaker2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brivaracetam_Yu2026_reference&quot;,&quot;label&quot;:&quot;Yu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brivaracetam/Brivaracetam_Yu2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brivaracetam_Klein2026_reference&quot;,&quot;label&quot;:&quot;Klein_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brivaracetam/Brivaracetam_Klein2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brivaracetam_Li2025_reference&quot;,&quot;label&quot;:&quot;Li_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brivaracetam/Brivaracetam_Li2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brivaracetam_Pressler2024_all_patients&quot;,&quot;label&quot;:&quot;Pressler_2024_all_patients&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Brivaracetam_Pressler2024_individual_patient_data&quot;,&quot;label&quot;:&quot;Pressler_2024_individual_patient_data&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brivaracetam/Brivaracetam_Pressler2024_individual_patient_data.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brivaracetam — `Brivaracetam_Pressler2024_all_patients`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Brivaracetam bioavailability and lag time lacked explicit estimates, forcing reliance on unsupported library defaults.

<div class="pk-model-meta" hidden drug="brivaracetam" model-id="Brivaracetam_Pressler2024_all_patients" status="needs_review" stale="false" population="neonates with repeated electroencephalographic seizures" measured-compound="brivaracetam" parameterization="mechanistic" topology="1C"></div>

## Citation
Pressler R, Boylan G, Dempsey E, Klotz KA, Krauwinkel W, Will E et al. Pharmacokinetics and safety of brivaracetam in neonates with repeated electroencephalographic seizures: A multicenter, open-label, single-arm study. Epilepsia open 9(2):522-533 (2024).
  ·  DOI: [10.1002/epi4.12875](https://doi.org/10.1002/epi4.12875)

## Population and dosing

**Population:** neonates with repeated electroencephalographic seizures · condition neonatal seizures · age group neonate · n = 6.

**Dosing:** 35 mg, iv, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients/Brivaracetam_Pressler2024_all_patients.svg" alt="Brivaracetam_Pressler2024_all_patients diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC(0–12) (h*mg/L) | AUC | 4.44 | h*mg/L |
| C max (mg/L) | Cmax | 0.60 | mg/L |
| t max (min) | tmax | 16.84 | min |
| V d (L) | V | 2.57 | L |
| CL (L/h) | CL | 0.23 | L/h |
| t ½ (h) | t1/2z | 7.65 | h |
| absorption rate constant for the slow absorption component | kabs | 5.37 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Brivaracetam bioavailability and lag time lacked explicit estimates, forcing reliance on unsupported library defaults.**

The record lacks reported values for the bioavailability fraction (F) and absorption lag time (Tlag). Consequently, library placeholders were used instead of estimates derived from the Pressler_2024 data for neonates. These unreported parameters affect the simulated concentration-time profile but are not justified by the paper's specific findings. Extracted — brivaracetam: AUC 4.44 h*mg/L, Cmax 0.6 mg/L, tmax 16.8 min, V 2.57 L, CL 0.23 L/h, t1/2z 7.65 h, kabs 5.37 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has brivaracetam, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC(0–12) (h*mg/L) | `Q88` · AUC | 4.44 | h*mg/L |  |  | (h·mg)/l | space_fold (0.95) | epi412875-tbl-0002:row2:col1 |
| C max (mg/L) | `Q32` · Cmax | 0.60 | mg/L |  |  | mg/l | space_fold (0.95) | epi412875-tbl-0002:row4:col1 |
| t max (min) | `Q56` · tmax | 16.84 | min | 1010 | s | min | space_fold (0.95) | epi412875-tbl-0002:row5:col1 |
| V d (L) | `Q61` · V | 2.57 | L | 0.00257 | m3 | l | space_fold (0.95) | epi412875-tbl-0002:row6:col1 |
| CL (L/h) | `Q22` · CL | 0.23 | L/h | 6.389e-08 | m3/s | l/h | exact (1) | epi412875-tbl-0002:row7:col1 |
| t ½ (h) | `Q57` · t1/2z | 7.65 | h | 2.754e+04 | s | h | llm (0.6) | epi412875-tbl-0002:row9:col1 |
| absorption rate constant for the slow absorption component | `Q49` · kabs | 5.37 | h−1 | 0.001492 | 1/s | 1/h | review_gapfill (0.7) | Klein_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped duplicate Q88 ('AUC(0–infinity) (h*mg/L)', value '6.75') — already have one for this compound
- dropped duplicate Q22 ('CL (mL/min)', value '3.88') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=brivaracetam
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'all patients (n = 6)' subgroup of Pressler_2024 (paper reports 2 populations: all patients (n = 6), individual patient data)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Klein_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell epi412875-tbl-0002:row2:col2 = '4.55 (3.71, 4.75)'
- unparsed cell epi412875-tbl-0002:row3:col2 = '6.98 (5.39, 7.68)'
- unparsed cell epi412875-tbl-0002:row4:col2 = '0.62 (0.52, 0.63)'
- unparsed cell epi412875-tbl-0002:row5:col2 = '15.00 (15.00, 30.00)'
- unparsed cell epi412875-tbl-0002:row6:col2 = '2.52 (1.85, 3.97)'
- unparsed cell epi412875-tbl-0002:row7:col2 = '0.22 (0.16, 0.39)'
- unparsed cell epi412875-tbl-0002:row8:col2 = '3.68 (2.71, 6.50)'
- unparsed cell epi412875-tbl-0002:row9:col2 = '7.77 (6.87, 8.60)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant for the slow absorption component]` | 5.37 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | brivaracetam | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['epi412875-tbl-0002:row7:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['epi412875-tbl-0002:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Klein_2026:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['epi412875-tbl-0002:row5:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['epi412875-tbl-0002:row9:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['epi412875-tbl-0002:row6:col1'] |
| C5_dimension_Q88 | pass | [time] * [mass] / [length] ** 3 |  | ['epi412875-tbl-0002:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.23 | ['epi412875-tbl-0002:row7:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.23 L/h | ['epi412875-tbl-0002:row7:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.57 L | ['epi412875-tbl-0002:row6:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=brivaracetam) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients/Brivaracetam_Pressler2024_all_patients_modelica.zip" download>Brivaracetam_Pressler2024_all_patients_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients/Brivaracetam_Pressler2024_all_patients_fmi.zip" download>Brivaracetam_Pressler2024_all_patients_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients/Brivaracetam_Pressler2024_all_patients_matlab.zip" download>Brivaracetam_Pressler2024_all_patients_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients/Brivaracetam_Pressler2024_all_patients_matlab_simbio.zip" download>Brivaracetam_Pressler2024_all_patients_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients/Brivaracetam_Pressler2024_all_patients_sbml.zip" download>Brivaracetam_Pressler2024_all_patients_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients/Brivaracetam_Pressler2024_all_patients_cellml.zip" download>Brivaracetam_Pressler2024_all_patients_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2123 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3.5e-05 | kg |
| input | model | `Cl` | 6.389e-08 | m3/s |
| input | model | `VdPerKg` | 3.671e-05 | m3/kg |
| input | model | `ka` | 0.001492 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Pressler R, Boylan G, Dempsey E, Klotz KA, Krauwinkel W, Will E et al. Pharmacokinetics and safety of brivaracetam in neonates with repeated electroencephalographic seizures: A multicenter, open-label, single-arm study. Epilepsia open 9(2):522-533 (2024). [doi:10.1002/epi4.12875](https://doi.org/10.1002/epi4.12875)

**This record:** Pharmacolibrary v26.09, model `Brivaracetam_Pressler2024_all_patients`. <https://pharmacolibrary.github.io/#/drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients>

```bibtex
@misc{pharmacolibrary_BrivaracetamPressler2024allpatients,
  title  = {{Pharmacolibrary model Brivaracetam_Pressler2024_all_patients}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients},
  note   = {Parameters from doi:10.1002/epi4.12875},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 35 mg, single dose, first-order absorption (ka 5.37 /h, F 0.9). Dose in the paper: 35 mg.

<dbs-fmusim paramsurl="drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients/Brivaracetam_Pressler2024_all_patients_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients/Brivaracetam_Pressler2024_all_patients_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Brivaracetam_Pressler2024_all_patients_params.json` · controls `Brivaracetam_Pressler2024_all_patients_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbrivaracetam%5D%20Brivaracetam_Pressler2024_all_patients&body=Drug%3A%20brivaracetam%0ARecord%3A%20Brivaracetam_Pressler2024_all_patients%0APaper%3A%20Pressler_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_brivaracetam/Brivaracetam_Pressler2024_all_patients%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:03 UTC</sub>
