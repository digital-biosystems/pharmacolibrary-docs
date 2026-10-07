<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07B&quot;,&quot;href&quot;:&quot;atc/J07B.md&quot;},{&quot;label&quot;:&quot;dengue virus vaccines&quot;}]"></div>

# dengue virus vaccines

- **generic name:** dengue virus vaccines
- **ATC codes:** `J07BX04`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Dengue virus vaccines are used to protect against dengue fever, an infection caused by the dengue virus. They are classified as viral vaccines for systemic use and remain in use as an authorised vaccine class.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:40 | 1:01 | 0/0/0 | 0/0/0 | 0/0/0 | 72,164/962 | einfracz / qwen3.8-27b | 9 | 0/5 | 9/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dudášová_2021 | irrelevant | 0 | 0 | The paper describes a statistical method (PoDBAY) for estimating vaccine efficacy from immunogenicity data, not a pharmacokinetic study reporting disposition parameters like clearance or volume for dengue virus vaccines. |
| popPK | Durbin_2011 | irrelevant | 0 | 0 | The study focuses on the safety, immunogenicity, and viral replication (virology) of live attenuated dengue vaccines, but does not report pharmacokinetic disposition parameters (CL, V, ka, t1/2) or a compartmental PK model. |
| popPK | Guo_2024 | irrelevant | 0 | 0 | The study focuses on the production and immunogenicity of an inactivated dengue virus vaccine in mice, containing no pharmacokinetic or disposition parameters. |
| popPK | Kanesa-thasan_2001 | irrelevant | 0 | 0 | The study reports safety and immunogenicity (viremia, antibody titers) rather than pharmacokinetic parameters (CL, V, T1/2, ka). |
| popPK | Kraiselburd_1987 | irrelevant | 0 | 0 | The paper is a review of immunogenicity and attenuation studies in animals, containing no pharmacokinetic parameters or numeric disposition data. |
| popPK | Marangoni_2025 | irrelevant | 0 | 0 | The paper is a review of vaccine efficacy and immunogenicity (antibody titers), not a pharmacokinetic study, and reports no disposition parameters like clearance, volume, or half-life. |
| popPK | Minosse_2026 | irrelevant | 0 | 0 | The study assesses immunogenicity (antibody titers and T-cell responses) to the dengue vaccine, not pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Naderian_2025 | irrelevant | 0 | 0 | The paper is a systematic review of vaccine efficacy, safety, and immune response, not a pharmacokinetic study, and contains no PK parameter values. |
| popPK | Patel_2023 | irrelevant | 0 | 0 | The study is an immunogenicity and safety trial for the TAK-003 dengue vaccine, reporting antibody titers and adverse events, but contains no pharmacokinetic parameters (e.g., clearance, volume, half-life) for the vaccine virus or its components. |
| popPK | Sun_2009 | irrelevant | 0 | 0 | The paper is a clinical trial focusing on safety and immunogenicity (antibody titers) of the dengue vaccine, with no quantitative pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
