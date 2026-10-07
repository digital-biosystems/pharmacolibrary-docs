<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tislelizumab&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/&quot;},{&quot;label&quot;:&quot;Liu_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tislelizumab_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tislelizumab — `Tislelizumab_Liu2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Liu X et al., Model-Informed Development of a Subcuta…, Clinical and translational… (2026)
  ·  DOI: [10.1111/cts.70649](https://doi.org/10.1111/cts.70649)

## Model component
<dbs-pgx drug="tislelizumab" model-id="Tislelizumab_Liu2026_reference" status="rejected" stale="false" population="patients with locally advanced or metastatic non-small cell lung cancer" measured-compound="tislelizumab" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 6 covariate effects.

**Parameterization:** CL/F, Q/F, Q3/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/d | `Q27` · CL/F | 0.153 | L/d | 1.7708333333333335e-09 | [l] / [d] | not captured | exact (1.0) | cts70649-tbl-0001:row1:col1 | — | 26.3 (None% RSE) |
| Vc/F, L | `Q290` · V1/F | 3.05 | L | 0.0030499999999999998 | [l] | not captured | exact (1.0) | cts70649-tbl-0001:row2:col1 | — | 16.7 (None% RSE) |
| V2/F, L | `Q82` · V2/F | 1.27 | L | 0.00127 | [l] | not captured | exact (1.0) | cts70649-tbl-0001:row3:col1 | — | 74.7 (None% RSE) |
| V3/F, L | `Q78` · V3/F | 2.1 | L | 0.0021000000000000003 | [l] | not captured | exact (1.0) | cts70649-tbl-0001:row4:col1 | — | 99.9 (None% RSE) |
| Q2/F, L/d | `Q69` · Q/F | 0.74 | L/d | 8.564814814814814e-09 | [l] / [d] | not captured | special_case (0.95) | cts70649-tbl-0001:row5:col1 | — | not captured |
| Q3/F, L/d | `Q309` · Q3/F | 0.092 | L/d | 1.0648148148148147e-09 | [l] / [d] | not captured | exact (1.0) | cts70649-tbl-0001:row6:col1 | — | not captured |
| effect_of_baseline_albumin_on_cl_f | `Q900` · effect_of_baseline_albumin_on_cl_f | -0.457 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row8:col1 | — | not captured |
| effect_of_baseline_body_weight_on_vc_f | `Q900` · effect_of_baseline_body_weight_on_vc_f | 0.397 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row13:col1 | — | not captured |
| Ka thigh, 1/d | `Q49` · kabs | 0.189 | 1/d | 2.1875e-06 | [1] / [d] | not captured | llm_confirmed (0.6) | cts70649-tbl-0001:row16:col1 | — | 38.2 (None% RSE) |
| theta_cl_f_weight | `Q900` · theta_cl_f_weight | 0.565 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row7:col1 | — | not captured |
| theta_cl_f_ada | `Q900` · theta_cl_f_ada | 0.111 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row10:col1 | — | not captured |
| theta_v1_f_sex | `Q900` · theta_v1_f_sex | -0.116 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row14:col1 | — | not captured |
| theta_v1_f_age | `Q900` · theta_v1_f_age | 0.0966 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70649-tbl-0001:row15:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'Vc/F' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'V2/F' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'V3/F' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'Ka, thigh' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'Bioavailability, thigh' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'Ka, abdomen' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- table section iiv: 'Bioavailability, abdomen' routed out of structural estimates ('ω (on SD scale)—interindividual variability, %')
- covariate level 'Effect of baseline albumin on CL/F' → Q900:effect_of_baseline_albumin_on_cl_f = -0.457 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Effect of baseline tumor burden on CL/F' — extend the ontology if this is a real PK parameter (source ['cts70649-tbl-0001:row9:col1'])
- dropped duplicate Q27 ('Effect of gastric cancer status on CL/F', value '0.069') — already have one for this compound
- dropped duplicate Q27 ('Effect of classic Hodgkin lymphoma status on CL/F', value '-0.216') — already have one for this compound
- covariate level 'Effect of baseline body weight on Vc/F' → Q900:effect_of_baseline_body_weight_on_vc_f = 0.397 (linear_fractional on Q27)
- dropped duplicate Q49 ('Ka abdomen, 1/d', value '0.247') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tislelizumab
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- molar mass: none found for 'tislelizumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts70649-tbl-0001:row16:col3 = '6.1%'
- unparsed cell cts70649-tbl-0001:row17:col3 = '3.2%'
- unparsed cell cts70649-tbl-0001:row18:col3 = '10.9%'
- unparsed cell cts70649-tbl-0001:row19:col3 = '5.9%'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70649-tbl-0001:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70649-tbl-0001:row2:col1'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70649-tbl-0001:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cts70649-tbl-0001:row16:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70649-tbl-0001:row5:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70649-tbl-0001:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70649-tbl-0001:row3:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.866 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.00638 L/h | not captured | not captured | ['cts70649-tbl-0001:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 3.05 L | not captured | not captured | ['cts70649-tbl-0001:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.27 L | not captured | not captured | ['cts70649-tbl-0001:row3:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tislelizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Liu_2026` / `Liu_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:11 UTC</sub>
