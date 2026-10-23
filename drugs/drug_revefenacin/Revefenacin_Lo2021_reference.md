<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03B&quot;,&quot;href&quot;:&quot;atc/R03B.md&quot;},{&quot;label&quot;:&quot;revefenacin&quot;,&quot;href&quot;:&quot;drugs/drug_revefenacin/&quot;},{&quot;label&quot;:&quot;Lo_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# revefenacin — `Revefenacin_Lo2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The absorption rate constant for revefenacin is recorded as 200 L/h, a dimensionally invalid unit for a first-order rate constant.

<div class="pk-model-meta" hidden drug="revefenacin" model-id="Revefenacin_Lo2021_reference" status="rejected" stale="false" population="patients with chronic obstructive pulmonary disease" measured-compound="revefenacin" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Lo A, Borin MT, Bourdet DL. Population Pharmacokinetics of Revefenacin in Patients with Chronic Obstructive Pulmonary Disease. Clinical pharmacokinetics 60(3):391–401 (2021).
  ·  DOI: [10.1007/s40262-020-00938-3](https://doi.org/10.1007/s40262-020-00938-3)

## Population and dosing

**Population:** patients with chronic obstructive pulmonary disease · condition chronic obstructive pulmonary disease · age group adult · n = # 935.

**Dosing:** 0.022, 0.7 mg, inhaled, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 11 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Revefenacin | CL | 668 | L/h | 3.17 |
| V1/F, L | V1/F | 867 | L |  |
| Q/F, L/h | Q/F | 2607 | L/h |  |
| V2/F, L | V2/F | 15495 | L |  |
| Ka, L/h | kabs | 200 | L/h |  |
| Study 1 effect on F1 | Fab | 0.553 |  |  |
| THRX-195518 | CL | 53.2 | L/h | 1.84 |
| V3/F, L | V1/F | 20.4 | L |  |
| Qmet/F, L/h | Q/F | 36.3 | L/h |  |
| V4/F, L | V2/F | 35.8 | L |  |
| Fmet | fm | 0.21 |  |  |
| theta_q_f_weight | theta_q_f_weight | 0.485 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.136). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The absorption rate constant for revefenacin is recorded as 200 L/h, a dimensionally invalid unit for a first-order rate constant.**

The record lists the absorption rate constant with a value of 200 and a unit of L/h, which is a volume flow rate rather than a reciprocal time unit. This dimensional mismatch on a structural parameter caused the model to be rejected. A second reader disagreed with this value, suggesting 0, but the primary record retains the invalid unit. Extracted — revefenacin: CL 668 L/h, V1/F 867 L, Q/F 2.61e+03 L/h, V2/F 1.55e+04 L, kabs 200 L/h, Fab 0.553; THRX-195518: CL 53.2 L/h, V1/F 20.4 L, Q/F 36.3 L/h, V2/F 35.8 L, fm 0.21.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has revefenacin, the second reading unknown; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Revefenacin | `Q22` · CL | 668 | L/h | 0.0001856 | m3/s | L/h | 3.17 | exact (1) | Tab2:row1:col2 |
| V1/F, L | `Q290` · V1/F | 867 | L | 0.867 | m3 | l |  | exact (1) | Tab2:row2:col1, Tab2:row2:col2 |
| Q/F, L/h | `Q69` · Q/F | 2607 | L/h | 0.0007242 | m3/s | l/h |  | exact (1) | Tab2:row3:col1, Tab2:row3:col2 |
| V2/F, L | `Q82` · V2/F | 15495 | L | 15.5 | m3 | l |  | exact (1) | Tab2:row4:col1, Tab2:row4:col2 |
| Ka, L/h | `Q49` · kabs | 200 | L/h |  |  | l/h |  | exact (1) | Tab2:row5:col1, Tab2:row5:col2 |
| Study 1 effect on F1 | `Q40` · Fab | 0.553 |  |  |  |  |  | llm_confirmed (0.6) | Tab2:row6:col1, Tab2:row6:col2 |
| THRX-195518 | `Q22` · CL | 53.2 | L/h | 1.478e-05 | m3/s | L/h | 1.84 | exact (1) | Tab2:row10:col2 |
| V3/F, L | `Q290` · V1/F | 20.4 | L | 0.0204 | m3 | l |  | exact (1) | Tab2:row11:col1, Tab2:row11:col2 |
| Qmet/F, L/h | `Q69` · Q/F | 36.3 | L/h | 1.008e-05 | m3/s | l/h |  | exact (1) | Tab2:row12:col1, Tab2:row12:col2 |
| V4/F, L | `Q82` · V2/F | 35.8 | L | 0.0358 | m3 | l |  | exact (1) | Tab2:row13:col1, Tab2:row13:col2 |
| Fmet | `Q45` · fm | 0.21 |  |  |  |  |  | exact (1) | Tab2:row14:col1, Tab2:row14:col2 |
| theta_q_f_weight | `Q900` · theta_q_f_weight | 0.485 |  |  |  |  |  |  | Tab2:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Revefenacin' routed out of structural estimates ('Inter-individual variability (%)')
- table section iiv: 'THRX-195518' routed out of structural estimates ('Inter-individual variability (%)')
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- linked 'Revefenacin' as 'CL' → Q22 (CL) for  — compound marker removed
- unit_dimension_mismatch: 'Ka, L/h' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q40 ('Dose effect on F1', value '0.0987') — already have one for this compound
- implicit units: 'Revefenacin' → L/h (from the paper text: "The text states: 'In the final model (Table 2), the population estimate of CL/F was 668 L/h'")
- implicit units: 'THRX-195518' → L/h (from the popPK convention: 'The parameter is a total clearance (CL). In population pharmacokinetics, clearance is conventionally expressed in L/h. T')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=revefenacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 20 linked by role; re-tagged parent→THRX-195518 ×10
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.136 (3/22 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['revefenacin', 'thrx-195518', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[fmet]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fmet]` | 0.21 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 200 | 0 | mismatch |
| `gpt-oss-120b` | `parameters[q/f].value` | 2607 | 31.0 | mismatch |
| `gpt-oss-120b` | `parameters[qmet/f]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qmet/f]` | 36.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[revefenacin]` | 668 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[study 1 effect on f1].value` | 0.553 | 33.7 | mismatch |
| `gpt-oss-120b` | `parameters[thrx-195518]` |  | 53.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[thrx-195518]` | 53.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f].value` | 867 | 26.9 | mismatch |
| `gpt-oss-120b` | `parameters[v2/f].value` | 15495 | 52.2 | mismatch |
| `gpt-oss-120b` | `parameters[v3/f]` |  | 52.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 20.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` | 35.8 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | revefenacin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | revefenacin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row10:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row11:col1', 'Tab2:row11:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | ['Tab2:row5:col1', 'Tab2:row5:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab2:row12:col1', 'Tab2:row12:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab2:row13:col1', 'Tab2:row13:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 668 L/h | ['Tab2:row1:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 53.2 L/h | ['Tab2:row10:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 867 L | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 20.4 L | ['Tab2:row11:col1', 'Tab2:row11:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.55e+04 L | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 35.8 L | ['Tab2:row13:col1', 'Tab2:row13:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brevefenacin%5D%20Revefenacin_Lo2021_reference&body=Drug%3A%20revefenacin%0ARecord%3A%20Revefenacin_Lo2021_reference%0APaper%3A%20Lo_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_revefenacin/Revefenacin_Lo2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 14:28 UTC</sub>
