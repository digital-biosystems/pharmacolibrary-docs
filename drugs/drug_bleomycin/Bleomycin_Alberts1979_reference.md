<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;bleomycin&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/&quot;},{&quot;label&quot;:&quot;Alberts_1979 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bleomycin_Kramer1978_group_i&quot;,&quot;label&quot;:&quot;Kramer_1978_group_i&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_group_i.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Kramer1978_iii&quot;,&quot;label&quot;:&quot;Kramer_1978_iii&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_iii.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Wilde2007_reference&quot;,&quot;label&quot;:&quot;Wilde_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Wilde2007_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Zhao2025_reference&quot;,&quot;label&quot;:&quot;Zhao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Zhao2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Groselj2016_reference&quot;,&quot;label&quot;:&quot;Groselj_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Groselj2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Kramer1978_ii&quot;,&quot;label&quot;:&quot;Kramer_1978_ii&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_ii.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bleomycin — `Bleomycin_Alberts1979_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span>

> QH, Qb, CL and V have no unit.

<div class="pk-model-meta" hidden drug="bleomycin" model-id="Bleomycin_Alberts1979_reference" status="needs_review" stale="false" population="patients" measured-compound="bleomycin 57Co" parameterization="mechanistic" topology="1C"></div>

## Citation
Alberts DS, Chen HS, Woolfenden JM, Moon TE, Chang SY, Hall JN et al. Pharmacokinetics of bleomycin in man. III. Bleomycin 57Co Vs bleomycin. Cancer chemotherapy and pharmacology 3(1):33–40 (1979).
  ·  DOI: [10.1007/BF00254417](https://doi.org/10.1007/BF00254417)

## Population and dosing

**Population:** patients · condition tumor · age group adult · n = ,.

**Dosing:** 13.7, 19.9 U/m 2, iv, single.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.20).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| SH | QH | 36.6 | ml/min/m² |
| EG | Qb | 33.3 | ml/min/m² |
| Meand | CL | 34.2 | ml/min/m² |
| t1/2β (h) | t1/2β | 136.9 | h |
| t1/2γ (h) | t1/2γ | 331.5 | h |
| Vd a (l/m2) | V | 2.80 | l/m2 |
| 72-h urinary excretion (% administered dose) | fe | 70.0 | % administered dose |
| theta_q24_em | theta_q24_em | 48.9 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**QH, Qb, CL and V have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (QH, Qb, CL and V), so that value has no SI equivalent. Extracted — bleomycin: QH 36.6 ml/min/m², Qb 33.3 ml/min/m², CL 34.2 ml/min/m², t1/2β 137 h, t1/2γ 332 h, V 2.8 l/m2, fe 70 % administered dose.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has bleomycin 57Co, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| SH | `Q369` · QH | 36.6 | ml/min/m² |  |  | ml/(min·m2) | llm (0.6) | Alberts_1979_table_5:row0:col1, Alberts_1979_table_5:row0:col2, Alberts_1979_table_5:row0:col3, Alberts_1979_table_5:row0:col4, Alberts_1979_table_5:row0:col5, Alberts_1979_table_5:row0:col6 |
| EG | `Q54` · Qb | 33.3 | ml/min/m² |  |  | ml/(min·m2) | llm (0.6) | Alberts_1979_table_5:row1:col1, Alberts_1979_table_5:row1:col2, Alberts_1979_table_5:row1:col3, Alberts_1979_table_5:row1:col4, Alberts_1979_table_5:row1:col5, Alberts_1979_table_5:row1:col6 |
| Meand | `Q22` · CL | 34.2 | ml/min/m² |  |  | ml/(min·m2) | llm (0.6) | Alberts_1979_table_5:row9:col1, Alberts_1979_table_5:row9:col2, Alberts_1979_table_5:row9:col3, Alberts_1979_table_5:row9:col4, Alberts_1979_table_5:row9:col5, Alberts_1979_table_5:row9:col6 |
| t1/2β (h) | `Q60` · t1/2β | 136.9 | h | 4.928e+05 | s | h | exact (1) | Alberts_1979_table_2:row0:col1, Alberts_1979_table_2:row1:col1, Alberts_1979_table_2:row2:col1, Alberts_1979_table_2:row3:col1, Alberts_1979_table_2:row4:col1, Alberts_1979_table_2:row5:col1, Alberts_1979_table_2:row6:col1, Alberts_1979_table_3:row0:col1, Alberts_1979_table_3:row1:col1, Alberts_1979_table_3:row2:col1, Alberts_1979_table_3:row3:col1, Alberts_1979_table_3:row4:col1 |
| t1/2γ (h) | `Q89` · t1/2γ | 331.5 | h | 1.193e+06 | s | h | exact (1) | Alberts_1979_table_2:row0:col2, Alberts_1979_table_2:row1:col2, Alberts_1979_table_2:row2:col2, Alberts_1979_table_2:row4:col2, Alberts_1979_table_2:row5:col2, Alberts_1979_table_2:row6:col2 |
| Vd a (l/m2) | `Q61` · V | 2.80 | l/m2 |  |  | l/m2 | llm_confirmed (0.6) | Alberts_1979_table_2:row0:col3, Alberts_1979_table_2:row1:col3, Alberts_1979_table_2:row2:col3, Alberts_1979_table_2:row3:col3, Alberts_1979_table_2:row4:col3, Alberts_1979_table_2:row5:col3, Alberts_1979_table_2:row6:col3, Alberts_1979_table_3:row0:col2, Alberts_1979_table_3:row1:col2, Alberts_1979_table_3:row2:col2, Alberts_1979_table_3:row3:col2, Alberts_1979_table_3:row4:col2 |
| 72-h urinary excretion (% administered dose) | `Q44` · fe | 70.0 | % administered dose |  |  | %·administereddose | llm_confirmed (0.6) | Alberts_1979_table_2:row0:col5, Alberts_1979_table_2:row1:col5, Alberts_1979_table_2:row2:col5, Alberts_1979_table_2:row3:col5, Alberts_1979_table_2:row4:col5, Alberts_1979_table_2:row5:col5 |
| theta_q24_em | `Q900` · theta_q24_em | 48.9 |  |  |  |  |  | Alberts_1979_table_5:row2:col1, Alberts_1979_table_5:row2:col2, Alberts_1979_table_5:row2:col3, Alberts_1979_table_5:row2:col4, Alberts_1979_table_5:row2:col5, Alberts_1979_table_5:row2:col6 |

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
- column 'compositee' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'composited' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'ml/min/m²' (QH)
- unit_dimension_unknown: 'ml/min/m²' (Qb)
- dropped duplicate Q54 ('HH', value '20.3') — already have one for this compound
- dropped duplicate Q54 ('MM', value '25.0') — already have one for this compound
- dropped duplicate Q54 ('MA', value '28.1') — already have one for this compound
- dropped unlinked row (NIL): 'SR' — extend the ontology if this is a real PK parameter (source ['Alberts_1979_table_5:row6:col1', 'Alberts_1979_table_5:row6:col2', 'Alberts_1979_table_5:row6:col3', 'Alberts_1979_table_5:row6:col4', 'Alberts_1979_table_5:row6:col5', 'Alberts_1979_table_5:row6:col6'])
- dropped unlinked row (NIL): 'MR' — extend the ontology if this is a real PK parameter (source ['Alberts_1979_table_5:row7:col1', 'Alberts_1979_table_5:row7:col3', 'Alberts_1979_table_5:row7:col4', 'Alberts_1979_table_5:row7:col5', 'Alberts_1979_table_5:row7:col6'])
- dropped unlinked row (NIL): 'EL' — extend the ontology if this is a real PK parameter (source ['Alberts_1979_table_5:row8:col1', 'Alberts_1979_table_5:row8:col2', 'Alberts_1979_table_5:row8:col3', 'Alberts_1979_table_5:row8:col4', 'Alberts_1979_table_5:row8:col5', 'Alberts_1979_table_5:row8:col6'])
- unit_dimension_unknown: 'ml/min/m²' (CL)
- dropped unlinked row (NIL): 'Compositee' — extend the ontology if this is a real PK parameter (source ['Alberts_1979_table_5:row10:col1', 'Alberts_1979_table_5:row10:col2', 'Alberts_1979_table_5:row10:col3', 'Alberts_1979_table_5:row10:col4', 'Alberts_1979_table_5:row10:col6'])
- unit_dimension_unknown: 'l/m2' (V)
- unit_dimension_unknown: 'ml/min/m2' (Qb)
- dropped duplicate Q54 ('QR b (ml/min/m2)', value '0.81') — already have one for this compound
- unit_dimension_unknown: '% administered dose' (fe)
- dropped duplicate Q44 ('24-h urinary excretion (%)', value '53.0') — already have one for this compound
- covariate effect for Q24 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bleomycin 57Co
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- pharmacogenetic covariate 'theta_q24_em' (em) — PGx domain
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Alberts_1979:other_prose, Alberts_1979_table_2, Alberts_1979_table_3, Alberts_1979_table_5); populations eg (25 u), em (25 u), hh (24 u), ma (30 u), mm (30 u), mr (24 u), sh (30 u), sr (23 u) kept as separate records
- molar mass: no plausible PubChem entry for 'bleomycin 57Co' ('bleomycin 57Co') — left in mass units
- molar mass: none found for 'bleomycin 57Co' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table Alberts_1979_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (33 record(s))
- table Alberts_1979_table_3: unparsed_numeric_cell
- transposed table Alberts_1979_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (18 record(s))
- transposed table Alberts_1979_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (47 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.118 (2/17 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['bleomycin 57co', '57co chloride', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[72-h urinary excretion]` | 70.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[eg]` | 33.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[hh]` |  | 20.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[meand]` | 34.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mr]` |  | 32.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[sh].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[sh].parameter_id` | Q369 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2β]` | 136.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2γ]` | 331.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_em]` |  | 48.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q24_em]` | 48.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd a]` | 2.80 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | bleomycin 57Co | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | bleomycin 57Co | unknown | mismatch |

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
| C5_dimension_Q60 | pass | [time] |  | ['Alberts_1979_table_2:row0:col1', 'Alberts_1979_table_2:row1:col1', 'Alberts_1979_table_2:row2:col1', 'Alberts_1979_table_2:row3:col1', 'Alberts_1979_table_2:row4:col1', 'Alberts_1979_table_2:row5:col1', 'Alberts_1979_table_2:row6:col1', 'Alberts_1979_table_3:row0:col1', 'Alberts_1979_table_3:row1:col1', 'Alberts_1979_table_3:row2:col1', 'Alberts_1979_table_3:row3:col1', 'Alberts_1979_table_3:row4:col1'] |
| C5_dimension_Q89 | pass | [time] |  | ['Alberts_1979_table_2:row0:col2', 'Alberts_1979_table_2:row1:col2', 'Alberts_1979_table_2:row2:col2', 'Alberts_1979_table_2:row4:col2', 'Alberts_1979_table_2:row5:col2', 'Alberts_1979_table_2:row6:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | ml/min/m² | ['Alberts_1979_table_5:row9:col1', 'Alberts_1979_table_5:row9:col2', 'Alberts_1979_table_5:row9:col3', 'Alberts_1979_table_5:row9:col4', 'Alberts_1979_table_5:row9:col5', 'Alberts_1979_table_5:row9:col6'] |
| C5_unit_missing_Q369 | fail | [length] ** 3 / [time] | ml/min/m² | ['Alberts_1979_table_5:row0:col1', 'Alberts_1979_table_5:row0:col2', 'Alberts_1979_table_5:row0:col3', 'Alberts_1979_table_5:row0:col4', 'Alberts_1979_table_5:row0:col5', 'Alberts_1979_table_5:row0:col6'] |
| C5_unit_missing_Q54 | fail | [length] ** 3 / [time] | ml/min/m² | ['Alberts_1979_table_5:row1:col1', 'Alberts_1979_table_5:row1:col2', 'Alberts_1979_table_5:row1:col3', 'Alberts_1979_table_5:row1:col4', 'Alberts_1979_table_5:row1:col5', 'Alberts_1979_table_5:row1:col6'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | l/m2 | ['Alberts_1979_table_2:row0:col3', 'Alberts_1979_table_2:row1:col3', 'Alberts_1979_table_2:row2:col3', 'Alberts_1979_table_2:row3:col3', 'Alberts_1979_table_2:row4:col3', 'Alberts_1979_table_2:row5:col3', 'Alberts_1979_table_2:row6:col3', 'Alberts_1979_table_3:row0:col2', 'Alberts_1979_table_3:row1:col2', 'Alberts_1979_table_3:row2:col2', 'Alberts_1979_table_3:row3:col2', 'Alberts_1979_table_3:row4:col2'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbleomycin%5D%20Bleomycin_Alberts1979_reference&body=Drug%3A%20bleomycin%0ARecord%3A%20Bleomycin_Alberts1979_reference%0APaper%3A%20Alberts_1979%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bleomycin/Bleomycin_Alberts1979_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 08:41 UTC</sub>
