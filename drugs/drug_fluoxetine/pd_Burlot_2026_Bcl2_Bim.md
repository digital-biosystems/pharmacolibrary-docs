<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluoxetine_Wilens2002_reference&quot;,&quot;label&quot;:&quot;Wilens_2002_reference&quot;,&quot;href&quot;:&quot;drugs/drug_fluoxetine/Fluoxetine_Wilens2002_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluoxetine_van2024_reference&quot;,&quot;label&quot;:&quot;van_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_fluoxetine/Fluoxetine_van2024_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# Bcl2/Bim complex — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.645). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Burlot_2026`
- **model family:** `indirect_response_i`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Burlot C; Riglet F; Romagnoli M; Leconte A; Delmas A; Schmitt A; et al. et al. (2026). CPT: pharmacometrics & systems pharmacology 15
  ·  DOI: [10.1002/psp4.70288](https://doi.org/10.1002/psp4.70288)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Cl — Base PK/PD model | `Q22` · not captured | 12.2 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row2:col3 |
| Cl — Base PK/PD model | `Q22` · not captured | 5.3 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row2:col4 |
| Cl — PhI‐II PK/PD model | `Q22` · not captured | 12.2 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row2:col5 |
| Cl — PhI‐II PK/PD model | `Q22` · not captured | 5.4 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row2:col6 |
| Vcentral — Base PK/PD model | `Q63` · not captured | 9.0 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row3:col3 |
| Vcentral — Base PK/PD model | `Q63` · not captured | 9.7 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row3:col4 |
| Vcentral — PhI‐II PK/PD model | `Q63` · not captured | 7.6 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row3:col5 |
| Vcentral — PhI‐II PK/PD model | `Q63` · not captured | 10.7 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row3:col6 |
| Q2 — Base PK/PD model | `Q30` · not captured | 2.1 | not captured | not captured | special_case (not captured) | psp470288-tbl-0002:row4:col3 |
| Q2 — Base PK/PD model | `Q30` · not captured | 17.2 | not captured | not captured | special_case (not captured) | psp470288-tbl-0002:row4:col4 |
| Q2 — PhI‐II PK/PD model | `Q30` · not captured | 1.5 | not captured | not captured | special_case (not captured) | psp470288-tbl-0002:row4:col5 |
| Q2 — PhI‐II PK/PD model | `Q30` · not captured | 13.1 | not captured | not captured | special_case (not captured) | psp470288-tbl-0002:row4:col6 |
| V2 — Base PK/PD model | `Q64` · not captured | 17.1 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row5:col3 |
| V2 — Base PK/PD model | `Q64` · not captured | 15.9 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row5:col4 |
| V2 — PhI‐II PK/PD model | `Q64` · not captured | 16.4 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row5:col5 |
| V2 — PhI‐II PK/PD model | `Q64` · not captured | 14.0 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row5:col6 |
| Q3 — Base PK/PD model | `Q308` · not captured | 8.5 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row6:col3 |
| Q3 — Base PK/PD model | `Q308` · not captured | 16.8 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row6:col4 |
| Q3 — PhI‐II PK/PD model | `Q308` · not captured | 15.5 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row6:col5 |
| Q3 — PhI‐II PK/PD model | `Q308` · not captured | 18.6 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row6:col6 |
| V3 — Base PK/PD model | `Q77` · not captured | 11.6 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row7:col3 |
| V3 — Base PK/PD model | `Q77` · not captured | 9.2 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row7:col4 |
| V3 — PhI‐II PK/PD model | `Q77` · not captured | 14.8 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row7:col5 |
| V3 — PhI‐II PK/PD model | `Q77` · not captured | 7.5 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row7:col6 |
| R0 — Base PK/PD model | `Q336` · not captured | 11.8 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row8:col4 |
| R0 — PhI‐II PK/PD model | `Q336` · not captured | 12.7 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row8:col6 |
| kout — Base PK/PD model | `Q328` · not captured | 0.4 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row9:col3 |
| kout — Base PK/PD model | `Q328` · not captured | 9.2 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row9:col4 |
| kout — PhI‐II PK/PD model | `Q328` · not captured | 0.4 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row9:col5 |
| kout — PhI‐II PK/PD model | `Q328` · not captured | 8.8 | not captured | not captured | exact (not captured) | psp470288-tbl-0002:row9:col6 |
| IC50 — Base PK/PD model | `Q322` · not captured | 64.1 | μg/L | not captured | exact (not captured) | psp470288-tbl-0002:row10:col3 |
| IC50 — Base PK/PD model | `Q322` · not captured | 34.6 | μg/L | not captured | exact (not captured) | psp470288-tbl-0002:row10:col4 |
| IC50 — PhI‐II PK/PD model | `Q322` · not captured | 140.9 | μg/L | not captured | exact (not captured) | psp470288-tbl-0002:row10:col5 |
| IC50 — PhI‐II PK/PD model | `Q322` · not captured | 45.6 | μg/L | not captured | exact (not captured) | psp470288-tbl-0002:row10:col6 |
| β‐IC50STUDY003 — PhI‐II PK/PD model | `Q322` · not captured | -1.6 | μg/L | not captured | llm (not captured) | psp470288-tbl-0002:row11:col5 |
| β‐IC50STUDY003 — PhI‐II PK/PD model | `Q322` · not captured | 39.8 | μg/L | not captured | llm (not captured) | psp470288-tbl-0002:row11:col6 |
| IIVCL — Base PK/PD model | `Q312` · not captured | 57.6 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row12:col3 |
| IIVCL — Base PK/PD model | `Q312` · not captured | 7.6 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row12:col4 |
| IIVCL — PhI‐II PK/PD model | `Q312` · not captured | 58.9 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row12:col5 |
| IIVCL — PhI‐II PK/PD model | `Q312` · not captured | 7.5 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row12:col6 |
| IIVVc — Base PK/PD model | `Q312` · not captured | 105 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row13:col3 |
| IIVVc — Base PK/PD model | `Q312` · not captured | 8.8 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row13:col4 |
| IIVVc — PhI‐II PK/PD model | `Q312` · not captured | 119.6 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row13:col5 |
| IIVVc — PhI‐II PK/PD model | `Q312` · not captured | 9.1 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row13:col6 |
| IIVQ2 — Base PK/PD model | `Q312` · not captured | 334.2 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row14:col3 |
| IIVQ2 — Base PK/PD model | `Q312` · not captured | 9.5 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row14:col4 |
| IIVQ2 — PhI‐II PK/PD model | `Q312` · not captured | 258.2 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row14:col5 |
| IIVQ2 — PhI‐II PK/PD model | `Q312` · not captured | 9.0 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row14:col6 |
| IIVV2 — Base PK/PD model | `Q312` · not captured | 289.2 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row15:col3 |
| IIVV2 — Base PK/PD model | `Q312` · not captured | 9.5 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row15:col4 |
| IIVV2 — PhI‐II PK/PD model | `Q312` · not captured | 365.3 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row15:col5 |
| IIVV2 — PhI‐II PK/PD model | `Q312` · not captured | 10.2 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row15:col6 |
| IIVQ3 — Base PK/PD model | `Q312` · not captured | 254.6 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row16:col3 |
| IIVQ3 — Base PK/PD model | `Q312` · not captured | 9.3 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row16:col4 |
| IIVQ3 — PhI‐II PK/PD model | `Q312` · not captured | 365.4 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row16:col5 |
| IIVQ3 — PhI‐II PK/PD model | `Q312` · not captured | 8.9 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row16:col6 |
| IIVV3 — Base PK/PD model | `Q312` · not captured | 55.3 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row17:col3 |
| IIVV3 — Base PK/PD model | `Q312` · not captured | 17.1 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row17:col4 |
| IIVV3 — PhI‐II PK/PD model | `Q77` · not captured | 53.8 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row17:col5 |
| IIVV3 — PhI‐II PK/PD model | `Q77` · not captured | 13.7 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row17:col6 |
| IIVkout — Base PK/PD model | `Q328` · not captured | 85.9 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row19:col3 |
| IIVkout — Base PK/PD model | `Q328` · not captured | 11.2 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row19:col4 |
| IIVkout — PhI‐II PK/PD model | `Q328` · not captured | 90.2 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row19:col5 |
| IIVkout — PhI‐II PK/PD model | `Q328` · not captured | 9.1 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row19:col6 |
| IIVIC50 — Base PK/PD model | `Q322` · not captured | 3264.7 | μg/L | not captured | llm (not captured) | psp470288-tbl-0002:row20:col3 |
| IIVIC50 — Base PK/PD model | `Q322` · not captured | 10.2 | μg/L | not captured | llm (not captured) | psp470288-tbl-0002:row20:col4 |
| IIVIC50 — PhI‐II PK/PD model | `Q322` · not captured | 1386.5 | μg/L | not captured | llm (not captured) | psp470288-tbl-0002:row20:col5 |
| IIVIC50 — PhI‐II PK/PD model | `Q322` · not captured | 11.2 | μg/L | not captured | llm (not captured) | psp470288-tbl-0002:row20:col6 |
| σ Add — Base PK/PD model | `Q317` · not captured | 3.1 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row22:col3 |
| σ Add — Base PK/PD model | `Q317` · not captured | 13.8 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row22:col4 |
| σ Add — PhI‐II PK/PD model | `Q317` · not captured | 2.9 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row22:col5 |
| σ Add — PhI‐II PK/PD model | `Q317` · not captured | 8.7 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row22:col6 |
| σ Prop — Base PK/PD model | `Q315` · not captured | 0.5 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row23:col3 |
| σ Prop — Base PK/PD model | `Q315` · not captured | 2.0 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row23:col4 |
| σ Prop — PhI‐II PK/PD model | `Q316` · not captured | 0.5 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row23:col5 |
| σ Prop — PhI‐II PK/PD model | `Q316` · not captured | 2.0 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row23:col6 |
| σ Prop2 — Base PK/PD model | `Q315` · not captured | 0.6 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row24:col3 |
| σ Prop2 — Base PK/PD model | `Q315` · not captured | 5.9 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row24:col4 |
| σ Prop2 — PhI‐II PK/PD model | `Q315` · not captured | 0.7 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row24:col5 |
| σ Prop2 — PhI‐II PK/PD model | `Q315` · not captured | 4.6 | not captured | not captured | llm (not captured) | psp470288-tbl-0002:row24:col6 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.645 (69/107 fields) | 38 |

<details><summary>38 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 254.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 9.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 365.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 8.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 258.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 9.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 254.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 9.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 365.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 8.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 53.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 13.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 2.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | not captured | 8.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 2.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 5.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 0.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q315]` | 4.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 0.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 2.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 0.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 5.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 0.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 4.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 2.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 8.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 22870.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 22870.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | not captured | 157.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | not captured | 8.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | not captured | 146.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | not captured | 9.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q77]` | 53.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q77]` | 13.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 258.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 9.0 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


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
<sub>← back to [fluoxetine](drugs/drug_fluoxetine/)</sub>
