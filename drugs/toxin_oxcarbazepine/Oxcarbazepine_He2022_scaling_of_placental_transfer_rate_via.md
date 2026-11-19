<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Oxcarbazepine&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/&quot;},{&quot;label&quot;:&quot;He_2022 \u00b7 scaling_of_placental_transfer_rate_via_physico_chemical&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxcarbazepine_Chen2021v2_reference&quot;,&quot;label&quot;:&quot;Chen_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Chen2021v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Rodrigues2017_reference&quot;,&quot;label&quot;:&quot;Rodrigues_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Sinha2022_final_estimate&quot;,&quot;label&quot;:&quot;Sinha_2022_final_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Sinha2022_final_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Sinha2022_initial_estimate&quot;,&quot;label&quot;:&quot;Sinha_2022_initial_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Sinha2022_initial_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Oxcarbazepine — `Oxcarbazepine_He2022_scaling_of_placental_transfer_rate_via`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q305 unit m ([length]) vs 1 / [time].

<div class="pk-model-meta" hidden drug="Oxcarbazepine" model-id="Oxcarbazepine_He2022_scaling_of_placental_transfer_rate_via" status="rejected" stale="false" population="pregnant and non-pregnant women (healthy adults)" measured-compound="10,11-dihydro-10-hydroxy-carbazepine (MHD)" parameterization="mechanistic" topology="1C"></div>

## Citation
He L, Ke M, Wu W, Chen J, Guo G, Lin R et al. Application of Physiologically Based Pharmacokinetic Modeling to Predict Maternal Pharmacokinetics and Fetal Exposure to Oxcarbazepine. Pharmaceutics 14(11) (2022).
  ·  DOI: [10.3390/pharmaceutics14112367](https://doi.org/10.3390/pharmaceutics14112367)

## Population and dosing

**Population:** pregnant and non-pregnant women (healthy adults) · condition pregnancy / healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed oxcarbazepine, measured 10,11-dihydro-10-hydroxy-carbazepine (MHD).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Kf,m | kfm | 1.0 | m |
| Molecular weight (g/mol) | MW | 254.28 | g/mol |
| Fraction unbound | fu | 0.6 |  |
| CLintAKR1C1 (µL/min/pmol enzyme) | CLint | 0.465 | µL/min/pmol enzyme |
| theta_q66_ugt1a9 | theta_q66_ugt1a9 | 10.8 |  |
| theta_q1_ugt1a9 | theta_q1_ugt1a9 | 150.07 |  |
| theta_clint_ugt1a9 | theta_clint_ugt1a9 | 19.88 |  |
| theta_q66_ugt2b7 | theta_q66_ugt2b7 | 35.32 |  |
| theta_q1_ugt2b7 | theta_q1_ugt2b7 | 3314 |  |
| theta_q51_ugt2b7 | theta_q51_ugt2b7 | 5.66 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q305 unit m ([length]) vs 1 / [time].**

A reported unit could not be converted (kfm and CLint), so that value has no SI equivalent. None of the extracted parameters is oxcarbazepine's own; they describe 10,11-dihydro-10-hydroxy-carbazepine (MHD). Extracted — 10,11-dihydro-10-hydroxy-carbazepine (MHD): kfm 1 m, MW 254 g/mol, fu 0.6, CLint 0.465 µL/min/pmol enzyme.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|
| Kf,m | `Q305` · kfm | 1.0 | m |  | m | llm_confirmed (0.6) | pharmaceutics-14-02367-t007:row4:col2, pharmaceutics-14-02367-t007:row8:col2 |
| Molecular weight (g/mol) | `Q374` · MW | 254.28 | g/mol | 0.2543 | g/(m·ol) | exact (1) | He_2022_table_2:row0:col1, He_2022_table_2:row0:col3 |
| Fraction unbound | `Q46` · fu | 0.6 |  | 0.6 |  | exact (1) | He_2022_table_2:row3:col1, He_2022_table_2:row3:col3 |
| CLintAKR1C1 (µL/min/pmol enzyme) | `Q3` · CLint | 0.465 | µL/min/pmol enzyme |  | µl/(min·pM·enzyme) | llm (0.6) | He_2022_table_2:row10:col1 |
| theta_q66_ugt1a9 | `Q900` · theta_q66_ugt1a9 | 10.8 |  |  |  |  | He_2022_table_2:row14:col3 |
| theta_q1_ugt1a9 | `Q900` · theta_q1_ugt1a9 | 150.07 |  |  |  |  | He_2022_table_2:row15:col3 |
| theta_clint_ugt1a9 | `Q900` · theta_clint_ugt1a9 | 19.88 |  |  |  |  | He_2022_table_2:row16:col3 |
| theta_q66_ugt2b7 | `Q900` · theta_q66_ugt2b7 | 35.32 |  |  |  |  | He_2022_table_2:row17:col3 |
| theta_q1_ugt2b7 | `Q900` · theta_q1_ugt2b7 | 3314 |  |  |  |  | He_2022_table_2:row18:col3 |
| theta_q51_ugt2b7 | `Q900` · theta_q51_ugt2b7 | 5.66 |  |  |  |  | He_2022_table_2:row19:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- transposed table pharmaceutics-14-02367-t007: rows are variants (Ex vivo cotyledon perfusion, Scaling of placental transfer rate via Caco-2cell permeability(according to Zhang et al. [41].), Scaling of placental transfer rate via physico-chemical properties(MoBi default method)), the parameters are the column headers (Kf,m) — read one record per variant
- table representations disagree for 'Kf,m'; source reconciliation required
- unit_dimension_mismatch: 'Kf,m' → Q305 (unit '[length]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Lipophilicity (log units)' — extend the ontology if this is a real PK parameter (source ['He_2022_table_2:row1:col1', 'He_2022_table_2:row1:col3'])
- dropped unlinked row (NIL): 'pKa (acid)' — extend the ontology if this is a real PK parameter (source ['He_2022_table_2:row2:col1'])
- dropped unlinked row (NIL): 'Solubility (pH 7) (mg/mL)' — extend the ontology if this is a real PK parameter (source ['He_2022_table_2:row5:col1'])
- dropped unlinked row (NIL): 'Weibull 50% dissolution time (min)' — extend the ontology if this is a real PK parameter (source ['He_2022_table_2:row6:col1'])
- unit_dimension_unknown: 'µL/min/pmol enzyme' (CLint)
- dropped duplicate Q3 ('CLintAKR1C2 (µL/min/pmol enzyme)', value '0.53') — already have one for this compound
- dropped duplicate Q3 ('CLintAKR1C3 (µL/min/pmol enzyme)', value '0.392') — already have one for this compound
- dropped duplicate Q3 ('CLintAKR1C4 (µL/min/pmol enzyme)', value '0.13') — already have one for this compound
- unit_dimension_mismatch: 'CLint,R (L/min)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLint,R (L/min)', value '0.05') — already have one for this compound
- covariate effect for Q66 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q51 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=10,11-dihydro-10-hydroxy-carbazepine (MHD)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- pharmacogenetic covariate 'theta_q66_ugt1a9' (ugt1a9) — PGx domain
- pharmacogenetic covariate 'theta_q1_ugt1a9' (ugt1a9) — PGx domain
- pharmacogenetic covariate 'theta_clint_ugt1a9' (ugt1a9) — PGx domain
- pharmacogenetic covariate 'theta_q66_ugt2b7' (ugt2b7) — PGx domain
- pharmacogenetic covariate 'theta_q1_ugt2b7' (ugt2b7) — PGx domain
- pharmacogenetic covariate 'theta_q51_ugt2b7' (ugt2b7) — PGx domain
- status held at "Needs review" — not promoted
- estimate-method split: 'Scaling of placental transfer rate via physico-chemical properties(MoBi default method)' is one of 3 estimates of He_2022's substance matrix (Ex vivo cotyledon perfusion, Scaling of placental transfer rate via Caco-2cell permeability(according to Zhang et al. [41].), Scaling of placental transfer rate via physico-chemical properties(MoBi default method)); same population, different estimation method
- review gap-fill skipped: this record measures '10,11-dihydro-10-hydroxy-carbazepine (MHD)', not oxcarbazepine — the review values are the parent's

**Extraction notes:**
- table pharmaceutics-14-02367-t007: representations disagree; selected evidence retained, not merged
- table He_2022_table_2: unbound_uncertainty
- table He_2022_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (25 record(s))
- LLM selected parameter table(s) 2, 7

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q305 | fail | 1 / [time] | m ([length]) | ['pharmaceutics-14-02367-t007:row4:col2', 'pharmaceutics-14-02367-t007:row8:col2'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['He_2022_table_2:row0:col1', 'He_2022_table_2:row0:col3'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [mass] / [time] | µL/min/pmol enzyme | ['He_2022_table_2:row10:col1'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxcarbazepine%5D%20Oxcarbazepine_He2022_scaling_of_placental_transfer_rate_via&body=Drug%3A%20oxcarbazepine%0ARecord%3A%20Oxcarbazepine_He2022_scaling_of_placental_transfer_rate_via%0APaper%3A%20He_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_oxcarbazepine/Oxcarbazepine_He2022_scaling_of_placental_transfer_rate_via%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 12:12 UTC</sub>
