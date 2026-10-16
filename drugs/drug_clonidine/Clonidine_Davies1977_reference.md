<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;clonidine&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/&quot;},{&quot;label&quot;:&quot;Davies_1977 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/Clonidine_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clonidine — `Clonidine_Davies1977_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.929), gpt-oss:120b (not confirmed, agreement 0.933). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clonidine, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:25:35.620024+00:00) predates the upstream re-run (2026-10-09 06:08:27.328559+00:00). Current validate status: `rejected`.

## Citation
Davies DS et al., Pharmacokinetics and concentration-effe…, Clinical pharmacology and t… (1977)
  ·  DOI: [10.1002/cpt1977215593](https://doi.org/10.1002/cpt1977215593)

<div class="pk-model-meta" hidden drug="clonidine" model-id="Clonidine_Davies1977_reference" status="rejected" stale="true" population="normotensive subjects" measured-compound="clonidine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| α (min⁻¹) | `Q67` · λ1 | 0.134 | min⁻¹ | not captured | [1] / [min] | 0.053 | exact (1.0) | Davies_1977_table_2:row0:col1, Davies_1977_table_2:row0:col2, Davies_1977_table_2:row0:col3, Davies_1977_table_2:row0:col4, Davies_1977_table_2:row0:col5, Davies_1977_table_2:row0:col6, Davies_1977_table_2:row0:col7 | — | not captured |
| t½α (min) | `Q59` · t1/2α | 10.8 | min | 648.0 | [min] | 4.7 | llm (0.6) | Davies_1977_table_2:row1:col1, Davies_1977_table_2:row1:col2, Davies_1977_table_2:row1:col3, Davies_1977_table_2:row1:col4, Davies_1977_table_2:row1:col5, Davies_1977_table_2:row1:col6, Davies_1977_table_2:row1:col7 | — | not captured |
| β (hr⁻¹) | `Q47` · kel | 0.084 | hr⁻¹ | 2.3333333333333336e-05 | [1] / [h] | 0.009 | exact (1.0) | Davies_1977_table_2:row2:col1, Davies_1977_table_2:row2:col2, Davies_1977_table_2:row2:col3, Davies_1977_table_2:row2:col4, Davies_1977_table_2:row2:col5, Davies_1977_table_2:row2:col6, Davies_1977_table_2:row2:col7 | — | not captured |
| t½β (hr) | `Q60` · t1/2β | 8.5 | hr | 30600.0 | [h] | 0.9 | llm (0.6) | Davies_1977_table_2:row3:col1, Davies_1977_table_2:row3:col2, Davies_1977_table_2:row3:col3, Davies_1977_table_2:row3:col4, Davies_1977_table_2:row3:col5, Davies_1977_table_2:row3:col6, Davies_1977_table_2:row3:col7 | — | not captured |
| k₁₂ (min⁻¹) | `Q301` · k12 | 0.105 | min⁻¹ | 0.0017499999999999998 | [1] / [min] | 0.047 | exact (1.0) | Davies_1977_table_2:row4:col1, Davies_1977_table_2:row4:col2, Davies_1977_table_2:row4:col3, Davies_1977_table_2:row4:col4, Davies_1977_table_2:row4:col5, Davies_1977_table_2:row4:col6, Davies_1977_table_2:row4:col7 | — | not captured |
| k₂₁ (min⁻¹) | `Q302` · k21 | 0.022 | min⁻¹ | 0.0003666666666666666 | [1] / [min] | 0.004 | exact (1.0) | Davies_1977_table_2:row5:col1, Davies_1977_table_2:row5:col2, Davies_1977_table_2:row5:col3, Davies_1977_table_2:row5:col4, Davies_1977_table_2:row5:col5, Davies_1977_table_2:row5:col6, Davies_1977_table_2:row5:col7 | — | not captured |
| V₁ (L/kg) | `Q61` · V | 0.51 | L/kg | 0.0357 | [l] / [kg] | 0.11 | exact (1.0) | Davies_1977_table_2:row7:col1, Davies_1977_table_2:row7:col2, Davies_1977_table_2:row7:col3, Davies_1977_table_2:row7:col4, Davies_1977_table_2:row7:col5, Davies_1977_table_2:row7:col6, Davies_1977_table_2:row7:col7 | — | not captured |
| Vdss (L/kg) | `Q65` · Vss | 2.09 | L/kg | 0.14629999999999999 | [l] / [kg] | 0.19 | llm (0.6) | Davies_1977_table_2:row8:col1, Davies_1977_table_2:row8:col2, Davies_1977_table_2:row8:col3, Davies_1977_table_2:row8:col4, Davies_1977_table_2:row8:col5, Davies_1977_table_2:row8:col6, Davies_1977_table_2:row8:col7 | — | not captured |
| Cl (ml/min/kg) | `Q22` · CL | 3.05 | ml/min/kg | 3.558333333333333e-06 | [ml] / [[min] · [kg]] | 0.54 | exact (1.0) | Davies_1977_table_2:row9:col1, Davies_1977_table_2:row9:col2, Davies_1977_table_2:row9:col3, Davies_1977_table_2:row9:col4, Davies_1977_table_2:row9:col5, Davies_1977_table_2:row9:col6, Davies_1977_table_2:row9:col7 | — | not captured |
| % dose in 24 hr urine | `Q44` · fe | 38.0 | not captured | not captured | not captured | 1.4 | llm (0.6) | Davies_1977_table_4:row0:col3, Davies_1977_table_4:row0:col4, Davies_1977_table_4:row0:col5, Davies_1977_table_4:row0:col6, Davies_1977_table_4:row0:col7, Davies_1977_table_4:row0:col8, Davies_1977_table_4:row1:col2, Davies_1977_table_4:row1:col3, Davies_1977_table_4:row1:col4, Davies_1977_table_4:row1:col5, Davies_1977_table_4:row1:col6, Davies_1977_table_4:row1:col7, Davies_1977_table_4:row1:col8 | — | not captured |
| Av. renal clearance* (ml/min/kg) | `Q26` · CLR | 1.82 | ml/min/kg | 2.1233333333333335e-06 | [ml] / [[min] · [kg]] | 0.34 | llm_confirmed (0.6) | Davies_1977_table_4:row2:col2, Davies_1977_table_4:row2:col3, Davies_1977_table_4:row2:col4, Davies_1977_table_4:row2:col5, Davies_1977_table_4:row2:col6, Davies_1977_table_4:row2:col7, Davies_1977_table_4:row2:col8 | — | not captured |
| Nonrenal clearance† (ml/min/kg) | `Q79` · CLNR | 1.24 | ml/min/kg | 1.4466666666666667e-06 | [ml] / [[min] · [kg]] | 0.30 | exact (1.0) | Davies_1977_table_4:row3:col2, Davies_1977_table_4:row3:col3, Davies_1977_table_4:row3:col4, Davies_1977_table_4:row3:col5, Davies_1977_table_4:row3:col6, Davies_1977_table_4:row3:col7, Davies_1977_table_4:row3:col8 | — | not captured |

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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.929 (26/28 fields) | 2 |
| `gpt-oss:120b` | not confirmed | 0.933 (28/30 fields) | 2 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | clonidine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | clonidine | unknown | mismatch |
| `gpt-oss:120b` | `parameters[2]` | not captured | 73.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1].parameter_id` | Q61 | Q63 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Davies_1977_table_2:row9:col1', 'Davies_1977_table_2:row9:col2', 'Davies_1977_table_2:row9:col3', 'Davies_1977_table_2:row9:col4', 'Davies_1977_table_2:row9:col5', 'Davies_1977_table_2:row9:col6', 'Davies_1977_table_2:row9:col7'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Davies_1977_table_4:row2:col2', 'Davies_1977_table_4:row2:col3', 'Davies_1977_table_4:row2:col4', 'Davies_1977_table_4:row2:col5', 'Davies_1977_table_4:row2:col6', 'Davies_1977_table_4:row2:col7', 'Davies_1977_table_4:row2:col8'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Davies_1977_table_2:row4:col1', 'Davies_1977_table_2:row4:col2', 'Davies_1977_table_2:row4:col3', 'Davies_1977_table_2:row4:col4', 'Davies_1977_table_2:row4:col5', 'Davies_1977_table_2:row4:col6', 'Davies_1977_table_2:row4:col7'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Davies_1977_table_2:row5:col1', 'Davies_1977_table_2:row5:col2', 'Davies_1977_table_2:row5:col3', 'Davies_1977_table_2:row5:col4', 'Davies_1977_table_2:row5:col5', 'Davies_1977_table_2:row5:col6', 'Davies_1977_table_2:row5:col7'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Davies_1977_table_2:row2:col1', 'Davies_1977_table_2:row2:col2', 'Davies_1977_table_2:row2:col3', 'Davies_1977_table_2:row2:col4', 'Davies_1977_table_2:row2:col5', 'Davies_1977_table_2:row2:col6', 'Davies_1977_table_2:row2:col7'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Davies_1977_table_2:row1:col1', 'Davies_1977_table_2:row1:col2', 'Davies_1977_table_2:row1:col3', 'Davies_1977_table_2:row1:col4', 'Davies_1977_table_2:row1:col5', 'Davies_1977_table_2:row1:col6', 'Davies_1977_table_2:row1:col7'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Davies_1977_table_2:row3:col1', 'Davies_1977_table_2:row3:col2', 'Davies_1977_table_2:row3:col3', 'Davies_1977_table_2:row3:col4', 'Davies_1977_table_2:row3:col5', 'Davies_1977_table_2:row3:col6', 'Davies_1977_table_2:row3:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Davies_1977_table_2:row7:col1', 'Davies_1977_table_2:row7:col2', 'Davies_1977_table_2:row7:col3', 'Davies_1977_table_2:row7:col4', 'Davies_1977_table_2:row7:col5', 'Davies_1977_table_2:row7:col6', 'Davies_1977_table_2:row7:col7'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Davies_1977_table_2:row8:col1', 'Davies_1977_table_2:row8:col2', 'Davies_1977_table_2:row8:col3', 'Davies_1977_table_2:row8:col4', 'Davies_1977_table_2:row8:col5', 'Davies_1977_table_2:row8:col6', 'Davies_1977_table_2:row8:col7'] |
| C5_dimension_Q67 | fail | 1 / [time] | min⁻¹ | not captured | not captured | ['Davies_1977_table_2:row0:col1', 'Davies_1977_table_2:row0:col2', 'Davies_1977_table_2:row0:col3', 'Davies_1977_table_2:row0:col4', 'Davies_1977_table_2:row0:col5', 'Davies_1977_table_2:row0:col6', 'Davies_1977_table_2:row0:col7'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Davies_1977_table_4:row3:col2', 'Davies_1977_table_4:row3:col3', 'Davies_1977_table_4:row3:col4', 'Davies_1977_table_4:row3:col5', 'Davies_1977_table_4:row3:col6', 'Davies_1977_table_4:row3:col7', 'Davies_1977_table_4:row3:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.05 | not captured | not captured | ['Davies_1977_table_2:row9:col1', 'Davies_1977_table_2:row9:col2', 'Davies_1977_table_2:row9:col3', 'Davies_1977_table_2:row9:col4', 'Davies_1977_table_2:row9:col5', 'Davies_1977_table_2:row9:col6', 'Davies_1977_table_2:row9:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.8 L/h | not captured | not captured | ['Davies_1977_table_2:row9:col1', 'Davies_1977_table_2:row9:col2', 'Davies_1977_table_2:row9:col3', 'Davies_1977_table_2:row9:col4', 'Davies_1977_table_2:row9:col5', 'Davies_1977_table_2:row9:col6', 'Davies_1977_table_2:row9:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 35.7 L | not captured | not captured | ['Davies_1977_table_2:row7:col1', 'Davies_1977_table_2:row7:col2', 'Davies_1977_table_2:row7:col3', 'Davies_1977_table_2:row7:col4', 'Davies_1977_table_2:row7:col5', 'Davies_1977_table_2:row7:col6', 'Davies_1977_table_2:row7:col7'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 146 L | not captured | not captured | ['Davies_1977_table_2:row8:col1', 'Davies_1977_table_2:row8:col2', 'Davies_1977_table_2:row8:col3', 'Davies_1977_table_2:row8:col4', 'Davies_1977_table_2:row8:col5', 'Davies_1977_table_2:row8:col6', 'Davies_1977_table_2:row8:col7'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_clonidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Davies_1977` / `Davies_1977::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-09 06:08 UTC</sub>
