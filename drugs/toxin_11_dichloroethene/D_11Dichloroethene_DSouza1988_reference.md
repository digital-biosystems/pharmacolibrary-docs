<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;1,1-Dichloroethene&quot;,&quot;href&quot;:&quot;drugs/toxin_11_dichloroethene/&quot;},{&quot;label&quot;:&quot;DSouza_1988 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 1,1-Dichloroethene — `D_11Dichloroethene_DSouza1988_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Vinylidene chloride epoxide, chloroacetyl chloride, glutathione, and carbon dioxide are unreachable from the dose, so the model was rejected.

<div class="pk-model-meta" hidden drug="1,1-Dichloroethene" model-id="D_11Dichloroethene_DSouza1988_reference" status="rejected" stale="false" population="rat" measured-compound="Vinylidene chloride" parameterization="mechanistic" topology="general_linear"></div>

## Citation
D'Souza RW, Andersen ME. Physiologically based pharmacokinetic model for vinylidene chloride. Toxicology and applied pharmacology 95(2):230–240 (1988).
  ·  DOI: [10.1016/0041-008x(88)90159-7](https://doi.org/10.1016/0041-008x(88)90159-7)

## Population and dosing

**Population:** rat · condition healthy · age group adult.

**Dosing:** 70, 3500, 24500 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Blood:air | blood_air_partition | 5.0 |  |
| Vmax (mg hr⁻¹) | Vmax | 2.6 | mg hr⁻¹ |
| Km (mg liter⁻¹) | Km | 0.25 | mg liter⁻¹ |
| Kasm (μM⁻¹ hr⁻¹) | kon | 0.33 | μM⁻¹ hr⁻¹ |
| Kimn (hr⁻¹) | kel | 9000 | hr⁻¹ |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Vinylidene chloride epoxide, chloroacetyl chloride, glutathione, and carbon dioxide are unreachable from the dose, so the model was rejected.**

The metabolic sequence links vinylidene chloride to vinylidene chloride epoxide, chloroacetyl chloride, and carbon dioxide, and chloroacetyl chloride to glutathione. However, these species are flagged as orphan compartments because they have no direct path from the administered dose. This structural isolation renders the associated rate parameters for metabolism and elimination unusable for the specific molecule record. Extracted — 11 dichloroethene: blood_air_partition 5, Km 0.25 mg liter⁻¹; Vinylidene chloride epoxide: Vmax 2.6 mg hr⁻¹; Glutathione: kon 0.33 μM⁻¹ hr⁻¹, kel 9e+03 hr⁻¹.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Blood:air | `Q411` · blood_air_partition | 5.0 |  |  |  |  | llm (0.6) | DSouza_1988_table_1:row5:col1 |
| Vmax (mg hr⁻¹) | `Q66` · Vmax | 2.6 | mg hr⁻¹ | 7.222e-10 | kg/s | mg/h | special_case (0.95) | DSouza_1988_table_1:row7:col1 |
| Km (mg liter⁻¹) | `Q1` · Km | 0.25 | mg liter⁻¹ | 0.00025 | kg/m3 | mg/l | exact (1) | DSouza_1988_table_1:row8:col1 |
| Kasm (μM⁻¹ hr⁻¹) | `Q329` · kon | 0.33 | μM⁻¹ hr⁻¹ |  |  | 1/(h·µM) | llm (0.6) | DSouza_1988_table_1:row9:col1 |
| Kimn (hr⁻¹) | `Q47` · kel | 9000 | hr⁻¹ | 2.5 | 1/s | 1/h | llm (0.6) | DSouza_1988_table_1:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Liver:blood' — extend the ontology if this is a real PK parameter (source ['DSouza_1988_table_1:row1:col1'])
- dropped unlinked row (NIL): 'Richly perfused:blood' — extend the ontology if this is a real PK parameter (source ['DSouza_1988_table_1:row2:col1'])
- dropped unlinked row (NIL): 'Slowly perfused:blood' — extend the ontology if this is a real PK parameter (source ['DSouza_1988_table_1:row3:col1'])
- dropped unlinked row (NIL): 'Fat:blood' — extend the ontology if this is a real PK parameter (source ['DSouza_1988_table_1:row4:col1'])
- unit_dimension_unknown: 'μM⁻¹ hr⁻¹' (kon)
- dropped unlinked row (NIL): 'Kiec (hr⁻¹)' — extend the ontology if this is a real PK parameter (source ['DSouza_1988_table_1:row10:col1'])
- dropped unlinked row (NIL): 'H2O (M)' — extend the ontology if this is a real PK parameter (source ['DSouza_1988_table_1:row13:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Vinylidene chloride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site hepatic: 'The equations for the liver compartment also accounted for VDC metabolism and GSH turnover.')
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 11/11 row label(s) assigned, 0 linked by role; re-tagged parent→Vinylidene chloride epoxide ×1, parent→Glutathione ×3
- molar mass: no plausible PubChem entry for 'Vinylidene chloride epoxide' ('Vinylidene chloride epoxide') — left in mass units
- molar mass: no plausible PubChem entry for 'Glutathione' ('Glutathione') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'Carbon dioxide' (LLM) — left in mass units
- molar mass: none found for 'Vinylidene chloride epoxide' — its concentrations stay mass-only
- molar mass: none found for 'Glutathione' — its concentrations stay mass-only
- molar mass: none found for 'Carbon dioxide' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table DSouza_1988_table_1: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['DSouza_1988_table_1:row8:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['DSouza_1988_table_1:row11:col1'] |
| C5_dimension_Q66 | pass | [mass] / [time] |  | ['DSouza_1988_table_1:row7:col1'] |
| C5_unit_missing_Q329 | fail | [length] ** 3 / [mass] / [time] | μM⁻¹ hr⁻¹ | ['DSouza_1988_table_1:row9:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['Kox', 'Kcac', 'Kco2', 'Kgm'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B11_dichloroethene%5D%20D_11Dichloroethene_DSouza1988_reference&body=Drug%3A%2011_dichloroethene%0ARecord%3A%20D_11Dichloroethene_DSouza1988_reference%0APaper%3A%20DSouza_1988%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_11_dichloroethene/D_11Dichloroethene_DSouza1988_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 00:07 UTC</sub>
