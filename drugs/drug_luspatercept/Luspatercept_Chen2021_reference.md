<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;luspatercept&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/&quot;},{&quot;label&quot;:&quot;Chen_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Luspatercept_Chen2020_reference&quot;,&quot;label&quot;:&quot;Chen_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/Luspatercept_Chen2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Luspatercept_Chen2021_reference&quot;,&quot;label&quot;:&quot;Chen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/Luspatercept_Chen2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# luspatercept — `Luspatercept_Chen2021_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Needs review), but the paper was screened again on 2026-10-05 21:19 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="luspatercept" model-id="Luspatercept_Chen2021_reference" status="extracted" stale="true" population="adults with beta-thalassemia" measured-compound="luspatercept" parameterization="apparent" topology="1C"></div>

## Citation
Chen N, Kassir N, Laadem A, Giuseppi AC, Shetty J, Maxwell SE et al. Population Pharmacokinetics and Exposure-Response Relationship of Luspatercept, an Erythroid Maturation Agent, in Anemic Patients With β-Thalassemia. Journal of clinical pharmacology 61(1):52–63 (2021).
  ·  DOI: [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696)

## Population and dosing

**Population:** adults with beta-thalassemia · condition beta-thalassemia · age group adult.

**Dosing:** 14, 87.5 mg, sc, multiple, every 168 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_luspatercept/Luspatercept_Chen2021_reference/Luspatercept_Chen2021_reference.svg" alt="Luspatercept_Chen2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F, L/day | CL/F | 0.532 | L/day |
| V1/F, L | V/F | 8.39 | L |
| Ka (1/day) | kabs | 0.410 | 1/day |
| weight_kg_on_cl_f | weight_kg_on_cl_f | 0.809 |  |
| albumin_g_l_on_cl_f | albumin_g_l_on_cl_f | -0.886 |  |
| weight_kg_on_v1_f | weight_kg_on_v1_f | 0.718 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The luspatercept record was held back because the absorption rate constant ka was not reported in the source and a placeholder value was substituted, an unacceptable deviation for this one-compartment model.**

The paper reports CL/F (0.532 L/day), V/F (8.39 L) and covariate effects, but no ka; the model builder defaulted ka and Tlag to library placeholders, and adjudication flagged the invented absorption as not acceptable. The parameterization is apparent (F=1, Fm=1, no molar correction). The covariate effects on CL/F and V/F (weight, albumin) were defined but only the reference individual was simulated, so those scenarios were not exercised. Extracted — luspatercept: CL/F 0.532 L/day, V/F 8.39 L, kabs 0.41.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has luspatercept, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F, L/day | `Q27` · CL/F | 0.532 | L/day | 6.157e-09 | m3/s | l/d | exact (1) | jcph1696-tbl-0002:row3:col1, jcph1696-tbl-0002:row3:col2 |
| V1/F, L | `Q76` · V/F | 8.39 | L | 0.00839 | m3 | l | exact (1) | jcph1696-tbl-0002:row4:col1, jcph1696-tbl-0002:row4:col2 |
| Ka (1/day) | `Q49` · kabs | 0.410 | 1/day | 4.745e-06 | 1/s | 1/h | exact (1) | jcph1696-tbl-0002:row5:col1, jcph1696-tbl-0002:row5:col2 |
| weight_kg_on_cl_f | `Q900` · weight_kg_on_cl_f | 0.809 |  |  |  |  |  | jcph1696-tbl-0002:row6:col1, jcph1696-tbl-0002:row6:col2 |
| albumin_g_l_on_cl_f | `Q900` · albumin_g_l_on_cl_f | -0.886 |  |  |  |  |  | jcph1696-tbl-0002:row8:col1, jcph1696-tbl-0002:row8:col2 |
| weight_kg_on_v1_f | `Q900` · weight_kg_on_v1_f | 0.718 |  |  |  |  |  | jcph1696-tbl-0002:row9:col1, jcph1696-tbl-0002:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- covariate level 'Weight, kg on CL/F' → Q900:weight_kg_on_cl_f = 0.809 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'RBCT burden (units/24 weeks) on CL/F' — extend the ontology if this is a real PK parameter (source ['jcph1696-tbl-0002:row7:col1', 'jcph1696-tbl-0002:row7:col2'])
- covariate level 'Albumin, g/L on CL/F' → Q900:albumin_g_l_on_cl_f = -0.886 (linear_fractional on Q27)
- covariate level 'Weight, kg on V1/F' → Q900:weight_kg_on_v1_f = 0.718 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'RBCT burden (units/24 weeks) on V1/F' — extend the ontology if this is a real PK parameter (source ['jcph1696-tbl-0002:row10:col1', 'jcph1696-tbl-0002:row10:col2'])
- routed 'Interindividual variability of CL/F (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability of V1/F (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- implicit units: 'Ka (1/day)' → 1/day (from the paper text: "The parameter list explicitly states 'Ka (1/day) = 0.410'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=luspatercept
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V1/F, L' is the general volume)
- molar mass: none found for 'luspatercept' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph1696-tbl-0002:row3:col3 = '0.500‐0.569'
- unparsed cell jcph1696-tbl-0002:row4:col3 = '7.97‐8.85'
- unparsed cell jcph1696-tbl-0002:row5:col3 = '0.354‐0.481'
- unparsed cell jcph1696-tbl-0002:row6:col3 = '0.594‐1.04'
- unparsed cell jcph1696-tbl-0002:row7:col3 = '−0.0186 to −0.00544'
- unparsed cell jcph1696-tbl-0002:row8:col3 = '−1.21 to −0.519'
- unparsed cell jcph1696-tbl-0002:row9:col3 = '0.495‐0.916'
- unparsed cell jcph1696-tbl-0002:row10:col3 = '−0.0189 to −0.00921'
- unparsed cell jcph1696-tbl-0002:row12:col3 = '28.2‐44.4'
- unparsed cell jcph1696-tbl-0002:row13:col3 = '18.1‐36.2'
- unparsed cell jcph1696-tbl-0002:row14:col3 = '16.9‐25.2'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[albumin_g_l_on_cl_f]` | -0.886 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 0.532 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` |  | 0.532 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.410 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` |  | 0.410 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_albumin]` |  | -0.886 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v1_f_weight]` |  | 0.718 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` | 8.39 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` |  | 8.39 | only_one_extracted |
| `gpt-oss:120b` | `parameters[weight_kg_on_cl_f]` | 0.809 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[weight_kg_on_cl_f]` |  | 0.809 | only_one_extracted |
| `gpt-oss:120b` | `parameters[weight_kg_on_v1_f]` | 0.718 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | luspatercept | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | luspatercept | unknown | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph1696-tbl-0002:row3:col1', 'jcph1696-tbl-0002:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph1696-tbl-0002:row5:col1', 'jcph1696-tbl-0002:row5:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['jcph1696-tbl-0002:row4:col1', 'jcph1696-tbl-0002:row4:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0222 L/h | ['jcph1696-tbl-0002:row3:col1', 'jcph1696-tbl-0002:row3:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 8.39 L | ['jcph1696-tbl-0002:row4:col1', 'jcph1696-tbl-0002:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=luspatercept) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_luspatercept/Luspatercept_Chen2021_reference/Luspatercept_Chen2021_reference_modelica.zip" download>Luspatercept_Chen2021_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_luspatercept/Luspatercept_Chen2021_reference/Luspatercept_Chen2021_reference_fmi.zip" download>Luspatercept_Chen2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_luspatercept/Luspatercept_Chen2021_reference/Luspatercept_Chen2021_reference_matlab.zip" download>Luspatercept_Chen2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_luspatercept/Luspatercept_Chen2021_reference/Luspatercept_Chen2021_reference_matlab_simbio.zip" download>Luspatercept_Chen2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_luspatercept/Luspatercept_Chen2021_reference/Luspatercept_Chen2021_reference_sbml.zip" download>Luspatercept_Chen2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_luspatercept/Luspatercept_Chen2021_reference/Luspatercept_Chen2021_reference_cellml.zip" download>Luspatercept_Chen2021_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 1.4e-05 | kg |
| input | model | `Cl` | 6.157e-09 | m3/s |
| input | model | `VdPerKg` | 0.0001199 | m3/kg |
| input | model | `ka` | 4.745e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Chen N, Kassir N, Laadem A, Giuseppi AC, Shetty J, Maxwell SE et al. Population Pharmacokinetics and Exposure-Response Relationship of Luspatercept, an Erythroid Maturation Agent, in Anemic Patients With β-Thalassemia. Journal of clinical pharmacology 61(1):52–63 (2021). [doi:10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696)

**This record:** Pharmacolibrary v26.09, model `Luspatercept_Chen2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_luspatercept/Luspatercept_Chen2021_reference>

```bibtex
@misc{pharmacolibrary_LuspaterceptChen2021reference,
  title  = {{Pharmacolibrary model Luspatercept_Chen2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_luspatercept/Luspatercept_Chen2021_reference},
  note   = {Parameters from doi:10.1002/jcph.1696},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 14 mg, single dose, first-order absorption (ka 0.0171 /h, F 1). Doses in the paper: 14–87.5 mg.

<dbs-fmusim paramsurl="drugs/drug_luspatercept/Luspatercept_Chen2021_reference/Luspatercept_Chen2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_luspatercept/Luspatercept_Chen2021_reference/Luspatercept_Chen2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Luspatercept_Chen2021_reference_params.json` · controls `Luspatercept_Chen2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bluspatercept%5D%20Luspatercept_Chen2021_reference&body=Drug%3A%20luspatercept%0ARecord%3A%20Luspatercept_Chen2021_reference%0APaper%3A%20Chen_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_luspatercept/Luspatercept_Chen2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 21:19 UTC</sub>
