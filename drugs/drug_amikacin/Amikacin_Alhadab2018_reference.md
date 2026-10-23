<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;amikacin&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/&quot;},{&quot;label&quot;:&quot;Alhadab_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amikacin_Alhadab2018_reference&quot;,&quot;label&quot;:&quot;Alhadab_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/Amikacin_Alhadab2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Amikacin_Alqahtani2018_base&quot;,&quot;label&quot;:&quot;Alqahtani_2018_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/Amikacin_Alqahtani2018_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amikacin_Alqahtani2018_final&quot;,&quot;label&quot;:&quot;Alqahtani_2018_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/Amikacin_Alqahtani2018_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amikacin_Illamola2018_reference&quot;,&quot;label&quot;:&quot;Illamola_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/Amikacin_Illamola2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amikacin_MedellnGaribay2022_reference&quot;,&quot;label&quot;:&quot;Medell\u00edn-Garibay_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/Amikacin_MedellnGaribay2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amikacin — `Amikacin_Alhadab2018_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:35 UTC) predates the latest extraction (2026-10-07 21:09 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="amikacin" model-id="Amikacin_Alhadab2018_reference" status="extracted" stale="true" population="pediatric cancer patients" measured-compound="amikacin" parameterization="mechanistic" topology="2C"></div>

## Citation
Alhadab AA, Ahmed MA, Brundage RC. Amikacin Pharmacokinetic-Pharmacodynamic Analysis in Pediatric Cancer Patients. Antimicrobial agents and chemotherapy 62(4) (2018).
  ·  DOI: [10.1128/AAC.01781-17](https://doi.org/10.1128/AAC.01781-17)

## Population and dosing

**Population:** pediatric cancer patients · condition cancer with suspected or documented Gram-negative bacterial infection · age group child · n = 34.

**Dosing:** 1050 mg, iv, multiple, every 24 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_amikacin/Amikacin_Alhadab2018_reference/Amikacin_Alhadab2018_reference.svg" alt="Amikacin_Alhadab2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL a (liter/h/70 kg) | CL | 11.1 | liter/h/70 kg | 10 |
| V 1 a (liter/70 kg) | V1 | 30.2 | liter/70 kg | 21 |
| Q a (liter/h/70 kg) | Q | 4.26 | liter/h/70 kg | 42 |
| V 2 a (liter/70 kg) | V2 | 14.9 | liter/70 kg | 13 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.923), gpt-oss:120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — amikacin: CL 120 ml/min per 1.73 m 2 of body surface area, Q 1.66 liters/h, V 1.19 L, V2 4.26 liters.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[v 1 a].parameter_id`: this record has Q63, the second reading Q352. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL a (liter/h/70 kg) | `Q22` · CL | 11.1 | liter/h/70 kg | 3.083e-06 | m3/s | l/(h·70kg) | 10 | llm_confirmed (0.6) | tab_1:row1:col2 |
| V 1 a (liter/70 kg) | `Q63` · V1 | 30.2 | liter/70 kg | 0.0302 | m3 | l/70kg | 21 | llm (0.6) | tab_1:row2:col2 |
| Q a (liter/h/70 kg) | `Q30` · Q | 4.26 | liter/h/70 kg | 1.183e-06 | m3/s | l/(h·70kg) | 42 | llm (0.6) | tab_1:row3:col2 |
| V 2 a (liter/70 kg) | `Q64` · V2 | 14.9 | liter/70 kg | 0.0149 | m3 | l/70kg | 13 | llm (0.6) | tab_1:row4:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'RE (% CV)' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amikacin

**Extraction notes:**
- unparsed cell tab_1:row1:col3 = '11.1 (9.28-13.2)'
- unparsed cell tab_1:row2:col3 = '30.70 (16.3-43.0)'
- unparsed cell tab_1:row3:col3 = '4.48 (2.52-8.81)'
- unparsed cell tab_1:row4:col3 = '15.41 (12.37-19.80)'
- unparsed cell tab_1:row5:col3 = '33.6 (25.1-46.6)'
- unparsed cell tab_1:row6:col1 = 'Between subject variability in V 1'
- unparsed cell tab_1:row6:col3 = '67.7 (35.6-106)'
- unparsed cell tab_1:row7:col3 = '2.39 (1.37-4.83)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.923 (12/13 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[central volume of distribution]` |  | 8.63 | only_one_extracted |
| `gpt-oss:120b` | `parameters[intercompartmental clearance]` |  | 1.66 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | 1.66 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 1 a].parameter_id` | Q63 | Q352 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_1:row3:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_1:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_1:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.1 | ['tab_1:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.1 L/h | ['tab_1:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 30.2 L | ['tab_1:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 14.9 L | ['tab_1:row4:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amikacin/Amikacin_Alhadab2018_reference/Amikacin_Alhadab2018_reference_modelica.zip" download>Amikacin_Alhadab2018_reference_modelica.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amikacin/Amikacin_Alhadab2018_reference/Amikacin_Alhadab2018_reference_fmi.zip" download>Amikacin_Alhadab2018_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amikacin/Amikacin_Alhadab2018_reference/Amikacin_Alhadab2018_reference_matlab.zip" download>Amikacin_Alhadab2018_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amikacin/Amikacin_Alhadab2018_reference/Amikacin_Alhadab2018_reference_matlab_simbio.zip" download>Amikacin_Alhadab2018_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amikacin/Amikacin_Alhadab2018_reference/Amikacin_Alhadab2018_reference_sbml.zip" download>Amikacin_Alhadab2018_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amikacin/Amikacin_Alhadab2018_reference/Amikacin_Alhadab2018_reference_cellml.zip" download>Amikacin_Alhadab2018_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5856 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00105 | kg |
| input | model | `Cl` | 3.083e-06 | m3/s |
| input | model | `VdPerKg` | 0.0004314 | m3/kg |
| input | model | `k12` | 3.918e-05 | 1/s |
| input | model | `k21` | 7.942e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Alhadab AA, Ahmed MA, Brundage RC. Amikacin Pharmacokinetic-Pharmacodynamic Analysis in Pediatric Cancer Patients. Antimicrobial agents and chemotherapy 62(4) (2018). [doi:10.1128/AAC.01781-17](https://doi.org/10.1128/AAC.01781-17)

**This record:** Pharmacolibrary v26.09, model `Amikacin_Alhadab2018_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_amikacin/Amikacin_Alhadab2018_reference>

```bibtex
@misc{pharmacolibrary_AmikacinAlhadab2018reference,
  title  = {{Pharmacolibrary model Amikacin_Alhadab2018_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_amikacin/Amikacin_Alhadab2018_reference},
  note   = {Parameters from doi:10.1128/AAC.01781-17},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 1050 mg infusion over 10 min, single dose. Dose in the paper: 1050 mg.

<dbs-fmusim paramsurl="drugs/drug_amikacin/Amikacin_Alhadab2018_reference/Amikacin_Alhadab2018_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_amikacin/Amikacin_Alhadab2018_reference/Amikacin_Alhadab2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Amikacin_Alhadab2018_reference_params.json` · controls `Amikacin_Alhadab2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamikacin%5D%20Amikacin_Alhadab2018_reference&body=Drug%3A%20amikacin%0ARecord%3A%20Amikacin_Alhadab2018_reference%0APaper%3A%20Alhadab_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amikacin/Amikacin_Alhadab2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:09 UTC</sub>
