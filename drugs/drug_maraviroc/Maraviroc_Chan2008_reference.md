<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;maraviroc&quot;,&quot;href&quot;:&quot;drugs/drug_maraviroc/&quot;},{&quot;label&quot;:&quot;Chan_2008 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Maraviroc_Courlet2021_reference&quot;,&quot;label&quot;:&quot;Courlet_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maraviroc/Maraviroc_Courlet2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maraviroc_Ren2022_reference&quot;,&quot;label&quot;:&quot;Ren_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maraviroc/Maraviroc_Ren2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# maraviroc — `Maraviroc_Chan2008_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The maraviroc record was rejected because a structural parameter failed a dimensional consistency check, and the record was built only from the paper's abstract, so reported summary statistics stood in for a fitted model.

<div class="pk-model-meta" hidden drug="maraviroc" model-id="Maraviroc_Chan2008_reference" status="rejected" stale="false" population="healthy volunteers and asymptomatic HIV-infected subjects" measured-compound="maraviroc" parameterization="mechanistic" topology="1C"></div>

## Citation
Chan PL, Weatherley B, McFadyen L. A population pharmacokinetic meta-analysis of maraviroc in healthy volunteers and asymptomatic HIV-infected subjects. British journal of clinical pharmacology 65 Suppl 1(Suppl 1):76–85 (2008).
  ·  DOI: [10.1111/j.1365-2125.2008.03139.x](https://doi.org/10.1111/j.1365-2125.2008.03139.x)

## Population and dosing

**Population:** healthy volunteers and asymptomatic HIV-infected subjects · condition healthy; asymptomatic HIV infection · age group adult · n = 413.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Typical CL | CL | 51.5 | l h(-1) |
| V(c) | V | 132 | l |
| fasted bioavailability | Fab | 24 | % |
| reduced exposure | Frel | 43 | % |
| higher AUC | AUC | 26.5 | % |
| ka (h−1) | kabs | 0.69 | h−1 |
| ALAG (h) | tlag | 0.87 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The maraviroc record was rejected because a structural parameter failed a dimensional consistency check, and the record was built only from the paper's abstract, so reported summary statistics stood in for a fitted model.**

The record for maraviroc (Chan_2008, healthy volunteers and asymptomatic HIV-infected subjects) carries a dimension mismatch on a structural parameter, which caused the rejection. Because only the abstract was read, the values (CL 51.5 l/h, V 132 l, Fab 24 %, Frel 43 %, AUC 26.5 %, kabs 0.69 h−1, tlag 0.87 h) are abstract summary statistics rather than estimates from a fitted model, so the record cannot be published as a model. Extracted — maraviroc: CL 51.5 l h(-1), V 132 l, Fab 24 %, Frel 43 %, AUC 26.5 %, kabs 0.69 h−1, tlag 0.87 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on bioavailability: this record has 24, the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Typical CL | `Q22` · CL | 51.5 | l h(-1) | 1.431e-05 | m3/s | l/h | llm_confirmed (0.6) | Chan_2008:abstract |
| V(c) | `Q61` · V | 132 | l | 0.132 | m3 | l | exact (1) | Chan_2008:abstract |
| fasted bioavailability | `Q40` · Fab | 24 | % |  |  |  | llm_confirmed (0.6) | Chan_2008:abstract, Chan_2008:abstract |
| reduced exposure | `Q87` · Frel | 43 | % |  |  | % | llm_corrected (0.6) | Chan_2008:abstract, Chan_2008:abstract |
| higher AUC | `Q88` · AUC | 26.5 | % |  |  | % | llm_confirmed (0.6) | Chan_2008:abstract |
| ka (h−1) | `Q49` · kabs | 0.69 | h−1 | 0.0001917 | 1/s | 1/h | review_gapfill (0.7) | Courlet_2021:review |
| ALAG (h) | `Q83` · tlag | 0.87 | h | 3132 | s | h | review_gapfill (0.7) | Courlet_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q61 ('V(p)', value 277) — already have one for this compound
- unit_dimension_mismatch: 'higher AUC' → Q88 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=maraviroc
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Courlet_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Courlet_2021's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Chan_2008_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (6/16 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | 24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag]` | 0.87 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 51.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[doses]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[exposure]` |  | 25 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fasted bioavailability].value` | 24 |  | mismatch |
| `gpt-oss-120b` | `parameters[higher auc]` | 26.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.69 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[reduced exposure].parameter_id` | Q87 | Q21 | mismatch |
| `gpt-oss-120b` | `parameters[typical cl]` | 51.5 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Chan_2008:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Courlet_2021:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Chan_2008:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Courlet_2021:review'] |
| C5_dimension_Q88 | fail | dimensionless | % | ['Chan_2008:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 51.5 | ['Chan_2008:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 51.5 L/h | ['Chan_2008:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 132 L | ['Chan_2008:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmaraviroc%5D%20Maraviroc_Chan2008_reference&body=Drug%3A%20maraviroc%0ARecord%3A%20Maraviroc_Chan2008_reference%0APaper%3A%20Chan_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_maraviroc/Maraviroc_Chan2008_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:59 UTC</sub>
