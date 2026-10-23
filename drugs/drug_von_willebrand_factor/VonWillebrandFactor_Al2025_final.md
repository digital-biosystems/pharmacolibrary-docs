<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;von Willebrand factor&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/&quot;},{&quot;label&quot;:&quot;Al_2025 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;VonWillebrandFactor_Schning2026_reference&quot;,&quot;label&quot;:&quot;Sch\u00f6ning_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Schning2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Valke2024_reference&quot;,&quot;label&quot;:&quot;Valke_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Valke2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Wong2025_reference&quot;,&quot;label&quot;:&quot;Wong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Wong2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Zhu2020_reference&quot;,&quot;label&quot;:&quot;Zhu_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Zhu2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Al2025_final&quot;,&quot;label&quot;:&quot;Al_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# von Willebrand factor — `VonWillebrandFactor_Al2025_final`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Bioavailability and lag time were left at library defaults, and clearance and volume values conflict with a second reader's extraction.

<div class="pk-model-meta" hidden drug="von Willebrand factor" model-id="VonWillebrandFactor_Al2025_final" status="needs_review" stale="false" population="pregnant women with von Willebrand disease" measured-compound="von Willebrand factor" parameterization="mechanistic" topology="1C"></div>

## Citation
Al Arashi W, Cloesmeijer ME, Leebeek FWG, Duvekot JJ, Kruip MJHA, Mathôt RAA et al. Replacement therapy in pregnant women with von Willebrand disease during delivery: Factor levels and pharmacokinetics. HemaSphere 9(1):e70061 (2025).
  ·  DOI: [10.1002/hem3.70061](https://doi.org/10.1002/hem3.70061)

## Population and dosing

**Population:** pregnant women with von Willebrand disease · condition von Willebrand disease · age group adult · n = &gt;=19.

**Dosed compound ≠ measured compound:** dosed Haemate P, measured von Willebrand factor.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final/VonWillebrandFactor_Al2025_final.svg" alt="VonWillebrandFactor_Al2025_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL (mL/h/70 kg) | CL | 76.8 | mL/h/70 kg | 27 |
| V (mL/70 kg) | V | 3580 | mL/70 kg | 6 |
| Absorption rate constant (kapop) [h−1] | kabs | 0.5 | h−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Bioavailability and lag time were left at library defaults, and clearance and volume values conflict with a second reader's extraction.**

The record lacks explicit estimates for bioavailability and lag time, relying instead on unreported library defaults. A second reader disagreed on the extracted values, citing a clearance of 250 mL/h/70 kg and a volume of 6490 mL/70 kg, which differ from the recorded 76.8 and 3580. These discrepancies in the core pharmacokinetic parameters prevent verification of the model's accuracy. Extracted — von willebrand factor: CL 76.8 mL/h/70 kg, V 3.58e+03 mL/70 kg, kabs 0.5 h−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Haemate P, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL (mL/h/70 kg) | `Q22` · CL | 76.8 | mL/h/70 kg | 2.133e-08 | m3/s | ml/(h·70kg) | 27 | exact (1) | hem370061-tbl-0003:row2:col3 |
| V (mL/70 kg) | `Q61` · V | 3580 | mL/70 kg | 0.00358 | m3 | ml/70kg | 6 | exact (1) | hem370061-tbl-0003:row3:col3 |
| Absorption rate constant (kapop) [h−1] | `Q49` · kabs | 0.5 | h−1 | 0.0001389 | 1/s | 1/h |  | review_gapfill (0.7) | Schöning_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additional error (IU/mL)' routed out of structural estimates ('Residual variability')
- dropped PD-category row 'Baseline (IU/mL)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['hem370061-tbl-0003:row1:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=von Willebrand factor
- model-stage split: 'fviii final model values (rse%) [shrinkage %]' is the final model of Al_2025 (paper reports 2 stages: fviii final model values (rse%) [shrinkage %], vwf final model values (rse%) [shrinkage %]); same population, different model-building step
- molar mass: none found for 'von_willebrand_factor' — its concentrations stay mass-only
- molar mass: none found for 'von Willebrand factor' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Schöning_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell hem370061-tbl-0003:row1:col2 = '0.363 [0.268–0.484]'
- unparsed cell hem370061-tbl-0003:row1:col4 = '1.11 [0.66–1.46]'
- unparsed cell hem370061-tbl-0003:row2:col2 = '249 [215–295]'
- unparsed cell hem370061-tbl-0003:row2:col4 = '70.8 [42.9–110]'
- unparsed cell hem370061-tbl-0003:row3:col2 = '6514 [5533–7388]'
- unparsed cell hem370061-tbl-0003:row3:col4 = '3863 [3431–4421]'
- unparsed cell hem370061-tbl-0003:row9:col2 = '13.9 [10.2–17.0]'
- unparsed cell hem370061-tbl-0003:row9:col4 = '15.5 [9.75–20.0]'
- unparsed cell hem370061-tbl-0003:row10:col4 = '0.12 [0.03−0.19]'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.125 (1/8 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss:120b` | `parameters[cl].rse_percent` | 27 | 9 | mismatch |
| `gpt-oss:120b` | `parameters[cl].value` | 76.8 | 250 | mismatch |
| `gpt-oss:120b` | `parameters[v].rse_percent` | 6 | 8 | mismatch |
| `gpt-oss:120b` | `parameters[v].value` | 3580 | 6490 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | Haemate P | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | von Willebrand factor | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['hem370061-tbl-0003:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Schöning_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['hem370061-tbl-0003:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 76.8 | ['hem370061-tbl-0003:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0768 L/h | ['hem370061-tbl-0003:row2:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.58 L | ['hem370061-tbl-0003:row3:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=von Willebrand factor) | central.C | output must be the measured/analyte compartment |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final/VonWillebrandFactor_Al2025_final_modelica.zip" download>VonWillebrandFactor_Al2025_final_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final/VonWillebrandFactor_Al2025_final_fmi.zip" download>VonWillebrandFactor_Al2025_final_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final/VonWillebrandFactor_Al2025_final_matlab.zip" download>VonWillebrandFactor_Al2025_final_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final/VonWillebrandFactor_Al2025_final_matlab_simbio.zip" download>VonWillebrandFactor_Al2025_final_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final/VonWillebrandFactor_Al2025_final_sbml.zip" download>VonWillebrandFactor_Al2025_final_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final/VonWillebrandFactor_Al2025_final_cellml.zip" download>VonWillebrandFactor_Al2025_final_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 2.133e-08 | m3/s |
| input | model | `VdPerKg` | 5.114e-05 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Al Arashi W, Cloesmeijer ME, Leebeek FWG, Duvekot JJ, Kruip MJHA, Mathôt RAA et al. Replacement therapy in pregnant women with von Willebrand disease during delivery: Factor levels and pharmacokinetics. HemaSphere 9(1):e70061 (2025). [doi:10.1002/hem3.70061](https://doi.org/10.1002/hem3.70061)

**This record:** Pharmacolibrary v26.09, model `VonWillebrandFactor_Al2025_final`. <https://pharmacolibrary.github.io/#/drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final>

```bibtex
@misc{pharmacolibrary_VonWillebrandFactorAl2025final,
  title  = {{Pharmacolibrary model VonWillebrandFactor_Al2025_final}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final},
  note   = {Parameters from doi:10.1002/hem3.70061},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final/VonWillebrandFactor_Al2025_final_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final/VonWillebrandFactor_Al2025_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `VonWillebrandFactor_Al2025_final_params.json` · controls `VonWillebrandFactor_Al2025_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvon_willebrand_factor%5D%20VonWillebrandFactor_Al2025_final&body=Drug%3A%20von_willebrand_factor%0ARecord%3A%20VonWillebrandFactor_Al2025_final%0APaper%3A%20Al_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 20:06 UTC</sub>
