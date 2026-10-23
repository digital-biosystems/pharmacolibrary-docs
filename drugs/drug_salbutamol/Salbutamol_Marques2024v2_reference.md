<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salbutamol&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/&quot;},{&quot;label&quot;:&quot;Marques_2024_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salbutamol_Bisaso2026_reference&quot;,&quot;label&quot;:&quot;Bisaso_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Bisaso2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024_geometric_mean&quot;,&quot;label&quot;:&quot;Marques_2024_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024v2_reference&quot;,&quot;label&quot;:&quot;Marques_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Salbutamol_Walsh2023_reference&quot;,&quot;label&quot;:&quot;Walsh_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Walsh2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salbutamol — `Salbutamol_Marques2024v2_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Salbutamol bioavailability, lag time, and reverse intercompartmental clearance lacked reported values, so placeholders were used instead of study estimates.

<div class="pk-model-meta" hidden drug="salbutamol" model-id="Salbutamol_Marques2024v2_reference" status="needs_review" stale="false" population="adults with asthma" measured-compound="salbutamol" parameterization="mechanistic" topology="2C"></div>

## Citation
Marques L, Vale N. Toward Personalized Salbutamol Therapy: Validating Virtual Patient-Derived Population Pharmacokinetic Model with Real-World Data. Pharmaceutics 16(7) (2024).
  ·  DOI: [10.3390/pharmaceutics16070881](https://doi.org/10.3390/pharmaceutics16070881)

## Population and dosing

**Population:** adults with asthma · condition asthma · age group adult.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference/Salbutamol_Marques2024v2_reference.svg" alt="Salbutamol_Marques2024v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| ka (h−1) | kabs | 13.55 | h−1 | 18.0 |
| Cl (L/h) | CL | 34.93 | L/h | 16.6 |
| Q (L/h) | Q | 10.59 | L/h | 1.96 |
| V1 (L) | V1 | 162.93 | L | 22.6 |
| V2 (L) | V2 | 0 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Salbutamol bioavailability, lag time, and reverse intercompartmental clearance lacked reported values, so placeholders were used instead of study estimates.**

The record provides values for absorption rate, clearance, and central volume, but bioavailability (F), lag time, and the reverse intercompartmental clearance (k21) were not extracted. Consequently, placeholder values were applied to these parameters rather than using specific estimates from the study. The model also lists a peripheral volume of 0 L despite having a defined intercompartmental clearance. Extracted — salbutamol: kabs 13.6 h−1, CL 34.9 L/h, Q 10.6 L/h, V1 163 L, V2 0 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has salbutamol, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| ka (h−1) | `Q49` · kabs | 13.55 | h−1 | 0.003764 | 1/s | 1/h | 18.0 | exact (1) | pharmaceutics-16-00881-t003:row2:col1, Marques_2024_2_table_4:row1:col1 |
| Cl (L/h) | `Q22` · CL | 34.93 | L/h | 9.703e-06 | m3/s | l/h | 16.6 | exact (1) | pharmaceutics-16-00881-t003:row3:col1, Marques_2024_2_table_4:row2:col1 |
| Q (L/h) | `Q30` · Q | 10.59 | L/h | 2.942e-06 | m3/s | l/h | 1.96 | exact (1) | pharmaceutics-16-00881-t003:row5:col1 |
| V1 (L) | `Q63` · V1 | 162.93 | L | 0.1629 | m3 | l | 22.6 | exact (1) | Marques_2024_2_table_4:row3:col1 |
| V2 (L) | `Q64` · V2 | 0 | L | 0 | m3 | l |  | exact (1) | Marques_2024_2_table_4:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag', 'k21']

**Interpretation flags:**
- table section covariance: 'ka and Q' routed out of structural estimates ('Correlation')
- table section covariance: 'V1 and Cl' routed out of structural estimates ('Correlation')
- dropped duplicate Q49 ('Parameters / ka (h−1)', value '0.0130') — already have one for this compound
- dropped duplicate Q22 ('Parameters / Cl (mL/h)', value '8.77') — already have one for this compound
- dropped duplicate Q64 ('Parameters / V2 (mL)', value '0.0460') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Cl (L/h)); Q30 (Q (L/h)); Q63 (V1 (L)); Q64 (V2 (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salbutamol
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table pharmaceutics-16-00881-t003: unbound_uncertainty
- table pharmaceutics-16-00881-t003: unparsed_numeric_cell
- table Marques_2024_2_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (18 record(s), model stage 'final')
- table Marques_2024_2_table_5: unparsed_numeric_cell
- transposed table Marques_2024_2_table_5: logical view retains original source coordinates
- companion parameter table 5 transcribed (24 record(s))
- LLM selected parameter table(s) 3, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (12/15 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[75.01-105.00]` |  | 0.00230 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | salbutamol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | salbutamol | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-16-00881-t003:row3:col1', 'Marques_2024_2_table_4:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-16-00881-t003:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-16-00881-t003:row2:col1', 'Marques_2024_2_table_4:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Marques_2024_2_table_4:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Marques_2024_2_table_4:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 34.93 | ['pharmaceutics-16-00881-t003:row3:col1', 'Marques_2024_2_table_4:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 34.9 L/h | ['pharmaceutics-16-00881-t003:row3:col1', 'Marques_2024_2_table_4:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 163 L | ['Marques_2024_2_table_4:row3:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=salbutamol) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference/Salbutamol_Marques2024v2_reference_modelica.zip" download>Salbutamol_Marques2024v2_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference/Salbutamol_Marques2024v2_reference_fmi.zip" download>Salbutamol_Marques2024v2_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference/Salbutamol_Marques2024v2_reference_matlab.zip" download>Salbutamol_Marques2024v2_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference/Salbutamol_Marques2024v2_reference_matlab_simbio.zip" download>Salbutamol_Marques2024v2_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference/Salbutamol_Marques2024v2_reference_sbml.zip" download>Salbutamol_Marques2024v2_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference/Salbutamol_Marques2024v2_reference_cellml.zip" download>Salbutamol_Marques2024v2_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2393 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.2e-05 | kg |
| input | model | `Cl` | 9.703e-06 | m3/s |
| input | model | `VdPerKg` | 0.002328 | m3/kg |
| input | model | `k12` | 1.805e-05 | 1/s |
| input | model | `ka` | 0.003764 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Marques L, Vale N. Toward Personalized Salbutamol Therapy: Validating Virtual Patient-Derived Population Pharmacokinetic Model with Real-World Data. Pharmaceutics 16(7) (2024). [doi:10.3390/pharmaceutics16070881](https://doi.org/10.3390/pharmaceutics16070881)

**This record:** Pharmacolibrary v26.09, model `Salbutamol_Marques2024v2_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference>

```bibtex
@misc{pharmacolibrary_SalbutamolMarques2024v2reference,
  title  = {{Pharmacolibrary model Salbutamol_Marques2024v2_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics16070881},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 12 mg, single dose, first-order absorption (ka 13.6 /h, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 12 mg oral (R03CC02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference/Salbutamol_Marques2024v2_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference/Salbutamol_Marques2024v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Salbutamol_Marques2024v2_reference_params.json` · controls `Salbutamol_Marques2024v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsalbutamol%5D%20Salbutamol_Marques2024v2_reference&body=Drug%3A%20salbutamol%0ARecord%3A%20Salbutamol_Marques2024v2_reference%0APaper%3A%20Marques_2024_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 14:34 UTC</sub>
