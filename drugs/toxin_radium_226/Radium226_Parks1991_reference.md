<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Radium-226&quot;,&quot;href&quot;:&quot;drugs/toxin_radium_226/&quot;},{&quot;label&quot;:&quot;Parks_1991 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Radium226_Arazi2010_reference&quot;,&quot;label&quot;:&quot;Arazi_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_radium_226/Radium226_Arazi2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Radium226_Donaher2023_reference&quot;,&quot;label&quot;:&quot;Donaher_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_radium_226/Radium226_Donaher2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Radium-226 — `Radium226_Parks1991_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).

<div class="pk-model-meta" hidden drug="Radium-226" model-id="Radium226_Parks1991_reference" status="rejected" stale="false" population="beagles" measured-compound="Radium-226" parameterization="mechanistic" topology="1C"></div>

## Citation
Parks NJ. Radionuclide distribution dynamics in skeletons of beagles fed 90Sr: correlation with injected 226Ra and 239Pu. Health physics 60(3):343–351 (1991).
  ·  DOI: [10.1097/00004032-199103000-00003](https://doi.org/10.1097/00004032-199103000-00003)

## Population and dosing

**Population:** beagles · condition chronic dietary exposure · age group adult · n = 12.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tail | Ct | 0.76 | 540 d |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).**

A reported unit could not be converted (Ct), so that value has no SI equivalent. Extracted — radium 226: Ct 0.76 540 d.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Tail | `Q75` · Ct | 0.76 | 540 d | 540d | llm (0.6) | Parks_1991_table_2:row16:col1, Parks_1991_table_2:row16:col3, Parks_1991_table_2:row16:col5, Parks_1991_table_2:row16:col7, Parks_1991_table_2:row16:col8, Parks_1991_table_3:row16:col1, Parks_1991_table_3:row16:col3, Parks_1991_table_3:row16:col4, Parks_1991_table_3:row16:col6, Parks_1991_table_3:row16:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Forepaws' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row0:col1', 'Parks_1991_table_2:row0:col3', 'Parks_1991_table_2:row0:col5', 'Parks_1991_table_2:row0:col7', 'Parks_1991_table_2:row0:col8', 'Parks_1991_table_3:row0:col1', 'Parks_1991_table_3:row0:col3', 'Parks_1991_table_3:row0:col4', 'Parks_1991_table_3:row0:col6', 'Parks_1991_table_3:row0:col7'])
- dropped unlinked row (NIL): 'Radii/ulna' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row1:col1', 'Parks_1991_table_2:row1:col3', 'Parks_1991_table_2:row1:col5', 'Parks_1991_table_2:row1:col7', 'Parks_1991_table_2:row1:col8'])
- dropped unlinked row (NIL): 'Humeri' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row2:col1', 'Parks_1991_table_2:row2:col3', 'Parks_1991_table_2:row2:col5', 'Parks_1991_table_2:row2:col7', 'Parks_1991_table_2:row2:col8', 'Parks_1991_table_3:row2:col1', 'Parks_1991_table_3:row2:col3', 'Parks_1991_table_3:row2:col4', 'Parks_1991_table_3:row2:col6', 'Parks_1991_table_3:row2:col7'])
- dropped unlinked row (NIL): 'Scapulae' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row3:col1', 'Parks_1991_table_2:row3:col3', 'Parks_1991_table_2:row3:col5', 'Parks_1991_table_2:row3:col7', 'Parks_1991_table_2:row3:col8', 'Parks_1991_table_3:row3:col1', 'Parks_1991_table_3:row3:col3', 'Parks_1991_table_3:row3:col4', 'Parks_1991_table_3:row3:col6', 'Parks_1991_table_3:row3:col7'])
- dropped unlinked row (NIL): 'Hindpaws' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row4:col1', 'Parks_1991_table_2:row4:col3', 'Parks_1991_table_2:row4:col5', 'Parks_1991_table_2:row4:col7', 'Parks_1991_table_2:row4:col8', 'Parks_1991_table_3:row4:col1', 'Parks_1991_table_3:row4:col3', 'Parks_1991_table_3:row4:col4', 'Parks_1991_table_3:row4:col6', 'Parks_1991_table_3:row4:col7'])
- dropped unlinked row (NIL): 'Tibiae/fibulae' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row5:col1', 'Parks_1991_table_2:row5:col3', 'Parks_1991_table_2:row5:col5', 'Parks_1991_table_2:row5:col7', 'Parks_1991_table_2:row5:col8', 'Parks_1991_table_3:row5:col1', 'Parks_1991_table_3:row5:col3', 'Parks_1991_table_3:row5:col4', 'Parks_1991_table_3:row5:col6', 'Parks_1991_table_3:row5:col7'])
- dropped unlinked row (NIL): 'Femora' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row6:col1', 'Parks_1991_table_2:row6:col3', 'Parks_1991_table_2:row6:col5', 'Parks_1991_table_2:row6:col7', 'Parks_1991_table_2:row6:col8', 'Parks_1991_table_3:row6:col1', 'Parks_1991_table_3:row6:col3', 'Parks_1991_table_3:row6:col4', 'Parks_1991_table_3:row6:col6', 'Parks_1991_table_3:row6:col7'])
- dropped unlinked row (NIL): 'Pelvis' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row7:col1', 'Parks_1991_table_2:row7:col3', 'Parks_1991_table_2:row7:col5', 'Parks_1991_table_2:row7:col7', 'Parks_1991_table_2:row7:col8', 'Parks_1991_table_3:row7:col1', 'Parks_1991_table_3:row7:col3', 'Parks_1991_table_3:row7:col4', 'Parks_1991_table_3:row7:col6', 'Parks_1991_table_3:row7:col7'])
- dropped unlinked row (NIL): 'Skull and teeth' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row8:col1', 'Parks_1991_table_2:row8:col3', 'Parks_1991_table_2:row8:col5', 'Parks_1991_table_2:row8:col7', 'Parks_1991_table_2:row8:col8'])
- dropped unlinked row (NIL): 'Mandible and teeth' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row9:col1', 'Parks_1991_table_2:row9:col3', 'Parks_1991_table_2:row9:col5', 'Parks_1991_table_2:row9:col7', 'Parks_1991_table_2:row9:col8'])
- dropped unlinked row (NIL): 'Ribs' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row10:col1', 'Parks_1991_table_2:row10:col5', 'Parks_1991_table_2:row10:col7', 'Parks_1991_table_2:row10:col8'])
- dropped unlinked row (NIL): 'Ribs and cartilage' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row11:col1', 'Parks_1991_table_2:row11:col3', 'Parks_1991_table_2:row11:col5', 'Parks_1991_table_2:row11:col7', 'Parks_1991_table_2:row11:col8'])
- dropped unlinked row (NIL): 'Sternum' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row12:col1', 'Parks_1991_table_2:row12:col3', 'Parks_1991_table_2:row12:col5', 'Parks_1991_table_2:row12:col7', 'Parks_1991_table_2:row12:col8', 'Parks_1991_table_3:row12:col1', 'Parks_1991_table_3:row12:col3', 'Parks_1991_table_3:row12:col4', 'Parks_1991_table_3:row12:col6', 'Parks_1991_table_3:row12:col7'])
- dropped unlinked row (NIL): 'Cervical vertebrae' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row13:col1', 'Parks_1991_table_2:row13:col3', 'Parks_1991_table_2:row13:col5', 'Parks_1991_table_2:row13:col7', 'Parks_1991_table_2:row13:col8', 'Parks_1991_table_3:row13:col1', 'Parks_1991_table_3:row13:col3', 'Parks_1991_table_3:row13:col4', 'Parks_1991_table_3:row13:col6', 'Parks_1991_table_3:row13:col7'])
- dropped unlinked row (NIL): 'Thoracic vertebrae' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row14:col1', 'Parks_1991_table_2:row14:col3', 'Parks_1991_table_2:row14:col5', 'Parks_1991_table_2:row14:col7', 'Parks_1991_table_2:row14:col8', 'Parks_1991_table_3:row14:col1', 'Parks_1991_table_3:row14:col3', 'Parks_1991_table_3:row14:col4', 'Parks_1991_table_3:row14:col6', 'Parks_1991_table_3:row14:col7'])
- dropped unlinked row (NIL): 'Lumbar vertebrae' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_2:row15:col1', 'Parks_1991_table_2:row15:col3', 'Parks_1991_table_2:row15:col5', 'Parks_1991_table_2:row15:col7', 'Parks_1991_table_2:row15:col8', 'Parks_1991_table_3:row15:col1', 'Parks_1991_table_3:row15:col3', 'Parks_1991_table_3:row15:col4', 'Parks_1991_table_3:row15:col6', 'Parks_1991_table_3:row15:col7'])
- unit_dimension_unknown: '540 d' (Ct)
- dropped unlinked row (NIL): 'Radii/ulnae' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_3:row1:col1', 'Parks_1991_table_3:row1:col3', 'Parks_1991_table_3:row1:col4', 'Parks_1991_table_3:row1:col6', 'Parks_1991_table_3:row1:col7'])
- dropped unlinked row (NIL): 'Skull' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_3:row8:col1', 'Parks_1991_table_3:row8:col3', 'Parks_1991_table_3:row8:col4', 'Parks_1991_table_3:row8:col6', 'Parks_1991_table_3:row8:col7'])
- dropped unlinked row (NIL): 'Mandible' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_3:row9:col1', 'Parks_1991_table_3:row9:col3', 'Parks_1991_table_3:row9:col4', 'Parks_1991_table_3:row9:col6', 'Parks_1991_table_3:row9:col7'])
- dropped unlinked row (NIL): 'Teeth' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_3:row10:col1', 'Parks_1991_table_3:row10:col3', 'Parks_1991_table_3:row10:col4', 'Parks_1991_table_3:row10:col7'])
- dropped unlinked row (NIL): 'Ribs and rib cartilage' — extend the ontology if this is a real PK parameter (source ['Parks_1991_table_3:row11:col1', 'Parks_1991_table_3:row11:col3', 'Parks_1991_table_3:row11:col4', 'Parks_1991_table_3:row11:col6', 'Parks_1991_table_3:row11:col7'])
- table mostly unlinked (21/22 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Radium-226
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- table Parks_1991_table_2: unbound_uncertainty
- table Parks_1991_table_2: unparsed_numeric_cell
- toxin: the located table(s) gave no kinetic value — 4 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q75 | fail | [mass] / [length] ** 3 | 540 d | ['Parks_1991_table_2:row16:col1', 'Parks_1991_table_2:row16:col3', 'Parks_1991_table_2:row16:col5', 'Parks_1991_table_2:row16:col7', 'Parks_1991_table_2:row16:col8', 'Parks_1991_table_3:row16:col1', 'Parks_1991_table_3:row16:col3', 'Parks_1991_table_3:row16:col4', 'Parks_1991_table_3:row16:col6', 'Parks_1991_table_3:row16:col7'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bradium_226%5D%20Radium226_Parks1991_reference&body=Drug%3A%20radium_226%0ARecord%3A%20Radium226_Parks1991_reference%0APaper%3A%20Parks_1991%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_radium_226/Radium226_Parks1991_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 11:16 UTC</sub>
