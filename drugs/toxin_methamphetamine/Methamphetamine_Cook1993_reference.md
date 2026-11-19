<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methamphetamine&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/&quot;},{&quot;label&quot;:&quot;Cook_1993 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methamphetamine_Cook1992_reference&quot;,&quot;label&quot;:&quot;Cook_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Cook1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methamphetamine_Cook1993_reference&quot;,&quot;label&quot;:&quot;Cook_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Methamphetamine_Su2025_reference&quot;,&quot;label&quot;:&quot;Su_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Su2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methamphetamine_Yin2021_reference&quot;,&quot;label&quot;:&quot;Yin_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Yin2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methamphetamine — `Methamphetamine_Cook1993_reference`

> ## <span class="pk-badge pk-badge--blue">Simulated</span>

<div class="pk-model-meta" hidden drug="Methamphetamine" model-id="Methamphetamine_Cook1993_reference" status="simulated" stale="false" population="Male human volunteers" measured-compound="Methamphetamine" parameterization="mechanistic" topology="1C"></div>

## Citation
Cook CE, Jeffcoat AR, Hill JM, Pugh DE, Patetta PK, Sadler BM et al. Pharmacokinetics of methamphetamine self-administered to human subjects by smoking S-(+)-methamphetamine hydrochloride. Drug metabolism and disposition: the biological fate of chemicals 21(4):717–723 (1993).

## Population and dosing

**Population:** Male human volunteers · condition healthy · age group adult · n = 6.

**Dosed compound ≠ measured compound:** dosed S-(+)-methamphetamine hydrochloride, measured Methamphetamine.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference/Methamphetamine_Cook1993_reference.svg" alt="Methamphetamine_Cook1993_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| The geometric mean plasma half-life was | t1/2z | 11.1 | hr |
| The volume of distribution in the elimination phase was | V | 3.24 | liter/kg |
| for the intravenous dose. | V | 3.73 | liter/kg |
| Metabolic clearance represented | CL | 58 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The geometric mean plasma half-life was | `Q57` · t1/2z | 11.1 | hr | 3.996e+04 | s | h | llm (0.6) | Cook_1993:abstract |
| The volume of distribution in the elimination phase was | `Q61` · V | 3.24 | liter/kg | 0.2268 | m3 | l/kg | llm_confirmed (0.6) | Cook_1993:abstract, Cook_1993:abstract |
| for the intravenous dose. | `Q61` · V | 3.73 | liter/kg | 0.2611 | m3 | l/kg | llm (0.6) | Cook_1993:abstract, Cook_1993:abstract |
| Metabolic clearance represented | `Q22` · CL | 58 | L/h | 1.611e-05 | m3/s | L/h | llm_confirmed (0.6) | Cook_1993:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'for the intravenous drug.' — extend the ontology if this is a real PK parameter (source ['Cook_1993:abstract'])
- dropped unlinked row (NIL): 'respectively,' — extend the ontology if this is a real PK parameter (source ['Cook_1993:abstract'])
- dropped value-less row: 'were excreted in urine as methamphetamine and lesser amounts'
- dropped unlinked row (NIL): 'as amphetamine.' — extend the ontology if this is a real PK parameter (source ['Cook_1993:abstract'])
- implicit units: 'Metabolic clearance represented' → L/h (from the popPK convention: 'The parameter is total clearance (CL). In population pharmacokinetics, unless body weight scaling is explicitly indicate')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Methamphetamine
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles: 2 per-group rows of S-(+)-methamphetamine hydrochloride summary_statistic but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of Methamphetamine summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role; re-tagged Methamphetamine→parent ×3, Methamphetamine→Amphetamine ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Cook_1993_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
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
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Cook_1993:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Cook_1993:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Cook_1993:abstract', 'Cook_1993:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Cook_1993:abstract', 'Cook_1993:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 58 | ['Cook_1993:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 58 L/h | ['Cook_1993:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 227 L | ['Cook_1993:abstract', 'Cook_1993:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 261 L | ['Cook_1993:abstract', 'Cook_1993:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=Methamphetamine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference/Methamphetamine_Cook1993_reference_modelica.zip" download>Methamphetamine_Cook1993_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference/Methamphetamine_Cook1993_reference_fmi.zip" download>Methamphetamine_Cook1993_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference/Methamphetamine_Cook1993_reference_matlab.zip" download>Methamphetamine_Cook1993_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference/Methamphetamine_Cook1993_reference_matlab_simbio.zip" download>Methamphetamine_Cook1993_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference/Methamphetamine_Cook1993_reference_sbml.zip" download>Methamphetamine_Cook1993_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference/Methamphetamine_Cook1993_reference_cellml.zip" download>Methamphetamine_Cook1993_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1492 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.611e-05 | m3/s |
| input | model | `VdPerKg` | 0.00373 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Cook CE, Jeffcoat AR, Hill JM, Pugh DE, Patetta PK, Sadler BM et al. Pharmacokinetics of methamphetamine self-administered to human subjects by smoking S-(+)-methamphetamine hydrochloride. Drug metabolism and disposition: the biological fate of chemicals 21(4):717–723 (1993).

**This record:** Pharmacolibrary, model `Methamphetamine_Cook1993_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference>

```bibtex
@misc{pharmacolibrary_MethamphetamineCook1993reference,
  title  = {{Pharmacolibrary model Methamphetamine_Cook1993_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference/Methamphetamine_Cook1993_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference/Methamphetamine_Cook1993_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Methamphetamine_Cook1993_reference_params.json` · controls `Methamphetamine_Cook1993_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethamphetamine%5D%20Methamphetamine_Cook1993_reference&body=Drug%3A%20methamphetamine%0ARecord%3A%20Methamphetamine_Cook1993_reference%0APaper%3A%20Cook_1993%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 03:14 UTC</sub>
