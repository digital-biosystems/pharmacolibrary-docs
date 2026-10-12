<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;darunavir&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/&quot;},{&quot;label&quot;:&quot;Stillemans_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Darunavir_Courlet2021_reference&quot;,&quot;label&quot;:&quot;Courlet_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/Darunavir_Courlet2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Darunavir_Stillemans2021_reference&quot;,&quot;label&quot;:&quot;Stillemans_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_darunavir/Darunavir_Stillemans2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# darunavir — `Darunavir_Stillemans2021_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f].covariate_forms`: this record has ['linear_fractional'], the second reading none; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `accepted_with_caveats` (reviewed 2026-10-07 14:19:57.216321+00:00) predates the upstream re-run (2026-10-07 15:42:48.741970+00:00). Current validate status: `extracted`.

## Citation
Stillemans G et al., Exploration of Reduced Doses and Short-…, Clinical pharmacokinetics (2021)
  ·  DOI: [10.1007/s40262-020-00920-z](https://doi.org/10.1007/s40262-020-00920-z)

## Model component
<dbs-pgx drug="darunavir" model-id="Darunavir_Stillemans2021_reference" status="extracted" stale="true" population="adults with HIV-1 infection" measured-compound="darunavir" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L·h−1) | `Q27` · CL/F | 12.9 | L·h−1 | 3.5833333333333335e-06 | [l] / [h] | 5.3 | exact (1.0) | Tab3:row2:col1, Tab3:row2:col2 | — | not captured |
| V/F (L) | `Q76` · V/F | 152 | L | 0.152 | [l] | 21.1 | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2 | — | not captured |
| ka (h−1) | `Q49` · kabs | 0.68 | h−1 | 0.0001888888888888889 | [1] / [h] | 73.5 | exact (1.0) | Tab3:row6:col1, Tab3:row6:col2 | — | not captured |
| slco3a1_g_gt_t_on_v | `Q900` · slco3a1_g_gt_t_on_v | 0.81 | not captured | not captured | not captured | 59.5 | not captured (not captured) | Tab3:row12:col1, Tab3:row12:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'σexponential (SD)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σadditive (SD)' routed out of structural estimates ('Residual variability')
- dropped value-less row: 'AAG on CL'
- dropped value-less row: 'AAG on V'
- dropped value-less row: 'Female sex on CL'
- covariate level 'SLCO3A1 G &gt; T on V' → Q900:slco3a1_g_gt_t_on_v = 0.81 (linear_fractional on Q27)
- dropped value-less row: 'CYP3A5*3 on CL'
- dropped value-less row: 'AAG'
- dropped value-less row: 'α1-acid glycoprotein'
- dropped value-less row: 'CI'
- dropped value-less row: 'confidence interval'
- dropped value-less row: 'CL'
- dropped value-less row: 'clearance'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'apparent clearance'
- dropped value-less row: 'ka'
- dropped value-less row: 'absorption rate constant'
- dropped value-less row: 'RSE'
- dropped value-less row: 'relative standard error (= standard error/parameter absolute value)'
- dropped value-less row: 'SD'
- dropped value-less row: 'standard deviation'
- dropped value-less row: 'V'
- dropped value-less row: 'volume of distribution'
- dropped value-less row: 'V/F'
- dropped value-less row: 'apparent volume of distribution'
- dropped value-less row: 'ω'
- dropped value-less row: 'random effect (inter-individual variability)'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=darunavir
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row2:col3 = '11.3, 14.4'
- unparsed cell Tab3:row3:col3 = '0.08, 0.28'
- unparsed cell Tab3:row4:col3 = '107, 170'
- unparsed cell Tab3:row5:col3 = '0.05, 0.39'
- unparsed cell Tab3:row6:col3 = '0.3, 1.2'
- unparsed cell Tab3:row7:col3 = '0.52, 1.86'
- unparsed cell Tab3:row9:col1 = '− 0.61'
- unparsed cell Tab3:row9:col3 = '− 0.72, − 0.43'
- unparsed cell Tab3:row10:col1 = '− 0.68'
- unparsed cell Tab3:row10:col3 = '− 0.74, − 0.31'
- unparsed cell Tab3:row11:col1 = '− 0.21'
- unparsed cell Tab3:row11:col3 = '− 0.31, − 0.08'
- unparsed cell Tab3:row12:col3 = '0.34, 2.23'
- unparsed cell Tab3:row13:col1 = '− 0.16'
- unparsed cell Tab3:row13:col3 = '− 0.28, − 0.05'
- unparsed cell Tab3:row15:col3 = '0.15, 0.32'
- unparsed cell Tab3:row16:col3 = '0.45, 0.97'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[slco3a1_g_gt_t_on_v]` | 0.81 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_slco3a1]` | not captured | 0.81 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 12.9 L/h | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 152 L | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=darunavir) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_darunavir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Stillemans_2021` / `Stillemans_2021::reference`)
- model: `../../../knowledgebase/drugs/drug_darunavir/models/modelica/Darunavir_Stillemans2021_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_darunavir/models/modelica/Darunavir_Stillemans2021_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_darunavir/models/modelica/Darunavir_Stillemans2021_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_darunavir/Darunavir_Stillemans2021_reference/Darunavir_Stillemans2021_reference_modelica.zip" download>Darunavir_Stillemans2021_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_darunavir/Darunavir_Stillemans2021_reference/Darunavir_Stillemans2021_reference_fmi.zip" download>Darunavir_Stillemans2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_darunavir/Darunavir_Stillemans2021_reference/Darunavir_Stillemans2021_reference_matlab.zip" download>Darunavir_Stillemans2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_darunavir/Darunavir_Stillemans2021_reference/Darunavir_Stillemans2021_reference_matlab_simbio.zip" download>Darunavir_Stillemans2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_darunavir/Darunavir_Stillemans2021_reference/Darunavir_Stillemans2021_reference_sbml.zip" download>Darunavir_Stillemans2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_darunavir/Darunavir_Stillemans2021_reference/Darunavir_Stillemans2021_reference_cellml.zip" download>Darunavir_Stillemans2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_darunavir/Darunavir_Stillemans2021_reference/Darunavir_Stillemans2021_reference.svg" alt="Darunavir_Stillemans2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 0.68 /h, F 1). Doses in the paper: 600, 800, 1200 mg.

<dbs-fmusim paramsurl="drugs/drug_darunavir/Darunavir_Stillemans2021_reference/Darunavir_Stillemans2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_darunavir/Darunavir_Stillemans2021_reference/Darunavir_Stillemans2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Darunavir_Stillemans2021_reference_params.json` · controls `Darunavir_Stillemans2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:42 UTC</sub>
