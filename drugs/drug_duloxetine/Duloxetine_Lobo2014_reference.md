<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;duloxetine&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/&quot;},{&quot;label&quot;:&quot;Lobo_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Duloxetine_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Duloxetine_Sharma2000_reference&quot;,&quot;label&quot;:&quot;Sharma_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Sharma2000_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Duloxetine_Shibata2023_reference&quot;,&quot;label&quot;:&quot;Shibata_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Shibata2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Duloxetine_Tianmei2007_reference&quot;,&quot;label&quot;:&quot;Tianmei_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Tianmei2007_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# duloxetine — `Duloxetine_Lobo2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-10-06 22:47 UTC) predates the latest extraction (2026-10-06 22:53 UTC); the status shown comes from the current checks. The duloxetine record from Lobo_2014 was rejected because a structural parameter failed the dimensional consistency check (C5), and the record was built from the abstract alone rather than a fitted model.

<div class="pk-model-meta" hidden drug="duloxetine" model-id="Duloxetine_Lobo2014_reference" status="rejected" stale="true" population="children and adolescents with MDD" measured-compound="duloxetine" parameterization="apparent" topology="1C"></div>

## Citation
Lobo ED, Quinlan T, Prakash A. Pharmacokinetics of orally administered duloxetine in children and adolescents with major depressive disorder. Clinical pharmacokinetics 53(8):731–740 (2014).
  ·  DOI: [10.1007/s40262-014-0149-y](https://doi.org/10.1007/s40262-014-0149-y)

## Population and dosing

**Population:** children and adolescents with MDD · condition major depressive disorder · age group mixed · n = 428.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 79.7 | L/h |
| V d/F | V/F | 1200 | L |
| t 1/2 | t1/2z | 10.4 | h |
| average steady-state duloxetine concentration lower in pediatric population | Cavg | 30 | % |
| Ka (h-1) | kabs | 1.46 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.6). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The duloxetine record from Lobo_2014 was rejected because a structural parameter failed the dimensional consistency check (C5), and the record was built from the abstract alone rather than a fitted model.**

The record for duloxetine in children and adolescents with major depressive disorder reports CL/F of 79.7 L/h, V/F of 1200 L, terminal half-life of 10.4 h, absorption rate constant of 1.46 h-1, and an average steady-state concentration 30% lower than in adults. The refusal reason is a dimension mismatch on a structural parameter, but the findings do not name which of these parameters failed, so the exact parameter cannot be identified from the record. Additionally, the source is abstract-only, meaning the paper's summary statistics stood in for a fitted model rather than values extracted from a full pharmacokinetic analysis. Extracted — duloxetine: CL/F 79.7 L/h, V/F 1.2e+03 L, t1/2z 10.4 h, Cavg 30 %, kabs 1.46 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of average steady-state duloxetine concentration lower in pediatric population: this record has 30, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 79.7 | L/h | 2.214e-05 | m3/s | l/h | exact (1) | Lobo_2014:abstract |
| V d/F | `Q76` · V/F | 1200 | L | 1.2 | m3 | l | space_fold (0.95) | Lobo_2014:abstract |
| t 1/2 | `Q57` · t1/2z | 10.4 | h | 3.744e+04 | s | h | space_fold (0.95) | Lobo_2014:abstract |
| average steady-state duloxetine concentration lower in pediatric population | `Q71` · Cavg | 30 | % |  |  | % | llm (0.6) | Lobo_2014:abstract |
| Ka (h-1) | `Q49` · kabs | 1.46 | h-1 | 0.0004056 | 1/s | 1/h | review_gapfill (0.7) | Chen_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'between-patient variability in CL/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'between-patient variability in V d/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'within-patient variability (proportional error)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'within-patient variability (additive error)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- unit_dimension_unknown: 'fold' (CL/F)
- dropped duplicate Q27 ('CL/F increased with 2.2-fold increase in BSA', value 2) — already have one for this compound
- unit_dimension_mismatch: 'CL/F decreased with sixfold increase in dose (20 to 120 mg)' → Q27 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CL/F decreased with sixfold increase in dose (20 to 120 mg)', value 32) — already have one for this compound
- unit_dimension_mismatch: 'V d/F higher in American Indian patients' → Q76 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q76 ('V d/F higher in American Indian patients', value 131) — already have one for this compound
- unit_dimension_mismatch: 'average steady-state duloxetine concentration lower in pediatric population' → Q71 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=duloxetine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Chen_2024's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lobo_2014_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.6 (6/10 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[average steady-state duloxetine concentration lower in pediatric population]` | 30 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[between-patient variability in v d/f]` |  | 87 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.46 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v d/f]` | 1200 |  | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Lobo_2014:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chen_2024:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Lobo_2014:abstract'] |
| C5_dimension_Q71 | fail | dimensionless | % | ['Lobo_2014:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Lobo_2014:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 79.7 L/h | ['Lobo_2014:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.2e+03 L | ['Lobo_2014:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bduloxetine%5D%20Duloxetine_Lobo2014_reference&body=Drug%3A%20duloxetine%0ARecord%3A%20Duloxetine_Lobo2014_reference%0APaper%3A%20Lobo_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_duloxetine/Duloxetine_Lobo2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:53 UTC</sub>
