<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Adenosine&quot;,&quot;href&quot;:&quot;drugs/toxin_adenosine/&quot;},{&quot;label&quot;:&quot;Yu_2018 \u00b7 free_ade&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Adenosine_Frymoyer2020_reference&quot;,&quot;label&quot;:&quot;Frymoyer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_adenosine/Adenosine_Frymoyer2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Adenosine_Gapiska2025_reference&quot;,&quot;label&quot;:&quot;Gapi\u0144ska_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_adenosine/Adenosine_Gapiska2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Adenosine_Yang2026_reference&quot;,&quot;label&quot;:&quot;Yang_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_adenosine/Adenosine_Yang2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Adenosine_Yu2018_ade_lncs&quot;,&quot;label&quot;:&quot;Yu_2018_ade_lncs&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_adenosine/Adenosine_Yu2018_ade_lncs.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Adenosine_Yu2018_free_ade&quot;,&quot;label&quot;:&quot;Yu_2018_free_ade&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_adenosine/Adenosine_Yu2018_free_ade.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Adenosine — `Adenosine_Yu2018_free_ade`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Adenosine bioavailability was not reported in the record, so placeholder values were used instead of estimated parameters.

<div class="pk-model-meta" hidden drug="Adenosine" model-id="Adenosine_Yu2018_free_ade" status="needs_review" stale="false" population="Sprague-Dawley rats with acute myocardial infarction" measured-compound="Adenosine" parameterization="mechanistic" topology="1C"></div>

## Citation
Yu J, Li W, Yu D. Atrial natriuretic peptide modified oleate adenosine prodrug lipid nanocarriers for the treatment of myocardial infarction: in vitro and in vivo evaluation. Drug design, development and therapy 12:1697–1706 (2018).
  ·  DOI: [10.2147/DDDT.S166749](https://doi.org/10.2147/DDDT.S166749)

## Population and dosing

**Population:** Sprague-Dawley rats with acute myocardial infarction · condition acute myocardial infarction · age group adult · n = 8.

**Dosed compound ≠ measured compound:** dosed Adenosine prodrug (Ade-OA) lipid nanocarriers, measured Adenosine.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_adenosine/Adenosine_Yu2018_free_ade/Adenosine_Yu2018_free_ade.svg" alt="Adenosine_Yu2018_free_ade diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0-∞ | AUC∞ | 7.8 | mg/L.h |
| AUC0-t | AUCt | 8.2 | mg/L.h |
| T1/2 α | t1/2α | 0.4 | h |
| T1/2 β | t1/2β | 0.8 | h |
| V | V | 5.6 | L/kg |
| CL | CL | 1.6 | L/h/kg |
| Ka | kabs | 5.64 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Adenosine bioavailability was not reported in the record, so placeholder values were used instead of estimated parameters.**

The record lists adenosine parameters like AUC (7.8 mg/L.h) and CL (1.6 L/h/kg) but omits an estimated bioavailability. The model builder substituted placeholder values for bioavailability F and lag time Tlag. This means the simulated profile relies on default values rather than paper-derived estimates. Extracted — adenosine: AUC∞ 7.8 mg/L.h, AUCt 8.2 mg/L.h, t1/2α 0.4 h, t1/2β 0.8 h, V 5.6 L/kg, CL 1.6 L/h/kg, kabs 5.64 /h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0-∞ | `Q17` · AUC∞ | 7.8 | mg/L.h | 28.08 | kg*s/m3 | mg/(h·l) | exact (1) | Yu_2018_table_2:row0:col4 |
| AUC0-t | `Q19` · AUCt | 8.2 | mg/L.h | 29.52 | kg*s/m3 | mg/(h·l) | exact (1) | Yu_2018_table_2:row1:col4 |
| T1/2 α | `Q59` · t1/2α | 0.4 | h | 1440 | s | h | half_life_rule (0.95) | Yu_2018_table_2:row2:col4 |
| T1/2 β | `Q60` · t1/2β | 0.8 | h | 2880 | s | h | half_life_rule (0.95) | Yu_2018_table_2:row3:col4 |
| V | `Q61` · V | 5.6 | L/kg | 0.392 | m3 | l/kg | exact (1) | Yu_2018_table_2:row4:col4 |
| CL | `Q22` · CL | 1.6 | L/h/kg | 3.111e-05 | m3/s | l/(h·kg) | exact (1) | Yu_2018_table_2:row5:col4 |
| Ka | `Q49` · kabs | 5.64 | /h | 0.001567 | 1/s | 1/h | review_gapfill (0.7) | Pitaloka_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Adenosine
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'free ade' subgroup of Yu_2018 (paper reports 3 populations: ade/lncs, anp ade/lncs, free ade)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Pitaloka_2024's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Yu_2018_table_2:row0:col4'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Yu_2018_table_2:row1:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Yu_2018_table_2:row5:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Pitaloka_2024:review'] |
| C5_dimension_Q59 | pass | [time] |  | ['Yu_2018_table_2:row2:col4'] |
| C5_dimension_Q60 | pass | [time] |  | ['Yu_2018_table_2:row3:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Yu_2018_table_2:row4:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.6 | ['Yu_2018_table_2:row5:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 112 L/h | ['Yu_2018_table_2:row5:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 392 L | ['Yu_2018_table_2:row4:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=Adenosine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_adenosine/Adenosine_Yu2018_free_ade/Adenosine_Yu2018_free_ade_modelica.zip" download>Adenosine_Yu2018_free_ade_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_adenosine/Adenosine_Yu2018_free_ade/Adenosine_Yu2018_free_ade_fmi.zip" download>Adenosine_Yu2018_free_ade_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_adenosine/Adenosine_Yu2018_free_ade/Adenosine_Yu2018_free_ade_matlab.zip" download>Adenosine_Yu2018_free_ade_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_adenosine/Adenosine_Yu2018_free_ade/Adenosine_Yu2018_free_ade_matlab_simbio.zip" download>Adenosine_Yu2018_free_ade_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_adenosine/Adenosine_Yu2018_free_ade/Adenosine_Yu2018_free_ade_sbml.zip" download>Adenosine_Yu2018_free_ade_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_adenosine/Adenosine_Yu2018_free_ade/Adenosine_Yu2018_free_ade_cellml.zip" download>Adenosine_Yu2018_free_ade_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2672 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 3.111e-05 | m3/s |
| input | model | `VdPerKg` | 0.0056 | m3/kg |
| input | model | `ka` | 0.001567 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yu J, Li W, Yu D. Atrial natriuretic peptide modified oleate adenosine prodrug lipid nanocarriers for the treatment of myocardial infarction: in vitro and in vivo evaluation. Drug design, development and therapy 12:1697–1706 (2018). [doi:10.2147/DDDT.S166749](https://doi.org/10.2147/DDDT.S166749)

**This record:** Pharmacolibrary, model `Adenosine_Yu2018_free_ade`. <https://pharmacolibrary.github.io/#/drugs/toxin_adenosine/Adenosine_Yu2018_free_ade>

```bibtex
@misc{pharmacolibrary_AdenosineYu2018freeade,
  title  = {{Pharmacolibrary model Adenosine_Yu2018_free_ade}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_adenosine/Adenosine_Yu2018_free_ade},
  note   = {Parameters from doi:10.2147/DDDT.S166749},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 5.64 /h, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_adenosine/Adenosine_Yu2018_free_ade/Adenosine_Yu2018_free_ade_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_adenosine/Adenosine_Yu2018_free_ade/Adenosine_Yu2018_free_ade_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Adenosine_Yu2018_free_ade_params.json` · controls `Adenosine_Yu2018_free_ade_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Badenosine%5D%20Adenosine_Yu2018_free_ade&body=Drug%3A%20adenosine%0ARecord%3A%20Adenosine_Yu2018_free_ade%0APaper%3A%20Yu_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_adenosine/Adenosine_Yu2018_free_ade%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 21:00 UTC</sub>
