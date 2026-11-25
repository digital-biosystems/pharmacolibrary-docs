<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;proguanil&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/&quot;},{&quot;label&quot;:&quot;Na-Bangchang_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Proguanil_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Proguanil_McGready2003_reference&quot;,&quot;label&quot;:&quot;McGready_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_McGready2003_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# proguanil — `Proguanil_NaBangchang2005_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="proguanil" model-id="Proguanil_NaBangchang2005_reference" status="rejected" stale="false" population="third-trimester pregnant women" measured-compound="proguanil" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Na-Bangchang K, Manyando C, Ruengweerayut R, Kioy D, Mulenga M, Miller GB et al. The pharmacokinetics and pharmacodynamics of atovaquone and proguanil for the treatment of uncomplicated falciparum malaria in third-trimester pregnant women. European journal of clinical pharmacology 61(8):573–582 (2005).
  ·  DOI: [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7)

## Population and dosing

**Population:** third-trimester pregnant women · condition falciparum malaria · age group adult · n = 26.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. Only the abstract was available, so reported summary statistics stand in for a fitted model. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has proguanil, the second reading proguanil and atovaquone; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Cmax | Q32 | exact |
| V/F | Q76 | exact |
| CL/F | Q27 | exact |
| t(1/2beta) | Q60 | llm |
| t(max) | Q56 | llm |
| CL(R-CG) | Q22 | exact |
| t(1/2z) | Q57 | llm |
| AUC | Q88 | exact |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'null' (Cmax)
- unit_dimension_mismatch: 't(1/2z)' → Q57 (unit '[length] ** 3 / [time]' vs ontology '[time]') — route to review
- dropped unlinked row (NIL): '(CG)' — extend the ontology if this is a real PK parameter (source ['Na-Bangchang_2005:abstract'])
- dropped unlinked row (NIL): 'proguanil/cycloguanil metabolic ratios' — extend the ontology if this is a real PK parameter (source ['Na-Bangchang_2005:abstract'])
- covariate category for AUC ratio from footnote/prose kept as documentation only (['Na-Bangchang_2005:abstract'])
- unit_dimension_unknown: 'null' (AUC)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=proguanil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 11/11 row label(s) assigned, 5 linked by role; re-tagged proguanil→parent ×13, proguanil→cycloguanil ×3
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Na-Bangchang_2005_metadata.yaml (18 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.105 (2/19 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['proguanil', 'cycloguanil', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[proguanil/cycloguanil metabolic ratios]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t(max)]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | proguanil | proguanil and atovaquone | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Na-Bangchang_2005:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Na-Bangchang_2005:abstract', 'Na-Bangchang_2005:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Na-Bangchang_2005:abstract', 'Na-Bangchang_2005:abstract'] |
| C5_dimension_Q57 | fail | [time] | ml/h/kg ([length] ** 3 / [time]) | ['Na-Bangchang_2005:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Na-Bangchang_2005:abstract', 'Na-Bangchang_2005:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Na-Bangchang_2005:abstract', 'Na-Bangchang_2005:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bproguanil%5D%20Proguanil_NaBangchang2005_reference&body=Drug%3A%20proguanil%0ARecord%3A%20Proguanil_NaBangchang2005_reference%0APaper%3A%20Na-Bangchang_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_proguanil/Proguanil_NaBangchang2005_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-24 04:51 UTC</sub>
