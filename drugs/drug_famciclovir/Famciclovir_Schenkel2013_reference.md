<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;famciclovir&quot;,&quot;href&quot;:&quot;drugs/drug_famciclovir/&quot;},{&quot;label&quot;:&quot;Schenkel_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Famciclovir_Schenkel2013_reference&quot;,&quot;label&quot;:&quot;Schenkel_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# famciclovir — `Famciclovir_Schenkel2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> T3_param_coverage; x1_cross_check.

<div class="pk-model-meta" hidden drug="famciclovir" model-id="Famciclovir_Schenkel2013_reference" status="needs_review" stale="false" population="patients undergoing cataract surgery" measured-compound="penciclovir" parameterization="apparent" topology="1C"></div>

## Citation
Schenkel F, Csajka C, Baglivo E, Kondo-Oestreicher M, Dayer P, Gex-Fabry M et al. Intraocular penetration of penciclovir after oral administration of famciclovir: a population pharmacokinetic model. The Journal of antimicrobial chemotherapy 68(7):1635–1641 (2013).
  ·  DOI: [10.1093/jac/dkt064](https://doi.org/10.1093/jac/dkt064)

## Population and dosing

**Population:** patients undergoing cataract surgery · age group adult.

**Dosing:** 500 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed famciclovir, measured penciclovir.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference/Famciclovir_Schenkel2013_reference.svg" alt="Famciclovir_Schenkel2013_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K0 (h⁻¹) | kabs | 1.86 | h⁻¹ |
| K20 (h⁻¹) | kel | 0.25 | h⁻¹ |
| K32 (h⁻¹) | kcomp | 0.41 | h⁻¹ |
| VP (L) | V | 86.2 | L |
| θCLCR (h⁻¹)ᵇ | equation variable | 0.07 | h⁻¹ |
| t 1/2AH (h) | t1/2z | 1.7 | h |
| t 1/2P (h) | t1/2α | 28 | h |
| CL P (L/h) | CLm/F | 40 | L/h |
| AUC p (mg . h/mL) | AUC∞ | 40 | mg . h/mL |
| AUC AH (mg . h/mL) | AUC | 28 | mg . h/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.579), qwen3.8-27b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**T3_param_coverage; x1_cross_check.**

A reported unit could not be converted (equation variable), so that value has no SI equivalent. None of the extracted parameters is famciclovir's own; they describe penciclovir. Extracted — penciclovir: kabs 1.86 h⁻¹, kel 0.25 h⁻¹, kcomp 0.41 h⁻¹, V 86.2 L, t1/2z 1.7 h, t1/2α 28 h, CLm/F 40 L/h, AUC∞ 40 mg . h/mL, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of k0: this record has none, the second reading 1.86; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K0 (h⁻¹) | `Q49` · kabs | 1.86 | h⁻¹ | 0.0005167 | 1/s | 1/h | exact (1) | Schenkel_2013_table_p3_1:row0:col1 |
| K20 (h⁻¹) | `Q47` · kel | 0.25 | h⁻¹ | 6.944e-05 | 1/s | 1/h | exact (1) | Schenkel_2013_table_p3_1:row1:col1 |
| K32 (h⁻¹) | `Q48` · kcomp | 0.41 | h⁻¹ | 0.0001139 | 1/s | 1/h | exact (1) | Schenkel_2013_table_p3_1:row3:col1 |
| VP (L) | `Q61` · V | 86.2 | L | 0.0862 | m3 | l | exact (1) | Schenkel_2013_table_p3_1:row4:col1 |
| θCLCR (h⁻¹)ᵇ | `Q900` · equation variable | 0.07 | h⁻¹ |  |  | 1/h | llm (0.6) | Schenkel_2013_table_p3_1:row6:col1 |
| t 1/2AH (h) | `Q57` · t1/2z | 1.7 | h | 6120 | s | h | llm (0.6) | Schenkel_2013_table_3:row0:col4 |
| t 1/2P (h) | `Q59` · t1/2α | 28 | h | 1.008e+05 | s | h | llm (0.6) | Schenkel_2013_table_3:row1:col1 |
| CL P (L/h) | `Q351` · CLm/F | 40 | L/h | 1.111e-05 | m3/s | l/h | exact (1) | Schenkel_2013_table_3:row1:col2 |
| AUC p (mg . h/mL) | `Q17` · AUC∞ | 40 | mg . h/mL | 1.44e+05 | kg*s/m3 | (h·mg)/ml | llm_corrected (0.6) | Schenkel_2013_table_3:row1:col3 |
| AUC AH (mg . h/mL) | `Q88` · AUC | 28 | mg . h/mL | 1.008e+05 | kg*s/m3 | (h·mg)/ml | llm_confirmed (0.6) | Schenkel_2013_table_3:row1:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'mean+sd' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- conflicting source units for 't 1/2P (h)': [{'unit': 'h', 'source': 'Schenkel_2013_table_3:header0:col1', 'scope': 'label'}, {'unit': '%', 'source': 'Schenkel_2013_table_3:row1:col1', 'scope': 'inline'}]
- conflicting source units for 'CL P (L/h)': [{'unit': 'L/h', 'source': 'Schenkel_2013_table_3:header0:col2', 'scope': 'label'}, {'unit': '%', 'source': 'Schenkel_2013_table_3:row1:col2', 'scope': 'inline'}]
- conflicting source units for 'AUC p (mg . h/mL)': [{'unit': 'mg . h/mL', 'source': 'Schenkel_2013_table_3:header0:col3', 'scope': 'label'}, {'unit': '%', 'source': 'Schenkel_2013_table_3:row1:col3', 'scope': 'inline'}]
- conflicting source units for 'AUC AH (mg . h/mL)': [{'unit': 'mg . h/mL', 'source': 'Schenkel_2013_table_3:header0:col6', 'scope': 'label'}, {'unit': '%', 'source': 'Schenkel_2013_table_3:row1:col6', 'scope': 'inline'}]
- dropped duplicate Q900 ('θACE inhibitors (h⁻¹)ᵇ', value '0.06') — already have one for this compound
- routed 'θBWᶜ' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'P ratio' — extend the ontology if this is a real PK parameter (source ['Schenkel_2013_table_3:row1:col7'])
- metabolite penciclovir: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'VP (L)' Q63→Q61 for penciclovir — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=penciclovir
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 4 linked by role

**Extraction notes:**
- table Schenkel_2013_table_p3_1: unbound_uncertainty
- table Schenkel_2013_table_p3_1: unparsed_numeric_cell
- table Schenkel_2013_table_3: conflicting_units
- table Schenkel_2013_table_3: unbound_uncertainty
- table Schenkel_2013_table_3: unparsed_numeric_cell
- transposed table Schenkel_2013_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (11 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.579 (11/19 fields) | 8 |
| `qwen3.8-27b` | partly confirmed | 0.571 (4/7 fields) | 3 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc ah]` | 28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc p].parameter_id` | Q17 | Q88 | mismatch |
| `gpt-oss-120b` | `parameters[k0]` |  | 1.86 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k0]` | 1.86 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2ah].parameter_id` | Q57 | Q59 | mismatch |
| `gpt-oss-120b` | `parameters[t 1/2p].parameter_id` | Q59 | Q57 | mismatch |
| `gpt-oss-120b` | `parameters[θbwc]` |  | 1.01 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θclcr (h-)b]` | 0.07 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[p ratio]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2ah]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2p]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Schenkel_2013_table_3:row1:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Schenkel_2013_table_3:row1:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Schenkel_2013_table_p3_1:row1:col1'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Schenkel_2013_table_p3_1:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Schenkel_2013_table_p3_1:row0:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Schenkel_2013_table_3:row0:col4'] |
| C5_dimension_Q59 | pass | [time] |  | ['Schenkel_2013_table_3:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Schenkel_2013_table_p3_1:row4:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Schenkel_2013_table_3:row1:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 86.2 L | ['Schenkel_2013_table_p3_1:row4:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=penciclovir) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 4 scholar param(s) emitted or defaulted | 3 covered |  | neither emitted nor in defaulted[]: ['kcomp'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.579 (11 of 19 compared fields agree, 5 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.579 | cross-check contradicted by a second reader: verdict disputed; agreement 0.579 (11 of 19 compared fields agree, 5 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference/Famciclovir_Schenkel2013_reference_modelica.zip" download>Famciclovir_Schenkel2013_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference/Famciclovir_Schenkel2013_reference_fmi.zip" download>Famciclovir_Schenkel2013_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2533 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0005 | kg |
| input | model | `Cl` | 1.111e-05 | m3/s |
| input | model | `VdPerKg` | 0.001231 | m3/kg |
| input | model | `ka` | 0.0005167 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Schenkel F, Csajka C, Baglivo E, Kondo-Oestreicher M, Dayer P, Gex-Fabry M et al. Intraocular penetration of penciclovir after oral administration of famciclovir: a population pharmacokinetic model. The Journal of antimicrobial chemotherapy 68(7):1635–1641 (2013). [doi:10.1093/jac/dkt064](https://doi.org/10.1093/jac/dkt064)

**This record:** Pharmacolibrary, model `Famciclovir_Schenkel2013_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference>

```bibtex
@misc{pharmacolibrary_FamciclovirSchenkel2013reference,
  title  = {{Pharmacolibrary model Famciclovir_Schenkel2013_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference},
  note   = {Parameters from doi:10.1093/jac/dkt064},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 500 mg, single dose, first-order absorption (ka 1.86 /h, F 1). Dose in the paper: 500 mg.

<dbs-fmusim paramsurl="drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference/Famciclovir_Schenkel2013_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference/Famciclovir_Schenkel2013_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Famciclovir_Schenkel2013_reference_params.json` · controls `Famciclovir_Schenkel2013_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfamciclovir%5D%20Famciclovir_Schenkel2013_reference&body=Drug%3A%20famciclovir%0ARecord%3A%20Famciclovir_Schenkel2013_reference%0APaper%3A%20Schenkel_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 13:38 UTC</sub>
