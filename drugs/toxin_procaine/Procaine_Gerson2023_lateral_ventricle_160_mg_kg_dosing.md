<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Procaine&quot;,&quot;href&quot;:&quot;drugs/toxin_procaine/&quot;},{&quot;label&quot;:&quot;Gerson_2023 \u00b7 lateral_ventricle_160_mg_kg_dosing&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Procaine_Uboh2000_reference&quot;,&quot;label&quot;:&quot;Uboh_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_procaine/Procaine_Uboh2000_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procaine_Seifen1979_reference&quot;,&quot;label&quot;:&quot;Seifen_1979_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_procaine/Procaine_Seifen1979_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Procaine — `Procaine_Gerson2023_lateral_ventricle_160_mg_kg_dosing`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Procaine" model-id="Procaine_Gerson2023_lateral_ventricle_160_mg_kg_dosing" status="rejected" stale="false" population="freely moving rats" measured-compound="Procaine" parameterization="mechanistic" topology="1C"></div>

## Citation
Gerson J, Erdal MK, McDonough MH, Ploense KL, Dauphin-Ducharme P, Honeywell KM et al. High-precision monitoring of and feedback control over drug concentrations in the brains of freely moving rats. Science advances 9(20):eadg3254 (2023).
  ·  DOI: [10.1126/sciadv.adg3254](https://doi.org/10.1126/sciadv.adg3254)

## Population and dosing

**Population:** freely moving rats · age group adult · n = ,.

**Dosing:** 5600, 11200 mg, iv, single.

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Linear model / r p | Q900 | llm |
| Hyperbolic model / Kd (μM) | Q331 | llm_confirmed |
| Cmax (μM) | Q32 | exact |
| t1/2 (min) | Q57 | half_life_rule |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Mean locomotion before infusion (breaks per minute)' — extend the ontology if this is a real PK parameter (source ['T2:row9:col1'])
- dropped unlinked row (NIL): 'r s' — extend the ontology if this is a real PK parameter (source ['T2:row9:col2'])
- dropped unlinked row (NIL): 'Linear model / Intercept (breaks per minute)' — extend the ontology if this is a real PK parameter (source ['T2:row9:col3'])
- dropped PD-category row 'Linear model / Slope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row9:col4'])
- dropped unlinked row (NIL): 'Linear model / BIC*' — extend the ontology if this is a real PK parameter (source ['T2:row9:col6'])
- dropped unlinked row (NIL): 'Hyperbolic model / Intercept (breaks per minute)' — extend the ontology if this is a real PK parameter (source ['T2:row9:col7'])
- unit_dimension_mismatch: 'Hyperbolic model / Kd (μM)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Hyperbolic model / BIC*' — extend the ontology if this is a real PK parameter (source ['T2:row9:col9'])
- dropped unlinked row (NIL): 'Time to first detection* (min)' — extend the ontology if this is a real PK parameter (source ['Gerson_2023_table_1:row7:col1'])
- unit_dimension_mismatch: 'Cmax (μM)' → Q32 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Procaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'lateral ventricle, 160 mg/kg dosing' subgroup of Gerson_2023 (paper reports 2 populations: lateral ventricle, 160 mg/kg dosing, lateral ventricle, 80 mg/kg dosing)
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- transposed table T2: logical view retains original source coordinates
- transposed table Gerson_2023_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (33 record(s))
- table Gerson_2023_table_S3: missing_label
- table Gerson_2023_table_S3: unknown_column_role
- table Gerson_2023_table_S3: unparsed_numeric_cell
- companion parameter table S3 transcribed (45 record(s))
- table Gerson_2023_table_S4: missing_label
- table Gerson_2023_table_S4: unknown_column_role
- table Gerson_2023_table_S4: unparsed_numeric_cell
- companion parameter table S4 transcribed (45 record(s))
- LLM selected parameter table(s) 1, S3, S4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | μM ([length]) | ['Gerson_2023_table_1:row7:col2'] |
| C5_dimension_Q331 | fail | [mass] / [length] ** 3 | μM ([length]) | ['T2:row9:col8'] |
| C5_dimension_Q57 | pass | [time] |  | ['Gerson_2023_table_1:row7:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprocaine%5D%20Procaine_Gerson2023_lateral_ventricle_160_mg_kg_dosing&body=Drug%3A%20procaine%0ARecord%3A%20Procaine_Gerson2023_lateral_ventricle_160_mg_kg_dosing%0APaper%3A%20Gerson_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_procaine/Procaine_Gerson2023_lateral_ventricle_160_mg_kg_dosing%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 19:27 UTC</sub>
