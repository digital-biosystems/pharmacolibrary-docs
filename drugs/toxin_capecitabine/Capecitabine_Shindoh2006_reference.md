<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Capecitabine&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/&quot;},{&quot;label&quot;:&quot;Shindoh_2006 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Gruber2018_reference&quot;,&quot;label&quot;:&quot;Gruber_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Gruber2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Janssen2021_reference&quot;,&quot;label&quot;:&quot;Janssen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Janssen2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_OyagaIriarte2019_reference&quot;,&quot;label&quot;:&quot;Oyaga-Iriarte_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_OyagaIriarte2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Capecitabine — `Capecitabine_Shindoh2006_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Capecitabine" model-id="Capecitabine_Shindoh2006_reference" status="rejected" stale="false" population="cynomolgus monkeys" measured-compound="5&#39;-DFUR" parameterization="mechanistic" topology="1C"></div>

## Citation
Shindoh H, Kawashima A, Shishido N, Nakano K, Kobayashi K, Horii I. Relationship between AUC of 5'-DFUR and toxicity of capecitabine, fluoropyrimidine carbamate analogs, and 5'-DFUR in monkeys, mice, and rats. The Journal of toxicological sciences 31(3):265–285 (2006).
  ·  DOI: [10.2131/jts.31.265](https://doi.org/10.2131/jts.31.265)

## Population and dosing

**Population:** cynomolgus monkeys · condition chronic dietary exposure · age group adult.

**Dosing:** 0.1, 0.5, 1 mmol/kg, oral, multiple.

**Dosed compound ≠ measured compound:** dosed Capecitabine, measured 5'-DFUR.

> **Species: monkey.** This record comes from an animal study (monkey), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| AUC(0-t) (μg*hr/ml) 5'-DFCR Day 0 | Q74 | llm_corrected |
| AUC(0-t) (μg*hr/ml) 5'-DFCR Day 27 | Q19 | llm_corrected |
| AUC(0-t) (μg*hr/ml) 5'-DFUR Day 27 | Q88 | llm_confirmed |
| AUC(0-t) (μg*hr/ml) 5'-DFCR Day 0 | Q19 | llm_corrected |
| AUC(0-t) (μg*hr/ml) 5'-DFCR Day 0 | Q19 | llm_corrected |
| AUC(0-t) (μg*hr/ml) 5'-DFCR Day 27 | Q74 | llm_corrected |
| AUC(0-t) (μg*hr/ml) 5'-DFUR Day 0 | Q19 | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Intact molecule Day 0' — extend the ontology if this is a real PK parameter (source ['Shindoh_2006_table_6:row1:col1', 'Shindoh_2006_table_6:row2:col1', 'Shindoh_2006_table_6:row3:col1', 'Shindoh_2006_table_6:row5:col1', 'Shindoh_2006_table_6:row6:col1', 'Shindoh_2006_table_6:row7:col1', 'Shindoh_2006_table_6:row9:col1', 'Shindoh_2006_table_6:row10:col1', 'Shindoh_2006_table_6:row11:col1', 'Shindoh_2006_table_6:row13:col1', 'Shindoh_2006_table_6:row14:col1', 'Shindoh_2006_table_6:row16:col1', 'Shindoh_2006_table_6:row17:col1', 'Shindoh_2006_table_6:row19:col1', 'Shindoh_2006_table_6:row20:col1'])
- dropped unlinked row (NIL): 'Intact molecule Day 27' — extend the ontology if this is a real PK parameter (source ['Shindoh_2006_table_6:row1:col2', 'Shindoh_2006_table_6:row2:col2', 'Shindoh_2006_table_6:row3:col2', 'Shindoh_2006_table_6:row5:col2', 'Shindoh_2006_table_6:row6:col2', 'Shindoh_2006_table_6:row7:col2', 'Shindoh_2006_table_6:row9:col2', 'Shindoh_2006_table_6:row10:col2', 'Shindoh_2006_table_6:row11:col2', 'Shindoh_2006_table_6:row13:col2', 'Shindoh_2006_table_6:row14:col2', 'Shindoh_2006_table_6:row16:col2', 'Shindoh_2006_table_6:row17:col2', 'Shindoh_2006_table_6:row19:col2', 'Shindoh_2006_table_6:row20:col2'])
- dropped duplicate Q19 ("AUC(0-t) (μg*hr/ml) 5'-DFUR Day 0", value None) — already have one for this compound
- dropped duplicate Q19 ("AUC(0-t) (μg*hr/ml) 5'-DFCR Day 27", value None) — already have one for this compound
- dropped duplicate Q19 ("AUC(0-t) (μg*hr/ml) 5'-DFUR Day 27", value None) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5'-DFUR
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- base model from table(s) without population columns (Shindoh_2006:other_prose, Shindoh_2006:prose, Shindoh_2006_table_6); populations 5'-dfcr day 0, 5'-dfcr day 36, 5'-dfur day 0, 5'-dfur day 36, intact molecule day 0, intact molecule day 36 kept as separate records
- row roles: 2 per-group rows of none summary_statistic but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of 5'-DFCR summary_statistic but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of 5'-DFUR summary_statistic but 0 reference group(s) — kept as printed
- row roles: 6 per-group rows of none other but 0 reference group(s) — kept as printed
- row roles: 24 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=noncompartmental; 12/12 row label(s) assigned, 0 linked by role; re-tagged 5'-DFUR→parent ×12, 5'-DFUR→Galocitabine ×12, 5'-DFUR→5'-DFCR ×18
- review gap-fill skipped: this record measures "5'-DFUR", not capecitabine — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 6, 9
- transposed table Shindoh_2006_table_6: logical view retains original source coordinates
- toxin: the located table(s) gave no kinetic value — 1 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Shindoh_2006_table_6:row1:col4', 'Shindoh_2006_table_6:row2:col4', 'Shindoh_2006_table_6:row3:col4'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Shindoh_2006_table_6:row5:col3', 'Shindoh_2006_table_6:row6:col3', 'Shindoh_2006_table_6:row7:col3'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Shindoh_2006_table_6:row9:col3', 'Shindoh_2006_table_6:row10:col3', 'Shindoh_2006_table_6:row11:col3', 'Shindoh_2006_table_6:row13:col3', 'Shindoh_2006_table_6:row14:col3', 'Shindoh_2006_table_6:row16:col3', 'Shindoh_2006_table_6:row17:col3', 'Shindoh_2006_table_6:row19:col3', 'Shindoh_2006_table_6:row20:col3'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Shindoh_2006_table_6:row9:col5', 'Shindoh_2006_table_6:row10:col5', 'Shindoh_2006_table_6:row11:col5', 'Shindoh_2006_table_6:row13:col5', 'Shindoh_2006_table_6:row14:col5', 'Shindoh_2006_table_6:row16:col5', 'Shindoh_2006_table_6:row17:col5', 'Shindoh_2006_table_6:row19:col5', 'Shindoh_2006_table_6:row20:col5', 'Shindoh_2006_table_6:row22:col5', 'Shindoh_2006_table_6:row23:col5'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Shindoh_2006_table_6:row1:col3', 'Shindoh_2006_table_6:row2:col3', 'Shindoh_2006_table_6:row3:col3'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Shindoh_2006_table_6:row9:col4', 'Shindoh_2006_table_6:row10:col4', 'Shindoh_2006_table_6:row11:col4', 'Shindoh_2006_table_6:row13:col4', 'Shindoh_2006_table_6:row14:col4', 'Shindoh_2006_table_6:row16:col4', 'Shindoh_2006_table_6:row17:col4', 'Shindoh_2006_table_6:row19:col4', 'Shindoh_2006_table_6:row20:col4'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Shindoh_2006_table_6:row1:col6', 'Shindoh_2006_table_6:row2:col6', 'Shindoh_2006_table_6:row3:col6'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcapecitabine%5D%20Capecitabine_Shindoh2006_reference&body=Drug%3A%20capecitabine%0ARecord%3A%20Capecitabine_Shindoh2006_reference%0APaper%3A%20Shindoh_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_capecitabine/Capecitabine_Shindoh2006_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 18:33 UTC</sub>
