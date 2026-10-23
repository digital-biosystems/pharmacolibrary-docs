<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;lacosamide&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/&quot;},{&quot;label&quot;:&quot;Jang_2025 \u00b7 total&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lacosamide_Li2025_boostrap&quot;,&quot;label&quot;:&quot;Li_2025_boostrap&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Li2025_boostrap.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Li2025_final_models&quot;,&quot;label&quot;:&quot;Li_2025_final_models&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Li2025_final_models.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Wu2026_reference&quot;,&quot;label&quot;:&quot;Wu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Wu2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Yu2026_reference&quot;,&quot;label&quot;:&quot;Yu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Yu2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Wang2024_reference&quot;,&quot;label&quot;:&quot;Wang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Wang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lacosamide — `Lacosamide_Jang2025_total`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="lacosamide" model-id="Lacosamide_Jang2025_total" status="rejected" stale="false" population="epilepsy patients" measured-compound="lacosamide" parameterization="mechanistic" topology="1C"></div>

## Citation
Jang Y, Ahn SJ, Lee S, Kim Y, Lee HS, Lee YK et al. Saliva-based lacosamide monitoring paves the way toward personalized epilepsy pharmacotherapy. Scientific reports 15(1):19181 (2025).
  ·  DOI: [10.1038/s41598-025-04044-x](https://doi.org/10.1038/s41598-025-04044-x)

## Population and dosing

**Population:** epilepsy patients · condition epilepsy · age group adult · n = ?123.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Saliva sample in peak level of lacosamide (mg/L) | Cmax | 9.32 | mg/L |
| Saliva sample in trough level of lacosamide (mg/L) | Cmin | 6.70 | mg/L |
| Trough in saliva (mg/L) | Ctrough | 7.56 | mg/L |
| AUC in saliva (mg h/L) | AUC | 120 | mg h/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Cmax, Cmin, Ctrough and AUC), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lacosamide, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Saliva sample in peak level of lacosamide (mg/L) | `Q32` · Cmax | 9.32 | mg/L | mg/l | llm_confirmed (0.6) | Tab1:row40:col1 |
| Saliva sample in trough level of lacosamide (mg/L) | `Q36` · Cmin | 6.70 | mg/L | mg/l | llm_corrected (0.6) | Tab1:row41:col1 |
| Trough in saliva (mg/L) | `Q37` · Ctrough | 7.56 | mg/L | mg/l | llm_confirmed (0.6) | Tab1:row45:col1 |
| AUC in saliva (mg h/L) | `Q88` · AUC | 120 | mg h/L | (h·mg)/l | llm_confirmed (0.6) | Tab1:row46:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Age (years)' — extend the ontology if this is a real PK parameter (source ['Tab1:row2:col1'])
- dropped unlinked row (NIL): 'Height (cm)' — extend the ontology if this is a real PK parameter (source ['Tab1:row4:col1'])
- dropped unlinked row (NIL): 'Body weights (kg)' — extend the ontology if this is a real PK parameter (source ['Tab1:row5:col1'])
- dropped unlinked row (NIL): 'BSA (m2)' — extend the ontology if this is a real PK parameter (source ['Tab1:row6:col1'])
- dropped unlinked row (NIL): 'BUN (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Tab1:row19:col1'])
- dropped unlinked row (NIL): 'Creatinine (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Tab1:row20:col1'])
- dropped unlinked row (NIL): 'GFR (mL/min/1.73 m2)' — extend the ontology if this is a real PK parameter (source ['Tab1:row21:col1'])
- dropped unlinked row (NIL): 'AST (U/L)' — extend the ontology if this is a real PK parameter (source ['Tab1:row22:col1'])
- dropped unlinked row (NIL): 'ALT (U/L)' — extend the ontology if this is a real PK parameter (source ['Tab1:row23:col1'])
- dropped unlinked row (NIL): 'Saliva sample in outpatient clinic (mg/L)' — extend the ontology if this is a real PK parameter (source ['Tab1:row39:col1'])
- dropped unlinked row (NIL): 'Blood sample in outpatient clinic (mg/L)' — extend the ontology if this is a real PK parameter (source ['Tab1:row42:col1'])
- dropped duplicate Q32 ('Cmax in saliva (mg/L)', value '12.8') — already have one for this compound
- unit_dimension_unknown: 'mg h/L' (AUC)
- dropped duplicate Q32 ('Cmax in blood (mg/L)', value '8.89') — already have one for this compound
- dropped duplicate Q37 ('Trough in blood (mg/L)', value '5.25') — already have one for this compound
- dropped duplicate Q88 ('AUC in blood (mg h/L)', value '83.7') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lacosamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'total (n = 123)' subgroup of Jang_2025 (paper reports 3 populations: high seizure burden group (n = 28), low seizure burden group (n = 95), total (n = 123))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab1:row2:col4 = '0.029*'
- unparsed cell Tab1:row3:col1 = '67 (54.5%)'
- unparsed cell Tab1:row3:col2 = '53 (55.8%)'
- unparsed cell Tab1:row3:col3 = '14 (50%)'
- unparsed cell Tab1:row9:col1 = '113 (91.9%)'
- unparsed cell Tab1:row9:col2 = '86 (90.5%)'
- unparsed cell Tab1:row9:col3 = '27 (96.4%)'
- unparsed cell Tab1:row15:col1 = '37 (30.3%)'
- unparsed cell Tab1:row15:col2 = '26 (27.4%)'
- unparsed cell Tab1:row15:col3 = '11 (39.3%)'
- unparsed cell Tab1:row16:col1 = '63 (51.2%)'
- unparsed cell Tab1:row16:col2 = '63 (66.3%)'
- unparsed cell Tab1:row24:col1 = '101 (83.5%)'
- unparsed cell Tab1:row24:col2 = '77 (82.8%)'
- unparsed cell Tab1:row24:col3 = '24 (85.7%)'
- unparsed cell Tab1:row25:col1 = '18 (14.9%)'
- unparsed cell Tab1:row25:col2 = '16 (17.4%)'
- unparsed cell Tab1:row25:col3 = '2 (7.4%)'
- unparsed cell Tab1:row26:col1 = '79 (65.3%)'
- unparsed cell Tab1:row26:col2 = '58 (63.0%)'
- unparsed cell Tab1:row26:col3 = '21 (77.8%)'
- unparsed cell Tab1:row27:col1 = '12 (9.9%)'
- unparsed cell Tab1:row27:col2 = '10 (10.9%)'
- unparsed cell Tab1:row27:col3 = '2 (7.4%)'
- unparsed cell Tab1:row28:col1 = '7 (5.8%)'
- unparsed cell Tab1:row28:col2 = '6 (6.5%)'
- unparsed cell Tab1:row28:col3 = '1 (3.7%)'
- unparsed cell Tab1:row31:col1 = '109 (88.6%)'
- unparsed cell Tab1:row31:col2 = '86 (90.5%)'
- unparsed cell Tab1:row31:col3 = '23 (82.1%)'
- unparsed cell Tab1:row32:col1 = '4.25 [2.57–7]'
- unparsed cell Tab1:row32:col2 = '4.21 [2.54–6.85]'
- unparsed cell Tab1:row32:col3 = '4.25 [ 2.92–7.46]'
- unparsed cell Tab1:row33:col1 = '59 (48.0%)'
- unparsed cell Tab1:row33:col2 = '43 (45.3%)'
- unparsed cell Tab1:row33:col3 = '16 (57.1%)'
- unparsed cell Tab1:row34:col1 = '59 (48.0%)'
- unparsed cell Tab1:row34:col2 = '43 (45.3%)'
- unparsed cell Tab1:row34:col3 = '16 (57.1%)'
- unparsed cell Tab1:row37:col1 = '4.67 [3.03–6.86]'
- unparsed cell Tab1:row37:col2 = '5.17 [2.93–6.86]'
- unparsed cell Tab1:row37:col3 = '3.83 [3.27–6.33]'
- unparsed cell Tab1:row39:col4 = '0.026*'
- unparsed cell Tab1:row42:col4 = '0.011*'
- LLM region Jang_2025:discussion_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[saliva sample in trough level of lacosamide].parameter_id` | Q36 | Q37 | mismatch |
| `gpt-oss-120b` | `parameters[trough in saliva]` | 7.56 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | lacosamide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lacosamide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab1:row40:col1'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['Tab1:row41:col1'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Tab1:row45:col1'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | mg h/L | ['Tab1:row46:col1'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blacosamide%5D%20Lacosamide_Jang2025_total&body=Drug%3A%20lacosamide%0ARecord%3A%20Lacosamide_Jang2025_total%0APaper%3A%20Jang_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lacosamide/Lacosamide_Jang2025_total%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:56 UTC</sub>
