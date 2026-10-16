<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;tiaprofenic acid&quot;,&quot;href&quot;:&quot;drugs/drug_tiaprofenic_acid/&quot;},{&quot;label&quot;:&quot;Nilsen_1985_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TiaprofenicAcid_Nilsen1985v2_reference&quot;,&quot;label&quot;:&quot;Nilsen_1985_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tiaprofenic acid — `TiaprofenicAcid_Nilsen1985v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The record omits a specific distribution rate constant value for tiaprofenic acid, leaving the model incomplete.**

The abstract-only source provided summary statistics that stood in for a fitted model. Although the parameter 'kcomp' was listed, no value was extracted, so it was neither emitted nor included in the defaulted list. Consequently, the review found only four covered parameters against the five expected for this one-compartment structure. Extracted — tiaprofenic acid: tlag 0.23 h, kabs 4.32 h-1, kcomp 1.31 h-1, t1/2z 4.66 h, CL 30 ml/min, V/F 11.8 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tiaprofenic acid, the second reading tiaprofenic_acid; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Nilsen OG et al., Steady state pharmacokinetics of tiapro…, Arzneimittel-Forschung (1985)

<div class="pk-model-meta" hidden drug="tiaprofenic acid" model-id="TiaprofenicAcid_Nilsen1985v2_reference" status="needs_review" stale="false" population="elderly patients" measured-compound="tiaprofenic acid" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| absorption lag time | `Q83` · tlag | 0.23 | h | 828.0 | [h] | not captured | exact (1.0) | Nilsen_1985_2:abstract | — | not captured |
| absorption rate constant | `Q49` · kabs | 4.32 | h-1 | 0.0012000000000000001 | [1] / [h] | not captured | exact (1.0) | Nilsen_1985_2:abstract | — | not captured |
| distribution rate constant | `Q48` · kcomp | 1.31 | h-1 | 0.0003638888888888889 | [1] / [h] | not captured | exact (1.0) | Nilsen_1985_2:abstract | — | not captured |
| elimination half-life | `Q57` · t1/2z | 4.66 | h | 16776.0 | [h] | not captured | llm (0.6) | Nilsen_1985_2:abstract | — | not captured |
| total body clearance | `Q22` · CL | 30.0 | ml/min | 5e-07 | [ml] / [min] | not captured | llm_confirmed (0.6) | Nilsen_1985_2:abstract | — | not captured |
| apparent volume of distribution | `Q76` · V/F | 11.8 | l | 0.011800000000000001 | [l] | not captured | exact (1.0) | Nilsen_1985_2:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[absorption lag time]` | 0.23 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag time]` | not captured | 0.23 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 4.32 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | not captured | 4.32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 11.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | not captured | 11.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution rate constant]` | 1.31 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution rate constant]` | not captured | 1.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 4.66 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | not captured | 4.66 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | 30.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | not captured | 30.0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tiaprofenic acid | tiaprofenic_acid | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tiaprofenic acid | tiaprofenic_acid | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Nilsen_1985_2:abstract'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Nilsen_1985_2:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Nilsen_1985_2:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Nilsen_1985_2:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Nilsen_1985_2:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Nilsen_1985_2:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.8 L/h | not captured | not captured | ['Nilsen_1985_2:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 11.8 L | not captured | not captured | ['Nilsen_1985_2:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=tiaprofenic acid) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['kcomp'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tiaprofenic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nilsen_1985_2` / `Nilsen_1985_2::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tiaprofenic_acid/models/modelica/TiaprofenicAcid_Nilsen1985v2_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tiaprofenic_acid/models/modelica/TiaprofenicAcid_Nilsen1985v2_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tiaprofenic_acid/models/modelica/TiaprofenicAcid_Nilsen1985v2_reference.json`


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
</div><figure class="pk-models-diagram"><img src="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference.svg" alt="TiaprofenicAcid_Nilsen1985v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 4.32 /h, lag 13.8 min, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 600 mg oral (M01AE11) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference/TiaprofenicAcid_Nilsen1985v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `TiaprofenicAcid_Nilsen1985v2_reference_params.json` · controls `TiaprofenicAcid_Nilsen1985v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:25 UTC</sub>
