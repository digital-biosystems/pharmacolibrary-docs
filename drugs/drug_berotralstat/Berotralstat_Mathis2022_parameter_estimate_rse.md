<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;berotralstat&quot;,&quot;href&quot;:&quot;drugs/drug_berotralstat/&quot;},{&quot;label&quot;:&quot;Mathis_2022 \u00b7 parameter_estimate_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Berotralstat_Mathis2022_parameter_estimate_rse&quot;,&quot;label&quot;:&quot;Mathis_2022_parameter_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# berotralstat — `Berotralstat_Mathis2022_parameter_estimate_rse`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Needs review), but the paper was screened again on 2026-10-06 00:52 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="berotralstat" model-id="Berotralstat_Mathis2022_parameter_estimate_rse" status="extracted" stale="true" population="healthy subjects and patients with hereditary angioedema" measured-compound="berotralstat" parameterization="mechanistic" topology="1C"></div>

## Citation
Mathis A, Sale M, Cornpropst M, Sheridan WP, Ma SC. Population pharmacokinetic modeling and simulations of berotralstat for prophylactic treatment of attacks of hereditary angioedema. Clinical and translational science 15(4):1027–1035 (2022).
  ·  DOI: [10.1111/cts.13233](https://doi.org/10.1111/cts.13233)

## Population and dosing

**Population:** healthy subjects and patients with hereditary angioedema · condition hereditary angioedema · age group mixed.

**Dosing:** 10, 110, 450, 900 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse.svg" alt="Berotralstat_Mathis2022_parameter_estimate_rse diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Clearance (L/h) | CL | 47.3 | L/h | 2.4 |
| Volume (L) | V | 1650 | L | 2.49 |
| Ka (1/h) | kabs | 1.12 | 1/h | 0.0891 |
| K23 (1/h) | kcomp | 0.0812 | 1/h | 2.32 |
| Absorption lag time (h) | tlag | 0.468 | h | 2.15 |
| Bioavailability as a function of dose | Fab | 0.497 |  | 5.51 |
| Clearance as a function of weight | allometric_exponent | 0.480 |  | 14.3 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.944). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The berotralstat record was held back because the intercompartmental micro-rate kcomp (0.0812 1/h) was neither extracted nor given a value, and the absorption rate constant ka was invented as a placeholder rather than taken from the source.**

Of the five expected parameters, only four were covered; kcomp, the micro-rate governing distribution between the central and peripheral compartments in this two-compartment structure, had no value from the source and no substitute. The model builder also filled in ka, which the paper did not report, an invented absorption deviation judged not acceptable. Additionally, a second reader recorded no value for the weight-allometric exponent on clearance, disagreeing with the record's 0.480. Extracted — berotralstat: CL 47.3 L/h, V 1.65e+03 L, kabs 1.12, kcomp 0.0812, tlag 0.468 h, Fab 0.497, allometric_exponent 0.48.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of clearance as a function of weight: this record has 0.480, the second reading none. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Clearance (L/h) | `Q22` · CL | 47.3 | L/h | 1.314e-05 | m3/s | l/h | 2.4 | exact (1) | cts13233-tbl-0001:row1:col1 |
| Volume (L) | `Q61` · V | 1650 | L | 1.65 | m3 | l | 2.49 | exact (1) | cts13233-tbl-0001:row2:col1 |
| Ka (1/h) | `Q49` · kabs | 1.12 | 1/h | 0.0003111 | 1/s | 1/h | 0.0891 | exact (1) | cts13233-tbl-0001:row5:col1 |
| K23 (1/h) | `Q48` · kcomp | 0.0812 | 1/h | 2.256e-05 | 1/s | 1/h | 2.32 | exact (1) | cts13233-tbl-0001:row6:col1 |
| Absorption lag time (h) | `Q83` · tlag | 0.468 | h | 1685 | s | h | 2.15 | exact (1) | cts13233-tbl-0001:row8:col1 |
| Bioavailability as a function of dose | `Q40` · Fab | 0.497 |  |  |  |  | 5.51 | llm_confirmed (0.6) | cts13233-tbl-0001:row11:col1 |
| Clearance as a function of weight | `Q319` · allometric_exponent | 0.480 |  |  |  |  | 14.3 | llm_corrected (0.6) | cts13233-tbl-0001:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q48 ('K32 (1/h)', value '0.0309') — already have one for this compound
- dropped duplicate Q48 ('K24 (1/h)', value '0.00281') — already have one for this compound
- dropped duplicate Q48 ('K42 (1/h)', value '0.00136') — already have one for this compound
- dropped duplicate Q61 ('Volume as a function of weight', value '1.00') — already have one for this compound
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for Ka in the text or table footnotes. However, Ka is an absorption rate co')
- implicit units: 'K23 (1/h)' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for K23 in the text or table footnotes. K23 is a micro-rate constant (first')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=berotralstat
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'parameter estimate (rse%)' subgroup of Mathis_2022 (paper reports 6 populations: adolescents (12–18 years), low weight adults (60–80 kg), normal weight adults (80–100 kg), overweight adults (100–120 kg), parameter estimate (rse%), underweight adults (40–60 kg))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table Mathis_2022_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 2 transcribed (25 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.944 (17/18 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clearance as a function of weight]` | 0.480 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts13233-tbl-0001:row1:col1'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['cts13233-tbl-0001:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts13233-tbl-0001:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['cts13233-tbl-0001:row2:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['cts13233-tbl-0001:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 47.3 | ['cts13233-tbl-0001:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 47.3 L/h | ['cts13233-tbl-0001:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.65e+03 L | ['cts13233-tbl-0001:row2:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=berotralstat) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['kcomp'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_modelica.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_fmi.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_matlab.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_matlab_simbio.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_sbml.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_cellml.zip" download>Berotralstat_Mathis2022_parameter_estimate_rse_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5626 | kg/mol |
| input | dosing | `F` | 0.497 | 1 |
| input | dosing | `Tlag` | 1685 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.314e-05 | m3/s |
| input | model | `VdPerKg` | 0.02357 | m3/kg |
| input | model | `ka` | 0.0003111 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Mathis A, Sale M, Cornpropst M, Sheridan WP, Ma SC. Population pharmacokinetic modeling and simulations of berotralstat for prophylactic treatment of attacks of hereditary angioedema. Clinical and translational science 15(4):1027–1035 (2022). [doi:10.1111/cts.13233](https://doi.org/10.1111/cts.13233)

**This record:** Pharmacolibrary v26.09, model `Berotralstat_Mathis2022_parameter_estimate_rse`. <https://pharmacolibrary.github.io/#/drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse>

```bibtex
@misc{pharmacolibrary_BerotralstatMathis2022parameterestimaterse,
  title  = {{Pharmacolibrary model Berotralstat_Mathis2022_parameter_estimate_rse}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse},
  note   = {Parameters from doi:10.1111/cts.13233},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 1.12 /h, lag 28.1 min, F 0.497). Doses in the paper: 10, 110, 450, 900 mg.

<dbs-fmusim paramsurl="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse/Berotralstat_Mathis2022_parameter_estimate_rse_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Berotralstat_Mathis2022_parameter_estimate_rse_params.json` · controls `Berotralstat_Mathis2022_parameter_estimate_rse_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bberotralstat%5D%20Berotralstat_Mathis2022_parameter_estimate_rse&body=Drug%3A%20berotralstat%0ARecord%3A%20Berotralstat_Mathis2022_parameter_estimate_rse%0APaper%3A%20Mathis_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_berotralstat/Berotralstat_Mathis2022_parameter_estimate_rse%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 00:52 UTC</sub>
