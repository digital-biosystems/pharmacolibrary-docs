<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;azathioprine&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/&quot;},{&quot;label&quot;:&quot;el-Yazigi_1993 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Simon_1997_RCR&quot;,&quot;label&quot;:&quot;Simon_1997 \u00b7 RCR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/pd_Simon_1997_RCR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azathioprine — `Azathioprine_elYazigi1993_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

> No value for azathioprine's clearance, central→peripheral rate constant and peripheral→central rate constant; the model does not reproduce the paper's terminal half-life (paper 0.652, model 6.1e+03) (+2 more).

<div class="pk-model-meta" hidden drug="azathioprine" model-id="Azathioprine_elYazigi1993_reference" status="model_quarantined" stale="false" population="rabbits" measured-compound="azathioprine" parameterization="mechanistic" topology="2C"></div>

## Citation
el-Yazigi A, Wahab FA. Pharmacokinetics of azathioprine after repeated oral and single intravenous administration. Journal of clinical pharmacology 33(6):522–526 (1993).
  ·  DOI: [10.1002/j.1552-4604.1993.tb04698.x](https://doi.org/10.1002/j.1552-4604.1993.tb04698.x)

## Population and dosing

**Population:** rabbits · condition healthy.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α | λ1 | 15.3 | 1/h |
| β | kel | 2.38 | 1/h |
| k₁₂ | k12 | 2.79 | 1/h |
| k₂₁ | k21 | 3.32 | 1/h |
| AUCₘₜ (μg·hr/L) | AUC | 636 | μg·hr/L |
| AUCcalc (μg·hr/L) | AUC∞ | 709 | μg·hr/L |
| TBC (L/hr·kg) | CLR | 8.12 | L/hr·kg |
| Vb (L/kg) | V | 7.89 | L/kg |
| Vc (L/kg) | V1 | 1.05 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.812). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for azathioprine's clearance, central→peripheral rate constant and peripheral→central rate constant; the model does not reproduce the paper's terminal half-life (paper 0.652, model 6.1e+03) (+2 more).**

The model was built, but azathioprine's clearance, central→peripheral rate constant and peripheral→central rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — azathioprine: λ1 15.3 1/h, kel 2.38 1/h, k12 2.79 1/h, k21 3.32 1/h, AUC 636 μg·hr/L, AUC∞ 709 μg·hr/L, CLR 8.12 L/hr·kg, V 7.89 L/kg, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[auccalc].parameter_id`: this record has Q17, the second reading Q88; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α | `Q67` · λ1 | 15.3 | 1/h | 0.00425 | 1/s | 1/h | exact (1) | el-Yazigi_1993_table_2:row0:col1, el-Yazigi_1993_table_2:row1:col1, el-Yazigi_1993_table_2:row2:col1, el-Yazigi_1993_table_2:row3:col1, el-Yazigi_1993_table_2:row4:col1, el-Yazigi_1993_table_2:row5:col1, el-Yazigi_1993_table_2:row6:col1, el-Yazigi_1993_table_2:row7:col1 |
| β | `Q47` · kel | 2.38 | 1/h | 0.0006611 | 1/s | 1/h | exact (1) | el-Yazigi_1993_table_2:row0:col2, el-Yazigi_1993_table_2:row1:col2, el-Yazigi_1993_table_2:row2:col2, el-Yazigi_1993_table_2:row3:col2, el-Yazigi_1993_table_2:row4:col2, el-Yazigi_1993_table_2:row5:col2, el-Yazigi_1993_table_2:row6:col2, el-Yazigi_1993_table_2:row7:col2 |
| k₁₂ | `Q301` · k12 | 2.79 | 1/h | 0.000775 | 1/s | 1/h | exact (1) | el-Yazigi_1993_table_2:row0:col3, el-Yazigi_1993_table_2:row1:col3, el-Yazigi_1993_table_2:row2:col3, el-Yazigi_1993_table_2:row3:col3, el-Yazigi_1993_table_2:row4:col3, el-Yazigi_1993_table_2:row5:col3, el-Yazigi_1993_table_2:row6:col3, el-Yazigi_1993_table_2:row7:col3 |
| k₂₁ | `Q302` · k21 | 3.32 | 1/h | 0.0009222 | 1/s | 1/h | exact (1) | el-Yazigi_1993_table_2:row0:col4, el-Yazigi_1993_table_2:row1:col4, el-Yazigi_1993_table_2:row2:col4, el-Yazigi_1993_table_2:row3:col4, el-Yazigi_1993_table_2:row4:col4, el-Yazigi_1993_table_2:row5:col4, el-Yazigi_1993_table_2:row6:col4, el-Yazigi_1993_table_2:row7:col4 |
| AUCₘₜ (μg·hr/L) | `Q88` · AUC | 636 | μg·hr/L | 2.29 | kg*s/m3 | (h·µg)/l | llm (0.6) | el-Yazigi_1993_table_2:row0:col6, el-Yazigi_1993_table_2:row1:col6, el-Yazigi_1993_table_2:row2:col6, el-Yazigi_1993_table_2:row3:col6, el-Yazigi_1993_table_2:row4:col6, el-Yazigi_1993_table_2:row5:col6, el-Yazigi_1993_table_2:row6:col6, el-Yazigi_1993_table_2:row7:col6 |
| AUCcalc (μg·hr/L) | `Q17` · AUC∞ | 709 | μg·hr/L | 2.552 | kg*s/m3 | (h·µg)/l | llm (0.6) | el-Yazigi_1993_table_2:row0:col7, el-Yazigi_1993_table_2:row1:col7, el-Yazigi_1993_table_2:row2:col7, el-Yazigi_1993_table_2:row3:col7, el-Yazigi_1993_table_2:row4:col7, el-Yazigi_1993_table_2:row5:col7, el-Yazigi_1993_table_2:row6:col7, el-Yazigi_1993_table_2:row7:col7 |
| TBC (L/hr·kg) | `Q26` · CLR | 8.12 | L/hr·kg | 0.0001579 | m3/s | l/(h·kg) | llm (0.6) | el-Yazigi_1993_table_2:row0:col8, el-Yazigi_1993_table_2:row1:col8, el-Yazigi_1993_table_2:row2:col8, el-Yazigi_1993_table_2:row3:col8, el-Yazigi_1993_table_2:row4:col8, el-Yazigi_1993_table_2:row5:col8, el-Yazigi_1993_table_2:row6:col8, el-Yazigi_1993_table_2:row7:col8 |
| Vb (L/kg) | `Q61` · V | 7.89 | L/kg | 0.5523 | m3 | l/kg | llm (0.6) | el-Yazigi_1993_table_2:row0:col9, el-Yazigi_1993_table_2:row1:col9, el-Yazigi_1993_table_2:row2:col9, el-Yazigi_1993_table_2:row3:col9, el-Yazigi_1993_table_2:row4:col9, el-Yazigi_1993_table_2:row5:col9, el-Yazigi_1993_table_2:row6:col9, el-Yazigi_1993_table_2:row7:col9 |
| Vc (L/kg) | `Q63` · V1 | 1.05 | L/kg | 0.0735 | m3 | l/kg | exact (1) | el-Yazigi_1993_table_2:row0:col10, el-Yazigi_1993_table_2:row1:col10, el-Yazigi_1993_table_2:row2:col10, el-Yazigi_1993_table_2:row3:col10, el-Yazigi_1993_table_2:row4:col10, el-Yazigi_1993_table_2:row5:col10, el-Yazigi_1993_table_2:row6:col10, el-Yazigi_1993_table_2:row7:col10 |

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
- dropped duplicate Q47 ('k₁₀', value '11.5') — already have one for this compound
- implicit units: 'α' → 1/h (from the paper text: 'The text states: "mean (standard error of the mean) of a, fi, V,, and total body clearance of 15.3 (2)/hour, 2.38 (.64)/')
- implicit units: 'β' → 1/h (from the paper text: 'The text states: "mean (standard error of the mean) of a, fi, V,, and total body clearance of 15.3 (2)/hour, 2.38 (.64)/')
- implicit units: 'k₁₂' → 1/h (from the popPK convention: 'k12 is a first-order rate constant; by population PK convention, rate constants are expressed in reciprocal time units (')
- implicit units: 'k₂₁' → 1/h (from the popPK convention: 'k21 is a first-order rate constant; by population PK convention, rate constants are expressed in reciprocal time units (')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=azathioprine
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- transposed table el-Yazigi_1993_table_2: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.812 (13/16 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auccalc].parameter_id` | Q17 | Q88 | mismatch |
| `gpt-oss-120b` | `parameters[aucmt].parameter_id` | Q88 | Q19 | mismatch |
| `gpt-oss-120b` | `parameters[tbc].parameter_id` | Q26 | Q22 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['el-Yazigi_1993_table_2:row0:col7', 'el-Yazigi_1993_table_2:row1:col7', 'el-Yazigi_1993_table_2:row2:col7', 'el-Yazigi_1993_table_2:row3:col7', 'el-Yazigi_1993_table_2:row4:col7', 'el-Yazigi_1993_table_2:row5:col7', 'el-Yazigi_1993_table_2:row6:col7', 'el-Yazigi_1993_table_2:row7:col7'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['el-Yazigi_1993_table_2:row0:col8', 'el-Yazigi_1993_table_2:row1:col8', 'el-Yazigi_1993_table_2:row2:col8', 'el-Yazigi_1993_table_2:row3:col8', 'el-Yazigi_1993_table_2:row4:col8', 'el-Yazigi_1993_table_2:row5:col8', 'el-Yazigi_1993_table_2:row6:col8', 'el-Yazigi_1993_table_2:row7:col8'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['el-Yazigi_1993_table_2:row0:col3', 'el-Yazigi_1993_table_2:row1:col3', 'el-Yazigi_1993_table_2:row2:col3', 'el-Yazigi_1993_table_2:row3:col3', 'el-Yazigi_1993_table_2:row4:col3', 'el-Yazigi_1993_table_2:row5:col3', 'el-Yazigi_1993_table_2:row6:col3', 'el-Yazigi_1993_table_2:row7:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['el-Yazigi_1993_table_2:row0:col4', 'el-Yazigi_1993_table_2:row1:col4', 'el-Yazigi_1993_table_2:row2:col4', 'el-Yazigi_1993_table_2:row3:col4', 'el-Yazigi_1993_table_2:row4:col4', 'el-Yazigi_1993_table_2:row5:col4', 'el-Yazigi_1993_table_2:row6:col4', 'el-Yazigi_1993_table_2:row7:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['el-Yazigi_1993_table_2:row0:col2', 'el-Yazigi_1993_table_2:row1:col2', 'el-Yazigi_1993_table_2:row2:col2', 'el-Yazigi_1993_table_2:row3:col2', 'el-Yazigi_1993_table_2:row4:col2', 'el-Yazigi_1993_table_2:row5:col2', 'el-Yazigi_1993_table_2:row6:col2', 'el-Yazigi_1993_table_2:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['el-Yazigi_1993_table_2:row0:col9', 'el-Yazigi_1993_table_2:row1:col9', 'el-Yazigi_1993_table_2:row2:col9', 'el-Yazigi_1993_table_2:row3:col9', 'el-Yazigi_1993_table_2:row4:col9', 'el-Yazigi_1993_table_2:row5:col9', 'el-Yazigi_1993_table_2:row6:col9', 'el-Yazigi_1993_table_2:row7:col9'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['el-Yazigi_1993_table_2:row0:col10', 'el-Yazigi_1993_table_2:row1:col10', 'el-Yazigi_1993_table_2:row2:col10', 'el-Yazigi_1993_table_2:row3:col10', 'el-Yazigi_1993_table_2:row4:col10', 'el-Yazigi_1993_table_2:row5:col10', 'el-Yazigi_1993_table_2:row6:col10', 'el-Yazigi_1993_table_2:row7:col10'] |
| C5_dimension_Q67 | pass | 1 / [time] |  | ['el-Yazigi_1993_table_2:row0:col1', 'el-Yazigi_1993_table_2:row1:col1', 'el-Yazigi_1993_table_2:row2:col1', 'el-Yazigi_1993_table_2:row3:col1', 'el-Yazigi_1993_table_2:row4:col1', 'el-Yazigi_1993_table_2:row5:col1', 'el-Yazigi_1993_table_2:row6:col1', 'el-Yazigi_1993_table_2:row7:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['el-Yazigi_1993_table_2:row0:col6', 'el-Yazigi_1993_table_2:row1:col6', 'el-Yazigi_1993_table_2:row2:col6', 'el-Yazigi_1993_table_2:row3:col6', 'el-Yazigi_1993_table_2:row4:col6', 'el-Yazigi_1993_table_2:row5:col6', 'el-Yazigi_1993_table_2:row6:col6', 'el-Yazigi_1993_table_2:row7:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 552 L | ['el-Yazigi_1993_table_2:row0:col9', 'el-Yazigi_1993_table_2:row1:col9', 'el-Yazigi_1993_table_2:row2:col9', 'el-Yazigi_1993_table_2:row3:col9', 'el-Yazigi_1993_table_2:row4:col9', 'el-Yazigi_1993_table_2:row5:col9', 'el-Yazigi_1993_table_2:row6:col9', 'el-Yazigi_1993_table_2:row7:col9'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 73.5 L | ['el-Yazigi_1993_table_2:row0:col10', 'el-Yazigi_1993_table_2:row1:col10', 'el-Yazigi_1993_table_2:row2:col10', 'el-Yazigi_1993_table_2:row3:col10', 'el-Yazigi_1993_table_2:row4:col10', 'el-Yazigi_1993_table_2:row5:col10', 'el-Yazigi_1993_table_2:row6:col10', 'el-Yazigi_1993_table_2:row7:col10'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=azathioprine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.812 (13 of 16 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.812 | cross-check contradicted by a second reader: verdict disputed; agreement 0.812 (13 of 16 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_t_half_terminal | reference | fail | 0.6517 | 6101 | 9362 | reported 39.1 minutes→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_modelica.zip" download>Azathioprine_elYazigi1993_reference_modelica.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_fmi.zip" download>Azathioprine_elYazigi1993_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_matlab.zip" download>Azathioprine_elYazigi1993_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_matlab_simbio.zip" download>Azathioprine_elYazigi1993_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_sbml.zip" download>Azathioprine_elYazigi1993_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference/Azathioprine_elYazigi1993_reference_cellml.zip" download>Azathioprine_elYazigi1993_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): el-Yazigi A, Wahab FA. Pharmacokinetics of azathioprine after repeated oral and single intravenous administration. Journal of clinical pharmacology 33(6):522–526 (1993). [doi:10.1002/j.1552-4604.1993.tb04698.x](https://doi.org/10.1002/j.1552-4604.1993.tb04698.x)

**This record:** Pharmacolibrary, model `Azathioprine_elYazigi1993_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference>

```bibtex
@misc{pharmacolibrary_AzathioprineelYazigi1993reference,
  title  = {{Pharmacolibrary model Azathioprine_elYazigi1993_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference},
  note   = {Parameters from doi:10.1002/j.1552-4604.1993.tb04698.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazathioprine%5D%20Azathioprine_elYazigi1993_reference&body=Drug%3A%20azathioprine%0ARecord%3A%20Azathioprine_elYazigi1993_reference%0APaper%3A%20el-Yazigi_1993%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 02:09 UTC</sub>
