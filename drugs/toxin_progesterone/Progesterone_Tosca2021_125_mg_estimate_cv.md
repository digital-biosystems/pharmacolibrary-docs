<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Progesterone&quot;,&quot;href&quot;:&quot;drugs/toxin_progesterone/&quot;},{&quot;label&quot;:&quot;Tosca_2021 \u00b7 125_mg_estimate_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Progesterone_Tosca2021_125_mg_estimate_cv&quot;,&quot;label&quot;:&quot;Tosca_2021_125_mg_estimate_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_progesterone/Progesterone_Tosca2021_125_mg_estimate_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Progesterone_Tosca2021_1500_mg_estimate_cv&quot;,&quot;label&quot;:&quot;Tosca_2021_1500_mg_estimate_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_progesterone/Progesterone_Tosca2021_1500_mg_estimate_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Progesterone_Tosca2021_375_mg_estimate_cv&quot;,&quot;label&quot;:&quot;Tosca_2021_375_mg_estimate_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_progesterone/Progesterone_Tosca2021_375_mg_estimate_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Progesterone_Tosca2021_in_vivo_over_18_days_average_released&quot;,&quot;label&quot;:&quot;Tosca_2021_in_vivo_over_18_days_average_released_progesterone_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_progesterone/Progesterone_Tosca2021_in_vivo_over_18_days_average_released.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Progesterone_Tosca2021_population_parameters_typical_value_c&quot;,&quot;label&quot;:&quot;Tosca_2021_population_parameters_typical_value_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_progesterone/Progesterone_Tosca2021_population_parameters_typical_value_c.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Progesterone — `Progesterone_Tosca2021_125_mg_estimate_cv`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's time of the peak (tmax).

<div class="pk-model-meta" hidden drug="Progesterone" model-id="Progesterone_Tosca2021_125_mg_estimate_cv" status="needs_review" stale="false" population="healthy women using progesterone vaginal rings (clinical study participants)" measured-compound="Progesterone" parameterization="mechanistic" topology="retention"></div>

## Citation
Tosca EM, Rocchetti M, Pérez E, Nieto C, Bettica P, Moscoso Del Prado J et al. In Vitro-In Vivo Correlation (IVIVC) Population Modeling for the In Silico Bioequivalence of a Long-Acting Release Formulation of Progesterone. Pharmaceutics 13(2):255 (2021).
  ·  DOI: [10.3390/pharmaceutics13020255](https://doi.org/10.3390/pharmaceutics13020255)

## Population and dosing

**Population:** healthy women using progesterone vaginal rings (clinical study participants) · condition healthy volunteers receiving long-acting release progesterone vaginal rings · age group adult.

**Dosing:** 125, 375, 750, 1500 mg, other, single.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| P0 [mg] | A1 | 6.62 | mg |
| α[1/h] | λ1 | 0.0843 | 1/h |
| β [1/h] | kel | 0.013 | 1/h |
| average Vd value | V | 5.41 | L |
| Ka (h−1) | kabs | 1.26 | h−1 |
| ALAG1 | tlag | 0.134 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (A1), so that value has no SI equivalent. Extracted — progesterone: A1 6.62 mg, λ1 0.0843 1/h, kel 0.013 1/h, V 5.41 L, kabs 1.26 h−1, tlag 0.134 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| P0 [mg] | `Q415` · A1 | 6.62 | mg |  |  | mg | llm (0.6) | Tosca_2021_table_9:row1:col1 |
| α[1/h] | `Q67` · λ1 | 0.0843 | 1/h | 2.342e-05 | 1/s | 1/h | llm (0.6) | Tosca_2021_table_9:row4:col1 |
| β [1/h] | `Q47` · kel | 0.013 | 1/h | 3.611e-06 | 1/s | 1/h | llm (0.6) | Tosca_2021_table_9:row5:col1 |
| average Vd value | `Q61` · V | 5.41 | L | 0.00541 | m3 | L | review_gapfill (0.7) | Cottu_2018:review |
| Ka (h−1) | `Q49` · kabs | 1.26 | h−1 | 0.00035 | 1/s | 1/h | review_gapfill (0.7) | Morris_2011:review |
| ALAG1 | `Q83` · tlag | 0.134 | h | 482.4 | s | h | review_gapfill (0.7) | Sutter_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: coefficients in mg normalised to their sum — the pools describe the measured curve's shape, C(t)/C(0), not a share of the intake; half-times: pool 1 from α[1/h] (Q67)

**Interpretation flags:**
- dropped duplicate Q415 ('A [mg]', value '26.1') — already have one for this compound
- dropped unlinked row (NIL): 'Error (sd)' — extend the ontology if this is a real PK parameter (source ['Tosca_2021_table_9:row6:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Progesterone
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- population split: '125 mg / estimate [cv%]' subgroup of Tosca_2021 (paper reports 9 populations: 125 mg / estimate [cv%], 1500 mg / estimate [cv%], 375 mg / estimate [cv%], 750 mg / estimate [cv%], in vitro (over 15 days) / average released progesterone [mg], in vitro (over 15 days) / percentage of total released progesterone [%], in vivo (over 18 days) / average released progesterone [mg], in vivo (over 18 days) / percentage of total released progesterone [%], population parameters / typical value (cv%))
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Cottu_2018's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Morris_2011's review values (primary lacked it)
- gap-filled Q83 (tlag) from Sutter_2022's review values (primary lacked it)

**Extraction notes:**
- table pharmaceutics-13-00255-t0A1: unbound_uncertainty
- table pharmaceutics-13-00255-t0A1: unparsed_numeric_cell
- table Tosca_2021_table_1: unbound_uncertainty
- table Tosca_2021_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (15 record(s))
- companion parameter table 7 transcribed (16 record(s))
- table Tosca_2021_table_8: no_numeric_grid
- companion parameter table 8 transcribed (0 record(s))
- table Tosca_2021_table_9: unparsed_numeric_cell
- companion parameter table 9 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 7, 8, 9

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tosca_2021_table_9:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Morris_2011:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Cottu_2018:review'] |
| C5_dimension_Q67 | pass | 1 / [time] |  | ['Tosca_2021_table_9:row4:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Sutter_2022:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.41 L | ['Cottu_2018:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Progesterone) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.997 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.997 |  | non-numeric value |
| T1_cmax | reference | skipped | 5.52 | 0.997 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 16.4 | 0.997 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 20 | 0.997 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_tmax | reference | skipped |  | 0.08818 |  | non-numeric value |
| T1_tmax | reference | fail | 3 | 0.08818 | 0.0294 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_progesterone/Progesterone_Tosca2021_125_mg_estimate_cv/Progesterone_Tosca2021_125_mg_estimate_cv_modelica.zip" download>Progesterone_Tosca2021_125_mg_estimate_cv_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_progesterone/Progesterone_Tosca2021_125_mg_estimate_cv/Progesterone_Tosca2021_125_mg_estimate_cv_fmi.zip" download>Progesterone_Tosca2021_125_mg_estimate_cv_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_progesterone/Progesterone_Tosca2021_125_mg_estimate_cv/Progesterone_Tosca2021_125_mg_estimate_cv_matlab.zip" download>Progesterone_Tosca2021_125_mg_estimate_cv_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_progesterone/Progesterone_Tosca2021_125_mg_estimate_cv/Progesterone_Tosca2021_125_mg_estimate_cv_sbml.zip" download>Progesterone_Tosca2021_125_mg_estimate_cv_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_progesterone/Progesterone_Tosca2021_125_mg_estimate_cv/Progesterone_Tosca2021_125_mg_estimate_cv_cellml.zip" download>Progesterone_Tosca2021_125_mg_estimate_cv_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3145 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.000125 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 2.96e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Tosca EM, Rocchetti M, Pérez E, Nieto C, Bettica P, Moscoso Del Prado J et al. In Vitro-In Vivo Correlation (IVIVC) Population Modeling for the In Silico Bioequivalence of a Long-Acting Release Formulation of Progesterone. Pharmaceutics 13(2):255 (2021). [doi:10.3390/pharmaceutics13020255](https://doi.org/10.3390/pharmaceutics13020255)

**This record:** Pharmacolibrary, model `Progesterone_Tosca2021_125_mg_estimate_cv`. <https://pharmacolibrary.github.io/#/drugs/toxin_progesterone/Progesterone_Tosca2021_125_mg_estimate_cv>

```bibtex
@misc{pharmacolibrary_ProgesteroneTosca2021125mgestimatecv,
  title  = {{Pharmacolibrary model Progesterone_Tosca2021_125_mg_estimate_cv}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_progesterone/Progesterone_Tosca2021_125_mg_estimate_cv},
  note   = {Parameters from doi:10.3390/pharmaceutics13020255},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_progesterone/Progesterone_Tosca2021_125_mg_estimate_cv/Progesterone_Tosca2021_125_mg_estimate_cv_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_progesterone/Progesterone_Tosca2021_125_mg_estimate_cv/Progesterone_Tosca2021_125_mg_estimate_cv_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Progesterone_Tosca2021_125_mg_estimate_cv_params.json` · controls `Progesterone_Tosca2021_125_mg_estimate_cv_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprogesterone%5D%20Progesterone_Tosca2021_125_mg_estimate_cv&body=Drug%3A%20progesterone%0ARecord%3A%20Progesterone_Tosca2021_125_mg_estimate_cv%0APaper%3A%20Tosca_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_progesterone/Progesterone_Tosca2021_125_mg_estimate_cv%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 08:01 UTC</sub>
