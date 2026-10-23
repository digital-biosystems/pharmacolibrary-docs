<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02A&quot;,&quot;href&quot;:&quot;atc/L02A.md&quot;},{&quot;label&quot;:&quot;bicalutamide&quot;,&quot;href&quot;:&quot;drugs/drug_bicalutamide/&quot;},{&quot;label&quot;:&quot;Ozaksun_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bicalutamide_Ozaksun2025_reference&quot;,&quot;label&quot;:&quot;Ozaksun_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bicalutamide — `Bicalutamide_Ozaksun2025_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="bicalutamide" model-id="Bicalutamide_Ozaksun2025_reference" status="curated_candidate" stale="false" population="healthy males" measured-compound="bicalutamide" parameterization="apparent" topology="1C"></div>

## Citation
Ozaksun NT, Incecayir T. Developing In Vitro-In Vivo Correlation for Bicalutamide Immediate-Release Dosage Forms with the Biphasic In Vitro Dissolution Test. Pharmaceutics 17(9) (2025).
  ·  DOI: [10.3390/pharmaceutics17091126](https://doi.org/10.3390/pharmaceutics17091126)

## Population and dosing

**Population:** healthy males · condition healthy · age group adult · n = 5.

**Dosing:** 50 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference/Bicalutamide_Ozaksun2025_reference.svg" alt="Bicalutamide_Ozaksun2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| ka (h−1) 1,# | kabs | 0.0485 | 1/h | 95.1 |
| kd (h−1) 2,# | kel | 0.00910 | 1/h | 20.5 |
| Vd/FF* 3,# (mL) | V/F | 55948 | mL | 15.0 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has bicalutamide, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| ka (h−1) 1,# | `Q49` · kabs | 0.0485 | 1/h | 1.347e-05 | 1/s | 1/h | 95.1 | llm_confirmed (0.6) | pharmaceutics-17-01126-t001:row0:col2, pharmaceutics-17-01126-t001:row0:col3, pharmaceutics-17-01126-t001:row0:col4, pharmaceutics-17-01126-t001:row0:col5, pharmaceutics-17-01126-t001:row0:col6, pharmaceutics-17-01126-t001:row0:col7, pharmaceutics-17-01126-t001:row0:col8 |
| kd (h−1) 2,# | `Q47` · kel | 0.00910 | 1/h | 2.528e-06 | 1/s | 1/h | 20.5 | llm_corrected (0.6) | pharmaceutics-17-01126-t001:row1:col2, pharmaceutics-17-01126-t001:row1:col3, pharmaceutics-17-01126-t001:row1:col4, pharmaceutics-17-01126-t001:row1:col5, pharmaceutics-17-01126-t001:row1:col6, pharmaceutics-17-01126-t001:row1:col7, pharmaceutics-17-01126-t001:row1:col8 |
| Vd/FF* 3,# (mL) | `Q76` · V/F | 55948 | mL | 0.05595 | m3 | ml | 15.0 | llm (0.6) | pharmaceutics-17-01126-t001:row2:col1, pharmaceutics-17-01126-t001:row2:col2, pharmaceutics-17-01126-t001:row2:col3, pharmaceutics-17-01126-t001:row2:col4, pharmaceutics-17-01126-t001:row2:col5, pharmaceutics-17-01126-t001:row2:col6, pharmaceutics-17-01126-t001:row2:col7, pharmaceutics-17-01126-t001:row2:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- implicit units: 'ka (h−1) 1,#' → 1/h (from the popPK convention: "The table header for this parameter explicitly lists '(h−1)' immediately before the symbol 'ka'. While the table footnot")
- implicit units: 'kd (h−1) 2,#' → 1/h (from the popPK convention: "The table header for this parameter explicitly lists '(h−1)' immediately before the symbol 'kd'. While the table footnot")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=bicalutamide
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- derived CL/F=0.509127 L/h from Ke × V/F = CL/F (Q47 × Q76); not separately reported

**Extraction notes:**
- transposed table pharmaceutics-17-01126-t001: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell pharmaceutics-17-01126-t001:row0:col1 = 'ka (h−1) 1,#'
- unparsed cell pharmaceutics-17-01126-t001:row1:col1 = 'kd (h−1) 2,#'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | bicalutamide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | bicalutamide | unknown | mismatch |

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
| C5_dimension_Q47 | pass | 1 / [time] |  | ['pharmaceutics-17-01126-t001:row1:col2', 'pharmaceutics-17-01126-t001:row1:col3', 'pharmaceutics-17-01126-t001:row1:col4', 'pharmaceutics-17-01126-t001:row1:col5', 'pharmaceutics-17-01126-t001:row1:col6', 'pharmaceutics-17-01126-t001:row1:col7', 'pharmaceutics-17-01126-t001:row1:col8'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-17-01126-t001:row0:col2', 'pharmaceutics-17-01126-t001:row0:col3', 'pharmaceutics-17-01126-t001:row0:col4', 'pharmaceutics-17-01126-t001:row0:col5', 'pharmaceutics-17-01126-t001:row0:col6', 'pharmaceutics-17-01126-t001:row0:col7', 'pharmaceutics-17-01126-t001:row0:col8'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['pharmaceutics-17-01126-t001:row2:col1', 'pharmaceutics-17-01126-t001:row2:col2', 'pharmaceutics-17-01126-t001:row2:col3', 'pharmaceutics-17-01126-t001:row2:col4', 'pharmaceutics-17-01126-t001:row2:col5', 'pharmaceutics-17-01126-t001:row2:col6', 'pharmaceutics-17-01126-t001:row2:col7', 'pharmaceutics-17-01126-t001:row2:col8'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 55.9 L | ['pharmaceutics-17-01126-t001:row2:col1', 'pharmaceutics-17-01126-t001:row2:col2', 'pharmaceutics-17-01126-t001:row2:col3', 'pharmaceutics-17-01126-t001:row2:col4', 'pharmaceutics-17-01126-t001:row2:col5', 'pharmaceutics-17-01126-t001:row2:col6', 'pharmaceutics-17-01126-t001:row2:col7', 'pharmaceutics-17-01126-t001:row2:col8'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_derived_parameters | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable | pass | C_central (measured=bicalutamide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference/Bicalutamide_Ozaksun2025_reference_modelica.zip" download>Bicalutamide_Ozaksun2025_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference/Bicalutamide_Ozaksun2025_reference_fmi.zip" download>Bicalutamide_Ozaksun2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4304 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-05 | kg |
| input | model | `Cl` | 1.414e-07 | m3/s |
| input | model | `VdPerKg` | 0.0007993 | m3/kg |
| input | model | `ka` | 1.347e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Ozaksun NT, Incecayir T. Developing In Vitro-In Vivo Correlation for Bicalutamide Immediate-Release Dosage Forms with the Biphasic In Vitro Dissolution Test. Pharmaceutics 17(9) (2025). [doi:10.3390/pharmaceutics17091126](https://doi.org/10.3390/pharmaceutics17091126)

**This record:** Pharmacolibrary v26.09, model `Bicalutamide_Ozaksun2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference>

```bibtex
@misc{pharmacolibrary_BicalutamideOzaksun2025reference,
  title  = {{Pharmacolibrary model Bicalutamide_Ozaksun2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics17091126},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.0485 /h, F 1). Dose in the paper: 50 mg.

<dbs-fmusim paramsurl="drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference/Bicalutamide_Ozaksun2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference/Bicalutamide_Ozaksun2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Bicalutamide_Ozaksun2025_reference_params.json` · controls `Bicalutamide_Ozaksun2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbicalutamide%5D%20Bicalutamide_Ozaksun2025_reference&body=Drug%3A%20bicalutamide%0ARecord%3A%20Bicalutamide_Ozaksun2025_reference%0APaper%3A%20Ozaksun_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 21:55 UTC</sub>
