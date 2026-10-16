<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;lamivudine&quot;,&quot;href&quot;:&quot;drugs/drug_lamivudine/&quot;},{&quot;label&quot;:&quot;Chandasana_2024_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lamivudine_Chandasana2024v2_reference&quot;,&quot;label&quot;:&quot;Chandasana_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lamivudine — `Lamivudine_Chandasana2024v2_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.941). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Lamivudine transfer rate constant k12 uses library defaults instead of values from this paper.**

The model builder defaulted the transfer rate constant k12, meaning no explicit estimate from the Chandasana study was used. Additionally, the record defines covariate effects for weight, bilirubin, ethnicity, eGFR, and race, but these scenarios were not simulated, so the base model output does not reflect the full parameter set. Extracted — lamivudine: CL/F 0.858 L/h, V/F 16.7 L, kabs 2.15 h−1, V2/F 105 L, Q/F 2.97 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has dolutegravir/lamivudine, the second reading dolutegravir/lamivudine fixed‑dose combination (50 mg dolutegravir, 300 mg lamivudine). That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `dolutegravir/lamivudine`, measured `lamivudine`.

## Citation
Chandasana H et al., Population pharmacokinetic modeling of…, Antimicrobial agents and ch… (2024)
  ·  DOI: [10.1128/aac.01504-23](https://doi.org/10.1128/aac.01504-23)

<div class="pk-model-meta" hidden drug="lamivudine" model-id="Lamivudine_Chandasana2024v2_reference" status="needs_review" stale="false" population="virologically suppressed adults living with HIV-1" measured-compound="lamivudine" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 5 extracted, plus 6 covariate effects.

**Parameterization:** CL/F, Q/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 0.858 | L/h | 2.3833333333333334e-07 | [l] / [h] | not captured | exact (1.0) | T2:row3:col1, T2:row3:col4, T2:row16:col1, T2:row16:col2, T2:row16:col4 | — | not captured |
| V/F (L) | `Q76` · V/F | 16.7 | L | 0.0167 | [l] | not captured | exact (1.0) | T2:row4:col1, T2:row4:col4 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 2.15 | h−1 | 0.0005972222222222222 | [1] / [h] | not captured | exact (1.0) | T2:row5:col1, T2:row5:col2, T2:row5:col4, T2:row19:col1, T2:row19:col2, T2:row19:col4 | — | not captured |
| V2/F = V3/F (L) | `Q82` · V2/F | 105 | L | 0.105 | [l] | not captured | llm_confirmed (0.6) | T2:row17:col1, T2:row17:col2, T2:row17:col4 | — | -0.0531 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 2.97 | L/h | 8.250000000000001e-07 | [l] / [h] | not captured | exact (1.0) | T2:row18:col1, T2:row18:col2, T2:row18:col4 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.427 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row6:col1, T2:row6:col2, T2:row6:col4 | — | not captured |
| theta_v_f_wt_power | `Q900` · theta_v_f_wt_power | 0.917 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row7:col1, T2:row7:col2, T2:row7:col4 | — | not captured |
| theta_cl_f_bilirubin_power | `Q900` · theta_cl_f_bilirubin_power | -0.153 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row8:col1, T2:row8:col2, T2:row8:col4 | — | not captured |
| theta_cl_f_ethnicity_power | `Q900` · theta_cl_f_ethnicity_power | 0.844 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row9:col1, T2:row9:col2, T2:row9:col4 | — | not captured |
| theta_cl_f_egfr_power | `Q900` · theta_cl_f_egfr_power | 0.533 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row20:col1, T2:row20:col2, T2:row20:col4 | — | not captured |
| theta_cl_f_race_power | `Q900` · theta_cl_f_race_power | 0.789 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row21:col1, T2:row21:col2, T2:row21:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k12']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ω2CL/F' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2proportional error' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'σ2prop' routed out of structural estimates ('Residual variability')
- table section iiv: 'BSCCL/F~V2/F' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2V2/F' routed out of structural estimates ('Inter-individual variability')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lamivudine
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T2:row3:col2 = '1.9%'
- unparsed cell T2:row3:col3 = '0.826, 0.890'
- unparsed cell T2:row3:col5 = '0.826, 0.892'
- unparsed cell T2:row4:col2 = '2.73%'
- unparsed cell T2:row4:col3 = '15.8, 17.6'
- unparsed cell T2:row4:col5 = '15.8, 17.6'
- unparsed cell T2:row5:col3 = '1.72, 2.59'
- unparsed cell T2:row5:col5 = '1.783, 2.753'
- unparsed cell T2:row6:col3 = '0.293, 0.562'
- unparsed cell T2:row6:col5 = '0.263, 0.593'
- unparsed cell T2:row7:col3 = '0.711, 1.12'
- unparsed cell T2:row7:col5 = '0.713, 1.147'
- unparsed cell T2:row8:col3 = '−0.223, –0.0827'
- unparsed cell T2:row8:col5 = '−0.227, –0.8'
- unparsed cell T2:row9:col3 = '0.777, 0.911'
- unparsed cell T2:row9:col5 = '0.776, 0.913'
- unparsed cell T2:row11:col5 = '0.056, 0.079'
- unparsed cell T2:row12:col5 = '0.033, 0.084'
- unparsed cell T2:row14:col5 = '0.322, 0.360'
- unparsed cell T2:row16:col3 = '18.8, 20.5'
- unparsed cell T2:row16:col5 = '18.7, 20.5'
- unparsed cell T2:row17:col3 = '96.9, 113'
- unparsed cell T2:row17:col5 = '97.9, 112.7'
- unparsed cell T2:row18:col3 = '2.59, 3.34'
- unparsed cell T2:row18:col5 = '2.55, 3.35'
- unparsed cell T2:row19:col3 = '1.6, 2.99'
- unparsed cell T2:row19:col5 = '1.84, 3.85'
- unparsed cell T2:row20:col3 = '0.336, 0.731'
- unparsed cell T2:row20:col5 = '0.330, 0.732'
- unparsed cell T2:row21:col3 = '0.691, 0.887'
- unparsed cell T2:row21:col5 = '0.695, 0.889'
- unparsed cell T2:row23:col5 = '0.0565, 0.124'
- unparsed cell T2:row24:col5 = '−0.091, –0.0180'
- unparsed cell T2:row25:col5 = '0.099, 0.238'
- unparsed cell T2:row26:col5 = '0.169, 0.344'
- unparsed cell T2:row28:col5 = '0.333, 0.390'
- companion parameter table 3 transcribed (0 record(s))
- LLM selected parameter table(s) 3
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.941 (16/17 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | dolutegravir/lamivudine | dolutegravir/lamivudine fixed‑dose combination (50 mg dolutegravir, 300 mg lamivudine) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row3:col1', 'T2:row3:col4', 'T2:row16:col1', 'T2:row16:col2', 'T2:row16:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col4', 'T2:row19:col1', 'T2:row19:col2', 'T2:row19:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row18:col1', 'T2:row18:col2', 'T2:row18:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col1', 'T2:row4:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row17:col1', 'T2:row17:col2', 'T2:row17:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.858 L/h | not captured | not captured | ['T2:row3:col1', 'T2:row3:col4', 'T2:row16:col1', 'T2:row16:col2', 'T2:row16:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 16.7 L | not captured | not captured | ['T2:row4:col1', 'T2:row4:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 105 L | not captured | not captured | ['T2:row17:col1', 'T2:row17:col2', 'T2:row17:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=lamivudine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 13 | 2.6090892301901422e-08 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 13 | 2.6090892301901422e-08 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 22 | 2.6090892301901422e-08 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lamivudine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chandasana_2024_2` / `Chandasana_2024_2::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lamivudine/models/modelica/Lamivudine_Chandasana2024v2_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lamivudine/models/modelica/Lamivudine_Chandasana2024v2_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lamivudine/models/modelica/Lamivudine_Chandasana2024v2_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference/Lamivudine_Chandasana2024v2_reference_modelica.zip" download>Lamivudine_Chandasana2024v2_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference/Lamivudine_Chandasana2024v2_reference_fmi.zip" download>Lamivudine_Chandasana2024v2_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference/Lamivudine_Chandasana2024v2_reference_matlab.zip" download>Lamivudine_Chandasana2024v2_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference/Lamivudine_Chandasana2024v2_reference_matlab_simbio.zip" download>Lamivudine_Chandasana2024v2_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference/Lamivudine_Chandasana2024v2_reference_sbml.zip" download>Lamivudine_Chandasana2024v2_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference/Lamivudine_Chandasana2024v2_reference_cellml.zip" download>Lamivudine_Chandasana2024v2_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference/Lamivudine_Chandasana2024v2_reference.svg" alt="Lamivudine_Chandasana2024v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 2.15 /h, F 1). Dose in the paper: 50 mg.

<dbs-fmusim paramsurl="drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference/Lamivudine_Chandasana2024v2_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference/Lamivudine_Chandasana2024v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Lamivudine_Chandasana2024v2_reference_params.json` · controls `Lamivudine_Chandasana2024v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 13:08 UTC</sub>
