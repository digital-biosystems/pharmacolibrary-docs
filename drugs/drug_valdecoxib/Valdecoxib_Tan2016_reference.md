<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;valdecoxib&quot;,&quot;href&quot;:&quot;drugs/drug_valdecoxib/&quot;},{&quot;label&quot;:&quot;Tan_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Valdecoxib_Tan2016_reference&quot;,&quot;label&quot;:&quot;Tan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# valdecoxib — `Valdecoxib_Tan2016_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.278). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Valdecoxib absorption and inter-compartmental clearance parameters use library defaults not reported in the source text.**

The record was built from the abstract alone, so summary statistics stood in for a fitted model. Absorption and peripheral clearance rates were defaulted because they were not reported in the source. These missing values mean the simulated pharmacokinetic profile relies on conventions rather than paper-specific estimates. Extracted — valdecoxib: CLnorm 19.1 L·h-1 ·70 kg-1, V1 4.2 L·70 kg-1, Q 6.29 L·h-1 ·70 kg-1, V2/F 130 L·70 kg-1, V3 2.03 L·70 kg-1, CL 9.53 L·h-1 ·70 kg-1, V 51 L·70 kg-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading parecoxib → valdecoxib (metabolism); it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `parecoxib`, measured `valdecoxib`.

## Citation
Tan L et al., Pharmacokinetics and analgesic effectiv…, Paediatric anaesthesia (2016)
  ·  DOI: [10.1111/pan.13009](https://doi.org/10.1111/pan.13009)

<div class="pk-model-meta" hidden drug="valdecoxib" model-id="Valdecoxib_Tan2016_reference" status="needs_review" stale="false" population="children undergoing tonsillectomy +/- adenoidectomy" measured-compound="valdecoxib" parameterization="apparent" topology="3C"></div>

**Model structure:** 3-compartment, oral mammillary model — template `PK_3C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLPARECOXIB | `Q354` · CLnorm | 19.1 | L·h-1 ·70 kg-1 | 0.000371388888888889 | [l] / [[h] · [kg]] | not captured | llm (0.6) | Tan_2016:abstract | — | not captured |
| V1PARECOXIB | `Q63` · V1 | 4.2 | L·70 kg-1 | 0.29400000000000004 | [l] / [kg] | not captured | llm (0.6) | Tan_2016:abstract | — | not captured |
| Q2PARECOXIB | `Q30` · Q | 6.29 | L·h-1 ·70 kg-1 | 0.00012230555555555557 | [l] / [[h] · [kg]] | not captured | llm (0.6) | Tan_2016:abstract | — | not captured |
| V2PARECOXIB | `Q82` · V2/F | 130 | L·70 kg-1 | 9.1 | [l] / [kg] | not captured | llm (0.6) | Tan_2016:abstract | — | not captured |
| V3PARECOXIB | `Q77` · V3 | 2.03 | L·70 kg-1 | 0.14209999999999998 | [l] / [kg] | not captured | llm (0.6) | Tan_2016:abstract | — | not captured |
| CLVALDECOXIB | `Q22` · CL | 9.53 | L·h-1 ·70 kg-1 | 0.00018530555555555555 | [l] / [[h] · [kg]] | not captured | llm (0.6) | Tan_2016:abstract | — | not captured |
| VVALDECOXIB | `Q61` · V | 51 | L·70 kg-1 | 3.5700000000000003 | [l] / [kg] | not captured | llm (0.6) | Tan_2016:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag', 'k13', 'k31']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped duplicate Q30 ('Q3PARECOXIB', value 6.02) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=valdecoxib
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Tan_2016_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.278 (5/18 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['parecoxib', 'valdecoxib', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[clparecoxib]` | not captured | 19.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clparecoxib]` | 19.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clvaldecoxib].parameter_id` | Q22 | Q351 | mismatch |
| `gpt-oss-120b` | `parameters[q2parecoxib]` | not captured | 6.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2parecoxib]` | 6.29 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3parecoxib]` | not captured | 6.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1parecoxib]` | not captured | 4.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1parecoxib]` | 4.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2parecoxib]` | not captured | 130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2parecoxib]` | 130 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3parecoxib]` | not captured | 2.03 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3parecoxib]` | 2.03 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 667 L/h | not captured | not captured | ['Tan_2016:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.57e+03 L | not captured | not captured | ['Tan_2016:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 294 L | not captured | not captured | ['Tan_2016:abstract'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 9.1e+03 L | not captured | not captured | ['Tan_2016:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=valdecoxib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 3C → PK_3C* | PK_3C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_valdecoxib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tan_2016` / `Tan_2016::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_valdecoxib/models/modelica/Valdecoxib_Tan2016_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_valdecoxib/models/modelica/Valdecoxib_Tan2016_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_valdecoxib/models/modelica/Valdecoxib_Tan2016_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference/Valdecoxib_Tan2016_reference_modelica.zip" download>Valdecoxib_Tan2016_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference/Valdecoxib_Tan2016_reference_fmi.zip" download>Valdecoxib_Tan2016_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_3C_enteral.fmu" download>PK_3C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference/Valdecoxib_Tan2016_reference_matlab.zip" download>Valdecoxib_Tan2016_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference/Valdecoxib_Tan2016_reference_matlab_simbio.zip" download>Valdecoxib_Tan2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference/Valdecoxib_Tan2016_reference_sbml.zip" download>Valdecoxib_Tan2016_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference/Valdecoxib_Tan2016_reference_cellml.zip" download>Valdecoxib_Tan2016_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference/Valdecoxib_Tan2016_reference.svg" alt="Valdecoxib_Tan2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 10 mg oral (M01AH03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference/Valdecoxib_Tan2016_reference_params.json" metaurl="assets/fmu/PK_3C_enteral.vr.json" wasmurl="assets/fmu/PK_3C_enteral.js" controlsurl="drugs/drug_valdecoxib/Valdecoxib_Tan2016_reference/Valdecoxib_Tan2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3C_enteral` · parameters `Valdecoxib_Tan2016_reference_params.json` · controls `Valdecoxib_Tan2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:31 UTC</sub>
