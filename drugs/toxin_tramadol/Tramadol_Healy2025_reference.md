<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Tramadol&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/&quot;},{&quot;label&quot;:&quot;Healy_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bressolle2009_reference&quot;,&quot;label&quot;:&quot;Bressolle_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Bressolle2009_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Nordmeier2021_tramadol_estimate&quot;,&quot;label&quot;:&quot;Nordmeier_2021_tramadol_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tramadol — `Tramadol_Healy2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Tramadol" model-id="Tramadol_Healy2025_reference" status="rejected" stale="false" population="neonatal patients" measured-compound="Tramadol" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Healy P, Allegaert K, Della Pasqua O. Evaluation of the effect of CYP2D6 and OCT1 polymorphisms on the pharmacokinetics of tramadol: Implications for clinical safety and dose rationale in paediatric chronic pain. British journal of clinical pharmacology 91(2):283-296 (2025).
  ·  DOI: [10.1111/bcp.16201](https://doi.org/10.1111/bcp.16201)

## Population and dosing

**Population:** neonatal patients · condition chronic pain · age group neonate · n = 46.

**Dosing:** 24.5, 147 mg, iv, multiple.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLPO | CL/F | 25.6 | L/h/70 kg | 10 |
| QP | Q | 111 | L/h/70 kg | 58.3 |
| VP1 | V1 | 0.211 | L |  |
| VP2 | V2 | 102 | L/70 kg | 73.6 |
| CLMO (OCT1‐G1) | CL | 78.7 | L/h/70 kg | 34 |
| QM | Q | 1.98 | L/h |  |
| VM1 | V1 | 1.45 | L |  |
| VM2 | V2 | 101 | L/70 kg | 101 |
| CLPM (CYP1) | CLfm | 0.628 | L/h | 42 |
| theta_q22_cyp2d6 | theta_q22_cyp2d6 | 36.3 |  | 7.8 |
| theta_q370_cyp2d6 | theta_q370_cyp2d6 | 11.4 |  | 35 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLPO | `Q27` · CL/F | 25.6 | L/h/70 kg | 7.111e-06 | m3/s | l/(h·70kg) | 10 | exact (1) | bcp16201-tbl-0005:row4:col2 |
| QP | `Q30` · Q | 111 | L/h/70 kg | 3.083e-05 | m3/s | l/(h·70kg) | 58.3 | exact (1) | bcp16201-tbl-0005:row5:col2 |
| VP1 | `Q63` · V1 | 0.211 | L | 0.000211 | m3 | L |  | exact (1) | bcp16201-tbl-0005:row6:col2, bcp16201-tbl-0005:row24:col2 |
| VP2 | `Q64` · V2 | 102 | L/70 kg | 0.102 | m3 | l/70kg | 73.6 | exact (1) | bcp16201-tbl-0005:row7:col2 |
| CLMO (OCT1‐G1) | `Q22` · CL | 78.7 | L/h/70 kg | 2.186e-05 | m3/s | l/(h·70kg) | 34 | exact (1) | bcp16201-tbl-0005:row9:col2 |
| QM | `Q30` · Q | 1.98 | L/h | 5.5e-07 | m3/s | L/h |  | exact (1) | bcp16201-tbl-0005:row11:col2, bcp16201-tbl-0005:row29:col2 |
| VM1 | `Q63` · V1 | 1.45 | L | 0.00145 | m3 | L |  | exact (1) | bcp16201-tbl-0005:row12:col2, bcp16201-tbl-0005:row30:col2 |
| VM2 | `Q64` · V2 | 101 | L/70 kg | 0.101 | m3 | l/70kg | 101 | exact (1) | bcp16201-tbl-0005:row13:col2 |
| CLPM (CYP1) | `Q370` · CLfm | 0.628 | L/h | 1.744e-07 | m3/s | L/h | 42 | exact (1) | bcp16201-tbl-0005:row26:col2 |
| theta_q22_cyp2d6 | `Q900` · theta_q22_cyp2d6 | 36.3 |  |  |  |  | 7.8 |  | bcp16201-tbl-0005:row2:col2 |
| theta_q370_cyp2d6 | `Q900` · theta_q370_cyp2d6 | 11.4 |  |  |  |  | 35 |  | bcp16201-tbl-0005:row15:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- compound tags: 2 row(s) → O-desmethyltramadol (m_index 2)
- table section residual_error: 'Proportional error (tramadol)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (tramadol)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error (M1)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (M1)' routed out of structural estimates ('Residual variability')
- table representations disagree for 'CLPP (CYP2D6‐G2)'; source reconciliation required
- table representations disagree for 'CLPO'; source reconciliation required
- table representations disagree for 'QP'; source reconciliation required
- table representations disagree for 'VP1'; source reconciliation required
- table representations disagree for 'VP2'; source reconciliation required
- table representations disagree for 'CLMO (OCT1‐G1)'; source reconciliation required
- table representations disagree for 'QM'; source reconciliation required
- table representations disagree for 'VM1'; source reconciliation required
- table representations disagree for 'VM2'; source reconciliation required
- table representations disagree for 'CLPM (CYP2D6‐G2)'; source reconciliation required
- table representations disagree for 'TM50 CLPO'; source reconciliation required
- table representations disagree for 'Hill coefficient CLPO'; source reconciliation required
- table representations disagree for 'TM50 CLPM'; source reconciliation required
- table representations disagree for 'Hill coefficient CLPM'; source reconciliation required
- table representations disagree for 'TM50 CLMO'; source reconciliation required
- table representations disagree for 'Hill coefficient CLMO'; source reconciliation required
- table representations disagree for 'CLPO (CYP1)'; source reconciliation required
- table representations disagree for 'CLPM (CYP1)'; source reconciliation required
- table representations disagree for 'CLPM (CYP2)'; source reconciliation required
- table representations disagree for 'CLPM (CYP3)'; source reconciliation required
- unit_dimension_unknown: '‐' (V1)
- unit_dimension_unknown: '‐' (Q)
- unit_dimension_unknown: 'PMA' (CL/F)
- dropped duplicate Q27 ('TM50 CLPO', value '39.1') — already have one for this compound
- dropped PD-category row 'Hill coefficient CLPO' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row18:col2'])
- relinked 'TM50 CLPM' Q370 → Q22 for O-desmethyltramadol: a metabolite's own clearance is its elimination, not its formation
- unit_dimension_unknown: 'PMA' (CL)
- dropped duplicate Q22 ('TM50 CLPM', value '39.8') — already have one for this compound
- dropped PD-category row 'Hill coefficient CLPM' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row20:col2'])
- dropped unlinked row (NIL): 'TM50 CLMO' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row21:col2'])
- dropped PD-category row 'Hill coefficient CLMO' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row22:col2'])
- unit_dimension_unknown: '‐' (CL/F)
- dropped duplicate Q27 ('CLPO (CYP1)', value '0.161') — already have one for this compound
- unit_dimension_unknown: '‐' (CLfm)
- dropped duplicate Q370 ('CLPM (CYP2)', value '0.0915') — already have one for this compound
- dropped duplicate Q370 ('CLPM (CYP3)', value '0.00878') — already have one for this compound
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q370 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'VP1' → L (from the popPK convention: 'Parameter VP1 represents the volume of the peripheral compartment for tramadol. The text states that volumes are standar')
- implicit units: 'QM' → L/h (from the popPK convention: 'Parameter QM is intercompartmental clearance. Conventionally expressed in L/h. The magnitude 1.98 is consistent with a c')
- implicit units: 'VM1' → L (from the popPK convention: 'Parameter VM1 is the central volume of distribution for the metabolite M1. Although the text mentions a fixed value of 7')
- implicit units: 'CLPM (CYP1)' → L/h (from the popPK convention: 'Parameter CLPM is the formation clearance of M1. Clearance parameters are conventionally expressed in L/h. The magnitude')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Tramadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- pharmacogenetic covariate 'theta_q22_cyp2d6' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q370_cyp2d6' (cyp2d6) — PGx domain
- status held at "Needs review" — not promoted
- row roles: per-genotype parameters — typical value from the reference group: CLPP (CYP2D6‐G2), CLMO (OCT1‐G1), CLPM (CYP2D6‐G2)
- row roles (LLM): model_class=compartmental; 31/31 row label(s) assigned, 13 linked by role; re-tagged parent→O-desmethyltramadol ×13

**Extraction notes:**
- table bcp16201-tbl-0005: missing_unit_binding
- table bcp16201-tbl-0005: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcp16201-tbl-0005:row9:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['bcp16201-tbl-0005:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['bcp16201-tbl-0005:row5:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['bcp16201-tbl-0005:row11:col2', 'bcp16201-tbl-0005:row29:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['bcp16201-tbl-0005:row26:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['bcp16201-tbl-0005:row6:col2', 'bcp16201-tbl-0005:row24:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['bcp16201-tbl-0005:row12:col2', 'bcp16201-tbl-0005:row30:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['bcp16201-tbl-0005:row7:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['bcp16201-tbl-0005:row13:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 78.7 L/h | ['bcp16201-tbl-0005:row9:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 25.6 L/h | ['bcp16201-tbl-0005:row4:col2'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.211 L | ['bcp16201-tbl-0005:row6:col2', 'bcp16201-tbl-0005:row24:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.45 L | ['bcp16201-tbl-0005:row12:col2', 'bcp16201-tbl-0005:row30:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 102 L | ['bcp16201-tbl-0005:row7:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 101 L | ['bcp16201-tbl-0005:row13:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_Healy2025_reference&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_Healy2025_reference%0APaper%3A%20Healy_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tramadol/Tramadol_Healy2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 04:52 UTC</sub>
