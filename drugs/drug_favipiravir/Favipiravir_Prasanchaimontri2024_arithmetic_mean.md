<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;favipiravir&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/&quot;},{&quot;label&quot;:&quot;Prasanchaimontri_2024 \u00b7 arithmetic_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Favipiravir_Prasanchaimontri2024_arithmetic_mean&quot;,&quot;label&quot;:&quot;Prasanchaimontri_2024_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Favipiravir_Prasanchaimontri2024_geometric_mean&quot;,&quot;label&quot;:&quot;Prasanchaimontri_2024_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Agyeman2026_reference&quot;,&quot;label&quot;:&quot;Agyeman_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Agyeman2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Irie2023_reference&quot;,&quot;label&quot;:&quot;Irie_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Irie2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Pertinez2021_reference&quot;,&quot;label&quot;:&quot;Pertinez_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Pertinez2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# favipiravir — `Favipiravir_Prasanchaimontri2024_arithmetic_mean`

> ## <span class="pk-badge pk-badge--blue">Simulated</span>

<div class="pk-model-meta" hidden drug="favipiravir" model-id="Favipiravir_Prasanchaimontri2024_arithmetic_mean" status="simulated" stale="false" population="Thai adults with mild COVID-19" measured-compound="favipiravir" parameterization="apparent" topology="1C"></div>

## Citation
Prasanchaimontri IO, Manosuthi W, Pertinez H, Owen A, Niyomnaitham S, Sirijatuphat R et al. Favipiravir pharmacokinetics in Thai adults with mild COVID-19: A sub-study of interpatient variability and ethnic differences in exposure. Pharmacology research & perspectives 12(6):e1233 (2024).
  ·  DOI: [10.1002/prp2.1233](https://doi.org/10.1002/prp2.1233)

## Population and dosing

**Population:** Thai adults with mild COVID-19 · age group adult.

**Dosing:** 800, 1800 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean/Favipiravir_Prasanchaimontri2024_arithmetic_mean.svg" alt="Favipiravir_Prasanchaimontri2024_arithmetic_mean diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) [%RSE] | CL/F | 1.1 | L/h |
| V/F (L) [%RSE] | V/F | 20.6 | L |
| K_A (h-1) [%RSE] | kabs | 6.0 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Simulated: every check that could be run on this record passed; no value reported in the paper was compared with the simulation.**

Independently confirmed by `gpt-oss-120b`, `qwen3.8-27b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) [%RSE] | `Q27` · CL/F | 1.1 | L/h | 3.056e-07 | m3/s | l/h | llm_confirmed (0.6) | Prasanchaimontri_2024_table_p7_1:row11:col1 |
| V/F (L) [%RSE] | `Q76` · V/F | 20.6 | L | 0.0206 | m3 | l | llm_confirmed (0.6) | Prasanchaimontri_2024_table_p7_1:row11:col2 |
| K_A (h-1) [%RSE] | `Q49` · kabs | 6.0 | h-1 | 0.001667 | 1/s | 1/h | llm_confirmed (0.6) | Prasanchaimontri_2024_table_p7_1:row11:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q27 ('Daily % change in CL/F [%RSE]', value '2.4') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=favipiravir
- population split: 'arithmetic mean' subgroup of Prasanchaimontri_2024 (paper reports 2 populations: arithmetic mean, geometric mean)

**Extraction notes:**
- table Prasanchaimontri_2024_table_p7_1: unbound_uncertainty
- transposed table Prasanchaimontri_2024_table_p7_1: logical view retains original source coordinates
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  ·  2 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (7/7 fields) | none |
| `qwen3.8-27b` | confirmed | 1.0 (7/7 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Prasanchaimontri_2024_table_p7_1:row11:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Prasanchaimontri_2024_table_p7_1:row11:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Prasanchaimontri_2024_table_p7_1:row11:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.1 L/h | ['Prasanchaimontri_2024_table_p7_1:row11:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 20.6 L | ['Prasanchaimontri_2024_table_p7_1:row11:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=favipiravir) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | pass |  | verdict confirmed; agreement 1.0 (7 of 7 compared fields agree); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 1 | a second reader did not contradict the extraction |
| T1_cmax | reference | skipped |  | 0.03721 |  | the transcribed record carries no number for this value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean/Favipiravir_Prasanchaimontri2024_arithmetic_mean_modelica.zip" download>Favipiravir_Prasanchaimontri2024_arithmetic_mean_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean/Favipiravir_Prasanchaimontri2024_arithmetic_mean_fmi.zip" download>Favipiravir_Prasanchaimontri2024_arithmetic_mean_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean/Favipiravir_Prasanchaimontri2024_arithmetic_mean_matlab.zip" download>Favipiravir_Prasanchaimontri2024_arithmetic_mean_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean/Favipiravir_Prasanchaimontri2024_arithmetic_mean_matlab_simbio.zip" download>Favipiravir_Prasanchaimontri2024_arithmetic_mean_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean/Favipiravir_Prasanchaimontri2024_arithmetic_mean_sbml.zip" download>Favipiravir_Prasanchaimontri2024_arithmetic_mean_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean/Favipiravir_Prasanchaimontri2024_arithmetic_mean_cellml.zip" download>Favipiravir_Prasanchaimontri2024_arithmetic_mean_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1571 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0008 | kg |
| input | model | `Cl` | 3.056e-07 | m3/s |
| input | model | `VdPerKg` | 0.0002943 | m3/kg |
| input | model | `ka` | 0.001667 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Prasanchaimontri IO, Manosuthi W, Pertinez H, Owen A, Niyomnaitham S, Sirijatuphat R et al. Favipiravir pharmacokinetics in Thai adults with mild COVID-19: A sub-study of interpatient variability and ethnic differences in exposure. Pharmacology research & perspectives 12(6):e1233 (2024). [doi:10.1002/prp2.1233](https://doi.org/10.1002/prp2.1233)

**This record:** Pharmacolibrary, model `Favipiravir_Prasanchaimontri2024_arithmetic_mean`. <https://pharmacolibrary.github.io/#/drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean>

```bibtex
@misc{pharmacolibrary_FavipiravirPrasanchaimontri2024arithmeticmean,
  title  = {{Pharmacolibrary model Favipiravir_Prasanchaimontri2024_arithmetic_mean}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean},
  note   = {Parameters from doi:10.1002/prp2.1233},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 800 mg, single dose, first-order absorption (ka 6 /h, F 1). Doses in the paper: 800, 1800 mg.

<dbs-fmusim paramsurl="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean/Favipiravir_Prasanchaimontri2024_arithmetic_mean_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean/Favipiravir_Prasanchaimontri2024_arithmetic_mean_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Favipiravir_Prasanchaimontri2024_arithmetic_mean_params.json` · controls `Favipiravir_Prasanchaimontri2024_arithmetic_mean_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfavipiravir%5D%20Favipiravir_Prasanchaimontri2024_arithmetic_mean&body=Drug%3A%20favipiravir%0ARecord%3A%20Favipiravir_Prasanchaimontri2024_arithmetic_mean%0APaper%3A%20Prasanchaimontri_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 13:48 UTC</sub>
