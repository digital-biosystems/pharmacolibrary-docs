<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceftriaxone&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/&quot;},{&quot;label&quot;:&quot;Kumar_2010 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ceftriaxone_Alonso2021_reference&quot;,&quot;label&quot;:&quot;Alonso_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_Alonso2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ceftriaxone_Kumar2010_reference&quot;,&quot;label&quot;:&quot;Kumar_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ceftriaxone_RoubaudBaudron2025_reference&quot;,&quot;label&quot;:&quot;Roubaud-Baudron_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ceftriaxone — `Ceftriaxone_Kumar2010_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> F use library defaults, not estimates from this paper; t6_deviations.

<div class="pk-model-meta" hidden drug="ceftriaxone" model-id="Ceftriaxone_Kumar2010_reference" status="needs_review" stale="false" population="healthy and endometritic cows" measured-compound="ceftriaxone" parameterization="mechanistic" topology="1C"></div>

## Citation
Kumar S, Srivastava AK, Dumka VK, Kumar N, Raina RK. Plasma pharmacokinetics and milk levels of ceftriaxone following single intravenous administration in healthy and endometritic cows. Veterinary research communications 34(6):503–510 (2010).
  ·  DOI: [10.1007/s11259-010-9421-2](https://doi.org/10.1007/s11259-010-9421-2)

## Population and dosing

**Population:** healthy and endometritic cows · condition healthy and endometritis · age group adult.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference/Ceftriaxone_Kumar2010_reference.svg" alt="Ceftriaxone_Kumar2010_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vd(area) | V | 0.50 | L.kg(-1) |
| AUC | AUC | 62.2 | microg.ml(-1).h |
| t(1/2beta) | t1/2β | 1.02 | h |
| Cl(B) | CL | 0.30 | L.kg(-1).h(-1) |
| MRT | MRT | 1.55 | h |
| Ka (h−1)   1 0.55 | kabs | 1.0 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**F use library defaults, not estimates from this paper; t6_deviations.**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — ceftriaxone: V 0.5 L.kg(-1), AUC 62.2 microg.ml(-1).h, t1/2β 1.02 h, CL 0.3 L.kg(-1).h(-1), MRT 1.55 h, kabs 1 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ceftriaxone, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vd(area) | `Q61` · V | 0.50 | L.kg(-1) | 0.035 | m3 | l/kg | exact (1) | Kumar_2010:abstract, Kumar_2010:abstract |
| AUC | `Q88` · AUC | 62.2 | microg.ml(-1).h |  |  | µg/(h·ml) | exact (1) | Kumar_2010:abstract, Kumar_2010:abstract |
| t(1/2beta) | `Q60` · t1/2β | 1.02 | h | 3672 | s | h | llm (0.6) | Kumar_2010:abstract, Kumar_2010:abstract |
| Cl(B) | `Q22` · CL | 0.30 | L.kg(-1).h(-1) | 5.833e-06 | m3/s | l/(h·kg) | exact (1) | Kumar_2010:abstract, Kumar_2010:abstract |
| MRT | `Q53` · MRT | 1.55 | h | 5580 | s | h | exact (1) | Kumar_2010:abstract, Kumar_2010:abstract |
| Ka (h−1)   1 0.55 | `Q49` · kabs | 1.0 | h−1 | 0.0002778 | 1/s | 1/h | review_gapfill (0.7) | Alonso_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'P/C ratio' — extend the ontology if this is a real PK parameter (source ['Kumar_2010:abstract', 'Kumar_2010:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ceftriaxone
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Alonso_2021's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kumar_2010_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc]` | 62.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` |  | 62.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.30 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 0.30 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka (h-1) 1 0.55]` | 1.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | 1.55 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` |  | 1.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[p/c ratio]` |  | 0.52 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` | 1.02 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` |  | 1.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 0.50 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` |  | 0.50 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ceftriaxone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ceftriaxone | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kumar_2010:abstract', 'Kumar_2010:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Alonso_2021:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Kumar_2010:abstract', 'Kumar_2010:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Kumar_2010:abstract', 'Kumar_2010:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kumar_2010:abstract', 'Kumar_2010:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Kumar_2010:abstract', 'Kumar_2010:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.3 | ['Kumar_2010:abstract', 'Kumar_2010:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21 L/h | ['Kumar_2010:abstract', 'Kumar_2010:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 35 L | ['Kumar_2010:abstract', 'Kumar_2010:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=ceftriaxone) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference/Ceftriaxone_Kumar2010_reference_modelica.zip" download>Ceftriaxone_Kumar2010_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference/Ceftriaxone_Kumar2010_reference_fmi.zip" download>Ceftriaxone_Kumar2010_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference/Ceftriaxone_Kumar2010_reference_matlab.zip" download>Ceftriaxone_Kumar2010_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference/Ceftriaxone_Kumar2010_reference_matlab_simbio.zip" download>Ceftriaxone_Kumar2010_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference/Ceftriaxone_Kumar2010_reference_sbml.zip" download>Ceftriaxone_Kumar2010_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference/Ceftriaxone_Kumar2010_reference_cellml.zip" download>Ceftriaxone_Kumar2010_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5546 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 5.833e-06 | m3/s |
| input | model | `VdPerKg` | 0.0005 | m3/kg |
| input | model | `ka` | 0.0002778 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kumar S, Srivastava AK, Dumka VK, Kumar N, Raina RK. Plasma pharmacokinetics and milk levels of ceftriaxone following single intravenous administration in healthy and endometritic cows. Veterinary research communications 34(6):503–510 (2010). [doi:10.1007/s11259-010-9421-2](https://doi.org/10.1007/s11259-010-9421-2)

**This record:** Pharmacolibrary v26.09, model `Ceftriaxone_Kumar2010_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference>

```bibtex
@misc{pharmacolibrary_CeftriaxoneKumar2010reference,
  title  = {{Pharmacolibrary model Ceftriaxone_Kumar2010_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference},
  note   = {Parameters from doi:10.1007/s11259-010-9421-2},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 1 /h, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference/Ceftriaxone_Kumar2010_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference/Ceftriaxone_Kumar2010_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Ceftriaxone_Kumar2010_reference_params.json` · controls `Ceftriaxone_Kumar2010_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bceftriaxone%5D%20Ceftriaxone_Kumar2010_reference&body=Drug%3A%20ceftriaxone%0ARecord%3A%20Ceftriaxone_Kumar2010_reference%0APaper%3A%20Kumar_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:45 UTC</sub>
