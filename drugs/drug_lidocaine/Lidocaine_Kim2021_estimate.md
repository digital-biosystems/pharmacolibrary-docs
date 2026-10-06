<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lidocaine&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/&quot;},{&quot;label&quot;:&quot;Kim_2021 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lidocaine — `Lidocaine_Kim2021_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.033). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The lidocaine rat model record was rejected because apparent parameters (V1/F 2.57 L, V2/F 0.07 L, Q/F 0.13 L/h, CLm1/F 14.94 L/h) were double-corrected for bioavailability, a structural parameter had a dimension mismatch, and clearance/volume magnitudes were physiologically implausible, with one reported unit that could not be converted to SI.**

The record lists lidocaine parameters already adjusted for bioavailability (V1/F, V2/F, Q/F, CLm1/F), yet the coherence check found a double correction applied to these apparent parameters. A dimension mismatch was flagged on a structural parameter, and the clearance/volume values fell outside a physiological window, consistent with a unit or scale extraction error. One reported unit could not be converted to SI, so that parameter was carried without an SI value. The second reader additionally supplied relative standard errors absent from this record (e.g., CLd/F 0.37%, CLm1/F 15.31%, Fm1 1.06%) and classified the absorption half-life parameter (t1/2ka, 5.92 h−1) differently from this record. Extracted — lidocaine: t1/2ka 5.92 h−1, V1/F 2.57 L, V2/F 0.07 L, Q/F 0.13 L/h, FR 0.373, MTT 0.64 h, Vmax 4.24e+05 nmol/h, Km 1.37e+05 nmol/L, … (+2).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has lidocaine, the second reading unknown; it also differs on 28 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:27:22.103729+00:00) predates the upstream re-run (2026-10-06 03:23:01.467421+00:00). Current validate status: `rejected`.

## Citation
Kim JH et al., Evaluation of Lidocaine and Metabolite…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13020203](https://doi.org/10.3390/pharmaceutics13020203)

## Model component
<dbs-pgx drug="lidocaine" model-id="Lidocaine_Kim2021_estimate" status="rejected" stale="true" population="male Sprague-Dawley rats" measured-compound="lidocaine" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 13 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka1 (h−1) | `Q49` · kabs | 5.92 | h−1 | 0.0016444444444444445 | [1] / [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row3:col2 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 2.57 | L | 0.00257 | [l] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row4:col2 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 0.07 | L | 7.000000000000001e-05 | [l] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row5:col2 | — | not captured |
| CLd/F (L/h) | `Q69` · Q/F | 0.13 | L/h | 3.611111111111111e-08 | [l] / [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row6:col2 | — | not captured |
| Fr | `Q43` · FR | 0.373 | not captured | not captured | not captured | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row7:col2 | — | not captured |
| MTT (h) | `Q81` · MTT | 0.64 | h | not captured | [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row8:col2 | — | not captured |
| Ka2(h−1) | `Q49` · kabs | 1.67 | h−1 | 0.00046388888888888885 | [1] / [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row10:col2 | — | not captured |
| Vmax (nmol/h) | `Q66` · Vmax | 423962.94 | nmol/h | not captured | [nM] / [h] | not captured | special_case (0.95) | pharmaceutics-13-00203-t004:row11:col2 | — | 0.08 (None% RSE) |
| Km (nmol/L) | `Q1` · Km | 136808.67 | nmol/L | not captured | [nM] / [l] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row12:col2 | — | 0.17 (None% RSE) |
| CLm1/F (L/h) | `Q27` · CL/F | 14.94 | L/h | 4.15e-06 | [l] / [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row13:col2 | — | not captured |
| Fm1 | `Q45` · fm | 0.65 | not captured | not captured | not captured | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row14:col2 | — | not captured |
| CLm2/F (L/h) | `Q27` · CL/F | 1.09 | L/h | 3.027777777777778e-07 | [l] / [h] | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row15:col2 | — | not captured |
| Fm2 | `Q45` · fm | 0.47 | not captured | not captured | not captured | not captured | exact (1.0) | pharmaceutics-13-00203-t004:row16:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'ε1' routed out of structural estimates ('Residual error')
- table section residual_error: 'ε2' routed out of structural estimates ('Residual error')
- table section residual_error: 'ε3' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'Ntr' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00203-t004:row9:col2'])
- unit_dimension_mismatch: 'Vmax (nmol/h)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Km (nmol/L)' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lidocaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — a metabolite is formed from another metabolite (a chain)
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Kim_2021 (paper reports 12 populations: (0.3% solution, iv), (0.3% solution, sc), (lha 0.3%, sc), (lha 1%, sc), (lha 3%, sc), estimate, group 1, group 2, group 3, group 4, group 5, gx)
- row roles (LLM): model_class=compartmental; 28/28 row label(s) assigned, 18 linked by role; re-tagged parent→monoethylglycylxylidide ×6, parent→glycylxylidide ×4
- fm scheme: monoethylglycylxylidide = Fm1 = 0.65 of CL, glycylxylidide = Fm1*Fm2 = 0.305 of CL
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-13-00203-t004:row3:col4 = '(5.19, 6.64)'
- unparsed cell pharmaceutics-13-00203-t004:row4:col1 = 'Apparent volume of distribution of compartment 1'
- unparsed cell pharmaceutics-13-00203-t004:row4:col4 = '(2.23, 2.89)'
- unparsed cell pharmaceutics-13-00203-t004:row5:col1 = 'Apparent volume of distribution of compartment 2'
- unparsed cell pharmaceutics-13-00203-t004:row5:col4 = '(0.06, 0.07)'
- unparsed cell pharmaceutics-13-00203-t004:row6:col4 = '(0.1323, 0.1332)'
- unparsed cell pharmaceutics-13-00203-t004:row7:col4 = '(0.371, 0.374)'
- unparsed cell pharmaceutics-13-00203-t004:row8:col4 = '(0.57, 0.70)'
- unparsed cell pharmaceutics-13-00203-t004:row9:col4 = '(4.96, 4.98)'
- unparsed cell pharmaceutics-13-00203-t004:row10:col4 = '(1.59, 1.74)'
- unparsed cell pharmaceutics-13-00203-t004:row11:col4 = '(383,479.15, 464,446.73)'
- unparsed cell pharmaceutics-13-00203-t004:row12:col4 = '(112,613.9, 161,003.44)'
- unparsed cell pharmaceutics-13-00203-t004:row13:col4 = '(12.76, 17.11)'
- unparsed cell pharmaceutics-13-00203-t004:row14:col4 = '(0.644, 0.646)'
- unparsed cell pharmaceutics-13-00203-t004:row15:col4 = '(1.04, 1.14)'
- unparsed cell pharmaceutics-13-00203-t004:row16:col4 = '(0.46, 0.47)'
- unparsed cell pharmaceutics-13-00203-t004:row18:col4 = '(0.127, 0.152)'
- unparsed cell pharmaceutics-13-00203-t004:row19:col4 = '(0.181, 0.208)'
- unparsed cell pharmaceutics-13-00203-t004:row20:col4 = '(0.077, 0.089)'
- unparsed cell pharmaceutics-13-00203-t004:row21:col4 = '(0.159, 0.183)'
- unparsed cell pharmaceutics-13-00203-t004:row22:col4 = '(0.350, 0.402)'
- unparsed cell pharmaceutics-13-00203-t004:row23:col1 = 'IIV of CLm2'
- unparsed cell pharmaceutics-13-00203-t004:row23:col4 = '(0.216, 0.248)'
- unparsed cell pharmaceutics-13-00203-t004:row25:col4 = '(0.485, 0.504)'
- unparsed cell pharmaceutics-13-00203-t004:row26:col4 = '(0.562, 0.597)'
- unparsed cell pharmaceutics-13-00203-t004:row27:col4 = '(0.399, 0.430)'
- transposed table Kim_2021_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 3 transcribed (59 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.033 (1/30 fields) | 29 |

<details><summary>29 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['lidocaine', 'monoethylglycylxylidide', 'metabolism'], ['monoethylglycylxylidide', 'glycylxylidide', 'metabolism']] | [['lidocaine', 'megx', 'metabolism'], ['lidocaine', 'gx', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[cld/f]` | 0.13 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cld/f]` | not captured | 0.13 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm1/f]` | not captured | 14.94 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm1/f]` | 14.94 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm2/f]` | not captured | 1.09 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm2/f]` | 1.09 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm1]` | not captured | 0.65 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm1]` | 0.65 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm2]` | not captured | 0.47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fm2]` | 0.47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fr]` | 0.373 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fr]` | not captured | 0.373 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka1]` | 5.92 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka1]` | not captured | 5.92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka2]` | 1.67 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[km]` | 136808.67 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[km]` | not captured | 136808.67 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mtt]` | 0.64 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[mtt]` | not captured | 0.64 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ntr]` | not captured | 4.97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` | 2.57 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` | not captured | 2.57 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f]` | 0.07 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f]` | not captured | 0.07 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vmax]` | 423962.94 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vmax]` | not captured | 423962.94 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | lidocaine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | lidocaine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['pharmaceutics-13-00203-t004:row12:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row13:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row15:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row10:col2'] |
| C5_dimension_Q66 | fail | [substance] / [time] | nmol/h | not captured | not captured | ['pharmaceutics-13-00203-t004:row11:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row5:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.9 L/h | not captured | not captured | ['pharmaceutics-13-00203-t004:row13:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.09 L/h | not captured | not captured | ['pharmaceutics-13-00203-t004:row15:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.57 L | not captured | not captured | ['pharmaceutics-13-00203-t004:row4:col2'] |
| C9_phys_window_Q82 | fail | volume within physiological range | 0.07 L | not captured | not captured | ['pharmaceutics-13-00203-t004:row5:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lidocaine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2021` / `Kim_2021::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 03:23 UTC</sub>
