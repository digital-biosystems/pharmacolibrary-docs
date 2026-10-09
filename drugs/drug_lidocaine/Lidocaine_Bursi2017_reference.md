<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lidocaine&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/&quot;},{&quot;label&quot;:&quot;Bursi_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lidocaine — `Lidocaine_Bursi2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.346). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only volume was extracted — no clearance; v1 has no unit.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (V1, theta_k31_category and theta_v1_category), so that value has no SI equivalent. Extracted — lidocaine: kcomp 1.93 h−1, k31 -0.526 h−1, V1 0.312 IIV.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has lidocaine → 2,6-xylidine (metabolism); lidocaine → glycinexylidide (metabolism); glycinexylidide → monoethylglycinexylidide (metabolism), the second reading lidocaine → 2,6-xylidine (metabolism); lidocaine → glycinexylidide (metabolism); lidocaine → monoethylglycinexylidide (metabolism); it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:27:22.034936+00:00) predates the upstream re-run (2026-10-06 03:22:38.208614+00:00). Current validate status: `rejected`.

## Citation
Bursi R et al., Evaluation of the Population Pharmacoki…, European journal of drug me… (2017)
  ·  DOI: [10.1007/s13318-017-0400-7](https://doi.org/10.1007/s13318-017-0400-7)

## Model component
<dbs-pgx drug="lidocaine" model-id="Lidocaine_Bursi2017_reference" status="rejected" stale="true" population="post-herpetic neuralgia patients" measured-compound="lidocaine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 5 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k 23 (h−1) | `Q305` · kfm | 1.93 | h−1 | 0.0005361111111111111 | [1] / [h] | 0.175 | exact (1.0) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| Effect of BIL &gt;0.53 on k 30 (h−1) | `Q304` · k31 | -0.526 | h−1 | -0.00014611111111111113 | [1] / [h] | 0.148 | llm (0.6) | Tab3:row7:col1, Tab3:row7:col2 | — | not captured |
| k 30 | `Q373` · ki0 | 0.39 | 1/h | 0.00010833333333333334 | 1/h | 0.127 | space_fold (0.95) | Tab3:row20:col1, Tab3:row20:col2, Tab3:row20:col4 | — | not captured |
| k 40 | `Q373` · ki0 | 0.2 | 1/h | 5.555555555555556e-05 | 1/h | 0.0424 | space_fold (0.95) | Tab3:row21:col1, Tab3:row21:col2, Tab3:row21:col4 | — | not captured |
| V 1 | `Q63` · V1 | 0.312 | L | 0.000312 | L | 0.0757 | space_fold (0.95) | Tab3:row22:col1, Tab3:row22:col2, Tab3:row22:col4 | — | not captured |
| theta_q47_category | `Q900` · theta_q47_category | 1.44 | not captured | not captured | not captured | 0.169 | not captured (not captured) | Tab3:row5:col1, Tab3:row5:col2 | — | not captured |
| theta_k31_bmi | `Q900` · theta_k31_bmi | 0.938 | not captured | not captured | not captured | 0.309 | not captured (not captured) | Tab3:row10:col1, Tab3:row10:col2 | — | not captured |
| theta_q47_category | `Q900` · theta_q47_category | 0.667 | not captured | not captured | not captured | 0.0383 | not captured (not captured) | Tab3:row12:col1, Tab3:row12:col2 | — | not captured |
| theta_v1_category | `Q900` · theta_v1_category | 1320 | not captured | not captured | not captured | 99.5 | not captured (not captured) | Tab3:row15:col1, Tab3:row15:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q304 ('Effect of CLCR ≤52.7 on k 30 (h−1)', value '-0.32') — already have one for this compound
- dropped unlinked row (NIL): 'Effect of CYP1A2 substrate on k 30 (h−1)' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1', 'Tab3:row9:col2'])
- dropped duplicate Q304 ('Effect of ALT &gt;11 on k 30 (h−1)', value '-0.492') — already have one for this compound
- dropped unlinked row (NIL): 'Effect of ALT &gt;11 on k 40 (h−1)' — extend the ontology if this is a real PK parameter (source ['Tab3:row14:col1', 'Tab3:row14:col2'])
- dropped unlinked row (NIL): 'Lidocaine' — extend the ontology if this is a real PK parameter (source ['Tab3:row25:col1', 'Tab3:row25:col2', 'Tab3:row25:col4'])
- dropped unlinked row (NIL): 'MEGX' — extend the ontology if this is a real PK parameter (source ['Tab3:row26:col1', 'Tab3:row26:col2', 'Tab3:row26:col4'])
- dropped unlinked row (NIL): 'GX' — extend the ontology if this is a real PK parameter (source ['Tab3:row27:col1', 'Tab3:row27:col2', 'Tab3:row27:col4'])
- dropped unlinked row (NIL): '2,6-xylidine' — extend the ontology if this is a real PK parameter (source ['Tab3:row28:col1', 'Tab3:row28:col2', 'Tab3:row28:col4'])
- covariate effect for Q47 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q47 — ambiguous identity (two shifts cannot share one category)
- dropped duplicate covariate effect 'category'/'' on Q63 — ambiguous identity (two shifts cannot share one category)
- implicit units: 'k 30' → 1/h (from the popPK convention: "The parameter is a first-order elimination rate constant (k30). The paper text explicitly states 'lidocaine K el was est")
- implicit units: 'k 40' → 1/h (from the popPK convention: "The parameter is a first-order elimination rate constant (k40). The paper text explicitly states 'lidocaine K el was est")
- implicit units: 'V 1' → L (from the popPK convention: "The parameter is the volume of distribution of the central compartment (V1). The paper text states 'apparent volume of d")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lidocaine
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- row roles: 2 per-group rows of glycinexylidide elimination_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of 2,6-xylidine elimination_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of lidocaine central_volume but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 14 linked by role; re-tagged parent→glycinexylidide ×22, parent→2,6-xylidine ×12, parent→monoethylglycinexylidide ×3
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row3:col3 = '(1.59; 2.27)'
- unparsed cell Tab3:row5:col3 = '(1.11; 1.77)'
- unparsed cell Tab3:row6:col3 = '(1.53; 2.61)'
- unparsed cell Tab3:row7:col3 = '(−0.816; −0.236)'
- unparsed cell Tab3:row8:col3 = '(−0.645; 0.005)'
- unparsed cell Tab3:row9:col3 = '(0.323; 1.381)'
- unparsed cell Tab3:row10:col3 = '(0.332; 1.544)'
- unparsed cell Tab3:row11:col3 = '(−0.87; −0.114)'
- unparsed cell Tab3:row12:col3 = '(0.592; 0.742)'
- unparsed cell Tab3:row13:col3 = '(0.29; 0.53)'
- unparsed cell Tab3:row14:col3 = '(0.038; 0.420)'
- unparsed cell Tab3:row15:col3 = '(1124; 1515)'
- unparsed cell Tab3:row16:col3 = '(1449; 2170)'
- unparsed cell Tab3:row20:col3 = '(0.141; 0.639)'
- unparsed cell Tab3:row21:col3 = '(0.117; 0.283)'
- unparsed cell Tab3:row22:col3 = '(0.164; 0.46)'
- unparsed cell Tab3:row25:col3 = '(204; 523)'
- unparsed cell Tab3:row26:col3 = '(28.8; 77.8)'
- unparsed cell Tab3:row27:col3 = '(1.2; 94.5)'
- unparsed cell Tab3:row28:col3 = '(3.63; 9.15)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.346 (9/26 fields) | 17 |

<details><summary>17 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['lidocaine', '2,6-xylidine', 'metabolism'], ['lidocaine', 'glycinexylidide', 'metabolism'], ['glycinexylidide', 'monoethylglycinexylidide', 'metabolism']] | [['lidocaine', '2,6-xylidine', 'metabolism'], ['lidocaine', 'glycinexylidide', 'metabolism'], ['lidocaine', 'monoethylglycinexylidide', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[effect of alt &gt;11 on k 40]` | not captured | 0.229 | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect of bil &gt;0.53 on k 30].parameter_id` | Q304 | Q48 | mismatch |
| `gpt-oss:120b` | `parameters[effect of bil &gt;0.53 on k 30].rse_percent` | 0.148 | not captured | mismatch |
| `gpt-oss:120b` | `parameters[effect of clcr ≤52.7 on k 30]` | not captured | -0.32 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k 23].rse_percent` | 0.175 | not captured | mismatch |
| `gpt-oss:120b` | `parameters[k 30]` | 0.39 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k 40]` | 0.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_k31_bmi]` | 0.938 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_kcomp_bmi]` | not captured | 0.938 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_kel_category]` | not captured | 0.667 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_kel_category]` | not captured | 1.44 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_kel_cyp1a2]` | not captured | 0.852 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q47_category]` | 0.667 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q47_category]` | 1.44 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v1_category].rse_percent` | 99.5 | not captured | mismatch |
| `gpt-oss:120b` | `parameters[v 1].rse_percent` | 0.0757 | not captured | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row7:col1', 'Tab3:row7:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q373 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row20:col1', 'Tab3:row20:col2', 'Tab3:row20:col4'] |
| C5_dimension_Q373 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row21:col1', 'Tab3:row21:col2', 'Tab3:row21:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row22:col1', 'Tab3:row22:col2', 'Tab3:row22:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.312 L | not captured | not captured | ['Tab3:row22:col1', 'Tab3:row22:col2', 'Tab3:row22:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lidocaine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bursi_2017` / `Bursi_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 03:22 UTC</sub>
