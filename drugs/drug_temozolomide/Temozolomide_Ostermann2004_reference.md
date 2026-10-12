<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;temozolomide&quot;,&quot;href&quot;:&quot;drugs/drug_temozolomide/&quot;},{&quot;label&quot;:&quot;Ostermann_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Temozolomide_Bsker2022_reference&quot;,&quot;label&quot;:&quot;B\u00fcsker_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_temozolomide/Temozolomide_Bsker2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Temozolomide_Panetta2003_reference&quot;,&quot;label&quot;:&quot;Panetta_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_temozolomide/Temozolomide_Panetta2003_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# temozolomide — `Temozolomide_Ostermann2004_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.533). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The elimination rate constant for temozolomide was recorded as a 2.1-hour half-time, creating a dimensional mismatch for a rate parameter.**

The record identifies the parameter as an elimination rate constant but assigns it a value of 2.1 h, which is a time unit rather than a rate unit like h⁻¹. This error is compounded by the fact that the model was constructed from the paper's abstract alone, meaning summary statistics replaced actual fitted parameters. Extracted — temozolomide: CL/F 10 liter/h, V 30.3 liters, kabs 5.8 h(-1), kel 2.1 h, ktr 7.2 h(-1), k21 0.76 h(-1), AUC 20 plasma, AUC ratio 20 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has temozolomide, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Ostermann S et al., Plasma and cerebrospinal fluid populati…, Clinical cancer research :… (2004)
  ·  DOI: [10.1158/1078-0432.CCR-03-0807](https://doi.org/10.1158/1078-0432.CCR-03-0807)

<div class="pk-model-meta" hidden drug="temozolomide" model-id="Temozolomide_Ostermann2004_reference" status="rejected" stale="false" population="malignant glioma patients" measured-compound="temozolomide" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Oral clearance | `Q27` · CL/F | 10 | liter/h | 2.777777777777778e-06 | [l] / [h] | not captured | exact (1.0) | Ostermann_2004:abstract | — | not captured |
| volume of distribution (V(D)) | `Q61` · V | 30.3 | liters | 0.0303 | [l] | not captured | llm_confirmed (0.6) | Ostermann_2004:abstract | — | not captured |
| absorption constant rate | `Q49` · kabs | 5.8 | h(-1) | 0.0016111111111111111 | [1] / [h] | not captured | llm_confirmed (0.6) | Ostermann_2004:abstract | — | not captured |
| elimination half-time | `Q47` · kel | 2.1 | h | not captured | [h] | not captured | llm (0.6) | Ostermann_2004:abstract | — | not captured |
| transfer rate from plasma to CSF (K(plasma--&gt;CSF)) | `Q306` · ktr | 7.2 | h(-1) | 0.002 | [1] / [h] | not captured | llm (0.6) | Ostermann_2004:abstract | — | not captured |
| backwards rate | `Q302` · k21 | 0.76 | h(-1) | 0.0002111111111111111 | [1] / [h] | not captured | llm (0.6) | Ostermann_2004:abstract | — | not captured |
| AUC(CSF) | `Q88` · AUC | 20 | plasma | not captured | [plasma] | not captured | exact (1.0) | Ostermann_2004:abstract, Ostermann_2004:abstract | — | not captured |
| AUC(CSF)/AUC(plasma) ratio | `Q21` · AUC ratio | 20 | % | not captured | [%] | not captured | llm_corrected (0.6) | Ostermann_2004:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'elimination half-time' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'plasma' (AUC)
- unit_dimension_mismatch: 'K(plasma--&gt;CSF)' → Q47 (unit 'dimensionless' vs ontology '1 / [time]') — route to review
- dropped duplicate Q47 ('K(plasma--&gt;CSF)', value 15) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=temozolomide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ostermann_2004_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.533 (8/15 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc(csf)/auc(plasma) ratio]` | 20 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc(csf)/auc]` | not captured | 20 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` | 20 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-time].parameter_id` | Q47 | Q57 | mismatch |
| `gpt-oss-120b` | `parameters[transfer rate from plasma to csf (k(plasma--&gt;csf))].parameter_id` | Q306 | Q301 | mismatch |
| `gpt-oss-120b` | `parameters[transfer rate from plasma to csf (k(plasma--&gt;csf))].value` | 7.2 | not captured | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | temozolomide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ostermann_2004:abstract'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Ostermann_2004:abstract'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Ostermann_2004:abstract'] |
| C5_dimension_Q47 | fail | [time] | h | not captured | not captured | ['Ostermann_2004:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ostermann_2004:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ostermann_2004:abstract'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | plasma | not captured | not captured | ['Ostermann_2004:abstract', 'Ostermann_2004:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10 L/h | not captured | not captured | ['Ostermann_2004:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 30.3 L | not captured | not captured | ['Ostermann_2004:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_temozolomide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ostermann_2004` / `Ostermann_2004::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:23 UTC</sub>
