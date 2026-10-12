<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;nivolumab&quot;,&quot;href&quot;:&quot;drugs/drug_nivolumab/&quot;},{&quot;label&quot;:&quot;Tohi_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nivolumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nivolumab/Nivolumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nivolumab — `Nivolumab_Tohi2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.895), gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the albumin covariate effect of -1.48 produces a negative clearance value, which is pharmacokinetically implausible.**

The base clearance for nivolumab is 0.0064 L/h, but the albumin covariate effect is -1.48. This large negative shift implies the model calculates a negative clearance in certain covariate scenarios. The second reader disagreed on the dose compound and primary analyte, marking them as unknown. Extracted — nivolumab: CL 0.0064 L h−1, V1 2.28 L, V2 1.81 L, Q 0.018 L h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nivolumab, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Tohi M et al., Population Pharmacokinetics of Nivoluma…, Therapeutic drug monitoring (2023)
  ·  DOI: [10.1097/FTD.0000000000000996](https://doi.org/10.1097/FTD.0000000000000996)

<div class="pk-model-meta" hidden drug="nivolumab" model-id="Nivolumab_Tohi2023_reference" status="rejected" stale="false" population="Japanese patients with nonsmall cell lung cancer" measured-compound="nivolumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L h−1) | `Q22` · CL | 0.0064 | L h−1 | 1.777777777777778e-09 | [l] / [h] | 5 | exact (1.0) | T2:row3:col1, T2:row3:col2, T2:row3:col4, T2:row3:col5, T2:row3:col6 | — | not captured |
| V1 (L) | `Q63` · V1 | 2.28 | L | 0.00228 | [l] | 17 | exact (1.0) | T2:row4:col1, T2:row4:col2, T2:row4:col4, T2:row4:col5, T2:row4:col6 | — | not captured |
| V2 (L) | `Q64` · V2 | 1.81 | L | 0.0018100000000000002 | [l] | 11 | exact (1.0) | T2:row5:col1, T2:row5:col2, T2:row5:col4, T2:row5:col5, T2:row5:col6 | — | not captured |
| Q (L h−1) | `Q30` · Q | 0.018 | L h−1 | 5e-09 | [l] / [h] | 26 | exact (1.0) | T2:row6:col1, T2:row6:col2, T2:row6:col4, T2:row6:col5, T2:row6:col6 | — | not captured |
| for_albumin | `Q900` · for_albumin | -1.48 | not captured | not captured | not captured | 33 | not captured (not captured) | T2:row7:col1, T2:row7:col2, T2:row7:col4, T2:row7:col5, T2:row7:col6 | — | not captured |
| for_egfr | `Q900` · for_egfr | 0.411 | not captured | not captured | not captured | 23 | not captured (not captured) | T2:row8:col1, T2:row8:col2, T2:row8:col4, T2:row8:col5, T2:row8:col6 | — | not captured |
| for_tm50 | `Q900` · for_tm50 | 1510 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row10:col1 | — | not captured |
| theta_q320_category | `Q900` · theta_q320_category | -0.285 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row9:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual variability (CV%)')
- column 'bootstrap analysis (n = 1000)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'shr. (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['T2:row0:col4', 'T2:row0:col5', 'T2:row0:col6'])
- covariate level 'θ for albumin' → Q900:for_albumin = -1.48 (additive_shift on Q22)
- covariate level 'θ for eGFR' → Q900:for_egfr = 0.411 (additive_shift on Q22)
- covariate level 'θ for TM50' → Q900:for_tm50 = 1510 (additive_shift on Q22)
- covariate effect for Q320 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nivolumab
- molar mass: none found for 'nivolumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.895 (17/19 fields) | 2 |
| `gpt-oss:120b` | not confirmed | 0.895 (17/19 fields) | 2 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | nivolumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | nivolumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | nivolumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | nivolumab | unknown | mismatch |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_sign_Q22_albumin | fail | -1.4736 | not captured | not captured | not captured | base 0.0064 + shift -1.48 (albumin) |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col4', 'T2:row3:col5', 'T2:row3:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col4', 'T2:row6:col5', 'T2:row6:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col4', 'T2:row4:col5', 'T2:row4:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col4', 'T2:row5:col5', 'T2:row5:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0064 | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col4', 'T2:row3:col5', 'T2:row3:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0064 L/h | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col4', 'T2:row3:col5', 'T2:row3:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.28 L | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col4', 'T2:row4:col5', 'T2:row4:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.81 L | not captured | not captured | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col4', 'T2:row5:col5', 'T2:row5:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nivolumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tohi_2023` / `Tohi_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:35 UTC</sub>
