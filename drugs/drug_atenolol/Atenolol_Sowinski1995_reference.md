<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;atenolol&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/&quot;},{&quot;label&quot;:&quot;Sowinski_1995 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atenolol — `Atenolol_Sowinski1995_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**CL/F, Q and CLR have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL/F, Q, CLR and Cmax), so that value has no SI equivalent. Extracted — atenolol: CL/F 11.2 L/hr/1.73 m2, Q 8.58 L/hr/1.73 m2, CLR 7.67 L/hr/1.73 m2, Vss 1.43 L/kg, V/F 1.17 L/kg, kabs 1.32 hr-1, Cmax 780 ng/mL.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has atenolol, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Sowinski KM et al., Effect of aging on atenolol pharmacokin…, Journal of clinical pharmac… (1995)
  ·  DOI: [10.1002/j.1552-4604.1995.tb04124.x](https://doi.org/10.1002/j.1552-4604.1995.tb04124.x)

## Model component
<dbs-pgx drug="atenolol" model-id="Atenolol_Sowinski1995_reference" status="needs_review" stale="false" population="young and elderly healthy men" measured-compound="atenolol" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/hr/1.73 m2) | `Q27` · CL/F | 11.15 | L/hr/1.73 m2 | not captured | [l] / [[h] · [1.73m2]] | not captured | exact (1.0) | Sowinski_1995_table_1:row0:col2, Sowinski_1995_table_1:row0:col3, Sowinski_1995_table_1:row0:col4, Sowinski_1995_table_1:row0:col5, Sowinski_1995_table_1:row0:col6, Sowinski_1995_table_1:row0:col7, Sowinski_1995_table_1:row0:col9, Sowinski_1995_table_1:row0:col11, Sowinski_1995_table_1:row0:col12, Sowinski_1995_table_1:row0:col13, Sowinski_1995_table_1:row0:col14, Sowinski_1995_table_1:row0:col15, Sowinski_1995_table_1:row0:col16, Sowinski_1995_table_1:row0:col17, Sowinski_1995_table_1:row0:col18 | — | not captured |
| CLd (L/hr/1.73 m2) | `Q30` · Q | 8.58 | L/hr/1.73 m2 | not captured | [l] / [[h] · [1.73m2]] | not captured | exact (1.0) | Sowinski_1995_table_1:row1:col2, Sowinski_1995_table_1:row1:col3, Sowinski_1995_table_1:row1:col4, Sowinski_1995_table_1:row1:col5, Sowinski_1995_table_1:row1:col6, Sowinski_1995_table_1:row1:col7, Sowinski_1995_table_1:row1:col8, Sowinski_1995_table_1:row1:col9, Sowinski_1995_table_1:row1:col11, Sowinski_1995_table_1:row1:col13, Sowinski_1995_table_1:row1:col15, Sowinski_1995_table_1:row1:col16, Sowinski_1995_table_1:row1:col17, Sowinski_1995_table_1:row1:col18 | — | not captured |
| CLr (L/hr/1.73 m2) | `Q26` · CLR | 7.67 | L/hr/1.73 m2 | not captured | [l] / [[h] · [1.73m2]] | not captured | exact (1.0) | Sowinski_1995_table_1:row2:col2, Sowinski_1995_table_1:row2:col3, Sowinski_1995_table_1:row2:col4, Sowinski_1995_table_1:row2:col5, Sowinski_1995_table_1:row2:col6, Sowinski_1995_table_1:row2:col7, Sowinski_1995_table_1:row2:col9, Sowinski_1995_table_1:row2:col11, Sowinski_1995_table_1:row2:col12, Sowinski_1995_table_1:row2:col13, Sowinski_1995_table_1:row2:col14, Sowinski_1995_table_1:row2:col15, Sowinski_1995_table_1:row2:col16, Sowinski_1995_table_1:row2:col17, Sowinski_1995_table_1:row2:col18 | — | not captured |
| Vss/F (L/kg) | `Q65` · Vss | 1.43 | L/kg | 0.10010000000000001 | [l] / [kg] | not captured | llm (0.6) | Sowinski_1995_table_1:row3:col2, Sowinski_1995_table_1:row3:col3, Sowinski_1995_table_1:row3:col4, Sowinski_1995_table_1:row3:col5, Sowinski_1995_table_1:row3:col6, Sowinski_1995_table_1:row3:col7, Sowinski_1995_table_1:row3:col8, Sowinski_1995_table_1:row3:col9, Sowinski_1995_table_1:row3:col11, Sowinski_1995_table_1:row3:col12, Sowinski_1995_table_1:row3:col13, Sowinski_1995_table_1:row3:col14, Sowinski_1995_table_1:row3:col15, Sowinski_1995_table_1:row3:col16, Sowinski_1995_table_1:row3:col17, Sowinski_1995_table_1:row3:col18 | — | not captured |
| Vc/F (L/kg) | `Q76` · V/F | 1.17 | L/kg | 0.0819 | [l] / [kg] | not captured | exact (1.0) | Sowinski_1995_table_1:row4:col2, Sowinski_1995_table_1:row4:col3, Sowinski_1995_table_1:row4:col4, Sowinski_1995_table_1:row4:col5, Sowinski_1995_table_1:row4:col6, Sowinski_1995_table_1:row4:col7, Sowinski_1995_table_1:row4:col8, Sowinski_1995_table_1:row4:col9, Sowinski_1995_table_1:row4:col11, Sowinski_1995_table_1:row4:col12, Sowinski_1995_table_1:row4:col13, Sowinski_1995_table_1:row4:col14, Sowinski_1995_table_1:row4:col15, Sowinski_1995_table_1:row4:col16, Sowinski_1995_table_1:row4:col17, Sowinski_1995_table_1:row4:col18 | — | not captured |
| ka (hr-1) | `Q49` · kabs | 1.32 | hr-1 | 0.00036666666666666667 | [1] / [h] | not captured | exact (1.0) | Sowinski_1995_table_1:row5:col2, Sowinski_1995_table_1:row5:col3, Sowinski_1995_table_1:row5:col4, Sowinski_1995_table_1:row5:col5, Sowinski_1995_table_1:row5:col6, Sowinski_1995_table_1:row5:col7, Sowinski_1995_table_1:row5:col9, Sowinski_1995_table_1:row5:col11, Sowinski_1995_table_1:row5:col12, Sowinski_1995_table_1:row5:col13, Sowinski_1995_table_1:row5:col14, Sowinski_1995_table_1:row5:col15, Sowinski_1995_table_1:row5:col16, Sowinski_1995_table_1:row5:col17, Sowinski_1995_table_1:row5:col18 | — | not captured |
| Cmax (ng/mL) | `Q32` · Cmax | 780 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Sowinski_1995_table_1:row6:col2, Sowinski_1995_table_1:row6:col3, Sowinski_1995_table_1:row6:col4, Sowinski_1995_table_1:row6:col5, Sowinski_1995_table_1:row6:col6, Sowinski_1995_table_1:row6:col7, Sowinski_1995_table_1:row6:col9, Sowinski_1995_table_1:row6:col11, Sowinski_1995_table_1:row6:col12, Sowinski_1995_table_1:row6:col13, Sowinski_1995_table_1:row6:col14, Sowinski_1995_table_1:row6:col15, Sowinski_1995_table_1:row6:col16, Sowinski_1995_table_1:row6:col17, Sowinski_1995_table_1:row6:col18 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '6' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '7' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '8' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '9' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '11' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '12' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'L/hr/1.73 m2' (CL/F)
- unit_dimension_unknown: 'L/hr/1.73 m2' (Q)
- unit_dimension_unknown: 'L/hr/1.73 m2' (CLR)
- implicit units: 'CL/F (L/hr/1.73 m2)' — the LLM proposed 'L/h/1.73 m2', whose dimension does not fit Q27; left unset
- implicit units: 'CLd (L/hr/1.73 m2)' — the LLM proposed 'L/h/1.73 m2', whose dimension does not fit Q30; left unset
- implicit units: 'CLr (L/hr/1.73 m2)' — the LLM proposed 'L/h/1.73 m2', whose dimension does not fit Q26; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atenolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L/kg)' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- transposed table Sowinski_1995_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Sowinski_1995_table_1:row0:col8 = '15.18*'
- unparsed cell Sowinski_1995_table_1:row2:col8 = '10.41*'
- unparsed cell Sowinski_1995_table_1:row5:col8 = '0.57*'
- unparsed cell Sowinski_1995_table_1:row6:col8 = '620*'
- LLM region Sowinski_1995:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `screen.dose_compound` | atenolol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | atenolol | unknown | mismatch |

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
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Sowinski_1995_table_1:row6:col2', 'Sowinski_1995_table_1:row6:col3', 'Sowinski_1995_table_1:row6:col4', 'Sowinski_1995_table_1:row6:col5', 'Sowinski_1995_table_1:row6:col6', 'Sowinski_1995_table_1:row6:col7', 'Sowinski_1995_table_1:row6:col9', 'Sowinski_1995_table_1:row6:col11', 'Sowinski_1995_table_1:row6:col12', 'Sowinski_1995_table_1:row6:col13', 'Sowinski_1995_table_1:row6:col14', 'Sowinski_1995_table_1:row6:col15', 'Sowinski_1995_table_1:row6:col16', 'Sowinski_1995_table_1:row6:col17', 'Sowinski_1995_table_1:row6:col18'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Sowinski_1995_table_1:row5:col2', 'Sowinski_1995_table_1:row5:col3', 'Sowinski_1995_table_1:row5:col4', 'Sowinski_1995_table_1:row5:col5', 'Sowinski_1995_table_1:row5:col6', 'Sowinski_1995_table_1:row5:col7', 'Sowinski_1995_table_1:row5:col9', 'Sowinski_1995_table_1:row5:col11', 'Sowinski_1995_table_1:row5:col12', 'Sowinski_1995_table_1:row5:col13', 'Sowinski_1995_table_1:row5:col14', 'Sowinski_1995_table_1:row5:col15', 'Sowinski_1995_table_1:row5:col16', 'Sowinski_1995_table_1:row5:col17', 'Sowinski_1995_table_1:row5:col18'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sowinski_1995_table_1:row3:col2', 'Sowinski_1995_table_1:row3:col3', 'Sowinski_1995_table_1:row3:col4', 'Sowinski_1995_table_1:row3:col5', 'Sowinski_1995_table_1:row3:col6', 'Sowinski_1995_table_1:row3:col7', 'Sowinski_1995_table_1:row3:col8', 'Sowinski_1995_table_1:row3:col9', 'Sowinski_1995_table_1:row3:col11', 'Sowinski_1995_table_1:row3:col12', 'Sowinski_1995_table_1:row3:col13', 'Sowinski_1995_table_1:row3:col14', 'Sowinski_1995_table_1:row3:col15', 'Sowinski_1995_table_1:row3:col16', 'Sowinski_1995_table_1:row3:col17', 'Sowinski_1995_table_1:row3:col18'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sowinski_1995_table_1:row4:col2', 'Sowinski_1995_table_1:row4:col3', 'Sowinski_1995_table_1:row4:col4', 'Sowinski_1995_table_1:row4:col5', 'Sowinski_1995_table_1:row4:col6', 'Sowinski_1995_table_1:row4:col7', 'Sowinski_1995_table_1:row4:col8', 'Sowinski_1995_table_1:row4:col9', 'Sowinski_1995_table_1:row4:col11', 'Sowinski_1995_table_1:row4:col12', 'Sowinski_1995_table_1:row4:col13', 'Sowinski_1995_table_1:row4:col14', 'Sowinski_1995_table_1:row4:col15', 'Sowinski_1995_table_1:row4:col16', 'Sowinski_1995_table_1:row4:col17', 'Sowinski_1995_table_1:row4:col18'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] | L/hr/1.73 m2 | not captured | not captured | ['Sowinski_1995_table_1:row2:col2', 'Sowinski_1995_table_1:row2:col3', 'Sowinski_1995_table_1:row2:col4', 'Sowinski_1995_table_1:row2:col5', 'Sowinski_1995_table_1:row2:col6', 'Sowinski_1995_table_1:row2:col7', 'Sowinski_1995_table_1:row2:col9', 'Sowinski_1995_table_1:row2:col11', 'Sowinski_1995_table_1:row2:col12', 'Sowinski_1995_table_1:row2:col13', 'Sowinski_1995_table_1:row2:col14', 'Sowinski_1995_table_1:row2:col15', 'Sowinski_1995_table_1:row2:col16', 'Sowinski_1995_table_1:row2:col17', 'Sowinski_1995_table_1:row2:col18'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | L/hr/1.73 m2 | not captured | not captured | ['Sowinski_1995_table_1:row0:col2', 'Sowinski_1995_table_1:row0:col3', 'Sowinski_1995_table_1:row0:col4', 'Sowinski_1995_table_1:row0:col5', 'Sowinski_1995_table_1:row0:col6', 'Sowinski_1995_table_1:row0:col7', 'Sowinski_1995_table_1:row0:col9', 'Sowinski_1995_table_1:row0:col11', 'Sowinski_1995_table_1:row0:col12', 'Sowinski_1995_table_1:row0:col13', 'Sowinski_1995_table_1:row0:col14', 'Sowinski_1995_table_1:row0:col15', 'Sowinski_1995_table_1:row0:col16', 'Sowinski_1995_table_1:row0:col17', 'Sowinski_1995_table_1:row0:col18'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | L/hr/1.73 m2 | not captured | not captured | ['Sowinski_1995_table_1:row1:col2', 'Sowinski_1995_table_1:row1:col3', 'Sowinski_1995_table_1:row1:col4', 'Sowinski_1995_table_1:row1:col5', 'Sowinski_1995_table_1:row1:col6', 'Sowinski_1995_table_1:row1:col7', 'Sowinski_1995_table_1:row1:col8', 'Sowinski_1995_table_1:row1:col9', 'Sowinski_1995_table_1:row1:col11', 'Sowinski_1995_table_1:row1:col13', 'Sowinski_1995_table_1:row1:col15', 'Sowinski_1995_table_1:row1:col16', 'Sowinski_1995_table_1:row1:col17', 'Sowinski_1995_table_1:row1:col18'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q65 | pass | volume within physiological range | 100 L | not captured | not captured | ['Sowinski_1995_table_1:row3:col2', 'Sowinski_1995_table_1:row3:col3', 'Sowinski_1995_table_1:row3:col4', 'Sowinski_1995_table_1:row3:col5', 'Sowinski_1995_table_1:row3:col6', 'Sowinski_1995_table_1:row3:col7', 'Sowinski_1995_table_1:row3:col8', 'Sowinski_1995_table_1:row3:col9', 'Sowinski_1995_table_1:row3:col11', 'Sowinski_1995_table_1:row3:col12', 'Sowinski_1995_table_1:row3:col13', 'Sowinski_1995_table_1:row3:col14', 'Sowinski_1995_table_1:row3:col15', 'Sowinski_1995_table_1:row3:col16', 'Sowinski_1995_table_1:row3:col17', 'Sowinski_1995_table_1:row3:col18'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 81.9 L | not captured | not captured | ['Sowinski_1995_table_1:row4:col2', 'Sowinski_1995_table_1:row4:col3', 'Sowinski_1995_table_1:row4:col4', 'Sowinski_1995_table_1:row4:col5', 'Sowinski_1995_table_1:row4:col6', 'Sowinski_1995_table_1:row4:col7', 'Sowinski_1995_table_1:row4:col8', 'Sowinski_1995_table_1:row4:col9', 'Sowinski_1995_table_1:row4:col11', 'Sowinski_1995_table_1:row4:col12', 'Sowinski_1995_table_1:row4:col13', 'Sowinski_1995_table_1:row4:col14', 'Sowinski_1995_table_1:row4:col15', 'Sowinski_1995_table_1:row4:col16', 'Sowinski_1995_table_1:row4:col17', 'Sowinski_1995_table_1:row4:col18'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atenolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sowinski_1995` / `Sowinski_1995::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-28 23:53 UTC</sub>
