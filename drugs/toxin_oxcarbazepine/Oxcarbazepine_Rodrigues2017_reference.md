<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Oxcarbazepine&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/&quot;},{&quot;label&quot;:&quot;Rodrigues_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxcarbazepine_Chen2021v2_reference&quot;,&quot;label&quot;:&quot;Chen_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Chen2021v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Rodrigues2017_reference&quot;,&quot;label&quot;:&quot;Rodrigues_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Oxcarbazepine_Sinha2022_final_estimate&quot;,&quot;label&quot;:&quot;Sinha_2022_final_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Sinha2022_final_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Sinha2022_initial_estimate&quot;,&quot;label&quot;:&quot;Sinha_2022_initial_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Sinha2022_initial_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Oxcarbazepine — `Oxcarbazepine_Rodrigues2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL has no unit.

<div class="pk-model-meta" hidden drug="Oxcarbazepine" model-id="Oxcarbazepine_Rodrigues2017_reference" status="needs_review" stale="false" population="epileptic children aged 2-12 years" measured-compound="MHD (monohydroxy derivative)" parameterization="apparent" topology="2C"></div>

## Citation
Rodrigues C, Chiron C, Rey E, Dulac O, Comets E, Pons G et al. Population pharmacokinetics of oxcarbazepine and its monohydroxy derivative in epileptic children. British journal of clinical pharmacology 83(12):2695-2708 (2017).
  ·  DOI: [10.1111/bcp.13392](https://doi.org/10.1111/bcp.13392)

## Population and dosing

**Population:** epileptic children aged 2-12 years · condition epilepsy · age group child · n = 31.

**Dosed compound ≠ measured compound:** dosed Oxcarbazepine, measured MHD (monohydroxy derivative).

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference/Oxcarbazepine_Rodrigues2017_reference.svg" alt="Oxcarbazepine_Rodrigues2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| oxcarbazepine clearance | CLnorm | 140 | l h-1 70 kg-1 |
| central distribution volume | V1 | 337 | l 70 kg-1 |
| peripheral distribution volume | V2 | 60.7 | l |
| distribution clearance | Q | 62.5 | l h-1 |
| MHD clearance | CLm/F | 4.11 | l h-1 70 kg-1 |
| MHD distribution volume | Vnorm | 54.8 | l 70 kg-1 |
| EIAEDs increased MHD clearance | CL | 29.3 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is oxcarbazepine's own; they describe MHD (monohydroxy derivative). Extracted — MHD (monohydroxy derivative): CLnorm 140 l h-1 70 kg-1, V1 337 l 70 kg-1, V2 60.7 l, Q 62.5 l h-1, CLm/F 4.11 l h-1 70 kg-1, Vnorm 54.8 l 70 kg-1, CL 29.3.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| oxcarbazepine clearance | `Q354` · CLnorm | 140 | l h-1 70 kg-1 | 3.889e-05 | m3/s | l/(h·70kg) | llm_corrected (0.6) | Rodrigues_2017:abstract |
| central distribution volume | `Q63` · V1 | 337 | l 70 kg-1 | 0.337 | m3 | l/70kg | boundary_compartment (0.9) | Rodrigues_2017:abstract |
| peripheral distribution volume | `Q64` · V2 | 60.7 | l | 0.0607 | m3 | l | boundary_compartment (0.9) | Rodrigues_2017:abstract |
| distribution clearance | `Q30` · Q | 62.5 | l h-1 | 1.736e-05 | m3/s | l/h | exact (1) | Rodrigues_2017:abstract |
| MHD clearance | `Q351` · CLm/F | 4.11 | l h-1 70 kg-1 | 1.142e-06 | m3/s | l/(h·70kg) | llm_corrected (0.6) | Rodrigues_2017:abstract |
| MHD distribution volume | `Q352` · Vnorm | 54.8 | l 70 kg-1 | 0.0548 | m3 | l/70kg | llm_corrected (0.6) | Rodrigues_2017:abstract |
| EIAEDs increased MHD clearance | `Q22` · CL | 29.3 |  |  |  |  | llm_confirmed (0.6) | Rodrigues_2017:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=MHD (monohydroxy derivative)
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- molar mass: none found for 'MHD (monohydroxy derivative)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'MHD (monohydroxy derivative)', not oxcarbazepine — the review values are the parent's
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Rodrigues_2017_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Rodrigues_2017:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Rodrigues_2017:abstract'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['Rodrigues_2017:abstract'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Rodrigues_2017:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Rodrigues_2017:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Rodrigues_2017:abstract'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Rodrigues_2017:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 337 L | ['Rodrigues_2017:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 60.7 L | ['Rodrigues_2017:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference/Oxcarbazepine_Rodrigues2017_reference_modelica.zip" download>Oxcarbazepine_Rodrigues2017_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference/Oxcarbazepine_Rodrigues2017_reference_fmi.zip" download>Oxcarbazepine_Rodrigues2017_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.001 | kg |
| input | model | `Cl` | 1.142e-06 | m3/s |
| input | model | `VdPerKg` | 0.004814 | m3/kg |
| input | model | `k12` | 5.152e-05 | 1/s |
| input | model | `k21` | 0.000286 | 1/s |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Rodrigues C, Chiron C, Rey E, Dulac O, Comets E, Pons G et al. Population pharmacokinetics of oxcarbazepine and its monohydroxy derivative in epileptic children. British journal of clinical pharmacology 83(12):2695-2708 (2017). [doi:10.1111/bcp.13392](https://doi.org/10.1111/bcp.13392)

**This record:** Pharmacolibrary, model `Oxcarbazepine_Rodrigues2017_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference>

```bibtex
@misc{pharmacolibrary_OxcarbazepineRodrigues2017reference,
  title  = {{Pharmacolibrary model Oxcarbazepine_Rodrigues2017_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference},
  note   = {Parameters from doi:10.1111/bcp.13392},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: oral** — 1000 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 1000 mg oral (N03AF02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference/Oxcarbazepine_Rodrigues2017_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference/Oxcarbazepine_Rodrigues2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Oxcarbazepine_Rodrigues2017_reference_params.json` · controls `Oxcarbazepine_Rodrigues2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxcarbazepine%5D%20Oxcarbazepine_Rodrigues2017_reference&body=Drug%3A%20oxcarbazepine%0ARecord%3A%20Oxcarbazepine_Rodrigues2017_reference%0APaper%3A%20Rodrigues_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 12:12 UTC</sub>
