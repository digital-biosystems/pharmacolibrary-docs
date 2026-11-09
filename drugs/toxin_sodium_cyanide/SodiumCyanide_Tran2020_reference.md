<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Sodium cyanide&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/&quot;},{&quot;label&quot;:&quot;Tran_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumCyanide_Thompson2012_reference&quot;,&quot;label&quot;:&quot;Thompson_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Thompson2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumCyanide_Sousa2003_goats&quot;,&quot;label&quot;:&quot;Sousa_2003_goats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_goats.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumCyanide_Sousa2003_pigs&quot;,&quot;label&quot;:&quot;Sousa_2003_pigs&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_pigs.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumCyanide_Sousa2003_rats&quot;,&quot;label&quot;:&quot;Sousa_2003_rats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_cyanide/SodiumCyanide_Sousa2003_rats.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium cyanide — `SodiumCyanide_Tran2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance; km has no unit.

<div class="pk-model-meta" hidden drug="Sodium cyanide" model-id="SodiumCyanide_Tran2020_reference" status="needs_review" stale="false" population="human" measured-compound="Cyanide" parameterization="mechanistic" topology="1C"></div>

## Citation
Tran QB, Phenrat T, Lohitnavy M. Human continuous hydrogen cyanide inhalation predictor with a physiologically based pharmacokinetic (PBPK) model. Environmental science and pollution research international 27(20):24650–24658 (2020).
  ·  DOI: [10.1007/s11356-019-06033-w](https://doi.org/10.1007/s11356-019-06033-w)

## Population and dosing

**Population:** human · condition continuous HCN inhalation · age group adult.

**Dosed compound ≠ measured compound:** dosed Hydrogen cyanide, measured Cyanide.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V Lu | equation variable | 0.054 |  |
| V Ki | Km | 0.294 |  |
| V SP | V | 26.894 | L |
| Q SP | Q | 69.334 | L/h |
| MW | MW | 27.03 | g/mol |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance; km has no unit.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (MW), so that value has no SI equivalent. None of the extracted parameters is sodium cyanide's own; they describe Hydrogen cyanide. Extracted — Hydrogen cyanide: Km 0.294, V 26.9 L, Q 69.3 L/h, MW 27 g/mol.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V Lu | `Q900` · equation variable | 0.054 |  | 0.054 |  |  | llm (0.6) | Tran_2020_table_1:row2:col2 |
| V Ki | `Q1` · Km | 0.294 |  |  |  |  | llm (0.6) | Tran_2020_table_1:row4:col2 |
| V SP | `Q61` · V | 26.894 | L | 0.02689 | m3 | L | llm (0.6) | Tran_2020_table_1:row5:col2 |
| Q SP | `Q30` · Q | 69.334 | L/h | 1.926e-05 | m3/s | L/h | llm (0.6) | Tran_2020_table_1:row10:col2 |
| MW | `Q374` · MW | 27.03 | g/mol |  |  | g/mol | exact (1) | Tran_2020_table_1:row13:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'BW' — extend the ontology if this is a real PK parameter (source ['Tran_2020_table_1:row0:col2'])
- dropped unlinked row (NIL): 'V Li' — extend the ontology if this is a real PK parameter (source ['Tran_2020_table_1:row3:col2'])
- dropped duplicate Q900 ('V Ve', value '4.144') — already have one for this compound
- dropped duplicate Q61 ('V Ar', value '1.386') — already have one for this compound
- dropped unlinked row (NIL): 'QC' — extend the ontology if this is a real PK parameter (source ['Tran_2020_table_1:row9:col2'])
- dropped unlinked row (NIL): 'Q Ki' — extend the ontology if this is a real PK parameter (source ['Tran_2020_table_1:row11:col2'])
- dropped unlinked row (NIL): 'Q Li' — extend the ontology if this is a real PK parameter (source ['Tran_2020_table_1:row12:col2'])
- dropped unlinked row (NIL): 'P Lu' — extend the ontology if this is a real PK parameter (source ['Tran_2020_table_1:row15:col2'])
- dropped duplicate Q900 ('P Li', value '0.72') — already have one for this compound
- dropped unlinked row (NIL): 'P Ki' — extend the ontology if this is a real PK parameter (source ['Tran_2020_table_1:row17:col2'])
- dropped unlinked row (NIL): 'P SP' — extend the ontology if this is a real PK parameter (source ['Tran_2020_table_1:row18:col2'])
- implicit units: 'V SP' → L (from the popPK convention: "The parameter is defined as 'V: Volume of distribution'. In population PK/PBPK modeling, volumes are typically expressed")
- implicit units: 'Q SP' → L/h (from the popPK convention: "The parameter is defined as 'Q: Apparent intercompartmental clearance' (or blood flow in the context of PBPK compartment")
- implicit units: 'MW' → g/mol (from the paper text: "The text explicitly defines the variable MW in Equation 1: 'MW HCN is the molecular weight of HCN (g/mol)'. Although the")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cyanide
- review gap-fill skipped: this record measures 'Cyanide', not sodium_cyanide — the review values are the parent's

**Extraction notes:**
- table Tran_2020_table_1: ambiguous_numeric_format
- table Tran_2020_table_1: units_need_context

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tran_2020_table_1:row10:col2'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Tran_2020_table_1:row13:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tran_2020_table_1:row5:col2'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 |  | ['Tran_2020_table_1:row4:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 26.9 L | ['Tran_2020_table_1:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_cyanide%5D%20SodiumCyanide_Tran2020_reference&body=Drug%3A%20sodium_cyanide%0ARecord%3A%20SodiumCyanide_Tran2020_reference%0APaper%3A%20Tran_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_cyanide/SodiumCyanide_Tran2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 00:38 UTC</sub>
