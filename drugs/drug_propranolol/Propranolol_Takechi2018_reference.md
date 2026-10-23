<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;propranolol&quot;,&quot;href&quot;:&quot;drugs/drug_propranolol/&quot;},{&quot;label&quot;:&quot;Takechi_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propranolol_Takechi2018_reference&quot;,&quot;label&quot;:&quot;Takechi_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propranolol/Propranolol_Takechi2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propranolol — `Propranolol_Takechi2018_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The record defaulted lag time and assumed unit bioavailability, and simulated only the reference individual without exercising covariate effects.

<div class="pk-model-meta" hidden drug="propranolol" model-id="Propranolol_Takechi2018_reference" status="needs_review" stale="false" population="pediatric patients with infantile hemangioma" measured-compound="propranolol" parameterization="apparent" topology="1C"></div>

## Citation
Takechi T, Kumokawa T, Kato R, Higuchi T, Kaneko T, Ieiri I. Population Pharmacokinetics and Pharmacodynamics of Oral Propranolol in Pediatric Patients With Infantile Hemangioma. Journal of clinical pharmacology 58(10):1361–1370 (2018).
  ·  DOI: [10.1002/jcph.1149](https://doi.org/10.1002/jcph.1149)

## Population and dosing

**Population:** pediatric patients with infantile hemangioma · condition infantile hemangioma · age group infant · n = &gt;= 32.

**Dosing:** 70, 210 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_propranolol/Propranolol_Takechi2018_reference/Propranolol_Takechi2018_reference.svg" alt="Propranolol_Takechi2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CL/F | 9.17 | L/h | 14.5 | 76.7 (29.6% RSE) |
| V/F (L) | V/F | 134 | L | 31.2 |  |
| k a (h -1 ) | kabs | 1.03 | h -1 |  |  |
| powerage_for_cl_f | powerage_for_cl_f | 1 |  |  |  |
| theta_q319_age_power | theta_q319_age_power | 1 |  |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record defaulted lag time and assumed unit bioavailability, and simulated only the reference individual without exercising covariate effects.**

The model builder used default values for lag time and assumed oral bioavailability was unity, replacing specific estimates with conventions. The record defines age-based covariate effects for clearance and volume, yet the simulation covered only the reference individual. Consequently, the impact of these covariate scenarios on the model's predictions was not evaluated. Extracted — propranolol: CL/F 9.17 L/h, V/F 134 L, kabs 1.03 h -1.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 9.17 | L/h | 2.547e-06 | m3/s | l/h | 14.5 | exact (1) | tab_1:row3:col1, Takechi_2018_table_S1:row1:col1, Takechi_2018_table_S1:row1:col4 | 76.7 (29.6% RSE) |
| V/F (L) | `Q76` · V/F | 134 | L | 0.134 | m3 | l | 31.2 | exact (1) | tab_1:row4:col1, Takechi_2018_table_S1:row2:col1, Takechi_2018_table_S1:row2:col4 |  |
| k a (h -1 ) | `Q49` · kabs | 1.03 | h -1 | 0.0002861 | 1/s | 1/h |  | space_fold (0.95) | tab_1:row5:col1 |  |
| powerage_for_cl_f | `Q900` · powerage_for_cl_f | 1 |  |  |  |  |  |  | Takechi_2018_table_S1:row4:col1, Takechi_2018_table_S1:row4:col4 |  |
| theta_q319_age_power | `Q900` · theta_q319_age_power | 1 |  |  |  |  |  |  | tab_1:row6:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped PD-category row 'Baseline' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row10:col1'])
- dropped PD-category row 'Slope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row11:col1'])
- dropped unlinked row (NIL): 'Treatment duration (weeks)' — extend the ontology if this is a real PK parameter (source ['tab_1:row12:col1'])
- dropped unlinked row (NIL): 'Gestational age (days) on' — extend the ontology if this is a real PK parameter (source ['tab_1:row14:col1'])
- dropped duplicate Q49 ('ka (/h)', value '0.773') — already have one for this compound
- covariate level 'PowerAGE for CL/F' → Q900:powerage_for_cl_f = 1 (power on Q27)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=propranolol
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tab_1: unparsed_numeric_cell
- table Takechi_2018_table_S1: ragged_grid
- companion parameter table S1 transcribed (16 record(s))
- LLM selected parameter table(s) 2, S1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row3:col1', 'Takechi_2018_table_S1:row1:col1', 'Takechi_2018_table_S1:row1:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_1:row4:col1', 'Takechi_2018_table_S1:row2:col1', 'Takechi_2018_table_S1:row2:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 9.17 L/h | ['tab_1:row3:col1', 'Takechi_2018_table_S1:row1:col1', 'Takechi_2018_table_S1:row1:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 134 L | ['tab_1:row4:col1', 'Takechi_2018_table_S1:row2:col1', 'Takechi_2018_table_S1:row2:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=propranolol) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | deviation_id=defaulted_parameters: not acceptable; deviation_id=apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_propranolol/Propranolol_Takechi2018_reference/Propranolol_Takechi2018_reference_modelica.zip" download>Propranolol_Takechi2018_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_propranolol/Propranolol_Takechi2018_reference/Propranolol_Takechi2018_reference_fmi.zip" download>Propranolol_Takechi2018_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_propranolol/Propranolol_Takechi2018_reference/Propranolol_Takechi2018_reference_matlab.zip" download>Propranolol_Takechi2018_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_propranolol/Propranolol_Takechi2018_reference/Propranolol_Takechi2018_reference_matlab_simbio.zip" download>Propranolol_Takechi2018_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_propranolol/Propranolol_Takechi2018_reference/Propranolol_Takechi2018_reference_sbml.zip" download>Propranolol_Takechi2018_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_propranolol/Propranolol_Takechi2018_reference/Propranolol_Takechi2018_reference_cellml.zip" download>Propranolol_Takechi2018_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2593 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-05 | kg |
| input | model | `Cl` | 2.547e-06 | m3/s |
| input | model | `VdPerKg` | 0.001914 | m3/kg |
| input | model | `ka` | 0.0002861 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Takechi T, Kumokawa T, Kato R, Higuchi T, Kaneko T, Ieiri I. Population Pharmacokinetics and Pharmacodynamics of Oral Propranolol in Pediatric Patients With Infantile Hemangioma. Journal of clinical pharmacology 58(10):1361–1370 (2018). [doi:10.1002/jcph.1149](https://doi.org/10.1002/jcph.1149)

**This record:** Pharmacolibrary v26.09, model `Propranolol_Takechi2018_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_propranolol/Propranolol_Takechi2018_reference>

```bibtex
@misc{pharmacolibrary_PropranololTakechi2018reference,
  title  = {{Pharmacolibrary model Propranolol_Takechi2018_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_propranolol/Propranolol_Takechi2018_reference},
  note   = {Parameters from doi:10.1002/jcph.1149},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 70 mg, single dose, first-order absorption (ka 1.03 /h, F 1). Doses in the paper: 70, 210 mg.

<dbs-fmusim paramsurl="drugs/drug_propranolol/Propranolol_Takechi2018_reference/Propranolol_Takechi2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_propranolol/Propranolol_Takechi2018_reference/Propranolol_Takechi2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Propranolol_Takechi2018_reference_params.json` · controls `Propranolol_Takechi2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropranolol%5D%20Propranolol_Takechi2018_reference&body=Drug%3A%20propranolol%0ARecord%3A%20Propranolol_Takechi2018_reference%0APaper%3A%20Takechi_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_propranolol/Propranolol_Takechi2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 12:33 UTC</sub>
