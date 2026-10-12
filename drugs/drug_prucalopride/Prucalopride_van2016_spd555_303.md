<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;prucalopride&quot;,&quot;href&quot;:&quot;drugs/drug_prucalopride/&quot;},{&quot;label&quot;:&quot;van_2016 \u00b7 spd555_303&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# prucalopride — `Prucalopride_van2016_spd555_303`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.25). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The prucalopride record for children with functional constipation was rejected because a structural parameter has a dimension mismatch and the one-compartment structure contains an unreachable compartment, with a reported unit not convertible to SI.**

The prucalopride model (one-compartment structure) failed a dimensional check on a structural parameter and was found to contain a compartment with no path from the dose, so it was rejected. A reported unit could not be converted to SI, so that parameter reached the model builder without an SI value. A second reader disagreed on several values: it read CL as 22.9 l h−1 (versus 11.7), and additionally reported F1 0.858, ka1 0.792 h−1 and a mean transit time of 0.734, none of which appear in this record; it also left AUC (100.3 ng mL−1 h), Css (4.18 ng mL−1) and C0 (2.64 ng mL−1) unread, so those comparisons could not be computed. Extracted — prucalopride: CL 11.7 l h−1, V2 207 l, AUC 100 ng mL−1 h, Css 4.18 ng mL−1, C0 2.64 ng mL−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of auc: this record has 100.3, the second reading none; it also differs on 11 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:39:30.712506+00:00) predates the upstream re-run (2026-10-04 16:44:43.154167+00:00). Current validate status: `rejected`.

## Citation
van Schaick E et al., Development of a population pharmacokin…, Pharmacology research & per… (2016)
  ·  DOI: [10.1002/prp2.236](https://doi.org/10.1002/prp2.236)

<div class="pk-model-meta" hidden drug="prucalopride" model-id="Prucalopride_van2016_spd555_303" status="rejected" stale="true" population="children with functional constipation" measured-compound="prucalopride" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (l h−1) | `Q22` · CL | 11.7 | l h−1 | 3.2500000000000002e-06 | [l] / [h] | not captured | exact (1.0) | van_2016_table_4:row2:col4, van_2016_table_4:row2:col5, van_2016_table_4:row2:col6 | — | not captured |
| V2 (l) | `Q64` · V2 | 207 | l | 0.20700000000000002 | [l] | not captured | exact (1.0) | van_2016_table_4:row3:col4, van_2016_table_4:row3:col5, van_2016_table_4:row3:col6 | — | not captured |
| AUC (ng mL−1 h) | `Q88` · AUC | 100.3 | ng mL−1 h | not captured | [ng] / [[h] · [ml]] | not captured | exact (1.0) | van_2016_table_4:row4:col4, van_2016_table_4:row4:col5, van_2016_table_4:row4:col6 | — | not captured |
| C ss (ng mL−1) | `Q34` · Css | 4.18 | ng mL−1 | not captured | [ng] / [ml] | not captured | space_fold (0.95) | van_2016_table_4:row5:col4, van_2016_table_4:row5:col5, van_2016_table_4:row5:col6 | — | not captured |
| C 0 h (ng mL−1) | `Q86` · C0 | 2.64 | ng mL−1 | not captured | [ng] / [ml] | not captured | llm (0.6) | van_2016_table_4:row6:col4, van_2016_table_4:row6:col5, van_2016_table_4:row6:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '(n = 38; dose = 0.03 mg kg−1)' — extend the ontology if this is a real PK parameter (source ['van_2016_table_4:row0:col4', 'van_2016_table_4:row0:col5'])
- unit_dimension_unknown: 'ng mL−1 h' (AUC)
- unit_dimension_mismatch: 'C 0 h (ng mL−1)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- implicit units: 'AUC (ng mL−1 h)' — the LLM proposed 'ng/mL/h', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=prucalopride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'spd555‐303' subgroup of van_2016 (paper reports 3 populations: estimate, pru‐usa‐12, spd555‐303)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 4 transcribed (29 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc]` | 100.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[c 0 h]` | 2.64 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[c ss]` | 4.18 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 11.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clpru‐usa‐12 (l h-1)a]` | not captured | 22.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f1]` | not captured | 0.858 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a1]` | not captured | 0.792 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mtime]` | not captured | 0.734 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q (l h-1)a]` | not captured | 16.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2 (l)a]` | not captured | 446 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` | 207 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3 (l)a]` | not captured | 248 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['van_2016_table_4:row2:col4', 'van_2016_table_4:row2:col5', 'van_2016_table_4:row2:col6'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['van_2016_table_4:row5:col4', 'van_2016_table_4:row5:col5', 'van_2016_table_4:row5:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['van_2016_table_4:row3:col4', 'van_2016_table_4:row3:col5', 'van_2016_table_4:row3:col6'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | ng mL−1 | not captured | not captured | ['van_2016_table_4:row6:col4', 'van_2016_table_4:row6:col5', 'van_2016_table_4:row6:col6'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | ng mL−1 h | not captured | not captured | ['van_2016_table_4:row4:col4', 'van_2016_table_4:row4:col5', 'van_2016_table_4:row4:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.7 | not captured | not captured | ['van_2016_table_4:row2:col4', 'van_2016_table_4:row2:col5', 'van_2016_table_4:row2:col6'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.7 L/h | not captured | not captured | ['van_2016_table_4:row2:col4', 'van_2016_table_4:row2:col5', 'van_2016_table_4:row2:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 207 L | not captured | not captured | ['van_2016_table_4:row3:col4', 'van_2016_table_4:row3:col5', 'van_2016_table_4:row3:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_prucalopride/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `van_2016` / `van_2016::spd555_303`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 16:44 UTC</sub>
