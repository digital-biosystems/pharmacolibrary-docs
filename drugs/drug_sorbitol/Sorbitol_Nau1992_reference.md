<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;sorbitol&quot;,&quot;href&quot;:&quot;drugs/drug_sorbitol/&quot;},{&quot;label&quot;:&quot;Nau_1992 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sorbitol — `Sorbitol_Nau1992_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:40 UTC) predates the latest extraction (2026-10-04 17:16 UTC); the status shown comes from the current checks. No model parameters were extracted from this paper.

<div class="pk-model-meta" hidden drug="sorbitol" model-id="Sorbitol_Nau1992_reference" status="rejected" stale="true" population="adults with brain edema due to cerebrovascular disease" measured-compound="sorbitol" parameterization="mechanistic" topology="1C"></div>

## Citation
Nau R, Dreyhaupt T, Kolenda H, Prange HW. Low blood-to-cerebrospinal fluid passage of sorbitol after intravenous infusion. Stroke 23(9):1276–1279 (1992).
  ·  DOI: [10.1161/01.str.23.9.1276](https://doi.org/10.1161/01.str.23.9.1276)

## Population and dosing

**Population:** adults with brain edema due to cerebrovascular disease · condition brain edema due to cerebrovascular disease · age group adult · n = &gt;=6.

**Dosing:** 50000 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax | Cmax | 3116 | mg/1 |
| AUC | AUC | 33.8 | mg*h/L |
| Cl | CL | 31.7 | 1/hr |
| tl/2 | t1/2z | 15.4 | 1 |
| rapid initial decline (t 1/2o : median | t1/2α | 0.1 | hour |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model parameters were extracted from this paper.**

Nothing in the extracted data describes the drug's disposition, so there is no model to build. Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of auc: this record has 33.8, the second reading none; it also differs on 6 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax | `Q32` · Cmax | 3116 | mg/1 |  |  | mg/1 | exact (1) | Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract |
| AUC | `Q88` · AUC | 33.8 | mg*h/L |  |  | mg*h/L | exact (1) | Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract |
| Cl | `Q22` · CL | 31.7 | 1/hr |  |  | 1/h | exact (1) | Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract |
| tl/2 | `Q57` · t1/2z | 15.4 | 1 |  |  | 1 | llm (0.6) | Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract, Nau_1992:abstract |
| rapid initial decline (t 1/2o : median | `Q59` · t1/2α | 0.1 | hour | 360 | s | h | llm (0.6) | Nau_1992:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'distribution half-life'
- dropped value-less row: 'elimination half-life'
- dropped value-less row: 'half-life'
- dropped value-less row: 'short half-life'
- unit_dimension_mismatch: 'Cmax' → Q32 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_unknown: 'mg-hr/1' (AUC)
- unit_dimension_mismatch: 'Cl' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'tl/2' → Q57 (unit 'dimensionless' vs ontology '[time]') — route to review
- dropped duplicate Q57 ('tl/2o', value 0.65) — already have one for this compound
- dropped duplicate Q57 ('tl/20', value 0.11) — already have one for this compound
- dropped unlinked row (NIL): 'C csF amounted to' — extend the ontology if this is a real PK parameter (source ['Nau_1992:abstract', 'Nau_1992:abstract'])
- dropped unlinked row (NIL): "Spearman's rank order correlation coefficient, r" — extend the ontology if this is a real PK parameter (source ['Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract'])
- dropped unlinked row (NIL): 'chromatographically in CSF' — extend the ontology if this is a real PK parameter (source ['Nau_1992:abstract'])
- implicit units: 'AUC' → mg*h/L (from the popPK convention: "The paper reports sorbitol concentrations in mg/L (e.g., '3,227 mg/1' in serum). AUC is the integral of concentration ov")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sorbitol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from cached Nau_1992_extracted.txt (78 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc]` | 33.8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 31.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 3116 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[distribution half-life]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[rapid initial decline (t 1/2o :]` | 0.1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tl/2]` | 15.4 |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | fail | 1 / [time] | 1/hr | ['Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract'] |
| C5_dimension_Q32 | fail | [mass] | mg/1 | ['Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract'] |
| C5_dimension_Q57 | fail | dimensionless | 1 | ['Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Nau_1992:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 31.7 | ['Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract', 'Nau_1992:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsorbitol%5D%20Sorbitol_Nau1992_reference&body=Drug%3A%20sorbitol%0ARecord%3A%20Sorbitol_Nau1992_reference%0APaper%3A%20Nau_1992%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sorbitol/Sorbitol_Nau1992_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 17:16 UTC</sub>
