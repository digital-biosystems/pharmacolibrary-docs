<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Rosuvastatin&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/&quot;},{&quot;label&quot;:&quot;Kong_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rosuvastatin_Silveira2021_reference&quot;,&quot;label&quot;:&quot;Silveira_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/Rosuvastatin_Silveira2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_at_stea&quot;,&quot;label&quot;:&quot;Piscitelli_2024_rosuvastatin_encorafenib_at_steady_state&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_at_stea.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_single&quot;,&quot;label&quot;:&quot;Piscitelli_2024_rosuvastatin_encorafenib_single_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_single.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Rosuvastatin — `Rosuvastatin_Kong2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Rosuvastatin" model-id="Rosuvastatin_Kong2025_reference" status="rejected" stale="false" population="Chinese healthy volunteers and end-stage renal disease patients" measured-compound="Rosuvastatin" parameterization="apparent" topology="general_linear"></div>

## Citation
Kong W, Pan Y, Wu Y, Hu Y, Jiang Z, Tian X et al. Microdose Cocktail Study Reveals the Activity and Key Influencing Factors of OATP1B, P-Gp, BCRP, and CYP3A in End-Stage Renal Disease Patients. Clinical pharmacology and therapeutics 117(5):1303-1312 (2025).
  ·  DOI: [10.1002/cpt.3546](https://doi.org/10.1002/cpt.3546)

## Population and dosing

**Population:** Chinese healthy volunteers and end-stage renal disease patients · condition end-stage renal disease (ESRD) and healthy · age group adult.

**Dosing:** 0.01, 0.05, 0.1, 0.375 mg, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F | CL/F | 363 | L/hour | 9.20 | 9.60 (37.6% RSE) |
| V c/F | V1/F | 835 | L | 37.2 | 25.9 (29.0% RSE) |
| V p/F | V2/F | 333 | L | 25.6 | 86.0 (40.9% RSE) |
| Q/F | Q/F | 34.7 | L/hour | 15.5 | 7.60 (None% RSE) |
| k a | kabs | 7.53 | 1/hour | 16.7 | 21.5 (56.0% RSE) |
| DISMDZ on CL/F | CL/F | 0.94 | L/hour | 52.1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 363 | L/hour | 0.0001008 | m3/s | l/h | 9.20 | exact (1) | cpt3546-tbl-0003:row3:col2, cpt3546-tbl-0003:row11:col2, cpt3546-tbl-0003:row18:col2, cpt3546-tbl-0003:row26:col2, cpt3546-tbl-0003:row33:col2 | 9.60 (37.6% RSE) |
| V c/F | `Q290` · V1/F | 835 | L | 0.835 | m3 | l | 37.2 | space_fold (0.95) | cpt3546-tbl-0003:row6:col2, cpt3546-tbl-0003:row13:col2, cpt3546-tbl-0003:row20:col2, cpt3546-tbl-0003:row28:col2, cpt3546-tbl-0003:row34:col2 | 25.9 (29.0% RSE) |
| V p/F | `Q82` · V2/F | 333 | L | 0.333 | m3 | l | 25.6 | space_fold (0.95) | cpt3546-tbl-0003:row7:col2, cpt3546-tbl-0003:row14:col2, cpt3546-tbl-0003:row29:col2 | 86.0 (40.9% RSE) |
| Q/F | `Q69` · Q/F | 34.7 | L/hour | 9.639e-06 | m3/s | l/h | 15.5 | exact (1) | cpt3546-tbl-0003:row8:col2, cpt3546-tbl-0003:row15:col2, cpt3546-tbl-0003:row23:col2, cpt3546-tbl-0003:row30:col2 | 7.60 (None% RSE) |
| k a | `Q49` · kabs | 7.53 | 1/hour | 0.002092 | 1/s | 1/h | 16.7 | space_fold (0.95) | cpt3546-tbl-0003:row10:col2, cpt3546-tbl-0003:row17:col2, cpt3546-tbl-0003:row32:col2 | 21.5 (56.0% RSE) |
| DISMDZ on CL/F | `Q27` · CL/F | 0.94 | L/hour | 2.611e-07 | m3/s | l/h | 52.1 | llm_confirmed (0.6) | cpt3546-tbl-0003:row27:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('IIV% (RSE%)')
- table section iiv: 'Q/F' routed out of structural estimates ('IIV% (RSE%)')
- table section iiv: 'k a' routed out of structural estimates ('IIV% (RSE%)')
- table section iiv: 'V c/F' routed out of structural estimates ('IIV% (RSE%)')
- table section iiv: 'V p/F' routed out of structural estimates ('IIV% (RSE%)')
- table representations disagree for 'CL/F'; source reconciliation required
- table representations disagree for 'DISPTV on CL/F'; source reconciliation required
- table representations disagree for 'Veil on CL/F'; source reconciliation required
- table representations disagree for 'V c/F'; source reconciliation required
- table representations disagree for 'V p/F'; source reconciliation required
- table representations disagree for 'Q/F'; source reconciliation required
- table representations disagree for 'k a'; source reconciliation required
- table representations disagree for 'DISDZB on CL/F'; source reconciliation required
- table representations disagree for 'Clos on CL/F'; source reconciliation required
- table representations disagree for 'ALB on V c/F'; source reconciliation required
- table representations disagree for 'DISMDZ on CL/F'; source reconciliation required
- dropped 'DISPTV on CL/F' → Q27 = -0.381: a clearance of -0.381 is not a parameter value (source ['cpt3546-tbl-0003:row4:col2'])
- dropped 'Veil on CL/F' → Q27 = -0.677: a clearance of -0.677 is not a parameter value (source ['cpt3546-tbl-0003:row5:col2'])
- dropped 'DISDZB on CL/F' → Q27 = -0.869: a clearance of -0.869 is not a parameter value (source ['cpt3546-tbl-0003:row12:col2'])
- dropped 'Clos on CL/F' → Q27 = -3.26: a clearance of -3.26 is not a parameter value (source ['cpt3546-tbl-0003:row19:col2'])
- dropped unlinked row (NIL): 'ALB on V c/F' — extend the ontology if this is a real PK parameter (source ['cpt3546-tbl-0003:row21:col2'])
- unit inherited for CL/F (Q27): 'L/hour' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Rosuvastatin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 34 linked by role; re-tagged parent→Pitavastatin ×36, parent→Dabigatran ×1, parent→Midazolam ×1
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table cpt3546-tbl-0003: missing_unit_binding
- table cpt3546-tbl-0003: ambiguous_numeric_format
- table cpt3546-tbl-0003: unparsed_numeric_cell
- table cpt3546-tbl-0003: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpt3546-tbl-0003:row3:col2', 'cpt3546-tbl-0003:row11:col2', 'cpt3546-tbl-0003:row18:col2', 'cpt3546-tbl-0003:row26:col2', 'cpt3546-tbl-0003:row33:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cpt3546-tbl-0003:row6:col2', 'cpt3546-tbl-0003:row13:col2', 'cpt3546-tbl-0003:row20:col2', 'cpt3546-tbl-0003:row28:col2', 'cpt3546-tbl-0003:row34:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt3546-tbl-0003:row10:col2', 'cpt3546-tbl-0003:row17:col2', 'cpt3546-tbl-0003:row32:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cpt3546-tbl-0003:row8:col2', 'cpt3546-tbl-0003:row15:col2', 'cpt3546-tbl-0003:row23:col2', 'cpt3546-tbl-0003:row30:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cpt3546-tbl-0003:row7:col2', 'cpt3546-tbl-0003:row14:col2', 'cpt3546-tbl-0003:row29:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 363 L/h | ['cpt3546-tbl-0003:row3:col2', 'cpt3546-tbl-0003:row11:col2', 'cpt3546-tbl-0003:row18:col2', 'cpt3546-tbl-0003:row26:col2', 'cpt3546-tbl-0003:row33:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.94 L/h | ['cpt3546-tbl-0003:row27:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 835 L | ['cpt3546-tbl-0003:row6:col2', 'cpt3546-tbl-0003:row13:col2', 'cpt3546-tbl-0003:row20:col2', 'cpt3546-tbl-0003:row28:col2', 'cpt3546-tbl-0003:row34:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 333 L | ['cpt3546-tbl-0003:row7:col2', 'cpt3546-tbl-0003:row14:col2', 'cpt3546-tbl-0003:row29:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brosuvastatin%5D%20Rosuvastatin_Kong2025_reference&body=Drug%3A%20rosuvastatin%0ARecord%3A%20Rosuvastatin_Kong2025_reference%0APaper%3A%20Kong_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_rosuvastatin/Rosuvastatin_Kong2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 17:40 UTC</sub>
