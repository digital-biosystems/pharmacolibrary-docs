<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ibuprofen&quot;,&quot;href&quot;:&quot;drugs/toxin_ibuprofen/&quot;},{&quot;label&quot;:&quot;Reig-L\u00f3pez_2024 \u00b7 r_ibuprofen_value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibuprofen_Chin2014_alkanones&quot;,&quot;label&quot;:&quot;Chin_2014_alkanones&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibuprofen/Ibuprofen_Chin2014_alkanones.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Chin2014_arylpropionic_acid&quot;,&quot;label&quot;:&quot;Chin_2014_arylpropionic_acid&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibuprofen/Ibuprofen_Chin2014_arylpropionic_acid.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Chin2014_enolic_acids&quot;,&quot;label&quot;:&quot;Chin_2014_enolic_acids&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibuprofen/Ibuprofen_Chin2014_enolic_acids.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Chin2014_heteroaryl_acetic_acid&quot;,&quot;label&quot;:&quot;Chin_2014_heteroaryl_acetic_acid&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibuprofen/Ibuprofen_Chin2014_heteroaryl_acetic_acid.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Chin2014_indole_acetic_acid&quot;,&quot;label&quot;:&quot;Chin_2014_indole_acetic_acid&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibuprofen/Ibuprofen_Chin2014_indole_acetic_acid.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Yang2019_reference&quot;,&quot;label&quot;:&quot;Yang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibuprofen/Ibuprofen_Yang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Zhou2014_reference&quot;,&quot;label&quot;:&quot;Zhou_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibuprofen/Ibuprofen_Zhou2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ibuprofen — `Ibuprofen_ReigLpez2024_r_ibuprofen_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record lacks kinetic parameters, contains an unreachable S-Ibuprofen compartment, and reports a unit for racemase clearance that cannot be converted to SI units.

<div class="pk-model-meta" hidden drug="Ibuprofen" model-id="Ibuprofen_ReigLpez2024_r_ibuprofen_value" status="rejected" stale="false" population="healthy volunteers" measured-compound="Ibuprofen" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Reig-López J, Cuquerella-Gilabert M, Bandín-Vilar E, Merino-Sanjuán M, Mangas-Sanjuán V, García-Arieta A. Bioequivalence risk assessment of oral formulations containing racemic ibuprofen through a chiral physiologically based pharmacokinetic model of ibuprofen enantiomers. European journal of pharmaceutics and biopharmaceutics : official journal of Arbeitsgemeinschaft fur Pharmazeutische Verfahrenstechnik e.V 199:114293 (2024).
  ·  DOI: [10.1016/j.ejpb.2024.114293](https://doi.org/10.1016/j.ejpb.2024.114293)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 11 Phase I clinical trials (subject count not explicitly summed, implied from 54 scenarios).

**Dosing:** 100, 400, 600 mg, other, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 10 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW (g/mol) | MW | 206.29 | g/mol |
| B/P | Kp | 0.55 |  |
| ka (h⁻¹) | kabs | 2.975 | h⁻¹ |
| Fu,GUT | fu_tissue | 0.61117 |  |
| Racemase CLint (µL/min/mg protein) | CLint | 87.25 | µL/min/mg protein |
| CLR (L/h) | CLR | 0.05 | L/h |
| theta_q66_cyp2c8 | theta_q66_cyp2c8 | 9.4 |  |
| theta_q1_cyp2c8 | theta_q1_cyp2c8 | 282 |  |
| theta_q66_cyp2c9 | theta_q66_cyp2c9 | 17 |  |
| theta_q1_cyp2c9 | theta_q1_cyp2c9 | 45 |  |
| theta_q66_cyp2c9 | theta_q66_cyp2c9 | 29 |  |
| theta_q1_cyp2c9 | theta_q1_cyp2c9 | 45 |  |
| theta_clint_ugt1a3 | theta_clint_ugt1a3 | 0.4 |  |
| theta_clint_ugt1a9 | theta_clint_ugt1a9 | 2.2 |  |
| theta_clint_ugt2b4 | theta_clint_ugt2b4 | 0.3 |  |
| theta_clint_ugt2b7 | theta_clint_ugt2b7 | 8.9 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record lacks kinetic parameters, contains an unreachable S-Ibuprofen compartment, and reports a unit for racemase clearance that cannot be converted to SI units.**

The paper is an exposure study lacking fitted kinetic quantities such as rate constants, volumes, or clearances. The model structure leaves the S-Ibuprofen compartment unreachable from the dose site. Additionally, the racemase intrinsic clearance value of 87.25 µL/min/mg protein uses a unit that could not be converted to standard SI units. Extracted — R-Ibuprofen: MW 206 g/mol, Kp 0.55, kabs 2.98 h⁻¹, fu_tissue 0.611, CLint 87.2 µL/min/mg protein, CLR 0.05 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MW (g/mol) | `Q374` · MW | 206.29 | g/mol | 0.2063 |  | g/(m·ol) | exact (1) | Reig-López_2024_table_2:row1:col1 |
| B/P | `Q410` · Kp | 0.55 |  |  |  |  | llm (0.6) | Reig-López_2024_table_2:row6:col1 |
| ka (h⁻¹) | `Q49` · kabs | 2.975 | h⁻¹ | 0.0008264 | 1/s | 1/h | exact (1) | Reig-López_2024_table_2:row12:col1 |
| Fu,GUT | `Q413` · fu_tissue | 0.61117 |  |  |  |  | llm_corrected (0.6) | Reig-López_2024_table_2:row13:col1 |
| Racemase CLint (µL/min/mg protein) | `Q3` · CLint | 87.25 | µL/min/mg protein |  |  | µl/(min·mg·protein) | llm_confirmed (0.6) | Reig-López_2024_table_2:row28:col1 |
| CLR (L/h) | `Q26` · CLR | 0.05 | L/h | 1.389e-08 | m3/s | l/h | exact (1) | Reig-López_2024_table_2:row40:col1 |
| theta_q66_cyp2c8 | `Q900` · theta_q66_cyp2c8 | 9.4 |  |  |  |  |  | Reig-López_2024_table_2:row29:col1 |
| theta_q1_cyp2c8 | `Q900` · theta_q1_cyp2c8 | 282 |  |  |  |  |  | Reig-López_2024_table_2:row30:col1 |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 17 |  |  |  |  |  | Reig-López_2024_table_2:row31:col1 |
| theta_q1_cyp2c9 | `Q900` · theta_q1_cyp2c9 | 45 |  |  |  |  |  | Reig-López_2024_table_2:row32:col1 |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 29 |  |  |  |  |  | Reig-López_2024_table_2:row33:col1 |
| theta_q1_cyp2c9 | `Q900` · theta_q1_cyp2c9 | 45 |  |  |  |  |  | Reig-López_2024_table_2:row34:col1 |
| theta_clint_ugt1a3 | `Q900` · theta_clint_ugt1a3 | 0.4 |  |  |  |  |  | Reig-López_2024_table_2:row35:col1 |
| theta_clint_ugt1a9 | `Q900` · theta_clint_ugt1a9 | 2.2 |  |  |  |  |  | Reig-López_2024_table_2:row36:col1 |
| theta_clint_ugt2b4 | `Q900` · theta_clint_ugt2b4 | 0.3 |  |  |  |  |  | Reig-López_2024_table_2:row37:col1 |
| theta_clint_ugt2b7 | `Q900` · theta_clint_ugt2b7 | 8.9 |  |  |  |  |  | Reig-López_2024_table_2:row38:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'logP' — extend the ontology if this is a real PK parameter (source ['Reig-López_2024_table_2:row2:col1'])
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['Reig-López_2024_table_2:row4:col1'])
- dropped unlinked row (NIL): 'S0 (mg/mL)' — extend the ontology if this is a real PK parameter (source ['Reig-López_2024_table_2:row5:col1'])
- dropped unlinked row (NIL): 'Papp 6.5:7.4 (Caco-2) (10⁻⁶ cm/s)' — extend the ontology if this is a real PK parameter (source ['Reig-López_2024_table_2:row10:col1'])
- dropped unlinked row (NIL): 'Peff,man (10⁻⁴ cm/s)' — extend the ontology if this is a real PK parameter (source ['Reig-López_2024_table_2:row11:col1'])
- dropped unlinked row (NIL): 'ARS Ileum I' — extend the ontology if this is a real PK parameter (source ['Reig-López_2024_table_2:row17:col1'])
- dropped unlinked row (NIL): 'ARS Ileum II' — extend the ontology if this is a real PK parameter (source ['Reig-López_2024_table_2:row18:col1'])
- dropped unlinked row (NIL): 'ARS Ileum III' — extend the ontology if this is a real PK parameter (source ['Reig-López_2024_table_2:row19:col1'])
- dropped unlinked row (NIL): 'ARS Ileum IV' — extend the ontology if this is a real PK parameter (source ['Reig-López_2024_table_2:row20:col1'])
- dropped unlinked row (NIL): 'ARS Colon' — extend the ontology if this is a real PK parameter (source ['Reig-López_2024_table_2:row21:col1'])
- unit_dimension_unknown: '600 mg' (Kp)
- dropped duplicate Q410 ('Kp scalar', value None) — already have one for this compound
- unit_dimension_unknown: 'µL/min/mg protein' (CLint)
- dropped duplicate Q3 ('HLM additional CLint (µL/min/mg protein)', value '70') — already have one for this compound
- dropped unlinked row (NIL): 'Salt limited solubility factor' — extend the ontology if this is a real PK parameter (source ['Reig-López_2024_table_2:row44:col1'])
- covariate effect for Q66 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Racemase CLint (µL/min/mg protein)' — the LLM proposed 'μL/min/mg protein', whose dimension does not fit Q3; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ibuprofen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- pharmacogenetic covariate 'theta_q66_cyp2c8' (cyp2c8) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp2c8' (cyp2c8) — PGx domain
- pharmacogenetic covariate 'theta_q66_cyp2c9' (cyp2c9) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp2c9' (cyp2c9) — PGx domain
- pharmacogenetic covariate 'theta_clint_ugt1a3' (ugt1a3) — PGx domain
- pharmacogenetic covariate 'theta_clint_ugt1a9' (ugt1a9) — PGx domain
- pharmacogenetic covariate 'theta_clint_ugt2b4' (ugt2b4) — PGx domain
- pharmacogenetic covariate 'theta_clint_ugt2b7' (ugt2b7) — PGx domain
- status held at "Needs review" — not promoted
- population split: 'r-ibuprofen value' subgroup of Reig-López_2024 (paper reports 2 populations: r-ibuprofen value, s-ibuprofen value)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Reig-López_2024_table_2: unbound_uncertainty
- table Reig-López_2024_table_2: unparsed_numeric_cell
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Reig-López_2024_table_2:row40:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Reig-López_2024_table_2:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Reig-López_2024_table_2:row12:col1'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [mass] / [time] | µL/min/mg protein | ['Reig-López_2024_table_2:row28:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unidirectional inversion'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bibuprofen%5D%20Ibuprofen_ReigLpez2024_r_ibuprofen_value&body=Drug%3A%20ibuprofen%0ARecord%3A%20Ibuprofen_ReigLpez2024_r_ibuprofen_value%0APaper%3A%20Reig-L%C3%B3pez_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ibuprofen/Ibuprofen_ReigLpez2024_r_ibuprofen_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 13:17 UTC</sub>
