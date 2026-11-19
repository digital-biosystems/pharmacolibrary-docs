<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Sodium nitrite&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_nitrite/&quot;},{&quot;label&quot;:&quot;Vega-Villa_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumNitrite_Sirirat2019_reference&quot;,&quot;label&quot;:&quot;Sirirat_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_nitrite/SodiumNitrite_Sirirat2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumNitrite_Rix2015_reference&quot;,&quot;label&quot;:&quot;Rix_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_nitrite/SodiumNitrite_Rix2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium nitrite — `SodiumNitrite_VegaVilla2013_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Distribution clearances Q for Nitrite and Nitrate are labeled min⁻¹ instead of volume/time, creating a dimensional mismatch.

<div class="pk-model-meta" hidden drug="Sodium nitrite" model-id="SodiumNitrite_VegaVilla2013_reference" status="rejected" stale="false" population="12 healthy individuals aged 21-56 years" measured-compound="Nitrite" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Vega-Villa K, Pluta R, Lonser R, Woo S. Quantitative Systems Pharmacology Model of NO Metabolome and Methemoglobin Following Long-Term Infusion of Sodium Nitrite in Humans. CPT: pharmacometrics & systems pharmacology 2:e60 (2013).
  ·  DOI: [10.1038/psp.2013.35](https://doi.org/10.1038/psp.2013.35)

## Population and dosing

**Population:** 12 healthy individuals aged 21-56 years · condition healthy · age group adult · n = 12.

**Dosing:** 4.2, 533.8 µg/kg/h, iv, multiple.

**Dosed compound ≠ measured compound:** dosed Sodium nitrite, measured Nitrite.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 14 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k_{PT_NO2} (min⁻¹) | Q | 0.108 | min⁻¹ |
| k_{PT_NO3} (min⁻¹) | Q | 0.160 | min⁻¹ |
| k_{NO2_RD} (min⁻¹) | kel | 1.65E-03 | min⁻¹ |
| k_{MTNO} (min⁻¹) | kmet | 0.234 | min⁻¹ |
| CL_{(0),NO2} (l⋅min⁻¹) | CL | 0.382 | l⋅min⁻¹ |
| V_{NO2_P} (l) | V1 | 12.418 | l |
| CL_{(0),NO3} (l⋅min⁻¹) | CL | 9.41E-03 | l⋅min⁻¹ |
| V_{NO3_P} (l) | V1 | 12.418 | l |
| k_{RP_NO3} (min⁻¹) | kcomp | 5.17E-03 | min⁻¹ |
| k_{MER} (min⁻¹) | kel | 0.016 | min⁻¹ |
| V_{R_NO2} (l) | V2 | 5.816 | l |
| V_{R_NO3} (l) | V2 | 4.391 | l |
| V_{R_MetHb} (l) | V2 | 3.284 | l |
| K_{HbNO1} (min⁻¹⋅μmol⁻¹) | kon | 2.86E-05 | min⁻¹⋅μmol⁻¹ |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Distribution clearances Q for Nitrite and Nitrate are labeled min⁻¹ instead of volume/time, creating a dimensional mismatch.**

The parameters labeled as intercompartmental clearance (Q) for both Nitrite (0.108 min⁻¹) and Nitrate (0.160 min⁻¹) carry units of inverse time rather than volume per time. This dimensional conflict prevented valid SI conversion, leaving structural parameters undefined. Additionally, the model topology contains compartments with no path from the dose administration, further invalidating the structure. Extracted — sodium nitrite: Q 0.108 min⁻¹, kel 0.00165 min⁻¹, kmet 0.234 min⁻¹, CL 0.382 l⋅min⁻¹, V1 12.4 l, V2 5.82 l; Nitrate: Q 0.16 min⁻¹, CL 0.00941 l⋅min⁻¹, V1 12.4 l, kcomp 0.00517 min⁻¹, V2 4.39 l; Methemoglobin: kel 0.016 min⁻¹, V2 3.28 l; Nitric Oxide (NO): kon 2.86e-05 min⁻¹⋅μmol⁻¹.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k_{PT_NO2} (min⁻¹) | `Q30` · Q | 0.108 | min⁻¹ |  |  | 1/min | exact (1) | Vega-Villa_2013_table_p4_1:row0:col2 |
| k_{PT_NO3} (min⁻¹) | `Q30` · Q | 0.160 | min⁻¹ |  |  | 1/min | exact (1) | Vega-Villa_2013_table_p4_1:row2:col2 |
| k_{NO2_RD} (min⁻¹) | `Q47` · kel | 1.65E-03 | min⁻¹ | 2.75e-05 | 1/s | 1/min | llm (0.6) | Vega-Villa_2013_table_p4_1:row4:col2 |
| k_{MTNO} (min⁻¹) | `Q51` · kmet | 0.234 | min⁻¹ | 0.0039 | 1/s | 1/min | llm (0.6) | Vega-Villa_2013_table_p4_1:row5:col2 |
| CL_{(0),NO2} (l⋅min⁻¹) | `Q22` · CL | 0.382 | l⋅min⁻¹ | 6.367e-06 | m3/s | l/min | exact (1) | Vega-Villa_2013_table_p4_1:row7:col2 |
| V_{NO2_P} (l) | `Q63` · V1 | 12.418 | l | 0.01242 | m3 | l | exact (1) | Vega-Villa_2013_table_p4_1:row9:col2 |
| CL_{(0),NO3} (l⋅min⁻¹) | `Q22` · CL | 9.41E-03 | l⋅min⁻¹ | 1.568e-07 | m3/s | l/min | exact (1) | Vega-Villa_2013_table_p4_1:row10:col2 |
| V_{NO3_P} (l) | `Q63` · V1 | 12.418 | l | 0.01242 | m3 | l | exact (1) | Vega-Villa_2013_table_p4_1:row12:col2 |
| k_{RP_NO3} (min⁻¹) | `Q48` · kcomp | 5.17E-03 | min⁻¹ | 8.617e-05 | 1/s | 1/min | llm (0.6) | Vega-Villa_2013_table_p4_1:row14:col2 |
| k_{MER} (min⁻¹) | `Q47` · kel | 0.016 | min⁻¹ | 0.0002667 | 1/s | 1/min | exact (1) | Vega-Villa_2013_table_p4_1:row17:col2 |
| V_{R_NO2} (l) | `Q64` · V2 | 5.816 | l | 0.005816 | m3 | l | exact (1) | Vega-Villa_2013_table_p4_1:row19:col2 |
| V_{R_NO3} (l) | `Q64` · V2 | 4.391 | l | 0.004391 | m3 | l | exact (1) | Vega-Villa_2013_table_p4_1:row20:col2 |
| V_{R_MetHb} (l) | `Q64` · V2 | 3.284 | l | 0.003284 | m3 | l | exact (1) | Vega-Villa_2013_table_p4_1:row21:col2 |
| K_{HbNO1} (min⁻¹⋅μmol⁻¹) | `Q329` · kon | 2.86E-05 | min⁻¹⋅μmol⁻¹ |  |  | 1/(min·µM·ol) | llm (0.6) | Vega-Villa_2013_table_p4_1:row22:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'k_{PT_NO2} (min⁻¹)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'k_{TP_NO2} (min⁻¹)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'k_{NO2_RD} (min⁻¹)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V_{NO2_P} (l)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'CL_{(0),NO3} (l⋅min⁻¹)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'k_{PR_NO2} (min⁻¹)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'k_{RP_NO3} (min⁻¹)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'k_{NO3_R} (min⁻¹⋅μmol⁻¹)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'S_{MetHb}' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V_{R_NO2} (l)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V_{R_MetHb} (l)' routed out of structural estimates ('IIV (%CV)')
- table section residual_error: 'Additive error for plasma nitrite (μmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for plasma nitrite (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error for RBC nitrite (μmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for RBC nitrite (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error for plasma and RBC nitrate (μmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for plasma and RBC nitrate (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error for methemoglobin (μmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for methemoglobin (%)' routed out of structural estimates ('Residual variability')
- unit_dimension_mismatch: 'k_{PT_NO2} (min⁻¹)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k_{TP_NO2} (min⁻¹)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('k_{TP_NO2} (min⁻¹)', value '1.745') — already have one for this compound
- unit_dimension_mismatch: 'k_{PT_NO3} (min⁻¹)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k_{TP_NO3} (min⁻¹)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('k_{TP_NO3} (min⁻¹)', value '0.515') — already have one for this compound
- dropped unlinked row (NIL): 'k_{T_RD} (min⁻¹)' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row6:col2'])
- dropped unlinked row (NIL): 'S_{NO2}' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row8:col2'])
- dropped unlinked row (NIL): 'S_{NO3}' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row11:col2'])
- dropped unlinked row (NIL): 'k_{PR_NO2} (min⁻¹)' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row13:col2'])
- dropped unlinked row (NIL): 'k_{NO3_R} (min⁻¹⋅μmol⁻¹)' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row15:col2'])
- dropped unlinked row (NIL): 'k_{NO_R} (min⁻¹⋅μmol⁻¹)' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row16:col2'])
- dropped unlinked row (NIL): 'S_{MetHb}' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row18:col2'])
- unit_dimension_unknown: 'min⁻¹⋅μmol⁻¹' (kon)
- dropped unlinked row (NIL): 'K_{HbNO2} (min⁻¹⋅μmol⁻¹)' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row23:col2'])
- implicit units: 'K_{HbNO1} (min⁻¹⋅μmol⁻¹)' — the LLM proposed 'min-1·µmol-1', whose dimension does not fit Q329; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Nitrite
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — back-conversion needs PK_3M_3C, but formation is not hepatic
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 32/32 row label(s) assigned, 18 linked by role; re-tagged parent→Nitrite ×18, parent→Nitrate ×14, parent→Nitric Oxide (NO) ×3, parent→Methemoglobin ×7
- molar mass: no plausible PubChem entry for 'Methemoglobin' ('methemoglobin') — left in mass units
- molar mass: none found for 'Methemoglobin' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Nitrite', not sodium_nitrite — the review values are the parent's

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 14 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Vega-Villa_2013_table_p4_1:row7:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Vega-Villa_2013_table_p4_1:row10:col2'] |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | min⁻¹ (1 / [time]) | ['Vega-Villa_2013_table_p4_1:row0:col2'] |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | min⁻¹ (1 / [time]) | ['Vega-Villa_2013_table_p4_1:row2:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Vega-Villa_2013_table_p4_1:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Vega-Villa_2013_table_p4_1:row17:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Vega-Villa_2013_table_p4_1:row14:col2'] |
| C5_dimension_Q51 | pass | 1 / [time] |  | ['Vega-Villa_2013_table_p4_1:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Vega-Villa_2013_table_p4_1:row9:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Vega-Villa_2013_table_p4_1:row12:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Vega-Villa_2013_table_p4_1:row19:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Vega-Villa_2013_table_p4_1:row20:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Vega-Villa_2013_table_p4_1:row21:col2'] |
| C5_unit_missing_Q329 | fail | [length] ** 3 / [mass] / [time] | min⁻¹⋅μmol⁻¹ | ['Vega-Villa_2013_table_p4_1:row22:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.382 | ['Vega-Villa_2013_table_p4_1:row7:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['kNO3_R, kHbNO2', 'kNO2_RDT, kT_RDT', 'kNO3_R, kNO_R, kHbNO2', 'kNO_R'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 22.9 L/h | ['Vega-Villa_2013_table_p4_1:row7:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.565 L/h | ['Vega-Villa_2013_table_p4_1:row10:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 12.4 L | ['Vega-Villa_2013_table_p4_1:row9:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 12.4 L | ['Vega-Villa_2013_table_p4_1:row12:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.82 L | ['Vega-Villa_2013_table_p4_1:row19:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.39 L | ['Vega-Villa_2013_table_p4_1:row20:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.28 L | ['Vega-Villa_2013_table_p4_1:row21:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_nitrite%5D%20SodiumNitrite_VegaVilla2013_reference&body=Drug%3A%20sodium_nitrite%0ARecord%3A%20SodiumNitrite_VegaVilla2013_reference%0APaper%3A%20Vega-Villa_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_nitrite/SodiumNitrite_VegaVilla2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 07:25 UTC</sub>
