<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;piritramide&quot;,&quot;href&quot;:&quot;drugs/drug_piritramide/&quot;},{&quot;label&quot;:&quot;Bouillon_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piritramide_Bouillon2004_reference&quot;,&quot;label&quot;:&quot;Bouillon_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piritramide/Piritramide_Bouillon2004_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Piritramide_Kietzmann1996_reference&quot;,&quot;label&quot;:&quot;Kietzmann_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piritramide/Piritramide_Kietzmann1996_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piritramide_Mller2006_reference&quot;,&quot;label&quot;:&quot;M\u00fcller_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piritramide/Piritramide_Mller2006_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# piritramide — `Piritramide_Bouillon2004_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Needs review), but the paper was screened again on 2026-10-07 05:39 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="piritramide" model-id="Piritramide_Bouillon2004_reference" status="extracted" stale="true" population="intensive care patients" measured-compound="piritramide" parameterization="mechanistic" topology="2C"></div>

## Citation
Bouillon T, Groeger P, Kietzmann D. The pharmacokinetics of piritramide after prolonged administration to intensive care patients. European journal of anaesthesiology 21(9):673–678 (2004).
  ·  DOI: [10.1017/s0265021504009019](https://doi.org/10.1017/s0265021504009019)

## Population and dosing

**Population:** intensive care patients · condition intensive care · age group adult · n = : 9.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_piritramide/Piritramide_Bouillon2004_reference/Piritramide_Bouillon2004_reference.svg" alt="Piritramide_Bouillon2004_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| volumes of distribution V1 | V1 | 47.9 | L |
| V2 | V2 | 402 | L |
| V3 | V3 | 332 | L |
| clearances Cl1 | CL | 66.5 | L/h |
| Cl2 | Q | 215 | L/h |
| steady-state volume of distribution | Vss | 782 | L |
| terminal elimination half-life | t1/2z | 17.4 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for piritramide's clearance, central→peripheral rate constant and peripheral→central rate constant.**

The model was built, but piritramide's clearance, central→peripheral rate constant and peripheral→central rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — piritramide: V1 47.9 L, V2 402 L, V3 332 L, CL 66.5 Lh(-1), Q 215 Lh(-1), Vss 782 L, t1/2z 17.4 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has piritramide, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| volumes of distribution V1 | `Q63` · V1 | 47.9 | L | 0.0479 | m3 | l | llm_confirmed (0.6) | Bouillon_2004:abstract |
| V2 | `Q64` · V2 | 402 | L | 0.402 | m3 | l | exact (1) | Bouillon_2004:abstract |
| V3 | `Q77` · V3 | 332 | L | 0.332 | m3 | l | exact (1) | Bouillon_2004:abstract |
| clearances Cl1 | `Q22` · CL | 66.5 | L/h | 1.847e-05 | m3/s | L/h | llm (0.6) | Bouillon_2004:abstract |
| Cl2 | `Q30` · Q | 215 | L/h | 5.972e-05 | m3/s | L/h | special_case (0.95) | Bouillon_2004:abstract |
| steady-state volume of distribution | `Q65` · Vss | 782 | L | 0.782 | m3 | l | llm_corrected (0.6) | Bouillon_2004:abstract |
| terminal elimination half-life | `Q57` · t1/2z | 17.4 | h | 6.264e+04 | s | h | llm (0.6) | Bouillon_2004:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'Lh(-1)' (CL)
- unit_dimension_unknown: 'Lh(-1)' (Q)
- dropped duplicate Q22 ('Cl3', value 18.4) — already have one for this compound
- implicit units: 'clearances Cl1' → L/h (from the popPK convention: 'No unit provided in text or table. Clearance is conventionally expressed in L/h, and the magnitude 66.5 is consistent wi')
- implicit units: 'Cl2' → L/h (from the popPK convention: 'No unit provided in text or table. Intercompartmental clearance (Q) is conventionally expressed in L/h, and the magnitud')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=piritramide
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Bouillon_2004_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.105 (2/19 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl1]` |  | 66.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` | 215 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` |  | 215 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearances cl1]` | 66.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[predicted volume of distribution]` |  | 412.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` | 782 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` |  | 782 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal elimination half-life]` | 17.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal elimination half-life]` |  | 17.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 47.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 402 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 402 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 332 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` |  | 332 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volumes of distribution v1]` | 47.9 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | piritramide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | piritramide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bouillon_2004:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Bouillon_2004:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bouillon_2004:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Bouillon_2004:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Bouillon_2004:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Bouillon_2004:abstract'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Bouillon_2004:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 66.5 | ['Bouillon_2004:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 66.5 L/h | ['Bouillon_2004:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 47.9 L | ['Bouillon_2004:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 402 L | ['Bouillon_2004:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 782 L | ['Bouillon_2004:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_piritramide/Piritramide_Bouillon2004_reference/Piritramide_Bouillon2004_reference_modelica.zip" download>Piritramide_Bouillon2004_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_piritramide/Piritramide_Bouillon2004_reference/Piritramide_Bouillon2004_reference_fmi.zip" download>Piritramide_Bouillon2004_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_piritramide/Piritramide_Bouillon2004_reference/Piritramide_Bouillon2004_reference_matlab.zip" download>Piritramide_Bouillon2004_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_piritramide/Piritramide_Bouillon2004_reference/Piritramide_Bouillon2004_reference_matlab_simbio.zip" download>Piritramide_Bouillon2004_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_piritramide/Piritramide_Bouillon2004_reference/Piritramide_Bouillon2004_reference_sbml.zip" download>Piritramide_Bouillon2004_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_piritramide/Piritramide_Bouillon2004_reference/Piritramide_Bouillon2004_reference_cellml.zip" download>Piritramide_Bouillon2004_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4306 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 4.5e-05 | kg |
| input | model | `Cl` | 1.847e-05 | m3/s |
| input | model | `VdPerKg` | 0.0006843 | m3/kg |
| input | model | `k12` | 0.001247 | 1/s |
| input | model | `k21` | 0.0001486 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Bouillon T, Groeger P, Kietzmann D. The pharmacokinetics of piritramide after prolonged administration to intensive care patients. European journal of anaesthesiology 21(9):673–678 (2004). [doi:10.1017/s0265021504009019](https://doi.org/10.1017/s0265021504009019)

**This record:** Pharmacolibrary v26.09, model `Piritramide_Bouillon2004_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_piritramide/Piritramide_Bouillon2004_reference>

```bibtex
@misc{pharmacolibrary_PiritramideBouillon2004reference,
  title  = {{Pharmacolibrary model Piritramide_Bouillon2004_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_piritramide/Piritramide_Bouillon2004_reference},
  note   = {Parameters from doi:10.1017/s0265021504009019},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 45 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 45 mg parenteral (N02AC03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_piritramide/Piritramide_Bouillon2004_reference/Piritramide_Bouillon2004_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_piritramide/Piritramide_Bouillon2004_reference/Piritramide_Bouillon2004_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Piritramide_Bouillon2004_reference_params.json` · controls `Piritramide_Bouillon2004_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpiritramide%5D%20Piritramide_Bouillon2004_reference&body=Drug%3A%20piritramide%0ARecord%3A%20Piritramide_Bouillon2004_reference%0APaper%3A%20Bouillon_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_piritramide/Piritramide_Bouillon2004_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:39 UTC</sub>
