<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab emtansine&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/&quot;},{&quot;label&quot;:&quot;Chen_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabEmtansine_Chen2017_reference&quot;,&quot;label&quot;:&quot;Chen_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Gao2026_reference&quot;,&quot;label&quot;:&quot;Gao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Gao2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Gupta2012_reference&quot;,&quot;label&quot;:&quot;Gupta_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Gupta2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Betts2020_mouseb&quot;,&quot;label&quot;:&quot;Betts_2020_mouseb&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab emtansine — `TrastuzumabEmtansine_Chen2017_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trastuzumab emtansine, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Chen SC et al., Population pharmacokinetics of trastuzu…, Cancer chemotherapy and pha… (2017)
  ·  DOI: [10.1007/s00280-017-3443-1](https://doi.org/10.1007/s00280-017-3443-1)

<div class="pk-model-meta" hidden drug="trastuzumab emtansine" model-id="TrastuzumabEmtansine_Chen2017_reference" status="curated_candidate" stale="false" population="previously treated patients with HER2-positive advanced gastric cancer" measured-compound="trastuzumab emtansine" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| linear clearance (CL) | `Q22` · CL | 0.79 | L/day | 9.143518518518519e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | Chen_2017:abstract | — | not captured |
| volume of distribution in the central compartment (V c) | `Q63` · V1 | 4.48 | L | 0.0044800000000000005 | [l] | not captured | boundary_compartment (0.9) | Chen_2017:abstract | — | not captured |
| distribution clearance (Q) | `Q30` · Q | 0.62 | L/day | 7.175925925925926e-09 | [l] / [d] | not captured | exact (1.0) | Chen_2017:abstract | — | not captured |
| volume of distribution in the peripheral compartment (V p) | `Q64` · V2 | 1.49 | L | 0.00149 | [l] | not captured | boundary_compartment (0.9) | Chen_2017:abstract | — | not captured |
| KM | `Q1` · Km | 1.63 | μg/mL | not captured | [µg] / [ml] | not captured | exact (1.0) | Chen_2017:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('nonlinear CL', value 2.06) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab emtansine
- molar mass: none found for 'trastuzumab_emtansine' — its concentrations stay mass-only
- molar mass: none found for 'trastuzumab emtansine' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Chen_2017_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[distribution clearance]` | 0.62 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[km]` | 1.63 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[km]` | not captured | 1.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[linear clearance]` | 0.79 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[linear clearance]` | not captured | 0.79 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | not captured | 0.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c]` | not captured | 4.48 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v p]` | not captured | 1.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution in the central compartment]` | 4.48 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution in the peripheral compartment]` | 1.49 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trastuzumab emtansine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trastuzumab emtansine | unknown | mismatch |

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
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Chen_2017:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chen_2017:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chen_2017:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chen_2017:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chen_2017:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.79 | not captured | not captured | ['Chen_2017:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0329 L/h | not captured | not captured | ['Chen_2017:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.48 L | not captured | not captured | ['Chen_2017:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.49 L | not captured | not captured | ['Chen_2017:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=trastuzumab emtansine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_trastuzumab_emtansine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chen_2017` / `Chen_2017::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_trastuzumab_emtansine/models/modelica/TrastuzumabEmtansine_Chen2017_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_trastuzumab_emtansine/models/modelica/TrastuzumabEmtansine_Chen2017_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_trastuzumab_emtansine/models/modelica/TrastuzumabEmtansine_Chen2017_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference/TrastuzumabEmtansine_Chen2017_reference_modelica.zip" download>TrastuzumabEmtansine_Chen2017_reference_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference/TrastuzumabEmtansine_Chen2017_reference_fmi.zip" download>TrastuzumabEmtansine_Chen2017_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference/TrastuzumabEmtansine_Chen2017_reference_matlab.zip" download>TrastuzumabEmtansine_Chen2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference/TrastuzumabEmtansine_Chen2017_reference_matlab_simbio.zip" download>TrastuzumabEmtansine_Chen2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference/TrastuzumabEmtansine_Chen2017_reference_sbml.zip" download>TrastuzumabEmtansine_Chen2017_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference/TrastuzumabEmtansine_Chen2017_reference_cellml.zip" download>TrastuzumabEmtansine_Chen2017_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference/TrastuzumabEmtansine_Chen2017_reference.svg" alt="TrastuzumabEmtansine_Chen2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 12 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 12 mg parenteral (L01FD03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference/TrastuzumabEmtansine_Chen2017_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference/TrastuzumabEmtansine_Chen2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `TrastuzumabEmtansine_Chen2017_reference_params.json` · controls `TrastuzumabEmtansine_Chen2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:47 UTC</sub>
