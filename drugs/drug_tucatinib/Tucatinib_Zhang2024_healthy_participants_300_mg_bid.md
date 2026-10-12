<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tucatinib&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/&quot;},{&quot;label&quot;:&quot;Zhang_2024 \u00b7 healthy_participants_300_mg_bid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tucatinib_Zhang2024_final_population_pk_model_estimate_rse&quot;,&quot;label&quot;:&quot;Zhang_2024_final_population_pk_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tucatinib_Zhang2024_healthy_participants_300_mg_bid&quot;,&quot;label&quot;:&quot;Zhang_2024_healthy_participants_300_mg_bid&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tucatinib_Zhang2024_her2_mcrcn_68&quot;,&quot;label&quot;:&quot;Zhang_2024_her2_mcrcn_68&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_her2_mcrcn_68.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tucatinib — `Tucatinib_Zhang2024_healthy_participants_300_mg_bid`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.846). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Tucatinib’s modeled terminal half-life of 4.694341396076062 h fails the paper’s comparisons, and ka was defaulted rather than estimated, leaving the record held back.**

The record lists tucatinib’s terminal half-life as 9.16 h; the model does not reproduce the comparison values of 16.2 h and 21.3 h, with a modeled value of 4.694341396076062 h. ka and Tlag were defaulted rather than estimated from the paper; the model also uses first-order absorption after extravascular dosing and assumes F=1 and Fm=1 with no molar correction. A reported unit could not be converted to SI, so the affected parameter had no SI value. Extracted — tucatinib: AUCSS 2.56e+03 ng·h/mL, Cmax 447 ng/mL, Ctrough 84 ng/mL, AUC ratio 1.35, CL/F 117 L/h, V/F 793 L, t1/2β 9.16 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[rac, auc].parameter_id`: this record has Q21, the second reading Q88; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Zhang D et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2024)
  ·  DOI: [10.1007/s40262-024-01412-0](https://doi.org/10.1007/s40262-024-01412-0)

<div class="pk-model-meta" hidden drug="tucatinib" model-id="Tucatinib_Zhang2024_healthy_participants_300_mg_bid" status="needs_review" stale="false" population="healthy participants and patients with HER2+ metastatic breast or colorectal cancer" measured-compound="tucatinib" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUCss (ng·h/mL) | `Q18` · AUCSS | 2560 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Zhang_2024_table_2:row1:col6 | — | not captured |
| Cmax,ss (ng/mL) | `Q32` · Cmax | 447 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Zhang_2024_table_2:row2:col6 | — | not captured |
| Ctrough,ss (ng/mL) | `Q37` · Ctrough | 84 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Zhang_2024_table_2:row3:col6 | — | not captured |
| Rac, AUC | `Q21` · AUC ratio | 1.35 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Zhang_2024_table_2:row4:col6 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 117 | L/h | 3.2500000000000004e-05 | [l] / [h] | not captured | exact (1.0) | Zhang_2024_table_2:row7:col6 | — | not captured |
| Vss/F (L) | `Q76` · V/F | 793 | L | 0.793 | [l] | not captured | llm (0.6) | Zhang_2024_table_2:row8:col6 | — | not captured |
| T1/2, β (h) | `Q60` · t1/2β | 9.16 | h | 32976.0 | [h] | not captured | llm_corrected (0.6) | Zhang_2024_table_2:row9:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped duplicate Q32 ('Rac, Cmax', value '1.21') — already have one for this compound
- dropped duplicate Q37 ('Rac, Ctrough', value '1.63') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tucatinib
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'healthy participants (300 mg bid)n = 128' subgroup of Zhang_2024 (paper reports 4 populations: final population pk model estimate (%rse), healthy participants (300 mg bid)n = 128, her2+ mbcn = 52, her2+ mcrcn = 68)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab1:row1:col2 = '112 (105, 119)'
- unparsed cell Tab1:row2:col2 = '104 (62.4, 145)'
- unparsed cell Tab1:row3:col2 = '83.4 (72.4, 97)'
- unparsed cell Tab1:row4:col2 = '659 (594, 740)'
- unparsed cell Tab1:row5:col2 = '0.385 (0.333, 0.453)'
- unparsed cell Tab1:row6:col2 = '0.395 (0.385, 0.445)'
- unparsed cell Tab1:row16:col2 = '0.274 (0.0326, 0.507)'
- unparsed cell Tab1:row18:col2 = '1.06 (0.0693, 1.57)'
- unparsed cell Tab1:row19:col2 = '0.326 (0.309, 0.343)'
- unparsed cell Zhang_2024_table_2:row1:col1 = '5770 [2100, 14,200]'
- unparsed cell Zhang_2024_table_2:row1:col3 = '3230 [1310, 9210]'
- unparsed cell Zhang_2024_table_2:row1:col5 = '2730 [541, 5760]'
- unparsed cell Zhang_2024_table_2:row2:col1 = '759 [221, 1840]'
- unparsed cell Zhang_2024_table_2:row2:col3 = '402 [141, 960]'
- unparsed cell Zhang_2024_table_2:row2:col5 = '480 [59, 1120]'
- unparsed cell Zhang_2024_table_2:row3:col1 = '303 [102, 870]'
- unparsed cell Zhang_2024_table_2:row3:col3 = '188 [42.9, 675]'
- unparsed cell Zhang_2024_table_2:row3:col5 = '88.4 [20.3, 263]'
- unparsed cell Zhang_2024_table_2:row4:col1 = '1.94 [1.36, 4.59]'
- unparsed cell Zhang_2024_table_2:row4:col3 = '2.45 [1.38, 5.32]'
- unparsed cell Zhang_2024_table_2:row4:col5 = '1.34 [1.13, 2.38]'
- unparsed cell Zhang_2024_table_2:row5:col1 = '1.59 [1.14, 3.99]'
- unparsed cell Zhang_2024_table_2:row5:col3 = '1.92 [1.16, 3.53]'
- unparsed cell Zhang_2024_table_2:row5:col5 = '1.19 [1.07, 2.12]'
- unparsed cell Zhang_2024_table_2:row6:col1 = '2.38 [1.49, 5.94]'
- unparsed cell Zhang_2024_table_2:row6:col3 = '2.96 [1.94, 6.81]'
- unparsed cell Zhang_2024_table_2:row6:col5 = '1.57 [1.23, 2.76]'
- unparsed cell Zhang_2024_table_2:row7:col1 = '52 [21.2, 143]'
- unparsed cell Zhang_2024_table_2:row7:col3 = '92.9 [32.6, 230]'
- unparsed cell Zhang_2024_table_2:row7:col5 = '110 [52.1, 555]'
- unparsed cell Zhang_2024_table_2:row8:col1 = '838 [257, 2190]'
- unparsed cell Zhang_2024_table_2:row8:col3 = '2130 [1680, 4690]'
- unparsed cell Zhang_2024_table_2:row8:col5 = '752 [409, 5650]'
- unparsed cell Zhang_2024_table_2:row9:col1 = '16.2 [7.48, 58.9]'
- unparsed cell Zhang_2024_table_2:row9:col3 = '21.3 [11.9, 53.5]'
- unparsed cell Zhang_2024_table_2:row9:col5 = '8.76 [5.22, 21]'
- companion parameter table 2 transcribed (27 record(s))
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[rac, auc].parameter_id` | Q21 | Q88 | mismatch |
| `qwen3.8-27b` | `parameters[vss/f].parameter_id` | Q76 | Q65 | mismatch |

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
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Zhang_2024_table_2:row1:col6'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Zhang_2024_table_2:row7:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Zhang_2024_table_2:row2:col6'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Zhang_2024_table_2:row3:col6'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Zhang_2024_table_2:row9:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Zhang_2024_table_2:row8:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 117 L/h | not captured | not captured | ['Zhang_2024_table_2:row7:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 793 L | not captured | not captured | ['Zhang_2024_table_2:row8:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=tucatinib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 1.6 | 0.00022694395678331342 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.8 | 0.00022694395678331342 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.80 | 0.00022694395678331342 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_t_half_beta | reference | fail | 16.2 | 4.694341396076062 | 0.2898 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 21.3 | 4.694341396076062 | 0.2204 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tucatinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2024` / `Zhang_2024::healthy_participants_300_mg_bid`)
- model: `../../../knowledgebase/drugs/drug_tucatinib/models/modelica/Tucatinib_Zhang2024_healthy_participants_300_mg_bid.mo`
- deviation: `../../../knowledgebase/drugs/drug_tucatinib/models/modelica/Tucatinib_Zhang2024_healthy_participants_300_mg_bid.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_tucatinib/models/modelica/Tucatinib_Zhang2024_healthy_participants_300_mg_bid.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid/Tucatinib_Zhang2024_healthy_participants_300_mg_bid_modelica.zip" download>Tucatinib_Zhang2024_healthy_participants_300_mg_bid_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid/Tucatinib_Zhang2024_healthy_participants_300_mg_bid_fmi.zip" download>Tucatinib_Zhang2024_healthy_participants_300_mg_bid_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid/Tucatinib_Zhang2024_healthy_participants_300_mg_bid_matlab.zip" download>Tucatinib_Zhang2024_healthy_participants_300_mg_bid_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid/Tucatinib_Zhang2024_healthy_participants_300_mg_bid_matlab_simbio.zip" download>Tucatinib_Zhang2024_healthy_participants_300_mg_bid_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid/Tucatinib_Zhang2024_healthy_participants_300_mg_bid_sbml.zip" download>Tucatinib_Zhang2024_healthy_participants_300_mg_bid_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid/Tucatinib_Zhang2024_healthy_participants_300_mg_bid_cellml.zip" download>Tucatinib_Zhang2024_healthy_participants_300_mg_bid_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid/Tucatinib_Zhang2024_healthy_participants_300_mg_bid.svg" alt="Tucatinib_Zhang2024_healthy_participants_300_mg_bid diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 300 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 300 mg.

<dbs-fmusim paramsurl="drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid/Tucatinib_Zhang2024_healthy_participants_300_mg_bid_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid/Tucatinib_Zhang2024_healthy_participants_300_mg_bid_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Tucatinib_Zhang2024_healthy_participants_300_mg_bid_params.json` · controls `Tucatinib_Zhang2024_healthy_participants_300_mg_bid_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:33 UTC</sub>
