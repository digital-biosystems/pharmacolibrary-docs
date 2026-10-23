<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;Tocopherol&quot;,&quot;href&quot;:&quot;drugs/drug_tocopherol/&quot;},{&quot;label&quot;:&quot;Hidiroglou_1996 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tocopherol — `Tocopherol_Hidiroglou1996_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">sheep</span>

> This record was reviewed on 2026-10-05 09:32 UTC (Rejected), but the paper was screened again on 2026-10-07 17:01 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The tocopherol record was rejected because the abstract-only source reports no distribution volume and no clearance, and the elimination half-life 42.4 carries the unit /h instead of h, a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="Tocopherol" model-id="Tocopherol_Hidiroglou1996_reference" status="rejected" stale="true" population="sheep" measured-compound="alpha-tocopherol" parameterization="mechanistic" topology="1C"></div>

## Citation
Hidiroglou M. Pharmacokinetic profile of plasma tocopherol following intramuscular administration of acetylated alpha-tocopherol to sheep. Journal of dairy science 79(6):1027–1030 (1996).
  ·  DOI: [10.3168/jds.S0022-0302(96)76455-X](https://doi.org/10.3168/jds.S0022-0302(96)76455-X)

## Population and dosing

**Population:** sheep · condition healthy · n = &gt;=5.

**Dosed compound ≠ measured compound:** dosed dl-alpha-tocopherol acetate, measured alpha-tocopherol.

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| absorption rate constant, Ka1 | kabs | 0.29 | /h |
| elimination half-life | t1/2z | 42.4 | /h |
| mean residence time | MRT | 46 | h |
| area under the curve | AUC | 290 | micrograms/h per ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.7). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tocopherol record was rejected because the abstract-only source reports no distribution volume and no clearance, and the elimination half-life 42.4 carries the unit /h instead of h, a dimension mismatch on a structural parameter.**

The paper (Hidiroglou_1996, sheep, alpha-tocopherol from dl-alpha-tocopherol acetate) was read at abstract level only, so summary statistics stood in for a fitted model. It reports kabs 0.29 /h, MRT 46 h and AUC 290 micrograms/h per ml, but no volume of distribution and no clearance or elimination rate, so it is an exposure/outcome paper rather than a compartmental population PK model. The terminal elimination half-life is given as 42.4 with unit /h, a dimension mismatch for a half-life that should be in h. A second reader also disputed the dose compound and analyte, the absence of the hydrolysis link from dl-alpha-tocopherol acetate to alpha-tocopherol, and read additional half-lives of 2.46 and 21.20 that this record left null. Extracted — tocopherol: kabs 0.29 /h, t1/2z 42.4 /h, MRT 46 h, AUC 290 micrograms/h per ml.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of absorption rate constant, ka1: this record has 0.29, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| absorption rate constant, Ka1 | `Q49` · kabs | 0.29 | /h | 8.056e-05 | 1/s | 1/h | exact (1) | Hidiroglou_1996:abstract |
| elimination half-life | `Q57` · t1/2z | 42.4 | /h |  |  | 1/h | llm (0.6) | Hidiroglou_1996:abstract, Hidiroglou_1996:abstract |
| mean residence time | `Q53` · MRT | 46 | h | 1.656e+05 | s | h | exact (1) | Hidiroglou_1996:abstract |
| area under the curve | `Q88` · AUC | 290 | micrograms/h per ml |  |  | µg/(h·perml) | exact (1) | Hidiroglou_1996:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('the second absorption rate constant, Ka2', value 0.03) — already have one for this compound
- unit_dimension_mismatch: 'elimination half-life' → Q57 (unit '1 / [time]' vs ontology '[time]') — route to review
- unit_dimension_unknown: 'micrograms/h per ml' (AUC)
- dropped duplicate Q57 ('the second elimination half-life', value 21.2) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alpha-tocopherol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 2 linked by role; re-tagged alpha-tocopherol→parent ×7
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hidiroglou_1996_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.7 (7/10 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant, ka1]` | 0.29 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1]` |  | 0.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[second elimination half-life]` |  | 21.2 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Hidiroglou_1996:abstract'] |
| C5_dimension_Q53 | pass | [time] |  | ['Hidiroglou_1996:abstract'] |
| C5_dimension_Q57 | fail | 1 / [time] | /h | ['Hidiroglou_1996:abstract', 'Hidiroglou_1996:abstract'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | micrograms/h per ml | ['Hidiroglou_1996:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btocopherol%5D%20Tocopherol_Hidiroglou1996_reference&body=Drug%3A%20tocopherol%0ARecord%3A%20Tocopherol_Hidiroglou1996_reference%0APaper%3A%20Hidiroglou_1996%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tocopherol/Tocopherol_Hidiroglou1996_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:01 UTC</sub>
