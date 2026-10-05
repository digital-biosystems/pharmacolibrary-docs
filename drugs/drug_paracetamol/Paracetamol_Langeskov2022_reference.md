<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;paracetamol&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/&quot;},{&quot;label&quot;:&quot;Langeskov_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paracetamol_Anderson2015_reference&quot;,&quot;label&quot;:&quot;Anderson_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/Paracetamol_Anderson2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paracetamol_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Anderson_2015_VAS&quot;,&quot;label&quot;:&quot;Anderson_2015 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Anderson_2015_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Gibb_2008_VAS&quot;,&quot;label&quot;:&quot;Gibb_2008 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Gibb_2008_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2018_PPPM&quot;,&quot;label&quot;:&quot;Hannam_2018 \u00b7 PPPM&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Hannam_2018_PPPM.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paracetamol — `Paracetamol_Langeskov2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.118). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The paracetamol model record was held back because the builder assumed bioavailability F=1 (and Fm=1, no molar correction) for all apparent parameters (ka 9.4 1/h, V1/F 48.5 L, CL/F 25.9 L/h, V2/F 55.4 L, Q/F 199 L/h, tlag 0.16 h), an assumption judged not acceptable.**

The record for paracetamol in healthy obese adults (Langeskov_2022, two-compartment structure) carries only apparent parameters, and the model builder substituted F=1, Fm=1 and no molar correction to obtain them; this apparent assumption was flagged as not acceptable, so the record needs review. A second reader returned no values (null) for CL/F, Q/F, ka, tlag, V1/F and V2/F and marked the dose compound and primary analyte as unknown, so the disagreements on these fields are inconclusive. Extracted — paracetamol: kabs 9.4 1/h, V1/F 48.5 L, CL/F 25.9 L/h, V2/F 55.4 L, Q/F 199 L/h, tlag 0.16 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has paracetamol, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Langeskov EK et al., Population pharmacokinetic of paracetam…, Pharmacology research & per… (2022)
  ·  DOI: [10.1002/prp2.962](https://doi.org/10.1002/prp2.962)

## Model component
<dbs-pgx drug="paracetamol" model-id="Paracetamol_Langeskov2022_reference" status="needs_review" stale="false" population="healthy obese adults" measured-compound="paracetamol" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h−1) (Placebo) | `Q49` · kabs | 9.4 | 1/h | 0.0026111111111111114 | 1/h | not captured | space_fold (0.95) | prp2962-tbl-0002:row1:col1 | — | 0.514 (None% RSE) |
| V1/F (L) | `Q290` · V1/F | 48.5 | L | 0.0485 | [l] | not captured | exact (1.0) | prp2962-tbl-0002:row3:col1 | — | 0.270 (None% RSE) |
| Cl/F (L/h) | `Q27` · CL/F | 25.9 | L/h | 7.194444444444444e-06 | [l] / [h] | not captured | exact (1.0) | prp2962-tbl-0002:row5:col1 | — | 0.0606 (None% RSE) |
| V2/F (L) | `Q82` · V2/F | 55.4 | L | 0.0554 | [l] | not captured | exact (1.0) | prp2962-tbl-0002:row6:col1 | — | 0.0703 (None% RSE) |
| Cl2/F (L/h) | `Q69` · Q/F | 199 | L/h | 5.5277777777777783e-05 | [l] / [h] | not captured | special_case (0.95) | prp2962-tbl-0002:row7:col1 | — | not captured |
| Tlag (h) | `Q83` · tlag | 0.16 | h | 576.0 | [h] | not captured | exact (1.0) | prp2962-tbl-0002:row8:col1 | — | 0.0586 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ω2 Ka' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 V1/F' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 Cl/f' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 V2/F' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 Tlag' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'Residual unexplained variability (Ceps)' routed out of structural estimates ('Between subject variablity (ω2)')
- unit_dimension_unknown: 'Placebo' (kabs)
- routed 'Θkacovariate' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_mismatch: 'ΘV1/Fcovariate' → Q290 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q290 ('ΘV1/Fcovariate', value '0.0312') — already have one for this compound
- implicit units: 'ka (h−1) (Placebo)' → 1/h (from the paper text: "The paper text explicitly states the unit for the absorption rate constant in the discussion of previous findings: 'The ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=paracetamol

**Extraction notes:**
- unparsed cell prp2962-tbl-0002:row1:col3 = '11.8 [6.2–27.8]'
- unparsed cell prp2962-tbl-0002:row2:col3 = '0.534 [0.298–0.745]'
- unparsed cell prp2962-tbl-0002:row3:col3 = '50.8 [28.6–83.3]'
- unparsed cell prp2962-tbl-0002:row4:col3 = '0.0312 [0.0178–0.0456]'
- unparsed cell prp2962-tbl-0002:row5:col3 = '25.9 [24.1–27.7]'
- unparsed cell prp2962-tbl-0002:row6:col3 = '53.6 [24.4–70.5]'
- unparsed cell prp2962-tbl-0002:row7:col3 = '196 [83.2–271]'
- unparsed cell prp2962-tbl-0002:row8:col3 = '0.17 [0.11–0.20]'
- unparsed cell prp2962-tbl-0002:row10:col2 = '35.3 [15]'
- unparsed cell prp2962-tbl-0002:row10:col3 = '0.586 [0.212–1.31]'
- unparsed cell prp2962-tbl-0002:row11:col2 = '33.2 [16]'
- unparsed cell prp2962-tbl-0002:row11:col3 = '0.280 [0.0672–0.713]'
- unparsed cell prp2962-tbl-0002:row12:col2 = '27.4 [5.7]'
- unparsed cell prp2962-tbl-0002:row12:col3 = '0.0626 [0.033–0.111]'
- unparsed cell prp2962-tbl-0002:row13:col2 = '26.8 [28]'
- unparsed cell prp2962-tbl-0002:row13:col3 = '0.0936 [0.0187–0.32]'
- unparsed cell prp2962-tbl-0002:row14:col2 = '34.7 [34]'
- unparsed cell prp2962-tbl-0002:row14:col3 = '0.0467 [0.00783–0.187]'
- unparsed cell prp2962-tbl-0002:row15:col2 = '10.5[20]'
- unparsed cell prp2962-tbl-0002:row15:col3 = '0.0934 [0.0731–0.114]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.118 (2/17 fields) | 15 |

<details><summary>15 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl/f]` | 25.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | 25.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl2/f]` | 199 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl2/f]` | not captured | 199 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka (h-1)]` | 9.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka (h-1)]` | not captured | 5.72 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ktr (h-1)]` | not captured | 7.28 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag]` | 0.16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag]` | not captured | 0.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` | 48.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` | not captured | 48.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f]` | 55.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f]` | not captured | 55.4 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | paracetamol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | paracetamol | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp2962-tbl-0002:row5:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2962-tbl-0002:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['prp2962-tbl-0002:row1:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp2962-tbl-0002:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2962-tbl-0002:row6:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['prp2962-tbl-0002:row8:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 25.9 L/h | not captured | not captured | ['prp2962-tbl-0002:row5:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 48.5 L | not captured | not captured | ['prp2962-tbl-0002:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 55.4 L | not captured | not captured | ['prp2962-tbl-0002:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=paracetamol) | C_central | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | apparent_assumption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_paracetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Langeskov_2022` / `Langeskov_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_paracetamol/models/modelica/Paracetamol_Langeskov2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_paracetamol/models/modelica/Paracetamol_Langeskov2022_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_paracetamol/models/modelica/Paracetamol_Langeskov2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_modelica.zip" download>Paracetamol_Langeskov2022_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_fmi.zip" download>Paracetamol_Langeskov2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_matlab.zip" download>Paracetamol_Langeskov2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_matlab_simbio.zip" download>Paracetamol_Langeskov2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_sbml.zip" download>Paracetamol_Langeskov2022_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_cellml.zip" download>Paracetamol_Langeskov2022_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference.svg" alt="Paracetamol_Langeskov2022_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1500 mg, single dose, first-order absorption (ka 9.4 /h, lag 9.6 min, F 1). Dose in the paper: 1500 mg.

<dbs-fmusim paramsurl="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_paracetamol/Paracetamol_Langeskov2022_reference/Paracetamol_Langeskov2022_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Paracetamol_Langeskov2022_reference_params.json` · controls `Paracetamol_Langeskov2022_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-02 14:38 UTC</sub>
