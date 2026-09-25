<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BloodPlasma_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_blood_plasma/BloodPlasma_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BloodPlasma_Kong2022_reference&quot;,&quot;label&quot;:&quot;Kong_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_blood_plasma/BloodPlasma_Kong2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BloodPlasma_Yu2022_reference&quot;,&quot;label&quot;:&quot;Yu_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_blood_plasma/BloodPlasma_Yu2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BloodPlasma_Yuan2017_reference&quot;,&quot;label&quot;:&quot;Yuan_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_blood_plasma/BloodPlasma_Yuan2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BloodPlasma_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_blood_plasma/BloodPlasma_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BloodPlasma_Tang2017_reference&quot;,&quot;label&quot;:&quot;Tang_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_blood_plasma/BloodPlasma_Tang2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# B cell count — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Yu_2022`
- **model family:** `indirect_response_ii`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Yu H; Graham G; David OJ; Kahn JM; Savelieva M; Pigeolet E; Das Gupta A; Pingili R; Willi R; Ramanathan K; Kieseier BC; Häring DA; Bagger M; Soelberg Sørensen P et al. (2022). CNS drugs 36
  ·  DOI: [10.1007/s40263-021-00895-w](https://doi.org/10.1007/s40263-021-00895-w)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| ka (day−1) — Estimate | `Q49` · not captured | 0.157 | day−1 | not captured | exact (not captured) | Tab3:row2:col1 |
| ka (day−1) — RSE % | `Q49` · not captured | 5.80 | day−1 | not captured | exact (not captured) | Tab3:row2:col2 |
| ka (day−1) — Inter-individual variability | `Q49` · not captured | 0.652 | day−1 | not captured | exact (not captured) | Tab3:row2:col3 |
| β(ka,lwt70) — RSE % | `Q47` · not captured | 27.1 | ka,lwt70 | not captured | exact (not captured) | Tab3:row3:col2 |
| F (–) — Estimate | `Q40` · not captured | 0.685 | unit | not captured | exact (not captured) | Tab3:row4:col1 |
| F (–) — RSE % | `Q40` · not captured | 3.10 | unit | not captured | exact (not captured) | Tab3:row4:col2 |
| F (–) — Inter-individual variability | `Q40` · not captured | 0.531 | unit | not captured | exact (not captured) | Tab3:row4:col3 |
| Vc (L) — Estimate | `Q63` · not captured | 2.62 | L | not captured | exact (not captured) | Tab3:row5:col1 |
| Vc (L) — RSE % | `Q63` · not captured | 2.11 | L | not captured | exact (not captured) | Tab3:row5:col2 |
| Vc (L) — Inter-individual variability | `Q63` · not captured | 0.116 | L | not captured | exact (not captured) | Tab3:row5:col3 |
| β(Vc,lwt70) — Estimate | `Q47` · not captured | 1.2 | Vc,lwt70 | not captured | exact (not captured) | Tab3:row6:col1 |
| β(Vc,lwt70) — RSE % | `Q47` · not captured | 8.66 | Vc,lwt70 | not captured | exact (not captured) | Tab3:row6:col2 |
| ke(P) (days−1) — Estimate | `Q47` · not captured | 1.31 | days−1 | not captured | space_fold (not captured) | Tab3:row7:col1 |
| ke(P) (days−1) — RSE % | `Q47` · not captured | 8.93 | days−1 | not captured | space_fold (not captured) | Tab3:row7:col2 |
| ke(P) (days−1) — Inter-individual variability | `Q47` · not captured | 1.14 | days−1 | not captured | space_fold (not captured) | Tab3:row7:col3 |
| β(ke(P),AI) — Estimate | `Q47` · not captured | 0.713 | unit | not captured | llm_confirmed (not captured) | Tab3:row8:col1 |
| β(ke(P),AI) — RSE % | `Q47` · not captured | 22.2 | unit | not captured | llm_confirmed (not captured) | Tab3:row8:col2 |
| ksyn0 (nmol/L/day) — Estimate | `Q327` · not captured | 0.985 | nmol/L/day | not captured | llm (not captured) | Tab3:row9:col1 |
| ksyn0 (nmol/L/day) — RSE % | `Q327` · not captured | 5.91 | nmol/L/day | not captured | llm (not captured) | Tab3:row9:col2 |
| ksyn0 (nmol/L/day) — Inter-individual variability | `Q327` · not captured | 0.0559 | nmol/L/day | not captured | llm (not captured) | Tab3:row9:col3 |
| β(ksyn0,lwt70) — RSE % | `Q47` · not captured | 12.1 | ksyn0,lwt70 | not captured | exact (not captured) | Tab3:row10:col2 |
| R0 (nmol/L) — Estimate | `Q336` · not captured | 32.5 | nmol/L | not captured | exact (not captured) | Tab3:row11:col1 |
| R0 (nmol/L) — RSE % | `Q336` · not captured | 5.86 | nmol/L | not captured | exact (not captured) | Tab3:row11:col2 |
| R0 (nmol/L) — Inter-individual variability | `Q336` · not captured | 0.91 | nmol/L | not captured | exact (not captured) | Tab3:row11:col3 |
| β(R0,AI) — RSE % | `Q47` · not captured | 21.5 | R0,AI | not captured | exact (not captured) | Tab3:row12:col2 |
| β(R0,IV) — Estimate | `Q47` · not captured | 0.987 | R0,IV | not captured | exact (not captured) | Tab3:row13:col1 |
| β(R0,IV) — RSE % | `Q47` · not captured | 24.9 | R0,IV | not captured | exact (not captured) | Tab3:row13:col2 |
| CL (L/day) — Estimate | `Q22` · not captured | 0.34 | L/day | not captured | exact (not captured) | Tab3:row14:col1 |
| CL (L/day) — RSE % | `Q22` · not captured | 2.99 | L/day | not captured | exact (not captured) | Tab3:row14:col2 |
| CL (L/day) — Inter-individual variability | `Q22` · not captured | 0.486 | L/day | not captured | exact (not captured) | Tab3:row14:col3 |
| β(CL,lwt70) — Estimate | `Q47` · not captured | 1.52 | CL,lwt70 | not captured | exact (not captured) | Tab3:row15:col1 |
| β(CL,lwt70) — RSE % | `Q47` · not captured | 4.87 | CL,lwt70 | not captured | exact (not captured) | Tab3:row15:col2 |
| β(CL,IV) — RSE % | `Q47` · not captured | 10.9 | CL,IV | not captured | exact (not captured) | Tab3:row16:col2 |
| Q (L/day) — Estimate | `Q30` · not captured | 0.358 | L/day | not captured | exact (not captured) | Tab3:row17:col1 |
| Q (L/day) — RSE % | `Q30` · not captured | 10.9 | L/day | not captured | exact (not captured) | Tab3:row17:col2 |
| Q (L/day) — Inter-individual variability | `Q30` · not captured | 0.705 | L/day | not captured | exact (not captured) | Tab3:row17:col3 |
| Vp (L) — Estimate | `Q64` · not captured | 2.8 | L | not captured | exact (not captured) | Tab3:row19:col1 |
| KD (nmol/L) — Estimate | `Q331` · not captured | 0.167 | nmol/L | not captured | exact (not captured) | Tab3:row20:col1 |
| koff (day−1) — Estimate | `Q330` · not captured | 5.53 | day−1 | not captured | exact (not captured) | Tab3:row21:col1 |
| kdes (year−1) — Estimate | `Q358` · not captured | 2.58 | year−1 | not captured | llm (not captured) | Tab3:row22:col1 |
| kdes (year−1) — RSE % | `Q47` · not captured | 5.69 | year−1 | not captured | llm (not captured) | Tab3:row22:col2 |
| kdes (year−1) — Inter-individual variability | `Q312` · not captured | 0.654 | year−1 | not captured | llm (not captured) | Tab3:row22:col3 |
| ksyn∞ (nmol/L/day) — Estimate | `Q327` · not captured | 0.0554 | nmol/L/day | not captured | llm (not captured) | Tab3:row23:col1 |
| ksyn∞ (nmol/L/day) — RSE % | `Q327` · not captured | 36.3 | nmol/L/day | not captured | llm (not captured) | Tab3:row23:col2 |
| ksyn∞ (nmol/L/day) — Inter-individual variability | `Q358` · not captured | 2.16 | nmol/L/day | not captured | llm (not captured) | Tab3:row23:col3 |
| β(ksyn∞,IV) — Estimate | `Q47` · not captured | 2.49 | ksyn∞,IV | not captured | exact (not captured) | Tab3:row24:col1 |
| β(ksyn∞,IV) — RSE % | `Q47` · not captured | 25.3 | ksyn∞,IV | not captured | exact (not captured) | Tab3:row24:col2 |
| B0 (cells/µL) — RSE % | `Q324` · not captured | 1.25 | cells/µL | not captured | llm (not captured) | Tab3:row25:col2 |
| B0 (cells/µL) — Inter-individual variability | `Q312` · not captured | 0.394 | cells/µL | not captured | llm (not captured) | Tab3:row25:col3 |
| β(B0,lwt70) — Estimate | `Q47` · not captured | 0.271 | B0,lwt70 | not captured | exact (not captured) | Tab3:row27:col1 |
| β(B0,lwt70) — RSE % | `Q47` · not captured | 18.9 | B0,lwt70 | not captured | exact (not captured) | Tab3:row27:col2 |
| Emax (–) — Estimate | `Q320` · not captured | 159 | Q,IV | not captured | exact (not captured) | Tab3:row28:col1 |
| Emax (–) — RSE % | `Q320` · not captured | 3.18 | Q,IV | not captured | exact (not captured) | Tab3:row28:col2 |
| Emax (–) — Inter-individual variability | `Q320` · not captured | 0.587 | Q,IV | not captured | exact (not captured) | Tab3:row28:col3 |
| β(Emax,lBc200) — Estimate | `Q47` · not captured | 0.275 | Emax,lBc200 | not captured | exact (not captured) | Tab3:row29:col1 |
| β(Emax,lBc200) — RSE % | `Q47` · not captured | 11.6 | Emax,lBc200 | not captured | exact (not captured) | Tab3:row29:col2 |
| β(Emax,APLIOS) — Estimate | `Q47` · not captured | 0.503 | Emax,APLIOS | not captured | exact (not captured) | Tab3:row30:col1 |
| β(Emax,APLIOS) — RSE % | `Q47` · not captured | 9.35 | Emax,APLIOS | not captured | exact (not captured) | Tab3:row30:col2 |
| EC50 (mg/L) — Estimate | `Q321` · not captured | 0.0057 | mg/L | not captured | exact (not captured) | Tab3:row31:col1 |
| EC50 (mg/L) — RSE % | `Q321` · not captured | 8.52 | mg/L | not captured | exact (not captured) | Tab3:row31:col2 |
| EC50 (mg/L) — Inter-individual variability | `Q321` · not captured | 0.927 | mg/L | not captured | exact (not captured) | Tab3:row31:col3 |
| Gamma (–) — Estimate | `Q325` · not captured | 2.81 | Q,IV | not captured | exact (not captured) | Tab3:row32:col1 |
| Gamma (–) — RSE % | `Q325` · not captured | 11.6 | Q,IV | not captured | exact (not captured) | Tab3:row32:col2 |
| Gamma (–) — Inter-individual variability | `Q325` · not captured | 1.46 | Q,IV | not captured | exact (not captured) | Tab3:row32:col3 |
| kout (day−1) — Estimate | `Q328` · not captured | 0.0124 | day−1 | not captured | exact (not captured) | Tab3:row33:col1 |
| kout (day−1) — RSE % | `Q328` · not captured | 5.15 | day−1 | not captured | exact (not captured) | Tab3:row33:col2 |
| kout (day−1) — Inter-individual variability | `Q328` · not captured | 0.922 | day−1 | not captured | exact (not captured) | Tab3:row33:col3 |
| β(kout,lwt70) — RSE % | `Q47` · not captured | 19.8 | kout,lwt70 | not captured | exact (not captured) | Tab3:row34:col2 |
| β(kout,MIRROR) — RSE % | `Q47` · not captured | 14.1 | kout,MIRROR | not captured | exact (not captured) | Tab3:row35:col2 |
| QB (L/day) — Estimate | `Q54` · not captured | 0.78 | L/day | not captured | exact (not captured) | Tab3:row36:col1 |
| Vb (L) — Estimate | `Q54` · not captured | 3.7 | L | not captured | llm (not captured) | Tab3:row37:col1 |
| Vb (L) — RSE % | `Q61` · not captured | 6.26 | L | not captured | llm (not captured) | Tab3:row37:col2 |
| Vb (L) — Inter-individual variability | `Q312` · not captured | 1.37 | L | not captured | llm (not captured) | Tab3:row37:col3 |
| Corr_Vb_Emax — Estimate | `Q100` · not captured | 0.28 | Q,IV | not captured | llm (not captured) | Tab3:row38:col1 |
| Corr_Vb_Emax — RSE % | `Q100` · not captured | 22.6 | Q,IV | not captured | llm (not captured) | Tab3:row38:col2 |
| Corr_kout_Vb — RSE % | `Q328` · not captured | 17.9 | Q,IV | not captured | llm (not captured) | Tab3:row39:col2 |
| Corr_kout_Vb — Estimate | `Q328` · not captured | 0.423 | Q,IV | not captured | llm (not captured) | Tab3:row40:col1 |
| Corr_kout_Vb — RSE % | `Q328` · not captured | 12.3 | Q,IV | not captured | llm (not captured) | Tab3:row40:col2 |
| Corr_kdes_CL — Estimate | `Q358` · not captured | 0.642 | Q,IV | not captured | llm (not captured) | Tab3:row42:col1 |
| Corr_kdes_CL — RSE % | `Q358` · not captured | 10.4 | Q,IV | not captured | llm (not captured) | Tab3:row42:col2 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/84 fields) | 84 |

<details><summary>84 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | ofatumumab | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | indirect_response_ii | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q100]` | 0.28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q100]` | 22.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.34 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 2.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 0.486 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 0.358 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 10.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q30]` | 0.705 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 0.654 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 0.394 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 1.37 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 159 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 3.18 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | 0.587 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.0057 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 8.52 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 0.927 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 1.25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | 2.81 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | 11.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | 1.46 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 0.0554 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 36.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 0.985 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 5.91 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q327]` | 0.0559 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.0124 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 5.15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.922 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 17.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 0.423 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q328]` | 12.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q330]` | 5.53 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q331]` | 0.167 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | 32.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | 5.86 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q336]` | 0.91 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 2.58 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 2.16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 0.642 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 10.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 0.685 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 3.10 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q40]` | 0.531 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 12.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 21.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 0.987 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 24.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 1.52 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 4.87 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 10.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 5.69 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 2.49 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 25.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 0.271 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 18.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 0.275 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 11.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 0.503 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 9.35 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 19.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 14.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 27.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 1.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 8.66 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 1.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 8.93 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 1.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 0.713 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 22.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 0.157 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 5.80 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q49]` | 0.652 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q54]` | 0.78 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q54]` | 3.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 6.26 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 2.62 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 2.11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q63]` | 0.116 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q64]` | 2.8 | not captured | only_one_extracted |

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
<sub>← back to [blood plasma](drugs/drug_blood_plasma/)</sub>
