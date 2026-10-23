<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;nalbuphine&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/&quot;},{&quot;label&quot;:&quot;Nie_2023 \u00b7 estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nalbuphine_Gao2022_reference&quot;,&quot;label&quot;:&quot;Gao_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Gao2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalbuphine_Nie2023_estimates&quot;,&quot;label&quot;:&quot;Nie_2023_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Nalbuphine_Zhu2024_reference&quot;,&quot;label&quot;:&quot;Zhu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Zhu2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalbuphine_EudyByrne2023_reference&quot;,&quot;label&quot;:&quot;Eudy-Byrne_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalbuphine_Nie2023_final_model&quot;,&quot;label&quot;:&quot;Nie_2023_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Nie2023_final_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nalbuphine — `Nalbuphine_Nie2023_estimates`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Needs review), but the paper was screened again on 2026-10-07 05:33 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="nalbuphine" model-id="Nalbuphine_Nie2023_estimates" status="extracted" stale="true" population="adults undergoing general anesthesia surgery" measured-compound="nalbuphine" parameterization="mechanistic" topology="2C"></div>

## Citation
Nie X, Gao X, Gao J, Heng T, Zhang Y, Sun Y et al. Population pharmacokinetics of nalbuphine in patients undergoing general anesthesia surgery. Frontiers in pharmacology 14:1130287 (2023).
  ·  DOI: [10.3389/fphar.2023.1130287](https://doi.org/10.3389/fphar.2023.1130287)

## Population and dosing

**Population:** adults undergoing general anesthesia surgery · condition general anesthesia surgery · age group adult · n = 47.

**Dosing:** 15 mg, iv, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates/Nalbuphine_Nie2023_estimates.svg" alt="Nalbuphine_Nie2023_estimates diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 32.9 | L/h |
| V1 | V1 | 31 | L |
| Q | Q | 261 | L/h |
| V2 | V2 | 85.9 | L |
| -KA (1/h) θ 5 First order absorption rate constant | kabs | 0.826 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for nalbuphine's bioavailability, clearance, volume of distribution, absorption lag time, central→peripheral rate constant and peripheral→central rate constant.**

The model was built, but nalbuphine's bioavailability, clearance, volume of distribution, absorption lag time, central→peripheral rate constant and peripheral→central rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — nalbuphine: CL 32.9, V1 31, Q 261, V2 85.9, kabs 0.357 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of -ka (1/h) θ 5 first order absorption rate constant: this record has 0.826, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 32.9 | L/h | 9.139e-06 | m3/s | L/h | exact (1) | Nie_2023_table_2:row1:col1 |
| V1 | `Q63` · V1 | 31 | L | 0.031 | m3 | L | exact (1) | Nie_2023_table_2:row2:col1 |
| Q | `Q30` · Q | 261 | L/h | 7.25e-05 | m3/s | L/h | exact (1) | Nie_2023_table_2:row3:col1 |
| V2 | `Q64` · V2 | 85.9 | L | 0.0859 | m3 | L | exact (1) | Nie_2023_table_2:row4:col1 |
| -KA (1/h) θ 5 First order absorption rate constant | `Q49` · kabs | 0.826 | 1/h | 0.0002294 | 1/s | 1/h | review_gapfill (0.7) | Eudy-Byrne_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'ωCL (%CV)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'ωV1 (%CV)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'ωQ (%CV)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'ωV2 (%CV)' routed out of structural estimates ('Between-subject variability')
- implicit units: 'CL' → L/h (from the paper text: "The text states: 'The typical values of nalbuphine PK parameters from the final model were 32.9 L/h for CL...'")
- implicit units: 'V1' → L (from the paper text: "The text states: '...32.9 L/h for CL, 32.5 L for V1...'")
- implicit units: 'Q' → L/h (from the paper text: "The text states: '...32.9 L/h for CL, 32.5 L for V1, 245 L/h for Q...'")
- implicit units: 'V2' → L (from the paper text: "The text states: '...245 L/h for Q and 83.5 L for V2.'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nalbuphine
- population split: 'estimates' subgroup of Nie_2023 (paper reports 2 populations: estimates, final model)
- gap-filled Q49 (kabs) from Eudy-Byrne_2023's review values (primary lacked it)

**Extraction notes:**
- companion parameter table 2 transcribed (26 record(s))
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 4 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.889 (8/9 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[-ka (1/h) θ 5 first order absorption rate constant]` | 0.826 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Nie_2023_table_2:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Nie_2023_table_2:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Eudy-Byrne_2023:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Nie_2023_table_2:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Nie_2023_table_2:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32.9 | ['Nie_2023_table_2:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 32.9 L/h | ['Nie_2023_table_2:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 31 L | ['Nie_2023_table_2:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 85.9 L | ['Nie_2023_table_2:row4:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates/Nalbuphine_Nie2023_estimates_modelica.zip" download>Nalbuphine_Nie2023_estimates_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates/Nalbuphine_Nie2023_estimates_fmi.zip" download>Nalbuphine_Nie2023_estimates_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates/Nalbuphine_Nie2023_estimates_matlab.zip" download>Nalbuphine_Nie2023_estimates_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates/Nalbuphine_Nie2023_estimates_matlab_simbio.zip" download>Nalbuphine_Nie2023_estimates_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates/Nalbuphine_Nie2023_estimates_sbml.zip" download>Nalbuphine_Nie2023_estimates_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates/Nalbuphine_Nie2023_estimates_cellml.zip" download>Nalbuphine_Nie2023_estimates_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3574 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.5e-05 | kg |
| input | model | `Cl` | 9.139e-06 | m3/s |
| input | model | `VdPerKg` | 0.0004429 | m3/kg |
| input | model | `k12` | 0.002339 | 1/s |
| input | model | `k21` | 0.000844 | 1/s |
| input | model | `ka` | 0.0002294 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Nie X, Gao X, Gao J, Heng T, Zhang Y, Sun Y et al. Population pharmacokinetics of nalbuphine in patients undergoing general anesthesia surgery. Frontiers in pharmacology 14:1130287 (2023). [doi:10.3389/fphar.2023.1130287](https://doi.org/10.3389/fphar.2023.1130287)

**This record:** Pharmacolibrary v26.09, model `Nalbuphine_Nie2023_estimates`. <https://pharmacolibrary.github.io/#/drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates>

```bibtex
@misc{pharmacolibrary_NalbuphineNie2023estimates,
  title  = {{Pharmacolibrary model Nalbuphine_Nie2023_estimates}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates},
  note   = {Parameters from doi:10.3389/fphar.2023.1130287},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 15 mg, single dose, first-order absorption (ka 0.826 /h, F 0.9). Dose in the paper: 15 mg.

<dbs-fmusim paramsurl="drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates/Nalbuphine_Nie2023_estimates_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates/Nalbuphine_Nie2023_estimates_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Nalbuphine_Nie2023_estimates_params.json` · controls `Nalbuphine_Nie2023_estimates_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnalbuphine%5D%20Nalbuphine_Nie2023_estimates&body=Drug%3A%20nalbuphine%0ARecord%3A%20Nalbuphine_Nie2023_estimates%0APaper%3A%20Nie_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:33 UTC</sub>
