<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;inositol&quot;,&quot;href&quot;:&quot;drugs/drug_inositol/&quot;},{&quot;label&quot;:&quot;Phelps_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Inositol_Phelps2016_reference&quot;,&quot;label&quot;:&quot;Phelps_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_inositol/Inositol_Phelps2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# inositol — `Inositol_Phelps2016_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="inositol" model-id="Inositol_Phelps2016_reference" status="curated_candidate" stale="false" population="preterm infants" measured-compound="inositol" parameterization="mechanistic" topology="1C"></div>

## Citation
Phelps DL, Ward RM, Williams RL, Nolen TL, Watterberg KL, Oh W et al. Safety and pharmacokinetics of multiple dose myo-inositol in preterm infants. Pediatric research 80(2):209–217 (2016).
  ·  DOI: [10.1038/pr.2016.97](https://doi.org/10.1038/pr.2016.97)

## Population and dosing

**Population:** preterm infants · condition RDS · age group neonate.

**Dosing:** 10, 40, 80 mg/kg/day, intravenous converted to enteral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_inositol/Inositol_Phelps2016_reference/Inositol_Phelps2016_reference.svg" alt="Inositol_Phelps2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| V – volume | V | 0.5610 | L/kg | 0.0345 |
| Cl – clearance | CL | 0.0616 | L/kg/hr | 0.0064 |
| R – endogenous infusion rate | R1 | 2.449 | mg/kg/hr | 0.2762 |
| k – elimination rate (=Cl/V) | kel | 0.1098 | 1/hr | 0.0154 |
| t1/2 – half=life (=.693/k) | t1/2z | 6.31 | hr | 0.605 |
| E – concentration due to endogenous infusion (=R/Cl) | equation variable | 40.71 | Standard Error | 1.655 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (R1 and equation variable), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[e - concentration due to endogenous infusion].parameter_id`: this record has Q900, the second reading Q38; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| V – volume | `Q61` · V | 0.5610 | L/kg | 0.03927 | m3 | L | 0.0345 | llm_confirmed (0.6) | T4:row3:col2, T4:row3:col3, T4:row3:col4 |
| Cl – clearance | `Q22` · CL | 0.0616 | L/kg/hr | 1.198e-06 | m3/s | L/h | 0.0064 | llm_confirmed (0.6) | T4:row4:col2, T4:row4:col3, T4:row4:col4 |
| R – endogenous infusion rate | `Q307` · R1 | 2.449 | mg/kg/hr |  |  | mg/kg/hr | 0.2762 | llm_confirmed (0.6) | T4:row5:col2, T4:row5:col3, T4:row5:col4 |
| k – elimination rate (=Cl/V) | `Q47` · kel | 0.1098 | 1/hr | 3.05e-05 | 1/s | 1/h | 0.0154 | llm_confirmed (0.6) | T4:row8:col1, T4:row8:col2, T4:row8:col3, T4:row8:col4 |
| t1/2 – half=life (=.693/k) | `Q57` · t1/2z | 6.31 | hr | 2.272e+04 | s | h | 0.605 | llm_confirmed (0.6) | T4:row9:col2, T4:row9:col3, T4:row9:col4 |
| E – concentration due to endogenous infusion (=R/Cl) | `Q900` · equation variable | 40.71 | Standard Error |  |  | s·tandarderror | 1.655 | llm (0.6) | T4:row10:col2, T4:row10:col3, T4:row10:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'volume (uv)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'clearance (ucl)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'endogenous infusion rate (ur)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'Standard Error' (V)
- unit_dimension_unknown: 'Standard Error' (CL)
- unit_dimension_unknown: 'Standard Error' (R1)
- unit_dimension_unknown: 'Standard Error' (kel)
- unit_dimension_unknown: 'Standard Error' (t1/2z)
- unit_dimension_unknown: 'Standard Error' (equation variable)
- unit_dimension_unknown: 'uV' (V)
- dropped duplicate Q61 ('Volume (uV)', value '0.1181') — already have one for this compound
- unit_dimension_unknown: 'uCl' (CL)
- dropped duplicate Q22 ('Clearance (uCl)', value '0.3508') — already have one for this compound
- dropped PD-category row 'Endogenous infusion rate (uR)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Phelps_2016_table_5:row2:col2', 'Phelps_2016_table_5:row2:col3'])
- implicit units: 'V – volume' → L/kg (from the paper text: 'The Results section explicitly states: "Analyses showed a mean volume of distribution 0.657 L/kg".')
- implicit units: 'Cl – clearance' → L/kg/hr (from the paper text: 'The Results section explicitly states: "clearance 0.058 L/kg/hr".')
- implicit units: 'R – endogenous infusion rate' → mg/kg/hr (from the popPK convention: 'The paper does not explicitly state the unit for the endogenous rate R in the table caption or text excerpts. However, t')
- implicit units: 'k – elimination rate (=Cl/V)' → 1/hr (from the popPK convention: 'The parameter is the elimination rate constant k. The text states half-life is 7.90 hr (and other values in hrs), and k ')
- implicit units: 't1/2 – half=life (=.693/k)' → hr (from the paper text: 'The Results section explicitly states: "half-life 7.90 hr". The text also mentions "half-life estimates range from the 5')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=inositol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Phelps_2016_table_5:row1:col1 = '0.0a'
- unparsed cell Phelps_2016_table_5:row2:col1 = '0.0a'
- companion parameter table 5 transcribed (4 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (14/16 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[e - concentration due to endogenous infusion].parameter_id` | Q900 | Q38 | mismatch |
| `gpt-oss-120b` | `parameters[r - endogenous infusion rate]` | 2.449 |  | only_one_extracted |

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
| C1_half_life_beta | pass | 5.22 | 6.313 | 1.209 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T4:row4:col2', 'T4:row4:col3', 'T4:row4:col4'] |
| C5_dimension_Q307 | pass | [mass] / [time] |  |  |  | ['T4:row5:col2', 'T4:row5:col3', 'T4:row5:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['T4:row8:col1', 'T4:row8:col2', 'T4:row8:col3', 'T4:row8:col4'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['T4:row9:col2', 'T4:row9:col3', 'T4:row9:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['T4:row3:col2', 'T4:row3:col3', 'T4:row3:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0616 |  |  | ['T4:row4:col2', 'T4:row4:col3', 'T4:row4:col4'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.31 L/h |  |  | ['T4:row4:col2', 'T4:row4:col3', 'T4:row4:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 39.3 L |  |  | ['T4:row3:col2', 'T4:row3:col3', 'T4:row3:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=inositol) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | pass | 5.22 | 6.313 | 1.209 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 7.9 | 6.313 | 0.7991 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 6.31 | 6.313 | 1 | hr→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_inositol/Inositol_Phelps2016_reference/Inositol_Phelps2016_reference_modelica.zip" download>Inositol_Phelps2016_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_inositol/Inositol_Phelps2016_reference/Inositol_Phelps2016_reference_fmi.zip" download>Inositol_Phelps2016_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_inositol/Inositol_Phelps2016_reference/Inositol_Phelps2016_reference_matlab.zip" download>Inositol_Phelps2016_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_inositol/Inositol_Phelps2016_reference/Inositol_Phelps2016_reference_matlab_simbio.zip" download>Inositol_Phelps2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_inositol/Inositol_Phelps2016_reference/Inositol_Phelps2016_reference_sbml.zip" download>Inositol_Phelps2016_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_inositol/Inositol_Phelps2016_reference/Inositol_Phelps2016_reference_cellml.zip" download>Inositol_Phelps2016_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1802 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.198e-06 | m3/s |
| input | model | `VdPerKg` | 0.000561 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Phelps DL, Ward RM, Williams RL, Nolen TL, Watterberg KL, Oh W et al. Safety and pharmacokinetics of multiple dose myo-inositol in preterm infants. Pediatric research 80(2):209–217 (2016). [doi:10.1038/pr.2016.97](https://doi.org/10.1038/pr.2016.97)

**This record:** Pharmacolibrary v26.09, model `Inositol_Phelps2016_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_inositol/Inositol_Phelps2016_reference>

```bibtex
@misc{pharmacolibrary_InositolPhelps2016reference,
  title  = {{Pharmacolibrary model Inositol_Phelps2016_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_inositol/Inositol_Phelps2016_reference},
  note   = {Parameters from doi:10.1038/pr.2016.97},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_inositol/Inositol_Phelps2016_reference/Inositol_Phelps2016_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_inositol/Inositol_Phelps2016_reference/Inositol_Phelps2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Inositol_Phelps2016_reference_params.json` · controls `Inositol_Phelps2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Binositol%5D%20Inositol_Phelps2016_reference&body=Drug%3A%20inositol%0ARecord%3A%20Inositol_Phelps2016_reference%0APaper%3A%20Phelps_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_inositol/Inositol_Phelps2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:34 UTC</sub>
