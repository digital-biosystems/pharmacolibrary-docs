<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;Casirivimab&quot;,&quot;href&quot;:&quot;drugs/drug_casirivimab/&quot;},{&quot;label&quot;:&quot;Lin_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Casirivimab — `Casirivimab_Lin2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `casirivimab + imdevimab`, measured `casirivimab`.

## Citation
Lin KJ et al., Population Pharmacokinetics of Casirivi…, Pharmaceutical research (2024)
  ·  DOI: [10.1007/s11095-024-03764-5](https://doi.org/10.1007/s11095-024-03764-5)

## Model component
<dbs-pgx drug="Casirivimab" model-id="Casirivimab_Lin2024_reference" status="rejected" stale="false" population="pediatric and adult non-infected individuals and SARS-CoV-2 infected patients or household contacts" measured-compound="casirivimab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 5 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL: Clearance (L/day) | `Q22` · CL | 0.2359 | L/day | 2.730324074074074e-09 | [l] / [d] | 1.533 | llm_confirmed (0.6) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4 | — | not captured |
| Vc: Central volume of distribution (L) | `Q63` · V1 | 3.823 | L | 0.003823 | [l] | 1.025 | boundary_compartment (0.9) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4 | — | not captured |
| Q: Intercompartmental clearance (L/day) | `Q30` · Q | 0.4029 | L/day | 4.663194444444444e-09 | [l] / [d] | 4.604 | llm_confirmed (0.6) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4 | — | not captured |
| Vp: Peripheral volume of distribution (L) | `Q64` · V2 | 3.199 | L | 0.003199 | [l] | 1.771 | boundary_compartment (0.9) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4 | — | not captured |
| KA: Absorption rate constant (1/day) | `Q49` · kabs | 0.2354 | units | not captured | [units] | 6.648 | llm_confirmed (0.6) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4 | — | not captured |
| Bioavailability | `Q40` · Fab | 0.6617 | units | not captured | not captured | 1.208 | exact (1.0) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col4 | — | not captured |
| Objective function | `Q900` · equation variable | -56426.6 | units | not captured | [units] | -56426.6 | llm (0.6) | Tab2:row28:col1, Tab2:row28:col2, Tab2:row28:col3, Tab2:row28:col4, Tab2:row28:col5, Tab2:row28:col6 | — | not captured |
| theta_q314_weight | `Q900` · theta_q314_weight | 0.7959 | not captured | not captured | not captured | 2.577 | not captured (not captured) | Tab2:row8:col1, Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col4 | — | not captured |
| theta_v1_weight | `Q900` · theta_v1_weight | 0.5392 | not captured | not captured | not captured | 4.457 | not captured (not captured) | Tab2:row9:col1, Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4 | — | not captured |
| theta_q314_race | `Q900` · theta_q314_race | -0.09478 | not captured | not captured | not captured | 12.72 | not captured (not captured) | Tab2:row12:col1, Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col4 | — | not captured |
| theta_q314_sex | `Q900` · theta_q314_sex | -0.08783 | not captured | not captured | not captured | 16.13 | not captured (not captured) | Tab2:row21:col1, Tab2:row21:col2, Tab2:row21:col3, Tab2:row21:col4 | — | not captured |
| theta_v1_albumin | `Q900` · theta_v1_albumin | -0.4167 | not captured | not captured | not captured | 9.225 | not captured (not captured) | Tab2:row22:col1, Tab2:row22:col2, Tab2:row22:col3, Tab2:row22:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'KA: Absorption rate constant (1/day)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Age on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4'])
- dropped unlinked row (NIL): 'Sex on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col4'])
- dropped unlinked row (NIL): 'Albumin on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col1', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4'])
- dropped unlinked row (NIL): 'Hepatic impairment on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col1', 'Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row14:col4'])
- dropped unlinked row (NIL): 'Viral load on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4'])
- dropped unlinked row (NIL): 'Serostatus on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col1', 'Tab2:row16:col2', 'Tab2:row16:col3', 'Tab2:row16:col4'])
- unit_dimension_mismatch: 'CRP on CL' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CRP on CL', value '0.02252') — already have one for this compound
- unit_dimension_mismatch: 'NLR on CL' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('NLR on CL', value '0.02883') — already have one for this compound
- dropped unlinked row (NIL): 'Low oxygen supply on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col1', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col4'])
- unit_dimension_mismatch: 'High oxygen supply on CL' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('High oxygen supply on CL', value '0.3802') — already have one for this compound
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=casirivimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'casirivimab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col5 = '(0.1869, 0.1983)'
- unparsed cell Tab2:row2:col6 = '(0.2288, 0.243)'
- unparsed cell Tab2:row3:col5 = '(3.838, 3.996)'
- unparsed cell Tab2:row3:col6 = '(3.746, 3.9)'
- unparsed cell Tab2:row4:col5 = '(0.368, 0.4582)'
- unparsed cell Tab2:row4:col6 = '(0.3665, 0.4393)'
- unparsed cell Tab2:row5:col5 = '(2.952, 3.178)'
- unparsed cell Tab2:row5:col6 = '(3.088, 3.31)'
- unparsed cell Tab2:row6:col5 = '(0.19, 0.2466)'
- unparsed cell Tab2:row6:col6 = '(0.2047, 0.2661)'
- unparsed cell Tab2:row7:col5 = '(0.7035, 0.7365)'
- unparsed cell Tab2:row7:col6 = '(0.646, 0.6774)'
- unparsed cell Tab2:row8:col5 = '(0.7557, 0.8361)'
- unparsed cell Tab2:row8:col6 = '(0.7557, 0.8361)'
- unparsed cell Tab2:row9:col5 = '(0.4921, 0.5863)'
- unparsed cell Tab2:row9:col6 = '(0.4921, 0.5863)'
- unparsed cell Tab2:row10:col5 = '(0.04485, 0.09589)'
- unparsed cell Tab2:row10:col6 = '(0.04485, 0.09589)'
- unparsed cell Tab2:row11:col5 = '(–0.09839, –0.06263)'
- unparsed cell Tab2:row11:col6 = '(–0.08723, –0.05115)'
- unparsed cell Tab2:row12:col5 = '(-0.1184, -0.07114)'
- unparsed cell Tab2:row12:col6 = '(-0.1184, -0.07114)'
- unparsed cell Tab2:row13:col5 = '(–1.179, –0.9774)'
- unparsed cell Tab2:row13:col6 = '(–1.063, –0.8652)'
- unparsed cell Tab2:row14:col5 = '(0.04128, 0.09076)'
- unparsed cell Tab2:row14:col6 = '(0.04128, 0.09076)'
- unparsed cell Tab2:row15:col5 = '(–0.01133, –0.003745)'
- unparsed cell Tab2:row15:col6 = '(–0.01133, –0.003745)'
- unparsed cell Tab2:row16:col5 = '(0.05065, 0.09565)'
- unparsed cell Tab2:row16:col6 = '(0.05065, 0.09565)'
- unparsed cell Tab2:row17:col5 = '(0.01254, 0.0325)'
- unparsed cell Tab2:row17:col6 = '(0.01254, 0.0325)'
- unparsed cell Tab2:row18:col5 = '(0.01237, 0.04529)'
- unparsed cell Tab2:row18:col6 = '(0.01237, 0.04529)'
- unparsed cell Tab2:row19:col5 = '(0.0791, 0.1337)'
- unparsed cell Tab2:row19:col6 = '(0.0791, 0.1337)'
- unparsed cell Tab2:row20:col5 = '(0.2666, 0.4938)'
- unparsed cell Tab2:row20:col6 = '(0.2666, 0.4938)'
- unparsed cell Tab2:row21:col5 = '(–0.1354, –0.08299)'
- unparsed cell Tab2:row21:col6 = '(–0.1156, –0.06006)'
- unparsed cell Tab2:row22:col5 = '(–0.492, –0.3414)'
- unparsed cell Tab2:row22:col6 = '(–0.492, –0.3414)'
- unparsed cell Tab2:row23:col5 = '(0.7976,0.96)'
- unparsed cell Tab2:row23:col6 = '(0.7624,0.9178)'
- unparsed cell Tab2:row24:col5 = '(23.51, 23.53)'
- unparsed cell Tab2:row24:col6 = '(23.71, 23.73)'
- unparsed cell Tab2:row25:col5 = '(30.03, 30.05)'
- unparsed cell Tab2:row25:col6 = '(30.03, 30.05)'
- unparsed cell Tab2:row26:col5 = '(34.55, 34.61)'
- unparsed cell Tab2:row26:col6 = '(34.55, 34.61)'
- unparsed cell Tab2:row27:col5 = '(78.05, 78.51)'
- unparsed cell Tab2:row27:col6 = '(78.05, 78.51)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2359 | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00983 L/h | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.82 L | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.2 L | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_casirivimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lin_2024` / `Lin_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:00 UTC</sub>
