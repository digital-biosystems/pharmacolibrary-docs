<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;aciclovir&quot;,&quot;href&quot;:&quot;drugs/drug_aciclovir/&quot;},{&quot;label&quot;:&quot;Laskin_1982 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aciclovir — `Aciclovir_Laskin1982_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record for aciclovir was rejected because the terminal half-life unit failed a dimensional consistency check on a structural parameter.**

The abstract-only source provided a terminal half-life of 2.7 h, which triggered a dimension mismatch error. This conflict with the expected structural units caused the model to fail validation. Consequently, the record was rejected due to the incompatibility of this summary statistic with the model's structural requirements. Extracted — aciclovir: CLR 248 L/h, CL 300 L/h, AUC 128 nmol.h/ml, t1/2z 2.7 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[area under the curve].value`: this record has 127.6, the second reading 91.3; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Laskin OL et al., Effects of probenecid on the pharmacoki…, Antimicrobial agents and ch… (1982)
  ·  DOI: [10.1128/AAC.21.5.804](https://doi.org/10.1128/AAC.21.5.804)

<div class="pk-model-meta" hidden drug="aciclovir" model-id="Aciclovir_Laskin1982_reference" status="rejected" stale="false" population="adults with normal renal function" measured-compound="acyclovir" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| renal clearance | `Q26` · CLR | 248 | L/h | 6.88888888888889e-05 | L/h | not captured | exact (1.0) | Laskin_1982:abstract, Laskin_1982:abstract | — | not captured |
| total clearance | `Q22` · CL | 300 | L/h | 8.333333333333333e-05 | L/h | not captured | exact (1.0) | Laskin_1982:abstract | — | not captured |
| area under the curve | `Q88` · AUC | 127.6 | nmol.h/ml | not captured | [[h] · [nM]] / [ml] | not captured | exact (1.0) | Laskin_1982:abstract | — | not captured |
| terminal plasma half-life | `Q57` · t1/2z | 2.7 | h | 9720.0 | [h] | not captured | llm (0.6) | Laskin_1982:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Acyclovir' — extend the ontology if this is a real PK parameter (source ['Laskin_1982:abstract'])
- dropped unlinked row (NIL): 'probenecid' — extend the ontology if this is a real PK parameter (source ['Laskin_1982:abstract'])
- unit_dimension_unknown: 'ml/min per 1.73 m2' (CLR)
- unit_dimension_unknown: 'ml/min per 1.73 m2' (CL)
- dropped duplicate Q22 ('estimated creatinine clearance', value 90) — already have one for this compound
- unit_dimension_mismatch: 'area under the curve' → Q88 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- implicit units: 'renal clearance' → L/h (from the popPK convention: 'Clearance parameters in population PK are most commonly expressed in L/h. The value 248 is consistent with a renal clear')
- implicit units: 'total clearance' → L/h (from the popPK convention: 'Total clearance in population PK is typically expressed in L/h. The value 300 is consistent with a total clearance expre')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acyclovir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Laskin_1982_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.5 (6/12 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[area under the curve].value` | 127.6 | 91.3 | mismatch |
| `gpt-oss-120b` | `parameters[infusion duration]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[percentage decline in renal clearance]` | not captured | 32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[percentage increase in auc]` | not captured | 40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[percentage increase in terminal plasma half-life]` | not captured | 18 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal plasma half-life].value` | 2.7 | 2.3 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Laskin_1982:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Laskin_1982:abstract', 'Laskin_1982:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Laskin_1982:abstract'] |
| C5_dimension_Q88 | fail | [substance] * [time] / [length] ** 3 | nmol.h/ml | not captured | not captured | ['Laskin_1982:abstract'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 300.0 | not captured | not captured | ['Laskin_1982:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 300 L/h | not captured | not captured | ['Laskin_1982:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_aciclovir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Laskin_1982` / `Laskin_1982::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:02 UTC</sub>
