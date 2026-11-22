<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Isoniazid&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/&quot;},{&quot;label&quot;:&quot;Cicchese_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isoniazid_Courtney2026_reference&quot;,&quot;label&quot;:&quot;Courtney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Courtney2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Amaeze2023_reference&quot;,&quot;label&quot;:&quot;Amaeze_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Amaeze2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_non_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Isoniazid — `Isoniazid_Cicchese2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Intercompartmental clearances Q, Q2, and central clearance CL are reported with erroneous units of h*kg instead of volume per time.

<div class="pk-model-meta" hidden drug="Isoniazid" model-id="Isoniazid_Cicchese2020_reference" status="rejected" stale="false" population="humans" measured-compound="Isoniazid" parameterization="mechanistic" topology="2C"></div>

## Citation
Cicchese JM, Dartois V, Kirschner DE, Linderman JJ. Both Pharmacokinetic Variability and Granuloma Heterogeneity Impact the Ability of the First-Line Antibiotics to Sterilize Tuberculosis Granulomas. Frontiers in pharmacology 11:333 (2020).
  ·  DOI: [10.3389/fphar.2020.00333](https://doi.org/10.3389/fphar.2020.00333)

## Population and dosing

**Population:** humans · condition Tuberculosis infection · age group adult.

**Dosing:** 350, 700, 1190, 1400, 1470 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| INH Absorption rate constant | kabs | 3.25 | 1/h |
| INH Intercompartmental clearance rate constant | Q | 0.45 | h*kg |
| INH Central compartment volume of distribution | V1 | 1.75 | L/kg |
| INH Peripheral compartment volume of distribution | V2 | 32.5 | L/kg |
| INH Plasma clearance rate constant | CL | 0.039 | h*kg |
| EMB Intercompartmental clearance rate constant | Q2 | 0.57 | h*kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Intercompartmental clearances Q, Q2, and central clearance CL are reported with erroneous units of h*kg instead of volume per time.**

The record lists intercompartmental clearances Q (0.45) and Q2 (0.57), as well as total clearance CL (0.039), with the unit 'h*kg'. This dimension is incompatible with clearance, which must represent volume divided by time. Because the provided unit cannot be converted to standard SI units, the parameters lack a valid numeric value for the model. Extracted — isoniazid: kabs 3.25 1/h, Q 0.45 h*kg, V1 1.75 L/kg, V2 32.5 L/kg, CL 0.039 h*kg, Q2 0.57 h*kg.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| INH Absorption rate constant | `Q49` · kabs | 3.25 | 1/h | 0.0009028 | 1/s | 1/h | llm_confirmed (0.6) | T2:row1:col2, T2:row1:col3, T2:row1:col4, T2:row1:col5 |
| INH Intercompartmental clearance rate constant | `Q30` · Q | 0.45 | h*kg |  |  | h·kg | llm_confirmed (0.6) | T2:row2:col2, T2:row2:col3, T2:row2:col4, T2:row2:col5 |
| INH Central compartment volume of distribution | `Q63` · V1 | 1.75 | L/kg | 0.1225 | m3 | l/kg | llm_confirmed (0.6) | T2:row3:col2, T2:row3:col3, T2:row3:col4, T2:row3:col5 |
| INH Peripheral compartment volume of distribution | `Q64` · V2 | 32.5 | L/kg | 2.275 | m3 | l/kg | llm_confirmed (0.6) | T2:row4:col2, T2:row4:col3, T2:row4:col4, T2:row4:col5 |
| INH Plasma clearance rate constant | `Q22` · CL | 0.039 | h*kg |  |  | h·kg | llm_confirmed (0.6) | T2:row5:col2, T2:row5:col3, T2:row5:col4, T2:row5:col5 |
| EMB Intercompartmental clearance rate constant | `Q99` · Q2 | 0.57 | h*kg |  |  | h·kg | llm_corrected (0.6) | T2:row12:col2, T2:row12:col3, T2:row12:col4, T2:row12:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'INH Intercompartmental clearance rate constant' → Q30 (unit '[time] * [mass]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'INH Plasma clearance rate constant' → Q22 (unit '[time] * [mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q49 ('RIF Absorption rate constant', value '1.5') — already have one for this compound
- unit_dimension_mismatch: 'RIF Intercompartmental clearance rate constant' → Q30 (unit '[time] * [mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('RIF Intercompartmental clearance rate constant', value '3.9') — already have one for this compound
- dropped duplicate Q63 ('RIF Central compartment volume of distribution', value '0.38') — already have one for this compound
- dropped duplicate Q64 ('RIF Peripheral compartment volume of distribution', value '0.64') — already have one for this compound
- dropped unlinked row (NIL): 'RIF Plasma clearance rate constant' — extend the ontology if this is a real PK parameter (source ['T2:row10:col2', 'T2:row10:col3', 'T2:row10:col4', 'T2:row10:col5'])
- dropped duplicate Q49 ('EMB Absorption rate constant', value '0.45') — already have one for this compound
- unit_dimension_mismatch: 'EMB Intercompartmental clearance rate constant' → Q99 (unit '[time] * [mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q63 ('EMB Central compartment volume of distribution', value '1.37') — already have one for this compound
- dropped duplicate Q64 ('EMB Peripheral compartment volume of distribution', value '10.4') — already have one for this compound
- dropped unlinked row (NIL): 'EMB Plasma clearance rate constant' — extend the ontology if this is a real PK parameter (source ['T2:row15:col2', 'T2:row15:col3', 'T2:row15:col4', 'T2:row15:col5'])
- dropped duplicate Q49 ('PZA Absorption rate constant', value '0.65') — already have one for this compound
- unit_dimension_mismatch: 'PZA Intercompartmental clearance rate constant' → Q30 (unit '[time] * [mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('PZA Intercompartmental clearance rate constant', value '0.40') — already have one for this compound
- dropped duplicate Q63 ('PZA Central compartment volume of distribution', value '0.50') — already have one for this compound
- dropped duplicate Q64 ('PZA Peripheral compartment volume of distribution', value '0.030') — already have one for this compound
- unit_dimension_mismatch: 'PZA Plasma clearance rate constant' → Q22 (unit '[time] * [mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('PZA Plasma clearance rate constant', value '0.030') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (INH Intercompartmental clearance rate constant); Q63 (INH Central compartment volume of distribution); Q64 (INH Peripheral compartment volume of distribution); Q22 (INH Plasma clearance rate constant); Q99 (EMB Intercompartmental clearance rate constant)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Isoniazid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | fail | [length] ** 3 / [time] | h*kg ([time] * [mass]) | ['T2:row5:col2', 'T2:row5:col3', 'T2:row5:col4', 'T2:row5:col5'] |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | h*kg ([time] * [mass]) | ['T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4', 'T2:row2:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row1:col2', 'T2:row1:col3', 'T2:row1:col4', 'T2:row1:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4', 'T2:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4', 'T2:row4:col5'] |
| C5_dimension_Q99 | fail | [length] ** 3 / [time] | h*kg ([time] * [mass]) | ['T2:row12:col2', 'T2:row12:col3', 'T2:row12:col4', 'T2:row12:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.039 | ['T2:row5:col2', 'T2:row5:col3', 'T2:row5:col4', 'T2:row5:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 122 L | ['T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4', 'T2:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.28e+03 L | ['T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4', 'T2:row4:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bisoniazid%5D%20Isoniazid_Cicchese2020_reference&body=Drug%3A%20isoniazid%0ARecord%3A%20Isoniazid_Cicchese2020_reference%0APaper%3A%20Cicchese_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_isoniazid/Isoniazid_Cicchese2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 01:03 UTC</sub>
