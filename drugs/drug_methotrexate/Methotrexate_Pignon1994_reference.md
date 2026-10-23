<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;methotrexate&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/&quot;},{&quot;label&quot;:&quot;Pignon_1994 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methotrexate_Pan2026_reference&quot;,&quot;label&quot;:&quot;Pan_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pan2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Pignon1994_reference&quot;,&quot;label&quot;:&quot;Pignon_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pignon1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Methotrexate_Tan2024_reference&quot;,&quot;label&quot;:&quot;Tan_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Tan2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Wei2025_reference&quot;,&quot;label&quot;:&quot;Wei_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Wei2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_van2024_reference&quot;,&quot;label&quot;:&quot;van_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_van2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methotrexate — `Methotrexate_Pignon1994_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The bioavailability parameter for methotrexate was not extracted from the abstract-only source, so a library placeholder was used instead of an estimate.

<div class="pk-model-meta" hidden drug="methotrexate" model-id="Methotrexate_Pignon1994_reference" status="needs_review" stale="false" population="adults with osteosarcoma" measured-compound="methotrexate" parameterization="mechanistic" topology="1C"></div>

## Citation
Pignon T, Lacarelle B, Duffaud F, Guillet P, Catalin J, Durand A et al. Pharmacokinetics of high-dose methotrexate in adult osteogenic sarcoma. Cancer chemotherapy and pharmacology 33(5):420–424 (1994).
  ·  DOI: [10.1007/BF00686272](https://doi.org/10.1007/BF00686272)

## Population and dosing

**Population:** adults with osteosarcoma · condition osteosarcoma · age group adult.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_methotrexate/Methotrexate_Pignon1994_reference/Methotrexate_Pignon1994_reference.svg" alt="Methotrexate_Pignon1994_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| clearance | CL | 49.1 | L/h |
| t1/2 alpha | t1/2α | 2.66 | h |
| t1/2 beta | t1/2β | 15.69 | h |
| volume of distribution | V | 0.32 | l/kg |
| absorption rate ka6MP | kabs | 21.07 | 1/day |
| t lag,oral | tlag | 0.36 | hour |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The bioavailability parameter for methotrexate was not extracted from the abstract-only source, so a library placeholder was used instead of an estimate.**

The record includes an absorption rate constant of 21.07 1/day and a lag time of 0.36 hours, indicating an oral pathway, yet no value for bioavailability was provided in the abstract. Consequently, the model relied on a default value rather than a paper-specific estimate. Since the data came only from the abstract, summary statistics like the 49.1 L/h clearance stand in for a fitted model, leaving the bioavailability unsupported by the source text. Extracted — methotrexate: CL 49.1 L/h, t1/2α 2.66 h, t1/2β 15.7 h, V 0.32 l/kg, kabs 21.1 1/day, tlag 0.36 hour.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ka: this record has 0.268, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance | `Q22` · CL | 49.1 | L/h | 1.364e-05 | m3/s | L/h | exact (1) | Pignon_1994:abstract |
| t1/2 alpha | `Q59` · t1/2α | 2.66 | h | 9576 | s | h | exact (1) | Pignon_1994:abstract |
| t1/2 beta | `Q60` · t1/2β | 15.69 | h | 5.648e+04 | s | h | exact (1) | Pignon_1994:abstract |
| volume of distribution | `Q61` · V | 0.32 | l/kg | 0.0224 | m3 | l/kg | exact (1) | Pignon_1994:abstract |
| absorption rate ka6MP | `Q49` · kabs | 21.07 | 1/day | 0.0002439 | 1/s | 1/h | review_gapfill (0.7) | Gebhard_2023:review |
| t lag,oral | `Q83` · tlag | 0.36 | hour | 1296 | s | h | review_gapfill (0.7) | Tan_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- unit_dimension_unknown: 'ml min-1 m-2' (CL)
- implicit units: 'clearance' → L/h (from the popPK convention: 'Clearance parameters in population pharmacokinetics are most commonly expressed in L/h. The value 49.1 is consistent wit')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methotrexate
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gebhard_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from Tan_2024's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Pignon_1994_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.268 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag,oral]` | 0.36 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Pignon_1994:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gebhard_2023:review'] |
| C5_dimension_Q59 | pass | [time] |  | ['Pignon_1994:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Pignon_1994:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Pignon_1994:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tan_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 49.1 | ['Pignon_1994:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 49.1 L/h | ['Pignon_1994:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 22.4 L | ['Pignon_1994:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=methotrexate) | central.C | output must be the measured/analyte compartment |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_methotrexate/Methotrexate_Pignon1994_reference/Methotrexate_Pignon1994_reference_modelica.zip" download>Methotrexate_Pignon1994_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_methotrexate/Methotrexate_Pignon1994_reference/Methotrexate_Pignon1994_reference_fmi.zip" download>Methotrexate_Pignon1994_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Pignon1994_reference/Methotrexate_Pignon1994_reference_matlab.zip" download>Methotrexate_Pignon1994_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Pignon1994_reference/Methotrexate_Pignon1994_reference_matlab_simbio.zip" download>Methotrexate_Pignon1994_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Pignon1994_reference/Methotrexate_Pignon1994_reference_sbml.zip" download>Methotrexate_Pignon1994_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Pignon1994_reference/Methotrexate_Pignon1994_reference_cellml.zip" download>Methotrexate_Pignon1994_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4544 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 1296 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-06 | kg |
| input | model | `Cl` | 1.364e-05 | m3/s |
| input | model | `VdPerKg` | 0.00032 | m3/kg |
| input | model | `ka` | 0.0002439 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Pignon T, Lacarelle B, Duffaud F, Guillet P, Catalin J, Durand A et al. Pharmacokinetics of high-dose methotrexate in adult osteogenic sarcoma. Cancer chemotherapy and pharmacology 33(5):420–424 (1994). [doi:10.1007/BF00686272](https://doi.org/10.1007/BF00686272)

**This record:** Pharmacolibrary v26.09, model `Methotrexate_Pignon1994_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_methotrexate/Methotrexate_Pignon1994_reference>

```bibtex
@misc{pharmacolibrary_MethotrexatePignon1994reference,
  title  = {{Pharmacolibrary model Methotrexate_Pignon1994_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_methotrexate/Methotrexate_Pignon1994_reference},
  note   = {Parameters from doi:10.1007/BF00686272},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2.5 mg, single dose, first-order absorption (ka 0.878 /h, lag 21.6 min, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 2.5 mg oral (L04AX03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_methotrexate/Methotrexate_Pignon1994_reference/Methotrexate_Pignon1994_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_methotrexate/Methotrexate_Pignon1994_reference/Methotrexate_Pignon1994_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Methotrexate_Pignon1994_reference_params.json` · controls `Methotrexate_Pignon1994_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethotrexate%5D%20Methotrexate_Pignon1994_reference&body=Drug%3A%20methotrexate%0ARecord%3A%20Methotrexate_Pignon1994_reference%0APaper%3A%20Pignon_1994%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methotrexate/Methotrexate_Pignon1994_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 13:27 UTC</sub>
