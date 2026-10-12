<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;Vugmeyster_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_Vugmeyster2022_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">not modelled</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.438). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (AUCt and Ctrough), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of auc0-336: this record has 23.7, the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Vugmeyster Y et al., Avelumab Dose Selection for Clinical St…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-022-01111-8](https://doi.org/10.1007/s40262-022-01111-8)

## Model component
<dbs-pgx drug="avelumab" model-id="Avelumab_Vugmeyster2022_reference" status="not_modelled" stale="false" population="pediatric patients with refractory/relapsed solid tumors" measured-compound="avelumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Baseline CL, L/h | `Q22` · CL | 0.0274 | L/h | 7.611111111111112e-09 | [l] / [h] | not captured | llm_corrected (0.6) | Tab2:row2:col2 | — | not captured |
| V1, L | `Q61` · V | 3.15 | L | 0.00315 | [l] | not captured | exact (1.0) | Tab2:row3:col2 | — | not captured |
| Q, L/ha | `Q30` · Q | 0.0299 | L/h | 8.305555555555557e-09 | L/h | not captured | llm (0.6) | Tab2:row5:col2 | — | not captured |
| T50, daysa | `Q57` · t1/2z | 79 | h | 284400.0 | h | not captured | llm (0.6) | Tab2:row7:col2 | — | not captured |
| AUC0–336, µg⋅h/mL | `Q19` · AUCt | 23.7 | µg⋅h/mL | not captured | [[h] · [µg]] / [ml] | 187.5 | llm (0.6) | Vugmeyster_2022_table_1:row1:col1, Vugmeyster_2022_table_1:row1:col3, Vugmeyster_2022_table_1:row4:col1, Vugmeyster_2022_table_1:row4:col3, Vugmeyster_2022_table_1:row4:col4, Vugmeyster_2022_table_1:row7:col1, Vugmeyster_2022_table_1:row7:col3, Vugmeyster_2022_table_1:row7:col4, Vugmeyster_2022_table_1:row13:col1, Vugmeyster_2022_table_1:row13:col3, Vugmeyster_2022_table_1:row13:col4, Vugmeyster_2022_table_1:row16:col1, Vugmeyster_2022_table_1:row16:col3, Vugmeyster_2022_table_1:row16:col4, Vugmeyster_2022_table_1:row19:col1, Vugmeyster_2022_table_1:row19:col3, Vugmeyster_2022_table_1:row19:col4 | — | not captured |
| Ctrough, µg/mL | `Q37` · Ctrough | 97.5 | µg/mL | not captured | [µg] / [ml] | 148.3 | exact (1.0) | Vugmeyster_2022_table_1:row2:col1, Vugmeyster_2022_table_1:row2:col3, Vugmeyster_2022_table_1:row5:col1, Vugmeyster_2022_table_1:row5:col3, Vugmeyster_2022_table_1:row5:col4, Vugmeyster_2022_table_1:row8:col1, Vugmeyster_2022_table_1:row8:col3, Vugmeyster_2022_table_1:row8:col4, Vugmeyster_2022_table_1:row11:col1, Vugmeyster_2022_table_1:row11:col3, Vugmeyster_2022_table_1:row11:col4, Vugmeyster_2022_table_1:row14:col1, Vugmeyster_2022_table_1:row14:col3, Vugmeyster_2022_table_1:row14:col4, Vugmeyster_2022_table_1:row17:col1, Vugmeyster_2022_table_1:row17:col3, Vugmeyster_2022_table_1:row17:col4, Vugmeyster_2022_table_1:row20:col1, Vugmeyster_2022_table_1:row20:col3, Vugmeyster_2022_table_1:row20:col4 | — | not captured |
| theta_q_weight | `Q900` · theta_q_weight | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row12:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'variable' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'V2, La' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col2'])
- dropped PD-category row 'Imaxa' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row6:col2'])
- dropped PD-category row 'Curve shape factor, γa' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row8:col2'])
- dropped unlinked row (NIL): '800 mg q2w, adult data' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row0:col3', 'Vugmeyster_2022_table_1:row0:col4'])
- dropped unlinked row (NIL): '10 mg/kg q2w, all patients' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row3:col3', 'Vugmeyster_2022_table_1:row3:col4', 'Vugmeyster_2022_table_1:row3:col5'])
- dropped unlinked row (NIL): '10 mg/kg q2w, &lt; 40 kg' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row6:col3', 'Vugmeyster_2022_table_1:row6:col4', 'Vugmeyster_2022_table_1:row6:col5'])
- dropped unlinked row (NIL): '10 mg/kg q2w, ≥ 40 kg' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row9:col3', 'Vugmeyster_2022_table_1:row9:col4', 'Vugmeyster_2022_table_1:row9:col5'])
- dropped duplicate Q19 ('AUC0–336, µg\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\cdot$$\\end{document}·h/mL', value '7.3') — already have one for this compound
- dropped unlinked row (NIL): '20 mg/kg q2w, all pediatric patients' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row12:col3', 'Vugmeyster_2022_table_1:row12:col4', 'Vugmeyster_2022_table_1:row12:col5'])
- dropped unlinked row (NIL): '20 mg/kg q2w, &lt; 40 kg' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row15:col3', 'Vugmeyster_2022_table_1:row15:col4', 'Vugmeyster_2022_table_1:row15:col5'])
- dropped unlinked row (NIL): '20 mg/kg q2w, ≥ 40 kg' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row18:col3', 'Vugmeyster_2022_table_1:row18:col4', 'Vugmeyster_2022_table_1:row18:col5'])
- implicit units: 'Q, L/ha' → L/h (from the paper text: 'The text states “an intercompartmental clearance of 0.0323 L/h and 0.0299 L/h, respectively.”')
- implicit units: 'T50, daysa' → h (from the popPK convention: 'This is a terminal half-life; half-lives are conventionally reported in hours. A value of 79 is consistent with hours fo')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1, L' is the general volume)
- molar mass: none found for 'avelumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row2:col1 = '0.0177 (7%)'
- unparsed cell Tab2:row3:col1 = '1.96 (3%)'
- unparsed cell Tab2:row4:col1 = '0.917 (0.8%)'
- unparsed cell Tab2:row5:col1 = '0.0323 (0.8%)'
- unparsed cell Tab2:row6:col1 = '−0.0199 (13%)'
- unparsed cell Tab2:row7:col1 = '80 (0.3%)'
- unparsed cell Tab2:row8:col1 = '2.13 (0.2%)'
- unparsed cell Tab2:row12:col1 = '1b (fixed)'
- unparsed cell Tab2:row13:col1 = '0.235 (5%)'
- unparsed cell Tab2:row14:col1 = '2.68 (2%)'
- companion parameter table 1 transcribed (81 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.438 (7/16 fields) | 9 |

<details><summary>9 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[auc0-336]` | 23.7 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[baseline cl].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[ctrough]` | 97.5 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[q, l/ha].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[t50, daysa]` | 79 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q_weight]` | 1 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1].parameter_id` | Q61 | Q63 | mismatch |
| `qwen3.8-27b` | `parameters[v2, la]` | not captured | 0.91 | only_one_extracted |
| `qwen3.8-27b` | `parameters[weight_on_q]` | not captured | 1 | only_one_extracted |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Vugmeyster_2022_table_1:row1:col1', 'Vugmeyster_2022_table_1:row1:col3', 'Vugmeyster_2022_table_1:row4:col1', 'Vugmeyster_2022_table_1:row4:col3', 'Vugmeyster_2022_table_1:row4:col4', 'Vugmeyster_2022_table_1:row7:col1', 'Vugmeyster_2022_table_1:row7:col3', 'Vugmeyster_2022_table_1:row7:col4', 'Vugmeyster_2022_table_1:row13:col1', 'Vugmeyster_2022_table_1:row13:col3', 'Vugmeyster_2022_table_1:row13:col4', 'Vugmeyster_2022_table_1:row16:col1', 'Vugmeyster_2022_table_1:row16:col3', 'Vugmeyster_2022_table_1:row16:col4', 'Vugmeyster_2022_table_1:row19:col1', 'Vugmeyster_2022_table_1:row19:col3', 'Vugmeyster_2022_table_1:row19:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row5:col2'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Vugmeyster_2022_table_1:row2:col1', 'Vugmeyster_2022_table_1:row2:col3', 'Vugmeyster_2022_table_1:row5:col1', 'Vugmeyster_2022_table_1:row5:col3', 'Vugmeyster_2022_table_1:row5:col4', 'Vugmeyster_2022_table_1:row8:col1', 'Vugmeyster_2022_table_1:row8:col3', 'Vugmeyster_2022_table_1:row8:col4', 'Vugmeyster_2022_table_1:row11:col1', 'Vugmeyster_2022_table_1:row11:col3', 'Vugmeyster_2022_table_1:row11:col4', 'Vugmeyster_2022_table_1:row14:col1', 'Vugmeyster_2022_table_1:row14:col3', 'Vugmeyster_2022_table_1:row14:col4', 'Vugmeyster_2022_table_1:row17:col1', 'Vugmeyster_2022_table_1:row17:col3', 'Vugmeyster_2022_table_1:row17:col4', 'Vugmeyster_2022_table_1:row20:col1', 'Vugmeyster_2022_table_1:row20:col3', 'Vugmeyster_2022_table_1:row20:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab2:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0274 | not captured | not captured | ['Tab2:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0274 L/h | not captured | not captured | ['Tab2:row2:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.15 L | not captured | not captured | ['Tab2:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 256.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 190 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 157 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 281 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 384 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 338 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 496 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 17.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 11.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 8.80 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 18.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 34.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 39.4 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 25.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_avelumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vugmeyster_2022` / `Vugmeyster_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:40 UTC</sub>
