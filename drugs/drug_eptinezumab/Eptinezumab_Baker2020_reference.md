<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;eptinezumab&quot;,&quot;href&quot;:&quot;drugs/drug_eptinezumab/&quot;},{&quot;label&quot;:&quot;Baker_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eptinezumab_Baker2020_reference&quot;,&quot;label&quot;:&quot;Baker_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eptinezumab — `Eptinezumab_Baker2020_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1), gpt-oss:120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 648, model 407); the model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 0.183).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUCt, Cmax, Cavg and Ctrough), so that value has no SI equivalent. Extracted — eptinezumab: AUCt 158 h·μg mL−1, Cmax 0.279 μg mL−1, Cavg 0.0785 μg mL−1, Ctrough 0.0232 μg mL−1, Css 0.091 μg mL−1, CL 0.0062 L h−1, V 3.64 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has eptinezumab, the second reading unknown; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:37:55.514421+00:00) predates the upstream re-run (2026-10-07 06:32:48.792376+00:00). Current validate status: `extracted`.

## Citation
Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020)
  ·  DOI: [10.1002/prp2.567](https://doi.org/10.1002/prp2.567)

<div class="pk-model-meta" hidden drug="eptinezumab" model-id="Eptinezumab_Baker2020_reference" status="extracted" stale="true" population="patients with episodic or chronic migraine" measured-compound="eptinezumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC0‐12wk, mean (CV%), h·μg mL−1 | `Q19` · AUCt | 158 | h·μg mL−1 | not captured | [[h] · [µg]] / [ml] | not captured | llm (0.6) | prp2567-tbl-0002:row2:col1, prp2567-tbl-0002:row2:col2, prp2567-tbl-0002:row2:col3, prp2567-tbl-0002:row2:col4 | — | not captured |
| C max, mean (CV%), μg mL−1 | `Q32` · Cmax | 0.279 | μg mL−1 | not captured | [µg] / [ml] | not captured | llm (0.6) | prp2567-tbl-0002:row3:col1, prp2567-tbl-0002:row3:col2, prp2567-tbl-0002:row3:col3, prp2567-tbl-0002:row3:col4, prp2567-tbl-0002:row3:col5, prp2567-tbl-0002:row3:col6, prp2567-tbl-0002:row3:col7 | — | not captured |
| C avg, mean (CV%), μg mL−1 | `Q71` · Cavg | 0.0785 | μg mL−1 | not captured | [µg] / [ml] | not captured | llm (0.6) | prp2567-tbl-0002:row4:col1, prp2567-tbl-0002:row4:col2, prp2567-tbl-0002:row4:col3, prp2567-tbl-0002:row4:col4, prp2567-tbl-0002:row4:col5, prp2567-tbl-0002:row4:col6, prp2567-tbl-0002:row4:col7 | — | not captured |
| C trough, mean (CV%), μg mL−1 | `Q37` · Ctrough | 0.0232 | μg mL−1 | not captured | [µg] / [ml] | not captured | llm_confirmed (0.6) | prp2567-tbl-0002:row5:col1, prp2567-tbl-0002:row5:col2, prp2567-tbl-0002:row5:col3, prp2567-tbl-0002:row5:col4, prp2567-tbl-0002:row5:col5, prp2567-tbl-0002:row5:col6, prp2567-tbl-0002:row5:col7 | — | not captured |
| Css,avg, mean (CV%), μg mL−1 | `Q34` · Css | 0.0910 | μg mL−1 | not captured | [µg] / [ml] | not captured | llm_confirmed (0.6) | Baker_2020_table_3:row2:col1, Baker_2020_table_3:row2:col2, Baker_2020_table_3:row2:col3, Baker_2020_table_3:row2:col4, Baker_2020_table_3:row2:col5, Baker_2020_table_3:row2:col6, Baker_2020_table_3:row2:col7 | — | not captured |
| CL | `Q22` · CL | 0.0062 | L h−1 | 1.7222222222222222e-09 | L/h | not captured | exact (1.0) | Baker_2020:results_prose | — | not captured |
| the central volume of distribution (Vc) | `Q61` · V | 3.64 | L | 0.00364 | L | not captured | boundary_compartment (0.9) | Baker_2020:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| 1 (n = 4) | Q308 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'n = 4' (Q3)
- dropped duplicate Q19 ('AUC0‐τ, mean (CV%), h·μg mL−1', value '183') — already have one for this compound
- dropped unlinked row (NIL): 'Rac(AUCτ), mean (CV%)' — extend the ontology if this is a real PK parameter (source ['Baker_2020_table_3:row3:col1', 'Baker_2020_table_3:row3:col2', 'Baker_2020_table_3:row3:col3', 'Baker_2020_table_3:row3:col4', 'Baker_2020_table_3:row3:col5', 'Baker_2020_table_3:row3:col6', 'Baker_2020_table_3:row3:col7'])
- dropped unlinked row (NIL): 'Rac(C max), mean (CV%)' — extend the ontology if this is a real PK parameter (source ['Baker_2020_table_3:row4:col1', 'Baker_2020_table_3:row4:col2', 'Baker_2020_table_3:row4:col3', 'Baker_2020_table_3:row4:col4', 'Baker_2020_table_3:row4:col5', 'Baker_2020_table_3:row4:col6', 'Baker_2020_table_3:row4:col7'])
- salvaged Q22 ('CL'=0.0062) from results prose — parameter table was unreadable
- salvaged Q63 ('the central volume of distribution (Vc)'=3.64) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=eptinezumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'the central volume of distribution (Vc)' is the general volume)
- status held at route_to_review — not promoted
- molar mass: none found for 'eptinezumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell prp2567-tbl-0002:row2:col5 = '17 900 (29.0)'
- unparsed cell prp2567-tbl-0002:row2:col6 = '54 500 (27.7)'
- unparsed cell prp2567-tbl-0002:row2:col7 = '164 000 (24.0)'
- unparsed cell Baker_2020_table_3:row1:col5 = '20 800 (32.1)'
- unparsed cell Baker_2020_table_3:row1:col6 = '63 100 (30.1)'
- unparsed cell Baker_2020_table_3:row1:col7 = '187 000 (25.4)'
- companion parameter table 3 transcribed (31 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (2/20 fields) | 18 |
| `gpt-oss:120b` | partly confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[1]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0‐12wk, mean (cv%)]` | 158 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0‐12wk, mean (cv%)]` | not captured | 158 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0‐τ, mean (cv%)]` | not captured | 183 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c avg, mean (cv%)]` | 0.0785 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c avg, mean (cv%)]` | not captured | 0.0785 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max, mean (cv%)]` | 0.279 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max, mean (cv%)]` | not captured | 0.279 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c trough, mean (cv%)]` | 0.0232 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c trough, mean (cv%)]` | not captured | 0.0232 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.0062 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | not captured | 0.0062 | only_one_extracted |
| `gpt-oss-120b` | `parameters[css,avg, mean (cv%)]` | 0.0910 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[css,avg, mean (cv%)]` | not captured | 0.0910 | only_one_extracted |
| `gpt-oss-120b` | `parameters[the central volume of distribution]` | 3.64 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | 3.64 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | eptinezumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | eptinezumab | unknown | mismatch |
| `gpt-oss:120b` | `parameters[auc0‐τ, mean (cv%)]` | not captured | 183 | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution]` | 3.64 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 0.0062 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['prp2567-tbl-0002:row2:col1', 'prp2567-tbl-0002:row2:col2', 'prp2567-tbl-0002:row2:col3', 'prp2567-tbl-0002:row2:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['prp2567-tbl-0002:row3:col1', 'prp2567-tbl-0002:row3:col2', 'prp2567-tbl-0002:row3:col3', 'prp2567-tbl-0002:row3:col4', 'prp2567-tbl-0002:row3:col5', 'prp2567-tbl-0002:row3:col6', 'prp2567-tbl-0002:row3:col7'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Baker_2020_table_3:row2:col1', 'Baker_2020_table_3:row2:col2', 'Baker_2020_table_3:row2:col3', 'Baker_2020_table_3:row2:col4', 'Baker_2020_table_3:row2:col5', 'Baker_2020_table_3:row2:col6', 'Baker_2020_table_3:row2:col7'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['prp2567-tbl-0002:row5:col1', 'prp2567-tbl-0002:row5:col2', 'prp2567-tbl-0002:row5:col3', 'prp2567-tbl-0002:row5:col4', 'prp2567-tbl-0002:row5:col5', 'prp2567-tbl-0002:row5:col6', 'prp2567-tbl-0002:row5:col7'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['prp2567-tbl-0002:row4:col1', 'prp2567-tbl-0002:row4:col2', 'prp2567-tbl-0002:row4:col3', 'prp2567-tbl-0002:row4:col4', 'prp2567-tbl-0002:row4:col5', 'prp2567-tbl-0002:row4:col6', 'prp2567-tbl-0002:row4:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0062 | not captured | not captured | ['Baker_2020:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0062 L/h | not captured | not captured | ['Baker_2020:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.64 L | not captured | not captured | ['Baker_2020:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=eptinezumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 37.3 | 0.0027468628369827115 | not captured | unresolved concentration unit (exp 'μg mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 114 | 0.0027468628369827115 | not captured | unresolved concentration unit (exp 'μg mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 30 | 0.0027468628369827115 | not captured | unresolved concentration unit (exp 'minutes', sim 'kg/m3') |
| T1_cmax | reference | skipped | 60 | 0.0027468628369827115 | not captured | unresolved concentration unit (exp 'minutes', sim 'kg/m3') |
| T1_cmax | reference | skipped | 37 | 0.0027468628369827115 | not captured | unresolved concentration unit (exp 'μg mL−1', sim 'kg/m3') |
| T1_t_half_beta | reference | fail | 648.0 | 406.94151313625554 | 0.628 | days→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 0.1833333333517265 | 0.3667 | minutes→SI vs simulated h |
| T1_tmax | reference | fail | 1.0 | 0.1833333333517265 | 0.1833 | minutes→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_eptinezumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Baker_2020` / `Baker_2020::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_eptinezumab/models/modelica/Eptinezumab_Baker2020_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_eptinezumab/models/modelica/Eptinezumab_Baker2020_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_eptinezumab/models/modelica/Eptinezumab_Baker2020_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_modelica.zip" download>Eptinezumab_Baker2020_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_fmi.zip" download>Eptinezumab_Baker2020_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_matlab.zip" download>Eptinezumab_Baker2020_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_matlab_simbio.zip" download>Eptinezumab_Baker2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_sbml.zip" download>Eptinezumab_Baker2020_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_cellml.zip" download>Eptinezumab_Baker2020_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference.svg" alt="Eptinezumab_Baker2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. Doses in the paper: 10–1000 mg.

<dbs-fmusim paramsurl="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Eptinezumab_Baker2020_reference_params.json` · controls `Eptinezumab_Baker2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:32 UTC</sub>
