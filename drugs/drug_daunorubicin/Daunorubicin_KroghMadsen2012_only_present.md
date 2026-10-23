<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;daunorubicin&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/&quot;},{&quot;label&quot;:&quot;Krogh-Madsen_2012 \u00b7 only_present&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_daunorubicin&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_daunorubicin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_daunorubicin.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_only_present&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_only_present&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_only_present_study&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_only_present_study&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present_study.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daunorubicin — `Daunorubicin_KroghMadsen2012_only_present`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Daunorubicin’s k12 has no reported value; library defaults were used, so the record was held back.

<div class="pk-model-meta" hidden drug="daunorubicin" model-id="Daunorubicin_KroghMadsen2012_only_present" status="needs_review" stale="false" population="patients with acute myeloid leukemia" measured-compound="cytarabine, etoposide, and daunorubicin" parameterization="mechanistic" topology="2C"></div>

## Citation
Krogh-Madsen M, Bender B, Jensen MK, Nielsen OJ, Friberg LE, Honoré PH. Population pharmacokinetics of cytarabine, etoposide, and daunorubicin in the treatment for acute myeloid leukemia. Cancer chemotherapy and pharmacology 69(5):1155–1163 (2012).
  ·  DOI: [10.1007/s00280-011-1800-z](https://doi.org/10.1007/s00280-011-1800-z)

## Population and dosing

**Population:** patients with acute myeloid leukemia · condition acute myeloid leukemia · n = 23.

**Dosing:** 50, 100 mg/m2, iv, multiple.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present/Daunorubicin_KroghMadsen2012_only_present.svg" alt="Daunorubicin_KroghMadsen2012_only_present diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 28 | L/h |
| Vc (L) | V1 | 22 | L |
| Q (L/h) | Q | 135 | L/h |
| Vp (L) | V2 | 223 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Daunorubicin’s k12 has no reported value; library defaults were used, so the record was held back.**

The record reports total clearance of 28 L/h, central volume of 22 L, intercompartmental clearance of 135 L/h, and peripheral volume of 223 L, but no k12 estimate. K12 uses library defaults, not estimates from this paper. These values affect the simulated profile but are not supported by this paper. Extracted — daunorubicin: CL 28 L/h, V1 22 L, Q 135 L/h, V2 223 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has cytarabine, etoposide, and daunorubicin, the second reading daunorubicin; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 28 | L/h | 7.778e-06 | m3/s | l/h | exact (1) | tab_1:row4:col2, tab_1:row4:col4, tab_1:row4:col6, Krogh-Madsen_2012_table_3:row1:col2 |
| Vc (L) | `Q63` · V1 | 22 | L | 0.022 | m3 | l | exact (1) | tab_1:row6:col2, tab_1:row6:col4, tab_1:row6:col6, Krogh-Madsen_2012_table_3:row2:col2 |
| Q (L/h) | `Q30` · Q | 135 | L/h | 3.75e-05 | m3/s | l/h | exact (1) | Krogh-Madsen_2012_table_3:row3:col2 |
| Vp (L) | `Q64` · V2 | 223 | L | 0.223 | m3 | l | exact (1) | Krogh-Madsen_2012_table_3:row4:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12']

**Interpretation flags:**
- column 'only present' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'Res. error (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cytarabine, etoposide, and daunorubicin
- population split: 'only present' subgroup of Krogh-Madsen_2012 (paper reports 5 populations: daunorubicin, only present, only present study ?, prior study ?, prior study a)

**Extraction notes:**
- unparsed cell tab_1:row4:col1 = '0.99 (15) a'
- companion parameter table 3 transcribed (33 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl]` |  | 129 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q]` | 135 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q]` |  | 152 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vc]` |  | 453 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vp]` | 223 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vp]` |  | 911 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | cytarabine, etoposide, and daunorubicin | daunorubicin | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | cytarabine, etoposide, and daunorubicin | daunorubicin | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row4:col2', 'tab_1:row4:col4', 'tab_1:row4:col6', 'Krogh-Madsen_2012_table_3:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Krogh-Madsen_2012_table_3:row3:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_1:row6:col2', 'tab_1:row6:col4', 'tab_1:row6:col6', 'Krogh-Madsen_2012_table_3:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Krogh-Madsen_2012_table_3:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28 | ['tab_1:row4:col2', 'tab_1:row4:col4', 'tab_1:row4:col6', 'Krogh-Madsen_2012_table_3:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28 L/h | ['tab_1:row4:col2', 'tab_1:row4:col4', 'tab_1:row4:col6', 'Krogh-Madsen_2012_table_3:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 22 L | ['tab_1:row6:col2', 'tab_1:row6:col4', 'tab_1:row6:col6', 'Krogh-Madsen_2012_table_3:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 223 L | ['Krogh-Madsen_2012_table_3:row4:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=cytarabine, etoposide, and daunorubicin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present/Daunorubicin_KroghMadsen2012_only_present_modelica.zip" download>Daunorubicin_KroghMadsen2012_only_present_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present/Daunorubicin_KroghMadsen2012_only_present_fmi.zip" download>Daunorubicin_KroghMadsen2012_only_present_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present/Daunorubicin_KroghMadsen2012_only_present_matlab.zip" download>Daunorubicin_KroghMadsen2012_only_present_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present/Daunorubicin_KroghMadsen2012_only_present_matlab_simbio.zip" download>Daunorubicin_KroghMadsen2012_only_present_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present/Daunorubicin_KroghMadsen2012_only_present_sbml.zip" download>Daunorubicin_KroghMadsen2012_only_present_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present/Daunorubicin_KroghMadsen2012_only_present_cellml.zip" download>Daunorubicin_KroghMadsen2012_only_present_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5275 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 7.778e-06 | m3/s |
| input | model | `VdPerKg` | 0.0003143 | m3/kg |
| input | model | `k21` | 0.0001682 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Krogh-Madsen M, Bender B, Jensen MK, Nielsen OJ, Friberg LE, Honoré PH. Population pharmacokinetics of cytarabine, etoposide, and daunorubicin in the treatment for acute myeloid leukemia. Cancer chemotherapy and pharmacology 69(5):1155–1163 (2012). [doi:10.1007/s00280-011-1800-z](https://doi.org/10.1007/s00280-011-1800-z)

**This record:** Pharmacolibrary v26.09, model `Daunorubicin_KroghMadsen2012_only_present`. <https://pharmacolibrary.github.io/#/drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present>

```bibtex
@misc{pharmacolibrary_DaunorubicinKroghMadsen2012onlypresent,
  title  = {{Pharmacolibrary model Daunorubicin_KroghMadsen2012_only_present}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present},
  note   = {Parameters from doi:10.1007/s00280-011-1800-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present/Daunorubicin_KroghMadsen2012_only_present_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present/Daunorubicin_KroghMadsen2012_only_present_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Daunorubicin_KroghMadsen2012_only_present_params.json` · controls `Daunorubicin_KroghMadsen2012_only_present_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaunorubicin%5D%20Daunorubicin_KroghMadsen2012_only_present&body=Drug%3A%20daunorubicin%0ARecord%3A%20Daunorubicin_KroghMadsen2012_only_present%0APaper%3A%20Krogh-Madsen_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 16:53 UTC</sub>
