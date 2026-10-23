<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;lithium&quot;,&quot;href&quot;:&quot;drugs/drug_lithium/&quot;},{&quot;label&quot;:&quot;Kavanagh_2025 \u00b7 bliss&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lithium_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lithium/Lithium_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lithium_Dickinson2026_reference&quot;,&quot;label&quot;:&quot;Dickinson_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lithium/Lithium_Dickinson2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lithium_Gijsen2021_reference&quot;,&quot;label&quot;:&quot;Gijsen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lithium/Lithium_Gijsen2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lithium_Morse2025_reference&quot;,&quot;label&quot;:&quot;Morse_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lithium/Lithium_Morse2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lithium_Silva2023_reference&quot;,&quot;label&quot;:&quot;Silva_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lithium/Lithium_Silva2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lithium_Christie2025_reference&quot;,&quot;label&quot;:&quot;Christie_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lithium/Lithium_Christie2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lithium_Jermain1991_reference&quot;,&quot;label&quot;:&quot;Jermain_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lithium/Lithium_Jermain1991_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lithium_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lithium/Lithium_Min2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lithium_Yu2016_reference&quot;,&quot;label&quot;:&quot;Yu_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lithium/Lithium_Yu2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lithium — `Lithium_Kavanagh2025_bliss`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The lithium record was rejected because the daily dose of 794 mg/day was placed in the zero-order input duration parameter D1, a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="lithium" model-id="Lithium_Kavanagh2025_bliss" status="rejected" stale="false" population="adults with bipolar disorder on stable lithium doses" measured-compound="lithium" parameterization="mechanistic" topology="1C"></div>

## Citation
Kavanagh ON, Asprey E, Edelmann KA, Ritter P, Cousins DA, Wing VC. A one-compartment model provides benchmark Lithium dose prediction. Journal of psychopharmacology (Oxford, England):2698811251378508 (2025).
  ·  DOI: [10.1177/02698811251378508](https://doi.org/10.1177/02698811251378508)

## Population and dosing

**Population:** adults with bipolar disorder on stable lithium doses · condition bipolar disorder · age group adult · n = 54.

**Dosing:** 400, 1125, 1400, 1800 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed lithium carbonate, measured lithium.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Height (cm) | equation variable | 170 | cm |
| Lithium dose (mg/day) | D1 | 794 | mg/day |
| Creatinine clearance (mL/min)* | CLR | 113 | mL/min |
| Serum lithium (mmol/L) | Css | 0.75 | mmol/L |
| lithium volume of distribution | V | 0.7 | L/kg |
| Ka * (h−1) | kabs | 1.03 | h−1 |
| Tlag (h) | tlag | 0.186 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.462). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lithium record was rejected because the daily dose of 794 mg/day was placed in the zero-order input duration parameter D1, a dimension mismatch on a structural parameter.**

In the Kavanagh_2025 lithium model, the parameter D1 is defined as the duration of a zero-order input into the dosing compartment, but the extracted value 794 mg/day is the lithium dose, so the units and meaning do not match. Because the reported unit (mg/day) could not be converted to a standard unit, the parameter reached the model builder without an SI value. The remaining parameters (V 0.7 L/kg, kabs 1.03 h−1, tlag 0.186 h, CLR 113 mL/min, Css 0.75 mmol/L) show no such conflict. Extracted — lithium: D1 794 mg/day, CLR 113 mL/min, Css 0.75 mmol/L, V 0.7 L/kg, kabs 1.03 h−1, tlag 0.186 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[creatinine clearance (ml/min)*].parameter_id`: this record has Q26, the second reading Q22; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Height (cm) | `Q900` · equation variable | 170 | cm |  |  | cm | llm (0.6) | table1-02698811251378508:row4:col1 |
| Lithium dose (mg/day) | `Q310` · D1 | 794 | mg/day |  |  | mg/d | llm (0.6) | table1-02698811251378508:row7:col1 |
| Creatinine clearance (mL/min)* | `Q26` · CLR | 113 | mL/min | 1.883e-06 | m3/s | L/h | llm_corrected (0.6) | table1-02698811251378508:row8:col1 |
| Serum lithium (mmol/L) | `Q34` · Css | 0.75 | mmol/L |  |  | mM/l | llm (0.6) | table1-02698811251378508:row9:col1 |
| lithium volume of distribution | `Q61` · V | 0.7 | L/kg | 0.049 | m3 | L | boundary (0.8) | Kavanagh_2025:discussion_prose |
| Ka * (h−1) | `Q49` · kabs | 1.03 | h−1 | 0.0002861 | 1/s | 1/h | review_gapfill (0.7) | Aurélie_2023:review |
| Tlag (h) | `Q83` · tlag | 0.186 | h | 669.6 | s | h | review_gapfill (0.7) | Aurélie_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Age (years)' — extend the ontology if this is a real PK parameter (source ['table1-02698811251378508:row3:col1'])
- dropped unlinked row (NIL): 'Weight (kg)' — extend the ontology if this is a real PK parameter (source ['table1-02698811251378508:row5:col1'])
- dropped unlinked row (NIL): 'BMI' — extend the ontology if this is a real PK parameter (source ['table1-02698811251378508:row6:col1'])
- unit_dimension_mismatch: 'Lithium dose (mg/day)' → Q310 (unit '[mass] / [time]' vs ontology '[time]') — route to review
- unit_dimension_unknown: 'female:male' (CLR)
- unit_dimension_mismatch: 'Serum lithium (mmol/L)' → Q34 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- salvaged Q61 ('lithium volume of distribution'=0.7) from results prose — parameter table was unreadable
- implicit units: 'Creatinine clearance (mL/min)*' → mL/min (from the paper text: "Table 1 lists the parameter as 'Creatinine clearance (mL/min)*', explicitly stating the unit mL/min in the table text.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lithium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'bliss' subgroup of Kavanagh_2025 (paper reports 2 populations: bipolith, bliss)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Aurélie_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from Aurélie_2023's review values (primary lacked it)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.462 (6/13 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[creatinine clearance (ml/min)*].parameter_id` | Q26 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[height]` | 170 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka *]` | 1.03 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lithium dose]` | 794 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lithium volume of distribution]` | 0.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[serum lithium].parameter_id` | Q34 | Q75 | mismatch |
| `gpt-oss-120b` | `parameters[tlag]` | 0.186 |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['table1-02698811251378508:row8:col1'] |
| C5_dimension_Q310 | fail | [mass] / [time] | mg/day | ['table1-02698811251378508:row7:col1'] |
| C5_dimension_Q34 | fail | [substance] / [length] ** 3 | mmol/L | ['table1-02698811251378508:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Aurélie_2023:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Aurélie_2023:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 49 L | ['Kavanagh_2025:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blithium%5D%20Lithium_Kavanagh2025_bliss&body=Drug%3A%20lithium%0ARecord%3A%20Lithium_Kavanagh2025_bliss%0APaper%3A%20Kavanagh_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lithium/Lithium_Kavanagh2025_bliss%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 16:25 UTC</sub>
