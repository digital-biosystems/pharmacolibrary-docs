<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03B&quot;,&quot;href&quot;:&quot;atc/A03B.md&quot;},{&quot;label&quot;:&quot;atropine&quot;,&quot;href&quot;:&quot;drugs/drug_atropine/&quot;},{&quot;label&quot;:&quot;Str\u00f6m_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atropine_Strm2021_reference&quot;,&quot;label&quot;:&quot;Str\u00f6m_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atropine/Atropine_Strm2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atropine — `Atropine_Strm2021_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.931). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The atropine two-compartment horse model was quarantined because clearance, volume of distribution, absorption rate constant, absorption lag time and both intercompartmental rate constants had no extracted values and library placeholder defaults were substituted.**

The record lists fitted values for atropine (V1 0.646, V2 1.148, CL 1.905, Q 2.477, Fab 0.781, kabs 5.948), but the model builder's substitutions show Cl, Vd, ka, Tlag, k12 and k21 were left at library placeholder defaults because the source reported no values, and the invented absorption (defaulted ka) was judged not acceptable. Additionally, a reported unit could not be converted to SI, so one parameter reached the build without an SI value. A second reader also disagreed on the eye-drop bioavailability, reading 0.685 where this record has null. Extracted — atropine: V1 0.646, V2 1.15, CL 1.91, Q 2.48, Fab 0.781 ilogit, eye drop, kabs 5.95, t1/2ka 0.117, t1/2β 0.798 terminal phase, … (+3).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of bioavailability drop: this record has none, the second reading 0.685; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:36:14.839615+00:00) predates the upstream re-run (2026-10-04 13:06:09.698248+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `atropine sulfate`, measured `atropine`.

## Citation
Ström L et al., Topical ophthalmic atropine in horses,…, BMC veterinary research (2021)
  ·  DOI: [10.1186/s12917-021-02847-4](https://doi.org/10.1186/s12917-021-02847-4)

## Model component
<dbs-pgx drug="atropine" model-id="Atropine_Strm2021_reference" status="extracted" stale="true" population="horses" measured-compound="atropine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvVc | `Q63` · V1 | 0.646 | L/kg | 0.045219999999999996 | L | 28.03 | tv_prefix (0.95) | Tab1:row2:col2, Tab1:row2:col3, Tab1:row2:col4, Tab1:row2:col5 | — | not captured |
| tvVt | `Q64` · V2 | 1.148 | L/kg | 0.08036 | L | 16.39 | llm (0.6) | Tab1:row3:col2, Tab1:row3:col3, Tab1:row3:col4, Tab1:row3:col5 | — | not captured |
| tvCl | `Q22` · CL | 1.905 | L/h | 5.291666666666666e-07 | L/h | 6.63 | tv_prefix (0.95) | Tab1:row4:col2, Tab1:row4:col3, Tab1:row4:col4, Tab1:row4:col5 | — | not captured |
| tvCld | `Q30` · Q | 2.477 | L/h | 6.880555555555555e-07 | L/h | 23.87 | tv_prefix (0.95) | Tab1:row5:col2, Tab1:row5:col3, Tab1:row5:col4, Tab1:row5:col5 | — | not captured |
| tvfdrop (ilogit, eye drop) | `Q40` · Fab | 0.781 | ilogit, eye drop | not captured | [ilogit] | 172.66 | llm (0.6) | Tab1:row6:col2, Tab1:row6:col3, Tab1:row6:col4, Tab1:row6:col5 | — | not captured |
| tvKa | `Q49` · kabs | 5.948 | 1/h | 0.0016522222222222222 | 1/h | 198.88 | tv_prefix (0.95) | Tab1:row9:col1, Tab1:row9:col2, Tab1:row9:col3, Tab1:row9:col4, Tab1:row9:col5 | — | not captured |
| Half-life_absorption | `Q95` · t1/2ka | 0.117 | h | 421.20000000000005 | h | 53.82 | llm (0.6) | Tab1:row14:col2, Tab1:row14:col3, Tab1:row14:col4, Tab1:row14:col5 | — | not captured |
| Half-life_Beta (terminal phase) | `Q60` · t1/2β | 0.798 | h | 2872.8 | h | 12.77 | llm (0.6) | Tab1:row15:col2, Tab1:row15:col3, Tab1:row15:col4, Tab1:row15:col5 | — | not captured |
| Half-life_alpha (initial phase) | `Q59` · t1/2α | 0.077 | h | 277.2 | h | 20.77 | llm (0.6) | Tab1:row16:col2, Tab1:row16:col3, Tab1:row16:col4, Tab1:row16:col5 | — | not captured |
| Vss (steady-state volume of distribution) | `Q65` · Vss | 1.747 | L/kg | 0.12229000000000001 | L | 15.99 | exact (1.0) | Tab1:row17:col2, Tab1:row17:col3, Tab1:row17:col4, Tab1:row17:col5 | — | not captured |
| MRT (Mean residence time (IV) | `Q53` · MRT | 0.884 | h | 3182.4 | h | 16.16 | exact (1.0) | Tab1:row18:col2, Tab1:row18:col3, Tab1:row18:col4, Tab1:row18:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'ilogit, eye drop' (Fab)
- unit_dimension_unknown: 'ilogit, infusion' (Fab)
- dropped duplicate Q40 ('tvfINF (ilogit, infusion)', value '0.738') — already have one for this compound
- unit_dimension_unknown: 'terminal phase' (t1/2β)
- unit_dimension_unknown: 'initial phase' (t1/2α)
- unit_dimension_unknown: 'steady-state volume of distribution' (Vss)
- unit_dimension_unknown: 'Mean residence time (IV' (MRT)
- implicit units: 'tvVc' → L/kg (from the paper text: "The abstract states: 'The typical value was 1.7 L/kg for the steady-state volume of distribution.' Since Vss is derived ")
- implicit units: 'tvVt' → L/kg (from the paper text: "The abstract states: 'The typical value was 1.7 L/kg for the steady-state volume of distribution.' Since Vss is derived ")
- implicit units: 'tvCl' → L/h (from the paper text: "The abstract states: 'Total plasma clearance was 1.9 L/h'. The parameter tvCl corresponds to Total clearance (CL).")
- implicit units: 'tvCld' → L/h (from the popPK convention: 'Intercompartmental clearance (Cld or Q) is a clearance parameter. In population PK, clearances are typically reported in')
- implicit units: 'tvKa' → 1/h (from the popPK convention: 'Absorption rate constant (ka) is a first-order rate constant. The standard unit is 1/h (or h^-1). The magnitude (5.948) ')
- implicit units: 'Half-life_absorption' → h (from the popPK convention: 'Half-life is a time parameter. The standard unit is hours (h). The value 0.117 h is consistent with the absorption half-')
- implicit units: 'Half-life_Beta (terminal phase)' → h (from the popPK convention: 'Terminal half-life is a time parameter. The standard unit is hours (h).')
- implicit units: 'Half-life_alpha (initial phase)' → h (from the popPK convention: 'Initial phase half-life is a time parameter. The standard unit is hours (h).')
- implicit units: 'Vss (steady-state volume of distribution)' → L/kg (from the paper text: "The abstract explicitly states: 'The typical value was 1.7 L/kg for the steady-state volume of distribution.'")
- implicit units: 'MRT (Mean residence time (IV)' → h (from the popPK convention: 'Mean Residence Time (MRT) is a time parameter. The standard unit is hours (h). The value 0.884 h is consistent with the ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atropine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Tab1:row12:col1 = 'Scalar (0–1)'
- unparsed cell Tab1:row13:col1 = 'Scalar (0–1)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.931 (27/29 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[bioavailability drop]` | not captured | 0.685 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tvfdrop].parameter_id` | Q40 | Q87 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row4:col2', 'Tab1:row4:col3', 'Tab1:row4:col4', 'Tab1:row4:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row5:col2', 'Tab1:row5:col3', 'Tab1:row5:col4', 'Tab1:row5:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab1:row9:col1', 'Tab1:row9:col2', 'Tab1:row9:col3', 'Tab1:row9:col4', 'Tab1:row9:col5'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Tab1:row18:col2', 'Tab1:row18:col3', 'Tab1:row18:col4', 'Tab1:row18:col5'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Tab1:row16:col2', 'Tab1:row16:col3', 'Tab1:row16:col4', 'Tab1:row16:col5'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Tab1:row15:col2', 'Tab1:row15:col3', 'Tab1:row15:col4', 'Tab1:row15:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row2:col2', 'Tab1:row2:col3', 'Tab1:row2:col4', 'Tab1:row2:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row3:col2', 'Tab1:row3:col3', 'Tab1:row3:col4', 'Tab1:row3:col5'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row17:col2', 'Tab1:row17:col3', 'Tab1:row17:col4', 'Tab1:row17:col5'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Tab1:row14:col2', 'Tab1:row14:col3', 'Tab1:row14:col4', 'Tab1:row14:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.905 | not captured | not captured | ['Tab1:row4:col2', 'Tab1:row4:col3', 'Tab1:row4:col4', 'Tab1:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.91 L/h | not captured | not captured | ['Tab1:row4:col2', 'Tab1:row4:col3', 'Tab1:row4:col4', 'Tab1:row4:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 45.2 L | not captured | not captured | ['Tab1:row2:col2', 'Tab1:row2:col3', 'Tab1:row2:col4', 'Tab1:row2:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 80.4 L | not captured | not captured | ['Tab1:row3:col2', 'Tab1:row3:col3', 'Tab1:row3:col4', 'Tab1:row3:col5'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 122 L | not captured | not captured | ['Tab1:row17:col2', 'Tab1:row17:col3', 'Tab1:row17:col4', 'Tab1:row17:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atropine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ström_2021` / `Ström_2021::reference`)
- model: `../../../knowledgebase/drugs/drug_atropine/models/modelica/_needs_review/Atropine_Strm2021_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_atropine/models/modelica/_needs_review/Atropine_Strm2021_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_modelica.zip" download>Atropine_Strm2021_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_matlab.zip" download>Atropine_Strm2021_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_matlab_simbio.zip" download>Atropine_Strm2021_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_sbml.zip" download>Atropine_Strm2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_cellml.zip" download>Atropine_Strm2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference.svg" alt="Atropine_Strm2021_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.14 mg, single dose, first-order absorption (ka 5.95 /h, F 0.685). Doses in the paper: 0.14, 1 mg.

<dbs-fmusim paramsurl="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Atropine_Strm2021_reference_params.json` · controls `Atropine_Strm2021_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 13:06 UTC</sub>
