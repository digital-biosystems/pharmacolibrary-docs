<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Topiramate&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/&quot;},{&quot;label&quot;:&quot;Hoebregts_2021 \u00b7 present_case_report&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Topiramate_Donovan2016_reference&quot;,&quot;label&quot;:&quot;Donovan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Donovan2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Hoebregts2021_present_case_report&quot;,&quot;label&quot;:&quot;Hoebregts_2021_present_case_report&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Topiramate_Lynch2010_reference&quot;,&quot;label&quot;:&quot;Lynch_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Lynch2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Wei2023_reference&quot;,&quot;label&quot;:&quot;Wei_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Wei2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Elewa2023_reference&quot;,&quot;label&quot;:&quot;Elewa_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Elewa2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Hoebregts2021_general_population&quot;,&quot;label&quot;:&quot;Hoebregts_2021_general_population&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Hoebregts2021_general_population.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Topiramate — `Topiramate_Hoebregts2021_present_case_report`

> ## <span class="pk-badge pk-badge--blue">Simulated</span>

<div class="pk-model-meta" hidden drug="Topiramate" model-id="Topiramate_Hoebregts2021_present_case_report" status="simulated" stale="false" population="adult patients (case series including one acute overdose)" measured-compound="Topiramate" parameterization="mechanistic" topology="1C"></div>

## Citation
Hoebregts VMG, Foudraine N, Janssen PKC, le Noble JLML. Iatrogenic topiramate poisoning in an ICU patient: Focus on topiramate peak time prolongation. International journal of clinical pharmacology and therapeutics 59(12):784–786 (2021).
  ·  DOI: [10.5414/CP204067](https://doi.org/10.5414/CP204067)

## Population and dosing

**Population:** adult patients (case series including one acute overdose) · condition acute poisoning and routine therapy · age group adult · n = 3.

**Dosing:** 100, 250, 2500, 8000 mg, oral, single.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report/Topiramate_Hoebregts2021_present_case_report.svg" alt="Topiramate_Hoebregts2021_present_case_report diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| tmax (h), ranges | tmax | 5.28 | h |
| T1/2 (h) | t1/2z | 16.48 | h |
| Vd (L/kg) | V | 0.69 | L/kg |
| Total body clearance (L/h) | CL | 2.39 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| tmax (h), ranges | `Q56` · tmax | 5.28 | h | 1.901e+04 | s | h | llm_confirmed (0.6) | Table1:row2:col2 |
| T1/2 (h) | `Q57` · t1/2z | 16.48 | h | 5.933e+04 | s | h | half_life_rule (0.95) | Table1:row3:col2 |
| Vd (L/kg) | `Q61` · V | 0.69 | L/kg | 0.0483 | m3 | l/kg | exact (1) | Table1:row4:col2 |
| Total body clearance (L/h) | `Q22` · CL | 2.39 | L/h | 6.639e-07 | m3/s | l/h | llm_confirmed (0.6) | Table1:row5:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Topiramate
- population split: 'present case report' subgroup of Hoebregts_2021 (paper reports 3 populations: general population, patient by brandt et al. [2], present case report)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Table1: ambiguous_numeric_format
- table Table1: unbound_uncertainty

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Table1:row5:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Table1:row2:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Table1:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Table1:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.39 | ['Table1:row5:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.39 L/h | ['Table1:row5:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 48.3 L | ['Table1:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=Topiramate) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_tmax | reference | skipped |  | 0.1833 | non-numeric value |
| T1_tmax | reference | skipped |  | 0.1833 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report/Topiramate_Hoebregts2021_present_case_report_modelica.zip" download>Topiramate_Hoebregts2021_present_case_report_modelica.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report/Topiramate_Hoebregts2021_present_case_report_fmi.zip" download>Topiramate_Hoebregts2021_present_case_report_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report/Topiramate_Hoebregts2021_present_case_report_matlab.zip" download>Topiramate_Hoebregts2021_present_case_report_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report/Topiramate_Hoebregts2021_present_case_report_matlab_simbio.zip" download>Topiramate_Hoebregts2021_present_case_report_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report/Topiramate_Hoebregts2021_present_case_report_sbml.zip" download>Topiramate_Hoebregts2021_present_case_report_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report/Topiramate_Hoebregts2021_present_case_report_cellml.zip" download>Topiramate_Hoebregts2021_present_case_report_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3394 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 6.639e-07 | m3/s |
| input | model | `VdPerKg` | 0.00069 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Hoebregts VMG, Foudraine N, Janssen PKC, le Noble JLML. Iatrogenic topiramate poisoning in an ICU patient: Focus on topiramate peak time prolongation. International journal of clinical pharmacology and therapeutics 59(12):784–786 (2021). [doi:10.5414/CP204067](https://doi.org/10.5414/CP204067)

**This record:** Pharmacolibrary, model `Topiramate_Hoebregts2021_present_case_report`. <https://pharmacolibrary.github.io/#/drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report>

```bibtex
@misc{pharmacolibrary_TopiramateHoebregts2021presentcasereport,
  title  = {{Pharmacolibrary model Topiramate_Hoebregts2021_present_case_report}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report},
  note   = {Parameters from doi:10.5414/CP204067},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 100 mg infusion over 10 min, single dose. Doses in the paper: 100, 250, 2500, 8000 mg.

<dbs-fmusim paramsurl="drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report/Topiramate_Hoebregts2021_present_case_report_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report/Topiramate_Hoebregts2021_present_case_report_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Topiramate_Hoebregts2021_present_case_report_params.json` · controls `Topiramate_Hoebregts2021_present_case_report_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btopiramate%5D%20Topiramate_Hoebregts2021_present_case_report&body=Drug%3A%20topiramate%0ARecord%3A%20Topiramate_Hoebregts2021_present_case_report%0APaper%3A%20Hoebregts_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 13:59 UTC</sub>
