<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;asparaginase&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/&quot;},{&quot;label&quot;:&quot;Sassen_2017 \u00b7 median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Asparaginase_Borghorst2012_reference&quot;,&quot;label&quot;:&quot;Borghorst_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/Asparaginase_Borghorst2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Asparaginase_Sassen2017_estimate&quot;,&quot;label&quot;:&quot;Sassen_2017_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/Asparaginase_Sassen2017_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Asparaginase_Sassen2017_median&quot;,&quot;label&quot;:&quot;Sassen_2017_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/Asparaginase_Sassen2017_median.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# asparaginase — `Asparaginase_Sassen2017_median`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 19.6, model 91.4).

<div class="pk-model-meta" hidden drug="asparaginase" model-id="Asparaginase_Sassen2017_median" status="needs_review" stale="false" population="pediatric acute lymphoblastic leukemia patients" measured-compound="Erwinia asparaginase" parameterization="mechanistic" topology="2C"></div>

## Citation
Sassen SD, Mathôt RA, Pieters R, Kloos RQ, de Haas V, Kaspers GJ et al. Population pharmacokinetics of intravenous Erwinia asparaginase in pediatric acute lymphoblastic leukemia patients. Haematologica 102(3):552–561 (2017).
  ·  DOI: [10.3324/haematol.2016.149195](https://doi.org/10.3324/haematol.2016.149195)

## Population and dosing

**Population:** pediatric acute lymphoblastic leukemia patients · condition acute lymphoblastic leukemia · age group child · n = &gt;=51.

**Dosing:** 20000 IU/m2, iv, multiple, every 72 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_asparaginase/Asparaginase_Sassen2017_median/Asparaginase_Sassen2017_median.svg" alt="Asparaginase_Sassen2017_median diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h/70kg) | CL | 0.42 | L/h/70kg | 30 (None% RSE) |
| Vc (L/70kg) | V1 | 3.3 | L/70kg |  |
| Q (L/h/70kg) | Q | 0.13 | L/h/70kg |  |
| Vp (L/70kg) | V2 | 2.7 | L/70kg |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 19.6, model 91.4).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. None of the extracted parameters is asparaginase's own; they describe Erwinia asparaginase. Extracted — Erwinia asparaginase: CL 0.42 L/h/70kg, V1 3.3 L/70kg, Q 0.13 L/h/70kg, V2 2.7 L/70kg.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h/70kg) | `Q22` · CL | 0.42 | L/h/70kg | 1.167e-07 | m3/s | l/(h·70kg) | exact (1) | Sassen_2017_table_p6_1:row0:col6 | 30 (None% RSE) |
| Vc (L/70kg) | `Q63` · V1 | 3.3 | L/70kg | 0.0033 | m3 | l/70kg | exact (1) | Sassen_2017_table_p6_1:row1:col6 |  |
| Q (L/h/70kg) | `Q30` · Q | 0.13 | L/h/70kg | 3.611e-08 | m3/s | l/(h·70kg) | exact (1) | Sassen_2017_table_p6_1:row2:col6 |  |
| Vp (L/70kg) | `Q64` · V2 | 2.7 | L/70kg | 0.0027 | m3 | l/70kg | exact (1) | Sassen_2017_table_p6_1:row3:col6 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('CL month 1 diff', value '1.12') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Erwinia asparaginase
- population split: 'median' subgroup of Sassen_2017 (paper reports 2 populations: estimate, median)
- molar mass: no plausible PubChem entry for 'Erwinia asparaginase' ('Erwinia asparaginase') — left in mass units
- molar mass: none found for 'asparaginase' — its concentrations stay mass-only
- molar mass: none found for 'Erwinia asparaginase' — its concentrations stay mass-only

**Extraction notes:**
- final table t3-1020552: grid unusable → re-running vision table extraction for Sassen_2017
- unparsed cell Sassen_2017_table_p6_1:row0:col2 = '11%'
- unparsed cell Sassen_2017_table_p6_1:row1:col2 = '22%'
- unparsed cell Sassen_2017_table_p6_1:row2:col2 = '44%'
- unparsed cell Sassen_2017_table_p6_1:row3:col2 = '35%'
- unparsed cell Sassen_2017_table_p6_1:row4:col2 = '3%'
- unparsed cell Sassen_2017_table_p6_1:row7:col2 = '6.4%'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (8/8 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_alpha | pass | 3.5 | 3.831 | 1.095 | 0.25 | reported t½α |
| C1_half_life_beta | pass | 19.6 | 20.47 | 1.044 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Sassen_2017_table_p6_1:row0:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['Sassen_2017_table_p6_1:row2:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['Sassen_2017_table_p6_1:row1:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['Sassen_2017_table_p6_1:row3:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.42 |  |  | ['Sassen_2017_table_p6_1:row0:col6'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.42 L/h |  |  | ['Sassen_2017_table_p6_1:row0:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.3 L |  |  | ['Sassen_2017_table_p6_1:row1:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.7 L |  |  | ['Sassen_2017_table_p6_1:row3:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=Erwinia asparaginase) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_alpha | reference | skipped | 3.5 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | fail | 19.6 | 91.37 | 4.662 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 19.6 | 91.37 | 4.662 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 3.5 | 91.37 | 26.1 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 19.6 | 91.37 | 4.662 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 6.4 | 91.37 | 14.28 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 7.5 | 91.37 | 12.18 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_asparaginase/Asparaginase_Sassen2017_median/Asparaginase_Sassen2017_median_modelica.zip" download>Asparaginase_Sassen2017_median_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_asparaginase/Asparaginase_Sassen2017_median/Asparaginase_Sassen2017_median_fmi.zip" download>Asparaginase_Sassen2017_median_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_asparaginase/Asparaginase_Sassen2017_median/Asparaginase_Sassen2017_median_matlab.zip" download>Asparaginase_Sassen2017_median_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_asparaginase/Asparaginase_Sassen2017_median/Asparaginase_Sassen2017_median_matlab_simbio.zip" download>Asparaginase_Sassen2017_median_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_asparaginase/Asparaginase_Sassen2017_median/Asparaginase_Sassen2017_median_sbml.zip" download>Asparaginase_Sassen2017_median_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_asparaginase/Asparaginase_Sassen2017_median/Asparaginase_Sassen2017_median_cellml.zip" download>Asparaginase_Sassen2017_median_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.167e-07 | m3/s |
| input | model | `VdPerKg` | 4.714e-05 | m3/kg |
| input | model | `k12` | 1.094e-05 | 1/s |
| input | model | `k21` | 1.337e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sassen SD, Mathôt RA, Pieters R, Kloos RQ, de Haas V, Kaspers GJ et al. Population pharmacokinetics of intravenous Erwinia asparaginase in pediatric acute lymphoblastic leukemia patients. Haematologica 102(3):552–561 (2017). [doi:10.3324/haematol.2016.149195](https://doi.org/10.3324/haematol.2016.149195)

**This record:** Pharmacolibrary v26.09, model `Asparaginase_Sassen2017_median`. <https://pharmacolibrary.github.io/#/drugs/drug_asparaginase/Asparaginase_Sassen2017_median>

```bibtex
@misc{pharmacolibrary_AsparaginaseSassen2017median,
  title  = {{Pharmacolibrary model Asparaginase_Sassen2017_median}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_asparaginase/Asparaginase_Sassen2017_median},
  note   = {Parameters from doi:10.3324/haematol.2016.149195},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_asparaginase/Asparaginase_Sassen2017_median/Asparaginase_Sassen2017_median_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_asparaginase/Asparaginase_Sassen2017_median/Asparaginase_Sassen2017_median_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Asparaginase_Sassen2017_median_params.json` · controls `Asparaginase_Sassen2017_median_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Basparaginase%5D%20Asparaginase_Sassen2017_median&body=Drug%3A%20asparaginase%0ARecord%3A%20Asparaginase_Sassen2017_median%0APaper%3A%20Sassen_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_asparaginase/Asparaginase_Sassen2017_median%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 23:16 UTC</sub>
