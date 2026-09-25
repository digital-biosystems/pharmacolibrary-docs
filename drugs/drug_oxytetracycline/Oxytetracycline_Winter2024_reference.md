<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;oxytetracycline&quot;,&quot;href&quot;:&quot;drugs/drug_oxytetracycline/&quot;},{&quot;label&quot;:&quot;Winter_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxytetracycline_Winter2024_reference&quot;,&quot;label&quot;:&quot;Winter_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_oxytetracycline/Oxytetracycline_Winter2024_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxytetracycline — `Oxytetracycline_Winter2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.13). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C8 unreachable/orphan compartment or unlinked metabolite.
**Second reading:** `gpt-oss:120b` read this paper differently on `model.parameterization` (mechanistic vs apparent) and 19 more field(s) — a structural parameter, so the record is disputed.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Winter EA; Pelligand L; Toutain PL; Lees P; Milanova A; Gehring R et al. (2024). Frontiers in microbiology 15
  ·  DOI: [10.3389/fmicb.2024.1498219](https://doi.org/10.3389/fmicb.2024.1498219)

## Model component
<dbs-pgx drug="oxytetracycline" model-id="Oxytetracycline_Winter2024_reference" status="rejected" stale="false" population="calves and adult cattle" measured-compound="oxytetracycline" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvV1 (adult) | `Q63` · V1 | 143 | adult | not captured | [adult] | not captured | tv_prefix (0.95) | tab1:row3:col1, tab1:row3:col3, tab1:row3:col4, tab1:row3:col5, tab1:row3:col6 | — | not captured |
| tvV2 (adult) | `Q64` · V2 | 973 | adult | not captured | [adult] | not captured | tv_prefix (0.95) | tab1:row4:col1, tab1:row4:col3, tab1:row4:col4, tab1:row4:col5, tab1:row4:col6 | — | not captured |
| tvV3 (adult) | `Q77` · V3 | 2458 | adult | not captured | [adult] | not captured | tv_prefix (0.95) | tab1:row5:col1, tab1:row5:col3, tab1:row5:col4, tab1:row5:col5, tab1:row5:col6 | — | not captured |
| tvCl (adult) | `Q22` · CL | 68.35 | adult | not captured | [adult] | not captured | tv_prefix (0.95) | tab1:row6:col1, tab1:row6:col3, tab1:row6:col4, tab1:row6:col5, tab1:row6:col6 | — | not captured |
| tvKa1 | `Q49` · kabs | 0.235 | not captured | not captured | not captured | not captured | llm (0.6) | tab1:row9:col1, tab1:row9:col2, tab1:row9:col3, tab1:row9:col4, tab1:row9:col5, tab1:row9:col6 | — | not captured |
| tvF1 | `Q40` · Fab | 1.422 | not captured | not captured | not captured | not captured | tv_prefix (0.95) | tab1:row13:col1, tab1:row13:col3, tab1:row13:col4, tab1:row13:col5, tab1:row13:col6, tab1:row13:col7 | — | not captured |
| dadult_calfCla | `Q900` · equation variable | 0.570 | not captured | not captured | not captured | not captured | llm (0.6) | tab1:row14:col1, tab1:row14:col3, tab1:row14:col4, tab1:row14:col5, tab1:row14:col6 | — | not captured |
| nTlag | `Q83` · tlag | 1 | not captured | not captured | not captured | not captured | llm (0.6) | Winter_2024_table_2:row4:col1, Winter_2024_table_2:row4:col2, Winter_2024_table_2:row4:col3, Winter_2024_table_2:row4:col4, Winter_2024_table_2:row17:col1, Winter_2024_table_2:row17:col2, Winter_2024_table_2:row17:col3, Winter_2024_table_2:row17:col4 | — | not captured |
| theta_tlag_category | `Q900` · theta_tlag_category | 15.74 | not captured | not captured | not captured | not captured | not captured (not captured) | tab1:row11:col1, tab1:row11:col3, tab1:row11:col4, tab1:row11:col5, tab1:row11:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'definition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'adult' (V1)
- unit_dimension_unknown: 'adult' (V2)
- unit_dimension_unknown: 'adult' (V3)
- unit_dimension_unknown: 'adult' (CL)
- dropped duplicate Q22 ('tvCld2 (adult)', value '549') — already have one for this compound
- dropped duplicate Q22 ('tvCld3 (adult)', value '23.20') — already have one for this compound
- dropped duplicate Q49 ('tvKa2', value '0.0491') — already have one for this compound
- dropped duplicate Q63 ('tvFrapid', value '0.783') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfCld2b', value '0.201') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfCld3c', value '0.228') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV1d', value '0.353') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV2e', value '0.154') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV3f', value '0.535') — already have one for this compound
- routed 'tvCMultStdev' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'stdev0' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'nKa1' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row1:col1', 'Winter_2024_table_2:row14:col1'])
- dropped unlinked row (NIL): 'nKa2' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row2:col1', 'Winter_2024_table_2:row2:col2', 'Winter_2024_table_2:row15:col1', 'Winter_2024_table_2:row15:col2'])
- dropped unlinked row (NIL): 'nF1' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row3:col1', 'Winter_2024_table_2:row3:col2', 'Winter_2024_table_2:row3:col3', 'Winter_2024_table_2:row16:col1', 'Winter_2024_table_2:row16:col2', 'Winter_2024_table_2:row16:col3'])
- dropped unlinked row (NIL): 'nFrapid' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row5:col1', 'Winter_2024_table_2:row5:col2', 'Winter_2024_table_2:row5:col3', 'Winter_2024_table_2:row5:col4', 'Winter_2024_table_2:row5:col5', 'Winter_2024_table_2:row18:col1', 'Winter_2024_table_2:row18:col2', 'Winter_2024_table_2:row18:col3', 'Winter_2024_table_2:row18:col4', 'Winter_2024_table_2:row18:col5'])
- dropped duplicate Q63 ('nV1', value '1') — already have one for this compound
- dropped duplicate Q64 ('nV2', value '1') — already have one for this compound
- dropped duplicate Q77 ('nV3', value '1') — already have one for this compound
- dropped unlinked row (NIL): 'nCl' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row9:col6', 'Winter_2024_table_2:row9:col7', 'Winter_2024_table_2:row9:col8', 'Winter_2024_table_2:row9:col9', 'Winter_2024_table_2:row22:col6', 'Winter_2024_table_2:row22:col7', 'Winter_2024_table_2:row22:col8', 'Winter_2024_table_2:row22:col9'])
- dropped unlinked row (NIL): 'nCl2' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row10:col6', 'Winter_2024_table_2:row10:col7', 'Winter_2024_table_2:row10:col8', 'Winter_2024_table_2:row10:col9', 'Winter_2024_table_2:row10:col10', 'Winter_2024_table_2:row23:col6', 'Winter_2024_table_2:row23:col7', 'Winter_2024_table_2:row23:col8', 'Winter_2024_table_2:row23:col9', 'Winter_2024_table_2:row23:col10'])
- dropped unlinked row (NIL): 'nCl3' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row11:col6', 'Winter_2024_table_2:row11:col7', 'Winter_2024_table_2:row11:col8', 'Winter_2024_table_2:row11:col9', 'Winter_2024_table_2:row11:col10', 'Winter_2024_table_2:row11:col11', 'Winter_2024_table_2:row24:col6', 'Winter_2024_table_2:row24:col7', 'Winter_2024_table_2:row24:col8', 'Winter_2024_table_2:row24:col9', 'Winter_2024_table_2:row24:col10', 'Winter_2024_table_2:row24:col11'])
- covariate category for CL from footnote/prose kept as documentation only (['tab1:footnote'])
- covariate category for V1 from footnote/prose kept as documentation only (['tab1:footnote'])
- covariate category for V2 from footnote/prose kept as documentation only (['tab1:footnote'])
- covariate category for V3 from footnote/prose kept as documentation only (['tab1:footnote'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxytetracycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab1:row7:col7 = 'Clearance of distribution to V2 (adult)'
- unparsed cell tab1:row8:col7 = 'Clearance of distribution to V3 (adult)'
- unparsed cell tab1:row9:col7 = 'first rate constant of absorption corresponding to a Mean Absorption Time of 4.57 h'
- unparsed cell tab1:row10:col7 = 'second rate of absorption corresponding to a Mean Absorption Time of 22.1 h'
- unparsed cell tab1:row11:col7 = 'Lag-time between Ka1 and Ka2'
- unparsed cell tab1:row15:col7 = 'Categorical covariate on Cld2'
- unparsed cell tab1:row16:col7 = 'Categorical covariate on Cld3'
- unparsed cell tab1:row17:col7 = 'Categorical covariate on V1'
- unparsed cell tab1:row18:col7 = 'Categorical covariate on V2'
- unparsed cell tab1:row19:col7 = 'Categorical covariate on V3'
- companion parameter table 2 transcribed (83 record(s))
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.13 (3/23 fields) | 20 |

<details><summary>20 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[dadult_calfcla]` | 0.570 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[dadult_calfv3f]` | not captured | 0.358 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ntlag]` | 1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q83_category]` | not captured | 14.96 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_tlag_category]` | 15.74 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tvcl].rse_percent` | not captured | 68.35 | mismatch |
| `gpt-oss:120b` | `parameters[tvcl].value` | 68.35 | 62.67 | mismatch |
| `gpt-oss:120b` | `parameters[tvcld2]` | not captured | 485 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tvf1].rse_percent` | not captured | 1.422 | mismatch |
| `gpt-oss:120b` | `parameters[tvf1].value` | 1.422 | 1.281 | mismatch |
| `gpt-oss:120b` | `parameters[tvfrapid]` | not captured | 0.757 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tvka1].rse_percent` | not captured | 0.235 | mismatch |
| `gpt-oss:120b` | `parameters[tvka1].value` | 0.235 | 0.214 | mismatch |
| `gpt-oss:120b` | `parameters[tvv1].rse_percent` | not captured | 143 | mismatch |
| `gpt-oss:120b` | `parameters[tvv1].value` | 143 | 126 | mismatch |
| `gpt-oss:120b` | `parameters[tvv2].rse_percent` | not captured | 973 | mismatch |
| `gpt-oss:120b` | `parameters[tvv2].value` | 973 | 914 | mismatch |
| `gpt-oss:120b` | `parameters[tvv3].rse_percent` | not captured | 2458 | mismatch |
| `gpt-oss:120b` | `parameters[tvv3].value` | 2458 | 2564 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 68.35 | not captured | not captured | ['tab1:row6:col1', 'tab1:row6:col3', 'tab1:row6:col4', 'tab1:row6:col5', 'tab1:row6:col6'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_oxytetracycline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Winter_2024` / `Winter_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-18 02:38 UTC</sub>
