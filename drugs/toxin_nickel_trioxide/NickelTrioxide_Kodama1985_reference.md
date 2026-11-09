<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Nickel trioxide&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/&quot;},{&quot;label&quot;:&quot;Kodama_1985 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_a&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_a.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_b&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_c&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_c&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_c.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_d&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_d&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_d.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nickel trioxide — `NickelTrioxide_Kodama1985_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).

<div class="pk-model-meta" hidden drug="Nickel trioxide" model-id="NickelTrioxide_Kodama1985_reference" status="rejected" stale="false" population="Wistar male rats" measured-compound="Nickel oxide" parameterization="mechanistic" topology="1C"></div>

## Citation
Kodama Y, Ishimatsu S, Matsuno K, Tanaka I, Tsuchiya K. Pulmonary deposition and clearance of a nickel oxide aerosol by inhalation. Biological trace element research 7(1):1–9 (1985).
  ·  DOI: [10.1007/BF02916542](https://doi.org/10.1007/BF02916542)

## Population and dosing

**Population:** Wistar male rats · condition inhalation exposure.

**Dosing:** 0.6, 8 mg/m 3, inhaled, multiple.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Lung burden NiO, µg Just after 1-mo exposureb | body_burden | 140 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).**

None of the extracted parameters is nickel trioxide's own; they describe Nickel oxide. Extracted — Nickel oxide: body_burden 140.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| Lung burden NiO, µg Just after 1-mo exposureb | `Q414` · body_burden | 140 |  | llm (0.6) | Kodama_1985_table_6:row0:col3, Kodama_1985_table_6:row1:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'ni' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Sheath gas' — extend the ontology if this is a real PK parameter (source ['Kodama_1985_table_3:row4:col2'])
- dropped unlinked row (NIL): 'Carrier gas' — extend the ontology if this is a real PK parameter (source ['Kodama_1985_table_3:row5:col2'])
- dropped unlinked row (NIL): 'Response' — extend the ontology if this is a real PK parameter (source ['Kodama_1985_table_3:row7:col2'])
- dropped unlinked row (NIL): 'Dry' — extend the ontology if this is a real PK parameter (source ['Kodama_1985_table_3:row10:col2'])
- dropped unlinked row (NIL): 'Ash' — extend the ontology if this is a real PK parameter (source ['Kodama_1985_table_3:row11:col2'])
- dropped unlinked row (NIL): 'Atom' — extend the ontology if this is a real PK parameter (source ['Kodama_1985_table_3:row12:col2'])
- dropped unlinked row (NIL): 'Lung burden NiO, µg After 1-yr clearance periodc' — extend the ontology if this is a real PK parameter (source ['Kodama_1985_table_6:row0:col4', 'Kodama_1985_table_6:row1:col4'])
- dropped unlinked row (NIL): 'Clearance rate, µg/yr' — extend the ontology if this is a real PK parameter (source ['Kodama_1985_table_6:row0:col5', 'Kodama_1985_table_6:row1:col5'])
- table mostly unlinked (8/9 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Nickel oxide
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Nickel oxide' ('nickel oxide') — left in mass units
- molar mass: none found for 'Nickel oxide' — its concentrations stay mass-only

**Extraction notes:**
- table Kodama_1985_table_3: units_need_context
- table Kodama_1985_table_3: unparsed_numeric_cell
- table Kodama_1985_table_5: unbound_uncertainty
- companion parameter table 5 transcribed (15 record(s))
- transposed table Kodama_1985_table_6: logical view retains original source coordinates
- companion parameter table 6 transcribed (8 record(s))
- LLM selected parameter table(s) 5, 6

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q414 | fail | [mass] |  | ['Kodama_1985_table_6:row0:col3', 'Kodama_1985_table_6:row1:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnickel_trioxide%5D%20NickelTrioxide_Kodama1985_reference&body=Drug%3A%20nickel_trioxide%0ARecord%3A%20NickelTrioxide_Kodama1985_reference%0APaper%3A%20Kodama_1985%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nickel_trioxide/NickelTrioxide_Kodama1985_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 06:27 UTC</sub>
