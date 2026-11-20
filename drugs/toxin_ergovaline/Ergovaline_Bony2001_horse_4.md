<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Ergovaline&quot;,&quot;href&quot;:&quot;drugs/toxin_ergovaline/&quot;},{&quot;label&quot;:&quot;Bony_2001 \u00b7 horse_4&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ergovaline_Bony2001_horse_1&quot;,&quot;label&quot;:&quot;Bony_2001_horse_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_1.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ergovaline_Bony2001_horse_2&quot;,&quot;label&quot;:&quot;Bony_2001_horse_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_2.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ergovaline_Bony2001_horse_3&quot;,&quot;label&quot;:&quot;Bony_2001_horse_3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_3.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ergovaline_Bony2001_horse_4&quot;,&quot;label&quot;:&quot;Bony_2001_horse_4&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ergovaline — `Ergovaline_Bony2001_horse_4`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Ergovaline" model-id="Ergovaline_Bony2001_horse_4" status="extracted" stale="false" population="four gelding horses" measured-compound="Ergovaline" parameterization="mechanistic" topology="1C"></div>

## Citation
Bony S, Durix A, Leblond A, Jaussaud P. Toxicokinetics of ergovaline in the horse after an intravenous administration. Veterinary research 32(5):509–513 (2001).
  ·  DOI: [10.1051/vetres:2001142](https://doi.org/10.1051/vetres:2001142)

## Population and dosing

**Population:** four gelding horses · condition healthy · age group adult · n = 4.

**Dosing:** 1.05 mg, iv, single.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4/Ergovaline_Bony2001_horse_4.svg" alt="Ergovaline_Bony2001_horse_4 diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| λ₁ (per min) | λ1 | 1.50 | per min |
| λ₂ (per min) | λ2 | 0.17 | per min |
| λ₃ (per min) | λ3 | 0.009 | per min |
| A₁ (ng/mL) | A1 | 179.54 | ng/mL |
| A₂ (ng/mL) | A2 | 6.32 | ng/mL |
| A₃ (ng/mL) | A3 | 7.17 | ng/mL |
| t₁/₂ (min) | t1/2z | 74.94 | min |
| Cl (L/min·kg) | CL | 0.018 | L/min·kg |
| AUC (ng·min/L) | AUC | 932.42 | ng·min/L |
| MRT (min) | MRT | 90.22 | min |
| Vc (L/kg) | V | 0.078 | L/kg |
| Co (ng/mL) | equation variable | 193.03 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| λ₁ (per min) | `Q67` · λ1 | 1.50 | per min | 0.025 | 1/s | 1/min | exact (1) | Bony_2001_table_1:row0:col4 |
| λ₂ (per min) | `Q68` · λ2 | 0.17 | per min | 0.002833 | 1/s | 1/min | exact (1) | Bony_2001_table_1:row1:col4 |
| λ₃ (per min) | `Q418` · λ3 | 0.009 | per min | 0.00015 | 1/s | 1/min | exact (1) | Bony_2001_table_1:row2:col4 |
| A₁ (ng/mL) | `Q415` · A1 | 179.54 | ng/mL |  |  | ng/ml | exact (1) | Bony_2001_table_1:row3:col4 |
| A₂ (ng/mL) | `Q416` · A2 | 6.32 | ng/mL |  |  | ng/ml | exact (1) | Bony_2001_table_1:row4:col4 |
| A₃ (ng/mL) | `Q417` · A3 | 7.17 | ng/mL |  |  | ng/ml | exact (1) | Bony_2001_table_1:row5:col4 |
| t₁/₂ (min) | `Q57` · t1/2z | 74.94 | min | 4496 | s | min | half_life_rule (0.95) | Bony_2001_table_1:row6:col4 |
| Cl (L/min·kg) | `Q22` · CL | 0.018 | L/min·kg | 2.1e-05 | m3/s | l/(min·kg) | exact (1) | Bony_2001_table_1:row7:col4 |
| AUC (ng·min/L) | `Q88` · AUC | 932.42 | ng·min/L | 5.595e-05 | kg*s/m3 | (min·ng)/l | exact (1) | Bony_2001_table_1:row8:col4 |
| MRT (min) | `Q53` · MRT | 90.22 | min | 5413 | s | min | exact (1) | Bony_2001_table_1:row9:col4 |
| Vc (L/kg) | `Q61` · V | 0.078 | L/kg | 0.00546 | m3 | l/kg | exact (1) | Bony_2001_table_1:row10:col4 |
| Co (ng/mL) | `Q900` · equation variable | 193.03 | ng/mL |  |  | ng/ml | llm_corrected (0.6) | Bony_2001_table_1:row11:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ergovaline
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc (L/kg)' is the general volume)
- population split: 'horse 4' subgroup of Bony_2001 (paper reports 4 populations: horse 1, horse 2, horse 3, horse 4)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bony_2001_table_1:row7:col4'] |
| C5_dimension_Q418 | pass | 1 / [time] |  | ['Bony_2001_table_1:row2:col4'] |
| C5_dimension_Q53 | pass | [time] |  | ['Bony_2001_table_1:row9:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bony_2001_table_1:row6:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Bony_2001_table_1:row10:col4'] |
| C5_dimension_Q67 | pass | 1 / [time] |  | ['Bony_2001_table_1:row0:col4'] |
| C5_dimension_Q68 | pass | 1 / [time] |  | ['Bony_2001_table_1:row1:col4'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Bony_2001_table_1:row8:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.018 | ['Bony_2001_table_1:row7:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 75.6 L/h | ['Bony_2001_table_1:row7:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.46 L | ['Bony_2001_table_1:row10:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4/Ergovaline_Bony2001_horse_4_modelica.zip" download>Ergovaline_Bony2001_horse_4_modelica.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4/Ergovaline_Bony2001_horse_4_fmi.zip" download>Ergovaline_Bony2001_horse_4_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4/Ergovaline_Bony2001_horse_4_matlab.zip" download>Ergovaline_Bony2001_horse_4_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4/Ergovaline_Bony2001_horse_4_matlab_simbio.zip" download>Ergovaline_Bony2001_horse_4_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4/Ergovaline_Bony2001_horse_4_sbml.zip" download>Ergovaline_Bony2001_horse_4_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4/Ergovaline_Bony2001_horse_4_cellml.zip" download>Ergovaline_Bony2001_horse_4_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5336 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.05e-06 | kg |
| input | model | `Cl` | 2.1e-05 | m3/s |
| input | model | `VdPerKg` | 7.8e-05 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Bony S, Durix A, Leblond A, Jaussaud P. Toxicokinetics of ergovaline in the horse after an intravenous administration. Veterinary research 32(5):509–513 (2001). [doi:10.1051/vetres:2001142](https://doi.org/10.1051/vetres:2001142)

**This record:** Pharmacolibrary, model `Ergovaline_Bony2001_horse_4`. <https://pharmacolibrary.github.io/#/drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4>

```bibtex
@misc{pharmacolibrary_ErgovalineBony2001horse4,
  title  = {{Pharmacolibrary model Ergovaline_Bony2001_horse_4}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4},
  note   = {Parameters from doi:10.1051/vetres:2001142},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 1.05 mg infusion over 10 min, single dose. Dose in the paper: 1.05 mg.

<dbs-fmusim paramsurl="drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4/Ergovaline_Bony2001_horse_4_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4/Ergovaline_Bony2001_horse_4_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Ergovaline_Bony2001_horse_4_params.json` · controls `Ergovaline_Bony2001_horse_4_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bergovaline%5D%20Ergovaline_Bony2001_horse_4&body=Drug%3A%20ergovaline%0ARecord%3A%20Ergovaline_Bony2001_horse_4%0APaper%3A%20Bony_2001%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ergovaline/Ergovaline_Bony2001_horse_4%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 01:43 UTC</sub>
