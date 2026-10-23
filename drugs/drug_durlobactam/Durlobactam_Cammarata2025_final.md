<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Durlobactam&quot;,&quot;href&quot;:&quot;drugs/drug_durlobactam/&quot;},{&quot;label&quot;:&quot;Cammarata_2025 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durlobactam_Onita2026_reference&quot;,&quot;label&quot;:&quot;Onita_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durlobactam/Durlobactam_Onita2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Durlobactam — `Durlobactam_Cammarata2025_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Durlobactam record rejected because the HABP covariate produced a negative clearance ratio of -0.424, which is physiologically implausible.

<div class="pk-model-meta" hidden drug="Durlobactam" model-id="Durlobactam_Cammarata2025_final" status="rejected" stale="false" population="adults" measured-compound="durlobactam" parameterization="apparent" topology="general_linear"></div>

## Citation
Cammarata AP, Safir MC, Trang M, Larson KB, O'Donnell JP, Bhavnani SM et al. Population pharmacokinetic analyses for sulbactam-durlobactam using Phase 1, 2, and 3 data. Antimicrobial agents and chemotherapy 69(1):e0048524 (2025).
  ·  DOI: [10.1128/aac.00485-24](https://doi.org/10.1128/aac.00485-24)

## Population and dosing

**Population:** adults · condition infection · age group adult · n = ?432.

**Dosing:** 1000 mg, iv, multiple.

**Dosed compound ≠ measured compound:** dosed sulbactam-durlobactam, measured durlobactam.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 1 covariate effect.  
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
| V1INFTYPN4 (bacteremia) | Vnorm | 3.32 | bacteremia | 53.7 |
| V1WTKG1 | V | 0.521 | L/kg | 27.0 |
| CLINFTYPN1 (HABP) | CL_ratio | -0.424 | HABP | 19.4 |
| CLINFTYPN5 (AP) | equation variable | -0.382 | AP | 28.8 |
| V3INFTYPN1 (HABP) | V3 | 0.836 | HABP | 25.3 |
| V3INFTYPN2 (VABP) | V3/F | 1.43 | VABP | 19.5 |
| theta_q26_weight_power | theta_q26_weight_power | 0.875 |  | 12 |

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
| FE (%) | `Q44` · fe | 0.479 | % |  |  | % |  | exact (1) | T1:row8:col1, T1:row31:col1 |
| V1INFTYPN4 (bacteremia) | `Q352` · Vnorm | 3.32 | bacteremia |  |  | bacteremia | 53.7 | llm (0.6) | T1:row13:col1 |
| V1WTKG1 | `Q61` · V | 0.521 | L/kg | 0.03647 | m3 | L | 27.0 | llm (0.6) | T1:row14:col1 |
| CLINFTYPN1 (HABP) | `Q31` · CL_ratio | -0.424 | HABP |  |  | h·abp | 19.4 | llm (0.6) | T1:row32:col1 |
| CLINFTYPN5 (AP) | `Q900` · equation variable | -0.382 | AP |  |  | ap | 28.8 | llm (0.6) | T1:row36:col1 |
| V3INFTYPN1 (HABP) | `Q77` · V3 | 0.836 | HABP |  |  | h·abp | 25.3 | llm (0.6) | T1:row38:col1 |
| V3INFTYPN2 (VABP) | `Q78` · V3/F | 1.43 | VABP |  |  | vabp | 19.5 | llm (0.6) | T1:row39:col1 |
| theta_q26_weight_power | `Q900` · theta_q26_weight_power | 0.875 |  |  |  |  | 12 |  | T1:row4:col1, T1:row27:col1 |

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
- unit_dimension_unknown: 'cUTI' (V1)
- dropped duplicate Q63 ('V1INFTYPN3 (cUTI)', value '0.343') — already have one for this compound
- unit_dimension_unknown: 'bacteremia' (Vnorm)
- dropped unlinked row (NIL): 'V1EASIAFL1' — extend the ontology if this is a real PK parameter (source ['T1:row15:col1'])
- dropped unlinked row (NIL): 'BCLCRNLT30' — extend the ontology if this is a real PK parameter (source ['T1:row16:col1', 'T1:row44:col1'])
- unit_dimension_unknown: 'HABP' (CL_ratio)
- dropped unlinked row (NIL): 'CLINFTYPN2 (VABP)' — extend the ontology if this is a real PK parameter (source ['T1:row33:col1'])
- dropped unlinked row (NIL): 'CLINFTYPN3 (cUTI)' — extend the ontology if this is a real PK parameter (source ['T1:row34:col1'])
- dropped unlinked row (NIL): 'CLINFTYPN4 (bacteremia)' — extend the ontology if this is a real PK parameter (source ['T1:row35:col1'])
- unit_dimension_unknown: 'AP' (equation variable)
- unit_dimension_unknown: 'HABP' (V3)
- unit_dimension_unknown: 'VABP' (V3/F)
- unit_dimension_unknown: 'cUTI' (V3/F)
- dropped duplicate Q78 ('V3INFTYPN3 (cUTI)', value '0.17') — already have one for this compound
- dropped unlinked row (NIL): 'V3INFTYPN4 (bacteremia)' — extend the ontology if this is a real PK parameter (source ['T1:row41:col1'])
- dropped unlinked row (NIL): 'V3INFTYPN5 (AP)' — extend the ontology if this is a real PK parameter (source ['T1:row42:col1'])
- dropped duplicate Q77 ('V3WTKG1', value '0.831') — already have one for this compound
- covariate effect for Q26 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'V1WTKG1' → L/kg (from the popPK convention: "The parameter 'V1WTKG1' represents the covariate effect of body weight (WTKG) on volume of distribution (V1). The paper ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=durlobactam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
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
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q31 | fail |  | -0.424 |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T1:row3:col1', 'T1:row26:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T1:row6:col1', 'T1:row29:col1'] |
| C5_dimension_Q44 | pass | dimensionless |  | ['T1:row8:col1', 'T1:row31:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T1:row14:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T1:row5:col1', 'T1:row28:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T1:row7:col1', 'T1:row30:col1'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] | HABP | ['T1:row32:col1'] |
| C5_unit_missing_Q352 | fail | [length] ** 3 | bacteremia | ['T1:row13:col1'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 | HABP | ['T1:row38:col1'] |
| C5_unit_missing_Q78 | fail | [length] ** 3 | VABP | ['T1:row39:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.33 L/h | ['T1:row3:col1', 'T1:row26:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 36.5 L | ['T1:row14:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdurlobactam%5D%20Durlobactam_Cammarata2025_final&body=Drug%3A%20durlobactam%0ARecord%3A%20Durlobactam_Cammarata2025_final%0APaper%3A%20Cammarata_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_durlobactam/Durlobactam_Cammarata2025_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 10:31 UTC</sub>
