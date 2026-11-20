<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Household toxins&quot;,&quot;href&quot;:&quot;toxins/HOUS.md&quot;},{&quot;label&quot;:&quot;Hexabromocyclododecane&quot;,&quot;href&quot;:&quot;drugs/toxin_hexabromocyclododecane/&quot;},{&quot;label&quot;:&quot;M\u00e9da_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hexabromocyclododecane_DominguezRomero2016_reference&quot;,&quot;label&quot;:&quot;Dominguez-Romero_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hexabromocyclododecane/Hexabromocyclododecane_DominguezRomero2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hexabromocyclododecane_Letcher2015_reference&quot;,&quot;label&quot;:&quot;Letcher_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hexabromocyclododecane/Hexabromocyclododecane_Letcher2015_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hexabromocyclododecane_Szabo2010_reference&quot;,&quot;label&quot;:&quot;Szabo_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hexabromocyclododecane/Hexabromocyclododecane_Szabo2010_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hexabromocyclododecane_Szabo2011v2_reference&quot;,&quot;label&quot;:&quot;Szabo_2011_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hexabromocyclododecane/Hexabromocyclododecane_Szabo2011v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Hexabromocyclododecane — `Hexabromocyclododecane_Mda2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Hexabromocyclododecane" model-id="Hexabromocyclododecane_Mda2020_reference" status="rejected" stale="false" population="fast- and slow-growing broilers" measured-compound="alpha-hexabromocyclododecane" parameterization="mechanistic" topology="1C"></div>

## Citation
Méda B, Travel A, Guyot Y, Henri J, Royer E, Baéza-Campone E et al. A PBPK model to study the transfer of α-hexabromocyclododecane (α-HBCDD) to tissues of fast- and slow-growing broilers. Food additives & contaminants. Part A, Chemistry, analysis, control, exposure & risk assessment 37(2):316–331 (2020).
  ·  DOI: [10.1080/19440049.2019.1681596](https://doi.org/10.1080/19440049.2019.1681596)

## Population and dosing

**Population:** fast- and slow-growing broilers · condition chronic dietary exposure · age group neonate.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| a Blood | Fab | 0.842 | 0.23 |
| b Blood | blood_air_partition | -2.60 | 0.23 |
| a Q | Q | 0.856 | 0.33 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| a Blood | `Q40` · Fab | 0.842 | 0.23 | 0.23 | llm (0.6) | Méda_2020_table_1:row13:col4 |
| b Blood | `Q411` · blood_air_partition | -2.60 | 0.23 | 0.23 | llm (0.6) | Méda_2020_table_1:row14:col4 |
| a Q | `Q30` · Q | 0.856 | 0.33 | 0.33 | llm (0.6) | Méda_2020_table_1:row28:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Age1' — extend the ontology if this is a real PK parameter (source ['Méda_2020_table_1:row1:col4'])
- dropped unlinked row (NIL): 'b Breast 2' — extend the ontology if this is a real PK parameter (source ['Méda_2020_table_1:row9:col4'])
- dropped unlinked row (NIL): 'b Leg' — extend the ontology if this is a real PK parameter (source ['Méda_2020_table_1:row12:col4'])
- dropped unlinked row (NIL): 'b BL 1' — extend the ontology if this is a real PK parameter (source ['Méda_2020_table_1:row18:col4'])
- dropped unlinked row (NIL): 'Prop Skin' — extend the ontology if this is a real PK parameter (source ['Méda_2020_table_1:row21:col4'])
- unit_dimension_mismatch: 'a Q' → Q30 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Feed lipid conc age Feed lipid conc ini4 Feed lipid conc fin Feed DM conc' — extend the ontology if this is a real PK parameter (source ['Méda_2020_table_1:row33:col4'])
- dropped unlinked row (NIL): 'Dig lipid' — extend the ontology if this is a real PK parameter (source ['Méda_2020_table_1:row35:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alpha-hexabromocyclododecane
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'alpha-hexabromocyclododecane' ('alpha-hexabromocyclododecane') — left in mass units
- molar mass: none found for 'alpha-hexabromocyclododecane' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Méda_2020_table_1: unknown_column_role
- table Méda_2020_table_1: missing_label
- table Méda_2020_table_1: ragged_grid
- table Méda_2020_table_1: unparsed_numeric_cell
- toxin: the located table(s) gave no kinetic value — 9 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | 0.33 (dimensionless) | ['Méda_2020_table_1:row28:col4'] |
| C5_dimension_Q411 | pass | dimensionless |  | ['Méda_2020_table_1:row14:col4'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhexabromocyclododecane%5D%20Hexabromocyclododecane_Mda2020_reference&body=Drug%3A%20hexabromocyclododecane%0ARecord%3A%20Hexabromocyclododecane_Mda2020_reference%0APaper%3A%20M%C3%A9da_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_hexabromocyclododecane/Hexabromocyclododecane_Mda2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 09:01 UTC</sub>
