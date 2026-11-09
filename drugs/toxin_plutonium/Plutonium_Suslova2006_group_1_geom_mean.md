<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Plutonium&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium/&quot;},{&quot;label&quot;:&quot;Suslova_2006 \u00b7 group_1_geom_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Plutonium_Dumit2025_reference&quot;,&quot;label&quot;:&quot;Dumit_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium/Plutonium_Dumit2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Plutonium — `Plutonium_Suslova2006_group_1_geom_mean`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).

<div class="pk-model-meta" hidden drug="Plutonium" model-id="Plutonium_Suslova2006_group_1_geom_mean" status="rejected" stale="false" population="workers at the Mayak Production Association" measured-compound="Plutonium" parameterization="mechanistic" topology="1C"></div>

## Citation
Suslova KG, Khokhryakov VF, Tokarskaya ZB, Nifatov AP, Sokolova AB, Miller SC et al. Modifying effects of health status, physiological, and dosimetric factors on extrapulmonary organ distribution and excretion of inhaled plutonium in workers at the Mayak Production Association. Health physics 90(4):299–311 (2006).
  ·  DOI: [10.1097/01.HP.0000183759.39785.9c](https://doi.org/10.1097/01.HP.0000183759.39785.9c)

## Population and dosing

**Population:** workers at the Mayak Production Association · condition occupational exposure · age group adult · n = 853.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Liver | EH | 40.7 |  |
| Blood | Qb | 0.11 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).**

Extracted — plutonium: EH 40.7, Qb 0.11 L/h.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Liver | `Q39` · EH | 40.7 |  | 40.7 |  |  | llm_corrected (0.6) | Suslova_2006_table_2:row1:col3 |
| Blood | `Q54` · Qb | 0.11 | L/h | 3.056e-08 | m3/s | L/h | llm (0.6) | Suslova_2006_table_2:row6:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Skeleton' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row0:col3'])
- dropped unlinked row (NIL): 'Muscle' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row2:col3'])
- dropped unlinked row (NIL): 'Spleen' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row3:col3'])
- dropped unlinked row (NIL): 'Kidneys' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row4:col3'])
- dropped unlinked row (NIL): 'Heart' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row5:col3'])
- dropped unlinked row (NIL): 'Skin' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row7:col3'])
- dropped unlinked row (NIL): 'Small intestines' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row8:col3'])
- dropped unlinked row (NIL): 'Large intestines' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row9:col3'])
- dropped unlinked row (NIL): 'Esophagus' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row10:col3'])
- dropped unlinked row (NIL): 'Gonads Male' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row11:col3'])
- dropped unlinked row (NIL): 'Female' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row12:col3'])
- dropped unlinked row (NIL): 'Pancreas' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row14:col3'])
- dropped unlinked row (NIL): 'Stomach' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row15:col3'])
- dropped unlinked row (NIL): 'Bile' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row16:col3'])
- dropped unlinked row (NIL): 'Thyroid gland' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row17:col3'])
- dropped unlinked row (NIL): 'Gall bladder' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row18:col3'])
- dropped unlinked row (NIL): 'Adrenal glands' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row19:col3'])
- dropped unlinked row (NIL): 'Bladder' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row20:col3'])
- dropped unlinked row (NIL): 'Lymph nodes: Axillar' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row21:col3'])
- dropped unlinked row (NIL): 'Mesenterial' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row22:col3'])
- dropped unlinked row (NIL): 'Inguinal' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row23:col3'])
- dropped unlinked row (NIL): 'Submandibular' — extend the ontology if this is a real PK parameter (source ['Suslova_2006_table_2:row24:col3'])
- implicit units: 'Blood' → L/h (from the popPK convention: 'The parameter represents blood flow (Qb), which is a volume flow rate. In population pharmacokinetic modeling, blood flo')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Plutonium
- population split: 'group 1 geom mean' subgroup of Suslova_2006 (paper reports 4 populations: geom mean, group 1 geom mean, group 2 geom mean, group 3 geom mean)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2, 3
- table Suslova_2006_table_2: unbound_uncertainty
- table Suslova_2006_table_2: units_need_context
- table Suslova_2006_table_3: unparsed_numeric_cell

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] |  | ['Suslova_2006_table_2:row6:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bplutonium%5D%20Plutonium_Suslova2006_group_1_geom_mean&body=Drug%3A%20plutonium%0ARecord%3A%20Plutonium_Suslova2006_group_1_geom_mean%0APaper%3A%20Suslova_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_plutonium/Plutonium_Suslova2006_group_1_geom_mean%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 08:04 UTC</sub>
