<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;tocainide&quot;,&quot;href&quot;:&quot;drugs/drug_tocainide/&quot;},{&quot;label&quot;:&quot;Lalka_1976 \u00b7 average&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tocainide_Harron1987_reference&quot;,&quot;label&quot;:&quot;Harron_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tocainide/Tocainide_Harron1987_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tocainide_Oltmanns1983_reference&quot;,&quot;label&quot;:&quot;Oltmanns_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tocainide/Tocainide_Oltmanns1983_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tocainide_Wiegers1983_reference&quot;,&quot;label&quot;:&quot;Wiegers_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tocainide/Tocainide_Wiegers1983_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tocainide — `Tocainide_Lalka1976_average`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of (vd)ss: this record has 118.5, the second reading none; it also differs on 11 more fields. That field does not shape the model.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Lalka D et al., Kinetics of the oral antiarrhythmic lid…, Clinical pharmacology and t… (1976)
  ·  DOI: [10.1002/cpt1976196757](https://doi.org/10.1002/cpt1976196757)

## Model component
<dbs-pgx drug="tocainide" model-id="Tocainide_Lalka1976_average" status="rejected" stale="false" population="healthy male subjects" measured-compound="tocainide" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A (mcg/ml) | `Q900` · equation variable | 1.64 | mcg/ml | not captured | [µg] / [ml] | not captured | llm (0.6) | Lalka_1976_table_4:row0:col5 | — | not captured |
| α (min-1) | `Q67` · λ1 | 0.064 | min-1 | not captured | [1] / [min] | not captured | exact (1.0) | Lalka_1976_table_4:row1:col5 | — | not captured |
| β (min-1) | `Q47` · kel | 0.0010 | min-1 | 1.6666666666666667e-05 | [1] / [min] | not captured | exact (1.0) | Lalka_1976_table_4:row3:col5 | — | not captured |
| k12 (min-1) | `Q301` · k12 | 0.027 | min-1 | 0.00045 | [1] / [min] | not captured | exact (1.0) | Lalka_1976_table_4:row4:col5 | — | not captured |
| k21 (min-1) | `Q302` · k21 | 0.037 | min-1 | 0.0006166666666666666 | [1] / [min] | not captured | exact (1.0) | Lalka_1976_table_4:row5:col5 | — | not captured |
| Vc (L) | `Q61` · V | 74.7 | L | 0.0747 | [l] | not captured | exact (1.0) | Lalka_1976_table_4:row7:col5 | — | not captured |
| (Vd)ss (L) | `Q65` · Vss | 118.5 | L | 0.11850000000000001 | [l] | not captured | llm_corrected (0.6) | Lalka_1976_table_4:row8:col5 | — | not captured |
| ClB (ml/min) | `Q23` · CLb | 155 | ml/min | 2.5833333333333333e-06 | [ml] / [min] | not captured | exact (1.0) | Lalka_1976_table_4:row10:col4, Lalka_1976_table_4:row10:col5 | — | not captured |
| Clr (ml/min) | `Q26` · CLR | 55 | ml/min | 9.166666666666665e-07 | [ml] / [min] | not captured | exact (1.0) | Lalka_1976_table_4:row11:col4, Lalka_1976_table_4:row11:col5 | — | not captured |
| ClNR (ml/min) | `Q79` · CLNR | 100 | ml/min | 1.6666666666666665e-06 | [ml] / [min] | not captured | exact (1.0) | Lalka_1976_table_4:row12:col4, Lalka_1976_table_4:row12:col5 | — | not captured |
| AUC (min mcg/ml) | `Q88` · AUC | 1622 | min mcg/ml | not captured | [[min] · [µg]] / [ml] | not captured | exact (1.0) | Lalka_1976_table_4:row13:col4, Lalka_1976_table_4:row13:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'α (min-1)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q900 ('B (mcg/ml)', value '1.78') — already have one for this compound
- dropped duplicate Q47 ('Kel (min-1)', value '0.0018') — already have one for this compound
- unit_dimension_mismatch: '(Vd)β (L)' → Q47 (unit '[length] ** 3' vs ontology '1 / [time]') — route to review
- dropped duplicate Q47 ('(Vd)β (L)', value '133.4') — already have one for this compound
- unit_dimension_unknown: 'min mcg/ml' (AUC)
- implicit units: 'AUC (min mcg/ml)' — the LLM proposed 'min mcg/ml', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tocainide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc (L)' is the general volume)
- status held at route_to_review — not promoted
- population split: 'average' subgroup of Lalka_1976 (paper reports 2 populations: average, nahco3 treated)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 4, 5, 6, 7
- unparsed cell Lalka_1976_table_5:row6:col1 = '300 mg'
- unparsed cell Lalka_1976_table_5:row8:col1 = '300 mg'
- unparsed cell Lalka_1976_table_5:row10:col1 = '300 mg'
- unparsed cell Lalka_1976_table_5:row12:col1 = '300 mg'
- transposed table Lalka_1976_table_7: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[(vd)ss]` | 118.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[a]` | 1.64 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | 1622 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clb]` | 155 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clnr]` | 100 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clr]` | 55 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | 0.027 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21]` | 0.037 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total body clearance]` | not captured | 166 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | 74.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[α]` | 0.064 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[β]` | 0.0010 | not captured | only_one_extracted |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Lalka_1976_table_4:row10:col4', 'Lalka_1976_table_4:row10:col5'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Lalka_1976_table_4:row11:col4', 'Lalka_1976_table_4:row11:col5'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Lalka_1976_table_4:row4:col5'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Lalka_1976_table_4:row5:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Lalka_1976_table_4:row3:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lalka_1976_table_4:row7:col5'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lalka_1976_table_4:row8:col5'] |
| C5_dimension_Q67 | fail | 1 / [time] | min-1 | not captured | not captured | ['Lalka_1976_table_4:row1:col5'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Lalka_1976_table_4:row12:col4', 'Lalka_1976_table_4:row12:col5'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | min mcg/ml | not captured | not captured | ['Lalka_1976_table_4:row13:col4', 'Lalka_1976_table_4:row13:col5'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 155.0 | not captured | not captured | ['Lalka_1976_table_4:row10:col4', 'Lalka_1976_table_4:row10:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q23 | pass | clearance within physiological range | 9.3 L/h | not captured | not captured | ['Lalka_1976_table_4:row10:col4', 'Lalka_1976_table_4:row10:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 74.7 L | not captured | not captured | ['Lalka_1976_table_4:row7:col5'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 119 L | not captured | not captured | ['Lalka_1976_table_4:row8:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tocainide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lalka_1976` / `Lalka_1976::average`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 23:10 UTC</sub>
