<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cytarabine&quot;,&quot;href&quot;:&quot;drugs/drug_cytarabine/&quot;},{&quot;label&quot;:&quot;Wang_2019 \u00b7 total_cytarabine&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cytarabine — `Cytarabine_Wang2019_total_cytarabine`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="cytarabine" model-id="Cytarabine_Wang2019_total_cytarabine" status="rejected" stale="false" population="patients with hematologic malignancies (AML, ALL, MDS)" measured-compound="cytarabine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Wang Q, Banerjee K, Vasilinin G, Marier JF, Gibbons JA. Population Pharmacokinetics and Exposure-Response Analyses for CPX-351 in Patients With Hematologic Malignancies. Journal of clinical pharmacology 59(5):748–762 (2019).
  ·  DOI: [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366)

## Population and dosing

**Population:** patients with hematologic malignancies (AML, ALL, MDS) · condition hematologic malignancies · age group adult · n = &gt;&lt;/.

**Dosing:** 3, 65, 100, 134 units/m2, iv, multiple.

**Dosed compound ≠ measured compound:** dosed CPX-351, measured cytarabine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has cytarabine → unknown (none), the second reading none → none (none); it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL, L/h | Q22 | exact |
| Vc, L | Q63 | exact |
| Q, L/h | Q30 | exact |
| Vp, L | Q64 | exact |

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cytarabine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- model equation 'θi = θ× exp (ηi)where θ' not bound — neither LHS nor base term 'θ' linked to an ontology parameter
- status held at route_to_review — not promoted
- population split: 'total cytarabine' subgroup of Wang_2019 (paper reports 2 populations: overall p‐value, total cytarabine)
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell jcph1366-tbl-0004:row2:col2 = '64/262 (24.4)'
- unparsed cell jcph1366-tbl-0004:row2:col3 = '0.429 (0.249–0.738)'
- unparsed cell jcph1366-tbl-0004:row7:col2 = '162/262 (61.8)'
- unparsed cell jcph1366-tbl-0004:row7:col3 = '1.460 (1.039–2.052)'
- unparsed cell jcph1366-tbl-0004:row17:col2 = '227/263 (86.3)'
- unparsed cell jcph1366-tbl-0004:row17:col3 = '0.459 (0.298–0.706)'
- unparsed cell Wang_2019_table_2:row1:col2 = '61.0%'
- unparsed cell Wang_2019_table_2:row1:col4 = '49.3%'
- unparsed cell Wang_2019_table_2:row2:col2 = '24.7%'
- unparsed cell Wang_2019_table_2:row2:col4 = '23.7%'
- unparsed cell Wang_2019_table_2:row3:col4 = '69.3%'
- unparsed cell Wang_2019_table_2:row4:col4 = '86.9%'
- companion parameter table 2 transcribed (8 record(s))
- LLM selected parameter table(s) 2
- captured model equation θi = θ× exp (ηi)where θ

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['cytarabine', 'unknown', 'none']] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[median]` |  | 520 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Wang_2019_table_2:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Wang_2019_table_2:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Wang_2019_table_2:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Wang_2019_table_2:row4:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcytarabine%5D%20Cytarabine_Wang2019_total_cytarabine&body=Drug%3A%20cytarabine%0ARecord%3A%20Cytarabine_Wang2019_total_cytarabine%0APaper%3A%20Wang_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cytarabine/Cytarabine_Wang2019_total_cytarabine%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:40 UTC</sub>
