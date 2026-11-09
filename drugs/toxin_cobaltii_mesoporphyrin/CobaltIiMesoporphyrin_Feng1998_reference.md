<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Cobalt(II) mesoporphyrin&quot;,&quot;href&quot;:&quot;drugs/toxin_cobaltii_mesoporphyrin/&quot;},{&quot;label&quot;:&quot;Feng_1998 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cobalt(II) mesoporphyrin — `CobaltIiMesoporphyrin_Feng1998_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Cobalt(II) mesoporphyrin" model-id="CobaltIiMesoporphyrin_Feng1998_reference" status="rejected" stale="false" population="mouse, rat, monkey and dog" measured-compound="Cobalt(II) mesoporphyrin" parameterization="mechanistic" topology="1C"></div>

## Citation
Feng MR, Rossi DT, Strenkoski C, Black A, Dehart P, Lovdahl M et al. Disposition kinetics of cobalt mesoporphyrin in mouse, rat, monkey and dog. Xenobiotica; the fate of foreign compounds in biological systems 28(4):413–426 (1998).
  ·  DOI: [10.1080/004982598239515](https://doi.org/10.1080/004982598239515)

## Population and dosing

**Population:** mouse, rat, monkey and dog · condition healthy · age group adult.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. Only the abstract was available, so reported summary statistics stand in for a fitted model. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CoMP elimination t1/2 ranged from 3.1 to 9.9 days in animals after i.v. | Q57 | llm_confirmed |
| The volume of CoMP distribution (Vss &lt; 0.91/kg) is reflective of a distribution to total body water following i.v. | Q65 | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Radiometric and UV analyses indicated &gt; 95% unchanged cobalt mesoporphyrin (CoMP) in plasma after i.v.'
- dropped value-less row: 'Blood clearance of CoMP is &lt; 2% of hepatic blood flow in mouse and rat, and &lt; 0.5% of hepatic blood flow in monkey and dog.'
- unit_dimension_mismatch: 'The volume of CoMP distribution (Vss &lt; 0.91/kg) is reflective of a distribution to total body water following i.v.' → Q65 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped value-less row: 'As a polar metalloporphyrin, CoMP has low clearance, restricted tissue distribution and long elimination t1/2 in the laboratory animals.'
- dropped duplicate Q57 ('t1/2', value '6.5') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cobalt(II) mesoporphyrin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Cobalt(II) mesoporphyrin' ('Cobalt(II) mesoporphyrin') — left in mass units
- molar mass: none found for 'Cobalt(II) mesoporphyrin' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Feng_1998_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q57 | pass | [time] |  | ['Feng_1998:abstract'] |
| C5_dimension_Q65 | fail | [length] ** 3 | /kg (dimensionless) | ['Feng_1998:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcobaltii_mesoporphyrin%5D%20CobaltIiMesoporphyrin_Feng1998_reference&body=Drug%3A%20cobaltii_mesoporphyrin%0ARecord%3A%20CobaltIiMesoporphyrin_Feng1998_reference%0APaper%3A%20Feng_1998%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cobaltii_mesoporphyrin/CobaltIiMesoporphyrin_Feng1998_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 10:27 UTC</sub>
