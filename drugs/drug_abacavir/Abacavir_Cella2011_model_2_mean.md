<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;abacavir&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/&quot;},{&quot;label&quot;:&quot;Cella_2011 \u00b7 model_2_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abacavir_Cella2011_model_1_mean&quot;,&quot;label&quot;:&quot;Cella_2011_model_1_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Cella2011_model_1_mean.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Archary2019_reference&quot;,&quot;label&quot;:&quot;Archary_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Archary2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Cella2011_model_2_mean&quot;,&quot;label&quot;:&quot;Cella_2011_model_2_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Abacavir_Chupradit2023_reference&quot;,&quot;label&quot;:&quot;Chupradit_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chupradit2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Chupradit2024_reference&quot;,&quot;label&quot;:&quot;Chupradit_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chupradit2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Fauchet2014_reference&quot;,&quot;label&quot;:&quot;Fauchet_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Fauchet2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Rabie2020_reference&quot;,&quot;label&quot;:&quot;Rabie_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Rabie2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abacavir — `Abacavir_Cella2011_model_2_mean`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The abacavir model was held back because the covariate effect on intercompartmental clearance was not simulated, and apparent parameterization defaults were applied instead of explicit estimates.

<div class="pk-model-meta" hidden drug="abacavir" model-id="Abacavir_Cella2011_model_2_mean" status="needs_review" stale="false" population="paediatric patients" measured-compound="abacavir" parameterization="apparent" topology="2C"></div>

## Citation
Cella M, Zhao W, Jacqz-Aigrain E, Burger D, Danhof M, Della Pasqua O. Paediatric drug development: are population models predictive of pharmacokinetics across paediatric populations?. British journal of clinical pharmacology 72(3):454–464 (2011).
  ·  DOI: [10.1111/j.1365-2125.2011.03992.x](https://doi.org/10.1111/j.1365-2125.2011.03992.x)

## Population and dosing

**Population:** paediatric patients · condition HIV infection · age group mixed.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean/Abacavir_Cella2011_model_2_mean.svg" alt="Abacavir_Cella2011_model_2_mean diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (l h⁻¹) | CL/F | 13.4 | l h⁻¹ |  |
| Vc (l) | V1 | 4.94 | l |  |
| Vp (l) | V2 | 8.12 | l | 40 (None% RSE) |
| Q (l h⁻¹) | Q | 1.25 | l h⁻¹ | 31 (None% RSE) |
| Ka (h⁻¹) | kabs | 0.758 | h⁻¹ |  |
| theta_q319_weight_power | theta_q319_weight_power | 1.14 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The abacavir model was held back because the covariate effect on intercompartmental clearance was not simulated, and apparent parameterization defaults were applied instead of explicit estimates.**

The record defines a covariate power of 1.14 for weight on the intercompartmental clearance, yet the simulation only included the reference individual, leaving the covariate scenarios unexercised. Additionally, the model builder defaulted the absorption delay and assumed bioavailability and molar corrections were equal to one. These deviations from explicit estimation resulted in the record being flagged for further review rather than acceptance. Extracted — abacavir: CL/F 13.4 l h⁻¹, V1 4.94 l, V2 8.12 l, Q 1.25 l h⁻¹, kabs 0.758 h⁻¹.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (l h⁻¹) | `Q27` · CL/F | 13.4 | l h⁻¹ | 3.722e-06 | m3/s | l/h | exact (1) | Cella_2011_table_p6_1:row2:col3 |  |
| Vc (l) | `Q63` · V1 | 4.94 | l | 0.00494 | m3 | l | exact (1) | Cella_2011_table_p6_1:row4:col3 |  |
| Vp (l) | `Q64` · V2 | 8.12 | l | 0.00812 | m3 | l | exact (1) | Cella_2011_table_p6_1:row5:col3 | 40 (None% RSE) |
| Q (l h⁻¹) | `Q30` · Q | 1.25 | l h⁻¹ | 3.472e-07 | m3/s | l/h | exact (1) | Cella_2011_table_p6_1:row6:col3 | 31 (None% RSE) |
| Ka (h⁻¹) | `Q49` · kabs | 0.758 | h⁻¹ | 0.0002106 | 1/s | 1/h | exact (1) | Cella_2011_table_p6_1:row7:col3 |  |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.14 |  |  |  |  |  | Cella_2011_table_p6_1:row9:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Inter-individual variability, %')
- table section iiv: 'Vp' routed out of structural estimates ('Inter-individual variability, %')
- table section iiv: 'Q' routed out of structural estimates ('Inter-individual variability, %')
- table section residual_error: 'ε' routed out of structural estimates ('Residual error, %')
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=abacavir
- population split: 'model 2 mean' subgroup of Cella_2011 (paper reports 2 populations: model 1 mean, model 2 mean)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

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
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Cella_2011_table_p6_1:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Cella_2011_table_p6_1:row6:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Cella_2011_table_p6_1:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Cella_2011_table_p6_1:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Cella_2011_table_p6_1:row5:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 13.4 L/h | ['Cella_2011_table_p6_1:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.94 L | ['Cella_2011_table_p6_1:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 8.12 L | ['Cella_2011_table_p6_1:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=abacavir) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean/Abacavir_Cella2011_model_2_mean_modelica.zip" download>Abacavir_Cella2011_model_2_mean_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean/Abacavir_Cella2011_model_2_mean_fmi.zip" download>Abacavir_Cella2011_model_2_mean_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean/Abacavir_Cella2011_model_2_mean_matlab.zip" download>Abacavir_Cella2011_model_2_mean_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean/Abacavir_Cella2011_model_2_mean_matlab_simbio.zip" download>Abacavir_Cella2011_model_2_mean_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean/Abacavir_Cella2011_model_2_mean_sbml.zip" download>Abacavir_Cella2011_model_2_mean_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean/Abacavir_Cella2011_model_2_mean_cellml.zip" download>Abacavir_Cella2011_model_2_mean_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2863 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0006 | kg |
| input | model | `Cl` | 3.722e-06 | m3/s |
| input | model | `VdPerKg` | 7.057e-05 | m3/kg |
| input | model | `k12` | 7.029e-05 | 1/s |
| input | model | `k21` | 4.276e-05 | 1/s |
| input | model | `ka` | 0.0002106 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Cella M, Zhao W, Jacqz-Aigrain E, Burger D, Danhof M, Della Pasqua O. Paediatric drug development: are population models predictive of pharmacokinetics across paediatric populations?. British journal of clinical pharmacology 72(3):454–464 (2011). [doi:10.1111/j.1365-2125.2011.03992.x](https://doi.org/10.1111/j.1365-2125.2011.03992.x)

**This record:** Pharmacolibrary, model `Abacavir_Cella2011_model_2_mean`. <https://pharmacolibrary.github.io/#/drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean>

```bibtex
@misc{pharmacolibrary_AbacavirCella2011model2mean,
  title  = {{Pharmacolibrary model Abacavir_Cella2011_model_2_mean}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean},
  note   = {Parameters from doi:10.1111/j.1365-2125.2011.03992.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 0.758 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 600 mg oral (J05AF06) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean/Abacavir_Cella2011_model_2_mean_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean/Abacavir_Cella2011_model_2_mean_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Abacavir_Cella2011_model_2_mean_params.json` · controls `Abacavir_Cella2011_model_2_mean_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babacavir%5D%20Abacavir_Cella2011_model_2_mean&body=Drug%3A%20abacavir%0ARecord%3A%20Abacavir_Cella2011_model_2_mean%0APaper%3A%20Cella_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 08:52 UTC</sub>
