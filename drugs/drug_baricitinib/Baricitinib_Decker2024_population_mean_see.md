<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;baricitinib&quot;,&quot;href&quot;:&quot;drugs/drug_baricitinib/&quot;},{&quot;label&quot;:&quot;Decker_2024 \u00b7 population_mean_see&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baricitinib — `Baricitinib_Decker2024_population_mean_see`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The baricitinib model for pediatric patients was rejected because a dialysate flow rate implies an unreachable compartment and a parameter unit could not be converted.**

The record includes a dialysate flow rate of 2.67 L/h, indicating a dialysis compartment with no path from the dose. Additionally, the unit for a covariate effect parameter could not be converted to standard SI units, leaving the parameter undefined in the model structure. Extracted — baricitinib: D1 0.457 h, CLNR 3.36 L/h, CL/F 6.34 L/h, V1/F 92.6 L, Qd 2.67 L/h, V2/F 25.6 L, tlag 0.147 h, CLb 0.75 %SEE, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[allometric scaling v c , e].parameter_id`: this record has Q63, the second reading Q319; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Decker RL et al., A population pharmacokinetic model usin…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13131](https://doi.org/10.1002/psp4.13131)

## Model component
<dbs-pgx drug="baricitinib" model-id="Baricitinib_Decker2024_population_mean_see" status="rejected" stale="false" population="pediatric patients with juvenile idiopathic arthritis" measured-compound="baricitinib" parameterization="apparent" topology="3C"></dbs-pgx>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 9 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| D1 (h) | `Q310` · D1 | 0.457 | h | 1645.2 | [h] | not captured | exact (1.0) | psp413131-tbl-0002:row1:col1 | — | not captured |
| CLnr/F(L/h) b | `Q79` · CLNR | 3.36 | L/h | 9.333333333333333e-07 | L/h | not captured | llm (0.6) | psp413131-tbl-0002:row3:col1 | — | not captured |
| CLr/F (L/h) b | `Q27` · CL/F | 6.34 | L/h | 1.7611111111111112e-06 | L/h | not captured | llm (0.6) | psp413131-tbl-0002:row4:col1 | — | not captured |
| V1/F (L) c | `Q290` · V1/F | 92.6 | L | 0.0926 | L | not captured | llm_confirmed (0.6) | psp413131-tbl-0002:row5:col1 | — | not captured |
| Q (L/h) d | `Q364` · Qd | 2.67 | L/h | 7.416666666666667e-07 | L/h | not captured | space_fold (0.95) | psp413131-tbl-0002:row6:col1 | — | not captured |
| V2/F (L) e | `Q82` · V2/F | 25.6 | L | 0.0256 | L | not captured | llm_confirmed (0.6) | psp413131-tbl-0002:row7:col1 | — | not captured |
| LAG (h) | `Q83` · tlag | 0.147 | h | 529.1999999999999 | [h] | not captured | llm (0.6) | psp413131-tbl-0002:row8:col1 | — | not captured |
| Allometric Scaling CL b | `Q23` · CLb | 0.75 | %SEE | not captured | [s] · [%] · [ee] | not captured | llm_corrected (0.6) | psp413131-tbl-0002:row9:col1 | — | not captured |
| Allometric Scaling V c , e | `Q63` · V1 | 1 | %SEE | not captured | [s] · [%] · [ee] | not captured | llm (0.6) | psp413131-tbl-0002:row10:col1 | — | not captured |
| theta_d1_category | `Q900` · theta_d1_category | 0.501 | h | not captured | not captured | not captured | not captured (not captured) | psp413131-tbl-0002:row2:col1 | — | not captured |
| theta_q314_egfr | `Q900` · theta_q314_egfr | 0.00586 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413131-tbl-0002:row11:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |
| Q | Q30 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '%SEE' (CLNR)
- unit_dimension_unknown: '%SEE' (CL/F)
- unit_dimension_unknown: '%SEE' (V1/F)
- unit_dimension_unknown: '%SEE' (Qd)
- unit_dimension_unknown: '%SEE' (V2/F)
- unit_dimension_unknown: '%SEE' (CLb)
- unit_dimension_unknown: '%SEE' (V1)
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CLnr/F(L/h) b' → L/h (from the paper text: "The paper text states: 'The total clearance estimate (for a weight of 74 kg) is 9.7 L/h (Table 2)'. Since CL/F is the su")
- implicit units: 'CLr/F (L/h) b' → L/h (from the paper text: "The paper text states: 'The total clearance estimate (for a weight of 74 kg) is 9.7 L/h (Table 2)'. CLr/F is a component")
- implicit units: 'V1/F (L) c' → L (from the paper text: "The paper text states: 'The volume estimates (for a weight of 74 kg) are also similar between the 2 populations (V1/F an")
- implicit units: 'Q (L/h) d' → L/h (from the popPK convention: 'Q represents intercompartmental clearance in a two-compartment PK model. The standard unit for clearance in this context')
- implicit units: 'V2/F (L) e' → L (from the paper text: "The paper text states: 'The volume estimates (for a weight of 74 kg) are also similar between the 2 populations (V1/F an")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baricitinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- bound model equation to Q40 (Fab): F = (CLnr/F + CLr/F)*((WTE/74)^0.75)
- bound model equation to Q30 (Q): Q = 2.67*((WTE/74)^0.75)
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'population mean (%see)' subgroup of Decker_2024 (paper reports 3 populations: jia a, population mean (%see), ra b)

**Extraction notes:**
- unparsed cell psp413131-tbl-0002:row1:col3 = '0.452 (0.373–0.512)'
- unparsed cell psp413131-tbl-0002:row2:col3 = '0.538 (0.323–0.847)'
- unparsed cell psp413131-tbl-0002:row3:col3 = '3.32 (3.20–3.46)'
- unparsed cell psp413131-tbl-0002:row4:col3 = '6.41 (6.23–6.52)'
- unparsed cell psp413131-tbl-0002:row5:col3 = '92.6 (90.1–94.5)'
- unparsed cell psp413131-tbl-0002:row6:col3 = '2.76 (2.62–2.88)'
- unparsed cell psp413131-tbl-0002:row7:col3 = '25.1 (21.2–30.1)'
- unparsed cell psp413131-tbl-0002:row8:col3 = '0.147 (0.144–0.150)'
- unparsed cell psp413131-tbl-0002:row11:col3 = '0.00589 (0.00349–0.00852)'
- unparsed cell psp413131-tbl-0002:row14:col3 = '0.360 (0.346–0.377)'
- unparsed cell Decker_2024_table_3:row11:col2 = '254 (27) d'
- unparsed cell Decker_2024_table_3:row11:col3 = '500 (57) e'
- unparsed cell Decker_2024_table_3:row11:col7 = '483 (40) f'
- unparsed cell Decker_2024_table_3:row12:col2 = '56.8 (22) d'
- unparsed cell Decker_2024_table_3:row12:col3 = '79.0 (33) e'
- unparsed cell Decker_2024_table_3:row12:col7 = '53.3 (22) f'
- companion parameter table 3 transcribed (71 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation F = (CLnr/F + CLr/F)*((WTE/74)^0.75)
- captured model equation Q = 2.67*((WTE/74)^0.75)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (15/20 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[allometric scaling v c , e].parameter_id` | Q63 | Q319 | mismatch |
| `gpt-oss-120b` | `parameters[clr/f (l/h) b].parameter_id` | Q27 | Q26 | mismatch |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_egfr]` | 0.00586 | not captured | only_one_extracted |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413131-tbl-0002:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413131-tbl-0002:row5:col1'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['psp413131-tbl-0002:row1:col1'] |
| C5_dimension_Q364 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413131-tbl-0002:row6:col1'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413131-tbl-0002:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413131-tbl-0002:row7:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp413131-tbl-0002:row8:col1'] |
| C5_unit_missing_Q23 | fail | [length] ** 3 / [time] | %SEE | not captured | not captured | ['psp413131-tbl-0002:row9:col1'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | %SEE | not captured | not captured | ['psp413131-tbl-0002:row10:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.34 L/h | not captured | not captured | ['psp413131-tbl-0002:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 92.6 L | not captured | not captured | ['psp413131-tbl-0002:row5:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 25.6 L | not captured | not captured | ['psp413131-tbl-0002:row7:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_baricitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Decker_2024` / `Decker_2024::population_mean_see`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:46 UTC</sub>
