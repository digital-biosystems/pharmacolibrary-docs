<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;lumasiran&quot;,&quot;href&quot;:&quot;drugs/drug_lumasiran/&quot;},{&quot;label&quot;:&quot;Sten_2023 \u00b7 model_simultaneously_fitted_to_all_data_estimate_se&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e&quot;,&quot;label&quot;:&quot;Sten_2023_model_simultaneously_fitted_to_all_data_estimate_se&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lumasiran — `Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span>

> This record was reviewed on 2026-10-05 12:03 UTC (Needs review), but the paper was screened again on 2026-10-07 17:50 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="lumasiran" model-id="Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e" status="extracted" stale="true" population="healthy adults and patients with specific conditions" measured-compound="GalNAc-siRNAs" parameterization="apparent" topology="2C"></div>

## Citation
Sten S, Cardilin T, Antonsson M, Gennemark P. Plasma Pharmacokinetics of N-Acetylgalactosamine-Conjugated Small-Interfering Ribonucleic Acids (GalNAc-Conjugated siRNAs). Clinical pharmacokinetics 62(12):1661-1672 (2023).
  ·  DOI: [10.1007/s40262-023-01314-7](https://doi.org/10.1007/s40262-023-01314-7)

## Population and dosing

**Population:** healthy adults and patients with specific conditions · condition various · age group mixed.

**Dosing:** 25, 300 mg, sc, multiple.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.20).

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e.svg" alt="Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Ka (1/h) | kabs | 0.157 | 1/h | 0.031 |
| V1/F (L) | V1/F | 18.1 | L | 4.1 |
| V2/F (L) | V2/F | 1340 | L | 180 |
| V3/F (L) | V3/F | 100 | L | 30 |
| CL1/F (L/h) | CL/F | 23.8 | L/h | 0.77 |
| CL2/F (L/h) | Q/F | 3.02 | L/h | 0.37 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lumasiran model record was held back because intercompartmental clearance k12 was left at library defaults rather than using an estimate from the paper.**

The record lists a two-compartment structure but includes a parameter for a second peripheral volume, creating a structural mismatch. The model builder explicitly defaulted the intercompartmental clearance k12 and lag time Tlag instead of extracting values from the source. Consequently, the simulated profile relies on unsupported library placeholders for k12 rather than data from the study. Extracted — lumasiran: kabs 0.157 1/h, V1/F 18.1 L, V2/F 1.34e+03 L, V3/F 100 L, CL/F 23.8 L/h, Q/F 3.02 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has GalNAc-siRNAs, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 0.157 | 1/h | 4.361e-05 | 1/s | 1/h | 0.031 | exact (1) | Tab3:row1:col2 |
| V1/F (L) | `Q290` · V1/F | 18.1 | L | 0.0181 | m3 | l | 4.1 | exact (1) | Tab3:row2:col2 |
| V2/F (L) | `Q82` · V2/F | 1340 | L | 1.34 | m3 | l | 180 | exact (1) | Tab3:row3:col2 |
| V3/F (L) | `Q78` · V3/F | 100 | L | 0.1 | m3 | l | 30 | exact (1) | Tab3:row4:col2 |
| CL1/F (L/h) | `Q27` · CL/F | 23.8 | L/h | 6.611e-06 | m3/s | l/h | 0.77 | llm_corrected (0.6) | Tab3:row5:col2 |
| CL2/F (L/h) | `Q69` · Q/F | 3.02 | L/h | 8.389e-07 | m3/s | l/h | 0.37 | special_case (0.95) | Tab3:row6:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('CL3/F (L/h)', value '45.4') — already have one for this compound
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'Ka is an absorption rate constant, a first-order rate parameter. In population pharmacokinetics, first-order rate consta')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=GalNAc-siRNAs
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'model simultaneously fitted to all data [estimate (se)]' subgroup of Sten_2023 (paper reports 2 populations: model fitted to olpasiran data only [estimate (se)], model simultaneously fitted to all data [estimate (se)])
- molar mass: no plausible PubChem entry for 'GalNAc-siRNAs' ('no full name in the paper') — left in mass units
- molar mass: none found for 'lumasiran' — its concentrations stay mass-only
- molar mass: none found for 'GalNAc-siRNAs' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'GalNAc-siRNAs', not lumasiran — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (14/16 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | GalNAc-siRNAs | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | GalNAc-siRNAs | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row5:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row1:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab3:row6:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab3:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 23.8 L/h | ['Tab3:row5:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 18.1 L | ['Tab3:row2:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.34e+03 L | ['Tab3:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=lumasiran) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 1.079e-09 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_fmi.zip" download>Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_matlab.zip" download>Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_matlab_simbio.zip" download>Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_sbml.zip" download>Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_cellml.zip" download>Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-05 | kg |
| input | model | `Cl` | 6.611e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002586 | m3/kg |
| input | model | `k21` | 6.26e-07 | 1/s |
| input | model | `ka` | 4.361e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sten S, Cardilin T, Antonsson M, Gennemark P. Plasma Pharmacokinetics of N-Acetylgalactosamine-Conjugated Small-Interfering Ribonucleic Acids (GalNAc-Conjugated siRNAs). Clinical pharmacokinetics 62(12):1661-1672 (2023). [doi:10.1007/s40262-023-01314-7](https://doi.org/10.1007/s40262-023-01314-7)

**This record:** Pharmacolibrary v26.09, model `Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e`. <https://pharmacolibrary.github.io/#/drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e>

```bibtex
@misc{pharmacolibrary_LumasiranSten2023modelsimultaneouslyfittedtoalldatae,
  title  = {{Pharmacolibrary model Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e},
  note   = {Parameters from doi:10.1007/s40262-023-01314-7},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 25 mg, single dose, first-order absorption (ka 0.157 /h, F 1). Doses in the paper: 25–300 mg.

<dbs-fmusim paramsurl="drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_params.json` · controls `Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blumasiran%5D%20Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e&body=Drug%3A%20lumasiran%0ARecord%3A%20Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e%0APaper%3A%20Sten_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:50 UTC</sub>
