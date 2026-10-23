<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;Levothyroxine&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/&quot;},{&quot;label&quot;:&quot;Nicoloff_1968 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levothyroxine_Younis2018_reference&quot;,&quot;label&quot;:&quot;Younis_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Levothyroxine — `Levothyroxine_Nicoloff1968_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Levothyroxine" model-id="Levothyroxine_Nicoloff1968_reference" status="rejected" stale="false" population="subjects with thyrotoxicosis and hypothyroidism" measured-compound="thyroxine" parameterization="mechanistic" topology="1C"></div>

## Citation
Nicoloff JT, Dowling JT. Studies of peripheral thyroxine distribution in thyrotoxicosis and hypothyroidism. The Journal of clinical investigation 47(9):2000–2015 (1968).
  ·  DOI: [10.1172/JCI105887](https://doi.org/10.1172/JCI105887)

## Population and dosing

**Population:** subjects with thyrotoxicosis and hypothyroidism · condition thyrotoxicosis and hypothyroidism · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has thyroxine, the second reading levothyroxine; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- column 'age' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'm²' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'm2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Primary hypothyroidism' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_1:row0:col3', 'Nicoloff_1968_table_1:row0:col4', 'Nicoloff_1968_table_1:row0:col5', 'Nicoloff_1968_table_1:row0:col6', 'Nicoloff_1968_table_1:row0:col7', 'Nicoloff_1968_table_1:row1:col3', 'Nicoloff_1968_table_1:row1:col4', 'Nicoloff_1968_table_1:row1:col5', 'Nicoloff_1968_table_1:row1:col6', 'Nicoloff_1968_table_1:row1:col7', 'Nicoloff_1968_table_1:row2:col3', 'Nicoloff_1968_table_1:row2:col4', 'Nicoloff_1968_table_1:row2:col5', 'Nicoloff_1968_table_1:row2:col6', 'Nicoloff_1968_table_1:row2:col7', 'Nicoloff_1968_table_1:row3:col3', 'Nicoloff_1968_table_1:row3:col4', 'Nicoloff_1968_table_1:row3:col5', 'Nicoloff_1968_table_1:row3:col6', 'Nicoloff_1968_table_1:row3:col7', 'Nicoloff_1968_table_1:row4:col3', 'Nicoloff_1968_table_1:row4:col4', 'Nicoloff_1968_table_1:row4:col5', 'Nicoloff_1968_table_1:row4:col6', 'Nicoloff_1968_table_1:row4:col7', 'Nicoloff_1968_table_1:row5:col3', 'Nicoloff_1968_table_1:row5:col4', 'Nicoloff_1968_table_1:row5:col5', 'Nicoloff_1968_table_1:row5:col6', 'Nicoloff_1968_table_1:row5:col7', 'Nicoloff_1968_table_1:row6:col3', 'Nicoloff_1968_table_1:row6:col4', 'Nicoloff_1968_table_1:row6:col5', 'Nicoloff_1968_table_1:row6:col6', 'Nicoloff_1968_table_1:row6:col7', 'Nicoloff_1968_table_1:row7:col3', 'Nicoloff_1968_table_1:row7:col4', 'Nicoloff_1968_table_1:row7:col5', 'Nicoloff_1968_table_1:row7:col6', 'Nicoloff_1968_table_1:row7:col7', 'Nicoloff_1968_table_1:row8:col3', 'Nicoloff_1968_table_1:row8:col4', 'Nicoloff_1968_table_1:row8:col5', 'Nicoloff_1968_table_1:row8:col6', 'Nicoloff_1968_table_1:row8:col7', 'Nicoloff_1968_table_1:row9:col3', 'Nicoloff_1968_table_1:row9:col4', 'Nicoloff_1968_table_1:row9:col5', 'Nicoloff_1968_table_1:row9:col6', 'Nicoloff_1968_table_1:row9:col7', 'Nicoloff_1968_table_1:row10:col3', 'Nicoloff_1968_table_1:row10:col4', 'Nicoloff_1968_table_1:row10:col5', 'Nicoloff_1968_table_1:row10:col6', 'Nicoloff_1968_table_1:row10:col7', 'Nicoloff_1968_table_1:row11:col3', 'Nicoloff_1968_table_1:row11:col4', 'Nicoloff_1968_table_1:row11:col5', 'Nicoloff_1968_table_1:row11:col6', 'Nicoloff_1968_table_1:row11:col7'])
- dropped unlinked row (NIL): 'Primary hypothyroidism, treated' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_1:row12:col3', 'Nicoloff_1968_table_1:row12:col4', 'Nicoloff_1968_table_1:row12:col5', 'Nicoloff_1968_table_1:row12:col6', 'Nicoloff_1968_table_1:row12:col7', 'Nicoloff_1968_table_1:row13:col3', 'Nicoloff_1968_table_1:row13:col4', 'Nicoloff_1968_table_1:row13:col5', 'Nicoloff_1968_table_1:row13:col6', 'Nicoloff_1968_table_1:row13:col7', 'Nicoloff_1968_table_1:row14:col3', 'Nicoloff_1968_table_1:row14:col4', 'Nicoloff_1968_table_1:row14:col5', 'Nicoloff_1968_table_1:row14:col6', 'Nicoloff_1968_table_1:row14:col7', 'Nicoloff_1968_table_1:row15:col3', 'Nicoloff_1968_table_1:row15:col4', 'Nicoloff_1968_table_1:row15:col5', 'Nicoloff_1968_table_1:row15:col6', 'Nicoloff_1968_table_1:row15:col7', 'Nicoloff_1968_table_1:row16:col3', 'Nicoloff_1968_table_1:row16:col4', 'Nicoloff_1968_table_1:row16:col5', 'Nicoloff_1968_table_1:row16:col6', 'Nicoloff_1968_table_1:row16:col7'])
- dropped unlinked row (NIL): "Graves' disease-toxic" — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_1:row17:col3', 'Nicoloff_1968_table_1:row17:col4', 'Nicoloff_1968_table_1:row17:col5', 'Nicoloff_1968_table_1:row17:col6', 'Nicoloff_1968_table_1:row17:col7', 'Nicoloff_1968_table_1:row18:col3', 'Nicoloff_1968_table_1:row18:col4', 'Nicoloff_1968_table_1:row18:col5', 'Nicoloff_1968_table_1:row18:col6', 'Nicoloff_1968_table_1:row18:col7', 'Nicoloff_1968_table_1:row19:col3', 'Nicoloff_1968_table_1:row19:col4', 'Nicoloff_1968_table_1:row19:col5', 'Nicoloff_1968_table_1:row19:col6', 'Nicoloff_1968_table_1:row19:col7', 'Nicoloff_1968_table_1:row20:col3', 'Nicoloff_1968_table_1:row20:col4', 'Nicoloff_1968_table_1:row20:col5', 'Nicoloff_1968_table_1:row20:col6', 'Nicoloff_1968_table_1:row20:col7', 'Nicoloff_1968_table_1:row21:col3', 'Nicoloff_1968_table_1:row21:col4', 'Nicoloff_1968_table_1:row21:col5', 'Nicoloff_1968_table_1:row21:col6', 'Nicoloff_1968_table_1:row21:col7', 'Nicoloff_1968_table_1:row22:col3', 'Nicoloff_1968_table_1:row22:col4', 'Nicoloff_1968_table_1:row22:col5', 'Nicoloff_1968_table_1:row22:col6', 'Nicoloff_1968_table_1:row22:col7', 'Nicoloff_1968_table_1:row23:col3', 'Nicoloff_1968_table_1:row23:col4', 'Nicoloff_1968_table_1:row23:col5', 'Nicoloff_1968_table_1:row23:col6', 'Nicoloff_1968_table_1:row23:col7', 'Nicoloff_1968_table_1:row24:col3', 'Nicoloff_1968_table_1:row24:col4', 'Nicoloff_1968_table_1:row24:col5', 'Nicoloff_1968_table_1:row24:col6', 'Nicoloff_1968_table_1:row24:col7', 'Nicoloff_1968_table_1:row25:col3', 'Nicoloff_1968_table_1:row25:col4', 'Nicoloff_1968_table_1:row25:col5', 'Nicoloff_1968_table_1:row25:col6', 'Nicoloff_1968_table_1:row25:col7', 'Nicoloff_1968_table_1:row26:col3', 'Nicoloff_1968_table_1:row26:col4', 'Nicoloff_1968_table_1:row26:col5', 'Nicoloff_1968_table_1:row26:col6', 'Nicoloff_1968_table_1:row26:col7', 'Nicoloff_1968_table_1:row27:col3', 'Nicoloff_1968_table_1:row27:col4', 'Nicoloff_1968_table_1:row27:col5', 'Nicoloff_1968_table_1:row27:col6', 'Nicoloff_1968_table_1:row27:col7', 'Nicoloff_1968_table_1:row28:col3', 'Nicoloff_1968_table_1:row28:col4', 'Nicoloff_1968_table_1:row28:col5', 'Nicoloff_1968_table_1:row28:col6', 'Nicoloff_1968_table_1:row28:col7', 'Nicoloff_1968_table_1:row29:col3', 'Nicoloff_1968_table_1:row29:col4', 'Nicoloff_1968_table_1:row29:col5', 'Nicoloff_1968_table_1:row29:col6', 'Nicoloff_1968_table_1:row29:col7'])
- dropped unlinked row (NIL): "Graves' disease, eumetabolic" — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_1:row30:col3', 'Nicoloff_1968_table_1:row30:col4', 'Nicoloff_1968_table_1:row30:col5', 'Nicoloff_1968_table_1:row30:col6', 'Nicoloff_1968_table_1:row30:col7', 'Nicoloff_1968_table_1:row31:col3', 'Nicoloff_1968_table_1:row31:col4', 'Nicoloff_1968_table_1:row31:col5', 'Nicoloff_1968_table_1:row31:col6', 'Nicoloff_1968_table_1:row31:col7', 'Nicoloff_1968_table_1:row32:col3', 'Nicoloff_1968_table_1:row32:col4', 'Nicoloff_1968_table_1:row32:col5', 'Nicoloff_1968_table_1:row32:col6', 'Nicoloff_1968_table_1:row32:col7', 'Nicoloff_1968_table_1:row33:col3', 'Nicoloff_1968_table_1:row33:col4', 'Nicoloff_1968_table_1:row33:col5', 'Nicoloff_1968_table_1:row33:col6', 'Nicoloff_1968_table_1:row33:col7', 'Nicoloff_1968_table_1:row34:col3', 'Nicoloff_1968_table_1:row34:col4', 'Nicoloff_1968_table_1:row34:col5', 'Nicoloff_1968_table_1:row34:col6', 'Nicoloff_1968_table_1:row34:col7', 'Nicoloff_1968_table_1:row35:col3', 'Nicoloff_1968_table_1:row35:col4', 'Nicoloff_1968_table_1:row35:col5', 'Nicoloff_1968_table_1:row35:col6', 'Nicoloff_1968_table_1:row35:col7', 'Nicoloff_1968_table_1:row36:col3', 'Nicoloff_1968_table_1:row36:col4', 'Nicoloff_1968_table_1:row36:col5', 'Nicoloff_1968_table_1:row36:col6', 'Nicoloff_1968_table_1:row36:col7', 'Nicoloff_1968_table_1:row37:col3', 'Nicoloff_1968_table_1:row37:col4', 'Nicoloff_1968_table_1:row37:col5', 'Nicoloff_1968_table_1:row37:col6', 'Nicoloff_1968_table_1:row37:col7', 'Nicoloff_1968_table_1:row38:col3', 'Nicoloff_1968_table_1:row38:col4', 'Nicoloff_1968_table_1:row38:col5', 'Nicoloff_1968_table_1:row38:col6', 'Nicoloff_1968_table_1:row38:col7', 'Nicoloff_1968_table_1:row39:col3', 'Nicoloff_1968_table_1:row39:col4', 'Nicoloff_1968_table_1:row39:col5', 'Nicoloff_1968_table_1:row39:col6', 'Nicoloff_1968_table_1:row39:col7', 'Nicoloff_1968_table_1:row40:col3', 'Nicoloff_1968_table_1:row40:col4', 'Nicoloff_1968_table_1:row40:col5', 'Nicoloff_1968_table_1:row40:col6', 'Nicoloff_1968_table_1:row40:col7', 'Nicoloff_1968_table_1:row41:col3', 'Nicoloff_1968_table_1:row41:col4', 'Nicoloff_1968_table_1:row41:col5', 'Nicoloff_1968_table_1:row41:col6', 'Nicoloff_1968_table_1:row41:col7'])
- dropped unlinked row (NIL): "Graves' disease-hypothyroid" — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_3:row0:col3', 'Nicoloff_1968_table_3:row0:col4', 'Nicoloff_1968_table_3:row0:col5', 'Nicoloff_1968_table_3:row0:col6', 'Nicoloff_1968_table_3:row0:col7', 'Nicoloff_1968_table_3:row1:col3', 'Nicoloff_1968_table_3:row1:col4', 'Nicoloff_1968_table_3:row1:col5', 'Nicoloff_1968_table_3:row1:col6', 'Nicoloff_1968_table_3:row1:col7', 'Nicoloff_1968_table_3:row2:col3', 'Nicoloff_1968_table_3:row2:col4', 'Nicoloff_1968_table_3:row2:col5', 'Nicoloff_1968_table_3:row2:col6', 'Nicoloff_1968_table_3:row2:col7', 'Nicoloff_1968_table_3:row3:col3', 'Nicoloff_1968_table_3:row3:col4', 'Nicoloff_1968_table_3:row3:col5', 'Nicoloff_1968_table_3:row3:col6', 'Nicoloff_1968_table_3:row3:col7', 'Nicoloff_1968_table_3:row4:col3', 'Nicoloff_1968_table_3:row4:col4', 'Nicoloff_1968_table_3:row4:col5', 'Nicoloff_1968_table_3:row4:col6', 'Nicoloff_1968_table_3:row4:col7', 'Nicoloff_1968_table_3:row5:col3', 'Nicoloff_1968_table_3:row5:col4', 'Nicoloff_1968_table_3:row5:col5', 'Nicoloff_1968_table_3:row5:col6', 'Nicoloff_1968_table_3:row5:col7'])
- dropped unlinked row (NIL): 'Toxic nodular goiter' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_3:row6:col3', 'Nicoloff_1968_table_3:row6:col4', 'Nicoloff_1968_table_3:row6:col5', 'Nicoloff_1968_table_3:row6:col6', 'Nicoloff_1968_table_3:row6:col7', 'Nicoloff_1968_table_3:row7:col3', 'Nicoloff_1968_table_3:row7:col4', 'Nicoloff_1968_table_3:row7:col5', 'Nicoloff_1968_table_3:row7:col6', 'Nicoloff_1968_table_3:row7:col7', 'Nicoloff_1968_table_3:row8:col3', 'Nicoloff_1968_table_3:row8:col4', 'Nicoloff_1968_table_3:row8:col5', 'Nicoloff_1968_table_3:row8:col6', 'Nicoloff_1968_table_3:row8:col7', 'Nicoloff_1968_table_3:row9:col3', 'Nicoloff_1968_table_3:row9:col4', 'Nicoloff_1968_table_3:row9:col5', 'Nicoloff_1968_table_3:row9:col6', 'Nicoloff_1968_table_3:row9:col7', 'Nicoloff_1968_table_3:row10:col3', 'Nicoloff_1968_table_3:row10:col4', 'Nicoloff_1968_table_3:row10:col5', 'Nicoloff_1968_table_3:row10:col6', 'Nicoloff_1968_table_3:row10:col7'])
- dropped unlinked row (NIL): 'Miscellaneous' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_3:row11:col3', 'Nicoloff_1968_table_3:row11:col4', 'Nicoloff_1968_table_3:row11:col5', 'Nicoloff_1968_table_3:row11:col6', 'Nicoloff_1968_table_3:row11:col7', 'Nicoloff_1968_table_3:row12:col3', 'Nicoloff_1968_table_3:row12:col4', 'Nicoloff_1968_table_3:row12:col5', 'Nicoloff_1968_table_3:row12:col6', 'Nicoloff_1968_table_3:row12:col7', 'Nicoloff_1968_table_3:row13:col3', 'Nicoloff_1968_table_3:row13:col4', 'Nicoloff_1968_table_3:row13:col5', 'Nicoloff_1968_table_3:row13:col6', 'Nicoloff_1968_table_3:row13:col7', 'Nicoloff_1968_table_3:row14:col3', 'Nicoloff_1968_table_3:row14:col4', 'Nicoloff_1968_table_3:row14:col5', 'Nicoloff_1968_table_3:row14:col6', 'Nicoloff_1968_table_3:row14:col7'])
- dropped unlinked row (NIL): 'Control (n = 13)' — extend the ontology if this is a real PK parameter (source ['Nicoloff_1968_table_3:row15:col3', 'Nicoloff_1968_table_3:row15:col4', 'Nicoloff_1968_table_3:row15:col5', 'Nicoloff_1968_table_3:row15:col6', 'Nicoloff_1968_table_3:row15:col7', 'Nicoloff_1968_table_3:row16:col3', 'Nicoloff_1968_table_3:row16:col4', 'Nicoloff_1968_table_3:row16:col5', 'Nicoloff_1968_table_3:row16:col6', 'Nicoloff_1968_table_3:row16:col7'])
- table mostly unlinked (8/8 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=thyroxine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (2/4 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | thyroxine | levothyroxine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | thyroxine | levothyroxine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevothyroxine%5D%20Levothyroxine_Nicoloff1968_reference&body=Drug%3A%20levothyroxine%0ARecord%3A%20Levothyroxine_Nicoloff1968_reference%0APaper%3A%20Nicoloff_1968%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levothyroxine/Levothyroxine_Nicoloff1968_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 12:11 UTC</sub>
