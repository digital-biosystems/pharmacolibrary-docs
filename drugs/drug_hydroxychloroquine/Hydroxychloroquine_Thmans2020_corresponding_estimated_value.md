<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;hydroxychloroquine&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/&quot;},{&quot;label&quot;:&quot;Th\u00e9mans_2020 \u00b7 corresponding_estimated_value_in_model_by_carmichael_et_al_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_estimate&quot;,&quot;label&quot;:&quot;Balevic_2019_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_postnatal&quot;,&quot;label&quot;:&quot;Balevic_2019_postnatal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_postnatal.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_prenatal&quot;,&quot;label&quot;:&quot;Balevic_2019_prenatal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Thmans2020_corresponding_estimated_value&quot;,&quot;label&quot;:&quot;Th\u00e9mans_2020_corresponding_estimated_value_in_model_by_carmichael_et_al_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Hydroxychloroquine_Thmans2020_estimate&quot;,&quot;label&quot;:&quot;Th\u00e9mans_2020_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Zahr2021_reference&quot;,&quot;label&quot;:&quot;Zahr_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# hydroxychloroquine — `Hydroxychloroquine_Thmans2020_corresponding_estimated_value`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="hydroxychloroquine" model-id="Hydroxychloroquine_Thmans2020_corresponding_estimated_value" status="curated_candidate" stale="false" population="COVID-19 patients" measured-compound="hydroxychloroquine" parameterization="mechanistic" topology="1C"></div>

## Citation
Thémans P, Belkhir L, Dauby N, Yombi JC, De Greef J, Delongie KA et al. Population Pharmacokinetics of Hydroxychloroquine in COVID-19 Patients: Implications for Dose Optimization. European journal of drug metabolism and pharmacokinetics 45(6):703–713 (2020).
  ·  DOI: [10.1007/s13318-020-00648-y](https://doi.org/10.1007/s13318-020-00648-y)

## Population and dosing

**Population:** COVID-19 patients · condition COVID-19 · age group adult · n = 48.

**Dosing:** 200, 400 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value/Hydroxychloroquine_Thmans2020_corresponding_estimated_value.svg" alt="Hydroxychloroquine_Thmans2020_corresponding_estimated_value diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Ka (/h) | kabs | 0.765 | /h | 0.94 (None% RSE) |
| V (L) | V | 605 | L |  |
| CL (L/h) | CL | 9.89 | L/h | 0.127 (None% RSE) |
| F | Fab | 0.746 |  |  |
| Tlag (h) | tlag | 0.445 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has hydroxychloroquine, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Ka (/h) | `Q49` · kabs | 0.765 | /h | 0.0002125 | 1/s | 1/h | exact (1) | Tab2:row1:col4 | 0.94 (None% RSE) |
| V (L) | `Q61` · V | 605 | L | 0.605 | m3 | l | exact (1) | Tab2:row2:col4 |  |
| CL (L/h) | `Q22` · CL | 9.89 | L/h | 2.747e-06 | m3/s | l/h | exact (1) | Tab2:row3:col4 | 0.127 (None% RSE) |
| F | `Q40` · Fab | 0.746 |  |  |  |  | exact (1) | Tab2:row4:col4 |  |
| Tlag (h) | `Q83` · tlag | 0.445 | h | 1602 | s | h | exact (1) | Tab2:row5:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Εprop (σ2)' routed out of structural estimates ('IIV on Tlag (ω2)')
- table section iiv: 'Εadd (σ2)' routed out of structural estimates ('IIV on Tlag (ω2)')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=hydroxychloroquine
- population split: 'corresponding estimated value in model by carmichael et al. [2]' subgroup of Thémans_2020 (paper reports 2 populations: corresponding estimated value in model by carmichael et al. [2], estimate)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row1:col2 = '7.31 (1.81–9.44)'
- unparsed cell Tab2:row2:col2 = '869.3 (679–1130)'
- unparsed cell Tab2:row3:col2 = '15.4 (12.1–17.6)'
- unparsed cell Tab2:row6:col2 = '1.39 (0.56–2.52)'
- unparsed cell Tab2:row8:col2 = '0.13 (0.04, 0.21)'
- unparsed cell Tab2:row9:col2 = '0.26 (0.13, 0.38)'
- unparsed cell Tab2:row12:col2 = '0.028 (0.01, 0.045)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | hydroxychloroquine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | hydroxychloroquine | unknown | mismatch |

</details>

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row1:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row2:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.89 | ['Tab2:row3:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.89 L/h | ['Tab2:row3:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 605 L | ['Tab2:row2:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=hydroxychloroquine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value/Hydroxychloroquine_Thmans2020_corresponding_estimated_value_modelica.zip" download>Hydroxychloroquine_Thmans2020_corresponding_estimated_value_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value/Hydroxychloroquine_Thmans2020_corresponding_estimated_value_fmi.zip" download>Hydroxychloroquine_Thmans2020_corresponding_estimated_value_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value/Hydroxychloroquine_Thmans2020_corresponding_estimated_value_matlab.zip" download>Hydroxychloroquine_Thmans2020_corresponding_estimated_value_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value/Hydroxychloroquine_Thmans2020_corresponding_estimated_value_matlab_simbio.zip" download>Hydroxychloroquine_Thmans2020_corresponding_estimated_value_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value/Hydroxychloroquine_Thmans2020_corresponding_estimated_value_sbml.zip" download>Hydroxychloroquine_Thmans2020_corresponding_estimated_value_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value/Hydroxychloroquine_Thmans2020_corresponding_estimated_value_cellml.zip" download>Hydroxychloroquine_Thmans2020_corresponding_estimated_value_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3359 | kg/mol |
| input | dosing | `F` | 0.746 | 1 |
| input | dosing | `Tlag` | 1602 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0002 | kg |
| input | model | `Cl` | 2.747e-06 | m3/s |
| input | model | `VdPerKg` | 0.008643 | m3/kg |
| input | model | `ka` | 0.0002125 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Thémans P, Belkhir L, Dauby N, Yombi JC, De Greef J, Delongie KA et al. Population Pharmacokinetics of Hydroxychloroquine in COVID-19 Patients: Implications for Dose Optimization. European journal of drug metabolism and pharmacokinetics 45(6):703–713 (2020). [doi:10.1007/s13318-020-00648-y](https://doi.org/10.1007/s13318-020-00648-y)

**This record:** Pharmacolibrary v26.09, model `Hydroxychloroquine_Thmans2020_corresponding_estimated_value`. <https://pharmacolibrary.github.io/#/drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value>

```bibtex
@misc{pharmacolibrary_HydroxychloroquineThmans2020correspondingestimatedvalue,
  title  = {{Pharmacolibrary model Hydroxychloroquine_Thmans2020_corresponding_estimated_value}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value},
  note   = {Parameters from doi:10.1007/s13318-020-00648-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 0.765 /h, lag 26.7 min, F 0.746). Doses in the paper: 200, 400 mg.

<dbs-fmusim paramsurl="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value/Hydroxychloroquine_Thmans2020_corresponding_estimated_value_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value/Hydroxychloroquine_Thmans2020_corresponding_estimated_value_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Hydroxychloroquine_Thmans2020_corresponding_estimated_value_params.json` · controls `Hydroxychloroquine_Thmans2020_corresponding_estimated_value_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydroxychloroquine%5D%20Hydroxychloroquine_Thmans2020_corresponding_estimated_value&body=Drug%3A%20hydroxychloroquine%0ARecord%3A%20Hydroxychloroquine_Thmans2020_corresponding_estimated_value%0APaper%3A%20Th%C3%A9mans_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:02 UTC</sub>
