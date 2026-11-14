<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Benzo[a]pyrene&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/&quot;},{&quot;label&quot;:&quot;Vermillion_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benzoapyrene_Cardoso2024_reference&quot;,&quot;label&quot;:&quot;Cardoso_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Cardoso2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Vermillion2023_reference&quot;,&quot;label&quot;:&quot;Vermillion_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Benzoapyrene_Weyand1986_reference&quot;,&quot;label&quot;:&quot;Weyand_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Weyand1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Vermillion2022_reference&quot;,&quot;label&quot;:&quot;Vermillion_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Benzo[a]pyrene — `Benzoapyrene_Vermillion2023_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="Benzo[a]pyrene" model-id="Benzoapyrene_Vermillion2023_reference" status="curated_candidate" stale="false" population="volunteers" measured-compound="Benzo[a]pyrene" parameterization="mechanistic" topology="retention"></div>

## Citation
Vermillion Maier ML, Siddens LK, Pennington JM, Uesugi SL, Tilton SC, Vertel EA et al. Benzo[a]pyrene toxicokinetics in humans following dietary supplementation with 3,3'-diindolylmethane (DIM) or Brussels sprouts. Toxicology and applied pharmacology 460:116377 (2023).
  ·  DOI: [10.1016/j.taap.2023.116377](https://doi.org/10.1016/j.taap.2023.116377)

## Population and dosing

**Population:** volunteers · condition healthy · age group adult.

**Dosing:** 50 ng, oral, single.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| DIM | D1 | 1.15 | h |
| [14C]-BaP T1/2 in blood was | t1/2z | 3.69 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| DIM | `Q310` · D1 | 1.15 | h | 4140 | s | h | route_fold (0.9) | Vermillion_2023_table_5:row2:col1, Vermillion_2023_table_5:row2:col2, Vermillion_2023_table_5:row2:col3, Vermillion_2023_table_5:row2:col4, Vermillion_2023_table_5:row2:col5, Vermillion_2023_table_5:row6:col1, Vermillion_2023_table_5:row6:col2, Vermillion_2023_table_5:row6:col3, Vermillion_2023_table_5:row6:col4, Vermillion_2023_table_5:row6:col5, Vermillion_2023_table_5:row10:col1, Vermillion_2023_table_5:row10:col2, Vermillion_2023_table_5:row10:col3, Vermillion_2023_table_5:row10:col4, Vermillion_2023_table_5:row10:col5, Vermillion_2023_table_5:row14:col1, Vermillion_2023_table_5:row14:col2, Vermillion_2023_table_5:row14:col3, Vermillion_2023_table_5:row14:col4, Vermillion_2023_table_5:row14:col5, Vermillion_2023_table_5:row18:col1, Vermillion_2023_table_5:row18:col2, Vermillion_2023_table_5:row18:col3, Vermillion_2023_table_5:row18:col4, Vermillion_2023_table_5:row18:col5, Vermillion_2023_table_5:row22:col1, Vermillion_2023_table_5:row22:col2, Vermillion_2023_table_5:row22:col3, Vermillion_2023_table_5:row22:col4, Vermillion_2023_table_5:row22:col5, Vermillion_2023_table_5:row26:col1, Vermillion_2023_table_5:row26:col2, Vermillion_2023_table_5:row26:col3, Vermillion_2023_table_5:row26:col4, Vermillion_2023_table_5:row26:col5, Vermillion_2023_table_5:row30:col1, Vermillion_2023_table_5:row30:col2, Vermillion_2023_table_5:row30:col3, Vermillion_2023_table_5:row30:col4, Vermillion_2023_table_5:row30:col5, Vermillion_2023_table_5:row40:col1, Vermillion_2023_table_5:row40:col2, Vermillion_2023_table_5:row40:col3, Vermillion_2023_table_5:row40:col4, Vermillion_2023_table_5:row40:col5 |
| [14C]-BaP T1/2 in blood was | `Q57` · t1/2z | 3.69 | h | 1.328e+04 | s | h | boundary (0.8) | Vermillion_2023:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / [14C]-BaP T1/2 in blood was (Q57)

**Interpretation flags:**
- column 'following' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Unknown A' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row0:col2', 'Vermillion_2023_table_5:row0:col3', 'Vermillion_2023_table_5:row0:col4', 'Vermillion_2023_table_5:row0:col5', 'Vermillion_2023_table_5:row0:col6'])
- dropped unlinked row (NIL): 'BS' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row1:col1', 'Vermillion_2023_table_5:row1:col2', 'Vermillion_2023_table_5:row1:col3', 'Vermillion_2023_table_5:row1:col4', 'Vermillion_2023_table_5:row1:col5', 'Vermillion_2023_table_5:row5:col1', 'Vermillion_2023_table_5:row5:col2', 'Vermillion_2023_table_5:row5:col3', 'Vermillion_2023_table_5:row5:col4', 'Vermillion_2023_table_5:row5:col5', 'Vermillion_2023_table_5:row9:col1', 'Vermillion_2023_table_5:row9:col2', 'Vermillion_2023_table_5:row9:col3', 'Vermillion_2023_table_5:row9:col4', 'Vermillion_2023_table_5:row9:col5', 'Vermillion_2023_table_5:row13:col1', 'Vermillion_2023_table_5:row13:col2', 'Vermillion_2023_table_5:row13:col3', 'Vermillion_2023_table_5:row13:col4', 'Vermillion_2023_table_5:row13:col5', 'Vermillion_2023_table_5:row17:col1', 'Vermillion_2023_table_5:row17:col2', 'Vermillion_2023_table_5:row17:col3', 'Vermillion_2023_table_5:row17:col4', 'Vermillion_2023_table_5:row17:col5', 'Vermillion_2023_table_5:row21:col1', 'Vermillion_2023_table_5:row21:col2', 'Vermillion_2023_table_5:row21:col3', 'Vermillion_2023_table_5:row21:col4', 'Vermillion_2023_table_5:row21:col5', 'Vermillion_2023_table_5:row25:col1', 'Vermillion_2023_table_5:row25:col2', 'Vermillion_2023_table_5:row25:col3', 'Vermillion_2023_table_5:row25:col4', 'Vermillion_2023_table_5:row25:col5', 'Vermillion_2023_table_5:row29:col1', 'Vermillion_2023_table_5:row29:col2', 'Vermillion_2023_table_5:row29:col3', 'Vermillion_2023_table_5:row29:col4', 'Vermillion_2023_table_5:row29:col5', 'Vermillion_2023_table_5:row36:col1', 'Vermillion_2023_table_5:row36:col3', 'Vermillion_2023_table_5:row36:col4', 'Vermillion_2023_table_5:row39:col1', 'Vermillion_2023_table_5:row39:col2', 'Vermillion_2023_table_5:row39:col3', 'Vermillion_2023_table_5:row39:col4', 'Vermillion_2023_table_5:row39:col5'])
- unit_dimension_unknown: '14C' (D1)
- dropped unlinked row (NIL): 'Tetraols' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row4:col2', 'Vermillion_2023_table_5:row4:col3', 'Vermillion_2023_table_5:row4:col4', 'Vermillion_2023_table_5:row4:col5', 'Vermillion_2023_table_5:row4:col6'])
- dropped unlinked row (NIL): '9,10-dihydrodiol' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row8:col2', 'Vermillion_2023_table_5:row8:col3', 'Vermillion_2023_table_5:row8:col4', 'Vermillion_2023_table_5:row8:col5', 'Vermillion_2023_table_5:row8:col6'])
- dropped unlinked row (NIL): 'Unknown B' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row12:col2', 'Vermillion_2023_table_5:row12:col3', 'Vermillion_2023_table_5:row12:col4', 'Vermillion_2023_table_5:row12:col5', 'Vermillion_2023_table_5:row12:col6'])
- dropped unlinked row (NIL): '7,8-dihydrodiol' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row16:col2', 'Vermillion_2023_table_5:row16:col3', 'Vermillion_2023_table_5:row16:col4', 'Vermillion_2023_table_5:row16:col5', 'Vermillion_2023_table_5:row16:col6'])
- dropped unlinked row (NIL): '1,6-quinone' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row20:col2', 'Vermillion_2023_table_5:row20:col3', 'Vermillion_2023_table_5:row20:col4', 'Vermillion_2023_table_5:row20:col5', 'Vermillion_2023_table_5:row20:col6'])
- dropped unlinked row (NIL): 'Unknown C' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row24:col2', 'Vermillion_2023_table_5:row24:col3', 'Vermillion_2023_table_5:row24:col4', 'Vermillion_2023_table_5:row24:col5', 'Vermillion_2023_table_5:row24:col6'])
- dropped unlinked row (NIL): 'Unknown D' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row28:col2', 'Vermillion_2023_table_5:row28:col3', 'Vermillion_2023_table_5:row28:col4', 'Vermillion_2023_table_5:row28:col5', 'Vermillion_2023_table_5:row28:col6'])
- dropped unlinked row (NIL): '3,6-quinonec' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row32:col2', 'Vermillion_2023_table_5:row32:col3', 'Vermillion_2023_table_5:row32:col4', 'Vermillion_2023_table_5:row32:col5', 'Vermillion_2023_table_5:row32:col6'])
- dropped unlinked row (NIL): 'Unknown Ec' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row33:col2', 'Vermillion_2023_table_5:row33:col3', 'Vermillion_2023_table_5:row33:col4', 'Vermillion_2023_table_5:row33:col5', 'Vermillion_2023_table_5:row33:col6'])
- dropped unlinked row (NIL): '9-OHc' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row35:col2', 'Vermillion_2023_table_5:row35:col3', 'Vermillion_2023_table_5:row35:col4', 'Vermillion_2023_table_5:row35:col5', 'Vermillion_2023_table_5:row35:col6'])
- dropped unlinked row (NIL): '3-OH' — extend the ontology if this is a real PK parameter (source ['Vermillion_2023_table_5:row38:col2', 'Vermillion_2023_table_5:row38:col3', 'Vermillion_2023_table_5:row38:col4', 'Vermillion_2023_table_5:row38:col5', 'Vermillion_2023_table_5:row38:col6'])
- dropped value-less row: 'DIM significantly reduced [14C]-BaP Cmax'
- dropped value-less row: 'DIM significantly increased [14C]-BaP Tmax'
- table mostly unlinked (13/14 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q57 ('[14C]-BaP T1/2 in blood was'=3.69) from results prose — parameter table was unreadable
- implicit units: 'DIM' → h (from the popPK convention: "The paper text discusses the 48-hour study period and reports Tmax in hours (e.g., 'increased Tmax 9-fold'). For a zero-")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Benzo[a]pyrene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 7 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (T4:footnote, Vermillion_2023:discussion_prose, Vermillion_2023:other_prose, Vermillion_2023_table_5); populations bap only, dosebs kept as separate records
- row roles (LLM): model_class=noncompartmental; 23/23 row label(s) assigned, 0 linked by role; re-tagged parent→Unknown Metabolite A ×5, parent→Brussels sprouts ×48, parent→3,3'-Diindolylmethane ×45, parent→7,8,9,10-tetraol ×5, parent→9,10-dihydrodiol ×5, parent→Unknown Metabolite B ×5, parent→7,8-dihydrodiol ×5, parent→1,6-quinone ×5, parent→Unknown Metabolite C ×5, parent→Unknown Metabolite D ×5, parent→3,6-quinone ×5, parent→Unknown Metabolite E ×5, parent→9-phenol ×5, parent→3-phenol ×5, Benzo[a]pyrene→parent ×2
- molar mass: no plausible PubChem entry for '7,8,9,10-tetraol' ('7,8,9,10-tetraol') — left in mass units
- molar mass: no plausible PubChem entry for '3-phenol' ('benzo[a]pyrene-3-phenol') — left in mass units
- molar mass: no plausible PubChem entry for '9-phenol' ('benzo[a]pyrene-9-phenol') — left in mass units
- molar mass: no plausible PubChem entry for 'Unknown Metabolite A' ('conjugated benzo[a]pyrene metabolites') — left in mass units
- molar mass: no plausible PubChem entry for 'Unknown Metabolite B' ('benzo[a]pyrene dihydrodiol isomer') — left in mass units
- molar mass: no plausible PubChem entry for 'Unknown Metabolite C' ('benzo[a]pyrene dihydrodiol or quinone') — left in mass units
- molar mass: no plausible PubChem entry for 'Unknown Metabolite D' ('benzo[a]pyrene quinone') — left in mass units
- molar mass: no plausible PubChem entry for 'Unknown Metabolite E' ('benzo[a]pyrene quinone') — left in mass units
- molar mass: none found for '7,8,9,10-tetraol' — its concentrations stay mass-only
- molar mass: none found for '3-phenol' — its concentrations stay mass-only
- molar mass: none found for '9-phenol' — its concentrations stay mass-only
- molar mass: none found for 'Unknown Metabolite A' — its concentrations stay mass-only
- molar mass: none found for 'Unknown Metabolite B' — its concentrations stay mass-only
- molar mass: none found for 'Unknown Metabolite C' — its concentrations stay mass-only
- molar mass: none found for 'Unknown Metabolite D' — its concentrations stay mass-only
- molar mass: none found for 'Unknown Metabolite E' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Vermillion_2023_table_5: ragged_grid
- table Vermillion_2023_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (153 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q310 | pass | [time] |  | ['Vermillion_2023_table_5:row2:col1', 'Vermillion_2023_table_5:row2:col2', 'Vermillion_2023_table_5:row2:col3', 'Vermillion_2023_table_5:row2:col4', 'Vermillion_2023_table_5:row2:col5', 'Vermillion_2023_table_5:row6:col1', 'Vermillion_2023_table_5:row6:col2', 'Vermillion_2023_table_5:row6:col3', 'Vermillion_2023_table_5:row6:col4', 'Vermillion_2023_table_5:row6:col5', 'Vermillion_2023_table_5:row10:col1', 'Vermillion_2023_table_5:row10:col2', 'Vermillion_2023_table_5:row10:col3', 'Vermillion_2023_table_5:row10:col4', 'Vermillion_2023_table_5:row10:col5', 'Vermillion_2023_table_5:row14:col1', 'Vermillion_2023_table_5:row14:col2', 'Vermillion_2023_table_5:row14:col3', 'Vermillion_2023_table_5:row14:col4', 'Vermillion_2023_table_5:row14:col5', 'Vermillion_2023_table_5:row18:col1', 'Vermillion_2023_table_5:row18:col2', 'Vermillion_2023_table_5:row18:col3', 'Vermillion_2023_table_5:row18:col4', 'Vermillion_2023_table_5:row18:col5', 'Vermillion_2023_table_5:row22:col1', 'Vermillion_2023_table_5:row22:col2', 'Vermillion_2023_table_5:row22:col3', 'Vermillion_2023_table_5:row22:col4', 'Vermillion_2023_table_5:row22:col5', 'Vermillion_2023_table_5:row26:col1', 'Vermillion_2023_table_5:row26:col2', 'Vermillion_2023_table_5:row26:col3', 'Vermillion_2023_table_5:row26:col4', 'Vermillion_2023_table_5:row26:col5', 'Vermillion_2023_table_5:row30:col1', 'Vermillion_2023_table_5:row30:col2', 'Vermillion_2023_table_5:row30:col3', 'Vermillion_2023_table_5:row30:col4', 'Vermillion_2023_table_5:row30:col5', 'Vermillion_2023_table_5:row40:col1', 'Vermillion_2023_table_5:row40:col2', 'Vermillion_2023_table_5:row40:col3', 'Vermillion_2023_table_5:row40:col4', 'Vermillion_2023_table_5:row40:col5'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Benzo[a]pyrene) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 3.69 | 0.9971 |  | unresolved concentration unit (exp 'fg/mL', sim 'kg/m3') |
| T1_cmax | reference | skipped | 5 | 0.9971 |  | unresolved concentration unit (exp '-fold', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 0.9971 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.9971 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.9971 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.9971 |  | non-numeric value |
| T1_t_half_terminal | reference | pass | 3.69 | 3.69 | 1 | h→SI vs simulated h |
| T1_tmax | reference | skipped | 9 | 0.0481 |  | unresolved time unit '-fold' |
| T1_tmax | reference | skipped |  | 0.0481 |  | non-numeric value |
| T1_tmax | reference | skipped |  | 0.0481 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference/Benzoapyrene_Vermillion2023_reference_modelica.zip" download>Benzoapyrene_Vermillion2023_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference/Benzoapyrene_Vermillion2023_reference_fmi.zip" download>Benzoapyrene_Vermillion2023_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference/Benzoapyrene_Vermillion2023_reference_matlab.zip" download>Benzoapyrene_Vermillion2023_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference/Benzoapyrene_Vermillion2023_reference_sbml.zip" download>Benzoapyrene_Vermillion2023_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference/Benzoapyrene_Vermillion2023_reference_cellml.zip" download>Benzoapyrene_Vermillion2023_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2523 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 1.328e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Vermillion Maier ML, Siddens LK, Pennington JM, Uesugi SL, Tilton SC, Vertel EA et al. Benzo[a]pyrene toxicokinetics in humans following dietary supplementation with 3,3'-diindolylmethane (DIM) or Brussels sprouts. Toxicology and applied pharmacology 460:116377 (2023). [doi:10.1016/j.taap.2023.116377](https://doi.org/10.1016/j.taap.2023.116377)

**This record:** Pharmacolibrary, model `Benzoapyrene_Vermillion2023_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference>

```bibtex
@misc{pharmacolibrary_BenzoapyreneVermillion2023reference,
  title  = {{Pharmacolibrary model Benzoapyrene_Vermillion2023_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference},
  note   = {Parameters from doi:10.1016/j.taap.2023.116377},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference/Benzoapyrene_Vermillion2023_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference/Benzoapyrene_Vermillion2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Benzoapyrene_Vermillion2023_reference_params.json` · controls `Benzoapyrene_Vermillion2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzoapyrene%5D%20Benzoapyrene_Vermillion2023_reference&body=Drug%3A%20benzoapyrene%0ARecord%3A%20Benzoapyrene_Vermillion2023_reference%0APaper%3A%20Vermillion_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:35 UTC</sub>
