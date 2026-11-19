<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Acetyl tributyl citrate&quot;,&quot;href&quot;:&quot;drugs/toxin_acetyl_tributyl_citrate/&quot;},{&quot;label&quot;:&quot;Kim_2018 \u00b7 atbc_iv_10_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg&quot;,&quot;label&quot;:&quot;Kim_2018_atbc_iv_10_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Acetyl tributyl citrate — `AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">rat</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 0.4, model 0.183); the model does not reproduce the paper's terminal half-life (paper 0.23, model 0.476).

<div class="pk-model-meta" hidden drug="Acetyl tributyl citrate" model-id="AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg" status="needs_review" stale="false" population="male Sprague-Dawley rats" measured-compound="Acetyl tributyl citrate" parameterization="mechanistic" topology="1C"></div>

## Citation
Kim H, Choi MS, Ji YS, Kim IS, Kim GB, Bae IY et al. Pharmacokinetic Properties of Acetyl Tributyl Citrate, a Pharmaceutical Excipient. Pharmaceutics 10(4) (2018).
  ·  DOI: [10.3390/pharmaceutics10040177](https://doi.org/10.3390/pharmaceutics10040177)

## Population and dosing

**Population:** male Sprague-Dawley rats · condition healthy · age group adult.

**Dosing:** 700, 35000 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.80).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg.svg" alt="AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2α (h) | t1/2α | 0.02 | h |
| t1/2β (h) | t1/2β | 0.58 | h |
| AUC (ng·h/mL) | AUC | 201.3 | ng·h/mL |
| Vz (L/kg) | V | 80.4 | L/kg |
| Cl (L/h/kg) | CL | 75.7 | L/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 0.4, model 0.183); the model does not reproduce the paper's terminal half-life (paper 0.23, model 0.476).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — acetyl tributyl citrate: t1/2α 0.02 h, t1/2β 0.58 h, AUC 201 ng·h/mL, V 80.4 L/kg, CL 75.7 L/h/kg.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2α (h) | `Q59` · t1/2α | 0.02 | h | 72 | s | h | half_life_rule (0.95) | pharmaceutics-10-00177-t003:row2:col1 |
| t1/2β (h) | `Q60` · t1/2β | 0.58 | h | 2088 | s | h | half_life_rule (0.95) | pharmaceutics-10-00177-t003:row3:col1 |
| AUC (ng·h/mL) | `Q88` · AUC | 201.3 | ng·h/mL | 0.7247 | kg*s/m3 | (h·ng)/ml | exact (1) | pharmaceutics-10-00177-t003:row4:col1 |
| Vz (L/kg) | `Q61` · V | 80.4 | L/kg | 5.628 | m3 | l/kg | exact (1) | pharmaceutics-10-00177-t003:row7:col1 |
| Cl (L/h/kg) | `Q22` · CL | 75.7 | L/h/kg | 0.001472 | m3/s | l/(h·kg) | exact (1) | pharmaceutics-10-00177-t003:row8:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Acetyl tributyl citrate
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'atbc / iv (10 mg/kg, n = 5)' subgroup of Kim_2018 (paper reports 2 populations: atbc / iv (10 mg/kg, n = 5), atbc / po (500 mg/kg, n = 6))
- molar mass: none of 1 PubChem candidate(s) is 'Acetyl tributyl citrate' (LLM) — left in mass units
- molar mass: none found for 'Acetyl tributyl citrate' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-10-00177-t003:row8:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['pharmaceutics-10-00177-t003:row2:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['pharmaceutics-10-00177-t003:row3:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['pharmaceutics-10-00177-t003:row7:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['pharmaceutics-10-00177-t003:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 75.7 | ['pharmaceutics-10-00177-t003:row8:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.3e+03 L/h | ['pharmaceutics-10-00177-t003:row8:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.63e+03 L | ['pharmaceutics-10-00177-t003:row7:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=Acetyl tributyl citrate) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | skipped |  | 0.4764 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 0.23 | 0.4764 | 2.071 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.21 | 0.4764 | 2.268 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.27 | 0.4764 | 1.764 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.64 | 0.4764 | 0.7444 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.26 | 0.4764 | 1.832 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.37 | 0.4764 | 1.288 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.4 | 0.1833 | 0.4583 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_modelica.zip" download>AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_fmi.zip" download>AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_matlab.zip" download>AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_matlab_simbio.zip" download>AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_sbml.zip" download>AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_cellml.zip" download>AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `Cl` | 0.001472 | m3/s |
| input | model | `VdPerKg` | 0.0804 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kim H, Choi MS, Ji YS, Kim IS, Kim GB, Bae IY et al. Pharmacokinetic Properties of Acetyl Tributyl Citrate, a Pharmaceutical Excipient. Pharmaceutics 10(4) (2018). [doi:10.3390/pharmaceutics10040177](https://doi.org/10.3390/pharmaceutics10040177)

**This record:** Pharmacolibrary, model `AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg`. <https://pharmacolibrary.github.io/#/drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg>

```bibtex
@misc{pharmacolibrary_AcetylTributylCitrateKim2018atbciv10mgkg,
  title  = {{Pharmacolibrary model AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg},
  note   = {Parameters from doi:10.3390/pharmaceutics10040177},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 700 mg infusion over 10 min, single dose. Doses in the paper: 700, 35000 mg.

<dbs-fmusim paramsurl="drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_params.json` · controls `AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bacetyl_tributyl_citrate%5D%20AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg&body=Drug%3A%20acetyl_tributyl_citrate%0ARecord%3A%20AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg%0APaper%3A%20Kim_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 12:53 UTC</sub>
