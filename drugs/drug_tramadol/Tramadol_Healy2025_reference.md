<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tramadol&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/&quot;},{&quot;label&quot;:&quot;Healy_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bao2023_reference&quot;,&quot;label&quot;:&quot;Bao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Bao2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Garrido2006_reference&quot;,&quot;label&quot;:&quot;Garrido_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Garrido2006_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Pypendop2008_reference&quot;,&quot;label&quot;:&quot;Pypendop_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Pypendop2008_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tramadol — `Tramadol_Healy2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Tramadol record rejected because the CYP2D6 covariate effect unit 'PMA' could not be interpreted and O-desmethyltramadol clearance of 78.7 L/h/70 kg is physiologically implausible.

<div class="pk-model-meta" hidden drug="tramadol" model-id="Tramadol_Healy2025_reference" status="rejected" stale="false" population="neonatal patients" measured-compound="tramadol" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Healy P, Allegaert K, Della Pasqua O. Evaluation of the effect of CYP2D6 and OCT1 polymorphisms on the pharmacokinetics of tramadol: Implications for clinical safety and dose rationale in paediatric chronic pain. British journal of clinical pharmacology 91(2):283-296 (2025).
  ·  DOI: [10.1111/bcp.16201](https://doi.org/10.1111/bcp.16201)

## Population and dosing

**Population:** neonatal patients · condition chronic pain · age group neonate · n = 46.

**Dosing:** 24.5, 147 mg, iv, multiple.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLPO | CL/F | 25.6 | L/h/70 kg | 10 |
| QP | Q | 111 | L/h/70 kg | 58.3 |
| VP1 | V1 | 0.211 | L/70 kg |  |
| VP2 | V2 | 102 | L/70 kg | 73.6 |
| CLMO (OCT1‐G1) | CL | 78.7 | L/h/70 kg | 34 |
| QM | Q | 1.98 | L/h/70 kg |  |
| VM1 | V1 | 1.45 | L/70 kg |  |
| VM2 | V2 | 101 | L/70 kg | 101 |
| TM50 CLPM | CLnorm | 39.8 | PMA |  |
| theta_q22_cyp2d6 | theta_q22_cyp2d6 | 36.3 |  | 7.8 |
| theta_q370_cyp2d6 | theta_q370_cyp2d6 | 11.4 |  | 35 |
| kₐ | kabs | 0.65 | 1/h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.379). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Tramadol record rejected because the CYP2D6 covariate effect unit 'PMA' could not be interpreted and O-desmethyltramadol clearance of 78.7 L/h/70 kg is physiologically implausible.**

The CYP2D6 covariate parameter was recorded with a non-standard unit that prevents standard pharmacokinetic normalization. Additionally, the metabolite’s total clearance of 78.7 L/h/70 kg exceeds typical physiological limits. Reader disagreements also exist regarding specific CYP2D6 covariate values, with one noting 11.4 and another null. Extracted — tramadol: CL/F 25.6 L/h/70 kg, Q 111 L/h/70 kg, V1 0.211 L/70 kg, V2 102 L/70 kg, kabs 0.65 1/h; O-desmethyltramadol: CL 78.7 L/h/70 kg, Q 1.98 L/h/70 kg, V1 1.45 L/70 kg, V2 101 L/70 kg, CLnorm 39.8 PMA.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has tramadol → o-desmethyltramadol (metabolism), the second reading none; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLPO | `Q27` · CL/F | 25.6 | L/h/70 kg | 7.111e-06 | m3/s | l/(h·70kg) | 10 | exact (1) | bcp16201-tbl-0005:row4:col2 |
| QP | `Q30` · Q | 111 | L/h/70 kg | 3.083e-05 | m3/s | l/(h·70kg) | 58.3 | exact (1) | bcp16201-tbl-0005:row5:col2 |
| VP1 | `Q63` · V1 | 0.211 | L/70 kg | 0.000211 | m3 | L |  | exact (1) | bcp16201-tbl-0005:row6:col2, bcp16201-tbl-0005:row24:col2 |
| VP2 | `Q64` · V2 | 102 | L/70 kg | 0.102 | m3 | l/70kg | 73.6 | exact (1) | bcp16201-tbl-0005:row7:col2 |
| CLMO (OCT1‐G1) | `Q22` · CL | 78.7 | L/h/70 kg | 2.186e-05 | m3/s | l/(h·70kg) | 34 | exact (1) | bcp16201-tbl-0005:row9:col2 |
| QM | `Q30` · Q | 1.98 | L/h/70 kg | 5.5e-07 | m3/s | L/h |  | exact (1) | bcp16201-tbl-0005:row11:col2, bcp16201-tbl-0005:row29:col2 |
| VM1 | `Q63` · V1 | 1.45 | L/70 kg | 0.00145 | m3 | L |  | exact (1) | bcp16201-tbl-0005:row12:col2, bcp16201-tbl-0005:row30:col2 |
| VM2 | `Q64` · V2 | 101 | L/70 kg | 0.101 | m3 | l/70kg | 101 | exact (1) | bcp16201-tbl-0005:row13:col2 |
| TM50 CLPM | `Q354` · CLnorm | 39.8 | PMA |  |  | pM·a |  | llm_corrected (0.6) | bcp16201-tbl-0005:row19:col2 |
| theta_q22_cyp2d6 | `Q900` · theta_q22_cyp2d6 | 36.3 |  |  |  |  | 7.8 |  | bcp16201-tbl-0005:row2:col2 |
| theta_q370_cyp2d6 | `Q900` · theta_q370_cyp2d6 | 11.4 |  |  |  |  | 35 |  | bcp16201-tbl-0005:row15:col2 |
| kₐ | `Q49` · kabs | 0.65 | 1/h | 0.0001806 | 1/s | 1/h |  | review_gapfill (0.7) | Ekstrand_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

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
- dropped unlinked row (NIL): 'TM50 CLPO' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row17:col2'])
- dropped PD-category row 'Hill coefficient CLPO' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row18:col2'])
- unit_dimension_unknown: 'PMA' (CLnorm)
- dropped PD-category row 'Hill coefficient CLPM' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row20:col2'])
- dropped unlinked row (NIL): 'TM50 CLMO' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row21:col2'])
- dropped PD-category row 'Hill coefficient CLMO' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row22:col2'])
- unit_dimension_unknown: '‐' (CL/F)
- dropped duplicate Q27 ('CLPO (CYP1)', value '0.161') — already have one for this compound
- relinked 'CLPM (CYP1)' Q370 → Q22 for O-desmethyltramadol: a metabolite's own clearance is its elimination, not its formation
- unit_dimension_unknown: '‐' (CL)
- dropped duplicate Q22 ('CLPM (CYP1)', value '0.628') — already have one for this compound
- relinked 'CLPM (CYP2)' Q370 → Q22 for O-desmethyltramadol: a metabolite's own clearance is its elimination, not its formation
- dropped duplicate Q22 ('CLPM (CYP2)', value '0.0915') — already have one for this compound
- relinked 'CLPM (CYP3)' Q370 → Q22 for O-desmethyltramadol: a metabolite's own clearance is its elimination, not its formation
- dropped duplicate Q22 ('CLPM (CYP3)', value '0.00878') — already have one for this compound
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q370 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'VP1' → L/70 kg (from the popPK convention: "The text states the model is parameterized in terms of 'clearance and volume of distribution standardized to a body weig")
- implicit units: 'QM' → L/h/70 kg (from the popPK convention: "The text states the model is parameterized in terms of 'clearance and volume of distribution standardized to a body weig")
- implicit units: 'VM1' → L/70 kg (from the paper text: "The text explicitly states: 'estimates for the central volume of distribution (VM1) were fixed to a value of 78.9 L/70 k")
- implicit units: 'TM50 CLPM' — the LLM proposed 'days', whose dimension does not fit Q354; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tramadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- pharmacogenetic covariate 'theta_q22_cyp2d6' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q370_cyp2d6' (cyp2d6) — PGx domain
- status held at route_to_review — not promoted
- row roles: 3 per-group rows of O-desmethyltramadol other but 0 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: CLPP (CYP2D6‐G2), CLMO (OCT1‐G1), CLPM (CYP2D6‐G2)
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 13 linked by role; re-tagged parent→O-desmethyltramadol ×16
- gap-filled Q49 (kabs) from Ekstrand_2026's review values (primary lacked it)

**Extraction notes:**
- table bcp16201-tbl-0005: missing_unit_binding
- table bcp16201-tbl-0005: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.379 (11/29 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tramadol', 'o-desmethyltramadol', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[clmo]` |  | 57.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clmo]` | 78.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clpm]` |  | 0.628 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[qm]` | 1.98 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_cyp2d6]` |  | 28.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_clfm_cyp2d6]` |  | 5.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_cyp2d6]` | 36.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q370_cyp2d6]` | 11.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tm50 clpm]` |  | 39.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tm50 clpm]` | 39.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm1]` |  | 1.45 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm1]` | 1.45 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm2]` | 101 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp1].parameter_id` | Q63 | Q64 | mismatch |
| `gpt-oss-120b` | `parameters[vp2].parameter_id` | Q64 | Q77 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


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
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ekstrand_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['bcp16201-tbl-0005:row6:col2', 'bcp16201-tbl-0005:row24:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['bcp16201-tbl-0005:row12:col2', 'bcp16201-tbl-0005:row30:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['bcp16201-tbl-0005:row7:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['bcp16201-tbl-0005:row13:col2'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] | PMA | ['bcp16201-tbl-0005:row19:col2'] |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_Healy2025_reference&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_Healy2025_reference%0APaper%3A%20Healy_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tramadol/Tramadol_Healy2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 11:13 UTC</sub>
