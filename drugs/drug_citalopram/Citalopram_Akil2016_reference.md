<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;citalopram&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/&quot;},{&quot;label&quot;:&quot;Akil_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# citalopram — `Citalopram_Akil2016_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**V/F, CL, Vss and add_error have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (add_error), so that value has no SI equivalent. Extracted — citalopram: V/F 1.39e+03, CL 24.4, Vss 167, add_error 13.4 additive.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has R- and S-citalopram and desmethylcitalopram, the second reading citalopram; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:25:22.205824+00:00) predates the upstream re-run (2026-10-06 22:12:18.134487+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `citalopram (racemic)`, measured `R,S-citalopram and R,S-desmethylcitalopram`.

## Citation
Akil A et al., A population pharmacokinetic model for…, Journal of pharmacokinetics… (2016)
  ·  DOI: [10.1007/s10928-015-9457-6](https://doi.org/10.1007/s10928-015-9457-6)

## Model component
<dbs-pgx drug="citalopram" model-id="Citalopram_Akil2016_reference" status="rejected" stale="true" population="Alzheimer&#39;s disease patients with agitation" measured-compound="R,S-citalopram and R,S-desmethylcitalopram" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V/F, L | `Q76` · V/F | 1390 | L | 1.3900000000000001 | [l] | not captured | exact (1.0) | Tab3:row4:col1, Tab3:row16:col1 | — | not captured |
| Ka, h−1 | `Q49` · kabs | 1 | h−1 | 0.0002777777777777778 | [1] / [h] | not captured | exact (1.0) | Tab3:row5:col1, Tab3:row17:col1 | — | not captured |
| CLRm/F, L/h | `Q27` · CL/F | 24.4 | L/h | 6.777777777777777e-06 | [l] / [h] | not captured | exact (1.0) | Tab3:row6:col1 | — | not captured |
| CLSm/F, L/h | `Q27` · CL/F | 38.8 | L/h | 1.0777777777777778e-05 | [l] / [h] | not captured | exact (1.0) | Tab3:row18:col1 | — | not captured |
| theta_q26_category | `Q900` · theta_q26_category | 13 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row2:col1 | — | not captured |
| theta_q27_em | `Q900` · theta_q27_em | 22.1 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row13:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate effect for Q26 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=R,S-citalopram and R,S-desmethylcitalopram
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- status held at route_to_review — not promoted
- row roles: per-genotype parameters — typical value from the reference group: CLRp/F for male, L/h, CLSp/F for EM/RM, L/h
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 8 linked by role; re-tagged parent→R-citalopram ×1, parent→R,S-citalopram and R,S-desmethylcitalopram ×10, parent→R-desmethylcitalopram ×1, parent→S-citalopram ×1, parent→S-desmethylcitalopram ×1
- molar mass: no plausible PubChem entry for 'R-citalopram' ('R-citalopram') — left in mass units
- molar mass: none of 3 PubChem candidate(s) is 'S-desmethylcitalopram' (LLM) — left in mass units
- molar mass: none found for 'R-citalopram' — its concentrations stay mass-only
- molar mass: none found for 'S-desmethylcitalopram' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row2:col2 = '13.8 (13.5–14.1)'
- unparsed cell Tab3:row3:col2 = '10.3 (10.1–10.5)'
- unparsed cell Tab3:row4:col2 = '1605 (1440–2090)'
- unparsed cell Tab3:row6:col2 = '23.5 (23.1–23.7)'
- unparsed cell Tab3:row7:col2 = '28.7 (27.8–30)'
- unparsed cell Tab3:row8:col2 = '107.2 (92.6–121.2)'
- unparsed cell Tab3:row9:col2 = '34.9 (34.5–35.9)'
- unparsed cell Tab3:row10:col2 = '13.6 (13.3–13.9)'
- unparsed cell Tab3:row11:col2 = '20.7 (20.4–21.3)'
- unparsed cell Tab3:row13:col2 = '21.9 (21.2–22.8)'
- unparsed cell Tab3:row14:col2 = '16.7 (15.9–17.2)'
- unparsed cell Tab3:row15:col2 = '17 (16.1–17.6)'
- unparsed cell Tab3:row16:col2 = '1310 (1130–1420)'
- unparsed cell Tab3:row18:col2 = '38.9 (38.4–39.2)'
- unparsed cell Tab3:row19:col2 = '36.7 (35.8–38.5)'
- unparsed cell Tab3:row20:col2 = '62.3 (59.5–68.9)'
- unparsed cell Tab3:row21:col2 = '67 (54–82.7)'
- unparsed cell Tab3:row22:col2 = '20.1 (19.4–20.6)'
- unparsed cell Tab3:row23:col2 = '21.6 (21–22.1)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl rm /f]` | 24.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[r]` | 13.42 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_category]` | not captured | 13 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_em]` | not captured | 22.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_im]` | not captured | 16.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_rm]` | not captured | 24.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f].value` | 1390 | 1830 | mismatch |
| `gpt-oss:120b` | `parameters[x clm , %]` | not captured | 30.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[x clp , %]` | not captured | 26.38 | only_one_extracted |
| `gpt-oss:120b` | `parameters[x v , %].parameter_id` | Q65 | Q61 | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | R- and S-citalopram and desmethylcitalopram | citalopram | mismatch |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row18:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row17:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row16:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CLRm (formation clearance)', 'CLSm (formation clearance)'] | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 24.4 L/h | not captured | not captured | ['Tab3:row6:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 38.8 L/h | not captured | not captured | ['Tab3:row18:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.39e+03 L | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row16:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_citalopram/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Akil_2016` / `Akil_2016::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:12 UTC</sub>
