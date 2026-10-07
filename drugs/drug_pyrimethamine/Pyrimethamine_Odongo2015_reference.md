<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;pyrimethamine&quot;,&quot;href&quot;:&quot;drugs/drug_pyrimethamine/&quot;},{&quot;label&quot;:&quot;Odongo_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pyrimethamine — `Pyrimethamine_Odongo2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `sulphadoxine-pyrimethamine`, measured `pyrimethamine`.

## Citation
Odongo CO et al., Trimester-Specific Population Pharmacok…, Drugs in R&D (2015)
  ·  DOI: [10.1007/s40268-015-0110-z](https://doi.org/10.1007/s40268-015-0110-z)

## Model component
<dbs-pgx drug="pyrimethamine" model-id="Pyrimethamine_Odongo2015_reference" status="rejected" stale="false" population="pregnant and nonpregnant Ugandan women" measured-compound="pyrimethamine" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KATV [/h] | `Q49` · kabs | 1.05 | /h | 0.0002916666666666667 | [1] / [h] | not captured | llm (0.6) | Tab2:row2:col4, Tab2:row2:col5, Tab2:row2:col6 | — | not captured |
| V 2/F TV [L] | `Q82` · V2/F | 153.60 | L | 0.1536 | [l] | not captured | llm (0.6) | Tab2:row3:col4, Tab2:row3:col5, Tab2:row3:col6 | — | not captured |
| CL/F TV [L/h] | `Q27` · CL/F | 0.799 | L/h | 2.2194444444444445e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | Tab2:row4:col4, Tab2:row4:col5, Tab2:row4:col6 | — | not captured |
| V 3/F TV [L] | `Q78` · V3/F | 49.53 | L | 0.049530000000000005 | [l] | not captured | llm (0.6) | Tab2:row5:col4, Tab2:row5:col5, Tab2:row5:col6 | — | not captured |
| Q TV [L/h] | `Q30` · Q | 0.282 | L/h | 7.833333333333332e-08 | [l] / [h] | not captured | llm (0.6) | Tab2:row6:col4, Tab2:row6:col5, Tab2:row6:col6 | — | not captured |
| ALAGTV [h] | `Q83` · tlag | 0.394 | h | 1418.4 | [h] | not captured | llm (0.6) | Tab2:row7:col4, Tab2:row7:col5, Tab2:row7:col6 | — | not captured |
| Pregnancy–CLb | `Q23` · CLb | 0.319 | L/h | 8.861111111111111e-08 | L/h | not captured | llm_confirmed (0.6) | Tab2:row10:col5, Tab2:row10:col6 | — | not captured |
| Gestation–V 2 c | `Q64` · V2 | 0.0079 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row11:col5, Tab2:row11:col6 | — | not captured |
| theta_q314_age_power | `Q900` · theta_q314_age_power | 0.016 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row8:col5, Tab2:row8:col6 | — | not captured |
| theta_v2_body_weight_v_2_d | `Q900` · theta_v2_body_weight_v_2_d | 0.0084 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row12:col5, Tab2:row12:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Pregnancy–CLb' → L/h (from the popPK convention: 'The paper does not state a unit for CLb. Blood (systemic) clearance in population PK is conventionally expressed in L/h,')
- implicit units: 'Gestation–V 2 c' — the LLM proposed 'L/week', whose dimension does not fit Q64; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pyrimethamine

**Extraction notes:**
- unparsed cell Odongo_2015_table_3:row3:col1 = '0.01 (0.01–0.01)'
- unparsed cell Odongo_2015_table_3:row3:col2 = '0.04 (0.03–0.04)'
- unparsed cell Odongo_2015_table_3:row3:col3 = '0.04 (0.03–0.04)'
- unparsed cell Odongo_2015_table_3:row4:col1 = '8.92 (7.87–9.0)'
- unparsed cell Odongo_2015_table_3:row4:col2 = '10.7 (10.55–10.84)'
- unparsed cell Odongo_2015_table_3:row4:col3 = '11.7 (11.6–11.8)'
- unparsed cell Odongo_2015_table_3:row5:col1 = '0.03 (0.02–0.03)'
- unparsed cell Odongo_2015_table_3:row5:col2 = '0.03 (0.02–0.03)'
- unparsed cell Odongo_2015_table_3:row5:col3 = '0.03 (0.03–0.03)'
- unparsed cell Odongo_2015_table_3:row6:col1 = '217.8 (126.4–344.9)'
- unparsed cell Odongo_2015_table_3:row6:col2 = '180.3 (60.3–287.9)'
- unparsed cell Odongo_2015_table_3:row6:col3 = '194.8 (112.2–302.8)'
- unparsed cell Odongo_2015_table_3:row8:col1 = '793,100 (735,200–847,000)'
- unparsed cell Odongo_2015_table_3:row8:col2 = '144,600 (120,100–169,600)'
- unparsed cell Odongo_2015_table_3:row8:col3 = '144,100 (107,600–170,500)'
- unparsed cell Odongo_2015_table_3:row10:col1 = '1.05 (0.79–1.30)'
- unparsed cell Odongo_2015_table_3:row10:col2 = '1.89 (0.74–1.43)'
- unparsed cell Odongo_2015_table_3:row10:col3 = '1.39 (0.82–1.56)'
- unparsed cell Odongo_2015_table_3:row11:col1 = '0.59 (0.49–0.64)'
- unparsed cell Odongo_2015_table_3:row11:col2 = '0.92 (0.79–1.01)'
- unparsed cell Odongo_2015_table_3:row11:col3 = '0.94 (0.77–1.06)'
- unparsed cell Odongo_2015_table_3:row12:col1 = '128.7 (119.7–133.4)'
- unparsed cell Odongo_2015_table_3:row12:col2 = '155.3 (145–161.8)'
- unparsed cell Odongo_2015_table_3:row12:col3 = '171.6 (158.3–180.8)'
- unparsed cell Odongo_2015_table_3:row13:col1 = '52.9 (27.5–70.5)'
- unparsed cell Odongo_2015_table_3:row13:col2 = '54.6 (37.2–68.9)'
- unparsed cell Odongo_2015_table_3:row13:col3 = '60.2 (45.6–62.5)'
- unparsed cell Odongo_2015_table_3:row15:col1 = '279.7 (211.6–302.7)'
- unparsed cell Odongo_2015_table_3:row15:col2 = '232.2 (183.2–261.9)'
- unparsed cell Odongo_2015_table_3:row15:col3 = '253.8 (213–262.8)'
- unparsed cell Odongo_2015_table_3:row16:col1 = '133.03 (117.3–153.1)'
- unparsed cell Odongo_2015_table_3:row16:col2 = '87.66 (74.1–95.3)'
- unparsed cell Odongo_2015_table_3:row16:col3 = '87.4 (70.9–97.9)'
- companion parameter table 3 transcribed (11 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row10:col5', 'Tab2:row10:col6'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row6:col4', 'Tab2:row6:col5', 'Tab2:row6:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row2:col4', 'Tab2:row2:col5', 'Tab2:row2:col6'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col4', 'Tab2:row5:col5', 'Tab2:row5:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col4', 'Tab2:row3:col5', 'Tab2:row3:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row7:col4', 'Tab2:row7:col5', 'Tab2:row7:col6'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row11:col5', 'Tab2:row11:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q23 | pass | clearance within physiological range | 0.319 L/h | not captured | not captured | ['Tab2:row10:col5', 'Tab2:row10:col6'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.799 L/h | not captured | not captured | ['Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 154 L | not captured | not captured | ['Tab2:row3:col4', 'Tab2:row3:col5', 'Tab2:row3:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pyrimethamine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Odongo_2015` / `Odongo_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:08 UTC</sub>
