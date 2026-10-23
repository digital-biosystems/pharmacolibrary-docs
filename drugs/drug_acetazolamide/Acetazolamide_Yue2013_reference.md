<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;acetazolamide&quot;,&quot;href&quot;:&quot;drugs/drug_acetazolamide/&quot;},{&quot;label&quot;:&quot;Yue_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# acetazolamide — `Acetazolamide_Yue2013_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Acetazolamide's maximum metabolic rate of 1510 mg/h uses a unit that could not be converted to standard units, blocking dimensional validation.

<div class="pk-model-meta" hidden drug="acetazolamide" model-id="Acetazolamide_Yue2013_reference" status="rejected" stale="false" population="peritoneal dialysis patients and healthy volunteers" measured-compound="acetazolamide" parameterization="mechanistic" topology="2C"></div>

## Citation
Yue CS, Huynh HH, Raymond C, Charbonneau L, Roy L. Population pharmacokinetic and pharmacodynamic modeling of acetazolamide in peritoneal dialysis patients and healthy volunteers. Journal of pharmacy & pharmaceutical sciences : a publication of the Canadian Society for Pharmaceutical Sciences, Societe canadienne des sciences pharmaceutiques 16(1):89–98 (2013).
  ·  DOI: [10.18433/j3qg7z](https://doi.org/10.18433/j3qg7z)

## Population and dosing

**Population:** peritoneal dialysis patients and healthy volunteers · condition renal impairment and healthy · age group adult · n = 15.

**Dosing:** 500 mg, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLnr (L/h) | CLNR | 1.53 | L/h | 152.5 |
| Vc (L) | V1 | 5.77 | L | 56.4 |
| Q1 (L/h) | Q | 10.2 | L/h | 52.6 |
| Vp1 (L) | V2 | 6.46 | L | 44.4 |
| CLdialysis (L/h) | CL_HD | 1.65 | L/h | 15.8 |
| Vp2 (L) | V3 | 6.14 | L | 38.0 |
| Vmax (mg/h) | Vmax | 1510 | mg/h | 8.1 |
| Km (mg/L) | Km | 12.4 | mg/L | 47.8 |
| theta_q319_age_power | theta_q319_age_power | 1.08 |  | 42.5 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.957). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Acetazolamide's maximum metabolic rate of 1510 mg/h uses a unit that could not be converted to standard units, blocking dimensional validation.**

The parameter describing the maximum rate of enzymatic metabolism was recorded with a mass-per-time unit that lacked a standard equivalent. Because this unit could not be converted to SI, the system could not verify if the values were dimensionally consistent. This unresolved unit mismatch caused the rejection of the model record. Extracted — acetazolamide: CLNR 1.53 L/h, V1 5.77 L, Q 10.2 L/h, V2 6.46 L, CL_HD 1.65 L/h, V3 6.14 L, Vmax 1.51e+03 mg/h, Km 12.4 mg/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of healthy: this record has none, the second reading 80.3. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLnr (L/h) | `Q79` · CLNR | 1.53 | L/h | 4.25e-07 | m3/s | l/h | 152.5 | exact (1) | Yue_2013_table_p9_1:row1:col2, Yue_2013_table_p9_1:row1:col3, Yue_2013_table_p9_1:row1:col4, Yue_2013_table_p9_1:row15:col3, Yue_2013_table_p9_1:row15:col4 |
| Vc (L) | `Q63` · V1 | 5.77 | L | 0.00577 | m3 | l | 56.4 | exact (1) | Yue_2013_table_p9_1:row2:col2, Yue_2013_table_p9_1:row2:col3, Yue_2013_table_p9_1:row2:col4, Yue_2013_table_p9_1:row16:col3, Yue_2013_table_p9_1:row16:col4 |
| Q1 (L/h) | `Q30` · Q | 10.2 | L/h | 2.833e-06 | m3/s | l/h | 52.6 | exact (1) | Yue_2013_table_p9_1:row3:col2, Yue_2013_table_p9_1:row3:col3, Yue_2013_table_p9_1:row3:col4, Yue_2013_table_p9_1:row17:col3, Yue_2013_table_p9_1:row17:col4 |
| Vp1 (L) | `Q64` · V2 | 6.46 | L | 0.00646 | m3 | l | 44.4 | exact (1) | Yue_2013_table_p9_1:row5:col2, Yue_2013_table_p9_1:row5:col3, Yue_2013_table_p9_1:row5:col4, Yue_2013_table_p9_1:row18:col3, Yue_2013_table_p9_1:row18:col4 |
| CLdialysis (L/h) | `Q356` · CL_HD | 1.65 | L/h | 4.583e-07 | m3/s | l/h | 15.8 | llm_confirmed (0.6) | Yue_2013_table_p9_1:row9:col2, Yue_2013_table_p9_1:row9:col3, Yue_2013_table_p9_1:row9:col4 |
| Vp2 (L) | `Q77` · V3 | 6.14 | L | 0.00614 | m3 | l | 38.0 | exact (1) | Yue_2013_table_p9_1:row11:col2, Yue_2013_table_p9_1:row11:col3, Yue_2013_table_p9_1:row11:col4, Yue_2013_table_p9_1:row22:col3, Yue_2013_table_p9_1:row22:col4 |
| Vmax (mg/h) | `Q66` · Vmax | 1510 | mg/h |  |  | mg/h | 8.1 | special_case (0.95) | Yue_2013_table_p9_1:row12:col2, Yue_2013_table_p9_1:row12:col3, Yue_2013_table_p9_1:row12:col4 |
| Km (mg/L) | `Q1` · Km | 12.4 | mg/L |  |  | mg/l | 47.8 | exact (1) | Yue_2013_table_p9_1:row13:col2, Yue_2013_table_p9_1:row13:col3, Yue_2013_table_p9_1:row13:col4, Yue_2013_table_p9_1:row23:col3, Yue_2013_table_p9_1:row23:col4 |
| theta_q319_age_power | `Q900` · theta_q319_age_power | 1.08 |  |  |  |  | 42.5 |  | Yue_2013_table_p9_1:row4:col2, Yue_2013_table_p9_1:row4:col3, Yue_2013_table_p9_1:row4:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Healthy' — extend the ontology if this is a real PK parameter (source ['Yue_2013_table_p9_1:row7:col2', 'Yue_2013_table_p9_1:row7:col3', 'Yue_2013_table_p9_1:row7:col4', 'Yue_2013_table_p9_1:row20:col3', 'Yue_2013_table_p9_1:row20:col4'])
- dropped unlinked row (NIL): 'Dialysis patient' — extend the ontology if this is a real PK parameter (source ['Yue_2013_table_p9_1:row8:col2', 'Yue_2013_table_p9_1:row8:col3', 'Yue_2013_table_p9_1:row8:col4', 'Yue_2013_table_p9_1:row21:col3', 'Yue_2013_table_p9_1:row21:col4'])
- dropped duplicate Q30 ('Q2 (L/h)', value '7.97') — already have one for this compound
- unit_dimension_mismatch: 'Vmax (mg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acetazolamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Yue_2013_table_p9_1:row4:col1 = 'Exponent describing the effect of age on Q1'
- unparsed cell Yue_2013_table_p9_1:row13:col1 = 'Unbound ACTZ concentration associated with 50% of Vmax'
- unparsed cell Yue_2013_table_p9_1:row15:col2 = '0.425 (72.8%)'
- unparsed cell Yue_2013_table_p9_1:row16:col2 = '0.225 (50.2%)'
- unparsed cell Yue_2013_table_p9_1:row17:col2 = '0.234 (51.3%)'
- unparsed cell Yue_2013_table_p9_1:row18:col2 = '0.209 (48.2%)'
- unparsed cell Yue_2013_table_p9_1:row20:col2 = '0.0518 (23.1%)'
- unparsed cell Yue_2013_table_p9_1:row21:col2 = '4.32 (861.3%)'
- unparsed cell Yue_2013_table_p9_1:row22:col2 = '0.382 (68.2%)'
- unparsed cell Yue_2013_table_p9_1:row23:col2 = '0.0916 (31%)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.957 (22/23 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[healthy]` |  | 80.3 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Yue_2013_table_p9_1:row13:col2', 'Yue_2013_table_p9_1:row13:col3', 'Yue_2013_table_p9_1:row13:col4', 'Yue_2013_table_p9_1:row23:col3', 'Yue_2013_table_p9_1:row23:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Yue_2013_table_p9_1:row3:col2', 'Yue_2013_table_p9_1:row3:col3', 'Yue_2013_table_p9_1:row3:col4', 'Yue_2013_table_p9_1:row17:col3', 'Yue_2013_table_p9_1:row17:col4'] |
| C5_dimension_Q356 | pass | [length] ** 3 / [time] |  | ['Yue_2013_table_p9_1:row9:col2', 'Yue_2013_table_p9_1:row9:col3', 'Yue_2013_table_p9_1:row9:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Yue_2013_table_p9_1:row2:col2', 'Yue_2013_table_p9_1:row2:col3', 'Yue_2013_table_p9_1:row2:col4', 'Yue_2013_table_p9_1:row16:col3', 'Yue_2013_table_p9_1:row16:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Yue_2013_table_p9_1:row5:col2', 'Yue_2013_table_p9_1:row5:col3', 'Yue_2013_table_p9_1:row5:col4', 'Yue_2013_table_p9_1:row18:col3', 'Yue_2013_table_p9_1:row18:col4'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | ['Yue_2013_table_p9_1:row12:col2', 'Yue_2013_table_p9_1:row12:col3', 'Yue_2013_table_p9_1:row12:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Yue_2013_table_p9_1:row11:col2', 'Yue_2013_table_p9_1:row11:col3', 'Yue_2013_table_p9_1:row11:col4', 'Yue_2013_table_p9_1:row22:col3', 'Yue_2013_table_p9_1:row22:col4'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['Yue_2013_table_p9_1:row1:col2', 'Yue_2013_table_p9_1:row1:col3', 'Yue_2013_table_p9_1:row1:col4', 'Yue_2013_table_p9_1:row15:col3', 'Yue_2013_table_p9_1:row15:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.77 L | ['Yue_2013_table_p9_1:row2:col2', 'Yue_2013_table_p9_1:row2:col3', 'Yue_2013_table_p9_1:row2:col4', 'Yue_2013_table_p9_1:row16:col3', 'Yue_2013_table_p9_1:row16:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.46 L | ['Yue_2013_table_p9_1:row5:col2', 'Yue_2013_table_p9_1:row5:col3', 'Yue_2013_table_p9_1:row5:col4', 'Yue_2013_table_p9_1:row18:col3', 'Yue_2013_table_p9_1:row18:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bacetazolamide%5D%20Acetazolamide_Yue2013_reference&body=Drug%3A%20acetazolamide%0ARecord%3A%20Acetazolamide_Yue2013_reference%0APaper%3A%20Yue_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_acetazolamide/Acetazolamide_Yue2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:46 UTC</sub>
