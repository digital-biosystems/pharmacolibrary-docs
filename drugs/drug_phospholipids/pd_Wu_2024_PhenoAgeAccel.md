<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phospholipids_Hummel1975_non_pregnant_female_rats&quot;,&quot;label&quot;:&quot;Hummel_1975_non pregnant female rats&quot;,&quot;href&quot;:&quot;drugs/drug_phospholipids/Phospholipids_Hummel1975_non_pregnant_female_rats.md&quot;,&quot;status&quot;:&quot;None \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.146). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Wu_2024`
- **model family:** `linear`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Wu D; Jia Y; Liu Y; Shang M et al. (2024). Frontiers in nutrition 11
  ·  DOI: [10.3389/fnut.2024.1424156](https://doi.org/10.3389/fnut.2024.1424156)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Q1 [0.93,504] — Quantile 3(−2.83, 0.13] | `Q30` · not captured | 1672 | weighted % | not captured | llm_confirmed (not captured) | tab1:row45:col4 |
| Q2 (504, 2,160] — Overall | `Q99` · not captured | 6787 | weighted % | not captured | llm_confirmed (not captured) | tab1:row46:col1 |
| Q2 (504, 2,160] — Quantile 1[−18.38, −5.65] | `Q99` · not captured | 1863 | weighted % | not captured | llm_confirmed (not captured) | tab1:row46:col2 |
| Q2 (504, 2,160] — Quantile 2(−5.65, −2.83] | `Q99` · not captured | 1685 | weighted % | not captured | llm_confirmed (not captured) | tab1:row46:col3 |
| Q2 (504, 2,160] — Quantile 3(−2.83, 0.13] | `Q99` · not captured | 1658 | weighted % | not captured | llm_confirmed (not captured) | tab1:row46:col4 |
| Q2 (504, 2,160] — Quantile 4(0.13, 23.38] | `Q99` · not captured | 1581 | weighted % | not captured | llm_confirmed (not captured) | tab1:row46:col5 |
| Q3 (2,160,58,320] — Overall | `Q308` · not captured | 6731 | weighted % | not captured | llm_confirmed (not captured) | tab1:row47:col1 |
| Q3 (2,160,58,320] — Quantile 1[−18.38, −5.65] | `Q308` · not captured | 1574 | weighted % | not captured | llm_confirmed (not captured) | tab1:row47:col2 |
| Q3 (2,160,58,320] — Quantile 2(−5.65, −2.83] | `Q308` · not captured | 1675 | weighted % | not captured | llm_confirmed (not captured) | tab1:row47:col3 |
| Q3 (2,160,58,320] — Quantile 3(−2.83, 0.13] | `Q308` · not captured | 1752 | weighted % | not captured | llm_confirmed (not captured) | tab1:row47:col4 |
| Q3 (2,160,58,320] — Quantile 4(0.13, 23.38] | `Q308` · not captured | 1730 | weighted % | not captured | llm_confirmed (not captured) | tab1:row47:col5 |
| Q1 [0,44.27] — Quantile 3(−2.83, 0.13] | `Q30` · not captured | 1787 | weighted % | not captured | llm_confirmed (not captured) | tab1:row49:col4 |
| Q2 (44.27,56.38] — Overall | `Q99` · not captured | 6779 | weighted % | not captured | llm_confirmed (not captured) | tab1:row50:col1 |
| Q2 (44.27,56.38] — Quantile 1[−18.38, −5.65] | `Q99` · not captured | 1648 | weighted % | not captured | llm_confirmed (not captured) | tab1:row50:col2 |
| Q2 (44.27,56.38] — Quantile 2(−5.65, −2.83] | `Q99` · not captured | 1660 | weighted % | not captured | llm_confirmed (not captured) | tab1:row50:col3 |
| Q2 (44.27,56.38] — Quantile 3(−2.83, 0.13] | `Q99` · not captured | 1736 | weighted % | not captured | llm_confirmed (not captured) | tab1:row50:col4 |
| Q2 (44.27,56.38] — Quantile 4(0.13, 23.38] | `Q99` · not captured | 1735 | weighted % | not captured | llm_confirmed (not captured) | tab1:row50:col5 |
| Q3 (56.38,96.35] — Overall | `Q308` · not captured | 6779 | weighted % | not captured | llm_confirmed (not captured) | tab1:row51:col1 |
| Q3 (56.38,96.35] — Quantile 1[−18.38, −5.65] | `Q308` · not captured | 2121 | weighted % | not captured | llm_confirmed (not captured) | tab1:row51:col2 |
| Q3 (56.38,96.35] — Quantile 2(−5.65, −2.83] | `Q308` · not captured | 1788 | weighted % | not captured | llm_confirmed (not captured) | tab1:row51:col3 |
| Q3 (56.38,96.35] — Quantile 3(−2.83, 0.13] | `Q308` · not captured | 1559 | weighted % | not captured | llm_confirmed (not captured) | tab1:row51:col4 |
| Q3 (56.38,96.35] — Quantile 4(0.13, 23.38] | `Q308` · not captured | 1311 | weighted % | not captured | llm_confirmed (not captured) | tab1:row51:col5 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.146 (23/157 fields) | 134 |

<details><summary>134 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `effect_form` | unknown | additive | mismatch |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 2021 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 2703 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 828 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 504 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 1841 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 793 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 1116 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 1672 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 1787 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 4044 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 2937 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 1416 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 4615 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q308]` | not captured | 3267 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 893 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 914 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 755 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 783 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1532 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1725 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 752 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 2202 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 930 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1805 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1082 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 2598 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1003 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1237 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 3090 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 2456 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1938 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 2023 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 2083 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1542 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1248 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 3214 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 2115 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 622 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 882 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 738 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 475 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1651 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 753 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1351 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1647 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1724 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 1672 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1776 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 6779 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1315 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 1636 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 1787 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 2041 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 3599 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 927 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 844 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 991 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q314]` | not captured | 1.90 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 20337 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 5084 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 5082 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 5087 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1073 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 3249 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 6131 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1434 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 3429 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 951 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 6075 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 6999 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1800 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1559 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 7263 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 11244 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 5064 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1115 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1139 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1288 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1522 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 7754 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1886 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 7519 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1856 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 3095 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 698 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 2294 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 7317 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1906 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1919 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 3352 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 989 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 842 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 728 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 4279 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 3634 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1815 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 1450 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 3393 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 699 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 3752 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 964 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q84]` | not captured | 3812 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q84]` | not captured | 877 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q84]` | not captured | 842 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q87]` | not captured | 4308 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q91]` | not captured | 16126 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q91]` | not captured | 12378 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q91]` | not captured | 5756 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q91]` | not captured | 18536 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 969 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 797 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 1440 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 2753 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 856 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 1687 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 5084 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 1835 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 1562 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 976 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 2995 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 1907 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 2038 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 687 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 577 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 1059 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 748 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 1669 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 2504 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 3582 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 407 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 2580 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 923 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q99]` | not captured | 955 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [phospholipids](drugs/drug_phospholipids/)</sub>
