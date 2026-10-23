<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab/&quot;},{&quot;label&quot;:&quot;Verma_2025 \u00b7 rat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trastuzumab_Verma2025_rat&quot;,&quot;label&quot;:&quot;Verma_2025_rat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab — `Trastuzumab_Verma2025_rat`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<div class="pk-model-meta" hidden drug="trastuzumab" model-id="Trastuzumab_Verma2025_rat" status="curated_candidate" stale="false" population="mice and rats" measured-compound="trastuzumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Verma A, Wu S, Shah DK. Oral Bioavailability of Monoclonal Antibody. Pharmaceutics 18(1) (2025).
  ·  DOI: [10.3390/pharmaceutics18010022](https://doi.org/10.3390/pharmaceutics18010022)

## Population and dosing

**Population:** mice and rats · condition healthy.

**Dosing:** 7000 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat.svg" alt="Trastuzumab_Verma2025_rat diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 0.33 | L/h |
| CLd | Q | 14.06 | L/h |
| V1 | V1 | 28.86 | L |
| V2 | V2 | 48.79 | L |
| F | Fab | 0.025 |  |
| ka | kabs | 0.78 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.33 | L/h | 9.167e-08 | m3/s | L/h | exact (1) | pharmaceutics-18-00022-t002:row2:col2, pharmaceutics-18-00022-t002:row2:col3, Verma_2025_table_1:row3:col2 |
| CLd | `Q30` · Q | 14.06 | L/h | 3.906e-06 | m3/s | L/h | exact (1) | pharmaceutics-18-00022-t002:row3:col2, pharmaceutics-18-00022-t002:row3:col3 |
| V1 | `Q63` · V1 | 28.86 | L | 0.02886 | m3 | L | exact (1) | pharmaceutics-18-00022-t002:row4:col2, pharmaceutics-18-00022-t002:row4:col3 |
| V2 | `Q64` · V2 | 48.79 | L | 0.04879 | m3 | L | exact (1) | pharmaceutics-18-00022-t002:row5:col2, pharmaceutics-18-00022-t002:row5:col3 |
| F | `Q40` · Fab | 0.025 |  |  |  |  | exact (1) | pharmaceutics-18-00022-t002:row6:col2, pharmaceutics-18-00022-t002:row6:col3, Verma_2025_table_1:row4:col3 |
| ka | `Q49` · kabs | 0.78 | 1/h | 0.0002167 | 1/s | 1/h | exact (1) | pharmaceutics-18-00022-t002:row7:col2, pharmaceutics-18-00022-t002:row7:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- implicit units: 'CL' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for CL in the provided text or table captions. However, CL is a clearance p')
- implicit units: 'CLd' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for CLd (intercompartmental clearance). By convention, intercompartmental c')
- implicit units: 'V1' → L (from the popPK convention: 'The paper does not explicitly state the unit for V1 (central volume of distribution). By convention, volumes of distribu')
- implicit units: 'V2' → L (from the popPK convention: 'The paper does not explicitly state the unit for V2 (peripheral volume of distribution). By convention, volumes of distr')
- implicit units: 'ka' → 1/h (from the paper text: "The text explicitly states: 'Interestingly, the model estimated value for the rate of oral absorption of trastuzumab (i.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab
- population split: 'rat' subgroup of Verma_2025 (paper reports 2 populations: mouse, rat)
- molar mass: none found for 'trastuzumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-18-00022-t002:row7:col1 = 'h−1'
- companion parameter table 1 transcribed (4 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (11/11 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-18-00022-t002:row2:col2', 'pharmaceutics-18-00022-t002:row2:col3', 'Verma_2025_table_1:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-18-00022-t002:row3:col2', 'pharmaceutics-18-00022-t002:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-18-00022-t002:row7:col2', 'pharmaceutics-18-00022-t002:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceutics-18-00022-t002:row4:col2', 'pharmaceutics-18-00022-t002:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceutics-18-00022-t002:row5:col2', 'pharmaceutics-18-00022-t002:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.33 | ['pharmaceutics-18-00022-t002:row2:col2', 'pharmaceutics-18-00022-t002:row2:col3', 'Verma_2025_table_1:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.33 L/h | ['pharmaceutics-18-00022-t002:row2:col2', 'pharmaceutics-18-00022-t002:row2:col3', 'Verma_2025_table_1:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 28.9 L | ['pharmaceutics-18-00022-t002:row4:col2', 'pharmaceutics-18-00022-t002:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 48.8 L | ['pharmaceutics-18-00022-t002:row5:col2', 'pharmaceutics-18-00022-t002:row5:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=trastuzumab) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_modelica.zip" download>Trastuzumab_Verma2025_rat_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_fmi.zip" download>Trastuzumab_Verma2025_rat_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_matlab.zip" download>Trastuzumab_Verma2025_rat_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_matlab_simbio.zip" download>Trastuzumab_Verma2025_rat_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_sbml.zip" download>Trastuzumab_Verma2025_rat_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_cellml.zip" download>Trastuzumab_Verma2025_rat_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.025 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.007 | kg |
| input | model | `Cl` | 9.167e-08 | m3/s |
| input | model | `VdPerKg` | 0.0004123 | m3/kg |
| input | model | `k12` | 0.0001353 | 1/s |
| input | model | `k21` | 8.005e-05 | 1/s |
| input | model | `ka` | 0.0002167 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Verma A, Wu S, Shah DK. Oral Bioavailability of Monoclonal Antibody. Pharmaceutics 18(1) (2025). [doi:10.3390/pharmaceutics18010022](https://doi.org/10.3390/pharmaceutics18010022)

**This record:** Pharmacolibrary v26.09, model `Trastuzumab_Verma2025_rat`. <https://pharmacolibrary.github.io/#/drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat>

```bibtex
@misc{pharmacolibrary_TrastuzumabVerma2025rat,
  title  = {{Pharmacolibrary model Trastuzumab_Verma2025_rat}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat},
  note   = {Parameters from doi:10.3390/pharmaceutics18010022},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 7000 mg, single dose, first-order absorption (ka 0.78 /h, F 0.025). Dose in the paper: 7000 mg.

<dbs-fmusim paramsurl="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Trastuzumab_Verma2025_rat_params.json` · controls `Trastuzumab_Verma2025_rat_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrastuzumab%5D%20Trastuzumab_Verma2025_rat&body=Drug%3A%20trastuzumab%0ARecord%3A%20Trastuzumab_Verma2025_rat%0APaper%3A%20Verma_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 21:23 UTC</sub>
