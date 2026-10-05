<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;beinaglutide&quot;}]"></div>

# beinaglutide

- **generic name:** beinaglutide
- **ATC codes:** `A10BJ07`
- **DrugBank:** [DB15072](https://go.drugbank.com/drugs/DB15072) · **PubChem:** not captured
- **groups:** investigational

## About

Beinaglutide is a glucagon-like peptide-1 analogue being investigated as a blood glucose-lowering treatment for diabetes. It remains investigational and is not an approved medicine in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:18 | 0:35 | 0/0/0 | 0/0/0 | 0/0/0 | 28,473/180 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/9 | 10/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial for weight loss that does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for beinaglutide. |
| popPK | Ding_2021 | irrelevant | 0 | 0 | This is a clinical case report on the efficacy of beinaglutide for dumping syndrome, not a pharmacokinetic study, and it does not report quantitative disposition parameters (CL, V, etc.). |
| popPK | Gao_2022 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing weight loss outcomes and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for beinaglutide. |
| popPK | Liu_2023 | irrelevant | 1 | 0 | The paper is a clinical efficacy trial for type 2 diabetes and does not report pharmacokinetic disposition parameters (CL, V, Q, ka) or a PK model for beinaglutide. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study focuses on the effects of beinaglutide on visceral fat area and gut microbiota in obesity, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study is a clinical trial evaluating weight loss and inflammatory biomarkers, not a pharmacokinetic study, and reports no PK parameters (CL, V, t1/2, etc.) for beinaglutide. |
| popPK | Wen_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for weight loss in PCOS and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for beinaglutide. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The study is a clinical trial comparing weight loss outcomes of a diet versus beinaglutide, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for beinaglutide. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study focuses on the metabolic effects of beinaglutide on adipose tissue in mice and does not report pharmacokinetic parameters. |
| PD | Zhang_2021 | not_relevant | 0 | 0 | The study is a mechanistic pharmacology paper in mice comparing treated vs. vehicle groups; it does not report PK data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
