<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;propafenone&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/&quot;},{&quot;label&quot;:&quot;Connolly_1984 \u00b7 dose_150_mg_every_8_hr&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propafenone_Connolly1984_dose_150_mg_every_8_hr&quot;,&quot;label&quot;:&quot;Connolly_1984_dose_150_mg_every_8_hr&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Propafenone_Connolly1984_dose_300_mg_every_8_hr&quot;,&quot;label&quot;:&quot;Connolly_1984_dose_300_mg_every_8_hr&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/Propafenone_Connolly1984_dose_300_mg_every_8_hr.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propafenone — `Propafenone_Connolly1984_dose_150_mg_every_8_hr`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 5, model 3.71).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — propafenone: CL 11.2 ml/min/kg, V 3.6 L/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of 12: this record has none, the second reading 1.69; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Connolly S et al., Propafenone disposition kinetics in car…, Clinical pharmacology and t… (1984)
  ·  DOI: [10.1038/clpt.1984.157](https://doi.org/10.1038/clpt.1984.157)

<div class="pk-model-meta" hidden drug="propafenone" model-id="Propafenone_Connolly1984_dose_150_mg_every_8_hr" status="needs_review" stale="false" population="patients with ventricular arrhythmias" measured-compound="propafenone" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cl | `Q22` · CL | 11.2 | ml/min/kg | 1.3066666666666666e-05 | L/h | not captured | exact (1.0) | Connolly_1984:other_prose | — | not captured |
| Vd | `Q61` · V | 3.6 | L/kg | 0.252 | L | not captured | exact (1.0) | Connolly_1984:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss:120b` | `parameters[12]` | not captured | 1.69 | only_one_extracted |
| `gpt-oss:120b` | `parameters[14]` | not captured | 1.24 | only_one_extracted |
| `gpt-oss:120b` | `parameters[8]` | not captured | 0.30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 11.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` | 3.6 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Connolly_1984:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.2 | not captured | not captured | ['Connolly_1984:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 47 L/h | not captured | not captured | ['Connolly_1984:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 252 L | not captured | not captured | ['Connolly_1984:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=propafenone) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | fail | 5.0 | 3.712866771619799 | 0.7426 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.0 | 3.712866771619799 | 0.7426 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 10.0 | 3.712866771619799 | 0.3713 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3.0 | 3.712866771619799 | 1.2376 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 4.7 | 3.712866771619799 | 0.79 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 16.8 | 3.712866771619799 | 0.221 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.3 | 3.712866771619799 | 1.6143 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.0 | 3.712866771619799 | 0.7426 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.4 | 3.712866771619799 | 1.547 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 10.3 | 3.712866771619799 | 0.3605 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.7 | 3.712866771619799 | 0.6514 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.9 | 3.712866771619799 | 1.9541 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 15.3 | 3.712866771619799 | 0.2427 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.8 | 3.712866771619799 | 0.6401 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.9 | 3.712866771619799 | 1.2803 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.8 | 3.712866771619799 | 1.326 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 4.2 | 3.712866771619799 | 0.884 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 4.9 | 3.712866771619799 | 0.7577 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.3 | 3.712866771619799 | 1.6143 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.5 | 3.712866771619799 | 1.4851 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.9 | 3.712866771619799 | 1.2803 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 6.2 | 3.712866771619799 | 0.5988 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.0 | 3.712866771619799 | 0.7426 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3.6 | 3.712866771619799 | 1.0314 | hr→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_propafenone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Connolly_1984` / `Connolly_1984::dose_150_mg_every_8_hr`)
- model: `../../../knowledgebase/drugs/drug_propafenone/models/modelica/Propafenone_Connolly1984_dose_150_mg_every_8_hr.mo`
- deviation: `../../../knowledgebase/drugs/drug_propafenone/models/modelica/Propafenone_Connolly1984_dose_150_mg_every_8_hr.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_propafenone/models/modelica/Propafenone_Connolly1984_dose_150_mg_every_8_hr.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr.svg" alt="Propafenone_Connolly1984_dose_150_mg_every_8_hr diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 300 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 300 mg parenteral (C01BC03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr/Propafenone_Connolly1984_dose_150_mg_every_8_hr_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Propafenone_Connolly1984_dose_150_mg_every_8_hr_params.json` · controls `Propafenone_Connolly1984_dose_150_mg_every_8_hr_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 20:59 UTC</sub>
