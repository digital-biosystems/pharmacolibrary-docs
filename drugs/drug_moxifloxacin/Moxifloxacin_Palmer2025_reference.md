<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;moxifloxacin&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/&quot;},{&quot;label&quot;:&quot;Palmer_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moxifloxacin_Greenberg2022_reference&quot;,&quot;label&quot;:&quot;Greenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Greenberg2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxifloxacin_Nyangwa2026_reference&quot;,&quot;label&quot;:&quot;Nyangwa_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Nyangwa2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxifloxacin_Xu2024_reference&quot;,&quot;label&quot;:&quot;Xu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Xu2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxifloxacin_Yun2022_reference&quot;,&quot;label&quot;:&quot;Yun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# moxifloxacin — `Moxifloxacin_Palmer2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The moxifloxacin model was quarantined because clearance, volume of distribution, absorption rate constant, absorption lag time and both intercompartmental rate constants had no source values and library placeholders were used instead.**

Although the paper reports apparent parameters for moxifloxacin (CL/F 6.90 L/h, V1/F 61.1 L, Q/F 0.860 L/h, V2/F 44.5 L, MAT 1.01 h), the model's clearance, volume of distribution, absorption rate constant, absorption lag time, central→peripheral rate constant and peripheral→central rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The builder also assumed F=1 and Fm=1 without molar correction, giving an apparent (/F) parameterization, and used first-order depot input consistent with extravascular dosing. The absorption rate constant was defaulted because it was not reported in the source, and this invented absorption was judged not acceptable; the deviations check could not compute a comparison (ratio None). Extracted — moxifloxacin: CL/F 6.9, V1/F 61.1, Q/F 0.86, V2/F 44.5, MAT 1.01 h.

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:39:06.024196+00:00) predates the upstream re-run (2026-10-07 12:29:35.747563+00:00). Current validate status: `rejected`.

## Citation
Palmer M et al., Population pharmacokinetics and dosing…, British journal of clinical… (2025)
  ·  DOI: [10.1111/bcp.70005](https://doi.org/10.1111/bcp.70005)

## Model component
<dbs-pgx drug="moxifloxacin" model-id="Moxifloxacin_Palmer2025_reference" status="rejected" stale="true" population="children with rifampicin-resistant tuberculosis" measured-compound="moxifloxacin" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) a | `Q27` · CL/F | 6.90 | unit | not captured | [unit] | 3.5 | llm_confirmed (0.6) | bcp70005-tbl-0002:row2:col1, bcp70005-tbl-0002:row2:col2, bcp70005-tbl-0002:row2:col3 | — | not captured |
| Vc/F (L) a | `Q76` · V/F | 61.1 | unit | not captured | [unit] | 3.7 | llm_confirmed (0.6) | bcp70005-tbl-0002:row3:col1, bcp70005-tbl-0002:row3:col2, bcp70005-tbl-0002:row3:col3 | — | not captured |
| Q/F (L/h) a | `Q69` · Q/F | 0.860 | unit | not captured | [unit] | 19 | llm_confirmed (0.6) | bcp70005-tbl-0002:row4:col1, bcp70005-tbl-0002:row4:col2, bcp70005-tbl-0002:row4:col3 | — | not captured |
| MAT (h) | `Q73` · MAT | 1.01 | h | 3636.0 | [h] | 5.5 | exact (1.0) | bcp70005-tbl-0002:row6:col1, bcp70005-tbl-0002:row6:col2, bcp70005-tbl-0002:row6:col3 | — | 42.2 (None% RSE) |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | bcp70005-tbl-0002:row7:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV on CL (%CV) c' routed out of structural estimates ('IIV/IOV')
- table section iiv: 'IOV on F (%CV) c' routed out of structural estimates ('IIV/IOV')
- table section iiv: 'IOV on MAT (%CV) c' routed out of structural estimates ('IIV/IOV')
- unit_dimension_mismatch: 'CL/F (L/h) a' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Vc/F (L) a' → Q290 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Q/F (L/h) a' → Q69 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Vp/F (L) a' — extend the ontology if this is a real PK parameter (source ['bcp70005-tbl-0002:row5:col1', 'bcp70005-tbl-0002:row5:col2', 'bcp70005-tbl-0002:row5:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=moxifloxacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L) a' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (14/14 fields) | none |

_Every reader agrees on every compared field of this record._

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q40 | fail | 1.0 | 6.9 | 6.9 | 0.05 | footnote reference category |
| C5_dimension_Q27 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['bcp70005-tbl-0002:row2:col1', 'bcp70005-tbl-0002:row2:col2', 'bcp70005-tbl-0002:row2:col3'] |
| C5_dimension_Q69 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['bcp70005-tbl-0002:row4:col1', 'bcp70005-tbl-0002:row4:col2', 'bcp70005-tbl-0002:row4:col3'] |
| C5_dimension_Q73 | pass | [time] | not captured | not captured | not captured | ['bcp70005-tbl-0002:row6:col1', 'bcp70005-tbl-0002:row6:col2', 'bcp70005-tbl-0002:row6:col3'] |
| C5_dimension_Q76 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['bcp70005-tbl-0002:row3:col1', 'bcp70005-tbl-0002:row3:col2', 'bcp70005-tbl-0002:row3:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 103 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_moxifloxacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Palmer_2025` / `Palmer_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_moxifloxacin/models/modelica/_needs_review/Moxifloxacin_Palmer2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_moxifloxacin/models/modelica/_needs_review/Moxifloxacin_Palmer2025_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:29 UTC</sub>
