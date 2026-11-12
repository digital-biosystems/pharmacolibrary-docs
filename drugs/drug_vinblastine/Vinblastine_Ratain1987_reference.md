<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinblastine&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/&quot;},{&quot;label&quot;:&quot;Ratain_1987 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Levque1996_reference&quot;,&quot;label&quot;:&quot;Lev\u00eaque_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Levque1996_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Toso1995_reference&quot;,&quot;label&quot;:&quot;Toso_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Toso1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Zhou1990_reference&quot;,&quot;label&quot;:&quot;Zhou_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Zhou1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Lu1983_reference&quot;,&quot;label&quot;:&quot;Lu_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Lu1983_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Malik2016_reference&quot;,&quot;label&quot;:&quot;Malik_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Malik2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Nelson1982_vinblastine&quot;,&quot;label&quot;:&quot;Nelson_1982_vinblastine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Nelson1982_vinblastine.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_McKay_1993_baseline_tension&quot;,&quot;label&quot;:&quot;McKay_1993 \u00b7 baseline tension&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/pd_McKay_1993_baseline_tension.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinblastine — `Vinblastine_Ratain1987_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; cL has no unit (+1 more).

<div class="pk-model-meta" hidden drug="vinblastine" model-id="Vinblastine_Ratain1987_reference" status="needs_review" stale="false" population="patients with malignant disease" measured-compound="vinblastine" parameterization="mechanistic" topology="1C"></div>

## Citation
Ratain MJ, Vogelzang NJ, Sinkule JA. Interpatient and intrapatient variability in vinblastine pharmacokinetics. Clinical pharmacology and therapeutics 41(1):61–67 (1987).
  ·  DOI: [10.1038/clpt.1987.9](https://doi.org/10.1038/clpt.1987.9)

## Population and dosing

**Population:** patients with malignant disease · condition malignant disease · age group adult · n = &lt;.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (ng hr/ml) | AUC | 72.1 | ng·hr/ml |
| Clearance (ml/min/m²) | CL | 552 | ml/min/m² |
| t₁/₂ (hr) | t1/2z | 29.2 | hr |
| apparent Vd | V | 75.0 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; cL has no unit (+1 more).**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Levêque_1996) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — vinblastine: AUC 72.1 ng·hr/ml, CL 552 ml/min/m², t1/2z 29.2 hr, V 75 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has vinblastine, the second reading vinblastine sulfate; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (ng hr/ml) | `Q88` · AUC | 72.1 | ng·hr/ml |  |  | ng·hr/ml | exact (1) | Ratain_1987_table_1:row0:col3, Ratain_1987_table_1:row1:col3, Ratain_1987_table_1:row2:col3, Ratain_1987_table_1:row3:col3, Ratain_1987_table_1:row4:col3, Ratain_1987_table_1:row5:col3, Ratain_1987_table_1:row6:col3, Ratain_1987_table_1:row7:col3, Ratain_1987_table_1:row8:col3, Ratain_1987_table_1:row9:col3, Ratain_1987_table_1:row10:col3, Ratain_1987_table_1:row11:col3, Ratain_1987_table_1:row12:col3, Ratain_1987_table_1:row13:col3, Ratain_1987_table_1:row14:col3, Ratain_1987_table_1:row15:col3, Ratain_1987_table_1:row16:col3, Ratain_1987_table_1:row17:col3, Ratain_1987_table_1:row18:col3, Ratain_1987_table_1:row19:col3, Ratain_1987_table_1:row20:col3, Ratain_1987_table_1:row21:col3, Ratain_1987_table_1:row22:col3, Ratain_1987_table_1:row23:col3 |
| Clearance (ml/min/m²) | `Q22` · CL | 552 | ml/min/m² |  |  | ml/(min·m2) | exact (1) | Ratain_1987_table_1:row0:col5, Ratain_1987_table_1:row1:col5, Ratain_1987_table_1:row2:col5, Ratain_1987_table_1:row3:col5, Ratain_1987_table_1:row4:col5, Ratain_1987_table_1:row5:col5, Ratain_1987_table_1:row6:col5, Ratain_1987_table_1:row7:col5, Ratain_1987_table_1:row8:col5, Ratain_1987_table_1:row9:col5, Ratain_1987_table_1:row10:col5, Ratain_1987_table_1:row11:col5, Ratain_1987_table_1:row12:col5, Ratain_1987_table_1:row13:col5, Ratain_1987_table_1:row14:col5, Ratain_1987_table_1:row15:col5, Ratain_1987_table_1:row16:col5, Ratain_1987_table_1:row17:col5, Ratain_1987_table_1:row18:col5, Ratain_1987_table_1:row19:col5, Ratain_1987_table_1:row20:col5, Ratain_1987_table_1:row21:col5, Ratain_1987_table_1:row22:col5, Ratain_1987_table_1:row23:col5, Ratain_1987_table_1:row24:col5 |
| t₁/₂ (hr) | `Q57` · t1/2z | 29.2 | hr | 1.051e+05 | s | h | exact (1) | Ratain_1987_table_1:row0:col6, Ratain_1987_table_1:row1:col6, Ratain_1987_table_1:row2:col6, Ratain_1987_table_1:row3:col6, Ratain_1987_table_1:row4:col6, Ratain_1987_table_1:row5:col6, Ratain_1987_table_1:row6:col6, Ratain_1987_table_1:row7:col6, Ratain_1987_table_1:row8:col6, Ratain_1987_table_1:row9:col6, Ratain_1987_table_1:row10:col6, Ratain_1987_table_1:row11:col6, Ratain_1987_table_1:row12:col6, Ratain_1987_table_1:row13:col6, Ratain_1987_table_1:row14:col6, Ratain_1987_table_1:row15:col6, Ratain_1987_table_1:row16:col6, Ratain_1987_table_1:row17:col6, Ratain_1987_table_1:row18:col6, Ratain_1987_table_1:row19:col6, Ratain_1987_table_1:row20:col6, Ratain_1987_table_1:row21:col6, Ratain_1987_table_1:row22:col6, Ratain_1987_table_1:row23:col6, Ratain_1987_table_1:row24:col6 |
| apparent Vd | `Q61` · V | 75.0 | L/kg | 5.25 | m3 | L | review_gapfill (0.7) | Levêque_1996:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Age/sex' — extend the ontology if this is a real PK parameter (source ['Ratain_1987_table_1:row0:col1', 'Ratain_1987_table_1:row1:col1', 'Ratain_1987_table_1:row2:col1', 'Ratain_1987_table_1:row3:col1', 'Ratain_1987_table_1:row4:col1', 'Ratain_1987_table_1:row5:col1', 'Ratain_1987_table_1:row6:col1', 'Ratain_1987_table_1:row7:col1', 'Ratain_1987_table_1:row8:col1', 'Ratain_1987_table_1:row9:col1', 'Ratain_1987_table_1:row10:col1', 'Ratain_1987_table_1:row11:col1', 'Ratain_1987_table_1:row12:col1', 'Ratain_1987_table_1:row13:col1', 'Ratain_1987_table_1:row14:col1', 'Ratain_1987_table_1:row15:col1', 'Ratain_1987_table_1:row16:col1', 'Ratain_1987_table_1:row17:col1', 'Ratain_1987_table_1:row18:col1', 'Ratain_1987_table_1:row19:col1', 'Ratain_1987_table_1:row20:col1', 'Ratain_1987_table_1:row21:col1', 'Ratain_1987_table_1:row22:col1', 'Ratain_1987_table_1:row23:col1'])
- unit_dimension_unknown: 'ng hr/ml' (AUC)
- unit_dimension_unknown: 'ml/min/m²' (CL)
- dropped unlinked row (NIL): '23' — extend the ontology if this is a real PK parameter (source ['Ratain_1987_table_2:row0:col1', 'Ratain_1987_table_2:row0:col2'])
- dropped duplicate Q22 ('18', value '567') — already have one for this compound
- dropped duplicate Q22 ('14', value '597') — already have one for this compound
- dropped duplicate Q22 ('10', value '489') — already have one for this compound
- implicit units: 'AUC (ng hr/ml)' → ng·hr/ml (from the paper text: "The parameter list itself provides the unit in brackets as 'ng hr/ml'. This is consistent with the text describing the a")
- implicit units: 'Clearance (ml/min/m²)' — the LLM proposed 'ml/min/m2', whose dimension does not fit Q22; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vinblastine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- gap-filled Q61 (V) from Levêque_1996's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2
- transposed table Ratain_1987_table_1: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.571 (4/7 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance].value` | 552 | -29.5 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2].value` | 29.2 | 28.9 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | vinblastine | vinblastine sulfate | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q57 | pass | [time] |  | ['Ratain_1987_table_1:row0:col6', 'Ratain_1987_table_1:row1:col6', 'Ratain_1987_table_1:row2:col6', 'Ratain_1987_table_1:row3:col6', 'Ratain_1987_table_1:row4:col6', 'Ratain_1987_table_1:row5:col6', 'Ratain_1987_table_1:row6:col6', 'Ratain_1987_table_1:row7:col6', 'Ratain_1987_table_1:row8:col6', 'Ratain_1987_table_1:row9:col6', 'Ratain_1987_table_1:row10:col6', 'Ratain_1987_table_1:row11:col6', 'Ratain_1987_table_1:row12:col6', 'Ratain_1987_table_1:row13:col6', 'Ratain_1987_table_1:row14:col6', 'Ratain_1987_table_1:row15:col6', 'Ratain_1987_table_1:row16:col6', 'Ratain_1987_table_1:row17:col6', 'Ratain_1987_table_1:row18:col6', 'Ratain_1987_table_1:row19:col6', 'Ratain_1987_table_1:row20:col6', 'Ratain_1987_table_1:row21:col6', 'Ratain_1987_table_1:row22:col6', 'Ratain_1987_table_1:row23:col6', 'Ratain_1987_table_1:row24:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Levêque_1996:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Ratain_1987_table_1:row0:col3', 'Ratain_1987_table_1:row1:col3', 'Ratain_1987_table_1:row2:col3', 'Ratain_1987_table_1:row3:col3', 'Ratain_1987_table_1:row4:col3', 'Ratain_1987_table_1:row5:col3', 'Ratain_1987_table_1:row6:col3', 'Ratain_1987_table_1:row7:col3', 'Ratain_1987_table_1:row8:col3', 'Ratain_1987_table_1:row9:col3', 'Ratain_1987_table_1:row10:col3', 'Ratain_1987_table_1:row11:col3', 'Ratain_1987_table_1:row12:col3', 'Ratain_1987_table_1:row13:col3', 'Ratain_1987_table_1:row14:col3', 'Ratain_1987_table_1:row15:col3', 'Ratain_1987_table_1:row16:col3', 'Ratain_1987_table_1:row17:col3', 'Ratain_1987_table_1:row18:col3', 'Ratain_1987_table_1:row19:col3', 'Ratain_1987_table_1:row20:col3', 'Ratain_1987_table_1:row21:col3', 'Ratain_1987_table_1:row22:col3', 'Ratain_1987_table_1:row23:col3'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | ml/min/m² | ['Ratain_1987_table_1:row0:col5', 'Ratain_1987_table_1:row1:col5', 'Ratain_1987_table_1:row2:col5', 'Ratain_1987_table_1:row3:col5', 'Ratain_1987_table_1:row4:col5', 'Ratain_1987_table_1:row5:col5', 'Ratain_1987_table_1:row6:col5', 'Ratain_1987_table_1:row7:col5', 'Ratain_1987_table_1:row8:col5', 'Ratain_1987_table_1:row9:col5', 'Ratain_1987_table_1:row10:col5', 'Ratain_1987_table_1:row11:col5', 'Ratain_1987_table_1:row12:col5', 'Ratain_1987_table_1:row13:col5', 'Ratain_1987_table_1:row14:col5', 'Ratain_1987_table_1:row15:col5', 'Ratain_1987_table_1:row16:col5', 'Ratain_1987_table_1:row17:col5', 'Ratain_1987_table_1:row18:col5', 'Ratain_1987_table_1:row19:col5', 'Ratain_1987_table_1:row20:col5', 'Ratain_1987_table_1:row21:col5', 'Ratain_1987_table_1:row22:col5', 'Ratain_1987_table_1:row23:col5', 'Ratain_1987_table_1:row24:col5'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 552 | ['Ratain_1987_table_1:row0:col5', 'Ratain_1987_table_1:row1:col5', 'Ratain_1987_table_1:row2:col5', 'Ratain_1987_table_1:row3:col5', 'Ratain_1987_table_1:row4:col5', 'Ratain_1987_table_1:row5:col5', 'Ratain_1987_table_1:row6:col5', 'Ratain_1987_table_1:row7:col5', 'Ratain_1987_table_1:row8:col5', 'Ratain_1987_table_1:row9:col5', 'Ratain_1987_table_1:row10:col5', 'Ratain_1987_table_1:row11:col5', 'Ratain_1987_table_1:row12:col5', 'Ratain_1987_table_1:row13:col5', 'Ratain_1987_table_1:row14:col5', 'Ratain_1987_table_1:row15:col5', 'Ratain_1987_table_1:row16:col5', 'Ratain_1987_table_1:row17:col5', 'Ratain_1987_table_1:row18:col5', 'Ratain_1987_table_1:row19:col5', 'Ratain_1987_table_1:row20:col5', 'Ratain_1987_table_1:row21:col5', 'Ratain_1987_table_1:row22:col5', 'Ratain_1987_table_1:row23:col5', 'Ratain_1987_table_1:row24:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.25e+03 L | ['Levêque_1996:review'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinblastine%5D%20Vinblastine_Ratain1987_reference&body=Drug%3A%20vinblastine%0ARecord%3A%20Vinblastine_Ratain1987_reference%0APaper%3A%20Ratain_1987%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vinblastine/Vinblastine_Ratain1987_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 18:40 UTC</sub>
