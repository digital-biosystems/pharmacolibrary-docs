<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Sodium selenite&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/&quot;},{&quot;label&quot;:&quot;Zeng_2020 \u00b7 heart_female&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumSelenite_Brodin2015_reference&quot;,&quot;label&quot;:&quot;Brodin_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Brodin2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Jayachandran2021_reference&quot;,&quot;label&quot;:&quot;Jayachandran_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Jayachandran2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Patterson1992_reference&quot;,&quot;label&quot;:&quot;Patterson_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Patterson1992_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Zhang2020_reference&quot;,&quot;label&quot;:&quot;Zhang_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Zhang2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Jger2016_reference&quot;,&quot;label&quot;:&quot;J\u00e4ger_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Jger2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Xing2019_reference&quot;,&quot;label&quot;:&quot;Xing_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Xing2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium selenite — `SodiumSelenite_Zeng2020_heart_female`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q310 unit mg/kg ([mass]) vs [time]; Q86 unit µg/mL ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Sodium selenite" model-id="SodiumSelenite_Zeng2020_heart_female" status="rejected" stale="false" population="rats" measured-compound="Selenium (Se)" parameterization="mechanistic" topology="retention"></div>

## Citation
Zeng X, Zhang X, Fan B, Li Y, Jia Z, Huang W et al. Pharmacokinetics of Sodium Selenite in Rat Plasma and Tissues After Intragastric Administration. Biological trace element research 196(2):494–501 (2020).
  ·  DOI: [10.1007/s12011-019-01928-8](https://doi.org/10.1007/s12011-019-01928-8)

## Population and dosing

**Population:** rats · condition acute exposure.

**Dosed compound ≠ measured compound:** dosed Sodium selenite, measured Selenium (Se).

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| D (mg/kg) | D1 | 0.100 | mg/kg |
| C0 (µg/mL) | C0 | 0.368 | µg/mL |
| A (µg/mL) | A1 | 0.474 | µg/mL |
| Kα (h) | t1/2α | 2.01 | h |
| T1/2β (h) | t1/2β | 189 | h |
| T1/2Ka (h) | t1/2ka | 0.345 | h |
| Tp (h) | tmax | 3.14 | h |
| Cmax (µg/mL) | Cmax | 0.467 | µg/mL |
| AUC0-t (µg/mL h) | AUCt | 20.6 | µg/mL h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q310 unit mg/kg ([mass]) vs [time]; Q86 unit µg/mL ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (D1, C0 and A1), so that value has no SI equivalent. Extracted — sodium selenite: D1 0.1 mg/kg, C0 0.368 µg/mL, A1 0.474 µg/mL, t1/2α 2.01 h, t1/2β 189 h, t1/2ka 0.345 h, tmax 3.14 h, Cmax 0.467 µg/mL, … (+1).

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| D (mg/kg) | `Q310` · D1 | 0.100 | mg/kg |  |  | mg/kg | exact (1) | Zeng_2020_table_2:row0:col6 |
| C0 (µg/mL) | `Q86` · C0 | 0.368 | µg/mL |  |  | µg/ml | exact (1) | Zeng_2020_table_2:row1:col6 |
| A (µg/mL) | `Q415` · A1 | 0.474 | µg/mL |  |  | µg/ml | llm (0.6) | Zeng_2020_table_2:row2:col6 |
| Kα (h) | `Q59` · t1/2α | 2.01 | h | 7236 | s | h | llm (0.6) | Zeng_2020_table_2:row6:col6 |
| T1/2β (h) | `Q60` · t1/2β | 189 | h | 6.804e+05 | s | h | half_life_rule (0.95) | Zeng_2020_table_2:row11:col6 |
| T1/2Ka (h) | `Q95` · t1/2ka | 0.345 | h | 1242 | s | h | exact (1) | Zeng_2020_table_2:row12:col6 |
| Tp (h) | `Q56` · tmax | 3.14 | h | 1.13e+04 | s | h | llm (0.6) | Zeng_2020_table_2:row13:col6 |
| Cmax (µg/mL) | `Q32` · Cmax | 0.467 | µg/mL | 0.000467 | kg/m3 | µg/ml | exact (1) | Zeng_2020_table_2:row14:col6 |
| AUC0-t (µg/mL h) | `Q19` · AUCt | 20.6 | µg/mL h | 74.16 | kg*s/m3 | µg/(h·ml) | exact (1) | Zeng_2020_table_2:row15:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'D (mg/kg)' → Q310 (unit '[mass]' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'C0 (µg/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Selenium (Se)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'heart female' subgroup of Zeng_2020 (paper reports 11 populations: female, gonad female, gonad male, heart female, heart male, kidney female, kidney male, liver female, liver male, male, muscle male)
- review gap-fill skipped: this record measures 'Selenium (Se)', not sodium_selenite — the review values are the parent's

**Extraction notes:**
- table tab_0: unparsed_numeric_cell
- table Zeng_2020_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (88 record(s))
- LLM selected parameter table(s) 1, 2
- toxin: the located table(s) gave no kinetic value — 10 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Zeng_2020_table_2:row15:col6'] |
| C5_dimension_Q310 | fail | [time] | mg/kg ([mass]) | ['Zeng_2020_table_2:row0:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Zeng_2020_table_2:row14:col6'] |
| C5_dimension_Q56 | pass | [time] |  | ['Zeng_2020_table_2:row13:col6'] |
| C5_dimension_Q59 | pass | [time] |  | ['Zeng_2020_table_2:row6:col6'] |
| C5_dimension_Q60 | pass | [time] |  | ['Zeng_2020_table_2:row11:col6'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | µg/mL ([mass] / [length] ** 3) | ['Zeng_2020_table_2:row1:col6'] |
| C5_dimension_Q95 | pass | [time] |  | ['Zeng_2020_table_2:row12:col6'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_selenite%5D%20SodiumSelenite_Zeng2020_heart_female&body=Drug%3A%20sodium_selenite%0ARecord%3A%20SodiumSelenite_Zeng2020_heart_female%0APaper%3A%20Zeng_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_selenite/SodiumSelenite_Zeng2020_heart_female%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 01:13 UTC</sub>
