<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;pefloxacin&quot;,&quot;href&quot;:&quot;drugs/drug_pefloxacin/&quot;},{&quot;label&quot;:&quot;Mart\u00ednez_2017 \u00b7 oral&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pefloxacin — `Pefloxacin_Martnez2017_oral`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Martínez MA et al., Oral Bioavailability and Plasma Disposi…, Frontiers in veterinary sci… (2017)
  ·  DOI: [10.3389/fvets.2017.00077](https://doi.org/10.3389/fvets.2017.00077)

## Model component
<dbs-pgx drug="pefloxacin" model-id="Pefloxacin_Martnez2017_oral" status="rejected" stale="false" population="healthy broiler chickens" measured-compound="pefloxacin" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 16 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A1 (μg/mL) | `Q900` · equation variable | 16.33 | μg/mL | not captured | [µg] / [ml] | not captured | llm (0.6) | T1:row1:col2 | — | not captured |
| α (h−1) | `Q67` · λ1 | 0.43 | h−1 | not captured | [1] / [h] | not captured | exact (1.0) | T1:row4:col2 | — | not captured |
| β (h−1) | `Q47` · kel | 0.054 | h−1 | 1.5e-05 | [1] / [h] | not captured | exact (1.0) | T1:row5:col2 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 0.80 | h−1 | 0.00022222222222222223 | [1] / [h] | not captured | exact (1.0) | T1:row6:col2 | — | not captured |
| t½α (h) | `Q59` · t1/2α | 1.68 | h | 6048.0 | [h] | not captured | llm (0.6) | T1:row7:col2 | — | not captured |
| t½a (h) | `Q95` · t1/2ka | 0.87 | h | 3132.0 | [h] | not captured | llm (0.6) | T1:row9:col2 | — | not captured |
| Vd(area) (L/kg) | `Q61` · V | 3.55 | L/kg | 0.24849999999999997 | [l] / [kg] | not captured | space_fold (0.95) | T1:row10:col2 | — | not captured |
| K12 (h−1) | `Q30` · Q | 0.16 | h−1 | not captured | [1] / [h] | not captured | exact (1.0) | T1:row12:col2, Martínez_2017_table_2:row2:col2 | — | not captured |
| K21 (h−1) | `Q99` · Q2 | 0.10 | h−1 | not captured | [1] / [h] | not captured | exact (1.0) | T1:row13:col2, Martínez_2017_table_2:row3:col2 | — | not captured |
| AUC (mg/h/L) | `Q88` · AUC | 37.71 | mg/h/L | not captured | [mg] / [[h] · [l]] | not captured | exact (1.0) | T1:row15:col2, Martínez_2017_table_2:row5:col2 | — | not captured |
| F (%) | `Q40` · Fab | 70 | not captured | not captured | not captured | not captured | exact (1.0) | T1:row16:col2 | — | not captured |
| MRT (h) | `Q53` · MRT | 13.57 | h | 48852.0 | [h] | not captured | exact (1.0) | T1:row17:col2, Martínez_2017_table_2:row6:col2 | — | not captured |
| CL (L/h/kg) | `Q22` · CL | 0.19 | L/h/kg | 3.694444444444445e-06 | [l] / [[h] · [kg]] | not captured | exact (1.0) | T1:row18:col2 | — | not captured |
| CMAX (μg/mL) | `Q32` · Cmax | 4.02 | μg/mL | not captured | [µg] / [ml] | not captured | exact (1.0) | T1:row19:col2, Martínez_2017_table_2:row7:col2 | — | not captured |
| TMAX (h) | `Q56` · tmax | 2.01 | h | 7235.999999999999 | [h] | not captured | exact (1.0) | T1:row20:col2, Martínez_2017_table_2:row8:col2 | — | not captured |
| T½α (h) | `Q59` · t1/2α | 1.25 | h | 4500.0 | [h] | not captured | llm (0.6) | Martínez_2017_table_2:row0:col2 | — | not captured |
| t½β (h) | `Q60` · t1/2β | 10.93 | h | 39348.0 | [h] | not captured | llm (0.6) | Martínez_2017_table_2:row1:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'A2 (μg/mL)' — extend the ontology if this is a real PK parameter (source ['T1:row2:col2'])
- dropped duplicate Q900 ('A3 (μg/mL)', value '18.40') — already have one for this compound
- unit_dimension_mismatch: 'α (h−1)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'K12 (h−1)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'K21 (h−1)' → Q99 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q47 ('K10 (h−1)', value '0.21') — already have one for this compound
- unit_dimension_mismatch: 'AUC (mg/h/L)' → Q88 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pefloxacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'oral' subgroup of Martínez_2017 (paper reports 2 populations: iv, oral)
- row roles (LLM): model_class=noncompartmental; 21/21 row label(s) assigned, 20 linked by role; re-tagged pefloxacin→parent ×46, pefloxacin→N-demethyl pefloxacin ×2
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T1:row8:col2 = '13.18 ± 0.82***'
- companion parameter table 2 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 16 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 8.44 | 12.951 | 1.5345 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row18:col2'] |
| C5_dimension_Q30 | fail | 1 / [time] | h−1 | not captured | not captured | ['T1:row12:col2', 'Martínez_2017_table_2:row2:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['T1:row19:col2', 'Martínez_2017_table_2:row7:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row6:col2'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['T1:row17:col2', 'Martínez_2017_table_2:row6:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['T1:row20:col2', 'Martínez_2017_table_2:row8:col2'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['T1:row7:col2'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Martínez_2017_table_2:row0:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Martínez_2017_table_2:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row10:col2'] |
| C5_dimension_Q67 | fail | 1 / [time] | h−1 | not captured | not captured | ['T1:row4:col2'] |
| C5_dimension_Q88 | fail | [mass] / [time] / [length] ** 3 | mg/h/L | not captured | not captured | ['T1:row15:col2', 'Martínez_2017_table_2:row5:col2'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['T1:row9:col2'] |
| C5_dimension_Q99 | fail | 1 / [time] | h−1 | not captured | not captured | ['T1:row13:col2', 'Martínez_2017_table_2:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.19 | not captured | not captured | ['T1:row18:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.3 L/h | not captured | not captured | ['T1:row18:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 248 L | not captured | not captured | ['T1:row10:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pefloxacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Martínez_2017` / `Martínez_2017::oral`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:46 UTC</sub>
