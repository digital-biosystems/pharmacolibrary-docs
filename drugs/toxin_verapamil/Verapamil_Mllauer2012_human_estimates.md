<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Verapamil&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/&quot;},{&quot;label&quot;:&quot;M\u00fcllauer_2012 \u00b7 human_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Verapamil_Sips2026_dofetilide_observed&quot;,&quot;label&quot;:&quot;Sips_2026_dofetilide_observed&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Sips2026_dofetilide_observed.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Sips2026_verapamil_observed&quot;,&quot;label&quot;:&quot;Sips_2026_verapamil_observed&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Sips2026_verapamil_observed.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Hanley2024_reference&quot;,&quot;label&quot;:&quot;Hanley_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Hanley2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Hong2021_reference&quot;,&quot;label&quot;:&quot;Hong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Hong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Mllauer2012_human_estimates&quot;,&quot;label&quot;:&quot;M\u00fcllauer_2012_human_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Verapamil_Sauder1990_reference&quot;,&quot;label&quot;:&quot;Sauder_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Sauder1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Verapamil — `Verapamil_Mllauer2012_human_estimates`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="Verapamil" model-id="Verapamil_Mllauer2012_human_estimates" status="needs_review" stale="false" population="naive and 48-h post status epilepticus rats and healthy human volunteers" measured-compound="(R)-[11C]verapamil" parameterization="mechanistic" topology="2C"></div>

## Citation
Müllauer J, Kuntner C, Bauer M, Bankstahl JP, Müller M, Voskuyl RA et al. Pharmacokinetic modeling of P-glycoprotein function at the rat and human blood-brain barriers studied with (R)-[11C]verapamil positron emission tomography. EJNMMI research 2(1):58 (2012).
  ·  DOI: [10.1186/2191-219x-2-58](https://doi.org/10.1186/2191-219x-2-58)

## Population and dosing

**Population:** naive and 48-h post status epilepticus rats and healthy human volunteers · condition healthy controls and pilocarpine-induced status epilepticus (PET tracer dosing) · age group adult · n = 21 rats and 5 humans.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.60).

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates/Verapamil_Mllauer2012_human_estimates.svg" alt="Verapamil_Mllauer2012_human_estimates diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc (ml) | V1 | 2580 | ml |
| Vp1 (ml) | V2 | 57900 | ml |
| Vp2 (ml) | V3 | 41100 | ml |
| CL (ml·min−1) | CL | 538 | ml·min−1 |
| Q1 (ml·min−1) | Q | 6550 | ml·min−1 |
| Q2 (ml·min−1) | Q2 | 5880 | ml·min−1 |
| first-order absorption rate constant (ka) | kabs | 1.0 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. None of the extracted parameters is verapamil's own; they describe (R)-[11C]verapamil. Extracted — (R)-[11C]verapamil: V1 2.58e+03 ml, V2 5.79e+04 ml, V3 4.11e+04 ml, CL 538 ml·min−1, Q 6.55e+03 ml·min−1, Q2 5.88e+03 ml·min−1, kabs 1 h−1.

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc (ml) | `Q63` · V1 | 2580 | ml | 0.00258 | m3 | ml | exact (1) | T3:row2:col3 |
| Vp1 (ml) | `Q64` · V2 | 57900 | ml | 0.0579 | m3 | ml | exact (1) | T3:row4:col3 |
| Vp2 (ml) | `Q77` · V3 | 41100 | ml | 0.0411 | m3 | ml | exact (1) | T3:row6:col3 |
| CL (ml·min−1) | `Q22` · CL | 538 | ml·min−1 | 8.967e-06 | m3/s | ml/min | exact (1) | T3:row8:col3 |
| Q1 (ml·min−1) | `Q30` · Q | 6550 | ml·min−1 | 0.0001092 | m3/s | ml/min | exact (1) | T3:row10:col3 |
| Q2 (ml·min−1) | `Q99` · Q2 | 5880 | ml·min−1 | 9.8e-05 | m3/s | ml/min | second_intercompartmental (0.9) | T3:row12:col3 |
| first-order absorption rate constant (ka) | `Q49` · kabs | 1.0 | h−1 | 0.0002778 | 1/s | 1/h | review_gapfill (0.7) | Sips_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- 'Q2 (ml·min−1)' linked to Q99: a second intercompartmental clearance beside the Q30 already present
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=(R)-[11C]verapamil
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'human estimates' subgroup of Müllauer_2012 (paper reports 4 populations: human estimates, rat / estimates, species / human, species / rat)
- molar mass: none found for '(R)-[11C]verapamil' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Sips_2026's review values (primary lacked it)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C6_cl_magnitude failed (ratio None))

**Extraction notes:**
- table T3: ragged_grid
- table Müllauer_2012_table_4: ragged_grid
- companion parameter table 4 transcribed (115 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T3:row8:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T3:row10:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Sips_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T3:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T3:row4:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T3:row6:col3'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['T3:row12:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 538 | ['T3:row8:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 32.3 L/h | ['T3:row8:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.58 L | ['T3:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 57.9 L | ['T3:row4:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates/Verapamil_Mllauer2012_human_estimates_modelica.zip" download>Verapamil_Mllauer2012_human_estimates_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates/Verapamil_Mllauer2012_human_estimates_fmi.zip" download>Verapamil_Mllauer2012_human_estimates_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates/Verapamil_Mllauer2012_human_estimates_matlab.zip" download>Verapamil_Mllauer2012_human_estimates_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates/Verapamil_Mllauer2012_human_estimates_matlab_simbio.zip" download>Verapamil_Mllauer2012_human_estimates_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates/Verapamil_Mllauer2012_human_estimates_sbml.zip" download>Verapamil_Mllauer2012_human_estimates_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates/Verapamil_Mllauer2012_human_estimates_cellml.zip" download>Verapamil_Mllauer2012_human_estimates_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00024 | kg |
| input | model | `Cl` | 8.967e-06 | m3/s |
| input | model | `VdPerKg` | 3.686e-05 | m3/kg |
| input | model | `k12` | 0.04231 | 1/s |
| input | model | `k21` | 0.001885 | 1/s |
| input | model | `ka` | 0.0002778 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Müllauer J, Kuntner C, Bauer M, Bankstahl JP, Müller M, Voskuyl RA et al. Pharmacokinetic modeling of P-glycoprotein function at the rat and human blood-brain barriers studied with (R)-[11C]verapamil positron emission tomography. EJNMMI research 2(1):58 (2012). [doi:10.1186/2191-219x-2-58](https://doi.org/10.1186/2191-219x-2-58)

**This record:** Pharmacolibrary, model `Verapamil_Mllauer2012_human_estimates`. <https://pharmacolibrary.github.io/#/drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates>

```bibtex
@misc{pharmacolibrary_VerapamilMllauer2012humanestimates,
  title  = {{Pharmacolibrary model Verapamil_Mllauer2012_human_estimates}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates},
  note   = {Parameters from doi:10.1186/2191-219x-2-58},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: oral** — 240 mg, single dose, first-order absorption (ka 1 /h, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 240 mg oral (C08DA01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates/Verapamil_Mllauer2012_human_estimates_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates/Verapamil_Mllauer2012_human_estimates_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Verapamil_Mllauer2012_human_estimates_params.json` · controls `Verapamil_Mllauer2012_human_estimates_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bverapamil%5D%20Verapamil_Mllauer2012_human_estimates&body=Drug%3A%20verapamil%0ARecord%3A%20Verapamil_Mllauer2012_human_estimates%0APaper%3A%20M%C3%BCllauer_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 21:31 UTC</sub>
