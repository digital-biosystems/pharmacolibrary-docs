<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;oprelvekin&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/&quot;},{&quot;label&quot;:&quot;Kheifetz_2014 \u00b7 1_comp_pe_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_1_comp_pe_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_1_comp_pe_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_2_comp_ce_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_2_comp_ce_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_2_comp_ce_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_3_comp_pe_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_3_comp_pe_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oprelvekin — `Oprelvekin_Kheifetz2014_1_comp_pe_model`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Oprelvekin model lacks explicit bioavailability and lag time estimates, relying on library defaults for the one-compartment structure.

<div class="pk-model-meta" hidden drug="oprelvekin" model-id="Oprelvekin_Kheifetz2014_1_comp_pe_model" status="needs_review" stale="false" population="healthy males" measured-compound="oprelvekin" parameterization="mechanistic" topology="1C"></div>

## Citation
Kheifetz Y, Elishmereni M, Agur Z. Complex pattern of interleukin-11-induced inflammation revealed by mathematically modeling the dynamics of C-reactive protein. Journal of pharmacokinetics and pharmacodynamics 41(5):479–491 (2014).
  ·  DOI: [10.1007/s10928-014-9383-z](https://doi.org/10.1007/s10928-014-9383-z)

## Population and dosing

**Population:** healthy males · condition healthy · age group adult.

**Dosing:** 3.5 mg, sc, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model/Oprelvekin_Kheifetz2014_1_comp_pe_model.svg" alt="Oprelvekin_Kheifetz2014_1_comp_pe_model diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL, l·h⁻¹ | CL | 13.3 | l·h⁻¹ |
| V₁, l | V | 173 | l |
| ka (1/h) | kabs | 0.152 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Oprelvekin model lacks explicit bioavailability and lag time estimates, relying on library defaults for the one-compartment structure.**

The record specifies clearance (13.3 l·h⁻¹), volume of distribution (173 l), and absorption rate (0.152 1/h) but omits values for bioavailability and absorption lag time. Consequently, library placeholders were applied to these parameters, leaving key pharmacokinetic aspects unsupported by the extracted data. Extracted — oprelvekin: CL 13.3 l·h⁻¹, V 173 l, kabs 0.152 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ka: this record has 0.152, the second reading none. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL, l·h⁻¹ | `Q22` · CL | 13.3 | l·h⁻¹ | 3.694e-06 | m3/s | l/h | exact (1) | Kheifetz_2014_table_p3_1:row2:col11, Kheifetz_2014_table_p3_1:row2:col12 |
| V₁, l | `Q61` · V | 173 | l | 0.173 | m3 | l | exact (1) | Kheifetz_2014_table_p3_1:row3:col11, Kheifetz_2014_table_p3_1:row3:col12 |
| ka (1/h) | `Q49` · kabs | 0.152 | 1/h | 4.222e-05 | 1/s | 1/h | review_gapfill (0.7) | Myzithras_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped diagnostic row 'CNᵇ' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped unlinked row (NIL): 'CNᶜ' — extend the ontology if this is a real PK parameter (source ['Kheifetz_2014_table_p3_1:row11:col11'])
- dropped unlinked row (NIL): 'nLL' — extend the ontology if this is a real PK parameter (source ['Kheifetz_2014_table_p3_1:row12:col11', 'Kheifetz_2014_table_p3_1:row12:col12'])
- dropped unlinked row (NIL): 'AIC' — extend the ontology if this is a real PK parameter (source ['Kheifetz_2014_table_p3_1:row13:col11', 'Kheifetz_2014_table_p3_1:row13:col12'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oprelvekin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V₁, l' is the general volume)
- population split: '1 comp. pe model' subgroup of Kheifetz_2014 (paper reports 4 populations: 1 comp. pe model, 2 comp. ce model, 2 comp. pe model, 3 comp. pe model)
- molar mass: none found for 'oprelvekin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Myzithras_2022's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- transposed table Kheifetz_2014_table_p3_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.857 (6/7 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.152 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kheifetz_2014_table_p3_1:row2:col11', 'Kheifetz_2014_table_p3_1:row2:col12'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Myzithras_2022:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kheifetz_2014_table_p3_1:row3:col11', 'Kheifetz_2014_table_p3_1:row3:col12'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 13.3 | ['Kheifetz_2014_table_p3_1:row2:col11', 'Kheifetz_2014_table_p3_1:row2:col12'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.3 L/h | ['Kheifetz_2014_table_p3_1:row2:col11', 'Kheifetz_2014_table_p3_1:row2:col12'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 173 L | ['Kheifetz_2014_table_p3_1:row3:col11', 'Kheifetz_2014_table_p3_1:row3:col12'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=oprelvekin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped |  | 9.124 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model/Oprelvekin_Kheifetz2014_1_comp_pe_model_modelica.zip" download>Oprelvekin_Kheifetz2014_1_comp_pe_model_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model/Oprelvekin_Kheifetz2014_1_comp_pe_model_fmi.zip" download>Oprelvekin_Kheifetz2014_1_comp_pe_model_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model/Oprelvekin_Kheifetz2014_1_comp_pe_model_matlab.zip" download>Oprelvekin_Kheifetz2014_1_comp_pe_model_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model/Oprelvekin_Kheifetz2014_1_comp_pe_model_matlab_simbio.zip" download>Oprelvekin_Kheifetz2014_1_comp_pe_model_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model/Oprelvekin_Kheifetz2014_1_comp_pe_model_sbml.zip" download>Oprelvekin_Kheifetz2014_1_comp_pe_model_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model/Oprelvekin_Kheifetz2014_1_comp_pe_model_cellml.zip" download>Oprelvekin_Kheifetz2014_1_comp_pe_model_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3.5e-06 | kg |
| input | model | `Cl` | 3.694e-06 | m3/s |
| input | model | `VdPerKg` | 0.002471 | m3/kg |
| input | model | `ka` | 4.222e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kheifetz Y, Elishmereni M, Agur Z. Complex pattern of interleukin-11-induced inflammation revealed by mathematically modeling the dynamics of C-reactive protein. Journal of pharmacokinetics and pharmacodynamics 41(5):479–491 (2014). [doi:10.1007/s10928-014-9383-z](https://doi.org/10.1007/s10928-014-9383-z)

**This record:** Pharmacolibrary v26.09, model `Oprelvekin_Kheifetz2014_1_comp_pe_model`. <https://pharmacolibrary.github.io/#/drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model>

```bibtex
@misc{pharmacolibrary_OprelvekinKheifetz20141comppemodel,
  title  = {{Pharmacolibrary model Oprelvekin_Kheifetz2014_1_comp_pe_model}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model},
  note   = {Parameters from doi:10.1007/s10928-014-9383-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3.5 mg, single dose, first-order absorption (ka 0.152 /h, F 0.9). Dose in the paper: 3.5 mg.

<dbs-fmusim paramsurl="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model/Oprelvekin_Kheifetz2014_1_comp_pe_model_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model/Oprelvekin_Kheifetz2014_1_comp_pe_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Oprelvekin_Kheifetz2014_1_comp_pe_model_params.json` · controls `Oprelvekin_Kheifetz2014_1_comp_pe_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boprelvekin%5D%20Oprelvekin_Kheifetz2014_1_comp_pe_model&body=Drug%3A%20oprelvekin%0ARecord%3A%20Oprelvekin_Kheifetz2014_1_comp_pe_model%0APaper%3A%20Kheifetz_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:05 UTC</sub>
