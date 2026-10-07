<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;saxagliptin&quot;,&quot;href&quot;:&quot;drugs/drug_saxagliptin/&quot;},{&quot;label&quot;:&quot;Wang_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# saxagliptin — `Saxagliptin_Wang2024_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.878). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — saxagliptin: Cmax 3.72e+03 ng/mL, tmax 0.11 h, AUC 585 ng*h/mL, t1/2ka 0.07 h, t1/2α 0.06 h, t1/2β 0.36 h, V 2.31e+03 mL/kg, V2 1.84e+04 mL/kg, … (+4); 5-hydroxy saxagliptin: V1 141 ml/kg, V2 138 ml/kg, CL 882 ml/h/kg, Q 472 ml/h/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[t1/2a].parameter_id`: this record has Q59, the second reading Q95; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:31:41.846498+00:00) predates the upstream re-run (2026-10-07 16:14:29.138700+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `unknown`, measured `saxagliptin`.

## Citation
Wang T et al., Pharmacokinetic/Pharmacodynamic modelli…, BMC pharmacology & toxicolo… (2024)
  ·  DOI: [10.1186/s40360-024-00757-3](https://doi.org/10.1186/s40360-024-00757-3)

## Model component
<dbs-pgx drug="saxagliptin" model-id="Saxagliptin_Wang2024_reference" status="needs_review" stale="true" population="unknown" measured-compound="saxagliptin" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 16 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 3716.88 | ng/mL | not captured | [ng] / [ml] | 28.56 | exact (1.0) | Tab11:row1:col1, Tab11:row1:col2, Tab11:row1:col3, Wang_2024_table_9:row0:col1, Wang_2024_table_9:row0:col2, Wang_2024_table_9:row0:col3 | — | not captured |
| Tmax (h) | `Q56` · tmax | 0.11 | h | 396.0 | [h] | 27.63 | exact (1.0) | Tab11:row2:col1, Tab11:row2:col2, Tab11:row2:col3 | — | not captured |
| AUC (ng*h/mL) | `Q88` · AUC | 585.04 | ng*h/mL | not captured | [[h] · [ng]] / [ml] | 20.82 | exact (1.0) | Tab11:row3:col1, Tab11:row3:col2, Tab11:row3:col3, Wang_2024_table_9:row1:col1, Wang_2024_table_9:row1:col2, Wang_2024_table_9:row1:col3 | — | not captured |
| t1/2Ka (h) | `Q95` · t1/2ka | 0.07 | h | 252.00000000000003 | [h] | 37.50 | exact (1.0) | Tab11:row4:col1, Tab11:row4:col2, Tab11:row4:col3 | — | not captured |
| t1/2a (h) | `Q59` · t1/2α | 0.06 | h | 216.0 | [h] | 16.50 | llm_corrected (0.6) | Tab11:row5:col1, Tab11:row5:col2, Tab11:row5:col3, Wang_2024_table_9:row2:col1, Wang_2024_table_9:row2:col2, Wang_2024_table_9:row2:col3 | — | not captured |
| t1/2β (h) | `Q60` · t1/2β | 0.36 | h | 1296.0 | [h] | 7.88 | exact (1.0) | Tab11:row6:col1, Tab11:row6:col2, Tab11:row6:col3, Wang_2024_table_9:row3:col1, Wang_2024_table_9:row3:col2, Wang_2024_table_9:row3:col3 | — | not captured |
| V (mL/kg) | `Q61` · V | 2307.24 | mL/kg | 0.16150679999999995 | [ml] / [kg] | 47.57 | exact (1.0) | Tab11:row7:col1, Tab11:row7:col2, Tab11:row7:col3 | — | not captured |
| V2 (mL/kg) | `Q64` · V2 | 18393.30 | mL/kg | 1.2875309999999998 | [ml] / [kg] | 89.99 | exact (1.0) | Tab11:row8:col1, Tab11:row8:col2, Tab11:row8:col3 | — | not captured |
| CL (mL/h/kg) | `Q22` · CL | 3245.80 | mL/h/kg | 6.311277777777779e-05 | [ml] / [[h] · [kg]] | 27.79 | exact (1.0) | Tab11:row9:col1, Tab11:row9:col2, Tab11:row9:col3 | — | not captured |
| CL2 (mL/h/kg) | `Q30` · Q | 17090.42 | mL/h/kg | 0.0003323137222222222 | [ml] / [[h] · [kg]] | 68.60 | exact (1.0) | Tab11:row10:col1, Tab11:row10:col2, Tab11:row10:col3 | — | not captured |
| K12 (1/h) | `Q301` · k12 | 3.51 | 1/h | 0.000975 | 1/h | 33.05 | exact (1.0) | Tab11:row11:col1, Tab11:row11:col2, Tab11:row11:col3, Wang_2024_table_9:row8:col1, Wang_2024_table_9:row8:col2, Wang_2024_table_9:row8:col3 | — | not captured |
| K21 (1/h) | `Q302` · k21 | 3.42 | 1/h | 0.00095 | 1/h | 3.16 | exact (1.0) | Tab11:row12:col1, Tab11:row12:col2, Tab11:row12:col3, Wang_2024_table_9:row9:col1, Wang_2024_table_9:row9:col2, Wang_2024_table_9:row9:col3 | — | not captured |
| V (ml/kg) | `Q63` · V1 | 141.49 | ml/kg | 0.0099043 | [ml] / [kg] | 26.09 | exact (1.0) | Wang_2024_table_9:row4:col1, Wang_2024_table_9:row4:col2, Wang_2024_table_9:row4:col3 | — | not captured |
| V2 (ml/kg) | `Q64` · V2 | 137.81 | ml/kg | 0.0096467 | [ml] / [kg] | 9.46 | exact (1.0) | Wang_2024_table_9:row5:col1, Wang_2024_table_9:row5:col2, Wang_2024_table_9:row5:col3 | — | not captured |
| CL (ml/h/kg) | `Q22` · CL | 882.19 | ml/h/kg | 1.7153694444444444e-05 | [ml] / [[h] · [kg]] | 22.60 | exact (1.0) | Wang_2024_table_9:row6:col1, Wang_2024_table_9:row6:col2, Wang_2024_table_9:row6:col3 | — | not captured |
| CL2 (ml/h/kg) | `Q30` · Q | 471.60 | ml/h/kg | 9.17e-06 | [ml] / [[h] · [kg]] | 12.06 | exact (1.0) | Wang_2024_table_9:row7:col1, Wang_2024_table_9:row7:col2, Wang_2024_table_9:row7:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'K12 (1/h)' → 1/h (from the popPK convention: 'K12 is a first-order transfer rate constant; the standard unit for first-order rate constants in population PK is 1/h, c')
- implicit units: 'K21 (1/h)' → 1/h (from the popPK convention: 'K21 is a first-order transfer rate constant; the standard unit for first-order rate constants in population PK is 1/h, c')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=saxagliptin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 24 linked by role; re-tagged parent→5-hydroxy saxagliptin ×12

**Extraction notes:**
- companion parameter table 9 transcribed (30 record(s))
- LLM selected parameter table(s) 9, 11

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.878 (36/41 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[k (1/h) 12]` | not captured | 46.22 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k (1/h) 21]` | not captured | 37.47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2a].parameter_id` | Q59 | Q95 | mismatch |
| `gpt-oss:120b` | `parameters[t1/2ka].parameter_id` | Q95 | Q49 | mismatch |
| `gpt-oss:120b` | `parameters[t1/2β].parameter_id` | Q60 | Q47 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 16 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab11:row9:col1', 'Tab11:row9:col2', 'Tab11:row9:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2024_table_9:row6:col1', 'Wang_2024_table_9:row6:col2', 'Wang_2024_table_9:row6:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab11:row10:col1', 'Tab11:row10:col2', 'Tab11:row10:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2024_table_9:row7:col1', 'Wang_2024_table_9:row7:col2', 'Wang_2024_table_9:row7:col3'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab11:row11:col1', 'Tab11:row11:col2', 'Tab11:row11:col3', 'Wang_2024_table_9:row8:col1', 'Wang_2024_table_9:row8:col2', 'Wang_2024_table_9:row8:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab11:row12:col1', 'Tab11:row12:col2', 'Tab11:row12:col3', 'Wang_2024_table_9:row9:col1', 'Wang_2024_table_9:row9:col2', 'Wang_2024_table_9:row9:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab11:row1:col1', 'Tab11:row1:col2', 'Tab11:row1:col3', 'Wang_2024_table_9:row0:col1', 'Wang_2024_table_9:row0:col2', 'Wang_2024_table_9:row0:col3'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Tab11:row2:col1', 'Tab11:row2:col2', 'Tab11:row2:col3'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Tab11:row5:col1', 'Tab11:row5:col2', 'Tab11:row5:col3', 'Wang_2024_table_9:row2:col1', 'Wang_2024_table_9:row2:col2', 'Wang_2024_table_9:row2:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Tab11:row6:col1', 'Tab11:row6:col2', 'Tab11:row6:col3', 'Wang_2024_table_9:row3:col1', 'Wang_2024_table_9:row3:col2', 'Wang_2024_table_9:row3:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab11:row7:col1', 'Tab11:row7:col2', 'Tab11:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2024_table_9:row4:col1', 'Wang_2024_table_9:row4:col2', 'Wang_2024_table_9:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab11:row8:col1', 'Tab11:row8:col2', 'Tab11:row8:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2024_table_9:row5:col1', 'Wang_2024_table_9:row5:col2', 'Wang_2024_table_9:row5:col3'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab11:row3:col1', 'Tab11:row3:col2', 'Tab11:row3:col3', 'Wang_2024_table_9:row1:col1', 'Wang_2024_table_9:row1:col2', 'Wang_2024_table_9:row1:col3'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Tab11:row4:col1', 'Tab11:row4:col2', 'Tab11:row4:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 3245.8 | not captured | not captured | ['Tab11:row9:col1', 'Tab11:row9:col2', 'Tab11:row9:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 227 L/h | not captured | not captured | ['Tab11:row9:col1', 'Tab11:row9:col2', 'Tab11:row9:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 61.8 L/h | not captured | not captured | ['Wang_2024_table_9:row6:col1', 'Wang_2024_table_9:row6:col2', 'Wang_2024_table_9:row6:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 162 L | not captured | not captured | ['Tab11:row7:col1', 'Tab11:row7:col2', 'Tab11:row7:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 9.9 L | not captured | not captured | ['Wang_2024_table_9:row4:col1', 'Wang_2024_table_9:row4:col2', 'Wang_2024_table_9:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.29e+03 L | not captured | not captured | ['Tab11:row8:col1', 'Tab11:row8:col2', 'Tab11:row8:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 9.65 L | not captured | not captured | ['Wang_2024_table_9:row5:col1', 'Wang_2024_table_9:row5:col2', 'Wang_2024_table_9:row5:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_saxagliptin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2024` / `Wang_2024::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:14 UTC</sub>
