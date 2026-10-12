<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05D&quot;,&quot;href&quot;:&quot;atc/R05D.md&quot;},{&quot;label&quot;:&quot;noscapine&quot;,&quot;href&quot;:&quot;drugs/drug_noscapine/&quot;},{&quot;label&quot;:&quot;Chen_2024 \u00b7 final_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Noscapine_Chen2024_final_model&quot;,&quot;label&quot;:&quot;Chen_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_noscapine/Noscapine_Chen2024_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000&quot;,&quot;label&quot;:&quot;Chen_2024_sir_with_m_m_ratio_of_5000_1000&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_noscapine/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# noscapine — `Noscapine_Chen2024_final_model`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 0.196); the model does not reproduce the paper's terminal half-life (paper 8.42, model 0.487) (+2 more).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — noscapine: D1 0.0624 h, CL/F 958 L/h, V1/F 49.7 L, Q/F 18.9 L/h, Q2/F 25.8 L/h, V3/F 31.2 L, Fab 82.8, ktr 13 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has noscapine, the second reading unknown; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Chen Z et al., A Semi-Mechanistic Population Pharmacok…, Drugs in R&D (2024)
  ·  DOI: [10.1007/s40268-024-00466-6](https://doi.org/10.1007/s40268-024-00466-6)

<div class="pk-model-meta" hidden drug="noscapine" model-id="Noscapine_Chen2024_final_model" status="needs_review" stale="false" population="healthy adults" measured-compound="noscapine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 8 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| D1 (h) | `Q310` · D1 | 0.0624 | h | 224.64 | [h] | not captured | exact (1.0) | Tab4:row2:col1, Tab4:row2:col2 | — | 40.6 (None% RSE) |
| CL/F_EM (L/h) | `Q27` · CL/F | 958 | L/h | 0.0002661111111111111 | [l] / [h] | not captured | llm_corrected (0.6) | Tab4:row3:col1, Tab4:row3:col2 | — | 18.8 (None% RSE) |
| Vc/F (L) | `Q290` · V1/F | 49.7 | L | 0.0497 | [l] | not captured | exact (1.0) | Tab4:row6:col1, Tab4:row6:col2 | — | 15.5 (None% RSE) |
| Qp1/F (L/h) | `Q69` · Q/F | 18.9 | L/h | 5.25e-06 | [l] / [h] | not captured | exact (1.0) | Tab4:row7:col1, Tab4:row7:col2 | — | not captured |
| Qp2/F (L/h) | `Q80` · Q2/F | 25.8 | L/h | 7.166666666666667e-06 | [l] / [h] | not captured | special_case (0.95) | Tab4:row9:col1, Tab4:row9:col2 | — | not captured |
| Vp2/F (L) | `Q78` · V3/F | 31.2 | L | 0.0312 | [l] | not captured | exact (1.0) | Tab4:row10:col1, Tab4:row10:col2 | — | not captured |
| F1 (%) | `Q40` · Fab | 82.8 | not captured | not captured | not captured | not captured | exact (1.0) | Tab4:row11:col1, Tab4:row11:col2 | — | 16.4 (None% RSE) |
| TR (1/h) | `Q306` · ktr | 13.0 | 1/h | 0.003611111111111111 | 1/h | not captured | llm (0.6) | Tab4:row12:col1, Tab4:row12:col2 | — | not captured |
| age_on_qp1_f | `Q900` · age_on_qp1_f | 0.348 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab4:row15:col1, Tab4:row15:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `absorption_approximation`: transit absorption (ktr=0.003611/s, n=0) folded to first-order ka = ktr/(n+1) = 0.003611/s — same mean absorption time, no delay phase

**Interpretation flags:**
- table section iiv: 'D1' routed out of structural estimates ('Inter-individual variability (IIV, %)a')
- table section iiv: 'CL/F' routed out of structural estimates ('Inter-individual variability (IIV, %)a')
- table section iiv: 'Vc/F' routed out of structural estimates ('Inter-individual variability (IIV, %)a')
- table section iiv: 'F1' routed out of structural estimates ('Inter-individual variability (IIV, %)a')
- table section covariance: 'D1 and CL/F' routed out of structural estimates ('Correlation for IIVsb')
- table section covariance: 'D1 and V/F' routed out of structural estimates ('Correlation for IIVsb')
- table section covariance: 'D1 and F1' routed out of structural estimates ('Correlation for IIVsb')
- table section iov: 'TR' routed out of structural estimates ('Inter-occasion variability (%)')
- table section iov: 'Qp1/F' routed out of structural estimates ('Inter-occasion variability (%)')
- table section residual_error: 'Additive error' routed out of structural estimates ('Residual variability')
- dropped duplicate Q27 ('CL/F_IM_1.5 (L/h)', value '531') — already have one for this compound
- dropped duplicate Q27 ('CL/F_PM_IM_1.0 (L/h)', value '343') — already have one for this compound
- dropped duplicate Q290 ('Vp1/F (L)', value '243') — already have one for this compound
- dropped unlinked row (NIL): 'TBW on CL/F' — extend the ontology if this is a real PK parameter (source ['Tab4:row14:col1', 'Tab4:row14:col2'])
- covariate level 'Age on Qp1/F' → Q900:age_on_qp1_f = 0.348 (linear_fractional on Q27)
- implicit units: 'TR (1/h)' → 1/h (from the paper text: "The paper explicitly states 'TR (1/h)' in the parameter table excerpt provided in the text.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=noscapine
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- model equation 'CLF = (TBW/77.3)^1.34' not bound — neither LHS nor base term 'TBW' linked to an ontology parameter
- population split: 'final model' subgroup of Chen_2024 (paper reports 2 populations: final model, sir with m/m ratio of 5000/1000)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab4:row17:col1 = '226 (19.1%)c'
- unparsed cell Tab4:row18:col1 = '57.3 (0.1%)'
- unparsed cell Tab4:row19:col1 = '28.5 (5.2%)'
- unparsed cell Tab4:row20:col1 = '34.1 (1.2%)'
- unparsed cell Tab4:row23:col1 = '− 0.175'
- unparsed cell Tab4:row26:col1 = '50.7 (2.7%)c'
- unparsed cell Tab4:row27:col1 = '30.4 (14.5%)'
- unparsed cell Tab4:row29:col1 = '0.0420d (9.5%)c'
- LLM selected parameter table(s) 4
- captured model equation CLF = (TBW/77.3)^1.34

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.071 (2/28 fields) | 26 |

<details><summary>26 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[age_on_qp1_f]` | 0.348 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[age_on_qp1_f]` | not captured | 0.348 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` | not captured | 24.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t]` | not captured | 25.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f_em]` | 958 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f_em]` | not captured | 958 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 44.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d1]` | 0.0624 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[d1]` | not captured | 0.0624 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` | 82.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` | not captured | 82.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qp1/f]` | 18.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qp1/f]` | not captured | 18.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qp2/f]` | 25.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qp2/f]` | not captured | 25.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | not captured | 8.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax (h)b]` | not captured | 40.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tr]` | 13.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tr]` | not captured | 13.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 49.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | not captured | 49.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp1/f]` | not captured | 243 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp2/f]` | 31.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp2/f]` | not captured | 31.2 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | noscapine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | noscapine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row6:col1', 'Tab4:row6:col2'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab4:row12:col1', 'Tab4:row12:col2'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab4:row2:col1', 'Tab4:row2:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row7:col1', 'Tab4:row7:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row10:col1', 'Tab4:row10:col2'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row9:col1', 'Tab4:row9:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 958 L/h | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 49.7 L | not captured | not captured | ['Tab4:row6:col1', 'Tab4:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=noscapine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 3.679999999999999e-05 | 0.00023466367638429097 | 6.3767 | μg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 4.6899999999999995e-05 | 0.00023466367638429097 | 5.0035 | μg/L→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | fail | 8.42 | 0.487316189654421 | 0.0579 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 8.29 | 0.487316189654421 | 0.0588 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 0.19617468489344927 | 0.3923 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 0.19617468489344927 | 0.3923 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_noscapine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chen_2024` / `Chen_2024::final_model`)
- model: `../../../knowledgebase/drugs/drug_noscapine/models/modelica/Noscapine_Chen2024_final_model.mo`
- deviation: `../../../knowledgebase/drugs/drug_noscapine/models/modelica/Noscapine_Chen2024_final_model.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_noscapine/models/modelica/Noscapine_Chen2024_final_model.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_noscapine/Noscapine_Chen2024_final_model/Noscapine_Chen2024_final_model.svg" alt="Noscapine_Chen2024_final_model diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 13 /h, F 1). Dose in the paper: 50 mg.

<dbs-fmusim paramsurl="drugs/drug_noscapine/Noscapine_Chen2024_final_model/Noscapine_Chen2024_final_model_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_noscapine/Noscapine_Chen2024_final_model/Noscapine_Chen2024_final_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Noscapine_Chen2024_final_model_params.json` · controls `Noscapine_Chen2024_final_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:31 UTC</sub>
