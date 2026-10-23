<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;atenolol&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/&quot;},{&quot;label&quot;:&quot;Sowinski_1995 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atenolol — `Atenolol_Sowinski1995_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-29 04:00 UTC) predates the latest extraction (2026-10-06 23:09 UTC); the status shown comes from the current checks. CL/F, Q and CLR have no unit.

<div class="pk-model-meta" hidden drug="atenolol" model-id="Atenolol_Sowinski1995_reference" status="needs_review" stale="true" population="young and elderly healthy men" measured-compound="atenolol" parameterization="apparent" topology="1C"></div>

## Citation
Sowinski KM, Forrest A, Wilton JH, Taylor AM, Wilson MF, Kazierad DJ. Effect of aging on atenolol pharmacokinetics and pharmacodynamics. Journal of clinical pharmacology 35(8):807–814 (1995).
  ·  DOI: [10.1002/j.1552-4604.1995.tb04124.x](https://doi.org/10.1002/j.1552-4604.1995.tb04124.x)

## Population and dosing

**Population:** young and elderly healthy men · condition healthy · age group mixed · n = &gt;=12.

**Dosing:** 100 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/hr/1.73 m²) | CL/F | 11.15 | L/hr/1.73 m² |
| CLd (L/hr/1.73 m²) | Q | 8.58 | L/hr/1.73 m² |
| CLr (L/hr/1.73 m²) | CLR | 7.67 | L/hr/1.73 m² |
| Vss/F (L/kg) | Vss | 1.43 | L/kg |
| Vc/F (L/kg) | V/F | 1.17 | L/kg |
| ka (hr⁻¹) | kabs | 1.32 | hr⁻¹ |
| Cmax (ng/mL) | Cmax | 780 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL/F, Q and CLR have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL/F, Q, CLR and Cmax), so that value has no SI equivalent. Extracted — atenolol: CL/F 11.2 L/hr/1.73 m2, Q 8.58 L/hr/1.73 m2, CLR 7.67 L/hr/1.73 m2, Vss 1.43 L/kg, V/F 1.17 L/kg, kabs 1.32 hr-1, Cmax 780 ng/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atenolol, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/hr/1.73 m²) | `Q27` · CL/F | 11.15 | L/hr/1.73 m² |  |  | l/(h·1.73m2) | exact (1) | Sowinski_1995_table_1:row0:col2, Sowinski_1995_table_1:row0:col3, Sowinski_1995_table_1:row0:col4, Sowinski_1995_table_1:row0:col5, Sowinski_1995_table_1:row0:col6, Sowinski_1995_table_1:row0:col7, Sowinski_1995_table_1:row0:col9, Sowinski_1995_table_1:row0:col11, Sowinski_1995_table_1:row0:col12, Sowinski_1995_table_1:row0:col13, Sowinski_1995_table_1:row0:col14, Sowinski_1995_table_1:row0:col15, Sowinski_1995_table_1:row0:col16, Sowinski_1995_table_1:row0:col17, Sowinski_1995_table_1:row0:col18 |
| CLd (L/hr/1.73 m²) | `Q30` · Q | 8.58 | L/hr/1.73 m² |  |  | l/(h·1.73m2) | exact (1) | Sowinski_1995_table_1:row1:col2, Sowinski_1995_table_1:row1:col3, Sowinski_1995_table_1:row1:col4, Sowinski_1995_table_1:row1:col5, Sowinski_1995_table_1:row1:col6, Sowinski_1995_table_1:row1:col7, Sowinski_1995_table_1:row1:col8, Sowinski_1995_table_1:row1:col9, Sowinski_1995_table_1:row1:col11, Sowinski_1995_table_1:row1:col13, Sowinski_1995_table_1:row1:col15, Sowinski_1995_table_1:row1:col16, Sowinski_1995_table_1:row1:col17, Sowinski_1995_table_1:row1:col18 |
| CLr (L/hr/1.73 m²) | `Q26` · CLR | 7.67 | L/hr/1.73 m² |  |  | l/(h·1.73m2) | exact (1) | Sowinski_1995_table_1:row2:col2, Sowinski_1995_table_1:row2:col3, Sowinski_1995_table_1:row2:col4, Sowinski_1995_table_1:row2:col5, Sowinski_1995_table_1:row2:col6, Sowinski_1995_table_1:row2:col7, Sowinski_1995_table_1:row2:col9, Sowinski_1995_table_1:row2:col11, Sowinski_1995_table_1:row2:col12, Sowinski_1995_table_1:row2:col13, Sowinski_1995_table_1:row2:col14, Sowinski_1995_table_1:row2:col15, Sowinski_1995_table_1:row2:col16, Sowinski_1995_table_1:row2:col17, Sowinski_1995_table_1:row2:col18 |
| Vss/F (L/kg) | `Q65` · Vss | 1.43 | L/kg | 0.1001 | m3 | l/kg | llm (0.6) | Sowinski_1995_table_1:row3:col2, Sowinski_1995_table_1:row3:col3, Sowinski_1995_table_1:row3:col4, Sowinski_1995_table_1:row3:col5, Sowinski_1995_table_1:row3:col6, Sowinski_1995_table_1:row3:col7, Sowinski_1995_table_1:row3:col8, Sowinski_1995_table_1:row3:col9, Sowinski_1995_table_1:row3:col11, Sowinski_1995_table_1:row3:col12, Sowinski_1995_table_1:row3:col13, Sowinski_1995_table_1:row3:col14, Sowinski_1995_table_1:row3:col15, Sowinski_1995_table_1:row3:col16, Sowinski_1995_table_1:row3:col17, Sowinski_1995_table_1:row3:col18 |
| Vc/F (L/kg) | `Q76` · V/F | 1.17 | L/kg | 0.0819 | m3 | l/kg | exact (1) | Sowinski_1995_table_1:row4:col2, Sowinski_1995_table_1:row4:col3, Sowinski_1995_table_1:row4:col4, Sowinski_1995_table_1:row4:col5, Sowinski_1995_table_1:row4:col6, Sowinski_1995_table_1:row4:col7, Sowinski_1995_table_1:row4:col8, Sowinski_1995_table_1:row4:col9, Sowinski_1995_table_1:row4:col11, Sowinski_1995_table_1:row4:col12, Sowinski_1995_table_1:row4:col13, Sowinski_1995_table_1:row4:col14, Sowinski_1995_table_1:row4:col15, Sowinski_1995_table_1:row4:col16, Sowinski_1995_table_1:row4:col17, Sowinski_1995_table_1:row4:col18 |
| ka (hr⁻¹) | `Q49` · kabs | 1.32 | hr⁻¹ | 0.0003667 | 1/s | 1/h | exact (1) | Sowinski_1995_table_1:row5:col2, Sowinski_1995_table_1:row5:col3, Sowinski_1995_table_1:row5:col4, Sowinski_1995_table_1:row5:col5, Sowinski_1995_table_1:row5:col6, Sowinski_1995_table_1:row5:col7, Sowinski_1995_table_1:row5:col9, Sowinski_1995_table_1:row5:col11, Sowinski_1995_table_1:row5:col12, Sowinski_1995_table_1:row5:col13, Sowinski_1995_table_1:row5:col14, Sowinski_1995_table_1:row5:col15, Sowinski_1995_table_1:row5:col16, Sowinski_1995_table_1:row5:col17, Sowinski_1995_table_1:row5:col18 |
| Cmax (ng/mL) | `Q32` · Cmax | 780 | ng/mL |  |  | ng/ml | exact (1) | Sowinski_1995_table_1:row6:col2, Sowinski_1995_table_1:row6:col3, Sowinski_1995_table_1:row6:col4, Sowinski_1995_table_1:row6:col5, Sowinski_1995_table_1:row6:col6, Sowinski_1995_table_1:row6:col7, Sowinski_1995_table_1:row6:col9, Sowinski_1995_table_1:row6:col11, Sowinski_1995_table_1:row6:col12, Sowinski_1995_table_1:row6:col13, Sowinski_1995_table_1:row6:col14, Sowinski_1995_table_1:row6:col15, Sowinski_1995_table_1:row6:col16, Sowinski_1995_table_1:row6:col17, Sowinski_1995_table_1:row6:col18 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '6' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '7' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '8' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '9' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '11' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '12' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'L/hr/1.73 m²' (CL/F)
- unit_dimension_unknown: 'L/hr/1.73 m²' (Q)
- unit_dimension_unknown: 'L/hr/1.73 m²' (CLR)
- implicit units: 'CL/F (L/hr/1.73 m²)' — the LLM proposed 'L/hr/1.73 m²', whose dimension does not fit Q27; left unset
- implicit units: 'CLd (L/hr/1.73 m²)' — the LLM proposed 'L/hr/1.73 m²', whose dimension does not fit Q30; left unset
- implicit units: 'CLr (L/hr/1.73 m²)' — the LLM proposed 'L/hr/1.73 m²', whose dimension does not fit Q26; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atenolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L/kg)' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- transposed table Sowinski_1995_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Sowinski_1995_table_1:row0:col8 = '15.18*'
- unparsed cell Sowinski_1995_table_1:row2:col8 = '10.41*'
- unparsed cell Sowinski_1995_table_1:row5:col8 = '0.57*'
- unparsed cell Sowinski_1995_table_1:row6:col8 = '620*'
- LLM region Sowinski_1995:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | atenolol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | atenolol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Sowinski_1995_table_1:row6:col2', 'Sowinski_1995_table_1:row6:col3', 'Sowinski_1995_table_1:row6:col4', 'Sowinski_1995_table_1:row6:col5', 'Sowinski_1995_table_1:row6:col6', 'Sowinski_1995_table_1:row6:col7', 'Sowinski_1995_table_1:row6:col9', 'Sowinski_1995_table_1:row6:col11', 'Sowinski_1995_table_1:row6:col12', 'Sowinski_1995_table_1:row6:col13', 'Sowinski_1995_table_1:row6:col14', 'Sowinski_1995_table_1:row6:col15', 'Sowinski_1995_table_1:row6:col16', 'Sowinski_1995_table_1:row6:col17', 'Sowinski_1995_table_1:row6:col18'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Sowinski_1995_table_1:row5:col2', 'Sowinski_1995_table_1:row5:col3', 'Sowinski_1995_table_1:row5:col4', 'Sowinski_1995_table_1:row5:col5', 'Sowinski_1995_table_1:row5:col6', 'Sowinski_1995_table_1:row5:col7', 'Sowinski_1995_table_1:row5:col9', 'Sowinski_1995_table_1:row5:col11', 'Sowinski_1995_table_1:row5:col12', 'Sowinski_1995_table_1:row5:col13', 'Sowinski_1995_table_1:row5:col14', 'Sowinski_1995_table_1:row5:col15', 'Sowinski_1995_table_1:row5:col16', 'Sowinski_1995_table_1:row5:col17', 'Sowinski_1995_table_1:row5:col18'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Sowinski_1995_table_1:row3:col2', 'Sowinski_1995_table_1:row3:col3', 'Sowinski_1995_table_1:row3:col4', 'Sowinski_1995_table_1:row3:col5', 'Sowinski_1995_table_1:row3:col6', 'Sowinski_1995_table_1:row3:col7', 'Sowinski_1995_table_1:row3:col8', 'Sowinski_1995_table_1:row3:col9', 'Sowinski_1995_table_1:row3:col11', 'Sowinski_1995_table_1:row3:col12', 'Sowinski_1995_table_1:row3:col13', 'Sowinski_1995_table_1:row3:col14', 'Sowinski_1995_table_1:row3:col15', 'Sowinski_1995_table_1:row3:col16', 'Sowinski_1995_table_1:row3:col17', 'Sowinski_1995_table_1:row3:col18'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Sowinski_1995_table_1:row4:col2', 'Sowinski_1995_table_1:row4:col3', 'Sowinski_1995_table_1:row4:col4', 'Sowinski_1995_table_1:row4:col5', 'Sowinski_1995_table_1:row4:col6', 'Sowinski_1995_table_1:row4:col7', 'Sowinski_1995_table_1:row4:col8', 'Sowinski_1995_table_1:row4:col9', 'Sowinski_1995_table_1:row4:col11', 'Sowinski_1995_table_1:row4:col12', 'Sowinski_1995_table_1:row4:col13', 'Sowinski_1995_table_1:row4:col14', 'Sowinski_1995_table_1:row4:col15', 'Sowinski_1995_table_1:row4:col16', 'Sowinski_1995_table_1:row4:col17', 'Sowinski_1995_table_1:row4:col18'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] | L/hr/1.73 m² | ['Sowinski_1995_table_1:row2:col2', 'Sowinski_1995_table_1:row2:col3', 'Sowinski_1995_table_1:row2:col4', 'Sowinski_1995_table_1:row2:col5', 'Sowinski_1995_table_1:row2:col6', 'Sowinski_1995_table_1:row2:col7', 'Sowinski_1995_table_1:row2:col9', 'Sowinski_1995_table_1:row2:col11', 'Sowinski_1995_table_1:row2:col12', 'Sowinski_1995_table_1:row2:col13', 'Sowinski_1995_table_1:row2:col14', 'Sowinski_1995_table_1:row2:col15', 'Sowinski_1995_table_1:row2:col16', 'Sowinski_1995_table_1:row2:col17', 'Sowinski_1995_table_1:row2:col18'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | L/hr/1.73 m² | ['Sowinski_1995_table_1:row0:col2', 'Sowinski_1995_table_1:row0:col3', 'Sowinski_1995_table_1:row0:col4', 'Sowinski_1995_table_1:row0:col5', 'Sowinski_1995_table_1:row0:col6', 'Sowinski_1995_table_1:row0:col7', 'Sowinski_1995_table_1:row0:col9', 'Sowinski_1995_table_1:row0:col11', 'Sowinski_1995_table_1:row0:col12', 'Sowinski_1995_table_1:row0:col13', 'Sowinski_1995_table_1:row0:col14', 'Sowinski_1995_table_1:row0:col15', 'Sowinski_1995_table_1:row0:col16', 'Sowinski_1995_table_1:row0:col17', 'Sowinski_1995_table_1:row0:col18'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | L/hr/1.73 m² | ['Sowinski_1995_table_1:row1:col2', 'Sowinski_1995_table_1:row1:col3', 'Sowinski_1995_table_1:row1:col4', 'Sowinski_1995_table_1:row1:col5', 'Sowinski_1995_table_1:row1:col6', 'Sowinski_1995_table_1:row1:col7', 'Sowinski_1995_table_1:row1:col8', 'Sowinski_1995_table_1:row1:col9', 'Sowinski_1995_table_1:row1:col11', 'Sowinski_1995_table_1:row1:col13', 'Sowinski_1995_table_1:row1:col15', 'Sowinski_1995_table_1:row1:col16', 'Sowinski_1995_table_1:row1:col17', 'Sowinski_1995_table_1:row1:col18'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 100 L | ['Sowinski_1995_table_1:row3:col2', 'Sowinski_1995_table_1:row3:col3', 'Sowinski_1995_table_1:row3:col4', 'Sowinski_1995_table_1:row3:col5', 'Sowinski_1995_table_1:row3:col6', 'Sowinski_1995_table_1:row3:col7', 'Sowinski_1995_table_1:row3:col8', 'Sowinski_1995_table_1:row3:col9', 'Sowinski_1995_table_1:row3:col11', 'Sowinski_1995_table_1:row3:col12', 'Sowinski_1995_table_1:row3:col13', 'Sowinski_1995_table_1:row3:col14', 'Sowinski_1995_table_1:row3:col15', 'Sowinski_1995_table_1:row3:col16', 'Sowinski_1995_table_1:row3:col17', 'Sowinski_1995_table_1:row3:col18'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 81.9 L | ['Sowinski_1995_table_1:row4:col2', 'Sowinski_1995_table_1:row4:col3', 'Sowinski_1995_table_1:row4:col4', 'Sowinski_1995_table_1:row4:col5', 'Sowinski_1995_table_1:row4:col6', 'Sowinski_1995_table_1:row4:col7', 'Sowinski_1995_table_1:row4:col8', 'Sowinski_1995_table_1:row4:col9', 'Sowinski_1995_table_1:row4:col11', 'Sowinski_1995_table_1:row4:col12', 'Sowinski_1995_table_1:row4:col13', 'Sowinski_1995_table_1:row4:col14', 'Sowinski_1995_table_1:row4:col15', 'Sowinski_1995_table_1:row4:col16', 'Sowinski_1995_table_1:row4:col17', 'Sowinski_1995_table_1:row4:col18'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batenolol%5D%20Atenolol_Sowinski1995_reference&body=Drug%3A%20atenolol%0ARecord%3A%20Atenolol_Sowinski1995_reference%0APaper%3A%20Sowinski_1995%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atenolol/Atenolol_Sowinski1995_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:09 UTC</sub>
