<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;nadroparin&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/&quot;},{&quot;label&quot;:&quot;Mast_2023 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nadroparin_Piwowarczyk2023_reference&quot;,&quot;label&quot;:&quot;Piwowarczyk_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nadroparin/Nadroparin_Piwowarczyk2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nadroparin — `Nadroparin_Mast2023_base`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="nadroparin" model-id="Nadroparin_Mast2023_base" status="rejected" stale="false" population="patients with renal impairment, obese patients, and controls" measured-compound="anti-Xa activity" parameterization="mechanistic" topology="1C"></div>

## Citation
Mast L, Peeters MYM, Söhne M, Hackeng CM, Knibbe CAJ, van den Broek MPH. The effect of renal impairment and obesity on anti-Xa peak and trough levels in patients receiving therapeutic doses of nadroparin: a comparison with control patients. European journal of clinical pharmacology 79(11):1537–1547 (2023).
  ·  DOI: [10.1007/s00228-023-03558-5](https://doi.org/10.1007/s00228-023-03558-5)

## Population and dosing

**Population:** patients with renal impairment, obese patients, and controls · condition renal impairment, obesity · age group adult · n = ... [The previous thought process contained a formatting error where the JSON was not closed. I will generate the complete, corrected response now.].

**Dosed compound ≠ measured compound:** dosed nadroparin, measured anti-Xa activity.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nadroparin, the second reading unknown; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive error in individuals of Diepstraten et al. [19]' routed out of structural estimates ('Residual variability (σ2)')
- table section residual_error: 'Additive error in individuals of current study' routed out of structural estimates ('Residual variability (σ2)')
- column 'base model (rse%) [shrinkage %]' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped value-less row: 'CL/F (mL/min)' (captured trailing unit 'mL/min' for child rows)
- dropped value-less row: 'V1/F (mL)' (captured trailing unit 'mL' for child rows)
- dropped value-less row: 'Q/F (mL/min)' (captured trailing unit 'mL/min' for child rows)
- dropped value-less row: 'Ka = Ktr (min−1)' (captured trailing unit 'min−1' for child rows)
- dropped value-less row: 'BSL anti-Xa (IU/mL) in individuals of Diepstraten et al. [19]' (captured trailing unit '19' for child rows)
- dropped value-less row: 'BSL (aXa IU/mL) in individuals of current study'
- dropped value-less row: 'OFV (− 2LL)' (captured trailing unit '− 2LL' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=anti-Xa activity
- model-stage split: 'base model (rse%) [shrinkage %]' is the base model of Mast_2023 (paper reports 2 stages: base model (rse%) [shrinkage %], final model (rse%) [shrinkage %]); same population, different model-building step
- review gap-fill skipped: this record measures 'anti-Xa activity', not nadroparin — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab2:row2:col3 = '21.0 (19.0, 23.2)'
- unparsed cell Tab2:row3:col3 = '0.45 (0.25, 0.64)'
- unparsed cell Tab2:row5:col3 = '8289 (7482, 9195)'
- unparsed cell Tab2:row7:col3 = '155 (124, 204)'
- unparsed cell Tab2:row8:col3 = '0.0156 (0.0139, 0.0176)'
- unparsed cell Tab2:row9:col3 = '0.0227 (0.0161, 0.0299)'
- unparsed cell Tab2:row11:col3 = '-2095.450 (-2179.234, -2020.371)'
- unparsed cell Tab2:row16:col1 = '0.9 (42) [41]'
- unparsed cell Tab2:row16:col2 = '0.763 (42) [39]'
- unparsed cell Tab2:row18:col3 = '0.00044 (0.00035, 0.00056)'
- unparsed cell Tab2:row19:col3 = '0.0229 (0.0141, 0.0370)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.4 (2/5 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[shrinkage volume of distribution]` |  | 38 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | nadroparin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | anti-Xa activity | unknown | mismatch |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnadroparin%5D%20Nadroparin_Mast2023_base&body=Drug%3A%20nadroparin%0ARecord%3A%20Nadroparin_Mast2023_base%0APaper%3A%20Mast_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nadroparin/Nadroparin_Mast2023_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:12 UTC</sub>
