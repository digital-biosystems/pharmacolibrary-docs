<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinblastine&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/&quot;},{&quot;label&quot;:&quot;Zhou_1990 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Levque1996_reference&quot;,&quot;label&quot;:&quot;Lev\u00eaque_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Levque1996_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Toso1995_reference&quot;,&quot;label&quot;:&quot;Toso_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Toso1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Petric2023_reference&quot;,&quot;label&quot;:&quot;Petric_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Petric2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Zhou1990_reference&quot;,&quot;label&quot;:&quot;Zhou_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Zhou1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinblastine — `Vinblastine_Zhou1990_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> Vinblastine model held back because inter-compartmental clearances were left at library defaults rather than using paper estimates.

<div class="pk-model-meta" hidden drug="vinblastine" model-id="Vinblastine_Zhou1990_reference" status="needs_review" stale="false" population="rats" measured-compound="vinblastine and vincristine" parameterization="mechanistic" topology="2C"></div>

## Citation
Zhou XJ, Martin M, Placidi M, Cano JP, Rahmani R. In vivo and in vitro pharmacokinetics and metabolism of vincaalkaloids in rat. II. Vinblastine and vincristine. European journal of drug metabolism and pharmacokinetics 15(4):323–332 (1990).
  ·  DOI: [10.1007/BF03190222](https://doi.org/10.1007/BF03190222)

## Population and dosing

**Population:** rats given intravenous vinblastine or vincristine.

**Dosing:** 7, 42 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed vinblastine, measured vinblastine and vincristine.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 4 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference.svg" alt="Vinblastine_Zhou1990_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Estimated parameters: Vc (l/kg) | V1 | 5.86 | l/kg |
| Estimated parameters: Vt (l/kg) | V | 11.46 | l/kg |
| Estimated parameters: Cls (l/h/kg) | CL | 1.49 | l/h/kg |
| theta_q900_weight_power | theta_q900_weight_power | 87.0 |  |
| theta_q59_weight_power | theta_q59_weight_power | 0.51 |  |
| theta_q900_weight_power | theta_q900_weight_power | 47.0 |  |
| theta_q60_weight_power | theta_q60_weight_power | 7.5 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.636), gpt-oss:120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Vinblastine model held back because inter-compartmental clearances were left at library defaults rather than using paper estimates.**

The record lists volumes and clearance but omits explicit values for the rates of transfer between the central and peripheral compartments, so generic placeholders were used instead of data from the study. Additionally, the defined weight-based covariates were not exercised in the simulations, leaving the recorded effects unverified. Extracted — vinblastine: V1 5.86 l/kg, V 11.5 l/kg, CL 1.49 l/h/kg.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has vinblastine and vincristine, the second reading vinblastine; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Estimated parameters: Vc (l/kg) | `Q63` · V1 | 5.86 | l/kg | 0.4102 | m3 | l/kg | llm_confirmed (0.6) | Zhou_1990_table_1:row5:col1 |
| Estimated parameters: Vt (l/kg) | `Q61` · V | 11.46 | l/kg | 0.8022 | m3 | l/kg | llm (0.6) | Zhou_1990_table_1:row6:col1 |
| Estimated parameters: Cls (l/h/kg) | `Q22` · CL | 1.49 | l/h/kg | 2.897e-05 | m3/s | l/(h·kg) | llm (0.6) | Zhou_1990_table_1:row7:col1 |
| theta_q900_weight_power | `Q900` · theta_q900_weight_power | 87.0 |  |  |  |  |  | Zhou_1990_table_1:row1:col1 |
| theta_q59_weight_power | `Q900` · theta_q59_weight_power | 0.51 |  |  |  |  |  | Zhou_1990_table_1:row2:col1 |
| theta_q900_weight_power | `Q900` · theta_q900_weight_power | 47.0 |  |  |  |  |  | Zhou_1990_table_1:row3:col1 |
| theta_q60_weight_power | `Q900` · theta_q60_weight_power | 7.5 |  |  |  |  |  | Zhou_1990_table_1:row4:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12', 'k21']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose (mg/kg)' — extend the ontology if this is a real PK parameter (source ['Zhou_1990_table_1:row0:col1'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q59 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q60 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vinblastine and vincristine
- molar mass: no plausible PubChem entry for 'vinblastine and vincristine' ('vinblastine and vincristine') — left in mass units
- molar mass: none found for 'vinblastine and vincristine' — its concentrations stay mass-only

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- transposed table Zhou_1990_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.636 (7/11 fields) | 4 |
| `gpt-oss:120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['vinblastine', 'metabolites', 'metabolism']] | [['vinblastine', 'vlb metabolite 1', 'metabolism'], ['vinblastine', 'vlb metabolite 2', 'metabolism'], ['vinblastine', 'vlb metabolite 3', 'metabolism'], ['vinblastine', 'vlb metabolite 4', 'metabolism'], ['vincristine', 'vcr metabolite 1', 'metabolism'], ['vincristine', 'vcr metabolite 2', 'metabolism'], ['vincristine', 'vcr metabolite 3', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | vinblastine | vinblastine and vincristine | mismatch |
| `qwen3.8-27b` | `parameters[theta_q86_weight_power]` |  | 87.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_weight_power].value` | 87.0 | 47.0 | mismatch |
| `qwen3.8-27b` | `screen.dose_compound` | vinblastine and vincristine | vinblastine | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | vinblastine and vincristine | vinblastine | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Zhou_1990_table_1:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Zhou_1990_table_1:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Zhou_1990_table_1:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.49 | ['Zhou_1990_table_1:row7:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 104 L/h | ['Zhou_1990_table_1:row7:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 802 L | ['Zhou_1990_table_1:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 410 L | ['Zhou_1990_table_1:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=vinblastine and vincristine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_modelica.zip" download>Vinblastine_Zhou1990_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_fmi.zip" download>Vinblastine_Zhou1990_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_matlab.zip" download>Vinblastine_Zhou1990_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_matlab_simbio.zip" download>Vinblastine_Zhou1990_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_sbml.zip" download>Vinblastine_Zhou1990_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_cellml.zip" download>Vinblastine_Zhou1990_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-06 | kg |
| input | model | `Cl` | 2.897e-05 | m3/s |
| input | model | `VdPerKg` | 0.00586 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zhou XJ, Martin M, Placidi M, Cano JP, Rahmani R. In vivo and in vitro pharmacokinetics and metabolism of vincaalkaloids in rat. II. Vinblastine and vincristine. European journal of drug metabolism and pharmacokinetics 15(4):323–332 (1990). [doi:10.1007/BF03190222](https://doi.org/10.1007/BF03190222)

**This record:** Pharmacolibrary v26.09, model `Vinblastine_Zhou1990_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_vinblastine/Vinblastine_Zhou1990_reference>

```bibtex
@misc{pharmacolibrary_VinblastineZhou1990reference,
  title  = {{Pharmacolibrary model Vinblastine_Zhou1990_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_vinblastine/Vinblastine_Zhou1990_reference},
  note   = {Parameters from doi:10.1007/BF03190222},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 7 mg infusion over 10 min, single dose. Doses in the paper: 7, 42 mg.

<dbs-fmusim paramsurl="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Vinblastine_Zhou1990_reference_params.json` · controls `Vinblastine_Zhou1990_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinblastine%5D%20Vinblastine_Zhou1990_reference&body=Drug%3A%20vinblastine%0ARecord%3A%20Vinblastine_Zhou1990_reference%0APaper%3A%20Zhou_1990%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vinblastine/Vinblastine_Zhou1990_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 11:49 UTC</sub>
