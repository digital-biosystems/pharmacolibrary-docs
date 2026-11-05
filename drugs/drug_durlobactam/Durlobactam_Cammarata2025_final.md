<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Durlobactam&quot;,&quot;href&quot;:&quot;drugs/drug_durlobactam/&quot;},{&quot;label&quot;:&quot;Cammarata_2025 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durlobactam_Onita2026_reference&quot;,&quot;label&quot;:&quot;Onita_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durlobactam/Durlobactam_Onita2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Durlobactam — `Durlobactam_Cammarata2025_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Durlobactam record rejected because the HABP covariate produced a negative clearance ratio of -0.424, which is physiologically implausible.

<div class="pk-model-meta" hidden drug="Durlobactam" model-id="Durlobactam_Cammarata2025_final" status="rejected" stale="false" population="adults" measured-compound="durlobactam" parameterization="apparent" topology="3C"></div>

## Citation
Cammarata AP, Safir MC, Trang M, Larson KB, O'Donnell JP, Bhavnani SM et al. Population pharmacokinetic analyses for sulbactam-durlobactam using Phase 1, 2, and 3 data. Antimicrobial agents and chemotherapy 69(1):e0048524 (2025).
  ·  DOI: [10.1128/aac.00485-24](https://doi.org/10.1128/aac.00485-24)

## Population and dosing

**Population:** adults · condition infection · age group adult · n = ?432.

**Dosing:** 1000, 1500 mg, iv, multiple, every 6 h.

**Dosed compound ≠ measured compound:** dosed sulbactam-durlobactam, measured durlobactam.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL (L/h) | CL | 9.33 | L/h | 3.24 |
| Vc (L) | V1 | 12.5 | L | 2.93 |
| Q (L/h) | Q | 4.43 | L/h | 3.77 |
| Vp (L) | V2 | 5.83 | L | 3.44 |
| FE (%) | fe | 0.479 | % |  |
| V1INFTYPN3 (cUTI) | V | 0.343 | L | 62.3 |
| BCLCRNLT30 | CLR | -0.58 |  | 8.15 |
| CLINFTYPN1 (HABP) | equation variable | -0.424 | HABP | 19.4 |
| V3INFTYPN2 (VABP) | V3/F | 1.43 | L | 19.5 |
| V3INFTYPN4 (bacteremia) | V3 | 1.85 | L | 44.7 |
| theta_clr_weight_power | theta_clr_weight_power | 0.875 |  | 12 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Durlobactam record rejected because the HABP covariate produced a negative clearance ratio of -0.424, which is physiologically implausible.**

The covariate effect for high arterial blood pressure (HABP) assigned a value of -0.424 to the drug interaction parameter, implying a negative contribution to total clearance. This negative value contradicts the physical constraint that elimination rates must be non-negative, indicating an error in the estimated covariate coefficient or its application in the model structure. Extracted — durlobactam: CL 9.33 L/h, V1 12.5 L, Q 4.43 L/h, V2 5.83 L, fe 0.479 %, Vnorm 3.32 bacteremia, V 0.521 L/kg, CL_ratio -0.424 HABP, … (+2).

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 9.33 | L/h | 2.592e-06 | m3/s | l/h | 3.24 | exact (1) | T1:row3:col1, T1:row26:col1 |
| Vc (L) | `Q63` · V1 | 12.5 | L | 0.0125 | m3 | l | 2.93 | exact (1) | T1:row5:col1, T1:row28:col1 |
| Q (L/h) | `Q30` · Q | 4.43 | L/h | 1.231e-06 | m3/s | l/h | 3.77 | exact (1) | T1:row6:col1, T1:row29:col1 |
| Vp (L) | `Q64` · V2 | 5.83 | L | 0.00583 | m3 | l | 3.44 | exact (1) | T1:row7:col1, T1:row30:col1 |
| FE (%) | `Q44` · fe | 0.479 | % | 0.00479 |  | % |  | exact (1) | T1:row8:col1, T1:row31:col1 |
| V1INFTYPN3 (cUTI) | `Q61` · V | 0.343 | L | 0.000343 | m3 | L | 62.3 | llm (0.6) | T1:row12:col1 |
| BCLCRNLT30 | `Q26` · CLR | -0.58 |  |  |  |  | 8.15 | llm (0.6) | T1:row16:col1, T1:row44:col1 |
| CLINFTYPN1 (HABP) | `Q900` · equation variable | -0.424 | HABP |  |  | h·abp | 19.4 | llm (0.6) | T1:row32:col1 |
| V3INFTYPN2 (VABP) | `Q78` · V3/F | 1.43 | L | 0.00143 | m3 | L | 19.5 | llm (0.6) | T1:row39:col1 |
| V3INFTYPN4 (bacteremia) | `Q77` · V3 | 1.85 | L | 0.00185 | m3 | L | 44.7 | llm (0.6) | T1:row41:col1 |
| theta_clr_weight_power | `Q900` · theta_clr_weight_power | 0.875 |  |  |  |  | 12 |  | T1:row4:col1, T1:row27:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'CL (L/h)'; source reconciliation required
- table representations disagree for 'CLR, CLcr power'; source reconciliation required
- table representations disagree for 'Vc (L)'; source reconciliation required
- table representations disagree for 'Q (L/h)'; source reconciliation required
- table representations disagree for 'Vp (L)'; source reconciliation required
- table representations disagree for 'FE (%)'; source reconciliation required
- table representations disagree for 'CLEASIAFL1'; source reconciliation required
- table representations disagree for 'CLWTKG1'; source reconciliation required
- table representations disagree for 'V1INFTYPN1&2 (HABP and VABP)'; source reconciliation required
- table representations disagree for 'V1INFTYPN3 (cUTI)'; source reconciliation required
- table representations disagree for 'V1INFTYPN4 (bacteremia)'; source reconciliation required
- table representations disagree for 'V1WTKG1'; source reconciliation required
- table representations disagree for 'V1EASIAFL1'; source reconciliation required
- table representations disagree for 'BCLCRNLT30'; source reconciliation required
- table representations disagree for 'ω2CL'; source reconciliation required
- table representations disagree for 'ω2Vc'; source reconciliation required
- table representations disagree for 'ω2Vp'; source reconciliation required
- table representations disagree for 'Covariance (ω2CL, ω2Vc)'; source reconciliation required
- table representations disagree for 'σ2plasma, Proportional Phase 1'; source reconciliation required
- table representations disagree for 'σ2plasma, Additive Phase 1'; source reconciliation required
- table representations disagree for 'σ2plasma, Proportional Phase 2'; source reconciliation required
- table representations disagree for 'σ2plasma, Proportional Phase 3'; source reconciliation required
- table representations disagree for 'CLINFTYPN1 (HABP)'; source reconciliation required
- table representations disagree for 'CLINFTYPN2 (VABP)'; source reconciliation required
- table representations disagree for 'CLINFTYPN3 (cUTI)'; source reconciliation required
- table representations disagree for 'CLINFTYPN4 (bacteremia)'; source reconciliation required
- table representations disagree for 'CLINFTYPN5 (AP)'; source reconciliation required
- table representations disagree for 'V3INFTYPN1 (HABP)'; source reconciliation required
- table representations disagree for 'V3INFTYPN2 (VABP)'; source reconciliation required
- table representations disagree for 'V3INFTYPN3 (cUTI)'; source reconciliation required
- table representations disagree for 'V3INFTYPN4 (bacteremia)'; source reconciliation required
- table representations disagree for 'V3INFTYPN5 (AP)'; source reconciliation required
- table representations disagree for 'V3WTKG1'; source reconciliation required
- table representations disagree for 'σ2plasma, Proportional'; source reconciliation required
- table representations disagree for 'σ2plasma, Additive'; source reconciliation required
- dropped unlinked row (NIL): 'CLEASIAFL1' — extend the ontology if this is a real PK parameter (source ['T1:row9:col1'])
- dropped unlinked row (NIL): 'CLWTKG1' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1', 'T1:row37:col1'])
- dropped unlinked row (NIL): 'V1INFTYPN1&2 (HABP and VABP)' — extend the ontology if this is a real PK parameter (source ['T1:row11:col1'])
- unit_dimension_unknown: 'cUTI' (V)
- dropped unlinked row (NIL): 'V1INFTYPN4 (bacteremia)' — extend the ontology if this is a real PK parameter (source ['T1:row13:col1'])
- dropped unlinked row (NIL): 'V1WTKG1' — extend the ontology if this is a real PK parameter (source ['T1:row14:col1'])
- dropped duplicate Q63 ('V1EASIAFL1', value '-0.263') — already have one for this compound
- unit_dimension_unknown: 'HABP' (equation variable)
- dropped unlinked row (NIL): 'CLINFTYPN2 (VABP)' — extend the ontology if this is a real PK parameter (source ['T1:row33:col1'])
- dropped unlinked row (NIL): 'CLINFTYPN3 (cUTI)' — extend the ontology if this is a real PK parameter (source ['T1:row34:col1'])
- dropped unlinked row (NIL): 'CLINFTYPN4 (bacteremia)' — extend the ontology if this is a real PK parameter (source ['T1:row35:col1'])
- dropped unlinked row (NIL): 'CLINFTYPN5 (AP)' — extend the ontology if this is a real PK parameter (source ['T1:row36:col1'])
- dropped unlinked row (NIL): 'V3INFTYPN1 (HABP)' — extend the ontology if this is a real PK parameter (source ['T1:row38:col1'])
- unit_dimension_unknown: 'VABP' (V3/F)
- dropped unlinked row (NIL): 'V3INFTYPN3 (cUTI)' — extend the ontology if this is a real PK parameter (source ['T1:row40:col1'])
- unit_dimension_unknown: 'bacteremia' (V3)
- unit_dimension_unknown: 'AP' (V3/F)
- dropped duplicate Q78 ('V3INFTYPN5 (AP)', value '-0.704') — already have one for this compound
- dropped duplicate Q77 ('V3WTKG1', value '0.831') — already have one for this compound
- implicit units: 'V1INFTYPN3 (cUTI)' → L (from the popPK convention: 'Parameter V1INFTYPN3 represents a volume of distribution (V). Standard units for population PK volumes are liters (L). T')
- implicit units: 'BCLCRNLT30' — the LLM proposed '1/h', whose dimension does not fit Q26; left unset
- implicit units: 'V3INFTYPN2 (VABP)' → L (from the popPK convention: 'Parameter V3INFTYPN2 (VABP) represents the volume of distribution of the second peripheral compartment (V3). Standard un')
- implicit units: 'V3INFTYPN4 (bacteremia)' → L (from the popPK convention: 'Parameter V3INFTYPN4 (bacteremia) represents the volume of distribution of the second peripheral compartment (V3). Stand')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=durlobactam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- model-stage split: 'final model / estimate' is the final model of Cammarata_2025 (paper reports 2 stages: final model / estimate, final model / shrink.); same population, different model-building step

**Extraction notes:**
- table T1: ambiguous_uncertainty_binding
- table T1: unbound_uncertainty
- table T1: representations disagree; selected evidence retained, not merged
- table Cammarata_2025_table_2: no_numeric_grid
- table Cammarata_2025_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (0 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q26 | fail |  | -0.58 |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T1:row3:col1', 'T1:row26:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T1:row6:col1', 'T1:row29:col1'] |
| C5_dimension_Q44 | pass | dimensionless |  | ['T1:row8:col1', 'T1:row31:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T1:row12:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T1:row5:col1', 'T1:row28:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T1:row7:col1', 'T1:row30:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T1:row41:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['T1:row39:col1'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] |  | ['T1:row16:col1', 'T1:row44:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.33 L/h | ['T1:row3:col1', 'T1:row26:col1'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.343 L | ['T1:row12:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 12.5 L | ['T1:row5:col1', 'T1:row28:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.83 L | ['T1:row7:col1', 'T1:row30:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdurlobactam%5D%20Durlobactam_Cammarata2025_final&body=Drug%3A%20durlobactam%0ARecord%3A%20Durlobactam_Cammarata2025_final%0APaper%3A%20Cammarata_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_durlobactam/Durlobactam_Cammarata2025_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-22 10:31 UTC</sub>
