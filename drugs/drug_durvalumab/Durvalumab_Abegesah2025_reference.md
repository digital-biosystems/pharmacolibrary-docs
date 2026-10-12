<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;durvalumab&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/&quot;},{&quot;label&quot;:&quot;Abegesah_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durvalumab_Zhao2026_reference&quot;,&quot;label&quot;:&quot;Zhao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Durvalumab_Abegesah2025_reference&quot;,&quot;label&quot;:&quot;Abegesah_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# durvalumab — `Durvalumab_Abegesah2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.762). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper − 0.498, model 0.183); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — durvalumab: CL 0.298 L/day, V1 3.42 L, Q 0.453 L/day, V2 1.99 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of body_weight_on_v1: this record has none, the second reading 0.518; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025)
  ·  DOI: [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8)

<div class="pk-model-meta" hidden drug="durvalumab" model-id="Durvalumab_Abegesah2025_reference" status="needs_review" stale="false" population="patients with advanced cancers, including biliary tract cancer" measured-compound="durvalumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.298 | L/day | 3.449074074074074e-09 | L/h | 1.99 | exact (1.0) | Tab4:row2:col1, Tab4:row2:col2, Tab4:row2:col3 | — | 0.0795 (None% RSE) |
| V1 | `Q63` · V1 | 3.42 | L | 0.00342 | L | 0.931 | exact (1.0) | Tab4:row3:col1, Tab4:row3:col2, Tab4:row3:col3 | — | 0.0593 (None% RSE) |
| Q | `Q30` · Q | 0.453 | L/day | 5.243055555555556e-09 | L/h | 5.76 | exact (1.0) | Tab4:row4:col1, Tab4:row4:col2, Tab4:row4:col3 | — | not captured |
| V2 | `Q64` · V2 | 1.99 | L | 0.00199 | L | 2.23 | exact (1.0) | Tab4:row5:col1, Tab4:row5:col2, Tab4:row5:col3 | — | not captured |
| crcl_on_cl | `Q900` · crcl_on_cl | 0.134 | not captured | not captured | not captured | 15.6 | not captured (not captured) | Tab4:row11:col1, Tab4:row11:col2, Tab4:row11:col3 | — | not captured |
| Tumor type 1 on CL | `Q900` · equation variable | 0.0096 | not captured | not captured | not captured | 185 | llm_corrected (0.6) | Tab4:row18:col1, Tab4:row18:col2, Tab4:row18:col3 | — | not captured |
| sex_on_v1 | `Q900` · sex_on_v1 | -0.140 | not captured | not captured | not captured | 8.31 | not captured (not captured) | Tab4:row21:col1, Tab4:row21:col2 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.342 | not captured | not captured | not captured | 9.96 | not captured (not captured) | Tab4:row17:col1, Tab4:row17:col2, Tab4:row17:col3 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.518 | not captured | not captured | not captured | 5.39 | not captured (not captured) | Tab4:row22:col1, Tab4:row22:col2, Tab4:row22:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ETA CL' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Cov CL-V1' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ETA V1' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ETA Tmax' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Proportional component' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive component' routed out of structural estimates ('Residual variability')
- dropped value-less row: 'Tmax change CL'
- dropped unlinked row (NIL): 'TC50 change CL' — extend the ontology if this is a real PK parameter (source ['Tab4:row7:col1', 'Tab4:row7:col2', 'Tab4:row7:col3'])
- dropped unlinked row (NIL): 'LAM' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col1'])
- dropped value-less row: 'Albumin on CL'
- covariate level 'CrCL on CL' → Q900:crcl_on_cl = 0.134 (linear_fractional on Q22)
- dropped value-less row: 'ECOG status on CL'
- dropped duplicate Q22 ('LDH on CL', value '0.0516') — already have one for this compound
- dropped value-less row: 'Sex on CL'
- dropped value-less row: 'COMB1 on CL'
- dropped value-less row: 'COMB2 on CL'
- dropped unlinked row (NIL): 'Tumor type 2 on CL' — extend the ontology if this is a real PK parameter (source ['Tab4:row19:col1', 'Tab4:row19:col2', 'Tab4:row19:col3'])
- dropped duplicate Q22 ('Tumor type 3 on CL', value '0.1661') — already have one for this compound
- covariate level 'Sex on V1' → Q900:sex_on_v1 = -0.140 (linear_fractional on Q22)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL' → L/day (from the paper text: 'The paper states: “CL, 0.298 L/day” and identifies CL as clearance.')
- implicit units: 'V1' → L (from the paper text: 'The paper states: “V1, 3.42 L” and identifies V1 as the volume of distribution of the central compartment.')
- implicit units: 'Q' → L/day (from the paper text: 'The paper states: “Q, 0.452 L/day” and identifies Q as intercompartmental clearance.')
- implicit units: 'V2' → L (from the paper text: 'The paper states: “V2, 1.99 L” and identifies V2 as the volume of distribution of the peripheral compartment.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=durvalumab
- molar mass: none found for 'durvalumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab4:row2:col4 = '[0.283; 0.315]'
- unparsed cell Tab4:row3:col4 = '[3.37; 3.47]'
- unparsed cell Tab4:row4:col4 = '[0.374; 0.535]'
- unparsed cell Tab4:row5:col4 = '[1.83; 2.15]'
- unparsed cell Tab4:row6:col1 = '− 0.498'
- unparsed cell Tab4:row6:col3 = '− 0.499'
- unparsed cell Tab4:row6:col4 = '[− 0.551; − 0.446]'
- unparsed cell Tab4:row7:col4 = '[44.5; 84.5]'
- unparsed cell Tab4:row10:col1 = '− 0.589'
- unparsed cell Tab4:row10:col3 = '− 0.596'
- unparsed cell Tab4:row10:col4 = '[− 0.772; − 0.430]'
- unparsed cell Tab4:row11:col4 = '[0.0925; 0.178]'
- unparsed cell Tab4:row12:col1 = '− 0.0501'
- unparsed cell Tab4:row12:col3 = '− 0.0495'
- unparsed cell Tab4:row12:col4 = '[− 0.0725; − 0.0232]'
- unparsed cell Tab4:row13:col4 = '[0.0262; 0.0740]'
- unparsed cell Tab4:row14:col1 = '− 0.161'
- unparsed cell Tab4:row14:col3 = '− 0.160'
- unparsed cell Tab4:row14:col4 = '[− 0.184; − 0.136]'
- unparsed cell Tab4:row15:col1 = '− 0.163'
- unparsed cell Tab4:row15:col3 = '− 0.1631'
- unparsed cell Tab4:row15:col4 = '[−0.192; − 0.132]'
- unparsed cell Tab4:row16:col1 = '− 0.0929'
- unparsed cell Tab4:row16:col3 = '− 0.0925'
- unparsed cell Tab4:row16:col4 = '[− 0.136; 0.0489]'
- unparsed cell Tab4:row17:col4 = '[0.270; 0.408]'
- unparsed cell Tab4:row18:col4 = '[− 0.0228; 0.0466]'
- unparsed cell Tab4:row19:col4 = '[0.00115; 0.143]'
- unparsed cell Tab4:row20:col4 = '[0.0973; 0.236]'
- unparsed cell Tab4:row21:col3 = '− 0.141'
- unparsed cell Tab4:row21:col4 = '[− 0.162; − 0.116]'
- unparsed cell Tab4:row22:col4 = '[0.463; 0.571]'
- unparsed cell Tab4:row24:col4 = '[0.0698; 0.0887]'
- unparsed cell Tab4:row25:col4 = '[0.0339; 0.0442]'
- unparsed cell Tab4:row26:col4 = '[0.0500; 0.0677]'
- unparsed cell Tab4:row27:col4 = '[0.0437; 0.0864]'
- unparsed cell Tab4:row29:col4 = '[0.246; 0.263]'
- unparsed cell Tab4:row30:col4 = '[3.55; 6.17]'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.762 (16/21 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[body_weight_on_v1]` | not captured | 0.518 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[crcl_on_cl]` | 0.134 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_crcl]` | not captured | 0.134 | only_one_extracted |
| `qwen3.8-27b` | `parameters[tumor type 1 on cl]` | 0.0096 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row2:col1', 'Tab4:row2:col2', 'Tab4:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row4:col1', 'Tab4:row4:col2', 'Tab4:row4:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col2', 'Tab4:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row5:col1', 'Tab4:row5:col2', 'Tab4:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.298 | not captured | not captured | ['Tab4:row2:col1', 'Tab4:row2:col2', 'Tab4:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0124 L/h | not captured | not captured | ['Tab4:row2:col1', 'Tab4:row2:col2', 'Tab4:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.42 L | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col2', 'Tab4:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.99 L | not captured | not captured | ['Tab4:row5:col1', 'Tab4:row5:col2', 'Tab4:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=durvalumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_tmax | reference | skipped | − 0.498 | 0.18333333335172405 | not captured | unresolved time unit '–' |
| T1_tmax | reference | skipped | 0.0623 | 0.18333333335172405 | not captured | unresolved time unit '–' |
| T1_tmax | reference | fail | 0.498 | 0.18333333335172405 | 0.3681 | →SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_durvalumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Abegesah_2025` / `Abegesah_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_durvalumab/models/modelica/Durvalumab_Abegesah2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_durvalumab/models/modelica/Durvalumab_Abegesah2025_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_durvalumab/models/modelica/Durvalumab_Abegesah2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_modelica.zip" download>Durvalumab_Abegesah2025_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_fmi.zip" download>Durvalumab_Abegesah2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_matlab.zip" download>Durvalumab_Abegesah2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_matlab_simbio.zip" download>Durvalumab_Abegesah2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_sbml.zip" download>Durvalumab_Abegesah2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_cellml.zip" download>Durvalumab_Abegesah2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference.svg" alt="Durvalumab_Abegesah2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 7 mg infusion over 10 min, single dose. Doses in the paper: 7–1400 mg.

<dbs-fmusim paramsurl="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Durvalumab_Abegesah2025_reference_params.json` · controls `Durvalumab_Abegesah2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:18 UTC</sub>
