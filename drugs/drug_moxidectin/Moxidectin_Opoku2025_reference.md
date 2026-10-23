<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;moxidectin&quot;,&quot;href&quot;:&quot;drugs/drug_moxidectin/&quot;},{&quot;label&quot;:&quot;Opoku_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moxidectin_Chhonker2023_reference&quot;,&quot;label&quot;:&quot;Chhonker_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxidectin/Moxidectin_Chhonker2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxidectin_Smit2022_reference&quot;,&quot;label&quot;:&quot;Smit_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxidectin/Moxidectin_Smit2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# moxidectin — `Moxidectin_Opoku2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="moxidectin" model-id="Moxidectin_Opoku2025_reference" status="rejected" stale="false" population="children and adolescents aged 4-17 years in an onchocerciasis-endemic area of Ghana (model also incorporates adult data)" measured-compound="moxidectin" parameterization="mechanistic" topology="1C"></div>

## Citation
Opoku NO, Doe F, Agbogah ME, Laryea R, Gordor SK, Donkor BS et al. Identification of a moxidectin dose for 4- to 11-year-old children to support registration and potential use for onchocerciasis elimination: results of an open-label pharmacokinetic and safety study. Parasites & vectors 18(1):295 (2025).
  ·  DOI: [10.1186/s13071-025-06891-z](https://doi.org/10.1186/s13071-025-06891-z)

## Population and dosing

**Population:** children and adolescents aged 4-17 years in an onchocerciasis-endemic area of Ghana (model also incorporates adult data) · condition onchocerciasis-endemic, healthy volunteers · age group mixed.

**Dosing:** 4, 6, 8 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C (ng/mL) max | Cmax | 9 | ng/mL |
| Dn-C max ((ng/mL)/mg) | Cmax/dose | 9 | N=9 |
| t (hr) max | tmax | 9 | h |
| AUC (hr*ng/mL) 0-24 | AUCt | 9 | h*ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Cmax, Cmax/dose and AUCt), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has moxidectin, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C (ng/mL) max | `Q32` · Cmax | 9 | ng/mL |  |  | ng/mL | space_fold (0.95) | Opoku_2025_table_S19:row2:col1, Opoku_2025_table_S19:row2:col2, Opoku_2025_table_S19:row2:col3, Opoku_2025_table_S19:row2:col4, Opoku_2025_table_S19:row2:col5, Opoku_2025_table_S19:row2:col6, Opoku_2025_table_S19:row2:col7, Opoku_2025_table_S19:row2:col8 |
| Dn-C max ((ng/mL)/mg) | `Q174` · Cmax/dose | 9 | N=9 |  |  | n=9 | llm (0.6) | Opoku_2025_table_S19:row3:col1, Opoku_2025_table_S19:row3:col2, Opoku_2025_table_S19:row3:col3, Opoku_2025_table_S19:row3:col4, Opoku_2025_table_S19:row3:col5, Opoku_2025_table_S19:row3:col6, Opoku_2025_table_S19:row3:col7, Opoku_2025_table_S19:row3:col8 |
| t (hr) max | `Q56` · tmax | 9 | h | 3.24e+04 | s | h | space_fold (0.95) | Opoku_2025_table_S19:row4:col1, Opoku_2025_table_S19:row4:col4, Opoku_2025_table_S19:row4:col5, Opoku_2025_table_S19:row4:col6 |
| AUC (hr*ng/mL) 0-24 | `Q19` · AUCt | 9 | h*ng/mL |  |  | h*ng/mL | llm_corrected (0.6) | Opoku_2025_table_S19:row5:col1, Opoku_2025_table_S19:row5:col2, Opoku_2025_table_S19:row5:col3, Opoku_2025_table_S19:row5:col4, Opoku_2025_table_S19:row5:col5, Opoku_2025_table_S19:row5:col6, Opoku_2025_table_S19:row5:col7, Opoku_2025_table_S19:row5:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'statistics' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'N=9' (Cmax)
- unit_dimension_unknown: 'N=9' (Cmax/dose)
- unit_dimension_unknown: 'N=9' (tmax)
- unit_dimension_unknown: 'N=9' (AUCt)
- dropped duplicate Q19 ('AUC (hr*ng/mL) 0-48', value '9') — already have one for this compound
- dropped duplicate Q19 ('AUC (hr*ng/mL) 0-72', value '9') — already have one for this compound
- dropped duplicate Q19 ('AUC (hr*ng/mL) 0-D7', value '9') — already have one for this compound
- dropped duplicate Q19 ('AUC (hr*ng/mL) 0-D14', value '9') — already have one for this compound
- dropped duplicate Q19 ('AUC (hr*ng/mL) 0-D28', value '9') — already have one for this compound
- implicit units: 'C (ng/mL) max' → ng/mL (from the paper text: "Parameter description states 'Cmax: Highest drug concentration observed following administration of a dose' with unit gi")
- implicit units: 'Dn-C max ((ng/mL)/mg)' — the LLM proposed '(ng/mL)/mg', whose dimension does not fit Q174; left unset
- implicit units: 't (hr) max' → h (from the paper text: "Parameter listing states 't (hr) max' for tmax, the time at which the highest concentration occurs; hours is also used i")
- implicit units: 'AUC (hr*ng/mL) 0-24' → h*ng/mL (from the paper text: "Parameter listing states 'AUC (hr*ng/mL) 0-24'; Table 4 similarly reports 'AUC0-∞ (ng h/ml)'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=moxidectin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 4, S13, S14, S19

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc (hr*ng/ml) 0-24]` | 9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c (ng/ml) max]` | 9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dn-c max ((ng/ml)/mg)]` | 9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t (hr) max]` | 9 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | moxidectin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | moxidectin | unknown | mismatch |

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
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Opoku_2025_table_S19:row5:col1', 'Opoku_2025_table_S19:row5:col2', 'Opoku_2025_table_S19:row5:col3', 'Opoku_2025_table_S19:row5:col4', 'Opoku_2025_table_S19:row5:col5', 'Opoku_2025_table_S19:row5:col6', 'Opoku_2025_table_S19:row5:col7', 'Opoku_2025_table_S19:row5:col8'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Opoku_2025_table_S19:row2:col1', 'Opoku_2025_table_S19:row2:col2', 'Opoku_2025_table_S19:row2:col3', 'Opoku_2025_table_S19:row2:col4', 'Opoku_2025_table_S19:row2:col5', 'Opoku_2025_table_S19:row2:col6', 'Opoku_2025_table_S19:row2:col7', 'Opoku_2025_table_S19:row2:col8'] |
| C5_dimension_Q56 | pass | [time] |  | ['Opoku_2025_table_S19:row4:col1', 'Opoku_2025_table_S19:row4:col4', 'Opoku_2025_table_S19:row4:col5', 'Opoku_2025_table_S19:row4:col6'] |
| C5_unit_missing_Q174 | fail | [mass] / [length] ** 3 | N=9 | ['Opoku_2025_table_S19:row3:col1', 'Opoku_2025_table_S19:row3:col2', 'Opoku_2025_table_S19:row3:col3', 'Opoku_2025_table_S19:row3:col4', 'Opoku_2025_table_S19:row3:col5', 'Opoku_2025_table_S19:row3:col6', 'Opoku_2025_table_S19:row3:col7', 'Opoku_2025_table_S19:row3:col8'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmoxidectin%5D%20Moxidectin_Opoku2025_reference&body=Drug%3A%20moxidectin%0ARecord%3A%20Moxidectin_Opoku2025_reference%0APaper%3A%20Opoku_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_moxidectin/Moxidectin_Opoku2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:54 UTC</sub>
