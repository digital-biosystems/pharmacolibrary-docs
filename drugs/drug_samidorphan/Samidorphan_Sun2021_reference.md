<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;Samidorphan&quot;,&quot;href&quot;:&quot;drugs/drug_samidorphan/&quot;},{&quot;label&quot;:&quot;Sun_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Samidorphan — `Samidorphan_Sun2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `olanzapine and samidorphan (OLZ/SAM combination tablet)`, measured `samidorphan`.

## Citation
Sun L et al., Population Pharmacokinetics of Olanzapi…, Journal of clinical pharmac… (2021)
  ·  DOI: [10.1002/jcph.1911](https://doi.org/10.1002/jcph.1911)

## Model component
<dbs-pgx drug="Samidorphan" model-id="Samidorphan_Sun2021_reference" status="rejected" stale="false" population="healthy subjects and patients with schizophrenia" measured-compound="samidorphan" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 13 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 15.5 | L/h | 4.305555555555556e-06 | [l] / [h] | 2.85 | exact (1.0) | jcph1911-tbl-0004:row1:col1, jcph1911-tbl-0004:row1:col2, Sun_2021_table_3:row0:col1, Sun_2021_table_3:row0:col2 | — | 0.087 (None% RSE) |
| Vc/F (L) | `Q290` · V1/F | 656 | L | 0.656 | [l] | 2.23 | exact (1.0) | jcph1911-tbl-0004:row2:col1, jcph1911-tbl-0004:row2:col2, Sun_2021_table_3:row1:col1, Sun_2021_table_3:row1:col2 | — | 0.054 (None% RSE) |
| Vp/F (L) | `Q82` · V2/F | 225 | L | 0.225 | [l] | 9.42 | exact (1.0) | jcph1911-tbl-0004:row3:col1, jcph1911-tbl-0004:row3:col2, Sun_2021_table_3:row4:col1, Sun_2021_table_3:row4:col2 | — | 0.681 (None% RSE) |
| Ka (h) | `Q49` · kabs | 0.861 | h | not captured | [h] | 5.70 | exact (1.0) | jcph1911-tbl-0004:row4:col1, jcph1911-tbl-0004:row4:col2, Sun_2021_table_3:row2:col1, Sun_2021_table_3:row2:col2 | — | 1.76 (None% RSE) |
| ALAG (h) | `Q83` · tlag | 0.323 | h | 1162.8 | [h] | 5.57 | exact (1.0) | jcph1911-tbl-0004:row5:col1, jcph1911-tbl-0004:row5:col2 | — | 0.131 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 6.15 | L/h | 1.7083333333333334e-06 | [l] / [h] | 18.4 | exact (1.0) | jcph1911-tbl-0004:row6:col1, jcph1911-tbl-0004:row6:col2, Sun_2021_table_3:row5:col1, Sun_2021_table_3:row5:col2 | — | 0.223 (None% RSE) |
| wt_on_vc_f_b | `Q900` · wt_on_vc_f_b | 1.0 | not captured | not captured | not captured | not captured | not captured (not captured) | Sun_2021_table_3:row7:col1 | — | not captured |
| theta_cl_f_wt | `Q900` · theta_cl_f_wt | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1911-tbl-0004:row7:col1 | — | not captured |
| theta_q31_hepatic | `Q900` · theta_q31_hepatic | 0.810 | not captured | not captured | not captured | 9.04 | not captured (not captured) | jcph1911-tbl-0004:row10:col1, jcph1911-tbl-0004:row10:col2 | — | not captured |
| theta_cl_f_renal | `Q900` · theta_cl_f_renal | 0.801 | not captured | not captured | not captured | 5.67 | not captured (not captured) | jcph1911-tbl-0004:row11:col1, jcph1911-tbl-0004:row11:col2, Sun_2021_table_3:row13:col1, Sun_2021_table_3:row13:col2 | — | not captured |
| theta_kabs_food | `Q900` · theta_kabs_food | 0.107 | not captured | not captured | not captured | 36.9 | not captured (not captured) | jcph1911-tbl-0004:row12:col1, jcph1911-tbl-0004:row12:col2 | — | not captured |
| theta_tlag_formulation | `Q900` · theta_tlag_formulation | 1.41 | not captured | not captured | not captured | 5.80 | not captured (not captured) | jcph1911-tbl-0004:row14:col1, jcph1911-tbl-0004:row14:col2 | — | not captured |
| theta_q314_wt | `Q900` · theta_q314_wt | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | Sun_2021_table_3:row6:col1 | — | not captured |
| theta_cl_f_smoking | `Q900` · theta_cl_f_smoking | 1.30 | not captured | not captured | not captured | 3.64 | not captured (not captured) | Sun_2021_table_3:row9:col1, Sun_2021_table_3:row9:col2 | — | not captured |
| theta_q87_food | `Q900` · theta_q87_food | 0.943 | not captured | not captured | not captured | 2.26 | not captured (not captured) | Sun_2021_table_3:row10:col1, Sun_2021_table_3:row10:col2 | — | not captured |
| theta_v1_f_age | `Q900` · theta_v1_f_age | 0.356 | not captured | not captured | not captured | 11.8 | not captured (not captured) | Sun_2021_table_3:row11:col1, Sun_2021_table_3:row11:col2 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | 0.875 | not captured | not captured | not captured | not captured | not captured (not captured) | Sun_2021_table_3:row12:col1 | — | not captured |
| theta_q314_race | `Q900` · theta_q314_race | 1.10 | not captured | not captured | not captured | 3.22 | not captured (not captured) | Sun_2021_table_3:row14:col1, Sun_2021_table_3:row14:col2 | — | not captured |
| theta_cl_f_sex | `Q900` · theta_cl_f_sex | 0.862 | not captured | not captured | not captured | 3.56 | not captured (not captured) | Sun_2021_table_3:row15:col1, Sun_2021_table_3:row15:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Vc/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Ka' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ALAG' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Vp/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Q/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Residual variability in σ2 prop' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'VpF' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Interoccasion variability in Ka' routed out of structural estimates ('Interindividual variability')
- unit_dimension_mismatch: 'Ka (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'WT on Vc/F a' — extend the ontology if this is a real PK parameter (source ['jcph1911-tbl-0004:row8:col1'])
- dropped duplicate Q27 ('Rifampin inducer effect (in the presence vs absence of rifampin) on CL/F', value '1.80') — already have one for this compound
- unit_dimension_mismatch: 'Change in ALAG b , c' → Q83 (unit '[luminosity] / [length] ** 2' vs ontology '[time]') — route to review
- dropped duplicate Q83 ('Change in ALAG b , c', value '10.1') — already have one for this compound
- dropped duplicate Q83 ('ALAG (h) a', value '0.782') — already have one for this compound
- covariate level 'WT on Vc/F b' → Q900:wt_on_vc_f_b = 1.0 (linear_fractional on Q27)
- covariate effect for Q31 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q87 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=samidorphan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell jcph1911-tbl-0004:row1:col3 = '34.3‐36.5'
- unparsed cell jcph1911-tbl-0004:row2:col3 = '288‐306'
- unparsed cell jcph1911-tbl-0004:row3:col3 = '102‐146'
- unparsed cell jcph1911-tbl-0004:row4:col3 = '4.77‐8.45'
- unparsed cell jcph1911-tbl-0004:row5:col3 = '0.288‐0.358'
- unparsed cell jcph1911-tbl-0004:row6:col3 = '10.2‐14.0'
- unparsed cell jcph1911-tbl-0004:row9:col3 = '2.54‐2.86'
- unparsed cell jcph1911-tbl-0004:row10:col3 = '0.667‐0.953'
- unparsed cell jcph1911-tbl-0004:row11:col3 = '0.503‐0.637'
- unparsed cell jcph1911-tbl-0004:row12:col3 = '0.0296‐0.184'
- unparsed cell jcph1911-tbl-0004:row13:col3 = '7.92‐12.3'
- unparsed cell jcph1911-tbl-0004:row14:col3 = '1.25‐1.57'
- unparsed cell jcph1911-tbl-0004:row16:col3 = '0.066‐0.107'
- unparsed cell jcph1911-tbl-0004:row17:col3 = '0.034‐0.075'
- unparsed cell jcph1911-tbl-0004:row18:col3 = '1.18‐2.34'
- unparsed cell jcph1911-tbl-0004:row19:col3 = '0.067‐0.195'
- unparsed cell jcph1911-tbl-0004:row20:col3 = '0.354‐1.010'
- unparsed cell jcph1911-tbl-0004:row22:col3 = '0.053‐0.069'
- unparsed cell Sun_2021_table_3:row0:col3 = '14.6‐16.4'
- unparsed cell Sun_2021_table_3:row1:col3 = '627‐685'
- unparsed cell Sun_2021_table_3:row2:col3 = '0.765‐0.957'
- unparsed cell Sun_2021_table_3:row4:col3 = '183‐267'
- unparsed cell Sun_2021_table_3:row5:col3 = '3.94‐8.36'
- unparsed cell Sun_2021_table_3:row8:col3 = '1.64‐1.96'
- unparsed cell Sun_2021_table_3:row9:col3 = '1.21‐1.39'
- unparsed cell Sun_2021_table_3:row10:col3 = '0.901‐0.985'
- unparsed cell Sun_2021_table_3:row11:col3 = '0.273‐0.439'
- unparsed cell Sun_2021_table_3:row13:col3 = '0.712‐0.890'
- unparsed cell Sun_2021_table_3:row14:col3 = '1.03‐1.17'
- unparsed cell Sun_2021_table_3:row15:col3 = '0.802‐0.922'
- unparsed cell Sun_2021_table_3:row17:col3 = '0.137‐0.205'
- unparsed cell Sun_2021_table_3:row18:col3 = '0.084‐0.171'
- unparsed cell Sun_2021_table_3:row19:col3 = '0.003‐0.415'
- unparsed cell Sun_2021_table_3:row20:col3 = '0.259‐0.379'
- unparsed cell Sun_2021_table_3:row23:col3 = '0.455‐0.805'
- unparsed cell Sun_2021_table_3:row24:col3 = '0.0405‐0.0519'
- companion parameter table 3 transcribed (50 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1911-tbl-0004:row1:col1', 'jcph1911-tbl-0004:row1:col2', 'Sun_2021_table_3:row0:col1', 'Sun_2021_table_3:row0:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph1911-tbl-0004:row2:col1', 'jcph1911-tbl-0004:row2:col2', 'Sun_2021_table_3:row1:col1', 'Sun_2021_table_3:row1:col2'] |
| C5_dimension_Q49 | fail | [time] | h | not captured | not captured | ['jcph1911-tbl-0004:row4:col1', 'jcph1911-tbl-0004:row4:col2', 'Sun_2021_table_3:row2:col1', 'Sun_2021_table_3:row2:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1911-tbl-0004:row6:col1', 'jcph1911-tbl-0004:row6:col2', 'Sun_2021_table_3:row5:col1', 'Sun_2021_table_3:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph1911-tbl-0004:row3:col1', 'jcph1911-tbl-0004:row3:col2', 'Sun_2021_table_3:row4:col1', 'Sun_2021_table_3:row4:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['jcph1911-tbl-0004:row5:col1', 'jcph1911-tbl-0004:row5:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.5 L/h | not captured | not captured | ['jcph1911-tbl-0004:row1:col1', 'jcph1911-tbl-0004:row1:col2', 'Sun_2021_table_3:row0:col1', 'Sun_2021_table_3:row0:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 656 L | not captured | not captured | ['jcph1911-tbl-0004:row2:col1', 'jcph1911-tbl-0004:row2:col2', 'Sun_2021_table_3:row1:col1', 'Sun_2021_table_3:row1:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 225 L | not captured | not captured | ['jcph1911-tbl-0004:row3:col1', 'jcph1911-tbl-0004:row3:col2', 'Sun_2021_table_3:row4:col1', 'Sun_2021_table_3:row4:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_samidorphan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sun_2021` / `Sun_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 17:18 UTC</sub>
