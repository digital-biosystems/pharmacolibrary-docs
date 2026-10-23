<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;voxelotor&quot;,&quot;href&quot;:&quot;drugs/drug_voxelotor/&quot;},{&quot;label&quot;:&quot;Savic_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Voxelotor_Savic2022_reference&quot;,&quot;label&quot;:&quot;Savic_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_voxelotor/Voxelotor_Savic2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# voxelotor — `Voxelotor_Savic2022_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:42 UTC (Needs review), but the paper was screened again on 2026-10-06 01:47 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="voxelotor" model-id="Voxelotor_Savic2022_reference" status="extracted" stale="true" population="adults and adolescents with sickle cell disease" measured-compound="voxelotor" parameterization="apparent" topology="2C"></div>

## Citation
Savic RM, Green ML, Jorga K, Zager M, Washington CB. Model-informed drug development of voxelotor in sickle cell disease: Population pharmacokinetics in whole blood and plasma. CPT: pharmacometrics & systems pharmacology 11(6):687–697 (2022).
  ·  DOI: [10.1002/psp4.12731](https://doi.org/10.1002/psp4.12731)

## Population and dosing

**Population:** adults and adolescents with sickle cell disease · condition sickle cell disease · age group mixed · n = &gt;=12 years.

**Dosing:** 500, 600, 900, 1000, 1500 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_voxelotor/Voxelotor_Savic2022_reference/Voxelotor_Savic2022_reference.svg" alt="Voxelotor_Savic2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CL/F | 6.14 | L/h | 2.8 | 0.1 (123% RSE) |
| V c/F (L) | V1/F | 333 | L | 0.5 |  |
| Q/F (L/h) | Q/F | 0.39 | L/h | 1.9 |  |
| V p/F (L) | V2/F | 72.3 | L | 0.8 |  |
| K bp (1/h) | kel | 0.43 | 1/h | 6.6 |  |
| K a (1/h) | kabs | 2.38 | 1/h |  |  |
| cyp3a4_inducer_on_cl_f_expth | cyp3a4_inducer_on_cl_f_expth | 0.39 |  | 4.9 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The voxelotor record was held back because the model builder invented an absorption rate constant (ka defaulted, not reported in the source) and left ka and Tlag without source values, so the record deviates from the published model.**

The paper reports kabs = 2.38 1/h for voxelotor, yet the model builder substituted placeholder values for ka and Tlag because no values were extracted from the source, and adjudication flagged the invented absorption as not acceptable. The record also assumes F=1, Fm=1 and no molar correction (apparent parameterization), so the reported CL/F = 6.14 L/h, V1/F = 333 L, Q/F = 0.39 L/h and V2/F = 72.3 L are used as apparent values. In addition, the covariate effect (cyp3a4_inducer_on_cl_f_expth = 0.39) was defined but not exercised: only the reference individual was simulated, not the covariate scenarios. Extracted — voxelotor: CL/F 6.14 L/h, V1/F 333 L, Q/F 0.39 L/h, V2/F 72.3 L, Kp 0.43, kabs 2.38.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 6.14 | L/h | 1.706e-06 | m3/s | l/h | 2.8 | exact (1) | psp412731-tbl-0002:row1:col1 | 0.1 (123% RSE) |
| V c/F (L) | `Q290` · V1/F | 333 | L | 0.333 | m3 | l | 0.5 | space_fold (0.95) | psp412731-tbl-0002:row2:col1 |  |
| Q/F (L/h) | `Q69` · Q/F | 0.39 | L/h | 1.083e-07 | m3/s | l/h | 1.9 | exact (1) | psp412731-tbl-0002:row3:col1 |  |
| V p/F (L) | `Q82` · V2/F | 72.3 | L | 0.0723 | m3 | l | 0.8 | space_fold (0.95) | psp412731-tbl-0002:row4:col1 |  |
| K bp (1/h) | `Q47` · kel | 0.43 | 1/h | 0.0001194 | 1/s | 1/h | 6.6 | llm (0.6) | psp412731-tbl-0002:row5:col1 |  |
| K a (1/h) | `Q49` · kabs | 2.38 | 1/h | 0.0006611 | 1/s | 1/h |  | space_fold (0.95) | psp412731-tbl-0002:row7:col1 |  |
| cyp3a4_inducer_on_cl_f_expth | `Q900` · cyp3a4_inducer_on_cl_f_expth | 0.39 |  |  |  |  | 4.9 |  | psp412731-tbl-0002:row10:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'BSV CL/F, % CV' routed out of structural estimates ('Between subject or occasion variability')
- table section iiv: 'CL/F‐V c/F BSV correlation' routed out of structural estimates ('Between subject or occasion variability')
- table section iiv: 'BSV V c/F, % CV' routed out of structural estimates ('Between subject or occasion variability')
- table section iiv: 'BSV K bp, % CV' routed out of structural estimates ('Between subject or occasion variability')
- table section iiv: 'K bp‐R bp BSV correlation' routed out of structural estimates ('Between subject or occasion variability')
- table section iiv: 'BSV R bp, % CV' routed out of structural estimates ('Between subject or occasion variability')
- table section iiv: 'BOV on CL/F, % CV' routed out of structural estimates ('Between subject or occasion variability')
- table section residual_error: 'Proportional error, plasma (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error, whole blood (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error, whole blood (ng/ml)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'R bp' — extend the ontology if this is a real PK parameter (source ['psp412731-tbl-0002:row6:col1'])
- dropped unlinked row (NIL): 'Blood volume on V c/F, (BLV/3.89 c )TH' — extend the ontology if this is a real PK parameter (source ['psp412731-tbl-0002:row8:col1'])
- dropped unlinked row (NIL): 'Hematocrit on R bp, (HCT/27.8)TH' — extend the ontology if this is a real PK parameter (source ['psp412731-tbl-0002:row9:col1'])
- covariate level 'CYP3A4 inducer on CL/F, expTH' → Q900:cyp3a4_inducer_on_cl_f_expth = 0.39 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Nominal dose on R bp, (dose/900)TH' — extend the ontology if this is a real PK parameter (source ['psp412731-tbl-0002:row11:col1'])
- implicit units: 'K bp (1/h)' → 1/h (from the paper text: 'The text states: "The typical estimates of K a, K bp, and R bp were 2.38 h−1, 0.43 h−1, and 16.6, respectively."')
- implicit units: 'K a (1/h)' → 1/h (from the paper text: 'The text states: "The typical estimates of K a, K bp, and R bp were 2.38 h−1, 0.43 h−1, and 16.6, respectively."')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=voxelotor
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412731-tbl-0002:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412731-tbl-0002:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['psp412731-tbl-0002:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412731-tbl-0002:row7:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412731-tbl-0002:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp412731-tbl-0002:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.14 L/h | ['psp412731-tbl-0002:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 333 L | ['psp412731-tbl-0002:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 72.3 L | ['psp412731-tbl-0002:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=voxelotor) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_reference/Voxelotor_Savic2022_reference_modelica.zip" download>Voxelotor_Savic2022_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_reference/Voxelotor_Savic2022_reference_fmi.zip" download>Voxelotor_Savic2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_reference/Voxelotor_Savic2022_reference_matlab.zip" download>Voxelotor_Savic2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_reference/Voxelotor_Savic2022_reference_matlab_simbio.zip" download>Voxelotor_Savic2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_reference/Voxelotor_Savic2022_reference_sbml.zip" download>Voxelotor_Savic2022_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_reference/Voxelotor_Savic2022_reference_cellml.zip" download>Voxelotor_Savic2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3374 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0005 | kg |
| input | model | `Cl` | 1.706e-06 | m3/s |
| input | model | `VdPerKg` | 0.004757 | m3/kg |
| input | model | `k12` | 3.253e-07 | 1/s |
| input | model | `k21` | 1.498e-06 | 1/s |
| input | model | `ka` | 0.0006611 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Savic RM, Green ML, Jorga K, Zager M, Washington CB. Model-informed drug development of voxelotor in sickle cell disease: Population pharmacokinetics in whole blood and plasma. CPT: pharmacometrics & systems pharmacology 11(6):687–697 (2022). [doi:10.1002/psp4.12731](https://doi.org/10.1002/psp4.12731)

**This record:** Pharmacolibrary v26.09, model `Voxelotor_Savic2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_voxelotor/Voxelotor_Savic2022_reference>

```bibtex
@misc{pharmacolibrary_VoxelotorSavic2022reference,
  title  = {{Pharmacolibrary model Voxelotor_Savic2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_voxelotor/Voxelotor_Savic2022_reference},
  note   = {Parameters from doi:10.1002/psp4.12731},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 500 mg, single dose, first-order absorption (ka 2.38 /h, F 1). Doses in the paper: 500, 600, 900, 1000, 1500 mg.

<dbs-fmusim paramsurl="drugs/drug_voxelotor/Voxelotor_Savic2022_reference/Voxelotor_Savic2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_voxelotor/Voxelotor_Savic2022_reference/Voxelotor_Savic2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Voxelotor_Savic2022_reference_params.json` · controls `Voxelotor_Savic2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvoxelotor%5D%20Voxelotor_Savic2022_reference&body=Drug%3A%20voxelotor%0ARecord%3A%20Voxelotor_Savic2022_reference%0APaper%3A%20Savic_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_voxelotor/Voxelotor_Savic2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 01:47 UTC</sub>
