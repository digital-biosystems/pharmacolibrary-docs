<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;enalapril&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/&quot;},{&quot;label&quot;:&quot;Kechagia_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enalapril_Kechagia2015_reference&quot;,&quot;label&quot;:&quot;Kechagia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Kechagia2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Enalapril_Steichert2025v2_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Faisal2019v2_reference&quot;,&quot;label&quot;:&quot;Faisal_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Faisal2019v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kechagia_2015_DBP&quot;,&quot;label&quot;:&quot;Kechagia_2015 \u00b7 DBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/pd_Kechagia_2015_DBP.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enalapril — `Enalapril_Kechagia2015_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.88), gpt-oss:120b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The enalapril/enalaprilat paediatric model was held back because bioavailability F was left at library defaults instead of an estimate from the paper, and the defined covariate effects were never simulated.**

The model builder substituted defaults for F and for the absorption lag time, even though the paper reports a Tlag of 0.78 h; the defaulted F affects the simulated enalaprilat profile without support from Kechagia_2015. The record also defines covariate effects on enalaprilat clearance and central volume (inter-group variability of 6.44% and 2.97% CV, and weight exponents of 0.82 and 0.66), but only the reference individual was simulated, so these covariate scenarios were not exercised. Extracted — enalaprilat: CL 8.31 L/h, V1 90 L, Q 2.65 L/h, V2 40.7 L; enalapril: tlag 0.78 h, kabs 0.93 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has enalapril, the second reading enalaprilat; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:26:45.081001+00:00) predates the upstream re-run (2026-10-07 05:42:35.617020+00:00). Current validate status: `extracted`.

## Citation
Kechagia IA et al., Extrapolation of enalapril efficacy fro…, The Journal of pharmacy and… (2015)
  ·  DOI: [10.1111/jphp.12471](https://doi.org/10.1111/jphp.12471)

<div class="pk-model-meta" hidden drug="enalapril" model-id="Enalapril_Kechagia2015_reference" status="extracted" stale="true" population="paediatric patients (0-16 years)" measured-compound="enalapril" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL a , L/h | `Q27` · CL/F | 8.31 | L/h | 2.308333333333334e-06 | [l] / [h] | 0.498 | llm_corrected (0.6) | tab_3:row1:col1, tab_3:row1:col2 | — | not captured |
| V1 a , L | `Q290` · V1/F | 90 | L | 0.09 | [l] | 3.8 | llm_corrected (0.6) | tab_3:row2:col1, tab_3:row2:col2 | — | not captured |
| Tlag, h | `Q83` · tlag | 0.78 | h | 2808.0 | [h] | 0.0178 | exact (1.0) | tab_3:row3:col1, tab_3:row3:col2 | — | not captured |
| Ka a , 1/h | `Q49` · kabs | 0.93 | 1/h | 0.00025833333333333334 | [1] / [h] | 0.114 | llm_confirmed (0.6) | tab_3:row4:col1, tab_3:row4:col2 | — | not captured |
| Q a , L/h | `Q30` · Q | 2.65 | L/h | 7.361111111111111e-07 | [l] / [h] | 1.29 | llm (0.6) | tab_3:row5:col1, tab_3:row5:col2 | — | not captured |
| V2 a , L | `Q82` · V2/F | 40.7 | L | 0.04070000000000001 | [l] | 8.63 | llm_corrected (0.6) | tab_3:row6:col1, tab_3:row6:col2 | — | not captured |
| inter_group_variability_for_cl_cv | `Q900` · inter_group_variability_for_cl_cv | 6.44 | not captured | not captured | not captured | 4.69 | not captured (not captured) | tab_3:row9:col1, tab_3:row9:col2 | — | not captured |
| inter_group_variability_for_v1_cv | `Q900` · inter_group_variability_for_v1_cv | 2.97 | not captured | not captured | not captured | 16 | not captured (not captured) | tab_3:row10:col1, tab_3:row10:col2 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.82 | not captured | not captured | not captured | 0.0417 | not captured (not captured) | tab_3:row7:col1, tab_3:row7:col2 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.66 | not captured | not captured | not captured | 0.1 | not captured (not captured) | tab_3:row8:col1, tab_3:row8:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- covariate level 'Inter group variability for CL, %CV' → Q900:inter_group_variability_for_cl_cv = 6.44 (additive_shift on Q27)
- covariate level 'Inter group variability for V1, %CV' → Q900:inter_group_variability_for_v1_cv = 2.97 (additive_shift on Q27)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=enalapril

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.88 (22/25 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.846 (22/26 fields) | 4 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[q a].parameter_id` | Q30 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[v2 a].parameter_id` | Q82 | Q64 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | enalapril | enalaprilat | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[cl a].parameter_id` | Q27 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[v1 a].parameter_id` | Q290 | Q63 | mismatch |
| `gpt-oss:120b` | `parameters[v2 a].parameter_id` | Q82 | Q64 | mismatch |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row1:col1', 'tab_3:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row5:col1', 'tab_3:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_3:row4:col1', 'tab_3:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row6:col1', 'tab_3:row6:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_3:row3:col1', 'tab_3:row3:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.31 L/h | not captured | not captured | ['tab_3:row1:col1', 'tab_3:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 90 L | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 40.7 L | not captured | not captured | ['tab_3:row6:col1', 'tab_3:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=enalaprilat) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 1.937735014611968e-05 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kechagia_2015` / `Kechagia_2015::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Kechagia2015_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Kechagia2015_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Kechagia2015_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_enalapril/Enalapril_Kechagia2015_reference/Enalapril_Kechagia2015_reference_modelica.zip" download>Enalapril_Kechagia2015_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_enalapril/Enalapril_Kechagia2015_reference/Enalapril_Kechagia2015_reference_fmi.zip" download>Enalapril_Kechagia2015_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_enalapril/Enalapril_Kechagia2015_reference/Enalapril_Kechagia2015_reference_matlab.zip" download>Enalapril_Kechagia2015_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_enalapril/Enalapril_Kechagia2015_reference/Enalapril_Kechagia2015_reference_matlab_simbio.zip" download>Enalapril_Kechagia2015_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Kechagia2015_reference/Enalapril_Kechagia2015_reference_sbml.zip" download>Enalapril_Kechagia2015_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Kechagia2015_reference/Enalapril_Kechagia2015_reference_cellml.zip" download>Enalapril_Kechagia2015_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_enalapril/Enalapril_Kechagia2015_reference/Enalapril_Kechagia2015_reference.svg" alt="Enalapril_Kechagia2015_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2.5 mg, single dose, first-order absorption (ka 0.93 /h, lag 46.8 min, F 1). Doses in the paper: 2.5, 5 mg.

<dbs-fmusim paramsurl="drugs/drug_enalapril/Enalapril_Kechagia2015_reference/Enalapril_Kechagia2015_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_enalapril/Enalapril_Kechagia2015_reference/Enalapril_Kechagia2015_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Enalapril_Kechagia2015_reference_params.json` · controls `Enalapril_Kechagia2015_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:42 UTC</sub>
