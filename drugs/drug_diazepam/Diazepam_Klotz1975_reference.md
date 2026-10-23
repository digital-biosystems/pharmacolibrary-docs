<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;diazepam&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/&quot;},{&quot;label&quot;:&quot;Klotz_1975 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diazepam_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/Diazepam_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diazepam_Helfer2026_reference&quot;,&quot;label&quot;:&quot;Helfer_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/Diazepam_Helfer2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diazepam_Huang2025v2_reference&quot;,&quot;label&quot;:&quot;Huang_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/Diazepam_Huang2025v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diazepam_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/Diazepam_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diazepam — `Diazepam_Klotz1975_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Diazepam blood clearance was rejected due to a dimension mismatch between its reported unit and model requirements.

<div class="pk-model-meta" hidden drug="diazepam" model-id="Diazepam_Klotz1975_reference" status="rejected" stale="false" population="adults with liver disease and healthy controls" measured-compound="diazepam" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Klotz U, Avant GR, Hoyumpa A, Schenker S, Wilkinson GR. The effects of age and liver disease on the disposition and elimination of diazepam in adult man. The Journal of clinical investigation 55(2):347–359 (1975).
  ·  DOI: [10.1172/JCI107938](https://doi.org/10.1172/JCI107938)

## Population and dosing

**Population:** adults with liver disease and healthy controls · condition liver disease and healthy · age group adult · n = &gt;=54.

**Dosing:** 0.1, 10 mg, oral, iv, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| B. S.* | equation variable | 70.8 | B |
| B. S.† | t1/2β | 47.4 | B |
| the drug clearance | CL | 13.0 | ml/min |
| Vd(os)/kg, liter/kg | V | 1.13 | liter/kg |
| Blood clearance, ml/misn | CLb | 44.8 | mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.267). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Diazepam blood clearance was rejected due to a dimension mismatch between its reported unit and model requirements.**

The record lists diazepam blood clearance as 44.8 mL/min, but this unit could not be converted to standard SI units for the model. This conversion failure created a dimension mismatch for the structural parameter. A second reader also disputed the extraction of this clearance value, noting it as null rather than a specific number. Extracted — diazepam: t1/2β 47.4 B, CL 13 ml/min, V 1.13 liter/kg, CLb 44.8 mL/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of b. s.: this record has none, the second reading 5.0; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| B. S.* | `Q900` · equation variable | 70.8 | B |  |  | b | llm (0.6) | Klotz_1975_table_p9_1:row1:col1, Klotz_1975_table_p9_1:row1:col2, Klotz_1975_table_p9_1:row1:col3, Klotz_1975_table_p9_1:row1:col5, Klotz_1975_table_p9_1:row1:col6 |
| B. S.† | `Q60` · t1/2β | 47.4 | B |  |  | b | llm (0.6) | Klotz_1975_table_p9_1:row2:col1, Klotz_1975_table_p9_1:row2:col2, Klotz_1975_table_p9_1:row2:col3, Klotz_1975_table_p9_1:row2:col4, Klotz_1975_table_p9_1:row2:col5, Klotz_1975_table_p9_1:row2:col6 |
| the drug clearance | `Q22` · CL | 13.0 | ml/min | 2.167e-07 | m3/s | L/h | boundary (0.8) | Klotz_1975:other_prose |
| Vd(os)/kg, liter/kg | `Q61` · V | 1.13 | liter/kg | 0.0791 | m3 | L | boundary (0.8) | Klotz_1975:discussion_prose |
| Blood clearance, ml/misn | `Q23` · CLb | 44.8 | mL/min | 7.467e-07 | m3/s | L/h | boundary (0.8) | Klotz_1975:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'bilirubin' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'alkaline phosphatase' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'albumin' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'sgot' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'B. S.†' → Q60 (unit '[length] ** 2' vs ontology '[time]') — route to review
- dropped unlinked row (NIL): 'M. C.*' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row3:col1', 'Klotz_1975_table_p9_1:row3:col2', 'Klotz_1975_table_p9_1:row3:col3', 'Klotz_1975_table_p9_1:row3:col5', 'Klotz_1975_table_p9_1:row3:col6'])
- dropped unlinked row (NIL): 'M. C.†' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row4:col1', 'Klotz_1975_table_p9_1:row4:col2', 'Klotz_1975_table_p9_1:row4:col3', 'Klotz_1975_table_p9_1:row4:col4', 'Klotz_1975_table_p9_1:row4:col5', 'Klotz_1975_table_p9_1:row4:col6'])
- dropped unlinked row (NIL): 'J. H.*' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row5:col1', 'Klotz_1975_table_p9_1:row5:col2', 'Klotz_1975_table_p9_1:row5:col3', 'Klotz_1975_table_p9_1:row5:col5', 'Klotz_1975_table_p9_1:row5:col6'])
- dropped unlinked row (NIL): 'J. H.†' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row6:col1', 'Klotz_1975_table_p9_1:row6:col2', 'Klotz_1975_table_p9_1:row6:col3', 'Klotz_1975_table_p9_1:row6:col4', 'Klotz_1975_table_p9_1:row6:col5', 'Klotz_1975_table_p9_1:row6:col6'])
- dropped unlinked row (NIL): 'J. H.§' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row7:col1', 'Klotz_1975_table_p9_1:row7:col2', 'Klotz_1975_table_p9_1:row7:col3', 'Klotz_1975_table_p9_1:row7:col4', 'Klotz_1975_table_p9_1:row7:col5', 'Klotz_1975_table_p9_1:row7:col6'])
- dropped unlinked row (NIL): 'J. M.*' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row8:col1', 'Klotz_1975_table_p9_1:row8:col2', 'Klotz_1975_table_p9_1:row8:col3', 'Klotz_1975_table_p9_1:row8:col5', 'Klotz_1975_table_p9_1:row8:col6'])
- dropped unlinked row (NIL): 'J. M.†' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row9:col1', 'Klotz_1975_table_p9_1:row9:col2', 'Klotz_1975_table_p9_1:row9:col3', 'Klotz_1975_table_p9_1:row9:col4', 'Klotz_1975_table_p9_1:row9:col5', 'Klotz_1975_table_p9_1:row9:col6'])
- dropped unlinked row (NIL): 'J. J.*' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row10:col1', 'Klotz_1975_table_p9_1:row10:col2', 'Klotz_1975_table_p9_1:row10:col5', 'Klotz_1975_table_p9_1:row10:col6'])
- dropped unlinked row (NIL): 'J. J.†' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row11:col1', 'Klotz_1975_table_p9_1:row11:col2', 'Klotz_1975_table_p9_1:row11:col3', 'Klotz_1975_table_p9_1:row11:col4', 'Klotz_1975_table_p9_1:row11:col5', 'Klotz_1975_table_p9_1:row11:col6'])
- dropped unlinked row (NIL): 'Upper normal limit' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row12:col1', 'Klotz_1975_table_p9_1:row12:col2', 'Klotz_1975_table_p9_1:row12:col3', 'Klotz_1975_table_p9_1:row12:col4', 'Klotz_1975_table_p9_1:row12:col5'])
- salvaged Q22 ('the drug clearance'=13.0) from results prose — parameter table was unreadable
- salvaged Q61 ('Vd(os)/kg, liter/kg'=1.13) from results prose — parameter table was unreadable
- salvaged Q23 ('Blood clearance, ml/misn'=44.8) from results prose — parameter table was unreadable
- implicit units: 'Blood clearance, ml/misn' → mL/min (from the paper text: 'The paper text explicitly states units for clearance in multiple places, such as "plasma clearance of diazepam... was be')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diazepam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- row roles: 11 per-group rows of diazepam summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 0 linked by role
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- table Klotz_1975_table_p9_1: missing_label
- table Klotz_1975_table_p9_1: ambiguous_numeric_format
- table Klotz_1975_table_p9_1: ragged_grid

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b. s.*].parameter_id` | Q900 | Q60 | mismatch |
| `gpt-oss-120b` | `parameters[b. s.*].value` | 70.8 | 3.9 | mismatch |
| `gpt-oss-120b` | `parameters[b. s.]` |  | 5.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[blood clearance of diazepam]` |  | 24.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[calculated blood clearance of diazepam]` | 24.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[drug clearance]` | 13.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka *]` | 1.03 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[m. c.]` | 62.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance of diazepam]` |  | 20 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 0.186 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd(area)/kg,]` | 1.13 |  | only_one_extracted |

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
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['Klotz_1975:discussion_prose'] |
| C5_dimension_Q60 | fail | [length] ** 2 | B | ['Klotz_1975_table_p9_1:row2:col1', 'Klotz_1975_table_p9_1:row2:col2', 'Klotz_1975_table_p9_1:row2:col3', 'Klotz_1975_table_p9_1:row2:col4', 'Klotz_1975_table_p9_1:row2:col5', 'Klotz_1975_table_p9_1:row2:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 13 | ['Klotz_1975:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.78 L/h | ['Klotz_1975:other_prose'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 2.69 L/h | ['Klotz_1975:discussion_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 79.1 L | ['Klotz_1975:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiazepam%5D%20Diazepam_Klotz1975_reference&body=Drug%3A%20diazepam%0ARecord%3A%20Diazepam_Klotz1975_reference%0APaper%3A%20Klotz_1975%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diazepam/Diazepam_Klotz1975_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 14:16 UTC</sub>
