<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;palivizumab&quot;,&quot;href&quot;:&quot;drugs/drug_palivizumab/&quot;},{&quot;label&quot;:&quot;Robbie_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Palivizumab_Li2021_reference&quot;,&quot;label&quot;:&quot;Li_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_palivizumab/Palivizumab_Li2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# palivizumab — `Palivizumab_Robbie2012_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.154). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume; q and CL have no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL), so that value has no SI equivalent. Extracted — palivizumab: Q 2.3, Fab 3.13, CL 9.95 mo, kabs 0.373 day Ϫ1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has palivizumab, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:39:17.237393+00:00) predates the upstream re-run (2026-10-03 11:38:59.561112+00:00). Current validate status: `rejected`.

## Citation
Robbie GJ et al., Population pharmacokinetics of palivizu…, Antimicrobial agents and ch… (2012)
  ·  DOI: [10.1128/AAC.06446-11](https://doi.org/10.1128/AAC.06446-11)

## Model component
<dbs-pgx drug="palivizumab" model-id="Palivizumab_Robbie2012_reference" status="rejected" stale="true" population="adults and children" measured-compound="palivizumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 197 | ml/day | 2.2800925925925924e-09 | L/h | not captured | exact (1.0) | Robbie_2012:results_prose | — | not captured |
| V c | `Q63` · V1 | 4 | ml | 4e-06 | L | not captured | space_fold (0.95) | Robbie_2012:results_prose | — | not captured |
| V p | `Q64` · V2 | 2 | ml | 2e-06 | L | not captured | space_fold (0.95) | Robbie_2012:results_prose | — | not captured |
| Q | `Q30` · Q | 874 | ml/day | 1.011574074074074e-08 | L/h | not captured | exact (1.0) | Robbie_2012:results_prose | — | not captured |
| k a | `Q49` · kabs | 1.03 | day Ϫ1 | 1.1921296296296295e-05 | 1/h | not captured | space_fold (0.95) | Robbie_2012:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL ϫ (WT/70) 0.75 ,' routed out of structural estimates ('IIV')
- table section iiv: 'RACE ϭ black' routed out of structural estimates ('IIV')
- table section iiv: 'RACE ϭ Asian' routed out of structural estimates ('IIV')
- table section iiv: 'RACE ϭ other' routed out of structural estimates ('IIV')
- table section iiv: 'CLD' routed out of structural estimates ('IIV')
- table section iiv: 'titer ϭ 20' routed out of structural estimates ('IIV')
- table section iiv: 'titer Ն 80' routed out of structural estimates ('IIV')
- table section iiv: 'Q ϫ (WT/70) 0.75 ,' routed out of structural estimates ('IIV')
- table section iiv: 'F1' routed out of structural estimates ('IIV')
- table section iiv: '␤' routed out of structural estimates ('IIV')
- table section iiv: 'T CL , mo' routed out of structural estimates ('IIV')
- table section iiv: '2 prop' routed out of structural estimates ('IIV')
- dropped value-less row: 'CL ϫ (WT/70) 0.75 ,'
- dropped value-less row: 'RACE ϭ black'
- dropped value-less row: 'RACE ϭ Hispanic 1.05'
- dropped value-less row: 'RACE ϭ Asian'
- dropped value-less row: 'RACE ϭ other'
- dropped value-less row: 'CLD'
- dropped value-less row: 'titer ϭ 10'
- dropped value-less row: 'titer ϭ 20'
- dropped value-less row: 'titer ϭ 40'
- dropped value-less row: 'titer Ն 80'
- dropped value-less row: 'V c ϫ (WT/70) 1.0 , ml 4,090'
- dropped value-less row: 'RACE ϭ Hispanic 1.06'
- dropped value-less row: 'V p ϫ (WT/70) 1.0 , ml 2,230'
- dropped value-less row: 'Q ϫ (WT/70) 0.75 ,'
- dropped value-less row: 'k a , day Ϫ1'
- dropped value-less row: 'F1'
- dropped value-less row: '␤'
- dropped value-less row: 'T CL , mo'
- dropped value-less row: '2 prop'
- salvaged Q22 ('CL'=197) from results prose — parameter table was unreadable
- salvaged Q63 ('V c'=4) from results prose — parameter table was unreadable
- salvaged Q64 ('V p'=2) from results prose — parameter table was unreadable
- salvaged Q30 ('Q'=874) from results prose — parameter table was unreadable
- salvaged Q49 ('k a'=1.03) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q63 (V c); Q64 (V p); Q30 (Q)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=palivizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'palivizumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_2:row1:col3 = '197, 198'
- unparsed cell tab_2:row1:col4 = '48.7 (CV%)'
- unparsed cell tab_2:row3:col3 = '0.997, 1.14'
- unparsed cell tab_2:row4:col2 = '0.985, 1.14'
- unparsed cell tab_2:row5:col3 = '0.967, 1.32'
- unparsed cell tab_2:row6:col3 = '0.999, 1.19'
- unparsed cell tab_2:row7:col3 = '1.13, 1.24'
- unparsed cell tab_2:row8:col2 = '11.50 0.960, 1.45'
- unparsed cell tab_2:row9:col3 = '0.769, 1.25'
- unparsed cell tab_2:row10:col2 = '10.60 0.892, 1.35'
- unparsed cell tab_2:row11:col3 = '1.07, 1.35'
- unparsed cell tab_2:row12:col2 = '3,508, 4,321'
- unparsed cell tab_2:row12:col3 = '61.7 (CV%)'
- unparsed cell tab_2:row13:col2 = '0.921, 1.20'
- unparsed cell tab_2:row14:col2 = '1,694, 2,842'
- unparsed cell tab_2:row15:col3 = '856, 967'
- unparsed cell tab_2:row17:col2 = '13.10 0.691, 1.33'
- unparsed cell tab_2:row18:col3 = '0.631, 0.733'
- unparsed cell tab_2:row19:col3 = '0.384, 0.452'
- unparsed cell tab_2:row20:col3 = '44.3, 94.3'
- unparsed cell tab_2:row22:col3 = '0.0618, 0.0900'
- companion parameter table 2 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[central volume of distribution]` | not captured | 4.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 197 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 197 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a]` | 1.03 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a]` | not captured | 1.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | 874 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | not captured | 874 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v c]` | 4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v p]` | 2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | palivizumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | palivizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q22 | fail | 197.0 | 0.438 | 0.0022 | 0.05 | footnote reference category |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 197.0 | not captured | not captured | ['Robbie_2012:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00821 L/h | not captured | not captured | ['Robbie_2012:results_prose'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.004 L | not captured | not captured | ['Robbie_2012:results_prose'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.002 L | not captured | not captured | ['Robbie_2012:results_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_palivizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Robbie_2012` / `Robbie_2012::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-03 11:38 UTC</sub>
