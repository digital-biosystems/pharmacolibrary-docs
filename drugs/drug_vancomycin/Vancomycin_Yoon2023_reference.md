<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;vancomycin&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/&quot;},{&quot;label&quot;:&quot;Yoon_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vancomycin_Goyal2022_final_pk_model&quot;,&quot;label&quot;:&quot;Goyal_2022_final_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Goyal2022_final_pk_model.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vancomycin_Goyal2022_population_typical_value&quot;,&quot;label&quot;:&quot;Goyal_2022_population_typical_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Goyal2022_population_typical_value.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vancomycin_Yoon2023_reference&quot;,&quot;label&quot;:&quot;Yoon_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Yoon2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Vera_Yunca_2025_cfu&quot;,&quot;label&quot;:&quot;Vera-Yunca_2025 \u00b7 cfu&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/pd_Vera_Yunca_2025_cfu.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vancomycin — `Vancomycin_Yoon2023_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:42 UTC (Needs review), but the paper was screened again on 2026-10-04 18:41 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="vancomycin" model-id="Vancomycin_Yoon2023_reference" status="extracted" stale="true" population="patients with infections (including children)" measured-compound="vancomycin" parameterization="mechanistic" topology="2C"></div>

## Citation
Yoon S, Guk J, Lee SG, Chae D, Kim JH, Park K. Model-informed precision dosing in vancomycin treatment. Frontiers in pharmacology 14:1252757 (2023).
  ·  DOI: [10.3389/fphar.2023.1252757](https://doi.org/10.3389/fphar.2023.1252757)

## Population and dosing

**Population:** patients with infections (including children) · age group mixed.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference.svg" alt="Vancomycin_Yoon2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| θ CL (L/h) | CL | 4.32 | L/h | 4.33 | 29.1 (4.18% RSE) |
| θ V (L) | V | 38.6 | L | 2.69 |  |
| θ Q (L/h) | Q | 3.93 | L/h | 9.31 |  |
| θ V2 (L) | V2 | 66.8 | L | 9.78 | 101 (8.04% RSE) |
| λ | kel | 0.655 | 1/h | 3.66 |  |
| θREN | θREN | -0.237 |  |  |  |
| θFEM | θFEM | -0.199 |  |  |  |
| θDM | θDM | -0.151 |  |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.944). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kel has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kel), so that value has no SI equivalent. Extracted — vancomycin: CL 4.32 L/h, V 38.6 L, Q 3.93 L/h, V2 66.8 L, kel 0.655 Creatinine clearance related parameter.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of kcr (if age ≥30): this record has none, the second reading -0.0127. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ CL (L/h) | `Q22` · CL | 4.32 | L/h | 1.2e-06 | m3/s | l/h | 4.33 | llm_confirmed (0.6) | T3:row2:col1 | 29.1 (4.18% RSE) |
| θ V (L) | `Q61` · V | 38.6 | L | 0.0386 | m3 | l | 2.69 | llm (0.6) | T3:row3:col1 |  |
| θ Q (L/h) | `Q30` · Q | 3.93 | L/h | 1.092e-06 | m3/s | l/h | 9.31 | llm (0.6) | T3:row4:col1 |  |
| θ V2 (L) | `Q64` · V2 | 66.8 | L | 0.0668 | m3 | l | 9.78 | llm_confirmed (0.6) | T3:row5:col1 | 101 (8.04% RSE) |
| λ | `Q47` · kel | 0.655 | 1/h | 0.0001819 | 1/s | 1/h | 3.66 | exact (1) | T3:row9:col1 |  |
| θREN | `Q900` · θREN | -0.237 |  |  |  |  |  |  |  |  |
| θFEM | `Q900` · θFEM | -0.199 |  |  |  |  |  |  |  |  |
| θDM | `Q900` · θDM | -0.151 |  |  |  |  |  |  |  |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 CL (CV(%))' routed out of structural estimates ('Between subject variability')
- table section iiv: 'ω2 V2 (CV(%))' routed out of structural estimates ('Between subject variability')
- table section residual_error: 'σ2 proportional trough (CV %))' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ2 additive trough (mg/L)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ2 proportional peak (CV %))' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ2 additive peak (mg/L)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'kCr (if age ≥30) (yr-1)' — extend the ontology if this is a real PK parameter (source ['T3:row7:col1'])
- dropped unlinked row (NIL): 'kCr (if age &lt;30) (yr-1)' — extend the ontology if this is a real PK parameter (source ['T3:row8:col1'])
- unit_dimension_unknown: 'Creatinine clearance related parameter' (kel)
- dropped unlinked row (NIL): 'PMA50' — extend the ontology if this is a real PK parameter (source ['T3:row11:col1'])
- dropped unlinked row (NIL): 'γ' — extend the ontology if this is a real PK parameter (source ['T3:row12:col1'])
- dropped unlinked row (NIL): 'ktox (day-1)' — extend the ontology if this is a real PK parameter (source ['T3:row14:col1'])
- dropped unlinked row (NIL): 'kV' — extend the ontology if this is a real PK parameter (source ['T3:row16:col1'])
- dropped unlinked row (NIL): 'kBUN' — extend the ontology if this is a real PK parameter (source ['T3:row17:col1'])
- kept covariate coefficient θREN=-0.237 (covariate REN) — not an ontology parameter
- kept covariate coefficient θFEM=-0.199 (covariate FEM) — not an ontology parameter
- kept covariate coefficient θDM=-0.151 (covariate DM) — not an ontology parameter
- implicit units: 'λ' → 1/h (from the popPK convention: 'The parameter is identified as a rate constant (specifically an exponent of renal function in the table caption, or elim')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vancomycin

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.944 (17/18 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[kcr (if age ≥30)]` |  | -0.0127 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T3:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T3:row4:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['T3:row9:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T3:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T3:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.32 | ['T3:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.32 L/h | ['T3:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 38.6 L | ['T3:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 66.8 L | ['T3:row5:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_modelica.zip" download>Vancomycin_Yoon2023_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_fmi.zip" download>Vancomycin_Yoon2023_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_matlab.zip" download>Vancomycin_Yoon2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_matlab_simbio.zip" download>Vancomycin_Yoon2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_sbml.zip" download>Vancomycin_Yoon2023_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_cellml.zip" download>Vancomycin_Yoon2023_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 1.449 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.002 | kg |
| input | model | `Cl` | 1.2e-06 | m3/s |
| input | model | `VdPerKg` | 0.0005514 | m3/kg |
| input | model | `k12` | 2.828e-05 | 1/s |
| input | model | `k21` | 1.634e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yoon S, Guk J, Lee SG, Chae D, Kim JH, Park K. Model-informed precision dosing in vancomycin treatment. Frontiers in pharmacology 14:1252757 (2023). [doi:10.3389/fphar.2023.1252757](https://doi.org/10.3389/fphar.2023.1252757)

**This record:** Pharmacolibrary v26.09, model `Vancomycin_Yoon2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_vancomycin/Vancomycin_Yoon2023_reference>

```bibtex
@misc{pharmacolibrary_VancomycinYoon2023reference,
  title  = {{Pharmacolibrary model Vancomycin_Yoon2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_vancomycin/Vancomycin_Yoon2023_reference},
  note   = {Parameters from doi:10.3389/fphar.2023.1252757},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 2000 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 2000 mg parenteral (J01XA01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_vancomycin/Vancomycin_Yoon2023_reference/Vancomycin_Yoon2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Vancomycin_Yoon2023_reference_params.json` · controls `Vancomycin_Yoon2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvancomycin%5D%20Vancomycin_Yoon2023_reference&body=Drug%3A%20vancomycin%0ARecord%3A%20Vancomycin_Yoon2023_reference%0APaper%3A%20Yoon_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vancomycin/Vancomycin_Yoon2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 18:41 UTC</sub>
