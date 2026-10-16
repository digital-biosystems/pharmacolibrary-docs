<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tapentadol&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/&quot;},{&quot;label&quot;:&quot;Khalil_2020 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tapentadol_Khalil2020_final&quot;,&quot;label&quot;:&quot;Khalil_2020_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tapentadol_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tapentadol — `Tapentadol_Khalil2020_final`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.462). Primary extraction retained.">cross-check: disputed 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Kel has no unit; the clearance plausibility check could not be computed.**

Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — tapentadol: CL 94.6 L/h, V 414 L, kabs 2.19 h−1, Fab 0.349, tlag 0.266 h, kel 0.122 wks −1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on bioavailability: this record has 0.349, the second reading 0.283; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:32:00.561531+00:00) predates the upstream re-run (2026-10-07 05:41:35.831045+00:00). Current validate status: `extracted`.

## Citation
Khalil F et al., Population Pharmacokinetics of Tapentad…, Journal of pain research (2020)
  ·  DOI: [10.2147/JPR.S269549](https://doi.org/10.2147/JPR.S269549)

<div class="pk-model-meta" hidden drug="tapentadol" model-id="Tapentadol_Khalil2020_final" status="extracted" stale="true" population="children from birth to &lt;18 years old with acute pain" measured-compound="tapentadol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 45.9 | L/h | 1.2749999999999998e-05 | [l] / [h] | not captured | exact (1.0) | t0003:row2:col4, t0003:row2:col5, t0003:row2:col6 | — | 0.053 (None% RSE) |
| V (L) | `Q61` · V | 188 | L | 0.188 | [l] | not captured | exact (1.0) | t0003:row3:col4, t0003:row3:col5, t0003:row3:col6 | — | 0.039 (None% RSE) |
| Ka (h−1) | `Q49` · kabs | 1.64 | h−1 | 0.0004555555555555555 | [1] / [h] | not captured | exact (1.0) | t0003:row4:col4, t0003:row4:col5, t0003:row4:col6 | — | 1.020 (None% RSE) |
| F | `Q40` · Fab | 0.195 | not captured | not captured | not captured | not captured | exact (1.0) | t0003:row5:col4, t0003:row5:col5, t0003:row5:col6 | — | not captured |
| TLAG (h) | `Q83` · tlag | 0.257 | h | 925.2 | [h] | not captured | exact (1.0) | t0003:row6:col4, t0003:row6:col5, t0003:row6:col6 | — | not captured |
| k (wks −1) | `Q47` · kel | 0.013 | 1/week | not captured | 1/week | not captured | exact (1.0) | t0003:row9:col4, t0003:row9:col5, t0003:row9:col6 | — | not captured |
| theta_q325_weight_power | `Q900` · theta_q325_weight_power | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | t0003:row8:col4 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.42 | not captured | not captured | not captured | not captured | not captured (not captured) | t0003:row10:col4, t0003:row10:col5, t0003:row10:col6 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.68 | not captured | not captured | not captured | not captured | not captured (not captured) | t0003:row11:col4, t0003:row11:col5, t0003:row11:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (13/13 fields) | none |
| `gpt-oss:120b` | not confirmed | 0.462 (6/13 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.bioavailability.theta` | 0.349 | 0.283 | mismatch |
| `gpt-oss:120b` | `parameters[cl].value` | 94.6 | 76.6 | mismatch |
| `gpt-oss:120b` | `parameters[f].value` | 0.349 | 0.283 | mismatch |
| `gpt-oss:120b` | `parameters[k].value` | 0.122 | 0.068 | mismatch |
| `gpt-oss:120b` | `parameters[ka].value` | 2.19 | 1.65 | mismatch |
| `gpt-oss:120b` | `parameters[tlag].value` | 0.266 | 0.245 | mismatch |
| `gpt-oss:120b` | `parameters[v].value` | 414 | 342 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0003:row2:col4', 't0003:row2:col5', 't0003:row2:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['t0003:row9:col4', 't0003:row9:col5', 't0003:row9:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['t0003:row4:col4', 't0003:row4:col5', 't0003:row4:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['t0003:row3:col4', 't0003:row3:col5', 't0003:row3:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['t0003:row6:col4', 't0003:row6:col5', 't0003:row6:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 45.9 | not captured | not captured | ['t0003:row2:col4', 't0003:row2:col5', 't0003:row2:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 45.9 L/h | not captured | not captured | ['t0003:row2:col4', 't0003:row2:col5', 't0003:row2:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 188 L | not captured | not captured | ['t0003:row3:col4', 't0003:row3:col5', 't0003:row3:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tapentadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Khalil_2020` / `Khalil_2020::final`)


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
</div><figure class="pk-models-diagram"><img src="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final.svg" alt="Tapentadol_Khalil2020_final diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 21 mg, single dose, first-order absorption (ka 1.64 /h, lag 15.4 min, F 0.195). Doses in the paper: 21, 35, 42, 52.5, 70, 87.5 mg.

<dbs-fmusim paramsurl="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tapentadol/Tapentadol_Khalil2020_final/Tapentadol_Khalil2020_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tapentadol_Khalil2020_final_params.json` · controls `Tapentadol_Khalil2020_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:41 UTC</sub>
