<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cladribine&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/&quot;},{&quot;label&quot;:&quot;Savic_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_reference&quot;,&quot;label&quot;:&quot;Lindemalm_2005_interindividual_variability&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_reference&quot;,&quot;label&quot;:&quot;Lindemalm_2005_population_average&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lu2024_reference&quot;,&quot;label&quot;:&quot;Lu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lu2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cladribine — `Cladribine_Savic2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The cladribine record mixes absolute parameters (CLR 3.52 L/h, CLNR 23.4 L/h, V1 44.0 L) with bioavailability-adjusted ones (V1/F 365 L, apparent hepatic CL 653 L/h) despite Fab 0.456, so apparent-parameter coherence is violated by a double correction and the model was rejected.**

The record carries both a bioavailability fraction (Fab 0.456) and F-adjusted apparent parameters — V1/F of 365 L and apparent hepatic clearance of 653 L/h — alongside unadjusted parameters for the same molecule, V1 of 44.0 L, renal clearance of 3.52 L/h and non-renal clearance of 23.4 L/h. Applying the bioavailability correction on top of parameters already expressed with it double-corrects the cladribine disposition, which is the coherence failure cited for rejection. No other failed checks or inconclusive comparisons are reported. Extracted — cladribine: CLR 3.52, CLNR 23.4, V1 44, Q3 14.3, Q 53.7, V3 347, kabs 1.08, Fab 0.456, … (+6).

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:25:26.476809+00:00) predates the upstream re-run (2026-10-07 16:37:26.172814+00:00). Current validate status: `rejected`.

## Citation
Savic RM et al., Population Pharmacokinetics of Cladribi…, Clinical pharmacokinetics (2017)
  ·  DOI: [10.1007/s40262-017-0516-6](https://doi.org/10.1007/s40262-017-0516-6)

## Model component
<dbs-pgx drug="cladribine" model-id="Cladribine_Savic2017_reference" status="rejected" stale="true" population="adults with multiple sclerosis" measured-compound="cladribine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 14 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLR coefficientb (typical patient with CLCR = 6.31), L/hc | `Q22` · CL | 3.52 | μg/h | not captured | [µg] / [h] | 9.26 | exact (1.0) | Tab4:row2:col1, Tab4:row2:col2 | — | not captured |
| CLNR, L/h | `Q79` · CLNR | 23.4 | L/h | 6.5000000000000004e-06 | [l] / [h] | 9.58 | exact (1.0) | Tab4:row3:col1, Tab4:row3:col2 | — | 0.00574 (64.41% RSE) |
| Central volume, L | `Q63` · V1 | 44.0 | L | 0.044 | [l] | 22.77 | exact (1.0) | Tab4:row4:col1, Tab4:row4:col2 | — | not captured |
| Intercompartmental Q3, L/h | `Q30` · Q | 14.3 | L/h | 3.972222222222223e-06 | [l] / [h] | 7.73 | exact (1.0) | Tab4:row5:col1, Tab4:row5:col2 | — | not captured |
| Intercompartmental Q4, L/h | `Q99` · Q2 | 53.7 | L/h | 1.4916666666666667e-05 | [l] / [h] | 19.06 | exact (1.0) | Tab4:row6:col1, Tab4:row6:col2 | — | not captured |
| Peripheral volume V3, L | `Q64` · V2 | 347 | L | 0.34700000000000003 | [l] | 6.07 | exact (1.0) | Tab4:row7:col1, Tab4:row7:col2 | — | not captured |
| Peripheral volume V4, L | `Q77` · V3 | 89.5 | L | 0.0895 | [l] | 7.97 | exact (1.0) | Tab4:row8:col1, Tab4:row8:col2 | — | 0.0365 (28.47% RSE) |
| Absorption rate constant, h−1 | `Q49` · kabs | 1.08 | h−1 | 0.00030000000000000003 | [1] / [h] | 21.14 | exact (1.0) | Tab4:row9:col1, Tab4:row9:col2 | — | 0.102 (62.53% RSE) |
| Bioavailability | `Q40` · Fab | 0.456 | not captured | not captured | not captured | 7.03 | exact (1.0) | Tab4:row11:col1, Tab4:row11:col2 | — | not captured |
| Mean transit time (fed state), h | `Q81` · MTT | 0.910 | h | not captured | [h] | 11.03 | llm_confirmed (0.6) | Tab4:row14:col1, Tab4:row14:col2 | — | not captured |
| Number of transit compartments | `Q311` · n_transit | 2.24 | not captured | not captured | not captured | 27.15 | exact (1.0) | Tab4:row15:col1, Tab4:row15:col2 | — | not captured |
| CLR e (Vmax), μg/h | `Q22` · CL | 0.00280 | μg/h | not captured | [µg] / [h] | 25.53 | exact (1.0) | Tab4:row29:col1, Tab4:row29:col2 | — | not captured |
| Apparent hepatic CL, L/hf | `Q27` · CL/F | 653 | L/h | 0.0001813888888888889 | L/h | 10.64 | exact (1.0) | Tab4:row31:col1, Tab4:row31:col2 | — | not captured |
| Apparent central volume V, Lf | `Q290` · V1/F | 365 | L | 0.365 | L | 13.27 | exact (1.0) | Tab4:row32:col1, Tab4:row32:col2 | — | not captured |
| theta_q83_category | `Q900` · theta_q83_category | 0.319 | not captured | not captured | not captured | 12.41 | not captured (not captured) | Tab4:row13:col1, Tab4:row13:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('Absorption rate constant (unknown/fed state), h−1', value '1.03') — already have one for this compound
- dropped duplicate Q79 ('Fold increase in CLNR in the presence of IFNβ-1a', value '1.21') — already have one for this compound
- unit_dimension_mismatch: 'CLR e (Vmax), μg/h' → Q22 (unit '[mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'CLR e (Km), ng/L' → Q22 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CLR e (Km), ng/L', value '0.0114') — already have one for this compound
- unit inherited for CL (Q22): 'μg/h' from a same-Q-code sibling (this row's label had no unit)
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Apparent hepatic CL, L/hf' → L/h (from the paper text: "The text states: 'Apparent CLNR and volume of distribution for CAde were found to be 653 L/h and 365 L, respectively.' T")
- implicit units: 'Apparent central volume V, Lf' → L (from the paper text: "The text states: 'Apparent CLNR and volume of distribution for CAde were found to be 653 L/h and 365 L, respectively.' T")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cladribine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [1]
- status held at route_to_review — not promoted
- row roles: 2 per-group rows of cladribine absorption_rate_constant but 0 reference group(s) — kept as printed
- row roles: 4 per-group rows of cladribine residual_error but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 32/32 row label(s) assigned, 30 linked by role; re-tagged cladribine→parent ×54, cladribine→2-chloroadenine ×12
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 14 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | [mass] / [time] | μg/h | not captured | not captured | ['Tab4:row29:col1', 'Tab4:row29:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row31:col1', 'Tab4:row31:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row32:col1', 'Tab4:row32:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row5:col1', 'Tab4:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab4:row9:col1', 'Tab4:row9:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row4:col1', 'Tab4:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row7:col1', 'Tab4:row7:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row8:col1', 'Tab4:row8:col2'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col2'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row6:col1', 'Tab4:row6:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | μg/h | not captured | not captured | ['Tab4:row2:col1', 'Tab4:row2:col2'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.456 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 653 L/h | not captured | not captured | ['Tab4:row31:col1', 'Tab4:row31:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 365 L | not captured | not captured | ['Tab4:row32:col1', 'Tab4:row32:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 44 L | not captured | not captured | ['Tab4:row4:col1', 'Tab4:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 347 L | not captured | not captured | ['Tab4:row7:col1', 'Tab4:row7:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cladribine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Savic_2017` / `Savic_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:37 UTC</sub>
