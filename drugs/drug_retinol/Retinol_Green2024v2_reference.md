<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;retinol&quot;,&quot;href&quot;:&quot;drugs/drug_retinol/&quot;},{&quot;label&quot;:&quot;Green_2024_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# retinol — `Retinol_Green2024v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The retinol model was rejected because its structural parameters carry amounts (μmol) and rates (μmol/d) instead of volumes and clearance units, and a compartment is unreachable from the dose.

<div class="pk-model-meta" hidden drug="retinol" model-id="Retinol_Green2024v2_reference" status="rejected" stale="false" population="Ghanaian women of reproductive age" measured-compound="retinol" parameterization="apparent" topology="1C"></div>

## Citation
Green MH, Lopez-Teros V, Green JB, Lietz G, Kumordzie SM, Oxley A et al. Use of Population-Based Compartmental Modeling and Retinol Isotope Dilution to Study Vitamin A Kinetics and Total Body Stores among Ghanaian Women of Reproductive Age. Current developments in nutrition 8(11):104484 (2024).
  ·  DOI: [10.1016/j.cdnut.2024.104484](https://doi.org/10.1016/j.cdnut.2024.104484)

## Population and dosing

**Population:** Ghanaian women of reproductive age · condition healthy · age group adult · n = &gt;=87.

**Dosing:** 2 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed retinyl acetate, measured retinol.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| M(5) (μmol) | V1 | 3.362 | μmol |
| M(6) (μmol) | V2 | 920.458 | μmol |
| M(7) (μmol) | V3 | 52.6608 | μmol |
| R(8,5) (μmol/d) | CLm/F | 0.651488 | μmol/d |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.158). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The retinol model was rejected because its structural parameters carry amounts (μmol) and rates (μmol/d) instead of volumes and clearance units, and a compartment is unreachable from the dose.**

The central, peripheral and second peripheral volumes of retinol are reported as 3.362, 920.458 and 52.6608 μmol — amounts, not volumes — and the apparent metabolite clearance as 0.651488 μmol/d, a dimension mismatch on structural parameters. The unit μmol could not be converted to SI, so the parameters arrived without SI values. The model structure also contains an unreachable compartment or unlinked metabolite. A second reader additionally recorded dose-related parameters (dr 1.303, dt(3) 0.129438, l(0,1) 9.99, l(0,6) 0.00070779, and 3875) that the record left null, and read the parameterization as mechanistic rather than apparent. Extracted — retinol: V1 3.36 μmol, V2 920 μmol, V3 52.7 μmol, CLm/F 0.651 μmol/d.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has retinyl acetate, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| M(5) (μmol) | `Q63` · V1 | 3.362 | μmol | µM·ol | exact (1) | Green_2024_2_table_2:row16:col1 |
| M(6) (μmol) | `Q64` · V2 | 920.458 | μmol | µM·ol | exact (1) | Green_2024_2_table_2:row17:col1 |
| M(7) (μmol) | `Q77` · V3 | 52.6608 | μmol | µM·ol | exact (1) | Green_2024_2_table_2:row18:col1 |
| R(8,5) (μmol/d) | `Q351` · CLm/F | 0.651488 | μmol/d | (µM·ol)/d | exact (1) | Green_2024_2_table_2:row20:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Time (d)' — extend the ontology if this is a real PK parameter (source ['tbl4:row0:col1', 'tbl4:row0:col2', 'tbl4:row0:col3', 'tbl4:row0:col4', 'tbl4:row0:col5', 'tbl4:row0:col6', 'tbl4:row0:col7', 'tbl4:row0:col8'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['tbl4:row1:col1', 'tbl4:row1:col2', 'tbl4:row1:col3', 'tbl4:row1:col4', 'tbl4:row1:col5', 'tbl4:row1:col6', 'tbl4:row1:col7', 'tbl4:row1:col8'])
- dropped unlinked row (NIL): 'GM' — extend the ontology if this is a real PK parameter (source ['tbl4:row2:col1', 'tbl4:row2:col2', 'tbl4:row2:col3', 'tbl4:row2:col4', 'tbl4:row2:col5', 'tbl4:row2:col6', 'tbl4:row2:col7', 'tbl4:row2:col8'])
- dropped unlinked row (NIL): 'Min' — extend the ontology if this is a real PK parameter (source ['tbl4:row3:col1', 'tbl4:row3:col2', 'tbl4:row3:col3', 'tbl4:row3:col4', 'tbl4:row3:col5', 'tbl4:row3:col6', 'tbl4:row3:col7', 'tbl4:row3:col8'])
- dropped unlinked row (NIL): 'Max' — extend the ontology if this is a real PK parameter (source ['tbl4:row4:col1', 'tbl4:row4:col2', 'tbl4:row4:col3', 'tbl4:row4:col4', 'tbl4:row4:col5', 'tbl4:row4:col6', 'tbl4:row4:col7', 'tbl4:row4:col8'])
- dropped unlinked row (NIL): 'L(2,1) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row0:col1'])
- dropped unlinked row (NIL): 'L(0,1) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row1:col1'])
- dropped unlinked row (NIL): 'L(3,2) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row2:col1'])
- dropped unlinked row (NIL): 'L(5,2) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row3:col1'])
- dropped unlinked row (NIL): 'L(4,3) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row4:col1'])
- dropped unlinked row (NIL): 'L(5,4) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row5:col1', 'Green_2024_2_table_2:row5:col2'])
- dropped unlinked row (NIL): 'L(6,5) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row6:col1', 'Green_2024_2_table_2:row6:col2'])
- dropped unlinked row (NIL): 'L(5,6) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row7:col1', 'Green_2024_2_table_2:row7:col2'])
- dropped unlinked row (NIL): 'L(7,5) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row8:col1', 'Green_2024_2_table_2:row8:col2'])
- dropped unlinked row (NIL): 'L(5,7) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row9:col1', 'Green_2024_2_table_2:row9:col2'])
- dropped unlinked row (NIL): 'L(0,6) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row10:col1', 'Green_2024_2_table_2:row10:col2'])
- dropped unlinked row (NIL): 'L(8,5) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row11:col1'])
- dropped unlinked row (NIL): 'L(0,8) (d-1)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row12:col1'])
- dropped unlinked row (NIL): 'DT(3) (d)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row13:col1', 'Green_2024_2_table_2:row13:col2'])
- dropped unlinked row (NIL): 'DT(8) (d)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row14:col1'])
- unit_dimension_mismatch: 'M(5) (μmol)' → Q63 (unit '[substance]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'M(6) (μmol)' → Q64 (unit '[substance]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'M(7) (μmol)' → Q77 (unit '[substance]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'TBS (μmol)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row19:col1'])
- unit_dimension_mismatch: 'R(8,5) (μmol/d)' → Q22 (unit '[substance] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'R(0,6) (μmol/d)' → Q22 (unit '[substance] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('R(0,6) (μmol/d)', value '0.651488') — already have one for this compound
- unit_dimension_mismatch: 'DR (μmol/d)' → Q22 (unit '[substance] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('DR (μmol/d)', value '1.303') — already have one for this compound
- dropped unlinked row (NIL): 'U(1) (μmol/d)' — extend the ontology if this is a real PK parameter (source ['Green_2024_2_table_2:row23:col1'])
- metabolite retinol: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=retinol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 28/28 row label(s) assigned, 6 linked by role; re-tagged retinol→parent ×8
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 2 transcribed (30 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[91]` |  | 3875 | only_one_extracted |
| `gpt-oss:120b` | `parameters[dr]` |  | 1.303 | only_one_extracted |
| `gpt-oss:120b` | `parameters[dt(3)]` |  | 0.129438 | only_one_extracted |
| `gpt-oss:120b` | `parameters[l(0,1)]` |  | 9.99 | only_one_extracted |
| `gpt-oss:120b` | `parameters[l(0,6)]` |  | 0.00070779 | only_one_extracted |
| `gpt-oss:120b` | `parameters[l(2,1)]` |  | 30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[l(4,3)]` |  | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[l(8,5)]` |  | 0.19378 | only_one_extracted |
| `gpt-oss:120b` | `parameters[m(5)].parameter_id` | Q63 | Q30 | mismatch |
| `gpt-oss:120b` | `parameters[m(6)]` | 920.458 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[m(7)].parameter_id` | Q77 | Q54 | mismatch |
| `gpt-oss:120b` | `parameters[max]` |  | 2.73 | only_one_extracted |
| `gpt-oss:120b` | `parameters[r(8,5)]` | 0.651488 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | retinyl acetate | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | retinol | unknown | mismatch |

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
| C5_dimension_Q351 | fail | [substance] / [time] | μmol/d | ['Green_2024_2_table_2:row20:col1'] |
| C5_dimension_Q63 | fail | [substance] | μmol | ['Green_2024_2_table_2:row16:col1'] |
| C5_dimension_Q64 | fail | [substance] | μmol | ['Green_2024_2_table_2:row17:col1'] |
| C5_dimension_Q77 | fail | [substance] | μmol | ['Green_2024_2_table_2:row18:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bretinol%5D%20Retinol_Green2024v2_reference&body=Drug%3A%20retinol%0ARecord%3A%20Retinol_Green2024v2_reference%0APaper%3A%20Green_2024_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_retinol/Retinol_Green2024v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 08:12 UTC</sub>
