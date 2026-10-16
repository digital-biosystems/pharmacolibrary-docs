<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;permethrin&quot;,&quot;href&quot;:&quot;drugs/drug_permethrin/&quot;},{&quot;label&quot;:&quot;G\u00f6gebakan_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# permethrin — `Permethrin_Ggebakan2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.158). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The permethrin record for broiler chickens was rejected because a structural parameter has a dimension mismatch: the absorption lag time tlag is 18.5 h, inconsistent with the reported tmax of 0.55 h and terminal half-life of 4.73 h.**

The record was built from the paper's abstract alone, so reported summary statistics (AUC∞ 16.45 mg/h/l, Cmax 0.6 μg/ml, MRT 5.06 h, bioavailability 0.11, clearance 6.94 L/h for a 37.6 kg typical individual) stood in for a fitted model. The dimension check on a structural parameter failed, pointing to the absorption lag time of 18.5 h, which is dimensionally inconsistent with the other time parameters of permethrin in this population. Extracted — permethrin: t1/2z 4.73 h, MRT 5.06 h, AUC∞ 16.4 mg/h/l, Cmax 0.6 μg/ml, tmax 0.55 h, Fab 0.11, CL 6.94 L/h, tlag 18.5 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has permethrin, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Gögebakan T et al., Single-dose toxicokinetics of permethri…, British poultry science (2015)
  ·  DOI: [10.1080/00071668.2015.1085957](https://doi.org/10.1080/00071668.2015.1085957)

<div class="pk-model-meta" hidden drug="permethrin" model-id="Permethrin_Ggebakan2015_reference" status="rejected" stale="false" population="broiler chickens" measured-compound="permethrin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t1/2λ | `Q57` · t1/2z | 4.73 | h | 17028.0 | [h] | not captured | llm_confirmed (0.6) | Gögebakan_2015:abstract, Gögebakan_2015:abstract | — | not captured |
| MRT | `Q53` · MRT | 5.06 | h | 18216.0 | [h] | not captured | exact (1.0) | Gögebakan_2015:abstract, Gögebakan_2015:abstract | — | not captured |
| AUC0→∞ | `Q17` · AUC∞ | 16.45 | mg/h/l | not captured | [mg] / [[h] · [l]] | not captured | exact (1.0) | Gögebakan_2015:abstract, Gögebakan_2015:abstract | — | not captured |
| Cmax | `Q32` · Cmax | 0.6 | μg/ml | not captured | [µg] / [ml] | not captured | exact (1.0) | Gögebakan_2015:abstract | — | not captured |
| tmax | `Q56` · tmax | 0.55 | h | 1980.0000000000002 | [h] | not captured | exact (1.0) | Gögebakan_2015:abstract | — | not captured |
| bioavailability | `Q40` · Fab | 0.11 | not captured | not captured | not captured | not captured | exact (1.0) | Gögebakan_2015:abstract | — | not captured |
| typical individual of 37.6 kg clearance | `Q22` · CL | 6.94 | L/h | 1.927777777777778e-06 | L/h | not captured | review_gapfill (0.7) | Gwee_2020:review | — | not captured |
| Tlag [h] | `Q83` · tlag | 18.5 | h | 66600.0 | h | not captured | review_gapfill (0.7) | Duthaler_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC0→∞' → Q17 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=permethrin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Gwee_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Duthaler_2021's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Gögebakan_2015_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf]` | 16.45 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` | not captured | 16.45 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability]` | 0.11 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability]` | not captured | 0.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 0.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 0.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | 5.06 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | not captured | 5.06 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2λ]` | 4.73 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2λ]` | not captured | 4.73 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag [h]]` | 18.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 0.55 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | not captured | 0.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical individual of 37.6 kg clearance]` | 6.94 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | permethrin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | permethrin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | fail | [mass] / [time] / [length] ** 3 | mg/h/l | not captured | not captured | ['Gögebakan_2015:abstract', 'Gögebakan_2015:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Gwee_2020:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Gögebakan_2015:abstract'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Gögebakan_2015:abstract', 'Gögebakan_2015:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Gögebakan_2015:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Gögebakan_2015:abstract', 'Gögebakan_2015:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Duthaler_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.94 | not captured | not captured | ['Gwee_2020:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.94 L/h | not captured | not captured | ['Gwee_2020:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_permethrin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gögebakan_2015` / `Gögebakan_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:29 UTC</sub>
