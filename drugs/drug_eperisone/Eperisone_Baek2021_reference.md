<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;eperisone&quot;,&quot;href&quot;:&quot;drugs/drug_eperisone/&quot;},{&quot;label&quot;:&quot;Baek_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eperisone_Kang2021_reference&quot;,&quot;label&quot;:&quot;Kang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eperisone/Eperisone_Kang2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eperisone_Baek2021_reference&quot;,&quot;label&quot;:&quot;Baek_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eperisone/Eperisone_Baek2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eperisone — `Eperisone_Baek2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Eperisone transfer rate constants k12 and k21 were left at library defaults because the abstract-only record lacks these fitted values.

<div class="pk-model-meta" hidden drug="eperisone" model-id="Eperisone_Baek2021_reference" status="needs_review" stale="false" population="healthy Korean volunteers" measured-compound="eperisone" parameterization="apparent" topology="2C"></div>

## Citation
Baek IH, Back HM, Chae JW, Ha ES, Park H, Choi DH et al. Pharmacokinetics of eperisone following oral administration in healthy Korean volunteers. Biopharmaceutics & drug disposition 42(2-3):94–102 (2021).
  ·  DOI: [10.1002/bdd.2264](https://doi.org/10.1002/bdd.2264)

## Population and dosing

**Population:** healthy Korean volunteers · condition healthy · age group adult · n = &gt;$1.0M.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_eperisone/Eperisone_Baek2021_reference/Eperisone_Baek2021_reference.svg" alt="Eperisone_Baek2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| mean eperisone elimination half-life | t1/2z | 3.81 | h |
| apparent clearance (CL/F) | CL/F | 39.24 | L/h |
| apparent volume of distribution | V/F | 39.24 | L |
| first-order absorption rate constant (typical population K a ) | kabs | 1.5 | h-1 |
| apparent volume of distribution in the central compartment [V c /F] | V1/F | 86.2 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Eperisone transfer rate constants k12 and k21 were left at library defaults because the abstract-only record lacks these fitted values.**

The record relies on summary statistics from the paper's abstract rather than a fitted model, which omitted the inter-compartmental transfer rates. Consequently, k12 and k21 were not extracted and were substituted with library placeholders. This deviation means the simulated distribution phase is unsupported by the specific paper's data. Extracted — eperisone: t1/2z 3.81 h, CL/F 39.2 L/h, V/F 39.2 L, kabs 1.5 h-1, V1/F 86.2 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has eperisone, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| mean eperisone elimination half-life | `Q57` · t1/2z | 3.81 | h | 1.372e+04 | s | h | llm (0.6) | Baek_2021:abstract |
| apparent clearance (CL/F) | `Q27` · CL/F | 39.24 | L/h | 1.09e-05 | m3/s | L/h | exact (1) | Baek_2021:abstract |
| apparent volume of distribution | `Q76` · V/F | 39.24 | L | 0.03924 | m3 | L | exact (1) | Baek_2021:abstract |
| first-order absorption rate constant (typical population K a ) | `Q49` · kabs | 1.5 | h-1 | 0.0004167 | 1/s | 1/h | llm_confirmed (0.6) | Baek_2021:abstract |
| apparent volume of distribution in the central compartment [V c /F] | `Q290` · V1/F | 86.2 | L | 0.0862 | m3 | L | boundary_compartment (0.9) | Baek_2021:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k12', 'k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- unit_dimension_unknown: '× 103  l/h' (CL/F)
- unit_dimension_unknown: '× 103  L' (V/F)
- dropped duplicate Q27 ('typical population CL/F', value 30.8) — already have one for this compound
- unit_dimension_unknown: '× 103  l' (V1/F)
- routed 'Interindividual variability in CL/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability in V c /F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'interoccasion variability in CL/F' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- routed 'interoccasion variability in V c /F' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- implicit units: 'apparent clearance (CL/F)' → L/h (from the popPK convention: 'The paper provides no explicit unit. Apparent clearance (CL/F) in population pharmacokinetics is conventionally expresse')
- implicit units: 'apparent volume of distribution' → L (from the popPK convention: 'The paper provides no explicit unit. Apparent volume of distribution (V/F) in population pharmacokinetics is conventiona')
- implicit units: 'apparent volume of distribution in the central compartment [V c /F]' → L (from the popPK convention: 'The paper provides no explicit unit. Apparent central volume of distribution (V1/F) in population pharmacokinetics is co')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=eperisone
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Baek_2021_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent clearance]` | 39.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution in the central compartment [v c /f]]` | 86.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution in the central compartment [v c /f]]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 39.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[first-order absorption rate constant]` | 1.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean eperisone elimination half-life]` | 3.81 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean eperisone elimination half-life]` |  | 3.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical population k a]` |  | 1.5 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | eperisone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | eperisone | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Baek_2021:abstract'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Baek_2021:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Baek_2021:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Baek_2021:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Baek_2021:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 39.2 L/h | ['Baek_2021:abstract'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 86.2 L | ['Baek_2021:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 39.2 L | ['Baek_2021:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=eperisone) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eperisone/Eperisone_Baek2021_reference/Eperisone_Baek2021_reference_modelica.zip" download>Eperisone_Baek2021_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_eperisone/Eperisone_Baek2021_reference/Eperisone_Baek2021_reference_fmi.zip" download>Eperisone_Baek2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eperisone/Eperisone_Baek2021_reference/Eperisone_Baek2021_reference_matlab.zip" download>Eperisone_Baek2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eperisone/Eperisone_Baek2021_reference/Eperisone_Baek2021_reference_matlab_simbio.zip" download>Eperisone_Baek2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eperisone/Eperisone_Baek2021_reference/Eperisone_Baek2021_reference_sbml.zip" download>Eperisone_Baek2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eperisone/Eperisone_Baek2021_reference/Eperisone_Baek2021_reference_cellml.zip" download>Eperisone_Baek2021_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2594 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00015 | kg |
| input | model | `Cl` | 1.09e-05 | m3/s |
| input | model | `VdPerKg` | 0.0005606 | m3/kg |
| input | model | `ka` | 0.0004167 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Baek IH, Back HM, Chae JW, Ha ES, Park H, Choi DH et al. Pharmacokinetics of eperisone following oral administration in healthy Korean volunteers. Biopharmaceutics & drug disposition 42(2-3):94–102 (2021). [doi:10.1002/bdd.2264](https://doi.org/10.1002/bdd.2264)

**This record:** Pharmacolibrary v26.09, model `Eperisone_Baek2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_eperisone/Eperisone_Baek2021_reference>

```bibtex
@misc{pharmacolibrary_EperisoneBaek2021reference,
  title  = {{Pharmacolibrary model Eperisone_Baek2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_eperisone/Eperisone_Baek2021_reference},
  note   = {Parameters from doi:10.1002/bdd.2264},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 150 mg, single dose, first-order absorption (ka 1.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 150 mg oral (M03BX09) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_eperisone/Eperisone_Baek2021_reference/Eperisone_Baek2021_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_eperisone/Eperisone_Baek2021_reference/Eperisone_Baek2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Eperisone_Baek2021_reference_params.json` · controls `Eperisone_Baek2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beperisone%5D%20Eperisone_Baek2021_reference&body=Drug%3A%20eperisone%0ARecord%3A%20Eperisone_Baek2021_reference%0APaper%3A%20Baek_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_eperisone/Eperisone_Baek2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:49 UTC</sub>
