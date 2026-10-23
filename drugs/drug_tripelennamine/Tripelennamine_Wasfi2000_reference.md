<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D04A&quot;,&quot;href&quot;:&quot;atc/D04A.md&quot;},{&quot;label&quot;:&quot;tripelennamine&quot;,&quot;href&quot;:&quot;drugs/drug_tripelennamine/&quot;},{&quot;label&quot;:&quot;Wasfi_2000 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tripelennamine_Wasfi2000_reference&quot;,&quot;label&quot;:&quot;Wasfi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tripelennamine — `Tripelennamine_Wasfi2000_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<div class="pk-model-meta" hidden drug="tripelennamine" model-id="Tripelennamine_Wasfi2000_reference" status="curated_candidate" stale="false" population="horses and camels" measured-compound="tripelennamine" parameterization="mechanistic" topology="1C"></div>

## Citation
Wasfi IA, Abdel Hadi AA, Elghazali M, Boni NS, Alkatheeri NA, Barezaig IM et al. Comparative disposition of tripelennamine in horses and camels after intravenous administration. Journal of veterinary pharmacology and therapeutics 23(3):145–152 (2000).
  ·  DOI: [10.1046/j.1365-2885.2000.00261.x](https://doi.org/10.1046/j.1365-2885.2000.00261.x)

## Population and dosing

**Population:** horses and camels · n = 11.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference/Tripelennamine_Wasfi2000_reference.svg" alt="Tripelennamine_Wasfi2000_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| terminal elimination half-lives (camels) | t1/2z | 2.39 | h |
| total body clearances (camels) | CL | 0.97 | L/h/kg |
| total body clearances (horses) | CLb | 0.84 | L/h/kg |
| volumes of distribution at steady state (camels) | Vss | 2.87 | L/kg |
| volumes of the central compartment of the two compartment pharmacokinetic model (camels) | V | 1.75 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[total body clearances].parameter_id`: this record has Q22, the second reading Q54; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| terminal elimination half-lives (camels) | `Q57` · t1/2z | 2.39 | h | 8604 | s | h | llm (0.6) | Wasfi_2000:abstract |
| total body clearances (camels) | `Q22` · CL | 0.97 | L/h/kg | 1.886e-05 | m3/s | l/(h·kg) | llm_corrected (0.6) | Wasfi_2000:abstract |
| total body clearances (horses) | `Q23` · CLb | 0.84 | L/h/kg | 1.633e-05 | m3/s | l/(h·kg) | llm_confirmed (0.6) | Wasfi_2000:abstract |
| volumes of distribution at steady state (camels) | `Q65` · Vss | 2.87 | L/kg | 0.2009 | m3 | l/kg | llm (0.6) | Wasfi_2000:abstract |
| volumes of the central compartment of the two compartment pharmacokinetic model (camels) | `Q61` · V | 1.75 | L/kg | 0.1225 | m3 | l/kg | llm (0.6) | Wasfi_2000:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('terminal elimination half-lives (horses)', value 2.08) — already have one for this compound
- dropped duplicate Q65 ('volumes of distribution at steady state (horses)', value 1.69) — already have one for this compound
- dropped duplicate Q63 ('volumes of the central compartment of the two compartment pharmacokinetic model (horses)', value 1.06) — already have one for this compound
- dropped unlinked row (NIL): 'extent of protein binding (horses)' — extend the ontology if this is a real PK parameter (source ['Wasfi_2000:abstract'])
- dropped unlinked row (NIL): 'extent of protein binding (camels)' — extend the ontology if this is a real PK parameter (source ['Wasfi_2000:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tripelennamine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'volumes of the central compartment of the two compartment pharmacokinetic model (camels)' is the general volume)
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Wasfi_2000_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.7 (7/10 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[total body clearances].parameter_id` | Q22 | Q54 | mismatch |
| `qwen3.8-27b` | `parameters[volumes of the central compartment of the two compartment pharmacokinetic model]` | 1.75 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[volumes of the central compartment]` |  | 1.75 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Wasfi_2000:abstract'] |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['Wasfi_2000:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Wasfi_2000:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Wasfi_2000:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Wasfi_2000:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.97 | ['Wasfi_2000:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 67.9 L/h | ['Wasfi_2000:abstract'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 58.8 L/h | ['Wasfi_2000:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 122 L | ['Wasfi_2000:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 201 L | ['Wasfi_2000:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=tripelennamine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference/Tripelennamine_Wasfi2000_reference_modelica.zip" download>Tripelennamine_Wasfi2000_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference/Tripelennamine_Wasfi2000_reference_fmi.zip" download>Tripelennamine_Wasfi2000_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference/Tripelennamine_Wasfi2000_reference_matlab.zip" download>Tripelennamine_Wasfi2000_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference/Tripelennamine_Wasfi2000_reference_matlab_simbio.zip" download>Tripelennamine_Wasfi2000_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference/Tripelennamine_Wasfi2000_reference_sbml.zip" download>Tripelennamine_Wasfi2000_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference/Tripelennamine_Wasfi2000_reference_cellml.zip" download>Tripelennamine_Wasfi2000_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2554 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.886e-05 | m3/s |
| input | model | `VdPerKg` | 0.00175 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Wasfi IA, Abdel Hadi AA, Elghazali M, Boni NS, Alkatheeri NA, Barezaig IM et al. Comparative disposition of tripelennamine in horses and camels after intravenous administration. Journal of veterinary pharmacology and therapeutics 23(3):145–152 (2000). [doi:10.1046/j.1365-2885.2000.00261.x](https://doi.org/10.1046/j.1365-2885.2000.00261.x)

**This record:** Pharmacolibrary v26.09, model `Tripelennamine_Wasfi2000_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference>

```bibtex
@misc{pharmacolibrary_TripelennamineWasfi2000reference,
  title  = {{Pharmacolibrary model Tripelennamine_Wasfi2000_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference},
  note   = {Parameters from doi:10.1046/j.1365-2885.2000.00261.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference/Tripelennamine_Wasfi2000_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference/Tripelennamine_Wasfi2000_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Tripelennamine_Wasfi2000_reference_params.json` · controls `Tripelennamine_Wasfi2000_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btripelennamine%5D%20Tripelennamine_Wasfi2000_reference&body=Drug%3A%20tripelennamine%0ARecord%3A%20Tripelennamine_Wasfi2000_reference%0APaper%3A%20Wasfi_2000%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:12 UTC</sub>
