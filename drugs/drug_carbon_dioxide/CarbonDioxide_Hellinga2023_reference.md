<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;carbon dioxide&quot;,&quot;href&quot;:&quot;drugs/drug_carbon_dioxide/&quot;},{&quot;label&quot;:&quot;Hellinga_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CarbonDioxide_Hellinga2023_reference&quot;,&quot;label&quot;:&quot;Hellinga_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# carbon dioxide — `CarbonDioxide_Hellinga2023_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="carbon dioxide" model-id="CarbonDioxide_Hellinga2023_reference" status="curated_candidate" stale="false" population="" measured-compound="carbon_dioxide" parameterization="mechanistic" topology="2C"></div>

## Citation
Hellinga M, Algera MH, Olofsen E, van der Schrier R, Sarton E, van Velzen M et al. Oral Oxycodone-Induced Respiratory Depression During Normocapnia and Hypercapnia: A Pharmacokinetic-Pharmacodynamic Modeling Study. Clinical pharmacology and therapeutics 113(5):1080–1088 (2023).
  ·  DOI: [10.1002/cpt.2863](https://doi.org/10.1002/cpt.2863)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference/CarbonDioxide_Hellinga2023_reference.svg" alt="CarbonDioxide_Hellinga2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| clearance | CL | 76.0 | L/h |
| volume of compartment 1 | V1 | 37.0 | L |
| volume of compartment 2 | V2 | 411.0 | L |
| intercompartmental clearance | Q | 510.0 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.471). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on parameter Q310: this record has 0.95, the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance | `Q22` · CL | 76.0 | L/h | 2.111e-05 | m3/s | L/h | review (0.7) | Hellinga_2023:review |
| volume of compartment 1 | `Q63` · V1 | 37.0 | L | 0.037 | m3 | L | review (0.7) | Hellinga_2023:review |
| volume of compartment 2 | `Q64` · V2 | 411.0 | L | 0.411 | m3 | L | review (0.7) | Hellinga_2023:review |
| intercompartmental clearance | `Q30` · Q | 510.0 | L/h | 0.0001417 | m3/s | L/h | review (0.7) | Hellinga_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- built from REVIEW reference values (Hellinga_2023) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.471 (8/17 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `values[Q310]` | 0.95 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q319]` | 0.1 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q321]` | 0.05 | 5 | mismatch |
| `gpt-oss-120b` | `values[Q324]` |  | 0.2 | only_one_extracted |
| `gpt-oss-120b` | `values[Q326]` | 30 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q335]` | 1.0 | 0.4 | mismatch |
| `gpt-oss-120b` | `values[Q362]` | 2 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q67]` | 10 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q83]` |  | 0.95 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hellinga_2023:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Hellinga_2023:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Hellinga_2023:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Hellinga_2023:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 76 | ['Hellinga_2023:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 76 L/h | ['Hellinga_2023:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 37 L | ['Hellinga_2023:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 411 L | ['Hellinga_2023:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=carbon_dioxide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference/CarbonDioxide_Hellinga2023_reference_modelica.zip" download>CarbonDioxide_Hellinga2023_reference_modelica.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference/CarbonDioxide_Hellinga2023_reference_fmi.zip" download>CarbonDioxide_Hellinga2023_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference/CarbonDioxide_Hellinga2023_reference_matlab.zip" download>CarbonDioxide_Hellinga2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference/CarbonDioxide_Hellinga2023_reference_matlab_simbio.zip" download>CarbonDioxide_Hellinga2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference/CarbonDioxide_Hellinga2023_reference_sbml.zip" download>CarbonDioxide_Hellinga2023_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference/CarbonDioxide_Hellinga2023_reference_cellml.zip" download>CarbonDioxide_Hellinga2023_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.04401 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 2.111e-05 | m3/s |
| input | model | `VdPerKg` | 0.0005286 | m3/kg |
| input | model | `k12` | 0.003829 | 1/s |
| input | model | `k21` | 0.0003447 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Hellinga M, Algera MH, Olofsen E, van der Schrier R, Sarton E, van Velzen M et al. Oral Oxycodone-Induced Respiratory Depression During Normocapnia and Hypercapnia: A Pharmacokinetic-Pharmacodynamic Modeling Study. Clinical pharmacology and therapeutics 113(5):1080–1088 (2023). [doi:10.1002/cpt.2863](https://doi.org/10.1002/cpt.2863)

**This record:** Pharmacolibrary v26.09, model `CarbonDioxide_Hellinga2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference>

```bibtex
@misc{pharmacolibrary_CarbonDioxideHellinga2023reference,
  title  = {{Pharmacolibrary model CarbonDioxide_Hellinga2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference},
  note   = {Parameters from doi:10.1002/cpt.2863},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference/CarbonDioxide_Hellinga2023_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference/CarbonDioxide_Hellinga2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `CarbonDioxide_Hellinga2023_reference_params.json` · controls `CarbonDioxide_Hellinga2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcarbon_dioxide%5D%20CarbonDioxide_Hellinga2023_reference&body=Drug%3A%20carbon_dioxide%0ARecord%3A%20CarbonDioxide_Hellinga2023_reference%0APaper%3A%20Hellinga_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_carbon_dioxide/CarbonDioxide_Hellinga2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:31 UTC</sub>
