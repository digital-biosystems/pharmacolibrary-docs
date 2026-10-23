<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07A&quot;,&quot;href&quot;:&quot;atc/N07A.md&quot;},{&quot;label&quot;:&quot;pyridostigmine&quot;,&quot;href&quot;:&quot;drugs/drug_pyridostigmine/&quot;},{&quot;label&quot;:&quot;Thakkar_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyridostigmine_Hosseini2018_reference&quot;,&quot;label&quot;:&quot;Hosseini_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyridostigmine/Pyridostigmine_Hosseini2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyridostigmine_Seng2009_reference&quot;,&quot;label&quot;:&quot;Seng_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyridostigmine/Pyridostigmine_Seng2009_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyridostigmine_Thakkar2017_reference&quot;,&quot;label&quot;:&quot;Thakkar_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pyridostigmine — `Pyridostigmine_Thakkar2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The pyridostigmine two-compartment model was held back because the distribution rate constant k21 (and Tlag) was left at library defaults instead of being reported or estimated from the paper.

<div class="pk-model-meta" hidden drug="pyridostigmine" model-id="Pyridostigmine_Thakkar2017_reference" status="needs_review" stale="false" population="" measured-compound="pyridostigmine" parameterization="apparent" topology="2C"></div>

## Citation
Thakkar N, Guptill JT, Aleš K, Jacobus D, Jacobus L, Peloquin C et al. Population Pharmacokinetics/Pharmacodynamics of 3,4-Diaminopyridine Free Base in Patients With Lambert-Eaton Myasthenia. CPT: pharmacometrics & systems pharmacology 6(9):625-634 (2017).
  ·  DOI: [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference/Pyridostigmine_Thakkar2017_reference.svg" alt="Pyridostigmine_Thakkar2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F, L/h | CL/F | 90.0 | L/h |
| Vc/F, L | V1/F | 24.0 | L |
| Q/F, L/h | Q/F | 111.0 | L/h |
| KA, h−1 | kabs | 0.9 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The pyridostigmine two-compartment model was held back because the distribution rate constant k21 (and Tlag) was left at library defaults instead of being reported or estimated from the paper.**

The record reports CL/F = 90.0 L/h, V1/F = 24.0 L, Q/F = 111.0 L/h and kabs = 0.9 h−1 for pyridostigmine, but k21 — the rate constant for transfer from the peripheral back to the central compartment — has no value in the source and was filled with a library default. The same applies to the lag time Tlag. Since these defaults shape the simulated profile without support from the paper, the model was marked needs_review; the deviations check failed on the defaulted parameters. The builder also assumed F = 1 and Fm = 1 with no molar correction, so all parameters are apparent (bioavailability-adjusted) values. Extracted — pyridostigmine: CL/F 90 L/h, V1/F 24 L, Q/F 111 L/h, kabs 0.9 h−1.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 90.0 | L/h | 2.5e-05 | m3/s | L/h | review (0.7) | Thakkar_2017:review |
| Vc/F, L | `Q290` · V1/F | 24.0 | L | 0.024 | m3 | L | review (0.7) | Thakkar_2017:review |
| Q/F, L/h | `Q69` · Q/F | 111.0 | L/h | 3.083e-05 | m3/s | L/h | review (0.7) | Thakkar_2017:review |
| KA, h−1 | `Q49` · kabs | 0.9 | h−1 | 0.00025 | 1/s | 1/h | review (0.7) | Thakkar_2017:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- built from REVIEW reference values (Thakkar_2017) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (6/6 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Thakkar_2017:review'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Thakkar_2017:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Thakkar_2017:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Thakkar_2017:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 90 L/h | ['Thakkar_2017:review'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 24 L | ['Thakkar_2017:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=pyridostigmine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference/Pyridostigmine_Thakkar2017_reference_modelica.zip" download>Pyridostigmine_Thakkar2017_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference/Pyridostigmine_Thakkar2017_reference_fmi.zip" download>Pyridostigmine_Thakkar2017_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference/Pyridostigmine_Thakkar2017_reference_matlab.zip" download>Pyridostigmine_Thakkar2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference/Pyridostigmine_Thakkar2017_reference_matlab_simbio.zip" download>Pyridostigmine_Thakkar2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference/Pyridostigmine_Thakkar2017_reference_sbml.zip" download>Pyridostigmine_Thakkar2017_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference/Pyridostigmine_Thakkar2017_reference_cellml.zip" download>Pyridostigmine_Thakkar2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1812 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00018 | kg |
| input | model | `Cl` | 2.5e-05 | m3/s |
| input | model | `VdPerKg` | 0.0003429 | m3/kg |
| input | model | `k12` | 0.001285 | 1/s |
| input | model | `ka` | 0.00025 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Thakkar N, Guptill JT, Aleš K, Jacobus D, Jacobus L, Peloquin C et al. Population Pharmacokinetics/Pharmacodynamics of 3,4-Diaminopyridine Free Base in Patients With Lambert-Eaton Myasthenia. CPT: pharmacometrics & systems pharmacology 6(9):625-634 (2017). [doi:10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218)

**This record:** Pharmacolibrary v26.09, model `Pyridostigmine_Thakkar2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference>

```bibtex
@misc{pharmacolibrary_PyridostigmineThakkar2017reference,
  title  = {{Pharmacolibrary model Pyridostigmine_Thakkar2017_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference},
  note   = {Parameters from doi:10.1002/psp4.12218},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 180 mg, single dose, first-order absorption (ka 0.9 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 180 mg oral (N07AA02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference/Pyridostigmine_Thakkar2017_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference/Pyridostigmine_Thakkar2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Pyridostigmine_Thakkar2017_reference_params.json` · controls `Pyridostigmine_Thakkar2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyridostigmine%5D%20Pyridostigmine_Thakkar2017_reference&body=Drug%3A%20pyridostigmine%0ARecord%3A%20Pyridostigmine_Thakkar2017_reference%0APaper%3A%20Thakkar_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:11 UTC</sub>
