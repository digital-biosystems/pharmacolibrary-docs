<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Strontium-90&quot;,&quot;href&quot;:&quot;drugs/toxin_strontium_90/&quot;},{&quot;label&quot;:&quot;Tolstykh_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Strontium90_Tolstykh2011_reference&quot;,&quot;label&quot;:&quot;Tolstykh_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Strontium-90 — `Strontium90_Tolstykh2011_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="Strontium-90" model-id="Strontium90_Tolstykh2011_reference" status="curated_candidate" stale="false" population="adult persons from Techa Riverside residents" measured-compound="Strontium-90" parameterization="mechanistic" topology="retention"></div>

## Citation
Tolstykh EI, Shagina NB, Degteva MO, Anspaugh LR, Napier BA. Does the cortical bone resorption rate change due to 90Sr-radiation exposure? Analysis of data from Techa Riverside residents. Radiation and environmental biophysics 50(3):417–430 (2011).
  ·  DOI: [10.1007/s00411-011-0363-z](https://doi.org/10.1007/s00411-011-0363-z)

## Population and dosing

**Population:** adult persons from Techa Riverside residents · condition chronic dietary exposure · age group adult · n = 207.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Cortical bone resorption rate (year⁻¹) | kel | 0.028 | year⁻¹ |
| ⁹⁰Sr-body burden, 1985 (kBq) | body_burden | 20 | kBq |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (body_burden), so that value has no SI equivalent.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cortical bone resorption rate (year⁻¹) | `Q47` · kel | 0.028 | year⁻¹ | 8.873e-10 | 1/s | 1/year | toxin_unit_relink (0.85) | Tolstykh_2011_table_4:row0:col2, Tolstykh_2011_table_4:row1:col2, Tolstykh_2011_table_4:row2:col2 |
| ⁹⁰Sr-body burden, 1985 (kBq) | `Q414` · body_burden | 20 | kBq |  |  | kbq | llm_confirmed (0.6) | Tolstykh_2011_table_4:row12:col2, Tolstykh_2011_table_4:row13:col2, Tolstykh_2011_table_4:row14:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from Cortical bone resorption rate (year⁻¹) (Q47)

**Interpretation flags:**
- relinked 'Cortical bone resorption rate (year⁻¹)' Q100 → Q47: a rate constant in 'year⁻¹' (the unit decides, not the label)
- dropped unlinked row (NIL): 'RBM dose, 1950–1985 (Gy)' — extend the ontology if this is a real PK parameter (source ['Tolstykh_2011_table_4:row3:col2', 'Tolstykh_2011_table_4:row4:col2', 'Tolstykh_2011_table_4:row5:col2'])
- dropped unlinked row (NIL): 'RBM dose, 1950–WBCᵃ (Gy)' — extend the ontology if this is a real PK parameter (source ['Tolstykh_2011_table_4:row6:col2', 'Tolstykh_2011_table_4:row7:col2', 'Tolstykh_2011_table_4:row8:col2'])
- dropped unlinked row (NIL): 'BS dose, 1950–1985 (Gy)' — extend the ontology if this is a real PK parameter (source ['Tolstykh_2011_table_4:row9:col2', 'Tolstykh_2011_table_4:row10:col2', 'Tolstykh_2011_table_4:row11:col2'])
- unit_dimension_unknown: 'kBq' (body_burden)
- implicit units: '⁹⁰Sr-body burden, 1985 (kBq)' — the LLM proposed 'kBq', whose dimension does not fit Q414; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Strontium-90
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tolstykh_2011_table_4: unbound_uncertainty

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q414 | pass |  | kBq | ['Tolstykh_2011_table_4:row12:col2', 'Tolstykh_2011_table_4:row13:col2', 'Tolstykh_2011_table_4:row14:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tolstykh_2011_table_4:row0:col2', 'Tolstykh_2011_table_4:row1:col2', 'Tolstykh_2011_table_4:row2:col2'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | retainedFraction (measured=Strontium-90) | retainedFraction | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template | pass | retention → TK_Retention* | TK_Retention | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference/Strontium90_Tolstykh2011_reference_modelica.zip" download>Strontium90_Tolstykh2011_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference/Strontium90_Tolstykh2011_reference_fmi.zip" download>Strontium90_Tolstykh2011_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference/Strontium90_Tolstykh2011_reference_matlab.zip" download>Strontium90_Tolstykh2011_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference/Strontium90_Tolstykh2011_reference_sbml.zip" download>Strontium90_Tolstykh2011_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference/Strontium90_Tolstykh2011_reference_cellml.zip" download>Strontium90_Tolstykh2011_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.08762 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 7.812e+08 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Tolstykh EI, Shagina NB, Degteva MO, Anspaugh LR, Napier BA. Does the cortical bone resorption rate change due to 90Sr-radiation exposure? Analysis of data from Techa Riverside residents. Radiation and environmental biophysics 50(3):417–430 (2011). [doi:10.1007/s00411-011-0363-z](https://doi.org/10.1007/s00411-011-0363-z)

**This record:** Pharmacolibrary, model `Strontium90_Tolstykh2011_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference>

```bibtex
@misc{pharmacolibrary_Strontium90Tolstykh2011reference,
  title  = {{Pharmacolibrary model Strontium90_Tolstykh2011_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference},
  note   = {Parameters from doi:10.1007/s00411-011-0363-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference/Strontium90_Tolstykh2011_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference/Strontium90_Tolstykh2011_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Strontium90_Tolstykh2011_reference_params.json` · controls `Strontium90_Tolstykh2011_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bstrontium_90%5D%20Strontium90_Tolstykh2011_reference&body=Drug%3A%20strontium_90%0ARecord%3A%20Strontium90_Tolstykh2011_reference%0APaper%3A%20Tolstykh_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 01:57 UTC</sub>
