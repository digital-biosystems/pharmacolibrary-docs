<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Risperidone&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/&quot;},{&quot;label&quot;:&quot;Mahdy_2023 \u00b7 gestation_of_pregnancy_30_weeks&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kneller2020v2_reference&quot;,&quot;label&quot;:&quot;Kneller_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks&quot;,&quot;label&quot;:&quot;Mahdy_2023_gestation_of_pregnancy_40_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Risperidone — `Risperidone_Mahdy2023_gestation_of_pregnancy_30_weeks`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected due to a unit mismatch in the volume of distribution and a conversion failure for the unbound fraction, preventing valid parameter estimation.

<div class="pk-model-meta" hidden drug="Risperidone" model-id="Risperidone_Mahdy2023_gestation_of_pregnancy_30_weeks" status="rejected" stale="false" population="Japanese pregnant woman and neonate; White and Japanese healthy adults; pediatric patients" measured-compound="Paliperidone" parameterization="mechanistic" topology="1C"></div>

## Citation
Mahdy WYB, Yamamoto K, Ito T, Fujiwara N, Fujioka K, Horai T et al. Physiologically-based pharmacokinetic model to investigate the effect of pregnancy on risperidone and paliperidone pharmacokinetics: Application to a pregnant woman and her neonate. Clinical and translational science 16(4):618–630 (2023).
  ·  DOI: [10.1111/cts.13473](https://doi.org/10.1111/cts.13473)

## Population and dosing

**Population:** Japanese pregnant woman and neonate; White and Japanese healthy adults; pediatric patients · condition healthy; pregnancy · age group mixed.

**Dosing:** 0.5, 1 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed Risperidone, measured Paliperidone.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 13 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F g | FG | 0.99 |  |
| F h | FH | 0.51 |  |
| F | Fab | 0.50 |  |
| Distribution | Vss | 2.06 | L |
| F u,p | fu | 1.31 |  |
| Elimination | kel | 90.1 | 1/h |
| Q h (L/h) | QH | 1.08 | L/h |
| Unidentified Hepatic CLint (L/h) | CLint | 1.00 | L/h |
| CLh (L/h) | CLH | 1.63 | L/h |
| CLr (L/h) | CLR | 1.26 | L/h |
| CLt (L/h) | CL | 1.61 | L/h |
| CLr (L/h) a | CL | 1.26 | L/h |
| Fraction excreted in urine (%) | fm | 0.68 | % |
| theta_clint_cyp2d6 | theta_clint_cyp2d6 | 3.15 |  |
| theta_clint_cyp3a4 | theta_clint_cyp3a4 | 2.35 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected due to a unit mismatch in the volume of distribution and a conversion failure for the unbound fraction, preventing valid parameter estimation.**

The volume of distribution for risperidone is recorded as 2.06 L, which conflicts with the required dimension of length cubed per mass per time for the associated structural check. Additionally, the unbound fraction for risperidone is reported as 1.31, a value exceeding the physiological maximum of 1.0. The record indicates that a reported unit could not be converted to SI standards, causing the parameter to reach the model builder without a valid value. Extracted — risperidone: FG 0.99, FH 0.51, Fab 0.5, Vss 2.06 L, fu 1.31, kel 90.1 1/h, QH 1.08 L/h, CLint 1 L/h, … (+3); Paliperidone: CL 1.26 L/h, fm 0.68 %.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F g | `Q41` · FG | 0.99 |  | 0.99 |  |  | space_fold (0.95) | cts13473-tbl-0001:row3:col7 |
| F h | `Q42` · FH | 0.51 |  | 0.51 |  |  | space_fold (0.95) | cts13473-tbl-0001:row4:col7 |
| F | `Q40` · Fab | 0.50 |  |  |  |  | exact (1) | cts13473-tbl-0001:row5:col7 |
| Distribution | `Q65` · Vss | 2.06 | L | 0.00206 | m3 | L | llm (0.6) | cts13473-tbl-0001:row6:col7 |
| F u,p | `Q46` · fu | 1.31 |  | 0.0131 |  |  | llm (0.6) | cts13473-tbl-0001:row7:col7 |
| Elimination | `Q47` · kel | 90.1 | 1/h | 0.02503 | 1/s | 1/h | llm_confirmed (0.6) | cts13473-tbl-0001:row9:col7 |
| Q h (L/h) | `Q369` · QH | 1.08 | L/h | 3e-07 | m3/s | l/h | space_fold (0.95) | cts13473-tbl-0001:row13:col7 |
| Unidentified Hepatic CLint (L/h) | `Q3` · CLint | 1.00 | L/h |  |  | l/h | llm_confirmed (0.6) | cts13473-tbl-0001:row16:col7, cts13473-tbl-0001:row22:col7 |
| CLh (L/h) | `Q25` · CLH | 1.63 | L/h | 4.528e-07 | m3/s | l/h | exact (1) | cts13473-tbl-0001:row18:col7, cts13473-tbl-0001:row24:col7 |
| CLr (L/h) | `Q26` · CLR | 1.26 | L/h | 3.5e-07 | m3/s | l/h | exact (1) | cts13473-tbl-0001:row19:col7 |
| CLt (L/h) | `Q22` · CL | 1.61 | L/h | 4.472e-07 | m3/s | l/h | exact (1) | cts13473-tbl-0001:row20:col7 |
| CLr (L/h) a | `Q22` · CL | 1.26 | L/h | 3.5e-07 | m3/s | l/h | exact (1) | cts13473-tbl-0001:row25:col7 |
| Fraction excreted in urine (%) | `Q45` · fm | 0.68 | % | 0.0068 |  | % | exact (1) | cts13473-tbl-0001:row27:col7 |
| theta_clint_cyp2d6 | `Q900` · theta_clint_cyp2d6 | 3.15 |  |  |  |  |  | cts13473-tbl-0001:row14:col7 |
| theta_clint_cyp3a4 | `Q900` · theta_clint_cyp3a4 | 2.35 |  |  |  |  |  | cts13473-tbl-0001:row15:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Risperidone'; source reconciliation required
- table representations disagree for 'F g'; source reconciliation required
- table representations disagree for 'F h'; source reconciliation required
- table representations disagree for 'F'; source reconciliation required
- table representations disagree for 'Distribution'; source reconciliation required
- table representations disagree for 'F u,p'; source reconciliation required
- table representations disagree for 'B/P ratio'; source reconciliation required
- table representations disagree for 'Elimination'; source reconciliation required
- table representations disagree for 'Q h (L/h)'; source reconciliation required
- table representations disagree for 'CYP2D6 CLint (L/h)'; source reconciliation required
- table representations disagree for 'CYP3A4 CLint (L/h)'; source reconciliation required
- table representations disagree for 'Unidentified Hepatic CLint (L/h)'; source reconciliation required
- table representations disagree for 'Hepatic CLint (L/h)'; source reconciliation required
- table representations disagree for 'CLh (L/h)'; source reconciliation required
- table representations disagree for 'CLr (L/h)'; source reconciliation required
- table representations disagree for 'CLt (L/h)'; source reconciliation required
- table representations disagree for 'Paliperidone'; source reconciliation required
- table representations disagree for 'CLr (L/h) a'; source reconciliation required
- table representations disagree for 'CLt (L/h) a'; source reconciliation required
- table representations disagree for 'Fraction excreted in urine (%)'; source reconciliation required
- dropped unlinked row (NIL): 'Risperidone' — extend the ontology if this is a real PK parameter (source ['cts13473-tbl-0001:row2:col7'])
- 'F u,p' → Q46: printed without a unit and above 1 — read as a percentage
- dropped unlinked row (NIL): 'B/P ratio' — extend the ontology if this is a real PK parameter (source ['cts13473-tbl-0001:row8:col7'])
- unit_dimension_mismatch: 'Unidentified Hepatic CLint (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- unit_dimension_mismatch: 'Hepatic CLint (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('Hepatic CLint (L/h)', value '3.00') — already have one for this compound
- dropped unlinked row (NIL): 'Paliperidone' — extend the ontology if this is a real PK parameter (source ['cts13473-tbl-0001:row21:col7'])
- dropped duplicate Q22 ('CLt (L/h) a', value '1.95') — already have one for this compound
- implicit units: 'Distribution' → L (from the popPK convention: 'The paper text states that the total drug clearance (CLt) for risperidone was 26.5 L/h. The parameter in question is the')
- implicit units: 'Elimination' → 1/h (from the popPK convention: 'The parameter is the elimination rate constant (kel). First-order rate constants are conventionally expressed in recipro')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Paliperidone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site hepatic: 'the record carries a hepatic compartment parameter (Q369)')
- pharmacogenetic covariate 'theta_clint_cyp2d6' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_clint_cyp3a4' (cyp3a4) — PGx domain
- status held at "Needs review" — not promoted
- population split: 'gestation of pregnancy / 30 weeks' subgroup of Mahdy_2023 (paper reports 5 populations: gestation of pregnancy / 0 week, gestation of pregnancy / 10 weeks, gestation of pregnancy / 20 weeks, gestation of pregnancy / 30 weeks, gestation of pregnancy / 40 weeks)
- row roles (LLM): model_class=pbpk; 23/23 row label(s) assigned, 48 linked by role; re-tagged parent→Paliperidone ×18
- review gap-fill skipped: this record measures 'Paliperidone', not risperidone — the review values are the parent's

**Extraction notes:**
- table cts13473-tbl-0001: ragged_grid
- table cts13473-tbl-0001: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1
- toxin: the located table(s) gave no kinetic value — 5 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts13473-tbl-0001:row20:col7'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts13473-tbl-0001:row25:col7'] |
| C5_dimension_Q25 | pass | [length] ** 3 / [time] |  | ['cts13473-tbl-0001:row18:col7', 'cts13473-tbl-0001:row24:col7'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['cts13473-tbl-0001:row19:col7'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | L/h ([length] ** 3 / [time]) | ['cts13473-tbl-0001:row16:col7', 'cts13473-tbl-0001:row22:col7'] |
| C5_dimension_Q369 | pass | [length] ** 3 / [time] |  | ['cts13473-tbl-0001:row13:col7'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['cts13473-tbl-0001:row9:col7'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['cts13473-tbl-0001:row6:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.61 L/h | ['cts13473-tbl-0001:row20:col7'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.26 L/h | ['cts13473-tbl-0001:row25:col7'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 2.06 L | ['cts13473-tbl-0001:row6:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Mahdy2023_gestation_of_pregnancy_30_weeks&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Mahdy2023_gestation_of_pregnancy_30_weeks%0APaper%3A%20Mahdy_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_30_weeks%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 01:51 UTC</sub>
