<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;amrubicin&quot;,&quot;href&quot;:&quot;drugs/drug_amrubicin/&quot;},{&quot;label&quot;:&quot;Makino_2019 \u00b7 base&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amrubicin — `Amrubicin_Makino2019_base`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `amrubicin`, measured `amrubicin and amrubicinol`.

## Citation
Makino Y et al., Individual optimal dose of amrubicin to…, Cancer science (2019)
  ·  DOI: [10.1111/cas.14194](https://doi.org/10.1111/cas.14194)

## Model component
<dbs-pgx drug="amrubicin" model-id="Amrubicin_Makino2019_base" status="rejected" stale="false" population="Japanese patients with lung cancer after platinum-based treatment" measured-compound="amrubicin and amrubicinol" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvVp, L | `Q64` · V2 | 10.1 | L | 0.0101 | [l] | not captured | tv_prefix (0.95) | cas14194-tbl-0001:row4:col1, cas14194-tbl-0001:row4:col2 | — | 32.7 (None% RSE) |
| tvCL2, L/h | `Q30` · Q | 9.1 | L/h | 2.5277777777777778e-06 | [l] / [h] | not captured | exact (1.0) | cas14194-tbl-0001:row6:col1, cas14194-tbl-0001:row6:col2 | — | not captured |
| tvV3, L | `Q77` · V3 | 32.7 | L | 0.03270000000000001 | [l] | not captured | exact (1.0) | cas14194-tbl-0001:row7:col1, cas14194-tbl-0001:row7:col2 | — | 30.7 (None% RSE) |
| tvCL3, L/h | `Q99` · Q2 | 50.5 | L/h | 1.4027777777777779e-05 | [l] / [h] | not captured | exact (1.0) | cas14194-tbl-0001:row8:col1, cas14194-tbl-0001:row8:col2 | — | not captured |
| tvVm, L | `Q61` · V | 1032.2 | L | 1.0322 | [l] | not captured | exact (1.0) | cas14194-tbl-0001:row9:col1, cas14194-tbl-0001:row9:col2 | — | not captured |
| tvCLp, L/h | `Q370` · CLfm | 19.4 | L/h | 5.388888888888889e-06 | [l] / [h] | not captured | exact (1.0) | cas14194-tbl-0001:row10:col1, cas14194-tbl-0001:row10:col2 | — | not captured |
| tvCLm, L/h | `Q22` · CL | 97.0 | L/h | 2.6944444444444445e-05 | [l] / [h] | not captured | exact (1.0) | cas14194-tbl-0001:row11:col1, cas14194-tbl-0001:row11:col2 | — | 20.0 (None% RSE) |
| tvKdc, L/h | `Q305` · kfm | 0.1 | L/h | not captured | [l] / [h] | not captured | exact (1.0) | cas14194-tbl-0001:row12:col1, cas14194-tbl-0001:row12:col2 | — | not captured |
| tvMMT | `Q81` · MTT | 157.0 | not captured | not captured | not captured | not captured | llm (0.6) | cas14194-tbl-0001:row36:col1, cas14194-tbl-0001:row36:col2 | — | not captured |
| tvGamma‐m, γm | `Q900` · equation variable | 0.2 | not captured | not captured | not captured | not captured | llm (0.6) | cas14194-tbl-0001:row38:col1, cas14194-tbl-0001:row38:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '−2 Log likelihood' — extend the ontology if this is a real PK parameter (source ['cas14194-tbl-0001:row3:col1'])
- dropped duplicate Q64 ('tvV2, L', value '28.5') — already have one for this compound
- unit_dimension_mismatch: 'tvKdc, L/h' → Q305 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q305 ('Kdc=tvKdc·ecovSLC28A3(Kdc)·(SLC28A3)·eηKdc', value None) — already have one for this compound
- dropped unlinked row (NIL): '−2 Log Likelihood' — extend the ontology if this is a real PK parameter (source ['cas14194-tbl-0001:row34:col1'])
- dropped PD-category row 'tvCirc0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cas14194-tbl-0001:row35:col1', 'cas14194-tbl-0001:row35:col2'])
- dropped PD-category row 'tvGamma, γ' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cas14194-tbl-0001:row37:col1', 'cas14194-tbl-0001:row37:col2'])
- dropped PD-category row 'tvSlope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cas14194-tbl-0001:row39:col1', 'cas14194-tbl-0001:row39:col2'])
- metabolite volume: 'tvVm, L' Q63→Q61 for amrubicinol — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amrubicin and amrubicinol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at route_to_review — not promoted
- model-stage split: 'base model' is the base model of Makino_2019 (paper reports 2 stages: base model, final model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 37/37 row label(s) assigned, 50 linked by role; re-tagged parent→amrubicinol ×57

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cas14194-tbl-0001:row11:col1', 'cas14194-tbl-0001:row11:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cas14194-tbl-0001:row6:col1', 'cas14194-tbl-0001:row6:col2'] |
| C5_dimension_Q305 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['cas14194-tbl-0001:row12:col1', 'cas14194-tbl-0001:row12:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cas14194-tbl-0001:row10:col1', 'cas14194-tbl-0001:row10:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['cas14194-tbl-0001:row9:col1', 'cas14194-tbl-0001:row9:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cas14194-tbl-0001:row4:col1', 'cas14194-tbl-0001:row4:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['cas14194-tbl-0001:row7:col1', 'cas14194-tbl-0001:row7:col2'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cas14194-tbl-0001:row8:col1', 'cas14194-tbl-0001:row8:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 97.0 | not captured | not captured | ['cas14194-tbl-0001:row11:col1', 'cas14194-tbl-0001:row11:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 97 L/h | not captured | not captured | ['cas14194-tbl-0001:row11:col1', 'cas14194-tbl-0001:row11:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.03e+03 L | not captured | not captured | ['cas14194-tbl-0001:row9:col1', 'cas14194-tbl-0001:row9:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 10.1 L | not captured | not captured | ['cas14194-tbl-0001:row4:col1', 'cas14194-tbl-0001:row4:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amrubicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Makino_2019` / `Makino_2019::base`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 16:19 UTC</sub>
