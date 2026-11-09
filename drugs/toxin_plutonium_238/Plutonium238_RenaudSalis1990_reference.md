<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Plutonium-238&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_238/&quot;},{&quot;label&quot;:&quot;Renaud-Salis_1990 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Plutonium-238 — `Plutonium238_RenaudSalis1990_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Plutonium-238" model-id="Plutonium238_RenaudSalis1990_reference" status="rejected" stale="false" population="fed rats" measured-compound="Plutonium" parameterization="mechanistic" topology="1C"></div>

## Citation
Renaud-Salis V, Lataillade G, Métivier H. Effect of mass, oxidation state and duration of chronic ingestion on plutonium absorption in fed rats. International journal of radiation biology 58(4):691–704 (1990).
  ·  DOI: [10.1080/09553009014552041](https://doi.org/10.1080/09553009014552041)

## Population and dosing

**Population:** fed rats · condition chronic dietary exposure · age group adult.

**Dosing:** 1.55, 15.6 kBq/ml, oral, multiple.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 2238 | equation variable | 94.8 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| 2238 | `Q900` · equation variable | 94.8 |  | 94.8 | llm (0.6) | Renaud-Salis_1990_table_3:row6:col1, Renaud-Salis_1990_table_3:row6:col2, Renaud-Salis_1990_table_3:row6:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'day of killing' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '100' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row0:col1', 'Renaud-Salis_1990_table_3:row0:col2', 'Renaud-Salis_1990_table_3:row0:col3'])
- dropped unlinked row (NIL): '318' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row1:col1', 'Renaud-Salis_1990_table_3:row1:col2', 'Renaud-Salis_1990_table_3:row1:col3'])
- dropped unlinked row (NIL): '588' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row2:col1', 'Renaud-Salis_1990_table_3:row2:col2', 'Renaud-Salis_1990_table_3:row2:col3'])
- dropped unlinked row (NIL): '955' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row3:col1', 'Renaud-Salis_1990_table_3:row3:col2', 'Renaud-Salis_1990_table_3:row3:col3'])
- dropped unlinked row (NIL): '1128' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row4:col1', 'Renaud-Salis_1990_table_3:row4:col2', 'Renaud-Salis_1990_table_3:row4:col3'])
- dropped unlinked row (NIL): '1332' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row5:col1', 'Renaud-Salis_1990_table_3:row5:col2', 'Renaud-Salis_1990_table_3:row5:col3'])
- dropped unlinked row (NIL): '2405' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row7:col1', 'Renaud-Salis_1990_table_3:row7:col2', 'Renaud-Salis_1990_table_3:row7:col3'])
- dropped unlinked row (NIL): '3097' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row8:col1', 'Renaud-Salis_1990_table_3:row8:col2', 'Renaud-Salis_1990_table_3:row8:col3'])
- dropped unlinked row (NIL): '3138' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row9:col1', 'Renaud-Salis_1990_table_3:row9:col2', 'Renaud-Salis_1990_table_3:row9:col3'])
- dropped unlinked row (NIL): '3224' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row10:col1', 'Renaud-Salis_1990_table_3:row10:col2', 'Renaud-Salis_1990_table_3:row10:col3'])
- dropped unlinked row (NIL): '3137' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row11:col1', 'Renaud-Salis_1990_table_3:row11:col2', 'Renaud-Salis_1990_table_3:row11:col3'])
- dropped unlinked row (NIL): '3483' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row12:col1', 'Renaud-Salis_1990_table_3:row12:col2', 'Renaud-Salis_1990_table_3:row12:col3'])
- dropped unlinked row (NIL): '3448' — extend the ontology if this is a real PK parameter (source ['Renaud-Salis_1990_table_3:row13:col1', 'Renaud-Salis_1990_table_3:row13:col2', 'Renaud-Salis_1990_table_3:row13:col3'])
- table mostly unlinked (13/14 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Plutonium
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Plutonium' ('plutonium-238 (IV) or (VI)') — left in mass units
- molar mass: none found for 'Plutonium' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Plutonium', not plutonium_238 — the review values are the parent's

**Extraction notes:**
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bplutonium_238%5D%20Plutonium238_RenaudSalis1990_reference&body=Drug%3A%20plutonium_238%0ARecord%3A%20Plutonium238_RenaudSalis1990_reference%0APaper%3A%20Renaud-Salis_1990%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_plutonium_238/Plutonium238_RenaudSalis1990_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 08:45 UTC</sub>
