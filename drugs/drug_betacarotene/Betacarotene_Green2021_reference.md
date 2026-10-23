<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;betacarotene&quot;,&quot;href&quot;:&quot;drugs/drug_betacarotene/&quot;},{&quot;label&quot;:&quot;Green_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Betacarotene_Franken2026_reference&quot;,&quot;label&quot;:&quot;Franken_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_betacarotene/Betacarotene_Franken2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# betacarotene — `Betacarotene_Green2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The betacarotene record was rejected because retinol, formed from betacarotene in the central compartment, has no compartment (0 compartments) and no path from the dose, leaving an unlinked metabolite.

<div class="pk-model-meta" hidden drug="betacarotene" model-id="Betacarotene_Green2021_reference" status="rejected" stale="false" population="healthy older adults" measured-compound="betacarotene" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Green MH, Ford JL, Green JB. A Compartmental Model Describing the Kinetics of β-Carotene and β-Carotene-Derived Retinol in Healthy Older Adults. The Journal of nutrition 151(2):434–444 (2021).
  ·  DOI: [10.1093/jn/nxaa306](https://doi.org/10.1093/jn/nxaa306)

## Population and dosing

**Population:** healthy older adults · condition healthy · age group elderly · n = , 5.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| mean (range) β-carotene absorption (bioavailability) | Fab | 9.5 | % |
| Cl (L/h/kg); IIV | CL | 7.67 | L/h/kg |
| Vd (L/kg); IIV | V | 8.83 | L/kg |
| KA (h-1); IIV | kabs | 1.3 | h-1 |
| Absorption lag time (h) | tlag | 0.39 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The betacarotene record was rejected because retinol, formed from betacarotene in the central compartment, has no compartment (0 compartments) and no path from the dose, leaving an unlinked metabolite.**

The model links betacarotene to retinol by a metabolism rate constant (Kfm) and also links retinyl acetate to retinol by hydrolysis, but retinol is assigned 0 compartments, so the metabolite is unreachable from the dose. The record was built from the paper's abstract only, so reported summary statistics (Fab 9.5%, CL 7.67 L/h/kg, V 8.83 L/kg, kabs 1.3 h-1, tlag 0.39 h) stood in for a fitted model. A second reader also disagreed on the dose compound and analyte naming (β-carotene vs betacarotene), the link structure (adding an interconversion from β-carotene-derived retinol to retinol), and parameter assignments, including a bioefficacy value of 7.3 that this record lacks. Extracted — betacarotene: Fab 9.5 %, CL 7.67 L/h/kg, V 8.83 L/kg, kabs 1.3 h-1, tlag 0.39 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has betacarotene, the second reading β-carotene; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| mean (range) β-carotene absorption (bioavailability) | `Q40` · Fab | 9.5 | % |  |  |  | llm_confirmed (0.6) | Green_2021:abstract |
| Cl (L/h/kg); IIV | `Q22` · CL | 7.67 | L/h/kg | 0.0001491 | m3/s | L/h | review_gapfill (0.7) | Franken_2026:review |
| Vd (L/kg); IIV | `Q61` · V | 8.83 | L/kg | 0.6181 | m3 | L | review_gapfill (0.7) | Franken_2026:review |
| KA (h-1); IIV | `Q49` · kabs | 1.3 | h-1 | 0.0003611 | 1/s | 1/h | review_gapfill (0.7) | Franken_2026:review |
| Absorption lag time (h) | `Q83` · tlag | 0.39 | h | 1404 | s | h | review_gapfill (0.7) | Franken_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'bioefficacy' — extend the ontology if this is a real PK parameter (source ['Green_2021:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=betacarotene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 2/2 row label(s) assigned, 0 linked by role; re-tagged betacarotene→parent ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Franken_2026's review values (primary lacked it)
- gap-filled Q61 (V) from Franken_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Franken_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Franken_2026's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Green_2021_metadata.yaml (2 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['betacarotene', 'retinol', 'metabolism'], ['retinyl acetate', 'retinol', 'hydrolysis']] | [['β-carotene', 'β-carotene-derived retinol', 'metabolism'], ['retinyl acetate', 'retinyl acetate-derived retinol', 'hydrolysis'], ['β-carotene-derived retinol', 'retinol', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[bioefficacy]` |  | 7.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean (range) β-carotene absorption]` | 9.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[β-carotene absorption]` |  | 9.5 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | betacarotene | β-carotene | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | betacarotene | β-carotene | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Franken_2026:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Franken_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Franken_2026:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Franken_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.67 | ['Franken_2026:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 537 L/h | ['Franken_2026:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 618 L | ['Franken_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbetacarotene%5D%20Betacarotene_Green2021_reference&body=Drug%3A%20betacarotene%0ARecord%3A%20Betacarotene_Green2021_reference%0APaper%3A%20Green_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_betacarotene/Betacarotene_Green2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 07:09 UTC</sub>
