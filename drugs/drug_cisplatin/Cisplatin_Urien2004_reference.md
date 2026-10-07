<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;cisplatin&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/&quot;},{&quot;label&quot;:&quot;Urien_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisplatin_Imbs2016_reference&quot;,&quot;label&quot;:&quot;Imbs_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/Cisplatin_Imbs2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisplatin_MoritaOgawa2020_reference&quot;,&quot;label&quot;:&quot;Morita-Ogawa_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/Cisplatin_MoritaOgawa2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisplatin_Terranova2021_reference&quot;,&quot;label&quot;:&quot;Terranova_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/Cisplatin_Terranova2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cisplatin — `Cisplatin_Urien2004_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The cisplatin record was rejected because the parameter fm/Vm, whose meaning is a dimensionless fraction of drug converted to metabolite, is reported with unit l⁻¹ (value 0.001), a dimension mismatch on a structural parameter.**

The parameter labelled f m /V m carries value 0.001 with unit l⁻¹, but its meaning is the fraction of systemically available drug converted to metabolite, which should be dimensionless; this dimension mismatch on a structural parameter caused the rejection. The unit l⁻¹ could not be converted to SI units, so the parameter was passed on without an SI value. A second reader disagreed on the parameterization (mechanistic rather than apparent) and did not accept the V/F value of 0.16, which is labelled f m /V m , q DOSEm and lacks a unit. Extracted — cisplatin: fm 0.001 l -1, V/F 0.16, CL 0.002 h -1, t1/2z 50 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:25:20.760566+00:00) predates the upstream re-run (2026-10-07 22:32:19.268023+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `cisplatin`, measured `unbound platinum (cisplatin)`.

## Citation
Urien S et al., Population pharmacokinetics of total an…, British journal of clinical… (2004)
  ·  DOI: [10.1111/j.1365-2125.2004.02082.x](https://doi.org/10.1111/j.1365-2125.2004.02082.x)

## Model component
<dbs-pgx drug="cisplatin" model-id="Cisplatin_Urien2004_reference" status="rejected" stale="true" population="adult patients treated with cisplatin for various malignancies" measured-compound="unbound platinum (cisplatin)" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| f m /V m (l -1 ) | `Q305` · kfm | 0.017 | l -1 | not captured | [1] / [l] | not captured | exact (1.0) | tab_4:row4:col2, tab_4:row4:col3, tab_4:row4:col4 | — | not captured |
| f m /V m , q DOSEm | `Q45` · fm | -2 | not captured | not captured | not captured | not captured | llm (0.6) | tab_4:row5:col1, tab_4:row5:col2, tab_4:row5:col3, tab_4:row5:col4 | — | not captured |
| f m /V m , q CLCr | `Q26` · CLR | -0.36 | not captured | not captured | not captured | not captured | llm (0.6) | tab_4:row8:col2 | — | not captured |
| CL m0 /V m (h -1 ) | `Q47` · kel | 0.014 | h -1 | 3.888888888888889e-06 | [1] / [h] | not captured | exact (1.0) | tab_4:row9:col1, tab_4:row9:col2, tab_4:row9:col3 | — | not captured |
| T 1/2 , elimination (h) | `Q57` · t1/2z | 50 | h | 180000.0 | [h] | not captured | llm_confirmed (0.6) | tab_4:row15:col1, Urien_2004_table_3:row16:col1 | — | not captured |
| V 1 (l) | `Q63` · V1 | 23.4 | l | 0.0234 | [l] | not captured | exact (1.0) | Urien_2004_table_3:row3:col1, Urien_2004_table_3:row3:col2, Urien_2004_table_3:row3:col3 | — | not captured |
| CL (l h -1 ) | `Q22` · CL | 35.6 | l h -1 | 9.888888888888889e-06 | [l] / [h] | not captured | exact (1.0) | Urien_2004_table_3:row5:col2, Urien_2004_table_3:row5:col3 | — | not captured |
| CL, q BSA | `Q319` · allometric_exponent | +0.83 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Urien_2004_table_3:row6:col1, Urien_2004_table_3:row6:col2, Urien_2004_table_3:row6:col3 | — | not captured |
| Q (l h -1 ) | `Q30` · Q | 8.64 | l h -1 | 2.4e-06 | [l] / [h] | not captured | exact (1.0) | Urien_2004_table_3:row8:col1, Urien_2004_table_3:row8:col2, Urien_2004_table_3:row8:col3 | — | not captured |
| V 2 (l) | `Q64` · V2 | 12.0 | l | 0.012 | [l] | not captured | exact (1.0) | Urien_2004_table_3:row9:col1, Urien_2004_table_3:row9:col2, Urien_2004_table_3:row9:col3 | — | not captured |
| T 1/2 , distribution (h) | `Q59` · t1/2α | 0.34 | h | 1224.0 | [h] | not captured | llm (0.6) | Urien_2004_table_3:row15:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'f m /V m (l -1 )' → Q305 (unit '1 / [length] ** 3' vs ontology '1 / [time]') — route to review
- dropped duplicate Q45 ('f m /V m , q PROT', value '+1.33') — already have one for this compound
- dropped duplicate Q45 ('f m /V m , q BSA', value '-0.83') — already have one for this compound
- dropped unlinked row (NIL): 'ISV(f m /V m ) (% CV)' — extend the ontology if this is a real PK parameter (source ['tab_4:row12:col1', 'tab_4:row12:col2', 'tab_4:row12:col3'])
- dropped unlinked row (NIL): 'ISV(CL m /V m ) (% CV)' — extend the ontology if this is a real PK parameter (source ['tab_4:row13:col1', 'tab_4:row13:col2', 'tab_4:row13:col3'])
- dropped duplicate Q63 ('V 1 , q BSA', value '+1.60') — already have one for this compound
- dropped duplicate Q22 ('CL, q CLCr', value '+0.36') — already have one for this compound
- routed 'Res. Error (mg l -1 )' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'ISV(V 1 ) (% CV)' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_3:row12:col1', 'Urien_2004_table_3:row12:col2', 'Urien_2004_table_3:row12:col3'])
- dropped unlinked row (NIL): 'ISV(CL) (% CV)' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_3:row13:col1', 'Urien_2004_table_3:row13:col2', 'Urien_2004_table_3:row13:col3'])
- implicit units: 'f m /V m , q CLCr' — the LLM proposed 'dimensionless', whose dimension does not fit Q26; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=unbound platinum (cisplatin)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 17 linked by role; re-tagged parent→irreversibly protein-bound platinum ×26, parent→unbound platinum (cisplatin) ×27
- molar mass: no plausible PubChem entry for 'irreversibly protein-bound platinum' ('irreversibly protein-bound platinum') — left in mass units
- molar mass: none found for 'irreversibly protein-bound platinum' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Urien_2004_table_3:row5:col1 = '3 5.5'
- companion parameter table 3 transcribed (31 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[f m /v m , q dosem]` | 0.16 | not captured | only_one_extracted |

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
| C2_base_sign_Q26 | fail | not captured | -0.36 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Urien_2004_table_3:row5:col2', 'Urien_2004_table_3:row5:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Urien_2004_table_3:row8:col1', 'Urien_2004_table_3:row8:col2', 'Urien_2004_table_3:row8:col3'] |
| C5_dimension_Q305 | fail | 1 / [length] ** 3 | l -1 | not captured | not captured | ['tab_4:row4:col2', 'tab_4:row4:col3', 'tab_4:row4:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_4:row9:col1', 'tab_4:row9:col2', 'tab_4:row9:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_4:row15:col1', 'Urien_2004_table_3:row16:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Urien_2004_table_3:row15:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Urien_2004_table_3:row3:col1', 'Urien_2004_table_3:row3:col2', 'Urien_2004_table_3:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Urien_2004_table_3:row9:col1', 'Urien_2004_table_3:row9:col2', 'Urien_2004_table_3:row9:col3'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_4:row8:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 35.6 | not captured | not captured | ['Urien_2004_table_3:row5:col2', 'Urien_2004_table_3:row5:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 35.6 L/h | not captured | not captured | ['Urien_2004_table_3:row5:col2', 'Urien_2004_table_3:row5:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 23.4 L | not captured | not captured | ['Urien_2004_table_3:row3:col1', 'Urien_2004_table_3:row3:col2', 'Urien_2004_table_3:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12 L | not captured | not captured | ['Urien_2004_table_3:row9:col1', 'Urien_2004_table_3:row9:col2', 'Urien_2004_table_3:row9:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cisplatin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Urien_2004` / `Urien_2004::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:32 UTC</sub>
