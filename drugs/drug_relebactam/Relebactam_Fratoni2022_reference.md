<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Relebactam&quot;,&quot;href&quot;:&quot;drugs/drug_relebactam/&quot;},{&quot;label&quot;:&quot;Fratoni_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Relebactam_Fratoni2022_reference&quot;,&quot;label&quot;:&quot;Fratoni_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_relebactam/Relebactam_Fratoni2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Relebactam — `Relebactam_Fratoni2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The record for relebactam lists inter-compartment transfer constants but the model coverage check found only two of four expected parameters were accounted for.

<div class="pk-model-meta" hidden drug="Relebactam" model-id="Relebactam_Fratoni2022_reference" status="needs_review" stale="false" population="critically ill patients with augmented renal clearance" measured-compound="relebactam" parameterization="mechanistic" topology="1C"></div>

## Citation
Fratoni AJ, Mah JW, Nicolau DP, Kuti JL. Imipenem/cilastatin/relebactam pharmacokinetics in critically ill patients with augmented renal clearance. The Journal of antimicrobial chemotherapy 77(11):2992–2999 (2022).
  ·  DOI: [10.1093/jac/dkac261](https://doi.org/10.1093/jac/dkac261)

## Population and dosing

**Population:** critically ill patients with augmented renal clearance · age group adult · n = , "condition": "augmented renal clearance", "species": "human", "compounds": [ { "name": "imipenem", "role": "parent", "dosed": "yes", "measured": "yes", "has_parameters": "yes" }, { "name": "cilastatin", "role": "co-administered", "dosed": "yes", "measured": "no", "has_parameters": "no" }, { "name": "relebactam", "role": "parent", "dosed": "yes", "measured": "yes", "has_parameters": "yes" } ], "links": "none" }.

**Dosed compound ≠ measured compound:** dosed imipenem/cilastatin/relebactam, measured relebactam.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_relebactam/Relebactam_Fratoni2022_reference/Relebactam_Fratoni2022_reference.svg" alt="Relebactam_Fratoni2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 17.31 | L/h |
| Vc | V | 16.15 | L |
| k12 | k12 | 1.62 | h-1 |
| k21 | k21 | 3.53 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for relebactam lists inter-compartment transfer constants but the model coverage check found only two of four expected parameters were accounted for.**

The record includes a central clearance of 17.31 L/h, a volume of 16.15 L, and transfer rates of 1.62 h⁻¹ and 3.53 h⁻¹. However, the coverage check identified that the two transfer rate constants were neither explicitly emitted nor included in the defaulted parameter list, resulting in only two of four expected parameters being covered. This discrepancy occurred because the record was derived solely from the paper's abstract, meaning summary statistics were used in place of a fully fitted model. Extracted — relebactam: CL 17.3 L/h, V 16.1 L, k12 1.62 h-1, k21 3.53 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading not captured → not captured (not captured); it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 17.31 | L/h | 4.808e-06 | m3/s | l/h | exact (1) | Fratoni_2022:abstract, Fratoni_2022:abstract |
| Vc | `Q61` · V | 16.15 | L | 0.01615 | m3 | l | exact (1) | Fratoni_2022:abstract, Fratoni_2022:abstract |
| k12 | `Q301` · k12 | 1.62 | h-1 | 0.00045 | 1/s | 1/h | exact (1) | Fratoni_2022:abstract, Fratoni_2022:abstract |
| k21 | `Q302` · k21 | 3.53 | h-1 | 0.0009806 | 1/s | 1/h | exact (1) | Fratoni_2022:abstract, Fratoni_2022:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=relebactam
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc' is the general volume)
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Fratoni_2022_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['', '', '']] | mismatch |
| `gpt-oss-120b` | `parameters[vc].parameter_id` | Q61 | Q63 | mismatch |

</details>

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Fratoni_2022:abstract', 'Fratoni_2022:abstract'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Fratoni_2022:abstract', 'Fratoni_2022:abstract'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Fratoni_2022:abstract', 'Fratoni_2022:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Fratoni_2022:abstract', 'Fratoni_2022:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 17.31 | ['Fratoni_2022:abstract', 'Fratoni_2022:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.3 L/h | ['Fratoni_2022:abstract', 'Fratoni_2022:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 16.1 L | ['Fratoni_2022:abstract', 'Fratoni_2022:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=relebactam) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 4 scholar param(s) emitted or defaulted | 2 covered | neither emitted nor in defaulted[]: ['k12', 'k21'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_relebactam/Relebactam_Fratoni2022_reference/Relebactam_Fratoni2022_reference_modelica.zip" download>Relebactam_Fratoni2022_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_relebactam/Relebactam_Fratoni2022_reference/Relebactam_Fratoni2022_reference_fmi.zip" download>Relebactam_Fratoni2022_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_relebactam/Relebactam_Fratoni2022_reference/Relebactam_Fratoni2022_reference_matlab.zip" download>Relebactam_Fratoni2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_relebactam/Relebactam_Fratoni2022_reference/Relebactam_Fratoni2022_reference_matlab_simbio.zip" download>Relebactam_Fratoni2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_relebactam/Relebactam_Fratoni2022_reference/Relebactam_Fratoni2022_reference_sbml.zip" download>Relebactam_Fratoni2022_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_relebactam/Relebactam_Fratoni2022_reference/Relebactam_Fratoni2022_reference_cellml.zip" download>Relebactam_Fratoni2022_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3484 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 4.808e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002307 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Fratoni AJ, Mah JW, Nicolau DP, Kuti JL. Imipenem/cilastatin/relebactam pharmacokinetics in critically ill patients with augmented renal clearance. The Journal of antimicrobial chemotherapy 77(11):2992–2999 (2022). [doi:10.1093/jac/dkac261](https://doi.org/10.1093/jac/dkac261)

**This record:** Pharmacolibrary v26.09, model `Relebactam_Fratoni2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_relebactam/Relebactam_Fratoni2022_reference>

```bibtex
@misc{pharmacolibrary_RelebactamFratoni2022reference,
  title  = {{Pharmacolibrary model Relebactam_Fratoni2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_relebactam/Relebactam_Fratoni2022_reference},
  note   = {Parameters from doi:10.1093/jac/dkac261},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_relebactam/Relebactam_Fratoni2022_reference/Relebactam_Fratoni2022_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_relebactam/Relebactam_Fratoni2022_reference/Relebactam_Fratoni2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Relebactam_Fratoni2022_reference_params.json` · controls `Relebactam_Fratoni2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brelebactam%5D%20Relebactam_Fratoni2022_reference&body=Drug%3A%20relebactam%0ARecord%3A%20Relebactam_Fratoni2022_reference%0APaper%3A%20Fratoni_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_relebactam/Relebactam_Fratoni2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:44 UTC</sub>
