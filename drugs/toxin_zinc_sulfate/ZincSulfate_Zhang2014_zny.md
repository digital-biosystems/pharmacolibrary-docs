<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Zinc sulfate&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_sulfate/&quot;},{&quot;label&quot;:&quot;Zhang_2014 \u00b7 zny&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ZincSulfate_Kanan2023_reference&quot;,&quot;label&quot;:&quot;Kanan_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_sulfate/ZincSulfate_Kanan2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincSulfate_Mehra1987_reference&quot;,&quot;label&quot;:&quot;Mehra_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_sulfate/ZincSulfate_Mehra1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincSulfate_Zhang2014_znso4&quot;,&quot;label&quot;:&quot;Zhang_2014_znso4&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_znso4.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincSulfate_Zhang2014_zny&quot;,&quot;label&quot;:&quot;Zhang_2014_zny&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_zny.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Zinc sulfate — `ZincSulfate_Zhang2014_zny`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00387, model 0.000149); the model does not reproduce the paper's time of the peak (tmax) (paper 2, model 0.183).

<div class="pk-model-meta" hidden drug="Zinc sulfate" model-id="ZincSulfate_Zhang2014_zny" status="needs_review" stale="false" population="male rats" measured-compound="Zinc (element measured by ICP-OES)" parameterization="mechanistic" topology="1C"></div>

## Citation
Zhang S, Zhang Y, Peng N, Zhang H, Yao J, Li Z et al. Pharmacokinetics and biodistribution of zinc-enriched yeast in rats. TheScientificWorldJournal 2014:217142 (2014).
  ·  DOI: [10.1155/2014/217142](https://doi.org/10.1155/2014/217142)

## Population and dosing

**Population:** male rats · condition healthy · age group adult · n = 3 per group.

**Dosing:** 4 mg Zn/kg, oral, single.

**Dosed compound ≠ measured compound:** dosed Zinc sulfate and zinc-enriched yeast (oral, 4 mg Zn/kg), measured Zinc (element measured by ICP-OES).

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_zny/ZincSulfate_Zhang2014_zny.svg" alt="ZincSulfate_Zhang2014_zny diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2,λz | t1/2z | 7.68 | h |
| AUC0–24 h | AUCt | 40.49 | h·μg/mL |
| AUC0–∞ | AUC∞ | 46.24 | h·μg/mL |
| V | V | 954 | mL/kg |
| Cls | CLnorm | 88.8 | mL/h/kg |
| MRT0–24 h | MRT | 7.94 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00387, model 0.000149); the model does not reproduce the paper's time of the peak (tmax) (paper 2, model 0.183).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Extracted — zinc sulfate: t1/2z 7.68 h, AUCt 40.5 h·μg/mL, AUC∞ 46.2 h·μg/mL, V 954 mL/kg, CLnorm 88.8 mL/h/kg, MRT 7.94 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Zinc sulfate and zinc-enriched yeast (oral, 4 mg Zn/kg), the second reading Zinc sulfate (ZnSO4); it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2,λz | `Q57` · t1/2z | 7.68 | h | 2.765e+04 | s | h | half_life_rule (0.95) | tab1:row1:col2 |
| AUC0–24 h | `Q19` · AUCt | 40.49 | h·μg/mL | 145.8 | kg*s/m3 | (h·µg)/ml | llm (0.6) | tab1:row2:col2 |
| AUC0–∞ | `Q17` · AUC∞ | 46.24 | h·μg/mL | 166.5 | kg*s/m3 | (h·µg)/ml | exact (1) | tab1:row3:col2 |
| V | `Q61` · V | 954 | mL/kg | 0.06678 | m3 | ml/kg | exact (1) | tab1:row4:col2 |
| Cls | `Q354` · CLnorm | 88.8 | mL/h/kg | 1.727e-06 | m3/s | ml/(h·kg) | llm_corrected (0.6) | tab1:row5:col2 |
| MRT0–24 h | `Q53` · MRT | 7.94 | h | 2.858e+04 | s | h | llm_confirmed (0.6) | tab1:row6:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q53 ('MRT0–∞', value '11.20') — already have one for this compound
- dropped value-less row: 't1/2,λz'
- dropped value-less row: 'AUC0–24 h'
- dropped value-less row: 'AUC0–∞'
- dropped value-less row: 'Cls'
- dropped value-less row: 'V'
- dropped value-less row: 'MRT0–24 h'
- dropped value-less row: 'MRT0–∞'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Zinc (element measured by ICP-OES)
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- population split: 'zny' subgroup of Zhang_2014 (paper reports 2 populations: znso4, zny)
- molar mass: none found for 'Zinc (element measured by ICP-OES)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Zinc (element measured by ICP-OES)', not zinc_sulfate — the review values are the parent's
- derived CL=6.02713 L/h from ln2/t½z × V = CL (Q57 × Q61); not separately reported

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cls].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | Zinc sulfate and zinc-enriched yeast (oral, 4 mg Zn/kg) | Zinc sulfate (ZnSO4) | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Zinc (element measured by ICP-OES) | Zinc (Zn) | mismatch |

</details>

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
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['tab1:row3:col2'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['tab1:row2:col2'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['tab1:row5:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['tab1:row6:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab1:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab1:row4:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 66.8 L | ['tab1:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_derived_parameters |  | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report |  | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable |  | pass | C_central (measured=Zinc (element measured by ICP-OES)) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 scholar param(s) emitted or defaulted | 1 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | fail | 0.00387 | 0.0001486 | 0.0384 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00281 | 0.0001486 | 0.0529 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 137.7 | 0.0001486 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_t_half_beta | reference | pass | 7.68 | 7.68 | 1 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 7.93 | 7.68 | 0.9685 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2 | 0.1833 | 0.0917 | h→SI vs simulated h |
| T1_tmax | reference | fail | 4 | 0.1833 | 0.0458 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_zny/ZincSulfate_Zhang2014_zny_modelica.zip" download>ZincSulfate_Zhang2014_zny_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_zny/ZincSulfate_Zhang2014_zny_fmi.zip" download>ZincSulfate_Zhang2014_zny_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
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
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.674e-06 | m3/s |
| input | model | `VdPerKg` | 0.000954 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zhang S, Zhang Y, Peng N, Zhang H, Yao J, Li Z et al. Pharmacokinetics and biodistribution of zinc-enriched yeast in rats. TheScientificWorldJournal 2014:217142 (2014). [doi:10.1155/2014/217142](https://doi.org/10.1155/2014/217142)

**This record:** Pharmacolibrary, model `ZincSulfate_Zhang2014_zny`. <https://pharmacolibrary.github.io/#/drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_zny>

```bibtex
@misc{pharmacolibrary_ZincSulfateZhang2014zny,
  title  = {{Pharmacolibrary model ZincSulfate_Zhang2014_zny}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_zny},
  note   = {Parameters from doi:10.1155/2014/217142},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_zny/ZincSulfate_Zhang2014_zny_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_zny/ZincSulfate_Zhang2014_zny_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `ZincSulfate_Zhang2014_zny_params.json` · controls `ZincSulfate_Zhang2014_zny_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzinc_sulfate%5D%20ZincSulfate_Zhang2014_zny&body=Drug%3A%20zinc_sulfate%0ARecord%3A%20ZincSulfate_Zhang2014_zny%0APaper%3A%20Zhang_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_zny%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 01:43 UTC</sub>
