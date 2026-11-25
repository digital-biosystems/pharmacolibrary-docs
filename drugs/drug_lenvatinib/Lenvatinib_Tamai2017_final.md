<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lenvatinib&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/&quot;},{&quot;label&quot;:&quot;Tamai_2017 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lenvatinib_Tamai2017_base_base_model_population_mean_rse&quot;,&quot;label&quot;:&quot;Tamai_2017_base_base_model_population_mean_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/Lenvatinib_Tamai2017_base_base_model_population_mean_rse.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lenvatinib_Tamai2017_final_final_model_population_mean_rse&quot;,&quot;label&quot;:&quot;Tamai_2017_final_final_model_population_mean_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final_final_model_population_mean_rse.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lenvatinib — `Lenvatinib_Tamai2017_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="lenvatinib" model-id="Lenvatinib_Tamai2017_final" status="rejected" stale="false" population="pooled population of healthy adults, patients with mixed tumor types, and patients with hepatocellular carcinoma" measured-compound="lenvatinib" parameterization="mechanistic" topology="1C"></div>

## Citation
Tamai T, Hayato S, Hojo S, Suzuki T, Okusaka T, Ikeda K et al. Dose Finding of Lenvatinib in Subjects With Advanced Hepatocellular Carcinoma Based on Population Pharmacokinetic and Exposure-Response Analyses. Journal of clinical pharmacology 57(9):1138–1147 (2017).
  ·  DOI: [10.1002/jcph.917](https://doi.org/10.1002/jcph.917)

## Population and dosing

**Population:** pooled population of healthy adults, patients with mixed tumor types, and patients with hepatocellular carcinoma · condition mixed (healthy, various cancers, hepatocellular carcinoma) · age group adult · n = 452.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), qwen3.8-27b (partly confirmed, agreement 0.867). Primary extraction retained.">cross-check: partial 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of theta_q314_body_weight: this record has none, the second reading 0.708; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Basal CL/F in L/h [ΘCL]' routed out of structural estimates ('Final Model Interindividual Variability (%CV)')
- table section iiv: 'Basal V1/F in L [ΘV1]' routed out of structural estimates ('Final Model Interindividual Variability (%CV)')
- table section iiv: 'Basal V2/F in L [ΘV2]' routed out of structural estimates ('Final Model Interindividual Variability (%CV)')
- table section iiv: 'Basal V3/F in L [ΘV3]' routed out of structural estimates ('Final Model Interindividual Variability (%CV)')
- table section iiv: 'Ka (1/h)' routed out of structural estimates ('Final Model Interindividual Variability (%CV)')
- table section iiv: 'D1 (hours)' routed out of structural estimates ('Final Model Interindividual Variability (%CV)')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lenvatinib
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- model-stage split: 'final model interindividual variability (%cv)' is the final model of Tamai_2017 (paper reports 4 stages: base model interindividual variability (%cv), base model population mean (%rse), final model interindividual variability (%cv), final model population mean (%rse)); same population, different model-building step

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (4/4 fields) | none |
| `qwen3.8-27b` | partly confirmed | 0.867 (13/15 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[theta_q314_body_weight]` |  | 0.708 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight]` | 0.708 |  | only_one_extracted |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blenvatinib%5D%20Lenvatinib_Tamai2017_final&body=Drug%3A%20lenvatinib%0ARecord%3A%20Lenvatinib_Tamai2017_final%0APaper%3A%20Tamai_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 13:06 UTC</sub>
