<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.635). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Choi_2016`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Choi HY; Choi S; Kim YH; Lim HS et al. (2016). CPT: pharmacometrics & systems pharmacology 5
  ·  DOI: [10.1002/psp4.12103](https://doi.org/10.1002/psp4.12103)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Emax, % — Estimates | `Q320` · not captured | 81.2 | not captured | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row3:col1 |
| Emax, % — RSE % | `Q320` · not captured | 11.3 | not captured | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row3:col2 |
| Emax, % — 95% CI | `Q320` · not captured | 63.2 | not captured | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row3:col3 |
| IIVEmax (CV, %) — Estimates | `Q312` · not captured | 0.10 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row4:col1 |
| IIVEmax (CV, %) — RSE % | `Q312` · not captured | 48.5 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row4:col2 |
| IIVEmax (CV, %) — 95% CI | `Q312` · not captured | 0.01 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row4:col3 |
| EC50, ng/mL — Estimates | `Q321` · not captured | 2880.0 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row5:col1 |
| EC50, ng/mL — RSE % | `Q321` · not captured | 34.1 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row5:col2 |
| EC50, ng/mL — 95% CI | `Q321` · not captured | 957.2 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row5:col3 |
| IIVEC50 (%) — Estimates | `Q321` · not captured | 0.98 | ng/mL | not captured | llm (not captured) | psp412103-tbl-0003:row6:col1 |
| IIVEC50 (%) — RSE % | `Q321` · not captured | 39.0 | ng/mL | not captured | llm (not captured) | psp412103-tbl-0003:row6:col2 |
| IIVEC50 (%) — 95% CI | `Q321` · not captured | 0.23 | ng/mL | not captured | llm (not captured) | psp412103-tbl-0003:row6:col3 |
| IIVγ (CV, %) — Estimates | `Q312` · not captured | 0.24 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row9:col1 |
| IIVγ (CV, %) — RSE % | `Q312` · not captured | 32.7 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row9:col2 |
| IIVγ (CV, %) — 95% CI | `Q312` · not captured | 0.09 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row9:col3 |
| IOVγ (CV, %) — Estimates | `Q313` · not captured | 0.09 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row10:col1 |
| IOVγ (CV, %) — RSE % | `Q313` · not captured | 35.3 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row10:col2 |
| IOVγ (CV, %) — 95% CI | `Q313` · not captured | 0.03 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row10:col3 |
| ε (additive), % — Estimates | `Q317` · not captured | 3.94 | not captured | not captured | llm (not captured) | psp412103-tbl-0003:row11:col1 |
| ε (additive), % — RSE % | `Q317` · not captured | 22.5 | not captured | not captured | llm (not captured) | psp412103-tbl-0003:row11:col2 |
| ε (proportional)e — Estimates | `Q316` · not captured | 0.06 | not captured | not captured | llm (not captured) | psp412103-tbl-0003:row12:col1 |
| ε (proportional)e — RSE % | `Q316` · not captured | 12.9 | not captured | not captured | llm (not captured) | psp412103-tbl-0003:row12:col2 |
| Emax, % — Estimates | `Q320` · not captured | 42.9 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row14:col1 |
| Emax, % — RSE % | `Q320` · not captured | 19.0 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row14:col2 |
| Emax, % — 95% CI | `Q320` · not captured | 26.9 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row14:col3 |
| EC50, ng/mL — Estimates | `Q321` · not captured | 194.0 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row15:col1 |
| EC50, ng/mL — RSE % | `Q321` · not captured | 27.4 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row15:col2 |
| EC50, ng/mL — 95% CI | `Q321` · not captured | 99.9 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row15:col3 |
| IIVEC50 (CV, %) — Estimates | `Q321` · not captured | 0.33 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row16:col1 |
| IIVEC50 (CV, %) — RSE % | `Q321` · not captured | 117.8 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row16:col2 |
| IIVEC50 (CV, %) — 95% CI | `Q321` · not captured | -0.43 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row16:col3 |
| IOVEC50 (CV, %) — Estimates | `Q313` · not captured | 0.25 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row17:col1 |
| IOVEC50 (CV, %) — RSE % | `Q313` · not captured | 155.5 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row17:col2 |
| IOVEC50 (CV, %) — 95% CI | `Q313` · not captured | -0.51 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row17:col3 |
| γ — 95% CI | `Q89` · not captured | 0.53 | not captured | not captured | llm (not captured) | psp412103-tbl-0003:row18:col3 |
| ε (proportional)e — Estimates | `Q316` · not captured | 0.06 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row19:col1 |
| ε (proportional)e — RSE % | `Q316` · not captured | 6.9 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row19:col2 |
| ε (proportional)e — 95% CI | `Q316` · not captured | 0.05 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row19:col3 |
| Emax, % — Estimates | `Q320` · not captured | 99.8 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row22:col1 |
| Emax, % — RSE % | `Q320` · not captured | 7.3 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row22:col2 |
| Emax, % — 95% CI | `Q320` · not captured | 85.5 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row22:col3 |
| IIVEmax (CV, %) — Estimates | `Q312` · not captured | 0.01 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row23:col1 |
| IIVEmax (CV, %) — RSE % | `Q312` · not captured | 52.1 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row23:col2 |
| IIVEmax (CV, %) — 95% CI | `Q312` · not captured | 0 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row23:col3 |
| EC50, ng/mL — Estimates | `Q321` · not captured | 420.0 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row24:col1 |
| EC50, ng/mL — RSE % | `Q321` · not captured | 16.4 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row24:col2 |
| EC50, ng/mL — 95% CI | `Q321` · not captured | 284.8 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row24:col3 |
| IIV + IOVEC50 (%) — Estimates | `Q312` · not captured | 0.08 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row25:col1 |
| IIV + IOVEC50 (%) — RSE % | `Q312` · not captured | 42.1 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row25:col2 |
| IIV + IOVEC50 (%) — 95% CI | `Q312` · not captured | 0.01 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row25:col3 |
| γ — 95% CI | `Q89` · not captured | 0.76 | not captured | not captured | llm (not captured) | psp412103-tbl-0003:row26:col3 |
| IIVγ (CV, %) — Estimates | `Q312` · not captured | 0.06 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row27:col1 |
| IIVγ (CV, %) — RSE % | `Q312` · not captured | 44.9 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row27:col2 |
| IIVγ (CV, %) — 95% CI | `Q312` · not captured | 0.01 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row27:col3 |
| ε (additive), % — Estimates | `Q317` · not captured | 3.03 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row28:col1 |
| ε (additive), % — RSE % | `Q325` · not captured | 34.7 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row28:col2 |
| ε (proportional)e — Estimates | `Q316` · not captured | 0.06 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row29:col1 |
| ε (proportional)e — RSE % | `Q316` · not captured | 18.3 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row29:col2 |
| ε (proportional)e — 95% CI | `Q316` · not captured | 0.04 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row29:col3 |
| Emax, % — Estimates | `Q320` · not captured | 112.0 | Simple Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row31:col1 |
| Emax, % — RSE % | `Q320` · not captured | 3.2 | Simple Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row31:col2 |
| Emax, % — 95% CI | `Q320` · not captured | 104.9 | Simple Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row31:col3 |
| EC50, ng/mL — Estimates | `Q321` · not captured | 126.0 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row32:col1 |
| EC50, ng/mL — RSE % | `Q321` · not captured | 13.1 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row32:col2 |
| EC50, ng/mL — 95% CI | `Q321` · not captured | 93.7 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row32:col3 |
| IIVEC50 (CV, %) — Estimates | `Q321` · not captured | 0.07 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row33:col1 |
| IIVEC50 (CV, %) — RSE % | `Q321` · not captured | 62.9 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row33:col2 |
| IIVEC50 (CV, %) — 95% CI | `Q321` · not captured | -0.02 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row33:col3 |
| IOVEC50 (CV, %) — Estimates | `Q313` · not captured | 0.01 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row34:col1 |
| IOVEC50 (CV, %) — RSE % | `Q313` · not captured | 90.1 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row34:col2 |
| IOVEC50 (CV, %) — 95% CI | `Q313` · not captured | -0.01 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row34:col3 |
| ε (additive), % — Estimates | `Q317` · not captured | 3.89 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row35:col1 |
| ε (additive), % — RSE % | `Q317` · not captured | 15.0 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row35:col2 |
| ε (additive), % — 95% CI | `Q317` · not captured | 2.75 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row35:col3 |
| ε (proportional)e — Estimates | `Q316` · not captured | 0.05 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row36:col1 |
| ε (proportional)e — RSE % | `Q316` · not captured | 33.2 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row36:col2 |
| ε (proportional)e — 95% CI | `Q38` · not captured | 0.02 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row36:col3 |
| Emax, IU/mL — Estimates | `Q320` · not captured | 3.24 | IU/mL | not captured | exact (not captured) | psp412103-tbl-0003:row39:col1 |
| Emax, IU/mL — RSE % | `Q320` · not captured | 21.3 | IU/mL | not captured | exact (not captured) | psp412103-tbl-0003:row39:col2 |
| Emax, IU/mL — 95% CI | `Q320` · not captured | 1.89 | IU/mL | not captured | exact (not captured) | psp412103-tbl-0003:row39:col3 |
| IIVEmax (CV, %) — Estimates | `Q312` · not captured | 0.04 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row40:col1 |
| IIVEmax (CV, %) — RSE % | `Q312` · not captured | 62.3 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row40:col2 |
| IIVEmax (CV, %) — 95% CI | `Q312` · not captured | 0.00 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row40:col3 |
| EC50, ng/mL — Estimates | `Q321` · not captured | 695.0 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row41:col1 |
| EC50, ng/mL — RSE % | `Q321` · not captured | 26.0 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row41:col2 |
| EC50, ng/mL — 95% CI | `Q321` · not captured | 340.2 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row41:col3 |
| IIV + IOVEC50 (%) — Estimates | `Q312` · not captured | 0.005 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row42:col1 |
| IIV + IOVEC50 (%) — RSE % | `Q312` · not captured | 48.8 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row42:col2 |
| IIV + IOVEC50 (%) — 95% CI | `Q312` · not captured | 0.000 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row42:col3 |
| γ — 95% CI | `Q89` · not captured | 1.10 | not captured | not captured | llm (not captured) | psp412103-tbl-0003:row43:col3 |
| IIVγ (CV, %) — Estimates | `Q312` · not captured | 0.02 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row44:col1 |
| IIVγ (CV, %) — RSE % | `Q312` · not captured | 51.4 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row44:col2 |
| IIVγ (CV, %) — 95% CI | `Q312` · not captured | 0.00 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row44:col3 |
| ε (proportional)e — Estimates | `Q316` · not captured | 0.14 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row46:col1 |
| ε (proportional)e — RSE % | `Q316` · not captured | 8.1 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row46:col2 |
| ε (proportional)e — 95% CI | `Q316` · not captured | 0.12 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row46:col3 |
| ε (proportional)e — RSE % | `Q316` · not captured | 13.0 | Linear model | not captured | llm (not captured) | psp412103-tbl-0003:row51:col2 |
| EMAX, INR — Estimates | `Q320` · not captured | 1.32 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row54:col1 |
| EMAX, INR — RSE % | `Q320` · not captured | 20.3 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row54:col2 |
| EMAX, INR — 95% CI | `Q320` · not captured | 0.79 | Sigmoid Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row54:col3 |
| IIVEmax (CV, %) — Estimates | `Q312` · not captured | 0.48 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row55:col1 |
| IIVEmax (CV, %) — RSE % | `Q312` · not captured | 43.0 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row55:col2 |
| IIVEmax (CV, %) — 95% CI | `Q312` · not captured | 0.08 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row55:col3 |
| EC50, SAD, ng/mL — Estimates | `Q321` · not captured | 426.0 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row56:col1 |
| EC50, SAD, ng/mL — RSE % | `Q321` · not captured | 24.4 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row56:col2 |
| EC50, SAD, ng/mL — 95% CI | `Q321` · not captured | 222.2 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row56:col3 |
| EC50, SAD/MAD, ng/mL — Estimates | `Q321` · not captured | 1350.0 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row57:col1 |
| EC50, SAD/MAD, ng/mL — RSE % | `Q321` · not captured | 27.3 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row57:col2 |
| EC50, SAD/MAD, ng/mL — 95% CI | `Q321` · not captured | 628.7 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row57:col3 |
| IIVEC50 (CV, %) — Estimates | `Q321` · not captured | 0.89 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row58:col1 |
| IIVEC50 (CV, %) — RSE % | `Q321` · not captured | 52.3 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row58:col2 |
| IIVEC50 (CV, %) — 95% CI | `Q321` · not captured | -0.02 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row58:col3 |
| γ — 95% CI | `Q89` · not captured | 1.05 | not captured | not captured | llm (not captured) | psp412103-tbl-0003:row59:col3 |
| IIVγ (CV, %) — Estimates | `Q312` · not captured | 0.11 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row60:col1 |
| IIVγ (CV, %) — RSE % | `Q312` · not captured | 74.1 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row60:col2 |
| IIVγ (CV, %) — 95% CI | `Q312` · not captured | -0.05 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row60:col3 |
| IOVγ (CV, %) — Estimates | `Q313` · not captured | 0.04 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row61:col1 |
| IOVγ (CV, %) — RSE % | `Q313` · not captured | 69.6 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row61:col2 |
| IOVγ (CV, %) — 95% CI | `Q313` · not captured | -0.01 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row61:col3 |
| ε (proportional)e — Estimates | `Q316` · not captured | 0.05 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row62:col1 |
| ε (proportional)e — RSE % | `Q316` · not captured | 7.7 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row62:col2 |
| ε (proportional)e — 95% CI | `Q316` · not captured | 0.04 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row62:col3 |
| Emax, INR — Estimates | `Q320` · not captured | 0.71 | Simple Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row64:col1 |
| Emax, INR — RSE % | `Q320` · not captured | 26.5 | Simple Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row64:col2 |
| Emax, INR — 95% CI | `Q320` · not captured | 104.9 | Simple Emax model | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row64:col3 |
| EC50, ng/mL — Estimates | `Q321` · not captured | 434.0 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row65:col1 |
| EC50, ng/mL — RSE % | `Q321` · not captured | 37.3 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row65:col2 |
| EC50, ng/mL — 95% CI | `Q321` · not captured | 116.5 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row65:col3 |
| IIV + IOVEC50 (CV, %) — Estimates | `Q312` · not captured | 0.06 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row66:col1 |
| IIV + IOVEC50 (CV, %) — RSE % | `Q312` · not captured | 53.9 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row66:col2 |
| IIV + IOVEC50 (CV, %) — 95% CI | `Q313` · not captured | 0.00 | CV, % | not captured | llm_corrected (not captured) | psp412103-tbl-0003:row66:col3 |
| ε (additive), INR — Estimates | `Q317` · not captured | 0.04 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row67:col1 |
| ε (additive), INR — RSE % | `Q317` · not captured | 6.2 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row67:col2 |
| ε (additive), INR — 95% CI | `Q317` · not captured | 0.04 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row67:col3 |
| Emax, sec — Estimates | `Q320` · not captured | 15.2 | sec | not captured | exact (not captured) | psp412103-tbl-0003:row70:col1 |
| Emax, sec — RSE % | `Q320` · not captured | 21.5 | sec | not captured | exact (not captured) | psp412103-tbl-0003:row70:col2 |
| Emax, sec — 95% CI | `Q320` · not captured | 8.8 | sec | not captured | exact (not captured) | psp412103-tbl-0003:row70:col3 |
| IIVEmax (CV, %) — Estimates | `Q312` · not captured | 0.41 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row71:col1 |
| IIVEmax (CV, %) — RSE % | `Q312` · not captured | 64.7 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row71:col2 |
| IIVEmax (CV, %) — 95% CI | `Q312` · not captured | -0.11 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row71:col3 |
| EC50, SAD, ng/mL — Estimates | `Q321` · not captured | 563.0 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row72:col1 |
| EC50, SAD, ng/mL — RSE % | `Q321` · not captured | 34.3 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row72:col2 |
| EC50, SAD, ng/mL — 95% CI | `Q321` · not captured | 184.7 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row72:col3 |
| EC50, SAD/MAD, ng/mL — Estimates | `Q321` · not captured | 1450.0 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row73:col1 |
| EC50, SAD/MAD, ng/mL — RSE % | `Q321` · not captured | 30.0 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row73:col2 |
| EC50, SAD/MAD, ng/mL — 95% CI | `Q321` · not captured | 597.4 | ng/mL | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row73:col3 |
| IIVEC50 (CV, %) — Estimates | `Q321` · not captured | 0.77 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row74:col1 |
| IIVEC50 (CV, %) — RSE % | `Q321` · not captured | 64.5 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row74:col2 |
| IIVEC50 (CV, %) — 95% CI | `Q321` · not captured | -0.20 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row74:col3 |
| γ — 95% CI | `Q89` · not captured | 0.98 | not captured | not captured | llm (not captured) | psp412103-tbl-0003:row75:col3 |
| IIVγ (CV, %) — Estimates | `Q312` · not captured | 0.04 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row76:col1 |
| IIVγ (CV, %) — RSE % | `Q312` · not captured | 65.0 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row76:col2 |
| IIVγ (CV, %) — 95% CI | `Q312` · not captured | -0.01 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row76:col3 |
| IOVγ (CV, %) — Estimates | `Q313` · not captured | 0.03 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row77:col1 |
| IOVγ (CV, %) — RSE % | `Q313` · not captured | 60.1 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row77:col2 |
| IOVγ (CV, %) — 95% CI | `Q313` · not captured | -0.01 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row77:col3 |
| ε (proportional)e — Estimates | `Q316` · not captured | 0.04 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row78:col1 |
| ε (proportional)e — RSE % | `Q316` · not captured | 6.9 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row78:col2 |
| ε (proportional)e — 95% CI | `Q316` · not captured | 0.04 | Sigmoid Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row78:col3 |
| Emax, sec — Estimates | `Q320` · not captured | 6.86 | sec | not captured | exact (not captured) | psp412103-tbl-0003:row80:col1 |
| Emax, sec — RSE % | `Q320` · not captured | 39.1 | sec | not captured | exact (not captured) | psp412103-tbl-0003:row80:col2 |
| Emax, sec — 95% CI | `Q320` · not captured | 1.61 | sec | not captured | exact (not captured) | psp412103-tbl-0003:row80:col3 |
| EC50, ng/mL — Estimates | `Q321` · not captured | 418.0 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row81:col1 |
| EC50, ng/mL — RSE % | `Q321` · not captured | 60.3 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row81:col2 |
| EC50, ng/mL — 95% CI | `Q321` · not captured | -75.9 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row81:col3 |
| IIV + IOVEC50 (CV, %) — Estimates | `Q312` · not captured | 0.07 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row82:col1 |
| IIV + IOVEC50 (CV, %) — RSE % | `Q312` · not captured | 71.5 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row82:col2 |
| IIV + IOVEC50 (CV, %) — 95% CI | `Q313` · not captured | 0.00 | CV, % | not captured | llm_corrected (not captured) | psp412103-tbl-0003:row82:col3 |
| ε (additive), sec — Estimates | `Q317` · not captured | 0.04 | sec | not captured | llm (not captured) | psp412103-tbl-0003:row83:col1 |
| Emax, SAD, sec — Estimates | `Q320` · not captured | 16.9 | sec | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row86:col1 |
| Emax, SAD, sec — RSE % | `Q320` · not captured | 13.1 | sec | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row86:col2 |
| Emax, SAD, sec — 95% CI | `Q320` · not captured | 12.5 | sec | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row86:col3 |
| Emax, SAD/MAD, sec — Estimates | `Q320` · not captured | 20.4 | sec | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row87:col1 |
| Emax, SAD/MAD, sec — RSE % | `Q320` · not captured | 12.5 | sec | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row87:col2 |
| Emax, SAD/MAD, sec — 95% CI | `Q320` · not captured | 15.4 | sec | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row87:col3 |
| IIVEmax (CV, %) — Estimates | `Q312` · not captured | 0.09 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row88:col1 |
| IIVEmax (CV, %) — RSE % | `Q312` · not captured | 86.1 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row88:col2 |
| IIVEmax (CV, %) — 95% CI | `Q312` · not captured | -0.06 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row88:col3 |
| EC50, ng/mL — Estimates | `Q321` · not captured | 573.0 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row89:col1 |
| EC50, ng/mL — RSE % | `Q321` · not captured | 22.7 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row89:col2 |
| EC50, ng/mL — 95% CI | `Q321` · not captured | 318.2 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row89:col3 |
| IIVEC50 (CV, %) — Estimates | `Q321` · not captured | 0.33 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row90:col1 |
| IIVEC50 (CV, %) — RSE % | `Q321` · not captured | 62.3 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row90:col2 |
| IIVEC50 (CV, %) — 95% CI | `Q321` · not captured | -0.07 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row90:col3 |
| γ — 95% CI | `Q89` · not captured | 1.02 | not captured | not captured | llm (not captured) | psp412103-tbl-0003:row91:col3 |
| IIVγ (CV, %) — Estimates | `Q312` · not captured | 0.19 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row92:col1 |
| IIVγ (CV, %) — RSE % | `Q312` · not captured | 39.2 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row92:col2 |
| IIVγ (CV, %) — 95% CI | `Q312` · not captured | 0.04 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row92:col3 |
| IOVγ (CV, %) — Estimates | `Q313` · not captured | 0.03 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row93:col1 |
| IOVγ (CV, %) — RSE % | `Q313` · not captured | 35.5 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row93:col2 |
| IOVγ (CV, %) — 95% CI | `Q313` · not captured | 0.02 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row93:col3 |
| ε (proportional)e — Estimates | `Q316` · not captured | 0.05 | seconds | not captured | llm (not captured) | psp412103-tbl-0003:row94:col1 |
| Emax, sec — Estimates | `Q320` · not captured | 12.4 | sec | not captured | exact (not captured) | psp412103-tbl-0003:row96:col1 |
| Emax, sec — RSE % | `Q320` · not captured | 10.3 | sec | not captured | exact (not captured) | psp412103-tbl-0003:row96:col2 |
| Emax, sec — 95% CI | `Q320` · not captured | 9.9 | sec | not captured | exact (not captured) | psp412103-tbl-0003:row96:col3 |
| EC50, ng/mL — Estimates | `Q321` · not captured | 135.0 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row97:col1 |
| EC50, ng/mL — RSE % | `Q321` · not captured | 14.3 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row97:col2 |
| EC50, ng/mL — 95% CI | `Q321` · not captured | 97.2 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row97:col3 |
| γ — 95% CI | `Q89` · not captured | 0.61 | not captured | not captured | llm (not captured) | psp412103-tbl-0003:row98:col3 |
| IIV + IOVγ (CV, %) — Estimates | `Q312` · not captured | 0.27 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row99:col1 |
| IIV + IOVγ (CV, %) — RSE % | `Q312` · not captured | 38.5 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row99:col2 |
| IIV + IOVγ (CV, %) — 95% CI | `Q312` · not captured | 0.07 | CV, % | not captured | llm_confirmed (not captured) | psp412103-tbl-0003:row99:col3 |
| ε (additive), sec — Estimates | `Q317` · not captured | 0.04 | sec | not captured | llm (not captured) | psp412103-tbl-0003:row100:col1 |
| ε (additive) — Estimates | `Q317` · not captured | 9.28 | additive | not captured | llm (not captured) | psp412103-tbl-0003:row105:col1 |
| ε (additive) — RSE % | `Q317` · not captured | 10.9 | additive | not captured | llm (not captured) | psp412103-tbl-0003:row105:col2 |
| Emax — Estimates | `Q320` · not captured | 3.83 | Simple Emax model | not captured | exact (not captured) | psp412103-tbl-0003:row108:col1 |
| Emax — RSE % | `Q320` · not captured | 11.4 | Simple Emax model | not captured | exact (not captured) | psp412103-tbl-0003:row108:col2 |
| Emax — 95% CI | `Q320` · not captured | 2.98 | Simple Emax model | not captured | exact (not captured) | psp412103-tbl-0003:row108:col3 |
| EC50, ng/mL — Estimates | `Q321` · not captured | 759.0 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row110:col1 |
| EC50, ng/mL — RSE % | `Q321` · not captured | 15.2 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row110:col2 |
| EC50, ng/mL — 95% CI | `Q321` · not captured | 533.6 | ng/mL | not captured | exact (not captured) | psp412103-tbl-0003:row110:col3 |
| IIVEC50 (CV, %) — Estimates | `Q321` · not captured | 0.29 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row111:col1 |
| IIVEC50 (CV, %) — RSE % | `Q321` · not captured | 33.9 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row111:col2 |
| IIVEC50 (CV, %) — 95% CI | `Q321` · not captured | 0.10 | CV, % | not captured | llm (not captured) | psp412103-tbl-0003:row111:col3 |
| ε (additive) — Estimates | `Q317` · not captured | 0.08 | additive | not captured | llm (not captured) | psp412103-tbl-0003:row112:col1 |
| ε (additive) — RSE % | `Q317` · not captured | 20.6 | additive | not captured | llm (not captured) | psp412103-tbl-0003:row112:col2 |
| ε (proportional)e — Estimates | `Q316` · not captured | 0.17 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row113:col1 |
| ε (proportional)e — RSE % | `Q316` · not captured | 14.3 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row113:col2 |
| ε (proportional)e — 95% CI | `Q38` · not captured | 0.12 | Simple Emax model | not captured | llm (not captured) | psp412103-tbl-0003:row113:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.635 (186/293 fields) | 107 |

<details><summary>107 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `effect_direction` | inhibition | stimulation | mismatch |
| `gpt-oss:120b` | `parameters[Q100]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 52.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 42.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 0.01 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 62.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 48.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 0.000 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 48.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 43.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 0.06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 53.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 0.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 64.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 0.07 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 71.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | not captured | 0.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q312]` | 86.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q313]` | 0.25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q313]` | -0.51 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q313]` | 0.01 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q313]` | -0.01 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q313]` | 0.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q313]` | 0.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 0.12 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 0.04 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 0.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 0.29 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 0.21 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 1.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q316]` | not captured | 0.05 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 9.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 0.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 10.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 7.30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | 20.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 0.05 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 2.20 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 34.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 0.97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 0.04 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 12.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 0.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 0.04 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 11.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 0.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 9.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q317]` | not captured | 0.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 52.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 62.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 48.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 43.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 64.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 86.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 33.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 117.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | -0.51 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 42.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.01 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 62.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.01 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | -0.01 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 48.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.000 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 52.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.06 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 53.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 64.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 0.07 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 71.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 62.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | 33.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | 117.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | 62.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | 52.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | 64.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | 62.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.90 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.53 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.90 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.76 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | 34.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.23 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.05 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.98 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.07 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 14.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.77 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.60 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.37 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.94 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 0.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | 0.12 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | 0.02 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 0.53 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 0.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 1.10 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 1.05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 0.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 1.02 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q89]` | 0.61 | not captured | only_one_extracted |

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
<sub>← back to [coagulation factor X](drugs/drug_coagulation_factor_x/)</sub>
