<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;diltiazem&quot;,&quot;href&quot;:&quot;drugs/drug_diltiazem/&quot;},{&quot;label&quot;:&quot;H\u00f6glund_1989 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diltiazem_Guan2018_reference&quot;,&quot;label&quot;:&quot;Guan_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diltiazem/Diltiazem_Guan2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diltiazem_Klle1983_reference&quot;,&quot;label&quot;:&quot;K\u00f6lle_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diltiazem/Diltiazem_Klle1983_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diltiazem — `Diltiazem_Hglund1989_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:26 UTC (Rejected), but the paper was screened again on 2026-10-06 22:34 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The diltiazem record was rejected because the paper reports no distribution volume and no clearance or elimination rate, so it is not a compartmental population PK model, and its three metabolites are unlinked.

<div class="pk-model-meta" hidden drug="diltiazem" model-id="Diltiazem_Hglund1989_reference" status="rejected" stale="true" population="healthy middle-aged volunteers" measured-compound="diltiazem" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Höglund P, Nilsson LG. Pharmacokinetics of diltiazem and its metabolites after single and multiple dosing in healthy volunteers. Therapeutic drug monitoring 11(5):558–566 (1989).

## Population and dosing

**Population:** healthy middle-aged volunteers · condition healthy · age group adult · n = &gt;=20.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| terminal half-lives | t1/2z | 6.27 | h |
| cumulative excretions of radioactivity in urine within 120 h | fe | 72 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The diltiazem record was rejected because the paper reports no distribution volume and no clearance or elimination rate, so it is not a compartmental population PK model, and its three metabolites are unlinked.**

The record, built from the abstract alone, contains only a terminal half-life of 6.27 h and a 72% cumulative urinary excretion of radioactivity within 120 h for diltiazem — no volume or clearance. The three metabolites (N-demethyldiltiazem, deacetyldiltiazem, N-demethyldeacetyl­diltiazem) have no formation parameters, leaving them as unlinked metabolites with no path from the dose. A second reader also disputed the metabolism links and read the 72% and 6.27 h values as applying to a single 60 mg dose, while the record left those dose-specific fields empty. Extracted — diltiazem: t1/2z 6.27 h, fe 72 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has diltiazem, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| terminal half-lives | `Q57` · t1/2z | 6.27 | h | 2.257e+04 | s | h | llm (0.6) | Höglund_1989:abstract, Höglund_1989:abstract, Höglund_1989:abstract, Höglund_1989:abstract |
| cumulative excretions of radioactivity in urine within 120 h | `Q44` · fe | 72 | % |  |  | % | llm (0.6) | Höglund_1989:abstract, Höglund_1989:abstract, Höglund_1989:abstract, Höglund_1989:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diltiazem
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 2/2 row label(s) assigned, 0 linked by role
- molar mass: none of 1 PubChem candidate(s) is 'N-demethyldeacetyldiltiazem' (LLM) — left in mass units
- molar mass: none found for 'N-demethyldeacetyldiltiazem' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Höglund_1989_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (1/8 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['diltiazem', 'n-demethyldiltiazem', 'metabolism'], ['diltiazem', 'deacetyldiltiazem', 'metabolism'], ['n-demethyldiltiazem', 'n-demethyldeacetyldiltiazem', 'metabolism'], ['deacetyldiltiazem', 'n-demethyldeacetyldiltiazem', 'metabolism']] | [['diltiazem', 'n-demethyldiltiazem', 'metabolism'], ['diltiazem', 'deacetyldiltiazem', 'metabolism'], ['diltiazem', 'n-demethyldeacetyldiltiazem', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cumulative excretion of radioactivity in urine within 120 h after a single dose of 60 mg diltiazem]` |  | 72 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cumulative excretions of radioactivity in urine within 120 h]` | 72 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life after a single dose of 60 mg diltiazem]` |  | 6.27 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-lives]` | 6.27 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | diltiazem | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | diltiazem | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q44 | pass | dimensionless |  | ['Höglund_1989:abstract', 'Höglund_1989:abstract', 'Höglund_1989:abstract', 'Höglund_1989:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Höglund_1989:abstract', 'Höglund_1989:abstract', 'Höglund_1989:abstract', 'Höglund_1989:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none', 'none'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiltiazem%5D%20Diltiazem_Hglund1989_reference&body=Drug%3A%20diltiazem%0ARecord%3A%20Diltiazem_Hglund1989_reference%0APaper%3A%20H%C3%B6glund_1989%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diltiazem/Diltiazem_Hglund1989_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 22:34 UTC</sub>
