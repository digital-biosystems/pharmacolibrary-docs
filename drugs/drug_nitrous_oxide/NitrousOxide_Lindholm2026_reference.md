<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;nitrous oxide&quot;,&quot;href&quot;:&quot;drugs/drug_nitrous_oxide/&quot;},{&quot;label&quot;:&quot;Lindholm_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;NitrousOxide_Hampsey2026_reference&quot;,&quot;label&quot;:&quot;Hampsey_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nitrous_oxide/NitrousOxide_Hampsey2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nitrous oxide — `NitrousOxide_Lindholm2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Nitrous oxide parameters like elimination rate constant and bioavailability incorrectly share volume units.

<div class="pk-model-meta" hidden drug="nitrous oxide" model-id="NitrousOxide_Lindholm2026_reference" status="rejected" stale="false" population="healthy adults" measured-compound="nitrous_oxide" parameterization="mechanistic" topology="1C"></div>

## Citation
Lindholm AØ, Nielsen MKK, Kristensen M, Larsen MH, Heiberg J, Rasmussen BS. Concentration and Detection Time of Nitrous Oxide in Blood Following Controlled Inhalation. Drug testing and analysis 18(4):576–580 (2026).
  ·  DOI: [10.1002/dta.70053](https://doi.org/10.1002/dta.70053)

## Population and dosing

**Population:** healthy adults · age group adult · n = &gt;$n_subjects: 11.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A | equation variable | 15.1 | mL/L |
| D | D1 | 8.5 | mL/L |
| E | E | 20.2 | mL/L |
| F | Fab | 20.6 | mL/L |
| G | Cmax | 49.7 | mL/L |
| K | kel | 8.2 | mL/L |
| first-order absorption constant rate (Ka, 0.156 1/day, 12.3% relative standard error (RSE)) | kabs | 0.156 | 1/day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.158). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Nitrous oxide parameters like elimination rate constant and bioavailability incorrectly share volume units.**

The record assigns volume units of mL/L to the elimination rate constant (8.2), bioavailability (20.6), and Cmax (49.7). These parameters require rate, fraction, or concentration units respectively, not volume. Consequently, the record was rejected due to a structural dimension mismatch. Extracted — nitrous oxide: D1 8.5 mL/L, E 20.2 mL/L, Fab 20.6 mL/L, Cmax 49.7 mL/L, kel 8.2 mL/L, kabs 0.156 1/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nitrous_oxide, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A | `Q900` · equation variable | 15.1 | mL/L |  |  | ml/l | llm (0.6) | Lindholm_2026_table_1:row1:col1, Lindholm_2026_table_1:row1:col2, Lindholm_2026_table_1:row1:col3, Lindholm_2026_table_1:row1:col5, Lindholm_2026_table_1:row1:col6, Lindholm_2026_table_1:row1:col7, Lindholm_2026_table_1:row1:col8, Lindholm_2026_table_1:row1:col9 |
| D | `Q310` · D1 | 8.5 | mL/L |  |  | ml/l | exact (1) | Lindholm_2026_table_1:row4:col1, Lindholm_2026_table_1:row4:col2, Lindholm_2026_table_1:row4:col3, Lindholm_2026_table_1:row4:col5, Lindholm_2026_table_1:row4:col6, Lindholm_2026_table_1:row4:col7, Lindholm_2026_table_1:row4:col8, Lindholm_2026_table_1:row4:col9 |
| E | `Q38` · E | 20.2 | mL/L |  |  | ml/l | exact (1) | Lindholm_2026_table_1:row5:col1, Lindholm_2026_table_1:row5:col2, Lindholm_2026_table_1:row5:col3, Lindholm_2026_table_1:row5:col5, Lindholm_2026_table_1:row5:col6, Lindholm_2026_table_1:row5:col7, Lindholm_2026_table_1:row5:col8, Lindholm_2026_table_1:row5:col9 |
| F | `Q40` · Fab | 20.6 | mL/L |  |  |  | exact (1) | Lindholm_2026_table_1:row6:col1, Lindholm_2026_table_1:row6:col2, Lindholm_2026_table_1:row6:col3, Lindholm_2026_table_1:row6:col5, Lindholm_2026_table_1:row6:col6, Lindholm_2026_table_1:row6:col7, Lindholm_2026_table_1:row6:col8, Lindholm_2026_table_1:row6:col9 |
| G | `Q32` · Cmax | 49.7 | mL/L |  |  | ml/l | llm (0.6) | Lindholm_2026_table_1:row7:col1, Lindholm_2026_table_1:row7:col2, Lindholm_2026_table_1:row7:col3, Lindholm_2026_table_1:row7:col5, Lindholm_2026_table_1:row7:col6, Lindholm_2026_table_1:row7:col8, Lindholm_2026_table_1:row7:col9 |
| K | `Q47` · kel | 8.2 | mL/L |  |  | ml/l | exact (1) | Lindholm_2026_table_1:row11:col1, Lindholm_2026_table_1:row11:col2, Lindholm_2026_table_1:row11:col3, Lindholm_2026_table_1:row11:col5, Lindholm_2026_table_1:row11:col6, Lindholm_2026_table_1:row11:col8, Lindholm_2026_table_1:row11:col9 |
| first-order absorption constant rate (Ka, 0.156 1/day, 12.3% relative standard error (RSE)) | `Q49` · kabs | 0.156 | 1/day | 1.806e-06 | 1/s | 1/h | review_gapfill (0.7) | Hood_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['Lindholm_2026_table_1:row2:col1', 'Lindholm_2026_table_1:row2:col2', 'Lindholm_2026_table_1:row2:col3', 'Lindholm_2026_table_1:row2:col5', 'Lindholm_2026_table_1:row2:col6', 'Lindholm_2026_table_1:row2:col7', 'Lindholm_2026_table_1:row2:col8', 'Lindholm_2026_table_1:row2:col9'])
- dropped unlinked row (NIL): 'C' — extend the ontology if this is a real PK parameter (source ['Lindholm_2026_table_1:row3:col1', 'Lindholm_2026_table_1:row3:col2', 'Lindholm_2026_table_1:row3:col3', 'Lindholm_2026_table_1:row3:col5', 'Lindholm_2026_table_1:row3:col6', 'Lindholm_2026_table_1:row3:col7', 'Lindholm_2026_table_1:row3:col8', 'Lindholm_2026_table_1:row3:col9'])
- unit_dimension_mismatch: 'D' → Q310 (unit 'dimensionless' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'G' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'H' — extend the ontology if this is a real PK parameter (source ['Lindholm_2026_table_1:row8:col1', 'Lindholm_2026_table_1:row8:col2', 'Lindholm_2026_table_1:row8:col3', 'Lindholm_2026_table_1:row8:col5', 'Lindholm_2026_table_1:row8:col6', 'Lindholm_2026_table_1:row8:col8', 'Lindholm_2026_table_1:row8:col9'])
- dropped duplicate Q900 ('I', value '6.4') — already have one for this compound
- dropped duplicate Q900 ('J', value '7.4') — already have one for this compound
- unit_dimension_mismatch: 'K' → Q47 (unit 'dimensionless' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['Lindholm_2026_table_1:row12:col1', 'Lindholm_2026_table_1:row12:col2', 'Lindholm_2026_table_1:row12:col3', 'Lindholm_2026_table_1:row12:col5', 'Lindholm_2026_table_1:row12:col6', 'Lindholm_2026_table_1:row12:col7', 'Lindholm_2026_table_1:row12:col8', 'Lindholm_2026_table_1:row12:col9'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nitrous_oxide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Hood_2021's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a]` | 15.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c]` |  | 19.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d]` | 8.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[d]` |  | 8.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[e]` | 20.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[e]` |  | 20.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 20.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  | 20.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[first-order absorption constant rate (ka, 0.156 1/day, 12.3% relative standard error (rse))]` | 0.156 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[g]` | 49.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[i]` |  | 6.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[j]` |  | 7.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k]` | 8.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k]` |  | 8.2 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | nitrous_oxide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | nitrous_oxide | unknown | mismatch |

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
| C5_dimension_Q310 | fail | dimensionless | mL/L | ['Lindholm_2026_table_1:row4:col1', 'Lindholm_2026_table_1:row4:col2', 'Lindholm_2026_table_1:row4:col3', 'Lindholm_2026_table_1:row4:col5', 'Lindholm_2026_table_1:row4:col6', 'Lindholm_2026_table_1:row4:col7', 'Lindholm_2026_table_1:row4:col8', 'Lindholm_2026_table_1:row4:col9'] |
| C5_dimension_Q32 | fail | dimensionless | mL/L | ['Lindholm_2026_table_1:row7:col1', 'Lindholm_2026_table_1:row7:col2', 'Lindholm_2026_table_1:row7:col3', 'Lindholm_2026_table_1:row7:col5', 'Lindholm_2026_table_1:row7:col6', 'Lindholm_2026_table_1:row7:col8', 'Lindholm_2026_table_1:row7:col9'] |
| C5_dimension_Q47 | fail | dimensionless | mL/L | ['Lindholm_2026_table_1:row11:col1', 'Lindholm_2026_table_1:row11:col2', 'Lindholm_2026_table_1:row11:col3', 'Lindholm_2026_table_1:row11:col5', 'Lindholm_2026_table_1:row11:col6', 'Lindholm_2026_table_1:row11:col8', 'Lindholm_2026_table_1:row11:col9'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Hood_2021:review'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnitrous_oxide%5D%20NitrousOxide_Lindholm2026_reference&body=Drug%3A%20nitrous_oxide%0ARecord%3A%20NitrousOxide_Lindholm2026_reference%0APaper%3A%20Lindholm_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nitrous_oxide/NitrousOxide_Lindholm2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 04:16 UTC</sub>
