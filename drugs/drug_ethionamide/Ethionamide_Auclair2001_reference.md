<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;ethionamide&quot;,&quot;href&quot;:&quot;drugs/drug_ethionamide/&quot;},{&quot;label&quot;:&quot;Auclair_2001 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ethionamide_Abdelgawad2024_reference&quot;,&quot;label&quot;:&quot;Abdelgawad_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethionamide/Ethionamide_Abdelgawad2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethionamide_AlShaer2020_reference&quot;,&quot;label&quot;:&quot;Al-Shaer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethionamide/Ethionamide_AlShaer2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethionamide_Asiimwe2026_reference&quot;,&quot;label&quot;:&quot;Asiimwe_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethionamide/Ethionamide_Asiimwe2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethionamide_Purohit2026_reference&quot;,&quot;label&quot;:&quot;Purohit_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethionamide/Ethionamide_Purohit2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethionamide_Xu2024_reference&quot;,&quot;label&quot;:&quot;Xu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethionamide/Ethionamide_Xu2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethionamide_Zhu2002_reference&quot;,&quot;label&quot;:&quot;Zhu_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethionamide/Ethionamide_Zhu2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethionamide_van2021_reference&quot;,&quot;label&quot;:&quot;van_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethionamide/Ethionamide_van2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ethionamide — `Ethionamide_Auclair2001_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The abstract-only record for ethionamide was rejected because it lacks clearance and distribution volume, and contains an invalid AUC percentage value.

<div class="pk-model-meta" hidden drug="ethionamide" model-id="Ethionamide_Auclair2001_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="ethionamide" parameterization="apparent" topology="1C"></div>

## Citation
Auclair B, Nix DE, Adam RD, James GT, Peloquin CA. Pharmacokinetics of ethionamide administered under fasting conditions or with orange juice, food, or antacids. Antimicrobial agents and chemotherapy 45(3):810–814 (2001).
  ·  DOI: [10.1128/AAC.45.3.810-814.2001](https://doi.org/10.1128/AAC.45.3.810-814.2001)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 12.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC(0-infinity) | AUC | 91 | % |
| absorption rate constant (k a ) | kabs | 1.02 | h Ϫ1 |
| T lag | tlag | 0.43 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The abstract-only record for ethionamide was rejected because it lacks clearance and distribution volume, and contains an invalid AUC percentage value.**

The source text is from the paper's abstract, so summary statistics stand in for a fitted model. It reports an AUC of 91% instead of a standard area under the concentration-time curve value. The record contains no volume of distribution or clearance parameters, meaning it does not describe a compartmental population pharmacokinetic model. Extracted — ethionamide: AUC 91 %, kabs 1.02 h Ϫ1, tlag 0.43 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ethionamide, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC(0-infinity) | `Q88` · AUC | 91 | % |  |  | % | exact (1) | Auclair_2001:abstract, Auclair_2001:abstract, Auclair_2001:abstract |
| absorption rate constant (k a ) | `Q49` · kabs | 1.02 | h Ϫ1 | 0.0002833 | 1/s | 1/h | review_gapfill (0.7) | Al-Shaer_2020:review |
| T lag | `Q83` · tlag | 0.43 | h | 1548 | s | h | review_gapfill (0.7) | Al-Shaer_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| K(a) | Q47 | exact |
| V/F | Q76 | exact |
| CL/F | Q27 | exact |
| terminal half-life | Q57 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'P' — extend the ontology if this is a real PK parameter (source ['Auclair_2001:abstract'])
- unit_dimension_mismatch: 'AUC(0-infinity)' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- covariate category for AUC ratio from footnote/prose kept as documentation only (['Auclair_2001:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ethionamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Al-Shaer_2020's review values (primary lacked it)
- gap-filled Q83 (tlag) from Al-Shaer_2020's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Auclair_2001_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.118 (2/17 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 1.02 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc(0-infinity) after orange juice]` |  | 91% | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` | 91 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[p]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag]` | 0.43 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ethionamide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ethionamide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Auclair_2001:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Auclair_2001:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Al-Shaer_2020:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Auclair_2001:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Auclair_2001:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Al-Shaer_2020:review'] |
| C5_dimension_Q88 | fail | dimensionless | % | ['Auclair_2001:abstract', 'Auclair_2001:abstract', 'Auclair_2001:abstract'] |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethionamide%5D%20Ethionamide_Auclair2001_reference&body=Drug%3A%20ethionamide%0ARecord%3A%20Ethionamide_Auclair2001_reference%0APaper%3A%20Auclair_2001%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ethionamide/Ethionamide_Auclair2001_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 13:10 UTC</sub>
