<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Cobaltous chloride&quot;,&quot;href&quot;:&quot;drugs/toxin_cobaltous_chloride/&quot;},{&quot;label&quot;:&quot;Burns_2018 \u00b7 week_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CobaltousChloride_AyalaFierro1999_reference&quot;,&quot;label&quot;:&quot;Ayala-Fierro_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cobaltous_chloride/CobaltousChloride_AyalaFierro1999_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cobaltous chloride — `CobaltousChloride_Burns2018_week_2`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Cobaltous chloride" model-id="CobaltousChloride_Burns2018_week_2" status="rejected" stale="false" population="Standardbred mares" measured-compound="cobalt" parameterization="mechanistic" topology="1C"></div>

## Citation
Burns TA, Dembek KA, Kamr A, Dooley SB, Dunbar LK, Aarnes TK et al. Effect of Intravenous Administration of Cobalt Chloride to Horses on Clinical and Hemodynamic Variables. Journal of veterinary internal medicine 32(1):441–449 (2018).
  ·  DOI: [10.1111/jvim.15029](https://doi.org/10.1111/jvim.15029)

## Population and dosing

**Population:** Standardbred mares · condition healthy · age group adult · n = 5.

**Dosed compound ≠ measured compound:** dosed Cobalt chloride, measured cobalt.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- column 'week 2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '4 mg/kg' — extend the ontology if this is a real PK parameter (source ['Burns_2018_table_3:row0:col2'])
- dropped unlinked row (NIL): '2 mg/kg' — extend the ontology if this is a real PK parameter (source ['Burns_2018_table_3:row1:col2'])
- dropped unlinked row (NIL): '1 mg/kg' — extend the ontology if this is a real PK parameter (source ['Burns_2018_table_3:row2:col2'])
- dropped unlinked row (NIL): '0.5 mg/kg' — extend the ontology if this is a real PK parameter (source ['Burns_2018_table_3:row3:col2'])
- dropped unlinked row (NIL): '0.25 mg/kg' — extend the ontology if this is a real PK parameter (source ['Burns_2018_table_3:row4:col2'])
- table mostly unlinked (5/5 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cobalt
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'week 2' subgroup of Burns_2018 (paper reports 10 populations: horse 1, horse 2, horse 3, horse 4, horse 5, week 1, week 2, week 3, week 4, week 5)
- row roles: 5 per-group rows of cobalt other but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 16/16 row label(s) assigned, 6 linked by role
- review gap-fill skipped: this record measures 'cobalt', not cobaltous_chloride — the review values are the parent's

**Extraction notes:**
- table jvim15029-tbl-0003: unparsed_numeric_cell
- table Burns_2018_table_3: units_need_context
- companion parameter table 3 transcribed (25 record(s))
- LLM selected parameter table(s) 3

## Validation

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcobaltous_chloride%5D%20CobaltousChloride_Burns2018_week_2&body=Drug%3A%20cobaltous_chloride%0ARecord%3A%20CobaltousChloride_Burns2018_week_2%0APaper%3A%20Burns_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cobaltous_chloride/CobaltousChloride_Burns2018_week_2%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 15:44 UTC</sub>
