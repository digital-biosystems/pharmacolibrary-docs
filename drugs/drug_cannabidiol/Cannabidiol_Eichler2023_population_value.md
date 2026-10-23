<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;cannabidiol&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/&quot;},{&quot;label&quot;:&quot;Eichler_2023 \u00b7 population_value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cannabidiol_Eichler2023_population_value&quot;,&quot;label&quot;:&quot;Eichler_2023_population_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cannabidiol_LaporteAmargos2026_reference&quot;,&quot;label&quot;:&quot;Laporte-Amargos_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/Cannabidiol_LaporteAmargos2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabidiol_McGilveray2005_reference&quot;,&quot;label&quot;:&quot;McGilveray_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/Cannabidiol_McGilveray2005_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabidiol_Shaik2026_reference&quot;,&quot;label&quot;:&quot;Shaik_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/Cannabidiol_Shaik2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabidiol_Snchez2023_reference&quot;,&quot;label&quot;:&quot;S\u00e1nchez_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabidiol/Cannabidiol_Snchez2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cannabidiol — `Cannabidiol_Eichler2023_population_value`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Needs review), but the paper was screened again on 2026-10-07 07:10 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="cannabidiol" model-id="Cannabidiol_Eichler2023_population_value" status="extracted" stale="true" population="horses" measured-compound="cannabidiol" parameterization="apparent" topology="2C"></div>

## Citation
Eichler F, Poźniak B, Machnik M, Schenk I, Wingender A, Baudisch N et al. Pharmacokinetic modelling of orally administered cannabidiol and implications for medication control in horses. Frontiers in veterinary science 10:1234551 (2023).
  ·  DOI: [10.3389/fvets.2023.1234551](https://doi.org/10.3389/fvets.2023.1234551)

## Population and dosing

**Population:** horses · condition healthy · n = 14.

**Dosing:** 14, 70, 210 mg, oral, multiple, every 12 h.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value/Cannabidiol_Eichler2023_population_value.svg" alt="Cannabidiol_Eichler2023_population_value diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Cl/F (L/h/kg) | CL/F | 10.75 | L/h/kg |
| V1/F (L/kg) | V1/F | 77.13 | L/kg |
| Q2 (L/h/kg) | Q | 1.35 | L/h/kg |
| V2/F (L/kg) | V2/F | 313.17 | L/kg |
| Q3 (L/h/kg) | Q3 | 38.23 | L/h/kg |
| V3/F (L/kg) | V3/F | 241.98 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The cannabidiol horse model was held back because it fails to reproduce the paper's Cmax (1.572842631025892e-06 vs 3.8999999999999997e-07) and terminal half-life (5.165650385265054 h vs 161.29 h), and the absorption rate ka was invented rather than taken from the source.**

Simulated as the paper dosed it, the model's peak concentration exceeds the reported value by a ratio of 4.0329 (1.572842631025892e-06 vs 3.8999999999999997e-07), and the terminal half-life is 5.165650385265054 h against the paper's 161.29 h (ratio 0.032). The absorption rate ka and lag time were not reported in the source, so library defaults were substituted, and the invented absorption was judged not acceptable. The model also assumes F=1 and Fm=1 with no molar correction, using an apparent (/F) parameterization with first-order depot input. Extracted — cannabidiol: CL/F 10.8 L/h/kg, V1/F 77.1 L/kg, Q 1.35 L/h/kg, V2/F 313 L/kg, Q3 38.2 L/h/kg, V3/F 242 L/kg.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cl/F (L/h/kg) | `Q27` · CL/F | 10.75 | L/h/kg | 0.000209 | m3/s | l/(h·kg) | exact (1) | tab4:row3:col1 |
| V1/F (L/kg) | `Q290` · V1/F | 77.13 | L/kg | 5.399 | m3 | l/kg | exact (1) | tab4:row4:col1 |
| Q2 (L/h/kg) | `Q30` · Q | 1.35 | L/h/kg | 2.625e-05 | m3/s | l/(h·kg) | special_case (0.95) | tab4:row5:col1 |
| V2/F (L/kg) | `Q82` · V2/F | 313.17 | L/kg | 21.92 | m3 | l/kg | exact (1) | tab4:row6:col1 |
| Q3 (L/h/kg) | `Q308` · Q3 | 38.23 | L/h/kg | 0.0007434 | m3/s | l/(h·kg) | exact (1) | tab4:row7:col1 |
| V3/F (L/kg) | `Q78` · V3/F | 241.98 | L/kg | 16.94 | m3 | l/kg | exact (1) | tab4:row8:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section residual_error: 'a' routed out of structural estimates ('Residual error')
- table section residual_error: 'b' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'Tk0 (h)' — extend the ontology if this is a real PK parameter (source ['tab4:row2:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cannabidiol
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'population value' subgroup of Eichler_2023 (paper reports 4 populations: first trial (0.2 mg/kg, n = 3), population value, second trial (1 mg/kg, n = 3), third trial (3 mg/kg, n = 5))

**Extraction notes:**
- companion parameter table 5 transcribed (18 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab4:row3:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab4:row4:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab4:row5:col1'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['tab4:row7:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['tab4:row8:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tab4:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 753 L/h | ['tab4:row3:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 5.4e+03 L | ['tab4:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 2.19e+04 L | ['tab4:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=cannabidiol) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 3.9e-07 | 1.573e-06 | 4.033 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 7e-07 | 1.573e-06 | 2.247 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 0.72 | 1.573e-06 |  | unresolved concentration unit (exp '(', sim 'kg/m3') |
| T1_t_half_beta | reference | fail | 161.3 | 5.166 | 0.032 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 79.85 | 5.166 | 0.0647 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value/Cannabidiol_Eichler2023_population_value_modelica.zip" download>Cannabidiol_Eichler2023_population_value_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value/Cannabidiol_Eichler2023_population_value_fmi.zip" download>Cannabidiol_Eichler2023_population_value_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value/Cannabidiol_Eichler2023_population_value_matlab.zip" download>Cannabidiol_Eichler2023_population_value_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value/Cannabidiol_Eichler2023_population_value_matlab_simbio.zip" download>Cannabidiol_Eichler2023_population_value_matlab_simbio.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value/Cannabidiol_Eichler2023_population_value_sbml.zip" download>Cannabidiol_Eichler2023_population_value_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value/Cannabidiol_Eichler2023_population_value_cellml.zip" download>Cannabidiol_Eichler2023_population_value_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3145 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.4e-05 | kg |
| input | model | `Cl` | 0.000209 | m3/s |
| input | model | `VdPerKg` | 0.07713 | m3/kg |
| input | model | `k12` | 4.862e-06 | 1/s |
| input | model | `k21` | 1.197e-06 | 1/s |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Eichler F, Poźniak B, Machnik M, Schenk I, Wingender A, Baudisch N et al. Pharmacokinetic modelling of orally administered cannabidiol and implications for medication control in horses. Frontiers in veterinary science 10:1234551 (2023). [doi:10.3389/fvets.2023.1234551](https://doi.org/10.3389/fvets.2023.1234551)

**This record:** Pharmacolibrary v26.09, model `Cannabidiol_Eichler2023_population_value`. <https://pharmacolibrary.github.io/#/drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value>

```bibtex
@misc{pharmacolibrary_CannabidiolEichler2023populationvalue,
  title  = {{Pharmacolibrary model Cannabidiol_Eichler2023_population_value}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value},
  note   = {Parameters from doi:10.3389/fvets.2023.1234551},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 14 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 14, 70, 210 mg.

<dbs-fmusim paramsurl="drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value/Cannabidiol_Eichler2023_population_value_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value/Cannabidiol_Eichler2023_population_value_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Cannabidiol_Eichler2023_population_value_params.json` · controls `Cannabidiol_Eichler2023_population_value_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcannabidiol%5D%20Cannabidiol_Eichler2023_population_value&body=Drug%3A%20cannabidiol%0ARecord%3A%20Cannabidiol_Eichler2023_population_value%0APaper%3A%20Eichler_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cannabidiol/Cannabidiol_Eichler2023_population_value%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:10 UTC</sub>
