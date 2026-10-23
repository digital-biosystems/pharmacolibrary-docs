<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;apremilast&quot;,&quot;href&quot;:&quot;drugs/drug_apremilast/&quot;},{&quot;label&quot;:&quot;Okubo_2021 \u00b7 geometric_mean_geometric_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Apremilast_Okubo2021_typical_values_rse_for_model_parameters&quot;,&quot;label&quot;:&quot;Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Apremilast_Warren2025_reference&quot;,&quot;label&quot;:&quot;Warren_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_apremilast/Apremilast_Warren2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# apremilast — `Apremilast_Okubo2021_geometric_mean_geometric_cv`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="apremilast" model-id="Apremilast_Okubo2021_geometric_mean_geometric_cv" status="rejected" stale="false" population="subjects with moderate to severe psoriasis" measured-compound="apremilast" parameterization="mechanistic" topology="1C"></div>

## Citation
Okubo Y, Ohtsuki M, Komine M, Imafuku S, Kassir N, Petric R et al. Population pharmacokinetic and exposure-response analysis of apremilast in Japanese subjects with moderate to severe psoriasis. The Journal of dermatology 48(11):1652–1664 (2021).
  ·  DOI: [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068)

## Population and dosing

**Population:** subjects with moderate to severe psoriasis · condition moderate to severe psoriasis · age group adult · n = 517.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 20 mg b.i.d.: this record has none, the second reading 115.6. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '20 mg b.i.d. (n = 121)' — extend the ontology if this is a real PK parameter (source ['Okubo_2021_table_5:row2:col1', 'Okubo_2021_table_5:row2:col2', 'Okubo_2021_table_5:row2:col3', 'Okubo_2021_table_5:row6:col1', 'Okubo_2021_table_5:row6:col2', 'Okubo_2021_table_5:row6:col3'])
- dropped unlinked row (NIL): '30 mg b.i.d. (n = 120)' — extend the ontology if this is a real PK parameter (source ['Okubo_2021_table_5:row3:col1', 'Okubo_2021_table_5:row3:col2', 'Okubo_2021_table_5:row3:col3'])
- dropped unlinked row (NIL): '10 mg b.i.d. (n = 89)' — extend the ontology if this is a real PK parameter (source ['Okubo_2021_table_5:row5:col1', 'Okubo_2021_table_5:row5:col2', 'Okubo_2021_table_5:row5:col3'])
- dropped unlinked row (NIL): '30 mg b.i.d. (n = 124)' — extend the ontology if this is a real PK parameter (source ['Okubo_2021_table_5:row7:col1', 'Okubo_2021_table_5:row7:col2', 'Okubo_2021_table_5:row7:col3'])
- dropped unlinked row (NIL): 'Non‐Japanese (PSOR‐008/ESTEEM 1)' — extend the ontology if this is a real PK parameter (source ['Okubo_2021_table_5:row8:col1', 'Okubo_2021_table_5:row8:col2', 'Okubo_2021_table_5:row8:col3'])
- dropped unlinked row (NIL): '30 mg b.i.d. (n = 613)' — extend the ontology if this is a real PK parameter (source ['Okubo_2021_table_5:row9:col1', 'Okubo_2021_table_5:row9:col2', 'Okubo_2021_table_5:row9:col3'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number 0.834 (source ['jde16068-tbl-0004:footnote', 'jde16068-tbl-0004:footnote', 'jde16068-tbl-0004:footnote', 'jde16068-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number None (source ['jde16068-tbl-0004:footnote']); the table cell was unparseable — needs review
- table mostly unlinked (6/6 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=apremilast
- status held at "Needs review" — not promoted
- population split: 'geometric mean (geometric cv%)' subgroup of Okubo_2021 (paper reports 3 populations: geometric mean (cv% geometric mean), geometric mean (geometric cv%), typical values (rse %) for model parameters and covariate effects)
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- companion parameter table 2 transcribed (9 record(s))
- companion parameter table 5 transcribed (21 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.8 (4/5 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[20 mg b.i.d.]` |  | 115.6 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bapremilast%5D%20Apremilast_Okubo2021_geometric_mean_geometric_cv&body=Drug%3A%20apremilast%0ARecord%3A%20Apremilast_Okubo2021_geometric_mean_geometric_cv%0APaper%3A%20Okubo_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_apremilast/Apremilast_Okubo2021_geometric_mean_geometric_cv%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:40 UTC</sub>
