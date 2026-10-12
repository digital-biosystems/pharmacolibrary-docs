<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;rezafungin acetate&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/&quot;},{&quot;label&quot;:&quot;Rubino_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;RezafunginAcetate_Lakota2018_reference&quot;,&quot;label&quot;:&quot;Lakota_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Lakota2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;RezafunginAcetate_Roepcke2023_reference&quot;,&quot;label&quot;:&quot;Roepcke_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;RezafunginAcetate_Rubino2021_reference&quot;,&quot;label&quot;:&quot;Rubino_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;RezafunginAcetate_Zhao2020_reference&quot;,&quot;label&quot;:&quot;Zhao_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Zhao2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rezafungin acetate — `RezafunginAcetate_Rubino2021_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.55). Primary extraction retained.">cross-check: disputed</span>

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

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rezafungin_acetate, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `rezafungin_acetate`, measured `rezafungin`.

## Citation
Rubino CM et al., Population Pharmacokinetics of Rezafung…, Antimicrobial agents and ch… (2021)
  ·  DOI: [10.1128/AAC.00842-21](https://doi.org/10.1128/AAC.00842-21)

<div class="pk-model-meta" hidden drug="rezafungin acetate" model-id="RezafunginAcetate_Rubino2021_reference" status="accepted_with_caveats" stale="false" population="healthy volunteers and patients with fungal infections" measured-compound="rezafungin" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 5 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, liter/h | `Q22` · CL | 0.254 | liter/h | 7.055555555555556e-08 | [l] / [h] | not captured | exact (1.0) | T2:row2:col1, T2:row2:col2 | — | 0.0562 (23.7% RSE) |
| theta_cl_albumin_power | `Q900` · theta_cl_albumin_power | -0.844 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row3:col1, T2:row3:col2 | — | not captured |
| Vc, liter | `Q63` · V1 | 11.1 | liter | 0.0111 | [l] | not captured | exact (1.0) | T2:row7:col1, T2:row7:col2 | — | 0.148 (38.5% RSE) |
| Vp1, liter | `Q64` · V2 | 14.6 | liter | 0.0146 | [l] | not captured | exact (1.0) | T2:row11:col1, T2:row11:col2 | — | 0.0107 (21.7% RSE) |
| theta_v2_weight_power | `Q900` · theta_v2_weight_power | 1.14 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row13:col1, T2:row13:col2 | — | not captured |
| CLd2, liter/h | `Q30` · Q | 0.541 | liter/h | 1.502777777777778e-07 | [l] / [h] | not captured | special_case (0.95) | T2:row14:col1, T2:row14:col2 | — | not captured |
| Vp2, liter | `Q77` · V3 | 6.69 | liter | 0.006690000000000001 | [l] | not captured | exact (1.0) | T2:row15:col1, T2:row15:col2 | — | not captured |
| theta_v3_weight_power | `Q900` · theta_v3_weight_power | 2.47 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row16:col1, T2:row16:col2 | — | not captured |
| theta_v2_albumin_power | `Q900` · theta_v2_albumin_power | -0.829 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row12:col1, T2:row12:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL, liter/h' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Vc, liter' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Vp1, liter' routed out of structural estimates ('Interindividual variability (%CV)')
- covariate level 'CL-albumin power' → Q900:theta_cl_albumin_power = -0.844 (power on Q22)
- dropped unlinked row (NIL): 'Proportional change in females' — extend the ontology if this is a real PK parameter (source ['T2:row4:col1', 'T2:row4:col2'])
- dropped PD-category row 'Vc-BSA slope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row8:col1', 'T2:row8:col2'])
- dropped unlinked row (NIL): 'Proportional change in infected patients' — extend the ontology if this is a real PK parameter (source ['T2:row9:col1', 'T2:row9:col2', 'T2:row17:col1', 'T2:row17:col2'])
- dropped duplicate Q22 ('CLd1, liter/h', value '18.2') — already have one for this compound
- covariate level 'Vp1-BSA power' → Q900:theta_v2_weight_power = 1.14 (power on Q64)
- covariate level 'Vp2-BSA power' → Q900:theta_v3_weight_power = 2.47 (power on Q77)
- dropped unlinked row (NIL): 'CLd3, liter/h' — extend the ontology if this is a real PK parameter (source ['T2:row19:col1', 'T2:row19:col2'])
- dropped duplicate Q77 ('Vp3, liter', value '13.6') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rezafungin
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- review gap-fill skipped: this record measures 'rezafungin', not rezafungin_acetate — the review values are the parent's

**Extraction notes:**
- LLM region T2:footnote: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 13:28:30 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.55 (11/20 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-168, mg h/literb]` | not captured | 709 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax, mg/literb]` | not captured | 16.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmin, mg/literb]` | not captured | 2.07 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v3_weight_power]` | 2.47 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp1].covariate_forms` | ['power', 'power'] | ['power', 'power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[vp2].covariate_forms` | ['power'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[vss]` | not captured | 61.0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | rezafungin_acetate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | rezafungin | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row14:col1', 'T2:row14:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row7:col1', 'T2:row7:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row11:col1', 'T2:row11:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row15:col1', 'T2:row15:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.254 | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.254 L/h | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.1 L | not captured | not captured | ['T2:row7:col1', 'T2:row7:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 14.6 L | not captured | not captured | ['T2:row11:col1', 'T2:row11:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=rezafungin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | skipped | not captured | 257.46051852442804 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_rezafungin_acetate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rubino_2021` / `Rubino_2021::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_rezafungin_acetate/models/modelica/RezafunginAcetate_Rubino2021_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_rezafungin_acetate/models/modelica/RezafunginAcetate_Rubino2021_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_rezafungin_acetate/models/modelica/RezafunginAcetate_Rubino2021_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference/RezafunginAcetate_Rubino2021_reference_modelica.zip" download>RezafunginAcetate_Rubino2021_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference/RezafunginAcetate_Rubino2021_reference_fmi.zip" download>RezafunginAcetate_Rubino2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference/RezafunginAcetate_Rubino2021_reference_matlab.zip" download>RezafunginAcetate_Rubino2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference/RezafunginAcetate_Rubino2021_reference_matlab_simbio.zip" download>RezafunginAcetate_Rubino2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference/RezafunginAcetate_Rubino2021_reference_sbml.zip" download>RezafunginAcetate_Rubino2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference/RezafunginAcetate_Rubino2021_reference_cellml.zip" download>RezafunginAcetate_Rubino2021_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference/RezafunginAcetate_Rubino2021_reference.svg" alt="RezafunginAcetate_Rubino2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 50 mg infusion over 10 min, single dose. Doses in the paper: 50, 100, 200, 400 mg.

<dbs-fmusim paramsurl="drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference/RezafunginAcetate_Rubino2021_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference/RezafunginAcetate_Rubino2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `RezafunginAcetate_Rubino2021_reference_params.json` · controls `RezafunginAcetate_Rubino2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:58 UTC</sub>
