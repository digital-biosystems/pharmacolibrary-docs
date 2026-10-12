<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;filgotinib&quot;,&quot;href&quot;:&quot;drugs/drug_filgotinib/&quot;},{&quot;label&quot;:&quot;Namour_2015 \u00b7 metabolite&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# filgotinib — `Filgotinib_Namour2015_metabolite`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Cmax, AUC∞, AUCt and Ct), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has filgotinib → active metabolite (metabolism), the second reading filgotinib → filgotinib metabolite (metabolism); it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Namour F et al., Pharmacokinetics and Pharmacokinetic/Ph…, Clinical pharmacokinetics (2015)
  ·  DOI: [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z)

## Model component
<dbs-pgx drug="filgotinib" model-id="Filgotinib_Namour2015_metabolite" status="rejected" stale="false" population="healthy adults and patients with rheumatoid arthritis" measured-compound="filgotinib" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| C max (ng/mL) | `Q32` · Cmax | 83.0 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | Namour_2015_table_2:row1:col2, Namour_2015_table_2:row1:col3, Namour_2015_table_2:row1:col4, Namour_2015_table_2:row1:col5, Namour_2015_table_2:row1:col7, Namour_2015_table_2:row1:col8, Namour_2015_table_2:row1:col9, Namour_2015_table_2:row1:col10, Namour_2015_table_2:row1:col11, Namour_2015_table_3:row2:col2, Namour_2015_table_3:row2:col3, Namour_2015_table_3:row2:col6, Namour_2015_table_3:row2:col7, Namour_2015_table_3:row2:col8, Namour_2015_table_3:row2:col13, Namour_2015_table_3:row2:col14, Namour_2015_table_3:row2:col15, Namour_2015_table_3:row2:col18, Namour_2015_table_3:row2:col19, Namour_2015_table_3:row2:col20 | — | not captured |
| AUC0–∞ (ng × h/mL) | `Q17` · AUC∞ | 348 | ng × h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Namour_2015_table_2:row3:col2, Namour_2015_table_2:row3:col3, Namour_2015_table_2:row3:col4, Namour_2015_table_2:row3:col5, Namour_2015_table_2:row3:col7, Namour_2015_table_2:row3:col8, Namour_2015_table_2:row3:col9, Namour_2015_table_2:row3:col10, Namour_2015_table_2:row3:col11 | — | not captured |
| t1/2,λz (h) | `Q57` · t1/2z | 5.72 | h | 20592.0 | [h] | not captured | llm_confirmed (0.6) | Namour_2015_table_2:row4:col2, Namour_2015_table_2:row4:col3, Namour_2015_table_2:row4:col4, Namour_2015_table_2:row4:col5, Namour_2015_table_2:row4:col7, Namour_2015_table_2:row4:col8, Namour_2015_table_2:row4:col9, Namour_2015_table_2:row4:col10, Namour_2015_table_2:row4:col11, Namour_2015_table_3:row6:col2, Namour_2015_table_3:row6:col3, Namour_2015_table_3:row6:col6, Namour_2015_table_3:row6:col7, Namour_2015_table_3:row6:col8, Namour_2015_table_3:row6:col13, Namour_2015_table_3:row6:col14, Namour_2015_table_3:row6:col15, Namour_2015_table_3:row6:col18, Namour_2015_table_3:row6:col19, Namour_2015_table_3:row6:col20 | — | not captured |
| AUC0–t (ng × h/mL) | `Q19` · AUCt | 758 | ng × h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Namour_2015_table_3:row4:col2, Namour_2015_table_3:row4:col3, Namour_2015_table_3:row4:col6, Namour_2015_table_3:row4:col7, Namour_2015_table_3:row4:col8, Namour_2015_table_3:row4:col13, Namour_2015_table_3:row4:col14, Namour_2015_table_3:row4:col15, Namour_2015_table_3:row4:col18, Namour_2015_table_3:row4:col19, Namour_2015_table_3:row4:col20 | — | not captured |
| C t (ng/mL) | `Q75` · Ct | 9.52 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | Namour_2015_table_3:row5:col2, Namour_2015_table_3:row5:col3, Namour_2015_table_3:row5:col6, Namour_2015_table_3:row5:col7, Namour_2015_table_3:row5:col8, Namour_2015_table_3:row5:col13, Namour_2015_table_3:row5:col14, Namour_2015_table_3:row5:col15, Namour_2015_table_3:row5:col18, Namour_2015_table_3:row5:col19, Namour_2015_table_3:row5:col20 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Filgotinib dose (mg)' — extend the ontology if this is a real PK parameter (source ['Namour_2015_table_2:row0:col2', 'Namour_2015_table_2:row0:col3', 'Namour_2015_table_2:row0:col4', 'Namour_2015_table_2:row0:col5', 'Namour_2015_table_2:row0:col7', 'Namour_2015_table_2:row0:col8', 'Namour_2015_table_2:row0:col9', 'Namour_2015_table_2:row0:col10', 'Namour_2015_table_2:row0:col11', 'Namour_2015_table_3:row0:col2', 'Namour_2015_table_3:row0:col3', 'Namour_2015_table_3:row0:col6', 'Namour_2015_table_3:row0:col7', 'Namour_2015_table_3:row0:col8', 'Namour_2015_table_3:row0:col13', 'Namour_2015_table_3:row0:col14', 'Namour_2015_table_3:row0:col15', 'Namour_2015_table_3:row0:col18', 'Namour_2015_table_3:row0:col19', 'Namour_2015_table_3:row0:col20'])
- unit_dimension_unknown: 'ng × h/mL' (AUC∞)
- unit_dimension_unknown: 'ng × h/mL' (AUCt)
- implicit units: 'AUC0–∞ (ng × h/mL)' — the LLM proposed 'ng × h/mL', whose dimension does not fit Q17; left unset
- implicit units: 'AUC0–t (ng × h/mL)' — the LLM proposed 'ng × h/mL', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=filgotinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'metabolite' subgroup of Namour_2015 (paper reports 6 populations: anova (p value), anovaa (p value), anovaa (p value)tukey’s test, estimate (% rse), filgotinib, metabolite)
- row roles: 2 per-group rows of filgotinib fraction_metabolized but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 11 linked by role; re-tagged parent→active metabolite ×5, filgotinib→parent ×9
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab4:row1:col3 = '−0.804 to −0.645'
- unparsed cell Tab4:row2:col3 = '3.89 to 4.05'
- unparsed cell Tab4:row2:col4 = '0.0375 to 0.206'
- unparsed cell Tab4:row3:col3 = '0.137 to 1.06'
- unparsed cell Tab4:row4:col3 = '2.23 to 3.58'
- unparsed cell Tab4:row4:col4 = '1.44 to 4.39'
- unparsed cell Tab4:row5:col3 = '0.688 to 8.94'
- unparsed cell Tab4:row6:col3 = '1.74 to 2.31'
- unparsed cell Tab4:row7:col3 = '4.41 to 4.99'
- unparsed cell Tab4:row8:col3 = '0.974 to 1.11'
- unparsed cell Tab4:row8:col4 = '0.0273 to 0.0578'
- unparsed cell Tab4:row9:col3 = '4.28 to 4.43'
- unparsed cell Tab4:row9:col4 = '0.0198 to 0.0621'
- unparsed cell Tab4:row10:col3 = '0.195 to 0.579'
- unparsed cell Tab4:row11:col3 = '0.0711 to 0.717'
- unparsed cell Tab4:row12:col3 = '0.0451 to 0.413'
- unparsed cell Tab4:row13:col3 = '0.282 to 0.394'
- unparsed cell Tab4:row14:col3 = '0.0613 to 0.0861'
- unparsed cell Tab4:row15:col3 = '0.0524 to 0.0856'
- transposed table Namour_2015_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Namour_2015_table_2:row2:col1 = '1 (0.5–2)'
- unparsed cell Namour_2015_table_2:row2:col2 = '2.5 (1–3)'
- unparsed cell Namour_2015_table_2:row2:col3 = '2 (0.5–3)'
- unparsed cell Namour_2015_table_2:row2:col4 = '2 (0.5–3)'
- unparsed cell Namour_2015_table_2:row2:col5 = '3 (1–3)'
- unparsed cell Namour_2015_table_2:row2:col7 = '3 (1–2)'
- unparsed cell Namour_2015_table_2:row2:col8 = '4 (3–5)'
- unparsed cell Namour_2015_table_2:row2:col9 = '3 (0.5–5)'
- unparsed cell Namour_2015_table_2:row2:col10 = '5 (5–5]'
- unparsed cell Namour_2015_table_2:row2:col11 = '5 (3–8)'
- companion parameter table 2 transcribed (48 record(s))
- transposed table Namour_2015_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Namour_2015_table_3:row0:col11 = '200 mg q.d. vs 100 mg b.i.d'
- unparsed cell Namour_2015_table_3:row0:col23 = '200 mg q.d. vs 100 mg b.i.d.'
- unparsed cell Namour_2015_table_3:row2:col22 = '300 450 200'
- unparsed cell Namour_2015_table_3:row3:col1 = '0.5 (0.5–2)'
- unparsed cell Namour_2015_table_3:row3:col2 = '1.5 (0.5–3)'
- unparsed cell Namour_2015_table_3:row3:col3 = '3 (2–5)'
- unparsed cell Namour_2015_table_3:row3:col6 = '2 (1–2)'
- unparsed cell Namour_2015_table_3:row3:col7 = '1.5 (0.5–3)'
- unparsed cell Namour_2015_table_3:row3:col8 = '2.5 (0.5–3)'
- unparsed cell Namour_2015_table_3:row3:col13 = '1 (0–0.5)'
- unparsed cell Namour_2015_table_3:row3:col14 = '3 (2–5)'
- unparsed cell Namour_2015_table_3:row3:col15 = '5 (0–5)'
- unparsed cell Namour_2015_table_3:row3:col18 = '5 (3–5)'
- unparsed cell Namour_2015_table_3:row3:col19 = '5 (3–8)'
- unparsed cell Namour_2015_table_3:row3:col20 = '5 (3–8)'
- unparsed cell Namour_2015_table_3:row4:col5 = '25 50 50 100'
- unparsed cell Namour_2015_table_3:row4:col10 = '300 200 200 450'
- unparsed cell Namour_2015_table_3:row4:col22 = '300 450 200'
- unparsed cell Namour_2015_table_3:row5:col17 = '50 25 25 100'
- unparsed cell Namour_2015_table_3:row5:col22 = '300 450 450 200'
- unparsed cell Namour_2015_table_3:row6:col10 = '200 450 450 300'
- companion parameter table 3 transcribed (88 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (2/20 fields) | 18 |

<details><summary>18 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | not captured | 0.216 | only_one_extracted |
| `gpt-oss-120b` | `model.links` | [['filgotinib', 'active metabolite', 'metabolism']] | [['filgotinib', 'filgotinib metabolite', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[auc0-inf]` | 348 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t]` | 758 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | 83.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c t]` | 9.52 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f a]` | not captured | 1.04 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clp/f a]` | not captured | 3.97 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_sex]` | not captured | 2.95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[frac450 mg b]` | not captured | 0.363 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka a]` | not captured | -0.733 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f a]` | not captured | 2.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative increase in bioavailability in ra patients vs healthy volunteers]` | not captured | 0.216 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2,λz]` | 5.72 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight]` | not captured | 0.679 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c/fa]` | not captured | 3.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v m/f a]` | not captured | 4.36 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Namour_2015_table_2:row1:col2', 'Namour_2015_table_2:row1:col3', 'Namour_2015_table_2:row1:col4', 'Namour_2015_table_2:row1:col5', 'Namour_2015_table_2:row1:col7', 'Namour_2015_table_2:row1:col8', 'Namour_2015_table_2:row1:col9', 'Namour_2015_table_2:row1:col10', 'Namour_2015_table_2:row1:col11', 'Namour_2015_table_3:row2:col2', 'Namour_2015_table_3:row2:col3', 'Namour_2015_table_3:row2:col6', 'Namour_2015_table_3:row2:col7', 'Namour_2015_table_3:row2:col8', 'Namour_2015_table_3:row2:col13', 'Namour_2015_table_3:row2:col14', 'Namour_2015_table_3:row2:col15', 'Namour_2015_table_3:row2:col18', 'Namour_2015_table_3:row2:col19', 'Namour_2015_table_3:row2:col20'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Namour_2015_table_2:row4:col2', 'Namour_2015_table_2:row4:col3', 'Namour_2015_table_2:row4:col4', 'Namour_2015_table_2:row4:col5', 'Namour_2015_table_2:row4:col7', 'Namour_2015_table_2:row4:col8', 'Namour_2015_table_2:row4:col9', 'Namour_2015_table_2:row4:col10', 'Namour_2015_table_2:row4:col11', 'Namour_2015_table_3:row6:col2', 'Namour_2015_table_3:row6:col3', 'Namour_2015_table_3:row6:col6', 'Namour_2015_table_3:row6:col7', 'Namour_2015_table_3:row6:col8', 'Namour_2015_table_3:row6:col13', 'Namour_2015_table_3:row6:col14', 'Namour_2015_table_3:row6:col15', 'Namour_2015_table_3:row6:col18', 'Namour_2015_table_3:row6:col19', 'Namour_2015_table_3:row6:col20'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Namour_2015_table_3:row5:col2', 'Namour_2015_table_3:row5:col3', 'Namour_2015_table_3:row5:col6', 'Namour_2015_table_3:row5:col7', 'Namour_2015_table_3:row5:col8', 'Namour_2015_table_3:row5:col13', 'Namour_2015_table_3:row5:col14', 'Namour_2015_table_3:row5:col15', 'Namour_2015_table_3:row5:col18', 'Namour_2015_table_3:row5:col19', 'Namour_2015_table_3:row5:col20'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | ng × h/mL | not captured | not captured | ['Namour_2015_table_2:row3:col2', 'Namour_2015_table_2:row3:col3', 'Namour_2015_table_2:row3:col4', 'Namour_2015_table_2:row3:col5', 'Namour_2015_table_2:row3:col7', 'Namour_2015_table_2:row3:col8', 'Namour_2015_table_2:row3:col9', 'Namour_2015_table_2:row3:col10', 'Namour_2015_table_2:row3:col11'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | ng × h/mL | not captured | not captured | ['Namour_2015_table_3:row4:col2', 'Namour_2015_table_3:row4:col3', 'Namour_2015_table_3:row4:col6', 'Namour_2015_table_3:row4:col7', 'Namour_2015_table_3:row4:col8', 'Namour_2015_table_3:row4:col13', 'Namour_2015_table_3:row4:col14', 'Namour_2015_table_3:row4:col15', 'Namour_2015_table_3:row4:col18', 'Namour_2015_table_3:row4:col19', 'Namour_2015_table_3:row4:col20'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_filgotinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Namour_2015` / `Namour_2015::metabolite`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:01 UTC</sub>
