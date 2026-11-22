<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Manganese chloride&quot;,&quot;href&quot;:&quot;drugs/toxin_manganese_chloride/&quot;},{&quot;label&quot;:&quot;Wooten_2017 \u00b7 uptake_of_52mn_id_g_inhalation&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ManganeseChloride_Grnecker2013_reference&quot;,&quot;label&quot;:&quot;Gr\u00fcnecker_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_manganese_chloride/ManganeseChloride_Grnecker2013_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ManganeseChloride_Lewis2005_rat&quot;,&quot;label&quot;:&quot;Lewis_2005_rat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_manganese_chloride/ManganeseChloride_Lewis2005_rat.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ManganeseChloride_Newland1987_reference&quot;,&quot;label&quot;:&quot;Newland_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_manganese_chloride/ManganeseChloride_Newland1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Manganese chloride — `ManganeseChloride_Wooten2017_uptake_of_52mn_id_g_inhalation`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">mouse</span>

> The 5.5 mL volume of distribution for Manganese-52 in mice yields implausible clearance, triggering rejection for potential unit or scale extraction errors.

<div class="pk-model-meta" hidden drug="Manganese chloride" model-id="ManganeseChloride_Wooten2017_uptake_of_52mn_id_g_inhalation" status="rejected" stale="false" population="mice" measured-compound="Manganese-52 (52Mn)" parameterization="mechanistic" topology="1C"></div>

## Citation
Wooten AL, Aweda TA, Lewis BC, Gross RB, Lapi SE. Biodistribution and PET Imaging of pharmacokinetics of manganese in mice using Manganese-52. PloS one 12(3):e0174351 (2017).
  ·  DOI: [10.1371/journal.pone.0174351](https://doi.org/10.1371/journal.pone.0174351)

## Population and dosing

**Population:** mice · condition healthy.

**Dosed compound ≠ measured compound:** dosed Manganese-52 chloride ([52Mn]MnCl2), measured Manganese-52 (52Mn).

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Brain | body_burden | 0.09 |  |
| t1/2 | t1/2z | 5.6 | d |
| volume | V | 5.5 | mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The 5.5 mL volume of distribution for Manganese-52 in mice yields implausible clearance, triggering rejection for potential unit or scale extraction errors.**

The record specifies a volume of distribution of 5.5 mL for Manganese-52 in mice, a value incompatible with expected physiological clearance when paired with the terminal half-life of 5.6 days. This discrepancy results in a clearance estimate that falls outside the biologically plausible window, indicating a likely error in unit conversion or magnitude extraction. Extracted — Manganese-52 chloride ([52Mn]MnCl2): body_burden 0.09; Manganese-52 (52Mn): t1/2z 5.6 d, V 5.5 mL.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Brain | `Q414` · body_burden | 0.09 |  |  |  |  | llm (0.6) | Wooten_2017_table_1:row9:col3, Wooten_2017_table_1:row9:col4 |
| t1/2 | `Q57` · t1/2z | 5.6 | d | 4.838e+05 | s | h | half_life_rule (0.95) | Wooten_2017:prose |
| volume | `Q61` · V | 5.5 | mL | 5.5e-06 | m3 | L | exact (1) | Wooten_2017:prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Blood' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row2:col3', 'Wooten_2017_table_1:row2:col4'])
- dropped unlinked row (NIL): 'Lung' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row3:col3', 'Wooten_2017_table_1:row3:col4'])
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row4:col3', 'Wooten_2017_table_1:row4:col4'])
- dropped unlinked row (NIL): 'Spleen' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row5:col3', 'Wooten_2017_table_1:row5:col4'])
- dropped unlinked row (NIL): 'Kidney' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row6:col3', 'Wooten_2017_table_1:row6:col4'])
- dropped unlinked row (NIL): 'Muscle' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row7:col3', 'Wooten_2017_table_1:row7:col4'])
- dropped unlinked row (NIL): 'Heart' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row8:col3', 'Wooten_2017_table_1:row8:col4'])
- dropped unlinked row (NIL): 'Bone' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row10:col3', 'Wooten_2017_table_1:row10:col4'])
- dropped unlinked row (NIL): 'Thyroid' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row11:col3', 'Wooten_2017_table_1:row11:col4'])
- dropped unlinked row (NIL): 'Pancreas' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row12:col3', 'Wooten_2017_table_1:row12:col4'])
- dropped unlinked row (NIL): 'Stomach' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row13:col3', 'Wooten_2017_table_1:row13:col4'])
- dropped unlinked row (NIL): 'Whole Intestine' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row14:col3', 'Wooten_2017_table_1:row14:col4'])
- dropped unlinked row (NIL): 'Salivary Gland' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row15:col3', 'Wooten_2017_table_1:row15:col4'])
- dropped unlinked row (NIL): 'Fat' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row16:col3', 'Wooten_2017_table_1:row16:col4'])
- dropped unlinked row (NIL): 'Thymus' — extend the ontology if this is a real PK parameter (source ['Wooten_2017_table_1:row17:col3', 'Wooten_2017_table_1:row17:col4'])
- table mostly unlinked (15/16 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q57 ('t1/2'=5.6) from results prose — parameter table was unreadable
- salvaged Q61 ('volume'=5.5) from results prose — parameter table was unreadable
- implicit units: 'Brain' — the LLM proposed '%ID/g', whose dimension does not fit Q414; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Manganese-52 (52Mn)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'uptake of 52mn (%id/g) / inhalation' subgroup of Wooten_2017 (paper reports 2 populations: uptake of 52mn (%id/g) / inhalation, uptake of 52mn (%id/g) / intravenous)
- molar mass: no plausible PubChem entry for 'Manganese-52 (52Mn)' ('positron-emitting radionuclide 52Mn') — left in mass units
- molar mass: none found for 'Manganese-52 (52Mn)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Manganese-52 (52Mn)', not manganese_chloride — the review values are the parent's

**Extraction notes:**
- no LLM table selection; kept 4 deterministically-scored parameter table(s)
- table Wooten_2017_table_1: missing_label
- table Wooten_2017_table_1: units_need_context
- table Wooten_2017_table_S1: unknown_column_role
- table Wooten_2017_table_S1: missing_label
- table Wooten_2017_table_S1: ragged_grid
- table Wooten_2017_table_S1: unparsed_numeric_cell
- table Wooten_2017_table_S6: unknown_column_role
- table Wooten_2017_table_S6: missing_label
- table Wooten_2017_table_S6: ragged_grid
- table Wooten_2017_table_S6: unparsed_numeric_cell
- table Wooten_2017_table_S11: unknown_column_role
- table Wooten_2017_table_S11: missing_label
- table Wooten_2017_table_S11: ragged_grid
- table Wooten_2017_table_S11: unparsed_numeric_cell
- toxin: the located table(s) gave no kinetic value — 9 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_unit_missing_Q414 | fail | [mass] |  | ['Wooten_2017_table_1:row9:col3', 'Wooten_2017_table_1:row9:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0055 L | ['Wooten_2017:prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmanganese_chloride%5D%20ManganeseChloride_Wooten2017_uptake_of_52mn_id_g_inhalation&body=Drug%3A%20manganese_chloride%0ARecord%3A%20ManganeseChloride_Wooten2017_uptake_of_52mn_id_g_inhalation%0APaper%3A%20Wooten_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_manganese_chloride/ManganeseChloride_Wooten2017_uptake_of_52mn_id_g_inhalation%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 10:43 UTC</sub>
