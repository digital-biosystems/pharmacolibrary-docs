<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;cabozantinib&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/&quot;},{&quot;label&quot;:&quot;Ly_2023 \u00b7 ase&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cabozantinib_DAngelo2020_reference&quot;,&quot;label&quot;:&quot;DAngelo_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_DAngelo2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Lacy2018_reference&quot;,&quot;label&quot;:&quot;Lacy_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Lacy2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Ly2023_ase&quot;,&quot;label&quot;:&quot;Ly_2023_ase&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cabozantinib_Ly2023_estimate&quot;,&quot;label&quot;:&quot;Ly_2023_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Ly2023_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Miles2016v2_reference&quot;,&quot;label&quot;:&quot;Miles_2016_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Miles2016v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Nguyen2019_reference&quot;,&quot;label&quot;:&quot;Nguyen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Nguyen2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Tan2024_estimates_in_the_registration_file&quot;,&quot;label&quot;:&quot;Tan_2024_estimates_in_the_registration_file&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cabozantinib — `Cabozantinib_Ly2023_ase`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="cabozantinib" model-id="Cabozantinib_Ly2023_ase" status="accepted_with_caveats" stale="false" population="patients with various cancer types and healthy volunteers" measured-compound="cabozantinib" parameterization="apparent" topology="1C"></div>

## Citation
Ly NS, Li J, Faggioni R, Roskos LK, Brose MS. Population Pharmacokinetics and Exposure-Response Analysis for the Phase 3 COSMIC-311 Trial of Cabozantinib for Radioiodine-Refractory Differentiated Thyroid Cancer. Clinical pharmacokinetics 62(4):587–598 (2023).
  ·  DOI: [10.1007/s40262-023-01210-0](https://doi.org/10.1007/s40262-023-01210-0)

## Population and dosing

**Population:** patients with various cancer types and healthy volunteers · condition various cancers and healthy · age group adult · n = 1745.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase/Cabozantinib_Ly2023_ase.svg" alt="Cabozantinib_Ly2023_ase diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 0.0323 | L/h |
| Vc/F | V1/F | 7.69 | L |
| Ka | kabs | 0.175 | 1/h |
| V3/F | V3/F | 4.32 | L |
| Q/F | Q/F | 0.976 | L/h |
| F1 | Fab | 0.017 |  |
| ALAG4 | tlag | 0.0404 | h |
| theta_q319_weight | theta_q319_weight | 0.0614 |  |
| theta_v1_f_weight | theta_v1_f_weight | 0.270 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.208). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[alag4].value`: this record has 0.0404, the second reading 19.1; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 0.0323 | L/h | 8.972e-09 | m3/s | L/h | exact (1) | Tab2:row1:col2 |
| Vc/F | `Q290` · V1/F | 7.69 | L | 0.00769 | m3 | L | exact (1) | Tab2:row2:col2 |
| Ka | `Q49` · kabs | 0.175 | 1/h | 4.861e-05 | 1/s | 1/h | exact (1) | Tab2:row3:col2 |
| V3/F | `Q78` · V3/F | 4.32 | L | 0.00432 | m3 | L | exact (1) | Tab2:row4:col2 |
| Q/F | `Q69` · Q/F | 0.976 | L/h | 2.711e-07 | m3/s | L/h | exact (1) | Tab2:row5:col2 |
| F1 | `Q40` · Fab | 0.017 |  |  |  |  | exact (1) | Tab2:row6:col2 |
| ALAG4 | `Q83` · tlag | 0.0404 | h | 145.4 | s | h | llm (0.6) | Tab2:row7:col2 |
| theta_q319_weight | `Q900` · theta_q319_weight | 0.0614 |  |  |  |  |  | Tab2:row8:col2 |
| theta_v1_f_weight | `Q900` · theta_v1_f_weight | 0.270 |  |  |  |  |  | Tab2:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Healthy subjects' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Patientsa' routed out of structural estimates ('Residual variability')
- dropped duplicate Q27 ('Female on CL/F', value '0.0268') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL/F' → L/h (from the paper text: 'Table 2 lists CL/F with unit “L/h”.')
- implicit units: 'Vc/F' → L (from the paper text: 'Table 2 lists Vc/F with unit “L”.')
- implicit units: 'Ka' → 1/h (from the paper text: 'Table 2 lists Ka with unit “h−1”.')
- implicit units: 'V3/F' → L (from the paper text: 'Table 2 lists V3/F with unit “L”.')
- implicit units: 'Q/F' → L/h (from the paper text: 'Table 2 lists Q/F with unit “L/h”.')
- implicit units: 'ALAG4' → h (from the paper text: 'Table 2 lists ALAG4 with unit “h”.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cabozantinib
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'ase' subgroup of Ly_2023 (paper reports 2 populations: ase, estimate)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row3:col5 = 'h−1'
- unparsed cell Tab2:row10:col1 = '− 0.214'
- unparsed cell Tab2:row10:col3 = '− 12.5'
- unparsed cell Tab2:row10:col4 = '(−0.266–0.161)'
- unparsed cell Tab2:row15:col1 = '43.1b'
- unparsed cell Tab2:row16:col1 = '100c'
- unparsed cell Tab2:row17:col1 = '39.3d'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.208 (5/24 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[alag4].rse_percent` |  | 0.2 | mismatch |
| `qwen3.8-27b` | `parameters[alag4].value` | 0.0404 | 19.1 | mismatch |
| `qwen3.8-27b` | `parameters[cl/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[cl/f].rse_percent` |  | 1.6 | mismatch |
| `qwen3.8-27b` | `parameters[cl/f].value` | 0.0323 | 2.05 | mismatch |
| `qwen3.8-27b` | `parameters[f1].rse_percent` |  | 2.3 | mismatch |
| `qwen3.8-27b` | `parameters[f1].value` | 0.017 | 0.735 | mismatch |
| `qwen3.8-27b` | `parameters[ka].rse_percent` |  | 5.2 | mismatch |
| `qwen3.8-27b` | `parameters[ka].value` | 0.175 | 3.39 | mismatch |
| `qwen3.8-27b` | `parameters[q/f].rse_percent` |  | 6.3 | mismatch |
| `qwen3.8-27b` | `parameters[q/f].value` | 0.976 | 15.5 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` | 0.0614 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_f_weight].rse_percent` |  | 13.3 | mismatch |
| `qwen3.8-27b` | `parameters[theta_v1_f_weight].value` | 0.270 | 2.03 | mismatch |
| `qwen3.8-27b` | `parameters[v3/f].rse_percent` |  | 2.4 | mismatch |
| `qwen3.8-27b` | `parameters[v3/f].value` | 4.32 | 178 | mismatch |
| `qwen3.8-27b` | `parameters[vc/f].rse_percent` |  | 7.8 | mismatch |
| `qwen3.8-27b` | `parameters[vc/f].value` | 7.69 | 98.8 | mismatch |
| `qwen3.8-27b` | `parameters[weight_on_cl_f]` |  | 0.144 | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row3:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab2:row4:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row7:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0323 L/h | ['Tab2:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 7.69 L | ['Tab2:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=cabozantinib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | &lt; 14 | 0.007119 | unresolved concentration unit (exp '% change', sim 'kg/m3') |
| T1_cmax | reference | skipped | 23 | 0.007119 | unresolved concentration unit (exp '% higher', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped | &lt; 4 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 29 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase/Cabozantinib_Ly2023_ase_modelica.zip" download>Cabozantinib_Ly2023_ase_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase/Cabozantinib_Ly2023_ase_fmi.zip" download>Cabozantinib_Ly2023_ase_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase/Cabozantinib_Ly2023_ase_matlab.zip" download>Cabozantinib_Ly2023_ase_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase/Cabozantinib_Ly2023_ase_matlab_simbio.zip" download>Cabozantinib_Ly2023_ase_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase/Cabozantinib_Ly2023_ase_sbml.zip" download>Cabozantinib_Ly2023_ase_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase/Cabozantinib_Ly2023_ase_cellml.zip" download>Cabozantinib_Ly2023_ase_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5015 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 145.4 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 6e-05 | kg |
| input | model | `Cl` | 8.972e-09 | m3/s |
| input | model | `VdPerKg` | 0.0001099 | m3/kg |
| input | model | `ka` | 4.861e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Ly NS, Li J, Faggioni R, Roskos LK, Brose MS. Population Pharmacokinetics and Exposure-Response Analysis for the Phase 3 COSMIC-311 Trial of Cabozantinib for Radioiodine-Refractory Differentiated Thyroid Cancer. Clinical pharmacokinetics 62(4):587–598 (2023). [doi:10.1007/s40262-023-01210-0](https://doi.org/10.1007/s40262-023-01210-0)

**This record:** Pharmacolibrary v26.09, model `Cabozantinib_Ly2023_ase`. <https://pharmacolibrary.github.io/#/drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase>

```bibtex
@misc{pharmacolibrary_CabozantinibLy2023ase,
  title  = {{Pharmacolibrary model Cabozantinib_Ly2023_ase}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase},
  note   = {Parameters from doi:10.1007/s40262-023-01210-0},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 60 mg, single dose, first-order absorption (ka 0.175 /h, lag 2.42 min, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 60 mg oral (L01EX07) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase/Cabozantinib_Ly2023_ase_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase/Cabozantinib_Ly2023_ase_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Cabozantinib_Ly2023_ase_params.json` · controls `Cabozantinib_Ly2023_ase_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcabozantinib%5D%20Cabozantinib_Ly2023_ase&body=Drug%3A%20cabozantinib%0ARecord%3A%20Cabozantinib_Ly2023_ase%0APaper%3A%20Ly_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 22:04 UTC</sub>
