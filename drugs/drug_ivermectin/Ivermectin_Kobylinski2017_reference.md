<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;ivermectin&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/&quot;},{&quot;label&quot;:&quot;Kobylinski_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ivermectin_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ivermectin_Kobylinski2017_reference&quot;,&quot;label&quot;:&quot;Kobylinski_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ivermectin_Duthaler2019_reference&quot;,&quot;label&quot;:&quot;Duthaler_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Duthaler2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ivermectin — `Ivermectin_Kobylinski2017_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="ivermectin" model-id="Ivermectin_Kobylinski2017_reference" status="curated_candidate" stale="false" population="healthy Thai volunteers" measured-compound="ivermectin" parameterization="apparent" topology="2C"></div>

## Citation
Kobylinski KC, Ubalee R, Ponlawat A, Nitatsukprasert C, Phasomkulsolsil S, Wattanakul T et al. Ivermectin susceptibility and sporontocidal effect in Greater Mekong Subregion Anopheles. Malaria journal 16(1):280 (2017).
  ·  DOI: [10.1186/s12936-017-1923-8](https://doi.org/10.1186/s12936-017-1923-8)

## Population and dosing

**Population:** healthy Thai volunteers · condition healthy · age group adult.

**Dosing:** 14 mg, oral, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference/Ivermectin_Kobylinski2017_reference.svg" alt="Ivermectin_Kobylinski2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| F | Fab | 1 |  |  | 10.7 (42.9% RSE) |
| ka (h−1) | kabs | 0.317 | h−1 | 3.97 |  |
| MTT (h) | MTT | 0.496 | h | 17.1 | 56.1 (36.2% RSE) |
| CL/F (l/h) | CL/F | 9.02 | l/h | 5.49 | 23.1 (25.2% RSE) |
| VC/F (l) | V1/F | 115 | l | 4.38 |  |
| Q/F (l/h) | Q/F | 16.2 | l/h | 5.34 |  |
| VP/F (l) | V2/F | 157 | l | 6.59 | 22.8 (36.0% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (MTT), so that value has no SI equivalent.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 |  |  |  |  |  | exact (1) | Tab1:row1:col1, Tab1:row1:col4 | 10.7 (42.9% RSE) |
| ka (h−1) | `Q49` · kabs | 0.317 | h−1 | 8.806e-05 | 1/s | 1/h | 3.97 | exact (1) | Tab1:row2:col1, Tab1:row2:col2 |  |
| MTT (h) | `Q81` · MTT | 0.496 | h |  |  | h | 17.1 | exact (1) | Tab1:row3:col1, Tab1:row3:col2, Tab1:row3:col4 | 56.1 (36.2% RSE) |
| CL/F (l/h) | `Q27` · CL/F | 9.02 | l/h | 2.506e-06 | m3/s | l/h | 5.49 | exact (1) | Tab1:row4:col1, Tab1:row4:col2, Tab1:row4:col4 | 23.1 (25.2% RSE) |
| VC/F (l) | `Q290` · V1/F | 115 | l | 0.115 | m3 | l | 4.38 | exact (1) | Tab1:row5:col1, Tab1:row5:col2 |  |
| Q/F (l/h) | `Q69` · Q/F | 16.2 | l/h | 4.5e-06 | m3/s | l/h | 5.34 | exact (1) | Tab1:row6:col1, Tab1:row6:col2 |  |
| VP/F (l) | `Q82` · V2/F | 157 | l | 0.157 | m3 | l | 6.59 | exact (1) | Tab1:row7:col1, Tab1:row7:col2, Tab1:row7:col4 | 22.8 (36.0% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'F' routed out of structural estimates ('IIV [%CV] (%RSE)b')
- table section iiv: 'MTT (h)' routed out of structural estimates ('IIV [%CV] (%RSE)b')
- table section iiv: 'CL/F (l/h)' routed out of structural estimates ('IIV [%CV] (%RSE)b')
- table section iiv: 'VP/F (l)' routed out of structural estimates ('IIV [%CV] (%RSE)b')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ivermectin
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (18/18 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab1:row4:col1', 'Tab1:row4:col2', 'Tab1:row4:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab1:row5:col1', 'Tab1:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab1:row2:col1', 'Tab1:row2:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab1:row6:col1', 'Tab1:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab1:row7:col1', 'Tab1:row7:col2', 'Tab1:row7:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 9.02 L/h | ['Tab1:row4:col1', 'Tab1:row4:col2', 'Tab1:row4:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 115 L | ['Tab1:row5:col1', 'Tab1:row5:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 157 L | ['Tab1:row7:col1', 'Tab1:row7:col2', 'Tab1:row7:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=ivermectin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference/Ivermectin_Kobylinski2017_reference_modelica.zip" download>Ivermectin_Kobylinski2017_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference/Ivermectin_Kobylinski2017_reference_fmi.zip" download>Ivermectin_Kobylinski2017_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference/Ivermectin_Kobylinski2017_reference_matlab.zip" download>Ivermectin_Kobylinski2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference/Ivermectin_Kobylinski2017_reference_matlab_simbio.zip" download>Ivermectin_Kobylinski2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference/Ivermectin_Kobylinski2017_reference_sbml.zip" download>Ivermectin_Kobylinski2017_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference/Ivermectin_Kobylinski2017_reference_cellml.zip" download>Ivermectin_Kobylinski2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 1.736 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.4e-05 | kg |
| input | model | `Cl` | 2.506e-06 | m3/s |
| input | model | `VdPerKg` | 0.001643 | m3/kg |
| input | model | `k12` | 3.913e-05 | 1/s |
| input | model | `k21` | 2.866e-05 | 1/s |
| input | model | `ka` | 8.806e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kobylinski KC, Ubalee R, Ponlawat A, Nitatsukprasert C, Phasomkulsolsil S, Wattanakul T et al. Ivermectin susceptibility and sporontocidal effect in Greater Mekong Subregion Anopheles. Malaria journal 16(1):280 (2017). [doi:10.1186/s12936-017-1923-8](https://doi.org/10.1186/s12936-017-1923-8)

**This record:** Pharmacolibrary v26.09, model `Ivermectin_Kobylinski2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference>

```bibtex
@misc{pharmacolibrary_IvermectinKobylinski2017reference,
  title  = {{Pharmacolibrary model Ivermectin_Kobylinski2017_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference},
  note   = {Parameters from doi:10.1186/s12936-017-1923-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 14 mg, single dose, first-order absorption (ka 0.317 /h, F 1). Dose in the paper: 14 mg.

<dbs-fmusim paramsurl="drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference/Ivermectin_Kobylinski2017_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference/Ivermectin_Kobylinski2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ivermectin_Kobylinski2017_reference_params.json` · controls `Ivermectin_Kobylinski2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bivermectin%5D%20Ivermectin_Kobylinski2017_reference&body=Drug%3A%20ivermectin%0ARecord%3A%20Ivermectin_Kobylinski2017_reference%0APaper%3A%20Kobylinski_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:32 UTC</sub>
