<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;umeclidinium&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium/&quot;},{&quot;label&quot;:&quot;Goyal_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Umeclidinium_Yang2017_reference&quot;,&quot;label&quot;:&quot;Yang_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium/Umeclidinium_Yang2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# umeclidinium — `Umeclidinium_Goyal2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The umeclidinium record was rejected because a structural parameter has a dimension mismatch and the model structure contains an unreachable compartment, and it was built from the abstract only.

<div class="pk-model-meta" hidden drug="umeclidinium" model-id="Umeclidinium_Goyal2014_reference" status="rejected" stale="false" population="patients with COPD" measured-compound="umeclidinium" parameterization="apparent" topology="1C"></div>

## Citation
Goyal N, Beerahee M, Kalberg C, Church A, Kilbride S, Mehta R. Population pharmacokinetics of inhaled umeclidinium and vilanterol in patients with chronic obstructive pulmonary disease. Clinical pharmacokinetics 53(7):637–648 (2014).
  ·  DOI: [10.1007/s40262-014-0143-4](https://doi.org/10.1007/s40262-014-0143-4)

## Population and dosing

**Population:** patients with COPD · condition COPD · age group adult · n = 1635.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 10 % increase in bodyweight → increase in umeclidinium V 2/F | V2/F | 6 | % |
| 10 % increase in age → decrease in umeclidinium CL/F | CL/F | 7 | % |
| 10 % decrease in CLCR → decrease in umeclidinium CL/F | equation variable | 3 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.273). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The umeclidinium record was rejected because a structural parameter has a dimension mismatch and the model structure contains an unreachable compartment, and it was built from the abstract only.**

The record for umeclidinium in COPD patients was built from the paper's abstract alone, so reported summary statistics stood in for a fitted model. Two checks failed: a dimension mismatch on a structural parameter, and an unreachable compartment with no path from the dose. The extracted covariate effects — a 6% increase in V2/F per 10% increase in bodyweight, a 7% decrease in CL/F per 10% increase in age, and a 3% decrease in CL/F per 10% decrease in CLCR — could not be validated against a fitted model. Extracted — umeclidinium: V2/F 6 %, CL/F 7 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has umeclidinium, the second reading umeclidinium, vilanterol; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| 10 % increase in bodyweight → increase in umeclidinium V 2/F | `Q82` · V2/F | 6 | % | % | llm (0.6) | Goyal_2014:abstract |
| 10 % increase in age → decrease in umeclidinium CL/F | `Q27` · CL/F | 7 | % | % | llm_confirmed (0.6) | Goyal_2014:abstract |
| 10 % decrease in CLCR → decrease in umeclidinium CL/F | `Q900` · equation variable | 3 | % | % | llm_corrected (0.6) | Goyal_2014:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate category for CL/F from footnote/prose kept as documentation only (['Goyal_2014:abstract'])
- covariate category for V2/F from footnote/prose kept as documentation only (['Goyal_2014:abstract'])
- covariate bodyweight for allometric_exponent from footnote/prose kept as documentation only (['Goyal_2014:abstract'])
- covariate bodyweight for CL/F from footnote/prose kept as documentation only (['Goyal_2014:abstract'])
- unit_dimension_mismatch: '10 % increase in bodyweight → increase in umeclidinium V 2/F' → Q82 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: '10 % increase in age → decrease in umeclidinium CL/F' → Q27 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: '10 % increase in age → decrease in vilanterol CL/F' → Q27 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('10 % increase in age → decrease in vilanterol CL/F', value 4) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=umeclidinium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Goyal_2014_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.273 (3/11 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[10 % decrease in clcr - decrease in umeclidinium cl/f]` | 3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[10 % increase in age - decrease in umeclidinium cl/f]` | 7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[10 % increase in bodyweight - increase in umeclidinium v 2/f]` | 6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 218 | only_one_extracted |
| `gpt-oss-120b` | `parameters[umeclidinium observations]` |  | 8498 | only_one_extracted |
| `gpt-oss-120b` | `parameters[umeclidinium patients]` |  | 1635 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2/f]` |  | 1160 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | umeclidinium | umeclidinium, vilanterol | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | fail | dimensionless | % | ['Goyal_2014:abstract'] |
| C5_dimension_Q82 | fail | dimensionless | % | ['Goyal_2014:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bumeclidinium%5D%20Umeclidinium_Goyal2014_reference&body=Drug%3A%20umeclidinium%0ARecord%3A%20Umeclidinium_Goyal2014_reference%0APaper%3A%20Goyal_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_umeclidinium/Umeclidinium_Goyal2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:14 UTC</sub>
