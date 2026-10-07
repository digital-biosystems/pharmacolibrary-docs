<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;rimegepant&quot;,&quot;href&quot;:&quot;drugs/drug_rimegepant/&quot;},{&quot;label&quot;:&quot;Comisar_2025_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rimegepant_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rimegepant/Rimegepant_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rimegepant — `Rimegepant_Comisar2025v2_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-28 14:39:32.269512+00:00) predates the upstream re-run (2026-10-07 15:39:20.245837+00:00). Current validate status: `rejected`.

## Citation
Comisar CM et al., Population Pharmacokinetic Modeling of…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.70051](https://doi.org/10.1002/psp4.70051)

## Model component
<dbs-pgx drug="rimegepant" model-id="Rimegepant_Comisar2025v2_reference" status="rejected" stale="true" population="healthy adults, elderly, adults with renal or hepatic dysfunction, Japanese and Chinese adults" measured-compound="rimegepant" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance, CL/F (L/h) | `Q27` · CL/F | 24.1 | L/h | 6.6944444444444455e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | psp470051-tbl-0003:row2:col1 | — | not captured |
| Apparent central volume of distribution, Vc/F (L) | `Q290` · V1/F | 114 | L | 0.114 | [l] | not captured | llm_confirmed (0.6) | psp470051-tbl-0003:row3:col1 | — | not captured |
| Apparent peripheral volume of distribution, Vp/F (L) | `Q82` · V2/F | 46.0 | L | 0.046 | [l] | not captured | llm_confirmed (0.6) | psp470051-tbl-0003:row4:col1 | — | not captured |
| Apparent inter‐compartmental clearance, Q/F (L/h) | `Q69` · Q/F | 3.94 | L/h | 1.0944444444444445e-06 | [l] / [h] | not captured | llm_corrected (0.6) | psp470051-tbl-0003:row5:col1 | — | not captured |
| Transit absorption rate constant, ktr (h−1) | `Q306` · ktr | 8.23 | h−1 | 0.002286111111111111 | [1] / [h] | not captured | llm_corrected (0.6) | psp470051-tbl-0003:row6:col1 | — | not captured |
| First‐order absorption rate constant, ka (h−1) | `Q49` · kabs | 3.86 | h−1 | 0.0010722222222222222 | [1] / [h] | not captured | llm_confirmed (0.6) | psp470051-tbl-0003:row7:col1 | — | not captured |
| Fed‐status on relative bioavailability (F1) | `Q87` · Frel | -0.315 | F1 | not captured | not captured | not captured | llm_confirmed (0.6) | psp470051-tbl-0003:row14:col1 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | -0.229 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470051-tbl-0003:row9:col1 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | -0.423 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470051-tbl-0003:row10:col1 | — | not captured |
| theta_q338_fed | `Q900` · theta_q338_fed | -0.706 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470051-tbl-0003:row15:col1 | — | not captured |
| theta_ktr_formulation | `Q900` · theta_ktr_formulation | 2.03 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470051-tbl-0003:row17:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive error (ng/L)' routed out of structural estimates ('Residual errors')
- dropped duplicate Q27 ('Fluconazole use on CL/F', value '-0.427') — already have one for this compound
- dropped unlinked row (NIL): 'Itraconazole use on CL/F' — extend the ontology if this is a real PK parameter (source ['psp470051-tbl-0003:row12:col1'])
- relinked 'Itraconazole use on ktr' Q338 → Q306 — same-named PK parameter preferred over the PD code in a popPK record
- dropped duplicate Q306 ('Itraconazole use on ktr', value '-0.351') — already have one for this compound
- dropped duplicate Q306 ('Oral disintegrating tablet on ktr', value '0.355') — already have one for this compound
- dropped unlinked row (NIL): 'Dose effect on F1' — extend the ontology if this is a real PK parameter (source ['psp470051-tbl-0003:row18:col1'])
- dropped duplicate Q306 ('10/25 mg dose effect on ktr', value '0.536') — already have one for this compound
- covariate effect for Q338 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rimegepant
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp470051-tbl-0003:row2:col2 = '4.86%'
- unparsed cell psp470051-tbl-0003:row2:col3 = '31.2% (5.1%)'
- unparsed cell psp470051-tbl-0003:row3:col2 = '5.36%'
- unparsed cell psp470051-tbl-0003:row3:col3 = '40.6% (6.1%)'
- unparsed cell psp470051-tbl-0003:row4:col2 = '5.3%'
- unparsed cell psp470051-tbl-0003:row4:col3 = '28.2% (8.2%)'
- unparsed cell psp470051-tbl-0003:row5:col2 = '6.37%'
- unparsed cell psp470051-tbl-0003:row6:col2 = '8.24%'
- unparsed cell psp470051-tbl-0003:row6:col3 = '53.1% (6.9%)'
- unparsed cell psp470051-tbl-0003:row7:col2 = '28.4%'
- unparsed cell psp470051-tbl-0003:row9:col2 = '27.8%'
- unparsed cell psp470051-tbl-0003:row10:col2 = '24.9%'
- unparsed cell psp470051-tbl-0003:row11:col2 = '2.88%'
- unparsed cell psp470051-tbl-0003:row12:col2 = '1.25%'
- unparsed cell psp470051-tbl-0003:row13:col2 = '28.9%'
- unparsed cell psp470051-tbl-0003:row14:col2 = '9.74%'
- unparsed cell psp470051-tbl-0003:row15:col2 = '3.34%'
- unparsed cell psp470051-tbl-0003:row16:col2 = '29.6%'
- unparsed cell psp470051-tbl-0003:row17:col2 = '24.1%'
- unparsed cell psp470051-tbl-0003:row18:col2 = '12.6%'
- unparsed cell psp470051-tbl-0003:row19:col2 = '48.7%'
- unparsed cell psp470051-tbl-0003:row25:col2 = '12.0%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[absorption rate constant]` | 3.86 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent central volume of distribution]` | 114.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent clearance]` | 24.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent inter-compartmental clearance]` | 3.94 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent peripheral volume of distribution]` | 46.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[transit absorption rate constant]` | 8.23 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470051-tbl-0003:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470051-tbl-0003:row3:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470051-tbl-0003:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470051-tbl-0003:row7:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470051-tbl-0003:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470051-tbl-0003:row4:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=-0.315 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 24.1 L/h | not captured | not captured | ['psp470051-tbl-0003:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 114 L | not captured | not captured | ['psp470051-tbl-0003:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 46 L | not captured | not captured | ['psp470051-tbl-0003:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=rimegepant) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rimegepant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Comisar_2025_2` / `Comisar_2025_2::reference`)
- model: `../../../knowledgebase/drugs/drug_rimegepant/models/modelica/Rimegepant_Comisar2025v2_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_rimegepant/models/modelica/Rimegepant_Comisar2025v2_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_rimegepant/models/modelica/Rimegepant_Comisar2025v2_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:39 UTC</sub>
