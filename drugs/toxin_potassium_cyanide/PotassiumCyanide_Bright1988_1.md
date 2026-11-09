<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Potassium cyanide&quot;,&quot;href&quot;:&quot;drugs/toxin_potassium_cyanide/&quot;},{&quot;label&quot;:&quot;Bright_1988 \u00b7 1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PotassiumCyanide_Thompson2012_reference&quot;,&quot;label&quot;:&quot;Thompson_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_potassium_cyanide/PotassiumCyanide_Thompson2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumCyanide_Sousa2003_goats&quot;,&quot;label&quot;:&quot;Sousa_2003_goats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_potassium_cyanide/PotassiumCyanide_Sousa2003_goats.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumCyanide_Sousa2003_pigs&quot;,&quot;label&quot;:&quot;Sousa_2003_pigs&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_potassium_cyanide/PotassiumCyanide_Sousa2003_pigs.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumCyanide_Sousa2003_rats&quot;,&quot;label&quot;:&quot;Sousa_2003_rats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_potassium_cyanide/PotassiumCyanide_Sousa2003_rats.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Potassium cyanide — `PotassiumCyanide_Bright1988_1`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> '1' is a column of the estimates table, not a study population.

<div class="pk-model-meta" hidden drug="Potassium cyanide" model-id="PotassiumCyanide_Bright1988_1" status="rejected" stale="false" population="Beagle bitches" measured-compound="Cyanide" parameterization="mechanistic" topology="1C"></div>

## Citation
Bright JE, Marrs TC. Pharmacokinetics of intravenous potassium cyanide. Human toxicology 7(2):183–186 (1988).
  ·  DOI: [10.1177/096032718800700214](https://doi.org/10.1177/096032718800700214)

## Population and dosing

**Population:** Beagle bitches · condition healthy · age group adult · n = 8.

**Dosing:** 57.4 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed Potassium cyanide, measured Cyanide.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vd (l kg-1) | V | 0.209 | l kg-1 |
| T1/2 (min) | t1/2z | 23 | min |
| Ke (min-1) | kel | 0.030 | min-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**'1' is a column of the estimates table, not a study population.**

The table was split into one record per column, and '1' holds a statistic rather than a second set of estimates.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vd (l kg-1) | `Q61` · V | 0.209 | l kg-1 | 0.01463 | m3 | l/kg | exact (1) | Bright_1988_table_1:row0:col4, Bright_1988_table_2:row0:col1, Bright_1988_table_2:row1:col1, Bright_1988_table_2:row2:col1, Bright_1988_table_2:row3:col1, Bright_1988_table_2:row4:col1 |
| T1/2 (min) | `Q57` · t1/2z | 23 | min | 1380 | s | min | half_life_rule (0.95) | Bright_1988_table_2:row0:col2, Bright_1988_table_2:row1:col2, Bright_1988_table_2:row2:col2, Bright_1988_table_2:row3:col2, Bright_1988_table_2:row4:col2 |
| Ke (min-1) | `Q47` · kel | 0.030 | min-1 | 0.0005 | 1/s | 1/min | exact (1) | Bright_1988_table_2:row0:col3, Bright_1988_table_2:row1:col3, Bright_1988_table_2:row2:col3, Bright_1988_table_2:row3:col3, Bright_1988_table_2:row4:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- transposed table Bright_1988_table_1: rows are variants (1, 2, 3, 4), the parameters are the column headers (Vd (l kg-1)) — read one record per variant
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cyanide
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- estimate-method split: '1' is one of 4 estimates of Bright_1988's substance matrix (1, 2, 3, 4); same population, different estimation method
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 1 PubChem candidate(s) is 'Cyanide' (LLM) — left in mass units
- molar mass: none found for 'Cyanide' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Cyanide', not potassium_cyanide — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1, 2
- transposed table Bright_1988_table_2: logical view retains original source coordinates

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Bright_1988_table_2:row0:col3', 'Bright_1988_table_2:row1:col3', 'Bright_1988_table_2:row2:col3', 'Bright_1988_table_2:row3:col3', 'Bright_1988_table_2:row4:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bright_1988_table_2:row0:col2', 'Bright_1988_table_2:row1:col2', 'Bright_1988_table_2:row2:col2', 'Bright_1988_table_2:row3:col2', 'Bright_1988_table_2:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Bright_1988_table_1:row0:col4', 'Bright_1988_table_2:row0:col1', 'Bright_1988_table_2:row1:col1', 'Bright_1988_table_2:row2:col1', 'Bright_1988_table_2:row3:col1', 'Bright_1988_table_2:row4:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.6 L | ['Bright_1988_table_1:row0:col4', 'Bright_1988_table_2:row0:col1', 'Bright_1988_table_2:row1:col1', 'Bright_1988_table_2:row2:col1', 'Bright_1988_table_2:row3:col1', 'Bright_1988_table_2:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpotassium_cyanide%5D%20PotassiumCyanide_Bright1988_1&body=Drug%3A%20potassium_cyanide%0ARecord%3A%20PotassiumCyanide_Bright1988_1%0APaper%3A%20Bright_1988%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_potassium_cyanide/PotassiumCyanide_Bright1988_1%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 09:39 UTC</sub>
