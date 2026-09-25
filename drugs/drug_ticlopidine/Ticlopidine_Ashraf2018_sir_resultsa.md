<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticlopidine&quot;,&quot;href&quot;:&quot;drugs/drug_ticlopidine/&quot;},{&quot;label&quot;:&quot;Ashraf_2018 \u00b7 sir_resultsa&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ticlopidine_Ashraf2018_nonmem&quot;,&quot;label&quot;:&quot;Ashraf_2018_nonmem&quot;,&quot;href&quot;:&quot;drugs/drug_ticlopidine/Ticlopidine_Ashraf2018_nonmem.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticlopidine_Ashraf2018_sir_resultsa&quot;,&quot;label&quot;:&quot;Ashraf_2018_sir_resultsa&quot;,&quot;href&quot;:&quot;drugs/drug_ticlopidine/Ticlopidine_Ashraf2018_sir_resultsa.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ticlopidine — `Ticlopidine_Ashraf2018_sir_resultsa`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C5 dimension mismatch on a structural parameter.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Ashraf MW; Peltoniemi MA; Olkkola KT; Neuvonen PJ; Saari TI et al. (2018). CPT: pharmacometrics & systems pharmacology 7
  ·  DOI: [10.1002/psp4.12346](https://doi.org/10.1002/psp4.12346)

## Model component
<dbs-pgx drug="ticlopidine" model-id="Ticlopidine_Ashraf2018_sir_resultsa" status="rejected" stale="false" population="healthy volunteers" measured-compound="S-ketamine" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLINT,H,SK (L/h) | `Q3` · CLint | 304 | L/h | not captured | [l] / [h] | not captured | llm_confirmed (0.6) | psp412346-tbl-0002:row3:col4 | — | 0.26 (None% RSE) |
| V C,SK (L) | `Q61` · V | 14.4 | L | 0.014400000000000001 | [l] | not captured | llm (0.6) | psp412346-tbl-0002:row6:col4 | — | not captured |
| Q PER1,SK (L/h) | `Q30` · Q | 288 | L/h | 8e-05 | [l] / [h] | not captured | llm (0.6) | psp412346-tbl-0002:row8:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'sir‐resultsa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'CLINT,H,SK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- unit_dimension_mismatch: 'CLINT,GW,SK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,GW,SK (L/h)', value '1.22') — already have one for this compound
- dropped unlinked row (NIL): 'K a,SK (/h)' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row5:col4'])
- dropped duplicate Q61 ('V PER1,SK (L)', value '102') — already have one for this compound
- dropped duplicate Q61 ('V PER2,SK (L)', value '180') — already have one for this compound
- dropped duplicate Q30 ('Q PER2,SK (L/h)', value '22.3') — already have one for this compound
- dropped unlinked row (NIL): 'RVSK,PLAC' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row15:col4'])
- dropped unlinked row (NIL): 'RVSK,TICLO' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row16:col4'])
- unit_dimension_mismatch: 'CLINT,H,NK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,H,NK (L/h)', value '73.4') — already have one for this compound
- unit_dimension_mismatch: 'CLINT,GW,NK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,GW,NK (L/h)', value '46.5') — already have one for this compound
- dropped duplicate Q61 ('V C,NK (L)', value '88') — already have one for this compound
- dropped duplicate Q30 ('Q PER1,NK (L/h)', value '20.1') — already have one for this compound
- dropped duplicate Q61 ('V PER1,NK (L)', value '88.8') — already have one for this compound
- dropped unlinked row (NIL): 'RVNK,PLAC' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row24:col4'])
- dropped unlinked row (NIL): 'RVNK,TICLO' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row25:col4'])
- unit_dimension_mismatch: 'CLINT,H,TIC (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,H,TIC (L/h)', value '1490') — already have one for this compound
- dropped duplicate Q61 ('V C,TIC (L)', value '50.8') — already have one for this compound
- dropped duplicate Q61 ('V PER1,TIC (L)', value '208.7') — already have one for this compound
- dropped duplicate Q30 ('Q PER1,TIC (L/h)', value '25.8') — already have one for this compound
- dropped unlinked row (NIL): 'RVTICLO' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row34:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=S-ketamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'sir‐resultsa' subgroup of Ashraf_2018 (paper reports 2 populations: nonmem, sir‐resultsa)

**Extraction notes:**
- unparsed cell psp412346-tbl-0002:row3:col5 = '[260, 352]'
- unparsed cell psp412346-tbl-0002:row4:col5 = '[0.66, 1.98]'
- unparsed cell psp412346-tbl-0002:row5:col5 = '[1.47, 2.11]'
- unparsed cell psp412346-tbl-0002:row6:col5 = '[5.90, 22.5]'
- unparsed cell psp412346-tbl-0002:row7:col5 = '[92.5, 111]'
- unparsed cell psp412346-tbl-0002:row8:col5 = '[250, 331]'
- unparsed cell psp412346-tbl-0002:row9:col5 = '[167, 190]'
- unparsed cell psp412346-tbl-0002:row10:col5 = '[20.8, 24.1]'
- unparsed cell psp412346-tbl-0002:row11:col5 = '[0.17, 0.37]'
- unparsed cell psp412346-tbl-0002:row12:col5 = '[1.11, 3.67]'
- unparsed cell psp412346-tbl-0002:row13:col5 = '[0.29, 0.66]'
- unparsed cell psp412346-tbl-0002:row14:col1 = 'Interindividual variability on V PER1,SK'
- unparsed cell psp412346-tbl-0002:row14:col5 = '[0.022, 0.076]'
- unparsed cell psp412346-tbl-0002:row15:col5 = '[0.079, 0.093]'
- unparsed cell psp412346-tbl-0002:row16:col5 = '[0.048, 0.09]'
- unparsed cell psp412346-tbl-0002:row18:col5 = '[67.6, 79.9]'
- unparsed cell psp412346-tbl-0002:row19:col5 = '[29.7, 71.2]'
- unparsed cell psp412346-tbl-0002:row20:col5 = '[82.6, 93.5]'
- unparsed cell psp412346-tbl-0002:row21:col5 = '[17.3, 22.8]'
- unparsed cell psp412346-tbl-0002:row22:col5 = '[81.7, 96.5]'
- unparsed cell psp412346-tbl-0002:row23:col5 = '[0.07, 0.15]'
- unparsed cell psp412346-tbl-0002:row24:col5 = '[0.057, 0.068]'
- unparsed cell psp412346-tbl-0002:row25:col5 = '[0.050, 0.090]'
- unparsed cell psp412346-tbl-0002:row27:col5 = '[1148, 1820]'
- unparsed cell psp412346-tbl-0002:row30:col5 = '[43.9, 57.7]'
- unparsed cell psp412346-tbl-0002:row31:col5 = '[130, 393]'
- unparsed cell psp412346-tbl-0002:row32:col5 = '[20.9, 32.0]'
- unparsed cell psp412346-tbl-0002:row33:col5 = '[0.06, 0.28]'
- unparsed cell psp412346-tbl-0002:row34:col5 = '[0.053, 0.083]'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['psp412346-tbl-0002:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412346-tbl-0002:row8:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412346-tbl-0002:row6:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.4 L | not captured | not captured | ['psp412346-tbl-0002:row6:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ticlopidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ashraf_2018` / `Ashraf_2018::sir_resultsa`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-06 00:13 UTC</sub>
