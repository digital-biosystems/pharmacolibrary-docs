<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;galcanezumab&quot;,&quot;href&quot;:&quot;drugs/drug_galcanezumab/&quot;},{&quot;label&quot;:&quot;Fiedler-Kelly_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Galcanezumab_FiedlerKelly2021_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# galcanezumab — `Galcanezumab_FiedlerKelly2021_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Reproduces paper, 2026-09-28 14:38 UTC) predates the latest extraction (2026-10-07 06:25 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="galcanezumab" model-id="Galcanezumab_FiedlerKelly2021_reference" status="extracted" stale="true" population="healthy subjects" measured-compound="galcanezumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Fiedler-Kelly J, Raddad E, de Hoon J, Ludwig EA, Passarell J, Kielbasa W et al. Relationship of the Calcitonin Gene-Related Peptide Monoclonal Antibody Galcanezumab Pharmacokinetics and Capsaicin-Induced Dermal Blood Flow in Healthy Subjects. Clinical pharmacology in drug development 10(5):440–452 (2021).
  ·  DOI: [10.1002/cpdd.929](https://doi.org/10.1002/cpdd.929)

## Population and dosing

**Population:** healthy subjects · condition healthy · age group adult · n = 9.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference/Galcanezumab_FiedlerKelly2021_reference.svg" alt="Galcanezumab_FiedlerKelly2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| clearance | CL | 0.0106 | L/h |
| volume of distribution | V | 11.2 | L |
| absorption rate constant | kabs | 0.0192 | h-1 |
| lag time | tlag | 0.202 | hours |
| elimination half-life | t1/2z | 30 | days |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has galcanezumab, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance | `Q22` · CL | 0.0106 | L/h | 2.944e-09 | m3/s | l/h | exact (1) | Fiedler-Kelly_2021:abstract |
| volume of distribution | `Q61` · V | 11.2 | L | 0.0112 | m3 | l | exact (1) | Fiedler-Kelly_2021:abstract |
| absorption rate constant | `Q49` · kabs | 0.0192 | h-1 | 5.333e-06 | 1/s | 1/h | exact (1) | Fiedler-Kelly_2021:abstract |
| lag time | `Q83` · tlag | 0.202 | hours | 727.2 | s | h | exact (1) | Fiedler-Kelly_2021:abstract |
| elimination half-life | `Q57` · t1/2z | 30 | days | 2.592e+06 | s | h | llm (0.6) | Fiedler-Kelly_2021:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (clearance); Q61 (volume of distribution)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=galcanezumab
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- unit re-normalised: t1/2z 'days' now converts (value unchanged)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Fiedler-Kelly_2021_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 0.0192 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` |  | 0.0192 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 0.0106 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 0.0106 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 30 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` |  | 30 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.202 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` |  | 0.202 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 11.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 11.2 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | galcanezumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | galcanezumab | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Fiedler-Kelly_2021:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Fiedler-Kelly_2021:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Fiedler-Kelly_2021:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Fiedler-Kelly_2021:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Fiedler-Kelly_2021:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0106 | ['Fiedler-Kelly_2021:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0106 L/h | ['Fiedler-Kelly_2021:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 11.2 L | ['Fiedler-Kelly_2021:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=galcanezumab) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference/Galcanezumab_FiedlerKelly2021_reference_modelica.zip" download>Galcanezumab_FiedlerKelly2021_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference/Galcanezumab_FiedlerKelly2021_reference_fmi.zip" download>Galcanezumab_FiedlerKelly2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference/Galcanezumab_FiedlerKelly2021_reference_matlab.zip" download>Galcanezumab_FiedlerKelly2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference/Galcanezumab_FiedlerKelly2021_reference_matlab_simbio.zip" download>Galcanezumab_FiedlerKelly2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference/Galcanezumab_FiedlerKelly2021_reference_sbml.zip" download>Galcanezumab_FiedlerKelly2021_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference/Galcanezumab_FiedlerKelly2021_reference_cellml.zip" download>Galcanezumab_FiedlerKelly2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 727.2 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 2.944e-09 | m3/s |
| input | model | `VdPerKg` | 0.00016 | m3/kg |
| input | model | `ka` | 5.333e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Fiedler-Kelly J, Raddad E, de Hoon J, Ludwig EA, Passarell J, Kielbasa W et al. Relationship of the Calcitonin Gene-Related Peptide Monoclonal Antibody Galcanezumab Pharmacokinetics and Capsaicin-Induced Dermal Blood Flow in Healthy Subjects. Clinical pharmacology in drug development 10(5):440–452 (2021). [doi:10.1002/cpdd.929](https://doi.org/10.1002/cpdd.929)

**This record:** Pharmacolibrary v26.09, model `Galcanezumab_FiedlerKelly2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference>

```bibtex
@misc{pharmacolibrary_GalcanezumabFiedlerKelly2021reference,
  title  = {{Pharmacolibrary model Galcanezumab_FiedlerKelly2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference},
  note   = {Parameters from doi:10.1002/cpdd.929},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.0192 /h, lag 12.1 min, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference/Galcanezumab_FiedlerKelly2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference/Galcanezumab_FiedlerKelly2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Galcanezumab_FiedlerKelly2021_reference_params.json` · controls `Galcanezumab_FiedlerKelly2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgalcanezumab%5D%20Galcanezumab_FiedlerKelly2021_reference&body=Drug%3A%20galcanezumab%0ARecord%3A%20Galcanezumab_FiedlerKelly2021_reference%0APaper%3A%20Fiedler-Kelly_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:25 UTC</sub>
