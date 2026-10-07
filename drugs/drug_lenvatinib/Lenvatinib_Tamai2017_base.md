<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lenvatinib&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/&quot;},{&quot;label&quot;:&quot;Tamai_2017 \u00b7 base&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lenvatinib — `Lenvatinib_Tamai2017_base`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Tamai T et al., Dose Finding of Lenvatinib in Subjects…, Journal of clinical pharmac… (2017)
  ·  DOI: [10.1002/jcph.917](https://doi.org/10.1002/jcph.917)

## Model component
<dbs-pgx drug="lenvatinib" model-id="Lenvatinib_Tamai2017_base" status="rejected" stale="false" population="healthy subjects and subjects with cancer, including HCC" measured-compound="lenvatinib" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Basal CL/F in L/h [ΘCL] | `Q27` · CL/F | 6.50 | L/h | 1.8055555555555557e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | jcph917-tbl-0002:row3:col1, jcph917-tbl-0002:row3:col2 | — | not captured |
| Ka (L/h) | `Q49` · kabs | 1.02 | L/h | not captured | [l] / [h] | not captured | exact (1.0) | jcph917-tbl-0002:row20:col1, jcph917-tbl-0002:row20:col2 | — | not captured |
| D1 (hours) | `Q310` · D1 | 1.05 | hours | 3780.0 | [h] | not captured | exact (1.0) | jcph917-tbl-0002:row21:col1, jcph917-tbl-0002:row21:col2 | — | not captured |
| theta_q40_formulation_f1_capsule_vs_tablet | `Q900` · theta_q40_formulation_f1_capsule_vs_tablet | 0.832 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph917-tbl-0002:row22:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Q1/F [L/h] = ΘQ1 · (WGT/75) ΘWGT1 | Q69 | not captured | llm_confirmed |
| Q2/F [L/h] = ΘQ2 · (WGT/75) ΘWGT1 | Q80 | not captured | llm_confirmed |
| V1/F [L] = ΘV1 · (WGT/75) ΘWGT2 | Q290 | not captured | llm_confirmed |
| V2/F [L] = ΘV2 · (WGT/75) ΘWGT2 | Q82 | not captured | llm_confirmed |
| V3/F [L] = ΘV3 · (WGT/75) ΘWGT2 | Q78 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q69 ('Basal Q1/F in L/h [ΘQ1]', value '3.91') — already have one for this compound
- dropped duplicate Q80 ('Basal Q2/F in L/h [ΘQ2]', value '0.724') — already have one for this compound
- unit_dimension_mismatch: 'Basal V1/F in L [ΘV1]' → Q290 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q290 ('Basal V1/F in L [ΘV1]', value '45.6') — already have one for this compound
- unit_dimension_mismatch: 'Basal V2/F in L [ΘV2]' → Q82 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q82 ('Basal V2/F in L [ΘV2]', value '31.4') — already have one for this compound
- unit_dimension_mismatch: 'Basal V3/F in L [ΘV3]' → Q78 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q78 ('Basal V3/F in L [ΘV3]', value '33.6') — already have one for this compound
- unit_dimension_mismatch: 'Ka (L/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- routed 'Proportional (%CV) (Clinical pharmacology studies)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Proportional (%CV) (Patient studies)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Proportional (%CV) (TAD ≤ 2 hours)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Additional (ng/mL) (TAD ≤ 2 hours)' — extend the ontology if this is a real PK parameter (source ['jcph917-tbl-0002:row26:col1'])
- covariate effect for Q40 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lenvatinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- model-stage split: 'base model' is the base model of Tamai_2017 (paper reports 2 stages: base model, final model); same population, different model-building step
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph917-tbl-0002:row3:col5 = '6.42 (6.07‐6.76)'
- unparsed cell jcph917-tbl-0002:row4:col5 = '0.711 (0.538‐0.886)'
- unparsed cell jcph917-tbl-0002:row5:col5 = '1.30 (1.23‐1.38)'
- unparsed cell jcph917-tbl-0002:row6:col5 = '0.921 (0.893‐0.951)'
- unparsed cell jcph917-tbl-0002:row7:col5 = '1.19 (1.11‐1.27)'
- unparsed cell jcph917-tbl-0002:row8:col5 = '0.855 (0.807‐0.910)'
- unparsed cell jcph917-tbl-0002:row10:col5 = '3.99 (3.57‐4.49)'
- unparsed cell jcph917-tbl-0002:row12:col5 = '0.738 (0.639‐0.845)'
- unparsed cell jcph917-tbl-0002:row14:col5 = '46.8 (43.9‐49.8)'
- unparsed cell jcph917-tbl-0002:row15:col5 = '1.08 (0.876‐1.28)'
- unparsed cell jcph917-tbl-0002:row17:col5 = '31.1 (28.3‐33.7)'
- unparsed cell jcph917-tbl-0002:row19:col5 = '34.7 (31.6‐37.7)'
- unparsed cell jcph917-tbl-0002:row20:col5 = '1.04 (0.933‐1.13)'
- unparsed cell jcph917-tbl-0002:row21:col5 = '1.06 (0.987‐1.14)'
- unparsed cell jcph917-tbl-0002:row22:col5 = '0.867 (0.815‐0.908)'
- unparsed cell jcph917-tbl-0002:row23:col5 = '17.1 (15.5‐18.8)'
- unparsed cell jcph917-tbl-0002:row24:col5 = '30.1 (27.7‐32.2)'
- unparsed cell jcph917-tbl-0002:row25:col5 = '44.8 (40.7‐48.8)'
- unparsed cell jcph917-tbl-0002:row26:col5 = '7.50 (4.62‐9.85)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph917-tbl-0002:row3:col1', 'jcph917-tbl-0002:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph917-tbl-0002:row13:col1', 'jcph917-tbl-0002:row13:col2'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['jcph917-tbl-0002:row21:col1', 'jcph917-tbl-0002:row21:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['jcph917-tbl-0002:row20:col1', 'jcph917-tbl-0002:row20:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph917-tbl-0002:row9:col1', 'jcph917-tbl-0002:row9:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph917-tbl-0002:row18:col1', 'jcph917-tbl-0002:row18:col2'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph917-tbl-0002:row11:col1', 'jcph917-tbl-0002:row11:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph917-tbl-0002:row16:col1', 'jcph917-tbl-0002:row16:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.5 L/h | not captured | not captured | ['jcph917-tbl-0002:row3:col1', 'jcph917-tbl-0002:row3:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lenvatinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tamai_2017` / `Tamai_2017::base`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:38 UTC</sub>
