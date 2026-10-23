<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;oprelvekin&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/&quot;},{&quot;label&quot;:&quot;Kheifetz_2014 \u00b7 2_comp_pe_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_1_comp_pe_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_1_comp_pe_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_1_comp_pe_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_2_comp_ce_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_2_comp_ce_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_2_comp_ce_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oprelvekin_Kheifetz2014_3_comp_pe_model&quot;,&quot;label&quot;:&quot;Kheifetz_2014_3_comp_pe_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_3_comp_pe_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oprelvekin — `Oprelvekin_Kheifetz2014_2_comp_pe_model`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Oprelvekin clearance of 0.21 l/h and central volume of 0.11 l are physically impossible, indicating unit or scale extraction errors.

<div class="pk-model-meta" hidden drug="oprelvekin" model-id="Oprelvekin_Kheifetz2014_2_comp_pe_model" status="rejected" stale="false" population="healthy males" measured-compound="oprelvekin" parameterization="mechanistic" topology="2C"></div>

## Citation
Kheifetz Y, Elishmereni M, Agur Z. Complex pattern of interleukin-11-induced inflammation revealed by mathematically modeling the dynamics of C-reactive protein. Journal of pharmacokinetics and pharmacodynamics 41(5):479–491 (2014).
  ·  DOI: [10.1007/s10928-014-9383-z](https://doi.org/10.1007/s10928-014-9383-z)

## Population and dosing

**Population:** healthy males · condition healthy · age group adult.

**Dosing:** 3.5 mg, sc, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL, l·h⁻¹ | CL | 0.21 | l·h⁻¹ |
| V₁, l | V1 | 0.11 | l |
| Q, l·h⁻¹ | Q | 0.003 | l·h⁻¹ |
| V₂, l | V2 | 0.34 | l |
| b | equation variable | 0.012 |  |
| ka (1/h) | kabs | 0.152 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Oprelvekin clearance of 0.21 l/h and central volume of 0.11 l are physically impossible, indicating unit or scale extraction errors.**

The total clearance of 0.21 l/h is orders of magnitude below physiological expectations for a systemic agent. Similarly, the central volume of distribution of 0.11 l is implausibly small for a distributed drug. These magnitudes confirm that the extracted parameters do not represent true pharmacokinetic values but rather contain extraction mistakes. Extracted — oprelvekin: CL 0.21 l·h⁻¹, V1 0.11 l, Q 0.003 l·h⁻¹, V2 0.34 l, kabs 0.152 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of b: this record has 0.012, the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL, l·h⁻¹ | `Q22` · CL | 0.21 | l·h⁻¹ | 5.833e-08 | m3/s | l/h | exact (1) | Kheifetz_2014_table_p3_1:row2:col1, Kheifetz_2014_table_p3_1:row2:col2, Kheifetz_2014_table_p3_1:row2:col3, Kheifetz_2014_table_p3_1:row2:col4, Kheifetz_2014_table_p3_1:row2:col5, Kheifetz_2014_table_p3_1:row2:col6, Kheifetz_2014_table_p3_1:row2:col7, Kheifetz_2014_table_p3_1:row2:col8 |
| V₁, l | `Q63` · V1 | 0.11 | l | 0.00011 | m3 | l | exact (1) | Kheifetz_2014_table_p3_1:row3:col1, Kheifetz_2014_table_p3_1:row3:col2, Kheifetz_2014_table_p3_1:row3:col3, Kheifetz_2014_table_p3_1:row3:col4, Kheifetz_2014_table_p3_1:row3:col5, Kheifetz_2014_table_p3_1:row3:col6, Kheifetz_2014_table_p3_1:row3:col7, Kheifetz_2014_table_p3_1:row3:col8 |
| Q, l·h⁻¹ | `Q30` · Q | 0.003 | l·h⁻¹ | 8.333e-10 | m3/s | l/h | exact (1) | Kheifetz_2014_table_p3_1:row4:col1, Kheifetz_2014_table_p3_1:row4:col2, Kheifetz_2014_table_p3_1:row4:col3, Kheifetz_2014_table_p3_1:row4:col4, Kheifetz_2014_table_p3_1:row4:col5, Kheifetz_2014_table_p3_1:row4:col6, Kheifetz_2014_table_p3_1:row4:col7, Kheifetz_2014_table_p3_1:row4:col8 |
| V₂, l | `Q64` · V2 | 0.34 | l | 0.00034 | m3 | l | exact (1) | Kheifetz_2014_table_p3_1:row5:col1, Kheifetz_2014_table_p3_1:row5:col2, Kheifetz_2014_table_p3_1:row5:col3, Kheifetz_2014_table_p3_1:row5:col4, Kheifetz_2014_table_p3_1:row5:col5, Kheifetz_2014_table_p3_1:row5:col6, Kheifetz_2014_table_p3_1:row5:col7, Kheifetz_2014_table_p3_1:row5:col8 |
| b | `Q900` · equation variable | 0.012 |  |  |  |  | llm (0.6) | Kheifetz_2014_table_p3_1:row9:col1, Kheifetz_2014_table_p3_1:row9:col2, Kheifetz_2014_table_p3_1:row9:col3, Kheifetz_2014_table_p3_1:row9:col4, Kheifetz_2014_table_p3_1:row9:col5, Kheifetz_2014_table_p3_1:row9:col6, Kheifetz_2014_table_p3_1:row9:col7, Kheifetz_2014_table_p3_1:row9:col8 |
| ka (1/h) | `Q49` · kabs | 0.152 | 1/h | 4.222e-05 | 1/s | 1/h | review_gapfill (0.7) | Myzithras_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped diagnostic row 'CNᵇ' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped unlinked row (NIL): 'CNᶜ' — extend the ontology if this is a real PK parameter (source ['Kheifetz_2014_table_p3_1:row11:col1', 'Kheifetz_2014_table_p3_1:row11:col3', 'Kheifetz_2014_table_p3_1:row11:col5', 'Kheifetz_2014_table_p3_1:row11:col7'])
- dropped unlinked row (NIL): 'nLL' — extend the ontology if this is a real PK parameter (source ['Kheifetz_2014_table_p3_1:row12:col1', 'Kheifetz_2014_table_p3_1:row12:col2', 'Kheifetz_2014_table_p3_1:row12:col3', 'Kheifetz_2014_table_p3_1:row12:col4', 'Kheifetz_2014_table_p3_1:row12:col5', 'Kheifetz_2014_table_p3_1:row12:col6', 'Kheifetz_2014_table_p3_1:row12:col7', 'Kheifetz_2014_table_p3_1:row12:col8'])
- dropped unlinked row (NIL): 'AIC' — extend the ontology if this is a real PK parameter (source ['Kheifetz_2014_table_p3_1:row13:col1', 'Kheifetz_2014_table_p3_1:row13:col2', 'Kheifetz_2014_table_p3_1:row13:col3', 'Kheifetz_2014_table_p3_1:row13:col4', 'Kheifetz_2014_table_p3_1:row13:col5', 'Kheifetz_2014_table_p3_1:row13:col6', 'Kheifetz_2014_table_p3_1:row13:col7', 'Kheifetz_2014_table_p3_1:row13:col8'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oprelvekin
- population split: '2 comp. pe model' subgroup of Kheifetz_2014 (paper reports 4 populations: 1 comp. pe model, 2 comp. ce model, 2 comp. pe model, 3 comp. pe model)
- molar mass: none found for 'oprelvekin' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Myzithras_2022's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- transposed table Kheifetz_2014_table_p3_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b]` | 0.012 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl].value` | 0.21 | 14.8 | mismatch |
| `gpt-oss-120b` | `parameters[ka]` | 0.152 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q].value` | 0.003 | 0.472 | mismatch |
| `gpt-oss-120b` | `parameters[v1].value` | 0.11 | 4.8 | mismatch |
| `gpt-oss-120b` | `parameters[v2].value` | 0.34 | 12.9 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kheifetz_2014_table_p3_1:row2:col1', 'Kheifetz_2014_table_p3_1:row2:col2', 'Kheifetz_2014_table_p3_1:row2:col3', 'Kheifetz_2014_table_p3_1:row2:col4', 'Kheifetz_2014_table_p3_1:row2:col5', 'Kheifetz_2014_table_p3_1:row2:col6', 'Kheifetz_2014_table_p3_1:row2:col7', 'Kheifetz_2014_table_p3_1:row2:col8'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Kheifetz_2014_table_p3_1:row4:col1', 'Kheifetz_2014_table_p3_1:row4:col2', 'Kheifetz_2014_table_p3_1:row4:col3', 'Kheifetz_2014_table_p3_1:row4:col4', 'Kheifetz_2014_table_p3_1:row4:col5', 'Kheifetz_2014_table_p3_1:row4:col6', 'Kheifetz_2014_table_p3_1:row4:col7', 'Kheifetz_2014_table_p3_1:row4:col8'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Myzithras_2022:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Kheifetz_2014_table_p3_1:row3:col1', 'Kheifetz_2014_table_p3_1:row3:col2', 'Kheifetz_2014_table_p3_1:row3:col3', 'Kheifetz_2014_table_p3_1:row3:col4', 'Kheifetz_2014_table_p3_1:row3:col5', 'Kheifetz_2014_table_p3_1:row3:col6', 'Kheifetz_2014_table_p3_1:row3:col7', 'Kheifetz_2014_table_p3_1:row3:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Kheifetz_2014_table_p3_1:row5:col1', 'Kheifetz_2014_table_p3_1:row5:col2', 'Kheifetz_2014_table_p3_1:row5:col3', 'Kheifetz_2014_table_p3_1:row5:col4', 'Kheifetz_2014_table_p3_1:row5:col5', 'Kheifetz_2014_table_p3_1:row5:col6', 'Kheifetz_2014_table_p3_1:row5:col7', 'Kheifetz_2014_table_p3_1:row5:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.21 | ['Kheifetz_2014_table_p3_1:row2:col1', 'Kheifetz_2014_table_p3_1:row2:col2', 'Kheifetz_2014_table_p3_1:row2:col3', 'Kheifetz_2014_table_p3_1:row2:col4', 'Kheifetz_2014_table_p3_1:row2:col5', 'Kheifetz_2014_table_p3_1:row2:col6', 'Kheifetz_2014_table_p3_1:row2:col7', 'Kheifetz_2014_table_p3_1:row2:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.21 L/h | ['Kheifetz_2014_table_p3_1:row2:col1', 'Kheifetz_2014_table_p3_1:row2:col2', 'Kheifetz_2014_table_p3_1:row2:col3', 'Kheifetz_2014_table_p3_1:row2:col4', 'Kheifetz_2014_table_p3_1:row2:col5', 'Kheifetz_2014_table_p3_1:row2:col6', 'Kheifetz_2014_table_p3_1:row2:col7', 'Kheifetz_2014_table_p3_1:row2:col8'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.11 L | ['Kheifetz_2014_table_p3_1:row3:col1', 'Kheifetz_2014_table_p3_1:row3:col2', 'Kheifetz_2014_table_p3_1:row3:col3', 'Kheifetz_2014_table_p3_1:row3:col4', 'Kheifetz_2014_table_p3_1:row3:col5', 'Kheifetz_2014_table_p3_1:row3:col6', 'Kheifetz_2014_table_p3_1:row3:col7', 'Kheifetz_2014_table_p3_1:row3:col8'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.34 L | ['Kheifetz_2014_table_p3_1:row5:col1', 'Kheifetz_2014_table_p3_1:row5:col2', 'Kheifetz_2014_table_p3_1:row5:col3', 'Kheifetz_2014_table_p3_1:row5:col4', 'Kheifetz_2014_table_p3_1:row5:col5', 'Kheifetz_2014_table_p3_1:row5:col6', 'Kheifetz_2014_table_p3_1:row5:col7', 'Kheifetz_2014_table_p3_1:row5:col8'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boprelvekin%5D%20Oprelvekin_Kheifetz2014_2_comp_pe_model&body=Drug%3A%20oprelvekin%0ARecord%3A%20Oprelvekin_Kheifetz2014_2_comp_pe_model%0APaper%3A%20Kheifetz_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oprelvekin/Oprelvekin_Kheifetz2014_2_comp_pe_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:05 UTC</sub>
