<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07F&quot;,&quot;href&quot;:&quot;atc/C07F.md&quot;},{&quot;label&quot;:&quot;nifedipine&quot;,&quot;href&quot;:&quot;drugs/drug_nifedipine/&quot;},{&quot;label&quot;:&quot;Kiriyama_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nifedipine_Fu2022_reference&quot;,&quot;label&quot;:&quot;Fu_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nifedipine/Nifedipine_Fu2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nifedipine — `Nifedipine_Kiriyama2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.091). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has nifedipine, the second reading unknown; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024)
  ·  DOI: [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249)

## Model component
<dbs-pgx drug="nifedipine" model-id="Nifedipine_Kiriyama2024_reference" status="rejected" stale="false" population="spontaneously hypertensive rats" measured-compound="nifedipine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | `Q61` · V | 54.9 | L | 0.0549 | L | not captured | exact (1.0) | prp21249-tbl-0002:row2:col2, prp21249-tbl-0002:row2:col3 | — | not captured |
| k10 | `Q47` · kel | 0.0218 | 1/min | 0.00036333333333333335 | 1/h | not captured | exact (1.0) | prp21249-tbl-0002:row3:col2, prp21249-tbl-0002:row3:col3 | — | not captured |
| k12 | `Q301` · k12 | 0.0121 | 1/min | 0.00020166666666666664 | 1/h | not captured | exact (1.0) | prp21249-tbl-0002:row4:col2, prp21249-tbl-0002:row4:col3 | — | not captured |
| k21 | `Q302` · k21 | 0.0165 | 1/min | 0.000275 | 1/h | not captured | exact (1.0) | prp21249-tbl-0002:row5:col2, prp21249-tbl-0002:row5:col3 | — | not captured |
| AUC | `Q88` · AUC | 237 | ng*min/mL | not captured | ng*min/mL | not captured | exact (1.0) | Kiriyama_2024_table_1:row3:col2, Kiriyama_2024_table_1:row3:col4, Kiriyama_2024_table_1:row3:col5, Kiriyama_2024_table_1:row3:col7 | — | not captured |
| t1/2 | `Q57` · t1/2z | 69.0 | min | 4140.0 | h | not captured | exact (1.0) | Kiriyama_2024_table_1:row4:col2, Kiriyama_2024_table_1:row4:col4, Kiriyama_2024_table_1:row4:col5, Kiriyama_2024_table_1:row4:col7 | — | not captured |
| CLtot | `Q22` · CL | 1.35 | mL/min | 2.25e-08 | L/h | not captured | exact (1.0) | Kiriyama_2024_table_1:row5:col2, Kiriyama_2024_table_1:row5:col4, Kiriyama_2024_table_1:row5:col5, Kiriyama_2024_table_1:row5:col7 | — | not captured |
| Vdss | `Q65` · Vss | 162 | mL | 0.00016199999999999998 | L | not captured | llm (0.6) | Kiriyama_2024_table_1:row6:col2, Kiriyama_2024_table_1:row6:col4, Kiriyama_2024_table_1:row6:col5, Kiriyama_2024_table_1:row6:col7 | — | not captured |
| MRT | `Q53` · MRT | 82.8 | min | 4968.0 | h | not captured | exact (1.0) | Kiriyama_2024_table_1:row7:col2, Kiriyama_2024_table_1:row7:col4, Kiriyama_2024_table_1:row7:col5, Kiriyama_2024_table_1:row7:col7 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'AIC' — extend the ontology if this is a real PK parameter (source ['prp21249-tbl-0002:row6:col2', 'prp21249-tbl-0002:row6:col3'])
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['Kiriyama_2024_table_1:row2:col3', 'Kiriyama_2024_table_1:row2:col6'])
- implicit units: 'V1' → L (from the popPK convention: 'V1 is the volume of the central compartment. In population PK, volumes are conventionally expressed in liters (L). The v')
- implicit units: 'k10' → 1/min (from the paper text: "The text states that AUC is calculated in 'ng⋅min/mL' and the infusion period is 30 min. The relationship Vdss = CLtot/k")
- implicit units: 'k12' → 1/min (from the paper text: "Derived from the AUC unit 'ng⋅min/mL' stated in the text, which establishes minutes as the time unit for the PK analysis")
- implicit units: 'k21' → 1/min (from the paper text: "Derived from the AUC unit 'ng⋅min/mL' stated in the text, which establishes minutes as the time unit for the PK analysis")
- implicit units: 'AUC' → ng*min/mL (from the paper text: "The text explicitly states: 'For nifedipine, the AUC per dose during monotherapy and coadministration was 237 ± 85 and 1")
- implicit units: 't1/2' → min (from the paper text: "The AUC unit 'ng⋅min/mL' in the text indicates the time unit is minutes. The value 69.0 is consistent with a half-life i")
- implicit units: 'CLtot' → mL/min (from the paper text: "Consistent with the AUC unit 'ng⋅min/mL' and dose in mg. CL = Dose/AUC. If Dose is mg and AUC is ng*min/mL, CL is mL/min")
- implicit units: 'Vdss' → mL (from the paper text: 'Consistent with CL in mL/min and ke in 1/min. Vdss = CL/ke. 1.35 mL/min / 0.01 1/min = 135 mL. The value 162 is consiste')
- implicit units: 'MRT' → min (from the paper text: "MRT is a time parameter. Given the AUC unit 'ng⋅min/mL' and the consistency of other time parameters (t1/2) in minutes, ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nifedipine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell prp21249-tbl-0002:row3:col1 = '(min−1)'
- unparsed cell prp21249-tbl-0002:row4:col1 = '(min−1)'
- unparsed cell prp21249-tbl-0002:row5:col1 = '(min−1)'
- companion parameter table 1 transcribed (44 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.091 (2/22 fields) | 20 |

<details><summary>20 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc]` | 237 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | not captured | 237 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cltot]` | 1.35 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cltot]` | not captured | 1.35 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k10]` | 0.0218 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k10]` | not captured | 0.0218 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | 0.0121 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | not captured | 0.0121 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21]` | 0.0165 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21]` | not captured | 0.0165 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrt]` | 82.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrt]` | not captured | 82.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | 69.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | not captured | 69.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1]` | 54.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1]` | not captured | 54.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vdss]` | 162 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vdss]` | not captured | 162 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | nifedipine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | nifedipine | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kiriyama_2024_table_1:row5:col2', 'Kiriyama_2024_table_1:row5:col4', 'Kiriyama_2024_table_1:row5:col5', 'Kiriyama_2024_table_1:row5:col7'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['prp21249-tbl-0002:row4:col2', 'prp21249-tbl-0002:row4:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['prp21249-tbl-0002:row5:col2', 'prp21249-tbl-0002:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['prp21249-tbl-0002:row3:col2', 'prp21249-tbl-0002:row3:col3'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Kiriyama_2024_table_1:row7:col2', 'Kiriyama_2024_table_1:row7:col4', 'Kiriyama_2024_table_1:row7:col5', 'Kiriyama_2024_table_1:row7:col7'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Kiriyama_2024_table_1:row4:col2', 'Kiriyama_2024_table_1:row4:col4', 'Kiriyama_2024_table_1:row4:col5', 'Kiriyama_2024_table_1:row4:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp21249-tbl-0002:row2:col2', 'prp21249-tbl-0002:row2:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kiriyama_2024_table_1:row6:col2', 'Kiriyama_2024_table_1:row6:col4', 'Kiriyama_2024_table_1:row6:col5', 'Kiriyama_2024_table_1:row6:col7'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Kiriyama_2024_table_1:row3:col2', 'Kiriyama_2024_table_1:row3:col4', 'Kiriyama_2024_table_1:row3:col5', 'Kiriyama_2024_table_1:row3:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.35 | not captured | not captured | ['Kiriyama_2024_table_1:row5:col2', 'Kiriyama_2024_table_1:row5:col4', 'Kiriyama_2024_table_1:row5:col5', 'Kiriyama_2024_table_1:row5:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.081 L/h | not captured | not captured | ['Kiriyama_2024_table_1:row5:col2', 'Kiriyama_2024_table_1:row5:col4', 'Kiriyama_2024_table_1:row5:col5', 'Kiriyama_2024_table_1:row5:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 54.9 L | not captured | not captured | ['prp21249-tbl-0002:row2:col2', 'prp21249-tbl-0002:row2:col3'] |
| C9_phys_window_Q65 | fail | volume within physiological range | 0.162 L | not captured | not captured | ['Kiriyama_2024_table_1:row6:col2', 'Kiriyama_2024_table_1:row6:col4', 'Kiriyama_2024_table_1:row6:col5', 'Kiriyama_2024_table_1:row6:col7'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nifedipine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kiriyama_2024` / `Kiriyama_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:43 UTC</sub>
