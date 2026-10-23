<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;clonidine&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/&quot;},{&quot;label&quot;:&quot;Davies_1977 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/Clonidine_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clonidine — `Clonidine_Davies1977_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:25 UTC (Rejected), but the paper was screened again on 2026-10-09 06:08 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="clonidine" model-id="Clonidine_Davies1977_reference" status="rejected" stale="true" population="normotensive subjects" measured-compound="clonidine" parameterization="mechanistic" topology="1C"></div>

## Citation
Davies DS, Wing AM, Reid JL, Neill DM, Tippett P, Dollery CT. Pharmacokinetics and concentration-effect relationships of intervenous and oral clonidine. Clinical pharmacology and therapeutics 21(5):593–601 (1977).
  ·  DOI: [10.1002/cpt1977215593](https://doi.org/10.1002/cpt1977215593)

## Population and dosing

**Population:** normotensive subjects · condition healthy · age group adult · n = &gt;=5.

**Dosing:** 0.3 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| α (min⁻¹) | λ1 | 0.134 | min⁻¹ | 0.053 |
| t½α (min) | t1/2α | 10.8 | min | 4.7 |
| β (hr⁻¹) | kel | 0.084 | hr⁻¹ | 0.009 |
| t½β (hr) | t1/2β | 8.5 | hr | 0.9 |
| k₁₂ (min⁻¹) | k12 | 0.105 | min⁻¹ | 0.047 |
| k₂₁ (min⁻¹) | k21 | 0.022 | min⁻¹ | 0.004 |
| V₁ (L/kg) | V | 0.51 | L/kg | 0.11 |
| Vdss (L/kg) | Vss | 2.09 | L/kg | 0.19 |
| Cl (ml/min/kg) | CL | 3.05 | ml/min/kg | 0.54 |
| % dose in 24 hr urine | fe | 38.0 |  | 1.4 |
| Av. renal clearance* (ml/min/kg) | CLR | 1.82 | ml/min/kg | 0.34 |
| Nonrenal clearance† (ml/min/kg) | CLNR | 1.24 | ml/min/kg | 0.30 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.929). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clonidine, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| α (min⁻¹) | `Q67` · λ1 | 0.134 | min⁻¹ |  |  | 1/min | 0.053 | exact (1) | Davies_1977_table_2:row0:col1, Davies_1977_table_2:row0:col2, Davies_1977_table_2:row0:col3, Davies_1977_table_2:row0:col4, Davies_1977_table_2:row0:col5, Davies_1977_table_2:row0:col6, Davies_1977_table_2:row0:col7 |
| t½α (min) | `Q59` · t1/2α | 10.8 | min | 648 | s | min | 4.7 | llm (0.6) | Davies_1977_table_2:row1:col1, Davies_1977_table_2:row1:col2, Davies_1977_table_2:row1:col3, Davies_1977_table_2:row1:col4, Davies_1977_table_2:row1:col5, Davies_1977_table_2:row1:col6, Davies_1977_table_2:row1:col7 |
| β (hr⁻¹) | `Q47` · kel | 0.084 | hr⁻¹ | 2.333e-05 | 1/s | 1/h | 0.009 | exact (1) | Davies_1977_table_2:row2:col1, Davies_1977_table_2:row2:col2, Davies_1977_table_2:row2:col3, Davies_1977_table_2:row2:col4, Davies_1977_table_2:row2:col5, Davies_1977_table_2:row2:col6, Davies_1977_table_2:row2:col7 |
| t½β (hr) | `Q60` · t1/2β | 8.5 | hr | 3.06e+04 | s | h | 0.9 | llm (0.6) | Davies_1977_table_2:row3:col1, Davies_1977_table_2:row3:col2, Davies_1977_table_2:row3:col3, Davies_1977_table_2:row3:col4, Davies_1977_table_2:row3:col5, Davies_1977_table_2:row3:col6, Davies_1977_table_2:row3:col7 |
| k₁₂ (min⁻¹) | `Q301` · k12 | 0.105 | min⁻¹ | 0.00175 | 1/s | 1/min | 0.047 | exact (1) | Davies_1977_table_2:row4:col1, Davies_1977_table_2:row4:col2, Davies_1977_table_2:row4:col3, Davies_1977_table_2:row4:col4, Davies_1977_table_2:row4:col5, Davies_1977_table_2:row4:col6, Davies_1977_table_2:row4:col7 |
| k₂₁ (min⁻¹) | `Q302` · k21 | 0.022 | min⁻¹ | 0.0003667 | 1/s | 1/min | 0.004 | exact (1) | Davies_1977_table_2:row5:col1, Davies_1977_table_2:row5:col2, Davies_1977_table_2:row5:col3, Davies_1977_table_2:row5:col4, Davies_1977_table_2:row5:col5, Davies_1977_table_2:row5:col6, Davies_1977_table_2:row5:col7 |
| V₁ (L/kg) | `Q61` · V | 0.51 | L/kg | 0.0357 | m3 | l/kg | 0.11 | exact (1) | Davies_1977_table_2:row7:col1, Davies_1977_table_2:row7:col2, Davies_1977_table_2:row7:col3, Davies_1977_table_2:row7:col4, Davies_1977_table_2:row7:col5, Davies_1977_table_2:row7:col6, Davies_1977_table_2:row7:col7 |
| Vdss (L/kg) | `Q65` · Vss | 2.09 | L/kg | 0.1463 | m3 | l/kg | 0.19 | llm (0.6) | Davies_1977_table_2:row8:col1, Davies_1977_table_2:row8:col2, Davies_1977_table_2:row8:col3, Davies_1977_table_2:row8:col4, Davies_1977_table_2:row8:col5, Davies_1977_table_2:row8:col6, Davies_1977_table_2:row8:col7 |
| Cl (ml/min/kg) | `Q22` · CL | 3.05 | ml/min/kg | 3.558e-06 | m3/s | ml/(min·kg) | 0.54 | exact (1) | Davies_1977_table_2:row9:col1, Davies_1977_table_2:row9:col2, Davies_1977_table_2:row9:col3, Davies_1977_table_2:row9:col4, Davies_1977_table_2:row9:col5, Davies_1977_table_2:row9:col6, Davies_1977_table_2:row9:col7 |
| % dose in 24 hr urine | `Q44` · fe | 38.0 |  |  |  |  | 1.4 | llm (0.6) | Davies_1977_table_4:row0:col3, Davies_1977_table_4:row0:col4, Davies_1977_table_4:row0:col5, Davies_1977_table_4:row0:col6, Davies_1977_table_4:row0:col7, Davies_1977_table_4:row0:col8, Davies_1977_table_4:row1:col2, Davies_1977_table_4:row1:col3, Davies_1977_table_4:row1:col4, Davies_1977_table_4:row1:col5, Davies_1977_table_4:row1:col6, Davies_1977_table_4:row1:col7, Davies_1977_table_4:row1:col8 |
| Av. renal clearance* (ml/min/kg) | `Q26` · CLR | 1.82 | ml/min/kg | 2.123e-06 | m3/s | ml/(min·kg) | 0.34 | llm_confirmed (0.6) | Davies_1977_table_4:row2:col2, Davies_1977_table_4:row2:col3, Davies_1977_table_4:row2:col4, Davies_1977_table_4:row2:col5, Davies_1977_table_4:row2:col6, Davies_1977_table_4:row2:col7, Davies_1977_table_4:row2:col8 |
| Nonrenal clearance† (ml/min/kg) | `Q79` · CLNR | 1.24 | ml/min/kg | 1.447e-06 | m3/s | ml/(min·kg) | 0.30 | exact (1) | Davies_1977_table_4:row3:col2, Davies_1977_table_4:row3:col3, Davies_1977_table_4:row3:col4, Davies_1977_table_4:row3:col5, Davies_1977_table_4:row3:col6, Davies_1977_table_4:row3:col7, Davies_1977_table_4:row3:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'α (min⁻¹)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q47 ('k₁₀ (min⁻¹)', value '0.008') — already have one for this compound
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['Davies_1977_table_3:row0:col1', 'Davies_1977_table_3:row0:col2'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Davies_1977_table_3:row1:col1', 'Davies_1977_table_3:row1:col2'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Davies_1977_table_3:row2:col1', 'Davies_1977_table_3:row2:col2'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['Davies_1977_table_3:row3:col1', 'Davies_1977_table_3:row3:col2'])
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['Davies_1977_table_3:row4:col1', 'Davies_1977_table_3:row4:col2'])
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['Davies_1977_table_3:row5:col1', 'Davies_1977_table_3:row5:col2'])
- dropped unlinked row (NIL): 'SEM' — extend the ontology if this is a real PK parameter (source ['Davies_1977_table_3:row6:col1', 'Davies_1977_table_3:row6:col2'])
- dropped duplicate Q60 ('t½β‡ (hr)', value '7.7') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V₁ (L/kg)' is the general volume)
- status held at route_to_review — not promoted

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3, 4
- transposed table Davies_1977_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Davies_1977_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.929 (26/28 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | clonidine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | clonidine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Davies_1977_table_2:row9:col1', 'Davies_1977_table_2:row9:col2', 'Davies_1977_table_2:row9:col3', 'Davies_1977_table_2:row9:col4', 'Davies_1977_table_2:row9:col5', 'Davies_1977_table_2:row9:col6', 'Davies_1977_table_2:row9:col7'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Davies_1977_table_4:row2:col2', 'Davies_1977_table_4:row2:col3', 'Davies_1977_table_4:row2:col4', 'Davies_1977_table_4:row2:col5', 'Davies_1977_table_4:row2:col6', 'Davies_1977_table_4:row2:col7', 'Davies_1977_table_4:row2:col8'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Davies_1977_table_2:row4:col1', 'Davies_1977_table_2:row4:col2', 'Davies_1977_table_2:row4:col3', 'Davies_1977_table_2:row4:col4', 'Davies_1977_table_2:row4:col5', 'Davies_1977_table_2:row4:col6', 'Davies_1977_table_2:row4:col7'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Davies_1977_table_2:row5:col1', 'Davies_1977_table_2:row5:col2', 'Davies_1977_table_2:row5:col3', 'Davies_1977_table_2:row5:col4', 'Davies_1977_table_2:row5:col5', 'Davies_1977_table_2:row5:col6', 'Davies_1977_table_2:row5:col7'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Davies_1977_table_2:row2:col1', 'Davies_1977_table_2:row2:col2', 'Davies_1977_table_2:row2:col3', 'Davies_1977_table_2:row2:col4', 'Davies_1977_table_2:row2:col5', 'Davies_1977_table_2:row2:col6', 'Davies_1977_table_2:row2:col7'] |
| C5_dimension_Q59 | pass | [time] |  | ['Davies_1977_table_2:row1:col1', 'Davies_1977_table_2:row1:col2', 'Davies_1977_table_2:row1:col3', 'Davies_1977_table_2:row1:col4', 'Davies_1977_table_2:row1:col5', 'Davies_1977_table_2:row1:col6', 'Davies_1977_table_2:row1:col7'] |
| C5_dimension_Q60 | pass | [time] |  | ['Davies_1977_table_2:row3:col1', 'Davies_1977_table_2:row3:col2', 'Davies_1977_table_2:row3:col3', 'Davies_1977_table_2:row3:col4', 'Davies_1977_table_2:row3:col5', 'Davies_1977_table_2:row3:col6', 'Davies_1977_table_2:row3:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Davies_1977_table_2:row7:col1', 'Davies_1977_table_2:row7:col2', 'Davies_1977_table_2:row7:col3', 'Davies_1977_table_2:row7:col4', 'Davies_1977_table_2:row7:col5', 'Davies_1977_table_2:row7:col6', 'Davies_1977_table_2:row7:col7'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Davies_1977_table_2:row8:col1', 'Davies_1977_table_2:row8:col2', 'Davies_1977_table_2:row8:col3', 'Davies_1977_table_2:row8:col4', 'Davies_1977_table_2:row8:col5', 'Davies_1977_table_2:row8:col6', 'Davies_1977_table_2:row8:col7'] |
| C5_dimension_Q67 | fail | 1 / [time] | min⁻¹ | ['Davies_1977_table_2:row0:col1', 'Davies_1977_table_2:row0:col2', 'Davies_1977_table_2:row0:col3', 'Davies_1977_table_2:row0:col4', 'Davies_1977_table_2:row0:col5', 'Davies_1977_table_2:row0:col6', 'Davies_1977_table_2:row0:col7'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['Davies_1977_table_4:row3:col2', 'Davies_1977_table_4:row3:col3', 'Davies_1977_table_4:row3:col4', 'Davies_1977_table_4:row3:col5', 'Davies_1977_table_4:row3:col6', 'Davies_1977_table_4:row3:col7', 'Davies_1977_table_4:row3:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.05 | ['Davies_1977_table_2:row9:col1', 'Davies_1977_table_2:row9:col2', 'Davies_1977_table_2:row9:col3', 'Davies_1977_table_2:row9:col4', 'Davies_1977_table_2:row9:col5', 'Davies_1977_table_2:row9:col6', 'Davies_1977_table_2:row9:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.8 L/h | ['Davies_1977_table_2:row9:col1', 'Davies_1977_table_2:row9:col2', 'Davies_1977_table_2:row9:col3', 'Davies_1977_table_2:row9:col4', 'Davies_1977_table_2:row9:col5', 'Davies_1977_table_2:row9:col6', 'Davies_1977_table_2:row9:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 35.7 L | ['Davies_1977_table_2:row7:col1', 'Davies_1977_table_2:row7:col2', 'Davies_1977_table_2:row7:col3', 'Davies_1977_table_2:row7:col4', 'Davies_1977_table_2:row7:col5', 'Davies_1977_table_2:row7:col6', 'Davies_1977_table_2:row7:col7'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 146 L | ['Davies_1977_table_2:row8:col1', 'Davies_1977_table_2:row8:col2', 'Davies_1977_table_2:row8:col3', 'Davies_1977_table_2:row8:col4', 'Davies_1977_table_2:row8:col5', 'Davies_1977_table_2:row8:col6', 'Davies_1977_table_2:row8:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclonidine%5D%20Clonidine_Davies1977_reference&body=Drug%3A%20clonidine%0ARecord%3A%20Clonidine_Davies1977_reference%0APaper%3A%20Davies_1977%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clonidine/Clonidine_Davies1977_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-09 06:08 UTC</sub>
