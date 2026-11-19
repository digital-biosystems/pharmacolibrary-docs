<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Flutamide&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/&quot;},{&quot;label&quot;:&quot;Ali_2021 \u00b7 flutamide_loaded_niosomes&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flutamide_Ali2021_flutamide_loaded_niosomes&quot;,&quot;label&quot;:&quot;Ali_2021_flutamide_loaded_niosomes&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Flutamide_Radwanski1989_reference&quot;,&quot;label&quot;:&quot;Radwanski_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Radwanski1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flutamide_Sharma2020_reference&quot;,&quot;label&quot;:&quot;Sharma_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Sharma2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flutamide_Mendoza2017_reference&quot;,&quot;label&quot;:&quot;Mendoza_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Mendoza2017_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Flutamide — `Flutamide_Ali2021_flutamide_loaded_niosomes`

> ## <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<div class="pk-model-meta" hidden drug="Flutamide" model-id="Flutamide_Ali2021_flutamide_loaded_niosomes" status="simulated" stale="false" population="male rats" measured-compound="Flutamide" parameterization="mechanistic" topology="retention"></div>

## Citation
Ali MA, Mohamed MI, Megahed MA, Abdelghany TM, El-Say KM. Cholesterol-Based Nanovesicles Enhance the In Vitro Cytotoxicity, Ex Vivo Intestinal Absorption, and In Vivo Bioavailability of Flutamide. Pharmaceutics 13(11) (2021).
  ·  DOI: [10.3390/pharmaceutics13111741](https://doi.org/10.3390/pharmaceutics13111741)

## Population and dosing

**Population:** male rats · condition healthy · age group adult.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| t1/2 (min) | t1/2z | 163.418 | min |
| AUC(6–∞) (µg/mL × min) | AUC | 141.458 | µg/mL × min |
| MRT(0–∞) (min) | MRT | 213.309 | min |
| first order absorption rate constant | kabs | 0.62 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 (min) | `Q57` · t1/2z | 163.418 | min | 9805 | s | min | half_life_rule (0.95) | Ali_2021_table_6:row0:col1 |
| AUC(6–∞) (µg/mL × min) | `Q88` · AUC | 141.458 | µg/mL × min | 8.487 | kg*s/m3 | µg/(min·ml) | space_fold (0.95) | Ali_2021_table_6:row3:col1 |
| MRT(0–∞) (min) | `Q53` · MRT | 213.309 | min | 1.28e+04 | s | min | space_fold (0.95) | Ali_2021_table_6:row6:col1 |
| first order absorption rate constant | `Q49` · kabs | 0.62 | h-1 | 0.0001722 | 1/s | 1/h | review_gapfill (0.7) | Sharma_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t1/2 (min) (Q57)

**Interpretation flags:**
- dropped value-less row: 'X1'
- dropped value-less row: 'X2'
- dropped value-less row: 'X3'
- dropped value-less row: 'X4'
- dropped value-less row: 'X1X2, X1X3, X1X4, X2X3, X2X4 and X3X4'
- dropped value-less row: 'X12, X22, X32 and X42'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Flutamide
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- population split: 'flutamide loaded niosomes' subgroup of Ali_2021 (paper reports 2 populations: flutamide loaded niosomes, free flutamide suspension)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Sharma_2020's review values (primary lacked it)

**Extraction notes:**
- table pharmaceutics-13-01741-t003: units_need_context
- table Ali_2021_table_6: unparsed_numeric_cell
- companion parameter table 6 transcribed (12 record(s))
- LLM selected parameter table(s) 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (7/7 fields) | none |

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
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Sharma_2020:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Ali_2021_table_6:row6:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Ali_2021_table_6:row0:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Ali_2021_table_6:row3:col1'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Flutamide) | retainedFraction | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 6.95 | 0.996 | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 2.65 | 0.996 | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 0.996 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes/Flutamide_Ali2021_flutamide_loaded_niosomes_modelica.zip" download>Flutamide_Ali2021_flutamide_loaded_niosomes_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes/Flutamide_Ali2021_flutamide_loaded_niosomes_fmi.zip" download>Flutamide_Ali2021_flutamide_loaded_niosomes_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes/Flutamide_Ali2021_flutamide_loaded_niosomes_matlab.zip" download>Flutamide_Ali2021_flutamide_loaded_niosomes_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes/Flutamide_Ali2021_flutamide_loaded_niosomes_sbml.zip" download>Flutamide_Ali2021_flutamide_loaded_niosomes_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes/Flutamide_Ali2021_flutamide_loaded_niosomes_cellml.zip" download>Flutamide_Ali2021_flutamide_loaded_niosomes_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2762 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 9805 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Ali MA, Mohamed MI, Megahed MA, Abdelghany TM, El-Say KM. Cholesterol-Based Nanovesicles Enhance the In Vitro Cytotoxicity, Ex Vivo Intestinal Absorption, and In Vivo Bioavailability of Flutamide. Pharmaceutics 13(11) (2021). [doi:10.3390/pharmaceutics13111741](https://doi.org/10.3390/pharmaceutics13111741)

**This record:** Pharmacolibrary, model `Flutamide_Ali2021_flutamide_loaded_niosomes`. <https://pharmacolibrary.github.io/#/drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes>

```bibtex
@misc{pharmacolibrary_FlutamideAli2021flutamideloadedniosomes,
  title  = {{Pharmacolibrary model Flutamide_Ali2021_flutamide_loaded_niosomes}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes},
  note   = {Parameters from doi:10.3390/pharmaceutics13111741},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes/Flutamide_Ali2021_flutamide_loaded_niosomes_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes/Flutamide_Ali2021_flutamide_loaded_niosomes_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Flutamide_Ali2021_flutamide_loaded_niosomes_params.json` · controls `Flutamide_Ali2021_flutamide_loaded_niosomes_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflutamide%5D%20Flutamide_Ali2021_flutamide_loaded_niosomes&body=Drug%3A%20flutamide%0ARecord%3A%20Flutamide_Ali2021_flutamide_loaded_niosomes%0APaper%3A%20Ali_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 11:12 UTC</sub>
