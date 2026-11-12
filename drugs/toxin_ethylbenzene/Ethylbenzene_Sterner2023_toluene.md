<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Ethylbenzene&quot;,&quot;href&quot;:&quot;drugs/toxin_ethylbenzene/&quot;},{&quot;label&quot;:&quot;Sterner_2023 \u00b7 toluene&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ethylbenzene — `Ethylbenzene_Sterner2023_toluene`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Ethylbenzene" model-id="Ethylbenzene_Sterner2023_toluene" status="rejected" stale="false" population="Long-Evans rats / Sprague-Dawley rats / F344 rats" measured-compound="Ethylbenzene" parameterization="mechanistic" topology="1C"></div>

## Citation
Sterner TR, Covington TR, Mattie DR. Complex Mixtures: Array PBPK Modeling of Jet Fuel Components. Toxics 11(2) (2023).
  ·  DOI: [10.3390/toxics11020187](https://doi.org/10.3390/toxics11020187)

## Population and dosing

**Population:** Long-Evans rats / Sprague-Dawley rats / F344 rats · condition occupational exposure · age group adult.

**Dosed compound ≠ measured compound:** dosed Jet Fuel (JP-8) / JP-9 / Virent SAK / Individual aromatic hydrocarbons, measured Ethylbenzene.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Compound Percent by Volume | Q | 0.16 |  |
| MW | MW | 92.14 | g/mol |
| PFat | Kp_derm | 56.7 |  |
| VmaxC | Vmax | 3.44 |  |
| Km | Km | 0.13 | mg/L |
| Total body volume (mL) | V | 250.0 | mL |
| Absorption rate (1/h) | kabs | 0.88 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Compound Percent by Volume | `Q30` · Q | 0.16 |  |  |  |  | llm_corrected (0.6) | toxics-11-00187-t004:row2:col1, toxics-11-00187-t004:row2:col2, toxics-11-00187-t004:row2:col3 |
| MW | `Q374` · MW | 92.14 | g/mol |  |  | g/mol | exact (1) | Sterner_2023_table_3:row0:col2 |
| PFat | `Q412` · Kp_derm | 56.7 |  |  |  |  | llm (0.6) | Sterner_2023_table_3:row7:col2 |
| VmaxC | `Q66` · Vmax | 3.44 |  |  |  |  | llm (0.6) | Sterner_2023_table_4:row0:col2 |
| Km | `Q1` · Km | 0.13 | mg/L |  |  | mg/L | exact (1) | Sterner_2023_table_4:row1:col2 |
| Total body volume (mL) | `Q61` · V | 250.0 | mL | 0.00025 | m3 | L | review_gapfill (0.7) | Cheng_2011:review |
| Absorption rate (1/h) | `Q49` · kabs | 0.88 | 1/h | 0.0002444 | 1/s | 1/h | review_gapfill (0.7) | Lu_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '% Difference' — extend the ontology if this is a real PK parameter (source ['toxics-11-00187-t004:row2:col4'])
- dropped unlinked row (NIL): 'PB' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_3:row1:col2'])
- dropped unlinked row (NIL): 'PBrn' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_3:row3:col2'])
- dropped unlinked row (NIL): 'PStm' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_3:row4:col2'])
- dropped unlinked row (NIL): 'PTL' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_3:row5:col2'])
- dropped unlinked row (NIL): 'PCoc' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_3:row6:col2'])
- dropped unlinked row (NIL): 'PLiv' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_3:row8:col2'])
- dropped unlinked row (NIL): 'PLng' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_3:row9:col2'])
- dropped unlinked row (NIL): 'PRap' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_3:row10:col2'])
- dropped PD-category row 'PSlw' → Q345 (proportional_odds, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Sterner_2023_table_3:row11:col2'])
- dropped unlinked row (NIL): 'VmaxLngC' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_4:row2:col2'])
- dropped unlinked row (NIL): 'KmLng' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_4:row3:col2'])
- dropped unlinked row (NIL): 'ClUrC' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_4:row4:col2'])
- dropped unlinked row (NIL): 'Scrub' — extend the ontology if this is a real PK parameter (source ['Sterner_2023_table_4:row5:col2'])
- implicit units: 'MW' → g/mol (from the popPK convention: 'Molecular weight (MW) is conventionally expressed in g/mol (or Da). The value 92.14 corresponds to the molecular weight ')
- implicit units: 'VmaxC' — the LLM proposed 'mg/(g·h)', whose dimension does not fit Q66; left unset
- implicit units: 'Km' → mg/L (from the popPK convention: 'Km is the Michaelis constant, representing substrate concentration at half-maximal velocity. In PBPK models, it is conve')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ethylbenzene
- population split: 'toluene' subgroup of Sterner_2023 (paper reports 2 populations: ethylbenzene, toluene)
- gap-filled Q61 (V) from Cheng_2011's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Lu_2016's review values (primary lacked it)

**Extraction notes:**
- table toxics-11-00187-t004: units_need_context
- table toxics-11-00187-t004: unparsed_numeric_cell
- transposed table toxics-11-00187-t004: logical view retains original source coordinates
- table Sterner_2023_table_3: ambiguous_numeric_format
- table Sterner_2023_table_3: units_need_context
- table Sterner_2023_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (117 record(s))
- companion parameter table 4 transcribed (39 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Sterner_2023_table_4:row1:col2'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Sterner_2023_table_3:row0:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Lu_2016:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Cheng_2011:review'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['toxics-11-00187-t004:row2:col1', 'toxics-11-00187-t004:row2:col2', 'toxics-11-00187-t004:row2:col3'] |
| C5_unit_missing_Q412 | fail | [length] / [time] |  | ['Sterner_2023_table_3:row7:col2'] |
| C5_unit_missing_Q66 | fail | [mass] / [time] |  | ['Sterner_2023_table_4:row0:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.25 L | ['Cheng_2011:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethylbenzene%5D%20Ethylbenzene_Sterner2023_toluene&body=Drug%3A%20ethylbenzene%0ARecord%3A%20Ethylbenzene_Sterner2023_toluene%0APaper%3A%20Sterner_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethylbenzene/Ethylbenzene_Sterner2023_toluene%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 09:04 UTC</sub>
