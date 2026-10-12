<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cemiplimab&quot;,&quot;href&quot;:&quot;drugs/drug_cemiplimab/&quot;},{&quot;label&quot;:&quot;Nguyen_2022 \u00b7 final_poppk_model&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cemiplimab — `Cemiplimab_Nguyen2022_final_poppk_model`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Vss has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — cemiplimab: CL 0.254 L/day, Q 0.652 L/day, V1 3.35 L, V2 2.52 L, Vss 0.499.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of clbcc: this record has none, the second reading -0.211; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Nguyen JH et al., Population pharmacokinetics modeling an…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12855](https://doi.org/10.1002/psp4.12855)

<div class="pk-model-meta" hidden drug="cemiplimab" model-id="Cemiplimab_Nguyen2022_final_poppk_model" status="needs_review" stale="false" population="patients with solid tumors, including recurrent or metastatic cervical cancer" measured-compound="cemiplimab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| TVCL0, L/day | `Q22` · CL | 0.254 | L/day | 2.9398148148148146e-09 | [l] / [d] | not captured | llm (0.6) | psp412855-tbl-0001:row3:col1, psp412855-tbl-0001:row3:col2, psp412855-tbl-0001:row3:col3 | — | not captured |
| TVQ, L/day | `Q30` · Q | 0.652 | L/day | 7.546296296296296e-09 | [l] / [d] | not captured | tv_prefix (0.95) | psp412855-tbl-0001:row4:col1, psp412855-tbl-0001:row4:col2, psp412855-tbl-0001:row4:col3 | — | not captured |
| TVV1, L | `Q63` · V1 | 3.35 | L | 0.00335 | [l] | not captured | tv_prefix (0.95) | psp412855-tbl-0001:row5:col1, psp412855-tbl-0001:row5:col2, psp412855-tbl-0001:row5:col3 | — | not captured |
| TVV2, L | `Q64` · V2 | 2.52 | L | 0.00252 | [l] | not captured | tv_prefix (0.95) | psp412855-tbl-0001:row6:col1, psp412855-tbl-0001:row6:col2, psp412855-tbl-0001:row6:col3 | — | not captured |
| TVT50, days | `Q900` · equation variable | 73.7 | days | not captured | [d] | not captured | llm (0.6) | psp412855-tbl-0001:row8:col1, psp412855-tbl-0001:row8:col2, psp412855-tbl-0001:row8:col3 | — | not captured |
| VssWGTBL | `Q65` · Vss | 0.499 | not captured | not captured | not captured | not captured | llm (0.6) | psp412855-tbl-0001:row11:col1, psp412855-tbl-0001:row11:col2, psp412855-tbl-0001:row11:col3, psp412855-tbl-0001:footnote | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'RE' routed out of structural estimates ('Residual variability')
- table section iiv: 'ETA1 – CL_Q' routed out of structural estimates ('IIV')
- table section iiv: 'ETA2 – V1_V2' routed out of structural estimates ('IIV')
- table section iiv: 'OFV' routed out of structural estimates ('IIV')
- dropped PD-category row 'TVEmax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412855-tbl-0001:row7:col1', 'psp412855-tbl-0001:row7:col2', 'psp412855-tbl-0001:row7:col3'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412855-tbl-0001:row9:col1'])
- dropped duplicate Q22 ('CLWGTBL', value '0.539') — already have one for this compound
- dropped duplicate Q900 ('CLSEX', value '-0.137') — already have one for this compound
- dropped duplicate Q900 ('V1SEX', value '-0.0801') — already have one for this compound
- dropped duplicate Q63 ('V1ALBBL', value '-0.217') — already have one for this compound
- dropped duplicate Q22 ('CLALB', value '-1.11') — already have one for this compound
- dropped duplicate Q22 ('CLALTBL', value '-0.0729') — already have one for this compound
- dropped duplicate Q22 ('CLCSCC', value '-0.216') — already have one for this compound
- dropped duplicate Q22 ('CLBCC', value '-0.211') — already have one for this compound
- dropped PD-category row 'EmaxBCC' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412855-tbl-0001:row19:col1', 'psp412855-tbl-0001:row19:col2', 'psp412855-tbl-0001:row19:col3', 'psp412855-tbl-0001:footnote'])
- dropped duplicate Q900 ('T50OTHER', value '-0.491') — already have one for this compound
- implicit units: 'VssWGTBL' — the LLM proposed '1', whose dimension does not fit Q65; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cemiplimab
- population split: 'final poppk model' subgroup of Nguyen_2022 (paper reports 3 populations: final poppk model, mean (cv%), tumor type (study) a)
- molar mass: none found for 'cemiplimab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412855-tbl-0001:row3:col4 = '0.246, 0.262'
- unparsed cell psp412855-tbl-0001:row3:col7 = '0.241, 0.269'
- unparsed cell psp412855-tbl-0001:row4:col4 = '0.606, 0.699'
- unparsed cell psp412855-tbl-0001:row4:col7 = '0.581, 0.728'
- unparsed cell psp412855-tbl-0001:row5:col4 = '3.27, 3.44'
- unparsed cell psp412855-tbl-0001:row5:col7 = '3.27, 3.44'
- unparsed cell psp412855-tbl-0001:row6:col4 = '2.44, 2.60'
- unparsed cell psp412855-tbl-0001:row6:col7 = '2.29, 2.81'
- unparsed cell psp412855-tbl-0001:row7:col4 = '−0.190, −0.157'
- unparsed cell psp412855-tbl-0001:row7:col7 = '−0.232, −0.136'
- unparsed cell psp412855-tbl-0001:row8:col4 = '62.8, 84.7'
- unparsed cell psp412855-tbl-0001:row8:col7 = '46.2, 245'
- unparsed cell psp412855-tbl-0001:row10:col4 = '0.442, 0.637'
- unparsed cell psp412855-tbl-0001:row10:col7 = '0.443, 0.639'
- unparsed cell psp412855-tbl-0001:row11:col4 = '0.401, 0.597'
- unparsed cell psp412855-tbl-0001:row11:col7 = '0.412, 0.569'
- unparsed cell psp412855-tbl-0001:row12:col4 = '−0.172, −0.101'
- unparsed cell psp412855-tbl-0001:row12:col7 = '−0.167, −0.0925'
- unparsed cell psp412855-tbl-0001:row13:col4 = '−0.117, −0.0435'
- unparsed cell psp412855-tbl-0001:row13:col7 = '−0.115, −0.0471'
- unparsed cell psp412855-tbl-0001:row14:col4 = '−0.338, −0.0961'
- unparsed cell psp412855-tbl-0001:row14:col7 = '−0.361, −0.0870'
- unparsed cell psp412855-tbl-0001:row15:col4 = '−1.16, −1.06'
- unparsed cell psp412855-tbl-0001:row15:col7 = '−1.24, −0.984'
- unparsed cell psp412855-tbl-0001:row16:col4 = '−0.105, −0.0411'
- unparsed cell psp412855-tbl-0001:row16:col7 = '−0.108, −0.0370'
- unparsed cell psp412855-tbl-0001:row17:col4 = '−0.256, −0.176'
- unparsed cell psp412855-tbl-0001:row17:col7 = '−0.257, −0.181'
- unparsed cell psp412855-tbl-0001:row18:col4 = '−0.261, −0.160'
- unparsed cell psp412855-tbl-0001:row18:col7 = '−0.261, −0.158'
- unparsed cell psp412855-tbl-0001:row19:col4 = '−1.09, −0.657'
- unparsed cell psp412855-tbl-0001:row19:col7 = '−1.00, −0.517'
- unparsed cell psp412855-tbl-0001:row20:col4 = '−0.608, −0.374'
- unparsed cell psp412855-tbl-0001:row20:col7 = '−0.987, −0.169'
- unparsed cell psp412855-tbl-0001:row22:col4 = '0.240, 0.242 d'
- unparsed cell psp412855-tbl-0001:row22:col7 = '0.227, 0.258 d'
- unparsed cell psp412855-tbl-0001:row24:col4 = '0.0822, 0.0963'
- unparsed cell psp412855-tbl-0001:row24:col7 = '0.0759, 0.101'
- unparsed cell psp412855-tbl-0001:row25:col4 = '0.0681, 0.0737'
- unparsed cell psp412855-tbl-0001:row25:col7 = '0.0459, 0.105'
- companion parameter table 2 transcribed (120 record(s), model stage 'final')
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.643 (9/14 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[clbcc]` | not captured | -0.211 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clwgtbl]` | not captured | 0.539 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t50other]` | not captured | -0.491 | only_one_extracted |
| `qwen3.8-27b` | `parameters[tvt50]` | 73.7 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1albbl]` | not captured | -0.217 | only_one_extracted |

</details>

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
| C1_half_life_beta | pass | 19.7 | 17.281 | 0.8772 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412855-tbl-0001:row3:col1', 'psp412855-tbl-0001:row3:col2', 'psp412855-tbl-0001:row3:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412855-tbl-0001:row4:col1', 'psp412855-tbl-0001:row4:col2', 'psp412855-tbl-0001:row4:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412855-tbl-0001:row5:col1', 'psp412855-tbl-0001:row5:col2', 'psp412855-tbl-0001:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412855-tbl-0001:row6:col1', 'psp412855-tbl-0001:row6:col2', 'psp412855-tbl-0001:row6:col3'] |
| C5_unit_missing_Q65 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp412855-tbl-0001:row11:col1', 'psp412855-tbl-0001:row11:col2', 'psp412855-tbl-0001:row11:col3', 'psp412855-tbl-0001:footnote'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.254 | not captured | not captured | ['psp412855-tbl-0001:row3:col1', 'psp412855-tbl-0001:row3:col2', 'psp412855-tbl-0001:row3:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0106 L/h | not captured | not captured | ['psp412855-tbl-0001:row3:col1', 'psp412855-tbl-0001:row3:col2', 'psp412855-tbl-0001:row3:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.35 L | not captured | not captured | ['psp412855-tbl-0001:row5:col1', 'psp412855-tbl-0001:row5:col2', 'psp412855-tbl-0001:row5:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.52 L | not captured | not captured | ['psp412855-tbl-0001:row6:col1', 'psp412855-tbl-0001:row6:col2', 'psp412855-tbl-0001:row6:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cemiplimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nguyen_2022` / `Nguyen_2022::final_poppk_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:52 UTC</sub>
