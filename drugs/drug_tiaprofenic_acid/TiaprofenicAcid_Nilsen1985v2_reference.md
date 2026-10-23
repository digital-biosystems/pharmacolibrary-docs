<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;tiaprofenic acid&quot;,&quot;href&quot;:&quot;drugs/drug_tiaprofenic_acid/&quot;},{&quot;label&quot;:&quot;Nilsen_1985_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TiaprofenicAcid_Nilsen1985v2_reference&quot;,&quot;label&quot;:&quot;Nilsen_1985_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tiaprofenic acid — `TiaprofenicAcid_Nilsen1985v2_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The record omits a specific distribution rate constant value for tiaprofenic acid, leaving the model incomplete.

<div class="pk-model-meta" hidden drug="tiaprofenic acid" model-id="TiaprofenicAcid_Nilsen1985v2_reference" status="needs_review" stale="false" population="elderly patients" measured-compound="tiaprofenic acid" parameterization="apparent" topology="1C"></div>

## Citation
Nilsen OG, Jacobsen G, Walstad RA. Steady state pharmacokinetics of tiaprofenic acid in elderly patients. Arzneimittel-Forschung 35(5):875–879 (1985).

## Population and dosing

**Population:** elderly patients · age group elderly · n = &gt;=8.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference.svg" alt="TiaprofenicAcid_Nilsen1985v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| absorption lag time | tlag | 0.23 | h |
| absorption rate constant | kabs | 4.32 | h-1 |
| distribution rate constant | kcomp | 1.31 | h-1 |
| elimination half-life | t1/2z | 4.66 | h |
| total body clearance | CL | 30.0 | ml/min |
| apparent volume of distribution | V/F | 11.8 | l |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record omits a specific distribution rate constant value for tiaprofenic acid, leaving the model incomplete.**

The abstract-only source provided summary statistics that stood in for a fitted model. Although the parameter 'kcomp' was listed, no value was extracted, so it was neither emitted nor included in the defaulted list. Consequently, the review found only four covered parameters against the five expected for this one-compartment structure. Extracted — tiaprofenic acid: tlag 0.23 h, kabs 4.32 h-1, kcomp 1.31 h-1, t1/2z 4.66 h, CL 30 ml/min, V/F 11.8 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tiaprofenic acid, the second reading tiaprofenic_acid; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| absorption lag time | `Q83` · tlag | 0.23 | h | 828 | s | h | exact (1) | Nilsen_1985_2:abstract |
| absorption rate constant | `Q49` · kabs | 4.32 | h-1 | 0.0012 | 1/s | 1/h | exact (1) | Nilsen_1985_2:abstract |
| distribution rate constant | `Q48` · kcomp | 1.31 | h-1 | 0.0003639 | 1/s | 1/h | exact (1) | Nilsen_1985_2:abstract |
| elimination half-life | `Q57` · t1/2z | 4.66 | h | 1.678e+04 | s | h | llm (0.6) | Nilsen_1985_2:abstract |
| total body clearance | `Q22` · CL | 30.0 | ml/min | 5e-07 | m3/s | ml/min | llm_confirmed (0.6) | Nilsen_1985_2:abstract |
| apparent volume of distribution | `Q76` · V/F | 11.8 | l | 0.0118 | m3 | l | exact (1) | Nilsen_1985_2:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tiaprofenic acid
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Nilsen_1985_2_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption lag time]` | 0.23 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag time]` |  | 0.23 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 4.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` |  | 4.32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 11.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` |  | 11.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution rate constant]` | 1.31 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution rate constant]` |  | 1.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 4.66 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` |  | 4.66 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | 30.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` |  | 30.0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tiaprofenic acid | tiaprofenic_acid | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tiaprofenic acid | tiaprofenic_acid | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Nilsen_1985_2:abstract'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Nilsen_1985_2:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Nilsen_1985_2:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Nilsen_1985_2:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Nilsen_1985_2:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Nilsen_1985_2:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.8 L/h | ['Nilsen_1985_2:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 11.8 L | ['Nilsen_1985_2:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=tiaprofenic acid) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['kcomp'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference_modelica.zip" download>TiaprofenicAcid_Nilsen1985v2_reference_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference_fmi.zip" download>TiaprofenicAcid_Nilsen1985v2_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference_matlab.zip" download>TiaprofenicAcid_Nilsen1985v2_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference_matlab_simbio.zip" download>TiaprofenicAcid_Nilsen1985v2_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference_sbml.zip" download>TiaprofenicAcid_Nilsen1985v2_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference_cellml.zip" download>TiaprofenicAcid_Nilsen1985v2_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2603 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 828 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0006 | kg |
| input | model | `Cl` | 5e-07 | m3/s |
| input | model | `VdPerKg` | 0.0001686 | m3/kg |
| input | model | `ka` | 0.0012 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Nilsen OG, Jacobsen G, Walstad RA. Steady state pharmacokinetics of tiaprofenic acid in elderly patients. Arzneimittel-Forschung 35(5):875–879 (1985).

**This record:** Pharmacolibrary v26.09, model `TiaprofenicAcid_Nilsen1985v2_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference>

```bibtex
@misc{pharmacolibrary_TiaprofenicAcidNilsen1985v2reference,
  title  = {{Pharmacolibrary model TiaprofenicAcid_Nilsen1985v2_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 4.32 /h, lag 13.8 min, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 600 mg oral (M01AE11) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `TiaprofenicAcid_Nilsen1985v2_reference_params.json` · controls `TiaprofenicAcid_Nilsen1985v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btiaprofenic_acid%5D%20TiaprofenicAcid_Nilsen1985v2_reference&body=Drug%3A%20tiaprofenic_acid%0ARecord%3A%20TiaprofenicAcid_Nilsen1985v2_reference%0APaper%3A%20Nilsen_1985_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 01:25 UTC</sub>
