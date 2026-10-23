<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tapentadol&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/&quot;},{&quot;label&quot;:&quot;Khalil_2020 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tapentadol_Khalil2020_final&quot;,&quot;label&quot;:&quot;Khalil_2020_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tapentadol_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tapentadol — `Tapentadol_Khalil2020_final`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-10-05 09:32 UTC) predates the latest extraction (2026-10-07 05:41 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="tapentadol" model-id="Tapentadol_Khalil2020_final" status="extracted" stale="true" population="children from birth to &lt;18 years old with acute pain" measured-compound="tapentadol" parameterization="mechanistic" topology="1C"></div>

## Citation
Khalil F, Choi SL, Watson E, Tzschentke TM, Lefeber C, Eerdekens M et al. Population Pharmacokinetics of Tapentadol in Children from Birth to &lt;18 Years Old. Journal of pain research 13:3107–3123 (2020).
  ·  DOI: [10.2147/JPR.S269549](https://doi.org/10.2147/JPR.S269549)

## Population and dosing

**Population:** children from birth to &lt;18 years old with acute pain · condition acute pain · age group mixed · n = 148.

**Dosing:** 21, 35, 42, 52.5, 70, 87.5 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final.svg" alt="Tapentadol_Khalil2020_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h) | CL | 45.9 | L/h | 0.053 (None% RSE) |
| V (L) | V | 188 | L | 0.039 (None% RSE) |
| Ka (h−1) | kabs | 1.64 | h−1 | 1.020 (None% RSE) |
| F | Fab | 0.195 |  |  |
| TLAG (h) | tlag | 0.257 | h |  |
| k (wks −1) | kel | 0.013 | 1/week |  |
| theta_q325_weight_power | theta_q325_weight_power | 1 |  |  |
| theta_q319_wt_power | theta_q319_wt_power | 0.42 |  |  |
| theta_q319_wt_power | theta_q319_wt_power | 0.68 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kel has no unit; the clearance plausibility check could not be computed.**

Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — tapentadol: CL 94.6 L/h, V 414 L, kabs 2.19 h−1, Fab 0.349, tlag 0.266 h, kel 0.122 wks −1.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 45.9 | L/h | 1.275e-05 | m3/s | l/h | exact (1) | t0003:row2:col4, t0003:row2:col5, t0003:row2:col6 | 0.053 (None% RSE) |
| V (L) | `Q61` · V | 188 | L | 0.188 | m3 | l | exact (1) | t0003:row3:col4, t0003:row3:col5, t0003:row3:col6 | 0.039 (None% RSE) |
| Ka (h−1) | `Q49` · kabs | 1.64 | h−1 | 0.0004556 | 1/s | 1/h | exact (1) | t0003:row4:col4, t0003:row4:col5, t0003:row4:col6 | 1.020 (None% RSE) |
| F | `Q40` · Fab | 0.195 |  |  |  |  | exact (1) | t0003:row5:col4, t0003:row5:col5, t0003:row5:col6 |  |
| TLAG (h) | `Q83` · tlag | 0.257 | h | 925.2 | s | h | exact (1) | t0003:row6:col4, t0003:row6:col5, t0003:row6:col6 |  |
| k (wks −1) | `Q47` · kel | 0.013 | 1/week |  |  | 1/week | exact (1) | t0003:row9:col4, t0003:row9:col5, t0003:row9:col6 |  |
| theta_q325_weight_power | `Q900` · theta_q325_weight_power | 1 |  |  |  |  |  | t0003:row8:col4 |  |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.42 |  |  |  |  |  | t0003:row10:col4, t0003:row10:col5, t0003:row10:col6 |  |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.68 |  |  |  |  |  | t0003:row11:col4, t0003:row11:col5, t0003:row11:col6 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Pop. Estimate' — extend the ontology if this is a real PK parameter (source ['t0003:row1:col5'])
- dropped unlinked row (NIL): 'PMA50 (wks)' — extend the ontology if this is a real PK parameter (source ['t0003:row7:col4', 't0003:row7:col5', 't0003:row7:col6'])
- unit_dimension_unknown: 'wks −1' (kel)
- dropped duplicate Q22 ('Cov CL-V', value '0.031') — already have one for this compound
- covariate effect for Q325 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'k (wks −1)' → 1/week (from the paper text: "The parameter string provided in the input is 'k (wks −1) = 0.013', which explicitly states the unit as 'wks −1' (invers")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tapentadol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- model-stage split: 'final model with estimated exponents' is the final model of Khalil_2020 (paper reports 2 stages: final model with estimated exponents, final model with fixed exponents); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell t0003:row12:col2 = '21.1(15.9% shrinkage)'
- unparsed cell t0003:row12:col5 = '20(16.9% shrinkage)'
- unparsed cell t0003:row13:col2 = '30.5(22.4% shrinkage)'
- unparsed cell t0003:row13:col5 = '34.6(24.1% shrinkage)'
- unparsed cell t0003:row14:col2 = '27.9(26.8% shrinkage)'
- unparsed cell t0003:row14:col5 = '28.7(26.6% shrinkage)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (13/13 fields) | none |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0003:row2:col4', 't0003:row2:col5', 't0003:row2:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['t0003:row9:col4', 't0003:row9:col5', 't0003:row9:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['t0003:row4:col4', 't0003:row4:col5', 't0003:row4:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['t0003:row3:col4', 't0003:row3:col5', 't0003:row3:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['t0003:row6:col4', 't0003:row6:col5', 't0003:row6:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 45.9 | ['t0003:row2:col4', 't0003:row2:col5', 't0003:row2:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 45.9 L/h | ['t0003:row2:col4', 't0003:row2:col5', 't0003:row2:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 188 L | ['t0003:row3:col4', 't0003:row3:col5', 't0003:row3:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final_modelica.zip" download>Tapentadol_Khalil2020_final_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final_fmi.zip" download>Tapentadol_Khalil2020_final_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final_matlab.zip" download>Tapentadol_Khalil2020_final_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final_matlab_simbio.zip" download>Tapentadol_Khalil2020_final_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final_sbml.zip" download>Tapentadol_Khalil2020_final_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final_cellml.zip" download>Tapentadol_Khalil2020_final_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2213 | kg/mol |
| input | dosing | `F` | 0.195 | 1 |
| input | dosing | `Tlag` | 925.2 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.1e-05 | kg |
| input | model | `Cl` | 1.275e-05 | m3/s |
| input | model | `VdPerKg` | 0.002686 | m3/kg |
| input | model | `ka` | 0.0004556 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Khalil F, Choi SL, Watson E, Tzschentke TM, Lefeber C, Eerdekens M et al. Population Pharmacokinetics of Tapentadol in Children from Birth to &lt;18 Years Old. Journal of pain research 13:3107–3123 (2020). [doi:10.2147/JPR.S269549](https://doi.org/10.2147/JPR.S269549)

**This record:** Pharmacolibrary v26.09, model `Tapentadol_Khalil2020_final`. <https://pharmacolibrary.github.io/#/drugs/drug_tapentadol/Tapentadol_Khalil2020_final>

```bibtex
@misc{pharmacolibrary_TapentadolKhalil2020final,
  title  = {{Pharmacolibrary model Tapentadol_Khalil2020_final}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tapentadol/Tapentadol_Khalil2020_final},
  note   = {Parameters from doi:10.2147/JPR.S269549},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 21 mg, single dose, first-order absorption (ka 1.64 /h, lag 15.4 min, F 0.195). Doses in the paper: 21, 35, 42, 52.5, 70, 87.5 mg.

<dbs-fmusim paramsurl="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tapentadol_Khalil2020_final_params.json` · controls `Tapentadol_Khalil2020_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btapentadol%5D%20Tapentadol_Khalil2020_final&body=Drug%3A%20tapentadol%0ARecord%3A%20Tapentadol_Khalil2020_final%0APaper%3A%20Khalil_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tapentadol/Tapentadol_Khalil2020_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:41 UTC</sub>
