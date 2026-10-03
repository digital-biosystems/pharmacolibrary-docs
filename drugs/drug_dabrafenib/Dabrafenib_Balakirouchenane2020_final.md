<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dabrafenib&quot;,&quot;href&quot;:&quot;drugs/drug_dabrafenib/&quot;},{&quot;label&quot;:&quot;Balakirouchenane_2020 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dabrafenib_Balakirouchenane2020_base&quot;,&quot;label&quot;:&quot;Balakirouchenane_2020_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_base.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dabrafenib_Balakirouchenane2020_final_final_tra_model&quot;,&quot;label&quot;:&quot;Balakirouchenane_2020_final_final_tra_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_final_tra_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dabrafenib — `Dabrafenib_Balakirouchenane2020_final`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

### Reviewer guidance

**The dabrafenib parent–metabolite model was rejected because the age covariate on metabolite clearance, θage/(CLm/F) = -0.589 (unit CLm/F), is negative, which was judged implausible for a clearance covariate effect.**

The record's other parameters (CL/F 19.3 L/h, V1/F 39.1 L, kabs 1.8 1/h, Q/F 3.40 L/h, tlag 0.499 h, and metabolite hydroxy-dabrafenib parameters CLm/F 23.2 L/h, V1/F 18.7 L, V2/F 27.1 L, Qm/F 7.21 L/h) are all positive and plausible. The failing check concerns the covariate coefficient θage/(CLm/F) of -0.589, reported in the non-SI unit 'CLm/F', which could not be converted, so the parameter reached the model without an SI value. A second reader disagreed on whether the dose compound was dabrafenib alone or dabrafenib together with trametinib, and on the ontology identifier assigned to the absorption rate constant, but the rejection rests on the negative clearance covariate value. Extracted — dabrafenib: CL/F 19.3 L/h, V1/F 39.1 L, kabs 1.8 1/h, Q/F 3.4 L/h, V2/F 5.11 L, tlag 0.499 h; hydroxy-dabrafenib: V1/F 18.7 L, CL/F 23.2 L/h, Q/F 7.21 L/h, V2/F 27.1 L, CLm/F -0.589 CLm/F.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has dabrafenib, the second reading dabrafenib, trametinib; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020)
  ·  DOI: [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931)

## Model component
<dbs-pgx drug="dabrafenib" model-id="Dabrafenib_Balakirouchenane2020_final" status="rejected" stale="false" population="adults with BRAF-mutated metastatic melanoma" measured-compound="dabrafenib" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 11 extracted.

**Parameterization:** CL/F, CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 19.3 | L/h | 5.361111111111112e-06 | [l] / [h] | not captured | exact (1.0) | Balakirouchenane_2020_table_2:row1:col3, Balakirouchenane_2020_table_2:row1:col4 | — | 16.0 (None% RSE) |
| V2/F (L) | `Q290` · V1/F | 39.1 | L | 0.0391 | [l] | not captured | exact (1.0) | Balakirouchenane_2020_table_2:row2:col3, Balakirouchenane_2020_table_2:row2:col4 | — | not captured |
| ka (1/h) | `Q49` · kabs | 1.8 | 1/h | 0.0005 | 1/h | not captured | exact (1.0) | Balakirouchenane_2020_table_2:row3:col3, Balakirouchenane_2020_table_2:row3:col4 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 3.40 | L/h | 9.444444444444444e-07 | [l] / [h] | not captured | exact (1.0) | Balakirouchenane_2020_table_2:row4:col3, Balakirouchenane_2020_table_2:row4:col4 | — | not captured |
| V4/F (L) | `Q290` · V1/F | 18.7 | L | 0.0187 | [l] | not captured | exact (1.0) | Balakirouchenane_2020_table_2:row5:col3, Balakirouchenane_2020_table_2:row5:col4 | — | not captured |
| CLm/F (L/h) | `Q27` · CL/F | 23.2 | L/h | 6.444444444444444e-06 | [l] / [h] | not captured | exact (1.0) | Balakirouchenane_2020_table_2:row6:col3, Balakirouchenane_2020_table_2:row6:col4 | — | not captured |
| V3/F (L) | `Q82` · V2/F | 5.11 | L | 0.005110000000000001 | [l] | not captured | exact (1.0) | Balakirouchenane_2020_table_2:row7:col3, Balakirouchenane_2020_table_2:row7:col4 | — | 50.8 (None% RSE) |
| Qm/F (L/h) | `Q69` · Q/F | 7.21 | L/h | 2.0027777777777777e-06 | [l] / [h] | not captured | exact (1.0) | Balakirouchenane_2020_table_2:row8:col3, Balakirouchenane_2020_table_2:row8:col4 | — | not captured |
| V5/F (L) | `Q82` · V2/F | 27.1 | L | 0.027100000000000003 | [l] | not captured | exact (1.0) | Balakirouchenane_2020_table_2:row9:col3, Balakirouchenane_2020_table_2:row9:col4 | — | not captured |
| Tlag (h) | `Q83` · tlag | 0.499 | h | 1796.4 | [h] | not captured | exact (1.0) | Balakirouchenane_2020_table_2:row10:col3, Balakirouchenane_2020_table_2:row10:col4 | — | not captured |
| θage/(CLm/F) | `Q351` · CLm/F | -0.589 | CLm/F | not captured | [clm] / [f] | not captured | llm (0.6) | Balakirouchenane_2020_table_2:row12:col3, Balakirouchenane_2020_table_2:row12:col4 | — | 24.0 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'CL/F' (CL/F)
- dropped duplicate Q27 ('θage/(CL/F)', value '-0.536') — already have one for this compound
- unit_dimension_unknown: 'CLm/F' (CLm/F)
- dropped duplicate Q27 ('θsex/(CL/F)', value '0.832') — already have one for this compound
- implicit units: 'ka (1/h)' → 1/h (from the paper text: "The parameter is explicitly listed in the input as 'ka (1/h)'. Additionally, the text states 'A first-order absorption w")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dabrafenib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- model-stage split: 'final dab/ohd model' is the final model of Balakirouchenane_2020 (paper reports 3 stages: base dab/ohd model, final dab/ohd model, final tra model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 24/24 row label(s) assigned, 84 linked by role; re-tagged trametinib→parent ×105, trametinib→hydroxy-dabrafenib ×39

**Extraction notes:**
- unparsed cell Balakirouchenane_2020_table_2:row11:col6 = '−0.827−0.215'
- unparsed cell Balakirouchenane_2020_table_2:row12:col6 = '−0.879−0.168'
- companion parameter table 2 transcribed (118 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.895 (17/19 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[k a].parameter_id` | Q95 | Q49 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | dabrafenib | dabrafenib, trametinib | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q351 | fail | not captured | -0.589 | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Balakirouchenane_2020_table_2:row1:col3', 'Balakirouchenane_2020_table_2:row1:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Balakirouchenane_2020_table_2:row6:col3', 'Balakirouchenane_2020_table_2:row6:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Balakirouchenane_2020_table_2:row2:col3', 'Balakirouchenane_2020_table_2:row2:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Balakirouchenane_2020_table_2:row5:col3', 'Balakirouchenane_2020_table_2:row5:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Balakirouchenane_2020_table_2:row3:col3', 'Balakirouchenane_2020_table_2:row3:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Balakirouchenane_2020_table_2:row4:col3', 'Balakirouchenane_2020_table_2:row4:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Balakirouchenane_2020_table_2:row8:col3', 'Balakirouchenane_2020_table_2:row8:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Balakirouchenane_2020_table_2:row7:col3', 'Balakirouchenane_2020_table_2:row7:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Balakirouchenane_2020_table_2:row9:col3', 'Balakirouchenane_2020_table_2:row9:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Balakirouchenane_2020_table_2:row10:col3', 'Balakirouchenane_2020_table_2:row10:col4'] |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] | CLm/F | not captured | not captured | ['Balakirouchenane_2020_table_2:row12:col3', 'Balakirouchenane_2020_table_2:row12:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19.3 L/h | not captured | not captured | ['Balakirouchenane_2020_table_2:row1:col3', 'Balakirouchenane_2020_table_2:row1:col4'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 23.2 L/h | not captured | not captured | ['Balakirouchenane_2020_table_2:row6:col3', 'Balakirouchenane_2020_table_2:row6:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 39.1 L | not captured | not captured | ['Balakirouchenane_2020_table_2:row2:col3', 'Balakirouchenane_2020_table_2:row2:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 18.7 L | not captured | not captured | ['Balakirouchenane_2020_table_2:row5:col3', 'Balakirouchenane_2020_table_2:row5:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 5.11 L | not captured | not captured | ['Balakirouchenane_2020_table_2:row7:col3', 'Balakirouchenane_2020_table_2:row7:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 27.1 L | not captured | not captured | ['Balakirouchenane_2020_table_2:row9:col3', 'Balakirouchenane_2020_table_2:row9:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dabrafenib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Balakirouchenane_2020` / `Balakirouchenane_2020::final`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-26 20:40 UTC</sub>
