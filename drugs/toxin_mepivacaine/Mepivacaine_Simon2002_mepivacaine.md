<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Mepivacaine&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/&quot;},{&quot;label&quot;:&quot;Simon_2002 \u00b7 mepivacaine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mepivacaine_Burm1997_reference&quot;,&quot;label&quot;:&quot;Burm_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/Mepivacaine_Burm1997_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mepivacaine_Copeland2008_reference&quot;,&quot;label&quot;:&quot;Copeland_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/Mepivacaine_Copeland2008_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mepivacaine_Duan2017_reference&quot;,&quot;label&quot;:&quot;Duan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/Mepivacaine_Duan2017_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mepivacaine_Mather1991_reference&quot;,&quot;label&quot;:&quot;Mather_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/Mepivacaine_Mather1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mepivacaine_Simon2002_reference&quot;,&quot;label&quot;:&quot;Simon_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mepivacaine — `Mepivacaine_Simon2002_mepivacaine`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Record rejected because lidocaine's terminal half-life lacks time units, while lidocaine clearance and mepivacaine volume yield implausible physiological values due to unconvertible units.

<div class="pk-model-meta" hidden drug="Mepivacaine" model-id="Mepivacaine_Simon2002_mepivacaine" status="rejected" stale="false" population="patients undergoing axillary brachial plexus anaesthesia" measured-compound="Mepivacaine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Simon MA, Vree TB, Gielen MJ, Booij LH, Lagerwerf AJ. Similar motor block effects and disposition kinetics between lidocaine and (+/-)mepivacaine in patients undergoing axillary brachial plexus block during day case surgery. TheScientificWorldJournal 2:1306–1319 (2002).
  ·  DOI: [10.1100/tsw.2002.180](https://doi.org/10.1100/tsw.2002.180)

## Population and dosing

**Population:** patients undergoing axillary brachial plexus anaesthesia · condition healthy · age group adult · n = &gt;=15.

**Dosing:** 600 mg, other, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC∞ | AUC∞ | 30.4 | mg h L⁻¹ |
| AUC₃ₕ | AUCt | 9.51 | mg h L⁻¹ |
| Cl∞ | CL | 26.9 | L/h |
| Vβ | t1/2β | 150.4 |  |
| t₁/₂absorption | t1/2ka | 0.064 | h |
| MRT | MRT | 7.00 | h |
| tmax | tmax | 0.41 | h |
| Cmax | Cmax | 3.89 | mg/L |
| MEV90 | V | 15.0 | ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected because lidocaine's terminal half-life lacks time units, while lidocaine clearance and mepivacaine volume yield implausible physiological values due to unconvertible units.**

The lidocaine terminal half-life value of 150.4 is recorded with no time unit, preventing interpretation. The clearance of 26.9 L/h and volume of 15.0 ml result in derived parameters that fall outside physiological windows, indicating the non-SI units could not be standardized for the model. Extracted — Lidocaine: AUC∞ 30.4 mg h L⁻¹, AUCt 9.51 mg h L⁻¹, CL 26.9 L/h, t1/2β 150, t1/2ka 0.064 h, MRT 7 h, tmax 0.41 h, Cmax 3.89 mg/L; mepivacaine: V 15 ml.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC∞ | `Q17` · AUC∞ | 30.4 | mg h L⁻¹ |  |  | mg h L⁻¹ | exact (1) | Simon_2002_table_3:row6:col3 |
| AUC₃ₕ | `Q19` · AUCt | 9.51 | mg h L⁻¹ |  |  | mg h L⁻¹ | llm (0.6) | Simon_2002_table_3:row7:col3 |
| Cl∞ | `Q22` · CL | 26.9 | L/h | 7.472e-06 | m3/s | L/h | llm (0.6) | Simon_2002_table_3:row8:col3 |
| Vβ | `Q60` · t1/2β | 150.4 |  |  |  |  | llm (0.6) | Simon_2002_table_3:row12:col3 |
| t₁/₂absorption | `Q95` · t1/2ka | 0.064 | h | 230.4 | s | h | half_life_rule (0.95) | Simon_2002_table_3:row13:col3 |
| MRT | `Q53` · MRT | 7.00 | h | 2.52e+04 | s | h | exact (1) | Simon_2002_table_3:row16:col3 |
| tmax | `Q56` · tmax | 0.41 | h | 1476 | s | h | exact (1) | Simon_2002_table_3:row17:col3 |
| Cmax | `Q32` · Cmax | 3.89 | mg/L |  |  | mg/L | exact (1) | Simon_2002_table_3:row18:col3 |
| MEV90 | `Q61` · V | 15.0 | ml | 1.5e-05 | m3 | L | review_gapfill (0.7) | Song_2013:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Body weight' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_3:row1:col3'])
- dropped unlinked row (NIL): 'Age' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_3:row2:col3'])
- dropped unlinked row (NIL): 'Length' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_3:row3:col3'])
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_3:row4:col3'])
- linked 'Cl₃ₕ' as 'CL' → Q22 (CL) for Lidocaine — compound marker removed
- dropped duplicate Q22 ('Cl₃ₕ', value '66.6') — already have one for this compound
- dropped duplicate Q60 ('t₁/₂β', value '4.78') — already have one for this compound
- implicit units: 'AUC∞' → mg h L⁻¹ (from the paper text: "The 'Pharmacokinetics' section defines AUC∞ as 'the area under the plasma concentration-time curve (mg h l⁻¹)'.")
- implicit units: 'AUC₃ₕ' → mg h L⁻¹ (from the paper text: "The 'Pharmacokinetics' section defines AUCt as 'the area under the plasma concentration-time curve (mg h l⁻¹)'.")
- implicit units: 'Cl∞' → L/h (from the paper text: "The 'Mepivacaine' section states: 'The total body clearance of lidocaine is three times higher than that of mepivacaine,")
- implicit units: 'Vβ' — the LLM proposed 'L', whose dimension does not fit Q60; left unset
- implicit units: 't₁/₂absorption' → h (from the paper text: "The 'Pharmacokinetics' section defines 't 1/2absorption, the absorption half-life (h)'.")
- implicit units: 'MRT' → h (from the popPK convention: 'MRT (Mean Residence Time) is a time parameter. In population PK and noncompartmental analysis, when concentration is in ')
- implicit units: 'tmax' → h (from the paper text: "The 'Pharmacokinetics' section defines 't max, the time (h) at which C max occurred'.")
- implicit units: 'Cmax' → mg/L (from the paper text: "The 'Mepivacaine' section states 'a C max of 3.89 ± 0.83 mg l⁻¹'. The 'Pharmacokinetics' section also defines C max as '")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Mepivacaine
- topology: 3 first-order transfer(s) across 5 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- population split: 'mepivacaine' subgroup of Simon_2002 (paper reports 1 populations: mepivacaine)
- row roles: 4 per-group rows of none summary_statistic but 0 reference group(s) — kept as printed
- row roles: 8 per-group rows of Lidocaine summary_statistic but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of Lidocaine clearance but 0 reference group(s) — kept as printed
- row roles: 3 per-group rows of MEGX summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 19/19 row label(s) assigned, 7 linked by role; re-tagged Mepivacaine→Lidocaine ×15, parent→Lidocaine ×29, Lidocaine→MEGX ×3, parent→MEGX ×9, Mepivacaine→MEGX ×3
- molar mass: none of 1 PubChem candidate(s) is 'MEGX' (LLM) — left in mass units
- molar mass: none found for 'MEGX' — its concentrations stay mass-only
- gap-filled Q61 (V) from Song_2013's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3, 4
- table Simon_2002_table_3: missing_label
- table Simon_2002_table_3: units_need_context
- table Simon_2002_table_3: unparsed_numeric_cell
- table Simon_2002_table_4: missing_label
- table Simon_2002_table_4: units_need_context
- table Simon_2002_table_4: unparsed_numeric_cell

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | fail |  |  |  |  |  |
| C1_half_life_beta | fail | 4 | 0.387 | 0.0968 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Simon_2002_table_3:row6:col3'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Simon_2002_table_3:row7:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Simon_2002_table_3:row8:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Simon_2002_table_3:row18:col3'] |
| C5_dimension_Q53 | pass | [time] |  |  |  | ['Simon_2002_table_3:row16:col3'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['Simon_2002_table_3:row17:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Song_2013:review'] |
| C5_dimension_Q95 | pass | [time] |  |  |  | ['Simon_2002_table_3:row13:col3'] |
| C5_unit_missing_Q60 | fail | [time] |  |  |  | ['Simon_2002_table_3:row12:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 26.9 |  |  | ['Simon_2002_table_3:row8:col3'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 26.9 L/h |  |  | ['Simon_2002_table_3:row8:col3'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.015 L |  |  | ['Song_2013:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmepivacaine%5D%20Mepivacaine_Simon2002_mepivacaine&body=Drug%3A%20mepivacaine%0ARecord%3A%20Mepivacaine_Simon2002_mepivacaine%0APaper%3A%20Simon_2002%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mepivacaine/Mepivacaine_Simon2002_mepivacaine%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 01:54 UTC</sub>
