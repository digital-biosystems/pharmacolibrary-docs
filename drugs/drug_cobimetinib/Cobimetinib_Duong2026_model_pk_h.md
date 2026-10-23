<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;cobimetinib&quot;,&quot;href&quot;:&quot;drugs/drug_cobimetinib/&quot;},{&quot;label&quot;:&quot;Duong_2026 \u00b7 model_pk_h&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cobimetinib_Duong2026_model_h_h&quot;,&quot;label&quot;:&quot;Duong_2026_model_h_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_h_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cobimetinib_Duong2026_model_pk_h&quot;,&quot;label&quot;:&quot;Duong_2026_model_pk_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cobimetinib_Duong2026_model_pkpd_h&quot;,&quot;label&quot;:&quot;Duong_2026_model_pkpd_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pkpd_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cobimetinib — `Cobimetinib_Duong2026_model_pk_h`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 2.4, model 1.43).

<div class="pk-model-meta" hidden drug="cobimetinib" model-id="Cobimetinib_Duong2026_model_pk_h" status="needs_review" stale="false" population="in silico tumor-cell populations" measured-compound="cobimetinib" parameterization="apparent" topology="1C"></div>

## Citation
Duong NH, Do TN, Nguyen TT, Phan KQ, Nguyen LT. Cellular Heterogeneity in Drug Uptake Amplifies Pharmacodynamic Variability: A Stochastic PK-PD Analysis. CPT: pharmacometrics & systems pharmacology 15(6):e70282 (2026).
  ·  DOI: [10.1002/psp4.70282](https://doi.org/10.1002/psp4.70282)

## Population and dosing

**Population:** in silico tumor-cell populations · condition cancer.

**Dosing:** 60 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h/Cobimetinib_Duong2026_model_pk_h.svg" alt="Cobimetinib_Duong2026_model_pk_h diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V/F | V/F | 806 | L |
| ka | kabs | 2.0 | h⁻1 |
| systemic clearance | CL | 35.5 | mL/min/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.273). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 2.4, model 1.43).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Extracted — cobimetinib: V/F 806 L, kabs 2 h⁻1, CL 35.5 mL/min/kg.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V/F | `Q76` · V/F | 806 | L | 0.806 | m3 | L | exact (1) | Duong_2026:other_prose |
| ka | `Q49` · kabs | 2.0 | h⁻1 | 0.0005556 | 1/s | 1/h | exact (1) | Duong_2026:other_prose |
| systemic clearance | `Q22` · CL | 35.5 | mL/min/kg | 4.142e-05 | m3/s | L/h | boundary (0.8) | Duong_2026:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Q 5' — extend the ontology if this is a real PK parameter (source ['Duong_2026_table_1:row0:col2'])
- dropped unlinked row (NIL): 'Q 10' — extend the ontology if this is a real PK parameter (source ['Duong_2026_table_1:row1:col2'])
- dropped unlinked row (NIL): 'Q 25' — extend the ontology if this is a real PK parameter (source ['Duong_2026_table_1:row2:col2'])
- dropped unlinked row (NIL): 'Q 50' — extend the ontology if this is a real PK parameter (source ['Duong_2026_table_1:row3:col2'])
- dropped unlinked row (NIL): 'Q 75' — extend the ontology if this is a real PK parameter (source ['Duong_2026_table_1:row4:col2'])
- dropped unlinked row (NIL): 'Q 90' — extend the ontology if this is a real PK parameter (source ['Duong_2026_table_1:row5:col2'])
- dropped unlinked row (NIL): 'Q 95' — extend the ontology if this is a real PK parameter (source ['Duong_2026_table_1:row6:col2'])
- table mostly unlinked (7/7 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q76 ('V/F'=806) from results prose — parameter table was unreadable
- salvaged Q49 ('ka'=2.0) from results prose — parameter table was unreadable
- salvaged Q22 ('systemic clearance'=35.5) from results prose — parameter table was unreadable
- implicit units: 'systemic clearance' → mL/min/kg (from the paper text: 'The paper states: “systemic clearance is similar between wild-type and P-gp knockout mice (35.5 vs. 22–28 mL/min/kg).”')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cobimetinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'model pk (h)' subgroup of Duong_2026 (paper reports 3 populations: model h (h), model pk (h), model pkpd (h))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.273 (3/11 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `qwen3.8-27b` | `parameters[ka]` | 2.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q 10]` |  | 187 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q 5]` |  | 171 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q 75]` |  | 308 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q 95]` |  | 532 | only_one_extracted |
| `qwen3.8-27b` | `parameters[systemic clearance]` | 35.5 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v/f]` | 806 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Duong_2026:other_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 149 L/h | ['Duong_2026:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 806 L | ['Duong_2026:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=cobimetinib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_tmax | reference | fail | 2.4 | 1.431 | 0.5963 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h/Cobimetinib_Duong2026_model_pk_h_modelica.zip" download>Cobimetinib_Duong2026_model_pk_h_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h/Cobimetinib_Duong2026_model_pk_h_fmi.zip" download>Cobimetinib_Duong2026_model_pk_h_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h/Cobimetinib_Duong2026_model_pk_h_matlab.zip" download>Cobimetinib_Duong2026_model_pk_h_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h/Cobimetinib_Duong2026_model_pk_h_matlab_simbio.zip" download>Cobimetinib_Duong2026_model_pk_h_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h/Cobimetinib_Duong2026_model_pk_h_sbml.zip" download>Cobimetinib_Duong2026_model_pk_h_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h/Cobimetinib_Duong2026_model_pk_h_cellml.zip" download>Cobimetinib_Duong2026_model_pk_h_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5313 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 6e-05 | kg |
| input | model | `Cl` | 4.142e-05 | m3/s |
| input | model | `VdPerKg` | 0.01151 | m3/kg |
| input | model | `ka` | 0.0005556 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Duong NH, Do TN, Nguyen TT, Phan KQ, Nguyen LT. Cellular Heterogeneity in Drug Uptake Amplifies Pharmacodynamic Variability: A Stochastic PK-PD Analysis. CPT: pharmacometrics & systems pharmacology 15(6):e70282 (2026). [doi:10.1002/psp4.70282](https://doi.org/10.1002/psp4.70282)

**This record:** Pharmacolibrary v26.09, model `Cobimetinib_Duong2026_model_pk_h`. <https://pharmacolibrary.github.io/#/drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h>

```bibtex
@misc{pharmacolibrary_CobimetinibDuong2026modelpkh,
  title  = {{Pharmacolibrary model Cobimetinib_Duong2026_model_pk_h}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h},
  note   = {Parameters from doi:10.1002/psp4.70282},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 60 mg, single dose, first-order absorption (ka 2 /h, F 1). Dose in the paper: 60 mg.

<dbs-fmusim paramsurl="drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h/Cobimetinib_Duong2026_model_pk_h_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h/Cobimetinib_Duong2026_model_pk_h_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Cobimetinib_Duong2026_model_pk_h_params.json` · controls `Cobimetinib_Duong2026_model_pk_h_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcobimetinib%5D%20Cobimetinib_Duong2026_model_pk_h&body=Drug%3A%20cobimetinib%0ARecord%3A%20Cobimetinib_Duong2026_model_pk_h%0APaper%3A%20Duong_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 22:54 UTC</sub>
