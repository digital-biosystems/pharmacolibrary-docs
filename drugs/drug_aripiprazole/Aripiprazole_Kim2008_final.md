<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;aripiprazole&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/&quot;},{&quot;label&quot;:&quot;Kim_2008 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aripiprazole_Kim2008_final&quot;,&quot;label&quot;:&quot;Kim_2008_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Kim2008_final.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Aripiprazole_Simon2015_reference&quot;,&quot;label&quot;:&quot;Simon_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_base&quot;,&quot;label&quot;:&quot;Hermans_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_base.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_final&quot;,&quot;label&quot;:&quot;Hermans_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_final.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aripiprazole — `Aripiprazole_Kim2008_final`

> ## <span class="pk-badge pk-badge--blue">Simulated</span>

<div class="pk-model-meta" hidden drug="aripiprazole" model-id="Aripiprazole_Kim2008_final" status="simulated" stale="false" population="psychiatric patients with schizophrenia, schizophreniform disorder, and schizoaffective disorder" measured-compound="aripiprazole" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Kim JR, Seo HB, Cho JY, Kang DH, Kim YK, Bahk WM et al. Population pharmacokinetic modelling of aripiprazole and its active metabolite, dehydroaripiprazole, in psychiatric patients. British journal of clinical pharmacology 66(6):802–810 (2008).
  ·  DOI: [10.1111/j.1365-2125.2008.03223.x](https://doi.org/10.1111/j.1365-2125.2008.03223.x)

## Population and dosing

**Population:** psychiatric patients with schizophrenia, schizophreniform disorder, and schizoaffective disorder · condition schizophrenia, schizophreniform disorder, schizoaffective disorder · age group adult · n = 80.

**Dosing:** 5, 15, 45 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent–metabolite model: parent with 1 compartment(s); metabolite dehydroaripiprazole: 1 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_aripiprazole/Aripiprazole_Kim2008_final/Aripiprazole_Kim2008_final.svg" alt="Aripiprazole_Kim2008_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/FI (l h -1 ) † | CL | 3.15 | l h -1 |
| V/F (l) | V/F | 193 | l |
| ka (h -1 ) | kabs | 1.06 | h -1 |
| CL(m)/fm (l h -1 ) | CL/F | 8.02 | l h -1 |
| V(m)/fm (l) | V1/F | 587 | l |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Simulated: every check that could be run on this record passed; no value reported in the paper was compared with the simulation.**

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/FI (l h -1 ) † | `Q22` · CL | 3.15 | l h -1 | 8.75e-07 | m3/s | l/h | exact (1) | tab_1:row4:col3 |
| V/F (l) | `Q76` · V/F | 193 | l | 0.193 | m3 | l | exact (1) | tab_1:row8:col3 |
| ka (h -1 ) | `Q49` · kabs | 1.06 | h -1 | 0.0002944 | 1/s | 1/h | exact (1) | tab_1:row9:col3 |
| CL(m)/fm (l h -1 ) | `Q27` · CL/F | 8.02 | l h -1 | 2.228e-06 | m3/s | l/h | exact (1) | tab_1:row14:col3 |
| V(m)/fm (l) | `Q290` · V1/F | 587 | l | 0.587 | m3 | l | exact (1) | tab_1:row15:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- routed 's 2' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- routed 's 2 m' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=aripiprazole
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- model-stage split: 'final model / estimate (se)' is the final model of Kim_2008 (paper reports 2 stages: base model / estimate (se), final model / estimate (se)); same population, different model-building step
- row roles: per-genotype parameters — typical value from the reference group: CL/FI (l h -1 ) †
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 10 linked by role; re-tagged parent→dehydroaripiprazole ×8

**Extraction notes:**
- table tab_1: unbound_uncertainty
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row4:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row14:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab_1:row15:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row9:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_1:row8:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.15 L/h | ['tab_1:row4:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.02 L/h | ['tab_1:row14:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 587 L | ['tab_1:row15:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 193 L | ['tab_1:row8:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_metabolite_built[dehydroaripiprazole] | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.587, 'CL': 2.2277777777777777e-06, 'formation': 8.75e-07} |  | dehydroaripiprazole = compartment M1 with its own numbers |
| T3_metabolite_output[dehydroaripiprazole] | pass |  | 3.4e-06 |  | C_M1 (dehydroaripiprazole) must rise above 0 when the parent is dosed |
| T3_molar_mass[dehydroaripiprazole] | pass |  | {'MW': 0.448385, 'MW_m1': 0.446372} |  | formation is molecule-for-molecule |
| T3_output_variable | pass | C_central (measured=aripiprazole) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_shared_parameters | skipped |  |  |  | parent–metabolite template: every compound has its own slot |
| T3_topology_template | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C |  | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check | pass |  | verdict confirmed; agreement 1.0 (9 of 9 compared fields agree); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 1 | a second reader did not contradict the extraction |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Kim2008_final/Aripiprazole_Kim2008_final_modelica.zip" download>Aripiprazole_Kim2008_final_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Kim2008_final/Aripiprazole_Kim2008_final_fmi.zip" download>Aripiprazole_Kim2008_final_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Kim2008_final/Aripiprazole_Kim2008_final_matlab.zip" download>Aripiprazole_Kim2008_final_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Kim2008_final/Aripiprazole_Kim2008_final_sbml.zip" download>Aripiprazole_Kim2008_final_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Kim2008_final/Aripiprazole_Kim2008_final_cellml.zip" download>Aripiprazole_Kim2008_final_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-06 | kg |
| input | model | `CL1` | 0 | m3/s |
| input | model | `CLm1` | 2.228e-06 | m3/s |
| input | model | `MW` | 0.4484 |  |
| input | model | `MW_m1` | 0.4464 |  |
| input | model | `Vd1` | 0.193 |  |
| input | model | `Vd1m1` | 0.587 | m3 |
| input | model | `ka` | 0.0002944 | 1/s |
| input | model | `q1_m11` | 8.75e-07 | m3/s |
| output | concentration | `central.C` |  | kg/m3 |
| output | concentration | `C_M1` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3M_9C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- Parent–metabolite exports (MATLAB, SBML, CellML) are checked against OpenModelica, Octave and roadrunner to 1e-5 in the generator's test suite (`test/test_three_m_formats.py`).

## How to cite

**Source paper** (the parameters are its): Kim JR, Seo HB, Cho JY, Kang DH, Kim YK, Bahk WM et al. Population pharmacokinetic modelling of aripiprazole and its active metabolite, dehydroaripiprazole, in psychiatric patients. British journal of clinical pharmacology 66(6):802–810 (2008). [doi:10.1111/j.1365-2125.2008.03223.x](https://doi.org/10.1111/j.1365-2125.2008.03223.x)

**This record:** Pharmacolibrary, model `Aripiprazole_Kim2008_final`. <https://pharmacolibrary.github.io/#/drugs/drug_aripiprazole/Aripiprazole_Kim2008_final>

```bibtex
@misc{pharmacolibrary_AripiprazoleKim2008final,
  title  = {{Pharmacolibrary model Aripiprazole_Kim2008_final}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_aripiprazole/Aripiprazole_Kim2008_final},
  note   = {Parameters from doi:10.1111/j.1365-2125.2008.03223.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 1.06 /h, F 1). Doses in the paper: 5, 15, 45 mg.

<dbs-fmusim paramsurl="drugs/drug_aripiprazole/Aripiprazole_Kim2008_final/Aripiprazole_Kim2008_final_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_aripiprazole/Aripiprazole_Kim2008_final/Aripiprazole_Kim2008_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Aripiprazole_Kim2008_final_params.json` · controls `Aripiprazole_Kim2008_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baripiprazole%5D%20Aripiprazole_Kim2008_final&body=Drug%3A%20aripiprazole%0ARecord%3A%20Aripiprazole_Kim2008_final%0APaper%3A%20Kim_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aripiprazole/Aripiprazole_Kim2008_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:22 UTC</sub>
