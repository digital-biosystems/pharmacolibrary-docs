<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;Levothyroxine&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/&quot;},{&quot;label&quot;:&quot;Inada_1975 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levothyroxine_Latif2015_reference&quot;,&quot;label&quot;:&quot;Latif_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/Levothyroxine_Latif2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levothyroxine_Younis2018_reference&quot;,&quot;label&quot;:&quot;Younis_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Levothyroxine — `Levothyroxine_Inada1975_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; v3 and Q have no unit.

<div class="pk-model-meta" hidden drug="Levothyroxine" model-id="Levothyroxine_Inada1975_reference" status="needs_review" stale="false" population="normal subjects and hypothyroid patients" measured-compound="thyroxine and triiodothyronine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Inada M, Kasagi K, Kurata S, Kazama Y, Takayama H, Torizuka K et al. Estimation of thyroxine and triiodothyronine distribution and of the conversion rate of thyroxine to triiodothyronine in man. The Journal of clinical investigation 55(6):1337–1348 (1975).
  ·  DOI: [10.1172/JCI108053](https://doi.org/10.1172/JCI108053)

## Population and dosing

**Population:** normal subjects and hypothyroid patients · condition hypothyroidism · age group adult.

**Dosing:** 0.15 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed thyroxine, measured thyroxine and triiodothyronine.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Y. O. | V3 | 21 |  |
| I. N. | equation variable | 25 |  |
| M. K. (2) | Q | 60 |  |
| plasma clearance | CL | 24.13 | mL/min/kg |
| V* | V | 47.0 | liter |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.083). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; v3 and Q have no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Latif_2015) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Extracted — levothyroxine: V3 21, Q 60; thyroxine and triiodothyronine: CL 24.1 mL/min/kg, V 47 liter.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has thyroxine, the second reading levothyroxine; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Y. O. | `Q77` · V3 | 21 |  |  |  |  | llm (0.6) | Inada_1975_table_2:row3:col2, Inada_1975_table_2:row3:col3, Inada_1975_table_2:row3:col4, Inada_1975_table_2:row3:col5, Inada_1975_table_2:row3:col6, Inada_1975_table_2:row3:col7, Inada_1975_table_2:row3:col8, Inada_1975_table_2:row3:col9, Inada_1975_table_2:row3:col10 |
| I. N. | `Q900` · equation variable | 25 |  | 25 |  |  | llm (0.6) | Inada_1975_table_2:row6:col2, Inada_1975_table_2:row6:col3, Inada_1975_table_2:row6:col4, Inada_1975_table_2:row6:col5, Inada_1975_table_2:row6:col6, Inada_1975_table_2:row6:col7, Inada_1975_table_2:row6:col8, Inada_1975_table_2:row6:col9, Inada_1975_table_2:row6:col10 |
| M. K. (2) | `Q30` · Q | 60 |  |  |  |  | llm (0.6) | Inada_1975_table_2:row21:col2, Inada_1975_table_2:row21:col3, Inada_1975_table_2:row21:col4, Inada_1975_table_2:row21:col5, Inada_1975_table_2:row21:col6, Inada_1975_table_2:row21:col7, Inada_1975_table_2:row21:col8, Inada_1975_table_2:row21:col9, Inada_1975_table_2:row21:col10 |
| plasma clearance | `Q22` · CL | 24.13 | mL/min/kg | 2.815e-05 | m3/s | L/h | review_gapfill (0.7) | Latif_2015:review |
| V* | `Q61` · V | 47.0 | liter | 0.047 | m3 | L | review_gapfill (0.7) | Inada_1975:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 't4 kinetic data' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'M. U.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row4:col2', 'Inada_1975_table_2:row4:col3', 'Inada_1975_table_2:row4:col4', 'Inada_1975_table_2:row4:col5', 'Inada_1975_table_2:row4:col6', 'Inada_1975_table_2:row4:col7', 'Inada_1975_table_2:row4:col8', 'Inada_1975_table_2:row4:col9', 'Inada_1975_table_2:row4:col10'])
- dropped unlinked row (NIL): 'M. E.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row5:col2', 'Inada_1975_table_2:row5:col3', 'Inada_1975_table_2:row5:col4', 'Inada_1975_table_2:row5:col5', 'Inada_1975_table_2:row5:col6', 'Inada_1975_table_2:row5:col7', 'Inada_1975_table_2:row5:col8', 'Inada_1975_table_2:row5:col9', 'Inada_1975_table_2:row5:col10'])
- dropped duplicate Q77 ('S. Y.', value '28') — already have one for this compound
- dropped unlinked row (NIL): 'Mean±SD' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row8:col3', 'Inada_1975_table_2:row8:col4', 'Inada_1975_table_2:row8:col5', 'Inada_1975_table_2:row8:col6', 'Inada_1975_table_2:row8:col7', 'Inada_1975_table_2:row8:col8', 'Inada_1975_table_2:row8:col9', 'Inada_1975_table_2:row8:col10', 'Inada_1975_table_2:row15:col3', 'Inada_1975_table_2:row15:col4', 'Inada_1975_table_2:row15:col5', 'Inada_1975_table_2:row15:col6', 'Inada_1975_table_2:row15:col7', 'Inada_1975_table_2:row15:col8', 'Inada_1975_table_2:row15:col9', 'Inada_1975_table_2:row15:col10', 'Inada_1975_table_2:row22:col3', 'Inada_1975_table_2:row22:col4', 'Inada_1975_table_2:row22:col5', 'Inada_1975_table_2:row22:col6', 'Inada_1975_table_2:row22:col7', 'Inada_1975_table_2:row22:col8', 'Inada_1975_table_2:row22:col9', 'Inada_1975_table_2:row22:col10'])
- dropped unlinked row (NIL): 'Y. U.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row11:col2', 'Inada_1975_table_2:row11:col3', 'Inada_1975_table_2:row11:col4', 'Inada_1975_table_2:row11:col5', 'Inada_1975_table_2:row11:col6', 'Inada_1975_table_2:row11:col7', 'Inada_1975_table_2:row11:col8', 'Inada_1975_table_2:row11:col9', 'Inada_1975_table_2:row11:col10'])
- dropped unlinked row (NIL): 'K. T.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row12:col2', 'Inada_1975_table_2:row12:col3', 'Inada_1975_table_2:row12:col4', 'Inada_1975_table_2:row12:col5', 'Inada_1975_table_2:row12:col6', 'Inada_1975_table_2:row12:col7', 'Inada_1975_table_2:row12:col8', 'Inada_1975_table_2:row12:col9', 'Inada_1975_table_2:row12:col10'])
- dropped unlinked row (NIL): 'M. Y. (1)' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row13:col2', 'Inada_1975_table_2:row13:col3', 'Inada_1975_table_2:row13:col4', 'Inada_1975_table_2:row13:col5', 'Inada_1975_table_2:row13:col6', 'Inada_1975_table_2:row13:col7', 'Inada_1975_table_2:row13:col8', 'Inada_1975_table_2:row13:col9', 'Inada_1975_table_2:row13:col10'])
- dropped unlinked row (NIL): 'M. K. (1)' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row14:col2', 'Inada_1975_table_2:row14:col3', 'Inada_1975_table_2:row14:col4', 'Inada_1975_table_2:row14:col5', 'Inada_1975_table_2:row14:col6', 'Inada_1975_table_2:row14:col7', 'Inada_1975_table_2:row14:col8', 'Inada_1975_table_2:row14:col9', 'Inada_1975_table_2:row14:col10'])
- dropped unlinked row (NIL): 'M. Y. (2)' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row19:col2', 'Inada_1975_table_2:row19:col3', 'Inada_1975_table_2:row19:col4', 'Inada_1975_table_2:row19:col5', 'Inada_1975_table_2:row19:col6', 'Inada_1975_table_2:row19:col7', 'Inada_1975_table_2:row19:col8', 'Inada_1975_table_2:row19:col9', 'Inada_1975_table_2:row19:col10'])
- dropped duplicate Q77 ('D. K.', value '53') — already have one for this compound
- dropped unlinked row (NIL): 'Extrapolation method' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row0:col1', 'Inada_1975_table_3:row0:col2', 'Inada_1975_table_3:row1:col1', 'Inada_1975_table_3:row1:col2', 'Inada_1975_table_3:row2:col1', 'Inada_1975_table_3:row2:col2', 'Inada_1975_table_3:row3:col1', 'Inada_1975_table_3:row3:col2', 'Inada_1975_table_3:row4:col1', 'Inada_1975_table_3:row4:col2', 'Inada_1975_table_3:row5:col1', 'Inada_1975_table_3:row5:col2', 'Inada_1975_table_3:row8:col1', 'Inada_1975_table_3:row8:col2', 'Inada_1975_table_3:row9:col1', 'Inada_1975_table_3:row9:col2', 'Inada_1975_table_3:row10:col1', 'Inada_1975_table_3:row10:col2', 'Inada_1975_table_3:row11:col1', 'Inada_1975_table_3:row11:col2', 'Inada_1975_table_3:row12:col1', 'Inada_1975_table_3:row12:col2', 'Inada_1975_table_3:row16:col1', 'Inada_1975_table_3:row16:col2', 'Inada_1975_table_3:row17:col1', 'Inada_1975_table_3:row17:col2', 'Inada_1975_table_3:row18:col1', 'Inada_1975_table_3:row18:col2', 'Inada_1975_table_3:row19:col1', 'Inada_1975_table_3:row19:col2'])
- dropped unlinked row (NIL): 'Three-compartment analysis' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row0:col3', 'Inada_1975_table_3:row0:col4', 'Inada_1975_table_3:row0:col5', 'Inada_1975_table_3:row0:col6', 'Inada_1975_table_3:row0:col7', 'Inada_1975_table_3:row0:col8', 'Inada_1975_table_3:row1:col3', 'Inada_1975_table_3:row1:col4', 'Inada_1975_table_3:row1:col5', 'Inada_1975_table_3:row1:col6', 'Inada_1975_table_3:row1:col7', 'Inada_1975_table_3:row1:col8', 'Inada_1975_table_3:row2:col3', 'Inada_1975_table_3:row2:col5', 'Inada_1975_table_3:row2:col6', 'Inada_1975_table_3:row2:col7', 'Inada_1975_table_3:row2:col8', 'Inada_1975_table_3:row3:col3', 'Inada_1975_table_3:row3:col4', 'Inada_1975_table_3:row3:col5', 'Inada_1975_table_3:row3:col6', 'Inada_1975_table_3:row3:col7', 'Inada_1975_table_3:row3:col8', 'Inada_1975_table_3:row4:col3', 'Inada_1975_table_3:row4:col4', 'Inada_1975_table_3:row4:col5', 'Inada_1975_table_3:row4:col6', 'Inada_1975_table_3:row4:col7', 'Inada_1975_table_3:row4:col8', 'Inada_1975_table_3:row5:col3', 'Inada_1975_table_3:row5:col4', 'Inada_1975_table_3:row5:col5', 'Inada_1975_table_3:row5:col6', 'Inada_1975_table_3:row5:col7', 'Inada_1975_table_3:row5:col8', 'Inada_1975_table_3:row8:col3', 'Inada_1975_table_3:row8:col4', 'Inada_1975_table_3:row8:col5', 'Inada_1975_table_3:row8:col6', 'Inada_1975_table_3:row8:col7', 'Inada_1975_table_3:row8:col8', 'Inada_1975_table_3:row9:col3', 'Inada_1975_table_3:row9:col4', 'Inada_1975_table_3:row9:col5', 'Inada_1975_table_3:row9:col6', 'Inada_1975_table_3:row9:col7', 'Inada_1975_table_3:row9:col8', 'Inada_1975_table_3:row10:col3', 'Inada_1975_table_3:row10:col4', 'Inada_1975_table_3:row10:col5', 'Inada_1975_table_3:row10:col6', 'Inada_1975_table_3:row10:col7', 'Inada_1975_table_3:row10:col8', 'Inada_1975_table_3:row11:col3', 'Inada_1975_table_3:row11:col4', 'Inada_1975_table_3:row11:col5', 'Inada_1975_table_3:row11:col6', 'Inada_1975_table_3:row11:col7', 'Inada_1975_table_3:row11:col8', 'Inada_1975_table_3:row12:col3', 'Inada_1975_table_3:row12:col4', 'Inada_1975_table_3:row12:col5', 'Inada_1975_table_3:row12:col6', 'Inada_1975_table_3:row12:col7', 'Inada_1975_table_3:row12:col8', 'Inada_1975_table_3:row16:col3', 'Inada_1975_table_3:row16:col5', 'Inada_1975_table_3:row16:col6', 'Inada_1975_table_3:row16:col7', 'Inada_1975_table_3:row16:col8', 'Inada_1975_table_3:row17:col3', 'Inada_1975_table_3:row17:col5', 'Inada_1975_table_3:row17:col6', 'Inada_1975_table_3:row17:col7', 'Inada_1975_table_3:row17:col8', 'Inada_1975_table_3:row18:col3', 'Inada_1975_table_3:row18:col5', 'Inada_1975_table_3:row18:col6', 'Inada_1975_table_3:row18:col7', 'Inada_1975_table_3:row18:col8', 'Inada_1975_table_3:row19:col3', 'Inada_1975_table_3:row19:col5', 'Inada_1975_table_3:row19:col6', 'Inada_1975_table_3:row19:col7', 'Inada_1975_table_3:row19:col8'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=thyroxine and triiodothyronine
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- row roles (LLM): model_class=compartmental; 0/15 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for 'thyroxine and triiodothyronine' ('thyroxine and triiodothyronine') — left in mass units
- molar mass: none found for 'thyroxine and triiodothyronine' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Latif_2015's review values (primary lacked it)
- gap-filled Q61 (V) from Inada_1975's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- table Inada_1975_table_2: missing_label
- table Inada_1975_table_3: ambiguous_numeric_format
- table Inada_1975_table_3: units_need_context
- table Inada_1975_table_3: ragged_grid
- transposed table Inada_1975_table_3: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.083 (1/12 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['thyroxine', 'triiodothyronine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[d. k.]` |  | 16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[i. n.]` | 25 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k. t.]` |  | 3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[m. e.]` |  | 28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[m. k.]` | 60 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance]` | 24.13 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v*]` | 47.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[y. o.]` | 21 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | thyroxine | levothyroxine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | thyroxine and triiodothyronine | levothyroxine | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Latif_2015:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Inada_1975:review'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Inada_1975_table_2:row21:col2', 'Inada_1975_table_2:row21:col3', 'Inada_1975_table_2:row21:col4', 'Inada_1975_table_2:row21:col5', 'Inada_1975_table_2:row21:col6', 'Inada_1975_table_2:row21:col7', 'Inada_1975_table_2:row21:col8', 'Inada_1975_table_2:row21:col9', 'Inada_1975_table_2:row21:col10'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 |  | ['Inada_1975_table_2:row3:col2', 'Inada_1975_table_2:row3:col3', 'Inada_1975_table_2:row3:col4', 'Inada_1975_table_2:row3:col5', 'Inada_1975_table_2:row3:col6', 'Inada_1975_table_2:row3:col7', 'Inada_1975_table_2:row3:col8', 'Inada_1975_table_2:row3:col9', 'Inada_1975_table_2:row3:col10'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevothyroxine%5D%20Levothyroxine_Inada1975_reference&body=Drug%3A%20levothyroxine%0ARecord%3A%20Levothyroxine_Inada1975_reference%0APaper%3A%20Inada_1975%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levothyroxine/Levothyroxine_Inada1975_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 01:13 UTC</sub>
