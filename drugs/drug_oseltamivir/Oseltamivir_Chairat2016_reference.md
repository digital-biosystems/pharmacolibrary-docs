<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;oseltamivir&quot;,&quot;href&quot;:&quot;drugs/drug_oseltamivir/&quot;},{&quot;label&quot;:&quot;Chairat_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oseltamivir_Lin2012_reference&quot;,&quot;label&quot;:&quot;Lin_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oseltamivir — `Oseltamivir_Chairat2016_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `oseltamivir`, measured `oseltamivir carboxylate`.

## Citation
Chairat K et al., Population pharmacokinetics of oseltami…, British journal of clinical… (2016)
  ·  DOI: [10.1111/bcp.12892](https://doi.org/10.1111/bcp.12892)

## Model component
<dbs-pgx drug="oseltamivir" model-id="Oseltamivir_Chairat2016_reference" status="rejected" stale="false" population="obese and non-obese Thai adult volunteers" measured-compound="oseltamivir carboxylate" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CLm/F, V1/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F (%) | `Q40` · Fab | 100 | not captured | not captured | not captured | not captured | exact (1.0) | bcp12892-tbl-0001:row2:col1, bcp12892-tbl-0001:row2:col4 | — | 17.6 (35.1% RSE) |
| k a ( h – 1 ) | `Q49` · kabs | 2.81 | h | not captured | [h] | 10.3 | exact (1.0) | bcp12892-tbl-0001:row3:col1, bcp12892-tbl-0001:row3:col2, bcp12892-tbl-0001:row3:col4 | — | 98.7 (19.7% RSE) |
| CL/F OS (l h −1 ) | `Q351` · CLm/F | 585 | l h −1 | 0.0001625 | [l] / [h] | 4.91 | exact (1.0) | bcp12892-tbl-0001:row4:col1, bcp12892-tbl-0001:row4:col2, bcp12892-tbl-0001:row4:col4 | — | 16.6 (48.8% RSE) |
| V/F OS (l) | `Q367` · Vm/F | 1110 | l | 1.11 | [l] | 5.87 | llm_confirmed (0.6) | bcp12892-tbl-0001:row5:col1, bcp12892-tbl-0001:row5:col2, bcp12892-tbl-0001:row5:col4 | — | 18.6 (48.2% RSE) |
| k m ( h – 1 ) | `Q305` · kfm | 2.13 | h | not captured | [h] | 6.93 | exact (1.0) | bcp12892-tbl-0001:row6:col1, bcp12892-tbl-0001:row6:col2, bcp12892-tbl-0001:row6:col4 | — | not captured |
| CL/F OC (l h −1 ) | `Q351` · CLm/F | 20.6 | l h −1 | 5.722222222222222e-06 | [l] / [h] | 3.79 | exact (1.0) | bcp12892-tbl-0001:row9:col1, bcp12892-tbl-0001:row9:col2 | — | not captured |
| V/F OC (l) | `Q290` · V1/F | 159 | l | 0.159 | [l] | 4.93 | exact (1.0) | bcp12892-tbl-0001:row10:col1, bcp12892-tbl-0001:row10:col2, bcp12892-tbl-0001:row10:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F, relative bioavailability | Q87 | not captured | llm_confirmed |
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'F (%)' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- table section iiv: 'k a ( h – 1 )' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- table section iiv: 'CL/F OS (l h −1 )' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- table section iiv: 'V/F OS (l)' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- table section iiv: 'k m ( h – 1 )' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- table section iiv: 'V/F OC (l)' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- unit_dimension_mismatch: 'k a ( h – 1 )' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k m ( h – 1 )' → Q305 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: '% change per 10 units of CL CR' (CL/F)
- dropped duplicate Q27 ('Effect of CL CR on CL/F OC (% change per 10 units of CL CR )', value '3.84') — already have one for this compound
- dropped value-less row: 'CLCR, creatinine clearance'
- dropped value-less row: 'CL/FOS , oseltamivir clearance'
- dropped value-less row: 'CL/FOC, oseltamivir carboxylate clearance'
- dropped value-less row: 'ka, absorption rate constant'
- dropped value-less row: 'km, metabolism rate constant'
- dropped value-less row: 'V/FOS, apparent volume of distribution of oseltamivir'
- dropped value-less row: 'V/FOC, apparent volume of distribution of oseltamivir carboxylate'
- metabolite oseltamivir carboxylate: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite oseltamivir carboxylate: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=oseltamivir carboxylate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 22 linked by role; re-tagged oseltamivir carboxylate→parent ×15
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 2 transcribed (0 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp12892-tbl-0001:row10:col1', 'bcp12892-tbl-0001:row10:col2', 'bcp12892-tbl-0001:row10:col4'] |
| C5_dimension_Q305 | fail | [time] | h | not captured | not captured | ['bcp12892-tbl-0001:row6:col1', 'bcp12892-tbl-0001:row6:col2', 'bcp12892-tbl-0001:row6:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp12892-tbl-0001:row4:col1', 'bcp12892-tbl-0001:row4:col2', 'bcp12892-tbl-0001:row4:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp12892-tbl-0001:row9:col1', 'bcp12892-tbl-0001:row9:col2'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp12892-tbl-0001:row5:col1', 'bcp12892-tbl-0001:row5:col2', 'bcp12892-tbl-0001:row5:col4'] |
| C5_dimension_Q49 | fail | [time] | h | not captured | not captured | ['bcp12892-tbl-0001:row3:col1', 'bcp12892-tbl-0001:row3:col2', 'bcp12892-tbl-0001:row3:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 159 L | not captured | not captured | ['bcp12892-tbl-0001:row10:col1', 'bcp12892-tbl-0001:row10:col2', 'bcp12892-tbl-0001:row10:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_oseltamivir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chairat_2016` / `Chairat_2016::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:06 UTC</sub>
