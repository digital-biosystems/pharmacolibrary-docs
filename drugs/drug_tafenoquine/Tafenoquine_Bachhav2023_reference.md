<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;tafenoquine&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/&quot;},{&quot;label&quot;:&quot;Bachhav_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafenoquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tafenoquine_Watson2022_reference&quot;,&quot;label&quot;:&quot;Watson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tafenoquine — `Tafenoquine_Bachhav2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The tafenoquine record was rejected because the abstract-only source reports AUC0-inf as a percentage point estimate (100.7 %) rather than an area under the curve with proper dimensions, a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="tafenoquine" model-id="Tafenoquine_Bachhav2023_reference" status="rejected" stale="false" population="paediatric patients with P. vivax malaria" measured-compound="tafenoquine" parameterization="mechanistic" topology="1C"></div>

## Citation
Bachhav SS, Taylor M, Martin A, Green JA, Duparc S, Rolfe K et al. A pharmacometrics approach to assess the feasibility of capillary microsampling to replace venous sampling in clinical studies: Tafenoquine case study. British journal of clinical pharmacology 89(3):1187–1197 (2023).
  ·  DOI: [10.1111/bcp.15554](https://doi.org/10.1111/bcp.15554)

## Population and dosing

**Population:** paediatric patients with P. vivax malaria · condition Plasmodium vivax malaria · age group child.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| clearance | CL | 3.4 | L/h |
| AUC0-inf point estimate | AUC∞ | 100.7 | % |
| Cmax point estimate | Cmax_ratio | 79.7 | % |
| Cmax 90% CI lower | equation variable | 76.9 | % |
| Tlag,1 | tlag | 0.147 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tafenoquine record was rejected because the abstract-only source reports AUC0-inf as a percentage point estimate (100.7 %) rather than an area under the curve with proper dimensions, a dimension mismatch on a structural parameter.**

The paper (Bachhav_2023, paediatric P. vivax patients) was read at abstract level only, so summary statistics stood in for a fitted model. The AUC∞ entry for tafenoquine carries the value 100.7 with unit '%', which is a dimensionless ratio and cannot serve as an area under the concentration-time curve; the Cmax point estimate (79.7 %) and its 90 % CI lower bound (76.9 %) are likewise ratios. The dimension check on this structural parameter therefore failed, and the record was rejected. Extracted — tafenoquine: CL 3.4 L/h, AUC∞ 101 %, Cmax_ratio 79.7 %, tlag 0.147 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tafenoquine, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance | `Q22` · CL | 3.4 | L/h | 9.444e-07 | m3/s | l/h | exact (1) | Bachhav_2023:abstract, Bachhav_2023:abstract |
| AUC0-inf point estimate | `Q17` · AUC∞ | 100.7 | % |  |  | % | llm_confirmed (0.6) | Bachhav_2023:abstract |
| Cmax point estimate | `Q33` · Cmax_ratio | 79.7 | % |  |  | % | llm_corrected (0.6) | Bachhav_2023:abstract |
| Cmax 90% CI lower | `Q900` · equation variable | 76.9 | % |  |  | % | llm_corrected (0.6) | Bachhav_2023:abstract |
| Tlag,1 | `Q83` · tlag | 0.147 | h | 529.2 | s | h | review_gapfill (0.7) | Cherkaoui-Rbati_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'interindividual variability' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_mismatch: 'AUC0-inf point estimate' → Q17 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC0-inf 90% CI lower' → Q17 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q17 ('AUC0-inf 90% CI lower', value 98.0) — already have one for this compound
- dropped unlinked row (NIL): 'AUC0-inf 90% CI upper' — extend the ontology if this is a real PK parameter (source ['Bachhav_2023:abstract'])
- dropped unlinked row (NIL): 'Cmax 90% CI upper' — extend the ontology if this is a real PK parameter (source ['Bachhav_2023:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tafenoquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Cherkaoui-Rbati_2023's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Bachhav_2023_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[area under the concentration-time curve from time zero to infinity]` |  | 100.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf point estimate]` | 100.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 3.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 3.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax 90% ci lower]` | 76.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax point estimate]` | 79.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 79.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag,1]` | 0.147 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tafenoquine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tafenoquine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | fail | dimensionless | % | ['Bachhav_2023:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bachhav_2023:abstract', 'Bachhav_2023:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Cherkaoui-Rbati_2023:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.4 | ['Bachhav_2023:abstract', 'Bachhav_2023:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.4 L/h | ['Bachhav_2023:abstract', 'Bachhav_2023:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btafenoquine%5D%20Tafenoquine_Bachhav2023_reference&body=Drug%3A%20tafenoquine%0ARecord%3A%20Tafenoquine_Bachhav2023_reference%0APaper%3A%20Bachhav_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tafenoquine/Tafenoquine_Bachhav2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:53 UTC</sub>
