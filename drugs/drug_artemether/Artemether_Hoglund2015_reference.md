<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemether&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/&quot;},{&quot;label&quot;:&quot;Hoglund_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemether_Lohy2018_reference&quot;,&quot;label&quot;:&quot;Lohy_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/Artemether_Lohy2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artemether — `Artemether_Hoglund2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.583). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The artemether model was rejected because the metabolite desbutyl-lumefantrine, formed from lumefantrine, has no path from the administered dose, leaving an unlinked metabolite in the structure.**

The record lists two metabolism links: artemether to dihydroartemisinin, and lumefantrine to desbutyl-lumefantrine. Lumefantrine is not a drug of this model (only artemether is dosed), so desbutyl-lumefantrine is an orphan metabolite with no connection to the dose. Additionally, several lumefantrine parameters carry the unit 'l' although they are dimensionless quantities (number of transit compartments = 3, bioavailability = 1, Vmax = 1); this unit could not be converted to SI, so these parameters reached the model without SI values. Extracted — lumefantrine: n_transit 3 l, Fab 1 l, Vmax 1 l; artemether: CL 168 %, kabs 0.0577 h−1, tlag 1.31 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ka: this record has 0.0577, the second reading none; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `artemether-lumefantrine`, measured `artemether`.

## Citation
Hoglund RM et al., Artemether-lumefantrine co-administrati…, British journal of clinical… (2015)
  ·  DOI: [10.1111/bcp.12529](https://doi.org/10.1111/bcp.12529)

## Model component
<dbs-pgx drug="artemether" model-id="Artemether_Hoglund2015_reference" status="rejected" stale="false" population="HIV-infected patients treated with antiretroviral therapy" measured-compound="artemether" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Number of trans comp | `Q311` · n_transit | 3 | l | not captured | [l] | not captured | llm (0.6) | tbl3:row4:col1, Hoglund_2015_table_2:row5:col1 | — | not captured |
| Bioavailability (%) | `Q40` · Fab | 1 | l | not captured | not captured | not captured | exact (1.0) | tbl3:row6:col1, Hoglund_2015_table_2:row7:col1 | — | not captured |
| MMAX | `Q66` · Vmax | 1 | l | 0.001 | [l] | not captured | llm (0.6) | tbl3:row8:col1 | — | not captured |
| MF50 | `Q900` · equation variable | 62 | not captured | not captured | not captured | not captured | llm (0.6) | tbl3:row9:col1 | — | not captured |
| RSE of between subject variability of the elimination clearance of dihydroartemisinin | `Q22` · CL | 168 | % | not captured | % | not captured | boundary (0.8) | Hoglund_2015:other_prose | — | not captured |
| ka (h−1) | `Q49` · kabs | 0.0577 | h−1 | 1.6027777777777778e-05 | 1/h | not captured | review_gapfill (0.7) | Kloprogge_2015:review | — | not captured |
| Lag time (h) | `Q83` · tlag | 1.31 | h | 4716.0 | h | not captured | review_gapfill (0.7) | Kloprogge_2015:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CL/F (l h−1)' (captured trailing unit 'l h−1' for child rows)
- dropped value-less row: 'MTT (h)' (captured trailing unit 'h' for child rows)
- salvaged Q22 ('RSE of between subject variability of the elimination clearance of dihydroartemisinin'=168) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=artemether
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 5 linked by role; re-tagged parent→lumefantrine ×13
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kloprogge_2015's review values (primary lacked it)
- gap-filled Q83 (tlag) from Kloprogge_2015's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tbl3:row2:col1 = '317 [8.25]'
- unparsed cell tbl3:row2:col2 = '270, 374'
- unparsed cell tbl3:row2:col3 = '9.8 [60.6]'
- unparsed cell tbl3:row2:col4 = '2.75, 16.1'
- unparsed cell tbl3:row5:col1 = '0.970 [6.58]'
- unparsed cell tbl3:row5:col2 = '0.853, 1.10'
- unparsed cell tbl3:row5:col3 = '51.6 [18.6]'
- unparsed cell tbl3:row5:col4 = '41.1, 61.6'
- unparsed cell tbl3:row6:col3 = '58.6 [27.6]'
- unparsed cell tbl3:row6:col4 = '39.9, 76.6'
- unparsed cell tbl3:row7:col1 = '0.724 [5.60]'
- unparsed cell tbl3:row7:col2 = '0.644, 0.803'
- unparsed cell tbl3:row15:col1 = '160 [4.93]'
- unparsed cell tbl3:row15:col2 = '145, 174'
- unparsed cell tbl3:row15:col3 = '53.9 [31.5]'
- unparsed cell tbl3:row15:col4 = '33.4, 70.4'
- unparsed cell tbl3:row17:col1 = '0.707 [4.40]'
- unparsed cell tbl3:row17:col2 = '0.645, 0.764'
- unparsed cell Hoglund_2015_table_2:row1:col1 = '4.77 [5.30]'
- unparsed cell Hoglund_2015_table_2:row1:col2 = '4.31, 5.30'
- unparsed cell Hoglund_2015_table_2:row1:col3 = '14.8 [50.7]'
- unparsed cell Hoglund_2015_table_2:row1:col4 = '5.68, 22.7'
- unparsed cell Hoglund_2015_table_2:row6:col1 = '6.27 [21.2]'
- unparsed cell Hoglund_2015_table_2:row6:col2 = '3.75, 8.35'
- unparsed cell Hoglund_2015_table_2:row6:col3 = '31.4 [106]'
- unparsed cell Hoglund_2015_table_2:row6:col4 = '15.1, 94.6'
- unparsed cell Hoglund_2015_table_2:row7:col3 = '47.4 [18.3]'
- unparsed cell Hoglund_2015_table_2:row7:col4 = '38.2, 57.4'
- unparsed cell Hoglund_2015_table_2:row8:col1 = '0.566 [7.83]'
- unparsed cell Hoglund_2015_table_2:row8:col2 = '0.479, 0.643'
- unparsed cell Hoglund_2015_table_2:row15:col1 = '0.465 [13.3]'
- unparsed cell Hoglund_2015_table_2:row15:col2 = '0.357, 0.591'
- companion parameter table 2 transcribed (7 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `glm-5.3-flash` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.583 (7/12 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.0577 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 1.31 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mf50]` | 62 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of trans comp].value` | 3 | 1 | mismatch |
| `gpt-oss-120b` | `parameters[rse of between subject variability of the elimination clearance of dihydroartemisinin]` | 168 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Kloprogge_2015:review'] |
| C5_dimension_Q66 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl3:row8:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Kloprogge_2015:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | % | not captured | not captured | ['Hoglund_2015:other_prose'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 168.0 | not captured | not captured | ['Hoglund_2015:other_prose'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_artemether/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hoglund_2015` / `Hoglund_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:52 UTC</sub>
