<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;sulpiride&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/&quot;},{&quot;label&quot;:&quot;Helmy_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulpiride_Bressolle1984_reference&quot;,&quot;label&quot;:&quot;Bressolle_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulpiride — `Sulpiride_Helmy2013_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="sulpiride" model-id="Sulpiride_Helmy2013_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="sulpiride" parameterization="apparent" topology="1C"></div>

## Citation
Helmy SA. Therapeutic drug monitoring and pharmacokinetic compartmental analysis of sulpiride double-peak absorption profile after oral administration to human volunteers. Biopharmaceutics & drug disposition 34(5):288–301 (2013).
  ·  DOI: [10.1002/bdd.1843](https://doi.org/10.1002/bdd.1843)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. Only the abstract was available, so reported summary statistics stand in for a fitted model. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[auc0-inf].value`: this record has none, the second reading 1402.5; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| k | Q47 | exact |
| t1/2 | Q57 | half_life_rule |
| Vd /F | Q76 | space_fold |
| Cl/F | Q27 | exact |
| AUC0→∞ | Q17 | exact |
| k21 | Q302 | exact |
| ka1 | Q49 | llm |
| ka2 | Q68 | llm |
| Vc/F | Q290 | exact |
| α | Q67 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q47 ('β', value None) — already have one for this compound
- covariate category for tlag from footnote/prose kept as documentation only (['Helmy_2013:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sulpiride
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume Q290 kept: Q76 already present — review duplicate volume
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Helmy_2013_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf].value` |  | 1402.5 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].value` |  | 38.2 | mismatch |
| `gpt-oss-120b` | `parameters[k21].value` |  | 0.68 | mismatch |
| `gpt-oss-120b` | `parameters[k].value` |  | 0.079 | mismatch |
| `gpt-oss-120b` | `parameters[ka1].value` |  | 0.7 | mismatch |
| `gpt-oss-120b` | `parameters[ka2]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2].value` |  | 9.0 | mismatch |
| `gpt-oss-120b` | `parameters[vc/f].value` |  | 45.1 | mismatch |
| `gpt-oss-120b` | `parameters[vd /f].value` |  | 330.5 | mismatch |
| `gpt-oss-120b` | `parameters[α].value` |  | 33.3 | mismatch |

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
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q67 | pass | 1 / [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q68 | pass | 1 / [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Helmy_2013:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulpiride%5D%20Sulpiride_Helmy2013_reference&body=Drug%3A%20sulpiride%0ARecord%3A%20Sulpiride_Helmy2013_reference%0APaper%3A%20Helmy_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulpiride/Sulpiride_Helmy2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-24 06:32 UTC</sub>
