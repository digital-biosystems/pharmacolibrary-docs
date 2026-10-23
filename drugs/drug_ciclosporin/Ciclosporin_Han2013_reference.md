<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ciclosporin&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/&quot;},{&quot;label&quot;:&quot;Han_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ciclosporin_Kauv2025_reference&quot;,&quot;label&quot;:&quot;Kauv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/Ciclosporin_Kauv2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ciclosporin_Han2013_reference&quot;,&quot;label&quot;:&quot;Han_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/Ciclosporin_Han2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ciclosporin — `Ciclosporin_Han2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Ciclosporin model intercompartmental rate constants were left at library defaults rather than using the paper's estimates.

<div class="pk-model-meta" hidden drug="ciclosporin" model-id="Ciclosporin_Han2013_reference" status="needs_review" stale="false" population="transplant recipients" measured-compound="cyclosporine" parameterization="apparent" topology="2C"></div>

## Citation
Han K, Pillai VC, Venkataramanan R. Population pharmacokinetics of cyclosporine in transplant recipients. The AAPS journal 15(4):901–912 (2013).
  ·  DOI: [10.1208/s12248-013-9500-8](https://doi.org/10.1208/s12248-013-9500-8)

## Population and dosing

**Population:** transplant recipients · condition transplantation · age group adult.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference.svg" alt="Ciclosporin_Han2013_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 23.5 | L/h |
| CL/F (L/h) | CL/F | 53 | L/h |
| V (L) | V | 94.4 | L |
| V/F (L) | V/F | 227 | L |
| ka (h -1 ) | kabs | 1.21 | h -1 |
| t lag (h) | tlag | 0.25 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ciclosporin model intercompartmental rate constants were left at library defaults rather than using the paper's estimates.**

The record lists clearance, volume, and absorption parameters, but lacks values for the two intercompartmental rates. These missing parameters were filled with placeholder values, making the simulated profile unsupported by the publication. The apparent assumption of bioavailability equal to one and no molar correction further diverges from explicit experimental reporting. Extracted — ciclosporin: CL 23.5 L/h, CL/F 53 L/h, V 94.4 L, V/F 227 L, kabs 1.21 h -1, tlag 0.25 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cyclosporine, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 23.5 | L/h | 6.528e-06 | m3/s | l/h | exact (1) | Han_2013_table_2:row2:col1, Han_2013_table_2:row2:col2, Han_2013_table_2:row2:col3, Han_2013_table_2:row2:col6, Han_2013_table_2:row2:col16, Han_2013_table_2:row2:col28, Han_2013_table_2:row2:col29, Han_2013_table_2:row2:col30, Han_2013_table_2:row2:col35, Han_2013_table_2:row2:col36, Han_2013_table_2:row2:col37 |
| CL/F (L/h) | `Q27` · CL/F | 53 | L/h | 1.472e-05 | m3/s | l/h | exact (1) | Han_2013_table_2:row3:col4, Han_2013_table_2:row3:col5, Han_2013_table_2:row3:col7, Han_2013_table_2:row3:col8, Han_2013_table_2:row3:col11, Han_2013_table_2:row3:col12, Han_2013_table_2:row3:col13, Han_2013_table_2:row3:col14, Han_2013_table_2:row3:col15, Han_2013_table_2:row3:col17, Han_2013_table_2:row3:col19, Han_2013_table_2:row3:col20, Han_2013_table_2:row3:col21, Han_2013_table_2:row3:col22, Han_2013_table_2:row3:col23, Han_2013_table_2:row3:col24, Han_2013_table_2:row3:col25, Han_2013_table_2:row3:col26, Han_2013_table_2:row3:col27, Han_2013_table_2:row3:col31, Han_2013_table_2:row3:col32, Han_2013_table_2:row3:col33, Han_2013_table_2:row3:col34, Han_2013_table_2:row3:col38 |
| V (L) | `Q61` · V | 94.4 | L | 0.0944 | m3 | l | exact (1) | Han_2013_table_2:row4:col2, Han_2013_table_2:row4:col3, Han_2013_table_2:row4:col6, Han_2013_table_2:row4:col28, Han_2013_table_2:row4:col29, Han_2013_table_2:row4:col30, Han_2013_table_2:row4:col35, Han_2013_table_2:row4:col36, Han_2013_table_2:row4:col37 |
| V/F (L) | `Q76` · V/F | 227 | L | 0.227 | m3 | l | exact (1) | Han_2013_table_2:row5:col5, Han_2013_table_2:row5:col7, Han_2013_table_2:row5:col11, Han_2013_table_2:row5:col12, Han_2013_table_2:row5:col13, Han_2013_table_2:row5:col15, Han_2013_table_2:row5:col17, Han_2013_table_2:row5:col19, Han_2013_table_2:row5:col20, Han_2013_table_2:row5:col21, Han_2013_table_2:row5:col22, Han_2013_table_2:row5:col23, Han_2013_table_2:row5:col24, Han_2013_table_2:row5:col25, Han_2013_table_2:row5:col26, Han_2013_table_2:row5:col27, Han_2013_table_2:row5:col31, Han_2013_table_2:row5:col32, Han_2013_table_2:row5:col33, Han_2013_table_2:row5:col34, Han_2013_table_2:row5:col38 |
| ka (h -1 ) | `Q49` · kabs | 1.21 | h -1 | 0.0003361 | 1/s | 1/h | review_gapfill (0.7) | Kauv_2025:review |
| t lag (h) | `Q83` · tlag | 0.25 | h | 900 | s | h | review_gapfill (0.7) | Kauv_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12', 'k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column '(17)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(18)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(19)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(21)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(23)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(25)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(27)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(28)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(29)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(30)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(31)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(33)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(34)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(35)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(36)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(37)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(38)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(39)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(40)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(41)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(42)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(43)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(44)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(45)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(46)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(47)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(48)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(49)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(50)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(51)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(53)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(54)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(22)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(32)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(52)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(20)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(24)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'CMPT' — extend the ontology if this is a real PK parameter (source ['Han_2013_table_2:row1:col1', 'Han_2013_table_2:row1:col2', 'Han_2013_table_2:row1:col3', 'Han_2013_table_2:row1:col5', 'Han_2013_table_2:row1:col7', 'Han_2013_table_2:row1:col9', 'Han_2013_table_2:row1:col11', 'Han_2013_table_2:row1:col12', 'Han_2013_table_2:row1:col13', 'Han_2013_table_2:row1:col14', 'Han_2013_table_2:row1:col15', 'Han_2013_table_2:row1:col17', 'Han_2013_table_2:row1:col18', 'Han_2013_table_2:row1:col19', 'Han_2013_table_2:row1:col20', 'Han_2013_table_2:row1:col21', 'Han_2013_table_2:row1:col22', 'Han_2013_table_2:row1:col23', 'Han_2013_table_2:row1:col24', 'Han_2013_table_2:row1:col25', 'Han_2013_table_2:row1:col26', 'Han_2013_table_2:row1:col27', 'Han_2013_table_2:row1:col28', 'Han_2013_table_2:row1:col29', 'Han_2013_table_2:row1:col30', 'Han_2013_table_2:row1:col31', 'Han_2013_table_2:row1:col32', 'Han_2013_table_2:row1:col33', 'Han_2013_table_2:row1:col34', 'Han_2013_table_2:row1:col35', 'Han_2013_table_2:row1:col37', 'Han_2013_table_2:row1:col38'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cyclosporine
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- gap-filled Q49 (kabs) from Kauv_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Kauv_2025's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- transposed table Han_2013_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Han_2013_table_2:row4:col1 = '18a'
- unparsed cell Han_2013_table_2:row5:col14 = '76.6a'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (6/10 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 1.21 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag]` | 0.25 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cyclosporine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cyclosporine | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Han_2013_table_2:row2:col1', 'Han_2013_table_2:row2:col2', 'Han_2013_table_2:row2:col3', 'Han_2013_table_2:row2:col6', 'Han_2013_table_2:row2:col16', 'Han_2013_table_2:row2:col28', 'Han_2013_table_2:row2:col29', 'Han_2013_table_2:row2:col30', 'Han_2013_table_2:row2:col35', 'Han_2013_table_2:row2:col36', 'Han_2013_table_2:row2:col37'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Han_2013_table_2:row3:col4', 'Han_2013_table_2:row3:col5', 'Han_2013_table_2:row3:col7', 'Han_2013_table_2:row3:col8', 'Han_2013_table_2:row3:col11', 'Han_2013_table_2:row3:col12', 'Han_2013_table_2:row3:col13', 'Han_2013_table_2:row3:col14', 'Han_2013_table_2:row3:col15', 'Han_2013_table_2:row3:col17', 'Han_2013_table_2:row3:col19', 'Han_2013_table_2:row3:col20', 'Han_2013_table_2:row3:col21', 'Han_2013_table_2:row3:col22', 'Han_2013_table_2:row3:col23', 'Han_2013_table_2:row3:col24', 'Han_2013_table_2:row3:col25', 'Han_2013_table_2:row3:col26', 'Han_2013_table_2:row3:col27', 'Han_2013_table_2:row3:col31', 'Han_2013_table_2:row3:col32', 'Han_2013_table_2:row3:col33', 'Han_2013_table_2:row3:col34', 'Han_2013_table_2:row3:col38'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kauv_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Han_2013_table_2:row4:col2', 'Han_2013_table_2:row4:col3', 'Han_2013_table_2:row4:col6', 'Han_2013_table_2:row4:col28', 'Han_2013_table_2:row4:col29', 'Han_2013_table_2:row4:col30', 'Han_2013_table_2:row4:col35', 'Han_2013_table_2:row4:col36', 'Han_2013_table_2:row4:col37'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Han_2013_table_2:row5:col5', 'Han_2013_table_2:row5:col7', 'Han_2013_table_2:row5:col11', 'Han_2013_table_2:row5:col12', 'Han_2013_table_2:row5:col13', 'Han_2013_table_2:row5:col15', 'Han_2013_table_2:row5:col17', 'Han_2013_table_2:row5:col19', 'Han_2013_table_2:row5:col20', 'Han_2013_table_2:row5:col21', 'Han_2013_table_2:row5:col22', 'Han_2013_table_2:row5:col23', 'Han_2013_table_2:row5:col24', 'Han_2013_table_2:row5:col25', 'Han_2013_table_2:row5:col26', 'Han_2013_table_2:row5:col27', 'Han_2013_table_2:row5:col31', 'Han_2013_table_2:row5:col32', 'Han_2013_table_2:row5:col33', 'Han_2013_table_2:row5:col34', 'Han_2013_table_2:row5:col38'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kauv_2025:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 23.5 L/h | ['Han_2013_table_2:row2:col1', 'Han_2013_table_2:row2:col2', 'Han_2013_table_2:row2:col3', 'Han_2013_table_2:row2:col6', 'Han_2013_table_2:row2:col16', 'Han_2013_table_2:row2:col28', 'Han_2013_table_2:row2:col29', 'Han_2013_table_2:row2:col30', 'Han_2013_table_2:row2:col35', 'Han_2013_table_2:row2:col36', 'Han_2013_table_2:row2:col37'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 53 L/h | ['Han_2013_table_2:row3:col4', 'Han_2013_table_2:row3:col5', 'Han_2013_table_2:row3:col7', 'Han_2013_table_2:row3:col8', 'Han_2013_table_2:row3:col11', 'Han_2013_table_2:row3:col12', 'Han_2013_table_2:row3:col13', 'Han_2013_table_2:row3:col14', 'Han_2013_table_2:row3:col15', 'Han_2013_table_2:row3:col17', 'Han_2013_table_2:row3:col19', 'Han_2013_table_2:row3:col20', 'Han_2013_table_2:row3:col21', 'Han_2013_table_2:row3:col22', 'Han_2013_table_2:row3:col23', 'Han_2013_table_2:row3:col24', 'Han_2013_table_2:row3:col25', 'Han_2013_table_2:row3:col26', 'Han_2013_table_2:row3:col27', 'Han_2013_table_2:row3:col31', 'Han_2013_table_2:row3:col32', 'Han_2013_table_2:row3:col33', 'Han_2013_table_2:row3:col34', 'Han_2013_table_2:row3:col38'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 94.4 L | ['Han_2013_table_2:row4:col2', 'Han_2013_table_2:row4:col3', 'Han_2013_table_2:row4:col6', 'Han_2013_table_2:row4:col28', 'Han_2013_table_2:row4:col29', 'Han_2013_table_2:row4:col30', 'Han_2013_table_2:row4:col35', 'Han_2013_table_2:row4:col36', 'Han_2013_table_2:row4:col37'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 227 L | ['Han_2013_table_2:row5:col5', 'Han_2013_table_2:row5:col7', 'Han_2013_table_2:row5:col11', 'Han_2013_table_2:row5:col12', 'Han_2013_table_2:row5:col13', 'Han_2013_table_2:row5:col15', 'Han_2013_table_2:row5:col17', 'Han_2013_table_2:row5:col19', 'Han_2013_table_2:row5:col20', 'Han_2013_table_2:row5:col21', 'Han_2013_table_2:row5:col22', 'Han_2013_table_2:row5:col23', 'Han_2013_table_2:row5:col24', 'Han_2013_table_2:row5:col25', 'Han_2013_table_2:row5:col26', 'Han_2013_table_2:row5:col27', 'Han_2013_table_2:row5:col31', 'Han_2013_table_2:row5:col32', 'Han_2013_table_2:row5:col33', 'Han_2013_table_2:row5:col34', 'Han_2013_table_2:row5:col38'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=cyclosporine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped |  | 4.643 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_modelica.zip" download>Ciclosporin_Han2013_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_fmi.zip" download>Ciclosporin_Han2013_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_matlab.zip" download>Ciclosporin_Han2013_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_matlab_simbio.zip" download>Ciclosporin_Han2013_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_sbml.zip" download>Ciclosporin_Han2013_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_cellml.zip" download>Ciclosporin_Han2013_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 1.203 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 900 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00025 | kg |
| input | model | `Cl` | 6.528e-06 | m3/s |
| input | model | `VdPerKg` | 0.001349 | m3/kg |
| input | model | `ka` | 0.0003361 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Han K, Pillai VC, Venkataramanan R. Population pharmacokinetics of cyclosporine in transplant recipients. The AAPS journal 15(4):901–912 (2013). [doi:10.1208/s12248-013-9500-8](https://doi.org/10.1208/s12248-013-9500-8)

**This record:** Pharmacolibrary v26.09, model `Ciclosporin_Han2013_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ciclosporin/Ciclosporin_Han2013_reference>

```bibtex
@misc{pharmacolibrary_CiclosporinHan2013reference,
  title  = {{Pharmacolibrary model Ciclosporin_Han2013_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ciclosporin/Ciclosporin_Han2013_reference},
  note   = {Parameters from doi:10.1208/s12248-013-9500-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 250 mg, single dose, first-order absorption (ka 1.21 /h, lag 15 min, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 250 mg oral (L04AD01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ciclosporin_Han2013_reference_params.json` · controls `Ciclosporin_Han2013_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bciclosporin%5D%20Ciclosporin_Han2013_reference&body=Drug%3A%20ciclosporin%0ARecord%3A%20Ciclosporin_Han2013_reference%0APaper%3A%20Han_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ciclosporin/Ciclosporin_Han2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 00:01 UTC</sub>
