<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lenvatinib&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/&quot;},{&quot;label&quot;:&quot;Majid_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lenvatinib — `Lenvatinib_Majid2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Lenvatinib was rejected for a structural-parameter dimensional mismatch, but the record does not identify the parameter or its value.

<div class="pk-model-meta" hidden drug="lenvatinib" model-id="Lenvatinib_Majid2024_reference" status="rejected" stale="false" population="subjects from 19 studies, including healthy subjects and patients with RR-DTC, RCC, and HCC" measured-compound="lenvatinib" parameterization="apparent" topology="2C"></div>

## Citation
Majid O, Hayato S, Sreerama Reddy SH, Lalovic B, Hihara T, Hoshi T et al. Population pharmacokinetic-pharmacodynamic modeling of serum biomarkers as predictors of tumor dynamics following lenvatinib treatment in patients with radioiodine-refractory differentiated thyroid cancer (RR-DTC). CPT: pharmacometrics & systems pharmacology 13(6):954–969 (2024).
  ·  DOI: [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130)

## Population and dosing

**Population:** subjects from 19 studies, including healthy subjects and patients with RR-DTC, RCC, and HCC · condition healthy and cancer populations, including RR-DTC, RCC, and HCC · n = 1921.

**Dosing:** 4, 8, 10, 14, 18, 20, 24 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 6.28 | L/h | 2.88 |
| V1/F (L) | V1/F | 46.0 | L | 2.61 |
| V2/F (L) | V2/F | 28.3 | L | 5.90 |
| V3/F (L) | V3/F | 30.9 | L | 3.09 |
| Q1 (L/h) | Q | 3.57 | L/h | 2.89 |
| Ka [1/h] | kabs | 0.803 | 1/h | 4.36 |
| D1 [h] | D1 | 1.27 | h | 3.61 |
| F1 | Fab | 0.882 |  | 1.10 |
| ALP (&gt;ULN) ~ CL/F (ratio) | CL_ratio | 0.910 | ratio | 0.956 |
| theta_cl_ratio_cyp3a4_power | theta_cl_ratio_cyp3a4_power | 0.896 |  | 5.30 |
| theta_cl_ratio_albumin_power | theta_cl_ratio_albumin_power | 0.900 |  | 1.98 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Lenvatinib was rejected for a structural-parameter dimensional mismatch, but the record does not identify the parameter or its value.**

The findings report a dimensional mismatch and say a reported unit could not be converted to SI, leaving the affected parameter without an SI value. They do not specify which lenvatinib parameter or value was involved, so the cause cannot be tied to a particular parameter in the record. Extracted — lenvatinib: CL/F 6.28 L/h, V1/F 46 L, V2/F 28.3 L, V3/F 30.9 L, Q 3.57 L/h, kabs 0.803 1/h, D1 1.27 h, Fab 0.882, … (+1).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of alp (&gt;uln) - cl/f: this record has 0.910, the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 6.28 | L/h | 1.744e-06 | m3/s | l/h | 2.88 | exact (1) | psp413130-tbl-0001:row2:col1, psp413130-tbl-0001:row2:col2 |
| V1/F (L) | `Q290` · V1/F | 46.0 | L | 0.046 | m3 | l | 2.61 | exact (1) | psp413130-tbl-0001:row3:col1, psp413130-tbl-0001:row3:col2 |
| V2/F (L) | `Q82` · V2/F | 28.3 | L | 0.0283 | m3 | l | 5.90 | exact (1) | psp413130-tbl-0001:row4:col1, psp413130-tbl-0001:row4:col2 |
| V3/F (L) | `Q78` · V3/F | 30.9 | L | 0.0309 | m3 | l | 3.09 | exact (1) | psp413130-tbl-0001:row5:col1, psp413130-tbl-0001:row5:col2 |
| Q1 (L/h) | `Q30` · Q | 3.57 | L/h | 9.917e-07 | m3/s | l/h | 2.89 | exact (1) | psp413130-tbl-0001:row6:col1, psp413130-tbl-0001:row6:col2 |
| Ka [1/h] | `Q49` · kabs | 0.803 | 1/h | 0.0002231 | 1/s | 1/h | 4.36 | llm_confirmed (0.6) | psp413130-tbl-0001:row8:col1, psp413130-tbl-0001:row8:col2 |
| D1 [h] | `Q310` · D1 | 1.27 | h | 4572 | s | h | 3.61 | llm_confirmed (0.6) | psp413130-tbl-0001:row9:col1, psp413130-tbl-0001:row9:col2 |
| F1 | `Q40` · Fab | 0.882 |  |  |  |  | 1.10 | exact (1) | psp413130-tbl-0001:row10:col1, psp413130-tbl-0001:row10:col2 |
| ALP (&gt;ULN) ~ CL/F (ratio) | `Q31` · CL_ratio | 0.910 | ratio |  |  | ratio | 0.956 | llm_corrected (0.6) | psp413130-tbl-0001:row13:col1, psp413130-tbl-0001:row13:col2 |
| theta_cl_ratio_cyp3a4_power | `Q900` · theta_cl_ratio_cyp3a4_power | 0.896 |  |  |  |  | 5.30 |  | psp413130-tbl-0001:row12:col1, psp413130-tbl-0001:row12:col2 |
| theta_cl_ratio_albumin_power | `Q900` · theta_cl_ratio_albumin_power | 0.900 |  |  |  |  | 1.98 |  | psp413130-tbl-0001:row14:col1, psp413130-tbl-0001:row14:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional (CV%; healthy subjects studies)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional (CV%; Patients studies)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional (CV%; TAD ≤2 h)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additional (ng/mL; TAD ≤2 h)' routed out of structural estimates ('Residual variability')
- dropped duplicate Q30 ('Q2 (L/h)', value '0.688') — already have one for this compound
- unit_dimension_mismatch: 'ALP (&gt;ULN) ~ CL/F (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Healthy population ~ CL/F (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q31 ('Healthy population ~ CL/F (ratio)', value '1.19') — already have one for this compound
- unit_dimension_mismatch: 'DTC population ~ CL/F (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q31 ('DTC population ~ CL/F (ratio)', value '0.951') — already have one for this compound
- unit_dimension_mismatch: 'HCC population ~ CL/F (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q31 ('HCC population ~ CL/F (ratio)', value '0.862') — already have one for this compound
- unit_dimension_mismatch: 'RCC population ~ CL/F (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q31 ('RCC population ~ CL/F (ratio)', value '0.851') — already have one for this compound
- dropped duplicate Q27 ('CL/F', value '35.6') — already have one for this compound
- dropped duplicate Q290 ('V1/F', value '42.8') — already have one for this compound
- dropped duplicate Q82 ('V2/F', value '68.2') — already have one for this compound
- dropped duplicate Q78 ('V3/F', value '36.2') — already have one for this compound
- dropped duplicate Q49 ('Ka', value '58.8') — already have one for this compound
- dropped duplicate Q310 ('D1', value '96.7') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['psp413130-tbl-0001:footnote', 'psp413130-tbl-0001:footnote', 'psp413130-tbl-0001:footnote', 'psp413130-tbl-0001:footnote', 'psp413130-tbl-0001:footnote', 'psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.896 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.9 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.91 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1.19 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.951 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.862 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.851 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.882 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lenvatinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp413130-tbl-0001:row2:col3 = '6.33 (5.93–6.63)'
- unparsed cell psp413130-tbl-0001:row3:col3 = '46.0 (43.5–48.3)'
- unparsed cell psp413130-tbl-0001:row4:col3 = '28.2 (26.1–30.5)'
- unparsed cell psp413130-tbl-0001:row5:col3 = '31.1 (28.6–33.3)'
- unparsed cell psp413130-tbl-0001:row6:col3 = '3.60 (3.23–3.94)'
- unparsed cell psp413130-tbl-0001:row7:col3 = '0.696 (0.606–0.774)'
- unparsed cell psp413130-tbl-0001:row8:col3 = '0.797 (0.725–0.867)'
- unparsed cell psp413130-tbl-0001:row9:col3 = '1.27 (1.18–1.35)'
- unparsed cell psp413130-tbl-0001:row10:col3 = '0.883 (0.850–0.915)'
- unparsed cell psp413130-tbl-0001:row12:col3 = '0.897 (0. 835–0.958)'
- unparsed cell psp413130-tbl-0001:row13:col3 = '0.913 (0.883–0.937)'
- unparsed cell psp413130-tbl-0001:row14:col3 = '0.906 (0.831–0.968)'
- unparsed cell psp413130-tbl-0001:row15:col3 = '1.18 (1.11–1.28)'
- unparsed cell psp413130-tbl-0001:row16:col3 = '0.944 (0.885–1.02)'
- unparsed cell psp413130-tbl-0001:row17:col3 = '0.856 (0.810–0.915)'
- unparsed cell psp413130-tbl-0001:row18:col3 = '0.847 (0.797–0.905)'
- unparsed cell psp413130-tbl-0001:row20:col3 = '35.5 (33.4–37.7)'
- unparsed cell psp413130-tbl-0001:row21:col3 = '42.4 (38.7–46.6)'
- unparsed cell psp413130-tbl-0001:row22:col3 = '67.4 (59.8–75.3)'
- unparsed cell psp413130-tbl-0001:row23:col3 = '37.2 (27.5–43.2)'
- unparsed cell psp413130-tbl-0001:row24:col3 = '58.0 (47.9–68.9)'
- unparsed cell psp413130-tbl-0001:row25:col3 = '96.7 (91.8–102.1)'
- unparsed cell psp413130-tbl-0001:row27:col3 = '17.5 (15.9–19.1)'
- unparsed cell psp413130-tbl-0001:row28:col3 = '37.6 (36.6–38.6)'
- unparsed cell psp413130-tbl-0001:row29:col3 = '43.5 (39.7–45.9)'
- unparsed cell psp413130-tbl-0001:row30:col3 = '19.9 (14.3–25.2)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.769 (20/26 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[alp (&gt;uln) - cl/f]` | 0.910 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f].covariate_forms` | [] | ['power'] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_f_albumin_power]` |  | 0.900 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_ratio_albumin_power]` | 0.900 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_ratio_cyp3a4_power]` | 0.896 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q31_cyp3a4_power]` |  | 0.896 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp413130-tbl-0001:row2:col1', 'psp413130-tbl-0001:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp413130-tbl-0001:row3:col1', 'psp413130-tbl-0001:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413130-tbl-0001:row6:col1', 'psp413130-tbl-0001:row6:col2'] |
| C5_dimension_Q31 | fail | dimensionless | ratio | ['psp413130-tbl-0001:row13:col1', 'psp413130-tbl-0001:row13:col2'] |
| C5_dimension_Q310 | pass | [time] |  | ['psp413130-tbl-0001:row9:col1', 'psp413130-tbl-0001:row9:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413130-tbl-0001:row8:col1', 'psp413130-tbl-0001:row8:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['psp413130-tbl-0001:row5:col1', 'psp413130-tbl-0001:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp413130-tbl-0001:row4:col1', 'psp413130-tbl-0001:row4:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.28 L/h | ['psp413130-tbl-0001:row2:col1', 'psp413130-tbl-0001:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 46 L | ['psp413130-tbl-0001:row3:col1', 'psp413130-tbl-0001:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 28.3 L | ['psp413130-tbl-0001:row4:col1', 'psp413130-tbl-0001:row4:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blenvatinib%5D%20Lenvatinib_Majid2024_reference&body=Drug%3A%20lenvatinib%0ARecord%3A%20Lenvatinib_Majid2024_reference%0APaper%3A%20Majid_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lenvatinib/Lenvatinib_Majid2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:38 UTC</sub>
