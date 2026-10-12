<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefaclor&quot;,&quot;href&quot;:&quot;drugs/drug_cefaclor/&quot;},{&quot;label&quot;:&quot;Jeong_2021 \u00b7 estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefaclor_Jeong2021_estimate&quot;,&quot;label&quot;:&quot;Jeong_2021_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefaclor/Cefaclor_Jeong2021_estimate.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefaclor_Jeong2021_estimates&quot;,&quot;label&quot;:&quot;Jeong_2021_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cefaclor_Li2009_reference&quot;,&quot;label&quot;:&quot;Li_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefaclor/Cefaclor_Li2009_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefaclor — `Cefaclor_Jeong2021_estimates`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Cefaclor model failed Cmax verification and used default absorption parameters not reported in the paper.**

The simulated peak concentration differed from the paper's 7.87 µg/mL, with a ratio of 0.2965. Absorption rate constant and lag time were left at defaults rather than using estimates from the source. The model also assumed full bioavailability without explicit justification. Extracted — cefaclor: AUCt 9.64 µg·h/mL, AUC∞ 9.83 µg·h/mL, CL/F 2.72e+04 mL/h, Cmax 7.87 µg/mL, t1/2z 0.68 h, tmax 0.8 h, V/F 2.61e+04 mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cefaclor, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Jeong SH et al., Population Pharmacokinetic Analysis of…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13050754](https://doi.org/10.3390/pharmaceutics13050754)

<div class="pk-model-meta" hidden drug="cefaclor" model-id="Cefaclor_Jeong2021_estimates" status="needs_review" stale="false" population="healthy adults" measured-compound="cefaclor" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC0–t | `Q19` · AUCt | 9.64 | µg·h/mL | not captured | µg·h/mL | not captured | exact (1.0) | Jeong_2021_table_2:row0:col2 | — | not captured |
| AUC0–∞ | `Q17` · AUC∞ | 9.83 | µg·h/mL | not captured | µg·h/mL | not captured | exact (1.0) | Jeong_2021_table_2:row1:col2 | — | not captured |
| CL/F | `Q27` · CL/F | 27188.46 | mL/h | 7.552349999999999e-06 | L/h | not captured | exact (1.0) | Jeong_2021_table_2:row2:col2 | — | not captured |
| Cmax | `Q32` · Cmax | 7.87 | µg/mL | not captured | µg/mL | not captured | exact (1.0) | Jeong_2021_table_2:row3:col2 | — | not captured |
| T1/2 | `Q57` · t1/2z | 0.68 | h | 2448.0 | h | not captured | exact (1.0) | Jeong_2021_table_2:row4:col2 | — | not captured |
| Tmax | `Q56` · tmax | 0.80 | h | 2880.0 | h | not captured | exact (1.0) | Jeong_2021_table_2:row5:col2 | — | not captured |
| V/F | `Q76` · V/F | 26116.39 | mL | 0.02611639 | L | not captured | exact (1.0) | Jeong_2021_table_2:row6:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- column 'estimates' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- implicit units: 'AUC0–t' → µg·h/mL (from the paper text: 'The paper states the mean Cmax is 7.87 µg/mL and discusses the LLOQ in µg/mL, establishing the concentration unit for ce')
- implicit units: 'AUC0–∞' → µg·h/mL (from the paper text: 'The paper states the mean Cmax is 7.87 µg/mL, establishing the concentration unit. AUC0–∞ is calculated from AUC0–t and ')
- implicit units: 'CL/F' → mL/h (from the paper text: "The text explicitly states: 'In addition, a very large CL/F value of 27188.46 mL/h suggested a widespread loss of cefacl")
- implicit units: 'Cmax' → µg/mL (from the paper text: "The text explicitly states: '...and the mean Cmax value of cefaclor was high at 7.87 µg/mL.'")
- implicit units: 'T1/2' → h (from the paper text: "The text explicitly states: 'The average T1/2 value was very short at 0.68 h...'")
- implicit units: 'Tmax' → h (from the paper text: "The text explicitly states: '...and the Tmax was fast at 0.80 h...'")
- implicit units: 'V/F' → mL (from the paper text: "The text states: '...V/F and CL/F values calculated by non-compartmental analysis were 26,116.39 ± 7820.88 mL (mean ± SD")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cefaclor
- population split: 'estimates' subgroup of Jeong_2021 (paper reports 2 populations: estimate, estimates)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 2 transcribed (7 record(s))
- LLM selected parameter table(s) 2, 5
- dropped sensitivity-analysis table(s) 6 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | cefaclor | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cefaclor | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Jeong_2021_table_2:row1:col2'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Jeong_2021_table_2:row0:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jeong_2021_table_2:row2:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Jeong_2021_table_2:row3:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Jeong_2021_table_2:row5:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Jeong_2021_table_2:row4:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jeong_2021_table_2:row6:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 27.2 L/h | not captured | not captured | ['Jeong_2021_table_2:row2:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 26.1 L | not captured | not captured | ['Jeong_2021_table_2:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=cefaclor) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 0.0023330646008419853 | not captured | non-numeric value |
| T1_cmax | reference | fail | 0.00787 | 0.0023330646008419853 | 0.2965 | µg/mL→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | skipped | not captured | 1.3980156529661434 | not captured | non-numeric value |
| T1_tmax | reference | skipped | not captured | 1.4575520016685033 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_cefaclor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jeong_2021` / `Jeong_2021::estimates`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_cefaclor/models/modelica/Cefaclor_Jeong2021_estimates.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_cefaclor/models/modelica/Cefaclor_Jeong2021_estimates.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_cefaclor/models/modelica/Cefaclor_Jeong2021_estimates.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates/Cefaclor_Jeong2021_estimates_modelica.zip" download>Cefaclor_Jeong2021_estimates_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates/Cefaclor_Jeong2021_estimates_fmi.zip" download>Cefaclor_Jeong2021_estimates_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates/Cefaclor_Jeong2021_estimates_matlab.zip" download>Cefaclor_Jeong2021_estimates_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates/Cefaclor_Jeong2021_estimates_matlab_simbio.zip" download>Cefaclor_Jeong2021_estimates_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates/Cefaclor_Jeong2021_estimates_sbml.zip" download>Cefaclor_Jeong2021_estimates_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates/Cefaclor_Jeong2021_estimates_cellml.zip" download>Cefaclor_Jeong2021_estimates_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates/Cefaclor_Jeong2021_estimates.svg" alt="Cefaclor_Jeong2021_estimates diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 250 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 250 mg.

<dbs-fmusim paramsurl="drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates/Cefaclor_Jeong2021_estimates_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates/Cefaclor_Jeong2021_estimates_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Cefaclor_Jeong2021_estimates_params.json` · controls `Cefaclor_Jeong2021_estimates_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:34 UTC</sub>
