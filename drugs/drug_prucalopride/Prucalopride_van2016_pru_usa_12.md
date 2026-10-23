<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;prucalopride&quot;,&quot;href&quot;:&quot;drugs/drug_prucalopride/&quot;},{&quot;label&quot;:&quot;van_2016 \u00b7 pru_usa_12&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# prucalopride — `Prucalopride_van2016_pru_usa_12`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Rejected), but the paper was screened again on 2026-10-04 16:44 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The prucalopride model record was rejected because its one-compartment structure leaves the peripheral compartment (V2 = 192 l) unreachable from the dose, and the AUC of 62.3 ng mL−1 h was reported in a unit that could not be converted to SI.

<div class="pk-model-meta" hidden drug="prucalopride" model-id="Prucalopride_van2016_pru_usa_12" status="rejected" stale="true" population="children with functional constipation" measured-compound="prucalopride" parameterization="mechanistic" topology="1C"></div>

## Citation
van Schaick E, Benninga MA, Levine A, Magnusson M, Troy S. Development of a population pharmacokinetic model of prucalopride in children with functional constipation. Pharmacology research & perspectives 4(4):e00236 (2016).
  ·  DOI: [10.1002/prp2.236](https://doi.org/10.1002/prp2.236)

## Population and dosing

**Population:** children with functional constipation · age group child.

**Dosing:** 1.4, 2.8, 4.2 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (l h−1) | CL | 12.1 | l h−1 |
| V2 (l) | V2 | 192 | l |
| AUC (ng mL−1 h) | AUC | 62.3 | ng mL−1 h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.286). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The prucalopride model record was rejected because its one-compartment structure leaves the peripheral compartment (V2 = 192 l) unreachable from the dose, and the AUC of 62.3 ng mL−1 h was reported in a unit that could not be converted to SI.**

The record lists a one-compartment structure for prucalopride in children with functional constipation, yet reports a peripheral volume of distribution V2 of 192 l, which the structure check flagged as an orphan compartment with no path from the dose. The AUC of 62.3 ng mL−1 h was reported in a unit that could not be expressed in SI, so it was carried forward without a convertible value. A second reader also disagreed on the extracted parameters, reading CL as 22.9 l h−1 (versus 12.1 l h−1 here) and additionally reporting F1 = 0.858, ka1 = 0.792, mtime = 0.734 and Q = 16.9 l h−1, none of which appear in this record. Extracted — prucalopride: CL 12.1 l h−1, V2 192 l, AUC 62.3 ng mL−1 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of auc: this record has 62.3, the second reading none; it also differs on 9 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (l h−1) | `Q22` · CL | 12.1 | l h−1 | 3.361e-06 | m3/s | l/h | exact (1) | van_2016_table_4:row2:col1, van_2016_table_4:row2:col2, van_2016_table_4:row2:col3 |
| V2 (l) | `Q64` · V2 | 192 | l | 0.192 | m3 | l | exact (1) | van_2016_table_4:row3:col1, van_2016_table_4:row3:col2, van_2016_table_4:row3:col3 |
| AUC (ng mL−1 h) | `Q88` · AUC | 62.3 | ng mL−1 h |  |  | ng/(h·ml) | exact (1) | van_2016_table_4:row4:col1, van_2016_table_4:row4:col2, van_2016_table_4:row4:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '(n = 38; dose = 0.03 mg kg−1)' — extend the ontology if this is a real PK parameter (source ['van_2016_table_4:row0:col1', 'van_2016_table_4:row0:col2', 'van_2016_table_4:row0:col3'])
- unit_dimension_unknown: 'ng mL−1 h' (AUC)
- implicit units: 'AUC (ng mL−1 h)' — the LLM proposed 'ng mL−1 h', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=prucalopride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'pru‐usa‐12' subgroup of van_2016 (paper reports 3 populations: estimate, pru‐usa‐12, spd555‐303)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 4 transcribed (29 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc]` | 62.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 12.1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clpru‐usa‐12 (l h-1)a]` |  | 22.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f1]` |  | 0.858 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a1]` |  | 0.792 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mtime]` |  | 0.734 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q (l h-1)a]` |  | 16.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2 (l)a]` |  | 446 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` | 192 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3 (l)a]` |  | 248 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['van_2016_table_4:row2:col1', 'van_2016_table_4:row2:col2', 'van_2016_table_4:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['van_2016_table_4:row3:col1', 'van_2016_table_4:row3:col2', 'van_2016_table_4:row3:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | ng mL−1 h | ['van_2016_table_4:row4:col1', 'van_2016_table_4:row4:col2', 'van_2016_table_4:row4:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12.1 | ['van_2016_table_4:row2:col1', 'van_2016_table_4:row2:col2', 'van_2016_table_4:row2:col3'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.1 L/h | ['van_2016_table_4:row2:col1', 'van_2016_table_4:row2:col2', 'van_2016_table_4:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 192 L | ['van_2016_table_4:row3:col1', 'van_2016_table_4:row3:col2', 'van_2016_table_4:row3:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprucalopride%5D%20Prucalopride_van2016_pru_usa_12&body=Drug%3A%20prucalopride%0ARecord%3A%20Prucalopride_van2016_pru_usa_12%0APaper%3A%20van_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_prucalopride/Prucalopride_van2016_pru_usa_12%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 16:44 UTC</sub>
