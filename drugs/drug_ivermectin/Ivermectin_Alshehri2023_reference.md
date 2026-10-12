<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;ivermectin&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/&quot;},{&quot;label&quot;:&quot;Alshehri_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ivermectin_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ivermectin_Kobylinski2017_reference&quot;,&quot;label&quot;:&quot;Kobylinski_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ivermectin_Duthaler2019_reference&quot;,&quot;label&quot;:&quot;Duthaler_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Duthaler2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ivermectin — `Ivermectin_Alshehri2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span>

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

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f].covariate_forms`: this record has ['linear_fractional'], the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Alshehri A et al., Population pharmacokinetic model of ive…, PLoS neglected tropical dis… (2023)
  ·  DOI: [10.1371/journal.pntd.0011319](https://doi.org/10.1371/journal.pntd.0011319)

<div class="pk-model-meta" hidden drug="ivermectin" model-id="Ivermectin_Alshehri2023_reference" status="accepted_with_caveats" stale="false" population="Wuchereria bancrofti-infected and uninfected adults in Côte d’Ivoire" measured-compound="ivermectin" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 7.02 | L/h | 1.95e-06 | [l] / [h] | 6.7 | exact (1.0) | pntd.0011319.t002:row2:col1 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 9.11 | L/h | 2.5305555555555556e-06 | [l] / [h] | 10.4 | exact (1.0) | pntd.0011319.t002:row3:col1 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 138 | L | 0.138 | [l] | 8.4 | exact (1.0) | pntd.0011319.t002:row4:col1 | — | not captured |
| Vp /F(L) | `Q82` · V2/F | 424.33 | L | 0.42433 | [l] | 8.4 | space_fold (0.95) | pntd.0011319.t002:row5:col1 | — | not captured |
| Tlag (h) | `Q83` · tlag | 0.75 | h | 2700.0 | [h] | 9.5 | exact (1.0) | pntd.0011319.t002:row6:col1 | — | not captured |
| Ka (1/h) | `Q49` · kabs | 0.71 | 1/h | 0.00019722222222222222 | 1/h | 13.6 | exact (1.0) | pntd.0011319.t002:row8:col1 | — | not captured |
| sex_male_on_vp_f | `Q900` · sex_male_on_vp_f | -0.74 | not captured | not captured | not captured | 12.4 | not captured (not captured) | pntd.0011319.t002:row9:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Additive residual error (ng/mL)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional residual error' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'Tk0 (h)' — extend the ontology if this is a real PK parameter (source ['pntd.0011319.t002:row7:col1'])
- covariate level 'Sex (male) on Vp/F' → Q900:sex_male_on_vp_f = -0.74 (linear_fractional on Q27)
- dropped duplicate Q27 ('CL/F', value '0.25') — already have one for this compound
- dropped duplicate Q69 ('Q/F', value '0.19') — already have one for this compound
- dropped duplicate Q290 ('Vc/F', value '0.23') — already have one for this compound
- dropped duplicate Q82 ('Vp /F', value '0.17') — already have one for this compound
- dropped duplicate Q83 ('Tlag', value '0.35') — already have one for this compound
- dropped unlinked row (NIL): 'Tk0' — extend the ontology if this is a real PK parameter (source ['pntd.0011319.t002:row16:col1', 'pntd.0011319.t002:row16:col3'])
- dropped duplicate Q49 ('Ka', value '0.55') — already have one for this compound
- implicit units: 'Ka (1/h)' → 1/h (from the paper text: "The paper text explicitly states: 'Estimates of mean population values for Vc/F, CL/F, Q/F, Ka, TK0, and Tlag were 138 l")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ivermectin

**Extraction notes:**
- unparsed cell pntd.0011319.t002:row2:col3 = '7.01 (6.17–7.95)'
- unparsed cell pntd.0011319.t002:row3:col3 = '9.04 (7.43–10.88)'
- unparsed cell pntd.0011319.t002:row4:col3 = '137.17 (117–159.50)'
- unparsed cell pntd.0011319.t002:row5:col3 = '437.94 (368.45–530.87)'
- unparsed cell pntd.0011319.t002:row6:col3 = '0.76 (0.63–0.93)'
- unparsed cell pntd.0011319.t002:row7:col3 = '3.73 (3.33–4.11)'
- unparsed cell pntd.0011319.t002:row8:col3 = '0.72 (0.53–0.99)'
- unparsed cell pntd.0011319.t002:row9:col3 = '-0.77 (- 1.0–0.58)'
- unparsed cell pntd.0011319.t002:row19:col3 = '0.45 (0.37–0.64)'
- unparsed cell pntd.0011319.t002:row20:col3 = '0.22 (0.19–0.24)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (16/20 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[sex_male_on_vp_f]` | -0.74 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_f_sex]` | not captured | -0.74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp /f].covariate_forms` | [] | ['linear_fractional'] | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pntd.0011319.t002:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['pntd.0011319.t002:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pntd.0011319.t002:row8:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pntd.0011319.t002:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['pntd.0011319.t002:row5:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['pntd.0011319.t002:row6:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.02 L/h | not captured | not captured | ['pntd.0011319.t002:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 138 L | not captured | not captured | ['pntd.0011319.t002:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 424 L | not captured | not captured | ['pntd.0011319.t002:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=ivermectin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ivermectin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Alshehri_2023` / `Alshehri_2023::reference`)
- model: `../../../knowledgebase/drugs/drug_ivermectin/models/modelica/Ivermectin_Alshehri2023_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_ivermectin/models/modelica/Ivermectin_Alshehri2023_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_ivermectin/models/modelica/Ivermectin_Alshehri2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_modelica.zip" download>Ivermectin_Alshehri2023_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_fmi.zip" download>Ivermectin_Alshehri2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_matlab.zip" download>Ivermectin_Alshehri2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_matlab_simbio.zip" download>Ivermectin_Alshehri2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_sbml.zip" download>Ivermectin_Alshehri2023_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_cellml.zip" download>Ivermectin_Alshehri2023_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference.svg" alt="Ivermectin_Alshehri2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 14 mg, single dose, first-order absorption (ka 0.71 /h, lag 45 min, F 1). Dose in the paper: 14 mg.

<dbs-fmusim paramsurl="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ivermectin_Alshehri2023_reference_params.json` · controls `Ivermectin_Alshehri2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:32 UTC</sub>
