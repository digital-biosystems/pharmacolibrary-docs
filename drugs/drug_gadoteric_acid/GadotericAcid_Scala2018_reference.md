<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoteric acid&quot;,&quot;href&quot;:&quot;drugs/drug_gadoteric_acid/&quot;},{&quot;label&quot;:&quot;Scala_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gadoteric acid — `GadotericAcid_Scala2018_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.312). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The gadoteric acid record was rejected because reported clearance (2.51 L/h) and volume (0.161 L) were flagged as physiologically implausible, consistent with unit/scale extraction error.**

The record reports total clearance of 2.51 L/h and volume of distribution of 0.161 L for gadoteric acid. The finding attributes the clearance/volume failure to an implausible magnitude from a unit/scale extraction error but does not identify which value triggered it. Extracted — gadoteric acid: AUC 1.59e+03, CLnorm 0.0602 L/h/kg, Vss 0.0473 L/kg, t1/2β 1.35 h, CL 2.51 L/h, V 0.161 L, Q 0.335 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the links between molecules: this record has none, the second reading gadoterate meglumine → gadoteric acid (hydrolysis); it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

> **Dose compound ≠ measured compound:** dosed `gadoterate meglumine`, measured `gadoteric acid`.

## Citation
Scala M et al., A Pharmacokinetics, Efficacy, and Safet…, Investigative radiology (2018)
  ·  DOI: [10.1097/RLI.0000000000000412](https://doi.org/10.1097/RLI.0000000000000412)

## Model component
<dbs-pgx drug="gadoteric acid" model-id="GadotericAcid_Scala2018_reference" status="rejected" stale="false" population="pediatric subjects younger than 2 years with normal estimated glomerular filtration rate" measured-compound="gadoteric acid" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC, h µmol/L | `Q88` · AUC | 1591.1 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Scala_2018_table_p4_3:row0:col1, Scala_2018_table_p4_3:row0:col2, Scala_2018_table_p4_3:row0:col3 | — | not captured |
| CL/kg, L/h per kg* | `Q354` · CLnorm | 0.0602 | L/h/kg | 1.1705555555555555e-06 | L/h | not captured | llm (0.6) | Scala_2018_table_p4_3:row1:col1, Scala_2018_table_p4_3:row1:col2, Scala_2018_table_p4_3:row1:col3 | — | not captured |
| Vss/kg, L/kg* | `Q65` · Vss | 0.0473 | L/kg | 0.003311 | L | not captured | llm (0.6) | Scala_2018_table_p4_3:row2:col1, Scala_2018_table_p4_3:row2:col2, Scala_2018_table_p4_3:row2:col3 | — | not captured |
| t1/2β, h | `Q60` · t1/2β | 1.3545 | h | 4876.2 | [h] | not captured | exact (1.0) | Scala_2018_table_p4_3:row3:col1, Scala_2018_table_p4_3:row3:col2, Scala_2018_table_p4_3:row3:col3 | — | not captured |
| CL | `Q22` · CL | 2.51 | L/h | 6.972222222222222e-07 | L/h | not captured | exact (1.0) | Scala_2018:results_prose | — | not captured |
| V1 | `Q61` · V | 0.161 | L | 0.000161 | L | not captured | exact (1.0) | Scala_2018:results_prose | — | not captured |
| Q | `Q30` · Q | 0.335 | L/h | 9.305555555555555e-08 | L/h | not captured | exact (1.0) | Scala_2018:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/kg*' (Vss)
- salvaged Q22 ('CL'=2.51) from results prose — parameter table was unreadable
- salvaged Q63 ('V1'=0.161) from results prose — parameter table was unreadable
- salvaged Q30 ('Q'=0.335) from results prose — parameter table was unreadable
- implicit units: 'AUC, h µmol/L' — the LLM proposed 'μmol·h/L', whose dimension does not fit Q88; left unset
- implicit units: 'CL/kg, L/h per kg*' → L/h/kg (from the paper text: 'The paper states “The median CL adjusted to BW was estimated at 0.06 L/h per kg.”')
- implicit units: 'Vss/kg, L/kg*' → L/kg (from the paper text: 'The paper states “The median Vss adjusted to BW was estimated at 0.047 L/kg.”')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gadoteric acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- final table T3: grid unusable → re-running vision table extraction for Scala_2018
- LLM region Scala_2018:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.312 (5/16 fields) | 11 |

<details><summary>11 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [] | [['gadoterate meglumine', 'gadoteric acid', 'hydrolysis']] | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[auc, h umol/l]` | not captured | 1591.1 | only_one_extracted |
| `qwen3.8-27b` | `parameters[auc, h umol/l]` | 1591.1 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/kg, l/h per kg*]` | not captured | 0.0602 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/kg, l/h per kg*]` | 0.0602 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].parameter_id` | Q22 | Q351 | mismatch |
| `qwen3.8-27b` | `parameters[t1/2β]` | not captured | 1.3545 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2β]` | 1.3545 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[vss/kg]` | not captured | 0.0473 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vss/kg]` | 0.0473 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 1.35 | 0.044 | 0.0326 | 0.25 | reported t½β |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Scala_2018_table_p4_3:row1:col1', 'Scala_2018_table_p4_3:row1:col2', 'Scala_2018_table_p4_3:row1:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Scala_2018_table_p4_3:row3:col1', 'Scala_2018_table_p4_3:row3:col2', 'Scala_2018_table_p4_3:row3:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Scala_2018_table_p4_3:row2:col1', 'Scala_2018_table_p4_3:row2:col2', 'Scala_2018_table_p4_3:row2:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Scala_2018_table_p4_3:row0:col1', 'Scala_2018_table_p4_3:row0:col2', 'Scala_2018_table_p4_3:row0:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.51 | not captured | not captured | ['Scala_2018:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.51 L/h | not captured | not captured | ['Scala_2018:results_prose'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.161 L | not captured | not captured | ['Scala_2018:results_prose'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 3.31 L | not captured | not captured | ['Scala_2018_table_p4_3:row2:col1', 'Scala_2018_table_p4_3:row2:col2', 'Scala_2018_table_p4_3:row2:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_gadoteric_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Scala_2018` / `Scala_2018::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:32 UTC</sub>
