<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;baloxavir marboxil&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/&quot;},{&quot;label&quot;:&quot;Koshimichi_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BaloxavirMarboxil_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BaloxavirMarboxil_Retout2026_reference&quot;,&quot;label&quot;:&quot;Retout_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baloxavir marboxil — `BaloxavirMarboxil_Koshimichi2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-07 14:33 UTC (Rejected), but the paper was screened again on 2026-10-07 15:33 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Absorption rate constant for baloxavir acid is reported in liters/h, a dimensionally invalid unit for a first-order rate constant.

<div class="pk-model-meta" hidden drug="baloxavir marboxil" model-id="BaloxavirMarboxil_Koshimichi2020_reference" status="rejected" stale="true" population="influenza patients including those at high risk of complications" measured-compound="baloxavir acid" parameterization="apparent" topology="1C"></div>

## Citation
Koshimichi H, Retout S, Cosson V, Duval V, De Buck S, Tsuda Y et al. Population Pharmacokinetics and Exposure-Response Relationships of Baloxavir Marboxil in Influenza Patients at High Risk of Complications. Antimicrobial agents and chemotherapy 64(7) (2020).
  ·  DOI: [10.1128/AAC.00119-20](https://doi.org/10.1128/AAC.00119-20)

## Population and dosing

**Population:** influenza patients including those at high risk of complications · condition influenza · age group adult · n = 1827.

**Dosing:** 40, 80 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed baloxavir marboxil, measured baloxavir acid.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (liters/h) | CLm/F | 10.4 | liters/h | 39.3 (None% RSE) |
| Vc/F (liters) | V1/F | 528 | liters | 59.7 (None% RSE) |
| Q1/F (liters/h) | Q/F | 10.3 | liters/h |  |
| Vp1/F (liters) | V2/F | 130 | liters |  |
| Q2/F (liters/h) | Q2/F | 1.25 | liters/h |  |
| Vp2/F (liters) | V3/F | 131 | liters | 26.2 (None% RSE) |
| Ka (liters/h) | kabs | 0.905 | liters/h |  |
| Lag time (h) | tlag | 0.323 | h |  |
| theta_cl_f_wt | theta_cl_f_wt | 0.278 |  |  |
| theta_v1_f_wt | theta_v1_f_wt | 0.743 |  |  |
| theta_cl_f_race | theta_cl_f_race | 0.495 |  |  |
| theta_v1_f_race | theta_v1_f_race | 0.523 |  |  |
| theta_kabs_gender | theta_kabs_gender | 0.566 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.85). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Absorption rate constant for baloxavir acid is reported in liters/h, a dimensionally invalid unit for a first-order rate constant.**

The absorption rate constant is assigned a value of 0.905 with the unit 'liters/h', which is dimensionally incorrect for a first-order process. Since this unit is incompatible with standard pharmacokinetic dimensions, the parameter could not be evaluated for structural consistency. Consequently, the model was rejected due to a dimension mismatch on this structural parameter. Extracted — baloxavir_acid: CLm/F 10.4 liters/h, V1/F 528 liters, Q/F 10.3 liters/h, V2/F 130 liters, Q2/F 1.25 liters/h, V3/F 131 liters, kabs 0.905 liters/h, tlag 0.323 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of theta_q76_wt: this record has none, the second reading 0.743; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (liters/h) | `Q351` · CLm/F | 10.4 | liters/h | 2.889e-06 | m3/s | l/h | exact (1) | T2:row3:col1, T2:row3:col2, T2:row3:col3, T2:row3:col4 | 39.3 (None% RSE) |
| Vc/F (liters) | `Q290` · V1/F | 528 | liters | 0.528 | m3 | l | exact (1) | T2:row4:col1, T2:row4:col2, T2:row4:col3, T2:row4:col4 | 59.7 (None% RSE) |
| Q1/F (liters/h) | `Q69` · Q/F | 10.3 | liters/h | 2.861e-06 | m3/s | l/h | exact (1) | T2:row5:col1, T2:row5:col2, T2:row5:col3, T2:row5:col4 |  |
| Vp1/F (liters) | `Q82` · V2/F | 130 | liters | 0.13 | m3 | l | exact (1) | T2:row6:col1, T2:row6:col2, T2:row6:col3, T2:row6:col4 |  |
| Q2/F (liters/h) | `Q80` · Q2/F | 1.25 | liters/h | 3.472e-07 | m3/s | l/h | special_case (0.95) | T2:row7:col1, T2:row7:col2, T2:row7:col3, T2:row7:col4 |  |
| Vp2/F (liters) | `Q78` · V3/F | 131 | liters | 0.131 | m3 | l | exact (1) | T2:row8:col1, T2:row8:col2, T2:row8:col3, T2:row8:col4 | 26.2 (None% RSE) |
| Ka (liters/h) | `Q49` · kabs | 0.905 | liters/h |  |  | l/h | exact (1) | T2:row9:col1, T2:row9:col2, T2:row9:col3, T2:row9:col4 |  |
| Lag time (h) | `Q83` · tlag | 0.323 | h | 1163 | s | h | exact (1) | T2:row10:col1, T2:row10:col2, T2:row10:col3, T2:row10:col4 |  |
| theta_cl_f_wt | `Q900` · theta_cl_f_wt | 0.278 |  |  |  |  |  | T2:row11:col1, T2:row11:col2, T2:row11:col3, T2:row11:col4 |  |
| theta_v1_f_wt | `Q900` · theta_v1_f_wt | 0.743 |  |  |  |  |  | T2:row12:col1, T2:row12:col2, T2:row12:col3, T2:row12:col4 |  |
| theta_cl_f_race | `Q900` · theta_cl_f_race | 0.495 |  |  |  |  |  | T2:row13:col1, T2:row13:col2, T2:row13:col3, T2:row13:col4 |  |
| theta_v1_f_race | `Q900` · theta_v1_f_race | 0.523 |  |  |  |  |  | T2:row14:col1, T2:row14:col2, T2:row14:col3, T2:row14:col4 |  |
| theta_kabs_gender | `Q900` · theta_kabs_gender | 0.566 |  |  |  |  |  | T2:row15:col1, T2:row15:col2, T2:row15:col3, T2:row15:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Ka (liters/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q/F' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V3/F' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- metabolite baloxavir acid: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baloxavir acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 29/29 row label(s) assigned, 32 linked by role
- review gap-fill skipped: this record measures 'baloxavir acid', not baloxavir_marboxil — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.85 (17/20 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q76_wt]` |  | 0.743 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_wt]` | 0.743 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | liters/h | ['T2:row9:col1', 'T2:row9:col2', 'T2:row9:col3', 'T2:row9:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col3', 'T2:row5:col4'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['T2:row8:col1', 'T2:row8:col2', 'T2:row8:col3', 'T2:row8:col4'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col3', 'T2:row7:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'T2:row6:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['T2:row10:col1', 'T2:row10:col2', 'T2:row10:col3', 'T2:row10:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 528 L | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 130 L | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'T2:row6:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbaloxavir_marboxil%5D%20BaloxavirMarboxil_Koshimichi2020_reference&body=Drug%3A%20baloxavir_marboxil%0ARecord%3A%20BaloxavirMarboxil_Koshimichi2020_reference%0APaper%3A%20Koshimichi_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Koshimichi2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:33 UTC</sub>
