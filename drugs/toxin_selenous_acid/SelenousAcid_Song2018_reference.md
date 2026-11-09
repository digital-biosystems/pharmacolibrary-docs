<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Selenous acid&quot;,&quot;href&quot;:&quot;drugs/toxin_selenous_acid/&quot;},{&quot;label&quot;:&quot;Song_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Selenous acid — `SelenousAcid_Song2018_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="Selenous acid" model-id="SelenousAcid_Song2018_reference" status="needs_review" stale="false" population="gynecologic cancers" measured-compound="selenium" parameterization="mechanistic" topology="1C"></div>

## Citation
Song M, Kumaran MN, Gounder M, Gibbon DG, Nieves-Neira W, Vaidya A et al. Phase I trial of selenium plus chemotherapy in gynecologic cancers. Gynecologic oncology 150(3):478–486 (2018).
  ·  DOI: [10.1016/j.ygyno.2018.07.001](https://doi.org/10.1016/j.ygyno.2018.07.001)

## Population and dosing

**Population:** gynecologic cancers · condition chemo-naïve patients with gynecologic malignancy · age group adult · n = 45.

**Dosing:** 0.05, 0.1, 0.2, 0.4, 5 mg, iv, multiple.

**Dosed compound ≠ measured compound:** dosed selenious acid, measured selenium.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (mg/ml*min) / C1 | AUC | 4.4 | mg/ml*min |
| Half-life (T½ min) / C1 | t1/2z | 266 | min |
| Clearance (mL/min) / C1 | CL | 127 | mL/min |
| Cmax (μg/L) / C1 | Cmax | 101.3 | μg/L |
| AUC (μg/mL*h) / C1 | AUC/dose | 2562.7 | μg/mL*h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; the clearance plausibility check could not be computed.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. None of the extracted parameters is selenous acid's own; they describe carboplatin. Extracted — carboplatin: AUC 4.4 mg/ml*min, t1/2z 266 min, CL 127 mL/min, Cmax 101 μg/L, AUC/dose 2.56e+03 μg/mL*h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (mg/ml*min) / C1 | `Q88` · AUC | 4.4 | mg/ml*min | 264 | kg*s/m3 | mg/(min·ml) | llm_confirmed (0.6) | T5:row2:col2, T5:row3:col2, T5:row4:col2, T5:row5:col2, T5:row6:col2, T5:row7:col2, T5:row8:col2, T5:row9:col2, T5:row10:col2, T5:row11:col2, T5:row12:col2, T5:row13:col2, T5:row14:col2, T5:row15:col2, T5:row16:col2, T5:row17:col2, T5:row18:col2, T5:row19:col2, T5:row20:col2, T5:row21:col2, T5:row22:col2, T5:row23:col2, T5:row24:col2, T5:row25:col2, T5:row26:col2, T5:row27:col2, T5:row28:col2, T5:row29:col2, T5:row30:col2, T5:row31:col2, T5:row32:col2, T5:row33:col2, T5:row34:col2, T5:row36:col2, T5:row37:col2 |
| Half-life (T½ min) / C1 | `Q57` · t1/2z | 266 | min | 1.596e+04 | s | h | llm (0.6) | T5:row2:col4, T5:row3:col4, T5:row4:col4, T5:row5:col4, T5:row7:col4, T5:row8:col4, T5:row9:col4, T5:row10:col4, T5:row11:col4, T5:row12:col4, T5:row13:col4, T5:row14:col4, T5:row15:col4, T5:row16:col4, T5:row17:col4, T5:row18:col4, T5:row19:col4, T5:row20:col4, T5:row21:col4, T5:row22:col4, T5:row23:col4, T5:row24:col4, T5:row25:col4, T5:row26:col4, T5:row27:col4, T5:row28:col4, T5:row29:col4, T5:row30:col4, T5:row31:col4, T5:row32:col4, T5:row33:col4, T5:row34:col4, T5:row36:col4, T5:row37:col4 |
| Clearance (mL/min) / C1 | `Q22` · CL | 127 | mL/min | 2.117e-06 | m3/s | ml/min | llm_confirmed (0.6) | T5:row2:col6, T5:row3:col6, T5:row4:col6, T5:row5:col6, T5:row6:col6, T5:row7:col6, T5:row8:col6, T5:row9:col6, T5:row10:col6, T5:row11:col6, T5:row12:col6, T5:row13:col6, T5:row14:col6, T5:row15:col6, T5:row16:col6, T5:row17:col6, T5:row18:col6, T5:row19:col6, T5:row20:col6, T5:row21:col6, T5:row22:col6, T5:row23:col6, T5:row24:col6, T5:row25:col6, T5:row26:col6, T5:row27:col6, T5:row28:col6, T5:row29:col6, T5:row30:col6, T5:row31:col6, T5:row32:col6, T5:row33:col6, T5:row34:col6, T5:row36:col6, T5:row37:col6 |
| Cmax (μg/L) / C1 | `Q32` · Cmax | 101.3 | μg/L | 0.0001013 | kg/m3 | µg/l | llm_confirmed (0.6) | Song_2018_table_4:row1:col1, Song_2018_table_4:row2:col1, Song_2018_table_4:row3:col1, Song_2018_table_4:row5:col1 |
| AUC (μg/mL*h) / C1 | `Q189` · AUC/dose | 2562.7 | μg/mL*h | 9226 | kg*s/m3 | µg/(h·ml) | llm_corrected (0.6) | Song_2018_table_4:row1:col3, Song_2018_table_4:row2:col3, Song_2018_table_4:row3:col3, Song_2018_table_4:row4:col3, Song_2018_table_4:row5:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '6' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '7' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '9' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '11' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '12' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '13' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '14' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '15' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '16' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '17' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '18' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '20' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '21' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '22' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '23' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '24' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '25' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '26' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '27' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '32' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '33' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '35' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '36' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '37' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '38' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '39' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '40' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '800' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '1000' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '1200' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2000' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5000' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Se Dose (μg)' — extend the ontology if this is a real PK parameter (source ['T5:row2:col1', 'T5:row3:col1', 'T5:row4:col1', 'T5:row5:col1', 'T5:row6:col1', 'T5:row7:col1', 'T5:row8:col1', 'T5:row9:col1', 'T5:row10:col1', 'T5:row11:col1', 'T5:row12:col1', 'T5:row13:col1', 'T5:row14:col1', 'T5:row15:col1', 'T5:row16:col1', 'T5:row17:col1', 'T5:row18:col1', 'T5:row19:col1', 'T5:row20:col1', 'T5:row21:col1', 'T5:row22:col1', 'T5:row23:col1', 'T5:row24:col1', 'T5:row25:col1', 'T5:row26:col1', 'T5:row27:col1', 'T5:row28:col1', 'T5:row29:col1', 'T5:row30:col1', 'T5:row31:col1', 'T5:row32:col1', 'T5:row33:col1', 'T5:row34:col1'])
- dropped duplicate Q88 ('AUC (mg/ml*min) / C 2', value '5.7') — already have one for this compound
- dropped duplicate Q57 ('Half-life (T½ min) / C2', value '257') — already have one for this compound
- dropped duplicate Q22 ('Clearance (mL/min) / C2', value '132') — already have one for this compound
- dropped duplicate Q32 ('Cmax (μg/L) / C2', value '72.2') — already have one for this compound
- dropped duplicate Q88 ('AUC (μg/mL*h) / C2', value '1038.9') — already have one for this compound
- dropped duplicate Q57 ('Half- life (T1/2 h) / C1', value '19.1') — already have one for this compound
- dropped duplicate Q57 ('Half- life (T1/2 h) / C2', value '23.2') — already have one for this compound
- dropped duplicate Q22 ('Clearance (L/h) / C1', value '527.7') — already have one for this compound
- dropped duplicate Q22 ('Clearance (L/h) / C2', value '841.5') — already have one for this compound
- implicit units: 'Half-life (T½ min) / C1' → min (from the paper text: 'The paper text explicitly lists the confidence intervals for half-life in minutes: "the 95% CIs for clearance and half-l')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=selenium
- review gap-fill skipped: this record measures 'selenium', not selenous_acid — the review values are the parent's

**Extraction notes:**
- table T5: unbound_uncertainty
- transposed table T5: logical view retains original source coordinates
- table Song_2018_table_4: unparsed_numeric_cell
- transposed table Song_2018_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (39 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q189 | pass | [time] * [mass] / [length] ** 3 |  | ['Song_2018_table_4:row1:col3', 'Song_2018_table_4:row2:col3', 'Song_2018_table_4:row3:col3', 'Song_2018_table_4:row4:col3', 'Song_2018_table_4:row5:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T5:row2:col6', 'T5:row3:col6', 'T5:row4:col6', 'T5:row5:col6', 'T5:row6:col6', 'T5:row7:col6', 'T5:row8:col6', 'T5:row9:col6', 'T5:row10:col6', 'T5:row11:col6', 'T5:row12:col6', 'T5:row13:col6', 'T5:row14:col6', 'T5:row15:col6', 'T5:row16:col6', 'T5:row17:col6', 'T5:row18:col6', 'T5:row19:col6', 'T5:row20:col6', 'T5:row21:col6', 'T5:row22:col6', 'T5:row23:col6', 'T5:row24:col6', 'T5:row25:col6', 'T5:row26:col6', 'T5:row27:col6', 'T5:row28:col6', 'T5:row29:col6', 'T5:row30:col6', 'T5:row31:col6', 'T5:row32:col6', 'T5:row33:col6', 'T5:row34:col6', 'T5:row36:col6', 'T5:row37:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Song_2018_table_4:row1:col1', 'Song_2018_table_4:row2:col1', 'Song_2018_table_4:row3:col1', 'Song_2018_table_4:row5:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['T5:row2:col4', 'T5:row3:col4', 'T5:row4:col4', 'T5:row5:col4', 'T5:row7:col4', 'T5:row8:col4', 'T5:row9:col4', 'T5:row10:col4', 'T5:row11:col4', 'T5:row12:col4', 'T5:row13:col4', 'T5:row14:col4', 'T5:row15:col4', 'T5:row16:col4', 'T5:row17:col4', 'T5:row18:col4', 'T5:row19:col4', 'T5:row20:col4', 'T5:row21:col4', 'T5:row22:col4', 'T5:row23:col4', 'T5:row24:col4', 'T5:row25:col4', 'T5:row26:col4', 'T5:row27:col4', 'T5:row28:col4', 'T5:row29:col4', 'T5:row30:col4', 'T5:row31:col4', 'T5:row32:col4', 'T5:row33:col4', 'T5:row34:col4', 'T5:row36:col4', 'T5:row37:col4'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['T5:row2:col2', 'T5:row3:col2', 'T5:row4:col2', 'T5:row5:col2', 'T5:row6:col2', 'T5:row7:col2', 'T5:row8:col2', 'T5:row9:col2', 'T5:row10:col2', 'T5:row11:col2', 'T5:row12:col2', 'T5:row13:col2', 'T5:row14:col2', 'T5:row15:col2', 'T5:row16:col2', 'T5:row17:col2', 'T5:row18:col2', 'T5:row19:col2', 'T5:row20:col2', 'T5:row21:col2', 'T5:row22:col2', 'T5:row23:col2', 'T5:row24:col2', 'T5:row25:col2', 'T5:row26:col2', 'T5:row27:col2', 'T5:row28:col2', 'T5:row29:col2', 'T5:row30:col2', 'T5:row31:col2', 'T5:row32:col2', 'T5:row33:col2', 'T5:row34:col2', 'T5:row36:col2', 'T5:row37:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 127 | ['T5:row2:col6', 'T5:row3:col6', 'T5:row4:col6', 'T5:row5:col6', 'T5:row6:col6', 'T5:row7:col6', 'T5:row8:col6', 'T5:row9:col6', 'T5:row10:col6', 'T5:row11:col6', 'T5:row12:col6', 'T5:row13:col6', 'T5:row14:col6', 'T5:row15:col6', 'T5:row16:col6', 'T5:row17:col6', 'T5:row18:col6', 'T5:row19:col6', 'T5:row20:col6', 'T5:row21:col6', 'T5:row22:col6', 'T5:row23:col6', 'T5:row24:col6', 'T5:row25:col6', 'T5:row26:col6', 'T5:row27:col6', 'T5:row28:col6', 'T5:row29:col6', 'T5:row30:col6', 'T5:row31:col6', 'T5:row32:col6', 'T5:row33:col6', 'T5:row34:col6', 'T5:row36:col6', 'T5:row37:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.62 L/h | ['T5:row2:col6', 'T5:row3:col6', 'T5:row4:col6', 'T5:row5:col6', 'T5:row6:col6', 'T5:row7:col6', 'T5:row8:col6', 'T5:row9:col6', 'T5:row10:col6', 'T5:row11:col6', 'T5:row12:col6', 'T5:row13:col6', 'T5:row14:col6', 'T5:row15:col6', 'T5:row16:col6', 'T5:row17:col6', 'T5:row18:col6', 'T5:row19:col6', 'T5:row20:col6', 'T5:row21:col6', 'T5:row22:col6', 'T5:row23:col6', 'T5:row24:col6', 'T5:row25:col6', 'T5:row26:col6', 'T5:row27:col6', 'T5:row28:col6', 'T5:row29:col6', 'T5:row30:col6', 'T5:row31:col6', 'T5:row32:col6', 'T5:row33:col6', 'T5:row34:col6', 'T5:row36:col6', 'T5:row37:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bselenous_acid%5D%20SelenousAcid_Song2018_reference&body=Drug%3A%20selenous_acid%0ARecord%3A%20SelenousAcid_Song2018_reference%0APaper%3A%20Song_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_selenous_acid/SelenousAcid_Song2018_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-08 23:16 UTC</sub>
