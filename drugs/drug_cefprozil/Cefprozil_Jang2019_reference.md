<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefprozil&quot;,&quot;href&quot;:&quot;drugs/drug_cefprozil/&quot;},{&quot;label&quot;:&quot;Jang_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefprozil — `Cefprozil_Jang2019_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kabs has no unit; the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="cefprozil" model-id="Cefprozil_Jang2019_reference" status="needs_review" stale="false" population="healthy male Koreans" measured-compound="cefprozil" parameterization="mechanistic" topology="1C"></div>

## Citation
Jang JH, Jeong SH, Cho HY, Lee YB. Population Pharmacokinetics of. Pharmaceutics 11(10) (2019).
  ·  DOI: [10.3390/pharmaceutics11100531](https://doi.org/10.3390/pharmaceutics11100531)

## Population and dosing

**Population:** healthy male Koreans · condition healthy · age group adult · n = 35.

**Dosing:** 1000 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| tvV (mL) | V | 34617.50 | mL | 5.77 |
| tvCl (mL/h) | CL | 17701.80 | mL/h | 3.38 |
| tvTlag (h) | tlag | 0.352 | h | 5.09 |
| tvKa (1/h) | kabs | 0.829 |  | 10.98 |
| 01 | equation variable | 7 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.923). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kabs has no unit; the clearance plausibility check could not be computed.**

Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — cefprozil: V 3.46e+04 mL, CL 1.77e+04 mL/h, tlag 0.352 h, kabs 0.829.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 01: this record has 7, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| tvV (mL) | `Q61` · V | 34617.50 | mL | 0.03462 | m3 | ml | 5.77 | tv_prefix (0.95) | pharmaceutics-11-00531-t004:row3:col1, pharmaceutics-11-00531-t004:row3:col2, pharmaceutics-11-00531-t004:row3:col3, pharmaceutics-11-00531-t004:row12:col1, pharmaceutics-11-00531-t004:row12:col2, pharmaceutics-11-00531-t004:row12:col3, pharmaceutics-11-00531-t004:row23:col1, pharmaceutics-11-00531-t004:row23:col2, pharmaceutics-11-00531-t004:row23:col3, pharmaceutics-11-00531-t004:row32:col1, pharmaceutics-11-00531-t004:row32:col2, pharmaceutics-11-00531-t004:row32:col3, pharmaceutics-11-00531-t004:row43:col1, pharmaceutics-11-00531-t004:row43:col2, pharmaceutics-11-00531-t004:row43:col3 |
| tvCl (mL/h) | `Q22` · CL | 17701.80 | mL/h | 4.917e-06 | m3/s | ml/h | 3.38 | tv_prefix (0.95) | pharmaceutics-11-00531-t004:row4:col1, pharmaceutics-11-00531-t004:row4:col2, pharmaceutics-11-00531-t004:row4:col3, pharmaceutics-11-00531-t004:row13:col1, pharmaceutics-11-00531-t004:row13:col2, pharmaceutics-11-00531-t004:row13:col3, pharmaceutics-11-00531-t004:row24:col1, pharmaceutics-11-00531-t004:row24:col2, pharmaceutics-11-00531-t004:row24:col3, pharmaceutics-11-00531-t004:row33:col1, pharmaceutics-11-00531-t004:row33:col2, pharmaceutics-11-00531-t004:row33:col3, pharmaceutics-11-00531-t004:row44:col1, pharmaceutics-11-00531-t004:row44:col2, pharmaceutics-11-00531-t004:row44:col3 |
| tvTlag (h) | `Q83` · tlag | 0.352 | h | 1267 | s | h | 5.09 | tv_prefix (0.95) | pharmaceutics-11-00531-t004:row5:col1, pharmaceutics-11-00531-t004:row5:col2, pharmaceutics-11-00531-t004:row5:col3, pharmaceutics-11-00531-t004:row14:col1, pharmaceutics-11-00531-t004:row14:col2, pharmaceutics-11-00531-t004:row14:col3, pharmaceutics-11-00531-t004:row25:col1, pharmaceutics-11-00531-t004:row25:col2, pharmaceutics-11-00531-t004:row25:col3, pharmaceutics-11-00531-t004:row34:col1, pharmaceutics-11-00531-t004:row34:col2, pharmaceutics-11-00531-t004:row34:col3, pharmaceutics-11-00531-t004:row45:col1, pharmaceutics-11-00531-t004:row45:col2, pharmaceutics-11-00531-t004:row45:col3 |
| tvKa (1/h) | `Q49` · kabs | 0.829 |  |  |  |  | 10.98 | tv_prefix (0.95) | pharmaceutics-11-00531-t004:row6:col1, pharmaceutics-11-00531-t004:row6:col2, pharmaceutics-11-00531-t004:row6:col3, pharmaceutics-11-00531-t004:row15:col1, pharmaceutics-11-00531-t004:row15:col2, pharmaceutics-11-00531-t004:row15:col3, pharmaceutics-11-00531-t004:row26:col1, pharmaceutics-11-00531-t004:row26:col2, pharmaceutics-11-00531-t004:row26:col3, pharmaceutics-11-00531-t004:row35:col1, pharmaceutics-11-00531-t004:row35:col2, pharmaceutics-11-00531-t004:row35:col3, pharmaceutics-11-00531-t004:row46:col1, pharmaceutics-11-00531-t004:row46:col2, pharmaceutics-11-00531-t004:row46:col3 |
| 01 | `Q900` · equation variable | 7 |  |  |  |  |  | llm (0.6) | Jang_2019_table_2:row2:col2, Jang_2019_table_2:row2:col3, Jang_2019_table_2:row2:col4, Jang_2019_table_2:row16:col2, Jang_2019_table_2:row16:col3, Jang_2019_table_2:row16:col4, Jang_2019_table_2:row30:col2, Jang_2019_table_2:row30:col3, Jang_2019_table_2:row30:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: '02-01' routed out of structural estimates ('Residual error model')
- table section residual_error: '02-02' routed out of structural estimates ('Residual error model')
- table section residual_error: '02-03 *' routed out of structural estimates ('Residual error model')
- table section iiv: '02-03-01' routed out of structural estimates ('IIV model')
- table section iiv: '02-03-02' routed out of structural estimates ('IIV model')
- table section iiv: '02-03-03 *' routed out of structural estimates ('IIV model')
- table section iiv: '02-03-04' routed out of structural estimates ('IIV model')
- table section iiv: '02-03-05' routed out of structural estimates ('IIV model')
- table section residual_error: '02-01 *' routed out of structural estimates ('Residual error model')
- table section residual_error: '02-03' routed out of structural estimates ('Residual error model')
- table section iiv: '02-03-01 *' routed out of structural estimates ('IIV model')
- table section iiv: '02-03-03' routed out of structural estimates ('IIV model')
- column 'nparameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '-2ll' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'aic' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '△-2ll' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '△aic' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q22 ('dCldCrCl', value '0.003') — already have one for this compound
- dropped unlinked row (NIL): '02 *' — extend the ontology if this is a real PK parameter (source ['Jang_2019_table_2:row3:col2', 'Jang_2019_table_2:row3:col3', 'Jang_2019_table_2:row3:col4', 'Jang_2019_table_2:row3:col5', 'Jang_2019_table_2:row3:col6', 'Jang_2019_table_2:row17:col2', 'Jang_2019_table_2:row17:col3', 'Jang_2019_table_2:row17:col4', 'Jang_2019_table_2:row17:col5', 'Jang_2019_table_2:row17:col6', 'Jang_2019_table_2:row31:col2', 'Jang_2019_table_2:row31:col3', 'Jang_2019_table_2:row31:col4', 'Jang_2019_table_2:row31:col5', 'Jang_2019_table_2:row31:col6'])
- dropped value-less row: 'Base model'
- dropped value-less row: 'Total protein on clearance'
- dropped value-less row: 'Albumin on clearance'
- dropped value-less row: 'CrCl on clearance *'
- dropped value-less row: 'Weight on volume'
- dropped value-less row: 'BSA on clearance'
- dropped value-less row: 'Base model *'
- dropped value-less row: 'CrCl on clearance'
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (tvV (mL)); Q22 (tvCl (mL/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefprozil
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 2 transcribed (133 record(s), model stage 'base')
- companion parameter table 3 transcribed (31 record(s))
- no LLM table selection; kept 3 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.923 (12/13 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[01]` | 7 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 1.67 | 1.356 | 0.812 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['pharmaceutics-11-00531-t004:row4:col1', 'pharmaceutics-11-00531-t004:row4:col2', 'pharmaceutics-11-00531-t004:row4:col3', 'pharmaceutics-11-00531-t004:row13:col1', 'pharmaceutics-11-00531-t004:row13:col2', 'pharmaceutics-11-00531-t004:row13:col3', 'pharmaceutics-11-00531-t004:row24:col1', 'pharmaceutics-11-00531-t004:row24:col2', 'pharmaceutics-11-00531-t004:row24:col3', 'pharmaceutics-11-00531-t004:row33:col1', 'pharmaceutics-11-00531-t004:row33:col2', 'pharmaceutics-11-00531-t004:row33:col3', 'pharmaceutics-11-00531-t004:row44:col1', 'pharmaceutics-11-00531-t004:row44:col2', 'pharmaceutics-11-00531-t004:row44:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['pharmaceutics-11-00531-t004:row3:col1', 'pharmaceutics-11-00531-t004:row3:col2', 'pharmaceutics-11-00531-t004:row3:col3', 'pharmaceutics-11-00531-t004:row12:col1', 'pharmaceutics-11-00531-t004:row12:col2', 'pharmaceutics-11-00531-t004:row12:col3', 'pharmaceutics-11-00531-t004:row23:col1', 'pharmaceutics-11-00531-t004:row23:col2', 'pharmaceutics-11-00531-t004:row23:col3', 'pharmaceutics-11-00531-t004:row32:col1', 'pharmaceutics-11-00531-t004:row32:col2', 'pharmaceutics-11-00531-t004:row32:col3', 'pharmaceutics-11-00531-t004:row43:col1', 'pharmaceutics-11-00531-t004:row43:col2', 'pharmaceutics-11-00531-t004:row43:col3'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['pharmaceutics-11-00531-t004:row5:col1', 'pharmaceutics-11-00531-t004:row5:col2', 'pharmaceutics-11-00531-t004:row5:col3', 'pharmaceutics-11-00531-t004:row14:col1', 'pharmaceutics-11-00531-t004:row14:col2', 'pharmaceutics-11-00531-t004:row14:col3', 'pharmaceutics-11-00531-t004:row25:col1', 'pharmaceutics-11-00531-t004:row25:col2', 'pharmaceutics-11-00531-t004:row25:col3', 'pharmaceutics-11-00531-t004:row34:col1', 'pharmaceutics-11-00531-t004:row34:col2', 'pharmaceutics-11-00531-t004:row34:col3', 'pharmaceutics-11-00531-t004:row45:col1', 'pharmaceutics-11-00531-t004:row45:col2', 'pharmaceutics-11-00531-t004:row45:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  |  |  | ['pharmaceutics-11-00531-t004:row6:col1', 'pharmaceutics-11-00531-t004:row6:col2', 'pharmaceutics-11-00531-t004:row6:col3', 'pharmaceutics-11-00531-t004:row15:col1', 'pharmaceutics-11-00531-t004:row15:col2', 'pharmaceutics-11-00531-t004:row15:col3', 'pharmaceutics-11-00531-t004:row26:col1', 'pharmaceutics-11-00531-t004:row26:col2', 'pharmaceutics-11-00531-t004:row26:col3', 'pharmaceutics-11-00531-t004:row35:col1', 'pharmaceutics-11-00531-t004:row35:col2', 'pharmaceutics-11-00531-t004:row35:col3', 'pharmaceutics-11-00531-t004:row46:col1', 'pharmaceutics-11-00531-t004:row46:col2', 'pharmaceutics-11-00531-t004:row46:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1.77e+04 |  |  | ['pharmaceutics-11-00531-t004:row4:col1', 'pharmaceutics-11-00531-t004:row4:col2', 'pharmaceutics-11-00531-t004:row4:col3', 'pharmaceutics-11-00531-t004:row13:col1', 'pharmaceutics-11-00531-t004:row13:col2', 'pharmaceutics-11-00531-t004:row13:col3', 'pharmaceutics-11-00531-t004:row24:col1', 'pharmaceutics-11-00531-t004:row24:col2', 'pharmaceutics-11-00531-t004:row24:col3', 'pharmaceutics-11-00531-t004:row33:col1', 'pharmaceutics-11-00531-t004:row33:col2', 'pharmaceutics-11-00531-t004:row33:col3', 'pharmaceutics-11-00531-t004:row44:col1', 'pharmaceutics-11-00531-t004:row44:col2', 'pharmaceutics-11-00531-t004:row44:col3'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.7 L/h |  |  | ['pharmaceutics-11-00531-t004:row4:col1', 'pharmaceutics-11-00531-t004:row4:col2', 'pharmaceutics-11-00531-t004:row4:col3', 'pharmaceutics-11-00531-t004:row13:col1', 'pharmaceutics-11-00531-t004:row13:col2', 'pharmaceutics-11-00531-t004:row13:col3', 'pharmaceutics-11-00531-t004:row24:col1', 'pharmaceutics-11-00531-t004:row24:col2', 'pharmaceutics-11-00531-t004:row24:col3', 'pharmaceutics-11-00531-t004:row33:col1', 'pharmaceutics-11-00531-t004:row33:col2', 'pharmaceutics-11-00531-t004:row33:col3', 'pharmaceutics-11-00531-t004:row44:col1', 'pharmaceutics-11-00531-t004:row44:col2', 'pharmaceutics-11-00531-t004:row44:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 34.6 L |  |  | ['pharmaceutics-11-00531-t004:row3:col1', 'pharmaceutics-11-00531-t004:row3:col2', 'pharmaceutics-11-00531-t004:row3:col3', 'pharmaceutics-11-00531-t004:row12:col1', 'pharmaceutics-11-00531-t004:row12:col2', 'pharmaceutics-11-00531-t004:row12:col3', 'pharmaceutics-11-00531-t004:row23:col1', 'pharmaceutics-11-00531-t004:row23:col2', 'pharmaceutics-11-00531-t004:row23:col3', 'pharmaceutics-11-00531-t004:row32:col1', 'pharmaceutics-11-00531-t004:row32:col2', 'pharmaceutics-11-00531-t004:row32:col3', 'pharmaceutics-11-00531-t004:row43:col1', 'pharmaceutics-11-00531-t004:row43:col2', 'pharmaceutics-11-00531-t004:row43:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefprozil%5D%20Cefprozil_Jang2019_reference&body=Drug%3A%20cefprozil%0ARecord%3A%20Cefprozil_Jang2019_reference%0APaper%3A%20Jang_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefprozil/Cefprozil_Jang2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:16 UTC</sub>
