<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;rifapentine&quot;,&quot;href&quot;:&quot;drugs/drug_rifapentine/&quot;},{&quot;label&quot;:&quot;Hibma_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifapentine_Hibma2020_reference&quot;,&quot;label&quot;:&quot;Hibma_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rifapentine/Rifapentine_Hibma2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rifapentine — `Rifapentine_Hibma2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Rifapentine absorption rate constant and lag time were missing, forcing the use of library placeholders unsupported by the paper.

<div class="pk-model-meta" hidden drug="rifapentine" model-id="Rifapentine_Hibma2020_reference" status="needs_review" stale="false" population="adults with latent tuberculosis infection" measured-compound="rifapentine" parameterization="apparent" topology="1C"></div>

## Citation
Hibma JE, Radtke KK, Dorman SE, Jindani A, Dooley KE, Weiner M et al. Rifapentine Population Pharmacokinetics and Dosing Recommendations for Latent Tuberculosis Infection. American journal of respiratory and critical care medicine 202(6):866–877 (2020).
  ·  DOI: [10.1164/rccm.201912-2489OC](https://doi.org/10.1164/rccm.201912-2489OC)

## Population and dosing

**Population:** adults with latent tuberculosis infection · age group adult · n = ... (n = 4,301 plasma samples)..

**Dosing:** 300, 450, 600, 750, 900 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, CLm/F, V/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_rifapentine/Rifapentine_Hibma2020_reference/Rifapentine_Hibma2020_reference.svg" alt="Rifapentine_Hibma2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F, L/h | CL/F | 1.11 | L/h | 0.952 (1.48% RSE) |
| V/F, L | V/F | 36.7 | L | 28.5 (40.9% RSE) |
| MTT, h | MTT | 1.94 | h | 1.83 (2.04% RSE) |
| NN | n_transit | 2.15 |  | 1.66 (2.70% RSE) |
| Bioavailability Fixed effects on bioavailability † | Fab | 100 |  |  |
| CL m /f m , L/h | CLm/F | 3.11 | L/h | 1.89 (6.26% RSE) |
| V m /f m , L | Vm/F | 2.15 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.19). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rifapentine absorption rate constant and lag time were missing, forcing the use of library placeholders unsupported by the paper.**

The record lacks explicit absorption estimates, so the model relied on default values rather than data from Hibma. One parameter unit could not be converted to standard SI units, leaving that value undefined. Apparent bioavailability was assumed to be 100%. Extracted — rifapentine: CL/F 1.11 L/h, V/F 36.7 L, MTT 1.94 h, n_transit 2.15, Fab 100, CLm/F 3.11 L/h, Vm/F 2.15 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading rifapentine → rifapentine metabolite (metabolism); it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 1.11 | L/h | 3.083e-07 | m3/s | l/h | exact (1) | tab_1:row2:col1, tab_1:row2:col3, tab_1:row2:col4 | 0.952 (1.48% RSE) |
| V/F, L | `Q76` · V/F | 36.7 | L | 0.0367 | m3 | l | exact (1) | tab_1:row3:col1, tab_1:row3:col3, tab_1:row3:col4 | 28.5 (40.9% RSE) |
| MTT, h | `Q81` · MTT | 1.94 | h |  |  | h | exact (1) | tab_1:row4:col1 | 1.83 (2.04% RSE) |
| NN | `Q311` · n_transit | 2.15 |  |  |  |  | exact (1) | tab_1:row5:col1 | 1.66 (2.70% RSE) |
| Bioavailability Fixed effects on bioavailability † | `Q40` · Fab | 100 |  |  |  |  | llm_confirmed (0.6) | tab_1:row6:col1, tab_1:row6:col3, tab_1:row6:col4 |  |
| CL m /f m , L/h | `Q351` · CLm/F | 3.11 | L/h | 8.639e-07 | m3/s | l/h | space_fold (0.95) | tab_1:row13:col1, tab_1:row13:col3, tab_1:row13:col4 | 1.89 (6.26% RSE) |
| V m /f m , L | `Q367` · Vm/F | 2.15 | L | 0.00215 | m3 | l | llm (0.6) | tab_1:row14:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Parameter | Q900 | llm |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'Parameter' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'CL/F, L/h' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'V/F, L' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'MTT, h' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'NN' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Dose' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'HIV infection' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'High-fat meal' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Residual error of rifapentine' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'CL m /f m , L/h' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'V m /f m , L' routed out of structural estimates ('Interindividual Variability')
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col1'])
- dropped unlinked row (NIL): 'HIV infection' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col1'])
- dropped unlinked row (NIL): 'High-fat meal' — extend the ontology if this is a real PK parameter (source ['tab_1:row9:col1'])
- dropped unlinked row (NIL): 'g' — extend the ontology if this is a real PK parameter (source ['tab_1:row11:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rifapentine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.19 (4/21 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['rifapentine', 'rifapentine metabolite', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[bioavailability fixed effects on bioavailability]` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability fixed effects on bioavailability]` | 100 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl m /f m]` | 3.11 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl m /f m]` |  | 3.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 1.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 1.11 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose]` |  | 0.0167 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` |  | 1.94 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | 1.94 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[nn]` |  | 2.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[nn]` | 2.15 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[parameter]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v m /f m]` | 2.15 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v m /f m]` |  | 2.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 36.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 36.7 |  | only_one_extracted |

</details>

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row2:col1', 'tab_1:row2:col3', 'tab_1:row2:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['tab_1:row13:col1', 'tab_1:row13:col3', 'tab_1:row13:col4'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['tab_1:row14:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_1:row3:col1', 'tab_1:row3:col3', 'tab_1:row3:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.11 L/h | ['tab_1:row2:col1', 'tab_1:row2:col3', 'tab_1:row2:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 36.7 L | ['tab_1:row3:col1', 'tab_1:row3:col3', 'tab_1:row3:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=rifapentine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_rifapentine/Rifapentine_Hibma2020_reference/Rifapentine_Hibma2020_reference_modelica.zip" download>Rifapentine_Hibma2020_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_rifapentine/Rifapentine_Hibma2020_reference/Rifapentine_Hibma2020_reference_fmi.zip" download>Rifapentine_Hibma2020_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_rifapentine/Rifapentine_Hibma2020_reference/Rifapentine_Hibma2020_reference_matlab.zip" download>Rifapentine_Hibma2020_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_rifapentine/Rifapentine_Hibma2020_reference/Rifapentine_Hibma2020_reference_matlab_simbio.zip" download>Rifapentine_Hibma2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_rifapentine/Rifapentine_Hibma2020_reference/Rifapentine_Hibma2020_reference_sbml.zip" download>Rifapentine_Hibma2020_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_rifapentine/Rifapentine_Hibma2020_reference/Rifapentine_Hibma2020_reference_cellml.zip" download>Rifapentine_Hibma2020_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.877 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0003 | kg |
| input | model | `Cl` | 8.639e-07 | m3/s |
| input | model | `VdPerKg` | 3.071e-05 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Hibma JE, Radtke KK, Dorman SE, Jindani A, Dooley KE, Weiner M et al. Rifapentine Population Pharmacokinetics and Dosing Recommendations for Latent Tuberculosis Infection. American journal of respiratory and critical care medicine 202(6):866–877 (2020). [doi:10.1164/rccm.201912-2489OC](https://doi.org/10.1164/rccm.201912-2489OC)

**This record:** Pharmacolibrary v26.09, model `Rifapentine_Hibma2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_rifapentine/Rifapentine_Hibma2020_reference>

```bibtex
@misc{pharmacolibrary_RifapentineHibma2020reference,
  title  = {{Pharmacolibrary model Rifapentine_Hibma2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_rifapentine/Rifapentine_Hibma2020_reference},
  note   = {Parameters from doi:10.1164/rccm.201912-2489OC},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 300 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 300, 450, 600, 750, 900 mg.

<dbs-fmusim paramsurl="drugs/drug_rifapentine/Rifapentine_Hibma2020_reference/Rifapentine_Hibma2020_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_rifapentine/Rifapentine_Hibma2020_reference/Rifapentine_Hibma2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Rifapentine_Hibma2020_reference_params.json` · controls `Rifapentine_Hibma2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brifapentine%5D%20Rifapentine_Hibma2020_reference&body=Drug%3A%20rifapentine%0ARecord%3A%20Rifapentine_Hibma2020_reference%0APaper%3A%20Hibma_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rifapentine/Rifapentine_Hibma2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:25 UTC</sub>
