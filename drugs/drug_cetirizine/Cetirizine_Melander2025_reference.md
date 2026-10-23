<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;cetirizine&quot;,&quot;href&quot;:&quot;drugs/drug_cetirizine/&quot;},{&quot;label&quot;:&quot;Melander_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cetirizine_Melander2025_reference&quot;,&quot;label&quot;:&quot;Melander_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cetirizine/Cetirizine_Melander2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cetirizine — `Cetirizine_Melander2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 3.06e-05, model 1.53e-05).

<div class="pk-model-meta" hidden drug="cetirizine" model-id="Cetirizine_Melander2025_reference" status="needs_review" stale="false" population="breastfeeding women" measured-compound="cetirizine" parameterization="apparent" topology="1C"></div>

## Citation
Melander E, Nielsen EI, Lindqvist A, Hovd M, Gandia P, Panchaud A et al. Population pharmacokinetic modelling of cetirizine concentrations in human breast milk-A contribution from the ConcePTION project. Basic & clinical pharmacology & toxicology 136(1):e14100 (2025).
  ·  DOI: [10.1111/bcpt.14100](https://doi.org/10.1111/bcpt.14100)

## Population and dosing

**Population:** breastfeeding women · condition healthy · age group adult · n = &gt;=35.

**Dosing:** 5, 10, 20 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cetirizine/Cetirizine_Melander2025_reference/Cetirizine_Melander2025_reference.svg" alt="Cetirizine_Melander2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| ka (h−1) | kabs | 0.095 | h−1 | 4.5 |
| Apparent Clearancemilk (L/h) | CLm/F | 25.2 | L/h | 6.7 |
| Apparent VM (L) | Vm/F | 19.9 | L | 11.6 |
| Tmax | tmax | 2.53 | h |  |
| Cmax | Cmax | 30.6 | μg/L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 3.06e-05, model 1.53e-05).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax), so that value has no SI equivalent. Extracted — cetirizine: kabs 0.095 h−1, CLm/F 25.2 L/h, Vm/F 19.9 L, tmax 2.53 h, Cmax 30.6 μg/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cetirizine, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| ka (h−1) | `Q49` · kabs | 0.095 | h−1 | 2.639e-05 | 1/s | 1/h | 4.5 | exact (1) | bcpt14100-tbl-0001:row1:col1, bcpt14100-tbl-0001:row1:col2, bcpt14100-tbl-0001:row1:col3 |
| Apparent Clearancemilk (L/h) | `Q351` · CLm/F | 25.2 | L/h | 7e-06 | m3/s | l/h | 6.7 | llm_corrected (0.6) | bcpt14100-tbl-0001:row2:col1, bcpt14100-tbl-0001:row2:col2, bcpt14100-tbl-0001:row2:col3 |
| Apparent VM (L) | `Q367` · Vm/F | 19.9 | L | 0.0199 | m3 | l | 11.6 | llm (0.6) | bcpt14100-tbl-0001:row3:col1, bcpt14100-tbl-0001:row3:col2, bcpt14100-tbl-0001:row3:col3 |
| Tmax | `Q56` · tmax | 2.53 | h | 9108 | s | h |  | exact (1) | bcpt14100-tbl-0001:row9:col1 |
| Cmax | `Q32` · Cmax | 30.6 | μg/L |  |  | μg/L |  | exact (1) | bcpt14100-tbl-0001:row10:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- routed 'Covariate effect of pumping duration on VM (L)' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Inter‐individual variability in Clearance (%CV)' — extend the ontology if this is a real PK parameter (source ['bcpt14100-tbl-0001:row7:col1'])
- implicit units: 'Tmax' → h (from the paper text: "The text states: 'Model‐predicted Tmax was 2.53 ± 1.09 h (range: 1.23–5.83)'")
- implicit units: 'Cmax' → μg/L (from the paper text: "The text states: 'with a model‐predicted Cmax of 30.6 ± 7.02 μg/l (range: 13.2–55.2)'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cetirizine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell bcpt14100-tbl-0001:row5:col2 = '9.1 [4.3]'
- unparsed cell bcpt14100-tbl-0001:row6:col2 = '115.5 [4.3]'
- unparsed cell bcpt14100-tbl-0001:row6:col3 = '−0.64‐1.64'
- unparsed cell bcpt14100-tbl-0001:row7:col2 = '21.1 [5.3]'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[covariate effect of pumping duration on vm]` |  | 3.47 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cetirizine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cetirizine | unknown | mismatch |

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
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['bcpt14100-tbl-0001:row10:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['bcpt14100-tbl-0001:row2:col1', 'bcpt14100-tbl-0001:row2:col2', 'bcpt14100-tbl-0001:row2:col3'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['bcpt14100-tbl-0001:row3:col1', 'bcpt14100-tbl-0001:row3:col2', 'bcpt14100-tbl-0001:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['bcpt14100-tbl-0001:row1:col1', 'bcpt14100-tbl-0001:row1:col2', 'bcpt14100-tbl-0001:row1:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['bcpt14100-tbl-0001:row9:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=cetirizine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 scholar param(s) emitted or defaulted | 1 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 3.06e-05 | 1.528e-05 | 0.4992 | μg/l→SI vs simulated kg/m3 |
| T1_tmax | reference | pass | 2.53 | 2.315 | 0.9149 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cetirizine/Cetirizine_Melander2025_reference/Cetirizine_Melander2025_reference_modelica.zip" download>Cetirizine_Melander2025_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cetirizine/Cetirizine_Melander2025_reference/Cetirizine_Melander2025_reference_fmi.zip" download>Cetirizine_Melander2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
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
| input | compound | `MM` | 0.3889 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-06 | kg |
| input | model | `Cl` | 7e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002843 | m3/kg |
| input | model | `ka` | 2.639e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Melander E, Nielsen EI, Lindqvist A, Hovd M, Gandia P, Panchaud A et al. Population pharmacokinetic modelling of cetirizine concentrations in human breast milk-A contribution from the ConcePTION project. Basic & clinical pharmacology & toxicology 136(1):e14100 (2025). [doi:10.1111/bcpt.14100](https://doi.org/10.1111/bcpt.14100)

**This record:** Pharmacolibrary v26.09, model `Cetirizine_Melander2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_cetirizine/Cetirizine_Melander2025_reference>

```bibtex
@misc{pharmacolibrary_CetirizineMelander2025reference,
  title  = {{Pharmacolibrary model Cetirizine_Melander2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cetirizine/Cetirizine_Melander2025_reference},
  note   = {Parameters from doi:10.1111/bcpt.14100},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 0.095 /h, F 1). Doses in the paper: 5, 10, 20 mg.

<dbs-fmusim paramsurl="drugs/drug_cetirizine/Cetirizine_Melander2025_reference/Cetirizine_Melander2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_cetirizine/Cetirizine_Melander2025_reference/Cetirizine_Melander2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Cetirizine_Melander2025_reference_params.json` · controls `Cetirizine_Melander2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcetirizine%5D%20Cetirizine_Melander2025_reference&body=Drug%3A%20cetirizine%0ARecord%3A%20Cetirizine_Melander2025_reference%0APaper%3A%20Melander_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cetirizine/Cetirizine_Melander2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 22:45 UTC</sub>
