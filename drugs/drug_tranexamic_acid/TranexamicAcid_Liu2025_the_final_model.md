<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;tranexamic acid&quot;,&quot;href&quot;:&quot;drugs/drug_tranexamic_acid/&quot;},{&quot;label&quot;:&quot;Liu_2025 \u00b7 the_final_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TranexamicAcid_Li2021_reference&quot;,&quot;label&quot;:&quot;Li_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tranexamic_acid/TranexamicAcid_Li2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TranexamicAcid_Gilliot2022_reference&quot;,&quot;label&quot;:&quot;Gilliot_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tranexamic_acid/TranexamicAcid_Gilliot2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tranexamic acid — `TranexamicAcid_Liu2025_the_final_model`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the peripheral compartment is unreachable from the dose, and the intercompartmental clearance parameter lacks a value.

<div class="pk-model-meta" hidden drug="tranexamic acid" model-id="TranexamicAcid_Liu2025_the_final_model" status="rejected" stale="false" population="Chinese adults undergoing cardiac surgery with cardiopulmonary bypass" measured-compound="tranexamic acid" parameterization="mechanistic" topology="2C"></div>

## Citation
Liu Y, Zhou C, Lv H, Tian L, Jiang J, Shi J. Population Pharmacokinetics of Tranexamic Acid in Chinese Population Undergoing Cardiac Surgery with Cardiopulmonary Bypass. Drug design, development and therapy 19:4343–4353 (2025).
  ·  DOI: [10.2147/DDDT.S493485](https://doi.org/10.2147/DDDT.S493485)

## Population and dosing

**Population:** Chinese adults undergoing cardiac surgery with cardiopulmonary bypass · condition cardiac surgery · age group adult · n = &gt;=16.

**Dosing:** 70, 140, 700, 1120, 2100 mg, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL1 (L/h) | CL | 4.7 | L/h |
| V1 (L) | V1 | 4.9 | L |
| V2 (L) | V2 | 11.1 | L |
| CL2 | CL2 | 17.0 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the peripheral compartment is unreachable from the dose, and the intercompartmental clearance parameter lacks a value.**

The model structure defines a two-compartment system, but the intercompartmental clearance parameter is missing a value, leaving the peripheral compartment unlinked from the central compartment. Consequently, the peripheral volume of distribution of 11.1 L is isolated from the dosing site. The second reader also disagreed on the identification of the dose compound and primary analyte, marking them as unknown. Extracted — tranexamic acid: CL 4.7 L/h, V1 4.9 L, V2 11.1 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has tranexamic acid, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL1 (L/h) | `Q22` · CL | 4.7 | L/h | 1.306e-06 | m3/s | l/h | llm (0.6) | t0005:row2:col1 |
| V1 (L) | `Q63` · V1 | 4.9 | L | 0.0049 | m3 | l | exact (1) | t0005:row4:col1 |
| V2 (L) | `Q64` · V2 | 11.1 | L | 0.0111 | m3 | l | exact (1) | t0005:row5:col1 |
| CL2 | `Q900` · CL2 | 17.0 | L/h | 4.722e-06 | m3/s |  |  | t0005:row3:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL2 (L/h) | Q30 | special_case |

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tranexamic acid
- bound model equation to Q30 (Q): CL2 = CL2 typical * (1+0.75*Sex)CL1=CL1 typical * (Age/55)^0 75
- model equation 'CL1 = CL1 typical * (BW/70)^0.75CL2=CL2 typical * (BW/70)^0.75V1= V1 typical * (BW/70)^1V2= V2 typical * (BW/70)^1' not bound — neither LHS nor base term 'CL1' linked to an ontology parameter
- Q30 (Q) is equation-defined: value moved to equation-variable 'CL2 (L/h)'; equation kept verbatim
- population split: 'the final model' subgroup of Liu_2025 (paper reports 2 populations: estimate (% rse), the final model)

**Extraction notes:**
- unparsed cell Liu_2025_table_4:row0:col3 = '0.28 (37) (0.03)'
- unparsed cell Liu_2025_table_4:row1:col3 = '0.44 (44) (0.21)'
- unparsed cell Liu_2025_table_4:row2:col3 = '0.30 (48) (0.16)'
- unparsed cell Liu_2025_table_4:row3:col3 = '0.22 (45) (0.12)'
- companion parameter table 4 transcribed (8 record(s), model stage 'final')
- LLM selected parameter table(s) 4
- dropped sensitivity-analysis table(s) 5 from the LLM selection — perturbations of a model, not a model
- captured model equation CL2 = CL2 typical * (1+0.75*Sex)CL1=CL1 typical * (Age/55)^0 75
- captured model equation CL1 = CL1 typical * (BW/70)^0.75CL2=CL2 typical * (BW/70)^0.75V1= V1 typical * (BW/70)^1V2= V2 typical * (BW/70)^1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `screen.dose_compound` | tranexamic acid | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | tranexamic acid | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0005:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t0005:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['t0005:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['t0005:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.7 | ['t0005:row2:col1'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.7 L/h | ['t0005:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.9 L | ['t0005:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 11.1 L | ['t0005:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btranexamic_acid%5D%20TranexamicAcid_Liu2025_the_final_model&body=Drug%3A%20tranexamic_acid%0ARecord%3A%20TranexamicAcid_Liu2025_the_final_model%0APaper%3A%20Liu_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tranexamic_acid/TranexamicAcid_Liu2025_the_final_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 17:02 UTC</sub>
