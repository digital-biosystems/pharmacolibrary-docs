<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Ciguatoxin 1&quot;,&quot;href&quot;:&quot;drugs/toxin_ciguatoxin_1/&quot;},{&quot;label&quot;:&quot;Bennett_2021 \u00b7 trial&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ciguatoxin1_Bennett2021_average_kg_10_3_d_1&quot;,&quot;label&quot;:&quot;Bennett_2021_average_kg_10_3_d_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_average_kg_10_3_d_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ciguatoxin1_Bennett2021_bioaccumulation&quot;,&quot;label&quot;:&quot;Bennett_2021_bioaccumulation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_bioaccumulation.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ciguatoxin1_Bennett2021_depuration&quot;,&quot;label&quot;:&quot;Bennett_2021_depuration&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_depuration.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ciguatoxin1_Bennett2021_trial&quot;,&quot;label&quot;:&quot;Bennett_2021_trial&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_trial.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ciguatoxin 1 — `Ciguatoxin1_Bennett2021_trial`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

> The model does not reproduce the paper's terminal half-life (paper 2.33e+03, model 2).

<div class="pk-model-meta" hidden drug="Ciguatoxin 1" model-id="Ciguatoxin1_Bennett2021_trial" status="needs_review" stale="false" population="Lagodon rhomboides" measured-compound="Ciguatoxin 1" parameterization="mechanistic" topology="retention"></div>

## Citation
Bennett CT, Robertson A. Depuration Kinetics and Growth Dilution of Caribbean Ciguatoxin in the Omnivore Lagodon rhomboides: Implications for Trophic Transfer and Ciguatera Risk. Toxins 13(11) (2021).
  ·  DOI: [10.3390/toxins13110774](https://doi.org/10.3390/toxins13110774)

## Population and dosing

**Population:** Lagodon rhomboides · condition chronic dietary exposure · n = 40.

> **Species: fish.** This record comes from an animal study (fish), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 60 | t1/2β | 2 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 2.33e+03, model 2).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — ciguatoxin 1: t1/2β 2 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 60 | `Q60` · t1/2β | 2 | h | 7200 | s | h | llm (0.6) | Bennett_2021_table_5:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / 60 (Q60)

**Interpretation flags:**
- column 'trial' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '20' — extend the ontology if this is a real PK parameter (source ['Bennett_2021_table_5:row0:col1', 'Bennett_2021_table_5:row1:col1'])
- dropped unlinked row (NIL): '25' — extend the ontology if this is a real PK parameter (source ['Bennett_2021_table_5:row2:col1'])
- dropped unlinked row (NIL): '30' — extend the ontology if this is a real PK parameter (source ['Bennett_2021_table_5:row3:col1'])
- dropped unlinked row (NIL): '40' — extend the ontology if this is a real PK parameter (source ['Bennett_2021_table_5:row4:col1'])
- dropped unlinked row (NIL): '90' — extend the ontology if this is a real PK parameter (source ['Bennett_2021_table_5:row6:col1'])
- dropped unlinked row (NIL): '119' — extend the ontology if this is a real PK parameter (source ['Bennett_2021_table_5:row7:col1'])
- dropped unlinked row (NIL): '30–40' — extend the ontology if this is a real PK parameter (source ['Bennett_2021_table_6:row1:col1'])
- dropped unlinked row (NIL): '60–119' — extend the ontology if this is a real PK parameter (source ['Bennett_2021_table_6:row2:col1'])
- table mostly unlinked (8/9 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- implicit units: '60' → h (from the popPK convention: 'The paper text discusses fish depuration rates in units of day^-1 but does not explicitly state a unit for the parameter')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ciguatoxin 1
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'trial' subgroup of Bennett_2021 (paper reports 4 populations: average kg × 10−3 (d−1), bioaccumulation, depuration, trial)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Bennett_2021_table_4: units_need_context
- companion parameter table 5 transcribed (24 record(s))
- table Bennett_2021_table_6: unparsed_numeric_cell
- companion parameter table 6 transcribed (8 record(s))
- LLM selected parameter table(s) 4, 5, 6

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q60 | pass | [time] |  | ['Bennett_2021_table_5:row5:col1'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Ciguatoxin 1) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 2328 | 2.002 | 0.0009 | d→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1800 | 2.002 | 0.0011 | d→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3432 | 2.002 | 0.0006 | d→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3552 | 2.002 | 0.0006 | d→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3432 | 2.002 | 0.0006 | d→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3768 | 2.002 | 0.0005 | d→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_trial/Ciguatoxin1_Bennett2021_trial_modelica.zip" download>Ciguatoxin1_Bennett2021_trial_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_trial/Ciguatoxin1_Bennett2021_trial_fmi.zip" download>Ciguatoxin1_Bennett2021_trial_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_trial/Ciguatoxin1_Bennett2021_trial_matlab.zip" download>Ciguatoxin1_Bennett2021_trial_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_trial/Ciguatoxin1_Bennett2021_trial_sbml.zip" download>Ciguatoxin1_Bennett2021_trial_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_trial/Ciguatoxin1_Bennett2021_trial_cellml.zip" download>Ciguatoxin1_Bennett2021_trial_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 1.111 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 7200 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Bennett CT, Robertson A. Depuration Kinetics and Growth Dilution of Caribbean Ciguatoxin in the Omnivore Lagodon rhomboides: Implications for Trophic Transfer and Ciguatera Risk. Toxins 13(11) (2021). [doi:10.3390/toxins13110774](https://doi.org/10.3390/toxins13110774)

**This record:** Pharmacolibrary, model `Ciguatoxin1_Bennett2021_trial`. <https://pharmacolibrary.github.io/#/drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_trial>

```bibtex
@misc{pharmacolibrary_Ciguatoxin1Bennett2021trial,
  title  = {{Pharmacolibrary model Ciguatoxin1_Bennett2021_trial}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_trial},
  note   = {Parameters from doi:10.3390/toxins13110774},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_trial/Ciguatoxin1_Bennett2021_trial_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_trial/Ciguatoxin1_Bennett2021_trial_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Ciguatoxin1_Bennett2021_trial_params.json` · controls `Ciguatoxin1_Bennett2021_trial_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bciguatoxin_1%5D%20Ciguatoxin1_Bennett2021_trial&body=Drug%3A%20ciguatoxin_1%0ARecord%3A%20Ciguatoxin1_Bennett2021_trial%0APaper%3A%20Bennett_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ciguatoxin_1/Ciguatoxin1_Bennett2021_trial%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 05:53 UTC</sub>
