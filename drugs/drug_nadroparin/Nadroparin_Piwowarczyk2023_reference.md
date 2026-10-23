<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;nadroparin&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/&quot;},{&quot;label&quot;:&quot;Piwowarczyk_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nadroparin_Piwowarczyk2023_reference&quot;,&quot;label&quot;:&quot;Piwowarczyk_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nadroparin — `Nadroparin_Piwowarczyk2023_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 16:14 UTC (Reproduces paper), but the paper was screened again on 2026-10-07 18:12 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="nadroparin" model-id="Nadroparin_Piwowarczyk2023_reference" status="extracted" stale="true" population="patients with COVID-19" measured-compound="nadroparin" parameterization="apparent" topology="1C"></div>

## Citation
Piwowarczyk P, Szczukocka M, Cios W, Okuńska P, Raszewski G, Borys M et al. Population Pharmacokinetics and Probability of Target Attainment Analysis of Nadroparin in Different Stages of COVID-19. Clinical pharmacokinetics 62(6):835–847 (2023).
  ·  DOI: [10.1007/s40262-023-01244-4](https://doi.org/10.1007/s40262-023-01244-4)

## Population and dosing

**Population:** patients with COVID-19 · condition COVID-19 · age group adult.

**Dosing:** 3800, 5700 IU, sc, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference/Nadroparin_Piwowarczyk2023_reference.svg" alt="Nadroparin_Piwowarczyk2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Apparent volume of distribution in group 1, L | V/F | 6.62 | L | 9.6 |
| Apparent clearance in group 1, L/h | CL/F | 1.14 | L/h | 4.2 |
| Absorption rate constant in group 1, 1/h | kabs | 0.325 | 1/h | 10.5 |
| Proportionality constant in group 1, I.U./µg | equation variable | 0.0835 |  | 16.8 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of proportionality constant in group 1, i.u./ug: this record has 0.0835, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Apparent volume of distribution in group 1, L | `Q76` · V/F | 6.62 | L | 0.00662 | m3 | l | 9.6 | llm_confirmed (0.6) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col4, Tab2:row2:col5 |
| Apparent clearance in group 1, L/h | `Q27` · CL/F | 1.14 | L/h | 3.167e-07 | m3/s | l/h | 4.2 | llm_confirmed (0.6) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col4, Tab2:row5:col5 |
| Absorption rate constant in group 1, 1/h | `Q49` · kabs | 0.325 | 1/h | 9.028e-05 | 1/s | 1/h | 10.5 | llm_confirmed (0.6) | Tab2:row8:col1, Tab2:row8:col2, Tab2:row8:col4, Tab2:row8:col5 |
| Proportionality constant in group 1, I.U./µg | `Q900` · equation variable | 0.0835 |  |  |  |  | 16.8 | llm (0.6) | Tab2:row11:col1, Tab2:row11:col2, Tab2:row11:col4, Tab2:row11:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ω2V/F, %CV' routed out of structural estimates ('Inter-individual variability (ω2)')
- table section iiv: 'ω2Cl/F, %CV' routed out of structural estimates ('Inter-individual variability (ω2)')
- table section iiv: 'ω2fr, %CV' routed out of structural estimates ('Inter-individual variability (ω2)')
- table section iiv: 'ω2ka, %CV' routed out of structural estimates ('Inter-individual variability (ω2)')
- table section residual_error: 'σ2C, %CV' routed out of structural estimates ('Residual error model (σ2)')
- table section residual_error: 'σ2anti-Xa, %CV' routed out of structural estimates ('Residual error model (σ2)')
- dropped duplicate Q76 ('Apparent volume of distribution in group 2, L', value '4.53') — already have one for this compound
- dropped duplicate Q76 ('Apparent volume of distribution in group 3, L', value '3.70') — already have one for this compound
- dropped duplicate Q27 ('Apparent clearance in group 2, L/h', value '2.49') — already have one for this compound
- dropped duplicate Q27 ('Apparent clearance in group 3, L/h', value '3.38') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant in group 2, 1/h', value '0.0831') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant in group 3, 1/h', value '0.100') — already have one for this compound
- dropped duplicate Q900 ('Proportionality constant in group 2, I.U./µg', value '0.224') — already have one for this compound
- dropped unlinked row (NIL): 'Proportionality constant in group 3, I.U./µg' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col1', 'Tab2:row13:col2', 'Tab2:row13:col4', 'Tab2:row13:col5'])
- routed 'Ratio of standard deviations (θγ), none' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nadroparin
- molar mass: none found for 'nadroparin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.909 (10/11 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[proportionality constant in group 1, i.u./ug]` | 0.0835 |  | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col4', 'Tab2:row5:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row8:col1', 'Tab2:row8:col2', 'Tab2:row8:col4', 'Tab2:row8:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col4', 'Tab2:row2:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.14 L/h | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col4', 'Tab2:row5:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 6.62 L | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col4', 'Tab2:row2:col5'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=nadroparin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference/Nadroparin_Piwowarczyk2023_reference_modelica.zip" download>Nadroparin_Piwowarczyk2023_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference/Nadroparin_Piwowarczyk2023_reference_fmi.zip" download>Nadroparin_Piwowarczyk2023_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference/Nadroparin_Piwowarczyk2023_reference_matlab.zip" download>Nadroparin_Piwowarczyk2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference/Nadroparin_Piwowarczyk2023_reference_matlab_simbio.zip" download>Nadroparin_Piwowarczyk2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference/Nadroparin_Piwowarczyk2023_reference_sbml.zip" download>Nadroparin_Piwowarczyk2023_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference/Nadroparin_Piwowarczyk2023_reference_cellml.zip" download>Nadroparin_Piwowarczyk2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 3.167e-07 | m3/s |
| input | model | `VdPerKg` | 9.457e-05 | m3/kg |
| input | model | `ka` | 9.028e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Piwowarczyk P, Szczukocka M, Cios W, Okuńska P, Raszewski G, Borys M et al. Population Pharmacokinetics and Probability of Target Attainment Analysis of Nadroparin in Different Stages of COVID-19. Clinical pharmacokinetics 62(6):835–847 (2023). [doi:10.1007/s40262-023-01244-4](https://doi.org/10.1007/s40262-023-01244-4)

**This record:** Pharmacolibrary v26.09, model `Nadroparin_Piwowarczyk2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference>

```bibtex
@misc{pharmacolibrary_NadroparinPiwowarczyk2023reference,
  title  = {{Pharmacolibrary model Nadroparin_Piwowarczyk2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference},
  note   = {Parameters from doi:10.1007/s40262-023-01244-4},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.325 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference/Nadroparin_Piwowarczyk2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference/Nadroparin_Piwowarczyk2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Nadroparin_Piwowarczyk2023_reference_params.json` · controls `Nadroparin_Piwowarczyk2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnadroparin%5D%20Nadroparin_Piwowarczyk2023_reference&body=Drug%3A%20nadroparin%0ARecord%3A%20Nadroparin_Piwowarczyk2023_reference%0APaper%3A%20Piwowarczyk_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:12 UTC</sub>
