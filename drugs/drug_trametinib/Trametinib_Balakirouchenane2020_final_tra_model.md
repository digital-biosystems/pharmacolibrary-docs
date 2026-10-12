<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;trametinib&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/&quot;},{&quot;label&quot;:&quot;Balakirouchenane_2020 \u00b7 final_tra_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trametinib_Ravix2024_reference&quot;,&quot;label&quot;:&quot;Ravix_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/Trametinib_Ravix2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trametinib_Balakirouchenane2020_final_tra_model&quot;,&quot;label&quot;:&quot;Balakirouchenane_2020_final_tra_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/Trametinib_Balakirouchenane2020_final_tra_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trametinib — `Trametinib_Balakirouchenane2020_final_tra_model`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.615). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The record was refused because trametinib’s peripheral volume, V2/F of 417.0 L, was not covered, and its output and model structure did not match the record.**

The parameter coverage was 5 of 6; V2/F, meaning the peripheral volume adjusted for bioavailability, was not emitted or defaulted. The output was assigned to the central compartment rather than the compartment for measured trametinib. The recorded parent–metabolite structure did not match the one-compartment enteral structure used. The apparent parameterization assumed F=1 and Fm=1, with no molar correction. Extracted — trametinib: CL/F 5.83 L/h, V1/F 61.9 L, kabs 0.913 1/h, Q/F 64.9 L/h, V2/F 417 L, tlag 0.709 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has dabrafenib and trametinib, the second reading trametinib; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

> **Dose compound ≠ measured compound:** dosed `dabrafenib and trametinib`, measured `trametinib`.

## Citation
Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020)
  ·  DOI: [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931)

<div class="pk-model-meta" hidden drug="trametinib" model-id="Trametinib_Balakirouchenane2020_final_tra_model" status="rejected" stale="false" population="patients with BRAF-mutated metastatic solid tumors" measured-compound="trametinib" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 5.83 | L/h | 1.6194444444444445e-06 | [l] / [h] | not captured | exact (1.0) | cancers-12-00931-t003:row2:col1, cancers-12-00931-t003:row2:col2 | — | 29.6 (None% RSE) |
| V2/F (L) | `Q290` · V1/F | 61.9 | L | 0.0619 | [l] | not captured | exact (1.0) | cancers-12-00931-t003:row3:col1, cancers-12-00931-t003:row3:col2 | — | not captured |
| ka (1/h) | `Q49` · kabs | 0.913 | 1/h | 0.00025361111111111114 | 1/h | not captured | exact (1.0) | cancers-12-00931-t003:row4:col1, cancers-12-00931-t003:row4:col2 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 64.9 | L/h | 1.8027777777777783e-05 | [l] / [h] | not captured | exact (1.0) | cancers-12-00931-t003:row5:col1, cancers-12-00931-t003:row5:col2 | — | not captured |
| V3/F (L) | `Q82` · V2/F | 417.0 | L | 0.417 | [l] | not captured | exact (1.0) | cancers-12-00931-t003:row6:col1, cancers-12-00931-t003:row6:col2 | — | not captured |
| Tlag (h) | `Q83` · tlag | 0.709 | h | 2552.4 | [h] | not captured | exact (1.0) | cancers-12-00931-t003:row7:col1, cancers-12-00931-t003:row7:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- implicit units: 'ka (1/h)' → 1/h (from the paper text: 'The provided parameter entry states “ka (1/h) = 0.913”; the parenthetical gives the unit explicitly.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=trametinib
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- population split: 'final tra model' subgroup of Balakirouchenane_2020 (paper reports 3 populations: dlt, final tra model, no dlt)
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 24 linked by role; re-tagged trametinib→dabrafenib ×1, trametinib→hydroxy-dabrafenib ×1
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- unparsed cell Balakirouchenane_2020_table_4:row1:col1 = '9624 (8121–11676)'
- unparsed cell Balakirouchenane_2020_table_4:row1:col2 = '7485 (3399–17712)'
- unparsed cell Balakirouchenane_2020_table_4:row2:col1 = '7509.5 (4918–10300)'
- unparsed cell Balakirouchenane_2020_table_4:row2:col2 = '5812 (2459–10300)'
- unparsed cell Balakirouchenane_2020_table_4:row3:col1 = '16855 (13491–21976)'
- unparsed cell Balakirouchenane_2020_table_4:row3:col2 = '13605 (5877–28012)'
- unparsed cell Balakirouchenane_2020_table_4:row4:col1 = '54.5 (37–81)'
- unparsed cell Balakirouchenane_2020_table_4:row4:col2 = '59 (20–90)'
- unparsed cell Balakirouchenane_2020_table_4:row5:col1 = '25.9 (20.4–33.4)'
- unparsed cell Balakirouchenane_2020_table_4:row5:col2 = '25.1 (19.6–40.9)'
- unparsed cell Balakirouchenane_2020_table_4:row16:col1 = '268 (144–448)'
- unparsed cell Balakirouchenane_2020_table_4:row16:col2 = '268 (111–750)'
- unparsed cell Balakirouchenane_2020_table_4:row17:col1 = '55 (37–90)'
- unparsed cell Balakirouchenane_2020_table_4:row17:col2 = '61 (20–89)'
- unparsed cell Balakirouchenane_2020_table_4:row18:col1 = '25.9 (20.4–35.5)'
- unparsed cell Balakirouchenane_2020_table_4:row18:col2 = '25.2 (19.6–40.9)'
- companion parameter table 4 transcribed (26 record(s))
- LLM selected parameter table(s) 4
- dropped sensitivity-analysis table(s) 2, 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['dabrafenib', 'hydroxy-dabrafenib', 'metabolism']] | [] | mismatch |
| `qwen3.8-27b` | `parameters[parameters]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2/f].parameter_id` | Q290 | Q82 | mismatch |
| `qwen3.8-27b` | `parameters[v3/f].parameter_id` | Q82 | Q78 | mismatch |
| `qwen3.8-27b` | `screen.dose_compound` | dabrafenib and trametinib | trametinib | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cancers-12-00931-t003:row2:col1', 'cancers-12-00931-t003:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cancers-12-00931-t003:row3:col1', 'cancers-12-00931-t003:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cancers-12-00931-t003:row4:col1', 'cancers-12-00931-t003:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cancers-12-00931-t003:row5:col1', 'cancers-12-00931-t003:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cancers-12-00931-t003:row6:col1', 'cancers-12-00931-t003:row6:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['cancers-12-00931-t003:row7:col1', 'cancers-12-00931-t003:row7:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.83 L/h | not captured | not captured | ['cancers-12-00931-t003:row2:col1', 'cancers-12-00931-t003:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 61.9 L | not captured | not captured | ['cancers-12-00931-t003:row3:col1', 'cancers-12-00931-t003:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 417 L | not captured | not captured | ['cancers-12-00931-t003:row6:col1', 'cancers-12-00931-t003:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=trametinib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 5 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_trametinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Balakirouchenane_2020` / `Balakirouchenane_2020::final_tra_model`)
- model: `../../../knowledgebase/drugs/drug_trametinib/models/modelica/Trametinib_Balakirouchenane2020_final_tra_model.mo`
- deviation: `../../../knowledgebase/drugs/drug_trametinib/models/modelica/Trametinib_Balakirouchenane2020_final_tra_model.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_trametinib/models/modelica/Trametinib_Balakirouchenane2020_final_tra_model.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 75 mg, single dose, first-order absorption (ka 0.913 /h, lag 42.5 min, F 1). Doses in the paper: 75, 150 mg.

<dbs-fmusim paramsurl="drugs/drug_trametinib/Trametinib_Balakirouchenane2020_final_tra_model/Trametinib_Balakirouchenane2020_final_tra_model_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_trametinib/Trametinib_Balakirouchenane2020_final_tra_model/Trametinib_Balakirouchenane2020_final_tra_model_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Trametinib_Balakirouchenane2020_final_tra_model_params.json` · controls `Trametinib_Balakirouchenane2020_final_tra_model_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:27 UTC</sub>
