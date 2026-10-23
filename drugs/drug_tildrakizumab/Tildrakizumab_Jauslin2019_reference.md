<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;tildrakizumab&quot;,&quot;href&quot;:&quot;drugs/drug_tildrakizumab/&quot;},{&quot;label&quot;:&quot;Jauslin_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tildrakizumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tildrakizumab/Tildrakizumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tildrakizumab_Jauslin2019_reference&quot;,&quot;label&quot;:&quot;Jauslin_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tildrakizumab — `Tildrakizumab_Jauslin2019_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The bioavailability parameter for tildrakizumab lacked an estimated value, forcing reliance on a generic library default.

<div class="pk-model-meta" hidden drug="tildrakizumab" model-id="Tildrakizumab_Jauslin2019_reference" status="needs_review" stale="false" population="healthy volunteers and subjects with psoriasis" measured-compound="tildrakizumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Jauslin P, Kulkarni P, Li H, Vatakuti S, Hussain A, Wenning L et al. Population-Pharmacokinetic Modeling of Tildrakizumab (MK-3222), an Anti-Interleukin-23-p19 Monoclonal Antibody, in Healthy Volunteers and Subjects with Psoriasis. Clinical pharmacokinetics 58(8):1059–1068 (2019).
  ·  DOI: [10.1007/s40262-019-00743-7](https://doi.org/10.1007/s40262-019-00743-7)

## Population and dosing

**Population:** healthy volunteers and subjects with psoriasis · condition psoriasis · age group adult · n = &gt;.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference/Tildrakizumab_Jauslin2019_reference.svg" alt="Tildrakizumab_Jauslin2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| geometric mean clearance | CL | 0.32 | L/day |
| volume of distribution | V | 10.8 | L |
| absorption half-life | t1/2ka | 1.5 | days |
| elimination half-life | t1/2z | 23.4 | days |
| absorption lag time | tlag | 1.2 | h |
| ka | kabs | 0.908 | day−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The bioavailability parameter for tildrakizumab lacked an estimated value, forcing reliance on a generic library default.**

The record was built from the abstract alone, so reported summary statistics stood in for a fitted model. Consequently, no bioavailability estimate was extracted, and a generic library default was used instead. This placeholder value affects the simulated profile but is not supported by the paper's data. Extracted — tildrakizumab: CL 0.32 L/day, V 10.8 L, t1/2ka 1.5 days, t1/2z 23.4 days, tlag 1.2 h, kabs 0.908 day−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tildrakizumab, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| geometric mean clearance | `Q22` · CL | 0.32 | L/day | 3.704e-09 | m3/s | l/d | llm_confirmed (0.6) | Jauslin_2019:abstract |
| volume of distribution | `Q61` · V | 10.8 | L | 0.0108 | m3 | l | exact (1) | Jauslin_2019:abstract |
| absorption half-life | `Q95` · t1/2ka | 1.5 | days | 1.296e+05 | s | d | llm_corrected (0.6) | Jauslin_2019:abstract |
| elimination half-life | `Q57` · t1/2z | 23.4 | days | 2.022e+06 | s | d | llm (0.6) | Jauslin_2019:abstract |
| absorption lag time | `Q83` · tlag | 1.2 | h | 4320 | s | h | exact (1) | Jauslin_2019:abstract |
| ka | `Q49` · kabs | 0.908 | day−1 | 1.051e-05 | 1/s | 1/h | review_gapfill (0.7) | Rodríguez-Fernández_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (geometric mean clearance); Q61 (volume of distribution)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tildrakizumab
- molar mass: none found for 'tildrakizumab' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Rodríguez-Fernández_2022's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Jauslin_2019_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.105 (2/19 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 31% | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption half-life]` | 1.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption half-life]` |  | 1.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag time]` | 1.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag time]` |  | 1.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[accumulation in maximum plasma concentration]` |  | 1.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability]` |  | 31% | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 23.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` |  | 23.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[geometric mean clearance]` | 0.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[geometric mean clearance]` |  | 0.32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.908 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady state]` |  | 16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 10.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 10.8 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tildrakizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tildrakizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Jauslin_2019:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Rodríguez-Fernández_2022:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Jauslin_2019:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Jauslin_2019:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Jauslin_2019:abstract'] |
| C5_dimension_Q95 | pass | [time] |  | ['Jauslin_2019:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.32 | ['Jauslin_2019:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0133 L/h | ['Jauslin_2019:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 10.8 L | ['Jauslin_2019:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=tildrakizumab) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference/Tildrakizumab_Jauslin2019_reference_modelica.zip" download>Tildrakizumab_Jauslin2019_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference/Tildrakizumab_Jauslin2019_reference_fmi.zip" download>Tildrakizumab_Jauslin2019_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference/Tildrakizumab_Jauslin2019_reference_matlab.zip" download>Tildrakizumab_Jauslin2019_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference/Tildrakizumab_Jauslin2019_reference_matlab_simbio.zip" download>Tildrakizumab_Jauslin2019_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference/Tildrakizumab_Jauslin2019_reference_sbml.zip" download>Tildrakizumab_Jauslin2019_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference/Tildrakizumab_Jauslin2019_reference_cellml.zip" download>Tildrakizumab_Jauslin2019_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 4320 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 3.704e-09 | m3/s |
| input | model | `VdPerKg` | 0.0001543 | m3/kg |
| input | model | `ka` | 1.051e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Jauslin P, Kulkarni P, Li H, Vatakuti S, Hussain A, Wenning L et al. Population-Pharmacokinetic Modeling of Tildrakizumab (MK-3222), an Anti-Interleukin-23-p19 Monoclonal Antibody, in Healthy Volunteers and Subjects with Psoriasis. Clinical pharmacokinetics 58(8):1059–1068 (2019). [doi:10.1007/s40262-019-00743-7](https://doi.org/10.1007/s40262-019-00743-7)

**This record:** Pharmacolibrary v26.09, model `Tildrakizumab_Jauslin2019_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference>

```bibtex
@misc{pharmacolibrary_TildrakizumabJauslin2019reference,
  title  = {{Pharmacolibrary model Tildrakizumab_Jauslin2019_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference},
  note   = {Parameters from doi:10.1007/s40262-019-00743-7},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.0378 /h, lag 72 min, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference/Tildrakizumab_Jauslin2019_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference/Tildrakizumab_Jauslin2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tildrakizumab_Jauslin2019_reference_params.json` · controls `Tildrakizumab_Jauslin2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btildrakizumab%5D%20Tildrakizumab_Jauslin2019_reference&body=Drug%3A%20tildrakizumab%0ARecord%3A%20Tildrakizumab_Jauslin2019_reference%0APaper%3A%20Jauslin_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:51 UTC</sub>
