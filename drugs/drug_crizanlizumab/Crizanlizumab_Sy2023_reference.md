<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;crizanlizumab&quot;,&quot;href&quot;:&quot;drugs/drug_crizanlizumab/&quot;},{&quot;label&quot;:&quot;Sy_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# crizanlizumab — `Crizanlizumab_Sy2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="crizanlizumab" model-id="Crizanlizumab_Sy2023_reference" status="rejected" stale="false" population="healthy subjects and patients with sickle cell disease" measured-compound="crizanlizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Sy SKB, Tanaka C, Grosch K. Population Pharmacokinetics and Pharmacodynamics of Crizanlizumab in Healthy Subjects and Patients with Sickle Cell Disease. Clinical pharmacokinetics 62(2):249–266 (2023).
  ·  DOI: [10.1007/s40262-022-01193-4](https://doi.org/10.1007/s40262-022-01193-4)

## Population and dosing

**Population:** healthy subjects and patients with sickle cell disease · condition sickle cell disease · age group adult.

**Dosing:** 14, 35, 70, 350, 525, 560 mg, iv, multiple, every 14 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| WTonVc | V | 1 |  |
| Kd | KD | 0.354 |  |
| WTonCL | CL | 0.75 |  |
| WTonV2 | V2 | 1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.062). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — crizanlizumab: V 1, KD 0.354, CL 0.75, V2 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has crizanlizumab, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| WTonVc | `Q61` · V | 1 |  | llm (0.6) | Sy_2023_table_p12_1:row2:col2, Sy_2023_table_p12_1:row2:col3 |
| Kd | `Q331` · KD | 0.354 |  | exact (1) | Sy_2023_table_p12_1:row4:col2, Sy_2023_table_p12_1:row4:col3, Sy_2023_table_p12_1:row4:col4 |
| WTonCL | `Q22` · CL | 0.75 |  | llm (0.6) | Sy_2023_table_p12_1:row7:col2, Sy_2023_table_p12_1:row7:col3 |
| WTonV2 | `Q64` · V2 | 1 |  | llm (0.6) | Sy_2023_table_p12_1:row11:col2, Sy_2023_table_p12_1:row11:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Kint | Q334 | exact |

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'additive error' routed out of structural estimates ('Residual variability')
- table section residual_error: 'proportional error' routed out of structural estimates ('Residual variability')
- table section residual_error: 'OFV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'cBIC' routed out of structural estimates ('Residual variability')
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'WTonQ' — extend the ontology if this is a real PK parameter (source ['Sy_2023_table_p12_1:row9:col2', 'Sy_2023_table_p12_1:row9:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=crizanlizumab
- molar mass: none found for 'crizanlizumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Sy_2023_table_p12_1:row2:col4 = '0.14 (82.9%)'
- unparsed cell Sy_2023_table_p12_1:row3:col2 = '0.0059 (9.96%)'
- unparsed cell Sy_2023_table_p12_1:row3:col3 = '0.006 (10.1%)'
- unparsed cell Sy_2023_table_p12_1:row3:col4 = '0.011 (14.5%)'
- unparsed cell Sy_2023_table_p12_1:row7:col4 = '0.32 (40%)'
- unparsed cell Sy_2023_table_p12_1:row9:col4 = '0.29 (166%)'
- unparsed cell Sy_2023_table_p12_1:row11:col4 = '0.64 (28.2%)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.062 (1/16 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['crizanlizumab', 'soluble p-selectin', 'effect']] | mismatch |
| `gpt-oss-120b` | `parameters[cl]` |  | 0.012 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kd]` | 0.354 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kd]` |  | 0.354 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kint]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kint]` |  | 0.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 0.032 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 2.94 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` |  | 2.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[wtoncl]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[wtonq]` |  | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[wtonv2]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[wtonvc]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | crizanlizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | crizanlizumab | unknown | mismatch |

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
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Sy_2023_table_p12_1:row7:col2', 'Sy_2023_table_p12_1:row7:col3'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 |  | ['Sy_2023_table_p12_1:row4:col2', 'Sy_2023_table_p12_1:row4:col3', 'Sy_2023_table_p12_1:row4:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['Sy_2023_table_p12_1:row2:col2', 'Sy_2023_table_p12_1:row2:col3'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['Sy_2023_table_p12_1:row11:col2', 'Sy_2023_table_p12_1:row11:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.75 | ['Sy_2023_table_p12_1:row7:col2', 'Sy_2023_table_p12_1:row7:col3'] |
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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcrizanlizumab%5D%20Crizanlizumab_Sy2023_reference&body=Drug%3A%20crizanlizumab%0ARecord%3A%20Crizanlizumab_Sy2023_reference%0APaper%3A%20Sy_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_crizanlizumab/Crizanlizumab_Sy2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-06 01:18 UTC</sub>
