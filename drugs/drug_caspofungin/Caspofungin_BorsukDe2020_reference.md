<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;caspofungin&quot;,&quot;href&quot;:&quot;drugs/drug_caspofungin/&quot;},{&quot;label&quot;:&quot;Borsuk-De_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Caspofungin_AbdulAziz2025_reference&quot;,&quot;label&quot;:&quot;Abdul-Aziz_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caspofungin/Caspofungin_AbdulAziz2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Caspofungin_BorsukDe2020_reference&quot;,&quot;label&quot;:&quot;Borsuk-De_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# caspofungin — `Caspofungin_BorsukDe2020_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of θq: this record has 1.31, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Borsuk-De Moor A et al., Nonstationary Pharmacokinetics of Caspo…, Antimicrobial agents and ch… (2020)
  ·  DOI: [10.1128/AAC.00345-20](https://doi.org/10.1128/AAC.00345-20)

<div class="pk-model-meta" hidden drug="caspofungin" model-id="Caspofungin_BorsukDe2020_reference" status="curated_candidate" stale="false" population="intensive care unit patients" measured-compound="caspofungin" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θCL day 1 (liter/h) | `Q22` · CL | 0.563 | liter/h | 1.5638888888888887e-07 | [l] / [h] | 6.7 | boundary (0.8) | T2:row1:col1 | — | not captured |
| θV1 day 1(liter) | `Q63` · V1 | 6.04 | liter | 0.00604 | [l] | 7.0 | llm_confirmed (0.6) | T2:row4:col1 | — | 0.868 (34.9% RSE) |
| θQ (liter/h) | `Q30` · Q | 1.31 | liter/h | 3.638888888888889e-07 | [l] / [h] | 15.7 | llm (0.6) | T2:row7:col1 | — | not captured |
| θV2 (liter) | `Q64` · V2 | 5.13 | liter | 0.00513 | [l] | 13.7 | llm_confirmed (0.6) | T2:row8:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2CL (%CV)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2V1 (%CV)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2Q (%CV)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2V2 (%CV)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'corCL-V1' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ2prop (%CV)' routed out of structural estimates ('Residual error model')
- dropped duplicate Q22 ('θCL day 2 (liter/h)', value '0.737') — already have one for this compound
- dropped duplicate Q22 ('θCL day 3 (liter/h)', value '1.01') — already have one for this compound
- dropped duplicate Q63 ('θV1 day 2 (liter)', value '7.32') — already have one for this compound
- dropped duplicate Q63 ('θV1 day 3 (liter)', value '7.70') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=caspofungin

**Extraction notes:**
- unparsed cell T2:row1:col3 = '0.558 (0.495–0.618)'
- unparsed cell T2:row2:col3 = '0.734 (0.668–0.817)'
- unparsed cell T2:row3:col3 = '1.00 (0.854–1.17)'
- unparsed cell T2:row4:col3 = '6.02 (5.39–6.75)'
- unparsed cell T2:row5:col3 = '7.28 (6.56–8.09)'
- unparsed cell T2:row6:col3 = '7.64 (6.83–8.62)'
- unparsed cell T2:row7:col3 = '1.31 (1.03–1.76)'
- unparsed cell T2:row8:col3 = '5.18 (4.04–6.49)'
- unparsed cell T2:row11:col3 = '0.243 (0.184–0.296)'
- unparsed cell T2:row12:col3 = '0.274 (0.182–0.356)'
- unparsed cell T2:row14:col3 = '0.502 (0.327–0.690)'
- unparsed cell T2:row15:col3 = '0.886 (0.611–1.00)'
- unparsed cell T2:row18:col3 = '0.195 (0.181–0.209)'
- LLM region Borsuk-De_2020:discussion_prose: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 12:53:46 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.909 (10/11 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θq]` | 1.31 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.563 | not captured | not captured | ['T2:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.563 L/h | not captured | not captured | ['T2:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.04 L | not captured | not captured | ['T2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.13 L | not captured | not captured | ['T2:row8:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=caspofungin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_caspofungin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Borsuk-De_2020` / `Borsuk-De_2020::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_caspofungin/models/modelica/Caspofungin_BorsukDe2020_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_caspofungin/models/modelica/Caspofungin_BorsukDe2020_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_caspofungin/models/modelica/Caspofungin_BorsukDe2020_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference_modelica.zip" download>Caspofungin_BorsukDe2020_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference_fmi.zip" download>Caspofungin_BorsukDe2020_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference_matlab.zip" download>Caspofungin_BorsukDe2020_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference_matlab_simbio.zip" download>Caspofungin_BorsukDe2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference_sbml.zip" download>Caspofungin_BorsukDe2020_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference_cellml.zip" download>Caspofungin_BorsukDe2020_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference.svg" alt="Caspofungin_BorsukDe2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 35 mg infusion over 10 min, single dose. Doses in the paper: 35, 50, 70 mg.

<dbs-fmusim paramsurl="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Caspofungin_BorsukDe2020_reference_params.json` · controls `Caspofungin_BorsukDe2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:23 UTC</sub>
