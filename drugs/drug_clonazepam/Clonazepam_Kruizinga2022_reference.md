<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;clonazepam&quot;,&quot;href&quot;:&quot;drugs/drug_clonazepam/&quot;},{&quot;label&quot;:&quot;Kruizinga_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonazepam_Kruizinga2022_reference&quot;,&quot;label&quot;:&quot;Kruizinga_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clonazepam — `Clonazepam_Kruizinga2022_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:37 UTC (Reproduces paper), but the paper was screened again on 2026-10-07 07:36 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="clonazepam" model-id="Clonazepam_Kruizinga2022_reference" status="extracted" stale="true" population="healthy adults" measured-compound="clonazepam" parameterization="mechanistic" topology="2C"></div>

## Citation
Kruizinga MD, Zuiker RGJA, Bergmann KR, Egas AC, Cohen AF, Santen GWE et al. Population pharmacokinetics of clonazepam in saliva and plasma: Steps towards noninvasive pharmacokinetic studies in vulnerable populations. British journal of clinical pharmacology 88(5):2236–2245 (2022).
  ·  DOI: [10.1111/bcp.15152](https://doi.org/10.1111/bcp.15152)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = $number.

**Dosing:** 0.5, 1 mg, oral, single.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference.svg" alt="Clonazepam_Kruizinga2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| θ V D central (L) | V1 | 11.5 | L | 10.4 |
| θ clearance (L h−1) | CL | 0.16 | L h−1 | 5.5 |
| θ V D peripheral (L) | V2 | 12.9 | L | 9.9 |
| θ Q (L h−1) | Q | 11.2 | L h−1 | 18.3 |
| θ K el saliva (h−1) | kel | 0.12 | h−1 | 6.0 |
| θ RatioKM (μg/L) | Km | 0.74 | μg/L | 28.5 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.824). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (Km), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clonazepam, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| θ V D central (L) | `Q63` · V1 | 11.5 | L | 0.0115 | m3 | l | 10.4 | llm (0.6) | bcp15152-tbl-0002:row3:col1, bcp15152-tbl-0002:row3:col2, bcp15152-tbl-0002:row3:col3 |
| θ clearance (L h−1) | `Q22` · CL | 0.16 | L h−1 | 4.444e-08 | m3/s | l/h | 5.5 | llm_confirmed (0.6) | bcp15152-tbl-0002:row4:col1, bcp15152-tbl-0002:row4:col2, bcp15152-tbl-0002:row4:col3 |
| θ V D peripheral (L) | `Q64` · V2 | 12.9 | L | 0.0129 | m3 | l | 9.9 | llm (0.6) | bcp15152-tbl-0002:row5:col1, bcp15152-tbl-0002:row5:col2, bcp15152-tbl-0002:row5:col3 |
| θ Q (L h−1) | `Q30` · Q | 11.2 | L h−1 | 3.111e-06 | m3/s | l/h | 18.3 | llm (0.6) | bcp15152-tbl-0002:row6:col1, bcp15152-tbl-0002:row6:col2, bcp15152-tbl-0002:row6:col3 |
| θ K el saliva (h−1) | `Q47` · kel | 0.12 | h−1 | 3.333e-05 | 1/s | 1/h | 6.0 | llm (0.6) | bcp15152-tbl-0002:row8:col1, bcp15152-tbl-0002:row8:col2, bcp15152-tbl-0002:row8:col3 |
| θ RatioKM (μg/L) | `Q1` · Km | 0.74 | μg/L |  |  | µg/l | 28.5 | llm (0.6) | bcp15152-tbl-0002:row10:col1, bcp15152-tbl-0002:row10:col2, bcp15152-tbl-0002:row10:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped diagnostic row 'Plasma kinetics' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped diagnostic row 'θ Prob. slow group' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped unlinked row (NIL): 'Saliva kinetics' — extend the ontology if this is a real PK parameter (source ['bcp15152-tbl-0002:row7:col2', 'bcp15152-tbl-0002:row7:col3', 'bcp15152-tbl-0002:row7:col4'])
- dropped diagnostic row 'θ RatioMAX' → Q318 (shrinkage) — reported statistic, not a parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clonazepam

**Extraction notes:**
- unparsed cell bcp15152-tbl-0002:row1:col1 = 'θ k a ‐ slow group (h−1)'
- unparsed cell bcp15152-tbl-0002:row7:col1 = 'θ F saliva (% 1000−1)'
- unparsed cell bcp15152-tbl-0002:row11:col1 = 'ω 2 k a ‐ slow group'
- unparsed cell bcp15152-tbl-0002:row11:col2 = '0.16 [2.24%]'
- unparsed cell bcp15152-tbl-0002:row12:col1 = '0.25 [0.33%]'
- unparsed cell bcp15152-tbl-0002:row13:col1 = '0.026 [3.98%]'
- unparsed cell bcp15152-tbl-0002:row14:col1 = '0.28 [5.30%]'
- unparsed cell bcp15152-tbl-0002:row15:col1 = '0.056 [17.2%]'
- unparsed cell bcp15152-tbl-0002:row16:col1 = 'σ 2 proportional plasma'
- unparsed cell bcp15152-tbl-0002:row16:col2 = '0.0058 [15.9%]'
- unparsed cell bcp15152-tbl-0002:row17:col1 = '0.057 [16.5%]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.824 (14/17 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θ ratiomax]` |  | 0.031 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | clonazepam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | clonazepam | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['bcp15152-tbl-0002:row10:col1', 'bcp15152-tbl-0002:row10:col2', 'bcp15152-tbl-0002:row10:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcp15152-tbl-0002:row4:col1', 'bcp15152-tbl-0002:row4:col2', 'bcp15152-tbl-0002:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['bcp15152-tbl-0002:row6:col1', 'bcp15152-tbl-0002:row6:col2', 'bcp15152-tbl-0002:row6:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['bcp15152-tbl-0002:row8:col1', 'bcp15152-tbl-0002:row8:col2', 'bcp15152-tbl-0002:row8:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['bcp15152-tbl-0002:row3:col1', 'bcp15152-tbl-0002:row3:col2', 'bcp15152-tbl-0002:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['bcp15152-tbl-0002:row5:col1', 'bcp15152-tbl-0002:row5:col2', 'bcp15152-tbl-0002:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.16 | ['bcp15152-tbl-0002:row4:col1', 'bcp15152-tbl-0002:row4:col2', 'bcp15152-tbl-0002:row4:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.16 L/h | ['bcp15152-tbl-0002:row4:col1', 'bcp15152-tbl-0002:row4:col2', 'bcp15152-tbl-0002:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.5 L | ['bcp15152-tbl-0002:row3:col1', 'bcp15152-tbl-0002:row3:col2', 'bcp15152-tbl-0002:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12.9 L | ['bcp15152-tbl-0002:row5:col1', 'bcp15152-tbl-0002:row5:col2', 'bcp15152-tbl-0002:row5:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=clonazepam) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_modelica.zip" download>Clonazepam_Kruizinga2022_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_fmi.zip" download>Clonazepam_Kruizinga2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_matlab.zip" download>Clonazepam_Kruizinga2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_matlab_simbio.zip" download>Clonazepam_Kruizinga2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_sbml.zip" download>Clonazepam_Kruizinga2022_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_cellml.zip" download>Clonazepam_Kruizinga2022_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3157 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-07 | kg |
| input | model | `Cl` | 4.444e-08 | m3/s |
| input | model | `VdPerKg` | 0.0001643 | m3/kg |
| input | model | `k12` | 0.0002705 | 1/s |
| input | model | `k21` | 0.0002412 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kruizinga MD, Zuiker RGJA, Bergmann KR, Egas AC, Cohen AF, Santen GWE et al. Population pharmacokinetics of clonazepam in saliva and plasma: Steps towards noninvasive pharmacokinetic studies in vulnerable populations. British journal of clinical pharmacology 88(5):2236–2245 (2022). [doi:10.1111/bcp.15152](https://doi.org/10.1111/bcp.15152)

**This record:** Pharmacolibrary v26.09, model `Clonazepam_Kruizinga2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference>

```bibtex
@misc{pharmacolibrary_ClonazepamKruizinga2022reference,
  title  = {{Pharmacolibrary model Clonazepam_Kruizinga2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference},
  note   = {Parameters from doi:10.1111/bcp.15152},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 0.5 mg infusion over 10 min, single dose. Doses in the paper: 0.5, 1 mg.

<dbs-fmusim paramsurl="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Clonazepam_Kruizinga2022_reference_params.json` · controls `Clonazepam_Kruizinga2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclonazepam%5D%20Clonazepam_Kruizinga2022_reference&body=Drug%3A%20clonazepam%0ARecord%3A%20Clonazepam_Kruizinga2022_reference%0APaper%3A%20Kruizinga_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:36 UTC</sub>
