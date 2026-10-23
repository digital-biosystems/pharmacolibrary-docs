<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tapentadol&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/&quot;},{&quot;label&quot;:&quot;Watson_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tapentadol_Khalil2020_final&quot;,&quot;label&quot;:&quot;Khalil_2020_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tapentadol_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tapentadol — `Tapentadol_Watson2019_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:32 UTC (Needs review), but the paper was screened again on 2026-10-07 05:41 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="tapentadol" model-id="Tapentadol_Watson2019_reference" status="extracted" stale="true" population="pediatric patients (2 to &lt;18 years)" measured-compound="tapentadol" parameterization="apparent" topology="1C"></div>

## Citation
Watson E, Khandelwal A, Freijer J, van den Anker J, Lefeber C, Eerdekens M. Population pharmacokinetic modeling to facilitate dose selection of tapentadol in the pediatric population. Journal of pain research 12:2835–2850 (2019).
  ·  DOI: [10.2147/JPR.S208454](https://doi.org/10.2147/JPR.S208454)

## Population and dosing

**Population:** pediatric patients (2 to &lt;18 years) · condition acute pain · age group mixed · n = https://doi.org/10.1111/cts.12146.

**Dosing:** 70 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tapentadol/Tapentadol_Watson2019_reference/Tapentadol_Watson2019_reference.svg" alt="Tapentadol_Watson2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CL/F | 170 | L/h | 3.3 | 0.048 (32.1% RSE) |
| V/F (L) | V/F | 685 | L | 4.5 | 0.024 (61.5% RSE) |
| Ka (h−1) | kabs | 2.03 | h−1 | 16.5 | 1.99 (32.2% RSE) |
| TLAG (h) | tlag | 0.247 | h | 0.7 |  |
| theta_q319_wt_power | theta_q319_wt_power | 0.638 |  | 11.1 |  |
| theta_q319_wt_power | theta_q319_wt_power | 0.847 |  | 10.2 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tapentadol pediatric model was held back because the builder assumed F=1, Fm=1 and no molar correction (apparent parameterization), a deviation judged not acceptable, and its covariate effects were never simulated.**

The record reports tapentadol CL/F 170 L/h, V/F 685 L, Ka 2.03 h−1 and TLAG 0.247 h, with two weight-power covariate effects (0.638 and 0.847). The model builder substituted F=1, Fm=1 and no molar correction, making all parameters apparent, and this apparent assumption was ruled not acceptable. The covariate scenarios were not simulated: only the reference individual was simulated, so the defined covariate effects were not exercised. This is a deviation-based hold for review, not a refusal on parameter values themselves. Extracted — tapentadol: CL/F 170 L/h, V/F 685 L, kabs 2.03 h−1, tlag 0.247 h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 170 | L/h | 4.722e-05 | m3/s | l/h | 3.3 | exact (1) | T0005:row2:col1, T0005:row2:col2, T0005:row2:col3, T0005:row2:col4 | 0.048 (32.1% RSE) |
| V/F (L) | `Q76` · V/F | 685 | L | 0.685 | m3 | l | 4.5 | exact (1) | T0005:row3:col1, T0005:row3:col2, T0005:row3:col3, T0005:row3:col4 | 0.024 (61.5% RSE) |
| Ka (h−1) | `Q49` · kabs | 2.03 | h−1 | 0.0005639 | 1/s | 1/h | 16.5 | exact (1) | T0005:row4:col1, T0005:row4:col2, T0005:row4:col3, T0005:row4:col4 | 1.99 (32.2% RSE) |
| TLAG (h) | `Q83` · tlag | 0.247 | h | 889.2 | s | h | 0.7 | exact (1) | T0005:row5:col1, T0005:row5:col2, T0005:row5:col3, T0005:row5:col4 |  |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.638 |  |  |  |  | 11.1 |  | T0005:row6:col1, T0005:row6:col2, T0005:row6:col3, T0005:row6:col4 |  |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.847 |  |  |  |  | 10.2 |  | T0005:row7:col1, T0005:row7:col2, T0005:row7:col3, T0005:row7:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'NONMEM' — extend the ontology if this is a real PK parameter (source ['T0005:row1:col1'])
- routed 'Cov CL/F-V/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Cov CL/F-Ka' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Cov V/F-Ka' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tapentadol
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (14/14 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T0005:row2:col1', 'T0005:row2:col2', 'T0005:row2:col3', 'T0005:row2:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T0005:row4:col1', 'T0005:row4:col2', 'T0005:row4:col3', 'T0005:row4:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['T0005:row3:col1', 'T0005:row3:col2', 'T0005:row3:col3', 'T0005:row3:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['T0005:row5:col1', 'T0005:row5:col2', 'T0005:row5:col3', 'T0005:row5:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 170 L/h | ['T0005:row2:col1', 'T0005:row2:col2', 'T0005:row2:col3', 'T0005:row2:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 685 L | ['T0005:row3:col1', 'T0005:row3:col2', 'T0005:row3:col3', 'T0005:row3:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=tapentadol) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tapentadol/Tapentadol_Watson2019_reference/Tapentadol_Watson2019_reference_modelica.zip" download>Tapentadol_Watson2019_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tapentadol/Tapentadol_Watson2019_reference/Tapentadol_Watson2019_reference_fmi.zip" download>Tapentadol_Watson2019_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Watson2019_reference/Tapentadol_Watson2019_reference_matlab.zip" download>Tapentadol_Watson2019_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Watson2019_reference/Tapentadol_Watson2019_reference_matlab_simbio.zip" download>Tapentadol_Watson2019_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Watson2019_reference/Tapentadol_Watson2019_reference_sbml.zip" download>Tapentadol_Watson2019_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Watson2019_reference/Tapentadol_Watson2019_reference_cellml.zip" download>Tapentadol_Watson2019_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2213 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 889.2 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-05 | kg |
| input | model | `Cl` | 4.722e-05 | m3/s |
| input | model | `VdPerKg` | 0.009786 | m3/kg |
| input | model | `ka` | 0.0005639 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Watson E, Khandelwal A, Freijer J, van den Anker J, Lefeber C, Eerdekens M. Population pharmacokinetic modeling to facilitate dose selection of tapentadol in the pediatric population. Journal of pain research 12:2835–2850 (2019). [doi:10.2147/JPR.S208454](https://doi.org/10.2147/JPR.S208454)

**This record:** Pharmacolibrary v26.09, model `Tapentadol_Watson2019_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_tapentadol/Tapentadol_Watson2019_reference>

```bibtex
@misc{pharmacolibrary_TapentadolWatson2019reference,
  title  = {{Pharmacolibrary model Tapentadol_Watson2019_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tapentadol/Tapentadol_Watson2019_reference},
  note   = {Parameters from doi:10.2147/JPR.S208454},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 70 mg, single dose, first-order absorption (ka 2.03 /h, lag 14.8 min, F 1). Dose in the paper: 70 mg.

<dbs-fmusim paramsurl="drugs/drug_tapentadol/Tapentadol_Watson2019_reference/Tapentadol_Watson2019_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tapentadol/Tapentadol_Watson2019_reference/Tapentadol_Watson2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tapentadol_Watson2019_reference_params.json` · controls `Tapentadol_Watson2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btapentadol%5D%20Tapentadol_Watson2019_reference&body=Drug%3A%20tapentadol%0ARecord%3A%20Tapentadol_Watson2019_reference%0APaper%3A%20Watson_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tapentadol/Tapentadol_Watson2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:41 UTC</sub>
