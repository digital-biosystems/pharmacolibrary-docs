<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;propafenone&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/&quot;},{&quot;label&quot;:&quot;Connolly_1984 \u00b7 dose_150_mg_every_8_hr&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propafenone_Connolly1984_dose_150_mg_every_8_hr&quot;,&quot;label&quot;:&quot;Connolly_1984_dose_150_mg_every_8_hr&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Propafenone_Connolly1984_dose_300_mg_every_8_hr&quot;,&quot;label&quot;:&quot;Connolly_1984_dose_300_mg_every_8_hr&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/Propafenone_Connolly1984_dose_300_mg_every_8_hr.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propafenone — `Propafenone_Connolly1984_dose_150_mg_every_8_hr`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 5, model 3.71).

<div class="pk-model-meta" hidden drug="propafenone" model-id="Propafenone_Connolly1984_dose_150_mg_every_8_hr" status="needs_review" stale="false" population="patients with ventricular arrhythmias" measured-compound="propafenone" parameterization="mechanistic" topology="1C"></div>

## Citation
Connolly S, Lebsack C, Winkle RA, Harrison DC, Kates RE. Propafenone disposition kinetics in cardiac arrhythmia. Clinical pharmacology and therapeutics 36(2):163–168 (1984).
  ·  DOI: [10.1038/clpt.1984.157](https://doi.org/10.1038/clpt.1984.157)

## Population and dosing

**Population:** patients with ventricular arrhythmias · condition ventricular arrhythmias · age group adult · n = &gt;=15.

**Dosing:** 1, 150, 300 mg/kg, mg, iv, oral, multiple, every 8 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr.svg" alt="Propafenone_Connolly1984_dose_150_mg_every_8_hr diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cl | CL | 11.2 | ml/min/kg |
| Vd | V | 3.6 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.444). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 5, model 3.71).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — propafenone: CL 11.2 ml/min/kg, V 3.6 L/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of 12: this record has none, the second reading 1.69; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cl | `Q22` · CL | 11.2 | ml/min/kg | 1.307e-05 | m3/s | L/h | exact (1) | Connolly_1984:other_prose |
| Vd | `Q61` · V | 3.6 | L/kg | 0.252 | m3 | L | exact (1) | Connolly_1984:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['Connolly_1984_table_5:row0:col1'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['Connolly_1984_table_5:row1:col1'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['Connolly_1984_table_5:row2:col1'])
- dropped unlinked row (NIL): '11' — extend the ontology if this is a real PK parameter (source ['Connolly_1984_table_5:row3:col1'])
- dropped unlinked row (NIL): '12' — extend the ontology if this is a real PK parameter (source ['Connolly_1984_table_5:row4:col1'])
- dropped unlinked row (NIL): '14' — extend the ontology if this is a real PK parameter (source ['Connolly_1984_table_5:row5:col1'])
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['Connolly_1984_table_5:row6:col1'])
- dropped unlinked row (NIL): 'X̄' — extend the ontology if this is a real PK parameter (source ['Connolly_1984_table_5:row7:col1'])
- dropped unlinked row (NIL): '±SD' — extend the ontology if this is a real PK parameter (source ['Connolly_1984_table_5:row8:col1'])
- table mostly unlinked (9/9 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('Cl'=11.2) from results prose — parameter table was unreadable
- salvaged Q61 ('Vd'=3.6) from results prose — parameter table was unreadable
- implicit units: 'Vd' → L/kg (from the paper text: "The text states: 'Vd (X = 3.0 ± 1.5 //kg) were calculated from the fitted parameters and are included in Table II.' The ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=propafenone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'dose (n = 8) 150 mg every 8 hr' subgroup of Connolly_1984 (paper reports 2 populations: dose (n = 8) 150 mg every 8 hr, dose (n = 8) 300 mg every 8 hr)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[12]` |  | 1.69 | only_one_extracted |
| `gpt-oss:120b` | `parameters[14]` |  | 1.24 | only_one_extracted |
| `gpt-oss:120b` | `parameters[8]` |  | 0.30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 11.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` | 3.6 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Connolly_1984:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.2 | ['Connolly_1984:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 47 L/h | ['Connolly_1984:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 252 L | ['Connolly_1984:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=propafenone) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | fail | 5 | 3.713 | 0.7426 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5 | 3.713 | 0.7426 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 10 | 3.713 | 0.3713 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3 | 3.713 | 1.238 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 4.7 | 3.713 | 0.79 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 16.8 | 3.713 | 0.221 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.3 | 3.713 | 1.614 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5 | 3.713 | 0.7426 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.4 | 3.713 | 1.547 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 10.3 | 3.713 | 0.3605 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.7 | 3.713 | 0.6514 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.9 | 3.713 | 1.954 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 15.3 | 3.713 | 0.2427 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.8 | 3.713 | 0.6401 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.9 | 3.713 | 1.28 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.8 | 3.713 | 1.326 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 4.2 | 3.713 | 0.884 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 4.9 | 3.713 | 0.7577 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.3 | 3.713 | 1.614 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.5 | 3.713 | 1.485 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.9 | 3.713 | 1.28 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 6.2 | 3.713 | 0.5988 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5 | 3.713 | 0.7426 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3.6 | 3.713 | 1.031 | hr→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr_modelica.zip" download>Propafenone_Connolly1984_dose_150_mg_every_8_hr_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr_fmi.zip" download>Propafenone_Connolly1984_dose_150_mg_every_8_hr_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr_matlab.zip" download>Propafenone_Connolly1984_dose_150_mg_every_8_hr_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr_matlab_simbio.zip" download>Propafenone_Connolly1984_dose_150_mg_every_8_hr_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr_sbml.zip" download>Propafenone_Connolly1984_dose_150_mg_every_8_hr_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr_cellml.zip" download>Propafenone_Connolly1984_dose_150_mg_every_8_hr_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3414 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0003 | kg |
| input | model | `Cl` | 1.307e-05 | m3/s |
| input | model | `VdPerKg` | 0.0036 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Connolly S, Lebsack C, Winkle RA, Harrison DC, Kates RE. Propafenone disposition kinetics in cardiac arrhythmia. Clinical pharmacology and therapeutics 36(2):163–168 (1984). [doi:10.1038/clpt.1984.157](https://doi.org/10.1038/clpt.1984.157)

**This record:** Pharmacolibrary v26.09, model `Propafenone_Connolly1984_dose_150_mg_every_8_hr`. <https://pharmacolibrary.github.io/#/drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr>

```bibtex
@misc{pharmacolibrary_PropafenoneConnolly1984dose150mgevery8hr,
  title  = {{Pharmacolibrary model Propafenone_Connolly1984_dose_150_mg_every_8_hr}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr},
  note   = {Parameters from doi:10.1038/clpt.1984.157},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 300 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 300 mg parenteral (C01BC03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Propafenone_Connolly1984_dose_150_mg_every_8_hr_params.json` · controls `Propafenone_Connolly1984_dose_150_mg_every_8_hr_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropafenone%5D%20Propafenone_Connolly1984_dose_150_mg_every_8_hr&body=Drug%3A%20propafenone%0ARecord%3A%20Propafenone_Connolly1984_dose_150_mg_every_8_hr%0APaper%3A%20Connolly_1984%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-08 20:59 UTC</sub>
