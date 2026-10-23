<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;caspofungin&quot;,&quot;href&quot;:&quot;drugs/drug_caspofungin/&quot;},{&quot;label&quot;:&quot;Borsuk-De_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Caspofungin_AbdulAziz2025_reference&quot;,&quot;label&quot;:&quot;Abdul-Aziz_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caspofungin/Caspofungin_AbdulAziz2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Caspofungin_BorsukDe2020_reference&quot;,&quot;label&quot;:&quot;Borsuk-De_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# caspofungin — `Caspofungin_BorsukDe2020_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="caspofungin" model-id="Caspofungin_BorsukDe2020_reference" status="curated_candidate" stale="false" population="intensive care unit patients" measured-compound="caspofungin" parameterization="mechanistic" topology="2C"></div>

## Citation
Borsuk-De Moor A, Sysiak-Sławecka J, Rypulak E, Borys M, Piwowarczyk P, Raszewski G et al. Nonstationary Pharmacokinetics of Caspofungin in ICU Patients. Antimicrobial agents and chemotherapy 64(9) (2020).
  ·  DOI: [10.1128/AAC.00345-20](https://doi.org/10.1128/AAC.00345-20)

## Population and dosing

**Population:** intensive care unit patients · condition invasive fungal infection · age group adult · n = value.

**Dosing:** 35, 50, 70 mg, iv, multiple, every 24 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference.svg" alt="Caspofungin_BorsukDe2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| θCL day 1 (liter/h) | CL | 0.563 | liter/h | 6.7 |  |
| θV1 day 1(liter) | V1 | 6.04 | liter | 7.0 | 0.868 (34.9% RSE) |
| θQ (liter/h) | Q | 1.31 | liter/h | 15.7 |  |
| θV2 (liter) | V2 | 5.13 | liter | 13.7 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of θq: this record has 1.31, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θCL day 1 (liter/h) | `Q22` · CL | 0.563 | liter/h | 1.564e-07 | m3/s | l/h | 6.7 | boundary (0.8) | T2:row1:col1 |  |
| θV1 day 1(liter) | `Q63` · V1 | 6.04 | liter | 0.00604 | m3 | l | 7.0 | llm_confirmed (0.6) | T2:row4:col1 | 0.868 (34.9% RSE) |
| θQ (liter/h) | `Q30` · Q | 1.31 | liter/h | 3.639e-07 | m3/s | l/h | 15.7 | llm (0.6) | T2:row7:col1 |  |
| θV2 (liter) | `Q64` · V2 | 5.13 | liter | 0.00513 | m3 | l | 13.7 | llm_confirmed (0.6) | T2:row8:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[θq]` | 1.31 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T2:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.563 | ['T2:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.563 L/h | ['T2:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.04 L | ['T2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.13 L | ['T2:row8:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=caspofungin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 1.093 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3.5e-05 | kg |
| input | model | `Cl` | 1.564e-07 | m3/s |
| input | model | `VdPerKg` | 8.629e-05 | m3/kg |
| input | model | `k12` | 6.025e-05 | 1/s |
| input | model | `k21` | 7.093e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Borsuk-De Moor A, Sysiak-Sławecka J, Rypulak E, Borys M, Piwowarczyk P, Raszewski G et al. Nonstationary Pharmacokinetics of Caspofungin in ICU Patients. Antimicrobial agents and chemotherapy 64(9) (2020). [doi:10.1128/AAC.00345-20](https://doi.org/10.1128/AAC.00345-20)

**This record:** Pharmacolibrary v26.09, model `Caspofungin_BorsukDe2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference>

```bibtex
@misc{pharmacolibrary_CaspofunginBorsukDe2020reference,
  title  = {{Pharmacolibrary model Caspofungin_BorsukDe2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference},
  note   = {Parameters from doi:10.1128/AAC.00345-20},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 35 mg infusion over 10 min, single dose. Doses in the paper: 35, 50, 70 mg.

<dbs-fmusim paramsurl="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference/Caspofungin_BorsukDe2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Caspofungin_BorsukDe2020_reference_params.json` · controls `Caspofungin_BorsukDe2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcaspofungin%5D%20Caspofungin_BorsukDe2020_reference&body=Drug%3A%20caspofungin%0ARecord%3A%20Caspofungin_BorsukDe2020_reference%0APaper%3A%20Borsuk-De_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:23 UTC</sub>
