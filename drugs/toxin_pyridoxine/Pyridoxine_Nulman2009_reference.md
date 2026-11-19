<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Pyridoxine&quot;,&quot;href&quot;:&quot;drugs/toxin_pyridoxine/&quot;},{&quot;label&quot;:&quot;Nulman_2009 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pyridoxine — `Pyridoxine_Nulman2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record contains no kinetic parameters for pyridoxine, listing only exposure metrics and two metabolites with zero compartments and undefined metabolic rate constants.

<div class="pk-model-meta" hidden drug="Pyridoxine" model-id="Pyridoxine_Nulman2009_reference" status="rejected" stale="false" population="healthy non pregnant women of childbearing age" measured-compound="pyridoxine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Nulman I, Koren G. Pharmacokinetic comparison of a delayed-release combination of doxylamine succinate and pyridoxine hydrocholoride (Diclectin) and oral solutions of these drugs in healthy women of childbearing age. The Canadian journal of clinical pharmacology = Journal canadien de pharmacologie clinique 16(3):e400–e406 (2009).

## Population and dosing

**Population:** healthy non pregnant women of childbearing age · condition healthy · age group adult · n = 18.

**Dosing:** 20 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed pyridoxine hydrochloride, measured pyridoxine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC 0-t (ng.h/mL) | AUCt | 80.57 | ng.h/mL |
| AUC 0-inf (ng.h/mL) | AUC∞ | 91.53 | ng.h/mL |
| AUC₀₋ₜ (ng.h/mL) | AUCt | 105.15 | ng.h/mL |
| AUC₀₋ᵢₙf (ng.h/mL) | AUC∞ | 89.93 | ng.h/mL |
| AUC₀₋∞ (ng.h/mL) | AUC∞ | 102.45 | ng.h/mL |
| first-order absorption rate constant (Ka,AM) | kabs | 0.397 | h−1 |
| absorption lag time (LAGAM) | tlag | 0.825 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record contains no kinetic parameters for pyridoxine, listing only exposure metrics and two metabolites with zero compartments and undefined metabolic rate constants.**

Pyridoxine is described by an absorption rate constant and lag time, but lacks essential kinetic parameters such as volume or clearance. Both pyridoxal and pyridoxal 5'-phosphate are assigned zero compartments and are linked by metabolic parameters with no extracted values, rendering these metabolites structurally orphaned from the dose path. Extracted — doxylamine: AUCt 80.6 ng.h/mL, AUC∞ 91.5 ng.h/mL; pyridoxine: AUCt 105 ng.h/mL, AUC∞ 89.9 ng.h/mL, kabs 0.397 h−1, tlag 0.825 h; pyridoxal: AUC∞ 102 ng.h/mL.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC 0-t (ng.h/mL) | `Q19` · AUCt | 80.57 | ng.h/mL | 0.2901 | kg*s/m3 | (h·ng)/ml | space_fold (0.95) | tab_2:row2:col3 |
| AUC 0-inf (ng.h/mL) | `Q17` · AUC∞ | 91.53 | ng.h/mL | 0.3295 | kg*s/m3 | (h·ng)/ml | space_fold (0.95) | tab_2:row3:col3 |
| AUC₀₋ₜ (ng.h/mL) | `Q19` · AUCt | 105.15 | ng.h/mL | 0.3785 | kg*s/m3 | (h·ng)/ml | exact (1) | Nulman_2009_table_1:row0:col3, Nulman_2009_table_2:row0:col3, Nulman_2009_table_4:row0:col4 |
| AUC₀₋ᵢₙf (ng.h/mL) | `Q17` · AUC∞ | 89.93 | ng.h/mL | 0.3237 | kg*s/m3 | (h·ng)/ml | exact (1) | Nulman_2009_table_1:row1:col3, Nulman_2009_table_2:row1:col3 |
| AUC₀₋∞ (ng.h/mL) | `Q17` · AUC∞ | 102.45 | ng.h/mL | 0.3688 | kg*s/m3 | (h·ng)/ml | exact (1) | Nulman_2009_table_4:row1:col4 |
| first-order absorption rate constant (Ka,AM) | `Q49` · kabs | 0.397 | h−1 | 0.0001103 | 1/s | 1/h | review_gapfill (0.7) | Wang_2020:review |
| absorption lag time (LAGAM) | `Q83` · tlag | 0.825 | h | 2970 | s | h | review_gapfill (0.7) | Wang_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- conflicting source units for 'AUC 0-t (ng.h/mL)': [{'unit': 'ng.h/mL', 'source': 'tab_2:row2:col0', 'scope': 'label'}, {'unit': '%', 'source': 'tab_2:row2:col3', 'scope': 'inline'}]
- conflicting source units for 'AUC 0-inf (ng.h/mL)': [{'unit': 'ng.h/mL', 'source': 'tab_2:row3:col0', 'scope': 'label'}, {'unit': '%', 'source': 'tab_2:row3:col3', 'scope': 'inline'}]
- conflicting source units for 'AUC₀₋ₜ (ng.h/mL)': [{'unit': 'ng.h/mL', 'source': 'Nulman_2009_table_1:row0:col0', 'scope': 'label'}, {'unit': '%', 'source': 'Nulman_2009_table_1:row0:col3', 'scope': 'inline'}]
- conflicting source units for 'AUC₀₋ᵢₙf (ng.h/mL)': [{'unit': 'ng.h/mL', 'source': 'Nulman_2009_table_1:row1:col0', 'scope': 'label'}, {'unit': '%', 'source': 'Nulman_2009_table_1:row1:col3', 'scope': 'inline'}]
- conflicting source units for 'AUC₀₋ₜ (ng.h/mL)': [{'unit': 'ng.h/mL', 'source': 'Nulman_2009_table_2:row0:col0', 'scope': 'label'}, {'unit': '%', 'source': 'Nulman_2009_table_2:row0:col3', 'scope': 'inline'}]
- conflicting source units for 'AUC₀₋ᵢₙf (ng.h/mL)': [{'unit': 'ng.h/mL', 'source': 'Nulman_2009_table_2:row1:col0', 'scope': 'label'}, {'unit': '%', 'source': 'Nulman_2009_table_2:row1:col3', 'scope': 'inline'}]
- conflicting source units for 'AUC₀₋ₜ (ng.h/mL)': [{'unit': 'ng.h/mL', 'source': 'Nulman_2009_table_4:row0:col0', 'scope': 'label'}, {'unit': '%', 'source': 'Nulman_2009_table_4:row0:col4', 'scope': 'inline'}]
- conflicting source units for 'AUC₀₋∞ (ng.h/mL)': [{'unit': 'ng.h/mL', 'source': 'Nulman_2009_table_4:row1:col0', 'scope': 'label'}, {'unit': '%', 'source': 'Nulman_2009_table_4:row1:col4', 'scope': 'inline'}]
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pyridoxine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role; re-tagged parent→doxylamine ×2, parent→pyridoxine ×5, parent→pyridoxal ×1
- molar mass: none of 1 PubChem candidate(s) is "pyridoxal 5'-phosphate" (LLM) — left in mass units
- molar mass: none found for "pyridoxal 5'-phosphate" — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Wang_2020's review values (primary lacked it)
- gap-filled Q83 (tlag) from Wang_2020's review values (primary lacked it)

**Extraction notes:**
- table tab_2: conflicting_units
- table tab_2: units_need_context
- table tab_2: unparsed_numeric_cell
- table Nulman_2009_table_1: unbound_uncertainty
- table Nulman_2009_table_1: conflicting_units
- table Nulman_2009_table_1: units_need_context
- table Nulman_2009_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (15 record(s))
- table Nulman_2009_table_2: unbound_uncertainty
- table Nulman_2009_table_2: conflicting_units
- table Nulman_2009_table_2: units_need_context
- table Nulman_2009_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (15 record(s))
- table Nulman_2009_table_4: unbound_uncertainty
- table Nulman_2009_table_4: conflicting_units
- table Nulman_2009_table_4: units_need_context
- table Nulman_2009_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (15 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_2:row3:col3'] |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Nulman_2009_table_1:row1:col3', 'Nulman_2009_table_2:row1:col3'] |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Nulman_2009_table_4:row1:col4'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_2:row2:col3'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Nulman_2009_table_1:row0:col3', 'Nulman_2009_table_2:row0:col3', 'Nulman_2009_table_4:row0:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Wang_2020:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Wang_2020:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyridoxine%5D%20Pyridoxine_Nulman2009_reference&body=Drug%3A%20pyridoxine%0ARecord%3A%20Pyridoxine_Nulman2009_reference%0APaper%3A%20Nulman_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pyridoxine/Pyridoxine_Nulman2009_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 22:57 UTC</sub>
