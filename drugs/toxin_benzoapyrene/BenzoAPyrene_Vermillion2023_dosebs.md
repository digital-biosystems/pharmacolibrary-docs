<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Benzo[a]pyrene&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/&quot;},{&quot;label&quot;:&quot;Vermillion_2023 \u00b7 dosebs&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benzoapyrene_Cardoso2024_reference&quot;,&quot;label&quot;:&quot;Cardoso_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Cardoso2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Vermillion2023_reference&quot;,&quot;label&quot;:&quot;Vermillion_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Weyand1986_reference&quot;,&quot;label&quot;:&quot;Weyand_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Weyand1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Vermillion2022_reference&quot;,&quot;label&quot;:&quot;Vermillion_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Benzo[a]pyrene — `BenzoAPyrene_Vermillion2023_dosebs`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Extracted Benzo[a]pyrene clearance and volume were physiologically implausible, indicating a scale or unit extraction error.

<div class="pk-model-meta" hidden drug="Benzo[a]pyrene" model-id="BenzoAPyrene_Vermillion2023_dosebs" status="rejected" stale="false" population="volunteers" measured-compound="Benzo[a]pyrene" parameterization="mechanistic" topology="1C"></div>

## Citation
Vermillion Maier ML, Siddens LK, Pennington JM, Uesugi SL, Tilton SC, Vertel EA et al. Benzo[a]pyrene toxicokinetics in humans following dietary supplementation with 3,3'-diindolylmethane (DIM) or Brussels sprouts. Toxicology and applied pharmacology 460:116377 (2023).
  ·  DOI: [10.1016/j.taap.2023.116377](https://doi.org/10.1016/j.taap.2023.116377)

## Population and dosing

**Population:** volunteers · condition healthy · age group adult.

**Dosing:** 50 ng, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (fg BaP/mL)c | Cmax | 1.67 | fg/mL |
| Tmax (h)d | tmax | 1.14 | h |
| AUC (fg BaP/mL×h) | AUC | 9.34 | fg BaP/mL×h |
| T1/2 (h) | t1/2z | 3.86 | h |
| CI (L/h)e | CL | 51409.16 | L/h |
| Vd (L)e | V | 54224.57 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Extracted Benzo[a]pyrene clearance and volume were physiologically implausible, indicating a scale or unit extraction error.**

The extracted clearance is 51409.16 L/h and volume is 54224.57 L, values far exceeding physiological limits for a single human volunteer. These magnitudes suggest a scaling or unit conversion error, as the original source used fg/mL for concentrations, leading to disproportionately large volume and clearance values. The review rejected the record because these parameters could not be validated against physiological plausibility. Extracted — benzoapyrene: Cmax 1.67 fg/mL, tmax 1.14 h, AUC 9.34 fg BaP/mL×h, t1/2z 3.86 h, CL 5.14e+04 L/h, V 5.42e+04 L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (fg BaP/mL)c | `Q32` · Cmax | 1.67 | fg/mL |  |  | fg/mL | llm_confirmed (0.6) | T4:row1:col2 |
| Tmax (h)d | `Q56` · tmax | 1.14 | h | 4104 | s | h | llm_confirmed (0.6) | T4:row2:col2 |
| AUC (fg BaP/mL×h) | `Q88` · AUC | 9.34 | fg BaP/mL×h |  |  | (bap·fg)/(h·ml) | exact (1) | T4:row3:col2 |
| T1/2 (h) | `Q57` · t1/2z | 3.86 | h | 1.39e+04 | s | h | half_life_rule (0.95) | T4:row5:col2 |
| CI (L/h)e | `Q22` · CL | 51409.16 | L/h | 0.01428 | m3/s | l/h | llm (0.6) | T4:row6:col2 |
| Vd (L)e | `Q61` · V | 54224.57 | L | 54.22 | m3 | l | llm_confirmed (0.6) | T4:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'fg BaP/mL×h' (AUC)
- dropped duplicate Q88 ('AUC(0,∞) (fg BaP/mL×h)', value '9.34') — already have one for this compound
- dropped value-less row: 'DIM significantly reduced [14C]-BaP Cmax'
- dropped value-less row: 'DIM significantly increased [14C]-BaP Tmax'
- implicit units: 'Cmax (fg BaP/mL)c' → fg/mL (from the paper text: "The text states: 'Maximum concentrations (Cmax) of [14C]-BaP in blood peaked at 3.69 ± 4.12 fg/mL'. Additionally, a prev")
- implicit units: 'AUC (fg BaP/mL×h)' — the LLM proposed 'fg/mL×h', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Benzo[a]pyrene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 7 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'dosebs' subgroup of Vermillion_2023 (paper reports 2 populations: bap only, dosebs)
- row roles (LLM): model_class=noncompartmental; 23/23 row label(s) assigned, 0 linked by role; re-tagged parent→Unknown Metabolite A ×5, parent→Brussels sprouts ×48, parent→3,3'-Diindolylmethane ×45, parent→7,8,9,10-tetraol ×5, parent→9,10-dihydrodiol ×5, parent→Unknown Metabolite B ×5, parent→7,8-dihydrodiol ×5, parent→1,6-quinone ×5, parent→Unknown Metabolite C ×5, parent→Unknown Metabolite D ×5, parent→3,6-quinone ×5, parent→Unknown Metabolite E ×5, parent→9-phenol ×5, parent→3-phenol ×5, Benzo[a]pyrene→parent ×2
- molar mass: no plausible PubChem entry for '7,8,9,10-tetraol' ('7,8,9,10-tetraol') — left in mass units
- molar mass: no plausible PubChem entry for '7,8-dihydrodiol' ('7,8-dihydrodiol') — left in mass units
- molar mass: no plausible PubChem entry for '9,10-dihydrodiol' ('9,10-dihydrodiol') — left in mass units
- molar mass: no plausible PubChem entry for '3-phenol' ('3-phenol') — left in mass units
- molar mass: no plausible PubChem entry for '9-phenol' ('9-phenol') — left in mass units
- molar mass: no plausible PubChem entry for '1,6-quinone' ('1,6-quinone') — left in mass units
- molar mass: no plausible PubChem entry for '3,6-quinone' ('3,6-quinone') — left in mass units
- molar mass: no plausible PubChem entry for 'Unknown Metabolite A' ('no full name in the paper') — left in mass units
- molar mass: no plausible PubChem entry for 'Unknown Metabolite B' ('no full name in the paper') — left in mass units
- molar mass: no plausible PubChem entry for 'Unknown Metabolite C' ('no full name in the paper') — left in mass units
- molar mass: no plausible PubChem entry for 'Unknown Metabolite D' ('no full name in the paper') — left in mass units
- molar mass: no plausible PubChem entry for 'Unknown Metabolite E' ('no full name in the paper') — left in mass units
- molar mass: none found for '7,8,9,10-tetraol' — its concentrations stay mass-only
- molar mass: none found for '7,8-dihydrodiol' — its concentrations stay mass-only
- molar mass: none found for '9,10-dihydrodiol' — its concentrations stay mass-only
- molar mass: none found for '3-phenol' — its concentrations stay mass-only
- molar mass: none found for '9-phenol' — its concentrations stay mass-only
- molar mass: none found for '1,6-quinone' — its concentrations stay mass-only
- molar mass: none found for '3,6-quinone' — its concentrations stay mass-only
- molar mass: none found for 'Unknown Metabolite A' — its concentrations stay mass-only
- molar mass: none found for 'Unknown Metabolite B' — its concentrations stay mass-only
- molar mass: none found for 'Unknown Metabolite C' — its concentrations stay mass-only
- molar mass: none found for 'Unknown Metabolite D' — its concentrations stay mass-only
- molar mass: none found for 'Unknown Metabolite E' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Vermillion_2023_table_5: ragged_grid
- table Vermillion_2023_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (153 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T4:row6:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['T4:row1:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['T4:row2:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['T4:row5:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T4:row7:col2'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | fg BaP/mL×h | ['T4:row3:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 5.141e+04 | ['T4:row6:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 5.14e+04 L/h | ['T4:row6:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.42e+04 L | ['T4:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzoapyrene%5D%20BenzoAPyrene_Vermillion2023_dosebs&body=Drug%3A%20benzoapyrene%0ARecord%3A%20BenzoAPyrene_Vermillion2023_dosebs%0APaper%3A%20Vermillion_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_benzoapyrene/BenzoAPyrene_Vermillion2023_dosebs%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:35 UTC</sub>
