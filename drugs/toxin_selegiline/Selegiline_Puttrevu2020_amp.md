<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Selegiline&quot;,&quot;href&quot;:&quot;drugs/toxin_selegiline/&quot;},{&quot;label&quot;:&quot;Puttrevu_2020 \u00b7 amp&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selegiline_Mahmood1997_reference&quot;,&quot;label&quot;:&quot;Mahmood_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_selegiline/Selegiline_Mahmood1997_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Selegiline_Barrett1996v3_reference&quot;,&quot;label&quot;:&quot;Barrett_1996_3_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_selegiline/Selegiline_Barrett1996v3_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Selegiline_Mahmood1994_reference&quot;,&quot;label&quot;:&quot;Mahmood_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_selegiline/Selegiline_Mahmood1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Selegiline — `Selegiline_Puttrevu2020_amp`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Selegiline" model-id="Selegiline_Puttrevu2020_amp" status="rejected" stale="false" population="Healthy adults, elderly, renal/hepatic impaired, adolescents (virtual populations)" measured-compound="Selegiline" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Puttrevu SK, Arora S, Polak S, Patel NK. Physiologically Based Pharmacokinetic Modeling of Transdermal Selegiline and Its Metabolites for the Evaluation of Disposition Differences between Healthy and Special Populations. Pharmaceutics 12(10) (2020).
  ·  DOI: [10.3390/pharmaceutics12100942](https://doi.org/10.3390/pharmaceutics12100942)

## Population and dosing

**Population:** Healthy adults, elderly, renal/hepatic impaired, adolescents (virtual populations) · condition healthy | special populations (renal impairment, hepatic impairment) · age group mixed.

**Dosing:** 6, 7.5, 9, 12, 20, 30 mg, transdermal, multiple, every 24 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Hepatic Intrinsic Clearance (L/h) | CL | 350.19 | L/h |
| Cardiac Output (L/h) | Q | 0.84 | L/h |
| Hepatic Blood Flow (L/h) | QH | 16.79 | L/h |
| Fraction Unbound (fu) | fu | 7.9596 | fu |
| Healthy / AUC0–24 h | AUC | 10.94 | ng·h/mL |
| Healthy / AUCLast Dose | AUClast | 210.16 | ng·h/mL |
| CP-C / AR | MW | 61.28 |  |

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
| Hepatic Intrinsic Clearance (L/h) | `Q22` · CL | 350.19 | L/h | 9.728e-05 | m3/s | l/h | boundary_llm_dim_refused (0.8) | pharmaceutics-12-00942-t003:row4:col2, pharmaceutics-12-00942-t003:row8:col2, pharmaceutics-12-00942-t003:row12:col2, pharmaceutics-12-00942-t003:row16:col2 |
| Cardiac Output (L/h) | `Q30` · Q | 0.84 | L/h | 2.333e-07 | m3/s | l/h | llm (0.6) | pharmaceutics-12-00942-t003:row4:col3, pharmaceutics-12-00942-t003:row8:col3, pharmaceutics-12-00942-t003:row12:col3, pharmaceutics-12-00942-t003:row16:col3 |
| Hepatic Blood Flow (L/h) | `Q369` · QH | 16.79 | L/h | 4.664e-06 | m3/s | l/h | exact (1) | pharmaceutics-12-00942-t003:row4:col4, pharmaceutics-12-00942-t003:row8:col4, pharmaceutics-12-00942-t003:row12:col4, pharmaceutics-12-00942-t003:row16:col4 |
| Fraction Unbound (fu) | `Q46` · fu | 7.9596 | fu |  |  | fu | exact (1) | pharmaceutics-12-00942-t003:row4:col5, pharmaceutics-12-00942-t003:row8:col5, pharmaceutics-12-00942-t003:row12:col5, pharmaceutics-12-00942-t003:row16:col5 |
| Healthy / AUC0–24 h | `Q88` · AUC | 10.94 | ng·h/mL |  |  | ng·h/mL | llm (0.6) | Puttrevu_2020_table_4:row4:col1 |
| Healthy / AUCLast Dose | `Q74` · AUClast | 210.16 | ng·h/mL |  |  | ng·h/mL | llm_confirmed (0.6) | Puttrevu_2020_table_4:row4:col2 |
| CP-C / AR | `Q374` · MW | 61.28 |  |  |  |  | llm (0.6) | Puttrevu_2020_table_4:row4:col9 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'amp' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Moiety'; source reconciliation required
- table representations disagree for 'Hepatic Intrinsic Clearance (L/h)'; source reconciliation required
- table representations disagree for 'Cardiac Output (L/h)'; source reconciliation required
- table representations disagree for 'Hepatic Blood Flow (L/h)'; source reconciliation required
- table representations disagree for 'Fraction Unbound (fu)'; source reconciliation required
- dropped unlinked row (NIL): 'Moiety' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-00942-t003:row4:col1', 'pharmaceutics-12-00942-t003:row8:col1', 'pharmaceutics-12-00942-t003:row12:col1', 'pharmaceutics-12-00942-t003:row16:col1'])
- dropped unlinked row (NIL): 'Healthy / AR' — extend the ontology if this is a real PK parameter (source ['Puttrevu_2020_table_4:row4:col3'])
- dropped duplicate Q88 ('SRI / AUC0–24 h', value '5.61') — already have one for this compound
- dropped duplicate Q74 ('SRI / AUCLast Dose', value '258.96') — already have one for this compound
- dropped unlinked row (NIL): 'SRI / AR' — extend the ontology if this is a real PK parameter (source ['Puttrevu_2020_table_4:row4:col6'])
- dropped duplicate Q88 ('CP-C / AUC0–24 h', value '1.67') — already have one for this compound
- dropped duplicate Q74 ('CP-C / AUCLast Dose', value '102.29') — already have one for this compound
- implicit units: 'Healthy / AUC0–24 h' → ng·h/mL (from the popPK convention: 'No unit is explicitly stated in the provided text or table captions. AUC values (Area Under the Curve) for drugs like se')
- implicit units: 'Healthy / AUCLast Dose' → ng·h/mL (from the popPK convention: 'No unit is explicitly stated. AUCLast follows the same unit convention as AUC0–24 h for the same compound context. The v')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Selegiline
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site hepatic: 'the record carries a hepatic compartment parameter (Q369)')
- status held at "Needs review" — not promoted
- population split: 'amp' subgroup of Puttrevu_2020 (paper reports 7 populations: adolescents, amp, dms, healthy, map, sel, sri)
- row roles: 2 per-group rows of Selegiline clearance but 2 reference group(s) — kept as printed
- row roles: 9 per-group rows of Selegiline summary_statistic but 3 reference group(s) — kept as printed
- row roles (LLM): model_class=pbpk; 17/17 row label(s) assigned, 40 linked by role; re-tagged Selegiline→parent ×76
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- table pharmaceutics-12-00942-t003: ragged_grid
- transposed table pharmaceutics-12-00942-t003: logical view retains original source coordinates
- table pharmaceutics-12-00942-t003: representations disagree; selected evidence retained, not merged
- table Puttrevu_2020_table_4: units_need_context
- transposed table Puttrevu_2020_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (36 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-12-00942-t003:row4:col2', 'pharmaceutics-12-00942-t003:row8:col2', 'pharmaceutics-12-00942-t003:row12:col2', 'pharmaceutics-12-00942-t003:row16:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-12-00942-t003:row4:col3', 'pharmaceutics-12-00942-t003:row8:col3', 'pharmaceutics-12-00942-t003:row12:col3', 'pharmaceutics-12-00942-t003:row16:col3'] |
| C5_dimension_Q369 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-12-00942-t003:row4:col4', 'pharmaceutics-12-00942-t003:row8:col4', 'pharmaceutics-12-00942-t003:row12:col4', 'pharmaceutics-12-00942-t003:row16:col4'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Puttrevu_2020_table_4:row4:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Puttrevu_2020_table_4:row4:col1'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] |  | ['Puttrevu_2020_table_4:row4:col9'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CYP2D6-mediated conversion', 'CYP2B6/CYP3A4-mediated conversion'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 350 L/h | ['pharmaceutics-12-00942-t003:row4:col2', 'pharmaceutics-12-00942-t003:row8:col2', 'pharmaceutics-12-00942-t003:row12:col2', 'pharmaceutics-12-00942-t003:row16:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bselegiline%5D%20Selegiline_Puttrevu2020_amp&body=Drug%3A%20selegiline%0ARecord%3A%20Selegiline_Puttrevu2020_amp%0APaper%3A%20Puttrevu_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_selegiline/Selegiline_Puttrevu2020_amp%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 19:27 UTC</sub>
