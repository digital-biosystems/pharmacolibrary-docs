<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;axatilimab&quot;,&quot;href&quot;:&quot;drugs/drug_axatilimab/&quot;},{&quot;label&quot;:&quot;Yang_2025 \u00b7 typical_values_rse&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# axatilimab — `Axatilimab_Yang2025_typical_values_rse`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Vmax, KD, C0 and equation variable), so that value has no SI equivalent. Extracted — axatilimab: V 1.52 L, CL 8.3 L/h, Q 2.6 L/h, V2 1.8 L, Vmax 2.37 nM/h, KD 0.264 nM, C0 1.39 nM, kel 3.32 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has axatilimab → csf-1 (interconversion); csf-1 → ncmcs (interconversion); ncmcs → ast (interconversion) …, the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Yang YO et al., Semimechanistic Population PK/PD Modeli…, Clinical pharmacology and t… (2025)
  ·  DOI: [10.1002/cpt.3503](https://doi.org/10.1002/cpt.3503)

<div class="pk-model-meta" hidden drug="axatilimab" model-id="Axatilimab_Yang2025_typical_values_rse" status="rejected" stale="false" population="healthy participants and patients with solid tumors or cGVHD" measured-compound="axatilimab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Volume of distribution (Vd), L | `Q61` · V | 1.52 | L | 0.00152 | [l] | not captured | llm_confirmed (0.6) | Yang_2025_table_p7_1:row0:col2 | — | not captured |
| Clearance (CL), L/h | `Q22` · CL | 8.3 | L/h | 2.3055555555555556e-06 | [l] / [h] | not captured | space_fold (0.95) | Yang_2025_table_p7_1:row1:col2 | — | not captured |
| Intercompartmental CL (Q), L/h | `Q30` · Q | 2.6 | L/h | 7.222222222222224e-07 | [l] / [h] | not captured | llm_corrected (0.6) | Yang_2025_table_p7_1:row2:col2 | — | not captured |
| Volume of distribution in the peripheral compartment (Vp), L | `Q64` · V2 | 1.8 | L | 0.0018000000000000002 | [l] | not captured | boundary_compartment (0.9) | Yang_2025_table_p7_1:row3:col2 | — | not captured |
| Elimination rates of the CSF-1 and axatilimab complexes with CSF-1R (Vmax), nM/h | `Q66` · Vmax | 2.37 | nM/h | not captured | [nM] / [h] | not captured | llm_confirmed (0.6) | Yang_2025_table_p7_1:row4:col2 | — | not captured |
| Dissociation constant of axatilimab/CSF-1R complex (KdPK), nM | `Q331` · KD | 0.264 | nM | not captured | [nM] | not captured | llm_confirmed (0.6) | Yang_2025_table_p7_1:row5:col2 | — | not captured |
| Baseline CSF-1 concentration (BLCSF1), nM | `Q86` · C0 | 1.39 | nM | not captured | [nM] | not captured | llm_corrected (0.6) | Yang_2025_table_p7_1:row7:col2 | — | not captured |
| CSF-1R-independent CSF-1 elimination rate (kdegCSF1), 1/h | `Q47` · kel | 3.32 | 1/h | 0.0009222222222222222 | [1] / [h] | not captured | llm_confirmed (0.6) | Yang_2025_table_p7_1:row9:col2 | — | not captured |
| Healthy population on BLNCMC | `Q900` · equation variable | 39.6 | % | not captured | [%] | not captured | llm (0.6) | Yang_2025_table_p7_1:row25:col2 | — | not captured |
| theta_q319_bodyweight | `Q900` · theta_q319_bodyweight | 7.8 | not captured | not captured | not captured | not captured | not captured (not captured) | Yang_2025_table_p7_1:row21:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'bPK, –' routed out of structural estimates ('Residual error model, unit')
- unit_dimension_mismatch: 'Elimination rates of the CSF-1 and axatilimab complexes with CSF-1R (Vmax), nM/h' → Q66 (unit '[length] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Dissociation constant of axatilimab/CSF-1R complex (KdPK), nM' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped PD-category row 'Hill coefficient (nh), –' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yang_2025_table_p7_1:row6:col2'])
- unit_dimension_mismatch: 'Baseline CSF-1 concentration (BLCSF1), nM' → Q86 (unit '[length]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Baseline NCMC concentration (BLNCMC), cells/μL' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_p7_1:row8:col2'])
- dropped duplicate Q47 ('NCMC elimination rate (kdegNCMC), 1/h', value '6.46') — already have one for this compound
- dropped unlinked row (NIL): 'ADA effect coefficient (kAda), –' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_p7_1:row11:col2'])
- dropped PD-category row 'Baseline AST concentration (BLAST), U/L' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yang_2025_table_p7_1:row12:col2'])
- unit_dimension_mismatch: 'Maximum rate of NCMC-dependent elimination of AST (Vmax AST NCMC), 1/h' → Q66 (unit '1 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q66 ('Maximum rate of NCMC-dependent elimination of AST (Vmax AST NCMC), 1/h', value '5.16') — already have one for this compound
- dropped duplicate Q47 ('AST elimination rate (kdegAST), 1/h', value '5.84') — already have one for this compound
- dropped PD-category row 'NCMC concentration resulting in 50% of maximum rate of NCMC-dependent elimination of AST (EC50 AST NCMC), cells/μL' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yang_2025_table_p7_1:row15:col2'])
- dropped unlinked row (NIL): 'Baseline CPK concentration (BLCPK), U/L' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_p7_1:row16:col2'])
- unit_dimension_mismatch: 'Maximum rate of NCMC-dependent elimination of CPK (Vmax CPK NCMC), 1/h' → Q66 (unit '1 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q66 ('Maximum rate of NCMC-dependent elimination of CPK (Vmax CPK NCMC), 1/h', value '3.38') — already have one for this compound
- dropped duplicate Q47 ('CPK elimination rate (kdegCPK), 1/h', value '6.19') — already have one for this compound
- dropped PD-category row 'NCMC concentration resulting in 50% of maximum rate of NCMC-dependent elimination of CPK (EC50 CPK NCMC), cells/μL' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yang_2025_table_p7_1:row19:col2'])
- routed 'CSF-1 on CL' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'CSF-1 on BLCSF1' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_p7_1:row23:col2'])
- dropped unlinked row (NIL): 'Population with cancer on BLNCMC' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_p7_1:row24:col2'])
- dropped unlinked row (NIL): 'BLCPK on BLNCMC' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_p7_1:row26:col2'])
- unit_dimension_mismatch: 'Vd' → Q61 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q61 ('Vd', value '5.2') — already have one for this compound
- unit_dimension_mismatch: 'CL' → Q22 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CL', value '5.99') — already have one for this compound
- unit_dimension_mismatch: 'Vmax' → Q66 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q66 ('Vmax', value '6.92') — already have one for this compound
- dropped unlinked row (NIL): 'BLCSF1' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_p7_1:row31:col2'])
- dropped unlinked row (NIL): 'BLNCMC' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_p7_1:row32:col2'])
- dropped unlinked row (NIL): 'BLAST' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_p7_1:row33:col2'])
- dropped unlinked row (NIL): 'BLCPK' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_p7_1:row34:col2'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=axatilimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'typical values: rse, %' subgroup of Yang_2025 (paper reports 2 populations: typical values: estimate, typical values: rse, %)
- molar mass: none found for 'axatilimab' — its concentrations stay mass-only

**Extraction notes:**
- table Yang_2025_table_p7_1: unbound_uncertainty
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (10/20 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['axatilimab', 'csf-1', 'interconversion'], ['csf-1', 'ncmcs', 'interconversion'], ['ncmcs', 'ast', 'interconversion'], ['ncmcs', 'cpk', 'interconversion']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[baseline csf‐1 concentration (blcsf1), nm]` | not captured | 1.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[baseline ncmc concentration (blncmc), cells/ul]` | 5.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[bodyweight_on_vd]` | 7.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance (cl)].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[elimination rates of the csf‐1 and axatilimab complexes with csf‐1r (v max), nm/h]` | not captured | 2.37 | only_one_extracted |
| `gpt-oss-120b` | `parameters[healthy population on blncmc]` | not captured | 39.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximum rate of ncmc‐dependent elimination of ast (v max ast ncmc)]` | 5.16 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_bodyweight]` | not captured | 7.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution (vd)].covariate_forms` | [] | ['linear_fractional'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Yang_2025_table_p7_1:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Yang_2025_table_p7_1:row2:col2'] |
| C5_dimension_Q331 | fail | [length] | nM | not captured | not captured | ['Yang_2025_table_p7_1:row5:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Yang_2025_table_p7_1:row9:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Yang_2025_table_p7_1:row0:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Yang_2025_table_p7_1:row3:col2'] |
| C5_dimension_Q66 | fail | [length] / [time] | nM/h | not captured | not captured | ['Yang_2025_table_p7_1:row4:col2'] |
| C5_dimension_Q86 | fail | [length] | nM | not captured | not captured | ['Yang_2025_table_p7_1:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.3 | not captured | not captured | ['Yang_2025_table_p7_1:row1:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.3 L/h | not captured | not captured | ['Yang_2025_table_p7_1:row1:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.52 L | not captured | not captured | ['Yang_2025_table_p7_1:row0:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.8 L | not captured | not captured | ['Yang_2025_table_p7_1:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_axatilimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yang_2025` / `Yang_2025::typical_values_rse`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:33 UTC</sub>
