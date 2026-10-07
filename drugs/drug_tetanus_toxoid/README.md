<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07A&quot;,&quot;href&quot;:&quot;atc/J07A.md&quot;},{&quot;label&quot;:&quot;tetanus toxoid&quot;}]"></div>

# tetanus toxoid

- **generic name:** tetanus toxoid
- **ATC codes:** `J07AM01`, `J07AM51`
- **DrugBank:** [DB10583](https://go.drugbank.com/drugs/DB10583) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tetanus toxoid is a vaccine used to prevent tetanus, an infection caused by Clostridium tetani. It is widely used worldwide and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5861101](https://www.wikidata.org/wiki/Q5861101) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:21 | 9:52 | 0/0/0 | 1/0/0 | 0/0/0 | 164,531/2,215 | einfracz / qwen3.8-27b | 30 | 1/4 | 29/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chilimuri_2021_S1](drugs/drug_tetanus_toxoid/pd_Chilimuri_2021_S1.md) | SARS-CoV-2 Spike (S1) protein antibodies ← tetanus_toxoid · model not identified | — | Chilimuri S et al., BNT162b2 mRNA Vaccine Interference with…, The American journal of cas… (2021) | [10.12659/AJCR.933003](https://doi.org/10.12659/AJCR.933003) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 300 matched, 86 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Borgognone_2022 | irrelevant | 0 | 0 | The paper is a study on gut microbiome signatures in HIV patients and mentions tetanus-toxoid only as a comparator example of prior vaccination, with no pharmacokinetic data. |
| PGx | Brüggemann_2004 | not_relevant | 0 | 0 | The paper analyzes the genome sequence of the bacterium Clostridium tetani and does not report on human pharmacogenomics or PK/PD parameters of tetanus toxoid. |
| PGx | Desombere_1995 | not_relevant | 0 | 0 | The paper focuses on the immune mechanism of non-response to the Hepatitis B vaccine and uses tetanus toxoid only as a control for general immune function, without reporting pharmacogenomic effects on its PK/PD parameters. |
| PGx | Fanger_1997 | not_relevant | 0 | 0 | The paper investigates T-cell activation mechanisms and immune response variability, not pharmacokinetics or pharmacodynamics of tetanus toxoid as a drug. |
| popPK | Oguti_2022 | relevant | 4 | 6 | The study reports a quantitative half-life (28.7 days) for anti-tetanus toxoid antibodies in infants, which represents the decay kinetics of the specific immune response to the drug antigen, but it is not a standard PK study of the drug molecule itself (e.g., no clearance or volume of distribution for the toxin/toxoid). |
| popPK | Pool_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of anti-thymocyte globulin (ATGAM), not tetanus toxoid; tetanus is only mentioned incidentally regarding B-cell specificity. |
| PGx | Tamir_2007 | not_relevant | 0 | 0 | The paper concerns dendritic cell vaccination for colorectal cancer and does not involve tetanus toxoid or pharmacogenomic effects on its PK/PD. |
| PGx | Wit_2005 | not_relevant | 0 | 0 | The paper describes the efficacy of dendritic cell-based immunization with various antigens (including tetanus toxoid) in mice, focusing on immune response polarization, rather than investigating pharmacokinetic or pharmacodynamic parameters of tetanus toxoid in humans based on gene variants. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
