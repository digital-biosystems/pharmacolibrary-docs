<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;copanlisib&quot;,&quot;href&quot;:&quot;drugs/drug_copanlisib/&quot;},{&quot;label&quot;:&quot;Morcos_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# copanlisib — `Copanlisib_Morcos2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000)

## Model component
<dbs-pgx drug="copanlisib" model-id="Copanlisib_Morcos2023_reference" status="rejected" stale="false" population="patients across nine phase I–III studies" measured-compound="copanlisib" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLpop | `Q22` · CL | 22.2 | L/h | 6.166666666666667e-06 | L/h | 3.18 | llm (0.6) | psp413000-tbl-0002:row2:col2, psp413000-tbl-0002:row2:col3, psp413000-tbl-0002:row2:col4, psp413000-tbl-0002:row2:col5 | — | 0.124 (6.07% RSE) |
| V1pop | `Q63` · V1 | 92.1 | L | 0.0921 | L | 7.47 | llm (0.6) | psp413000-tbl-0002:row3:col2, psp413000-tbl-0002:row3:col3, psp413000-tbl-0002:row3:col4, psp413000-tbl-0002:row3:col5 | — | 0.846 (8.94% RSE) |
| Q2 | `Q30` · Q | 79.3 | L/h | 2.2027777777777775e-05 | L/h | 1.58 | special_case (0.95) | psp413000-tbl-0002:row4:col2, psp413000-tbl-0002:row4:col3, psp413000-tbl-0002:row4:col4, psp413000-tbl-0002:row4:col5 | — | not captured |
| V2 | `Q64` · V2 | 508 | L | 0.508 | L | 2.54 | exact (1.0) | psp413000-tbl-0002:row5:col2, psp413000-tbl-0002:row5:col3, psp413000-tbl-0002:row5:col4, psp413000-tbl-0002:row5:col5 | — | not captured |
| Q3 | `Q308` · Q3 | 7.34 | L/h | 2.038888888888889e-06 | L/h | 6.96 | exact (1.0) | psp413000-tbl-0002:row6:col2, psp413000-tbl-0002:row6:col3, psp413000-tbl-0002:row6:col4, psp413000-tbl-0002:row6:col5 | — | not captured |
| V3 | `Q77` · V3 | 522 | L | 0.522 | L | 4.26 | exact (1.0) | psp413000-tbl-0002:row7:col2, psp413000-tbl-0002:row7:col3, psp413000-tbl-0002:row7:col4, psp413000-tbl-0002:row7:col5 | — | not captured |
| ΘRIFCL | `Q900` · equation variable | 1.91 | THETA | not captured | [theta] | 3.56 | llm (0.6) | psp413000-tbl-0002:row8:col2, psp413000-tbl-0002:row8:col3, psp413000-tbl-0002:row8:col4, psp413000-tbl-0002:row8:col5 | — | not captured |
| ΘJAPCL | `Q27` · CL/F | -0.204 | THETA | not captured | [theta] | 29.3 | llm (0.6) | psp413000-tbl-0002:row15:col2, psp413000-tbl-0002:row15:col3, psp413000-tbl-0002:row15:col4, psp413000-tbl-0002:row15:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ 2' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'CV g' routed out of structural estimates ('Residual error (SIGMA)')
- unit_dimension_unknown: 'THETA' (CL)
- unit_dimension_unknown: 'THETA' (V1)
- unit_dimension_unknown: 'THETA' (equation variable)
- dropped duplicate Q900 ('ΘITRACL', value '-0.361') — already have one for this compound
- dropped duplicate Q900 ('Θ17067CL', value '-0.184') — already have one for this compound
- dropped duplicate Q900 ('ΘSEXV1', value '-0.429') — already have one for this compound
- dropped duplicate Q900 ('ΘSEXCL', value '-0.167') — already have one for this compound
- dropped duplicate Q22 ('ΘNCICL', value '-0.192') — already have one for this compound
- dropped duplicate Q900 ('ΘRIFV1', value '1.08') — already have one for this compound
- unit_dimension_unknown: 'THETA' (CL/F)
- unit_dimension_unknown: 'CV f' (CL)
- dropped duplicate Q22 ('CL (CV f )', value '36.3') — already have one for this compound
- unit_dimension_unknown: 'shrinkage' (CL)
- dropped duplicate Q22 ('CL (shrinkage)', value '22.5') — already have one for this compound
- unit_dimension_unknown: 'CV f' (V1)
- dropped duplicate Q63 ('V1 (CV f )', value '115') — already have one for this compound
- unit_dimension_unknown: 'shrinkage' (V1)
- dropped duplicate Q63 ('V1 (shrinkage)', value '27.3') — already have one for this compound
- implicit units: 'CLpop' → L/h (from the popPK convention: 'No unit is stated in the supplied text. CL is total clearance, conventionally reported in L/h; 22.2 is consistent with t')
- implicit units: 'V1pop' → L (from the popPK convention: 'No unit is stated in the supplied text. V1 is a compartment volume, conventionally reported in L; 92.1 is consistent wit')
- implicit units: 'Q2' → L/h (from the popPK convention: 'No unit is stated in the supplied text. Q2 is an intercompartmental clearance, conventionally reported in L/h; 79.3 is c')
- implicit units: 'V2' → L (from the popPK convention: 'No unit is stated in the supplied text. V2 is a compartment volume, conventionally reported in L; 508 is consistent with')
- implicit units: 'Q3' → L/h (from the popPK convention: 'No unit is stated in the supplied text. Q3 is an intercompartmental clearance, conventionally reported in L/h; 7.34 is c')
- implicit units: 'V3' → L (from the popPK convention: 'No unit is stated in the supplied text. V3 is a compartment volume, conventionally reported in L; 522 is consistent with')
- implicit units: 'ΘJAPCL' — the LLM proposed '1', whose dimension does not fit Q27; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=copanlisib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell psp413000-tbl-0002:row3:col6 = 'Volume of distribution for compartment 1 for a patient with reference values of covariates e'
- unparsed cell psp413000-tbl-0002:row4:col6 = 'Inter‐compartment clearance for compartments 1 and 2'
- unparsed cell psp413000-tbl-0002:row5:col6 = 'Volume of distribution for compartment 2'
- unparsed cell psp413000-tbl-0002:row6:col6 = 'Inter‐compartment clearance for compartments 1 and 3'
- unparsed cell psp413000-tbl-0002:row7:col6 = 'Volume of distribution for compartment 3'
- unparsed cell psp413000-tbl-0002:row10:col6 = 'Parameter describing influence of study 17067 (CHRONOS‐3) on clearance'
- unparsed cell psp413000-tbl-0002:row11:col6 = 'Parameter describing influence of sex on V1'
- unparsed cell psp413000-tbl-0002:row14:col6 = 'Parameter describing influence of rifampin on V1'
- unparsed cell psp413000-tbl-0002:row20:col6 = 'Variance of exponential inter‐individual variability on V1pop'
- unparsed cell psp413000-tbl-0002:row24:col6 = 'Variance of additive residual error for log‐transformed observations during first 20 min of an infusion'
- unparsed cell psp413000-tbl-0002:row26:col6 = 'Variance of additive residual error for log‐transformed observations in phase I and phase II studies after first 20 min of an infusion'
- unparsed cell psp413000-tbl-0002:row28:col6 = 'Variance of additive residual error for log‐transformed observations in phase III for study 17067 (CHRONOS‐3) after first 20 min of an infusion'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q27 | fail | not captured | -0.204 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413000-tbl-0002:row2:col2', 'psp413000-tbl-0002:row2:col3', 'psp413000-tbl-0002:row2:col4', 'psp413000-tbl-0002:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413000-tbl-0002:row4:col2', 'psp413000-tbl-0002:row4:col3', 'psp413000-tbl-0002:row4:col4', 'psp413000-tbl-0002:row4:col5'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413000-tbl-0002:row6:col2', 'psp413000-tbl-0002:row6:col3', 'psp413000-tbl-0002:row6:col4', 'psp413000-tbl-0002:row6:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413000-tbl-0002:row3:col2', 'psp413000-tbl-0002:row3:col3', 'psp413000-tbl-0002:row3:col4', 'psp413000-tbl-0002:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413000-tbl-0002:row5:col2', 'psp413000-tbl-0002:row5:col3', 'psp413000-tbl-0002:row5:col4', 'psp413000-tbl-0002:row5:col5'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413000-tbl-0002:row7:col2', 'psp413000-tbl-0002:row7:col3', 'psp413000-tbl-0002:row7:col4', 'psp413000-tbl-0002:row7:col5'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | THETA | not captured | not captured | ['psp413000-tbl-0002:row15:col2', 'psp413000-tbl-0002:row15:col3', 'psp413000-tbl-0002:row15:col4', 'psp413000-tbl-0002:row15:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 22.2 L/h | not captured | not captured | ['psp413000-tbl-0002:row2:col2', 'psp413000-tbl-0002:row2:col3', 'psp413000-tbl-0002:row2:col4', 'psp413000-tbl-0002:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 92.1 L | not captured | not captured | ['psp413000-tbl-0002:row3:col2', 'psp413000-tbl-0002:row3:col3', 'psp413000-tbl-0002:row3:col4', 'psp413000-tbl-0002:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 508 L | not captured | not captured | ['psp413000-tbl-0002:row5:col2', 'psp413000-tbl-0002:row5:col3', 'psp413000-tbl-0002:row5:col4', 'psp413000-tbl-0002:row5:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_copanlisib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Morcos_2023` / `Morcos_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:58 UTC</sub>
