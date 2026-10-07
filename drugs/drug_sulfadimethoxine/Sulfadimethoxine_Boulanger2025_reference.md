<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfadimethoxine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadimethoxine/&quot;},{&quot;label&quot;:&quot;Boulanger_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfadimethoxine — `Sulfadimethoxine_Boulanger2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `sulfadimethoxine, trimethoprim`, measured `sulfadimethoxine`.

## Citation
Boulanger M et al., Population pharmacokinetic modeling of…, The veterinary quarterly (2025)
  ·  DOI: [10.1080/01652176.2025.2565351](https://doi.org/10.1080/01652176.2025.2565351)

## Model component
<dbs-pgx drug="sulfadimethoxine" model-id="Sulfadimethoxine_Boulanger2025_reference" status="rejected" stale="false" population="growing pigs" measured-compound="sulfadimethoxine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| T1/2β SDZ (h) | `Q60` · t1/2β | 3.7 | h | 13320.0 | [h] | not captured | llm_confirmed (0.6) | Boulanger_2025_table_3:row2:col1, Boulanger_2025_table_3:row2:col3 | — | not captured |
| AUC∞ SDZ (h x µg/mL) | `Q17` · AUC∞ | 99.2 | h x µg/mL | not captured | [[h] · [µg]] / [ml] | not captured | llm_confirmed (0.6) | Boulanger_2025_table_3:row6:col1, Boulanger_2025_table_3:row6:col3 | — | not captured |
| clearance | `Q22` · CL | 0.015 | L/h/kg | 2.916666666666667e-07 | L/h | not captured | exact (1.0) | Boulanger_2025:discussion_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q60 ('T1/2β SDMX (h)', value '14.8') — already have one for this compound
- dropped duplicate Q60 ('T1/2β SMX (h)', value '2.2') — already have one for this compound
- dropped duplicate Q60 ('T1/2β TMP (h)', value '2.9') — already have one for this compound
- unit_dimension_unknown: 'h x µg/mL' (AUC∞)
- dropped duplicate Q17 ('AUC∞ SDMX (h x µg/mL)', value '1280.3') — already have one for this compound
- dropped duplicate Q17 ('AUC∞ SMX (h x µg/mL)', value '140.93') — already have one for this compound
- dropped duplicate Q17 ('AUC∞ TMP (h x µg/mL)', value '6.9') — already have one for this compound
- salvaged Q22 ('clearance'=0.015) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfadimethoxine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Boulanger_2025_table_3:row2:col2 = '3.1 − 4.2'
- unparsed cell Boulanger_2025_table_3:row2:col4 = '3.2 − 6.0'
- unparsed cell Boulanger_2025_table_3:row3:col2 = '10.9 − 20.2'
- unparsed cell Boulanger_2025_table_3:row3:col4 = '9.8 − 16.5'
- unparsed cell Boulanger_2025_table_3:row4:col2 = '1.9 − 2.5'
- unparsed cell Boulanger_2025_table_3:row4:col4 = '1.8 − 3.2'
- unparsed cell Boulanger_2025_table_3:row5:col2 = '1.2 − 3.7'
- unparsed cell Boulanger_2025_table_3:row5:col4 = '1.8 − 5.8'
- unparsed cell Boulanger_2025_table_3:row6:col2 = '74.6 − 113.8'
- unparsed cell Boulanger_2025_table_3:row6:col4 = '87.2 − 220.6'
- unparsed cell Boulanger_2025_table_3:row7:col2 = '916.5 − 1709.4'
- unparsed cell Boulanger_2025_table_3:row7:col4 = '1048.7 − 2215.8'
- unparsed cell Boulanger_2025_table_3:row8:col2 = '140.92 − 140.93'
- unparsed cell Boulanger_2025_table_3:row8:col4 = '92.39 − 92.39'
- unparsed cell Boulanger_2025_table_3:row9:col2 = '3.1 − 10.7'
- unparsed cell Boulanger_2025_table_3:row9:col4 = '3.3 − 18.2'
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Boulanger_2025_table_3:row2:col1', 'Boulanger_2025_table_3:row2:col3'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | h x µg/mL | not captured | not captured | ['Boulanger_2025_table_3:row6:col1', 'Boulanger_2025_table_3:row6:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.015 | not captured | not captured | ['Boulanger_2025:discussion_prose'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.05 L/h | not captured | not captured | ['Boulanger_2025:discussion_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sulfadimethoxine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Boulanger_2025` / `Boulanger_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:49 UTC</sub>
