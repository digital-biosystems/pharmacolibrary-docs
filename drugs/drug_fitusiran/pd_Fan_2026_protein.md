<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fitusiran_Sten2023_reference&quot;,&quot;label&quot;:&quot;Sten_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Sten2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_humansa&quot;,&quot;label&quot;:&quot;Fan_2026_humansa&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_humansa.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_micea&quot;,&quot;label&quot;:&quot;Fan_2026_micea&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_micea.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_monkeysc&quot;,&quot;label&quot;:&quot;Fan_2026_monkeysc&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_monkeysc.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_ratsb&quot;,&quot;label&quot;:&quot;Fan_2026_ratsb&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_ratsb.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# target protein — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.43). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Fan_2026`
- **model family:** `indirect_response_ii`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Fan X; Xiao Y; Cao K; Zhang R; Yan X et al. (2026). Molecular therapy. Nucleic acids 37
  ·  DOI: [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| ka (1/h) — Micea | `Q49` · not captured | 1.48 | units | not captured | exact (not captured) | tbl1:row3:col2 |
| ka (1/h) — Ratsb | `Q49` · not captured | 0.71 | units | not captured | exact (not captured) | tbl1:row3:col3 |
| ka (1/h) — Monkeysc | `Q49` · not captured | 0.38 | units | not captured | exact (not captured) | tbl1:row3:col4 |
| ka (1/h) — Humansa | `Q49` · not captured | 0.23 | units | not captured | exact (not captured) | tbl1:row3:col5 |
| Fu (1/h) — Micea | `Q46` · not captured | 0.0066 | units | not captured | exact (not captured) | tbl1:row4:col2 |
| Fu (1/h) — Ratsb | `Q46` · not captured | 0.21 | units | not captured | exact (not captured) | tbl1:row4:col3 |
| Fu (1/h) — Monkeysc | `Q46` · not captured | 0.39 | units | not captured | exact (not captured) | tbl1:row4:col4 |
| Fu (1/h) — Humansa | `Q46` · not captured | 39.32 | units | not captured | exact (not captured) | tbl1:row4:col5 |
| PSLiver (L/h) — Micea | `Q358` · not captured | 0.96 | L/h | not captured | llm (not captured) | tbl1:row5:col2 |
| PSLiver (L/h) — Ratsb | `Q358` · not captured | 211 | L/h | not captured | llm (not captured) | tbl1:row5:col3 |
| PSLiver (L/h) — Monkeysc | `Q358` · not captured | 56.73 | L/h | not captured | llm (not captured) | tbl1:row5:col4 |
| PSLiver (L/h) — Humansa | `Q358` · not captured | 144.7 | L/h | not captured | llm (not captured) | tbl1:row5:col5 |
| KDEGD (1/h) — Humansa | `Q358` · not captured | 0.014 | units | not captured | llm (not captured) | tbl1:row8:col5 |
| RTOT0 (nM) — Micea | `Q333` · not captured | 33.1 | nM | not captured | llm (not captured) | tbl1:row9:col2 |
| RTOT0 (nM) — Ratsb | `Q333` · not captured | 33.1 | nM | not captured | llm (not captured) | tbl1:row9:col3 |
| RTOT0 (nM) — Monkeysc | `Q333` · not captured | 33.1 | nM | not captured | llm (not captured) | tbl1:row9:col4 |
| RTOT0 (nM) — Humansa | `Q333` · not captured | 14.34 | nM | not captured | llm (not captured) | tbl1:row9:col5 |
| Vm (nmol/h) — Micea | `Q66` · not captured | 0.98 | nmol/h | not captured | special_case (not captured) | tbl1:row10:col2 |
| Vm (nmol/h) — Ratsb | `Q66` · not captured | 1.94 | nmol/h | not captured | special_case (not captured) | tbl1:row10:col3 |
| Vm (nmol/h) — Monkeysc | `Q66` · not captured | 5.81 | nmol/h | not captured | special_case (not captured) | tbl1:row10:col4 |
| Vm (nmol/h) — Humansa | `Q66` · not captured | 4.37 | nmol/h | not captured | special_case (not captured) | tbl1:row10:col5 |
| Km (∗105 nM) — Micea | `Q1` · not captured | 27.44 | units | not captured | exact (not captured) | tbl1:row11:col2 |
| Km (∗105 nM) — Ratsb | `Q1` · not captured | 37.73 | units | not captured | exact (not captured) | tbl1:row11:col3 |
| Km (∗105 nM) — Monkeysc | `Q1` · not captured | 27.44 | units | not captured | exact (not captured) | tbl1:row11:col4 |
| Km (∗105 nM) — Humansa | `Q1` · not captured | 97.75 | units | not captured | exact (not captured) | tbl1:row11:col5 |
| koff (1/h) — Micea | `Q330` · not captured | 0.021 | units | not captured | exact (not captured) | tbl1:row12:col2 |
| koff (1/h) — Ratsb | `Q330` · not captured | 0.021 | units | not captured | exact (not captured) | tbl1:row12:col3 |
| koff (1/h) — Monkeysc | `Q330` · not captured | 0.021 | units | not captured | exact (not captured) | tbl1:row12:col4 |
| koff (1/h) — Humansa | `Q330` · not captured | 0.023 | units | not captured | exact (not captured) | tbl1:row12:col5 |
| fesc — Humansa | `Q358` · not captured | 0.037 | nM−1·h−1 | not captured | llm (not captured) | tbl1:row14:col5 |
| kint (1/h) — Micea | `Q334` · not captured | 7.84 | nM−1·h−1 | not captured | exact (not captured) | tbl1:row15:col2 |
| kint (1/h) — Ratsb | `Q334` · not captured | 1215 | nM−1·h−1 | not captured | exact (not captured) | tbl1:row15:col3 |
| kint (1/h) — Monkeysc | `Q334` · not captured | 2.01 | nM−1·h−1 | not captured | exact (not captured) | tbl1:row15:col4 |
| kint (1/h) — Humansa | `Q334` · not captured | 4.69 | nM−1·h−1 | not captured | exact (not captured) | tbl1:row15:col5 |
| Kass (∗10−6 h−1) — Ratsb | `Q47` · not captured | 0.0051 | nM | not captured | llm (not captured) | tbl1:row20:col3 |
| Kdis (∗10−3 h−1) — Micea | `Q331` · not captured | 0.14 | nM | not captured | llm (not captured) | tbl1:row21:col2 |
| Kdis (∗10−3 h−1) — Ratsb | `Q331` · not captured | 0.073 | nM | not captured | llm (not captured) | tbl1:row21:col3 |
| Kdis (∗10−3 h−1) — Monkeysc | `Q331` · not captured | 0.14 | nM | not captured | llm (not captured) | tbl1:row21:col4 |
| Kdis (∗10−3 h−1) — Humansa | `Q331` · not captured | 0.0061 | nM | not captured | llm (not captured) | tbl1:row21:col5 |
| KDEGE (∗10−6 h−1) — Micea | `Q358` · not captured | 0.0083 | nM | not captured | llm (not captured) | tbl1:row22:col2 |
| KDEGE (∗10−6 h−1) — Ratsb | `Q47` · not captured | 0.014 | nM | not captured | llm (not captured) | tbl1:row22:col3 |
| KDEGE (∗10−6 h−1) — Monkeysc | `Q47` · not captured | 0.0083 | nM | not captured | llm (not captured) | tbl1:row22:col4 |
| KDEGE (∗10−6 h−1) — Humansa | `Q358` · not captured | 0.0076 | nM | not captured | llm (not captured) | tbl1:row22:col5 |
| kdeg, m (1/h) — Micea | `Q328` · not captured | 0.0012 | nM | not captured | llm_confirmed (not captured) | tbl1:row26:col2 |
| kdeg, m (1/h) — Ratsb | `Q328` · not captured | 0.0022 | nM | not captured | llm_confirmed (not captured) | tbl1:row26:col3 |
| kdeg, m (1/h) — Monkeysc | `Q328` · not captured | 0.0015 | nM | not captured | llm_confirmed (not captured) | tbl1:row26:col4 |
| kdeg, m (1/h) — Humansa | `Q328` · not captured | 0.00016 | nM | not captured | llm_confirmed (not captured) | tbl1:row26:col5 |
| kdeg, p (1/h) — Micea | `Q328` · not captured | 0.039 | nM | not captured | llm_confirmed (not captured) | tbl1:row27:col2 |
| kdeg, p (1/h) — Monkeysc | `Q328` · not captured | 0.083 | nM | not captured | llm_confirmed (not captured) | tbl1:row27:col4 |
| kdeg, p (1/h) — Humansa | `Q328` · not captured | 0.037 | nM | not captured | llm_confirmed (not captured) | tbl1:row27:col5 |
| Smax — Micea | `Q32` · not captured | 33.79 | nM | not captured | llm (not captured) | tbl1:row28:col2 |
| Smax — Ratsb | `Q32` · not captured | 66.48 | nM | not captured | llm (not captured) | tbl1:row28:col3 |
| Smax — Monkeysc | `Q32` · not captured | 33.79 | nM | not captured | llm (not captured) | tbl1:row28:col4 |
| Smax — Humansa | `Q32` · not captured | 33.79 | nM | not captured | llm (not captured) | tbl1:row28:col5 |
| SC50 (nM) — Micea | `Q322` · not captured | 12.74 | nM | not captured | llm (not captured) | tbl1:row29:col2 |
| SC50 (nM) — Ratsb | `Q322` · not captured | 0.050 | nM | not captured | llm (not captured) | tbl1:row29:col3 |
| SC50 (nM) — Monkeysc | `Q322` · not captured | 20.93 | nM | not captured | llm (not captured) | tbl1:row29:col4 |
| SC50 (nM) — Humansa | `Q322` · not captured | 0.0050 | nM | not captured | llm (not captured) | tbl1:row29:col5 |
| γ1 — Humansa | `Q89` · not captured | 0.074 | not captured | not captured | llm (not captured) | tbl1:row30:col5 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.43 (46/107 fields) | 61 |

<details><summary>61 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | free cytoplasmic siRNA | siRNA (cytoplasmic) | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_ii | transduction | mismatch |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 0.96 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 211 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 56.73 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | not captured | 144.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 33.79 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 66.48 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 33.79 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 33.79 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.050 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 20.93 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.0050 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.050 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 20.93 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.0050 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.54 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.54 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.074 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.79 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.39 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.72 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 0.040 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 0.014 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.0022 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.0015 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | not captured | 0.019 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | not captured | 0.01948 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | not captured | 0.037 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | not captured | 0.013 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | not captured | 0.0051 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | not captured | 0.013 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | not captured | 0.18 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 33.79 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 66.48 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 33.79 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 33.79 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | not captured | 0.0083 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | not captured | 0.0076 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.037 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.0083 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.0076 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.96 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 211 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 56.73 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 144.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.014 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 1.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 3.19 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 1.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 0.18 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 2.04 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 1.85 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 2.04 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q410]` | not captured | 4.24 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 0.0051 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | 0.0022 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | 0.0015 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | 0.012 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | not captured | 0.0012 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 0.074 | not captured | only_one_extracted |

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
<sub>← back to [fitusiran](drugs/drug_fitusiran/)</sub>
