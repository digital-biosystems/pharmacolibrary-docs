<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;apremilast&quot;,&quot;href&quot;:&quot;drugs/drug_apremilast/&quot;},{&quot;label&quot;:&quot;Okubo_2021 \u00b7 typical_values_rse_for_model_parameters_and_covariate_effects&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Apremilast_Okubo2021_typical_values_rse_for_model_parameters&quot;,&quot;label&quot;:&quot;Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Apremilast_Warren2025_reference&quot;,&quot;label&quot;:&quot;Warren_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_apremilast/Apremilast_Warren2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# apremilast — `Apremilast_Okubo2021_typical_values_rse_for_model_parameters`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="apremilast" model-id="Apremilast_Okubo2021_typical_values_rse_for_model_parameters" status="curated_candidate" stale="false" population="subjects with moderate to severe psoriasis" measured-compound="apremilast" parameterization="apparent" topology="1C"></div>

## Citation
Okubo Y, Ohtsuki M, Komine M, Imafuku S, Kassir N, Petric R et al. Population pharmacokinetic and exposure-response analysis of apremilast in Japanese subjects with moderate to severe psoriasis. The Journal of dermatology 48(11):1652–1664 (2021).
  ·  DOI: [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068)

## Population and dosing

**Population:** subjects with moderate to severe psoriasis · condition moderate to severe psoriasis · age group adult · n = 517.

**Dosing:** 10, 20, 30 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.svg" alt="Apremilast_Okubo2021_typical_values_rse_for_model_parameters diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F, L/h | CL/F | 9.25 | L/h | 3.4 |
| Vc/F, L | V/F | 115 | L | 2.2 |
| Ka, h−1 | kabs | 1.83 | h−1 | 11.7 |
| Lag, h | tlag | 0.290 | h | 11.7 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 9.25 | L/h | 2.569e-06 | m3/s | l/h | 3.4 | exact (1) | jde16068-tbl-0004:row1:col1 |
| Vc/F, L | `Q76` · V/F | 115 | L | 0.115 | m3 | l | 2.2 | exact (1) | jde16068-tbl-0004:row6:col1 |
| Ka, h−1 | `Q49` · kabs | 1.83 | h−1 | 0.0005083 | 1/s | 1/h | 11.7 | exact (1) | jde16068-tbl-0004:row8:col1 |
| Lag, h | `Q83` · tlag | 0.290 | h | 1044 | s | h | 11.7 | llm (0.6) | jde16068-tbl-0004:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Disease status: psoriasis a' — extend the ontology if this is a real PK parameter (source ['jde16068-tbl-0004:row2:col1'])
- dropped unlinked row (NIL): 'Sex: male b' — extend the ontology if this is a real PK parameter (source ['jde16068-tbl-0004:row3:col1'])
- dropped unlinked row (NIL): 'Race: Japanese c' — extend the ontology if this is a real PK parameter (source ['jde16068-tbl-0004:row4:col1'])
- dropped unlinked row (NIL): 'Age d' — extend the ontology if this is a real PK parameter (source ['jde16068-tbl-0004:row5:col1'])
- dropped unlinked row (NIL): 'Bodyweight, kg e' — extend the ontology if this is a real PK parameter (source ['jde16068-tbl-0004:row7:col1'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number 0.834 (source ['jde16068-tbl-0004:footnote', 'jde16068-tbl-0004:footnote', 'jde16068-tbl-0004:footnote', 'jde16068-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number None (source ['jde16068-tbl-0004:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=apremilast
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F, L' is the general volume)
- population split: 'typical values (rse %) for model parameters and covariate effects' subgroup of Okubo_2021 (paper reports 3 populations: geometric mean (cv% geometric mean), geometric mean (geometric cv%), typical values (rse %) for model parameters and covariate effects)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 2 transcribed (9 record(s))
- companion parameter table 5 transcribed (21 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (12/12 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jde16068-tbl-0004:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jde16068-tbl-0004:row8:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['jde16068-tbl-0004:row6:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['jde16068-tbl-0004:row9:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 9.25 L/h | ['jde16068-tbl-0004:row1:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 115 L | ['jde16068-tbl-0004:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=apremilast) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_tmax | reference | pass | 2 | 2.164 | 1.082 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters/Apremilast_Okubo2021_typical_values_rse_for_model_parameters_modelica.zip" download>Apremilast_Okubo2021_typical_values_rse_for_model_parameters_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters/Apremilast_Okubo2021_typical_values_rse_for_model_parameters_fmi.zip" download>Apremilast_Okubo2021_typical_values_rse_for_model_parameters_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters/Apremilast_Okubo2021_typical_values_rse_for_model_parameters_matlab.zip" download>Apremilast_Okubo2021_typical_values_rse_for_model_parameters_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters/Apremilast_Okubo2021_typical_values_rse_for_model_parameters_matlab_simbio.zip" download>Apremilast_Okubo2021_typical_values_rse_for_model_parameters_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters/Apremilast_Okubo2021_typical_values_rse_for_model_parameters_sbml.zip" download>Apremilast_Okubo2021_typical_values_rse_for_model_parameters_sbml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters/Apremilast_Okubo2021_typical_values_rse_for_model_parameters_cellml.zip" download>Apremilast_Okubo2021_typical_values_rse_for_model_parameters_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4605 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1044 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 2.569e-06 | m3/s |
| input | model | `VdPerKg` | 0.001643 | m3/kg |
| input | model | `ka` | 0.0005083 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Okubo Y, Ohtsuki M, Komine M, Imafuku S, Kassir N, Petric R et al. Population pharmacokinetic and exposure-response analysis of apremilast in Japanese subjects with moderate to severe psoriasis. The Journal of dermatology 48(11):1652–1664 (2021). [doi:10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068)

**This record:** Pharmacolibrary v26.09, model `Apremilast_Okubo2021_typical_values_rse_for_model_parameters`. <https://pharmacolibrary.github.io/#/drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters>

```bibtex
@misc{pharmacolibrary_ApremilastOkubo2021typicalvaluesrseformodelparameters,
  title  = {{Pharmacolibrary model Apremilast_Okubo2021_typical_values_rse_for_model_parameters}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters},
  note   = {Parameters from doi:10.1111/1346-8138.16068},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 1.83 /h, lag 17.4 min, F 1). Doses in the paper: 10, 20, 30 mg.

<dbs-fmusim paramsurl="drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters/Apremilast_Okubo2021_typical_values_rse_for_model_parameters_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters/Apremilast_Okubo2021_typical_values_rse_for_model_parameters_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Apremilast_Okubo2021_typical_values_rse_for_model_parameters_params.json` · controls `Apremilast_Okubo2021_typical_values_rse_for_model_parameters_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bapremilast%5D%20Apremilast_Okubo2021_typical_values_rse_for_model_parameters&body=Drug%3A%20apremilast%0ARecord%3A%20Apremilast_Okubo2021_typical_values_rse_for_model_parameters%0APaper%3A%20Okubo_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:40 UTC</sub>
