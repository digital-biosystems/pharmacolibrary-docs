<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ribavirin&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/&quot;},{&quot;label&quot;:&quot;Jin_2012 \u00b7 mean_of_25_leverage_runs_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ribavirin_Jin2012_mean_of_25_leverage_runs_cv&quot;,&quot;label&quot;:&quot;Jin_2012_mean_of_25_leverage_runs_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ribavirin_Jin2012_population_mean_in_final_pk_model&quot;,&quot;label&quot;:&quot;Jin_2012_population_mean_in_final_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Jin2012_population_mean_in_final_pk_model.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ribavirin_Wade2006_reference&quot;,&quot;label&quot;:&quot;Wade_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Wade2006_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ribavirin — `Ribavirin_Jin2012_mean_of_25_leverage_runs_cv`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="ribavirin" model-id="Ribavirin_Jin2012_mean_of_25_leverage_runs_cv" status="accepted_with_caveats" stale="false" population="adults with chronic hepatitis C genotype 1 infection" measured-compound="ribavirin" parameterization="apparent" topology="2C"></div>

## Citation
Jin R, Fossler MJ, McHutchison JG, Howell CD, Dowling TC. Population pharmacokinetics and pharmacodynamics of ribavirin in patients with chronic hepatitis C genotype 1 infection. The AAPS journal 14(3):571–580 (2012).
  ·  DOI: [10.1208/s12248-012-9368-z](https://doi.org/10.1208/s12248-012-9368-z)

## Population and dosing

**Population:** adults with chronic hepatitis C genotype 1 infection · condition chronic hepatitis C genotype 1 · age group adult · n = 144.

**Dosing:** 1000, 1200 mg/day, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv.svg" alt="Ribavirin_Jin2012_mean_of_25_leverage_runs_cv diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CL/F | 19.12 | L/h | 2.25 | 36.06 (9.18% RSE) |
| Vc/F (L) | V1/F | 1151 | L | 11.87 | 36.06 (98.62% RSE) |
| Vp/F (L) | V2/F | 3992 | L | 10.74 | 64.81 (42.44% RSE) |
| Q/F (L/h) | Q/F | 37.07 | L/h | 5.94 |  |
| Ka (h⁻¹) | kabs | 0.91 | h⁻¹ | 23.08 |  |
| race_factor | race_factor | 1.51 |  | 11.71 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.882). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ribavirin, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 19.12 | L/h | 5.311e-06 | m3/s | l/h | 2.25 | exact (1) | Jin_2012_table_p5_1:row0:col2 | 36.06 (9.18% RSE) |
| Vc/F (L) | `Q290` · V1/F | 1151 | L | 1.151 | m3 | l | 11.87 | exact (1) | Jin_2012_table_p5_1:row1:col2 | 36.06 (98.62% RSE) |
| Vp/F (L) | `Q82` · V2/F | 3992 | L | 3.992 | m3 | l | 10.74 | exact (1) | Jin_2012_table_p5_1:row2:col2 | 64.81 (42.44% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 37.07 | L/h | 1.03e-05 | m3/s | l/h | 5.94 | exact (1) | Jin_2012_table_p5_1:row3:col2 |  |
| Ka (h⁻¹) | `Q49` · kabs | 0.91 | h⁻¹ | 0.0002528 | 1/s | 1/h | 23.08 | exact (1) | Jin_2012_table_p5_1:row4:col2 |  |
| race_factor | `Q900` · race_factor | 1.51 |  |  |  |  | 11.71 |  | Jin_2012_table_p5_1:row5:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- covariate level 'Race factor' → Q900:race_factor = 1.51 (linear_fractional on Q27)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ribavirin
- population split: 'mean of 25 leverage runs (% cv)' subgroup of Jin_2012 (paper reports 2 populations: mean of 25 leverage runs (% cv), population mean in final pk model)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Jin_2012_table_p5_1:row0:col4 = '17.70, 20.30'
- unparsed cell Jin_2012_table_p5_1:row1:col4 = '838, 1,585'
- unparsed cell Jin_2012_table_p5_1:row2:col4 = '2,925, 5,010'
- unparsed cell Jin_2012_table_p5_1:row3:col4 = '29.84, 47.70'
- unparsed cell Jin_2012_table_p5_1:row4:col4 = '1.13, 2.24'
- unparsed cell Jin_2012_table_p5_1:row5:col4 = '1.14, 2.07'
- unparsed cell Jin_2012_table_p5_1:row6:col4 = '31.36, 43.24'
- unparsed cell Jin_2012_table_p5_1:row7:col4 = '1.00, 85.47'
- unparsed cell Jin_2012_table_p5_1:row8:col4 = '19.72, 85.74'
- unparsed cell Jin_2012_table_p5_1:row9:col4 = '1.00, 13.78'
- unparsed cell Jin_2012_table_p5_1:row10:col4 = '1.00, 98.61'
- unparsed cell Jin_2012_table_p5_1:row11:col4 = '0.02, 0.04'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.882 (15/17 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | ribavirin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ribavirin | unknown | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Jin_2012_table_p5_1:row0:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Jin_2012_table_p5_1:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Jin_2012_table_p5_1:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Jin_2012_table_p5_1:row3:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Jin_2012_table_p5_1:row2:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19.1 L/h | ['Jin_2012_table_p5_1:row0:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.15e+03 L | ['Jin_2012_table_p5_1:row1:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 3.99e+03 L | ['Jin_2012_table_p5_1:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=ribavirin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_modelica.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_fmi.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_matlab.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_matlab_simbio.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_sbml.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_cellml.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2442 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.001 | kg |
| input | model | `Cl` | 5.311e-06 | m3/s |
| input | model | `VdPerKg` | 0.01644 | m3/kg |
| input | model | `k12` | 8.946e-06 | 1/s |
| input | model | `k21` | 2.579e-06 | 1/s |
| input | model | `ka` | 0.0002528 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Jin R, Fossler MJ, McHutchison JG, Howell CD, Dowling TC. Population pharmacokinetics and pharmacodynamics of ribavirin in patients with chronic hepatitis C genotype 1 infection. The AAPS journal 14(3):571–580 (2012). [doi:10.1208/s12248-012-9368-z](https://doi.org/10.1208/s12248-012-9368-z)

**This record:** Pharmacolibrary v26.09, model `Ribavirin_Jin2012_mean_of_25_leverage_runs_cv`. <https://pharmacolibrary.github.io/#/drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv>

```bibtex
@misc{pharmacolibrary_RibavirinJin2012meanof25leveragerunscv,
  title  = {{Pharmacolibrary model Ribavirin_Jin2012_mean_of_25_leverage_runs_cv}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv},
  note   = {Parameters from doi:10.1208/s12248-012-9368-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1000 mg, single dose, first-order absorption (ka 0.91 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 1000 mg oral (J05AP01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_params.json` · controls `Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bribavirin%5D%20Ribavirin_Jin2012_mean_of_25_leverage_runs_cv&body=Drug%3A%20ribavirin%0ARecord%3A%20Ribavirin_Jin2012_mean_of_25_leverage_runs_cv%0APaper%3A%20Jin_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:48 UTC</sub>
