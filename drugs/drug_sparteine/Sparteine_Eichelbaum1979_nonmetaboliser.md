<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;sparteine&quot;,&quot;href&quot;:&quot;drugs/drug_sparteine/&quot;},{&quot;label&quot;:&quot;Eichelbaum_1979 \u00b7 nonmetaboliser&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sparteine_Brsen2001_reference&quot;,&quot;label&quot;:&quot;Br\u00f8sen_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sparteine/Sparteine_Brsen2001_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sparteine_ChoSchultz2009_reference&quot;,&quot;label&quot;:&quot;Cho-Schultz_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sparteine/Sparteine_ChoSchultz2009_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sparteine_Eichelbaum1997_reference&quot;,&quot;label&quot;:&quot;Eichelbaum_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sparteine/Sparteine_Eichelbaum1997_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sparteine_Gross1996_reference&quot;,&quot;label&quot;:&quot;Gross_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sparteine/Sparteine_Gross1996_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sparteine — `Sparteine_Eichelbaum1979_nonmetaboliser`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of /3: this record has none, the second reading 0.0046; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Eichelbaum M et al., Influence of the defective metabolism o…, European journal of clinica… (1979)
  ·  DOI: [10.1007/BF00562060](https://doi.org/10.1007/BF00562060)

## Model component
<dbs-pgx drug="sparteine" model-id="Sparteine_Eichelbaum1979_nonmetaboliser" status="rejected" stale="false" population="healthy adult male volunteers" measured-compound="sparteine" parameterization="mechanistic" topology="3C"></dbs-pgx>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC | `Q88` · AUC | 254.9 | not captured | not captured | not captured | not captured | exact (1.0) | tab_0:row6:col3, tab_0:row6:col4, tab_0:row6:col5, tab_0:row6:col6 | — | not captured |
| Vp | `Q64` · V2 | 435.5 | L | 0.4355 | L | not captured | exact (1.0) | tab_0:row7:col3, tab_0:row7:col4, tab_0:row7:col5, tab_0:row7:col6 | — | not captured |
| k21 | `Q302` · k21 | 0.0774 | 1/min | 0.00129 | 1/h | not captured | exact (1.0) | tab_0:row8:col3, tab_0:row8:col4, tab_0:row8:col5, tab_0:row8:col6, tab_0:row8:col7 | — | not captured |
| k12 | `Q301` · k12 | 0.0401 | 1/min | 0.0006683333333333333 | 1/h | not captured | exact (1.0) | tab_0:row9:col4, tab_0:row9:col5, tab_0:row9:col6, tab_0:row9:col7 | — | not captured |
| k d | `Q331` · KD | 0.00929 | not captured | not captured | not captured | not captured | space_fold (0.95) | tab_0:row10:col3, tab_0:row10:col4, tab_0:row10:col5, tab_0:row10:col6, tab_0:row10:col7 | — | not captured |
| V 1 | `Q63` · V1 | 68.2 | L | 0.06820000000000001 | L | not captured | space_fold (0.95) | tab_0:row12:col4, tab_0:row12:col5, tab_0:row12:col6, tab_0:row12:col7, tab_0:row12:col8 | — | not captured |
| Vd,~s | `Q61` · V | 132.2 | L | 0.13219999999999998 | L | not captured | llm_confirmed (0.6) | tab_0:row13:col4, tab_0:row13:col5, tab_0:row13:col6, tab_0:row13:col7, tab_0:row13:col8 | — | not captured |
| Clre n | `Q79` · CLNR | 126.3 | ml/min | 2.1049999999999998e-06 | L/h | not captured | llm (0.6) | tab_0:row15:col3, tab_0:row15:col4, tab_0:row15:col5, tab_0:row15:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'A' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col3', 'tab_0:row2:col4', 'tab_0:row2:col5', 'tab_0:row2:col6', 'tab_0:row2:col7'])
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col3', 'tab_0:row3:col4', 'tab_0:row3:col5', 'tab_0:row3:col6', 'tab_0:row3:col7'])
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col3', 'tab_0:row4:col4', 'tab_0:row4:col5', 'tab_0:row4:col6', 'tab_0:row4:col7'])
- dropped unlinked row (NIL): '/3' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col3', 'tab_0:row5:col4', 'tab_0:row5:col5', 'tab_0:row5:col6', 'tab_0:row5:col7'])
- dropped unlinked row (NIL): 'fc' — extend the ontology if this is a real PK parameter (source ['tab_0:row11:col4', 'tab_0:row11:col5', 'tab_0:row11:col6', 'tab_0:row11:col7', 'tab_0:row11:col8'])
- dropped duplicate Q61 ('Vd, #', value '136.3') — already have one for this compound
- dropped unlinked row (NIL): '60' — extend the ontology if this is a real PK parameter (source ['tab_0:row23:col3', 'tab_0:row23:col4'])
- dropped unlinked row (NIL): 'Plasma' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row0:col3'])
- dropped unlinked row (NIL): 'Urine' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row1:col3'])
- dropped unlinked row (NIL): '0-2' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row9:col3', 'Eichelbaum_1979_table_3:row9:col4'])
- dropped unlinked row (NIL): '2-4' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row10:col3', 'Eichelbaum_1979_table_3:row10:col4'])
- dropped unlinked row (NIL): '4-6' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row11:col3', 'Eichelbaum_1979_table_3:row11:col4'])
- dropped unlinked row (NIL): '6-9' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row12:col3', 'Eichelbaum_1979_table_3:row12:col4'])
- dropped unlinked row (NIL): '9-12' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row13:col3', 'Eichelbaum_1979_table_3:row13:col4'])
- dropped unlinked row (NIL): '12-24' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row14:col3', 'Eichelbaum_1979_table_3:row14:col4'])
- dropped unlinked row (NIL): '24-36' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row15:col3', 'Eichelbaum_1979_table_3:row15:col4'])
- dropped unlinked row (NIL): '36-48' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row16:col3', 'Eichelbaum_1979_table_3:row16:col4'])
- implicit units: 'AUC' — the LLM proposed 'mg h/l', whose dimension does not fit Q88; left unset
- implicit units: 'Vp' → L (from the popPK convention: 'Vp (or V2) represents the volume of distribution of the peripheral compartment. Volumes of distribution are conventional')
- implicit units: 'k21' → 1/min (from the popPK convention: 'k21 is a first-order rate constant. The paper reports half-lives in minutes (e.g., 156 min, 409 min). Therefore, rate co')
- implicit units: 'k12' → 1/min (from the popPK convention: 'k12 is a first-order rate constant. Consistent with k21 and the time units (minutes) used in the paper for half-lives, t')
- implicit units: 'k d' — the LLM proposed '1/min', whose dimension does not fit Q331; left unset
- implicit units: 'V 1' → L (from the paper text: "The text explicitly states: 'the volume of distribution of the central compartment (V1) in nonmetabolisers was appreciab")
- implicit units: 'Vd,~s' → L (from the popPK convention: 'Vd,ss is the volume of distribution at steady state. Like other volumes of distribution (V1, Vp), it is conventionally e')
- implicit units: 'Clre n' → ml/min (from the paper text: "The abstract states: 'total plasma clearance were observed between metabolisers (156 rain; 535 mlmin -t) and nonmetaboli")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sparteine
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- population split: 'nonmetaboliser' subgroup of Eichelbaum_1979 (paper reports 4 populations: metaboliser, metabolisers, nonmetaboliser, nonmetabolisers)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_0:row3:col1 = 'rain-1'
- unparsed cell tab_0:row5:col1 = 'rain -1'
- unparsed cell tab_0:row7:col1 = 'ml • min -1'
- unparsed cell tab_0:row8:col1 = 'rain-1'
- unparsed cell tab_0:row9:col1 = 'rain-1'
- unparsed cell tab_0:row9:col3 = '0,0727'
- unparsed cell tab_0:row10:col1 = 'rain-1'
- unparsed cell tab_0:row15:col1 = 'ml" min -1'
- unparsed cell tab_0:row23:col5 = '1440 rnin'
- unparsed cell tab_0:row23:col6 = 'administration of 200 mg sparteine sulfate'
- unparsed cell Eichelbaum_1979_table_3:row10:col1 = '32.2 __+ 1.5'
- unparsed cell Eichelbaum_1979_table_3:row11:col1 = '42.3 + 1.0'
- companion parameter table 3 transcribed (34 record(s))
- LLM selected parameter table(s) 1, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.6 (12/20 fields) | 8 |

<details><summary>8 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[/3]` | not captured | 0.0046 | only_one_extracted |
| `gpt-oss:120b` | `parameters[0-2]` | not captured | 1.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[24-36]` | not captured | 7.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[36-48]` | not captured | 7.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[6-9]` | not captured | 4.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[60]` | not captured | 540 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clre n].parameter_id` | Q79 | Q26 | mismatch |
| `gpt-oss:120b` | `parameters[urine]` | not captured | 471 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row9:col4', 'tab_0:row9:col5', 'tab_0:row9:col6', 'tab_0:row9:col7'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row8:col3', 'tab_0:row8:col4', 'tab_0:row8:col5', 'tab_0:row8:col6', 'tab_0:row8:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row13:col4', 'tab_0:row13:col5', 'tab_0:row13:col6', 'tab_0:row13:col7', 'tab_0:row13:col8'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row12:col4', 'tab_0:row12:col5', 'tab_0:row12:col6', 'tab_0:row12:col7', 'tab_0:row12:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row7:col3', 'tab_0:row7:col4', 'tab_0:row7:col5', 'tab_0:row7:col6'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row15:col3', 'tab_0:row15:col4', 'tab_0:row15:col5', 'tab_0:row15:col6'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_0:row10:col3', 'tab_0:row10:col4', 'tab_0:row10:col5', 'tab_0:row10:col6', 'tab_0:row10:col7'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_0:row6:col3', 'tab_0:row6:col4', 'tab_0:row6:col5', 'tab_0:row6:col6'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 132 L | not captured | not captured | ['tab_0:row13:col4', 'tab_0:row13:col5', 'tab_0:row13:col6', 'tab_0:row13:col7', 'tab_0:row13:col8'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 68.2 L | not captured | not captured | ['tab_0:row12:col4', 'tab_0:row12:col5', 'tab_0:row12:col6', 'tab_0:row12:col7', 'tab_0:row12:col8'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 436 L | not captured | not captured | ['tab_0:row7:col3', 'tab_0:row7:col4', 'tab_0:row7:col5', 'tab_0:row7:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sparteine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Eichelbaum_1979` / `Eichelbaum_1979::nonmetaboliser`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 21:54 UTC</sub>
