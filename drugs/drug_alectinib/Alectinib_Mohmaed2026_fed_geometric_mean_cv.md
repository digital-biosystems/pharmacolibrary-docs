<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;alectinib&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/&quot;},{&quot;label&quot;:&quot;Mohmaed_2026 \u00b7 fed_geometric_mean_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fasted_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fasted_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fasted_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fed_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fed_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alectinib — `Alectinib_Mohmaed2026_fed_geometric_mean_cv`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> 2H6-alectinib Cmax (78.2 pg/mL) did not match the model peak (8.44e-08 kg/m³), and the record was held back with ka defaulted.

<div class="pk-model-meta" hidden drug="alectinib" model-id="Alectinib_Mohmaed2026_fed_geometric_mean_cv" status="needs_review" stale="false" population="patients with ALK-positive non-small cell lung cancer" measured-compound="2H6-alectinib" parameterization="apparent" topology="1C"></div>

## Citation
Mohmaed Ali MI, van der Heijden LT, Tibben M, Rosing H, Kalicharan R, Ruiter G et al. Reducing the Burden of Interaction Studies in Cancer Patients Using a Stable Isotopically Labeled Microtracer: A Proof-of-Concept Study with Alectinib. Clinical pharmacology and therapeutics 119(3):713–720 (2026).
  ·  DOI: [10.1002/cpt.70141](https://doi.org/10.1002/cpt.70141)

## Population and dosing

**Population:** patients with ALK-positive non-small cell lung cancer · condition ALK-positive non-small cell lung cancer · n = 10.

**Dosing:** 0.1 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed alectinib and 2H6-alectinib, measured 2H6-alectinib.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv.svg" alt="Alectinib_Mohmaed2026_fed_geometric_mean_cv diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| C max (pg/mL) | Cmax | 78.2 | pg/mL | 28.5 |
| AUC0‐24h (pg*hour/mL) | AUCt | 980.8 | pg*hour/mL | 31.0 |
| CL/F | CL/F | 84.2 | L/h |  |
| VD/F | V/F | 776 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**2H6-alectinib Cmax (78.2 pg/mL) did not match the model peak (8.44e-08 kg/m³), and the record was held back with ka defaulted.**

The model does not reproduce the paper’s peak concentration for 2H6-alectinib (paper 7.82e-08, model 8.44e-08 kg/m³). The reported pg/mL unit could not be converted to SI, though the comparison was made between the paper value and the simulated kg/m³ value. Ka and Tlag were defaulted rather than estimated from the paper; the absorption input was therefore assumed, with apparent parameterization using F=1, Fm=1, and no molar correction. Extracted — alectinib: Cmax 78.2 pg/mL, AUCt 981 pg*hour/mL; 2H6-alectinib: CL/F 84.2 L/h, V/F 776 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of auc0‐24h: this record has 980.8, the second reading none; it also differs on 7 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| C max (pg/mL) | `Q32` · Cmax | 78.2 | pg/mL |  |  | pg/ml | 28.5 | space_fold (0.95) | Mohmaed_2026_table_3:row0:col2 |
| AUC0‐24h (pg*hour/mL) | `Q19` · AUCt | 980.8 | pg*hour/mL |  |  | (h·pg)/ml | 31.0 | llm (0.6) | Mohmaed_2026_table_3:row1:col2 |
| CL/F | `Q27` · CL/F | 84.2 | L/h | 2.339e-05 | m3/s | L/h |  | exact (1) | Mohmaed_2026:other_prose |
| VD/F | `Q76` · V/F | 776 | L | 0.776 | m3 | L |  | exact (1) | Mohmaed_2026:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- salvaged Q27 ('CL/F'=84.2) from results prose — parameter table was unreadable
- salvaged Q76 ('VD/F'=776) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=2H6-alectinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'fed geometric mean (%cv)' subgroup of Mohmaed_2026 (paper reports 3 populations: estimate, fasted geometric mean (%cv), fed geometric mean (%cv))
- molar mass: no plausible PubChem entry for '2H6-alectinib' ('no full name in the paper') — left in mass units
- molar mass: none found for '2H6-alectinib' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Mohmaed_2026_table_3:row0:col3 = '1.42 (1.16–1.76)'
- unparsed cell Mohmaed_2026_table_3:row1:col3 = '1.52 (1.25–1.89)'
- companion parameter table 3 transcribed (4 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[auc0‐24h]` | 980.8 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[c max]` | 78.2 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f]` |  | 84.2 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f]` | 84.2 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[lag time (hours)c]` |  | 1.51 | only_one_extracted |
| `qwen3.8-27b` | `parameters[mttfed]` |  | 3.14 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vd/f]` |  | 776 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vd/f]` | 776 |  | only_one_extracted |

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
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Mohmaed_2026_table_3:row1:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Mohmaed_2026_table_3:row0:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 84.2 L/h | ['Mohmaed_2026:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 776 L | ['Mohmaed_2026:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=2H6-alectinib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | pass | 7.82e-08 | 8.436e-08 | 1.079 | pg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 5.49e-08 | 8.436e-08 | 1.536 | pg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 1.42 | 8.436e-08 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.42 | 8.436e-08 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_modelica.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_fmi.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_matlab.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_matlab_simbio.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_matlab_simbio.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_sbml.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_cellml.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-07 | kg |
| input | model | `Cl` | 2.339e-05 | m3/s |
| input | model | `VdPerKg` | 0.01109 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Mohmaed Ali MI, van der Heijden LT, Tibben M, Rosing H, Kalicharan R, Ruiter G et al. Reducing the Burden of Interaction Studies in Cancer Patients Using a Stable Isotopically Labeled Microtracer: A Proof-of-Concept Study with Alectinib. Clinical pharmacology and therapeutics 119(3):713–720 (2026). [doi:10.1002/cpt.70141](https://doi.org/10.1002/cpt.70141)

**This record:** Pharmacolibrary v26.09, model `Alectinib_Mohmaed2026_fed_geometric_mean_cv`. <https://pharmacolibrary.github.io/#/drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv>

```bibtex
@misc{pharmacolibrary_AlectinibMohmaed2026fedgeometricmeancv,
  title  = {{Pharmacolibrary model Alectinib_Mohmaed2026_fed_geometric_mean_cv}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv},
  note   = {Parameters from doi:10.1002/cpt.70141},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.1 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 0.1 mg.

<dbs-fmusim paramsurl="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Alectinib_Mohmaed2026_fed_geometric_mean_cv_params.json` · controls `Alectinib_Mohmaed2026_fed_geometric_mean_cv_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balectinib%5D%20Alectinib_Mohmaed2026_fed_geometric_mean_cv&body=Drug%3A%20alectinib%0ARecord%3A%20Alectinib_Mohmaed2026_fed_geometric_mean_cv%0APaper%3A%20Mohmaed_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:15 UTC</sub>
