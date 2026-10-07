<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;ibritumomab tiuxetan&quot;,&quot;href&quot;:&quot;drugs/drug_ibritumomab_tiuxetan/&quot;},{&quot;label&quot;:&quot;Morschhauser_2018 \u00b7 f2&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ibritumomab tiuxetan — `IbritumomabTiuxetan_Morschhauser2018_f2`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Rejected because the clearance of ibritumomab tiuxetan is reported as 1.03 ml.min, a unit lacking the per-time dimension expected of clearance, so this structural parameter fails the dimension check and cannot be expressed in SI units.**

The record reports total clearance for ibritumomab tiuxetan as 1.03 with unit ml.min, which is dimensionally inconsistent with clearance (volume per time); because this unit could not be converted to SI, the parameter arrived without an SI value and the dimension check on it failed. The remaining parameters (Cmax 0.308 µg.mL−1, terminal half-life 83.6 h, MRT 114.1 h, AUC 1708.1 µg.min.mL−1, and the transfer rate constants k12 0.033, k21 0.516, k13 0.738, k31 0.167 min−1) carry consistent units. A second reader also disagreed on the analyte naming and on the classification of the two AUC entries, and noted blood, liver and vertebrae L2-L4 values absent from this record. Extracted — ibritumomab tiuxetan: Cmax 0.308 µg.mL−1, t1/2z 83.6 h, MRT 114 h, CL 1.03 ml.min, AUC 1.71e+03 µg.min.mL−1, k12 0.033 min−1, k21 0.516 min−1, AUCt 262 µg.min.mL−1, … (+2).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has ibritumomab tiuxetan, the second reading 90Y-ibritumomab tiuxetan; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:13.880162+00:00) predates the upstream re-run (2026-10-07 16:46:17.232044+00:00). Current validate status: `rejected`.

## Citation
Morschhauser F et al., A new pharmacokinetic model for 90Y-ibr…, Scientific reports (2018)
  ·  DOI: [10.1038/s41598-018-33160-0](https://doi.org/10.1038/s41598-018-33160-0)

## Model component
<dbs-pgx drug="ibritumomab tiuxetan" model-id="IbritumomabTiuxetan_Morschhauser2018_f2" status="rejected" stale="true" population="patients with follicular lymphoma" measured-compound="ibritumomab tiuxetan" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax* (µg.mL−1) | `Q32` · Cmax | 0.308 | µg.mL−1 | not captured | [µg] / [ml] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row1:col1, Morschhauser_2018_table_3:row1:col3, Morschhauser_2018_table_3:row7:col1, Morschhauser_2018_table_3:row7:col3, Morschhauser_2018_table_3:row14:col1, Morschhauser_2018_table_3:row14:col3, Morschhauser_2018_table_3:row21:col1, Morschhauser_2018_table_3:row21:col3 | — | not captured |
| T1/2* (h) | `Q57` · t1/2z | 83.6 | h | 300960.0 | [h] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row2:col1, Morschhauser_2018_table_3:row2:col3 | — | not captured |
| MRT* (h) | `Q53` · MRT | 114.1 | h | 410760.0 | [h] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row3:col1, Morschhauser_2018_table_3:row3:col3, Morschhauser_2018_table_3:row10:col1, Morschhauser_2018_table_3:row10:col3, Morschhauser_2018_table_3:row17:col1, Morschhauser_2018_table_3:row17:col3, Morschhauser_2018_table_3:row24:col1, Morschhauser_2018_table_3:row24:col3 | — | not captured |
| Clearance* (ml.min) | `Q22` · CL | 1.03 | ml.min | 1.7166666666666665e-08 | [min] · [ml] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row4:col1, Morschhauser_2018_table_3:row4:col3 | — | not captured |
| AUC Total* (µg.min.mL−1) | `Q88` · AUC | 1708.1 | µg.min.mL−1 | not captured | [[min] · [µg]] / [ml] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row5:col1, Morschhauser_2018_table_3:row5:col3 | — | not captured |
| k12* (min−1) | `Q301` · k12 | 0.033 | min−1 | 0.00055 | [1] / [min] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row8:col3 | — | not captured |
| k21* (min−1) | `Q302` · k21 | 0.516 | min−1 | 0.0086 | [1] / [min] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row9:col3 | — | not captured |
| AUCcum 4d* (µg.min.mL−1) | `Q19` · AUCt | 261.98 | µg.min.mL−1 | not captured | [[min] · [µg]] / [ml] | not captured | llm (0.6) | Morschhauser_2018_table_3:row11:col1, Morschhauser_2018_table_3:row11:col3, Morschhauser_2018_table_3:row18:col1, Morschhauser_2018_table_3:row18:col3, Morschhauser_2018_table_3:row25:col1, Morschhauser_2018_table_3:row25:col3 | — | not captured |
| k13* (min−1) | `Q303` · k13 | 0.738 | min−1 | 0.0123 | [1] / [min] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row15:col3, Morschhauser_2018_table_3:row22:col3 | — | not captured |
| k31* (min−1) | `Q304` · k31 | 0.167 | min−1 | 0.0027833333333333334 | [1] / [min] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row16:col3, Morschhauser_2018_table_3:row23:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Blood' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row0:col3'])
- unit_dimension_mismatch: 'Clearance* (ml.min)' → Q22 (unit '[length] ** 3 * [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Vertebrae L2-L4' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row6:col3'])
- dropped duplicate Q19 ('AUCcum 7d* (µg.min.mL−1)', value '558.03') — already have one for this compound
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row13:col3'])
- dropped unlinked row (NIL): 'Spleen' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row20:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ibritumomab tiuxetan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'f2' subgroup of Morschhauser_2018 (paper reports 5 populations: f1, f2, liver, lumbar vertebrae l2-l4, spleen)
- molar mass: none found for 'ibritumomab_tiuxetan' — its concentrations stay mass-only
- molar mass: none found for 'ibritumomab tiuxetan' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Morschhauser_2018_table_3:row8:col1 = '1.11 E-4 (1.31 E-4)'
- unparsed cell Morschhauser_2018_table_3:row8:col2 = '0.60 E-4 (0.55 E-4)'
- unparsed cell Morschhauser_2018_table_3:row9:col1 = '1.05 E-4 (0.55 E-4)'
- unparsed cell Morschhauser_2018_table_3:row9:col2 = '0.96 E-4 (0.57 E-4)'
- unparsed cell Morschhauser_2018_table_3:row15:col1 = '1.80 E-4 (0.60 E-4)'
- unparsed cell Morschhauser_2018_table_3:row15:col2 = '2.05 E-4 (1.70 E-4)'
- unparsed cell Morschhauser_2018_table_3:row16:col1 = '2.32 E-4 (1.07 E-4)'
- unparsed cell Morschhauser_2018_table_3:row16:col2 = '1.77 E-4 (0.25 E-4)'
- unparsed cell Morschhauser_2018_table_3:row22:col1 = '2.11 E-4 (1.39 E-4)'
- unparsed cell Morschhauser_2018_table_3:row22:col2 = '1.17 E-4 (0.52 E-4)'
- unparsed cell Morschhauser_2018_table_3:row23:col1 = '1.26 E-4 (0.50 E-4)'
- unparsed cell Morschhauser_2018_table_3:row23:col2 = '1.64 E-4 (0.40 E-4)'
- companion parameter table 3 transcribed (69 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.75 (12/16 fields) | 4 |

<details><summary>4 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[blood in corresponding volume*]` | not captured | 8.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[liver]` | not captured | 489.61 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | ibritumomab tiuxetan | 90Y-ibritumomab tiuxetan | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | ibritumomab tiuxetan | 111In-ibritumomab tiuxetan | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row11:col1', 'Morschhauser_2018_table_3:row11:col3', 'Morschhauser_2018_table_3:row18:col1', 'Morschhauser_2018_table_3:row18:col3', 'Morschhauser_2018_table_3:row25:col1', 'Morschhauser_2018_table_3:row25:col3'] |
| C5_dimension_Q22 | fail | [length] ** 3 * [time] | ml.min | not captured | not captured | ['Morschhauser_2018_table_3:row4:col1', 'Morschhauser_2018_table_3:row4:col3'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row8:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row9:col3'] |
| C5_dimension_Q303 | pass | 1 / [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row15:col3', 'Morschhauser_2018_table_3:row22:col3'] |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row16:col3', 'Morschhauser_2018_table_3:row23:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row1:col1', 'Morschhauser_2018_table_3:row1:col3', 'Morschhauser_2018_table_3:row7:col1', 'Morschhauser_2018_table_3:row7:col3', 'Morschhauser_2018_table_3:row14:col1', 'Morschhauser_2018_table_3:row14:col3', 'Morschhauser_2018_table_3:row21:col1', 'Morschhauser_2018_table_3:row21:col3'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row3:col1', 'Morschhauser_2018_table_3:row3:col3', 'Morschhauser_2018_table_3:row10:col1', 'Morschhauser_2018_table_3:row10:col3', 'Morschhauser_2018_table_3:row17:col1', 'Morschhauser_2018_table_3:row17:col3', 'Morschhauser_2018_table_3:row24:col1', 'Morschhauser_2018_table_3:row24:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row2:col1', 'Morschhauser_2018_table_3:row2:col3'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row5:col1', 'Morschhauser_2018_table_3:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.03 | not captured | not captured | ['Morschhauser_2018_table_3:row4:col1', 'Morschhauser_2018_table_3:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0618 L/h | not captured | not captured | ['Morschhauser_2018_table_3:row4:col1', 'Morschhauser_2018_table_3:row4:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ibritumomab_tiuxetan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Morschhauser_2018` / `Morschhauser_2018::f2`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:46 UTC</sub>
