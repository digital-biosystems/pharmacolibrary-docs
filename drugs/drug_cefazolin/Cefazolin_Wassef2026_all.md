<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefazolin&quot;,&quot;href&quot;:&quot;drugs/drug_cefazolin/&quot;},{&quot;label&quot;:&quot;Wassef_2026 \u00b7 all&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefazolin_Ryan2022_reference&quot;,&quot;label&quot;:&quot;Ryan_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefazolin/Cefazolin_Ryan2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefazolin_Santavy2023_reference&quot;,&quot;label&quot;:&quot;Santavy_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefazolin/Cefazolin_Santavy2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefazolin — `Cefazolin_Wassef2026_all`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Cefazolin AUC∞ units (h·g·L⁻¹) cannot be converted to SI, leaving the parameter without a valid value and causing rejection.

<div class="pk-model-meta" hidden drug="cefazolin" model-id="Cefazolin_Wassef2026_all" status="rejected" stale="false" population="adults undergoing abdominal surgery (obese and non-obese)" measured-compound="cefazolin" parameterization="mechanistic" topology="1C"></div>

## Citation
Wassef A, Kosicka-Noworzyń K, Back H, Siemiątkowska A, Yohn C, Sadek R et al. Cefazolin surgical prophylaxis in obesity: a body composition-driven population pharmacokinetic approach. Antimicrobial agents and chemotherapy:e0167725 (2026).
  ·  DOI: [10.1128/aac.01677-25](https://doi.org/10.1128/aac.01677-25)

## Population and dosing

**Population:** adults undergoing abdominal surgery (obese and non-obese) · condition obesity/surgical prophylaxis · age group adult · n = 87.

**Dosing:** 2000, 3000 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0-inf (h∙g∙L−1) | AUC∞ | 0.74 | h∙g∙L−1 |
| AUC0-inf/Dose (h∙L−1) | AUC/dose | 0.33 | h∙L−1 |
| AUC0-t (h∙g∙L−1) | AUCt | 0.48 | h∙g∙L−1 |
| CL (L∙h⁻¹) | CL | 3.59 | L∙h⁻¹ |
| T1/2 (h) | t1/2z | 2.58 | h |
| Vss (L) | Vss | 11.12 | L |
| Vd (L) | V | 11.92 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.308). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Cefazolin AUC∞ units (h·g·L⁻¹) cannot be converted to SI, leaving the parameter without a valid value and causing rejection.**

The record lists AUC∞ as 0.74 h·g·L⁻¹, a unit that is not recognized for conversion to standard SI units. Consequently, the parameter remains without a valid numerical value in the model. This missing SI value resulted in a dimension mismatch for this structural parameter, leading to the model's rejection. Extracted — cefazolin: AUC∞ 0.74 h∙g∙L−1, AUC/dose 0.33 h∙L−1, AUCt 0.48 h∙g∙L−1, CL 3.59 L∙h⁻¹, t1/2z 2.58 h, Vss 11.1 L, V 11.9 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[auc0-inf].value`: this record has 0.74, the second reading 0.83; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0-inf (h∙g∙L−1) | `Q17` · AUC∞ | 0.74 | h∙g∙L−1 |  |  | (h·g)/l | exact (1) | Wassef_2026_table_2:row3:col1 |
| AUC0-inf/Dose (h∙L−1) | `Q189` · AUC/dose | 0.33 | h∙L−1 |  |  | h/l | llm_confirmed (0.6) | Wassef_2026_table_2:row4:col1 |
| AUC0-t (h∙g∙L−1) | `Q19` · AUCt | 0.48 | h∙g∙L−1 |  |  | (h·g)/l | exact (1) | Wassef_2026_table_2:row6:col1 |
| CL (L∙h⁻¹) | `Q22` · CL | 3.59 | L∙h⁻¹ | 9.972e-07 | m3/s | l/h | exact (1) | Wassef_2026_table_2:row7:col1 |
| T1/2 (h) | `Q57` · t1/2z | 2.58 | h | 9288 | s | h | exact (1) | Wassef_2026_table_2:row8:col1 |
| Vss (L) | `Q65` · Vss | 11.12 | L | 0.01112 | m3 | l | exact (1) | Wassef_2026_table_2:row9:col1 |
| Vd (L) | `Q61` · V | 11.92 | L | 0.01192 | m3 | l | exact (1) | Wassef_2026_table_2:row10:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'all' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['Wassef_2026_table_2:row1:col1'])
- unit_dimension_mismatch: 'AUC0-inf/Dose (h∙L−1)' → Q189 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC0-inf/(Dose/kg)(h∙L−1)' → Q17 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q17 ('AUC0-inf/(Dose/kg)(h∙L−1)', value '35.61') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefazolin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'all' subgroup of Wassef_2026 (paper reports 2 populations: all, dosage)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T1:row13:col9 = '121.6 (28.2'
- unparsed cell T1:row19:col4 = '48.5 (12.49'
- unparsed cell T1:row19:col8 = '41.42 (11.68'
- unparsed cell T1:row24:col5 = '4.3 (0. 39)'
- companion parameter table 2 transcribed (90 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf/dose].value` | 0.33 | 0.28 | mismatch |
| `gpt-oss-120b` | `parameters[auc0-inf].value` | 0.74 | 0.83 | mismatch |
| `gpt-oss-120b` | `parameters[auc0-t].value` | 0.48 | 0.55 | mismatch |
| `gpt-oss-120b` | `parameters[cl]` | 3.59 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[crcl]` |  | 214.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[female]` |  | 37 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2].value` | 2.58 | 2.46 | mismatch |
| `gpt-oss-120b` | `parameters[vd].value` | 11.92 | 13.19 | mismatch |
| `gpt-oss-120b` | `parameters[vss].value` | 11.12 | 12.30 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['Wassef_2026_table_2:row3:col1'] |
| C5_dimension_Q189 | fail | [time] / [length] ** 3 | h∙L−1 | ['Wassef_2026_table_2:row4:col1'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Wassef_2026_table_2:row6:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Wassef_2026_table_2:row7:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Wassef_2026_table_2:row8:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Wassef_2026_table_2:row10:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Wassef_2026_table_2:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.59 | ['Wassef_2026_table_2:row7:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.59 L/h | ['Wassef_2026_table_2:row7:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 11.9 L | ['Wassef_2026_table_2:row10:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 11.1 L | ['Wassef_2026_table_2:row9:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefazolin%5D%20Cefazolin_Wassef2026_all&body=Drug%3A%20cefazolin%0ARecord%3A%20Cefazolin_Wassef2026_all%0APaper%3A%20Wassef_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefazolin/Cefazolin_Wassef2026_all%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:52 UTC</sub>
