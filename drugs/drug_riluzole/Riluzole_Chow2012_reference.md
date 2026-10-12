<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;riluzole&quot;,&quot;href&quot;:&quot;drugs/drug_riluzole/&quot;},{&quot;label&quot;:&quot;Chow_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Riluzole_Berges2015_reference&quot;,&quot;label&quot;:&quot;Berges_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_riluzole/Riluzole_Berges2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Riluzole_Nguyen2021_reference&quot;,&quot;label&quot;:&quot;Nguyen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_riluzole/Riluzole_Nguyen2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# riluzole — `Riluzole_Chow2012_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The riluzole record was rejected because the volume of distribution V (Day 3) is reported as 557.1 with unit '/L', a dimensionally inconsistent unit for a structural parameter, and the record was built from the paper's abstract alone rather than a fitted model.**

The volume of distribution for riluzole carries the unit '/L', which does not match the dimension expected for a distribution volume (a volume, e.g. L), so the structural parameter failed the dimension check. The record is abstract-only: the reported values (Cmax 128.9 ng/ml, Cmin 45.6 ng/ml, AUC(0-12) 982.0 ng·h/mL, AUC(0-12) Day 14 521.0 ng·h/mL, CL 49.5 L/hour, ka fixed at 5.0 /h) are summary statistics standing in for a fitted model in adults with acute spinal cord injury. Extracted — riluzole: Cmax 129 ng/ml, Cmin 45.6 ng/ml, AUC 982 ng·h/mL, AUCt 521 ng·h/mL, CL 49.5 L/hour, V 557 /L, kabs 5 /h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc(0-12) on day 14: this record has 521.0, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Chow DS et al., Pharmacology of riluzole in acute spina…, Journal of neurosurgery. Sp… (2012)
  ·  DOI: [10.3171/2012.5.AOSPINE12112](https://doi.org/10.3171/2012.5.AOSPINE12112)

<div class="pk-model-meta" hidden drug="riluzole" model-id="Riluzole_Chow2012_reference" status="rejected" stale="false" population="adults with acute spinal cord injury" measured-compound="riluzole" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| C(max) | `Q32` · Cmax | 128.9 | ng/ml | not captured | [ng] / [ml] | not captured | llm (0.6) | Chow_2012:abstract | — | not captured |
| C(min) | `Q36` · Cmin | 45.6 | ng/ml | not captured | [ng] / [ml] | not captured | llm (0.6) | Chow_2012:abstract | — | not captured |
| AUC(0-12) | `Q88` · AUC | 982.0 | ng·h/mL | not captured | ng·h/mL | not captured | exact (1.0) | Chow_2012:abstract | — | not captured |
| AUC(0-12) on Day 14 | `Q19` · AUCt | 521.0 | ng·h/mL | not captured | ng·h/mL | not captured | llm_corrected (0.6) | Chow_2012:abstract | — | not captured |
| CL (Day 3) | `Q22` · CL | 49.5 | L/hour | 1.375e-05 | [l] / [h] | not captured | exact (1.0) | Chow_2012:abstract | — | not captured |
| V (Day 3) | `Q61` · V | 557.1 | /L | not captured | [1] / [l] | not captured | exact (1.0) | Chow_2012:abstract | — | not captured |
| ka (fixed) | `Q49` · kabs | 5.0 | /h | 0.001388888888888889 | 1/h | not captured | review_gapfill (0.7) | Nguyen_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ng × hr/ml' (AUC)
- dropped duplicate Q32 ('C(max) on Day 14', value 76.5) — already have one for this compound
- dropped duplicate Q36 ('C(min) on Day 14', value 19.1) — already have one for this compound
- unit_dimension_unknown: 'ng × hr/ml' (AUCt)
- dropped duplicate Q22 ('CL (Day 14)', value 106.2) — already have one for this compound
- unit_dimension_mismatch: 'V (Day 3)' → Q61 (unit '1 / [length] ** 3' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'V (Day 14)' → Q61 (unit '1 / [length] ** 3' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q61 ('V (Day 14)', value 1297.9) — already have one for this compound
- implicit units: 'AUC(0-12)' → ng·h/mL (from the popPK convention: 'No unit stated in text or table footnotes; AUC over a 0-12 h dosing interval is conventionally reported in ng·h/mL, cons')
- implicit units: 'AUC(0-12) on Day 14' → ng·h/mL (from the popPK convention: 'No unit stated in text or table footnotes; AUC(0-12) on Day 14 is conventionally reported in ng·h/mL, consistent with th')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=riluzole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Nguyen_2021's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Chow_2012_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc(0-12) on day 14]` | 521.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 5.0 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Chow_2012:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chow_2012:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Chow_2012:abstract'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Chow_2012:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Nguyen_2021:review'] |
| C5_dimension_Q61 | fail | 1 / [length] ** 3 | /L | not captured | not captured | ['Chow_2012:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Chow_2012:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 49.5 | not captured | not captured | ['Chow_2012:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 49.5 L/h | not captured | not captured | ['Chow_2012:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_riluzole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chow_2012` / `Chow_2012::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:33 UTC</sub>
