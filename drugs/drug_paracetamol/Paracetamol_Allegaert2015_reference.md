<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;paracetamol&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/&quot;},{&quot;label&quot;:&quot;Allegaert_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paracetamol_Anderson2015_reference&quot;,&quot;label&quot;:&quot;Anderson_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/Paracetamol_Anderson2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2018_PPPM&quot;,&quot;label&quot;:&quot;Hannam_2018 \u00b7 PPPM&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Hannam_2018_PPPM.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Anderson_2015_VAS&quot;,&quot;label&quot;:&quot;Anderson_2015 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Anderson_2015_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Gibb_2008_VAS&quot;,&quot;label&quot;:&quot;Gibb_2008 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Gibb_2008_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paracetamol — `Paracetamol_Allegaert2015_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2), gpt-oss:120b (not confirmed, agreement 0.733). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

### Reviewer guidance

**The paracetamol parent-metabolite model was held back because two parameters, the peripheral volume V2 (22.3 L) and the absorption lag time tlag (4.2 min), were not extracted, so no value was available for them.**

The record covers only 4 of the 6 expected parameters; V2 and tlag were neither emitted nor defaulted, meaning no value was extracted and a library placeholder would have been used for the peripheral volume and absorption lag time. The metabolite structure is otherwise specified, with formation clearances of 2.02 L/h to paracetamol-glucuronide and 3.82 L/h to paracetamol-sulphate. A second reader also disagreed on several values, reading Q as absent rather than 1.34 L/h and assigning a different identifier to the total clearance parameter. Extracted — paracetamol-glucuronide: CLfm 2.02 L/h; paracetamol: CLfm 3.82 L/h, CL 0.94 L/h, V1 1.83 L, V2 22.3 L, V3 23.9 L, Q 1.34 L/h, Q2 61.6 L/h, tlag 4.2 min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has paracetamol, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:29:50.316510+00:00) predates the upstream re-run (2026-10-07 06:04:48.319045+00:00). Current validate status: `extracted`.

## Citation
Allegaert K et al., Paracetamol pharmacokinetics and metabo…, BMC anesthesiology (2015)
  ·  DOI: [10.1186/s12871-015-0144-3](https://doi.org/10.1186/s12871-015-0144-3)

<div class="pk-model-meta" hidden drug="paracetamol" model-id="Paracetamol_Allegaert2015_reference" status="extracted" stale="true" population="young women" measured-compound="paracetamol" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLPG (L/h) | `Q370` · CLfm | 2.02 | L/h | 5.611111111111111e-07 | [l] / [h] | not captured | exact (1.0) | Tab2:row5:col3, Tab2:row5:col4 | — | not captured |
| CLPS (L/h) | `Q370` · CLfm | 3.82 | L/h | 1.061111111111111e-06 | [l] / [h] | not captured | exact (1.0) | Tab2:row9:col1, Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4 | — | not captured |
| CLPU (L/h) | `Q22` · CL | 0.94 | L/h | 2.6111111111111113e-07 | [l] / [h] | not captured | exact (1.0) | Tab2:row11:col4 | — | not captured |
| V1 (L) | `Q63` · V1 | 1.83 | L | 0.00183 | [l] | not captured | exact (1.0) | Tab2:row13:col2, Tab2:row13:col3, Tab2:row13:col4 | — | not captured |
| V2 (L) | `Q64` · V2 | 22.3 | L | 0.0223 | [l] | not captured | exact (1.0) | Tab2:row15:col1, Tab2:row15:col2, Tab2:row15:col3, Tab2:row15:col4 | — | not captured |
| V8 (L) | `Q77` · V3 | 23.9 | L | 0.023899999999999998 | [l] | not captured | exact (1.0) | Tab2:row16:col1, Tab2:row16:col2, Tab2:row16:col3, Tab2:row16:col4 | — | not captured |
| Q (L/h) | `Q30` · Q | 1.34 | L/h | 3.722222222222222e-07 | [l] / [h] | not captured | exact (1.0) | Tab2:row17:col1, Tab2:row17:col2, Tab2:row17:col3, Tab2:row17:col4 | — | not captured |
| Q1 (L/h) | `Q99` · Q2 | 61.6 | L/h | 1.7111111111111112e-05 | [l] / [h] | not captured | exact (1.0) | Tab2:row18:col1, Tab2:row18:col3, Tab2:row18:col4 | — | not captured |
| Tlag | `Q83` · tlag | 4.2 | min | 252.0 | h | not captured | review_gapfill (0.7) | Gibb_2008:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωCLpg2' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωV12' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωCLpu2' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ2 (P plasma)' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ2 (P G)' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ2 (P S)' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ2 (P u)' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ2 (P plasma) Gregoire [15]' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ2 (P plasma), additive Gregoire [15]' routed out of structural estimates ('Residual error')
- dropped duplicate Q370 ('2.03(8.8) × 7.33 = 14.9', value '1.48') — already have one for this compound
- dropped duplicate Q370 ('Preterm = 5.61 (7.9)', value '5.65') — already have one for this compound
- linked 'CLPU (L/h)' as 'CL' → Q22 (CL) for  — compound marker removed
- dropped duplicate Q63 ('34.4', value '18.5') — already have one for this compound
- dropped unlinked row (NIL): 'MF' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col1', 'Tab2:row20:col2', 'Tab2:row20:col3', 'Tab2:row20:col4'])
- dropped unlinked row (NIL): '−2LL' — extend the ontology if this is a real PK parameter (source ['Tab2:row33:col1', 'Tab2:row33:col2', 'Tab2:row33:col3', 'Tab2:row33:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paracetamol
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [0, 0]
- row roles: 2 per-group rows of paracetamol residual_error but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 28 linked by role; re-tagged parent→paracetamol-glucuronide ×11, parent→paracetamol-sulphate ×8
- gap-filled Q83 (tlag) from Gibb_2008's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row11:col1 = '0.93 (6.3) + 0.0053 (28.2) × (UP-100)'
- unparsed cell Tab2:row11:col2 = '0.93 (6.3) + 0.0053 (28.2) × (UP-100)'
- unparsed cell Tab2:row11:col3 = '0.93 (6.3) + 0.0053 (28.2) × (UP-100)'
- unparsed cell Tab2:row13:col1 = '1.86 (6.3) × 18.5 ='
- unparsed cell Tab2:row18:col2 = '0.13 (17.9) × 61.1 = 7.9'
- unparsed cell Tab2:row28:col4 = '0.14 (23.5))'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (4/20 fields) | 16 |
| `gpt-oss:120b` | not confirmed | 0.733 (11/15 fields) | 4 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[34.4]` | not captured | 18.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clpu]` | 0.94 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clpu]` | not captured | 0.94 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1]` | 61.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1]` | not captured | 61.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 1.34 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | not captured | 1.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 4.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 1.83 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | not captured | 1.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 22.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | not captured | 22.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v8]` | 23.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v8]` | not captured | 23.9 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | paracetamol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | paracetamol | unknown | mismatch |
| `gpt-oss:120b` | `parameters[2.03(8.8) × 7.33 = 14.9]` | not captured | 1.48 | only_one_extracted |
| `gpt-oss:120b` | `parameters[34.4]` | not captured | 18.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clpu].parameter_id` | Q22 | Q24 | mismatch |
| `gpt-oss:120b` | `parameters[q]` | 1.34 | not captured | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row11:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row17:col1', 'Tab2:row17:col2', 'Tab2:row17:col3', 'Tab2:row17:col4'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row5:col3', 'Tab2:row5:col4'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row9:col1', 'Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row16:col1', 'Tab2:row16:col2', 'Tab2:row16:col3', 'Tab2:row16:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Gibb_2008:review'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row18:col1', 'Tab2:row18:col3', 'Tab2:row18:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.94 | not captured | not captured | ['Tab2:row11:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.94 L/h | not captured | not captured | ['Tab2:row11:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.83 L | not captured | not captured | ['Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 22.3 L | not captured | not captured | ['Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=paracetamol) | C_central | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['V2', 'tlag'] |
| T3_shared_parameters | not captured | pass | 2 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_paracetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Allegaert_2015` / `Allegaert_2015::reference`)
- model: `../../../knowledgebase/drugs/drug_paracetamol/models/modelica/Paracetamol_Allegaert2015_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_paracetamol/models/modelica/Paracetamol_Allegaert2015_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_paracetamol/models/modelica/Paracetamol_Allegaert2015_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_paracetamol/Paracetamol_Allegaert2015_reference/Paracetamol_Allegaert2015_reference_modelica.zip" download>Paracetamol_Allegaert2015_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Allegaert2015_reference/Paracetamol_Allegaert2015_reference_matlab.zip" download>Paracetamol_Allegaert2015_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Allegaert2015_reference/Paracetamol_Allegaert2015_reference_matlab_simbio.zip" download>Paracetamol_Allegaert2015_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Allegaert2015_reference/Paracetamol_Allegaert2015_reference_sbml.zip" download>Paracetamol_Allegaert2015_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Allegaert2015_reference/Paracetamol_Allegaert2015_reference_cellml.zip" download>Paracetamol_Allegaert2015_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:04 UTC</sub>
