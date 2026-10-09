<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Midomafetamine&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/&quot;},{&quot;label&quot;:&quot;Huestis_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Midomafetamine_Hampsey2026_reference&quot;,&quot;label&quot;:&quot;Hampsey_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/Midomafetamine_Hampsey2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Midomafetamine_chov2025_reference&quot;,&quot;label&quot;:&quot;\u0160\u00edchov\u00e1_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/Midomafetamine_chov2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Midomafetamine_Baggott2016_reference&quot;,&quot;label&quot;:&quot;Baggott_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/Midomafetamine_Baggott2016_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Midomafetamine — `Midomafetamine_Huestis2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**MDMA clearance turns negative due to a -0.263 volume shift, and the MDA metabolite is structurally orphaned with zero compartments.**

The parameter labeled V1/F (central volume) carries the value 462 L, but the label V2/F (peripheral volume) holds -0.263, which renders peripheral volume implausible. The MDA metabolite is defined with n_cmt: 0, leaving it with no physical space to exist despite a 0.1 formation fraction. Extracted — midomafetamine: CL/F 41.5 L/h, V1/F 462 L, kabs 1.17, tlag 0.322 h, D1 0.304 h, V2/F -0.263; MDA: fm 0.1.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Huestis MA et al., MDMA pharmacokinetics: A population and…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.13282](https://doi.org/10.1002/psp4.13282)

## Model component
<dbs-pgx drug="Midomafetamine" model-id="Midomafetamine_Huestis2025_reference" status="rejected" stale="false" population="healthy adults" measured-compound="MDMA" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 41.5 | L/h | 1.1527777777777779e-05 | [l] / [h] | not captured | exact (1.0) | psp413282-tbl-0002:row2:col1, psp413282-tbl-0002:row2:col2, psp413282-tbl-0002:row2:col5 | — | not captured |
| V2/F (L) | `Q290` · V1/F | 462 | L | 0.462 | [l] | not captured | exact (1.0) | psp413282-tbl-0002:row3:col1, psp413282-tbl-0002:row3:col2, psp413282-tbl-0002:row3:col4, psp413282-tbl-0002:row3:col5 | — | not captured |
| ka (1/h) | `Q49` · kabs | 1.17 | not captured | not captured | not captured | not captured | exact (1.0) | psp413282-tbl-0002:row4:col1, psp413282-tbl-0002:row4:col2, psp413282-tbl-0002:row4:col5 | — | not captured |
| ALAG1 (h) | `Q83` · tlag | 0.322 | h | 1159.2 | [h] | not captured | exact (1.0) | psp413282-tbl-0002:row5:col1, psp413282-tbl-0002:row5:col2 | — | not captured |
| D1 (h) | `Q310` · D1 | 0.304 | h | 1094.3999999999999 | [h] | not captured | exact (1.0) | psp413282-tbl-0002:row6:col1, psp413282-tbl-0002:row6:col2, psp413282-tbl-0002:row6:col5 | — | not captured |
| fmet | `Q45` · fm | 0.1 | not captured | not captured | not captured | not captured | exact (1.0) | psp413282-tbl-0002:row7:col1 | — | not captured |
| Study effect on V2/F | `Q82` · V2/F | -0.263 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | psp413282-tbl-0002:row16:col1, psp413282-tbl-0002:row16:col2 | — | not captured |
| theta_kabs_fed | `Q900` · theta_kabs_fed | -0.484 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413282-tbl-0002:row11:col1, psp413282-tbl-0002:row11:col2 | — | not captured |
| theta_q95_fasted | `Q900` · theta_q95_fasted | 1.93 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413282-tbl-0002:row12:col1, psp413282-tbl-0002:row12:col2 | — | not captured |
| theta_cl_f_body_weight | `Q900` · theta_cl_f_body_weight | 1.03 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413282-tbl-0002:row13:col1, psp413282-tbl-0002:row13:col2 | — | not captured |
| theta_v2_f_body_weight | `Q900` · theta_v2_f_body_weight | 0.885 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413282-tbl-0002:row15:col1, psp413282-tbl-0002:row15:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'mdma pharmacokinetic parameters and random effects' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'Prop. Error (ng/mL)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Add. Error NIDA (ng)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'Add. Error MPKF (ng)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped duplicate Q27 ('Study effect on CL/F', value '-0.36') — already have one for this compound
- covariate effect for Q95 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Study effect on V2/F' — the LLM proposed 'dimensionless', whose dimension does not fit Q82; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=MDMA
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles: 2 per-group rows of none residual_error but 0 reference group(s) — kept as printed
- row roles: 4 per-group rows of MDMA covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 13 linked by role; re-tagged MDMA→parent ×27, MDMA→MDA ×1
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell psp413282-tbl-0002:row2:col3 = '41.8 (37.7, 45.8)'
- unparsed cell psp413282-tbl-0002:row3:col3 = '461 (429, 496)'
- unparsed cell psp413282-tbl-0002:row4:col3 = '1.17 (0.969, 1.43)'
- unparsed cell psp413282-tbl-0002:row5:col3 = '0.323 (0.273, 0.358)'
- unparsed cell psp413282-tbl-0002:row6:col3 = '0.271 (0.141, 0.485)'
- unparsed cell psp413282-tbl-0002:row6:col4 = 'IIV on D1'
- unparsed cell psp413282-tbl-0002:row8:col3 = '0.208 (0.164, 0.25)'
- unparsed cell psp413282-tbl-0002:row9:col3 = '7.69 (4.47, 13.3)'
- unparsed cell psp413282-tbl-0002:row11:col3 = '−0.496 (−0.645, −0.239)'
- unparsed cell psp413282-tbl-0002:row12:col3 = '1.08 (0.277, 4.31)'
- unparsed cell psp413282-tbl-0002:row13:col3 = '1.05 (0.627, 1.4)'
- unparsed cell psp413282-tbl-0002:row14:col3 = '−0.359 (−0.474, −0.23)'
- unparsed cell psp413282-tbl-0002:row15:col3 = '0.884 (0.6, 1.11)'
- unparsed cell psp413282-tbl-0002:row16:col3 = '−0.267 (−0.342, −0.19)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q82 | fail | not captured | -0.263 | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413282-tbl-0002:row2:col1', 'psp413282-tbl-0002:row2:col2', 'psp413282-tbl-0002:row2:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413282-tbl-0002:row3:col1', 'psp413282-tbl-0002:row3:col2', 'psp413282-tbl-0002:row3:col4', 'psp413282-tbl-0002:row3:col5'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['psp413282-tbl-0002:row6:col1', 'psp413282-tbl-0002:row6:col2', 'psp413282-tbl-0002:row6:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp413282-tbl-0002:row5:col1', 'psp413282-tbl-0002:row5:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['psp413282-tbl-0002:row4:col1', 'psp413282-tbl-0002:row4:col2', 'psp413282-tbl-0002:row4:col5'] |
| C5_unit_missing_Q82 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp413282-tbl-0002:row16:col1', 'psp413282-tbl-0002:row16:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 41.5 L/h | not captured | not captured | ['psp413282-tbl-0002:row2:col1', 'psp413282-tbl-0002:row2:col2', 'psp413282-tbl-0002:row2:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 462 L | not captured | not captured | ['psp413282-tbl-0002:row3:col1', 'psp413282-tbl-0002:row3:col2', 'psp413282-tbl-0002:row3:col4', 'psp413282-tbl-0002:row3:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs_non_atc/drug_midomafetamine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Huestis_2025` / `Huestis_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-09 08:22 UTC</sub>
