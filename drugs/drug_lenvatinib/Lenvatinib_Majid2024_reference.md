<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lenvatinib&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/&quot;},{&quot;label&quot;:&quot;Majid_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lenvatinib — `Lenvatinib_Majid2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Majid O et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13130](https://doi.org/10.1002/psp4.13130)

## Model component
<dbs-pgx drug="lenvatinib" model-id="Lenvatinib_Majid2024_reference" status="rejected" stale="false" population="subjects from 19 studies, including healthy subjects and patients with RR-DTC, RCC, and HCC" measured-compound="lenvatinib" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 6.28 | L/h | 1.7444444444444444e-06 | [l] / [h] | 2.88 | exact (1.0) | psp413130-tbl-0001:row2:col1, psp413130-tbl-0001:row2:col2 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 46.0 | L | 0.046 | [l] | 2.61 | exact (1.0) | psp413130-tbl-0001:row3:col1, psp413130-tbl-0001:row3:col2 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 28.3 | L | 0.028300000000000002 | [l] | 5.90 | exact (1.0) | psp413130-tbl-0001:row4:col1, psp413130-tbl-0001:row4:col2 | — | not captured |
| V3/F (L) | `Q78` · V3/F | 30.9 | L | 0.0309 | [l] | 3.09 | exact (1.0) | psp413130-tbl-0001:row5:col1, psp413130-tbl-0001:row5:col2 | — | not captured |
| Q1 (L/h) | `Q30` · Q | 3.57 | L/h | 9.916666666666666e-07 | [l] / [h] | 2.89 | exact (1.0) | psp413130-tbl-0001:row6:col1, psp413130-tbl-0001:row6:col2 | — | not captured |
| Ka [1/h] | `Q49` · kabs | 0.803 | 1/h | 0.00022305555555555558 | [1] / [h] | 4.36 | llm_confirmed (0.6) | psp413130-tbl-0001:row8:col1, psp413130-tbl-0001:row8:col2 | — | not captured |
| D1 [h] | `Q310` · D1 | 1.27 | h | 4572.0 | [h] | 3.61 | llm_confirmed (0.6) | psp413130-tbl-0001:row9:col1, psp413130-tbl-0001:row9:col2 | — | not captured |
| F1 | `Q40` · Fab | 0.882 | not captured | not captured | not captured | 1.10 | exact (1.0) | psp413130-tbl-0001:row10:col1, psp413130-tbl-0001:row10:col2 | — | not captured |
| ALP (&gt;ULN) ~ CL/F (ratio) | `Q31` · CL_ratio | 0.910 | ratio | not captured | [ratio] | 0.956 | llm_corrected (0.6) | psp413130-tbl-0001:row13:col1, psp413130-tbl-0001:row13:col2 | — | not captured |
| theta_cl_ratio_cyp3a4_power | `Q900` · theta_cl_ratio_cyp3a4_power | 0.896 | not captured | not captured | not captured | 5.30 | not captured (not captured) | psp413130-tbl-0001:row12:col1, psp413130-tbl-0001:row12:col2 | — | not captured |
| theta_cl_ratio_albumin_power | `Q900` · theta_cl_ratio_albumin_power | 0.900 | not captured | not captured | not captured | 1.98 | not captured (not captured) | psp413130-tbl-0001:row14:col1, psp413130-tbl-0001:row14:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional (CV%; healthy subjects studies)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional (CV%; Patients studies)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional (CV%; TAD ≤2 h)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additional (ng/mL; TAD ≤2 h)' routed out of structural estimates ('Residual variability')
- dropped duplicate Q30 ('Q2 (L/h)', value '0.688') — already have one for this compound
- unit_dimension_mismatch: 'ALP (&gt;ULN) ~ CL/F (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Healthy population ~ CL/F (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q31 ('Healthy population ~ CL/F (ratio)', value '1.19') — already have one for this compound
- unit_dimension_mismatch: 'DTC population ~ CL/F (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q31 ('DTC population ~ CL/F (ratio)', value '0.951') — already have one for this compound
- unit_dimension_mismatch: 'HCC population ~ CL/F (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q31 ('HCC population ~ CL/F (ratio)', value '0.862') — already have one for this compound
- unit_dimension_mismatch: 'RCC population ~ CL/F (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q31 ('RCC population ~ CL/F (ratio)', value '0.851') — already have one for this compound
- dropped duplicate Q27 ('CL/F', value '35.6') — already have one for this compound
- dropped duplicate Q290 ('V1/F', value '42.8') — already have one for this compound
- dropped duplicate Q82 ('V2/F', value '68.2') — already have one for this compound
- dropped duplicate Q78 ('V3/F', value '36.2') — already have one for this compound
- dropped duplicate Q49 ('Ka', value '58.8') — already have one for this compound
- dropped duplicate Q310 ('D1', value '96.7') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['psp413130-tbl-0001:footnote', 'psp413130-tbl-0001:footnote', 'psp413130-tbl-0001:footnote', 'psp413130-tbl-0001:footnote', 'psp413130-tbl-0001:footnote', 'psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.896 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.9 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.91 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1.19 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.951 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.862 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.851 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.882 (source ['psp413130-tbl-0001:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lenvatinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp413130-tbl-0001:row2:col3 = '6.33 (5.93–6.63)'
- unparsed cell psp413130-tbl-0001:row3:col3 = '46.0 (43.5–48.3)'
- unparsed cell psp413130-tbl-0001:row4:col3 = '28.2 (26.1–30.5)'
- unparsed cell psp413130-tbl-0001:row5:col3 = '31.1 (28.6–33.3)'
- unparsed cell psp413130-tbl-0001:row6:col3 = '3.60 (3.23–3.94)'
- unparsed cell psp413130-tbl-0001:row7:col3 = '0.696 (0.606–0.774)'
- unparsed cell psp413130-tbl-0001:row8:col3 = '0.797 (0.725–0.867)'
- unparsed cell psp413130-tbl-0001:row9:col3 = '1.27 (1.18–1.35)'
- unparsed cell psp413130-tbl-0001:row10:col3 = '0.883 (0.850–0.915)'
- unparsed cell psp413130-tbl-0001:row12:col3 = '0.897 (0. 835–0.958)'
- unparsed cell psp413130-tbl-0001:row13:col3 = '0.913 (0.883–0.937)'
- unparsed cell psp413130-tbl-0001:row14:col3 = '0.906 (0.831–0.968)'
- unparsed cell psp413130-tbl-0001:row15:col3 = '1.18 (1.11–1.28)'
- unparsed cell psp413130-tbl-0001:row16:col3 = '0.944 (0.885–1.02)'
- unparsed cell psp413130-tbl-0001:row17:col3 = '0.856 (0.810–0.915)'
- unparsed cell psp413130-tbl-0001:row18:col3 = '0.847 (0.797–0.905)'
- unparsed cell psp413130-tbl-0001:row20:col3 = '35.5 (33.4–37.7)'
- unparsed cell psp413130-tbl-0001:row21:col3 = '42.4 (38.7–46.6)'
- unparsed cell psp413130-tbl-0001:row22:col3 = '67.4 (59.8–75.3)'
- unparsed cell psp413130-tbl-0001:row23:col3 = '37.2 (27.5–43.2)'
- unparsed cell psp413130-tbl-0001:row24:col3 = '58.0 (47.9–68.9)'
- unparsed cell psp413130-tbl-0001:row25:col3 = '96.7 (91.8–102.1)'
- unparsed cell psp413130-tbl-0001:row27:col3 = '17.5 (15.9–19.1)'
- unparsed cell psp413130-tbl-0001:row28:col3 = '37.6 (36.6–38.6)'
- unparsed cell psp413130-tbl-0001:row29:col3 = '43.5 (39.7–45.9)'
- unparsed cell psp413130-tbl-0001:row30:col3 = '19.9 (14.3–25.2)'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413130-tbl-0001:row2:col1', 'psp413130-tbl-0001:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413130-tbl-0001:row3:col1', 'psp413130-tbl-0001:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413130-tbl-0001:row6:col1', 'psp413130-tbl-0001:row6:col2'] |
| C5_dimension_Q31 | fail | dimensionless | ratio | not captured | not captured | ['psp413130-tbl-0001:row13:col1', 'psp413130-tbl-0001:row13:col2'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['psp413130-tbl-0001:row9:col1', 'psp413130-tbl-0001:row9:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413130-tbl-0001:row8:col1', 'psp413130-tbl-0001:row8:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413130-tbl-0001:row5:col1', 'psp413130-tbl-0001:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413130-tbl-0001:row4:col1', 'psp413130-tbl-0001:row4:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.28 L/h | not captured | not captured | ['psp413130-tbl-0001:row2:col1', 'psp413130-tbl-0001:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 46 L | not captured | not captured | ['psp413130-tbl-0001:row3:col1', 'psp413130-tbl-0001:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 28.3 L | not captured | not captured | ['psp413130-tbl-0001:row4:col1', 'psp413130-tbl-0001:row4:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lenvatinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Majid_2024` / `Majid_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:38 UTC</sub>
