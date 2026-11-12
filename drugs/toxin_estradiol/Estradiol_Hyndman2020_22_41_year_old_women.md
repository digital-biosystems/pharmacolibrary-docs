<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Estradiol&quot;,&quot;href&quot;:&quot;drugs/toxin_estradiol/&quot;},{&quot;label&quot;:&quot;Hyndman_2020 \u00b7 22_41_year_old_women&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Estradiol — `Estradiol_Hyndman2020_22_41_year_old_women`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Estradiol" model-id="Estradiol_Hyndman2020_22_41_year_old_women" status="rejected" stale="false" population="entire non-pregnant female feral cats" measured-compound="estradiol-17β" parameterization="mechanistic" topology="1C"></div>

## Citation
Hyndman TH, Algar KL, Woodward AP, Coiacetto F, Hampton JO, Nickels D et al. Estradiol-17β Pharmacokinetics and Histological Assessment of the Ovaries and Uterine Horns following Intramuscular Administration of Estradiol Cypionate in Feral Cats. Animals : an open access journal from MDPI 10(9):E1708 (2020).
  ·  DOI: [10.3390/ani10091708](https://doi.org/10.3390/ani10091708)

## Population and dosing

**Population:** entire non-pregnant female feral cats · condition acute exposure · age group adult · n = 9.

**Dosing:** 7, 35 mg, other, single.

**Dosed compound ≠ measured compound:** dosed estradiol cypionate, measured estradiol-17β.

> **Species: cat.** This record comes from an animal study (cat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Cmax(ng/mL) | Q32 | exact |
| tmax(Day) | Q56 | exact |
| λz(/Day) | Q47 | exact |
| t1/2β(Day) | Q60 | half_life_rule |
| AUC0→∞(ng.Day/mL) | Q17 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose of Estradiol Cypionate (mg/kg)' — extend the ontology if this is a real PK parameter (source ['animals-10-01708-t001:row13:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=estradiol-17β
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- population split: '22–41 year old women (n = 12)' subgroup of Hyndman_2020 (paper reports 3 populations: 22–41 year old women (n = 12), maximum likelihood estimate, sexually-mature female llamas (n = 6))
- molar mass: no plausible PubChem entry for 'estradiol-17β' ('estradiol-17β') — left in mass units
- molar mass: none found for 'estradiol-17β' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- table animals-10-01708-t001: unparsed_numeric_cell
- transposed table animals-10-01708-t001: logical view retains original source coordinates
- table Hyndman_2020_table_2: unbound_uncertainty
- table Hyndman_2020_table_2: units_need_context
- table Hyndman_2020_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (15 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['animals-10-01708-t001:row13:col7'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['animals-10-01708-t001:row13:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['animals-10-01708-t001:row13:col5'] |
| C5_dimension_Q56 | pass | [time] |  | ['animals-10-01708-t001:row13:col4'] |
| C5_dimension_Q60 | pass | [time] |  | ['animals-10-01708-t001:row13:col6'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bestradiol%5D%20Estradiol_Hyndman2020_22_41_year_old_women&body=Drug%3A%20estradiol%0ARecord%3A%20Estradiol_Hyndman2020_22_41_year_old_women%0APaper%3A%20Hyndman_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_estradiol/Estradiol_Hyndman2020_22_41_year_old_women%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 07:37 UTC</sub>
