<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Basic lead acetate&quot;,&quot;href&quot;:&quot;drugs/toxin_basic_lead_acetate/&quot;},{&quot;label&quot;:&quot;Valtorta_2006 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Basic lead acetate — `BasicLeadAcetate_Valtorta2006_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> The AUC parameter for lead, reported as -0.23 μg/h mL, has a dimension mismatch with its intended pharmacokinetic units.

<div class="pk-model-meta" hidden drug="Basic lead acetate" model-id="BasicLeadAcetate_Valtorta2006_reference" status="rejected" stale="false" population="lactating Holstein animals" measured-compound="lead" parameterization="mechanistic" topology="retention"></div>

## Citation
Valtorta SE, Scaglione MC, Acosta P, Coronel JE, Beldomenico HR, Boggio JC. Daily rhythms in blood and milk lead toxicokinetics following intravenous administration of lead acetate to dairy cows in summer. International journal of biometeorology 50(3):133–138 (2006).
  ·  DOI: [10.1007/s00484-005-0001-z](https://doi.org/10.1007/s00484-005-0001-z)

## Population and dosing

**Population:** lactating Holstein animals · condition healthy · age group adult · n = 20.

**Dosing:** 175 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed lead acetate, measured lead.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (μg/mL) | Cmax | -6.20 | μg/mL |
| AUC(μg/h mL) | AUC | -0.23 | μg/h mL |
| milk lead elimination half-life | t1/2z | 3.2 | days |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The AUC parameter for lead, reported as -0.23 μg/h mL, has a dimension mismatch with its intended pharmacokinetic units.**

The record reports AUC as -0.23 μg/h mL, which represents mass divided by time per volume. This conflicts with the standard dimension for AUC, which is mass times time per volume. The unit μg/h mL is a non-standard reporting that could not be converted to SI units, preventing verification of the value. Extracted — lead: Cmax -6.2 μg/mL, AUC -0.23 μg/h mL, t1/2z 3.2 days.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (μg/mL) | `Q32` · Cmax | -6.20 | μg/mL | -0.0062 | kg/m3 | µg/ml | exact (1) | tab_1:row1:col1, tab_1:row1:col2, tab_1:row1:col3, tab_1:row1:col4 |
| AUC(μg/h mL) | `Q88` · AUC | -0.23 | μg/h mL |  |  | µg/(h·ml) | exact (1) | tab_1:row2:col1, tab_1:row2:col2, tab_1:row2:col3, tab_1:row2:col4 |
| milk lead elimination half-life | `Q57` · t1/2z | 3.2 | days | 2.765e+05 | s | h | toxin_unit_relink (0.85) | Valtorta_2006:prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'p' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'AUC(μg/h mL)' → Q88 (unit '[mass] * [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'MILK' — extend the ontology if this is a real PK parameter (source ['Valtorta_2006_table_1:row9:col1'])
- salvaged Q57 ('milk lead elimination half-life'=3.2) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lead
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'lead' ('lead') — left in mass units
- molar mass: none found for 'lead' — its concentrations stay mass-only

**Extraction notes:**
- table Valtorta_2006_table_1: missing_label
- table Valtorta_2006_table_1: unknown_column_role
- table Valtorta_2006_table_1: ragged_grid
- table Valtorta_2006_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (9 record(s))
- LLM selected parameter table(s) 1, 2
- toxin: the located table(s) gave no kinetic value — 13 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tab_1:row1:col1', 'tab_1:row1:col2', 'tab_1:row1:col3', 'tab_1:row1:col4'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | μg/h mL ([mass] * [length] ** 3 / [time]) | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3', 'tab_1:row2:col4'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbasic_lead_acetate%5D%20BasicLeadAcetate_Valtorta2006_reference&body=Drug%3A%20basic_lead_acetate%0ARecord%3A%20BasicLeadAcetate_Valtorta2006_reference%0APaper%3A%20Valtorta_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_basic_lead_acetate/BasicLeadAcetate_Valtorta2006_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 07:08 UTC</sub>
