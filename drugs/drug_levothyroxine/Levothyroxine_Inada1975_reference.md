<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;Levothyroxine&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/&quot;},{&quot;label&quot;:&quot;Inada_1975 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levothyroxine_Younis2018_reference&quot;,&quot;label&quot;:&quot;Younis_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Levothyroxine — `Levothyroxine_Inada1975_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — levothyroxine: kel 45 1/day.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `levothyroxine`, measured `triiodothyronine`.

## Citation
Inada M et al., Estimation of thyroxine and triiodothyr…, The Journal of clinical inv… (1975)
  ·  DOI: [10.1172/JCI108053](https://doi.org/10.1172/JCI108053)

<div class="pk-model-meta" hidden drug="Levothyroxine" model-id="Levothyroxine_Inada1975_reference" status="needs_review" stale="false" population="normal subjects and hypothyroid patients" measured-compound="triiodothyronine" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 1 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K. T. | `Q47` · kel | 45 | 1/day | 0.0005208333333333333 | 1/h | not captured | llm (0.6) | Inada_1975_table_2:row12:col2, Inada_1975_table_2:row12:col3, Inada_1975_table_2:row12:col4, Inada_1975_table_2:row12:col5, Inada_1975_table_2:row12:col6, Inada_1975_table_2:row12:col7, Inada_1975_table_2:row12:col8, Inada_1975_table_2:row12:col9, Inada_1975_table_2:row12:col10 | — | not captured |
| M. K. (1) | `Q900` · equation variable | 60 | not captured | not captured | not captured | not captured | llm (0.6) | Inada_1975_table_2:row14:col2, Inada_1975_table_2:row14:col3, Inada_1975_table_2:row14:col4, Inada_1975_table_2:row14:col5, Inada_1975_table_2:row14:col6, Inada_1975_table_2:row14:col7, Inada_1975_table_2:row14:col8, Inada_1975_table_2:row14:col9, Inada_1975_table_2:row14:col10 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Inada_1975_table_2:row12:col2', 'Inada_1975_table_2:row12:col3', 'Inada_1975_table_2:row12:col4', 'Inada_1975_table_2:row12:col5', 'Inada_1975_table_2:row12:col6', 'Inada_1975_table_2:row12:col7', 'Inada_1975_table_2:row12:col8', 'Inada_1975_table_2:row12:col9', 'Inada_1975_table_2:row12:col10'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_levothyroxine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Inada_1975` / `Inada_1975::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:43 UTC</sub>
