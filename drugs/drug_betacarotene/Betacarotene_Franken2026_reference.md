<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;betacarotene&quot;,&quot;href&quot;:&quot;drugs/drug_betacarotene/&quot;},{&quot;label&quot;:&quot;Franken_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Betacarotene_Franken2026_reference&quot;,&quot;label&quot;:&quot;Franken_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_betacarotene/Betacarotene_Franken2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# betacarotene — `Betacarotene_Franken2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The betacarotene two-compartment model was held back because bioavailability F was left at a library default instead of an estimate from Franken_2026, and a second reader disputed five parameter values (CL 7.67 vs 7, Q 10.53 vs 1.20, kabs 1.3 vs 1.16, V 8.83 vs 54.9, V2 8.8 vs 3.36).

<div class="pk-model-meta" hidden drug="betacarotene" model-id="Betacarotene_Franken2026_reference" status="needs_review" stale="false" population="" measured-compound="betacarotene" parameterization="mechanistic" topology="2C"></div>

## Citation
Franken LG, van Lieshout B, Eugenio J, Verbeek R, Voermans M, van den Berg E et al. Pediatric pharmacokinetics and pharmacodynamics of guanabenz for the treatment of vanishing white matter. Scientific reports 16(1):19086 (2026).
  ·  DOI: [10.1038/s41598-026-47959-9](https://doi.org/10.1038/s41598-026-47959-9)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_betacarotene/Betacarotene_Franken2026_reference/Betacarotene_Franken2026_reference.svg" alt="Betacarotene_Franken2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cl (L/h/kg); IIV | CL | 7.67 | L/h/kg |
| Vd (L/kg); IIV | V | 8.83 | L/kg |
| V2 (L/kg) | V2 | 8.8 | L/kg |
| Q (L/h/kg) | Q | 10.53 | L/h/kg |
| Absorption lag time (h) | tlag | 0.39 | h |
| KA (h-1); IIV | kabs | 1.3 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The betacarotene two-compartment model was held back because bioavailability F was left at a library default instead of an estimate from Franken_2026, and a second reader disputed five parameter values (CL 7.67 vs 7, Q 10.53 vs 1.20, kabs 1.3 vs 1.16, V 8.83 vs 54.9, V2 8.8 vs 3.36).**

The record for all-trans-β-carotene reports CL 7.67 L/h/kg, V 8.83 L/kg, V2 8.8 L/kg, Q 10.53 L/h/kg, tlag 0.39 h and kabs 1.3 h-1, but the deviations check failed because F was defaulted rather than estimated from the paper; these defaults affect the simulated profile without support from this paper. A second reader (gpt-oss:120b) also disagreed on the values of Q (10.53 vs 1.20), CL (7.67 vs 7), kabs (1.3 vs 1.16), V (8.83 vs 54.9) and V2 (8.8 vs 3.36), so the extracted numbers are contested. Extracted — betacarotene: CL 7.67 L/h/kg, V 8.83 L/kg, V2 8.8 L/kg, Q 10.5 L/h/kg, tlag 0.39 h, kabs 1.3 h-1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of CL: this record has 7.67, the second reading 7; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cl (L/h/kg); IIV | `Q22` · CL | 7.67 | L/h/kg | 0.0001491 | m3/s | L/h | review (0.7) | Franken_2026:review |
| Vd (L/kg); IIV | `Q61` · V | 8.83 | L/kg | 0.6181 | m3 | L | review (0.7) | Franken_2026:review |
| V2 (L/kg) | `Q64` · V2 | 8.8 | L/kg | 0.616 | m3 | L | review (0.7) | Franken_2026:review |
| Q (L/h/kg) | `Q30` · Q | 10.53 | L/h/kg | 0.0002047 | m3/s | L/h | review (0.7) | Franken_2026:review |
| Absorption lag time (h) | `Q83` · tlag | 0.39 | h | 1404 | s | h | review (0.7) | Franken_2026:review |
| KA (h-1); IIV | `Q49` · kabs | 1.3 | h-1 | 0.0003611 | 1/s | 1/h | review (0.7) | Franken_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- built from REVIEW reference values (Franken_2026) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `values[Q22]` | 7.67 | 7 | mismatch |
| `gpt-oss:120b` | `values[Q30]` | 10.53 | 1.20 | mismatch |
| `gpt-oss:120b` | `values[Q49]` | 1.3 | 1.16 | mismatch |
| `gpt-oss:120b` | `values[Q61]` | 8.83 | 54.9 | mismatch |
| `gpt-oss:120b` | `values[Q64]` | 8.8 | 3.36 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Franken_2026:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Franken_2026:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Franken_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Franken_2026:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Franken_2026:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Franken_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.67 | ['Franken_2026:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 537 L/h | ['Franken_2026:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 618 L | ['Franken_2026:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 616 L | ['Franken_2026:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=betacarotene) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_betacarotene/Betacarotene_Franken2026_reference/Betacarotene_Franken2026_reference_modelica.zip" download>Betacarotene_Franken2026_reference_modelica.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_betacarotene/Betacarotene_Franken2026_reference/Betacarotene_Franken2026_reference_fmi.zip" download>Betacarotene_Franken2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_betacarotene/Betacarotene_Franken2026_reference/Betacarotene_Franken2026_reference_matlab.zip" download>Betacarotene_Franken2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_betacarotene/Betacarotene_Franken2026_reference/Betacarotene_Franken2026_reference_matlab_simbio.zip" download>Betacarotene_Franken2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_betacarotene/Betacarotene_Franken2026_reference/Betacarotene_Franken2026_reference_sbml.zip" download>Betacarotene_Franken2026_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_betacarotene/Betacarotene_Franken2026_reference/Betacarotene_Franken2026_reference_cellml.zip" download>Betacarotene_Franken2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5369 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 1404 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 0.0001491 | m3/s |
| input | model | `VdPerKg` | 0.00883 | m3/kg |
| input | model | `k12` | 0.0003313 | 1/s |
| input | model | `k21` | 0.0003324 | 1/s |
| input | model | `ka` | 0.0003611 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Franken LG, van Lieshout B, Eugenio J, Verbeek R, Voermans M, van den Berg E et al. Pediatric pharmacokinetics and pharmacodynamics of guanabenz for the treatment of vanishing white matter. Scientific reports 16(1):19086 (2026). [doi:10.1038/s41598-026-47959-9](https://doi.org/10.1038/s41598-026-47959-9)

**This record:** Pharmacolibrary v26.09, model `Betacarotene_Franken2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_betacarotene/Betacarotene_Franken2026_reference>

```bibtex
@misc{pharmacolibrary_BetacaroteneFranken2026reference,
  title  = {{Pharmacolibrary model Betacarotene_Franken2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_betacarotene/Betacarotene_Franken2026_reference},
  note   = {Parameters from doi:10.1038/s41598-026-47959-9},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 1.3 /h, lag 23.4 min, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 100 mg oral (D02BB01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_betacarotene/Betacarotene_Franken2026_reference/Betacarotene_Franken2026_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_betacarotene/Betacarotene_Franken2026_reference/Betacarotene_Franken2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Betacarotene_Franken2026_reference_params.json` · controls `Betacarotene_Franken2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbetacarotene%5D%20Betacarotene_Franken2026_reference&body=Drug%3A%20betacarotene%0ARecord%3A%20Betacarotene_Franken2026_reference%0APaper%3A%20Franken_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_betacarotene/Betacarotene_Franken2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 07:06 UTC</sub>
