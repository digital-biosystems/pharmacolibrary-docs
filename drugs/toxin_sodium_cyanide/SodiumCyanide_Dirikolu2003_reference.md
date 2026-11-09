<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Sodium cyanide&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/&quot;},{&quot;label&quot;:&quot;Dirikolu_2003 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumCyanide_Thompson2012_reference&quot;,&quot;label&quot;:&quot;Thompson_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Thompson2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumCyanide_Sousa2003_goats&quot;,&quot;label&quot;:&quot;Sousa_2003_goats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_goats.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumCyanide_Sousa2003_pigs&quot;,&quot;label&quot;:&quot;Sousa_2003_pigs&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumCyanide_Sousa2003_rats&quot;,&quot;label&quot;:&quot;Sousa_2003_rats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_rats.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium cyanide — `SodiumCyanide_Dirikolu2003_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q17 unit ng/mL/h ([mass] / [length] ** 3 / [time]) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Sodium cyanide" model-id="SodiumCyanide_Dirikolu2003_reference" status="rejected" stale="false" population="mares" measured-compound="Cyanide" parameterization="mechanistic" topology="1C"></div>

## Citation
Dirikolu L, Hughes C, Harkins D, Boyles J, Bosken J, Lehner F et al. The toxicokinetics of cyanide and mandelonitrile in the horse and their relevance to the mare reproductive loss syndrome. Toxicology mechanisms and methods 13(3):199–211 (2003).
  ·  DOI: [10.1080/15376510309832](https://doi.org/10.1080/15376510309832)

## Population and dosing

**Population:** mares · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed Sodium cyanide, measured Cyanide.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| β(h-1 ) | kel | 0.0461 | h-1 |
| t 1/2 K 10 (h) | t1/2α | 1.49 | h |
| t 1/2 β (h) | t1/2β | 16.16 | h |
| AUC o-inf. (ng/mL/h) | AUC∞ | 3017.76 | ng/mL/h |
| Cl s (L/h/kg) | CL | 0.182 | L/h/kg |
| Vd c (L/kg) | Vnorm | 0.389 | L/kg |
| Vd ss (L/kg) | Vss | 2.206 | L/kg |
| R 2 | R1 | 0.983 |  |
| F (%) | Fab | 56.8 | % |
| t1/2Lambda_z (h) | t1/2z | 13 | h |
| Cmax (ng/mL) | Cmax | 1857 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q17 unit ng/mL/h ([mass] / [length] ** 3 / [time]) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (AUC∞ and Fab), so that value has no SI equivalent. Extracted — sodium cyanide: kel 0.0461 h-1, t1/2α 1.49 h, t1/2β 16.2 h, AUC∞ 3.02e+03 ng/mL/h, CL 0.182 L/h/kg, Vnorm 0.389 L/kg, Vss 2.21 L/kg, R1 0.983, … (+3).

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| β(h-1 ) | `Q47` · kel | 0.0461 | h-1 | 1.281e-05 | 1/s | 1/h | exact (1) | tab_1:row3:col5 |
| t 1/2 K 10 (h) | `Q59` · t1/2α | 1.49 | h | 5364 | s | h | llm (0.6) | tab_1:row4:col5 |
| t 1/2 β (h) | `Q60` · t1/2β | 16.16 | h | 5.818e+04 | s | h | half_life_rule (0.95) | tab_1:row6:col5 |
| AUC o-inf. (ng/mL/h) | `Q17` · AUC∞ | 3017.76 | ng/mL/h |  |  | ng/(h·ml) | llm_corrected (0.6) | tab_1:row7:col5 |
| Cl s (L/h/kg) | `Q22` · CL | 0.182 | L/h/kg | 3.539e-06 | m3/s | l/(h·kg) | llm_confirmed (0.6) | tab_1:row8:col5 |
| Vd c (L/kg) | `Q352` · Vnorm | 0.389 | L/kg | 0.02723 | m3 | l/kg | llm_corrected (0.6) | tab_1:row9:col5 |
| Vd ss (L/kg) | `Q65` · Vss | 2.206 | L/kg | 0.1544 | m3 | l/kg | llm_corrected (0.6) | tab_1:row10:col5 |
| R 2 | `Q307` · R1 | 0.983 |  |  |  |  | llm (0.6) | tab_1:row11:col5 |
| F (%) | `Q40` · Fab | 56.8 | % |  |  |  | exact (1) | Dirikolu_2003_table_4:row1:col5 |
| t1/2Lambda_z (h) | `Q57` · t1/2z | 13 | h | 4.68e+04 | s | h | llm (0.6) | Dirikolu_2003_table_4:row2:col5 |
| Cmax (ng/mL) | `Q32` · Cmax | 1857 | ng/mL | 0.001857 | kg/m3 | ng/ml | exact (1) | Dirikolu_2003_table_4:row5:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Weight (kg)' — extend the ontology if this is a real PK parameter (source ['tab_1:row1:col5', 'Dirikolu_2003_table_4:row0:col5'])
- dropped duplicate Q59 ('t 1/2 α (h)', value '0.739') — already have one for this compound
- unit_dimension_mismatch: 'AUC o-inf. (ng/mL/h)' → Q17 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUCo-inf. (ng/mL/h)' → Q17 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q17 ('AUCo-inf. (ng/mL/h)', value '1918') — already have one for this compound
- dropped duplicate Q22 ('Cl0 (L/h/kg)', value '0.317') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cyanide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 4 linked by role
- review gap-fill skipped: this record measures 'Cyanide', not sodium_cyanide — the review values are the parent's

**Extraction notes:**
- table tab_1: unknown_column_role
- table Dirikolu_2003_table_4: unknown_column_role
- companion parameter table 4 transcribed (30 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | ng/mL/h ([mass] / [length] ** 3 / [time]) | ['tab_1:row7:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row8:col5'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Dirikolu_2003_table_4:row5:col5'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['tab_1:row9:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_1:row3:col5'] |
| C5_dimension_Q57 | pass | [time] |  | ['Dirikolu_2003_table_4:row2:col5'] |
| C5_dimension_Q59 | pass | [time] |  | ['tab_1:row4:col5'] |
| C5_dimension_Q60 | pass | [time] |  | ['tab_1:row6:col5'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['tab_1:row10:col5'] |
| C5_unit_missing_Q307 | fail | [mass] / [time] |  | ['tab_1:row11:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.182 | ['tab_1:row8:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.7 L/h | ['tab_1:row8:col5'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 154 L | ['tab_1:row10:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_cyanide%5D%20SodiumCyanide_Dirikolu2003_reference&body=Drug%3A%20sodium_cyanide%0ARecord%3A%20SodiumCyanide_Dirikolu2003_reference%0APaper%3A%20Dirikolu_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_cyanide/SodiumCyanide_Dirikolu2003_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 00:37 UTC</sub>
