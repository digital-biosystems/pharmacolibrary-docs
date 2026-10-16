<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D04A&quot;,&quot;href&quot;:&quot;atc/D04A.md&quot;},{&quot;label&quot;:&quot;diphenhydramine&quot;,&quot;href&quot;:&quot;drugs/drug_diphenhydramine/&quot;},{&quot;label&quot;:&quot;Wasfi_2003 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diphenhydramine_Wasfi2003_reference&quot;,&quot;label&quot;:&quot;Wasfi_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diphenhydramine — `Diphenhydramine_Wasfi2003_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.308). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of terminal elimination half lives: this record has none, the second reading 1.58; it also differs on 8 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Wasfi IA et al., Comparative pharmacokinetics of diphenh…, Veterinary research communi… (2003)
  ·  DOI: [10.1023/a:1025789607863](https://doi.org/10.1023/a:1025789607863)

<div class="pk-model-meta" hidden drug="diphenhydramine" model-id="Diphenhydramine_Wasfi2003_reference" status="curated_candidate" stale="false" population="camels and horses" measured-compound="diphenhydramine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| terminal elimination half lives in camels | `Q57` · t1/2z | 1.58 | h | 5688.0 | [h] | not captured | llm (0.6) | Wasfi_2003:abstract | — | not captured |
| total body clearances in camels | `Q22` · CL | 1.42 | L/h | 3.9444444444444444e-07 | L/h | not captured | llm (0.6) | Wasfi_2003:abstract | — | not captured |
| total body clearances in horses | `Q354` · CLnorm | 0.79 | L/h | 2.1944444444444445e-07 | L/h | not captured | llm (0.6) | Wasfi_2003:abstract | — | not captured |
| volumes of distribution at steady state in camels | `Q65` · Vss | 2.38 | L/kg | 0.16659999999999997 | [l] / [kg] | not captured | llm (0.6) | Wasfi_2003:abstract | — | not captured |
| volumes of the central compartment in camels | `Q61` · V | 1.58 | L | 0.00158 | L | not captured | llm (0.6) | Wasfi_2003:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('terminal elimination half lives in horses', value '6.11') — already have one for this compound
- unit_dimension_unknown: 'L/h per kg' (CL)
- unit_dimension_unknown: 'L/h per kg' (CLnorm)
- dropped duplicate Q65 ('volumes of distribution at steady state in horses', value '5.98') — already have one for this compound
- dropped duplicate Q63 ('volumes of the central compartment in horses', value '2.48') — already have one for this compound
- implicit units: 'total body clearances in camels' → L/h (from the popPK convention: 'Total body clearance is conventionally expressed in L/h; the value is consistent with a clearance estimate.')
- implicit units: 'total body clearances in horses' → L/h (from the popPK convention: 'A clearance normalized to a standard 70 kg reference is conventionally reported as the reference-sized clearance in L/h,')
- implicit units: 'volumes of the central compartment in camels' → L (from the popPK convention: 'Central-compartment volumes are conventionally expressed in L; the value is consistent with a volume estimate.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diphenhydramine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'volumes of the central compartment in camels' is the general volume)
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Wasfi_2003_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[terminal elimination half lives in camels]` | 1.58 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[terminal elimination half lives]` | not captured | 1.58 | only_one_extracted |
| `qwen3.8-27b` | `parameters[total body clearances in camels]` | 1.42 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[total body clearances in horses]` | 0.79 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[total body clearances]` | not captured | 1.42 | only_one_extracted |
| `qwen3.8-27b` | `parameters[volumes of distribution at steady state in camels]` | 2.38 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[volumes of distribution at steady state]` | not captured | 2.38 | only_one_extracted |
| `qwen3.8-27b` | `parameters[volumes of the central compartment in camels]` | 1.58 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[volumes of the central compartment of the two compartment pharmacokinetic model]` | not captured | 1.58 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wasfi_2003:abstract'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wasfi_2003:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Wasfi_2003:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wasfi_2003:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wasfi_2003:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.42 | not captured | not captured | ['Wasfi_2003:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.42 L/h | not captured | not captured | ['Wasfi_2003:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.58 L | not captured | not captured | ['Wasfi_2003:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 167 L | not captured | not captured | ['Wasfi_2003:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=diphenhydramine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_diphenhydramine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wasfi_2003` / `Wasfi_2003::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_diphenhydramine/models/modelica/Diphenhydramine_Wasfi2003_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_diphenhydramine/models/modelica/Diphenhydramine_Wasfi2003_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_diphenhydramine/models/modelica/Diphenhydramine_Wasfi2003_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference/Diphenhydramine_Wasfi2003_reference_modelica.zip" download>Diphenhydramine_Wasfi2003_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference/Diphenhydramine_Wasfi2003_reference_fmi.zip" download>Diphenhydramine_Wasfi2003_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference/Diphenhydramine_Wasfi2003_reference_matlab.zip" download>Diphenhydramine_Wasfi2003_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference/Diphenhydramine_Wasfi2003_reference_matlab_simbio.zip" download>Diphenhydramine_Wasfi2003_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference/Diphenhydramine_Wasfi2003_reference_sbml.zip" download>Diphenhydramine_Wasfi2003_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference/Diphenhydramine_Wasfi2003_reference_cellml.zip" download>Diphenhydramine_Wasfi2003_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference/Diphenhydramine_Wasfi2003_reference.svg" alt="Diphenhydramine_Wasfi2003_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 200 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 200 mg parenteral (R06AA02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference/Diphenhydramine_Wasfi2003_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference/Diphenhydramine_Wasfi2003_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Diphenhydramine_Wasfi2003_reference_params.json` · controls `Diphenhydramine_Wasfi2003_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:24 UTC</sub>
