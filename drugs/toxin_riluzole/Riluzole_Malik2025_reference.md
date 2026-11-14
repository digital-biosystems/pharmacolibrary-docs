<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Riluzole&quot;,&quot;href&quot;:&quot;drugs/toxin_riluzole/&quot;},{&quot;label&quot;:&quot;Malik_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Riluzole_Nguyen2021_reference&quot;,&quot;label&quot;:&quot;Nguyen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_riluzole/Riluzole_Nguyen2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Riluzole_Perdigo2019_reference&quot;,&quot;label&quot;:&quot;Perdig\u00e3o_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_riluzole/Riluzole_Perdigo2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Riluzole — `Riluzole_Malik2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Riluzole" model-id="Riluzole_Malik2025_reference" status="rejected" stale="false" population="healthy subjects" measured-compound="Riluzole" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Malik P, Mian P, Andrews J, Rosebraugh M, Ajroud-Driss S. A Modeling Investigation of the CYP1A Drug Interactions of Riluzole. Clinical and translational science 18(9):e70358 (2025).
  ·  DOI: [10.1111/cts.70358](https://doi.org/10.1111/cts.70358)

## Population and dosing

**Population:** healthy subjects · condition healthy · age group adult.

**Dosing:** 50 mg, oral, multiple, every 12 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| f m,total | fm | 0.98 |  |
| Glomerular filtration rate (GFR) fraction | CLR | 1.0 |  |
| ka | kabs | 5.0 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| f m,total | `Q45` · fm | 0.98 |  | 0.98 |  |  | llm (0.6) | cts70358-tbl-0002:row13:col1 |
| Glomerular filtration rate (GFR) fraction | `Q26` · CLR | 1.0 |  |  |  |  | llm (0.6) | cts70358-tbl-0002:row18:col1 |
| ka | `Q49` · kabs | 5.0 | /h | 0.001389 | 1/s | 1/h | review_gapfill (0.7) | Nguyen_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Molecular weight | Q374 | exact |
| theta_fm_cyp1a1 | Q900 |  |
| theta_fm_cyp1a2 | Q900 |  |
| theta_q305_ugt1a8 | Q900 |  |
| theta_fm_ugt1a9 | Q900 |  |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Cell permeability' — extend the ontology if this is a real PK parameter (source ['cts70358-tbl-0002:row8:col1'])
- dropped unlinked row (NIL): 'Water solubility' — extend the ontology if this is a real PK parameter (source ['cts70358-tbl-0002:row9:col1'])
- dropped unlinked row (NIL): 'Intestinal permeability (apical)' — extend the ontology if this is a real PK parameter (source ['cts70358-tbl-0002:row11:col1'])
- dropped unlinked row (NIL): 'Enterohepatic circulation (EHC) fraction' — extend the ontology if this is a real PK parameter (source ['cts70358-tbl-0002:row19:col1'])
- dropped unlinked row (NIL): 'P‐gp catalytic rate constant (k cat)' — extend the ontology if this is a real PK parameter (source ['cts70358-tbl-0002:row22:col1'])
- covariate effect for Q305 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Riluzole
- pharmacogenetic covariate 'theta_fm_cyp1a1' (cyp1a1) — PGx domain
- pharmacogenetic covariate 'theta_fm_cyp1a2' (cyp1a2) — PGx domain
- pharmacogenetic covariate 'theta_q305_ugt1a8' (ugt1a8) — PGx domain
- pharmacogenetic covariate 'theta_fm_ugt1a9' (ugt1a9) — PGx domain
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Nguyen_2021's review values (primary lacked it)

**Extraction notes:**
- table cts70358-tbl-0002: units_need_context
- table cts70358-tbl-0002: unparsed_numeric_cell
- table Malik_2025_table_3: no_numeric_grid
- table Malik_2025_table_3: ragged_grid
- companion parameter table 3 transcribed (0 record(s))
- table Malik_2025_table_p6_1: missing_label
- companion parameter table p6_1 transcribed (0 record(s))
- no LLM table selection; kept 3 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Nguyen_2021:review'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] |  | ['cts70358-tbl-0002:row18:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Briluzole%5D%20Riluzole_Malik2025_reference&body=Drug%3A%20riluzole%0ARecord%3A%20Riluzole_Malik2025_reference%0APaper%3A%20Malik_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_riluzole/Riluzole_Malik2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 13:52 UTC</sub>
