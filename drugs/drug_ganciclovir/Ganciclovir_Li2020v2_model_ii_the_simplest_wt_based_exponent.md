<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ganciclovir&quot;,&quot;href&quot;:&quot;drugs/drug_ganciclovir/&quot;},{&quot;label&quot;:&quot;Li_2020_2 \u00b7 model_ii_the_simplest_wt_based_exponent_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ganciclovir_Li2020v2_final_model&quot;,&quot;label&quot;:&quot;Li_2020_2_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganciclovir/Ganciclovir_Li2020v2_final_model.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ganciclovir_Li2020v2_model_i_the_3_4_allometric_model&quot;,&quot;label&quot;:&quot;Li_2020_2_model_i_the_3_4_allometric_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_i_the_3_4_allometric_model.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent&quot;,&quot;label&quot;:&quot;Li_2020_2_model_ii_the_simplest_wt_based_exponent_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ganciclovir_Li2020v2_model_iii_the_simplest_bsa_based_expone&quot;,&quot;label&quot;:&quot;Li_2020_2_model_iii_the_simplest_bsa_based_exponent_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_iii_the_simplest_bsa_based_expone.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ganciclovir_Li2020v2_model_iv_the_maturation_model&quot;,&quot;label&quot;:&quot;Li_2020_2_model_iv_the_maturation_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_iv_the_maturation_model.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ganciclovir — `Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="ganciclovir" model-id="Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent" status="curated_candidate" stale="false" population="critically ill children with cytomegalovirus infection" measured-compound="ganciclovir" parameterization="mechanistic" topology="1C"></div>

## Citation
Li S, Shu C, Wu S, Xu H, Wang Y. Population Pharmacokinetics and Dose Optimization of Ganciclovir in Critically Ill Children. Frontiers in pharmacology 11:614164 (2020).
  ·  DOI: [10.3389/fphar.2020.614164](https://doi.org/10.3389/fphar.2020.614164)

## Population and dosing

**Population:** critically ill children with cytomegalovirus infection · condition cytomegalovirus infection · age group mixed · n = 104.

**Dosing:** 10 mg/kg/d, iv, multiple.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent.svg" alt="Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| θCL (SE%) | CL | 4.57 | L/h |
| θVd (SE%) | V | 10.97 | L |
| k1 | allometric_exponent | 0.79 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of k1: this record has 0.79, the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θCL (SE%) | `Q22` · CL | 4.57 | L/h | 1.269e-06 | m3/s | L/h | llm_confirmed (0.6) | Li_2020_2_table_3:row3:col2 |
| θVd (SE%) | `Q61` · V | 10.97 | L | 0.01097 | m3 | L | llm_confirmed (0.6) | Li_2020_2_table_3:row4:col2 |
| k1 | `Q319` · allometric_exponent | 0.79 |  |  |  |  | llm (0.6) | Li_2020_2_table_3:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| MF = 1/[1+(Age/TM50)−γ] | Q900 | llm |

## Departures & gaps

**Interpretation flags:**
- column 'model ii: the simplest wt-based exponent model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['Li_2020_2_table_3:row0:col2'])
- dropped unlinked row (NIL): 'AIC' — extend the ontology if this is a real PK parameter (source ['Li_2020_2_table_3:row1:col2'])
- dropped unlinked row (NIL): 'BIC' — extend the ontology if this is a real PK parameter (source ['Li_2020_2_table_3:row2:col2'])
- unit_dimension_unknown: 'SE%' (CL)
- unit_dimension_unknown: 'SE%' (V)
- unit_dimension_unknown: 'k50γ+BSAγ' (allometric_exponent)
- dropped duplicate Q319 ('k1=k0−kmax×WTγ/(k50γ+WTγ) or k1=k0−kmax×Ageγ/(k50γ+Ageγ) or k1 = k0−kmax×BSAγ/(k50γ+BSAγ)', value None) — already have one for this compound
- dropped value-less row: 'θ1'
- dropped value-less row: 'θ2'
- dropped value-less row: 'θ3'
- implicit units: 'θCL (SE%)' → L/h (from the paper text: 'The paper states: “the typical population parameter estimates of apparent volume of distribution and apparent clearance ')
- implicit units: 'θVd (SE%)' → L (from the paper text: 'The paper states: “the typical population parameter estimates of apparent volume of distribution and apparent clearance ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ganciclovir
- population split: 'model ii: the simplest wt-based exponent model' subgroup of Li_2020_2 (paper reports 8 populations: final model, model i: the 3/4 allometric model, model ii: the simplest wt-based exponent model, model iii: the simplest bsa-based exponent model, model iv: the maturation model, model v: the wt-dependent exponent model, model vi: the age-dependent exponent model, model vii: the bsa-dependent exponent model)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 3 transcribed (66 record(s))
- LLM selected parameter table(s) 3
- dropped sensitivity-analysis table(s) 5 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[k1]` | 0.79 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[mf = 1/[1+(age/tm50)-γ]]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ1]` |  | -1.25 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ2]` |  | 5.43 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θcl].value` | 4.57 | -1.15 | mismatch |
| `qwen3.8-27b` | `parameters[θvd].value` | 10.97 | -0.79 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Li_2020_2_table_3:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Li_2020_2_table_3:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.57 | ['Li_2020_2_table_3:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.57 L/h | ['Li_2020_2_table_3:row3:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 11 L | ['Li_2020_2_table_3:row4:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=ganciclovir) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_modelica.zip" download>Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_fmi.zip" download>Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_matlab.zip" download>Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_matlab_simbio.zip" download>Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_sbml.zip" download>Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_cellml.zip" download>Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2552 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0005 | kg |
| input | model | `Cl` | 1.269e-06 | m3/s |
| input | model | `VdPerKg` | 0.0001567 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Li S, Shu C, Wu S, Xu H, Wang Y. Population Pharmacokinetics and Dose Optimization of Ganciclovir in Critically Ill Children. Frontiers in pharmacology 11:614164 (2020). [doi:10.3389/fphar.2020.614164](https://doi.org/10.3389/fphar.2020.614164)

**This record:** Pharmacolibrary v26.09, model `Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent`. <https://pharmacolibrary.github.io/#/drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent>

```bibtex
@misc{pharmacolibrary_GanciclovirLi2020v2modeliithesimplestwtbasedexponent,
  title  = {{Pharmacolibrary model Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent},
  note   = {Parameters from doi:10.3389/fphar.2020.614164},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 500 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 500 mg parenteral (J05AB06) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_params.json` · controls `Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bganciclovir%5D%20Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent&body=Drug%3A%20ganciclovir%0ARecord%3A%20Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent%0APaper%3A%20Li_2020_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:42 UTC</sub>
