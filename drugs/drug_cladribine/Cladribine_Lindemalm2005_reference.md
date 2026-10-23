<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cladribine&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/&quot;},{&quot;label&quot;:&quot;Lindemalm_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cladribine_Lu2024_reference&quot;,&quot;label&quot;:&quot;Lu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lu2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_reference&quot;,&quot;label&quot;:&quot;Lindemalm_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cladribine — `Cladribine_Lindemalm2005_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 16, model 8.97).

<div class="pk-model-meta" hidden drug="cladribine" model-id="Cladribine_Lindemalm2005_reference" status="needs_review" stale="false" population="patients with B- and T-cell lymphoid malignancies" measured-compound="cladribine" parameterization="mechanistic" topology="2C"></div>

## Citation
Lindemalm S, Savic RM, Karlsson MO, Juliusson G, Liliemark J, Albertioni F. Application of population pharmacokinetics to cladribine. BMC pharmacology 5:4 (2005).
  ·  DOI: [10.1186/1471-2210-5-4](https://doi.org/10.1186/1471-2210-5-4)

## Population and dosing

**Population:** patients with B- and T-cell lymphoid malignancies · condition indolent B- and T-cell lymphoid malignancies · age group adult · n = &gt;=150.

**Dosing:** 0.12, 0.24, 5, 10 mg/m2 or mg/kg, oral, iv, sc, multiple.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cladribine/Cladribine_Lindemalm2005_reference/Cladribine_Lindemalm2005_reference.svg" alt="Cladribine_Lindemalm2005_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Clearance (L/h) | CL | 39.3 | L/h | 54 (None% RSE) |
| V1 (L) | V1 | 71.7 | L | 34 (None% RSE) |
| Q2 (L/h) | Q | 51.1 | L/h | 61 (None% RSE) |
| V2 (L) | V2 | 475 | L | 70 (None% RSE) |
| Q3 (L/h) | Q3 | 105 | L/h | 61 (None% RSE) |
| V3 (L) | V3 | 73.6 | L | 61 (None% RSE) |
| Oral Ka (h-1) | kabs | 1.31 | h-1 | 75 (None% RSE) |
| Oral F | fe | 0.353 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 16, model 8.97).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — cladribine: CL 39.3 L/h, V1 71.7 L, Q 51.1 L/h, V2 475 L, Q3 105 L/h, V3 73.6 L, kabs 1.31 h-1, fe 0.353.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Clearance (L/h) | `Q22` · CL | 39.3 | L/h | 1.092e-05 | m3/s | l/h | exact (1) | T3:row2:col1 | 54 (None% RSE) |
| V1 (L) | `Q63` · V1 | 71.7 | L | 0.0717 | m3 | l | exact (1) | T3:row3:col1 | 34 (None% RSE) |
| Q2 (L/h) | `Q30` · Q | 51.1 | L/h | 1.419e-05 | m3/s | l/h | special_case (0.95) | T3:row4:col1 | 61 (None% RSE) |
| V2 (L) | `Q64` · V2 | 475 | L | 0.475 | m3 | l | exact (1) | T3:row5:col1 | 70 (None% RSE) |
| Q3 (L/h) | `Q308` · Q3 | 105 | L/h | 2.917e-05 | m3/s | l/h | exact (1) | T3:row6:col1 | 61 (None% RSE) |
| V3 (L) | `Q77` · V3 | 73.6 | L | 0.0736 | m3 | l | exact (1) | T3:row7:col1 | 61 (None% RSE) |
| Oral Ka (h-1) | `Q49` · kabs | 1.31 | h-1 | 0.0003639 | 1/s | 1/h | llm_confirmed (0.6) | T3:row8:col1 | 75 (None% RSE) |
| Oral F | `Q44` · fe | 0.353 |  |  |  |  | llm (0.6) | T3:row9:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- table section iiv: 'Clearance (L/h)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V1 (L)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Q2 (L/h)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V2 (L)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Q3 (L/h)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V3 (L)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Oral Ka (h-1)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Oral F' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual error2')
- dropped duplicate Q49 ('Subcutaneous Ka (h-1)', value '2.48') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cladribine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T3:row2:col2 = '(4.9)'
- unparsed cell T3:row2:col4 = '(17)'
- unparsed cell T3:row3:col2 = '(13)'
- unparsed cell T3:row3:col4 = '(62)'
- unparsed cell T3:row4:col2 = '(6.8)'
- unparsed cell T3:row4:col4 = '(17)'
- unparsed cell T3:row5:col2 = '(1.8)'
- unparsed cell T3:row5:col4 = '(31)'
- unparsed cell T3:row6:col2 = '(21)'
- unparsed cell T3:row6:col4 = '(17)'
- unparsed cell T3:row7:col2 = '(13)'
- unparsed cell T3:row7:col4 = '(17)'
- unparsed cell T3:row8:col2 = '(14)'
- unparsed cell T3:row8:col4 = '(50)'
- unparsed cell T3:row9:col2 = '(7.9)'
- unparsed cell T3:row9:col4 = '(63)'
- unparsed cell T3:row10:col2 = '(9,6)'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 16 | 15.56 | 0.9726 | 0.25 | reported t½β |
| C2_base_Q22 | pass | 39.3 | 39.3 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T3:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['T3:row4:col1'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  |  |  | ['T3:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['T3:row8:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['T3:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['T3:row5:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  |  |  | ['T3:row7:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 39.3 |  |  | ['T3:row2:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 39.3 L/h |  |  | ['T3:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 71.7 L |  |  | ['T3:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 475 L |  |  | ['T3:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=cladribine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_alpha | reference | skipped | 0.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 1.3 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | fail | 16 | 8.967 | 0.5604 | hours→SI vs simulated h |
| T1_t_half_beta | reference | fail | 58 | 8.967 | 0.1546 | hours→SI vs simulated h |
| T1_t_half_beta | reference | fail | 5 | 8.967 | 1.793 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cladribine/Cladribine_Lindemalm2005_reference/Cladribine_Lindemalm2005_reference_modelica.zip" download>Cladribine_Lindemalm2005_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cladribine/Cladribine_Lindemalm2005_reference/Cladribine_Lindemalm2005_reference_fmi.zip" download>Cladribine_Lindemalm2005_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cladribine/Cladribine_Lindemalm2005_reference/Cladribine_Lindemalm2005_reference_matlab.zip" download>Cladribine_Lindemalm2005_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cladribine/Cladribine_Lindemalm2005_reference/Cladribine_Lindemalm2005_reference_matlab_simbio.zip" download>Cladribine_Lindemalm2005_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cladribine/Cladribine_Lindemalm2005_reference/Cladribine_Lindemalm2005_reference_sbml.zip" download>Cladribine_Lindemalm2005_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cladribine/Cladribine_Lindemalm2005_reference/Cladribine_Lindemalm2005_reference_cellml.zip" download>Cladribine_Lindemalm2005_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2857 | kg/mol |
| input | dosing | `F` | 0.353 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3.4e-07 | kg |
| input | model | `Cl` | 1.092e-05 | m3/s |
| input | model | `VdPerKg` | 0.001024 | m3/kg |
| input | model | `k12` | 0.000198 | 1/s |
| input | model | `k21` | 2.988e-05 | 1/s |
| input | model | `ka` | 0.0003639 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Lindemalm S, Savic RM, Karlsson MO, Juliusson G, Liliemark J, Albertioni F. Application of population pharmacokinetics to cladribine. BMC pharmacology 5:4 (2005). [doi:10.1186/1471-2210-5-4](https://doi.org/10.1186/1471-2210-5-4)

**This record:** Pharmacolibrary v26.09, model `Cladribine_Lindemalm2005_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_cladribine/Cladribine_Lindemalm2005_reference>

```bibtex
@misc{pharmacolibrary_CladribineLindemalm2005reference,
  title  = {{Pharmacolibrary model Cladribine_Lindemalm2005_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cladribine/Cladribine_Lindemalm2005_reference},
  note   = {Parameters from doi:10.1186/1471-2210-5-4},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.34 mg, single dose, first-order absorption (ka 1.31 /h, F 0.353). _The paper's dose was not captured; the default is the WHO ATC DDD 0.34 mg oral (L04AA40) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_cladribine/Cladribine_Lindemalm2005_reference/Cladribine_Lindemalm2005_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_cladribine/Cladribine_Lindemalm2005_reference/Cladribine_Lindemalm2005_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Cladribine_Lindemalm2005_reference_params.json` · controls `Cladribine_Lindemalm2005_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcladribine%5D%20Cladribine_Lindemalm2005_reference&body=Drug%3A%20cladribine%0ARecord%3A%20Cladribine_Lindemalm2005_reference%0APaper%3A%20Lindemalm_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cladribine/Cladribine_Lindemalm2005_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:37 UTC</sub>
