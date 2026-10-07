<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Vaborbactam&quot;,&quot;href&quot;:&quot;drugs/drug_vaborbactam/&quot;},{&quot;label&quot;:&quot;Fornari_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vaborbactam_Principe2022_reference&quot;,&quot;label&quot;:&quot;Principe_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Vaborbactam — `Vaborbactam_Fornari2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `meropenem/vaborbactam`, measured `vaborbactam`.

## Citation
Fornari C et al., Dose rationale for the use of meropenem…, British journal of clinical… (2024)
  ·  DOI: [10.1111/bcp.16145](https://doi.org/10.1111/bcp.16145)

## Model component
<dbs-pgx drug="Vaborbactam" model-id="Vaborbactam_Fornari2024_reference" status="rejected" stale="false" population="paediatric patients with Gram-negative bacterial infections" measured-compound="vaborbactam" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 9.84 | L/h | 2.733333333333333e-06 | [l] / [h] | not captured | exact (1.0) | tab_2:row4:col1, tab_2:row4:col2, tab_2:row4:col4, tab_2:row4:col5, tab_2:row28:col1, tab_2:row28:col2, tab_2:row28:col4, tab_2:row28:col5 | — | 0.561 (None% RSE) |
| PMA50 (weeks) | `Q56` · tmax | 43.4 | weeks | not captured | [weeks] | not captured | llm (0.6) | tab_2:row8:col4, tab_2:row32:col4 | — | not captured |
| V1 (L) | `Q63` · V1 | 14.4 | L | 0.014400000000000001 | [l] | not captured | exact (1.0) | tab_2:row9:col1, tab_2:row9:col2, tab_2:row9:col4, tab_2:row9:col5, tab_2:row33:col1, tab_2:row33:col2, tab_2:row33:col4, tab_2:row33:col5 | — | 0.565 (None% RSE) |
| βBW_V1 | `Q290` · V1/F | 1 | not captured | not captured | not captured | not captured | llm (0.6) | tab_2:row10:col1, tab_2:row10:col4, tab_2:row34:col1, tab_2:row34:col4 | — | not captured |
| Q (L/h) | `Q30` · Q | 1.96 | L/h | 5.444444444444444e-07 | [l] / [h] | not captured | exact (1.0) | tab_2:row11:col1, tab_2:row11:col2, tab_2:row11:col4, tab_2:row11:col5, tab_2:row35:col1, tab_2:row35:col2, tab_2:row35:col4, tab_2:row35:col5 | — | 0.195 (None% RSE) |
| V2 (L) | `Q64` · V2 | 2.56 | L | 0.00256 | [l] | not captured | exact (1.0) | tab_2:row13:col1, tab_2:row13:col2, tab_2:row13:col4, tab_2:row13:col5, tab_2:row37:col1, tab_2:row37:col2, tab_2:row37:col4, tab_2:row37:col5 | — | 0.29 (None% RSE) |
| b | `Q900` · equation variable | 0.282 | not captured | not captured | not captured | not captured | llm (0.6) | tab_2:row23:col1, tab_2:row23:col2, tab_2:row23:col4, tab_2:row23:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'βCLcr_CL' — extend the ontology if this is a real PK parameter (source ['tab_2:row5:col1', 'tab_2:row5:col2', 'tab_2:row5:col4', 'tab_2:row5:col5', 'tab_2:row29:col1', 'tab_2:row29:col2', 'tab_2:row29:col4', 'tab_2:row29:col5'])
- dropped duplicate Q22 ('βBW_CL', value '0.75') — already have one for this compound
- dropped PD-category row 'Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row7:col4', 'tab_2:row31:col4'])
- dropped duplicate Q30 ('βBW_Q', value '0.75') — already have one for this compound
- dropped duplicate Q64 ('βBW_V2', value '1') — already have one for this compound
- dropped duplicate Q22 ('corr V1 CL', value '0.787') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=vaborbactam
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col4', 'tab_2:row4:col5', 'tab_2:row28:col1', 'tab_2:row28:col2', 'tab_2:row28:col4', 'tab_2:row28:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row11:col1', 'tab_2:row11:col2', 'tab_2:row11:col4', 'tab_2:row11:col5', 'tab_2:row35:col1', 'tab_2:row35:col2', 'tab_2:row35:col4', 'tab_2:row35:col5'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['tab_2:row8:col4', 'tab_2:row32:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row9:col1', 'tab_2:row9:col2', 'tab_2:row9:col4', 'tab_2:row9:col5', 'tab_2:row33:col1', 'tab_2:row33:col2', 'tab_2:row33:col4', 'tab_2:row33:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row13:col1', 'tab_2:row13:col2', 'tab_2:row13:col4', 'tab_2:row13:col5', 'tab_2:row37:col1', 'tab_2:row37:col2', 'tab_2:row37:col4', 'tab_2:row37:col5'] |
| C5_unit_missing_Q290 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row10:col1', 'tab_2:row10:col4', 'tab_2:row34:col1', 'tab_2:row34:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.84 L/h | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col4', 'tab_2:row4:col5', 'tab_2:row28:col1', 'tab_2:row28:col2', 'tab_2:row28:col4', 'tab_2:row28:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 14.4 L | not captured | not captured | ['tab_2:row9:col1', 'tab_2:row9:col2', 'tab_2:row9:col4', 'tab_2:row9:col5', 'tab_2:row33:col1', 'tab_2:row33:col2', 'tab_2:row33:col4', 'tab_2:row33:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.56 L | not captured | not captured | ['tab_2:row13:col1', 'tab_2:row13:col2', 'tab_2:row13:col4', 'tab_2:row13:col5', 'tab_2:row37:col1', 'tab_2:row37:col2', 'tab_2:row37:col4', 'tab_2:row37:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vaborbactam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fornari_2024` / `Fornari_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:49 UTC</sub>
