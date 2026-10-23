<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;neomycin&quot;,&quot;href&quot;:&quot;drugs/drug_neomycin/&quot;},{&quot;label&quot;:&quot;Samuel_1968 \u00b7 neomycin&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# neomycin — `Neomycin_Samuel1968_neomycin`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Rejected), but the paper was screened again on 2026-10-04 02:31 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="neomycin" model-id="Neomycin_Samuel1968_neomycin" status="rejected" stale="true" population="adults with hypercholesterolemia" measured-compound="cholesterol" parameterization="mechanistic" topology="1C"></div>

## Citation
Samuel P, Holtzman CH, Meilman E, Perl W. Effect of neomycin on exchangeable pools of cholesterol in the steady state. The Journal of clinical investigation 47(8):1806–1818 (1968).
  ·  DOI: [10.1172/JCI105870](https://doi.org/10.1172/JCI105870)

## Population and dosing

**Population:** adults with hypercholesterolemia · condition hypercholesterolemia · age group adult · n = 5.

**Dosing:** 2000 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed neomycin, measured cholesterol.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 100 α₁, day⁻¹ | λ1 | 13.9 |  |
| 100 α₂, day⁻¹ | t1/2α | 1.50 |  |
| (t₁/₂)₁, day | t1/2z | 5.0 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.462). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has neomycin, the second reading neomycin sulfate; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| 100 α₁, day⁻¹ | `Q67` · λ1 | 13.9 |  | llm (0.6) | Samuel_1968_table_2:row2:col6, Samuel_1968_table_2:row2:col7, Samuel_1968_table_2:row2:col8, Samuel_1968_table_2:row2:col9 |
| 100 α₂, day⁻¹ | `Q59` · t1/2α | 1.50 |  | llm (0.6) | Samuel_1968_table_2:row3:col6, Samuel_1968_table_2:row3:col7, Samuel_1968_table_2:row3:col8, Samuel_1968_table_2:row3:col9 |
| (t₁/₂)₁, day | `Q57` · t1/2z | 5.0 |  | llm_confirmed (0.6) | Samuel_1968_table_2:row4:col6, Samuel_1968_table_2:row4:col7, Samuel_1968_table_2:row4:col8, Samuel_1968_table_2:row4:col9 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): "a₁', % g⁻¹" — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_2:row0:col6', 'Samuel_1968_table_2:row0:col7', 'Samuel_1968_table_2:row0:col8', 'Samuel_1968_table_2:row0:col9'])
- dropped unlinked row (NIL): "a₂', % g⁻¹" — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_2:row1:col6', 'Samuel_1968_table_2:row1:col7', 'Samuel_1968_table_2:row1:col8', 'Samuel_1968_table_2:row1:col9'])
- dropped duplicate Q57 ('(t₁/₂)₂, day', value '46') — already have one for this compound
- dropped unlinked row (NIL): 'Ms*' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row0:col6', 'Samuel_1968_table_3:row0:col7', 'Samuel_1968_table_3:row0:col8', 'Samuel_1968_table_3:row0:col9'])
- dropped unlinked row (NIL): 'Ma†' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row1:col6', 'Samuel_1968_table_3:row1:col7', 'Samuel_1968_table_3:row1:col8', 'Samuel_1968_table_3:row1:col9'])
- dropped unlinked row (NIL): '100 A§' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row2:col6', 'Samuel_1968_table_3:row2:col7', 'Samuel_1968_table_3:row2:col8', 'Samuel_1968_table_3:row2:col9'])
- dropped unlinked row (NIL): '100 D‖' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row3:col6', 'Samuel_1968_table_3:row3:col7', 'Samuel_1968_table_3:row3:col8', 'Samuel_1968_table_3:row3:col9'])
- dropped unlinked row (NIL): '10⁴ BC¶' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row4:col6', 'Samuel_1968_table_3:row4:col7', 'Samuel_1968_table_3:row4:col8', 'Samuel_1968_table_3:row4:col9'])
- dropped unlinked row (NIL): '(Ia)t=0**' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row5:col6', 'Samuel_1968_table_3:row5:col7', 'Samuel_1968_table_3:row5:col8', 'Samuel_1968_table_3:row5:col9'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cholesterol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'neomycin' subgroup of Samuel_1968 (paper reports 3 populations: control, neomycin, placebo)
- review gap-fill skipped: this record measures 'cholesterol', not neomycin — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.462 (6/13 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[(t1/2)1].parameter_id` | Q57 | Q59 | mismatch |
| `gpt-oss-120b` | `parameters[(t1/2)2]` |  | 46 | only_one_extracted |
| `gpt-oss-120b` | `parameters[100 e_b/m_b, % day-]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[100 r_ab/m_a, % day-]` |  | 4.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[100 α2].parameter_id` | Q59 | Q68 | mismatch |
| `gpt-oss-120b` | `parameters[e_b]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | neomycin | neomycin sulfate | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q57 | fail | [time] |  | ['Samuel_1968_table_2:row4:col6', 'Samuel_1968_table_2:row4:col7', 'Samuel_1968_table_2:row4:col8', 'Samuel_1968_table_2:row4:col9'] |
| C5_unit_missing_Q59 | fail | [time] |  | ['Samuel_1968_table_2:row3:col6', 'Samuel_1968_table_2:row3:col7', 'Samuel_1968_table_2:row3:col8', 'Samuel_1968_table_2:row3:col9'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['Samuel_1968_table_2:row2:col6', 'Samuel_1968_table_2:row2:col7', 'Samuel_1968_table_2:row2:col8', 'Samuel_1968_table_2:row2:col9'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bneomycin%5D%20Neomycin_Samuel1968_neomycin&body=Drug%3A%20neomycin%0ARecord%3A%20Neomycin_Samuel1968_neomycin%0APaper%3A%20Samuel_1968%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_neomycin/Neomycin_Samuel1968_neomycin%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-04 02:31 UTC</sub>
