<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;mesalazine&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/&quot;},{&quot;label&quot;:&quot;Cuffari_2016 \u00b7 nonmem_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_multimatrix_mesalamine&quot;,&quot;label&quot;:&quot;Cuffari_2016_multimatrix_mesalamine&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_multimatrix_mesalamine.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_multimatrix_mesalamine&quot;,&quot;label&quot;:&quot;Cuffari_2016_multimatrix_mesalamine&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_multimatrix_mesalamine.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_nonmem_estimates&quot;,&quot;label&quot;:&quot;Cuffari_2016_nonmem_estimates&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_nonmem_estimates&quot;,&quot;label&quot;:&quot;Cuffari_2016_nonmem_estimates&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mesalazine — `Mesalazine_Cuffari2016_nonmem_estimates`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines; the model was built differently from what the record describes. Evidence: T2_covariates_not_exercised; T3_topology_template — expected parent_metabolite → PK_Parent_Metabolite* — got PK_1C_enteral

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Advisory only — the base model still replicates.
4. Check the record's covariate_definitions in _interpretv2.yaml.
5. Re-run the engineer for this drug if the covariate curves are wanted.
6. Open the emitted .mo and compare its base class and parameters with the record.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `mesalazine`, measured `5-ASA`.

## Citation
Cuffari C; Pierce D; Korczowski B; Fyderek K; Van Heusen H; Hossack S; et al. et al. (2016). Drug design, development and therapy 10
  ·  DOI: [10.2147/DDDT.S95316](https://doi.org/10.2147/DDDT.S95316)

## Model component
<dbs-pgx drug="mesalazine" model-id="Mesalazine_Cuffari2016_nonmem_estimates" status="model_quarantined" stale="false" population="children and adolescents with ulcerative colitis" measured-compound="5-ASA" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CLm/F, CLnorm/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLR/F (L/h) | `Q26` · CLR | 1.01 | L/h | 2.8055555555555556e-07 | [l] / [h] | not captured | llm (0.6) | ts2-dddt-10-593:row2:col1, ts2-dddt-10-593:row2:col2, ts2-dddt-10-593:row2:col3, Cuffari_2016_table_5:row1:col1, Cuffari_2016_table_5:row1:col2, Cuffari_2016_table_5:row1:col3 | — | not captured |
| CLM/F (L/h) | `Q351` · CLm/F | 75.9 | L/h | 2.1083333333333335e-05 | [l] / [h] | not captured | exact (1.0) | ts2-dddt-10-593:row3:col1, ts2-dddt-10-593:row3:col2, ts2-dddt-10-593:row3:col3, Cuffari_2016_table_5:row2:col1, Cuffari_2016_table_5:row2:col2, Cuffari_2016_table_5:row2:col3 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 70.1 | L | 0.0701 | [l] | not captured | exact (1.0) | ts2-dddt-10-593:row4:col1, ts2-dddt-10-593:row4:col2, ts2-dddt-10-593:row4:col3, Cuffari_2016_table_5:row3:col1, Cuffari_2016_table_5:row3:col2, Cuffari_2016_table_5:row3:col3 | — | not captured |
| CLNRM/F (L/h) | `Q355` · CLnorm/F | 66.7 | L/h | 1.852777777777778e-05 | [l] / [h] | not captured | llm_confirmed (0.6) | ts2-dddt-10-593:row6:col1, ts2-dddt-10-593:row6:col2, ts2-dddt-10-593:row6:col3, Cuffari_2016_table_5:row5:col1, Cuffari_2016_table_5:row5:col2, Cuffari_2016_table_5:row5:col3 | — | not captured |
| VcM/F (L) | `Q76` · V/F | 5.31 | L | 0.00531 | [l] | not captured | llm (0.6) | ts2-dddt-10-593:row7:col1, ts2-dddt-10-593:row7:col2, ts2-dddt-10-593:row7:col3, Cuffari_2016_table_5:row6:col1, Cuffari_2016_table_5:row6:col2, Cuffari_2016_table_5:row6:col3 | — | not captured |
| Ka1 (h−1) | `Q49` · kabs | 0.0207 | h−1 | 5.75e-06 | [1] / [h] | not captured | llm (0.6) | ts2-dddt-10-593:row8:col1, ts2-dddt-10-593:row8:col2, ts2-dddt-10-593:row8:col3, Cuffari_2016_table_5:row7:col1, Cuffari_2016_table_5:row7:col2, Cuffari_2016_table_5:row7:col3 | — | not captured |
| F1 | `Q40` · Fab | 0.413 | not captured | not captured | not captured | not captured | exact (1.0) | ts2-dddt-10-593:row12:col1, ts2-dddt-10-593:row12:col2, ts2-dddt-10-593:row12:col3, Cuffari_2016_table_5:row11:col1, Cuffari_2016_table_5:row11:col2, Cuffari_2016_table_5:row11:col3 | — | not captured |
| clr_f_wt | `Q900` · clr_f_wt | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | ts2-dddt-10-593:row13:col1, Cuffari_2016_table_5:row12:col1 | — | not captured |
| clrm_f_wt | `Q900` · clrm_f_wt | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | ts2-dddt-10-593:row16:col1, Cuffari_2016_table_5:row15:col1 | — | not captured |
| clnrm_f_wt | `Q900` · clnrm_f_wt | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | ts2-dddt-10-593:row17:col1, Cuffari_2016_table_5:row16:col1 | — | not captured |
| vcm_f_wt | `Q900` · vcm_f_wt | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | ts2-dddt-10-593:row18:col1, Cuffari_2016_table_5:row17:col1 | — | not captured |
| theta_clm_f_wt_power | `Q900` · theta_clm_f_wt_power | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | ts2-dddt-10-593:row14:col1, Cuffari_2016_table_5:row13:col1 | — | not captured |
| theta_v1_f_wt_power | `Q900` · theta_v1_f_wt_power | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | ts2-dddt-10-593:row15:col1, Cuffari_2016_table_5:row14:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q351 ('CLRM/F (L/h)', value '2.27') — already have one for this compound
- dropped duplicate Q49 ('Ka3 (h−1)', value '0.165') — already have one for this compound
- dropped unlinked row (NIL): 'ALAG1 (h)' — extend the ontology if this is a real PK parameter (source ['ts2-dddt-10-593:row10:col1', 'ts2-dddt-10-593:row10:col2', 'ts2-dddt-10-593:row10:col3', 'Cuffari_2016_table_5:row9:col1', 'Cuffari_2016_table_5:row9:col2', 'Cuffari_2016_table_5:row9:col3'])
- dropped unlinked row (NIL): 'ALAG3 (h)' — extend the ontology if this is a real PK parameter (source ['ts2-dddt-10-593:row11:col1', 'ts2-dddt-10-593:row11:col2', 'ts2-dddt-10-593:row11:col3', 'Cuffari_2016_table_5:row10:col1', 'Cuffari_2016_table_5:row10:col2', 'Cuffari_2016_table_5:row10:col3'])
- covariate level 'CLR/F~WT' → Q900:clr_f_wt = 0.75 (power on Q26)
- covariate level 'CLRM/F~WT' → Q900:clrm_f_wt = 0.75 (power on Q26)
- covariate level 'CLNRM/F~WT' → Q900:clnrm_f_wt = 0.75 (power on Q26)
- covariate level 'VcM/F~WT' → Q900:vcm_f_wt = 1 (power on Q26)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=5-ASA
- population split: 'nonmem estimates' subgroup of Cuffari_2016 (paper reports 2 populations: multimatrix mesalamine, nonmem estimates)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell ts2-dddt-10-593:row20:col4 = '42.5c'
- unparsed cell ts2-dddt-10-593:row21:col4 = '33.9c'
- unparsed cell ts2-dddt-10-593:row22:col4 = '64.2c'
- unparsed cell ts2-dddt-10-593:row23:col4 = '36.5c'
- unparsed cell ts2-dddt-10-593:row24:col4 = '28.7c'
- unparsed cell ts2-dddt-10-593:row25:col4 = '15.0c'
- unparsed cell ts2-dddt-10-593:row26:col4 = '165c'
- unparsed cell ts2-dddt-10-593:row27:col4 = '137c'
- unparsed cell ts2-dddt-10-593:row28:col4 = '50.6c'
- unparsed cell ts2-dddt-10-593:row29:col4 = '15.0c'
- unparsed cell ts2-dddt-10-593:row30:col4 = '81.4c'
- unparsed cell ts2-dddt-10-593:row32:col4 = '36.9d'
- unparsed cell ts2-dddt-10-593:row33:col4 = '6.00d'
- unparsed cell ts2-dddt-10-593:row34:col4 = '28.8d'
- unparsed cell ts2-dddt-10-593:row35:col4 = '6.00d'
- unparsed cell Cuffari_2016_table_2:row7:col1 = '29.4a (14.5)'
- companion parameter table 2 transcribed (34 record(s))
- unparsed cell Cuffari_2016_table_5:row19:col4 = '42.5c'
- unparsed cell Cuffari_2016_table_5:row20:col4 = '33.9c'
- unparsed cell Cuffari_2016_table_5:row21:col4 = '64.2c'
- unparsed cell Cuffari_2016_table_5:row22:col4 = '36.5c'
- unparsed cell Cuffari_2016_table_5:row23:col4 = '28.7c'
- unparsed cell Cuffari_2016_table_5:row24:col4 = '15.0c'
- unparsed cell Cuffari_2016_table_5:row25:col4 = '165c'
- unparsed cell Cuffari_2016_table_5:row26:col4 = '137c'
- unparsed cell Cuffari_2016_table_5:row27:col4 = '50.6c'
- unparsed cell Cuffari_2016_table_5:row28:col4 = '15.0c'
- unparsed cell Cuffari_2016_table_5:row29:col4 = '81.4c'
- unparsed cell Cuffari_2016_table_5:row31:col4 = '36.9d'
- unparsed cell Cuffari_2016_table_5:row32:col4 = '6.00d'
- unparsed cell Cuffari_2016_table_5:row33:col4 = '28.8d'
- unparsed cell Cuffari_2016_table_5:row34:col4 = '6.00d'
- companion parameter table 5 transcribed (76 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ts2-dddt-10-593:row2:col1', 'ts2-dddt-10-593:row2:col2', 'ts2-dddt-10-593:row2:col3', 'Cuffari_2016_table_5:row1:col1', 'Cuffari_2016_table_5:row1:col2', 'Cuffari_2016_table_5:row1:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['ts2-dddt-10-593:row4:col1', 'ts2-dddt-10-593:row4:col2', 'ts2-dddt-10-593:row4:col3', 'Cuffari_2016_table_5:row3:col1', 'Cuffari_2016_table_5:row3:col2', 'Cuffari_2016_table_5:row3:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ts2-dddt-10-593:row3:col1', 'ts2-dddt-10-593:row3:col2', 'ts2-dddt-10-593:row3:col3', 'Cuffari_2016_table_5:row2:col1', 'Cuffari_2016_table_5:row2:col2', 'Cuffari_2016_table_5:row2:col3'] |
| C5_dimension_Q355 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ts2-dddt-10-593:row6:col1', 'ts2-dddt-10-593:row6:col2', 'ts2-dddt-10-593:row6:col3', 'Cuffari_2016_table_5:row5:col1', 'Cuffari_2016_table_5:row5:col2', 'Cuffari_2016_table_5:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['ts2-dddt-10-593:row8:col1', 'ts2-dddt-10-593:row8:col2', 'ts2-dddt-10-593:row8:col3', 'Cuffari_2016_table_5:row7:col1', 'Cuffari_2016_table_5:row7:col2', 'Cuffari_2016_table_5:row7:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['ts2-dddt-10-593:row7:col1', 'ts2-dddt-10-593:row7:col2', 'ts2-dddt-10-593:row7:col3', 'Cuffari_2016_table_5:row6:col1', 'Cuffari_2016_table_5:row6:col2', 'Cuffari_2016_table_5:row6:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 70.1 L | not captured | not captured | ['ts2-dddt-10-593:row4:col1', 'ts2-dddt-10-593:row4:col2', 'ts2-dddt-10-593:row4:col3', 'Cuffari_2016_table_5:row3:col1', 'Cuffari_2016_table_5:row3:col2', 'Cuffari_2016_table_5:row3:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 5.31 L | not captured | not captured | ['ts2-dddt-10-593:row7:col1', 'ts2-dddt-10-593:row7:col2', 'ts2-dddt-10-593:row7:col3', 'Cuffari_2016_table_5:row6:col1', 'Cuffari_2016_table_5:row6:col2', 'Cuffari_2016_table_5:row6:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite → PK_Parent_Metabolite* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_tmax | reference | skipped | 6 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 7.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_mesalazine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cuffari_2016` / `Cuffari_2016::nonmem_estimates`)
- model: `../../../knowledgebase/drugs/drug_mesalazine/models/modelica/_needs_review/Mesalazine_Cuffari2016_nonmem_estimates.mo`
- deviation: `../../../knowledgebase/drugs/drug_mesalazine/models/modelica/_needs_review/Mesalazine_Cuffari2016_nonmem_estimates.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
