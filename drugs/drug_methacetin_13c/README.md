<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;methacetin (13C)&quot;}]"></div>

# methacetin (13C)

- **generic name:** methacetin (13C)
- **ATC codes:** `V04CE03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Methacetin is a diagnostic agent used in tests for liver functional capacity. It is used as a diagnostic tool rather than a treatment, so it is given only when liver function testing is needed.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:51 | 4:24 | 0/0/0 | 0/0/0 | 0/0/0 | 18,631/827 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barstow_1990 | irrelevant | 1 | 0 | A narrative review mentioning methacetin only as a liver-function probe; no numeric PK parameters for methacetin-13c are reported. |
| popPK | Getchell_1993 | irrelevant | 0 | 0 | Study of olfactory mucus lectin binding in salamander; no methacetin_13c or PK parameters at all. |
| popPK | Gutowski_1991 | irrelevant | 0 | 0 | This is a flow cytometry study of erythrocyte surface changes with no pharmacokinetic parameters for methacetin_13c or any drug. |
| popPK | Ihne-Schubert_2024 | irrelevant | 2 | 1 | 13C-methacetin is used only as a diagnostic breath-test probe (PDRpeak) for liver function; no PK disposition parameters (CL, V, ka, half-life) for methacetin are reported, and numeric values live in supplementary tables not provided. |
| popPK | Iwasaki_1992 | irrelevant | 2 | 2 | Breath-test diagnostic study reporting only 13CO2 excretion peak/timing, not PK disposition parameters (CL, V, half-life) for methacetin. |
| popPK | Lock_2011 | irrelevant | 1 | 0 | 13C-methacetin is only used as a diagnostic LiMAx probe; the PK studied is tacrolimus, with no methacetin disposition parameters reported. |
| popPK | Primavesi_2023 | irrelevant | 0 | 0 | Guideline on preoperative liver function assessment; LiMAx (13C-methacetin) is only mentioned as a diagnostic test, no PK parameters for methacetin_13c are reported. |
| popPK | Sharma_2022 | irrelevant | 0 | 0 | Review of liver function tests mentioning methacetin breath test only as a diagnostic tool, with no PK parameters or numeric values. |
| popPK | Yamamoto_2021 | irrelevant | 0 | 0 | Review of liver function tests before hepatectomy; methacetin-13C is not the subject drug and no PK parameters are reported. |
| popPK | Zeng_1996 | irrelevant | 3 | 1 | Diagnostic breath-test review; no numeric PK parameter values present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
