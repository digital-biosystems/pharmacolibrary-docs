<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;desvenlafaxine&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/&quot;},{&quot;label&quot;:&quot;Wang_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desvenlafaxine_MangasSanjun2023_reference&quot;,&quot;label&quot;:&quot;Mangas-Sanju\u00e1n_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desvenlafaxine_Nichols2018_reference&quot;,&quot;label&quot;:&quot;Nichols_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/Desvenlafaxine_Nichols2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desvenlafaxine_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/Desvenlafaxine_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# desvenlafaxine — `Desvenlafaxine_Wang2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**The record was rejected because apparent (F-corrected) parameters CL/F 80.9 L/h, V/F 628 L, CLm/F 22.1 L/h and Vm/F 238 L were additionally corrected with bioavailability F 0.048, a double correction, and the 0.593 L/h value is an amisulpride covariate effect on CLm/F, not a clearance.**

The paper reports apparent parameters for venlafaxine (CL/F 80.9 L/h, V/F 628 L) and its metabolite O-desmethyl venlafaxine (CLm/F 22.1 L/h, Vm/F 238 L), which already contain the F correction; the record nevertheless carried a separate bioavailability value F 0.048, violating apparent-parameter coherence by correcting twice. The parameter labelled 'θamisulpride on CLm/F' with value 0.593 L/h is a covariate effect on metabolite clearance, not a standalone clearance, yet it was recorded as a CLm/F entry. A second reader disagreed on the same fields, assigning the 22.1 L/h and 238 L values to CLm/F and Vm/F and leaving bioavailability empty, confirming the ambiguity in how these values were attributed. Extracted — desvenlafaxine: CL/F 80.9 L/h, V/F 628 L, kabs 0.63 1/h, Fab 0.048, CLm/F 0.593 L/h; O-desmethyl venlafaxine: CLm/F 22.1 L/h, Vm/F 238 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on bioavailability: this record has 0.048, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Wang Z; Li L; Huang S; Wang X; Liu S; Li X; et al. et al. (2022). Frontiers in pharmacology 13
  ·  DOI: [10.3389/fphar.2022.978202](https://doi.org/10.3389/fphar.2022.978202)

## Model component
<dbs-pgx drug="desvenlafaxine" model-id="Desvenlafaxine_Wang2022_reference" status="rejected" stale="false" population="healthy volunteers and psychiatric patients" measured-compound="venlafaxine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, CLm/F, V/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 80.9 | L/h | 2.2472222222222226e-05 | [l] / [h] | not captured | exact (1.0) | Wang_2022_table_p5_1:row0:col1 | — | not captured |
| V/F, L | `Q76` · V/F | 628 | L | 0.628 | [l] | not captured | exact (1.0) | Wang_2022_table_p5_1:row1:col1 | — | not captured |
| CLm/F, L/h | `Q351` · CLm/F | 22.1 | L/h | 6.138888888888889e-06 | [l] / [h] | not captured | exact (1.0) | Wang_2022_table_p5_1:row2:col1 | — | not captured |
| Vm/F, L | `Q367` · Vm/F | 238 | L | 0.23800000000000002 | [l] | not captured | exact (1.0) | Wang_2022_table_p5_1:row3:col1 | — | not captured |
| Ka, 1/h | `Q49` · kabs | 0.63 | 1/h | 0.000175 | [1] / [h] | not captured | exact (1.0) | Wang_2022_table_p5_1:row4:col1 | — | not captured |
| F | `Q40` · Fab | 0.048 | not captured | not captured | not captured | not captured | exact (1.0) | Wang_2022_table_p5_1:row5:col1 | — | not captured |
| θamisulpride on CLm/F | `Q351` · CLm/F | 0.593 | L/h | 1.647222222222222e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | Wang_2022_table_p5_1:row8:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 4 row(s) → O-desmethyl venlafaxine (m_suffix 4)
- dropped duplicate Q27 ('θhealthy state on CL/F', value '0.617') — already have one for this compound
- dropped unlinked row (NIL): 'θamisulpride on CL/F' — extend the ontology if this is a real PK parameter (source ['Wang_2022_table_p5_1:row7:col1'])
- dropped duplicate Q27 ('CL/F', value '0.219') — already have one for this compound
- dropped duplicate Q76 ('V/F', value '0.106') — already have one for this compound
- dropped duplicate Q351 ('CLm/F', value '0.156') — already have one for this compound
- dropped duplicate Q367 ('Vm/F', value '1.38') — already have one for this compound
- unit inherited for CLm/F (Q351): 'L/h' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=venlafaxine
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [1] (site presystemic: 'Results and conclusion: Concentrations of VEN and ODV were well described with a one-compartment model incorporating fir')

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Wang_2022_table_p5_1:row0:col2 = '9.7%'
- unparsed cell Wang_2022_table_p5_1:row1:col2 = '5.8%'
- unparsed cell Wang_2022_table_p5_1:row2:col2 = '6.6%'
- unparsed cell Wang_2022_table_p5_1:row3:col2 = '33.1%'
- unparsed cell Wang_2022_table_p5_1:row5:col2 = '18.3%'
- unparsed cell Wang_2022_table_p5_1:row6:col2 = '5.9%'
- unparsed cell Wang_2022_table_p5_1:row7:col2 = '17.8%'
- unparsed cell Wang_2022_table_p5_1:row8:col2 = '28.7%'
- unparsed cell Wang_2022_table_p5_1:row10:col2 = '13.4%'
- unparsed cell Wang_2022_table_p5_1:row11:col2 = '35.2%'
- unparsed cell Wang_2022_table_p5_1:row12:col2 = '19.4%'
- unparsed cell Wang_2022_table_p5_1:row13:col2 = '39.3%'
- unparsed cell Wang_2022_table_p5_1:row15:col2 = '8.5%'
- unparsed cell Wang_2022_table_p5_1:row16:col2 = '13.6%'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.636 (7/11 fields) | 4 |

<details><summary>4 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.bioavailability.theta` | 0.048 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm/f]` | not captured | 22.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v m/f]` | not captured | 238 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vm/f]` | 238 | not captured | only_one_extracted |

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
| C2_base_Q40 | fail | 0.048 | 81.0 | 1687.5 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2022_table_p5_1:row0:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2022_table_p5_1:row2:col1'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2022_table_p5_1:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Wang_2022_table_p5_1:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2022_table_p5_1:row1:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.048 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 80.9 L/h | not captured | not captured | ['Wang_2022_table_p5_1:row0:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 628 L | not captured | not captured | ['Wang_2022_table_p5_1:row1:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_desvenlafaxine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2022` / `Wang_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-15 11:28 UTC</sub>
