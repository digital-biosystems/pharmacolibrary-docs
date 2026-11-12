<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Creatine&quot;,&quot;href&quot;:&quot;drugs/toxin_creatine/&quot;},{&quot;label&quot;:&quot;Alraddadi_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Creatine_Alraddadi2018_reference&quot;,&quot;label&quot;:&quot;Alraddadi_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_creatine/Creatine_Alraddadi2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Creatine — `Creatine_Alraddadi2018_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 1, model 1.33); the model does not reproduce the paper's peak concentration (Cmax) (paper 0.0136, model 0.515).

<div class="pk-model-meta" hidden drug="Creatine" model-id="Creatine_Alraddadi2018_reference" status="needs_review" stale="false" population="adult male Sprague-Dawley rats" measured-compound="Creatine-13C" parameterization="mechanistic" topology="1C"></div>

## Citation
Alraddadi EA, Lillico R, Vennerstrom JL, Lakowski TM, Miller DW. Absolute Oral Bioavailability of Creatine Monohydrate in Rats: Debunking a Myth. Pharmaceutics 10(1) (2018).
  ·  DOI: [10.3390/pharmaceutics10010031](https://doi.org/10.3390/pharmaceutics10010031)

## Population and dosing

**Population:** adult male Sprague-Dawley rats · condition healthy · age group adult · n = 4.

**Dosing:** 700, 4900 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Creatine monohydrate (13C-labeled), measured Creatine-13C.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_creatine/Creatine_Alraddadi2018_reference/Creatine_Alraddadi2018_reference.svg" alt="Creatine_Alraddadi2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (μg/mL) | Cmax | 13.72 | μg/mL |
| Tmax (min) | tmax | 60 | min |
| Vd (L/kg) | V | 0.304 | L/kg |
| T1/2 (min) | t1/2z | 69.3 | min |
| CL (L/hr) | CL | 0.051 | L/hr |
| AUC0–∞ (μg·h/mL) | AUC∞ | 2501.33 | μg·h/mL |
| F (%) | Fab | 15.69 | % |
| Ka | kabs | 6.47 | h− 1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 1, model 1.33); the model does not reproduce the paper's peak concentration (Cmax) (paper 0.0136, model 0.515).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Fab), so that value has no SI equivalent. Extracted — creatine: Cmax 13.7 μg/mL, tmax 60 min, V 0.304 L/kg, t1/2z 69.3 min, CL 0.051 L/hr, AUC∞ 2.5e+03 μg·h/mL, Fab 15.7 %; Creatine-13C: kabs 6.47 h− 1.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (μg/mL) | `Q32` · Cmax | 13.72 | μg/mL | 0.01372 | kg/m3 | µg/ml | exact (1) | pharmaceutics-10-00031-t001:row2:col1, pharmaceutics-10-00031-t001:row2:col2, pharmaceutics-10-00031-t001:row2:col3, pharmaceutics-10-00031-t001:row2:col4 |
| Tmax (min) | `Q56` · tmax | 60 | min | 3600 | s | min | exact (1) | pharmaceutics-10-00031-t001:row3:col1, pharmaceutics-10-00031-t001:row3:col2, pharmaceutics-10-00031-t001:row3:col3, pharmaceutics-10-00031-t001:row3:col4 |
| Vd (L/kg) | `Q61` · V | 0.304 | L/kg | 0.02128 | m3 | l/kg | exact (1) | pharmaceutics-10-00031-t001:row4:col1, pharmaceutics-10-00031-t001:row4:col2 |
| T1/2 (min) | `Q57` · t1/2z | 69.3 | min | 4158 | s | min | half_life_rule (0.95) | pharmaceutics-10-00031-t001:row5:col1, pharmaceutics-10-00031-t001:row5:col2 |
| CL (L/hr) | `Q22` · CL | 0.051 | L/hr | 1.417e-08 | m3/s | l/h | exact (1) | pharmaceutics-10-00031-t001:row6:col1, pharmaceutics-10-00031-t001:row6:col2 |
| AUC0–∞ (μg·h/mL) | `Q17` · AUC∞ | 2501.33 | μg·h/mL | 9005 | kg*s/m3 | (h·µg)/ml | exact (1) | pharmaceutics-10-00031-t001:row7:col1, pharmaceutics-10-00031-t001:row7:col2, pharmaceutics-10-00031-t001:row7:col3, pharmaceutics-10-00031-t001:row7:col4 |
| F (%) | `Q40` · Fab | 15.69 | % |  |  |  | exact (1) | pharmaceutics-10-00031-t001:row8:col3, pharmaceutics-10-00031-t001:row8:col4 |
| Ka | `Q49` · kabs | 6.47 | h− 1 | 0.001797 | 1/s | 1/h | review_gapfill (0.7) | Yu_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'R2 value (model vs. observed)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-10-00031-t001:row9:col1', 'pharmaceutics-10-00031-t001:row9:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Creatine-13C
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Creatine-13C' ('creatine-13C') — left in mass units
- molar mass: none found for 'Creatine-13C' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Yu_2026's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['pharmaceutics-10-00031-t001:row7:col1', 'pharmaceutics-10-00031-t001:row7:col2', 'pharmaceutics-10-00031-t001:row7:col3', 'pharmaceutics-10-00031-t001:row7:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-10-00031-t001:row6:col1', 'pharmaceutics-10-00031-t001:row6:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['pharmaceutics-10-00031-t001:row2:col1', 'pharmaceutics-10-00031-t001:row2:col2', 'pharmaceutics-10-00031-t001:row2:col3', 'pharmaceutics-10-00031-t001:row2:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Yu_2026:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['pharmaceutics-10-00031-t001:row3:col1', 'pharmaceutics-10-00031-t001:row3:col2', 'pharmaceutics-10-00031-t001:row3:col3', 'pharmaceutics-10-00031-t001:row3:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['pharmaceutics-10-00031-t001:row5:col1', 'pharmaceutics-10-00031-t001:row5:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['pharmaceutics-10-00031-t001:row4:col1', 'pharmaceutics-10-00031-t001:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.051 | ['pharmaceutics-10-00031-t001:row6:col1', 'pharmaceutics-10-00031-t001:row6:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.051 L/h | ['pharmaceutics-10-00031-t001:row6:col1', 'pharmaceutics-10-00031-t001:row6:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 21.3 L | ['pharmaceutics-10-00031-t001:row4:col1', 'pharmaceutics-10-00031-t001:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=Creatine-13C) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.01359 | 0.5146 | 37.87 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00714 | 0.5146 | 72.07 | μg/mL→SI vs simulated kg/m3 |
| T1_tmax | reference | fail | 1 | 1.329 | 1.329 | min→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_creatine/Creatine_Alraddadi2018_reference/Creatine_Alraddadi2018_reference_modelica.zip" download>Creatine_Alraddadi2018_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_creatine/Creatine_Alraddadi2018_reference/Creatine_Alraddadi2018_reference_fmi.zip" download>Creatine_Alraddadi2018_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_creatine/Creatine_Alraddadi2018_reference/Creatine_Alraddadi2018_reference_matlab.zip" download>Creatine_Alraddadi2018_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_creatine/Creatine_Alraddadi2018_reference/Creatine_Alraddadi2018_reference_matlab_simbio.zip" download>Creatine_Alraddadi2018_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_creatine/Creatine_Alraddadi2018_reference/Creatine_Alraddadi2018_reference_sbml.zip" download>Creatine_Alraddadi2018_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_creatine/Creatine_Alraddadi2018_reference/Creatine_Alraddadi2018_reference_cellml.zip" download>Creatine_Alraddadi2018_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 15.69 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `Cl` | 1.417e-08 | m3/s |
| input | model | `VdPerKg` | 0.000304 | m3/kg |
| input | model | `ka` | 0.001797 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Alraddadi EA, Lillico R, Vennerstrom JL, Lakowski TM, Miller DW. Absolute Oral Bioavailability of Creatine Monohydrate in Rats: Debunking a Myth. Pharmaceutics 10(1) (2018). [doi:10.3390/pharmaceutics10010031](https://doi.org/10.3390/pharmaceutics10010031)

**This record:** Pharmacolibrary, model `Creatine_Alraddadi2018_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_creatine/Creatine_Alraddadi2018_reference>

```bibtex
@misc{pharmacolibrary_CreatineAlraddadi2018reference,
  title  = {{Pharmacolibrary model Creatine_Alraddadi2018_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_creatine/Creatine_Alraddadi2018_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics10010031},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 700 mg, single dose, first-order absorption (ka 6.47 /h, F 15.69). Doses in the paper: 700, 4900 mg.

<dbs-fmusim paramsurl="drugs/toxin_creatine/Creatine_Alraddadi2018_reference/Creatine_Alraddadi2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_creatine/Creatine_Alraddadi2018_reference/Creatine_Alraddadi2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Creatine_Alraddadi2018_reference_params.json` · controls `Creatine_Alraddadi2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcreatine%5D%20Creatine_Alraddadi2018_reference&body=Drug%3A%20creatine%0ARecord%3A%20Creatine_Alraddadi2018_reference%0APaper%3A%20Alraddadi_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_creatine/Creatine_Alraddadi2018_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 10:50 UTC</sub>
