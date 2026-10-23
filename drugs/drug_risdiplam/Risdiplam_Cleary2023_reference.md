<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M09A&quot;,&quot;href&quot;:&quot;atc/M09A.md&quot;},{&quot;label&quot;:&quot;risdiplam&quot;,&quot;href&quot;:&quot;drugs/drug_risdiplam/&quot;},{&quot;label&quot;:&quot;Cleary_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risdiplam_Cleary2023_reference&quot;,&quot;label&quot;:&quot;Cleary_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risdiplam/Risdiplam_Cleary2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# risdiplam — `Risdiplam_Cleary2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="risdiplam" model-id="Risdiplam_Cleary2023_reference" status="accepted_with_caveats" stale="false" population="SMA patients and healthy subjects" measured-compound="risdiplam" parameterization="apparent" topology="2C"></div>

## Citation
Cleary Y, Kletzl H, Grimsey P, Heinig K, Ogungbenro K, Silber Baumann HE et al. Estimation of FMO3 Ontogeny by Mechanistic Population Pharmacokinetic Modelling of Risdiplam and Its Impact on Drug-Drug Interactions in Children. Clinical pharmacokinetics 62(6):891–904 (2023).
  ·  DOI: [10.1007/s40262-023-01241-7](https://doi.org/10.1007/s40262-023-01241-7)

## Population and dosing

**Population:** SMA patients and healthy subjects · condition spinal muscular atrophy · age group mixed.

**Dosing:** 14, 17.5, 350 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference.svg" alt="Risdiplam_Cleary2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F | CL/F | 2.64 | L/h | 2.13 |
| ktr | ktr | 5.18 | 1/h | 2.74 |
| Vc/F | V1/F | 98.0 | L | 1.80 |
| Q/F | Q/F | 0.682 | L/h | 10.5 |
| Vp/F | V2/F | 92.9 | L | 25.8 |
| effect_of_wt_on_cl_f_and_q_f | effect_of_wt_on_cl_f_and_q_f | 0.276 |  | 11.8 |
| theta_v1_f_wt | theta_v1_f_wt | 0.860 |  | 3.34 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has risdiplam, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 2.64 | L/h | 7.333e-07 | m3/s | L/h | 2.13 | exact (1) | Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4, Tab2:footnote, Tab2:footnote |
| ktr | `Q306` · ktr | 5.18 | 1/h | 0.001439 | 1/s | 1/h | 2.74 | exact (1) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4, Tab2:footnote |
| Vc/F | `Q290` · V1/F | 98.0 | L | 0.098 | m3 | L | 1.80 | exact (1) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4, Tab2:footnote, Tab2:footnote |
| Q/F | `Q69` · Q/F | 0.682 | L/h | 1.894e-07 | m3/s | L/h | 10.5 | exact (1) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4 |
| Vp/F | `Q82` · V2/F | 92.9 | L | 0.0929 | m3 | L | 25.8 | exact (1) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4 |
| effect_of_wt_on_cl_f_and_q_f | `Q900` · effect_of_wt_on_cl_f_and_q_f | 0.276 |  |  |  |  | 11.8 |  | Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col4 |
| theta_v1_f_wt | `Q900` · theta_v1_f_wt | 0.860 |  |  |  |  | 3.34 |  | Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `absorption_approximation`: transit absorption (ktr=0.001439/s, n=0) folded to first-order ka = ktr/(n+1) = 0.001439/s — same mean absorption time, no delay phase

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Effect of WT on CL/F and Q/F' → Q900:effect_of_wt_on_cl_f_and_q_f = 0.276 (linear_fractional on Q27)
- dropped duplicate Q27 ('Age50—CL/F', value '0.877') — already have one for this compound
- routed 'Age50—Vc/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q27 ('Healthy subjects on CL/F', value '0.524') — already have one for this compound
- dropped value-less row: 'CL/F (CV)' (captured trailing unit 'CV' for child rows)
- dropped value-less row: 'ktr (CV)' (captured trailing unit 'CV' for child rows)
- dropped value-less row: 'Vc/F (CV)' (captured trailing unit 'CV' for child rows)
- NIL: refused to back-fill base 'Cmax' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'allometric_exponent' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- implicit units: 'CL/F' → L/h (from the popPK convention: 'The paper describes CL/F as apparent clearance (hepatic clearance). While Table 2 is not fully provided in the excerpt, ')
- implicit units: 'ktr' → 1/h (from the popPK convention: 'ktr is a first-order transit rate constant. By definition, first-order rate constants have units of inverse time (1/h). ')
- implicit units: 'Vc/F' → L (from the popPK convention: 'Vc/F is the apparent volume of distribution of the central compartment. The text notes Vss = 4.2 L/kg, implying Vc/F wou')
- implicit units: 'Q/F' → L/h (from the popPK convention: 'Q/F is the apparent intercompartmental clearance. By convention, intercompartmental clearances are expressed in L/h. The')
- implicit units: 'Vp/F' → L (from the popPK convention: 'Vp/F is the apparent volume of distribution of the peripheral compartment. Similar to Vc/F, the value 92.9 is consistent')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=risdiplam

**Extraction notes:**
- unparsed cell Tab2:row14:col2 = '0.0678 (26.0%)'
- unparsed cell Tab2:row15:col2 = '0.272 (52.2%)'
- unparsed cell Tab2:row16:col2 = '0.0651 (25.5%)'
- unparsed cell Tab2:row18:col2 = '0.0546 (23.4%)'
- unparsed cell Tab2:row19:col2 = '0.117 (34.2%)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (14/28 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alpha]` |  | 3.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta]` |  | 0.509 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clint,cyp3a healthy adult]` |  | 0.000133 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_wt_on_cl_f_and_q_f]` | 0.276 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ktr].rse_percent` | 2.74 | 3.09 | mismatch |
| `gpt-oss-120b` | `parameters[ktr].value` | 5.18 | 5.12 | mismatch |
| `gpt-oss-120b` | `parameters[q]` |  | 0.963 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_wt]` |  | 0.276 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_wt]` |  | 0.811 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q_wt]` |  | 0.605 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 94.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` |  | 60.1 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | risdiplam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | risdiplam | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q27 | fail | 2.64 | 0.524 | 0.1985 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:footnote', 'Tab2:footnote'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  |  |  | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:footnote', 'Tab2:footnote'] |
| C5_dimension_Q306 | pass | 1 / [time] |  |  |  | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:footnote'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  |  |  | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.64 L/h |  |  | ['Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:footnote', 'Tab2:footnote'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 98 L |  |  | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:footnote', 'Tab2:footnote'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 92.9 L |  |  | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=risdiplam) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_modelica.zip" download>Risdiplam_Cleary2023_reference_modelica.zip</a> <span class="pk-size">(5.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_fmi.zip" download>Risdiplam_Cleary2023_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_matlab.zip" download>Risdiplam_Cleary2023_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_matlab_simbio.zip" download>Risdiplam_Cleary2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_sbml.zip" download>Risdiplam_Cleary2023_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_cellml.zip" download>Risdiplam_Cleary2023_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4015 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.4e-05 | kg |
| input | model | `Cl` | 7.333e-07 | m3/s |
| input | model | `VdPerKg` | 0.0014 | m3/kg |
| input | model | `k12` | 1.933e-06 | 1/s |
| input | model | `k21` | 2.039e-06 | 1/s |
| input | model | `ka` | 0.001439 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Cleary Y, Kletzl H, Grimsey P, Heinig K, Ogungbenro K, Silber Baumann HE et al. Estimation of FMO3 Ontogeny by Mechanistic Population Pharmacokinetic Modelling of Risdiplam and Its Impact on Drug-Drug Interactions in Children. Clinical pharmacokinetics 62(6):891–904 (2023). [doi:10.1007/s40262-023-01241-7](https://doi.org/10.1007/s40262-023-01241-7)

**This record:** Pharmacolibrary v26.09, model `Risdiplam_Cleary2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_risdiplam/Risdiplam_Cleary2023_reference>

```bibtex
@misc{pharmacolibrary_RisdiplamCleary2023reference,
  title  = {{Pharmacolibrary model Risdiplam_Cleary2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_risdiplam/Risdiplam_Cleary2023_reference},
  note   = {Parameters from doi:10.1007/s40262-023-01241-7},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 14 mg, single dose, first-order absorption (ka 5.18 /h, F 1). Doses in the paper: 14, 17.5, 350 mg.

<dbs-fmusim paramsurl="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Risdiplam_Cleary2023_reference_params.json` · controls `Risdiplam_Cleary2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisdiplam%5D%20Risdiplam_Cleary2023_reference&body=Drug%3A%20risdiplam%0ARecord%3A%20Risdiplam_Cleary2023_reference%0APaper%3A%20Cleary_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_risdiplam/Risdiplam_Cleary2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:44 UTC</sub>
