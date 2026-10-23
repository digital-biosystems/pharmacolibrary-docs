<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vincristine&quot;,&quot;href&quot;:&quot;drugs/drug_vincristine/&quot;},{&quot;label&quot;:&quot;Centanni_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vincristine_Centanni2024_reference&quot;,&quot;label&quot;:&quot;Centanni_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vincristine/Vincristine_Centanni2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vincristine — `Vincristine_Centanni2024_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:42 UTC) predates the latest extraction (2026-10-06 14:56 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="vincristine" model-id="Vincristine_Centanni2024_reference" status="extracted" stale="true" population="pediatric oncology patients" measured-compound="vincristine" parameterization="mechanistic" topology="2C"></div>

## Citation
Centanni M, van de Velde ME, Uittenboogaard A, Kaspers GJL, Karlsson MO, Friberg LE. Model-Informed Precision Dosing to Reduce Vincristine-Induced Peripheral Neuropathy in Pediatric Patients: A Pharmacokinetic and Pharmacodynamic Modeling and Simulation Analysis. Clinical pharmacokinetics 63(2):197–209 (2024).
  ·  DOI: [10.1007/s40262-023-01336-1](https://doi.org/10.1007/s40262-023-01336-1)

## Population and dosing

**Population:** pediatric oncology patients · condition cancer · age group mixed · n = 35.

**Dosing:** 1.5, 2 mg/m2, iv, multiple.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_vincristine/Vincristine_Centanni2024_reference/Vincristine_Centanni2024_reference.svg" alt="Vincristine_Centanni2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (L/h)a | CL | 45.2 | L/h | 21 |  |
| Vc (L)a | V1 | 23.3 | L | 16 | 78.3 (21% RSE) |
| Q (L/h)a | Q | 114 | L/h | 14 |  |
| Vp (L)a | V2 | 576 | L | 20 |  |
| LAGT (h) | tlag | 0.058 | h | 18 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.933). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The vincristine pediatric model was quarantined because clearance, volume of distribution and the intercompartmental rate constants had no extracted values and library placeholders were substituted, and the absorption lag time (0.058 h) was left uncovered.**

Although the record lists CL 45.2 L/h, V1 23.3 L, Q 114 L/h and V2 576 L for vincristine, the model builder substituted placeholder values for clearance, volume of distribution, and the central-to-peripheral and peripheral-to-central rate constants, so the model was held back rather than published with invented numbers. The parameter coverage check expected 5 parameters but covered only 4: the absorption lag time tlag (0.058 h) was neither emitted nor defaulted. No inconclusive checks are reported. Extracted — vincristine: CL 45.2, V1 23.3, Q 114, V2 576, tlag 0.058 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[vp (l)a].parameter_id`: this record has Q64, the second reading Q61. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h)a | `Q22` · CL | 45.2 | L/h | 1.256e-05 | m3/s | L/h | 21 | llm_confirmed (0.6) | Tab2:row1:col2, Tab2:row1:col3 |  |
| Vc (L)a | `Q63` · V1 | 23.3 | L | 0.0233 | m3 | L | 16 | llm_confirmed (0.6) | Tab2:row2:col2, Tab2:row2:col3 | 78.3 (21% RSE) |
| Q (L/h)a | `Q30` · Q | 114 | L/h | 3.167e-05 | m3/s | L/h | 14 | llm (0.6) | Tab2:row3:col2, Tab2:row3:col3 |  |
| Vp (L)a | `Q64` · V2 | 576 | L | 0.576 | m3 | L | 20 | llm_confirmed (0.6) | Tab2:row4:col2, Tab2:row4:col3 |  |
| LAGT (h) | `Q83` · tlag | 0.058 | h | 208.8 | s | h | 18 | llm (0.6) | Tab2:row5:col2, Tab2:row5:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'INFT' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col2', 'Tab2:row6:col3'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '70' (source ['Tab2:footnote']); the table cell was unparseable — needs review
- implicit units: 'CL (L/h)a' → L/h (from the paper text: 'Table 2 labels the parameter “CL (L/h)”.')
- implicit units: 'Vc (L)a' → L (from the paper text: 'Table 2 labels the parameter “Vc (L)”.')
- implicit units: 'Q (L/h)a' → L/h (from the paper text: 'Table 2 labels the parameter “Q (L/h)”.')
- implicit units: 'Vp (L)a' → L (from the paper text: 'Table 2 labels the parameter “Vp (L)”.')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)a); Q63 (Vc (L)a); Q30 (Q (L/h)a); Q64 (Vp (L)a)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vincristine

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.933 (14/15 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[vp (l)a].parameter_id` | Q64 | Q61 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col2', 'Tab2:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col2', 'Tab2:row3:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row2:col2', 'Tab2:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row4:col2', 'Tab2:row4:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row5:col2', 'Tab2:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 45.2 | ['Tab2:row1:col2', 'Tab2:row1:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 45.2 L/h | ['Tab2:row1:col2', 'Tab2:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 23.3 L | ['Tab2:row2:col2', 'Tab2:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 576 L | ['Tab2:row4:col2', 'Tab2:row4:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['tlag'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vincristine/Vincristine_Centanni2024_reference/Vincristine_Centanni2024_reference_modelica.zip" download>Vincristine_Centanni2024_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_vincristine/Vincristine_Centanni2024_reference/Vincristine_Centanni2024_reference_fmi.zip" download>Vincristine_Centanni2024_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vincristine/Vincristine_Centanni2024_reference/Vincristine_Centanni2024_reference_matlab.zip" download>Vincristine_Centanni2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vincristine/Vincristine_Centanni2024_reference/Vincristine_Centanni2024_reference_matlab_simbio.zip" download>Vincristine_Centanni2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vincristine/Vincristine_Centanni2024_reference/Vincristine_Centanni2024_reference_sbml.zip" download>Vincristine_Centanni2024_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vincristine/Vincristine_Centanni2024_reference/Vincristine_Centanni2024_reference_cellml.zip" download>Vincristine_Centanni2024_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.825 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.256e-05 | m3/s |
| input | model | `VdPerKg` | 0.0003329 | m3/kg |
| input | model | `k12` | 0.001359 | 1/s |
| input | model | `k21` | 5.498e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Centanni M, van de Velde ME, Uittenboogaard A, Kaspers GJL, Karlsson MO, Friberg LE. Model-Informed Precision Dosing to Reduce Vincristine-Induced Peripheral Neuropathy in Pediatric Patients: A Pharmacokinetic and Pharmacodynamic Modeling and Simulation Analysis. Clinical pharmacokinetics 63(2):197–209 (2024). [doi:10.1007/s40262-023-01336-1](https://doi.org/10.1007/s40262-023-01336-1)

**This record:** Pharmacolibrary v26.09, model `Vincristine_Centanni2024_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_vincristine/Vincristine_Centanni2024_reference>

```bibtex
@misc{pharmacolibrary_VincristineCentanni2024reference,
  title  = {{Pharmacolibrary model Vincristine_Centanni2024_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_vincristine/Vincristine_Centanni2024_reference},
  note   = {Parameters from doi:10.1007/s40262-023-01336-1},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_vincristine/Vincristine_Centanni2024_reference/Vincristine_Centanni2024_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_vincristine/Vincristine_Centanni2024_reference/Vincristine_Centanni2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Vincristine_Centanni2024_reference_params.json` · controls `Vincristine_Centanni2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvincristine%5D%20Vincristine_Centanni2024_reference&body=Drug%3A%20vincristine%0ARecord%3A%20Vincristine_Centanni2024_reference%0APaper%3A%20Centanni_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vincristine/Vincristine_Centanni2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 14:56 UTC</sub>
