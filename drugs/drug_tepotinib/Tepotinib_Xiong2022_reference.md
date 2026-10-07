<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tepotinib&quot;,&quot;href&quot;:&quot;drugs/drug_tepotinib/&quot;},{&quot;label&quot;:&quot;Xiong_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tepotinib — `Tepotinib_Xiong2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Xiong W et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2022)
  ·  DOI: [10.1007/s00280-022-04423-5](https://doi.org/10.1007/s00280-022-04423-5)

## Model component
<dbs-pgx drug="tepotinib" model-id="Tepotinib_Xiong2022_reference" status="needs_review" stale="false" population="patients with cancer and healthy participants" measured-compound="tepotinib" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 15 extracted, plus 6 covariate effects.

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLpar/Fa (L/h) | `Q27` · CL/F | 20.4 | L/h | 5.666666666666666e-06 | [l] / [h] | not captured | llm (0.6) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| Vc,par/Fa (L) | `Q290` · V1/F | 1020 | L | 1.02 | [l] | not captured | llm_corrected (0.6) | Tab3:row4:col1, Tab3:row4:col2 | — | not captured |
| ka (h−1) | `Q49` · kabs | 0.278 | h−1 | 7.722222222222223e-05 | [1] / [h] | not captured | exact (1.0) | Tab3:row5:col1, Tab3:row5:col2 | — | not captured |
| Qpar/Fa (L/h) | `Q80` · Q2/F | 1.32 | L/h | 3.6666666666666667e-07 | [l] / [h] | not captured | llm (0.6) | Tab3:row6:col1, Tab3:row6:col2 | — | not captured |
| Vp,par/Fa (L) | `Q82` · V2/F | 1180 | L | 1.18 | [l] | not captured | llm_corrected (0.6) | Tab3:row7:col1, Tab3:row7:col2 | — | not captured |
| D1 (h) | `Q310` · D1 | 4.09 | h | 14724.0 | [h] | not captured | exact (1.0) | Tab3:row8:col1, Tab3:row8:col2 | — | not captured |
| Fasting state covariate on D1 | `Q900` · equation variable | -0.370 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Tab3:row10:col1, Tab3:row10:col2 | — | not captured |
| DOSE covariate on Fpar (/100 mg) | `Q40` · Fab | -0.0412 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row11:col1, Tab3:row11:col2 | — | not captured |
| Fasting state covariate on Fpar | `Q87` · Frel | -0.209 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row12:col1, Tab3:row12:col2 | — | not captured |
| egfr_at_baseline_covariate_on_clpar_f | `Q900` · egfr_at_baseline_covariate_on_clpar_f | 0.199 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row20:col1, Tab3:row20:col2 | — | not captured |
| body_weight_at_baseline_covariate_on_fpar | `Q900` · body_weight_at_baseline_covariate_on_fpar | -0.475 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row25:col1, Tab3:row25:col2 | — | not captured |
| INR at baseline covariate on Qpar/F | `Q69` · Q/F | 3.81 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Tab3:row27:col1, Tab3:row27:col2 | — | not captured |
| serum_albumin_at_baseline_covariate_on_qpar_f | `Q900` · serum_albumin_at_baseline_covariate_on_qpar_f | 4.14 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row28:col1 | — | not captured |
| CLmeta (L/h) | `Q22` · CL | 40.2 | L/h | 1.116666666666667e-05 | [l] / [h] | not captured | exact (1.0) | Tab3:row42:col1, Tab3:row42:col2 | — | not captured |
| Vc, meta (L) | `Q63` · V1 | 131 | L | 0.131 | [l] | not captured | exact (1.0) | Tab3:row43:col1, Tab3:row43:col2 | — | not captured |
| Qmet a (L/h) | `Q30` · Q | 106 | L/h | 2.9444444444444445e-05 | [l] / [h] | not captured | exact (1.0) | Tab3:row44:col1, Tab3:row44:col2 | — | not captured |
| Vp, meta (L) | `Q64` · V2 | 152 | L | 0.152 | [l] | not captured | exact (1.0) | Tab3:row45:col1, Tab3:row45:col2 | — | not captured |
| egfr_at_baseline_covariate_on_clmet | `Q900` · egfr_at_baseline_covariate_on_clmet | 0.311 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row46:col1, Tab3:row46:col2 | — | not captured |
| body_weight_at_baseline_covariate_on_clmet | `Q900` · body_weight_at_baseline_covariate_on_clmet | -0.696 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row47:col1, Tab3:row47:col2 | — | not captured |
| Non-small cell lung cancer covariate on CLmet | `Q22` · CL | 0.498 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row48:col1, Tab3:row48:col2 | — | not captured |
| Hepatocellular carcinoma covariate on FM | `Q45` · fm | -0.398 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Tab3:row49:col1, Tab3:row49:col2 | — | not captured |
| theta_v1_f_age | `Q900` · theta_v1_f_age | 0.219 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row29:col1, Tab3:row29:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Relative Fpar (CV)' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1'])
- dropped duplicate Q87 ('High-fat meal covariate on Fpar', value '0.320') — already have one for this compound
- dropped duplicate Q87 ('CF1 covariate on Fpar', value '-0.656') — already have one for this compound
- dropped duplicate Q87 ('TF3 covariate on Fpar', value '0.154') — already have one for this compound
- dropped duplicate Q49 ('Fasting state covariate on ka', value '-0.561') — already have one for this compound
- dropped unlinked row (NIL): 'CF1 covariate on ka' — extend the ontology if this is a real PK parameter (source ['Tab3:row17:col1', 'Tab3:row17:col2'])
- dropped duplicate Q49 ('TF1 covariate on ka', value '0.305') — already have one for this compound
- dropped unlinked row (NIL): 'TF1* covariate on ka' — extend the ontology if this is a real PK parameter (source ['Tab3:row19:col1', 'Tab3:row19:col2'])
- covariate level 'eGFR at baseline covariate on CLpar/F' → Q900:egfr_at_baseline_covariate_on_clpar_f = 0.199 (linear_fractional on Q27)
- dropped duplicate Q27 ('Hepatocellular carcinoma covariate on CLpar/F', value '0.130') — already have one for this compound
- dropped duplicate Q27 ('Colorectal cancer covariate on CLpar/F', value '-0.281') — already have one for this compound
- dropped duplicate Q27 ('μ-Opioids covariate on CLpar/F', value '-0.167') — already have one for this compound
- dropped duplicate Q310 ('NCI-ODG class &gt; 0 covariate (liver dysfunction) on D1', value '-0.332') — already have one for this compound
- covariate level 'Body weight at baseline covariate on Fpar' → Q900:body_weight_at_baseline_covariate_on_fpar = -0.475 (linear_fractional on Q27)
- dropped duplicate Q87 ('NCI-ODG class &gt; 0 covariate on Fpar', value '-0.0729') — already have one for this compound
- covariate level 'Serum albumin at baseline covariate on Qpar/F' → Q900:serum_albumin_at_baseline_covariate_on_qpar_f = 4.14 (linear_fractional on Q27)
- dropped duplicate Q290 ('Non-small cell lung cancer covariate on Vc,par/F', value '-0.232') — already have one for this compound
- dropped duplicate Q82 ('Patient/participant covariate on Vp,par/F', value '-0.810') — already have one for this compound
- dropped unlinked row (NIL): 'Study MS200095-0028 covariate on CLpar/F' — extend the ontology if this is a real PK parameter (source ['Tab3:row32:col1', 'Tab3:row32:col2'])
- covariate level 'eGFR at baseline covariate on CLmet' → Q900:egfr_at_baseline_covariate_on_clmet = 0.311 (linear_fractional on Q27)
- covariate level 'Body weight at baseline covariate on CLmet' → Q900:body_weight_at_baseline_covariate_on_clmet = -0.696 (linear_fractional on Q27)
- dropped duplicate Q30 ('East Asian on Qmet', value '1.40') — already have one for this compound
- dropped duplicate Q64 ('Patient/participant covariate on Vp,met', value '2.31') — already have one for this compound
- dropped duplicate Q63 ('NCI-ODG class &gt; 0 covariate on Vc.met', value '0.520') — already have one for this compound
- metabolite msc2571109a: Q351→Q22 — the model states fm, so its CL/V are not fm-divided
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tepotinib
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- row roles (LLM): model_class=compartmental; 55/55 row label(s) assigned, 18 linked by role; re-tagged tepotinib→parent ×79, tepotinib→MSC2571109A ×37
- molar mass: no plausible PubChem entry for 'MSC2571109A' ('Tepotinib M506 metabolite') — left in mass units
- molar mass: none found for 'MSC2571109A' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row42:col1', 'Tab3:row42:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row44:col1', 'Tab3:row44:col2'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab3:row8:col1', 'Tab3:row8:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row43:col1', 'Tab3:row43:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row45:col1', 'Tab3:row45:col2'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row7:col1', 'Tab3:row7:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row48:col1', 'Tab3:row48:col2'] |
| C5_unit_missing_Q69 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row27:col1', 'Tab3:row27:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 40.2 L/h | not captured | not captured | ['Tab3:row42:col1', 'Tab3:row42:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 20.4 L/h | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.02e+03 L | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 131 L | not captured | not captured | ['Tab3:row43:col1', 'Tab3:row43:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 152 L | not captured | not captured | ['Tab3:row45:col1', 'Tab3:row45:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.18e+03 L | not captured | not captured | ['Tab3:row7:col1', 'Tab3:row7:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tepotinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Xiong_2022` / `Xiong_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:14 UTC</sub>
