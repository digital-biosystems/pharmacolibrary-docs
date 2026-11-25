<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;grazoprevir&quot;,&quot;href&quot;:&quot;drugs/drug_grazoprevir/&quot;},{&quot;label&quot;:&quot;Caro_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# grazoprevir — `Grazoprevir_Caro2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model; c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q18 unit μM*h ([length] * [time]) vs [mass] * [time] / [length] ** 3; Q19 unit μM*h ([length] * [time]) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="grazoprevir" model-id="Grazoprevir_Caro2019_reference" status="rejected" stale="false" population="HCV-infected adults with severe renal impairment or end-stage renal disease" measured-compound="grazoprevir" parameterization="mechanistic" topology="1C"></div>

## Citation
Caro L, Wenning L, Feng HP, Guo Z, Du L, Bhagunde P et al. Pharmacokinetics of elbasvir and grazoprevir in subjects with end-stage renal disease or severe renal impairment. European journal of clinical pharmacology 75(5):665–675 (2019).
  ·  DOI: [10.1007/s00228-018-2585-3](https://doi.org/10.1007/s00228-018-2585-3)

## Population and dosing

**Population:** HCV-infected adults with severe renal impairment or end-stage renal disease · condition renal impairment · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| absolute geometric means of steady-state EBR AUC0-24 | AUCSS | 2.78 | μM*h |
| GZR AUC0-24 | AUCt | 1.8 | μM*h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model; c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q18 unit μM*h ([length] * [time]) vs [mass] * [time] / [length] ** 3; Q19 unit μM*h ([length] * [time]) vs [mass] * [time] / [length] ** 3.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — grazoprevir: AUCSS 2.78 μM*h, AUCt 1.8 μM*h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has grazoprevir, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| absolute geometric means of steady-state EBR AUC0-24 | `Q18` · AUCSS | 2.78 | μM*h | h·µM | llm (0.6) | Caro_2019:abstract, Caro_2019:abstract |
| GZR AUC0-24 | `Q19` · AUCt | 1.8 | μM*h | h·µM | llm (0.6) | Caro_2019:abstract, Caro_2019:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate category for AUC ratio from footnote/prose kept as documentation only (['Caro_2019:abstract'])
- dropped unlinked row (NIL): 'geometric mean ratios (GMRs) (90% confidence intervals [CIs]) for GZR' — extend the ontology if this is a real PK parameter (source ['Caro_2019:abstract'])
- covariate category for AUC ratio from footnote/prose kept as documentation only (['Caro_2019:abstract', 'Caro_2019:abstract', 'Caro_2019:abstract'])
- covariate category for slope from footnote/prose kept as documentation only (['Caro_2019:abstract', 'Caro_2019:abstract', 'Caro_2019:abstract'])
- unit_dimension_mismatch: 'absolute geometric means of steady-state EBR AUC0-24' → Q18 (unit '[length] * [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'GZR AUC0-24' → Q19 (unit '[length] * [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=grazoprevir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Caro_2019_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (4/6 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[gzr auc0-24]` | 1.8 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | grazoprevir | unknown | mismatch |

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
| C5_dimension_Q18 | fail | [mass] * [time] / [length] ** 3 | μM*h ([length] * [time]) | ['Caro_2019:abstract', 'Caro_2019:abstract'] |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | μM*h ([length] * [time]) | ['Caro_2019:abstract', 'Caro_2019:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgrazoprevir%5D%20Grazoprevir_Caro2019_reference&body=Drug%3A%20grazoprevir%0ARecord%3A%20Grazoprevir_Caro2019_reference%0APaper%3A%20Caro_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_grazoprevir/Grazoprevir_Caro2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 22:29 UTC</sub>
