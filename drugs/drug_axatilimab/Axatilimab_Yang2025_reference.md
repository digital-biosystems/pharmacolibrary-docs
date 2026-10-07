<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;axatilimab&quot;,&quot;href&quot;:&quot;drugs/drug_axatilimab/&quot;},{&quot;label&quot;:&quot;Yang_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# axatilimab — `Axatilimab_Yang2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

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
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
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
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
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
