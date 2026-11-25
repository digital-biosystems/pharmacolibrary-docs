<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iodixanol&quot;,&quot;href&quot;:&quot;drugs/drug_iodixanol/&quot;},{&quot;label&quot;:&quot;Nossen_1995 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iodixanol — `Iodixanol_Nossen1995_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q76 unit 1 per kg bw (dimensionless) vs [length] ** 3.

<div class="pk-model-meta" hidden drug="iodixanol" model-id="Iodixanol_Nossen1995_reference" status="rejected" stale="false" population="patients with severely impaired renal function" measured-compound="iodixanol" parameterization="apparent" topology="1C"></div>

## Citation
Nossen JO, Jakobsen JA, Kjaersgaard P, Andrew E, Jacobsen PB, Berg KJ. Elimination of the non-ionic X-ray contrast media iodixanol and iohexol in patients with severely impaired renal function. Scandinavian journal of clinical and laboratory investigation 55(4):341–350 (1995).
  ·  DOI: [10.3109/00365519509104972](https://doi.org/10.3109/00365519509104972)

## Population and dosing

**Population:** patients with severely impaired renal function · condition severely impaired renal function · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Mean baseline creatinine clearance | CL | 13.6 | ml min-1 1.73 m-2 |
| mean elimination half-life | t1/2z | 23.0 | h |
| mean apparent volume of distribution | V/F | 0.2 | 1 per kg bw |
| mean renal clearances | CLR | 8.7 | ml min-1 1.73 m-2 |
| Mean faecal recovery | fe | 8.2 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q76 unit 1 per kg bw (dimensionless) vs [length] ** 3.**

Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — iodixanol: CL 13.6 ml min-1 1.73 m-2, t1/2z 23 h, V/F 0.2 1 per kg bw, CLR 8.7 ml min-1 1.73 m-2, fe 8.2.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has iodixanol, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Mean baseline creatinine clearance | `Q22` · CL | 13.6 | ml min-1 1.73 m-2 |  |  | ml/(.73·m-2·min1) | llm_confirmed (0.6) | Nossen_1995:abstract, Nossen_1995:abstract |
| mean elimination half-life | `Q57` · t1/2z | 23.0 | h | 8.28e+04 | s | h | half_life_rule (0.95) | Nossen_1995:abstract, Nossen_1995:abstract |
| mean apparent volume of distribution | `Q76` · V/F | 0.2 | 1 per kg bw |  |  | 1/kg | llm_confirmed (0.6) | Nossen_1995:abstract |
| mean renal clearances | `Q26` · CLR | 8.7 | ml min-1 1.73 m-2 |  |  | ml/(.73·m-2·min1) | llm (0.6) | Nossen_1995:abstract, Nossen_1995:abstract |
| Mean faecal recovery | `Q44` · fe | 8.2 |  | 0.082 |  |  | llm (0.6) | Nossen_1995:abstract, Nossen_1995:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ml min-1 1.73 m-2' (CL)
- unit_dimension_mismatch: 'mean apparent volume of distribution' → Q76 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q22 ('Mean plasma clearance', value 10.4) — already have one for this compound
- unit_dimension_unknown: 'ml min-1 1.73 m-2' (CLR)
- 'Mean faecal recovery' → Q44: printed without a unit and above 1 — read as a percentage
- dropped unlinked row (NIL): 'that in urine' — extend the ontology if this is a real PK parameter (source ['Nossen_1995:abstract', 'Nossen_1995:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=iodixanol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Nossen_1995_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[mean apparent volume of distribution]` | 0.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean apparent volume of distribution]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean baseline creatinine clearance]` | 13.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean baseline creatinine clearance]` |  | 13.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean elimination half-life]` | 23.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean elimination half-life]` |  | 23.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean faecal recovery]` | 8.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean faecal recovery]` |  | 8.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean renal clearances]` | 8.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean renal clearances]` |  | 8.7 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | iodixanol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | iodixanol | unknown | mismatch |

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
| C5_dimension_Q57 | pass | [time] |  | ['Nossen_1995:abstract', 'Nossen_1995:abstract'] |
| C5_dimension_Q76 | fail | [length] ** 3 | 1 per kg bw (dimensionless) | ['Nossen_1995:abstract'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | ml min-1 1.73 m-2 | ['Nossen_1995:abstract', 'Nossen_1995:abstract'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] | ml min-1 1.73 m-2 | ['Nossen_1995:abstract', 'Nossen_1995:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biodixanol%5D%20Iodixanol_Nossen1995_reference&body=Drug%3A%20iodixanol%0ARecord%3A%20Iodixanol_Nossen1995_reference%0APaper%3A%20Nossen_1995%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iodixanol/Iodixanol_Nossen1995_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-24 00:26 UTC</sub>
