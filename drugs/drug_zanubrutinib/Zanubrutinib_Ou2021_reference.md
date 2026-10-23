<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;zanubrutinib&quot;,&quot;href&quot;:&quot;drugs/drug_zanubrutinib/&quot;},{&quot;label&quot;:&quot;Ou_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zanubrutinib_Ou2021_reference&quot;,&quot;label&quot;:&quot;Ou_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# zanubrutinib — `Zanubrutinib_Ou2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 2, model 1.25); the model does not reproduce the paper's terminal half-life (paper 2, model 1.71) (+1 more).

<div class="pk-model-meta" hidden drug="zanubrutinib" model-id="Zanubrutinib_Ou2021_reference" status="needs_review" stale="false" population="healthy volunteers and patients with B-cell malignancies" measured-compound="zanubrutinib" parameterization="apparent" topology="2C"></div>

## Citation
Ou YC, Liu L, Tariq B, Wang K, Jindal A, Tang Z et al. Population Pharmacokinetic Analysis of the BTK Inhibitor Zanubrutinib in Healthy Volunteers and Patients With B-Cell Malignancies. Clinical and translational science 14(2):764–772 (2021).
  ·  DOI: [10.1111/cts.12948](https://doi.org/10.1111/cts.12948)

## Population and dosing

**Population:** healthy volunteers and patients with B-cell malignancies · condition B-cell malignancies and healthy · age group adult · n = 632.

**Dosing:** 20, 320 mg, oral, multiple.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference/Zanubrutinib_Ou2021_reference.svg" alt="Zanubrutinib_Ou2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 170 | L/hour |
| V c /F | V1/F | 112 | L |
| Q/F | Q/F | 26.5 | L/hour |
| V p /F | V2/F | 345 | L |
| absorption rate constant | kabs | 0.526 | hour -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 2, model 1.25); the model does not reproduce the paper's terminal half-life (paper 2, model 1.71) (+1 more).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Extracted — zanubrutinib: CL/F 170 L/hour, V1/F 112 L, Q/F 26.5 L/hour, V2/F 345 L, kabs 0.526 hour -1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 170 | L/hour | 4.722e-05 | m3/s | L/h | exact (1) | Ou_2021:other_prose |
| V c /F | `Q290` · V1/F | 112 | L | 0.112 | m3 | L | space_fold (0.95) | Ou_2021:other_prose |
| Q/F | `Q69` · Q/F | 26.5 | L/hour | 7.361e-06 | m3/s | L/h | exact (1) | Ou_2021:other_prose |
| V p /F | `Q82` · V2/F | 345 | L | 0.345 | m3 | L | space_fold (0.95) | Ou_2021:other_prose |
| absorption rate constant | `Q49` · kabs | 0.526 | hour -1 | 0.0001461 | 1/s | 1/h | exact (1) | Ou_2021:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| exp(θ 5 ) | Q900 | llm |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- salvaged Q27 ('CL/F'=170) from results prose — parameter table was unreadable
- salvaged Q290 ('V c /F'=112) from results prose — parameter table was unreadable
- salvaged Q69 ('Q/F'=26.5) from results prose — parameter table was unreadable
- salvaged Q82 ('V p /F'=345) from results prose — parameter table was unreadable
- salvaged Q49 ('absorption rate constant'=0.526) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=zanubrutinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_1:row12:col2 = '0.526 (0.525,'
- unparsed cell tab_1:row12:col3 = '0.524 (0.481,'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `qwen3.8-27b` | `parameters[absorption rate constant]` | 0.526 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f]` | 170 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q/f]` | 26.5 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v c /f]` | 112 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v p /f]` | 345 |  | only_one_extracted |

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
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 170 L/h | ['Ou_2021:other_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 112 L | ['Ou_2021:other_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 345 L | ['Ou_2021:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=zanubrutinib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.000254 | 2.293e-05 | 0.0903 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped |  | 2.293e-05 |  | non-numeric value |
| T1_cmax | reference | skipped | 26.8 | 2.293e-05 |  | unresolved concentration unit (exp '% higher', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | pass | 2 | 1.707 | 0.8536 | hours→SI vs simulated h |
| T1_t_half_beta | reference | fail | 3.44 | 1.707 | 0.4963 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 2 | 1.251 | 0.6253 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference/Zanubrutinib_Ou2021_reference_modelica.zip" download>Zanubrutinib_Ou2021_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference/Zanubrutinib_Ou2021_reference_fmi.zip" download>Zanubrutinib_Ou2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference/Zanubrutinib_Ou2021_reference_matlab.zip" download>Zanubrutinib_Ou2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference/Zanubrutinib_Ou2021_reference_matlab_simbio.zip" download>Zanubrutinib_Ou2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference/Zanubrutinib_Ou2021_reference_sbml.zip" download>Zanubrutinib_Ou2021_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference/Zanubrutinib_Ou2021_reference_cellml.zip" download>Zanubrutinib_Ou2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4716 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2e-05 | kg |
| input | model | `Cl` | 4.722e-05 | m3/s |
| input | model | `VdPerKg` | 0.0016 | m3/kg |
| input | model | `k12` | 6.572e-05 | 1/s |
| input | model | `k21` | 2.134e-05 | 1/s |
| input | model | `ka` | 0.0001461 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Ou YC, Liu L, Tariq B, Wang K, Jindal A, Tang Z et al. Population Pharmacokinetic Analysis of the BTK Inhibitor Zanubrutinib in Healthy Volunteers and Patients With B-Cell Malignancies. Clinical and translational science 14(2):764–772 (2021). [doi:10.1111/cts.12948](https://doi.org/10.1111/cts.12948)

**This record:** Pharmacolibrary v26.09, model `Zanubrutinib_Ou2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference>

```bibtex
@misc{pharmacolibrary_ZanubrutinibOu2021reference,
  title  = {{Pharmacolibrary model Zanubrutinib_Ou2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference},
  note   = {Parameters from doi:10.1111/cts.12948},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 0.526 /h, F 1). Doses in the paper: 20–320 mg.

<dbs-fmusim paramsurl="drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference/Zanubrutinib_Ou2021_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference/Zanubrutinib_Ou2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Zanubrutinib_Ou2021_reference_params.json` · controls `Zanubrutinib_Ou2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzanubrutinib%5D%20Zanubrutinib_Ou2021_reference&body=Drug%3A%20zanubrutinib%0ARecord%3A%20Zanubrutinib_Ou2021_reference%0APaper%3A%20Ou_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:56 UTC</sub>
