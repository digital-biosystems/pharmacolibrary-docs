<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;sotrovimab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotrovimab_Sager2023_reference&quot;,&quot;label&quot;:&quot;Sager_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sotrovimab_SnchezPearson2025_reference&quot;,&quot;label&quot;:&quot;S\u00e1nchez-Pearson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotrovimab/Sotrovimab_SnchezPearson2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sotrovimab

- **generic name:** sotrovimab
- **ATC codes:** `J06BD05`
- **DrugBank:** [DB16355](https://go.drugbank.com/drugs/DB16355) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sotrovimab is a monoclonal antibody used to treat COVID-19. It has been approved and used against COVID-19, though its marketing authorisation in the European Union has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106943333](https://www.wikidata.org/wiki/Q106943333) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:55 | 1:35 | 2/0/0 | 1/0/1 | 0/0/0 | 90,753/3,669 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Sager_2023_reference](drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 (+5 cov.) | Sager JE et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12958](https://doi.org/10.1002/psp4.12958) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sánchez-Pearson_2025_reference](drugs/drug_sotrovimab/Sotrovimab_SnchezPearson2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Sánchez-Pearson Y et al., Safety, Tolerability and Pharmacokineti…, Drugs in R&D (2025) | [10.1007/s40268-025-00530-9](https://doi.org/10.1007/s40268-025-00530-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_2026_Inhibition](drugs/drug_sotrovimab/pd_Wang_2026_Inhibition.md) | %Inhibition ← sotrovimab · direct Emax (saturable) effect | — | Wang P et al., Optimizing drug combinations to resurre…, Frontiers in digital health (2026) | [10.3389/fdgth.2026.1744623](https://doi.org/10.3389/fdgth.2026.1744623) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sager_2023_Progression_of_COVID_19_through_day_29](drugs/drug_sotrovimab/pd_Sager_2023_Progression_of_COVID_19_through_day_29.md) | Progression of COVID-19 ← sotrovimab · time-to-event model | — | Sager JE et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12958](https://doi.org/10.1002/psp4.12958) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study is an in-vitro virology study assessing drug combinations for antiviral efficacy against SARS-CoV-2, and does not report pharmacokinetic disposition parameters for sotrovimab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:54 UTC</sub>
