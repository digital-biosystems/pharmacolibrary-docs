<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;disopyramide&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/&quot;},{&quot;label&quot;:&quot;Burk_1983 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Disopyramide_Bryson1978_reference&quot;,&quot;label&quot;:&quot;Bryson_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/Disopyramide_Bryson1978_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Disopyramide_Aso2001_reference&quot;,&quot;label&quot;:&quot;Aso_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/Disopyramide_Aso2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# disopyramide — `Disopyramide_Burk1983_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CLnorm and CL have no unit.

<div class="pk-model-meta" hidden drug="disopyramide" model-id="Disopyramide_Burk1983_reference" status="needs_review" stale="false" population="patients with normal to severely impaired renal function" measured-compound="disopyramide" parameterization="mechanistic" topology="1C"></div>

## Citation
Burk M, Peters U. Disopyramide kinetics in renal impairment: determinants of interindividual variability. Clinical pharmacology and therapeutics 34(3):331–340 (1983).
  ·  DOI: [10.1038/clpt.1983.176](https://doi.org/10.1038/clpt.1983.176)

## Population and dosing

**Population:** patients with normal to severely impaired renal function · condition renal impairment · age group mixed · n = 30.

**Dosing:** 47.6, 186.9 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clcr BSA (ml/min/ 1.73 m²) | CLnorm | 34.6 | ml/min/ 1.73 m² |
| Cltot (ml/min/ 1.73 m²) | CL | 48.7 | ml/min/ 1.73 m² |
| Clren (ml/min/ 1.73 m²) | CLR | 15.3 | ml/min |
| CImet (ml/min/ 1.73 m²) | CL_HD | 33.7 | ml/min |
| Vdss (l/kg) | Vss | 0.61 | l/kg |
| kelβ (hr⁻¹) | kel | 0.070 | hr⁻¹ |
| t1/2β (hr) | t1/2β | 12.3 | hr |
| 2 | V | 32.7 | (liters) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CLnorm and CL have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CLnorm and CL), so that value has no SI equivalent. Extracted — disopyramide: CLnorm 34.6 ml/min/ 1.73 m², CL 48.7 ml/min/ 1.73 m², CLR 15.3 ml/min, CL_HD 33.7 ml/min, Vss 0.61 l/kg, kel 0.07 hr⁻¹, t1/2β 12.3 hr, V 32.7 (liters).

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clcr BSA (ml/min/ 1.73 m²) | `Q354` · CLnorm | 34.6 | ml/min/ 1.73 m² |  |  | ml/(min·1.73m2) | llm (0.6) | Burk_1983_table_2:row1:col1, Burk_1983_table_2:row2:col1, Burk_1983_table_2:row3:col1, Burk_1983_table_2:row4:col1, Burk_1983_table_2:row5:col1, Burk_1983_table_2:row6:col1, Burk_1983_table_2:row7:col1, Burk_1983_table_2:row8:col1, Burk_1983_table_2:row9:col1, Burk_1983_table_2:row10:col1, Burk_1983_table_2:row11:col1, Burk_1983_table_2:row12:col1, Burk_1983_table_2:row13:col1, Burk_1983_table_2:row14:col1, Burk_1983_table_2:row17:col1, Burk_1983_table_2:row18:col1, Burk_1983_table_2:row19:col1, Burk_1983_table_2:row20:col1, Burk_1983_table_2:row21:col1, Burk_1983_table_2:row22:col1, Burk_1983_table_2:row23:col1, Burk_1983_table_2:row24:col1, Burk_1983_table_2:row25:col1, Burk_1983_table_2:row28:col1, Burk_1983_table_2:row29:col1, Burk_1983_table_2:row30:col1, Burk_1983_table_2:row31:col1, Burk_1983_table_2:row32:col1, Burk_1983_table_2:row33:col1, Burk_1983_table_2:row34:col1, Burk_1983_table_2:row35:col1, Burk_1983_table_2:row36:col1, Burk_1983_table_2:row37:col1, Burk_1983_table_2:row38:col1, Burk_1983_table_2:row39:col1, Burk_1983_table_2:row40:col1, Burk_1983_table_2:row43:col1, Burk_1983_table_2:row44:col1 |
| Cltot (ml/min/ 1.73 m²) | `Q22` · CL | 48.7 | ml/min/ 1.73 m² |  |  | ml/(min·1.73m2) | exact (1) | Burk_1983_table_2:row1:col3, Burk_1983_table_2:row2:col3, Burk_1983_table_2:row3:col3, Burk_1983_table_2:row4:col3, Burk_1983_table_2:row5:col3, Burk_1983_table_2:row6:col3, Burk_1983_table_2:row7:col3, Burk_1983_table_2:row8:col3, Burk_1983_table_2:row9:col3, Burk_1983_table_2:row10:col3, Burk_1983_table_2:row11:col3, Burk_1983_table_2:row12:col3, Burk_1983_table_2:row13:col3, Burk_1983_table_2:row14:col3, Burk_1983_table_2:row17:col3, Burk_1983_table_2:row18:col3, Burk_1983_table_2:row19:col3, Burk_1983_table_2:row20:col3, Burk_1983_table_2:row21:col3, Burk_1983_table_2:row22:col3, Burk_1983_table_2:row23:col3, Burk_1983_table_2:row24:col3, Burk_1983_table_2:row25:col3, Burk_1983_table_2:row28:col3, Burk_1983_table_2:row29:col3, Burk_1983_table_2:row30:col3, Burk_1983_table_2:row31:col3, Burk_1983_table_2:row32:col3, Burk_1983_table_2:row33:col3, Burk_1983_table_2:row34:col3, Burk_1983_table_2:row35:col3, Burk_1983_table_2:row36:col3, Burk_1983_table_2:row37:col3, Burk_1983_table_2:row38:col3, Burk_1983_table_2:row39:col3, Burk_1983_table_2:row40:col3, Burk_1983_table_2:row43:col3, Burk_1983_table_2:row44:col3 |
| Clren (ml/min/ 1.73 m²) | `Q26` · CLR | 15.3 | ml/min | 2.55e-07 | m3/s | L/h | llm (0.6) | Burk_1983_table_2:row1:col4, Burk_1983_table_2:row2:col4, Burk_1983_table_2:row3:col4, Burk_1983_table_2:row4:col4, Burk_1983_table_2:row6:col4, Burk_1983_table_2:row7:col4, Burk_1983_table_2:row8:col4, Burk_1983_table_2:row9:col4, Burk_1983_table_2:row10:col4, Burk_1983_table_2:row11:col4, Burk_1983_table_2:row12:col4, Burk_1983_table_2:row13:col4, Burk_1983_table_2:row14:col4, Burk_1983_table_2:row17:col4, Burk_1983_table_2:row18:col4, Burk_1983_table_2:row19:col4, Burk_1983_table_2:row20:col4, Burk_1983_table_2:row21:col4, Burk_1983_table_2:row22:col4, Burk_1983_table_2:row23:col4, Burk_1983_table_2:row24:col4, Burk_1983_table_2:row25:col4, Burk_1983_table_2:row28:col4, Burk_1983_table_2:row29:col4, Burk_1983_table_2:row30:col4, Burk_1983_table_2:row31:col4, Burk_1983_table_2:row33:col4, Burk_1983_table_2:row34:col4, Burk_1983_table_2:row35:col4, Burk_1983_table_2:row36:col4, Burk_1983_table_2:row37:col4, Burk_1983_table_2:row39:col4, Burk_1983_table_2:row40:col4, Burk_1983_table_2:row43:col4, Burk_1983_table_2:row44:col4 |
| CImet (ml/min/ 1.73 m²) | `Q356` · CL_HD | 33.7 | ml/min | 5.617e-07 | m3/s | L/h | llm (0.6) | Burk_1983_table_2:row1:col5, Burk_1983_table_2:row2:col5, Burk_1983_table_2:row3:col5, Burk_1983_table_2:row4:col5, Burk_1983_table_2:row6:col5, Burk_1983_table_2:row7:col5, Burk_1983_table_2:row8:col5, Burk_1983_table_2:row9:col5, Burk_1983_table_2:row10:col5, Burk_1983_table_2:row11:col5, Burk_1983_table_2:row12:col5, Burk_1983_table_2:row13:col5, Burk_1983_table_2:row14:col5, Burk_1983_table_2:row17:col5, Burk_1983_table_2:row18:col5, Burk_1983_table_2:row19:col5, Burk_1983_table_2:row20:col5, Burk_1983_table_2:row21:col5, Burk_1983_table_2:row22:col5, Burk_1983_table_2:row23:col5, Burk_1983_table_2:row24:col5, Burk_1983_table_2:row25:col5, Burk_1983_table_2:row28:col5, Burk_1983_table_2:row29:col5, Burk_1983_table_2:row30:col5, Burk_1983_table_2:row31:col5, Burk_1983_table_2:row33:col5, Burk_1983_table_2:row34:col5, Burk_1983_table_2:row35:col5, Burk_1983_table_2:row36:col5, Burk_1983_table_2:row37:col5, Burk_1983_table_2:row39:col5, Burk_1983_table_2:row40:col5, Burk_1983_table_2:row43:col5, Burk_1983_table_2:row44:col5 |
| Vdss (l/kg) | `Q65` · Vss | 0.61 | l/kg | 0.0427 | m3 | l/kg | llm (0.6) | Burk_1983_table_2:row1:col6, Burk_1983_table_2:row2:col6, Burk_1983_table_2:row3:col6, Burk_1983_table_2:row4:col6, Burk_1983_table_2:row5:col6, Burk_1983_table_2:row6:col6, Burk_1983_table_2:row7:col6, Burk_1983_table_2:row8:col6, Burk_1983_table_2:row9:col6, Burk_1983_table_2:row10:col6, Burk_1983_table_2:row11:col6, Burk_1983_table_2:row12:col6, Burk_1983_table_2:row13:col6, Burk_1983_table_2:row14:col6, Burk_1983_table_2:row17:col6, Burk_1983_table_2:row18:col6, Burk_1983_table_2:row19:col6, Burk_1983_table_2:row20:col6, Burk_1983_table_2:row21:col6, Burk_1983_table_2:row22:col6, Burk_1983_table_2:row23:col6, Burk_1983_table_2:row24:col6, Burk_1983_table_2:row25:col6, Burk_1983_table_2:row28:col6, Burk_1983_table_2:row29:col6, Burk_1983_table_2:row30:col6, Burk_1983_table_2:row31:col6, Burk_1983_table_2:row32:col6, Burk_1983_table_2:row33:col6, Burk_1983_table_2:row34:col6, Burk_1983_table_2:row35:col6, Burk_1983_table_2:row36:col6, Burk_1983_table_2:row37:col6, Burk_1983_table_2:row38:col6, Burk_1983_table_2:row39:col6, Burk_1983_table_2:row40:col6, Burk_1983_table_2:row43:col6, Burk_1983_table_2:row44:col6 |
| kelβ (hr⁻¹) | `Q47` · kel | 0.070 | hr⁻¹ | 1.944e-05 | 1/s | 1/h | llm_confirmed (0.6) | Burk_1983_table_2:row1:col7, Burk_1983_table_2:row2:col7, Burk_1983_table_2:row3:col7, Burk_1983_table_2:row4:col7, Burk_1983_table_2:row5:col7, Burk_1983_table_2:row6:col7, Burk_1983_table_2:row7:col7, Burk_1983_table_2:row8:col7, Burk_1983_table_2:row9:col7, Burk_1983_table_2:row10:col7, Burk_1983_table_2:row11:col7, Burk_1983_table_2:row12:col7, Burk_1983_table_2:row13:col7, Burk_1983_table_2:row14:col7, Burk_1983_table_2:row17:col7, Burk_1983_table_2:row18:col7, Burk_1983_table_2:row19:col7, Burk_1983_table_2:row20:col7, Burk_1983_table_2:row21:col7, Burk_1983_table_2:row22:col7, Burk_1983_table_2:row23:col7, Burk_1983_table_2:row24:col7, Burk_1983_table_2:row25:col7, Burk_1983_table_2:row28:col7, Burk_1983_table_2:row29:col7, Burk_1983_table_2:row30:col7, Burk_1983_table_2:row31:col7, Burk_1983_table_2:row32:col7, Burk_1983_table_2:row33:col7, Burk_1983_table_2:row34:col7, Burk_1983_table_2:row35:col7, Burk_1983_table_2:row36:col7, Burk_1983_table_2:row37:col7, Burk_1983_table_2:row38:col7, Burk_1983_table_2:row39:col7, Burk_1983_table_2:row40:col7, Burk_1983_table_2:row43:col7, Burk_1983_table_2:row44:col7 |
| t1/2β (hr) | `Q60` · t1/2β | 12.3 | hr | 4.428e+04 | s | h | exact (1) | Burk_1983_table_2:row1:col8, Burk_1983_table_2:row2:col8, Burk_1983_table_2:row3:col8, Burk_1983_table_2:row4:col8, Burk_1983_table_2:row5:col8, Burk_1983_table_2:row6:col8, Burk_1983_table_2:row7:col8, Burk_1983_table_2:row8:col8, Burk_1983_table_2:row9:col8, Burk_1983_table_2:row10:col8, Burk_1983_table_2:row11:col8, Burk_1983_table_2:row12:col8, Burk_1983_table_2:row13:col8, Burk_1983_table_2:row14:col8, Burk_1983_table_2:row17:col8, Burk_1983_table_2:row18:col8, Burk_1983_table_2:row19:col8, Burk_1983_table_2:row20:col8, Burk_1983_table_2:row21:col8, Burk_1983_table_2:row22:col8, Burk_1983_table_2:row23:col8, Burk_1983_table_2:row24:col8, Burk_1983_table_2:row25:col8, Burk_1983_table_2:row28:col8, Burk_1983_table_2:row29:col8, Burk_1983_table_2:row30:col8, Burk_1983_table_2:row31:col8, Burk_1983_table_2:row32:col8, Burk_1983_table_2:row33:col8, Burk_1983_table_2:row34:col8, Burk_1983_table_2:row35:col8, Burk_1983_table_2:row36:col8, Burk_1983_table_2:row37:col8, Burk_1983_table_2:row38:col8, Burk_1983_table_2:row39:col8, Burk_1983_table_2:row40:col8, Burk_1983_table_2:row43:col8, Burk_1983_table_2:row44:col8 |
| 2 | `Q61` · V | 32.7 | (liters) | 0.0327 | m3 | L | review_gapfill (0.7) | Kelman_1980:review |

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
- column '14' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '16' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '18' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '21' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '22' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '28' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '29' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '7' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '12' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '13' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '15' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '24' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '30' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '6' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '8' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '9' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '11' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '17' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '20' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '23' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '25' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '26' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '27' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'ml/min/ 1.73 m²' (CLnorm)
- unit_dimension_unknown: 'ml/min/ 1.73 m²' (CL)
- unit_dimension_unknown: 'ml/min/ 1.73 m²' (CLR)
- unit_dimension_unknown: 'ml/min/ 1.73 m²' (CL_HD)
- implicit units: 'Clcr BSA (ml/min/ 1.73 m²)' — the LLM proposed 'ml/min/1.73 m2', whose dimension does not fit Q354; left unset
- implicit units: 'Cltot (ml/min/ 1.73 m²)' — the LLM proposed 'ml/min/1.73 m2', whose dimension does not fit Q22; left unset
- implicit units: 'Clren (ml/min/ 1.73 m²)' → ml/min (from the paper text: "Table III footnote states: 'Disopyramide clearance, expressed in ml/min...'. The text section discussing kinetic paramet")
- implicit units: 'CImet (ml/min/ 1.73 m²)' → ml/min (from the paper text: "Table III footnote states: 'Disopyramide clearance, expressed in ml/min...'. This applies to the disopyramide clearances")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=disopyramide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q61 (V) from Kelman_1980's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- transposed table Burk_1983_table_2: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (4/4 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Burk_1983_table_2:row1:col4', 'Burk_1983_table_2:row2:col4', 'Burk_1983_table_2:row3:col4', 'Burk_1983_table_2:row4:col4', 'Burk_1983_table_2:row6:col4', 'Burk_1983_table_2:row7:col4', 'Burk_1983_table_2:row8:col4', 'Burk_1983_table_2:row9:col4', 'Burk_1983_table_2:row10:col4', 'Burk_1983_table_2:row11:col4', 'Burk_1983_table_2:row12:col4', 'Burk_1983_table_2:row13:col4', 'Burk_1983_table_2:row14:col4', 'Burk_1983_table_2:row17:col4', 'Burk_1983_table_2:row18:col4', 'Burk_1983_table_2:row19:col4', 'Burk_1983_table_2:row20:col4', 'Burk_1983_table_2:row21:col4', 'Burk_1983_table_2:row22:col4', 'Burk_1983_table_2:row23:col4', 'Burk_1983_table_2:row24:col4', 'Burk_1983_table_2:row25:col4', 'Burk_1983_table_2:row28:col4', 'Burk_1983_table_2:row29:col4', 'Burk_1983_table_2:row30:col4', 'Burk_1983_table_2:row31:col4', 'Burk_1983_table_2:row33:col4', 'Burk_1983_table_2:row34:col4', 'Burk_1983_table_2:row35:col4', 'Burk_1983_table_2:row36:col4', 'Burk_1983_table_2:row37:col4', 'Burk_1983_table_2:row39:col4', 'Burk_1983_table_2:row40:col4', 'Burk_1983_table_2:row43:col4', 'Burk_1983_table_2:row44:col4'] |
| C5_dimension_Q356 | pass | [length] ** 3 / [time] |  | ['Burk_1983_table_2:row1:col5', 'Burk_1983_table_2:row2:col5', 'Burk_1983_table_2:row3:col5', 'Burk_1983_table_2:row4:col5', 'Burk_1983_table_2:row6:col5', 'Burk_1983_table_2:row7:col5', 'Burk_1983_table_2:row8:col5', 'Burk_1983_table_2:row9:col5', 'Burk_1983_table_2:row10:col5', 'Burk_1983_table_2:row11:col5', 'Burk_1983_table_2:row12:col5', 'Burk_1983_table_2:row13:col5', 'Burk_1983_table_2:row14:col5', 'Burk_1983_table_2:row17:col5', 'Burk_1983_table_2:row18:col5', 'Burk_1983_table_2:row19:col5', 'Burk_1983_table_2:row20:col5', 'Burk_1983_table_2:row21:col5', 'Burk_1983_table_2:row22:col5', 'Burk_1983_table_2:row23:col5', 'Burk_1983_table_2:row24:col5', 'Burk_1983_table_2:row25:col5', 'Burk_1983_table_2:row28:col5', 'Burk_1983_table_2:row29:col5', 'Burk_1983_table_2:row30:col5', 'Burk_1983_table_2:row31:col5', 'Burk_1983_table_2:row33:col5', 'Burk_1983_table_2:row34:col5', 'Burk_1983_table_2:row35:col5', 'Burk_1983_table_2:row36:col5', 'Burk_1983_table_2:row37:col5', 'Burk_1983_table_2:row39:col5', 'Burk_1983_table_2:row40:col5', 'Burk_1983_table_2:row43:col5', 'Burk_1983_table_2:row44:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Burk_1983_table_2:row1:col7', 'Burk_1983_table_2:row2:col7', 'Burk_1983_table_2:row3:col7', 'Burk_1983_table_2:row4:col7', 'Burk_1983_table_2:row5:col7', 'Burk_1983_table_2:row6:col7', 'Burk_1983_table_2:row7:col7', 'Burk_1983_table_2:row8:col7', 'Burk_1983_table_2:row9:col7', 'Burk_1983_table_2:row10:col7', 'Burk_1983_table_2:row11:col7', 'Burk_1983_table_2:row12:col7', 'Burk_1983_table_2:row13:col7', 'Burk_1983_table_2:row14:col7', 'Burk_1983_table_2:row17:col7', 'Burk_1983_table_2:row18:col7', 'Burk_1983_table_2:row19:col7', 'Burk_1983_table_2:row20:col7', 'Burk_1983_table_2:row21:col7', 'Burk_1983_table_2:row22:col7', 'Burk_1983_table_2:row23:col7', 'Burk_1983_table_2:row24:col7', 'Burk_1983_table_2:row25:col7', 'Burk_1983_table_2:row28:col7', 'Burk_1983_table_2:row29:col7', 'Burk_1983_table_2:row30:col7', 'Burk_1983_table_2:row31:col7', 'Burk_1983_table_2:row32:col7', 'Burk_1983_table_2:row33:col7', 'Burk_1983_table_2:row34:col7', 'Burk_1983_table_2:row35:col7', 'Burk_1983_table_2:row36:col7', 'Burk_1983_table_2:row37:col7', 'Burk_1983_table_2:row38:col7', 'Burk_1983_table_2:row39:col7', 'Burk_1983_table_2:row40:col7', 'Burk_1983_table_2:row43:col7', 'Burk_1983_table_2:row44:col7'] |
| C5_dimension_Q60 | pass | [time] |  | ['Burk_1983_table_2:row1:col8', 'Burk_1983_table_2:row2:col8', 'Burk_1983_table_2:row3:col8', 'Burk_1983_table_2:row4:col8', 'Burk_1983_table_2:row5:col8', 'Burk_1983_table_2:row6:col8', 'Burk_1983_table_2:row7:col8', 'Burk_1983_table_2:row8:col8', 'Burk_1983_table_2:row9:col8', 'Burk_1983_table_2:row10:col8', 'Burk_1983_table_2:row11:col8', 'Burk_1983_table_2:row12:col8', 'Burk_1983_table_2:row13:col8', 'Burk_1983_table_2:row14:col8', 'Burk_1983_table_2:row17:col8', 'Burk_1983_table_2:row18:col8', 'Burk_1983_table_2:row19:col8', 'Burk_1983_table_2:row20:col8', 'Burk_1983_table_2:row21:col8', 'Burk_1983_table_2:row22:col8', 'Burk_1983_table_2:row23:col8', 'Burk_1983_table_2:row24:col8', 'Burk_1983_table_2:row25:col8', 'Burk_1983_table_2:row28:col8', 'Burk_1983_table_2:row29:col8', 'Burk_1983_table_2:row30:col8', 'Burk_1983_table_2:row31:col8', 'Burk_1983_table_2:row32:col8', 'Burk_1983_table_2:row33:col8', 'Burk_1983_table_2:row34:col8', 'Burk_1983_table_2:row35:col8', 'Burk_1983_table_2:row36:col8', 'Burk_1983_table_2:row37:col8', 'Burk_1983_table_2:row38:col8', 'Burk_1983_table_2:row39:col8', 'Burk_1983_table_2:row40:col8', 'Burk_1983_table_2:row43:col8', 'Burk_1983_table_2:row44:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kelman_1980:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Burk_1983_table_2:row1:col6', 'Burk_1983_table_2:row2:col6', 'Burk_1983_table_2:row3:col6', 'Burk_1983_table_2:row4:col6', 'Burk_1983_table_2:row5:col6', 'Burk_1983_table_2:row6:col6', 'Burk_1983_table_2:row7:col6', 'Burk_1983_table_2:row8:col6', 'Burk_1983_table_2:row9:col6', 'Burk_1983_table_2:row10:col6', 'Burk_1983_table_2:row11:col6', 'Burk_1983_table_2:row12:col6', 'Burk_1983_table_2:row13:col6', 'Burk_1983_table_2:row14:col6', 'Burk_1983_table_2:row17:col6', 'Burk_1983_table_2:row18:col6', 'Burk_1983_table_2:row19:col6', 'Burk_1983_table_2:row20:col6', 'Burk_1983_table_2:row21:col6', 'Burk_1983_table_2:row22:col6', 'Burk_1983_table_2:row23:col6', 'Burk_1983_table_2:row24:col6', 'Burk_1983_table_2:row25:col6', 'Burk_1983_table_2:row28:col6', 'Burk_1983_table_2:row29:col6', 'Burk_1983_table_2:row30:col6', 'Burk_1983_table_2:row31:col6', 'Burk_1983_table_2:row32:col6', 'Burk_1983_table_2:row33:col6', 'Burk_1983_table_2:row34:col6', 'Burk_1983_table_2:row35:col6', 'Burk_1983_table_2:row36:col6', 'Burk_1983_table_2:row37:col6', 'Burk_1983_table_2:row38:col6', 'Burk_1983_table_2:row39:col6', 'Burk_1983_table_2:row40:col6', 'Burk_1983_table_2:row43:col6', 'Burk_1983_table_2:row44:col6'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | ml/min/ 1.73 m² | ['Burk_1983_table_2:row1:col3', 'Burk_1983_table_2:row2:col3', 'Burk_1983_table_2:row3:col3', 'Burk_1983_table_2:row4:col3', 'Burk_1983_table_2:row5:col3', 'Burk_1983_table_2:row6:col3', 'Burk_1983_table_2:row7:col3', 'Burk_1983_table_2:row8:col3', 'Burk_1983_table_2:row9:col3', 'Burk_1983_table_2:row10:col3', 'Burk_1983_table_2:row11:col3', 'Burk_1983_table_2:row12:col3', 'Burk_1983_table_2:row13:col3', 'Burk_1983_table_2:row14:col3', 'Burk_1983_table_2:row17:col3', 'Burk_1983_table_2:row18:col3', 'Burk_1983_table_2:row19:col3', 'Burk_1983_table_2:row20:col3', 'Burk_1983_table_2:row21:col3', 'Burk_1983_table_2:row22:col3', 'Burk_1983_table_2:row23:col3', 'Burk_1983_table_2:row24:col3', 'Burk_1983_table_2:row25:col3', 'Burk_1983_table_2:row28:col3', 'Burk_1983_table_2:row29:col3', 'Burk_1983_table_2:row30:col3', 'Burk_1983_table_2:row31:col3', 'Burk_1983_table_2:row32:col3', 'Burk_1983_table_2:row33:col3', 'Burk_1983_table_2:row34:col3', 'Burk_1983_table_2:row35:col3', 'Burk_1983_table_2:row36:col3', 'Burk_1983_table_2:row37:col3', 'Burk_1983_table_2:row38:col3', 'Burk_1983_table_2:row39:col3', 'Burk_1983_table_2:row40:col3', 'Burk_1983_table_2:row43:col3', 'Burk_1983_table_2:row44:col3'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] | ml/min/ 1.73 m² | ['Burk_1983_table_2:row1:col1', 'Burk_1983_table_2:row2:col1', 'Burk_1983_table_2:row3:col1', 'Burk_1983_table_2:row4:col1', 'Burk_1983_table_2:row5:col1', 'Burk_1983_table_2:row6:col1', 'Burk_1983_table_2:row7:col1', 'Burk_1983_table_2:row8:col1', 'Burk_1983_table_2:row9:col1', 'Burk_1983_table_2:row10:col1', 'Burk_1983_table_2:row11:col1', 'Burk_1983_table_2:row12:col1', 'Burk_1983_table_2:row13:col1', 'Burk_1983_table_2:row14:col1', 'Burk_1983_table_2:row17:col1', 'Burk_1983_table_2:row18:col1', 'Burk_1983_table_2:row19:col1', 'Burk_1983_table_2:row20:col1', 'Burk_1983_table_2:row21:col1', 'Burk_1983_table_2:row22:col1', 'Burk_1983_table_2:row23:col1', 'Burk_1983_table_2:row24:col1', 'Burk_1983_table_2:row25:col1', 'Burk_1983_table_2:row28:col1', 'Burk_1983_table_2:row29:col1', 'Burk_1983_table_2:row30:col1', 'Burk_1983_table_2:row31:col1', 'Burk_1983_table_2:row32:col1', 'Burk_1983_table_2:row33:col1', 'Burk_1983_table_2:row34:col1', 'Burk_1983_table_2:row35:col1', 'Burk_1983_table_2:row36:col1', 'Burk_1983_table_2:row37:col1', 'Burk_1983_table_2:row38:col1', 'Burk_1983_table_2:row39:col1', 'Burk_1983_table_2:row40:col1', 'Burk_1983_table_2:row43:col1', 'Burk_1983_table_2:row44:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 48.7 | ['Burk_1983_table_2:row1:col3', 'Burk_1983_table_2:row2:col3', 'Burk_1983_table_2:row3:col3', 'Burk_1983_table_2:row4:col3', 'Burk_1983_table_2:row5:col3', 'Burk_1983_table_2:row6:col3', 'Burk_1983_table_2:row7:col3', 'Burk_1983_table_2:row8:col3', 'Burk_1983_table_2:row9:col3', 'Burk_1983_table_2:row10:col3', 'Burk_1983_table_2:row11:col3', 'Burk_1983_table_2:row12:col3', 'Burk_1983_table_2:row13:col3', 'Burk_1983_table_2:row14:col3', 'Burk_1983_table_2:row17:col3', 'Burk_1983_table_2:row18:col3', 'Burk_1983_table_2:row19:col3', 'Burk_1983_table_2:row20:col3', 'Burk_1983_table_2:row21:col3', 'Burk_1983_table_2:row22:col3', 'Burk_1983_table_2:row23:col3', 'Burk_1983_table_2:row24:col3', 'Burk_1983_table_2:row25:col3', 'Burk_1983_table_2:row28:col3', 'Burk_1983_table_2:row29:col3', 'Burk_1983_table_2:row30:col3', 'Burk_1983_table_2:row31:col3', 'Burk_1983_table_2:row32:col3', 'Burk_1983_table_2:row33:col3', 'Burk_1983_table_2:row34:col3', 'Burk_1983_table_2:row35:col3', 'Burk_1983_table_2:row36:col3', 'Burk_1983_table_2:row37:col3', 'Burk_1983_table_2:row38:col3', 'Burk_1983_table_2:row39:col3', 'Burk_1983_table_2:row40:col3', 'Burk_1983_table_2:row43:col3', 'Burk_1983_table_2:row44:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 32.7 L | ['Kelman_1980:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 42.7 L | ['Burk_1983_table_2:row1:col6', 'Burk_1983_table_2:row2:col6', 'Burk_1983_table_2:row3:col6', 'Burk_1983_table_2:row4:col6', 'Burk_1983_table_2:row5:col6', 'Burk_1983_table_2:row6:col6', 'Burk_1983_table_2:row7:col6', 'Burk_1983_table_2:row8:col6', 'Burk_1983_table_2:row9:col6', 'Burk_1983_table_2:row10:col6', 'Burk_1983_table_2:row11:col6', 'Burk_1983_table_2:row12:col6', 'Burk_1983_table_2:row13:col6', 'Burk_1983_table_2:row14:col6', 'Burk_1983_table_2:row17:col6', 'Burk_1983_table_2:row18:col6', 'Burk_1983_table_2:row19:col6', 'Burk_1983_table_2:row20:col6', 'Burk_1983_table_2:row21:col6', 'Burk_1983_table_2:row22:col6', 'Burk_1983_table_2:row23:col6', 'Burk_1983_table_2:row24:col6', 'Burk_1983_table_2:row25:col6', 'Burk_1983_table_2:row28:col6', 'Burk_1983_table_2:row29:col6', 'Burk_1983_table_2:row30:col6', 'Burk_1983_table_2:row31:col6', 'Burk_1983_table_2:row32:col6', 'Burk_1983_table_2:row33:col6', 'Burk_1983_table_2:row34:col6', 'Burk_1983_table_2:row35:col6', 'Burk_1983_table_2:row36:col6', 'Burk_1983_table_2:row37:col6', 'Burk_1983_table_2:row38:col6', 'Burk_1983_table_2:row39:col6', 'Burk_1983_table_2:row40:col6', 'Burk_1983_table_2:row43:col6', 'Burk_1983_table_2:row44:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdisopyramide%5D%20Disopyramide_Burk1983_reference&body=Drug%3A%20disopyramide%0ARecord%3A%20Disopyramide_Burk1983_reference%0APaper%3A%20Burk_1983%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_disopyramide/Disopyramide_Burk1983_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 13:25 UTC</sub>
