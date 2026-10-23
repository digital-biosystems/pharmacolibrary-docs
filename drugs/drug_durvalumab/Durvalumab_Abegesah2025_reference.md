<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;durvalumab&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/&quot;},{&quot;label&quot;:&quot;Abegesah_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durvalumab_Zhao2026_reference&quot;,&quot;label&quot;:&quot;Zhao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Durvalumab_Abegesah2025_reference&quot;,&quot;label&quot;:&quot;Abegesah_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# durvalumab — `Durvalumab_Abegesah2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper − 0.498, model 0.183); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="durvalumab" model-id="Durvalumab_Abegesah2025_reference" status="needs_review" stale="false" population="patients with advanced cancers, including biliary tract cancer" measured-compound="durvalumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Abegesah A, Oh DY, Lim K, Fan C, Chen C, Kim C et al. Population pharmacokinetics and exposure-response analysis of durvalumab in combination with gemcitabine and cisplatin in patients with advanced biliary tract cancer. Cancer chemotherapy and pharmacology 95(1):23 (2025).
  ·  DOI: [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8)

## Population and dosing

**Population:** patients with advanced cancers, including biliary tract cancer · condition advanced cancers, including biliary tract cancer, NSCLC, and SCLC · age group adult · n = 3141.

**Dosing:** 7, 1400 mg, iv, multiple.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 4 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference.svg" alt="Durvalumab_Abegesah2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL | CL | 0.298 | L/day | 1.99 | 0.0795 (None% RSE) |
| V1 | V1 | 3.42 | L | 0.931 | 0.0593 (None% RSE) |
| Q | Q | 0.453 | L/day | 5.76 |  |
| V2 | V2 | 1.99 | L | 2.23 |  |
| crcl_on_cl | crcl_on_cl | 0.134 |  | 15.6 |  |
| Tumor type 1 on CL | equation variable | 0.0096 |  | 185 |  |
| sex_on_v1 | sex_on_v1 | -0.140 |  | 8.31 |  |
| theta_q319_body_weight | theta_q319_body_weight | 0.342 |  | 9.96 |  |
| theta_q319_body_weight | theta_q319_body_weight | 0.518 |  | 5.39 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.762). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper − 0.498, model 0.183); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — durvalumab: CL 0.298 L/day, V1 3.42 L, Q 0.453 L/day, V2 1.99 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of body_weight_on_v1: this record has none, the second reading 0.518; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.298 | L/day | 3.449e-09 | m3/s | L/h | 1.99 | exact (1) | Tab4:row2:col1, Tab4:row2:col2, Tab4:row2:col3 | 0.0795 (None% RSE) |
| V1 | `Q63` · V1 | 3.42 | L | 0.00342 | m3 | L | 0.931 | exact (1) | Tab4:row3:col1, Tab4:row3:col2, Tab4:row3:col3 | 0.0593 (None% RSE) |
| Q | `Q30` · Q | 0.453 | L/day | 5.243e-09 | m3/s | L/h | 5.76 | exact (1) | Tab4:row4:col1, Tab4:row4:col2, Tab4:row4:col3 |  |
| V2 | `Q64` · V2 | 1.99 | L | 0.00199 | m3 | L | 2.23 | exact (1) | Tab4:row5:col1, Tab4:row5:col2, Tab4:row5:col3 |  |
| crcl_on_cl | `Q900` · crcl_on_cl | 0.134 |  |  |  |  | 15.6 |  | Tab4:row11:col1, Tab4:row11:col2, Tab4:row11:col3 |  |
| Tumor type 1 on CL | `Q900` · equation variable | 0.0096 |  |  |  |  | 185 | llm_corrected (0.6) | Tab4:row18:col1, Tab4:row18:col2, Tab4:row18:col3 |  |
| sex_on_v1 | `Q900` · sex_on_v1 | -0.140 |  |  |  |  | 8.31 |  | Tab4:row21:col1, Tab4:row21:col2 |  |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.342 |  |  |  |  | 9.96 |  | Tab4:row17:col1, Tab4:row17:col2, Tab4:row17:col3 |  |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.518 |  |  |  |  | 5.39 |  | Tab4:row22:col1, Tab4:row22:col2, Tab4:row22:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `qwen3.8-27b` | `parameters[body_weight_on_v1]` |  | 0.518 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[crcl_on_cl]` | 0.134 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_crcl]` |  | 0.134 | only_one_extracted |
| `qwen3.8-27b` | `parameters[tumor type 1 on cl]` | 0.0096 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab4:row2:col1', 'Tab4:row2:col2', 'Tab4:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab4:row4:col1', 'Tab4:row4:col2', 'Tab4:row4:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab4:row3:col1', 'Tab4:row3:col2', 'Tab4:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab4:row5:col1', 'Tab4:row5:col2', 'Tab4:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.298 | ['Tab4:row2:col1', 'Tab4:row2:col2', 'Tab4:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0124 L/h | ['Tab4:row2:col1', 'Tab4:row2:col2', 'Tab4:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.42 L | ['Tab4:row3:col1', 'Tab4:row3:col2', 'Tab4:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.99 L | ['Tab4:row5:col1', 'Tab4:row5:col2', 'Tab4:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=durvalumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_tmax | reference | skipped | − 0.498 | 0.1833 |  | unresolved time unit '–' |
| T1_tmax | reference | skipped | 0.0623 | 0.1833 |  | unresolved time unit '–' |
| T1_tmax | reference | fail | 0.498 | 0.1833 | 0.3681 | →SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-06 | kg |
| input | model | `Cl` | 3.449e-09 | m3/s |
| input | model | `VdPerKg` | 4.886e-05 | m3/kg |
| input | model | `k12` | 1.533e-06 | 1/s |
| input | model | `k21` | 2.635e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Abegesah A, Oh DY, Lim K, Fan C, Chen C, Kim C et al. Population pharmacokinetics and exposure-response analysis of durvalumab in combination with gemcitabine and cisplatin in patients with advanced biliary tract cancer. Cancer chemotherapy and pharmacology 95(1):23 (2025). [doi:10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8)

**This record:** Pharmacolibrary v26.09, model `Durvalumab_Abegesah2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference>

```bibtex
@misc{pharmacolibrary_DurvalumabAbegesah2025reference,
  title  = {{Pharmacolibrary model Durvalumab_Abegesah2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference},
  note   = {Parameters from doi:10.1007/s00280-024-04743-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 7 mg infusion over 10 min, single dose. Doses in the paper: 7–1400 mg.

<dbs-fmusim paramsurl="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Durvalumab_Abegesah2025_reference_params.json` · controls `Durvalumab_Abegesah2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdurvalumab%5D%20Durvalumab_Abegesah2025_reference&body=Drug%3A%20durvalumab%0ARecord%3A%20Durvalumab_Abegesah2025_reference%0APaper%3A%20Abegesah_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:18 UTC</sub>
