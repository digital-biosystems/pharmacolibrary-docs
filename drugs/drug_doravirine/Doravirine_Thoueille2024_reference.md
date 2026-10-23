<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;doravirine&quot;,&quot;href&quot;:&quot;drugs/drug_doravirine/&quot;},{&quot;label&quot;:&quot;Thoueille_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doravirine_Thoueille2024_reference&quot;,&quot;label&quot;:&quot;Thoueille_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# doravirine — `Doravirine_Thoueille2024_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-07 14:21 UTC (Needs review), but the paper was screened again on 2026-10-07 16:31 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="doravirine" model-id="Doravirine_Thoueille2024_reference" status="extracted" stale="true" population="real-world people with HIV" measured-compound="doravirine" parameterization="mechanistic" topology="1C"></div>

## Citation
Thoueille P, Delarive L, Cavassini M, Buclin T, Decosterd LA, Marzolini C et al. Population pharmacokinetic analysis of doravirine in real-world people with HIV. British journal of clinical pharmacology 90(4):1058–1065 (2024).
  ·  DOI: [10.1111/bcp.15975](https://doi.org/10.1111/bcp.15975)

## Population and dosing

**Population:** real-world people with HIV · condition HIV · age group adult · n = 146.

**Dosing:** 100 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_doravirine/Doravirine_Thoueille2024_reference/Doravirine_Thoueille2024_reference.svg" alt="Doravirine_Thoueille2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| ka (h⁻¹) | kabs | 1.9 | h⁻¹ |  |
| V (L) | V | 82.2 | L | 13 |
| TVCL (L/h) | CL | 3.98 | L/h | 4 |
| theta_q31_cyp3a4 | theta_q31_cyp3a4 | -0.502 |  | 6 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Bioavailability and lag time defaulted to library placeholders rather than paper values, invalidating the doravirine model for the reference individual.**

The record lacks explicit estimates for bioavailability and lag time, forcing the use of library defaults that are not supported by the source paper. These missing inputs affect the simulated concentration profile but remain unsupported by the study data. Additionally, the defined covariate effects for age and CYP3A4 were not simulated, leaving the model's response to population variability unverified. Extracted — doravirine: kabs 1.9 h⁻¹, V 82.2 L, CL 3.98 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has doravirine, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| ka (h⁻¹) | `Q49` · kabs | 1.9 | h⁻¹ | 0.0005278 | 1/s | 1/h |  | exact (1) | Thoueille_2024_table_p4_2:row0:col1, Thoueille_2024_table_p4_2:row0:col2 |
| V (L) | `Q61` · V | 82.2 | L | 0.0822 | m3 | l | 13 | exact (1) | Thoueille_2024_table_p4_2:row1:col1 |
| TVCL (L/h) | `Q22` · CL | 3.98 | L/h | 1.106e-06 | m3/s | l/h | 4 | tv_prefix (0.95) | Thoueille_2024_table_p4_2:row2:col1 |
| theta_q31_cyp3a4 | `Q900` · theta_q31_cyp3a4 | -0.502 |  |  |  |  | 6 |  | Thoueille_2024_table_p4_2:row4:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- routed 'theta_Age' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- covariate effect for Q31 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V (L)); Q22 (TVCL (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=doravirine
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Thoueille_2024_table_p4_2:row1:col2 = '83.7 (66.4-111.6)'
- unparsed cell Thoueille_2024_table_p4_2:row2:col2 = '3.95 (3.67-4.27)'
- unparsed cell Thoueille_2024_table_p4_2:row3:col2 = '27 (13-35)'
- unparsed cell Thoueille_2024_table_p4_2:row4:col2 = '-0.498 (-0.555 to -0.425)'
- unparsed cell Thoueille_2024_table_p4_2:row5:col2 = '-0.672 (-0.939 to -0.409)'
- unparsed cell Thoueille_2024_table_p4_2:row6:col2 = '26 (18-35)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_age]` |  | -0.67 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | doravirine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | doravirine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Thoueille_2024_table_p4_2:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Thoueille_2024_table_p4_2:row0:col1', 'Thoueille_2024_table_p4_2:row0:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Thoueille_2024_table_p4_2:row1:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.98 | ['Thoueille_2024_table_p4_2:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.98 L/h | ['Thoueille_2024_table_p4_2:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 82.2 L | ['Thoueille_2024_table_p4_2:row1:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=doravirine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.0009946 | non-numeric value |
| T1_cmax | reference | skipped | 1.6 | 0.0009946 | unresolved concentration unit (exp '-', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped | 2.8 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_doravirine/Doravirine_Thoueille2024_reference/Doravirine_Thoueille2024_reference_modelica.zip" download>Doravirine_Thoueille2024_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_doravirine/Doravirine_Thoueille2024_reference/Doravirine_Thoueille2024_reference_fmi.zip" download>Doravirine_Thoueille2024_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_doravirine/Doravirine_Thoueille2024_reference/Doravirine_Thoueille2024_reference_matlab.zip" download>Doravirine_Thoueille2024_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_doravirine/Doravirine_Thoueille2024_reference/Doravirine_Thoueille2024_reference_matlab_simbio.zip" download>Doravirine_Thoueille2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_doravirine/Doravirine_Thoueille2024_reference/Doravirine_Thoueille2024_reference_sbml.zip" download>Doravirine_Thoueille2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_doravirine/Doravirine_Thoueille2024_reference/Doravirine_Thoueille2024_reference_cellml.zip" download>Doravirine_Thoueille2024_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4257 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.106e-06 | m3/s |
| input | model | `VdPerKg` | 0.001174 | m3/kg |
| input | model | `ka` | 0.0005278 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Thoueille P, Delarive L, Cavassini M, Buclin T, Decosterd LA, Marzolini C et al. Population pharmacokinetic analysis of doravirine in real-world people with HIV. British journal of clinical pharmacology 90(4):1058–1065 (2024). [doi:10.1111/bcp.15975](https://doi.org/10.1111/bcp.15975)

**This record:** Pharmacolibrary v26.09, model `Doravirine_Thoueille2024_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_doravirine/Doravirine_Thoueille2024_reference>

```bibtex
@misc{pharmacolibrary_DoravirineThoueille2024reference,
  title  = {{Pharmacolibrary model Doravirine_Thoueille2024_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_doravirine/Doravirine_Thoueille2024_reference},
  note   = {Parameters from doi:10.1111/bcp.15975},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 1.9 /h, F 0.9). Dose in the paper: 100 mg.

<dbs-fmusim paramsurl="drugs/drug_doravirine/Doravirine_Thoueille2024_reference/Doravirine_Thoueille2024_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_doravirine/Doravirine_Thoueille2024_reference/Doravirine_Thoueille2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Doravirine_Thoueille2024_reference_params.json` · controls `Doravirine_Thoueille2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoravirine%5D%20Doravirine_Thoueille2024_reference&body=Drug%3A%20doravirine%0ARecord%3A%20Doravirine_Thoueille2024_reference%0APaper%3A%20Thoueille_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_doravirine/Doravirine_Thoueille2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:31 UTC</sub>
