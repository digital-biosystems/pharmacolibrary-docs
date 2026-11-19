<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Moclobemide&quot;,&quot;href&quot;:&quot;drugs/toxin_moclobemide/&quot;},{&quot;label&quot;:&quot;Schoerlin_1987 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moclobemide_Isbister2003_reference&quot;,&quot;label&quot;:&quot;Isbister_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_moclobemide/Moclobemide_Isbister2003_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moclobemide_Schoerlin1987_reference&quot;,&quot;label&quot;:&quot;Schoerlin_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Moclobemide_JastrzbskaWisek2018_reference&quot;,&quot;label&quot;:&quot;Jastrz\u0119bska-Wi\u0119sek_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_moclobemide/Moclobemide_JastrzbskaWisek2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moclobemide_Oie1992_reference&quot;,&quot;label&quot;:&quot;Oie_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_moclobemide/Moclobemide_Oie1992_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moclobemide_Raaflaub1984_reference&quot;,&quot;label&quot;:&quot;Raaflaub_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_moclobemide/Moclobemide_Raaflaub1984_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moclobemide_Schoerlin1991_reference&quot;,&quot;label&quot;:&quot;Schoerlin_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_moclobemide/Moclobemide_Schoerlin1991_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Moclobemide — `Moclobemide_Schoerlin1987_reference`

> ## <span class="pk-badge pk-badge--blue">Simulated</span>

<div class="pk-model-meta" hidden drug="Moclobemide" model-id="Moclobemide_Schoerlin1987_reference" status="simulated" stale="false" population="normal male subjects" measured-compound="Moclobemide" parameterization="mechanistic" topology="1C"></div>

## Citation
Schoerlin MP, Mayersohn M, Korn A, Eggers H. Disposition kinetics of moclobemide, a monoamine oxidase-A enzyme inhibitor: single and multiple dosing in normal subjects. Clinical pharmacology and therapeutics 42(4):395–404 (1987).
  ·  DOI: [10.1038/clpt.1987.169](https://doi.org/10.1038/clpt.1987.169)

## Population and dosing

**Population:** normal male subjects · condition healthy · age group adult · n = 12.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference/Moclobemide_Schoerlin1987_reference.svg" alt="Moclobemide_Schoerlin1987_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| clearance | CL | 39.4 | L/hr |
| elimination half-life | t1/2z | 1.6 | hours |
| volume of distribution at steady state | Vss | 84.3 | L |
| absolute oral bioavailability | Fab | 0.56 |  |
| volume of distribution | V | 102.0 | L/kg |

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
| clearance | `Q22` · CL | 39.4 | L/hr | 1.094e-05 | m3/s | l/h | exact (1) | Schoerlin_1987:abstract, Schoerlin_1987:abstract |
| elimination half-life | `Q57` · t1/2z | 1.6 | hours | 5760 | s | h | half_life_rule (0.95) | Schoerlin_1987:abstract, Schoerlin_1987:abstract |
| volume of distribution at steady state | `Q65` · Vss | 84.3 | L | 0.0843 | m3 | l | llm_corrected (0.6) | Schoerlin_1987:abstract, Schoerlin_1987:abstract |
| absolute oral bioavailability | `Q40` · Fab | 0.56 |  |  |  |  | exact (1) | Schoerlin_1987:abstract, Schoerlin_1987:abstract, Schoerlin_1987:abstract |
| volume of distribution | `Q61` · V | 102.0 | L/kg | 7.14 | m3 | L | review_gapfill (0.7) | Jastrzębska-Więsek_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Moclobemide
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Jastrzębska-Więsek_2018's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Schoerlin_1987_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model
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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Schoerlin_1987:abstract', 'Schoerlin_1987:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Schoerlin_1987:abstract', 'Schoerlin_1987:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Jastrzębska-Więsek_2018:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Schoerlin_1987:abstract', 'Schoerlin_1987:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 39.4 | ['Schoerlin_1987:abstract', 'Schoerlin_1987:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 39.4 L/h | ['Schoerlin_1987:abstract', 'Schoerlin_1987:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 7.14e+03 L | ['Jastrzębska-Więsek_2018:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 84.3 L | ['Schoerlin_1987:abstract', 'Schoerlin_1987:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=Moclobemide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference/Moclobemide_Schoerlin1987_reference_modelica.zip" download>Moclobemide_Schoerlin1987_reference_modelica.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference/Moclobemide_Schoerlin1987_reference_fmi.zip" download>Moclobemide_Schoerlin1987_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference/Moclobemide_Schoerlin1987_reference_matlab.zip" download>Moclobemide_Schoerlin1987_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference/Moclobemide_Schoerlin1987_reference_matlab_simbio.zip" download>Moclobemide_Schoerlin1987_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference/Moclobemide_Schoerlin1987_reference_sbml.zip" download>Moclobemide_Schoerlin1987_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference/Moclobemide_Schoerlin1987_reference_cellml.zip" download>Moclobemide_Schoerlin1987_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2687 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.094e-05 | m3/s |
| input | model | `VdPerKg` | 0.102 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Schoerlin MP, Mayersohn M, Korn A, Eggers H. Disposition kinetics of moclobemide, a monoamine oxidase-A enzyme inhibitor: single and multiple dosing in normal subjects. Clinical pharmacology and therapeutics 42(4):395–404 (1987). [doi:10.1038/clpt.1987.169](https://doi.org/10.1038/clpt.1987.169)

**This record:** Pharmacolibrary, model `Moclobemide_Schoerlin1987_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference>

```bibtex
@misc{pharmacolibrary_MoclobemideSchoerlin1987reference,
  title  = {{Pharmacolibrary model Moclobemide_Schoerlin1987_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference},
  note   = {Parameters from doi:10.1038/clpt.1987.169},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference/Moclobemide_Schoerlin1987_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference/Moclobemide_Schoerlin1987_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Moclobemide_Schoerlin1987_reference_params.json` · controls `Moclobemide_Schoerlin1987_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmoclobemide%5D%20Moclobemide_Schoerlin1987_reference&body=Drug%3A%20moclobemide%0ARecord%3A%20Moclobemide_Schoerlin1987_reference%0APaper%3A%20Schoerlin_1987%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_moclobemide/Moclobemide_Schoerlin1987_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 12:39 UTC</sub>
