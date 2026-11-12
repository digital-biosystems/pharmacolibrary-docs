<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Tyramine&quot;,&quot;href&quot;:&quot;drugs/toxin_tyramine/&quot;},{&quot;label&quot;:&quot;Rafehi_2019 \u00b7 4_hpaa&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tyramine_Rafehi2019_4_hpaa&quot;,&quot;label&quot;:&quot;Rafehi_2019_4_hpaa&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tyramine — `Tyramine_Rafehi2019_4_hpaa`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="Tyramine" model-id="Tyramine_Rafehi2019_4_hpaa" status="curated_candidate" stale="false" population="healthy volunteers" measured-compound="Tyramine" parameterization="mechanistic" topology="retention"></div>

## Citation
Rafehi M, Faltraco F, Matthaei J, Prukop T, Jensen O, Grytzmann A et al. Highly Variable Pharmacokinetics of Tyramine in Humans and Polymorphisms in OCT1, CYP2D6, and MAO-A. Frontiers in pharmacology 10:1297 (2019).
  ·  DOI: [10.3389/fphar.2019.01297](https://doi.org/10.3389/fphar.2019.01297)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 88.

**Dosing:** 400 mg, oral, single.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| AUC inf (min*µg/ml) | AUC∞ | 1298 | min*µg/ml |
| t 1/2 (min) | t1/2z | 73 | min |
| t max (min) | tmax | 88 | min |
| C max (µg/ml) | Cmax | 9.04 | µg/ml |
| CL renal (l/min) | CLR | 0.24 | l/min |
| Ae 0-6h (mg) | Ae | 307 | mg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC inf (min*µg/ml) | `Q17` · AUC∞ | 1298 | min*µg/ml | 77.88 | kg*s/m3 | (min·µg)/ml | space_fold (0.95) | T2:row1:col2 |
| t 1/2 (min) | `Q57` · t1/2z | 73 | min | 4380 | s | min | half_life_rule (0.95) | T2:row2:col2 |
| t max (min) | `Q56` · tmax | 88 | min | 5280 | s | min | space_fold (0.95) | T2:row3:col2 |
| C max (µg/ml) | `Q32` · Cmax | 9.04 | µg/ml | 0.00904 | kg/m3 | µg/ml | space_fold (0.95) | T2:row4:col2 |
| CL renal (l/min) | `Q26` · CLR | 0.24 | l/min | 4e-06 | m3/s | l/min | llm_corrected (0.6) | T2:row6:col2 |
| Ae 0-6h (mg) | `Q91` · Ae | 307 | mg | 0.000307 | kg | mg | llm_confirmed (0.6) | T2:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t 1/2 (min) (Q57)

**Interpretation flags:**
- dropped duplicate Q91 ('2x Ae -3-0h (mg)', value '4.32') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Tyramine
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- population split: '4-hpaa' subgroup of Rafehi_2019 (paper reports 2 populations: 4-hpaa, tyramine)
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role; re-tagged Tyramine→parent ×8
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['T2:row1:col2'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['T2:row6:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['T2:row4:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['T2:row3:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['T2:row2:col2'] |
| C5_dimension_Q91 | pass | [mass] |  | ['T2:row7:col2'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Tyramine) | retainedFraction | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_tmax | reference | skipped |  | 0.0481 | non-numeric value |
| T1_tmax | reference | skipped |  | 0.0481 | non-numeric value |
| T1_tmax | reference | skipped |  | 0.0481 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa/Tyramine_Rafehi2019_4_hpaa_modelica.zip" download>Tyramine_Rafehi2019_4_hpaa_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa/Tyramine_Rafehi2019_4_hpaa_fmi.zip" download>Tyramine_Rafehi2019_4_hpaa_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa/Tyramine_Rafehi2019_4_hpaa_matlab.zip" download>Tyramine_Rafehi2019_4_hpaa_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa/Tyramine_Rafehi2019_4_hpaa_sbml.zip" download>Tyramine_Rafehi2019_4_hpaa_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa/Tyramine_Rafehi2019_4_hpaa_cellml.zip" download>Tyramine_Rafehi2019_4_hpaa_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1372 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0004 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 4380 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Rafehi M, Faltraco F, Matthaei J, Prukop T, Jensen O, Grytzmann A et al. Highly Variable Pharmacokinetics of Tyramine in Humans and Polymorphisms in OCT1, CYP2D6, and MAO-A. Frontiers in pharmacology 10:1297 (2019). [doi:10.3389/fphar.2019.01297](https://doi.org/10.3389/fphar.2019.01297)

**This record:** Pharmacolibrary, model `Tyramine_Rafehi2019_4_hpaa`. <https://pharmacolibrary.github.io/#/drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa>

```bibtex
@misc{pharmacolibrary_TyramineRafehi20194hpaa,
  title  = {{Pharmacolibrary model Tyramine_Rafehi2019_4_hpaa}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa},
  note   = {Parameters from doi:10.3389/fphar.2019.01297},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa/Tyramine_Rafehi2019_4_hpaa_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa/Tyramine_Rafehi2019_4_hpaa_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Tyramine_Rafehi2019_4_hpaa_params.json` · controls `Tyramine_Rafehi2019_4_hpaa_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btyramine%5D%20Tyramine_Rafehi2019_4_hpaa&body=Drug%3A%20tyramine%0ARecord%3A%20Tyramine_Rafehi2019_4_hpaa%0APaper%3A%20Rafehi_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 04:28 UTC</sub>
