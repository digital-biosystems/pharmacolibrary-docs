<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;Levothyroxine&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/&quot;},{&quot;label&quot;:&quot;Nicoloff_1968 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levothyroxine_Latif2015_reference&quot;,&quot;label&quot;:&quot;Latif_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/Levothyroxine_Latif2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levothyroxine_Younis2018_reference&quot;,&quot;label&quot;:&quot;Younis_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Levothyroxine — `Levothyroxine_Nicoloff1968_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; cLint has no unit.

<div class="pk-model-meta" hidden drug="Levothyroxine" model-id="Levothyroxine_Nicoloff1968_reference" status="needs_review" stale="false" population="patients with thyrotoxicosis and hypothyroidism" measured-compound="thyroxine" parameterization="mechanistic" topology="1C"></div>

## Citation
Nicoloff JT, Dowling JT. Studies of peripheral thyroxine distribution in thyrotoxicosis and hypothyroidism. The Journal of clinical investigation 47(9):2000–2015 (1968).
  ·  DOI: [10.1172/JCI105887](https://doi.org/10.1172/JCI105887)

## Population and dosing

**Population:** patients with thyrotoxicosis and hypothyroidism · condition thyrotoxicosis and hypothyroidism · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 2.60 | CLint | 33.0 |  |
| 2.27 | equation variable | 39.5 |  |
| plasma clearance | CL | 24.13 | mL/min/kg |
| V* | V | 47.0 | liter |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; cLint has no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Inada_1975, Latif_2015) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Extracted — levothyroxine: CLint 33, CL 24.1 mL/min/kg, V 47 liter.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 2.27: this record has 39.5, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 2.60 | `Q3` · CLint | 33.0 |  |  |  |  | llm (0.6) | Nicoloff_1968_table_2:row35:col1, Nicoloff_1968_table_2:row35:col2, Nicoloff_1968_table_2:row35:col3, Nicoloff_1968_table_2:row35:col4, Nicoloff_1968_table_2:row35:col5 |
| 2.27 | `Q900` · equation variable | 39.5 |  | 39.5 |  |  | llm (0.6) | Nicoloff_1968_table_4:row7:col1, Nicoloff_1968_table_4:row7:col2, Nicoloff_1968_table_4:row7:col3, Nicoloff_1968_table_4:row7:col4, Nicoloff_1968_table_4:row7:col5 |
| plasma clearance | `Q22` · CL | 24.13 | mL/min/kg | 2.815e-05 | m3/s | L/h | review_gapfill (0.7) | Latif_2015:review |
| V* | `Q61` · V | 47.0 | liter | 0.047 | m3 | L | review_gapfill (0.7) | Inada_1975:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'm²' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'm2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Primary hypothyroidism' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_1:row0:col3', 'Nicoloff_1968_table_1:row0:col4', 'Nicoloff_1968_table_1:row0:col5', 'Nicoloff_1968_table_1:row0:col6', 'Nicoloff_1968_table_1:row0:col7', 'Nicoloff_1968_table_1:row1:col3', 'Nicoloff_1968_table_1:row1:col4', 'Nicoloff_1968_table_1:row1:col5', 'Nicoloff_1968_table_1:row1:col6', 'Nicoloff_1968_table_1:row1:col7', 'Nicoloff_1968_table_1:row2:col3', 'Nicoloff_1968_table_1:row2:col4', 'Nicoloff_1968_table_1:row2:col5', 'Nicoloff_1968_table_1:row2:col6', 'Nicoloff_1968_table_1:row2:col7', 'Nicoloff_1968_table_1:row3:col3', 'Nicoloff_1968_table_1:row3:col4', 'Nicoloff_1968_table_1:row3:col5', 'Nicoloff_1968_table_1:row3:col6', 'Nicoloff_1968_table_1:row3:col7', 'Nicoloff_1968_table_1:row4:col3', 'Nicoloff_1968_table_1:row4:col4', 'Nicoloff_1968_table_1:row4:col5', 'Nicoloff_1968_table_1:row4:col6', 'Nicoloff_1968_table_1:row4:col7', 'Nicoloff_1968_table_1:row5:col3', 'Nicoloff_1968_table_1:row5:col4', 'Nicoloff_1968_table_1:row5:col5', 'Nicoloff_1968_table_1:row5:col6', 'Nicoloff_1968_table_1:row5:col7', 'Nicoloff_1968_table_1:row6:col3', 'Nicoloff_1968_table_1:row6:col4', 'Nicoloff_1968_table_1:row6:col5', 'Nicoloff_1968_table_1:row6:col6', 'Nicoloff_1968_table_1:row6:col7', 'Nicoloff_1968_table_1:row7:col3', 'Nicoloff_1968_table_1:row7:col4', 'Nicoloff_1968_table_1:row7:col5', 'Nicoloff_1968_table_1:row7:col6', 'Nicoloff_1968_table_1:row7:col7', 'Nicoloff_1968_table_1:row8:col3', 'Nicoloff_1968_table_1:row8:col4', 'Nicoloff_1968_table_1:row8:col5', 'Nicoloff_1968_table_1:row8:col6', 'Nicoloff_1968_table_1:row8:col7', 'Nicoloff_1968_table_1:row9:col3', 'Nicoloff_1968_table_1:row9:col4', 'Nicoloff_1968_table_1:row9:col5', 'Nicoloff_1968_table_1:row9:col6', 'Nicoloff_1968_table_1:row9:col7', 'Nicoloff_1968_table_1:row10:col3', 'Nicoloff_1968_table_1:row10:col4', 'Nicoloff_1968_table_1:row10:col5', 'Nicoloff_1968_table_1:row10:col6', 'Nicoloff_1968_table_1:row10:col7', 'Nicoloff_1968_table_1:row11:col3', 'Nicoloff_1968_table_1:row11:col4', 'Nicoloff_1968_table_1:row11:col5', 'Nicoloff_1968_table_1:row11:col6', 'Nicoloff_1968_table_1:row11:col7'])
- dropped unlinked row (NIL): 'Primary hypothyroidism, treated' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_1:row12:col3', 'Nicoloff_1968_table_1:row12:col4', 'Nicoloff_1968_table_1:row12:col5', 'Nicoloff_1968_table_1:row12:col6', 'Nicoloff_1968_table_1:row12:col7', 'Nicoloff_1968_table_1:row13:col3', 'Nicoloff_1968_table_1:row13:col4', 'Nicoloff_1968_table_1:row13:col5', 'Nicoloff_1968_table_1:row13:col6', 'Nicoloff_1968_table_1:row13:col7', 'Nicoloff_1968_table_1:row14:col3', 'Nicoloff_1968_table_1:row14:col4', 'Nicoloff_1968_table_1:row14:col5', 'Nicoloff_1968_table_1:row14:col6', 'Nicoloff_1968_table_1:row14:col7', 'Nicoloff_1968_table_1:row15:col3', 'Nicoloff_1968_table_1:row15:col4', 'Nicoloff_1968_table_1:row15:col5', 'Nicoloff_1968_table_1:row15:col6', 'Nicoloff_1968_table_1:row15:col7', 'Nicoloff_1968_table_1:row16:col3', 'Nicoloff_1968_table_1:row16:col4', 'Nicoloff_1968_table_1:row16:col5', 'Nicoloff_1968_table_1:row16:col6', 'Nicoloff_1968_table_1:row16:col7'])
- dropped unlinked row (NIL): "Graves' disease-toxic" — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_1:row17:col3', 'Nicoloff_1968_table_1:row17:col4', 'Nicoloff_1968_table_1:row17:col5', 'Nicoloff_1968_table_1:row17:col6', 'Nicoloff_1968_table_1:row17:col7', 'Nicoloff_1968_table_1:row18:col3', 'Nicoloff_1968_table_1:row18:col4', 'Nicoloff_1968_table_1:row18:col5', 'Nicoloff_1968_table_1:row18:col6', 'Nicoloff_1968_table_1:row18:col7', 'Nicoloff_1968_table_1:row19:col3', 'Nicoloff_1968_table_1:row19:col4', 'Nicoloff_1968_table_1:row19:col5', 'Nicoloff_1968_table_1:row19:col6', 'Nicoloff_1968_table_1:row19:col7', 'Nicoloff_1968_table_1:row20:col3', 'Nicoloff_1968_table_1:row20:col4', 'Nicoloff_1968_table_1:row20:col5', 'Nicoloff_1968_table_1:row20:col6', 'Nicoloff_1968_table_1:row20:col7', 'Nicoloff_1968_table_1:row21:col3', 'Nicoloff_1968_table_1:row21:col4', 'Nicoloff_1968_table_1:row21:col5', 'Nicoloff_1968_table_1:row21:col6', 'Nicoloff_1968_table_1:row21:col7', 'Nicoloff_1968_table_1:row22:col3', 'Nicoloff_1968_table_1:row22:col4', 'Nicoloff_1968_table_1:row22:col5', 'Nicoloff_1968_table_1:row22:col6', 'Nicoloff_1968_table_1:row22:col7', 'Nicoloff_1968_table_1:row23:col3', 'Nicoloff_1968_table_1:row23:col4', 'Nicoloff_1968_table_1:row23:col5', 'Nicoloff_1968_table_1:row23:col6', 'Nicoloff_1968_table_1:row23:col7', 'Nicoloff_1968_table_1:row24:col3', 'Nicoloff_1968_table_1:row24:col4', 'Nicoloff_1968_table_1:row24:col5', 'Nicoloff_1968_table_1:row24:col6', 'Nicoloff_1968_table_1:row24:col7', 'Nicoloff_1968_table_1:row25:col3', 'Nicoloff_1968_table_1:row25:col4', 'Nicoloff_1968_table_1:row25:col5', 'Nicoloff_1968_table_1:row25:col6', 'Nicoloff_1968_table_1:row25:col7', 'Nicoloff_1968_table_1:row26:col3', 'Nicoloff_1968_table_1:row26:col4', 'Nicoloff_1968_table_1:row26:col5', 'Nicoloff_1968_table_1:row26:col6', 'Nicoloff_1968_table_1:row26:col7', 'Nicoloff_1968_table_1:row27:col3', 'Nicoloff_1968_table_1:row27:col4', 'Nicoloff_1968_table_1:row27:col5', 'Nicoloff_1968_table_1:row27:col6', 'Nicoloff_1968_table_1:row27:col7', 'Nicoloff_1968_table_1:row28:col3', 'Nicoloff_1968_table_1:row28:col4', 'Nicoloff_1968_table_1:row28:col5', 'Nicoloff_1968_table_1:row28:col6', 'Nicoloff_1968_table_1:row28:col7', 'Nicoloff_1968_table_1:row29:col3', 'Nicoloff_1968_table_1:row29:col4', 'Nicoloff_1968_table_1:row29:col5', 'Nicoloff_1968_table_1:row29:col6', 'Nicoloff_1968_table_1:row29:col7'])
- dropped unlinked row (NIL): "Graves' disease, eumetabolic" — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_1:row30:col3', 'Nicoloff_1968_table_1:row30:col4', 'Nicoloff_1968_table_1:row30:col5', 'Nicoloff_1968_table_1:row30:col6', 'Nicoloff_1968_table_1:row30:col7', 'Nicoloff_1968_table_1:row31:col3', 'Nicoloff_1968_table_1:row31:col4', 'Nicoloff_1968_table_1:row31:col5', 'Nicoloff_1968_table_1:row31:col6', 'Nicoloff_1968_table_1:row31:col7', 'Nicoloff_1968_table_1:row32:col3', 'Nicoloff_1968_table_1:row32:col4', 'Nicoloff_1968_table_1:row32:col5', 'Nicoloff_1968_table_1:row32:col6', 'Nicoloff_1968_table_1:row32:col7', 'Nicoloff_1968_table_1:row33:col3', 'Nicoloff_1968_table_1:row33:col4', 'Nicoloff_1968_table_1:row33:col5', 'Nicoloff_1968_table_1:row33:col6', 'Nicoloff_1968_table_1:row33:col7', 'Nicoloff_1968_table_1:row34:col3', 'Nicoloff_1968_table_1:row34:col4', 'Nicoloff_1968_table_1:row34:col5', 'Nicoloff_1968_table_1:row34:col6', 'Nicoloff_1968_table_1:row34:col7', 'Nicoloff_1968_table_1:row35:col3', 'Nicoloff_1968_table_1:row35:col4', 'Nicoloff_1968_table_1:row35:col5', 'Nicoloff_1968_table_1:row35:col6', 'Nicoloff_1968_table_1:row35:col7', 'Nicoloff_1968_table_1:row36:col3', 'Nicoloff_1968_table_1:row36:col4', 'Nicoloff_1968_table_1:row36:col5', 'Nicoloff_1968_table_1:row36:col6', 'Nicoloff_1968_table_1:row36:col7', 'Nicoloff_1968_table_1:row37:col3', 'Nicoloff_1968_table_1:row37:col4', 'Nicoloff_1968_table_1:row37:col5', 'Nicoloff_1968_table_1:row37:col6', 'Nicoloff_1968_table_1:row37:col7', 'Nicoloff_1968_table_1:row38:col3', 'Nicoloff_1968_table_1:row38:col4', 'Nicoloff_1968_table_1:row38:col5', 'Nicoloff_1968_table_1:row38:col6', 'Nicoloff_1968_table_1:row38:col7', 'Nicoloff_1968_table_1:row39:col3', 'Nicoloff_1968_table_1:row39:col4', 'Nicoloff_1968_table_1:row39:col5', 'Nicoloff_1968_table_1:row39:col6', 'Nicoloff_1968_table_1:row39:col7', 'Nicoloff_1968_table_1:row40:col3', 'Nicoloff_1968_table_1:row40:col4', 'Nicoloff_1968_table_1:row40:col5', 'Nicoloff_1968_table_1:row40:col6', 'Nicoloff_1968_table_1:row40:col7', 'Nicoloff_1968_table_1:row41:col3', 'Nicoloff_1968_table_1:row41:col4', 'Nicoloff_1968_table_1:row41:col5', 'Nicoloff_1968_table_1:row41:col6', 'Nicoloff_1968_table_1:row41:col7'])
- dropped unlinked row (NIL): '2.20' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row1:col1', 'Nicoloff_1968_table_2:row1:col2', 'Nicoloff_1968_table_2:row1:col3', 'Nicoloff_1968_table_2:row1:col4', 'Nicoloff_1968_table_2:row2:col1', 'Nicoloff_1968_table_2:row2:col2', 'Nicoloff_1968_table_2:row2:col3', 'Nicoloff_1968_table_2:row2:col4', 'Nicoloff_1968_table_2:row13:col1', 'Nicoloff_1968_table_2:row13:col2', 'Nicoloff_1968_table_2:row13:col3', 'Nicoloff_1968_table_2:row13:col4', 'Nicoloff_1968_table_2:row15:col1', 'Nicoloff_1968_table_2:row15:col2', 'Nicoloff_1968_table_2:row15:col3', 'Nicoloff_1968_table_2:row15:col4'])
- dropped unlinked row (NIL): '2.58' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row3:col1', 'Nicoloff_1968_table_2:row3:col2', 'Nicoloff_1968_table_2:row3:col3', 'Nicoloff_1968_table_2:row3:col4', 'Nicoloff_1968_table_2:row3:col5'])
- dropped unlinked row (NIL): '3.85' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row4:col1', 'Nicoloff_1968_table_2:row4:col2', 'Nicoloff_1968_table_2:row4:col3', 'Nicoloff_1968_table_2:row4:col4', 'Nicoloff_1968_table_2:row4:col5'])
- dropped unlinked row (NIL): '4.00' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row5:col1', 'Nicoloff_1968_table_2:row5:col2', 'Nicoloff_1968_table_2:row5:col3', 'Nicoloff_1968_table_2:row5:col4'])
- dropped unlinked row (NIL): '3.00' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row6:col1', 'Nicoloff_1968_table_2:row6:col2', 'Nicoloff_1968_table_2:row6:col3', 'Nicoloff_1968_table_2:row6:col4', 'Nicoloff_1968_table_2:row6:col5', 'Nicoloff_1968_table_2:row11:col1', 'Nicoloff_1968_table_2:row11:col2', 'Nicoloff_1968_table_2:row11:col3', 'Nicoloff_1968_table_2:row11:col4', 'Nicoloff_1968_table_2:row27:col1', 'Nicoloff_1968_table_2:row27:col2', 'Nicoloff_1968_table_2:row27:col3', 'Nicoloff_1968_table_2:row27:col4', 'Nicoloff_1968_table_2:row27:col5', 'Nicoloff_1968_table_4:row3:col1', 'Nicoloff_1968_table_4:row3:col2', 'Nicoloff_1968_table_4:row3:col3', 'Nicoloff_1968_table_4:row3:col4'])
- dropped unlinked row (NIL): '2.73' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row7:col1', 'Nicoloff_1968_table_2:row7:col2', 'Nicoloff_1968_table_2:row7:col3', 'Nicoloff_1968_table_2:row7:col4', 'Nicoloff_1968_table_2:row7:col5'])
- dropped unlinked row (NIL): '2.90' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row8:col1', 'Nicoloff_1968_table_2:row8:col2', 'Nicoloff_1968_table_2:row8:col3', 'Nicoloff_1968_table_2:row8:col4', 'Nicoloff_1968_table_2:row8:col5', 'Nicoloff_1968_table_2:row20:col1', 'Nicoloff_1968_table_2:row20:col2', 'Nicoloff_1968_table_2:row20:col3', 'Nicoloff_1968_table_2:row20:col4', 'Nicoloff_1968_table_2:row20:col5'])
- dropped unlinked row (NIL): '2.64' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row9:col1', 'Nicoloff_1968_table_2:row9:col2', 'Nicoloff_1968_table_2:row9:col3', 'Nicoloff_1968_table_2:row9:col4', 'Nicoloff_1968_table_2:row9:col5'])
- dropped unlinked row (NIL): '3.89' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row10:col1', 'Nicoloff_1968_table_2:row10:col2', 'Nicoloff_1968_table_2:row10:col3', 'Nicoloff_1968_table_2:row10:col4', 'Nicoloff_1968_table_2:row10:col5'])
- dropped unlinked row (NIL): '0.68' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row12:col1', 'Nicoloff_1968_table_2:row12:col2', 'Nicoloff_1968_table_2:row12:col3', 'Nicoloff_1968_table_2:row12:col4'])
- dropped unlinked row (NIL): '4.10' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row14:col1', 'Nicoloff_1968_table_2:row14:col2', 'Nicoloff_1968_table_2:row14:col3', 'Nicoloff_1968_table_2:row14:col4'])
- dropped unlinked row (NIL): '3.40' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row16:col1', 'Nicoloff_1968_table_2:row16:col2', 'Nicoloff_1968_table_2:row16:col3', 'Nicoloff_1968_table_2:row16:col4', 'Nicoloff_1968_table_2:row16:col5', 'Nicoloff_1968_table_2:row38:col1', 'Nicoloff_1968_table_2:row38:col2', 'Nicoloff_1968_table_2:row38:col3', 'Nicoloff_1968_table_2:row38:col4', 'Nicoloff_1968_table_2:row38:col5'])
- dropped unlinked row (NIL): '2.63' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row17:col1', 'Nicoloff_1968_table_2:row17:col2', 'Nicoloff_1968_table_2:row17:col3', 'Nicoloff_1968_table_2:row17:col4', 'Nicoloff_1968_table_2:row17:col5'])
- dropped unlinked row (NIL): '3.80' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row18:col1', 'Nicoloff_1968_table_2:row18:col2', 'Nicoloff_1968_table_2:row18:col3', 'Nicoloff_1968_table_2:row18:col4', 'Nicoloff_1968_table_2:row18:col5'])
- dropped unlinked row (NIL): '2.26' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row19:col1', 'Nicoloff_1968_table_2:row19:col2', 'Nicoloff_1968_table_2:row19:col3', 'Nicoloff_1968_table_2:row19:col4', 'Nicoloff_1968_table_2:row19:col5'])
- dropped unlinked row (NIL): '2.40' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row21:col1', 'Nicoloff_1968_table_2:row21:col2', 'Nicoloff_1968_table_2:row21:col3', 'Nicoloff_1968_table_2:row21:col4', 'Nicoloff_1968_table_2:row21:col5'])
- dropped unlinked row (NIL): '3.02' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row22:col1', 'Nicoloff_1968_table_2:row22:col2', 'Nicoloff_1968_table_2:row22:col3', 'Nicoloff_1968_table_2:row22:col4', 'Nicoloff_1968_table_2:row22:col5'])
- dropped unlinked row (NIL): '3.28' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row23:col1', 'Nicoloff_1968_table_2:row23:col2', 'Nicoloff_1968_table_2:row23:col3', 'Nicoloff_1968_table_2:row23:col4', 'Nicoloff_1968_table_2:row23:col5', 'Nicoloff_1968_table_4:row13:col1', 'Nicoloff_1968_table_4:row13:col2', 'Nicoloff_1968_table_4:row13:col3', 'Nicoloff_1968_table_4:row13:col4'])
- dropped unlinked row (NIL): '3.82' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row24:col1', 'Nicoloff_1968_table_2:row24:col2', 'Nicoloff_1968_table_2:row24:col3', 'Nicoloff_1968_table_2:row24:col4', 'Nicoloff_1968_table_2:row24:col5'])
- dropped unlinked row (NIL): '3.08' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row25:col1', 'Nicoloff_1968_table_2:row25:col2', 'Nicoloff_1968_table_2:row25:col3', 'Nicoloff_1968_table_2:row25:col4', 'Nicoloff_1968_table_2:row25:col5', 'Nicoloff_1968_table_2:row32:col1', 'Nicoloff_1968_table_2:row32:col2', 'Nicoloff_1968_table_2:row32:col3', 'Nicoloff_1968_table_2:row32:col4', 'Nicoloff_1968_table_2:row32:col5'])
- dropped unlinked row (NIL): '2.88' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row26:col1', 'Nicoloff_1968_table_2:row26:col2', 'Nicoloff_1968_table_2:row26:col3', 'Nicoloff_1968_table_2:row26:col4', 'Nicoloff_1968_table_2:row26:col5'])
- dropped unlinked row (NIL): '3.30' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row28:col1', 'Nicoloff_1968_table_2:row28:col2', 'Nicoloff_1968_table_2:row28:col3', 'Nicoloff_1968_table_2:row28:col4'])
- dropped unlinked row (NIL): '3.07' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row29:col1', 'Nicoloff_1968_table_2:row29:col2', 'Nicoloff_1968_table_2:row29:col3', 'Nicoloff_1968_table_2:row29:col4', 'Nicoloff_1968_table_2:row29:col5'])
- dropped unlinked row (NIL): '.49' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row30:col1', 'Nicoloff_1968_table_2:row30:col2', 'Nicoloff_1968_table_2:row30:col3', 'Nicoloff_1968_table_2:row30:col4', 'Nicoloff_1968_table_2:row30:col5'])
- dropped unlinked row (NIL): '2.80' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row31:col1', 'Nicoloff_1968_table_2:row31:col2', 'Nicoloff_1968_table_2:row31:col3', 'Nicoloff_1968_table_2:row31:col4', 'Nicoloff_1968_table_2:row31:col5'])
- dropped unlinked row (NIL): '2.78' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row33:col1', 'Nicoloff_1968_table_2:row33:col2', 'Nicoloff_1968_table_2:row33:col3', 'Nicoloff_1968_table_2:row33:col4', 'Nicoloff_1968_table_2:row33:col5', 'Nicoloff_1968_table_2:row40:col1', 'Nicoloff_1968_table_2:row40:col2', 'Nicoloff_1968_table_2:row40:col3', 'Nicoloff_1968_table_2:row40:col4', 'Nicoloff_1968_table_2:row40:col5', 'Nicoloff_1968_table_4:row5:col1', 'Nicoloff_1968_table_4:row5:col2', 'Nicoloff_1968_table_4:row5:col3', 'Nicoloff_1968_table_4:row5:col4'])
- dropped unlinked row (NIL): '2.75' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row34:col1', 'Nicoloff_1968_table_2:row34:col2', 'Nicoloff_1968_table_2:row34:col3', 'Nicoloff_1968_table_2:row34:col4', 'Nicoloff_1968_table_2:row34:col5'])
- dropped unlinked row (NIL): '3.13' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row36:col1', 'Nicoloff_1968_table_2:row36:col2', 'Nicoloff_1968_table_2:row36:col3', 'Nicoloff_1968_table_2:row36:col4'])
- dropped unlinked row (NIL): '2.81' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row37:col1', 'Nicoloff_1968_table_2:row37:col2', 'Nicoloff_1968_table_2:row37:col3', 'Nicoloff_1968_table_2:row37:col4', 'Nicoloff_1968_table_2:row37:col5'])
- dropped unlinked row (NIL): '3.05' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row39:col1', 'Nicoloff_1968_table_2:row39:col2', 'Nicoloff_1968_table_2:row39:col3', 'Nicoloff_1968_table_2:row39:col4', 'Nicoloff_1968_table_2:row39:col5'])
- dropped unlinked row (NIL): '2.92' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row41:col1', 'Nicoloff_1968_table_2:row41:col2', 'Nicoloff_1968_table_2:row41:col3', 'Nicoloff_1968_table_2:row41:col4', 'Nicoloff_1968_table_2:row41:col5'])
- dropped unlinked row (NIL): '0.24' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_2:row42:col1', 'Nicoloff_1968_table_2:row42:col2', 'Nicoloff_1968_table_2:row42:col3', 'Nicoloff_1968_table_2:row42:col4', 'Nicoloff_1968_table_2:row42:col5'])
- dropped unlinked row (NIL): "Graves' disease-hypothyroid" — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_3:row0:col3', 'Nicoloff_1968_table_3:row0:col4', 'Nicoloff_1968_table_3:row0:col5', 'Nicoloff_1968_table_3:row0:col6', 'Nicoloff_1968_table_3:row0:col7', 'Nicoloff_1968_table_3:row1:col3', 'Nicoloff_1968_table_3:row1:col4', 'Nicoloff_1968_table_3:row1:col5', 'Nicoloff_1968_table_3:row1:col6', 'Nicoloff_1968_table_3:row1:col7', 'Nicoloff_1968_table_3:row2:col3', 'Nicoloff_1968_table_3:row2:col4', 'Nicoloff_1968_table_3:row2:col5', 'Nicoloff_1968_table_3:row2:col6', 'Nicoloff_1968_table_3:row2:col7', 'Nicoloff_1968_table_3:row3:col3', 'Nicoloff_1968_table_3:row3:col4', 'Nicoloff_1968_table_3:row3:col5', 'Nicoloff_1968_table_3:row3:col6', 'Nicoloff_1968_table_3:row3:col7', 'Nicoloff_1968_table_3:row4:col3', 'Nicoloff_1968_table_3:row4:col4', 'Nicoloff_1968_table_3:row4:col5', 'Nicoloff_1968_table_3:row4:col6', 'Nicoloff_1968_table_3:row4:col7', 'Nicoloff_1968_table_3:row5:col3', 'Nicoloff_1968_table_3:row5:col4', 'Nicoloff_1968_table_3:row5:col5', 'Nicoloff_1968_table_3:row5:col6', 'Nicoloff_1968_table_3:row5:col7'])
- dropped unlinked row (NIL): 'Toxic nodular goiter' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_3:row6:col3', 'Nicoloff_1968_table_3:row6:col4', 'Nicoloff_1968_table_3:row6:col5', 'Nicoloff_1968_table_3:row6:col6', 'Nicoloff_1968_table_3:row6:col7', 'Nicoloff_1968_table_3:row7:col3', 'Nicoloff_1968_table_3:row7:col4', 'Nicoloff_1968_table_3:row7:col5', 'Nicoloff_1968_table_3:row7:col6', 'Nicoloff_1968_table_3:row7:col7', 'Nicoloff_1968_table_3:row8:col3', 'Nicoloff_1968_table_3:row8:col4', 'Nicoloff_1968_table_3:row8:col5', 'Nicoloff_1968_table_3:row8:col6', 'Nicoloff_1968_table_3:row8:col7', 'Nicoloff_1968_table_3:row9:col3', 'Nicoloff_1968_table_3:row9:col4', 'Nicoloff_1968_table_3:row9:col5', 'Nicoloff_1968_table_3:row9:col6', 'Nicoloff_1968_table_3:row9:col7', 'Nicoloff_1968_table_3:row10:col3', 'Nicoloff_1968_table_3:row10:col4', 'Nicoloff_1968_table_3:row10:col5', 'Nicoloff_1968_table_3:row10:col6', 'Nicoloff_1968_table_3:row10:col7'])
- dropped unlinked row (NIL): 'Miscellaneous' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_3:row11:col3', 'Nicoloff_1968_table_3:row11:col4', 'Nicoloff_1968_table_3:row11:col5', 'Nicoloff_1968_table_3:row11:col6', 'Nicoloff_1968_table_3:row11:col7', 'Nicoloff_1968_table_3:row12:col3', 'Nicoloff_1968_table_3:row12:col4', 'Nicoloff_1968_table_3:row12:col5', 'Nicoloff_1968_table_3:row12:col6', 'Nicoloff_1968_table_3:row12:col7', 'Nicoloff_1968_table_3:row13:col3', 'Nicoloff_1968_table_3:row13:col4', 'Nicoloff_1968_table_3:row13:col5', 'Nicoloff_1968_table_3:row13:col6', 'Nicoloff_1968_table_3:row13:col7', 'Nicoloff_1968_table_3:row14:col3', 'Nicoloff_1968_table_3:row14:col4', 'Nicoloff_1968_table_3:row14:col5', 'Nicoloff_1968_table_3:row14:col6', 'Nicoloff_1968_table_3:row14:col7'])
- dropped unlinked row (NIL): 'Control (n = 13)' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_3:row15:col3', 'Nicoloff_1968_table_3:row15:col4', 'Nicoloff_1968_table_3:row15:col5', 'Nicoloff_1968_table_3:row15:col6', 'Nicoloff_1968_table_3:row15:col7', 'Nicoloff_1968_table_3:row16:col3', 'Nicoloff_1968_table_3:row16:col4', 'Nicoloff_1968_table_3:row16:col5', 'Nicoloff_1968_table_3:row16:col6', 'Nicoloff_1968_table_3:row16:col7'])
- dropped unlinked row (NIL): '2.38' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row1:col1', 'Nicoloff_1968_table_4:row1:col2', 'Nicoloff_1968_table_4:row1:col3', 'Nicoloff_1968_table_4:row1:col4', 'Nicoloff_1968_table_4:row1:col5'])
- dropped unlinked row (NIL): '2.25' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row2:col1', 'Nicoloff_1968_table_4:row2:col2', 'Nicoloff_1968_table_4:row2:col3', 'Nicoloff_1968_table_4:row2:col4'])
- dropped unlinked row (NIL): '3.50' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row4:col1', 'Nicoloff_1968_table_4:row4:col2', 'Nicoloff_1968_table_4:row4:col3', 'Nicoloff_1968_table_4:row4:col4'])
- dropped unlinked row (NIL): '0.58' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row6:col1', 'Nicoloff_1968_table_4:row6:col2', 'Nicoloff_1968_table_4:row6:col3', 'Nicoloff_1968_table_4:row6:col4'])
- dropped unlinked row (NIL): '2.56' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row8:col1', 'Nicoloff_1968_table_4:row8:col2', 'Nicoloff_1968_table_4:row8:col3', 'Nicoloff_1968_table_4:row8:col4'])
- dropped unlinked row (NIL): '2.35' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row9:col1', 'Nicoloff_1968_table_4:row9:col2', 'Nicoloff_1968_table_4:row9:col3', 'Nicoloff_1968_table_4:row9:col4', 'Nicoloff_1968_table_4:row9:col5'])
- dropped unlinked row (NIL): '2.39' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row10:col1', 'Nicoloff_1968_table_4:row10:col2', 'Nicoloff_1968_table_4:row10:col3', 'Nicoloff_1968_table_4:row10:col4'])
- dropped unlinked row (NIL): '.15' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row11:col1', 'Nicoloff_1968_table_4:row11:col2', 'Nicoloff_1968_table_4:row11:col3', 'Nicoloff_1968_table_4:row11:col4'])
- dropped unlinked row (NIL): '2.95' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row12:col1', 'Nicoloff_1968_table_4:row12:col2', 'Nicoloff_1968_table_4:row12:col3', 'Nicoloff_1968_table_4:row12:col4'])
- dropped unlinked row (NIL): '2.50' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row14:col1', 'Nicoloff_1968_table_4:row14:col2', 'Nicoloff_1968_table_4:row14:col3', 'Nicoloff_1968_table_4:row14:col4'])
- dropped unlinked row (NIL): '3.20' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row15:col1', 'Nicoloff_1968_table_4:row15:col2', 'Nicoloff_1968_table_4:row15:col3', 'Nicoloff_1968_table_4:row15:col4', 'Nicoloff_1968_table_4:row15:col5'])
- dropped unlinked row (NIL): '2.72' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row16:col1', 'Nicoloff_1968_table_4:row16:col2', 'Nicoloff_1968_table_4:row16:col3', 'Nicoloff_1968_table_4:row16:col4', 'Nicoloff_1968_table_4:row16:col5'])
- dropped unlinked row (NIL): '0.47' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_4:row17:col1', 'Nicoloff_1968_table_4:row17:col2', 'Nicoloff_1968_table_4:row17:col3', 'Nicoloff_1968_table_4:row17:col4', 'Nicoloff_1968_table_4:row17:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=thyroxine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q22 (CL) from Latif_2015's review values (primary lacked it)
- gap-filled Q61 (V) from Inada_1975's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 1, 2, 3, 4
- table Nicoloff_1968_table_1: units_need_context
- table Nicoloff_1968_table_2: units_need_context
- table Nicoloff_1968_table_2: unparsed_numeric_cell
- table Nicoloff_1968_table_3: units_need_context
- table Nicoloff_1968_table_4: units_need_context
- table Nicoloff_1968_table_4: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.667 (4/6 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[2.27]` | 39.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[2.60]` | 33.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Latif_2015:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Inada_1975:review'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] |  | ['Nicoloff_1968_table_2:row35:col1', 'Nicoloff_1968_table_2:row35:col2', 'Nicoloff_1968_table_2:row35:col3', 'Nicoloff_1968_table_2:row35:col4', 'Nicoloff_1968_table_2:row35:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 24.13 | ['Latif_2015:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 101 L/h | ['Latif_2015:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 47 L | ['Inada_1975:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevothyroxine%5D%20Levothyroxine_Nicoloff1968_reference&body=Drug%3A%20levothyroxine%0ARecord%3A%20Levothyroxine_Nicoloff1968_reference%0APaper%3A%20Nicoloff_1968%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levothyroxine/Levothyroxine_Nicoloff1968_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 01:13 UTC</sub>
