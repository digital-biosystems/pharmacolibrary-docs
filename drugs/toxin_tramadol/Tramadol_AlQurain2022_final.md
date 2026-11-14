<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Tramadol&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/&quot;},{&quot;label&quot;:&quot;Al-Qurain_2022 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bressolle2009_reference&quot;,&quot;label&quot;:&quot;Bressolle_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Bressolle2009_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Nordmeier2021_tramadol_estimate&quot;,&quot;label&quot;:&quot;Nordmeier_2021_tramadol_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tramadol — `Tramadol_AlQurain2022_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Tramadol" model-id="Tramadol_AlQurain2022_final" status="rejected" stale="false" population="Older patients" measured-compound="Tramadol" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Al-Qurain AA, Upton RN, Tadros R, Roberts MS, Wiese MD. Population Pharmacokinetic Model for Tramadol and O-desmethyltramadol in Older Patients. European journal of drug metabolism and pharmacokinetics 47(3):387-402 (2022).
  ·  DOI: [10.1007/s13318-022-00756-x](https://doi.org/10.1007/s13318-022-00756-x)

## Population and dosing

**Population:** Older patients · condition chronic pain · age group elderly · n = 21.

**Dosing:** 25, 50, 75, 100 mg, oral, multiple.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Ka, /h | kabs | 2.96 | /h | 63.7 | 0.378 (87.2% RSE) |
| V1/F, l | V1/F | 0.373 | l | 19.6 | 0.738 (20.5% RSE) |
| Q, l/h | Q | 0.0426 | l/h | 6.09 | 0.0219 (52.3% RSE) |
| V2/F, l | V2/F | 0.379 | l | 35.5 | 0.974 (22.9% RSE) |
| CL/F, l/h | CL/F | 0.00604 | l/h | 6.71 | 0.0661 (46.9% RSE) |
| Kt, l/h | CLfm | 0.0492 | l/h | 21.8 |  |
| CLm/F, l/h | CL/F | 0.143 | l/h | 11.9 |  |
| O-desmethyltramadol, a (%) | fm | 5.19 | % | 20.5 |  |
| theta_v2_f_crcl | theta_v2_f_crcl | 0.0119 |  | 33.6 |  |
| theta_cl_f_crcl | theta_cl_f_crcl | 0.00498 |  | 14.3 |  |

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
| Ka, /h | `Q49` · kabs | 2.96 | /h | 0.0008222 | 1/s | 1/h | 63.7 | exact (1) | Tab3:row2:col3 | 0.378 (87.2% RSE) |
| V1/F, l | `Q290` · V1/F | 0.373 | l | 0.000373 | m3 | l | 19.6 | exact (1) | Tab3:row3:col3 | 0.738 (20.5% RSE) |
| Q, l/h | `Q30` · Q | 0.0426 | l/h | 1.183e-08 | m3/s | l/h | 6.09 | exact (1) | Tab3:row4:col3 | 0.0219 (52.3% RSE) |
| V2/F, l | `Q82` · V2/F | 0.379 | l | 0.000379 | m3 | l | 35.5 | exact (1) | Tab3:row6:col3 | 0.974 (22.9% RSE) |
| CL/F, l/h | `Q27` · CL/F | 0.00604 | l/h | 1.678e-09 | m3/s | l/h | 6.71 | exact (1) | Tab3:row8:col3 | 0.0661 (46.9% RSE) |
| Kt, l/h | `Q370` · CLfm | 0.0492 | l/h | 1.367e-08 | m3/s | l/h | 21.8 | exact (1) | Tab3:row10:col3 |  |
| CLm/F, l/h | `Q27` · CL/F | 0.143 | l/h | 3.972e-08 | m3/s | l/h | 11.9 | exact (1) | Tab3:row11:col3 |  |
| O-desmethyltramadol, a (%) | `Q45` · fm | 5.19 | % | 0.0519 |  | % | 20.5 | llm (0.6) | Tab3:row21:col3 |  |
| theta_v2_f_crcl | `Q900` · theta_v2_f_crcl | 0.0119 |  |  |  |  | 33.6 |  | Tab3:row7:col3 |  |
| theta_cl_f_crcl | `Q900` · theta_cl_f_crcl | 0.00498 |  |  |  |  | 14.3 |  | Tab3:row9:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q30 ('ISAR effect on Q', value '0.255') — already have one for this compound
- dropped unlinked row (NIL): 'Tramadol, b (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row20:col3'])
- dropped unlinked row (NIL): 'O-desmethyltramadol, b (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row22:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Tramadol
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- model-stage split: 'final model / population' is the final model of Al-Qurain_2022 (paper reports 2 stages: base model / population, final model / population); same population, different model-building step
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 14 linked by role; re-tagged parent→O-desmethyltramadol ×12
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Al-Qurain_2022_table_S1: missing_label
- table Al-Qurain_2022_table_S1: unknown_column_role
- table Al-Qurain_2022_table_S1: units_need_context
- table Al-Qurain_2022_table_S1: unparsed_numeric_cell
- companion parameter table S1 transcribed (0 record(s))
- table Al-Qurain_2022_table_S2: missing_label
- table Al-Qurain_2022_table_S2: unknown_column_role
- table Al-Qurain_2022_table_S2: units_need_context
- table Al-Qurain_2022_table_S2: unparsed_numeric_cell
- companion parameter table S2 transcribed (0 record(s))
- LLM selected parameter table(s) 3, S1, S2
- toxin: the located table(s) gave no kinetic value — 7 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row8:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row11:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row3:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab3:row4:col3'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Tab3:row10:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row2:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row6:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.00604 L/h | ['Tab3:row8:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.143 L/h | ['Tab3:row11:col3'] |
| C9_phys_window_Q290 | fail | volume within physiological range | 0.373 L | ['Tab3:row3:col3'] |
| C9_phys_window_Q82 | fail | volume within physiological range | 0.379 L | ['Tab3:row6:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_AlQurain2022_final&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_AlQurain2022_final%0APaper%3A%20Al-Qurain_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tramadol/Tramadol_AlQurain2022_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 04:51 UTC</sub>
