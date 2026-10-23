<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Artefenomel&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/&quot;},{&quot;label&quot;:&quot;Abd-Rahman_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artefenomel_AbdRahman2020_reference&quot;,&quot;label&quot;:&quot;Abd-Rahman_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Artefenomel_McCarthy2019_reference&quot;,&quot;label&quot;:&quot;McCarthy_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/Artefenomel_McCarthy2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artefenomel_McCarthy2020_reference&quot;,&quot;label&quot;:&quot;McCarthy_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/Artefenomel_McCarthy2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Artefenomel — `Artefenomel_AbdRahman2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model record for artefenomel contains both an unadjusted and a bioavailability-adjusted intercompartmental clearance, creating a structural contradiction.

<div class="pk-model-meta" hidden drug="Artefenomel" model-id="Artefenomel_AbdRahman2020_reference" status="needs_review" stale="false" population="" measured-compound="artefenomel" parameterization="apparent" topology="2C"></div>

## Citation
Abd-Rahman AN, Marquart L, Gobeau N, Kümmel A, Simpson JA, Chalon S et al. Population Pharmacokinetics and Pharmacodynamics of Chloroquine in a Plasmodium vivax Volunteer Infection Study. Clinical pharmacology and therapeutics 108(5):1055-1066 (2020).
  ·  DOI: [10.1002/cpt.1893](https://doi.org/10.1002/cpt.1893)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference/Artefenomel_AbdRahman2020_reference.svg" alt="Artefenomel_AbdRahman2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLCQ/F, L/h | CL/F | 54.6 | L/h |
| Vc CQ/F, L | V1/F | 2930.0 | L |
| Vp1 CQ/F, L | V2/F | 4700.0 | L |
| Q1CQF, L/h | Q | 47.2 | L/h |
| Q1DCQ/F, L/h | Q/F | 36.3 | L/h |
| ka, hour−1 | kabs | 0.943 | hour−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model record for artefenomel contains both an unadjusted and a bioavailability-adjusted intercompartmental clearance, creating a structural contradiction.**

The record lists two distinct values for the clearance between the central and peripheral compartments: 47.2 L/h unadjusted and 36.3 L/h adjusted for bioavailability. Since the model structure is defined with apparent parameters, only one intercompartmental clearance is structurally valid, making the presence of both contradictory. The model builder also assumed unit bioavailability, which further conflicts with the inclusion of a specific F-adjusted parameter. Extracted — artefenomel: CL/F 54.6 L/h, V1/F 2.93e+03 L, V2/F 4.7e+03 L, Q 47.2 L/h, Q/F 36.3 L/h, kabs 0.943 hour−1.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLCQ/F, L/h | `Q27` · CL/F | 54.6 | L/h | 1.517e-05 | m3/s | L/h | review (0.7) | Abd-Rahman_2020:review |
| Vc CQ/F, L | `Q290` · V1/F | 2930.0 | L | 2.93 | m3 | L | review (0.7) | Abd-Rahman_2020:review |
| Vp1 CQ/F, L | `Q82` · V2/F | 4700.0 | L | 4.7 | m3 | L | review (0.7) | Abd-Rahman_2020:review |
| Q1CQF, L/h | `Q30` · Q | 47.2 | L/h | 1.311e-05 | m3/s | L/h | review (0.7) | Abd-Rahman_2020:review |
| Q1DCQ/F, L/h | `Q69` · Q/F | 36.3 | L/h | 1.008e-05 | m3/s | L/h | review (0.7) | Abd-Rahman_2020:review |
| ka, hour−1 | `Q49` · kabs | 0.943 | hour−1 | 0.0002619 | 1/s | 1/h | review (0.7) | Abd-Rahman_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- built from REVIEW reference values (Abd-Rahman_2020) — secondary source
- volume reported by review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Abd-Rahman_2020:review'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Abd-Rahman_2020:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Abd-Rahman_2020:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Abd-Rahman_2020:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Abd-Rahman_2020:review'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Abd-Rahman_2020:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 54.6 L/h | ['Abd-Rahman_2020:review'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.93e+03 L | ['Abd-Rahman_2020:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.7e+03 L | ['Abd-Rahman_2020:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=artefenomel) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | 1: not acceptable; 2: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference/Artefenomel_AbdRahman2020_reference_modelica.zip" download>Artefenomel_AbdRahman2020_reference_modelica.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference/Artefenomel_AbdRahman2020_reference_fmi.zip" download>Artefenomel_AbdRahman2020_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference/Artefenomel_AbdRahman2020_reference_matlab.zip" download>Artefenomel_AbdRahman2020_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference/Artefenomel_AbdRahman2020_reference_matlab_simbio.zip" download>Artefenomel_AbdRahman2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference/Artefenomel_AbdRahman2020_reference_sbml.zip" download>Artefenomel_AbdRahman2020_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference/Artefenomel_AbdRahman2020_reference_cellml.zip" download>Artefenomel_AbdRahman2020_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4696 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.517e-05 | m3/s |
| input | model | `VdPerKg` | 0.04186 | m3/kg |
| input | model | `k12` | 4.475e-06 | 1/s |
| input | model | `k21` | 2.79e-06 | 1/s |
| input | model | `ka` | 0.0002619 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Abd-Rahman AN, Marquart L, Gobeau N, Kümmel A, Simpson JA, Chalon S et al. Population Pharmacokinetics and Pharmacodynamics of Chloroquine in a Plasmodium vivax Volunteer Infection Study. Clinical pharmacology and therapeutics 108(5):1055-1066 (2020). [doi:10.1002/cpt.1893](https://doi.org/10.1002/cpt.1893)

**This record:** Pharmacolibrary v26.09, model `Artefenomel_AbdRahman2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference>

```bibtex
@misc{pharmacolibrary_ArtefenomelAbdRahman2020reference,
  title  = {{Pharmacolibrary model Artefenomel_AbdRahman2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference},
  note   = {Parameters from doi:10.1002/cpt.1893},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.943 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference/Artefenomel_AbdRahman2020_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference/Artefenomel_AbdRahman2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Artefenomel_AbdRahman2020_reference_params.json` · controls `Artefenomel_AbdRahman2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bartefenomel%5D%20Artefenomel_AbdRahman2020_reference&body=Drug%3A%20artefenomel%0ARecord%3A%20Artefenomel_AbdRahman2020_reference%0APaper%3A%20Abd-Rahman_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 10:44 UTC</sub>
