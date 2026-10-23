<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;potassium canrenoate&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_canrenoate/&quot;},{&quot;label&quot;:&quot;Suyagh_2012 \u00b7 median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PotassiumCanrenoate_Suyagh2012_median&quot;,&quot;label&quot;:&quot;Suyagh_2012_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;PotassiumCanrenoate_Suyagh2012_two_experimentally_determined&quot;,&quot;label&quot;:&quot;Suyagh_2012_two_experimentally_determined_s_one_for_each_exponent_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_two_experimentally_determined.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumCanrenoate_Suyagh2013_reference&quot;,&quot;label&quot;:&quot;Suyagh_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2013_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# potassium canrenoate — `PotassiumCanrenoate_Suyagh2012_median`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:30 UTC (Needs review), but the paper was screened again on 2026-10-06 18:31 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="potassium canrenoate" model-id="PotassiumCanrenoate_Suyagh2012_median" status="extracted" stale="true" population="paediatric patients" measured-compound="canrenone" parameterization="apparent" topology="1C"></div>

## Citation
Suyagh M, Hawwa AF, Collier PS, Millership JS, Kole P, Millar M et al. Population pharmacokinetic model of canrenone after intravenous administration of potassium canrenoate to paediatric patients. British journal of clinical pharmacology 74(5):864–872 (2012).
  ·  DOI: [10.1111/j.1365-2125.2012.04257.x](https://doi.org/10.1111/j.1365-2125.2012.04257.x)

## Population and dosing

**Population:** paediatric patients · age group infant · n = &gt;=23.

**Dosed compound ≠ measured compound:** dosed potassium canrenoate, measured canrenone.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median/PotassiumCanrenoate_Suyagh2012_median.svg" alt="PotassiumCanrenoate_Suyagh2012_median diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/hr) | CLm/F | 1.33 | L/hr |
| V/F (L) | V/F | 19.62 | L |
| t1/2 (hr) | t1/2z | 12.09 | hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.417). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The potassium canrenoate/canrenone model's simulated terminal half-life (10.222239476695405 h) does not reproduce the paper's reported value (0.13 h, ratio 78.6326), and the absorption rate constant ka was never reported, so library defaults were used.**

Simulating the model as the paper dosed it gives a terminal half-life of 10.222239476695405 h for canrenone, versus the paper's 0.13 h — a 78.6326-fold discrepancy, far outside tolerance; comparisons against other reported half-lives (4.38, 4.14, 19.57, 19.58 h) also fail. The absorption rate constant ka (and Tlag) are not reported in the source, so placeholder defaults were substituted, and the model assumes F=1, Fm=1 with no molar correction in an apparent (/F) parameterization with first-order depot input. A second reader also disagreed on the dosed compound (potassium canrenoate vs unknown), the primary analyte, and the V/F parameter identification, reading a weight-normalized volume of 5.35 L/kg where this record has none. Extracted — canrenone: CL/F 1.33 L/hr, V/F 19.6 L, t1/2z 12.1 hr.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl/f: this record has 1.33, the second reading none; it also differs on 6 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/hr) | `Q351` · CLm/F | 1.33 | L/hr | 3.694e-07 | m3/s | l/h | exact (1) | Suyagh_2012_table_4:row0:col1 |
| V/F (L) | `Q76` · V/F | 19.62 | L | 0.01962 | m3 | l | exact (1) | Suyagh_2012_table_4:row1:col1 |
| t1/2 (hr) | `Q57` · t1/2z | 12.09 | hr | 4.352e+04 | s | h | exact (1) | Suyagh_2012_table_4:row2:col1 |

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
- dropped duplicate Q27 ('CL/F (L/hr/kg)*', value '0.32') — already have one for this compound
- dropped duplicate Q290 ('V/F (L/kg)*', value '5.35') — already have one for this compound
- metabolite canrenone: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=canrenone
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V/F (L)' is the general volume)
- population split: 'median' subgroup of Suyagh_2012 (paper reports 2 populations: median, two experimentally determined θs (one for each exponent) estimate)
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 38 linked by role

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 4
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.417 (5/12 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f (l/hr/70 kg) θcl/f]` |  | 14.13 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 1.33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kf (hr-) θkf]` |  | 5.79 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mofv]` |  | -97.85 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight_power]` |  | 0.833 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_f_weight_power]` |  | 1.07 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 19.62 |  | only_one_extracted |

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
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Suyagh_2012_table_4:row0:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Suyagh_2012_table_4:row2:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Suyagh_2012_table_4:row1:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 19.6 L | ['Suyagh_2012_table_4:row1:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=canrenone) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | deviation_id: not acceptable; defaulted_parameters: not acceptable; apparent_assumption: not acceptable; invented_absorption: not acceptable; input_model: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | pass | 11.2 | 10.22 | 0.9127 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.13 | 10.22 | 78.63 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.13 | 10.22 | 78.63 | min→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 12.09 | 10.22 | 0.8455 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 4.38 | 10.22 | 2.334 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 19.57 | 10.22 | 0.5223 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 12.12 | 10.22 | 0.8434 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 4.14 | 10.22 | 2.469 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 19.58 | 10.22 | 0.5221 | hr→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median/PotassiumCanrenoate_Suyagh2012_median_modelica.zip" download>PotassiumCanrenoate_Suyagh2012_median_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median/PotassiumCanrenoate_Suyagh2012_median_fmi.zip" download>PotassiumCanrenoate_Suyagh2012_median_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median/PotassiumCanrenoate_Suyagh2012_median_matlab.zip" download>PotassiumCanrenoate_Suyagh2012_median_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median/PotassiumCanrenoate_Suyagh2012_median_matlab_simbio.zip" download>PotassiumCanrenoate_Suyagh2012_median_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median/PotassiumCanrenoate_Suyagh2012_median_sbml.zip" download>PotassiumCanrenoate_Suyagh2012_median_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median/PotassiumCanrenoate_Suyagh2012_median_cellml.zip" download>PotassiumCanrenoate_Suyagh2012_median_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3405 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 3.694e-07 | m3/s |
| input | model | `VdPerKg` | 0.0002803 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Suyagh M, Hawwa AF, Collier PS, Millership JS, Kole P, Millar M et al. Population pharmacokinetic model of canrenone after intravenous administration of potassium canrenoate to paediatric patients. British journal of clinical pharmacology 74(5):864–872 (2012). [doi:10.1111/j.1365-2125.2012.04257.x](https://doi.org/10.1111/j.1365-2125.2012.04257.x)

**This record:** Pharmacolibrary v26.09, model `PotassiumCanrenoate_Suyagh2012_median`. <https://pharmacolibrary.github.io/#/drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median>

```bibtex
@misc{pharmacolibrary_PotassiumCanrenoateSuyagh2012median,
  title  = {{Pharmacolibrary model PotassiumCanrenoate_Suyagh2012_median}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median},
  note   = {Parameters from doi:10.1111/j.1365-2125.2012.04257.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median/PotassiumCanrenoate_Suyagh2012_median_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median/PotassiumCanrenoate_Suyagh2012_median_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `PotassiumCanrenoate_Suyagh2012_median_params.json` · controls `PotassiumCanrenoate_Suyagh2012_median_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpotassium_canrenoate%5D%20PotassiumCanrenoate_Suyagh2012_median&body=Drug%3A%20potassium_canrenoate%0ARecord%3A%20PotassiumCanrenoate_Suyagh2012_median%0APaper%3A%20Suyagh_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_potassium_canrenoate/PotassiumCanrenoate_Suyagh2012_median%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 18:31 UTC</sub>
