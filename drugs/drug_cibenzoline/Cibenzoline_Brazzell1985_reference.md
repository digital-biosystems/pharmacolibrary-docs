<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;cibenzoline&quot;,&quot;href&quot;:&quot;drugs/drug_cibenzoline/&quot;},{&quot;label&quot;:&quot;Brazzell_1985 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cibenzoline — `Cibenzoline_Brazzell1985_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.267), gpt-oss:120b (partly confirmed, agreement 0.267). The first reading is what the record holds.">cross-check: partial 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The renal clearance parameter for cibenzoline was rejected because its reported unit, ng/mL, is dimensionally inconsistent with a clearance value.**

The record lists the renal portion of total clearance as 265 ng/mL, a concentration unit that cannot represent a volumetric flow rate. This dimensional mismatch prevented the value from being converted to standard SI units, causing the model to be held back. Additionally, the second reader disagreed on the presence of several parameters, including the fast phase coefficient and terminal half-life, which were recorded in this entry but not by the second reader. Extracted — cibenzoline: λ1 0.406 hr-1, kel 0.0717 hr-1, V 23.8 L, kexcr 0.749 hr-1, Ae 50.4 mg, CLR 265 ng/mL, t1/2z 9.4 hr.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of a: this record has 2021, the second reading none; it also differs on 10 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Brazzell RK et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (1985)
  ·  DOI: [10.1002/j.1552-4604.1985.tb02869.x](https://doi.org/10.1002/j.1552-4604.1985.tb02869.x)

<div class="pk-model-meta" hidden drug="cibenzoline" model-id="Cibenzoline_Brazzell1985_reference" status="rejected" stale="false" population="healthy elderly males" measured-compound="cibenzoline" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| α (hr-1) | `Q67` · λ1 | 0.406 | hr-1 | not captured | [1] / [h] | not captured | exact (1.0) | Brazzell_1985_table_3:row1:col1, Brazzell_1985_table_3:row1:col2, Brazzell_1985_table_3:row1:col3, Brazzell_1985_table_3:row1:col4, Brazzell_1985_table_3:row1:col5, Brazzell_1985_table_3:row1:col6, Brazzell_1985_table_3:row1:col7, Brazzell_1985_table_3:row1:col8 | — | not captured |
| β (hr-1) | `Q47` · kel | 0.0717 | hr-1 | 1.9916666666666665e-05 | [1] / [h] | not captured | exact (1.0) | Brazzell_1985_table_3:row2:col1, Brazzell_1985_table_3:row2:col2, Brazzell_1985_table_3:row2:col3, Brazzell_1985_table_3:row2:col4, Brazzell_1985_table_3:row2:col5, Brazzell_1985_table_3:row2:col6, Brazzell_1985_table_3:row2:col7, Brazzell_1985_table_3:row2:col8 | — | not captured |
| A (ng/mL) | `Q900` · equation variable | 2021 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Brazzell_1985_table_3:row4:col1, Brazzell_1985_table_3:row4:col2, Brazzell_1985_table_3:row4:col3, Brazzell_1985_table_3:row4:col4, Brazzell_1985_table_3:row4:col5, Brazzell_1985_table_3:row4:col6, Brazzell_1985_table_3:row4:col7, Brazzell_1985_table_3:row4:col8 | — | not captured |
| Vc (L) | `Q61` · V | 23.8 | L | 0.0238 | [l] | not captured | exact (1.0) | Brazzell_1985_table_3:row6:col1, Brazzell_1985_table_3:row6:col2, Brazzell_1985_table_3:row6:col3, Brazzell_1985_table_3:row6:col4, Brazzell_1985_table_3:row6:col5, Brazzell_1985_table_3:row6:col6, Brazzell_1985_table_3:row6:col7, Brazzell_1985_table_3:row6:col8 | — | not captured |
| ku (hr-1) | `Q50` · kexcr | 0.749 | hr-1 | 0.00020805555555555557 | [1] / [h] | not captured | llm_corrected (0.6) | Brazzell_1985_table_3:row7:col1, Brazzell_1985_table_3:row7:col2, Brazzell_1985_table_3:row7:col3, Brazzell_1985_table_3:row7:col4, Brazzell_1985_table_3:row7:col5, Brazzell_1985_table_3:row7:col6, Brazzell_1985_table_3:row7:col7, Brazzell_1985_table_3:row7:col8 | — | not captured |
| Xu (0–48) (mg) | `Q91` · Ae | 50.4 | mg | not captured | [mg] | not captured | llm (0.6) | Brazzell_1985_table_3:row8:col1, Brazzell_1985_table_3:row8:col2, Brazzell_1985_table_3:row8:col3, Brazzell_1985_table_3:row8:col4, Brazzell_1985_table_3:row8:col5, Brazzell_1985_table_3:row8:col6, Brazzell_1985_table_3:row8:col7, Brazzell_1985_table_3:row8:col8 | — | not captured |
| Clr (ng/mL) | `Q26` · CLR | 265 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Brazzell_1985_table_3:row9:col1, Brazzell_1985_table_3:row9:col2, Brazzell_1985_table_3:row9:col3, Brazzell_1985_table_3:row9:col4, Brazzell_1985_table_3:row9:col5, Brazzell_1985_table_3:row9:col6, Brazzell_1985_table_3:row9:col7, Brazzell_1985_table_3:row9:col8 | — | not captured |
| t1/2 (hr) | `Q57` · t1/2z | 9.4 | hr | 33840.0 | [h] | not captured | exact (1.0) | Brazzell_1985_table_3:row10:col1, Brazzell_1985_table_3:row10:col2, Brazzell_1985_table_3:row10:col3, Brazzell_1985_table_3:row10:col4, Brazzell_1985_table_3:row10:col5, Brazzell_1985_table_3:row10:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '6' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'π (hr-1)' — extend the ontology if this is a real PK parameter (source ['Brazzell_1985_table_3:row0:col1', 'Brazzell_1985_table_3:row0:col2', 'Brazzell_1985_table_3:row0:col3', 'Brazzell_1985_table_3:row0:col4', 'Brazzell_1985_table_3:row0:col5', 'Brazzell_1985_table_3:row0:col6', 'Brazzell_1985_table_3:row0:col7', 'Brazzell_1985_table_3:row0:col8'])
- unit_dimension_mismatch: 'α (hr-1)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'P (ng/mL)' — extend the ontology if this is a real PK parameter (source ['Brazzell_1985_table_3:row3:col1', 'Brazzell_1985_table_3:row3:col2', 'Brazzell_1985_table_3:row3:col3', 'Brazzell_1985_table_3:row3:col4', 'Brazzell_1985_table_3:row3:col5', 'Brazzell_1985_table_3:row3:col6', 'Brazzell_1985_table_3:row3:col7', 'Brazzell_1985_table_3:row3:col8'])
- dropped unlinked row (NIL): 'B (ng/mL)' — extend the ontology if this is a real PK parameter (source ['Brazzell_1985_table_3:row5:col1', 'Brazzell_1985_table_3:row5:col2', 'Brazzell_1985_table_3:row5:col3', 'Brazzell_1985_table_3:row5:col4', 'Brazzell_1985_table_3:row5:col5', 'Brazzell_1985_table_3:row5:col6', 'Brazzell_1985_table_3:row5:col7', 'Brazzell_1985_table_3:row5:col8'])
- unit_dimension_mismatch: 'Clr (ng/mL)' → Q26 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cibenzoline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc (L)' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3
- transposed table Brazzell_1985_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Brazzell_1985_table_3:row10:col7 = '9.7*'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.267 (4/15 fields) | 11 |
| `gpt-oss:120b` | partly confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a]` | 2021 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clr]` | 265 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ku]` | 0.749 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[nonrenal clearance]` | not captured | 234 | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance]` | not captured | 523 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 9.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 23.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | not captured | 445 | only_one_extracted |
| `gpt-oss-120b` | `parameters[xu (0-48)]` | 50.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[α]` | 0.406 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[β]` | 0.0717 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[a]` | 2021 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clr]` | 265 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ku]` | 0.749 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[nonrenal clearance]` | not captured | 234 | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma clearance]` | not captured | 523 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | 9.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | 23.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | not captured | 445 | only_one_extracted |
| `gpt-oss:120b` | `parameters[xu (0-48)]` | 50.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[α]` | 0.406 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[β]` | 0.0717 | not captured | only_one_extracted |

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
| C5_dimension_Q26 | fail | [mass] / [length] ** 3 | ng/mL | not captured | not captured | ['Brazzell_1985_table_3:row9:col1', 'Brazzell_1985_table_3:row9:col2', 'Brazzell_1985_table_3:row9:col3', 'Brazzell_1985_table_3:row9:col4', 'Brazzell_1985_table_3:row9:col5', 'Brazzell_1985_table_3:row9:col6', 'Brazzell_1985_table_3:row9:col7', 'Brazzell_1985_table_3:row9:col8'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Brazzell_1985_table_3:row2:col1', 'Brazzell_1985_table_3:row2:col2', 'Brazzell_1985_table_3:row2:col3', 'Brazzell_1985_table_3:row2:col4', 'Brazzell_1985_table_3:row2:col5', 'Brazzell_1985_table_3:row2:col6', 'Brazzell_1985_table_3:row2:col7', 'Brazzell_1985_table_3:row2:col8'] |
| C5_dimension_Q50 | pass | 1 / [time] | not captured | not captured | not captured | ['Brazzell_1985_table_3:row7:col1', 'Brazzell_1985_table_3:row7:col2', 'Brazzell_1985_table_3:row7:col3', 'Brazzell_1985_table_3:row7:col4', 'Brazzell_1985_table_3:row7:col5', 'Brazzell_1985_table_3:row7:col6', 'Brazzell_1985_table_3:row7:col7', 'Brazzell_1985_table_3:row7:col8'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Brazzell_1985_table_3:row10:col1', 'Brazzell_1985_table_3:row10:col2', 'Brazzell_1985_table_3:row10:col3', 'Brazzell_1985_table_3:row10:col4', 'Brazzell_1985_table_3:row10:col5', 'Brazzell_1985_table_3:row10:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Brazzell_1985_table_3:row6:col1', 'Brazzell_1985_table_3:row6:col2', 'Brazzell_1985_table_3:row6:col3', 'Brazzell_1985_table_3:row6:col4', 'Brazzell_1985_table_3:row6:col5', 'Brazzell_1985_table_3:row6:col6', 'Brazzell_1985_table_3:row6:col7', 'Brazzell_1985_table_3:row6:col8'] |
| C5_dimension_Q67 | fail | 1 / [time] | hr-1 | not captured | not captured | ['Brazzell_1985_table_3:row1:col1', 'Brazzell_1985_table_3:row1:col2', 'Brazzell_1985_table_3:row1:col3', 'Brazzell_1985_table_3:row1:col4', 'Brazzell_1985_table_3:row1:col5', 'Brazzell_1985_table_3:row1:col6', 'Brazzell_1985_table_3:row1:col7', 'Brazzell_1985_table_3:row1:col8'] |
| C5_dimension_Q91 | pass | [mass] | not captured | not captured | not captured | ['Brazzell_1985_table_3:row8:col1', 'Brazzell_1985_table_3:row8:col2', 'Brazzell_1985_table_3:row8:col3', 'Brazzell_1985_table_3:row8:col4', 'Brazzell_1985_table_3:row8:col5', 'Brazzell_1985_table_3:row8:col6', 'Brazzell_1985_table_3:row8:col7', 'Brazzell_1985_table_3:row8:col8'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 23.8 L | not captured | not captured | ['Brazzell_1985_table_3:row6:col1', 'Brazzell_1985_table_3:row6:col2', 'Brazzell_1985_table_3:row6:col3', 'Brazzell_1985_table_3:row6:col4', 'Brazzell_1985_table_3:row6:col5', 'Brazzell_1985_table_3:row6:col6', 'Brazzell_1985_table_3:row6:col7', 'Brazzell_1985_table_3:row6:col8'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cibenzoline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Brazzell_1985` / `Brazzell_1985::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 16:46 UTC</sub>
