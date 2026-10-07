<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;fimasartan&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/&quot;},{&quot;label&quot;:&quot;Kim_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fimasartan — `Fimasartan_Kim2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.357). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.30).">human + animal</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.30).

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has fimasartan, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Kim TH et al., Population Pharmacokinetic Modeling of…, The AAPS journal (2015)
  ·  DOI: [10.1208/s12248-015-9764-2](https://doi.org/10.1208/s12248-015-9764-2)

## Model component
<dbs-pgx drug="fimasartan" model-id="Fimasartan_Kim2015_reference" status="rejected" stale="false" population="rats, dogs, and healthy volunteers" measured-compound="fimasartan" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Distribution clearance from central to liver compartment | Q30 | not captured | llm_confirmed |
| Half-life of elimination from liver | Q57 | not captured | llm |
| Modeled absolute oral bioavailability | Q40 | not captured | llm_confirmed |
| theta_t1_2z_category | Q900 | not captured | not captured |
| theta_q95_category | Q900 | not captured | not captured |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Bioavailability under fed relative to fasting conditions' routed out of structural estimates ('Humans BSV (SE%)')
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'symbol' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q30 ('Distribution clearance from shallow peripheral compartment', value None) — already have one for this compound
- dropped duplicate Q30 ('Distribution clearance to deep peripheral compartment', value None) — already have one for this compound
- dropped unlinked row (NIL): 'Half-life for transfer from stomach to gut' — extend the ontology if this is a real PK parameter (source ['Kim_2015_table_1:row13:col1'])
- dropped unlinked row (NIL): 'Half-life of transfer from liver to bile' — extend the ontology if this is a real PK parameter (source ['Kim_2015_table_1:row19:col1'])
- dropped unlinked row (NIL): 'Half-life of transfer from bile to gut at baseline (ie, slowest transfer)' — extend the ontology if this is a real PK parameter (source ['Kim_2015_table_1:row20:col1'])
- dropped unlinked row (NIL): 'Turnover half-life of bile flow' — extend the ontology if this is a real PK parameter (source ['Kim_2015_table_1:row25:col1'])
- covariate effect for Q95 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fimasartan
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2
- unparsed cell Kim_2015_table_1:row3:col1 = 'CLD1-LIvb'
- unparsed cell Kim_2015_table_1:row3:col3 = '60.2 (6.6%)'
- unparsed cell Kim_2015_table_1:row3:col4 = '0.059 (221%)'
- unparsed cell Kim_2015_table_1:row3:col5 = '141 (2.4%)'
- unparsed cell Kim_2015_table_1:row3:col6 = '0.031 (167%)'
- unparsed cell Kim_2015_table_1:row3:col7 = '47.3 (7.3%)'
- unparsed cell Kim_2015_table_1:row3:col8 = '0.158 (147%)'
- unparsed cell Kim_2015_table_1:row4:col3 = '25.8 (5.1%)'
- unparsed cell Kim_2015_table_1:row4:col4 = '0.095 (152%)'
- unparsed cell Kim_2015_table_1:row4:col5 = '23.8 (5.1%)'
- unparsed cell Kim_2015_table_1:row4:col6 = '0.095 (152%)'
- unparsed cell Kim_2015_table_1:row4:col7 = '25.8 (5.1%)'
- unparsed cell Kim_2015_table_1:row4:col8 = '0.095 (152%)'
- unparsed cell Kim_2015_table_1:row5:col3 = '13.3 (8.7%)'
- unparsed cell Kim_2015_table_1:row5:col4 = '0.356 (44%)'
- unparsed cell Kim_2015_table_1:row5:col5 = '13.3 (8.7%)'
- unparsed cell Kim_2015_table_1:row5:col6 = '0.356 (44%)'
- unparsed cell Kim_2015_table_1:row5:col7 = '13.3 (8.7%)'
- unparsed cell Kim_2015_table_1:row5:col8 = '0.356 (44%)'
- unparsed cell Kim_2015_table_1:row13:col3 = '9.29 (16.1%)'
- unparsed cell Kim_2015_table_1:row13:col4 = '0.581 (46%)'
- unparsed cell Kim_2015_table_1:row13:col5 = '9.29 (16.1%)'
- unparsed cell Kim_2015_table_1:row13:col6 = '0.581 (46%)'
- unparsed cell Kim_2015_table_1:row13:col7 = '9.29 (16.1%)'
- unparsed cell Kim_2015_table_1:row13:col8 = '0.581 (46%)'
- unparsed cell Kim_2015_table_1:row14:col3 = '1.26 (37.5%)'
- unparsed cell Kim_2015_table_1:row14:col4 = '0.767 (72%)'
- unparsed cell Kim_2015_table_1:row14:col5 = '1.16 (37.5%)'
- unparsed cell Kim_2015_table_1:row14:col6 = '0.767 (72%)'
- unparsed cell Kim_2015_table_1:row14:col7 = '1.16 (37.5%)'
- unparsed cell Kim_2015_table_1:row14:col8 = '0.767 (72%)'
- unparsed cell Kim_2015_table_1:row16:col3 = '0.838 (9.1%)'
- unparsed cell Kim_2015_table_1:row18:col3 = '0.0836 (10.3%)'
- unparsed cell Kim_2015_table_1:row18:col4 = '0.152 (121%)'
- unparsed cell Kim_2015_table_1:row18:col5 = '0.166 (37.1%)'
- unparsed cell Kim_2015_table_1:row18:col6 = '0.265 (220%)'
- unparsed cell Kim_2015_table_1:row18:col7 = '0.451 (18.4%)'
- unparsed cell Kim_2015_table_1:row18:col8 = '0.261 (159%)'
- unparsed cell Kim_2015_table_1:row19:col3 = '0.0330 (10.6%)'
- unparsed cell Kim_2015_table_1:row19:col4 = '0.108 (225%)'
- unparsed cell Kim_2015_table_1:row19:col5 = '0.276 (28.4%)'
- unparsed cell Kim_2015_table_1:row19:col6 = '0.217 (130%)'
- unparsed cell Kim_2015_table_1:row19:col7 = '0.0840 (29.2%)'
- unparsed cell Kim_2015_table_1:row19:col8 = '0.233 (226%)'
- unparsed cell Kim_2015_table_1:row20:col3 = '1.49 (6.3%)'
- unparsed cell Kim_2015_table_1:row20:col4 = '0.092 (132%)'
- unparsed cell Kim_2015_table_1:row20:col5 = '3.77 (13.1%)'
- unparsed cell Kim_2015_table_1:row20:col6 = '0.296 (63%)'
- unparsed cell Kim_2015_table_1:row20:col7 = '1.24 (18%)'
- unparsed cell Kim_2015_table_1:row20:col8 = '0.309 (59%)'
- unparsed cell Kim_2015_table_1:row25:col3 = '0.465 (7.5%)'
- unparsed cell Kim_2015_table_1:row25:col4 = '0.608 (106%)'
- unparsed cell Kim_2015_table_1:row25:col5 = '0.298 (166%)'
- unparsed cell Kim_2015_table_1:row25:col6 = '1.19 (195%)'
- unparsed cell Kim_2015_table_1:row25:col7 = '1.75 (33.2%)'
- unparsed cell Kim_2015_table_1:row25:col8 = '0.555 (208%)'
- unparsed cell Kim_2015_table_2:row3:col2 = 'Solution, 15.4% (11.0–17.6%)\nTablet, 13.9% (8.56–16.0%)\nCapsule, 7.13% (6.31–8.35%)'
- unparsed cell Kim_2015_table_2:row3:col3 = 'Solution, 38.7% (20.0–59.8%)'
- LLM region Kim_2015:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.357 (5/14 fields) | 9 |

<details><summary>9 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[distribution clearance to deep peripheral compartment]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-life of elimination from liver].covariate_forms` | ['additive_shift'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[half-life of elimination from liver].parameter_id` | Q57 | Q60 | mismatch |
| `gpt-oss:120b` | `parameters[half-life of transfer from bile to gut at baseline]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-life of transfer from liver to bile]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[modeled absolute oral bioavailability]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_t1_2z_category]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | fimasartan | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | fimasartan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fimasartan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2015` / `Kim_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:36 UTC</sub>
