<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glibenclamide&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/&quot;},{&quot;label&quot;:&quot;Rambiritch_2016_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Rambiritch_2016_FBG_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 FBG&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_FBG_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rambiritch_2016_full_glucose_profile&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 full glucose profile&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_full_glucose_profile.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rambiritch_2016_full_glucose_profile_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 full glucose profile&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_full_glucose_profile_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rambiritch_2016_mean_glucose_concentration&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 mean glucose concentration&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_mean_glucose_concentration.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rambiritch_2016_mean_glucose_concentration_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 mean glucose concentration&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_mean_glucose_concentration_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rambiritch_2016_FBG&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 FBG&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_FBG.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glibenclamide — `Glibenclamide_Rambiritch2016v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Glibenclamide absorption rate constant was assigned 0.63 L/h, a volume unit incompatible with a first-order rate constant, causing rejection.

<div class="pk-model-meta" hidden drug="glibenclamide" model-id="Glibenclamide_Rambiritch2016v2_reference" status="rejected" stale="false" population="South African adults with type 2 diabetes" measured-compound="glibenclamide" parameterization="apparent" topology="1C"></div>

## Citation
Rambiritch V, Naidoo P, Maharaj B, Pillai G. Population pharmacokinetic modeling of glibenclamide in poorly controlled South African type 2 diabetic subjects. Clinical pharmacology : advances and applications 8:83–92 (2016).
  ·  DOI: [10.2147/CPAA.S102676](https://doi.org/10.2147/CPAA.S102676)

## Population and dosing

**Population:** South African adults with type 2 diabetes · condition type 2 diabetes · age group adult · n = $24.

**Dosing:** 2.5, 5, 10, 20 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka (L/h) | kabs | 0.63 | L/h |
| CL/f (L/h) | CL/F | 2.10 | L/h |
| V2/f (L) | V2/F | 10.03 | L |
| Q/f (L/h) | Q/F | 2.77 | L/h |
| V3/f (L) | V3/F | 68.10 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Glibenclamide absorption rate constant was assigned 0.63 L/h, a volume unit incompatible with a first-order rate constant, causing rejection.**

The parameter labeled 'Ka (L/h)' with a value of 0.63 represents the absorption rate constant, which requires time-based units like 1/h. Assigning a volume unit (L/h) to this parameter creates a fundamental dimensional error in the model structure. The record was rejected because this unit mismatch violates the structural requirements for an absorption rate constant. Extracted — glibenclamide: kabs 0.63 L/h, CL/F 2.1 L/h, V2/F 10 L, Q/F 2.77 L/h, V3/F 68.1 L.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka (L/h) | `Q49` · kabs | 0.63 | L/h |  |  | l/h | exact (1) | Rambiritch_2016_2_table_4:row0:col1, Rambiritch_2016_2_table_4:row1:col1, Rambiritch_2016_2_table_4:row2:col1, Rambiritch_2016_2_table_4:row3:col1, Rambiritch_2016_2_table_4:row4:col1, Rambiritch_2016_2_table_4:row5:col1, Rambiritch_2016_2_table_4:row6:col1, Rambiritch_2016_2_table_4:row7:col1, Rambiritch_2016_2_table_4:row8:col1, Rambiritch_2016_2_table_4:row9:col1, Rambiritch_2016_2_table_4:row10:col1, Rambiritch_2016_2_table_4:row11:col1, Rambiritch_2016_2_table_4:row12:col1, Rambiritch_2016_2_table_4:row13:col1, Rambiritch_2016_2_table_4:row14:col1, Rambiritch_2016_2_table_4:row15:col1, Rambiritch_2016_2_table_4:row16:col1, Rambiritch_2016_2_table_4:row17:col1, Rambiritch_2016_2_table_4:row18:col1, Rambiritch_2016_2_table_4:row19:col1, Rambiritch_2016_2_table_4:row20:col1, Rambiritch_2016_2_table_4:row21:col1, Rambiritch_2016_2_table_4:row22:col1, Rambiritch_2016_2_table_4:row23:col1 |
| CL/f (L/h) | `Q27` · CL/F | 2.10 | L/h | 5.833e-07 | m3/s | l/h | exact (1) | Rambiritch_2016_2_table_4:row0:col2, Rambiritch_2016_2_table_4:row1:col2, Rambiritch_2016_2_table_4:row2:col2, Rambiritch_2016_2_table_4:row3:col2, Rambiritch_2016_2_table_4:row4:col2, Rambiritch_2016_2_table_4:row5:col2, Rambiritch_2016_2_table_4:row6:col2, Rambiritch_2016_2_table_4:row7:col2, Rambiritch_2016_2_table_4:row8:col2, Rambiritch_2016_2_table_4:row9:col2, Rambiritch_2016_2_table_4:row10:col2, Rambiritch_2016_2_table_4:row11:col2, Rambiritch_2016_2_table_4:row12:col2, Rambiritch_2016_2_table_4:row13:col2, Rambiritch_2016_2_table_4:row14:col2, Rambiritch_2016_2_table_4:row15:col2, Rambiritch_2016_2_table_4:row16:col2, Rambiritch_2016_2_table_4:row17:col2, Rambiritch_2016_2_table_4:row18:col2, Rambiritch_2016_2_table_4:row19:col2, Rambiritch_2016_2_table_4:row20:col2, Rambiritch_2016_2_table_4:row21:col2, Rambiritch_2016_2_table_4:row22:col2, Rambiritch_2016_2_table_4:row23:col2 |
| V2/f (L) | `Q82` · V2/F | 10.03 | L | 0.01003 | m3 | l | exact (1) | Rambiritch_2016_2_table_4:row0:col3, Rambiritch_2016_2_table_4:row1:col3, Rambiritch_2016_2_table_4:row2:col3, Rambiritch_2016_2_table_4:row3:col3, Rambiritch_2016_2_table_4:row4:col3, Rambiritch_2016_2_table_4:row5:col3, Rambiritch_2016_2_table_4:row6:col3, Rambiritch_2016_2_table_4:row7:col3, Rambiritch_2016_2_table_4:row8:col3, Rambiritch_2016_2_table_4:row9:col3, Rambiritch_2016_2_table_4:row10:col3, Rambiritch_2016_2_table_4:row11:col3, Rambiritch_2016_2_table_4:row12:col3, Rambiritch_2016_2_table_4:row13:col3, Rambiritch_2016_2_table_4:row14:col3, Rambiritch_2016_2_table_4:row15:col3, Rambiritch_2016_2_table_4:row16:col3, Rambiritch_2016_2_table_4:row17:col3, Rambiritch_2016_2_table_4:row18:col3, Rambiritch_2016_2_table_4:row19:col3, Rambiritch_2016_2_table_4:row20:col3, Rambiritch_2016_2_table_4:row21:col3, Rambiritch_2016_2_table_4:row22:col3, Rambiritch_2016_2_table_4:row23:col3 |
| Q/f (L/h) | `Q69` · Q/F | 2.77 | L/h | 7.694e-07 | m3/s | l/h | exact (1) | Rambiritch_2016_2_table_4:row0:col4, Rambiritch_2016_2_table_4:row1:col4, Rambiritch_2016_2_table_4:row2:col4, Rambiritch_2016_2_table_4:row3:col4, Rambiritch_2016_2_table_4:row4:col4, Rambiritch_2016_2_table_4:row5:col4, Rambiritch_2016_2_table_4:row6:col4, Rambiritch_2016_2_table_4:row7:col4, Rambiritch_2016_2_table_4:row8:col4, Rambiritch_2016_2_table_4:row9:col4, Rambiritch_2016_2_table_4:row10:col4, Rambiritch_2016_2_table_4:row11:col4, Rambiritch_2016_2_table_4:row12:col4, Rambiritch_2016_2_table_4:row13:col4, Rambiritch_2016_2_table_4:row14:col4, Rambiritch_2016_2_table_4:row15:col4, Rambiritch_2016_2_table_4:row16:col4, Rambiritch_2016_2_table_4:row17:col4, Rambiritch_2016_2_table_4:row18:col4, Rambiritch_2016_2_table_4:row19:col4, Rambiritch_2016_2_table_4:row20:col4, Rambiritch_2016_2_table_4:row21:col4, Rambiritch_2016_2_table_4:row22:col4, Rambiritch_2016_2_table_4:row23:col4 |
| V3/f (L) | `Q78` · V3/F | 68.10 | L | 0.0681 | m3 | l | exact (1) | Rambiritch_2016_2_table_4:row0:col5, Rambiritch_2016_2_table_4:row1:col5, Rambiritch_2016_2_table_4:row2:col5, Rambiritch_2016_2_table_4:row3:col5, Rambiritch_2016_2_table_4:row4:col5, Rambiritch_2016_2_table_4:row5:col5, Rambiritch_2016_2_table_4:row6:col5, Rambiritch_2016_2_table_4:row7:col5, Rambiritch_2016_2_table_4:row8:col5, Rambiritch_2016_2_table_4:row9:col5, Rambiritch_2016_2_table_4:row10:col5, Rambiritch_2016_2_table_4:row11:col5, Rambiritch_2016_2_table_4:row12:col5, Rambiritch_2016_2_table_4:row13:col5, Rambiritch_2016_2_table_4:row14:col5, Rambiritch_2016_2_table_4:row15:col5, Rambiritch_2016_2_table_4:row16:col5, Rambiritch_2016_2_table_4:row17:col5, Rambiritch_2016_2_table_4:row18:col5, Rambiritch_2016_2_table_4:row19:col5, Rambiritch_2016_2_table_4:row20:col5, Rambiritch_2016_2_table_4:row21:col5, Rambiritch_2016_2_table_4:row22:col5, Rambiritch_2016_2_table_4:row23:col5 |

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
- column '6' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '7' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '8' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
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
- unit_dimension_mismatch: 'Ka (L/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=glibenclamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- model equation 'Pj = TVP*exp(ηj)(1)where TVP is the typical value of the PK parameter Pv (eg, CL/f) in the population, Pj is the individual value for P in the jth individual, and ηj is a random variable with mean of zero and variance ωP2' not bound — neither LHS nor base term 'TVP' linked to an ontology parameter
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Rambiritch_2016_2:methods_prose, Rambiritch_2016_2:other_prose, Rambiritch_2016_2:results_prose, Rambiritch_2016_2_table_4); populations final two-compartment model bsv (%cv), final two-compartment model estimate, one-compartment model estimate kept as separate records
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Rambiritch_2016_2_table_p7_1: unparsed_numeric_cell
- table Rambiritch_2016_2_table_2: competing_summary_estimates
- table Rambiritch_2016_2_table_2: ambiguous_uncertainty_binding
- table Rambiritch_2016_2_table_2: ragged_grid
- companion parameter table 2 transcribed (175 record(s))
- transposed table Rambiritch_2016_2_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (120 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, 4
- captured model equation Pj = TVP*exp(ηj)(1)where TVP is the typical value of the PK parameter Pv (eg, CL/f) in the population, Pj is the individual value for P in the jth individual, and ηj is a random variable with mean of zero and variance ωP2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Rambiritch_2016_2_table_4:row0:col2', 'Rambiritch_2016_2_table_4:row1:col2', 'Rambiritch_2016_2_table_4:row2:col2', 'Rambiritch_2016_2_table_4:row3:col2', 'Rambiritch_2016_2_table_4:row4:col2', 'Rambiritch_2016_2_table_4:row5:col2', 'Rambiritch_2016_2_table_4:row6:col2', 'Rambiritch_2016_2_table_4:row7:col2', 'Rambiritch_2016_2_table_4:row8:col2', 'Rambiritch_2016_2_table_4:row9:col2', 'Rambiritch_2016_2_table_4:row10:col2', 'Rambiritch_2016_2_table_4:row11:col2', 'Rambiritch_2016_2_table_4:row12:col2', 'Rambiritch_2016_2_table_4:row13:col2', 'Rambiritch_2016_2_table_4:row14:col2', 'Rambiritch_2016_2_table_4:row15:col2', 'Rambiritch_2016_2_table_4:row16:col2', 'Rambiritch_2016_2_table_4:row17:col2', 'Rambiritch_2016_2_table_4:row18:col2', 'Rambiritch_2016_2_table_4:row19:col2', 'Rambiritch_2016_2_table_4:row20:col2', 'Rambiritch_2016_2_table_4:row21:col2', 'Rambiritch_2016_2_table_4:row22:col2', 'Rambiritch_2016_2_table_4:row23:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | ['Rambiritch_2016_2_table_4:row0:col1', 'Rambiritch_2016_2_table_4:row1:col1', 'Rambiritch_2016_2_table_4:row2:col1', 'Rambiritch_2016_2_table_4:row3:col1', 'Rambiritch_2016_2_table_4:row4:col1', 'Rambiritch_2016_2_table_4:row5:col1', 'Rambiritch_2016_2_table_4:row6:col1', 'Rambiritch_2016_2_table_4:row7:col1', 'Rambiritch_2016_2_table_4:row8:col1', 'Rambiritch_2016_2_table_4:row9:col1', 'Rambiritch_2016_2_table_4:row10:col1', 'Rambiritch_2016_2_table_4:row11:col1', 'Rambiritch_2016_2_table_4:row12:col1', 'Rambiritch_2016_2_table_4:row13:col1', 'Rambiritch_2016_2_table_4:row14:col1', 'Rambiritch_2016_2_table_4:row15:col1', 'Rambiritch_2016_2_table_4:row16:col1', 'Rambiritch_2016_2_table_4:row17:col1', 'Rambiritch_2016_2_table_4:row18:col1', 'Rambiritch_2016_2_table_4:row19:col1', 'Rambiritch_2016_2_table_4:row20:col1', 'Rambiritch_2016_2_table_4:row21:col1', 'Rambiritch_2016_2_table_4:row22:col1', 'Rambiritch_2016_2_table_4:row23:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Rambiritch_2016_2_table_4:row0:col4', 'Rambiritch_2016_2_table_4:row1:col4', 'Rambiritch_2016_2_table_4:row2:col4', 'Rambiritch_2016_2_table_4:row3:col4', 'Rambiritch_2016_2_table_4:row4:col4', 'Rambiritch_2016_2_table_4:row5:col4', 'Rambiritch_2016_2_table_4:row6:col4', 'Rambiritch_2016_2_table_4:row7:col4', 'Rambiritch_2016_2_table_4:row8:col4', 'Rambiritch_2016_2_table_4:row9:col4', 'Rambiritch_2016_2_table_4:row10:col4', 'Rambiritch_2016_2_table_4:row11:col4', 'Rambiritch_2016_2_table_4:row12:col4', 'Rambiritch_2016_2_table_4:row13:col4', 'Rambiritch_2016_2_table_4:row14:col4', 'Rambiritch_2016_2_table_4:row15:col4', 'Rambiritch_2016_2_table_4:row16:col4', 'Rambiritch_2016_2_table_4:row17:col4', 'Rambiritch_2016_2_table_4:row18:col4', 'Rambiritch_2016_2_table_4:row19:col4', 'Rambiritch_2016_2_table_4:row20:col4', 'Rambiritch_2016_2_table_4:row21:col4', 'Rambiritch_2016_2_table_4:row22:col4', 'Rambiritch_2016_2_table_4:row23:col4'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Rambiritch_2016_2_table_4:row0:col5', 'Rambiritch_2016_2_table_4:row1:col5', 'Rambiritch_2016_2_table_4:row2:col5', 'Rambiritch_2016_2_table_4:row3:col5', 'Rambiritch_2016_2_table_4:row4:col5', 'Rambiritch_2016_2_table_4:row5:col5', 'Rambiritch_2016_2_table_4:row6:col5', 'Rambiritch_2016_2_table_4:row7:col5', 'Rambiritch_2016_2_table_4:row8:col5', 'Rambiritch_2016_2_table_4:row9:col5', 'Rambiritch_2016_2_table_4:row10:col5', 'Rambiritch_2016_2_table_4:row11:col5', 'Rambiritch_2016_2_table_4:row12:col5', 'Rambiritch_2016_2_table_4:row13:col5', 'Rambiritch_2016_2_table_4:row14:col5', 'Rambiritch_2016_2_table_4:row15:col5', 'Rambiritch_2016_2_table_4:row16:col5', 'Rambiritch_2016_2_table_4:row17:col5', 'Rambiritch_2016_2_table_4:row18:col5', 'Rambiritch_2016_2_table_4:row19:col5', 'Rambiritch_2016_2_table_4:row20:col5', 'Rambiritch_2016_2_table_4:row21:col5', 'Rambiritch_2016_2_table_4:row22:col5', 'Rambiritch_2016_2_table_4:row23:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Rambiritch_2016_2_table_4:row0:col3', 'Rambiritch_2016_2_table_4:row1:col3', 'Rambiritch_2016_2_table_4:row2:col3', 'Rambiritch_2016_2_table_4:row3:col3', 'Rambiritch_2016_2_table_4:row4:col3', 'Rambiritch_2016_2_table_4:row5:col3', 'Rambiritch_2016_2_table_4:row6:col3', 'Rambiritch_2016_2_table_4:row7:col3', 'Rambiritch_2016_2_table_4:row8:col3', 'Rambiritch_2016_2_table_4:row9:col3', 'Rambiritch_2016_2_table_4:row10:col3', 'Rambiritch_2016_2_table_4:row11:col3', 'Rambiritch_2016_2_table_4:row12:col3', 'Rambiritch_2016_2_table_4:row13:col3', 'Rambiritch_2016_2_table_4:row14:col3', 'Rambiritch_2016_2_table_4:row15:col3', 'Rambiritch_2016_2_table_4:row16:col3', 'Rambiritch_2016_2_table_4:row17:col3', 'Rambiritch_2016_2_table_4:row18:col3', 'Rambiritch_2016_2_table_4:row19:col3', 'Rambiritch_2016_2_table_4:row20:col3', 'Rambiritch_2016_2_table_4:row21:col3', 'Rambiritch_2016_2_table_4:row22:col3', 'Rambiritch_2016_2_table_4:row23:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.1 L/h | ['Rambiritch_2016_2_table_4:row0:col2', 'Rambiritch_2016_2_table_4:row1:col2', 'Rambiritch_2016_2_table_4:row2:col2', 'Rambiritch_2016_2_table_4:row3:col2', 'Rambiritch_2016_2_table_4:row4:col2', 'Rambiritch_2016_2_table_4:row5:col2', 'Rambiritch_2016_2_table_4:row6:col2', 'Rambiritch_2016_2_table_4:row7:col2', 'Rambiritch_2016_2_table_4:row8:col2', 'Rambiritch_2016_2_table_4:row9:col2', 'Rambiritch_2016_2_table_4:row10:col2', 'Rambiritch_2016_2_table_4:row11:col2', 'Rambiritch_2016_2_table_4:row12:col2', 'Rambiritch_2016_2_table_4:row13:col2', 'Rambiritch_2016_2_table_4:row14:col2', 'Rambiritch_2016_2_table_4:row15:col2', 'Rambiritch_2016_2_table_4:row16:col2', 'Rambiritch_2016_2_table_4:row17:col2', 'Rambiritch_2016_2_table_4:row18:col2', 'Rambiritch_2016_2_table_4:row19:col2', 'Rambiritch_2016_2_table_4:row20:col2', 'Rambiritch_2016_2_table_4:row21:col2', 'Rambiritch_2016_2_table_4:row22:col2', 'Rambiritch_2016_2_table_4:row23:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 10 L | ['Rambiritch_2016_2_table_4:row0:col3', 'Rambiritch_2016_2_table_4:row1:col3', 'Rambiritch_2016_2_table_4:row2:col3', 'Rambiritch_2016_2_table_4:row3:col3', 'Rambiritch_2016_2_table_4:row4:col3', 'Rambiritch_2016_2_table_4:row5:col3', 'Rambiritch_2016_2_table_4:row6:col3', 'Rambiritch_2016_2_table_4:row7:col3', 'Rambiritch_2016_2_table_4:row8:col3', 'Rambiritch_2016_2_table_4:row9:col3', 'Rambiritch_2016_2_table_4:row10:col3', 'Rambiritch_2016_2_table_4:row11:col3', 'Rambiritch_2016_2_table_4:row12:col3', 'Rambiritch_2016_2_table_4:row13:col3', 'Rambiritch_2016_2_table_4:row14:col3', 'Rambiritch_2016_2_table_4:row15:col3', 'Rambiritch_2016_2_table_4:row16:col3', 'Rambiritch_2016_2_table_4:row17:col3', 'Rambiritch_2016_2_table_4:row18:col3', 'Rambiritch_2016_2_table_4:row19:col3', 'Rambiritch_2016_2_table_4:row20:col3', 'Rambiritch_2016_2_table_4:row21:col3', 'Rambiritch_2016_2_table_4:row22:col3', 'Rambiritch_2016_2_table_4:row23:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglibenclamide%5D%20Glibenclamide_Rambiritch2016v2_reference&body=Drug%3A%20glibenclamide%0ARecord%3A%20Glibenclamide_Rambiritch2016v2_reference%0APaper%3A%20Rambiritch_2016_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glibenclamide/Glibenclamide_Rambiritch2016v2_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-22 09:51 UTC</sub>
