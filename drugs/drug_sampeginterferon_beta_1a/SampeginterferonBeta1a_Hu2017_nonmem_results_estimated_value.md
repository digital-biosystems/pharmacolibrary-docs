<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;sampeginterferon beta-1a&quot;,&quot;href&quot;:&quot;drugs/drug_sampeginterferon_beta_1a/&quot;},{&quot;label&quot;:&quot;Hu_2017 \u00b7 nonmem_results_estimated_value&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sampeginterferon beta-1a — `SampeginterferonBeta1a_Hu2017_nonmem_results_estimated_value`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Peginterferon beta-1a intercompartment clearance was assigned a volume unit of 484 L instead of a clearance rate, causing a structural dimension mismatch.**

The parameter describing transfer between central and peripheral compartments is reported as 484 with the unit L, which denotes volume rather than a clearance rate. This unit could not be converted to standard SI units for clearance, leaving the structural parameter with inconsistent dimensions. Extracted — peginterferon beta-1a: CL 3.2 L/h, Q2 484 L, allometric_exponent 0.2 h⁻¹.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has peginterferon beta-1a, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Hu X et al., Population-Based Pharmacokinetic and Ex…, Journal of clinical pharmac… (2017)
  ·  DOI: [10.1002/jcph.883](https://doi.org/10.1002/jcph.883)

<div class="pk-model-meta" hidden drug="sampeginterferon beta-1a" model-id="SampeginterferonBeta1a_Hu2017_nonmem_results_estimated_value" status="rejected" stale="false" population="adults with relapsing multiple sclerosis" measured-compound="peginterferon beta-1a" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 (L/h) | `Q22` · CL | 3.2 | L/h | 8.88888888888889e-07 | [l] / [h] | 4.7 | llm (0.6) | Hu_2017_table_2:row0:col2, Hu_2017_table_2:row0:col3, Hu_2017_table_2:row0:col6, Hu_2017_table_2:row0:col8, Hu_2017_table_2:row0:col9 | — | not captured |
| θ2 (L) | `Q99` · Q2 | 484 | L | not captured | [l] | 13 | llm (0.6) | Hu_2017_table_2:row1:col2, Hu_2017_table_2:row1:col3, Hu_2017_table_2:row1:col6, Hu_2017_table_2:row1:col8, Hu_2017_table_2:row1:col9 | — | not captured |
| θ4 | `Q900` · equation variable | 0.0046 | not captured | not captured | not captured | 37 | llm (0.6) | Hu_2017_table_2:row3:col2, Hu_2017_table_2:row3:col3, Hu_2017_table_2:row3:col6, Hu_2017_table_2:row3:col8, Hu_2017_table_2:row3:col9 | — | not captured |
| θ8 (h⁻¹) | `Q319` · allometric_exponent | 0.20 | h⁻¹ | not captured | [1] / [h] | 13 | llm (0.6) | Hu_2017_table_2:row7:col2, Hu_2017_table_2:row7:col3, Hu_2017_table_2:row7:col6, Hu_2017_table_2:row7:col8, Hu_2017_table_2:row7:col9 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'θ2 (L)' → Q99 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'θ3' — extend the ontology if this is a real PK parameter (source ['Hu_2017_table_2:row2:col2', 'Hu_2017_table_2:row2:col3', 'Hu_2017_table_2:row2:col6', 'Hu_2017_table_2:row2:col8', 'Hu_2017_table_2:row2:col9'])
- dropped unlinked row (NIL): 'θ5' — extend the ontology if this is a real PK parameter (source ['Hu_2017_table_2:row4:col2', 'Hu_2017_table_2:row4:col3', 'Hu_2017_table_2:row4:col6', 'Hu_2017_table_2:row4:col8', 'Hu_2017_table_2:row4:col9'])
- dropped unlinked row (NIL): 'θ6' — extend the ontology if this is a real PK parameter (source ['Hu_2017_table_2:row5:col2', 'Hu_2017_table_2:row5:col3', 'Hu_2017_table_2:row5:col6', 'Hu_2017_table_2:row5:col8', 'Hu_2017_table_2:row5:col9'])
- routed 'θ7' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'SD I' — extend the ontology if this is a real PK parameter (source ['Hu_2017_table_2:row10:col2', 'Hu_2017_table_2:row10:col3', 'Hu_2017_table_2:row10:col6', 'Hu_2017_table_2:row10:col8', 'Hu_2017_table_2:row10:col9'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=peginterferon beta-1a
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'nonmem results: estimated value' subgroup of Hu_2017 (paper reports 3 populations: estimated value, mean, nonmem results: estimated value)
- molar mass: no plausible PubChem entry for 'peginterferon beta-1a' ('peginterferon beta-1a') — left in mass units
- molar mass: none found for 'sampeginterferon_beta_1a' — its concentrations stay mass-only
- molar mass: none found for 'peginterferon beta-1a' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'peginterferon beta-1a', not sampeginterferon_beta_1a — the review values are the parent's

**Extraction notes:**
- final table tab_2: grid unusable → re-running vision table extraction for Hu_2017
- unparsed cell Hu_2017_table_3:row8:col2 = '1, fixed'
- unparsed cell Hu_2017_table_2:row11:col2 = '1, fixed'
- companion parameter table 2 transcribed (85 record(s), model stage 'full')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θ2].parameter_id` | Q99 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[θ4]` | 0.0046 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ8].parameter_id` | Q319 | Q47 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | peginterferon beta-1a | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | peginterferon beta-1a | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hu_2017_table_2:row0:col2', 'Hu_2017_table_2:row0:col3', 'Hu_2017_table_2:row0:col6', 'Hu_2017_table_2:row0:col8', 'Hu_2017_table_2:row0:col9'] |
| C5_dimension_Q99 | fail | [length] ** 3 | L | not captured | not captured | ['Hu_2017_table_2:row1:col2', 'Hu_2017_table_2:row1:col3', 'Hu_2017_table_2:row1:col6', 'Hu_2017_table_2:row1:col8', 'Hu_2017_table_2:row1:col9'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.2 | not captured | not captured | ['Hu_2017_table_2:row0:col2', 'Hu_2017_table_2:row0:col3', 'Hu_2017_table_2:row0:col6', 'Hu_2017_table_2:row0:col8', 'Hu_2017_table_2:row0:col9'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.2 L/h | not captured | not captured | ['Hu_2017_table_2:row0:col2', 'Hu_2017_table_2:row0:col3', 'Hu_2017_table_2:row0:col6', 'Hu_2017_table_2:row0:col8', 'Hu_2017_table_2:row0:col9'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sampeginterferon_beta_1a/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hu_2017` / `Hu_2017::nonmem_results_estimated_value`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:08 UTC</sub>
