<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;Levothyroxine&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/&quot;},{&quot;label&quot;:&quot;Inada_1975 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levothyroxine_Younis2018_reference&quot;,&quot;label&quot;:&quot;Younis_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Levothyroxine — `Levothyroxine_Inada1975_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="Levothyroxine" model-id="Levothyroxine_Inada1975_reference" status="needs_review" stale="false" population="normal subjects, hypothyroid patients" measured-compound="triiodothyronine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Inada M, Kasagi K, Kurata S, Kazama Y, Takayama H, Torizuka K et al. Estimation of thyroxine and triiodothyronine distribution and of the conversion rate of thyroxine to triiodothyronine in man. The Journal of clinical investigation 55(6):1337–1348 (1975).
  ·  DOI: [10.1172/JCI108053](https://doi.org/10.1172/JCI108053)

## Population and dosing

**Population:** normal subjects and hypothyroid patients · condition hypothyroidism · age group adult · n = 12.

**Dosed compound ≠ measured compound:** dosed L-thyroxine, L-triiodothyronine, measured triiodothyronine.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K. T. | kel | 45 | 1/day |
| M. K. (1) | equation variable | 60 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — levothyroxine: kel 45 1/day.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K. T. | `Q47` · kel | 45 | 1/day | 0.0005208 | 1/s | 1/h | llm (0.6) | Inada_1975_table_2:row12:col2, Inada_1975_table_2:row12:col3, Inada_1975_table_2:row12:col4, Inada_1975_table_2:row12:col5, Inada_1975_table_2:row12:col6, Inada_1975_table_2:row12:col7, Inada_1975_table_2:row12:col8, Inada_1975_table_2:row12:col9, Inada_1975_table_2:row12:col10 |
| M. K. (1) | `Q900` · equation variable | 60 |  |  |  |  | llm (0.6) | Inada_1975_table_2:row14:col2, Inada_1975_table_2:row14:col3, Inada_1975_table_2:row14:col4, Inada_1975_table_2:row14:col5, Inada_1975_table_2:row14:col6, Inada_1975_table_2:row14:col7, Inada_1975_table_2:row14:col8, Inada_1975_table_2:row14:col9, Inada_1975_table_2:row14:col10 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'age' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Y. O.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row3:col2', 'Inada_1975_table_2:row3:col3', 'Inada_1975_table_2:row3:col4', 'Inada_1975_table_2:row3:col5', 'Inada_1975_table_2:row3:col6', 'Inada_1975_table_2:row3:col7', 'Inada_1975_table_2:row3:col8', 'Inada_1975_table_2:row3:col9', 'Inada_1975_table_2:row3:col10'])
- dropped unlinked row (NIL): 'M. U.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row4:col2', 'Inada_1975_table_2:row4:col3', 'Inada_1975_table_2:row4:col4', 'Inada_1975_table_2:row4:col5', 'Inada_1975_table_2:row4:col6', 'Inada_1975_table_2:row4:col7', 'Inada_1975_table_2:row4:col8', 'Inada_1975_table_2:row4:col9', 'Inada_1975_table_2:row4:col10'])
- dropped unlinked row (NIL): 'M. E.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row5:col2', 'Inada_1975_table_2:row5:col3', 'Inada_1975_table_2:row5:col4', 'Inada_1975_table_2:row5:col5', 'Inada_1975_table_2:row5:col6', 'Inada_1975_table_2:row5:col7', 'Inada_1975_table_2:row5:col8', 'Inada_1975_table_2:row5:col9', 'Inada_1975_table_2:row5:col10'])
- dropped unlinked row (NIL): 'I. N.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row6:col2', 'Inada_1975_table_2:row6:col3', 'Inada_1975_table_2:row6:col4', 'Inada_1975_table_2:row6:col5', 'Inada_1975_table_2:row6:col6', 'Inada_1975_table_2:row6:col7', 'Inada_1975_table_2:row6:col8', 'Inada_1975_table_2:row6:col9', 'Inada_1975_table_2:row6:col10'])
- dropped unlinked row (NIL): 'S. Y.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row7:col2', 'Inada_1975_table_2:row7:col3', 'Inada_1975_table_2:row7:col4', 'Inada_1975_table_2:row7:col5', 'Inada_1975_table_2:row7:col6', 'Inada_1975_table_2:row7:col7', 'Inada_1975_table_2:row7:col8', 'Inada_1975_table_2:row7:col9', 'Inada_1975_table_2:row7:col10'])
- dropped unlinked row (NIL): 'Mean±SD' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row8:col3', 'Inada_1975_table_2:row8:col4', 'Inada_1975_table_2:row8:col5', 'Inada_1975_table_2:row8:col6', 'Inada_1975_table_2:row8:col7', 'Inada_1975_table_2:row8:col8', 'Inada_1975_table_2:row8:col9', 'Inada_1975_table_2:row8:col10', 'Inada_1975_table_2:row15:col3', 'Inada_1975_table_2:row15:col4', 'Inada_1975_table_2:row15:col5', 'Inada_1975_table_2:row15:col6', 'Inada_1975_table_2:row15:col7', 'Inada_1975_table_2:row15:col8', 'Inada_1975_table_2:row15:col9', 'Inada_1975_table_2:row15:col10', 'Inada_1975_table_2:row22:col3', 'Inada_1975_table_2:row22:col4', 'Inada_1975_table_2:row22:col5', 'Inada_1975_table_2:row22:col6', 'Inada_1975_table_2:row22:col7', 'Inada_1975_table_2:row22:col8', 'Inada_1975_table_2:row22:col9', 'Inada_1975_table_2:row22:col10'])
- dropped unlinked row (NIL): 'Y. U.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row11:col2', 'Inada_1975_table_2:row11:col3', 'Inada_1975_table_2:row11:col4', 'Inada_1975_table_2:row11:col5', 'Inada_1975_table_2:row11:col6', 'Inada_1975_table_2:row11:col7', 'Inada_1975_table_2:row11:col8', 'Inada_1975_table_2:row11:col9', 'Inada_1975_table_2:row11:col10'])
- dropped unlinked row (NIL): 'M. Y. (1)' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row13:col2', 'Inada_1975_table_2:row13:col3', 'Inada_1975_table_2:row13:col4', 'Inada_1975_table_2:row13:col5', 'Inada_1975_table_2:row13:col6', 'Inada_1975_table_2:row13:col7', 'Inada_1975_table_2:row13:col8', 'Inada_1975_table_2:row13:col9', 'Inada_1975_table_2:row13:col10'])
- dropped unlinked row (NIL): 'M. Y. (2)' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row19:col2', 'Inada_1975_table_2:row19:col3', 'Inada_1975_table_2:row19:col4', 'Inada_1975_table_2:row19:col5', 'Inada_1975_table_2:row19:col6', 'Inada_1975_table_2:row19:col7', 'Inada_1975_table_2:row19:col8', 'Inada_1975_table_2:row19:col9', 'Inada_1975_table_2:row19:col10'])
- dropped unlinked row (NIL): 'D. K.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row20:col2', 'Inada_1975_table_2:row20:col3', 'Inada_1975_table_2:row20:col4', 'Inada_1975_table_2:row20:col5', 'Inada_1975_table_2:row20:col6', 'Inada_1975_table_2:row20:col7', 'Inada_1975_table_2:row20:col8', 'Inada_1975_table_2:row20:col9', 'Inada_1975_table_2:row20:col10'])
- dropped unlinked row (NIL): 'M. K. (2)' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row21:col2', 'Inada_1975_table_2:row21:col3', 'Inada_1975_table_2:row21:col4', 'Inada_1975_table_2:row21:col5', 'Inada_1975_table_2:row21:col6', 'Inada_1975_table_2:row21:col7', 'Inada_1975_table_2:row21:col8', 'Inada_1975_table_2:row21:col9', 'Inada_1975_table_2:row21:col10'])
- dropped unlinked row (NIL): '8.7' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row1:col1', 'Inada_1975_table_3:row1:col2', 'Inada_1975_table_3:row1:col3', 'Inada_1975_table_3:row1:col4', 'Inada_1975_table_3:row1:col5', 'Inada_1975_table_3:row1:col6', 'Inada_1975_table_3:row1:col7', 'Inada_1975_table_3:row1:col8'])
- dropped unlinked row (NIL): '5.4' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row2:col1', 'Inada_1975_table_3:row2:col2', 'Inada_1975_table_3:row2:col3', 'Inada_1975_table_3:row2:col4', 'Inada_1975_table_3:row2:col5', 'Inada_1975_table_3:row2:col6', 'Inada_1975_table_3:row2:col7', 'Inada_1975_table_3:row2:col8'])
- dropped unlinked row (NIL): '10.4' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row3:col1', 'Inada_1975_table_3:row3:col2', 'Inada_1975_table_3:row3:col3', 'Inada_1975_table_3:row3:col4', 'Inada_1975_table_3:row3:col5', 'Inada_1975_table_3:row3:col6', 'Inada_1975_table_3:row3:col7', 'Inada_1975_table_3:row3:col8', 'Inada_1975_table_3:row11:col1', 'Inada_1975_table_3:row11:col2', 'Inada_1975_table_3:row11:col3', 'Inada_1975_table_3:row11:col4', 'Inada_1975_table_3:row11:col5', 'Inada_1975_table_3:row11:col6', 'Inada_1975_table_3:row11:col7', 'Inada_1975_table_3:row11:col8'])
- dropped unlinked row (NIL): '9.6' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row4:col1', 'Inada_1975_table_3:row4:col2', 'Inada_1975_table_3:row4:col3', 'Inada_1975_table_3:row4:col4', 'Inada_1975_table_3:row4:col5', 'Inada_1975_table_3:row4:col6', 'Inada_1975_table_3:row4:col7', 'Inada_1975_table_3:row4:col8'])
- dropped unlinked row (NIL): '8.1' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row5:col1', 'Inada_1975_table_3:row5:col2', 'Inada_1975_table_3:row5:col3', 'Inada_1975_table_3:row5:col4', 'Inada_1975_table_3:row5:col5', 'Inada_1975_table_3:row5:col6', 'Inada_1975_table_3:row5:col7', 'Inada_1975_table_3:row5:col8'])
- dropped unlinked row (NIL): '8.4' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row6:col1', 'Inada_1975_table_3:row6:col2', 'Inada_1975_table_3:row6:col3', 'Inada_1975_table_3:row6:col4', 'Inada_1975_table_3:row6:col5', 'Inada_1975_table_3:row6:col6', 'Inada_1975_table_3:row6:col7', 'Inada_1975_table_3:row6:col8'])
- dropped duplicate Q900 ('12.2', value '90') — already have one for this compound
- dropped unlinked row (NIL): '10.8' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row9:col1', 'Inada_1975_table_3:row9:col2', 'Inada_1975_table_3:row9:col3', 'Inada_1975_table_3:row9:col4', 'Inada_1975_table_3:row9:col5', 'Inada_1975_table_3:row9:col6', 'Inada_1975_table_3:row9:col7', 'Inada_1975_table_3:row9:col8'])
- dropped unlinked row (NIL): '10.7' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row10:col1', 'Inada_1975_table_3:row10:col2', 'Inada_1975_table_3:row10:col3', 'Inada_1975_table_3:row10:col4', 'Inada_1975_table_3:row10:col5', 'Inada_1975_table_3:row10:col6', 'Inada_1975_table_3:row10:col7', 'Inada_1975_table_3:row10:col8'])
- dropped unlinked row (NIL): '11.0' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row12:col1', 'Inada_1975_table_3:row12:col2', 'Inada_1975_table_3:row12:col3', 'Inada_1975_table_3:row12:col4', 'Inada_1975_table_3:row12:col5', 'Inada_1975_table_3:row12:col6', 'Inada_1975_table_3:row12:col7', 'Inada_1975_table_3:row12:col8'])
- dropped unlinked row (NIL): '11.3' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row15:col1', 'Inada_1975_table_3:row15:col2', 'Inada_1975_table_3:row15:col3', 'Inada_1975_table_3:row15:col4', 'Inada_1975_table_3:row15:col5', 'Inada_1975_table_3:row15:col6', 'Inada_1975_table_3:row15:col7', 'Inada_1975_table_3:row15:col8'])
- dropped unlinked row (NIL): '11.9' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row17:col1', 'Inada_1975_table_3:row17:col2', 'Inada_1975_table_3:row17:col3', 'Inada_1975_table_3:row17:col4', 'Inada_1975_table_3:row17:col5', 'Inada_1975_table_3:row17:col6', 'Inada_1975_table_3:row17:col7', 'Inada_1975_table_3:row17:col8'])
- dropped unlinked row (NIL): '11.8' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_3:row18:col1', 'Inada_1975_table_3:row18:col2', 'Inada_1975_table_3:row18:col3', 'Inada_1975_table_3:row18:col4', 'Inada_1975_table_3:row18:col5', 'Inada_1975_table_3:row18:col6', 'Inada_1975_table_3:row18:col7', 'Inada_1975_table_3:row18:col8'])
- implicit units: 'K. T.' → 1/day (from the paper text: "Table III column 'K12' lists the values (e.g., 0.0172) without a specific unit, but the table header explicitly states '")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=triiodothyronine
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles: 26 per-group rows of none other but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 0 linked by role
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 2 PubChem candidate(s) is 'triiodothyronine' (LLM) — left in mass units
- molar mass: none found for 'triiodothyronine' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'triiodothyronine', not levothyroxine — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Inada_1975_table_2:row12:col2', 'Inada_1975_table_2:row12:col3', 'Inada_1975_table_2:row12:col4', 'Inada_1975_table_2:row12:col5', 'Inada_1975_table_2:row12:col6', 'Inada_1975_table_2:row12:col7', 'Inada_1975_table_2:row12:col8', 'Inada_1975_table_2:row12:col9', 'Inada_1975_table_2:row12:col10'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevothyroxine%5D%20Levothyroxine_Inada1975_reference&body=Drug%3A%20levothyroxine%0ARecord%3A%20Levothyroxine_Inada1975_reference%0APaper%3A%20Inada_1975%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levothyroxine/Levothyroxine_Inada1975_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 12:13 UTC</sub>
