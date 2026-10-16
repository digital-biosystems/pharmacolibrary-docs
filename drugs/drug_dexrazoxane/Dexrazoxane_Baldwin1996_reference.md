<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;dexrazoxane&quot;,&quot;href&quot;:&quot;drugs/drug_dexrazoxane/&quot;},{&quot;label&quot;:&quot;Baldwin_1996 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dexrazoxane — `Dexrazoxane_Baldwin1996_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.412). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The dexrazoxane record was rejected because a structural distribution-volume parameter has a dimension mismatch: the volume of distribution V of 14.6 L conflicts with the steady-state volume Vss of 0.67 L kg-1 reported for the same molecule.**

The record for dexrazoxane in male beagle dogs (Baldwin_1996) was built from the paper's abstract alone, so reported summary statistics stood in for a fitted model. Among the extracted parameters, the volume of distribution V is given as 14.6 L while the apparent steady-state distribution volume Vss is 0.67 L kg-1, and the review found a dimension mismatch on this structural parameter. Other reported values include a total clearance CL of 0.33, a blood cell to plasma partitioning ratio Kp of 0.517, an unbound fraction fu of 0.95, a hepatic extraction ratio EH of 0.228, and a renal extraction ratio E of 0.184. Extracted — dexrazoxane: Vss 0.67 L kg-1, CL 0.33 CL, AUC/dose 0.999 CL, Kp 0.517 CL, fu 0.95, EH 0.228 CL, E 0.184 CL, V 14.6 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl was dose independent (anova, p: this record has 0.33, the second reading none; it also differs on 9 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Baldwin JR et al., Dose-independent pharmacokinetics of th…, Biopharmaceutics & drug dis… (1996)
  ·  DOI: [10.1002/(SICI)1099-081X(199608)17:6<541::AID-BDD975>3.0.CO;2-5](https://doi.org/10.1002/(SICI)1099-081X(199608)17:6<541::AID-BDD975>3.0.CO;2-5)

<div class="pk-model-meta" hidden drug="dexrazoxane" model-id="Dexrazoxane_Baldwin1996_reference" status="rejected" stale="false" population="male beagle dogs" measured-compound="dexrazoxane" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| apparent steady-state distribution volume | `Q65` · Vss | 0.67 | L kg-1 | 0.046900000000000004 | [l] / [kg] | not captured | llm_corrected (0.6) | Baldwin_1996:abstract | — | not captured |
| CL was dose independent (ANOVA, p | `Q22` · CL | 0.33 | CL | not captured | [cl] | not captured | llm_confirmed (0.6) | Baldwin_1996:abstract | — | not captured |
| directly proportional to the dose (r | `Q189` · AUC/dose | 0.999 | CL | not captured | [cl] | not captured | llm (0.6) | Baldwin_1996:abstract | — | not captured |
| blood cell to plasma partitioning ratio | `Q410` · Kp | 0.517 | CL | not captured | [cl] | not captured | llm (0.6) | Baldwin_1996:abstract | — | not captured |
| fu | `Q46` · fu | 0.95 | not captured | not captured | not captured | not captured | exact (1.0) | Baldwin_1996:abstract | — | not captured |
| hepatic drug extraction ratios | `Q39` · EH | 0.228 | CL | not captured | [cl] | not captured | llm (0.6) | Baldwin_1996:abstract | — | not captured |
| renal drug extraction ratios | `Q38` · E | 0.184 | CL | not captured | [cl] | not captured | llm (0.6) | Baldwin_1996:abstract | — | not captured |
| V | `Q61` · V | 14.6 | L | 0.0146 | L | not captured | review_gapfill (0.7) | Mody_2023_2:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'terminal half-life'
- dropped value-less row: 'systemic clearance (CL)' (captured trailing unit 'CL' for child rows)
- dropped value-less row: 'glomerular filtration rate (GFR'
- unit 'CL' inherited from a section-header row for CL (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_mismatch: 'CL was dose independent (ANOVA, p' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- unit 'CL' inherited from a section-header row for AUC/dose (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_mismatch: 'directly proportional to the dose (r' → Q189 (unit '[length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit 'CL' inherited from a section-header row for Kp (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_mismatch: 'blood cell to plasma partitioning ratio' → Q410 (unit '[length] ** 3' vs ontology 'dimensionless') — route to review
- unit 'CL' inherited from a section-header row for EH (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit 'CL' inherited from a section-header row for E (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dexrazoxane
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Mody_2023_2's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Baldwin_1996_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.412 (7/17 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl was dose independent (anova, p]` | 0.33 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[directly proportional to the dose (r]` | 0.999 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[gfr]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[hepatic drug extraction ratio]` | not captured | 0.228 | only_one_extracted |
| `gpt-oss-120b` | `parameters[hepatic drug extraction ratios]` | 0.228 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal drug extraction ratios]` | 0.184 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic clearance]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 14.6 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q189 | fail | [length] ** 3 | CL | not captured | not captured | ['Baldwin_1996:abstract'] |
| C5_dimension_Q22 | fail | [length] ** 3 | CL | not captured | not captured | ['Baldwin_1996:abstract'] |
| C5_dimension_Q410 | fail | [length] ** 3 | CL | not captured | not captured | ['Baldwin_1996:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Mody_2023_2:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Baldwin_1996:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.33 | not captured | not captured | ['Baldwin_1996:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.6 L | not captured | not captured | ['Mody_2023_2:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 46.9 L | not captured | not captured | ['Baldwin_1996:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_dexrazoxane/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Baldwin_1996` / `Baldwin_1996::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:00 UTC</sub>
