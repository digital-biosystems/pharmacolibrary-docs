<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;remdesivir&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/&quot;},{&quot;label&quot;:&quot;Roberts_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remdesivir_Roberts2025_reference&quot;,&quot;label&quot;:&quot;Roberts_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Roberts2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remdesivir — `Remdesivir_Roberts2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Absorption parameters used library placeholders instead of reported estimates, and covariate scenarios were not simulated to verify their effects.

<div class="pk-model-meta" hidden drug="remdesivir" model-id="Remdesivir_Roberts2025_reference" status="needs_review" stale="false" population="unknown" measured-compound="GS-441524" parameterization="apparent" topology="1C"></div>

## Citation
Roberts DM, Liu X, Parker SL, Burke A, Peek J, Carland JE et al. Population Pharmacokinetic Modelling of Remdesivir and Its Metabolite GS-441524 in Hospitalised Patients with COVID-19. Clinical pharmacokinetics 64(5):743–756 (2025).
  ·  DOI: [10.1007/s40262-025-01496-2](https://doi.org/10.1007/s40262-025-01496-2)

## Population and dosing

**Population:** unknown · condition COVID-19.

**Dosing:** 100, 200 mg, intravenous, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed remdesivir, measured GS-441524.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference.svg" alt="Remdesivir_Roberts2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (L/h) | CL | 105 | L/h | 17.8 | 53.1 (29.5% RSE) |
| V (L) | V | 121 | L | 23.7 |  |
| CL/fm (L/h) | CLm/F | 15.9 | L/h | 8.39 | 36.8 (17.7% RSE) |
| V/fm (L) | Vm/F | 429 | L | 11.4 | 46.0 (22.1% RSE) |
| egfr_effect_on_cl | egfr_effect_on_cl | 1.12 |  | 0.02 |  |
| theta_v_age | theta_v_age | -1.15 |  | 33.7 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Absorption parameters used library placeholders instead of reported estimates, and covariate scenarios were not simulated to verify their effects.**

The absorption parameters (ka, Tlag) were left at library placeholders because they were not explicitly reported in the source, affecting the simulated profile without paper support. Covariates for renal function and age were defined but not exercised, so their impact on pharmacokinetics remains unverified. Extracted — GS-441524: CL 105 L/h, V 121 L, CLm/F 15.9 L/h, Vm/F 429 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has remdesivir, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 105 | L/h | 2.917e-05 | m3/s | l/h | 17.8 | exact (1) | Tab2:row3:col1 | 53.1 (29.5% RSE) |
| V (L) | `Q61` · V | 121 | L | 0.121 | m3 | l | 23.7 | exact (1) | Tab2:row4:col1 |  |
| CL/fm (L/h) | `Q351` · CLm/F | 15.9 | L/h | 4.417e-06 | m3/s | l/h | 8.39 | exact (1) | Tab2:row6:col1 | 36.8 (17.7% RSE) |
| V/fm (L) | `Q367` · Vm/F | 429 | L | 0.429 | m3 | l | 11.4 | exact (1) | Tab2:row7:col1 | 46.0 (22.1% RSE) |
| egfr_effect_on_cl | `Q900` · egfr_effect_on_cl | 1.12 |  |  |  |  | 0.02 |  | Tab2:row9:col1 |  |
| theta_v_age | `Q900` · theta_v_age | -1.15 |  |  |  |  | 33.7 |  | Tab2:row8:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'Remdesivir CL' routed out of structural estimates ('Between subject variability (%)')
- table section iiv: 'Remdesivir V' routed out of structural estimates ('Between subject variability (%)')
- table section iiv: 'GS-441524 CL/fm' routed out of structural estimates ('Between subject variability (%)')
- table section iiv: 'GS-441524 V/fm' routed out of structural estimates ('Between subject variability (%)')
- covariate level 'eGFR effect on CL' → Q900:egfr_effect_on_cl = 1.12 (linear_fractional on Q22)
- routed 'Remdesivir proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'GS-441524 proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=GS-441524
- review gap-fill skipped: this record measures 'GS-441524', not remdesivir — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/fm].parameter_id` | Q351 | Q370 | mismatch |
| `gpt-oss-120b` | `parameters[cl/fm].value` | 15.9 | 13.2 | mismatch |
| `gpt-oss-120b` | `parameters[cl].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 105 | 69.3 | mismatch |
| `gpt-oss-120b` | `parameters[egfr_effect_on_cl]` | 1.12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_egfr]` |  | 0.78 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_age].value` | -1.15 | -1.18 | mismatch |
| `gpt-oss-120b` | `parameters[v/fm].value` | 429 | 353 | mismatch |
| `gpt-oss-120b` | `parameters[v].parameter_id` | Q367 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[v].value` | 121 | 45.9 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | remdesivir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | GS-441524 | unknown | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab2:row6:col1'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Tab2:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 105 L/h | ['Tab2:row3:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 121 L | ['Tab2:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=GS-441524) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; apparent_assumption: not acceptable; invented_absorption: not acceptable; input_model: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_modelica.zip" download>Remdesivir_Roberts2025_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_fmi.zip" download>Remdesivir_Roberts2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_matlab.zip" download>Remdesivir_Roberts2025_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_matlab_simbio.zip" download>Remdesivir_Roberts2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_sbml.zip" download>Remdesivir_Roberts2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_cellml.zip" download>Remdesivir_Roberts2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2913 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 4.417e-06 | m3/s |
| input | model | `VdPerKg` | 0.006129 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Roberts DM, Liu X, Parker SL, Burke A, Peek J, Carland JE et al. Population Pharmacokinetic Modelling of Remdesivir and Its Metabolite GS-441524 in Hospitalised Patients with COVID-19. Clinical pharmacokinetics 64(5):743–756 (2025). [doi:10.1007/s40262-025-01496-2](https://doi.org/10.1007/s40262-025-01496-2)

**This record:** Pharmacolibrary v26.09, model `Remdesivir_Roberts2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_remdesivir/Remdesivir_Roberts2025_reference>

```bibtex
@misc{pharmacolibrary_RemdesivirRoberts2025reference,
  title  = {{Pharmacolibrary model Remdesivir_Roberts2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_remdesivir/Remdesivir_Roberts2025_reference},
  note   = {Parameters from doi:10.1007/s40262-025-01496-2},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 100, 200 mg.

<dbs-fmusim paramsurl="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Remdesivir_Roberts2025_reference_params.json` · controls `Remdesivir_Roberts2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bremdesivir%5D%20Remdesivir_Roberts2025_reference&body=Drug%3A%20remdesivir%0ARecord%3A%20Remdesivir_Roberts2025_reference%0APaper%3A%20Roberts_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_remdesivir/Remdesivir_Roberts2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 12:38 UTC</sub>
