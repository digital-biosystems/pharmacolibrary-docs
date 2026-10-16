<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;ambrisentan&quot;,&quot;href&quot;:&quot;drugs/drug_ambrisentan/&quot;},{&quot;label&quot;:&quot;Okour_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ambrisentan_Hill2020_reference&quot;,&quot;label&quot;:&quot;Hill_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ambrisentan/Ambrisentan_Hill2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ambrisentan_Okour2023_reference&quot;,&quot;label&quot;:&quot;Okour_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ambrisentan — `Ambrisentan_Okour2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.882), gpt-oss:120b (not confirmed, agreement 0.882). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ambrisentan, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `accepted_with_caveats` (reviewed 2026-09-28 14:35:59.194569+00:00) predates the upstream re-run (2026-10-06 14:55:11.618826+00:00). Current validate status: `extracted`.

## Citation
Okour M et al., Pediatric Population Pharmacokinetic Mo…, Journal of clinical pharmac… (2023)
  ·  DOI: [10.1002/jcph.2199](https://doi.org/10.1002/jcph.2199)

<div class="pk-model-meta" hidden drug="ambrisentan" model-id="Ambrisentan_Okour2023_reference" status="extracted" stale="true" population="pediatric patients with pulmonary arterial hypertension" measured-compound="ambrisentan" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F [L/hr] | `Q27` · CL/F | 1.17 | L/hr | 3.25e-07 | [l] / [h] | 6.33 | llm_confirmed (0.6) | tab_1:row1:col1, tab_1:row1:col2, tab_1:row1:col3 | — | not captured |
| Vc/F [L] | `Q290` · V1/F | 12.3 | L | 0.0123 | [l] | 16.1 | llm_confirmed (0.6) | tab_1:row2:col1, tab_1:row2:col2, tab_1:row2:col3 | — | not captured |
| Q/F [L/hr] | `Q69` · Q/F | 0.457 | L/hr | 1.2694444444444446e-07 | [l] / [h] | 21.1 | llm_confirmed (0.6) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3 | — | not captured |
| Vp/F [L] | `Q82` · V2/F | 81.3 | L | 0.0813 | [l] | 24.5 | llm_confirmed (0.6) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col3 | — | not captured |
| Ka [hr -1 ] | `Q49` · kabs | 2.46 | 1/h | 0.0006833333333333333 | 1/h | 25.7 | llm_confirmed (0.6) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col3 | — | 0.653 (None% RSE) |
| tlag [hr] | `Q83` · tlag | 0.525 | hr | 1890.0 | [h] | 14.7 | llm_confirmed (0.6) | tab_1:row6:col1, tab_1:row6:col2, tab_1:row6:col3 | — | 0.0156 (None% RSE) |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_1:row7:col1, tab_1:row9:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ω 2' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η CL , η Vc' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η CL , η Q' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η Vc , η Q' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η CL , η Vp' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η Vc , η Vp' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η Q , η Vp' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η CL , η Ka' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η Vc , η Ka' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η Q , η Ka' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η Vp , η Ka' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η CL , η tlag' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η Vc , η tlag' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η Q , η tlag' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η Vp , η tlag' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Covar η Ka , η tlag' routed out of structural estimates ('Interindividual Variability')
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual Variability')
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Ka [hr -1 ]' → 1/h (from the paper text: "The parameter entry explicitly lists the unit as '[hr -1 ]'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ambrisentan

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.882 (15/17 fields) | 2 |
| `gpt-oss:120b` | not confirmed | 0.882 (15/17 fields) | 2 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | ambrisentan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ambrisentan | unknown | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | ambrisentan | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | ambrisentan | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row1:col1', 'tab_1:row1:col2', 'tab_1:row1:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.17 L/h | not captured | not captured | ['tab_1:row1:col1', 'tab_1:row1:col2', 'tab_1:row1:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 12.3 L | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 81.3 L | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=ambrisentan) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ambrisentan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Okour_2023` / `Okour_2023::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ambrisentan/models/modelica/Ambrisentan_Okour2023_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ambrisentan/models/modelica/Ambrisentan_Okour2023_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ambrisentan/models/modelica/Ambrisentan_Okour2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference/Ambrisentan_Okour2023_reference_modelica.zip" download>Ambrisentan_Okour2023_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference/Ambrisentan_Okour2023_reference_fmi.zip" download>Ambrisentan_Okour2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference/Ambrisentan_Okour2023_reference_matlab.zip" download>Ambrisentan_Okour2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference/Ambrisentan_Okour2023_reference_matlab_simbio.zip" download>Ambrisentan_Okour2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference/Ambrisentan_Okour2023_reference_sbml.zip" download>Ambrisentan_Okour2023_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference/Ambrisentan_Okour2023_reference_cellml.zip" download>Ambrisentan_Okour2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference/Ambrisentan_Okour2023_reference.svg" alt="Ambrisentan_Okour2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2.5 mg, single dose, first-order absorption (ka 2.46 /h, lag 31.5 min, F 1). Doses in the paper: 2.5, 5, 7.5, 10 mg.

<dbs-fmusim paramsurl="drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference/Ambrisentan_Okour2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference/Ambrisentan_Okour2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ambrisentan_Okour2023_reference_params.json` · controls `Ambrisentan_Okour2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 14:55 UTC</sub>
