<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;lacosamide&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/&quot;},{&quot;label&quot;:&quot;Li_2025 \u00b7 boostrap&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lacosamide_Li2025_boostrap&quot;,&quot;label&quot;:&quot;Li_2025_boostrap&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Li2025_boostrap.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Lacosamide_Li2025_final_models&quot;,&quot;label&quot;:&quot;Li_2025_final_models&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Li2025_final_models.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Wu2026_reference&quot;,&quot;label&quot;:&quot;Wu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Wu2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Yu2026_reference&quot;,&quot;label&quot;:&quot;Yu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Yu2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Wang2024_reference&quot;,&quot;label&quot;:&quot;Wang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Wang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lacosamide — `Lacosamide_Li2025_boostrap`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Needs review), but the paper was screened again on 2026-10-07 06:56 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="lacosamide" model-id="Lacosamide_Li2025_boostrap" status="extracted" stale="true" population="children with epilepsy" measured-compound="lacosamide" parameterization="apparent" topology="1C"></div>

## Citation
Li Y, Guo HL, Fan L, Wang J, Hu YH, Zhang YY et al. PopPK modeling supports BW band dosing of lacosamide for pediatric epilepsy. NPJ genomic medicine 10(1):61 (2025).
  ·  DOI: [10.1038/s41525-025-00519-y](https://doi.org/10.1038/s41525-025-00519-y)

## Population and dosing

**Population:** children with epilepsy · condition epilepsy · age group child · n = 190.

**Dosing:** 2, 8, 50, 200 mg/kg, mg, oral, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_lacosamide/Lacosamide_Li2025_boostrap/Lacosamide_Li2025_boostrap.svg" alt="Lacosamide_Li2025_boostrap diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 1.51 | L/h |
| V/F (L) | V/F | 23.6 | L |
| Ka | kabs | 2.45 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lacosamide record was held back because the absorption rate constant Ka was not reported in the source; the model builder substituted a default value, an invented absorption parameter that is not acceptable.**

The paper (Li_2025, children with epilepsy) reports CL/F 1.51 L/h, V/F 23.6 L, Ka 2.45, allometrically normalized clearance 0.296, and genotype-stratified clearance 0.736 L/h for lacosamide. The Ka of 2.45 was not actually reported in the source; a library default was used instead, along with a defaulted lag time. The model also assumed F=1 and Fm=1 with no molar correction, so all parameters are apparent (bioavailability-adjusted) values. The failed check returned 'invented_absorption: not acceptable', and the verdict is needs_review. Extracted — lacosamide: CL/F 1.51 L/h, V/F 23.6 L, kabs 2.45, CLnorm 0.296, CL 0.736.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lacosamide, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 1.51 | L/h | 4.194e-07 | m3/s | l/h | exact (1) | Tab2:row3:col3, Tab2:row3:col5, Tab2:row15:col3, Tab2:row15:col5 |
| V/F (L) | `Q76` · V/F | 23.6 | L | 0.0236 | m3 | l | exact (1) | Tab2:row4:col3, Tab2:row4:col5, Tab2:row16:col3, Tab2:row16:col5 |
| Ka | `Q49` · kabs | 2.45 | 1/h | 0.0006806 | 1/s | 1/h | exact (1) | Tab2:row5:col3, Tab2:row17:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'CL-BW' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col3', 'Tab2:row7:col5', 'Tab2:row19:col3', 'Tab2:row19:col5'])
- dropped unlinked row (NIL): 'CL-rs12769205*GA' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col3', 'Tab2:row20:col5'])
- dropped unlinked row (NIL): 'CL-rs12769205*GG' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col3', 'Tab2:row21:col5'])
- implicit units: 'Ka' → 1/h (from the paper text: 'ka was fixed at 2.45 h−1, based on values reported in a previous study')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lacosamide
- population split: 'boostrap' subgroup of Li_2025 (paper reports 2 populations: boostrap, final models)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row3:col4 = '(1.36, 1.67)'
- unparsed cell Tab2:row4:col4 = '(16.7, 38.1)'
- unparsed cell Tab2:row7:col4 = '(0.207, 0.380)'
- unparsed cell Tab2:row8:col4 = '(14.1, 21.4)'
- unparsed cell Tab2:row10:col4 = '(13.8, 20.7)'
- unparsed cell Tab2:row15:col4 = '(1.47, 1.91)'
- unparsed cell Tab2:row16:col4 = '(16.8, 40.0)'
- unparsed cell Tab2:row19:col4 = '(0.231, 0.408)'
- unparsed cell Tab2:row20:col4 = '(0.818, 0.950)'
- unparsed cell Tab2:row21:col4 = '(0.661, 0.825)'
- unparsed cell Tab2:row22:col4 = '(10.6, 18.9)'
- unparsed cell Tab2:row24:col4 = '(13.6, 21.3)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl-bw]` |  | -0.68 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl-rs12769205*ga]` |  | 0.06 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].value` | 1.51 | -0.38 | mismatch |
| `gpt-oss-120b` | `parameters[v/f].value` | 23.6 | -1.31 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | lacosamide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lacosamide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col3', 'Tab2:row3:col5', 'Tab2:row15:col3', 'Tab2:row15:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row5:col3', 'Tab2:row17:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab2:row4:col3', 'Tab2:row4:col5', 'Tab2:row16:col3', 'Tab2:row16:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.51 L/h | ['Tab2:row3:col3', 'Tab2:row3:col5', 'Tab2:row15:col3', 'Tab2:row15:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 23.6 L | ['Tab2:row4:col3', 'Tab2:row4:col5', 'Tab2:row16:col3', 'Tab2:row16:col5'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=lacosamide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lacosamide/Lacosamide_Li2025_boostrap/Lacosamide_Li2025_boostrap_modelica.zip" download>Lacosamide_Li2025_boostrap_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_lacosamide/Lacosamide_Li2025_boostrap/Lacosamide_Li2025_boostrap_fmi.zip" download>Lacosamide_Li2025_boostrap_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lacosamide/Lacosamide_Li2025_boostrap/Lacosamide_Li2025_boostrap_matlab.zip" download>Lacosamide_Li2025_boostrap_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lacosamide/Lacosamide_Li2025_boostrap/Lacosamide_Li2025_boostrap_matlab_simbio.zip" download>Lacosamide_Li2025_boostrap_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lacosamide/Lacosamide_Li2025_boostrap/Lacosamide_Li2025_boostrap_sbml.zip" download>Lacosamide_Li2025_boostrap_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lacosamide/Lacosamide_Li2025_boostrap/Lacosamide_Li2025_boostrap_cellml.zip" download>Lacosamide_Li2025_boostrap_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2503 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0003 | kg |
| input | model | `Cl` | 4.194e-07 | m3/s |
| input | model | `VdPerKg` | 0.0003371 | m3/kg |
| input | model | `ka` | 0.0006806 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Li Y, Guo HL, Fan L, Wang J, Hu YH, Zhang YY et al. PopPK modeling supports BW band dosing of lacosamide for pediatric epilepsy. NPJ genomic medicine 10(1):61 (2025). [doi:10.1038/s41525-025-00519-y](https://doi.org/10.1038/s41525-025-00519-y)

**This record:** Pharmacolibrary v26.09, model `Lacosamide_Li2025_boostrap`. <https://pharmacolibrary.github.io/#/drugs/drug_lacosamide/Lacosamide_Li2025_boostrap>

```bibtex
@misc{pharmacolibrary_LacosamideLi2025boostrap,
  title  = {{Pharmacolibrary model Lacosamide_Li2025_boostrap}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_lacosamide/Lacosamide_Li2025_boostrap},
  note   = {Parameters from doi:10.1038/s41525-025-00519-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 300 mg, single dose, first-order absorption (ka 2.45 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 300 mg oral (N03AX18) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_lacosamide/Lacosamide_Li2025_boostrap/Lacosamide_Li2025_boostrap_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_lacosamide/Lacosamide_Li2025_boostrap/Lacosamide_Li2025_boostrap_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Lacosamide_Li2025_boostrap_params.json` · controls `Lacosamide_Li2025_boostrap_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blacosamide%5D%20Lacosamide_Li2025_boostrap&body=Drug%3A%20lacosamide%0ARecord%3A%20Lacosamide_Li2025_boostrap%0APaper%3A%20Li_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lacosamide/Lacosamide_Li2025_boostrap%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 06:56 UTC</sub>
