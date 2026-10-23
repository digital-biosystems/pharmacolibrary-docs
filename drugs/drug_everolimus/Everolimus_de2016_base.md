<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;everolimus&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/&quot;},{&quot;label&quot;:&quot;de_2016 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Everolimus_Hirabatake2022_reference&quot;,&quot;label&quot;:&quot;Hirabatake_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_Hirabatake2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Everolimus_Moes2012_reference&quot;,&quot;label&quot;:&quot;Moes_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_Moes2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Everolimus_Sakaue2024_base&quot;,&quot;label&quot;:&quot;Sakaue_2024_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_Sakaue2024_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Everolimus_Sakaue2024_final&quot;,&quot;label&quot;:&quot;Sakaue_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_Sakaue2024_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Everolimus_de2016_base&quot;,&quot;label&quot;:&quot;de_2016_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_de2016_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Everolimus_de2016_final&quot;,&quot;label&quot;:&quot;de_2016_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_de2016_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# everolimus — `Everolimus_de2016_base`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="everolimus" model-id="Everolimus_de2016_base" status="curated_candidate" stale="false" population="patients with advanced thyroid carcinoma" measured-compound="everolimus" parameterization="apparent" topology="2C"></div>

## Citation
de Wit D, Schneider TC, Moes DJ, Roozen CF, den Hartigh J, Gelderblom H et al. Everolimus pharmacokinetics and its exposure-toxicity relationship in patients with thyroid cancer. Cancer chemotherapy and pharmacology 78(1):63–71 (2016).
  ·  DOI: [10.1007/s00280-016-3050-6](https://doi.org/10.1007/s00280-016-3050-6)

## Population and dosing

**Population:** patients with advanced thyroid carcinoma · condition advanced thyroid carcinoma · age group adult · n = 40.

**Dosing:** 5, 10 mg, oral, multiple.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_everolimus/Everolimus_de2016_base/Everolimus_de2016_base.svg" alt="Everolimus_de2016_base diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Cl/F (L/h) | CL/F | 20.3 | L/h |
| F | Fab | 1 |  |
| V 1/F (L) | V1/F | 29.1 | L |
| k a (h−1) | kabs | 0.643 | h−1 |
| Q (L/h) | Q | 60 | L/h |
| V 2 (L) | V2 | 475 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Independently confirmed by `qwen3.8-27b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cl/F (L/h) | `Q27` · CL/F | 20.3 | L/h | 5.639e-06 | m3/s | l/h | exact (1) | Tab2:row2:col1, Tab2:row2:col2 |
| F | `Q40` · Fab | 1 |  |  |  |  | exact (1) | Tab2:row3:col1 |
| V 1/F (L) | `Q290` · V1/F | 29.1 | L | 0.0291 | m3 | l | space_fold (0.95) | Tab2:row4:col1, Tab2:row4:col2 |
| k a (h−1) | `Q49` · kabs | 0.643 | h−1 | 0.0001786 | 1/s | 1/h | space_fold (0.95) | Tab2:row5:col1, Tab2:row5:col2 |
| Q (L/h) | `Q30` · Q | 60 | L/h | 1.667e-05 | m3/s | l/h | exact (1) | Tab2:row6:col1, Tab2:row6:col2 |
| V 2 (L) | `Q64` · V2 | 475 | L | 0.475 | m3 | l | space_fold (0.95) | Tab2:row7:col1, Tab2:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'Cl/F (CV%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'V 1/F (CV%)' routed out of structural estimates ('Inter-individual variability')
- table section iov: 'F (CV%)' routed out of structural estimates ('Inter-occasion variability')
- table section residual_error: 'σ (proportional error)' routed out of structural estimates ('Residual variability')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=everolimus
- model-stage split: 'base model' is the base model of de_2016 (paper reports 2 stages: base model, final model); same population, different model-building step
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row8:col5 = '6.5 %'
- unparsed cell Tab2:row10:col1 = '38.1 %'
- unparsed cell Tab2:row10:col4 = '35.1 %'
- unparsed cell Tab2:row10:col7 = '35.0 %'
- unparsed cell Tab2:row10:col8 = '22.1–49.1 %'
- unparsed cell Tab2:row11:col1 = '87.3 %'
- unparsed cell Tab2:row11:col4 = '86.4 %'
- unparsed cell Tab2:row11:col7 = '90.5 %'
- unparsed cell Tab2:row11:col8 = '53.7–138.9 %'
- unparsed cell Tab2:row13:col1 = '20.7 %'
- unparsed cell Tab2:row13:col4 = '19.2 %'
- unparsed cell Tab2:row13:col7 = '19.4 %'
- unparsed cell Tab2:row13:col8 = '12.9–30.5 %'
- unparsed cell Tab2:row15:col1 = '27.2 %'
- unparsed cell Tab2:row15:col4 = '27.3 %'
- unparsed cell Tab2:row15:col7 = '27.9 %'
- unparsed cell Tab2:row15:col8 = '22.6–32.9 %'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | confirmed | 1.0 (11/11 fields) | none |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row6:col1', 'Tab2:row6:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row5:col1', 'Tab2:row5:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row7:col1', 'Tab2:row7:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 20.3 L/h | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 29.1 L | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 475 L | ['Tab2:row7:col1', 'Tab2:row7:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=everolimus) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmin_ss | reference | skipped | −6.5 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_everolimus/Everolimus_de2016_base/Everolimus_de2016_base_modelica.zip" download>Everolimus_de2016_base_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_everolimus/Everolimus_de2016_base/Everolimus_de2016_base_fmi.zip" download>Everolimus_de2016_base_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_everolimus/Everolimus_de2016_base/Everolimus_de2016_base_matlab.zip" download>Everolimus_de2016_base_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_everolimus/Everolimus_de2016_base/Everolimus_de2016_base_matlab_simbio.zip" download>Everolimus_de2016_base_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_everolimus/Everolimus_de2016_base/Everolimus_de2016_base_sbml.zip" download>Everolimus_de2016_base_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_everolimus/Everolimus_de2016_base/Everolimus_de2016_base_cellml.zip" download>Everolimus_de2016_base_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.9582 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-06 | kg |
| input | model | `Cl` | 5.639e-06 | m3/s |
| input | model | `VdPerKg` | 0.0004157 | m3/kg |
| input | model | `k12` | 0.0005727 | 1/s |
| input | model | `k21` | 3.509e-05 | 1/s |
| input | model | `ka` | 0.0001786 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): de Wit D, Schneider TC, Moes DJ, Roozen CF, den Hartigh J, Gelderblom H et al. Everolimus pharmacokinetics and its exposure-toxicity relationship in patients with thyroid cancer. Cancer chemotherapy and pharmacology 78(1):63–71 (2016). [doi:10.1007/s00280-016-3050-6](https://doi.org/10.1007/s00280-016-3050-6)

**This record:** Pharmacolibrary v26.09, model `Everolimus_de2016_base`. <https://pharmacolibrary.github.io/#/drugs/drug_everolimus/Everolimus_de2016_base>

```bibtex
@misc{pharmacolibrary_Everolimusde2016base,
  title  = {{Pharmacolibrary model Everolimus_de2016_base}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_everolimus/Everolimus_de2016_base},
  note   = {Parameters from doi:10.1007/s00280-016-3050-6},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 0.643 /h, F 1). Doses in the paper: 5, 10 mg.

<dbs-fmusim paramsurl="drugs/drug_everolimus/Everolimus_de2016_base/Everolimus_de2016_base_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_everolimus/Everolimus_de2016_base/Everolimus_de2016_base_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Everolimus_de2016_base_params.json` · controls `Everolimus_de2016_base_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beverolimus%5D%20Everolimus_de2016_base&body=Drug%3A%20everolimus%0ARecord%3A%20Everolimus_de2016_base%0APaper%3A%20de_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_everolimus/Everolimus_de2016_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:32 UTC</sub>
