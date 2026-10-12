<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;axatilimab&quot;,&quot;href&quot;:&quot;drugs/drug_axatilimab/&quot;},{&quot;label&quot;:&quot;Yang_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# axatilimab — `Axatilimab_Yang2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Axatilimab rejection stems from a non-SI dissociation constant and orphan metabolites lacking dose paths.**

The axatilimab-CSF-1R dissociation constant of 0.264 nM uses a unit that could not be converted to SI units. The model structure includes AST and CPK as metabolites with no path from the dose. These issues caused a dimension mismatch and unreachable compartments, leading to rejection. Extracted — axatilimab: V 1.52 L, CL 8.3 L/h, Q 2.6 L/h, V2 1.8 L, KD 0.264, C0 5.9, kel 3.32 1/h, Vmax 5.16 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has axatilimab → csf-1 (interconversion); csf-1 → ncmcs (interconversion); ncmcs → ast (interconversion) …, the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Yang YO et al., Semimechanistic Population PK/PD Modeli…, Clinical pharmacology and t… (2025)
  ·  DOI: [10.1002/cpt.3503](https://doi.org/10.1002/cpt.3503)

## Model component
<dbs-pgx drug="axatilimab" model-id="Axatilimab_Yang2025_reference" status="rejected" stale="false" population="healthy participants and patients with solid tumors or chronic graft-versus-host disease" measured-compound="axatilimab" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 8 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Volume of distribution (Vd), L | `Q61` · V | 1.52 | L | 0.00152 | [l] | not captured | llm_confirmed (0.6) | cpt3503-tbl-0001:row2:col1, cpt3503-tbl-0001:row2:col2 | — | 3.38 (3.59% RSE) |
| Clearance (CL), L/h | `Q22` · CL | 8.3 | L/h | 2.3055555555555556e-06 | [l] / [h] | not captured | space_fold (0.95) | cpt3503-tbl-0001:row3:col1, cpt3503-tbl-0001:row3:col2 | — | 0.006 (0.008% RSE) |
| Intercompartmental CL (Q), L/h | `Q30` · Q | 2.6 | L/h | 7.222222222222224e-07 | [l] / [h] | not captured | llm_corrected (0.6) | cpt3503-tbl-0001:row4:col1, cpt3503-tbl-0001:row4:col2 | — | not captured |
| Volume of distribution in the peripheral compartment (Vp), L | `Q64` · V2 | 1.8 | L | 0.0018000000000000002 | [l] | not captured | boundary_compartment (0.9) | cpt3503-tbl-0001:row5:col1, cpt3503-tbl-0001:row5:col2 | — | 2.55 (2.74% RSE) |
| Dissociation constant of axatilimab/CSF‐1R complex (Kd PK ), nM | `Q331` · KD | 0.264 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | cpt3503-tbl-0001:row7:col1, cpt3503-tbl-0001:row7:col2 | — | 1.1 (1.11% RSE) |
| Baseline NCMC concentration (BLNCMC), cells/μL | `Q86` · C0 | 5.9 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | cpt3503-tbl-0001:row10:col1, cpt3503-tbl-0001:row10:col2 | — | not captured |
| CSF‐1R–independent CSF‐1 elimination rate (kdegCSF1), 1/h | `Q47` · kel | 3.32 | 1/h | 0.0009222222222222222 | [1] / [h] | not captured | llm_confirmed (0.6) | cpt3503-tbl-0001:row11:col1, cpt3503-tbl-0001:row11:col2 | — | 0.002 (0.002% RSE) |
| ada_effect_coefficient_k_ada | `Q900` · ada_effect_coefficient_k_ada | 3.52 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt3503-tbl-0001:row13:col1, cpt3503-tbl-0001:row13:col2 | — | not captured |
| Maximum rate of NCMC‐dependent elimination of AST (V max AST NCMC), 1/h | `Q66` · Vmax | 5.16 | 1/h | not captured | [1] / [h] | not captured | llm (0.6) | cpt3503-tbl-0001:row15:col1, cpt3503-tbl-0001:row15:col2 | — | 0.25 (0.329% RSE) |
| bodyweight_on_vd | `Q900` · bodyweight_on_vd | 7.8 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt3503-tbl-0001:row23:col1, cpt3503-tbl-0001:row23:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Volume of distribution (Vd), L' routed out of structural estimates ('BSV')
- table section iiv: 'Clearance (CL), L/h' routed out of structural estimates ('BSV')
- table section iiv: 'Intercompartmental CL (Q), L/h' routed out of structural estimates ('BSV')
- table section iiv: 'Volume of distribution in the peripheral compartment (Vp), L' routed out of structural estimates ('BSV')
- table section iiv: 'Elimination rates of the CSF‐1 and axatilimab complexes with CSF‐1R (V max), nM/h' routed out of structural estimates ('BSV')
- table section iiv: 'Dissociation constant of axatilimab/CSF‐1R complex (Kd PK ), nM' routed out of structural estimates ('BSV')
- table section iiv: 'Hill coefficient (Nh), −' routed out of structural estimates ('BSV')
- table section iiv: 'Baseline CSF‐1 concentration (BLCSF1), nM' routed out of structural estimates ('BSV')
- table section iiv: 'Baseline NCMC concentration (BLNCMC), cells/μL' routed out of structural estimates ('BSV')
- table section iiv: 'CSF‐1R–independent CSF‐1 elimination rate (kdegCSF1), 1/h' routed out of structural estimates ('BSV')
- table section iiv: 'NCMC elimination rate (kdegNCMC), 1/h' routed out of structural estimates ('BSV')
- table section iiv: 'ADA effect coefficient (k ada), −' routed out of structural estimates ('BSV')
- table section iiv: 'Baseline AST concentration (BLAST), U/L' routed out of structural estimates ('BSV')
- table section iiv: 'Maximum rate of NCMC‐dependent elimination of AST (V max AST NCMC), 1/h' routed out of structural estimates ('BSV')
- table section iiv: 'AST elimination rate (kdegAST), 1/h' routed out of structural estimates ('BSV')
- table section iiv: 'NCMC concentration resulting in 50% of maximum rate of NCMC‐dependent elimination of AST (EC50 AST NCMC), cells/μL' routed out of structural estimates ('BSV')
- table section iiv: 'Baseline CPK concentration (BLCPK), U/L' routed out of structural estimates ('BSV')
- table section iiv: 'Maximum rate of NCMC‐dependent elimination of CPK (V max CPK NCMC), 1/h' routed out of structural estimates ('BSV')
- table section iiv: 'CPK elimination rate (kdegCPK), 1/h' routed out of structural estimates ('BSV')
- table section iiv: 'NCMC concentration resulting in 50% of maximum rate of NCMC‐dependent elimination of CPK (EC50 CPK NCMC), cells/μL' routed out of structural estimates ('BSV')
- table section iiv: 'Bodyweight on Vd' routed out of structural estimates ('BSV')
- table section iiv: 'CSF‐1 on CL' routed out of structural estimates ('BSV')
- table section iiv: 'CSF‐1 on BLCSF1' routed out of structural estimates ('BSV')
- table section iiv: 'Population with cancer on BLNCMC' routed out of structural estimates ('BSV')
- table section iiv: 'Healthy population on BLNCMC' routed out of structural estimates ('BSV')
- table section iiv: 'BLCPK on BLNCMC' routed out of structural estimates ('BSV')
- table section iiv: 'Vd' routed out of structural estimates ('BSV')
- table section iiv: 'CL' routed out of structural estimates ('BSV')
- table section iiv: 'V max' routed out of structural estimates ('BSV')
- table section iiv: 'BLCSF1' routed out of structural estimates ('BSV')
- table section iiv: 'BLNCMC' routed out of structural estimates ('BSV')
- table section iiv: 'BLAST' routed out of structural estimates ('BSV')
- table section iiv: 'BLCPK' routed out of structural estimates ('BSV')
- table section residual_error: 'b PK, −' routed out of structural estimates ('Residual error model, unit')
- table section residual_error: 'b CSF1, −' routed out of structural estimates ('Residual error model, unit')
- table section residual_error: 'a NCMC, cells/μL' routed out of structural estimates ('Residual error model, unit')
- table section residual_error: 'b NCMC, −' routed out of structural estimates ('Residual error model, unit')
- table section residual_error: 'b AST, −' routed out of structural estimates ('Residual error model, unit')
- table section residual_error: 'b CPK, −' routed out of structural estimates ('Residual error model, unit')
- dropped unlinked row (NIL): 'Elimination rates of the CSF‐1 and axatilimab complexes with CSF‐1R (V max), nM/h' — extend the ontology if this is a real PK parameter (source ['cpt3503-tbl-0001:row6:col1', 'cpt3503-tbl-0001:row6:col2'])
- dropped PD-category row 'Hill coefficient (Nh), −' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt3503-tbl-0001:row8:col1', 'cpt3503-tbl-0001:row8:col2'])
- dropped PD-category row 'Baseline CSF‐1 concentration (BLCSF1), nM' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt3503-tbl-0001:row9:col1', 'cpt3503-tbl-0001:row9:col2'])
- dropped duplicate Q47 ('NCMC elimination rate (kdegNCMC), 1/h', value '6.46') — already have one for this compound
- covariate level 'ADA effect coefficient (k ada), −' → Q900:ada_effect_coefficient_k_ada = 3.52 (linear_fractional on Q22)
- dropped PD-category row 'Baseline AST concentration (BLAST), U/L' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt3503-tbl-0001:row14:col1', 'cpt3503-tbl-0001:row14:col2'])
- unit_dimension_mismatch: 'Maximum rate of NCMC‐dependent elimination of AST (V max AST NCMC), 1/h' → Q66 (unit '1 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q47 ('AST elimination rate (kdegAST), 1/h', value '5.84') — already have one for this compound
- dropped PD-category row 'NCMC concentration resulting in 50% of maximum rate of NCMC‐dependent elimination of AST (EC50 AST NCMC), cells/μL' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt3503-tbl-0001:row17:col1', 'cpt3503-tbl-0001:row17:col2'])
- dropped PD-category row 'Baseline CPK concentration (BLCPK), U/L' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt3503-tbl-0001:row18:col1', 'cpt3503-tbl-0001:row18:col2'])
- unit_dimension_mismatch: 'Maximum rate of NCMC‐dependent elimination of CPK (V max CPK NCMC), 1/h' → Q66 (unit '1 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q66 ('Maximum rate of NCMC‐dependent elimination of CPK (V max CPK NCMC), 1/h', value '3.38') — already have one for this compound
- dropped duplicate Q47 ('CPK elimination rate (kdegCPK), 1/h', value '6.19') — already have one for this compound
- dropped PD-category row 'NCMC concentration resulting in 50% of maximum rate of NCMC‐dependent elimination of CPK (EC50 CPK NCMC), cells/μL' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt3503-tbl-0001:row21:col1', 'cpt3503-tbl-0001:row21:col2'])
- covariate level 'Bodyweight on Vd' → Q900:bodyweight_on_vd = 7.8 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'CSF‐1 on CL' — extend the ontology if this is a real PK parameter (source ['cpt3503-tbl-0001:row24:col1', 'cpt3503-tbl-0001:row24:col2'])
- dropped unlinked row (NIL): 'CSF‐1 on BLCSF1' — extend the ontology if this is a real PK parameter (source ['cpt3503-tbl-0001:row25:col1', 'cpt3503-tbl-0001:row25:col2'])
- dropped unlinked row (NIL): 'Population with cancer on BLNCMC' — extend the ontology if this is a real PK parameter (source ['cpt3503-tbl-0001:row26:col1', 'cpt3503-tbl-0001:row26:col2'])
- dropped unlinked row (NIL): 'Healthy population on BLNCMC' — extend the ontology if this is a real PK parameter (source ['cpt3503-tbl-0001:row27:col1', 'cpt3503-tbl-0001:row27:col2'])
- dropped unlinked row (NIL): 'BLCPK on BLNCMC' — extend the ontology if this is a real PK parameter (source ['cpt3503-tbl-0001:row28:col1', 'cpt3503-tbl-0001:row28:col2'])
- dropped duplicate Q61 ('Vd', value '5.2') — already have one for this compound
- dropped duplicate Q22 ('CL', value '5.99') — already have one for this compound
- dropped duplicate Q66 ('V max', value '6.92') — already have one for this compound
- dropped unlinked row (NIL): 'BLCSF1' — extend the ontology if this is a real PK parameter (source ['cpt3503-tbl-0001:row33:col1', 'cpt3503-tbl-0001:row33:col2'])
- dropped unlinked row (NIL): 'BLNCMC' — extend the ontology if this is a real PK parameter (source ['cpt3503-tbl-0001:row34:col1', 'cpt3503-tbl-0001:row34:col2'])
- dropped unlinked row (NIL): 'BLAST' — extend the ontology if this is a real PK parameter (source ['cpt3503-tbl-0001:row35:col1', 'cpt3503-tbl-0001:row35:col2'])
- dropped unlinked row (NIL): 'BLCPK' — extend the ontology if this is a real PK parameter (source ['cpt3503-tbl-0001:row36:col1', 'cpt3503-tbl-0001:row36:col2'])
- implicit units: 'Dissociation constant of axatilimab/CSF‐1R complex (Kd PK ), nM' — the LLM proposed 'nM', whose dimension does not fit Q331; left unset
- implicit units: 'Baseline NCMC concentration (BLNCMC), cells/μL' — the LLM proposed 'cells/μL', whose dimension does not fit Q86; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=axatilimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- molar mass: none found for 'axatilimab' — its concentrations stay mass-only

**Extraction notes:**
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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt3503-tbl-0001:row3:col1', 'cpt3503-tbl-0001:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt3503-tbl-0001:row4:col1', 'cpt3503-tbl-0001:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt3503-tbl-0001:row11:col1', 'cpt3503-tbl-0001:row11:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt3503-tbl-0001:row2:col1', 'cpt3503-tbl-0001:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt3503-tbl-0001:row5:col1', 'cpt3503-tbl-0001:row5:col2'] |
| C5_dimension_Q66 | fail | 1 / [time] | 1/h | not captured | not captured | ['cpt3503-tbl-0001:row15:col1', 'cpt3503-tbl-0001:row15:col2'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['cpt3503-tbl-0001:row7:col1', 'cpt3503-tbl-0001:row7:col2'] |
| C5_unit_missing_Q86 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['cpt3503-tbl-0001:row10:col1', 'cpt3503-tbl-0001:row10:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.3 | not captured | not captured | ['cpt3503-tbl-0001:row3:col1', 'cpt3503-tbl-0001:row3:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.3 L/h | not captured | not captured | ['cpt3503-tbl-0001:row3:col1', 'cpt3503-tbl-0001:row3:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.52 L | not captured | not captured | ['cpt3503-tbl-0001:row2:col1', 'cpt3503-tbl-0001:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.8 L | not captured | not captured | ['cpt3503-tbl-0001:row5:col1', 'cpt3503-tbl-0001:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_axatilimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yang_2025` / `Yang_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:41 UTC</sub>
