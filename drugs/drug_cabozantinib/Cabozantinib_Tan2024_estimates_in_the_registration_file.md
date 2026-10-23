<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;cabozantinib&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/&quot;},{&quot;label&quot;:&quot;Tan_2024 \u00b7 estimates_in_the_registration_file&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cabozantinib_DAngelo2020_reference&quot;,&quot;label&quot;:&quot;DAngelo_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_DAngelo2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Lacy2018_reference&quot;,&quot;label&quot;:&quot;Lacy_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Lacy2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Ly2023_ase&quot;,&quot;label&quot;:&quot;Ly_2023_ase&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Ly2023_estimate&quot;,&quot;label&quot;:&quot;Ly_2023_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Ly2023_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Miles2016v2_reference&quot;,&quot;label&quot;:&quot;Miles_2016_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Miles2016v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Nguyen2019_reference&quot;,&quot;label&quot;:&quot;Nguyen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Nguyen2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Tan2024_estimates_in_the_registration_file&quot;,&quot;label&quot;:&quot;Tan_2024_estimates_in_the_registration_file&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cabozantinib — `Cabozantinib_Tan2024_estimates_in_the_registration_file`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="cabozantinib" model-id="Cabozantinib_Tan2024_estimates_in_the_registration_file" status="accepted_with_caveats" stale="false" population="metastatic renal cell carcinoma patients" measured-compound="cabozantinib" parameterization="apparent" topology="2C"></div>

## Citation
Tan Z, Völler S, Yin A, Rieborn A, Gelderblom AJ, van der Hulle T et al. Population Pharmacokinetics of Cabozantinib in Metastatic Renal Cell Carcinoma Patients: Towards Drug Expenses Saving Regimens. Clinical pharmacokinetics 63(6):857–869 (2024).
  ·  DOI: [10.1007/s40262-024-01379-y](https://doi.org/10.1007/s40262-024-01379-y)

## Population and dosing

**Population:** metastatic renal cell carcinoma patients · condition metastatic renal cell carcinoma · age group adult · n = 27.

**Dosing:** 40, 60 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file/Cabozantinib_Tan2024_estimates_in_the_registration_file.svg" alt="Cabozantinib_Tan2024_estimates_in_the_registration_file diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 2.23 | L/h |
| F1 (/)* | Fab | 0.675 |  |
| Vc/F (L)* | V1/F | 81.5 | L |
| Vp/F (L)* | V2/F | 213 | L |
| Q/F (L/h)* | Q/F | 14.2 | L/h |
| Ka1 (/h)* | kabs | 0.568 | 1/h |
| ALAG1 (h)* | tlag | 0.459 | h |
| dose_exponent_on_ka1 | dose_exponent_on_ka1 | -0.5 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[alag1 (h)*].parameter_id`: this record has Q83, the second reading Q31; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 2.23 | L/h | 6.194e-07 | m3/s | l/h | exact (1) | Tab2:row1:col1 |
| F1 (/)* | `Q40` · Fab | 0.675 |  |  |  |  | llm_confirmed (0.6) | Tab2:row2:col1 |
| Vc/F (L)* | `Q290` · V1/F | 81.5 | L | 0.0815 | m3 | L | llm_confirmed (0.6) | Tab2:row3:col1 |
| Vp/F (L)* | `Q82` · V2/F | 213 | L | 0.213 | m3 | L | llm_confirmed (0.6) | Tab2:row4:col1 |
| Q/F (L/h)* | `Q69` · Q/F | 14.2 | L/h | 3.944e-06 | m3/s | L/h | llm_confirmed (0.6) | Tab2:row5:col1 |
| Ka1 (/h)* | `Q49` · kabs | 0.568 | 1/h | 0.0001578 | 1/s | 1/h | llm (0.6) | Tab2:row6:col1 |
| ALAG1 (h)* | `Q83` · tlag | 0.459 | h | 1652 | s | h | llm (0.6) | Tab2:row7:col1 |
| dose_exponent_on_ka1 | `Q900` · dose_exponent_on_ka1 | -0.5 |  |  |  |  |  | Tab2:row10:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q49 ('Ka2 (/h)*', value '0.102') — already have one for this compound
- dropped duplicate Q83 ('ALAG2 (h)*', value '16.8') — already have one for this compound
- covariate level 'Dose exponent on Ka1*' → Q900:dose_exponent_on_ka1 = -0.5 (power on Q27)
- dropped duplicate Q27 ('Female on CL/F*,#', value '0.79') — already have one for this compound
- dropped duplicate Q27 ('Asian on CL/F*,#', value '0.73') — already have one for this compound
- dropped value-less row: 'CL/F'
- dropped value-less row: 'Q/F'
- implicit units: 'Vc/F (L)*' → L (from the paper text: 'Table 2 labels the parameter “Vc/F (L)*”.')
- implicit units: 'Vp/F (L)*' → L (from the paper text: 'Table 2 labels the parameter “Vp/F (L)*”.')
- implicit units: 'Q/F (L/h)*' → L/h (from the paper text: 'Table 2 labels the parameter “Q/F (L/h)*”.')
- implicit units: 'Ka1 (/h)*' → 1/h (from the paper text: 'Table 2 labels the parameter “Ka1 (/h)*”.')
- implicit units: 'ALAG1 (h)*' → h (from the paper text: 'Table 2 labels the parameter “ALAG1 (h)*”.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cabozantinib
- population split: 'estimates in the registration file' subgroup of Tan_2024 (paper reports 2 populations: estimates in the registration file, estimates of the final poppk model (rse%))

**Extraction notes:**
- unparsed cell Tab2:row1:col2 = '3.11 (5%)'
- unparsed cell Tab2:row18:col2 = '0.335 (10%)'
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model
- LLM region Tan_2024:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.625 (10/16 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[alag1 (h)*].parameter_id` | Q83 | Q31 | mismatch |
| `qwen3.8-27b` | `parameters[cl/f].covariate_forms` | ['power'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[dose_exponent_on_ka1]` | -0.5 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[f1 (/)*]` | 0.675 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka2 (/h)*]` |  | 0.102 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_t1_2ka_weight_power]` |  | -0.5 | only_one_extracted |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab2:row4:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row7:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.23 L/h | ['Tab2:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 81.5 L | ['Tab2:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 213 L | ['Tab2:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=cabozantinib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmin_ss | reference | skipped | 36 (48%) |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 632 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file/Cabozantinib_Tan2024_estimates_in_the_registration_file_modelica.zip" download>Cabozantinib_Tan2024_estimates_in_the_registration_file_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file/Cabozantinib_Tan2024_estimates_in_the_registration_file_fmi.zip" download>Cabozantinib_Tan2024_estimates_in_the_registration_file_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file/Cabozantinib_Tan2024_estimates_in_the_registration_file_matlab.zip" download>Cabozantinib_Tan2024_estimates_in_the_registration_file_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file/Cabozantinib_Tan2024_estimates_in_the_registration_file_matlab_simbio.zip" download>Cabozantinib_Tan2024_estimates_in_the_registration_file_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file/Cabozantinib_Tan2024_estimates_in_the_registration_file_sbml.zip" download>Cabozantinib_Tan2024_estimates_in_the_registration_file_sbml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file/Cabozantinib_Tan2024_estimates_in_the_registration_file_cellml.zip" download>Cabozantinib_Tan2024_estimates_in_the_registration_file_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5015 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1652 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 4e-05 | kg |
| input | model | `Cl` | 6.194e-07 | m3/s |
| input | model | `VdPerKg` | 0.001164 | m3/kg |
| input | model | `k12` | 4.84e-05 | 1/s |
| input | model | `k21` | 1.852e-05 | 1/s |
| input | model | `ka` | 0.0001578 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Tan Z, Völler S, Yin A, Rieborn A, Gelderblom AJ, van der Hulle T et al. Population Pharmacokinetics of Cabozantinib in Metastatic Renal Cell Carcinoma Patients: Towards Drug Expenses Saving Regimens. Clinical pharmacokinetics 63(6):857–869 (2024). [doi:10.1007/s40262-024-01379-y](https://doi.org/10.1007/s40262-024-01379-y)

**This record:** Pharmacolibrary v26.09, model `Cabozantinib_Tan2024_estimates_in_the_registration_file`. <https://pharmacolibrary.github.io/#/drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file>

```bibtex
@misc{pharmacolibrary_CabozantinibTan2024estimatesintheregistrationfile,
  title  = {{Pharmacolibrary model Cabozantinib_Tan2024_estimates_in_the_registration_file}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file},
  note   = {Parameters from doi:10.1007/s40262-024-01379-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 40 mg, single dose, first-order absorption (ka 0.568 /h, lag 27.5 min, F 1). Doses in the paper: 40, 60 mg.

<dbs-fmusim paramsurl="drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file/Cabozantinib_Tan2024_estimates_in_the_registration_file_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file/Cabozantinib_Tan2024_estimates_in_the_registration_file_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Cabozantinib_Tan2024_estimates_in_the_registration_file_params.json` · controls `Cabozantinib_Tan2024_estimates_in_the_registration_file_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcabozantinib%5D%20Cabozantinib_Tan2024_estimates_in_the_registration_file&body=Drug%3A%20cabozantinib%0ARecord%3A%20Cabozantinib_Tan2024_estimates_in_the_registration_file%0APaper%3A%20Tan_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:04 UTC</sub>
