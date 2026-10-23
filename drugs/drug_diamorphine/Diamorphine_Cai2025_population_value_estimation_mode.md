<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;diamorphine&quot;,&quot;href&quot;:&quot;drugs/drug_diamorphine/&quot;},{&quot;label&quot;:&quot;Cai_2025 \u00b7 population_value_estimation_mode&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diamorphine — `Diamorphine_Cai2025_population_value_estimation_mode`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="diamorphine" model-id="Diamorphine_Cai2025_population_value_estimation_mode" status="rejected" stale="false" population="adults (model) with pediatric simulation for breakthrough pain" measured-compound="morphine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Cai L, Zhai J, Ji B, Han F, Niu T, Wang L et al. Intranasal diamorphine population pharmacokinetics modeling and simulation in pediatric breakthrough pain. CPT: pharmacometrics & systems pharmacology 14(3):435–447 (2025).
  ·  DOI: [10.1002/psp4.13186](https://doi.org/10.1002/psp4.13186)

## Population and dosing

**Population:** adults (model) with pediatric simulation for breakthrough pain · condition breakthrough pain · age group adult.

**Dosing:** 6, 12 mg, intranasal, single.

**Dosed compound ≠ measured compound:** dosed diamorphine, measured morphine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F% [per 70 kg] | Q40 | llm |
| V1 [L/per 70 kg] | Q63 | exact |
| V3 [L/per 70 kg] (= V2) | Q64 | exact |

## Departures & gaps

**Interpretation flags:**
- column 'population value(estimation mode)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'Estimation Mode' (Fab)
- unit_dimension_unknown: 'Estimation Mode' (V1)
- unit_dimension_unknown: '= V2' (V2)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'population value(estimation mode)' subgroup of Cai_2025 (paper reports 2 populations: fisher information matrix estimates (stochastic approximation), population value(estimation mode))
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 26 linked by role; re-tagged parent→morphine ×9
- review gap-fill skipped: this record measures 'morphine', not diamorphine — the review values are the parent's

**Extraction notes:**
- unparsed cell psp413186-tbl-0002:row2:col3 = '3.70 [1.67–4.63]'
- unparsed cell psp413186-tbl-0002:row3:col3 = '0.532 [0.504–0.592]'
- unparsed cell psp413186-tbl-0002:row4:col3 = '9.43 [5.17–12.5]'
- unparsed cell psp413186-tbl-0002:row5:col3 = '34.3 [29.8–38.7]'
- unparsed cell psp413186-tbl-0002:row6:col3 = '102 [83.6–127]'
- unparsed cell psp413186-tbl-0002:row7:col3 = '100 [91.6–115]'
- unparsed cell psp413186-tbl-0002:row8:col3 = '23.9 [23.3–24.6]'
- unparsed cell psp413186-tbl-0002:row9:col3 = '3.07 [2.14–3.42]'
- unparsed cell psp413186-tbl-0002:row10:col3 = '139 [123–164]'
- unparsed cell Cai_2025_table_S3:row1:col2 = '1 (MLE)'
- unparsed cell Cai_2025_table_S3:row2:col2 = '1 (MLE)'
- unparsed cell Cai_2025_table_S3:row3:col2 = '1 (MLE)'
- companion parameter table S3 transcribed (3 record(s))
- LLM selected parameter table(s) 2, S3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (3/21 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 0.5564729359758813 | only_one_extracted |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[auc]` |  | 26.0086 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl [l/h/per 70 kg]]` |  | 97.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 57.3906 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f % [per 70 kg]]` |  | 0.40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f% [per 70 kg]]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  | 0.5564729359758813 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 12 [h-1/per 70 kg]]` |  | 70.92 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 23 [h-1/per 70 kg]]` |  | 73.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 3p [h-1/per 70 kg]]` |  | 16.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a [h-1 per 70 kg]]` |  | 2.44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k34]` |  | 49.8731671036749 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k43]` |  | 5.59181439173388 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1 [l/per 70 kg]]` |  | 6.32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 3 [l/per 70 kg]]` |  | 21.41 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1 [l/per 70 kg]]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3 [l/per 70 kg]]` |  |  | only_one_extracted |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiamorphine%5D%20Diamorphine_Cai2025_population_value_estimation_mode&body=Drug%3A%20diamorphine%0ARecord%3A%20Diamorphine_Cai2025_population_value_estimation_mode%0APaper%3A%20Cai_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diamorphine/Diamorphine_Cai2025_population_value_estimation_mode%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:56 UTC</sub>
