<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;patritumab deruxtecan&quot;,&quot;href&quot;:&quot;drugs/drug_patritumab_deruxtecan/&quot;},{&quot;label&quot;:&quot;Lu_2023 \u00b7 mean&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# patritumab deruxtecan — `PatritumabDeruxtecan_Lu2023_mean`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.033). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the unit for the metabolite formation rate constant could not be converted to standard SI units, causing a dimension mismatch.**

The parameter governing the formation of deruxtecan from patritumab deruxtecan is reported with a unit of 1/h. This specific unit was not recognized for conversion to standard SI units, so the value could not be standardized. Consequently, the parameter lacked a valid SI value, causing a dimension mismatch on this structural parameter. Extracted — patritumab deruxtecan: CL 0.342 L/d, V1 2.94 L, Vmax 4.35e+03 μg/d, Km 576 ng/mL, Q 0.443 L/d, V2 5.37 L; deruxtecan: kfm 0.03 1/h, CL 5.71 L/h, kel 0.18 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has patritumab_deruxtecan, the second reading patritumab deruxtecan; it also differs on 28 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Lu Y et al., Population Pharmacokinetics of Patritum…, Journal of clinical pharmac… (2023)
  ·  DOI: [10.1002/jcph.2137](https://doi.org/10.1002/jcph.2137)

## Model component
<dbs-pgx drug="patritumab deruxtecan" model-id="PatritumabDeruxtecan_Lu2023_mean" status="rejected" stale="false" population="patients with HER3-expressing solid tumors" measured-compound="patritumab_deruxtecan" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 9 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLlin, L/d | `Q22` · CL | 0.342 | L/d | 3.958333333333333e-09 | [l] / [d] | not captured | llm (0.6) | jcph2137-tbl-0002:row1:col1 | — | not captured |
| Vc, L | `Q63` · V1 | 2.943 | L | 0.0029430000000000003 | [l] | not captured | exact (1.0) | jcph2137-tbl-0002:row2:col1 | — | not captured |
| Vmax, μg/d | `Q66` · Vmax | 4352.2 | μg/d | not captured | [µg] / [d] | not captured | special_case (0.95) | jcph2137-tbl-0002:row3:col1 | — | not captured |
| Km, ng/mL | `Q1` · Km | 575.9 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | jcph2137-tbl-0002:row4:col1 | — | not captured |
| Q, L/d | `Q30` · Q | 0.443 | L/d | 5.127314814814815e-09 | [l] / [d] | not captured | exact (1.0) | jcph2137-tbl-0002:row5:col1 | — | not captured |
| Vp, L | `Q64` · V2 | 5.369 | L | 0.005369 | [l] | not captured | exact (1.0) | jcph2137-tbl-0002:row6:col1 | — | not captured |
| Krel, 1/h | `Q305` · kfm | 0.030 | 1/h | 8.333333333333334e-06 | [1] / [h] | not captured | exact (1.0) | Lu_2023_table_3:row0:col1 | — | not captured |
| CLDXd, L/h | `Q22` · CL | 5.713 | L/h | 1.5869444444444444e-06 | [l] / [h] | not captured | exact (1.0) | Lu_2023_table_3:row1:col1 | — | not captured |
| β, 1/h | `Q47` · kel | 0.180 | 1/h | 4.9999999999999996e-05 | [1] / [h] | not captured | exact (1.0) | Lu_2023_table_3:row3:col1 | — | not captured |
| weight_krel | `Q900` · weight_krel | -0.467 | not captured | not captured | not captured | not captured | not captured (not captured) | Lu_2023_table_3:row4:col1 | — | not captured |
| theta_q25_hepatic_impairment_mild_cldxd | `Q900` · theta_q25_hepatic_impairment_mild_cldxd | 0.706 | not captured | not captured | not captured | not captured | not captured (not captured) | Lu_2023_table_3:row5:col1 | — | not captured |
| theta_cl_hepatic_impairment_moderate_data_missing_cldxd | `Q900` · theta_cl_hepatic_impairment_moderate_data_missing_cldxd | 0.532 | not captured | not captured | not captured | not captured | not captured (not captured) | Lu_2023_table_3:row6:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Vmax, μg/d' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q22 ('Weight–CLlin', value '0.911') — already have one for this compound
- dropped duplicate Q63 ('Weight–Vc', value '0.654') — already have one for this compound
- dropped duplicate Q22 ('Albumin level–CLlin', value '-0.795') — already have one for this compound
- dropped duplicate Q22 ('Female–CLlin', value '0.865') — already have one for this compound
- dropped duplicate Q22 ('Breast cancer–CLlin', value '0.811') — already have one for this compound
- dropped unlinked row (NIL): 'θ' — extend the ontology if this is a real PK parameter (source ['Lu_2023_table_3:row2:col1'])
- covariate level 'Weight–Krel' → Q900:weight_krel = -0.467 (power on Q22)
- covariate effect for Q25 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=patritumab_deruxtecan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- population split: 'mean' subgroup of Lu_2023 (paper reports 2 populations: iiv of mean, %, mean)
- row roles: 2 per-group rows of patritumab_deruxtecan covariate_effect but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of deruxtecan covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 20 linked by role; re-tagged parent→deruxtecan ×24
- molar mass: none found for 'patritumab_deruxtecan' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph2137-tbl-0002:row1:col3 = '0.301 to 0.384'
- unparsed cell jcph2137-tbl-0002:row2:col3 = '2.893 to 2.994'
- unparsed cell jcph2137-tbl-0002:row3:col3 = '3660.2 to 5044.2'
- unparsed cell jcph2137-tbl-0002:row4:col3 = '357.4 to 794.5'
- unparsed cell jcph2137-tbl-0002:row5:col3 = '0.402 to 0.484'
- unparsed cell jcph2137-tbl-0002:row6:col3 = '4.949 to 5.788'
- unparsed cell jcph2137-tbl-0002:row7:col3 = '0.663 to 1.159'
- unparsed cell jcph2137-tbl-0002:row8:col3 = '0.585 to 0.723'
- unparsed cell jcph2137-tbl-0002:row9:col3 = '−1.152 to −0.439'
- unparsed cell jcph2137-tbl-0002:row10:col3 = '0.769 to 0.961'
- unparsed cell jcph2137-tbl-0002:row11:col3 = '0.733 to 0.889'
- unparsed cell Lu_2023_table_3:row0:col3 = '0.029 to 0.031'
- unparsed cell Lu_2023_table_3:row1:col3 = '5.359 to 6.066'
- unparsed cell Lu_2023_table_3:row2:col3 = '0.628 to 0.668'
- unparsed cell Lu_2023_table_3:row3:col3 = '0.168 to 0.193'
- unparsed cell Lu_2023_table_3:row4:col3 = '−0.627 to −0.307'
- unparsed cell Lu_2023_table_3:row5:col3 = '0.609 to 0.803'
- unparsed cell Lu_2023_table_3:row6:col3 = '0.206 to 0.857'
- unparsed cell Lu_2023_table_3:row7:col3 = '0.161 to 0.226'
- unparsed cell Lu_2023_table_3:row8:col3 = '0.105 to 0.180'
- unparsed cell Lu_2023_table_3:row9:col3 = '0.287 to 0.434'
- unparsed cell Lu_2023_table_3:row10:col3 = '0.379 to 0.405'
- companion parameter table 3 transcribed (29 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.033 (1/30 fields) | 29 |

<details><summary>29 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['patritumab_deruxtecan', 'deruxtecan', 'metabolism']] | [['dxd-conjugated antibody', 'unconjugated dxd', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cldxd]` | 5.713 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cldxd]` | not captured | 5.713 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cllin]` | 0.342 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cllin]` | not captured | 0.342 | only_one_extracted |
| `gpt-oss-120b` | `parameters[km]` | 575.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[km]` | not captured | 575.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[krel]` | 0.030 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[krel]` | not captured | 0.030 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 0.443 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | not captured | 0.443 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_hepatic_impairment_mild_cldxd]` | not captured | 0.706 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_hepatic_impairment_moderate_data_missing_cldxd]` | 0.532 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_hepatic_impairment_moderate_data_missing_cldxd]` | not captured | 0.532 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q25_hepatic_impairment_mild_cldxd]` | 0.706 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 2.943 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | 2.943 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmax]` | 4352.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmax]` | not captured | 4352.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 5.369 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | not captured | 5.369 | only_one_extracted |
| `gpt-oss-120b` | `parameters[weight-cllin]` | not captured | 0.911 | only_one_extracted |
| `gpt-oss-120b` | `parameters[weight_krel]` | -0.467 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[weight_krel]` | not captured | -0.467 | only_one_extracted |
| `gpt-oss-120b` | `parameters[β]` | 0.180 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[β]` | not captured | 0.180 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ]` | not captured | 0.648 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | patritumab_deruxtecan | patritumab deruxtecan | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | patritumab_deruxtecan | DXd-conjugated antibody | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['jcph2137-tbl-0002:row4:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph2137-tbl-0002:row1:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Lu_2023_table_3:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph2137-tbl-0002:row5:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Lu_2023_table_3:row0:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Lu_2023_table_3:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph2137-tbl-0002:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph2137-tbl-0002:row6:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | μg/d | not captured | not captured | ['jcph2137-tbl-0002:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.342 | not captured | not captured | ['jcph2137-tbl-0002:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0142 L/h | not captured | not captured | ['jcph2137-tbl-0002:row1:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.71 L/h | not captured | not captured | ['Lu_2023_table_3:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.94 L | not captured | not captured | ['jcph2137-tbl-0002:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.37 L | not captured | not captured | ['jcph2137-tbl-0002:row6:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_patritumab_deruxtecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lu_2023` / `Lu_2023::mean`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:13 UTC</sub>
