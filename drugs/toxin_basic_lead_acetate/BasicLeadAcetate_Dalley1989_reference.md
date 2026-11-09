<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Basic lead acetate&quot;,&quot;href&quot;:&quot;drugs/toxin_basic_lead_acetate/&quot;},{&quot;label&quot;:&quot;Dalley_1989 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Basic lead acetate — `BasicLeadAcetate_Dalley1989_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The hepatic volume parameter for basic lead acetate was assigned a time unit, causing a dimension mismatch and preventing SI conversion.

<div class="pk-model-meta" hidden drug="Basic lead acetate" model-id="BasicLeadAcetate_Dalley1989_reference" status="rejected" stale="false" population="rats" measured-compound="Lead" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Dalley JW, Gupta PK, Lam FC, Hung CT. Interaction of L-ascorbic acid on the disposition of lead in rats. Pharmacology & toxicology 64(4):360–364 (1989).
  ·  DOI: [10.1111/j.1600-0773.1989.tb00665.x](https://doi.org/10.1111/j.1600-0773.1989.tb00665.x)

## Population and dosing

**Population:** rats · condition experimental co-administration · age group adult.

**Dosing:** 1750, 7000 mg, iv, multiple, every 6 h.

**Dosed compound ≠ measured compound:** dosed Lead acetate, measured Lead.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Liver | VH | 22.07 | hr |
| A | equation variable | 550.9 | mg/kg |
| c1, | CL | 6.43 | mg/kg |
| v* | V1 | 4.84 |  |
| vex, | V2 | 9.51 | mg/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The hepatic volume parameter for basic lead acetate was assigned a time unit, causing a dimension mismatch and preventing SI conversion.**

The record lists a liver volume of 22.07 hr, conflicting with the required volume dimension. This incompatible unit prevented the value from being converted to standard units, leaving the parameter without a valid SI value. Additionally, the metabolite Lead acetate is described as a decomposition source without a defined rate parameter, leaving its link undefined. Extracted — Lead: VH 22.1 hr; L-Ascorbic acid: CL 6.43 mg/kg, V1 4.84, V2 9.51 mg/kg.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Liver | `Q368` · VH | 22.07 | hr | h | llm_confirmed (0.6) | Dalley_1989_table_p3_1:row2:col1, Dalley_1989_table_p3_1:row2:col2, Dalley_1989_table_p3_1:row2:col3, Dalley_1989_table_p3_1:row2:col4, Dalley_1989_table_p3_1:row2:col5 |
| A | `Q900` · equation variable | 550.9 | mg/kg | mg/kg | llm (0.6) | Dalley_1989_table_2:row1:col1, Dalley_1989_table_2:row2:col1, Dalley_1989_table_2:row3:col1, Dalley_1989_table_2:row4:col1, Dalley_1989_table_2:row5:col1, Dalley_1989_table_2:row6:col1, Dalley_1989_table_2:row7:col1 |
| c1, | `Q22` · CL | 6.43 | mg/kg | mg/kg | exact (1) | Dalley_1989_table_2:row1:col6, Dalley_1989_table_2:row2:col6, Dalley_1989_table_2:row3:col6, Dalley_1989_table_2:row4:col6, Dalley_1989_table_2:row5:col6, Dalley_1989_table_2:row6:col6, Dalley_1989_table_2:row7:col6 |
| v* | `Q63` · V1 | 4.84 |  |  | exact (1) | Dalley_1989_table_2:row1:col7, Dalley_1989_table_2:row2:col7, Dalley_1989_table_2:row3:col7, Dalley_1989_table_2:row4:col7, Dalley_1989_table_2:row5:col7, Dalley_1989_table_2:row6:col7, Dalley_1989_table_2:row7:col7 |
| vex, | `Q64` · V2 | 9.51 | mg/kg | mg/kg | exact (1) | Dalley_1989_table_2:row1:col12, Dalley_1989_table_2:row2:col12, Dalley_1989_table_2:row3:col12, Dalley_1989_table_2:row4:col12, Dalley_1989_table_2:row5:col12, Dalley_1989_table_2:row6:col12, Dalley_1989_table_2:row7:col12 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'time (hr) 0.5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'time (hr) 2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'time (hr) 12' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'time (hr) 40' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'time (hr) 120' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '6' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Femur' — extend the ontology if this is a real PK parameter (source ['Dalley_1989_table_p3_1:row0:col1', 'Dalley_1989_table_p3_1:row0:col2', 'Dalley_1989_table_p3_1:row0:col3', 'Dalley_1989_table_p3_1:row0:col4', 'Dalley_1989_table_p3_1:row0:col5'])
- dropped unlinked row (NIL): 'Kidney' — extend the ontology if this is a real PK parameter (source ['Dalley_1989_table_p3_1:row1:col1', 'Dalley_1989_table_p3_1:row1:col2', 'Dalley_1989_table_p3_1:row1:col3', 'Dalley_1989_table_p3_1:row1:col4', 'Dalley_1989_table_p3_1:row1:col5'])
- unit_dimension_mismatch: 'Liver' → Q368 (unit '[time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'Plasma' — extend the ontology if this is a real PK parameter (source ['Dalley_1989_table_p3_1:row3:col1', 'Dalley_1989_table_p3_1:row3:col2', 'Dalley_1989_table_p3_1:row3:col3', 'Dalley_1989_table_p3_1:row3:col4', 'Dalley_1989_table_p3_1:row3:col5'])
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['Dalley_1989_table_2:row1:col2', 'Dalley_1989_table_2:row2:col2', 'Dalley_1989_table_2:row3:col2', 'Dalley_1989_table_2:row4:col2', 'Dalley_1989_table_2:row5:col2', 'Dalley_1989_table_2:row6:col2', 'Dalley_1989_table_2:row7:col2'])
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['Dalley_1989_table_2:row1:col3', 'Dalley_1989_table_2:row2:col3', 'Dalley_1989_table_2:row3:col3', 'Dalley_1989_table_2:row4:col3', 'Dalley_1989_table_2:row5:col3', 'Dalley_1989_table_2:row6:col3', 'Dalley_1989_table_2:row7:col3'])
- dropped unlinked row (NIL): 'P' — extend the ontology if this is a real PK parameter (source ['Dalley_1989_table_2:row1:col4', 'Dalley_1989_table_2:row2:col4', 'Dalley_1989_table_2:row3:col4', 'Dalley_1989_table_2:row4:col4', 'Dalley_1989_table_2:row5:col4', 'Dalley_1989_table_2:row6:col4', 'Dalley_1989_table_2:row7:col4'])
- dropped unlinked row (NIL): 'AUC?' — extend the ontology if this is a real PK parameter (source ['Dalley_1989_table_2:row1:col5', 'Dalley_1989_table_2:row2:col5', 'Dalley_1989_table_2:row3:col5', 'Dalley_1989_table_2:row4:col5', 'Dalley_1989_table_2:row5:col5', 'Dalley_1989_table_2:row6:col5', 'Dalley_1989_table_2:row7:col5'])
- unit_dimension_mismatch: 'c1,' → Q22 (unit '[mass]' vs ontology '[length] ** 3 / [time]') — route to review
- linked 'v*' as 'Vc' → Q63 (V1) for L-Ascorbic acid — compound marker removed
- dropped duplicate Q63 ('v c', value '0.24') — already have one for this compound
- dropped unlinked row (NIL): 'tl/,' — extend the ontology if this is a real PK parameter (source ['Dalley_1989_table_2:row1:col9', 'Dalley_1989_table_2:row2:col9', 'Dalley_1989_table_2:row3:col9', 'Dalley_1989_table_2:row4:col9', 'Dalley_1989_table_2:row5:col9', 'Dalley_1989_table_2:row6:col9', 'Dalley_1989_table_2:row7:col9'])
- dropped unlinked row (NIL): 'tl,,,' — extend the ontology if this is a real PK parameter (source ['Dalley_1989_table_2:row1:col10', 'Dalley_1989_table_2:row2:col10', 'Dalley_1989_table_2:row3:col10', 'Dalley_1989_table_2:row4:col10', 'Dalley_1989_table_2:row5:col10', 'Dalley_1989_table_2:row6:col10', 'Dalley_1989_table_2:row7:col10'])
- dropped duplicate Q63 ('V 8 S', value '2.67') — already have one for this compound
- linked 'vex,' as 'Vp' → Q64 (V2) for L-Ascorbic acid — compound marker removed
- unit_dimension_mismatch: 'vex,' → Q64 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Lead
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model (site hepatic: 'the record carries a hepatic compartment parameter (Q368)')
- status held at "Needs review" — not promoted
- row roles: 4 per-group rows of Lead summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 16/16 row label(s) assigned, 35 linked by role; re-tagged parent→Lead ×20, parent→L-Ascorbic acid ×84
- molar mass: no plausible PubChem entry for 'Lead acetate' ('lead acetate') — left in mass units
- molar mass: none found for 'Lead acetate' — its concentrations stay mass-only

**Extraction notes:**
- table Dalley_1989_table_2: ragged_grid
- transposed table Dalley_1989_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (84 record(s))
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | fail | [length] ** 3 / [time] | mg/kg ([mass]) | ['Dalley_1989_table_2:row1:col6', 'Dalley_1989_table_2:row2:col6', 'Dalley_1989_table_2:row3:col6', 'Dalley_1989_table_2:row4:col6', 'Dalley_1989_table_2:row5:col6', 'Dalley_1989_table_2:row6:col6', 'Dalley_1989_table_2:row7:col6'] |
| C5_dimension_Q368 | fail | [length] ** 3 | hr ([time]) | ['Dalley_1989_table_p3_1:row2:col1', 'Dalley_1989_table_p3_1:row2:col2', 'Dalley_1989_table_p3_1:row2:col3', 'Dalley_1989_table_p3_1:row2:col4', 'Dalley_1989_table_p3_1:row2:col5'] |
| C5_dimension_Q64 | fail | [length] ** 3 | mg/kg ([mass]) | ['Dalley_1989_table_2:row1:col12', 'Dalley_1989_table_2:row2:col12', 'Dalley_1989_table_2:row3:col12', 'Dalley_1989_table_2:row4:col12', 'Dalley_1989_table_2:row5:col12', 'Dalley_1989_table_2:row6:col12', 'Dalley_1989_table_2:row7:col12'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 |  | ['Dalley_1989_table_2:row1:col7', 'Dalley_1989_table_2:row2:col7', 'Dalley_1989_table_2:row3:col7', 'Dalley_1989_table_2:row4:col7', 'Dalley_1989_table_2:row5:col7', 'Dalley_1989_table_2:row6:col7', 'Dalley_1989_table_2:row7:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.43 | ['Dalley_1989_table_2:row1:col6', 'Dalley_1989_table_2:row2:col6', 'Dalley_1989_table_2:row3:col6', 'Dalley_1989_table_2:row4:col6', 'Dalley_1989_table_2:row5:col6', 'Dalley_1989_table_2:row6:col6', 'Dalley_1989_table_2:row7:col6'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbasic_lead_acetate%5D%20BasicLeadAcetate_Dalley1989_reference&body=Drug%3A%20basic_lead_acetate%0ARecord%3A%20BasicLeadAcetate_Dalley1989_reference%0APaper%3A%20Dalley_1989%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_basic_lead_acetate/BasicLeadAcetate_Dalley1989_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 07:08 UTC</sub>
